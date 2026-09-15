'use client'

import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { getStage } from '@/lib/stage'

const MODEL = '/model/amphora.glb'

/** Referentna boja gline s klijentovih fotografija. Ne mnozi albedo modela. */
export const CLAY = '#c08265'

/** Model je normaliziran na visinu 1,0 s pivotom u centru. */
const MODEL_H = 1

/**
 * Koliko svjetova stane u kadar ovisi o fov-u i udaljenosti kamere, pa se
 * poza iz `stage.ts` (razmjeri kadra) prevodi u world unite PO FRAMEU, iz
 * `state.viewport`. S apsolutnim jedinicama je isti potez na 390 px bacao
 * predmet izvan kadra, a na 2560 px ga ostavljao u sredini.
 */
const BASE_SCALE = 2.6

/** Koliko brzo predmet stigne u novu pozu. Voda nema trzaja. */
const EASE = 3.2

const lerp = THREE.MathUtils.lerp

export default function Mesh({ rich, still }: { rich: boolean; still: boolean }) {
  const group = useRef<THREE.Group>(null)
  const { nodes } = useGLTF(MODEL)
  const viewport = useThree((s) => s.viewport)

  /* Izgladene vrijednosti zive ODVOJENO od stagea: stage skoci na novu pozu
     cim scroll prijedje sav, a predmet do nje putuje. */
  const cur = useRef({ x: 0, y: 0, z: 1, tilt: 0, o: 0 })
  const spin = useRef(0)
  const intro = useRef(0)

  /** Geometrija i KLON materijala — GLTF je kesiran, original se ne dira. */
  const { geometry, material } = useMemo(() => {
    const mesh = Object.values(nodes).find((n) => (n as THREE.Mesh).isMesh) as THREE.Mesh
    const mat = (mesh.material as THREE.MeshStandardMaterial).clone()
    mat.roughness = 0.94
    mat.metalness = 0
    mat.envMapIntensity = 1.35
    /* Boju NE diramo. Model iz Higgsfielda nosi vlastiti, fotografirani
       albedo gline. Mnozenje s CLAY pa jos `convertSRGBToLinear()` je bila
       dvostruka konverzija: predmet je ispao tamnocrven i na krem sekcijama
       se citao kao silueta, ne kao glina. CLAY ostaje kao referenca za
       eventualni tint, ne kao mnozitelj. */
    mat.transparent = true
    mat.needsUpdate = true
    return { geometry: mesh.geometry, material: mat }
  }, [nodes])

  useFrame((state, dt) => {
    const g = group.current
    if (!g) return

    /* Na mobitelu i uz reduced-motion je frameloop 'demand': frame se crta
       samo kad padne `stage` event. Sve sto se izgladuje PO FRAMEU tada nikad
       ne stigne do cilja — kad scroll stane, stanu i frameovi, i predmet
       ostane na pola puta. Zato: gdje nema stalnog frameloopa, nema ni
       izgladivanja. (Ista zamka je vec jednom platjena u v3.) */
    const snap = still || !rich
    const k = snap ? 1 : Math.min(1, dt * EASE)

    const st = getStage()
    const c = cur.current
    c.x = lerp(c.x, st.x, k)
    c.y = lerp(c.y, st.y, k)
    c.z = lerp(c.z, st.z, k)
    c.tilt = lerp(c.tilt, st.tilt, k)
    c.o = lerp(c.o, st.o, k)

    if (intro.current < 1) intro.current = Math.min(1, intro.current + dt / 1.4)

    const halfW = viewport.width * 0.5
    const halfH = viewport.height * 0.5

    /* Skala se veze uz VISINU kadra, ne uz sirinu: na mobitelu je kadar uzak
       ali visok, pa bi vezanje uz sirinu dalo minijaturu. */
    const fit = THREE.MathUtils.clamp(viewport.height / 7.5, 0.42, 1.25)
    const s = BASE_SCALE * fit * c.z
    g.scale.setScalar(s)

    /* Predmet se drzi UNUTAR kadra i kad ga poza gura preko ruba: pusta se
       najvise pola tijela van, inace se cita kao greska, ne kao kadriranje. */
    const halfObj = (s * MODEL_H) / 2
    g.position.x = THREE.MathUtils.clamp(c.x * halfW, -halfW - halfObj * 0.5, halfW + halfObj * 0.5)
    g.position.y = THREE.MathUtils.clamp(c.y * halfH, -halfH - halfObj * 0.4, halfH - halfObj * 0.15)

    g.rotation.z = THREE.MathUtils.degToRad(c.tilt)
    /* Spori tumble oko svoje osi — predmet u vodi nije montiran na stalak.
       Na 'demand' frameloopu se okrece po scrollu, sto je i dalje bolje od
       ukocenog predmeta. */
    spin.current += snap ? 0.006 : dt * 0.14
    g.rotation.y = spin.current

    const io = snap ? 1 : intro.current
    material.opacity = c.o * io
    g.visible = material.opacity > 0.01
  })

  return (
    <group ref={group}>
      <mesh geometry={geometry} material={material} />
    </group>
  )
}

useGLTF.preload(MODEL)

'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import Mesh from './Mesh'
import { startStage } from '@/lib/stage'

export default function AmphoraCanvas() {
  /* Lazy inicijalizatori, ne efekt: komponenta se ucitava s ssr:false pa
     window postoji vec pri prvom renderu. Efekt bi izazvao kaskadni render. */
  const [rich] = useState(() => window.matchMedia('(min-width: 768px)').matches)
  const [still] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => startStage(), [])

  return (
    <div aria-hidden className="amph-canvas">
      <Canvas
        /* dpr 1 na mobitelu je bila greska, ne stednja. Telefon ima DPR 2-3, pa
           se predmet crtao u trecini razlucivosti i razvlacio natrag — na
           uredaju se doslovno vide pikseli. Chrome emulacija to ne pokazuje
           jer slaze rezultat na Retina ekran laptopa, u prozorcicu.
           Gornja granica 2: na DPR-3 telefonu je to cetvrtina fragmenata
           naspram punog 3, a razlika prema 3 se na 6" ne vidi. */
        dpr={rich ? [1, 1.5] : [1, 2]}
        /* Mobitel i reduced-motion crtaju samo kad se poza promijeni; desktop
           vrti trajni tumble. */
        frameloop={rich && !still ? 'always' : 'demand'}
        camera={{ position: [0, 0, 11], fov: 32 }}
        /* Antialias i na mobitelu: silueta amfore je kosa krivulja preko
           svijetle pozadine, a to je najgori slucaj za stepenice. Placa se
           samo na kadrovima koje 'demand' stvarno nacrta. */
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl, invalidate }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.05
          window.addEventListener('stage', () => invalidate())
        }}
      >
        <ambientLight intensity={0.8} color="#cfe0ea" />
        {/* Glavno svjetlo dolazi ODOZGO, s povrsine — to je ono sto glini daje rub */}
        <directionalLight position={[-2, 9, 3]} intensity={2.4} color="#fff6ea" />
        <directionalLight position={[5, 1, 4]} intensity={0.8} color="#d8b87f" />
        <directionalLight position={[-4, -3, -4]} intensity={0.35} color="#09334e" />

        {/* Proceduralni env — nijedan HDR s CDN-a. Svijetla ploca gore je
            povrsina mora i jedini razlog zasto glina hvata rub. */}
        <Environment resolution={rich ? 256 : 64}>
          <color attach="background" args={['#0a2438']} />
          <mesh scale={50}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshBasicMaterial color="#123551" side={THREE.BackSide} />
          </mesh>
          <mesh position={[0, 12, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[26, 26, 1]}>
            <planeGeometry />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[-11, 4, 8]} rotation={[0, 0.6, 0]} scale={[9, 20, 1]}>
            <planeGeometry />
            <meshBasicMaterial color="#f3e6d2" />
          </mesh>
          <mesh position={[12, -2, 6]} rotation={[0, -0.7, 0]} scale={[6, 16, 1]}>
            <planeGeometry />
            <meshBasicMaterial color="#3b6b8c" />
          </mesh>
        </Environment>

        <Mesh rich={rich} still={still} />
      </Canvas>
    </div>
  )
}

import * as THREE from 'three'

/**
 * KOVANI STALAK ZA AMFORU.
 *
 * Mjeren s klijentove fotografije proizvoda (`p-undersea-amphora.jpg`): amfora
 * stoji u kovanom trostalku na bacvi. NIJE kavez s dna mora — taj je bio u v3
 * i Petar je izricito rekao da se ne radi ponovno.
 *
 * Sto stalak cini prepoznatljivim, i sto zato mora biti u geometriji:
 *   - noge su SIPKE, ne profili: okrugli presjek, tanke
 *   - svaka noga dolje zavrsava SPIRALNOM STOPOM koja se uvija u ravnini poda
 *   - gore se noga izvija u VOLUTU (zavojnicu) koja gleda van
 *   - vodoravna KOVANA TRAKA na kojoj lezi konus amfore — plosnata, ne sipka
 *   - kratki TRN u sredini, ispod samog siljka
 *
 * Sve mjere su u JEDINICAMA MODELA AMFORE, gdje je amfora visoka 1,0 s
 * pivotom u sredini. Znaci: siljak je na y = -0,5, a pod na y = -0,62. Tako
 * stalak ostaje ispravan na svakoj sirini ekrana, jer se skalira istim
 * mnoziteljem kao i amfora.
 */

/** Pod na kojem stalak stoji, u jedinicama modela amfore. */
export const FLOOR = -0.62

/** Visina na kojoj traka grli konus. Malo iznad siljka (-0,5). */
const BAND_Y = -0.355
const BAND_R = 0.107

/** Koliko je sipka debela. */
const ROD = 0.0145

/**
 * Profil jedne noge, kao niz (radijus, visina).
 *
 * Cita se OD GORE prema dolje: volutа, pa ravni dio uz traku, pa izvijanje
 * prema podu, pa spiralna stopa. Krivulja je Catmull-Rom kroz ove tocke —
 * kovana sipka nema ravnih dijelova ni ostrih kutova, pa bi lomljena linija
 * odala da je CG.
 */
const LEG: Array<[number, number]> = [
  [0.126, -0.232], // vrh volute, gleda unutra
  [0.152, -0.258], // tjeme volute
  [0.150, -0.292], // volutа se vraca
  [0.112, -0.322], // spoj s trakom
  [0.116, -0.398],
  [0.144, -0.472],
  [0.186, -0.545],
  [0.224, -0.598],
  [0.243, FLOOR], // stopa dotakla pod
  // spiralna stopa — uvija se U RAVNINI PODA, zato y ostaje na podu
  [0.248, FLOOR - 0.004],
  [0.232, FLOOR - 0.009],
  [0.205, FLOOR - 0.007],
  [0.194, FLOOR + 0.002],
]

/**
 * Jedna noga kao cijev po krivulji, zarotirana na svoj kut.
 *
 * Stopa se ne uvija samo u radijusu nego i BOCNO, inace spirala izgleda kao da
 * je noga samo skracena. Bocni pomak raste prema kraju stope.
 */
function legGeometry(angle: number, segments: number): THREE.TubeGeometry {
  const pts = LEG.map(([r, y], i) => {
    // bocno uvijanje samo na zadnje cetiri tocke (stopa)
    const curl = i >= LEG.length - 4 ? (i - (LEG.length - 5)) * 0.028 : 0
    const a = angle + curl
    return new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r)
  })
  const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5)
  return new THREE.TubeGeometry(curve, segments, ROD, segments >= 40 ? 8 : 5, false)
}

/**
 * Kovana traka u kojoj sjedi konus.
 *
 * Torus je po zadanom u XY ravnini, pa se polaze vodoravno. Presjek mu se
 * rastegne po visini: kovana traka je PLOSNATA, a okrugli presjek bi se citao
 * kao jos jedna sipka, kojih stalak ima dovoljno.
 */
function bandGeometry(segments: number): THREE.TorusGeometry {
  const g = new THREE.TorusGeometry(BAND_R, 0.0155, segments >= 40 ? 8 : 5, segments)
  g.rotateX(Math.PI / 2)
  g.scale(1, 1.9, 1)
  g.translate(0, BAND_Y, 0)
  return g
}

/** Trn u sredini, ispod siljka. Kratak — nosi, ne drzi. */
function pinGeometry(): THREE.CylinderGeometry {
  const h = 0.085
  const g = new THREE.CylinderGeometry(ROD * 1.15, ROD * 1.35, h, 7)
  g.translate(0, FLOOR + h / 2, 0)
  return g
}

/**
 * Cijeli stalak kao JEDNA geometrija.
 *
 * Spojen je namjerno: cetiri noge, traka i trn kao sest mesheva su sest draw
 * callova po frameu za predmet koji se vidi na jednoj sekciji. Ovako je jedan.
 */
export function standGeometry(rich: boolean): THREE.BufferGeometry {
  const seg = rich ? 48 : 22
  const parts: THREE.BufferGeometry[] = []

  /* Cetiri noge. Kod njih su na fotografiji tri vidljive i cetvrta iza —
     cetiri su jer se stalak vrti u kadru i tri bi s neke strane pokazala
     prazninu. */
  for (let i = 0; i < 4; i++) {
    parts.push(legGeometry((i / 4) * Math.PI * 2 + Math.PI / 4, seg))
  }
  parts.push(bandGeometry(seg))
  parts.push(pinGeometry())

  const merged = mergeGeometries(parts)
  parts.forEach((g) => g.dispose())
  return merged
}

/**
 * Spajanje bez `BufferGeometryUtils`: taj ulaz vuce cijeli modul iz
 * `three/examples`, a ovdje treba samo pozicija + normala.
 */
function mergeGeometries(list: THREE.BufferGeometry[]): THREE.BufferGeometry {
  let vCount = 0
  let iCount = 0
  for (const g of list) {
    vCount += g.attributes.position.count
    iCount += g.index ? g.index.count : g.attributes.position.count
  }

  const pos = new Float32Array(vCount * 3)
  const nrm = new Float32Array(vCount * 3)
  const idx = new Uint32Array(iCount)

  let vo = 0
  let io = 0
  for (const g of list) {
    const p = g.attributes.position as THREE.BufferAttribute
    const n = g.attributes.normal as THREE.BufferAttribute
    pos.set(p.array as Float32Array, vo * 3)
    nrm.set(n.array as Float32Array, vo * 3)

    if (g.index) {
      const gi = g.index.array
      for (let k = 0; k < gi.length; k++) idx[io + k] = gi[k] + vo
      io += gi.length
    } else {
      for (let k = 0; k < p.count; k++) idx[io + k] = k + vo
      io += p.count
    }
    vo += p.count
  }

  const out = new THREE.BufferGeometry()
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  out.setAttribute('normal', new THREE.BufferAttribute(nrm, 3))
  out.setIndex(new THREE.BufferAttribute(idx, 1))
  return out
}

/**
 * Kovano zeljezo s fotografije: gotovo crno, ali NE mat. Cekić ostavi
 * facete koje hvataju svjetlo, pa metalnost mora biti visoka a hrapavost
 * srednja. Cisto mat crno bi se citalo kao plastika.
 */
export const IRON = {
  color: '#2b2724',
  roughness: 0.52,
  metalness: 0.72,
  envMapIntensity: 0.9,
}

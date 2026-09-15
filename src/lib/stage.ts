/**
 * POZORNICA v2 — gdje je amfora na kojoj sekciji.
 *
 * v3 je imao jednu os: amfora je PADALA, a `descent.ts` je govorio koliko
 * duboko. Ovdje toga nema. Amfora PUTUJE: lijevo, desno, blizu, daleko, gore,
 * dolje — i mora se vidjeti na svakoj sekciji, pored teksta ili preko njega,
 * nikad iza.
 *
 * Sekcija deklarira `data-act`. Ovdje stoji poza za svaki act, a poze se
 * interpoliraju na SAVU izmedju sekcija, ne kroz cijelu sekciju. Razlog:
 * predmet koji se mice cijelo vrijeme dok citas odlomak je smetnja. Predmet
 * koji stoji dok citas i premjesti se dok prelazis na sljedecu sekciju je
 * koreografija.
 *
 * Objavljuje se na dva nacina:
 *   1. CSS varijable na <html> — `--amph-lane` sekcijama govori s koje strane
 *      da se maknu, `--amph-o` je vidljivost. Cisti CSS, bez re-rendera.
 *   2. modul-store koji `Mesh` cita u useFrameu — x, y, scale, tilt u 3D-u.
 *
 * Postaje se MJERE u DOM-u, ne racunaju iz fiksnih postotaka scrolla: visina
 * sekcije ovisi o sadrzaju, fontu i sirini. Zakovane granice se raziđu s onim
 * sto je na ekranu cim se doda jedna recenica.
 */

export type Lane = 'l' | 'r' | 't' | 0

export type Act = 'hero' | 'story' | 'wines' | 'press' | 'trophies' | 'footer'

export type Pose = {
  /** vodoravno, kao razmjer POLUSIRINE kadra: -1 lijevi rub, +1 desni */
  x: number
  /** okomito, kao razmjer POLUVISINE kadra: +1 vrh, -1 dno */
  y: number
  /** blizina: 1 je nominalna, <1 daleko, >1 pred kamerom */
  z: number
  /** nagib u stupnjevima, oko osi Z */
  tilt: number
  /** vidljivost */
  o: number
  /**
   * Koju traku predmet zauzima, da mu sekcija makne tekst s puta:
   * 'l' lijevu, 'r' desnu, 't' gornju (predmet lebdi IZNAD sadrzaja),
   * 0 nijednu. Ovo je cijena odluke da amfora putuje i na mobitelu — bez
   * rezervirane trake sjedne preko odlomka, sto je u v3 izmjereno na 29 %
   * teksta. Traka se cita staticki iz tablice, ne mijenja se u scrollu:
   * padding koji se mijenja usred scrolla je reflow na svakom frameu.
   */
  lane: Lane
}

/** Desktop: ima bocnog prostora, predmet smije biti velik i ici preko ruba. */
const WIDE: Record<Act, Pose> = {
  hero:     { x:  0.00, y: -0.10, z: 1.00, tilt: -24, o: 0,    lane: 0   },
  story:    { x:  0.62, y:  0.16, z: 1.35, tilt:   8, o: 1,    lane: 'r' },
  wines:    { x: -0.72, y:  0.40, z: 0.50, tilt: -14, o: 0.85, lane: 'l' },
  press:    { x:  0.48, y: -0.34, z: 2.10, tilt:  17, o: 1,    lane: 'r' },
  trophies: { x: -0.66, y:  0.46, z: 0.38, tilt:  -6, o: 0.8,  lane: 'l' },
  footer:   { x:  0.00, y: -0.05, z: 0.95, tilt:   0, o: 1,    lane: 0   },
}

/**
 * Uski ekran. Petar je 2026-09-15 odlucio da amfora putuje i ovdje, punom
 * snagom — suprotno mjerenju iz v3. Poze su zato iste PO KARAKTERU (lijevo,
 * desno, blizu, daleko), ali:
 *   - manji `z`, jer je poluvisina kadra manja i predmet brze izađe van
 *   - svaka poza ima `lane`, pa sekcija sama suzi tekst na drugu stranu
 * Nijedna poza nema `lane: 0` osim heroja i footera, gdje teksta ionako nema
 * sa strane.
 */
const NARROW: Record<Act, Pose> = {
  hero:     { x:  0.00, y:  0.30, z: 0.70, tilt: -18, o: 0,    lane: 0   },
  story:    { x:  0.52, y:  0.30, z: 0.80, tilt:   8, o: 1,    lane: 'r' },
  wines:    { x: -0.70, y:  0.62, z: 0.40, tilt: -14, o: 0.85, lane: 't' },
  press:    { x:  0.44, y: -0.30, z: 1.25, tilt:  16, o: 1,    lane: 'r' },
  trophies: { x: -0.50, y:  0.48, z: 0.34, tilt:  -6, o: 0.8,  lane: 't' },
  footer:   { x:  0.00, y:  0.02, z: 0.72, tilt:   0, o: 1,    lane: 't' },
}

/**
 * Trake se citaju i na posluzitelju, da sekcija dobije svoju klasu vec u HTML-u.
 * Mijenja se samo na resizeu preko breakpointa, nikad u scrollu.
 */
export const LANE_NARROW: Record<Act, Lane> = {
  hero: NARROW.hero.lane, story: NARROW.story.lane, wines: NARROW.wines.lane,
  press: NARROW.press.lane, trophies: NARROW.trophies.lane, footer: NARROW.footer.lane,
}
export const LANE_WIDE: Record<Act, Lane> = {
  hero: WIDE.hero.lane, story: WIDE.story.lane, wines: WIDE.wines.lane,
  press: WIDE.press.lane, trophies: WIDE.trophies.lane, footer: WIDE.footer.lane,
}

/** Ista granica kao u CSS-u (`--bp-wide`). Ako se mijenja, mijenja se na oba mjesta. */
export const BREAKPOINT_WIDE = 1000

export type Stage = Pose & { act: Act }

const state: Stage = { ...NARROW.hero, act: 'hero' }
export const getStage = (): Stage => state

let raf = 0
let started = false

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n)
/** smoothstep — predmet u vodi nema trzaja ni na pocetku ni na kraju poteza */
const ease = (t: number) => t * t * (3 - 2 * t)

/**
 * Predmet DRZI pozu kroz sredinu sekcije i premjesta se na savu.
 * HOLD je udio sekcije u kojem se ne mice.
 */
const HOLD_UNTIL = 0.55
const HANDOVER = 0.4

const measure = () => {
  raf = 0

  const table = window.innerWidth >= BREAKPOINT_WIDE ? WIDE : NARROW
  /* PAZI: selektor mora biti UZI od `[data-act]`. Stanje se objavljuje na
     <html>, pa je goli `[data-act]` hvatao i sam <html> kao prvu "sekciju" —
     element visok kao cijeli dokument, koji uvijek zadovolji prvi uvjet u
     petlji. Rezultat je bila povratna petlja: pozornica je citala ono sto je
     sama maloprije napisala i amfora se nije micala s prve poze.
     Objava zato ide pod `data-stage-act`, a ovdje se traze samo sekcije. */
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>('section[data-act], footer[data-act]'),
  )
  if (nodes.length === 0) return

  /* Referentna tocka je SREDINA kadra, ne vrh: sekcija "drzi" predmet dok je
     ona ono sto gledas, a ne dok joj je vrh slucajno na nuli. */
  const mid = window.scrollY + window.innerHeight * 0.5

  let i = 0
  let t = 1
  for (let n = 0; n < nodes.length; n++) {
    const el = nodes[n]
    const top = el.offsetTop
    const bottom = top + el.offsetHeight
    if (mid < bottom) {
      i = n
      t = clamp01((mid - top) / Math.max(1, el.offsetHeight))
      break
    }
    i = n
    t = 1
  }

  const from = table[(nodes[i].dataset.act as Act) ?? 'hero']
  const nextEl = nodes[Math.min(i + 1, nodes.length - 1)]
  const to = table[(nextEl.dataset.act as Act) ?? 'footer']

  const e = ease(clamp01((t - HOLD_UNTIL) / HANDOVER))

  state.act = (nodes[i].dataset.act as Act) ?? 'hero'
  state.x = lerp(from.x, to.x, e)
  state.y = lerp(from.y, to.y, e)
  state.z = lerp(from.z, to.z, e)
  state.tilt = lerp(from.tilt, to.tilt, e)
  state.o = lerp(from.o, to.o, e)
  /* Traka se NE interpolira. Pola trake nije ni jedno ni drugo, a sekcija
     koja mijenja padding usred scrolla se trza. Prebacuje se na polovici
     predaje, kad je predmet ionako u pokretu. */
  state.lane = e < 0.5 ? from.lane : to.lane

  const root = document.documentElement
  root.style.setProperty('--amph-o', state.o.toFixed(3))
  root.dataset.lane = state.lane === 0 ? 'none' : state.lane
  root.dataset.stageAct = state.act

  window.dispatchEvent(new Event('stage'))
}

const request = () => {
  if (!raf) raf = requestAnimationFrame(measure)
}

let ro: ResizeObserver | null = null

export function startStage() {
  if (started) return () => {}
  started = true

  window.addEventListener('scroll', request, { passive: true })
  window.addEventListener('resize', request)

  /* SCROLL I RESIZE NISU DOVOLJNI.
     Postaje se mjere iz DOM-a, pa svaka promjena visine dokumenta pomakne
     granice pod nogama: lijena slika ispod ekrana se dovrsi, sekcije skliznu
     nize, a posljednje izmjereno stanje ostane ustajalo sve do sljedeceg
     scrolla. Tko u tom trenutku stoji na mjestu gleda pogresnu pozu.
     Uhvaceno na produkciji 2026-09-16: `wines` i `trophies` su javljali pozu
     prethodne sekcije dok se slike nisu ucitale.

     Zato jos dva okidaca:
       - `load`, za zadnje resurse koji dodu nakon prvog painta
       - ResizeObserver nad <body>, koji hvata SVAKU promjenu visine, bez
         obzira sto ju je izazvalo (slika, font, otvoren <details> izbornik) */
  window.addEventListener('load', request)

  /* Nema povratne petlje: `measure` pise samo `--amph-o` i `data-*` na <html>,
     a nista od toga ne ulazi u raspored. Ako se ikad pojavi CSS koji po
     `[data-lane]` mijenja visinu, ovaj promatrac postaje beskonacna petlja —
     tada trake moraju ostati staticke klase, kako i jesu zamisljene. */
  if (typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(request)
    ro.observe(document.body)
  }

  measure()

  return () => {
    started = false
    window.removeEventListener('scroll', request)
    window.removeEventListener('resize', request)
    window.removeEventListener('load', request)
    ro?.disconnect()
    ro = null
    if (raf) cancelAnimationFrame(raf)
    raf = 0
  }
}

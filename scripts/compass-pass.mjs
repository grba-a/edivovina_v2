/* Kompas u heroju, u PRAVOM WebKitu.
   Pitanja na koja mora odgovoriti:
   1. vidi li se uopce (prosla dva pokusaja su PALA jer je crtez zavrsio ispod
      zastora, a bijel je i prosjecno 24 % neproziran),
   2. VRTI li se stvarno — ne „ima li animaciju" nego mijenja li se matrica,
   3. hvata li dodir namijenjen gumbima,
   4. prelijeva li se,
   5. stane li uz prefers-reduced-motion, ali OSTANE vidljiv. */
import { webkit } from 'playwright'

const SIZES = [[360, 640], [390, 844], [430, 932], [1440, 900]]
const b = await webkit.launch()
let bad = 0

for (const [w, h] of SIZES) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2, isMobile: w < 768, hasTouch: w < 768 })
  const p = await ctx.newPage()
  const errs = []
  p.on('pageerror', (e) => errs.push(String(e).slice(0, 80)))
  await p.goto('http://localhost:4300/', { waitUntil: 'networkidle' })
  await p.waitForTimeout(600)

  const r = await p.evaluate(async () => {
    const box = document.querySelector('.hero-compass')
    if (!box) return { miss: true }
    const img = box.querySelector('.compass')
    const amph = box.querySelector('.amph')
    const cs = getComputedStyle(box)
    const scrim = getComputedStyle(document.querySelector('.hero-scrim'))
    const inner = getComputedStyle(document.querySelector('.hero-in'))

    /* Vrti li se STVARNO: dvije matrice razmaknute u vremenu. */
    const m0 = getComputedStyle(img).transform
    const a0 = getComputedStyle(amph).transform
    await new Promise((r) => setTimeout(r, 900))
    const m1 = getComputedStyle(img).transform
    const a1 = getComputedStyle(amph).transform
    const anims = img.getAnimations().map((a) => ({ state: a.playState, dur: a.effect.getTiming().duration }))

    /* Hvata li dodir: sto je na sredini prvog gumba? */
    const btn = document.querySelector('.hero-ctas a')
    let hit = null
    if (btn) {
      const q = btn.getBoundingClientRect()
      const el = document.elementFromPoint(q.left + q.width / 2, q.top + q.height / 2)
      hit = el ? (el.closest('.hero-ctas a') ? 'gumb' : el.className || el.tagName) : 'nista'
    }

    const ir = img.getBoundingClientRect()
    return {
      opacity: cs.opacity,
      zCompass: cs.zIndex, zScrim: scrim.zIndex, zText: inner.zIndex,
      m0, m1, spins: m0 !== m1,
      /* Amfora MIRUJE: dijeli celiju s kompasom, pa bi je nasljedena
         animacija povukla sa sobom i proizvod bi se vrtio naglavce. */
      amphMiruje: a0 === a1,
      /* NE `elementFromPoint`: cijeli sloj je `pointer-events: none`, pa
         pogodak uvijek vrati ono ispod njega i mjera bi uvijek pala.
         Slaganje unutar iste celije odlucuju z-index pa DOM red. */
      amphIznad: (() => {
        const zc = getComputedStyle(img).zIndex, za = getComputedStyle(amph).zIndex
        const n = (v) => (v === 'auto' ? 0 : +v)
        return n(za) !== n(zc)
          ? n(za) > n(zc)
          : !!(img.compareDocumentPosition(amph) & Node.DOCUMENT_POSITION_FOLLOWING)
      })(),
      amphLoaded: amph.complete && amph.naturalWidth > 0,
      anims,
      pe: cs.pointerEvents,
      hit,
      imgW: Math.round(ir.width), imgH: Math.round(ir.height),
      loaded: img.complete && img.naturalWidth > 0,
      src: img.currentSrc.split('?')[0].slice(-60),
      overflow: document.documentElement.scrollWidth - innerWidth,
    }
  })

  const ok = !r.miss && r.spins && r.amphMiruje && r.amphIznad && r.amphLoaded && r.loaded && r.hit === 'gumb' && r.overflow <= 0 && +r.zCompass > +r.zScrim && +r.zText > +r.zCompass
  if (!ok) bad++
  console.log(`${ok ? 'OK ' : 'PAD'} ${w}px  vrti:${r.spins} amforaMiruje:${r.amphMiruje} amforaIznad:${r.amphIznad} ucitan:${r.loaded && r.amphLoaded} z:${r.zScrim}/${r.zCompass}/${r.zText} klik:${r.hit} ${r.imgW}x${r.imgH} preljev:${r.overflow} ${r.anims?.map((a) => a.state + '/' + a.dur + 'ms').join(',')}`)
  if (errs.length) { console.log('   greske: ' + errs.join(' | ')); bad++ }

  await p.screenshot({ path: `/private/tmp/claude-501/-Users-grbaa/bb9d8a4c-4cdf-4386-9697-b05e69c4addf/scratchpad/compass-${w}.png` })
  await ctx.close()
}

/* reduced-motion: stane, ali se VIDI */
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, reducedMotion: 'reduce' })
const p = await ctx.newPage()
await p.goto('http://localhost:4300/', { waitUntil: 'networkidle' })
await p.waitForTimeout(400)
const rm = await p.evaluate(async () => {
  const img = document.querySelector('.hero-compass .compass')
  const m0 = getComputedStyle(img).transform
  await new Promise((r) => setTimeout(r, 700))
  return { stao: m0 === getComputedStyle(img).transform, vidljiv: getComputedStyle(img).opacity }
})
console.log(`${rm.stao && +rm.vidljiv > 0 ? 'OK ' : 'PAD'} reduced-motion  stao:${rm.stao} vidljiv:${rm.vidljiv}`)
if (!(rm.stao && +rm.vidljiv > 0)) bad++
await b.close()
console.log(bad ? `\n${bad} PROBLEMA` : '\nsve prolazi')

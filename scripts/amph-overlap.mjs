/* KOJI TEKST AMFORA PREKRIVA, kroz cijeli skrol naslovnice.
   Mjeri se RAZLIKOM dva snimka — s amforom i bez nje — jer je amfora WebGL
   canvas preko cijelog kadra i iz DOM-a joj se granice ne mogu procitati.
   Piksel koji se razlikuje je amfora; ako takav piksel padne na okvir nekog
   retka teksta, taj redak je prekriven. */
import { webkit } from 'playwright'
import sharp from 'sharp'

/* VRTNJA SE GASI ZA MJERENJE (`reducedMotion: 'reduce'`). Bez toga predmet
   kroz svaki prolaz stoji pod drugim kutom, pa ista postavka da jednom 9, a
   drugi put 12 prekrivenih redaka — i razlika izmedu dvije poze se izgubi u
   tom sumu. Uz reduce poza je determinirana. */

const KORAK = 0.5          // pola kadra po koraku
const PRAG = 30            // razlika boje koja se racuna kao amfora
const b = await webkit.launch()

const SIRINE = process.env.SIRINE ? JSON.parse(process.env.SIRINE) : [[390, 844], [1024, 768], [1440, 900]]
for (const [w, h] of SIRINE) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, isMobile: w < 768, hasTouch: w < 768, reducedMotion: 'reduce' })
  const p = await ctx.newPage()
  await p.goto('http://localhost:4300/hr', { waitUntil: 'networkidle' })
  await p.addStyleTag({ content: 'html.__noamph .amph-canvas{display:none!important}' })
  await p.waitForTimeout(600)
  const ukupno = await p.evaluate(() => document.body.scrollHeight)
  const nalazi = new Map()

  for (let y = 0; y < ukupno - h; y += Math.round(h * KORAK)) {
    await p.evaluate((y) => scrollTo(0, y), y)
    await p.waitForTimeout(650)
    const redci = await p.evaluate(() =>
      [...document.querySelectorAll('h1,h2,h3,p,li,a,.eyebrow')]
        .filter((e) => e.textContent.trim() && e.offsetParent !== null)
        .map((e) => { const r = e.getBoundingClientRect(); return { t: e.textContent.trim().slice(0, 42), x: r.left, y: r.top, w: r.width, h: r.height } })
        .filter((r) => r.y > -r.h && r.y < innerHeight && r.w > 0))
    if (!redci.length) continue

    const sa = await p.screenshot()
    await p.evaluate(() => document.documentElement.classList.add('__noamph'))
    await p.waitForTimeout(180)
    const bez = await p.screenshot()
    await p.evaluate(() => document.documentElement.classList.remove('__noamph'))
    await p.waitForTimeout(120)

    const A = await sharp(sa).raw().toBuffer({ resolveWithObject: true })
    const B = await sharp(bez).raw().toBuffer({ resolveWithObject: true })
    const { width: W, height: H, channels: C } = A.info
    for (const r of redci) {
      const x0 = Math.max(0, Math.round(r.x)), x1 = Math.min(W, Math.round(r.x + r.w))
      const y0 = Math.max(0, Math.round(r.y)), y1 = Math.min(H, Math.round(r.y + r.h))
      let pogodaka = 0, svih = 0
      for (let yy = y0; yy < y1; yy += 2) for (let xx = x0; xx < x1; xx += 2) {
        const i = (yy * W + xx) * C; svih++
        if (Math.abs(A.data[i] - B.data[i]) + Math.abs(A.data[i + 1] - B.data[i + 1]) + Math.abs(A.data[i + 2] - B.data[i + 2]) > PRAG) pogodaka++
      }
      if (!svih) continue
      const udio = pogodaka / svih
      if (udio > 0.06 && udio > (nalazi.get(r.t)?.udio ?? 0)) nalazi.set(r.t, { udio, y })
    }
  }
  console.log(`\n${w}px — ${nalazi.size ? nalazi.size + ' redaka koje amfora prekriva' : 'nijedan redak nije prekriven'}`)
  ;[...nalazi.entries()].sort((a, c) => c[1].udio - a[1].udio).slice(0, 6)
    .forEach(([t, v]) => console.log(`   ${String(Math.round(v.udio * 100)).padStart(3)}%  „${t}"  (scrollY ${v.y})`))
  await ctx.close()
}
await b.close()

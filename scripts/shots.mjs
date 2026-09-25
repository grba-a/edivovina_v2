/* Snimke u PRAVOM WebKitu. Petar, 2026-09-24: „koristi playwright, nemoj na
   slijepo raditi". Ovo je za gledanje, `subpages-pass.mjs` je za mjerenje. */
import { webkit } from 'playwright'
import fs from 'node:fs'

const OUT = '/private/tmp/claude-501/-Users-grbaa/bb9d8a4c-4cdf-4386-9697-b05e69c4addf/scratchpad/shots'
fs.mkdirSync(OUT, { recursive: true })

const PAGES = process.argv.slice(2)
if (!PAGES.length) { console.error('daj rute'); process.exit(1) }
const SIZES = [['m', 390, 844], ['d', 1440, 900]]

const b = await webkit.launch()
for (const [tag, w, h] of SIZES) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, isMobile: w < 768, hasTouch: w < 768 })
  for (const route of PAGES) {
    const p = await ctx.newPage()
    await p.goto('http://localhost:4300' + route, { waitUntil: 'networkidle' })
    await p.waitForTimeout(1200)
    const name = (route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-'))
    await p.screenshot({ path: `${OUT}/${name}-${tag}.png`, fullPage: true })
    const hgt = await p.evaluate(() => document.documentElement.scrollHeight)
    console.log(`${name}-${tag}`.padEnd(26), w + 'x' + h, '| visina', hgt)
    await p.close()
  }
  await ctx.close()
}
await b.close()

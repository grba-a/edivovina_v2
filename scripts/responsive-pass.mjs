/* Sve rute × sve sirine, u PRAVOM WebKitu.
   320/360/390/430 telefoni · 768 tablet · 1024 · 1440 desktop.
   Trazi: prelijevanje, dodirne mete < 44 px, greske, visinu H1, canvas na
   podstranici, i tekst koji izlazi iz svog okvira. */
import { webkit } from 'playwright'

const ROUTES = [
  '/', '/shop', '/product/navis-mysterium-undersea-amphora', '/about-us', '/visit-us',
  '/gallery', '/news-stories', '/news/vogue-adria-underwater-wine-cellars', '/contact',
  '/terms-conditions', '/privacy-policy', '/cookie-policy', '/return-refund-policy',
  '/shipping-cancellation-policy', '/disclaimer',
]
const SIZES = [[320, 568], [360, 640], [390, 844], [430, 932], [768, 1024], [1024, 768], [1440, 900]]

const b = await webkit.launch()
let bad = 0, checks = 0
for (const [w, h] of SIZES) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2, isMobile: w < 768, hasTouch: w < 768 })
  const flags = []
  for (const route of ROUTES) {
    const p = await ctx.newPage()
    const errs = []
    p.on('pageerror', (e) => errs.push(String(e).slice(0, 60)))
    await p.goto('http://localhost:4300' + route, { waitUntil: 'networkidle' })
    await p.waitForTimeout(500)
    const r = await p.evaluate(() => {
      const over = [...document.querySelectorAll('body *')]
        .map((el) => ({ el, r: el.getBoundingClientRect() }))
        .filter(({ el, r }) => {
          if (r.right <= innerWidth + 1) return false
          // Element U fiksnom pretku ne siri dokument. Prva verzija skripte je
          // preskakala samo one koji su SAMI fixed, pa je prijavljivala
          // zatvoreni <details> izbornik u headeru kao prelijevanje na 772 px —
          // a `documentElement.scrollWidth` je bio tocno 768.
          for (let n = el; n; n = n.parentElement) {
            const q = getComputedStyle(n).position
            if (q === 'fixed') return false
          }
          return !el.classList.contains('hero-bg') && !el.classList.contains('hero-sub-bg')
            && !el.classList.contains('cta-bg')
        })
        .slice(0, 2).map(({ el, r }) => el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0] + '@' + Math.round(r.right))
      const small = [...document.querySelectorAll('a,button,summary,input,textarea,select')]
        .map((el) => ({ el, r: el.getBoundingClientRect() }))
        .filter(({ r }) => r.width > 0 && r.height > 0 && (r.height < 44 || r.width < 24))
        .slice(0, 2).map(({ el, r }) => (el.className ? '.' + String(el.className).split(' ')[0] : el.tagName.toLowerCase()) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height))
      // tekst koji strsi iz svog okvira
      const spill = [...document.querySelectorAll('h1,h2,h3,p,strong,address,time')]
        .filter((el) => el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflow === 'visible')
        .slice(0, 2).map((el) => el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0])
      return { over, small, spill, h1: document.querySelectorAll('h1').length,
        canvas: document.querySelectorAll('canvas').length,
        docW: document.documentElement.scrollWidth }
    })
    checks++
    const f = []
    if (r.docW > w + 1) f.push('SIRINA ' + r.docW)
    if (r.over.length) f.push('PRELIJEVA ' + r.over.join(','))
    if (r.small.length) f.push('META ' + r.small.join(','))
    if (r.spill.length) f.push('TEKST STRSI ' + r.spill.join(','))
    if (errs.length) f.push('GRESKA ' + errs[0])
    if (route !== '/' && r.canvas) f.push('AMFORA')
    if (r.h1 !== 1) f.push('H1 x' + r.h1)
    if (f.length) { flags.push('  ' + route.padEnd(44) + f.join(' | ')); bad++ }
    await p.close()
  }
  console.log(`${w}x${h}`.padEnd(10), flags.length ? flags.length + ' NALAZA' : 'ok')
  flags.forEach((l) => console.log(l))
  await ctx.close()
}
await b.close()
console.log(`\n${checks} provjera (${ROUTES.length} ruta × ${SIZES.length} sirina) — nalaza: ${bad}`)

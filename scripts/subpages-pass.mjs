/* Prolaz kroz sve rute u PRAVOM WebKitu, ne u Chromeovoj emulaciji.
   Provjerava: prelijevanje, dodirne mete < 44 px, greske, i da amfora
   (canvas + three.js) NE postoji ni na jednoj podstranici. */
import { webkit } from 'playwright'

const ROUTES = [
  '/', '/shop', '/product/navis-mysterium-undersea-amphora',
  '/product/navis-mysterium-undersea-bottle', '/about-us', '/visit-us',
  '/gallery', '/news-stories', '/news/vogue-adria-underwater-wine-cellars', '/news/pieces-of-eight', '/contact', '/terms-conditions',
  '/privacy-policy', '/cookie-policy', '/return-refund-policy',
  '/shipping-cancellation-policy', '/disclaimer',
]
const [W, H] = [390, 844]
const b = await webkit.launch()
const ctx = await b.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2, isMobile: true, hasTouch: true })

let worst = 0
for (const route of ROUTES) {
  const p = await ctx.newPage()
  let bytes = 0, three = 0
  p.on('response', (r) => {
    const len = Number(r.headers()['content-length'] || 0)
    bytes += len
    if (/three|amphora\.glb/i.test(r.url())) three += len || 1
  })
  const errs = []
  p.on('pageerror', (e) => errs.push(String(e).slice(0, 70)))
  await p.goto('http://localhost:4300' + route, { waitUntil: 'networkidle' })
  await p.waitForTimeout(900)

  const r = await p.evaluate(() => {
    const over = [...document.querySelectorAll('body *')]
      .map((el) => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ el, r }) => r.right > innerWidth + 1 && getComputedStyle(el).position !== 'fixed' && !el.classList.contains('hero-bg'))
      .slice(0, 3)
      .map(({ el, r }) => el.tagName.toLowerCase() + '.' + String(el.className).split(' ')[0] + '@' + Math.round(r.right))
    const small = [...document.querySelectorAll('a,button,summary,input,textarea')]
      .map((el) => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ r }) => r.width > 0 && r.height > 0 && (r.height < 44 || r.width < 24))
      .slice(0, 3)
      .map(({ el, r }) => (el.className ? '.' + String(el.className).split(' ')[0] : el.tagName.toLowerCase()) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height))
    return { over, small, canvas: document.querySelectorAll('canvas').length, imgs: document.images.length, h1: document.querySelectorAll('h1').length }
  })

  const flag = []
  if (r.over.length) flag.push('PRELIJEVA ' + r.over.join(','))
  if (r.small.length) flag.push('META ' + r.small.join(','))
  if (errs.length) flag.push('GRESKA ' + errs[0])
  if (route !== '/' && (r.canvas || three)) flag.push('AMFORA NA PODSTRANICI')
  if (r.h1 !== 1) flag.push('H1 x' + r.h1)
  if (flag.length) worst++

  console.log(
    route.padEnd(44),
    String(Math.round(bytes / 1024)).padStart(5) + ' kB',
    ('img ' + r.imgs).padStart(8),
    flag.length ? '  ' + flag.join(' | ') : '  ok',
  )
  await p.close()
}
await b.close()
console.log('\nstranica s nalazom:', worst, 'od', ROUTES.length)

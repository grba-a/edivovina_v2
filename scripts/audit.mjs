import { webkit } from 'playwright'

const URL = 'http://localhost:4300'
const WIDTHS = [360, 390, 430]
const SHOTS = '.shots'

const browser = await webkit.launch()
const report = []

for (const w of WIDTHS) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  })
  const page = await ctx.newPage()
  const errors = []
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text().slice(0, 120)) })
  page.on('pageerror', e => errors.push('PAGEERROR ' + String(e).slice(0, 120)))

  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1800)

  const found = await page.evaluate(async () => {
    const out = {}

    // 1) vodoravni prelijev — stranica NIKAD ne smije ici u stranu
    out.scrollW = document.documentElement.scrollWidth
    out.innerW = innerWidth
    out.overflowsX = document.documentElement.scrollWidth > innerWidth + 1

    // koji element strsi
    out.wide = [...document.querySelectorAll('body *')]
      .map(el => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ el, r }) => r.right > innerWidth + 1 && getComputedStyle(el).position !== 'fixed'
        && !el.classList.contains('hero-compass') && !el.classList.contains('hero-bg'))
      .slice(0, 5)
      .map(({ el, r }) => el.tagName + '.' + String(el.className).split(' ')[0] + ' right:' + Math.round(r.right))

    // 2) vrti li se kompas STVARNO (tab je ovdje vidljiv, za razliku od okna)
    const a = document.getAnimations().find(x => x.animationName === 'compass-turn')
    const c1 = a ? a.currentTime : null
    await new Promise(r => setTimeout(r, 900))
    out.compass = a
      ? { dur: a.effect.getTiming().duration, napredovala: Math.round(a.currentTime - c1) + 'ms', state: a.playState }
      : 'NEMA'

    // 3) dodirne mete ispod 44 px (Apple HIG minimum)
    out.smallTargets = [...document.querySelectorAll('a, button, summary, [role=button]')]
      .map(el => ({ el, r: el.getBoundingClientRect() }))
      .filter(({ r }) => r.width > 0 && r.height > 0 && (r.height < 44 || r.width < 44))
      .slice(0, 8)
      .map(({ el, r }) => (el.textContent || el.tagName).trim().slice(0, 26) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height))

    // 4) amfora po sekcijama, i lezi li ikad na tekstu
    out.acts = []
    for (const s of document.querySelectorAll('section[data-act], footer[data-act]')) {
      window.scrollTo({ top: Math.max(0, s.offsetTop + s.offsetHeight * 0.5 - innerHeight * 0.5), behavior: 'instant' })
      await new Promise(r => setTimeout(r, 950))
      const d = document.documentElement
      out.acts.push({
        act: s.dataset.act,
        stage: d.dataset.stageAct,
        o: d.style.getPropertyValue('--amph-o'),
        sloj: d.dataset.amph,
        vis: getComputedStyle(document.querySelector('.amph-canvas')).visibility,
      })
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    return out
  })

  // screenshot heroja i jedne krem sekcije
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${SHOTS}/w${w}-hero.png` })
  await page.evaluate(() => {
    const s = document.querySelector('[data-act=story]')
    window.scrollTo({ top: s.offsetTop + s.offsetHeight * 0.4 - innerHeight * 0.5, behavior: 'instant' })
  })
  await page.waitForTimeout(700)
  await page.screenshot({ path: `${SHOTS}/w${w}-story.png` })

  report.push({ width: w, errors, ...found })
  await ctx.close()
}

await browser.close()
console.log(JSON.stringify(report, null, 1))

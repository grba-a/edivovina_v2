import { webkit } from 'playwright'
const SIZES = [[320,568],[360,640],[360,780],[390,844],[430,932],[768,1024],[1024,768],[1440,900]]
const b = await webkit.launch()
for (const [w,h] of SIZES) {
  const ctx = await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:2,isMobile:w<768,hasTouch:w<768})
  const p = await ctx.newPage()
  let bytes = 0, imgBytes = 0
  p.on('response', async r => {
    try { const len = Number(r.headers()['content-length']||0); bytes += len
      if ((r.headers()['content-type']||'').startsWith('image')) imgBytes += len } catch {}
  })
  const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,80)))
  await p.goto('http://localhost:4300',{waitUntil:'networkidle'}); await p.waitForTimeout(1800)
  const r = await p.evaluate(()=>{
    const bad = [...document.querySelectorAll('body *')]
      .map(el=>({el,r:el.getBoundingClientRect()}))
      .filter(({el,r})=>r.right>innerWidth+1 && getComputedStyle(el).position!=='fixed' && !el.classList.contains('hero-bg'))
      .slice(0,3).map(({el,r})=>el.tagName+'.'+String(el.className).split(' ')[0]+'@'+Math.round(r.right))
    const small = [...document.querySelectorAll('a,button,summary')]
      .map(el=>({el,r:el.getBoundingClientRect()}))
      .filter(({r})=>r.width>0&&r.height>0&&(r.height<44||r.width<44))
      .slice(0,4).map(({el,r})=>(el.textContent||el.tagName).trim().slice(0,18)+' '+Math.round(r.width)+'x'+Math.round(r.height))
    return {overflow: document.documentElement.scrollWidth>innerWidth+1, bad, small}
  })
  await p.evaluate(()=>window.scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'}))
  await p.waitForTimeout(2200)
  await p.screenshot({path:`.shots/m-${w}x${h}.png`})
  console.log(`${w}x${h}  prelijev:${r.overflow}${r.bad.length?' '+r.bad.join(','):''}  mete:${r.small.length?r.small.join(' | '):'ok'}  kB:${Math.round(bytes/1024)} (slike ${Math.round(imgBytes/1024)})  greske:${errs.length||'0'}`)
  await ctx.close()
}
await b.close()

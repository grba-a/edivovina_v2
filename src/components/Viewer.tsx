'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { VIEWER } from '@/data/copy'
import { nudge } from '@/lib/stage'

/**
 * PRIKAZ PROIZVODA (odluka B, Petar 2026-09-18).
 *
 * Amfora je do sada putovala kroz sekcije i nije prodavala nista. Ovdje stane,
 * uspravi se i pusti korisnika da je okrene prstom. To zamjenjuje jedino sto
 * web ne moze dati: da kupac uzme predmet u ruku.
 *
 * HVATISTE JE ZASEBAN ELEMENT, NE CANVAS.
 * Canvas je `position: fixed` preko cijelog kadra i ostaje
 * `pointer-events: none` uvijek. Da mu ih upalimo dok smo u ovoj sekciji,
 * fiksni sloj bi pojeo dodire i po ostatku stranice — i linkove i skrol.
 * Zato dodire hvata ovaj div, velik tocno kao pozornica, i prosljedjuje ih
 * pozornici kroz `nudge()`.
 *
 * Zamah NE ide kroz React state: to bi bio re-render na svaki pokret prsta.
 * `nudge()` pise u modul-store koji `Mesh` ionako cita po frameu.
 */
export default function Viewer() {
  const grab = useRef<HTMLDivElement>(null)
  const last = useRef<{ x: number; y: number } | null>(null)
  const [touched, setTouched] = useState(false)

  const onDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    last.current = { x: e.clientX, y: e.clientY }
    /* Hvatanje pokazivaca: zamah se nastavlja i kad prst izade iz elementa. */
    e.currentTarget.setPointerCapture(e.pointerId)
    setTouched(true)
  }, [])

  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const l = last.current
    if (!l) return
    /* Djelitelj je vezan uz sirinu hvatista, ne fiksan: isti potez prstom
       mora okrenuti predmet jednako na 360 px i na 1440 px. */
    const w = e.currentTarget.clientWidth || 320
    nudge(((e.clientX - l.x) / w) * 3.2, ((e.clientY - l.y) / w) * 1.4)
    last.current = { x: e.clientX, y: e.clientY }
  }, [])

  const onUp = useCallback(() => {
    last.current = null
  }, [])

  /* Tipkovnica: predmet se mora moci okrenuti i bez misa. */
  const onKey = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = 0.26
    if (e.key === 'ArrowLeft') nudge(-step, 0)
    else if (e.key === 'ArrowRight') nudge(step, 0)
    else if (e.key === 'ArrowUp') nudge(0, -step)
    else if (e.key === 'ArrowDown') nudge(0, step)
    else return
    e.preventDefault()
    setTouched(true)
  }, [])

  /* Uputa se gasi nakon prvog dodira i vise se ne vraca. Uputa koja stoji
     zauvijek je ukras, ne pomoc. */
  useEffect(() => {
    if (!touched) return
    const el = grab.current
    if (el) el.dataset.touched = 'yes'
  }, [touched])

  return (
    <section data-act="viewer" className="section view">
      <div className="wrap">
        <h2 className="view-title">{VIEWER.title}</h2>
        <p className="view-lede">{VIEWER.lede}</p>
      </div>

      {/* Pozornica. Prazna je namjerno: predmet lebdi u fiksnom sloju iznad
          stranice, pa mu se ne moze „uliti" u tok — moze mu se ostaviti
          prostor i uhvatiti dodir. */}
      <div
        ref={grab}
        className="view-stage"
        /* Namjerno bez ARIA uloge slider: slider znaci jednu ogranicenu
           vrijednost, a ovo
           je slobodna rotacija u dvije osi. Ostaje obicno zarista podrucje s
           imenom i opisom, pa citac ekrana kaze i sto je i kako se koristi. */
        tabIndex={0}
        aria-label="Amphora, 3D view"
        aria-describedby="view-keys"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onKeyDown={onKey}
      >
        <span className="view-hint" id="view-keys">
          {VIEWER.hint}
        </span>
      </div>

      <div className="wrap">
        <dl className="view-spots">
          {VIEWER.spots.map((s) => (
            <div key={s.n}>
              <dt>
                <span className="view-n">{s.n}</span>
                {s.title}
              </dt>
              <dd>{s.body}</dd>
            </div>
          ))}
        </dl>

        <a className="btn" href={VIEWER.cta.href}>
          {VIEWER.cta.label}
        </a>
      </div>
    </section>
  )
}

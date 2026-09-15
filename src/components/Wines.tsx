import Image from 'next/image'
import { WINES } from '@/data/wines'
import { money } from '@/lib/money'
import { LANE_NARROW } from '@/lib/stage'

/**
 * Katalog. PREDLOZAK, ne trgovina — Petar je 2026-09-15 odlucio da gumbi
 * ostanu inertni i da se katalog prepise u WooCommerce. Zato `aria-disabled`
 * i <span>, ne <button>: nista ne obecava klik koji ne postoji.
 *
 * Mreza ne smije nositi bocnu traku (na 360 px bi kartica pala na ~90 px),
 * pa poza `wines` na uskom ekranu koristi gornju traku: amfora lebdi iznad
 * naslova, mala i daleka.
 */
export default function Wines() {
  return (
    <section data-act="wines" className={`section lane-${LANE_NARROW.wines}`} id="wines">
      <div className="wrap full">
        <div className="sec-head">
          <p className="eyebrow">Shop</p>
          <h2>Navis Mysterium</h2>
        </div>

        <ul className="grid-wines">
          {WINES.map((w) => (
            <li key={w.slug} className="wine">
              <a className="wine-shot" href={`/product/${w.slug}`} tabIndex={-1} aria-hidden>
                <Image
                  src={w.photo}
                  alt=""
                  width={600}
                  height={900}
                  sizes="(min-width: 62.5rem) 22rem, (min-width: 48rem) 40vw, 45vw"
                  className="wine-img"
                />
                {w.undersea ? <span className="wine-flag">Undersea</span> : null}
              </a>

              <h3 className="wine-name">
                <a href={`/product/${w.slug}`}>{w.name}</a>
              </h3>
              <p className="wine-kind">{w.kind}</p>

              <div className="wine-foot">
                <span className="wine-price">{money(w.price)}</span>
                <span className="btn" aria-disabled="true">
                  Add to cart
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

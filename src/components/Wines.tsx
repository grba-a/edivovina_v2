import Image from 'next/image'
import { HOME_WINES, WINES } from '@/data/wines'
import { money } from '@/lib/money'
import { LANE_NARROW } from '@/lib/stage'

/**
 * Katalog. PREDLOZAK, ne trgovina — gumbi ostaju inertni do prepisa u
 * WooCommerce (odluka C).
 *
 * ODLUKA D, Petar 2026-09-18: DVIJE kartice, ne osam. Osam je katalog, a
 * katalog ne bira umjesto kupca nego ga ostavi pred osam odluka. Ovdje stoje
 * prica (amfora, 382 EUR) i ulazna cijena (Dingac, 39 EUR); ostalih sest je
 * na /shop.
 *
 * DOKAZ STOJI UZ CIJENU. Medalje su prije zivjele na dnu stranice, tisucama
 * piksela od mjesta gdje se gleda cijena. Medalja pored 382 EUR radi posao;
 * medalja na dnu ne radi nista.
 *
 * Bez eyebrow oznake: stranica ih je nosila pet na sedam sekcija, a gornja
 * granica je jedna na tri. Naslov i dvije boce ispod njega su dovoljni.
 */
export default function Wines() {
  const rest = WINES.length - HOME_WINES.length

  return (
    <section data-act="wines" className={`section lane-${LANE_NARROW.wines}`} id="wines">
      <div className="wrap full">
        <div className="sec-head">
          <h2>Navis Mysterium</h2>
        </div>

        <ul className="grid-wines">
          {HOME_WINES.map((w) => (
            <li key={w.slug} className="wine">
              <a className="wine-shot" href={`/product/${w.slug}`} tabIndex={-1} aria-hidden>
                <Image
                  src={w.photo}
                  alt=""
                  width={600}
                  height={900}
                  sizes="(min-width: 62.5rem) 24rem, 45vw"
                  className="wine-img"
                />
                {w.undersea ? <span className="wine-flag">Undersea</span> : null}
              </a>

              <h3 className="wine-name">
                <a href={`/product/${w.slug}`}>{w.name}</a>
              </h3>
              <p className="wine-kind">{w.kind}</p>

              {/* Nagrada UZ cijenu, ne na dnu stranice. */}
              {w.award ? (
                <p className="wine-award">
                  <Image src={w.award.medal} alt="" width={22} height={22} />
                  {w.award.label}
                </p>
              ) : null}

              <div className="wine-foot">
                <span className="wine-price">{money(w.price)}</span>
                <span className="btn" aria-disabled="true">
                  Add to cart
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="wine-rest">
          <a href="/shop">All {WINES.length} wines</a>
          <span>
            {rest} more, including the TRIS set and the sparkling Eros
          </span>
        </p>
      </div>
    </section>
  )
}

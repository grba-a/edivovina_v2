import { HOME_WINES, WINES } from '@/data/wines'
import { LANE_NARROW } from '@/lib/stage'
import WineCard from './WineCard'

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

        {/* Kartica je od 2026-09-24 zajednicka komponenta s /shop, da obrazac
            postoji na jednom mjestu a ne u dvije kopije koje se raziđu. */}
        <ul className="grid-wines">
          {HOME_WINES.map((w) => (
            <WineCard key={w.slug} wine={w} />
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

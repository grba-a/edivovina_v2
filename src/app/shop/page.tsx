import type { Metadata } from 'next'
import { WINES } from '@/data/wines'
import PageHead from '@/components/PageHead'
import WineCard from '@/components/WineCard'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Wines | Edivo Vina',
  description:
    'All ten wines from Edivo, Peljesac. Five of them aged on the Adriatic seabed, including the Navis Mysterium amphora.',
}

/**
 * /shop — svih deset vina.
 *
 * Kod njih ova stranica nema filtre, kategorije, sortiranje ni stranicenje.
 * Za deset proizvoda je to ISPRAVNO i ostaje tako: filtar nad deset stavki je
 * namjestaj, ne pomoc.
 *
 * Amfora se ovdje NE ucitava (Petar 2026-09-24). Stranica ne nosi ni three.js
 * ni 318 kB modela.
 *
 * Redoslijed je namjeran, ne abecedni i ne po cijeni: prvo ono sto je prica
 * (podmorska vina), pa obicne boce. Kupac koji dolazi na ovaj web dolazi zbog
 * mora, a ne zbog rosea od 17,50 EUR.
 */
export default function Shop() {
  const undersea = WINES.filter((w) => w.undersea)
  const land = WINES.filter((w) => !w.undersea)

  return (
    <>
      <PageHead
        title="The wines"
        lede="Ten wines from the Peljesac peninsula. Five of them spent more than 700 days on the Adriatic seabed."
        photo="/gallery/final-fp-34.webp"
        photoAlt="Bottles on a table by the sea, with the peninsula behind"
        focus="50% 55%"
      />

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Under the sea</p>
            <h2>Navis Mysterium</h2>
          </div>
          <ul className="grid-shop">
            {undersea.map((w, i) => (
              <WineCard key={w.slug} wine={w} priority={i < 2} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="sec-head">
            <h2>From the vineyard</h2>
          </div>
          <ul className="grid-shop">
            {land.map((w) => (
              <WineCard key={w.slug} wine={w} />
            ))}
          </ul>

          {/* Ono sto se o dostavi SMIJE reci, jer stoji na njihovoj stranici o
              dostavi. Iznos postarine nigdje ne stoji, pa ga ovdje nema. */}
          <p className="shop-ship">
            Dispatched within 24 hours by UPS, DPD or DHL. Shipping is calculated per order
            value, size and destination.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

import { getDict, winesFor, type Lang } from '@/i18n'
import PageHead from '@/components/PageHead'
import WineCard from '@/components/WineCard'
import Footer from '@/components/Footer'

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
export default function Shop({ lang }: { lang: Lang }) {
  const t = getDict(lang).shop
  const wines = winesFor(lang)
  const undersea = wines.filter((w) => w.undersea)
  const land = wines.filter((w) => !w.undersea)

  return (
    <>
      <PageHead
        title={t.head}
        lede={t.lede}
        photo="/gallery/final-fp-34.webp"
        photoAlt={t.alt}
        focus="50% 55%"
      />

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">{t.underEyebrow}</p>
            <h2>{t.underTitle}</h2>
          </div>
          <ul className="grid-shop">
            {undersea.map((w, i) => (
              <WineCard key={w.slug} wine={w} priority={i < 2} lang={lang} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.landTitle}</h2>
          </div>
          <ul className="grid-shop">
            {land.map((w) => (
              <WineCard key={w.slug} wine={w} lang={lang} />
            ))}
          </ul>

          {/* Ono sto se o dostavi SMIJE reci, jer stoji na njihovoj stranici o
              dostavi. Iznos postarine nigdje ne stoji, pa ga ovdje nema. */}
          <p className="shop-ship">
            {t.ship}
          </p>
        </div>
      </section>

      <Footer lang={lang} />
    </>
  )
}

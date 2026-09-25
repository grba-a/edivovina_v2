import type { Metadata } from 'next'
import Image from 'next/image'
import { GALLERY_CATS, shotsIn, SHOTS } from '@/data/gallery'
import PageHead from '@/components/PageHead'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gallery | Edivo Vina',
  description:
    'Divers, amphorae coming up from the seabed, the cellar at Drace. Photographs from Edivo on the Peljesac peninsula.',
}

/** Koliko kadrova po kategoriji. Predlozak, ne arhiva — Petar, 2026-09-25. */
const PER_CAT = 8

/**
 * /gallery — mreza po kategorijama, s naslovnom fotografijom i sidrima.
 *
 * VRACENO na ovaj raspored 25. rujna 2026. Kratko sam ga bio zamijenio
 * kontakt-listom (trake po sest na tamnoj ploci). Petar, nakon sto je vidio
 * oboje: „gallery i blog stranice su imale prije ove promjene ljepsi layout".
 * Vidjeti pobjeduje nad predvidjeti — vraceno.
 *
 * Ono sto je iz medjuverzije ZADRZANO, jer je bilo ispravno:
 *   - ne prikazuje se svih 158 slika nego osam po kategoriji
 *   - svaka kategorija kaze koliko ih je ukupno, pa se ne glumi da je to sve
 *
 * Njihovih sest kategorija ostaje; razvrstavanje je izvedeno iz imena datoteka
 * (proizvodnja-, ispod-mora-, vinarija-, ponma-, fp-), ne pogodjeno.
 */
export default function Gallery() {
  return (
    <>
      <PageHead
        title="The gallery"
        lede={`${SHOTS.length} photographs, from the vineyard to the seabed and back.`}
        photo="/gallery/sea-ispod-mora-2.webp"
        photoAlt="A diver above the rows of submerged amphorae"
        focus="50% 45%"
      />

      {/* Sidra, ne filtar: isti skok na kategoriju, bez ijedne skripte. */}
      <nav className="galnav" aria-label="Gallery sections">
        {GALLERY_CATS.map((c) => (
          <a key={c.id} href={`#${c.id}`}>
            {c.title}
            <span>{shotsIn(c.id).length}</span>
          </a>
        ))}
      </nav>

      {GALLERY_CATS.map((c, ci) => {
        const all = shotsIn(c.id)
        const shots = all.slice(0, PER_CAT)
        return (
          <section className="section-short" id={c.id} key={c.id}>
            <div className="wrap">
              <div className="gal-head">
                <h2>{c.title}</h2>
                <p>{c.lede}</p>
                <span className="gal-n">
                  {shots.length} of {all.length}
                </span>
              </div>
              <ul className="galgrid">
                {shots.map((s, i) => (
                  <li key={s.file}>
                    <Image
                      src={`/gallery/${s.file}`}
                      alt={`${c.title} — ${i + 1}`}
                      width={s.w}
                      height={s.h}
                      sizes="(min-width: 62.5rem) 22rem, (min-width: 48rem) 30vw, 46vw"
                      loading={ci === 0 && i < 4 ? 'eager' : 'lazy'}
                      priority={ci === 0 && i < 2}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      <Footer />
    </>
  )
}

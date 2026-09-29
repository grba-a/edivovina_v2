import { STORIES, storyHref } from '@/data/press'
import { bodyFor } from '@/data/news-bodies'
import { dateLocale, getDict, href, type Lang } from '@/i18n'
import PageHead from '@/components/PageHead'
import Footer from '@/components/Footer'

/** Koliko spomena stoji na stranici. Predlozak, ne arhiva — Petar, 2026-09-25. */
const SHOWN = 12

function excerpt(slug: string, max = 110) {
  const first = bodyFor(slug).find((b) => b.tag === 'p')
  if (!first) return null
  return first.t.length <= max ? first.t : first.t.slice(0, first.t.lastIndexOf(' ', max)) + '…'
}

/**
 * /news-stories — kartice.
 *
 * VRACENO na kartice 25. rujna 2026. Kratko sam ih bio zamijenio kazalom
 * (jedan otvoren, ostali tanki redci). Petar, nakon sto je vidio oboje:
 * „gallery i blog stranice su imale prije ove promjene ljepsi layout".
 *
 * Ono sto je iz medjuverzije ZADRZANO, jer je bilo ispravno:
 *   - BEZ SLIKE NA KARTICI. Povukao sam `og:image` sa svake njihove stranice
 *     misleci da je to slika clanka; 58 od 59 ih je vratilo ISTU datoteku.
 *     Jedna dijeljena slika na dvanaest kartica znaci istu sliku dvanaest
 *     puta — tocno ono ponavljanje na koje se Petar prvo pozalio. Kartica
 *     zato nosi izvor, naslov, prvu recenicu i datum, a slike nema dok
 *     klijent ne posalje pravu po clanku.
 *   - SVE KARTICE SU JEDNAKE. Prva verzija je imala jednu veliku, sto je uz
 *     istu sliku na svima izgledalo kao kvar.
 *   - Ne prikazuje se svih 59 nego dvanaest, uz link na ostatak.
 */
export default function Press({ lang }: { lang: Lang }) {
  const t = getDict(lang).news
  const shown = STORIES.slice(0, SHOWN)

  return (
    <>
      <PageHead
        title={t.head}
        lede={t.lede(STORIES.length)}
        photo="/gallery/winebar-vinarija-6.webp"
        photoAlt={t.alt}
        focus="50% 45%"
      />

      <section className="section-short">
        <div className="wrap">
          <ul className="cards">
            {shown.map((s) => (
              <li key={s.slug}>
                <a href={href(lang, storyHref(s))}>
                  <span className="cards-t">
                    {s.outlet ? <span className="cards-o">{s.outlet}</span> : null}
                    <strong>{s.title}</strong>
                    {excerpt(s.slug) ? <span className="cards-x">{excerpt(s.slug)}</span> : null}
                    <time dateTime={s.date}>
                      {new Date(s.date).toLocaleDateString(dateLocale(lang), {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="cards-all">
            <span className="cards-rest">
              {t.rest(STORIES.length - SHOWN)}
            </span>
          </p>
        </div>
      </section>

      <Footer lang={lang} />
    </>
  )
}

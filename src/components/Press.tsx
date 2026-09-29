import { HOME_STORIES, storyHref } from '@/data/press'
import { LANE_NARROW } from '@/lib/stage'
import { dateLocale, getDict, href, type Lang } from '@/i18n'

/**
 * News & stories. Njihov web ovdje vrti izvatke iz clanaka; ovdje stoje samo
 * izvor, naslov i datum, a link vodi na njihov clanak — kraci blok, i ne
 * prenosi tudi tekst.
 *
 * Poza `press` je NAJBLIZA kamerom cijeloj stranici: predmet dolazi pred
 * kadar, dolje desno, i namjerno je odrezan rubom. Zato ovaj blok nosi
 * desnu traku i na mobitelu.
 */
export default function Press({ lang = 'en' }: { lang?: Lang }) {
  const t = getDict(lang).homePress
  return (
    <section data-act="press" className={`section on-cream lane-${LANE_NARROW.press}`}>
      <div className="wrap">
        {/* Bez eyebrow oznake: „Press" nad naslovom „News & stories" ne dodaje
            nista sto naslov vec ne kaze. Stranica ih je nosila pet na sedam
            sekcija, a granica je jedna na tri. */}
        <div className="sec-head">
          <h2>{t.title}</h2>
        </div>

        <ul className="press">
          {HOME_STORIES.map((s) => (
            <li key={s.slug}>
              <a href={href(lang, storyHref(s))}>
                {s.outlet ? <span className="press-outlet">{s.outlet}</span> : null}
                <span className="press-title">{s.title}</span>
                <time dateTime={s.date} className="press-date">
                  {new Date(s.date).toLocaleDateString(dateLocale(lang), {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </a>
            </li>
          ))}
        </ul>

        <a className="btn" href={href(lang, '/news-stories')}>
          {t.more}
        </a>
      </div>
    </section>
  )
}

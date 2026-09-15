import { STORIES } from '@/data/press'
import { LANE_NARROW } from '@/lib/stage'

/**
 * News & stories. Njihov web ovdje vrti izvatke iz clanaka; ovdje stoje samo
 * izvor, naslov i datum, a link vodi na njihov clanak — kraci blok, i ne
 * prenosi tudi tekst.
 *
 * Poza `press` je NAJBLIZA kamerom cijeloj stranici: predmet dolazi pred
 * kadar, dolje desno, i namjerno je odrezan rubom. Zato ovaj blok nosi
 * desnu traku i na mobitelu.
 */
export default function Press() {
  return (
    <section data-act="press" className={`section on-cream lane-${LANE_NARROW.press}`}>
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Press</p>
          <h2>News &amp; stories</h2>
        </div>

        <ul className="press">
          {STORIES.map((s) => (
            <li key={s.title}>
              <a href={s.href}>
                <span className="press-outlet">{s.outlet}</span>
                <span className="press-title">{s.title}</span>
                <time dateTime={s.date} className="press-date">
                  {new Date(s.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </a>
            </li>
          ))}
        </ul>

        <a className="btn" href="/news-stories">
          View more
        </a>
      </div>
    </section>
  )
}

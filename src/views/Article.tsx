import Image from 'next/image'
import { notFound } from 'next/navigation'
import { dateLocale, getDict, href, type Lang } from '@/i18n'
import { STORIES, storyBySlug, storySource, PRESS_COVER } from '@/data/press'
import { bodyFor } from '@/data/news-bodies'
import Footer from '@/components/Footer'

/**
 * /news/[slug] — stranica press clanka.
 *
 * Petar, 2026-09-24: kartice vode na clanak kod nas, ne van.
 *
 * Otvor je ovdje DRUKCIJI od ostalih podstranica i to je namjerno: clanak ne
 * dobiva `PageHead` s trakom, nego naslovnu fotografiju pa naslov ispod nje.
 * Traka sa zastorom preko naslova clanka otezava citanje onoga zbog cega je
 * netko dosao, a naslovi su ovdje dugi („Wine tour on Peljesac: one peninsula,
 * three wineries and three completely different stories").
 *
 * IZVOR JE IMENOVAN NA DNU. Tekst je tudi i to mora pisati — kod njih nigdje
 * ne pise odakle je clanak, sto je i njihov problem, ne samo pravni.
 */
export default function Article({ lang, slug }: { lang: Lang; slug: string }) {
  const t = getDict(lang).article
  const story = storyBySlug(slug)
  if (!story) notFound()

  /* Izvornik na hrvatskoj verziji njihovog weba, ako je citatelj na /hr. */
  const source = lang === 'hr' ? storySource(story).replace('edivovina.hr/news/', 'edivovina.hr/hr/news/') : storySource(story)

  const body = bodyFor(slug)
  const more = STORIES.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <article className="art">
        <div className="art-shot">
          <Image
            src={PRESS_COVER.file}
            alt=""
            width={PRESS_COVER.w}
            height={PRESS_COVER.h}
            sizes="(min-width: 62.5rem) 60rem, 100vw"
            priority
          />
        </div>

        <div className="wrap art-in">
          <p className="art-meta">
            {story.outlet ? <span className="art-outlet">{story.outlet}</span> : null}
            <time dateTime={story.date}>
              {new Date(story.date).toLocaleDateString(dateLocale(lang), {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </p>
          <h1 className="art-title">{story.title}</h1>

          <div className="art-body">
            {body.map((b, i) => {
              const key = `${b.tag}-${i}`
              if (b.tag === 'h2' || b.tag === 'h3') return <h2 key={key}>{b.t}</h2>
              if (b.tag === 'li') return <li key={key}>{b.t}</li>
              if (b.tag === 'blockquote') return <blockquote key={key} className="pull">{b.t}</blockquote>
              return <p key={key}>{b.t}</p>
            })}
          </div>

          {/* Tudi tekst mora reci odakle je. */}
          <p className="art-src">
            {t.published(story.outlet)}{' '}
            <a href={source} target="_blank" rel="noopener noreferrer">
              {t.original}
            </a>
          </p>
        </div>
      </article>

      <section className="section section-tight">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.more}</h2>
          </div>
          <ul className="cards">
            {more.map((s) => (
              <li key={s.slug}>
                <a href={href(lang, `/news/${s.slug}`)}>
                  <Image
                    src={PRESS_COVER.file}
                    alt=""
                    width={PRESS_COVER.w}
                    height={PRESS_COVER.h}
                    sizes="(min-width: 48rem) 22rem, 92vw"
                    loading="lazy"
                  />
                  <span className="cards-t">
                    {s.outlet ? <span className="cards-o">{s.outlet}</span> : null}
                    <strong>{s.title}</strong>
                    <time dateTime={s.date}>
                      {new Date(s.date).toLocaleDateString(dateLocale(lang), { month: 'long', year: 'numeric' })}
                    </time>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="cards-all">
            <a className="btn" href={href(lang, '/news-stories')}>{t.all(STORIES.length)}</a>
          </p>
        </div>
      </section>

      <Footer lang={lang} />
    </>
  )
}

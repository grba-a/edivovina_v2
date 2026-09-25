import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { WINES, bySlug } from '@/data/wines'
import { reviewsFor } from '@/data/reviews'
import { money } from '@/lib/money'
import Footer from '@/components/Footer'
import WineCard from '@/components/WineCard'

export function generateStaticParams() {
  return WINES.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const w = bySlug(slug)
  if (!w) return {}
  return {
    title: `${w.name} | Edivo Vina`,
    description: w.body.slice(0, 155),
    openGraph: { title: w.name, images: [w.photo], type: 'website' },
  }
}

/**
 * /product/[slug] — deset stranica.
 *
 * REDOSLIJED JE ODLUKA, ne raspored. Kod njih stranica otvara PRAZNIM OKVIROM
 * preko cijelog prvog ekrana, pa naslov, pa cijena, pa dva odloma teksta, i
 * tek na dnu recenica koja objasnjava zasto predmet vrijedi 382 EUR.
 *
 * Ovdje: fotografija, ime, cijena, DOKAZ, pa „svaka amfora je drukcija", pa
 * podaci, pa njihov tekst, pa recenzije.
 *
 * STO JE MAKNUTO i zasto:
 *  - „Purchase this product now and earn 382 points!" — bod nigdje nije
 *    objasnjen, pa je to broj bez znacenja.
 *  - Bedzevi „Satisfaction Guaranteed", „No Hassle Refunds", „Secure Payments"
 *    — ima ih svaka WooCommerce trgovina na svijetu i ne znace nista. Na
 *    njihovom mjestu stoje cinjenice s njihove vlastite stranice o dostavi.
 *  - Ladica kosarice i widget za bodove, koje kod njih nosi svaka stranica.
 *
 * STO JOS NEDOSTAJE: video. Odluka F1 kaze plakat koji ucita YouTube tek na
 * klik, ali ID-jeve njihovih videa nemam, pa ih ne izmisljam. Ceka popis.
 */
export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const wine = bySlug(slug)
  if (!wine) notFound()

  const reviews = reviewsFor(wine.slug)
  const also = WINES.filter((w) => w.slug !== wine.slug && w.undersea === wine.undersea).slice(0, 3)

  return (
    <>
      <article className="prod">
        <div className="wrap prod-in">
          <div className="prod-shot">
            <Image
              src={wine.photo}
              alt={wine.name}
              width={1000}
              height={1500}
              sizes="(min-width: 62.5rem) 34rem, 92vw"
              className="prod-img"
              priority
            />
            {wine.undersea ? <span className="wine-flag">Undersea</span> : null}
          </div>

          <div className="prod-body">
            <p className="eyebrow">{wine.kind}</p>
            <h1 className="prod-title">{wine.name}</h1>

            <div className="prod-buy">
              <span className="prod-price">{money(wine.price)}</span>
              {wine.inStock ? (
                <span className="btn" aria-disabled="true">
                  Add to cart
                </span>
              ) : (
                <span className="wine-out">Sold out</span>
              )}
            </div>

            {/* Dokaz stoji uz cijenu. */}
            {wine.award ? (
              <p className="wine-award">
                <Image src={wine.award.medal} alt="" width={22} height={22} />
                {wine.award.label}
              </p>
            ) : null}

            {/* Podignuto s dna njihove stranice: ovo je argument za prodaju. */}
            {wine.notice ? <p className="prod-notice">{wine.notice}</p> : null}

            <dl className="prod-spec">
              {wine.spec.map((s) => (
                <div key={s}>
                  <dd>{s}</dd>
                </div>
              ))}
            </dl>

            <div className="prod-text">
              <p>{wine.body}</p>
            </div>

            {/* Sto se o dostavi SMIJE reci, jer stoji na njihovoj stranici o
                dostavi. Iznos postarine nigdje na njihovom webu ne stoji. */}
            <ul className="prod-facts">
              <li>Dispatched within 24 hours of ordering</li>
              <li>UPS, DPD or DHL</li>
              <li>Cancel within 48 hours, before it ships</li>
            </ul>
          </div>
        </div>
      </article>

      {reviews.length ? (
        <section className="section section-tight">
          <div className="wrap">
            <div className="sec-head">
              <h2>
                {reviews.length === 1 ? 'One review' : `${reviews.length} reviews`}
              </h2>
            </div>
            <ul className="revs">
              {reviews.map((r) => (
                <li key={r.who + r.date}>
                  <p className="rev-text">{r.text}</p>
                  <p className="rev-who">
                    {r.who}
                    <time dateTime={r.date}>
                      {new Date(r.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {also.length ? (
        <section className="section section-tight">
          <div className="wrap">
            <div className="sec-head">
              <h2>{wine.undersea ? 'Also from the seabed' : 'Also from the vineyard'}</h2>
            </div>
            <ul className="grid-shop">
              {also.map((w) => (
                <WineCard key={w.slug} wine={w} />
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <Footer />
    </>
  )
}

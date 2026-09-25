import type { Metadata } from 'next'
import Image from 'next/image'
import Icon from '@/components/Icon'
import { PLACES, CONTACT } from '@/data/pages'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Visit us | Edivo Vina',
  description:
    'How to reach the Edivo wine bar in Drace and the winery in Janjina, about an hour from Dubrovnik along the Peljesac peninsula.',
}

/**
 * /visit-us — „PUT" (Petar, 2026-09-25, artifact HRnGiGBEtPLx3rWDShxUhT).
 *
 * Kod njih ova stranica ima DVA H1 („Wine Bar" i „Underwater Winery"), dva
 * vrtuljka i nijedan podatak o posjetu. U izborniku se zove „Visit Us".
 *
 * Stranica je sada sam put: Dubrovnik → Ston → Drace → Janjina, kao okomita
 * linija. Gost ima jedno pitanje — koliko je daleko i kako doci — i raspored
 * na njega odgovara umjesto da o tome pise.
 *
 * Linija NOSI INFORMACIJU, nije ukras: redoslijed postaja je stvarni redoslijed
 * voznje, i vidi se da su nase dvije lokacije na kraju puta, a ne jedna.
 *
 * ================== STO OVDJE NAMJERNO NE STOJI ==================
 * VRIJEME PO DIONICI. Njihov tekst kaze samo da je poluotok „one hour away
 * from Dubrovnik". Vrijeme Ston→Drace ili Drace→Janjina nigdje ne stoji, pa ga
 * ne izmisljam — postaje bez nase adrese nose samo ime.
 *
 * RADNO VRIJEME, CIJENA I TRAJANJE OBILASKA, VELICINA GRUPE. Nista od toga
 * nije nigdje na njihovom webu.
 *
 * RONJENJE. Klijent je 2026-09-04 potvrdio da ronilackih tura VISE NEMA, iako
 * ih njihov vlastiti press jos spominje.
 * ==================================================================
 */

/** Postaje na putu. `ours` znaci da ondje stvarno mozes stati kod njih. */
const STOPS = [
  { id: 'dubrovnik', name: 'Dubrovnik', note: 'Most people start here.' },
  { id: 'ston', name: 'Ston', note: 'The walls, and the neck of the peninsula.' },
  { id: 'wine-bar', name: 'Drače', ours: 'wine-bar' },
  { id: 'winery', name: 'Janjina', ours: 'winery' },
]

export default function Visit() {
  return (
    <>
      <section className="route-top has-hero">
        <Image
          src="/gallery/winebar-vinarija-15.webp"
          alt=""
          fill
          sizes="100vw"
          className="hero-sub-bg"
          style={{ objectPosition: '50% 52%' }}
          priority
        />
        <div className="hero-sub-scrim" />
        <div className="wrap">
          <h1>An hour from Dubrovnik, then keep going</h1>
          <p>
            The wine bar is in Drače, the winery a little further on in Janjina. This is the
            order you pass them.
          </p>
        </div>
      </section>

      <section className="section-short">
        <div className="wrap">
          <ol className="route">
            {STOPS.map((stop) => {
              const place = stop.ours ? PLACES.find((p) => p.id === stop.ours) : null
              return (
                <li key={stop.id} className={place ? 'is-ours' : undefined}>
                  <h2>{stop.name}</h2>
                  {place ? (
                    <>
                      <p className="route-what">{place.what}</p>
                      <Image
                        src={`/gallery/${place.photo.file}`}
                        alt={place.photo.alt}
                        width={place.photo.w}
                        height={place.photo.h}
                        sizes="(min-width: 62.5rem) 36rem, 92vw"
                        loading="lazy"
                      />
                      <ul className="route-sees">
                        {place.sees.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                      <address>
                        {place.street}, {place.town}
                      </address>
                      <a className="btn" href={place.maps} target="_blank" rel="noopener noreferrer">
                        Open in Maps
                      </a>
                    </>
                  ) : (
                    <p className="route-note">{stop.note}</p>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ZAVRSNI POZIV. Prije je ovdje stajao naslov, recenica i tri
          podcrtana linka na praznoj tamnoj plohi — Petar, 2026-09-25: „ili
          cemo ovo skroz maknuti ili cemo napraviti nekakav CTA section".

          Maknuti se ne moze: ovo je jedina ISTINITA uputa koju imamo. Radno
          vrijeme im nigdje ne stoji, pa je „nazovi prije nego krenes" jedino
          sto smijemo reci, i bez toga stranica koja poziva u posjet nema
          nijedan nacin da se postupi.

          JEDAN glavni poziv, ne tri ravnopravna (frontend-design: „each screen
          should have only one primary CTA"). Zvati je glavno jer telefon javlja
          odmah; WhatsApp je drugi jer ga stranci koriste; mail je tekst, ne
          gumb, jer na njega odgovor ceka do sutra. */}
      <section className="cta">
        <Image
          src="/gallery/winebar-vinarija-5.webp"
          alt=""
          fill
          sizes="100vw"
          className="cta-bg"
          loading="lazy"
        />
        <div className="cta-scrim" />
        <div className="wrap cta-in">
          <h2>Call before you drive</h2>
          <p>
            Hours move with the season. One call saves you an hour of road if we are closed.
          </p>
          <div className="cta-acts">
            <a className="cta-go" href={CONTACT.phoneHref}>
              <Icon name="phone" />
              {CONTACT.phone}
            </a>
            <a className="cta-alt" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              WhatsApp
            </a>
          </div>
          <p className="cta-mail">
            Or write to <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

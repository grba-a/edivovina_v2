import Image from 'next/image'
import { CONTACT } from '@/data/pages'
import { getDict, type Lang } from '@/i18n'
import Icon from '@/components/Icon'
import Footer from '@/components/Footer'

/**
 * /contact
 *
 * Kod njih ova stranica ima tri polja i gumb. Nema adresu, nema telefon, karta
 * je iza pristanka na kolacice, a za to ucita 558 kB i 100 skripti. Adrese i
 * telefon im POSTOJE — u podnozju svake stranice, samo ne na Contactu.
 *
 * RASPORED, Petar 2026-09-25: naslovna fotografija, pa dvije lokacije, pa
 * DVA STUPCA — lijevo telefon, WhatsApp i mail, desno obrazac.
 *
 * Prije su tri nacina kontakta zauzimala prvi ekran preko cijele sirine. Na
 * fotografiji podruma su se slabo citali, a obrazac je padao daleko ispod
 * pregiba dok je desna polovica zjapila prazna.
 *
 * Nacini kontakta su LIJEVO jer su glavni: telefon javlja odmah, obrazac ceka.
 */
export default function Contact({ lang }: { lang: Lang }) {
  const t = getDict(lang).contact
  const PLACES = getDict(lang).places
  const maps = getDict(lang).visit.maps
  return (
    <>
      <section className="reach-hero has-hero">
        <Image
          src="/gallery/winebar-vinarija-16.webp"
          alt=""
          fill
          sizes="100vw"
          className="hero-sub-bg"
          style={{ objectPosition: '50% 55%' }}
          priority
        />
        <div className="hero-sub-scrim" />
        <div className="wrap">
          <h1>{t.h1}</h1>
          <p className="reach-lede">{t.lede}</p>
        </div>
      </section>

      {/* Dvije lokacije. Kod njih nigdje ne pise da ih ima dvije. */}
      <section className="places-band">
        {PLACES.map((p) => (
          <article key={p.id}>
            <Image
              src={`/gallery/${p.photo.file}`}
              alt={p.photo.alt}
              width={p.photo.w}
              height={p.photo.h}
              sizes="(min-width: 48rem) 50vw, 100vw"
              loading="lazy"
            />
            <div>
              <h2>{p.name}</h2>
              <p>{p.what}</p>
              <address>
                {p.street}, {p.town}
              </address>
              <a className="btn" href={p.maps} target="_blank" rel="noopener noreferrer">
                {maps}
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Dva stupca: lijevo nacini kontakta, desno obrazac. */}
      <section className="section-short">
        <div className="wrap two-col">
          <div className="two-col-a">
            <h2>{t.reach}</h2>
            <ul className="reach-big">
              <li>
                <a href={CONTACT.phoneHref}>
                  <Icon name="phone" />
                  <span>
                    <strong>{CONTACT.phone}</strong>
                    <em>{t.call}</em>
                  </span>
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" />
                  <span>
                    <strong>{CONTACT.phone}</strong>
                    <em>WhatsApp</em>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>
                  <Icon name="mail" />
                  <span>
                    <strong>{CONTACT.email}</strong>
                    <em>{t.email}</em>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* PREDLOZAK: ne salje nista do prepisa u Breakdance. */}
          <div className="two-col-b">
            <h2>{t.write}</h2>
            <form className="form" aria-describedby="form-note">
              <p className="form-row">
                <label htmlFor="f-name">{t.name}</label>
                <input id="f-name" name="name" type="text" autoComplete="name" required />
              </p>
              <p className="form-row">
                <label htmlFor="f-mail">{t.email}</label>
                <input id="f-mail" name="email" type="email" autoComplete="email" required />
              </p>
              <p className="form-row">
                <label htmlFor="f-msg">{t.message}</label>
                <textarea id="f-msg" name="message" rows={5} required />
              </p>
              <p id="form-note" className="form-note">
                {t.note}
              </p>
              <span className="btn" aria-disabled="true">
                {t.send}
              </span>
            </form>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </>
  )
}

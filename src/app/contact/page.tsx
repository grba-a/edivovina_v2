import type { Metadata } from 'next'
import Image from 'next/image'
import { PLACES, CONTACT } from '@/data/pages'
import Icon from '@/components/Icon'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact | Edivo Vina',
  description:
    'Call, message on WhatsApp or email Edivo. The winery is in Janjina, the wine bar in Drace, on the Peljesac peninsula.',
}

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
export default function Contact() {
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
          <h1>Talk to us</h1>
          <p className="reach-lede">
            Someone picks up. Hours move with the season, so a call beats guessing.
          </p>
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
                Open in Maps
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Dva stupca: lijevo nacini kontakta, desno obrazac. */}
      <section className="section-short">
        <div className="wrap two-col">
          <div className="two-col-a">
            <h2>Reach us</h2>
            <ul className="reach-big">
              <li>
                <a href={CONTACT.phoneHref}>
                  <Icon name="phone" />
                  <span>
                    <strong>{CONTACT.phone}</strong>
                    <em>Call</em>
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
                    <em>Email</em>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* PREDLOZAK: ne salje nista do prepisa u Breakdance. */}
          <div className="two-col-b">
            <h2>Write instead</h2>
            <form className="form" aria-describedby="form-note">
              <p className="form-row">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" type="text" autoComplete="name" required />
              </p>
              <p className="form-row">
                <label htmlFor="f-mail">Email</label>
                <input id="f-mail" name="email" type="email" autoComplete="email" required />
              </p>
              <p className="form-row">
                <label htmlFor="f-msg">Message</label>
                <textarea id="f-msg" name="message" rows={5} required />
              </p>
              <p id="form-note" className="form-note">
                This form is part of the template and does not send yet.
              </p>
              <span className="btn" aria-disabled="true">
                Send
              </span>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

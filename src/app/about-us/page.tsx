import type { Metadata } from 'next'
import Image from 'next/image'
import { ABOUT } from '@/data/pages'
import MapPeljesac from '@/components/figures/MapPeljesac'
import AmphoraSection from '@/components/figures/AmphoraSection'
import DepthScene from '@/components/figures/DepthScene'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About us | Edivo Vina',
  description:
    'Drace on the Peljesac peninsula, where Edivo submerged its first amphorae in 2013 and built the first underwater winery in Croatia.',
}

/**
 * /about-us — „SILAZAK" (Petar, 2026-09-25, artifact HRnGiGBEtPLx3rWDShxUhT).
 *
 * Prica JEST silazak — od sela na poluotoku do amfore na dnu — pa to radi
 * raspored umjesto da o tome pise recenica. Pozadina tamni kroz stranicu, a uz
 * lijevi rub tece ljestvica s dubinom.
 *
 * LJESTVICA NOSI INFORMACIJU, nije ukras: svaka postaja ima stvarnu dubinu ili
 * godinu, i one rastu prema dnu. Brojke koje su prije stajale u zasebnoj traci
 * na krem plohi sada su postaje na toj ljestvici — jedna sekcija manje
 * (vault: „makni sekciju prije nego dodas zrak").
 *
 * BEZ OZNAKE RAZMAKNUTIM VERZALOM nad naslovima. Ono sto je ovdje verzalom je
 * oznaka dubine na ljestvici, koja kaze gdje si.
 *
 * SVE TRI ILUSTRACIJE SU POSTAJE, ne ukrasi: karta kaze gdje, presjek kaze sto
 * je unutra, podmorska scena kaze koliko duboko i koliko dugo.
 *
 * TEKST JE NJIHOV, doslovno. Nijedna rijec nije dodana ni maknuta; samo je
 * razlomljen na odlomke i rasporeden po postajama.
 *
 * PAZI NA DUBINU: ovdje stoji 18–25 m jer to pise na NJIHOVOJ About stranici
 * (odluka L1). Naslovnica nosi dogovoreni kompromis „around 20 metres". Dvoje
 * se ne slaze i ceka Petrovu odluku.
 */
export default function About() {
  return (
    <main className="descent">
      {/* 0 — povrsina */}
      <section className="dv dv-0 has-hero">
        <Image
          src="/gallery/production-proizvodnja-26.webp"
          alt=""
          fill
          sizes="100vw"
          className="hero-sub-bg"
          style={{ objectPosition: '50% 62%' }}
          priority
        />
        <div className="hero-sub-scrim" />
        <div className="wrap">
          <h1>It starts in a village and ends on the seabed</h1>
          <p className="dv-lede">{ABOUT.body[0]}</p>
        </div>
      </section>

      {/* postaja: gdje */}
      <section className="dv dv-1">
        <div className="wrap">
          <p className="dv-mark">Pelješac</p>
          <p>{ABOUT.body[1]}</p>
          <MapPeljesac />
        </div>
      </section>

      {/* postaja: kada */}
      <section className="dv dv-2">
        <div className="wrap">
          <p className="dv-mark">2011–2014</p>
          <p>{ABOUT.body[2]}</p>
          <p>{ABOUT.body[3]}</p>
        </div>
      </section>

      {/* postaja: sto je unutra */}
      <section className="dv dv-3">
        <div className="wrap">
          <p className="dv-mark">0,75 L</p>
          <AmphoraSection />
        </div>
      </section>

      {/* postaja: koliko duboko i koliko dugo */}
      <section className="dv dv-4">
        <div className="wrap">
          <p className="dv-mark">18–25 m</p>
          <p>{ABOUT.body[4]}</p>
          <DepthScene />
        </div>
      </section>

      {/* dno */}
      <section className="dv dv-5">
        <div className="wrap">
          <p className="dv-mark">700+ dana</p>
          <p>{ABOUT.body[5]}</p>
          <blockquote className="dv-quote">{ABOUT.quote}</blockquote>
          <ul className="dv-made">
            {ABOUT.madeIn.map((m) => (
              <li key={m.what}>
                <span>{m.what}</span>
                <b>{m.where}</b>
              </li>
            ))}
          </ul>
          <p className="dv-close">{ABOUT.close}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

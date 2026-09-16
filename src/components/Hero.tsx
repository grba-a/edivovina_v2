import Image from 'next/image'
import { HERO } from '@/data/copy'

/**
 * Hero. Amfore OVDJE NEMA — Petar je trazio da se pojavi tek nakon heroja.
 * Poza `hero` u `stage.ts` zato ima o: 0, i predmet se pojavi na savu prema
 * sekciji "story".
 *
 * Naslov je LCP element: cisti HTML, bez canvasa, bez knjiznice. Intro je
 * CSS animacija (klasa `rise`) — GSAP na hero naslovu je izmjereno kostao
 * 5 s mobilnog LCP-a.
 *
 * Visina je `min-height`, ne `100vh`: puni kadar gura samu stranicu izvan
 * prve slike, a prva slika je ono sto dobiva i thumbnail i onaj koji skrola.
 */
export default function Hero() {
  return (
    <section data-act="hero" className="hero">
      <Image
        src="/photo/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg"
      />
      <div className="hero-scrim" />

      <div className="wrap hero-in">
        <h1 className="hero-title rise rise-1">
          {HERO.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <div className="hero-brand rise rise-2">
          <Image
            src="/photo/hero-bottles.png"
            alt="Navis Mysterium amphora and bottle"
            width={520}
            height={360}
            sizes="(min-width: 62.5rem) 520px, 70vw"
            className="hero-bottles"
            /* Next je ovu sliku prijavio kao LCP element. Lijena je bila po
               zadanom, pa je najveca stvar u kadru cekala hidraciju. */
            priority
          />
        </div>

        <p className="hero-tag rise rise-3">
          <strong>{HERO.brand}</strong> {HERO.tagline}
        </p>
      </div>
    </section>
  )
}

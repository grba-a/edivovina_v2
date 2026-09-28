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
      {/* POZADINA BEZ KOMPASA. Nasa stara `hero.jpg` imala je kompas PECEN u
          JPEG, pa se nije imalo sto rotirati — zato su prva dva pokusaja
          2026-09 propala. Ovo je njihova izvorna pozadina (`hero-bg2021.jpg`),
          bez kompasa. Usput: stara je bila 927 kB, ovo je 85 kB, a rijec je o
          LCP elementu. */}
      <Image
        src="/photo/hero-plain.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg"
      />
      <div className="hero-scrim" />

      {/* KOMPAS SE VRTI — Petar, 2026-09-28, po klijentovom trazenju.

          IDE IZNAD ZASTORA, ne ispod. To je drugi razlog zasto je prosli put
          palo: crtez je BIJEL i prosjecno 24 % neproziran, a zastor mu je pri
          dnu 92 % tamne boje — ispod njega je nestao. Izmjereno na datoteci:
          prosjecna alfa 61/255, crtez cistih 255 bijele.

          Sloj je `aria-hidden` i `pointer-events: none`: to je ukras, ne
          sadrzaj, i ne smije uhvatiti dodir namijenjen gumbima.

          Vrtnja je CSS `@keyframes`, ne knjiznica — hero je LCP i CSS drzi
          ucitavanje (GSAP na heroju je izmjereno kostao 5 s mobilnog LCP-a).
          Ista brzina kao kod njih: 30 s po okretaju, linearno, u jednom
          smjeru. */}
      {/* Kompas i proizvod su JEDAN sloj, dvije slike u istoj grid celiji.
          Kod njih su obje 684x693 i obje centrirane — kompas se vrti TOCNO oko
          proizvoda, i to je cijeli potez. Da su u dva kontejnera, morao bih
          im centar poravnavati dvaput; ovako ga dijele po definiciji.
          Vrti se samo `.compass`; `.amph` miruje iznad njega. */}
      <div className="hero-compass" aria-hidden>
        <Image
          className="compass"
          src="/photo/compass.webp"
          alt=""
          width={684}
          height={693}
          sizes="(min-width: 62.5rem) 46rem, 90vw"
          priority
        />
        <Image
          className="amph"
          src="/photo/hero-amphora.webp"
          alt=""
          width={684}
          height={693}
          sizes="(min-width: 62.5rem) 38rem, 74vw"
          priority
        />
      </div>

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

        {/* Prvi put da na naslovnici iznad preloma postoji put prema kupnji.
            Dvije razlicite namjere: kupiti i razumjeti. */}
        <div className="hero-ctas rise rise-3">
          <a className="btn btn-solid" href={HERO.ctaPrimary.href}>
            {HERO.ctaPrimary.label}
          </a>
          <a className="btn" href={HERO.ctaGhost.href}>
            {HERO.ctaGhost.label}
          </a>
        </div>
      </div>
    </section>
  )
}

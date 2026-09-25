/**
 * PRESJEK AMFORE — crtez, ne fotografija.
 *
 * Petar, 2026-09-24: „kad sam rekao slike, mislio sam na ove crteze ispod
 * teksta kao sto su na staroj stranici". Ovo je jedan od tri.
 *
 * Objasnjava ono sto tekst tvrdi: staklena boca od 0,75 l ide U glinenu
 * amforu, a zatvara je cep s dva sloja. Fotografija to ne moze pokazati jer
 * je unutrasnjost skrivena — zato crtez, a ne slika.
 *
 * SVG, ne slika: nekoliko kilobajta, ostar na svakom ekranu, i boje dolaze iz
 * `currentColor` i tokena pa prati temu stranice.
 *
 * Brojke su NJIHOVE, s njihove About stranice i stranice proizvoda.
 */
export default function AmphoraSection() {
  return (
    <figure className="fig">
      <svg viewBox="0 0 900 520" role="img" aria-labelledby="fig-sec-t" className="fig-svg">
        <title id="fig-sec-t">
          Cross-section of a Navis Mysterium amphora: a 0.75 litre glass bottle inside a clay
          amphora, sealed with cork and two layers of wax
        </title>

        <g className="fig-ink" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* tijelo amfore */}
          <path
            d="M380 96c-26 0-44 12-52 30-9 20-12 44-12 70 0 54 10 104 26 150 12 34 26 62 38 84
               12-22 26-50 38-84 16-46 26-96 26-150 0-26-3-50-12-70-8-18-26-30-52-30z"
            strokeWidth="2"
          />
          {/* rucke */}
          <path d="M330 116c-22 2-36 14-40 32-4 18 2 34 12 44" strokeWidth="2" />
          <path d="M430 116c22 2 36 14 40 32 4 18-2 34-12 44" strokeWidth="2" />
          {/* grlo i otvor */}
          <path d="M362 96V74h36v22" strokeWidth="2" />
          <path d="M358 74h44" strokeWidth="2" />

          {/* staklena boca unutra */}
          <path
            d="M366 150h28v168c0 10-6 16-14 16s-14-6-14-16z"
            strokeWidth="1.5"
            className="fig-bottle"
          />
          <path d="M374 150v-18h12v18" strokeWidth="1.5" className="fig-bottle" />
        </g>

        {/* cep i vosak — jedini zlatni element, jer je to ono sto brtvi */}
        <g className="fig-gold" fill="none" strokeLinecap="round" strokeWidth="2.5">
          <path d="M370 74v-18M380 74v-18M390 74v-18" />
          <path d="M366 60h28" strokeWidth="2" />
        </g>

        {/* oznake */}
        <g className="fig-lead" fill="none" strokeWidth="1">
          <path d="M404 62h132" />
          <path d="M470 236h96" />
          <path d="M356 300H206" />
        </g>
        <g className="fig-dot">
          <circle cx="404" cy="62" r="4" />
          <circle cx="470" cy="236" r="4" />
          <circle cx="356" cy="300" r="4" />
        </g>
        <g className="fig-label">
          <text x="546" y="58">cork &amp; two layers of wax</text>
          <text x="576" y="232">clay amphora</text>
          <text x="198" y="296" textAnchor="end">glass bottle, 0.75 L</text>
        </g>
      </svg>
      <figcaption className="fig-cap">
        The bottle never touches the sea. The amphora is sealed with cork and two layers of wax
        before it goes down.
      </figcaption>
    </figure>
  )
}

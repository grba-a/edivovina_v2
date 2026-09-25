import Image from 'next/image'

/**
 * Otvor podstranice.
 *
 * PROMJENA 24. rujna 2026. Prva verzija je bila samo tipografska (odluka A1),
 * bez fotografije. Petar, nakon sto ju je vidio: „sve je previse prazno i
 * monotono, fali slika... pogotovo bi stavio hero slike na podstranice".
 *
 * Bio sam u pravu oko onoga sto je kod njih lose — SVIH PET podstranica otvara
 * ISTU fotografiju amfore na sljuncu — ali sam iz toga izveo krivi zakljucak
 * da fotografija onda ne treba uopce. Nije problem bila slika nego to sto je
 * jedna te ista i sto ne govori nista o stranici na kojoj stoji.
 *
 * Sada svaka stranica ima SVOJU, izabranu prema onome sto je na njoj:
 *   /shop        boce na stolu uz more
 *   /about-us    ponton prekriven amforama
 *   /visit-us    podrum s bacvama
 *   /gallery     ronilac iznad amfora
 *   /news-stories zid uokvirenih clanaka i nagrada
 *   /contact     uvala
 *
 * Pravne stranice ostaju BEZ fotografije: ondje je slika ukras na tekstu koji
 * nitko ne cita iz zadovoljstva, i samo bi ga usporila.
 *
 * VISINA NIJE 100svh. To je heroj naslovnice i njegov posao; ovdje bi traka
 * preko cijelog kadra znacila da se na telefonu do sadrzaja mora skrolati.
 * 44svh na mobitelu, nesto vise na sirokom kadru.
 *
 * Zastor je tezi PRI DNU, isto kao na naslovnici: ravnomjeran zastor zadovolji
 * kontrast i ubije fotografiju.
 */
export default function PageHead({
  title,
  lede,
  eyebrow,
  photo,
  /** Sto je na slici. Prazno samo ako je slika cisti ukras — ovdje nikad nije. */
  photoAlt,
  /** Pomak kadra, gdje predmet nije u sredini. */
  focus,
}: {
  title: string
  lede?: string
  eyebrow?: string
  photo?: string
  photoAlt?: string
  focus?: string
}) {
  if (!photo) {
    return (
      <header className="phead">
        <div className="wrap">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="phead-title">{title}</h1>
          {lede ? <p className="phead-lede">{lede}</p> : null}
        </div>
      </header>
    )
  }

  return (
    <header className="phead phead-photo">
      <Image
        src={photo}
        alt={photoAlt ?? ''}
        fill
        sizes="100vw"
        className="phead-bg"
        style={focus ? { objectPosition: focus } : undefined}
        priority
      />
      <div className="phead-scrim" />
      <div className="wrap">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="phead-title">{title}</h1>
        {lede ? <p className="phead-lede">{lede}</p> : null}
      </div>
    </header>
  )
}

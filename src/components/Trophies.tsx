import Image from 'next/image'
import { getDict, type Lang } from '@/i18n'
import { LANE_NARROW } from '@/lib/stage'

/**
 * Wine trophies. Kod njih je to pet kutija u nizu; ovdje je popis s jednom
 * zlatnom crtom, jer je sadrzaj popis, a ne pet odvojenih predmeta.
 *
 * Oznaka `kind` postoji zbog nalaza iz v3: Sabatina je natjecanje u DIZAJNU.
 * Bez oznake se pet redaka cita kao pet vinskih medalja.
 */
export default function Trophies({ lang = 'en' }: { lang?: Lang }) {
  const t = getDict(lang).trophies
  return (
    <section data-act="trophies" className={`section lane-${LANE_NARROW.trophies}`}>
      <div className="wrap full">
        {/* Bez eyebrow oznake, isto: „Awards" nad „Wine trophies" je isto
            dvaput. Ostaju samo dvije na stranici, „Peljesac" i „Our mission",
            jer one imenuju mjesto i temu koje naslov ne nosi. */}
        <div className="sec-head">
          <h2>{t.title}</h2>
        </div>

        <ul className="trophies">
          {t.awards.map((a, i) => (
            <li key={`${a.body}-${a.year ?? i}`}>
              <Image src={a.medal} alt="" width={56} height={56} className="trophy-medal" />
              <div className="trophy-text">
                <h3>
                  {a.body}
                  {a.year ? <span className="trophy-year"> {a.year}</span> : null}
                </h3>
                <p>{a.what}</p>
              </div>
              <span className={`trophy-kind kind-${a.kind}`}>{t.kind[a.kind]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

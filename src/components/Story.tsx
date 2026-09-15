import { STORY, MISSION, FACTS } from '@/data/copy'
import { LANE_NARROW } from '@/lib/stage'

/**
 * Prica + misija, kao na njihovom webu, ali u jednom bloku umjesto dva
 * Elementorova kontejnera jedan ispod drugog.
 *
 * Ovdje se amfora prvi put pojavi: poza `story` je desno, velika i blizu.
 * Zato blok nosi traku (`lane-r`) i tekst se povuce lijevo — bez toga bi
 * predmet sjeo na odlomak.
 */
export default function Story() {
  return (
    <section
      data-act="story"
      className={`section on-cream lane-${LANE_NARROW.story}`}
    >
      <div className="wrap story">
        <p className="eyebrow">{STORY.eyebrow}</p>
        <h2 className="story-lead">{STORY.lead}</h2>

        <div className="story-body">
          {STORY.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <a className="btn" href="/about-us">
            {STORY.cta}
          </a>
        </div>

        <hr className="rule story-rule" />

        <p className="eyebrow">{MISSION.eyebrow}</p>
        <h3 className="story-lead">{MISSION.lead}</h3>
        <div className="story-body">
          {MISSION.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>

        {/* Brojke koje su prosle provjeru. Ostale tvrdnje s njihovog weba
            (svjetski patent, "first in the world", dubina) namjerno NISU
            ovdje — vidi biljesku u `copy.ts`. */}
        <dl className="facts">
          {FACTS.map((f) => (
            <div key={f.label}>
              <dt>
                {f.value}
                {f.unit ? <span className="facts-unit">&#176;{f.unit}</span> : null}
              </dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

import { WINES } from '@/data/wines'
import { money } from '@/lib/money'

/**
 * LJEPLJIVA TRAKA ZA KUPNJU (odluka C, Petar 2026-09-18).
 *
 * Na telefonu dosad nije postojao NIJEDAN put prema kupnji iznad preloma.
 * Ova traka znaci da kupac nikad nije dalje od jednog dodira od trgovine.
 *
 * Kad je vidljiva, odlucuje POZORNICA (`data-buybar` na <html>), ne CSS
 * `position: sticky`. Dva razloga, oba placena:
 *   - `sticky` element ostaje u toku, pa nikad ne pokriva hero nego se s njim
 *     skrola (vidi `sticky-negative-margin-escapes` u vaultu)
 *   - traka koja sjedne na drugi CTA je vec jednom razvalila naslovnicu
 *     (`floating-button-covers-cta`), pa je u footeru i u heroju NEMA
 *
 * Server komponenta: nema stanja, nema hidracije, cisti HTML + CSS.
 */
export default function BuyBar() {
  const hero = WINES[0]

  return (
    <div className="buybar" aria-hidden={false}>
      <div className="buybar-in">
        <div className="buybar-t">
          <strong>{hero.name}</strong>
          <span>
            {money(hero.price)} &#183; {hero.kind}
          </span>
        </div>
        <a className="buybar-go" href="/shop">
          Shop
        </a>
      </div>
    </div>
  )
}

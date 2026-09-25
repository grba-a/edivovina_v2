/**
 * PLUTAJUCI GUMB ZA KUPNJU (odluka C, Petar 2026-09-18).
 *
 * Na telefonu nije postojao NIJEDAN put prema kupnji iznad preloma. Ovo znaci
 * da kupac nikad nije dalje od jednog dodira od trgovine.
 *
 * BIO JE TRAKA PREKO CIJELE SIRINE, s imenom vina, cijenom i vrstom — tri
 * komada teksta i gumb. Petar, 2026-09-24: „previse mi je ovo teksta".
 * Tocno: traka je na telefonu nosila „Navis Mysterium Undersea Amphora"
 * skraceno trotockom, sto je ime koje nitko ne cita u prolazu, i vezala je
 * cijelu naslovnicu uz JEDAN proizvod bez razloga.
 *
 * Sada je jedan gumb i jedna rijec. Odrediste je isto, teksta je cetiri puta
 * manje, a meta je veca jer nije stisnuta uz naziv.
 *
 * SAMO NA MOBITELU I TABLETU. Od 62.5rem je sakriven u CSS-u: ondje header
 * nosi puni izbornik pa je „Wines" ionako stalno na ekranu.
 *
 * Kad je vidljiv, odlucuje POZORNICA (`data-buybar` na <html>), ne CSS
 * `position: sticky`. Dva razloga, oba placena:
 *   - `sticky` element ostaje u toku, pa nikad ne pokriva hero nego se s njim
 *     skrola (vidi `sticky-negative-margin-escapes` u vaultu)
 *   - gumb koji sjedne na drugi CTA je vec jednom razvalio naslovnicu
 *     (`floating-button-covers-cta`), pa ga u heroju i u footeru NEMA
 *
 * Server komponenta: nema stanja, nema hidracije, cisti HTML + CSS.
 */
export default function BuyBar() {
  return (
    <a className="buybtn" href="/shop">
      Shop
    </a>
  )
}

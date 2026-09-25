# Podstranice v2 — plan gradnje

Petrov izbor iz artifacta `HRnGiGBEtPLx3rWDShxUhT`, 25. rujna 2026.
(db kolekcija `izbor/`). Svih sest = preporuka, bez biljeski.

| stranica | izbor | sto to znaci |
|---|---|---|
| about | `descent` — Silazak | pozadina tamni kroz stranicu, ljestvica dubine uz lijevi rub, tri crteza kao postaje |
| visit | `route` — Put | okomita linija Dubrovnik → Ston → Drace → Janjina, svaka postaja svoj blok |
| contact | `reach` — Javi se | tri velika reda (nazovi/WhatsApp/mail) na prvom ekranu, adrese pa obrazac |
| gallery | `sheet` — Kontakt-list | trake po temi na tamnoj ploci, ~6 kadrova po traci, NE svih 158 |
| press | `index` — jedan otvoren + kazalo | najnoviji sa slikom i izvatkom, ostali kao tanki redci bez slike |
| wines | `keep` | ne diram |

## Sto ide van na svim podstranicama
Nabrojani znakovi generirane stranice (frontend-design skill), izmjereno 17 CSS
pravila s razmaknutim verzalom:
- `.eyebrow` oznaka iznad naslova — brise se s podstranica
- identicne kartice s istim radijusom i sjenom
- meta-nizovi spojeni srednjom tockom

NASLOVNICU NE DIRAM: `Story`, `Trophies`, `Wines`, `Press` i dalje nose eyebrow.
Petar to nije imenovao. Prijaviti mu kao zasebnu odluku.

## Redoslijed
1. contact → 2. press → 3. gallery → 4. visit → 5. about
Nakon svakog: `node scripts/subpages-pass.mjs` i snimka u WebKitu.

## Otvoreno, ceka klijenta
radno vrijeme · cijena i trajanje obilaska · velicina grupe · trosak dostave
Ronjenje se NE spominje (klijent potvrdio 2026-09-04 da ture vise nema).

## Otvoreno, ceka Petra
- dubina: naslovnica kaze „around 20 metres", podstranice 18–25 m (odluka L1). Ne mogu oboje.
- vault tvrdi da je projekt mrtav i da mu je putanja `~/Desktop/EdivoVina/edivo-web`

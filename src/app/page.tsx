import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Viewer from '@/components/Viewer'
import Wines from '@/components/Wines'
import Press from '@/components/Press'
import Trophies from '@/components/Trophies'
import Footer from '@/components/Footer'
import BuyBar from '@/components/BuyBar'

/**
 * Naslovnica. Redoslijed je NJIHOV, s edivovina.hr:
 *   hero -> prica o Peljescu -> misija -> shop -> video -> news -> trophies
 *
 * Video galerija (66 klipova u carouselu kod njih) namjerno NIJE u prvoj
 * rundi — to je zaseban posao oko tezine stranice i facade embeda. Ostalo je
 * cijelo.
 *
 * Svaka sekcija nosi `data-act`. To je jedini ulaz u koreografiju amfore:
 * `stage.ts` mjeri sekcije u DOM-u i po njima postavlja predmet. Sekcija koja
 * nema `data-act` amfori ne postoji.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      {/* Redoslijed je pripovjedni: more i Peljesac (zasto), pa predmet koji je
          iz tog mora izasao (sto), pa vina (kupi). Prikaz proizvoda stoji
          neposredno nad cijenama, ne na dnu stranice. */}
      <Viewer />
      <Wines />
      <Press />
      <Trophies />
      <Footer />
      <BuyBar />
    </>
  )
}

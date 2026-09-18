/**
 * Katalog s klijentovog weba, 15. rujna 2026.
 *
 * Cijene su PROCITANE s njihovih product stranica (JSON-LD `price`), ne
 * procijenjene. Ako se na webu promijene, ovdje se moraju promijeniti rucno —
 * ovo je predlozak, ne izvor istine.
 *
 * `slug` je isti kao njihov WooCommerce slug, pa se katalog pri prepisu u
 * Breakdance + WooCommerce mapira jedan na jedan.
 */

export type Wine = {
  slug: string
  name: string
  /** eur, bez valute — formatira `money.ts` */
  price: number
  photo: string
  /** sjedi li vino u moru; nosi oznaku na kartici */
  undersea: boolean
  /** kratka oznaka tipa, iz njihovog kataloga; engleski, kao i ostatak weba */
  kind: string
  /**
   * Ide li na naslovnicu. Odluka D, Petar 2026-09-18: DVIJE, ne osam.
   * Osam kartica je katalog, a katalog ne bira umjesto kupca. Ostalih sest
   * zivi na /shop, gdje im je i mjesto.
   */
  home?: boolean
  /**
   * Nagrada koja stoji UZ CIJENU, ne na dnu stranice.
   *
   * Tekst i medalja su NJIHOVI, s njihovog weba (vidi `awards.ts`):
   *   amfora i undersea boca -> America Wine Awards 2021, zlato
   *   Dingac                 -> Decanter World Wine Awards, srebro
   * Nijedna nagrada se ne pripisuje vinu koje je nije dobilo.
   */
  award?: { label: string; medal: string }
}

export const WINES: Wine[] = [
  {
    slug: 'navis-mysterium-undersea-amphora',
    name: 'Navis Mysterium Undersea Amphora',
    price: 382,
    photo: '/photo/p-undersea-amphora.jpg',
    undersea: true,
    kind: 'Amphora',
    home: true,
    award: { label: 'Gold, America Wine Awards 2021', medal: '/medal/gold.png' },
  },
  {
    slug: 'navis-mysterium-undersea-bottle',
    name: 'Navis Mysterium Undersea Bottle',
    price: 117,
    photo: '/photo/p-undersea-bottle.jpg',
    undersea: true,
    kind: 'Dingač',
  },
  {
    slug: 'navis-q-sea-bottle',
    name: 'Navis Q Sea Bottle',
    price: 117,
    photo: '/photo/p-navis-q.jpg',
    undersea: true,
    kind: 'Plavac Mali',
  },
  {
    slug: 'eros-sparkling-wine-sea-bottle',
    name: 'Eros Sparkling Wine Sea Bottle',
    price: 110,
    photo: '/photo/p-eros.jpg',
    undersea: true,
    kind: 'Sparkling',
  },
  {
    slug: 'navis-mysterium-tris',
    name: 'Navis Mysterium TRIS',
    price: 536,
    photo: '/photo/p-tris.jpg',
    undersea: true,
    kind: 'Three-bottle set',
  },
  {
    slug: 'navis-mysterium-regular-bottle',
    name: 'Navis Mysterium Regular Bottle',
    price: 39,
    photo: '/photo/p-regular.jpg',
    undersea: false,
    kind: 'Dingač',
    home: true,
    award: { label: 'Silver, Decanter World Wine Awards', medal: '/medal/decanter.png' },
  },
  {
    slug: 'q-edivo',
    name: 'Q Edivo',
    price: 22,
    photo: '/photo/p-q-edivo.jpg',
    undersea: false,
    kind: 'Plavac Mali',
  },
  {
    slug: 'rose',
    name: 'Rosé',
    price: 17.5,
    photo: '/photo/p-rose.jpg',
    undersea: false,
    kind: 'Rosé',
  },
]

/** Naslovnica nosi samo ove dvije: pricu (amfora) i ulaznu cijenu (Dingac). */
export const HOME_WINES = WINES.filter((x) => x.home)

/**
 * STANJE ZALIHA I DOSTAVA NAMJERNO NISU NA KARTICI.
 *
 * Njihova stara product stranica ima oboje, i to je prava prednost koju nasa
 * naslovnica jos ne nosi. Ali ja te podatke NE ZNAM: postarina, rok i zaliha
 * moraju doci od klijenta. Izmisljena zaliha („Na stanju") na kartici od
 * 382 EUR je tvrdnja, ne ukras, i zato je ovdje nema.
 */

/**
 * TRAP iz v3, prenesena: fotografija za TRIS pokazuje JEDNU bocu Erosa, ne set
 * od tri. Ostavljeno kako jest jer je to slika s njihovog weba; ceka novi
 * materijal od klijenta.
 */

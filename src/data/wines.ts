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
}

export const WINES: Wine[] = [
  {
    slug: 'navis-mysterium-undersea-amphora',
    name: 'Navis Mysterium Undersea Amphora',
    price: 382,
    photo: '/photo/p-undersea-amphora.jpg',
    undersea: true,
    kind: 'Amphora',
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

/**
 * TRAP iz v3, prenesena: fotografija za TRIS pokazuje JEDNU bocu Erosa, ne set
 * od tri. Ostavljeno kako jest jer je to slika s njihovog weba; ceka novi
 * materijal od klijenta.
 */

/**
 * Katalog. Povucen 24. rujna 2026. iz NJIHOVOG WooCommerce Store API-ja
 * (`/wp-json/wc/store/v1/products`), ne prepisan rukom i ne procijenjen:
 * cijena, stanje zalihe, broj recenzija i opis dolaze iz njihovog izvora.
 *
 * ISPRAVAK 24. rujna: prosla runda je imala OSAM vina, a njih je DESET.
 * Nedostajali su Dingac Edivo (29 EUR) i Plavac Edivo (21 EUR). Svih osam
 * cijena koje smo vec imali poklopilo se s njihovima do centa.
 *
 * `slug` je isti kao njihov WooCommerce slug, pa se katalog pri prepisu u
 * Breakdance + WooCommerce mapira jedan na jedan.
 *
 * JEDINA IZMJENA NJIHOVOG TEKSTA: kod amfore im mjera stoji kao „0,75" bez
 * jedinice, dok svugdje drugdje pise „0,75 l". Dopisana je jedinica i nista
 * drugo.
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
   * Iz njihovog API-ja. Undersea Bottle je RASPRODAN, a kod njih i dalje stoji
   * u mreznom prikazu s gumbom „Read more", bez ijedne oznake. Kod nas nosi
   * oznaku i ne nudi kupnju.
   */
  inStock: boolean
  /**
   * Njihove stvarne recenzije. Osam ih je ukupno na deset proizvoda, sve 5,00,
   * najnovija iz 2022. — zato sto je pisanje kod njih iza prijave na racun
   * (odluka D, Petar 2026-09-24: prikazujemo ih s datumom).
   */
  reviews?: { count: number; rating: number }
  /** Meta redak s njihove stranice: tip, volumen, berba, alkohol. */
  spec: string[]
  /** Njihov opis proizvoda, doslovno. */
  body: string
  /**
   * „Notice: each amphora is unique…" — kod njih stoji sitno, na dnu, iza dva
   * odlomka. To je argument za prodaju, ne pravna sitnica, pa se vadi u svoje
   * polje i stavlja uz cijenu.
   */
  notice?: string
  /**
   * Ide li na naslovnicu. Odluka D, Petar 2026-09-18: DVIJE, ne osam.
   * Ostalih osam zivi na /shop, gdje im je i mjesto.
   */
  home?: boolean
  /**
   * Nagrada koja stoji UZ CIJENU, ne na dnu stranice.
   *
   * OTVORENO PITANJE, 24. rujna 2026.: Decanterovo srebro je u `awards.ts`
   * opisano kao „Dingac has been awarded a Silver medal". Mi ga nosimo na
   * „Navis Mysterium Regular Bottle" (39 EUR, Plavac s Dingaca i Postupa), a
   * u medjuvremenu je u katalogu i proizvod koji se DOSLOVNO zove „Dingac
   * Edivo" (29 EUR). Nijedan njihov opis proizvoda ne spominje nagradu, pa
   * njihov web pitanje ne rjesava. Dodjela ostaje kako je bila dok Petar ne
   * provjeri s klijentom — nagrada se ne seli na osjecaj.
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
    kind: 'Plavac Mali',
    inStock: true,
    reviews: { count: 2, rating: 5.00 },
    spec: ['Premium red wine', '0,75 l', 'aged under the sea for 1,5 to 2 years, comes in a hand crafted wooden box', '2013 · 14.5%'],
    body:
      'Undisputedly the most recognized Croatian wine exported worldwide can only be found on '
    +       'the Peljesac Peninsula. The grape varietal known as Dingac grows on very rugged land '
    +       'with little top soil together with over 2800 hours of sunlight annually caressed by a '
    +       'southerly breeze blowing the sea salt over the vines growing on its forty five degree '
    +       'slopes… ideal conditions for growing grapes for red wine. The dark ruby color wine with '
    +       'a purplish tone, crystal clear full of a soft taste which is harmonized, tart and sweet. '
    +       'Edivo Navis Mysterium Amphora wine is unique because it has never seen light until it is '
    +       'poured in to your glass for the first time wherever it may be in the world. Even the old '
    +       'Greeks stored their wine in amphoras, whose resin coating protected the wine.',
    notice:
      'each amphora is unique and may vary from the photographs displayed. The product image is '
    +       'for illustration purposes only. The vintage and alcohol percentage may differ from the '
    +       'one shown.',
    home: true,
    award: { label: 'Gold, America Wine Awards 2021', medal: '/medal/gold.png' },
  },
  {
    slug: 'navis-mysterium-tris',
    name: 'Navis Mysterium TRIS',
    price: 536,
    photo: '/photo/p-tris.jpg',
    undersea: true,
    kind: 'Set of three',
    inStock: true,
    reviews: { count: 1, rating: 5.00 },
    spec: ['Premium red wine', '0,75 x 3'],
    body:
      'Amphora, Sea Bottle and Regular Bottle Edivo Navis Mysterium Tris is a combination of '
    +       'Croatia’s most recognized wine bottled in three different ways. Packaged together in a '
    +       'beautiful hand carved wooden box. Here we are talking about the same wine aged in '
    +       'various ways leading to a specific flavor and aroma distinguished by each different '
    +       'aging process. True wine connoisseurs will delight in the varying nuances in aroma with '
    +       'fine grained mature tannins, and highlighted is the flavor of dark fruits and herbal '
    +       'combination. An ideal gift for special occasions, which you will want to keep as a '
    +       'lifetime souvenir. Your very own piece of Croatia',
    notice:
      'each amphora and bottle are unique and may vary from the photographs displayed. The '
    +       'product image is for illustration purposes only. The vintage and alcohol percentage may '
    +       'differ from the one shown.',
  },
  {
    slug: 'navis-mysterium-undersea-bottle',
    name: 'Navis Mysterium Undersea Bottle',
    price: 117,
    photo: '/photo/p-undersea-bottle.jpg',
    undersea: true,
    kind: 'Plavac Mali',
    inStock: false,
    reviews: { count: 2, rating: 5.00 },
    spec: ['Premium red wine'],
    body:
      '0,75 l aged under the sea for 1,5 to 2 years, comes in a hand crafted wooden box Plavac '
    +       'mali grown at Dingač and Postup positions. Mineral, spicy and extremely fruity with a '
    +       'strong spicy addition. Plum jam is almost the trademark of Plavac Mali, but there are '
    +       'also plenty of berries. Red and blackcurrant in particular, cloves, cinnamon, sweet '
    +       'spices, cedar, carob. Juicy, ripe and fine polished tannins combined with unusually high '
    +       'and very pleasant freshness, and ripe fruitiness, make it soft, gentle and pleasantly '
    +       'rough.',
    notice:
      'each bottle is unique and may vary from the photographs displayed. The product image is '
    +       'for illustration purposes only. The vintage and alcohol percentage may differ from the '
    +       'one shown.',
    award: { label: 'Gold, America Wine Awards 2021', medal: '/medal/gold.png' },
  },
  {
    slug: 'navis-q-sea-bottle',
    name: 'Navis Q Sea Bottle',
    price: 117,
    photo: '/photo/p-navis-q.jpg',
    undersea: true,
    kind: 'White',
    inStock: true,
    spec: ['Premium wine', '0,75 l'],
    body:
      'Among the many rich red wines like Plavac mali and Dingač that originate from Pelješac '
    +       'peninsula, we found an inspiration for a white wine which combines three grape varieties '
    +       'into our new product – Navis Q. It links together three significant white wine regions '
    +       'of Croatia: the island of Korčula, Pelješac peninsula and mainland region Slavonija. '
    +       'Navis Q is an off-dry white blend made from Pošip, Rukatac and Chardonnay. It has a nice '
    +       'golden color and aromas of yellow flowers, citruses, red apple and stone fruits. It is '
    +       'medium bodied with pleasant acidity and nice minerality.',
  },
  {
    slug: 'eros-sparkling-wine-sea-bottle',
    name: 'Eros Sparkling Wine Sea Bottle',
    price: 110,
    photo: '/photo/p-eros.jpg',
    undersea: true,
    kind: 'Sparkling',
    inStock: true,
    spec: ['Premium wine', '0,75 l'],
    body:
      'The wine has straw yellow color and nice effervescence with medium-sized bubbles. Aromas '
    +       'are pronounced and very appealing: white flowers, apples, peaches and honey. The palate '
    +       'is very refreshing, with pronounced acidity and nice balance. The wine is well-crafted, '
    +       'elegant and easy drinking. It should be enjoyed well chilled at 6°-8°C.',
  },
  {
    slug: 'navis-mysterium-regular-bottle',
    name: 'Navis Mysterium Regular Bottle',
    price: 39,
    photo: '/photo/p-regular.jpg',
    undersea: false,
    kind: 'Dingač',
    inStock: true,
    reviews: { count: 1, rating: 5.00 },
    spec: ['Premium wine', '0,75 l'],
    body:
      'Plavac mali grown at Dingač and Postup positions. Mineral, spicy and extremely fruity '
    +       'with a strong spicy addition. Plum jam in almost the trademark of Plavac Mali but there '
    +       'are also plenty of berries. Red and black currant in particular. Cloves, cinnamon, sweet '
    +       'spices, cedar, carob. Juicy, ripe and fine polished tannins combined with unusually high '
    +       'and very pleasant freshness, and ripe fruitiness, make it soft, gentle and pleasantly '
    +       'rough.',
    notice:
      'The product image is for illustration purposes only. The vintage and alcohol percentage '
    +       'may differ from the one shown.',
    home: true,
    award: { label: 'Silver, Decanter World Wine Awards', medal: '/medal/decanter.png' },
  },
  {
    slug: 'dingac-edivo',
    name: 'Dingac Edivo',
    price: 29,
    photo: '/photo/p-dingac.jpg',
    undersea: false,
    kind: 'Dingač',
    inStock: true,
    reviews: { count: 1, rating: 5.00 },
    spec: ['Premium red wine'],
    body:
      '0,75 l Dingac is undisputedly the most recognized wine in Croatia. An extremely elegant '
    +       'red wine filled with fine grained mature tannins. Highlighted with a flavor of dark '
    +       'fruits and a. herbal combination. A strong bouquet which holds dark and red fruits, dark '
    +       'chocolate, smokey, cinnamon, sweet spices, cedar and carob undertones. An unusual and '
    +       'smooth freshness, where the mature fruitiness remains soft and spicy and leaves a '
    +       'defined fruity taste.',
    notice:
      'The product image is for illustration purposes only. The vintage and alcohol percentage '
    +       'may differ from the one shown.',
  },
  {
    slug: 'plavac-edivo',
    name: 'Plavac Edivo',
    price: 21,
    photo: '/photo/p-plavac.jpg',
    undersea: false,
    kind: 'Plavac Mali',
    inStock: true,
    spec: ['Premium red wine'],
    body:
      '0,75 l A mature Plavac is characterized by its dark ruby red color. Mineral, spicy and '
    +       'extremely fruity with a strong spicy addition. Plus jam is almost the trademark of '
    +       'Plavac Mali, but there are also plenty of berries, red and blackcurrant in particular, '
    +       'cloves, cinnamon, sweet spices, cedar, carob. Juicy, ripe and fine polished tannins '
    +       'combined with unusually high and very pleasant freshness, and ripe fruitiness, make it '
    +       'soft, gentle and pleasantly rough.',
    notice:
      'The product image is for illustration purposes only. The vintage and alcohol percentage '
    +       'may differ from the one shown.',
  },
  {
    slug: 'q-edivo',
    name: 'Q Edivo',
    price: 22,
    photo: '/photo/p-q-edivo.jpg',
    undersea: false,
    kind: 'White',
    inStock: true,
    reviews: { count: 1, rating: 5.00 },
    spec: ['Premium white wine'],
    body:
      '0,75 l Among the many rich red wines like Plavac Mali and Dingač that originate from the '
    +       'Pelješac peninsula, we found inspiration for a white wine that combines the three white '
    +       'sorts Pošip, Rukatac and Chardonnay into our product. A Semi Dry, white wine which is a '
    +       'combination of Posip, Rukatac and Chardonnay. This wine has pulled together the three '
    +       'significant white wine regions of Croatia, including the Island of Korcula, Slavonija '
    +       'Mainland and Peljesac Peninsula.',
    notice:
      'The product image is for illustration purposes only. The vintage and alcohol percentage '
    +       'may differ from the one shown.',
  },
  {
    slug: 'rose',
    name: 'Rosé',
    price: 17.5,
    photo: '/photo/p-rose.jpg',
    undersea: false,
    kind: 'Rosé',
    inStock: true,
    spec: ['Rosé'],
    body:
      '0,75 l The wine is crystal clear, it has a deeper pink color and medium viscosity. The '
    +       'nose is dominated by aromas of rose, strawberry and red fruit. Aromas are quite pleasant '
    +       'and lasting.',
  },]

/** Naslovnica nosi samo ove dvije: pricu (amfora) i ulaznu cijenu (Dingac). */
export const HOME_WINES = WINES.filter((x) => x.home)

/** Jedno vino po slugu, za /product/[slug]. */
export const bySlug = (slug: string) => WINES.find((x) => x.slug === slug)

/**
 * DOSTAVA NAMJERNO NIJE NIGDJE NA KARTICI NI NA PROIZVODU.
 *
 * Njihova politika dostave kaze samo da se cijena „racuna prema vrijednosti
 * narudzbe, velicini proizvoda i odredisnoj zemlji" — konkretnog iznosa nema
 * nigdje na webu. Izmisljena postarina je tvrdnja, ne ukras.
 *
 * Potvrdeno im na webu i smije se navesti: slanje u 24 sata od narudzbe,
 * kuriri UPS, DPD i DHL, otkazivanje unutar 48 sati prije slanja.
 */

/**
 * TRAP iz v3, prenesena: fotografija za TRIS pokazuje JEDNU bocu Erosa, ne set
 * od tri. Ostavljeno kako jest jer je to slika s njihovog weba; ceka novi
 * materijal od klijenta.
 */

/**
 * PRESS — 59 medijskih spomena, povuceno s njihove stranice 24. rujna 2026.
 *
 * Sve su to TUDI clanci o njima, ne njihovi tekstovi — jedan je na
 * spanjolskom, jedan na portugalskom, nekoliko na hrvatskom.
 *
 * ODLUKA SE PROMIJENILA ISTI DAN. U artifactu je bila I1: samo izvor, naslov i
 * datum, link vodi van. Petar je nakon sto je vidio kako to izgleda trazio
 * kartice sa sadrzajem koje vode na clanak KOD NAS — dakle I2. Tekst zato
 * zivi u `news-bodies.ts`, a `storyHref` pokazuje na nasu rutu.
 *
 * STO TO NOSI SA SOBOM: 21 337 rijeci tudeg novinarskog teksta na njihovoj
 * domeni. Kod njih vec tako stoji, pa je ovo selidba postojeceg sadrzaja, a ne
 * novo objavljivanje — ali ako klijent nema dopustenje izvornih redakcija,
 * nema ga ni sada. Vrijedi ga pitati prije nego ovo zamijeni njihov web.
 *
 * Izvor je imenovan samo ondje gdje ga NJIHOV naslov navodi („VOGUE ADRIA /
 * Underwater Wine Cellars"). Gdje ga ne navodi, ne pogadam ga.
 *
 * Naslovne slike su njihove, po jedna za svaki clanak.
 */

export type Story = {
  /** njihov slug na /news/<slug> */
  slug: string
  /** samo gdje ga njihov naslov stvarno imenuje */
  outlet?: string
  title: string
  /** ISO, da se sortira i da <time> ima strojni datum */
  date: string
}

export const STORIES: Story[] = [
  {
    slug: 'jorge-y-pancho-recorriendo-croacia-y-buscando-a-mirko-jozic-socios-por-el-mundo',
    title: 'Jorge y Pancho recorriendo Croacia y buscando a Mirko Jozic | Socios por el Mundo',
    date: '2025-11-08',
  },
  {
    slug: 'engoo-com-croatian-winery-offers-undersea-cellar-tours',
    outlet: 'ENGOO.COM',
    title: 'Croatian Winery Offers Undersea Cellar Tours',
    date: '2024-10-01',
  },
  {
    slug: 'vogue-adria-underwater-wine-cellars',
    outlet: 'VOGUE ADRIA',
    title: 'Underwater Wine Cellars',
    date: '2024-06-17',
  },
  {
    slug: 'national-geographic-travel-article',
    outlet: 'National Geographic',
    title: 'Travel Article',
    date: '2023-09-12',
  },
  {
    slug: 'my-wine-life-will-never-be-the-same-from-now-on',
    title: 'My wine life will never be the same from now on',
    date: '2023-08-01',
  },
  {
    slug: 'luxury-living-croatia',
    title: 'Luxury Living Croatia',
    date: '2023-07-03',
  },
  {
    slug: 'quirky-croatia',
    title: 'Quirky Croatia',
    date: '2023-01-13',
  },
  {
    slug: 'brodska-tajna-skrivena-u-amfore',
    title: '"Brodska tajna" skrivena u amfore',
    date: '2022-09-21',
  },
  {
    slug: 'croatia-a-kingdom-of-salt-and-sea',
    title: 'Croatia: A Kingdom of Salt and Sea',
    date: '2022-09-21',
  },
  {
    slug: 'the-travel-detective-hidden-gems-of-dubrovnik',
    title: 'THE TRAVEL DETECTIVE Hidden Gems of Dubrovnik',
    date: '2022-06-27',
  },
  {
    slug: 'dubrovnik-eats',
    title: 'Dubrovnik Eats',
    date: '2022-06-10',
  },
  {
    slug: 'belgium-loves-edivo',
    title: 'Belgium loves Edivo',
    date: '2022-04-28',
  },
  {
    slug: 'wine-tour-on-peljesac-one-peninsula-three-wineries-and-three-completely-different-stories',
    title: 'Wine tour on Pelješac: one peninsula, three wineries and three completely different stories',
    date: '2022-03-09',
  },
  {
    slug: 'the-epoch-times',
    title: 'The Epoch Times',
    date: '2021-11-02',
  },
  {
    slug: 'one-of-top-10-things-to-do-in-dubrovnik-is-visiting-edivo-winery',
    title: 'One of top 10 things to do in Dubrovnik is: Visiting Edivo Winery',
    date: '2021-08-30',
  },
  {
    slug: 'dive-for-wine-croatias-underwater-winery',
    title: 'Dive for Wine: Croatia’s Underwater Winery',
    date: '2021-06-14',
  },
  {
    slug: 'edivo-underwater-winery-in-dubrovnik-and-drace-croatia',
    title: 'Edivo Underwater Winery In Dubrovnik And Drače, Croatia',
    date: '2021-05-26',
  },
  {
    slug: 'croatias-ultimate-wine-tour-is-15-meters-under-the-sea',
    title: 'Croatia’s Ultimate Wine Tour Is 15 Meters Under The Sea',
    date: '2021-05-26',
  },
  {
    slug: 'two-gold-medals-for-edivo-wines',
    title: 'Two gold medals for Edivo wines',
    date: '2021-02-08',
  },
  {
    slug: 'the-ultimate-wine-tour-is-in-croatia-20-metres-under-the-sea',
    title: 'The ultimate wine tour is in Croatia, 20 metres under the sea',
    date: '2021-01-19',
  },
  {
    slug: 'edivo-wines-on-iwc',
    title: 'Edivo Wines on IWC',
    date: '2020-11-09',
  },
  {
    slug: 'edivo-wines-on-net-hr',
    title: 'Edivo Wines on net.hr',
    date: '2020-10-16',
  },
  {
    slug: 'edivo-wines-on-dromedar-sk',
    title: 'Edivo Wines on Dromedar.sk',
    date: '2020-09-30',
  },
  {
    slug: 'edivo-wines-on-forbes',
    title: 'Edivo Wines on Forbes',
    date: '2020-06-23',
  },
  {
    slug: 'watch-edivo-wines-on-niijiro_jean',
    title: 'WATCH: Edivo wines on Niijiro_Jean',
    date: '2020-03-28',
  },
  {
    slug: 'os-misterios-dos-vinhos-submersos',
    title: 'Os mistérios dos vinhos submersos',
    date: '2020-02-27',
  },
  {
    slug: 'the-underwater-winery-of-croatia',
    title: 'The Underwater Winery of Croatia',
    date: '2019-09-15',
  },
  {
    slug: 'this-underwater-winery-in-croatia-deposits-wine-bottles-in-the-adriatic-sea-for-two-years',
    title: 'This underwater winery in Croatia deposits wine bottles in the Adriatic sea for two years',
    date: '2019-08-20',
  },
  {
    slug: 'pieces-of-eight',
    title: 'Pieces of Eight',
    date: '2019-08-01',
  },
  {
    slug: 'this-underwater-winery-needs-to-be-your-next-stop',
    title: 'This Underwater Winery Needs To Be Your NEXT Stop',
    date: '2019-05-16',
  },
  {
    slug: 'edivo-underwater-winery',
    title: 'Edivo underwater winery',
    date: '2019-02-07',
  },
  {
    slug: 'kelembutan-di-balik-wine-bawah-laut-kroasia',
    title: 'Kelembutan di Balik Wine Bawah Laut Kroasia',
    date: '2018-09-29',
  },
  {
    slug: 'mengunjungi-tempat-penyimpanan-wine-di-dasar-laut-kroasia',
    title: 'Mengunjungi tempat penyimpanan wine di dasar laut Kroasia',
    date: '2018-09-28',
  },
  {
    slug: 'ini-mysterium-anggur-yang-tersimpan-10-tahun-di-bawah-laut',
    title: 'Ini Mysterium, Anggur yang Tersimpan 10 Tahun di Bawah Laut',
    date: '2018-09-28',
  },
  {
    slug: 'want-that-fancy-bottle-of-wine-grab-your-wetsuit',
    title: 'Want that fancy bottle of wine? Grab your wetsuit',
    date: '2018-09-28',
  },
  {
    slug: 'menyambangi-tempat-penyimpanan-wine-di-dasar-laut-kroasia',
    title: 'Menyambangi Tempat Penyimpanan Wine di Dasar Laut Kroasia',
    date: '2018-09-28',
  },
  {
    slug: 'wet-your-whistle-a-croatian-wine-worth-diving-for',
    title: 'Wet your whistle: a Croatian wine worth diving for',
    date: '2018-09-28',
  },
  {
    slug: 'watch-these-wines-are-stored-at-the-bottom-of-the-ocean',
    title: 'WATCH: These wines are stored at the bottom of the ocean',
    date: '2018-09-28',
  },
  {
    slug: 'melihat-gudang-wine-di-dasar-laut-kroasia',
    title: 'Melihat Gudang Wine di Dasar Laut Kroasia',
    date: '2018-09-28',
  },
  {
    slug: 'underwater-wine',
    title: 'Underwater wine',
    date: '2018-09-14',
  },
  {
    slug: 'dive-into-croatias-most-unusual-winery',
    title: 'Dive into Croatia’s most unusual winery',
    date: '2018-08-14',
  },
  {
    slug: 'this-new-underwater-winery-lets-you-dive-for-your-drinks',
    title: 'This new underwater winery lets you dive for your drinks',
    date: '2018-04-10',
  },
  {
    slug: 'croatian-wines-in-the-usa',
    title: 'Croatian Wines in the USA',
    date: '2018-04-10',
  },
  {
    slug: 'dive-for-your-vino-at-this-underwater-winery',
    title: 'Dive for your vino at this underwater winery',
    date: '2018-04-10',
  },
  {
    slug: 'dingac-na-dnu-mora',
    title: 'DINGAČ NA DNU MORA',
    date: '2018-03-12',
  },
  {
    slug: 'the-most-expensive-croatian-wine-was-stored-under-the-sea-for-more-than-two-years',
    title: 'The most expensive Croatian wine was stored under the sea for more than two years',
    date: '2018-03-02',
  },
  {
    slug: 'amphora-wine-an-irresistible-and-unique-croatian-product',
    title: 'Amphora wine: an irresistible and unique Croatian product',
    date: '2018-03-02',
  },
  {
    slug: 'this-unique-croatian-product-comes-from-dubrovnik-and-is-much-in-demand-in-hong-kong-and-america',
    title: 'This unique Croatian product comes from Dubrovnik, and is much in demand in Hong Kong and America',
    date: '2018-03-02',
  },
  {
    slug: 'beauty-from-the-sea-navis-mysterium-wine',
    title: 'Beauty from the sea: Navis Mysterium wine',
    date: '2018-03-02',
  },
  {
    slug: 'stories-of-wine-the-story-of-navis-mysterium-of-tradition-and-maritime-history',
    title: 'Stories of Wine: the story of Navis Mysterium, of tradition and maritime history',
    date: '2018-03-02',
  },
  {
    slug: 'underwater-wine-navis-mysterium-in-a-charity-auction-at-novi-sad',
    title: 'Underwater wine Navis Mysterium in a charity auction at Novi Sad',
    date: '2018-03-02',
  },
  {
    slug: 'najdrazje-hrvasko-vino-je-dve-leti-lezalo-na-morskem-dnu',
    title: 'Najdražje hrvaško vino je dve leti ležalo na morskem dnu',
    date: '2018-03-02',
  },
  {
    slug: 'the-story-of-the-underwater-wine-navis-mysterium',
    title: 'The story of the underwater wine – Navis Mysterium',
    date: '2018-03-02',
  },
  {
    slug: 'national-chinese-television-cctv-documentary-about-navis-mysterium',
    title: 'National Chinese television (CCTV) documentary about Navis Mysterium',
    date: '2018-03-02',
  },
  {
    slug: 'croatia-gets-its-first-underwater-winery',
    title: 'Croatia gets its first underwater winery',
    date: '2018-01-19',
  },
  {
    slug: 'croatias-first-underwater-winery-is-open-to-visitors',
    title: 'Croatia’s First Underwater Winery Is Open to Visitors',
    date: '2018-01-19',
  },
  {
    slug: 'croatia-now-has-an-underwater-winery-and-its-as-dreamy-as-it-sounds',
    title: 'Croatia now has an underwater winery — and it’s as dreamy as it sounds',
    date: '2018-01-15',
  },
  {
    slug: 'croatia-has-its-first-underwater-winery-and-its-open-to-visitors',
    title: 'Croatia has its first underwater winery and it’s open to visitors',
    date: '2018-01-15',
  },
  {
    slug: 'this-underwater-winery-has-us-planning-a-trip-to-croatia',
    title: 'This Underwater Winery Has Us Planning a Trip to Croatia',
    date: '2018-01-15',
  },
]

/**
 * Kartice vode na NAS clanak, ne van (Petar, 2026-09-24). To mijenja odluku
 * I1 iz artifacta u I2: tekst zivi kod nas, u `news-bodies.ts`.
 */
/**
 * JEDNA DIJELJENA NASLOVNICA, i evo zasto.
 *
 * Povukao sam `og:image` sa svake njihove stranice clanka misleci da je to
 * naslovna slika clanka. NIJE: 58 od 59 ih je vratilo ISTU datoteku — njihov
 * genericki og:image. Imao sam 58 identicnih kopija u repozitoriju i mrezu
 * kartica koja izgleda kao greska.
 *
 * Sada stoji jedna slika, jednom, i koristi se svugdje. Petar, 2026-09-24:
 * „neka su slike iste na svakom blog postu".
 *
 * Ako klijent jednom posalje pravu fotografiju po clanku, polje se vraca.
 */
export const PRESS_COVER = { file: '/news/press-cover.webp', w: 1200, h: 747 }

export const storyHref = (s: Story) => `/news/${s.slug}`

/** Izvorni clanak kod njih, dok ne dobijemo URL-ove pravih redakcija. */
export const storySource = (s: Story) => `https://www.edivovina.hr/news/${s.slug}`

export const storyBySlug = (slug: string) => STORIES.find((s) => s.slug === slug)

/** Naslovnica nosi samo tri najnovija. */
export const HOME_STORIES = STORIES.slice(0, 3)

/**
 * PAZI: clanak iz Engooa govori o ronilackim turama po podmorskom podrumu.
 * Klijent je 2026-09-04 potvrdio da ronilackih tura VISE NEMA. Clanak stoji
 * kao arhiva medijskog spomena, ali se tura ne smije nigdje nuditi kao usluga.
 */

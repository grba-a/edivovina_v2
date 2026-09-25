/**
 * Recenzije s njihovog WooCommercea, povucene 24. rujna 2026. iz Store API-ja
 * (`/wp-json/wc/store/v1/products/reviews`). Doslovno njihove, nista dopisano.
 *
 * ODLUKA D1, Petar 2026-09-24: prikazuju se S DATUMOM. Sve su iz 2022. i sve
 * su petice. Datum je dio istine — kupac ga ionako moze naci.
 *
 * ZASTO IH JE SAMO OSAM: kod njih ispod recenzija pise „You must be logged in
 * to post a review". Kupac koji je platio 382 EUR nece otvarati racun da bi
 * napisao recenicu. Skidanje te prijave je jedan checkbox u WooCommerceu i
 * trazi se od klijenta.
 *
 * DVIJE IZMJENE NJIHOVIH PODATAKA, obje namjerne:
 *
 * 1. PRIVATNOST. Jedan recenzent kod njih stoji kao gola e-mail adresa
 *    (`ime.prezime@gmail.com`), javno na stranici proizvoda. Osobni podatak se
 *    ne prepisuje na novi web — ovdje stoje inicijali. Vrijedi prijaviti
 *    klijentu da to popravi i na postojecem webu.
 *
 * 2. Jedna recenzija je za „Q Bundle", proizvod kojeg u katalogu vise nema.
 *    Izostavljena je, jer nema stranicu na koju bi sjela.
 *
 * NAPOMENA: recenzija za Q Edivo je na hrvatskom („Vrhunsko vino") na inace
 * engleskom webu. Ostavljena je doslovno — tuđi tekst se ne prevodi.
 */

export type Review = {
  /** wine slug na koji se vezuje */
  slug: string
  who: string
  /** ISO, da se sortira i da <time> ima strojni datum */
  date: string
  rating: number
  text: string
}

export const REVIEWS: Review[] = [
  {
    slug: 'navis-mysterium-regular-bottle',
    who: 'Esso Lakigna',
    date: '2022-06-19',
    rating: 5,
    text: 'Best',
  },
  {
    slug: 'navis-mysterium-undersea-bottle',
    who: 'NJ',
    date: '2022-05-26',
    rating: 5,
    text: 'Great service, they answered at all my questions! The bottle is so beautiful! We bought a bottle as a gift, but now, I\'m sure we\'ll buy it for ourselves too! Great job and thank You!',
  },
  {
    slug: 'dingac-edivo',
    who: 'C. S.', // kod njih stoji gola e-mail adresa; ovdje inicijali
    date: '2022-05-21',
    rating: 5,
    text: 'A very nice captivating nose. Heaven on your tongue.',
  },
  {
    slug: 'q-edivo',
    who: 'L.B.',
    date: '2022-05-06',
    rating: 5,
    text: 'Vrhunsko vino',
  },
  {
    slug: 'navis-mysterium-tris',
    who: 'Stella Zeco',
    date: '2022-04-23',
    rating: 5,
    text: 'We gave Mysterium Tris to my mother for her 80th birthday and she was thrilled, also because she already knew the Navis Mysterium Undersee bottle and was delighted with the wine. The trio comes in beautiful packaging and placed side by side it is an unusual and decorative eye-catcher. The folks at Edivo Vina were very helpful with the order and advice. The order from Switzerland and delivery to Zagreb went flawlessly - despite last minute change requests on our part. We also had this professional impression when we stopped by the Edivo wine bar on Peljesac during our trip to Croatia over a year ago. For wine lovers and photography enthusiasts, this visit is a must.',
  },
  {
    slug: 'navis-mysterium-undersea-amphora',
    who: 'Josip',
    date: '2022-04-22',
    rating: 5,
    text: 'Perfect, and unique gift :)',
  },
  {
    slug: 'navis-mysterium-undersea-bottle',
    who: 'Track75',
    date: '2022-04-13',
    rating: 5,
    text: 'Fantastic colour, Great taste and Amazing. Beautiful Bottle. Service is incredible, before ordering we got a lot of information. Keep up the good work!',
  },
  {
    slug: 'navis-mysterium-undersea-amphora',
    who: 'Tom H',
    date: '2022-03-21',
    rating: 5,
    text: 'Such a great gift, delivered very quickly, and really great quality wine. One of a kind!',
  },]

export const reviewsFor = (slug: string) => REVIEWS.filter((r) => r.slug === slug)

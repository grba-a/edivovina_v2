/**
 * "News & stories" s klijentovog weba, tri najnovija unosa, 15. rujna 2026.
 * Naslovi i datumi prepisani s njihovog feeda; tekst se ne prenosi, samo
 * izvor i datum, a link vodi na njihov clanak.
 */

export type Story = {
  outlet: string
  title: string
  /** ISO, da se sortira i da <time> ima strojni datum */
  date: string
  href: string
}

export const STORIES: Story[] = [
  {
    outlet: 'Socios por el Mundo',
    title: 'Jorge y Pancho recorriendo Croacia y buscando a Mirko Jozic',
    date: '2025-11-08',
    href: 'https://www.edivovina.hr/news-stories',
  },
  {
    outlet: 'Engoo',
    title: 'Croatian Winery Offers Undersea Cellar Tours',
    date: '2024-10-01',
    href: 'https://www.edivovina.hr/news-stories',
  },
  {
    outlet: 'Vogue Adria',
    title: 'Underwater Wine Cellars',
    date: '2024-06-17',
    href: 'https://www.edivovina.hr/news-stories',
  },
]

/**
 * PAZI: clanak iz Engooa govori o ronilackim turama po podmorskom podrumu.
 * Klijent je 2026-09-04 potvrdio da ronilackih tura VISE NEMA. Clanak stoji
 * kao arhiva medijskog spomena, ali se tura ne smije nigdje nuditi kao usluga.
 */

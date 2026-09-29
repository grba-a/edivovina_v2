import type { HERO, VIEWER, STORY, MISSION, FACTS, NAV } from '@/data/copy'
import type { ABOUT, PLACES } from '@/data/pages'
import type { Award } from '@/data/awards'

/**
 * Sav tekst koji nije u podatkovnim datotekama, i oblik hrvatskih verzija onih
 * koje jesu. `en.ts` i `hr.ts` moraju imati ISTI oblik — tip to cuva, pa
 * hrvatskoj verziji ne moze nedostajati ni jedan redak.
 */
export type Dict = {
  layout: { skip: string; title: string; description: string; ogTitle: string; ogDescription: string }
  header: { logo: string; nav: string; menu: string; navMobile: string }
  nav: typeof NAV
  hero: typeof HERO & { bottlesAlt: string }
  viewer: typeof VIEWER & { aria: string }
  story: typeof STORY
  mission: typeof MISSION
  facts: typeof FACTS

  homeWines: { title: string; all: (n: number) => string; more: (n: number) => string }
  buyBar: string
  card: { undersea: string; soldOut: string; add: string }
  homePress: { title: string; more: string }
  trophies: { title: string; awards: Award[]; kind: Record<Award['kind'], string> }

  footer: {
    claim: string
    nav: string
    company: string
    place: string
    copyright: (year: number) => string
    switchLabel: string
  }

  shop: {
    title: string
    description: string
    head: string
    lede: string
    alt: string
    underEyebrow: string
    underTitle: string
    landTitle: string
    ship: string
  }

  about: {
    title: string
    description: string
    h1: string
    data: typeof ABOUT
    marks: { region: string; years: string; volume: string; depth: string; days: string }
  }
  fig: {
    map: { title: string; route: string; caption: string }
    section: {
      title: string
      cork: string
      clay: string
      glass: string
      caption: string
    }
    depth: { title: string; storedAt: string; metres: string; forMoreThan: string; days: string; caption: string }
  }

  places: typeof PLACES
  visit: {
    title: string
    description: string
    h1: string
    lede: string
    stops: { dubrovnik: string; ston: string }
    maps: string
    ctaTitle: string
    ctaText: string
    or: string
  }
  contact: {
    title: string
    description: string
    h1: string
    lede: string
    reach: string
    call: string
    email: string
    write: string
    name: string
    message: string
    note: string
    send: string
  }

  gallery: {
    title: string
    description: string
    head: string
    lede: (n: number) => string
    alt: string
    navLabel: string
    cats: { id: string; title: string; lede: string }[]
    count: (shown: number, all: number) => string
  }
  news: {
    title: string
    description: string
    head: string
    lede: (n: number) => string
    alt: string
    rest: (n: number) => string
  }
  article: {
    published: (outlet: string | undefined) => string
    original: string
    more: string
    all: (n: number) => string
  }
  product: {
    factsShip: string[]
    oneReview: string
    reviews: (n: number) => string
    alsoSea: string
    alsoLand: string
  }
  legalNav: string
}

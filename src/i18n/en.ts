import { HERO, VIEWER, STORY, MISSION, FACTS, NAV } from '@/data/copy'
import { ABOUT, PLACES } from '@/data/pages'
import { AWARDS, KIND_LABEL } from '@/data/awards'
import { GALLERY_CATS } from '@/data/gallery'
import type { Dict } from './dict'

/**
 * Engleski: doslovno ono sto je do sada bilo u komponentama. Nista se ne mijenja
 * u engleskoj verziji — ovdje je samo izvuceno iz JSX-a da hrvatska verzija ima
 * gdje stati uz nju.
 */
export const en: Dict = {
  layout: {
    skip: 'Skip to content',
    title: 'Underwater Wine | Navis Mysterium - Edivo Vina',
    description:
      'Wine aged more than 700 days on the Adriatic seabed. Navis Mysterium, from the Peljesac peninsula, Croatia.',
    ogTitle: 'Navis Mysterium - Edivo Vina',
    ogDescription: 'Wine aged more than 700 days on the Adriatic seabed.',
  },
  header: {
    logo: 'Edivo Wines, home',
    nav: 'Main',
    menu: 'Menu',
    navMobile: 'Main, mobile',
  },
  nav: NAV,
  hero: { ...HERO, bottlesAlt: 'Navis Mysterium amphora and bottle' },
  viewer: { ...VIEWER, aria: 'Amphora, 3D view' },
  story: STORY,
  mission: MISSION,
  facts: FACTS,

  homeWines: {
    title: 'Navis Mysterium',
    all: (n) => `All ${n} wines`,
    more: (n) => `${n} more, including the TRIS set and the sparkling Eros`,
  },
  buyBar: 'Shop',
  card: { undersea: 'Undersea', soldOut: 'Sold out', add: 'Add to cart' },
  homePress: { title: 'News & stories', more: 'View more' },
  trophies: { title: 'Wine trophies', awards: AWARDS, kind: KIND_LABEL },

  footer: {
    claim: 'Wine aged more than 700 days on the Adriatic seabed, at 14–16°C.',
    nav: 'Footer',
    company: 'Edivo Vina d.o.o.',
    place: 'Drače, Janjina, Pelješac',
    copyright: (y) => `© ${y} Edivo Vina. Pelješac, Croatia.`,
    switchLabel: 'Hrvatski',
  },

  shop: {
    title: 'Wines | Edivo Vina',
    description:
      'All ten wines from Edivo, Peljesac. Five of them aged on the Adriatic seabed, including the Navis Mysterium amphora.',
    head: 'The wines',
    lede: 'Ten wines from the Peljesac peninsula. Five of them spent more than 700 days on the Adriatic seabed.',
    alt: 'Bottles on a table by the sea, with the peninsula behind',
    underEyebrow: 'Under the sea',
    underTitle: 'Navis Mysterium',
    landTitle: 'From the vineyard',
    ship: 'Dispatched within 24 hours by UPS, DPD or DHL. Shipping is calculated per order value, size and destination.',
  },

  about: {
    title: 'About us | Edivo Vina',
    description:
      'Drace on the Peljesac peninsula, where Edivo submerged its first amphorae in 2013 and built the first underwater winery in Croatia.',
    h1: 'It starts in a village and ends on the seabed',
    data: ABOUT,
    marks: { region: 'Pelješac', years: '2011–2014', volume: '0,75 L', depth: '18–25 m', days: '700+ dana' },
  },
  fig: {
    map: {
      title:
        'Chart of the Pelješac peninsula and the coast down to Dubrovnik, marking Orebić, Janjina, Drače and Ston',
      route: 'about an hour by road',
      caption: 'Coastline from OpenStreetMap. Janjina is the winery, Drače the wine bar.',
    },
    section: {
      title:
        'Cross-section of a Navis Mysterium amphora: a 0.75 litre glass bottle inside a clay amphora, sealed with cork and two layers of wax',
      cork: 'cork & two layers of wax',
      clay: 'clay amphora',
      glass: 'glass bottle, 0.75 L',
      caption:
        'The bottle never touches the sea. The amphora is sealed with cork and two layers of wax before it goes down.',
    },
    depth: {
      title:
        'An amphora being lowered on a line to the seabed, where rows of amphorae already stand, 18 to 25 metres down',
      storedAt: 'stored under the sea at',
      metres: '18–25 metres',
      forMoreThan: 'for more than ',
      days: '700 days',
      caption: 'Depth and duration as their own About page states them.',
    },
  },

  places: PLACES,
  visit: {
    title: 'Visit us | Edivo Vina',
    description:
      'How to reach the Edivo wine bar in Drace and the winery in Janjina, about an hour from Dubrovnik along the Peljesac peninsula.',
    h1: 'An hour from Dubrovnik, then keep going',
    lede: 'The wine bar is in Drače, the winery a little further on in Janjina. This is the order you pass them.',
    stops: { dubrovnik: 'Most people start here.', ston: 'The walls, and the neck of the peninsula.' },
    maps: 'Open in Maps',
    ctaTitle: 'Call before you drive',
    ctaText: 'Hours move with the season. One call saves you an hour of road if we are closed.',
    or: 'Or write to',
  },
  contact: {
    title: 'Contact | Edivo Vina',
    description:
      'Call, message on WhatsApp or email Edivo. The winery is in Janjina, the wine bar in Drace, on the Peljesac peninsula.',
    h1: 'Talk to us',
    lede: 'Someone picks up. Hours move with the season, so a call beats guessing.',
    reach: 'Reach us',
    call: 'Call',
    email: 'Email',
    write: 'Write instead',
    name: 'Name',
    message: 'Message',
    note: 'This form is part of the template and does not send yet.',
    send: 'Send',
  },

  gallery: {
    title: 'Gallery | Edivo Vina',
    description:
      'Divers, amphorae coming up from the seabed, the cellar at Drace. Photographs from Edivo on the Peljesac peninsula.',
    head: 'The gallery',
    lede: (n) => `${n} photographs, from the vineyard to the seabed and back.`,
    alt: 'A diver above the rows of submerged amphorae',
    navLabel: 'Gallery sections',
    cats: GALLERY_CATS,
    count: (shown, all) => `${shown} of ${all}`,
  },
  news: {
    title: 'Press | Edivo Vina',
    description:
      'Fifty-nine mentions of Edivo and Navis Mysterium, from National Geographic to Vogue Adria, 2018 to 2025.',
    head: 'Press',
    lede: (n) => `${n} mentions of Navis Mysterium since 2018, from National Geographic to Vogue Adria.`,
    alt: 'A wall of framed articles and awards in the Edivo cellar',
    rest: (n) => `${n} more, back to 2018`,
  },
  article: {
    published: (outlet) => `Originally published by ${outlet ?? 'the outlet'}.`,
    original: 'See the original',
    more: 'More press',
    all: (n) => `All ${n} mentions`,
  },
  product: {
    factsShip: [
      'Dispatched within 24 hours of ordering',
      'UPS, DPD or DHL',
      'Cancel within 48 hours, before it ships',
    ],
    oneReview: 'One review',
    reviews: (n) => `${n} reviews`,
    alsoSea: 'Also from the seabed',
    alsoLand: 'Also from the vineyard',
  },
  legalNav: 'Legal',
}

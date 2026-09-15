/**
 * TEKST NASLOVNICE — doslovno s klijentovog weba (edivovina.hr, 15. rujna 2026).
 *
 * Petar je 2026-09-15 odlucio: prenosi se doslovno, kako sada pise kod njih.
 * To je njihov tekst za njihov web, pa tvrdnje ostaju njihove.
 *
 * ZNAJ STO NOSIS. Iz provjere u v3 (vidi `~/vault/30-Clients/edivo-vina.md`):
 *  - "first in the world" NE STOJI (baskijski Crusoe Treasure pod morem od
 *    2010., patent za podmorsko dozrijevanje prijavljen 2007.). "First in
 *    Croatia" stoji, potvrdeno iz pet izvora.
 *  - Svjetski patent nema broj prijave ni unos u DZIV registru.
 *  - Dubina im na webu sama sebi proturjeci: About kaze 18-25 m, Visit Us 14 m.
 *  - 700 dana i 14-16 C su potvrdeni.
 * Ako se ijedna od tih tvrdnji pojavi u tekstu koji prenosis, ostaje — ali
 * ostaje svjesno, ne slucajno.
 */

export const HERO = {
  /** LCP element. Mora doci iz cistog HTML-a, bez canvasa i bez fontova koji blokiraju. */
  title: ['The unique', 'essence of the', 'Adriatic sea'],
  brand: 'Navis Mysterium',
  tagline: 'is the result of intelligent effort with the touch of tradition',
}

export const STORY = {
  eyebrow: 'Peljesac',
  lead:
    'On the Adriatic coast, Croatia there is a place where our story begins. ' +
    'It is the Peljesac peninsula, or as we like to call it, wine paradise.',
  body: [
    'Peljesac is the place in Croatia where you can find excellent wines, such as Dingac or ' +
      'Plavac Mali, that are famous all over the world.',
    'Apart from Peljesac and wines, there is one more gift of nature that is central to our ' +
      'story - it is the sea - the deep, crystal blue, Adriatic that holds treasures and ' +
      'mysteries. Give us a visit while in Dubrovnik.',
  ],
  cta: 'Read more',
}

export const MISSION = {
  eyebrow: 'Our mission',
  lead: 'Our mission is to make top quality wines, but also to make them unique.',
  body: [
    'To realise our mission statement, we decided to combine the best of what nature gave us ' +
      'and to immerse our wine in the sea. We store it in the depths for more than 700 days.',
    'With the immersion of the first bottle and amphora, we knew that we had made something ' +
      'special, something that will contribute to history: the famous wine of Peljesac becomes ' +
      'also a sea wine.',
    'We called it Navis Mysterium - The Sea Mystery.',
  ],
}

/** Brojke koje su prosle provjeru u v3 i smiju stajati kao tvrdnja. */
export const FACTS = [
  { value: '700+', label: 'dana pod morem' },
  { value: '14-16', label: 'stupnjeva, cijele godine', unit: 'C' },
  { value: 'Prvi', label: 'u Hrvatskoj' },
]

export const NAV = [
  { label: 'Wines', href: '/shop' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Visit Us', href: '/visit-us' },
  { label: 'News & Stories', href: '/news-stories' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

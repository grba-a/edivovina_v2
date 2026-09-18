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

  /**
   * ODLUKA A, Petar 2026-09-18: njihov naslov ostaje, a ISPOD njega ide
   * recenica koja radi posao. Time odustajemo od odluke D (doslovno njihov
   * tekst) na tocno jednom mjestu — u heroju. Ostatak stranice ostaje njihov.
   *
   * Zasto: njihova recenica („is the result of intelligent effort with the
   * touch of tradition") ne kaze STO je to, ZASTO je drugacije ni STO kosta.
   * Stranac na telefonu ima desetak sekundi volje.
   *
   * SVE TRI TVRDNJE OVDJE SU PROVJERENE (vidi `~/vault/30-Clients/edivo-vina.md`):
   *   700 dana pod morem  — potvrdeno, koriste ga i oni sami
   *   14-16 C             — potvrdeno
   *   prvi u Hrvatskoj    — potvrdeno iz pet izvora
   * „First in the world" NE SMIJE ovdje: baskijski Crusoe Treasure je pod
   * morem od 2010., a patent za podmorsko dozrijevanje prijavljen 2007.
   *
   * Njihova stara recenica ostaje ovdje da se vrati u jednoj liniji:
   *   tagline: 'is the result of intelligent effort with the touch of tradition'
   */
  brand: 'Edivo Wines',
  tagline:
    'Red wine that spends 700 days ageing on the Adriatic seabed, at 14-16 C. ' +
    'The first in Croatia to do it.',

  /* Dva gumba, dvije razlicite namjere: kupiti i razumjeti. Nikad dva gumba
     iste namjere na istoj stranici. */
  ctaPrimary: { label: 'See the wines', href: '/shop' },
  ctaGhost: { label: "How it's made", href: '/about-us' },
}

/**
 * PRIKAZ PROIZVODA (odluka B).
 *
 * Nema eyebrow oznake namjerno: stranica ih vec nosi pet na sedam sekcija, a
 * gornja granica je jedna na tri. Naslov je dovoljan.
 *
 * Tocke na predmetu govore samo ono sto je provjereno. DUBINA je jedina
 * mjera koja je u vaultu `assumed`, ne `verified` — njihov web sam sebi
 * proturjeci (About 18-25 m, Visit Us 14 m), pa stoji dogovoreni kompromis
 * „around 20 metres" i nista tocnije.
 */
export const VIEWER = {
  title: 'This is what 700 days under the sea does to clay.',
  lede:
    'The amphora goes down sealed and comes up wearing the seabed. ' +
    'Drag it to look around it.',
  hint: 'Drag to turn',
  spots: [
    {
      n: 1,
      title: 'Oysters',
      body: 'Grown on the clay while the wine aged. Every amphora surfaces with a different shell.',
    },
    {
      n: 2,
      title: 'The cradle',
      body: 'Welded rebar held the amphora upright at around 20 metres. It surfaces calcified white.',
    },
  ],
  cta: { label: 'See the wines', href: '/shop' },
}

export const STORY = {
  eyebrow: 'Pelješac',
  lead:
    'On the Adriatic coast, Croatia there is a place where our story begins. ' +
    'It is the Pelješac peninsula, or as we like to call it, wine paradise.',
  body: [
    'Pelješac is the place in Croatia where you can find excellent wines, such as Dingač or ' +
      'Plavac Mali, that are famous all over the world.',
    'Apart from Pelješac and wines, there is one more gift of nature that is central to our ' +
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
      'special, something that will contribute to history: the famous wine of Pelješac becomes ' +
      'also a sea wine.',
    'We called it Navis Mysterium - The Sea Mystery.',
  ],
}

/** Brojke koje su prosle provjeru u v3 i smiju stajati kao tvrdnja. */
export const FACTS = [
  { value: '700+', label: 'days on the seabed' },
  { value: '14-16', label: 'degrees, all year round', unit: 'C' },
  { value: 'First', label: 'in Croatia' },
]

export const NAV = [
  { label: 'Wines', href: '/shop' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Visit Us', href: '/visit-us' },
  { label: 'News & Stories', href: '/news-stories' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

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
   * ODSTUPANJE OD ODLUKE D (doslovno njihov tekst). Klijent je 2026-09-16
   * preko Petra trazio da ovdje stoji ime vinarije, a ne ime proizvoda.
   *
   * Ime je na engleskom „Edivo Wines", ne „Edivo Vina" — web je engleski, a
   * „vina" je hrvatska rijec. Firma se pravno zove Edivo Vina d.o.o. i tako
   * stoji u footeru, ali u tekstu stranice ide engleski oblik.
   *
   * Recenica ISPOD imena ostaje njihova, rijec po rijec — mijenja se samo
   * kome je pripisana. Tako promjena ne unosi nijednu novu tvrdnju.
   *
   * Zamjene koje je Petar trazio kao izbor (promijeni `tagline`, nista drugo):
   *   a) 'is the result of intelligent effort with the touch of tradition'
   *      -> njihova recenica, sada pod imenom vinarije. TRENUTNO AKTIVNA.
   *   b) 'the first winery in Croatia to age its wine on the seabed'
   *      -> "prvi u Hrvatskoj" je jedina tvrdnja o prvenstvu koja je prosla
   *         provjeru iz pet izvora; "first in the world" NE SMIJE ovdje.
   *   c) 'wine that spends more than 700 days under the Adriatic'
   *      -> 700 dana je potvrdeno, pa i ovo stoji bez rizika.
   */
  brand: 'Edivo Wines',
  tagline: 'is the result of intelligent effort with the touch of tradition',
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
  { value: '14–16', label: 'degrees, all year round', unit: 'C' },
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

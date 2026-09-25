/**
 * TEKST PODSTRANICA — doslovno s klijentovog weba, 24. rujna 2026.
 *
 * Prenosi se kako kod njih pise. To je njihov tekst za njihov web, pa tvrdnje
 * ostaju njihove. Jedina intervencija je RAZLAMANJE na odlomke: kod njih je
 * cijela prica jedan blok obostrano poravnatog teksta, sto na telefonu radi
 * rijeke praznina. Nijedna rijec nije dodana ni maknuta.
 *
 * TIPFELERI KOJI SU OSTALI, jer nisu nasi da ih mijenjamo:
 *   „to check a many things" · „a a story that belongs to our land" ·
 *   „two thousand years history.." (dvije tocke) · „Peljesac" i „Pelješac" u
 *   istom odlomku. Vrijedi ih javiti klijentu kao popravak na tekstu.
 *
 * BROJKE, i zasto bas ove (odluka L1, Petar 2026-09-24): dubina 18–25 m i
 * „preko 700 dana" dolaze s NJIHOVE About stranice. Njihov web si na tome
 * proturjeci — press navodi 15 i 20 m, stranica proizvoda „1.5 to 2 years" —
 * pa do klijentove potvrde vrijedi ono sto pise na About stranici.
 */

export const ABOUT = {
  title: 'About us',
  lede: 'Drače, Pelješac. Where the first amphora went into the sea in 2013.',
  body: [
    'Drace is a small village in Croatia. It’s located on the peninsula of Peljesac, which is ' +
      'one hour away from Dubrovnik- a town with more than two thousand years history.. It is ' +
      'the place where our story begins.',
    'Pelješac is well known as a peninsula with fine vineyards and many excellent varieties of ' +
      'wine, famous all over the world. One of them is Dingač, known as the king of Croatian wines.',
    '2011 was the year when we made the first wine and decided to make it unique. We came up ' +
      'with the idea of immersing bottles and amphorae under the sea, but it took time to check ' +
      'a many things and explore possibilities. First, amphorae were submerged in late 2013 and ' +
      'early 2014. Researching whether it is even possible to do something like that, we started ' +
      'in several different locations around the peninsula of Pelješac.',
    'With the bottles we immediately had good results, but the amphorae were more difficult. It ' +
      'was necessary to investigate whether it would be possible to put glass bottle directly in ' +
      'an amphora, because wine could lose quality from any penetration by the sea.',
    'Using a glass bottle of 0.75L that goes into a clay amphora, and protecting it with a good ' +
      'cork and two layers of rubber, we submerged it in the sea to a depth of 18-25 meters for ' +
      'more than 700 days. After that we knew that we had made something special, something what ' +
      'will make history. We called it Navis Mysterium – The Sea Mystery.',
    'Now, we have the first underwater winery. We took a concession on an old sunken fishing ' +
      'boat that had been lying on the seabed for more than 30 years and on it we placed our ' +
      'bottled wine and the amphora, made secure from any risk of theft.',
  ],
  /** Njihov vlastiti citat, kod njih u sredini stranice. */
  quote:
    'everything is pure Croatian product, one that you will want to take it with you: product ' +
    'with a a story that belongs to our land, that people will definitely talk about',
  /**
   * Popis hrvatskih izvora iz njihovog teksta. Kod njih je to jedna duga
   * recenica u zagradi; ovdje je popis, jer je popis.
   */
  madeIn: [
    { what: 'Plavac', where: 'Janjina' },
    { what: 'Clay, baked', where: 'Petrinja' },
    { what: 'Wrought iron stands', where: 'Sisak' },
    { what: 'Pinewood boxes', where: 'Varaždin' },
  ],
  close: 'Each bottle of Navis Mysterium is unique. It is the product of great love, effort and time.',
}

/**
 * KONTAKT. Sve ovo kod njih stoji u PODNOZJU svake stranice, a na stranici
 * koja se zove Contact ne stoji nijedan podatak — ondje je samo obrazac.
 * Odluka H1, Petar 2026-09-24: podaci prvo, obrazac ispod.
 */
export const PLACES = [
  {
    id: 'winery',
    name: 'Edivo Winery',
    what: 'Where the wine is made and the amphorae are filled.',
    street: 'Janjina 62',
    town: '20246 Janjina',
    region: 'Pelješac peninsula, Croatia',
    maps: 'https://www.google.com/maps/search/?api=1&query=Janjina+62,+20246+Janjina,+Croatia',
    photo: { file: 'production-proizvodnja-23.webp', w: 1200, h: 584, alt: 'The pontoon at Janjina, covered with amphorae waiting to go down' },
    sees: ['The vineyard the Plavac comes from', 'The pontoon the amphorae go down from', 'The sunken boat the cellar sits on'],
  },
  {
    id: 'wine-bar',
    name: 'Edivo Wine Bar',
    what: 'The tasting room, with the amphorae that came up from the seabed.',
    street: 'Drače 18',
    town: '20246 Drače',
    region: 'Pelješac peninsula, Croatia',
    maps: 'https://www.google.com/maps/search/?api=1&query=Dra%C4%8De+18,+20246+Dra%C4%8De,+Croatia',
    photo: { file: 'winebar-vinarija-11.webp', w: 1200, h: 569, alt: 'Barrels along the vaulted cellar at Drace' },
    sees: ['Amphorae that came up wearing the seabed', 'The barrel cellar', 'A tasting at the long table'],
  },
]

/**
 * Telefon i mail su njihovi javni, iz podnozja.
 *
 * DVIJE MAIL ADRESE: podnozje daje `info@`, a njihova politika dostave
 * `sales@`. Do klijentove odluke stoji `info@`, jer je to ona koju sami
 * stavljaju na svaku stranicu.
 */
export const CONTACT = {
  phone: '+385 91 6127 229',
  phoneHref: 'tel:+385916127229',
  whatsapp: 'https://wa.me/385916127229',
  email: 'info@edivovina.hr',
}

/**
 * STO O POSJETU NE ZNAMO, i zato nigdje ne stoji:
 * radno vrijeme, trajanje i cijena obilaska, velicina grupe, treba li
 * rezervacija, radi li se zimi. Nista od toga ne stoji na njihovom webu.
 *
 * I JEDNO STO ZNAMO: klijent je 2026-09-04 potvrdio da RONILACKIH TURA VISE
 * NEMA, iako ih njihov vlastiti press jos spominje. Ronjenje se ne smije
 * nigdje pojaviti kao usluga.
 */

import { AWARDS } from '@/data/awards'
import { PLACES } from '@/data/pages'
import { plural } from './lang'
import type { Dict } from './dict'

/**
 * HRVATSKI. Petar, 2026-09-29: verzija mora izgledati identicno engleskoj, samo
 * tekstovi su hrvatski.
 *
 * IZVOR TEKSTA, redom prednosti:
 *   1. edivovina.hr/hr — ondje gdje klijent ima hrvatski tekst, prenosi se
 *      DOSLOVNO, s njihovim greskama (kao i engleski: nista dodano ni maknuto).
 *      Oznaceno komentarom „HR" uz redak.
 *   2. Gdje njihov hrvatski web ostavlja engleski (nagrade, Navis Q, Eros,
 *      Rose, napomene, nasi naslovi i UI), prevedeno je ovdje. Redak bez
 *      oznake „HR" — to su NASE rijeci, ne njihove, i vrijedi ih dati
 *      klijentu na pregled.
 *
 * Nazivi mjesta ostaju u imenskom obliku (Drace, Janjina) tamo gdje bi padez
 * bio nesiguran — „u mjestu Drace".
 */

const AWARD_WHAT = [
  'Dingač je nagrađen srebrnom medaljom',
  'Navis Mysterium Amfora 2013 i Navis Mysterium Boca 2013, zlatna medalja',
  'Navis Mysterium amfora 2012, prvak u dizajnu. Edivo Dingač 2014',
  'Navis Mysterium boca 2012, viceprvak u dizajnu proizvoda i zlatna medalja za kvalitetu vina',
  'Edivo Plavac 2015, srebrna medalja za kvalitetu vina',
]

const PLACE_HR: Record<
  string,
  { name: string; what: string; region: string; alt: string; sees: string[] }
> = {
  winery: {
    name: 'Vinarija Edivo' /* HR */,
    what: 'Gdje se vino proizvodi i amfore pune.',
    region: 'Poluotok Pelješac, Hrvatska',
    alt: 'Ponton u Janjini prekriven amforama koje čekaju spuštanje',
    sees: [
      'Vinograd iz kojeg dolazi Plavac',
      'Ponton s kojeg se amfore spuštaju',
      'Potopljeni brod na kojem počiva podrum',
    ],
  },
  'wine-bar': {
    name: 'Edivo Wine Bar' /* HR */,
    what: 'Degustacijska soba, s amforama koje su izronjene s morskog dna.',
    region: 'Poluotok Pelješac, Hrvatska',
    alt: 'Bačve uz svođeni podrum u mjestu Drače',
    sees: [
      'Amfore koje su izronile odjevene u morsko dno',
      'Podrum s bačvama',
      'Degustacija za dugim stolom',
    ],
  },
}

export const hr: Dict = {
  layout: {
    skip: 'Preskoči na sadržaj',
    title: 'Podmorsko vino | Navis Mysterium - Edivo Vina',
    description:
      'Vino koje više od 700 dana odležava na dnu Jadranskog mora. Navis Mysterium, s poluotoka Pelješca, Hrvatska.',
    ogTitle: 'Navis Mysterium - Edivo Vina',
    ogDescription: 'Vino koje više od 700 dana odležava na dnu Jadranskog mora.',
  },
  header: {
    logo: 'Edivo Wines, početna',
    nav: 'Glavna navigacija',
    menu: 'Izbornik',
    navMobile: 'Glavna navigacija, mobitel',
  },
  nav: [
    { label: 'Vina', href: '/shop' },
    { label: 'O nama' /* HR */, href: '/about-us' },
    { label: 'Posjetite nas', href: '/visit-us' },
    { label: 'Novosti i priče' /* HR */, href: '/news-stories' },
    { label: 'Galerija' /* HR */, href: '/gallery' },
    { label: 'Kontakt' /* HR */, href: '/contact' },
  ],
  hero: {
    /* HR: „Jedinstveni proizvod iz dubine Jadranskog mora", skraceno na Petrov zahtjev */
    title: ['Jedinstveni proizvod', 'Jadranskog mora'],
    brand: 'Edivo Wines',
    tagline:
      'Crno vino koje 700 dana odležava na dnu Jadranskog mora, na 14-16 °C. ' +
      'Prvo u Hrvatskoj koje to radi.',
    ctaPrimary: { label: 'Pogledajte vina', href: '/shop' },
    ctaGhost: { label: 'Kako nastaje', href: '/about-us' },
    bottlesAlt: 'Navis Mysterium amfora i boca',
  },
  viewer: {
    title: 'Evo što 700 dana pod morem učini glini.',
    lede:
      'Amfora se spušta zapečaćena, a izranja odjevena u morsko dno. ' +
      'Povucite je da je razgledate.',
    hint: 'Povucite za okretanje',
    spots: [
      {
        n: 1,
        title: 'Kamenice',
        body: 'Narasle na glini dok je vino odležavalo. Svaka amfora izroni s drukčijom školjkom.',
      },
      {
        n: 2,
        title: 'Kolijevka',
        body: 'Zavareni armaturni čelik držao je amforu uspravno na 15 do 20 metara. Izroni kalcificirano bijela.',
      },
    ],
    cta: { label: 'Pogledajte vina', href: '/shop' },
    aria: 'Amfora, 3D prikaz',
  },
  story: {
    eyebrow: 'Pelješac',
    lead:
      'Mjesto na kojem naša priča počinje je poluotok Pelješac u Hrvatskoj - ili kako ga volimo zvati - vinski raj!' /* HR */,
    body: [
      'Pelješac je mjesto u Hrvatskoj gdje možete pronaći izvrsna vina, kao što su Dingač i Plavac Mali, sorte prepoznate u cijelom svijetu.' /* HR */,
      'Osim Pelješca i vina, postoji još jedan dar prirode koji je središnji dar naše priče - more. Duboko, kristalno plavo, Jadransko more koje prepuno blaga i podvodnih tajni. Iste morate posjetiti uz Dubrovnik.' /* HR */,
    ],
    cta: 'Opširnije' /* HR */,
  },
  mission: {
    eyebrow: 'Naša misija',
    lead: 'Naša je misija napraviti vina vrhunske kvalitete, ali i učiniti ih jedinstvenima.' /* HR */,
    body: [
      'Kako bismo ostvarili našu viziju, odlučili smo kombinirati najbolje iz prirode i uroniti naše vino u more. Držimo ga u morskim dubinama više od 700 dana.' /* HR */,
      'Uranjanjem prve boce i amfore, znali smo da smo napravili nešto posebno, nešto što će pridonjeti povijesti: poznato pelješko vino postaje i morsko vino.' /* HR */,
      'Nazvali smo ga Navis Mysterium- Brodska tajna.' /* HR */,
    ],
  },
  facts: [
    { value: '700+', label: 'dana na morskom dnu' },
    { value: '14-16', label: 'stupnjeva, cijele godine', unit: 'C' },
    { value: 'Prvi', label: 'u Hrvatskoj' },
  ],

  homeWines: {
    title: 'Navis Mysterium',
    all: (n) => `Svih ${n} vina`,
    more: (n) => `još ${n}, uključujući TRIS set i pjenušavi Eros`,
  },
  buyBar: 'Trgovina',
  card: {
    undersea: 'Podmorsko',
    soldOut: 'Nema na zalihi' /* HR */,
    add: 'Dodaj u košaricu' /* HR */,
  },
  homePress: { title: 'Vijesti i priče' /* HR */, more: 'Pogledaj više' /* HR */ },
  trophies: {
    title: 'Nagrade' /* HR */,
    awards: AWARDS.map((a, i) => ({ ...a, what: AWARD_WHAT[i] })),
    kind: { wine: 'Kvaliteta vina', design: 'Dizajn', mixed: 'Dizajn i vino' },
  },

  footer: {
    claim: 'Vino koje više od 700 dana odležava na dnu Jadranskog mora, na 14–16 °C.',
    nav: 'Podnožje',
    company: 'Edivo Vina d.o.o.',
    place: 'Drače, Janjina, Pelješac',
    copyright: (y) => `© ${y} Edivo Vina. Pelješac, Hrvatska.`,
    switchLabel: 'English',
  },

  shop: {
    title: 'Vina | Edivo Vina',
    description:
      'Svih deset vina Edivo s Pelješca. Pet ih je odležavalo na dnu Jadranskog mora, uključujući amforu Navis Mysterium.',
    head: 'Vina',
    lede: 'Deset vina s poluotoka Pelješca. Pet ih je provelo više od 700 dana na dnu Jadranskog mora.',
    alt: 'Boce na stolu uz more, s poluotokom u pozadini',
    underEyebrow: 'Pod morem',
    underTitle: 'Navis Mysterium',
    landTitle: 'Iz vinograda',
    ship: 'Otprema unutar 24 sata putem UPS-a, DPD-a ili DHL-a. Dostava se obračunava prema vrijednosti narudžbe, veličini i odredištu.',
  },

  about: {
    title: 'O nama | Edivo Vina',
    description:
      'Drače na poluotoku Pelješcu, gdje je Edivo 2013. uronio prve amfore i izgradio prvu podvodnu vinariju u Hrvatskoj.',
    h1: 'Počinje u selu, a završava na morskom dnu',
    data: {
      title: 'O nama',
      lede: 'Drače, Pelješac. Gdje je prva amfora 2013. otišla u more.',
      /* HR: jedan blok kod njih, razlomljen na iste odlomke kao engleski. */
      body: [
        'Drače je malo selo u Hrvatskoj. Smješteno je na poluotoku Pelješcu, koji je jedan sat udaljen od Dubrovnika, grada s više od dvije tisuće godina povijesti. To je mjesto gdje naša priča započinje.',
        'Pelješac je poznat kao poluotok s finim vinogradima i mnogim izvrsnim sortama vina, poznatim u cijelom svijetu. Jedan od njih je Dingač, poznat kao kralj hrvatskih vina.',
        '2011. bila je godina kada smo napravili prvo vino i odlučili ga učiniti jedinstvenim. Došli smo na ideju da boce i amfore uronimo u more, ali trebalo je vremena da provjerimo mnoge stvari i istražimo mogućnosti. Prvo su amfore potopljene krajem 2013. i početkom 2014. Istražujući je li uopće moguće tako nešto započeti, postavili smo ih na nekoliko različitih lokacija oko poluotoka Pelješca.',
        'S bocama nismo imali prevelikih prepreka, no priča s amforama je bila puno zahtjevnija. Bilo je potrebno istražiti je li moguće staviti staklenu bocu staviti izravno u amforu, kako vino ne bi izgubilo kvalitetu od bilo kakvog prodora mora.',
        /* Njihov tekst kaze „na odlezavanje DO 700 dana"; engleski, naslovnica i
           sve provjere kazu „VISE OD 700 dana". Ovdje stoji potvrdeno. */
        'Koristili smo staklenu bocu od 0.75 L koja se stavlja u glinenu amforu, zaštitili je s čepom i dvostrukim slojem voska, zatim uronili u more, na dubinu od 15-20 metara, na odležavanje više od 700 dana. Nakon toga smo znali da smo napravili nešto posebno, nešto što će ispisati povijest. Nazvali smo ga Navis Mysterium - Brodska tajna.',
        'Danas imamo prvu podvodnu vinariju. Dobili smo koncesiju na stari potopljeni ribarski brod koji je ležao na morskom dnu više od 30 godina i na njega smo stavili vino u bocama i amforama, i osigurali ih od bilo kakvog rizika krađe.',
      ],
      quote:
        'sve je čisti hrvatski proizvod, onaj koji ćete poželjeti ponijeti sa sobom: proizvod s pričom koja pripada našoj zemlji, proizvod o kojojem će se definitivno pričati' /* HR */,
      madeIn: [
        { what: 'Plavac mali', where: 'Janjina' },
        { what: 'Glina, pečena', where: 'Petrinja' },
        { what: 'Postolja od kovanog željeza', where: 'Sisak' },
        { what: 'Borovina za kutije', where: 'Varaždin' },
      ],
      close: 'Svaka boca Navis Mysterium je jedinstvena. Proizvod je rezultat velike ljubavi, napora i vremena.' /* HR */,
    },
    marks: { region: 'Pelješac', years: '2011–2014', volume: '0,75 L', depth: '15–20 m', days: '700+ dana' },
  },
  fig: {
    map: {
      title:
        'Karta poluotoka Pelješca i obale do Dubrovnika, s označenim Orebićem, Janjinom, Dračem i Stonom',
      route: 'oko sat vremena vožnje',
      caption: 'Obalna linija iz OpenStreetMapa. Janjina je vinarija, Drače wine bar.',
    },
    section: {
      title:
        'Presjek amfore Navis Mysterium: staklena boca od 0,75 litre unutar glinene amfore, zatvorena čepom i dvostrukim slojem voska',
      cork: 'čep i dva sloja voska',
      clay: 'glinena amfora',
      glass: 'staklena boca, 0,75 L',
      caption:
        'Boca nikada ne dotiče more. Amfora se prije spuštanja zatvara čepom i dvostrukim slojem voska.',
    },
    depth: {
      title:
        'Amfora koja se na užetu spušta na morsko dno, gdje već stoje redovi amfora, 15 do 20 metara dubine',
      storedAt: 'čuva se u moru, na dubini od' /* HR */,
      metres: '15–20 metara' /* HR */,
      forMoreThan: 'više od ',
      days: '700 dana',
      caption: 'Dubina i trajanje onako kako ih navodi njihova stranica O nama.',
    },
  },

  places: PLACES.map((p) => ({
    ...p,
    name: PLACE_HR[p.id].name,
    what: PLACE_HR[p.id].what,
    region: PLACE_HR[p.id].region,
    photo: { ...p.photo, alt: PLACE_HR[p.id].alt },
    sees: PLACE_HR[p.id].sees,
  })),
  visit: {
    title: 'Posjetite nas | Edivo Vina',
    description:
      'Kako doći do Edivo wine bara u Drači i vinarije u Janjini, otprilike sat vremena od Dubrovnika duž poluotoka Pelješca.',
    h1: 'Sat vremena od Dubrovnika, pa još malo dalje',
    lede: 'Wine bar je u mjestu Drače, a vinarija malo dalje, u Janjini. Ovim redom ih prolazite.',
    stops: {
      dubrovnik: 'Većina ljudi kreće odavde.',
      ston: 'Zidine i ulaz na poluotok.',
    },
    maps: 'Otvori na karti',
    ctaTitle: 'Nazovite prije dolaska',
    ctaText: 'Radno vrijeme mijenja se s godišnjim dobom. Jedan poziv štedi vam sat vožnje ako smo zatvoreni.',
    or: 'Ili nam pišite na',
  },
  contact: {
    title: 'Kontakt | Edivo Vina',
    description:
      'Nazovite, pošaljite poruku na WhatsApp ili e-poštu Ediva. Vinarija je u Janjini, wine bar u Drači, na poluotoku Pelješcu.',
    h1: 'Razgovarajte s nama',
    lede: 'Netko se javlja. Radno vrijeme mijenja se s godišnjim dobom, pa je poziv bolji od nagađanja.',
    reach: 'Kontaktirajte nas',
    call: 'Nazovite',
    email: 'E-pošta',
    write: 'Ili nam napišite',
    name: 'Ime',
    message: 'Poruka',
    note: 'Ovaj obrazac je dio predloška i za sada ništa ne šalje.',
    send: 'Poslati' /* HR */,
  },

  gallery: {
    title: 'Galerija | Edivo Vina',
    description:
      'Ronioci, amfore koje izranjaju s morskog dna, podrum u Drači. Fotografije Ediva s poluotoka Pelješca.',
    head: 'Galerija' /* HR */,
    lede: (n) => `${n} fotografija, od vinograda do morskog dna i natrag.`,
    alt: 'Ronilac iznad redova potopljenih amfora',
    navLabel: 'Odjeljci galerije',
    cats: [
      { id: 'sea', title: 'Pod morem', lede: 'Što se događa 15 do 20 metara dolje.' },
      { id: 'production', title: 'Proizvodnja', lede: 'Punjenje, zatvaranje i spuštanje amfora.' },
      { id: 'amphora', title: 'Navis Mysterium', lede: 'Sama amfora, prije i poslije mora.' },
      { id: 'final', title: 'Vina', lede: 'Boce, amfore i drvene kutije u kojima putuju.' },
      { id: 'winebar', title: 'Vinarija', lede: 'Janjina i Drače, gdje se vino proizvodi i kuša.' },
    ],
    count: (shown, all) => `${shown} od ${all}`,
  },
  news: {
    title: 'Novosti i priče | Edivo Vina',
    description:
      'Pedeset i devet spomena Ediva i Navis Mysteriuma, od National Geographica do Vogue Adrie, od 2018. do 2025.',
    head: 'Novosti i priče' /* HR */,
    lede: (n) => `Navis Mysterium u medijima od 2018.: ${n} spomena, od National Geographica do Vogue Adrie.`,
    alt: 'Zid uokvirenih članaka i nagrada u podrumu Edivo',
    rest: (n) => `još ${n}, sve do 2018.`,
  },
  article: {
    published: (outlet) => `Izvorno objavljeno: ${outlet ?? 'izvor'}.`,
    original: 'Pogledajte izvornik',
    more: 'Još iz medija',
    all: (n) => `Svih ${n} spomena`,
  },
  product: {
    factsShip: [
      'Otprema unutar 24 sata od narudžbe',
      'UPS, DPD ili DHL',
      'Otkazivanje u roku 48 sati, prije slanja',
    ],
    oneReview: 'Jedna recenzija',
    reviews: (n) => `${n} ${plural(n, 'recenzija', 'recenzije', 'recenzija')}`,
    alsoSea: 'Još s morskog dna',
    alsoLand: 'Još iz vinograda',
  },
  legalNav: 'Pravno',
}

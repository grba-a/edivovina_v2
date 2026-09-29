import { WINES, HOME_WINES, type Wine } from '@/data/wines'
import type { Lang } from './lang'

/**
 * Hrvatski opisi vina. Katalog (cijene, slugovi, fotografije, zaliha) je JEDAN i
 * ostaje u `data/wines.ts` — ovdje se prepisuje samo ono sto je tekst.
 *
 * Gdje klijent na edivovina.hr/hr ima hrvatski opis, prenesen je DOSLOVNO
 * (i s njegovim tipfelerima: „Mysterim", „tpkast", „Zanjimljivo", „terior",
 * „pout", „insiprirale", „a." — vrijedi ih javiti klijentu). Gdje njihov
 * hrvatski web ostavlja engleski (Navis Q, Eros, Rose i sve napomene),
 * prevedeno je ovdje i to su NASE rijeci.
 */

type WineText = Partial<Pick<Wine, 'name' | 'kind' | 'spec' | 'body' | 'notice'>> & {
  awardLabel?: string
}

const NOTE_UNIQUE_AMPHORA =
  'Napomena: svaka amfora je jedinstvena i može se razlikovati od prikazanih fotografija. ' +
  'Slika proizvoda služi samo kao ilustracija. Berba i postotak alkohola mogu se razlikovati od prikazanih.'
const NOTE_UNIQUE_SET =
  'Napomena: svaka amfora i boca su jedinstvene i mogu se razlikovati od prikazanih fotografija. ' +
  'Slika proizvoda služi samo kao ilustracija. Berba i postotak alkohola mogu se razlikovati od prikazanih.'
const NOTE_UNIQUE_BOTTLE =
  'Napomena: svaka boca je jedinstvena i može se razlikovati od prikazanih fotografija. ' +
  'Slika proizvoda služi samo kao ilustracija. Berba i postotak alkohola mogu se razlikovati od prikazanih.'
const NOTE_PLAIN =
  'Napomena: slika proizvoda služi samo kao ilustracija. Berba i postotak alkohola mogu se razlikovati od prikazanih.'

const AGED = 'odležano pod morem 1,5 do 2 godine, dolazi u ručno izrađenoj drvenoj kutiji'

const HR: Record<string, WineText> = {
  'navis-mysterium-undersea-amphora': {
    name: 'Navis Mysterium Amfora' /* HR */,
    kind: 'Plavac Mali',
    spec: ['Vrhunsko crno vino', '0,75 l', AGED, '2013. · 14,5%'],
    body:
      'Posebno osunčano tlo na južnim padinama poluotoka Pelješac iznad djevičanskih uvala, na obronima gdje su vinogradi na strminama i do 45%,u ekološki zdravom predjelu je dom Dingača. Preko 2800 sunčanih sati godišnje, uz morsku sol nošenu južinama, ljubi ovu specijalnu i kvalitetnu sortu grožđa. ' +
      'Vino tamno rubin crvene boje s ljubičastim preljevima, kristalno je bistar, punog i zaobljenog okusa, harmoničan, tpkast i sladkast. ' +
      'Edivo Navis Mysterim vino posebno je i jer nikada nije bilo izloženo svjetlosti do trenutka kad je posloženo u Vašim čaša ' +
      'Zanjimljivo je da su čak i stari Grci čuvali svoja vina u amforama čije su obloge od smole čuvale vina.' /* HR */,
    notice: NOTE_UNIQUE_AMPHORA,
    awardLabel: 'Zlato, America Wine Awards 2021',
  },
  'navis-mysterium-tris': {
    kind: 'Set od tri',
    spec: ['Vrhunsko crno vino', '0,75 x 3'],
    body:
      'Mysterium Amfora, boca iz mora i regularna boca Edivo Navis Mysterium TRIS kombinacija je najcjenjenijeg Hrvatskog vina u drvenoj kutiji u tri različta pakiranja. ' +
      'Radi se o istom vinu koje je dozrijevalo na različite načine, te u svakom pakiranju ima specifičan okus i aromu. ' +
      'Pravi vinoljupci uživati će u različitim nijansama aroma ovog iznimno elegantnog crnog vina s puno finih granuliranih zrelih tanina, naglašenim okusima tamnog voća s herbalnom premjesom. ' +
      'Idealan je poklon u posebnim prigodama, te ostaje kao vječni suvenir' /* HR */,
    notice: NOTE_UNIQUE_SET,
  },
  'navis-mysterium-undersea-bottle': {
    name: 'Navis Mysterium - Boca iz mora' /* HR */,
    kind: 'Plavac Mali',
    spec: ['Vrhunsko crno vino'],
    body:
      `0,75 l ${AGED} ` +
      'Plavac mali s položaja Dingač i Postup. Mineralan, pikantan i izrazito voćan okus. Aroma suhih šljiva je zaštitni znak Plavca Maloga, ali nalazimo i arome bobičastog voća. Posebice crnog i crvenog ribizla. Prisutni su, klinčići, cimet, slatki začini, cederovina, rogač. Sočni, zreli i uglađeni tanini u kombinaciji s neobičnim i vrlo ugodnom svježinom te zrelom voćnosti ostavljaju mekan, nježan i ugodno trpak okus.' /* HR */,
    notice: NOTE_UNIQUE_BOTTLE,
    awardLabel: 'Zlato, America Wine Awards 2021',
  },
  'navis-q-sea-bottle': {
    kind: 'Bijelo',
    spec: ['Vrhunsko vino', '0,75 l'],
    body:
      'Među bogatim crnim vinima poput Plavca malog i Dingača koja potječu s poluotoka Pelješca pronašli smo inspiraciju za bijelo vino koje spaja tri sorte grožđa u naš novi proizvod – Navis Q. ' +
      'Povezuje tri značajna područja bijelih vina u Hrvatskoj: otok Korčulu, poluotok Pelješac i kontinentalnu Slavoniju. ' +
      'Navis Q je polusuho bijelo vino, kupaža Pošipa, Rukatca i Chardonnaya. Lijepe je zlatne boje s aromama žutog cvijeća, citrusa, crvene jabuke i koštuničavog voća. ' +
      'Srednjeg je tijela, ugodne kiselosti i lijepe mineralnosti.',
  },
  'eros-sparkling-wine-sea-bottle': {
    kind: 'Pjenušavo',
    spec: ['Vrhunsko vino', '0,75 l'],
    body:
      'Vino je slamnato žute boje, s lijepim mjehurićima srednje veličine. Arome su izražene i vrlo privlačne: bijelo cvijeće, jabuke, breskve i med. ' +
      'Okus je vrlo osvježavajući, s izraženom kiselinom i lijepom ravnotežom. Vino je dobro izrađeno, elegantno i lako se pije. ' +
      'Poslužuje se dobro ohlađeno, na 6°-8°C.',
  },
  'navis-mysterium-regular-bottle': {
    kind: 'Dingač',
    spec: ['Vrhunsko vino', '0,75 l'],
    body:
      'Plavac mali s položaja Dingač i Postup. Mineralan, pikantan i izrazito voćan okus. Aroma suhih šljiva je zaštitni znak Plavca Maloga, ali nalazimo i arome bobičastog voća. Posebice crnog i crvenog ribizla. Prisutni su, klinčići, cimet, slatki začini, cederovina, rogač. Sočni, zreli i uglađeni tanini u kombinaciji s neobičnim i vrlo ugodnom svježinom te zrelom voćnosti ostavljaju mekan, nježan i ugodno trpak okus.' /* HR */,
    notice: NOTE_PLAIN,
    awardLabel: 'Srebro, Decanter World Wine Awards',
  },
  'dingac-edivo': {
    kind: 'Dingač',
    spec: ['Vrhunsko crno vino'],
    body:
      '0,75 l Dingač je nedvojbeno najpoznatiji hrvatsku terior. Iznimno elegantno crno vino s puno finih granuliranih zrelih tanina, naglašenim okusima tamnog voća s herbalnom premjesom, i jako kompleksnim bouqtom koji sadrži crno i crveno voće, tamnu čokoladu, dim, cimet, slatke začine, cederovinu, rogač. Neobična i ugodna svježina, te zrela voćnost ostavljaju mekan, a pikantan i izrazito voćan okus.' /* HR */,
    notice: NOTE_PLAIN,
  },
  'plavac-edivo': {
    kind: 'Plavac Mali',
    spec: ['Vrhunsko crno vino'],
    body:
      '0,75 l Granitno ljubičasta boja s modrim refleksima karakteristika je Plavca dok je mlad, a kada je zreliji karakterizira ga tamno rubin crvena boja. Slojevit je aromama zrelog tamnog voća, herbalnim nijansama, rogačem, klinčićima, čokoladom, cimetom i slatkim začinima. Sočni i zreli tanini u kombinaciji sa zrelom voćnosti ostavljaju mekan, nježan i kompleksan okus.' /* HR */,
    notice: NOTE_PLAIN,
  },
  'q-edivo': {
    kind: 'Bijelo',
    spec: ['Vrhunsko bijelo vino'],
    body:
      '0,75 l Uz bogatstvo crnih vina, pout Plavca Malog i Dingača, kojima je Pelješac dom, u Hrvatskoj, a posebno na Jadranu dominiraju bijele autohtone sorte Pošip i Rukatac koje su nas insiprirale na naš proizvod - Q. ' +
      'Riječ je o polusuhom bijelom vinu, kupaži sorti Chardonnay, Pošip i Rukatac. Ovo vino izvrstan je spoj tri značajna područja bijelog vina u Hrvatskoj- ravne Slavonije, polutoka Pelješca i otoka Korčule.' /* HR */,
    notice: NOTE_PLAIN,
  },
  rose: {
    kind: 'Rosé',
    spec: ['Rosé'],
    body:
      '0,75 l Vino je kristalno bistro, dublje ružičaste boje i srednje viskoznosti. Nosom dominiraju arome ruže, jagode i crvenog voća. Arome su vrlo ugodne i postojane.',
  },
}

/** Vino na trazenom jeziku. Za engleski vraca isti objekt, netaknut. */
export function localWine(lang: Lang, w: Wine): Wine {
  if (lang === 'en') return w
  const t = HR[w.slug]
  if (!t) return w
  const { awardLabel, ...rest } = t
  return {
    ...w,
    ...rest,
    award: w.award && awardLabel ? { ...w.award, label: awardLabel } : w.award,
  }
}

export const winesFor = (lang: Lang) => WINES.map((w) => localWine(lang, w))
export const homeWinesFor = (lang: Lang) => HOME_WINES.map((w) => localWine(lang, w))
export const wineBySlugFor = (lang: Lang, slug: string) => {
  const w = WINES.find((x) => x.slug === slug)
  return w ? localWine(lang, w) : undefined
}

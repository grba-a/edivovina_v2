/**
 * "Wine trophies" s klijentovog weba, 15. rujna 2026.
 *
 * `kind` postoji zbog nalaza iz v3: Sabatina je natjecanje u DIZAJNU, ne u
 * kvaliteti vina. Bez te razlike se pet redaka cita kao pet vinskih medalja,
 * sto nije tocno. Polje se nosi dalje da se razlika ne izgubi u prepisu.
 */

export type Award = {
  body: string
  /** godina ili raspon kako stoji kod njih; prazno gdje ga sami ne navode */
  year?: string
  what: string
  kind: 'wine' | 'design' | 'mixed'
  medal: string
}

export const AWARDS: Award[] = [
  {
    body: 'Decanter World Wine Awards',
    what: 'Dingac, srebrna medalja',
    kind: 'wine',
    medal: '/medal/decanter.png',
    // Klijent nije dao ni godinu ni berbu — zato ih ovdje nema.
  },
  {
    body: 'America Wine Awards',
    year: '2021',
    what: 'Navis Mysterium Amphora 2013 i Navis Mysterium Bottle 2013, zlatna medalja',
    kind: 'wine',
    medal: '/medal/gold.png',
  },
  {
    body: 'Sabatina',
    year: '2017',
    what: 'Navis Mysterium amphora 2012, prvak za dizajn; Edivo Dingac 2014',
    kind: 'design',
    medal: '/medal/america.png',
  },
  {
    body: 'Sabatina',
    year: '2016',
    what: 'Navis Mysterium bottle 2012, doprvak za dizajn proizvoda i zlato za kvalitetu vina',
    kind: 'mixed',
    medal: '/medal/gold.png',
  },
  {
    body: 'Sabatina',
    year: '2015',
    what: 'Edivo Plavac 2015, srebro za kvalitetu vina',
    kind: 'wine',
    medal: '/medal/silver.png',
  },
]

export const KIND_LABEL: Record<Award['kind'], string> = {
  wine: 'Kvaliteta vina',
  design: 'Dizajn',
  mixed: 'Dizajn i vino',
}

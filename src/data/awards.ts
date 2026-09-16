/**
 * "Wine trophies" s klijentovog weba, 15. rujna 2026.
 *
 * `kind` postoji zbog nalaza iz v3: Sabatina je natjecanje u DIZAJNU, ne u
 * kvaliteti vina. Bez te razlike se pet redaka cita kao pet vinskih medalja,
 * sto nije tocno. Polje se nosi dalje da se razlika ne izgubi u prepisu.
 */

export type Award = {
  body: string
  /** godina kako stoji kod njih; prazno gdje je sami ne navode */
  year?: string
  what: string
  kind: 'wine' | 'design' | 'mixed'
  medal: string
}

export const AWARDS: Award[] = [
  {
    body: 'Decanter World Wine Awards',
    what: 'Dingač has been awarded a Silver medal',
    kind: 'wine',
    medal: '/medal/decanter.png',
    // Klijent nije dao ni godinu ni berbu — zato ih ovdje nema.
  },
  {
    body: 'America Wine Awards',
    year: '2021',
    what: 'Navis Mysterium Amphora 2013 and Navis Mysterium Bottle 2013, golden medal',
    kind: 'wine',
    medal: '/medal/gold.png',
  },
  {
    body: 'Sabatina',
    year: '2017',
    what: 'Navis Mysterium amphora 2012, championship for design. Edivo Dingač 2014',
    kind: 'design',
    medal: '/medal/america.png',
  },
  {
    body: 'Sabatina',
    year: '2016',
    what: 'Navis Mysterium bottle 2012, vice-champion for product design and golden medal for wine quality',
    kind: 'mixed',
    medal: '/medal/gold.png',
  },
  {
    body: 'Sabatina',
    year: '2015',
    what: 'Edivo Plavac 2015, silver medal for wine quality',
    kind: 'wine',
    medal: '/medal/silver.png',
  },
]

export const KIND_LABEL: Record<Award['kind'], string> = {
  wine: 'Wine quality',
  design: 'Design',
  mixed: 'Design and wine',
}

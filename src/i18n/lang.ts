/**
 * Dva jezika, jedan raspored. Engleski zivi na korijenu (`/shop`), hrvatski iza
 * prefiksa (`/hr/shop`) — isti nazivi ruta, samo `/hr` ispred. Petar, 2026-09-29.
 *
 * Hrvatska verzija mora izgledati IDENTICNO engleskoj; mijenja se samo tekst
 * koji se ureduje rukom, ne onaj pecen u slikama.
 */
export type Lang = 'en' | 'hr'

/** `href('hr', '/shop')` -> `/hr/shop`; `href('hr', '/')` -> `/hr`. */
export function href(lang: Lang, path: string): string {
  if (lang === 'en') return path
  return path === '/' ? '/hr' : `/hr${path}`
}

/** Za `toLocaleDateString`. */
export const dateLocale = (lang: Lang) => (lang === 'hr' ? 'hr-HR' : 'en-GB')

/** Hrvatska mnozina za brojeve: 1 recenzija, 2-4 recenzije, 5+ recenzija. */
export function plural(n: number, one: string, few: string, many: string): string {
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return one
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few
  return many
}

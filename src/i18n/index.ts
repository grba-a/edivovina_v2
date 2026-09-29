import type { Lang } from './lang'
import type { Dict } from './dict'
import { en } from './en'
import { hr } from './hr'

export * from './lang'
export * from './wines'
export type { Dict }

export const getDict = (lang: Lang): Dict => (lang === 'hr' ? hr : en)

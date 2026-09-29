'use client'

import { usePathname } from 'next/navigation'
import type { Lang } from '@/i18n'

/**
 * Prijelaz na drugi jezik NA ISTU stranicu: `/hr/shop` <-> `/shop`.
 *
 * Klijentska komponenta zato sto podnozje ne zna na kojoj je ruti, a ne zelim
 * da svaka stranica prosljeduje putanju. Sve je jedan link, bez stanja.
 */
export default function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const path = usePathname() || '/'
  const to =
    lang === 'hr'
      ? path.replace(/^\/hr(?=\/|$)/, '') || '/'
      : path === '/'
        ? '/hr'
        : `/hr${path}`

  return (
    <a className="ftr-lang" href={to} hrefLang={lang === 'hr' ? 'en' : 'hr'} lang={lang === 'hr' ? 'en' : 'hr'}>
      {label}
    </a>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { getDict, href, type Lang } from '@/i18n'

/**
 * Header je SERVER komponenta i nema stanja: mobilni izbornik je <details>,
 * ne useState. Manje JS-a, radi bez hidracije, i prepisuje se u Breakdance
 * bez prevodenja Reactovog stanja.
 */
export default function Header({ lang = 'en' }: { lang?: Lang }) {
  const t = getDict(lang)
  return (
    <header className="hdr">
      <div className="hdr-in">
        {/* `/` je jedina stvarna Next ruta na ovom predlosku, pa ide kroz
            <Link>. Ostali linkovi ostaju <a> jer te stranice zasad ne
            postoje — <Link> na nepostojecu rutu bi prefetchao 404. */}
        <Link href={href(lang, '/')} className="hdr-logo" aria-label={t.header.logo}>
          <Image src="/brand/logo.png" alt="Edivo Vina" width={112} height={38} priority />
        </Link>

        <nav className="hdr-nav" aria-label={t.header.nav}>
          {t.nav.map((n) => (
            <a key={n.href} href={href(lang, n.href)}>
              {n.label}
            </a>
          ))}
        </nav>

        <details className="hdr-menu">
          <summary aria-label={t.header.menu}>
            <span />
            <span />
          </summary>
          <nav aria-label={t.header.navMobile}>
            {t.nav.map((n) => (
              <a key={n.href} href={href(lang, n.href)}>
                {n.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}

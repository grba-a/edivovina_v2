import Image from 'next/image'
import { NAV } from '@/data/copy'

/**
 * Header je SERVER komponenta i nema stanja: mobilni izbornik je <details>,
 * ne useState. Manje JS-a, radi bez hidracije, i prepisuje se u Breakdance
 * bez prevodenja Reactovog stanja.
 */
export default function Header() {
  return (
    <header className="hdr">
      <div className="hdr-in">
        <a href="/" className="hdr-logo" aria-label="Edivo Vina, home">
          <Image src="/brand/logo.png" alt="Edivo Vina" width={112} height={38} priority />
        </a>

        <nav className="hdr-nav" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <details className="hdr-menu">
          <summary aria-label="Menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Main, mobile">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}

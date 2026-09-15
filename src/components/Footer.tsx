import Image from 'next/image'
import { NAV } from '@/data/copy'
import { LANE_NARROW } from '@/lib/stage'

/**
 * Footer je ZAVRSNA POZA amfore: predmet dode u sredinu, uspravi se i tu
 * ostane. Zato footer nosi gornju traku — sadrzaj pocinje ispod predmeta,
 * ne oko njega.
 *
 * Adresa i telefon su s njihovog weba. RADNO VRIJEME NAMJERNO NIJE OVDJE:
 * nigdje ga sami ne objavljuju, a njihov Google profil odrzavaju ljudi izvan
 * tvrtke, pa nije pouzdan izvor. Ceka klijenta.
 */
export default function Footer() {
  return (
    <footer data-act="footer" className={`section ftr lane-${LANE_NARROW.footer}`}>
      <div className="wrap ftr-in">
        <div className="ftr-mark">
          <Image src="/brand/edivo-wordmark.png" alt="Edivo Vina" width={148} height={54} />
          <p className="ftr-claim">
            Wine aged more than 700 days on the Adriatic seabed, at 14&#8211;16&#176;C.
          </p>
        </div>

        <nav className="ftr-nav" aria-label="Footer">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <address className="ftr-where">
          <span>Edivo Vina d.o.o.</span>
          <span>Drace, Janjina, Peljesac</span>
          <a href="mailto:info@edivovina.hr">info@edivovina.hr</a>
        </address>
      </div>

      <div className="wrap ftr-legal">
        <Image src="/brand/trust-badge.png" alt="" width={180} height={38} />
        <p>&#169; {new Date().getFullYear()} Edivo Vina. Peljesac, Croatia.</p>
      </div>
    </footer>
  )
}

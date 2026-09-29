import Image from 'next/image'
import { getDict, href, type Lang } from '@/i18n'
import LangSwitch from './LangSwitch'
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
export default function Footer({ lang = 'en' }: { lang?: Lang }) {
  const t = getDict(lang)
  return (
    <footer data-act="footer" className={`section ftr lane-${LANE_NARROW.footer}`}>
      <div className="wrap ftr-in">
        <div className="ftr-mark">
          <Image src="/brand/edivo-wordmark.png" alt="Edivo Vina" width={148} height={54} />
          <p className="ftr-claim">{t.footer.claim}</p>
        </div>

        <nav className="ftr-nav" aria-label={t.footer.nav}>
          {t.nav.map((n) => (
            <a key={n.href} href={href(lang, n.href)}>
              {n.label}
            </a>
          ))}
        </nav>

        <address className="ftr-where">
          <span>{t.footer.company}</span>
          <span>{t.footer.place}</span>
          <a href="mailto:info@edivovina.hr">info@edivovina.hr</a>
        </address>
      </div>

      {/* POSTOLJE. Prazan pojas u koji amfora sjedne na svoj kovani stalak.
          Postoji jer je predmet inace stajao PREKO footer navigacije — Petar
          je trazio da bude ispod footera, ne na njemu. Visina je odmjerena
          prema stvarnoj visini predmeta sa stalkom (~44 % kadra na desktopu). */}
      <div className="ftr-plinth" aria-hidden />

      <div className="wrap ftr-legal">
        <Image src="/brand/trust-badge.png" alt="" width={180} height={38} />
        <p>
          {t.footer.copyright(new Date().getFullYear())}
          <LangSwitch lang={lang} label={t.footer.switchLabel} />
        </p>
      </div>
    </footer>
  )
}

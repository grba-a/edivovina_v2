/**
 * Ikone. JEDNA obitelj, jedan potez, jedna velicina.
 *
 * Inline SVG, ne knjiznica i ne font: tri ikone ne opravdavaju paket, a ovako
 * nasljeduju `currentColor` pa prate temu plohe na kojoj stoje.
 *
 * Pravila koja ih drze zajedno (ui-ux-pro-max, „Icons & Visual Elements"):
 *   - ista debljina poteza (1.5) na svima
 *   - isti okvir 24x24 i isti opticki teret
 *   - nema emojija kao ikona
 *   - `aria-hidden`, jer uz svaku stoji tekst koji kaze isto
 *
 * Dodirna meta NIJE na ikoni nego na linku oko nje — ikona od 24 px nikad
 * nije meta od 44 px.
 */
const paths: Record<string, React.ReactNode> = {
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16.3A8.4 8.4 0 1 1 8.2 19.4z" />
      <path d="M9 9.2c.2 1 .7 2 1.5 2.8s1.8 1.3 2.8 1.5l.9-1.2 2 .8v1.3c0 .6-.5 1.1-1.1 1a8 8 0 0 1-7-7c0-.6.4-1.1 1-1.1h1.3l.8 2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.6 6.2 7.3 5.6a2 2 0 0 0 2.2 0l7.3-5.6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c-4.5-5.2-7-8.2-7-11a7 7 0 1 1 14 0c0 2.8-2.5 5.8-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
}

export default function Icon({ name, className }: { name: keyof typeof paths | string; className?: string }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {d}
    </svg>
  )
}

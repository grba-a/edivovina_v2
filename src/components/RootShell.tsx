import Header from '@/components/Header'
import { serif, sans } from '@/lib/fonts'
import { getDict, type Lang } from '@/i18n'

/**
 * Korijenski <html> za oba jezika. Dva korijenska layouta (`(en)` i `hr`)
 * zato sto `lang` na <html> mora biti tocan na svakoj stranici, a jedini nacin
 * da ga root layout zna bez `headers()` (koji cijeli web pretvara u dinamicki)
 * jest da ima po jedan layout za svaki jezik.
 */
export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = getDict(lang)
  return (
    <html lang={lang} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">
          {t.layout.skip}
        </a>
        <Header lang={lang} />
        {/* Amfora vise NIJE ovdje. Petar 2026-09-24: „amfora ne treba za
            podstranice". U layoutu bi je nosila svaka ruta, pa bi /shop i
            /contact placali 318 kB modela i cijeli three.js bez razloga.
            Sada je mountana samo na naslovnici, u `views/Home.tsx`. */}
        <main id="main">{children}</main>
      </body>
    </html>
  )
}

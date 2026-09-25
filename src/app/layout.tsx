import type { Metadata } from 'next'
import { Libre_Baskerville, Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

/* Klijentovi fontovi, isti kao na njihovom webu. Kroz next/font, pa se
   posluzuju s naseg origina i ne nose FOUT s Google CDN-a. */
const serif = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://edivovina-v2.vercel.app'),
  title: 'Underwater Wine | Navis Mysterium - Edivo Vina',
  description:
    'Wine aged more than 700 days on the Adriatic seabed. Navis Mysterium, from the Peljesac peninsula, Croatia.',
  openGraph: {
    title: 'Navis Mysterium - Edivo Vina',
    description: 'Wine aged more than 700 days on the Adriatic seabed.',
    images: ['/photo/hero.jpg'],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Header />
        {/* Amfora vise NIJE ovdje. Petar 2026-09-24: „amfora ne treba za
            podstranice". U layoutu bi je nosila svaka ruta, pa bi /shop i
            /contact placali 318 kB modela i cijeli three.js bez razloga.
            Sada je mountana samo na naslovnici, u `app/page.tsx`. */}
        <main id="main">{children}</main>
      </body>
    </html>
  )
}

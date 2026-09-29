import { Libre_Baskerville, Raleway } from 'next/font/google'

/* Klijentovi fontovi, isti kao na njihovom webu. Kroz next/font, pa se
   posluzuju s naseg origina i ne nose FOUT s Google CDN-a.

   Podskup je `latin-ext`, ne samo `latin`: hrvatska slova (č, ć, đ, š, ž)
   nisu u `latin` podskupu, pa bi ih preglednik crtao zamjenskim fontom. */
export const serif = Libre_Baskerville({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
})

export const sans = Raleway({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

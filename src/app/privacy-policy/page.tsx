import LegalPage, { legalMeta } from '@/components/LegalPage'

/* Adresa je ista kao kod njih, namjerno: kad v2 zamijeni njihov web, ovaj
   URL ne puca. Tekst i raspored su u `LegalPage`. */
export const metadata = legalMeta('privacy-policy')

export default function Page() {
  return <LegalPage slug="privacy-policy" />
}

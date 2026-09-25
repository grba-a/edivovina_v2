import type { Metadata } from 'next'
import { legalBySlug, LEGAL_NAV } from '@/data/legal'
import PageHead from './PageHead'
import Footer from './Footer'

export function legalMeta(slug: string): Metadata {
  const p = legalBySlug(slug)
  return p ? { title: `${p.title} | Edivo Vina`, robots: { index: false } } : {}
}

/**
 * Pravna stranica. ODLUKA K1, Petar 2026-09-24: tekst se prenosi DOSLOVNO, na
 * goloj stranici.
 *
 * Kod njih svaka od ovih sest nosi ladicu kosarice, widget za bodove i puno
 * podnozje — na stranici s uvjetima poslovanja. Ovdje ne nosi nista osim
 * teksta, navigacije medju pravnim stranicama i podnozja.
 *
 * `robots: noindex` jer pravni tekst nije sadrzaj po kojem se dolazi na web, a
 * 9 773 rijeci pravnog teksta razblazuje ono po cemu jest.
 *
 * Tekst je iz `legal.ts`, gdje stoji blok po blok s izvornom oznakom (h2, p,
 * li), pa se struktura ne gubi u prepisu.
 */
export default function LegalPage({ slug }: { slug: string }) {
  const page = legalBySlug(slug)
  if (!page) return null

  return (
    <>
      <PageHead title={page.title} />

      <section className="section">
        <div className="wrap legal">
          {page.blocks.map((b, i) => {
            const key = `${b.tag}-${i}`
            if (b.tag === 'li') return <li key={key}>{b.t}</li>
            if (b.tag === 'h1' || b.tag === 'h2') return <h2 key={key}>{b.t}</h2>
            if (b.tag === 'h3' || b.tag === 'h4') return <h3 key={key}>{b.t}</h3>
            return <p key={key}>{b.t}</p>
          })}
        </div>
      </section>

      <nav className="section section-tight" aria-label="Legal">
        <div className="wrap">
          <ul className="legalnav">
            {LEGAL_NAV.filter((n) => n.slug !== slug).map((n) => (
              <li key={n.slug}>
                <a href={`/${n.slug}`}>{n.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Footer />
    </>
  )
}

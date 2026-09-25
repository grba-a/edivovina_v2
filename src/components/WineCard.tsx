import Image from 'next/image'
import type { Wine } from '@/data/wines'
import { money } from '@/lib/money'

/**
 * Kartica vina. ODLUKE B1 i C1, Petar 2026-09-24.
 *
 * B1: isti obrazac kao dvije kartice na naslovnici — fotografija, ime, vrsta,
 * medalja gdje postoji, cijena, JEDAN CTA. Kod njih u istoj mrezi stoje dva
 * razlicita gumba, „Add to cart" na jednom i „Read more" na rasprodanom, pa
 * kupac mora shvatiti razliku bez da mu je itko rekao.
 *
 * C1: medalja ide samo ondje gdje nagrada stvarno postoji, inace nista. Kod
 * njih svaki proizvod bez recenzije nosi PET PRAZNIH ZVJEZDICA, a prazna
 * ocjena ne znaci „nema ocjena" nego „nitko ovo nije kupio".
 *
 * Zvjezdice ne stoje ni ondje gdje recenzije postoje: sest proizvoda ima
 * ocjenu 5,00 iz jedne ili dvije recenzije, a „5,00 iz jedne recenzije" je
 * slab dokaz koji se zna okrenuti protiv. Recenzije se prikazuju na stranici
 * proizvoda, gdje ih se moze procitati.
 *
 * Gumbi su INERTNI do prepisa u WooCommerce (odluka C, 2026-09-18). Ovo je
 * predlozak, ne trgovina — zato `aria-disabled`, a ne lazna kosarica.
 */
export default function WineCard({ wine, priority }: { wine: Wine; priority?: boolean }) {
  const out = !wine.inStock

  return (
    <li className={`wine${out ? ' is-out' : ''}`}>
      <a className="wine-shot" href={`/product/${wine.slug}`} tabIndex={-1} aria-hidden>
        <Image
          src={wine.photo}
          alt=""
          width={600}
          height={900}
          sizes="(min-width: 62.5rem) 20rem, (min-width: 48rem) 30vw, 45vw"
          className="wine-img"
          priority={priority}
        />
        {wine.undersea ? <span className="wine-flag">Undersea</span> : null}
      </a>

      <h3 className="wine-name">
        <a href={`/product/${wine.slug}`}>{wine.name}</a>
      </h3>
      <p className="wine-kind">{wine.kind}</p>

      {/* Dokaz stoji UZ cijenu, ne na dnu stranice. */}
      {wine.award ? (
        <p className="wine-award">
          <Image src={wine.award.medal} alt="" width={22} height={22} />
          {wine.award.label}
        </p>
      ) : null}

      <div className="wine-foot">
        <span className="wine-price">{money(wine.price)}</span>
        {out ? (
          /* Rasprodano se kaze, ne skriva. Kod njih ovo vino i dalje stoji u
             mrezi s gumbom „Read more" i bez ijedne oznake. */
          <span className="wine-out">Sold out</span>
        ) : (
          <span className="btn" aria-disabled="true">
            Add to cart
          </span>
        )}
      </div>
    </li>
  )
}

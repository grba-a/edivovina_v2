/**
 * Cijene se formatiraju NA JEDNOM MJESTU, da se pri prepisu u WooCommerce
 * mijenja jedan file, ne osam kartica.
 *
 * `de-DE` je namjerno: Hrvatska koristi zarez kao decimalni znak i tocku kao
 * tisucicu, kao i njihov postojeci web.
 */
const fmt = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
})

export const money = (eur: number) => fmt.format(eur)

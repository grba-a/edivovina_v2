/**
 * Pece grade u hero pozadinu.
 *
 * `hero-src.jpg` je NETAKNUT original s njihovog weba (hero-bg2021.jpg).
 * Izmjereno: luma 13,0/255 — gotovo crna fotografija. Njihov web na njoj nosi
 * kompasnu ruzu koja daje cijeli kadar; kompas je obustavljen, pa je ostala
 * prazna tama i slika se prakticki nije vidjela.
 *
 * Grade ide U DATOTEKU, ne u CSS `filter`: filter preko slike na cijeli kadar
 * je sloj koji kompozitor drzi na svakom paintu, a ovo je jednokratno.
 *
 * Pokreni ponovno:  node scripts/grade-hero.mjs
 */
import sharp from 'sharp'

const SRC = 'public/photo/hero-src.jpg'
const OUT = 'public/photo/hero.jpg'

const luma = (s) => 0.2126 * s.channels[0].mean + 0.7152 * s.channels[1].mean + 0.0722 * s.channels[2].mean

const before = await sharp(SRC).stats()

/**
 * REZ PRIJE GRADEA.
 *
 * Original je 1920x1195 vodoravno. Na uspravnom telefonu `cover` prikaze PUNU
 * VISINU i samo ~29 % sirine — a gornja trecina originala je neizostren prazan
 * zid preko cijele sirine. Zato se na mobitelu uvijek vidjelo prazno gore, ma
 * koji `object-position` stavio: pomicanjem kadra se to ne da rijesiti jer je
 * prazan pojas vodoravan, a kadar rezе po vertikali.
 *
 * Zato se prazni pojas odrezuje IZ IZVORA. Ostaje 1300x975 (4:3) oko sadrzaja:
 * obrasla amfora lijevo, kutije Navis Mysterium u sredini, kamenice.
 */
await sharp(SRC)
  .extract({ left: 0, top: 215, width: 1300, height: 975 })
  // `linear(a, b)` je izlaz = a*ulaz + b. `b` DIZE SJENE, sto je ovdje bitno:
  // `modulate({brightness})` mnozi, pa gotovo crne piksele ostavi gotovo crnima.
  .linear(1.28, 26)
  // Dizanjem sjena boja splasne, pa se vraca malo zasicenja.
  .modulate({ saturation: 1.18 })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(OUT + '.tmp')

const { promises: fs } = await import('node:fs')
await fs.rename(OUT + '.tmp', OUT)

const after = await sharp(OUT).stats()
const size = (await fs.stat(OUT)).size
console.log('luma prije:', luma(before).toFixed(1), '-> poslije:', luma(after).toFixed(1))
console.log('velicina:', Math.round(size / 1024) + ' kB')

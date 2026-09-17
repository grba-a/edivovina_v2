/**
 * Priprema hero fotografija iz klijentovog novog materijala (16. rujna 2026,
 * `~/Desktop/edivo-nove-slike`).
 *
 * ART DIRECTION, ne jedna slika u dva kadra. Prije je ista vodoravna slika
 * sluzila i telefonu i desktopu, a na uspravnom telefonu `cover` prikaze punu
 * visinu i samo ~29 % sirine — pa se subjekt gubio ma koji `object-position`
 * stavili. Zato dva razlicita kadra:
 *
 *   hero-wide.jpg    cijeli zaljev, riva prekrivena amforama, pelješka brda.
 *                    Cijela prica u jednom kadru.
 *   hero-tall.jpg    obrasle amfore nakon mora (kamenice, alge, kalcificirana
 *                    resetka) svjeze izvucene na rivu. Proizvod nakon 700 dana.
 *                    Uspravno, bez ljudi u kadru.
 *
 * Posluzuju se kroz <picture>, pa se skine SAMO jedna.
 *
 * OGRANICENJE KOJE TREBA ZNATI: originali su dosli kroz WhatsApp, koji
 * rekompresira. Duza strana je 2016 px. Za telefon (430 px pri 2x = 860) je
 * to vise nego dosta; za full-bleed desktop pri 2x bi trebalo 2880, pa je na
 * retina desktopu blago mekano. Za ostro treba originale od klijenta, ne
 * preko WhatsAppa.
 *
 * Pokreni:  node scripts/hero-assets.mjs
 */
import sharp from 'sharp'
import { stat } from 'node:fs/promises'

const SRC = '/Users/grbaa/Desktop/edivo-nove-slike'
const JOBS = [
  /* 1600, ne 2016: original je 2016 px pa retina desktop (1440x2 = 2880) je
     ionako nedostizan, a 1600 pri q64 stedi 60 kB za razliku koja se ne vidi. */
  { in: `${SRC}/WhatsApp Image 2026-09-16 at 19.55.43 (3).jpeg`, out: 'public/photo/hero-wide.jpg', w: 1600, q: 64 },
  /* 820 pokriva telefon do 410 px pri 2x. Slika je puna obrastaja, dakle puna
     detalja, i svaki piksel se placa. */
  { in: `${SRC}/WhatsApp Image 2026-09-16 at 19.55.47 (3).jpeg`, out: 'public/photo/hero-tall.jpg', w: 820, q: 54 },
]

const luma = (s) => 0.2126 * s.channels[0].mean + 0.7152 * s.channels[1].mean + 0.0722 * s.channels[2].mean

/* SAMO JPEG, bez WebP-a. Izmjereno na ovim slikama: WebP je VECI na oba
   kadra (tall 820: jpg 195 kB vs webp 222; wide 1600: jpg 125 vs webp 133).
   Fotke su dosle kroz WhatsApp i nose kompresijski sum, a sum je skup u svakom
   formatu — WebP tu nema sto dobiti. Dodavati ga znacilo bi dvostruki
   <source> i mrtav teret u repou. */
for (const j of JOBS) {
  const before = await sharp(j.in).stats()
  const base = sharp(j.in)
    .resize({ width: j.w, withoutEnlargement: true })
    // Bez gradea: ove su fotografije svijetle same po sebi (luma >100), pa im
    // treba samo blago zasicenje da more ne ispadne isprano.
    .modulate({ saturation: 1.06 })

  await base.jpeg({ quality: j.q, progressive: true, mozjpeg: true }).toFile(j.out)

  const m = await sharp(j.out).metadata()
  const kb = Math.round((await stat(j.out)).size / 1024)
  console.log(
    j.out.split('/').pop().replace('.jpg', '').padEnd(11),
    (m.width + 'x' + m.height).padEnd(10),
    kb + ' kB',
    '| luma ' + luma(before).toFixed(0),
  )
}

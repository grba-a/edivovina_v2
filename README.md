# Edivo Vina — v2

Naslovnica za **Edivo Vina** (Janjina / Drače, Pelješac), podmorsku vinariju.
Struktura, tekst, paleta i slike preuzeti s njihovog živog weba
[edivovina.hr](https://www.edivovina.hr/); build je naš.

Dev na portu **4300**.

```bash
npm install
npm run dev
```

## Što je ovdje drugačije

**Amfora putuje kroz sekcije.** U prošloj verziji je padala niz jednu os.
Ovdje svaka sekcija deklarira `data-act`, a [`src/lib/stage.ts`](src/lib/stage.ts)
nosi pozu za svaki act — vodoravno, okomito, blizina, nagib, vidljivost.
Poza se **drži** kroz sredinu sekcije i **predaje** na šavu prema sljedećoj:
predmet koji se miče dok čitaš odlomak je smetnja, predmet koji se premjesti
dok prelaziš na sljedeću sekciju je koreografija.

Sekcija bez `data-act` amfori ne postoji.

**Trake.** Amfora je *iznad* sadržaja, nikad iza njega, pa joj sekcija ustupa
traku: lijevu, desnu ili gornju. Traka se čita **statički** iz `LANE_NARROW` /
`LANE_WIDE` — padding koji se mijenja usred scrolla je reflow na svakom frameu.

**Hero je `100svh`, i to nije estetika.** `stage.ts` računa predaju iz sredine
kadra, pa sekcija niža od kadra nikad ne doživi svoju sredinu — hero od 661 px
na kadru od 812 px je već na `scrollY 0` bio na 61 % i amfora se vidjela prije
nego što je hero otišao.

## Pravila ovog projekta

- **Mobile first.** Osnovne klase su za 360 px, breakpointi samo dodaju.
- **Bez Lenisa i smooth-scroll knjižnica.** Scroll ostaje nativan.
- **Hero intro je CSS, ne knjižnica.** GSAP na hero naslovu košta sekunde LCP-a.
- **Predložak, ne trgovina.** Gumbi su inertni (`aria-disabled`); katalog iz
  [`src/data/wines.ts`](src/data/wines.ts) mapira se na WooCommerce polja pri
  prepisu u Breakdance.
- **Nijedna cijena nije procijenjena.** Sve su pročitane s njihovih product
  stranica 15. rujna 2026. Ako se promijene kod njih, mijenjaju se i ovdje ručno.

## Nije u ovoj rundi

- **Video galerija** (66 klipova u carouselu kod njih) — zaseban posao oko
  težine stranice i facade embeda.
- **Šest podstranica**: Wines, About Us, Visit Us, News & Stories, Gallery,
  Contact.

## Tvrdnje koje treba pažljivo nositi

Iz provjere u prošloj rundi: *„first in the world"* ne stoji (baskijski Crusoe
Treasure je pod morem od 2010., patent za podmorsko dozrijevanje prijavljen
2007.), *„first in Croatia"* stoji. Svjetski patent nema broj prijave ni unos u
DZIV registru. Dubina im na vlastitom webu sam sebi proturječi. 700 dana i
14–16 °C su potvrđeni. Detalji stoje u komentaru u
[`src/data/copy.ts`](src/data/copy.ts).

**Ronilačke ture više ne postoje** (potvrdio klijent) — ne smiju se nigdje
nuditi kao usluga.

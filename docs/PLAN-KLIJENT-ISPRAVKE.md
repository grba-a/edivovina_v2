# Klijentove ispravke — 2. listopada 2026.

Prenio Petar. Stanje: `[ ]` čeka, `[x]` napravljeno, `[?]` treba Petrova riječ.

## Jasno, radim odmah

- [x] **1. HR kontakt, gramatika.** `src/i18n/hr.ts:48` „izronile" → „izronjene".
      Ista riječ stoji i na `:52` (alt teksta) — pitati vrijedi li i ondje.
- [x] **2. Adrese.** `src/data/pages.ts` PLACES. Vinarija: `Janjina 62` →
      `Dolina 17`, 20246 Janjina. Wine bar: `Drače 18` → `Drače 18A`.
      Mijenjati i `maps:` URL uz svaku. JEDNO MJESTO POKRIVA OBA JEZIKA —
      `hr.ts` prevodi samo ime, opis i alt, a ulicu dijeli.
      NE DIRATI `src/data/news-bodies.ts`: ondje su adrese dio objavljenih
      novinskih članaka, tuđi tekst koji citiramo.
- [x] **3. Dubina → 15–20 m.** Klijent ispravlja. Pojave u NAŠEM tekstu:
      `en.ts:92,94` · `hr.ts:108,195,228,230,285` · `gallery.ts:27` ·
      `DepthScene.tsx` (komentar).
      NE DIRATI `press.ts` i `news-bodies.ts` — tuđi članci sa svojim brojkama
      (14–20, 20 m). Ovo ujedno zatvara staru kontradikciju: naslovnica je
      govorila „oko 20 m", podstranice „18–25 m".
- [?] **4. Naša misija, HR i EN.** NE MOGU REPRODUCIRATI, treba Petrova uputa.
      Napisao sam `scripts/amph-overlap.mjs`: snima naslovnicu kroz cijeli
      skrol dvaput, sa i bez amfore, i razlikom piksela nalazi svaki redak
      preko kojeg predmet prelazi. (Iz DOM-a se ne može — amfora je WebGL
      canvas preko cijelog kadra.) Vrtnja se gasi, inače svaki prolaz uhvati
      drugi kut i brojke skaču.
      Rezultat na 390/1024/1440: misija NIJE među prekrivenima. Prekriveni su
      footer linkovi, hero gumbi i tekst u sekciji prikaza proizvoda — a ondje
      amfora stoji usred teksta PO DIZAJNU (stalak u podnožju, predmet u
      sredini u prikazu), što je Petrova odluka, ne greška.
      Probao sam ipak odmaknuti `story` pozu desno (WIDE 0,55→0,70,
      NARROW 0,52→0,62). Izmjerena razlika u broju prekrivenih redaka: NULA,
      na sve tri širine. Pomak je ušao (snimka se promijenila za 12,6), ali ne
      dira nijedan stvarni sudar. Vraćeno — ne mijenjam kompoziciju koju je
      Petar 28. 9. odobrio bez ikakvog dobitka.
      TREBA: na kojoj širini i na kojem mjestu klijent to vidi, ili snimka.

## Treba Petrova riječ

- [?] **5. Zaštita industrijskog dizajna.** Klijent: „Prvi u svijetu... vino u
      amforama, zaštićeno kao industrijski dizajn u EU, USA, Kini i Crnoj Gori."
      Dvije nejasnoće: (a) što je točno zaštićeno — amfora, postupak ili oboje;
      (b) gdje ide. Claim je, pa ne pišem formulaciju napamet.
- [?] **6. „Vino boravi u…" — četiri uvjeta.** tišina · temperatura koja ne
      prelazi 16 °C · tama · boce pravilno polegnute na čep.
      Gdje: nova sekcija, ili u postojeći tekst o odležavanju?
      Pazi: na webu već stoji „14–16 °C"; klijentovo „ne prelazi 16" je
      u skladu, ali formulacija se mijenja.
- [?] **7. Skica amfore sa staklenom bocom unutra.** Klijent o ilustraciji na
      About: želi da se vidi staklena boca unutar amfore, „da podsjeća izgledom"
      — sada mu izgleda „kao epruveta". Mijenja se
      `src/components/figures/AmphoraSection.tsx`.
- [?] **8. Čep s logom u hero.** Hero već nosi `hero-bottles.png` (crtež čepa i
      mrlje od vina). Klijent kaže „stavi ovdje čep sa logom" — vjerojatno
      misli na pravu fotografiju (`cork-*.webp`, dodane 1. 10.). Zamjena ili
      dodatak? Pitati prije nego diram hero.

## Novo, 7. listopada 2026.

- [x] **9. Amfora i boca iz mora ne pricaju istu pricu.** Klijent: u opisu amfore
      stoji samo Dingac, u opisu boce iz mora Dingac i Postup, a vino je isto —
      razlikuje se samo odlezavanje. Ima pravo, i dvostruko: amforin tekst
      Dingac naziva *sortom grozda*, a Dingac je polozaj; sorta je Plavac mali,
      sto druge dvije stranice vec tocno kazu.
      Gdje: `src/data/wines.ts` (EN, `navis-mysterium-undersea-amphora.body`) i
      `src/i18n/wines.ts` (HR, isti slug). `body` se crta SAMO na
      `/product/[slug]` (`src/views/Product.tsx:91`), nigdje drugdje.
      Tri varijante + tri sitnice od iste bolesti idu Petru kao artifact:
      https://claude.ai/artifact/NmrRHY1EfFFfsHiY6ERbJn — izbor se sprema u
      db `izmjena9/` (`tekst` = A/B/C, pa `spec`, `oznaka`, `tipfeleri`).
      Moja preporuka: **B** — isti prvi redak na sve tri stranice Navis
      Mysteriuma, a dalje svaka ide svojim putem.
      PAZI: zaglavlje `src/data/wines.ts` tvrdi da je jedina izmjena njihovog
      teksta bila dopisana jedinica „0,75 l". Ta se napomena mijenja zajedno s
      tekstom, inace file lazi o sebi.
      Posljedica dalje: katalog je 24. rujna povucen iz NJIHOVOG WooCommercea,
      pa ista greska i dalje stoji na edivovina.hr. Ako je klijent ne ispravi
      ondje, vratit ce se pri prepisu u Breakdance.

      NAPRAVLJENO 7. listopada. Petar: „ti odluci sto mislis da je najbolje i
      pushaj". Odluceno i izvedeno:
      - **Varijanta B.** Amfora sada otvara istim retkom kao boca iz mora i
        regularna boca („Plavac mali s polozaja Dingac i Postup."), a dalje
        zadrzava svoj tekst — 2800 suncanih sati i padine od 45% ostaju.
        Pada i njihova greska da je Dingac sorta grozda.
      - **Mjera i odlezavanje u `spec`.** Bili su zalijepljeni na pocetak
        OPISA kod SEST proizvoda, ne samo kod boce iz mora kako je artifact
        pitao; amfora ih je jedina imala na mjestu. Premjesteni su svi, inace
        bi shop bio neujednacen na novi nacin.
      - **Tipfeleri popravljeni** (13 ih je, popis je u zaglavlju
        `src/i18n/wines.ts`). Popis ide klijentu da ih ispravi i kod sebe.
      - **Oznaka nad regularnom bocom NIJE dirana.** Ostaje „Dingac" umjesto
        „Plavac Mali". To je njihova kategorija iz njihovog kataloga, a je li
        to vino deklarirano kao Dingac ili kao Plavac s dva polozaja znaju
        samo oni. Mijenjati je napamet znacilo bi izmisliti tvrdnju o vinu.
        PITATI KLIJENTA.
      Provjereno u pravom WebKitu na 390, oba jezika, obje stranice: isti prvi
      redak, iste specifikacije, bez greski u konzoli. Snimke u
      `.shots/izmjena9-*.png`.

- [?] **10. Gramatika u amforinom hrvatskom opisu.** Nije tipfeler pa nije
      dirano: „Vino ... kristalno je bistar ... harmonican" — vino je srednji
      rod, islo bi „bistro ... harmonicno". Klijentov tekst, treba njegova
      rijec (ili barem tvoja, kao i kod „izronile"→„izronjene").
- [?] **11. Decanterovo srebro.** Staro pitanje, otvoreno i dalje: nagradu nosi
      „Navis Mysterium Regular Bottle", a u katalogu postoji i proizvod koji se
      zove „Dingac Edivo". Nijedan njihov opis ne spominje nagradu.

## Pravila koja ovdje vrijede

- Tuđi tekst (press, novinski članci) se ne ispravlja, ni kad je brojka druga.
- Svaka izmjena ide u WebKit provjeru na 360/390/430 i u oba jezika.
- Ne pusham bez Petrove riječi.

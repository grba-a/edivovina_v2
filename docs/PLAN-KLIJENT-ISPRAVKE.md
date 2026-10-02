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

## Pravila koja ovdje vrijede

- Tuđi tekst (press, novinski članci) se ne ispravlja, ni kad je brojka druga.
- Svaka izmjena ide u WebKit provjeru na 360/390/430 i u oba jezika.
- Ne pusham bez Petrove riječi.

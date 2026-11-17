---
title: Kontrola skutočne zameraných bodov
summary: Čítajte body, ktoré zamerala geodetická skupina, a porovnajte ich s bodmi a blokmi výkresu: v tolerancii alebo mimo nej, nezamerané, nadbytočné. Označené vo výkrese a zapísané ako správa CSV.
keywords: as built, as-built, asbuilt, zameranie, geodetické meranie, totálna stanica, vytyčenie, súbor bodov, csv, txt, pnezd, penzd, xyz, tolerancia, odchýlka, kontrola, porovnať, exportpoints, body vytyčenia
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) je druhá polovica {{cmd:EXPORTPOINTS}}: body výkresu exportujete do terénu, skupina ich vytýči, zameria, čo bolo postavené, a ASBUILT porovná ich súbor s výkresom.

1. Napíšte {{cmd:ASBUILT}} a vyberte tie isté body a bloky, ktoré ste exportovali (Enter vezme každý POINT, ako EXPORTPOINTS).
2. **Spárovať skutočné body podľa** **Čísla** (skupina zachovala vaše čísla bodov: zadajte prvé číslo, z ktorého ste exportovali), alebo **Najbližšieho** (skupina si očíslovala vlastné merania: každý projektový bod dostane najbližší).
3. Zadajte jednotky a súradnice súboru tak, ako ste ich exportovali (Výkres, Metre alebo Stopy; Svetové alebo UCS) a **toleranciu** v jednotkách výkresu.
4. Vyberte CSV alebo TXT súbor skupiny. CadCraft ho číta ako CivilCraft: čiarky, tabulátory, bodkočiarky alebo medzery, riadok hlavičky pomenúvajúci stĺpce, alebo PNEZD podľa počtu stĺpcov.

Riadok príkazov hovorí, koľko bodov bolo spárovaných, koľko je v tolerancii, mimo nej, nezameraných a nadbytočných, a najväčšiu vzdialenosť. **Označiť ich vo výkrese?** Áno ich umiestni na hladinu **AS-BUILT** ako jeden krok späť: bod pri každom meraní, jeho číslo a vzdialenosť vedľa neho a červená čiara od projektového bodu ku každému meraniu mimo tolerancie. Správa CSV sa stiahne so všetkými bodmi: projektové a skutočné súradnice, rozdiely na východ, na sever a vo výške, a výsledok.

Pozri aj [Body pre BIM programy](topic:points-for-bim).

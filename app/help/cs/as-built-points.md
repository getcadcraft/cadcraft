---
title: Kontrola skutečně provedených bodů
summary: Načtěte body, které zaměřila geodetická skupina, a porovnejte je s body a bloky výkresu: uvnitř nebo mimo toleranci, neměřené, přebytečné. Body jsou vyznačeny ve výkresu a porovnání je uloženo jako protokol CSV.
keywords: skutečné provedení, as built, as-built, asbuilt, zaměření, totální stanice, vytyčení, vytyčit, soubor bodů, csv, txt, pnezd, penzd, xyz, tolerance, odchylka, kontrola, porovnání, exportpoints, body rozvržení
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) je druhá polovina {{cmd:EXPORTPOINTS}}: body výkresu exportujete pro terén, skupina je vytyčí a změří, co bylo postaveno, a ASBUILT porovná jejich soubor s výkresem.

1. Napište {{cmd:ASBUILT}} a vyberte stejné body a bloky, které jste exportovali (Enter vezme všechny POINT, jako EXPORTPOINTS).
2. **Spárujte skutečně zaměřené body podle** **Číslo** (skupina si ponechala vaše čísla bodů: zadejte první číslo, ze kterého jste exportovali), nebo **Nejbližší** (skupina číslovala vlastní měření: každý projektový bod dostane nejbližší).
3. Zadejte jednotky a souřadnice souboru tak, jak jste je exportovali (Výkres, Metry nebo Stopy; Světové nebo UCS), a **toleranci** v jednotkách výkresu.
4. Vyberte CSV nebo TXT soubor skupiny. CadCraft jej čte stejně jako CivilCraft: čárky, tabulátory, středníky nebo mezery, řádek záhlaví s názvy sloupců, nebo PNEZD podle počtu sloupců.

Příkazový řádek říká, kolik bodů bylo spárováno, kolik je v toleranci, mimo ni, neměřeno a přebytečných, a největší vzdálenost. **Vyznačit je ve výkresu?** Ano je umístí na vrstvu **AS-BUILT** jako jeden krok zpět: bod u každého měření, jeho číslo a vzdálenost vedle něj, a červená čára od projektového bodu ke každému měření mimo toleranci. CSV protokol se stáhne se všemi body: projektové a skutečné souřadnice, rozdíly na východ, na sever a ve výšce, a výsledek.

Viz také [Body pro BIM programy](topic:points-for-bim).

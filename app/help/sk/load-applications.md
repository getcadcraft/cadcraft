---
title: Načítanie aplikácií (APPLOAD)
summary: Načítajte rutiny LISP a ich dialógové súbory, uvoľnite ich, znova načítajte z histórie a ponechajte tie, ktoré používate, v Súbore Po spustení.
keywords: appload, ap, načítať aplikáciu, lisp, lsp, dcl, rutina, po spustení, uvoľniť, história, pretiahnuť, načítať, prispôsobiť, spravovať
from: 89e0ee95
---

## Čo sa naučíte

Ako načítať rutinu LISP (súbor `.lsp`), aby jej príkazy fungovali v CadCraft, ako ju uvoľniť a ako ju nastaviť, aby sa načítavala pri každom spustení CadCraft.

## Načítanie rutiny

1. Otvorte {{ui:Pohľad}} › {{ui:Viac}} › {{ui:Načítať aplikáciu…}} alebo zadajte {{cmd:APPLOAD}} (alebo `AP`) a stlačte {{key:Enter}}.
2. Kliknite na {{ui:Načítať súbor…}} a vyberte jeden alebo viac súborov `.lsp`. Rutina, ktorá otvára dialóg, zvyčajne prichádza so súborom `.dcl`: vyberte aj ten.
3. Dialóg hlási, čo každý súbor vytvoril, napríklad "Načítané delblocks.lsp: 1 príkaz, DELBLOCKS."
4. Kliknite na {{ui:Zavrieť (C)}}, zadajte príkaz rutiny a stlačte {{key:Enter}}.

Súbory `.lsp` a `.dcl` môžete tiež pretiahnuť na výkres alebo do dialógu {{ui:Načítať aplikácie}}: načítajú sa hneď.

Súbor sa číta tu, vo vašom prehliadači. Nič sa nenahráva.

:::tip
Na prázdnom príkazovom riadku stlačte {{key:Enter}}, aby sa príkaz rutiny spustil znova, rovnako ako ktorýkoľvek iný príkaz. Vaše aliasy príkazov sa k nemu tiež dostanú: pozri "Úprava aliasov príkazov".
:::

## Uvoľnenie rutiny

V {{ui:Načítať aplikácie}} pod {{ui:Načítané aplikácie}} kliknite pri súbore na {{ui:Uvoľniť}}. Príkazy, ktoré vytvorila, zmiznú, kým ju znova nenačítate.

## Načítanie rutiny pri každom spustení CadCraft

1. Načítajte rutinu.
2. Pod {{ui:Načítané aplikácie}} kliknite pri nej na {{ui:Pridať do súboru Po spustení}}.

Od tohto momentu sa načíta sama vždy, keď sa CadCraft spustí v tomto prehliadači. Ak to chcete zastaviť, kliknite pri nej pod {{ui:Súbor Po spustení}} na {{ui:Odstrániť}}.

Súbor Po spustení uchováva kópiu každého súboru v úložisku tohto prehliadača. Ak rutinu zmeníte, načítajte nový súbor a pridajte ho znova.

## Načítanie acad.lsp a acaddoc.lsp z priečinka podpory (Studio)

V CadCraft Studio {{ui:Priečinok podpory}} v dialógu {{ui:Načítať aplikácie}} prijíma priečinok na vašom počítači. Kliknite na {{ui:Vybrať priečinok…}}. Keď sa CadCraft spustí, z tohto priečinka prečíta `acad.lsp` a potom `acaddoc.lsp` (bez ohľadu na veľkosť písmen v názvoch), načíta ich a potom načíta Súbor Po spustení. `acaddoc.lsp` sa znova prečíta vždy, keď sa otvorí nová karta výkresu. Nič iné v priečinku sa nečíta a súbor väčší ako 2 MB sa preskočí so správou.

Ak súbor definuje funkciu s názvom `S::STARTUP`, spustí sa raz po načítaní súborov (tiež po Súbore Po spustení). {{ui:Načítať teraz}} urobí to isté na požiadanie; {{ui:Vymazať}} zabudne priečinok.

V prehliadači si stránka nemôže uchovať priečinok, takže priečinok podpory neexistuje: použite Súbor Po spustení vyššie. Skompilované súbory `.fas` a `.vlx` a natívne programy zostávajú odmietnuté.

## Opätovné načítanie súboru z histórie

{{ui:História}} vypisuje súbory, ktoré ste načítali v tomto prehliadači, od najnovšieho. Kliknite pri jednom na {{ui:Načítať}}, aby sa načítal znova bez hľadania na vašom počítači.

## Súbory, ktoré CadCraft nemôže načítať

| Súbor | Čo to je | Čo robiť |
|---|---|---|
| `.fas`, `.vlx` | skompilovaný alebo chránený LISP | načítajte zdrojový súbor `.lsp` |
| `.arx`, `.crx`, `.dbx` | natívne programy pre Windows | tieto súbory nie je v CadCraft možné spustiť |
| `.dvb` | projekt VBA | tieto súbory nie je v CadCraft možné spustiť |
| `.craft`, `.lua`, `.py` | skripty CraftScript | otvorte ich v pracovnom priestore Script v PartCraft |

Dialóg Načítať aplikácie pri výbere povie, ktorým z týchto typov súbor je.

## Zastavenie rutiny

Stlačte {{key:Esc}}. Pri jednej z výziev rutiny Esc ju zruší tak, ako to rutina očakáva (spustí sa jej vlastné upratovanie). Ak je zaneprázdnená a nič sa nepýta, Esc ju okamžite zastaví a o tom informuje; vaše načítané rutiny zostanú načítané.

:::note
Všetko, čo rutina v výkrese zmení, je jeden krok: jedno {{key:Mod+Z}} to všetko vráti späť.
:::

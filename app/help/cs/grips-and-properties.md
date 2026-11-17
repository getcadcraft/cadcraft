---
title: Úprava pomocí úchytů a vlastností
summary: Protahujte, přesouvejte a měňte velikost objektů pomocí jejich úchytů a zadávejte přesné délky, poloměry, úhly a souřadnice v panelu Vlastnosti.
keywords: úchyty, vlastnosti, protažení, délka, poloměr, souřadnice, úprava, rychlé vlastnosti, paleta vlastností, změna, vrstva, barva
from: f22541ba
---

## Co se naučíte

Dva rychlé způsoby, jak změnit objekt bez příkazu: přetáhnout jeho **úchyty**, nebo zadat nové hodnoty do panelu **Vlastnosti** vpravo.

## Úchyty

Když vyberete objekty (až 200 najednou) bez běžícího příkazu, objeví se na nich malé čtverečky. Jsou to úchyty:

| Objekt | Úchyty |
|---|---|
| Úsečka | Oba konce a střed (přesune celou úsečku) |
| Kružnice | Střed (přesune ji) a čtyři body na kružnici (změní poloměr) |
| Oblouk | Střed a oba konce (změní, kde začíná a končí) |
| Mnohočára | Každý vrchol |
| Text, bod, odkaz na blok | Vkládací bod |
| Elipsa | Střed |
| Kóta | Její určující body a poloha kótovací čáry |
| Výřez | Střed (přesune ho) a čtyři rohy (změní velikost) |

### Přesunutí úchytu

1. Nakreslete úsečku a klikněte na ni. Objeví se tři úchyty.
2. Klikněte na úchyt na jednom konci. Stavový řádek ukáže: "Klikněte, kam má úchyt jít (Esc zruší). Platí přichytávání a ortogonální režim."
3. Pohybujte kurzorem. Náhled se pohybuje s ním.
4. Klikněte na novou polohu, nebo se přichyťte k bodu jiného objektu a klikněte.

Konec se přesune a zbytek úsečky zůstane na místě. Můžete také stisknout úchyt, přetáhnout ho a pustit tam, kam má patřit.

:::note
Pro úchyt nelze napsat souřadnici. Pro přesnou polohu se přichyťte k bodu, nebo hodnotu zadejte do Vlastností.
:::

Úchyt přesouvaný pohybem zrušíte klávesou {{key:Esc}} nebo pravým tlačítkem.

## Vlastnosti

Pravý panel ukazuje vlastnosti vybraného objektu.

1. Klikněte na úsečku. Nadpis panelu ukazuje "Úsečka".
2. Klikněte do pole {{ui:Délka}}, napište `2500` a stiskněte {{key:Enter}}.

Úsečka má teď přesně délku 2500 a zachovala počáteční bod i úhel. {{key:Enter}} nebo kliknutí jinam hodnotu použije; {{key:Esc}} vrátí původní hodnotu. Každá změna je jeden krok zpět, i když se změní mnoho objektů najednou.

Pole přijímají výrazy (`=2*45`) i délky s jednotkami (`3'6"`, `900mm`), každý bod má X, Y a Z a více objektů se dá změnit najednou. Vše je popsáno v [Panelu Vlastnosti](topic:properties-panel).

## Časté chyby

- **Úchyty se nezobrazí.** Běží příkaz (stiskněte {{key:Esc}}), nebo je vybráno víc než 200 objektů, nebo je objekt na zamknuté vrstvě.
- **Úchyt skončil na špatném místě.** Přichytil ho některý z přichytávání. Při kliknutí podržte {{key:Shift}}, aby se přichytávání ignorovalo.
- **Zápis do Vlastností nic neudělal.** Stiskněte {{key:Enter}} nebo klikněte jinam, aby se hodnota použila. Nepřijatý zápis (nulová nebo záporná délka a poloměr, text, který není hodnota) obarví pole červeně a řekne, proč.
- **Napsaná písmena se objevila v poli Vlastností.** Dokud pole má kurzor, klávesy píšou do něj. Stiskněte {{key:Enter}} nebo {{key:Esc}} a pak napište příkaz.

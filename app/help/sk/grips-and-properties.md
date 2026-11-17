---
title: Úprava pomocou úchytov a panela Vlastnosti
summary: Natiahnite, presuňte a zmeňte veľkosť objektov pomocou ich úchytov a zadajte presné dĺžky, polomery, uhly a súradnice na paneli Vlastnosti.
keywords: úchyty, vlastnosti, natiahnuť, dĺžka, polomer, súradnice, upraviť, rýchle vlastnosti, paleta vlastností, zmeniť, hladina, farba, color
from: f22541ba
---

## Čo sa naučíte

Dva rýchle spôsoby, ako zmeniť objekt bez príkazu: potiahnuť jeho **úchyty**, alebo zadať nové hodnoty na paneli **Vlastnosti** vpravo.

## Úchyty

Keď vyberiete objekty (naraz až 200) bez spusteného príkazu, na nich sa zobrazia malé štvorčeky. Sú to úchyty:

| Objekt | Úchyty |
|---|---|
| Úsečka | Oba konce a stred (presunie celú úsečku) |
| Kružnica | Stred (presunie ju) a štyri body na kružnici (zmenia polomer) |
| Oblúk | Stred a oba konce (zmenia, kde začína a končí) |
| Lomená čiara | Každý vrchol |
| Text, bod, odkaz na blok | Vkladací bod |
| Elipsa | Stred |
| Kóta | Jej definičné body a poloha kótovacej čiary |
| Výrez | Stred (presunie ho) a štyri rohy (zmenia jeho veľkosť) |

### Presunutie úchytu

1. Nakreslite úsečku a kliknite na ňu. Zobrazia sa tri úchyty.
2. Kliknite na úchyt na jednom konci. Stavový riadok hovorí: "Kliknite, kam má úchyt smerovať (Esc na zrušenie). Platí prichytávanie a Ortho."
3. Pohybujte krížovým kurzorom. Zobrazí sa náhľad.
4. Kliknite na novú polohu, alebo sa prichyťte k bodu na inom objekte a kliknite.

Koniec sa presunie a zvyšok úsečky zostane na mieste. Úchyt môžete aj stlačiť a potiahnuť, potom ho pustiť tam, kde má byť.

:::note
Súradnicu úchytu nemôžete zadať. Pre presnú polohu sa prichyťte k bodu alebo zadajte hodnotu na paneli Vlastnosti.
:::

Presun úchytu zrušíte stlačením {{key:Esc}} alebo kliknutím pravým tlačidlom.

## Vlastnosti

Pravý panel zobrazuje vlastnosti vybraného objektu.

1. Kliknite na úsečku. Nadpis panela hovorí "Úsečka".
2. Kliknite do poľa {{ui:Dĺžka}}, zadajte `2500` a stlačte {{key:Enter}}.

Úsečka má teraz presne dĺžku 2500 a zachováva svoj počiatočný bod a uhol. {{key:Enter}} alebo kliknutie inde hodnotu použije; {{key:Esc}} vráti pôvodnú hodnotu. Každá zmena je jeden krok späť, aj keď sa naraz mení viac objektov.

Polia prijímajú výrazy (`=2*45`) a dĺžky s jednotkami (`3'6"`, `900mm`), každý bod má X, Y a Z a viac objektov je možné zmeniť naraz. Všetko je popísané v [paneli Vlastnosti](topic:properties-panel).

## Časté chyby

- **Úchyty sa nezobrazia.** Beží príkaz (stlačte {{key:Esc}}), alebo je vybratých viac ako 200 objektov, alebo je objekt na uzamknutej hladine.
- **Úchyt sa dostal na nesprávne miesto.** Zachytil ho prichytávací bod. Pri kliknutí podržte {{key:Shift}}, aby sa prichytávanie ignorovalo.
- **Zadanie na paneli Vlastnosti nič neurobilo.** Stlačte {{key:Enter}} alebo kliknite inde, aby sa hodnota použila. Nepovolený zápis (nulová alebo záporná dĺžka či polomer, text, ktorý nie je hodnota) označí pole červenou farbou a vysvetlí dôvod.
- **Písmená sa zapísali do poľa na paneli Vlastnosti.** Kým má pole kurzor, klávesy sa zapisujú do neho. Stlačte {{key:Enter}} alebo {{key:Esc}} a potom zadajte príkaz.

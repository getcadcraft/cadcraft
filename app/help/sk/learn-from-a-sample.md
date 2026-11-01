---
title: Učenie z ukážkového výkresu
summary: Otvorte ukážkový dom alebo ukážku skutočného stavu v CadCraft a prejdite si jeho listy, popisové pole, kóty a hladiny.
keywords: ukážka, ukážky, ukážkový výkres, učenie, návod, postup, popisové pole, listy, skutočný stav, architektonická súprava, otvoriť ukážku
from: aa1f960a
---

## Čo sa naučíte

Ako je postavená hotová súprava: priestor modelu, listy s výrezmi v mierke, popisové pole s atribútmi, kóty v stopách a palcoch aj v milimetroch, hladiny. Ukážky sú vlastné ukážky CadCraft a môžete ich použiť na čokoľvek (CC0).

## Otvorenie ukážky

1. V ľavom paneli pod {{ui:Výkres}} kliknite na {{ui:Otvoriť ukážku}} (alebo napíšte {{cmd:SAMPLES}}; v štýloch s pásom kariet je v ponuke {{ui:Súbor}}).
2. Kliknite na {{ui:Otvoriť}} vedľa položky {{ui:Ukážkový dom}}. Otvorí sa na vlastnej karte, takže vaša práca zostane otvorená.

## Prehliadka modelu

1. Kliknite na {{ui:Rozsah}} (alebo napíšte `ZOOM` a potom `E`): pôdorys, čelný pohľad, rez a detail múru.
2. V {{ui:Hladiny}} kliknite na oko vedľa `A-ANNO-DIMS`, čím kóty skryjete, a ďalším kliknutím ich znova zobrazíte.
3. Kliknite na dvere: Vlastnosti zobrazia odkaz na blok `DOOR-32`. Dvere a okná sú bloky, vložené otočené a zrkadlené.

## Listy

1. Pod výkresom kliknite na {{ui:A-101 FLOOR PLAN}}: list ARCH D s jedným výrezom v mierke 1/4" = 1'-0".
2. Dvojitým kliknutím vnútri výrezu pracujete cez neho na modeli; dvojitým kliknutím mimo neho sa vrátite.
3. {{ui:A-501 DETAILS}} zobrazuje detail múru v mierke 1 1/2" = 1'-0": ten istý model, iná mierka.

## Popisové pole

1. Na ľubovoľnom liste dvakrát kliknite na popisové pole: {{ui:Upraviť atribúty}} uvádza PROJECT, TITLE, SCALE, DATE, DRAWN a SHEET.
2. Zmeňte DRAWN na svoje iniciály a kliknite na {{ui:OK}}.
3. Ak chcete zmeniť samotné popisové pole na všetkých listoch, vyberte ho a zvoľte {{ui:Bloky}} › {{ui:Viac}} › {{ui:Upraviť na mieste}}. Pozrite [Atribúty](topic:attributes).

## Skutočný stav

Rovnakým spôsobom otvorte {{ui:Ukážka skutočného stavu}}. Sivé bodky na `SCAN-SLICE` sú rez skenom; múry na `AB-WALL` boli nad nimi obkreslené. Východný múr je o 35 mm mimo pravého uhla: kóty to uvádzajú dvakrát, v milimetroch (`AB-DIMS-MM`) aj v stopách a palcoch (`AB-DIMS-FTIN`, rovnaké dĺžky cez mierku merania). Červené oblaky na `REV-1` označujú, čo zistilo zameranie.

## Ďalej

- [Zmena veľkosti textu kóty](topic:change-dimension-text-size)
- [Vykreslenie do PDF](topic:plot-pdf): vykreslite {{ui:A-101 FLOOR PLAN}}.

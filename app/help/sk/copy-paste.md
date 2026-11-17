---
title: Kopírovanie, prilepenie a duplikovanie
summary: Kopírujte objekty do schránky CadCraft, prilepte ich tam, kam kliknete, alebo na rovnaké miesto, duplikujte ich ukazovateľom a prenášajte prácu z iného výkresu alebo karty.
keywords: kopírovať, vystrihnúť, prilepiť, prilepiť na rovnaké miesto, duplikovať, schránka, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, medzi výkresmi, iná karta, základný bod
from: 4b9f29d3
---

## Čo sa naučíte

Ako kopírovať objekty do schránky a prilepiť ich tam, kam kliknete, prilepiť ich na ich vlastné súradnice, duplikovať ich ukazovateľom, vystrihnúť ich a preniesť do iného výkresu. Všetko, čo je tu, je aj v skupine {{ui:Upraviť}} na paneli nástrojov: {{ui:Kopírovať}}, {{ui:Prilepiť}} a ponuka {{ui:Viac}}.

## Kopírovanie a prilepenie na miesto kliknutia

1. Vyberte objekty: kliknite na ne, alebo ťahajte okno.
2. Stlačte {{key:Mod+C}} alebo kliknite na {{ui:Kopírovať}} v skupine {{ui:Upraviť}}. Príkazový riadok uvedie, koľko objektov bolo skopírovaných. Zostanú vybrané.
3. Stlačte {{key:Mod+V}} alebo kliknite na {{ui:Prilepiť}}. Kópia sa objaví pri kurzore, zavesená na ľavom dolnom rohu skopírovaných objektov.
4. Kliknite, kam má tento roh ísť, alebo napíšte bod, napríklad `2000,500`, a stlačte {{key:Enter}}. Uchopenie objektov a {{ui:Ortho}} fungujú ako obvykle.

Prilepené objekty sú vybrané, takže ich môžete hneď presunúť alebo zmeniť. Jedno {{key:Mod+Z}} vráti celé prilepenie späť.

:::tip
Chcete, aby kópia visela od bodu, ktorý si zvolíte, napríklad rohu steny? Napíšte `COPYBASE`, kliknite na základný bod, vyberte objekty a stlačte {{key:Enter}}. Prilepenie potom umiestni tento bod tam, kam kliknete. Ak chcete, aby každá kópia visela od svojho stredu namiesto ľavého dolného rohu, zmeňte {{ui:Bod vloženia}} v [nastaveniach CadCraft](topic:settings).
:::

## Prilepenie na rovnaké miesto

Stlačte {{key:Mod+Shift+V}} alebo zvoľte {{ui:Prilepiť na rovnaké miesto}} v ponuke {{ui:Viac}}. Kópia sa vloží presne na súradnice, z ktorých bola skopírovaná, bez kliknutia. Použite to na prenos objektov do iného výkresu na to isté miesto alebo z listu do iného listu.

## Duplikovanie a presun

1. Vyberte objekty.
2. Stlačte {{key:Mod+D}} alebo zvoľte {{ui:Duplikovať a presunúť}} v ponuke {{ui:Viac}}.
3. Kópia leží na originále a pohybuje sa s ukazovateľom. Kliknite, kam má ísť. Môžete tiež napísať posun, napríklad `@0,-600`, alebo vzdialenosť smerom ku kurzoru.

{{key:Esc}} pred kliknutím nič nezanechá. Duplikát je jeden krok späť a nedotkne sa schránky.

## Vystrihnutie

Stlačte {{key:Mod+X}} alebo zvoľte {{ui:Vystrihnúť}} v ponuke {{ui:Viac}}. Objekty sa dajú do schránky a zmažú sa z výkresu v jednom kroku späť. Vrátite ich prilepením pomocou {{key:Mod+V}} alebo {{key:Mod+Shift+V}}.

## Medzi výkresmi a kartami

Schránka si zachová kópiu, keď otvoríte iný výkres, a zdieľa ju každá karta CadCraft v tomto prehliadači. Skopírujte na jednej karte a potom stlačte {{key:Mod+V}} na inej.

- Bloky, ktoré objekty používajú, prídu s nimi. Ak výkres, do ktorého prilepujete, už má blok s rovnakým názvom, použije sa jeho vlastná definícia, ako to robí AutoCAD.
- Hladiny, ktoré objekty používajú, sa pridajú aj s farbou a nastaveniami, ktoré mali.
- Kópia sa nepreškáluje, keď výkresy používajú rôzne jednotky: CadCraft to oznámi a potom môžete použiť {{cmd:SCALE}}.
- Výrezy zostávajú na svojom liste; pri kopírovaní sa vynechajú.

:::note
Schránka je vlastná pre CadCraft. Objekty CadCraft nemôžete prilepiť do iného programu ani prilepiť z iného programu do CadCraft: namiesto toho uložte ako DWG alebo DXF. Veľmi veľká kópia môže byť príliš veľká na zdieľanie medzi kartami; príkazový riadok potom uvedie, že prilepiť ju môže len táto karta.
:::

## Časté chyby

- **{{key:Mod+V}} prilepilo text do príkazového riadka.** Predtým ste tam niečo napísali, takže klávesy pracovali s textom. Stlačte {{key:Esc}}, aby sa vymazal, a potom znova stlačte {{key:Mod+V}}.
- **Nič sa nestalo a stavový riadok žiada dokončiť aktuálny príkaz.** Beží iný príkaz. Najprv stlačte {{key:Esc}}.
- **Prilepenie skončilo ďaleko.** Visí na ľavom dolnom rohu toho, čo ste kopírovali, čo môže byť vzdialený objekt, ktorý ste vybrali omylom. Použite {{ui:Prilepiť na rovnaké miesto}} alebo kopírujte pomocou {{cmd:COPYBASE}}.
- **"Nič nebolo prilepené" s dôvodom.** To, čo iná karta zanechala v schránke, sa nedalo prečítať (bolo poškodené alebo zmenené ručne). Skopírujte objekty znova.

Úplný zoznam klávesov nájdete v [Klávesnica a myš](topic:keyboard) a každú výzvu v [Prehľade príkazov](topic:commands#clipboard).

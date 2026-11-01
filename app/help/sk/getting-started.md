---
title: Začíname s CadCraft
summary: Čo robí kresliaca aplikácia CadCraft, kde beží a váš prvý výkres od prázdnej obrazovky po uložený súbor.
keywords: začiatok, prvý výkres, nový, otvoriť, uložiť, uložiť ako, začať, návod, úvod, rýchly štart
from: 1a56c575
---

CadCraft je 2D kresliaca aplikácia. Kreslíte a upravujete úsečky, oblúky, lomené čiary, text, kóty a bloky, pripravujete listy s popisovými poľami a výrezmi a vykresľujete ich do PDF. Otvára výkresy DWG a DXF a ukladá ich ako DWG alebo DXF.

Beží vo vašom webovom prehliadači. Nič sa neinštaluje: stránka vám dá adresu a celá aplikácia sa načíta na stránku. Vaše výkresy sa otvárajú z vášho počítača a ukladajú sa naň späť. **Nič sa nenahráva.**

Ak ste už kreslili, prečítajte si po tejto stránke [Ak prichádzate z iného kresliaceho softvéru](topic:coming-from). Väčšina zvykov sa prenáša a niekoľko málo, ktoré nie, je tam vymenovaných.

## Radšej s vedením?

Napíšte `TOUR` (alebo kliknite na {{ui:Absolvovať prehliadku}} na úvodnej karte, alebo {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Absolvovať prehliadku znova}}). Šesť krátkych krokov v okienku nad výkresom: nakreslíte úsečku a kružnicu, presuniete ju, orežete ju, niečo zmažete a okótujete ju. Každý krok skončí, keď ho urobíte, a môžete preskočiť jeden krok alebo celú prehliadku. Sama sa spustí iba prvýkrát. [Zjednodušená príručka](topic:cheat-sheet) obsahuje 40 príkazov, ktoré použijete najčastejšie, a [mapa príkazov](topic:command-map) všetky existujúce príkazy.

## Čo potrebujete

- Aktuálny Chrome, Edge, Firefox alebo Safari na počítači s macOS, Windows alebo Linuxom. Pozrite [Prehliadače a platformy](common:browsers).
- Najpohodlnejšia je myš s kolieskom. Funguje aj touchpad; pozrite [Myš, touchpad a dotyk](topic:mouse-trackpad-touch).
- Klávesnicu. CadCraft sa ovláda písanými príkazmi, ako väčšina kresliacich programov.

## Myšlienka v jednom odseku

Napíšete príkaz (alebo kliknete na jeho tlačidlo) a príkazový riadok dole sa vás pýta po jednej otázke: „Zadajte prvý bod“, „Zadajte ďalší bod“. Na každú otázku odpoviete kliknutím vo výkrese alebo zadaním hodnoty a stlačením klávesu {{key:Enter}}. Kláves {{key:Esc}} príkaz zruší. To je celý model ovládania; všetko ostatné sú detaily.

## Váš prvý výkres

Nakreslíte z úsečiek obdĺžnik 4000 krát 3000, doprostred vložíte kružnicu a súbor uložíte.

1. Otvorte CadCraft. Príkazový riadok dole zobrazuje `Príkaz:` a kresliaca plocha zobrazuje malú kartu „Začnite kresliť“.
2. Napíšte `L` a stlačte {{key:Enter}}. Na príkazový riadok nemusíte najprv klikať: čokoľvek napíšete, skončí tam.
3. Výzva sa zmení na `Zadajte prvý bod:`. Napíšte `0,0` a stlačte {{key:Enter}}.
4. Napíšte `@4000,0` a stlačte {{key:Enter}}. Objaví sa úsečka vedúca doprava. `@` znamená „od posledného bodu“.
5. Napíšte `@0,3000` a stlačte {{key:Enter}}.
6. Napíšte `@-4000,0` a stlačte {{key:Enter}}.
7. Napíšte `C` a stlačte {{key:Enter}}. `C` je voľba Close (uzavrieť): posledná úsečka sa vráti do prvého bodu a príkaz sa skončí.
8. V skupine Zobrazenie na paneli nástrojov kliknite na {{ui:Rozsah}}. Obdĺžnik vyplní obrazovku.

Teraz by ste mali vidieť štyri úsečky tvoriace obdĺžnik a história nad príkazovým riadkom uvádza, čo ste napísali.

9. Napíšte `C` a stlačte {{key:Enter}}, čím spustíte príkaz pre kružnicu.
10. Napíšte `2000,1500` a stlačte {{key:Enter}} pre stred.
11. Napíšte `500` a stlačte {{key:Enter}} pre polomer.

V strede obdĺžnika sa objaví kružnica.

12. Stlačte {{key:Mod+S}} alebo kliknite na {{ui:Uložiť}} v skupine Súbor.

Prehliadač stiahne `Drawing1.dwg` do vášho obvyklého priečinka na stiahnuté súbory a história uvedie, že kópia bola uložená ako DWG. Tento súbor sa dá znova otvoriť v CadCraft aj vo väčšine ostatných CAD programov. (Ak ste v tomto prehliadači predtým v {{ui:Uložiť ako}} zvolili DXF, nový výkres sa uloží namiesto toho ako `Drawing1.dxf`.)

:::tip
Stlačením klávesu {{key:Enter}} na prázdnom príkazovom riadku zopakujete posledný príkaz. Ak chcete, stlačte namiesto klávesu {{key:Enter}} kláves {{key:Space}}: mimo textu robí to isté.
:::

## Otvorenie existujúceho výkresu

1. Stlačte {{key:Mod+O}} alebo kliknite na {{ui:Otvoriť}}.
2. V dialógovom okne výberu súboru vyberte súbor `.dwg` alebo `.dxf`.

Súbor DWG alebo DXF môžete aj presunúť z {{pick:mac=Finderu|windows=Prieskumníka|linux=vášho správcu súborov}} a pustiť na kresliacu plochu. Súbor sa číta na stránke; váš počítač nikdy neopustí.

To, čo sa zachová a čo sa prevedie, nájdete v [Súbory: čo sa otvára a čo sa ukladá](topic:files).

## Ukladanie: čo môžete očakávať

Ukladanie v prehliadači funguje inak než v programe pre počítač:

- {{ui:Uložiť}} **vždy stiahne novú kópiu**. Neprepíše súbor, ktorý ste otvorili. Ak sa súbor s rovnakým názvom už nachádza v priečinku na stiahnuté súbory, prehliadač zvyčajne pridá číslo, napríklad `Drawing1 (1).dwg`.
- {{ui:Uložiť}} používa formát výkresu: DWG, ak ste otvorili DWG, DXF, ak ste otvorili DXF. Ak chcete formát zvoliť, stlačte {{key:Mod+Shift+S}} alebo kliknite na {{ui:Uložiť ako}} a potom vyberte {{ui:DWG}} (a jeho verziu), {{ui:DXF R12}} alebo {{ui:DXF 2000}}. Pozrite [Ukladanie](topic:files#saving).
- Súbor, ktorý ste otvorili, sa nikdy nezmení.
- Ak otvoríte iný súbor alebo {{ui:Nový}}, otvorí sa na vlastnej karte nad výkresom, takže sa nič z toho, čo máte otvorené, nezatvorí. Ak zatvoríte kartu výkresu alebo opustíte stránku s neuloženými zmenami, CadCraft sa najprv opýta: {{ui:Najprv uložiť kópiu}}, zahodiť alebo {{ui:Zrušiť}}. Ak zatvoríte kartu prehliadača, zobrazí sa namiesto toho vlastná otázka prehliadača „Opustiť stránku?“.

Ukladanie do cloudu zatiaľ nie je k dispozícii. Kam vaše súbory idú a prečo zostávajú súkromné, vysvetľuje [Vaše súbory a súkromie](common:your-files).

## Kam ďalej

Stlačením klávesu {{key:F1}} alebo kliknutím na {{ui:Pomocník}} na lište úplne hore otvoríte tohto pomocníka kedykoľvek vedľa výkresu. Funguje bez pripojenia.

- [Obrazovka CadCraft](topic:workspace) pomenúva každú lištu a panel.
- [Kreslenie so súradnicami](topic:draw-with-coordinates) je najlepší prvý postup.
- [Klávesnica a myš](topic:keyboard) uvádza každý kláves.
- Napíšte `HELP` na príkazový riadok pre zoznam všetkých príkazov alebo si prečítajte [Referenciu príkazov](topic:commands).

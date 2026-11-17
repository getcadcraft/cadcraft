---
title: Vykresliť do PDF
summary: Vytvorte PDF listu v plnej veľkosti alebo modelu v mierke či prispôsobeného papieru, vytlačte ho z prehliadača alebo zo Studia, alebo ho uložte ako PNG či SVG.
keywords: vykresliť, tlačiť, tlačiareň, kópie, png, svg, obrázok, pdf, publikovať, exportpdf, papier, mierka, monochromatický, odtiene šedej, čiernobiely, hrúbka čiary, pero, nastavenie strany, okno vykreslenia, štýl vykresľovania, tabuľka štýlov vykresľovania, ctb, závislé od farby, tieňovanie, plotstyles, stylesmanager
from: a4752f83
---

## Čo vytvoríte

PDF listu v plnej veľkosti, potom rýchle PDF modelu v mierke 1:100 a jeden výtlačok.

PDF sa vytvára vo vašom prehliadači; nič sa nenahráva. Je to vektorové PDF: čiary zostávajú ostré pri každom zväčšení a text sa dá vyhľadávať.

## Vykreslenie listu

1. Kliknite na kartu listu pod výkresom.
2. Stlačte {{key:Mod+P}}, kliknite na {{ui:Vykresliť}} alebo napíšte `PLOT` a stlačte {{key:Enter}}.

Otvorí sa dialóg {{ui:Vykresliť do PDF}}. Uvádza, ktorý list vykresľuje a na akom papieri, „v plnej veľkosti … tak, ako ho vidíte“. Náhľad vpravo zobrazuje list.

3. V {{ui:Štýl vykresľovania}} vyberte {{ui:Monochromaticky (čierna)}} pre čierne čiary, {{ui:Farebne (ako nakreslené)}} na zachovanie farieb, {{ui:Odtiene šedej}} alebo vlastnú tabuľku (pozri [Tabuľky štýlov vykresľovania](topic:plot-pdf#plot-style-tables)). List si túto voľbu zachová: uloží sa spolu s výkresom.
4. V {{ui:Hrúbka čiary}} vyberte šírku pera od 0.13 mm do 0.70 mm. Čiary so štandardnou hrúbkou sa vytlačia touto šírkou; čiary s vlastnou hrúbkou (vrstvy alebo objektu, alebo pero ich farby v tabuľke) sa vytlačia touto hrúbkou.
5. Kliknite na {{ui:Stiahnuť PDF}}.

Prehliadač stiahne PDF pomenované podľa výkresu a listu, napríklad `Drawing1-A-101 Plan.pdf`. História uvádza jeho veľkosť v bajtoch a veľkosť papiera v milimetroch.

List sa vždy vykresľuje v mierke 1:1 na vlastnom papieri. Ak chcete zmeniť papier, zmeňte ho na samotnom liste (pozri [Nastavenie listu](topic:sheets-and-viewports)). Hladiny nastavené na nevykresľovanie sa vynechajú, rovnako ako rámčeky výrezov.

## Všetky listy v jednom PDF

Ak máte dva alebo viac listov, dialóg {{ui:Vykresliť do PDF}} má možnosť {{ui:Všetky listy v jednom PDF}}; alebo napíšte {{cmd:PUBLISH}}. {{key:Enter}} zahrnie všetky listy; Niektoré (S) požiada o ich názvy oddelené čiarkami. Stiahne sa jedno PDF so stranou pre každý list v poradí kariet, každá v jej veľkosti papiera, a so záložkou pre každý list s jeho názvom. Každý list sa vykresľuje so svojou tabuľkou štýlov vykresľovania; pre list, pri ktorom nie je zvolená žiadna tabuľka, sa použije tabuľka, ktorú ste naposledy zvolili v dialógu, a šírka pera, ktorú ste naposledy zvolili.

## Vykreslenie modelu

1. Kliknite na kartu {{ui:Model}}.
2. Stlačte {{key:Mod+P}}.

Dialóg uvádza, že vykresľuje model na list papiera, a zobrazuje ďalšie nastavenia:

3. V {{ui:Plocha}} vyberte, čo sa má vykresliť:
   - {{ui:Všetko (rozsah)}}: celý výkres.
   - {{ui:To, čo je na obrazovke}}: oblasť výkresu, ktorú práve vidíte.
   - {{ui:Okno…}}: potom kliknite na {{ui:Vybrať}}, kliknite na dva rohy na výkrese a dialóg sa vráti.
4. V {{ui:Papier}} vyberte veľkosť: ISO A4 až A0, Letter, Legal, Tabloid a ANSI C a D, alebo ARCH C, D a E.
5. V {{ui:Orientácia}} vyberte {{ui:Na šírku}} alebo {{ui:Na výšku}}.
6. V {{ui:Mierka (S)}} vyberte {{ui:Prispôsobiť papieru}} alebo mierku, napríklad `1:100`.

Pod nastaveniami riadok uvádza mierku a aká veľká bude oblasť na papieri. Ak je väčšia ako papier, upozorní na to: okraje sa odrežú. Vyberte menšiu mierku, väčší papier alebo {{ui:Prispôsobiť papieru}}.

7. Kliknite na {{ui:Stiahnuť PDF}}.

Vykreslenie modelu ponechá okolo okraja 5 mm, pretože väčšina tlačiarní nevytlačí až po okraj. {{ui:Prispôsobiť papieru}} dáva nepravidelnú mierku (história a informačný riadok uvádzajú "(prispôsobené)"); ak má výkres byť merateľný v skutočnej veľkosti, zvoľte štandardnú mierku.

:::note
Mierky sa počítajú v skutočných jednotkách. Aby 1:100 bolo správne, nastavte {{ui:Jednotky}} v {{ui:Aktuálne nastavenia}} na to, čomu zodpovedá jedna jednotka výkresu. Výkres bez jednotiek sa považuje za milimetre.
:::

## Tabuľky štýlov vykresľovania

Tabuľka štýlov vykresľovania určuje, ako sa každá zo 255 štandardných farieb výkresu vytlačí, rovnako ako tabuľka štýlov závislá od farby (CTB) v iných CAD programoch. Sú vstavané tri:

| {{ui:Tabuľka}} | Vytlačí sa |
|---|---|
| {{ui:Farebne (ako nakreslené)}} | Každý objekt vo vlastnej farbe. |
| {{ui:Monochromaticky (čierna)}} | Každá farba čierna: obvyklá voľba pre výkresy. |
| {{ui:Odtiene šedej}} | Každá farba ako jej odtieň šedej, takže farby zostanú odlíšiteľné na čiernobielej tlačiarni. |

Vlastnú tabuľku vytvoríte napríklad tak, že červené čiary budú hrubé a čierne a všetko ostatné tenké:

1. V dialógu {{ui:Vykresliť do PDF}} kliknite na {{ui:Upraviť tabuľky…}} (alebo napíšte {{cmd:PLOTSTYLES}}).
2. Kliknite na {{ui:Nová}} a do {{ui:Názov}} napíšte názov, napríklad `office`. Ak chcete začať od vstavanej tabuľky, vyberte ju v {{ui:Tabuľka}} a kliknite na {{ui:Kopírovať}}.
3. Kliknite na farbu v mriežke. {{key:Shift}}+kliknutie vyberie rozsah farieb, {{key:Mod}}+kliknutie pridá ešte jednu a {{ui:Vybrať každú farbu}} ich vyberie všetky.
4. Nastavte, ako sa vybrané farby vytlačia:
   - {{ui:Tlačí sa ako}}: {{ui:Vlastná farba}}, {{ui:Čierna}} alebo {{ui:Iná farba…}}.
   - {{ui:Ako šedá}}: farba ako jej odtieň šedej.
   - {{ui:Atrament (%)}}: 100 je plný atrament, 50 je v polovici cesty k bielej (tieňovanie), pre pozadové čiary.
   - {{ui:Hrúbka čiary}}: {{ui:Vlastná hrúbka čiary}} zachová hrúbku objektu alebo vrstvy; hodnota vytlačí každú čiaru tej farby touto šírkou.
   - {{ui:Typ čiary}}: vytlačí každú čiaru tej farby iným typom čiary (napríklad všetko červené čiarkované); {{ui:Použiť typ čiary objektu}} ich ponechá.
   - {{ui:Koniec čiary}} a {{ui:Spojenie čiar}}: tupé, štvorcové alebo zaoblené konce a skosené, zrazené alebo zaoblené rohy (zaoblené, ako predtým, keď nič nenastavíte).
   - {{ui:Štýl výplne}}: plná výplň danej farby sa vytlačí ako čiary šrafovania (vodorovné alebo zvislé pruhy, šikmé čiary, krížové šrafovanie, kosoštvorce, štvorcové bodky) namiesto atramentu, pre tlačiarne a plány, kde je plochý atrament príliš ťažký.

   Samotná tabuľka má ešte dve nastavenia: {{ui:Hrúbky čiar}}, hrúbky, ktoré pozná (vytlačená čiara ide k najbližšej z nich), a {{ui:Mierka typu čiary}}, koeficient pre čiarky každého typu čiary, ktorý nie je ISO.

5. Kliknite na {{ui:Hotovo}}. Tabuľka sa uloží vo výkrese a list (alebo model) sa teraz vykresľuje podľa nej. {{ui:Zrušiť}} zruší zmeny.

Farba s vlastným perom zobrazuje bodku v rohu a bodku dole, keď nastavuje hrúbku čiary. Objekt so skutočnou farbou (nie jednou z 255) používa pero najbližšej štandardnej farby.

Výkres uchováva svoje tabuľky a voľbu každého listu pri uložení ako DWG (2000 až 2018) alebo DXF (R12 alebo 2000) a pri ďalšom otvorení sú opäť k dispozícii. Iné programy vidia názov v nastavení strany každého listu (`office.ctb`), nie samotnú tabuľku. Výkres z iného programu, ktorého nastavenie strany uvádza tabuľku ako `monochrome.ctb`, sa vykreslí vstavanou tabuľkou s týmto názvom; pre iný názov dialóg uvedie, že výkres ju nemá, a vykreslí farby výkresu, kým nevyberiete tabuľku alebo nevytvoríte tabuľku s týmto názvom.

Ak chcete tabuľku použiť v inom výkrese, kliknite na {{ui:Exportovať}} v {{ui:Tabuľky štýlov vykresľovania}} (uloží `office.plotstyle.json`), potom na {{ui:Importovať…}} v inom výkrese. {{ui:Importovať…}} načíta aj súbor `.ctb` z iného programu: číta sa podľa uverejneného popisu formátu a **zatiaľ nebol overený na skutočnom súbore**. Číta sa farba, tieňovanie a hrúbka čiary každej farby; odtiene šedej, čísla pier, typy čiar, konce a spojenia čiar a štýly výplne sa nečítajú a pomenovaná tabuľka (`.stb`) sa odmietne. Porovnajte prvé vykreslenie s tým, čo očakávate, a ak je zlé, pošlite nám súbor.

## Tlač

**V prehliadači** kliknite na {{ui:Tlačiť…}}. CadCraft vytvorí PDF a otvorí pre neho vlastný dialóg tlače prehliadača. Vyberte tam "Skutočná veľkosť" alebo 100 % (nie "Prispôsobiť"), aby sa zachovala mierka. Ak prehliadač nechce tlačiť zo stránky, PDF sa otvorí v novej karte; vytlačte ho odtiaľ pomocou {{key:Mod+P}}.

Kliknutím na {{ui:Otvoriť na tlač}} sa PDF otvorí v novej karte prehliadača a vytlačíte ho odtiaľ.

:::safari
Safari môže zobraziť PDF a čakať, kým použijete **Súbor**, potom **Tlačiť**.
:::

Ak prehliadač blokuje novú kartu, CadCraft namiesto toho PDF stiahne a o tom informuje v histórii. Povoľte vyskakovacie okná pre stránku, aby sa PDF ďalší raz otvorilo na karte.

**V CadCraft Studio** dialóg {{ui:Vykresliť do PDF}} vypíše tlačiarne počítača. Vyberte {{ui:Tlačiareň}}, {{ui:Papier v tlačiarni}} a počet {{ui:Kópie}}, potom kliknite na {{ui:Tlačiť…}}. {{ui:Ako pri vykreslení}} vyberie papier tlačiarne, ktorý má veľkosť listu (A3 pre list A3); ak tlačiareň nemá žiadny, použije vlastný papier a list na ňom prispôsobí. Vo Windows sa list posiela ako obrázok s 300 dpi, pretože Windows nevytlačí PDF bez programu na PDF; na Linuxe a macOS ide samotné PDF do systémovej tlačovej služby. Nič neopúšťa počítač.

## Súbory obrázkov a SVG

{{ui:Stiahnuť PNG}} uloží vykreslený list ako obrázok s 300 dpi (zníži sa len vtedy, keď by bol veľmi veľký list väčší, než dokáže prehliadač vytvoriť; história to uvedie). {{ui:Stiahnuť SVG}} uloží ho ako škálovateľný výkres v milimetroch s čiarami a textom vykreslenia. Obe sa vytvoria z rovnakého vykreslenia ako PDF, s rovnakým štýlom vykreslenia, hrúbkou čiary a oblasťou. Obrázky vložené do výkresu sú iba v PDF; história uvádza, koľko ich bolo vynechaných.

## Obrázky

Obrázky sa tlačia vo vlastnom rozlíšení pod čiarami. {{ui:Obrázky}} v dialógu ich obmedzia na 600, 300 alebo 150 dpi pre menší súbor. Čiary, text a šrafovanie zostávajú vždy ostré (vektorové) a priehľadnosť zostáva priehľadnosťou. Pozri [Obrázky vo výkrese](topic:pictures).

## Nastavenia, ktoré sa pamätajú

Dialóg si v tomto prehliadači pamätá váš posledný papier, orientáciu, mierku a hrúbku čiary. Tabuľka štýlov vykresľovania sa uchováva pri každom liste vo výkrese; list, pri ktorom nie je nič zvolené, začne na tej, ktorú ste zvolili naposledy. Vybrané okno zostane do obnovenia stránky; potom dialóg začína na {{ui:Všetko (rozsah)}}.

## Časté chyby

- **PDF je prázdne alebo tlačidlá sú sivé.** Nie je čo vykresliť (prázdny model), alebo je zvolené {{ui:Okno…}} a ešte nie je vybrané žiadne okno ("Vyberte okno na vykreslenie.").
- **Text v PDF zobrazuje "?".** Text v poľštine, češtine, azbuke, gréčtine a ďalších európskych písmach sa vytlačí tak, ako je: PDF potom nesie písmená, ktoré potrebuje (z písma Liberation Sans, ktoré má šírky Helvetica), a text sa dá stále označiť a vyhľadať. Čínsky, japonský a kórejský text sa tiež vytlačí ako je: ak ho výkres obsahuje, vykreslenie stiahne väčšie písmo (asi 10 MB, raz) a PDF nesie len použité znaky, takže pri prvom použití potrebuje pripojenie (nie v offline kópii uloženej pred tým). Hebrejčina sa tlačí z rovnakého vloženého písma ako latinský text a arabčina, perzština a urdčina spustia stiahnutie ešte jedného písma (menej ako 1 MB, raz); riadky sprava doľava sa zoradia a ich písmená sa spoja (pozri [Text](topic:text)). Vzácne ideogramy mimo týchto písiem a písma vyžadujúce zložité tvarovanie, napríklad hindčina, sa tlačia ako "?" a história ich spočíta.
- **Všetky čiary majú rovnakú hrúbku.** Ich hrúbka je štandardná: dajte vrstvám alebo objektom {{ui:Hrúbka čiary}} v pravom paneli (pozri [Hrúbky čiar a typy čiar](topic:units-papers-scales#line-weights-and-linetypes)), alebo nastavte hrúbky podľa farieb v [tabuľke štýlov vykresľovania](topic:plot-pdf#plot-style-tables).
- **"(nie je v tomto výkrese)" vedľa štýlu vykreslenia.** Výkres pochádza z iného programu a uvádza tabuľku, ktorú neobsahuje. Vyberte jednu z tabuliek alebo vytvorte tabuľku s týmto názvom.
- **Konštrukčné čiary sa vytlačili.** Nastavte ich hladinu na nevykresľovanie: kliknite na jej tlačidlo tlačiarne v paneli {{ui:Hladiny}}.
- **Výtlačok má zlú veľkosť.** Tlačiareň ho zmenšila alebo zväčšila. Tlačte v skutočnej veľkosti.
- **{{key:Mod+P}} otvorilo dialóg tlače prehliadača.** Kurzor bol v poli v pravom paneli alebo bol otvorený iný dialóg. Stlačte {{key:Enter}} alebo {{key:Esc}}, aby ste opustili pole, a skúste znova, alebo kliknite na {{ui:Vykresliť}}.
- **{{key:Mod+P}} nič neurobilo.** Beží príkaz. Najprv stlačte {{key:Esc}}.

---
title: Prechod z iného kresliarskeho softvéru
summary: Ako známe príkazy, klávesy a zvyky zodpovedajú CadCraft a rozdiely, na ktoré narážajú skúsení kresliči.
keywords: prechod, rozdiely, migrácia, zvyky, aliasy, dynamický vstup, pickfirst, pickadd, qsave, saveas, uložiť ako, mtext, ctb, polárne sledovanie, xref, klávesové skratky, známe, copyclip, pasteclip, pasteorig, copybase, schránka
from: b58688e7
---

Ak ste používali AutoCAD alebo program postavený na rovnakom modeli, väčšina toho, čo viete, funguje aj tu: príkazový riadok, aliasy ako `L`, `C`, `TR` a `O`, Enter alebo Space na opakovanie, výber oknom a prekrížením, uchopenie objektov na F3, Ortho na F8, priestor modelu s rozloženiami a výrezmi. Táto stránka uvádza, čo sa priamo mapuje, a potom rozdiely, na ktoré ľudia narážajú. Druhú polovicu čítajte, aj keď prvú len prelistujete.

## Čo sa mapuje priamo

| Zvyk | V CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Rovnaké príkazy, rovnaké aliasy |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Rovnaké |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Rovnaké príkazy kótovania |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` napísané na príkazovom riadku | Rovnaké, pre nové kóty |
| `B` na vytvorenie bloku, `I` na vloženie, `PU` na vyčistenie | Rovnaké (vyčistenie odstráni len nepoužité bloky) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` a potom `E` alebo `W` | Rovnaké |
| Napísanie `_LINE` alebo `-LAYER` zo skriptu alebo zvyku | Úvodné `_`, `-`, `.` alebo `'` sa ignoruje |
| Enter alebo Space na prázdnej výzve zopakuje posledný príkaz | Rovnaké |
| Esc zruší; ďalší Esc zruší výber | Rovnaké |
| `@dx,dy`, `@d<a`, uhly zadané proti smeru hodinových ručičiek od východu | Rovnaké |
| Okno zľava doprava, prekríženie sprava doľava, klik-klik; stlačenie a ťahanie pre laso, Space prepína okno / prekríženie / ohradu (LASSOMODE) | Rovnaké |
| Najprv výber, potom príkaz (podstatné meno-sloveso) | Rovnaké; dokončený príkaz zruší výber |
| `ALL` a `L` pri Select objects | Rovnaké |
| Shift+klik odoberá z výberu | Rovnaké. Nastavenia môžu spôsobiť, že klik nahradí výber, ako to robí PICKADD 0: pozrite [Nastavenia CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Rovnaké príkazy a klávesy; vloženie umiestni kópiu podľa jej ľavého dolného rohu, ako to robí PASTECLIP |
| F3 uchopenie objektov, F7 mriežka, F8 Ortho | Rovnaké klávesy |
| Dvojitý klik na koliesko na zväčšenie na rozsah | Rovnaké |
| Zrkadlený text zostáva čitateľný | Rovnaké (ako pri MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Rovnaké; na Macu funguje aj Command |

[Referencia príkazov](topic:commands) uvádza každý príkaz a alias.

:::tip
Ak máte radi pás nástrojov AutoCAD, vyberte štýl ponuky {{ui:Klasické kreslenie}} v {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Ponuky, klávesy a myš}}: karty Home, Insert, Annotate, Parametric, View, Manage a Output nad rovnakým príkazovým riadkom, stredné tlačidlo posúva a pravé kliknutie je Enter. Pozrite [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).
:::

[Mapa príkazov](topic:command-map) uvádza každý príkaz CadCraft s jeho krátkymi názvami a [prehľadová karta](topic:cheat-sheet) 40 príkazov, ktoré budete používať najviac (aj ako jednostranové PDF).

## Rozdiely, na ktoré ľudia narážajú

### Zadané body sú absolútne

Pri zapnutom dynamickom vstupe iný program berie zadané `100,0` pre druhý bod ako relatívne. **Príkazový riadok CadCraft to nerobí:** tam je `x,y` vždy merané od počiatku. Pri zapnutom {{ui:Dyn}} ({{key:F12}}) použite namiesto toho jeho polia: vzdialenosť, {{key:Tab}}, uhol. Použite `@100,0` pre „100 vpravo od posledného bodu“, alebo posuňte kurzor správnym smerom a napíšte holé `100`.

### Shift preskočí uchopenia; neprepína Ortho

Podržanie Shift pri kliknutí ignoruje uchopenie objektov pre toto kliknutie. Dočasne neprepína Ortho. Použite F8 alebo tlačidlo {{ui:Ortho}}.

### Pravé tlačidlo je vždy Enter

Kontextová ponuka pravým tlačidlom neexistuje. Pravé kliknutie vo výkrese je Enter: ukončí príkaz, dokončí výber alebo zopakuje posledný príkaz. Počas presúvania úchytom alebo výberového rámca namiesto toho zruší. Ťahaním pravým tlačidlom posuniete výkres.

### Žiadne posúvanie medzerníkom

Medzerník je Enter, takže podržanie medzerníka a ťahanie výkres neposúva. Posúvajte stredným alebo pravým tlačidlom, alebo kolieskom oddiaľte a znova priblížte na inom mieste.

### Orezať a predĺžiť

Orezať a predĺžiť sa spúšťajú v rýchlom režime: každý viditeľný objekt je hrana rezu alebo hranica, časť pod ukazovateľom ukazuje, čo zmizne, ťahaná dráha orezáva každú časť, ktorú prekríži, a objekt, ktorý nič neprekríži, sa zmaže. {{key:Shift}} prepína medzi orezaním a predĺžením. `O` prepne na štandardný režim (najprv vyberte hrany), `F` a `C` sú ohrada a prekríženie, `E` je EDGEMODE, `R` maže. Možnosť `P` (Projekt) neexistuje: CadCraft orezáva v rovine výkresu.

### Zaoblenie a skosenie

{{cmd:FILLET}} a {{cmd:CHAMFER}} majú možnosti, ktoré poznáte: Späť (U), Lomená čiara (P), Polomer (R) (alebo Vzdialenosť (D), Uhol (A) a Metóda (E)), Orezať (T) a Viacnásobne (M), a {{key:Shift}}+klik pre ostrý roh. Zaoblenie medzi lomenou čiarou a úsečkou pridá oblúk ako vlastný objekt namiesto spojenia do lomenej čiary, a rohy lomenej čiary vedľa oblúkového segmentu ostanú, ako sú.

### Odsekový a jednoriadkový text

`T`, `MT` a `MTEXT` sú odsekový text písaný priamo na mieste, so šírkou, riadkovaním a zarovnaním; `DT` a `DTEXT` sú jednoriadkový text, ako ho poznáte. Textové štýly ani stĺpce neexistujú a formátovanie v texte (tučné, skladané zlomky) zatiaľ nemôžete písať; formátovanie, ktoré príde zo súboru, sa zachová, vykreslí a uloží (pozrite [Pridanie textu a popisov](topic:text#formatting-inside-paragraph-text-from-other-programs)). Všetko sa kreslí v písme v štýle Helvetica.

### Uložiť znamená „stiahnuť kópiu“

{{key:Mod+S}}, `SAVE` a `QSAVE` stiahnu kópiu vo formáte výkresu: DWG, ktoré ste otvorili, sa uloží ako DWG, DXF ako DXF. V prehliadači sa nič neprepíše na mieste a otvorené súbory sa nikdy nemenia. V CadCraft Studio {{key:Mod+S}} zapíše späť do súboru, ktorý ste otvorili.

`SAVEAS` ({{key:Mod+Shift+S}}) je malé dialógové okno, nie prehliadač súborov: vyberte {{ui:DWG}} (s jeho {{ui:Verzia}}, AutoCAD 2000 až 2018), {{ui:DXF R12}} alebo {{ui:DXF 2000}} a kliknite na {{ui:Uložiť}}. Prehliadač rozhodne, kam stiahnutie pôjde. `DXFOUT` vždy stiahne DXF R12.

DWG, ktoré ste otvorili, sa uloží vo verzii, v akej prišlo; nový výkres sa uloží vo formáte AutoCAD 2000, pokiaľ nevyberiete iný. Listy, kóty a vzory šráfovania sa zachovajú. Pozrite [Súbory: čo sa otvára, čo sa ukladá](topic:files#saving).

### Hladiny: jednoduchšie

- Každá zmena hladiny (zapnutie, zmrazenie, zámok, farba, vykreslenie, typ čiary, hrúbka, aktuálna hladina) je jeden krok späť.
- Vypnutie a zmrazenie majú v CadCraft rovnaký účinok.
- Hladiny, ktoré výkres zmrazí v jednom výreze, ostanú tam zmrazené: na obrazovke, vo vykresleniach a keď ho uložíte ako DWG alebo DXF.
- Výrez, ktorý zobrazuje hladinu vo vlastnej farbe, type čiary, hrúbke alebo priehľadnosti, to ďalej zachováva na obrazovke, vo vykresleniach a v uloženom DWG (DXF zachováva vlastné nastavenia hladiny; uloženie to oznámi). Meniť to pre každý výrez zatiaľ nie je hotové.
- Správca vlastností hladín ani stavy hladín neexistujú; {{cmd:RENAME}}, {{cmd:LAYMRG}} a {{cmd:LAYDEL}} premenujú, zlúčia a zmažú hladiny. Typy čiar a hrúbky sa nastavujú v pravom paneli (pozrite [Hrúbky a typy čiar](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} a {{cmd:LAYMCUR}} pracujú výberom.
- Uloženie do DXF R12 zapíše názvy hladín veľkými písmenami. DWG ich ponechá tak, ako ste ich napísali.

### Štýly kót

`DIMSTYLE` otvorí správcu pomenovaných štýlov (nový, zmeniť, nastaviť aktuálny, porovnať, použiť). `DIMSCALE` a ostatné nastavenia stále menia, čo použijú nové kóty, a každá kóta si zachováva vlastné rozmery, ktoré môžete zmeniť aj v paneli Vlastnosti. Aktuálny štýl sa do súboru neukladá. Kóty nasledujú formát dĺžky výkresu (desatinný alebo stopy a palce s {{cmd:UNITS}}) alebo vlastný {{ui:Formát}}. Pozrite [Nastavenie veľkostí kót](topic:dimension-settings).

### Vykresľovanie je jednoduchšie

Tabuľky štýlov vykresľovania fungujú podľa farby, ako to robia súbory CTB: Monochrome, Colour a Grayscale sú vstavané, môžete si vytvoriť vlastné a každý list si uchová svoju tabuľku. Čítanie súborov CTB je postavené na publikovanom opise a bolo vyskúšané len na súboroch, ktoré sme vytvorili; pomenované tabuľky štýlov vykresľovania (STB) a nastavenia strany zatiaľ nie sú hotové. Čiary sa tlačia svojou hrúbkou, ostatné v jednej šírke pera. Listy sa vykresľujú v mierke 1:1 na vlastnom papieri; model sa vykresľuje v zvolenej alebo prispôsobenej mierke. Pozrite [Vykreslenie do PDF](topic:plot-pdf).

### Práca vo výreze

Ako to poznáte: dvojitým kliknutím vnútri výrezu (alebo napísaním {{cmd:MSPACE}}) pracujete na modeli cez neho a dvojitým kliknutím mimo neho (alebo {{cmd:PSPACE}}) sa vrátite na list. Vnútri posúvanie a zväčšovanie mení, čo výrez zobrazuje, pokiaľ nie je jeho zobrazenie uzamknuté; vtedy posúvajú list. Kliknutie na kartu pod výkresom tiež opustí výrez. Pozrite [Práca na modeli cez výrez](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Sledovanie a dynamický vstup áno, uchopenie na mriežku zatiaľ nie

Mriežka slúži len na pozeranie; body na ňu nepriľnú (režim uchopenia F9 neexistuje). Polárne sledovanie ({{key:F10}}, krok nastavený príkazom {{cmd:POLARANG}}) a sledovanie uchopenia objektov ({{key:F11}}: zastavte na bode uchopenia, aby sa získal) fungujú, ako ich poznáte; pozrite [Uchopenie k objektom](topic:object-snaps#polar-tracking). Dynamický vstup ({{key:F12}}) zobrazuje vzdialenosť a uhol (alebo X a Y) pri kurzore; pozrite [Zadávanie súradníc a vzdialeností](topic:coordinate-entry#dynamic-input).

### Stopy a palce

Vyberte {{ui:Formát dĺžky}} {{ui:Architektonický}} alebo {{ui:Inžiniersky}} (alebo napíšte {{cmd:UNITS}}) a zadávajte dĺžky tak, ako ich poznáte: `12'6"`, `12'6-1/2"`. Pred zlomkom použite spojovník, nie medzeru: {{key:Space}} je {{key:Enter}}. Nastavte aj {{ui:Jednotky}} na {{ui:Palce}}, aby listy a vykreslenia ponúkali architektonické mierky. Formát sa zachová v uložených súboroch DWG a DXF. Pozrite [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopírovanie a vkladanie zostáva v CadCraft

{{key:Mod+C}}, {{key:Mod+X}} a {{key:Mod+V}} kopírujú, vystrihnú a vložia objekty v rámci výkresu, medzi výkresmi a medzi kartami CadCraft v tom istom prehliadači. Schránka je vlastná schránka CadCraft: objekty CadCraft nemožno vložiť do iného programu ani objekty z iného programu do CadCraft. Vloženie z výkresu v iných jednotkách nemení mierku: potom použite {{cmd:SCALE}}. {{key:Mod+D}} je duplikát, ktorý sa pohybuje za ukazovateľom, doplnok CadCraft. Pozrite [Kopírovanie, vkladanie a duplikovanie](topic:copy-paste).

### Klávesy prehliadača, ktoré nemôžete použiť

Webová stránka nemôže prevziať {{key:Mod+N}}, {{key:Mod+W}} alebo {{key:Mod+T}} od prehliadača: otvárajú a zatvárajú okná a karty. Použite tlačidlo {{ui:Nová}} alebo napíšte `NEW`. Pozrite [Klávesy, myši a touchpady](common:keys).

## Príkazy, po ktorých možno siahnete, a ešte tu nie sú

{{cmd:TABLE}} zatiaľ nie je hotový. Keď ho napíšete, zobrazí sa „Neznámy príkaz“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} a {{cmd:XREF}} hotové sú.) [Ešte nie je hotové](topic:not-built-yet) uvádza, čo robiť namiesto toho.

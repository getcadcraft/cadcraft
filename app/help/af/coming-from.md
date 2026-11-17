---
title: Oorskakel vanaf ander tekenprogramme
summary: Hoe bekende opdragte, sleutels en gewoontes na CadCraft oorbeeld word, en die verskille wat ervare tekenaars laat struikel.
keywords: oorskakel, verskille, migreer, gewoontes, aliasse, dinamiese invoer, pickfirst, pickadd, qsave, saveas, stoor as, mtext, ctb, polêr-spoor, xref, sneltoetse, bekend, copyclip, pasteclip, pasteorig, copybase, klembord
from: b58688e7
---

As jy AutoCAD gebruik het, of 'n program wat op dieselfde model gebou is, werk die meeste van wat jy weet hier: die opdragreël, aliasse soos `L`, `C`, `TR` en `O`, Enter of Space om te herhaal, venster- en kruiskeuse, voorwerpvaspunte op F3, Ortho op F8, modelruimte met uitlegte en viewports. Hierdie bladsy lys wat direk ooreenstem, en dan die verskille wat mense laat val. Lees die tweede helfte selfs as jy die eerste blaai.

## Wat direk ooreenstem

| Gewoonte | In CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Dieselfde opdragte, dieselfde aliasse |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Dieselfde |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Dieselfde maat-opdragte |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` getik op die opdragreël | Dieselfde, vir nuwe mate |
| `B` om 'n blok te maak, `I` om in te voeg, `PU` om te suiwer | Dieselfde (suiwer verwyder net ongebruikte blokke) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` dan `E` of `W` | Dieselfde |
| Tik `_LINE` of `-LAYER` uit 'n skrip of 'n gewoonte | Die voorste `_`, `-`, `.` of `'` word geignoreer |
| Enter of Space op 'n leë vraag herhaal die laaste opdrag | Dieselfde |
| Esc kanselleer; Esc weer maak die keuse leeg | Dieselfde |
| `@dx,dy`, `@d<a`, getikte hoeke linksom vanaf oos | Dieselfde |
| Venster links na regs, kruising regs na links, klik-klik; druk en sleep vir 'n lasso, Space wissel tussen venster / kruising / heining (LASSOMODE) | Dieselfde |
| Kies eerste, dan die opdrag (naamwoord-werkwoord) | Dieselfde; 'n voltooide opdrag maak die keuse leeg |
| `ALL` en `L` by Select objects | Dieselfde |
| Shift+klik verwyder uit die keuse | Dieselfde. Instellings kan 'n klik die keuse laat vervang in plaas daarvan, soos PICKADD 0 doen: sien [CadCraft-instellings](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Dieselfde opdragte en sleutels; plak plaas die kopie volgens sy onderste linkerhoek, soos PASTECLIP doen |
| F3 voorwerpvaspunt, F7 rooster, F8 Ortho | Dieselfde sleutels |
| Dubbelklik die wiel om na omvang te zoem | Dieselfde |
| Gespieëlde teks bly leesbaar | Dieselfde (soos met MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Dieselfde; op 'n Mac werk Command ook |

Die [Opdragverwysing](topic:commands) lys elke opdrag en alias.

:::tip
As jy van die lint van AutoCAD hou, kies die kieslysstyl {{ui:Klassieke tekening}} in {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Kieslyste, sleutels en muis}}: Tuis-, Invoeg-, Aantekening-, Parametries-, Aansig-, Bestuur- en Uitvoer-oortjies oor dieselfde opdragreël, en die middelknoppie beweeg die aansig terwyl 'n regterklik Enter is. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse).
:::

Die [opdragkaart](topic:command-map) lys elke opdrag wat CadCraft het met sy kort name, en die [spiekbrief](topic:cheat-sheet) die 40 wat jy die meeste sal gebruik (ook as 'n PDF van een bladsy).

## Verskille wat mense laat struikel

### Getikte punte is absoluut

Met dinamiese invoer aan, behandel die ander program 'n getikte `100,0` vir 'n tweede punt as relatief. **CadCraft se opdragreël doen dit nie:** daar word `x,y` altyd vanaf die oorsprong gemeet. Met {{ui:Dyn}} ({{key:F12}}) aan, gebruik eerder die velde: afstand, {{key:Tab}}, hoek. Gebruik `@100,0` vir "100 regs van die laaste punt", of beweeg die kruisdraad die regte pad en tik 'n kaal `100`.

### Shift slaan vaspunte oor; dit gee nie Ortho nie

Die Shift-sleutel terwyl jy klik, ignoreer voorwerpvaspunte vir daardie klik. Dit skakel nie Ortho tydelik aan nie. Gebruik F8 of die {{ui:Ortho}}-knoppie.

### Regterklik is altyd Enter

Daar is geen regterklikkieslys nie. 'n Regterklik in die tekening is Enter: dit beëindig 'n opdrag, voltooi 'n keuse, of herhaal die laaste opdrag. Tydens 'n greep-skuif of 'n keuseblokkie kanselleer dit eerder. Sleep met die regterknoppie om te beweeg.

### Geen beweging met die spasiebalk nie

Space is Enter, dus beweeg Space vasdruk en sleep nie. Beweeg met die middelknoppie of die regterknoppie, of zoem uit en weer in op 'n ander plek met die wiel.

### TRIM en EXTEND

TRIM en EXTEND begin in Vinnige-modus: elke sigbare voorwerp is 'n snykant of 'n grens, die stuk onder die wyser wys wat sal verdwyn, 'n gesleepte pad sny elke stuk wat hy kruis, en 'n voorwerp wat niks kruis nie, word uitgevee. {{key:Shift}} wissel tussen trim en extend. `O` skakel na Standaard-modus oor (kies eers die kante), `F` en `C` is heining en kruising, `E` is EDGEMODE, `R` vee uit. Daar is geen `P` (Projek)-opsie nie: CadCraft sny in die vlak van die tekening.

### FILLET en CHAMFER

{{cmd:FILLET}} en {{cmd:CHAMFER}} neem die opsies wat jy ken: Undo, Polyline, Radius (of Distance, Angle en mEthod), Trim en Multiple, en {{key:Shift}}+klik vir 'n skerp hoek. 'n Afronding tussen 'n polilyn en 'n lyn voeg die boog as sy eie voorwerp by in plaas daarvan om hulle in die polilyn te voeg, en polilynhoeke langs 'n boogsegment word gelaat soos hulle is.

### Paragraaftekst en enkellyn-teks

`T`, `MT` en `MTEXT` is paragraaftekst wat op die plek getik word, met 'n breedte, reëlspasiëring en uitlyning; `DT` en `DTEXT` is enkellyn-teks, soos jy dit ken. Daar is geen teksstyle of kolomme nie, en jy kan nog nie opmaak binne die teks tik nie (vetdruk, gestapelde breuke); opmaak wat in 'n lêer kom, word behou, geteken en gestoor (sien [Voeg teks en etikette by](topic:text#formatting-inside-paragraph-text-from-other-programs)). Alles word in 'n Helvetica-agtige lettertipe geteken.

### Stoor beteken "laai 'n kopie af"

{{key:Mod+S}}, `SAVE` en `QSAVE` laai 'n kopie af in die tekening se formaat: 'n DWG wat jy oopgemaak het, word as DWG gestoor, 'n DXF as DXF. In die blaaier word niks op sy plek oorskryf nie, en oopgemaakte lêers word nooit verander nie. In CadCraft Studio skryf {{key:Mod+S}} terug na die lêer wat jy oopgemaak het.

`SAVEAS` ({{key:Mod+Shift+S}}) is 'n klein dialoog, nie 'n lêerbestuurder nie: kies {{ui:DWG}} (met sy {{ui:Weergawe}}, AutoCAD 2000 tot 2018), {{ui:DXF R12}} of {{ui:DXF 2000}} en klik {{ui:Stoor}}. Die blaaier besluit waar die aflaai gaan. `DXFOUT` laai altyd DXF R12 af.

'n DWG wat jy oopgemaak het, word in die weergawe gestoor waarin dit gekom het; 'n nuwe tekening word in die AutoCAD 2000-formaat gestoor tensy jy 'n ander kies. Blaaie, mate en arseringspatrone word behou. Sien [Lêers: wat oopmaak, wat stoor](topic:files#saving).

### Lae: eenvoudiger

- Elke laagverandering (aan, vries, sluit, kleur, druk, lyntipe, lynwydte, huidige laag) is een ontdoen-stap.
- Af en vries het dieselfde effek in CadCraft.
- Lae wat 'n tekening in een viewport vries, bly daar gevries: op die skerm, in drukke en wanneer jy dit as DWG of DXF stoor.
- 'n Viewport wat 'n laag in sy eie kleur, lyntipe, lynwydte of deursigtigheid wys, hou dit so op die skerm, in drukke en in 'n gestoorde DWG (DXF hou die laag se eie instellings; die stoor sê dit). Om dit per viewport te verander, is nog nie gebou nie.
- Daar is geen laageienskappebestuurder en geen laagtoestande nie; {{cmd:RENAME}}, {{cmd:LAYMRG}} en {{cmd:LAYDEL}} hernoem, saamvoeg en skrap lae. Lyntipes en lynwydtes word in die regterpaneel gestel (sien [Lynwydtes en lyntipes](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} en {{cmd:LAYMCUR}} werk deur te kies.
- Om na DXF R12 te stoor, skryf laagname in hoofletters. 'n DWG hou hulle soos jy hulle getik het.

### Maatstyle

`DIMSTYLE` maak 'n bestuurder vir benoemde style oop (nuut, wysig, stel huidig, vergelyk, pas toe). `DIMSCALE` en die ander instellings verander steeds wat nuwe mate gebruik, en elke maat hou sy eie groottes, wat jy ook in die Eienskappe-paneel kan verander. Die huidige styl word nie in die lêer gestoor nie. Mate volg die tekening se lengteformaat (desimaal, of voet en duim met {{cmd:UNITS}}), of hul eie {{ui:Formaat}}. Sien [Stel maatgroottes](topic:dimension-settings).

### Druk is eenvoudiger

Druk-stylustabelle werk volgens kleur, soos CTB-lêers doen: Monochrome, Kleur en Grysskaal is ingebou, jy kan jou eie maak, en elke blad hou sy tabel. Die lees van CTB-lêers is gebou uit die gepubliseerde beskrywing en is net op lêers wat ons gemaak het, probeer; benoemde druk-stylustabelle (STB) en bladopstellings is nog nie gebou nie. Lyne druk teen hul lynwydte, die ander teen een pendikte. Blaaie druk op 1:1 op hul eie papier; die model druk teen 'n gekose skaal of gepas. Sien [Druk uit na PDF](topic:plot-pdf).

### Werk binne 'n viewport

Soos jy dit ken: dubbelklik binne 'n viewport (of tik {{cmd:MSPACE}}) om deur dit aan die model te werk, en dubbelklik buite dit (of {{cmd:PSPACE}}) om terug na die blad te gaan. Binne die viewport verander beweeg en zoem wat die viewport wys, tensy sy vertoning gesluit is; dan beweeg hulle die blad. Om op 'n oortjie onder die tekening te klik, verlaat die viewport ook. Sien [Werk aan die model deur 'n viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Spoor en dinamiese invoer ja, roosterveranker nog nie

Die rooster is net om na te kyk; punte veranker nie daaraan nie (daar is geen F9-verankeringsmodus nie). Polêr-spoor ({{key:F10}}, stap gestel met {{cmd:POLARANG}}) en voorwerpvasspoor ({{key:F11}}: rus op 'n vaspunt om dit te verkry) werk soos jy hulle ken; sien [Veranker aan voorwerpe](topic:object-snaps#polar-tracking). Dinamiese invoer ({{key:F12}}) wys afstand en hoek (of X en Y) by die kruisdraad; sien [Koördinaat- en afstandinvoer](topic:coordinate-entry#dynamic-input).

### Voet en duim

Kies {{ui:Lengteformaat}} {{ui:Argitektonies}} of {{ui:Ingenieurs}} (of tik {{cmd:UNITS}}), en tik lengtes soos jy hulle ken: `12'6"`, `12'6-1/2"`. Gebruik 'n koppelteken, nie 'n spasie nie, voor 'n breuk: {{key:Space}} is {{key:Enter}}. Stel ook {{ui:Eenhede}} op {{ui:Duim}}, sodat blaaie en drukke argitektoniese skale aanbied. Die formaat word in gestoorde DWG- en DXF-lêers gehou. Sien [Voet en duim](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopieer en plak bly binne CadCraft

{{key:Mod+C}}, {{key:Mod+X}} en {{key:Mod+V}} kopieer, sny en plak voorwerpe binne 'n tekening, tussen tekeninge, en tussen CadCraft-oortjies in dieselfde blaaier. Die klembord is CadCraft s'n: jy kan nie CadCraft-voorwerpe in 'n ander program plak, of voorwerpe uit 'n ander program in CadCraft nie. Plak uit 'n tekening in ander eenhede skaal nie weer nie: gebruik daarna {{cmd:SCALE}}. {{key:Mod+D}} is 'n duplikaat wat met die wyser beweeg, 'n CadCraft-byvoeging. Sien [Kopieer, plak en dupliseer](topic:copy-paste).

### Blaaiersleutels wat jy nie kan gebruik nie

'n Webblad kan nie {{key:Mod+N}}, {{key:Mod+W}} of {{key:Mod+T}} van die blaaier vat nie: hulle maak vensters en oortjies oop en toe. Gebruik die {{ui:Nuut}}-knoppie of tik `NEW`. Sien [Sleutels, muise en rekenaarpaadjies](common:keys).

## Opdragte wat jy dalk wil gebruik en wat hier nog nie is nie

{{cmd:TABLE}} is nog nie gebou nie. As jy dit tik, sê dit "Onbekende opdrag". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} en {{cmd:XREF}} is gebou.) [Nog nie gebou nie](topic:not-built-yet) lys wat om vandag eerder te doen.

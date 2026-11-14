---
title: Lêers: wat oopmaak, wat stoor
summary: Die formate wat CadCraft oopmaak, stoor en uitvoer, wat behou of omgeskakel word, en waarheen die lêers gaan.
keywords: xclip, clip, xclip-grens, bind geknipte, dwg, dxf, pdf, r12, maak oop, stoor, uitvoer, invoer, formate, omskakeling, aflaai, saveas, dxfout, stoor as, dwg stoor, formaat, qsave, xref, xattach, geskakelde tekening, eksterne verwysing, bind, herlaai, ontkoppel
from: 6d68b34e
---

## Eerste oogopslag

| Formaat | Maak oop | Stoor | Notas |
|---|---|---|---|
| DXF (teks, enige weergawe) | Ja | Ja, as DXF R12 of DXF 2000 | Binêre DXF word geweier: stoor dit eers as teks-DXF. |
| DWG | Ja | Ja, as DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 of 2018) | Gelees en geskryf deur CadCraft se eie DWG-biblioteek (AutoCAD R13 tot 2018-lêers). Jou DWG word nooit verander nie. Beskadigde lêers, of weergawes wat die leser nie hanteer nie, word met 'n boodskap geweier. |
| PDF | Bring 'n bladsy in: as 'n onderlaag of as voorwerpe ([PDF-onderlae](topic:pdf-underlay)) | Ja, deur te plot | Vektor-PDF van 'n blad, of van die model op 'n skaal. |

Elke tekening wat jy oopmaak (of met {{ui:Nuut}} begin) kry sy eie oortjie oor die tekenarea; 'n nuwe tekening waarmee niemand nog gewerk het nie, word eerder gebruik as om 'n oortjie by te voeg. Klik op 'n oortjie om te wissel, op sy {{ui:×}} om dit toe te maak (CadCraft vra eers as daar ongestoorde veranderinge is), of rangskik die oop tekeninge langs mekaar: sien [Verdeel die skerm](topic:split-screen).

## 'n Tekening oopmaak

- Druk {{key:Mod+O}}, klik {{ui:Maak oop}}, of tik `OPEN`, en kies dan die lêer.
- Of sleep 'n `.dwg`- of `.dxf`-lêer na die tekenarea.

Die lêer word binne jou blaaier gelees. Dit word nêrens opgelaai nie. Die geskiedenis meld hoeveel voorwerpe en lae ingekom het en hoe lank dit geneem het, en die {{ui:Tekening}}-afdeling van die linkerpaneel wys die formaat, byvoorbeeld "DWG 2018 (AC1032)".

Die DWG-leser is deel van CadCraft en word saam met die eerste DWG wat jy na die laai van die bladsy oopmaak, afgelaai (’n paar honderd KB), so daar is geen aparte aflaai om op te wag nie. Dit lees die lêer op die agtergrond, sodat die bladsy aanhou reageer terwyl 'n groot DWG oopmaak.

### Wat ingevoer word

- Lyne, boë, sirkels, polilyne (met boogsegmente), ellipse, punte, teks en veelreëlige teks, soliede voorwerpe, arserings (die standaardpatrone as hul lyne getekend, ander as 'n plat toon), blokverwysings met hul kenmerke (waardes wat jy kan wysig; sien [Blokkenmerke](topic:attributes)), mate, en blaaie met hul aansigvensters.
- Splines kom in as splines in (graad, beheerpunte, knope, gewigte, passingspunte); sien [Splines en polilyne](topic:splines).
- Meervoudige leiers met een leierlyn en teks kom in as CadCraft-meervoudige leiers wat jy kan wysig (sien {{cmd:MLEADER}}). Ander (met 'n blok, verskeie leierlyne of geboë lyne) word geteken soos die ander program dit geteken het en beweeg as een; die geskiedenis sê hoeveel.
- Prente (beelde) wys as 'n raam met die prent se lêernaam totdat jy CadCraft die lêer gee met {{cmd:IMAGE}}: sien [Prente in 'n tekening](topic:pictures#show-the-pictures-a-dwg-uses). Uitwissings wys as hul raam, en wat daaronder is, bly sigbaar.
- Tabelle in 'n DWG kom in soos die ander program dit geteken het.
- 3D-vlakke in modelruimte kom op die {{ui:3D}}-oortjie in, nie as 2D-voorwerpe nie; so ook dié binne blokke, een keer per blokverwysing in die model. In 'n blok en op 'n blad word hulle ook plat geteken, as buitelyne. Sien [Model in 3D](topic:3d-solids).
- Lae behou hul kleur, aan-, gevries-, gesluit- en plot-instellings. DEFPOINTS plot nooit nie.
- Mate word werklike, wysigbare CadCraft-mate waar hul punte gelees kan word. Hulle word eers presies gewys soos die ander program dit geteken het; sodra jy een verander, teken CadCraft dit in sy eie styl oor.
- Elke uitleg word 'n bladoortjie. In die ander program het elke uitleg 'n versteekte eerste aansigvenster wat die blad self is; CadCraft laat dit uit.

### Wat nog nie ingevoer word nie

Enigiets wat CadCraft nie kan teken nie, word getel, nie geraai nie. Die "Oor hierdie lêer"-blokkie in die linkerpaneel lys dit as "Nog nie gewys nie:" gevolg deur elke soort voorwerp en hoeveel. Tipiese gevalle is tabelle in 'n DXF, maasse, en 3D-soliede binne blokke. 3D-soliede, streke en liggame in modelruimte wys op die 3D-oortjie (sien [Model in 3D](topic:3d-solids#solids-from-other-programs)). Aansigvensters wat in die lêer verdraai is, wys gedraai, soos daar, en behou hul draai wanneer jy stoor; so ook die huidige UCS, die benoemde UCS'e en 'n gedraaide aansig.

Teks word in een Helvetica-agtige lettertipe geteken. 'n Etiket wat op een reël pas in die oorspronklike program se smaller lettertipe, kan in CadCraft op twee reëls omloop.

## Stoor

Daar is drie maniere om te stoor. Elkeen laai 'n afskrif af.

- **Stoor**: druk {{key:Mod+S}}, klik {{ui:Stoor}}, of tik `SAVE` (ook `QSAVE`). Dit stoor in die tekening se formaat: DWG as jy 'n DWG oopgemaak het, DXF as jy 'n DXF oopgemaak het. 'n DWG hou die weergawe waarmee dit gekom het ('n 2018-lêer stoor as 2018). 'n Nuwe tekening gebruik die formaat en DWG-weergawe wat jy laas gekies het by {{ui:Stoor as}} in hierdie blaaier; as jy nooit een gekies het nie, DWG in die AutoCAD 2000-formaat.
- **Stoor as**: druk {{key:Mod+Shift+S}}, klik {{ui:Stoor as}}, of tik `SAVEAS`. Die {{ui:Stoor 'n kopie as}}-dialoog bied {{ui:DWG}} aan, met 'n {{ui:Weergawe}}-lys (AutoCAD 2018, 2013, 2010, 2007, 2004 of 2000), {{ui:DXF R12}} en {{ui:DXF 2000}}, elk met die lêernaam wat dit sal gee, en die tekening se huidige formaat en weergawe alreeds gekies. Klik {{ui:Stoor}} om af te laai, of {{ui:Kanselleer}} (of {{key:Esc}}) om niks te stoor nie; die geskiedenis sê dan "Nie gestoor nie." Wat jy kies, bly: {{key:Mod+S}} gebruik dit vanaf dan vir hierdie tekening, en nuwe tekeninge in hierdie blaaier begin daarmee.
- **DXFOUT**: tik `DXFOUT`. Dit laai altyd 'n DXF R12-afskrif af, en die volgende {{key:Mod+S}} stoor steeds in die tekening se eie formaat.

Die blaaier laai `<tekeningnaam>.dwg` of `<tekeningnaam>.dxf` af. Elke stoor is 'n **nuwe aflaai**; die lêer wat jy oopgemaak het, word nooit oorskryf of verander nie. Die geskiedenis bevestig dit, byvoorbeeld "'n Afskrif as Plan.dwg gestoor (DWG (AutoCAD 2018)). Jou oorspronklike Plan.dxf is onveranderd." Vir 'n DXF sê dit "(DXF R12, open in enige CAD-program)". Die reëls daaronder lys alles wat onderweg verander het.

Wanneer CadCraft in die rekenaarprogram loop, werk stoor soos in ander rekenaarprogramme: {{key:Mod+S}} skryf die tekening terug na die lêer wat jy oopgemaak het, in sy eie formaat en weergawe, en die geskiedenis sê waar dit gestoor is. {{ui:Stoor as}} en die uitvoere wys die stelsel se stoordialoog, en 'n `.dwg`-, `.dxf`- of `.ccsheets`-lêer waarop jy dubbelklik, open in CadCraft.

Vir 'n PDF, plot eerder (sien hieronder).

## Wat 'n DWG behou en verander

CadCraft skryf die DWG self, binne jou blaaier, met dieselfde DWG-biblioteek waarmee dit lees. Kies die weergawe by Stoor as: die AutoCAD 2000-formaat (lêerweergawe AC1015) open in die meeste programme, ook ou; die nuwer formate (2004, AC1018, tot 2018, AC1032) behou ook ware kleure. Niks word opgelaai nie, en stoor van 'n DWG werk vanlyn.

Elke weergawe word nagegaan deur die gestoorde lêers terug te lees met drie ander programme se DWG-lesers en met CadCraft self. 'n CadCraft-DWG is nog nie self in AutoCAD oopgemaak nie.

### Wat 'n DWG behou

- Lyne, boë, sirkels, ellipse, punte en polilyne met hul boogsegmente.
- Enkelreëlteks met sy belyning en breedtefaktor.
- Veelreëlige en omloopteks, as veelreëlige teks. Die ander program laat dit weer omloop vanaf dieselfde breedte.
- Voorwerpkleure: volgens laag, volgens blok, die 255 standaardkleure, en ware kleure in die 2004-formaat en later.
- Lae met hul kleur, lyntipe, lyndikte en hul aan-, gevries-, gesluit- en plot-instellings; voorwerpe se eie lyntipes, lyndiktes en lyntipeskale, die lyntipepatrone en die tekening se lyntipeskaal.
- Die tekening se eenhede en die lengteformaat (desimaal, voet en duim, breuke…).
- Blokke met hul basispunt en kenmerkdefinisies, insluitend onsigbare, konstante en vooraf ingestelde.
- Blokverwysings met hul skaal, rotasie en kenmerkwaardes.
- Soliede vulsels, en patroonarserings met hul patroon, skaal en hoek (die patroon se eie lyne, sodat ander programme dieselfde lyne teken as CadCraft).
- Mate, as werklike mate: ander programme meet dit weer wanneer dit gerek word. Elkeen behou sy eie instellings (teksthoogte, pylgrootte, desimale, lengteformaat) en sy teks, en dra die getekende afskrif wat elke DWG-maat het.
- Blaaie (uitlegte): elke blad met sy papiergrootte en eenhede, wat daarop geteken is, en sy aansigvensters met hul aansig en skaal.
- Benoemde aansigte.
- Meervoudige leiers, as meervoudige leiers.
- Laag- en blokname soos jy dit getik het, in hoof- en kleinletters. (DXF R12 skryf hulle in hoofletters.)

### Wat 'n DWG verander

Elk hiervan word ná jy stoor in die geskiedenis gelys, wanneer dit op jou tekening van toepassing is.

| In CadCraft | In die gestoorde DWG |
|---|---|
| Ware kleure (gekies met die kleurkieser), in die 2000-formaat | Die naaste standaardkleur: die 2000-formaat het net die 255. Stoor as 2004 of later om dit te behou |
| Benoemde aansigte van 'n blad | Papierruimte-aansigte: 'n DWG sê nie watter blad nie, so wanneer CadCraft die lêer weer oopmaak, behoort hulle aan die eerste blad |
| Veelreëlige teks met 'n breedtefaktor | Normale letterwydte: in 'n DWG geld die breedtefaktor net vir enkelreëlteks |
| Laag- of blok­name met karakters wat DWG nie toelaat nie | Verander: 'n naam van 'n geskakelde tekening soos `Base\|Walls` word `Base$0$Walls` (soos binding 'n geskakelde tekening dit benoem), en ander karakters word `_` |

### Waarom R12, en wat omgeskakel word

Wanneer jy as DXF stoor, skryf CadCraft DXF R12, die weergawe wat elke CAD-program kan oopmaak. Dit is ouer as sommige kenmerke, so 'n paar dinge word in 'n eenvoudiger vorm geskryf:

| In CadCraft | In die gestoorde R12-lêer |
|---|---|
| Veelreëlige teks | Een tekstvoorwerp per reël |
| Ellipse | Polilyne wat die ellips volg |
| Arserings (uit oopgemaakte lêers) | Net hul buitelyne |
| Ware kleure (gekies met die kleurkieser) | Die naaste standaardkleur |
| Lyndiktes, en voorwerpe se eie lyntipeskale | Weggelaat: R12 het nie een van albei nie (lyntipes word behou) |
| Laag- en blok­name | In hoofletters geskryf; spasies en ander karakters word `_`, en name word tot 31 karakters ingekort ("Title block" word `TITLE_BLOCK`) |
| Lae wat ingestel is om nie te plot nie | Ander programme sal hulle plot (CadCraft onthou die instelling wanneer die tekening 'n blad het) |
| Mate | Werklike mate met hul eie getekende blok, sodat ander programme hulle wys soos jy hulle sien |
| Meervoudige leiers | Die lyne, pylpunt en teks wat hulle teken |
| Benoemde aansigte | Behou, met name in hoofletters; 'n blad se aansigte kom terug op die eerste blad |
| Verskeie blaaie | Die eerste blad is die papierruimte wat elke program wys; die ander word behou as blokke genoem `CCLAYOUT_1`, `CCLAYOUT_2` … wat CadCraft terug in blaaie omskakel wanneer dit die lêer oopmaak |

Die geskiedenis lys elk hiervan wat op jou tekening van toepassing was.

:::tip
Om oor 'n paar dae aan 'n tekening te werk, stoor as DXF en maak daardie DXF die volgende keer oop. Alles wat CadCraft kan teken, oorleef die heen-en-weer-ronde, insluitend mate, blokke en alle blaaie.
:::

## Geskakelde tekeninge (eksterne verwysings)

{{cmd:XATTACH}} (`XA`, of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Skakel 'n tekening (xref)}}) skakel 'n ander DWG of DXF: kies die lêer, klik dan waar dit moet gaan ({{key:Enter}} plaas dit op 0,0). Dit kom in as een blok wat na die lêer genoem is, op die regte skaal wanneer die twee tekeninge verskillende eenhede het. Die lae en blokke daarin behou hul name met die skakel se naam vooraan — `Plan|Walls`, `Plan|Door` — sodat hulle nooit met joune meng nie: skakel die geskakelde lae aan en af, vries of sluit hulle soos jou eie. 'n Skakel is slegs-lees: verander die ander tekening en herlaai dit. Wat jy op 'n skakel se lae stel (kleur, lyntipe, lyndikte, aan/af, vries, sluit, plot), word behou wanneer jy dit herlaai, wanneer jy die tekening as DWG stoor terwyl die skakel nog 'n skakel is, en wanneer 'n ander tekening hierdie een skakel.

{{cmd:XREF}} (`XR`): `?` lys die skakels (gelaai of nie, watter lêer, hoeveel verwysings); `A` heg aan; `R` herlaai een uit sy lêer (kies die lêer weer: die blaaier kan nie self by jou vouers uitkom nie); `B` bind een (dit word gewone blokke en lae genoem `Plan$0$Walls`); `D` ontkoppel een (sy verwysings en lae gaan). Elk is een ontdoen-stap.

{{cmd:XCLIP}} (`XC`) knip blokverwysings en skakels: kies hulle, `N` vir 'n nuwe grens, dan `R` en twee hoeke of `P` en die punte van 'n veelhoek ({{key:Enter}} sluit dit); `D` verwyder die knip. Net wat binne lê, wys en plot, en die knip beweeg saam met die verwysing. DWG en DXF 2000 behou knipsels; DXF R12 stoor die verwysing heel en sê so. Wanneer jy 'n skakel bind wat geknipte verwysings het, vra {{cmd:XREF}} `B`: `A` bind alles, `C` behou net elke verwysing se geknipte deel (lyne en boë word by die grens gesny; tekste en geneste blokke bly wanneer hul invoegpunt binne is).

'n Tekening wat jy oopmaak, kan na lêers skakel wat CadCraft nie kan sien nie: dit sê hoeveel nie gelaai is nie. Gebruik {{cmd:XREF}}, `R` en kies elke lêer om hulle te sien.

Wanneer jy stoor, word 'n gelaaide skakel **gebind** in die lêer (ander programme sien gewone blokke en lae genoem `Plan$0$…`), en die geskiedenis sê so. 'n Skakel wat nie gelaai is nie, bly 'n skakel na sy lêer, in DWG en DXF.

## Maak oop in 3D

{{ui:Aansig}} › {{ui:Meer}} › {{ui:Maak oop in ModelCraft}} ({{cmd:OPENIN3D}}) maak die tekening oop in die 3D-modelleringsprogram op 'n nuwe oortjie, as 'n DWG, sonder om dit op te laai. Veranderinge wat daar gemaak word, bly daar; stoor hulle daar. Die menu-item wys net waar daardie program 'n oorgegee tekening kan neem.

## 'n PDF plot

Druk {{key:Mod+P}}, klik {{ui:Plot}}, of tik `PLOT`. Die PDF word binne die blaaier gemaak en afgelaai, of op 'n nuwe oortjie vir druk oopgemaak. Sien [Druk uit na PDF](topic:plot-pdf).

## Waarheen die lêers gaan

Elke stoor en elke plot is 'n aflaai, so lêers beland waar jou blaaier aflaaie plaas: gewoonlik die Aflaaie-vouer. Om elke keer 'n vouer te kies, verander die aflaai-instelling in jou blaaier; [Blaaiers en rekenaars](common:browsers) wys waar.

Niks wat jy oopmaak of stoor, word aan ons gestuur nie. Sien [Waar jou lêers gaan](common:your-files).

## PLN- en PLA-projeklêers

CadCraft maak DWG- en DXF-tekeninge oop, nie Archicad se eie lêers nie (`.pln`, `.pla`, `.tpl`, `.bpn`). As jy een oopmaak, sê dit vir jou wat dit is. In Archicad, stoor die aansigte of uitlegte wat jy nodig het as DWG en maak dit hier oop, of voer die model uit as IFC en maak dit in BimCraft oop. Waar BimCraft die lêer kan oorneem, bied CadCraft {{ui:Maak oop in BimCraft}} aan.

## As die bladsy toemaak voordat jy stoor

CadCraft hou 'n afskrif van elke tekening wat jy verander, net in hierdie blaaier, 'n oomblik nadat jy ophou wysig. As die oortjie toemaak, die blaaier stop of die rekenaar herbegin voordat jy stoor, vra CadCraft die volgende keer as dit begin **Herstel jou werk?**: {{ui:Herstel}} maak die tekening weer oop, ongestoord, op sy eie oortjie. Stoor die tekening verwyder die afskrif daarvan. Sien [Herstel jou werk](common:recover).

## Aanlyn en vanlyn

Oopmaak, teken, stoor (DWG en DXF) en plot gebeur almal op jou rekenaar, so hulle werk sonder enige verbinding sodra CadCraft gelaai het.

Om CadCraft sonder enige verbinding te gebruik, klik {{ui:Stoor vir vanlyn}} in die balk bo, terwyl jy aanlyn is. Die etiket tel op ("Stoor 40 van 212") en eindig by "Vanlyn gereed". Die gestoorde afskrif sluit die DWG-leser in, sowat 5 MB altesaam, so **DWG-lêers maak ook vanlyn oop** sodra dit gestoor is. Klik die knoppie weer vir {{ui:Stoor weer (kry die nuutste weergawe)}} of {{ui:Verwyder die vanlyn-kopie}}. "Kon nie stoor nie" beteken sommige lêers het nie afgelaai nie: kontroleer die verbinding en klik om weer te probeer. "Vanlyn nie beskikbaar nie" beteken hierdie blaaiervenster kan nie 'n afskrif hou nie (privaatvensters en sommige bestuurde rekenaars).

Sonder 'n gestoorde afskrif word die DWG-leser afgelaai die eerste keer wat jy 'n DWG oopmaak nadat die bladsy gelaai is, so om 'n DWG vanlyn oop te maak kan misluk; DXF-lêers het dit nooit nodig nie. Moenie die bladsy vanlyn herlaai nie, tensy CadCraft gestoor is.

Sien [Werk vanlyn](common:offline) vir die besonderhede.

:::offline
Jy is nou vanlyn. Tekeninge stoor as DWG of DXF en plot normaal, en DXF-lêers maak oop. DWG-lêers maak oop as CadCraft "Vanlyn gereed" wys, of as die DWG-leser alreeds in hierdie oortjie gelaai is.
:::

## Beperkings in lêers

Beperkings en parameters (sien [Beperk 'n tekening](topic:constraints)) word in beide DWG en DXF gestoor. Elke beperkte voorwerp dra 'n klein CadCraft-nota (uitgebreide data), en 'n ongebruikte blok genoem `CADCRAFT_PARAMETRIC` hou die beperkings en die parametertabel. Ander programme maak die tekening normaal oop en ignoreer albei; hulle kan die ongebruikte blok skrap wanneer hulle suiwer. Die notas verwys na voorwerpe met hul eie sleutel, nie na die lêer se handvatsels nie, so 'n program wat handvatsels hernommer, breek hulle nie. Wanneer 'n ander program 'n beperkte voorwerp uitgevee of verander het, laat CadCraft die beperkings daarop val wanneer dit die lêer oopmaak en sê hoeveel. 'n Lêer sonder hulle maak oop sonder beperkings.

'n Skets wat uit 'n onderdeel-modelleerder (`.json`) uitgevoer is, maak ook oop: sien [Skuif sketse na en van ander onderdeel-modelleerders](topic:solidworks-sketches).

## Nog nie beskikbaar nie

- Meervoudige leiers as meervoudige leiervoorwerpe in 'n gestoorde DXF (R12 het geen: hulle word gestoor as wat hulle teken).
- Prente in 'n gestoorde DXF (hulle stoor as hul rame; DWG hou hulle as prente), en uitwissings wat wegsteek wat daaronder is.
- Stoor 'n nuwer DXF-weergawe as 2000.
- Wolkstoor en sinkronisering tussen rekenaars.

Sien [Nog nie gebou nie](topic:not-built-yet) vir die volledige lys.

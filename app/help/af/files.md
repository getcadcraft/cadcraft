---
title: Lêers: wat oopmaak, wat stoor
summary: Die formate wat CadCraft oopmaak, stoor en uitvoer, wat behou of omgeskakel word, en waar die lêers heen gaan.
keywords: xclip, clip, xclip grens, bind geknip, dwg, dxf, pdf, r12, maak oop, stoor, voer uit, voer in, formate, omskakeling, aflaai, saveas, dxfout, stoor as, dwg stoor, formaat, qsave, xref, xattach, gekoppelde tekening, eksterne verwysing, bind, herlaai, ontkoppel
from: b8c5778d
---

## Eerste oogopslag

| Formaat | Maak oop | Stoor | Notas |
|---|---|---|---|
| DXF (teks of binêr, enige weergawe) | Ja | Ja, as DXF R12, DXF 2000 of DXF 2000 (binêr) | 'n Binêre DXF maak oop soos 'n tekstuele een en stoor terug as binêr. |
| DWG | Ja | Ja, as DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 of 2018) | Gelees en geskryf deur CadCraft se eie DWG-biblioteek (AutoCAD R13 tot 2018 lêers). Jou DWG word nooit verander nie. Beskadigde lêers, of weergawes wat die leser nie hanteer nie, word met 'n boodskap geweier. |
| PDF | Bring 'n bladsy in: as 'n onderlaag of as voorwerpe ([PDF-onderlae](topic:pdf-underlay)) | Ja, deur te druk | Vektor-PDF van 'n blad, of van die model op 'n skaal. |

Elke tekening wat jy oopmaak (of met {{ui:Nuut}} begin) kry sy eie oortjie oor die tekenarea; 'n nuwe tekening waaraan niemand nog gewerk het nie, word gebruik in plaas van 'n nuwe oortjie by te voeg. Klik op 'n oortjie om te wissel, sy {{ui:×}} om dit toe te maak (CadCraft vra eers as daar ongestoorde veranderinge is), of rangskik die oop tekeninge langs mekaar: sien [Verdeel die skerm](topic:split-screen).

## 'n Tekening oopmaak

- Druk {{key:Mod+O}}, klik {{ui:Maak oop}}, of tik `OPEN`, en kies dan die lêer.
- Of sleep 'n `.dwg`- of `.dxf`-lêer op die tekenarea.

Die lêer word binne jou blaaier gelees. Dit word nêrens opgelaai nie. Die geskiedenis meld hoeveel voorwerpe en lae ingekom het en hoe lank dit geneem het, en die afdeling {{ui:Tekening}} van die linkerpaneel wys die formaat, byvoorbeeld "DWG 2018 (AC1032)".

Die DWG-leser is deel van CadCraft en word saam met die eerste DWG wat jy oopmaak nadat die bladsy gelaai is, afgelaai (a paar honderd KB), so daar is geen aparte aflaai om op te wag nie. Dit lees die lêer op die agtergrond, so die bladsy reageer steeds terwyl 'n groot DWG oopmaak.

'n DXF word in stukke van ongeveer 4 MB gelees, nooit as een blok teks nie, so 'n DXF groter as 512 MB maak ook oop. Wat dit beperk, is jou rekenaar se geheue: terwyl 'n DXF oopmaak, verwag dat dit ongeveer 16 tot 20 keer die lêer se grootte gebruik (in ons toets het 'n DXF van 100 MB met ongeveer 690 000 voorwerpe ongeveer 1,5 GB gebruik).

### Wat ingekom

- Lyne, boë, sirkels, polilyne (met boogsegmente), ellipse, punte, teks en veelreëlteks, soliede, arseringe (die standaardpatrone as hul lyne getekend, ander as 'n plat toon), blokverwysings met hul kenmerke (waardes wat jy kan wysig; sien [Blokeienskappe](topic:attributes)), maatlyne, en uitlegte met hul aansigvensters.
- Splines kom in as splines (graad, kontrolepunte, knope, gewigte, passingspunte); sien [Splines en polilyne](topic:splines).
- Veellyn-leiding met een leierlyn en teks kom in as CadCraft-veellynleidings wat jy kan wysig (sien {{cmd:MLEADER}}). Ander (met 'n blok, verskeie leierlyne of geboë lyne) word getekend soos die ander program dit geteken het en beweeg as een geheel; die geskiedenis sê hoeveel.
- Prente (beelde) wys as 'n raam met die prent se lêernaam totdat jy CadCraft die lêer met {{cmd:IMAGE}} gee: sien [Prente in 'n tekening](topic:pictures#show-the-pictures-a-dwg-uses). Uitwissings wys as hul raam, en wat daaronder is, bly sigbaar.
- Tabelle in 'n DWG kom in soos die ander program dit geteken het.
- 3D-vlakke in modelruimte kom in op die oortjie {{ui:3D}}, nie as 2D-voorwerpe nie; so ook dié binne blokke, een keer per blokverwysing in die model. In 'n blok en op 'n blad word hulle ook plat getekend, as omtrekke. Sien [Model in 3D](topic:3d-solids).
- Lae behou hul kleur, aan-, bevrore-, gesluite- en plotinstellings. DEFPOINTS druk nooit nie.
- Maatlyne word werklike, redigeerbare CadCraft-maatlyne waar hul punte gelees kan word. Hulle word eers getoon presies soos die ander program hulle geteken het; sodra jy een verander, teken CadCraft dit in sy eie styl oor.
- Elke uitleg word 'n blad-oortjie. In die ander program het elke uitleg 'n versteekte eerste aansigvenster wat die blad self is; CadCraft laat dit uit.

### Wat nog nie inkom nie

Enigiets wat CadCraft nie kan teken nie, word getel, nie geraai nie. Die kassie "About this file" in die linkerpaneel lys dit as "Not shown yet:" gevolg deur elke soort voorwerp en hoeveel. Tipiese gevalle is tabelle in 'n DXF, rooster-netwerke, en 3D-soliede binne blokke. 3D-soliede, streke en liggame in modelruimte wys op die 3D-oortjie (sien [Model in 3D](topic:3d-solids#solids-from-other-programs)). Aansigvensters wat in die lêer gedraai is, wys gedraai soos daar, en behou hul draaiing wanneer jy stoor; so ook die huidige UCS, die benoemde UCS's en 'n gedraaide aansig.

Teks word in een Helvetica-agtige lettertipe geteken. 'n Etiket wat op een reël pas in die oorspronklike program se smaller lettertipe, kan in CadCraft na twee reëls oorloop.

## Stoor

Daar is drie maniere om te stoor. Elkeen laai 'n kopie af.

- **Stoor**: druk {{key:Mod+S}}, klik {{ui:Stoor}}, of tik `SAVE` (ook `QSAVE`). Dit stoor in die tekening se formaat: DWG as jy 'n DWG oopgemaak het, DXF as jy 'n DXF oopgemaak het. 'n DWG hou die weergawe waarmee dit gekom het ('n 2018-lêer stoor as 2018). 'n Nuwe tekening gebruik die formaat en DWG-weergawe wat jy laas in {{ui:Stoor as}} in hierdie blaaier gekies het; as jy nooit een gekies het nie, DWG in die AutoCAD 2000-formaat.
- **Stoor as**: druk {{key:Mod+Shift+S}}, klik {{ui:Stoor as}}, of tik `SAVEAS`. Die dialoog {{ui:Stoor 'n kopie as}} bied {{ui:DWG}} aan, met 'n lys {{ui:Weergawe}} (AutoCAD 2018, 2013, 2010, 2007, 2004 of 2000), {{ui:DXF R12}} en {{ui:DXF 2000}}, elk met die lêernaam wat dit sal gee, en die tekening se huidige formaat en weergawe alreeds gekies. Klik {{ui:Stoor}} om af te laai, of {{ui:Kanselleer}} (of {{key:Esc}}) om niks te stoor nie; die geskiedenis sê dan "Not saved." Wat jy kies, bly: {{key:Mod+S}} gebruik dit vir hierdie tekening vanaf dan, en nuwe tekeninge in hierdie blaaier begin daarmee.
- **DXFOUT**: tik `DXFOUT`. Dit laai altyd 'n DXF R12-kopie af, en die volgende {{key:Mod+S}} stoor steeds in die tekening se eie formaat.

Die blaaier laai `<tekeningnaam>.dwg` of `<tekeningnaam>.dxf` af. Elke stoor is 'n **nuwe aflaai**; die lêer wat jy oopgemaak het, word nooit oorgeskryf of verander nie. Die geskiedenis bevestig dit, byvoorbeeld "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." Vir 'n DXF sê dit "(DXF R12, opens in any CAD program)". Die lyne daaronder lys enigiets wat onderweg verander het.

Wanneer CadCraft in die lessenaarprogram loop, werk stoor soos in ander lessenaarprogramme: {{key:Mod+S}} skryf die tekening terug na die lêer wat jy oopgemaak het, in sy eie formaat en weergawe, en die geskiedenis sê waar dit gestoor is. {{ui:Stoor as}} en die uitvoere wys die stelsel se stoordialoog, en 'n `.dwg`-, `.dxf`- of `.ccsheets`-lêer waarop jy dubbelklik, maak oop in CadCraft.

Vir 'n PDF, druk eerder (sien hieronder).

## Wat 'n DWG behou en verander

CadCraft skryf die DWG self, binne jou blaaier, met dieselfde DWG-biblioteek waarmee dit lees. Kies die weergawe in {{ui:Stoor as}}: die AutoCAD 2000-formaat (lêerweergawe AC1015) maak in die meeste programme oop, ook ou een; die nuwer formate (2004, AC1018, tot 2018, AC1032) behou ook ware kleure. Niks word opgelaai nie, en 'n DWG stoor werk aflyn.

Elke weergawe word nagegaan deur die gestoorde lêers terug te lees met drie ander programme se DWG-lesers en met CadCraft self. 'n CadCraft-DWG is nog nie in AutoCAD self oopgemaak nie.

### Wat 'n DWG behou

- Lyne, boë, sirkels, ellipse, punte, en polilyne met hul boogsegmente.
- Enkelreëlteks met sy belyning en breedtefaktor.
- Veelreël- en omwikkelde teks, as veelreëlteks. Die ander program wikkel dit weer met dieselfde breedte.
- Voorwerpkleure: volgens laag, volgens blok, die 255 standaardkleure, en ware kleure in die 2004-formaat en later.
- Lae met hul kleur, lyntipe, lynwydte en hul aan-, bevrore-, gesluite- en plotinstellings; voorwerpe se eie lyntipes, lynwydtes en lyntipeskale, die lyntipe-patrone en die tekening se lyntipeskaal.
- Die tekeneenhede en die lengteformaat (desimaal, voet en duim, breuke…).
- Blokke met hul basispunt en kenmerkdefinisies, insluitend onsigbare, konstante en vooraf ingestelde een.
- Blokverwysings met hul skaal, rotasie en kenmerkwaardes.
- Soliede vulsels, en patroonarserings met hul patroon, skaal en hoek (die patroon se eie lyne, sodat ander programme dieselfde lyne teken as CadCraft).
- Maatlyne, as werklike maatlyne: ander programme meet hulle weer op wanneer hulle gerek word. Elkeen behou sy eie instellings (teksgrootte, pylgrootte, desimale, lengteformaat) en sy teks, en dra die getekende kopie wat elke DWG-maatlyn het.
- Blaaie (uitlegte): elke blad met sy papiergrootte en eenhede, wat op hom geteken is, en sy aansigvensters met hul aansig en skaal.
- Benoemde aansigte.
- Veellynleidings, as veellynleidings.
- Laag- en bloknaam soos jy dit getik het, in hoof- en kleinletters. (DXF R12 skryf hulle in hoofletters.)

### Wat 'n DWG verander

Elk hiervan word in die geskiedenis gelys nadat jy stoor, wanneer dit op jou tekening van toepassing is.

| In CadCraft | In die gestoorde DWG |
|---|---|
| Ware kleure (gekies met die kleurkieser), in die 2000-formaat | Die naaste standaardkleur: die 2000-formaat het net die 255. Stoor as 2004 of later om hulle te behou |
| Benoemde aansigte van 'n blad | Papierruimte-aansigte: 'n DWG sê nie watter blad nie, so wanneer CadCraft die lêer weer oopmaak, behoort hulle aan die eerste blad |
| Veelreëlteks met 'n breedtefaktor | Normale letterwydte: in 'n DWG geld die breedtefaktor net vir enkelreëlteks |
| Laag- of bloknaam met karakters wat DWG nie toelaat nie | Verander: 'n naam van 'n gekoppelde tekening soos `Base\|Walls` word `Base$0$Walls` (soos binding van 'n gekoppelde tekening dit noem), en ander karakters word `_` |

### Waarom R12, en wat omskep word

Wanneer jy as DXF stoor, skryf CadCraft DXF R12, die weergawe wat elke CAD-program kan oopmaak. Dit is ouer as sommige eienskappe, so 'n paar dinge word in 'n eenvoudiger vorm geskryf:

| In CadCraft | In die gestoorde R12-lêer |
|---|---|
| Veelreëlteks | Een teksvoorwerp per reël |
| Ellipse | Polilyne wat die ellips volg |
| Arserings (uit oopgemaakte lêers) | Net hul omtrekke |
| Ware kleure (gekies met die kleurkieser) | Die naaste standaardkleur |
| Lynwydtes, en voorwerpe se eie lyntipeskale | Weggelaat: R12 het nie een nie (lyntipes word behou) |
| Laag- en bloknaam | In hoofletters geskryf; spasies en ander karakters word `_`, en name word tot 31 karakters ingekort ("Title block" word `TITLE_BLOCK`) |
| Lae wat op nie-druk gestel is nie | Ander programme sal hulle druk (CadCraft onthou die instelling wanneer die tekening 'n blad het) |
| Maatlyne | Werklike maatlyne met hul eie getekende blok, sodat ander programme hulle wys soos jy hulle sien |
| Veellynleidings | Die lyne, pylpunt en teks wat hulle teken |
| Benoemde aansigte | Behou, met name in hoofletters; 'n blad se aansigte kom terug op die eerste blad |
| Verskeie blaaie | Die eerste blad is die papierruimte wat elke program wys; die ander word behou as blokke genoem `CCLAYOUT_1`, `CCLAYOUT_2` … wat CadCraft terug in blaaie omskep wanneer dit die lêer oopmaak |

Die geskiedenis lys elk van hierdie wat op jou tekening van toepassing was.

:::tip
Om oor verskeie dae aan 'n tekening te werk, stoor as DXF en maak daardie DXF die volgende keer oop. Alles wat CadCraft kan teken, oorleef die ronde reis, insluitend maatlyne, blokke en alle blaaie.
:::

## Gekoppelde tekeninge (eksterne verwysings)

{{cmd:XATTACH}} (`XA`, of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Skakel 'n tekening (xref)}}) koppel 'n ander DWG of DXF: kies die lêer, en klik dan waar dit moet kom ({{key:Enter}} plaas dit by 0,0). Dit kom in as een blok wat na die lêer genoem is, op die regte skaal wanneer die twee tekeninge verskillende eenhede het. Sy lae en blokke behou hul name met die koppeling se naam voor: `Plan|Walls`, `Plan|Door` — so hulle meng nooit met joune nie: skakel die gekoppelde lae aan en af, vries of sluit hulle soos joune. 'n Koppeling is slegs-lees: verander die ander tekening en herlaai dit. Wat jy op 'n koppeling se lae instel (kleur, lyntipe, lynwydte, aan/af, vries, sluit, druk) word behou wanneer jy dit herlaai, wanneer jy die tekening as DWG stoor terwyl die koppeling nog 'n koppeling is, en wanneer 'n ander tekening hierdie een koppel.

{{cmd:XREF}} (`XR`): `?` lys die koppelings (gelaai of nie, watter lêer, hoeveel verwysings); `A` heg aan; `R` herlaai een uit sy lêer (kies die lêer weer: die blaaier kan nie self by jou vouers kom nie); `B` bind een (dit word gewone blokke en lae genoem `Plan$0$Walls`); `D` ontkoppel een (sy verwysings en lae gaan). Elk is een ongedaan-stap.

{{cmd:XCLIP}} (`XC`) knip blokverwysings en koppelings: kies hulle, `N` vir 'n nuwe grens, dan `R` en twee hoeke of `P` en die punte van 'n veelhoek ({{key:Enter}} sluit dit); `D` verwyder die knip. Net wat binne lê, wys en druk, en die knip beweeg saam met die verwysing. DWG en DXF 2000 behou knipsels; DXF R12 stoor die verwysing heel en sê so. Wanneer jy 'n koppeling bind wat geknipte verwysings het, vra {{cmd:XREF}} `B`: `A` bind alles, `C` behou net elke verwysing se geknipte deel (lyne en boë word aan die grens gesny; tekste en geneste blokke bly wanneer hul invoegpunt binne is).

'n Tekening wat jy oopmaak, kan lêers koppel wat CadCraft nie kan sien nie; dit sê hoeveel nie gelaai is nie. Gebruik {{cmd:XREF}}, `R` en kies elke lêer om hulle te sien.

Wanneer jy stoor, word 'n gelaaide koppeling **gebind** in die lêer (ander programme sien gewone blokke en lae genoem `Plan$0$…`), en die geskiedenis sê so. 'n Koppeling wat nie gelaai is nie, bly 'n koppeling na sy lêer, in DWG en DXF.

## Oopmaak in 3D

{{ui:Aansig}} › {{ui:Meer}} › {{ui:Maak oop in ModelCraft}} ({{cmd:OPENIN3D}}) maak die tekening in die 3D-modelleerprogram op 'n nuwe oortjie oop, as 'n DWG, sonder om dit op te laai. Veranderinge wat daar gemaak word, bly daar; stoor hulle daar. Die menu-item wys net waar daardie program 'n oorgegewe tekening kan aanvaar.

## 'n PDF druk

Druk {{key:Mod+P}}, klik {{ui:Plot}}, of tik `PLOT`. Die PDF word binne die blaaier gemaak en afgelaai, of op 'n nuwe oortjie oopgemaak om te druk. Sien [Druk na PDF](topic:plot-pdf).

## Waar die lêers heen gaan

Elke stoor en elke druk is 'n aflaai, so lêers beland waar jou blaaier aflaaie plaas: gewoonlik die Aflaaie-vouer. Om elke keer 'n vouer te kies, verander die aflaai-instelling in jou blaaier; [Blaaiers en rekenaars](common:browsers) wys waar.

Niks wat jy oopmaak of stoor, word na ons gestuur nie. Sien [Waar jou lêers heen gaan](common:your-files).

## PLN- en PLA-projeklêers

CadCraft maak DWG- en DXF-tekeninge oop, nie Archicad se eie lêers nie (`.pln`, `.pla`, `.tpl`, `.bpn`). As jy een oopmaak, sê dit vir jou wat dit is. In Archicad, stoor die aansigte of uitlegte wat jy nodig het as DWG en maak hulle hier oop, of voer die model uit as IFC en maak dit oop in BimCraft. Waar BimCraft die lêer kan oorneem, bied CadCraft {{ui:Open in BimCraft}} aan.

## As die bladsy sluit voordat jy stoor

CadCraft hou 'n kopie van elke tekening wat jy verander, net in hierdie blaaier, 'n oomblik nadat jy wysig ophou. As die oortjie sluit, die blaaier stop, of die rekenaar herbegin voordat jy stoor, vra CadCraft **Recover your work?** die volgende keer wat dit begin: {{ui:Herstel}} maak die tekening weer oop, ongestoor, op sy eie oortjie. Om die tekening te stoor, verwyder die kopie daarvan. Sien [Herstel jou werk](common:recover).

## Aanlyn en aflyn

Oopmaak, teken, stoor (DWG en DXF) en druk gebeur alles op jou rekenaar, so hulle werk sonder verbinding sodra CadCraft gelaai het.

Om CadCraft sonder enige verbinding te gebruik, klik {{ui:Stoor vir vanlyn}} in die balk bo terwyl jy aanlyn is. Die etiket tel op ("Saving 40 of 212") en eindig by "Offline ready". Die gestoorde kopie sluit die DWG-leser in, ongeveer 5 MB altesaam, so **DWG-lêers maak ook aflyn oop** sodra dit gestoor is. Klik die knoppie weer vir {{ui:Stoor weer (kry die nuutste weergawe)}} of {{ui:Verwyder die vanlyn-kopie}}. "Could not save" beteken sommige lêers het nie afgelaai nie: kontroleer die verbinding en klik om weer te probeer. "Offline not available" beteken hierdie blaaiervenster kan nie 'n kopie hou nie (privaatvensters en sommige bestuurde rekenaars).

Sonder 'n gestoorde kopie word die DWG-leser die eerste keer afgelaai wat jy 'n DWG oopmaak nadat die bladsy gelaai is, so 'n DWG aflyn oopmaak kan misluk; DXF-lêers het dit nooit nodig nie. Herlaai nie die bladsy aflyn nie, tensy CadCraft gestoor is.

Sien [Werk aflyn](common:offline) vir die besonderhede.

:::offline
Jy is nou aflyn. Tekeninge stoor as DWG of DXF en druk normaal, en DXF-lêers maak oop. DWG-lêers maak oop as CadCraft "Offline ready" wys, of as die DWG-leser alreeds in hierdie oortjie gelaai is.
:::

## Beperkings in lêers

Beperkings en parameters (sien [Beperk 'n tekening](topic:constraints)) word in beide DWG en DXF gestoor. Elke beperkte voorwerp dra 'n klein CadCraft-nota (uitgebreide data), en 'n ongebruikte blok genoem `CADCRAFT_PARAMETRIC` hou die beperkings en die parametertabel. Ander programme maak die tekening normaal oop en ignoreer albei; hulle kan die ongebruikte blok verwyder wanneer hulle suiwer. Die notas verwys na voorwerpe met hul eie sleutel, nie die lêer se handvatsels nie, so 'n program wat handvatsels hernommer, breek hulle nie. Wanneer 'n ander program 'n beperkte voorwerp verwyder of verander het, laat CadCraft die beperkings daarop val wanneer dit die lêer oopmaak en sê hoeveel. 'n Lêer sonder hulle maak oop sonder beperkings.

'n Skets wat uit 'n onderdeelmodelleerder (`.json`) uitgevoer is, maak ook oop: sien [Skuif sketse na en van ander onderdeelmodelleerders](topic:solidworks-sketches).

## Nog nie beskikbaar nie

- Veellynleidings as veellynleiding-voorwerpe in 'n gestoorde DXF (R12 het geen nie: hulle word gestoor as wat hulle teken).
- Prente in 'n gestoorde DXF (hulle word as hul rame gestoor; DWG behou hulle as prente), en uitwissings wat wat daaronder is, wegsteek.
- Stoor van 'n nuwer DXF-weergawe as 2000.
- Wolkberging en sinkronisering tussen rekenaars.

Sien [Nog nie gebou nie](topic:not-built-yet) vir die volledige lys.

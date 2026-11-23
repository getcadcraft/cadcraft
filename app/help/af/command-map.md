---
title: Opdragkaart: wat om te tik
summary: Elke opdrag wat CadCraft het met sy kort name, A tot Z, gemaak uit die program self, en die gewoontes uit ander tekenprogramme wat verskil.
keywords: opdragkaart, opdragte, aliasse, kort name, vandaan kom, opdraglys, wat om te tik, vee uit, knip, ekwivalent, verskille
from: 9426856f
---

CadCraft neem die opdragnaamme en kort name wat mense van ander tekenprogramme ken: tik `L` vir 'n lyn, `TR` om te knip, `E` om uit te vee. So is daar geen vertaaltabel om vir die meeste daarvan te leer nie: die naam wat jy ken, is die naam hier. Die lys hieronder is elke opdrag wat CadCraft het, gemaak uit die program self. {{key:Enter}} herhaal die laaste een, en `HELP` in die opdragreël druk dieselfde lys.

Die paar wat nie dieselfde is nie, of nie gebou is nie:

- **Stoor** laai 'n afskrif in die blaaier af ({{cmd:SAVE}}, {{cmd:SAVEAS}}); in CadCraft Studio skryf dit die lêer. Sien [Van ander tekensagteware af](topic:coming-from).
- **PLOT** maak 'n PDF (ook PNG en SVG), met 'n druiktabel vir plotstyl; daar is geen bladuitlegbestuurder nie.
- **DIMSTYLE** en **PEDIT** is gebou; **PEDIT** het geen Redigeer-hoekpunt-opsie nie (handvatpunte doen dit).
- **TABLE** is nie gebou nie; {{cmd:XREF}}, {{cmd:SPLINE}} en {{cmd:WBLOCK}} is.
- 'n Roetine se eie opdragte (AutoLISP `C:NAME`) verskyn nadat jy dit met {{cmd:APPLOAD}} laai; hulle word nie hier gelys nie.

## Alle opdragte (402)

| Opdrag | Kort name | Wat dit doen |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Wentel die 3D-aansig met die linkerknoppie |
| `ACCESS` | `AX` | Skakel tekenwerk sonder sig aan of af: resultate word deur jou skermleser gepraat, 'n sleutelbord-kursor op die tekening, snapklanke en gepraatte opdragte. |
| `ALIASEDIT` |  | Wysig opdragaliasse in een tekslêer (die bekende L, *LINE-formaat) |
| `ALIGN` | `AL` | Skuif en draai voorwerpe sodat bronpunte op bestemmingspunte land (een, twee of drie pare), en skaal hulle as jy wil |
| `ALIGNPANEL` | `ALP` | Maak die paneel Belyn en versprei oop |
| `ALIGNTO` |  | Lyn die gekose voorwerpe se linker-, middel-, regter-, bo-, middel- of onderrande op, op die seleksie, die eerste of laaste gekose voorwerp, of 'n punt |
| `ANNOALLVISIBLE` | `ANNOALL` | Wys annoterende voorwerpe op elke skaal, of net waar die aansigvenster se (of die tekening se) skaal in hul lys is |
| `ANNOSCALE` | `CANNOSCALE` | Stel die tekening se annotasieskaal: annoterende teks en maatlyne word hergrootte om op dieselfde grootte te druk |
| `APPLOAD` | `AP` | Laai toepassings: LISP-roetines (.lsp) en hul dialoogmlêers (.dcl); die Opstartsuite (AP) |
| `ARC` | `A` | Boog: 3-Punt, Begin/Middel/Einde, Begin/Middel/Hoek, Begin/Middel/Lengte, Begin/Einde/Hoek, Begin/Einde/Rigting, Begin/Einde/Radius, Middel/Begin/Einde, Middel/Begin/Hoek, Middel/Begin/Lengte, Gaan voort |
| `AREA` | `AA` | Oppervlakte en omtrek deur punte of van 'n voorwerp; Voeg by en Trek af hou 'n lopende totaal (AA) |
| `ARRAY` | `AR` | Kopieë in rye en kolomme, of rondom 'n middelpunt (AR) |
| `ARRAYASSOCIATIVITY` |  | Stel of die ARRAY-opdragte skikkings maak wat redigeerbaar bly (1) of gewone kopieë (0) |
| `ARRAYCLOSE` |  | Beëindig redigeer van 'n skikking se bronvoorwerpe |
| `ARRAYEDIT` |  | Verander 'n skikking wat met die Assosiatief-opsie gemaak is: tellings, spasiëring, bronvoorwerpe, een item |
| `ARRAYPATH` |  | Kopieë van voorwerpe langs 'n lyn, boog, polilyn of ander kromme |
| `ARRAYPOLAR` |  | Kopieë rondom 'n middelpunt |
| `ARRAYRECT` |  | Kopieë in rye en kolomme |
| `ASBUILT` | `ASB` | ASBUILT lees die as-gebou-punte wat 'n span gemeet het (CSV / TXT, soos EXPORTPOINTS skryf) en vergelyk dit met die tekening se punte: binne of buite die toleransie, nie gemeet nie, ekstra. Merk hulle op die laag AS-BUILT en laai 'n CSV-verslag af. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definieer 'n attribuut ('n etiket waarvoor 'n blok 'n waarde vra) om in 'n blok te sit (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Wysig 'n blokverwysing se attribuutwaardes op die opdragreël, een na die ander (Enter hou 'n waarde) |
| `ATTSYNC` |  | Bring 'n blok se verwysings in lyn met sy attribuutdefinisies: nuwe bygevoeg met hul verstekwaardes, verwyderde laat val, posisies en teks teruggestel; waardes behou |
| `AUDIT` |  | Kontroleer die oop tekening vir skade: getalle wat nie eindig is nie, voorwerpe sonder grootte, ontbrekende lae, blokke, style en lyntipes, blokke wat hulself bevat, gedeelde id's, gebroke maatlyne en arserings. Lys wat dit vind volgens soort en vra voordat dit regmaak; die regmaak is een ontdoen-stap. |
| `AUNITS` | `ANGUNITS` | Hoe hoeke gewys en getik word: desimale grade, grade-minute-sekondes, of rigtings soos N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Tekening-outovoltooiing aan of af, of lys wat die tekening se patrone nou voorstel. |
| `AUTOCONSTRAIN` |  | Voeg samevallende, horisontale en vertikale beperkings by waar die meetkunde reeds naby is |
| `AUTODIM` | `ADIM` | Dimensioneer volgens reëls: algemene grootte, kettings langs die kante, openings, gatdeursnee en roosterafstand, sonder om te herhaal wat reeds gedimensioneer is. |
| `AUTOSHEET` | `ASH` | Lê blaaie self uit: kies papier en standaardskale en plaas elke aansig met 'n onderskrif en 'n titelblok. |
| `BATTMAN` |  | Blokattribuutbestuurder: volgorde, etikette, aanwysings, verstekke en modusse van 'n blok se attribute, dan sy verwysings bygewerk |
| `BCLOSE` |  | Sluit die blokredigeerder: stoor die blok of gooi die veranderinge weg |
| `BCONVERT` |  | BCONVERT vind meetkunde wat herhaal en maak dit blokverwysings. Kies die voorwerpe wat herhaal: elke ander stel voorwerpe in die oop ruimte wat dieselfde meetkunde is, verskuif en gedraai onder enige hoek, word gevind, en met Gespieël of Geskaal aan, word ook spieëlbeelde en kopieë op 'n ander grootte gevind. Gee die nuwe blok 'n naam en 'n basispunt; die seleksie en elke kopie word verwysings daarna, elk met sy eie rotasie en skaal. Of kies Blok en noem 'n bestaande blok om los kopieë van sy voorwerpe te vind. 'n Kopie moet dieselfde laag, kleur, lyntipe en lynwydte hê tensy Eienskappe op Ignoreer staan. Voorwerpe op gesluite lae word met rus gelaat. Een ontdoen-stap. |
| `BEDIT` | `BE` | Blokredigeerder: wysig 'n blok se voorwerpe en attribute; BCLOSE stoor (BE) |
| `BLEND` |  | BLEND: 'n spline tussen die eindes van twee oop krommes, naby die eindes gekies om saam te voeg. CONtinuity: Tangent volg albei rigtings, Smooth volg ook hoe hulle buig. |
| `BLOCK` | `B`, `BMAKE` | Maak 'n blok uit voorwerpe (hulle word een verwysing) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: elke verwysing na een blok word 'n verwysing na 'n ander, op dieselfde plek met dieselfde skaal en rotasie. Waardes van attribute wat albei blokke het, word behou. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE wys die Blokke-paneel met die kursor in sy filter. Die paneel wys 'n prent van elke blok (die onlangs geplaastes eerste), as 'n lys of 'n rooster; klik 'n prent of sleep dit op die tekening om die blok met INSERT te plaas. Onder Biblioteke, voeg 'n DWG- of DXF-lêer van jou eie by: sy blokke word met prente gelys en word in hierdie tekening gekopieer as jy een plaas. In CadCraft Studio kan 'n vouer tekeninge ook bygevoeg word, en lêers en vouers word onthou. |
| `BOMEDIT` | `BOMCOLUMNS` | 'n Materiaallysttabel se kolomme, groepering, sortering, titel, totale en opmerkings |
| `BOMEXPORT` |  | Stoor 'n materiaallysttabel as 'n .csv-lêer |
| `BOMTABLE` | `BOM` | 'n Lewende materiaallysttabel van een sone, of van die hele tekening |
| `BOMUPDATE` |  | Werk elke materiaallysttabel nou op, ook die bevrore |
| `BOMZONE` | `BZONE` | 'n Benoemde gebied van die tekening vir 'n materiaallys: twee hoeke, 'n veelhoek, of 'n geslote voorwerp se omtrek |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): kies 'n punt binne 'n geslote gebied en kry 'n geslote polilyn daaromheen. Boë bly boë. Eilande omlyn die gebiede binne dit ook. |
| `BOX` |  | 'n Boks: twee hoeke en 'n hoogte (3D) |
| `BPARAMETER` | `BPARAM` | Nog nie gebou nie: 'n parameter (soos Sigbaarheid) by 'n blok voeg. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokparameters: benoemde parameters met formules, en verskeie sigbaarheidsparameters in een blok. Werk in die blokredigeerder (wys die gekose voorwerpe aan 'n toestand toe) en op 'n gekose verwysing (sy eie waardes en toestande). |
| `BREAK` | `BR` | Breek 'n lyn, boog, sirkel of polilyn tussen twee punte (BR) |
| `BREAKATPOINT` |  | Verdeel 'n lyn, boog of polilyn in twee by 'n punt |
| `BREAKLINE` |  | Teken 'n lyn met 'n breeksimbool; sy grootte en die verlenging verby die eindes word onthou. |
| `BREPLACE` |  | BREPLACE ruil een blok vir 'n ander. Gekies: kies blokverwysings en noem die blok om eerder te gebruik. Almal: noem 'n blok en sy vervanger, en elke verwysing in elke ruimte en binne ander blokke verander. 'n Verwysing hou sy plek, skaal, rotasie en laag, en die waardes van attribute wat albei blokke het; waardes waarvoor die nuwe blok geen plek het nie, word laat val en genoem. |
| `BSEARCH` |  | BSEARCH vind blokke. Naam: deel van 'n blok se naam, of 'n patroon met * en ?. Attribuut: 'n waarde (of TAG=waarde) wat 'n verwysing se attribute hou. Meetkunde: kies voorwerpe of een blokverwysing, en die blokke waarvan die vorm ten minste 85% eenders is, word gelys, beste eerste; grootte, rotasie en spieëling tel nie. Die verwysings wat in die oop ruimte gevind word, word gekies, gereed vir die volgende opdrag. |
| `BURST` |  | Ontbind blokverwysings en hou wat hul attribute sê: elke waarde word teks op die attribuut se laag. |
| `BVHIDE` | `BVH` | In die blokredigeerder: verberg voorwerpe in die huidige sigbaarheidstoestand. |
| `BVSHOW` | `BVSH` | In die blokredigeerder: wys voorwerpe wat die huidige sigbaarheidstoestand verberg (hulle wys verbleik om te kies). |
| `BVSTATE` | `BVS` | In die blokredigeerder, op 'n blok met sigbaarheidstoestande: wissel na 'n toestand, of voeg een by, hernoem of skrap een. |
| `CAL` |  | Bereken 'n lengte of getal: + − * / en hakies, soos jy hulle oral tik |
| `CENTERLINE` | `CL` | Middellyn tussen twee lyne: halfpad tussen hulle, of langs die halveerlyn as hulle ontmoet (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Middelmerk: 'n kruis in die middel van 'n sirkel of boog, met middellyne tot net verby dit (CM) |
| `CHAMFER` | `CHA` | Skuins die hoek tussen twee lyne af (D twee afstande, A lengte en hoek, P elke hoek van 'n polilyn) |
| `CHSPACE` |  | CHSPACE: skuif voorwerpe tussen 'n blad en die model deur 'n aansigvenster. Hulle word geskaal en gedraai sodat hulle van die ander kant af eenders lyk. Op 'n blad gaan hulle na die model; terwyl jy deur 'n aansigvenster werk (MSPACE), kom hulle na die blad. |
| `CIRCLE` | `C` | Middelpunt en radius, deursnee, 2 of 3 punte |
| `CLASS` |  | Plaas die gekose voorwerpe in 'n klas, of met niks gekies nie, stel die aktiewe klas (? lys hulle) |
| `CLASSES` | `CLS` | Die Klasse-paneel: klasse sorteer voorwerpe oor lae heen; wys, versteek en stileer hulle, en oorskryf hulle per aansigvenster (CLS) |
| `COMMANDLINE` | `CMDLINE` | Heg of laat swewe die opdragreël, maak dit een reël, stel sy geskiedenislyne, of maak die geskiedenis oop (F2) |
| `COMPARESETTINGS` | `CMPSET` | Vergelyk maatstyle, teksstyle, lae, blaaie of eenhede: twee in hierdie tekening, of hierdie tekening teen 'n ander oop een, en kopieer 'n waarde oor. |
| `CONSTRAINTBAR` | `CBAR` | Wys of versteek die beperkingbalke (Showall / Hideall, of per voorwerp) |
| `COPY` | `CO`, `CP` | Kopieer voorwerpe, soveel keer as jy klik |
| `COPYBASE` |  | Kopieer voorwerpe na die knipbord met 'n basispunt wat jy kies |
| `COPYCLIP` |  | Kopieer voorwerpe na die knipbord (Ctrl+C); PASTECLIP plaas hulle |
| `COUNT` | `BCOUNT` | Tel blokverwysings: kies een om elke verwysing van sy blok te kies en te tel |
| `COUNTTABLE` |  | Plaas 'n tabel van blokteellings |
| `CREDITS` |  | Sit die Biblioteek-erkennings as 'n tabel in die tekening. Loop dit weer om die tabel by te werk uit die items in die tekening nou. |
| `CURSORSIZE` |  | Die kruisdraad se grootte: 100 loop dit rand tot rand oor die tekening (Instellings › Kursor › Volskerm) |
| `CUTCLIP` |  | Sny voorwerpe na die knipbord (Ctrl+X): kopieer, dan vee uit |
| `CYLINDER` | `CYL` | 'n Silinder: middelpunt, radius en hoogte (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Lys blokke, hul attribute en voorwerpeienskappe as 'n tabel in die tekening of 'n CSV-lêer |
| `DATALINK` | `DL` | 'n Tabel uit 'n CSV-lêer wat die lêer onthou, sodat dit weer gelees kan word |
| `DATALINKUPDATE` | `DLU` | Lees 'n datakoppeling se lêer weer en vul sy tabelle |
| `DCALIGNED` | `DCALI` | Dimensionele beperking: ware afstand tussen punte, 'n punt en 'n lyn, of twee lyne |
| `DCANGULAR` | `DCANG` | Dimensionele beperking: hoek tussen twee lyne, of van 'n boog |
| `DCCONVERT` |  | Maak maatlyne wat op beperkbare meetkunde geteken is in dimensionele beperkings |
| `DCDIAMETER` | `DCDIA` | Dimensionele beperking: deursnee van 'n sirkel of boog |
| `DCDISPLAY` |  | Wys of versteek dimensionele beperkings op die tekening |
| `DCHORIZONTAL` | `DCHOR` | Dimensionele beperking: horisontale afstand |
| `DCLINEAR` | `DCLIN` | Dimensionele beperking: horisontale of vertikale afstand, vanwaar jy dit plaas |
| `DCRADIUS` | `DCRAD` | Dimensionele beperking: radius van 'n sirkel of boog |
| `DCVERTICAL` | `DCVER` | Dimensionele beperking: vertikale afstand |
| `DELBLOCKS` |  | Skrap blokke: elke verwysing (ook die genestes, op elke blad) en die definisies |
| `DELCONSTRAINT` | `DELCON` | Verwyder elke beperking (meetkundig en dimensioneel) van die voorwerpe wat jy kies |
| `DELOPENING` |  | Haal 'n deur of venster uit 'n muur. |
| `DESCRIBE` | `DESC` | Sê wat die tekening hou: hoeveel voorwerpe, van watter soort, hoe groot, wat gekies is. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Maak die seleksie leeg (Esc) |
| `DETAILS` | `DET` | Jou firma se eie details, gevind vir wat jy teken: vind, voeg 'n blok by, lys, verwyder, skakel die aanbiedings aan of af. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Teken 'n diagram uit teks: 'n Mermaid-vloeidiagram, 'n PlantUML-komponentdiagram, D2, 'n van-na-lys of draw.io-XML, as blokke en verbindings wat jy kan wysig |
| `DIMALIGNED` | `DAL`, `DIMALI` | Ware afstand tussen twee punte |
| `DIMANGULAR` | `DAN`, `DIMANG` | Hoek tussen twee lyne, van 'n boog, of deur drie punte |
| `DIMARC` | `DAR` | Boogslengte-maatlyn: die afstand langs 'n boog, met die boogsimbool (DAR) |
| `DIMASZ` |  | Maatinstelling: Pylgrootte |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Maatlyne opgestapel vanaf een basislyn |
| `DIMBREAK` | `DBREAK` | Breek maat- en verlengingslyne waar hulle ander voorwerpe kruis (Outo), tussen twee punte (Handmatig), of verwyder die breuke |
| `DIMCONSTRAINT` | `DCON` | Dimensionele beperkings: lineêr, belyn, hoek, radius, deursnee, omskakel |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | 'n Ketting van maatlyne, elk vanaf die einde van die laaste |
| `DIMDEC` |  | Maatinstelling: Desimale plekke |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Deursnee van 'n boog of sirkel |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Maak maatlyne vry van die voorwerpe waaraan hulle vasgemaak is (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Verander maatlynteks (Begin, Nuwe teks, Draai) of skuins die verlengingslyne (Skuins) |
| `DIMEXE` |  | Maatinstelling: Verlenging verby die maatlyn |
| `DIMEXO` |  | Maatinstelling: Afset vanaf die oorsprong |
| `DIMGAP` |  | Maatinstelling: Gaping rondom die teks |
| `DIMINSPECT` |  | Inspeksiemaat: 'n raam rondom die waarde met 'n etiket en hoe gereeld die onderdeel nagegaan word |
| `DIMJOGGED` | `DJO`, `JOG` | Gebreekte radiusmaat: 'n radius wat vanaf 'n nader punt geteken word as die middelpunt ver is (DJO) |
| `DIMJOGLINE` | `DJL` | Voeg 'n breeksimbool by 'n lineêre of belynde maatlyn, om te wys die afstand is nie op skaal geteken nie (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horisontale of vertikale afstand (R vir enige hoek) |
| `DIMLUNIT` |  | Maatinstelling: lengteformaat (1 wetenskaplik, 2 desimaal, 3 ingenieurs, 4 argitektonies, 5 breuk) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinaatmaat: die X- of Y-afstand van 'n punt vanaf die UCS-oorsprong, op 'n leier (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Oorskryf maatveranderlikes op gekose maatlyne sonder om hul styl te verander; Clear sit die styl terug (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius van 'n boog of sirkel |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Bind 'n maatlyn se punte aan voorwerpe, sodat dit volg en weer meet wanneer hulle beweeg (DRE) |
| `DIMSCALE` |  | Maatinstelling: Algemene skaal (groottes × hierdie) |
| `DIMSPACE` |  | Gelyke spasiëring tussen ewewydige maatlyne, gemeet vanaf 'n basismaat (0 belyn hulle, Auto is twee keer die teksHoogte) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Maak, verander, stel as huidig, skrap, pas toe en vergelyk benoemde maatstyle (die dialoog; -DIMSTYLE op die opdragreël) |
| `DIMTEDIT` | `DIMTED` | Skuif maatlynteks na links, regs of die middel van die maatlyn, of draai dit |
| `DIMTEXTUNIT` | `DTU` | Maatteks in mm, cm, m of km, of in die tekening se eie eenhede: die gekose maatlyne, anders nuwe een (DTU) |
| `DIMTXT` |  | Maatinstelling: Teksgrootte |
| `DIST` | `DI` | Afstand en hoek tussen twee punte |
| `DISTRIBUTE` |  | Spasieer die gekose voorwerpe eweredig, sy aan sy of op en af: gelyke stappe tussen middelpunte, of gelyke gapings; die buitenste twee bly |
| `DIVIDE` | `DIV` | DIVIDE (DIV): merkers wat 'n lyn, boog, sirkel, polilyn, spline of ellips in gelyke dele verdeel. Punte, of met Blok 'n blok by elke merker. |
| `DOCUMENTS` | `DOCS` | Maak die Dokumente-paneel oop: merk tekeninge uit en in, hersienings, vrystellingstoestande en goedkeuring vir 'n projekvouer |
| `DOOR` | `DR` | Plaas 'n deur in 'n muur. Die kant wat jy klik is die kant waarheen dit swaai. |
| `DRAWORDER` |  | Verander die tekenvolgorde: bring voorwerpe na voor, stuur hulle agter toe, of plaas hulle bo of onder ander voorwerpe. |
| `DUPLICATE` | `DUP` | 'n Kopie wat met die wyser beweeg: klik om dit neer te sit (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Die tekening se eienskappe: titel, outeur en die res, en jou eie naam- en waarde-pare |
| `DXFOUT` |  | Laai die tekening af as DXF R12 (Stoor hou sy eie formaat) |
| `EATTEDIT` | `DDATTE` | Wysig 'n blokverwysing se attribute: waardes, teks en eienskappe, een attribuut op 'n slag |
| `ELLIPSE` | `EL` | As-eindpunte en die ander halfas |
| `ERASE` | `E`, `DELETE` | Verwyder voorwerpe |
| `EXPLODE` | `X` | Breek polilyne, blokke en maatlyne in hul dele |
| `EXPORT` | `EXP` | Stoor 'n afskrif van die tekening in 'n lêersoort wat 'n byvoeging skryf |
| `EXPORT3D` | `3DEXPORT` | Voer die 3D-model uit: GLB, OBJ of STL |
| `EXPORTPOINTS` | `EXPPTS` | Skryf punte, en blokke se invoegpunte met een attribuut as die beskrywing, na 'n CSV- of TXT-lêer (PNEZD, PENZD of XYZ) vir BIM- en landmeetprogramme |
| `EXTEND` | `EX` | Verleng voorwerpe om ander te ontmoet: klik naby 'n einde, sleep deur verskeie, of Shift+klik om te knip |
| `EXTRIM` |  | EXTRIM: kies een snykant, dan 'n kant. Alles wat die kant kruis, word aan daardie kant geknip. Die stukke wat sou verdwyn, wys soos jy die wyser beweeg. |
| `EXTRUDE` | `EXT` | Ekstrudeer geslote 2D-voorwerpe tot soliede liggame (3D) |
| `FIELD` |  | Plaas 'n veld in 'n teks, 'n tabelsel of 'n attribuut: 'n datum, die lêernaam, die bladnommer, 'n tekeningeienskap, 'n voorwerp se oppervlakte of lengte, of 'n formule |
| `FILLET` | `F` | Rond af of vierkant die hoek tussen twee voorwerpe (R radius, P elke hoek van 'n polilyn, M verskeie) |
| `FIND` |  | Vind en vervang woorde in teks, attribuutwaardes en maatlynteks |
| `FLATTEN` |  | Stel die hoogte (Z) en dikte van die gekose voorwerpe op 0, ook in die blokke wat hulle gebruik. |
| `FLOOR` |  | Kies die vloer om op te teken, voeg een by, of skuif of kopieer die seleksie na een. |
| `FLOORLAYERS` |  | Draai vloere in lae genoem Floor-Layer, vir 'n lêer wat na iemand sonder vloere gaan. |
| `FLOORS` | `FLR` | Maak die Vloere-paneel oop: stapel vloere in een modelruimte. |
| `GCCOINCIDENT` |  | Beperking: twee punte ontmoet, of 'n punt bly op 'n voorwerp |
| `GCCOLLINEAR` |  | Beperking: twee lyne bly op een lyn |
| `GCCONCENTRIC` |  | Beperking: twee sirkels of boë deel 'n middelpunt |
| `GCEQUAL` |  | Beperking: twee lyne bly dieselfde lengte, of twee sirkels/boë dieselfde radius |
| `GCFIX` |  | Beperking: 'n punt of 'n hele voorwerp bly waar dit is |
| `GCHORIZONTAL` |  | Beperking: 'n lyn (of twee punte) bly horisontaal |
| `GCPARALLEL` |  | Beperking: twee lyne bly ewewydig |
| `GCPERPENDICULAR` |  | Beperking: twee lyne bly in regte hoeke |
| `GCSYMMETRIC` |  | Beperking: twee punte, lyne of sirkels spieël mekaar oor 'n lyn |
| `GCTANGENT` |  | Beperking: 'n lyn en 'n sirkel of boog (of twee van hulle) bly raaklyn |
| `GCVERTICAL` |  | Beperking: 'n lyn (of twee punte) bly vertikaal |
| `GDSIN` | `GDS` | Kyk na 'n IC-uitleg ('n GDSII-stroomlêer): elke laag en datatipe as 'n tekeninglaag, plat, in gebruikerseenhede; net vir kyk en meet (laboratoriumproef) |
| `GEOMCONSTRAINT` | `GCON` | Meetkundige beperkings: horisontaal, vertikaal, ewewydig, raaklyn, samevallend… |
| `GLBOUT` |  | Voer die 3D-model uit as GLB (glTF) |
| `GRADIENT` | `GD` | Vul 'n gebied met 'n gradiënt van een of twee kleure |
| `GRID` |  | Stel die rooster: die afstand tussen die lyne, elke Nde lyn as 'n hoofslyn, AAN of AF, of Auto om weer die zoem te volg |
| `GRIDMOVE` | `GM` | Skuif 'n roosterlyn en dra wat daaraan hang: mure rek, kolomme, borde en etikette beweeg, maatlyne volg. |
| `GROUP` | `G` | GROUP (G): gee die gekose voorwerpe 'n naam wat hulle deel. 'n Klik op een van hulle kies dan almal. Enter by die naam maak 'n naamlose groep. |
| `GROUPEDIT` |  | GROUPEDIT: verander 'n groep. Kies een van sy voorwerpe of gee sy Naam, dan Voeg by of Verwyder voorwerpe, HERNOEM dit, verander sy Beskrywing, of sê of 'n klik dit heel kies. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Vul 'n gebied met 'n soliede vul of 'n patroon: klik binne dit, of kies geslote voorwerpe (H) |
| `HATCHEDIT` | `HE` | Verander 'n arsering: patroon, skaal, hoek, oorsprong, en sy skakel na 'n grens. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Maak die grenspolilyne weer uit 'n arsering, aan hom gekoppel of nie |
| `HATCHTOBACK` |  | Stuur elke arsering agter alles anders. |
| `HELP` | `?` | Hierdie lys |
| `HIDEOBJECTS` |  | Versteek die gekose voorwerpe totdat UNISOLATEOBJECTS. Nie saam met die tekening gestoor nie. |
| `HISTORY` | `HIST` | HISTORY (HIST): die weergawes van hierdie tekening — afskrifte wat op hierdie rekenaar gehou word wanneer Studio dit stoor, en die wolk se weergawes — om oop te maak, te herstel, en te vergelyk met wat verander het, in kleur gewys. |
| `ID` |  | Koördinate van 'n punt |
| `IMAGE` | `IM` | Gee CadCraft die prentlêers wat 'n tekening gebruik ('n DWG stoor net waar hulle was). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Plaas 'n prent (PNG of JPEG) uit 'n lêer. |
| `IMAGECLIP` | `ICL` | Knip 'n prent tot 'n reghoek of 'n veelhoek, of verwyder sy knip. |
| `IMPORT` | `IMP` | Voer 'n lêer van 'n soort wat 'n byvoeging lees, in hierdie tekening in |
| `INSERT` | `I`, `DDINSERT` | Plaas 'n blok (S skaal, R draai); F uit 'n DWG/DXF-lêer, L uit die biblioteek |
| `INTERSECT` | `IN` | Hou net wat soliede liggame gemeen het (3D), of die gebied wat 2D-streke deel |
| `ISODRAFT` |  | ISODRAFT: isometriese tekening aan of af, of reguit op die Links-, Bo- of Regs-vlak. Terwyl dit aan is, volg Ortho en poolspoor die vlak se twee asse, die rooster word isometries geteken, en ELLIPSE het Isosirkel. |
| `ISOLATEOBJECTS` | `ISOLATE` | Wys net die gekose voorwerpe; alles anders in hierdie ruimte is versteek totdat UNISOLATEOBJECTS. Nie saam met die tekening gestoor nie. |
| `ISOPLANE` |  | ISOPLANE: kies die isometriese vlak om op te teken: Links, Bo of Regs. Enter gaan na die volgende een, soos F5 doen terwyl isometriese tekening aan is. |
| `JOIN` | `J` | Voeg lyne, boë en polilyne wat end-tot-end ontmoet, in een polilyn saam; lyne op een lyn in een lyn (J) |
| `LASER` | `LASERCUT` | Maak die Laser-paneel oop: stuur lae na 'n lasersnyer of graveerder (GRBL G-kode) |
| `LASSOMODE` |  | Druk en sleep teken 'n lasso (1) of 'n reghoek (0) |
| `LAYDEL` |  | Skrap 'n laag en elke voorwerp daarop (in die model, op blaaie en in blokke) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Maak die laagbestuurder oop: elke laag in een tabel |
| `LAYERPANEL` |  | Wys die lagepaneel |
| `LAYFRZ` |  | Vries die laag van elke voorwerp wat jy kies |
| `LAYGROUP` | `LG` | Groepeer lae in vouers in die Lae-paneel. |
| `LAYISO` |  | Isoleer die lae van die gekose voorwerpe (elke ander laag af) |
| `LAYLOCKFADE` |  | Stel hoeveel voorwerpe op gesluite lae verbleik, en of 'n klik hulle kan kies. |
| `LAYMCUR` |  | Maak die laag van die voorwerp wat jy kies die huidige een |
| `LAYMRG` |  | Voeg lae saam: hul voorwerpe skuif na 'n teikenlaag, en die samegevoegde lae gaan |
| `LAYOFF` |  | Skakel die laag van elke voorwerp wat jy kies af |
| `LAYON` |  | Skakel elke laag aan |
| `LAYOUT` | `LO`, `NEWLAYOUT` | 'n Nuwe blad met 'n titelblok en 'n aansigvenster |
| `LAYTHW` |  | Ontvries elke laag |
| `LAYUNISO` |  | Skakel weer aan die lae wat LAYISO afgeskakel het |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Skakel teks wat met ou Viëtnamese lettertipes getik is (TCVN3 / ABC-lettertipes soos .VnTime, en VNI-lettertipes soos VNI-Times) om na Unicode. So teks word reeds gewys soos dit lees; dit herskryf dit vir altyd, met 'n telling en een ontdoen-stap. |
| `LENGTHEN` | `LEN` | Verleng of verkort lyne, boë en polilyne: met 'n hoeveelheid, 'n persentasie, tot 'n totaal, of deur te sleep (LEN) |
| `LIBRARY` | `LIB` | Die biblioteekpaneel: plaas items, soek opdaterings, erkennings |
| `LIMITS` |  | Stel die tekeninglimiete: AAN, AF, of die linkeronder- en regterbo-hoeke. Met die limiete AAN word punte buite hulle geweier |
| `LINE` | `L` | Reguit segmente, elkeen sy eie voorwerp |
| `LINETYPE` | `LT`, `CELTYPE` | Die lyntipe wat nuwe voorwerpe kry (volgens laag, volgens blok, of 'n benoemde een) |
| `LINKVIEWS` | `SYNCVIEWS` | Skuif en zoem elke ruit saam (verdeelde skerm), om twee tekeninge of hersienings te vergelyk |
| `LISPEDIT` | `VLIDE` | LISPEDIT (of VLIDE) maak die LISP-redigeerder oop: 'n venster om 'n roetine te skryf, te laai en te probeer. Laai in die tekening lees elke vorm, soos die lêer met APPLOAD laai, en maak sy opdragte. Voer seleksie uit evalueer die gekose vorms, of die vorm waarin die kursor is. Die konsole wys wat die roetine gedruk het en elke fout met sy reël. Die ooreenstemmende hakie word gemerk soos jy tik en Enter keep die nuwe reël in. Nuut, Oop en Stoor werk op 'n .lsp-lêer. Die lyste langs die teks wys die funksies wat die roetine definieer, dié wat dit roep wat hierdie LISP nog nie het nie, en elke funksie wat dit het. Die venster blokkeer nie die tekening nie, so 'n roetine kan vir punte vra; Stop of Esc beëindig 'n roetine wat loop. |
| `LIST` | `LI`, `LS` | Beskryf voorwerpe in die geskiedenis |
| `LTSCALE` | `LTS` | Die tekening se lyntipeskaal (elke streep en gaping word daarmee vermenigvuldig) |
| `LWDISPLAY` | `LWT` | Wys of versteek lynwydtes op die skerm (die LWT-knoppie op die statusbalk) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Die lynwydte wat nuwe voorwerpe kry (volgens laag, volgens blok, verstek, of mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | kaartlae onder die modelruimte: die tekening se koördinaatstelsel, teëls, WMS, WMTS, ArcGIS, prente |
| `MASSPROP` |  | MASSPROP: snitvoorwerpeienskappe van streke en geslote voorwerpe: oppervlakte, omtrek, middelpunt, momente en produk van traagheid, traagheidsradiusse en die hoofasse. Presies vir lyne en boë. Dit kan die verslag na 'n tekslêer skryf. |
| `MATCHPROP` | `MA`, `PAINTER` | Pas eienskappe aan: kopieer een voorwerp se laag, kleur en meer na ander (MA) |
| `MEASURE` | `ME` | MEASURE (ME): 'n merker elke gegewe lengte langs 'n lyn, boog, sirkel, polilyn, spline of ellips, vanaf die einde naaste aan jou keuse. Punte, of met Blok 'n blok by elke merker. |
| `MEASUREGEOM` | `MEA` | Meet 'n afstand, 'n radius, 'n hoek of 'n oppervlakte (MEA) |
| `MINSERT` |  | MINSERT: plaas 'n blok in rye en kolomme in een slag. Elkeen is sy eie verwysing, so jy kan enige van hulle skuif of uitvee. |
| `MIRROR` | `MI` | Spieël voorwerpe oor 'n lyn |
| `MLEADER` | `MLD`, `MLEAD` | Multileier: 'n pyl, 'n leier en 'n nota, as een voorwerp (MLD) |
| `MLEADERALIGN` | `MLA` | Lyn multileiers op met een van hulle langs 'n rigting, met gelyke spasiëring, of versprei tussen twee punte (MLA) |
| `MLEADERCOLLECT` | `MLC` | Versamel verskeie multileiers in een: hul blokke in 'n ry of 'n kolom, of hul notas onder mekaar (MLC) |
| `MLEADEREDIT` | `MLE` | Voeg leierlyne by 'n multileier of verwyder hulle; skakel sy inhoud tussen teks en 'n blok (MLE) |
| `MLINE` |  | Teken ewewydige lyne saam, by die hoeke verbind. |
| `MOVE` | `M` | Skuif voorwerpe deur 'n basispunt en 'n tweede punt |
| `MSPACE` | `MS` | Werk op die model deur 'n aansigvenster van die oop blad (of dubbelklik binne die aansigvenster). |
| `MTEXT` | `MT`, `T` | Paragraafteks: sleep die breedte, tik dan op die plek; Enter begin 'n nuwe paragraaf (T) |
| `MVIEW` | `MV` | 'n Aansigvenster op die model, op 'n uitleg |
| `NAMEDVIEW` | `NV`, `VIEWS` | Benoemde aansigte: stoor die aansig op die skerm (of 'n venster) onder 'n naam en gaan weer daarheen (NV) |
| `NCOPY` |  | Kopieer voorwerpe uit 'n blokverwysing of 'n gekoppelde tekening in die tekening, sonder om dit te ontbind. |
| `NEARBY` |  | Sê wat naby die kursor lê, die naaste eerste, met die afstand en die kant. |
| `NEW` |  | Begin 'n nuwe tekening |
| `OBJECTSCALE` | `OBJSCALE` | Annotasieskale van annoterende teks en maatlyne: voeg 'n skaal by, skrap een, voeg die huidige skaal by, of lys hulle (elke aansigvenster wys hulle op die grootte vir sy eie skaal) |
| `OBJOUT` |  | Voer die 3D-model uit as OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Die kantoorstandaard: teksHoogtes op papier, lae, titelblokvelde en sjablone in een rekord. Wys die een wat van krag is en waarvandaan dit kom; Voer 'n .json-rekord in hierdie tekening in, voeg die kantoorlae by wat die tekening ontbreek, lys die titelblokvelde. |
| `OFFSET` | `O` | Ewewydige kopieë op 'n afstand |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hoe OFFSET die gapings by die buitenste hoeke van 'n polilyn sluit. 0 verleng die segmente, 1 voeg 'n boog by, 2 voeg 'n reguit snit by. Vir hierdie sessie onthou. |
| `OLELIST` | `OLES` | Lys die OLE-voorwerpe wat 'n tekening dra en plaas 'n afskrif van een se prent waar jy kies |
| `OPEN` |  | Maak 'n DWG of DXF van hierdie rekenaar oop |
| `OPENIN3D` |  | Maak hierdie tekening in die 3D-modelleringsprogram oop, in 'n nuwe oortjie (niks word opgelaai nie) |
| `OPTIONKEYS` | `OPTKEYS` | Gee opdragopsies jou eie letters (ARRAY.PO, P), in een tekslêer |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Maak die voorwerpvaslegging-kieslys oop: kies watter vaslegging aan is. Ook 'n regsklik op Vasvang in die statusbalk. |
| `OVERKILL` |  | Verwyder duplikaat-voorwerpe en voeg oorvleuelende of end-tot-end-lyne en boë saam, binne 'n toleransie. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Die Parameters-paneel: gebruikerparameters en dimensionele beperkings in een tabel |
| `PARTSLIST` | `PLIST` | 'n Onderdeellys-tabel van elke standaardonderdeel en staalprofiel wat uit die Biblioteek geplaas is |
| `PASTEAREA` | `PAREA` | Plak 'n gebied wat in MarkupCraft gekopieer is (Kopieer gebied) op sy ware grootte, as 'n prent. |
| `PASTEBLOCK` |  | PASTEBLOCK: plak wat jy gekopieer het as een blok. Die blok kry sy eie naam; RENAME gee dit joune. |
| `PASTECLIP` |  | Plak die knipbord: dit volg die kursor, klik waar dit gaan (Ctrl+V) |
| `PASTEORIG` |  | Plak die knipbord by die koördinate waaruit dit gekopieer is (Ctrl+Shift+V) |
| `PDF` |  | Gee CadCraft die PDF-lêers wat die tekening se onderlêers gebruik |
| `PDFADJUST` |  | Verbleik, kontrasteer, monochroom of skakel 'n PDF-onderlêer af |
| `PDFATTACH` | `PDFATT` | Heg 'n PDF-bladsy as 'n onderlêer aan (PDFATTACH) |
| `PDFCLIP` |  | Knip 'n PDF-onderlêer tot 'n reghoek of veelhoek |
| `PDFIMPORT` | `PDFIM` | Maak 'n PDF-bladsy se lyne, vulsels en teks tot tekeninvoorwerpe (PDFIMPORT) |
| `PDFLAYERS` |  | Skakel die lae van 'n PDF-onderlêer aan of af |
| `PEDIT` | `PE` | Wysig 'n polilyn: sluit, open, voeg saam, breedte, pas kromme, spline-kromme, ontkromme, lyntipe-generasie, omkeer; lyne, boë en splines kan eers in polilyne verander word |
| `PENPRESSURE` |  | Of 'n penstreep se druk die lynwydte van wat SKETCHFIX en SKETCHLIVE maak, bepaal (standaard aan). In hierdie blaaier bewaar. |
| `PHOTOSKETCH` | `PSK` | Verander 'n foto van 'n handskets op papier in lyne en boë teen 'n skaal, reguit die perspektief en gee elke penkleur sy eie laag. |
| `PICKSTYLE` |  | PICKSTYLE: of die kies van een voorwerp van 'n groep die hele groep kies (1, die beginstelling) of net daardie voorwerp (0). Vir hierdie sessie onthou. |
| `PLAN` |  | Draai die aansig sodat die UCS X-as (Huidige ucs, 'n gestoorde Ucs, of die Wêreld) op die skerm gelyk is. Niks in die tekening skuif nie. |
| `PLINE` | `PL` | 'n Polilyn van lyn- en boogsegmente |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Druk na PDF: 'n uitleg, of die model op 'n skaal |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plotstyltabelle: stel wat elke kleur as druk (kleur, swart, grys, ink, lynwydte); bewaar saam met die tekening (STYLESMANAGER) |
| `POINT` | `PO` | Puntvoorwerpe |
| `POINTCLOUD` | `PC` | die gehegte puntwolk: snit, hoogte, dikte, kleur, grootte, sigbaar, zoem, ontkoppel |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | heg 'n puntwolk (LAS, LAZ, XYZ, PTS) onder die tekening aan |
| `POLARANG` |  | Die poolspoor-stap in grade (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | 'n Gereelde veelhoek |
| `PRESSPULL` |  | Stoot of trek 'n vlak van 'n soliede liggaam (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Maak die Eienskappe-paneel oop (ook Ctrl+1, of dubbelklik 'n voorwerp) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Vou die Eienskappe-paneel na die rand van die venster |
| `PSPACE` | `PS` | Verlaat die aansigvenster waarin jy werk en gaan terug na die blad (of dubbelklik buite dit). |
| `PUBLISH` | `-PUBLISH` | Druk verskeie of alle blaaie in een PDF (een bladsy en 'n boekmerk per blad) |
| `PURGE` | `PU` | Verwyder blokdefinisies wat niks gebruik nie |
| `QDIM` |  | Vinnige maat: dimensioneer verskeie voorwerpe op een slag (deurlopend, basislyn, getrap, ordinaat, radius of deursnee) |
| `QPMODE` | `QP` | Vinnige eienskappe by die kursor aan of af |
| `QSELECT` | `QS` | Vinnige keuse: elke voorwerp van 'n soort waarvan die laag, kleur, grootte of naam pas (QS) |
| `RASTERSNAP` |  | Skakel vasvang aan die lyne van ingeskandeerde blaaie aan of af. |
| `RAY` |  | Straal: 'n konstruksielyn vanaf 'n punt, eindeloos een rigting. |
| `RECOVER` |  | Maak 'n beskadigde DXF of DWG oop: slaan oor wat nie gelees kan word nie in plaas van die lêer te weier, sê wat oorgeslaan is, en kontroleer en herstel dan die tekening soos AUDIT doen. |
| `RECTANG` | `REC`, `RECTANGLE` | 'n Geslote polilyn uit twee hoeke |
| `REDLINE` | `RDL` | Rooilyn na hersiening: lees 'n MarkupCraft-rooilynpakket, aanvaar of verwerp elke verandering, omwolk die aanvaarde met 'n hersieningslogboek, en stoor die antwoordlêer (RDL) |
| `REDO` |  | Herdoen wat ontdoen is |
| `REFCLOSE` |  | Beëindig die redigering van 'n blok ter plaatse: stoor dit, of gooi die veranderinge weg |
| `REFEDIT` |  | Wysig 'n blok ter plaatse, waar 'n verwysing daarvan sit, met die res van die tekening verbleik; REFCLOSE stoor dit |
| `REGEN` | `RE` | Bou weer wat in hierdie oortjie geteken is uit die tekening |
| `REGENALL` | `REA` | Bou weer wat in elke oortjie, ruit en oop tekening geteken is |
| `REGION` | `REG` | REGION (REG): maak plat gebiede (streke) uit geslote voorwerpe, of uit lyne, boë en polilyne wat 'n lus end-tot-end sluit. UNION, SUBTRACT en INTERSECT kombineer dan streke, en MASSPROP gee hul snitvoorwerpeienskappe. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registreer verskeie skanderings: plaas hulle in een raam deur gekose puntpare of teikens, verfyn met ICP, voer een LAS of E57 uit |
| `REINIT` |  | Laai jou aliaslêer weer |
| `RENAME` | `-RENAME`, `REN` | Hernoem 'n laag of blok (elke voorwerp of verwysing volg) |
| `REVCLOUD` | `RC` | Hersieningswolk: omlyn 'n reghoek, veelhoek, vrye pad of voorwerp (RC) |
| `REVOLVE` | `REV` | Draai geslote 2D-voorwerpe om 'n as tot soliede liggame (3D) |
| `ROTATE` | `RO` | Draai voorwerpe om 'n basispunt |
| `SAMPLES` | `SAMPLE` | Maak een van CadCraft se voorbeeldtekeninge oop ('n argitektoniese stel, 'n soos-gebou) om van te leer |
| `SAVE` | `QSAVE` | Laai die tekening in sy formaat af (DWG of DXF) |
| `SAVEAS` |  | Laai die tekening af as DWG of DXF: kies watter |
| `SAYSEL` |  | Sê wat gekies is, een sin per voorwerp. |
| `SCALE` | `SC` | Skaal voorwerpe om 'n basispunt |
| `SCALELISTEDIT` | `SCALELIST` | Voeg by, wysig en skrap die tekening se eie skale; hulle verskyn in die aansigvenster- en druikskaallyste en word in die lêer gestoor (SCALELIST) |
| `SCANALIGN` | `SCL` | Belyn 'n ingeskandeerde blad na twee punte: skuif, draai en, as jy kies, skaal dit. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Voeg 'n ingeskandeerde tekening in: 'n PNG, JPEG of TIFF (een bladsy of alle bladsye van 'n meerbladsy-lêer) of 'n PDF-bladsy wat 'n prent is. |
| `SCANCLEAN` | `SCC` | Maak 'n ingeskandeerde blad swart-en-wit en verwyder vlekkies. |
| `SCANCROP` | `SCR` | Sny 'n ingeskandeerde blad tot 'n venster. |
| `SCANDESKEW` | `SCD` | Vind die hoek waarteen 'n ingeskandeerde blad se lang lyne lê en draai die blad regop sodra jy die hoek aanvaar. |
| `SCANERASE` | `SCE` | Vee 'n gebied van 'n ingeskandeerde blad uit: 'n reghoek, 'n veelhoek of 'n lasso. |
| `SCANINFO` | `SCI` | Wys 'n ingeskandeerde blad se oorspronklike lêer en die stappe sedertdien. |
| `SCANSCALE` | `SCS` | Skaal 'n ingeskandeerde blad: kies twee punte daarop en tik die ware afstand tussen hulle. |
| `SCANTRACE` | `SCT` | Trek 'n ingeskandeerde blad na lyne en boë op 'n nuwe laag, tot 'n toleransie wat jy stel. Teks en arsering bly as raster. |
| `SELECT` |  | Kies voorwerpe nou (vir P, Vorige, in die volgende opdrag) |
| `SELECTALL` | `AI_SELALL` | Kies elke voorwerp wat jy op hierdie oortjie kan wysig (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Kies elke voorwerp soos die wat jy kies: dieselfde soort, laag en kleur (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Wys die Bladstel-paneel: blaaie uit baie tekeninge, genommer, gepubliseer as een PDF. |
| `SHORTCUTS` | `KEYS` | Gee enige opdrag 'n sleutel van jou eie (Ctrl of Alt met 'n letter, of 'n vrye funksiesleutel), in hierdie blaaier of lessenaarprogram bewaar. |
| `SHXFONTS` | `SHX` | Gee CadCraft SHX-lettertipes uit 'n vouer of lêers, sodat teksstyle wat hulle noem daarin teken (lys, verwyder, omkeer) |
| `SKETCHFIX` | `SKF` | Teken vryhandstrepe; elkeen word 'n skoon lyn, sirkel, boog, reghoek of polilyn, gelyk gemaak en aan die ander verbind. |
| `SKETCHLIVE` | `SKL` | Skets met 'n pen: elke streep word 'n presiese lyn, sirkel, boog of reghoek soos jy die pen optel, vasgevang aan die tekening, met sy grootte om oor te tik. |
| `SPLINE` | `SPL` | Teken 'n spline deur punte (of met 'n beheerveelhoek), of verander 'n polilyn in een |
| `SPLINEDIT` | `SPE` | Wysig 'n spline: pas punte, beheerpunte en gewigte aan, maak oop of toe, keer om, of verander dit na 'n polilyn |
| `SPLIT` |  | Verdeel die tekengebied in ruite (as VPORTS op die model; vanaf 'n blad ook) |
| `STEELMEMBER` | `SMEMBER` | 'n Staallid in 3D uit 'n standaardprofiel: twee punte ('n balk) of 'n basispunt en 'n hoogte (Kolom) |
| `STLOUT` |  | Voer die 3D-model uit as STL (millimeter) |
| `STRETCH` | `S` | Rek: sleep 'n kruisvenster oor die eindes om te skuif; wat binne is, skuif, die res bly (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Teksstyle: die lettertipe, hoogte, breedte en skuinsheid wat nuwe teks kry (die dialoog; -STYLE op die opdragreël) |
| `SUBTRACT` | `SU` | Trek soliede liggame van ander af (3D), of 2D-streke van streke af |
| `SWBOUT` | `SWMACRO` | Laai 'n makro vir SolidWorks (.swb) af wat die model as een beperkte skets herbou |
| `SWEEP` |  | Vee geslote 2D-voorwerpe langs 'n pad (lyn, polilyn, boog, sirkel) tot soliede liggame (3D) |
| `TABLE` | `TB` | Maak 'n tabel: rye en kolomme, of uit sigbladselle op die knipbord of 'n CSV-lêer |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Wysig 'n tabel: tik in 'n sel, voeg rye en kolomme in en skrap hulle, groottes, samevoegde selle, belyning |
| `TABLEEXPORT` |  | Stoor wat 'n tabel wys as 'n CSV-lêer |
| `TABLEPASTE` | `PASTETABLE` | Maak 'n tabel uit sigbladselle op die knipbord |
| `TABLESTYLE` | `TS` | Tabelstyle: teksHoogtes, belyning, kantlyn en rande vir titel-, kop- en datarye |
| `TAGS` |  | Etikette op blokverwysings: definieer 'n etiket (soort, toegelate waardes, blokke waarop dit van toepassing is), stel dit op die gekose verwysings, en lys hulle as 'n skedule wat jy as CSV kan stoor |
| `TEXT` | `DT`, `DTEXT` | Enkelreël-teks; Enter begin die volgende reël |
| `TEXTEDIT` | `ED`, `DDEDIT` | Wysig teks op die plek: kies 'n teks (of dubbelklik een) (ED) |
| `TEXTMASK` | `TMASK` | Plaas 'n agtergrondmasker agter tekste (die tekening se agtergrond of 'n kleur), of haal dit weg. |
| `TEXTTOFRONT` |  | Bring alle teks, maatlyne en leiers voor alles anders. |
| `TOOLBAR` |  | Kies wat die nutsbalkknoppies wys: ikone en teks, net ikone, of net teks (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Plaas die nutsbalk bo, onder, links of regs van die venster |
| `TOOLBARROWS` |  | Kies hoeveel rye die nutsbalk gebruik: wrap om te pas, 2, of 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Maak die balke bo die tekening standaard of kompak |
| `TOUCHCROSSHAIR` | `TCX` | Verskuifde kruisdraad vir tekening met 'n vinger: een vinger beweeg 'n kruisdraad wat bo en langs dit sit, sodat die vinger nie die kies-punt bedek nie. Die vinger optel kies niks; die Klik-knoppie of 'n tik met 'n tweede vinger kies by die kruisdraad, en hou Klik vas terwyl jy beweeg sleep. 'n Lang druk of die Enter-knoppie is Enter. Twee vingers zoem en pan. Opsies: ON, OFF, Auto (aan net waar 'n vinger die enigste wyser is), Distance (afstand), Side (kant). |
| `TOUR` | `TUTORIAL` | Neem die ses-stap eerste-tekening-toer weer |
| `TRIM` | `TR` | Sny voorwerpe terug tot waar ander dit kruis: klik 'n stuk, sleep deur verskeie, of Shift+klik om te verleng |
| `TRIMEXTENDMODE` |  | Hoe TRIM en EXTEND begin: 1 Vinnig (elke voorwerp is 'n snykant of grens), 0 Standaard (kies eers die kante) |
| `TTR` |  | 'n Sirkel raaklyn aan twee voorwerpe, met 'n radius wat jy gee (dieselfde as CIRCLE T). |
| `TURNLEFT` |  | Draai die aansig 90° links (teen die klok in): UCS Z -90, en die aansig volg. Niks in die tekening skuif nie. |
| `TURNRIGHT` |  | Draai die aansig 90° regs (met die klok mee): UCS Z 90, en die aansig volg. Niks in die tekening skuif nie. |
| `TURNWORLD` |  | Terug na die wêreld: UCS Wêreld, en die aansig is weer plat. |
| `TXT2MTXT` | `T2M` | Voeg enkelreël-tekste in een paragraafteks saam, bo na onder. |
| `UCS` |  | Jou eie koördinaatstelsel: 'n oorsprong en 'n X-as (oorsprong, Z-hoek, 3punt, OBject, Vorige, Wêreld, NAmed). Punte wat jy tik, ortho, poolspoor, die rooster en nuwe teks volg dit; die aansig draai sodat sy X-as gelyk is. Niks in die tekening skuif nie. |
| `UNDO` | `U` | Ontdoen die laaste opdrag |
| `UNGROUP` |  | UNGROUP: haal groepe uitmekaar. Kies voorwerpe van die groepe, of gee 'n Naam. Die voorwerpe bly in die tekening. |
| `UNION` | `UNI` | Voeg soliede liggame in een saam (3D), of 2D-streke in een streek |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Wys elke voorwerp wat deur ISOLATEOBJECTS of HIDEOBJECTS versteek is weer. |
| `UNITS` | `UN`, `DDUNITS` | Hoe lengtes gewys en getik word: desimaal, voet en duim, breuke (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Werk die velde weer uit, en kies wanneer hulle hulself opdateer |
| `USDOUT` |  | Voer die 3D-model uit as USD (.usda-teks, .usdc-binêr of 'n .usdz-pakket) |
| `VIEW` | `-VIEW`, `V` | Standaard 3D-aansigte, perspektief of parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Plaas 'n plat 2D-aansig van die 3D-soliede liggame (voor, bo, syaansig of isometries, verborge lyne gestippel) op 'n blad of in die model |
| `VIEWLABEL` | `VL` | 'n Aansigtitel op 'n blad wat sy aansigvenster se aansignaam wys, en daarmee verander. |
| `VOICE` |  | Skakel gepraatte opdragte aan of af. Hulle word op hierdie rekenaar herken. |
| `VPCLIP` |  | Knip 'n bladaansigvenster tot 'n geslote voorwerp of 'n getekende veelhoek; Delete maak dit weer 'n reghoek |
| `VPLAYER` |  | Vries of ontvries lae in sommige aansigvensters net (Freeze, Thaw, Reset), en kies watter lae nuwe aansigvensters begin bevrore (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Verdeel die tekengebied in ruite, elk met sy eie aansig (op 'n blad: 'n aansigvenster, soos MVIEW) |
| `VPVIEW` |  | Stel wat 'n aansigvenster wys: kies 'n venster op die model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visuele styl van die 3D-aansig: skadu, rande, verborge lyn, draadraam, X-straal |
| `WALL` | `WA` | Teken 2D-mure soos 'n polilyn. Hulle verbind, en dra deure en vensters. |
| `WALLARC` | `WARC` | Teken 'n boog van mure. Plan-mure is reguit, so die boog word as kort reguit mure (15 grade elk) geteken wat verbind. |
| `WALLDELSEG` |  | Skrap 'n stuk van 'n muur tussen twee punte. Wat oorbly bly as een of twee mure. |
| `WALLDIM` |  | Tik 'n nuwe waarde vir 'n maatlyn: die muur by sy verre einde beweeg vierkant met homself, die muur by die eerste einde hou, en die mure wat daaraan verbind is volg. |
| `WALLDISJOIN` |  | Kies 'n muur naby een einde om verbindings by daardie einde te verbied: die einde word vierkant geteken en niks volg dit nie. Kies dit weer om hulle toe te laat. |
| `WALLGRID` |  | Sluit 'n muur aan 'n roosterlyn: langs dit, of een einde daarop. Skuif die lyn met GRIDMOVE en die muur volg. |
| `WALLHOLD` |  | Belyn en sluit: 'n muur hou sy plek teen 'n ander muur (op sy lyn, of op die afstand wat dit het). As een beweeg, volg die ander. |
| `WALLHOLDDIM` |  | Sluit die afstand tussen twee ewewydige mure. As een beweeg, volg die ander om dit te hou. |
| `WALLHOLDS` |  | Lys die sluitings op die mure. |
| `WALLJOINS` |  | Gee elke muur van 'n ouer tekening sy id en stoor die verbindings tussen hulle. Dit gebeur ook by die eerste verandering wat jy maak. |
| `WALLJOINSTYLE` |  | Klik 'n hoek waar twee mure end-tot-end ontmoet om te verander hoe dit geteken word: skuinssnit, stomp, vierkant af. T wissel watter muur deurloop. |
| `WALLOFFSET` | `WO` | Skuif 'n muur vierkant met homself oor 'n afstand (die mure wat daaraan verbind is volg), of maak 'n kopie op daardie afstand. |
| `WALLPICK` |  | Maak mure op 'n lyn of polilyn in die tekening, met die lyne wat daaraan verbind is as jy Ja sê. |
| `WALLPOLY` | `WP` | Teken mure rondom 'n gereelde veelhoek van 3 tot 64 kante, soos POLYGON. |
| `WALLRECT` | `WR` | Teken vier verbinde mure uit twee teenoorstaande hoeke, soos RECTANG. |
| `WALLREJOIN` |  | Maak twee dele van 'n muur weer een muur. Die eerste hou sy plek in die tekening. |
| `WALLROT` |  | Teken vier verbinde mure as 'n reghoek wat na enige hoek gedraai is: die eerste kant, dan hoe ver die ander kant uitgaan. |
| `WALLSPLIT` | `WS` | Verdeel 'n muur in twee by 'n punt of waar 'n ander muur kruis. Die dele bly verbind tensy jy 'n gaping of vrye eindes vra. Deure en vensters gaan saam met hul deel. |
| `WALLSPLITGAP` |  | Verdeel 'n muur met 'n gaping: tik die gaping, kies die muur, dan die punt. Die dele hou vrye eindes en kan weer verbind word. |
| `WALLSTRETCH` |  | Rek met 'n venster: muureindes binne dit skuif, mure heeltemal binne skuif heel, en mure wat in hul kante stoot glip saam. |
| `WALLTAN` |  | Sit 'n muur voort met 'n boog wat langs die muur daarvandaan vertrek (as kort reguit mure geteken). |
| `WALLTRACE` |  | Maak mure rondom die kleinste geslote gebied van lyne en mure rondom die punt wat jy klik. |
| `WALLUNHOLD` |  | Haal die sluitings van 'n muur af (en die sluitings van ander mure daaraan). |
| `WBLOCK` | `W`, `-WBLOCK` | Skryf 'n blok, sommige voorwerpe of die hele tekening na 'n nuwe DWG- of DXF-lêer (W) |
| `WEDGE` | `WE` | 'n Wig: twee hoeke en 'n hoogte; dit hel weg van die eerste hoek (3D) |
| `WHEREAMI` | `WHERE` | Sê waar die kursor is. |
| `WHOHAS` |  | Sê wie 'n tekening oop het. CadCraft Studio hou 'n klein slotlêer langs elke oop tekening (Plan.dwg.cclock: wie, sedert wanneer, watter weergawe) en verwyder dit by sluit. Opsies: Current (die oop tekening), File (kies een), FOlder (elke tekening in 'n vouer wat êrens oop is; dit laat Studio ook slotlêers in daardie vouer hou), Path (tik een), Name (die naam wat ander sien). 'n Slot wat vyf minute nie vernuwe is nie, word as verouderd gesê. Nie beskikbaar in 'n blaaier nie. |
| `WINDOW` | `WN` | Plaas 'n venster in 'n muur. |
| `XATTACH` | `XA` | Skakel 'n ander DWG of DXF in hierdie tekening, net-lees gewys (XREF lys en laai hulle weer) |
| `XCLIP` | `XC` | Knip blokverwysings en gekoppelde tekeninge tot 'n reghoek of 'n veelhoek, of verwyder die knip. |
| `XLINE` | `XL` | Konstruksielyn, eindeloos aan albei kante: deur twee punte, horisontaal, vertikaal, teen 'n hoek, halveer 'n hoek, of op 'n afset van 'n lyn. |
| `XREF` | `XR`, `-XREF` | Gekoppelde tekeninge (eksterne verwysings): lys, heg aan, laai weer, bind, ontkoppel |
| `ZOOM` | `Z` | Omvang, of 'n venster |

## Kies voorwerpe-prompt

By enige `Select objects`-prompt: klik voorwerpe, teken vensters (links na regs) en kruisings (regs na links) met twee klikke, of druk en sleep 'n lasso ({{key:Space}} terwyl jy sleep: venster, kruising, heining), {{key:Shift}}+klik om te verwyder, en druk {{key:Enter}} om klaar te maak. Jy kan ook `ALL` (alles), `L` (die laaste voorwerp), `P` (Vorige: wat die laaste opdrag gebruik het), `F` (Heining: voorwerpe wat 'n lyn punte kruis; `U` neem 'n punt terug), `W` (Venster), `C` (Kruising), `R` (Verwyder-modus: keuses haal voorwerpe uit; die prompt lees `Remove objects`) en `A` (Voeg weer by) tik. `?` lys hulle. Hulle word nie in die prompt gewys nie. {{key:Tab}} oor oorvleuelende voorwerpe merk die volgende een; klik om dit te kies. Sien [Kies voorwerpe](topic:select-objects).

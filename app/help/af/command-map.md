---
title: Opdragkaart: wat om te tik
summary: Elke opdrag wat CadCraft het, met sy kort name, A tot Z, saamgestel uit die program self, en die gewoontes van ander tekenprogramme wat verskil.
keywords: opdragkaart, opdragte, aliasse, kort name, kom van, opdraglys, wat om te tik, skrap, sny af, ekwivalent, verskille
from: 3bdfd3e6
---

CadCraft neem die opdragname en kort name oor wat mense van ander tekenprogramme ken: tik `L` vir 'n lyn, `TR` om af te sny, `E` om te skrap. Daar is dus geen vertaaltabel om vir die meeste daarvan te leer nie: die naam wat jy ken, is hier die naam. Die lys hieronder is elke opdrag wat CadCraft het, saamgestel uit die program self. {{key:Enter}} herhaal die laaste een; `HELP` in die opdragreël druk dieselfde lys.

Die paar wat nie dieselfde is nie, of nie gebou is nie:

- **Stoor** laai 'n kopie in die blaaier af ({{cmd:SAVE}}, {{cmd:SAVEAS}}); in CadCraft Studio skryf dit die lêer. Sien [Kom van ander tekensagteware](topic:coming-from).
- **PLOT** maak 'n PDF (ook PNG en SVG), met 'n druk-styltabel; daar is geen bladsyopstelbestuurder nie.
- **DIMSTYLE** en **PEDIT** is gebou; **PEDIT** het geen Redigeer-hoekpunt-opsie nie (handgrepe doen dit).
- **TABLE** is nie gebou nie; {{cmd:XREF}}, {{cmd:SPLINE}} en {{cmd:WBLOCK}} is.
- 'n Roetine se eie opdragte (AutoLISP `C:NAME`) verskyn nadat jy dit met {{cmd:APPLOAD}} laai; hulle word nie hier gelys nie.

## Alle opdragte (398)

| Opdrag | Kort name | Wat dit doen |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Wentel die 3D-aansig met die linkerknoppie |
| `ACCESS` | `AX` | Skakel tekening sonder sig aan of af: resultate word deur jou skermleser uitgespreek, 'n sleutelbord-wyser op die tekening, vasvang-klanke en uitgesproke opdragte. |
| `ALIASEDIT` |  | Redigeer opdragaliasse in een teksleêr (die bekende L, *LINE-formaat) |
| `ALIGN` | `AL` | Skuif en draai voorwerpe sodat bronpunte op bestemmingspunte val (een, twee of drie pare), en skaal hulle as jy wil |
| `ALIGNPANEL` | `ALP` | Maak die Belyn- en versprei-paneel oop |
| `ALIGNTO` |  | Belyn die gekose voorwerpe se linker-, middel-, regter-, bo-, middel- of onderrande, op die keuse, die eerste of laaste gekose voorwerp, of 'n punt |
| `ANNOALLVISIBLE` | `ANNOALL` | Wys annoteerbare voorwerpe op elke skaal, of net waar die aansigvenster se (of die tekening se) skaal in hul lys is |
| `ANNOSCALE` | `CANNOSCALE` | Stel die tekening se annotasieskaal: annoteerbare teks en maatlyne word hergroot sodat hulle op dieselfde grootte druk |
| `APPLOAD` | `AP` | Laai toepassings: LISP-roetines (.lsp) en hul dialoogleêrs (.dcl); die Opstartsuite (AP) |
| `ARC` | `A` | Boog: 3-punt, Begin (S)/Middel (C)/Einde, Begin (S)/Middel (C)/Hoek (A), Begin (S)/Middel (C)/Lengte, Begin (S)/Einde/Hoek (A), Begin (S)/Einde/Rigting, Begin (S)/Einde/Radius, Middel (C)/Begin (S)/Einde, Middel (C)/Begin (S)/Hoek (A), Middel (C)/Begin (S)/Lengte, Gaan voort |
| `AREA` | `AA` | Oppervlakte en omtrek volgens punte of van 'n voorwerp; Voeg by (A) en Trek af (S) hou 'n lopende totaal (AA) |
| `ARRAY` | `AR` | Kopieë in rye en kolomme, of rondom 'n middelpunt (AR) |
| `ARRAYASSOCIATIVITY` |  | Stel of die ARRAY-opdragte skikkings maak wat wysigbaar bly (1) of gewone kopieë (0) |
| `ARRAYCLOSE` |  | Beëindig die redigering van 'n skikking se bronvoorwerpe |
| `ARRAYEDIT` |  | Verander 'n skikking wat met die Assosiatiewe opsie gemaak is: tellings, spasiëring, bronvoorwerpe, een item |
| `ARRAYPATH` |  | Kopieë van voorwerpe langs 'n lyn, boog, polilyn of ander kromme |
| `ARRAYPOLAR` |  | Kopieë rondom 'n middelpunt |
| `ARRAYRECT` |  | Kopieë in rye en kolomme |
| `ASBUILT` | `ASB` | ASBUILT lees die as-gebou-punte wat 'n span gemeet het (CSV / TXT, soos EXPORTPOINTS skryf) en vergelyk hulle met die tekening se punte: binne of buite die toleransie, nie gemeet nie, ekstra. Merk hulle op die laag AS-BUILT en laai 'n CSV-verslag af. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definieer 'n kenmerk ('n etiket waarvoor 'n blok 'n waarde vra) om in 'n blok te plaas (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Redigeer 'n blokverwysing se kenmerkwaardes op die opdragreël, een na die ander (Enter hou 'n waarde) |
| `ATTSYNC` |  | Bring 'n blok se verwysings in lyn met sy kenmerkdefinisies: nuwe bygevoeg met hul standaarde, verwyderde laat val, posisies en teks herstel; waardes behou |
| `AUDIT` |  | Gaan die oop tekening na vir skade: getalle wat nie eindig is nie, voorwerpe sonder grootte, ontbrekende lae, blokke, style en lyntipes, blokke wat hulself bevat, gedeelde id's, gebroke maatlyne en arsering. Lys wat dit vind volgens soort en vra voordat dit regmaak; die reparasie is een ontdoen-stap. |
| `AUNITS` | `ANGUNITS` | Hoe hoeke gewys en getik word: desimale grade, grade-minute-sekondes of rigtings soos N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Tekening-outovolledig aan of af, of lys wat die tekening se patrone nou voorstel. |
| `AUTOCONSTRAIN` |  | Voeg samevallende, horisontale en vertikale beperkings by waar die geometrie reeds naby is |
| `AUTODIM` | `ADIM` | Dimensioneer volgens reëls: algehele grootte, kettings langs die sye, openings, gatdeursnee en roosterspasiëring, sonder om te herhaal wat reeds gedimensioneer is. |
| `AUTOSHEET` | `ASH` | Rangskik blaaie self: kies papier en standaardskale en plaas elke aansig met 'n onderskrif en 'n titelblok. |
| `BATTMAN` |  | Blokkenaamstuurder: volgorde, etikette, versoeke, standaarde en modusse van 'n blok se kenmerke, en dan sy verwysings opgedateer |
| `BCLOSE` |  | Sluit die bloksamesteller: stoor die blok of gooi die veranderinge weg |
| `BCONVERT` |  | BCONVERT vind geometrie wat herhaal en verander dit in blokverwysings. Kies die voorwerpe wat herhaal: elke ander stel voorwerpe in die oop ruimte wat dieselfde geometrie is, verskuif en gedraai deur enige hoek, word gevind, en met Gespieël en Geskaal aangeskakel word ook spieëlbeelde en kopieë op 'n ander grootte gevind. Gee die nuwe blok 'n naam en 'n basispunt; die keuse en elke kopie word verwysings daarna, elk met sy eie rotasie en skaal. Of kies Blok en noem 'n bestaande blok om los kopieë van sy voorwerpe te vind. 'n Kopie moet dieselfde laag, kleur, lyntipe en lynwydte hê tensy Eienskappe op Ignoreer gestel is. Voorwerpe op gesluit lae word met rus gelaat. Een ontdoen-stap. |
| `BEDIT` | `BE` | Bloksamesteller: wysig 'n blok se voorwerpe en kenmerke; BCLOSE stoor (BE) |
| `BLEND` |  | BLEND: 'n spline tussen die eindes van twee oop krommes, by die eindes gekies om saam te voeg. Kontinuïteit (CON): Raaklyn (T) volg albei rigtings, Glad (S) volg ook hoe hulle buig. |
| `BLOCK` | `B`, `BMAKE` | Maak 'n blok van voorwerpe (hulle word een verwysing) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: elke verwysing na een blok word 'n verwysing na 'n ander, op dieselfde plek met dieselfde skaal en rotasie. Waardes van kenmerke wat albei blokke het, word behou. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE wys die Blokke-paneel met die wyser in sy filter. Die paneel wys 'n prentjie van elke blok (die onlangs geplaaste eerste), as 'n lys of 'n rooster; klik op 'n prentjie of sleep dit na die tekening om die blok met INSERT te plaas. Voeg onder Biblioteke 'n eie DWG- of DXF-leêr by: sy blokke word met prente gelys en word na hierdie tekening gekopieer wanneer jy een plaas. In CadCraft Studio kan 'n gids met tekeninge ook bygevoeg word, en leêrs en gidse word onthou. |
| `BOMEDIT` | `BOMCOLUMNS` | 'n Materiaallystabel se kolomme, groepering, sortering, titel, totale en opmerkings |
| `BOMEXPORT` |  | Stoor 'n materiaallystabel as 'n .csv-leêr |
| `BOMTABLE` | `BOM` | 'n Lewendige materiaallystabel van een sone, of van die hele tekening |
| `BOMUPDATE` |  | Werk elke materiaallystabel nou op, ook die bevrore |
| `BOMZONE` | `BZONE` | 'n Benoemde gebied van die tekening vir 'n materiaallys: twee hoeke, 'n veelhoek, of 'n geslote voorwerp se omtrek |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): kies 'n punt binne 'n geslote gebied en kry 'n geslote polilyn daarom. Boë bly boë. Eilande lyn ook die gebiede binne dit af. |
| `BOX` |  | 'n Boks: twee hoeke en 'n hoogte (3D) |
| `BPARAMETER` | `BPARAM` | Nog nie gebou nie: 'n parameter (soos Sigbaarheid) by 'n blok voeg. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokparameters: benoemde parameters met formules, en verskeie sigbaarheidsparameters in een blok. Werk in die bloksamesteller (ken die gekose voorwerpe aan 'n toestand toe) en op 'n gekose verwysing (sy eie waardes en toestande). |
| `BREAK` | `BR` | Breek 'n lyn, boog, sirkel of polilyn tussen twee punte (BR) |
| `BREAKATPOINT` |  | Verdeel 'n lyn, boog of polilyn in twee by 'n punt |
| `BREAKLINE` |  | Teken 'n lyn met 'n breeksimbool; sy grootte en die verlenging verby die eindes word onthou. |
| `BREPLACE` |  | BREPLACE ruil een blok vir 'n ander. Gekies: kies blokverwysings en noem die blok om eerder te gebruik. Alles: noem 'n blok en sy vervanging, en elke verwysing in elke ruimte en binne ander blokke verander. 'n Verwysing hou sy plek, skaal, rotasie en laag, en die waardes van kenmerke wat albei blokke het; waardes waarvoor die nuwe blok geen plek het nie, word laat val en genoem. |
| `BSEARCH` |  | BSEARCH vind blokke. Naam: deel van 'n blok se naam, of 'n patroon met * en ?. Kenmerk: 'n waarde (of TAG=waarde) wat deur 'n verwysing se kenmerke gehou word. Geometrie: kies voorwerpe of een blokverwysing, en die blokke waarvan die vorm minstens 85% eners is, word gelys, beste eerste; grootte, rotasie en spieëling tel nie. Die verwysings wat in die oop ruimte gevind word, word gekies, gereed vir die volgende opdrag. |
| `BURST` |  | Ontbind blokverwysings en hou wat hul kenmerke sê: elke waarde word teks op die kenmerk se laag. |
| `BVHIDE` | `BVH` | In die bloksamesteller: versteek voorwerpe in die huidige sigbaarheidstoestand. |
| `BVSHOW` | `BVSH` | In die bloksamesteller: wys voorwerpe wat die huidige sigbaarheidstoestand versteek (hulle wys vervaag om te kies). |
| `BVSTATE` | `BVS` | In die bloksamesteller, op 'n blok met sigbaarheidstoestande: skakel na 'n toestand, of voeg een by, hernoem of skrap een. |
| `CAL` |  | Bereken 'n lengte of getal: + − * / en hakies, soos jy dit enige plek tik |
| `CENTERLINE` | `CL` | Middellyn tussen twee lyne: halfpad tussen hulle, of langs die halveerlyn as hulle ontmoet (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Middelmerk: 'n kruis in die middel van 'n sirkel of boog, met middellyne tot net verby (CM) |
| `CHAMFER` | `CHA` | Skuinskant die hoek tussen twee lyne (Afstand (D): twee afstande; Lengte en hoek (A); Polilyn (P): elke hoek van 'n polilyn) |
| `CHSPACE` |  | CHSPACE: skuif voorwerpe tussen 'n blad en die model deur 'n aansigvenster. Hulle word geskaal en gedraai sodat hulle van die ander kant dieselfde lyk. Op 'n blad gaan hulle na die model; terwyl jy deur 'n aansigvenster werk (MSPACE), kom hulle na die blad. |
| `CIRCLE` | `C` | Middel en radius, deursnee, 2 of 3 punte |
| `CLASS` |  | Plaas die gekose voorwerpe in 'n klas, of stel met niks gekies die aktiewe klas (? lys hulle) |
| `CLASSES` | `CLS` | Die Klasse-paneel: klasse sorteer voorwerpe oor lae; wys, versteek en stileer hulle, en oorskryf hulle per aansigvenster (CLS) |
| `COMMANDLINE` | `CMDLINE` | Dok of maak die opdragreël los, maak dit een reël, stel sy geskiedenislyne, of maak die geskiedenis oop (F2) |
| `COMPARESETTINGS` | `CMPSET` | Vergelyk maatstyle, teksstyle, lae, blaaie of eenhede: twee in hierdie tekening, of hierdie tekening teen 'n ander oop een, en kopieer 'n waarde oor. |
| `CONSTRAINTBAR` | `CBAR` | Wys of versteek die beperkingbalke (Wys alles / Versteek alles, of per voorwerp) |
| `COPY` | `CO`, `CP` | Kopieer voorwerpe, so dikwels as jy klik |
| `COPYBASE` |  | Kopieer voorwerpe na die knipbord met 'n basispunt wat jy kies |
| `COPYCLIP` |  | Kopieer voorwerpe na die knipbord (Ctrl+C); PASTECLIP plaas hulle |
| `COUNT` | `BCOUNT` | Tel blokverwysings: kies een om elke verwysing van sy blok te kies en te tel |
| `COUNTTABLE` |  | Plaas 'n tabel van bloktellings |
| `CREDITS` |  | Sit die Biblioteek-krediete in die tekening as 'n tabel. Voer dit weer uit om die tabel op te dateer uit die voorwerpe wat nou in die tekening is. |
| `CURSORSIZE` |  | Die kruisdraad se grootte: 100 loop van rand tot rand oor die tekening (Instellings › Wyser › Volskerm) |
| `CUTCLIP` |  | Sny voorwerpe na die knipbord (Ctrl+X): kopieer, dan skrap |
| `CYLINDER` | `CYL` | 'n Silinder: middel, radius en hoogte (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Lys blokke, hul kenmerke en voorwerpeienskappe as 'n tabel in die tekening of 'n CSV-leêr |
| `DATALINK` | `DL` | 'n Tabel uit 'n CSV-leêr wat die leêr onthou, sodat dit weer gelees kan word |
| `DATALINKUPDATE` | `DLU` | Lees 'n datakoppeling se leêr weer en vul sy tabelle weer |
| `DCALIGNED` | `DCALI` | Dimensionele beperking: ware afstand tussen punte, 'n punt en 'n lyn, of twee lyne |
| `DCANGULAR` | `DCANG` | Dimensionele beperking: hoek tussen twee lyne, of van 'n boog |
| `DCCONVERT` |  | Verander maatlyne wat op beperkbare geometrie getrek is, in dimensionele beperkings |
| `DCDIAMETER` | `DCDIA` | Dimensionele beperking: deursnee van 'n sirkel of boog |
| `DCDISPLAY` |  | Wys of versteek dimensionele beperkings op die tekening |
| `DCHORIZONTAL` | `DCHOR` | Dimensionele beperking: horisontale afstand |
| `DCLINEAR` | `DCLIN` | Dimensionele beperking: horisontale of vertikale afstand, vanaf waar jy dit plaas |
| `DCRADIUS` | `DCRAD` | Dimensionele beperking: radius van 'n sirkel of boog |
| `DCVERTICAL` | `DCVER` | Dimensionele beperking: vertikale afstand |
| `DELBLOCKS` |  | Skrap blokke: elke verwysing (ook geneste, op elke blad) en die definisies |
| `DELCONSTRAINT` | `DELCON` | Verwyder elke beperking (geometries en dimensioneel) van die voorwerpe wat jy kies |
| `DELOPENING` |  | Haal 'n deur of venster uit 'n muur. |
| `DESCRIBE` | `DESC` | Sê wat die tekening bevat: hoeveel voorwerpe, van watter soort, hoe groot, wat gekies is. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Maak die keuse skoon (Esc) |
| `DETAILS` | `DET` | Jou firma se eie detail, gevind vir wat jy teken: soek, voeg 'n blok by, lys, verwyder, skakel die aanbiedings aan of af. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Teken 'n diagram uit teks: 'n Mermaid-vloeidiagram, 'n PlantUML-komponentdiagram, D2, 'n van-na-lys of draw.io-XML, as blokke en verbindings wat jy kan wysig |
| `DIMALIGNED` | `DAL`, `DIMALI` | Ware afstand tussen twee punte |
| `DIMANGULAR` | `DAN`, `DIMANG` | Hoek tussen twee lyne, van 'n boog, of deur drie punte |
| `DIMARC` | `DAR` | Boogsdimensie: die afstand langs 'n boog, met die boogsimbool (DAR) |
| `DIMASZ` |  | Dimensie-instelling: Pylgrootte |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Dimensies gestapel vanaf een basislyn |
| `DIMBREAK` | `DBREAK` | Breek maatlyne en verlengingslyne waar hulle ander voorwerpe kruis (Outo), tussen twee punte (Handmatig), of verwyder die breuke |
| `DIMCONSTRAINT` | `DCON` | Dimensionele beperkings: lineêr, uitgelyn, hoekig, radius, deursnee, omskakel |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | 'n Ketting van dimensies, elk vanaf die einde van die laaste |
| `DIMDEC` |  | Dimensie-instelling: Desimale plekke |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Deursnee van 'n boog of sirkel |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Maak dimensies los van die voorwerpe waaraan hulle vasgemaak is (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Verander maattekst (Tuis, Nuwe teks, Draai) of skuins die verlengingslyne (Skuins) |
| `DIMEXE` |  | Dimensie-instelling: Verlenging verby die maatlyn |
| `DIMEXO` |  | Dimensie-instelling: Verskuiwing vanaf die oorsprong |
| `DIMGAP` |  | Dimensie-instelling: Gaping rondom die teks |
| `DIMINSPECT` |  | Inspeksiedimensie: 'n raam rondom die waarde met 'n etiket en hoe gereeld die onderdeel nagegaan word |
| `DIMJOGGED` | `DJO`, `JOG` | Geknikte radiusdimensie: 'n radius getrek vanaf 'n nader punt as die middel ver is (DJO) |
| `DIMJOGLINE` | `DJL` | Voeg 'n knik-simbool by 'n lineêre of uitgelynde maatlyn, om te wys dat die afstand nie op skaal getrek is nie (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horisontale of vertikale afstand (R vir enige hoek) |
| `DIMLUNIT` |  | Dimensie-instelling: lengteformaat (1 wetenskaplik, 2 desimaal, 3 ingenieurs, 4 argitektonies, 5 breuk) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinaatdimensie: die X- of Y-afstand van 'n punt vanaf die UCS-oorsprong, op 'n leier (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Oorskryf dimensieveranderlikes op gekose dimensies sonder om hul styl te verander; Maak skoon stel die styl terug (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius van 'n boog of sirkel |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Vas 'n dimensie se punte aan voorwerpe, sodat dit volg en weer meet wanneer hulle beweeg (DRE) |
| `DIMSCALE` |  | Dimensie-instelling: Algehele skaal (groottes × hierdie) |
| `DIMSPACE` |  | Gelyke spasiëring tussen parallelle dimensies, gemeet vanaf 'n basisdimensie (0 belyn hulle, Outo is twee keer die teksthoogte) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Maak, verander, stel as huidig, verwyder, pas toe en vergelyk benoemde maatstyle (die dialoog; -DIMSTYLE op die opdragreël) |
| `DIMTEDIT` | `DIMTED` | Skuif maattekst na links, regs of die middel van die maatlyn, of draai dit |
| `DIMTEXTUNIT` | `DTU` | Maattekst in mm, cm, m of km, of in die tekening se eie eenhede: die gekose dimensies, anders nuwes (DTU) |
| `DIMTXT` |  | Dimensie-instelling: Teksthoogte |
| `DIST` | `DI` | Afstand en hoek tussen twee punte |
| `DISTRIBUTE` |  | Spasieer die gekose voorwerpe gelyk, sy aan sy of op en af: gelyke stappe tussen middelpunte, of gelyke gapings; die buitenste twee bly |
| `DIVIDE` | `DIV` | DIVIDE (DIV): merkers wat 'n lyn, boog, sirkel, polilyn, spline of ellips in gelyke dele verdeel. Punte, of met Blok 'n blok by elke merker. |
| `DOCUMENTS` | `DOCS` | Maak die Dokumente-paneel oop: check tekeninge uit en in, hersienings, vrystellingstoestande en goedkeuring vir 'n projekgids |
| `DOOR` | `DR` | Plaas 'n deur in 'n muur. Die kant waarop jy klik, is die kant waarheen dit swaai. |
| `DRAWORDER` |  | Verander die tekenvolgorde: bring voorwerpe na voor, stuur hulle agter, of plaas hulle bo of onder ander voorwerpe. |
| `DUPLICATE` | `DUP` | 'n Kopie wat met die wyser beweeg: klik om dit neer te sit (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Die tekening se eienskappe: titel, outeur en die res, en jou eie naam- en waarde-pare |
| `DXFOUT` |  | Laai die tekening af as DXF R12 (Stoor hou sy eie formaat) |
| `EATTEDIT` | `DDATTE` | Redigeer 'n blokverwysing se kenmerke: waardes, teks en eienskappe, een kenmerk op 'n slag |
| `ELLIPSE` | `EL` | Asendpunte en die ander halwe-as |
| `ERASE` | `E`, `DELETE` | Verwyder voorwerpe |
| `EXPLODE` | `X` | Breek polilyne, blokke en dimensies in hul dele |
| `EXPORT` | `EXP` | Stoor 'n kopie van die tekening in 'n leêrtipe wat 'n byvoeging skryf |
| `EXPORT3D` | `3DEXPORT` | Voer die 3D-model uit: GLB, OBJ of STL |
| `EXPORTPOINTS` | `EXPPTS` | Skryf punte, en blokke se invoegpunte met een kenmerk as die beskrywing, na 'n CSV- of TXT-leêr (PNEZD, PENZD of XYZ) vir BIM- en opmetingsprogramme |
| `EXTEND` | `EX` | Verleng voorwerpe om ander te ontmoet: klik naby 'n einde, sleep deur verskeie, of Shift+klik om af te sny |
| `EXTRIM` |  | EXTRIM: kies een snykant, dan 'n kant. Alles wat die kant kruis, word op daardie kant afgesny. Die stukke wat sou verdwyn, wys soos jy die wyser beweeg. |
| `EXTRUDE` | `EXT` | Ekstrudeer geslote 2D-voorwerpe na soliede liggame (3D) |
| `FIELD` |  | Plaas 'n veld in 'n teks, 'n tabelsel of 'n kenmerk: 'n datum, die leêrnaam, die bladnommer, 'n tekeningeienskap, 'n voorwerp se oppervlakte of lengte, of 'n formule |
| `FILLET` | `F` | Rond af of vierkant die hoek tussen twee voorwerpe (R radius, P elke hoek van 'n polilyn, M verskeie) |
| `FIND` |  | Vind en vervang woorde in teks, kenmerkwaardes en maatteks |
| `FLATTEN` |  | Stel die hoogte (Z) en dikte van die gekose voorwerpe op 0, ook in die blokke wat hulle gebruik. |
| `FLOOR` |  | Kies die vloer om op te teken, voeg een by, of skuif of kopieer die keuse na een. |
| `FLOORLAYERS` |  | Skakel vloere om na lae genaamd Vloer-Laag, vir 'n lêer wat na iemand sonder vloere gaan. |
| `FLOORS` | `FLR` | Maak die Vloere-paneel oop: stapel vloere in een modelruimte. |
| `GCCOINCIDENT` |  | Beperking: twee punte ontmoet, of 'n punt bly op 'n voorwerp |
| `GCCOLLINEAR` |  | Beperking: twee lyne bly op een lyn |
| `GCCONCENTRIC` |  | Beperking: twee sirkels of boë deel 'n middelpunt |
| `GCEQUAL` |  | Beperking: twee lyne bly dieselfde lengte, of twee sirkels/boë dieselfde radius |
| `GCFIX` |  | Beperking: 'n punt of 'n hele voorwerp bly waar dit is |
| `GCHORIZONTAL` |  | Beperking: 'n lyn (of twee punte) bly horisontaal |
| `GCPARALLEL` |  | Beperking: twee lyne bly parallel |
| `GCPERPENDICULAR` |  | Beperking: twee lyne bly in regte hoeke |
| `GCSYMMETRIC` |  | Beperking: twee punte, lyne of sirkels spieël mekaar oor 'n lyn |
| `GCTANGENT` |  | Beperking: 'n lyn en 'n sirkel of boog (of twee van hulle) bly raaklyn |
| `GCVERTICAL` |  | Beperking: 'n lyn (of twee punte) bly vertikaal |
| `GDSIN` | `GDS` | Sien 'n IC-uitleg ('n GDSII-stroomleêr): elke laag en datatipe as 'n tekeninglaag, plat, in gebruikerseenhede; net vir kyk en meting (laboratoriumtoets) |
| `GEOMCONSTRAINT` | `GCON` | Geometriese beperkings: horisontaal, vertikaal, parallel, raaklyn, samevallend… |
| `GLBOUT` |  | Voer die 3D-model uit as GLB (glTF) |
| `GRADIENT` | `GD` | Vul 'n gebied met 'n gradiënt van een of twee kleure |
| `GRIDMOVE` | `GM` | Skuif 'n roosterlyn en neem wat daaraan hang saam: mure rek, kolomme, borrels en etikette skuif, dimensies volg. |
| `GROUP` | `G` | GROUP (G): gee die gekose voorwerpe 'n naam wat hulle deel. 'n Klik op een van hulle kies dan almal. Enter by die naam maak 'n ongenoemde groep. |
| `GROUPEDIT` |  | GROUPEDIT: verander 'n groep. Kies een van sy voorwerpe of gee sy Naam, dan Voeg voorwerpe by of Verwyder, HERnoem dit, verander sy Beskrywing, of sê of 'n klik dit heel kies. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Vul 'n gebied met 'n soliede vulsel of 'n patroon: klik binne dit, of kies geslote voorwerpe (H) |
| `HATCHEDIT` | `HE` | Verander 'n arsering: patroon, skaal, hoek, oorsprong, en sy skakel na 'n grens. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Maak die grenspolilyne weer uit 'n arsering, gekoppel daaraan of nie |
| `HATCHTOBACK` |  | Stuur elke arsering agter alles anders. |
| `HELP` | `?` | Hierdie lys |
| `HIDEOBJECTS` |  | Versteek die gekose voorwerpe tot UNISOLATEOBJECTS. Nie saam met die tekening gestoor nie. |
| `HISTORY` | `HIST` | HISTORY (HIST): die weergawes van hierdie tekening — kopieë wat op hierdie rekenaar gehou word wanneer Studio dit stoor, en die wolk se weergawes — om oop te maak, te herstel, en te vergelyk met wat verander het, in kleur gewys. |
| `ID` |  | Koördinate van 'n punt |
| `IMAGE` | `IM` | Gee CadCraft die prentleêrs wat 'n tekening gebruik (DWG stoor net waar hulle was). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Plaas 'n prent (PNG of JPEG) uit 'n leêr. |
| `IMAGECLIP` | `ICL` | Knip 'n prent tot 'n reghoek of 'n veelhoek, of verwyder sy knip. |
| `IMPORT` | `IMP` | Voer 'n leêr van 'n soort wat 'n byvoeging lees, in hierdie tekening in |
| `INSERT` | `I`, `DDINSERT` | Plaas 'n blok (S skaal, R draai); F uit 'n DWG/DXF-leêr, L uit die biblioteek |
| `INTERSECT` | `IN` | Hou net wat soliede liggame gemeen het (3D), of die gebied wat 2D-streke deel |
| `ISODRAFT` |  | ISODRAFT: isometriese tekening aan of af, of reguit op die Links-, Bo- of Regs-vlak. Terwyl dit aan is, volg Orto en polêre opsporing die vlak se twee asse, word die rooster isometries getrek, en ELLIPSE het Isosirkel. |
| `ISOLATEOBJECTS` | `ISOLATE` | Wys net die gekose voorwerpe; alles anders in hierdie ruimte is versteek tot UNISOLATEOBJECTS. Nie saam met die tekening gestoor nie. |
| `ISOPLANE` |  | ISOPLANE: kies die isometriese vlak om op te teken: Links, Bo of Regs. Enter gaan na die volgende een, soos F5 doen terwyl isometriese tekening aan is. |
| `JOIN` | `J` | Verbind lyne, boë en polilyne wat end-tot-end ontmoet tot een polilyn; lyne op een lyn tot een lyn (J) |
| `LASER` | `LASERCUT` | Maak die Laser-paneel oop: stuur lae na 'n lasersnyer of graveerder (GRBL G-kode) |
| `LASSOMODE` |  | Druk en sleep trek 'n lasso (1) of 'n reghoek (0) |
| `LAYDEL` |  | Skrap 'n laag en elke voorwerp daarop (in die model, op blaaie en in blokke) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Maak die Laagbestuurder oop: elke laag in een tabel |
| `LAYERPANEL` |  | Wys die lae-paneel |
| `LAYFRZ` |  | Vries die laag van elke voorwerp wat jy kies |
| `LAYGROUP` | `LG` | Groepeer lae in vouers in die lae-paneel. |
| `LAYISO` |  | Isoleer die lae van die gekose voorwerpe (elke ander laag af) |
| `LAYLOCKFADE` |  | Stel hoeveel voorwerpe op gesluit lae vervaag, en of 'n klik hulle kan kies. |
| `LAYMCUR` |  | Maak die laag van die voorwerp wat jy kies die huidige laag |
| `LAYMRG` |  | Voeg lae saam: hul voorwerpe beweeg na 'n teiken-laag, en die saamgevoegde lae gaan weg |
| `LAYOFF` |  | Skakel die laag van elke voorwerp wat jy kies af |
| `LAYON` |  | Skakel elke laag aan |
| `LAYOUT` | `LO`, `NEWLAYOUT` | 'n Nuwe blad met 'n titelblok en 'n aansigvenster |
| `LAYTHW` |  | Ontvries elke laag |
| `LAYUNISO` |  | Skakel weer aan die lae wat LAYISO afgeskakel het |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Skakel teks wat met ou Viëtnamese lettertipes getik is (TCVN3 / ABC-lettertipes soos .VnTime, en VNI-lettertipes soos VNI-Times) na Unicode om. Sulke teks word al wys soos dit lees; dit herskryf dit vir altyd, met 'n telling en een ontdoen-stap. |
| `LENGTHEN` | `LEN` | Verleng of verkort lyne, boë en polilyne: met 'n hoeveelheid, 'n persentasie, tot 'n totaal, of deur te sleep (LEN) |
| `LIBRARY` | `LIB` | Die biblioteekpaneel: plaas items, kyk vir opdaterings, krediete |
| `LIMITS` |  | Stel die tekeninggrense: AAN, UIT, of die linkeronder- en regteronderhoeke. Met die grense AAN word punte buite hulle geweier |
| `LINE` | `L` | Reguit segmente, elkeen sy eie voorwerp |
| `LINETYPE` | `LT`, `CELTYPE` | Die lyntipe wat nuwe voorwerpe kry (volgens laag, volgens blok, of 'n benoemde een) |
| `LINKVIEWS` | `SYNCVIEWS` | Skuif en zoem elke ruit saam (verdeelde skerm), om twee tekeninge of hersienings te vergelyk |
| `LISPEDIT` | `VLIDE` | LISPEDIT (of VLIDE) maak die LISP-redigeerder oop: 'n venster om 'n roetine te skryf, te laai en te probeer. Laai in die tekening lees elke vorm, soos die leêr met APPLOAD laai, en maak sy opdragte. Voer keuse uit evalueer die gekose vorms, of die vorm waarin die wyser is. Die konsole wys wat die roetine gedruk het en elke fout met sy reël. Die ooreenstemmende hakie word gemerk soos jy tik, en Enter maak die nuwe reël in. Nuut, Maak oop en Stoor werk op 'n .lsp-leêr. Die lyste langs die teks wys die funksies wat die roetine definieer, die wat dit roep en wat hierdie LISP nog nie het nie, en elke funksie wat dit het. Die venster blokkeer nie die tekening nie, so 'n roetine kan vir punte vra; Stop of Esc beëindig 'n roetine wat loop. |
| `LIST` | `LI`, `LS` | Beskryf voorwerpe in die geskiedenis |
| `LTSCALE` | `LTS` | Die tekening se lyntipe-skaal (elke streep en gaping word daarmee vermenigvuldig) |
| `LWDISPLAY` | `LWT` | Wys of versteek lynwydtes op die skerm (die LWT-knoppie in die statusbalk) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Die lynwydte wat nuwe voorwerpe kry (volgens laag, volgens blok, standaard, of mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kaartlae onder die modelruimte: die tekening se koördinaatstelsel, teëls, WMS, WMTS, ArcGIS, prente |
| `MASSPROP` |  | MASSPROP: snitseienskappe van streke en geslote voorwerpe: oppervlakte, omtrek, swaartepunt, momente en produk van traagheid, draairadiusse en die hoofasse. Presies vir lyne en boë. Dit kan die verslag na 'n teksleêr skryf. |
| `MATCHPROP` | `MA`, `PAINTER` | Pas eienskappe aan: kopieer een voorwerp se laag, kleur en meer na ander (MA) |
| `MEASURE` | `ME` | MEASURE (ME): 'n merker elke gegewe lengte langs 'n lyn, boog, sirkel, polilyn, spline of ellips, vanaf die einde naaste aan jou keuse. Punte, of met Blok 'n blok by elke merker. |
| `MEASUREGEOM` | `MEA` | Meet 'n afstand, 'n radius, 'n hoek of 'n oppervlakte (MEA) |
| `MINSERT` |  | MINSERT: plaas 'n blok in rye en kolomme in een slag. Elkeen is sy eie verwysing, so jy kan enige van hulle skuif of skrap. |
| `MIRROR` | `MI` | Spieël voorwerpe oor 'n lyn |
| `MLEADER` | `MLD`, `MLEAD` | Multileier: 'n pyl, 'n leier en 'n nota, as een voorwerp (MLD) |
| `MLEADERALIGN` | `MLA` | Belyn multileiers met een van hulle langs 'n rigting, op gelyke spasiëring, of versprei tussen twee punte (MLA) |
| `MLEADERCOLLECT` | `MLC` | Versamel verskeie multileiers in een: hul blokke in 'n ry of kolom, of hul notas onder mekaar (MLC) |
| `MLEADEREDIT` | `MLE` | Voeg leierlyne by 'n multileier of verwyder hulle; wissel sy inhoud tussen teks en 'n blok (MLE) |
| `MLINE` |  | Teken parallelle lyne saam, verbind by die hoeke. |
| `MOVE` | `M` | Skuif voorwerpe volgens 'n basispunt en 'n tweede punt |
| `MSPACE` | `MS` | Werk op die model deur 'n aansigvenster van die oop blad (of dubbelklik binne die aansigvenster). |
| `MTEXT` | `MT`, `T` | Paragraaftekst: sleep sy breedte, tik dan op die plek; Enter begin 'n nuwe paragraaf (T) |
| `MVIEW` | `MV` | 'n Aansigvenster na die model, op 'n uitleg |
| `NAMEDVIEW` | `NV`, `VIEWS` | Benoemde aansigte: stoor die aansig op die skerm (of 'n venster) onder 'n naam en gaan daarna terug (NV) |
| `NCOPY` |  | Kopieer voorwerpe uit 'n blokverwysing of 'n gekoppelde tekening na die tekening, sonder om dit te ontbind. |
| `NEARBY` |  | Sê wat naby die wyser lê, die naaste eerste, met die afstand en die kant. |
| `NEW` |  | Begin 'n nuwe tekening |
| `OBJECTSCALE` | `OBJSCALE` | Annotasieskale van annoteerbare teks en dimensies: voeg 'n skaal by, verwyder een, voeg die huidige skaal by, of lys hulle (elke aansigvenster wys hulle op die grootte vir sy eie skaal) |
| `OBJOUT` |  | Voer die 3D-model uit as OBJ |
| `OFFSET` | `O` | Parallelle kopieë op 'n afstand |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hoe OFFSET die gapings by die buitenste hoeke van 'n polilyn sluit. 0 verleng die segmente, 1 voeg 'n boog by, 2 voeg 'n reguit snit by. Behou vir hierdie sessie. |
| `OLELIST` | `OLES` | Lys die OLE-voorwerpe wat 'n tekening dra en plaas 'n kopie van een se prent waar jy kies |
| `OPEN` |  | Maak 'n DWG of DXF van hierdie rekenaar oop |
| `OPENIN3D` |  | Maak hierdie tekening oop in die 3D-modelleringsprogram, in 'n nuwe oortjie (niks word opgelaai nie) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Maak die voorwerpvasvang-kieslys oop: kies watter vasvange aan is. Ook 'n regsklik op Vasvang in die statusbalk. |
| `OVERKILL` |  | Skrap duplikaatvoorwerpe en voeg oorvleuelende of end-tot-end lyne en boë saam, binne 'n toleransie. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Die Parameters-paneel: gebruikersparameters en dimensionele beperkings in een tabel |
| `PARTSLIST` | `PLIST` | 'n Onderdeellys-tabel van elke standaardonderdeel en staalprofiel wat uit die Biblioteek geplaas is |
| `PASTEAREA` | `PAREA` | Plak 'n gebied wat in MarkupCraft gekopieer is (Kopieer gebied) op sy ware grootte, as 'n prent. |
| `PASTEBLOCK` |  | PASTEBLOCK: plak wat jy gekopieer het as een blok. Die blok kry sy eie naam; HERNOEM gee dit joune. |
| `PASTECLIP` |  | Plak die knipbord: dit volg die wyser, klik waar dit gaan (Ctrl+V) |
| `PASTEORIG` |  | Plak die knipbord by die koördinate waarvandaan dit gekopieer is (Ctrl+Shift+V) |
| `PDF` |  | Gee CadCraft die PDF-leêrs wat die tekening se onderlêers gebruik |
| `PDFADJUST` |  | Vervaag, kontrasteer, monochroom, of skakel 'n PDF-onderlêer af |
| `PDFATTACH` | `PDFATT` | Heg 'n PDF-bladsy as 'n onderlêer aan (PDFATTACH) |
| `PDFCLIP` |  | Knip 'n PDF-onderlêer tot 'n reghoek of veelhoek |
| `PDFIMPORT` | `PDFIM` | Maak 'n PDF-bladsy se lyne, vulsels en teks tot tekeningvoorwerpe (PDFIMPORT) |
| `PDFLAYERS` |  | Skakel die lae van 'n PDF-onderlêer aan of af |
| `PEDIT` | `PE` | Redigeer 'n polilyn: sluit, open, verbind, wydte, pas kromme aan, spline-kromme, ontkromme, lyntipe-generering, omkeer; lyne, boë en splines kan in polilyne omgeskakel word |
| `PHOTOSKETCH` | `PSK` | Verander 'n foto van 'n handskets op papier in lyne en boë op 'n skaal, maak die perspektief reguit en gee elke penkleur sy eie laag. |
| `PICKSTYLE` |  | PICKSTYLE: of die keuse van een voorwerp in 'n groep die hele groep kies (1, die beginstelling) of net daardie voorwerp (0). Behou vir hierdie sessie. |
| `PLAN` |  | Draai die aansig sodat die UCS X-as (Huidige ucs, 'n gestoorde Ucs, of die Wêreld) plat op die skerm is. Niks in die tekening beweeg nie. |
| `PLINE` | `PL` | 'n Polilyn van lyn- en boogsegmente |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Druk na PDF: 'n uitleg, of die model op 'n skaal |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Druk-styltabelle: stel wat elke kleur as druk (kleur, swart, grys, inkt, lynwydte); saam met die tekening gehou (STYLESMANAGER) |
| `POINT` | `PO` | Puntvoorwerpe |
| `POINTCLOUD` | `PC` | Die aangehegte puntwolk: sny, hoogte, dikte, kleur, grootte, sigbaar, zoem, ontkoppel |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Heg 'n puntwolk (LAS, LAZ, XYZ, PTS) onder die tekening aan |
| `POLARANG` |  | Die polêre opsporingstap in grade (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | 'n Gereelde veelhoek |
| `PRESSPULL` |  | Druk of trek 'n vlak van 'n soliede liggaam (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Maak die Eienskappe-paneel oop (ook Ctrl+1, of dubbelklik 'n voorwerp) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Vou die Eienskappe-paneel na die rand van die venster |
| `PSPACE` | `PS` | Verlaat die aansigvenster waarin jy werk en gaan terug na die blad (of dubbelklik buite dit). |
| `PUBLISH` | `-PUBLISH` | Druk verskeie of alle blaaie in een PDF (een bladsy en 'n boekmerk per blad) |
| `PURGE` | `PU` | Verwyder blokdefinisies wat niks gebruik nie |
| `QDIM` |  | Vinnige dimensie: dimensioneer verskeie voorwerpe op een slag (aaneenlopend, basislyn, gestaffel, ordinaat, radius of deursnee) |
| `QPMODE` | `QP` | Vinnige eienskappe by die wyser aan of af |
| `QSELECT` | `QS` | Vinnige keuse: elke voorwerp van 'n soort waarvan die laag, kleur, grootte of naam pas (QS) |
| `RASTERSNAP` |  | Skakel vasvang na die lyne van geskandeerde blaaie aan of af. |
| `RAY` |  | Straal: 'n konstruksielyn vanaf 'n punt, eindeloos in een rigting. |
| `RECOVER` |  | Maak 'n beskadigde DXF of DWG oop: slaan oor wat nie gelees kan word nie in plaas daarvan om die leêr te weier, sê wat oorgeslaan is, en kontroleer en herstel dan die tekening soos AUDIT doen. |
| `RECTANG` | `REC`, `RECTANGLE` | 'n Geslote polilyn vanaf twee hoeke |
| `REDLINE` | `RDL` | Rooilyn na hersiening: lees 'n MarkupCraft-rooilynpakket, aanvaar of verwerp elke verandering, wolk die aanvaarde met 'n hersieningslog, en stoor die antwoordleêr (RDL) |
| `REDO` |  | Herdoen wat ontdoen is |
| `REFCLOSE` |  | Voltooi die redigering van 'n blok op sy plek: stoor dit, of gooi die veranderinge weg |
| `REFEDIT` |  | Redigeer 'n blok op sy plek, waar 'n verwysing daarvan is, met die res van die tekening vervaag; REFCLOSE stoor dit |
| `REGEN` | `RE` | Herbou wat in hierdie oortjie uit die tekening geteken is |
| `REGENALL` | `REA` | Herbou wat in elke oortjie, ruit en oop tekening geteken is |
| `REGION` | `REG` | REGION (REG): maak plat gebiede (streke) uit geslote voorwerpe, of uit lyne, boë en polilyne wat 'n lus end-tot-end sluit. UNION, SUBTRACT en INTERSECT kombineer dan streke, en MASSPROP gee hulle snitseienskappe. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registreer verskeie skanderings: plaas hulle in een raam deur gekose puntepare of teikens, verfyn met ICP, voer een LAS of E57 uit |
| `REINIT` |  | Laai jou aliasleêr weer |
| `RENAME` | `-RENAME`, `REN` | Hernoem 'n laag of 'n blok (elke voorwerp of verwysing volg) |
| `REVCLOUD` | `RC` | Hersieningswolk: rond 'n reghoek, veelhoek, vrye pad of voorwerp af (RC) |
| `REVOLVE` | `REV` | Draai geslote 2D-voorwerpe om 'n as na soliede liggame (3D) |
| `ROTATE` | `RO` | Draai voorwerpe om 'n basispunt |
| `SAMPLES` | `SAMPLE` | Maak een van CadCraft se voorbeeldtekeninge oop ('n argitektoniese stel, 'n as-gebou) om van te leer |
| `SAVE` | `QSAVE` | Laai die tekening in sy formaat af (DWG of DXF) |
| `SAVEAS` |  | Laai die tekening af as DWG of DXF: kies watter |
| `SAYSEL` |  | Sê wat gekies is, een sin elk. |
| `SCALE` | `SC` | Skaal voorwerpe om 'n basispunt |
| `SCALELISTEDIT` | `SCALELIST` | Voeg, redigeer en skrap die tekening se eie skale; hulle verskyn in die aansigvenster- en drukskaallyste en word in die lêer gestoor (SCALELIST) |
| `SCANALIGN` | `SCL` | Belyn 'n geskandeerde blad na twee punte: skuif, draai en, as jy kies, skaal dit. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Voeg 'n geskandeerde tekening in: 'n PNG, JPEG of TIFF (een bladsy of alle bladsye van 'n multibladsyleêr) of 'n PDF-bladsy wat 'n prent is. |
| `SCANCLEAN` | `SCC` | Maak 'n geskandeerde blad swart-en-wit en verwyder vlekkies. |
| `SCANCROP` | `SCR` | Sny 'n geskandeerde blad tot 'n venster. |
| `SCANDESKEW` | `SCD` | Vind die hoek waarteen 'n geskandeerde blad se lang lyne lê en draai die blad vierkant sodra jy die hoek aanvaar. |
| `SCANERASE` | `SCE` | Vee 'n gebied van 'n geskandeerde blad uit: 'n reghoek, 'n veelhoek of 'n lasso. |
| `SCANINFO` | `SCI` | Wys 'n geskandeerde blad se oorspronklike leêr en die stappe wat sedertdien gedoen is. |
| `SCANSCALE` | `SCS` | Skaal 'n geskandeerde blad: kies twee punte daarop en tik die ware afstand tussen hulle. |
| `SCANTRACE` | `SCT` | Trek 'n geskandeerde blad na lyne en boë op 'n nuwe laag, tot 'n toleransie wat jy stel. Teks en arsering bly as raster. |
| `SELECT` |  | Kies voorwerpe nou (vir P, Vorige, in die volgende opdrag) |
| `SELECTALL` | `AI_SELALL` | Kies elke voorwerp wat jy op hierdie oortjie kan redigeer (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Kies elke voorwerp soos die wat jy kies: dieselfde soort, laag en kleur (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Wys die Bladstel-paneel: blaaie van baie tekeninge, genommer, as een PDF gepubliseer. |
| `SHORTCUTS` | `KEYS` | Gee enige opdrag 'n sleutel van jou eie (Ctrl of Alt met 'n letter, of 'n vrye funksiesleutel), gehou in hierdie blaaier of lessenaarprogram. |
| `SHXFONTS` | `SHX` | Gee CadCraft SHX-lettertipes uit 'n gids of leêrs, sodat teksstyle wat hulle noem daarin teken (lys, verwyder, omkeer) |
| `SKETCHFIX` | `SKF` | Teken vrye hand-strepe; elkeen word 'n skoon lyn, sirkel, boog, reghoek of polilyn, vierkant gemaak en aan die ander verbind. |
| `SKETCHLIVE` | `SKL` | Skets met 'n pen: elke streep word 'n presiese lyn, sirkel, boog of reghoek soos jy die pen oplig, vasgemaak aan die tekening, met sy grootte om oor te tik. |
| `SPLINE` | `SPL` | Teken 'n spline deur punte (of met 'n kontrolepolygoon), of draai 'n polilyn in een |
| `SPLINEDIT` | `SPE` | Redigeer 'n spline: pas punte, kontrolepunte en gewigte aan, maak dit oop of toe, keer dit om, of skakel dit na 'n polilyn om |
| `SPLIT` |  | Verdeel die tekengebied in ruite (as VPORTS op die model; ook vanaf 'n blad) |
| `STEELMEMBER` | `SMEMBER` | 'n Staallid in 3D uit 'n standaardprofiel: twee punte (' n balk) of 'n basispunt en 'n hoogte (Kolom) |
| `STLOUT` |  | Voer die 3D-model uit as STL (millimeter) |
| `STRETCH` | `S` | Rek: sleep 'n kruisvenster oor die einde om te skuif; wat binne is, beweeg, die res bly (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Teksstyle: die lettertipe, hoogte, wydte en skuinste wat nuwe teks kry (die dialoog; -STYLE op die opdragreël) |
| `SUBTRACT` | `SU` | Haal soliede liggame van ander af (3D), of 2D-streke van streke af |
| `SWBOUT` | `SWMACRO` | Laai 'n makro vir SolidWorks (.swb) af wat die model as een beperkte skets herbou |
| `SWEEP` |  | Vee geslote 2D-voorwerpe langs 'n pad (lyn, polilyn, boog, sirkel) na soliede liggame (3D) |
| `TABLE` | `TB` | Maak 'n tabel: rye en kolomme, of uit sigbladselle op die knipbord of 'n CSV-leêr |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Redigeer 'n tabel: tik in 'n sel, voeg rye en kolomme in en skrap, groottes, saamgevoegde selle, belyning |
| `TABLEEXPORT` |  | Stoor wat 'n tabel wys as 'n CSV-leêr |
| `TABLEPASTE` | `PASTETABLE` | Maak 'n tabel uit sigbladselle op die knipbord |
| `TABLESTYLE` | `TS` | Tabelstyle: teksthoogtes, belyning, kantlyn en rande vir titel-, kop- en datarye |
| `TAGS` |  | Etikette op blokverwysings: definieer 'n etiket (soort, toegelate waardes, blokke waarop dit van toepassing is), stel dit op die gekose verwysings, en lys hulle as 'n rooster wat jy as CSV kan stoor |
| `TEXT` | `DT`, `DTEXT` | Enkellyn-teks; Enter begin die volgende lyn |
| `TEXTEDIT` | `ED`, `DDEDIT` | Redigeer teks op die plek: kies 'n teks (of dubbelklik een) (ED) |
| `TEXTMASK` | `TMASK` | Plaas 'n agtergrondmasker agter tekste (die tekening se agtergrond of 'n kleur), of haal dit weg. |
| `TEXTTOFRONT` |  | Bring alle teks, dimensies en leiers voor alles anders. |
| `TOOLBAR` |  | Kies wat die nutsbalkknoppies wys: ikone en teks, net ikone, of net teks (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Plaas die nutsbalk bo, onder, links of regs van die venster |
| `TOOLBARROWS` |  | Kies hoeveel rye die nutsbalk gebruik: pas om te pas, 2, of 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Maak die balke bo die tekening standaard of kompak |
| `TOUCHCROSSHAIR` | `TCX` | Verskuifde kruisdraad vir tekening met 'n vinger: een vinger beweeg 'n kruisdraad wat bo en langs dit sit, sodat die vinger nie die keuspunt bedek nie. Die vinger optel kies niks; die Klik-knoppie of 'n tik met 'n tweede vinger kies by die kruisdraad, en hou Klik vas terwyl jy beweeg sleep. 'n Lang druk of die Enter-knoppie is Enter. Twee vingers beweeg en zoem. Opsies: AAN, UIT, Outo (net waar 'n vinger die enigste aanwyser is), Afstand, Kant. |
| `TOUR` | `TUTORIAL` | Neem die ses-stap-eerste-tekening-toer weer |
| `TRIM` | `TR` | Sny voorwerpe terug tot waar ander dit kruis: klik op 'n stuk, sleep deur verskeie, of Shift+klik om te verleng |
| `TRIMEXTENDMODE` |  | Hoe TRIM en EXTEND begin: 1 Vinnig (elke voorwerp is 'n snykant of grens), 0 Standaard (kies eers die kante) |
| `TTR` |  | 'n Sirkel raaklyn aan twee voorwerpe, met 'n radius wat jy gee (dieselfde as CIRCLE T). |
| `TURNLEFT` |  | Draai die aansig 90° links (teen die wysers in): UCS Z -90, en die aansig volg. Niks in die tekening beweeg nie. |
| `TURNRIGHT` |  | Draai die aansig 90° regs (met die wysers mee): UCS Z 90, en die aansig volg. Niks in die tekening beweeg nie. |
| `TURNWORLD` |  | Terug na die wêreld: UCS Wêreld, en die aansig is weer plat. |
| `TXT2MTXT` | `T2M` | Voeg enkellyn-tekste in een paragraaftekst, bo na onder. |
| `UCS` |  | Jou eie koördinaatstelsel: 'n oorsprong en 'n X-as (oorsprong, Z-hoek, 3punt, OBjek, Vorige (P), Wêreld, NAamgegee). Punte wat jy tik, orto, polêre opsporing, die rooster en nuwe teks volg dit; die aansig draai sodat sy X-as plat is. Niks in die tekening beweeg nie. |
| `UNDO` | `U` | Ontdoen die laaste opdrag |
| `UNGROUP` |  | UNGROUP: haal groepe uitmekaar. Kies voorwerpe van die groepe, of gee 'n Naam. Die voorwerpe bly in die tekening. |
| `UNION` | `UNI` | Voeg soliede liggame in een (3D), of 2D-streke in een streek |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Wys elke voorwerp weer wat deur ISOLATEOBJECTS of HIDEOBJECTS versteek is. |
| `UNITS` | `UN`, `DDUNITS` | Hoe lengtes gewys en getik word: desimaal, voet en duim, breuke (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Bereken die velde weer uit, en kies wanneer hulle vanself opdateer |
| `USDOUT` |  | Voer die 3D-model uit as USD (.usda-teks, .usdc-binêr of 'n .usdz-pakket) |
| `VIEW` | `-VIEW`, `V` | Standaard 3D-aansigte, perspektief of parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Plaas 'n plat 2D-aansig van die 3D-soliede liggame (voor, bo, sy of isometries, verborge lyne gestippel) op 'n blad of in die model |
| `VIEWLABEL` | `VL` | 'n Aansigtitel op 'n blad wat sy aansigvenster se aansignaam wys, en daarmee verander. |
| `VOICE` |  | Skakel uitgesproke opdragte aan of af. Hulle word op hierdie rekenaar herken. |
| `VPCLIP` |  | Knip 'n bladaansigvenster tot 'n geslote voorwerp of 'n geteekende veelhoek; Skrap maak dit weer 'n reghoek |
| `VPLAYER` |  | Vries of ontvries lae in sommige aansigvensters net (Vries, Ontvries, Herstel), en kies watter lae nuwe aansigvensters bevrore begin (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Verdeel die tekengebied in ruite, elk met sy eie aansig (op 'n blad: 'n aansigvenster, soos MVIEW) |
| `VPVIEW` |  | Stel wat 'n aansigvenster wys: kies 'n venster op die model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visuele styl van die 3D-aansig: skadu, rande, verborge lyn, draadraam, X-straal |
| `WALL` | `WA` | Teken 2D-mure soos 'n polilyn. Hulle verbind, en dra deure en vensters. |
| `WALLARC` | `WARC` | Teken 'n boog van mure. Plan-mure is reguit, so die boog word as kort reguit mure getrek (elk 15 grade) wat verbind. |
| `WALLDELSEG` |  | Verwyder 'n stuk van 'n muur tussen twee punte. Wat oorbly, bly as een of twee mure. |
| `WALLDIM` |  | Tik 'n nuwe waarde vir 'n dimensie: die muur aan sy verre einde beweeg vierkant na homself, die muur aan die eerste einde hou, en die mure wat daaraan verbind is, volg. |
| `WALLDISJOIN` |  | Kies 'n muur naby een einde om verbindings by daardie einde te verbied: die einde word vierkant getrek en niks volg dit nie. Kies dit weer om hulle toe te laat. |
| `WALLGRID` |  | Sluit 'n muur vas aan 'n roosterlyn: langs dit, of een einde daarop. Skuif die lyn met GRIDMOVE en die muur volg. |
| `WALLHOLD` |  | Belyn en sluit: 'n muur hou sy plek teen 'n ander muur (op sy lyn, of op die afstand wat dit het). As een beweeg, volg die ander. |
| `WALLHOLDDIM` |  | Sluit die afstand tussen twee parallelle mure vas. As een beweeg, volg die ander om dit te hou. |
| `WALLHOLDS` |  | Lys die slotte op die mure. |
| `WALLJOINS` |  | Gee elke muur van 'n ouer tekening sy id en berg die verbindings tussen hulle. Dit gebeur ook by die eerste verandering wat jy maak. |
| `WALLJOINSTYLE` |  | Klik 'n hoek waar twee mure end-tot-end ontmoet om te verander hoe dit getrek word: mitre, stomp, vierkant af. T wissel watter muur deurloop. |
| `WALLOFFSET` | `WO` | Skuif 'n muur vierkant na homself oor 'n afstand (die mure wat daaraan verbind is, volg), of maak 'n kopie op daardie afstand. |
| `WALLPICK` |  | Maak mure op 'n lyn of polilyn in die tekening, met die lyne daaraan verbind as jy Ja sê. |
| `WALLPOLY` | `WP` | Teken mure rondom 'n gereelde veelhoek van 3 tot 64 sye, soos POLYGON. |
| `WALLRECT` | `WR` | Teken vier verbonde mure uit twee teenoorstaande hoeke, soos RECTANG. |
| `WALLREJOIN` |  | Maak twee dele van 'n muur weer een muur. Die eerste hou sy plek in die tekening. |
| `WALLROT` |  | Teken vier verbonde mure as 'n reghoek gedraai na enige hoek: die eerste sy, dan hoe ver uit. |
| `WALLSPLIT` | `WS` | Verdeel 'n muur in twee by 'n punt of waar 'n ander muur kruis. Die dele bly verbind tensy jy 'n gaping of vrye eindes vra. Deure en vensters gaan saam met hul deel. |
| `WALLSPLITGAP` |  | Verdeel 'n muur en laat 'n gaping: tik die gaping, kies die muur, dan die punt. Die dele hou vrye eindes en kan weer verbind word. |
| `WALLSTRETCH` |  | Rek met 'n venster: muurende binne dit beweeg, mure heeltemal binne beweeg heel, en mure wat teen hulle sye stamp, gly saam. |
| `WALLTAN` |  | Sit 'n muur voort met 'n boog wat dit langs die muur verlaat (getrek as kort reguit mure). |
| `WALLTRACE` |  | Maak mure rondom die kleinste geslote gebied van lyne en mure rondom die punt waarop jy klik. |
| `WALLUNHOLD` |  | Haal die slotte van 'n muur af (en die slotte van ander mure daaraan). |
| `WBLOCK` | `W`, `-WBLOCK` | Skryf 'n blok, sommige voorwerpe of die hele tekening na 'n nuwe DWG- of DXF-leêr (W) |
| `WEDGE` | `WE` | 'n Wig: twee hoeke en 'n hoogte; dit hel weg vanaf die eerste hoek (3D) |
| `WHEREAMI` | `WHERE` | Sê waar die wyser is. |
| `WHOHAS` |  | Sê wie 'n tekening oop het. CadCraft Studio hou 'n klein sluitleêr langs elke oop tekening (Plan.dwg.cclock: wie, sedert wanneer, watter weergawe) en verwyder dit by sluit. Opsies: Huidig (die oop tekening), Leêr (kies een), Gids (elke tekening in 'n gids wat êrens oop is; dit laat Studio ook sluitleêrs in daardie gids hou), Pad (tik een), Naam (die naam wat ander sien). 'n Slot wat vyf minute nie opgefris is nie, word verouderd genoem. Nie beskikbaar in 'n blaaier nie. |
| `WINDOW` | `WN` | Plaas 'n venster in 'n muur. |
| `XATTACH` | `XA` | Skakel 'n ander DWG of DXF in hierdie tekening, slegs-lees gewys (XREF lys en laai hulle weer) |
| `XCLIP` | `XC` | Knip blokverwysings en gekoppelde tekeninge tot 'n reghoek of 'n veelhoek, of verwyder die knip. |
| `XLINE` | `XL` | Konstruksielyn, eindeloos aan albei kante: deur twee punte, horisontaal, vertikaal, teen 'n hoek, halveer 'n hoek, of verskuif vanaf 'n lyn. |
| `XREF` | `XR`, `-XREF` | Gekoppelde tekeninge (eksterne verwysings): lys, heg aan, laai weer, bind, ontkoppel |
| `ZOOM` | `Z` | Omvang, of 'n venster |

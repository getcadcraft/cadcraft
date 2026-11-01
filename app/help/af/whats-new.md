---
title: Wat is nuut in 0.7
summary: PDF-onderlae en PDF-invoer, geskandeerde tekeninge met outomatiese traseer, werklike splines met SPLINE, SPLINEDIT en PEDIT, 'n maatstylbestuurder, teks wat sy formatering behou, WBLOCK en jou eie skale, 3D-soliede van ander programme, registrasie van skanderings, 'n Laser-paneel, USD-uitvoer, Geskiedenis en druk in CadCraft Studio, 'n begeleide eerste tekening, die nutsbalk aan enige kant of in minder rye, en meer vir KI-assistente.
keywords: wat is nuut, wat's nuut, vrystellingsnotas, veranderingslog, veranderinge, 0.7, weergawe, nuwe kenmerke, pdf, pdfattach, pdfimport, onderlaag, skandeer, scanattach, scantrace, traseer, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatering, wblock, scalelistedit, skaallys, acis, 3D-soliede, registerscans, registreer skanderings, icp, e57, las, laser, grbl, g-kode, usd, usdout, geskiedenis, weergawes, vergelyk, druk, drukker, png, svg, plotstyl, lyntipe, toer, spiekbrief, opdragkaart, werkbalkposisie, nutsbalkrye, snuffelpad, veeg, kodebladsy, sirillies, koreaans, chinees, japannees, elektries, rcd, p&id, pid, acad.lsp, acaddoc.lsp, ondersteuningsvouer, assistente, mcp, eenhede, portugees
from: b9258ca6
---

Dit is wat in CadCraft 0.7 verander het, vergeleke met 0.6. Baie daarvan is op Discord gevra. Die lys is gegroepeer volgens gebied, met die belangrikste eerste.

## Nuut

### PDF's en geskandeerde tekeninge

- **Plaas 'n PDF-bladsy onder die tekening.** {{cmd:PDFATTACH}} (`PDFATT`) plaas 'n bladsy op sy ware grootte of 'n skaal wat jy tik. Vang aan sy lyne vas, laat dit verbleik, maak dit monochroom ({{cmd:PDFADJUST}}), knip dit ({{cmd:PDFCLIP}}) en wissel die PDF se eie lae ({{cmd:PDFLAYERS}}). Dit plot as lyne, vulsels en teks, en 'n DWG of DXF 2000 behou dit as 'n skakel na die lêer. As jy 'n PDF met {{ui:Maak oop}} oopmaak, vra dit of dit aangeheg of ingevoer moet word. Sien [PDF-onderlae en PDF-invoer](topic:pdf-underlay).
- **Verander 'n PDF-bladsy in tekenvoorwerpe.** {{cmd:PDFIMPORT}} (`PDFIM`) maak lyne, polilyne, sirkels, boë, soliede arserings en teks op lae wat na die PDF genoem is, op ware grootte, 'n getikte skaal, of geskaleer vanaf twee punte en 'n werklike afstand, in een ontdoen-stap. Sien [Voer 'n bladsy in](topic:pdf-underlay#import-a-page).
- **Geskandeerde tekeninge.** {{cmd:SCANATTACH}} bring 'n PNG, JPEG of TIFF (een bladsy of almal) of 'n PDF-bladsy wat 'n prent is, in. Skaal dit dan vanaf twee punte ({{cmd:SCANSCALE}}), belyn dit ({{cmd:SCANALIGN}}), maak dit reg vanaf sy eie lang lyne ({{cmd:SCANDESKEW}}), maak dit swart-en-wit en verwyder vlekkies ({{cmd:SCANCLEAN}}), sny dit bij en vee dele daarvan uit. Elke stap is een ontdoen-stap en die oorspronklike lêer word behou. Sien [Geskandeerde tekeninge en die traseer](topic:scanned-drawings).
- **Traseer 'n skandering in lyne en boë.** {{cmd:SCANTRACE}} teken die skandering se lyne as lyne en boë op 'n nuwe laag, SCAN-TRACE, binne 'n toleransie wat jy stel, en laat teks en arserings soos hulle is. Die verslag sê wat dit gemaak het en wat dit gelaat het, en dit is nie 'n bewering dat die resultaat reg is nie: kontroleer dit teen die blad. {{cmd:RASTERSNAP}} laat voorwerpvangpunte die skandering se punte, hoeke en kruisings vind. Niks word êrens gestuur nie en geen opgeleide model word gebruik nie. Sien [Die traseer](topic:scanned-drawings#the-trace).

### Teken en wysig

- **Werklike splines.** {{cmd:SPLINE}} (`SPL`) teken 'n kurwe deur punte of uit beheerpunte (graad 1 tot 5), met eindraaklyne; {{cmd:SPLINEDIT}} (`SPE`) skuif, voeg by en verwyder passings- of beheerpunte, stel gewigte, maak oop, maak toe, keer om, of verander 'n spline in 'n polilyn. Splines uit DWG- en DXF-lêers maak as splines oop, en DWG en DXF 2000 stoor hulle as splines. Sien [Splines en polilyne](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) maak polilyne toe en oop, voeg lyne en boë daaraan, stel een wydte, pas 'n kurwe deur die hoekpunte of 'n spline langs hulle, en neem dit terug met Decurve, keer om, en wysig verskeie op 'n slag. Sien [Wysig 'n polilyn](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skryf 'n blok, sommige voorwerpe of die hele tekening na 'n nuwe DWG of DXF wat net die lae, style en blokke bevat wat hulle gebruik. Sien [Skryf 'n blok of voorwerpe na 'n eie lêer](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN en REGENALL.** {{cmd:REGEN}} (`RE`) teken die oortjie waarop jy is weer uit die tekening, {{cmd:REGENALL}} (`REA`) elke oortjie, paneel en oop tekening. Sien [REGEN en REGENALL](topic:commands#regen-and-regenall).

### Teks en mate

- **Teks behou sy formatering.** Paragraaf-teks uit ander programme behou hul kleure per woord, vet en skuins, onderstreping, gestapelde breuke en hoogtes: hulle word op die skerm en in PDF's geteken, behou wanneer jy die woorde wysig, en word teruggestoor. Sien [Formatering binne paragraaf-teks uit ander programme](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **'n Maatstylbestuurder.** {{cmd:DIMSTYLE}} (`D`) maak, verander, vergelyk en pas benoemde maatstyle toe; om 'n styl te verander, verander elke maat wat dit gebruik. {{cmd:DIMEDIT}} (`DED`) plaas teks terug, tik nuwe teks, draai dit of skuins die verlengingslyne; {{cmd:DIMTEDIT}} skuif die teks links, regs of na die middel. Sien [Benoemde maatstyle](topic:dimension-settings#named-dimension-styles).
- **Jou eie skale.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) voeg skale soos 1:75 by die aansigvenster- en plotskaallyste; hulle word in die tekening gestoor (DWG en DXF 2000), en 'n tekening uit 'n ander program bring sy eie lys saam. Sien [Skale](topic:units-papers-scales#scales).
- **Teks in ander alfabette.** DXF-lêers wat in Sirillies, Koreaanse, Chinese, Japannese of Viëtnamese kodebladsye gestoor is, maak nou met hul teks oop, en Chinese, Japannese en Koreaanse teks druk in PDF's (die plot haal 'n groter lettertipe die eerste keer wat dit dit nodig het). Sien [Lettertipe](topic:text#font).

### Plot en druk

- **Meer in plotstyltabelle.** Vir elke kleur kan 'n tabel nou ook 'n lyntipe, die lyneinde en lynverbinding stel, en 'n vulstyl wat soliede vulsels as arseringslyne druk; die tabel het sy eie lys van lyndiktes en 'n lyntipeskaal. Sien [Plotstyltabelle](topic:plot-pdf#plot-style-tables).
- **Druk, en PNG- en SVG-lêers.** Die Plot-dialoog het {{ui:Druk…}}, {{ui:Laai PNG af}} (300 dpi) en {{ui:Laai SVG af}}. In CadCraft Studio lys dit die rekenaar se drukkers, hul papier en die aantal afskrifte. Sien [Druk](topic:plot-pdf#print) en [Prent- en SVG-lêers](topic:plot-pdf#picture-and-svg-files).

### 3D en puntwolke

- **3D-soliede uit ander programme.** Soliede voorwerpe, streke en liggame in 'n tekening se modelruimte wys op die 3D-oortjie, slegs-lees, en stoor as DWG skryf hulle onveranderd terug. Vlakke op oppervlaktes wat CadCraft nog nie teken nie, word gelys, nie geraai nie. Sien [Soliede uit ander programme](topic:3d-solids#solids-from-other-programs).
- **Registreer verskeie skanderings.** {{cmd:REGISTERSCANS}} (`REGSCAN`) plaas skanderings wat vanaf verskillende posisies geneem is in een raamwerk, deur puntpare of getikte teikenkoördinate, verfyn hulle met ICP, stoor die registrasie as 'n klein projeklêer, en skryf die geregistreerde wolk as een LAS- of E57-lêer. Sien [Registreer verskeie skanderings in een](topic:register-scans).
- **USD-uitvoer.** {{cmd:USDOUT}}, of {{cmd:EXPORT3D}} › {{ui:USD}}, skryf die 3D-oortjie se soliede voorwerpe as `.usda`, `.usdc` of `.usdz`. Sien [Voer die 3D-model uit as USD](topic:usd).
- **Berekeninge op die 3D-oortjie.** Waar die 3D-oortjie se gereedskap 'n afstand vra, kan jy 'n berekening tik, soos op die opdragreël. Sien [Rekenkunde in 'n getikte waarde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Dinge maak

- **Stuur 'n tekening na 'n laser.** {{cmd:LASER}}, of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Laser…}}, maak 'n paneel oor die tekening oop: elke laag sny, krap, graveer lyne, vul vorms, graveer 'n prent of word nie gestuur nie, met sy krag, spoed en deurgange. Die voorskou volg jou wysigings, {{ui:Stoor G-kode…}} skryf GRBL-laser-modus G-kode, en in Chrome of Edge kan die paneel die werk raam en oor USB stuur. Die instellings word in die tekening gestoor (DWG en DXF). Sien [Stuur 'n tekening na 'n laser](topic:laser-cutting).
- **Geboukundige installasiesimbole in die Elektriese byvoeging.** Data-, telefoon- en TV-uitlate, sleutel- en tydskakelaars, 'n termostaat, uitgangsteken, detektors, roepepunt en sirene, 'n waaier, waterverhitter, kookstel, EV-laaipunt, energiemeter en sub-bord, en RCD- en RCBO-simbole. 'n Stroombaan kan 'n RCD dra, die paneelskedule het 'n RCD-kolom, en die kontroles noem kontakstroombane sonder 'n RCD van 30 mA of minder. Dit is 'n beplanningsherinnering, nie 'n kodekontrole nie.
- **'n P&ID-byvoeging.** P&ID teken prosesdiagramme: simbole met verbindingspunte, proses- en seinlyne, etikette, lynnommers, lyn-, toerusting-, instrument- en klepplyste (CSV of 'n werkboek) en kontroles. Dit kom saam met CadCraft en is afgeskakel totdat jy dit aanskakel in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Byvoegings}}. Dit is 'n tekenhulp, nie 'n ingenieursgoedkeuring nie, en die woorde daarin is vir nou slegs in Engels.

### Aan die gang kom en die skerm

- **'n Begeleide eerste tekening.** {{cmd:TOUR}} (of {{ui:Neem die toer}} op die begin-kaart) lei jou deur ses stappe in die werklike tekening: 'n lyn, 'n sirkel, 'n skuif, 'n snoei, 'n uitvee en 'n maat. Dit begin self die eerste keer wat CadCraft met niks daarin oopmaak nie. Sien [Verkies jy begeleiding?](topic:getting-started#prefer-to-be-guided)
- **'n Spiekbrief en 'n opdragkaart.** Die [spiekbrief](topic:cheat-sheet) het die 40 gewone opdragte op een bladsy, ook as 'n PDF om te druk, en die [opdragkaart](topic:command-map) lys opdragte met hul kort name, A tot Z.
- **Die nutsbalk aan enige kant.** {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Werkbalkposisie}}: bo (soos voorheen), onder, links of regs, of tik {{cmd:TOOLBARDOCK}}. Sien [Werkbalkposisie](topic:settings#toolbar-position).
- **Nutsbalkrye.** {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Nutsbalkrye}}: omloop om te pas, 2 rye of 1 ry, vir die CadCraft-nutsbalk en die Drafting classic- en Ribbon-styles. {{key:Shift+Ctrl+F1}} blaai deur hulle, {{key:Ctrl+F1}} deur wat die knoppe wys, en {{cmd:TOOLBARROWS}} en {{cmd:TOOLBAR}} stel hulle. Die begin-wenk het 'n toemaakknoppie. Dank aan GJoe2, wat dit as 'n pull request gestuur het. Sien [Nutsbalkrye](topic:settings#toolbar-rows).

### In CadCraft Studio

- **Geskiedenis.** {{cmd:HISTORY}} (`HIST`), of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Geskiedenis…}}: die afskrifte wat Studio hou wanneer jy 'n tekening oopmaak en stoor, en die tekening se wolkweergawes as jy dit uit die wolk oopgemaak het. Maak een oop of herstel een, of vergelyk twee, met wat bygevoeg, verwyder en verander is in kleur gewys. Sien [Geskiedenis](topic:history).
- **acad.lsp en acaddoc.lsp.** Kies 'n ondersteuningsvouer in {{cmd:APPLOAD}}: daardie twee lêers laai wanneer CadCraft begin (acaddoc.lsp weer vir elke nuwe tekeningoortjie), en `S::STARTUP` loop ná hulle. Sien [Laai toepassings](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Die Plot-dialoog in sy eie venster.** 'n Knoppie in sy titelbalk skuif dit in 'n venster wat jy op 'n ander monitor kan sit. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).

### Vir KI-assistente

- **Lêers volgens naam, in vouers wat jy kies.** In CadCraft Studio kan 'n assistent lêers volgens naam oopmaak, stoor en plot, en 'n opdrag die lêer gee wat dit vra (INSERT uit 'n lêer, COUNT se uitvoer, SAVEAS, PLOT), maar net binne die vouers wat jy onder {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Assistente}} › {{ui:Vouers wat dit mag gebruik}} byvoeg. Sien [Laat dit lêers in vouers gebruik wat jy kies](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Minder oproepe.** 'n Assistent kan 'n hele opdragreël in een keer tik, 'n opdrag oop hou tussen sy oproepe, voorwerpe volgens soort en laag tel sonder om hulle te lys, en 'n blok met sy kenmerkwaardes in een stap plaas.
- **Sonder 'n venster.** Die `cadcraft`-opdragreël skryf SVG-plots en omskakel, plot, kontroleer of beskryf baie lêers op 'n slag. Die MCP-pakket is nog nie gepubliseer nie. Sien [Werk met lêers sonder om CadCraft oop te maak](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Verander

- **'n Snuffelpad pan.** Beweeg twee vingers op 'n snuffelpad en die 2D-aansig volg hulle; knyp en die muiswiel zoem. Sien [Muis, snuffelpad en aanraking](topic:mouse-trackpad-touch).
- **OLE-voorwerpe word behou.** 'n DXF se ingebedde voorwerpe wys as hul prent of as 'n geëtiketteerde raam en word deur DXF 2000 teruggestoor. 'n DWG se word behou en teruggeskryf wanneer jy as DWG stoor, maar nog nie gewys nie. Voorheen het hulle by stoor verlore gegaan. Sien [Voorwerpe uit ander programme (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Die eenhede van 'n nuwe tekening** volg die eenheid wat jy ster in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}}.

## Reggestel

- Blaaie wat leeg oopgemaak het, of 'n aansigvenster verloor het en die hele model in sy plek gewys het, maak nou met hul werklike aansigvensters oop. 'n Blad sonder 'n skakel na sy inhoud word behou, en die oopverslag sê so.
- DXF-lêers in ouer kodebladsye het verwronge Sirillies en Koreaanse teks gewys. Hulle lees nou reg.
- Paragraaf-teks uit ander programme het sy formatering verloor toe dit oopgemaak is, en is plat teruggestoor.

## In elke program

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die Amerikaanse opmetingsvoet is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af, en hulle verlaat die eenheidslyste; ster een en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. In CadCraft stel die ster die eenhede van 'n nuwe tekening wanneer dit 'n eenheid is wat 'n tekening kan dra; CadCraft se eie {{ui:Eenhede}}-blokkie volg die skakelaars nog nie. Sodra 'n tekening eenhede het, kan 'n lengte wat jy tik enige eenheid se merk dra. Sien [Eenhede, getikte waardes en die eenheidslyste](common:unit-lists).
- **'n Digter uitleg en paneele wat wegskuif.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (aanraakskerms en foonne hou hul groot knoppies). Elke sypaneel het 'n slanke titelbalk: sleep dit om die paneel vas te maak of te laat dryf, laat dit op 'n ander paneel se balk val om een raam as oortjies te deel, speld dit vas om na die rand weg te skuif, of versteek dit en bring dit van die rand af terug. Sien [Rangskik die panele](common:arrange-panels#make-the-layout-denser).
- **Dialoë beweeg.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit keer terug waar jy dit gelos het. Dubbelklik op die titelbalk om dit weer in die middel te sit. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, plot 'n stel, kontroleer tekeninge, stel vrae aan 'n model, tel 'n hoeveelheidsopname saam, probeer 'n onderdeelvariant…), elk met die gereedskap wat dit roep en die toestemmings wat dit nodig het, en elk weer afgespeel deur ons toetse. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker nagesien is nie. Hulponderwerpe is in Engels.
- **CadCraft Studio** sê hoekom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel nie, geen netwerk nie, 'n slegte handtekening) in plaas van net "Klaar", en hou op om 'n Wat is nuut-kaart wat jy toegemaak het terug te bring totdat daar 'n nuwer vrystelling is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kode-geteken nie.** Teken, en die Microsoft Store-pakket, het na 0.8 geskuif omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, en dan {{ui:Hardloop tog}}. Op 'n Mac, die eerste keer, regsklik op CadCraft Studio en kies {{ui:Maak oop}}. CadCraft Studio is nog nie in 'n programwinkel nie, en daar is nog geen iPad- of iPhone-weergawe nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen blokkie lees hulle nog nie.
- 'n DWG se OLE-voorwerpe word behou maar nie gewys nie, en metalêer-prente binne OLE-voorwerpe word nie geteken nie.
- Lees van plotstyltabelle (CTB-lêers) uit ander programme wag vir 'n voorbeeldlêer.
- Ouer Asiatiese teks wat as `\M+`-kodes geskryf is, word gelees, maar is nog nie teen 'n lêer uit 'n ander program nagegaan nie.
- PDF-onderlae: prente binne die bladsy word op die skerm gewys maar nie geplot nie, 'n assistent se plot laat onderlae weg, en hoe ander programme die gestoorde knip en skaal lees, is nog nie in hulle nagegaan nie.
- Geskiedenis: CadCraft stuur nog nie sy stoorings na die wolk nie, so die wolkweergawes is dié wat van ander toestelle en die web gestoor is. Geskiedenis is net in CadCraft Studio.
- Of Studio die acad.lsp-ondersteuningsvouer ná 'n herbegin behou, is nog nie nagegaan nie; as dit vra, kies die vouer weer in APPLOAD.
- Die Laser-paneel is nog nie op 'n regte laser probeer nie: toets elke instelling op afval. CadCraft Studio het geen Web Serial nie, so in Studio stoor die paneel net G-kode.
- Registrasie van skanderings is op verdigte skanderings getoets, nog nie op 'n regte skanderaar se stel nie.
- Tweevinger-pan is met gesimuleerde snuffelpad-gebeurtenisse probeer, nog nie op 'n regte snuffelpad nie.
- {{cmd:PEDIT}} het geen Wysig hoekpunt-opsie nie (gebruik handvatte of {{ui:Eienskappe}}). Afset, snoei, verleng, afronding, breek en voeg saam neem nog nie splines nie; 'n spline se hoogte (Z) word nie behou nie.
- Nuwe paragraaf-teks kan nog nie formateringskodes kry nie, en SVG-plots wys geformateerde teks in een kleur.
- WBLOCK se Hele tekening skryf net die model, nie die blaaie nie. Die huidige maatstyl word nie in die lêer gestoor nie: 'n tekening maak met Standaard huidig oop.
- Die lintkieslysstyle het nog geen laag-, kleur- of lyntipe-lyste nie: gebruik die {{ui:Lae}}-paneel en {{ui:Eienskappe}}.
- Puntwolke word nog nie in die tekening gestoor of geplot nie, en E57-lêers maak tot 6 miljoen punte en 512 MB oop.
- CadCraft se gestoorde DWG-lêers is nog nie self in AutoCAD nagegaan nie.

Al die res is in [Nog nie gebou nie](topic:not-built-yet).

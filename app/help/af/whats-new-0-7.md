---
title: Wat is nuut in 0.7 (vroeër)
summary: PDF-onderlae en PDF-invoer, ingeskandeerde tekeninge met 'n outomatiese spoor, ware splines met SPLINE, SPLINEDIT en PEDIT, 'n dimensiestylbestuurder, teks wat sy formatering behou, WBLOCK en jou eie skale, 3D-soliede uit ander programme, registrasie van skanderings, 'n Laser-paneel, USD-uitvoer, Geskiedenis en druk in CadCraft Studio, 'n begeleide eerste tekening, die gereedskapbalk aan enige kant of in minder rye, en meer vir KI-assistente.
keywords: wat is nuut 0.7, vroeër vrystelling, vrystellingsnotas, veranderinglys, veranderinge, 0.7, weergawe, nuwe kenmerke, pdf, pdfattach, pdfimport, onderlaag, skandeer, scanattach, scantrace, spoor, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatering, wblock, scalelistedit, skaallys, acis, 3D-soliede, registerscans, registreer skanderings, icp, e57, las, laser, grbl, g-code, usd, usdout, geskiedenis, weergawes, vergelyk, druk, drukker, png, svg, plotstyl, lynsoort, toer, spiekbladjie, opdragkaart, gereedskapbalkposisie, gereedskapbalkrye, toolbardock, regen, regenall, trackpad, veeg, kodebladsy, kirillies, koreaans, chinees, japannees, elektries, rcd, p&id, pid, acad.lsp, acaddoc.lsp, ondersteuningsvouer, assistente, mcp, eenhede, portugees
from: d07ca034
---

Dit is wat in CadCraft 0.7 verander het, vergeleke met 0.6. Baie daarvan is op Discord gevra. Die lys is volgens gebied gegroepeer, met die belangrikste eerste.

## Nuut

### PDF's en ingeskandeerde tekeninge

- **Plaas 'n PDF-bladsy onder die tekening.** {{cmd:PDFATTACH}} (`PDFATT`) plaas 'n bladsy op sy ware grootte of 'n skaal wat jy tik. Vang dit aan sy lyne vas, maak dit ligter, maak dit eenkleurig ({{cmd:PDFADJUST}}), knip dit uit ({{cmd:PDFCLIP}}) en wissel die PDF se eie lae aan en af ({{cmd:PDFLAYERS}}). Dit plot as lyne, vullings en teks, en 'n DWG of DXF 2000 hou dit as 'n skakel na die lêer. Om 'n PDF met {{ui:Open}} oop te maak, vra of jy dit wil heg of invoer. Sien [PDF-onderlae en PDF-invoer](topic:pdf-underlay).
- **Draai 'n PDF-bladsy in tekenvoorwerpe.** {{cmd:PDFIMPORT}} (`PDFIM`) maak lyne, poliylyne, sirkels, boë, soliede arsering en teks op lae wat na die PDF genoem is, op ware grootte, 'n getikte skaal, of geskaal uit twee punte en 'n werklike afstand, in een ontdoen-stap. Sien [Voer 'n bladsy in](topic:pdf-underlay#import-a-page).
- **Ingeskandeerde tekeninge.** {{cmd:SCANATTACH}} haal 'n PNG, JPEG of TIFF in (een bladsy of almal) of 'n PDF-bladsy wat 'n prent is. Skaal dit dan uit twee punte ({{cmd:SCANSCALE}}), belyn dit ({{cmd:SCANALIGN}}), maak dit reg uit sy eie lang lyne ({{cmd:SCANDESKEW}}), maak dit swart-en-wit en verwyder vlekkies ({{cmd:SCANCLEAN}}), knip dit uit en vee dele daarvan uit. Elke stap is een ontdoen-stap, en die oorspronklike lêer word bewaar. Sien [Ingeskandeerde tekeninge en die spoor](topic:scanned-drawings).
- **Spoor 'n skandeer in lyne en boë.** {{cmd:SCANTRACE}} teken die skandeer se lyne as lyne en boë op 'n nuwe laag, SCAN-TRACE, teen 'n toleransie wat jy stel, en laat teks en arsering soos hulle is. Die verslag sê wat dit gemaak en wat dit gelaat het. Dit is nie 'n bewering dat die resultaat reg is nie: kontroleer dit teen die blad. {{cmd:RASTERSNAP}} laat voorwerpsnappings die skandeer se punte, hoeke en kruisings vind. Niks word iewers heen gestuur nie, en geen opgeleide model word gebruik nie. Sien [Die spoor](topic:scanned-drawings#the-trace).

### Teken en wysig

- **Ware splines.** {{cmd:SPLINE}} (`SPL`) teken 'n kromme deur punte of uit kontrolepunte (graad 1 tot 5), met eindraaklyne. {{cmd:SPLINEDIT}} (`SPE`) skuif, voeg by en vee passings- of kontrolepunte uit, stel gewigte, maak oop, sluit, keer om, of verander 'n spline in 'n poliylyn. Splines uit DWG- en DXF-lêers open as splines, en DWG en DXF 2000 stoor hulle as splines. Sien [Splines en poliylyne](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) sluit en open poliylyne, voeg lyne en boë daaraan, stel een breedte, pas 'n kromme deur die hoekpunte of 'n spline langs hulle en neem dit terug met Decurve, keer om, en wysig verskeie op een slag. Sien [Wysig 'n poliylyn](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skryf 'n blok, sommige voorwerpe of die hele tekening na 'n nuwe DWG of DXF wat net die lae, style en blokke bevat wat hulle gebruik. Sien [Skryf 'n blok of voorwerpe na 'n eie lêer](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN en REGENALL.** {{cmd:REGEN}} (`RE`) teken die oortjie waarop jy is weer uit die tekening, {{cmd:REGENALL}} (`REA`) elke oortjie, paneel en oop tekening. Sien [REGEN en REGENALL](topic:commands#regen-and-regenall).

### Teks en dimensies

- **Teks behou sy formatering.** Paragraaftekst uit ander programme behou sy kleure per woord, vet en skuins, onderstreping, gestapelde breuke en hoogtes. Dit word op die skerm en in PDF's geteken, bly behou wanneer jy die woorde wysig, en word teruggestoor. Sien [Formatering binne paragraaftekst uit ander programme](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **'n Dimensiestylbestuurder.** {{cmd:DIMSTYLE}} (`D`) maak, verander, vergelyk en pas benoemde dimensiestyle toe. Om 'n styl te verander, verander elke maat wat dit gebruik. {{cmd:DIMEDIT}} (`DED`) plaas teks terug, tik nuwe teks, draai dit of skuins die verlengingslyne. {{cmd:DIMTEDIT}} skuif die teks links, regs of na die middel. Sien [Benoemde dimensiestyle](topic:dimension-settings#named-dimension-styles).
- **Jou eie skale.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) voeg skale soos 1:75 by die aansigvenster- en plotskaallyste. Hulle word in die tekening gestoor (DWG en DXF 2000), en 'n tekening uit 'n ander program bring sy eie lys saam. Sien [Skale](topic:units-papers-scales#scales).
- **Teks in ander alfabette.** DXF-lêers wat in Kirillies-, Koreaanse, Chinese, Japannese of Viëtnamese kodebladsye gestoor is, open nou met hul teks, en Chinese, Japannese en Koreaanse teks druk in PDF's (die plot haal 'n groter font die eerste keer wat dit dit nodig het). Sien [Font](topic:text#font).

### Plot en druk

- **Meer in plotstyltabelle.** Vir elke kleur kan 'n tabel nou ook 'n lynsoort, die lyneinde en lynverbinding stel, en 'n vulstyl wat soliede vullings as arseringlyne druk. Die tabel het sy eie lys lynwydtes en 'n lynsoortskaal. Sien [Plotstyltabelle](topic:plot-pdf#plot-style-tables).
- **Druk, en PNG- en SVG-lêers.** Die Plot-dialoog het {{ui:Print…}}, {{ui:Download PNG}} (300 dpi) en {{ui:Download SVG}}. In CadCraft Studio lys dit die rekenaar se drukkers, hul papier en die aantal kopieë. Sien [Druk](topic:plot-pdf#print) en [Prent- en SVG-lêers](topic:plot-pdf#picture-and-svg-files).

### 3D en puntwolke

- **3D-soliede uit ander programme.** Soliede, streke en liggame in 'n tekening se modelruimte wys op die 3D-oortjie, slegs-lees, en as jy as DWG stoor, skryf hulle onveranderd terug. Vlakke op oppervlaktes wat CadCraft nog nie teken nie, word gelys, nie geraai nie. Sien [Soliede uit ander programme](topic:3d-solids#solids-from-other-programs).
- **Registreer verskeie skanderings.** {{cmd:REGISTERSCANS}} (`REGSCAN`) plaas skanderings wat van verskillende posisies geneem is in een raam, deur puntpare of getikte teikenkoördinate. Dit verfyn hulle met ICP, stoor die registrasie as 'n klein projeklêer, en skryf die geregistreerde wolk as een LAS- of E57-lêer. Sien [Registreer verskeie skanderings tot een](topic:register-scans).
- **USD-uitvoer.** {{cmd:USDOUT}}, of {{cmd:EXPORT3D}} › {{ui:USD}}, skryf die 3D-oortjie se soliede as `.usda`, `.usdc` of `.usdz`. Sien [Voer die 3D-model uit as USD](topic:usd).
- **Berekeninge op die 3D-oortjie.** Waar die 3D-oortjie se gereedskap 'n afstand vra, kan jy 'n berekening tik, soos op die opdraglyn. Sien [Rekenkunde in 'n getikte waarde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Dinge maak

- **Stuur 'n tekening na 'n laser.** {{cmd:LASER}}, of {{ui:View}} › {{ui:More}} › {{ui:Laser…}}, maak 'n paneel oor die tekening oop: elke laag sny, krap, graveer lyne, vul vorms, graveer 'n prent of word nie gestuur nie, met sy krag, spoed en passe. Die voorskou volg jou wysigings. {{ui:Save G-code…}} skryf GRBL-lasermodus G-kode, en in Chrome of Edge kan die paneel die werk raam en oor USB stuur. Die instellings word in die tekening gestoor (DWG en DXF). Sien [Stuur 'n tekening na 'n laser](topic:laser-cutting).
- **Bou-installasiesimbole in die Elektriese byvoeging.** Data-, telefoon- en TV-uitlate, sleutel- en tydskakelaars, 'n termostaat, 'n uitgangsteken, detektors, 'n roepstasie en sirene, 'n waaier, 'n waterverwarmer, 'n kookstoof, 'n EV-laaipunt, 'n energiemeter en sub-bord, en RCD- en RCBO-simbole. 'n Stroombaan kan 'n RCD dra, die paneelrooster het 'n RCD-kolom, en die kontroles noem kontakstroombane sonder 'n RCD van 30 mA of minder. Dit is 'n beplanningsherinnering, nie 'n kodekontrole nie.
- **'n P&ID-byvoeging.** P&ID teken prosesdiagramme: simbole met verbindingspunte, proses- en seinlyne, etikette, lynnommers, lyste van lyne, toerusting, instrumente en kleppe (CSV of 'n werkboek), en kontroles. Dit kom saam met CadCraft en is afgeskakel totdat jy dit in {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} aanskakel. Dit is 'n tekenhulpmiddel, nie 'n ingenieursgoedkeuring nie, en die woorde is vir nou slegs in Engels.

### Begin en die skerm

- **'n Begeleide eerste tekening.** {{cmd:TOUR}} (of {{ui:Take the tour}} op die begin-kaart) lei jou deur ses stappe in die werklike tekening: 'n lyn, 'n sirkel, 'n skuif, 'n sny, 'n uitvee en 'n maat. Dit begin self die eerste keer wat CadCraft oopmaak met niks daarin nie. Sien [Verkies jy begeleiding?](topic:getting-started#prefer-to-be-guided)
- **'n Spiekbladjie en 'n opdragkaart.** Die [spiekbladjie](topic:cheat-sheet) het die 40 gewone opdragte op een bladsy, ook as 'n PDF om te druk. Die [opdragkaart](topic:command-map) lys opdragte met hul kort name, A tot Z.
- **Die gereedskapbalk aan enige kant.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}: bo (soos voorheen), onder, links of regs, of tik {{cmd:TOOLBARDOCK}}. Sien [Gereedskapbalkposisie](topic:settings#toolbar-position).
- **Gereedskapbalkrye.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}: wikkel om te pas, 2 rye of 1 ry, vir die CadCraft-gereedskapbalk en die Drafting classic- en Ribbon-style. {{key:Shift+Ctrl+F1}} blaai deur hulle, {{key:Ctrl+F1}} deur wat die knoppies wys, en {{cmd:TOOLBARROWS}} en {{cmd:TOOLBAR}} stel hulle. Die begin-wenk het 'n toemaakknoppie. Dank aan GJoe2, wat dit as 'n pull request gestuur het. Sien [Gereedskapbalkrye](topic:settings#toolbar-rows).

### In CadCraft Studio

- **Geskiedenis.** {{cmd:HISTORY}} (`HIST`), of {{ui:View}} › {{ui:More}} › {{ui:History…}}: die kopieë wat Studio hou wanneer jy 'n tekening oopmaak en stoor, en die tekening se wolkweergawes as jy dit uit die wolk oopgemaak het. Maak een oop of herstel een, of vergelyk twee, met wat bygevoeg, verwyder en verander is in kleur gewys. Sien [Geskiedenis](topic:history).
- **acad.lsp en acaddoc.lsp.** Kies 'n ondersteuningsvouer in {{cmd:APPLOAD}}: daardie twee lêers laai wanneer CadCraft begin (acaddoc.lsp weer vir elke nuwe tekenoortjie), en `S::STARTUP` loop daarna. Sien [Laai toepassings](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Die Plot-dialoog in sy eie venster.** 'n Knoppie in sy titelbalk skuif dit in 'n venster wat jy op 'n ander monitor kan sit. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).

### Vir KI-assistente

- **Lêers volgens naam, in vouers wat jy kies.** In CadCraft Studio kan 'n assistent lêers volgens naam oopmaak, stoor en plot, en 'n opdrag die lêer gee wat dit vra (INSERT uit 'n lêer, COUNT se uitvoer, SAVEAS, PLOT). Dit kan dit net binne die vouers doen wat jy onder {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}} byvoeg. Sien [Laat dit lêers in vouers gebruik wat jy kies](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Minder oproepe.** 'n Assistent kan 'n hele opdraglyn in een keer tik, 'n opdrag oop hou tussen sy oproepe, voorwerpe tel volgens tipe en laag sonder om hulle te lys, en 'n blok met sy kenmerkwaardes in een stap plaas.
- **Sonder 'n venster.** Die `cadcraft`-opdragreël skryf SVG-plotte en skakel om, plot, kontroleer of beskryf baie lêers op een slag. Die MCP-pakket is nog nie gepubliseer nie. Sien [Werk met lêers sonder om CadCraft oop te maak](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Verander

- **'n Trackpad beweeg.** Beweeg twee vingers op 'n trackpad en die 2D-aansig volg hulle. Knyp en die muiswiel zoem. Sien [Muis, trackpad en aanraking](topic:mouse-trackpad-touch).
- **OLE-voorwerpe word bewaar.** Die ingebedde voorwerpe van 'n DXF wys as hul prent of as 'n benoemde raam, en word deur DXF 2000 teruggestoor. 'n DWG se voorwerpe word bewaar en teruggeskryf wanneer jy as DWG stoor, maar word nog nie gewys nie. Vroeër is hulle by stoor verloor. Sien [Voorwerpe uit ander programme (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Die eenhede van 'n nuwe tekening** volg die eenheid wat jy in {{ui:Settings}} › {{ui:General}} › {{ui:Units}} met 'n ster merk.

## Reggemaak

- Uitlegte wat leeg oopgemaak het, of 'n aansigvenster verloor het en die hele model in sy plek gewys het, maak nou oop met hul ware aansigvensters. 'n Uitleg sonder 'n skakel na sy inhoud word behou, en die oopverslag sê dit.
- DXF-lêers in ouer kodebladsye het verwronge Kirillies- en Koreaanse teks gewys. Hulle lees nou reg.
- Paragraaftekst uit ander programme het sy formatering verloor toe dit oopgemaak en gewoon teruggestoor is.

## In elke program

- **Eenhede.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die US survey foot is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af, en hulle verlaat die eenheidlyste. Merk een, en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. In CadCraft stel die ster die eenhede van 'n nuwe tekening wanneer dit 'n eenheid is wat 'n tekening kan dra. CadCraft se eie {{ui:Units}}-kassie volg die skakelaars nog nie. Wanneer 'n tekening eenhede het, kan 'n lengte wat jy tik enige eenheid se merk dra. Sien [Eenhede, getikte waardes en die eenheidlyste](common:unit-lists).
- **'n Digter uitleg en paneels wat vanself wegruim.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} pas meer op die skerm (aanraakskerms en foonskerms behou hul groot knoppies). Elke syPaneel het 'n slanke titelbalk: sleep dit om die paneel te dok of te laat sweef, laat dit op 'n ander paneel se balk val om een raam as oortjies te deel, speld dit vas om na die rand weg te skuif, of versteek dit en haal dit van die rand af terug. Sien [Rangskik die paneels](common:arrange-panels#make-the-layout-denser).
- **Dialoë skuif.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit kom terug waar jy dit gelaat het. Dubbelklik op die titelbalk om dit weer in die middel te sit. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, plot 'n stel, kontroleer tekeninge, vra 'n model vrae, tel 'n hoeveelheidsopname op, probeer 'n onderdeelvariant…), elk met die gereedskap wat dit roep en die toestemmings wat dit nodig het, en elk deur ons toetse herspeel. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker nagesien is nie. Hulp-onderwerpe is in Engels.
- **CadCraft Studio** sê waarom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel, geen netwerk, 'n slegte handtekening nie) in plaas van net "Klaar". Dit hou ook op om 'n Wat's nuut-kaart wat jy toegemaak het terug te bring totdat daar 'n nuwer vrystelling is.

## Nie in hierdie weergawe nog nie

- **0.7 is nie kode-onderteken nie.** Ondertekening, en die Microsoft Store-pakket, het na 0.8 geskuif omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:More info}}, dan {{ui:Run anyway}}. Op 'n Mac, die eerste keer, regsklik op CadCraft Studio en kies {{ui:Open}}. CadCraft Studio is nog nie in 'n appwinkel nie, en daar is nog geen iPad- of iPhone-bou nie.
- Die hoek- en helling-lyste in {{ui:Units}} word gestoor, maar geen kassie lees hulle nog nie.
- 'n DWG se OLE-voorwerpe word bewaar maar nie gewys nie, en metalêer-prente binne OLE-voorwerpe word nie geteken nie.
- Die lees van plotstyltabelle (CTB-lêers) uit ander programme wag op 'n voorbeeldlêer.
- Ouer Asiatiese teks wat as `\M+`-kodes geskryf is, word gelees, maar is nog nie teen 'n lêer uit 'n ander program nagegaan nie.
- PDF-onderlae: prente binne die bladsy word op die skerm gewys maar nie geplot nie, 'n assistent se plot laat onderlae uit, en hoe ander programme die gestoorde knip en skaal lees, is nog nie in hulle nagegaan nie.
- Geskiedenis: CadCraft stuur nog nie sy stoor na die wolk nie, so die wolkweergawes is die wat van ander toestelle en die web gestoor is. Geskiedenis is net in CadCraft Studio.
- Of Studio die acad.lsp-ondersteuningsvouer behou na 'n herbegin, is nog nie nagegaan nie. As dit vra, kies die vouer weer in APPLOAD.
- Die Laser-paneel is nog nie op 'n werklike laser getoets nie: toets elke instelling op afval. CadCraft Studio het geen Web Serial nie, so in Studio stoor die paneel slegs G-kode.
- Registrasie van skanderings is op verdigte skanderings getoets, nog nie op 'n werklike skandeerder se stel nie.
- Tweevinger-skuif is met gesimuleerde trackpad-gebeure getoets, nog nie op 'n werklike trackpad nie.
- {{cmd:PEDIT}} het geen Edit vertex-opsie nie (gebruik handvatsels of Eienskappe). Afset, sny, verleng, afrond, breek en voeg saam neem nog nie splines nie. 'n Spline se hoogte (Z) word nie behou nie.
- Nuwe paragraaftekst kan nog nie formateringskodes gegee word nie, en SVG-plotte wys geformateerde teks in een kleur.
- WBLOCK se Hele tekening skryf slegs die model, nie die blaaie nie. Die huidige dimensiestyl word nie in die lêer gestoor nie: 'n tekening open met Standard as huidig.
- Die lint-kieslysstyle het nog geen laag-, kleur- of lynsoortlyste nie: gebruik die {{ui:Layers}}-paneel en {{ui:Properties}}.
- Puntwolke word nog nie in die tekening gestoor of geplot nie, en E57-lêers open tot 6 miljoen punte en 512 MB.
- CadCraft se gestoorde DWG-lêers is nog nie in AutoCAD self nagegaan nie.

Al die res is in [Nog nie gebou nie](topic:not-built-yet).

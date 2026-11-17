---
title: CadCraft-instellings
summary: Die instellings wat by die tekenprogram hoort: kursorgrootte, waar 'n geplakte kopie aan die kursor hang, wat 'n klik met die keuse doen, hoeveel rye die nutsbalk gebruik, waar die opdragreël sit en hoe hoog dit is, 'n kompakte boonste gebied, en die hoekaanwyser.
keywords: opdragreël, sweewende opdragreël, sweef, heg vas, een reël, f2, opdraggeskiedenis, commandline, cmdline, toparea, boonste gebied, kompak, cursorsize, volskerm-kruisdraad, volskerm-kursor, rand tot rand, nutsbalkrye, nutsbalkvertoning, ctrl f1, instellings, voorkeure, opsies, hoekaanwyser, aansigkubus, asikoon, ucs-ikoon, kursor, kruisdraad, keuseboks, plakpunt, basispunt, klik op voorwerpe, keuse, pickadd, shift, terugstel
from: 0896eb42
---

Open {{ui:Instellings}} met die rat in die programbalk of {{key:Mod+,}}. Die eerste oortjie, {{ui:CadCraft}}, hou die instellings wat by hierdie program hoort; {{ui:Algemeen}} hou die wat elke program in die familie deel (tema, paneelteksgrootte en -breedtes, die nutsbalk se voorkoms en volgorde). CadCraft se instellings bestaan net in die program: jy verander hulle hier, en hierdie blaaier onthou hulle. Stel CadCraft-instellings terug stel elkeen weer terug na die begin.

## Kursor

**Klein**, **Medium** (die begin), **Groot** of **Volskerm**: die grootte van die kruisdraad en van die keuseboks in die tekening. 'n Groter keuseboks kies voorwerpe ook van 'n bietjie verder af, wat help op 'n aanraakskerm of 'n baie fyn tekening.

**Volskerm** laat die kruisdraad se twee lyne van rand tot rand oor die tekening loop, ook wanneer geen opdrag aan die gang is nie, sodat jy met die oog kan kontroleer dat twee dinge oor die hele aansig inlyn. Met die aansig verdeel, bly die lyne in die ruit waarin jy werk. Dieselfde as AutoCAD se {{cmd:CURSORSIZE}} 100: tik {{cmd:CURSORSIZE}} en 100 vir volskerm; 'n kleiner getal kies die naaste grootte (onder 5 Klein, 5 tot 9 Medium, 10 tot 99 Groot).

## Plakpunt

Waar 'n geplakte kopie aan die kursor hang na {{key:Mod+V}} ({{cmd:PASTECLIP}}), tot jy klik:

- **Linkeronderhoek** (die begin): die linkeronderhoek van die gekopieerde voorwerpe se omvang, soos in AutoCAD.
- **Middelpunt**: die middel van hul omvang. Handig om 'n simbool met die oog te plaas.

'n Kopie gemaak met `COPYBASE` hang altyd van die basispunt wat jy gekies het. {{ui:Plak op dieselfde plek}} ({{key:Mod+Shift+V}}) ignoreer hierdie instelling: dit hou die oorspronklike koördinate. Sien [Kopieer, plak en dupliseer](topic:copy-paste).

## Klik op voorwerpe

Wat 'n klik in die tekening met die keuse doen wanneer geen opdrag aan die gang is nie:

- **Voeg by die keuse** (die begin): elke klik of venster voeg voorwerpe by; {{key:Shift}}+klik, of 'n {{key:Shift}}+venster, haal hulle uit.
- **Vervang die keuse**: 'n klik of venster kies slegs wat dit kies. {{key:Shift}}+klik voeg 'n voorwerp by, of haal een uit wat reeds gekies is; 'n {{key:Shift}}+venster voeg by.

Wanneer 'n `Kies voorwerpe:`-aanwysing binne 'n opdrag is, voeg kliks altyd by (en {{key:Shift}} verwyder), wat hierdie instelling ook sê. Sien [Kies voorwerpe](topic:select-objects).

## Klik op 'n leë plek

Wat 'n klik waar daar geen voorwerp is, doen wanneer geen opdrag aan die gang is nie. Albei maniere begin 'n keuse-venster ('n tweede klik voltooi dit).

- **Maak die keuse skoon** (die begin): wat gekies was, word laat gaan. Hou {{key:Shift}} terwyl jy klik om dit te behou.
- **Behou die seleksie**: die keuse bly, soos in ander tekenprogramme; die venster voeg daarby. Druk {{key:Esc}} om die keuse skoon te maak.

## Sleep om te kies

Wat druk-en-sleep op 'n leë plek teken:

- **Lasso** (die begin): 'n vrye omtrek. Beweeg eers regs om te kies wat heeltemal daarbinne lê, eers links vir wat dit raak; {{key:Space}} terwyl jy sleep wissel tussen venster, kruising en omheining.
- **Reghoek**: die boks, soos 'n klik en 'n tweede klik dit teken.

{{cmd:LASSOMODE}} `1` of `0` stel dieselfde. Sien [Lassokeuse](topic:lasso-selection).

## Sleep om te trim en te verleng

Wat druk op 'n leë plek en sleep in {{cmd:TRIM}} en {{cmd:EXTEND}} doen:

- **'n Pad** (die begin): 'n vrye pad; elke stuk wat dit kruis, word getrim (of verleng).
- **'n Venster**: 'n boks; elke stuk wat dit raak, word getrim, soos die `C`-opsie doen.

Sien [Trim en verleng](topic:trim-and-extend).

## Werkbalkposisie

{{ui:CadCraft}} › {{ui:Werkbalkposisie}}: **Bo** (die begin, soos dit altyd was), **Onder**, **Links** of **Regs**. Aan die linker- of regterkant stapel die gereedskapgroepe in 'n kolom wat rol wanneer dit hoër is as die venster, en die knoppies loop twee of drie per reël. Die keuse word saam met jou instellings gestoor, en {{cmd:TOOLBARDOCK}} (`TBDOCK`) stel dit vanaf die opdragreël. {{ui:Algemeen}} › {{ui:Stel die uitleg terug}} plaas die nutsbalk weer bo.

Die kieslysstyle se balke sit binne die nutsbalk en beweeg daarmee, maar die {{ui:Lint}}-styl is gemaak om bo of onder oor te loop: aan 'n sy kry dit 'n smal kolom wat rol. Op 'n foon bly die nutsbalk waar die foonuitleg dit plaas.

## Nutsbalkrye

Hoeveel reëls die gereedskap bo die tekening gebruik, in die CadCraft-nutsbalk en in die {{ui:Klassieke tekening}}- en {{ui:Lint}}-styl:

- **Pas by die venster** (die begin): die gereedskap pas by die breedte van die venster.
- **2 rye**: hoogstens twee reëls. As die gereedskap by hierdie breedte in twee reëls of minder pas, pas dit net; andersins staan dit in twee rye wat sywaarts rol.
- **1 ry**: een reël wat sywaarts rol, wat die tekening die meeste ruimte laat.

{{key:Shift+Ctrl+F1}} blaai deur die drie, en {{cmd:TOOLBARROWS}} stel een. Wat die knoppies wys (ikone en teks, net ikone, of net teks) is 'n instelling van {{ui:Algemeen}} › {{ui:Nutsbalk}}; {{key:Ctrl+F1}} blaai daardeur, en {{cmd:TOOLBAR}} stel dit.

## Opdragreël

Die opdragreël kan onder die tekening vasgemaak bly, soos altyd, of oor dit sweef, en dit kan so dun wees as een reël.

- **Laat dit sweef.** Sleep die handvatsel aan sy linkerkant die tekening in, of kies {{ui:Dryf oor die tekening}} in sy {{ui:Opsies van opdragreël}}-kieslys (die drie kolletjies aan sy regterkant). Sleep die handvatsel weer om dit te skuif; sy plek word behou wanneer die venster van grootte verander. Sleep sy regterrand om dit breër of smaller te maak. Laat dit val op die statusbalk, of kies {{ui:Heg onderaan vas}}, om dit weer vas te maak.
- **Maak dit dunner of hoër.** Sleep sy boonrand: elke stap is een geskiedenisreël. Tot nul reëls is dit 'n **opdragreël van een reël**: net die aanwysing en wat jy tik, en 'n nuwe boodskap wys vir 'n oomblik bo dit. 'n Dubbelklik op die boonrand gaan tussen een reël en die hoogte wat jy gehad het.
- **Die geskiedenis.** {{key:F2}}, of die klokknoppie op die opdragreël ({{ui:Opdraggeskiedenis (F2)}}), maak die hele geskiedenis bo die reël oop (onder dit as die reël naby die boonste deel van die venster sweef). Tik gaan steeds na die opdragreël; {{key:PageUp}} en {{key:PageDown}} rol die geskiedenis, en {{key:Esc}}, {{key:F2}} of 'n klik elders maak dit toe. 'n Sleutel van jou eie op F2 wen hierdie.
- **Vanaf die sleutelbord.** Die handvatsel is 'n knoppie: met dit gefokus, skuif die pylsleutels 'n sweefende opdragreël (met {{key:Shift}}, in groter stappe); {{key:Up}} laat 'n vasgemaakte een sweef en {{key:Down}} aan die onderrand maak dit vas. Die boonrand is 'n skeier: {{key:Up}} en {{key:Down}} voeg 'n reël by of haal een weg, {{key:Home}} maak dit een reël, {{key:End}} die hoogste. Skermlesers hoor steeds elke boodskap, ook in die opdragreël van een reël.

{{ui:CadCraft}} › {{ui:Opdragreël}} het dieselfde keuses: {{ui:Onderaan vasgemaak}} of {{ui:Sweef}}, {{ui:Geskiedenislyne wat gewys word}} (0 tot 12) en {{ui:Standaardhoogte}}. {{cmd:COMMANDLINE}} (`CMDLINE`) stel hulle vanaf die opdragreël. Die plek en die hoogte word vir CadCraft in hierdie blaaier onthou saam met die res van die uitleg, so 'n gestoorde werkomgewing dra hulle; {{ui:Algemeen}} › {{ui:Stel die uitleg terug}} maak die opdragreël weer vas op sy standaardhoogte. Op 'n foon bly die opdragreël vasgemaak met een reël geskiedenis; die geskiedenisknoppie werk daar ook.

As die venster kort is en die uitlegkontrole 'n strakker uitleg aanbied, maak die {{ui:Ja}} ook die opdragreël een reël as die tekening na die nutsbalke steeds kort is.

## Boonste gebied

{{ui:CadCraft}} › {{ui:Boonste gebied}}: **Standaard** (die begin) of **Kompak**. Kompak hou die balke bo die tekening klein in elke kieslysstyl: die groepname en die woorde onder die ikone val weg (die oplosbare wenke en skermlesers het hulle steeds) en die knoppies is strakker. Dit werk saam met [Nutsbalkrye](topic:settings#toolbar-rows): Kompak en **1 ry** laat die tekening die meeste ruimte. {{cmd:TOPAREA}} stel dit.

## Hoekaanwyser

Wat in die hoek van die tekening sit:

- **Outomaties** (die begin): die asikoon op die {{ui:Model}}-oortjie en die aansigkubus op die {{ui:3D}}-oortjie.
- **Asikoon**: die X- en Y-merker onderaan links op die {{ui:Model}}-oortjie, en 'n klein X-, Y- en Z-merker op die 3D-oortjie.
- **Aansigkubus**: 'n kubus regs bo op albei oortjies. Op die {{ui:Model}}-oortjie wys dit die tekening van bo, en klik op 'n ander vlak, rand of hoek maak die {{ui:3D}}-oortjie oop wat van daar kyk. Op die 3D-oortjie draai dit met die aansig: klik om van 'n kant af te kyk, sleep om te wentel, en die huisie gaan terug na die iso-aansig. Sien [Model in 3D](topic:3d-solids).
- **Geen**: niks in die hoek nie.

Blaaie wys nie een van hulle nie.

## Lengte en oppervlakte van die keuse

- **In die statusbalk** (die begin): met voorwerpe gekies, wys die statusbalk hul totale {{ui:Lengte}} en die totale {{ui:Oppervlakte}} van die geslote een. Sien [Totale van 'n keuse](topic:properties-panel#totals-of-a-selection).
- **Versteek**: die statusbalk laat hulle weg. Eienskappe wys hulle steeds vir verskeie voorwerpe.

## Rooster, Ortho en vasvang

Hierdie is nie in die dialoog nie: die {{ui:Rooster}}-, {{ui:Ortho}}- en {{ui:Vasvang}}-knoppies op die statusbalk (of {{key:F7}}, {{key:F8}}, {{key:F3}}) en die lys van voorwerpvangpunte langs hulle word onthou soos jy hulle verlaat. Sien [Vang op punte op voorwerpe](topic:object-snaps).

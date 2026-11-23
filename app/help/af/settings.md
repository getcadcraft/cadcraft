---
title: CadCraft-instellings
summary: Die instellings wat by die tekenprogram hoort: kursorgrootte, waar 'n geplakte kopie aan die kursor hang, wat 'n klik met die keuse doen, hoeveel rye die nutsbalk gebruik, waar die opdragreël sit en hoe hoog dit is, 'n kompakte boonste gebied, en die hoekwyser.
keywords: opdragreël, swewende opdragreël, swewe, vas, een reël, f2, opdraggeskiedenis, commandline, cmdline, boonste gebied, kompak, cursorsize, volskermkruisdraad, volskermkursor, rand tot rand, nutsbalkrye, nutsbalkvertoning, ctrl f1, instellings, voorkeure, opsies, hoekwyser, aansigkubus, asikoon, UCS-ikoon, kursor, kruisdraad, keusblokkie, plakpunt, basispunt, klik voorwerpe, seleksie, pickadd, shift, terugstel
from: ae1a81db
---

Maak {{ui:Instellings}} oop met die rat in die programbalk of {{key:Mod+,}}. Die eerste oortjie, {{ui:CadCraft}}, hou die instellings wat by hierdie program hoort; {{ui:Algemeen}} hou dié wat elke program in die familie deel (tema, paneel se teksgrootte en breedtes, die nutsbalk se voorkoms en volgorde). CadCraft se instellings bestaan net in die program: jy verander dit hier, en hierdie blaaier onthou hulle. {{ui:Stel CadCraft-instellings terug}} sit elkeen terug na die begin.

## Kursor

**Klein**, **Medium** (die begin), **Groot** of **Volskerm**: die grootte van die kruisdraad en van die keusblokkie in die tekening. 'n Groter keusblokkie kies voorwerpe ook van 'n bietjie verder af, wat help op 'n aanraakskerm of 'n baie fyn tekening.

**Volskerm** laat die kruisdraad se twee lyne van rand tot rand oor die tekening loop, ook wanneer geen opdrag loop nie, sodat jy met die oog kan nagaan of twee dinge oor die hele aansig inlyn. Met die aansig verdeel, bly die lyne in die paneel waarin jy werk. Dieselfde as AutoCAD se {{cmd:CURSORSIZE}} 100: tik {{cmd:CURSORSIZE}} en 100 vir volskerm; 'n kleiner getal kies die naaste grootte (onder 5 Klein, 5 tot 9 Medium, 10 tot 99 Groot).

## Plakpunt

Waar 'n geplakte kopie aan die kursor hang ná {{key:Mod+V}} ({{cmd:PASTECLIP}}), totdat jy klik:

- **Onderkant-linkerhoek** (die begin): die onderkant-linkerhoek van die gekopieerde voorwerpe se omvang, soos in AutoCAD.
- **Middel**: die middel van hulle omvang. Handig om 'n simbool met die oog te plaas.

'n Kopie wat met `COPYBASE` gemaak is, hang altyd aan die basispunt wat jy gekies het. {{ui:Plak op dieselfde plek}} ({{key:Mod+Shift+V}}) ignoreer hierdie instelling: dit hou die oorspronklike koördinate. Sien [Kopieer, plak en dupliseer](topic:copy-paste).

## Klik op voorwerpe

Wat 'n klik in die tekening aan die seleksie doen wanneer geen opdrag loop nie:

- **Voeg by die seleksie** (die begin): elke klik of venster voeg voorwerpe by; {{key:Shift}}+klik, of 'n {{key:Shift}}+venster, haal hulle uit.
- **Vervang die seleksie**: 'n klik of venster kies net wat dit kies. {{key:Shift}}+klik voeg 'n voorwerp by, of haal een uit wat reeds gekies is; 'n {{key:Shift}}+venster voeg by.

By 'n `Select objects:`-prompt binne 'n opdrag, voeg klikke altyd by ({{key:Shift}} verwyder), wat ook al hierdie instelling sê. Sien [Kies voorwerpe](topic:select-objects).

## Klik op 'n leë plek

Wat 'n klik waar daar geen voorwerp is doen wanneer geen opdrag loop nie. In albei gevalle begin dit 'n keusvenster ('n tweede klik voltooi dit).

- **Maak die seleksie leeg** (die begin): wat gekies was, word laat gaan. Hou {{key:Shift}} vas terwyl jy klik om dit te hou.
- **Hou die seleksie**: die seleksie bly, soos in ander tekenprogramme; die venster voeg daarby. Druk {{key:Esc}} om die seleksie leeg te maak.

## Sleep om te kies

Wat druk en sleep op 'n leë plek teken:

- **Lasso** (die begin): 'n vryhand-omtrek. Beweeg eers regs om te kies wat heeltemal binne lê, eers links om te kies wat dit raak; {{key:Space}} terwyl jy sleep, wissel tussen venster, kruising en heining.
- **Reghoek**: die boks, soos 'n klik en 'n tweede klik dit teken.

{{cmd:LASSOMODE}} `1` of `0` stel dieselfde in. Sien [Lasso-seleksie](topic:lasso-selection).

## Sleep om te knip en te verleng

Wat druk op 'n leë plek en sleep in {{cmd:TRIM}} en {{cmd:EXTEND}} doen:

- **'n Pad** (die begin): 'n vryhandpad; elke stuk wat dit kruis, word geknip (of verleng).
- **'n Venster**: 'n boks; elke stuk wat dit raak, word geknip, soos die `C`-opsie doen.

Sien [Knip en verleng](topic:trim-and-extend).

## Werkbalkposisie

{{ui:CadCraft}} › {{ui:Werkbalkposisie}}: **Bo** (die begin, soos dit altyd was), **Onder**, **Links** of **Regs**. Aan die linker- of regterkant stapel die gereedskapgroepe in 'n kolom wat rol wanneer dit hoër is as die venster, en die knoppies wrap twee of drie per reël. Die keuse word saam met jou instellings gestoor, en {{cmd:TOOLBARDOCK}} (`TBDOCK`) stel dit vanaf die opdragreël. {{ui:Algemeen}} › {{ui:Stel die uitleg terug}} sit die nutsbalk weer bo.

Die menustyle se balke sit binne die nutsbalk en beweeg daarmee, maar die {{ui:Lint}}-styl is gemaak om bo of onder oor te loop: aan 'n kant kry dit 'n smal kolom wat rol. Op 'n foon bly die nutsbalk waar die foonuitleg dit sit.

## Nutsbalkrye

Hoeveel reëls die gereedskap bo die tekening gebruik, in die CadCraft-nutsbalk en in die {{ui:Klassieke tekening}}- en {{ui:Lint}}-styl:

- **Wrap om te pas** (die begin): die gereedskap wrap na die breedte van die venster.
- **2 rye**: hoogstens twee reëls. As die gereedskap by hierdie breedte tot twee reëls of minder wrap, wrap hulle net; anders sit hulle in twee rye wat sylings rol.
- **1 ry**: een reël wat sylings rol, wat die tekening die meeste ruimte laat.

{{key:Shift+Ctrl+F1}} loop deur die drie, en {{cmd:TOOLBARROWS}} stel een. Wat die knoppies wys (ikone en teks, net ikone, of net teks) is 'n instelling van {{ui:Algemeen}} › {{ui:Nutsbalk}}; {{key:Ctrl+F1}} loop daardeur en {{cmd:TOOLBAR}} stel dit.

## Opdragreël

Die opdragreël kan onder die tekening vasgemaak bly, soos dit altyd was, of oor die tekening swewe, en dit kan so dun wees as een reël.

- **Laat dit swewe.** Sleep die handvatpunt aan sy linkerkant in die tekening, of kies {{ui:Dryf oor die tekening}} in sy {{ui:Opsies van opdragreël}}-kieslys (die drie kolletjies aan sy regterkant). Sleep die handvatpunt weer om dit te skuif; sy plek bly behou wanneer die venster van grootte verander. Sleep sy regterrand om dit breër of smaller te maak. Laat dit val op die statusbalk, of kies {{ui:Heg onderaan vas}}, om dit weer vas te maak.
- **Maak dit dunner of hoër.** Sleep sy boonrand: elke stap is een reël geskiedenis. Tot nul reëls is dit 'n **een-reël opdragreël**: net die prompt en wat jy tik, en 'n nuwe boodskap wys vir 'n oomblik bo dit. 'n Dubbelklik op die boonrand gaan tussen een reël en die hoogte wat jy gehad het.
- **Die geskiedenis.** {{key:F2}}, of die klokknoppie op die opdragreël ({{ui:Opdraggeskiedenis (F2)}}), maak die hele geskiedenis bo die reël oop (onder dit wanneer die reël naby die boonkant van die venster swewe). Tik gaan steeds na die opdragreël; {{key:PageUp}} en {{key:PageDown}} rol die geskiedenis, en {{key:Esc}}, {{key:F2}} of 'n klik elders sluit dit. 'n Sleutel van jou eie op F2 wen hierbo.
- **Van die sleutelbord af.** Die handvatpunt is 'n knoppie: as dit gefokus is, skuif die pylsleutels 'n swewende opdragreël (met {{key:Shift}}, in groter stappe); {{key:Up}} laat 'n vasgemaakte een swewe en {{key:Down}} aan die onderrand heg dit vas. Die boonrand is 'n skeier: {{key:Up}} en {{key:Down}} voeg 'n reël by of haal een weg, {{key:Home}} maak dit een reël, {{key:End}} die hoogste. Skermlesers hoor steeds elke boodskap, ook in die een-reël opdragreël.

{{ui:CadCraft}} › {{ui:Opdragreël}} het dieselfde keuses: {{ui:Vasgemaak onderaan}} of {{ui:Sweef}}, {{ui:Geskiedenislyne wat gewys word}} (0 tot 12) en {{ui:Standaardhoogte}}. {{cmd:COMMANDLINE}} (`CMDLINE`) stel hulle vanaf die opdragreël. Die plek en die hoogte word vir CadCraft in hierdie blaaier saam met die res van die uitleg bewaar, so 'n gestoorde werkomgewing dra hulle; {{ui:Algemeen}} › {{ui:Stel die uitleg terug}} heg die opdragreël weer by sy standaardhoogte vas. Op 'n foon bly die opdragreël vasgemaak met een reël geskiedenis; die geskiedenisknoppie werk daar ook.

{{ui:CadCraft}} › {{ui:Opsieletters}} hou die letters wat jy vir opdragopsies gekies het: {{ui:Wysig…}} maak die lêer oop, {{ui:Invoer…}} vervang dit met 'n lêer wat jy kies, en {{ui:Voer uit}} stoor dit. Sien [Gee opdragopsies jou eie letters](topic:option-letters).

Wanneer die venster kort is en die uitlegkontrole 'n digter uitleg aanbied, maak sy {{ui:Ja}} die opdragreël ook een reël as die tekening na die nutsbalke steeds kort is.

## Boonste gebied

{{ui:CadCraft}} › {{ui:Boonste gebied}}: **Standaard** (die begin) of **Kompak**. Kompak hou die balke bo die tekening klein in elke kieslysstyl: die groepname en die woorde onder die ikone verdwyn (die nutswenke en skermlesers het hulle steeds), en die knoppies is dig. Dit werk saam met [Nutsbalkrye](topic:settings#toolbar-rows): Kompak en **1 ry** laat die tekening die meeste ruimte. {{cmd:TOPAREA}} stel dit.

## Hoekwyser

Wat in die hoek van die tekening sit:

- **Outomaties** (die begin): die asikoon op die {{ui:Model}}-oortjie en die aansigkubus op die {{ui:3D}}-oortjie.
- **Asikoon**: die X- en Y-merker onderaan links op die {{ui:Model}}-oortjie, en 'n klein X-, Y- en Z-merker op die {{ui:3D}}-oortjie.
- **Aansigkubus**: 'n kubus bo regs op albei oortjies. Op die {{ui:Model}}-oortjie wys dit die tekening van bo; klik op 'n ander vlak, rand of hoek en die {{ui:3D}}-oortjie maak oop en kyk van daar af. Op die 3D-oortjie draai dit met die aansig: klik om van 'n kant af te kyk, sleep om te wentel, en die huisie gaan terug na die iso-aansig. Sien [Model in 3D](topic:3d-solids).
- **Geen**: niks in die hoek nie.

Blaaie wys geeneen.

## Lengte en oppervlakte van die seleksie

- **In die statusbalk** (die begin): met voorwerpe gekies, wys die statusbalk hulle totale lengte en die totale oppervlakte van die geslote een. Sien [Totale van 'n seleksie](topic:properties-panel#totals-of-a-selection).
- **Versteek**: die statusbalk laat hulle uit. Eienskappe wys hulle steeds vir verskeie voorwerpe.

## Rooster, Ortho en vaslegging

Hierdie is nie in die dialoog nie: die {{ui:Rooster}}-, {{ui:Ortho}}- en {{ui:Vasvang}}-knoppies op die statusbalk (of {{key:F7}}, {{key:F8}}, {{key:F3}}) en die lys van voorwerpvaslegging daarnaas, word onthou wanneer jy hulle verlaat. Sien [Vasvang aan punte op voorwerpe](topic:object-snaps).

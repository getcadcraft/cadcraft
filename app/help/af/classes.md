---
title: Organiseer 'n tekening met klasse
summary: Klasse sorteer voorwerpe op 'n tweede manier, oor lae heen (Lighting-Fixtures-Spot): wys en versteek hulle, gee hulle 'n kleur, lyntipe, lynwydte, vulling en teksstyl wat voorwerpe volgens klas kan neem, en stel die klas in waarin nuwe voorwerpe gaan.
keywords: klas, klasse, CLASSES, CLS, CLASS, volgens klas, ByClass, aktiewe klas, gebruik by skepping, Geen, ontwerplaag, laagskaal, aansig, Vectorworks
from: 672de9cb
---

Lae sê *waar* 'n voorwerp in die tekening hoort; klasse sê *wat* dit is. 'n Muur op laag `Level 1` kan in klas `Walls-Exterior` wees, 'n spotlig op laag `Ceiling` in klas `Lighting-Fixtures-Spot`. Jy kan elke lig op elke laag in een slag wegsteek, of elke buitemuur swaarder laat druk, sonder om iets tussen lae te skuif.

Elke voorwerp begin in klas **Geen**. 'n Tekening sonder eie klasse werk presies soos vantevore.

## Maak die Klasse-paneel oop

Tik `CLASSES` (of `CLS`) en druk {{key:Enter}}, of kies {{ui:Klasse…}} in die {{ui:Meer}}-kieslys van die {{ui:Aansig}}-groep. Die paneel gaan oop oor die tekening en bly oop terwyl jy teken.

- **Voeg 'n klas by:** tik die naam in die blokkie bo-aan en druk {{key:Enter}}. 'n `-` maak 'n vlak: `Lighting-Fixtures-Spot` staan onder `Lighting-Fixtures`, wat onder `Lighting` staan; die ontbrekende vlakke word vir jou bygevoeg.
- **Wys of versteek:** die oog langs 'n klas. Om 'n klas te versteek, versteek elke klas daaronder, op die skerm en op papier.
- **Aktiewe klas:** die ronde knoppie. Nuwe voorwerpe wat jy teken, gaan in die aktiewe klas.
- **Kies 'n klas:** klik op sy naam. Die knoppies en instellings onder die lys werk dan daarop.

Die getal aan die einde van elke ry is hoeveel voorwerpe in daardie klas is (in die model, op die blaaie en binne blokdefinisies).

## Sit voorwerpe in 'n klas

Kies die voorwerpe, kies 'n klas in die paneel en kies {{ui:Stel klas}}. Merk {{ui:Volgens klas}} eers aan sodat hulle hul kleur, lyntipe, lynwydte, vulling en teksstyl uit die klas neem. Jy kan ook:

- tik `CLASS` met voorwerpe gekies en voer 'n klasnaam in ('n nuwe naam maak die klas);
- tik `CLASS` met niks gekies nie om die aktiewe klas te stel; `?` lys die klasse met hul tellings;
- gebruik die {{ui:Klas}}-afdeling van die Eienskappe-paneel: die klas, en 'n {{ui:… volgens klas}}-skakelaar vir kleur, lyntipe en lynwydte (vulling vir arserings, teksstyl vir teks);
- kies volgens klas met `QSELECT`: kies die eienskap {{ui:Klas}}.

{{ui:Kies sy voorwerpe}} kies elke voorwerp van die gekose klas op die oop blad (of in die model).

## Hoe 'n voorwerp teken: voorwerp, klas, laag

Die kleur, lyntipe, lynwydte, vulling en teksstyl van 'n voorwerp kan **volgens klas** wees, net soos hulle volgens laag kan wees. CadCraft kyk in hierdie volgorde:

1. Die voorwerp se eie waarde, tensy daardie waarde volgens klas is.
2. Die klas se waarde, wanneer die voorwerp dit volgens klas neem en die klas een het.
3. Die laag se waarde.

'n Klas waarvan die kleur (of lyntipe …) {{ui:Nie gestel nie}} is, gee die voorwerp deur aan sy laag. Kies 'n klas en stel sy {{ui:Kleur}}, {{ui:Lyntipe}}, {{ui:Lynwydte}}, {{ui:Vulling (arserings)}} en {{ui:Teksstyl}} onder die knoppies. Merk {{ui:Gebruik by skepping}} aan om nuwe voorwerpe wat in daardie klas geteken word, almal volgens klas te laat neem.

Elke verandering in die paneel is een ontdoen-stap.

## Hernoem en skrap

{{ui:Hernoem}} wysig die naam op sy plek: druk {{key:Enter}} om dit te hou, {{key:Esc}} om dit te laat staan. Die klasse daaronder volg (`Lighting-Spot` word `Light-Spot` wanneer `Lighting` `Light` word), en so ook hul voorwerpe en enige viewport-oorskrywings.

{{ui:Skrap}} verwyder die klas en elke klas daaronder. Hul voorwerpe skuif na **Geen**. Een {{ui:Ontdoen}} sit alles terug. **Geen** kan nie hernoem of geskrap word nie.

## Ontwerplae

Onder {{ui:Ontwerplae}} kan elke laag 'n skaal (`1:50`) en 'n aansig dra. 'n Ontwerplaag is 'n gewone laag: modelruimte en blaaie werk soos vantevore, en die skaal en aansig word by die tekening gehou vir die gereedskap wat hulle sal gebruik.

## In DWG- en DXF-lêers

Klasse word gehou in elke DWG-weergawe wat CadCraft stoor en in DXF (R12 en 2000). Die klas van elke voorwerp is sy eie uitgebreide data (toepassing `CADCRAFT_CLASS`), sodat AutoCAD en ander programme dit by die voorwerp hou. Die klaslys, kleure en sigbaarheid word in een ongebruikte blok met die naam `CADCRAFT_CLASSES` gehou; as 'n ander program daardie blok suiwer, vind CadCraft steeds elke voorwerp se klas, en die klasse kom terug met verstekinstellings.

Ander programme ken nie klasse nie: hulle teken elke voorwerp met sy eie of sy laag se waardes.

Sien ook [Viewport-klasoorskrywings](topic:viewport-overrides) en [Organiseer 'n tekening met lae](topic:layers).

---
title: Stuur 'n tekening na 'n laser
summary: Maak die Laser-paneel oop, kies wat elke laag doen (sny, krap, graveer, vul, prent), bekyk die kop se bewegings, stoor GRBL-laser-modus G-kode, of stuur dit vanaf die blaaier nadat jy die werk geraam het.
keywords: laser, lasersnyer, laser-graveerder, GRBL, G-kode, gcode, graveer, vul, dither, prentgravering, krap, sny, Web Serial, raam die werk, krag, spoed, passe, LASER, LASERCUT, CNC
from: 72b56db0
---

Die {{ui:Laser}}-paneel verander die lae van 'n tekening in 'n program vir 'n laser wat GRBL gebruik (die meeste hobby- en klein-werkswinkel diode- en CO2-beheerders). Tik `LASER` (of `LASERCUT`) en druk {{key:Enter}}, of kies {{ui:Laser…}} in die {{ui:Meer}}-kieslys van die {{ui:Aansig}}-groep. In die lint-style is dit in die {{ui:Lêer}}-kieslys en langs {{ui:Plot}}. Die paneel open oor die tekening en bly oop terwyl jy teken: die voorskou volg elke verandering.

:::warning
Toets elke instelling eers op afval, dra oogbeskerming wat by jou laser pas, hou die deksel toe waar daar een is, en laat nooit 'n lopende laser alleen nie. Die getalle wat 'n laag mee begin is plekhouers, nie aanbevelings vir enige materiaal nie.
:::

## Wat gestuur word

Die paneel lees die model (nie die blaaie nie), op lae wat aan en ontdooi is:

- Lyne, bôë, sirkels, polilyne (boogsegmente bly bôë), ellipse en splines. 'n Vorm wat eindig waar dit begin, tel as geslote.
- Blokke word uitmekaar gehaal: 'n voorwerp op laag 0 binne 'n blok gaan saam met die laag van die blokverwysing.
- 'n Arsering stuur sy grens, so 'n gearseerde logo op 'n **Vul**-laag word gevul.
- 'n Prent (`IMAGEATTACH`) word op 'n laag wat op **Graveer prent** gestel is, gegraveer, wanneer dit reghoekig lê (nie gedraai of skuins nie) en sy lêer in CadCraft oop is.
- Teks, maatvoering, leiers, punte en konstruksielyne word nie gestuur nie; die paneel sê hoeveel dit weggelaat het. Om teks te brand, teken die letters as vorms of arseer hulle.

Groottes gaan uit in millimeter uit die tekening se eenhede (`UNITS`): 'n tekening in duim word met 25.4 vermenigvuldig. 'n Tekening sonder eenhede gestel word een eenheid na een millimeter gestuur. Merk {{ui:Slegs die gekose voorwerpe}} om 'n deel van die tekening te stuur.

## Kies wat elke laag doen

Elke laag met iets op is 'n ry. {{ui:Doen}} stel dit op **Sny**, **Krap**, **Graveer lyne**, **Vul vorms**, **Graveer prent** of **Nie gestuur**, met 'n {{ui:Krag %}}, 'n {{ui:Spoed mm/min}} en 'n aantal {{ui:Passe}}. Elke verandering is een ontdoen-stap en word in die tekening gestoor: DWG (elke weergawe wat CadCraft stoor) en DXF hou die instellings, so die tekening maak met hulle oop die volgende keer. Ander programme maak die lêer oop soos vantevore; hulle sien een ongebruikte blok genoem CADCRAFT_LASER (om dit daar op te ruim, verwyder die instellings).

- **Vul** brand die binnekant van geslote vorms in lyne, {{ui:Lynspasiëring}} uitmekaar, teen 'n {{ui:Hoek}}, albei rigtings of een, met 'n oorskiet sodat die kop op spoed is wanneer die laser aanskakel; kruisarsering voeg 'n tweede gang by teen 90°. 'n Vorm met 'n gat bly by die gat oop.
- **Graveer prent** verander 'n prent in punte (Floyd–Steinberg, Atkinson, geordend, of gewone swart en wit by 'n drempel) of, met *Grysvlakke*, in veranderlike krag.
- Volgorde: prente en vulling eerste, dan lynnegravering, dan krapte, dan snitte, sodat 'n uitgesnyde deel nie beweeg terwyl dit gegraveer word nie. Binne een laag loop die paaie **binne-eerste** ('n gat voor die plaat waarin dit is), die naaste volgende.

## Bekyk, dan stoor

Die voorskou teken wat die kop doen: brandende lyne in kleur, vinnige bewegings in grys, en 'n groen boks rondom alles wat brand. Onder dit is die grootte, die lengte van die brand en 'n tydskatting (sonder versnelling; 'n werklike masjien neem langer). {{ui:Stoor G-kode…}} skryf GRBL-laser-modus G-kode: `$32=1`, `M4` (of `M3`) met S-waardes, `G0` en `G1` bewegings, `M5` aan die einde. X0 Y0 is die werk se linkeronderhoek tensy jy die tekening se oorsprong kies: stel jou masjien se werknul daar.

## Stuur vanaf die blaaier

In Chrome en Edge vra {{ui:Koppel…}} jou om die laser se USB-poort te kies. Niks koppel of stuur tot jy 'n knoppie druk nie. Druk eers {{ui:Raam die werk}}: die kop volg die boks van die werk met die laser **af** (of op die lae krag wat jy vir 'n wyser gestel het) sodat jy kan sien waar dit gaan brand. Eers dan word {{ui:Stuur werk}} aktief, en dit skakel weer af as jy iets verander. {{ui:Pouseer}} hou die kop vas, {{ui:Stop}} hou dit ook vas, stel die beheerder terug (die laser gaan af) en stuur `M5`. Waar Web Serial ontbreek (Firefox, Safari, en CadCraft Studio, wat nog geen Web Serial het nie) bied die paneel net stoor aan: stoor die G-kode en stuur dit met jou laser se eie program.

## Nog nie gebou nie

Nog nie gebou nie: ander beheerders se formate (Ruida, Marlin-lasers, verskaffer-lêers), lusse en inleidings, kerfverskuiwing, materiaalbiblioteke, draai- en Z-asse, kameraopstelling, teks as buitelyne.

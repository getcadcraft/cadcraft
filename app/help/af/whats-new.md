---
title: Wat is nuut in 0.9
summary: Arserings wat hul grens volg, laaggroepe, gestapelde verdiepings, 2D-slim mure met deure en vensters, teksstyle en 'n geformateerde teksredigeerder, 'n dryvende opdragreël, rooster-vaslegging, tien maniere om 'n boog te teken, en die Dokumente-paneel.
keywords: wat is nuut, 0.9, vrystellingnotas, veranderingslog, arsering, assosiatiewe arsering, hatchedit, pat-lêer, patroonlêer, laaggroepe, laygroup, verdiepings, gestapelde verdiepings, floorlayers, slim mure, muur, deur, venster, muurgereedskap, teksstyl, styl, mtext-redigeerder, paragraaftekst, formatering, dryvende opdragreël, opdragreël, boonste gebied, kompak, vasvang aan rooster, rooster-vaslegging, f9, boog, dokumentepaneel, uitcheck, UK-staalgroottes, draw.io, Thai-teks, dxf r12, wat is nuut, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, outovoltooi, spook, tab, sketchfix, photosketch, autosheet, detail, gridmove, autodim, etikette, redline, samevoeg, git, fossil, toegang, tekenwerk sonder sig, skermleser, perke, peilings, aunits, shx, diagram, ole, geskiedenis, vergelyk, in woorde, eienskappe, voet en duim, rek, tale, invoertoestelle, probleme, live, assistente
from: 8b6dea0b
---

Dit is wat in CadCraft 0.9 verander het, vergeleke met 0.8.1. CadCraft is die 2D- en 3D-tekenprogram van CadCraft Studio 0.9 en sy agt programme. 0.9 voltooi plantekenwerk, voeg teksstyle en 'n regte teksredigeerder by, en gee jou meer ruimte op die skerm.

## Nuut

### Plantekenwerk

- **Arserings wat hul grens volg.** {{cmd:HATCH}} skakel aan by wat dit begrens. Skuif, draai of skaal die grens en die arsering en sy patroon volg; herskep die vorm en die arsering word weer uitgewerk. {{cmd:HATCHEDIT}} (`HE`) verander 'n arsering daarna en maak of beëindig die skakel. Sien [Arsering en vulareas](topic:hatch).
- **Arsering-patroonlêers.** By die {{cmd:HATCH}}-vraag `Kies binnepunt` kies `[Patroonlêer (F)]` en kies 'n `.pat`-lêer. Slegs lêers wat in die gewone formaat geskryf is, is getoets.
- **Laaggroepe.** In {{ui:Gereedskap}} op die {{ui:Lae}}-paneel: {{ui:Nuwe groep}}, {{ui:Voeg gereedgemaakte groepe by}}, {{ui:Groepeer volgens naam}} en {{ui:Soek 'n laag}}; of tik {{cmd:LAYGROUP}} (`LG`). Sien [Organiseer 'n tekening met lae](topic:layers#group-layers).
- **Gestapelde verdiepings.** {{cmd:FLOORS}} (`FLR`), of {{ui:Verdiepings…}} in die {{ui:Meer}}-kieslys van die {{ui:Aansig}}-groep. 'n Aansigvenster op 'n blad kan een verdieping wys onder {{ui:Getoonde verdieping}} in Eienskappe. {{cmd:FLOORLAYERS}} maak verdiepings lae vir 'n lêer wat na iemand anders gaan. Sien [Stapel verdiepings in een tekening](topic:floors).
- **2D-slim mure, deure en vensters.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) en {{cmd:DELOPENING}}. Hoeke, T-verbindings en kruisings word vir jou uitgewerk. Mure hou 'n rekord van hoe hulle verbind, en Eienskappe kry Verbied verbinding by begin / by einde, 'n Liggingreël en 'n wysigbare Lengte. Sien [Teken 2D-mure, deure en vensters](topic:walls-2d).
- **Die muurgereedskap op plan-mure.** Tik {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} en die res. Hulle het nog geen gereedskapknoppies nie. Sien [Muurvorms, snitte, verskuiwings en slotte vir 2D-mure](topic:wall-tools-2d).

### Teks

- **Teksstyle.** {{cmd:STYLE}} (`ST`), of {{ui:Teksstyl}} op die {{ui:Teken}}-nutsbalk: benoemde style met 'n lettertipe, hoogte, breedtefaktor en skuinsheid. Sien [Stel die lettertipe en grootte van teks met teksstyle](topic:text-styles).
- **'n Geformateerde paragraafteksredigeerder.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} of 'n dubbelklik op teks maak 'n kassie oop met lettertipe, grootte, vetdruk, skuinsdruk, onderstreping, deurhaling, kleur, belyning en die graad-, plus-minus- en deursneetekens, plus {{ui:OK}} en {{ui:Kanselleer}}. Sien [Formateer paragraafteks](topic:format-paragraph-text).
- **'n Diagram uit draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) lees ook geplakte draw.io-XML. Sien [Teken 'n diagram uit teks](topic:text-to-diagram).
- **Thai-teks in 'n PDF-plot.** Dit het vroeër as vraagtekens gedruk.

### Meer ruimte en tekenhulpmiddels

- **'n Dryvende, dunner opdragreël en 'n kompakte boonste gebied.** Sleep die opdragreël se handvatsel om dit te laat dryf, sleep die boonste rand vir minder lyne, {{key:F2}} maak die geskiedenis oop. {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Opdragreël}} en die keuses vir die boonste gebied het dieselfde instellings. Sien [Instellings](topic:settings#command-line).
- **Voorwerpvasvang-kieslys.** Regsklik op {{ui:Vasvang}} in die statusbalk, of tik {{cmd:OSNAP}}.
- **Vasvang aan rooster.** Die {{ui:Rooster-vaslegging}}-knoppie in die statusbalk, of {{key:F9}}: gekose punte gaan na die naaste roosterpunt wanneer geen voorwerpvasvang die punt geneem het nie.
- **Boog op tien maniere, en Gaan voort.** {{ui:Boog}} op die {{ui:Teken}}-nutsbalk of {{cmd:ARC}}: 3-punt, die Begin/Middel/Einde-familie en die Middel/Begin/Einde-familie, en Gaan voort (druk {{key:Enter}} by die beginpunt) vanaf die laaste lyn, boog of polilyn.
- **Die Dokumente-paneel.** {{cmd:DOCUMENTS}} (`DOCS`) of {{ui:Dokumente…}} in die {{ui:Meer}}-kieslys van die {{ui:Aansig}}-groep: hersiening, toestand en uitcheck vir elke tekening in 'n projekgids. Dit maak as 'n gesentreerde dialoog oop. Sien [Dokumente](topic:documents).

### Lêers

- **UK-staalgroottes.** 976 profiele in die Standaard-paneel, getik soos op tekeninge (byvoorbeeld `305x165x40 UB`).
- **Suid-Afrikaanse pakkies** (tekenpraktyk en bouregulasies) as pakkies van die Bouregulasies-byvoeging. Die getalle is nog nie geverifieer nie.
- **Byvoegings vir CadCraft,** op aanvraag bygevoeg en standaard afgeskakel: binneverligtingsontwerp, skyfontwerp (HDL na uitleg), roeteruitsnywing, stroombaansimulasie, rolkettingtandwiele en Bouregulasies-landspakkies.

## Reggestel

- Om 'n arsering te skuif, te draai of te skaal, het sy patroon agtergelaat.
- {{cmd:GRIDMOVE}} het 'n hele plan-muur saamgevoer wat net op die roosterlyn begin. 'n Muur word nou volgens sy punte beoordeel.
- Die rooster het slegs binne die tekeningperke gewys, selfs met perke af.
- Die blokkelys in die sypaneel rol, en 'n naam wat geen blok is nie, lys die blokke wat daarmee begin ("Het jy bedoel").
- DXF R12-lêers wat AutoCAD geweier het ("Unknown group 1001 for table"), open nou daar.
- Baie groot lêers (ongeveer 70 000 entiteite en meer) het nie oopgemaak nie, met "Maximum call stack size exceeded".
- DWG-lêers van AutoCAD 2018 en later met 'n hoë onderhoudweergawe het nie oopgemaak nie, met "bad BITLONG code 11".
- In die paragraafteksblokkie behou 'n nuwe grootte wat vir 'n gekose deel getik is, die keuse.

## In elke program

Bootstrap-gereedskapwenke op elke beheer met 'n wenk, 'n beginwenk wat jy kan toemaak, oortjiestrokies wat rol wanneer hulle nie pas nie, en 'n oortitel in die blaaier wat die oop tekening volg (`<drawing> - CadCraft | CadCraft`). {{ui:Instellings}} › {{ui:Uitleg}} is nou 'n aftreklys van tweelynkeuses. Die taallys in {{ui:Instellings}} is langer as in 0.8. Lewendige mede-redigering, Biblioteek-versamelings en gewig- en temperatuureenhede word in die Studio-notas beskryf.

## Eerlike beperkings

- Paragraafteks het nie kogel- of genommerde lyste, tablineaal of uitvul nie. Geplotte PDF's set teks in Helvetica.
- Plan-mure is reguit, so 'n boog word as kort mure geteken. Die gemeenskap se handnasien van die muurgereedskap is nog hangende.
- Laaggroepe word nie in AutoCAD se eie formaat geskryf nie, so AutoCAD wys 'n plat lys. Ander programme wys alle verdiepings saam, tensy jy {{cmd:FLOORLAYERS}} laat loop.
- Die Dokumente-paneel is nog nie deur twee mense op 'n regte deel getoets nie. Router-graveerwerk het nog op geen regte masjien gedraai nie. Die beligtingsberaming is teen 'n fotonspoor gekontroleer, nie teen 'n ander program nie. Ingenieursbyvoegings is nagaan-hulpmiddels, nie 'n plaasvervanger vir 'n ingenieur se nasien nie.
- Tale behalwe Engels is masjienkonsepte, en sommige van die nuwe woorde is net in Engels.

## Vroeër: 0.8 en 0.8.1

Dit is wat in CadCraft 0.8 en 0.8.1 verander het, vergeleke met 0.7. 0.8 (1 November 2026) voeg tekenhulpmiddels by wat uit jou eie tekening werk, volgens reëls op jou rekenaar en sonder 'n model, en 0.8.1 (2 November 2026) herstel foute wat ná dit gerapporteer is.

### Nuut

**Tekening wat jou gedagte voltooi**

- **'n Spook wys wat volgende kom.** Met geen opdrag wat loop nie, wys 'n grys, gestippelde spook wat jou tekening se eie patrone sê volgende kom: die volgende stut op dieselfde afstand, die volgende trap van 'n trap, die ontbrekende muur van 'n vertrek. Druk {{key:Tab}} om dit as een ontdoen-stap te teken, of {{key:Esc}} om dit weg te maak. Dit kyk net na die nuutste voorwerpe, so dit bly glad op 'n groot tekening. Skakel dit af in {{ui:Instellings}} › {{ui:CadCraft}} of met {{cmd:AUTOCOMPLETE}} `[Uit (O)]`.
- **Die volgende punt terwyl jy 'n lyn teken.** Midde-in {{cmd:LINE}} of {{cmd:PLINE}} is die spook die volgende punt: die volgende trap van 'n trap, die vierde hoek van 'n reghoek, of die punt wat dit sluit. Bring die wyser naby en druk {{key:Tab}}, asof jy daar geklik het.
- **Penskets word presiese geometrie.** {{cmd:SKETCHFIX}}: teken rowwe streke met 'n pen, muis of vinger en elkeen word 'n skoon lyn, sirkel, boog, reghoek of polilyn, vasgevang aan wat reeds geteken is. Sien [Skets met 'n pen en kry presiese geometrie](topic:sketch-with-a-pen).
- **'n Foto van 'n skets word 'n tekening.** {{cmd:PHOTOSKETCH}} (`PSK`) vind die papier in 'n foto, reguit die perspektief, pas die papiergrootte en skaal toe wat jy gee, en spoor die penlyne op 'n laag vir elke penkleur na. Letters word nie nagespoor nie.
- **Dimensioneer dit volgens reëls.** {{cmd:AUTODIM}} (`ADIM`) maak kettings van maatlyne langs die sye wat jy kies, 'n totale grootte, openingswydtes, gatdeursnee en, met `[Rooster (G)]`, roosterafstand. Dit herhaal nooit 'n maat wat reeds daar is nie.
- **Skuif 'n roosterlyn en die stel volg.** {{cmd:GRIDMOVE}} (`GM`): mure wat by die roosterlyn eindig, rek saam daarmee, mure langs dit, kolomme, die rondtjie en etiket skuif, en maate daarop meet die nuwe afstand. Een ontdoen-stap.

**Blaaie, detail en etikette**

- **Blaaie wat hulself uitlê.** {{cmd:AUTOSHEET}} neem jou benoemde aansigte (of die afsonderlike stukke van die model), kies 'n papiergrootte en 'n standaardskaal, en sit die aansigte op nuwe blaaie met 'n titelblok en 'n naam-en-skaal-onderskrif. Alles bly wysigbaar. Sien [Lê blaaie vir my uit](topic:lay-out-sheets-for-me).
- **Jou firma se details, aangebied terwyl jy teken.** {{cmd:DETAILS}} (`DET`) hou jou eie detailblokke. Wanneer wat jy kies by een pas volgens die woorde op sy lae, blokname en notas, sê die statusbalk dit; kies dit en plaas dit. {{cmd:DETAILS}} › Deel sit jou lys in jou Dokumente-gids en bring in wat jou span bygevoeg het. {{ui:Instellings}} skakel die aanbiedings af.
- **Etikette op blokke.** {{cmd:TAGS}} definieer 'n etiket (sy soort, die waardes wat dit mag hê, die blokke waarop dit van toepassing is), stel dit op die blokverwysings wat jy kies, en lys hulle as 'n skedule wat jy as CSV kan stoor. Die definisies word in die DWG bewaar. Sien [Etikette](topic:tags).
- **Tekeningperke.** {{cmd:LIMITS}} stel 'n reghoek vir die tekening: die rooster vul dit en {{ui:Zoem}} Alles wys dit. Die perke wys as 'n buitelyn en word in DWG en DXF gestoor, saam met die papierperke. Sien [Stel die tekeningperke](topic:drawing-limits).

**Werk saam met ander mense en ander programme**

- **Maak 'n merkering 'n hersiening.** {{cmd:REDLINE}} lees die pakket wat MarkupCraft skryf en lys elke verandering. Aanvaar of verwerp elk met 'n nota; die aanvaarde kry 'n hersieningswolk en 'n hersieningslog in een ontdoen-stap, en jy stoor die antwoordlêer wat die merkerings in MarkupCraft sluit. Sien [Maak 'n merkering 'n hersiening](topic:redline-to-revision).
- **Tekeninge wat git en Fossil kan samevoeg.** Met {{ui:Samevoegvriendelike lêers}} aan in {{ui:Instellings}} › {{ui:CadCraft}}, kry elke voorwerp 'n sleutel wat nooit verander nie (lêers is ongeveer 10 persent groter). `cadcraft merge base ours theirs` voeg dan twee mense se wysigings van een DWG- of DXF-voorwerp vir voorwerp saam en meld net waar twee mense dieselfde ding verander het. Sien [Voeg twee mense se wysigings van een tekening saam](topic:merge-drawings).
- **Wat verander het, in woorde.** In Geskiedenis gee Vergelyk 'n eenvoudige lys: waar dinge verander het, hoe groot die plekke is, wat bygevoeg, verwyder of verander is, en die teks wat gewysig is. Sien [Sê in woorde wat verander het](topic:changes-in-words).
- **Peilings en hoeke.** Tik 'n rigting as 'n landmeter se peiling, soos N45°23'30"E, of in grade, minute en sekondes, oral waar 'n hoek gevra word; AUNITS stel in hoe hoeke gewys word. Sien [Tik en wys peilings en hoeke](topic:bearings-and-angles).
- **Jou eie SHX-lettertipes.** Gee CadCraft 'n gids met SHX-lettertipes, en teksstyle wat hulle noem, word daarin geteken, op die skerm en in plotte. Sien [Teken teks in jou eie SHX-lettertipes](topic:shx-fonts).
- **'n Diagram uit teks.** {{cmd:DIAGRAM}} lees 'n Mermaid-vloeidiagram, 'n PlantUML-komponentdiagram, D2 of 'n van-na-lys en teken blokke en verbindings wat jy kan wysig. Sien [Teken 'n diagram uit teks](topic:text-to-diagram).
- **OLE-voorwerpe in 'n DWG.** {{cmd:OLELIST}} lys die OLE-voorwerpe wat 'n DWG dra en wat CadCraft nie self kan plaas nie, en plaas 'n kopie van 'n prent waar jy sê. Sien [Prente](topic:pictures#objects-from-other-programs-ole).
- **Jou berekeninge bly by die tekening.** Berekeningsblaaie en ontwerpredes word in die DWG saam met die klastabel bewaar.

**Tekenwerk sonder sig**

- Skakel {{ui:Tekenwerk sonder sig}} in {{ui:Instellings}} aan (of tik {{cmd:ACCESS}} en antwoord `[Aan (O)]`). CadCraft lees elke opdrag en resultaat deur jou skermleser voor, beskryf die tekening en wat naby die wyser is, laat jou die wyser beweeg en punte met die sleutelbord kies, en speel 'n klank vir elke vasvang en handvatsel. Waar jou blaaier spraak op jou rekenaar kan herken, kan opdragte gesproke word. Sien [Teken sonder sig](topic:draft-without-sight).

**In elke program**

- **Tale.** 54 tale; tien is nuut (Litaus, Lettiaans, Bosnies, Marathi, Teloegoe, Albanees, Afrikaans, Filipyns, Swahili, Oesbekies). Tale behalwe Engels is masjienkonsepte totdat 'n moedertaalspreker dit lees.
- **Invoertoestelle.** Trackpad-, pen-, 3D-muis-, speelbeheerder- en MIDI-beheer.
- **Nutsbalkrye en die eienskapsrooster.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Nutsbalkrye}} bied Omvou, 2 rye of 1 ry in die ander programme. CadCraft hou sy eie instelling in {{ui:Instellings}} › {{ui:CadCraft}} (sien [Nutsbalkrye](topic:settings#toolbar-rows)). Die gedeelde eienskapsrooster is in drie ander programme, nie in CadCraft nie.
- **Probleme, Live en byvoegings.** 'n Gedeelde Probleme-paneel wat in elke program waarsku, 'n Live-aansig van wie waar is in CadCraft Studio (sien [Werk saam aan een tekening](topic:work-live)), en 'n byvoegingslys.
- **Koppel jou KI.** Een koppeling van CadCraft Studio na al agt programme, met 'n slegs-lees-, voorstel- of wysig-vlak per program en 'n eenvoudige-woorde-logboek van wat die assistent gedoen het. CadCraft het geen eie KI nie, en Vra in elke program gebruik die KI wat jy koppel.

### Reggestel in 0.8.1

- **Eienskappe het 150 gewys in plaas van 12'-6"** in tekeninge in voet en duim. Velde wat die program self lees, behou weer hul teks.
- **DWG-lêers waarvan die klasseafdeling as die verkeerde soort gelees is** (GitHub cadcraft#5), open nou korrek.
- **Die kruisdraad wys nie meer agter pop-ups nie.**
- **Studio en die verpakte uitgawes kan tydens looptyd van taal wissel.** Vroeër was hulle net in Engels. Nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.
- **Tablette in staande modus** gee oorblywende roosterhoogte aan die doek, en blaaiemodus begin by 760 px of minder.
- **STRETCH met 'n kruisvenster, en LIMITS,** is op Studio 0.8.0 gerapporteer en was reeds reg in die 0.8-webweergawe; die melder se installeerder was ouer. Studio 0.8.1 bevat hulle.

### Nog nie in hierdie weergawe nie

- **0.8 en 0.8.1 is nie kode-onderteken nie.** Windows kan waarsku (kies {{ui:Meer inligting}}, dan {{ui:Begin tog}}); op 'n Mac, regsklik op CadCraft Studio en kies {{ui:Maak oop}}. Winkelbou's is aan die wag, en die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- **Penskets en skets-foto's** is net op verdigte foto's en 'n muis getoets, nog nie met 'n regte pen, aanraakskerm of handskets op papier nie.
- **Tekenwerk sonder sig** is met outomatiese kontroles getoets, nog nie met 'n skermleser of 'n blinde toetser nie.
- **Deling van details** het nie 'n tweepersoon-nasien gehad nie, en 'n Team Cloud Plan-gids as die Dokumente-gids is nie gebou nie.
- **Samevoeg** werk vir CadCraft se DWG- en DXF-lêers; dieselfde vir die ander programme se lêers is nie gebou nie.
- **Ontdoen oor vensters heen:** CadCraft meld elke voltooide stap, maar Studio het nog geen enkele Ontdoen vir alle programme nie; elke program ontdoen sy eie stappe.
- **'n DWG se OLE-voorwerpe** word bewaar, maar nie op hul plek geteken nie.
- **Lees van plotstyltabelle (CTB-lêers)** van ander programme is gebou, maar is nie teen 'n lêer van 'n ander program nagegaan nie.
- **Koppel jou KI:** een-klik-koppeling in Studio, die gehuisveste koppelaar vir blaaier-KI, jou eie API-sleutel binne Studio en die gepubliseerde MCP-pakket word nie in hierdie vrystelling belowe nie.

Vir die weergawe voor hierdie een, sien [Wat is nuut in 0.7](topic:whats-new-0-7).

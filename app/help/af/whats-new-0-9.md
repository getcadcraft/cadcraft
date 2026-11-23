---
title: Wat is nuut in 0.9 (vroeër)
summary: Arserings wat hul grens volg, laagGroepe, gestapelde vloere, 2D-slim mure met deure en vensters, teksstyle en 'n geformateerde teksredigeerder, 'n swewende opdragreël, rooster-vaslegging, tien maniere om 'n boog te teken, en die Dokumentepaneel.
keywords: wat is nuut 0.9, vroeëre vrystelling, wat is nuut, 0.9, vrystellingsnotas, changelog, arsering, assosiatiewe arsering, hatchedit, pat-lêer, patroonlêer, laaggroepe, laygroup, vloere, gestapelde vloere, floorlayers, slim mure, muur, deur, venster, muurgereedskap, teksstyl, styl, mtext-redigeerder, paragraaf teks, formatering, swewende opdragreël, opdragreël, boonste gebied, kompak, vaslegging aan rooster, rooster-vaslegging, f9, boog, dokumentepaneel, uitcheck, staalgroottes Verenigd Koninkryk, draw.io, Thaise teks, dxf r12, wat is nuut, vrystellingsnotas, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, outovoltooi, spook, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, samevoeg, git, fossil, access, tekenwerk sonder sig, skermleser, limiete, lêers, bearings, aunits, shx, diagram, ole, geskiedenis, vergelyk, in woorde, eienskappe, voet en duim, stretch, tale, invoertoestelle, probleme, lewendig, assistente
from: 3451e64c
---

Dit is wat in CadCraft 0.9 verander het, vergeleke met 0.8.1. CadCraft is die 2D- en 3D-tekenprogram van CadCraft Studio 0.9 en sy agt programme. 0.9 voltooi plantekening, voeg teksstyle en 'n werklike tekseditor by, en gee jou meer ruimte op die skerm.

## Nuut

### Plantekening

- **Arserings wat hul grens volg.** {{cmd:HATCH}} skakel aan wat dit begrens. Skuif, draai of skaal die grens en die arsering en sy patroon volg; herorden dit en die arsering word weer uitgewerk. {{cmd:HATCHEDIT}} (`HE`) verander 'n arsering daarna en maak of beëindig die skakel. Sien [Arsering en vulgebiede](topic:hatch).
- **Arsering-patroonlêers.** By die {{cmd:HATCH}}-vraag `Pick internal point`, tik `F` (Patroonlêer) en kies 'n `.pat`-lêer. Slegs lêers wat in die gewone formaat geskryf is, is getoets.
- **Laaggroepe.** In {{ui:Gereedskap}} op die {{ui:Lae}}-paneel: {{ui:Nuwe groep}}, {{ui:Voeg gereedgemaakte groepe by}}, {{ui:Groepeer volgens naam}}, en {{ui:Soek 'n laag}}; of tik {{cmd:LAYGROUP}} (`LG`). Sien [Organiseer 'n tekening met lae](topic:layers#group-layers).
- **Gestapelde vloere.** {{cmd:FLOORS}} (`FLR`), of {{ui:Vloere…}} in die {{ui:Meer}}-kieslys van die {{ui:Aansig}}-groep. 'n Aansigvenster op 'n blad kan een vloer wys onder {{ui:Getoonde verdieping}} in Eienskappe. {{cmd:FLOORLAYERS}} maak vloere lae vir 'n lêer wat na iemand anders gaan. Sien [Stapel vloere in een tekening](topic:floors).
- **2D-slim mure, deure en vensters.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) en {{cmd:DELOPENING}}. Hoeke, T-verbindings en kruisings word vir jou uitgewerk. Mure hou 'n rekord van hoe hulle verbind, en Eienskappe kry Verbied verbinding by begin / by einde, 'n Liggingslyn en 'n wysigbare Lengte. Sien [Teken 2D-slim mure, deure en vensters](topic:walls-2d).
- **Die muurgereedskap op plan-mure.** Tik {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} en die res. Hulle het nog geen nutsbalkknoppies nie. Sien [Muurvorms, snitte, afsette en sluitings vir 2D-mure](topic:wall-tools-2d).

### Teks

- **Teksstyle.** {{cmd:STYLE}} (`ST`), of {{ui:Teksstyl}} op die {{ui:Teken}}-nutsbalk: benoemde style met 'n lettertipe, hoogte, breedtefaktor en skuinsheid. Sien [Stel die lettertipe en grootte van teks met teksstyle](topic:text-styles).
- **'n Geformateerde paragraafteks-redigeerder.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} of 'n dubbelklik op teks maak 'n boks oop met lettertipe, grootte, vetdruk, skuinsdruk, onderstreping, deurstreping, kleur, belyning en die graad-, plus-minus- en deursnee-tekens, plus {{ui:OK}} en {{ui:Kanselleer}}. Sien [Formateer paragraafteks](topic:format-paragraph-text).
- **'n Diagram uit draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) lees ook geplakte draw.io-XML. Sien [Teken 'n diagram uit teks](topic:text-to-diagram).
- **Thaise teks in 'n PDF-druk.** Dit het vroeër as vraagtekens gedruk.

### Meer ruimte en tekenhulpmiddels

- **'n Swewende, dunner opdragreël en 'n kompakte boonste gebied.** Sleep die opdragreël se handvatpunt om dit te laat swewe, sleep sy boonrand vir minder reëls, en {{key:F2}} maak die geskiedenis oop. {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Opdragreël}} en die boonste-gebied-keuses het dieselfde instellings. Sien [Instellings](topic:settings#command-line).
- **Voorwerpvaslegging-kieslys.** Regsklik {{ui:Vasvang}} op die statusbalk, of tik {{cmd:OSNAP}}.
- **Vaslegging aan 'n rooster.** Die {{ui:Rooster-vaslegging}}-knoppie op die statusbalk, of {{key:F9}}: gekose punte gaan na die naaste roosterpunt wanneer geen voorwerpvaslegging die punt geneem het nie.
- **'n Boog op tien maniere, en Gaan voort.** {{ui:Boog}} op die {{ui:Teken}}-nutsbalk of {{cmd:ARC}}: 3-punt, die Begin/Middel/Einde-familie en die Middel/Begin/Einde-familie, en Gaan voort (druk {{key:Enter}} by die beginpunt) vanaf die laaste lyn, boog of polilyn.
- **Die Dokumentepaneel.** {{cmd:DOCUMENTS}} (`DOCS`) of {{ui:Dokumente…}} in die {{ui:Meer}}-kieslys van die {{ui:Aansig}}-groep: hersiening, toestand en uitcheck vir elke tekening in 'n projekvouer. Dit maak oop as 'n gesentreerde dialoog. Sien [Dokumente](topic:documents).

### Lêers

- **Verenigde Koninkryk-staalgroottes.** 976 profiele in die Standaardpaneel, getik soos op tekeninge (byvoorbeeld `305x165x40 UB`).
- **Suid-Afrikaanse pakkette** (tekenpraktyk en bouregulasies) as pakkette van die Bouregulasies-byvoeging. Die getalle is nie geverifieer nie.
- **Byvoegings vir CadCraft,** op aanvraag bygevoeg en standaard af: binnelandse beligtingsontwerp, skyfie-ontwerp (HDL na uitleg), roeteerder-snywerk, stroombaansimulasie, rollerkettingtandwiele en Bouregulasies-landpakkette.

## Reggemaak

- Die skuif, draai of skaal van 'n arsering het sy patroon agtergelaat.
- {{cmd:GRIDMOVE}} het 'n hele plan-muur wat net by die roosterlyn begin, saamgeneem. 'n Muur word nou volgens sy einde beoordeel.
- Die rooster het net binne die tekeninglimiete gewys selfs met limiete af.
- Die blokkelys in die syspaneel rol, en 'n naam wat geen blok is nie, lys die blokke wat daarmee begin ("Did you mean").
- DXF R12-lêers wat AutoCAD geweier het ("Unknown group 1001 for table") maak nou daar oop.
- Baie groot lêers (ongeveer 70,000 entiteite en meer) het met "Maximum call stack size exceeded" misluk om oop te maak.
- DWG-lêers van AutoCAD 2018 en later met 'n hoë instandhoudingsweergawe het met "bad BITLONG code 11" misluk.
- In die paragraafteksboks hou 'n nuwe grootte wat vir 'n gekose deel getik is die seleksie.

## In elke program

Bootstrap-wenke op elke beheer met 'n wenk, 'n beginwenk wat jy kan toemaak, oortjiestrokies wat rol wanneer hulle nie pas nie, en 'n blaaier-oortjietitel wat die oop tekening volg (`<drawing> - CadCraft | CadCraft`). {{ui:Instellings}} › {{ui:Uitleg}} is nou 'n aftreklys van tweelyn-keuses. Die taallys in {{ui:Instellings}} is langer as in 0.8. Lewendige mede-redigering, Biblioteekversamelings en gewig- en temperatuureenhede word in die Studio-notas beskryf.

## Eerlike grense

- Paragraafteks het geen kolle- of genommerde lyste, oortjielat of regverdig nie. Gedrukte PDF's stel teks in Helvetica.
- Plan-mure is reguit, so 'n boog word as kort mure geteken. Die gemeenskap se hand-toets van die muurgereedskap is nog hangende.
- Laaggroepe word nie in AutoCAD se eie formaat geskryf nie, so AutoCAD wys 'n plat lys. Ander programme wys alle vloere saam tensy jy {{cmd:FLOORLAYERS}} laat loop.
- Die Dokumentepaneel is nog nie deur twee mense op 'n werklike deel getoets nie. Roeteerder-snywerk het op geen werklike masjien geloop nie. Die beligtingsberaming is teen 'n fotonspoor nagegaan, nie 'n ander program nie. Ingenieursbyvoegings is nagaankontroles, nie 'n plaasvervanger vir 'n ingenieur se hersiening nie.
- Tale anders as Engels is masjienkonsepte, en sommige van die nuwe woorde is net Engels.

## Vroeër: 0.8 en 0.8.1

Dit is wat in CadCraft 0.8 en 0.8.1 verander het, vergeleke met 0.7. 0.8 (1 November 2026) voeg tekenhulpmiddels by wat uit jou eie tekening werk, deur reëls op jou rekenaar en sonder 'n model, en 0.8.1 (2 November 2026) herstel foute wat ná dit gerapporteer is.

### Nuut

**Tekening wat jou gedagte voltooi**

- **'n Spook wys wat volgende kom.** Met geen opdrag wat loop nie, wys 'n grys stippelspook wat jou tekening se eie patrone sê volgende kom: die volgende stut op dieselfde afstand, die volgende trap, die ontbrekende muur van 'n kamer. Druk {{key:Tab}} om dit as een ontdoen-stap te teken, of {{key:Esc}} om dit weg te wys. Dit kyk net na die nuutste voorwerpe, so dit bly glad op 'n groot tekening. Skakel dit af in {{ui:Instellings}} › {{ui:CadCraft}} of met {{cmd:AUTOCOMPLETE}} `Off`.
- **Die volgende punt terwyl jy 'n lyn teken.** Midde-in {{cmd:LINE}} of {{cmd:PLINE}} is die spook die volgende punt: die volgende trapstap, die vierde hoek van 'n reghoek, of die punt wat dit sluit. Bring die kursor naby en druk {{key:Tab}}, asof jy daar geklik het.
- **Pen-skette word presiese meetkunde.** {{cmd:SKETCHFIX}}: teken growwe strepe met 'n pen, muis of vinger en elkeen word 'n skoon lyn, sirkel, boog, reghoek of polilyn, vasgevang aan wat reeds geteken is. Sien [Skets met 'n pen en kry presiese meetkunde](topic:sketch-with-a-pen).
- **'n Foto van 'n skets word 'n tekening.** {{cmd:PHOTOSKETCH}} (`PSK`) vind die papier in 'n foto, reguit die perspektief, pas die papiergrootte en skaal toe wat jy gee, en trek die penlyne na lyne en boë op 'n laag vir elke penkleur. Letters word nie getrek nie.
- **Dimensioneer dit volgens reëls.** {{cmd:AUTODIM}} (`ADIM`) maak kettings van maatlyne langs die kante wat jy kies, 'n algemene grootte, openingswydtes, gatdeursnee en, met `Grid`, roosterafstand. Dit herhaal nooit 'n maatlyn wat reeds daar is nie.
- **Skuif 'n roosterlyn en die stel volg.** {{cmd:GRIDMOVE}} (`GM`): mure wat op die roosterlyn eindig rek saam daarmee, mure langs dit, kolomme, die bel en etiket beweeg, en maatlyne daarop meet die nuwe afstand. Een ontdoen-stap.

**Blaaie, detail en etikette**

- **Blaaie wat hulself uitlê.** {{cmd:AUTOSHEET}} neem jou benoemde aansigte (of die afsonderlike stukke van die model), kies 'n papiergrootte en 'n standaardskaal, en sit die aansigte op nuwe blaaie met 'n titelblok en 'n naam-en-skaal-onderskrif. Alles bly wysigbaar. Sien [Lê blaaie vir my uit](topic:lay-out-sheets-for-me).
- **Jou firma se details, aangebied terwyl jy teken.** {{cmd:DETAILS}} (`DET`) hou jou eie detailblokke. Wanneer wat jy kies by een pas volgens die woorde op sy lae, blokname en notas, sê die statusbalk so; kies dit en plaas dit. {{cmd:DETAILS}} › Deel sit jou lys in jou Dokumentevouer en bring in wat jou span bygevoeg het. Instellings skakel die aanbiedings af.
- **Etikette op blokke.** {{cmd:TAGS}} definieer 'n etiket (sy soort, die waardes wat dit kan neem, die blokke waarop dit van toepassing is), stel dit op die blokverwysings wat jy kies, en lys hulle as 'n skedule wat jy as CSV kan stoor. Die definisies word in die DWG gehou. Sien [Etikette](topic:tags).
- **Tekeninglimiete.** {{cmd:LIMITS}} stel 'n reghoek vir die tekening: die rooster vul dit en Zoem Alles wys dit. Die limiete wys as 'n omtrek en word in DWG en DXF gestoor, saam met die papierlimiete. Sien [Stel die tekeninglimiete](topic:drawing-limits).

**Met ander mense en ander programme werk**

- **Draai 'n merk in 'n hersiening.** {{cmd:REDLINE}} lees die pakket wat MarkupCraft skryf en lys elke verandering. Aanvaar of verwerp elkeen met 'n nota; die aanvaarde kry 'n hersieningswolk en 'n hersieningslogboek in een ontdoen-stap, en jy stoor die antwoordlêer wat die merke in MarkupCraft sluit. Sien [Draai 'n merk in 'n hersiening](topic:redline-to-revision).
- **Tekeninge wat git en Fossil kan samevoeg.** Met {{ui:Samevoegvriendelike lêers}} aan in {{ui:Instellings}} › {{ui:CadCraft}}, kry elke voorwerp 'n sleutel wat nooit verander nie (lêers is ongeveer 10 persent groter). `cadcraft merge base ours theirs` voeg twee mense se wysigings van een DWG- of DXF-voorwerp vir voorwerp saam en meld net waar twee mense dieselfde ding verander het. Sien [Voeg twee mense se wysigings van een tekening saam](topic:merge-drawings).
- **Wat verander het, in woorde.** In Geskiedenis gee Vergelyk 'n gewone lys: waar dinge verander het, hoe groot die plekke is, wat bygevoeg, verwyder of verander is, en die teks wat geredigeer is. Sien [Sê in woorde wat verander het](topic:changes-in-words).
- **Rigtings en hoeke.** Tik 'n rigting as 'n landmeter se rigting soos N45°23'30"E, of in grade, minute en sekondes, waar ook al 'n hoek gevra word; AUNITS stel hoe hoeke gewys word. Sien [Tik en wys rigtings en hoeke](topic:bearings-and-angles).
- **Jou eie SHX-lettertipes.** Gee CadCraft 'n vouer SHX-lettertipes en teksstyle wat hulle noem, word daarin geteken, op die skerm en in drukke. Sien [Teken teks in jou eie SHX-lettertipes](topic:shx-fonts).
- **'n Diagram uit teks.** {{cmd:DIAGRAM}} lees 'n Mermaid-vloeidiagram, 'n PlantUML-komponentdiagram, D2 of 'n van-na-lys en teken blokke en verbindings wat jy kan wysig. Sien [Teken 'n diagram uit teks](topic:text-to-diagram).
- **OLE-voorwerpe in 'n DWG.** {{cmd:OLELIST}} lys die OLE-voorwerpe wat 'n DWG dra wat CadCraft nie self kan plaas nie, en plaas 'n afskrif van 'n prent waar jy sê. Sien [Prente](topic:pictures#objects-from-other-programs-ole).
- **Jou berekeninge bly by die tekening.** Berekeningsblaaie en ontwerpredes word in die DWG saam met die klastabel gehou.

**Tekenen sonder sig**

- Skakel {{ui:Tekenwerk sonder sig}} aan in {{ui:Instellings}} (of tik {{cmd:ACCESS}} en antwoord `On`). CadCraft praat elke opdrag en resultaat deur jou skermleser, beskryf die tekening en wat naby die kursor is, laat jou die kursor skuif en punte met die sleutelbord kies, en speel 'n klank vir elke vaslegging en handvatpunt. Waar jou blaaier spraak op jou rekenaar kan herken, kan opdragte gepraat word. Sien [Teken sonder sig](topic:draft-without-sight).

**In elke program**

- **Tale.** 54 tale; tien is nuut (Litaus, Lettis, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filippyns, Swahili, Oesbekies). Tale anders as Engels is masjienkonsepte totdat 'n moedertaalspreker hulle lees.
- **Invoertoestelle.** Trackpad-, pen-, 3D-muis-, speletjiebeheerder- en MIDI-beheer.
- **Nutsbalkrye en die eiendomsrooster.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Nutsbalkrye}} bied Wrap, 2 rye of 1 ry in die ander programme. CadCraft hou sy eie instelling in {{ui:Instellings}} › {{ui:CadCraft}} (sien [Nutsbalkrye](topic:settings#toolbar-rows)). Die gedeelde eiendomsrooster is in drie ander programme, nie in CadCraft nie.
- **Probleme, Lewendig en byvoegings.** 'n Gedeelde Probleme-paneel wat in elke program waarsku, 'n Lewendig-aansig van wie waar is in CadCraft Studio (sien [Werk saam aan een tekening](topic:work-live)), en 'n byvoegingslys.
- **Koppel jou KI.** Een verbinding van CadCraft Studio na al agt programme, met 'n net-lees-, voorstel- of wysigingsvlak per program en 'n duidelike logboek van wat die assistent gedoen het. CadCraft het geen eie KI nie, en Vra in elke program gebruik die KI wat jy koppel.

### Reggemaak in 0.8.1

- **Eienskappe het 150 gewys in plaas van 12'-6"** in voet-en-duim-tekeninge. Velde wat die program self lees hou weer hul teks.
- **DWG-lêers waarvan die klasse-afdeling as die verkeerde soort gelees is** (GitHub cadcraft#5) maak nou korrek oop.
- **Die kruisdraad wys nie meer agter pop-ups nie.**
- **Studio en die verpakte uitgawes kan tydens gebruik van taal verander.** Vroeër was dit net Engels. Nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.
- **Tablette in portret** gee ekstra roosterhoogte aan die doek, en blaaie-modus begin by 760 px of minder.
- **STRETCH met 'n kruisvenster, en LIMITS,** is op Studio 0.8.0 gerapporteer en was al reg in die 0.8-webbou; die melder se installeerder was ouer. Studio 0.8.1 dra hulle.

### Nog nie in hierdie weergawe nie

- **0.8 en 0.8.1 is nie kode-geteken nie.** Windows kan waarsku (kies {{ui:Meer inligting}}, dan {{ui:Tog uitvoer}}); op 'n Mac, regsklik CadCraft Studio en kies {{ui:Open}}. Winkelbouwerke is aan die hou, en die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- **Penskettse en fotoskettse** is net op versinde foto's en 'n muis getoets, nog nie met 'n werklike pen, aanraakskerm of handskets op papier nie.
- **Teken sonder sig** is met outomatiese kontroles getoets, nog nie met 'n skermleser of 'n blinde toetser nie.
- **Deel van details** het nog nie 'n tweepersoon-kontrole gehad nie, en 'n Team Cloud Plan-vouer as die Dokumentevouer is nie gebou nie.
- **Samevoeging** werk vir CadCraft se DWG- en DXF-lêers; dieselfde vir die ander programme se lêers is nie gebou nie.
- **Ongedaan maak oor vensters:** CadCraft meld elke voltooide stap, maar Studio het nog geen enkele Ontdoen vir alle programme nie; elke program ontdoen sy eie stappe.
- **'n DWG se OLE-voorwerpe** word bewaar maar nie op hul plek geteken nie.
- **Lees van plotstyltabelle (CTB-lêers)** van ander programme is gebou maar nie teen 'n lêer van 'n ander program nagegaan nie.
- **Koppel jou KI:** een-klik-koppeling in Studio, die gehuisveste verbinder vir blaaier-KI, jou eie API-sleutel binne Studio en die gepubliseerde MCP-pakket word nie in hierdie vrystelling belowe nie.

Vir die weergawe voor hierdie een, sien [Wat is nuut in 0.7](topic:whats-new-0-7).

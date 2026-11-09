---
title: Wat is nuut in 0.8 en 0.8.1
summary: "'n Spook wat jou tekening voltooi, pensketse en sketsfoto's wat in meetkunde omgeskakel word, velle wat hulself uitlê, detail wat aangebied word soos jy teken, GRIDMOVE en AUTODIM, etikette, samevoegvriendelike lêers, rooi merkings wat in hersienings omgeskakel word, tekenwerk sonder sig, tekeningsgrense, rigtings, SHX-lettertipes, diagramme uit teks, en regstellings in 0.8.1."
keywords: wat is nuut, nuut, vrystellingsnotas, veranderinglys, veranderinge, 0.8, 0.8.1, weergawe, nuwe funksies, outoaanvul, spook, tab, sketchfix, photosketch, autosheet, detail, gridmove, autodim, etikette, rooi merk, samevoeg, git, fossil, toegang, tekenwerk sonder sig, skermleser, perke, rigtings, aunits, shx, diagram, ole, geskiedenis, vergelyk, in woorde, eienskappe, voet en duim, rek, tale, invoertoestelle, probleme, lewendig, assistente
from: 9dd82db5
---

Dit is wat in CadCraft 0.8 en 0.8.1 verander het, vergeleke met 0.7. 0.8 (1 November 2026) voeg tekenhulpmiddels by wat uit jou eie tekening werk, deur reëls op jou rekenaar en sonder 'n model, en 0.8.1 (2 November 2026) regstel foute wat ná die vrystelling gerapporteer is.

## Nuut

### Tekening wat jou gedagte voltooi

- **'n Spook wys wat volgende kom.** Wanneer geen opdrag loop nie, wys 'n grys gestippelde spook wat die patrone van jou eie tekening sê volgende kom: die volgende stut met dieselfde afstand, die volgende trede van 'n trap, die ontbrekende muur van 'n vertrek. Druk {{key:Tab}} om dit as een ontdoenstap te teken, of {{key:Esc}} om dit weg te maak. Dit kyk net na die nuutste voorwerpe, sodat dit glad bly op 'n groot tekening. Skakel dit af in {{ui:Instellings}} › {{ui:CadCraft}} of met {{cmd:AUTOCOMPLETE}} `Off`.
- **Die volgende punt terwyl jy 'n lyn teken.** Midde-in {{cmd:LINE}} of {{cmd:PLINE}} is die spook die volgende punt: die volgende trede van 'n trap, die vierde hoek van 'n reghoek, of die punt wat dit sluit. Beweeg die wyser naby daaraan en druk {{key:Tab}}, asof jy daar geklik het.
- **Pensketse word presiese meetkunde.** {{cmd:SKETCHFIX}}: teken growwe lyne met 'n pen, muis of vinger en elkeen word 'n skoon lyn, sirkel, boog, reghoek of polilyn, vasgevang aan wat reeds geteken is. Sien [Skets met 'n pen en kry presiese meetkunde](topic:sketch-with-a-pen).
- **'n Foto van 'n skets word 'n tekening.** {{cmd:PHOTOSKETCH}} (`PSK`) vind die papier in 'n foto, reguleer die perspektief, pas die papiergrootte en skaal toe wat jy gee, en trek die penlyne oor na 'n laag vir elke penkleur. Letters word nie oorgetrek nie.
- **Maat dit volgens reëls.** {{cmd:AUTODIM}} (`ADIM`) maak kettings van maatlyne langs die sye wat jy kies, 'n algehele grootte, openingswydtes, gatdeursnee en, met `Grid`, rasterafstand. Dit herhaal nooit 'n maat wat reeds daar is nie.
- **Skuif 'n rasterlyn en die stel volg.** {{cmd:GRIDMOVE}} (`GM`): mure wat op die rasterlyn eindig, rek saam daarmee, mure langs dit, kolomme, die sirkeltjie en etiket daarvan skuif, en maate daarop meet die nuwe afstand. Een ontdoenstap.

### Velle, detail en etikette

- **Velle wat hulself uitlê.** {{cmd:AUTOSHEET}} neem jou benoemde aansigte (of die afsonderlike dele van die model), kies 'n papiergrootte en 'n standaardskaal, en plaas die aansigte op nuwe velle met 'n titelblok en 'n naam-en-skaal-onderskrif. Alles bly redigeerbaar. Sien [Lê velle vir my uit](topic:lay-out-sheets-for-me).
- **Jou firma se detail, aangebied soos jy teken.** {{cmd:DETAILS}} (`DET`) hou jou eie detailblokke. Wanneer wat jy kies by die woorde op sy lae, blokname en notas pas, sê die statusbalk dit; kies dit en plaas dit. {{cmd:DETAILS}} › Deel plaas jou lys in jou Dokumente-vouer en bring in wat jou span bygevoeg het. Instellings skakel die aanbiedings af.
- **Etikette op blokke.** {{cmd:TAGS}} definieer 'n etiket (die soort, die waardes wat dit mag aanneem, die blokke waarop dit van toepassing is), stel dit op die blokverwysings wat jy kies, en lys hulle as 'n skedule wat jy as CSV kan stoor. Die definisies word in die DWG bewaar. Sien [Etikette](topic:tags).
- **Tekeningsgrense.** {{cmd:LIMITS}} stel 'n reghoek vir die tekening: die raster vul dit en zoem Alles wys dit. Die grense verskyn as 'n buitelyn en word in DWG en DXF bewaar, saam met die papiergrense. Sien [Stel die tekeningsgrense](topic:drawing-limits).

### Werk saam met ander mense en met ander programme

- **Skakel 'n opmerking om in 'n hersiening.** {{cmd:REDLINE}} lees die pakket wat MarkupCraft skryf en lys elke verandering. Aanvaar of verwerp elkeen met 'n notas; die aanvaarde een kry 'n hersieningswolk en 'n hersieningslog in een ontdoenstap, en jy stoor die antwoordlêer wat die opmerkings in MarkupCraft sluit. Sien [Skakel 'n opmerking om in 'n hersiening](topic:redline-to-revision).
- **Tekeninge wat git en Fossil kan samevoeg.** Met {{ui:Samevoegvriendelike lêers}} aan in {{ui:Instellings}} › {{ui:CadCraft}}, kry elke voorwerp 'n sleutel wat nooit verander nie (lêers is ongeveer 10 persent groter). `cadcraft merge base ours theirs` voeg dan twee mense se wysigings van een DWG- of DXF-voorwerp vir voorwerp saam en meld net waar twee mense dieselfde ding verander het. Sien [Voeg twee mense se wysigings van een tekening saam](topic:merge-drawings).
- **Wat verander het, in woorde.** In Geskiedenis gee Vergelyk 'n eenvoudige lys: waar dinge verander het, hoe groot die plekke is, wat bygevoeg, verwyder of verander is, en die teks wat geredigeer is. Sien [Sê in woorde wat verander het](topic:changes-in-words).
- **Rigtings en hoeke.** Tik 'n rigting as 'n landmeter se rigting soos N45°23'30"E, of in grade, minute en sekondes, oral waar 'n hoek gevra word; AUNITS stel in hoe hoeke gewys word. Sien [Tik en wys rigtings en hoeke](topic:bearings-and-angles).
- **Jou eie SHX-lettertipes.** Gee CadCraft 'n gids met SHX-lettertipes en teksstyle wat hulle noem, en teks word daarin geteken, op die skerm en in afdrukke. Sien [Teken teks in jou eie SHX-lettertipes](topic:shx-fonts).
- **'n Diagram uit teks.** {{cmd:DIAGRAM}} lees 'n Mermaid-vloeidiagram, 'n PlantUML-komponentdiagram, D2 of 'n van-na-lys en teken blokke en verbindings wat jy kan wysig. Sien [Teken 'n diagram uit teks](topic:text-to-diagram).
- **OLE-voorwerpe in 'n DWG.** {{cmd:OLELIST}} lys die OLE-voorwerpe wat 'n DWG dra en wat CadCraft nie self kan plaas nie, en plaas 'n kopie van 'n prent waar jy sê. Sien [Prente](topic:pictures#objects-from-other-programs-ole).
- **Jou berekeninge bly by die tekening.** Berekeningsvelle en ontwerpredes word saam met die klastabel in die DWG bewaar.

### Tekenwerk sonder sig

- Skakel {{ui:Tekenwerk sonder sig}} aan in {{ui:Instellings}} (of tik {{cmd:ACCESS}} en antwoord `On`). CadCraft lees elke opdrag en resultaat deur jou skermleser voor, beskryf die tekening en wat naby die wyser is, laat jou die wyser beweeg en punte met die sleutelbord kies, en speel 'n klank vir elke vangpunt en handvatsel. Waar jou blaaier spraak op jou rekenaar kan herken, kan opdragte uitgespreek word. Sien [Teken sonder sig](topic:draft-without-sight).

### In elke app

- **Tale.** 54 tale; tien is nuut (Litaus, Lettisch, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filipino, Swahili, Oesbeeks). Tale buite Engels is masjienkonsepte totdat 'n moedertaalspreker dit lees.
- **Invoertoestelle.** Raakpaneel, pen, 3D-muis, speletjiebeheerder en MIDI-beheer.
- **Nutsbalkrye en die eienskapsrooster.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Nutsbalkrye}} bied Terugvou, 2 rye of 1 ry in die ander apps. CadCraft hou sy eie instelling in {{ui:Instellings}} › {{ui:CadCraft}} (sien [Nutsbalkrye](topic:settings#toolbar-rows)). Die gedeelde eienskapsrooster is in drie ander apps, nie in CadCraft nie.
- **Probleme, Live en byvoegings.** 'n Gedeelde Probleme-paneel wat in elke app waarsku, 'n Live-aansig van wie waar in CadCraft Studio is (sien [Werk saam aan een tekening](topic:work-live)), en 'n lys van byvoegings.
- **Koppel jou KI.** Een koppeling vanaf CadCraft Studio na al agt apps, met 'n vlak van slegs-lees, voorstel of wysig per app, en 'n eenvoudige logboek van wat die assistent gedoen het. CadCraft het geen KI van sy eie nie, en Vra in elke app gebruik die KI wat jy koppel.

## Reggestel in 0.8.1

- **Eienskappe het 150 gewys in plaas van 12'-6"** in voet-en-duim-tekeninge. Velde wat die app self lees, behou weer hul teks.
- **DWG-lêers waarvan die klasseafdeling as die verkeerde tipe gelees is** (GitHub cadcraft#5) open nou korrek.
- **Die kruisdraad verskyn nie meer agter opspringvensters nie.**
- **Studio en die verpakte weergawes kan tydens die loop van die program van taal verander.** Vantevore was hulle net in Engels. Nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.
- **Tablette in staande oriëntasie** gee spaarruimte vir die rasterhoogte aan die doek, en velemodus begin by 760 px of minder.
- **STRETCH met 'n kruisende venster, en LIMITS,** is op Studio 0.8.0 gerapporteer en was reeds reg in die 0.8-webbou; die melder se installeerder was ouer. Studio 0.8.1 bevat hulle.

## Nog nie in hierdie weergawe nie

- **0.8 en 0.8.1 is nie kodeteken nie.** Windows kan waarsku (kies {{ui:Meer inligting}}, en dan {{ui:Tog laat loop}}); op 'n Mac, regsklik op CadCraft Studio en kies {{ui:Maak oop}}. Winkelbouwerke is opgeskort, en die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- **Pensketse en sketsfoto's** is net op versonne foto's en met 'n muis getoets, nog nie met 'n regte pen, aanraakskerm of 'n handskets op papier nie.
- **Tekenwerk sonder sig** is met outomatiese kontroles getoets, nog nie met 'n skermleser of 'n blinde toetser nie.
- **Deel van detail** het nog nie 'n nagaan deur twee mense gehad nie, en 'n Team Cloud Plan-vouer as die Dokumente-vouer is nie gebou nie.
- **Samevoeg** werk vir CadCraft se DWG- en DXF-lêers; dieselfde vir die ander apps se lêers is nie gebou nie.
- **Ontdoen oor vensters heen:** CadCraft meld elke voltooide stap, maar Studio het nog nie een Ontdoen vir alle apps nie; elke app ontdoen sy eie stappe.
- **'n DWG se OLE-voorwerpe** word bewaar maar nie op hul plek geteken nie.
- **Lees van plotstyltabelle (CTB-lêers)** van ander programme is gebou maar nog nie teen 'n lêer van 'n ander program getoets nie.
- **Koppel jou KI:** eenklikkoppeling in Studio, die gehuisveste koppelaar vir blaaier-KI, jou eie API-sleutel binne Studio en die gepubliseerde MCP-pakket word in hierdie vrystelling nie belowe nie.

Vir die weergawe voor hierdie een, sien [Wat is nuut in 0.7](topic:whats-new-0-7).

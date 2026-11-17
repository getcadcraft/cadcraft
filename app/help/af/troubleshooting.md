---
title: Foutoplossing
summary: Boodskappe wat CadCraft wys en probleme wat jy kan teëkom, elk met die oorsaak en die regstelling.
keywords: probleem, fout, werk nie, boodskap, kan nie oopmaak nie, onbekende opdrag, niks gebeur nie, vas, sleutels werk nie, leeg, ontbrekend, regstel
from: 8299b222
---

## Lêers oopmaak

| Boodskap of verskynsel | Oorsaak | Regstelling |
|---|---|---|
| "CadCraft maak DWG- en DXF-tekeninge oop. "…" is nie een van die twee nie." | Die lêer is nie 'n `.dwg` of `.dxf` nie. | Maak die tekeningslêer self oop. 'n PDF kan ingebring word (Maak oop vra: invoer of heg, sien [PDF-onderlae](topic:pdf-underlay)); prente gaan in met `IMAGEATTACH`. |
| "Hierdie binêre DXF eindig in die middel van 'n voorwerp: die lêer is afgesny of beskadig." | Die binêre DXF hou op voor sy einde. | Tik RECOVER om oop te maak wat gelees kan word, of vra weer vir die lêer. |
| "Hierdie lêer is nie 'n leesbare DXF nie (verkeerde groepkode op reël …)." | Die DXF is beskadig of is nie werklik 'n DXF nie. | Vra weer vir die lêer, of vir 'n DWG. |
| "Hierdie tekening kon nie gelees word nie. Dit is dalk beskadig, of gestoor in 'n weergawe wat die leser nog nie hanteer nie (…)." | Die DWG-leser kon dit nie lees nie. | Vra vir die DWG wat in 'n ouer weergawe gestoor is, of vir 'n DXF. |
| "Hierdie tekening is van AutoCAD R11 / R12 (DWG AC1009), ouer as wat CadCraft lees …" | DWG-lêers van Release 12 en vroeër gebruik 'n formaat wat CadCraft nie lees nie. | Stoor dit in die program wat dit gemaak het as DXF (enige weergawe) of as 'n nuwer DWG, en maak daardie oop. CadCraft se eie Stoor as bied DXF R12 aan vir programme wat daardie ou formaat wil hê. |
| "Kon nie oopmaak nie …" gevolg deur 'n netwerkboodskap, by die eerste DWG | Die DWG-leser kon nie afgelaai word nie: jy is vanlyn en CadCraft is nie vir vanlyngebruik gestoor nie, of die verbinding het gebreek. | Gaan aanlyn en probeer weer, of maak 'n DXF oop. Klik {{ui:Stoor vir vanlyn}} en wag vir "Vanlyn gereed" sodat DWG-lêers die volgende keer vanlyn oopmaak. Sien [Werk vanlyn](common:offline). |
| Die vanlynknoppie sê "Kon nie stoor nie" | Sommige lêers is nie afgelaai nie. | Kontroleer die verbinding en klik die knoppie om weer te probeer. |
| Die vanlynknoppie sê "Vanlyn nie beskikbaar nie" | Privaatvensters en sommige bestuurde rekenaars kan nie 'n vanlynkopie hou nie. | Gebruik 'n normale venster, of bly aanlyn. |
| CadCraft maak nie oop sonder verbinding nie | Dit is nie vir vanlyngebruik in hierdie blaaier gestoor nie, of die blaaier het dit uitgevee. | Die volgende keer as jy aanlyn is, klik {{ui:Stoor vir vanlyn}} en wag vir "Vanlyn gereed". |
| Die tekening maak oop, maar dele ontbreek | Voorwerpe wat CadCraft nog nie kan teken nie, of lae wat in die lêer af of gevries is. | Lees "Oor hierdie lêer" in die linkerpaneel. Kyk na die {{ui:Lae}}-paneel. |
| Teks omloop na twee reëls | CadCraft teken teks in 'n Helvetica-agtige lettertipe, breër as sommige CAD-lettertipes. | Verkort die teks in Eienskappe, of leef met die ekstra reël. |
| 'n Sirkel wys as 'n ellips, of gespieëlde teks lees die korrekte kant op | Die voorwerp is in 'n skuins vlak geteken, of van onder gesien, in die program wat die lêer gemaak het. CadCraft wys dit soos van bo gesien, soos die grondplan-aansig van daardie program dit doen; teks bly leesbaar. | Niks om reg te maak nie. Om dit op die ander program se manier te sien, vra vir die tekening plat gemaak, of met die voorwerpe van bo geteken. |
| 'n Blok, sirkel of maat staan êrens anders as in die program wat die lêer gemaak het | 'n Tekengeval wat CadCraft verkeerd lees. | Sê vir ons op Discord, met die lêer as jy dit kan deel. |

## Die opdragreël

| Boodskap of verskynsel | Oorsaak | Regstelling |
|---|---|---|
| "Onbekende opdrag "…". Tik HELP vir die lys." | Geen opdrag of alias met daardie naam nie. | Tik `HELP`, of sien [Opdragverwysing](topic:commands). Sommige bekende opdragte is [nog nie gebou nie](topic:not-built-yet). |
| "Geen sodanige opdrag" langs die opdragreël terwyl jy tik | Wat jy getik het pas by niks nie. | Hou aan tik, of kontroleer die spelling. |
| "Punt- of opsiesleutelwoord benodig." | Wat jy getik het is nie 'n punt of 'n opsie nie. | Kontroleer die formaat: `x,y`, `@dx,dy`, `@d<a`, of 'n enkele getal. Sien [Koördinaat- en afstandinvoer](topic:coordinate-entry). |
| "Vereis 'n positiewe getal of twee punte." | 'n Afstand was negatief of nie 'n getal nie. | Tik 'n positiewe getal, of klik twee punte. |
| "Vereis 'n hoek in grade of twee punte." | Die hoek was nie 'n getal nie. | Tik grade as 'n gewone getal. |
| "Vereis 'n getal." | 'n Getal was verwag. | Tik net syfers. |
| "Ongeldige opsiesleutelwoord." | Die letters pas nie by 'n opsie nie. | Tik die hoofletters wat in die vierkanthakies gewys word. |
| `*Cancel*` | Jy het {{key:Esc}} gedruk, of {{key:Enter}} waar 'n punt nodig was. | Begin die opdrag weer. |
| Tik bereik nie die opdragreël nie | 'n Boks in 'n paneel of 'n dialoog het die kursor. | Druk {{key:Enter}} of {{key:Esc}}, of klik op die tekening. |
| Die opdrag gebruik voorwerpe wat jy nie gekies het nie | Hulle is gekies voordat jy dit begin het. | Druk {{key:Esc}} voor die opdrag. |
| 'n Lyn het êrens onverwags gegaan | `x,y` is absoluut. | Gebruik `@dx,dy` vir relatiewe punte. |
| "Voltooi of kanselleer eers die huidige opdrag (Esc)." | Jy het {{key:Mod+S}} gedruk terwyl 'n opdrag aan die gang was. | Druk {{key:Esc}}, en stoor dan. |
| "Kon nie as DWG (AutoCAD 2000) stoor nie: … Probeer Stoor as, en dan DXF." | Iets in die tekening kon nie as DWG geskryf word nie. | Druk {{key:Mod+Shift+S}}, kies {{ui:DXF R12}} en klik {{ui:Stoor}}. |
| "Nie gestoor nie." | Jy het die dialoog {{ui:Stoor 'n kopie as}} met {{ui:Kanselleer}} of {{key:Esc}} toegemaak. | Druk {{key:Mod+Shift+S}} weer en klik {{ui:Stoor}}. |

## Redigeer

| Boodskap of verskynsel | Oorsaak | Regstelling |
|---|---|---|
| 'n Voorwerp kies nie | Die laag is gesluit, af of gevries; of jy is op 'n blad en dit is die model binne 'n aansigvenster. | Ontsluit die laag, of gaan na die {{ui:Model}}-oortjie. |
| "Niks gevind daar nie." | Geen voorwerp onder die klik nie. | Zoem in en klik op die lyn self. |
| "Niks kruis daardie voorwerp daar nie." | {{cmd:TRIM}} het geen voorwerp gevind wat die stuk wat jy gekies het, kruis nie. | Kontroleer dat die snylyn dit regtig kruis. |
| "Kan nie daardie voorwerp afsny nie." | Afsny werk op lyne, boë, sirkels en polilyne. | Ontbind blokke eers, of vee uit en teken weer. |
| "Geen grens in daardie rigting nie." | {{cmd:EXTEND}} het niks gevind om aan te sluit nie. | Kies nader aan die einde wat moet groei. |
| "Kan nie daardie voorwerp parallel versit nie." | Parallelversetting werk op lyne, boë, sirkels en polilyne. | Ontbind dit eerste, of teken 'n parallelle lyn. |
| "Kan nie so ver parallel versit nie." | Die parallelversetting sou die vorm binne-stebuite draai. | Gebruik 'n kleiner afstand. |
| "Radius is te groot." of "Afstand is te groot." | Die afronding of afskuining sou verder as die einde van 'n lyn loop. | Stel 'n kleiner radius met `R`, of kleiner afstande met `D`. |
| "Slegs die eerste of laaste segment van 'n oop polilyn kan teruggesny word." | Die hoek sou in die middel van 'n polilyn sny. | Kies twee segmente van die polilyn langs mekaar, of gebruik `P` vir elke hoek. |
| "Kies 'n tweede, ander lyn." | Die tweede keuse was dieselfde lyn, of nie 'n lyn nie. | Kies 'n ander lyn. |
| "Slegs polilyne, blookverwysings en afmetings ontbind." | Die keuse het niks gehad om te ontbind nie. | Kies 'n polilyn, blookverwysing of afmeting. |
| "Dit is die huidige laag. Maak eers 'n ander laag die huidige laag." | Jy het die huidige laag probeer afskakel. | Klik op 'n ander laag se naam, en skakel dan hierdie een af. |
| "Daar is reeds 'n laag met die naam …" | Laagname moet uniek wees. | Kies 'n ander naam. |
| "Niks om te ontdoen nie." | Daar is niks oor om te ontdoen nie, of jy het 'n tekening oopgemaak of begin (dit maak die geskiedenis leeg). | — |

## Afmetings en blokke

| Boodskap of verskynsel | Oorsaak | Regstelling |
|---|---|---|
| Maatteks en pyltjies is baie klein of baie groot | Groottes is in tekeningseenhede; die algemene skaal pas nie by die tekening nie. | Stel {{cmd:DIMSCALE}} op die drukskaal; sien [Stel maatgroottes](topic:dimension-settings). |
| "Kies 'n punt binne die hoek wat jy wil meet." | Die hoekmaat se plek lê op 'n been. | Klik binne die hoek. |
| "Daardie lyne is parallel." | Parallelle lyne het geen hoek tussen hulle nie. | Kies twee lyne wat mekaar ontmoet. |
| "Kies 'n lineêre of belynde afmeting." | {{cmd:DIMCONTINUE}} of {{cmd:DIMBASELINE}} het een nodig om van te begin. | Kies 'n lineêre of belynde afmeting. |
| "Hierdie tekening het nog geen blokke nie: F voeg een uit 'n lêer in, L uit die biblioteek …" | Die tekening het geen blokke van sy eie nie. | Tik `F` of `L`, of maak 'n blok met {{cmd:BLOCK}}. |
| "Geen blok met die naam "…"." | Die naam is verkeerd. | Die boodskap lys die blokke wat daar is. |
| "'n Bloknaam kan nie met * begin of … gebruik nie" gevolg deur 'n lys karakters | Die naam het 'n karakter wat blokke nie kan gebruik nie. | Gebruik letters, syfers, `-` en `_`. |
| "'n Blok kan nie homself bevat nie." | Die keuse bevat 'n verwysing na die blok wat gemaak word. | Laat daardie verwysing uit. |
| "Geen voorwerpe gekies; niks gemaak nie." | Jy het {{key:Enter}} gedruk voor jy gekies het. | Voer {{cmd:BLOCK}} weer uit en kies die voorwerpe. |

## Blaaie en druk

| Boodskap of verskynsel | Oorsaak | Regstelling |
|---|---|---|
| "Aansigvensters gaan op 'n uitleg. Maak eers 'n uitlegoortjie oop (of maak een met LAYOUT)." | {{cmd:MVIEW}} op die {{ui:Model}}-oortjie. | Klik eers op 'n bladoortjie. |
| "Maak eers die uitleg met die aansigvenster oop." | {{cmd:VPVIEW}} op die {{ui:Model}}-oortjie. | Klik eers op die bladoortjie. |
| 'n Aansigvenster se skaal lyk tien keer verkeerd | Die tekeningeenhede is verkeerd. | Stel {{ui:Eenhede}} in {{ui:Huidige instellings}}. |
| "Daar is nog niks om uit te druk nie." | Die model is leeg. | Teken iets, of maak 'n tekening oop. |
| "Kies die venster om uit te druk." | {{ui:'n Venster…}} is gekies en geen venster is gekies nie. | Klik {{ui:Kies}} en kies twee hoeke. |
| "… groter as die papier: die kante word afgesny." | Die gebied pas nie by daardie skaal nie. | Kies 'n kleiner skaal, 'n groter papier, of {{ui:Pas by papier}}. |
| "Die blaaier het die nuwe oortjie geblokkeer, so die PDF is eerder afgelaai." | Pop-ups is vir die webwerf geblokkeer. | Maak die afgelaaide PDF oop, of laat pop-ups toe vir die webwerf. |
| Karakters druk as "?" | Die PDF se lettertipes het geen letter daarvoor nie (seldsame ideograwe, Hindi en ander skrifte wat komplekse vormgewing benodig, …), of die groter lettertipe kon nie afgelaai word nie (vanlyn). Europese skrifte, Kirillies, Grieks, Hebreeus, Arabies, Persies, Urdu, Thai, Chinees, Japannees en Koreaans druk as hulself. | Vir Arabiese-skrif, Thai, Chinees, Japannees of Koreaans, druk weer met 'n verbinding. Ander skrifte is nog nie gebou nie. |
| Konstruksielyne wys in die PDF | Hul laag word gedruk. | Klik die laag se drukknoppie. |
| Alle lyne is ewe dik | Hul lynwydte is {{ui:Standaard}}, so hulle druk teen die dialoog se pendikte. | Gee die lae of voorwerpe 'n {{ui:Lynwydte}} in die regterpaneel, of kies 'n {{ui:Lynwydte}} in die dialoog. Om lynwydtes op die skerm te sien, druk {{ui:LWT}} in die statusbalk. |

## Sleutels en die skerm

| Verskynsel | Oorsaak | Regstelling |
|---|---|---|
| F3, F7 of F8 verander volume of maak Mission Control oop | Mac-funksietoetse. | Hou **fn** vas, of gebruik die statusbalkknoppies. Sien [Sleutels, muise en trackpads](common:keys). |
| F7 vra oor kursorblaai | Firefox se eie gebruik van F7. | Kies Nee; gebruik die {{ui:Rooster}}-knoppie. |
| {{key:Mod+N}} het 'n blaaiervenster oopgemaak | Die blaaier hou daardie sleutel. | Klik {{ui:Nuut}} of tik `NEW`. |
| {{key:Mod+A}} het die opdragreël se teks gekies | Die opdragreël het die kursor gehad. | Klik eers op 'n voorwerp, of tik `ALL` by 'n `Kies voorwerpe`-prompt. |
| {{key:Delete}} vee nie uit nie | Die opdragreël het die kursor gehad. | Tik `E` en druk {{key:Enter}}. |
| Regsklik doen niks op 'n Mac-trackpad nie | Control-klik mag as 'n gewone klik tel. | Klik met twee vingers. |
| Niks pan op 'n trackpad nie | Daar is geen middelknoppie nie, en Spasie pan nie. | Veeg met twee vingers: die 2D-aansig pan (knyp en die muiswiel zoem). Of sleep met 'n regsklik gehou. |
| Die eerste {{key:Esc}} het volskerm verlaat | Die blaaier gebruik Esc om volskerm te verlaat. | Druk {{key:Esc}} weer om die opdrag te kanselleer. |
| {{key:F1}} doen niks op 'n Mac nie | F1 is 'n helderheidsleutel. | Hou **fn** vas, of klik {{ui:Hulp}}. |
| Tik gaan na die hulp se soekboks | Die hulppaneel het die kursor. | Klik op die tekening. |
| Die tekening het leeg geword | Jy het ver uitgezoem. | Klik {{ui:Omvang}}, of dubbelklik die wiel. |
| "Verlaat webwerf?" wanneer die oortjie gesluit word | Daar is veranderinge wat nie gestoor is nie. | Bly, stoor met {{key:Mod+S}}, en sluit dan. |

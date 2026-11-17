---
title: Muurvorms, snitte, afsette en slotte vir 2D-mure
summary: Teken mure as reghoeke, veelhoeke en boë, verdeel en koppel hulle weer, skuif hulle volgens 'n maat, en sluit een muur aan 'n ander of aan 'n roosterlyn. Dieselfde gereedskap as BimCraft se mure.
keywords: muur, muurwerkbalk, muurknoppies, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, verbindingstyl, skuinssnit, stomp, vierkant af, hangslot, handvatsel, sleep einde, draai, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, verbind, verbied verbinding, slot, roosterlyn, verdeel, opening, afset, liggingslyn
from: f41e7433
---

Hierdie gereedskap werk op die 2D-mure van `WALL` (sien "Teken slim mure, deure en vensters in 2D"). Hulle gebruik dieselfde reëls as die muurgereedskap in BimCraft, sodat 'n muur in albei dieselfde optree.

## Waar die gereedskap is

- Op die werkbalk het die {{ui:Walls}}-groep {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} en {{ui:Offset}}. Die {{ui:More}}-kieslys het elke ander muurgereedskap, elk met sy ikoon.
- In die lint-kieslysstyle het die {{ui:Walls}}-oortjie die paneels {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} en {{ui:Join}}.
- In 'n uitleg wys die gereedskapry en die gereedskapkas dieselfde {{ui:Walls}}-groep.
- Jy kan ook enige opdrag hieronder tik.

## Verbindings word gestoor

Wanneer 'n muurpunt op 'n ander muur land, stoor CadCraft daardie verbinding saam met albei mure. Dit bereken nie meer die verbindings uit waar die punte toevallig is nie. So:

- Mure wat aan 'n muur gekoppel is wat jy skuif, volg dit en bly gekoppel. Hul punte gly langs hul eie lyne, sodat niks draai nie.
- Sleep een punt van 'n muur by sy handvatsel, en die muur wat daar gekoppel is, behou ook sy rigting. Sy punt gly langs sy eie lyn om die gesleepte muur te ontmoet, so die gesleepte punt land op daardie lyn, nie altyd onder die wyser nie. Die voorskou wys waar. 'n Muur wat in die gesleepte muur stomp, volg langs sy eie lyn. Sleep die punt reguit langs die muur, verander sy lengte, en die muur wat daar gekoppel is, beweeg saam daarmee.
- `ROTATE` op 'n gekoppelde muur werk op dieselfde manier: die punte van sy bure gly langs hul eie lyne na die gedraaide muur.
- Om 'n hoek te skuif, kies albei mure wat daar ontmoet en sleep die handvatsel op die hoek. Albei mure bly op die hoek en albei draai. Mure verder langs bly soos hulle was.
- Hou {{key:Alt}} vas wanneer jy die handvatsel se nuwe plek klik om die verbindings doelbewus te breek: die muur gaan waar jy dit plaas, en niks volg nie.
- As 'n sleep 'n gekoppelde muur deur sy eie verre punt sou draai, word dit geweier en niks verander nie.
- 'n Muur wat jy met {{ui:Disallow joins}} (`D` in `WALL`) teken, of wat in Eienskappe afgeskakel is ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), bly vry aan daardie punt, selfs al raak dit 'n ander muur, totdat jy dit weer toelaat.
- `WALLDISJOIN` ({{ui:Disallow join}} in die {{ui:Walls}}-groep) doen dieselfde met een klik: klik op 'n muur naby een punt om verbindings daar te verbied, en klik weer om dit toe te laat.
- 'n Ouer tekening het nog geen gestoorde verbindings nie. Die eerste verandering wat jy maak, vind hulle een keer, uit hoe die mure gestaan het voor die verandering, en stoor hulle. `WALLJOINS` doen dit dadelik.
- DWG- en DXF-lêers dra die verbindings binne elke muur. CadCraft lees hulle terug soos gestoor. 'n Program wat geen uitgebreide data hou nie, wys die mure as gewone blokke en laat die verbindings val. 'n Verbinding waarvan die mure in 'n ander program geskuif is, word die volgende keer wat jy een van die twee mure verander, laat val.

## Verbindingstyl van 'n hoek

'n Hoek waar twee mure end-tot-end ontmoet, word as 'n skuinssnit geteken tensy jy 'n ander styl kies.

- `WALLJOINSTYLE` ({{ui:Join style}} in die {{ui:Walls}}-groep): klik op die hoek. Elke klik gaan na die volgende styl: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, dan weer {{ui:Mitre}}. Tik `T` om te wissel watter van die twee mure by die hoek loop wat jy laas geklik het. Druk {{key:Enter}} om klaar te maak. Een lopie van die opdrag is een ontdoen-stap.
- {{ui:Butt}}: een muur loop deur tot by die verre vlak van die ander, en die ander stop teen sy kant. {{ui:Square off}}: dieselfde, maar die muur wat deurloop, eindig vierkant met homself. By 'n regte hoek lyk die twee dieselfde.
- In Eienskappe van 'n muur: {{ui:Join style at start}}, {{ui:Join style at end}}, en {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- Die styl word saam met albei mure gestoor en reis in DWG- en DXF-lêers. 'n Kopie van 'n muur begin sonder dit.
- 'n T-verbinding het geen styl om te kies nie: die muur waarvan die kant ontmoet word, loop deur. 'n Hoek waar drie of meer mure ontmoet, bly 'n skuinssnit. So ook 'n baie skerp hoek (onder ongeveer 30 grade) en twee mure in een lyn.

## Teken muurvorms

Elk maak die mure in een ontdoen-stap, met die hoeke verbind. In `WALL` stel `O` 'n plasingafset (hoe ver links van jou klikke die muur gaan), en `D` skakel verbinding af vir die mure wat jy volgende teken.

- `WALLRECT` (`WR`): twee teenoorstaande hoeke, soos `RECTANG`.
- `WALLROT`: die eerste kant, dan hoe ver die ander kant uitgaan, vir 'n reghoek op enige hoek.
- `WALLPOLY` (`WP`): die aantal sye (3 tot 64), die middelpunt, `I` vir ingeskryf of `C` vir omgeskryf, dan die radius, soos `POLYGON`.
- `WALLARC` (`WARC`): middelpunt, begin, einde. `D` draai die boog die ander kant toe.
- `WALLTAN`: klik naby die einde van 'n muur, dan die einde van die boog, wat langs daardie muur vertrek.
- `WALLPICK`: klik op 'n lyn of poliylyn en sê of die lyne wat daaraan gekoppel is ook geneem moet word.
- `WALLTRACE`: klik binne 'n geslote gebied van lyne en mure om mure om die kleinste een te sit.

Plan-mure is reguit, so 'n boog word geteken as kort reguit mure van 15 grade elk. Hulle verbind soos enige hoek.

## Sny mure

- `WALLSPLIT` (`WS`): klik op die muur, dan die punt. `C` sny waar 'n ander muur dit kruis, `G` laat 'n opening tussen die dele, `F` maak die snyeindes vry in plaas van verbind. Die eerste deel behou die muur se plek in die tekening, en deure en vensters gaan saam met hul deel. 'n Snit deur 'n deur of venster word geweier.
- `WALLSPLITGAP` ({{ui:Split with gap}}): dieselfde verdeling, maar dit vra eers vir die opening.
- `WALLDELSEG`: klik op die muur, dan die twee eindes van die stuk wat uitgevee moet word.
- `WALLREJOIN`: klik op twee dele van een muur om hulle weer een te maak.

## Skuif mure volgens afstand

- `WALLDIM`: klik op 'n lineêre of belynde maat wat van een muur na 'n ander loop, tik dan die nuwe waarde. Die muur aan die verre einde skuif vierkant met homself, die muur aan die eerste einde hou vas, en die mure wat daaraan gekoppel is, volg.
- `WALLOFFSET` (`WO`): klik op 'n muur, dan die kant waarheen dit geskuif moet word (`D` tik 'n afstand, `C` maak 'n kopie in plaas daarvan).
- `WALLSTRETCH`: 'n venster rondom die muurpunte, dan 'n basispunt en 'n tweede punt.
- In Eienskappe hou 'n getikte {{ui:Length}} die begin en neem die muur wat aan die verre einde gekoppel is saam, en 'n nuwe {{ui:Thickness}} groei weg van die {{ui:Location line}} wat jy gekies het (die linkerkant, die regterkant of die middel).

## Sluit mure

'n Slot bly by die muur in die lêer. As jy een gesluite muur skuif, volg die ander een. As een verandering albei mure verskillend skuif, word dit geweier en niks verander nie.

- `WALLHOLD`: sluit een muur aan 'n ander muur. `A` skuif dit eers op die ander muur se lyn, `K` behou die afstand wat dit het.
- `WALLHOLDDIM`: sluit die afstand tussen twee ewewydige mure.
- `WALLGRID`: sluit 'n muur aan 'n roosterlyn ('n lyn op 'n roosterlaag met sy etiket as teks aan een einde), óf langs dit óf met een einde daarop. 'n Muur wat langs die lyn gesluit is, behou die afstand wat dit daarvan het. Skuif die roosterlyn met `GRIDMOVE`, en die muur volg heel, met sy gekoppelde mure. 'n Muur wat langs 'n roosterlyn lê, beweeg heel saam daarmee selfs sonder 'n slot, en 'n muur wat net op die lyn eindig, word deur daardie einde gerek.
- `WALLHOLDS` lys die slotte. `WALLUNHOLD` haal die slotte van 'n muur af.
- Elke slot wys 'n klein hangslot op die plan: langs die middel van die gesluite muur, of langs die einde wat aan 'n roosterlyn gesluit is. Klik op 'n hangslot om daardie slot af te haal.

## Wat hier nog nie is nie

Slotte gebruik die middellyne van die mure. Mure hier het nie lae nie, so daar is geen laagprioriteit by 'n aansluiting nie, en die mure buig nie (sien die boë hierbo). Niemand het hierdie gereedskap nog op 'n groot tekening probeer nie, en hulle is nog nie in 'n ander CAD-program nagegaan nie.

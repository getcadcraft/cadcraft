---
title: Muurvorms, snitte, afsette en sluitings vir 2D-mure
summary: Teken mure as reghoeke, veelhoeke en boë, verdeel en heg hulle weer saam, skuif hulle volgens 'n maat, en sluit een muur aan 'n ander of aan 'n roosterlyn. Dieselfde gereedskap as BimCraft se mure.
keywords: muur, muurnutsbalk, muurknoppies, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, verbindingstyl, skuinssnit, stomp, vierkant af, hangslot, handvatpunt, sleep einde, draai, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, verbind, verbied verbinding, sluit, roosterlyn, verdeel, gaping, afset, liggingslyn
from: 49044181
---

Hierdie gereedskap werk op die 2D-mure van `WALL` (sien "Teken slim mure, deure en vensters in 2D"). Hulle gebruik dieselfde reëls as die muurgereedskap in BimCraft, so 'n muur gedra hom eenders in albei.

## Waar die gereedskap is

- Op die nutsbalk het die {{ui:Muure}}-groep {{ui:Muur}}, {{ui:Reghoek}}, {{ui:Verdeel}} en {{ui:Afset}}. Sy {{ui:Meer}}-kieslys het elke ander muurgereedskap, elk met sy ikoon.
- In die lint-kieslysstyle het die {{ui:Muure}}-oortjie die paneele {{ui:Teken mure}}, {{ui:Sny}}, {{ui:Stel en wysig}}, {{ui:Hou vas}} en {{ui:Voeg saam}}.
- In 'n uitleg wys die gereedskapry en die gereedskapkas dieselfde {{ui:Muure}}-groep.
- Jy kan ook enige opdrag hieronder wat genoem word tik.

## Verbindings word gestoor

Wanneer 'n muurend op 'n ander muur land, stoor CadCraft daardie verbinding by albei muure. Dit werk nie meer die verbindings uit uit waar die eindes toevallig is nie. So:

- Mure wat aan 'n muur wat jy skuif verbind is, volg dit en bly verbind. Hul eindes glip langs hul eie lyne, so niks draai nie.
- Sleep een einde van 'n muur met sy handvatpunt en die muur wat daar verbind is, hou sy rigting ook. Sy einde glip langs sy eie lyn om die gesleepte muur te ontmoet, so die gesleepte einde land op daardie lyn, nie altyd onder die wyser nie. Die voorskou wys waar. 'n Muur wat in die gesleepte muur stomp, volg langs sy eie lyn. Sleep die einde reguit langs die muur verander sy lengte, en die muur wat daar verbind is, beweeg saam.
- `ROTATE` op 'n verbinde muur werk dieselfde: die eindes van sy bure glip langs hul eie lyne na die gedraaide muur.
- Om 'n hoek te skuif, kies albei mure wat daar ontmoet en sleep die handvatpunt op die hoek. Albei mure bly op die hoek en albei draai. Mure verder langs bly soos hulle was.
- Hou {{key:Alt}} vas wanneer jy die handvatpunt se nuwe plek klik om die verbindings doelbewus te breek: die muur gaan waar jy dit plaas en niks volg nie.
- As 'n sleep 'n verbinde muur deur sy eie verre einde sou draai, word dit geweier en niks verander nie.
- 'n Muur wat jy met {{ui:Verbied verbindings}} (`D` in `WALL`) teken, of in Eienskappe afskakel ({{ui:Verbied verbinding by begin}}, {{ui:Verbied verbinding by einde}}), bly vry by daardie einde, selfs as dit 'n ander muur raak, totdat jy dit weer toelaat.
- `WALLDISJOIN` ({{ui:Verbied verbinding}} in die {{ui:Muure}}-groep) doen dieselfde met 'n klik: klik 'n muur naby een einde om verbindings by daardie einde te verbied, en klik weer om dit toe te laat.
- 'n Ouer tekening het nog geen gestoorde verbindings nie. Die eerste verandering wat jy maak vind hulle een keer, uit hoe die mure gestaan het voor die verandering, en stoor hulle. `WALLJOINS` doen dit dadelik.
- DWG- en DXF-lêers dra die verbindings binne elke muur. CadCraft lees hulle terug soos gestoor. 'n Program wat geen uitgebreide data hou nie, wys die mure as gewone blokke en laat die verbindings val, en 'n verbinding waarvan die mure in 'n ander program geskuif is, word laat val die volgende keer as jy een van die mure verander.

## Verbindingstyl van 'n hoek

'n Hoek waar twee mure end-tot-end ontmoet, word as 'n skuinssnit geteken tensy jy 'n ander styl kies.

- `WALLJOINSTYLE` ({{ui:Verbindingstyl}} in die {{ui:Muure}}-groep): klik die hoek. Elke klik gaan na die volgende styl: {{ui:Skuinssnit}}, {{ui:Stomp}}, {{ui:Vierkant af}}, dan weer {{ui:Skuinssnit}}. Tik `T` om te wissel watter van die twee mure by die hoek loop wat jy laas geklik het. Druk {{key:Enter}} om klaar te maak. Een lopie van die opdrag is een ontdoen-stap.
- {{ui:Stomp}}: een muur loop deur tot by die verre vlak van die ander, en die ander stop teen sy kant. {{ui:Vierkant af}}: dieselfde, maar die muur wat deurloop eindig vierkant met homself. By 'n regte hoek lyk die twee eenders.
- In Eienskappe van 'n muur: {{ui:Verbindingstyl by begin}}, {{ui:Verbindingstyl by einde}}, en {{ui:Loop deur by begin}}, {{ui:Loop deur by einde}}.
- Die styl word by albei mure gestoor en reis in DWG- en DXF-lêers. 'n Afskrif van 'n muur begin sonder dit.
- 'n T-verbinding het geen styl om te kies nie: die muur wie se kant ontmoet word, loop deur. 'n Hoek waar drie of meer mure ontmoet, bly 'n skuinssnit. So ook 'n baie skerp hoek (onder ongeveer 30 grade) en twee mure in een lyn.

## Teken muurvorms

Elkeen maak die mure in een ontdoen-stap, met die hoeke verbind. In `WALL` stel `O` 'n plasingsafset (hoe ver links van jou klikke die muur gaan), en `D` skakel verbinding af vir die mure wat jy volgende teken.

- `WALLRECT` (`WR`): twee teenoorstaande hoeke, soos `RECTANG`.
- `WALLROT`: die eerste kant, dan hoe ver die ander kant uitgaan, vir 'n reghoek op enige hoek.
- `WALLPOLY` (`WP`): die aantal kante (3 tot 64), die middelpunt, `I` vir ingeskryf of `C` vir omskryf, dan die radius, soos `POLYGON`: klik dit, of tik dit ('n getikte radius loop na die wyser, of langs X as die wyser nog op die middelpunt is).
- `WALLARC` (`WARC`): middelpunt, begin, einde. `D` draai die boog die ander kant op.
- `WALLTAN`: klik naby die einde van 'n muur, dan die einde van die boog, wat langs daardie muur vertrek.
- `WALLPICK`: klik 'n lyn of polilyn en sê of die lyne wat daaraan verbind is ook geneem moet word.
- `WALLTRACE`: klik binne 'n geslote gebied van lyne en mure om mure rondom die kleinste een te sit.

Plan-mure is reguit, so 'n boog word as kort reguit mure van 15 grade elk geteken. Hulle verbind soos enige hoek.

## Sny mure

- `WALLSPLIT` (`WS`): klik die muur, dan die punt. `C` sny waar 'n ander muur dit kruis, `G` laat 'n gaping tussen die dele, `F` maak die gesnyde eindes vry in plaas van verbind. Die eerste deel hou die muur se plek in die tekening, en deure en vensters gaan saam met hul deel. 'n Snit deur 'n deur of venster word geweier.
- `WALLSPLITGAP` ({{ui:Verdeel met opening}}): dieselfde verdeling, maar dit vra eers vir die gaping.
- `WALLDELSEG`: klik die muur, dan die twee eindes van die stuk om te skrap.
- `WALLREJOIN`: klik twee dele van een muur om hulle weer een te maak.

## Skuif mure volgens afstand

- `WALLDIM` ({{ui:Wysig volgens maat}}): klik 'n lineêre of belynde maatlyn wat van een muur na 'n ander loop, en tik dan die nuwe waarde. Die muur by die verre einde beweeg vierkant met homself, die muur by die eerste einde hou vas, en die mure wat daaraan verbind is volg. Die maatlyn se verre punt beweeg met sy muur, so die maatlyn wys die waarde wat jy getik het.
- `WALLOFFSET` (`WO`): klik 'n muur, dan die kant waarheen dit geskuif moet word (`D` tik 'n afstand, `C` maak 'n afskrif in plaas daarvan).
- `WALLSTRETCH`: 'n venster rondom die muureindes, dan 'n basispunt en 'n tweede punt.
- In Eienskappe kan 'n getikte {{ui:Lengte}} die begin hou en die muur wat aan die verre einde verbind is saam neem, en 'n nuwe {{ui:Dikte}} groei weg van die {{ui:Liggingslyn}} wat jy gekies het (die linkervlak, die regtervlak of die middel).

## Afstand tussen muur-middellyne

'n Muur se middellyn word nie geteken nie, maar voorwerpvaslegging vind dit. Met voorwerpvaslegging aan ({{key:F3}}), beweeg die wyser oor die middel van 'n muur se dikte: die merker lees `Wall center: endpoint` of `Wall center: midpoint`, en die middellyn wys as 'n gestippelde lyn terwyl die merker daarop is. Met {{ui:Loodreg}} of {{ui:Naaste}} aangeskakel in die voorwerpvaslegging-lys, werk dié ook op die middellyn.

1. Begin `DIMLINEAR` (of `DIMALIGNED`).
2. Klik die eerste muur waar die merker `Wall center: midpoint` of `Wall center: endpoint` lees.
3. Klik die tweede muur op dieselfde manier, en klik dan waar die maatlyn gaan.
4. Om die afstand te verander, begin `WALLDIM`, klik die maatlyn en tik die nuwe waarde. Die tweede muur beweeg.

Die middellyn-vaslegging werk in elke opdrag wat 'n punt vra.

## Sluit mure

'n Sluiting bly by die muur in die lêer. As jy een gesluite muur skuif, volg die ander een. As een verandering albei mure verskillend skuif, word dit geweier en niks verander nie.

- `WALLHOLD`: sluit een muur aan 'n ander muur. `A` skuif dit eers op die ander muur se lyn, `K` hou die afstand wat dit het.
- `WALLHOLDDIM`: sluit die afstand tussen twee ewewydige mure.
- `WALLGRID`: sluit 'n muur aan 'n roosterlyn ('n lyn op 'n roosterlaag met sy etiket in teks aan een einde), óf langs dit, óf met een einde daarop. 'n Muur wat langs die lyn gesluit is, hou die afstand wat dit daarvan het. Skuif die roosterlyn met `GRIDMOVE` en die muur volg heel, met sy verbinde mure.
- `WALLHOLDS` lys die sluitings. `WALLUNHOLD` haal die sluitings van 'n muur af.
- Elke sluiting wys 'n klein hangslot op die plan: naby die middel van die gesluite muur, of naby die einde wat aan 'n roosterlyn gesluit is. Klik 'n hangslot om daardie sluiting af te haal.

## Wat nog nie hier is nie

Sluitings gebruik die middellyne van die mure. Mure hier het geen lae nie, so daar is geen laagprioriteit by 'n aansluiting nie, en die mure buig nie (sien hierbo oor bene). Niemand het hierdie gereedskap op 'n groot tekening probeer nie, en hulle is nie in 'n ander CAD-program nagegaan nie.

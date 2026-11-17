---
title: Nog nie gebou nie
summary: Wat hierdie weergawe van die CadCraft-tekenprogram nog nie doen nie, en wat jy vandag in plaas daarvan moet doen.
keywords: ontbrekend, beperkings, ctb, stb, plotstyl, eienskappe, ucs, annoterend, dinamiese blok, spline, padkaart, nie ondersteun nie, dwg-stoor, arsering, rek, skikking, verbind, matchprop, breek, verleng, lynsoort, lynwydte, xref, wolk, 3d, soliede, booleaans, multileader, wipeout
from: 87e56521
---

CadCraft is in ontwikkeling. Hierdie bladsy lys wat die huidige weergawe nie doen nie, sodat jy nie daarna hoef te soek nie. Elke item sê wat jy vandag in plaas daarvan moet doen.

## Lêers en stoor

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| 'n CadCraft-DWG wat in AutoCAD self nagesien is | Elke gestoorde weergawe word terug gelees deur drie ander programme se DWG-lesers en deur CadCraft. Sien [Wat 'n DWG behou en verander](topic:files#what-a-dwg-keeps-and-changes). |
| DXF nuwer as 2000 stoor | Stoor as DXF 2000, of as DWG tot AutoCAD 2018. |
| Oorstoor die oopgemaakte lêer in die blaaier | Elke stoor laai 'n nuwe kopie af; vervang die ou lêer self as jy wil. In CadCraft Studio skryf {{key:Mod+S}} terug na die lêer wat jy oopgemaak het. |
| Wolkstoor en sinkronisasie tussen rekenaars | CadCraft stuur nog nie sy stoorlêers na die wolk nie: hou jou DWG- en DXF-lêers in jou eie vouers. In CadCraft Studio lys [Geskiedenis](topic:history) die wolkweergawes van 'n tekening wat elders gestoor is, en kopieë van jou eie stoorlêers op hierdie rekenaar. |
| Oorleggings, en wysiging van 'n gekoppelde tekening op sy plek | Heg die tekening as 'n skakel aan en laai dit weer nadat jy die ander tekening verander het. 'n Skakel bly 'n skakel wanneer jy as DWG stoor, en {{cmd:XCLIP}} knip dit. |
| Prente in DXF; wipeouts wat wys wat daaronder is | DXF hou 'n prent as sy raam met die lêernaam; DWG hou dit as 'n prent — sien [Prente in 'n tekening](topic:pictures). 'n Wipeout wys as sy raam. |
| Multileaders met geboë leerlyne, met leerlyne aan albei kante van die inhoud, of met 'n blok wat ongelyk gedraai of geskaal is | Hulle word geteken soos die ander program hulle geteken het en beweeg as een geheel. Multileaders met reglynige leerlyne na een landingspunt, en teks of 'n blok as inhoud, kom redigeerbaar ({{cmd:MLEADEREDIT}}). |
| In tabelle van ander programme: 'n sel wat 'n blok bevat, teksformatering binne 'n sel, sel-rande en -kleure van 'n DXF se tabel, 'n tabel wat in kolomme gebreek is | Die tabel open as 'n redigeerbare tabel ({{cmd:TABLEDIT}}) en word gewys soos die ander program dit geteken het totdat jy dit wysig; dan teken CadCraft dit weer uit sy selle: gewone teks, formules soos `=G3*H3` en `=Sum(I3:I9)`, belyning en tekshoogtes. 'n Blok-sel is dan leeg. 'n Onaangeroerde DWG-tabel word teruggestoor met die seldata wat dit gehad het. |
| 'n Regte tabelvoorwerp in 'n gestoorde DXF | 'n DWG hou 'n tabel as 'n tabel wat ander programme kan wysig. 'n DXF hou dit as die blok wat dit teken, met CadCraft se eie rekord: CadCraft open dit weer as 'n tabel; ander programme sien 'n blok. 'n Gespieëlde of ongelyk geskaalde tabel word so ook in 'n DWG gestoor. |
| Kopieer en plak met ander programme | CadCraft se knipbord werk tussen CadCraft-tekeninge en oortjies in dieselfde blaaier, nie met ander programme nie. Stoor as DWG of DXF en maak dit daar oop. Sien [Kopieer, plak en dupliseer](topic:copy-paste). |

## Teken en wysig

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Arseringspatrone wat CadCraft nie het nie, en gradiëntvulsels presies soos ander programme dit verf | Oopgemaakte arserings met patrone wat CadCraft nie het nie, word as 'n toon gewys. 'n Gradiëntvulsel ({{cmd:GRADIENT}}) word vir elke soort op CadCraft se eie manier geverf: soos ander programme s'n in soort, nie punt vir punt nie. DWG 2004 en later hou dit as 'n regte gradiëntarsering; in 'n DXF 2000- of DWG 2000-lêer lees net CadCraft dit terug, en ander programme sien 'n soliede vulsel. Patrone laai uit 'n `.pat`-lêer, en 'n arsering kan aan sy grens gekoppel word en dan die grens volg: sien [Arsering en vularea's](topic:hatch). |
| Lynsoorte met vorms of teks daarin, en lynwydtes in 'n gestoorde DXF R12 | Vorms en teks in 'n lêer se lynsoort word uit sy strepe weggelaat; stoor as DWG om lynwydtes te behou. |
| Patroonarserings in 'n gestoorde DXF | R12 het geen arsering nie: hulle word as hul buitelyne gestoor. Stoor as DWG om die patroon te behou. |
| Skikkings wat 'n ander program gemaak het of kan wysig; rye en vlakke in pad- en poolskikkings; 'n skikking wat sy padkurwe volg | 'n Skikking wat met ASsociatief gemaak is ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; verander met {{cmd:ARRAYEDIT}}) word as 'n blokverwysing met CadCraft se eie getalle gestoor: ander programme wys, skuif, druk uit en ontplof dit, maar kan sy tellings nie verander nie, en 'n skikking wat in 'n ander program gemaak is, open hier as 'n gewone blokverwysing. 'n Padskikking hou 'n afskrif van sy pad: as jy die kurwe daarna wysig, skuif die items nie. |
| Geknipte bladvensters van en na ander programme | 'n Venster wat met {{cmd:VPCLIP}} geknip is, of met {{cmd:MVIEW}} Veelhoekig of Voorwerp gemaak is, word met CadCraft se eie buitelyn gestoor: ander programme open dit as die reghoek daarom, en 'n venster wat in 'n ander program geknip is, open hier as sy reghoek. DXF R12 hou net die reghoek. |
| {{cmd:STRETCH}} met 'n kruisende veelhoek | Gebruik een of meer kruisende vensters. |
| {{cmd:PEDIT}} Wysig hoekpunt (een hoekpunt op 'n slag by die opdraglyn) | Gryppunte, en die hoekpuntblaaier in Eienskappe (elke hoekpunt, sy breedtes en buiging). Die res van PEDIT is gebou: sien [Splines en polylyne](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} en {{cmd:JOIN}} op ellipse en splines | {{cmd:EXPLODE}} 'n spline (of {{cmd:PEDIT}} dit) om 'n polylyn te kry wat hierdie opdragte gebruik. |
| Afronding en skuinsrand tussen 'n boogsegment van 'n polylyn en die segment langs dit; afronding wat 'n lyn in 'n polylyn voeg | {{cmd:EXPLODE}} die polylyn, en rond dan die stukke af. Die afrondingsboog word as sy eie voorwerp bygevoeg. |
| Snoei en verleng: die Projek-opsie (3D) en verlenging van 'n polylyn se boogeinde | Snoei in die vlak van die tekening; vir 'n boogeinde, ontplof die polylyn of teken die boog weer. |
| OLE-voorwerpe: invoeg, laat loop of wysig; wys die wat in 'n DWG is waar die lêer hulle plaas; metalêerprente | Sien [Prente](topic:pictures#objects-from-other-programs-ole). 'n DXF se voorwerpe wys as hul bitmap of 'n benoemde raam; 'n DWG se voorwerpe word behou, nie op hul plek geteken nie (OLELIST lys hulle en plaas 'n afskrif van 'n prent waar jy sê). |
| Formateringskodes tik (vet, gestapelde breuke, kleure per woord) in paragraaftekst; lettertipes behalwe die een Helvetica-agtige lettertipe; kolomme | Formatering wat in 'n lêer gekom het, word behou, geteken en gestoor (sien Teks); nuwe paragraaftekst het een hoogte en kleur. |
| Paragraaftekst wat by sy rotasie gewysig word | Die redigeerder open gelyk; die teks behou sy rotasie. |
| Multileaders wat as multileader-voorwerpe in 'n DXF gestoor is | 'n DWG hou hulle as multileaders, met elke leerlyn en 'n blok as inhoud; 'n DXF hou wat hulle teken (lyne, pylpunte, en die teks of die blok). |
| In tabelle ({{cmd:TABLE}}): teks wat binne 'n sel omwikkel, tabelle wat in dele breek, 'n tabelstyl se eie teksstyl en kleure per rytipe in 'n dialoog, 'n dataskakel na 'n sigblad-lêer (`.xlsx`) of een wat die lêer self lees | 'n Sel se teks breek net waar jy dit breek ({{key:Alt+Enter}}); maak die kolom wyer. {{cmd:DATALINK}} lees 'n `.csv`-lêer, en {{cmd:DATALINKUPDATE}} vra jou om die lêer weer te kies. {{cmd:DATAEXTRACTION}} en {{cmd:COUNTTABLE}} maak 'n tabel wat nie self die tekening volg nie: voer hulle weer uit ('n lewendige telling: {{cmd:BOMTABLE}}). |
| Attribuutdefinisies wat op hul eie in 'n gestoorde lêer bly (buite 'n blok), veelreël-attribute | Plaas attribuutdefinisies in 'n blok voor jy stoor: op hul eie stoor hulle as teks wat die etiket wys. |
| Laagtoestande (stoor en herstel watter lae aan is) | Gebruik {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, of skakel lae met die hand aan en af. |
| Vensterveelhoek- en kruisende veelhoekseleksie, en gestoorde seleksiefilters | Omheining (`F`), Venster, Kruising, Verwyder (`R`), {{cmd:QSELECT}} vir 'n reël. |


## Die Eienskappe-paneel

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Die Pas-keuses teken, en die horisontale teksposisie en teks onder die lyn op maatvoering behalwe lineêr en belyn | Hulle word op die voorwerp behou, in Eienskappe gewys en gestoor; CadCraft plaas die teks volgens sy eie reël. |
| Materiale wat ander programme sien | 'n Gestoorde lêer behou die materiaalnaam vir CadCraft; ander programme wys die laag se materiaal. |
| Deursigtigheid in DWG 2000- en DXF-lêers | Ander programme wys daardie voorwerpe soliede; CadCraft behou die deursigtigheid. Stoor as DWG 2004 of later vir almal. |
| 'n Arseringskakel wat in 'n ander program gemaak is | CadCraft stoor sy eie skakel in DWG- en DXF 2000-lêers; skakels wat in ander programme gemaak is, word nie gelees nie. Gebruik `HATCHEDIT` en Skakel: sien [Arsering en vularea's](topic:hatch). |
| Koördinate in Eienskappe in die UCS | Eienskappe wys wêreldkoördinate; die statusbalk en {{cmd:ID}} wys UCS-koördinate. Sien [Draai die aansig en gebruik jou eie koördinate](topic:ucs-and-turned-view). |
| 'n Aparte posisie vir 'n annoterende voorwerp by elk van sy skale; lees die skaalrekords wat ander programme hou | 'n Annoterende teks of maat hou 'n lys skale ({{cmd:OBJECTSCALE}}) en elke bladvenster wys dit op die grootte vir sy skaal, op dieselfde plek. Die lys word as CadCraft se eie data gestoor: 'n ander program sien die voorwerp op die een skaal waarvoor dit bepaal is, en 'n lys wat in 'n ander program gemaak is, word nie gelees nie. Sien [Eenhede, papiere en skale](topic:units-papers-scales#annotate-by-scale). |
| Verander van 'n dinamiese blok se afstande, hoeke of omkeringe; dinamiese blokke wat dinamies bly wanneer jy in 'n ander DWG-weergawe of as DXF stoor | Skakel sy sigbaarheidstoestand in Eienskappe › {{ui:Pasgemaak}}; sy ander waardes wys daar net leesbaar. Dit bly dinamies wanneer jy dit as DWG in die weergawe waarin die tekening gekom het, stoor. Sien [Dinamiese blokke](topic:dynamic-blocks). |
| Spline-passingstoleransie, spline-graad 6 en hoër, 3D-splines | Pas- en beheerpunte, graad 1 tot 5 en gewigte is gebou: sien [Splines en polylyne](topic:splines). 'n Spline se hoogte (Z) word nie behou nie. |
## Presisiehulpmiddels

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Opsporing vanaf punte oor opdragte, en die opsporing-instellingsdialoog (relatiewe poolhoeke, ekstra hoeke) | {{cmd:POLARANG}} stel die stap; kry die punte weer in die volgende opdrag. |
| Vasvang aan die rooster | Tik koördinate; die rooster is net 'n visuele riglyn. |
| Boog- en Lengte-opsies terwyl 'n area se hoeke gekies word, en MEASUREGEOM Volume | Teken die buitelyn met {{cmd:PLINE}} (insluitend bogies), en gebruik dan {{cmd:AREA}} `O`. |
| Dinamiese invoer vir grepe, en sy opsielys (die afpyl) | Die opdraglyn wys die opsies. |
| Hoeke in grade-minute-sekondes, grade of landmeterspeilings | Tik desimale grade: `30.5` vir 30°30'. |
| 'n Aansigbestuurder-dialoog; genoemde aansigte van 'n blad wat op daardie blad terugkom | {{cmd:NAMEDVIEW}} lys en herstel aansigte. 'n Gestoorde lêer hou hulle, maar 'n blad se aansigte kom op die eerste blad terug. |

## Blaaie, maatvoering en uitdruk

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Velde vir 'n bladvenster se skaal, 'n benoemde voorwerp soos 'n laag of blok, 'n hiperskakel, en blaadstelvelde behalwe die bladnommer en naam; velde wat as veldvoorwerpe geskryf word wat ander programme bywerk | {{cmd:FIELD}} het die datum, die lêernaam, die bladnommer, naam en telling, die tekening se eienskappe ({{cmd:DWGPROPS}}), 'n voorwerp se oppervlakte, lengte en ander eienskappe, en formules, in teks, attribute en tabelselle. 'n Ander program wys 'n CadCraft-veld as die teks wat dit laas gelees het; CadCraft lees ander programme se datum-, lêernaam-, eienskap-, blad- en uitdrukkingvelde en laat die ander soorte as teks. 'n Bladvenster se skaal word met die hand getik. |
| Stoor watter maatstyl huidig is; maatteks wat na 'n vrye plek gesleep is | 'n Tekening open met Standaard huidig. Teks sit op die maatlyn (DIMTEDIT Left / Right / Center). Sien [Stel maatgroottes](topic:dimension-settings). |
| Wysigbare tweelyn-hoekmaatvoerings uit oopgemaakte lêers wat CadCraft nie kan uitwerk nie | Hulle word gewys soos in die lêer geteken. Ordinaat-, boogelengte- en geknikte radiusmaatvoerings open as maatvoerings wat jy kan wysig. |
| Nagaan van die CTB-leser teen 'n lêer van 'n ander program (dit is gebou, uit die gepubliseerde beskrywing), genoemde plotstyle (STB), dither, pennommers, grysskaal uit 'n CTB en aanpasbare lynsoortaanpassing in 'n plotstyl | Maak die tabel in {{ui:Plotstyltabelle}} (kleur, grys, inkt, lynwydte, lynsoort, lyneinde en -verbinding, en vulstyl per kleur): sien [Plotstyltabelle](topic:plot-pdf#plot-style-tables). |
| Bladinstellings | Kies papier, skaal en plotstyl in die {{ui:Druk uit na PDF}}-dialoog; 'n blad hou sy plotstyl. |
| Hindi en ander skrifte wat komplekse vorming in PDF's nodig het, en seldsame ideograwe (Europese skrifte, Kirillies, Grieks, Hebreeus, Arabies, Persies, Urdu, Thai, Chinees, Japannees en Koreaanse druk) | Hulle druk as "?". |
| Arabiese skrif en Chinese, Japannese of Koreaanse teks in dieselfde gedrukte PDF | 'n Uitdruk dra een lettertipe: een van die twee skrifte druk as "?". |
| Eksplisiete rigtingmerkers in teks (insluitings, oorskrywings, isoleerders) | Hulle word geïgnoreer: elke reël word net volgens sy letters gerangskik. |
| Prente binne 'n aangehegte PDF-bladsy, in 'n uitdruk | Die bladsy se lyne, vulsels en teks druk. 'n Bladsy wat net 'n prent is, gaan in met {{cmd:SCANATTACH}}, en prente druk. Sien [PDF-onderlae](topic:pdf-underlay#plot-and-save). |
| Stuur 'n werk na 'n lasersnyer vanaf CadCraft Studio (Studio het geen Web Serial nie) | Stoor die G-kode en stuur dit met jou lasersnyer se eie program, of stuur dit vanaf Chrome of Edge. Sien [Stuur 'n tekening na 'n lasersnyer](topic:laser-cutting#send-from-the-browser). |

## Beperkings en parameters

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Beperkings op blaaie, in blokke, op ellipse, splines of teks | Beperk op die {{ui:Model}}-oortjie, op lyne, polylyne, sirkels, bogies en punte. |
| Glad (G2), en 'n polylyn se boogbuiging direk beperk | Raak en gelyk; 'n boogsegment volg sy twee eindpunte. |
| Verwysings- (aangedrewe) dimensionele beperkings, en `3Point` in {{cmd:DCANGULAR}} | 'n Gewone maatvoering (DIMLINEAR …) wys 'n waarde sonder om dit aan te dryf. |
| Dimensionele beperkings van 'n vaste grootte op papier, en hulle uitdruk | Hulle wys net op die skerm; voeg gewone maatvoerings by vir die uitdruk. |
| Beperkings wat deur EXPLODE, BREAK, JOIN en ander opdragte wat nuwe voorwerpe maak, behou word, en op ingekorte polylyne | Beperk hulle weer (AUTOCONSTRAIN help). {{cmd:MIRROR}} en {{cmd:TRIM}} van lyne, bogies en sirkels behou hulle. |
| Ontwerptabelle (konfigurasies) in CadCraft | Verander parameters in die paneel. |
| 'n Getoetste heen-en-terug met SolidWorks | Kontroleer die skets wat die makro bou voor jy daarop staatmaak. |

## 3D

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Afrondings, skuinsrande, skille en lofts; sweeps langs 'n pad wat styg (3D-paaie) | Trek kontoere met bogies uit, druk en trek vlakke, en draai en sweep langs plat paaie. |
| Ekstrudeer in 'n ander rigting as op | Teken die vorm op die grond en ekstrudeer dit op of af (met 'n skuinsheid of langs 'n pad as jy wil); draai die soliede liggaam daarna. |
| Hoogte en dikte van 2D-voorwerpe | Die tekening lê op die grond (hoogte 0) op die 3D-oortjie. |
| Redigeer soliede liggame, streke en liggame uit ander programme; wys dié binne blokke; hul vlakke op gesweep, gelofte of ander vrye vorm oppervlaktes; polyvlak- en veelhoeknette | Model-ruimte-soliede wys op die 3D-oortjie soos hulle is en word onveranderd terug in DWG gestoor; wat nie geteken is nie, word gelys wanneer die 3D-oortjie oopgaan. Vra vir nette as 3D-vlakke in modelruimte. Sien [Soliede uit ander programme](topic:3d-solids#solids-from-other-programs). |
| Kopieer en plak van soliede liggame | Gebruik op die 3D-oortjie {{cmd:COPY}}. Die knipbord hou net 2D-voorwerpe. |
| Snitte, aansigte wat latere veranderinge aan die soliede volg, en geskakeerde soliede op uitgedrukte blaaie | {{cmd:VIEWBASE}} plaas plat aansigte ('n momentopname); voer dit weer uit ná jy die soliede verander. |
| Materiale, teksture en beligtingsinstellings | Die visuele style: geskakeerd, rande, verborge lyn, draadraam, X-straal. |
| Kaartlae wat uitgedruk word, op blaaie se vensters en in die 3D-oortjie; prente uit lêers wat saam met die tekening gestoor is; 'n tekening se ligging wat vir ander programme in DWG 2000–2007 en DXF R12 geskryf word | Kaartlae wys onder die modelruimte op die skerm; die stelsel en die laaglys word saam met die tekening gestoor: sien [Kaartlae onder die tekening](topic:map-layers). |
| E57-skanderings van meer as 6 miljoen punte of 512 MB, skandeerders se eie lêers (RCP, RCS, FLS, LGS, TZF, ZFS), 'n puntwolk wat saam met die tekening gestoor of uitgedruk word, vasvang aan 'n wolk op die 3D-oortjie, regop (snit-)skywe op die Model-oortjie | Voer groot skanderings of die vervaardigers se eie skanderings uit as LAS of LAZ ([Puntwolkformate](topic:point-cloud-formats)); heg die wolk elke keer aan wanneer jy die tekening oopmaak; spoor oor van 'n plan-skyf op die Model-oortjie: sien [Spoor as-gebou-lyne oor 'n puntwolk](topic:point-clouds). |
| Registrasie van skanderings: teikens (sfere, dambordjies) in 'n skandering self vind, alle skanderings saam oplos (bundelaanpassing), skaal, registrasie teen 'n model | Kies ooreenstemmende punte of tik teikenkoördinate, en verfyn dan een skandering op 'n slag met ICP: sien [Registreer verskeie skanderings in een](topic:register-scans). |

## Roetines en aanpassing

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Gekompileerde of beskermde LISP (.fas, .vlx), inheemse programme (.arx, .crx, .dbx) en VBA (.dvb) | Laai 'n roetine se .lsp-bron met {{cmd:APPLOAD}}. |
| LISP se `grread`, reaktore (`vlr-…`), kurwe-funksies (`vlax-curve-…`), woordeboeke en uitgebreide data, die Express Tools se `acet-…` | Die res van die taal werk: sien [LISP-roetines laat loop](topic:run-lisp). Die opdraglyn noem 'n ontbrekende funksie wanneer 'n roetine daarby kom. |
| Prente en skyfies in 'n roetine se dialoog | Hulle wys as leë rame; die res van die dialoog werk. |
| CraftScript (.craft), Lua en Python in CadCraft | Laat hulle loop in PartCraft se Script-werkruimte. |
| Laag-, kleur- en lynsoortlyste binne die lintmenu-style | Gebruik die {{ui:Lae}}-paneel en {{ui:Eienskappe}}. |
| Die Startup Suite en aliasse wat op jou rekenaar bewaar word of gesinchroniseer word | Hulle word in hierdie blaaier bewaar; die rekenaarprogram en die wolkdiens sal dit vir jou bewaar. In Studio word `acad.lsp` en `acaddoc.lsp` gelees uit 'n ondersteuningsvouer wat jy kies (Laai toepassings). |

## Hulp

Die hulp beskryf hierdie weergawe. Wanneer iets bygevoeg word, skuif dit uit hierdie bladsy en in die stap-vir-stap-gidse.

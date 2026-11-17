---
title: Úrræðaleit
summary: Skilaboð sem CadCraft birtir og vandamál sem þú gætir lent í, hvert með orsök og lagfæringu.
keywords: vandamál, villa, virkar ekki, skilaboð, get ekki opnað, óþekkt skipun, ekkert gerist, fast, takkar virka ekki, autt, vantar, lagfæring
from: 8299b222
---

## Opna skrár

| Skilaboð eða einkenni | Orsök | Lagfæring |
|---|---|---|
| „CadCraft opnar DWG- og DXF-teikningar. „…“ er hvorugt.“ | Skráin er ekki `.dwg` eða `.dxf`. | Opnaðu teikningarskrána sjálfa. PDF má flytja inn (Opna spyr hvort flytja eigi inn eða festa, sjá [PDF-undirlög](topic:pdf-underlay)); myndir fara inn með `IMAGEATTACH`. |
| „Þessi tvíundar-DXF endar mitt í hlut: skráin er stytt eða skemmd.“ | Tvíundar-DXF-skráin stoppar áður en hún endar. | Skrifaðu RECOVER til að opna það sem hægt er að lesa, eða biddu um skrána aftur. |
| „Þetta er ekki læsileg DXF-skrá (röng hópkóði í línu …).“ | DXF-skráin er skemmd eða er í raun ekki DXF. | Biddu um skrána aftur, eða um DWG. |
| „Ekki var hægt að lesa þessa teikningu. Hún gæti verið skemmd, eða vistuð í útgáfu sem lesarinn ræður ekki við enn (…).“ | DWG-lesarinn gat ekki lesið hana. | Biddu um DWG vistaða í eldri útgáfu, eða um DXF. |
| „Þessi teikning er frá AutoCAD R11 / R12 (DWG AC1009), eldri en CadCraft les …“ | DWG-skrár frá Release 12 og eldri nota snið sem CadCraft les ekki. | Í forritinu sem bjó hana til skaltu vista hana sem DXF (hvaða útgáfu sem er) eða sem nýrri DWG, og opna það. {{ui:Vista sem}} hjá CadCraft býður DXF R12 fyrir forrit sem vilja þetta gamla snið. |
| „Ekki tókst að opna …“ á eftir skilaboðum um net, við fyrstu DWG-skrána | DWG-lesarinn gat ekki sótt sig: þú ert án nettengingar og CadCraft er ekki vistað til notkunar án nettengingar, eða tengingin rofnaði. | Farðu á netið og reyndu aftur, eða opnaðu DXF. Smelltu á {{ui:Vista til notkunar án nettengingar}} og bíddu eftir „Tilbúið án nettengingar“ svo DWG-skrár opnist án nettengingar næst. Sjá [Vinna án nettengingar](common:offline). |
| Hnappurinn fyrir notkun án nettengingar segir „Ekki tókst að vista“ | Sumar skrár sóttust ekki. | Athugaðu tenginguna og smelltu á hnappinn til að reyna aftur. |
| Hnappurinn fyrir notkun án nettengingar segir „Ekki tiltækt án nettengingar“ | Einkagluggar og sumar stýrðar tölvur geta ekki geymt afrit fyrir notkun án nettengingar. | Notaðu venjulegan glugga, eða vertu á netinu. |
| CadCraft opnast ekki án tengingar | Það var ekki vistað til notkunar án nettengingar í þessum vafra, eða vafrinn hreinsaði það. | Næst þegar þú ert á netinu skaltu smella á {{ui:Vista til notkunar án nettengingar}} og bíða eftir „Tilbúið án nettengingar“. |
| Teikningin opnast en hlutar vantar | Hlutir sem CadCraft getur ekki teiknað enn, eða lög sem eru slökkt á eða frosin í skránni. | Lestu „Um þessa skrá“ í vinstra spjaldinu. Athugaðu spjaldið {{ui:Lög}}. |
| Texti vefst á tvær línur | CadCraft teiknar texta með Helvetica-líku letri, sem er breiðara en sum CAD-letur. | Styttu textann í {{ui:Eiginleikar}}, eða sættu þig við auka línuna. |
| Hringur birtist sem sporbaugur, eða speglaður texti er læsilegur rétt | Hluturinn var teiknaður í hallandi fleti, eða séður neðan frá, í forritinu sem bjó til skrána. CadCraft sýnir hann eins og séð ofan frá, eins og grunnmynd þess forrits gerir; texti er áfram læsilegur. | Ekkert að laga. Til að sjá hann á hátt hins forritsins skaltu biðja um að teikningin sé flött, eða með hlutunum teiknuðum ofan frá. |
| Blokk, hringur eða mál er einhvers staðar annars staðar en í forritinu sem bjó skrána til | Tilvik í teikningu sem CadCraft les rangt. | Segðu okkur frá því á Discord, með skránni ef þú getur deilt henni. |

## Skipanalínan

| Skilaboð eða einkenni | Orsök | Lagfæring |
|---|---|---|
| „Óþekkt skipun „…“. Skrifaðu HELP til að fá listann.“ | Engin skipun eða skammstöfun með því nafni. | Skrifaðu `HELP`, eða sjáðu [Skipanaskrá](topic:commands). Sumar kunnuglegar skipanir eru [ekki komnar enn](topic:not-built-yet). |
| „Engin slík skipun“ við hliðina á skipanalínunni meðan þú skrifar | Það sem þú skrifaðir passar ekki við neitt enn. | Haltu áfram að skrifa, eða athugaðu stafsetninguna. |
| „Krafist er punkts eða valkostaorðs.“ | Það sem þú skrifaðir er hvorki punktur né valkostur. | Athugaðu sniðið: `x,y`, `@dx,dy`, `@d<a` eða eina tölu. Sjá [Hnita- og fjarlægðarinnsláttur](topic:coordinate-entry). |
| „Krefst jákvæðrar tölu eða tveggja punkta.“ | Fjarlægð var neikvæð eða ekki tala. | Skrifaðu jákvæða tölu, eða smelltu á tvo punkta. |
| „Krefst horns í gráðum eða tveggja punkta.“ | Hornið var ekki tala. | Skrifaðu gráðurnar sem venjulega tölu. |
| „Krefst tölu.“ | Tölu var vænst. | Skrifaðu aðeins tölustafi. |
| „Ógilt valkostaorð.“ | Stafirnir passa ekki við neinn valkost. | Skrifaðu hástafina sem sýndir eru í hornklofunum. |
| `*Hætt við*` | Þú ýttir á {{key:Esc}}, eða á {{key:Enter}} þar sem punktur var krafist. | Ræstu skipunina aftur. |
| Innsláttur kemst ekki á skipanalínuna | Reitur í spjaldi eða glugga hefur bendilinn. | Ýttu á {{key:Enter}} eða {{key:Esc}}, eða smelltu á teikninguna. |
| Skipunin notar hluti sem þú valdir ekki | Þeir voru valdir áður en þú ræstir skipunina. | Ýttu á {{key:Esc}} áður en skipunin er ræst. |
| Lína fór eitthvert óvænt | `x,y` er algildi. | Notaðu `@dx,dy` fyrir afstæða punkta. |
| „Ljúktu við eða hættu við núverandi skipun fyrst (Esc).“ | Þú ýttir á {{key:Mod+S}} meðan skipun var í gangi. | Ýttu á {{key:Esc}}, og vistaðu síðan. |
| „Ekki tókst að vista sem DWG (AutoCAD 2000): … Reyndu Vista sem, síðan DXF.“ | Eitthvað í teikningunni var ekki hægt að skrifa sem DWG. | Ýttu á {{key:Mod+Shift+S}}, veldu DXF R12 og smelltu á {{ui:Vista}}. |
| „Ekki vistað.“ | Þú lokaðir glugganum {{ui:Vista afrit sem}} með {{ui:Hætta við}} eða {{key:Esc}}. | Ýttu á {{key:Mod+Shift+S}} aftur og smelltu á {{ui:Vista}}. |

## Breytingar

| Skilaboð eða einkenni | Orsök | Lagfæring |
|---|---|---|
| Hlutur verður ekki valinn | Lagið hans er læst, slökkt eða frosið; eða þú ert á blaði og hluturinn er líkanið inni í sýnarglugga. | Opnaðu lagið, eða farðu á flipann {{ui:Líkan}}. |
| „Ekkert fannst þar.“ | Enginn hlutur undir smellinum. | Þysjaðu inn og smelltu á línuna sjálfa. |
| „Ekkert sker þann hlut þar.“ | {{cmd:TRIM}} fann engan hlut sem sker hlutann sem þú valdir. | Athugaðu að skurðarlínan skeri hann í raun. |
| „Ekki er hægt að stytta þennan hlut.“ | Stytting virkar á línum, bogum, hringjum og fjöllínum. | Sundraðu blokkum fyrst, eða eyddu og teiknaðu aftur. |
| „Engin mörk í þá átt.“ | {{cmd:EXTEND}} fann ekkert til að mætast við. | Veldu nær þeim enda sem á að lengjast. |
| „Ekki er hægt að færa þennan hlut samsíða.“ | Samsíðafærsla virkar á línum, bogum, hringjum og fjöllínum. | Sundraðu hlutnum fyrst, eða teiknaðu samsíða línu. |
| „Ekki er hægt að færa svona langt.“ | Færslan myndi snúa forminu við. | Notaðu minni fjarlægð. |
| „Radíus er of stór.“ eða „Fjarlægð er of stór.“ | Afrúnunin eða skáskurðurinn færi fram yfir enda línu. | Stilltu minni radíus með `R`, eða minni fjarlægðir með `D`. |
| „Aðeins fyrsta eða síðasta hluta opinnar fjöllínu er hægt að stytta.“ | Hornið myndi skera inn í miðja fjöllínuna. | Veldu tvo hluta fjöllínunnar sem liggja hvor við annan, eða notaðu `P` fyrir hvert horn. |
| „Veldu aðra, ólíka línu.“ | Seinna valið var sama línan, eða ekki lína. | Veldu aðra línu. |
| „Aðeins fjöllínur, blokkatilvísanir og mál eru sundruð.“ | Valið hafði ekkert til að sundra. | Veldu fjöllínu, blokkatilvísun eða mál. |
| „Þetta er núverandi lag. Gerðu annað lag núverandi fyrst.“ | Þú reyndir að slökkva á núverandi lagi. | Smelltu á nafn annars lags, og slökktu síðan á þessu. |
| „Það er þegar til lag sem heitir …“ | Lagaheiti verða að vera einstök. | Veldu annað nafn. |
| „Ekkert til að afturkalla.“ | Það er ekkert eftir til að afturkalla, eða þú opnaðir eða byrjaðir teikningu (það hreinsar söguna). | — |

## Mál og blokkir

| Skilaboð eða einkenni | Orsök | Lagfæring |
|---|---|---|
| Málsetningatexti og örvar eru örsmáir eða risastórir | Stærðir eru í teikniseiningum; heildarkvarðinn passar ekki við teikninguna. | Stilltu {{cmd:DIMSCALE}} á prentmælikvarðann; sjá [Stilla stærðir mála](topic:dimension-settings). |
| „Veldu punkt innan hornsins sem þú vilt mæla.“ | Staðsetning hornmálsins liggur á öðrum fætinum. | Smelltu innan hornsins. |
| „Þessar línur eru samsíða.“ | Samsíða línur hafa ekkert horn á milli sín. | Veldu tvær línur sem mætast. |
| „Veldu línulegt eða jafnrétt mál.“ | {{cmd:DIMCONTINUE}} eða {{cmd:DIMBASELINE}} þarf eitt til að byrja frá. | Veldu línulegt eða jafnrétt mál. |
| „Þessi teikning hefur engar blokkir enn: F setur inn eina úr skrá, L úr safninu …“ | Teikningin hefur engar eigin blokkir. | Skrifaðu `F` eða `L`, eða búðu til blokk með {{cmd:BLOCK}}. |
| „Engin blokk heitir „…“.“ | Nafnið er rangt. | Skilaboðin telja upp blokkirnar sem eru til. |
| „Blokkarheiti getur ekki byrjað á * eða notað …“ á eftir lista yfir stafi | Nafnið hefur staf sem blokkir geta ekki notað. | Notaðu bókstafi, tölustafi, `-` og `_`. |
| „Blokk getur ekki innihaldið sjálfa sig.“ | Valið hefur tilvísun í blokkina sem verið er að búa til. | Taktu þá tilvísun út. |
| „Engir hlutir valdir; ekkert búið til.“ | Þú ýttir á {{key:Enter}} áður en þú valdir. | Ræstu {{cmd:BLOCK}} aftur og veldu hlutina. |

## Blöð og prentun

| Skilaboð eða einkenni | Orsök | Lagfæring |
|---|---|---|
| „Sýnargluggar fara á útlit. Opnaðu útlitsflipa (eða búðu til einn með LAYOUT) fyrst.“ | {{cmd:MVIEW}} á flipanum {{ui:Líkan}}. | Smelltu fyrst á blaðflipa. |
| „Opnaðu útlitið með sýnarglugganum fyrst.“ | {{cmd:VPVIEW}} á flipanum {{ui:Líkan}}. | Smelltu fyrst á blaðflipann. |
| Mælikvarði sýnarglugga lítur út fyrir að vera tíu sinnum rangur | Einingar teikningarinnar eru rangar. | Stilltu {{ui:Einingar}} í {{ui:Núverandi stillingar}}. |
| „Það er ekkert til að prenta enn.“ | Líkanið er tómt. | Teiknaðu eitthvað, eða opnaðu teikningu. |
| „Veldu gluggann sem á að prenta.“ | {{ui:Gluggi…}} er valið og enginn gluggi var valinn. | Smelltu á {{ui:Velja}} og veldu tvö horn. |
| „… stærra en pappírinn: jaðrarnir eru skornir af.“ | Svæðið passar ekki í þeim mælikvarða. | Veldu minni mælikvarða, stærri pappír, eða {{ui:Passa á pappír}}. |
| „Vafrinn lokaði nýja flipanum, þannig að PDF-skjalið var sótt í staðinn.“ | Sprettigluggar eru lokaðir fyrir síðuna. | Opnaðu sótta PDF-skjalið, eða leyfðu sprettiglugga fyrir síðuna. |
| Stafir prentast sem „?“ | Letur PDF-skjalsins hafa engan staf fyrir þá (sjaldgæf tákn, hindí og önnur letur sem þurfa flókna mótun …), eða ekki tókst að sækja stærra letrið (án nettengingar). Evrópsk letur, kyrillískt, grískt, hebreskt, arabískt, persneskt, úrdú, taílenskt, kínverskt, japanskt og kóreskt prentast sem sjálf sig. | Fyrir arabískt, taílenskt, kínverskt, japanskt eða kóreskt letur skaltu prenta aftur með tengingu. Önnur letur eru ekki komin enn. |
| Vinnulínur sjást í PDF-skjalinu | Lög þeirra eru prentuð. | Smelltu á prentarahnapp lagsins. |
| Allar línur eru jafnþykkar | Línuþykkt þeirra er {{ui:Sjálfgefið}}, þannig að þær prentast með pennabreidd gluggans. | Gefðu lögunum eða hlutunum {{ui:Línuþykkt}} í hægra spjaldinu, eða veldu {{ui:Línuþykkt}} í glugganum. Til að sjá línuþykktir á skjánum, ýttu á {{ui:LWT}} í stöðustikunni. |

## Takkar og skjár

| Einkenni | Orsök | Lagfæring |
|---|---|---|
| F3, F7 eða F8 breytir hljóðstyrk eða opnar Mission Control | Aðgerðatakkar á Mac. | Haltu **fn**, eða notaðu hnappana á stöðustikunni. Sjá [Lyklar, mýs og snertiborð](common:keys). |
| F7 spyr um caret browsing | Eigin notkun Firefox á F7. | Veldu Nei; notaðu hnappinn {{ui:Hnitanet}}. |
| {{key:Mod+N}} opnaði vafragluggann | Vafrinn heldur þeim takka. | Smelltu á {{ui:Ný}} eða skrifaðu `NEW`. |
| {{key:Mod+A}} valdi texta skipanalínunnar | Skipanalínan hafði bendilinn. | Smelltu fyrst á hlut, eða skrifaðu `ALL` við spurninguna `Veldu hluti`. |
| {{key:Delete}} eyðir ekki | Skipanalínan hafði bendilinn. | Skrifaðu `E` og ýttu á {{key:Enter}}. |
| Hægri smellur gerir ekkert á snertiborði Mac | Control-smellur gæti talist venjulegur smellur. | Smelltu með tveimur fingrum. |
| Ekkert hliðrast á snertiborði | Það er enginn miðhnappur, og Space hliðrar ekki. | Strjúktu með tveimur fingrum: 2D-sýnin hliðrast (klípa og músarhjólið þysja). Eða dragðu með hægri smell haldinn. |
| Fyrsti {{key:Esc}} fór úr öllum skjá | Vafrinn notar Esc til að hætta í öllum skjá. | Ýttu á {{key:Esc}} aftur til að hætta við skipunina. |
| {{key:F1}} gerir ekkert á Mac | F1 er birtustýritakki. | Haltu **fn**, eða smelltu á {{ui:Hjálp}}. |
| Innsláttur fer í leitarreit hjálparinnar | Hjálparspjaldið hefur bendilinn. | Smelltu á teikninguna. |
| Teikningin varð auð | Þú þysjaðir mjög langt í burtu. | Smelltu á {{ui:Mörk}}, eða tvísmelltu á hjólið. |
| „Yfirgefa síðu?“ þegar flipinn er lokaður | Það eru óvistaðar breytingar. | Vertu áfram, vistaðu með {{key:Mod+S}}, og lokaðu síðan. |

---
title: Ešte nie je hotové
summary: Čo táto verzia aplikácie CadCraft na kreslenie zatiaľ nerobí a čo môžete namiesto toho robiť dnes.
keywords: chýbajúce, obmedzenia, ctb, stb, štýl vykreslenia, vlastnosti, ucs, anotatívne, dynamický blok, spline, plán vývoja, nepodporované, uloženie dwg, šráfovanie, natiahnuť, pole, spojiť, matchprop, prerušiť, predĺžiť, typ čiary, hrúbka čiary, xref, cloud, 3d, telesá, booleovské operácie, viacnásobná vynášacia čiara, wipeout
from: 87e56521
---

CadCraft je vo vývoji. Táto stránka uvádza, čo aktuálna verzia nerobí, aby ste to nemuseli hľadať. Každá položka hovorí, čo môžete urobiť namiesto toho.

## Súbory a ukladanie

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Skutočný DWG súbor z CadCraft overený v samotnom AutoCAD | Každá uložená verzia je spätne načítaná čitačmi DWG troch iných programov a aplikáciou CadCraft. Pozri [Čo DWG uchováva a čo mení](topic:files#what-a-dwg-keeps-and-changes). |
| Ukladanie DXF novšieho ako 2000 | Uložte ako DXF 2000 alebo ako DWG až po AutoCAD 2018. |
| Ukladanie cez otvorený súbor v prehliadači | Každé uloženie stiahne novú kópiu; ak chcete, starý súbor nahraďte sami. V CadCraft Studio {{key:Mod+S}} zapíše zmeny do súboru, ktorý ste otvorili. |
| Ukladanie do cloudu a synchronizácia medzi počítačmi | CadCraft zatiaľ neposiela uloženia do cloudu: súbory DWG a DXF uchovávajte vo svojich priečinkoch. V CadCraft Studio [História](topic:history) zobrazuje cloudové verzie výkresu uloženého inde a kópie vašich uložení v tomto počítači. |
| Prekrytia a úprava prepojeného výkresu na mieste | Pripojte výkres ako prepojenie a po zmene druhého výkresu ho znova načítajte. Prepojenie zostane prepojením aj pri uložení ako DWG a {{cmd:XCLIP}} ho orezáva. |
| Obrázky v DXF; wipeouty, ktoré skrývajú to, čo je pod nimi | DXF uchováva obrázok ako jeho rámček s názvom súboru; DWG ho uchováva ako obrázok – pozri [Obrázky vo výkrese](topic:pictures). Wipeout sa zobrazí ako svoj rámček. |
| Úprava viacnásobných vynášacích čiar so zakrivenými vynášacími čiarami, s vynášacími čiarami na oboch stranách obsahu alebo s blokom, ktorý je otočený alebo nerovnomerne mierkovaný | Kreslia sa tak, ako ich nakreslil iný program, a pohybujú sa ako jeden celok. Viacnásobné vynášacie čiary s rovnými vynášacími čiarami k jednému cieľu a text alebo blok ako obsah sa načítajú upraviteľné ({{cmd:MLEADEREDIT}}). |
| V tabuľkách z iných programov: bunka obsahujúca blok, formátovanie textu v bunke, bunkové okraje a farby tabuľky DXF, tabuľka rozdelená do stĺpcov | Tabuľka sa otvorí ako upraviteľná tabuľka ({{cmd:TABLEDIT}}) a zobrazí sa tak, ako ju nakreslil iný program, kým ju neupravíte; potom ju CadCraft prekreslí z jej buniek: obyčajný text, vzorce ako `=G3*H3` a `=Sum(I3:I9)`, zarovnanie a výšky textu. Bunka s blokom sa potom vyprázdni. Nedotknutá tabuľka DWG sa uloží späť s dátami buniek, s ktorými prišla. |
| Skutočný objekt tabuľky v uloženom DXF | DWG uchováva tabuľku ako tabuľku, ktorú môžu iné programy upravovať. DXF ju uchováva ako blok, ktorý ju kreslí, s vlastným záznamom CadCraft: CadCraft ju znova otvorí ako tabuľku; iné programy vidia blok. Zrkadlená alebo nerovnomerne mierkovaná tabuľka sa takto uloží aj v DWG. |
| Kopírovanie a vkladanie s inými programami | Schránka CadCraft funguje medzi výkresmi a kartami CadCraft v tom istom prehliadači, nie s inými programami. Uložte ako DWG alebo DXF a otvorte ho tam. Pozri [Kopírovať, prilepiť a duplikovať](topic:copy-paste). |

## Kreslenie a úpravy

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Šráfovacie vzory, ktoré CadCraft nemá, a prechodové výplne presne tak, ako ich maľujú iné programy | Otvorené šráfovania so vzormi, ktoré CadCraft nemá, sa zobrazia ako tón. Prechodová výplň ({{cmd:GRADIENT}}) sa maľuje vlastným spôsobom CadCraft pre každý typ: podobne ako v iných programoch, nie bod po bode. DWG 2004 a novšie ju uchovávajú ako skutočné prechodové šráfovanie; v súbore DXF 2000 alebo DWG 2000 ju číta len CadCraft a iné programy vidia plnú výplň. Vzory sa načítavajú zo súboru `.pat` a šráfovanie možno prepojiť s jeho hranicou, potom ju sleduje: pozri [Šráfovanie a výplňové plochy](topic:hatch). |
| Typy čiar s tvarmi alebo textom a hrúbky čiar v uloženom DXF R12 | Tvary a text v type čiary súboru sa z jej čiarkovania vynechajú; na zachovanie hrúbok čiar uložte ako DWG. |
| Šráfovania so vzorom v uloženom DXF | R12 nemá šráfovanie: ukladajú sa ako svoje obrysy. Na zachovanie vzoru uložte ako DWG. |
| Polia, ktoré vytvoril iný program alebo ktoré môže upravovať; riadky a úrovne v cestových a polárnych poliach; pole, ktoré sleduje svoju dráhovú krivku | Pole vytvorené asociatívne (ASsociative) ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; mení sa pomocou {{cmd:ARRAYEDIT}}) sa uloží ako odkaz na blok s číslami CadCraft: iné programy ho zobrazia, presunú, vykreslia a rozložia, ale nemôžu zmeniť jeho počty; pole vytvorené v inom programe sa tu otvorí ako obyčajný odkaz na blok. Cestové pole si ponecháva kópiu svojej dráhy: úprava krivky potom položky nepresúva. |
| Orezané výrezy listov do a z iných programov | Výrez orezaný pomocou {{cmd:VPCLIP}} alebo vytvorený pomocou {{cmd:MVIEW}} Polygonal alebo Object sa uloží s vlastným obrysom CadCraft: iné programy ho otvoria ako obdĺžnik okolo neho a výrez orezaný v inom programe sa tu otvorí ako svoj obdĺžnik. DXF R12 zachováva len obdĺžnik. |
| {{cmd:STRETCH}} s prekríženým mnohouholníkom | Použite jedno alebo viac prekrížených okien. |
| {{cmd:PEDIT}} Edit vertex (jeden vrchol naraz v príkazovom riadku) | Úchyty a prehliadač vrcholov vo Vlastnostiach (každý vrchol, jeho šírky a vypuklosť). Zvyšok PEDIT je hotový: pozri [Spline a lomené čiary](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} a {{cmd:JOIN}} na elipsách a splinoch | {{cmd:EXPLODE}} spline (alebo ho {{cmd:PEDIT}}) a získate lomenú čiaru, s ktorou tieto príkazy pracujú. |
| Zaoblenie a skosenie medzi oblúkovým segmentom lomenej čiary a susedným segmentom; zaoblenie spájajúce čiaru do lomenej čiary | {{cmd:EXPLODE}} lomenú čiaru a potom zaoblite jej časti. Oblúk zaoblenia sa pridá ako samostatný objekt. |
| Orezanie a predĺženie: voľba Projekt (3D) a predĺženie oblúkového konca lomenej čiary | Orezávajte v rovine výkresu; pri oblúkovom konci rozložte lomenú čiaru alebo nakreslite oblúk znova. |
| OLE objekty: ich vkladanie, spúšťanie alebo úprava; zobrazovanie tých, ktoré súbor DWG uvádza na mieste; metasúborové obrázky | Pozri [Obrázky](topic:pictures#objects-from-other-programs-ole). Objekty DXF sa zobrazujú ako ich bitmapa alebo označený rámček; objekty DWG sa uchovávajú, nekreslia sa na mieste ({{cmd:OLELIST}} ich vypíše a umiestni kópiu obrázka tam, kde určíte). |
| Zadávanie formátovacích kódov (tučné, zlomky nad sebou, farby po slovách) v odseku textu; iné písma než jedno písmo v štýle Helvetica; stĺpce | Formátovanie, ktoré prišlo v súbore, sa zachová, nakreslí a uloží (pozri Text); nový text odseku má jednu výšku a farbu. |
| Úprava odseku textu pri jeho otočení | Editor sa otvorí vodorovne; text si zachová svoje otočenie. |
| Viacnásobné vynášacie čiary uložené ako objekty viacnásobnej vynášacej čiary v DXF | DWG ich uchováva ako viacnásobné vynášacie čiary so všetkými vynášacími čiarami a blokom ako obsahom; DXF uchováva to, čo kreslia (čiary, hroty šípok a text alebo blok). |
| V tabuľkách ({{cmd:TABLE}}): text, ktorý sa zalamuje v bunke, tabuľky rozdelené na časti, vlastný textový štýl štýlu tabuľky a farby podľa druhu riadku v dialógu, dátové prepojenie na tabuľkový súbor (`.xlsx`) alebo prepojenie, ktoré číta súbor samo | Text bunky sa zalomí len tam, kde ho zalomíte ({{key:Alt+Enter}}); rozšírte stĺpec. {{cmd:DATALINK}} číta súbor `.csv` a {{cmd:DATALINKUPDATE}} vás požiada, aby ste súbor vybrali znova. {{cmd:DATAEXTRACTION}} a {{cmd:COUNTTABLE}} vytvoria tabuľku, ktorá sa sama nemení podľa výkresu: spustite ich znova (živé počítanie: {{cmd:BOMTABLE}}). |
| Definície atribútov uchovávané samostatne v uloženom súbore (mimo bloku), viacriadkové atribúty | Pred uložením vložte definície atribútov do bloku: samostatne sa uložia ako text zobrazujúci značku. |
| Stavy hladín (ukladanie a obnovenie toho, ktoré hladiny sú zapnuté) | Použite {{cmd:LAYISO}} / {{cmd:LAYUNISO}} alebo hladiny zapínajte a vypínajte ručne. |
| Výber mnohouholníkom okna a prekríženým mnohouholníkom a uložené filtre výberu | Ohrada (`F`), Okno, Prekríženie, Odstrániť (`R`), {{cmd:QSELECT}} podľa pravidla. |

## Panel Vlastnosti

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Kreslenie volieb Fit a vodorovnej polohy textu a textu pod čiarou na kótach iných než dĺžkových a zarovnaných | Uchovávajú sa na objekte, zobrazujú sa vo Vlastnostiach a ukladajú sa; CadCraft umiestni text podľa svojho pravidla. |
| Materiály, ktoré vidia iné programy | Uložený súbor uchováva názov materiálu pre CadCraft; iné programy zobrazujú materiál hladiny. |
| Priehľadnosť v súboroch DWG 2000 a DXF | Iné programy zobrazujú tieto objekty plné; CadCraft priehľadnosť zachováva. Pre všetkých uložte ako DWG 2004 alebo novší. |
| Prepojenie šráfovania vytvorené v inom programe | CadCraft ukladá vlastné prepojenie v súboroch DWG a DXF 2000; prepojenia vytvorené v iných programoch sa nečítajú. Použite `HATCHEDIT` a Prepojiť: pozri [Šráfovanie a výplňové plochy](topic:hatch). |
| Súradnice vo Vlastnostiach v UCS | Vlastnosti zobrazujú svetové súradnice; stavový riadok a {{cmd:ID}} zobrazujú súradnice UCS. Pozri [Otočenie pohľadu a vlastné súradnice](topic:ucs-and-turned-view). |
| Samostatná poloha anotatívneho objektu v každej jeho mierke; čítanie záznamov pre jednotlivé mierky, ktoré uchovávajú iné programy | Anotatívny text alebo kóta uchováva zoznam mierok ({{cmd:OBJECTSCALE}}) a každý výrez ho zobrazí v takej veľkosti, ktorá zodpovedá jeho mierke, na tom istom mieste. Zoznam sa ukladá ako vlastné dáta CadCraft: iný program vidí objekt v jednej mierke, pre ktorú je dimenzovaný, a zoznam vytvorený v inom programe sa nečíta. Pozri [Jednotky, papiere a mierky](topic:units-papers-scales#annotate-by-scale). |
| Zmena vzdialeností, uhlov alebo prevrátení dynamického bloku; dynamické bloky, ktoré zostanú dynamické pri uložení v inej verzii DWG alebo ako DXF | Prepnite jeho stav viditeľnosti v Vlastnosti › {{ui:Vlastné}}; jeho ďalšie hodnoty sa tu zobrazia len na čítanie. Zostane dynamický, keď ho uložíte ako DWG vo verzii, v ktorej výkres prišiel. Pozri [Dynamické bloky](topic:dynamic-blocks). |
| Tolerancia prilícania splinu, stupeň splinu 6 a vyšší, 3D spliny | Prilícanie a riadiace body, stupne 1 až 5 a váhy sú hotové: pozri [Spline a lomené čiary](topic:splines). Výška splinu (Z) sa neuchováva. |

## Pomôcky na presnosť

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Sledovanie bodov naprieč príkazmi a dialóg nastavení sledovania (relatívne polárne uhly, dodatočné uhly) | {{cmd:POLARANG}} nastaví krok; body získajte znova v ďalšom príkaze. |
| Uchytenie na mriežku | Zadajte súradnice; mriežka je len vizuálna pomôcka. |
| Možnosti Oblúk a Dĺžka pri výbere rohov plochy a MEASUREGEOM Objem | Nakreslite obrys pomocou {{cmd:PLINE}} (aj s oblúkmi) a potom {{cmd:AREA}} `O`. |
| Dynamické zadávanie pre úchyty a jeho zoznam možností (šípka dole) | Príkazový riadok zobrazuje možnosti. |
| Uhly v stupňoch-minútach-sekundách, gradoch alebo smeroch geodeta | Zadajte desatinné stupne: `30.5` pre 30°30'. |
| Dialóg správcu pohľadov; pomenované pohľady listu, ktoré sa vrátia na ten istý list | {{cmd:NAMEDVIEW}} vypíše a obnoví pohľady. Uložený súbor ich uchováva, ale pohľady listu sa vrátia na prvý list. |

## Listy, kóty a vykresľovanie

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Polia pre mierku výrezu, pomenovaný objekt ako hladina alebo blok, hypertextový odkaz a polia množiny listov nad číslo a názov listu; polia zapísané ako poľné objekty, ktoré iné programy aktualizujú | {{cmd:FIELD}} má dátum, názov súboru, číslo listu, názov a počet, vlastnosti výkresu ({{cmd:DWGPROPS}}), plochu, dĺžku a iné vlastnosti objektu a vzorce, v texte, atribútoch a bunkách tabuliek. Iný program zobrazí pole CadCraft ako text, ktorý naposledy načítal; CadCraft číta polia dátumu, názvu súboru, vlastnosti, listu a výrazu iného programu a ostatné druhy ponecháva ako text. Mierka výrezu sa zadáva ručne. |
| Uchovanie aktuálneho štýlu kót; text kóty presunutý na voľné miesto | Výkres sa otvorí s aktuálnym štýlom Standard. Text leží na kótovacej čiare (DIMTEDIT Left / Right / Center). Pozri [Nastavenie veľkostí kót](topic:dimension-settings). |
| Upraviteľné dvojriadkové uhlové kóty z otvorených súborov, ktoré CadCraft nedokáže určiť | Zobrazia sa tak, ako sú nakreslené v súbore. Súradnicové kóty, kóty dĺžky oblúka a zalomeného polomeru sa otvoria ako kóty, ktoré môžete upraviť. |
| Kontrola čítača CTB voči súboru z iného programu (je hotový podľa publikovaného opisu), pomenované štýly vykreslenia (STB), rozptyľovanie, čísla pier, odtiene sivej z CTB a adaptívne prispôsobenie typu čiary v štýle vykreslenia | Vytvorte tabuľku v {{ui:Tabuľky štýlov vykresľovania}} (farba, sivá, atrament, hrúbka čiary, typ čiary, koniec a spojenie čiary a výplň podľa farby): pozri [Tabuľky štýlov vykresľovania](topic:plot-pdf#plot-style-tables). |
| Nastavenia strany | Vyberte papier, mierku a štýl vykreslenia v dialógu {{ui:Vykresliť do PDF}}; list si ponecháva svoj štýl vykreslenia. |
| Hindčina a iné písma, ktoré potrebujú zložité tvarovanie v PDF, a zriedkavé ideogramy (európske písma, cyrilika, gréčtina, hebrejčina, arabčina, perzština, urdčina, thajčina, čínština, japončina a kórejčina pri tlači) | Tlačia sa ako "?". |
| Arabské písmo a čínština, japončina alebo kórejčina v tom istom vykreslenom PDF | Vykreslenie nesie jedno písmo: jedno z dvoch písiem sa vytlačí ako "?". |
| Explicitné smerové značky v texte (vnorenia, prepisy, izolácie) | Ignorujú sa: každý riadok sa zoraďuje podľa samotných písmen. |
| Obrázky vnútri pripojenej strany PDF vo vykreslení | Čiary, výplne a text strany sa vytlačia. Strana, ktorá je len obrázok, sa pridá pomocou {{cmd:SCANATTACH}} a obrázky sa vytlačia. Pozri [Podkladové PDF](topic:pdf-underlay#plot-and-save). |
| Odoslanie úlohy na laser z CadCraft Studio (Studio nemá Web Serial) | Uložte G-kód a odošlite ho vlastným programom lasera alebo z Chrome či Edge. Pozri [Odoslanie výkresu na laser](topic:laser-cutting#send-from-the-browser). |

## Väzby a parametre

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Väzby na listoch, v blokoch, na elipsách, splinoch alebo texte | Zadávajte väzby na karte {{ui:Model}}, na čiarach, lomených čiarach, kružniciach, oblúkoch a bodoch. |
| Hladká väzba (G2) a priame väzbanie oblúkovej vypuklosti lomenej čiary | Dotyčnica a rovnosť; oblúkový segment sleduje svoje dva konce. |
| Referenčné (riadené) kótové väzby a `3Point` v {{cmd:DCANGULAR}} | Obyčajná kóta (DIMLINEAR …) zobrazuje hodnotu bez jej riadenia. |
| Kótové väzby pevnej veľkosti na papieri a ich vykresľovanie | Zobrazujú sa len na obrazovke; na vykreslenie pridajte obyčajné kóty. |
| Väzby zachované cez EXPLODE, BREAK, JOIN a iné príkazy, ktoré vytvárajú nové objekty, a na orezaných lomených čiarach | Znova ich naviažte (AUTOCONSTRAIN pomáha). {{cmd:MIRROR}} a {{cmd:TRIM}} čiar, oblúkov a kružníc ich zachovávajú. |
| Návrhové tabuľky (konfigurácie) v CadCraft | Zmeňte parametre v paneli. |
| Overený prechod so SolidWorks | Pred použitím skontrolujte náčrt, ktorý makro vytvorí. |

## 3D

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Zaoblenia, skosenia, škrupiny a lofty; ťahanie po dráhe, ktorá stúpa (3D dráhy) | Vytiahnite obrysy s oblúkmi, tlačte a ťahajte plochy, rotujte a ťahajte po rovných dráhach. |
| Vytiahnutie v inom smere ako nahor | Nakreslite tvar na zem a vytiahnite ho nahor alebo nadol (podľa potreby so zúžením alebo po dráhe); potom teleso otočte. |
| Výška a hrúbka 2D objektov | Výkres leží na zemi (výška 0) na karte 3D. |
| Úprava telies, oblastí a plôch z iných programov; ich zobrazenie vnútri blokov; ich plochy na zametaných, loftovaných alebo iných voľných plochách; polyface a polygónové siete | Telesá v priestore modelu sa na karte 3D zobrazia tak, ako sú, a pri uložení do DWG sa zapíšu nezmenené; to, čo sa nevykreslí, sa vypíše pri otvorení karty 3D. Siete si vyžiadajte ako 3D plochy v priestore modelu. Pozri [Telesá z iných programov](topic:3d-solids#solids-from-other-programs). |
| Kopírovanie a vkladanie telies | Na karte 3D použite {{cmd:COPY}}. Schránka obsahuje len 2D objekty. |
| Rezy, pohľady, ktoré nasledujú neskoršie zmeny telies, a tieňované telesá na vykreslených listoch | {{cmd:VIEWBASE}} umiestni ploché pohľady (snímka); po zmene telies ho spustite znova. |
| Nastavenia materiálov, textúr a osvetlenia | Vizuálne štýly: tieňovaný, hrany, skrytá čiara, drôtený, röntgen. |
| Mapové vrstvy vykreslené, na výrezoch listov a na karte 3D; obrázky zo súborov uložených s výkresom; umiestnenie výkresu zapísané pre iné programy v DWG 2000–2007 a DXF R12 | Mapové vrstvy sa zobrazujú pod priestorom modelu na obrazovke; systém a zoznam vrstiev sa ukladajú s výkresom: pozri [Mapové vrstvy pod výkresom](topic:map-layers). |
| Skeny E57 s viac ako 6 miliónmi bodov alebo 512 MB, vlastné súbory výrobcov skenerov (RCP, RCS, FLS, LGS, TZF, ZFS), oblak bodov uložený s výkresom alebo vykreslený, uchytenie na oblak na karte 3D, zvislé (rezové) rezy na karte Model | Veľké skeny alebo skeny vo vlastných formátoch výrobcov exportujte ako LAS alebo LAZ ([Formáty oblakov bodov](topic:point-cloud-formats)); oblak pri každom otvorení výkresu pripojte znova; trasujte z pôdorysného rezu na karte Model: pozri [Trasovanie skutočného vyhotovenia nad oblakom bodov](topic:point-clouds). |
| Registrácia skenov: samostatné hľadanie cieľov (gule, šachovnice) v skene, riešenie všetkých skenov naraz (bundle adjustment), mierka, registrácia voči modelu | Vyberte zodpovedajúce body alebo zadajte súradnice cieľov, potom spresnite jeden sken naraz pomocou ICP: pozri [Registrácia viacerých skenov do jedného](topic:register-scans). |

## Rutiny a prispôsobenie

| Ešte nie je hotové | Namiesto toho dnes |
|---|---|
| Kompilované alebo chránené LISP (.fas, .vlx), natívne programy (.arx, .crx, .dbx) a VBA (.dvb) | Načítajte zdrojový súbor rutiny `.lsp` pomocou {{cmd:APPLOAD}}. |
| LISP `grread`, reaktory (`vlr-…`), funkcie kriviek (`vlax-curve-…`), slovníky a rozšírené dáta, `acet-…` z Express Tools | Zvyšok jazyka funguje: pozri [Spúšťanie rutín LISP](topic:run-lisp). Príkazový riadok pomenuje chýbajúcu funkciu, keď na ňu rutina narazí. |
| Obrázky a snímky v dialógu rutiny | Zobrazujú sa ako prázdne rámčeky; zvyšok dialógu funguje. |
| CraftScript (.craft), Lua a Python v CadCraft | Spúšťajte ich v pracovnom priestore Script v PartCraft. |
| Zoznamy vrstiev, farieb a typov čiar v štýloch ponuky pásu | Použite panel {{ui:Hladiny}} a {{ui:Vlastnosti}}. |
| Štartovacia sada a aliasy uložené v počítači alebo synchronizované | Uchovávajú sa v tomto prehliadači; desktopová aplikácia a cloudová služba ich budú uchovávať za vás. V Studio sa `acad.lsp` a `acaddoc.lsp` čítajú z priečinka podpory, ktorý vyberiete (Načítať aplikácie). |

## Pomocník

Pomocník popisuje túto verziu. Keď sa niečo pridá, presunie sa z tejto stránky do návodov.

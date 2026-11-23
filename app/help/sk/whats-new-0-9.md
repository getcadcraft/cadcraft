---
title: Čo je nové vo verzii 0.9 (staršie)
summary: Šrafovania, ktoré nasledujú svoj obrys, skupiny hladín, poschodia nad sebou, inteligentné 2D múry s dverami a oknami, textové štýly a editor formátovaného textu, plávajúci riadok príkazov, zachytávanie na mriežku, desať spôsobov kreslenia oblúka a panel Dokumenty.
keywords: čo je nové 0.9, staršia verzia, čo je nové, 0.9, poznámky k vydaniu, zoznam zmien, šrafovanie, pridružené šrafovanie, hatchedit, súbor pat, súbor vzorov, skupiny hladín, laygroup, poschodia, inteligentné múry, múr, dvere, okno, nástroje múrov, štýl textu, style, editor mtext, odsek, formátovanie, plávajúci riadok príkazov, riadok príkazov, horná oblasť, kompaktný, zachytávanie na mriežku, grid snap, f9, oblúk, panel dokumentov, check out, ocieľové profily UK, draw.io, thajský text, dxf r12, whats new, zmeny, 0.8, 0.8.1, verzia, nové funkcie, automatické dopĺňanie, duch, tabulátor, sketchfix, photosketch, autosheet, details, gridmove, autodim, značky, redline, zlúčenie, git, fossil, access, kreslenie bez zraku, čítačka obrazovky, limity, azimuty, aunits, shx, diagram, ole, história, porovnanie, slovami, vlastnosti, stopy a palce, roztiahnutie, jazyky, vstupné zariadenia, problémy, naživo, asistenti
from: 3451e64c
---

Toto sa zmenilo vo verzii CadCraft 0.9 v porovnaní s verziou 0.8.1. CadCraft je aplikácia na 2D a 3D kreslenie v CadCraft Studio 0.9 a jeho ôsmich aplikáciách. Verzia 0.9 dokončuje kreslenie pôdorysov, pridáva textové štýly a skutočný textový editor a dáva vám viac miesta na obrazovke.

## Nové

### Kreslenie pôdorysov

- **Šrafovania, ktoré nasledujú svoj obrys.** {{cmd:HATCH}} sa viaže na to, čo ho ohraničuje. Posuniete, otočíte alebo zmeníte mierku obrysu a šrafovanie aj jeho vzor sa prispôsobia; prekreslíte obrys a šrafovanie sa znova vypočíta. {{cmd:HATCHEDIT}} (`HE`) upraví šrafovanie dodatočne a vytvorí alebo ukončí väzbu. Pozrite [Šrafovanie a výplň plôch](topic:hatch).
- **Súbory vzorov šrafovania.** Na výzvu {{cmd:HATCH}} `Pick internal point` napíšte `F` (Súbor vzoru) a vyberte súbor `.pat`. Len súbory zapísané v obvyklom formáte boli vyskúšané.
- **Skupiny hladín.** V {{ui:Nástroje}} na paneli {{ui:Hladiny}}: {{ui:Nová skupina}}, {{ui:Pridať hotové skupiny}}, {{ui:Zoskupiť podľa názvu}} a {{ui:Nájsť hladinu}}; alebo napíšte {{cmd:LAYGROUP}} (`LG`). Pozrite [Usporiadanie výkresu hladinami](topic:layers#group-layers).
- **Poschodia nad sebou.** {{cmd:FLOORS}} (`FLR`), alebo {{ui:Poschodia…}} v ponuke {{ui:Viac}} skupiny {{ui:Pohľad}}. Výrez na liste môže zobraziť jedno poschodie pod {{ui:Zobrazené poschodie}} vo {{ui:Vlastnostiach}}. {{cmd:FLOORLAYERS}} premení poschodia na hladiny pre súbor, ktorý pôjde niekomu inému. Pozrite [Poschodia v jednom výkrese](topic:floors).
- **Inteligentné 2D múry, dvere a okná.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) a {{cmd:DELOPENING}}. Rohy, T-spoje a križovania sa určia za vás. Múry si uchovávajú záznam o tom, ako sa spájajú, a {{ui:Vlastnosti}} získavajú {{ui:Zakázať spojenie na začiatku}} / {{ui:na konci}}, {{ui:Čiaru umiestnenia}} a upraviteľnú {{ui:Dĺžku}}. Pozrite [Kreslenie 2D inteligentných múrov, dverí a okien](topic:walls-2d).
- **Nástroj múrov pre pôdorysné múry.** Napíšte {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} a ďalšie. Zatiaľ nemajú tlačidlá na paneli nástrojov. Pozrite [Tvary, rezy, odsadenia a väzby 2D múrov](topic:wall-tools-2d).

### Text

- **Textové štýly.** {{cmd:STYLE}} (`ST`), alebo {{ui:Štýl textu}} na paneli {{ui:Kreslenie}}: pomenované štýly s písmom, výškou, koeficientom šírky a sklonom. Pozrite [Nastavenie písma a veľkosti textu pomocou textových štýlov](topic:text-styles).
- **Editor formátovaného odsekového textu.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} alebo dvojklik na text otvorí okno s písmom, veľkosťou, tučným, kurzívou, podčiarknutím, prečiarknutím, farbou, zarovnaním a znakmi stupňa, plus-mínus a priemeru, plus tlačidlá {{ui:OK}} a {{ui:Zrušiť}}. Pozrite [Formátovanie odsekového textu](topic:format-paragraph-text).
- **Diagram z XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) číta aj vložený XML draw.io. Pozrite [Kreslenie diagramu z textu](topic:text-to-diagram).
- **Thajský text v PDF výstupe.** Predtým sa tlačil ako otázniky.

### Viac priestoru a pomôcky na kreslenie

- **Plávajúci, tenší riadok príkazov a kompaktná horná oblasť.** Potiahnite úchyt riadka príkazov, aby sa plával, potiahnite jeho horný okraj pre menej riadkov; {{key:F2}} otvorí históriu. {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Riadok príkazov}} a voľby hornej oblasti majú rovnaké nastavenia. Pozrite [Nastavenia](topic:settings#command-line).
- **Ponuka uchopenia objektov.** Pravým kliknutím na {{ui:Uchopenie}} v stavovom riadku alebo napísaním {{cmd:OSNAP}}.
- **Zachytávanie na mriežku.** Tlačidlo {{ui:Zachytávanie na mriežku}} v stavovom riadku alebo {{key:F9}}: vybrané body idú na najbližší bod mriežky, keď uchopenie objektu bod nezachytilo.
- **Oblúk desiatimi spôsobmi a Pokračovanie.** {{ui:Oblúk}} na paneli {{ui:Kreslenie}} alebo {{cmd:ARC}}: 3 body, rodina Začiatok/Stred/Koniec a rodina Stred/Začiatok/Koniec, a Pokračovanie (stlačte {{key:Enter}} pri začiatočnom bode) od poslednej čiary, oblúka alebo lomenej čiary.
- **Panel Dokumenty.** {{cmd:DOCUMENTS}} (`DOCS`) alebo {{ui:Dokumenty…}} v ponuke {{ui:Viac}} skupiny {{ui:Pohľad}}: revízia, stav a vybratie na úpravu pre každý výkres v priečinku projektu. Otvorí sa ako vycentrované dialógové okno. Pozrite [Dokumenty](topic:documents).

### Súbory

- **Ocieľové profily UK.** 976 profilov na paneli {{ui:Štandardný}}, zadávaných tak, ako sa píšu na výkresoch (napríklad `305x165x40 UB`).
- **Juhoafrické balíky** (praktiky kreslenia a stavebné predpisy) ako balíky doplnku Stavebné predpisy. Čísla nie sú overené.
- **Doplnky pre CadCraft,** pridávané na požiadanie a predvolene vypnuté: návrh vnútorného osvetlenia, návrh čipov (HDL na rozloženie), rezbárske frézovanie, simulácia obvodov, ozubené kolesá reťazových prevodov a balíky krajinných predpisov doplnku Stavebné predpisy.

## Opravené

- Posun, otočenie alebo zmena mierky šrafovania nechávali vzor za sebou.
- {{cmd:GRIDMOVE}} odnášal celý pôdorysný múr, ktorý začína iba na čiare mriežky. Múr sa teraz posudzuje podľa koncov.
- Mriežka sa zobrazovala iba vnútri hraníc výkresu aj s vypnutými hranicami.
- Zoznam blokov na bočnom paneli sa posúva a názov, ktorý nie je blokom, vypíše bloky začínajúce týmto názvom („Mysleli ste"). 
- Súbory DXF R12, ktoré AutoCAD odmietal („Unknown group 1001 for table"), sa tu teraz otvárajú.
- Veľmi veľké súbory (okolo 70 000 entít a viac) sa neotvárali s hlásením „Maximum call stack size exceeded".
- Súbory DWG z AutoCADu 2018 a novších s vysokou verziou údržby sa neotvárali s hlásením „bad BITLONG code 11".
- V textovom okne odseku sa nová veľkosť zadaná pre vybranú časť zachová vo výbere.

## Vo všetkých aplikáciách

Popisy tlačidiel (Bootstrap) pri každom ovládacom prvku s nápovedou, úvodný tip, ktorý môžete zavrieť, karty, ktoré sa posúvajú, keď sa nezmestia, a názov karty prehliadača, ktorý nasleduje otvorený výkres (`<drawing> - CadCraft | CadCraft`). {{ui:Nastavenia}} › {{ui:Rozloženie}} je teraz rozbaľovací zoznam dvojriadkových možností. Zoznam jazykov v {{ui:Nastavenia}} je dlhší než vo verzii 0.8. Živá spoločná úprava, zbierky knižnice a jednotky hmotnosti a teploty sú opísané v poznámkach k Studiu.

## Úprimné obmedzenia

- Odsekový text nemá odrážky ani číslované zoznamy, pravítko tabulátorov ani zarovnanie do bloku. Vytlačené PDF nastavujú text vo Helvetice.
- Pôdorysné múry sú priame, takže oblúk sa kreslí ako krátke múry. Komunitná ručná kontrola nástroja múrov čaká.
- Skupiny hladín nie sú zapísané vo formáte AutoCADu, takže AutoCAD ich zobrazí ako plochý zoznam. Ostatné programy zobrazia všetky poschodia spolu, pokiaľ nespustíte {{cmd:FLOORLAYERS}}.
- Panel Dokumenty nevyskúšali dvaja ľudia na skutočnom zdieľanom úložisku. Rezbárske frézovanie nebolo spustené na žiadnom skutočnom počítači. Odhad osvetlenia bol overený proti sledovaniu fotónov, nie inému programu. Doplnky pre inžinierstvo sú pomôcky na kontrolu, nie náhrada za posúdenie inžiniera.
- Jazyky iné než angličtina sú strojové koncepty a niektoré nové slová sú iba v angličtine.

## Staršie: 0.8 a 0.8.1

Toto sa zmenilo vo verziách CadCraft 0.8 a 0.8.1 v porovnaní s verziou 0.7. Verzia 0.8 (1. novembra 2026) pridáva pomocníkov kreslenia, ktorí pracujú z vášho vlastného výkresu, pravidlami na vašom počítači a bez modelu; verzia 0.8.1 (2. novembra 2026) opravuje chyby nahlásené po nej.

### Nové

**Kreslenie, ktoré dokončí vašu myšlienku**

- **Duch ukáže, čo príde ďalej.** Keď nebeží žiadny príkaz, sivý prerušovaný duch ukazuje, čo podľa vzorov vášho výkresu nasleduje: ďalší stĺpik v rovnakom rozstupe, ďalší schodový stupeň, chýbajúci múr miestnosti. Stlačte {{key:Tab}}, aby sa nakreslil ako jeden krok späť, alebo {{key:Esc}}, aby sa zrušil. Pozerá sa iba na najnovšie objekty, takže zostáva plynulý aj na veľkom výkrese. Vypnete ho v {{ui:Nastavenia}} › {{ui:CadCraft}} alebo príkazom {{cmd:AUTOCOMPLETE}} `Off`.
- **Ďalší bod pri kreslení čiary.** Uprostred {{cmd:LINE}} alebo {{cmd:PLINE}} je duch ďalším bodom: ďalší krok schodu, štvrtý roh obdĺžnika alebo bod, ktorý ho uzavrie. Priblížte kurzor k nemu a stlačte {{key:Tab}}, ako keby ste tam klikli.
- **Perom kreslené náčrty sa menia na presnú geometriu.** {{cmd:SKETCHFIX}}: kreslite hrubé ťahy perom, myšou alebo prstom a každý sa stane čistou čiarou, kružnicou, oblúkom, obdĺžnikom alebo lomenou čiarou, zarovnanou a spojenou s ostatnými. Pozrite [Kreslenie perom a získanie presnej geometrie](topic:sketch-with-a-pen).
- **Fotografia náčrtu sa stane výkresom.** {{cmd:PHOTOSKETCH}} (`PSK`) nájde papier na fotografii, narovná perspektívu, použije formát papiera a mierku, ktoré zadáte, a prenesie perové čiary na hladinu pre každú farbu pera. Písmená sa neprenášajú.
- **Kótovanie podľa pravidiel.** {{cmd:AUTODIM}} (`ADIM`) vytvára reťazce kót pozdĺž strán, ktoré vyberiete, celkový rozmer, šírky otvorov, priemery otvorov a s `Grid` rozstupy mriežky. Nikdy nezopakuje kótu, ktorá už existuje.
- **Posuňte čiaru mriežky a súbor ju nasleduje.** {{cmd:GRIDMOVE}} (`GM`): múry, ktoré končia na čiare mriežky, sa natiahnu spolu s ňou, múry pozdĺž nej, stĺpy, jej bublina a značka sa posunú, kóty na nej merajú nový rozstup. Jeden krok späť.

**Listy, detaily a značky**

- **Listy, ktoré sa usporiadajú samy.** {{cmd:AUTOSHEET}} vezme vaše pomenované pohľady (alebo samostatné časti modelu), vyberie formát papiera a štandardnú mierku a umiestni pohľady na nové listy s popisovým poľom a popiskom (názov a mierka). Všetko zostáva upraviteľné. Pozrite [Usporiadanie listov za mňa](topic:lay-out-sheets-for-me).
- **Detaily vašej firmy ponúkané pri kreslení.** {{cmd:DETAILS}} (`DET`) uchováva vaše vlastné detailové bloky. Keď sa to, čo vyberiete, zhoduje s niektorým z nich podľa slov na hladinách, názvoch blokov a poznámkach, stavový riadok to oznámi; vyberte ho a umiestnite. {{cmd:DETAILS}} › Zdieľať dá váš zoznam do priečinka Dokumenty a prinesie to, čo váš tím pridal. Nastavenia tieto ponuky vypnú.
- **Značky na blokoch.** {{cmd:TAGS}} definuje značku (jej druh, hodnoty, ktoré môže mať, bloky, na ktoré sa vzťahuje), nastaví ju na vybrané referencie blokov a vypíše ich ako tabuľku, ktorú môžete uložiť ako CSV. Definície sa uchovávajú v DWG. Pozrite [Značky](topic:tags).
- **Hranice výkresu.** {{cmd:LIMITS}} nastaví obdĺžnik pre výkres: mriežka ho vyplní a zoom Všetko ho zobrazí. Hranice sa zobrazujú ako obrys a ukladajú sa do DWG a DXF spolu s hranicami papiera. Pozrite [Nastavenie hraníc výkresu](topic:drawing-limits).

**Spolupráca s ľuďmi a inými programami**

- **Pripomienka sa stane revíziou.** {{cmd:REDLINE}} načíta balík, ktorý zapisuje MarkupCraft, a vypíše každú zmenu. Každú prijmete alebo zamietnete s poznámkou; prijaté dostanú revizný oblak a revízny záznam v jednom kroku späť a uložíte súbor odpovedí, ktorý uzavrie pripomienky v MarkupCraft. Pozrite [Premena pripomienky na revíziu](topic:redline-to-revision).
- **Výkresy, ktoré git a Fossil dokážu zlúčiť.** Keď je {{ui:Súbory vhodné na zlúčenie}} zapnuté v {{ui:Nastavenia}} › {{ui:CadCraft}}, každý objekt dostane kľúč, ktorý sa nikdy nemení (súbory sú asi o 10 percent väčšie). `cadcraft merge base ours theirs` potom zlúči úpravy dvoch ľudí v jednom DWG alebo DXF po objektoch a ohlási iba miesta, kde dvaja zmenili to isté. Pozrite [Zlúčenie úprav dvoch ľudí na jednom výkrese](topic:merge-drawings).
- **Čo sa zmenilo, slovami.** V {{ui:História}} dáva {{ui:Porovnať}} jednoduchý zoznam: kde sa veci zmenili, aké veľké sú tieto miesta, čo bolo pridané, odstránené alebo zmenené a text, ktorý sa upravil. Pozrite [Povedať slovami, čo sa zmenilo](topic:changes-in-words).
- **Azimuty a uhly.** Zadajte smer ako geodetický azimut, napríklad N45°23'30"E, alebo v stupňoch, minútach a sekundách, kdekoľvek sa pýta uhol; AUNITS nastaví zobrazovanie uhlov. Pozrite [Zadávanie a zobrazovanie azimutov a uhlov](topic:bearings-and-angles).
- **Vlastné písma SHX.** Dajte CadCraftu priečinok písiem SHX a textové štýly, ktoré ich menujú, sa kreslia v nich, na obrazovke aj vo výstupoch. Pozrite [Kreslenie textu vo vlastných písmach SHX](topic:shx-fonts).
- **Diagram z textu.** {{cmd:DIAGRAM}} načíta vývojový diagram Mermaid, komponentový diagram PlantUML, D2 alebo zoznam od–do a nakreslí bloky a spojnice, ktoré môžete upraviť. Pozrite [Kreslenie diagramu z textu](topic:text-to-diagram).
- **Objekty OLE v DWG.** {{cmd:OLELIST}} vypíše objekty OLE, ktoré DWG nesie a ktoré CadCraft sám neumiestni, a umiestni kópiu obrázka tam, kde poviete. Pozrite [Obrázky](topic:pictures#objects-from-other-programs-ole).
- **Vaše výpočty ostávajú s výkresom.** Výpočtové listy a dôvody návrhu sa uchovávajú v DWG spolu s tabuľkou tried.

**Kreslenie bez zraku**

- Zapnite {{ui:Kreslenie bez zraku}} v {{ui:Nastavenia}} (alebo napíšte {{cmd:ACCESS}} a odpovedzte `On`). CadCraft hovorí každý príkaz a výsledok cez vašu čítačku obrazovky, opisuje výkres a to, čo je pri kurzore, dovoľuje posúvať kurzor a vyberať body klávesnicou a prehrá zvuk pre každé uchopenie a úchyt. Tam, kde váš prehliadač rozpoznáva reč na vašom počítači, dajú sa príkazy hovoriť. Pozrite [Kreslenie bez zraku](topic:draft-without-sight).

**Vo všetkých aplikáciách**

- **Jazyky.** 54 jazykov; desať je nových (litovčina, lotyština, bosniansky, maráthí, telugu, albánčina, afrikánčina, filipínčina, svahilčina, uzbečtina). Jazyky okrem angličtiny sú strojové koncepty, kým ich nepreče rodený hovoriaci.
- **Vstupné zariadenia.** Touchpad, pero, 3D myš, herný ovládač a ovládanie MIDI.
- **Panely nástrojov a mriežka vlastností.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka Zalomiť, 2 riadky alebo 1 riadok v ostatných aplikáciách. CadCraft má vlastné nastavenie v {{ui:Nastavenia}} › {{ui:CadCraft}} (pozrite [Riadky panela nástrojov](topic:settings#toolbar-rows)). Spoločná mriežka vlastností je v troch iných aplikáciách, nie v CadCraftu.
- **Problémy, Naživo a doplnky.** Spoločný panel Problémy, ktorý varuje vo všetkých aplikáciách, zobrazenie Naživo, ktoré ukazuje, kto je kde v CadCraft Studiu (pozrite [Práca na jednom výkrese spoločne](topic:work-live)), a zoznam doplnkov.
- **Pripojte svoju AI.** Jedno pripojenie z CadCraft Studia ku všetkým ôsmim aplikáciám, s úrovňou len na čítanie, navrhovanie alebo úpravu pre každú aplikáciu a zrozumiteľný záznam toho, čo asistent urobil. CadCraft nemá vlastnú AI a Opýtať sa vo všetkých aplikáciách používa AI, ktorú pripojíte.

### Opravené vo verzii 0.8.1

- **Vlastnosti ukazovali 150 namiesto 12'-6"** vo výkresoch so stopami a palcami. Polia, ktoré aplikácia číta sama, znova zachovajú svoj text.
- **Súbory DWG, ktorých sekcia tried bola čítaná ako nesprávny typ** (GitHub cadcraft#5), sa teraz otvárajú správne.
- **Kurzor sa už nezobrazuje za vyskakovacími oknami.**
- **Studio a balené vydania môžu prepnúť jazyk za behu.** Predtým boli iba v angličtine. Ešte nebolo otestované na každej platforme: dajte nám vedieť, ak sa jazyk nezmení.
- **Tablety na výšku** dávajú voľnú výšku mriežky plátnu a režim listov začína pri 760 px alebo menej.
- **STRETCH s pretínajúcim sa oknom a LIMITS** boli nahlásené v Studiu 0.8.0, ale vo webovom zostavení 0.8 už boli správne; inštalátor nahlasovateľa bol starší. Studio 0.8.1 ich obsahuje.

### Ešte nie je v tejto verzii

- **0.8 a 0.8.1 nie sú podpísané kódom.** Windows môže varovať (zvoľte {{ui:Viac informácií}}, potom {{ui:Napriek tomu spustiť}}); na Macu kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. Zostavenia pre obchody sú pozastavené a zostavenie pre iPad a iPhone nebolo prebudované pre 0.8.1.
- **Náčrty perom a fotografie náčrtov** boli vyskúšané iba na vymyslených fotografiách a myši, zatiaľ nie so skutočným perom, dotykovou obrazovkou alebo ručným náčrtom na papieri.
- **Kreslenie bez zraku** bolo testované automatickými kontrolami, zatiaľ nie čítačkou obrazovky alebo slepým testerom.
- **Zdieľanie detailov** nemalo kontrolu dvoma ľuďmi a priečinok Team Cloud Plan ako priečinok Dokumenty nie je hotový.
- **Zlučovanie** funguje pre súbory DWG a DXF CadCraftu; pre súbory ostatných aplikácií nie je hotové.
- **Späť naprieč oknami:** CadCraft hlási každý dokončený krok, ale Studio zatiaľ nemá jedno spoločné Späť pre všetky aplikácie; každá aplikácia vracia späť svoje vlastné kroky.
- **OLE objekty v DWG** sa uchovávajú, ale nekreslia na svojom mieste.
- **Čítanie tabuliek štýlov vykreslenia** (súbory CTB) z iných programov je hotové, ale nebolo overené na súbore z iného programu.
- **Pripojte svoju AI:** jednoklikové pripojenie v Studiu, hostovaný konektor pre AI v prehliadači, váš vlastný API kľúč v Studiu a publikovaný balík MCP nie sú v tomto vydaní sľúbené.

Pre verziu pred touto pozrite [Čo je nové vo verzii 0.7](topic:whats-new-0-7).

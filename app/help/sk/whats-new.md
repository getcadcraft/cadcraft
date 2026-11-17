---
title: Čo je nové vo verzii 0.9
summary: Šrafovania, ktoré nasledujú svoju hranicu, skupiny hladín, poschodia nad sebou, 2D inteligentné múry s dverami a oknami, štýly textu a editor formátovaného textu, plávajúci riadok príkazov, prichytávanie na mriežku, desať spôsobov kreslenia oblúka a panel Dokumenty.
keywords: čo je nové, 0.9, poznámky k vydaniu, changelog, šrafovanie, asociatívne šrafovanie, hatchedit, súbor pat, súbor vzorov, skupiny hladín, laygroup, podlažia, poschodia nad sebou, floorlayers, inteligentné múry, múr, dvere, okno, nástroje múrov, štýl textu, štýl, editor mtext, odsekový text, formátovanie, plávajúci riadok príkazov, riadok príkazov, horná oblasť, kompaktná, prichytávanie na mriežku, f9, oblúk, panel dokumentov, check out, oceľové profily UK, draw.io, thajský text, dxf r12, zmeny, 0.8, 0.8.1, verzia, nové funkcie, automatické dopĺňanie, duch, tab, sketchfix, photosketch, autosheet, detaily, gridmove, autodim, značky, redline, zlúčenie, git, fossil, access, kreslenie bez zraku, čítačka obrazovky, limity, azimuty, aunits, shx, diagram, ole, história, porovnanie, slovami, vlastnosti, stopy a palce, natiahnutie, jazyky, vstupné zariadenia, problémy, naživo, asistenti
from: 8b6dea0b
---

Toto sa zmenilo v CadCraft 0.9 oproti 0.8.1. CadCraft je aplikácia na 2D a 3D kreslenie v CadCraft Studio 0.9 a jeho ôsmich aplikáciách. Verzia 0.9 dokončuje kreslenie pôdorysov, pridáva štýly textu a skutočný editor textu a dáva vám viac priestoru na obrazovke.

## Novinky

### Kreslenie pôdorysov

- **Šrafovania, ktoré nasledujú svoju hranicu.** {{cmd:HATCH}} sa prepojí s tým, čo ju ohraničuje. Posuňte, otočte alebo zmeňte mierku hranice a šrafovanie aj jeho vzor ju nasledujú; zmeňte jej tvar a šrafovanie sa vypočíta nanovo. {{cmd:HATCHEDIT}} (`HE`) upraví šrafovanie dodatočne a vytvorí alebo ukončí prepojenie. Pozri [Šrafovanie a vyplnené plochy](topic:hatch).
- **Súbory vzorov šrafovania.** Pri otázke {{cmd:HATCH}} `Zadajte vnútorný bod` napíšte `F` (Súbor vzorov) a zvoľte súbor `.pat`. Vyskúšané boli iba súbory zapísané v obvyklom formáte.
- **Skupiny hladín.** V {{ui:Nástroje}} na paneli {{ui:Hladiny}}: {{ui:Nová skupina}}, {{ui:Pridať hotové skupiny}}, {{ui:Zoskupiť podľa názvu}} a {{ui:Nájsť hladinu}}; alebo napíšte {{cmd:LAYGROUP}} (`LG`). Pozri [Usporiadanie výkresu hladinami](topic:layers#group-layers).
- **Poschodia nad sebou.** {{cmd:FLOORS}} (`FLR`), alebo {{ui:Podlažia…}} v ponuke {{ui:Viac}} skupiny {{ui:Pohľad}}. Výrez na liste môže zobraziť jedno poschodie pod {{ui:Zobrazené podlažie}} vo {{ui:Vlastnosti}}. {{cmd:FLOORLAYERS}} premení poschodia na hladiny pre súbor, ktorý ide niekomu inému. Pozri [Poschodia nad sebou v jednom výkrese](topic:floors).
- **2D inteligentné múry, dvere a okná.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) a {{cmd:DELOPENING}}. Rohy, T spojenia a križovania sa vypočítajú za vás. Múry si uchovávajú záznam o tom, ako sa spájajú, a vo {{ui:Vlastnosti}} pribudnú {{ui:Nepovoliť spojenie na začiatku}} / {{ui:Nepovoliť spojenie na konci}}, {{ui:Čiara umiestnenia}} a upraviteľná {{ui:Dĺžka}}. Pozri [Kreslenie 2D múrov, dverí a okien](topic:walls-2d).
- **Nástroje múrov pre pôdorysné múry.** Napíšte {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} a ostatné. Zatiaľ nemajú tlačidlá na paneli nástrojov. Pozri [Tvary, rezy, odsadenia a zámky 2D múrov](topic:wall-tools-2d).

### Text

- **Štýly textu.** {{cmd:STYLE}} (`ST`), alebo {{ui:Textový štýl}} na paneli {{ui:Kreslenie}}: pomenované štýly s písmom, výškou, koeficientom šírky a sklonom. Pozri [Nastavenie písma a veľkosti textu pomocou štýlov textu](topic:text-styles).
- **Editor formátovaného odsekového textu.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} alebo dvojitý klik na text otvorí okno s písmom, veľkosťou, tučným, kurzívou, podčiarknutím, prečiarknutím, farbou, zarovnaním a znakmi stupňa, plus-mínus a priemeru, a tlačidlami {{ui:OK}} a {{ui:Zrušiť}}. Pozri [Formátovanie odsekového textu](topic:format-paragraph-text).
- **Diagram z XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) číta aj vložený XML draw.io. Pozri [Kreslenie diagramu z textu](topic:text-to-diagram).
- **Thajský text vo vykreslení PDF.** Predtým sa tlačil ako otázniky.

### Viac miesta a pomôcky pri kreslení

- **Plávajúci, tenší riadok príkazov a kompaktná horná oblasť.** Potiahnite úchyt riadka príkazov, aby plával, potiahnite jeho horný okraj pre menej riadkov, {{key:F2}} otvorí históriu. {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Riadok príkazov}} a voľby hornej oblasti majú rovnaké nastavenia. Pozri [Nastavenia](topic:settings#command-line).
- **Ponuka uchopenia objektov.** Kliknite pravým tlačidlom na {{ui:Uchopenie}} na stavovom riadku alebo napíšte {{cmd:OSNAP}}.
- **Prichytávanie na mriežku.** Tlačidlo {{ui:Prichytávanie na mriežku}} na stavovom riadku alebo {{key:F9}}: vybrané body idú na najbližší bod mriežky, keď uchopenie objektu bod nezachytilo.
- **Oblúk desiatimi spôsobmi a Pokračovať.** {{ui:Oblúk}} na paneli {{ui:Kreslenie}} alebo {{cmd:ARC}}: 3 body, skupina Začiatok/Stred/Koniec a skupina Stred/Začiatok/Koniec a Pokračovať (stlačte {{key:Enter}} v začiatočnom bode) od poslednej úsečky, oblúka alebo lomenej čiary.
- **Panel Dokumenty.** {{cmd:DOCUMENTS}} (`DOCS`) alebo {{ui:Dokumenty…}} v ponuke {{ui:Viac}} skupiny {{ui:Pohľad}}: revízia, stav a vyčlenenie (check out) pre každý výkres v priečinku projektu. Otvorí sa ako vycentrované dialógové okno. Pozri [Dokumenty](topic:documents).

### Súbory

- **Britské oceľové profily.** 976 prierezov v paneli Standard, zadávané tak, ako sú na výkresoch (napríklad `305x165x40 UB`).
- **Juhoafrické balíčky** (prax kreslenia a stavebné predpisy) ako balíčky doplnku Stavebné predpisy. Čísla nie sú overené.
- **Doplnky pre CadCraft,** pridávané na požiadanie a predvolene vypnuté: návrh vnútorného osvetlenia, návrh čipov (HDL do rozloženia), frézovanie, simulácia obvodov, reťazové kolesá a balíčky stavebných predpisov pre krajiny.

## Opravené

- Posun, otočenie alebo zmena mierky šrafovania nechávali jeho vzor na pôvodnom mieste.
- {{cmd:GRIDMOVE}} unášal celý pôdorysný múr, ktorý sa začínal iba na osi mriežky. Múr sa teraz posudzuje podľa svojich koncov.
- Mriežka sa zobrazovala iba vnútri limitov výkresu, aj keď boli limity vypnuté.
- Zoznam blokov v bočnom paneli sa posúva a názov, ktorý nie je blokom, vypíše bloky, ktoré sa tak začínajú („Mysleli ste“).
- Súbory DXF R12, ktoré AutoCAD odmietol („Unknown group 1001 for table“), sa tam teraz otvárajú.
- Veľmi veľké súbory (približne 70 000 entít a viac) sa neotvárali s chybou „Maximum call stack size exceeded“.
- Súbory DWG z AutoCAD 2018 a novšie s vysokou verziou údržby sa neotvárali s chybou „bad BITLONG code 11“.
- V okne odsekového textu nová veľkosť zadaná pre vybranú časť zachová výber.

## Vo všetkých aplikáciách

Bublinové nápovedy Bootstrap pri každom ovládacom prvku s tipom, úvodný tip, ktorý môžete zavrieť, pásy kariet, ktoré sa posúvajú, keď sa nevošli, a názov karty prehliadača, ktorý nasleduje otvorený výkres (`<drawing> - CadCraft | CadCraft`). {{ui:Nastavenia}} › {{ui:Rozloženie}} je teraz rozbaľovací zoznam dvojriadkových možností. Zoznam jazykov v {{ui:Nastavenia}} je dlhší ako v 0.8. Spoločná úprava naživo, zbierky knižnice a jednotky hmotnosti a teploty sú opísané v poznámkach Studio.

## Úprimné obmedzenia

- Odsekový text nemá odrážky ani číslované zoznamy, pravítko tabulátorov ani zarovnanie do bloku. Vykreslené PDF nastavuje text v písme Helvetica.
- Pôdorysné múry sú rovné, takže oblúk sa kreslí ako krátke múry. Komunitná ručná kontrola nástroja múrov ešte čaká.
- Skupiny hladín sa nezapisujú vo vlastnom formáte AutoCAD, takže AutoCAD zobrazuje plochý zoznam. Iné programy zobrazujú všetky poschodia spolu, pokiaľ nespustíte {{cmd:FLOORLAYERS}}.
- Panel Dokumenty ešte nevyskúšali dvaja ľudia na skutočnej zdieľanej zložke. Frézovanie nebežalo na žiadnom skutočnom stroji. Odhad osvetlenia bol overený voči stope fotónov, nie v inom programe. Inžinierske doplnky sú pomôcky na kontrolu, nie náhrada za posúdenie inžiniera.
- Jazyky iné ako angličtina sú strojové koncepty a niektoré nové slová sú iba v angličtine.

## Staršie: 0.8 a 0.8.1

Toto sa zmenilo v CadCraft 0.8 a 0.8.1 oproti 0.7. Verzia 0.8 (1. novembra 2026) pridáva pomocníkov kreslenia, ktorí pracujú z vášho výkresu, podľa pravidiel na vašom počítači a bez modelu, a verzia 0.8.1 (2. novembra 2026) opravuje chyby nahlásené po nej.

### Novinky

**Kreslenie, ktoré dokončí vašu myšlienku**

- **Duch ukazuje, čo príde.** Keď nebeží žiadny príkaz, sivý prerušovaný duch ukazuje, čo podľa vzorov vášho výkresu príde ďalej: ďalší stĺpik v rovnakom rozstupe, ďalší stupeň schodiska, chýbajúci múr miestnosti. Stlačte {{key:Tab}}, ak ho chcete nakresliť ako jeden krok späť, alebo {{key:Esc}}, aby ste ho zrušili. Pozerá sa iba na najnovšie objekty, takže zostáva plynulý aj na veľkom výkrese. Vypnite ho v {{ui:Nastavenia}} › {{ui:CadCraft}} alebo príkazom {{cmd:AUTOCOMPLETE}} `Off`.
- **Ďalší bod pri kreslení úsečky.** Uprostred {{cmd:LINE}} alebo {{cmd:PLINE}} je duch ďalším bodom: ďalší stupeň schodiska, štvrtý roh obdĺžnika alebo bod, ktorý ho uzavrie. Priblížte kurzor k nemu a stlačte {{key:Tab}}, akoby ste tam klikli.
- **Náčrty perom sa menia na presnú geometriu.** {{cmd:SKETCHFIX}}: nakreslite hrubé ťahy perom, myšou alebo prstom a každý sa zmení na čistú úsečku, kružnicu, oblúk, obdĺžnik alebo lomenú čiaru, prichytenú k tomu, čo je už nakreslené. Pozri [Nakreslite náčrt perom a získajte presnú geometriu](topic:sketch-with-a-pen).
- **Fotografia náčrtu sa mení na výkres.** {{cmd:PHOTOSKETCH}} (`PSK`) nájde papier na fotografii, narovná perspektívu, použije formát papiera a mierku, ktoré zadáte, a prenesie čiary pera na hladinu pre každú farbu pera. Nápisy sa neprenášajú.
- **Kótovanie podľa pravidiel.** {{cmd:AUTODIM}} (`ADIM`) vytvorí reťazce kót pozdĺž strán, ktoré zvolíte, celkový rozmer, šírky otvorov, priemery otvorov a pri `Grid` rozstup mriežky. Nikdy nezopakuje kótu, ktorá už existuje.
- **Posuňte os mriežky a súbor ju nasleduje.** {{cmd:GRIDMOVE}} (`GM`): múry, ktoré končia na osi mriežky, sa natiahnu spolu s ňou, múry pozdĺž nej, stĺpy, jej bublina a označenie sa posunú a kóty na nej merajú nový rozstup. Jeden krok späť.

**Listy, detaily a značky**

- **Listy, ktoré sa rozložia samy.** {{cmd:AUTOSHEET}} vezme vaše pomenované pohľady (alebo samostatné časti modelu), zvolí formát papiera a štandardnú mierku a umiestni pohľady na nové listy s popisovým poľom a popiskom názvu a mierky. Všetko zostáva upraviteľné. Pozri [Rozložte listy za mňa](topic:lay-out-sheets-for-me).
- **Detaily vašej firmy, ponúkané pri kreslení.** {{cmd:DETAILS}} (`DET`) uchováva vaše vlastné detailné bloky. Keď sa výber zhoduje s niektorým podľa slov na jeho hladinách, názvoch blokov a poznámkach, stavový riadok to oznámi; vyberte ho a umiestnite. {{cmd:DETAILS}} › Share uloží váš zoznam do priečinka Dokumenty a prinesie to, čo pridal váš tím. V nastaveniach sa ponuky vypnú.
- **Značky na blokoch.** {{cmd:TAGS}} definuje značku (jej druh, hodnoty, ktoré môže nadobudnúť, bloky, na ktoré sa vzťahuje), nastaví ju na odkazy na bloky, ktoré vyberiete, a vypíše ich ako tabuľku, ktorú môžete uložiť ako CSV. Definície sa uchovávajú v DWG. Pozri [Značky](topic:tags).
- **Limity výkresu.** {{cmd:LIMITS}} nastaví obdĺžnik pre výkres: mriežka ho vyplní a zväčšenie na všetko ho zobrazí. Limity sa zobrazujú ako obrys a ukladajú sa do DWG a DXF spolu s limitmi papiera. Pozri [Nastavenie limitov výkresu](topic:drawing-limits).

**Práca s inými ľuďmi a inými programami**

- **Premeňte poznámku na revíziu.** {{cmd:REDLINE}} načíta balík, ktorý zapisuje MarkupCraft, a vypíše každú zmenu. Každú prijmite alebo odmietnite s poznámkou; prijaté dostanú revízny oblak a revízny záznam v jednom kroku späť a uložíte súbor odpovedí, ktorý uzavrie poznámky v MarkupCraft. Pozri [Premena poznámky na revíziu](topic:redline-to-revision).
- **Výkresy, ktoré môže git a Fossil zlúčiť.** Keď je {{ui:Súbory vhodné na zlúčenie}} zapnuté v {{ui:Nastavenia}} › {{ui:CadCraft}}, každý objekt dostane kľúč, ktorý sa nikdy nemení (súbory sú zhruba o 10 percent väčšie). `cadcraft merge base ours theirs` potom zlúči úpravy dvoch ľudí v jednom objekte DWG alebo DXF objekt po objekte a nahlási iba miesta, kde dvaja zmenili to isté. Pozri [Zlúčenie úprav dvoch ľudí v jednom výkrese](topic:merge-drawings).
- **Čo sa zmenilo, slovami.** V {{ui:História}} dáva Porovnanie jednoduchý zoznam: kde sa veci zmenili, aké veľké sú tie miesta, čo bolo pridané, odstránené alebo zmenené a text, ktorý bol upravený. Pozri [Povedať slovami, čo sa zmenilo](topic:changes-in-words).
- **Azimuty a uhly.** Zadajte smer ako geodetický azimut, napríklad N45°23'30"E, alebo v stupňoch, minútach a sekundách, kdekoľvek sa pýta uhol; AUNITS nastaví, ako sa uhly zobrazujú. Pozri [Zadávanie a zobrazovanie azimutov a uhlov](topic:bearings-and-angles).
- **Vaše vlastné písma SHX.** Dajte CadCraft priečinok písiem SHX a štýly textu, ktoré ich pomenúvajú, sa nimi kreslia na obrazovke aj vo vykresleniach. Pozri [Kreslenie textu vo vlastných písmach SHX](topic:shx-fonts).
- **Diagram z textu.** {{cmd:DIAGRAM}} číta vývojový diagram Mermaid, diagram komponentov PlantUML, D2 alebo zoznam od–do a kreslí bloky a spojnice, ktoré môžete upravovať. Pozri [Kreslenie diagramu z textu](topic:text-to-diagram).
- **Objekty OLE v DWG.** {{cmd:OLELIST}} vypíše objekty OLE, ktoré DWG nesie a ktoré CadCraft sám nevie umiestniť, a umiestni kópiu obrázka tam, kde určíte. Pozri [Obrázky](topic:pictures#objects-from-other-programs-ole).
- **Vaše výpočty zostávajú s výkresom.** Výpočtové listy a dôvody návrhu sa uchovávajú v DWG spolu s tabuľkou tried.

**Kreslenie bez zraku**

- Zapnite {{ui:Kreslenie bez zraku}} v {{ui:Nastavenia}} (alebo napíšte {{cmd:ACCESS}} a odpovedzte `On`). CadCraft hovorí každý príkaz a výsledok cez vašu čítačku obrazovky, opisuje výkres a to, čo je pri kurzore, umožňuje posúvať kurzor a vyberať body klávesnicou a pri každom uchopení a úchyte prehrá zvuk. Tam, kde váš prehliadač na počítači dokáže rozpoznať reč, možno príkazy diktovať. Pozri [Kreslenie bez zraku](topic:draft-without-sight).

**Vo všetkých aplikáciách**

- **Jazyky.** 54 jazykov; desať je nových (litovčina, lotyščina, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina, uzbečtina). Jazyky okrem angličtiny sú strojové koncepty, kým ich neprečíta rodený hovorca.
- **Vstupné zariadenia.** Ovládanie trackpadom, perom, 3D myšou, herným ovládačom a MIDI.
- **Riadky panela nástrojov a mriežka vlastností.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka Zalomiť, 2 riadky alebo 1 riadok v ostatných aplikáciách. CadCraft si uchováva vlastné nastavenie v {{ui:Nastavenia}} › {{ui:CadCraft}} (pozri [Riadky panela nástrojov](topic:settings#toolbar-rows)). Spoločná mriežka vlastností je v troch ďalších aplikáciách, nie v CadCraft.
- **Problémy, Naživo a doplnky.** Spoločný panel Problémy, ktorý upozorňuje vo všetkých aplikáciách, zobrazenie Naživo, ktoré ukazuje, kto je kde v CadCraft Studio (pozri [Práca na jednom výkrese spoločne](topic:work-live)), a zoznam doplnkov.
- **Pripojte svoju AI.** Jedno pripojenie z CadCraft Studio ku všetkým ôsmim aplikáciám, s úrovňou len na čítanie, navrhovanie alebo úpravu pre každú aplikáciu a záznamom v jednoduchých slovách o tom, čo asistent robil. CadCraft nemá vlastnú AI a Opýtať sa vo všetkých aplikáciách používa AI, ktorú pripojíte.

### Opravené v 0.8.1

- **Vlastnosti ukazovali 150 namiesto 12'-6"** vo výkresoch v stopách a palcoch. Polia, ktoré aplikácia číta sama, si opäť zachovávajú svoj text.
- **Súbory DWG, ktorých sekcia tried sa čítala ako nesprávny typ** (GitHub cadcraft#5), sa teraz otvárajú správne.
- **Kríž kurzora sa už nezobrazuje za vyskakovacími oknami.**
- **Studio a zabalené vydania môžu prepínať jazyk za behu.** Predtým boli iba v angličtine. Ešte nie je otestované na každej platforme: dajte nám vedieť, ak sa jazyk nezmení.
- **Tablety na výšku** dávajú voľnú výšku mriežky plátnu a režim listov sa začína pri 760 px alebo menej.
- **STRETCH s prekríženým oknom a LIMITS** boli nahlásené v Studio 0.8.0 a vo webovom zostavení 0.8 už boli správne; inštalátor hlásiteľa bol starší. Studio 0.8.1 ich obsahuje.

### Ešte nie je v tejto verzii

- **0.8 a 0.8.1 nie sú podpísané kódom.** Windows môže upozorniť (zvoľte {{ui:Ďalšie informácie}}, potom {{ui:Spustiť aj tak}}); na Macu kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. Zostavy pre obchody sú pozastavené a zostava pre iPad a iPhone nebola znova zostavená pre 0.8.1.
- **Náčrty perom a fotografie náčrtov** boli vyskúšané iba na vymyslených fotografiách a myši, zatiaľ nie so skutočným perom, dotykovou obrazovkou ani ručným náčrtom na papieri.
- **Kreslenie bez zraku** bolo testované automatickými kontrolami, zatiaľ nie s čítačkou obrazovky alebo nevidiacim testerom.
- **Zdieľanie detailov** nemalo kontrolu dvoma ľuďmi a priečinok Team Cloud Plan ako priečinok Dokumenty nie je hotový.
- **Zlučovanie** funguje pre súbory DWG a DXF z CadCraft; to isté pre súbory ostatných aplikácií ešte nie je hotové.
- **Späť naprieč oknami:** CadCraft hlási každý dokončený krok, ale Studio zatiaľ nemá jedno {{ui:Späť}} pre všetky aplikácie; každá aplikácia vracia späť svoje vlastné kroky.
- **Objekty OLE v DWG** sa zachovávajú, ale nekreslia sa na mieste.
- **Čítanie tabuliek štýlov tlače (súbory CTB)** z iných programov je hotové, ale nebolo overené voči súboru z iného programu.
- **Pripojte svoju AI:** pripojenie jedným kliknutím v Studio, hostovaný konektor pre AI v prehliadači, váš vlastný API kľúč v Studio a zverejnený balík MCP nie sú v tomto vydaní sľúbené.

Pre predchádzajúcu verziu pozri [Čo je nové vo verzii 0.7](topic:whats-new-0-7).

---
title: Novinky vo verzii 0.8 a 0.8.1
summary: Duch, ktorý dokončí váš výkres, náčrty perom a fotografie náčrtov premenené na geometriu, listy, ktoré sa rozložia samy, detaily ponúkané počas kreslenia, GRIDMOVE a AUTODIM, štítky, súbory vhodné na zlúčenie, revízne úpravy premenené na revízie, kreslenie bez zraku, limity výkresu, smery, písma SHX, diagramy z textu a opravy vo verzii 0.8.1.
keywords: novinky, čo je nové, poznámky k vydaniu, changelog, zmeny, 0.8, 0.8.1, verzia, nové funkcie, automatické dopĺňanie, duch, tab, sketchfix, photosketch, autosheet, detaily, gridmove, autodim, štítky, redline, zlúčenie, git, fossil, prístup, kreslenie bez zraku, čítačka obrazovky, limity, smery, aunits, shx, diagram, ole, história, porovnanie, slovami, vlastnosti, stopy a palce, natiahnuť, jazyky, vstupné zariadenia, problémy, naživo, asistenti
from: 9dd82db5
---

Toto sa zmenilo v CadCraft 0.8 a 0.8.1 v porovnaní s verziou 0.7. Verzia 0.8 (1. novembra 2026) pridáva pomocníkov pri kreslení, ktorí pracujú z vášho vlastného výkresu, podľa pravidiel na vašom počítači a bez modelu. Verzia 0.8.1 (2. novembra 2026) opravuje chyby nahlásené po jej vydaní.

## Novinky

### Výkres, ktorý dokončí vašu myšlienku

- **Duch ukáže, čo príde ďalej.** Keď nebeží žiadny príkaz, sivý prerušovaný duch ukazuje, čo podľa vzorov vášho výkresu nasleduje: ďalší stĺpik v rovnakom rozstupe, ďalší stupeň schodiska, chýbajúci múr miestnosti. Stlačte {{key:Tab}}, aby ste ho nakreslili ako jeden krok späť, alebo {{key:Esc}}, aby ste ho zavreli. Pozerá sa len na najnovšie objekty, takže zostáva plynulý aj pri veľkom výkrese. Vypnete ho v {{ui:Nastavenia}} › {{ui:CadCraft}} alebo príkazom {{cmd:AUTOCOMPLETE}} `Off`.
- **Ďalší bod pri kreslení čiary.** Uprostred {{cmd:LINE}} alebo {{cmd:PLINE}} je duch ďalším bodom: ďalší stupeň schodiska, štvrtý roh obdĺžnika alebo bod, ktorý ho uzavrie. Priblížte kurzor k nemu a stlačte {{key:Tab}}, ako keby ste tam klikli.
- **Náčrty perom sa stanú presnou geometriou.** {{cmd:SKETCHFIX}}: nakreslite hrubé ťahy perom, myšou alebo prstom a každý sa stane čistou úsečkou, kružnicou, oblúkom, obdĺžnikom alebo lomenou čiarou, prichytenou k tomu, čo je už nakreslené. Pozrite si [Kreslite perom a získajte presnú geometriu](topic:sketch-with-a-pen).
- **Fotografia náčrtu sa stane výkresom.** {{cmd:PHOTOSKETCH}} (`PSK`) nájde papier na fotografii, narovná perspektívu, použije formát papiera a mierku, ktoré zadáte, a prenesie čiary pera na hladinu pre každú farbu pera. Nápisy sa neprenášajú.
- **Kótujte podľa pravidiel.** {{cmd:AUTODIM}} (`ADIM`) vytvára reťazce kót pozdĺž strán, ktoré vyberiete, celkový rozmer, šírky otvorov, priemery otvorov a pri `Grid` aj rozstup mriežky. Nikdy nezopakuje kótu, ktorá už existuje.
- **Posuňte os mriežky a súbor ju nasleduje.** {{cmd:GRIDMOVE}} (`GM`): steny, ktoré končia na osi mriežky, sa na ňu natiahnu, steny pozdĺž nej, stĺpy, jej bublina a označenie sa presunú a kóty na nej merajú nový rozstup. Jeden krok späť.

### Listy, detaily a štítky

- **Listy, ktoré sa rozložia samy.** {{cmd:AUTOSHEET}} vezme vaše pomenované pohľady (alebo samostatné časti modelu), vyberie formát papiera a štandardnú mierku a umiestni pohľady na nové listy s popisovým poľom a popisom názvu a mierky. Všetko zostane upraviteľné. Pozrite si [Rozložte listy za mňa](topic:lay-out-sheets-for-me).
- **Detaily vašej firmy ponúkané počas kreslenia.** {{cmd:DETAILS}} (`DET`) uchováva vaše vlastné detailné bloky. Keď sa to, čo vyberiete, zhoduje s niektorým z nich podľa slov na jeho vrstvách, názvoch blokov a poznámkach, stavový riadok to oznámi; vyberte ho a umiestnite. {{cmd:DETAILS}} › Zdieľať uloží váš zoznam do priečinka Dokumenty a prinesie to, čo pridal váš tím. V nastaveniach sa ponuky vypnú.
- **Štítky na blokoch.** {{cmd:TAGS}} definuje štítok (jeho druh, hodnoty, ktoré môže nadobudnúť, bloky, na ktoré sa vzťahuje), nastaví ho na odkazy na bloky, ktoré vyberiete, a vypíše ich ako tabuľku, ktorú môžete uložiť ako CSV. Definície sa uchovávajú v DWG. Pozrite si [Štítky](topic:tags).
- **Hranice výkresu.** {{cmd:LIMITS}} nastaví obdĺžnik pre výkres: mriežka ho vyplní a zoom Všetko ho ukáže. Hranice sa zobrazia ako obrys a ukladajú sa do DWG aj DXF spolu s hranicami papiera. Pozrite si [Nastavte hranice výkresu](topic:drawing-limits).

### Práca s ostatnými ľuďmi a inými programami

- **Premeňte poznámku na revíziu.** {{cmd:REDLINE}} načíta balík, ktorý zapíše MarkupCraft, a vypíše každú zmenu. Každú prijmite alebo zamietnite s poznámkou. Prijaté dostanú revízny oblak a revízny záznam v jednom kroku späť a uložíte súbor odpovedí, ktorý uzavrie poznámky v MarkupCraft. Pozrite si [Premena poznámky na revíziu](topic:redline-to-revision).
- **Výkresy, ktoré git a Fossil dokážu zlúčiť.** Keď je {{ui:Súbory vhodné na zlúčenie}} zapnuté v {{ui:Nastavenia}} › {{ui:CadCraft}}, každý objekt dostane kľúč, ktorý sa nikdy nemení (súbory sú asi o 10 percent väčšie). `cadcraft merge base ours theirs` potom zlúči úpravy dvoch ľudí v jednom objekte DWG alebo DXF po objektoch a ohlási len miesta, kde dvaja zmenili to isté. Pozrite si [Zlúčte úpravy dvoch ľudí v jednom výkrese](topic:merge-drawings).
- **Čo sa zmenilo, slovami.** V histórii dá Porovnať prehľadný zoznam: kde sa veci zmenili, aké veľké sú tieto miesta, čo bolo pridané, odstránené alebo zmenené a text, ktorý sa upravoval. Pozrite si [Povedzte slovami, čo sa zmenilo](topic:changes-in-words).
- **Smery a uhly.** Zadajte smer ako geodetický azimut, napríklad N45°23'30"E, alebo v stupňoch, minútach a sekundách, kdekoľvek sa pýta uhol. AUNITS nastaví, ako sa uhly zobrazujú. Pozrite si [Zadávanie a zobrazenie smerov a uhlov](topic:bearings-and-angles).
- **Vaše vlastné písma SHX.** Dajte CadCraft priečinok s písmami SHX a štýly textu, ktoré ich pomenúvajú, sa kreslia nimi, na obrazovke aj vo výtlačkoch. Pozrite si [Kreslite text vo vlastných písmach SHX](topic:shx-fonts).
- **Diagram z textu.** {{cmd:DIAGRAM}} načíta vývojový diagram Mermaid, diagram komponentov PlantUML, D2 alebo zoznam od–do a nakreslí bloky a spojnice, ktoré môžete upravovať. Pozrite si [Nakreslite diagram z textu](topic:text-to-diagram).
- **Objekty OLE v DWG.** {{cmd:OLELIST}} vypíše objekty OLE, ktoré DWG obsahuje a CadCraft ich sám nedokáže umiestniť, a umiestni kópiu obrázka tam, kam poviete. Pozrite si [Obrázky](topic:pictures#objects-from-other-programs-ole).
- **Výpočty zostávajú s výkresom.** Výpočtové listy a dôvody návrhu sa uchovávajú v DWG spolu s tabuľkou tried.

### Kreslenie bez zraku

- Zapnite {{ui:Kreslenie bez zraku}} v {{ui:Nastavenia}} (alebo napíšte {{cmd:ACCESS}} a odpovedzte `On`). CadCraft cez čítačku obrazovky ohlasuje každý príkaz a výsledok, opisuje výkres a to, čo je pri kurzore, umožňuje posúvať kurzor a vyberať body klávesnicou a pri každom uchopení a úchopovom bode prehrá zvuk. Ak váš prehliadač na vašom počítači rozpozná reč, dajú sa príkazy vyslovovať. Pozrite si [Kreslite bez zraku](topic:draft-without-sight).

### Vo všetkých aplikáciách

- **Jazyky.** 54 jazykov; desať je nových (litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina, uzbečtina). Jazyky okrem angličtiny sú strojové koncepty, kým ich neprečíta rodený hovoriaci.
- **Vstupné zariadenia.** Touchpad, pero, 3D myš, herný ovládač a ovládanie cez MIDI.
- **Riadky panela nástrojov a mriežka vlastností.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} ponúka Zalamovanie, 2 riadky alebo 1 riadok v ostatných aplikáciách. CadCraft má vlastné nastavenie v {{ui:Nastavenia}} › {{ui:CadCraft}} (pozrite si [Riadky panela nástrojov](topic:settings#toolbar-rows)). Spoločná mriežka vlastností je v troch ďalších aplikáciách, nie v CadCraft.
- **Problémy, Naživo a doplnky.** Spoločný panel Problémy, ktorý varuje vo všetkých aplikáciách, zobrazenie Naživo, ktoré ukazuje, kto je kde v CadCraft Studio (pozrite si [Spoločná práca na jednom výkrese](topic:work-live)), a zoznam doplnkov.
- **Pripojte svoju AI.** Jedno pripojenie z CadCraft Studio ku všetkým ôsmim aplikáciám s úrovňou len na čítanie, navrhovanie alebo úpravy pre každú aplikáciu a zrozumiteľným záznamom o tom, čo asistent urobil. CadCraft nemá vlastnú AI a Opýtať sa vo všetkých aplikáciách používa AI, ktorú pripojíte.

## Opravené vo verzii 0.8.1

- **Vlastnosti ukazovali 150 namiesto 12'-6"** vo výkresoch v stopách a palcoch. Polia, ktoré aplikácia načíta sama, znova zobrazujú svoj text.
- **Súbory DWG, ktorých sekcia tried sa čítala ako nesprávny typ** (GitHub cadcraft#5), sa teraz otvoria správne.
- **Zameriavací kríž sa už nezobrazuje za vyskakovacími oknami.**
- **Studio a zabalené vydania môžu prepnúť jazyk počas behu.** Predtým boli len v angličtine. Ešte netestované na každej platforme: dajte nám vedieť, ak sa jazyk nemení.
- **Tablety na výšku** dávajú plátnu voľnú výšku mriežky a režim listov sa spúšťa pri 760 px alebo menej.
- **STRETCH s prekríženým oknom a LIMITS** boli nahlásené v Studio 0.8.0 a vo webovom zostavení 0.8 už boli správne. Inštalátor toho, kto chybu nahlásil, bol starší. Studio 0.8.1 ich už obsahuje.

## Zatiaľ nie je v tejto verzii

- **Verzie 0.8 a 0.8.1 nie sú podpísané kódom.** Windows môže upozorniť (zvoľte {{ui:Ďalšie informácie}}, potom {{ui:Spustiť aj tak}}). Na Macu kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. Zostavenia pre obchody sú pozastavené a zostavenie pre iPad a iPhone sa pre 0.8.1 ešte nebolo znova zostavené.
- **Pero a fotografie náčrtov** boli skúšané len na vymyslených fotografiách a myši, zatiaľ nie so skutočným perom, dotykovou obrazovkou alebo ručným náčrtom na papieri.
- **Kreslenie bez zraku** bolo testované automatickými kontrolami, zatiaľ nie s čítačkou obrazovky ani s testerom so zrakovým postihnutím.
- **Zdieľanie detailov** nemalo kontrolu dvoma osobami a priečinok Team Cloud Plan ako priečinok Dokumenty ešte nie je hotový.
- **Zlučovanie** funguje pre súbory DWG a DXF v CadCraft. To isté pre súbory ostatných aplikácií ešte nie je hotové.
- **Vrátenie späť naprieč oknami:** CadCraft ohlasuje každý dokončený krok, ale Studio zatiaľ nemá jedno spoločné Späť pre všetky aplikácie. Každá aplikácia vracia späť len svoje kroky.
- **Objekty OLE v DWG** sa zachovávajú, ale nekreslia sa na mieste.
- **Čítanie tabuliek štýlov vykreslenia** (súbory CTB) z iných programov je hotové, ale nebolo overené na súbore z iného programu.
- **Pripojte svoju AI:** pripojenie jedným kliknutím v Studio, hostiteľský konektor pre AI v prehliadači, váš vlastný API kľúč v Studio a zverejnený balík MCP nie sú v tomto vydaní sľúbené.

Pre verziu pred touto pozri [Novinky vo verzii 0.7](topic:whats-new-0-7).

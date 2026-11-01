---
title: Čo je nové vo verzii 0.7
summary: Podklady z PDF a import PDF, skenované výkresy s automatickým obkreslením, skutočné splajny s SPLINE, SPLINEDIT a PEDIT, správca štýlov kót, text, ktorý si zachová formátovanie, WBLOCK a vlastné mierky, 3D telesá z iných programov, registrácia skenov, panel Laser, export USD, História a tlač v CadCraft Studio, prvý výkres s vedením, panel nástrojov na ľubovoľnej strane alebo v menšom počte riadkov a viac pre asistentov s AI.
keywords: čo je nové, novinky, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, pdf, pdfattach, pdfimport, podklad, sken, scanattach, scantrace, obkreslenie, rastrový, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formátovanie, wblock, scalelistedit, zoznam mierok, acis, 3d telesá, registerscans, registrácia skenov, icp, e57, las, laser, grbl, g-kód, usd, usdout, história, verzie, porovnanie, tlač, tlačiareň, png, svg, štýl vykresľovania, typ čiary, prehliadka, zjednodušená príručka, mapa príkazov, poloha panela nástrojov, riadky panela nástrojov, toolbardock, regen, regenall, touchpad, potiahnutie, kódová stránka, cyrilika, kórejčina, čínština, japončina, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, priečinok podpory, asistenti, mcp, jednotky, portugalčina
from: b9258ca6
---

Toto sa zmenilo v CadCraft 0.7 v porovnaní s 0.6. Veľa z toho si ľudia vyžiadali na Discorde. Zoznam je zoradený podľa oblastí, najdôležitejšie je navrchu.

## Nové

### PDF a skenované výkresy

- **Strana PDF pod výkresom.** {{cmd:PDFATTACH}} (`PDFATT`) umiestni stranu v skutočnej veľkosti alebo v mierke, ktorú napíšete. Uchopujte jej čiary, zoslabte ju, urobte ju monochromatickou ({{cmd:PDFADJUST}}), orežte ju ({{cmd:PDFCLIP}}) a prepínajte vlastné hladiny PDF ({{cmd:PDFLAYERS}}). Vykresľuje sa ako čiary, výplne a text a DWG alebo DXF 2000 ju uchová ako odkaz na súbor. Otvorenie PDF cez {{ui:Otvoriť}} sa opýta, či ho pripojiť alebo importovať. Pozrite [Podklady z PDF a import PDF](topic:pdf-underlay).
- **Strana PDF na objekty výkresu.** {{cmd:PDFIMPORT}} (`PDFIM`) vytvorí úsečky, lomené čiary, kružnice, oblúky, plné šráfovania a text na hladinách pomenovaných podľa PDF, v skutočnej veľkosti, v mierke, ktorú napíšete, alebo v mierke zo dvoch bodov a skutočnej vzdialenosti, v jednom kroku späť. Pozrite [Import strany](topic:pdf-underlay#import-a-page).
- **Skenované výkresy.** {{cmd:SCANATTACH}} vloží PNG, JPEG alebo TIFF (jednu stranu alebo všetky) alebo stranu PDF, ktorá je obrázok. Potom ho nastavte v mierke zo dvoch bodov ({{cmd:SCANSCALE}}), zarovnajte ({{cmd:SCANALIGN}}), vyrovnajte podľa jeho vlastných dlhých čiar ({{cmd:SCANDESKEW}}), urobte ho čiernobielym a odstráňte šum ({{cmd:SCANCLEAN}}), orežte ho a zmažte jeho časti. Každý krok je jeden krok späť a pôvodný súbor sa zachová. Pozrite [Skenované výkresy a obkreslenie](topic:scanned-drawings).
- **Obkreslenie skenu na úsečky a oblúky.** {{cmd:SCANTRACE}} nakreslí čiary skenu ako úsečky a oblúky na novej hladine SCAN-TRACE s toleranciou, ktorú nastavíte, a text a šráfovanie nechá tak, ako sú. Správa uvádza, čo vytvoril a čo nechal, a nie je tvrdením, že výsledok je správny: porovnajte ho s listom. {{cmd:RASTERSNAP}} umožní uchopeniam objektov nájsť konce, rohy a priesečníky skenu. Nič sa nikam neposiela a nepoužíva sa žiadny trénovaný model. Pozrite [Obkreslenie](topic:scanned-drawings#the-trace).

### Kreslenie a úpravy

- **Skutočné splajny.** {{cmd:SPLINE}} (`SPL`) nakreslí krivku cez body alebo z riadiacich bodov (stupeň 1 až 5) so smernicami na koncoch; {{cmd:SPLINEDIT}} (`SPE`) presúva, pridáva a maže preložené alebo riadiace body, nastavuje váhy, otvára, uzatvára, obracia alebo mení splajn na lomenú čiaru. Splajny z DWG a DXF sa otvoria ako splajny a DWG a DXF 2000 ich ukladajú ako splajny. Pozrite [Splajny a lomené čiary](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) uzatvára a otvára lomené čiary, pripája k nim úsečky a oblúky, nastavuje jednu šírku, preloží krivku cez vrcholy alebo splajn pozdĺž nich a vráti ju späť pomocou Decurve, obracia a upravuje viacero naraz. Pozrite [Úprava lomenej čiary](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapíše blok, niektoré objekty alebo celý výkres do nového DWG alebo DXF, ktorý obsahuje iba hladiny, štýly a bloky, ktoré používajú. Pozrite [Zápis bloku alebo objektov do samostatného súboru](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN a REGENALL.** {{cmd:REGEN}} (`RE`) prekreslí kartu, na ktorej ste, z výkresu, {{cmd:REGENALL}} (`REA`) každú kartu, tabuľu a otvorený výkres. Pozrite [REGEN a REGENALL](topic:commands#regen-and-regenall).

### Text a kóty

- **Text si zachová formátovanie.** Text v odsekoch z iných programov si zachová farby po slovách, tučné písmo a kurzívu, podčiarknutie, zložené zlomky a výšky: kreslia sa na obrazovke aj v PDF, zachovajú sa pri úprave slov a uložia sa späť. Pozrite [Formátovanie vnútri textu v odsekoch z iných programov](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Správca štýlov kót.** {{cmd:DIMSTYLE}} (`D`) vytvára, mení, porovnáva a používa pomenované štýly kót; zmena štýlu zmení každú kótu, ktorá ho používa. {{cmd:DIMEDIT}} (`DED`) vráti text na pôvodné miesto, zadá nový text, otočí ho alebo naklonia vynášacie čiary; {{cmd:DIMTEDIT}} presunie text doľava, doprava alebo do stredu. Pozrite [Pomenované štýly kót](topic:dimension-settings#named-dimension-styles).
- **Vlastné mierky.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) pridá mierky, napríklad 1:75, do zoznamov mierok výrezov a vykresľovania; uložia sa vo výkrese (DWG a DXF 2000) a výkres z iného programu prinesie svoj vlastný zoznam. Pozrite [Mierky](topic:units-papers-scales#scales).
- **Text v iných písmach.** Súbory DXF uložené v cyrilických, kórejských, čínskych, japonských alebo vietnamských kódových stránkach sa teraz otvoria so svojím textom a čínsky, japonský a kórejský text sa tlačí v PDF (vykreslenie si prvýkrát, keď to potrebuje, stiahne väčšie písmo). Pozrite [Písmo](topic:text#font).

### Vykresľovanie a tlač

- **Viac v tabuľkách štýlov vykresľovania.** Pre každú farbu teraz tabuľka môže nastaviť aj typ čiary, ukončenie a spojenie čiar a štýl výplne, ktorý plné výplne tlačí ako šráfovacie čiary; tabuľka má vlastný zoznam hrúbok čiar a mierku typu čiary. Pozrite [Tabuľky štýlov vykresľovania](topic:plot-pdf#plot-style-tables).
- **Tlač a súbory PNG a SVG.** Dialógové okno Vykreslenie obsahuje {{ui:Tlačiť…}}, {{ui:Stiahnuť PNG}} (300 dpi) a {{ui:Stiahnuť SVG}}. V CadCraft Studio zobrazí tlačiarne počítača, ich papier a počet kópií. Pozrite [Tlač](topic:plot-pdf#print) a [Súbory s obrázkom a SVG](topic:plot-pdf#picture-and-svg-files).

### 3D a mračná bodov

- **3D telesá z iných programov.** Telesá, oblasti a objemové objekty v priestore modelu výkresu sa zobrazia na karte 3D iba na čítanie a uloženie ako DWG ich zapíše späť nezmenené. Plochy na povrchoch, ktoré CadCraft zatiaľ nekreslí, sú vypísané, nie odhadnuté. Pozrite [Telesá z iných programov](topic:3d-solids#solids-from-other-programs).
- **Registrácia viacerých skenov.** {{cmd:REGISTERSCANS}} (`REGSCAN`) umiestni skeny zachytené z rôznych pozícií do jedného rámca, podľa dvojíc bodov alebo napísaných súradníc značiek, spresní ich pomocou ICP, uloží registráciu do malého súboru projektu a zapíše registrované mračno ako jeden súbor LAS alebo E57. Pozrite [Registrácia viacerých skenov do jedného](topic:register-scans).
- **Export USD.** {{cmd:USDOUT}} alebo {{cmd:EXPORT3D}} › {{ui:USD}} zapíše telesá z karty 3D ako `.usda`, `.usdc` alebo `.usdz`. Pozrite [Export 3D modelu ako USD](topic:usd).
- **Výpočty na karte 3D.** Všade, kde nástroje karty 3D žiadajú vzdialenosť, môžete napísať výpočet, ako na príkazovom riadku. Pozrite [Aritmetika v zadanej hodnote](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Výroba

- **Odoslanie výkresu na laser.** {{cmd:LASER}} alebo {{ui:Zobrazenie}} › {{ui:Viac}} › {{ui:Laser…}} otvorí nad výkresom panel: každá hladina reže, rysuje, gravíruje čiary, vypĺňa tvary, gravíruje obrázok alebo sa neposiela, s výkonom, rýchlosťou a počtom prechodov. Ukážka sleduje vaše úpravy, {{ui:Uložiť G-kód…}} zapíše G-kód režimu laseru GRBL a v Chrome alebo Edge môže panel obrysovať úlohu a odoslať ju cez USB. Nastavenia sa uložia vo výkrese (DWG a DXF). Pozrite [Odoslanie výkresu na laser](topic:laser-cutting).
- **Symboly inštalácií v budove v doplnku Elektro.** Dátové, telefónne a TV zásuvky, tlačidlové a časové spínače, termostat, núdzové osvetlenie, detektory, tlačidlový hlásič a siréna, ventilátor, ohrievač vody, sporák, nabíjací bod pre elektromobil, merač energie a podružný rozvádzač a symboly RCD a RCBO. Obvod môže mať RCD, výkaz rozvádzača má stĺpec RCD a kontroly uvádzajú zásuvkové obvody bez RCD s prúdom do 30 mA. Je to plánovacia pripomienka, nie kontrola podľa predpisov.
- **Doplnok P&ID.** P&ID kreslí procesné schémy: symboly s bodmi pripojenia, procesné a signálové čiary, značky, čísla vedení, zoznamy vedení, zariadení, prístrojov a armatúr (CSV alebo zošit) a kontroly. Dodáva sa s CadCraft a je vypnutý, kým ho nezapnete v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Doplnky}}. Je to pomôcka pri kreslení, nie inžiniersky súhlas, a jeho slová sú zatiaľ iba po anglicky.

### Začíname a obrazovka

- **Prvý výkres s vedením.** {{cmd:TOUR}} (alebo {{ui:Absolvovať prehliadku}} na úvodnej karte) vás prevedie šiestimi krokmi v skutočnom výkrese: úsečka, kružnica, presun, orezanie, zmazanie a kóta. Sám sa spustí prvýkrát, keď sa CadCraft otvorí bez obsahu. Pozrite [Radšej s vedením?](topic:getting-started#prefer-to-be-guided)
- **Zjednodušená príručka a mapa príkazov.** [Zjednodušená príručka](topic:cheat-sheet) obsahuje 40 bežných príkazov na jednej strane, aj ako PDF na tlač, a [mapa príkazov](topic:command-map) uvádza príkazy s ich krátkymi názvami od A po Z.
- **Panel nástrojov na ľubovoľnej strane.** {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Poloha panela nástrojov}}: hore (ako predtým), dole, vľavo alebo vpravo, alebo napíšte {{cmd:TOOLBARDOCK}}. Pozrite [Poloha panela nástrojov](topic:settings#toolbar-position).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Riadky panela nástrojov}}: zalomiť podľa šírky, 2 riadky alebo 1 riadok, pre panel nástrojov CadCraft a štýly Klasické kreslenie a Pás kariet. {{key:Shift+Ctrl+F1}} ich prepína, {{key:Ctrl+F1}} prepína, čo tlačidlá zobrazujú, a {{cmd:TOOLBARROWS}} a {{cmd:TOOLBAR}} ich nastavujú. Úvodná nápoveda má tlačidlo zavrieť. Vďaka GJoe2, ktorý to poslal ako pull request. Pozrite [Riadky panela nástrojov](topic:settings#toolbar-rows).

### V CadCraft Studio

- **História.** {{cmd:HISTORY}} (`HIST`) alebo {{ui:Zobrazenie}} › {{ui:Viac}} › {{ui:História…}}: kópie, ktoré Studio uchováva pri otvorení a uložení výkresu, a cloudové verzie výkresu, ak ste ho otvorili z cloudu. Otvorte alebo obnovte jednu z nich, alebo porovnajte dve, pričom pridané, odstránené a zmenené sa zobrazí farebne. Pozrite [História](topic:history).
- **acad.lsp a acaddoc.lsp.** V {{cmd:APPLOAD}} vyberte priečinok podpory: tieto dva súbory sa načítajú pri spustení CadCraft (acaddoc.lsp znova pre každú novú kartu výkresu) a po nich sa spustí `S::STARTUP`. Pozrite [Načítanie aplikácií](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialógové okno Vykreslenie vo vlastnom okne.** Tlačidlo v jeho záhlaví ho presunie do okna, ktoré môžete dať na iný monitor. Pozrite [Presunutie dialógového okna](common:arrange-panels#move-a-dialog).

### Pre asistentov s AI

- **Súbory podľa názvu v priečinkoch, ktoré vyberiete.** V CadCraft Studio môže asistent otvárať, ukladať a vykresľovať súbory podľa názvu a podať príkazu súbor, o ktorý žiada (INSERT zo súboru, export COUNT, SAVEAS, PLOT), ale iba vo vnútri priečinkov, ktoré pridáte v {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Priečinky, ktoré môže používať}}. Pozrite [Povoľte mu používať súbory v priečinkoch, ktoré vyberiete](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menej volaní.** Asistent môže napísať celý príkazový riadok naraz, nechať príkaz otvorený medzi svojimi volaniami, spočítať objekty podľa typu a hladiny bez ich vypisovania a vložiť blok s hodnotami atribútov jedným krokom.
- **Bez okna.** Príkazový riadok `cadcraft` zapisuje vykreslenia SVG a naraz konvertuje, vykresľuje, kontroluje alebo popisuje mnoho súborov. Balík MCP zatiaľ nie je zverejnený. Pozrite [Práca so súbormi bez otvorenia CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Zmenené

- **Touchpad posúva.** Pohybujte dvoma prstami po touchpade a 2D pohľad ich sleduje; zväčšenie robí štipnutie a koliesko myši. Pozrite [Myš, touchpad a dotyk](topic:mouse-trackpad-touch).
- **Objekty OLE sa zachovajú.** Vložené objekty v DXF sa zobrazia ako ich obrázok alebo ako označený rámček a DXF 2000 ich uloží späť. Tie v DWG sa zachovajú a pri uložení ako DWG sa zapíšu späť, ale zatiaľ sa nezobrazujú. Predtým sa pri uložení stratili. Pozrite [Objekty z iných programov (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jednotky nového výkresu** sa riadia jednotkou, ktorú označíte hviezdičkou v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}}.

## Opravené

- Rozloženia, ktoré sa otvorili prázdne alebo prišli o výrez a namiesto neho zobrazili celý model, sa teraz otvoria so skutočnými výrezmi. Rozloženie bez prepojenia na svoj obsah sa zachová a správa o otvorení to uvádza.
- Súbory DXF v starších kódových stránkach zobrazovali skomolený cyrilický a kórejský text. Teraz sa čítajú správne.
- Text v odsekoch z iných programov prišiel pri otvorení o formátovanie a bol uložený späť ako obyčajný.

## V každej aplikácii

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami podľa definícií jednotiek (americká geodetická stopa je samostatná jednotka). Vypnite jednotky, ktoré nikdy nepoužívate, a zo zoznamov jednotiek zmiznú; jednu označte hviezdičkou a nová práca sa začne v nej. Súbor si vždy ponechá vlastnú jednotku. V CadCraft hviezdička nastavuje jednotky nového výkresu, ak ide o jednotku, ktorú výkres môže niesť; vlastné okno {{ui:Jednotky}} v CadCraft sa zatiaľ nerieši prepínačmi. Keď má výkres jednotky, dĺžka, ktorú napíšete, môže niesť značku ľubovoľnej jednotky. Pozrite [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa dajú odložiť.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} sa zmestí viac na obrazovku (dotykové obrazovky a telefóny si ponechajú veľké tlačidlá). Každý bočný panel má úzku lištu záhlavia: potiahnutím ho ukotvíte alebo necháte plávať, pustením na lištu iného panela zdieľate jeden rám ako karty, pripnutím ho necháte zasúvať sa k okraju alebo ho skryjete a vrátite z okraja. Pozrite [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógové okná sa presúvajú.** Potiahnite dialógové okno za záhlavie mimo výkresu; vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na záhlavie ho znova vycentrujete. Pozrite [Presunutie dialógového okna](common:arrange-panels#move-a-dialog).
- **Recepty pre asistentov s AI.** Desať prepracovaných požiadaviek pre vášho vlastného asistenta (upratať výkres, vykresliť sadu, skontrolovať výkresy, klásť modelu otázky, spočítať výkaz výmer, vyskúšať variant súčiastky…), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá prehraná našimi testami. Aplikácie neobsahujú žiadnu AI. Pozrite [Recepty pre asistentov s AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz každé slovo aplikácií, ako koncepty, ktoré ešte neskontroloval rodený hovoriaci. Úvodné témy pomocníka existujú aj v niektorých ďalších jazykoch, medzi nimi v slovenčine; ostatné témy pomocníka sú tam, kde preklad neexistuje, stále po anglicky.
- **CadCraft Studio** uvádza, prečo zlyhala kontrola aktualizácie (zatiaľ nie je súbor pre váš systém, nie je sieť, zlý podpis), namiesto len „Hotovo“, a prestane vracať kartu Čo je nové, ktorú ste zatvorili, kým nevyjde novšie vydanie.

## Zatiaľ nie je vo verzii

- **0.7 nie je podpísaná kódovým podpisom.** Podpisovanie a balík pre Microsoft Store sa presunuli do 0.8, pretože overenie certifikátu zatiaľ neprebehlo. Skontrolujte SHA-256 vedľa každého súboru na getcadcraft.com/download. Ak vo Windows inštalátor zastaví SmartScreen, zvoľte {{ui:Ďalšie informácie}} a potom {{ui:Aj tak spustiť}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v obchode s aplikáciami a zatiaľ neexistuje zostavenie pre iPad ani iPhone.
- Zoznamy uhlov a sklonov v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich nečíta žiadne okno.
- Objekty OLE v DWG sa zachovajú, ale nezobrazia, a obrázky vo formáte metafile vnútri objektov OLE sa nekreslia.
- Čítanie tabuliek štýlov vykresľovania (súbory CTB) z iných programov čaká na vzorový súbor.
- Starší ázijský text zapísaný kódmi `\M+` sa číta, ale zatiaľ nebol overený proti súboru z iného programu.
- Podklady z PDF: obrázky vnútri strany sa zobrazujú na obrazovke, ale nevykresľujú sa, vykreslenie z asistenta podklady vynechá a to, ako iné programy čítajú uložené orezanie a mierku, sa v nich neoverilo.
- História: CadCraft zatiaľ neposiela svoje uloženia do cloudu, takže cloudové verzie sú tie uložené z iných zariadení a z webu. História je iba v CadCraft Studio.
- Či si Studio po reštarte zapamätá priečinok podpory acad.lsp, sa zatiaľ nekontrolovalo; ak sa opýta, vyberte priečinok znova v APPLOAD.
- Panel Laser sa zatiaľ nevyskúšal na skutočnom lasere: každé nastavenie vyskúšajte na odpade. CadCraft Studio nemá Web Serial, takže v Studiu panel ukladá iba G-kód.
- Registrácia skenov sa testovala na vymyslených skenoch, zatiaľ nie na sade zo skutočného skenera.
- Posúvanie dvoma prstami sa vyskúšalo so simulovanými udalosťami touchpadu, zatiaľ nie na skutočnom touchpade.
- {{cmd:PEDIT}} nemá voľbu Edit vertex (použite úchyty alebo Vlastnosti). Odsadenie, orezanie, predĺženie, zaoblenie, prerušenie a spojenie zatiaľ splajny neberú; výška splajnu (Z) sa nezachováva.
- Novému textu v odseku sa zatiaľ nedajú dať formátovacie kódy a vykreslenia SVG zobrazujú formátovaný text jednou farbou.
- Voľba Entire drawing v WBLOCK zapíše iba model, nie listy. Aktuálny štýl kót sa v súbore neukladá: výkres sa otvorí s aktuálnym štýlom Standard.
- Štýly ponuky s pásom kariet zatiaľ nemajú zoznamy hladín, farieb ani typov čiar: použite panel {{ui:Hladiny}} a {{ui:Vlastnosti}}.
- Mračná bodov sa stále neukladajú vo výkrese ani nevykresľujú a súbory E57 sa otvoria do 6 miliónov bodov a 512 MB.
- Uložené súbory DWG z CadCraft sa zatiaľ nekontrolovali v samotnom AutoCADe.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet).

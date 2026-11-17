---
title: Čo je nové vo verzii 0.7 (staršie)
summary: PDF podklady a import PDF, skenované výkresy s automatickým trasovaním, skutočné splajny s SPLINE, SPLINEDIT a PEDIT, správca štýlov kót, text, ktorý si zachová formátovanie, WBLOCK a vlastné mierky, 3D telesá z iných programov, registrácia skenov, panel Laser, export USD, História a tlač v CadCraft Studio, sprievodca prvým výkresom, panel nástrojov na ľubovoľnej strane alebo v menšom počte riadkov a ďalšie pre AI asistentov.
keywords: čo je nové 0.7, staršia verzia, poznámky k vydaniu, changelog, zmeny, 0.7, verzia, nové funkcie, pdf, pdfattach, pdfimport, podklad, sken, scanattach, scantrace, trasovanie, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formátovanie, wblock, scalelistedit, zoznam mierok, acis, 3D telesá, registerscans, registrácia skenov, icp, e57, las, laser, grbl, g-code, usd, usdout, história, verzie, porovnanie, tlač, tlačiareň, png, svg, štýl tlače, typ čiary, prehliadka, prehľad, mapa príkazov, poloha panela nástrojov, riadky panela nástrojov, toolbardock, regen, regenall, trackpad, potiahnutie, kódová stránka, cyrilika, kórejčina, čínština, japončina, elektroinštalácia, rcd, p&id, pid, acad.lsp, acaddoc.lsp, priečinok podpory, asistenti, mcp, jednotky, portugalčina
from: d07ca034
---

Toto sa zmenilo v CadCraft 0.7 oproti 0.6. Veľa z toho si vyžiadali na Discorde. Zoznam je zoskupený podľa oblastí, najdôležitejšie na začiatku.

## Novinky

### PDF a skenované výkresy

- **Umiestnite stránku PDF pod výkres.** {{cmd:PDFATTACH}} (`PDFATT`) umiestni stránku v jej skutočnej veľkosti alebo v mierke, ktorú zadáte. Prichytávajte k jej čiaram, zosvetlite ju, urobte ju jednofarebnú ({{cmd:PDFADJUST}}), orežte ju ({{cmd:PDFCLIP}}) a prepínajte vlastné hladiny PDF ({{cmd:PDFLAYERS}}). Vykreslí sa ako čiary, výplne a text a DWG alebo DXF 2000 ju uchová ako odkaz na súbor. Otvorenie PDF pomocou {{ui:Otvoriť}} sa pýta, či ho pripojiť alebo importovať. Pozri [PDF podklady a import PDF](topic:pdf-underlay).
- **Premeňte stránku PDF na objekty výkresu.** {{cmd:PDFIMPORT}} (`PDFIM`) vytvorí úsečky, lomené čiary, kružnice, oblúky, plné šrafovania a text na hladinách pomenovaných podľa PDF, v skutočnej veľkosti, v zadanej mierke alebo v mierke podľa dvoch bodov a skutočnej vzdialenosti, v jednom kroku späť. Pozri [Import stránky](topic:pdf-underlay#import-a-page).
- **Skenované výkresy.** {{cmd:SCANATTACH}} načíta PNG, JPEG alebo TIFF (jednu stránku alebo všetky) alebo stránku PDF, ktorá je obrázkom. Potom nastavte jej mierku podľa dvoch bodov ({{cmd:SCANSCALE}}), zarovnajte ({{cmd:SCANALIGN}}), zrovnajte podľa jej vlastných dlhých čiar ({{cmd:SCANDESKEW}}), urobte ju čiernobielu a odstráňte škvrny ({{cmd:SCANCLEAN}}), orežte ju a vymažte jej časti. Každý krok je jeden krok späť a pôvodný súbor sa zachová. Pozri [Skenované výkresy a trasovanie](topic:scanned-drawings).
- **Prenesenie skenu do úsečiek a oblúkov.** {{cmd:SCANTRACE}} nakreslí čiary skenu ako úsečky a oblúky na novú hladinu SCAN-TRACE s toleranciou, ktorú nastavíte, a text a šrafovanie ponechá tak, ako sú. Správa uvádza, čo vytvorila a čo nechala, a nie je tvrdením, že výsledok je správny: overte ho podľa listu. {{cmd:RASTERSNAP}} umožní uchopeniam objektov nájsť konce, rohy a priesečníky skenu. Nič sa nikam neposiela a nepoužíva sa žiadny natrénovaný model. Pozri [Trasovanie](topic:scanned-drawings#the-trace).

### Kreslenie a úprava

- **Skutočné splajny.** {{cmd:SPLINE}} (`SPL`) nakreslí krivku cez body alebo z riadiacich bodov (stupeň 1 až 5), s koncovými dotyčnicami; {{cmd:SPLINEDIT}} (`SPE`) posúva, pridáva a maže interpolačné alebo riadiace body, nastavuje váhy, otvára, uzatvára, obracia alebo mení splajn na lomenú čiaru. Splajny zo súborov DWG a DXF sa otvoria ako splajny a DWG a DXF 2000 ich ukladajú ako splajny. Pozri [Splajny a lomené čiary](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) uzatvára a otvára lomené čiary, pripája k nim úsečky a oblúky, nastavuje jednu šírku, prekladá krivku cez vrcholy alebo splajn pozdĺž nich a vracia ju späť príkazom Decurve, obracia ich a upravuje naraz viacero. Pozri [Úprava lomenej čiary](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapíše blok, niekoľko objektov alebo celý výkres do nového DWG alebo DXF, ktoré obsahuje iba hladiny, štýly a bloky, ktoré používajú. Pozri [Zápis bloku alebo objektov do vlastného súboru](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN a REGENALL.** {{cmd:REGEN}} (`RE`) prekreslí kartu, na ktorej ste, z výkresu; {{cmd:REGENALL}} (`REA`) každú kartu, panel a otvorený výkres. Pozri [REGEN a REGENALL](topic:commands#regen-and-regenall).

### Text a kóty

- **Text si zachová formátovanie.** Odsekový text z iných programov si zachováva farby po slovách, tučné písmo a kurzívu, podčiarknutie, zložené zlomky a výšky: zobrazujú sa na obrazovke a v PDF, zachovajú sa pri úprave slov a uložia sa späť. Pozri [Formátovanie v odsekovom texte z iných programov](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Správca štýlov kót.** {{cmd:DIMSTYLE}} (`D`) vytvára, mení, porovnáva a uplatňuje pomenované štýly kót; zmena štýlu zmení každú kótu, ktorá ho používa. {{cmd:DIMEDIT}} (`DED`) vráti text na pôvodné miesto, zapíše nový text, otočí ho alebo naklonil pomocné čiary; {{cmd:DIMTEDIT}} posúva text doľava, doprava alebo do stredu. Pozri [Pomenované štýly kót](topic:dimension-settings#named-dimension-styles).
- **Vlastné mierky.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) pridá mierky, ako 1:75, do zoznamov mierok výrezu a vykreslenia; ukladajú sa vo výkrese (DWG a DXF 2000) a výkres z iného programu prináša vlastný zoznam. Pozri [Mierky](topic:units-papers-scales#scales).
- **Text v iných abecedách.** Súbory DXF uložené v kódových stránkach cyriliky, kórejčiny, čínštiny, japončiny alebo vietnamčiny sa teraz otvoria aj s textom a čínsky, japonský a kórejský text sa tlačí do PDF (vykreslenie pri prvom potrebe stiahne väčšie písmo). Pozri [Písmo](topic:text#font).

### Vykresľovanie a tlač

- **Viac v tabuľkách štýlov tlače.** Pre každú farbu môže tabuľka teraz nastaviť aj typ čiary, koniec a spojenie čiar a štýl výplne, ktorý plné výplne tlačí ako šrafovacie čiary; tabuľka má vlastný zoznam hrúbok čiar a mierku typov čiar. Pozri [Tabuľky štýlov tlače](topic:plot-pdf#plot-style-tables).
- **Tlač a súbory PNG a SVG.** Dialógové okno Vykreslenie má {{ui:Tlačiť…}}, {{ui:Stiahnuť PNG}} (300 dpi) a {{ui:Stiahnuť SVG}}. V CadCraft Studio vypíše tlačiarne počítača, ich papier a počet kópií. Pozri [Tlač](topic:plot-pdf#print) a [Obrázok a súbory SVG](topic:plot-pdf#picture-and-svg-files).

### 3D a oblaky bodov

- **3D telesá z iných programov.** Telesá, oblasti a telesá v priestore modelu výkresu sa zobrazia na karte 3D, len na čítanie, a uloženie do DWG ich zapíše nezmenené. Plochy na povrchoch, ktoré CadCraft zatiaľ nekreslí, sa vypíšu, nie odhadnú. Pozri [Telesá z iných programov](topic:3d-solids#solids-from-other-programs).
- **Registrácia viacerých skenov.** {{cmd:REGISTERSCANS}} (`REGSCAN`) umiestni skeny nasnímané z rôznych pozícií do jedného rámca, podľa dvojíc bodov alebo zadaných cieľových súradníc, spresní ich pomocou ICP, uloží registráciu ako malý projektový súbor a zapíše zaregistrovaný oblak ako jeden súbor LAS alebo E57. Pozri [Registrácia viacerých skenov do jedného](topic:register-scans).
- **Export USD.** {{cmd:USDOUT}}, alebo {{cmd:EXPORT3D}} › {{ui:USD}}, zapíše telesá z karty 3D ako `.usda`, `.usdc` alebo `.usdz`. Pozri [Export 3D modelu ako USD](topic:usd).
- **Výpočty na karte 3D.** Kde nástroje na karte 3D žiadajú vzdialenosť, môžete napísať výpočet, ako na riadku príkazov. Pozri [Aritmetika v zadanej hodnote](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Výroba

- **Pošlite výkres na laser.** {{cmd:LASER}}, alebo {{ui:Pohľad}} › {{ui:Viac}} › {{ui:Laser…}}, otvorí panel nad výkresom: každá hladina sa reže, zarezáva, vyrýva čiary, vypĺňa tvary, vyrýva obrázok alebo sa neposiela, s výkonom, rýchlosťou a prechodmi. Náhľad sleduje vaše úpravy, {{ui:Uložiť G-kód…}} zapíše G-kód v režime laser GRBL a v Chrome alebo Edge môže panel ohraničiť úlohu a poslať ju cez USB. Nastavenia sa ukladajú vo výkrese (DWG a DXF). Pozri [Pošlite výkres na laser](topic:laser-cutting).
- **Symboly inštalácií budov v doplnku Elektroinštalácie.** Zásuvky pre dáta, telefón a TV, kľúčové a časové spínače, termostat, značka únikového východu, detektory, hlásič a sirénu, ventilátor, ohrievač vody, sporák, bod nabíjania EV, elektromer a podrozvádzač a symboly RCD a RCBO. Obvod môže niesť RCD, rozvádzačová tabuľka má stĺpec RCD a kontroly označia obvody zásuviek bez RCD 30 mA alebo nižšieho. Je to pripomienka pri plánovaní, nie kontrola normy.
- **Doplnok P&ID.** P&ID kreslí procesné schémy: symboly s prípojnými bodmi, procesné a signálové čiary, označenia, čísla čiar, zoznamy čiar, zariadení, prístrojov a armatúr (CSV alebo zošit) a kontroly. Dodáva sa s CadCraft a je vypnutý, kým ho nezapnete v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Doplnky}}. Je to pomôcka pri kreslení, nie inžinierske schválenie, a jeho slová sú zatiaľ iba v angličtine.

### Začiatok a obrazovka

- **Sprievodca prvým výkresom.** {{cmd:TOUR}} (alebo {{ui:Absolvovať prehliadku}} na úvodnej karte) vás prevedie šiestimi krokmi v skutočnom výkrese: úsečka, kružnica, posun, orezanie, vymazanie a kóta. Spustí sa sám pri prvom otvorení CadCraft s prázdnym výkresom. Pozri [Radšej s sprievodcom?](topic:getting-started#prefer-to-be-guided)
- **Prehľad a mapa príkazov.** [Prehľad](topic:cheat-sheet) obsahuje 40 bežných príkazov na jednej strane, aj ako PDF na tlač, a [mapa príkazov](topic:command-map) uvádza príkazy s ich skrátenými názvami od A po Z.
- **Panel nástrojov na ľubovoľnej strane.** {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Poloha panela nástrojov}}: hore (ako predtým), dole, vľavo alebo vpravo, alebo napíšte {{cmd:TOOLBARDOCK}}. Pozri [Poloha panela nástrojov](topic:settings#toolbar-position).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Riadky panela nástrojov}}: zalomiť podľa miesta, 2 riadky alebo 1 riadok, pre panel nástrojov CadCraft a štýly Drafting classic a Ribbon. {{key:Shift+Ctrl+F1}} prepína medzi nimi, {{key:Ctrl+F1}} medzi zobrazením tlačidiel a {{cmd:TOOLBARROWS}} a {{cmd:TOOLBAR}} ich nastavujú. Úvodný tip má tlačidlo na zatvorenie. Ďakujeme GJoe2, ktorý to poslal ako pull request. Pozri [Riadky panela nástrojov](topic:settings#toolbar-rows).

### V CadCraft Studio

- **História.** {{cmd:HISTORY}} (`HIST`), alebo {{ui:Pohľad}} › {{ui:Viac}} › {{ui:História…}}: kópie, ktoré Studio uchováva pri otvorení a uložení výkresu, a cloudové verzie výkresu, ak ste ho otvorili z cloudu. Otvorte alebo obnovte jednu, alebo porovnajte dve, pričom pridané, odstránené a zmenené časti sú zobrazené farbou. Pozri [História](topic:history).
- **acad.lsp a acaddoc.lsp.** Vyberte priečinok podpory v {{cmd:APPLOAD}}: tieto dva súbory sa načítajú pri spustení CadCraft (acaddoc.lsp znova pre každú novú kartu výkresu) a `S::STARTUP` sa spustí po nich. Pozri [Načítanie aplikácií](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialógové okno Vykreslenie vo vlastnom okne.** Tlačidlo v jeho záhlaví ho presunie do okna, ktoré môžete umiestniť na iný monitor. Pozri [Presun dialógového okna](common:arrange-panels#move-a-dialog).

### Pre AI asistentov

- **Súbory podľa názvu v priečinkoch, ktoré zvolíte.** V CadCraft Studio môže asistent otvárať, ukladať a vykresľovať súbory podľa názvu a odovzdať príkazu súbor, ktorý si vyžiada (INSERT zo súboru, export COUNT, SAVEAS, PLOT), ale iba vo vnútri priečinkov, ktoré pridáte v {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Priečinky, ktoré môže používať}}. Pozri [Nechajte ho používať súbory v priečinkoch, ktoré vyberiete](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menej volaní.** Asistent môže napísať celý riadok príkazu naraz, nechať príkaz otvorený medzi volaniami, spočítať objekty podľa typu a hladiny bez ich vypísania a umiestniť blok s jeho hodnotami atribútov v jednom kroku.
- **Bez okna.** Príkazový riadok `cadcraft` zapisuje vykreslenia SVG a naraz prevádza, vykresľuje, kontroluje alebo opisuje mnoho súborov. Balík MCP ešte nie je zverejnený. Pozri [Práca so súbormi bez otvorenia CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Zmeny

- **Trackpad posúva.** Pohnite dvoma prstami na trackpade a 2D pohľad ich nasleduje; štipnutie a koliesko myši zväčšujú. Pozri [Myš, trackpad a dotyk](topic:mouse-trackpad-touch).
- **Objekty OLE sa zachovávajú.** Vložené objekty DXF sa zobrazujú ako ich obrázok alebo ako označený rám a DXF 2000 ich ukladá späť. Objekty DWG sa zachovávajú a zapisujú späť pri uložení ako DWG, ale zatiaľ sa nezobrazujú. Predtým sa pri uložení stratili. Pozri [Objekty z iných programov (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jednotky nového výkresu** sa riadia jednotkou, ktorú označíte hviezdičkou v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}}.

## Opravené

- Rozloženia, ktoré sa otvárali prázdne alebo stratili výrez a namiesto neho ukazovali celý model, sa teraz otvoria so svojimi skutočnými výrezmi. Rozloženie bez prepojenia na svoj obsah sa zachová a správa o otvorení to uvedie.
- Súbory DXF v starších kódových stránkach zobrazovali pokazený cyrilický a kórejský text. Teraz sa čítajú správne.
- Odsekový text z iných programov pri otvorení stratil formátovanie a pri uložení sa uložil ako obyčajný text.

## Vo všetkých aplikáciách

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami, ktoré dávajú definície jednotiek (americká prieskumnícka stopa je vlastná jednotka). Vypnite jednotky, ktoré nikdy nepoužívate, a vypadnú zo zoznamov; označte jednu hviezdičkou a nová práca sa začne v nej. Súbor si vždy zachová vlastnú jednotku. V CadCraft hviezdička nastaví jednotky nového výkresu, keď je to jednotka, ktorú výkres môže niesť; vlastné pole {{ui:Jednotky}} v CadCraft zatiaľ nasleduje prepínače. Keď výkres má jednotky, dĺžka, ktorú napíšete, môže niesť značku ľubovoľnej jednotky. Pozri [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa upratujú.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} zmestí na obrazovku viac (dotykové obrazovky a telefóny si zachovajú veľké tlačidlá). Každý bočný panel má úzky záhlavný pruh: potiahnite ho, aby sa panel ukotvil alebo plával, pustite ho na pruh iného panela, aby sa tieto zdieľali v jednom rámci ako karty, pripnite ho, aby sa zasúval k okraju, alebo ho skryte a vráťte z okraja. Pozri [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógové okná sa dajú presúvať.** Potiahnite dialógové okno za záhlavie mimo cesty výkresu; vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na záhlavie ho znova vycentrujete. Pozri [Presun dialógového okna](common:arrange-panels#move-a-dialog).
- **Recepty pre AI asistentov.** Desať prepracovaných požiadaviek pre vášho asistenta (upraviť výkres, vykresliť sadu, kontrolovať výkresy, klásť otázky o modeli, spočítať výkaz výmer, vyskúšať variant súčiastky…), každá s nástrojmi, ktoré volá, a povoleniami, ktoré potrebuje, a každá overená našimi testami. Aplikácie neobsahujú AI. Pozri [Recepty pre AI asistentov](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz každé slovo aplikácií, ako koncepty, ktoré ešte neprečítal rodený hovorca. Témy pomocníka sú v angličtine.
- **CadCraft Studio** uvedie, prečo kontrola aktualizácie zlyhala (zatiaľ žiadny súbor pre váš systém, žiadna sieť, zlý podpis), namiesto len "Hotovo", a neprinesie späť kartu Čo je nové, ktorú ste zavreli, dovtedy, kým nebude novšia verzia.

## Ešte nie je v tejto verzii

- **0.7 nie je podpísané kódom.** Podpisovanie a balík Microsoft Store sa presunuli do 0.8, lebo overenie certifikátu ešte neprišlo. Skontrolujte SHA-256 vedľa každého súboru na getcadcraft.com/download. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:Ďalšie informácie}}, potom {{ui:Spustiť aj tak}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v obchode s aplikáciami a zatiaľ neexistuje verzia pre iPad ani iPhone.
- Zoznamy uhlov a sklonu v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich žiadne pole nečíta.
- Objekty OLE v DWG sa zachovávajú, ale nezobrazujú sa, a obrázky metasúborov vnútri objektov OLE sa nekreslia.
- Čítanie tabuliek štýlov tlače (súbory CTB) z iných programov čaká na vzorový súbor.
- Staší ázijský text zapísaný kódmi `\M+` sa číta, ale ešte nebol overený proti súboru z iného programu.
- PDF podklady: obrázky vnútri stránky sa zobrazujú na obrazovke, ale nevykresľujú sa, vykreslenie asistenta vynecháva podklady a nebolo overené, ako ich iné programy čítajú uložený orez a mierku.
- História: CadCraft zatiaľ neposiela svoje uloženia do cloudu, takže cloudové verzie sú tie, ktoré boli uložené z iných zariadení a z webu. História je iba v CadCraft Studio.
- Ešte sa neoverilo, či Studio po reštarte zachová priečinok podpory acad.lsp; ak sa opýta, zvoľte priečinok znova v APPLOAD.
- Panel Laser ešte nebol vyskúšaný na skutočnom lasery: každé nastavenie otestujte na odpadovom materiáli. CadCraft Studio nemá Web Serial, takže v Studio panel ukladá iba G-kód.
- Registrácia skenov bola testovaná na vymyslených skenoch, zatiaľ nie na skutočnej sade zo skenera.
- Posúvanie dvoma prstami bolo vyskúšané so simulovanými udalosťami trackpadu, zatiaľ nie na skutočnom trackpade.
- {{cmd:PEDIT}} nemá možnosť Upraviť vrchol (použite úchyty alebo {{ui:Vlastnosti}}). Odsadenie, orezanie, predĺženie, zaoblenie, prerušiť a spojenie zatiaľ nepracujú so splajnmi; výška splajnu (Z) sa neuchováva.
- Nový odsekový text zatiaľ nemožno formátovať kódmi a vykreslenia SVG zobrazujú formátovaný text jednou farbou.
- Možnosť WBLOCK "Celý výkres" zapisuje iba model, nie listy. Aktuálny štýl kót sa nezapíše do súboru: výkres sa otvorí s aktuálnym štýlom Standard.
- Štýly ponuky s pásom zatiaľ nemajú zoznamy hladín, farieb ani typov čiar: použite panel {{ui:Hladiny}} a {{ui:Vlastnosti}}.
- Oblaky bodov sa stále neukladajú do výkresu ani nevykresľujú a súbory E57 sa otvoria až do 6 miliónov bodov a 512 MB.
- Uložené súbory DWG z CadCraft ešte neboli overené priamo v AutoCAD.

Všetko ostatné je v [Ešte nie je hotové](topic:not-built-yet).

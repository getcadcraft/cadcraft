---
title: Novinky v 0.7
summary: Podklady PDF a import PDF, naskenované výkresy s automatickým obkreslením, skutečné spliny s SPLINE, SPLINEDIT a PEDIT, správce stylů kót, text, který zachovává formátování, WBLOCK a vlastní měřítka, 3D tělesa z jiných programů, registrace skenů, panel Laser, export USD, Historie a tisk v CadCraft Studiu, provedení prvním výkresem, panel nástrojů na libovolné straně nebo v méně řádcích a další funkce pro asistenty s umělou inteligencí.
keywords: novinky, co je nového, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, pdf, pdfattach, pdfimport, podklad, sken, scanattach, scantrace, obkreslení, rastr, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formátování, wblock, scalelistedit, seznam měřítek, acis, 3d tělesa, registerscans, registrace skenů, icp, e57, las, laser, grbl, g-code, usd, usdout, historie, verze, porovnání, tisk, tiskárna, png, svg, styl tisku, typ čáry, prohlídka, tahák, mapa příkazů, poloha panelu nástrojů, řádky panelu nástrojů, toolbardock, regen, regenall, trackpad, přejetí, kódová stránka, azbuka, korejština, čínština, japonština, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, složka podpory, asistenti, mcp, jednotky, portugalština
from: b9258ca6
---

Zde je přehled změn v CadCraftu 0.7 oproti 0.6. Velká část z toho byla požadována na Discordu. Seznam je seskupen podle oblastí, nejdůležitější nahoře.

## Nové

### PDF a naskenované výkresy

- **Podložení strany PDF pod výkres.** {{cmd:PDFATTACH}} (`PDFATT`) umístí stranu ve skutečné velikosti nebo v zadaném měřítku. Uchopujte její čáry, zesvětlete ji, udělejte ji jednobarevnou ({{cmd:PDFADJUST}}), ořízněte ji ({{cmd:PDFCLIP}}) a přepínejte vlastní vrstvy PDF ({{cmd:PDFLAYERS}}). Vykresluje se jako čáry, výplně a text a DWG nebo DXF 2000 ji zachová jako odkaz na soubor. Otevření PDF pomocí {{ui:Otevřít}} se zeptá, zda ho připojit, nebo importovat. Viz [Podklady PDF a import PDF](topic:pdf-underlay).
- **Proměna strany PDF v objekty výkresu.** {{cmd:PDFIMPORT}} (`PDFIM`) vytvoří úsečky, mnohočáry, kružnice, oblouky, plné šrafy a text na vrstvách pojmenovaných podle PDF, ve skutečné velikosti, v zadaném měřítku nebo v měřítku podle dvou bodů a skutečné vzdálenosti, v jednom kroku zpět. Viz [Import strany](topic:pdf-underlay#import-a-page).
- **Naskenované výkresy.** {{cmd:SCANATTACH}} přinese PNG, JPEG nebo TIFF (jednu stranu nebo všechny) nebo stranu PDF, která je obrázkem. Potom změňte její měřítko ze dvou bodů ({{cmd:SCANSCALE}}), zarovnejte ({{cmd:SCANALIGN}}), srovnejte podle jejích vlastních dlouhých čar ({{cmd:SCANDESKEW}}), udělejte černobílou a odstraňte šum ({{cmd:SCANCLEAN}}), ořízněte ji a vymažte její části. Každý krok je jeden krok zpět a původní soubor se zachová. Viz [Naskenované výkresy a obkreslení](topic:scanned-drawings).
- **Obkreslení skenu na úsečky a oblouky.** {{cmd:SCANTRACE}} nakreslí čáry skenu jako úsečky a oblouky na novou vrstvu SCAN-TRACE s nastavenou tolerancí a text a šrafování ponechá, jak jsou. Zpráva říká, co vytvořila a co ponechala, a není tvrzením, že výsledek je správný: zkontrolujte jej podle listu. {{cmd:RASTERSNAP}} umožní uchopením najít konce, rohy a průsečíky skenu. Nic se nikam neodesílá a nepoužívá se žádný natrénovaný model. Viz [Obkreslení](topic:scanned-drawings#the-trace).

### Kreslení a úpravy

- **Skutečné spliny.** {{cmd:SPLINE}} (`SPL`) nakreslí křivku body nebo z řídicích bodů (stupeň 1 až 5), s koncovými tečnami; {{cmd:SPLINEDIT}} (`SPE`) přesouvá, přidává a maže proložené nebo řídicí body, nastavuje váhy, otevírá, uzavírá, obrací nebo mění spline na mnohočáru. Spliny ze souborů DWG a DXF se otevřou jako spliny a DWG a DXF 2000 je ukládají jako spliny. Viz [Spliny a mnohočáry](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) uzavírá a otevírá mnohočáry, připojuje k nim úsečky a oblouky, nastavuje jednu šířku, proloží křivku vrcholy nebo spline podél nich a vrátí ji pomocí Decurve, obrací a upravuje několik najednou. Viz [Úprava mnohočáry](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapíše blok, některé objekty nebo celý výkres do nového DWG nebo DXF, který obsahuje jen vrstvy, styly a bloky, které používají. Viz [Zápis bloku nebo objektů do vlastního souboru](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN a REGENALL.** {{cmd:REGEN}} (`RE`) překreslí kartu, na které jste, z výkresu, {{cmd:REGENALL}} (`REA`) každou kartu, okno a otevřený výkres. Viz [REGEN a REGENALL](topic:commands#regen-and-regenall).

### Text a kóty

- **Text zachovává formátování.** Odstavcový text z jiných programů si zachovává barvy po slovech, tučné písmo a kurzívu, podtržení, skládané zlomky a výšky: kreslí se na obrazovce i v PDF, zachovává se při úpravě slov a ukládá se zpět. Viz [Formátování uvnitř odstavcového textu z jiných programů](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Správce stylů kót.** {{cmd:DIMSTYLE}} (`D`) vytváří, mění, porovnává a používá pojmenované styly kót; změna stylu změní každou kótu, která jej používá. {{cmd:DIMEDIT}} (`DED`) vrátí text na původní místo, zadá nový text, otočí jej nebo nakloní vynášecí čáry; {{cmd:DIMTEDIT}} přesune text doleva, doprava nebo na střed. Viz [Pojmenované styly kót](topic:dimension-settings#named-dimension-styles).
- **Vlastní měřítka.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) přidá měřítka jako 1:75 do seznamů měřítek výřezů a vykreslení; ukládají se do výkresu (DWG a DXF 2000) a výkres z jiného programu přináší svůj vlastní seznam. Viz [Měřítka](topic:units-papers-scales#scales).
- **Text v jiných písmech.** Soubory DXF uložené v azbuce, korejštině, čínštině, japonštině nebo vietnamštině v kódových stránkách se nyní otevírají se svým textem a čínský, japonský a korejský text se tiskne v PDF (vykreslení při první potřebě stáhne větší písmo). Viz [Písmo](topic:text#font).

### Vykreslování a tisk

- **Více v tabulkách stylů tisku.** Pro každou barvu může nyní tabulka nastavit také typ čáry, zakončení a spojení čar a styl výplně, který vytiskne plné výplně jako šrafovací čáry; tabulka má vlastní seznam tlouštěk čar a měřítko typu čáry. Viz [Tabulky stylů tisku](topic:plot-pdf#plot-style-tables).
- **Tisk a soubory PNG a SVG.** Dialog Vykreslit má {{ui:Tisk…}}, {{ui:Stáhnout PNG}} (300 dpi) a {{ui:Stáhnout SVG}}. V CadCraft Studiu uvádí tiskárny počítače, jejich papír a počet kopií. Viz [Tisk](topic:plot-pdf#print) a [Soubory obrázků a SVG](topic:plot-pdf#picture-and-svg-files).

### 3D a mračna bodů

- **3D tělesa z jiných programů.** Tělesa, oblasti a těla v prostoru modelu výkresu se zobrazí na kartě 3D, jen pro čtení, a uložení jako DWG je zapíše zpět beze změny. Plochy na površích, které CadCraft zatím nekreslí, se uvedou, nehádají se. Viz [Tělesa z jiných programů](topic:3d-solids#solids-from-other-programs).
- **Registrace více skenů.** {{cmd:REGISTERSCANS}} (`REGSCAN`) umístí skeny pořízené z různých stanovišť do jednoho rámce, podle dvojic bodů nebo zadaných cílových souřadnic, zpřesní je pomocí ICP, uloží registraci jako malý soubor projektu a zapíše registrované mračno jako jeden soubor LAS nebo E57. Viz [Registrace několika skenů do jednoho](topic:register-scans).
- **Export USD.** {{cmd:USDOUT}} nebo {{cmd:EXPORT3D}} › {{ui:USD}} zapíše tělesa karty 3D jako `.usda`, `.usdc` nebo `.usdz`. Viz [Export modelu 3D jako USD](topic:usd).
- **Výpočty na kartě 3D.** Kde nástroje karty 3D žádají vzdálenost, můžete napsat výpočet, jako na příkazovém řádku. Viz [Aritmetika v zadané hodnotě](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Výroba

- **Odeslání výkresu laseru.** {{cmd:LASER}} nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Laser…}} otevře nad výkresem panel: každá vrstva řeže, rýhuje, gravíruje čáry, vyplňuje tvary, gravíruje obrázek nebo se neodesílá, s výkonem, rychlostí a počtem průchodů. Náhled sleduje Vaše úpravy, {{ui:Uložit G-code…}} zapíše G-code v režimu laseru GRBL a v Chromu nebo Edgi může panel projet obrys úlohy a odeslat ji přes USB. Nastavení se ukládají do výkresu (DWG a DXF). Viz [Odeslání výkresu laseru](topic:laser-cutting).
- **Symboly instalací budov v doplňku Elektro.** Datové, telefonní a televizní zásuvky, tlačítkové a časové spínače, termostat, nouzové označení východu, hlásiče, tlačítkový hlásič a siréna, ventilátor, ohřívač vody, sporák, nabíjecí místo pro elektromobily, elektroměr a podrozvaděč a symboly RCD a RCBO. Obvod může nést RCD, rozpis rozvaděče má sloupec RCD a kontroly uvádějí zásuvkové obvody bez RCD 30 mA nebo méně. Jde o plánovací připomínku, ne kontrolu souladu s předpisy.
- **Doplněk P&ID.** P&ID kreslí procesní schémata: symboly s připojovacími body, procesní a signální čáry, značky, čísla potrubí, seznamy potrubí, zařízení, přístrojů a armatur (CSV nebo sešit) a kontroly. Je součástí CadCraftu a je vypnutý, dokud jej nezapnete v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Doplňky}}. Je to pomůcka pro kreslení, ne schválení projektantem, a jeho texty jsou zatím jen anglicky.

### Začínáme a obrazovka

- **Provedení prvním výkresem.** {{cmd:TOUR}} (nebo {{ui:Absolvovat prohlídku}} na úvodní kartě) Vás provede šesti kroky ve skutečném výkresu: úsečka, kružnice, přesun, oříznutí, smazání a kóta. Sama se spustí při prvním otevření CadCraftu, když v něm nic není. Viz [Chcete být provedeni?](topic:getting-started#prefer-to-be-guided)
- **Tahák a mapa příkazů.** [Tahák](topic:cheat-sheet) obsahuje 40 každodenních příkazů na jedné straně, také jako PDF k tisku, a [mapa příkazů](topic:command-map) uvádí příkazy s jejich zkratkami od A do Z.
- **Panel nástrojů na libovolné straně.** {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Poloha panelu nástrojů}}: nahoře (jako dříve), dole, vlevo nebo vpravo, nebo napište {{cmd:TOOLBARDOCK}}. Viz [Poloha panelu nástrojů](topic:settings#toolbar-position).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Řádky panelu nástrojů}}: zalamovat podle místa, 2 řádky nebo 1 řádek, pro panel nástrojů CadCraftu a styly Klasické kreslení a Pás karet. {{key:Shift+Ctrl+F1}} je prochází, {{key:Ctrl+F1}} prochází to, co tlačítka zobrazují, a {{cmd:TOOLBARROWS}} a {{cmd:TOOLBAR}} je nastavují. Úvodní nápověda má tlačítko zavřít. Děkujeme GJoe2, který to poslal jako pull request. Viz [Řádky panelu nástrojů](topic:settings#toolbar-rows).

### V CadCraft Studiu

- **Historie.** {{cmd:HISTORY}} (`HIST`) nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Historie…}}: kopie, které Studio uchovává při otevření a uložení výkresu, a cloudové verze výkresu, pokud jste jej otevřeli z cloudu. Otevřete nebo obnovte jednu, nebo porovnejte dvě, s barevně zobrazeným přidaným, odebraným a změněným. Viz [Historie](topic:history).
- **acad.lsp a acaddoc.lsp.** Zvolte složku podpory v {{cmd:APPLOAD}}: tyto dva soubory se načtou při spuštění CadCraftu (acaddoc.lsp znovu pro každou novou kartu výkresu) a po nich se spustí `S::STARTUP`. Viz [Načtení acad.lsp a acaddoc.lsp ze složky podpory](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialog Vykreslit ve vlastním okně.** Tlačítko v jeho záhlaví jej přesune do okna, které můžete umístit na jiný monitor. Viz [Přesunutí dialogu](common:arrange-panels#move-a-dialog).

### Pro asistenty s umělou inteligencí

- **Soubory podle názvu ve složkách, které zvolíte.** V CadCraft Studiu může asistent otevírat, ukládat a vykreslovat soubory podle názvu a předat příkazu soubor, který žádá (INSERT ze souboru, export COUNT, SAVEAS, PLOT), ale jen uvnitř složek, které přidáte v {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Složky, které smí použít}}. Viz [Povolení používat soubory ve složkách, které zvolíte](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Méně volání.** Asistent může napsat celý příkazový řádek najednou, ponechat příkaz otevřený mezi voláními, počítat objekty podle typu a vrstvy bez jejich vypisování a umístit blok s hodnotami atributů v jednom kroku.
- **Bez okna.** Příkazový řádek `cadcraft` zapisuje vykreslení do SVG a převádí, vykresluje, kontroluje nebo popisuje mnoho souborů najednou. Balíček MCP zatím není zveřejněn. Viz [Práce se soubory bez otevření CadCraftu](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Změněno

- **Trackpad posouvá.** Pohybujte dvěma prsty po trackpadu a 2D pohled je následuje; sevření a kolečko myši přibližují. Viz [Myš, trackpad a dotyk](topic:mouse-trackpad-touch).
- **Objekty OLE se zachovávají.** Vložené objekty DXF se zobrazí jako jejich obrázek nebo popsaný rámeček a DXF 2000 je ukládá zpět. Objekty DWG se zachovají a při uložení jako DWG se zapíší zpět, ale zatím se nezobrazují. Dříve se při uložení ztratily. Viz [Objekty z jiných programů (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jednotky nového výkresu** se řídí jednotkou, kterou označíte hvězdičkou v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}}.

## Opraveno

- Rozvržení, která se otevřela prázdná nebo ztratila výřez a zobrazila místo něj celý model, se nyní otevírají se skutečnými výřezy. Rozvržení bez vazby na svůj obsah se zachová a zpráva o otevření to uvede.
- Soubory DXF ve starších kódových stránkách zobrazovaly zkomolenou azbuku a korejštinu. Nyní se čtou správně.
- Odstavcový text z jiných programů ztrácel při otevření formátování a ukládal se zpět bez něj.

## V každé aplikaci

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má po jednom seznamu pro délku, plochu, objem, úhel a sklon s přesnými velikostmi podle definic jednotek (americká zeměměřičská stopa je samostatná jednotka). Vypněte jednotky, které nikdy nepoužíváte, a z seznamů jednotek zmizí; označte jednu hvězdičkou a nová práce v ní začne. Soubor si vždy ponechává vlastní jednotku. V CadCraftu hvězdička nastavuje jednotky nového výkresu, pokud je to jednotka, kterou výkres může nést; vlastní pole {{ui:Jednotky}} CadCraftu zatím přepínače nesleduje. Jakmile má výkres jednotky, zadaná délka může nést značku libovolné jednotky. Viz [Jednotky, zadávané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozvržení a panely, které se uklidí.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vměstná na obrazovku víc (dotykové obrazovky a telefony si ponechávají velká tlačítka). Každý boční panel má štíhlou záhlavní lištu: přetažením panel ukotvíte nebo necháte plovoucí, puštěním na lištu jiného panelu je sloučíte do jednoho rámu jako karty, připnutím jej necháte zasunout k okraji, nebo jej skryjete a vrátíte z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se přesouvají.** Přetáhněte dialog za záhlaví z cesty kresbě; vrátí se tam, kde jste jej nechali. Dvojitým kliknutím na záhlaví jej znovu vycentrujete. Viz [Přesunutí dialogu](common:arrange-panels#move-a-dialog).
- **Návody pro asistenty s umělou inteligencí.** Deset ukázkových požadavků pro Vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, ptát se modelu, sečíst výkaz výměr, vyzkoušet variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý přehraný našimi testy. Aplikace neobsahují žádnou AI. Viz [Návody pro asistenty s umělou inteligencí](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nově v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** mají nyní každé slovo aplikací, jako koncepty dosud nezkontrolované rodilým mluvčím. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** říká, proč kontrola aktualizací selhala (pro Váš systém zatím není soubor, chybí síť, chybný podpis), místo pouhého „Hotovo“, a přestane vracet kartu Novinky, kterou jste zavřeli, dokud nevyjde novější vydání.

## V této verzi ještě není

- **0.7 není podepsáno kódem.** Podepisování a balíček Microsoft Store se přesunuly do 0.8, protože ověření certifikátu zatím neprošlo. Zkontrolujte SHA-256 vedle každého souboru na getcadcraft.com/download. Pokud ve Windows instalátor zastaví SmartScreen, zvolte {{ui:Další informace}} a potom {{ui:Přesto spustit}}. Na Macu poprvé klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a verze pro iPad ani iPhone zatím neexistuje.
- Seznamy úhlu a sklonu v {{ui:Jednotky}} se ukládají, ale zatím je nečte žádné pole.
- Objekty OLE v DWG se zachovávají, ale nezobrazují, a obrázky metasouboru uvnitř objektů OLE se nekreslí.
- Čtení tabulek stylů tisku (soubory CTB) z jiných programů čeká na ukázkový soubor.
- Starší asijský text zapsaný jako kódy `\M+` se čte, ale zatím nebyl ověřen proti souboru z jiného programu.
- Podklady PDF: obrázky uvnitř strany se zobrazují na obrazovce, ale nevykreslují se, vykreslení asistentem podklady vynechá a jak ostatní programy čtou uložený ořez a měřítko, v nich nebylo ověřeno.
- Historie: CadCraft zatím neodesílá svá uložení do cloudu, takže cloudové verze jsou ty, které byly uloženy z jiných zařízení a z webu. Historie je jen v CadCraft Studiu.
- Zda Studio po restartu uchová složku podpory acad.lsp, zatím nebylo ověřeno; pokud se zeptá, zvolte složku v APPLOAD znovu.
- Panel Laser nebyl zatím vyzkoušen na skutečném laseru: každé nastavení vyzkoušejte na odpadu. CadCraft Studio nemá Web Serial, takže ve Studiu panel ukládá jen G-code.
- Registrace skenů byla vyzkoušena na vymyšlených skenech, zatím ne na sadě ze skutečného skeneru.
- Posun dvěma prsty byl vyzkoušen se simulovanými událostmi trackpadu, zatím ne na skutečném trackpadu.
- {{cmd:PEDIT}} nemá volbu Upravit vrchol (použijte úchopy nebo Vlastnosti). Odsazení, oříznutí, prodloužení, zaoblení, přerušení a spojení zatím spliny nepřijímají; výška (Z) splinu se nezachovává.
- Novému odstavcovému textu zatím nelze zadat formátovací kódy a vykreslení do SVG zobrazuje formátovaný text jedinou barvou.
- Celý výkres v WBLOCK zapíše jen model, ne listy. Aktuální styl kót se v souboru neukládá: výkres se otevře s aktuálním stylem Standard.
- Styly nabídky pásu karet zatím nemají seznamy vrstev, barev ani typů čar: použijte panel {{ui:Vrstvy}} a {{ui:Vlastnosti}}.
- Mračna bodů se stále neukládají do výkresu ani nevykreslují a soubory E57 se otevírají do 6 milionů bodů a 512 MB.
- Uložené soubory DWG z CadCraftu zatím nebyly ověřeny v samotném AutoCADu.

Vše ostatní je v tématu [Ještě není hotovo](topic:not-built-yet).

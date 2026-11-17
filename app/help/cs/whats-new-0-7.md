---
title: Novinky ve verzi 0.7 (dřívější)
summary: Podložky PDF a import PDF, skenované výkresy s automatickým obkreslením, skutečné spliny pomocí SPLINE, SPLINEDIT a PEDIT, správce stylů kót, text, který si zachovává formátování, WBLOCK a vlastní měřítka, 3D tělesa z jiných programů, registrace skenů, panel Laser, export USD, Historie a tisk v CadCraft Studio, průvodce prvním výkresem, panel nástrojů na libovolné straně nebo v menším počtu řádků a další pro AI asistenty.
keywords: novinky 0.7, dřívější verze, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, pdf, pdfattach, pdfimport, podložka, sken, scanattach, scantrace, obkreslení, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formátování, wblock, scalelistedit, seznam měřítek, acis, 3D tělesa, registerscans, registrace skenů, icp, e57, las, laser, grbl, g-code, usd, usdout, historie, verze, porovnání, tisk, tiskárna, png, svg, styl vykreslení, typ čáry, průvodce, přehled příkazů, mapa příkazů, poloha panelu nástrojů, řádky panelu nástrojů, toolbardock, regen, regenall, trackpad, přejetí, kódová stránka, cyrilice, korejština, čínština, japonština, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, podpůrná složka, asistenti, mcp, jednotky, portugalština
from: d07ca034
---

Tohle se změnilo v CadCraft 0.7 oproti verzi 0.6. Hodně z toho si uživatelé vyžádali na Discordu. Seznam je seskupen podle oblastí, nejdůležitější je první.

## Nové

### PDF a skenované výkresy

- **Vložte stranu PDF pod výkres.** {{cmd:PDFATTACH}} (`PDFATT`) umístí stranu v její skutečné velikosti nebo v měřítku, které zadáte. Přichytávejte k jejím čarám, zeslabte ji, udělejte z ní monochromatickou ({{cmd:PDFADJUST}}), oříznete ji ({{cmd:PDFCLIP}}) a přepínejte vrstvy samotného PDF ({{cmd:PDFLAYERS}}). Vykresluje se jako čáry, výplně a text a DWG nebo DXF 2000 si ji uchová jako odkaz na soubor. Otevření PDF pomocí {{ui:Otevřít}} se zeptá, zda ho připojit, nebo importovat. Viz [Podložky PDF a import PDF](topic:pdf-underlay).
- **Proměňte stranu PDF na objekty výkresu.** {{cmd:PDFIMPORT}} (`PDFIM`) vytvoří úsečky, mnohočáry, kružnice, oblouky, plné šrafy a text na vrstvách pojmenovaných podle PDF, ve skutečné velikosti, v zadaném měřítku, nebo podle měřítka ze dvou bodů a skutečné vzdálenosti, v jednom kroku zpět. Viz [Import strany](topic:pdf-underlay#import-a-page).
- **Skenované výkresy.** {{cmd:SCANATTACH}} načte PNG, JPEG nebo TIFF (jednu stranu nebo všechny) nebo stranu PDF, která je obrázkem. Pak nastavte měřítko podle dvou bodů ({{cmd:SCANSCALE}}), zarovnejte ({{cmd:SCANALIGN}}), narovnejte podle jejích vlastních dlouhých čar ({{cmd:SCANDESKEW}}), převeďte na černobílou a odstraňte nečistoty ({{cmd:SCANCLEAN}}), oříznete ji a smažte její části. Každý krok je jeden krok zpět a původní soubor se zachová. Viz [Skenované výkresy a obkreslení](topic:scanned-drawings).
- **Obkreslete sken na čáry a oblouky.** {{cmd:SCANTRACE}} nakreslí čáry skenu jako úsečky a oblouky na nové vrstvě SCAN-TRACE, s tolerancí, kterou nastavíte, a text a šrafování nechá tak, jak jsou. Zpráva říká, co vytvořil a co nechal, a netvrdí, že výsledek je správný: ověřte jej podle listu. {{cmd:RASTERSNAP}} umožní uchopení k objektům najít konce, rohy a průsečíky skenu. Nic se nikam neodesílá a nepoužívá se žádný natrénovaný model. Viz [Obkreslení](topic:scanned-drawings#the-trace).

### Kreslení a úpravy

- **Skutečné spliny.** {{cmd:SPLINE}} (`SPL`) kreslí křivku procházející body nebo podle řídicích bodů (stupeň 1 až 5), s koncovými tečnami; {{cmd:SPLINEDIT}} (`SPE`) přesouvá, přidává a maže body proložení nebo řídicí body, nastavuje váhy, otevírá, uzavírá, obrací nebo mění spline na mnohočáru. Spliny ze souborů DWG a DXF se otevírají jako spliny a DWG a DXF 2000 je ukládají jako spliny. Viz [Spliny a mnohočáry](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) uzavírá a otevírá mnohočáry, připojuje k nim úsečky a oblouky, nastavuje jednu šířku, proloží křivku vrcholy nebo spline podél nich a vrací ji zpět pomocí Decurve, obrací a upravuje několik najednou. Viz [Úprava mnohočáry](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapíše blok, některé objekty nebo celý výkres do nového DWG nebo DXF, které obsahují jen vrstvy, styly a bloky, jež používají. Viz [Zápis bloku nebo objektů do vlastního souboru](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN a REGENALL.** {{cmd:REGEN}} (`RE`) překreslí kartu, na které jste, z výkresu, {{cmd:REGENALL}} (`REA`) všechny karty, panely a otevřené výkresy. Viz [REGEN a REGENALL](topic:commands#regen-and-regenall).

### Text a kóty

- **Text si zachovává formátování.** Odstavcový text z jiných programů si zachovává barvy po slovech, tučné a kurzivu, podtržení, zlomky nad sebou a výšky: kreslí se na obrazovce i v PDF, zachová se při úpravě slov a uloží se zpět. Viz [Formátování uvnitř odstavcového textu z jiných programů](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Správce stylů kót.** {{cmd:DIMSTYLE}} (`D`) vytváří, mění, porovnává a používá pojmenované styly kót; změna stylu změní každou kótu, která jej používá. {{cmd:DIMEDIT}} (`DED`) vrací text na místo, zadává nový text, otáčí jej nebo šikmo nastavuje pomocné čáry; {{cmd:DIMTEDIT}} přesouvá text vlevo, vpravo nebo na střed. Viz [Pojmenované styly kót](topic:dimension-settings#named-dimension-styles).
- **Vlastní měřítka.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) přidává měřítka, například 1:75, do seznamů měřítek výřezu a vykreslení; ukládají se ve výkresu (DWG a DXF 2000) a výkres z jiného programu přináší svůj vlastní seznam. Viz [Měřítka](topic:units-papers-scales#scales).
- **Text v jiných abecedách.** Soubory DXF uložené v cyrilických, korejských, čínských, japonských nebo vietnamských kódových stránkách se nyní otevřou i se svým textem a čínský, japonský a korejský text se tiskne do PDF (vykreslení při prvním použití stáhne větší písmo). Viz [Písmo](topic:text#font).

### Vykreslování a tisk

- **Více v tabulkách stylů vykreslení.** Pro každou barvu může tabulka nyní nastavit také typ čáry, zakončení a spojení čar a styl výplně, který plné výplně tiskne jako šrafovací čáry; tabulka má vlastní seznam tlouštěk čar a měřítko typů čar. Viz [Tabulky stylů vykreslení](topic:plot-pdf#plot-style-tables).
- **Tisk a soubory PNG a SVG.** Dialog Vykreslení má {{ui:Tisk…}}, {{ui:Stáhnout PNG}} (300 dpi) a {{ui:Stáhnout SVG}}. V CadCraft Studio vypisuje tiskárny počítače, jejich papír a počet kopií. Viz [Tisk](topic:plot-pdf#print) a [Obrázky a soubory SVG](topic:plot-pdf#picture-and-svg-files).

### 3D a mračna bodů

- **3D tělesa z jiných programů.** Tělesa, oblasti a tělesa v prostoru modelu výkresu se zobrazí na kartě 3D jen pro čtení a uložení do DWG je zapíše zpět beze změny. Plochy na površích, které CadCraft zatím nekreslí, se vypíšou, nikoli odhadují. Viz [Tělesa z jiných programů](topic:3d-solids#solids-from-other-programs).
- **Registrace více skenů.** {{cmd:REGISTERSCANS}} (`REGSCAN`) umístí skeny pořízené z různých poloh do jednoho rámce podle dvojic bodů nebo zadaných cílových souřadnic, zpřesní je metodou ICP, uloží registraci jako malý projektový soubor a zapíše zaregistrovaný mrak jako jeden soubor LAS nebo E57. Viz [Registrace více skenů do jednoho](topic:register-scans).
- **Export USD.** {{cmd:USDOUT}}, nebo {{cmd:EXPORT3D}} › {{ui:USD}}, zapíše tělesa z karty 3D jako `.usda`, `.usdc` nebo `.usdz`. Viz [Export 3D modelu jako USD](topic:usd).
- **Výpočty na kartě 3D.** Tam, kde se nástroje karty 3D ptají na vzdálenost, můžete napsat výpočet, jako na příkazovém řádku. Viz [Aritmetika v zadané hodnotě](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Výroba

- **Pošlete výkres do laseru.** {{cmd:LASER}}, nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Laser…}}, otevře panel nad výkresem: každá vrstva řeže, rýsuje rýhy, gravíruje čáry, vyplňuje tvary, gravíruje obrázek, nebo se neodesílá, s výkonem, rychlostí a průchody. Náhled sleduje vaše úpravy, {{ui:Uložit G-code…}} zapíše G-code režimu laseru GRBL a v Chrome nebo Edge může panel zarámovat úlohu a odeslat ji přes USB. Nastavení se ukládá ve výkresu (DWG a DXF). Viz [Odeslání výkresu do laseru](topic:laser-cutting).
- **Symboly instalací budov v doplňku Elektro.** Datové, telefonní a TV zásuvky, klíčové a časové spínače, termostat, únikové označení, detektory, tlačítko hlásiče a siréna, ventilátor, ohřívač vody, sporák, nabíjecí bod pro elektromobily, elektroměr a podružný rozvaděč a symboly RCD a RCBO. Obvod může nést RCD, rozpis rozvaděče má sloupec RCD a kontroly označují zásuvkové obvody bez RCD 30 mA nebo nižšího. Jde o připomínku při plánování, nikoli o kontrolu norem.
- **Doplněk P&ID.** P&ID kreslí procesní schémata: symboly s přípojnými body, procesní a signálové čáry, štítky, čísla čar, seznamy čar, zařízení, přístrojů a armatur (CSV nebo sešit) a kontroly. Je součástí CadCraft a je vypnutý, dokud jej nezapnete v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Doplňky}}. Je to pomůcka pro kreslení, nikoli inženýrské schválení, a jeho slova jsou zatím jen v angličtině.

### Začínáme a obrazovka

- **Průvodce prvním výkresem.** {{cmd:TOUR}} (nebo {{ui:Absolvovat prohlídku}} na úvodní kartě) vás provede šesti kroky ve skutečném výkresu: úsečka, kružnice, přesun, oříznutí, smazání a kóta. Spustí se sám, když CadCraft poprvé otevře prázdný výkres. Viz [Dáváte přednost vedení?](topic:getting-started#prefer-to-be-guided)
- **Přehled příkazů a mapa příkazů.** [Přehled příkazů](topic:cheat-sheet) obsahuje 40 běžných příkazů na jedné stránce, také jako PDF k tisku, a [mapa příkazů](topic:command-map) vypisuje příkazy s jejich krátkými názvy, od A do Z.
- **Panel nástrojů na libovolné straně.** {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Poloha panelu nástrojů}}: nahoře (jako dřív), dole, vlevo nebo vpravo, nebo napište {{cmd:TOOLBARDOCK}}. Viz [Poloha panelu nástrojů](topic:settings#toolbar-position).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Řádky panelu nástrojů}}: zalomit podle místa, 2 řádky nebo 1 řádek, pro panel nástrojů CadCraft a styly Drafting classic a Ribbon. {{key:Shift+Ctrl+F1}} je přepíná, {{key:Ctrl+F1}} přepíná to, co tlačítka ukazují, a {{cmd:TOOLBARROWS}} a {{cmd:TOOLBAR}} je nastavují. Úvodní nápověda má tlačítko zavřít. Díky GJoe2, který to poslal jako pull request. Viz [Řádky panelu nástrojů](topic:settings#toolbar-rows).

### V CadCraft Studio

- **Historie.** {{cmd:HISTORY}} (`HIST`), nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Historie…}}: kopie, které Studio uchovává, když výkres otevřete a uložíte, a cloudové verze výkresu, pokud jste jej otevřeli z cloudu. Otevřete nebo obnovte jednu, nebo porovnejte dvě, s tím, co bylo přidáno, odebráno a změněno, zvýrazněno barvou. Viz [Historie](topic:history).
- **acad.lsp a acaddoc.lsp.** Zvolte podpůrnou složku v {{cmd:APPLOAD}}: tyto dva soubory se načtou při spuštění CadCraft (acaddoc.lsp znovu pro každou novou kartu výkresu) a `S::STARTUP` běží po nich. Viz [Načítání aplikací](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialog Vykreslení v samostatném okně.** Tlačítko v jeho záhlaví jej přesune do okna, které můžete dát na jiný monitor. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).

### Pro AI asistenty

- **Soubory podle názvu ve složkách, které zvolíte.** V CadCraft Studio může asistent otevírat, ukládat a vykreslovat soubory podle názvu a předat příkazu soubor, o který si řekne (INSERT ze souboru, export COUNT, SAVEAS, PLOT), ale jen uvnitř složek, které přidáte v {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Složky, které smí použít}}. Viz [Nechte jej používat soubory ve složkách, které vyberete](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Méně volání.** Asistent může napsat celý řádek příkazu najednou, nechat příkaz otevřený mezi svými voláními, spočítat objekty podle typu a vrstvy bez jejich vypisování a vložit blok i s hodnotami atributů v jednom kroku.
- **Bez okna.** Příkazový řádek `cadcraft` zapisuje vykreslení SVG a převádí, vykresluje, kontroluje nebo popisuje najednou mnoho souborů. Balíček MCP ještě není zveřejněn. Viz [Práce se soubory bez otevření CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Změněno

- **Touchpad posouvá.** Pohybem dvou prstů na touchpadu se 2D pohled pohybuje za nimi; roztažením a sevřením prstů a kolečkem myši se přibližuje. Viz [Myš, touchpad a dotyk](topic:mouse-trackpad-touch).
- **Objekty OLE se zachovávají.** Vložené objekty DXF se zobrazují jako svůj obrázek nebo jako popsaný rámeček a DXF 2000 je ukládá zpět. Objekty DWG se zachovávají a zapisují zpět při uložení jako DWG, ale zatím se nezobrazují. Dříve se při uložení ztratily. Viz [Objekty z jiných programů (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jednotky nového výkresu** se řídí jednotkou, kterou označíte hvězdičkou v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}}.

## Opraveno

- Rozvržení, která se otevírala prázdná, nebo ztratila výřez a místo něj ukazovala celý model, se nyní otevírají se svými skutečnými výřezy. Rozvržení bez odkazu na svůj obsah se zachová a zpráva o otevření to uvede.
- Soubory DXF ve starších kódových stránkách zobrazovaly zkomolený cyrilský a korejský text. Nyní se čtou správně.
- Odstavcový text z jiných programů při otevření ztrácel formátování a při uložení se zapisoval jako prostý.

## Ve všech aplikacích

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má po jednom seznamu pro délku, plochu, objem, úhel a sklon, s přesnými velikostmi podle definic jednotek (americká geodetická stopa je vlastní jednotka). Vypněte jednotky, které nikdy nepoužíváte, a vypadnou ze seznamů jednotek; označte jednu hvězdičkou a nová práce začne v ní. Soubor si vždy ponechá vlastní jednotku. V CadCraft nastaví hvězdička jednotky nového výkresu, pokud je to jednotka, kterou výkres může nést; vlastní pole {{ui:Jednotky}} v CadCraft zatím přepínače nesleduje. Jakmile výkres jednotky má, může zadaná délka nést značku libovolné jednotky. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozvržení a panely, které se schovávají.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} se vejde na obrazovku více (dotykové obrazovky a telefony si ponechají velká tlačítka). Každý boční panel má štíhlý pruh záhlaví: přetažením jej ukotvíte, nebo uvolníte jako plovoucí; pustíte-li jej na pruh jiného panelu, sdílí se jeden rámec jako karty; připnutím jej můžete zasunout k okraji, nebo jej skryjete a vrátíte z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se přesouvají.** Dialog přetáhněte za jeho záhlaví mimo výkres; vrátí se tam, kde jste jej nechali. Dvojklikem na záhlaví jej znovu vycentrujete. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).
- **Recepty pro AI asistenty.** Deset vypracovaných požadavků pro vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, kontrolovat výkresy, položit modelu otázky, sečíst výkaz výměr, zkusit variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý zopakovaný našimi testy. Aplikace žádnou AI neobsahují. Viz [Recepty pro AI asistenty](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** nyní mají všechna slova aplikací jako koncepty, které zatím nepřečetl rodilý mluvčí. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** řekne, proč kontrola aktualizací selhala (pro váš systém zatím není soubor, není síť, špatný podpis), místo aby jen napsala „Hotovo“, a přestane znovu zobrazovat kartu Novinky, kterou jste zavřeli, dokud nevyjde novější verze.

## Ještě není v této verzi

- **Verze 0.7 nemá podepsaný kód.** Podepisování a balíček Microsoft Store se přesunuly do verze 0.8, protože ověření certifikátu ještě neprošlo. Zkontrolujte SHA-256 u každého souboru na getcadcraft.com/download. Ve Windows, zastaví-li SmartScreen instalátor, zvolte {{ui:Další informace}}, pak {{ui:Přesto spustit}}. Na Macu při prvním spuštění klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v obchodě s aplikacemi a zatím není ani sestavení pro iPad nebo iPhone.
- Seznamy úhlů a sklonu v {{ui:Jednotky}} se ukládají, ale zatím je žádné pole nečte.
- Objekty OLE v DWG se zachovávají, ale nezobrazují se, a obrázky metasouboru uvnitř objektů OLE se nekreslí.
- Čtení tabulek stylů vykreslení (soubory CTB) z jiných programů čeká na vzorový soubor.
- Starší asijský text zapsaný kódy `\M+` se čte, ale zatím nebyl ověřen proti souboru z jiného programu.
- Podložky PDF: obrázky uvnitř strany se zobrazují na obrazovce, ale nevykreslují se, vykreslení asistenta podložky vynechává a zatím nebylo ověřeno, jak je čtou jiné programy s uloženým oříznutím a měřítkem.
- Historie: CadCraft zatím neodesílá své uložení do cloudu, takže cloudové verze jsou ty, které se uložily z jiných zařízení a z webu. Historie je jen v CadCraft Studio.
- Zda si Studio po restartu ponechá podpůrnou složku acad.lsp, zatím nebylo ověřeno; pokud se zeptá, zvolte složku znovu v APPLOAD.
- Panel Laser zatím nebyl vyzkoušen na skutečném laseru: každé nastavení zkoušejte na odpadovém materiálu. CadCraft Studio nemá Web Serial, takže v Studio panel ukládá jen G-code.
- Registrace skenů byla zkoušena na vymyšlených skenech, zatím ne na skutečné sadě ze skeneru.
- Posun dvěma prsty byl zkoušen se simulovanými událostmi touchpadu, zatím ne na skutečném touchpadu.
- {{cmd:PEDIT}} nemá volbu Upravit vrchol (použijte úchyty nebo Vlastnosti). Odsazení, oříznutí, prodloužení, zaoblení, přerušení a spojení zatím nepřijímají spliny; výška splinu (Z) se nezachovává.
- Nový odstavcový text zatím nelze opatřit kódy formátování a vykreslení SVG zobrazuje formátovaný text v jedné barvě.
- Volba Celý výkres u WBLOCK zapíše jen model, ne listy. Aktuální styl kót se do souboru neukládá: výkres se otevře s aktuálním stylem Standard.
- Styly nabídky pásu karet zatím nemají seznamy vrstev, barev ani typů čar: použijte panel {{ui:Vrstvy}} a {{ui:Vlastnosti}}.
- Mračna bodů se zatím neukládají do výkresu ani nevykreslují a soubory E57 se otevírají do 6 milionů bodů a 512 MB.
- Uložené soubory DWG z CadCraft zatím nebyly ověřeny v samotném AutoCADu.

Vše ostatní je v [Ještě není hotovo](topic:not-built-yet).

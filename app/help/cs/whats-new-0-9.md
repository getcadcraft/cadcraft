---
title: Co je nového ve verzi 0.9 (dřívější)
summary: Šrafy sledující svou hranici, skupiny vrstev, podlaží nad sebou, 2D chytré stěny s dveřmi a okny, textové styly a editor formátovaného textu, plovoucí příkazový řádek, přichytávání na mřížku, deset způsobů kreslení oblouku a panel Dokumenty.
keywords: co je nového 0.9, dřívější verze, co je nového, 0.9, poznámky k vydání, seznam změn, šrafa, přidružená šrafa, hatchedit, soubor pat, soubor vzoru, skupiny vrstev, laygroup, podlaží, podlaží nad sebou, floorlayers, chytré stěny, stěna, dveře, okno, nástroje stěn, textový styl, styl, editor mtext, odstavcový text, formátování, plovoucí příkazový řádek, příkazový řádek, horní oblast, kompaktní, přichytit na mřížku, mřížka, f9, oblouk, panel dokumentů, check out, ocelové profily ve Velké Británii, draw.io, thajský text, dxf r12, co je nového, změny, 0.8, 0.8.1, verze, nové funkce, automatické doplnění, duch, karta, sketchfix, photosketch, autosheet, details, gridmove, autodim, značky, redline, sloučení, git, fossil, access, kreslení bez zraku, čtečka obrazovky, limity, azimuty, aunits, shx, diagram, ole, historie, porovnání, slovně, vlastnosti, stopy a palce, natáhnout, jazyky, vstupní zařízení, problémy, živě, asistenti
from: 3451e64c
---

Toto se změnilo v CadCraftu 0.9 oproti 0.8.1. CadCraft je 2D a 3D kreslicí aplikace CadCraft Studio 0.9 a jeho osmi aplikací. Verze 0.9 dokončuje půdorysné kreslení, přidává textové styly a skutečný editor textu a dává více místa na obrazovce.

## Nové

### Půdorysné kreslení

- **Šrafy sledující svou hranici.** {{cmd:HATCH}} se spojí s tím, co je ohraničuje. Přesunete-li, otočíte-li nebo zvětšíte-li hranici, šrafa i její vzor jdou s ní; tvar upravíte a šrafa se přepočítá. {{cmd:HATCHEDIT}} (`HE`) šrafu dodatečně změní a spojení vytvoří nebo ukončí. Viz [Šrafy a výplně ploch](topic:hatch).
- **Soubory vzorů šrafování.** U výzvy {{cmd:HATCH}} `Pick internal point` napište `F` (Soubor vzoru) a vyberte soubor `.pat`. Vyzkoušeny byly jen soubory psané v obvyklém formátu.
- **Skupiny vrstev.** V {{ui:Nástroje}} na panelu {{ui:Vrstvy}}: {{ui:Nová skupina}}, {{ui:Přidat hotové skupiny}}, {{ui:Seskupit podle názvu}} a {{ui:Najít vrstvu}}; nebo napište {{cmd:LAYGROUP}} (`LG`). Viz [Uspořádání výkresu do vrstev](topic:layers#group-layers).
- **Podlaží nad sebou.** {{cmd:FLOORS}} (`FLR`), nebo {{ui:Podlaží…}} v nabídce {{ui:Více}} skupiny {{ui:Pohled}}. Výřez na listu může ukazovat jedno podlaží pod {{ui:Zobrazené podlaží}} ve Vlastnostech. {{cmd:FLOORLAYERS}} promění podlaží ve vrstvy pro soubor, který půjde jinému člověku. Viz [Podlaží v jednom výkresu](topic:floors).
- **2D chytré stěny, dveře a okna.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) a {{cmd:DELOPENING}}. Rohy, T spoje a křížení se pro vás spočítají. Stěny si vedou záznam o tom, jak se spojují, a Vlastnosti získají {{ui:Zakázat spojení na začátku}} / {{ui:na konci}}, {{ui:Čáru umístění}} a upravitelnou {{ui:Délku}}. Viz [Kreslení 2D stěn, dveří a oken](topic:walls-2d).
- **Nástroj stěn na půdorysných stěnách.** Napište {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} a další. Tlačítka na panelu zatím nemají. Viz [Tvary stěn, řezy, odsazení a zámky pro 2D stěny](topic:wall-tools-2d).

### Text

- **Textové styly.** {{cmd:STYLE}} (`ST`), nebo {{ui:Styl textu}} na panelu {{ui:Kreslení}}: pojmenované styly s písmem, výškou, poměrem šířky a sklonem. Viz [Nastavení písma a velikosti textu pomocí textových stylů](topic:text-styles).
- **Editor formátovaného odstavcového textu.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} nebo dvojklik na text otevře okno s písmem, velikostí, tučným, kurzívou, podtržením, přeškrtnutím, barvou, zarovnáním a znaky stupně, plus-minus a průměru, a také {{ui:OK}} a {{ui:Zrušit}}. Viz [Formátování odstavcového textu](topic:format-paragraph-text).
- **Diagram z XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) také čte vložené XML draw.io. Viz [Kreslení diagramu z textu](topic:text-to-diagram).
- **Thajský text v PDF vykreslení.** Dříve se tiskl jako otazníky.

### Více místa a pomůcky pro kreslení

- **Plovoucí, tenčí příkazový řádek a kompaktní horní oblast.** Přetáhněte úchyt příkazového řádku, aby se vznášel, přetáhněte jeho horní okraj pro méně řádků, {{key:F2}} otevře historii. {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Příkazový řádek}} a volby horní oblasti mají tytéž nastavení. Viz [Nastavení](topic:settings#command-line).
- **Nabídka přichytávání k objektům.** Pravým klikem na {{ui:Přichytávání}} ve stavovém řádku, nebo napište {{cmd:OSNAP}}.
- **Přichytávání na mřížku.** Tlačítko {{ui:Přichycení na mřížku}} ve stavovém řádku, nebo {{key:F9}}: zvolené body jdou k nejbližšímu bodu mřížky, když žádné přichycení k objektu bod nezachytilo.
- **Oblouk desetkrát a Pokračovat.** {{ui:Oblouk}} na panelu {{ui:Kreslení}} nebo {{cmd:ARC}}: tři body, rodina Start/Střed/Konec a rodina Střed/Začátek/Konec, a Pokračovat (stiskněte {{key:Enter}} u počátečního bodu) od poslední čáry, oblouku nebo mnohočáry.
- **Panel Dokumenty.** {{cmd:DOCUMENTS}} (`DOCS`) nebo {{ui:Dokumenty…}} v nabídce {{ui:Více}} skupiny {{ui:Pohled}}: revize, stav a vypůjčení pro každý výkres ve složce projektu. Otevře se jako dialog uprostřed. Viz [Dokumenty](topic:documents).

### Soubory

- **Velikosti ocelových profilů podle Velké Británie.** 976 průřezů na panelu Standard, psaných jako na výkresech (například `305x165x40 UB`).
- **Jihoafrické balíčky** (kreslířská praxe a stavební předpisy) jako balíčky doplňku Stavební předpisy. Čísla nejsou ověřena.
- **Doplňky pro CadCraft,** přidávané na vyžádání a ve výchozím stavu vypnuté: návrh vnitřního osvětlení, návrh čipů (HDL na rozložení), gravírování na router, simulace obvodů, rozvodové řetězové kolečka a balíčky stavebních předpisů pro jednotlivé země.

## Opravené

- Přesun, otočení nebo změna měřítka šrafy zanechaly její vzor pozadu.
- {{cmd:GRIDMOVE}} táhl celou půdorysnou stěnu, která začíná jen na mřížkové čáře. Stěna se nyní posuzuje podle svých konců.
- Mřížka se zobrazovala jen uvnitř limitů výkresu, i když byly limity vypnuté.
- Seznam bloků v bočním panelu se posouvá a název, který není blokem, vypíše bloky začínající tímto písmem („Did you mean“).
- Soubory DXF R12, které AutoCAD odmítl („Unknown group 1001 for table“), se zde nyní otevřou.
- Velmi velké soubory (zhruba 70 000 entit a více) se nedaly otevřít s hlášením „Maximum call stack size exceeded“.
- Soubory DWG z AutoCADu 2018 a novějšího s vysokou verzí údržby se nedaly otevřít s hlášením „bad BITLONG code 11“.
- V okně odstavcového textu nová velikost zadaná pro vybranou část ponechá výběr.

## Ve všech aplikacích

Bublinové nápovědy u každého ovládacího prvku, který má nápovědu, úvodní tip, který můžete zavřít, karty, které se posouvají, když se nevejdou, a titulek karty prohlížeče, který následuje otevřený výkres (`<drawing> - CadCraft | CadCraft`). {{ui:Nastavení}} › {{ui:Rozložení}} je nyní rozbalovací seznam voleb o dvou řádcích. Seznam jazyků v {{ui:Nastavení}} je delší než ve verzi 0.8. Živá spolupráce, kolekce knihovny a jednotky hmotnosti a teploty jsou popsány v poznámkách ke Studiu.

## Poctivé limity

- Odstavcový text nemá odrážky ani číslované seznamy, pravítko tabulátorů ani zarovnání do bloku. Vykreslená PDF nastavují text v Helvetice.
- Půdorysné stěny jsou rovné, takže oblouk se kreslí jako krátké stěny. Kontrola nástroje stěn komunitou je ještě na čekání.
- Skupiny vrstev nejsou zapsané ve formátu AutoCADu, takže AutoCAD ukáže plochý seznam. Ostatní programy ukazují všechna podlaží dohromady, pokud nespustíte {{cmd:FLOORLAYERS}}.
- Panel Dokumenty nezkoušeli dva lidé na skutečném sdíleném úložišti. Gravírování na router nebylo spuštěno na žádném skutečném stroji. Odhad osvětlení byl ověřen proti sledování fotonů, ne proti jinému programu. Inženýrské doplňky jsou kontrolní pomůcky, ne náhrada za posouzení inženýrem.
- Jazyky jiné než angličtina jsou strojové návrhy a některá nová slova jsou jen anglicky.

## Dřívější verze: 0.8 a 0.8.1

Toto se změnilo v CadCraftu 0.8 a 0.8.1 oproti 0.7. Verze 0.8 (1. listopadu 2026) přidává pomocníky pro kreslení, které pracují z vašeho vlastního výkresu, pravidly na vašem počítači a bez modelu, a verze 0.8.1 (2. listopadu 2026) opravuje chyby nahlášené po ní.

### Nové

**Kreslení, které dokončí vaši myšlenku**

- **Duch ukazuje, co přijde dál.** Když neběží žádný příkaz, šedý přerušovaný duch ukazuje, co říkají vzory vašeho výkresu, že přijde dál: další sloupek ve stejné rozteči, další krok schodiště, chybějící stěna místnosti. Stiskněte {{key:Tab}}, chcete-li jej nakreslit jako jeden krok zpět, nebo {{key:Esc}}, chcete-li jej zavřít. Dívá se jen na nejnovější objekty, takže zůstává plynulý i u velkého výkresu. Vypněte jej v {{ui:Nastavení}} › {{ui:CadCraft}}, nebo příkazem {{cmd:AUTOCOMPLETE}} `Off`.
- **Další bod při kreslení úsečky.** Uprostřed {{cmd:LINE}} nebo {{cmd:PLINE}} je duch další bod: další krok schodiště, čtvrtý roh obdélníku, nebo bod, který jej uzavírá. Přiblížte kurzor a stiskněte {{key:Tab}}, jako byste tam klikli.
- **Skicy perem se stávají přesnou geometrií.** {{cmd:SKETCHFIX}}: kreslete hrubé tahy perem, myší nebo prstem a každý se stane čistou úsečkou, kružnicí, obloukem, obdélníkem nebo mnohočárou, přichycenou k tomu, co je už nakresleno. Viz [Kreslení perem a získání přesné geometrie](topic:sketch-with-a-pen).
- **Fotografie skici se stane výkresem.** {{cmd:PHOTOSKETCH}} (`PSK`) najde papír na fotografii, narovná perspektivu, použije velikost papíru a měřítko, která zadáte, a obtáhne tahy pera do čar, oblouků a kružnic, s vrstvou pro každou barvu pera. Písmo se neobtahuje.
- **Kótování podle pravidel.** {{cmd:AUTODIM}} (`ADIM`) vytvoří řetězce kót podél stran, které zvolíte, celkový rozměr, šířky otvorů, průměry děr a s `Grid` také rozteče mřížky. Nikdy nezopakuje kótu, která už tam je.
- **Posuňte čáru mřížky a sada ji následuje.** {{cmd:GRIDMOVE}} (`GM`): stěny končící na čáře mřížky se s ní natáhnou, stěny podél ní, sloupky, jejich bublina a štítek se pohnou, a kóty na ní měří novou rozteč. Jeden krok zpět.

**Listy, detaily a značky**

- **Listy, které se rozloží samy.** {{cmd:AUTOSHEET}} vezme vaše pojmenované pohledy (nebo jednotlivé části modelu), vybere velikost papíru a standardní měřítko a rozmístí pohledy na nové listy s razítkem a popiskem názvu a měřítka. Vše zůstává upravitelné. Viz [Nechte listy rozložit za mě](topic:lay-out-sheets-for-me).
- **Detaily vaší firmy, nabízené během kreslení.** {{cmd:DETAILS}} (`DET`) uchovává vaše vlastní detailní bloky. Když výběr odpovídá jednomu podle slov na jeho vrstvách, názvech bloků a poznámkách, stavový řádek to řekne; zvolte jej a umístěte. {{cmd:DETAILS}} › Share vloží váš seznam do složky Dokumenty a přinese to, co váš tým přidal. Nastavení nabídky vypne.
- **Značky na blocích.** {{cmd:TAGS}} definuje značku (její druh, hodnoty, které smí nabývat, bloky, na něž se vztahuje), nastaví ji na vybrané odkazy na bloky a vypíše je jako rozpis, který můžete uložit jako CSV. Definice se uchovávají v DWG. Viz [Značky](topic:tags).
- **Limity výkresu.** {{cmd:LIMITS}} nastaví obdélník pro výkres: mřížka jej vyplní a zobrazení Vše jej ukáže. Limity se zobrazují jako obrys a ukládají se v DWG a DXF spolu s limity papíru. Viz [Nastavení limitů výkresu](topic:drawing-limits).

**Práce s ostatními lidmi a jinými programy**

- **Přeměna revizní poznámky na revizi.** {{cmd:REDLINE}} čte balíček, který zapisuje MarkupCraft, a vypíše každou změnu. Každou přijměte nebo zamítněte s poznámkou; přijaté dostanou revizní oblak a revizní záznam v jednom kroku zpět a uložíte soubor odpovědí, který uzavře poznámky v MarkupCraftu. Viz [Přeměna revizní poznámky na revizi](topic:redline-to-revision).
- **Výkresy, které git a Fossil umějí sloučit.** Je-li {{ui:Soubory vhodné pro sloučení}} zapnuto v {{ui:Nastavení}} › {{ui:CadCraft}}, každý objekt dostane klíč, který se nikdy nemění (soubory jsou asi o 10 procent větší). `cadcraft merge base ours theirs` pak sloučí úpravy dvou lidí na jednom DWG nebo DXF objekt po objektu a hlásí jen místa, kde oba změnili tutéž věc. Viz [Sloučení úprav dvou lidí na jednom výkresu](topic:merge-drawings).
- **Co se změnilo, slovy.** V Historii dává Porovnání prostý seznam: kde se věci změnily, jak velká jsou ta místa, co bylo přidáno, odstraněno nebo změněno, a text, který se upravil. Viz [Řekněte slovy, co se změnilo](topic:changes-in-words).
- **Azimuty a úhly.** Napište směr jako geodetický azimut, například N45°23'30"E, nebo ve stupních, minutách a sekundách, kdekoli se žádá úhel; AUNITS nastaví, jak se úhly zobrazují. Viz [Zadávání a zobrazení azimutů a úhlů](topic:bearings-and-angles).
- **Vlastní písma SHX.** Dejte CadCraftu složku písem SHX a textové styly, které je pojmenují, se kreslí v nich, na obrazovce i ve vykreslení. Viz [Kreslení textu ve vlastních písmech SHX](topic:shx-fonts).
- **Diagram z textu.** {{cmd:DIAGRAM}} čte vývojový diagram Mermaid, diagram komponent PlantUML, D2 nebo seznam od-do a nakreslí bloky a spojnice, které můžete upravit. Viz [Kreslení diagramu z textu](topic:text-to-diagram).
- **Objekty OLE v DWG.** {{cmd:OLELIST}} vypíše objekty OLE, které DWG nese a které CadCraft sám neumí umístit, a umístí kopii obrázku, kam řeknete. Viz [Obrázky](topic:pictures#objects-from-other-programs-ole).
- **Vaše výpočty zůstávají s výkresem.** Výpočetní listy a důvody návrhu se uchovávají v DWG spolu s tabulkou tříd.

**Kreslení bez zraku**

- Zapněte {{ui:Kreslení bez zraku}} v {{ui:Nastavení}} (nebo napište {{cmd:ACCESS}} a odpovězte `On`). CadCraft říká každý příkaz a výsledek přes čtečku obrazovky, popisuje výkres a to, co je blízko kurzoru, nechá vás posouvat kurzor a brát body z klávesnice a přehrává zvuk pro každé přichycení a každý úchyt. Tam, kde váš prohlížeč umí na vašem počítači rozpoznávat řeč, lze příkazy vyslovovat. Viz [Kreslení bez zraku](topic:draft-without-sight).

**Ve všech aplikacích**

- **Jazyky.** 54 jazyků; deset je nových (litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština, uzbečtina). Jazyky jiné než angličtina jsou strojové návrhy, dokud je nepřečte rodilý mluvčí.
- **Vstupní zařízení.** Trackpad, pero, 3D myš, herní ovladač a ovládání MIDI.
- **Řádky panelu nástrojů a mřížka vlastností.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí Zalomit, 2 řádky nebo 1 řádek v ostatních aplikacích. CadCraft má vlastní nastavení v {{ui:Nastavení}} › {{ui:CadCraft}} (viz [Řádky panelu nástrojů](topic:settings#toolbar-rows)). Sdílená mřížka vlastností je ve třech jiných aplikacích, ne v CadCraftu.
- **Problémy, Živě a doplňky.** Sdílený panel Problémy, který varuje ve všech aplikacích, pohled Živě na to, kdo je kde v CadCraft Studiu (viz [Práce na jednom výkresu společně](topic:work-live)), a seznam doplňků.
- **Připojte svou AI.** Jedno připojení z CadCraft Studia ke všem osmi aplikacím, s úrovní jen pro čtení, navrhování nebo úpravy pro každou aplikaci a srozumitelným záznamem toho, co asistent udělal. CadCraft nemá vlastní AI a Zeptat se ve všech aplikacích používá AI, kterou připojíte.

### Opraveno ve verzi 0.8.1

- **Vlastnosti ukazovaly 150 místo 12'-6"** ve výkresech ve stopách a palcích. Pole, která čte sama aplikace, si zase drží svůj text.
- **Soubory DWG, jejichž sekce tříd byla čtena jako špatný typ** (GitHub cadcraft#5), se nyní otevřou správně.
- **Kurzor se už nezobrazuje za vyskakovacími okny.**
- **Studio a balíčkové vydání mohou přepnout jazyk za běhu.** Dříve byla jen angličtina. Zatím netestováno na každé platformě: řekněte nám, pokud se jazyk nezmění.
- **Tablety na výšku dávají volné místo mřížky plátně** a režim listů začíná na 760 px nebo méně.
- **STRETCH s křížícím oknem a LIMITS** byly nahlášeny ve Studiu 0.8.0 a ve webovém sestavení 0.8 už byly správně; instalátor hlásícího byl starší. Studio 0.8.1 je obsahuje.

### Zatím není v této verzi

- **0.8 a 0.8.1 nejsou podepsány kódem.** Windows může varovat (zvolte {{ui:Více informací}}, potom {{ui:Přesto spustit}}); na Macu klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. Sestavení pro obchody jsou pozastavena a sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu vytvořeno.
- **Skici perem a fotografie skic** byly zkoušeny jen na vymyšlených fotografiích a myši, ještě ne se skutečným perem, dotykovou obrazovkou nebo ruční skicou na papíře.
- **Kreslení bez zraku** bylo testováno automatickými kontrolami, ještě ne se čtečkou obrazovky nebo slepým testerem.
- **Sdílení detailů** neprošlo kontrolou dvou lidí a složka Team Cloud Plan jako složka Dokumenty není hotová.
- **Sloučení** funguje pro soubory DWG a DXF CadCraftu; pro soubory ostatních aplikací není hotové.
- **Zpět napříč okny:** CadCraft hlásí každý dokončený krok, ale Studio zatím nemá jedno Zpět pro všechny aplikace; každá aplikace vrací zpět své vlastní kroky.
- **OLE objekty v DWG** se uchovávají, ale nekreslí se na svém místě.
- **Čtení tabulek stylů tisku (soubory CTB)** z jiných programů je hotové, ale nebylo ověřeno proti souboru z jiného programu.
- **Připojte svou AI:** připojení jedním kliknutím ve Studiu, hostovaný konektor pro AI v prohlížeči, váš vlastní klíč API uvnitř Studia a zveřejněný balíček MCP nejsou v této verzi slíbeny.

Předchozí verzi najdete v [Co je nového ve verzi 0.7](topic:whats-new-0-7).

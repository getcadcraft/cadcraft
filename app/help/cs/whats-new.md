---
title: Novinky ve verzi 0.9
summary: Šrafy, které sledují svou hranici, skupiny vrstev, naskládaná podlaží, 2D chytré stěny s dveřmi a okny, textové styly a formátovaný editor textu, plovoucí příkazový řádek, přichycení na mřížku, deset způsobů kreslení oblouku a panel Dokumenty.
keywords: novinky, 0.9, poznámky k vydání, seznam změn, šrafa, přidružená šrafa, hatchedit, soubor pat, soubor vzoru, skupiny vrstev, laygroup, podlaží, naskládaná podlaží, floorlayers, chytré stěny, stěna, dveře, okno, nástroje stěn, textový styl, styl, editor mtext, odstavcový text, formátování, plovoucí příkazový řádek, příkazový řádek, horní oblast, kompaktní, přichycení na mřížku, f9, oblouk, panel dokumentů, převzetí k úpravě, britské profily oceli, draw.io, thajský text, dxf r12, co je nového, poznámky k vydání, změny, 0.8, 0.8.1, verze, nové funkce, automatické doplňování, duch, tab, sketchfix, photosketch, autosheet, detaily, gridmove, autodim, značky, redline, sloučení, git, fossil, access, kreslení bez zraku, meze, azimuty, aunits, shx, diagram, ole, historie, porovnání, slovně, vlastnosti, stopy a palce, roztažení, jazyky, vstupní zařízení, problémy, živě, asistenti
from: 8b6dea0b
---

Tohle se změnilo v CadCraft 0.9 oproti verzi 0.8.1. CadCraft je 2D a 3D kreslicí aplikace CadCraft Studio 0.9 a jeho osmi aplikací. Verze 0.9 dokončuje kreslení půdorysů, přidává textové styly a skutečný editor textu a dává více místa na obrazovce.

## Nové

### Kreslení půdorysu

- **Šrafy, které sledují svou hranici.** {{cmd:HATCH}} se propojí s tím, co je ohraničuje. Přesunete-li, otočíte nebo změníte měřítko hranice, šrafa i její vzor ji sledují; změníte-li její tvar, šrafa se přepočítá. {{cmd:HATCHEDIT}} (`HE`) šrafu dodatečně upraví a propojení vytvoří nebo ukončí. Viz [Šrafy a vyplněné plochy](topic:hatch).
- **Soubory vzorů šrafování.** U dotazu {{cmd:HATCH}} `Vyberte vnitřní bod` napište `F` (Soubor vzoru) a zvolte soubor `.pat`. Zkoušeny byly jen soubory zapsané v obvyklém formátu.
- **Skupiny vrstev.** V {{ui:Nástroje}} na panelu {{ui:Vrstvy}}: {{ui:Nová skupina}}, {{ui:Přidat hotové skupiny}}, {{ui:Seskupit podle názvu}} a {{ui:Najít vrstvu}}; nebo napište {{cmd:LAYGROUP}} (`LG`). Viz [Uspořádání výkresu do vrstev](topic:layers#group-layers).
- **Naskládaná podlaží.** {{cmd:FLOORS}} (`FLR`), nebo {{ui:Podlaží…}} v nabídce {{ui:Více}} skupiny {{ui:Pohled}}. Výřez na listu může zobrazit jedno podlaží pod {{ui:Zobrazené podlaží}} ve Vlastnostech. {{cmd:FLOORLAYERS}} promění podlaží ve vrstvy pro soubor, který půjde jinému člověku. Viz [Naskládání podlaží v jednom výkresu](topic:floors).
- **2D chytré stěny, dveře a okna.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) a {{cmd:DELOPENING}}. Rohy, spoje T a křížení se vypočítají za vás. Stěny si vedou záznam o tom, jak se spojují, a Vlastnosti dostanou {{ui:Nepovolit spojení na začátku}} / {{ui:Nepovolit spojení na konci}}, {{ui:Čára polohy}} a upravitelnou {{ui:Délku}}. Viz [Kreslení 2D stěn, dveří a oken](topic:walls-2d).
- **Nástroje stěn u půdorysných stěn.** Napište {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} a ostatní. Zatím nemají tlačítka na panelu nástrojů. Viz [Tvary, řezy, odsazení a zámky 2D stěn](topic:wall-tools-2d).

### Text

- **Textové styly.** {{cmd:STYLE}} (`ST`), nebo {{ui:Styl textu}} na panelu {{ui:Kreslení}}: pojmenované styly s písmem, výškou, koeficientem šířky a sklonem. Viz [Nastavení písma a velikosti textu pomocí textových stylů](topic:text-styles).
- **Editor formátovaného odstavcového textu.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} nebo dvojklik na text otevře okno s písmem, velikostí, tučným, kurzivou, podtržením, přeškrtnutím, barvou, zarovnáním a značkami stupně, plus-minus a průměru, plus {{ui:OK}} a {{ui:Zrušit}}. Viz [Formátování odstavcového textu](topic:format-paragraph-text).
- **Diagram z XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) čte také vložené XML draw.io. Viz [Kreslení diagramu z textu](topic:text-to-diagram).
- **Thajský text ve vykreslení PDF.** Dříve se tiskl jako otazníky.

### Více místa a pomůcky pro kreslení

- **Plovoucí, štíhlejší příkazový řádek a kompaktní horní oblast.** Přetažením úchytu příkazového řádku jej uvolníte jako plovoucí, přetažením jeho horní hrany získáte méně řádků, {{key:F2}} otevře historii. {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Příkazový řádek}} a volby horní oblasti mají tatáž nastavení. Viz [Nastavení](topic:settings#command-line).
- **Nabídka uchopení k objektům.** Klepněte pravým tlačítkem na {{ui:Přichytávání}} ve stavovém řádku, nebo napište {{cmd:OSNAP}}.
- **Přichycení na mřížku.** Tlačítko {{ui:Přichycení na mřížku}} ve stavovém řádku, nebo {{key:F9}}: vybrané body přejdou na nejbližší bod mřížky, pokud bod nezachytilo uchopení k objektům.
- **Oblouk deseti způsoby a Pokračovat.** {{ui:Oblouk}} na panelu {{ui:Kreslení}} nebo {{cmd:ARC}}: třemi body, skupina Začátek/Střed/Konec a skupina Střed/Začátek/Konec, a Pokračovat (stiskněte {{key:Enter}} v počátečním bodě) od poslední úsečky, oblouku nebo mnohočáry.
- **Panel Dokumenty.** {{cmd:DOCUMENTS}} (`DOCS`) nebo {{ui:Dokumenty…}} v nabídce {{ui:Více}} skupiny {{ui:Pohled}}: revize, stav a převzetí k úpravě pro každý výkres ve složce projektu. Otevře se jako vycentrovaný dialog. Viz [Dokumenty](topic:documents).

### Soubory

- **Britské rozměry oceli.** 976 profilů na panelu Standard, zadávané tak, jak jsou na výkresech (například `305x165x40 UB`).
- **Jihoafrické balíčky** (praxe kreslení a stavební předpisy) jako balíčky doplňku Stavební předpisy. Čísla nejsou ověřena.
- **Doplňky pro CadCraft,** přidávané na vyžádání a ve výchozím stavu vypnuté: návrh vnitřního osvětlení, návrh čipů (HDL do rozvržení), frézování routerem, simulace obvodů, řetězová kola a balíčky stavebních předpisů pro jednotlivé země.

## Opraveno

- Přesun, otočení nebo změna měřítka šrafy nechaly její vzor na místě.
- {{cmd:GRIDMOVE}} přesunul celou půdorysnou stěnu, která na čáře mřížky jen začínala. Stěna se nyní posuzuje podle svých konců.
- Mřížka se zobrazovala jen uvnitř mezí výkresu, i když byly meze vypnuté.
- Seznam bloků v bočním panelu se posouvá a název, který není blokem, vypíše bloky, které začínají stejně („Měli jste na mysli“).
- Soubory DXF R12, které AutoCAD odmítl („Unknown group 1001 for table“), se nyní otevřou i tam.
- Velmi velké soubory (zhruba 70 000 entit a více) se nedaly otevřít s chybou „Maximum call stack size exceeded“.
- Soubory DWG z AutoCADu 2018 a novějšího s vysokou verzí údržby se nedaly otevřít s chybou „bad BITLONG code 11“.
- V okně odstavcového textu si nová velikost zadaná pro vybranou část zachová výběr.

## Ve všech aplikacích

Bublinové nápovědy (tooltips) u každého ovládacího prvku s tipem, úvodní tip, který můžete zavřít, pruhy karet, které se posouvají, když se nevejdou, a titulek karty prohlížeče, který sleduje otevřený výkres (`<drawing> - CadCraft | CadCraft`). {{ui:Nastavení}} › {{ui:Rozložení}} je nyní rozbalovací seznam dvouřádkových voleb. Seznam jazyků v {{ui:Nastavení}} je delší než ve verzi 0.8. Společná úprava živě, kolekce knihovny a jednotky hmotnosti a teploty jsou popsány v poznámkách CadCraft Studio.

## Upřímně o omezeních

- Odstavcový text nemá odrážky ani číslované seznamy, pravítko tabulátorů ani zarovnání do bloku. Vykreslená PDF sází text písmem Helvetica.
- Půdorysné stěny jsou přímé, takže oblouk se kreslí jako krátké stěny. Ruční ověření nástroje stěn komunitou ještě nebylo provedeno.
- Skupiny vrstev se nezapisují ve formátu AutoCADu, takže AutoCAD ukazuje plochý seznam. Jiné programy zobrazují všechna podlaží najednou, pokud nespustíte {{cmd:FLOORLAYERS}}.
- Panel Dokumenty nezkoušeli dva lidé na skutečné sdílené složce. Frézování routerem nebylo spuštěno na žádném skutečném stroji. Odhad osvětlení byl ověřen proti sledování fotonů, ne v jiném programu. Inženýrské doplňky jsou pomůcky pro kontrolu, nenahrazují posouzení inženýra.
- Jazyky jiné než angličtina jsou strojové koncepty a některá nová slova jsou jen v angličtině.

## Dříve: 0.8 a 0.8.1

Tohle se změnilo v CadCraft 0.8 a 0.8.1 oproti verzi 0.7. Verze 0.8 (1. listopadu 2026) přidává pomocníky pro kreslení, které pracují z vašeho vlastního výkresu, podle pravidel na vašem počítači a bez modelu, a verze 0.8.1 (2. listopadu 2026) opravuje chyby nahlášené po ní.

### Nové

**Výkres, který dokončí vaši myšlenku**

- **Duch ukazuje, co přijde dál.** Když neběží žádný příkaz, šedý přerušovaný duch ukazuje, co podle vlastních vzorů vašeho výkresu přijde dál: další sloupek ve stejné vzdálenosti, další stupeň schodiště, chybějící stěna místnosti. Stisknutím {{key:Tab}} jej nakreslíte jako jeden krok zpět, nebo {{key:Esc}} jej zavřete. Dívá se jen na nejnovější objekty, takže zůstává plynulý i u velkého výkresu. Vypnete jej v {{ui:Nastavení}} › {{ui:CadCraft}} nebo příkazem {{cmd:AUTOCOMPLETE}} `Off`.
- **Další bod při kreslení úsečky.** Uprostřed {{cmd:LINE}} nebo {{cmd:PLINE}} je duch další bod: další stupeň schodiště, čtvrtý roh obdélníku nebo bod, který jej uzavře. Přiblížte kurzor a stiskněte {{key:Tab}}, jako byste tam klepli.
- **Náčrty perem se mění na přesnou geometrii.** {{cmd:SKETCHFIX}}: nakreslete hrubé tahy perem, myší nebo prstem a každý se stane čistou úsečkou, kružnicí, obloukem, obdélníkem nebo mnohočárou, přichycenou k tomu, co už je nakresleno. Viz [Náčrt perem a přesná geometrie](topic:sketch-with-a-pen).
- **Fotografie náčrtu se mění na výkres.** {{cmd:PHOTOSKETCH}} (`PSK`) najde papír na fotografii, narovná perspektivu, použije formát papíru a měřítko, které zadáte, a obkreslí čáry per na vrstvu pro každou barvu pera. Písmo se neobkresluje.
- **Okótujte podle pravidel.** {{cmd:AUTODIM}} (`ADIM`) vytvoří řetězce kót podél stran, které zvolíte, celkový rozměr, šířky otvorů, průměry děr a s `Grid` rozteče mřížky. Nikdy neopakuje kótu, která tam už je.
- **Přesuňte osu a celek půjde za ní.** {{cmd:GRIDMOVE}} (`GM`): stěny, které na ose končí, se s ní natáhnou, stěny podél ní, sloupy, její bublina a štítek se přesunou a kóty na ní měří novou rozteč. Jeden krok zpět.

**Listy, detaily a štítky**

- **Listy, které se rozvrhnou samy.** {{cmd:AUTOSHEET}} vezme vaše pojmenované pohledy (nebo jednotlivé části modelu), zvolí formát papíru a běžné měřítko a umístí pohledy na nové listy s razítkem a popiskem názvu a měřítka. Všechno zůstává upravitelné. Viz [Rozvržení listů za mě](topic:lay-out-sheets-for-me).
- **Detaily vaší firmy, nabízené při kreslení.** {{cmd:DETAILS}} (`DET`) uchovává vaše vlastní detailní bloky. Když výběr odpovídá jednomu podle slov na jeho vrstvách, názvech bloků a poznámkách, stavový řádek to oznámí; zvolte jej a umístěte. {{cmd:DETAILS}} › Share uloží váš seznam do složky Dokumenty a přinese to, co přidal váš tým. Nastavení nabídky vypíná.
- **Štítky na blocích.** {{cmd:TAGS}} definuje štítek (jeho druh, hodnoty, které smí nabývat, bloky, na které se vztahuje), nastaví jej na odkazy na bloky, které vyberete, a vypíše je jako rozpis, který lze uložit jako CSV. Definice se uchovávají v DWG. Viz [Štítky](topic:tags).
- **Meze výkresu.** {{cmd:LIMITS}} nastaví obdélník pro výkres: mřížka jej vyplní a zoom Vše jej ukáže. Meze se zobrazují jako obrys a ukládají se do DWG a DXF spolu s mezemi papíru. Viz [Nastavení mezí výkresu](topic:drawing-limits).

**Práce s ostatními lidmi a jinými programy**

- **Převeďte poznámku na revizi.** {{cmd:REDLINE}} načte balíček, který zapisuje MarkupCraft, a vypíše každou změnu. Každou přijměte nebo odmítněte s poznámkou; přijaté dostanou revizní oblak a revizní záznam v jednom kroku zpět a uložíte soubor odpovědí, který uzavře poznámky v MarkupCraft. Viz [Převedení poznámky na revizi](topic:redline-to-revision).
- **Výkresy, které umí sloučit git a Fossil.** Když je v {{ui:Nastavení}} › {{ui:CadCraft}} zapnuto {{ui:Soubory vhodné pro sloučení}}, každý objekt dostane klíč, který se nikdy nemění (soubory jsou zhruba o 10 procent větší). `cadcraft merge base ours theirs` pak sloučí úpravy dvou lidí jednoho objektu DWG nebo DXF po objektech a hlásí jen místa, kde dva lidé změnili totéž. Viz [Sloučení úprav dvou lidí na jednom výkresu](topic:merge-drawings).
- **Co se změnilo, slovy.** V Historii dá {{ui:Porovnat}} prostý seznam: kde se věci změnily, jak velká jsou místa, co bylo přidáno, odebráno nebo změněno a jaký text se upravil. Viz [Popis změn slovy](topic:changes-in-words).
- **Azimuty a úhly.** Směr můžete napsat jako geodetický azimut, například N45°23'30"E, nebo ve stupních, minutách a sekundách, kdekoli se žádá úhel; AUNITS nastaví, jak se úhly zobrazují. Viz [Zadávání a zobrazení azimutů a úhlů](topic:bearings-and-angles).
- **Vlastní písma SHX.** Dejte CadCraft složku písem SHX a textové styly, které je pojmenují, se v nich kreslí, na obrazovce i ve vykreslení. Viz [Kreslení textu ve vlastních písmech SHX](topic:shx-fonts).
- **Diagram z textu.** {{cmd:DIAGRAM}} čte vývojový diagram Mermaid, diagram komponent PlantUML, D2 nebo seznam od-do a kreslí bloky a spojnice, které můžete upravit. Viz [Kreslení diagramu z textu](topic:text-to-diagram).
- **Objekty OLE v DWG.** {{cmd:OLELIST}} vypíše objekty OLE, které DWG nese a které CadCraft sám neumí umístit, a umístí kopii obrázku tam, kam řeknete. Viz [Obrázky](topic:pictures#objects-from-other-programs-ole).
- **Vaše výpočty zůstávají s výkresem.** Listy výpočtů a důvody návrhu se uchovávají v DWG spolu s tabulkou tříd.

**Kreslení bez zraku**

- Zapněte {{ui:Rýsování bez zraku}} v {{ui:Nastavení}} (nebo napište {{cmd:ACCESS}} a odpovězte `On`). CadCraft předčítá každý příkaz a výsledek přes čtečku obrazovky, popisuje výkres a to, co je blízko kurzoru, umožňuje posouvat kurzor a vybírat body klávesnicí a přehraje zvuk pro každé uchopení a úchyt. Tam, kde váš prohlížeč umí na vašem počítači rozpoznat řeč, lze příkazy diktovat. Viz [Rýsování bez zraku](topic:draft-without-sight).

**Ve všech aplikacích**

- **Jazyky.** 54 jazyků; deset je nových (litevština, lotyština, bosenština, maráthí, telugu, albánština, afrikánština, filipínština, svahilština, uzbečtina). Jazyky kromě angličtiny jsou strojové koncepty, dokud je nepřečte rodilý mluvčí.
- **Vstupní zařízení.** Touchpad, pero, 3D myš, herní ovladač a ovládání MIDI.
- **Řádky panelu nástrojů a mřížka vlastností.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} nabízí v ostatních aplikacích Zalomit, 2 řádky nebo 1 řádek. CadCraft má vlastní nastavení v {{ui:Nastavení}} › {{ui:CadCraft}} (viz [Řádky panelu nástrojů](topic:settings#toolbar-rows)). Sdílená mřížka vlastností je ve třech dalších aplikacích, ne v CadCraft.
- **Problémy, Živě a doplňky.** Sdílený panel Problémy, který varuje ve všech aplikacích, zobrazení Živě v CadCraft Studio, kde je kdo (viz [Práce na jednom výkresu společně](topic:work-live)), a seznam doplňků.
- **Připojte svou AI.** Jedno připojení z CadCraft Studio ke všem osmi aplikacím, s úrovní jen pro čtení, navrhování nebo úpravy pro každou aplikaci a srozumitelným záznamem toho, co asistent dělal. CadCraft nemá vlastní AI a Zeptat se ve všech aplikacích používá AI, kterou připojíte.

### Opraveno ve verzi 0.8.1

- **Vlastnosti ukazovaly 150 místo 12'-6"** ve výkresech v stopách a palcích. Pole, která aplikace čte sama, si opět zachovávají svůj text.
- **Soubory DWG, jejichž oddíl tříd byl čten jako špatný typ** (GitHub cadcraft#5), se nyní otevírají správně.
- **Zaměřovací kříž se už nezobrazuje za vyskakovacími okny.**
- **Studio a zabalené verze mohou přepínat jazyk za běhu.** Dříve byly jen v angličtině. Zatím nebylo ověřeno na každé platformě: dejte nám vědět, pokud se jazyk nemění.
- **Tablety na výšku** přidělují volnou výšku mřížky plátnu a režim listů začíná při 760 px nebo méně.
- **STRETCH s křižujícím oknem a LIMITS** byly nahlášeny ve Studio 0.8.0, ale ve webovém sestavení 0.8 už byly správně; instalátor hlásícího byl starší. Studio 0.8.1 je už obsahuje.

### Ještě není v této verzi

- **Verze 0.8 a 0.8.1 nemají podepsaný kód.** Windows může varovat (zvolte {{ui:Další informace}}, pak {{ui:Přesto spustit}}); na Macu klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. Sestavení pro obchody jsou pozastavena a sestavení pro iPad a iPhone nebylo pro 0.8.1 znovu vytvořeno.
- **Náčrty perem a fotografie náčrtů** byly zkoušeny jen na vymyšlených fotografiích a myši, zatím ne se skutečným perem, dotykovou obrazovkou nebo ručním náčrtem na papíře.
- **Kreslení bez zraku** bylo testováno automatickými kontrolami, zatím ne čtečkou obrazovky nebo nevidomým testerem.
- **Sdílení detailů** nebylo ověřeno dvěma lidmi a složka Team Cloud Plan jako složka Dokumenty ještě není hotová.
- **Sloučení** funguje pro soubory DWG a DXF z CadCraft; pro soubory ostatních aplikací ještě není hotové.
- **Zpět napříč okny:** CadCraft hlásí každý dokončený krok, ale Studio zatím nemá jeden společný {{ui:Zpět}} pro všechny aplikace; každá aplikace vrací zpět své vlastní kroky.
- **Objekty OLE v DWG** se zachovávají, ale nekreslí se na místě.
- **Čtení tabulek stylů vykreslení (soubory CTB)** z jiných programů je hotové, ale nebylo ověřeno na souboru z jiného programu.
- **Připojení AI:** připojení jedním kliknutím ve Studio, hostovaný konektor pro AI v prohlížeči, váš vlastní API klíč ve Studio a zveřejněný balíček MCP nejsou v tomto vydání slíbeny.

Pro předchozí verzi viz [Novinky ve verzi 0.7](topic:whats-new-0-7).

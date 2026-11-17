---
title: Přehled příkazů: co napsat
summary: Každý příkaz CadCraft se svými krátkými názvy, od A do Z, sestavený z programu samotného, a zvyky z jiných kreslicích programů, které se liší.
keywords: přehled příkazů, příkazy, zkratky, krátké názvy, přechod z jiného programu, seznam příkazů, co napsat, smazat, oříznout, ekvivalent, rozdíly
from: 3bdfd3e6
---

CadCraft převezme názvy příkazů a krátké názvy, které lidé znají z jiných kreslicích programů: napište `L` pro úsečku, `TR` pro oříznutí, `E` pro smazání. Pro většinu z nich tedy není třeba se učit žádnou překladovou tabulku: název, který znáte, je tady stejný. Níže je seznam všech příkazů, které CadCraft má, sestavený přímo z programu. {{key:Enter}} zopakuje poslední příkaz; `HELP` na příkazovém řádku vypíše stejný seznam.

Několik těch, které nejsou stejné, nebo ještě nejsou hotové:

- **Uložit** stáhne kopii v prohlížeči ({{cmd:SAVE}}, {{cmd:SAVEAS}}); ve CadCraft Studio zapíše soubor. Viz [Přechod z jiného kreslicího programu](topic:coming-from).
- **PLOT** vytvoří PDF (také PNG a SVG) s tabulkou stylů tisku; správce nastavení stránky není k dispozici.
- **DIMSTYLE** a **PEDIT** jsou hotové; **PEDIT** nemá volbu Upravit vrchol (to dělají úchyty).
- **TABLE** ještě není hotovo; {{cmd:XREF}}, {{cmd:SPLINE}} a {{cmd:WBLOCK}} hotové jsou.
- Příkazy vlastní rutiny (AutoLISP `C:NAME`) se zobrazí, až ji načtete příkazem {{cmd:APPLOAD}}; zde uvedeny nejsou.

## Všechny příkazy (398)

| Příkaz | Zkratky | Co dělá |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Otáčení 3D pohledu levým tlačítkem myši |
| `ACCESS` | `AX` | Zapne nebo vypne kreslení bez zraku: výsledky čtené čtečkou obrazovky, kurzor klávesnice na výkresu, zvuky přichycení a hlasové příkazy. |
| `ALIASEDIT` |  | Úprava zkratek příkazů v jednom textovém souboru (známý formát L, *LINE) |
| `ALIGN` | `AL` | Přesune a otočí objekty tak, aby zdrojové body dopadly na cílové body (jeden, dva nebo tři páry), a případně změní jejich měřítko |
| `ALIGNPANEL` | `ALP` | Otevře panel Zarovnat a rozmístit |
| `ALIGNTO` |  | Zarovná levé, střední, pravé, horní, střední nebo dolní hrany vybraných objektů podle výběru, prvního nebo posledního zvoleného objektu, nebo bodu |
| `ANNOALLVISIBLE` | `ANNOALL` | Zobrazí anotativní objekty v každém měřítku, nebo jen tam, kde je měřítko výřezu (nebo výkresu) v jejich seznamu |
| `ANNOSCALE` | `CANNOSCALE` | Nastaví anotační měřítko výkresu: anotativní text a kóty se přizpůsobí tak, aby se tiskly ve stejné velikosti |
| `APPLOAD` | `AP` | Načte aplikace: rutiny LISP (.lsp) a jejich soubory dialogů (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Oblouk: 3 body, Začátek/Střed/Konec, Začátek/Střed/Úhel, Začátek/Střed/Délka, Začátek/Konec/Úhel, Začátek/Konec/Směr, Začátek/Konec/Poloměr, Střed/Začátek/Konec, Střed/Začátek/Úhel, Střed/Začátek/Délka, Pokračovat |
| `AREA` | `AA` | Plocha a obvod podle bodů nebo objektu; Přidat a Odečíst udržují průběžný součet (AA) |
| `ARRAY` | `AR` | Kopie v řádcích a sloupcích, nebo kolem středu (AR) |
| `ARRAYASSOCIATIVITY` |  | Nastaví, zda příkazy ARRAY vytvářejí pole, která zůstanou upravitelná (1), nebo prosté kopie (0) |
| `ARRAYCLOSE` |  | Ukončí úpravu zdrojových objektů pole |
| `ARRAYEDIT` |  | Změní pole vytvořené s volbou Přidružené: počty, rozestupy, zdrojové objekty, jednu položku |
| `ARRAYPATH` |  | Kopie objektů podél úsečky, oblouku, mnohočáry nebo jiné křivky |
| `ARRAYPOLAR` |  | Kopie kolem středového bodu |
| `ARRAYRECT` |  | Kopie v řádcích a sloupcích |
| `ASBUILT` | `ASB` | ASBUILT načte skutečně provedené body (as-built), které změřila parta (CSV / TXT, jak je zapisuje EXPORTPOINTS), a porovná je s body výkresu: uvnitř nebo mimo toleranci, neměřené, přebytečné. Označí je na vrstvě AS-BUILT a stáhne protokol CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definuje atribut (štítek, pro který blok žádá hodnotu), který se vloží do bloku (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Upraví hodnoty atributů odkazu na blok na příkazovém řádku, jednu za druhou (Enter ponechá hodnotu) |
| `ATTSYNC` |  | Sladí odkazy bloku s definicemi jeho atributů: nové se přidají s výchozími hodnotami, odstraněné se vyřadí, polohy a text se obnoví; hodnoty zůstanou zachovány |
| `AUDIT` |  | Zkontroluje otevřený výkres, zda není poškozený: čísla, která nejsou konečná, objekty bez velikosti, chybějící vrstvy, bloky, styly a typy čar, bloky, které obsahují samy sebe, sdílená ID, poškozené kóty a šrafy. Vypíše nalezené podle druhu a před opravou se zeptá; oprava je jeden krok zpět. |
| `AUNITS` | `ANGUNITS` | Jak se zobrazují a zadávají úhly: desetinné stupně, stupně-minuty-sekundy nebo azimuty jako N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatické doplňování výkresu zapnout nebo vypnout, nebo vypsat, co teď naznačují vzory výkresu. |
| `AUTOCONSTRAIN` |  | Přidá vazby shodnosti, vodorovnosti a svislosti tam, kde je geometrie již blízko |
| `AUTODIM` | `ADIM` | Kótuje podle pravidel: celkové rozměry, řetězce podél stran, otvory, průměry děr a rozteče mřížky, bez opakování toho, co je již okótováno. |
| `AUTOSHEET` | `ASH` | Rozvrhne listy sám: zvolí papír a standardní měřítka a umístí každý pohled s popiskem a razítkem. |
| `BATTMAN` |  | Správce atributů bloků: pořadí, štítky, výzvy, výchozí hodnoty a režimy atributů bloku, poté aktualizace jeho odkazů |
| `BCLOSE` |  | Zavře editor bloků: uloží blok, nebo zahodí změny |
| `BCONVERT` |  | BCONVERT najde opakující se geometrii a změní ji na odkazy na bloky. Vyberte objekty, které se opakují: najdou se všechny ostatní sady objektů v otevřeném prostoru se stejnou geometrií, posunuté a otočené o libovolný úhel; při zapnutém zrcadlení a měřítku se najdou i zrcadlové obrazy a kopie v jiném měřítku. Dejte novému bloku název a základní bod; výběr i každá kopie se stanou odkazy na něj, každý se svým natočením a měřítkem. Nebo zvolte Blok a pojmenujte existující blok, abyste našli volné kopie jeho objektů. Kopie musí mít stejnou vrstvu, barvu, typ čáry a tloušťku, pokud není Vlastnosti nastaveno na Ignorovat. Objekty na zamčených vrstvách zůstanou nedotčeny. Jeden krok zpět. |
| `BEDIT` | `BE` | Editor bloků: úprava objektů a atributů bloku; BCLOSE uloží (BE) |
| `BLEND` |  | BLEND: spline mezi konci dvou otevřených křivek, zvolenými blízko konců ke spojení. CONtinuity: Tečna sleduje oba směry, Hladká navíc sleduje i jejich ohyb. |
| `BLOCK` | `B`, `BMAKE` | Vytvoří blok z objektů (stanou se jedním odkazem) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: každý odkaz na jeden blok se stane odkazem na jiný, na stejném místě, se stejným měřítkem a natočením. Hodnoty atributů, které mají oba bloky, zůstanou zachovány. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE zobrazí panel Bloky s kurzorem v jeho filtru. Panel ukazuje obrázek každého bloku (naposledy umístěné jako první), jako seznam nebo mřížku; klikněte na obrázek nebo jej přetáhněte na výkres, aby se blok umístil příkazem INSERT. V části Knihovny přidejte vlastní soubor DWG nebo DXF: jeho bloky se vypíšou s obrázky a při umístění se zkopírují do tohoto výkresu. Ve CadCraft Studio lze přidat i složku s výkresy a soubory i složky se pamatují. |
| `BOMEDIT` | `BOMCOLUMNS` | Sloupce tabulky kusovníku, seskupování, řazení, nadpis, součty a poznámky |
| `BOMEXPORT` |  | Uloží tabulku kusovníku jako soubor .csv |
| `BOMTABLE` | `BOM` | Živá tabulka kusovníku jedné zóny, nebo celého výkresu |
| `BOMUPDATE` |  | Aktualizuje hned všechny tabulky kusovníku, i zmrazené |
| `BOMZONE` | `BZONE` | Pojmenovaná oblast výkresu pro kusovník: dva rohy, mnohoúhelník, nebo obrys uzavřeného objektu |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): zvolte bod uvnitř uzavřené plochy a dostanete kolem ní uzavřenou mnohočáru. Oblouky zůstanou oblouky. Ostrovy obkreslí i plochy uvnitř ní. |
| `BOX` |  | Kvádr: dva rohy a výška (3D) |
| `BPARAMETER` | `BPARAM` | Ještě není hotovo: přidání parametru (například Viditelnost) do bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametry bloku: pojmenované parametry se vzorci a několik parametrů viditelnosti v jednom bloku. Funguje v editoru bloků (přiřadí vybrané objekty ke stavu) i u vybraného odkazu (vlastní hodnoty a stavy). |
| `BREAK` | `BR` | Přeruší úsečku, oblouk, kružnici nebo mnohočáru mezi dvěma body (BR) |
| `BREAKATPOINT` |  | Rozdělí úsečku, oblouk nebo mnohočáru na dvě části v jednom bodě |
| `BREAKLINE` |  | Nakreslí čáru se značkou zlomu; její velikost a prodloužení za konce se pamatují. |
| `BREPLACE` |  | BREPLACE nahradí jeden blok jiným. Vybrané: zvolte odkazy na bloky a pojmenujte blok, který je použije místo nich. Vše: pojmenujte blok a jeho náhradu; změní se každý odkaz v každém prostoru i uvnitř jiných bloků. Odkaz si zachová místo, měřítko, natočení a vrstvu i hodnoty atributů, které mají oba bloky; hodnoty, pro které nový blok nemá místo, se zahodí a vypíšou. |
| `BSEARCH` |  | BSEARCH hledá bloky. Název: část názvu bloku, nebo vzor s * a ?. Atribut: hodnota (nebo TAG=hodnota), kterou mají atributy odkazu. Geometrie: vyberte objekty nebo jeden odkaz na blok; vypíšou se bloky, jejichž tvar je podobný alespoň z 85 %, nejlepší první; velikost, natočení a zrcadlení se nepočítají. Nalezené odkazy v otevřeném prostoru se vyberou, připravené pro další příkaz. |
| `BURST` |  | Rozloží odkazy na bloky a zachová to, co říkají jejich atributy: každá hodnota se stane textem na vrstvě atributu. |
| `BVHIDE` | `BVH` | V editoru bloků: skryje objekty v aktuálním stavu viditelnosti. |
| `BVSHOW` | `BVSH` | V editoru bloků: zobrazí objekty, které aktuální stav viditelnosti skrývá (zobrazí se zeslabené, aby je šlo zvolit). |
| `BVSTATE` | `BVS` | V editoru bloků, u bloku se stavy viditelnosti: přepne na stav, nebo přidá, přejmenuje či smaže stav. |
| `CAL` |  | Spočítá délku nebo číslo: + − * / a závorky, jak je napíšete kdekoli |
| `CENTERLINE` | `CL` | Osa mezi dvěma úsečkami: uprostřed mezi nimi, nebo podél osy úhlu, když se stýkají (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Značka středu: křížek ve středu kružnice nebo oblouku, s osami mírně přesahujícími za něj (CM) |
| `CHAMFER` | `CHA` | Sraží roh mezi dvěma úsečkami (Dvě vzdálenosti, délka a úhel (A), každý roh mnohočáry (P)) |
| `CHSPACE` |  | CHSPACE: přesune objekty mezi listem a modelem přes výřez. Při přesunu se změní měřítko a natočí tak, aby z druhé strany vypadaly stejně. Na listu přejdou do modelu; při práci přes výřez (MSPACE) přejdou na list. |
| `CIRCLE` | `C` | Střed a poloměr, průměr, 2 nebo 3 body |
| `CLASS` |  | Zařadí vybrané objekty do třídy, nebo když nic nevybráno, nastaví aktivní třídu (? je vypíše) |
| `CLASSES` | `CLS` | Panel Třídy: třídy třídí objekty napříč vrstvami; zobrazují, skrývají a stylují se a přepisují se pro každý výřez (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ukotví nebo odpojí příkazový řádek, zmenší ho na jeden řádek, nastaví počet řádků historie, nebo otevře historii (F2) |
| `COMPARESETTINGS` | `CMPSET` | Porovná styly kót, styly textu, vrstvy, listy nebo jednotky: dva v tomto výkresu, nebo tento výkres s jiným otevřeným, a zkopíruje hodnotu. |
| `CONSTRAINTBAR` | `CBAR` | Zobrazí nebo skryje lišty vazeb (Zobrazit vše / Skrýt vše, nebo podle objektu) |
| `COPY` | `CO`, `CP` | Kopíruje objekty, tolikrát, kolikrát klikнete |
| `COPYBASE` |  | Zkopíruje objekty do schránky se základním bodem, který zvolíte |
| `COPYCLIP` |  | Zkopíruje objekty do schránky (Ctrl+C); PASTECLIP je vloží |
| `COUNT` | `BCOUNT` | Spočítá odkazy na bloky: zvolte jeden, aby se vybral a spočítal každý odkaz jeho bloku |
| `COUNTTABLE` |  | Umístí tabulku počtů bloků |
| `CREDITS` |  | Vloží do výkresu jako tabulku uvedení autorů z knihovny. Spusťte znovu pro aktualizaci tabulky podle položek, které jsou nyní ve výkresu. |
| `CURSORSIZE` |  | Velikost křížku: 100 jej roztáhne od kraje ke kraji výkresu (Nastavení › Kurzor › Celá obrazovka) |
| `CUTCLIP` |  | Vyjme objekty do schránky (Ctrl+X): zkopíruje je a poté smaže |
| `CYLINDER` | `CYL` | Válec: střed, poloměr a výška (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Vypíše bloky, jejich atributy a vlastnosti objektů jako tabulku ve výkresu, nebo v souboru CSV |
| `DATALINK` | `DL` | Tabulka ze souboru CSV, která si pamatuje soubor, takže jej lze znovu načíst |
| `DATALINKUPDATE` | `DLU` | Znovu načte soubor datového odkazu a znovu naplní jeho tabulky |
| `DCALIGNED` | `DCALI` | Rozměrová vazba: skutečná vzdálenost mezi body, bodem a úsečkou, nebo dvěma úsečkami |
| `DCANGULAR` | `DCANG` | Rozměrová vazba: úhel mezi dvěma úsečkami, nebo oblouku |
| `DCCONVERT` |  | Změní kóty nakreslené na geometrii, která jde vázat, na rozměrové vazby |
| `DCDIAMETER` | `DCDIA` | Rozměrová vazba: průměr kružnice nebo oblouku |
| `DCDISPLAY` |  | Zobrazí nebo skryje rozměrové vazby na výkresu |
| `DCHORIZONTAL` | `DCHOR` | Rozměrová vazba: vodorovná vzdálenost |
| `DCLINEAR` | `DCLIN` | Rozměrová vazba: vodorovná nebo svislá vzdálenost, podle místa, kam ji umístíte |
| `DCRADIUS` | `DCRAD` | Rozměrová vazba: poloměr kružnice nebo oblouku |
| `DCVERTICAL` | `DCVER` | Rozměrová vazba: svislá vzdálenost |
| `DELBLOCKS` |  | Smaže bloky: každý odkaz (i vnořené, na každém listu) a definice |
| `DELCONSTRAINT` | `DELCON` | Odebere všechny vazby (geometrické i rozměrové) z vybraných objektů |
| `DELOPENING` |  | Vyjme dveře nebo okno ze zdi. |
| `DESCRIBE` | `DESC` | Popíše, co výkres obsahuje: kolik objektů, jakého druhu, jak velké, co je vybráno. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Zruší výběr (Esc) |
| `DETAILS` | `DET` | Detaily vaší firmy, nalezené pro to, co kreslíte: najít, přidat blok, vypsat, odebrat, zapnout nebo vypnout nabídky. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Nakreslí diagram z textu: vývojový diagram Mermaid, diagram komponent PlantUML, D2, seznam od-do nebo XML draw.io, jako upravitelné bloky a spojnice |
| `DIMALIGNED` | `DAL`, `DIMALI` | Skutečná vzdálenost mezi dvěma body |
| `DIMANGULAR` | `DAN`, `DIMANG` | Úhel mezi dvěma úsečkami, oblouku, nebo podle tří bodů |
| `DIMARC` | `DAR` | Kóta délky oblouku: vzdálenost podél oblouku se značkou oblouku (DAR) |
| `DIMASZ` |  | Nastavení kóty: velikost šipky |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kóty naskládané od jedné základní čáry |
| `DIMBREAK` | `DBREAK` | Přeruší kótovací a pomocné čáry tam, kde kříží jiné objekty (Automaticky), mezi dvěma body (Ručně), nebo odstraní přerušení |
| `DIMCONSTRAINT` | `DCON` | Rozměrové vazby: délková, zarovnaná, úhlová, poloměr, průměr, převést |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Řetězec kót, každá od konce předchozí |
| `DIMDEC` |  | Nastavení kóty: desetinná místa |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Průměr oblouku nebo kružnice |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Uvolní kóty od objektů, ke kterým jsou připojeny (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Změní text kóty (Výchozí, Nový text, Otočit), nebo zešikmí pomocné čáry (Šikmo) |
| `DIMEXE` |  | Nastavení kóty: prodloužení pomocné čáry za kótovací čáru |
| `DIMEXO` |  | Nastavení kóty: odsazení od počátku |
| `DIMGAP` |  | Nastavení kóty: mezera kolem textu |
| `DIMINSPECT` |  | Kontrolní kóta: rámeček kolem hodnoty se štítkem a četností kontroly dílu |
| `DIMJOGGED` | `DJO`, `JOG` | Zalomená kóta poloměru: poloměr nakreslený z bližšího bodu, když je střed daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Přidá značku zlomu na kótovací čáru délkové nebo zarovnané kóty, aby bylo vidět, že vzdálenost není v měřítku (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vodorovná nebo svislá vzdálenost (pro libovolný úhel R) |
| `DIMLUNIT` |  | Nastavení kóty: formát délky (1 vědecký, 2 desetinný, 3 inženýrský, 4 stavební, 5 zlomkový) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kóta souřadnice: vzdálenost bodu od počátku UCS v ose X nebo Y, na výnosce (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Přepíše proměnné kót u vybraných kót bez změny jejich stylu; Vymazat vrátí styl zpět (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Poloměr oblouku nebo kružnice |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Připojí body kóty k objektům, takže se při jejich pohybu kóta přizpůsobí a znovu změří (DRE) |
| `DIMSCALE` |  | Nastavení kóty: celkové měřítko (velikosti × tato hodnota) |
| `DIMSPACE` |  | Rovnoměrné rozestupy rovnoběžných kót, měřené od základní kóty (0 je zarovná, Automaticky je dvojnásobek výšky textu) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Vytvoří, změní, nastaví jako aktuální, smaže, použije a porovná pojmenované styly kót (dialog; -DIMSTYLE na příkazovém řádku) |
| `DIMTEDIT` | `DIMTED` | Přesune text kóty doleva, doprava nebo na střed kótovací čáry, nebo jej otočí |
| `DIMTEXTUNIT` | `DTU` | Text kóty v mm, cm, m nebo km, nebo v jednotkách samotného výkresu: vybrané kóty, jinak nové (DTU) |
| `DIMTXT` |  | Nastavení kóty: výška textu |
| `DIST` | `DI` | Vzdálenost a úhel mezi dvěma body |
| `DISTRIBUTE` |  | Rovnoměrně rozmístí vybrané objekty vodorovně, nebo svisle: stejné kroky mezi středy, nebo stejné mezery; krajní dva zůstanou |
| `DIVIDE` | `DIV` | DIVIDE (DIV): značky, které rozdělí úsečku, oblouk, kružnici, mnohočáru, spline nebo elipsu na stejné části. Body, nebo s volbou Blok blok u každé značky. |
| `DOCUMENTS` | `DOCS` | Otevře panel Dokumenty: výkresy vypůjčit a vrátit, revize, stavy vydání a schválení pro složku projektu |
| `DOOR` | `DR` | Vloží dveře do zdi. Strana, na kterou kliknete, je stranou, do které se otevírají. |
| `DRAWORDER` |  | Změní pořadí kreslení: přenese objekty do popředí, odešle je do pozadí, nebo je umístí nad nebo pod jiné objekty. |
| `DUPLICATE` | `DUP` | Kopie, která se pohybuje s ukazatelem: klikem ji položíte (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Vlastnosti výkresu: název, autor a další, a vaše vlastní dvojice název a hodnota |
| `DXFOUT` |  | Stáhne výkres jako DXF R12 (Uložit si zachová svůj formát) |
| `EATTEDIT` | `DDATTE` | Upraví atributy odkazu na blok: hodnoty, text a vlastnosti, jeden atribut po druhém |
| `ELLIPSE` | `EL` | Koncové body osy a druhá poloosa |
| `ERASE` | `E`, `DELETE` | Odstraní objekty |
| `EXPLODE` | `X` | Rozloží mnohočáry, bloky a kóty na části |
| `EXPORT` | `EXP` | Uloží kopii výkresu v typu souboru, který zapisuje doplněk |
| `EXPORT3D` | `3DEXPORT` | Exportuje 3D model: GLB, OBJ nebo STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapíše body a vkládací body bloků s jedním atributem jako popis do souboru CSV nebo TXT (PNEZD, PENZD nebo XYZ) pro programy BIM a geodézie |
| `EXTEND` | `EX` | Prodlouží objekty tak, aby se setkaly s jinými: klikněte blízko konce, přetáhněte přes více, nebo Shift+klik pro oříznutí |
| `EXTRIM` |  | EXTRIM: zvolte jednu řeznou hranu, pak stranu. Vše, co hranu kříží, se na té straně ořízne. Části, které by zmizely, se ukážou při pohybu ukazatele. |
| `EXTRUDE` | `EXT` | Vytáhne uzavřené 2D objekty na tělesa (3D) |
| `FIELD` |  | Vloží pole do textu, buňky tabulky nebo atributu: datum, název souboru, číslo listu, vlastnost výkresu, plochu nebo délku objektu, nebo vzorec |
| `FILLET` | `F` | Zaoblí nebo srazí roh mezi dvěma objekty (poloměr (R), každý roh mnohočáry (P), několik (M)) |
| `FIND` |  | Najde a nahradí slova v textu, hodnotách atributů a textu kót |
| `FLATTEN` |  | Nastaví výšku (Z) a tloušťku vybraných objektů na 0, i v blocích, které používají. |
| `FLOOR` |  | Zvolí podlaží, na kterém se kreslí, přidá jedno, nebo přesune či zkopíruje výběr na něj. |
| `FLOORLAYERS` |  | Změní podlaží na vrstvy pojmenované Floor-Layer, pro soubor, který půjde někomu bez podlaží. |
| `FLOORS` | `FLR` | Otevře panel Podlaží: naskládá podlaží do jednoho modelového prostoru. |
| `GCCOINCIDENT` |  | Vazba: dva body splynou, nebo bod zůstane na objektu |
| `GCCOLLINEAR` |  | Vazba: dvě úsečky zůstanou na jedné přímce |
| `GCCONCENTRIC` |  | Vazba: dvě kružnice nebo oblouky sdílejí střed |
| `GCEQUAL` |  | Vazba: dvě úsečky zůstanou stejně dlouhé, nebo dvě kružnice či oblouky stejný poloměr |
| `GCFIX` |  | Vazba: bod nebo celý objekt zůstane na místě |
| `GCHORIZONTAL` |  | Vazba: úsečka (nebo dva body) zůstane vodorovná |
| `GCPARALLEL` |  | Vazba: dvě úsečky zůstanou rovnoběžné |
| `GCPERPENDICULAR` |  | Vazba: dvě úsečky zůstanou v pravém úhlu |
| `GCSYMMETRIC` |  | Vazba: dva body, úsečky nebo kružnice se zrcadlí přes úsečku |
| `GCTANGENT` |  | Vazba: úsečka a kružnice nebo oblouk (nebo dva z nich) zůstanou tečné |
| `GCVERTICAL` |  | Vazba: úsečka (nebo dva body) zůstane svislá |
| `GDSIN` | `GDS` | Zobrazí layout integrovaného obvodu (soubor GDSII stream): každou vrstvu a datový typ jako vrstvu výkresu, naplocho, v uživatelských jednotkách; jen pro prohlížení a měření (laboratorní test) |
| `GEOMCONSTRAINT` | `GCON` | Geometrické vazby: vodorovné, svislé, rovnoběžné, tečné, shodné… |
| `GLBOUT` |  | Exportuje 3D model jako GLB (glTF) |
| `GRADIENT` | `GD` | Vyplní plochu přechodem jedné nebo dvou barev |
| `GRIDMOVE` | `GM` | Přesune osu a vezme s sebou, co na ní visí: zdi se natáhnou, sloupy, kruhové značky a štítky se přesunou, kóty následují. |
| `GROUP` | `G` | GROUP (G): dá vybraným objektům společný název. Klik na jeden z nich pak vybere všechny. Enter u názvu vytvoří skupinu bez názvu. |
| `GROUPEDIT` |  | GROUPEDIT: úprava skupiny. Zvolte jeden z jejích objektů, nebo zadejte její Název, pak Přidat nebo Odebrat objekty, přejmenovat (RE), změnit Popis, nebo určit, zda klik vybere celou skupinu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Vyplní plochu plnou výplní nebo vzorem: klikněte dovnitř, nebo vyberte uzavřené objekty (H) |
| `HATCHEDIT` | `HE` | Změní šrafu: vzor, měřítko, úhel, počátek a její vazbu na hranici. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Znovu vytvoří hraniční mnohočáry ze šrafy, připojené k ní, nebo ne |
| `HATCHTOBACK` |  | Pošle každou šrafu za všechno ostatní. |
| `HELP` | `?` | Tento seznam |
| `HIDEOBJECTS` |  | Skryje vybrané objekty až do UNISOLATEOBJECTS. Neukládá se s výkresem. |
| `HISTORY` | `HIST` | HISTORY (HIST): verze tohoto výkresu – kopie uložené na tomto počítači, když je Studio uloží, a verze v cloudu – k otevření, obnovení a porovnání se změnami zobrazenými barvou. |
| `ID` |  | Souřadnice bodu |
| `IMAGE` | `IM` | Předá CadCraft obrazové soubory, které výkres používá (DWG ukládá jen to, kde byly). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Vloží obrázek (PNG nebo JPEG) ze souboru. |
| `IMAGECLIP` | `ICL` | Ořízne obrázek na obdélník nebo mnohoúhelník, nebo jeho oříznutí odstraní. |
| `IMPORT` | `IMP` | Importuje soubor typu, který čte doplněk, do tohoto výkresu |
| `INSERT` | `I`, `DDINSERT` | Umístí blok: měřítko (S), otočení (R); ze souboru DWG/DXF (F), z knihovny (L) |
| `INTERSECT` | `IN` | Ponechá jen to, co mají tělesa společné (3D), nebo plochu, kterou sdílejí 2D oblasti |
| `ISODRAFT` |  | ISODRAFT: izometrické kreslení zapnout nebo vypnout, nebo přímo na rovinu Levou, Horní nebo Pravou. Když je zapnuto, ortogonální a polární sledování sledují dvě osy roviny, mřížka se kreslí izometricky a ELLIPSE má Izokružnici. |
| `ISOLATEOBJECTS` | `ISOLATE` | Zobrazí jen vybrané objekty; vše ostatní v tomto prostoru je skryto až do UNISOLATEOBJECTS. Neukládá se s výkresem. |
| `ISOPLANE` |  | ISOPLANE: zvolí izometrickou rovinu pro kreslení: Levou, Horní nebo Pravou. Enter přejde na další, stejně jako F5, když je zapnuté izometrické kreslení. |
| `JOIN` | `J` | Spojí úsečky, oblouky a mnohočáry, které na sebe navazují koncem, do jedné mnohočáry; úsečky na jedné přímce do jedné úsečky (J) |
| `LASER` | `LASERCUT` | Otevře panel Laser: pošle vrstvy na laserovou řezačku nebo gravírovačku (GRBL G-code) |
| `LASSOMODE` |  | Stisknutí a tažení nakreslí lasso (1), nebo obdélník (0) |
| `LAYDEL` |  | Smaže vrstvu a každý objekt na ní (v modelu, na listech a v blocích) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otevře správce vrstev: všechny vrstvy v jedné tabulce |
| `LAYERPANEL` |  | Zobrazí panel vrstev |
| `LAYFRZ` |  | Zamrazí vrstvu každého zvoleného objektu |
| `LAYGROUP` | `LG` | Seskupí vrstvy do složek v panelu Vrstvy. |
| `LAYISO` |  | Izoluje vrstvy vybraných objektů (všechny ostatní vrstvy vypnuty) |
| `LAYLOCKFADE` |  | Nastaví, jak moc zeslábnou objekty na zamčených vrstvách, a zda je jde klikem vybrat. |
| `LAYMCUR` |  | Nastaví vrstvu zvoleného objektu jako aktuální |
| `LAYMRG` |  | Sloučí vrstvy: jejich objekty se přesunou na cílovou vrstvu a sloučené vrstvy zmizí |
| `LAYOFF` |  | Vypne vrstvu každého zvoleného objektu |
| `LAYON` |  | Zapne všechny vrstvy |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nový list s razítkem a výřezem |
| `LAYTHW` |  | Odmrazí všechny vrstvy |
| `LAYUNISO` |  | Znovu zapne vrstvy, které LAYISO vypnul |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Převede text napsaný starými vietnamskými fonty (TCVN3 / ABC, například .VnTime, a VNI, například VNI-Times) do Unicode. Takový text se už zobrazuje správně; tento příkaz jej přepíše natrvalo, s počtem a jedním krokem zpět. |
| `LENGTHEN` | `LEN` | Prodlouží nebo zkrátí úsečky, oblouky a mnohočáry: o hodnotu, o procento, na celkovou délku, nebo tažením (LEN) |
| `LIBRARY` | `LIB` | Panel knihovny: umísťování položek, kontrola aktualizací, uvedení autorů |
| `LIMITS` |  | Nastaví hranice výkresu: ZAP, VYP, nebo levý dolní a pravý horní roh. Se zapnutými hranicemi se body mimo ně odmítnou. |
| `LINE` | `L` | Přímé úseky, každý jako samostatný objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Typ čáry, který dostanou nové objekty (podle vrstvy, podle bloku, nebo pojmenovaný) |
| `LINKVIEWS` | `SYNCVIEWS` | Posun a zoom všech panelů najednou (rozdělená obrazovka), k porovnání dvou výkresů nebo revizí |
| `LISPEDIT` | `VLIDE` | LISPEDIT (nebo VLIDE) otevře editor LISP: okno pro psaní, načtení a vyzkoušení rutiny. Načíst do výkresu přečte každý výraz, jako načtení souboru příkazem APPLOAD, a vytvoří jeho příkazy. Spustit výběr vyhodnotí vybrané výrazy, nebo výraz, ve kterém je kurzor. Konzole ukáže, co rutina vypsala, a každou chybu s řádkem. Odpovídající závorka se označí při psaní a Enter odsadí nový řádek. Nový, Otevřít a Uložit fungují na souboru .lsp. Seznamy vedle textu ukazují funkce, které rutina definuje, ty, které volá a tento LISP zatím nemá, a všechny funkce, které má. Okno neblokuje výkres, takže rutina může žádat body; Stop nebo Esc ukončí běžící rutinu. |
| `LIST` | `LI`, `LS` | Popíše objekty v historii |
| `LTSCALE` | `LTS` | Měřítko typů čar výkresu (každá čárka a mezera se jím násobí) |
| `LWDISPLAY` | `LWT` | Zobrazí nebo skryje tloušťky čar na obrazovce (tlačítko LWT ve stavovém řádku) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Tloušťka čáry, kterou dostanou nové objekty (podle vrstvy, podle bloku, výchozí, nebo v mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Mapové vrstvy pod modelovým prostorem: souřadnicový systém výkresu, dlaždice, WMS, WMTS, ArcGIS, obrázky |
| `MASSPROP` |  | MASSPROP: průřezové vlastnosti oblastí a uzavřených objektů: plocha, obvod, těžiště, momenty a deviační moment, poloměry setrvačnosti a hlavní osy. Přesné pro úsečky a oblouky. Protokol může zapsat do textového souboru. |
| `MATCHPROP` | `MA`, `PAINTER` | Přenese vlastnosti: zkopíruje vrstvu, barvu a další z jednoho objektu na jiné (MA) |
| `MEASURE` | `ME` | MEASURE (ME): značka v každé dané délce podél úsečky, oblouku, kružnice, mnohočáry, splinu nebo elipsy, od konce nejblíže vašemu výběru. Body, nebo s volbou Blok blok u každé značky. |
| `MEASUREGEOM` | `MEA` | Změří vzdálenost, poloměr, úhel nebo plochu (MEA) |
| `MINSERT` |  | MINSERT: umístí blok najednou v řádcích a sloupcích. Každý je vlastním odkazem, takže lze kterýkoli přesunout nebo smazat. |
| `MIRROR` | `MI` | Zrcadlí objekty přes úsečku |
| `MLEADER` | `MLD`, `MLEAD` | Víceúrovňová výnoska: šipka, výnoska a poznámka jako jeden objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Zarovná víceúrovňové výnosky s jednou z nich podél směru, se stejnými rozestupy, nebo je rozdělí mezi dva body (MLA) |
| `MLEADERCOLLECT` | `MLC` | Sbalí několik víceúrovňových výnosek do jedné: jejich bloky v řádku nebo sloupci, nebo jejich poznámky pod sebou (MLC) |
| `MLEADEREDIT` | `MLE` | Přidá výnosky k víceúrovňové výnosce, nebo je odebere; přepne její obsah mezi textem a blokem (MLE) |
| `MLINE` |  | Nakreslí rovnoběžné čáry najednou, spojené v rozích. |
| `MOVE` | `M` | Přesune objekty podle základního bodu a druhého bodu |
| `MSPACE` | `MS` | Práce na modelu přes výřez otevřeného listu (nebo dvojklik uvnitř výřezu) |
| `MTEXT` | `MT`, `T` | Odstavcový text: přetáhněte jeho šířku, pak píšete na místě; Enter začne nový odstavec (T) |
| `MVIEW` | `MV` | Výřez na model, na rozvržení |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pojmenované pohledy: uloží pohled na obrazovce (nebo okno) pod názvem a vrátí se k němu (NV) |
| `NCOPY` |  | Zkopíruje objekty z odkazu na blok nebo propojeného výkresu do výkresu, aniž by je rozložil. |
| `NEARBY` |  | Řekne, co leží blízko kurzoru, nejbližší první, se vzdáleností a stranou. |
| `NEW` |  | Začne nový výkres |
| `OBJECTSCALE` | `OBJSCALE` | Anotační měřítka anotativního textu a kót: přidá měřítko, smaže jedno, přidá aktuální měřítko, nebo je vypíše (každý výřez je zobrazí ve velikosti pro své měřítko) |
| `OBJOUT` |  | Exportuje 3D model jako OBJ |
| `OFFSET` | `O` | Rovnoběžné kopie v určené vzdálenosti |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: jak OFFSET uzavře mezery ve vnějších rozích mnohočáry. 0 prodlouží úseky, 1 přidá oblouk, 2 přidá rovný střih. Zachová se pro tuto relaci. |
| `OLELIST` | `OLES` | Vypíše objekty OLE, které výkres obsahuje, a umístí kopii obrázku jednoho z nich, kde zvolíte |
| `OPEN` |  | Otevře DWG nebo DXF z tohoto počítače |
| `OPENIN3D` |  | Otevře tento výkres v aplikaci 3D modelování na nové kartě (nic se nenahrává) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otevře nabídku uchopení objektů: zvolte, které přichycení jsou zapnuté. Také pravý klik na Přichycení ve stavovém řádku. |
| `OVERKILL` |  | Smaže duplicitní objekty a sloučí překrývající se nebo na sebe navazující úsečky a oblouky v rámci tolerance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametry: uživatelské parametry a rozměrové vazby v jedné tabulce |
| `PARTSLIST` | `PLIST` | Tabulka seznamu dílů každé normalizované součásti a ocelového profilu umístěného z knihovny |
| `PASTEAREA` | `PAREA` | Vloží oblast zkopírovanou v MarkupCraft (Kopírovat oblast) ve skutečné velikosti, jako obrázek. |
| `PASTEBLOCK` |  | PASTEBLOCK: vloží to, co jste zkopírovali, jako jeden blok. Blok dostane vlastní název; RENAME mu dá váš. |
| `PASTECLIP` |  | Vloží schránku: pohybuje se s kurzorem, klikněte, kam má jít (Ctrl+V) |
| `PASTEORIG` |  | Vloží schránku na souřadnice, ze kterých byla zkopírována (Ctrl+Shift+V) |
| `PDF` |  | Předá CadCraft soubory PDF, které používají podklady výkresu |
| `PDFADJUST` |  | Zeslabí, nastaví kontrast, monochromní režim nebo vypne podklad PDF |
| `PDFATTACH` | `PDFATT` | Připojí stranu PDF jako podklad (PDFATTACH) |
| `PDFCLIP` |  | Ořízne podklad PDF na obdélník nebo mnohoúhelník |
| `PDFIMPORT` | `PDFIM` | Změní čáry, výplně a text strany PDF na objekty výkresu (PDFIMPORT) |
| `PDFLAYERS` |  | Zapne nebo vypne vrstvy podkladu PDF |
| `PEDIT` | `PE` | Upraví mnohočáru: uzavřít, otevřít, spojit, šířka, vyhlazená křivka, splinová křivka, zrušit křivku, generování typu čáry, obrátit; úsečky, oblouky a spliny lze změnit na mnohočáry |
| `PHOTOSKETCH` | `PSK` | Změní fotografii ručního náčrtu na papíře na úsečky a oblouky v měřítku, narovná perspektivu a každé barvě pera dá vlastní vrstvu. |
| `PICKSTYLE` |  | PICKSTYLE: zda výběr jednoho objektu ze skupiny vybere celou skupinu (1, výchozí nastavení), nebo jen tento objekt (0). Zachová se pro tuto relaci. |
| `PLAN` |  | Otočí pohled tak, aby osa X UCS (aktuální UCS, uložený UCS, nebo Svět) byla na obrazovce vodorovně. Nic ve výkresu se nepohne. |
| `PLINE` | `PL` | Mnohočára z úseček a oblouků |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Vykreslení do PDF: rozvržení, nebo model v měřítku |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabulky stylů tisku: nastaví, jak se každá barva vykreslí (barva, černá, šedá, inkoust, tloušťka čáry); uloží se s výkresem (STYLESMANAGER) |
| `POINT` | `PO` | Objekty bodů |
| `POINTCLOUD` | `PC` | Připojený mrak bodů: řez, výška, tloušťka, barva, velikost, viditelnost, zoom, odpojit |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Připojí mrak bodů (LAS, LAZ, XYZ, PTS) pod výkres |
| `POLARANG` |  | Krok polárního sledování ve stupních (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravidelný mnohoúhelník |
| `PRESSPULL` |  | Zatlačí nebo vytáhne plochu tělesa (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otevře panel Vlastnosti (také Ctrl+1, nebo dvojklik na objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Složí panel Vlastnosti k okraji okna |
| `PSPACE` | `PS` | Opustí výřez, ve kterém pracujete, a vrátí se na list (nebo dvojklik mimo něj). |
| `PUBLISH` | `-PUBLISH` | Vykreslí několik nebo všechny listy do jednoho PDF (stránka a záložka pro každý list) |
| `PURGE` | `PU` | Odstraní definice bloků, které nic nepoužívá |
| `QDIM` |  | Rychlá kóta: okótuje několik objektů najednou (řetězová, základní, odsazená, souřadnicová, poloměr nebo průměr) |
| `QPMODE` | `QP` | Rychlé vlastnosti podle kurzoru zapnout nebo vypnout |
| `QSELECT` | `QS` | Rychlý výběr: každý objekt daného typu, jehož vrstva, barva, velikost nebo název odpovídá (QS) |
| `RASTERSNAP` |  | Zapne nebo vypne přichycení k čarám naskenovaných listů. |
| `RAY` |  | Polopřímka: konstrukční čára z bodu, nekonečná jedním směrem. |
| `RECOVER` |  | Otevře poškozený DXF nebo DWG: přeskočí, co nelze přečíst, místo odmítnutí souboru, řekne, co přeskočil, a pak výkres zkontroluje a opraví stejně jako AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Uzavřená mnohočára ze dvou rohů |
| `REDLINE` | `RDL` | Z červených poznámek do revize: načte balíček červených poznámek MarkupCraft, přijme nebo zamítne každou změnu, přijaté označí revizním oblakem s protokolem revizí a uloží soubor odpovědí (RDL) |
| `REDO` |  | Znovu provede, co bylo vráceno zpět |
| `REFCLOSE` |  | Dokončí úpravu bloku na místě: uloží jej, nebo zahodí změny |
| `REFEDIT` |  | Upraví blok na místě, kde je jeho odkaz, zbytek výkresu je zeslaben; REFCLOSE jej uloží |
| `REGEN` | `RE` | Znovu vytvoří, co se kreslí na této kartě, z výkresu |
| `REGENALL` | `REA` | Znovu vytvoří, co se kreslí na každé kartě, v každém panelu a v každém otevřeném výkresu |
| `REGION` | `REG` | REGION (REG): vytvoří ploché oblasti (regiony) z uzavřených objektů, nebo z úseček, oblouků a mnohočar, které uzavřou smyčku koncem na konec. Potom UNION, SUBTRACT a INTERSECT kombinují oblasti a MASSPROP vypíše jejich průřezové vlastnosti. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Zaregistruje několik skenů: umístí je do jednoho rámce podle zvolených dvojic bodů nebo cílů, zpřesní pomocí ICP, exportuje jeden LAS nebo E57 |
| `REINIT` |  | Znovu načte váš soubor zkratek |
| `RENAME` | `-RENAME`, `REN` | Přejmenuje vrstvu nebo blok (každý objekt nebo odkaz se přizpůsobí) |
| `REVCLOUD` | `RC` | Revizní oblak: obkreslí obdélník, mnohoúhelník, volnou dráhu nebo objekt (RC) |
| `REVOLVE` | `REV` | Otočí uzavřené 2D objekty kolem osy na tělesa (3D) |
| `ROTATE` | `RO` | Otočí objekty kolem základního bodu |
| `SAMPLES` | `SAMPLE` | Otevře jeden z ukázkových výkresů CadCraft (sada architektury, skutečné provedení), ze kterých se můžete učit |
| `SAVE` | `QSAVE` | Stáhne výkres v jeho formátu (DWG nebo DXF) |
| `SAVEAS` |  | Stáhne výkres jako DWG nebo DXF: zvolte, který |
| `SAYSEL` |  | Řekne, co je vybráno, každý objekt jednou větou. |
| `SCALE` | `SC` | Změní měřítko objektů kolem základního bodu |
| `SCALELISTEDIT` | `SCALELIST` | Přidá, upraví a smaže vlastní měřítka výkresu; zobrazí se v seznamech měřítek výřezu a vykreslení a uloží se do souboru (SCALELIST) |
| `SCANALIGN` | `SCL` | Zarovná naskenovaný list do dvou bodů: přesune jej, otočí a, pokud zvolíte, změní jeho měřítko. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Vloží naskenovaný výkres: PNG, JPEG nebo TIFF (jedna strana, nebo všechny strany víceстраничného souboru), nebo stranu PDF, která je obrázek. |
| `SCANCLEAN` | `SCC` | Převede naskenovaný list na černobílý a odstraní nečistoty. |
| `SCANCROP` | `SCR` | Ořízne naskenovaný list na okno. |
| `SCANDESKEW` | `SCD` | Najde úhel, pod kterým leží dlouhé čáry naskenovaného listu, a po potvrzení úhlu list narovná. |
| `SCANERASE` | `SCE` | Smaže oblast naskenovaného listu: obdélník, mnohoúhelník nebo lasso. |
| `SCANINFO` | `SCI` | Zobrazí původní soubor naskenovaného listu a kroky provedené od té doby. |
| `SCANSCALE` | `SCS` | Nastaví měřítko naskenovaného listu: zvolte na něm dva body a zadejte skutečnou vzdálenost mezi nimi. |
| `SCANTRACE` | `SCT` | Obkreslí naskenovaný list na úsečky a oblouky na nové vrstvě, s tolerancí, kterou nastavíte. Text a šrafování zůstanou jako rastr. |
| `SELECT` |  | Vybere objekty hned (pro P, Předchozí, v dalším příkazu) |
| `SELECTALL` | `AI_SELALL` | Vybere každý objekt, který lze na této kartě upravit (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Vybere každý objekt podobný zvoleným: stejný typ, vrstvu a barvu (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Zobrazí panel Sada listů: listy z mnoha výkresů, očíslované, vydané jako jedno PDF. |
| `SHORTCUTS` | `KEYS` | Přiřadí libovolnému příkazu vlastní klávesu (Ctrl nebo Alt s písmenem, nebo volnou funkční klávesu), uloženou v tomto prohlížeči nebo desktopové aplikaci. |
| `SHXFONTS` | `SHX` | Předá CadCraft fonty SHX ze složky nebo souborů, aby v nich kreslily styly textu, které je pojmenovávají (vypsat, odebrat, obrátit) |
| `SKETCHFIX` | `SKF` | Kreslí volné tahy; každý se změní na čistou úsečku, kružnici, oblouk, obdélník nebo mnohočáru, zarovnaný a spojený s ostatními. |
| `SKETCHLIVE` | `SKL` | Kreslení perem: každý tah se po zvednutí pera změní na přesnou úsečku, kružnici, oblouk nebo obdélník, přichycený k výkresu, s velikostí, kterou lze přepsat. |
| `SPLINE` | `SPL` | Nakreslí spline body (nebo s řídicím mnohoúhelníkem), nebo změní mnohočáru na spline |
| `SPLINEDIT` | `SPE` | Upraví spline: body proložení, řídicí body a váhy, otevře nebo uzavře jej, obrátí jej, nebo jej převede na mnohočáru |
| `SPLIT` |  | Rozdělí plochu výkresu na panely (jako VPORTS na modelu; i z listu) |
| `STEELMEMBER` | `SMEMBER` | Ocelový prvek ve 3D z normalizovaného profilu: dva body (trám), nebo základní bod a výška (Sloup) |
| `STLOUT` |  | Exportuje 3D model jako STL (milimetry) |
| `STRETCH` | `S` | Natáhnout: přetáhněte křížové okno přes konce a přesunete je; co je uvnitř, se přesune, zbytek zůstane (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Styly textu: písmo, výška, šířka a sklon, který dostane nový text (dialog; -STYLE na příkazovém řádku) |
| `SUBTRACT` | `SU` | Odečte tělesa od jiných (3D), nebo 2D oblasti od oblastí |
| `SWBOUT` | `SWMACRO` | Stáhne makro pro SolidWorks (.swb), které model znovu sestaví jako jednu vazbami omezenou skicu |
| `SWEEP` |  | Vytáhne uzavřené 2D objekty po dráze (úsečka, mnohočára, oblouk, kružnice) na tělesa (3D) |
| `TABLE` | `TB` | Vytvoří tabulku: řádky a sloupce, nebo z buněk tabulkového procesoru ve schránce, nebo ze souboru CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Upraví tabulku: psaní do buňky, vkládání a mazání řádků a sloupců, velikosti, sloučené buňky, zarovnání |
| `TABLEEXPORT` |  | Uloží to, co tabulka zobrazuje, jako soubor CSV |
| `TABLEPASTE` | `PASTETABLE` | Vytvoří tabulku z buněk tabulkového procesoru ve schránce |
| `TABLESTYLE` | `TS` | Styly tabulek: výšky textu, zarovnání, okraj a ohraničení pro nadpis, záhlaví a datové řádky |
| `TAGS` |  | Štítky na odkazech na bloky: definuje štítek (druh, povolené hodnoty, bloky, na které platí), nastaví jej na vybrané odkazy a vypíše je jako rozpis, který lze uložit jako CSV |
| `TEXT` | `DT`, `DTEXT` | Jednořádkový text; Enter začne další řádek |
| `TEXTEDIT` | `ED`, `DDEDIT` | Upraví text na místě: zvolte text (nebo na něj dvakrát klikněte) (ED) |
| `TEXTMASK` | `TMASK` | Umístí podkladovou masku za texty (pozadí výkresu nebo barvu), nebo ji odstraní. |
| `TEXTTOFRONT` |  | Přenese veškerý text, kóty a výnosky před vše ostatní. |
| `TOOLBAR` |  | Zvolí, co tlačítka panelu nástrojů zobrazují: ikony a text, jen ikony, nebo jen text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Umístí panel nástrojů nahoru, dolů, doleva nebo doprava v okně |
| `TOOLBARROWS` |  | Zvolí, kolik řádků panel nástrojů používá: zalomit podle šířky, 2, nebo 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Nastaví lišty nad výkresem jako standardní, nebo kompaktní |
| `TOUCHCROSSHAIR` | `TCX` | Odsazený křížek pro kreslení prstem: jeden prst pohybuje křížkem, který je nad ním a vedle něj, takže prst nezakrývá bod výběru. Zvednutí prstu nic nevybere; tlačítko Klik nebo klepnutí druhým prstem vybere v místě křížku a držení Kliku při pohybu táhne. Dlouhé stisknutí nebo tlačítko Enter je Enter. Dva prsty posouvají a přibližují. Volby: ZAP, VYP, Automaticky (zapnuto jen tam, kde je prst jediný ukazatel), Vzdálenost, Strana. |
| `TOUR` | `TUTORIAL` | Znovu projde šestikrokovou prohlídku prvního výkresu |
| `TRIM` | `TR` | Ořízne objekty tam, kde je kříží jiné: klikněte na kus, přetáhněte přes více, nebo Shift+klik pro prodloužení |
| `TRIMEXTENDMODE` |  | Jak začíná TRIM a EXTEND: 1 Rychlý (každý objekt je řezná hrana nebo hranice), 0 Standardní (nejprve zvolte hrany) |
| `TTR` |  | Kružnice tečná ke dvěma objektům s poloměrem, který zadáte (stejné jako CIRCLE T) |
| `TURNLEFT` |  | Otočí pohled o 90° doleva (proti směru hodinových ručiček): UCS Z -90, pohled následuje. Nic ve výkresu se nepohne. |
| `TURNRIGHT` |  | Otočí pohled o 90° doprava (po směru hodinových ručiček): UCS Z 90, pohled následuje. Nic ve výkresu se nepohne. |
| `TURNWORLD` |  | Zpět do světa: UCS Svět, pohled je opět vodorovný. |
| `TXT2MTXT` | `T2M` | Spojí jednořádkové texty do jednoho odstavcového textu, shora dolů. |
| `UCS` |  | Váš vlastní souřadnicový systém: počátek a osa X (počátek, úhel Z, 3bod, Objekt, Předchozí, Svět, Pojmenovaný). Zadané body, ortogonální režim, polární sledování, mřížka i nový text se jím řídí; pohled se otočí tak, aby jeho osa X byla vodorovná. Nic ve výkresu se nepohne. |
| `UNDO` | `U` | Vrátí zpět poslední příkaz |
| `UNGROUP` |  | UNGROUP: rozdělí skupiny. Vyberte objekty ze skupin, nebo zadejte Název. Objekty zůstanou ve výkresu. |
| `UNION` | `UNI` | Spojí tělesa v jedno (3D), nebo 2D oblasti v jednu oblast |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Znovu zobrazí každý objekt skrytý příkazem ISOLATEOBJECTS nebo HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Jak se zobrazují a zadávají délky: desetinné, stopy a palce, zlomky (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Znovu vypočítá pole a zvolí, kdy se aktualizují samy |
| `USDOUT` |  | Exportuje 3D model jako USD (textový .usda, binární .usdc nebo balíček .usdz) |
| `VIEW` | `-VIEW`, `V` | Standardní 3D pohledy, perspektivní nebo rovnoběžné (3D) |
| `VIEWBASE` | `FLATSHOT` | Umístí ploché 2D pohledy 3D těles (čelní, horní, boční nebo izometrický, skryté čáry čárkovaně) na list, nebo do modelu |
| `VIEWLABEL` | `VL` | Název pohledu na listu, který zobrazuje název pohledu jeho výřezu a mění se s ním. |
| `VOICE` |  | Zapne nebo vypne hlasové příkazy. Rozpoznávají se na tomto počítači. |
| `VPCLIP` |  | Ořízne výřez listu na uzavřený objekt nebo nakreslený mnohoúhelník; Delete z něj udělá zpět obdélník |
| `VPLAYER` |  | Zamrazí nebo odmrazí vrstvy jen v některých výřezech (Zamrazit, Odmrazit, Obnovit) a zvolí, které vrstvy nové výřezy začínají zamrzlé (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Rozdělí plochu výkresu na panely, každý s vlastním pohledem (na listu: výřez, jako MVIEW) |
| `VPVIEW` |  | Nastaví, co výřez zobrazuje: zvolte okno na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizuální styl 3D pohledu: stínovaný, hrany, skrytá čára, drátový, rentgen |
| `WALL` | `WA` | Nakreslí 2D zdi jako mnohočáru. Spojí se a nesou dveře a okna. |
| `WALLARC` | `WARC` | Nakreslí oblouk zdí. Zdi v půdorysu jsou rovné, takže oblouk se kreslí jako krátké rovné zdi (každá po 15 stupních), které se spojí. |
| `WALLDELSEG` |  | Smaže kus zdi mezi dvěma body. Zbytek zůstane jako jedna nebo dvě zdi. |
| `WALLDIM` |  | Zadejte novou hodnotu kóty: zeď na jejím vzdáleném konci se posune kolmo sama k sobě, zeď na prvním konci zůstane a navazující zdi se přizpůsobí. |
| `WALLDISJOIN` |  | Zvolte zeď blízko jednoho konce, čímž zakážete spojení na tomto konci: konec se nakreslí kolmo a nic ho nesleduje. Zvolte ji znovu pro povolení spojení. |
| `WALLGRID` |  | Zamkne zeď k ose: podél ní, nebo jeden konec na ní. Osu přesunete příkazem GRIDMOVE a zeď půjde za ní. |
| `WALLHOLD` |  | Zarovná a zamkne: zeď si drží místo vůči jiné zdi (na své přímce, nebo ve vzdálenosti, kterou má). Když se jedna pohne, druhá ji sleduje. |
| `WALLHOLDDIM` |  | Zamkne vzdálenost mezi dvěma rovnoběžnými zdmi. Když se jedna pohne, druhá se přizpůsobí, aby ji udržela. |
| `WALLHOLDS` |  | Vypíše zámky zdí. |
| `WALLJOINS` |  | Dá každé zdi staršího výkresu její ID a uloží spojení mezi nimi. K tomu dojde také při první změně, kterou uděláte. |
| `WALLJOINSTYLE` |  | Klikněte na roh, kde se dvě zdi stýkají koncem, a změníte, jak se kreslí: pokos, na tupo, zarovnat kolmo. T přepne, která zeď prochází. |
| `WALLOFFSET` | `WO` | Posune zeď kolmo k sobě o vzdálenost (navazující zdi se přizpůsobí), nebo vytvoří kopii v této vzdálenosti. |
| `WALLPICK` |  | Vytvoří zdi na úsečce nebo mnohočáře ve výkresu, s připojením navazujících čar, pokud řeknete Ano. |
| `WALLPOLY` | `WP` | Nakreslí zdi kolem pravidelného mnohoúhelníku o 3 až 64 stranách, jako POLYGON. |
| `WALLRECT` | `WR` | Nakreslí čtyři spojené zdi ze dvou protějších rohů, jako RECTANG. |
| `WALLREJOIN` |  | Spojí dvě části zdi zpět v jednu. První si zachová své místo ve výkresu. |
| `WALLROT` |  | Nakreslí čtyři spojené zdi jako obdélník otočený pod libovolným úhlem: první strana, pak jak daleko ven. |
| `WALLSPLIT` | `WS` | Rozdělí zeď na dvě v bodě, nebo tam, kde ji kříží jiná zeď. Části zůstanou spojené, pokud nepožádáte o mezeru nebo volné konce. Dveře a okna jdou s částí, do které patří. |
| `WALLSPLITGAP` |  | Rozdělí zeď a ponechá mezeru: zadejte mezeru, zvolte zeď, pak bod. Části mají volné konce a lze je znovu spojit. |
| `WALLSTRETCH` |  | Natáhnout oknem: konce zdí uvnitř se pohybují, zdi zcela uvnitř se přesunou celé a zdi, které narážejí svými stranami, se s nimi posunou. |
| `WALLTAN` |  | Naváže zeď obloukem, který z ní vychází podél zdi (kreslený jako krátké rovné zdi). |
| `WALLTRACE` |  | Vytvoří zdi kolem nejmenší uzavřené plochy čar a zdí kolem bodu, na který kliknete. |
| `WALLUNHOLD` |  | Sejme zámky ze zdi (i zámky jiných zdí k ní). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapíše blok, některé objekty, nebo celý výkres do nového souboru DWG nebo DXF (W) |
| `WEDGE` | `WE` | Klín: dva rohy a výška; svažuje se od prvního rohu (3D) |
| `WHEREAMI` | `WHERE` | Řekne, kde je kurzor. |
| `WHOHAS` |  | Řekne, kdo má výkres otevřený. CadCraft Studio si u každého otevřeného výkresu drží malý zamykací soubor (Plan.dwg.cclock: kdo, od kdy, která verze) a při zavření jej odstraní. Volby: Current (aktuální výkres), File (soubor, zvolit jeden), FOlder (složka: každý výkres ve složce, který je někde otevřený; tím může Studio ukládat zamykací soubory i do této složky), Path (cesta, zadat), Name (název, který vidí ostatní). Zámek, který nebyl obnoven pět minut, se označí jako zastaralý. V prohlížeči není k dispozici. |
| `WINDOW` | `WN` | Vloží okno do zdi. |
| `XATTACH` | `XA` | Připojí jiný DWG nebo DXF do tohoto výkresu, zobrazený jen pro čtení (XREF je vypíše a znovu načte) |
| `XCLIP` | `XC` | Ořízne odkazy na bloky a propojené výkresy na obdélník nebo mnohoúhelník, nebo ořez odstraní. |
| `XLINE` | `XL` | Konstrukční čára, nekonečná oběma směry: přes dva body, vodorovná, svislá, pod úhlem, půlící úhel, nebo odsazená od úsečky. |
| `XREF` | `XR`, `-XREF` | Propojené výkresy (externí odkazy): vypsat, připojit, znovu načíst, svázat, odpojit |
| `ZOOM` | `Z` | Rozsah, nebo okno |

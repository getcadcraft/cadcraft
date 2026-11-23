---
title: Mapa příkazů: co napsat
summary: Každý příkaz CadCraftu se svými krátkými názvy, od A do Z, vytvořený z programu samotného, a zvyklosti z jiných kreslicích programů, které se liší.
keywords: mapa příkazů, příkazy, zkratky, krátké názvy, odkud přicházíte, seznam příkazů, co napsat, smazat, oříznout, ekvivalent, rozdíly
from: 9426856f
---

CadCraft přebírá názvy příkazů a krátké názvy, které lidé znají z jiných kreslicích programů: napište `L` pro úsečku, `TR` pro oříznutí, `E` pro smazání. Pro většinu z nich tedy není třeba znát žádnou překladovou tabulku: název, který znáte, je zde týž. Níže je každý příkaz, který CadCraft má, vytvořený z programu samotného. {{key:Enter}} zopakuje poslední příkaz; `HELP` na příkazovém řádku vypíše týž seznam.

Těch několik, které nejsou stejné, nebo nejsou hotové:

- **Uložit** stáhne kopii v prohlížeči ({{cmd:SAVE}}, {{cmd:SAVEAS}}); v CadCraft Studiu zapíše soubor. Viz [Přechod z jiného kreslicího softwaru](topic:coming-from).
- **PLOT** vytvoří PDF (také PNG a SVG) s tabulkou stylů tisku; správce nastavení stránky není.
- **DIMSTYLE** a **PEDIT** jsou hotové; **PEDIT** nemá volbu Upravit vrchol (to dělají úchyty).
- **TABLE** není hotová; {{cmd:XREF}}, {{cmd:SPLINE}} a {{cmd:WBLOCK}} hotové jsou.
- Vlastní příkazy rutiny (AutoLISP `C:NAME`) se objeví, až ji načtete příkazem {{cmd:APPLOAD}}; zde nejsou uvedeny.

## Všechny příkazy (402)

| Příkaz | Zkratky | Co dělá |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Otáčí 3D pohled levým tlačítkem |
| `ACCESS` | `AX` | Zapíná nebo vypíná kreslení bez zraku: výsledky čtené čtečkou obrazovky, kurzor z klávesnice na výkresu, zvuky přichycení a mluvené příkazy. |
| `ALIASEDIT` |  | Upraví zkratky příkazů v jednom textovém souboru (známý formát L, *LINE) |
| `ALIGN` | `AL` | Přesune a otočí objekty tak, aby zdrojové body dopadly na cílové body (jeden, dva nebo tři páry), a případně je zvětší nebo zmenší |
| `ALIGNPANEL` | `ALP` | Otevře panel Zarovnat a rozdělit |
| `ALIGNTO` |  | Zarovná levé, střední, pravé, horní, prostřední nebo dolní hrany vybraných objektů k výběru, prvnímu nebo poslednímu vybranému objektu, nebo k bodu |
| `ANNOALLVISIBLE` | `ANNOALL` | Zobrazí anotativní objekty v každém měřítku, nebo jen tam, kde je měřítko výřezu (nebo výkresu) v jejich seznamu |
| `ANNOSCALE` | `CANNOSCALE` | Nastaví anotační měřítko výkresu: anotativní text a kóty se změní tak, aby se tiskly ve stejné velikosti |
| `APPLOAD` | `AP` | Načte aplikace: rutiny LISP (.lsp) a jejich soubory dialogů (.dcl); Sada při spuštění (AP) |
| `ARC` | `A` | Oblouk: 3 body, Začátek/Střed/Konec, Začátek/Střed/Úhel, Začátek/Střed/Délka, Začátek/Konec/Úhel, Začátek/Konec/Směr, Začátek/Konec/Poloměr, Střed/Začátek/Konec, Střed/Začátek/Úhel, Střed/Začátek/Délka, Pokračovat |
| `AREA` | `AA` | Plocha a obvod podle bodů nebo objektu; Přidat a Odečíst udržují průběžný součet (AA) |
| `ARRAY` | `AR` | Kopie v řádcích a sloupcích, nebo kolem středu (AR) |
| `ARRAYASSOCIATIVITY` |  | Nastaví, zda příkazy ARRAY vytvářejí pole, která zůstanou upravitelná (1), nebo prosté kopie (0) |
| `ARRAYCLOSE` |  | Ukončí úpravy zdrojových objektů pole |
| `ARRAYEDIT` |  | Změní pole vytvořené volbou Přidružené: počty, rozteč, zdrojové objekty, jeden prvek |
| `ARRAYPATH` |  | Kopie objektů podél čáry, oblouku, mnohočáry nebo jiné křivky |
| `ARRAYPOLAR` |  | Kopie kolem středového bodu |
| `ARRAYRECT` |  | Kopie v řádcích a sloupcích |
| `ASBUILT` | `ASB` | ASBUILT čte skutečně zaměřené body, které změřila parta (CSV / TXT, jak je zapisuje EXPORTPOINTS), a porovnává je s body výkresu: v toleranci nebo mimo ni, neměřeno, navíc. Označí je na vrstvě AS-BUILT a stáhne CSV zprávu. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definuje atribut (značku, na jejíž hodnotu se blok ptá), který se vloží do bloku (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Upraví hodnoty atributů odkazu na blok na příkazovém řádku, jednu za druhou (Enter ponechá hodnotu) |
| `ATTSYNC` |  | Uvede odkazy bloku do souladu s jeho definicemi atributů: nové se přidají s výchozími hodnotami, odstraněné se zahodí, polohy a text se vynulují; hodnoty se zachovají |
| `AUDIT` |  | Zkontroluje otevřený výkres na poškození: čísla, která nejsou konečná, objekty bez velikosti, chybějící vrstvy, bloky, styly a typy čar, bloky, které obsahují sebe samy, sdílená id, rozbité kóty a šrafy. Vypíše nalezené podle druhu a před opravou se zeptá; oprava je jeden krok zpět. |
| `AUNITS` | `ANGUNITS` | Jak se úhly zobrazují a píší: desetinné stupně, stupně-minuty-sekundy, nebo azimuty jako N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatické doplňování výkresu zapnuto nebo vypnuto, nebo vypíše, co vzory výkresu teď navrhují. |
| `AUTOCONSTRAIN` |  | Přidá vazby shody, vodorovnosti a svislosti tam, kde je geometrie už blízko |
| `AUTODIM` | `ADIM` | Kótování podle pravidel: celkový rozměr, řetězy podél stran, šířky otvorů, průměry děr a rozteč mřížky, bez opakování toho, co už je okótováno. |
| `AUTOSHEET` | `ASH` | Rozloží listy samo: zvolí papír a standardní měřítka a umístí každý pohled s popiskem a razítkem. |
| `BATTMAN` |  | Správce atributů bloku: pořadí, značky, výzvy, výchozí hodnoty a režimy atributů bloku, potom aktualizace jeho odkazů |
| `BCLOSE` |  | Zavře editor bloků: uloží blok, nebo zahodí změny |
| `BCONVERT` |  | BCONVERT najde geometrii, která se opakuje, a změní ji na odkazy na bloky. Vyberte objekty, které se opakují: nalezena bude každá další sada objektů v otevřeném prostoru, která je stejnou geometrií, posunutou a otočenou o libovolný úhel; se zapnutými Zrcadlené nebo Měřítko i zrcadlové obrazy a kopie v jiné velikosti. Dejte novému bloku název a základní bod; výběr a každá kopie se stanou odkazy na něj, každý se svým otočením a měřítkem. Nebo zvolte Blok a pojmenujte existující blok, abyste našli volné kopie jeho objektů. Kopie musí mít stejnou vrstvu, barvu, typ čáry a tloušťku čáry, pokud Vlastnosti nejsou nastaveny na Ignorovat. Objekty na zamčených vrstvách zůstanou nedotčeny. Jeden krok zpět. |
| `BEDIT` | `BE` | Editor bloků: upraví objekty a atributy bloku; BCLOSE uloží (BE) |
| `BLEND` |  | BLEND: spline mezi konci dvou otevřených křivek, vybraných blízko konců, aby se spojily. Spojitost (CON): Tečna sleduje oba směry, Hladký (S) také sleduje, jak se ohýbají. |
| `BLOCK` | `B`, `BMAKE` | Vytvoří blok z objektů (stanou se jedním odkazem) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: každý odkaz na jeden blok se stane odkazem na jiný, na témže místě, se stejným měřítkem a otočením. Hodnoty atributů, které mají oba bloky, se zachovají. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE zobrazí panel Bloky s kurzorem v jeho filtru. Panel ukazuje obrázek každého bloku (nejdříve ty naposledy vložené), jako seznam nebo mřížku; klikněte na obrázek, nebo jej přetáhněte na výkres, a blok se vloží příkazem INSERT. V sekci Knihovny přidejte vlastní soubor DWG nebo DXF: jeho bloky jsou vypsány s obrázky a při vložení se zkopírují do tohoto výkresu. V CadCraft Studiu lze přidat i složku výkresů a soubory a složky se pamatují. |
| `BOMEDIT` | `BOMCOLUMNS` | Sloupce tabulky kusovníku, seskupení, řazení, nadpis, součty a poznámky |
| `BOMEXPORT` |  | Uloží tabulku kusovníku jako soubor .csv |
| `BOMTABLE` | `BOM` | Živá tabulka kusovníku jedné zóny nebo celého výkresu |
| `BOMUPDATE` |  | Aktualizuje hned každou tabulku kusovníku, i zamrazené |
| `BOMZONE` | `BZONE` | Pojmenovaná oblast výkresu pro kusovník: dva rohy, mnohoúhelník, nebo obrys uzavřeného objektu |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): vyberte bod uvnitř uzavřené plochy a získáte kolem ní uzavřenou mnohočáru. Oblouky zůstanou oblouky. Ostrovy obrysují i plochy uvnitř ní. |
| `BOX` |  | Kvádr: dva rohy a výška (3D) |
| `BPARAMETER` | `BPARAM` | Zatím není hotové: přidání parametru (například Viditelnosti) k bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametry bloku: pojmenované parametry se vzorci a několik parametrů viditelnosti v jednom bloku. Funguje v editoru bloků (přiřadí vybrané objekty ke stavu) a na vybraném odkazu (jeho vlastní hodnoty a stavy). |
| `BREAK` | `BR` | Přeruší úsečku, oblouk, kružnici nebo mnohočáru mezi dvěma body (BR) |
| `BREAKATPOINT` |  | Rozdělí úsečku, oblouk nebo mnohočáru na dvě v bodě |
| `BREAKLINE` |  | Nakreslí úsečku se symbolem přerušení; její velikost a prodloužení za konce se pamatují. |
| `BREPLACE` |  | BREPLACE vymění jeden blok za jiný. Vybrané: vyberte odkazy na bloky a pojmenujte blok, který má být místo nich. Vše: pojmenujte blok a jeho náhradu a každý odkaz v každém prostoru i uvnitř jiných bloků se změní. Odkaz si ponechá místo, měřítko, otočení a vrstvu i hodnoty atributů, které mají oba bloky; hodnoty, pro které nový blok nemá místo, se zahodí a pojmenují. |
| `BSEARCH` |  | BSEARCH najde bloky. Název: část názvu bloku, nebo vzor se * a ?. Atribut: hodnota (nebo TAG=hodnota), kterou drží atributy odkazu. Geometrie: vyberte objekty, nebo jeden odkaz na blok, a vypíší se bloky, jejichž tvar je podobný alespoň na 85 %, nejlepší první; velikost, otočení a zrcadlení se nepočítají. Odkazy nalezené v otevřeném prostoru se označí, připravené pro další příkaz. |
| `BURST` |  | Rozloží odkazy na bloky a ponechá to, co říkají jejich atributy: každá hodnota se stane textem na vrstvě atributu. |
| `BVHIDE` | `BVH` | V editoru bloků: skryje objekty v aktuálním stavu viditelnosti. |
| `BVSHOW` | `BVSH` | V editoru bloků: zobrazí objekty, které aktuální stav viditelnosti skrývá (ukážou se vybledlé, aby se daly vybrat). |
| `BVSTATE` | `BVS` | V editoru bloků, u bloku se stavy viditelnosti: přepne na stav, nebo přidá, přejmenuje či smaže jeden. |
| `CAL` |  | Spočítá délku nebo číslo: + − * / a závorky, jak je napíšete kdekoli |
| `CENTERLINE` | `CL` | Osová čára mezi dvěma čarami: uprostřed mezi nimi, nebo podél osy úhlu, když se stýkají (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Značka středu: kříž ve středu kružnice nebo oblouku, s osovými čarami těsně za ním (CM) |
| `CHAMFER` | `CHA` | Zkosí roh mezi dvěma čarami (D dvě vzdálenosti, A délka a úhel, P každý roh mnohočáry) |
| `CHSPACE` |  | CHSPACE: přesune objekty mezi listem a modelem přes výřez. Jsou zvětšeny a otočeny, aby z druhé strany vypadaly stejně. Na listu jdou do modelu; při práci přes výřez (MSPACE) přijdou na list. |
| `CIRCLE` | `C` | Střed a poloměr, průměr, 2 nebo 3 body |
| `CLASS` |  | Vloží vybrané objekty do třídy, nebo když nic není vybráno, nastaví aktivní třídu (? je vypíše) |
| `CLASSES` | `CLS` | Panel Třídy: třídy řadí objekty přes vrstvy; zobrazují, skrývají a stylují je a přepisují je v každém výřezu (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ukotví nebo učiní plovoucí příkazový řádek, udělá z něj jeden řádek, nastaví počet řádků historie, nebo otevře historii (F2) |
| `COMPARESETTINGS` | `CMPSET` | Porovná styly kót, textové styly, vrstvy, listy nebo jednotky: dva v tomto výkresu, nebo tento výkres proti jinému otevřenému, a zkopíruje hodnotu přes. |
| `CONSTRAINTBAR` | `CBAR` | Zobrazí nebo skryje lišty vazeb (Zobrazit vše / Skrýt vše, nebo podle objektu) |
| `COPY` | `CO`, `CP` | Kopíruje objekty, tolikrát, kolikrát kliknete |
| `COPYBASE` |  | Zkopíruje objekty do schránky se základním bodem, který vyberete |
| `COPYCLIP` |  | Zkopíruje objekty do schránky (Ctrl+C); PASTECLIP je vloží |
| `COUNT` | `BCOUNT` | Spočítá odkazy na bloky: vyberte jeden, aby se vybral a spočítal každý odkaz jeho bloku |
| `COUNTTABLE` |  | Vloží tabulku počtů bloků |
| `CREDITS` |  | Vloží zdroje knihovny do výkresu jako tabulku. Spusťte znovu, chcete-li tabulku aktualizovat podle položek, které jsou nyní ve výkresu. |
| `CURSORSIZE` |  | Velikost zaměřovacího kříže: 100 jej spustí od kraje k okraji výkresu (Nastavení › Kurzor › Celá obrazovka) |
| `CUTCLIP` |  | Vyjme objekty do schránky (Ctrl+X): zkopíruje a potom smaže |
| `CYLINDER` | `CYL` | Válec: střed, poloměr a výška (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Vypíše bloky, jejich atributy a vlastnosti objektů jako tabulku ve výkresu nebo soubor CSV |
| `DATALINK` | `DL` | Tabulka ze souboru CSV, který si pamatuje soubor, takže jej lze znovu přečíst |
| `DATALINKUPDATE` | `DLU` | Znovu přečte soubor datového propojení a znovu naplní jeho tabulky |
| `DCALIGNED` | `DCALI` | Kótová vazba: skutečná vzdálenost mezi body, bodem a čarou, nebo dvěma čarami |
| `DCANGULAR` | `DCANG` | Kótová vazba: úhel mezi dvěma čarami, nebo oblouku |
| `DCCONVERT` |  | Promění kóty nakreslené na geometrii, kterou lze vázat, v kótové vazby |
| `DCDIAMETER` | `DCDIA` | Kótová vazba: průměr kružnice nebo oblouku |
| `DCDISPLAY` |  | Zobrazí nebo skryje kótové vazby ve výkresu |
| `DCHORIZONTAL` | `DCHOR` | Kótová vazba: vodorovná vzdálenost |
| `DCLINEAR` | `DCLIN` | Kótová vazba: vodorovná nebo svislá vzdálenost, od místa, kde ji umístíte |
| `DCRADIUS` | `DCRAD` | Kótová vazba: poloměr kružnice nebo oblouku |
| `DCVERTICAL` | `DCVER` | Kótová vazba: svislá vzdálenost |
| `DELBLOCKS` |  | Smaže bloky: každý odkaz (i vnořené, na každém listu) a definice |
| `DELCONSTRAINT` | `DELCON` | Odstraní každou vazbu (geometrickou i kótovou) z vybraných objektů |
| `DELOPENING` |  | Vyjme dveře nebo okno ze stěny. |
| `DESCRIBE` | `DESC` | Řekne, co výkres obsahuje: kolik objektů, jakého druhu, jak velké, co je vybráno. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Zruší výběr (Esc) |
| `DETAILS` | `DET` | Detaily vaší firmy, nalezené pro to, co kreslíte: najít, přidat blok, vypsat, odebrat, zapnout nebo vypnout nabídky. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Nakreslí diagram z textu: vývojový diagram Mermaid, diagram komponent PlantUML, D2, seznam od-do nebo XML draw.io jako bloky a spojnice, které lze upravit |
| `DIMALIGNED` | `DAL`, `DIMALI` | Skutečná vzdálenost mezi dvěma body |
| `DIMANGULAR` | `DAN`, `DIMANG` | Úhel mezi dvěma čarami, oblouku, nebo třemi body |
| `DIMARC` | `DAR` | Kóta délky oblouku: vzdálenost podél oblouku se symbolem oblouku (DAR) |
| `DIMASZ` |  | Nastavení kóty: velikost šipky |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kóty naskládané od jedné základní čáry |
| `DIMBREAK` | `DBREAK` | Přeruší kótovací a pomocné čáry tam, kde kříží jiné objekty (Auto), mezi dvěma body (Ručně), nebo odstraní přerušení |
| `DIMCONSTRAINT` | `DCON` | Kótové vazby: lineární, zarovnané, úhlové, poloměr, průměr, převod |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Řetěz kót, každá od konce předchozí |
| `DIMDEC` |  | Nastavení kóty: počet desetinných míst |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Průměr oblouku nebo kružnice |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Uvolní kóty od objektů, ke kterým jsou připojeny (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Změní text kóty (Domů, Nový text, Otočit), nebo nakloní pomocné čáry (Šikmo) |
| `DIMEXE` |  | Nastavení kóty: prodloužení za kótovací čáru |
| `DIMEXO` |  | Nastavení kóty: odsazení od počátku |
| `DIMGAP` |  | Nastavení kóty: mezera kolem textu |
| `DIMINSPECT` |  | Kóta kontroly: rámeček kolem hodnoty s popiskem a četností kontroly dílu |
| `DIMJOGGED` | `DJO`, `JOG` | Kóta zalomeného poloměru: poloměr nakreslený z bližšího bodu, když je střed daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Přidá symbol zalomení na lineární nebo zarovnanou kótovací čáru, aby ukázal, že vzdálenost není nakreslena v měřítku (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vodorovná nebo svislá vzdálenost (R pro libovolný úhel) |
| `DIMLUNIT` |  | Nastavení kóty: formát délek (1 vědecký, 2 desetinný, 3 inženýrský, 4 stavební, 5 zlomkový) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kóta souřadnice: vzdálenost bodu od počátku UCS v X nebo Y, na výnosce (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Přepíše proměnné kót u vybraných kót, aniž změní jejich styl; Vymazat vrátí styl (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Poloměr oblouku nebo kružnice |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Připojí body kóty k objektům, takže se bude pohybovat a znovu měřit, když se objekty pohnou (DRE) |
| `DIMSCALE` |  | Nastavení kóty: celkové měřítko (velikosti × toto) |
| `DIMSPACE` |  | Rovnoměrné rozestupy mezi rovnoběžnými kótami, měřené od základní kóty (0 je zarovná, Auto je dvojnásobek výšky textu) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Vytvoří, změní, nastaví jako aktuální, smaže, použije a porovná pojmenované styly kót (dialog; -DIMSTYLE na příkazovém řádku) |
| `DIMTEDIT` | `DIMTED` | Přesune text kóty doleva, doprava nebo na střed kótovací čáry, nebo jej otočí |
| `DIMTEXTUNIT` | `DTU` | Text kóty v mm, cm, m nebo km, nebo v jednotkách výkresu: vybrané kóty, jinak nové (DTU) |
| `DIMTXT` |  | Nastavení kóty: výška textu |
| `DIST` | `DI` | Vzdálenost a úhel mezi dvěma body |
| `DISTRIBUTE` |  | Rozmístí vybrané objekty rovnoměrně, do stran nebo nahoru a dolů: stejné kroky mezi středy, nebo stejné mezery; dva vnější zůstanou |
| `DIVIDE` | `DIV` | DIVIDE (DIV): značky, které rozdělí čáru, oblouk, kružnici, mnohočáru, spline nebo elipsu na stejné díly. Body, nebo s Blokem blok u každé značky. |
| `DOCUMENTS` | `DOCS` | Otevře panel Dokumenty: vypůjčení a vrácení výkresů, revize, stavy vydání a schválení pro složku projektu |
| `DOOR` | `DR` | Vloží dveře do stěny. Strana, na kterou kliknete, je strana, do níž se otevírají. |
| `DRAWORDER` |  | Změní pořadí kreslení: přenese objekty dopředu, pošle je dozadu, nebo je dá nad či pod jiné objekty. |
| `DUPLICATE` | `DUP` | Kopie, která se pohybuje s ukazatelem: klikněte, chcete-li ji položit (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Vlastnosti výkresu: název, autor a ostatní, a vaše vlastní dvojice název a hodnota |
| `DXFOUT` |  | Stáhne výkres jako DXF R12 (Uložit si ponechá svůj formát) |
| `EATTEDIT` | `DDATTE` | Upraví atributy odkazu na blok: hodnoty, text a vlastnosti, jeden atribut po druhém |
| `ELLIPSE` | `EL` | Koncové body osy a druhá poloosa |
| `ERASE` | `E`, `DELETE` | Odstraní objekty |
| `EXPLODE` | `X` | Rozloží mnohočáry, bloky a kóty na části |
| `EXPORT` | `EXP` | Uloží kopii výkresu v typu souboru, který zapisuje doplněk |
| `EXPORT3D` | `3DEXPORT` | Exportuje 3D model: GLB, OBJ nebo STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapíše body a body vložení bloků s jedním atributem jako popisem do souboru CSV nebo TXT (PNEZD, PENZD nebo XYZ) pro programy BIM a geodézie |
| `EXTEND` | `EX` | Prodlouží objekty k jiným: klikněte blízko konce, táhněte přes několik, nebo Shift+klik k oříznutí |
| `EXTRIM` |  | EXTRIM: vyberte jednu řeznou hranu a potom stranu. Vše, co hranu kříží, se ořízne na té straně. Kusy, které by zmizely, se ukážou, když pohybujete ukazatelem. |
| `EXTRUDE` | `EXT` | Vytáhne uzavřené 2D objekty na tělesa (3D) |
| `FIELD` |  | Vloží pole do textu, buňky tabulky nebo atributu: datum, název souboru, číslo listu, vlastnost výkresu, plochu nebo délku objektu, nebo vzorec |
| `FILLET` | `F` | Zaoblí nebo zarovná roh mezi dvěma objekty (R poloměr, P každý roh mnohočáry, M několik) |
| `FIND` |  | Najde a nahradí slova v textu, hodnotách atributů a textu kót |
| `FLATTEN` |  | Nastaví výšku (Z) a tloušťku vybraných objektů na 0, i v blocích, které používají. |
| `FLOOR` |  | Zvolí podlaží, na kterém se kreslí, přidá jedno, nebo přesune či zkopíruje výběr na něj. |
| `FLOORLAYERS` |  | Promění podlaží na vrstvy pojmenované Floor-Layer, pro soubor, který půjde někomu bez podlaží. |
| `FLOORS` | `FLR` | Otevře panel Podlaží: naskládá podlaží do jednoho modelového prostoru. |
| `GCCOINCIDENT` |  | Vazba: dva body se setkají, nebo bod zůstane na objektu |
| `GCCOLLINEAR` |  | Vazba: dvě čáry zůstanou na jedné přímce |
| `GCCONCENTRIC` |  | Vazba: dvě kružnice nebo oblouky sdílejí střed |
| `GCEQUAL` |  | Vazba: dvě čáry zůstanou stejně dlouhé, nebo dvě kružnice či oblouky stejný poloměr |
| `GCFIX` |  | Vazba: bod nebo celý objekt zůstane, kde je |
| `GCHORIZONTAL` |  | Vazba: čára (nebo dva body) zůstane vodorovná |
| `GCPARALLEL` |  | Vazba: dvě čáry zůstanou rovnoběžné |
| `GCPERPENDICULAR` |  | Vazba: dvě čáry zůstanou v pravém úhlu |
| `GCSYMMETRIC` |  | Vazba: dva body, čáry nebo kružnice se zrcadlí přes čáru |
| `GCTANGENT` |  | Vazba: čára a kružnice nebo oblouk (nebo dva z nich) zůstanou v tečně |
| `GCVERTICAL` |  | Vazba: čára (nebo dva body) zůstane svislá |
| `GDSIN` | `GDS` | Zobrazí rozvržení IC (soubor proudu GDSII): každou vrstvu a datový typ jako vrstvu výkresu, naplocho, v uživatelských jednotkách; jen pro prohlížení a měření (laboratorní test) |
| `GEOMCONSTRAINT` | `GCON` | Geometrické vazby: vodorovné, svislé, rovnoběžné, tečny, shodné… |
| `GLBOUT` |  | Exportuje 3D model jako GLB (glTF) |
| `GRADIENT` | `GD` | Vyplní plochu přechodem jedné nebo dvou barev |
| `GRID` |  | Nastaví mřížku: vzdálenost mezi čarami, každou N-tou čáru jako hlavní, ZAP nebo VYP, nebo Auto pro opětovné sledování přiblížení |
| `GRIDMOVE` | `GM` | Posune čáru mřížky a přenese, co na ní visí: stěny se natáhnou, sloupky, bubliny a štítky se pohnou, kóty se řídí. |
| `GROUP` | `G` | GROUP (G): dá vybraným objektům společný název. Kliknutí na jeden z nich pak vybere všechny. Enter u názvu vytvoří skupinu bez názvu. |
| `GROUPEDIT` |  | GROUPEDIT: změní skupinu. Vyberte jeden z jejích objektů, nebo zadejte Název; potom Přidat nebo Odebrat objekty, Přejmenovat, změnit Popis, nebo určit, zda klik vybere celou skupinu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Vyplní plochu plnou výplní nebo vzorem: klikněte dovnitř, nebo vyberte uzavřené objekty (H) |
| `HATCHEDIT` | `HE` | Změní šrafu: vzor, měřítko, úhel, počátek a její spojení s hranicí. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Znovu vytvoří hraniční mnohočáry ze šrafy, spojené s ní nebo ne |
| `HATCHTOBACK` |  | Pošle každou šrafu za všechno ostatní. |
| `HELP` | `?` | Tento seznam |
| `HIDEOBJECTS` |  | Skryje vybrané objekty, dokud nepřijde UNISOLATEOBJECTS. Neukládá se do výkresu. |
| `HISTORY` | `HIST` | HISTORY (HIST): verze tohoto výkresu — kopie uchované na tomto počítači, když je Studio uloží, a verze z cloudu — k otevření, obnovení a porovnání se změnami zobrazenými barvou. |
| `ID` |  | Souřadnice bodu |
| `IMAGE` | `IM` | Dá CadCraftu soubory obrázků, které výkres používá (DWG ukládá jen to, kde byly). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Vloží obrázek (PNG nebo JPEG) ze souboru. |
| `IMAGECLIP` | `ICL` | Ořízne obrázek na obdélník nebo mnohoúhelník, nebo jeho oříznutí odstraní. |
| `IMPORT` | `IMP` | Importuje soubor druhu, který čte doplněk, do tohoto výkresu |
| `INSERT` | `I`, `DDINSERT` | Vloží blok (S měřítko, R otočení); F ze souboru DWG/DXF, L z knihovny |
| `INTERSECT` | `IN` | Ponechá jen to, co tělesa mají společné (3D), nebo plochu, kterou sdílejí 2D oblasti |
| `ISODRAFT` |  | ISODRAFT: izometrické kreslení zapnuto nebo vypnuto, nebo přímo na rovinu Vlevo, Nahoře nebo Vpravo. Dokud je zapnuto, Ortogonální a polární sledování sledují dvě osy roviny, mřížka se kreslí izometricky a ELLIPSE má Izokružnici. |
| `ISOLATEOBJECTS` | `ISOLATE` | Zobrazí jen vybrané objekty; vše ostatní v tomto prostoru je skryto, dokud UNISOLATEOBJECTS. Neukládá se do výkresu. |
| `ISOPLANE` |  | ISOPLANE: zvolí izometrickou rovinu, na kterou se kreslí: Vlevo, Nahoře nebo Vpravo. Enter přejde na další, jako F5 při zapnutém izometrickém kreslení. |
| `JOIN` | `J` | Spojí úsečky, oblouky a mnohočáry, které se stýkají konec na konec, do jedné mnohočáry; čáry na jedné přímce do jedné čáry (J) |
| `LASER` | `LASERCUT` | Otevře panel Laser: pošle vrstvy na laserovou řezačku nebo gravírku (G-kód GRBL) |
| `LASSOMODE` |  | Stisknutí a tažení nakreslí lasso (1), nebo obdélník (0) |
| `LAYDEL` |  | Smaže vrstvu a každý objekt na ní (v modelu, na listech i v blocích) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otevře správce vrstev: každou vrstvu v jedné tabulce |
| `LAYERPANEL` |  | Zobrazí panel vrstev |
| `LAYFRZ` |  | Zamrazí vrstvu každého vybraného objektu |
| `LAYGROUP` | `LG` | Seskupí vrstvy do složek v panelu Vrstvy. |
| `LAYISO` |  | Izoluje vrstvy vybraných objektů (každá další vrstva vypnuta) |
| `LAYLOCKFADE` |  | Nastaví, jak moc vyblednou objekty na zamčených vrstvách, a zda je může vybrat klik. |
| `LAYMCUR` |  | Nastaví vrstvu vybraného objektu jako aktuální |
| `LAYMRG` |  | Sloučí vrstvy: jejich objekty přejdou na cílovou vrstvu a sloučené vrstvy zmizí |
| `LAYOFF` |  | Vypne vrstvu každého vybraného objektu |
| `LAYON` |  | Zapne každou vrstvu |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nový list s razítkem a výřezem |
| `LAYTHW` |  | Odmrazí každou vrstvu |
| `LAYUNISO` |  | Znovu zapne vrstvy, které LAYISO vypnulo |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Převede text psaný starými vietnamskými písmy (TCVN3 / písma ABC jako .VnTime a VNI písma jako VNI-Times) do Unicode. Takový text se už zobrazuje správně; tímto se přepíše natrvalo, s počtem a jedním krokem zpět. |
| `LENGTHEN` | `LEN` | Prodlouží nebo zkrátí čáry, oblouky a mnohočáry: o hodnotu, o procento, na celkovou délku, nebo tažením (LEN) |
| `LIBRARY` | `LIB` | Panel knihovny: umístit položky, zkontrolovat aktualizace, zdroje |
| `LIMITS` |  | Nastaví limity výkresu: ZAP, VYP, nebo levý dolní a pravý horní roh. Při zapnutých limitech se body mimo ně odmítnou |
| `LINE` | `L` | Rovné úseky, každý je samostatný objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Typ čáry, který dostanou nové objekty (podle vrstvy, podle bloku, nebo pojmenovaný) |
| `LINKVIEWS` | `SYNCVIEWS` | Posouvá a přibližuje všechna podokna najednou (rozdělená obrazovka), aby se srovnaly dva výkresy nebo revize |
| `LISPEDIT` | `VLIDE` | LISPEDIT (nebo VLIDE) otevře editor LISPu: okno pro psaní, načtení a zkoušení rutiny. Načíst do výkresu přečte každou formu, jako načtení souboru příkazem APPLOAD, a vytvoří jeho příkazy. Spustit výběr vyhodnotí vybrané formy, nebo formu, v níž je kurzor. Konzole ukáže, co rutina vypsala, a každou chybu s řádkem. Odpovídající závorka je označena, jak píšete, a Enter odsadí nový řádek. Nový, Otevřít a Uložit pracují se souborem .lsp. Seznamy vedle textu ukazují funkce, které rutina definuje, ty, které volá a které tento LISP ještě nemá, a všechny, které má. Okno neblokuje výkres, takže rutina může žádat body; Stop nebo Esc ukončí běžící rutinu. |
| `LIST` | `LI`, `LS` | Popíše objekty v historii |
| `LTSCALE` | `LTS` | Měřítko typu čáry výkresu (každá čárka a mezera se jím násobí) |
| `LWDISPLAY` | `LWT` | Zobrazí nebo skryje tloušťky čar na obrazovce (tlačítko LWT ve stavovém řádku) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Tloušťka čáry, kterou dostanou nové objekty (podle vrstvy, podle bloku, výchozí, nebo mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Mapové vrstvy pod modelovým prostorem: souřadnicový systém výkresu, dlaždice, WMS, WMTS, ArcGIS, obrázky |
| `MASSPROP` |  | MASSPROP: průřezové vlastnosti oblastí a uzavřených objektů: plocha, obvod, těžiště, momenty a deviační moment, poloměry setrvačnosti a hlavní osy. Přesné pro čáry a oblouky. Může zapsat zprávu do textového souboru. |
| `MATCHPROP` | `MA`, `PAINTER` | Přenese vlastnosti: zkopíruje vrstvu, barvu a další z jednoho objektu na jiné (MA) |
| `MEASURE` | `ME` | MEASURE (ME): značku každou danou délku podél čáry, oblouku, kružnice, mnohočáry, splinu nebo elipsy, od konce nejblíže vašemu výběru. Body, nebo s Blokem blok u každé značky. |
| `MEASUREGEOM` | `MEA` | Změří vzdálenost, poloměr, úhel nebo plochu (MEA) |
| `MINSERT` |  | MINSERT: vloží blok do řádků a sloupců najednou. Každý je samostatný odkaz, takže kterýkoli lze přesunout nebo smazat. |
| `MIRROR` | `MI` | Zrcadlí objekty přes čáru |
| `MLEADER` | `MLD`, `MLEAD` | Víceúrovňová výnoska: šipka, výnoska a poznámka jako jeden objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Srovná víceúrovňové výnosky s jednou z nich podél směru, ve stejných roztečích, nebo je rozmístí mezi dva body (MLA) |
| `MLEADERCOLLECT` | `MLC` | Sloučí několik víceúrovňových výnosek do jedné: jejich bloky v řadě nebo sloupci, nebo jejich poznámky pod sebou (MLC) |
| `MLEADEREDIT` | `MLE` | Přidá výnosové čáry k víceúrovňové výnosce nebo je odebere; přepne její obsah mezi textem a blokem (MLE) |
| `MLINE` |  | Nakreslí rovnoběžné čáry najednou, spojené v rozích. |
| `MOVE` | `M` | Přesune objekty podle základního bodu a druhého bodu |
| `MSPACE` | `MS` | Pracuje na modelu přes výřez otevřeného listu (nebo dvojklik uvnitř výřezu). |
| `MTEXT` | `MT`, `T` | Odstavcový text: přetáhněte jeho šířku, potom pište na místě; Enter začne nový odstavec (T) |
| `MVIEW` | `MV` | Výřez na model v rozvržení |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pojmenované pohledy: uloží pohled na obrazovce (nebo okno) pod názvem a vrátí se k němu (NV) |
| `NCOPY` |  | Zkopíruje objekty z odkazu na blok nebo propojeného výkresu do výkresu, bez rozložení. |
| `NEARBY` |  | Řekne, co leží blízko kurzoru, nejbližší první, se vzdáleností a stranou. |
| `NEW` |  | Začne nový výkres |
| `OBJECTSCALE` | `OBJSCALE` | Anotační měřítka anotativního textu a kót: přidá měřítko, smaže jedno, přidá aktuální měřítko, nebo je vypíše (každý výřez je ukáže ve velikosti pro své měřítko) |
| `OBJOUT` |  | Exportuje 3D model jako OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Kancelářský standard: výšky textu na papíře, vrstvy, pole razítka a šablony v jednom záznamu. Ukáže platný a odkud pochází; Import záznamu .json do tohoto výkresu, přidá kancelářské vrstvy, které výkres nemá, vypíše pole razítka. |
| `OFFSET` | `O` | Rovnoběžné kopie v určité vzdálenosti |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: jak OFFSET uzavře mezery na vnějších rozích mnohočáry. 0 prodlouží úseky, 1 přidá oblouk, 2 přidá rovný řez. Platí pro tuto relaci. |
| `OLELIST` | `OLES` | Vypíše objekty OLE, které výkres nese, a umístí kopii obrázku jednoho z nich, kam vyberete |
| `OPEN` |  | Otevře DWG nebo DXF z tohoto počítače |
| `OPENIN3D` |  | Otevře tento výkres v aplikaci 3D modelování, na nové kartě (nic se nenahrává) |
| `OPTIONKEYS` | `OPTKEYS` | Dá volbám příkazů vlastní písmena (ARRAY.PO, P) v jednom textovém souboru |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otevře nabídku přichytávání k objektům: vyberte, která přichycení jsou zapnuta. Také pravý klik na Přichytávání ve stavovém řádku. |
| `OVERKILL` |  | Smaže duplicitní objekty a sloučí překrývající se nebo na konec navazující čáry a oblouky v toleranci. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametry: uživatelské parametry a kótové vazby v jedné tabulce |
| `PARTSLIST` | `PLIST` | Tabulka seznamu dílů každého normalizovaného dílu a ocelového profilu umístěného z knihovny |
| `PASTEAREA` | `PAREA` | Vloží oblast zkopírovanou v MarkupCraftu (Kopírovat oblast) ve skutečné velikosti, jako obrázek. |
| `PASTEBLOCK` |  | PASTEBLOCK: vloží, co jste zkopírovali, jako jeden blok. Blok dostane vlastní název; RENAME mu dá váš. |
| `PASTECLIP` |  | Vloží schránku: následuje kurzor, klikněte, kam má jít (Ctrl+V) |
| `PASTEORIG` |  | Vloží schránku na souřadnice, odkud byla zkopírována (Ctrl+Shift+V) |
| `PDF` |  | Dá CadCraftu soubory PDF, které používají podklady výkresu |
| `PDFADJUST` |  | Ztlumí, zesílí kontrast, převede na jednobarevné nebo vypne podklad PDF |
| `PDFATTACH` | `PDFATT` | Připojí stránku PDF jako podklad (PDFATTACH) |
| `PDFCLIP` |  | Ořízne podklad PDF na obdélník nebo mnohoúhelník |
| `PDFIMPORT` | `PDFIM` | Promění čáry, výplně a text stránky PDF na objekty výkresu (PDFIMPORT) |
| `PDFLAYERS` |  | Zapne nebo vypne vrstvy podkladu PDF |
| `PEDIT` | `PE` | Upraví mnohočáru: uzavřít, otevřít, spojit, šířka, vyhladit křivku, spline, zrušit vyhlazení, generování typu čáry, obrátit; čáry, oblouky a splin lze převést na mnohočáry |
| `PENPRESSURE` |  | Zda tlak tahu pera nastavuje tloušťku čáry toho, co SKETCHFIX a SKETCHLIVE vytvoří (ve výchozím stavu zapnuto). Uchováno v tomto prohlížeči. |
| `PHOTOSKETCH` | `PSK` | Promění fotografii ruční skici na papíře na čáry a oblouky v měřítku, narovná perspektivu a dá každé barvě pera vlastní vrstvu. |
| `PICKSTYLE` |  | PICKSTYLE: zda výběr jednoho objektu skupiny vybere celou skupinu (1, výchozí nastavení), nebo jen ten objekt (0). Platí pro tuto relaci. |
| `PLAN` |  | Otočí pohled tak, aby osa X UCS (aktuální UCS, uložený Ucs, nebo Svět) byla na obrazovce vodorovná. Nic ve výkresu se nepohne. |
| `PLINE` | `PL` | Mnohočára z úseček a oblouků |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Vykreslí do PDF: rozvržení, nebo model v měřítku |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabulky stylů tisku: nastaví, jak se každá barva tiskne (barva, černá, šedá, inkoust, tloušťka čáry); uchovává se s výkresem (STYLESMANAGER) |
| `POINT` | `PO` | Bodové objekty |
| `POINTCLOUD` | `PC` | připojený bodový mrak: řez, výška, tloušťka, barva, velikost, viditelnost, přiblížení, odpojení |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | připojí bodový mrak (LAS, LAZ, XYZ, PTS) pod výkres |
| `POLARANG` |  | Krok polárního sledování ve stupních (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravidelný mnohoúhelník |
| `PRESSPULL` |  | Zatlačí nebo vytáhne stěnu tělesa (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otevře panel Vlastnosti (také Ctrl+1, nebo dvojklik na objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Složí panel Vlastnosti k okraji okna |
| `PSPACE` | `PS` | Opustí výřez, ve kterém pracujete, a vrátí se na list (nebo dvojklik mimo něj). |
| `PUBLISH` | `-PUBLISH` | Vykreslí několik nebo všechny listy do jednoho PDF (stránka a záložka pro každý list) |
| `PURGE` | `PU` | Odstraní definice bloků, které nic nepoužívá |
| `QDIM` |  | Rychlá kóta: okótuje několik objektů najednou (spojitě, základní, odsazeně, souřadnice, poloměr nebo průměr) |
| `QPMODE` | `QP` | Rychlé vlastnosti u kurzoru zapnuty nebo vypnuty |
| `QSELECT` | `QS` | Rychlý výběr: každý objekt daného typu, jehož vrstva, barva, velikost nebo název odpovídá (QS) |
| `RASTERSNAP` |  | Zapne nebo vypne přichytávání k čarám naskenovaných listů. |
| `RAY` |  | Polopřímka: konstrukční čára z bodu, nekonečná jedním směrem. |
| `RECOVER` |  | Otevře poškozený DXF nebo DWG: přeskočí, co nejde přečíst, místo odmítnutí souboru, řekne, co přeskočil, potom zkontroluje a opraví výkres jako AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Uzavřená mnohočára ze dvou rohů |
| `REDLINE` | `RDL` | Revizní poznámka na revizi: přečte balíček revizních poznámek MarkupCraftu, přijme nebo zamítne každou změnu, označí přijaté revizním oblakem s revizním záznamem a uloží soubor odpovědí (RDL) |
| `REDO` |  | Znovu provede, co bylo vráceno zpět |
| `REFCLOSE` |  | Dokončí úpravu bloku na místě: uloží jej, nebo zahodí změny |
| `REFEDIT` |  | Upraví blok na místě, kde sedí jeho odkaz, zbytek výkresu je vybledlý; REFCLOSE jej uloží |
| `REGEN` | `RE` | Znovu sestaví to, co je na této kartě nakresleno z výkresu |
| `REGENALL` | `REA` | Znovu sestaví to, co je nakresleno na každé kartě, podokně a v každém otevřeném výkresu |
| `REGION` | `REG` | REGION (REG): vytvoří ploché oblasti (regiony) z uzavřených objektů, nebo z čar, oblouků a mnohočar, které se uzavřou konec na konec. UNION, SUBTRACT a INTERSECT je pak kombinují a MASSPROP dá jejich průřezové vlastnosti. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Zaregistruje několik skenů: umístí je do jednoho rámu podle vybraných dvojic bodů nebo cílů, zpřesní pomocí ICP, exportuje jeden LAS nebo E57 |
| `REINIT` |  | Znovu načte váš soubor zkratek |
| `RENAME` | `-RENAME`, `REN` | Přejmenuje vrstvu nebo blok (každý objekt nebo odkaz půjde s ním) |
| `REVCLOUD` | `RC` | Revizní oblak: kolem obdélníku, mnohoúhelníku, volné cesty nebo objektu (RC) |
| `REVOLVE` | `REV` | Otočí uzavřené 2D objekty kolem osy na tělesa (3D) |
| `ROTATE` | `RO` | Otočí objekty kolem základního bodu |
| `SAMPLES` | `SAMPLE` | Otevře jeden ze vzorových výkresů CadCraftu (architektonická sada, skutečné provedení), abyste se z něj mohli učit |
| `SAVE` | `QSAVE` | Stáhne výkres ve svém formátu (DWG nebo DXF) |
| `SAVEAS` |  | Stáhne výkres jako DWG nebo DXF: vyberte, který |
| `SAYSEL` |  | Řekne, co je vybráno, jednu větu za každý objekt. |
| `SCALE` | `SC` | Zvětší nebo zmenší objekty kolem základního bodu |
| `SCALELISTEDIT` | `SCALELIST` | Přidá, upraví a smaže vlastní měřítka výkresu; objeví se v seznamech měřítek výřezů a vykreslení a ukládají se do souboru (SCALELIST) |
| `SCANALIGN` | `SCL` | Zarovná naskenovaný list do dvou bodů: přesune, otočí a, pokud zvolíte, změní měřítko. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Vloží naskenovaný výkres: PNG, JPEG nebo TIFF (jedna stránka, nebo všechny stránky vícestránkového souboru), nebo stránku PDF, která je obrázkem. |
| `SCANCLEAN` | `SCC` | Převede naskenovaný list na černobílý a odstraní skvrny. |
| `SCANCROP` | `SCR` | Ořízne naskenovaný list na okno. |
| `SCANDESKEW` | `SCD` | Najde úhel, pod kterým leží dlouhé čáry naskenovaného listu, a po přijetí úhlu list narovná. |
| `SCANERASE` | `SCE` | Smaže oblast naskenovaného listu: obdélník, mnohoúhelník nebo lasso. |
| `SCANINFO` | `SCI` | Ukáže původní soubor naskenovaného listu a kroky provedené od té doby. |
| `SCANSCALE` | `SCS` | Změní měřítko naskenovaného listu: vyberte na něm dva body a napište jejich skutečnou vzdálenost. |
| `SCANTRACE` | `SCT` | Obtáhne naskenovaný list do čar a oblouků na nové vrstvě s tolerancí, kterou nastavíte. Text a šrafy zůstanou jako rastr. |
| `SELECT` |  | Vybere objekty hned (pro P, Předchozí, v dalším příkazu) |
| `SELECTALL` | `AI_SELALL` | Vybere každý objekt, který můžete na této kartě upravit (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Vybere každý objekt jako ty, které vyberete: stejný typ, vrstvu a barvu (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Ukáže panel Sada listů: listy z mnoha výkresů, očíslované, vykreslené jako jedno PDF. |
| `SHORTCUTS` | `KEYS` | Dá libovolnému příkazu vlastní klávesu (Ctrl nebo Alt s písmenem, nebo volnou funkční klávesu), uchovanou v tomto prohlížeči nebo desktopové aplikaci. |
| `SHXFONTS` | `SHX` | Dá CadCraftu písma SHX ze složky nebo souborů, aby textové styly, které je pojmenují, se kreslily v nich (seznam, odebrat, obrátit) |
| `SKETCHFIX` | `SKF` | Kreslí tahy volnou rukou; každý se stane čistou úsečkou, kružnicí, obloukem, obdélníkem nebo mnohočárou, čtvercovou a spojenou s ostatními. |
| `SKETCHLIVE` | `SKL` | Kreslení perem: každý tah se při zvednutí pera stane přesnou úsečkou, kružnicí, obloukem nebo obdélníkem, přichycenou k výkresu, s velikostí, kterou přepíšete. |
| `SPLINE` | `SPL` | Nakreslí spline body (nebo s řídicím mnohoúhelníkem), nebo z mnohočáry udělá spline |
| `SPLINEDIT` | `SPE` | Upraví spline: body vyhlazení, řídicí body a váhy, otevře nebo uzavře, obrátí, nebo převede na mnohočáru |
| `SPLIT` |  | Rozdělí plochu výkresu na podokna (jako VPORTS na modelu; i z listu) |
| `STEELMEMBER` | `SMEMBER` | Ocelový prvek ve 3D z normalizovaného průřezu: dva body (nosník), nebo základní bod a výška (sloup) |
| `STLOUT` |  | Exportuje 3D model jako STL (milimetry) |
| `STRETCH` | `S` | Natáhne: přetáhněte křížící okno přes konce, aby se pohnuly; co je uvnitř, se pohne, zbytek zůstane (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Textové styly: písmo, výška, šířka a sklon, které dostane nový text (dialog; -STYLE na příkazovém řádku) |
| `SUBTRACT` | `SU` | Odečte tělesa od jiných (3D), nebo 2D oblasti od oblastí |
| `SWBOUT` | `SWMACRO` | Stáhne makro pro SolidWorks (.swb), které znovu sestaví model jako jednu vázanou skicu |
| `SWEEP` |  | Vytáhne uzavřené 2D objekty podél dráhy (čára, mnohočára, oblouk, kružnice) na tělesa (3D) |
| `TABLE` | `TB` | Vytvoří tabulku: řádky a sloupce, nebo z buněk tabulkového procesoru ve schránce nebo ze souboru CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Upraví tabulku: psaní do buňky, vložení a smazání řádků a sloupců, velikosti, sloučené buňky, zarovnání |
| `TABLEEXPORT` |  | Uloží, co tabulka ukazuje, jako soubor CSV |
| `TABLEPASTE` | `PASTETABLE` | Vytvoří tabulku z buněk tabulkového procesoru ve schránce |
| `TABLESTYLE` | `TS` | Styly tabulek: výšky textu, zarovnání, okraj a ohraničení pro nadpis, záhlaví a datové řádky |
| `TAGS` |  | Značky na odkazech bloků: definuje značku (druh, povolené hodnoty, bloky, na které se vztahuje), nastaví ji na vybrané odkazy a vypíše je jako rozpis, který lze uložit jako CSV |
| `TEXT` | `DT`, `DTEXT` | Jednořádkový text; Enter začne další řádek |
| `TEXTEDIT` | `ED`, `DDEDIT` | Upraví text na místě: vyberte text (nebo na něj dvakrát klikněte) (ED) |
| `TEXTMASK` | `TMASK` | Umístí za texty podkladovou masku (pozadí výkresu nebo barvu), nebo ji odstraní. |
| `TEXTTOFRONT` |  | Přenese veškerý text, kóty a výnosky před všechno ostatní. |
| `TOOLBAR` |  | Zvolí, co ukazují tlačítka panelu nástrojů: ikony a text, jen ikony, nebo jen text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Umístí panel nástrojů nahoru, dolů, vlevo nebo vpravo v okně |
| `TOOLBARROWS` |  | Zvolí, kolik řádků panel nástrojů používá: zalomit podle šířky, 2, nebo 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Nastaví lišty nad výkresem jako standardní, nebo kompaktní |
| `TOUCHCROSSHAIR` | `TCX` | Posunutý zaměřovací kříž pro kreslení prstem: jeden prst pohybuje zaměřovacím křížem, který sedí nad prstem a vedle něj, takže prst nezakrývá bod výběru. Zvednutí prstu nic nevybere; tlačítko Klik nebo klepnutí druhým prstem vybere v zaměřovacím kříži, a podržení Kliku při pohybu táhne. Dlouhý stisk nebo tlačítko Enter je Enter. Dva prsty posouvají a přibližují. Volby: ZAP, VYP, Auto (zapnuto jen tam, kde je prst jediný ukazatel), Vzdálenost, Strana. |
| `TOUR` | `TUTORIAL` | Znovu projde šestikrokovou prohlídku prvního výkresu |
| `TRIM` | `TR` | Ořízne objekty tam, kde je kříží jiné: klikněte na kus, táhněte přes několik, nebo Shift+klik k prodloužení |
| `TRIMEXTENDMODE` |  | Jak začíná TRIM a EXTEND: 1 Rychlý (každý objekt je řezná hrana nebo hranice), 0 Standardní (nejprve vyberete hrany) |
| `TTR` |  | Kružnice tečná ke dvěma objektům, s poloměrem, který zadáte (stejné jako CIRCLE T). |
| `TURNLEFT` |  | Otočí pohled o 90° doleva (proti směru hodinových ručiček): UCS Z -90, a pohled se otočí s ním. Nic ve výkresu se nepohne. |
| `TURNRIGHT` |  | Otočí pohled o 90° doprava (po směru hodinových ručiček): UCS Z 90, a pohled se otočí s ním. Nic ve výkresu se nepohne. |
| `TURNWORLD` |  | Zpět do světa: UCS Svět, a pohled je zase vodorovný. |
| `TXT2MTXT` | `T2M` | Spojí jednořádkové texty do jednoho odstavcového textu, shora dolů. |
| `UCS` |  | Váš vlastní souřadnicový systém: počátek a osa X (počátek, úhel Z, 3bod, Objekt, Předchozí, Svět, Pojmenovaný). Body, které napíšete, ortogonální mód, polární sledování, mřížka a nový text jej následují; pohled se otočí tak, aby jeho osa X byla vodorovná. Nic ve výkresu se nepohne. |
| `UNDO` | `U` | Vrátí zpět poslední příkaz |
| `UNGROUP` |  | UNGROUP: rozebere skupiny. Vyberte objekty skupin, nebo zadejte Název. Objekty zůstanou ve výkresu. |
| `UNION` | `UNI` | Spojí tělesa v jedno (3D), nebo 2D oblasti v jednu oblast |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Znovu zobrazí každý objekt skrytý příkazem ISOLATEOBJECTS nebo HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Jak se délky zobrazují a píší: desetinné, stopy a palce, zlomky (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Znovu spočítá pole a zvolí, kdy se samy aktualizují |
| `USDOUT` |  | Exportuje 3D model jako USD (text .usda, binární .usdc, nebo balíček .usdz) |
| `VIEW` | `-VIEW`, `V` | Standardní 3D pohledy, perspektivní nebo rovnoběžné (3D) |
| `VIEWBASE` | `FLATSHOT` | Vloží plochý 2D pohled na 3D tělesa (zepředu, shora, z boku nebo izometricky, skryté čáry čárkovaně) na list, nebo do modelu |
| `VIEWLABEL` | `VL` | Nadpis pohledu na listu, který ukazuje název pohledu jeho výřezu a mění se s ním. |
| `VOICE` |  | Zapne nebo vypne mluvené příkazy. Rozpoznávají se na tomto počítači. |
| `VPCLIP` |  | Ořízne výřez listu na uzavřený objekt nebo nakreslený mnohoúhelník; Smazat jej udělá zase obdélníkem |
| `VPLAYER` |  | Zamrazí nebo odmrazí vrstvy jen v některých výřezech (Zamrazit, Odmrazit, Obnovit) a zvolí, které vrstvy začínají v nových výřezech zamražené (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Rozdělí plochu výkresu na podokna, každé se svým pohledem (na listu: výřez, jako MVIEW) |
| `VPVIEW` |  | Nastaví, co výřez ukazuje: vyberte okno na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizuální styl 3D pohledu: stínovaný, hrany, skrytá čára, drátový model, rentgen |
| `WALL` | `WA` | Kreslí 2D stěny jako mnohočáru. Spojí se a nesou dveře a okna. |
| `WALLARC` | `WARC` | Nakreslí oblouk stěn. Půdorysné stěny jsou rovné, takže oblouk se kreslí jako krátké rovné stěny (po 15 stupních), které se spojí. |
| `WALLDELSEG` |  | Smaže kus stěny mezi dvěma body. Co zbude, zůstane jednou nebo dvěma stěnami. |
| `WALLDIM` |  | Napište novou hodnotu kóty: stěna na jejím vzdáleném konci se posune kolmo sama k sobě, stěna na prvním konci zůstane a stěny na ni navazující následují. |
| `WALLDISJOIN` |  | Vyberte stěnu blízko jednoho konce, abyste na tom konci zakázali spojení: konec se nakreslí kolmo a nic ho nenásleduje. Vyberte ji znovu, chcete-li je povolit. |
| `WALLGRID` |  | Zamkne stěnu k mřížkové čáře: podél ní, nebo jedním koncem na ní. Posuňte čáru pomocí GRIDMOVE a stěna ji bude následovat. |
| `WALLHOLD` |  | Zarovná a zamkne: stěna si drží místo vůči jiné stěně (na své čáře, nebo ve vzdálenosti, kterou má). Pohne-li se jedna, druhá ji následuje. |
| `WALLHOLDDIM` |  | Zamkne vzdálenost mezi dvěma rovnoběžnými stěnami. Pohne-li se jedna, druhá ji následuje, aby ji udržela. |
| `WALLHOLDS` |  | Vypíše zámky na stěnách. |
| `WALLJOINS` |  | Dá každé stěně staršího výkresu její id a uloží spoje mezi nimi. Stane se to také při první změně, kterou provedete. |
| `WALLJOINSTYLE` |  | Klikněte na roh, kde se dvě stěny stýkají konec na konec, abyste změnili, jak se kreslí: zkosení, tupý, kolmo ukončit. T přepíná, která stěna prochází. |
| `WALLOFFSET` | `WO` | Posune stěnu kolmo k sobě o vzdálenost (stěny na ni navazující ji následují), nebo vytvoří kopii v této vzdálenosti. |
| `WALLPICK` |  | Vytvoří stěny na čáře nebo mnohočáře ve výkresu, s čárami na ni navazujícími, pokud řeknete Ano. |
| `WALLPOLY` | `WP` | Nakreslí stěny kolem pravidelného mnohoúhelníku o 3 až 64 stranách, jako POLYGON. |
| `WALLRECT` | `WR` | Nakreslí čtyři spojené stěny ze dvou protilehlých rohů, jako RECTANG. |
| `WALLREJOIN` |  | Z dvou částí stěny udělá zase jednu stěnu. První si zachová své místo ve výkresu. |
| `WALLROT` |  | Nakreslí čtyři spojené stěny jako obdélník otočený pod libovolným úhlem: první strana, potom jak daleko ven. |
| `WALLSPLIT` | `WS` | Rozdělí stěnu na dvě v bodě, nebo tam, kde ji kříží jiná stěna. Části zůstanou spojené, pokud nepožádáte o mezeru nebo volné konce. Dveře a okna jdou s svou částí. |
| `WALLSPLITGAP` |  | Rozdělí stěnu a nechá mezeru: napište mezeru, vyberte stěnu, potom bod. Části si ponechají volné konce a lze je znovu spojit. |
| `WALLSTRETCH` |  | Natáhne oknem: konce stěn uvnitř se pohnou, stěny zcela uvnitř se pohnou celé, a stěny, které narážejí do jejich stran, po nich klouzají. |
| `WALLTAN` |  | Pokračuje stěnou obloukem, který z ní vychází podél stěny (nakreslený jako krátké rovné stěny). |
| `WALLTRACE` |  | Vytvoří stěny kolem nejmenší uzavřené plochy čar a stěn kolem bodu, na který kliknete. |
| `WALLUNHOLD` |  | Sejme zámky ze stěny (a zámky ostatních stěn k ní). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapíše blok, některé objekty nebo celý výkres do nového souboru DWG nebo DXF (W) |
| `WEDGE` | `WE` | Klín: dva rohy a výška; svažuje se od prvního rohu (3D) |
| `WHEREAMI` | `WHERE` | Řekne, kde je kurzor. |
| `WHOHAS` |  | Řekne, kdo má výkres otevřený. CadCraft Studio vede malý zamykací soubor vedle každého otevřeného výkresu (Plan.dwg.cclock: kdo, od kdy, která verze) a při zavření jej odstraní. Volby: Current (otevřený výkres), File (vyberte jeden), FOlder (každý výkres ve složce, který je někde otevřen), Path (napište cestu), Name (název, který vidí ostatní). Zámek, který nebyl obnoven pět minut, je zastaralý. V prohlížeči není k dispozici. |
| `WINDOW` | `WN` | Vloží okno do stěny. |
| `XATTACH` | `XA` | Propojí další DWG nebo DXF s tímto výkresem, zobrazený jen pro čtení (XREF je vypíše a znovu načte) |
| `XCLIP` | `XC` | Ořízne odkazy na bloky a propojené výkresy na obdélník nebo mnohoúhelník, nebo ořez odstraní. |
| `XLINE` | `XL` | Konstrukční čára, nekonečná oběma směry: přes dva body, vodorovná, svislá, pod úhlem, půlící úhel, nebo odsazená od čáry. |
| `XREF` | `XR`, `-XREF` | Propojené výkresy (externí odkazy): vypsat, připojit, znovu načíst, svázat, odpojit |
| `ZOOM` | `Z` | Rozsah, nebo okno |

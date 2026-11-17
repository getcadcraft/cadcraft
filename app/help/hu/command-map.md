---
title: Parancstérkép: mit kell beírni
summary: A CadCraft minden parancsa a rövid neveivel, A-tól Z-ig, a programból készítve, és a más rajzolóprogramoktól eltérő szokások.
keywords: parancstérkép, parancsok, álnevek, rövid nevek, átállás, parancslista, mit kell beírni, törlés, vágás, megfelelő, eltérések
from: 3bdfd3e6
---

A CadCraft a más rajzolóprogramokból ismert parancsneveket és rövid neveket veszi át: a `L` beírása vonalat rajzol, a `TR` vágást, az `E` törlést ad. Így a legtöbbhöz nincs megtanulandó fordítási táblázat: az ismert név itt is ugyanaz. Az alábbi lista a CadCraft összes parancsa, a programból készítve. Az {{key:Enter}} megismétli az utolsó parancsot; a parancssorban a `HELP` ugyanezt a listát írja ki.

Néhány, ami nem azonos, vagy nincs megvalósítva:

- **Mentés**: a böngészőben másolatot tölt le ({{cmd:SAVE}}, {{cmd:SAVEAS}}); a CadCraft Studióban a fájlt írja ki. Lásd: [Átállás más rajzolóprogramokról](topic:coming-from).
- A **PLOT** PDF-et készít (PNG-t és SVG-t is), plottolási stílustáblával; nincs oldalbeállító-kezelő.
- A **DIMSTYLE** és a **PEDIT** megvalósított; a **PEDIT**-nek nincs csúcsszerkesztés lehetősége (ezt a fogópontok végzik).
- A **TABLE** nincs megvalósítva; a {{cmd:XREF}}, a {{cmd:SPLINE}} és a {{cmd:WBLOCK}} igen.
- Egy rutin saját parancsai (AutoLISP `C:NAME`) a {{cmd:APPLOAD}} használata után jelennek meg; itt nem szerepelnek.

## Minden parancs (398)

| Parancs | Rövid nevek | Mit csinál |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | A 3D-nézet körbeforgatása a bal gombbal |
| `ACCESS` | `AX` | A rajzolás látás nélkül be- és kikapcsolása: az eredmények a képernyőolvasón keresztül hangzanak el, billentyűzeti kurzor van a rajzon, fogáshangok és kimondott parancsok vannak. |
| `ALIASEDIT` |  | A parancsálnevek szerkesztése egyetlen szövegfájlban (a megszokott L, *LINE formátum) |
| `ALIGN` | `AL` | Objektumok mozgatása és elforgatása úgy, hogy a forráspontok a célpontokra kerüljenek (egy, két vagy három pár), és ha kell, léptékezése |
| `ALIGNPANEL` | `ALP` | Az Igazítás és elosztás panel megnyitása |
| `ALIGNTO` |  | A kijelölt objektumok bal, közép, jobb, felső, középső vagy alsó széleinek igazítása: a kijelölésre, az első vagy az utolsó kiválasztott objektumra vagy egy pontra |
| `ANNOALLVISIBLE` | `ANNOALL` | A feliratozó objektumok megjelenítése minden léptéken, vagy csak ott, ahol a nézetablak (vagy a rajz) léptéke szerepel a listájukban |
| `ANNOSCALE` | `CANNOSCALE` | A rajz feliratozási léptékének beállítása: a feliratozó szövegek és méretek úgy változnak, hogy azonos méretben nyomtatódjanak |
| `APPLOAD` | `AP` | Alkalmazások betöltése: LISP-rutinok (.lsp) és párbeszédfájljaik (.dcl); az indítókészlet (AP) |
| `ARC` | `A` | Ív: 3 pontos, kezdő/közép/vég, kezdő/közép/szög, kezdő/közép/hossz, kezdő/vég/szög, kezdő/vég/irány, kezdő/vég/sugár, közép/kezdő/vég, közép/kezdő/szög, közép/kezdő/hossz, folytatás |
| `AREA` | `AA` | Terület és kerület pontok alapján vagy objektumról; a Hozzáadás és a Kivonás futó összeget tart (AA) |
| `ARRAY` | `AR` | Másolatok sorokban és oszlopokban, vagy egy középpont körül (AR) |
| `ARRAYASSOCIATIVITY` |  | Beállítja, hogy az ARRAY parancsok szerkeszthető sokszorozást (1) vagy egyszerű másolatokat (0) készítsenek |
| `ARRAYCLOSE` |  | Befejezi a sokszorozás forrásobjektumainak szerkesztését |
| `ARRAYEDIT` |  | Az Asszociatív lehetőséggel készült sokszorozás módosítása: darabszámok, távolságok, forrásobjektumok, egy elem |
| `ARRAYPATH` |  | Objektumok másolatai egy egyenes, ív, polivonal vagy más görbe mentén |
| `ARRAYPOLAR` |  | Másolatok egy középpont körül |
| `ARRAYRECT` |  | Másolatok sorokban és oszlopokban |
| `ASBUILT` | `ASB` | Az ASBUILT beolvassa a helyszíni csapat által mért, a valós állapotot rögzítő pontokat (CSV / TXT, ahogy az EXPORTPOINTS írja), és összeveti a rajz pontjaival: tűrésen belül vagy kívül, nem mért, többletpont. Az AS-BUILT rétegre jelöli őket, és CSV-jelentést tölt le. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Attribútum meghatározása (címke, amelyre egy blokk értéket kér), hogy a blokkba kerülhessen (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Blokkhivatkozás attribútumértékeinek szerkesztése a parancssorban, egymás után (az Enter megtartja az értéket) |
| `ATTSYNC` |  | Egy blokk hivatkozásainak igazítása az attribútum-definícióikhoz: az újak az alapértelmezésükkel kerülnek be, az eltávolítottak kikerülnek, a helyzetek és a szövegek visszaállnak; az értékek megmaradnak |
| `AUDIT` |  | Ellenőrzi a megnyitott rajzot a sérülésekre: nem véges számok, méret nélküli objektumok, hiányzó rétegek, blokkok, stílusok és vonaltípusok, önmagukat tartalmazó blokkok, megosztott azonosítók, hibás méretek és sraffozások. Típus szerint listázza a találatokat, és javítás előtt rákérdez; a javítás egy visszavonási lépés. |
| `AUNITS` | `ANGUNITS` | Hogyan jelennek meg és hogyan adhatók meg a szögek: tizedes fok, fok-perc-másodperc vagy irányszögek, például N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | A rajz automatikus kiegészítése be- vagy kikapcsolva, vagy a rajz mintái alapján most javasolt elemek listázása. |
| `AUTOCONSTRAIN` |  | Egyezés, vízszintes és függőleges kényszerek hozzáadása, ahol a geometria már közel van |
| `AUTODIM` | `ADIM` | Méretezés szabályok szerint: teljes méret, láncok az oldalak mentén, nyílások, lyukátmérők és rácstávolság, anélkül, hogy megismételné, ami már ki van méretezve. |
| `AUTOSHEET` | `ASH` | Rajzlapokat helyez el önmagától: kiválasztja a papírméretet és a szabványos léptékeket, és minden nézetet felirattal és rajzfejjel együtt helyez el. |
| `BATTMAN` |  | Blokkattribútum-kezelő: a blokk attribútumainak sorrendje, címkéi, kérdései, alapértelmezései és módjai, majd a hivatkozásai frissítve |
| `BCLOSE` |  | A blokkszerkesztő bezárása: a blokk mentése vagy a módosítások elvetése |
| `BCONVERT` |  | A BCONVERT megkeresi az ismétlődő geometriát, és blokkhivatkozásokká alakítja. Jelölje ki az ismétlődő objektumokat: a nyitott térben minden más, azonos geometriájú objektumcsoport megtalálható, amely el van mozdítva és bármilyen szögben el van forgatva; ha a Tükrözött és a Léptékezett be van kapcsolva, a tükörképek és más méretű másolatok is. Adjon nevet az új blokknak és egy alappontot; a kijelölés és minden másolat erre a blokkra mutató hivatkozássá válik, mindegyik a saját elforgatásával és léptékével. Vagy válassza a Blokk lehetőséget, és nevezzen meg egy meglévő blokkot, hogy megtalálja az objektumainak laza másolatait. A másolatnak ugyanazon a rétegen, színnel, vonaltípussal és vonalvastagsággal kell lennie, hacsak a Tulajdonságok nincs Figyelmen kívül hagyásra állítva. A zárolt rétegek objektumai érintetlenek maradnak. Egy visszavonási lépés. |
| `BEDIT` | `BE` | Blokkszerkesztő: a blokk objektumainak és attribútumainak szerkesztése; a BCLOSE menti (BE) |
| `BLEND` |  | BLEND: spline két nyitott görbe végei között, a végek közelében megadott pontokkal összekötve. CONtinuity: az Érintő mindkét irányt követi, a Sima a hajlást is. |
| `BLOCK` | `B`, `BMAKE` | Blokk készítése objektumokból (egyetlen hivatkozássá válnak) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: egy blokkra mutató minden hivatkozás egy másik blokkra mutató hivatkozássá válik, ugyanazon a helyen, ugyanazzal a léptékkel és elforgatással. A mindkét blokkban meglévő attribútumok értékei megmaradnak. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | A BLOCKSPALETTE megjeleníti a Blokkok panelt, a kurzorral a szűrőjében. A panel minden blokkról képet mutat (a legutóbb elhelyezettek először), listaként vagy rácsban; kattintson a képre, vagy húzza a rajzra, hogy a blokkot az INSERT paranccsal helyezze el. A Könyvtárak alatt adjon hozzá saját DWG vagy DXF fájlt: a blokkjai képpel együtt listázódnak, és egy elhelyezéskor a rajzba másolódnak. A CadCraft Studióban mappa is hozzáadható, és a fájlok és mappák megmaradnak. |
| `BOMEDIT` | `BOMCOLUMNS` | Egy anyagjegyzéktábla oszlopai, csoportosítása, rendezése, címe, összesítései és megjegyzései |
| `BOMEXPORT` |  | Anyagjegyzéktábla mentése .csv fájlba |
| `BOMTABLE` | `BOM` | Egy zóna vagy az egész rajz élő anyagjegyzéktáblája |
| `BOMUPDATE` |  | Minden anyagjegyzéktábla azonnali frissítése, a befagyasztottakat is beleértve |
| `BOMZONE` | `BZONE` | A rajz egy elnevezett területe anyagjegyzékhez: két sarok, egy sokszög vagy egy zárt objektum körvonala |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): kattintson egy zárt terület belsejébe, és kapjon egy körülötte futó zárt polivonalat. Az ívek ívek maradnak. A Szigetek a benne lévő területeket is körvonalazza. |
| `BOX` |  | Doboz: két sarok és egy magasság (3D) |
| `BPARAMETER` | `BPARAM` | Még nincs megvalósítva: paraméter (például Láthatóság) hozzáadása blokkhoz. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokkparaméterek: képletekkel ellátott elnevezett paraméterek, és több láthatósági paraméter egy blokkban. A blokkszerkesztőben működik (a kijelölt objektumokat egy állapothoz rendeli), és egy kijelölt hivatkozáson (saját értékei és állapotai). |
| `BREAK` | `BR` | Egyenes, ív, kör vagy polivonal törése két pont között (BR) |
| `BREAKATPOINT` |  | Egyenes, ív vagy polivonal kettévágása egy pontban |
| `BREAKLINE` |  | Vonal rajzolása törésjellel; a mérete és a végeken túli kinyúlása megmarad. |
| `BREPLACE` |  | A BREPLACE egy blokkot egy másikra cserél. Kijelölt: jelöljön ki blokkhivatkozásokat, és nevezze meg a helyette használandó blokkot. Összes: nevezzen meg egy blokkot és a cseréjét, és minden hivatkozás minden térben és más blokkokon belül megváltozik. A hivatkozás megtartja helyét, léptékét, elforgatását és rétegét, valamint a mindkét blokkban meglévő attribútumok értékeit; ahová az új blokknak nincs helye, azok az értékek kikerülnek, és meg lesznek nevezve. |
| `BSEARCH` |  | A BSEARCH blokkokat keres. Név: egy blokknév része, vagy minta * és ? jelekkel. Attribútum: egy érték (vagy TAG=érték), amelyet egy hivatkozás attribútumai tartalmaznak. Geometria: jelöljön ki objektumokat vagy egy blokkhivatkozást, és a legalább 85%-ban hasonló alakú blokkok listázódnak, a legjobbal először; a méret, az elforgatás és a tükrözés nem számít. A nyitott térben talált hivatkozások kijelölődnek a következő parancshoz. |
| `BURST` |  | Blokkhivatkozások felbontása, és az attribútumaik megtartása: minden érték szöveggé válik az attribútum rétegén. |
| `BVHIDE` | `BVH` | A blokkszerkesztőben: az aktuális láthatósági állapot objektumainak elrejtése. |
| `BVSHOW` | `BVSH` | A blokkszerkesztőben: az aktuális láthatósági állapot által elrejtett objektumok megjelenítése (halványan látszanak, hogy ki lehessen választani őket). |
| `BVSTATE` | `BVS` | A blokkszerkesztőben, láthatósági állapotokkal rendelkező blokknál: váltás egy állapotra, vagy egy állapot hozzáadása, átnevezése vagy törlése. |
| `CAL` |  | Hossz vagy szám kiszámítása: + − * / és zárójelek, ahogy bárhol beírja őket |
| `CENTERLINE` | `CL` | Középvonal két vonal között: a közé, vagy a szögfelezőn, ha találkoznak (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Középjel: kereszt egy kör vagy ív közepén, a középvonalakkal, amelyek kissé túlnyúlnak rajta (CM) |
| `CHAMFER` | `CHA` | Két vonal közötti sarok letörése (D két távolság, A hossz és szög, P a polivonal minden sarka) |
| `CHSPACE` |  | CHSPACE: objektumok mozgatása a lap és a modell között egy nézetablakon keresztül. Léptékük és elforgatásuk úgy változik, hogy a másik oldalról ugyanúgy nézzenek ki. Lapon a modellbe kerülnek; amikor nézetablakon keresztül dolgozik (MSPACE), a lapra kerülnek. |
| `CIRCLE` | `C` | Középpont és sugár, átmérő, 2 vagy 3 pont |
| `CLASS` |  | A kijelölt objektumok osztályba sorolása, vagy kijelölés nélkül az aktív osztály beállítása (? listázza őket) |
| `CLASSES` | `CLS` | Az Osztályok panel: az osztályok rétegektől függetlenül rendezik az objektumokat; megjelenítésük, elrejtésük és stílusuk, és nézetablakonkénti felülbírálásuk (CLS) |
| `COMMANDLINE` | `CMDLINE` | A parancssor dokkolása vagy lebegtetése, egysorossá tétele, az előzmény-sorainak beállítása, vagy az előzmény megnyitása (F2) |
| `COMPARESETTINGS` | `CMPSET` | Méretezési stílusok, szövegstílusok, rétegek, lapok vagy mértékegységek összehasonlítása: kettő ebben a rajzban, vagy ez a rajz egy másik megnyitott rajzzal szemben, és egy érték átmásolása |
| `CONSTRAINTBAR` | `CBAR` | A kényszersávok megjelenítése vagy elrejtése (Mind mutat / Mind rejt, vagy objektumonként) |
| `COPY` | `CO`, `CP` | Objektumok másolása, ahányszor kattint |
| `COPYBASE` |  | Objektumok másolása a vágólapra egy megadott alapponttal |
| `COPYCLIP` |  | Objektumok másolása a vágólapra (Ctrl+C); a PASTECLIP helyezi el őket |
| `COUNT` | `BCOUNT` | Blokkhivatkozások számlálása: egy kijelölése kijelöli és megszámolja a blokkja összes hivatkozását |
| `COUNTTABLE` |  | Blokkszámlálási tábla elhelyezése |
| `CREDITS` |  | A Könyvtár hivatkozásait táblázatként teszi a rajzba. Futtassa újra, hogy a táblázat a rajzban lévő elemekből frissüljön. |
| `CURSORSIZE` |  | A célkereszt mérete: a 100 szélről szélre fut a rajzon (Beállítások › Kurzor › Teljes képernyő) |
| `CUTCLIP` |  | Objektumok kivágása a vágólapra (Ctrl+X): másolás, majd törlés |
| `CYLINDER` | `CYL` | Henger: középpont, sugár és magasság (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Blokkok, attribútumaik és objektumtulajdonságaik listázása táblázatként a rajzban vagy CSV-fájlban |
| `DATALINK` | `DL` | Táblázat CSV-fájlból, amely megjegyzi a fájlt, így újra beolvasható |
| `DATALINKUPDATE` | `DLU` | Egy adatkapcsolat fájljának újraolvasása, és a táblái újratöltése |
| `DCALIGNED` | `DCALI` | Méretkényszer: két pont, egy pont és egy vonal, vagy két vonal valódi távolsága |
| `DCANGULAR` | `DCANG` | Méretkényszer: két vonal közötti szög, vagy egy íven lévő szög |
| `DCCONVERT` |  | A kényszerezhető geometrián rajzolt méretek átalakítása méretkényszerekké |
| `DCDIAMETER` | `DCDIA` | Méretkényszer: kör vagy ív átmérője |
| `DCDISPLAY` |  | A méretkényszerek megjelenítése vagy elrejtése a rajzon |
| `DCHORIZONTAL` | `DCHOR` | Méretkényszer: vízszintes távolság |
| `DCLINEAR` | `DCLIN` | Méretkényszer: vízszintes vagy függőleges távolság, az elhelyezés helyétől |
| `DCRADIUS` | `DCRAD` | Méretkényszer: kör vagy ív sugara |
| `DCVERTICAL` | `DCVER` | Méretkényszer: függőleges távolság |
| `DELBLOCKS` |  | Blokkok törlése: minden hivatkozás (a beágyazottakat is, minden lapon) és a definíciók |
| `DELCONSTRAINT` | `DELCON` | Az összes kényszer (geometriai és méret) eltávolítása a kijelölt objektumokról |
| `DELOPENING` |  | Ajtó vagy ablak kivétele a falból. |
| `DESCRIBE` | `DESC` | Leírja, mit tartalmaz a rajz: hány objektum van, milyen fajtájúak, mekkorák, mi van kijelölve. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | A kijelölés törlése (Esc) |
| `DETAILS` | `DET` | A cég saját részletei, amelyeket az éppen rajzoltakhoz talál: keresés, blokk hozzáadása, listázás, eltávolítás, a javaslatok be- vagy kikapcsolása. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Diagram rajzolása szövegből: Mermaid folyamatábra, PlantUML komponensdiagram, D2, egy honnan-hová lista vagy draw.io XML, szerkeszthető blokkokként és összekötőkként |
| `DIMALIGNED` | `DAL`, `DIMALI` | Két pont közötti valódi távolság |
| `DIMANGULAR` | `DAN`, `DIMANG` | Két vonal közötti szög, egy ív szöge, vagy három pont szerint |
| `DIMARC` | `DAR` | Ívhossz-méret: az ív mentén mért távolság az ívjellel (DAR) |
| `DIMASZ` |  | Méretezési beállítás: nyílméret |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Egy közös alapvonalról egymás fölé helyezett méretek |
| `DIMBREAK` | `DBREAK` | A méretvonalak és hosszabbítóvonalak törése, ahol más objektumokat metszenek (Auto), két pont között (Kézi), vagy a törések eltávolítása |
| `DIMCONSTRAINT` | `DCON` | Méretkényszerek: lineáris, párhuzamos, szög, sugár, átmérő, átalakítás |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Méretláncolat, mindegyik az előző vége után |
| `DIMDEC` |  | Méretezési beállítás: tizedesjegyek száma |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Ív vagy kör átmérője |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | A méretek szabadon engedése azoktól az objektumoktól, amelyekhez kötve voltak (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | A méretszöveg módosítása (Kezdő, Új szöveg, Forgatás), vagy a hosszabbítóvonalak megdöntése (Ferde) |
| `DIMEXE` |  | Méretezési beállítás: túlnyúlás a méretvonalon túl |
| `DIMEXO` |  | Méretezési beállítás: eltolás a kezdőponttól |
| `DIMGAP` |  | Méretezési beállítás: rés a szöveg körül |
| `DIMINSPECT` |  | Ellenőrzési méret: keret az érték körül, címkével és azzal, hogy milyen gyakran ellenőrzik az alkatrészt |
| `DIMJOGGED` | `DJO`, `JOG` | Töréses sugárméret: olyan sugár, amely közelebbi pontból indul, ha a közép messze van (DJO) |
| `DIMJOGLINE` | `DJL` | Töréses jel hozzáadása egy lineáris vagy párhuzamos méretvonalhoz, jelezve, hogy a távolság nincs léptékhelyesen rajzolva (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vízszintes vagy függőleges távolság (R bármely szögre) |
| `DIMLUNIT` |  | Méretezési beállítás: hosszformátum (1 tudományos, 2 tizedes, 3 mérnöki, 4 építészeti, 5 törtes) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinátaméret: egy pont X vagy Y távolsága az USC origójától, egy vezetővonalon (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | A kijelölt méretek méretezési változóinak felülírása a stílusuk megváltoztatása nélkül; a Törlés visszaállítja a stílust (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Ív vagy kör sugara |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | A méret pontjainak objektumokhoz kötése, így követi őket, és újra mér, amikor azok mozognak (DRE) |
| `DIMSCALE` |  | Méretezési beállítás: általános léptéktényező (a méretek × ez) |
| `DIMSPACE` |  | Egyenletes köz párhuzamos méretek között, egy alapméretről mérve |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Elnevezett méretezési stílusok készítése, módosítása, aktuálissá tétele, törlése, alkalmazása és összehasonlítása (a párbeszédpanel; a -DIMSTYLE a parancssorban) |
| `DIMTEDIT` | `DIMTED` | A méretszöveg mozgatása a méretvonal bal, jobb vagy közepe felé, vagy elforgatása |
| `DIMTEXTUNIT` | `DTU` | A méretszöveg mm, cm, m vagy km egységben, vagy a rajz saját egységeiben: a kijelölt méretek, egyébként az újak (DTU) |
| `DIMTXT` |  | Méretezési beállítás: szövegmagasság |
| `DIST` | `DI` | Két pont közötti távolság és szög |
| `DISTRIBUTE` |  | A kijelölt objektumok egyenletes elosztása oldalirányban vagy fel-le: egyenlő lépések a középpontok között, vagy egyenlő rések; a két szélső marad |
| `DIVIDE` | `DIV` | DIVIDE (DIV): jelek, amelyek egy egyenest, ívet, kört, polivonalat, splinet vagy ellipszist egyenlő részekre osztanak. Pontok, vagy a Blokk lehetőséggel blokk minden jelnél. |
| `DOCUMENTS` | `DOCS` | A Dokumentumok panel megnyitása: rajzok ki- és visszajelentkeztetése, revíziók, kiadási állapotok és jóváhagyás egy projektmappához |
| `DOOR` | `DR` | Ajtó elhelyezése falban. Az oldal, amelyre kattint, az az oldal, amerre nyílik. |
| `DRAWORDER` |  | A rajzolási sorrend módosítása: objektumok előre hozása, hátraküldése, vagy más objektumok fölé vagy alá helyezése. |
| `DUPLICATE` | `DUP` | A mutatóval együtt mozgó másolat: kattintásra helyezi le (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | A rajz tulajdonságai: cím, szerző és a többi, valamint a saját név–érték párjai |
| `DXFOUT` |  | A rajz letöltése DXF R12 formátumban (a Mentés a saját formátumát tartja meg) |
| `EATTEDIT` | `DDATTE` | Blokkhivatkozás attribútumainak szerkesztése: értékek, szöveg és tulajdonságok, egyszerre egy attribútum |
| `ELLIPSE` | `EL` | Tengelyvégpontok és a másik féltengely |
| `ERASE` | `E`, `DELETE` | Objektumok eltávolítása |
| `EXPLODE` | `X` | Polivonalak, blokkok és méretek felbontása az alkotórészeikre |
| `EXPORT` | `EXP` | A rajz másolatának mentése egy bővítmény által írt fájltípusban |
| `EXPORT3D` | `3DEXPORT` | A 3D-modell exportálása: GLB, OBJ vagy STL |
| `EXPORTPOINTS` | `EXPPTS` | Pontok, és az attribútummal rendelkező blokkok beillesztési pontjai, leírásként az attribútumuk, kiírása CSV vagy TXT fájlba (PNEZD, PENZD vagy XYZ) BIM- és földmérési programokhoz |
| `EXTEND` | `EX` | Objektumok meghosszabbítása, hogy másokhoz érjenek: kattintson a vég közelében, húzzon át többen, vagy a Shift+kattintással vágjon |
| `EXTRIM` |  | EXTRIM: válasszon egy vágóélt, majd egy oldalt. Minden, ami az élt metszi, azon az oldalon le lesz vágva. A részek, amelyek kiesnének, a mutató mozgatásakor láthatók. |
| `EXTRUDE` | `EXT` | Zárt 2D objektumok kihúzása testekké (3D) |
| `FIELD` |  | Mező elhelyezése szövegben, táblázatcellában vagy attribútumban: dátum, a fájl neve, a lapszám, egy rajztulajdonság, egy objektum területe vagy hossza, vagy képlet |
| `FILLET` | `F` | Két objektum közötti sarok lekerekítése vagy négyszögletessé tétele (R sugár, P a polivonal minden sarka, M több) |
| `FIND` |  | Szavak keresése és cseréje szövegben, attribútumértékekben és méretszövegben |
| `FLATTEN` |  | A kijelölt objektumok magasságának (Z) és vastagságának 0-ra állítása, a használt blokkokban is. |
| `FLOOR` |  | Az a szint kiválasztása, amelyen rajzolni kell, egy új hozzáadása, vagy a kijelölés áthelyezése vagy másolása egy másik szintre. |
| `FLOORLAYERS` |  | A szintek Szint-Réteg nevű rétegekké alakítása, olyan fájlhoz, amelyet szintek nélküli személynek küldenek. |
| `FLOORS` | `FLR` | A Szintek panel megnyitása: szintek egymásra helyezése egy modelltérben. |
| `GCCOINCIDENT` |  | Kényszer: két pont egybeesik, vagy egy pont egy objektumon marad |
| `GCCOLLINEAR` |  | Kényszer: két vonal egy egyenesen marad |
| `GCCONCENTRIC` |  | Kényszer: két kör vagy ív közös középponttal rendelkezik |
| `GCEQUAL` |  | Kényszer: két vonal azonos hosszú marad, vagy két kör/ív azonos sugarú |
| `GCFIX` |  | Kényszer: egy pont vagy egy teljes objektum a helyén marad |
| `GCHORIZONTAL` |  | Kényszer: egy vonal (vagy két pont) vízszintes marad |
| `GCPARALLEL` |  | Kényszer: két vonal párhuzamos marad |
| `GCPERPENDICULAR` |  | Kényszer: két vonal derékszöget zár be |
| `GCSYMMETRIC` |  | Kényszer: két pont, vonal vagy kör egy egyenes körül tükrözi egymást |
| `GCTANGENT` |  | Kényszer: egy vonal és egy kör vagy ív (vagy kettő közülük) érintő marad |
| `GCVERTICAL` |  | Kényszer: egy vonal (vagy két pont) függőleges marad |
| `GDSIN` | `GDS` | Chip-elrendezés megtekintése (GDSII adatfolyam-fájl): minden réteg és adattípus rajzrétegként, laposan, felhasználói egységekben; csak megtekintésre és mérésre (laboratóriumi kísérlet) |
| `GEOMCONSTRAINT` | `GCON` | Geometriai kényszerek: vízszintes, függőleges, párhuzamos, érintő, egybeeső… |
| `GLBOUT` |  | A 3D-modell exportálása GLB (glTF) formátumban |
| `GRADIENT` | `GD` | Területet tölt ki egy vagy két szín színátmenetével |
| `GRIDMOVE` | `GM` | Rácsvonal mozgatása, és a rajta lógók követése: a falak megnyúlnak, az oszlopok, buborékok és címkék mozognak, a méretek követik. |
| `GROUP` | `G` | GROUP (G): a kijelölt objektumoknak közös nevet adni. Ha az egyikre kattint, mind kijelölődik. Enter a névnél névtelen csoportot készít. |
| `GROUPEDIT` |  | GROUPEDIT: egy csoport módosítása. Válasszon ki egy objektumot, vagy adja meg a nevét, majd Hozzáadás vagy Eltávolítás objektumokat, ÁTNEVEZÉS, a Leírás módosítása, vagy döntse el, hogy a kattintás az egész csoportot kijelöli-e. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Terület kitöltése egyszínű kitöltéssel vagy mintával: kattintson a belsejébe, vagy jelöljön ki zárt objektumokat (H) |
| `HATCHEDIT` | `HE` | Sraffozás módosítása: minta, léptékek, szög, origó, és a határvonalhoz való kapcsolata. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Újra létrehozza a határpolivonalakat egy sraffozásból, a sraffozáshoz kötve vagy nem kötve |
| `HATCHTOBACK` |  | Minden sraffozás mögé küldése mindennek más mögé. |
| `HELP` | `?` | Ez a lista |
| `HIDEOBJECTS` |  | A kijelölt objektumok elrejtése az UNISOLATEOBJECTS parancsig. Nincs elmentve a rajzzal. |
| `HISTORY` | `HIST` | HISTORY (HIST): a rajz verziói – a Studio mentésekor a számítógépen megőrzött másolatok, és a felhő verziói – megnyitáshoz, visszaállításhoz és összehasonlításhoz, a változtatások színnel kiemelve. |
| `ID` |  | Pont koordinátái |
| `IMAGE` | `IM` | A rajz által használt képfájlok megadása a CadCraftnak (a DWG csak azt tárolja, hol voltak). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Kép (PNG vagy JPEG) elhelyezése egy fájlból. |
| `IMAGECLIP` | `ICL` | Kép levágása egy téglalapra vagy sokszögre, vagy a levágás eltávolítása. |
| `IMPORT` | `IMP` | Egy bővítmény által olvasott típusú fájl importálása ebbe a rajzba |
| `INSERT` | `I`, `DDINSERT` | Blokk elhelyezése (S lépték, R forgatás); F DWG/DXF fájlból, L a könyvtárból |
| `INTERSECT` | `IN` | Csak azt tartja meg, amit a testek közösen tartalmaznak (3D), vagy azt a területet, amit a 2D tartományok közösen fednek |
| `ISODRAFT` |  | ISODRAFT: izometrikus rajzolás be- vagy kikapcsolása, vagy közvetlenül a Bal, Felső vagy Jobb síkra állás. Bekapcsolt állapotban az Ortogonális és a polárkövetés a sík két tengelyét követi, a rács izometrikusan rajzolódik, és az ELLIPSE-nek van Izokör lehetősége. |
| `ISOLATEOBJECTS` | `ISOLATE` | Csak a kijelölt objektumok megjelenítése; a tér többi eleme rejtve marad az UNISOLATEOBJECTS parancsig. Nincs elmentve a rajzzal. |
| `ISOPLANE` |  | ISOPLANE: az izometrikus sík kiválasztása, amelyen rajzolni kell: Bal, Felső vagy Jobb. Az Enter a következőre lép, ahogy az F5 is teszi, ha az izometrikus rajzolás be van kapcsolva. |
| `JOIN` | `J` | Végpontjaiknál találkozó vonalak, ívek és polivonalak egyetlen polivonallá egyesítése; egy egyenesen lévő vonalak egyetlen vonallá (J) |
| `LASER` | `LASERCUT` | A Lézer panel megnyitása: rétegek küldése lézervágóra vagy gravírozóra (GRBL G-kód) |
| `LASSOMODE` |  | Megnyomva és húzva lasszót (1) vagy téglalapot (0) rajzol |
| `LAYDEL` |  | Réteg és minden rajta lévő objektum törlése (a modellben, a lapokon és a blokkokban) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | A Rétegkezelő megnyitása: minden réteg egy táblázatban |
| `LAYERPANEL` |  | A rétegek panel megjelenítése |
| `LAYFRZ` |  | Minden kiválasztott objektum rétegének befagyasztása |
| `LAYGROUP` | `LG` | Rétegek csoportosítása mappákba a Rétegek panelen. |
| `LAYISO` |  | A kijelölt objektumok rétegeinek elszigetelése (minden másik réteg ki) |
| `LAYLOCKFADE` |  | Beállítja, mennyire halványodnak a zárolt rétegek objektumai, és hogy kattintással ki lehet-e őket jelölni. |
| `LAYMCUR` |  | A kiválasztott objektum rétegének aktuálissá tétele |
| `LAYMRG` |  | Rétegek egyesítése: objektumaik egy célrétegre kerülnek, az egyesített rétegek megszűnnek |
| `LAYOFF` |  | Minden kiválasztott objektum rétegének kikapcsolása |
| `LAYON` |  | Minden réteg bekapcsolása |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Új rajzlap rajzfejjel és egy nézetablakkal |
| `LAYTHW` |  | Minden réteg feloldása a befagyasztásból |
| `LAYUNISO` |  | A LAYISO által kikapcsolt rétegek visszakapcsolása |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | A régi vietnami betűtípusokkal gépelt szöveget Unicode-ra alakítja (TCVN3 / ABC betűtípusok, például a .VnTime, és VNI betűtípusok, például a VNI-Times). Az ilyen szöveg már most helyesen látszik; ez véglegesen átírja, számlálással és egy visszavonási lépéssel. |
| `LENGTHEN` | `LEN` | Vonalak, ívek és polivonalak meghosszabbítása vagy rövidítése: adott mennyiséggel, százalékkal, összes hosszra, vagy húzással (LEN) |
| `LIBRARY` | `LIB` | A könyvtári panel: elemek elhelyezése, frissítések ellenőrzése, hivatkozások |
| `LIMITS` |  | A rajzhatárok beállítása: BE, KI, vagy a bal alsó és jobb felső sarok. A BE állapotban a határokon kívüli pontokat elutasítja |
| `LINE` | `L` | Egyenes szakaszok, mindegyik külön objektum |
| `LINETYPE` | `LT`, `CELTYPE` | Az új objektumok vonaltípusa (rétegtől, blokktól vagy egy nevezettől) |
| `LINKVIEWS` | `SYNCVIEWS` | Minden panel nézetének együttes eltolása és nagyítása (osztott képernyő), két rajz vagy verzió összehasonlításához |
| `LISPEDIT` | `VLIDE` | A LISPEDIT (vagy VLIDE) megnyitja a LISP-szerkesztőt: ablak egy rutin írásához, betöltéséhez és kipróbálásához. A Betöltés a rajzba minden űrlapot beolvas, ahogy az APPLOAD a fájlt, és létrehozza a parancsait. A Kijelölés futtatása a kijelölt űrlapokat, vagy azt, amelyben a kurzor áll, értékeli ki. A konzol mutatja, mit írt ki a rutin, és minden hibát a sorával. A zárójel-párját a gépelés közben jelöli, az Enter behúzza az új sort. Az Új, a Megnyitás és a Mentés egy .lsp fájlon működik. A szöveg melletti listák mutatják a rutin által definiált függvényeket, azokat, amelyeket hív, de ez a LISP még nem ismeri, és az összes ismert függvényt. Az ablak nem blokkolja a rajzot, így a rutin kérhet pontokat; a Leállítás vagy az Esc véget vet a futó rutinnak. |
| `LIST` | `LI`, `LS` | Objektumok leírása az előzményben |
| `LTSCALE` | `LTS` | A rajz vonaltípus-léptéke (minden vonás és rés ezzel szorzódik) |
| `LWDISPLAY` | `LWT` | Vonalvastagságok megjelenítése vagy elrejtése a képernyőn (az LWT gomb az állapotsorban) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Az új objektumok vonalvastagsága (rétegtől, blokktól, alapértelmezett vagy mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Térképrétegek a modelltér alatt: a rajz koordináta-rendszere, csempék, WMS, WMTS, ArcGIS, képek |
| `MASSPROP` |  | MASSPROP: tartományok és zárt objektumok keresztmetszeti tulajdonságai: terület, kerület, középpont, tehetetlenségi nyomatékok és szorzat, tehetetlenségi sugarak és a főtengelyek. Egyenesek és ívek esetén pontos. A jelentést szövegfájlba is írhatja. |
| `MATCHPROP` | `MA`, `PAINTER` | Tulajdonságok egyeztetése: egy objektum rétegének, színének és más tulajdonságainak átmásolása másokra (MA) |
| `MEASURE` | `ME` | MEASURE (ME): jelölés minden megadott hossznál egy egyenes, ív, kör, polivonal, spline vagy ellipszis mentén, a kattintáshoz legközelebbi végtől. Pontok, vagy a Blokk lehetőséggel blokk minden jelnél. |
| `MEASUREGEOM` | `MEA` | Távolság, sugár, szög vagy terület mérése (MEA) |
| `MINSERT` |  | MINSERT: blokk elhelyezése egy lépésben sorokban és oszlopokban. Mindegyik külön hivatkozás, így bármelyiket mozgathatja vagy törölheti. |
| `MIRROR` | `MI` | Objektumok tükrözése egy egyenes körül |
| `MLEADER` | `MLD`, `MLEAD` | Többszörös vezetővonal: nyíl, vezetővonal és megjegyzés, egyetlen objektumként (MLD) |
| `MLEADERALIGN` | `MLA` | A többszörös vezetővonalak egyikéhez igazítása egy irány mentén, egyenlő távolsággal vagy két pont között elosztva (MLA) |
| `MLEADERCOLLECT` | `MLC` | Több többszörös vezetővonal egybegyűjtése: blokkjaik sorban vagy oszlopban, vagy megjegyzéseik egymás alatt (MLC) |
| `MLEADEREDIT` | `MLE` | Vezetővonalak hozzáadása egy többszörös vezetővonalhoz vagy eltávolítása; tartalmának váltása szöveg és blokk között (MLE) |
| `MLINE` |  | Párhuzamos vonalak rajzolása együtt, a sarkoknál összekötve. |
| `MOVE` | `M` | Objektumok mozgatása egy alappont és egy második pont szerint |
| `MSPACE` | `MS` | A modell munkája a megnyitott lap egy nézetablakán keresztül (vagy kettőskattintás a nézetablakban). |
| `MTEXT` | `MT`, `T` | Bekezdésszöveg: húzza a szélességét, majd helyben gépeljen; az Enter új bekezdést kezd (T) |
| `MVIEW` | `MV` | Nézetablak a modellre, egy elrendezésen |
| `NAMEDVIEW` | `NV`, `VIEWS` | Elnevezett nézetek: a képernyőn lévő nézet (vagy egy ablak) mentése névvel, és visszatérés hozzá (NV) |
| `NCOPY` |  | Objektumok másolása blokkhivatkozásból vagy csatolt rajzból a rajzba, szétbontás nélkül. |
| `NEARBY` |  | Megmondja, mi van a kurzor közelében, a legközelebbi elöl, a távolsággal és az oldallal. |
| `NEW` |  | Új rajz kezdése |
| `OBJECTSCALE` | `OBJSCALE` | Feliratozó szövegek és méretek feliratozási léptékei: léptékek hozzáadása, törlése, az aktuális lépték hozzáadása, vagy listázásuk (minden nézetablak a saját léptékének megfelelő méretben mutatja őket) |
| `OBJOUT` |  | A 3D-modell exportálása OBJ formátumban |
| `OFFSET` | `O` | Párhuzamos másolatok adott távolságban |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hogyan zárja az OFFSET a rést egy polivonal külső sarkainál. 0 meghosszabbítja a szakaszokat, 1 ívet ad, 2 egyenes levágást ad. Erre a munkamenetre marad érvényben. |
| `OLELIST` | `OLES` | A rajz OLE-objektumainak listázása, és egy képük másolata a kiválasztott helyre |
| `OPEN` |  | DWG vagy DXF megnyitása ebből a számítógépből |
| `OPENIN3D` |  | A rajz megnyitása a 3D-modellező alkalmazásban, új lapon (semmi nem töltődik fel) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Az objektumfogás menü megnyitása: válassza ki, mely fogások legyenek bekapcsolva. Az állapotsor Fogás gombján jobb gombbal kattintva is. |
| `OVERKILL` |  | Azonos objektumok törlése, és az átfedő vagy végpontjaiknál csatlakozó vonalak és ívek egyesítése, egy tűrésen belül. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | A Paraméterek panel: felhasználói paraméterek és méretkényszerek egy táblázatban |
| `PARTSLIST` | `PLIST` | Alkatrészlista-táblázat minden szabványos alkatrészről és acélszelvényről, amelyet a könyvtárból helyeztek el |
| `PASTEAREA` | `PAREA` | A MarkupCraftban másolt terület (Terület másolása) beillesztése valódi méretben, képként. |
| `PASTEBLOCK` |  | PASTEBLOCK: a másolt tartalom beillesztése egyetlen blokkként. A blokk saját nevet kap; a RENAME adja meg a sajátját. |
| `PASTECLIP` |  | A vágólap beillesztése: követi a kurzort, kattintson oda, ahová kerülnie kell (Ctrl+V) |
| `PASTEORIG` |  | A vágólap beillesztése a másolás koordinátáira (Ctrl+Shift+V) |
| `PDF` |  | A CadCraft számára a rajz alátéteinek PDF-fájljainak megadása |
| `PDFADJUST` |  | PDF-alátét halványítása, kontrasztja, egyszínűsítése, vagy kikapcsolása |
| `PDFATTACH` | `PDFATT` | PDF-oldal csatolása alátétként (PDFATTACH) |
| `PDFCLIP` |  | PDF-alátét levágása egy téglalapra vagy sokszögre |
| `PDFIMPORT` | `PDFIM` | Egy PDF-oldal vonalainak, kitöltéseinek és szövegének rajzobjektummá alakítása (PDFIMPORT) |
| `PDFLAYERS` |  | A PDF saját rétegeinek be- vagy kikapcsolása |
| `PEDIT` | `PE` | Polivonal szerkesztése: zárás, nyitás, egyesítés, szélesség, illesztett görbe, spline görbe, görbe-eltávolítás, vonaltípus-generálás, megfordítás; egyenesek, ívek és splinek polivonallá alakíthatók |
| `PHOTOSKETCH` | `PSK` | Papíron lévő kézi vázlat fényképét léptékhelyesen vonalakká és ívekké alakítja, kiegyenesítve a perspektívát, és minden tollszínnek külön réteget ad. |
| `PICKSTYLE` |  | PICKSTYLE: egy csoport egy objektumának kijelölése kijelöli-e az egész csoportot (1, a kezdő beállítás) vagy csak azt az objektumot (0). Erre a munkamenetre marad érvényben. |
| `PLAN` |  | A nézet elforgatása úgy, hogy az USC X tengelye (aktuális USC, egy mentett USC vagy a világ) vízszintes legyen a képernyőn. A rajz semmit nem mozgat. |
| `PLINE` | `PL` | Egyenes és ív szakaszokból álló polivonal |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plottolás PDF-be: egy elrendezés, vagy a modell adott léptékben |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plottolási stílustáblák: minden szín nyomtatási beállítása (szín, fekete, szürke, tinta, vonalvastagság); a rajzzal együtt megőrzött (STYLESMANAGER) |
| `POINT` | `PO` | Pontobjektumok |
| `POINTCLOUD` | `PC` | a csatolt pontfelhő: szelet, magasság, vastagság, szín, méret, láthatóság, nagyítás, leválasztás |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | pontfelhő csatolása (LAS, LAZ, XYZ, PTS) a rajz alá |
| `POLARANG` |  | A polárkövetési lépés fokban (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Szabályos sokszög |
| `PRESSPULL` |  | Test egy lapjának tolása vagy húzása (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | A Tulajdonságok panel megnyitása (Ctrl+1, vagy kettőskattintás egy objektumon) |
| `PROPERTIESCLOSE` | `PRCLOSE` | A Tulajdonságok panel összecsukása az ablak szélére |
| `PSPACE` | `PS` | Kilépés a munkában lévő nézetablakból, vissza a lapra (vagy kettőskattintás kívül). |
| `PUBLISH` | `-PUBLISH` | Több vagy az összes lap plottolása egy PDF-be (laponként oldal és könyvjelző) |
| `PURGE` | `PU` | Azon blokkdefiníciók eltávolítása, amelyeket semmi nem használ |
| `QDIM` |  | Gyors méretezés: több objektum egyszerre (folytonos, alapvonalas, lépcsőzetes, koordináta, sugár vagy átmérő) |
| `QPMODE` | `QP` | Gyors tulajdonságok a kurzornál be vagy ki |
| `QSELECT` | `QS` | Gyorskijelölés: minden olyan típusú objektum, amelynek rétege, színe, mérete vagy neve egyezik (QS) |
| `RASTERSNAP` |  | A fogás be- vagy kikapcsolása a beolvasott lapok vonalaihoz. |
| `RAY` |  | Sugár: szerkesztővonal egy pontból, egyik irányba végtelenül. |
| `RECOVER` |  | Megnyit egy sérült DXF vagy DWG fájlt: azt, amit nem lehet beolvasni, kihagyja, ahelyett hogy elutasítaná a fájlt; közli, mit hagyott ki, majd ellenőrzi és javítja a rajzot, ahogy az AUDIT teszi. |
| `RECTANG` | `REC`, `RECTANGLE` | Zárt polivonal két sarokból |
| `REDLINE` | `RDL` | Piros jelölés revízióvá: egy MarkupCraft piros jelölési csomag beolvasása, minden változtatás elfogadása vagy elutasítása, az elfogadottak revíziófelhővel és revíziónaplóval való jelölése, és a válaszfájl mentése (RDL) |
| `REDO` |  | Az utoljára visszavont művelet ismétlése |
| `REFCLOSE` |  | Egy blokk helyben történő szerkesztésének befejezése: mentés vagy a módosítások elvetése |
| `REFEDIT` |  | Blokk helyben történő szerkesztése, ott, ahol egy hivatkozása áll, a rajz többi részének halványításával; a REFCLOSE menti |
| `REGEN` | `RE` | A rajz ebben a lapon látható részének újraépítése a rajzból |
| `REGENALL` | `REA` | A rajz minden lapon, panelen és megnyitott rajzon látható részének újraépítése |
| `REGION` | `REG` | REGION (REG): sík területek (tartományok) készítése zárt objektumokból, vagy olyan vonalakból, ívekből és polivonalakból, amelyek végpontjaiknál zárnak hurkot. A UNION, a SUBTRACT és az INTERSECT ezután egyesíti a tartományokat, a MASSPROP pedig megadja a keresztmetszeti tulajdonságaikat. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Több szkennelés regisztrálása: elhelyezésük egy keretben kijelölt pontpárokkal vagy célpontokkal, finomítás ICP-vel, exportálás egyetlen LAS vagy E57 fájlba |
| `REINIT` |  | Az álnevek fájljának újratöltése |
| `RENAME` | `-RENAME`, `REN` | Réteg vagy blokk átnevezése (minden objektum vagy hivatkozás követi) |
| `REVCLOUD` | `RC` | Revíziófelhő: téglalap, sokszög, szabad kézi vonal vagy egy objektum körbekerítése (RC) |
| `REVOLVE` | `REV` | Zárt 2D objektumok forgatása egy tengely körül testekké (3D) |
| `ROTATE` | `RO` | Objektumok forgatása egy alappont körül |
| `SAMPLES` | `SAMPLE` | A CadCraft egyik mintarajzának megnyitása (építészeti készlet, megvalósult állapot), hogy tanulhasson belőle |
| `SAVE` | `QSAVE` | A rajz letöltése a saját formátumában (DWG vagy DXF) |
| `SAVEAS` |  | A rajz letöltése DWG vagy DXF formátumban: a választás szerint |
| `SAYSEL` |  | Megmondja, mi van kijelölve, objektumonként egy mondatban. |
| `SCALE` | `SC` | Objektumok léptékezése egy alappont körül |
| `SCALELISTEDIT` | `SCALELIST` | A rajz saját léptékeinek hozzáadása, szerkesztése és törlése; megjelennek a nézetablak- és plottolási léptéklistákban, és a fájlban megmaradnak (SCALELIST) |
| `SCANALIGN` | `SCL` | Beolvasott lap igazítása két pontra: mozgatás, forgatás, és ha úgy dönt, léptékezés. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Beolvasott rajz beszúrása: PNG, JPEG vagy TIFF (egy oldal vagy egy többoldalas fájl összes oldala), vagy képként szolgáló PDF-oldal. |
| `SCANCLEAN` | `SCC` | Beolvasott lap feketére-fehérre alakítása, és a foltok eltávolítása. |
| `SCANCROP` | `SCR` | Beolvasott lap levágása egy ablakra. |
| `SCANDESKEW` | `SCD` | A beolvasott lap hosszú vonalainak dőlésszögének megkeresése, és a lap egyenesre fordítása, ha elfogadja a szöget. |
| `SCANERASE` | `SCE` | A beolvasott lap egy területének törlése: téglalap, sokszög vagy lasszó. |
| `SCANINFO` | `SCI` | A beolvasott lap eredeti fájljának és az azóta tett lépéseknek megjelenítése. |
| `SCANSCALE` | `SCS` | A beolvasott lap léptékezése: jelöljön ki rajta két pontot, és írja be köztük a valódi távolságot. |
| `SCANTRACE` | `SCT` | A beolvasott lap vonalakká és ívekké követése új rétegre, a beállított tűrésen belül. A szöveg és a sraffozás raszter marad. |
| `SELECT` |  | Objektumok kijelölése most (a következő parancsban P, Előző, későbbi használatra) |
| `SELECTALL` | `AI_SELALL` | Ezen a lapon minden szerkeszthető objektum kijelölése (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Minden olyan objektum kijelölése, mint amelyeket Ön kiválasztott: azonos típus, réteg és szín (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Megjeleníti a Rajzlapkészlet panelt: több rajzból származó lapok, számozva, egyetlen PDF-be plottolva. |
| `SHORTCUTS` | `KEYS` | Bármely parancsnak saját billentyűt adni (Ctrl vagy Alt betűvel, vagy egy szabad funkcióbillentyű), amely ebben a böngészőben vagy asztali alkalmazásban marad meg. |
| `SHXFONTS` | `SHX` | A CadCraftnak SHX betűtípusok megadása egy mappából vagy fájlokból, hogy a nevükre hivatkozó szövegstílusok azzal rajzoljanak (listázás, eltávolítás, megfordítás) |
| `SKETCHFIX` | `SKF` | Szabad kézi vonások rajzolása; mindegyikből tiszta vonal, kör, ív, téglalap vagy polivonal lesz, négyszögletesítve és a többihez csatlakoztatva. |
| `SKETCHLIVE` | `SKL` | Rajzolás tollal: minden vonás pontos vonallá, körré, ívvé vagy téglalappá válik, amikor felemeli a tollat, a rajzhoz igazítva, a méretével, amelyet felül lehet írni. |
| `SPLINE` | `SPL` | Spline rajzolása pontokon át (vagy vezérlő sokszöggel), vagy polivonal átalakítása splinevé |
| `SPLINEDIT` | `SPE` | Spline szerkesztése: illesztőpontok, vezérlőpontok és súlyok, nyitás vagy zárás, megfordítás, vagy átalakítás polivonallá |
| `SPLIT` |  | A rajzterület felosztása panelekre (mint a VPORTS a modellen; lapról is) |
| `STEELMEMBER` | `SMEMBER` | Acélrúd 3D-ben szabványos szelvényből: két pont (gerenda) vagy egy alappont és egy magasság (Oszlop) |
| `STLOUT` |  | A 3D-modell exportálása STL formátumban (milliméterben) |
| `STRETCH` | `S` | Nyújtás: húzzon át egy keresztező ablakot a végeken a mozgatáshoz; a benne lévő rész mozog, a többi marad (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Szövegstílusok: a betűtípus, magasság, szélesség és dőlés, amelyet az új szöveg kap (a párbeszédpanel; a -STYLE a parancssorban) |
| `SUBTRACT` | `SU` | Testek kivonása másokból (3D), vagy 2D tartományok kivonása tartományokból |
| `SWBOUT` | `SWMACRO` | Makró letöltése a SolidWorks-hez (.swb), amely a modellt egyetlen kényszerezett vázlatként építi újra |
| `SWEEP` |  | Zárt 2D objektumok végigvezetése egy útvonal (egyenes, polivonal, ív, kör) mentén testekké (3D) |
| `TABLE` | `TB` | Táblázat készítése: sorok és oszlopok, vagy táblázatkezelő cellákból a vágólapon vagy egy CSV-fájlból |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Táblázat szerkesztése: írás egy cellába, sorok és oszlopok be- és törlése, méretek, egyesített cellák, igazítás |
| `TABLEEXPORT` |  | A táblázat által megjelenített tartalom mentése CSV-fájlként |
| `TABLEPASTE` | `PASTETABLE` | Táblázat készítése táblázatkezelő cellákból a vágólapon |
| `TABLESTYLE` | `TS` | Táblázatstílusok: szövegmagasságok, igazítás, margó és szegélyek a cím-, fejléc- és adatsorokhoz |
| `TAGS` |  | Címkék blokkhivatkozásokon: címke definiálása (fajta, megengedett értékek, a blokkok, amelyekre vonatkozik), beállítása a kijelölt hivatkozásokra, és listázásuk kimutatásként, amelyet CSV-ként menthet |
| `TEXT` | `DT`, `DTEXT` | Egysoros szöveg; az Enter a következő sort kezdi |
| `TEXTEDIT` | `ED`, `DDEDIT` | Szöveg szerkesztése helyben: válasszon ki egy szöveget (vagy kettőskattintás rajta) (ED) |
| `TEXTMASK` | `TMASK` | Háttérmaszk elhelyezése a szövegek mögé (a rajz háttere vagy egy szín), vagy annak eltávolítása. |
| `TEXTTOFRONT` |  | Minden szöveg, méret és vezetővonal előre hozása mindennek más elé. |
| `TOOLBAR` |  | Az eszköztárgombok megjelenítésének megadása: ikonok és szöveg, csak ikonok, vagy csak szöveg (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Az eszköztár elhelyezése az ablak tetején, alján, bal vagy jobb oldalán |
| `TOOLBARROWS` |  | Az eszköztár sorainak száma: ablakhoz igazítva, 2 vagy 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | A rajz fölötti sávok szabványossá vagy tömörré tétele |
| `TOUCHCROSSHAIR` | `TCX` | Eltolt célkereszt ujjal való rajzoláshoz: egy ujj egy olyan célkeresztet mozgat, amely fölötte és mellette van, így az ujj nem takarja a pontot. Az ujj felemelése nem választ ki semmit; a Kattintás gomb vagy egy érintés egy második ujjal a célkeresztnél választ ki, és a Kattintás tartása a mozgatás közben húz. Hosszú nyomás vagy az Enter gomb az Enter. Két ujjal mozgatás és nagyítás. Lehetőségek: BE, KI, Auto (csak ott be, ahol az ujj az egyetlen mutató), Távolság, Oldal. |
| `TOUR` | `TUTORIAL` | A hatlépéses első-rajzolási bemutató újraindítása |
| `TRIM` | `TR` | Objektumok levágása addig, ahol mások metszik őket: kattintson egy részre, húzzon át többen, vagy a Shift+kattintással hosszabbítsa |
| `TRIMEXTENDMODE` |  | A TRIM és az EXTEND indítása: 1 Gyors (minden objektum vágóél vagy határ), 0 Szabványos (először válassza ki az éleket) |
| `TTR` |  | Kör két objektumhoz érintőlegesen, az Ön által megadott sugárral (ugyanaz, mint a CIRCLE T) |
| `TURNLEFT` |  | A nézet 90°-kal balra forgatása (az óramutató járásával ellentétesen): USC Z -90, és a nézet követi. A rajz semmit nem mozgat. |
| `TURNRIGHT` |  | A nézet 90°-kal jobbra forgatása (az óramutató járásával egyezően): USC Z 90, és a nézet követi. A rajz semmit nem mozgat. |
| `TURNWORLD` |  | Vissza a világhoz: USC Világ, és a nézet ismét vízszintes. |
| `TXT2MTXT` | `T2M` | Egysoros szövegek egyetlen bekezdésszöveggé egyesítése, felülről lefelé. |
| `UCS` |  | Saját koordináta-rendszer: origó és X tengely (origó, Z szög, 3pont, Objektum, Előző, Világ, Elnevezett). A beírt pontok, az ortogonális mód, a polárkövetés, a rács és az új szöveg követik; a nézet úgy fordul, hogy az X tengelye vízszintes legyen. A rajz semmit nem mozgat. |
| `UNDO` | `U` | Az utolsó parancs visszavonása |
| `UNGROUP` |  | UNGROUP: csoportok szétbontása. Jelöljön ki csoportok objektumait, vagy adjon meg nevet. Az objektumok a rajzban maradnak. |
| `UNION` | `UNI` | Testek egyesítése egybe (3D), vagy 2D tartományok egy tartománnyá |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Az ISOLATEOBJECTS vagy HIDEOBJECTS által elrejtett összes objektum újbóli megjelenítése. |
| `UNITS` | `UN`, `DDUNITS` | Hogyan jelennek meg és hogyan adhatók meg a hosszok: tizedes, láb és hüvelyk, törtek (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | A mezők újraszámítása, és annak megadása, mikor frissüljenek maguktól |
| `USDOUT` |  | A 3D-modell exportálása USD formátumban (.usda szöveg, .usdc bináris vagy .usdz csomag) |
| `VIEW` | `-VIEW`, `V` | Szabványos 3D-nézetek, perspektivikus vagy párhuzamos (3D) |
| `VIEWBASE` | `FLATSHOT` | Lapos 2D nézet elhelyezése a 3D-testekről (elöl, felül, oldalt vagy izometrikusan, a takart élek szaggatottan) egy lapon vagy a modellben |
| `VIEWLABEL` | `VL` | Nézetcím egy lapon, amely a nézetablak nézetének nevét mutatja, és azzal együtt változik. |
| `VOICE` |  | Kimondott parancsok be- vagy kikapcsolása. Ezeket ez a számítógép ismeri fel. |
| `VPCLIP` |  | Lapnézetablak levágása egy zárt objektumra vagy egy rajzolt sokszögre; a Delete újra téglalappá teszi |
| `VPLAYER` |  | Rétegek befagyasztása vagy feloldása csak egyes nézetablakokban (Befagyasztás, Feloldás, Visszaállítás), és annak megadása, mely rétegek legyenek kezdetben befagyasztva az új nézetablakokban (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | A rajzterület felosztása panelekre, mindegyiknek saját nézetével (lapon: nézetablak, mint az MVIEW) |
| `VPVIEW` |  | Annak beállítása, mit mutasson egy nézetablak: egy ablak kijelölése a modellen |
| `VSCURRENT` | `VS`, `SHADEMODE` | A 3D-nézet vizuális stílusa: árnyékolt, élek, takart vonal, drótváz, röntgen |
| `WALL` | `WA` | 2D falak rajzolása polivonalként. Összekapcsolódnak, és ajtókat és ablakokat hordoznak. |
| `WALLARC` | `WARC` | Íves falrész rajzolása. Az alaprajzi falak egyenesek, ezért az ív rövid egyenes falakból áll (mindegyik 15 fok), amelyek összekapcsolódnak. |
| `WALLDELSEG` |  | Falrész törlése két pont között. A megmaradó rész egy vagy két falként marad meg. |
| `WALLDIM` |  | Új érték beírása egy méretnek: a távoli végén lévő fal merőlegesen mozdul el önmagához, az első végén lévő fal helyben marad, és a hozzá csatlakozó falak követik. |
| `WALLDISJOIN` |  | Egy fal egyik vége közelében kattintva letiltja az összekapcsolást a végén: a vég négyszögletesen rajzolódik, és semmi nem követi. Újra kattintva engedélyezi. |
| `WALLGRID` |  | Fal rögzítése egy rácsvonalhoz: annak mentén, vagy egyik végével rajta. A vonalat a GRIDMOVE mozgatja, és a fal követi. |
| `WALLHOLD` |  | Igazítás és rögzítés: egy fal megtartja helyét egy másik falhoz képest (annak vonalán, vagy a meglévő távolságában). Ha az egyik mozog, a másik követi. |
| `WALLHOLDDIM` |  | Két párhuzamos fal közötti távolság rögzítése. Ha az egyik mozog, a másik követi, hogy megtartsa. |
| `WALLHOLDS` |  | A falakon lévő rögzítések listázása. |
| `WALLJOINS` |  | Egy régebbi rajz minden falának azonosító adása, és a köztük lévő kapcsolatok tárolása. Ez az első módosításkor is megtörténik. |
| `WALLJOINSTYLE` |  | Kattintson egy sarokra, ahol két fal végpontjaiknál találkozik, hogy megváltoztassa a rajzolását: gérvágás, tompa, négyszögletesítés. A T megváltoztatja, melyik fal fut át. |
| `WALLOFFSET` | `WO` | Fal eltolása önmagához merőlegesen egy távolsággal (a hozzá csatlakozó falak követik), vagy másolat készítése abban a távolságban. |
| `WALLPICK` |  | Falak készítése egy vonalon vagy polivonalon a rajzban, a hozzá csatlakozó vonalakkal, ha Igen-t mond. |
| `WALLPOLY` | `WP` | Falak rajzolása egy szabályos, 3–64 oldalú sokszög köré, a POLYGONhoz hasonlóan. |
| `WALLRECT` | `WR` | Négy összekapcsolt fal rajzolása két átellenes sarokból, a RECTANG-hoz hasonlóan. |
| `WALLREJOIN` |  | Egy fal két részéből ismét egy fal készítése. Az első megtartja helyét a rajzban. |
| `WALLROT` |  | Négy összekapcsolt fal rajzolása egy tetszőleges szögben elforgatott téglalapként: az első oldal, majd a távolság. |
| `WALLSPLIT` | `WS` | Fal kettéosztása egy pontnál, vagy ahol egy másik fal keresztezi. A részek összekapcsolva maradnak, hacsak nem kér rést vagy szabad végeket. Az ajtók és ablakok a részükkel együtt mozognak. |
| `WALLSPLITGAP` |  | Fal felosztása réssel: írja be a rést, válassza ki a falat, majd a pontot. A részek szabad végeket tartanak, és újra összekapcsolhatók. |
| `WALLSTRETCH` |  | Nyújtás ablakkal: a benne lévő falvégek mozognak, a teljesen benne lévő falak egészben mozognak, a oldalukhoz csatlakozó falak pedig vele csúsznak. |
| `WALLTAN` |  | Fal folytatása egy ívvel, amely a falon áthaladva indul (rövid egyenes falakként rajzolva). |
| `WALLTRACE` |  | Falak készítése a legkisebb zárt terület körül, a vonalakból és falakból, amelyeket a kattintott pont körül talál. |
| `WALLUNHOLD` |  | Egy fal rögzítéseinek feloldása (és más falak rögzítéseinek erre a falra vonatkozóan). |
| `WBLOCK` | `W`, `-WBLOCK` | Blokk, néhány objektum vagy az egész rajz kiírása új DWG vagy DXF fájlba (W) |
| `WEDGE` | `WE` | Ék: két sarok és egy magasság; az első sarokról lefelé lejt (3D) |
| `WHEREAMI` | `WHERE` | Megmondja, hol van a kurzor. |
| `WHOHAS` |  | Megmondja, ki nyitotta meg a rajzot. A CadCraft Studio minden megnyitott rajz mellé egy kis zárófájlt tesz (Plan.dwg.cclock: ki, mióta, melyik verzió), és bezáráskor eltávolítja. Lehetőségek: Aktuális (a megnyitott rajz), Fájl (választható), Mappa (minden olyan rajz a mappában, amely valahol meg van nyitva; ez is engedi, hogy a Studio zárófájlokat tegyen abba a mappába), Útvonal (megadható), Név (az a név, amelyet mások látnak). Az ötpercnél régebben nem frissített zár elavultnak számít. Böngészőben nem érhető el. |
| `WINDOW` | `WN` | Ablak elhelyezése falban. |
| `XATTACH` | `XA` | Másik DWG vagy DXF csatolása ebbe a rajzba, csak olvasható módban (az XREF listázza és újratölti őket) |
| `XCLIP` | `XC` | Blokkhivatkozások és csatolt rajzok levágása egy téglalapra vagy sokszögre, vagy a levágás eltávolítása. |
| `XLINE` | `XL` | Szerkesztővonal, mindkét irányban végtelen: két ponton át, vízszintes, függőleges, szögben, szögfelező, vagy egy vonaltól eltolva. |
| `XREF` | `XR`, `-XREF` | Csatolt rajzok (külső hivatkozások): listázás, csatolás, újratöltés, beágyazás, leválasztás |
| `ZOOM` | `Z` | Kiterjedés, vagy egy ablak |

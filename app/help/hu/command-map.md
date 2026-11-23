---
title: Parancstérkép: mit írjon be
summary: Minden CadCraft-parancs a rövid neveivel, A-tól Z-ig, magából a programból készítve, és azok a szokások más rajzprogramokból, amelyek eltérnek.
keywords: parancstérkép, parancsok, álnevek, rövid nevek, honnan jön, parancslista, mit írjon be, törlés, levágás, megfelelő, különbségek
from: 9426856f
---

A CadCraft azokat a parancsneveket és rövid neveket veszi át, amelyeket az emberek más rajzprogramokból ismernek: az `L` egy vonalhoz, a `TR` a levágáshoz, az `E` a törléshez. A legtöbbhöz tehát nincs fordítási táblázat megtanulni: az ismert név itt is ugyanaz. Az alábbi lista minden CadCraft-parancs, magából a programból készítve. Az {{key:Enter}} megismétli az utolsót, a parancssorba írt `HELP` ugyanezt a listát írja ki.

A kevés, amely nem ugyanaz, vagy nincs kész:

- A **Mentés** ({{cmd:SAVE}}, {{cmd:SAVEAS}}) egy másolatot tölt le a böngészőben; a CadCraft Studióban a fájlt írja. Lásd: [Átállás más rajzszoftverekről](topic:coming-from).
- A **PLOT** PDF-et készít (PNG-ben és SVG-ben is), nyomtatási stílustáblával; nincs oldalbeállító kezelő.
- A **DIMSTYLE** és a **PEDIT** kész; a **PEDIT**-nek nincs csúcspont-szerkesztés opciója (ezt a fogópontok végzik).
- A **TABLE** nincs kész; a {{cmd:XREF}}, a {{cmd:SPLINE}} és a {{cmd:WBLOCK}} kész.
- Egy rutin saját parancsai (AutoLISP `C:NAME`) a {{cmd:APPLOAD}} utáni betöltés után jelennek meg; itt nincsenek felsorolva.

## Összes parancs (402)

| Parancs | Rövid nevek | Mit csinál |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | A 3D nézet körbeforgatása a bal gombbal |
| `ACCESS` | `AX` | A látás nélküli vázlatolás be- vagy kikapcsolása: az eredmények a képernyőolvasón keresztül hangzanak el, a rajzon billentyűzeti kurzor van, fogáshangok és kimondott parancsok. |
| `ALIASEDIT` |  | Parancsálnevek szerkesztése egy szövegfájlban (a megszokott L, *LINE formátum) |
| `ALIGN` | `AL` | Objektumok mozgatása és forgatása úgy, hogy a forrásforrás pontok a célpontokra kerüljenek (egy, két vagy három pár), és ha szeretné, méretezése is |
| `ALIGNPANEL` | `ALP` | Az Igazítás és elosztás panel megnyitása |
| `ALIGNTO` |  | A kijelölt objektumok bal, közép, jobb, felső, középső vagy alsó széleinek igazítása a kijelölésre, az első vagy utolsó kiválasztott objektumra, vagy egy pontra |
| `ANNOALLVISIBLE` | `ANNOALL` | Az annotatív objektumok mutatása minden léptéken, vagy csak ott, ahol a nézetablak (vagy a rajz) léptéke szerepel a listájukban |
| `ANNOSCALE` | `CANNOSCALE` | A rajz annotációs léptékének beállítása: az annotatív szöveg és méretezés átméreteződik, hogy azonos méretben nyomtatódjon |
| `APPLOAD` | `AP` | Alkalmazások betöltése: LISP-rutinok (.lsp) és párbeszédfájljaik (.dcl); az indítókészlet (AP) |
| `ARC` | `A` | Ív: 3 pont, Kezdő/Középső/Vég, Kezdő/Középső/Szög, Kezdő/Középső/Hossz, Kezdő/Vég/Szög, Kezdő/Vég/Irány, Kezdő/Vég/Sugár, Középső/Kezdő/Vég, Középső/Kezdő/Szög, Középső/Kezdő/Hossz, Folytatás |
| `AREA` | `AA` | Terület és kerület pontok vagy egy objektum alapján; a Hozzáadás és a Kivonás futó összeget tart (AA) |
| `ARRAY` | `AR` | Másolatok sorokban és oszlopokban, vagy egy középpont körül (AR) |
| `ARRAYASSOCIATIVITY` |  | Beállítja, hogy az ARRAY-parancsok szerkeszthető tömböket (1) vagy sima másolatokat (0) készítsenek |
| `ARRAYCLOSE` |  | Befejezi a tömb forrásobjektumainak szerkesztését |
| `ARRAYEDIT` |  | Módosít egy, az Asszociatív opcióval készített tömböt: darabszám, távolság, forrásobjektumok, egy elem |
| `ARRAYPATH` |  | Objektumok másolatai egy vonal, ív, polivonal vagy más görbe mentén |
| `ARRAYPOLAR` |  | Másolatok egy középpont körül |
| `ARRAYRECT` |  | Másolatok sorokban és oszlopokban |
| `ASBUILT` | `ASB` | Az ASBUILT beolvassa a csapat által mért kivitelezési pontokat (CSV / TXT, ahogy az EXPORTPOINTS írja), és összeveti őket a rajz pontjaival: a tűrésen belül vagy kívül, nem mért, többlet. Megjelöli őket az AS-BUILT rétegen, és CSV-jelentést tölt le. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Attribútum meghatározása (egy címke, amelyre a blokk értéket kér), hogy blokkba tegye (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Egy blokkhivatkozás attribútumértékeinek szerkesztése a parancssorban, egymás után (az {{key:Enter}} megtart egy értéket) |
| `ATTSYNC` |  | Egy blokk hivatkozásait összhangba hozza az attribútum-definícióikkal: az újak az alapértelmezéssel kerülnek be, az eltávolítottak kikerülnek, a helyzetek és szövegek visszaállnak; az értékek megmaradnak |
| `AUDIT` |  | Megvizsgálja a megnyitott rajzot sérülésekért: nem véges számok, méret nélküli objektumok, hiányzó rétegek, blokkok, stílusok és vonaltípusok, önmagukat tartalmazó blokkok, megosztott azonosítók, hibás méretezések és sraffozások. Fajtánként listázza az eredményeket, és javítás előtt kérdez; a javítás egy visszavonási lépés. |
| `AUNITS` | `ANGUNITS` | Hogyan jelennek meg és hogyan gépelhetők be a szögek: tizedes fok, fok-perc-másodperc, vagy irányszögek, például N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | A rajz automatikus kiegészítése be vagy ki, vagy annak listázása, amit a rajz mintái most javasolnak. |
| `AUTOCONSTRAIN` |  | Egybeeső, vízszintes és függőleges kényszereket ad ott, ahol a geometria már közel van |
| `AUTODIM` | `ADIM` | Méretezés szabályok szerint: teljes méret, láncok az oldalak mentén, nyílások, lyuk-átmérők és rácstávolság, anélkül, hogy megismételné, ami már méretezve van. |
| `AUTOSHEET` | `ASH` | Önmagától elrendezi a lapokat: papírt és szabványos léptéket választ, és minden nézetet felirattal és rajzfejjel helyez el. |
| `BATTMAN` |  | Blokkattribútum-kezelő: egy blokk attribútumainak sorrendje, címkéi, kérdései, alapértelmezései és módjai, majd hivatkozásai frissítve |
| `BCLOSE` |  | Blokkszerkesztő bezárása: a blokk mentése vagy a módosítások elvetése |
| `BCONVERT` |  | A BCONVERT megkeresi az ismétlődő geometriát, és blokkhivatkozásokká alakítja. Jelölje ki az ismétlődő objektumokat: a nyitott térben minden más, azonos geometriájú objektumhalmaz, bármely szögben eltolva és elforgatva, megtalálódik, és a Tükrözöttel vagy Méretezettel bekapcsolva tükörképek és másolatok más méretben is. Adjon az új blokknak nevet és bázispontot; a kijelölés és minden másolat erre a blokkra mutató hivatkozássá válik, mindegyik saját elforgatással és léptékkel. Vagy válassza a Blokk lehetőséget, és nevezzen meg egy létező blokkot, hogy megtalálja a szabad másolatait. A másolatnak ugyanazon a rétegen, színnel, vonaltípussal és vonalvastagsággal kell lennie, hacsak a Tulajdonságok nincs Figyelmen kívül hagyás értékre állítva. A zárolt rétegek objektumai érintetlenek maradnak. Egy visszavonási lépés. |
| `BEDIT` | `BE` | Blokkszerkesztő: egy blokk objektumainak és attribútumainak szerkesztése; a BCLOSE menti (BE) |
| `BLEND` |  | BLEND: spline két nyitott görbe végei között, a végek közelében kiválasztva az összekötéshez. CONtinuity: az Érintő mindkét irányt követi, a Sima azt is, hogyan hajlanak. |
| `BLOCK` | `B`, `BMAKE` | Blokk készítése objektumokból (egy hivatkozássá válnak) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: egy blokk minden hivatkozása egy másik blokk hivatkozásává válik, ugyanazon a helyen, ugyanazzal a léptékkel és forgatással. Mindkét blokk attribútumainak értékei megmaradnak. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | A BLOCKSPALETTE megmutatja a Blokkok panelt, a kurzor a szűrőjében. A panel minden blokkról képet mutat (a legutóbb elhelyezettek először), listában vagy rácsban; kattintson egy képre, vagy húzza a rajzra, hogy az INSERT paranccsal elhelyezze. A Könyvtárak alatt adjon hozzá saját DWG- vagy DXF-fájlt: blokkjai képpel listázódnak, és egy elhelyezésnél bemásolódnak ebbe a rajzba. A CadCraft Studióban rajzok mappája is hozzáadható, a fájlok és mappák megjegyzésre kerülnek. |
| `BOMEDIT` | `BOMCOLUMNS` | Anyagjegyzék-táblázat oszlopai, csoportosítása, rendezése, címe, összegei és megjegyzései |
| `BOMEXPORT` |  | Anyagjegyzék-táblázat mentése .csv fájlként |
| `BOMTABLE` | `BOM` | Egy zóna vagy az egész rajz élő anyagjegyzék-táblázata |
| `BOMUPDATE` |  | Most frissíti az összes anyagjegyzék-táblázatot, a befagyasztottakat is |
| `BOMZONE` | `BZONE` | A rajz megnevezett területe egy anyagjegyzékhez: két sarok, egy sokszög, vagy egy zárt objektum körvonala |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): válasszon egy pontot egy zárt terület belsejében, és kapjon egy zárt polivonalat körülötte. Az ívek ívek maradnak. Az Szigetek a benne lévő területeket is körvonalazza. |
| `BOX` |  | Doboz: két sarok és egy magasság (3D) |
| `BPARAMETER` | `BPARAM` | Még nincs kész: paraméter (például Láthatóság) hozzáadása egy blokkhoz. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokkparaméterek: képletekkel ellátott nevesített paraméterek, és több láthatósági paraméter egy blokkban. A blokkszerkesztőben működik (a kijelölt objektumokat egy állapothoz rendeli), és egy kijelölt hivatkozáson is (saját értékei és állapotai). |
| `BREAK` | `BR` | Vonal, ív, kör vagy polivonal törése két pont között (BR) |
| `BREAKATPOINT` |  | Vonal, ív vagy polivonal kettéosztása egy pontnál |
| `BREAKLINE` |  | Vonal rajzolása törésjellel; mérete és a végeken túli kinyúlása megmarad. |
| `BREPLACE` |  | BREPLACE egyik blokkot a másikra cserél. Kijelölt: válasszon blokkhivatkozásokat, és nevezze meg a helyette használandó blokkot. Mind: nevezzen meg egy blokkot és a cseréjét, és minden hivatkozás minden térben és más blokkokon belül megváltozik. A hivatkozás megtartja helyét, léptékét, forgatását és rétegét, és mindkét blokk attribútumainak értékeit; az új blokk számára helyet nem találó értékek elvesznek, és meg vannak nevezve. |
| `BSEARCH` |  | A BSEARCH blokkokat keres. Név: egy blokknév része, vagy minta * és ? jelekkel. Attribútum: egy érték (vagy TAG=érték), amelyet egy hivatkozás attribútumai tartalmaznak. Geometria: jelöljön ki objektumokat vagy egy blokkhivatkozást, és a legalább 85%-ban hasonló alakú blokkok listázódnak, a legjobb először; a méret, forgatás és tükrözés nem számít. A nyitott térben talált hivatkozások ki lesznek jelölve a következő paranccsal. |
| `BURST` |  | Blokkhivatkozások szétbontása, az attribútumaik által mondottak megtartásával: minden érték szöveggé válik az attribútum rétegén. |
| `BVHIDE` | `BVH` | A blokkszerkesztőben: az objektumok elrejtése az aktuális láthatósági állapotban. |
| `BVSHOW` | `BVSH` | A blokkszerkesztőben: az aktuális láthatósági állapot által elrejtett objektumok megjelenítése (halványan mutatva, hogy ki lehessen jelölni őket). |
| `BVSTATE` | `BVS` | A blokkszerkesztőben, láthatósági állapotokkal rendelkező blokkon: állapot váltása, vagy egy hozzáadása, átnevezése vagy törlése. |
| `CAL` |  | Hossz vagy szám kiszámítása: + − * / és zárójelek, ahogy bárhol beírja őket |
| `CENTERLINE` | `CL` | Középvonal két vonal között: köztük félúton, vagy a szögfelezőjük mentén, ha találkoznak (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Középjel: kereszt egy kör vagy ív közepén, középvonalakkal, amelyek kicsit túlnyúlnak rajta (CM) |
| `CHAMFER` | `CHA` | Két vonal közötti sarok letörése (D két távolság, A hossz és szög, P a polivonal minden sarka) |
| `CHSPACE` |  | CHSPACE: objektumok mozgatása lap és modell között egy nézetablakon keresztül. Léptékük és forgatásuk úgy igazodik, hogy a másik oldalról ugyanúgy nézzenek ki. Egy lapon a modellbe kerülnek; amíg nézetablakon keresztül dolgozik (MSPACE), a lapra jönnek. |
| `CIRCLE` | `C` | Középpont és sugár, átmérő, 2 vagy 3 pont |
| `CLASS` |  | A kijelölt objektumokat osztályba teszi, vagy kijelölés nélkül beállítja az aktív osztályt (a ? listázza őket) |
| `CLASSES` | `CLS` | Az Osztályok panel: az osztályok rétegeken átívelően rendezik az objektumokat; megmutatja, elrejti és stílusozza őket, és nézetablakonként felülírja őket (CLS) |
| `COMMANDLINE` | `CMDLINE` | A parancssor lehorgonyozása vagy lebegtetése, egy sorrá tétele, az előzménysorainak beállítása, vagy az előzmény megnyitása (F2) |
| `COMPARESETTINGS` | `CMPSET` | Méretezési stílusok, szövegstílusok, rétegek, lapok vagy mértékegységek összehasonlítása: kettő ebben a rajzban, vagy ez a rajz egy másik megnyitott rajzzal, és egy érték átmásolása. |
| `CONSTRAINTBAR` | `CBAR` | A kényszersávok megjelenítése vagy elrejtése (Mind mutat / Mind rejt, vagy objektumonként) |
| `COPY` | `CO`, `CP` | Objektumok másolása, annyiszor, ahányszor kattint |
| `COPYBASE` |  | Objektumok másolása a vágólapra egy Ön által választott bázisponttal |
| `COPYCLIP` |  | Objektumok másolása a vágólapra (Ctrl+C); a PASTECLIP helyezi el őket |
| `COUNT` | `BCOUNT` | Blokkhivatkozások számlálása: egyet kiválasztva kijelöli és megszámolja a blokkjának összes hivatkozását |
| `COUNTTABLE` |  | Blokkszámlálások táblázatának elhelyezése |
| `CREDITS` |  | A Könyvtári közreműködőket táblázatként teszi a rajzba. Futtassa újra, hogy a táblázatot frissítse a rajzban lévő elemek alapján. |
| `CURSORSIZE` |  | A kereszthajszál mérete: a 100 szélről szélre fut végig a rajzon (Beállítások › Kurzor › Teljes képernyő) |
| `CUTCLIP` |  | Objektumok kivágása a vágólapra (Ctrl+X): másolás, majd törlés |
| `CYLINDER` | `CYL` | Henger: középpont, sugár és magasság (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Blokkok, attribútumaik és objektum-tulajdonságaik listázása táblázatként a rajzban vagy egy CSV-fájlban |
| `DATALINK` | `DL` | Táblázat egy CSV-fájlból, amely megjegyzi a fájlt, hogy később újra beolvasható legyen |
| `DATALINKUPDATE` | `DLU` | Egy adatkapcsolat fájljának újraolvasása, és táblázatainak újratöltése |
| `DCALIGNED` | `DCALI` | Méretkényszer: a pontok valódi távolsága, egy pont és egy vonal, vagy két vonal |
| `DCANGULAR` | `DCANG` | Méretkényszer: két vonal közötti szög, vagy egy íven lévő szög |
| `DCCONVERT` |  | A kényszerezhető geometrián rajzolt méretezések méretkényszerré alakítása |
| `DCDIAMETER` | `DCDIA` | Méretkényszer: kör vagy ív átmérője |
| `DCDISPLAY` |  | Méretkényszerek megjelenítése vagy elrejtése a rajzon |
| `DCHORIZONTAL` | `DCHOR` | Méretkényszer: vízszintes távolság |
| `DCLINEAR` | `DCLIN` | Méretkényszer: vízszintes vagy függőleges távolság, ahol elhelyezi |
| `DCRADIUS` | `DCRAD` | Méretkényszer: kör vagy ív sugara |
| `DCVERTICAL` | `DCVER` | Méretkényszer: függőleges távolság |
| `DELBLOCKS` |  | Blokkok törlése: minden hivatkozás (a beágyazottak is, minden lapon) és a definíciók |
| `DELCONSTRAINT` | `DELCON` | Minden kényszer (geometriai és méretkényszer) eltávolítása a kijelölt objektumokról |
| `DELOPENING` |  | Ajtó vagy ablak kivétele egy falból. |
| `DESCRIBE` | `DESC` | Megmondja, mit tartalmaz a rajz: hány objektum, milyen fajtájú, milyen nagy, mi van kijelölve. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | A kijelölés törlése (Esc) |
| `DETAILS` | `DET` | Az Ön cégének saját részletei, amelyeket ahhoz talál, amit rajzol: keresés, blokk hozzáadása, listázás, eltávolítás, a felajánlások be- vagy kikapcsolása. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Diagram rajzolása szövegből: Mermaid folyamatábra, PlantUML komponensdiagram, D2, egy honnan-hová lista vagy draw.io XML, szerkeszthető blokkokként és összekötőkként |
| `DIMALIGNED` | `DAL`, `DIMALI` | Két pont közötti valódi távolság |
| `DIMANGULAR` | `DAN`, `DIMANG` | Két vonal közötti szög, egy ív szöge, vagy három ponttal |
| `DIMARC` | `DAR` | Ívhossz-méretezés: a távolság az ív mentén, az ívjellel (DAR) |
| `DIMASZ` |  | Méretezési beállítás: a nyíl mérete |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Egy közös alapvonalból egymásra helyezett méretek |
| `DIMBREAK` | `DBREAK` | A méretvonalak és a segédvonalak megtörése, ahol más objektumokat keresztezik (Auto), két pont között (Kézi), vagy a törések eltávolítása |
| `DIMCONSTRAINT` | `DCON` | Méretkényszerek: lineáris, párhuzamos, szögű, sugár, átmérő, átalakítás |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Méretláncolat, mindegyik az előző vége után |
| `DIMDEC` |  | Méretezési beállítás: tizedesjegyek |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Ív vagy kör átmérője |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | A méretezések elszabadítása azoktól az objektumoktól, amelyekhez kötve vannak (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | A méretszöveg módosítása (Kezdő, Új szöveg, Forgatás), vagy a segédvonalak megdöntése (Ferde) |
| `DIMEXE` |  | Méretezési beállítás: túlnyúlás a méretvonalon túl |
| `DIMEXO` |  | Méretezési beállítás: eltolás a kezdőponttól |
| `DIMGAP` |  | Méretezési beállítás: a szöveg körüli hézag |
| `DIMINSPECT` |  | Ellenőrző méretezés: keret az érték körül címkével és azzal, milyen gyakran ellenőrzik a darabot |
| `DIMJOGGED` | `DJO`, `JOG` | Megtört sugárméretezés: sugár, amelyet közelebbi pontból rajzol, ha a középpont messze van (DJO) |
| `DIMJOGLINE` | `DJL` | Törésjel hozzáadása egy lineáris vagy párhuzamos méretvonalhoz, jelezve, hogy a távolság nincs léptékhelyesen rajzolva (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vízszintes vagy függőleges távolság (R bármely szögre) |
| `DIMLUNIT` |  | Méretezési beállítás: hosszformátum (1 tudományos, 2 tizedes, 3 mérnöki, 4 építészeti, 5 törtes) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinátaméretezés: egy pont X vagy Y távolsága az UCS origójától, egy vezetővonalon (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Méretezési változók felülírása a kijelölt méretezéseken a stílusuk módosítása nélkül; a Törlés visszateszi a stílust (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Ív vagy kör sugara |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Egy méretezés pontjainak objektumokhoz kötése, így mozgáskor követi őket és újra mér (DRE) |
| `DIMSCALE` |  | Méretezési beállítás: általános lépték (méretek × ez) |
| `DIMSPACE` |  | Egyenlő távolság a párhuzamos méretvonalak között, egy alapméretezéstől mérve (0 egy vonalba igazítja őket, az Auto a szöveg magasságának kétszerese) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Nevesített méretezési stílusok készítése, módosítása, aktuálissá tétele, törlése, alkalmazása és összehasonlítása (a párbeszédpanel; a -DIMSTYLE a parancssorban) |
| `DIMTEDIT` | `DIMTED` | A méretszöveg mozgatása a méretvonal bal, jobb vagy közepére, vagy elforgatása |
| `DIMTEXTUNIT` | `DTU` | A méretszöveg mm, cm, m vagy km egységben, vagy a rajz saját egységeiben: a kijelölt méretezések, különben újak (DTU) |
| `DIMTXT` |  | Méretezési beállítás: szövegmagasság |
| `DIST` | `DI` | Két pont közötti távolság és szög |
| `DISTRIBUTE` |  | A kijelölt objektumok egyenletes elosztása oldalra vagy fel-le: egyenlő lépések a középpontok között, vagy egyenlő hézagok; a két szélső helyben marad |
| `DIVIDE` | `DIV` | DIVIDE (DIV): jelölések, amelyek egy vonalat, ívet, kört, polivonalat, spline-t vagy ellipszist egyenlő részekre osztanak. Pontok, vagy a Blokk opcióval egy blokk minden jelölésnél. |
| `DOCUMENTS` | `DOCS` | A Dokumentumok panel megnyitása: rajzok ki- és beléptetése, felülvizsgálatok, kiadási állapotok és jóváhagyás egy projektmappához |
| `DOOR` | `DR` | Ajtó elhelyezése egy falban. Az oldal, amelyre kattint, az az oldal, amerre nyílik. |
| `DRAWORDER` |  | A rajzolási sorrend módosítása: objektumok előrehozása, hátraküldése, vagy más objektumok fölé vagy alá helyezése. |
| `DUPLICATE` | `DUP` | Másolat, amely a mutatóval mozog: kattintson a lehelyezéshez (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | A rajz tulajdonságai: cím, szerző és a többi, valamint saját név–érték párjai |
| `DXFOUT` |  | A rajz letöltése DXF R12 formátumban (a Mentés megtartja a saját formátumát) |
| `EATTEDIT` | `DDATTE` | Egy blokkhivatkozás attribútumainak szerkesztése: értékek, szöveg és tulajdonságok, egyszerre egy attribútum |
| `ELLIPSE` | `EL` | Tengely végpontjai és a másik félsugár |
| `ERASE` | `E`, `DELETE` | Objektumok eltávolítása |
| `EXPLODE` | `X` | Polivonalak, blokkok és méretezések szétbontása részeikre |
| `EXPORT` | `EXP` | A rajz másolatának mentése egy olyan fájltípusban, amelyet egy bővítmény ír |
| `EXPORT3D` | `3DEXPORT` | A 3D modell exportálása: GLB, OBJ vagy STL |
| `EXPORTPOINTS` | `EXPPTS` | Pontok írása, és blokkok beillesztési pontjai egy attribútummal leírásként, CSV vagy TXT fájlba (PNEZD, PENZD vagy XYZ) BIM- és földmérési programoknak |
| `EXTEND` | `EX` | Objektumok megnyújtása, hogy másokat érjenek: kattintson egy vég közelében, húzzon át többen, vagy a Shift+kattintás levág |
| `EXTRIM` |  | EXTRIM: válasszon egy vágóélt, majd egy oldalt. Minden, ami keresztezi az élt, azon az oldalon levágódik. A darabok, amelyek eltűnnének, a mutató mozgatásakor látszanak. |
| `EXTRUDE` | `EXT` | Zárt 2D-objektumok kihúzása testekké (3D) |
| `FIELD` |  | Mező elhelyezése szövegben, táblázatcellában vagy attribútumban: dátum, fájlnév, lapszám, rajztulajdonság, egy objektum területe vagy hossza, vagy képlet |
| `FILLET` | `F` | A két objektum közötti sarok lekerekítése vagy négyzetesítése (R sugár, P minden polivonal-sarok, M több) |
| `FIND` |  | Szavak keresése és cseréje szövegben, attribútumértékekben és méretszövegben |
| `FLATTEN` |  | A kijelölt objektumok magasságának (Z) és vastagságának 0-ra állítása, a használt blokkokban is. |
| `FLOOR` |  | A rajzolandó szint kiválasztása, egy hozzáadása, vagy a kijelölés áthelyezése vagy másolása egy szintre. |
| `FLOORLAYERS` |  | A szintek rétegekké alakítása, Szint-Réteg néven, olyan fájlhoz, amelyet szint nélküli személynek küldenek. |
| `FLOORS` | `FLR` | A Szintek panel megnyitása: szintek egymásra rakása egy modelltérben. |
| `GCCOINCIDENT` |  | Kényszer: két pont találkozik, vagy egy pont egy objektumon marad |
| `GCCOLLINEAR` |  | Kényszer: két vonal egy egyenesen marad |
| `GCCONCENTRIC` |  | Kényszer: két kör vagy ív közös középpontot oszt |
| `GCEQUAL` |  | Kényszer: két vonal azonos hosszúságú marad, vagy két kör/ív azonos sugarú |
| `GCFIX` |  | Kényszer: egy pont vagy egy egész objektum a helyén marad |
| `GCHORIZONTAL` |  | Kényszer: egy vonal (vagy két pont) vízszintes marad |
| `GCPARALLEL` |  | Kényszer: két vonal párhuzamos marad |
| `GCPERPENDICULAR` |  | Kényszer: két vonal derékszöget zár be |
| `GCSYMMETRIC` |  | Kényszer: két pont, vonal vagy kör tükrözi egymást egy vonalra |
| `GCTANGENT` |  | Kényszer: egy vonal és egy kör vagy ív (vagy kettő) érintő marad |
| `GCVERTICAL` |  | Kényszer: egy vonal (vagy két pont) függőleges marad |
| `GDSIN` | `GDS` | Egy IC-elrendezés megtekintése (GDSII adatfolyam-fájl): minden réteg és adattípus rajzrétegként, laposan, a felhasználói egységekben; csak megtekintésre és mérésre (labor-próba) |
| `GEOMCONSTRAINT` | `GCON` | Geometriai kényszerek: vízszintes, függőleges, párhuzamos, érintő, egybeeső… |
| `GLBOUT` |  | A 3D modell exportálása GLB (glTF) formátumban |
| `GRADIENT` | `GD` | Területet tölt ki egy vagy két szín színátmenetével |
| `GRID` |  | A rács beállítása: a vonalak távolsága, minden N-edik vonal főként, BE vagy KI, vagy Auto a zoomhoz való újrakövetéshez |
| `GRIDMOVE` | `GM` | Rácsvonal mozgatása, és ami rajta lóg: a falak nyúlnak, oszlopok, buborékok és címkék mozognak, a méretezések követnek. |
| `GROUP` | `G` | GROUP (G): a kijelölt objektumok közös nevet kapnak. Egy kattintás valamelyikükre ezután mindet kijelöli. Enter a névnél névtelen csoportot készít. |
| `GROUPEDIT` |  | GROUPEDIT: egy csoport módosítása. Válasszon egy objektumát, vagy adja meg a nevét, majd Hozzáadás vagy Eltávolítás objektumok, ÁtNEVezés, Leírás módosítása, vagy hogy egy kattintás az egészet kijelöli-e. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Terület kitöltése tömör kitöltéssel vagy mintával: kattintson belülre, vagy jelöljön ki zárt objektumokat (H) |
| `HATCHEDIT` | `HE` | Sraffozás módosítása: minta, lépték, szög, kiindulópont, és kapcsolata egy határral. |
| `HATCHGENERATEBOUNDARY` | `HGB` | A határpolivonalak újra létrehozása egy sraffozásból, hozzá kötve vagy nem |
| `HATCHTOBACK` |  | Minden sraffozás minden más mögé küldése. |
| `HELP` | `?` | Ez a lista |
| `HIDEOBJECTS` |  | A kijelölt objektumok elrejtése az UNISOLATEOBJECTS-ig. A rajzzal nincs mentve. |
| `HISTORY` | `HIST` | HISTORY (HIST): ennek a rajznak a verziói — a számítógépen megőrzött másolatok, amikor a Studio menti, és a felhő verziói — megnyitáshoz, visszaállításhoz és a változásokkal összehasonlításhoz, színesen jelölve. |
| `ID` |  | Egy pont koordinátái |
| `IMAGE` | `IM` | Adja meg a CadCraftnak a rajz által használt képfájlokat (a DWG csak azt tárolja, hol voltak). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Kép (PNG vagy JPEG) elhelyezése egy fájlból. |
| `IMAGECLIP` | `ICL` | Kép levágása egy téglalapra vagy sokszögre, vagy a levágás eltávolítása. |
| `IMPORT` | `IMP` | Egy olyan típusú fájl importálása, amelyet egy bővítmény olvas, ebbe a rajzba |
| `INSERT` | `I`, `DDINSERT` | Blokk elhelyezése (S lépték, R forgatás); F DWG/DXF fájlból, L a könyvtárból |
| `INTERSECT` | `IN` | Csak azt tartja meg, amit a testek közösen tartalmaznak (3D), vagy a 2D tartományok közös területét |
| `ISODRAFT` |  | ISODRAFT: izometrikus rajzolás be vagy ki, vagy egyenesen a Bal, Felső vagy Jobb síkra. Amíg be van kapcsolva, az Ortho és a polárkövetés a sík két tengelyét követi, a rács izometrikusan rajzolódik, az ELLIPSE pedig Izokör opciót kap. |
| `ISOLATEOBJECTS` | `ISOLATE` | Csak a kijelölt objektumok mutatása; minden más ebben a térben el van rejtve az UNISOLATEOBJECTS-ig. A rajzzal nincs mentve. |
| `ISOPLANE` |  | ISOPLANE: az izometrikus sík kiválasztása, amelyen rajzol: Bal, Felső vagy Jobb. Az Enter a következőre lép, ahogy az F5 is teszi, amíg az izometrikus rajzolás be van kapcsolva. |
| `JOIN` | `J` | Végükön találkozó vonalak, ívek és polivonalak egy polivonallá egyesítése; egy egyenesen lévő vonalak egy vonallá (J) |
| `LASER` | `LASERCUT` | A Lézer panel megnyitása: rétegek küldése lézervágóra vagy gravírozóra (GRBL G-kód) |
| `LASSOMODE` |  | Nyomva tartás és húzás lasszót rajzol (1) vagy téglalapot (0) |
| `LAYDEL` |  | Egy réteg és minden rajta lévő objektum törlése (a modellben, lapokon és blokkokban) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | A Rétegkezelő megnyitása: minden réteg egy táblázatban |
| `LAYERPANEL` |  | A rétegek panel megmutatása |
| `LAYFRZ` |  | A kiválasztott objektumok rétegének befagyasztása |
| `LAYGROUP` | `LG` | Rétegek csoportosítása mappákba a Rétegek panelen. |
| `LAYISO` |  | A kijelölt objektumok rétegeinek izolálása (minden más réteg ki) |
| `LAYLOCKFADE` |  | Beállítja, mennyire halványodnak a zárolt rétegek objektumai, és hogy egy kattintás kijelölheti-e őket. |
| `LAYMCUR` |  | A kiválasztott objektum rétegének aktuálissá tétele |
| `LAYMRG` |  | Rétegek egyesítése: az objektumaik egy célrétegre kerülnek, és az egyesített rétegek megszűnnek |
| `LAYOFF` |  | A kiválasztott objektumok rétegének kikapcsolása |
| `LAYON` |  | Minden réteg bekapcsolása |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Új lap rajzfejjel és nézetablakkal |
| `LAYTHW` |  | Minden réteg feloldása |
| `LAYUNISO` |  | A LAYISO által kikapcsolt rétegek visszakapcsolása |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | A régi vietnami betűtípusokkal gépelt szöveget Unicode-dá alakítja (TCVN3 / ABC betűtípusok, például a .VnTime, és VNI betűtípusok, például a VNI-Times). Az ilyen szöveg már úgy látszik, ahogy olvasható; ez véglegesen átírja, számlálással és egy visszavonási lépéssel. |
| `LENGTHEN` | `LEN` | Vonalak, ívek és polivonalak meghosszabbítása vagy rövidítése: egy összeggel, százalékkal, összes hosszra, vagy húzással (LEN) |
| `LIBRARY` | `LIB` | A könyvtár panel: elemek elhelyezése, frissítések keresése, közreműködők |
| `LIMITS` |  | A rajzhatárok beállítása: BE, KI, vagy a bal alsó és jobb felső sarkok. Ha a határok BE vannak, a rajtuk kívüli pontokat elutasítja |
| `LINE` | `L` | Egyenes szakaszok, mindegyik saját objektum |
| `LINETYPE` | `LT`, `CELTYPE` | Az új objektumok vonaltípusa (rétegről, blokkról vagy egy nevesítettről) |
| `LINKVIEWS` | `SYNCVIEWS` | Minden panel együtt pásztázása és nagyítása (osztott képernyő), két rajz vagy revízió összehasonlításához |
| `LISPEDIT` | `VLIDE` | A LISPEDIT (vagy VLIDE) megnyitja a LISP-szerkesztőt: egy ablak, amelyben rutint írhat, tölthet be és próbálhat ki. A Betöltés a rajzba minden alakot beolvas, ahogy az APPLOAD a fájlt olvassa, és létrehozza a parancsait. A Kijelölés futtatása a kijelölt alakokat értékeli ki, vagy azt, amelyben a kurzor van. A konzol megmutatja, mit írt ki a rutin, és minden hibát a sorával. A párosító zárójel a gépelés közben megjelölődik, az Enter behúzza az új sort. Az Új, Megnyitás és Mentés egy .lsp fájlon dolgozik. A szöveg melletti listák a rutin által definiált függvényeket, azokat, amelyeket hív, de ez a LISP még nem tud, és az összes függvényt mutatják. Az ablak nem blokkolja a rajzot, így a rutin kérhet pontokat; a Stop vagy az Esc megszakítja a futó rutint. |
| `LIST` | `LI`, `LS` | Objektumok leírása az előzményekben |
| `LTSCALE` | `LTS` | A rajz vonaltípus-léptéke (minden szaggatást és rést ezzel szoroz) |
| `LWDISPLAY` | `LWT` | Vonalvastagságok megjelenítése vagy elrejtése a képernyőn (az állapotsor LWT gombja) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Az új objektumok vonalvastagsága (rétegről, blokkról, alapértelmezett vagy mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Térképrétegek a modelltér alatt: a rajz koordinátarendszere, csempék, WMS, WMTS, ArcGIS, képek |
| `MASSPROP` |  | MASSPROP: tartományok és zárt objektumok keresztmetszeti tulajdonságai: terület, kerület, középpont, nyomatékok és tehetetlenségi szorzat, tehetetlenségi sugarak és a főtengelyek. Egyenesekre és ívekre pontos. Jelentést írhat szövegfájlba. |
| `MATCHPROP` | `MA`, `PAINTER` | Tulajdonságok egyeztetése: egy objektum rétegének, színének és még többnek átmásolása másokra (MA) |
| `MEASURE` | `ME` | MEASURE (ME): jelölés minden megadott hosszúságonként egy vonal, ív, kör, polivonal, spline vagy ellipszis mentén, a Önhöz legközelebbi végtől számítva. Pontok, vagy a Blokk opcióval egy blokk minden jelölésnél. |
| `MEASUREGEOM` | `MEA` | Távolság, sugár, szög vagy terület mérése (MEA) |
| `MINSERT` |  | MINSERT: blokk egy lépésben sorokban és oszlopokban. Mindegyik saját hivatkozás, így bármelyiket mozgathatja vagy törölheti. |
| `MIRROR` | `MI` | Objektumok tükrözése egy vonalra |
| `MLEADER` | `MLD`, `MLEAD` | Többszörös vezetővonal: nyíl, vezetővonal és megjegyzés egy objektumként (MLD) |
| `MLEADERALIGN` | `MLA` | Többszörös vezetővonalak igazítása az egyikhez egy irányban, egyenlő távolságra, vagy két pont között elosztva (MLA) |
| `MLEADERCOLLECT` | `MLC` | Több többszörös vezetővonal egybegyűjtése: blokkjaik egy sorban vagy oszlopban, vagy megjegyzéseik egymás alatt (MLC) |
| `MLEADEREDIT` | `MLE` | Vezetővonalak hozzáadása egy többszörös vezetővonalhoz vagy eltávolítása; tartalmának váltása szöveg és blokk között (MLE) |
| `MLINE` |  | Párhuzamos vonalak rajzolása együtt, a sarkokban összekötve. |
| `MOVE` | `M` | Objektumok mozgatása egy bázisponttal és egy második ponttal |
| `MSPACE` | `MS` | Munka a modellen a megnyitott lap egy nézetablakán keresztül (vagy kattintson duplán a nézetablakon belül). |
| `MTEXT` | `MT`, `T` | Bekezdésszöveg: húzza ki a szélességét, majd írjon helyben; az Enter új bekezdést kezd (T) |
| `MVIEW` | `MV` | Nézetablak a modellre, egy lapon |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nevesített nézetek: a képernyőn lévő nézet (vagy egy ablak) mentése egy névvel, és visszatérés hozzá (NV) |
| `NCOPY` |  | Objektumok másolása egy blokkhivatkozásból vagy egy összekapcsolt rajzból a rajzba, szétbontás nélkül. |
| `NEARBY` |  | Megmondja, mi van a kurzor közelében, a legközelebbi először, a távolsággal és az oldallal. |
| `NEW` |  | Új rajz kezdése |
| `OBJECTSCALE` | `OBJSCALE` | Az annotatív szöveg és méretezés annotációs léptékei: léptéket adhat hozzá, törölhet egyet, hozzáadhatja az aktuális léptéket, vagy listázhatja őket (minden nézetablak a saját léptéke méretében mutatja őket) |
| `OBJOUT` |  | A 3D modell exportálása OBJ formátumban |
| `OFFICESTANDARD` | `OFFSTD` | Az irodai szabvány: a papírszöveg-magasságok, rétegek, rajzfej mezői és sablonok egy rekordban. Megmutatja a hatályban lévőt és honnan jön; Importálás egy .json rekordot a rajzba, az irodai rétegek hozzáadása, a rajzfej mezőinek listázása. |
| `OFFSET` | `O` | Párhuzamos másolatok egy távolságban |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hogyan zárja az OFFSET a rések a polivonal külső sarkainál. 0 meghosszabbítja a szakaszokat, 1 ívet ad, 2 egyenes vágást. Ebben a munkamenetben marad meg. |
| `OLELIST` | `OLES` | A rajz OLE-objektumainak listázása, és egy kép másolatának elhelyezése, ahol kéri |
| `OPEN` |  | DWG vagy DXF megnyitása ezen a számítógépen |
| `OPENIN3D` |  | Ezen rajz megnyitása a 3D modellező alkalmazásban, új lapon (semmi nem töltődik fel) |
| `OPTIONKEYS` | `OPTKEYS` | Saját betűk adása a parancsopcióknak (ARRAY.PO, P), egy szövegfájlban |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Az objektumfogás menü megnyitása: válassza ki, mely fogások legyenek bekapcsolva. Az állapotsor Fogás gombján jobb kattintás is. |
| `OVERKILL` |  | Duplikált objektumok törlése, és az átfedő vagy végükön találkozó vonalak és ívek egyesítése, egy tűrésen belül. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | A Paraméterek panel: felhasználói paraméterek és méretkényszerek egy táblázatban |
| `PARTSLIST` | `PLIST` | Alkatrészlista-táblázat minden szabványos alkatrészről és acélszelvényről, amelyet a könyvtárból helyeztek el |
| `PASTEAREA` | `PAREA` | A MarkupCraftban másolt terület (Terület másolása) beillesztése valódi méretében, képként. |
| `PASTEBLOCK` |  | PASTEBLOCK: amit másolt, egy blokkként illeszti be. A blokk saját nevet kap; a RENAME adja meg a sajátját. |
| `PASTECLIP` |  | A vágólap beillesztése: követi a kurzort, kattintson oda, ahová kerül (Ctrl+V) |
| `PASTEORIG` |  | A vágólap beillesztése a koordinátákra, ahonnan másolták (Ctrl+Shift+V) |
| `PDF` |  | Adja meg a CadCraftnak a PDF-fájlokat, amelyeket a rajz alátétei használnak |
| `PDFADJUST` |  | PDF-alátét halványítása, kontrasztja, monokróm beállítása vagy kikapcsolása |
| `PDFATTACH` | `PDFATT` | PDF-oldal csatolása alátétként (PDFATTACH) |
| `PDFCLIP` |  | PDF-alátét levágása egy téglalapra vagy sokszögre |
| `PDFIMPORT` | `PDFIM` | Egy PDF-oldal vonalainak, kitöltéseinek és szövegének rajzobjektumokká alakítása (PDFIMPORT) |
| `PDFLAYERS` |  | Egy PDF-alátét rétegeinek be- vagy kikapcsolása |
| `PEDIT` | `PE` | Polivonal szerkesztése: zárás, nyitás, egyesítés, szélesség, görbe illesztése, spline-görbe, görbeelvétel, vonaltípus-generálás, megfordítás; vonalak, ívek és spline-ok polivonallá alakíthatók |
| `PENPRESSURE` |  | Hogy egy tollvonás nyomása beállítja-e a SKETCHFIX és a SKETCHLIVE által készített objektumok vonalvastagságát (alapértelmezetten be). Ebben a böngészőben marad meg. |
| `PHOTOSKETCH` | `PSK` | Egy papírra készített kézi vázlat fotóját a megadott léptékű vonalakká és ívekké alakítja, kiegyenesíti a perspektívát, és minden tollszínnek saját rétegét adja. |
| `PICKSTYLE` |  | PICKSTYLE: egy csoport egy objektumának kijelölése az egész csoportot jelöli-e (1, a kezdeti beállítás) vagy csak azt az objektumot (0). Ebben a munkamenetben marad meg. |
| `PLAN` |  | A nézet elforgatása úgy, hogy az UCS X tengelye (Aktuális UCS, egy mentett Ucs vagy a Világ) vízszintesen látsszon. A rajzban semmi nem mozdul. |
| `PLINE` | `PL` | Egyenes és ív szakaszokból álló polivonal |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Nyomtatás PDF-be: egy lap, vagy a modell egy léptéken |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Nyomtatási stílustáblák: beállítja, minek nyomtatódik minden szín (szín, fekete, szürke, tinta, vonalvastagság); a rajzzal együtt tárolódik (STYLESMANAGER) |
| `POINT` | `PO` | Pontobjektumok |
| `POINTCLOUD` | `PC` | a csatolt pontfelhő: szelet, magasság, vastagság, szín, méret, látható, nagyítás, leválasztás |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | pontfelhő csatolása (LAS, LAZ, XYZ, PTS) a rajz alá |
| `POLARANG` |  | A polárkövetés lépése fokban (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Szabályos sokszög |
| `PRESSPULL` |  | Test egy lapjának tolása vagy húzása (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | A Tulajdonságok panel megnyitása (vagy Ctrl+1, vagy egy objektumra duplán kattintva) |
| `PROPERTIESCLOSE` | `PRCLOSE` | A Tulajdonságok panel összecsukása az ablak szélére |
| `PSPACE` | `PS` | Kilépés a nézetablakból, amelyben dolgozik, és vissza a lapra (vagy kattintson duplán kívül). |
| `PUBLISH` | `-PUBLISH` | Több vagy minden lap nyomtatása egy PDF-be (oldal és könyvjelző laponként) |
| `PURGE` | `PU` | Azon blokkdefiníciók törlése, amelyeket semmi nem használ |
| `QDIM` |  | Gyors méretezés: több objektum egyszerre (folyamatos, alapvonalas, lépcsős, koordináta, sugár vagy átmérő) |
| `QPMODE` | `QP` | Gyors tulajdonságok a kurzornál be vagy ki |
| `QSELECT` | `QS` | Gyors kijelölés: minden olyan típusú objektum, amelynek rétege, színe, mérete vagy neve egyezik (QS) |
| `RASTERSNAP` |  | Be- vagy kikapcsolja a beszkennelt lapok vonalaihoz való illesztést. |
| `RAY` |  | Sugár: egy ponttól induló segédvonal, egy irányban végtelen. |
| `RECOVER` |  | Megnyit egy sérült DXF vagy DWG fájlt: kihagyja azt, amit nem lehet olvasni, ahelyett, hogy visszautasítaná a fájlt, megmondja, mit hagyott ki, majd ellenőrzi és javítja a rajzot az AUDIT módjára. |
| `RECTANG` | `REC`, `RECTANGLE` | Zárt polivonal két sarokból |
| `REDLINE` | `RDL` | Jelölésből revízió: beolvassa a MarkupCraft jelölési csomagját, minden változást elfogad vagy elutasít, az elfogadottakat felhővel és revíziónaplóval jelöli, és elmenti a válaszfájlt (RDL) |
| `REDO` |  | Az visszavont művelet megismétlése |
| `REFCLOSE` |  | Egy blokk helyben szerkesztésének befejezése: mentés vagy a módosítások elvetése |
| `REFEDIT` |  | Blokk helyben szerkesztése, ahol egy hivatkozása van, a rajz többi része halványítva; a REFCLOSE menti |
| `REGEN` | `RE` | A rajzon látható dolgok újraépítése ebből a rajzból |
| `REGENALL` | `REA` | Minden lap, panel és megnyitott rajz újraépítése |
| `REGION` | `REG` | REGION (REG): zárt objektumokból tartományokat (régiókat) készít, vagy olyan vonalakból, ívekből és polivonalakból, amelyek végükön összezárva hurkot alkotnak. Ezután a UNION, SUBTRACT és INTERSECT egyesíti a régiókat, a MASSPROP pedig megadja a keresztmetszeti tulajdonságaikat. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Több szkennelés regisztrálása: egy keretbe helyezés kijelölt pontpárokkal vagy célpontokkal, finomítás ICP-vel, egy LAS vagy E57 exportálása |
| `REINIT` |  | Az álnévfájl újratöltése |
| `RENAME` | `-RENAME`, `REN` | Egy réteg vagy blokk átnevezése (minden objektum vagy hivatkozás követi) |
| `REVCLOUD` | `RC` | Revíziófelhő: téglalap, sokszög, szabadkézi útvonal vagy egy objektum körül (RC) |
| `REVOLVE` | `REV` | Zárt 2D-objektumok forgatása egy tengely körül testekké (3D) |
| `ROTATE` | `RO` | Objektumok forgatása egy bázispont körül |
| `SAMPLES` | `SAMPLE` | A CadCraft mintarajzainak egyikének megnyitása (építészeti készlet, kivitelezési rajz), hogy tanuljon belőle |
| `SAVE` | `QSAVE` | A rajz letöltése a saját formátumában (DWG vagy DXF) |
| `SAVEAS` |  | A rajz letöltése DWG vagy DXF formátumban: válassza ki, melyiket |
| `SAYSEL` |  | Megmondja, mi van kijelölve, objektumonként egy mondatban. |
| `SCALE` | `SC` | Objektumok léptékezése egy bázispont körül |
| `SCALELISTEDIT` | `SCALELIST` | A rajz saját léptékeinek hozzáadása, szerkesztése és törlése; megjelennek a nézetablak- és nyomtatási léptéklistákban, és a fájlban mentődnek (SCALELIST) |
| `SCANALIGN` | `SCL` | Beszkennelt lap igazítása két ponthoz: mozgatás, forgatás, és ha úgy dönt, léptékezés. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Beszkennelt rajz beillesztése: PNG, JPEG vagy TIFF (egy oldal vagy egy többoldalas fájl összes oldala), vagy egy képként működő PDF-oldal. |
| `SCANCLEAN` | `SCC` | Beszkennelt lap feketévé-fehérré tétele és pöttyök eltávolítása. |
| `SCANCROP` | `SCR` | Beszkennelt lap levágása egy ablakra. |
| `SCANDESKEW` | `SCD` | A beszkennelt lap hosszú vonalainak szögének megkeresése, és a lap derékszögbe fordítása, amint elfogadja a szöget. |
| `SCANERASE` | `SCE` | Beszkennelt lap egy területének törlése: téglalap, sokszög vagy lasszó. |
| `SCANINFO` | `SCI` | A beszkennelt lap eredeti fájljának és az azóta tett lépéseknek megmutatása. |
| `SCANSCALE` | `SCS` | Beszkennelt lap léptékezése: jelöljön ki rajta két pontot, és írja be köztük a valódi távolságot. |
| `SCANTRACE` | `SCT` | Beszkennelt lap vonalakká és ívekké követése egy új rétegen, az Ön által megadott tűrésig. A szöveg és a sraffozás rasztermaradt. |
| `SELECT` |  | Objektumok kijelölése most (a P, Előző opcióhoz, a következő parancsban) |
| `SELECTALL` | `AI_SELALL` | Minden szerkeszthető objektum kijelölése ezen a lapon (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Minden olyan objektum kijelölése, mint amelyeket kiválasztott: azonos típus, réteg és szín (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Megmutatja a Lapkészlet panelt: több rajz lapjai, számozva, egy PDF-be közzétéve. |
| `SHORTCUTS` | `KEYS` | Bármely parancsnak saját billentyű adása (Ctrl vagy Alt egy betűvel, vagy egy szabad funkcióbillentyű), ebben a böngészőben vagy az asztali alkalmazásban megőrizve. |
| `SHXFONTS` | `SHX` | Saját SHX betűtípusok adása a CadCraftnak egy mappából vagy fájlokból, így a betűtípusukat megnevező szövegstílusok azokkal rajzolódnak (listázás, eltávolítás, megfordítás) |
| `SKETCHFIX` | `SKF` | Szabadkézi vonások rajzolása; mindegyikből tiszta vonal, kör, ív, téglalap vagy polivonal lesz, egyenesbe igazítva és a többihez illesztve. |
| `SKETCHLIVE` | `SKL` | Vázlatolás tollal: minden vonás pontos vonal, kör, ív vagy téglalap lesz, amint felemeli a tollat, a rajzhoz illesztve, mérete felülírható. |
| `SPLINE` | `SPL` | Spline rajzolása pontokon át (vagy vezérlő-sokszöggel), vagy egy polivonal spline-ná alakítása |
| `SPLINEDIT` | `SPE` | Spline szerkesztése: illesztőpontok, vezérlőpontok és súlyok, nyitás vagy zárás, megfordítás, vagy polivonallá alakítás |
| `SPLIT` |  | A rajzterület felosztása panelekre (VPORTS-ként a modellen; lapról is) |
| `STEELMEMBER` | `SMEMBER` | Acélelem 3D-ben szabványos szelvényből: két pont (egy gerenda), vagy egy bázispont és egy magasság (Oszlop) |
| `STLOUT` |  | A 3D modell exportálása STL formátumban (milliméterben) |
| `STRETCH` | `S` | Nyújtás: húzzon egy keresztező ablakot a végeken a mozgatáshoz; ami benne van, mozog, a többi marad (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Szövegstílusok: a betűtípus, magasság, szélesség és dőlés, amit az új szöveg kap (a párbeszédpanel; a -STYLE a parancssorban) |
| `SUBTRACT` | `SU` | Testek elvétele másoktól (3D), vagy 2D tartományok elvétele tartományoktól |
| `SWBOUT` | `SWMACRO` | Makró letöltése SolidWorksbe (.swb), amely a modellt egy kényszerezett vázlatként építi újra |
| `SWEEP` |  | Zárt 2D-objektumok végighúzása egy útvonalon (vonal, polivonal, ív, kör) testekké (3D) |
| `TABLE` | `TB` | Táblázat készítése: sorok és oszlopok, vagy a vágólapon vagy egy CSV-fájlban lévő táblázatcellákból |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Táblázat szerkesztése: cellába írás, sorok és oszlopok beszúrása és törlése, méretek, egyesített cellák, igazítás |
| `TABLEEXPORT` |  | Mentse, amit a táblázat mutat, CSV-fájlként |
| `TABLEPASTE` | `PASTETABLE` | Táblázat készítése a vágólapon lévő táblázatcellákból |
| `TABLESTYLE` | `TS` | Táblázatstílusok: szövegmagasságok, igazítás, margó és szegélyek a cím-, fejléc- és adatsorokhoz |
| `TAGS` |  | Címkék blokkhivatkozásokon: címke definiálása (fajta, megengedett értékek, a blokkok, amelyekre vonatkozik), beállítása a kijelölt hivatkozásokra, és listázás táblázatként, amelyet CSV-ként menthet |
| `TEXT` | `DT`, `DTEXT` | Egysoros szöveg; az Enter a következő sort kezdi |
| `TEXTEDIT` | `ED`, `DDEDIT` | Szöveg szerkesztése helyben: egy szöveg kiválasztása (vagy duplakattintás rajta) (ED) |
| `TEXTMASK` | `TMASK` | Háttérmaszk elhelyezése a szövegek mögé (a rajz háttere vagy egy szín), vagy annak eltávolítása. |
| `TEXTTOFRONT` |  | Az összes szöveg, méretezés és vezetővonal előrehozása minden más elé. |
| `TOOLBAR` |  | Az eszköztárgombok megjelenítésének kiválasztása: ikon és szöveg, csak ikon, vagy csak szöveg (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Az eszköztár elhelyezése az ablak tetejére, aljára, bal vagy jobb oldalára |
| `TOOLBARROWS` |  | Az eszköztár sorainak száma: illesszen, 2 vagy 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | A rajz feletti sávok szabványossá vagy tömörré tétele |
| `TOUCHCROSSHAIR` | `TCX` | Eltolt kereszthajszál ujjal való rajzoláshoz: egy ujj egy kereszthajszálat mozgat, amely fölötte és mellette van, így az ujj nem takarja a kiválasztott pontot. Az ujj felemelése nem választ ki semmit; a Kattintás gomb vagy egy koppintás egy második ujjal a kereszthajszálnál választ ki, és a Kattintás tartása a mozgatás közben húz. Hosszú nyomás vagy az Enter gomb az Enter. Két ujjal pásztáz és nagyít. Beállítások: BE, KI, Auto (csak ott, ahol az ujj az egyetlen mutató), Távolság, Oldal. |
| `TOUR` | `TUTORIAL` | Az első rajzolás hatlépéses bemutatójának újraindítása |
| `TRIM` | `TR` | Objektumok levágása odáig, ahol mások keresztezik őket: kattintson egy darabra, húzzon át többen, vagy a Shift+kattintás meghosszabbít |
| `TRIMEXTENDMODE` |  | Hogyan indul a TRIM és az EXTEND: 1 Gyors (minden objektum vágóél vagy határ), 0 Standard (először válassza ki az éleket) |
| `TTR` |  | Kör, amely két objektumot érint, az Ön megadott sugárral (ugyanaz, mint a CIRCLE T) |
| `TURNLEFT` |  | A nézet elforgatása 90°-kal balra (az óramutató járásával ellentétes irányban): UCS Z -90, és a nézet követi. A rajzban semmi nem mozdul. |
| `TURNRIGHT` |  | A nézet elforgatása 90°-kal jobbra (az óramutató járásával egyező irányban): UCS Z 90, és a nézet követi. A rajzban semmi nem mozdul. |
| `TURNWORLD` |  | Vissza a világhoz: UCS Világ, és a nézet ismét vízszintes. |
| `TXT2MTXT` | `T2M` | Egysoros szövegek egyetlen bekezdésszöveggé egyesítése, fentről lefelé. |
| `UCS` |  | Saját koordinátarendszer: egy origó és egy X tengely (origó, Z szög, 3pont, OBject, Előző, Világ, NAmed). A beírt pontok, az ortho, a polárkövetés, a rács és az új szöveg követi; a nézet úgy fordul, hogy X tengelye vízszintes legyen. A rajzban semmi nem mozdul. |
| `UNDO` | `U` | Az utolsó parancs visszavonása |
| `UNGROUP` |  | UNGROUP: csoportok szétbontása. Jelöljön ki csoportbeli objektumokat, vagy adjon egy Nevet. Az objektumok a rajzban maradnak. |
| `UNION` | `UNI` | Testek egyesítése eggyé (3D), vagy 2D tartományok egy tartománnyá |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Az ISOLATEOBJECTS vagy HIDEOBJECTS által elrejtett minden objektum újbóli megjelenítése. |
| `UNITS` | `UN`, `DDUNITS` | Hogyan íródnak és gépelhetők be a hosszak: tizedes, láb és hüvelyk, törtek (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | A mezők újraszámítása, és annak eldöntése, mikor frissüljenek maguktól |
| `USDOUT` |  | A 3D modell exportálása USD formátumban (.usda szöveg, .usdc bináris vagy egy .usdz csomag) |
| `VIEW` | `-VIEW`, `V` | Szabványos 3D-nézetek, perspektivikus vagy párhuzamos (3D) |
| `VIEWBASE` | `FLATSHOT` | Lapos 2D-nézet elhelyezése a 3D testekről (elölnézet, felülnézet, oldalnézet vagy izometrikus, a takart vonalak szaggatva) egy lapon vagy a modellben |
| `VIEWLABEL` | `VL` | Nézetcím egy lapon, amely megmutatja nézetablakának nézetnevét, és vele együtt változik. |
| `VOICE` |  | Hangparancsok be- vagy kikapcsolása. Ezen a számítógépen ismerik fel őket. |
| `VPCLIP` |  | Lapnézetablak levágása egy zárt objektumra vagy egy rajzolt sokszögre; a Delete újra téglalappá teszi |
| `VPLAYER` |  | Rétegek befagyasztása vagy feloldása csak néhány nézetablakban (Befagyasztás, Feloldás, Visszaállítás), és annak kiválasztása, mely rétegek legyenek kezdetben befagyasztva az új nézetablakokban (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | A rajzterület felosztása panelekre, mindegyiknek saját nézetével (lapon: nézetablak, mint az MVIEW) |
| `VPVIEW` |  | Megadja, mit mutat egy nézetablak: egy ablak kijelölése a modellen |
| `VSCURRENT` | `VS`, `SHADEMODE` | A 3D nézet vizuális stílusa: árnyalt, élek, takart vonal, drótváz, röntgen |
| `WALL` | `WA` | 2D falak rajzolása polivonalként. Összekapcsolódnak, és ajtókat és ablakokat hordoznak. |
| `WALLARC` | `WARC` | Falív rajzolása. A tervrajzi falak egyenesek, ezért az ív rövid, egyenes falakként rajzolódik (egyenként 15 fok), amelyek összekapcsolódnak. |
| `WALLDELSEG` |  | Egy falrész törlése két pont között. A megmaradó rész egy vagy két falként marad. |
| `WALLDIM` |  | Új érték beírása egy méretezéshez: a távoli végén lévő fal a saját magához képest derékszögben mozdul, az első végén lévő fal megáll, és a hozzá csatlakozó falak követik. |
| `WALLDISJOIN` |  | Válasszon ki egy falat a vége közelében, hogy azon a végén tiltsa a csatlakozást: a vég derékszögben van rajzolva, és semmi nem követi. Újra kiválasztva engedélyezi. |
| `WALLGRID` |  | Egy falat egy rácsvonalhoz zárni: a vonal mentén, vagy egy végét rajta tartva. A vonalat a GRIDMOVE-val mozgatva a fal követi. |
| `WALLHOLD` |  | Igazítás és zárás: egy fal megtartja helyét egy másikhoz képest (annak vonalán, vagy a jelenlegi távolságában). Ha az egyik mozog, a másik követi. |
| `WALLHOLDDIM` |  | Két párhuzamos fal közötti távolság zárása. Ha az egyik mozog, a másik követi, hogy megtartsa. |
| `WALLHOLDS` |  | A falak zárainak listázása. |
| `WALLJOINS` |  | Egy régebbi rajz minden falának azonosító adása, és a köztük lévő csatlakozások tárolása. Ez az első módosításkor is megtörténik. |
| `WALLJOINSTYLE` |  | Kattintson egy sarokra, ahol két fal véghez végben találkozik, hogy megváltoztassa a rajzolását: ferdevágás, tompa, derékszögű lezárás. A T megváltoztatja, melyik fal megy át. |
| `WALLOFFSET` | `WO` | Fal eltolása derékszögben önmagához egy távolsággal (a hozzá csatlakozó falak követik), vagy másolat készítése ebben a távolságban. |
| `WALLPICK` |  | Falak készítése egy vonalon vagy polivonalon a rajzban, a hozzá csatlakozó vonalakkal, ha Igent mond. |
| `WALLPOLY` | `WP` | Falak rajzolása egy szabályos sokszög köré, 3 és 64 oldal között, a POLYGON-hoz hasonlóan. |
| `WALLRECT` | `WR` | Négy összekapcsolt fal rajzolása két átellenes sarokból, mint a RECTANG. |
| `WALLREJOIN` |  | Egy fal két részének újra egy falrá tétele. Az első megtartja helyét a rajzban. |
| `WALLROT` |  | Négy összekapcsolt fal rajzolása egy tetszőleges szögben elforgatott téglalapként: az első oldal, majd hogy milyen messzire megy ki. |
| `WALLSPLIT` | `WS` | Fal kettéosztása egy pontnál, vagy ahol egy másik fal keresztezi. A részek összekapcsolva maradnak, hacsak nem kér rést vagy szabad végeket. Az ajtók és ablakok a részükkel mennek. |
| `WALLSPLITGAP` |  | Fal felosztása résen hagyva: írja be a rést, válassza ki a falat, majd a pontot. A részek szabad véget tartanak, és újra összekapcsolhatók. |
| `WALLSTRETCH` |  | Nyújtás ablakkal: a benne lévő falvégek mozognak, a teljesen benne lévő falak egészben mozognak, és az oldalukba ütköző falak velük csúsznak. |
| `WALLTAN` |  | Fal folytatása egy ívvel, amely a fal mentén elhagyja azt (rövid egyenes falakként rajzolva). |
| `WALLTRACE` |  | Falak készítése a kattintott pont körüli, vonalakból és falakból álló legkisebb zárt terület körül. |
| `WALLUNHOLD` |  | A zárak levétele egy falról (és a hozzá kötött többi fal zárai). |
| `WBLOCK` | `W`, `-WBLOCK` | Blokk, néhány objektum vagy az egész rajz írása új DWG vagy DXF fájlba (W) |
| `WEDGE` | `WE` | Ék: két sarok és egy magasság; az első sarokból lefelé lejt (3D) |
| `WHEREAMI` | `WHERE` | Megmondja, hol van a kurzor. |
| `WHOHAS` |  | Megmondja, ki nyitotta meg a rajzot. A CadCraft Studio minden megnyitott rajz mellé egy kis zárófájlt tesz (Terv.dwg.cclock: ki, mióta, melyik verzió), és bezáráskor eltávolítja. Beállítások: Aktuális (a megnyitott rajz), Fájl (válasszon egyet), Mappa (minden olyan rajz a mappában, amely valahol nyitva van; ez azt is lehetővé teszi a Studiónak, hogy zárófájlokat tartson abban a mappában), Útvonal (írjon be egyet), Név (amelyet mások látnak). Öt percig nem frissített zár elavultnak számít. Böngészőben nem érhető el. |
| `WINDOW` | `WN` | Ablak elhelyezése egy falban. |
| `XATTACH` | `XA` | Másik DWG vagy DXF csatolása ehhez a rajzhoz, csak olvashatóan (az XREF listázza és újratölti őket) |
| `XCLIP` | `XC` | Blokkhivatkozások és összekapcsolt rajzok levágása egy téglalapra vagy sokszögre, vagy a levágás eltávolítása. |
| `XLINE` | `XL` | Szerkesztővonal, mindkét irányban végtelen: két ponton át, vízszintes, függőleges, szögben, szögfelezőként, vagy egy vonaltól eltolva. |
| `XREF` | `XR`, `-XREF` | Összekapcsolt rajzok (külső hivatkozások): listázás, csatolás, újratöltés, beágyazás, leválasztás |
| `ZOOM` | `Z` | Kiterjedés, vagy egy ablak |

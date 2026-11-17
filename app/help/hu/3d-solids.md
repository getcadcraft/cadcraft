---
title: Modellezés 3D-ben
summary: Nézze meg a rajzot 3D-ben a 3D lapon, és készítsen belőle egyszerű testeket: kihúzással (lejtéssel vagy pálya mentén), forgatással, lapok felhúzásával és lenyomásával, dobozokkal, hengerekkel és ékekkel; egyesítse, vonja ki és metssze őket, majd mozgassa, másolja, forgassa és törölje őket, és helyezzen el belőlük lapos 2D nézeteket egy rajzlapon.
keywords: 3d, háromdimenziós, test, testek, 3dsolid, tartomány, body, acis, sat, sab, más programok testei, 3D rajz megnyitása, extrude, ext, revolve, rev, sweep, lejtés, pálya, presspull, nyomás húzás, toló húzás, doboz, henger, cyl, ék, 3dorbit, körbeforgatás, nézet, vscurrent, vizuális stílus, árnyékolt, rejtett vonal, drótváz, röntgen, xray, iso, perspektíva, párhuzamos, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, nézetkocka, egyesítés, uni, kivonás, su, metszet, in, logikai művelet, testek összevonása, viewbase, flatshot, lapos nézet, 2D nézet, rajznézet, elölnézet, felülnézet, oldalnézet, rejtett vonalak
from: 13060e71
---

## Amit létrehoz

Egy 1000 × 600-as szobaalaprajzot 400 magas tömbbé húz ki, egy lapot felhúz, és mellé egy hengert helyez el — majd a modellt a rajzzal együtt menti, és 3D-s megjelenítőhöz vagy nyomtatóhoz exportálja.

A {{ui:3D}} lap a rajz alatt, a {{ui:Modell}} lap mellett található. Itt a modelltér rajza a talajon fekve jelenik meg a rétegek színeivel (a kikapcsolt vagy befagyasztott rétegek rejtve maradnak), valamint a létrehozott testek. Az első megnyitáskor a 3D nézet betöltődik; ezt követően a váltás azonnal történik.

## Alak kihúzása

1. A {{ui:Modell}} lapon írja be: `REC`, majd nyomja meg az Entert. Írja be: `0,0`, majd nyomja meg az Entert, írja be: `@1000,600`, majd nyomja meg az Entert.
2. Kattintson a {{ui:3D}} lapra. Az eszköztáron a rajzcsoportok helyett a {{ui:3D}} csoport jelenik meg.
3. Kattintson a {{ui:Kihúzás}} gombra (vagy írja be: {{cmd:EXTRUDE}}, `EXT`). Kattintson a téglalap belsejébe, majd nyomja meg az Entert.
4. Írja be: `400`, majd nyomja meg az Entert. Az előzmények ezt írják: „1 test kihúzva, 400 magas”, a térfogatával együtt.

Lezárt polivonalak (ívekkel együtt), téglalapok, sokszögek, körök és ellipszisek húzhatók ki; a vonalak és a nyitott polivonalak nem, és az előzmények megmondják, miért. Kihúzás előtt az alakzatokat a {{ui:Modell}} lapon is kijelölheti, és ott írhatja be: `EXTRUDE`. A magasság begépelése helyett rá is kattinthat: a körvonal követi a kurzort fel-le. A negatív magasság lefelé visz. Írja be a `D` betűt a magasság kérdésénél, ha a kihúzás után törölni szeretné a 2D alakzatokat (a `D` újbóli megadása megtartja őket).

A magasság kérdésénél a `T` (Lejtésszög) egy fokban megadott szöget kér: az oldalak ennyivel befelé dőlnek, így a felső lap kisebb lesz (negatív szög esetén nagyobb). Ha a szög túl meredek az alakzathoz, a parancs nem fogadja el. A `P` (Pálya) ehelyett az alakzatokat egy pálya mentén húzza végig (lásd lent).

## Forgatás és végigvezetés

- {{cmd:REVOLVE}} (`REV`, vagy {{ui:Továbbiak}} › {{ui:Forgatás tengely körül}}): jelöljön ki zárt alakzatokat, nyomja meg az Entert, majd kattintson a tengely két végpontjára (vagy írja be: `X` vagy `Y` a rajz 0,0 pontján átmenő tengelyhez), és írjon be egy szöget, vagy nyomja meg az Entert a teljes körhöz. Az alakzat a tengely körül fordul, és kiemelkedik a talajból: rajzoljon egy váza félprofilját egy vonal mellé, majd forgassa el a vonal körül. Az alakzat érintheti a tengelyt, de nem metszheti át. Egy teljes fordulat 48 lépésből áll.
- {{cmd:SWEEP}} (vagy {{ui:Továbbiak}} › {{ui:Végigvezetés pályán}}, illetve a `P` az EXTRUDE magasság-kérdésénél): jelöljön ki zárt alakzatokat (a profilt), nyomja meg az Entert, majd kattintson a pályára: egy vonal, polivonal, ív, kör vagy ellipszis. A profil a pálya keresztirányában áll fel, a középpontja a pályán van, és végigfut rajta; a sarkok gérvágással csatlakoznak, zárt pálya pedig gyűrűt hoz létre. Egy kis téglalap egy szoba körvonala mentén végigvezetve lábazatot, egy kör egy polivonal mentén végigvezetve pedig csövet ad.

## Lap nyomása és húzása

1. Kattintson a {{ui:Nyomás/húzás}} gombra (vagy írja be: {{cmd:PRESSPULL}}).
2. Kattintson a tömb felső lapjára.
3. Írja be: `100`, majd nyomja meg az Entert, vagy mozgassa a kurzort, és kattintson. A tömb 500 magas lesz.

## Dobozok, hengerek és ékek

- {{cmd:BOX}}: kattintson, vagy írjon be két sarkot, majd egy magasságot.
- {{cmd:CYLINDER}} (`CYL`): a középpont, a sugár, majd a magasság. A hengerek és a kihúzott körök 48 oldalúak, simán árnyékolva.
- {{cmd:WEDGE}} (`WE`): két sarok és egy magasság. Az első sarkánál teljes magasságú, a másik sarkánál pedig nulláig lejt.

A 3D lapon a kattintás a kurzor alatti lapra vagy élre kerül, egyébként a talajra, így egy doboz másik testen is állhat.

## Testek mozgatása, másolása, forgatása és törlése

A 3D lapon a kattintás egy testet jelöl ki; húzzon balról jobbra ablakhoz, jobbról balra pedig kereszteződő ablakhoz. Ezután:

- {{cmd:MOVE}}: kattintson az alappontra és az új helyre, vagy írja be: `<100,0,0>` (vagy `@100,0`) az X, Y és Z szerinti távolsághoz.
- {{cmd:COPY}}: ugyanaz, de az eredeti megmarad.
- {{cmd:ROTATE}}: írjon be egy szöget (a kijelölés közepe körül, Z tengely körül fordul), vagy kattintson a középpontra, a kezdőpontra, és adja meg a szöget.
- {{cmd:ERASE}} vagy {{key:Delete}}.

## Testek egyesítése, kivonása és metszete

Nyissa meg a {{ui:Továbbiak}} gombot a 3D eszköztáron, vagy írja be a parancsot:

- {{cmd:UNION}} (`UNI`): jelölje ki a testeket, nyomja meg az Entert: egyetlen testté válnak.
- {{cmd:SUBTRACT}} (`SU`): jelölje ki a megtartandó testeket, nyomja meg az Entert, majd jelölje ki az elvennivalókat, és nyomja meg újra az Entert. Átfúrt tömb: rajzoljon rajta át egy hengert, majd vonja ki a hengert.
- {{cmd:INTERSECT}} (`IN`): jelölje ki a testeket, nyomja meg az Entert: csak az marad meg, ami mindegyiküknek közös.

Az előzmények kiírják az eredmény térfogatát. Mindegyik egy visszavonási lépés. Az első futtatáskor betöltődik a 3D logikai műveletek motorja (kb. 0,5 MB; benne van a {{ui:Mentés offline használatra}} csomagban). Csak zárt testek egyesíthetők: a nyitott élekkel rendelkező test (más program laza 3D lapjaiból) ezzel az indokkal kerül elutasításra. Az eredmény egy test; a görbe lapok sík lapocskákból állnak, ahogy a henger is.

Kattintson duplán egy testre, ha külön szeretné szerkeszteni a lapjait és éleit; az {{key:Esc}} ismét bezárja. Minden 3D-s módosítás egy visszavonási lépés ugyanabban az előzménylistában, mint a rajz: a {{key:Mod+Z}} visszavonja az utolsó műveletet bármelyik lapon.

## Lapos nézetek egy rajzlapon

1. Nyisson meg egy rajzlap-lapot (vagy maradjon a {{ui:Modell}} lapon), majd írja be: {{cmd:VIEWBASE}} (vagy `FLATSHOT`).
2. Válassza ki a nézetet: az Enter az elölnézetet adja, vagy a `T` (felülnézet), `R` (jobb oldali nézet), `L` (bal oldali nézet), `BA` (hátulnézet), `BO` (alulnézet), `I` (izometrikus).
3. Az Enter a rejtett vonalakat szaggatottan mutatja; a `H` kihagyja őket.
4. Az Enter a CadCraft által javasolt léptéket veszi: rajzlapon a legnagyobb szabványos lépték (például 1:20), amelynél a nézet a papír felénél kisebb területre fér. Vagy írjon be egyet: `1:50`, `2:1`.
5. Kattintson, vagy írja be, hová kerüljön a nézet középpontja.

A nézet egy blokkhivatkozás, `VIEW-FRONT-1` és így tovább: a látható élek a VIEW-VISIBLE rétegen (0,5 mm), a rejtettek a VIEW-HIDDEN rétegen (szaggatott, 0,25 mm) találhatók. Mozgatható, méretezhető és plottolható, mint bármely más rajzrész. A nézet az elkészítés pillanatában a testek képe: módosításuk után törölje a nézetet, és futtassa újra a {{cmd:VIEWBASE}} parancsot. További nézetekhez nézetenként egyszer futtassa.

## Körülnézés

Görgővel húzva körbeforgathatja, a {{key:Shift}} + görgő húzásával vagy a jobb gombbal eltolhatja, a görgővel pedig a kurzornál nagyíthat. Érintőpadon két ujjal forgathat, csippentéssel nagyíthat. Húzás nélküli jobb gombos kattintás az Enter, mint a többi lapon. A `3DORBIT` parancs a bal gombbal is forgathatóvá teszi a nézetet, amíg meg nem nyomja az Entert vagy az {{key:Esc}}-et.

- {{ui:Nézetek}} (vagy {{cmd:VIEW}}): Izometrikus, Felülnézet, Alul, Elöl, Hátul, Bal, Jobb, Perspektíva vagy Párhuzamos, valamint Nagyítás a kiterjedésre.
- {{ui:Stílus}} (vagy {{cmd:VSCURRENT}}, `VS`): Árnyékolt, Élekkel árnyékolt, Rejtett vonal, Drótváz vagy Röntgen.

A kattintott pontok a testekre (sarkok, élek, lapok) és a talajon lévő 2D rajzra illeszkednek: a vonalak és ívek végpontjaira és felezőpontjaira, valamint mentén lévő pontokra. A 2D vonalakat a 3D lapon soha nem lehet kijelölni. Ha egy parancs 2D objektumokat kér (EXTRUDE, REVOLVE, SWEEP), a kattintás egyet kiválaszt; a balról jobbra húzott ablak a teljesen benne lévőket, a jobbról balra húzott pedig a metszetükben lévőket veszi, ahogy a {{ui:Modell}} lapon.

A nézetkocka a 3D lap jobb felső sarkában található: kattintson egy lapjára, élére vagy sarkára, hogy onnan nézzen, húzza a forgatáshoz, a házikó gomb pedig visszaviszi az izometrikus nézetet. Ez a {{ui:Automatikus}}, a [CadCraft beállításai](topic:settings) között lévő {{ui:Sarokjelző}} kezdő értéke. Ha a {{ui:Nézetkocka}} értékre van állítva, a {{ui:Modell}} lapon is megjelenik egy kocka, felülről nézve; bármely más oldalára kattintva a 3D lap nyílik meg, onnan nézve. A {{ui:Tengelyikon}} beállításnál mindkét lapon a tengelyjelző látszik.

## Más programok testei

Egy másik programból származó rajz tartalmazhat 3D testeket, tartományokat és testeket (3DSOLID, REGION, BODY: a másik program ACIS-adatként tárolja az alakjukat). A CadCraft a modelltérben lévőket a 3D lapon jeleníti meg, a rétegük színével és saját éleikkel, a lap első megnyitásakor; a parancssor ezután kiírja, hányat rajzolt meg.

- Úgy jelennek meg, ahogy vannak: nem jelölhetők ki, nem mozgathatók és nem módosíthatók. A kikapcsolt vagy befagyasztott rétegek elrejtik őket.
- DWG-ként mentve minden változatlanul visszakerül, bármely DWG-verzióban, így a másik program újra megkapja őket. A DXF-fájlok nem őrzik meg: a CadCraft csak DWG-be írja, és DXF-ként mentéskor jelzi ezt.
- Megrajzolva: sík lapok, valamint hengerek, kúpok, gömbök, tóruszok és egyszerű spline-felületek lapjai, egyenes, kerek és spline élekkel. Más típusú felület lapját, vagy azt, amelyet a CadCraft nem tud kiterített alakban megrajzolni, nem találgatja: kimarad, és fel van sorolva, például: „Még nem rajzolható (3D testek): 2 lap spline-felületen (sweepsur), ilyen típusú felület még nincs megrajzolva.”
- A blokkokon belüli testek még nem jelennek meg; az {{ui:Erről a fájlról}} nézet összeszámolja őket.

A görbe lapok kb. 7,5°-onként elhelyezett kis síklapokként jelennek meg, így közelről a görbe test kissé facettás.

## Mentés és exportálás

A mentés megőrzi a 3D modellt DWG- és DXF-formátumban. Minden lap 3D lapként, a `CC-3D` rétegen kerül be, így más programok is megjelenítik a testeket; a CadCraft saját, pontos másolatát is elmenti a fájlba, amelyet a rajz újbóli megnyitásakor visszaolvas, a 3D nézet pedig a maga állapotában (kamera, vetítés és vizuális stílus) jelenik meg. A más programok által készített 3D lapok lazán, egy csoportba fogva érkeznek a 3D lapra. Egy blokkon belüli 3D lap annyiszor jelenik meg, ahány hivatkozás van rá a modellben, a hivatkozás helyzetével és elforgatásával; magában a blokkban és a rajzlapon a 3D lap lapos alakban, a körvonalával jelenik meg.

A 3D csoport {{ui:Exportálás}} gombja csak a testeket menti: GLB megjelenítőkhöz és webre ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) vagy STL 3D-nyomtatáshoz, milliméterben ({{cmd:STLOUT}}). Az {{cmd:EXPORT3D}} parancs megkérdezi, melyiket.

:::note
A 3D modell valós méretű. A mértékegység nélküli rajz milliméternek számít, így az `1000` egy méter. Ha később megváltoztatja a rajz mértékegységeit (Tulajdonságok, kijelölés nélkül), a testek együtt skálázódnak, hogy a rajzon maradjanak, és az előzmények ezt jelzik. Egy {{key:Mod+Z}} egyszerre visszavonja a mértékegység-váltást és a skálázást.
:::

---
title: Újdonságok a 0.9 verzióban (korábbi)
summary: A határokat követő sraffozások, rétegcsoportok, egymásra épülő szintek, 2D okos falak ajtókkal és ablakokkal, szövegstílusok és formázott szövegszerkesztő, lebegő parancssor, rácsfogás, tíz módja az ívrajzolásnak és a Dokumentumok panel.
keywords: újdonságok 0.9, korábbi kiadás, újdonságok, 0.9, kiadási megjegyzések, változásnapló, sraffozás, asszociatív sraffozás, hatchedit, pat fájl, mintafájl, rétegcsoportok, laygroup, szintek, egymásra épülő szintek, floorlayers, okos falak, fal, ajtó, ablak, falfunkciók, szövegstílus, style, mtext szerkesztő, bekezdésszöveg, formázás, lebegő parancssor, parancssor, felső terület, tömör, rácsfogás, grid snap, f9, ív, dokumentumok panel, kijelentkezés, uk acélméretek, draw.io, thai szöveg, dxf r12, újdonságok, changelog, változások, 0.8, 0.8.1, verzió, új funkciók, automatikus kiegészítés, szellem, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, címkék, redline, összevonás, git, fossil, access, vázlatolás látás nélkül, képernyőolvasó, korlátok, szögmérések, aunits, shx, diagram, ole, előzmények, összehasonlítás, szavakban, tulajdonságok, láb és hüvelyk, nyújtás, nyelvek, beviteli eszközök, problémák, live, asszisztensek
from: 3451e64c
---

Ez azt mutatja, mi változott a CadCraft 0.9 verziójában a 0.8.1-hez képest. A CadCraft a CadCraft Studio 0.9 és nyolc alkalmazása 2D- és 3D-rajzoló alkalmazása. A 0.9 befejezi a tervrajzi rajzolást, szövegstílusokat és valódi szövegszerkesztőt ad, és több helyet ad a képernyőn.

## Új

### Tervrajzi rajzolás

- **Határát követő sraffozások.** A {{cmd:HATCH}} ahhoz kapcsolódik, ami határolja. Ha a határt mozgatja, forgatja vagy méretezi, a sraffozás és a mintája követi; ha alakját módosítja, a sraffozás újraszámítódik. A {{cmd:HATCHEDIT}} (`HE`) utólag módosítja a sraffozást, és létrehozza vagy megszünteti a kapcsolatot. Lásd: [Sraffozás és kitöltött területek](topic:hatch).
- **Sraffozási mintafájlok.** A {{cmd:HATCH}} `Pick internal point` kérdésénél írja be az `F` betűt (mintafájl), és válasszon egy `.pat` fájlt. Csak a szokásos formátumban írt fájlokat próbálták ki.
- **Rétegcsoportok.** A {{ui:Rétegek}} panel {{ui:Eszközök}} menüjében: {{ui:Új csoport}}, {{ui:Kész csoportok hozzáadása}}, {{ui:Csoportosítás név szerint}} és {{ui:Réteg keresése}}; vagy írja be a {{cmd:LAYGROUP}} (`LG`) parancsot. Lásd: [Rajz rendezése rétegekkel](topic:layers#group-layers).
- **Egymásra épülő szintek.** A {{cmd:FLOORS}} (`FLR`), vagy a {{ui:Szintek…}} a {{ui:Továbbiak}} menüben a {{ui:Nézet}} csoportban. Egy lapon lévő nézetablak a {{ui:Megjelenített szint}} alatt a Tulajdonságokban egy szintet mutathat. A {{cmd:FLOORLAYERS}} a szinteket rétegekké alakítja, ha a fájlt másnak küldi. Lásd: [Több szint egy rajzban](topic:floors).
- **2D okos falak, ajtók és ablakok.** A {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) és {{cmd:DELOPENING}}. A sarkokat, T-csatlakozásokat és keresztezéseket a program számolja ki. A falak megőrzik a csatlakozásaik nyilvántartását, a Tulajdonságokban pedig megjelenik a Csatlakozás tiltása a kezdőpontnál / a végpontnál, egy Helyvonal és egy szerkeszthető Hossz. Lásd: [2D falak, ajtók és ablakok rajzolása](topic:walls-2d).
- **A fal-eszköz a tervrajzi falakon.** Írja be a {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} és a többi parancsot. Még nincs eszköztár-gombjuk. Lásd: [Falalakzatok, vágások, eltolások és zárak 2D falakhoz](topic:wall-tools-2d).

### Szöveg

- **Szövegstílusok.** A {{cmd:STYLE}} (`ST`), vagy a {{ui:Szövegstílus}} a {{ui:Rajzolás}} eszköztáron: elnevezett stílusok betűtípussal, magassággal, szélességi tényezővel és dőléssel. Lásd: [A szöveg betűtípusának és méretének beállítása szövegstílusokkal](topic:text-styles).
- **Formázott bekezdésszöveg-szerkesztő.** A {{cmd:MTEXT}}, a {{cmd:TEXTEDIT}} vagy a szövegre duplán kattintás olyan dobozt nyit, amelyben betűtípus, méret, félkövér, dőlt, aláhúzott, áthúzott, szín, igazítás, valamint fok-, plusz-mínusz- és átmérőjelek érhetők el, továbbá {{ui:OK}} és {{ui:Mégse}}. Lásd: [Bekezdésszöveg formázása](topic:format-paragraph-text).
- **Diagram draw.io XML-ből.** A {{cmd:DIAGRAM}} (`T2D`) a beillesztett draw.io XML-t is olvassa. Lásd: [Diagram rajzolása szövegből](topic:text-to-diagram).
- **Thai szöveg PDF nyomtatásban.** Korábban kérdőjelekként nyomtatódott.

### Több hely és rajzsegédek

- **Lebegő, vékonyabb parancssor és tömör felső terület.** Húzza a parancssor fogantyúját a lebegtetéshez, húzza a felső szélét kevesebb sorért, az {{key:F2}} megnyitja az előzményeket. A {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Parancssor}} és a felső terület választásai ugyanezek. Lásd: [Beállítások](topic:settings#command-line).
- **Fogás menü.** Jobb kattintás az állapotsor {{ui:Fogás}} gombján, vagy írja be a {{cmd:OSNAP}} parancsot.
- **Rácsfogás.** Az állapotsor {{ui:Rácsfogás}} gombja, vagy az {{key:F9}}: a kiválasztott pontok a legközelebbi rácspontra kerülnek, ha objektumfogás nem vette át a pontot.
- **Ív tízféleképpen, és folytatás.** Az {{ui:Ív}} a {{ui:Rajzolás}} eszköztáron vagy a {{cmd:ARC}}: három pontos, a Kezdő/Középső/Vég család és a Középső/Kezdő/Vég család, valamint a Folytatás (az {{key:Enter}} a kezdőpontnál) az utolsó vonalból, ívből vagy polivonalból.
- **A Dokumentumok panel.** A {{cmd:DOCUMENTS}} (`DOCS`) vagy a {{ui:Dokumentumok…}} a {{ui:Továbbiak}} menüben a {{ui:Nézet}} csoportban: felülvizsgálat, állapot és kijelölt-kiadás minden rajzhoz egy projektmappában. Középre helyezett párbeszédpanelként nyílik. Lásd: [Dokumentumok](topic:documents).

### Fájlok

- **Egyesült királyságbeli acélméretek.** 976 szelvény a Standard panelen, úgy írva, ahogy a rajzokon szerepel (például `305x165x40 UB`).
- **Dél-afrikai csomagok** (rajzolási gyakorlat és építési előírások) az Építési előírások bővítmény csomagjaiként. A számok nincsenek ellenőrizve.
- **Bővítmények a CadCraftban,** igény szerint hozzáadva, alapértelmezetten kikapcsolva: belsőépítészeti világításterv, chiptervezés (HDL-ből elrendezésig), útválasztó-faragás, áramköri szimuláció, görgős láncos fogaskerekek és az Építési előírások országcsomagjai.

## Javítva

- Sraffozás mozgatása, forgatása vagy méretezése után a minta hátramaradt.
- A {{cmd:GRIDMOVE}} egy olyan teljes tervrajzi falat is vitt, amely csak a rácsvonalon kezdődik. Most a falat a végei alapján ítéli meg.
- A rács a rajzhatárokon belül látszott akkor is, ha a határok ki voltak kapcsolva.
- Az oldalsó panel blokklistája görgethető, és az a név, amely nem blokk, felsorolja a vele kezdődő blokkokat („Ezt értette?”).
- A DXF R12 fájlok, amelyeket az AutoCAD visszautasított („Unknown group 1001 for table”), most megnyílnak.
- Nagyon nagy fájlok (kb. 70 000 elemtől felfelé) „Maximum call stack size exceeded” hibával nem nyíltak meg.
- Az AutoCAD 2018-tól kezdődő, magas karbantartási verziójú DWG fájlok „bad BITLONG code 11” hibával nem nyíltak meg.
- A bekezdésszöveg-dobozban a kijelölt rész új méretének beírása megtartja a kijelölést.

## Minden alkalmazásban

Eszköztippek minden vezérlőn, ahol van súgó, egy zárható indítótipp, lapsávok, amelyek görgethetők, ha nem férnek el, és a böngésző lapjának címe követi a megnyitott rajzot (`<drawing> - CadCraft | CadCraft`). A {{ui:Beállítások}} › {{ui:Elrendezés}} most kétsoros választásokat tartalmazó legördülő lista. A {{ui:Beállítások}} nyelvlistája hosszabb, mint a 0.8-ban. Az élő együttes szerkesztés, a Live könyvtárgyűjtemények és a súly- és hőmérsékletmértékegységek a Studio-jegyzetekben vannak leírva.

## Őszinte korlátok

- A bekezdésszövegben nincs felsorolás vagy számozott lista, tabulátor-vonalzó vagy sorkizárás. A nyomtatott PDF-ek szövegét Helvetica betűtípussal szedik.
- A tervrajzi falak egyenesek, ezért az ívet rövid falakként rajzolja. A fal-eszköz közösségi kézi ellenőrzése még hátravan.
- A rétegcsoportok nem az AutoCAD saját formátumában íródnak, így az AutoCAD lapos listát mutat. Más programok az összes szintet együtt mutatják, hacsak nem futtatja a {{cmd:FLOORLAYERS}} parancsot.
- A Dokumentumok panelt két ember nem próbálta ki valódi megosztott mappán. Az útválasztó-faragás egyetlen valódi gépen sem futott. A világítási becslést fényútkövetéssel ellenőrizték, nem másik programmal. A mérnöki bővítmények ellenőrző segédeszközök, nem egy mérnöki felülvizsgálat helyettesítői.
- Az angoltól eltérő nyelvek gépi piszkozatok, és néhány új szó csak angolul van.

## Korábbi: 0.8 és 0.8.1

Ez azt mutatja, mi változott a CadCraft 0.8 és 0.8.1 verziójában a 0.7-hez képest. A 0.8 (2026. november 1.) olyan rajzsegédeket ad, amelyek a saját rajzából dolgoznak, szabályok szerint a számítógépén, modell nélkül; a 0.8.1 (2026. november 2.) a kiadása után jelentett hibákat javítja.

### Új

**Rajz, amely befejezi a gondolatot**

- **Szellem mutatja, mi következik.** Ha nem fut parancs, egy szürke szaggatott szellem mutatja, mit mondanak a rajz saját minták a következőről: a következő borda azonos távolsággal, a lépcső következő fokozata, a szoba hiányzó fala. A {{key:Tab}} billentyűvel egy visszavonási lépésként rajzolja meg, az {{key:Esc}} billentyűvel elveti. Csak a legújabb objektumokat vizsgálja, így nagy rajzon is gyors marad. Kikapcsolható a {{ui:Beállítások}} › {{ui:CadCraft}} menüben vagy az {{cmd:AUTOCOMPLETE}} `Off` paranccsal.
- **A következő pont, miközben vonalat rajzol.** A {{cmd:LINE}} vagy {{cmd:PLINE}} közben a szellem a következő pont: a lépcső következő lépése, a téglalap negyedik sarka, vagy a pont, amely bezárja. Vigye a kurzort a közelébe, és nyomja meg a {{key:Tab}} billentyűt, mintha oda kattintott volna.
- **A tollas vázlatok pontos geometriává válnak.** {{cmd:SKETCHFIX}}: durva vonásokat rajzoljon tollal, egérrel vagy ujjal, és mindegyikből tiszta vonal, kör, ív, téglalap vagy polivonal lesz, a meglévő rajzhoz igazítva. Lásd: [Rajzolás tollal és pontos geometria](topic:sketch-with-a-pen).
- **Egy vázlatfotóból rajz lesz.** A {{cmd:PHOTOSKETCH}} (`PSK`) megtalálja a papírt egy fotón, kiegyenesíti a perspektívát, alkalmazza az Ön által megadott papírméretet és léptéket, és minden tollszínhez egy réteget rajzol a tollvonalakból. A feliratokat nem rajzolja át.
- **Méretezés szabályok szerint.** Az {{cmd:AUTODIM}} (`ADIM`) az Ön által választott oldalak mentén méretláncokat készít, egy teljes méretet, nyílásszélességeket, lyukátmérőket és, a `Grid` opcióval, rácstávolságokat. Soha nem ismétel meg egy már meglévő méretezést.
- **Rácsvonal mozgatása, és a készlet követi.** A {{cmd:GRIDMOVE}} (`GM`): a rácsvonalon végződő falak vele nyúlnak, a mellette futó falak, oszlopok, buborékja és címkéje mozognak, a rácson lévő méretezések az új távolságot mérik. Egy visszavonási lépés.

**Lapok, részletek és címkék**

- **Lapok, amelyek maguktól elrendezik magukat.** Az {{cmd:AUTOSHEET}} a megnevezett nézeteit (vagy a modell különálló részeit) veszi, papírméretet és szabványos léptéket választ, és a nézeteket új lapokon, rajzfejjel és név- és léptékfelirattal helyezi el. Minden szerkeszthető marad. Lásd: [Lapok elrendezése az Ön helyett](topic:lay-out-sheets-for-me).
- **Az Ön cégének részletei, felajánlva rajzolás közben.** A {{cmd:DETAILS}} (`DET`) megőrzi a saját részletblokkjait. Amikor a kijelölése egyezik valamelyikkel a rétegei, blokknevei és megjegyzései szavai alapján, az állapotsor ezt jelzi; válassza ki és helyezze el. A {{cmd:DETAILS}} › Megosztás a listáját a Dokumentumok mappába teszi, és behozza azt, amit a csapata hozzáadott. A Beállításokban kikapcsolhatók a felajánlások.
- **Címkék blokkokon.** A {{cmd:TAGS}} címkét definiál (fajtáját, megengedett értékeit, azokat a blokkokat, amelyekre vonatkozik), beállítja a kijelölt blokkhivatkozásokra, és táblázatként listázza őket, amelyet CSV-ként menthet. A definíciók a DWG-ben maradnak meg. Lásd: [Címkék](topic:tags).
- **Rajzhatárok.** A {{cmd:LIMITS}} téglalapot állít be a rajznak: a rácsot kitölti, és a zoom mindent (All) megmutat. A határok körvonalként jelennek meg, és DWG és DXF formátumban a papírhatárokkal együtt mentődnek. Lásd: [Rajzhatárok beállítása](topic:drawing-limits).

**Együttműködés más emberekkel és más programokkal**

- **Jelölésből felülvizsgálat.** A {{cmd:REDLINE}} beolvassa a MarkupCraft által írt csomagot, és minden változást felsorol. Mindegyiket elfogadhatja vagy elutasíthatja megjegyzéssel; az elfogadottak revíziófelhőt és revíziónaplót kapnak egy visszavonási lépésben, és elmenti a válaszfájlt, amely lezárja a jelöléseket a MarkupCraftban. Lásd: [Jelölésből felülvizsgálat](topic:redline-to-revision).
- **Rajzok, amelyeket a git és a Fossil össze tud vonni.** Ha a {{ui:Beállítások}} › {{ui:CadCraft}} menüben be van kapcsolva az {{ui:Összevonásbarát fájlok}}, minden objektum kap egy kulcsot, amely soha nem változik (a fájlok kb. 10 százalékkal nagyobbak). A `cadcraft merge base ours theirs` két ember egy DWG vagy DXF szerkesztéseit objektumonként olvasztja össze, és csak ott jelez, ahol két ember ugyanazt változtatta meg. Lásd: [Két ember szerkesztéseinek összevonása egy rajzon](topic:merge-drawings).
- **Mi változott, szavakban.** Az Előzményekben az Összehasonlítás egyszerű listát ad: hol változott valami, mekkorák a helyek, mi került hozzá, el, vagy módosult, és a szerkesztett szöveg. Lásd: [Szavakban elmondani, mi változott](topic:changes-in-words).
- **Irányszögek és szögek.** Egy irányt beírhat geodéziai irányszögként, például N45°23'30"E alakban, vagy fokban, percben és másodpercben, bárhol, ahol szöget kérnek; az AUNITS állítja be, hogyan jelennek meg a szögek. Lásd: [Irányszögek és szögek megadása és megjelenítése](topic:bearings-and-angles).
- **Saját SHX betűtípusok.** Adjon a CadCraftnak egy SHX betűtípusokat tartalmazó mappát, és a betűtípusokat megnevező szövegstílusok azokkal rajzolódnak, a képernyőn és a nyomtatásban. Lásd: [Szöveg rajzolása saját SHX betűtípusokkal](topic:shx-fonts).
- **Diagram szövegből.** A {{cmd:DIAGRAM}} Mermaid folyamatábrát, PlantUML komponensdiagramot, D2-t vagy egy honnan-hová listát olvas, és szerkeszthető blokkokat és összekötőket rajzol. Lásd: [Diagram rajzolása szövegből](topic:text-to-diagram).
- **OLE-objektumok DWG-ben.** A {{cmd:OLELIST}} felsorolja a DWG-ben lévő OLE-objektumokat, amelyeket a CadCraft maga nem tud elhelyezni, és a kép egy másolatát oda teszi, ahol megmondja. Lásd: [Képek](topic:pictures#objects-from-other-programs-ole).
- **Számításai a rajzzal maradnak.** A számítólapok és a tervezési indoklások a DWG-ben maradnak az osztálytáblával együtt.

**Vázlatolás látás nélkül**

- Kapcsolja be a {{ui:Vázlatolás látás nélkül}} lehetőséget a {{ui:Beállításokban}} (vagy írja be az {{cmd:ACCESS}} parancsot, és válaszoljon `On`-nal). A CadCraft minden parancsot és eredményt a képernyőolvasón keresztül mond el, leírja a rajzot és azt, ami a kurzor közelében van, lehetővé teszi, hogy a billentyűzettel mozgassa a kurzort és pontokat válasszon, és minden fogásra és fogópontra hangot ad. Ahol a böngésző a számítógépén fel tudja ismerni a beszédet, parancsok kimondhatók. Lásd: [Vázlatolás látás nélkül](topic:draft-without-sight).

**Minden alkalmazásban**

- **Nyelvek.** 54 nyelv; tíz új (litván, lett, bosnyák, marathi, telugu, albán, afrikaans, filippínó, szuahéli, üzbég). Az angolon kívüli nyelvek gépi piszkozatok, amíg egy anyanyelvi beszélő el nem olvassa őket.
- **Beviteli eszközök.** Touchpad, toll, 3D-egér, játékvezérlő és MIDI-vezérlők.
- **Eszköztársorok és a tulajdonságrács.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} alatt Burkolás, 2 sor vagy 1 sor áll rendelkezésre a többi alkalmazásban. A CadCraft a saját beállítását a {{ui:Beállítások}} › {{ui:CadCraft}} alatt tartja (lásd [Eszköztársorok](topic:settings#toolbar-rows)). A közös tulajdonságrács három másik alkalmazásban van, nem a CadCraftban.
- **Problémák, Live és bővítmények.** Egy közös Problémák panel, amely minden alkalmazásban figyelmeztet, a Live nézet a CadCraft Studioban arról, ki hol van (lásd [Munka egy rajzon együtt](topic:work-live)), és egy bővítménylista.
- **Csatlakoztassa az AI-ját.** Egy kapcsolat a CadCraft Studióból mind a nyolc alkalmazáshoz, alkalmazásonként csak olvasási, javaslati vagy szerkesztési szinttel, és egy közérthető napló arról, mit tett az asszisztens. A CadCraftnak nincs saját AI-ja; a Kérdezés minden alkalmazásban az Ön által csatlakoztatott AI-t használja.

### Javítva a 0.8.1-ben

- **A Tulajdonságok 150-et mutatott 12'-6" helyett** láb és hüvelyk rajzokon. Az alkalmazás által olvasott mezők újra megtartják a szövegüket.
- **DWG fájlok, amelyek osztályszakaszát rossz típusként olvasta** (GitHub cadcraft#5) most megfelelően nyílnak meg.
- **A kereszthajszál többé nem látszik a felugró ablakok mögött.**
- **A Studio és a csomagolt kiadások futás közben tudnak nyelvet váltani.** Korábban csak angolul működtek. Még nem tesztelték minden platformon: jelezze, ha a nyelv nem változik.
- **A táblagépek álló helyzetben a vásznat kapják a rács szabad magasságát,** és a lapmód 760 pixeltől vagy kevesebbtől indul.
- **A STRETCH keresztező ablakkal és a LIMITS** a Studio 0.8.0-n jelentve lettek, és a 0.8-as webes verzióban már helyesek voltak; a bejelentő telepítője régebbi volt. A Studio 0.8.1 már tartalmazza őket.

### Még nincs benne ebben a kiadásban

- **A 0.8 és 0.8.1 nincs kódaláírva.** A Windows figyelmeztethet (válassza a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} lehetőséget); Macen jobb kattintással nyissa meg a CadCraft Studiót, és válassza az {{ui:Megnyitás}} lehetőséget. Az áruházi kiadások szüneteltek, az iPad- és iPhone-kiadást a 0.8.1-hez nem építették újra.
- **A tollas vázlatokat és a vázlatfotókat** csak kitalált fotókon és egéren próbálták ki, valódi tollal, érintőképernyővel vagy papírra rajzolt kézi vázlattal még nem.
- **A látás nélküli vázlatolást** automatikus ellenőrzésekkel tesztelték, képernyőolvasóval vagy vak tesztelővel még nem.
- **A részletek megosztását** nem ellenőrizte két ember, és a Team Cloud Plan mappa mint Dokumentumok mappa nincs kész.
- **Az összevonás** a CadCraft DWG és DXF fájljaival működik; a többi alkalmazás fájljaival nincs kész.
- **Visszavonás több ablakban:** a CadCraft minden befejezett lépést jelez, de a Studiónak még nincs egyetlen Visszavonása minden alkalmazásra; minden alkalmazás a saját lépéseit vonja vissza.
- **A DWG OLE-objektumai** megmaradnak, de nem rajzolódnak ki a helyükön.
- **A nyomtatási stílustáblák (CTB fájlok) olvasása** más programoktól készült, de még nincs ellenőrizve másik program fájljával.
- **Csatlakoztassa az AI-ját:** az egykattintásos csatlakozás a Studióban, a hosztolt összekötő böngészős AI-hoz, a saját API-kulcs a Studióban és a közzétett MCP-csomag nincs ebben a kiadásban ígérve.

A korábbi verzióhoz lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).

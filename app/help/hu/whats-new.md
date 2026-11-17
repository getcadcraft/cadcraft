---
title: Újdonságok a 0.9 verzióban
summary: Sraffozások, amelyek követik a határukat, rétegcsoportok, egymásra épülő szintek, 2D-s okos falak ajtókkal és ablakokkal, szövegstílusok és formázott szövegszerkesztő, lebegő parancssor, rácsfogás, tízféle ívrajzolás és a Dokumentumok panel.
keywords: újdonságok, 0.9, kiadási jegyzetek, változásnapló, sraffozás, asszociatív sraffozás, HATCHEDIT, pat-fájl, mintafájl, rétegcsoportok, LAYGROUP, szintek, egymásra épülő szintek, FLOORLAYERS, okos falak, fal, ajtó, ablak, falszerszámok, szövegstílus, stílus, szövegszerkesztő, bekezdésszöveg, formázás, lebegő parancssor, parancssor, felső terület, tömör, rácsfogás, rács, F9, ív, dokumentumok panel, brit acélméretek, draw.io, thai szöveg, DXF R12, változások, 0.8, 0.8.1, verzió, új funkciók, automatikus kiegészítés, szellem, tab, sketchfix, photosketch, autosheet, részletek, gridmove, autodim, címkék, jelölés, revízió, egyesítés, git, fossil, hozzáférés, rajzolás látás nélkül, képernyőolvasó, határok, irányszögek, aunits, shx, diagram, ole, előzmények, összehasonlítás, szavakban, tulajdonságok, láb és hüvelyk, nyújtás, nyelvek, beviteli eszközök, problémák, live, asszisztensek
from: 8b6dea0b
---

Ez a CadCraft 0.8.1-hez képest 0.9-ben változott. A CadCraft a CadCraft Studio 0.9 és nyolc alkalmazásának 2D- és 3D-s rajzolóalkalmazása. A 0.9 befejezi az alaprajzrajzolást, szövegstílusokat és valódi szövegszerkesztőt ad, és több hely jut a képernyőn.

## Új

### Alaprajzrajzolás

- **Sraffozások, amelyek követik a határukat.** A {{cmd:HATCH}} össze van kötve azzal, ami határolja. Ha a határt mozgatja, forgatja vagy léptékezi, a sraffozás és a mintája követi; ha átalakítja, a sraffozás újraszámolódik. A {{cmd:HATCHEDIT}} (`HE`) utólag módosít egy sraffozást, és létrehozza vagy megszünteti az összekötést. Lásd [Sraffozás és kitöltött területek](topic:hatch).
- **Sraffozás-mintafájlok.** A {{cmd:HATCH}} kérdésénél, `Pick internal point`, írja be az `F`-et (Pattern file, mintafájl), és válasszon egy `.pat` fájlt. Csak a szokásos formátumban írt fájlokat próbálták ki.
- **Rétegcsoportok.** A {{ui:Rétegek}} panel {{ui:Eszközök}} menüjében: {{ui:Új csoport}}, {{ui:Kész csoportok hozzáadása}}, {{ui:Csoportosítás név szerint}} és {{ui:Réteg keresése}}; vagy írja be a {{cmd:LAYGROUP}} (`LG`) parancsot. Lásd [Rajz rendezése rétegekkel](topic:layers#group-layers).
- **Egymásra épülő szintek.** A {{cmd:FLOORS}} (`FLR`), vagy a {{ui:Nézet}} csoport {{ui:Továbbiak}} menüjének {{ui:Szintek…}} lehetősége. Egy rajzlap nézetablaka a Tulajdonságokban a {{ui:Megjelenített szint}} beállítással egy szintet mutathat. A {{cmd:FLOORLAYERS}} a szinteket rétegekké alakítja, ha a fájlt másnak küldik. Lásd [Szintek egymásra építése egy rajzban](topic:floors).
- **2D-s okos falak, ajtók és ablakok.** A {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) és {{cmd:DELOPENING}}. A sarkokat, T-csatlakozásokat és keresztezéseket a program kiszámolja. A falak nyilvántartják, hogyan csatlakoznak, a Tulajdonságok pedig megkapja a {{ui:Csatlakozás tiltása a kezdőpontnál}} / {{ui:Csatlakozás tiltása a végpontnál}} beállításokat, a {{ui:Helyzetvonal}} beállítást és a szerkeszthető {{ui:Hossz}} mezőt. Lásd [2D-s falak, ajtók és ablakok rajzolása](topic:walls-2d).
- **Falszerszámok alaprajzi falakhoz.** Írja be a {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} parancsokat és a többit. Még nincsenek eszköztár-gombjaik. Lásd [Falformák, vágások, eltolások és zárak 2D-s falakhoz](topic:wall-tools-2d).

### Szöveg

- **Szövegstílusok.** A {{cmd:STYLE}} (`ST`), vagy a {{ui:Rajzolás}} eszköztáron a {{ui:Szövegstílus}}: elnevezett stílusok betűkészlettel, magassággal, szélességi tényezővel és dőléssel. Lásd [Betűkészlet és méret beállítása szövegstílusokkal](topic:text-styles).
- **Formázott bekezdésszöveg-szerkesztő.** A {{cmd:MTEXT}}, a {{cmd:TEXTEDIT}}, vagy a szövegre duplán kattintva megnyílik egy mező betűkészlettel, mérettel, félkövérrel, dőlttel, aláhúzással, áthúzással, színnel, igazítással, valamint a fok-, plusz-mínusz- és átmérőjelekkel, továbbá {{ui:OK}} és {{ui:Mégse}} gombokkal. Lásd [Bekezdésszöveg formázása](topic:format-paragraph-text).
- **Diagram draw.io XML-ből.** A {{cmd:DIAGRAM}} (`T2D`) a beillesztett draw.io XML-t is beolvassa. Lásd [Diagram rajzolása szövegből](topic:text-to-diagram).
- **Thai szöveg PDF-plotban.** Korábban kérdőjelekként nyomtatódott.

### Több hely és rajzolási segédeszközök

- **Lebegő, vékonyabb parancssor és tömör felső terület.** A parancssor fogópontjának húzásával lebegtethető, felső szélét húzva kevesebb sor látszik, az {{key:F2}} pedig megnyitja az előzményeket. A {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Parancssor}} és a felső terület választásai ugyanezeket a beállításokat tartalmazzák. Lásd [Beállítások](topic:settings#command-line).
- **Objektumfogás menü.** Kattintson jobb gombbal a {{ui:Fogás}} gombra az állapotsorban, vagy írja be a {{cmd:OSNAP}} parancsot.
- **Fogás rácshoz.** Az állapotsor {{ui:Rácsfogás}} gombja vagy az {{key:F9}}: a kiválasztott pontok a legközelebbi rácspontra kerülnek, ha objektumfogás nem vette át a pontot.
- **Ív tízféleképpen, és Folytatás.** Az {{ui:Ív}} a {{ui:Rajzolás}} eszköztáron vagy a {{cmd:ARC}}: 3 pontos, a Kezdőpont/Középpont/Végpont család és a Középpont/Kezdőpont/Végpont család, valamint a Folytatás (nyomja meg az {{key:Enter}} billentyűt a kezdőpontnál) az utolsó vonalból, ívből vagy polivonalból.
- **A Dokumentumok panel.** A {{cmd:DOCUMENTS}} (`DOCS`), vagy a {{ui:Nézet}} csoport {{ui:Továbbiak}} menüjének {{ui:Dokumentumok…}} lehetősége: minden rajz verziója, állapota és kivétele egy projektmappában. Középre igazított párbeszédpanelként nyílik meg. Lásd [Dokumentumok](topic:documents).

### Fájlok

- **Brit acélméretek.** 976 szelvény a Szabvány panelen, a rajzokon szokásos módon beírva (például `305x165x40 UB`).
- **Dél-afrikai csomagok** (rajzolási gyakorlat és építési szabályzatok) az Építési szabályzat bővítmény csomagjaiként. A számok nincsenek ellenőrizve.
- **Bővítmények a CadCraft-hoz,** kérésre hozzáadva és alapértelmezetten kikapcsolva: belső világítástervezés, chip-tervezés (HDL-ből elrendezés), marógépes faragás, áramkör-szimuláció, görgős lánchajtás-fogaskerekek és az építési szabályzatok országcsomagjai.

## Javítva

- A sraffozás mozgatása, forgatása vagy léptékezése hátrahagyta a mintáját.
- A {{cmd:GRIDMOVE}} az egész alaprajzi falat magával vitte, amely csak a rácsvonalon kezdődött. Most a falat a végei alapján ítéli meg.
- A rács csak a rajzhatáron belül látszott, még akkor is, ha a határok ki voltak kapcsolva.
- Az oldalsó panel blokklistája görgethető, és ha egy név nem blokk, a vele kezdődő blokkokat listázza („Erre gondolt?”).
- Azok a DXF R12-fájlok, amelyeket az AutoCAD elutasított („Unknown group 1001 for table”), most ott megnyílnak.
- A nagyon nagy fájlok (kb. 70 000 elemtől felfelé) „Maximum call stack size exceeded” hibával nem nyíltak meg.
- Az AutoCAD 2018-tól kezdve készült, magas karbantartási verziójú DWG-fájlok a „bad BITLONG code 11” hibával nem nyíltak meg.
- A bekezdésszöveg-mezőben a kijelölt részhez beírt új méret megtartja a kijelölést.

## Minden alkalmazásban

Minden vezérlőn, amelynek van tippje, Bootstrap-súgóbuborékok; bezárható kezdő tipp; a lapsávok görgethetők, ha nem férnek ki; a böngészőlap címe pedig követi a megnyitott rajzot (`<drawing> - CadCraft | CadCraft`). A {{ui:Beállítások}} › {{ui:Elrendezés}} most legördülő lista, kétsoros választásokkal. A {{ui:Beállítások}} nyelvlistája hosszabb, mint a 0.8-ban. A Live közös szerkesztését, a könyvtár-gyűjteményeket és a súly- és hőmérséklet-mértékegységeket a Studio-jegyzetek ismertetik.

## Őszinte korlátok

- A bekezdésszövegnek nincs felsorolása vagy számozott listája, tabulátorvonalzója és sorkizárása. A plottolt PDF-ek Helvetica betűvel szedik a szöveget.
- Az alaprajzi falak egyenesek, így az ívet rövid falakként rajzolják. A falszerszám közösségi kézi ellenőrzése még hátravan.
- A rétegcsoportok nem az AutoCAD saját formátumában íródnak, ezért az AutoCAD lapos listát mutat. Más programok az összes szintet együtt mutatják, hacsak nem futtatják a {{cmd:FLOORLAYERS}} parancsot.
- A Dokumentumok panelt két ember még nem próbálta ki valódi megosztáson. A marógépes faragást még egyetlen valódi gépen sem futtatták. A világítási becslést foton-nyomkövetéssel ellenőrizték, nem másik programmal. A mérnöki bővítmények ellenőrzési segédeszközök, nem pótolják a mérnöki felülvizsgálatot.
- Az angoltól eltérő nyelvek gépi piszkozatok, és néhány új szó csak angolul van.

## Korábbi: 0.8 és 0.8.1

Ez a CadCraft 0.7-hez képest 0.8-ban és 0.8.1-ben változott. A 0.8 (2026. november 1.) olyan rajzolási segédeszközöket ad, amelyek a saját rajzból dolgoznak, a számítógépen futó szabályok alapján és modell nélkül; a 0.8.1 (2026. november 2.) pedig az utána jelentett hibákat javítja.

### Új

**Rajz, amely befejezi a gondolatát**

- **Egy szellem mutatja, mi jön.** Ha nincs parancs futásban, egy szürke, szaggatott szellem mutatja, mit mond a rajz saját mintázata a következőről: a következő oszlop azonos távolságra, a lépcső következő foka, a szoba hiányzó fala. Az {{key:Tab}} lenyomásával egy visszavonási lépésként rajzolható meg, az {{key:Esc}} pedig elveti. Csak a legújabb objektumokat nézi, így nagy rajzon is zökkenőmentes marad. Kikapcsolható a {{ui:Beállítások}} › {{ui:CadCraft}} alatt, vagy a {{cmd:AUTOCOMPLETE}} `Off` paranccsal.
- **A következő pont vonal rajzolása közben.** A {{cmd:LINE}} vagy {{cmd:PLINE}} közben a szellem a következő pont: a lépcső következő foka, a téglalap negyedik sarka, vagy az a pont, amely lezárja. Húzza a kurzort a közelébe, és nyomja meg az {{key:Tab}} billentyűt, mintha oda kattintott volna.
- **Tollal rajzolt vázlatokból pontos geometria lesz.** A {{cmd:SKETCHFIX}}: rajzoljon durva vonalakat tollal, egérrel vagy ujjal, és mindegyikből tiszta vonal, kör, ív, téglalap vagy polivonal lesz, amely a már meglévőkhöz igazodik. Lásd [Vázlatrajzolás tollal és pontos geometria](topic:sketch-with-a-pen).
- **Egy vázlat fotójából rajz lesz.** A {{cmd:PHOTOSKETCH}} (`PSK`) megtalálja a papírt a fotón, kiegyenesíti a perspektívát, alkalmazza a megadott papírméretet és léptéket, és minden tollszínhez egy rétegre nyomkövetést készít a tollvonalakból. A feliratokat nem követi nyomon.
- **Méretezés szabályok szerint.** Az {{cmd:AUTODIM}} (`ADIM`) méretláncokat készít a kiválasztott oldalak mentén, egész méretet, nyílásszélességeket, furatátmérőket, és a `Grid` opcióval rácstávolságokat. Soha nem ismétel meg egy már meglévő méretet.
- **Mozgassa a rácsvonalat, és a többi követi.** A {{cmd:GRIDMOVE}} (`GM`): a rácsvonalon végződő falak nyúlnak vele, a mentén lévők, az oszlopok, a buborékja és a címkéje mozognak, a rajta lévő méretek pedig az új távolságot mérik. Egy visszavonási lépés.

**Lapok, részletek és címkék**

- **Lapok, amelyek maguktól elrendeződnek.** Az {{cmd:AUTOSHEET}} a megnevezett nézeteit (vagy a modell külön darabjait) veszi, választ papírméretet és szabványos léptéket, és a nézeteket új lapokra helyezi rajzfejjel és név- és léptékfelirattal. Minden szerkeszthető marad. Lásd [Lapok elrendezése helyettem](topic:lay-out-sheets-for-me).
- **A cég részletei, rajzolás közben felajánlva.** A {{cmd:DETAILS}} (`DET`) megőrzi a saját részletblokkjait. Ha a kijelölés egy blokkhoz illik a rétegein, blokknevein és megjegyzésein lévő szavak alapján, az állapotsor jelzi; ki lehet választani és elhelyezni. A {{cmd:DETAILS}} › Megosztás a listát a Dokumentumok mappába teszi, és behozza, amit a csapat hozzáadott. A {{ui:Beállítások}} kikapcsolja a felajánlásokat.
- **Címkék blokkokon.** A {{cmd:TAGS}} címkét határoz meg (fajtáját, a felvehető értékeket, a blokkokat, amelyekre vonatkozik), beállítja a kijelölt blokkhivatkozásokra, és kimutatásként listázza őket, amelyet CSV-ként menthet. A definíciók a DWG-ben maradnak meg. Lásd [Címkék](topic:tags).
- **Rajzhatárok.** A {{cmd:LIMITS}} téglalapot állít be a rajznak: a rács kitölti, a teljes nagyítás pedig megmutatja. A határok körvonalként jelennek meg, és DWG- és DXF-ben mentődnek a papírhatárokkal együtt. Lásd [Rajzhatárok beállítása](topic:drawing-limits).

**Munka más emberekkel és más programokkal**

- **Jelölésből revízió.** A {{cmd:REDLINE}} beolvassa a MarkupCraft által írt csomagot, és minden változást listáz. Mindegyiket elfogadhatja vagy elutasíthatja megjegyzéssel; az elfogadottak egy visszavonási lépésben revíziófelhőt és revíziónaplót kapnak, és elmenti a válaszfájlt, amely lezárja a jelöléseket a MarkupCraft-ban. Lásd [Jelölés átalakítása revízióvá](topic:redline-to-revision).
- **Rajzok, amelyeket a git és a Fossil összevonhat.** Ha az {{ui:Egyesítésbarát fájlok}} be van kapcsolva a {{ui:Beállítások}} › {{ui:CadCraft}} alatt, minden objektum kap egy soha nem változó kulcsot (a fájlok kb. 10 százalékkal nagyobbak). A `cadcraft merge base ours theirs` ezután két ember egy DWG- vagy DXF-objektumon végzett szerkesztéseit objektumonként összevonja, és csak ott jelez, ahol két ember ugyanazt módosította. Lásd [Egy rajz két ember általi szerkesztésének összevonása](topic:merge-drawings).
- **Mi változott, szavakban.** Az {{ui:Előzmények}}ben az Összehasonlítás egyszerű listát ad: hol változtak a dolgok, mekkorák a helyek, mi került hozzá, el vagy módosult, és a szerkesztett szöveg. Lásd [Mondja el szavakban, mi változott](topic:changes-in-words).
- **Irányszögek és szögek.** Egy irányt földmérői irányszögként írhat be, például N45°23'30"E, vagy fokban, percben és másodpercben, bárhol, ahol szöget kérnek; az AUNITS állítja be, hogyan jelennek meg a szögek. Lásd [Irányszögek és szögek beírása és megjelenítése](topic:bearings-and-angles).
- **Saját SHX-betűkészletek.** Adjon a CadCraft-nak egy mappányi SHX-betűkészletet, és a betűkészleteket megnevező szövegstílusok azokkal rajzolódnak ki, a képernyőn és a plotokon egyaránt. Lásd [Szöveg rajzolása saját SHX-betűkészletekkel](topic:shx-fonts).
- **Diagram szövegből.** A {{cmd:DIAGRAM}} beolvas egy Mermaid folyamatábrát, egy PlantUML komponensdiagramot, D2-t vagy egy honnan-hová listát, és szerkeszthető blokkokat és összekötőket rajzol. Lásd [Diagram rajzolása szövegből](topic:text-to-diagram).
- **OLE-objektumok DWG-ben.** A {{cmd:OLELIST}} listázza a DWG által hordozott OLE-objektumokat, amelyeket a CadCraft magától nem tud elhelyezni, és egy kép másolatát oda helyezi, ahová megadják. Lásd [Képek](topic:pictures#objects-from-other-programs-ole).
- **A számítások a rajzzal maradnak.** A számítólapok és a tervezési indoklások az osztálytáblával együtt a DWG-ben maradnak meg.

**Rajzolás látás nélkül**

- Kapcsolja be a {{ui:Rajzolás látás nélkül}} lehetőséget a {{ui:Beállítások}} részben (vagy írja be a {{cmd:ACCESS}} parancsot, és erre válaszoljon: `On`). A CadCraft minden parancsot és eredményt a képernyőolvasóján keresztül mond be, leírja a rajzot és azt, ami a kurzor közelében van, lehetővé teszi, hogy billentyűzettel mozgassa a kurzort és válasszon pontokat, és minden fogásnál és fogópontnál hangot ad. Ahol a böngésző fel tudja ismerni a beszédet a számítógépen, a parancsok ki is mondhatók. Lásd [Rajzolás látás nélkül](topic:draft-without-sight).

**Minden alkalmazásban**

- **Nyelvek.** 54 nyelv; tíz új (litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli, üzbég). Az angolon kívüli nyelvek gépi piszkozatok, amíg anyanyelvi beszélő el nem olvassa őket.
- **Beviteli eszközök.** Érintőpad, toll, 3D-s egér, játékvezérlő és MIDI-vezérlés.
- **Eszköztársorok és a tulajdonságtábla.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} részben a többi alkalmazásban tördelés, 2 sor vagy 1 sor közül lehet választani. A CadCraft saját beállítását a {{ui:Beállítások}} › {{ui:CadCraft}} részben tartja (lásd [Eszköztársorok](topic:settings#toolbar-rows)). A közös tulajdonságtábla három másik alkalmazásban van, a CadCraft-ban nincs.
- **Problémák, Live és bővítmények.** Egy közös Problémák panel, amely minden alkalmazásban figyelmeztet, egy Live nézet a CadCraft Studio-ban, amely megmutatja, ki hol van (lásd [Egy rajzon együtt dolgozni](topic:work-live)), valamint bővítménylista.
- **Az AI csatlakoztatása.** Egy kapcsolat a CadCraft Studio-tól mind a nyolc alkalmazásig, alkalmazásonként csak olvasási, javaslati vagy szerkesztési szinttel, és egy egyszerű szavakkal írt napló arról, mit tett az asszisztens. A CadCraft-nak nincs saját AI-ja, a mindenhol elérhető Kérdezés pedig az általunk csatlakoztatott AI-t használja.

### Javítva a 0.8.1-ben

- **A Tulajdonságok 150-et mutatott 12'-6" helyett** a láb-hüvelyk rajzokban. Az alkalmazás által maga olvasott mezők ismét megtartják a szövegüket.
- **Azok a DWG-fájlok, amelyek osztályszakaszát rossz típusúként olvasták** (GitHub cadcraft#5), most helyesen nyílnak meg.
- **A célkereszt többé nem látszik a felugró ablakok mögött.**
- **A Studio és a csomagolt kiadások futás közben tudnak nyelvet váltani.** Korábban csak angolul voltak. Még nem minden platformon próbálták ki: jelezze, ha a nyelv nem változik.
- **Álló tájolású táblagépeken** a rács szabad magasságát a rajzfelület kapja, a lapmód pedig 760 px vagy annál kisebb méretnél indul.
- **A STRETCH keresztező ablakkal és a LIMITS** a Studio 0.8.0-n lettek jelentve, és a 0.8-as webes verzióban már helyesek voltak; a jelentő telepítője régebbi volt. A Studio 0.8.1 tartalmazza őket.

### Ebben a verzióban még nincs

- **A 0.8 és 0.8.1 nincs kódaláírva.** A Windows figyelmeztethet (válassza a {{ui:További információ}}, majd a {{ui:Mégis futtatás}} lehetőséget); Mac-en kattintson jobb gombbal a CadCraft Studio-ra, és válassza a {{ui:Megnyitás}} lehetőséget. Az áruházi verziók szüneteltetve vannak, az iPad- és iPhone-verziót pedig nem építették újra a 0.8.1-hez.
- **A tollas vázlatokat és a vázlatfotókat** csak kitalált fotókon és egéren próbálták ki, valódi tollal, érintőképernyővel vagy papíron készült kézi vázlattal még nem.
- **A Rajzolás látás nélkül** automatizált ellenőrzésekkel lett tesztelve, képernyőolvasóval vagy vak tesztelővel még nem.
- **A részletek megosztását** nem ellenőrizte két ember, a Team Cloud Plan mappa mint Dokumentumok mappa pedig nincs elkészítve.
- **Az összevonás** a CadCraft DWG- és DXF-fájljaira működik; a többi alkalmazás fájljaira ugyanez még nincs elkészítve.
- **Visszavonás ablakok között:** a CadCraft minden befejezett lépést jelez, de a Studio-nak még nincs egyetlen visszavonása minden alkalmazáshoz; minden alkalmazás a saját lépéseit vonja vissza.
- A DWG OLE-objektumai megmaradnak, de nem rajzolódnak ki a helyükön.
- Más programok plot stílustábláinak (CTB-fájlok) olvasása el van készítve, de egy másik programból származó fájllal még nem ellenőrizték.
- **Az AI csatlakoztatása:** az egykattintásos csatlakozás a Studio-ban, a böngészős AI-hoz készült hosztolt összekötő, a saját API-kulcs a Studio-ban és a közzétett MCP-csomag nincs ebben a kiadásban ígérve.

A korábbi verzióról lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).

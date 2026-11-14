---
title: Újdonságok a 0.8 és 0.8.1 verzióban
summary: Szellemkép, amely befejezi a rajzot, tollas vázlatok és vázlatfotók geometriává alakítva, magukat elrendező lapok, rajzolás közben felajánlott részletek, GRIDMOVE és AUTODIM, címkék, egyesítésbarát fájlok, jelölésekből revíziók, rajzolás látás nélkül, rajzhatárok, irányszögek, SHX betűtípusok, diagramok szövegből, és javítások a 0.8.1 verzióban.
keywords: újdonságok, what's new, kiadási jegyzetek, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, automatikus kiegészítés, szellemkép, tab, sketchfix, photosketch, autosheet, részletek, gridmove, autodim, címkék, revízió, egyesítés, git, fossil, hozzáférés, rajzolás látás nélkül, képernyőolvasó, határok, irányszögek, aunits, shx, diagram, ole, előzmények, összehasonlítás, szavakban, tulajdonságok, láb és hüvelyk, nyújtás, nyelvek, beviteli eszközök, problémák, live, asszisztensek
from: 9dd82db5
---

Ez azt mutatja, mi változott a CadCraft 0.8 és 0.8.1 verziójában a 0.7-hez képest. A 0.8 (2026. november 1.) olyan rajzsegédeket ad, amelyek a saját rajzából dolgoznak, a számítógépen lévő szabályok alapján és modell nélkül, a 0.8.1 (2026. november 2.) pedig a megjelenés után jelentett hibákat javítja.

## Új

### Rajzolás, amely befejezi a gondolatot

- **Szellemkép mutatja, mi következik.** Ha nincs futó parancs, egy szürke, szaggatott szellemkép mutatja, mit jeleznek a rajz saját mintái következőnek: a következő pillért ugyanolyan távolságra, a lépcső következő fokát, egy helyiség hiányzó falát. Nyomja meg a {{key:Tab}} billentyűt, hogy egyetlen visszavonási lépésben megrajzolja, vagy az {{key:Esc}} billentyűt az elvetéshez. Csak a legújabb objektumokat nézi, így nagy rajzon is gördülékeny marad. Kikapcsolható a {{ui:Beállítások}} › {{ui:CadCraft}} menüpontban, vagy a(z) {{cmd:AUTOCOMPLETE}} `Off` paranccsal.
- **A következő pont vonal rajzolásakor.** A {{cmd:LINE}} vagy a {{cmd:PLINE}} parancs közben a szellemkép a következő pont: a lépcső következő foka, a téglalap negyedik sarka, vagy az a pont, amely lezárja. Közelítse hozzá a kurzort, és nyomja meg a {{key:Tab}} billentyűt, mintha oda kattintott volna.
- **Tollvázlatokból pontos geometria.** {{cmd:SKETCHFIX}}: rajzoljon durva vonalakat tollal, egérrel vagy ujjal, és mindegyikből tiszta vonal, kör, ív, téglalap vagy polivonal lesz, a már meglévő rajzhoz igazítva. Lásd: [Vázlatrajzolás tollal és pontos geometria](topic:sketch-with-a-pen).
- **Vázlat fotójából rajz.** {{cmd:PHOTOSKETCH}} (`PSK`) megtalálja a papírt a fényképen, kiegyenesíti a perspektívát, alkalmazza az Ön által megadott papírméretet és méretarányt, és minden tollszínhez külön rétegre követi a tollvonalakat. A feliratokat nem követi le.
- **Méretezés szabályok szerint.** {{cmd:AUTODIM}} (`ADIM`) méretláncokat készít az Ön által kiválasztott oldalak mentén, egész méretet, nyílásszélességeket, furatátmérőket, és a `Grid` opcióval rácstávolságokat. Soha nem ismétel meg meglévő méretet.
- **Rácsvonal mozgatása, és a többi követi.** {{cmd:GRIDMOVE}} (`GM`): a rácsvonalon végződő falak vele együtt nyúlnak, a mellette lévő falak, oszlopok, jelölőkör és címke mozog, a rajta lévő méretek pedig az új távolságot mérik. Egyetlen visszavonási lépés.

### Lapok, részletek és címkék

- **Lapok, amelyek maguktól elrendeződnek.** A {{cmd:AUTOSHEET}} veszi a megnevezett nézeteit (vagy a modell különálló részeit), kiválaszt egy papírméretet és szabványos méretarányt, és a nézeteket új lapokra helyezi rajzfejjel és név- és méretarány-felirattal. Minden szerkeszthető marad. Lásd: [Lapok elrendezése helyettem](topic:lay-out-sheets-for-me).
- **A cég részletei, rajzolás közben felajánlva.** A {{cmd:DETAILS}} (`DET`) a saját részletblokkjait tartja nyilván. Ha a kijelölt elem rétegneveinek, blokkneveinek és megjegyzéseinek szavai alapján egyezik valamelyikkel, az állapotsor ezt jelzi; válassza ki és helyezze el. A {{cmd:DETAILS}} › Megosztás a listáját a Dokumentumok mappába helyezi, és behozza, amit a csapata hozzáadott. A Beállításokban kikapcsolható a felajánlás.
- **Címkék blokkokon.** A {{cmd:TAGS}} definiál egy címkét (fajtáját, felvehető értékeit, azokat a blokkokat, amelyekre vonatkozik), beállítja a kijelölt blokkhivatkozásokra, és kimutatásként listázza őket, amelyet CSV-ként menthet. A definíciók a DWG-ben maradnak. Lásd: [Címkék](topic:tags).
- **Rajzhatárok.** A {{cmd:LIMITS}} téglalapot állít be a rajznak: a rács kitölti, a Nagyítás Mind (A) pedig megmutatja. A határok körvonalként jelennek meg, és DWG és DXF fájlba mentődnek a papírhatárokkal együtt. Lásd: [A rajzhatárok beállítása](topic:drawing-limits).

### Munka másokkal és más programokkal

- **Jelölésből revízió.** A {{cmd:REDLINE}} beolvassa a MarkupCraft által írt csomagot, és felsorol minden változást. Mindegyiket megjegyzéssel fogadhatja el vagy utasíthatja el; az elfogadottak revíziófelhőt és revízionaplót kapnak egyetlen visszavonási lépésben, és el kell mentenie a válaszfájlt, amely lezárja a jelöléseket a MarkupCraftban. Lásd: [Jelölés átalakítása revízióvá](topic:redline-to-revision).
- **Rajzok, amelyeket a git és a Fossil egyesíteni tud.** Ha a {{ui:Egyesítésbarát fájlok}} be van kapcsolva a {{ui:Beállítások}} › {{ui:CadCraft}} menüben, minden objektum kap egy kulcsot, amely soha nem változik (a fájlok körülbelül 10 százalékkal nagyobbak). A `cadcraft merge base ours theirs` parancs két személy egy DWG vagy DXF rajzon végzett szerkesztéseit objektumonként egyesíti, és csak azt jelzi, ahol két személy ugyanazt módosította. Lásd: [Egy rajz két személy szerkesztéseinek egyesítése](topic:merge-drawings).
- **Mi változott, szavakban.** Az Előzmények között az Összehasonlítás egyszerű listát ad: hol változott valami, mekkora a terület, mi került hozzá, mi lett eltávolítva vagy módosítva, és a szerkesztett szöveg. Lásd: [Szavakban leírni a változásokat](topic:changes-in-words).
- **Irányszögek és szögek.** Írjon irányt földmérői irányszögként, például N45°23'30"E, vagy fokban, percben és másodpercben, bárhol, ahol szöget kérnek; az AUNITS állítja be a szögek megjelenítését. Lásd: [Irányszögek gépelése és megjelenítése](topic:bearings-and-angles).
- **Saját SHX betűtípusok.** Adjon meg a CadCraftnak egy SHX betűtípusokat tartalmazó mappát, és a szövegstílusok, amelyek nevükkel hivatkoznak rájuk, ezekkel rajzolódnak ki, a képernyőn és a kinyomtatott rajzon egyaránt. Lásd: [Szöveg rajzolása saját SHX betűtípusokkal](topic:shx-fonts).
- **Diagram szövegből.** A {{cmd:DIAGRAM}} beolvassa a Mermaid folyamatábrát, a PlantUML komponensdiagramot, a D2-t vagy egy honnan-hová listát, és szerkeszthető blokkokat és összekötőket rajzol. Lásd: [Diagram rajzolása szövegből](topic:text-to-diagram).
- **OLE-objektumok DWG-ben.** A {{cmd:OLELIST}} felsorolja a DWG-ben lévő OLE-objektumokat, amelyeket a CadCraft maga nem tud elhelyezni, és ott helyez el egy másolatot a képből, ahol megadja. Lásd: [Képek](topic:pictures#objects-from-other-programs-ole).
- **Számításai a rajzzal maradnak.** A számítólapok és a tervezési indoklások a DWG-ben maradnak az osztálytáblával együtt.

### Rajzolás látás nélkül

- Kapcsolja be a {{ui:Rajzolás látás nélkül}} opciót a {{ui:Beállítások}} menüben (vagy írja be a {{cmd:ACCESS}} parancsot, és válaszoljon `On`-nal). A CadCraft a képernyőolvasón keresztül felolvassa minden parancsot és eredményt, leírja a rajzot és a kurzor közelében lévő elemeket, lehetővé teszi, hogy a billentyűzettel mozgassa a kurzort és pontokat válasszon, és minden fogáshoz és fogópont-találathoz hangot ad. Ahol a böngészője felismeri a beszédet, a parancsokat ki lehet mondani. Lásd: [Rajzolás látás nélkül](topic:draft-without-sight).

### Minden alkalmazásban

- **Nyelvek.** 54 nyelv; tíz új (litván, lett, bosnyák, maráthi, telugu, albán, afrikaans, filippínó, szuahéli, üzbég). Az angolon kívüli nyelvek gépi piszkozatok, amíg egy anyanyelvi beszélő el nem olvassa őket.
- **Beviteli eszközök.** Érintőpad, toll, 3D egér, játékvezérlő és MIDI-vezérlők.
- **Eszköztársorok és a tulajdonságrács.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} a többi alkalmazásban a Tördelés, a 2 sor vagy az 1 sor lehetőséget kínálja. A CadCraft saját beállítását a {{ui:Beállítások}} › {{ui:CadCraft}} menüben tartja (lásd: [Eszköztársorok](topic:settings#toolbar-rows)). A közös tulajdonságrács három másik alkalmazásban van, a CadCraftban nincs.
- **Problémák, Live és bővítmények.** Közös Problémák panel, amely minden alkalmazásban figyelmeztet, egy Live nézet arról, ki hol van a CadCraft Studióban (lásd: [Együttes munka egy rajzon](topic:work-live)), és egy bővítménylista.
- **Csatlakoztassa az AI-ját.** Egy kapcsolat a CadCraft Studiótól mind a nyolc alkalmazásig, alkalmazásonként olvasási, javaslási vagy szerkesztési szinttel, és egyszerű szavakkal írt naplóval arról, mit tett az asszisztens. A CadCraftnak nincs saját AI-ja, az Alkalmazásokban kérdezés pedig az Ön által csatlakoztatott AI-t használja.

## Javítva a 0.8.1 verzióban

- **A tulajdonságok 150-et mutattak 12'-6" helyett** láb és hüvelyk mértékegységű rajzokon. Az alkalmazás által olvasott mezők újra megtartják a szövegüket.
- **A DWG-fájlok, amelyek osztályszakaszát rossz típusként olvasták** (GitHub cadcraft#5), most helyesen nyílnak meg.
- **A kereszthajszál többé nem látszik a felugró ablakok mögött.**
- **A Studio és a csomagolt kiadások futás közben tudnak nyelvet váltani.** Korábban csak angolul voltak. Még nincs minden platformon tesztelve: jelezze, ha a nyelv nem változik.
- **Álló tableteken** a szabad rácsmagasság a vászonnak jut, a lapmód pedig 760 px-es vagy annál kisebb magasságnál indul.
- **A STRETCH keresztező ablakkal és a LIMITS** a Studio 0.8.0-n jelentett hibák voltak, de a 0.8-as webes verzióban már helyesek voltak; a bejelentő telepítője régebbi volt. A Studio 0.8.1 ezeket már tartalmazza.

## Ebben a verzióban még nincs

- **A 0.8 és 0.8.1 nincs kódaláírással.** A Windows figyelmeztethet (válassza a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} lehetőséget); Macen kattintson jobb gombbal a CadCraft Studióra, és válassza a {{ui:Megnyitás}} lehetőséget. A Store-verziók szünetelnek, az iPad- és iPhone-verzió pedig nem lett újraépítve a 0.8.1-hez.
- **A tollvázlatok és a vázlatfotók** csak kitalált fényképeken és egéren lettek kipróbálva, valódi tollal, érintőképernyővel vagy papíron készült kézi vázlattal még nem.
- **A Rajzolás látás nélkül** automatikus ellenőrzésekkel lett tesztelve, képernyőolvasóval vagy vak tesztelővel még nem.
- **A részletek megosztása** nem esett át két személyes ellenőrzésen, és a Team Cloud Plan mappa mint Dokumentumok mappa nincs megépítve.
- **Egyesítés** a CadCraft DWG és DXF fájljaival működik; a többi alkalmazás fájljaira nincs megépítve.
- **Visszavonás ablakokon át:** a CadCraft jelenti minden befejezett lépést, de a Studiónak még nincs egyetlen Visszavonás funkciója minden alkalmazásra; minden alkalmazás a saját lépéseit vonja vissza.
- **Egy DWG OLE-objektumai** megmaradnak, de nem a helyükön rajzolódnak ki.
- **A plot stílustáblák (CTB-fájlok) olvasása** más programokból megépült, de még nincs ellenőrizve másik programból származó fájllal.
- **Csatlakoztassa az AI-ját:** az egykattintásos csatlakozás a Studióban, a böngészős AI hosztolt összekötője, a Studión belüli saját API-kulcs és a közzétett MCP-csomag ebben a kiadásban nincs ígérve.

A korábbi verzióhoz lásd: [Újdonságok a 0.7 verzióban](topic:whats-new-0-7).

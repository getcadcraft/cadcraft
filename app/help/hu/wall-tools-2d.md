---
title: Falformák, vágások, eltolások és zárak 2D-s falakhoz
summary: Falakat rajzolhat téglalapként, sokszögként és ívként; feloszthatja és újra összekötheti őket; távolság szerint mozgathatja; és rögzíthet egy falat egy másikhoz vagy rácsvonalhoz. Ugyanazok az eszközök, mint a BimCraft falai.
keywords: fal, falak, eszköztár, falgombok, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, csatlakozási mód, ferdevágás, tompa, derékszögű lezárás, lakat, fogópont, végének húzása, forgatás, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, csatlakozás, csatlakozás tiltása, zár, rácsvonal, felosztás, rés, eltolás, helyzetvonal
from: f41e7433
---

Ezek az eszközök a `WALL` parancs 2D-s falain dolgoznak (lásd: „Okos falak, ajtók és ablakok rajzolása 2D-ben”). Ugyanazokat a szabályokat követik, mint a BimCraft falai, így a fal mindkettőben ugyanúgy viselkedik.

## Hol találhatók az eszközök

- Az eszköztáron a {{ui:Falak}} csoportban van a {{ui:Fal}}, a {{ui:Téglalap}}, a {{ui:Felosztás}} és a {{ui:Párhuzamos}}. A {{ui:Továbbiak}} menüben minden más falas eszköz megtalálható, mindegyik az ikonjával.
- A szalagmenüs stílusokban a {{ui:Falak}} lapon ezek a panelek vannak: {{ui:Falak rajzolása}}, {{ui:Kivágás}}, {{ui:Beállítás és módosítás}}, {{ui:Tartás}} és {{ui:Egyesítés}}.
- Elrendezésben az eszköztársorok és az eszközdoboz ugyanazt a {{ui:Falak}} csoportot mutatják.
- Bármelyik lent megnevezett parancsot begépelheti is.

## A csatlakozások tárolódnak

Ha egy fal vége egy másik falra esik, a CadCraft a csatlakozást mindkét fallal együtt menti. Nem számolja ki újra a csatlakozásokat abból, hol vannak éppen a végek. Ezért:

- A csatlakozó falak, amikor az egyikük mozog, követik azt, és csatlakozva maradnak. A végeik a saját vonalukon csúsznak, így semmi nem fordul el.
- Ha a fal egyik végét a fogópontjával húzza, az ott csatlakozó fal is megtartja az irányát. A végének a saját vonalán kell csúsznia, hogy találkozzon a húzott fallal, így a húzott vég nem mindig a kurzor alatt áll meg, hanem azon a vonalon. Az előnézet mutatja, hová. Az a fal, amely a húzott falba ütközik, a saját vonalán követi. A végének a fal mentén való egyenes húzása megváltoztatja a hosszát, és az ott csatlakozó fal vele mozog.
- Csatlakozó falon a `ROTATE` ugyanígy működik: a szomszédok végei a saját vonalukon csúsznak az elforgatott falhoz.
- Sarok mozgatásához jelölje ki az ott találkozó két falat, és húzza a sarkon lévő fogópontot. Mindkét fal a sarkon marad, és mindkettő elfordul. A távolabbi falak változatlanok maradnak.
- Tartsa lenyomva az {{key:Alt}} billentyűt, amikor a fogópont új helyére kattint, hogy szándékosan megszakítsa a csatlakozásokat: a fal oda kerül, ahová tette, és semmi sem követi.
- Ha a húzás a csatlakozó falat a saját távoli végén át fordítaná vissza, a művelet elutasításra kerül, és semmi nem változik.
- Az a fal, amelyet a {{ui:Csatlakozás tiltása}} beállítással (`D` a `WALL`-ban) rajzol, vagy a Tulajdonságokban kikapcsol ({{ui:Csatlakozás tiltása a kezdőpontnál}}, {{ui:Csatlakozás tiltása a végpontnál}}), az adott végén szabad marad akkor is, ha egy másik falat érint, amíg újra nem engedélyezi.
- A `WALLDISJOIN` (az {{ui:Egyesítés tiltása}} a {{ui:Falak}} csoportban) ugyanezt egy kattintással teszi: kattintson a fal egyik vége közelében, hogy tiltsa a csatlakozást azon a végen, és kattintson rá újra, hogy engedélyezze.
- Egy régebbi rajznak még nincsenek tárolt csatlakozásai. Az első módosítás egyszer megtalálja őket abból, ahogy a falak a változtatás előtt álltak, és elmenti. A `WALLJOINS` ezt azonnal elvégzi.
- A DWG- és DXF-fájlok minden falon belül hordozzák a csatlakozásokat. A CadCraft úgy olvassa vissza őket, ahogy mentették. Az a program, amely nem tart meg bővített adatokat, a falakat sima blokkként mutatja, és elveti a csatlakozásokat; az a csatlakozás, amelynek falait másik programban mozgatták, a következő módosításkor, bármelyik fal változásakor elvész.

## Sarok csatlakozási módja

Az a sarok, ahol két fal véghez véggel találkozik, ferdevágásként rajzolódik, hacsak nem választ másik módot.

- A `WALLJOINSTYLE` ({{ui:Egyesítési mód}} a {{ui:Falak}} csoportban): kattintson a sarokra. Minden kattintás a következő módra vált: {{ui:Ferdevágás}}, {{ui:Tompa}}, {{ui:Derékszögű lezárás}}, majd újra {{ui:Ferdevágás}}. A `T` begépelésével váltson, melyik két fal megy át a sarkon, amelyre utoljára kattintott. A befejezéshez nyomja meg az {{key:Enter}} billentyűt. A parancs egy futtatása egy visszavonási lépés.
- {{ui:Tompa}}: az egyik fal átmegy a másik távoli felületéig, a másik pedig az oldalánál áll meg. {{ui:Derékszögű lezárás}}: ugyanaz, de az átmenő fal saját magához képest derékszögben végződik. Derékszögnél a kettő egyformának látszik.
- A fal Tulajdonságaiban: {{ui:Egyesítési mód a kezdőpontnál}}, {{ui:Egyesítési mód a záró pontnál}}, valamint {{ui:Átmegy a kezdőpontnál}} és {{ui:Átmegy a záró pontnál}}.
- A stílus mindkét falhoz mentődik, és DWG- és DXF-fájlokban is megmarad. Egy fal másolata stílus nélkül indul.
- A T-csatlakozásnál nincs választható stílus: az a fal megy át, amelynek oldalához érnek. Ahol három vagy több fal találkozik, a sarok ferdevágás marad. Ugyanígy marad ferdevágás a nagyon éles sarok (kb. 30 foknál kisebb) és az egy vonalba eső két fal.

## Falalakzatok rajzolása

Mindegyik egy visszavonási lépésben készíti el a falakat, a sarkokat összekötve. A `WALL`-ban az `O` elhelyezési eltolást állít be (mennyire menjen a fal a kattintásai bal oldalára), a `D` pedig kikapcsolja az összekötést a következőként rajzolt falakra.

- `WALLRECT` (`WR`): két szemközti sarok, mint a `RECTANG`-nál.
- `WALLROT`: az első oldal, majd hogy milyen messze menjen a másik oldal; tetszőleges szögű téglalaphoz.
- `WALLPOLY` (`WP`): az oldalak száma (3-tól 64-ig), a középpont, a `C`, ha körülírt, az `I`, ha beírt, majd a sugár, mint a `POLYGON`-nál.
- `WALLARC` (`WARC`): középpont, kezdőpont, végpont. A `D` az ívet a másik irányba fordítja.
- `WALLTAN`: kattintson egy fal vége közelében, majd az ív végpontjára; az ív a falon mentén indul.
- `WALLPICK`: kattintson egy vonalra vagy polivonalra, és adja meg, hogy vegye-e hozzá a hozzá csatlakozó vonalakat is.
- `WALLTRACE`: kattintson egy zárt vonal- és falterület belsejébe, hogy a legkisebb köré falakat tegyen.

Az alaprajzi falak egyenesek, ezért az ívet 15 fokos rövid egyenes falak rajzolják meg. Úgy csatlakoznak, mint bármely sarok.

## Falak vágása

- A `WALLSPLIT` (`WS`): kattintson a falra, majd a pontra. A `C` ott vág, ahol egy másik fal keresztezi, a `G` rést hagy a részek között, az `F` a vágott végeket szabaddá teszi csatlakozás helyett. Az első rész megtartja a fal helyét a rajzban, az ajtók és ablakok a részükkel együtt mennek. Az ajtón vagy ablakon átmenő vágás elutasításra kerül.
- A `WALLSPLITGAP` ({{ui:Felosztás réssel}}): ugyanaz a felosztás, de előbb a rést kéri.
- A `WALLDELSEG`: kattintson a falra, majd a törlendő darab két végére.
- A `WALLREJOIN`: kattintson egy fal két részére, hogy újra egy legyen.

## Falak mozgatása távolság szerint

- A `WALLDIM`: kattintson egy vízszintes-függőleges vagy párhuzamos méretre, amely egyik faltól a másikig fut, majd írja be az új értéket. A távoli végén lévő fal saját magához képest derékszögben mozog, az első végén lévő megáll, és a hozzá csatlakozó falak követik.
- A `WALLOFFSET` (`WO`): kattintson egy falra, majd arra az oldalra, ahová mozgatni szeretné (a `D` távolságot gépel be, a `C` másolatot készít helyette).
- A `WALLSTRETCH`: ablak a fal végei körül, majd egy alappont és egy második pont.
- A Tulajdonságokban a beírt {{ui:Hossz}} a kezdőpontot megtartja, és a távoli végén csatlakozó falat magával viszi; az új {{ui:Vastagság}} a kiválasztott {{ui:Helyzetvonal}} szerint nő (a bal oldali felület, a jobb oldali felület vagy a középvonal felé).

## Falak rögzítése

A zár a fájlban a falhoz tartozik. Ha egy zárolt falat mozgatnak, a másik követi. Ha egy módosítás a két falat eltérően mozgatná, elutasításra kerül, és semmi nem változik.

- A `WALLHOLD`: a fal zárása egy másik falhoz. Az `A` előbb a másik fal vonalára mozgatja, a `K` megtartja a jelenlegi távolságát.
- A `WALLHOLDDIM`: két párhuzamos fal közötti távolság zárása.
- A `WALLGRID`: a fal zárása egy rácsvonalhoz (rácsrétegen lévő vonal, amelynek címkéje szövegként az egyik végén áll), vagy mentén, vagy úgy, hogy egy vége rajta van. A vonal mentén zárt fal megtartja tőle való távolságát. A rácsvonalat a `GRIDMOVE` paranccsal mozgatva a fal egészben követi, a hozzá csatlakozó falakkal együtt. A rácsvonal mentén fekvő fal zár nélkül is egészben mozog vele, a csak a vonalon végződő fal pedig annak a végével nyúlik.
- A `WALLHOLDS` listázza a zárakat. A `WALLUNHOLD` levesz a falról a zárakat.
- Minden zár egy kis lakatot mutat az alaprajzon: a zárolt fal közepe mellett, vagy annak a végénél, amely rácsvonalhoz van zárva. Kattintson a lakatra a zár eltávolításához.

## Ami még nincs kész

A zárak a falak középvonalait használják. Itt a falaknak nincsenek rétegei, ezért csomópontnál nincs rétegprioritás, és a falak nem görbülnek (lásd fent: ívek). Ezeket az eszközöket még senki nem próbálta nagy rajzon, és más CAD-programban sem ellenőrizték őket.

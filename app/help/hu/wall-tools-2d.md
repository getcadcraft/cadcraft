---
title: Falalakzatok, vágások, eltolások és zárak 2D falakhoz
summary: Rajzoljon falakat téglalapként, sokszögként és ívként, vágja és illessze őket újra, mozgassa távolság szerint, és zárjon egy falat egy másikhoz vagy egy rácsvonalhoz. Ugyanazok az eszközök, mint a BimCraft falai.
keywords: fal, falak eszköztár, fal gombok, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, csatlakozási mód, ferdevágás, tompa, derékszögű lezárás, lakat, fogópont, végének húzása, forgatás, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, csatlakozás, csatlakozás tiltása, zár, rácsvonal, vágás, rés, eltolás, helyvonal
from: 49044181
---

Ezek az eszközök a `WALL` parancs 2D falain dolgoznak (lásd: „2D okos falak, ajtók és ablakok rajzolása”). A BimCraft fal-eszközeinek szabályait használják, így a fal mindkét programban egyformán viselkedik.

## Hol vannak az eszközök

- Az eszköztáron a {{ui:Falak}} csoportban van a {{ui:Fal}}, a {{ui:Téglalap}}, a {{ui:Felosztás}} és az {{ui:Eltolás}}. A {{ui:Továbbiak}} menüjében van minden más fal-eszköz, mindegyik az ikonjával.
- A szalagmenü-stílusokban a {{ui:Falak}} fülön vannak a {{ui:Falak rajzolása}}, a {{ui:Vágás}}, a {{ui:Beállítás és módosítás}}, a {{ui:Tartás}} és a {{ui:Csatlakozás}} panelek.
- Elrendezésben az eszközsorok és az eszköztár ugyanazt a {{ui:Falak}} csoportot mutatják.
- Bármelyik alább említett parancsot be is írhatja.

## A csatlakozások tárolódnak

Amikor egy fal vége egy másik falra esik, a CadCraft ezt a csatlakozást mindkét falhoz elmenti. Nem számolja újra a csatlakozásokat abból, hol vannak éppen a végek. Ez azt jelenti:

- A mozgatott falhoz csatlakozó falak követik, és csatlakozva maradnak. A végeik a saját vonalaik mentén csúsznak, így semmi nem fordul el.
- Ha egy fal egyik végét a fogópontjával húzza, a ott csatlakozó fal is megtartja az irányát. Az ő vége a saját vonalán csúszik a húzott falhoz, így a húzott vég a vonalra kerül, nem mindig a kurzor alá. Az előnézet mutatja, hová. Az a fal, amely a húzott falba ütközik, a saját vonalán követi. A véget egyenesen a fal mentén húzva a hossza változik, és a ott csatlakozó fal vele együtt mozog.
- A `ROTATE` csatlakozó falon ugyanúgy működik: a szomszédai végei a saját vonalaikon csúsznak el az elfordult falhoz.
- Egy sarok mozgatásához jelölje ki mindkét falat, amely ott találkozik, és húzza a sarkon lévő fogópontot. Mindkét fal a sarkon marad, és mindkettő elfordul. A távolabbi falak nem változnak.
- Tartsa lenyomva az {{key:Alt}} billentyűt, amikor a fogópont új helyére kattint, ha szándékosan meg akarja szakítani a csatlakozásokat: a fal oda kerül, ahová tette, és semmi nem követi.
- Ha a húzás egy csatlakozó falat a saját távoli végén keresztül fordítana vissza, a művelet elutasításra kerül, és semmi nem változik.
- Olyan falat, amelyet a {{ui:Csatlakozás tiltása}} (`D` a `WALL`-ban) opcióval rajzolt, vagy a Tulajdonságokban kikapcsolt ({{ui:Csatlakozás tiltása a kezdőpontnál}}, {{ui:Csatlakozás tiltása a végpontnál}}), az a végén szabad marad, akkor is, ha egy másik falat érint, amíg újra nem engedélyezi.
- A `WALLDISJOIN` (a {{ui:Csatlakozás tiltása}} a {{ui:Falak}} csoportban) ugyanezt kattintással teszi: kattintson a falra a vége közelében, hogy ott tiltsa a csatlakozást, és még egyszer, hogy engedélyezze.
- Egy régebbi rajznak még nincsenek tárolt csatlakozásai. Az első módosítás, amelyet végez, egyszer megtalálja őket abból, ahogy a falak a módosítás előtt álltak, és elmenti. A `WALLJOINS` azonnal megteszi.
- A DWG és DXF fájlok minden falon belül hordozzák a csatlakozásokat. A CadCraft úgy olvassa vissza őket, ahogy mentésre kerültek. Egy program, amely nem őriz bővített adatot, a falakat sima blokkként mutatja, és elveszíti a csatlakozásokat; a másik programban mozgatott falak csatlakozását a következő módosításnál elveti.

## Sarok csatlakozási módja

Az a sarok, ahol két fal véghez végben találkozik, ferdevágásként rajzolódik, hacsak nem választ másik módot.

- A `WALLJOINSTYLE` ({{ui:Csatlakozási mód}} a {{ui:Falak}} csoportban): kattintson a sarokra. Minden kattintás a következő módra lép: {{ui:Ferdevágás}}, {{ui:Tompa}}, {{ui:Derékszögű lezárás}}, majd újra {{ui:Ferdevágás}}. A `T` betűvel azt a falat váltja, amely a sarokban átmegy, amelyre utoljára kattintott. Az {{key:Enter}} billentyűvel fejezi be. A parancs egy futása egy visszavonási lépés.
- {{ui:Tompa}}: az egyik fal átmegy a másik távoli felületéig, a másik pedig a másik oldalához áll meg. {{ui:Derékszögű lezárás}}: ugyanez, de az átmenő fal a saját magához képest derékszögben végződik. Derékszögnél a kettő egyformának látszik.
- Egy fal Tulajdonságaiban: {{ui:Csatlakozási mód a kezdőpontnál}}, {{ui:Csatlakozási mód a végpontnál}}, és {{ui:Átmegy a kezdőpontnál}}, {{ui:Átmegy a végpontnál}}.
- A mód mindkét falhoz mentődik, és a DWG és DXF fájlokban is megmarad. A fal másolata mód nélkül indul.
- A T-csatlakozásnak nincs választható módja: az a fal megy át, amelynek oldalát érik. Az a sarok, ahol három vagy több fal találkozik, ferdevágás marad. Ugyanígy a nagyon éles sarok (kb. 30 foknál kisebb), és két egy vonalba eső fal.

## Falalakzatok rajzolása

Mindegyik egy visszavonási lépésben készíti el a falakat, a sarkaikat összekötve. A `WALL`-ban az `O` betű egy elhelyezési eltolást állít be (mennyivel kerül a fal az Ön kattintásainak bal oldalára), a `D` pedig kikapcsolja a csatlakoztatást a következőként rajzolt falakra.

- `WALLRECT` (`WR`): két átellenes sarok, mint a `RECTANG`.
- `WALLROT`: az első oldal, majd hogy milyen messzire megy ki a másik oldal, tetszőleges szögű téglalaphoz.
- `WALLPOLY` (`WP`): az oldalak száma (3–64), a középpont, `I` a beírt vagy `C` a körülírt, majd a sugár, mint a `POLYGON`-nál: kattintson rá, vagy írja be (a beírt sugár a mutató felé fut, vagy az X tengely mentén, ha a mutató még a középponton van).
- `WALLARC` (`WARC`): középpont, kezdőpont, végpont. A `D` az ívet a másik irányba fordítja.
- `WALLTAN`: kattintson egy fal vége közelében, majd az ív végére, amely azt a falat követve indul ki.
- `WALLPICK`: kattintson egy vonalra vagy polivonalra, és mondja meg, hogy vegye-e hozzá a hozzá csatlakozó vonalakat is.
- `WALLTRACE`: kattintson egy zárt vonal- és falterületen belül, hogy a legkisebb terület köré falakat tegyen.

A tervrajzi falak egyenesek, ezért az ívet 15 fokos rövid egyenes falakként rajzolja, amelyek csatlakoznak, mint bármely sarok.

## Falak vágása

- `WALLSPLIT` (`WS`): kattintson a falra, majd a pontra. A `C` ott vág, ahol egy másik fal keresztezi, a `G` rést hagy a részek között, az `F` a vágott végeket szabaddá teszi csatlakozás helyett. Az első rész megtartja a fal helyét a rajzban, és az ajtók és ablakok a részükkel együtt mennek. Ajtón vagy ablakon átmenő vágást elutasít.
- `WALLSPLITGAP` ({{ui:Felosztás réssel}}): ugyanaz a felosztás, de először a rést kéri.
- `WALLDELSEG`: kattintson a falra, majd a törlendő darab két végére.
- `WALLREJOIN`: kattintson egy fal két részére, hogy újra egy fal legyen.

## Falak mozgatása távolság szerint

- `WALLDIM` ({{ui:Szerkesztés méret alapján}}): kattintson egy vízszintes vagy párhuzamos méretre, amely egyik faltól a másikig fut, majd írja be az új értéket. A távoli végen lévő fal a saját magához képest derékszögben mozdul, az első végen lévő fal megáll, és a hozzá csatlakozó falak követik. A méret távoli pontja a falával együtt mozog, így a méret a beírt értéket mutatja.
- `WALLOFFSET` (`WO`): kattintson egy falra, majd arra az oldalra, ahová mozgatni szeretné (a `D` távolságot ír be, a `C` másolatot készít).
- `WALLSTRETCH`: ablak a fal végei körül, majd egy bázispont és egy második pont.
- A Tulajdonságokban a beírt {{ui:Hossz}} a kezdőpontot megtartja, és a távoli végén csatlakozó falat vele együtt viszi; az új {{ui:Vastagság}} a kiválasztott {{ui:Helyvonal}}tól nő (a bal oldali felület, a jobb oldali felület vagy a közép).

## Méretezés falközéppontok között

A fal középvonala nincs kirajzolva, de az objektumfogás megtalálja. Ha az objektumfogás be van kapcsolva ({{key:F3}}), mozgassa a mutatót a fal vastagságának közepére: a jelölő `Wall center: endpoint` vagy `Wall center: midpoint` feliratot mutat, és a középvonal szaggatott vonalként jelenik meg, amíg a jelölő rajta van. Ha az objektumfogás listájában a {{ui:Merőleges}} vagy a {{ui:Legközelebbi}} be van kapcsolva, ezek a középvonalon is működnek.

1. Indítsa el a `DIMLINEAR` (vagy a `DIMALIGNED`) parancsot.
2. Kattintson az első falra, ahol a jelölő `Wall center: midpoint` vagy `Wall center: endpoint` feliratot mutat.
3. Kattintson a második falra ugyanígy, majd arra a helyre, ahová a méretvonal kerül.
4. A távolság megváltoztatásához indítsa el a `WALLDIM` parancsot, kattintson a méretre, és írja be az új értéket. A második fal mozdul.

A középvonal-fogás minden olyan parancsban működik, amely pontot kér.

## Falak zárása

A zár a fájlban marad a falhoz. Ha egy zárt falat mozgat, a másik követi. Ha egy módosítás a két falat különbözőképpen mozgatná, a művelet elutasításra kerül, és semmi nem változik.

- `WALLHOLD`: zárjon egy falat egy másikhoz. Az `A` először a másik fal vonalára illeszti, a `K` megtartja a jelenlegi távolságot.
- `WALLHOLDDIM`: zárja két párhuzamos fal közötti távolságot.
- `WALLGRID`: zárjon egy falat egy rácsvonalhoz (egy rácsrétegen lévő vonalhoz, amelynek címkéje szövegként az egyik végén van), vagy a vonal mentén, vagy úgy, hogy az egyik vége rajta legyen. A vonal mentén zárt fal megtartja a tőle mért távolságát. A rácsvonalat a `GRIDMOVE` paranccsal mozgatva a fal egészben követi, a csatlakozó falaival együtt.
- A `WALLHOLDS` listázza a zárakat. A `WALLUNHOLD` levonja a zárakat egy falról.
- Minden zárat kis lakat jelöl a tervrajzon: a zárt fal közepe mellett, vagy a rácsvonalra zárt vég mellett. Kattintson a lakatra, hogy levegye azt a zárat.

## Ami még nincs kész

A zárak a falak középvonalát használják. A falaknak itt nincsenek rétegeik, így csomópontban nincs rétegprioritás, és a falak nem görbülnek (lásd fent az ívek). Még senki nem próbálta ezeket az eszközöket nagy rajzon, és más CAD-programban nem ellenőrizték őket.

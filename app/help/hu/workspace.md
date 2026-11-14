---
title: A CadCraft képernyője
summary: Körséta a rajzoló alkalmazás minden sávján, paneljén és lapján, a képernyőn látható nevükkel.
keywords: képernyő, felület, eszköztár, szalag, panelek, parancssor, állapotsor, lapok, rajzlaplapok, tulajdonságok, rétegek panel, bemutató
from: b5a33388
---

A képernyő hét részből áll. Fentről lefelé: az alkalmazássáv, az eszköztár, a rajzterület mindkét oldalán egy-egy panellel, a rajz alatti lapok, a parancssor és az állapotsor.

## Az alkalmazássáv

A legfelső vékony sáv a webhelyhez tartozik, nem a rajzhoz. Megmutatja a CadCraft jelét, az alkalmazás nevét, hogy melyik verziót futtatja, egy hivatkozást az alkalmazás oldalára, egy {{ui:Súgó}} gombot (vagy {{key:F1}}), egy {{ui:Mentés offline használatra}} gombot, egy {{ui:Teljes képernyő}} gombot és két téma gombot, a {{ui:Papír}} és a {{ui:Modell}} gombot.

A {{ui:Beállítások}} gomb (fogaskerék) a CadCraft saját beállításait és az összes alkalmazásban közösöket tartalmazza: lásd [A CadCraft beállításai](topic:settings).

A {{ui:Mentés offline használatra}} a CadCraft egy másolatát, a DWG-olvasóval együtt, ebben a böngészőben tartja, hogy kapcsolat nélkül is megnyíljon. A felirata mutatja az állapotot: „Mentés: N / M”, „Offline használatra kész”, „Nem sikerült menteni” vagy „Az offline mód nem érhető el”. Lásd: [Munka offline](common:offline).

:::note
Az alkalmazássáv {{ui:Papír}} és {{ui:Modell}} gombja csak a képernyő színeit változtatja: a {{ui:Papír}} világos, a {{ui:Modell}} sötét téma. Semmi közük a rajz alatti {{ui:Modell}} laphoz, amely a rajz és a rajzlapjai között vált.
:::

A {{ui:Teljes képernyő}} gomb, vagy a {{key:Ctrl+Shift+F}} (a Control billentyű minden számítógépen, Macen is) három képernyőmód között lépked: normál, teljes képernyő, és teljes képernyő elrejtett sávokkal. Elrejtett sávoknál a visszahozásukhoz vigye az egérmutatót a képernyő felső széléhez.

## Az eszköztár

Az alkalmazássáv alatt van az eszköztár. Minden gomb parancsot futtat, pontosan úgy, mintha beírta volna, így a parancssor mindkét módon ugyanazokat a kérdéseket teszi fel. Vigye az egérmutatót egy gombra, hogy lássa a parancs álnevét. A csoportok:

| Csoport | Gombok |
|---|---|
| Fájl | {{ui:Új}}, {{ui:Megnyitás}}, {{ui:Mentés}}, {{ui:Mentés másként}}, {{ui:Plottolás}} |
| Rajzolás | {{ui:Vonal}}, {{ui:Polivonal}}, {{ui:Kör}}, {{ui:Ív}}, {{ui:Téglalap}}, {{ui:Sokszög}}, {{ui:Ellipszis}}, {{ui:Szöveg}}, {{ui:Bekezdés}}, {{ui:Sraffozás}}, és {{ui:Továbbiak}}: {{ui:Pont}}, {{ui:Szerkesztővonal}} és {{ui:Sugár}} (lásd [Szerkesztővonalak és sugarak](topic:construction-lines)) |
| Módosítás | {{ui:Mozgatás}}, {{ui:Másolás}}, {{ui:Forgatás}}, {{ui:Léptékezés}}, {{ui:Tükrözés}}, {{ui:Nyújtás}}, {{ui:Párhuzamos}}, {{ui:Vágás}}, {{ui:Nyújtás}}, {{ui:Lekerekítés}}, {{ui:Letörés}}, {{ui:Felbontás}}, {{ui:Törlés}}, és {{ui:Továbbiak}}: {{ui:Sokszorozás}}, {{ui:Egyesítés}}, {{ui:Tulajdonságok egyeztetése}}, {{ui:Törés}} és {{ui:Hosszabbítás}} |
| Feliratozás | {{ui:Vízszintes-függőleges}}, {{ui:Párhuzamos}}, {{ui:Szög}}, {{ui:Sugár}}, {{ui:Átmérő}} (méretek), {{ui:Vezetővonal}} (többszörös vezetővonal), és {{ui:Továbbiak}}: {{ui:Folytatólagos méret}}, {{ui:Alapvonalas méret}} és {{ui:Revíziófelhő}} |
| Parametrikus | {{ui:Automatikus}}, {{ui:Kényszerezés}}, {{ui:Méret}}, {{ui:Paraméterek}}, és {{ui:Továbbiak}} az egyes kényszerekkel (lásd [Rajz kényszerezése](topic:constraints)) |
| Blokkok | {{ui:Készítés}}, {{ui:Beszúrás}}, {{ui:Könyvtár}}, és {{ui:Továbbiak}}: {{ui:Blokk szerkesztése}} és {{ui:Attribútum meghatározása}} |
| Rajzlapok | {{ui:Új rajzlap}}, {{ui:Nézetablak}} |
| Szerkesztés | {{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}} (a vágólapra), {{ui:Beillesztés}}, és {{ui:Továbbiak}}: egy menü a {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés és mozgatás}}, {{ui:Törlés}}, {{ui:Összes kijelölése}}, {{ui:Kijelölés megszüntetése}}, {{ui:Gyorskijelölés}}, {{ui:Hasonlók kijelölése}} és {{ui:Keresés és csere}} parancsokkal, mindegyik a billentyűjével |
| Nézet | {{ui:Kiterjedés}}, {{ui:Ablak}}, {{ui:Előző}}, és {{ui:Továbbiak}}: {{ui:Távolság mérése}}, {{ui:Terület}}, {{ui:Mérés (sugár, szög …)}}, valamint a képernyő felosztása: {{ui:Felosztás egymás mellett}}, {{ui:Felosztás egymás alatt}}, {{ui:Négy panel}}, {{ui:Egy panel}} (lásd [A képernyő felosztása](topic:split-screen)), és {{ui:A nézet elfordítása 90°-kal balra}}, {{ui:A nézet elfordítása 90°-kal jobbra}}, {{ui:Vissza a világhoz}} (lásd [A nézet elfordítása](topic:ucs-and-turned-view)) |

A {{ui:Módosítás}} csoport {{ui:Másolás}} gombja a {{cmd:COPY}} parancs (alappont, majd hová kerüljön az egyes másolat); a {{ui:Szerkesztés}} csoport {{ui:Másolás}} gombja a vágólapra teszi az objektumokat a {{ui:Beillesztés}} számára. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste). A futó parancs gombja kiemelve marad a parancs végéig. Az elemleírások a Windows billentyűparancsait nevezik meg („Ctrl+O”); Macen a {{key:Mod+O}} is működik.

Alacsony ablakban (például 125%-os vagy nagyobb skálázású laptopkijelzőn) az eszköztár sosem veszi át a rajz helyét: ha a rajz túl kevés magasságot kapna, a gombok elhagyják az ikonjaik alatti szavakat és a csoportneveket (a nevüket az egérmutatóval érheti el), és ha ez sem elég, az eszköztár egyetlen, oldalra görgethető sorrá válik. Magasabb ablak visszahozza a szavakat.

## A bal oldali panel

A bal oldali panelnek három szakasza van.

- **{{ui:Rétegek}}.** A rajz minden rétege, az aktuálison kitöltött ponttal. Egy névre kattintva az a réteg lesz az aktuális. Minden sorban van egy színminta (kattintson rá szín választásához) és négy gomb: be/ki (szem), befagyasztás (hópehely), zárolás (lakat) és plottolás (nyomtató). Az {{ui:Új réteg}} egy mezőt nyit újabb hozzáadásához. Lásd: [Rajz rendszerezése rétegekkel](topic:layers).
- **{{ui:Blokkok}}.** A rajzban meghatározott blokkok, hogy hányszor használt mindegyik, és mindegyikhez egy {{ui:Beszúrás}} gomb. Lásd: [Blokkok készítése és beszúrása](topic:blocks).
- **{{ui:Rajz}}.** A megnyitott fájl adatai: név („(módosítva)” jelzéssel, ha vannak mentetlen módosítások), formátum, méret, mértékegység, az objektumok, rétegek, blokkok és rajzlapok száma. Fájl megnyitása után a „A fájl névjegye” mező felsorol mindent, amit a CadCraft nem tudott megjeleníteni vagy konvertálnia kellett.

## A rajzterület

A képernyő közepe a rajz. Az egérmutató célkereszt. Amikor a CadCraft pontot kér, egy kis jelölő és egy felirat („Végpont”, „Felezőpont”) mutatja, hol landol az objektumfogás. Amikor objektumokat kér, a célkereszten kijelölőmező van, és az alatta lévő objektumok kivilágosodnak.

Ha a rajz üres, egy „Rajzolás indítása” kártya mutat néhány első parancsot. Eltűnik, amint parancsot futtat vagy fájlt nyit meg. Egy DWG- vagy DXF-fájlt ennek a területnek bárhová ejtve megnyithat.

## A rajz alatti lapok

A rajz alatt vannak a lapok: először a {{ui:Modell}}, aztán a {{ui:3D}}, majd rajzlaponként (elrendezésenként) egy, végül egy {{ui:+}} gomb.

- A {{ui:Modell}} maga a rajz, teljes méretben, rajzegységekben.
- A {{ui:3D}} a földön fekvő rajzot és a belőle készített testeket mutatja. Amíg látszik, az eszköztáron a rajzcsoportok helyett egy {{ui:3D}} csoport van. Lásd: [Modellezés 3D-ben](topic:3d-solids).
- Minden rajzlap-lap egy papírlap rajzfejjel és a modellre néző nézetablakokkal. Amit ott rajzol, papíregységben (milliméter vagy hüvelyk) van. Kattintson duplán egy nézetablakon belül, hogy a modellen a nézetablakon át dolgozzon (lásd [Munka a modellen nézetablakon át](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). A hosszú rajzlapnév a lapján rövidítve látszik; a teljes nevéhez vigye rá az egérmutatót. Sok rajzlapnál a {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Rajzlaplapok}} › {{ui:Csak rajzlapszámok}} csak az egyes rajzlapok számát (A-101) mutatja a lapján.
- A {{ui:+}} új rajzlapot készít kerettel, rajzfejjel és egy nézetablakkal. Ugyanaz, mint a {{cmd:LAYOUT}} parancs.
- Egy rajzlap-lapra duplán kattintva átnevezheti. Fókuszált lapnál a {{key:Left}} és a {{key:Right}} lapok között lép.

Minden lap megtartja a saját nagyítását és eltolását. Lásd: [Rajzlap beállítása](topic:sheets-and-viewports).

## A jobb oldali panel: Tulajdonságok

A jobb oldali panel a kijelöléstől függően változik.

- **Nincs kijelölve semmi, a {{ui:Modell}} lapon:** a címsor {{ui:Jelenlegi beállítások}}. Itt állíthatja be az új objektumok {{ui:Réteg}}ét, {{ui:Szín}}ét és {{ui:Szövegmagasság}}át, a rajz {{ui:Mértékegységek}}ét, valamint az új méretek méreteit ({{ui:Szövegmagasság}}, {{ui:Nyílméret}}, {{ui:Tizedeshelyek}}, {{ui:Általános lépték}}).
- **Nincs kijelölve semmi, egy rajzlapon:** a címsor „Rajzlap:” és a rajzlap neve. Átnevezheti a rajzlapot, módosíthatja a {{ui:Papír}} és a {{ui:Tájolás}} értékét, {{ui:A rajzlap plottolása}} vagy {{ui:A rajzlap törlése}}. Alatta az új objektumok beállításai következnek.
- **Egy objektum van kijelölve:** a címsor a típusa (Vonal, Kör, Szöveg, Méret, Nézetablak …), majd a rétege, színe és geometriája. Írjon be új értéket, és nyomja meg az {{key:Enter}} billentyűt a módosításhoz.
- **Több objektum van kijelölve:** hány darab, és a közös {{ui:Réteg}}ük és {{ui:Szín}}ük. Bármelyik módosítása mindet módosítja. Az „Eltérő” azt jelenti, hogy különböznek.

Lásd: [Szerkesztés fogópontokkal és a Tulajdonságokkal](topic:grips-and-properties).

Alatta a {{ui:Paraméterek}} panel nyílik meg, ha a {{ui:Paraméterek}} lehetőséget választja vagy beírja: {{cmd:PARAMETERS}}: minden paraméter és méretkényszer egyetlen táblázatban. Lásd: [Paraméterek és egyenletek használata](topic:parameters).

## A parancssor

Alul van a parancssor: felül az előzmények arról, amit tett, alatta a kérdés.

- A kérdés felirata `Parancs:`, ha semmi nem fut. Futó parancsnál a kérdést mutatja, az opcióit szögletes zárójelben, az alapértelmezést pedig hegyes zárójelben, például `Adja meg a kör sugarát [Átmérő (D)] <500>:`.
- Ahogy a parancs nevét gépeli, jobbra egy javaslat mutatja az illeszkedő parancsokat. A {{key:Tab}} elfogadja az elsőt. A „Nincs ilyen parancs” azt jelenti, hogy semmi nem illeszkedik.
- Az {{key:Up}} és a {{key:Down}} visszahozza a korábban beírt sorokat.
- Az előzmények az utolsó 400 sort őrzik. Itt jelennek meg a parancsok üzenetei, a {{cmd:DIST}} és a {{cmd:LIST}} mérései, valamint a mentési és plottolási jelentések.

## Az állapotsor

A legalsó sor az állapotsor.

- **Koordináták** balra: a célkereszt X és Y értéke. Amíg egy parancsnak van alappontja, az attól mért távolságot és szöget is mutatja, például `Δ 1200 < 90°`.
- **Üzenetek** középen, például „Ortho be” vagy „Aktuális réteg: Walls”. Néhány másodperc múlva elhalványulnak.
- **{{ui:Rács}}**, **{{ui:Ortho}}**, **{{ui:Polár}}**, **{{ui:Fogás}}**, **{{ui:Követés}}**, **{{ui:Dyn}}** és **{{ui:LWT}}** jobbra. Mindegyik kapcsoló; a lenyomott gomb be van kapcsolva. Az {{ui:LWT}} a vonalvastagságokat mutatja a képernyőn (lásd [Vonalvastagságok és vonaltípusok](topic:units-papers-scales#line-weights-and-linetypes)). A {{ui:Fogás}} melletti kis nyíl megnyitja az {{ui:Objektumfogások}} listát, ahol kipipálja, melyik fogás aktív. Lásd: [Fogás az objektumok pontjaira](topic:object-snaps).

## A Plottolás PDF-be párbeszédpanel

A {{ui:Plottolás}} (vagy {{key:Mod+P}}) megnyitja a {{ui:Plottolás PDF-be}} párbeszédpanelt, balra a beállításokkal, jobbra élő előnézettel. Lásd: [Plottolás PDF-be](topic:plot-pdf).

## A súgó

Az {{key:F1}} vagy a {{ui:Súgó}} gomb oldalpanelként nyitja meg ezt a súgót; a rajz mellette használható marad. Kapcsolat nélkül is működik. Az {{key:F1}} még egyszer, vagy az {{key:Esc}} a panelen belül bezárja. Lásd: [A súgó használata](common:help).

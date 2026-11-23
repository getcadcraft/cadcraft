---
title: CadCraft beállításai
summary: A rajzoló alkalmazás beállításai: kurzorméret, hova lóg a beillesztett másolat a kurzortól, mit tesz a kattintás a kijelöléssel, hány sort használ az eszköztár, hol áll a parancssor és milyen magas, a tömör felső terület, és a sarokjelző.
keywords: parancssor, lebegő parancssor, lebegtetés, rögzítés, egy sor, f2, parancselőzmények, commandline, cmdline, toparea, felső terület, tömör, cursorsize, teljes képernyős kereszthajszál, szélről szélre, eszköztársorok, eszköztár megjelenítése, ctrl f1, beállítások, preferenciák, opciók, sarokjelző, nézetkocka, tengelyikon, ucs ikon, kurzor, kereszthajszál, választógomb, beillesztési pont, bázispont, objektumok kattintása, kijelölés, pickadd, shift, visszaállítás
from: ae1a81db
---

Nyissa meg a {{ui:Beállítások}} menüt az alkalmazássáv fogaskerekével vagy a {{key:Mod+,}} billentyűkombinációval. Az első lap, a {{ui:CadCraft}}, az alkalmazáshoz tartozó beállításokat tartalmazza; a {{ui:Általános}} az összes alkalmazás közös beállításait (téma, panelszöveg-méret és -szélesség, az eszköztár megjelenése és sorrendje). A CadCraft beállításai csak az alkalmazásban léteznek: itt módosítja őket, és ez a böngésző megjegyzi. A {{ui:CadCraft-beállítások visszaállítása}} mindegyiket a kezdeti értékére állítja.

## Kurzor

**Kicsi**, **Közepes** (a kezdeti), **Nagy** vagy **Teljes képernyő**: a kereszthajszál és a kijelölőkocka mérete a rajzban. A nagyobb kijelölőkocka a kicsit távolabbi objektumokat is kiválasztja, ez érintőképernyőn vagy nagyon finom rajzon segít.

A **Teljes képernyő** a kereszthajszál két vonalát a rajz szélétől a szélig húzza, akkor is, ha nincs parancs futva, így egészen a nézet végéig ellenőrizheti szemmel, hogy két dolog egy vonalban van-e. Ha a nézet el van osztva, a vonalak abban a panelban maradnak, amelyben dolgozik. Ugyanaz, mint az AutoCAD {{cmd:CURSORSIZE}} 100 beállítása: írja be a {{cmd:CURSORSIZE}} parancsot és a 100-at a teljes képernyőhöz; a kisebb szám a legközelebbi méretet választja (5 alatt Kicsi, 5 és 9 között Közepes, 10 és 99 között Nagy).

## Beillesztési pont

Hogy a beillesztett másolat hol lóg a kurzorról a {{key:Mod+V}} ({{cmd:PASTECLIP}}) után, amíg nem kattint:

- **Bal alsó sarok** (a kezdeti): a másolt objektumok határolótéglalapjának bal alsó sarka, ahogy az AutoCAD-ben.
- **Középpont**: a határolótéglalapjuk közepe. Szimbólum szemmel való elhelyezéséhez kényelmes.

A `COPYBASE` paranccsal készült másolat mindig a megadott bázisponton lóg. A {{ui:Beillesztés helyben}} ({{key:Mod+Shift+V}}) figyelmen kívül hagyja ezt a beállítást: megtartja az eredeti koordinátákat. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

## Objektumok kattintása

Mit tesz a rajzban való kattintás a kijelöléssel, ha nem fut parancs:

- **Hozzáadja a kijelöléshez** (a kezdeti): minden kattintás vagy ablak hozzáad objektumokat; a {{key:Shift}}+kattintás vagy a {{key:Shift}}+ablak kiveszi őket.
- **Lecseréli a kijelölést**: a kattintás vagy ablak csak azt jelöli ki, amit éppen kiválaszt. A {{key:Shift}}+kattintás hozzáad egy objektumot, vagy kivesz egy már kijelöltet; a {{key:Shift}}+ablak hozzáad.

A parancson belüli `Select objects:` kérdésnél a kattintások mindig hozzáadnak (a {{key:Shift}} eltávolít), bármit is mond ez a beállítás. Lásd: [Objektumok kijelölése](topic:select-objects).

## Kattintás üres helyre

Mit tesz a kattintás olyan helyen, ahol nincs objektum, ha nem fut parancs. Mindkét esetben kijelölési ablakot indít (a második kattintás fejezi be).

- **Törli a kijelölést** (a kezdeti): ami ki volt jelölve, az elengedésre kerül. Tartsa lenyomva a {{key:Shift}} billentyűt kattintás közben, hogy megtartsa.
- **Megtartja a kijelölést**: a kijelölés marad, ahogy más rajzprogramokban; az ablak hozzáadja. Az {{key:Esc}} billentyűvel törölheti a kijelölést.

## Húzás a kijelöléshez

Mit rajzol az üres helyen lenyomva tartott és húzott egér:

- **Lasszó** (a kezdeti): szabadkézi körvonal. Ha jobbra húz először, a teljesen benne lévőket jelöli ki, ha balra először, azokat, amiket érint; húzás közben a {{key:Space}} billentyű az ablak, a metszés és a kerítés között vált.
- **Téglalap**: a doboz, mintha két kattintással rajzolná meg.

A {{cmd:LASSOMODE}} `1` vagy `0` ugyanezt állítja be. Lásd: [Lasszós kijelölés](topic:lasso-selection).

## Húzás a levágáshoz és nyújtáshoz

Mit tesz az üres helyen lenyomott és húzott mutató a {{cmd:TRIM}} és az {{cmd:EXTEND}} parancsban:

- **Útvonal** (a kezdeti): szabadkézi útvonal; minden darab, amelyet keresztez, levágódik (vagy megnyúlik).
- **Ablak**: doboz; minden darab, amelyet érint, levágódik, ahogy a `C` opció teszi.

Lásd: [Levágás és nyújtás](topic:trim-and-extend).

## Az eszköztár helye

{{ui:CadCraft}} › {{ui:Az eszköztár helye}}: **Felül** (a kezdeti, ahogy mindig volt), **Alul**, **Balra** vagy **Jobbra**. Bal vagy jobb oldalon az eszközcsoportok oszlopba rendeződnek, amely görgethető, ha magasabb az ablaknál, a gombok pedig két-három sorba törnek. A választás a beállításokkal együtt mentődik, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) pedig a parancssorból állítja. A {{ui:Általános}} › {{ui:Az elrendezés visszaállítása}} az eszköztárat újra felülre teszi.

A menüstílusok sávjai az eszköztáron belül vannak, és vele együtt mozognak, de a {{ui:Szalag}} stílus felül vagy alul fut végig: oldalon keskeny, görgethető oszlopot kap. Telefonon az eszköztár ott marad, ahol a telefonos elrendezés helyezi.

## Eszköztársorok

Hány sort használnak az eszközök a rajz fölött, a CadCraft eszköztárában és a {{ui:Klasszikus rajzoló}} és {{ui:Szalag}} stílusban:

- **Ablakhoz igazítás** (a kezdeti): az eszközök az ablak szélességéhez törnek.
- **2 sor**: legfeljebb két sor. Ha az eszközök ebben a szélességben két sorba vagy kevesebbe férnek, egyszerűen törnek; egyébként két sorban állnak, vízszintesen görgethetően.
- **1 sor**: egy sor, amely vízszintesen görgethető, ez hagyja a legtöbb helyet a rajznak.

A {{key:Shift+Ctrl+F1}} a három között lépeget, a {{cmd:TOOLBARROWS}} pedig beállítja. A gombok megjelenítése (ikon és szöveg, csak ikon, vagy csak szöveg) a {{ui:Általános}} › {{ui:Eszköztár}} beállítása; a {{key:Ctrl+F1}} ezen lépeget, a {{cmd:TOOLBAR}} pedig beállítja.

## Parancssor

A parancssor maradhat a rajz alatt lehorgonyozva, ahogy eddig volt, vagy lebeghet a rajz fölött, és lehet akár egy sor magas is.

- **Lebegtetés.** Húzza a bal végénél lévő fogantyút a rajzba, vagy válassza a {{ui:Lebegtetés a rajz fölött}} lehetőséget a {{ui:Parancssor beállításai}} menüben (a jobb végénél lévő három pont). A fogantyút újra húzva mozgathatja; a helye megmarad, amikor az ablak mérete változik. A jobb szélét húzva szélesebbé vagy keskenyebbé teheti. Ejtse az állapotsorra, vagy válassza a {{ui:Dokkolás alulra}} lehetőséget, hogy újra lehorgonyozza.
- **Vékonyabbá vagy magasabbá tétel.** Húzza a felső szélét: minden lépés egy előzménysor. Nullára húzva **egysoros parancssor** lesz: csak a kérdés és amit beír, egy új üzenet pedig rövid időre megjelenik fölötte. A felső széle kétszeri kattintása az egy sor és az Ön korábbi magassága között vált.
- **Az előzmények.** Az {{key:F2}} billentyű, vagy a parancssor órá gombja ({{ui:Parancselőzmények (F2)}}) megnyitja a teljes előzményt a sor fölött (a sor alatt, ha a lebegő sor az ablak tetejéhez közel van). A gépelés továbbra is a parancssorba megy; a {{key:PageUp}} és a {{key:PageDown}} görgeti az előzményt, az {{key:Esc}}, az {{key:F2}} vagy egy másik helyre kattintás bezárja. A saját F2-re rendelt billentyűje ezt felülírja.
- **Billentyűzetről.** A fogantyú egy gomb: ha fókuszban van, a nyílbillentyűkkel mozgatható a lebegő parancssor (a {{key:Shift}} billentyűvel nagyobb lépésekben); a {{key:Up}} lebegtet egy lehorgonyozott sort, a {{key:Down}} az alsó szélen lehorgonyozza. A felső szél elválasztó: a {{key:Up}} és a {{key:Down}} sorokat ad hozzá vagy vesz el, a {{key:Home}} egysorossá teszi, az {{key:End}} a legmagasabbá. A képernyőolvasók minden üzenetet hallanak, az egysoros parancssorban is.

A {{ui:CadCraft}} › {{ui:Parancssor}} ugyanezeket a választásokat kínálja: {{ui:Alul rögzítve}} vagy {{ui:Lebegő}}, {{ui:Megjelenített előzménysorok}} (0-tól 12-ig) és {{ui:Szabványos magasság}}. A {{cmd:COMMANDLINE}} (`CMDLINE`) ezeket a parancssorból állítja be. A hely és a magasság a CadCraft számára ebben a böngészőben marad meg a többi elrendezéssel együtt, így egy mentett munkakörnyezet is hordozza; a {{ui:Általános}} › {{ui:Az elrendezés visszaállítása}} a parancssort újra az alapmagasságán horgonyozza le. Telefonon a parancssor lehorgonyozva marad egy sor előzménnyel; az előzménygomb ott is működik.

A {{ui:CadCraft}} › {{ui:Opcióbetűk}} tárolja az opciókhoz választott betűket: az {{ui:Szerkesztés…}} megnyitja a fájlt, az {{ui:Importálás…}} egy Ön által választott fájllal helyettesíti, az {{ui:Exportálás}} elmenti. Lásd: [Saját betűk megadása a parancsopciókhoz](topic:option-letters).

Ha az ablak alacsony, és az elrendezés-ellenőrzés szorosabb elrendezést ajánl, annak {{ui:Igen}} gombja a parancssort is egysorossá teszi, ha a rajz az eszköztárak után még mindig rövid.

## Felső terület

{{ui:CadCraft}} › {{ui:Felső terület}}: **Standard** (a kezdeti) vagy **Tömör**. A tömör a rajz fölötti sávokat kicsin tartja minden menüstílusban: a csoportnevek és az ikonok alatti szavak eltűnnek (a szerepleírások és a képernyőolvasók továbbra is megkapják őket), a gombok szorosabbak. Működik a [Eszköztársorok](topic:settings#toolbar-rows) beállítással: a Tömör és az **1 sor** adja a legtöbb helyet a rajznak. A {{cmd:TOPAREA}} állítja be.

## Sarokjelző

Ami a rajz sarkában látszik:

- **Automatikus** (a kezdeti): a tengelyikon a {{ui:Modell}} lapon és a nézetkocka a {{ui:3D}} lapon.
- **Tengelyikon**: az X és Y jel a {{ui:Modell}} lap bal alsó sarkában, és egy kis X, Y és Z jel a {{ui:3D}} lapon.
- **Nézetkocka**: egy kocka mindkét lap jobb felső sarkában. A {{ui:Modell}} lapon felülről mutatja a rajzot, és egy másik lapra, élre vagy sarokra kattintva megnyílik a {{ui:3D}} lap onnan nézve. A 3D lapon a nézettel együtt fordul: kattintásra oldalról néz, húzással körbeforgat, a házikó pedig visszaviszi az izometrikus nézetre. Lásd: [Modell 3D-ben](topic:3d-solids).
- **Nincs**: semmi a sarokban.

A lapokon egyik sem látszik.

## A kijelölés hossza és területe

- **Az állapotsorban** (a kezdeti): ha objektumok vannak kijelölve, az állapotsor a teljes hosszukat és a zártak teljes területét mutatja. Lásd: [A kijelölés összesítői](topic:properties-panel#totals-of-a-selection).
- **Elrejtve**: az állapotsor kihagyja őket. A Tulajdonságok többobjektumos kijelölésnél továbbra is mutatja.

## Rács, Ortho és fogások

Ezek nincsenek a párbeszédpanelen: a {{ui:Rács}}, {{ui:Ortho}} és {{ui:Fogás}} gombok az állapotsorban (vagy az {{key:F7}}, {{key:F8}}, {{key:F3}} billentyűk), valamint a mellettük lévő objektumfogás-lista. Ezek a beállítások megmaradnak, ahogy elhagyja őket. Lásd: [Fogás az objektumok pontjaihoz](topic:object-snaps).

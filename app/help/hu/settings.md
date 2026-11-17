---
title: CadCraft beállításai
summary: A rajzoló alkalmazáshoz tartozó beállítások: kurzorméret, hol lóg a beillesztett másolat a kurzortól, mit tesz a kattintás a kijelöléssel, hány sort használ az eszköztár, hol áll a parancssor és milyen magas, a tömör felső terület, és a sarokjelző.
keywords: parancssor, lebegő parancssor, lebegtetés, dokkolás, egy sor, f2, parancselőzmények, commandline, cmdline, toparea, felső terület, tömör, cursorsize, teljes képernyős kereszt, teljes képernyős kurzor, szélről szélre, eszköztársorok, eszköztár megjelenítése, ctrl f1, beállítások, preferenciák, opciók, sarokjelző, nézetkocka, tengelyikon, ucs-ikon, kurzor, kereszthaj, kijelölőmező, beillesztési pont, alappont, objektumokra kattintás, kijelölés, pickadd, shift, visszaállítás
from: 0896eb42
---

Nyissa meg a {{ui:Beállítások}} párbeszédpanelt az alkalmazássávban lévő fogaskerékkel vagy a {{key:Mod+,}} billentyűkkel. Az első lap, a {{ui:CadCraft}}, azokat a beállításokat tartalmazza, amelyek ehhez az alkalmazáshoz tartoznak; az {{ui:Általános}} lap azokat, amelyeket a család minden alkalmazása közösen használ (téma, panelszöveg mérete és szélessége, az eszköztár megjelenése és sorrendje). A CadCraft beállításai csak ebben az alkalmazásban léteznek: itt módosítja őket, és ez a böngésző megjegyzi őket. A {{ui:CadCraft-beállítások visszaállítása}} mindet visszaállítja a kiindulási értékre.

## Kurzor

**Kicsi**, **Közepes** (alapértelmezett), **Nagy** vagy **Teljes képernyő**: a kereszt és a kijelölőmező mérete a rajzban. A nagyobb kijelölőmező kicsit távolabbról is kijelöl objektumokat, ami érintőképernyőn vagy nagyon finom rajzon segít.

A **Teljes képernyő** a kereszt két vonalát a rajz szélétől szélig húzza, akkor is, ha nincs parancs futásban, így szemmel ellenőrizheti, hogy két dolog az egész nézeten át egy vonalba esik-e. Osztott nézetben a vonalak abban az ablaktáblában maradnak, amelyben dolgozik. Ez megegyezik az AutoCAD {{cmd:CURSORSIZE}} 100 beállításával: írja be a {{cmd:CURSORSIZE}} parancsot, majd a 100-at a teljes képernyőhöz; a kisebb szám a legközelebbi méretet választja (5 alatt Kicsi, 5 és 9 között Közepes, 10 és 99 között Nagy).

## Beillesztési pont

Az a hely, ahol a beillesztett másolat a kurzorról lóg a {{key:Mod+V}} ({{cmd:PASTECLIP}}) után, amíg nem kattint:

- **Bal alsó sarok** (alapértelmezett): a másolt objektumok kiterjedésének bal alsó sarka, ahogy az AutoCAD-ben.
- **Középpont**: a kiterjedésük közepe. Jó jelkép szemmérték szerinti elhelyezéséhez.

A `COPYBASE` parancsszal készített másolat mindig a kiválasztott alappontról lóg. A {{ui:Beillesztés helyben}} ({{key:Mod+Shift+V}}) figyelmen kívül hagyja ezt a beállítást: megtartja az eredeti koordinátákat. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

## Objektumokra kattintás

Mit csinál a rajzban történő kattintás a kijelöléssel, ha nincs parancs futásban:

- **Hozzáadja a kijelöléshez** (alapértelmezett): minden kattintás vagy ablak hozzáad objektumokat; a {{key:Shift}}+kattintás vagy a {{key:Shift}}+ablak kiveszi őket.
- **Felváltja a kijelölést**: a kattintás vagy ablak csak azt jelöli ki, amit kiválaszt. A {{key:Shift}}+kattintás hozzáad egy objektumot, vagy kiveszi azt, ami már ki van jelölve; a {{key:Shift}}+ablak hozzáad.

A parancson belüli `Jelölje ki az objektumokat:` promptnál a kattintások mindig hozzáadnak (és a {{key:Shift}} eltávolít), bármit is mond ez a beállítás. Lásd: [Objektumok kijelölése](topic:select-objects).

## Kattintás üres helyre

Mit csinál az olyan kattintás, ahol nincs objektum, ha nincs parancs futásban. Mindkét esetben kijelölőablakot indít (a második kattintás befejezi).

- **Törli a kijelölést** (alapértelmezett): ami ki volt jelölve, elengedi. Tartsa lenyomva a {{key:Shift}} billentyűt a kattintáskor, hogy megtartsa.
- **Megtartja a kijelölést**: a kijelölés megmarad, mint más rajzolóprogramokban; az ablak hozzáadja. A kijelölés törléséhez nyomja meg az {{key:Esc}} billentyűt.

## Húzás kijelöléshez

Mit rajzol az üres helyen lenyomva tartott és húzott egér:

- **Lasszó** (alapértelmezett): szabadkézi körvonal. Jobbra indulva a teljes egészében benne lévőket jelöli ki, balra indulva az érintetteket; a húzás közben lenyomott {{key:Space}} billentyű az ablak, a keresztezés és a kerítés között vált.
- **Téglalap**: a doboz, ahogy egy kattintás és egy második kattintás rajzolja.

A {{cmd:LASSOMODE}} `1` vagy `0` ugyanezt állítja be. Lásd: [Lasszós kijelölés](topic:lasso-selection).

## Húzás vágáshoz és nyújtáshoz

Mit csinál az üres helyen lenyomva tartott és húzott egér a {{cmd:TRIM}} és az {{cmd:EXTEND}} parancsban:

- **Útvonal** (alapértelmezett): szabadkézi útvonal; minden darab, amelyet keresztez, le lesz vágva (vagy meghosszabbítva).
- **Ablak**: egy doboz; minden darab, amelyet érint, le lesz vágva, ahogy a `C` lehetőség teszi.

Lásd: [Vágás és nyújtás](topic:trim-and-extend).

## Az eszköztár helye

{{ui:CadCraft}} › {{ui:Az eszköztár helye}}: **Felül** (alapértelmezett, ahogy eddig is volt), **Alul**, **Bal** vagy **Jobb**. Bal vagy jobb oldalon az eszközcsoportok oszlopba rendeződnek, amely görgethető, ha magasabb az ablaknál, a gombok pedig két-három sorba tördelődnek. A választás a beállításaival együtt mentődik, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) pedig a parancssorból állítja be. A {{ui:Általános}} › {{ui:Az elrendezés visszaállítása}} visszahelyezi az eszköztárat felülre.

A menüstílusok sávjai az eszköztáron belül helyezkednek el, és vele együtt mozognak, de a {{ui:Szalag}} stílus úgy készült, hogy felül vagy alul fusson: oldalt keskeny, görgethető oszlopot kap. Telefonon az eszköztár ott marad, ahová a telefonos elrendezés helyezi.

## Eszköztársorok

Hány sort használnak az eszközök a rajz fölött a CadCraft eszköztárában, valamint a {{ui:Klasszikus rajzoló}} és a {{ui:Szalag}} stílusban:

- **Tördelés a szélességhez** (alapértelmezett): az eszközök az ablak szélességéhez tördelődnek.
- **2 sor**: legfeljebb két sor. Ha az eszközök ezen a szélességen két vagy kevesebb sorba férnek, egyszerűen tördelődnek; ellenkező esetben két sorban helyezkednek el, amely oldalra görgethető.
- **1 sor**: egy sor, amely oldalra görgethető, így a rajznak marad a legtöbb hely.

A {{key:Shift+Ctrl+F1}} billentyűkkel a három között lépegethet, a {{cmd:TOOLBARROWS}} pedig egyet beállít. Hogy a gombok mit mutatnak (ikon és szöveg, csak ikon, vagy csak szöveg), az {{ui:Általános}} › {{ui:Eszköztár}} beállítása; a {{key:Ctrl+F1}} ezen lépeget, a {{cmd:TOOLBAR}} pedig beállítja.

## Parancssor

A parancssor a rajz alatt rögzítve maradhat, ahogy mindig is volt, vagy lebeghet a rajz fölött, és lehet akár egy sor magas is.

- **Lebegtetés.** Húzza a fogópontot a bal végén a rajzba, vagy válassza a {{ui:Lebegtetés a rajz fölött}} lehetőséget a {{ui:Parancssor beállításai}} menüjében (a jobb végén lévő három pont). A fogópontot újra húzva mozgathatja; a helye megmarad, ha az ablak mérete változik. A jobb szélét húzva szélesebbé vagy keskenyebbé teheti. Ejtse az állapotsorra, vagy válassza a {{ui:Dokkolás alulra}} lehetőséget, hogy újra rögzítse.
- **Keskenyebbé vagy magasabbá tétel.** Húzza a felső szélét: minden lépés egy előzménysor. Nulla sorig lehúzva **egysoros parancssor** lesz: csak a prompt és az, amit beír, és egy új üzenet rövid időre megjelenik fölötte. A felső szélen duplán kattintva az egy sor és az eredeti magasság között vált.
- **Az előzmények.** Az {{key:F2}} billentyű, vagy a parancssoron lévő óra alakú gomb ({{ui:Parancselőzmények (F2)}}) megnyitja a teljes előzményt a sor fölött (alatta, ha a sor az ablak teteje közelében lebeg). A gépelés továbbra is a parancssorba megy; a {{key:PageUp}} és a {{key:PageDown}} görgeti az előzményeket, az {{key:Esc}}, az {{key:F2}} vagy a máshova kattintás bezárja. Az F2-re tett saját billentyű ezt felülírja.
- **Billentyűzetről.** A fogópont gomb: fókuszban a nyílbillentyűk mozgatják a lebegő parancssort ({{key:Shift}}-tel nagyobb lépésekben); a {{key:Up}} lebegtet egy rögzítettet, a {{key:Down}} az alsó szélen rögzíti. A felső szél elválasztó: a {{key:Up}} és a {{key:Down}} hozzáad vagy elvesz egy sort, a {{key:Home}} egy sorra állítja, az {{key:End}} a legmagasabbra. A képernyőolvasók továbbra is hallanak minden üzenetet, az egysoros parancssorban is.

A {{ui:CadCraft}} › {{ui:Parancssor}} ugyanezeket a választásokat kínálja: {{ui:Alul rögzítve}} vagy {{ui:Lebegő}}, {{ui:Megjelenített előzménysorok}} (0 és 12 között) és {{ui:Szabványos magasság}}. A {{cmd:COMMANDLINE}} (`CMDLINE`) a parancssorból állítja be őket. A hely és a magasság a böngészőben a CadCraft számára az elrendezés többi részével együtt megmarad, így a mentett munkakörnyezet is hordozza őket; a {{ui:Általános}} › {{ui:Az elrendezés visszaállítása}} a parancssort ismét a szabványos magasságában rögzíti. Telefonon a parancssor egy előzménysorral rögzítve marad; az előzmény gomb ott is működik.

Ha az ablak alacsony, és az elrendezés-ellenőrzés szorosabb elrendezést ajánl, annak {{ui:Igen}} gombja a parancssort is egy sorra állítja, ha a rajz az eszköztárak után is rövid marad.

## Felső terület

{{ui:CadCraft}} › {{ui:Felső terület}}: **Szabványos** (alapértelmezett) vagy **Tömör**. A tömör minden menüstílusban kicsire tartja a rajz fölötti sávokat: a csoportnevek és az ikonok alatti szavak eltűnnek (az eszköztippek és a képernyőolvasók továbbra is megkapják őket), a gombok pedig szorosabbak. Együtt működik az [Eszköztársorok](topic:settings#toolbar-rows) beállítással: a tömör és az **1 sor** adja a legtöbb helyet a rajznak. A {{cmd:TOPAREA}} állítja be.

## Sarokjelző

Mi van a rajz sarkában:

- **Automatikus** (alapértelmezett): a tengelyikon a {{ui:Modell}} lapon, és a nézetkocka a {{ui:3D}} lapon.
- **Tengelyikon**: az X és Y jelölő a {{ui:Modell}} lap bal alsó sarkában, és egy kis X, Y és Z jelölő a {{ui:3D}} lapon.
- **Nézetkocka**: egy kocka mindkét lap jobb felső sarkában. A {{ui:Modell}} lapon a rajzot felülről mutatja, és egy másik lap, él vagy sarok kattintása megnyitja a {{ui:3D}} lapot, arról a nézőpontról. A 3D lapon a nézettel együtt fordul: egy oldalra nézéshez kattintson, a körbeforgatáshoz húzzon, a házikó pedig visszatér az izometrikus nézetbe. Lásd: [Modell 3D-ben](topic:3d-solids).
- **Nincs**: semmi sincs a sarokban.

A rajzlapok egyiket sem mutatják.

## A kijelölés hossza és területe

- **Az állapotsorban** (alapértelmezett): objektumok kijelölése esetén az állapotsor megjeleníti az összes hosszukat és a zárt objektumok összes területét. Lásd: [A kijelölés összesítései](topic:properties-panel#totals-of-a-selection).
- **Elrejtve**: az állapotsor nem mutatja őket. A Tulajdonságok továbbra is megmutatja többi objektumnál.

## Rács, Ortho és fogások

Ezek nincsenek a párbeszédpanelen: a {{ui:Rács}}, {{ui:Ortho}} és {{ui:Fogás}} gombok az állapotsorban (vagy a {{key:F7}}, {{key:F8}}, {{key:F3}} billentyűk), valamint a mellettük lévő objektumfogások listája megjegyződnek, ahogy elhagyja őket. Lásd: [Fogás objektumok pontjaira](topic:object-snaps).

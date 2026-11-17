---
title: Fájlok: mi nyitható meg, mi menthető
summary: A CadCraft által megnyitott, mentett és exportált formátumok, hogy mi marad meg vagy alakul át, és hová kerülnek a fájlok.
keywords: xclip, clip, xclip határ, vágott bekötés, dwg, dxf, pdf, r12, megnyitás, mentés, exportálás, importálás, formátumok, konvertálás, letöltés, saveas, dxfout, mentés másként, dwg mentés, formátum, qsave, xref, xattach, csatolt rajz, külső hivatkozás, bekötés, újratöltés, leválasztás
from: b8c5778d
---

## Áttekintés

| Formátum | Megnyitás | Mentés | Megjegyzések |
|---|---|---|---|
| DXF (szöveges vagy bináris, bármely verzió) | Igen | Igen, DXF R12, DXF 2000 vagy DXF 2000 (bináris) formátumban | A bináris DXF szövegesként nyílik meg, és bináris formátumban menthető vissza. |
| DWG | Igen | Igen, DWG formátumban (AutoCAD 2000, 2004, 2007, 2010, 2013 vagy 2018) | A CadCraft saját DWG-könyvtárával olvasható és írható (AutoCAD R13-tól 2018-ig terjedő fájlok). A DWG-fájl soha nem módosul. A sérült fájlokat, vagy azokat a verziókat, amelyeket az olvasó nem kezel, üzenettel utasítja el. |
| PDF | Egy oldalt hoz be: háttérrajzként vagy objektumokként ([PDF-háttérrajzok](topic:pdf-underlay)) | Igen, plottolással | Rajzlap vektoros PDF-je, vagy a modell adott léptékben. |

Minden megnyitott rajz (vagy a {{ui:Új}} gombbal indított rajz) saját lapot kap a rajzterület fölött; egy még nem módosított új rajz helyett ehhez nem ad új lapot, hanem azt használja. Lapra kattintva válthat, a {{ui:×}} gombbal bezárhatja (ha nem mentett módosítások vannak, a CadCraft előbb rákérdez), vagy egymás mellé rendezheti a nyitott rajzokat: lásd [Képernyő felosztása](topic:split-screen).

## Rajz megnyitása

- Nyomja meg az {{key:Mod+O}} billentyűt, kattintson a {{ui:Megnyitás}} gombra, vagy írja be: `OPEN`, majd válassza ki a fájlt.
- Vagy húzzon egy `.dwg` vagy `.dxf` fájlt a rajzterületre.

A fájlt a böngészőn belül olvassa be a rendszer. Sehová nem töltődik fel. Az előzmények jelentik, hány objektum és réteg érkezett, és mennyi időbe telt; a bal oldali panel {{ui:Rajz}} szakasza megmutatja a formátumot, például „DWG 2018 (AC1032)”.

A DWG-olvasó a CadCraft része, és az oldal betöltése után az első megnyitott DWG-vel együtt töltődik le (néhány száz KB), így külön letöltésre nem kell várni. A fájlt a háttérben olvassa be, így az oldal nagy DWG megnyitása közben is reagál.

A DXF-fájlt körülbelül 4 MB-os darabokban olvassa be, sosem egyetlen szövegblokként, így az 512 MB-nál nagyobb DXF is megnyílik. A korlátot a számítógép memóriája adja: DXF megnyitása közben a fájl méretének nagyjából 16–20-szorosát használja (a mi tesztünkben egy 100 MB-os, körülbelül 690 000 objektumot tartalmazó DXF kb. 1,5 GB-ot használt).

### Mi érkezik be

- Vonalak, ívek, körök, polivonalak (ívszakaszokkal), ellipszisek, pontok, szöveg és többsoros szöveg, kitöltött síkidomok, sraffozások (a szabványos minták a vonalaikkal rajzolva, a többi lapos tónussal), blokkhivatkozások az attribútumaikkal (szerkeszthető értékek; lásd [Blokkattribútumok](topic:attributes)), méretek, valamint az elrendezések a nézetablakaikkal.
- A spline-ok spline-ként érkeznek (fok, vezérlőpontok, csomópontok, súlyok, illesztőpontok); lásd [Spline-ok és polivonalak](topic:splines).
- Egy vezetővonalas és szöveges többszörös vezetővonal CadCraft többszörös vezetővonalként érkezik, és szerkeszthető (lásd {{cmd:MLEADER}}). A többiek (blokkal, több vezetővonallal vagy görbe vonalakkal) úgy jelennek meg, ahogy a másik program rajzolta, és egyben mozognak; az előzmények megadják, hányan vannak.
- A képek (képfájlok) a kép fájlnevével ellátott keretként jelennek meg, amíg a {{cmd:IMAGE}} paranccsal meg nem adja a CadCraftnak a fájlt; lásd [Képek egy rajzban](topic:pictures#show-the-pictures-a-dwg-uses). A kitakarások (wipeout) a keretükként jelennek meg, az alattuk lévő rész pedig látható marad.
- A DWG-ben lévő táblázatok úgy érkeznek be, ahogy a másik program rajzolta.
- A modellterben lévő 3D-s lapok a {{ui:3D}} lapon érkeznek be, nem 2D-s objektumként; a blokkokon belüliek is, blokkhivatkozásonként egyszer a modellben. Blokkban és rajzlapon is lapos körvonalként rajzolódnak. Lásd [Modell 3D-ben](topic:3d-solids).
- A rétegek megtartják színüket, be/ki, befagyasztott, zárolt és plottolási beállításaikat. A DEFPOINTS réteg soha nem plottolódik.
- A méretek valódi, szerkeszthető CadCraft-méretekké válnak, ahol a pontjaik kiolvashatók. Először pontosan úgy jelennek meg, ahogy a másik program rajzolta; amint módosít egyet, a CadCraft a saját stílusában rajzolja újra.
- Minden elrendezés rajzlap-lappá válik. A másik programban minden elrendezésnek van egy rejtett első nézetablaka, amely maga a rajzlap; a CadCraft ezt kihagyja.

### Mi nem érkezik be még

Ami a CadCraft nem tud rajzolni, azt megszámolja, nem találgatja. A bal oldali panel „A fájlról” mezője ezt „Még nem látható:” felirattal sorolja fel, minden objektumtípust és darabszámot megadva. Tipikus esetek a DXF-ben lévő táblázatok, a hálók (mesh) és a blokkokon belüli 3D-s testek. A modellterben lévő 3D-s testek, régiók és testek a 3D lapon látszanak (lásd [Modell 3D-ben](topic:3d-solids#solids-from-other-programs)). A fájlban elforgatott nézetablakok úgy jelennek meg elforgatva, ahogy a fájlban vannak, és mentéskor megtartják elforgatásukat; ugyanígy megmarad az aktuális UCS, a nevesített UCS-ek és az elforgatott nézet.

A szöveg egyetlen Helvetica jellegű betűtípussal rajzolódik. Egy címke, amely az eredeti program keskenyebb betűtípusával egy sorba fér, a CadCraftban két sorba tördelődhet.

## Mentés

Háromféleképpen menthet. Mindegyik másolatot tölt le.

- **Mentés**: nyomja meg az {{key:Mod+S}} billentyűt, kattintson a {{ui:Mentés}} gombra, vagy írja be: `SAVE` (illetve `QSAVE`). A rajz formátumában ment: DWG-ként, ha DWG-t nyitott, DXF-ként, ha DXF-et. A DWG megtartja azt a verziót, amelyben érkezett (a 2018-as fájl 2018-asként mentődik). Új rajz a legutóbb ebben a böngészőben a {{ui:Mentés másként}} ablakban választott formátumot és DWG-verziót használja; ha még nem választott, akkor AutoCAD 2000 formátumú DWG-t.
- **Mentés másként**: nyomja meg az {{key:Mod+Shift+S}} billentyűt, kattintson a {{ui:Mentés másként}} gombra, vagy írja be: `SAVEAS`. A {{ui:Másolat mentése másként}} párbeszédpanel a {{ui:DWG}} formátumot kínálja a {{ui:Verzió}} listával (AutoCAD 2018, 2013, 2010, 2007, 2004 vagy 2000), továbbá a DXF R12 és a {{ui:DXF 2000}} formátumot, mindegyiknél a kapott fájlnévvel; a rajz jelenlegi formátuma és verziója már ki van választva. Kattintson a {{ui:Mentés}} gombra a letöltéshez, vagy a {{ui:Mégse}} gombra (vagy az {{key:Esc}} billentyűre) a mentés nélküli kilépéshez; ilyenkor az előzmények „Nem mentve.” üzenetet írnak. Amit választ, az megmarad: a {{key:Mod+S}} ettől kezdve ezt használja ehhez a rajzhoz, az új rajzok ebben a böngészőben ezzel indulnak.
- **DXFOUT**: írja be: `DXFOUT`. Mindig DXF R12 másolatot tölt le, a következő {{key:Mod+S}} viszont továbbra is a rajz saját formátumában ment.

A böngésző a `<rajz neve>.dwg` vagy `<rajz neve>.dxf` fájlt tölti le. Minden mentés **új letöltés**; a megnyitott fájl soha nem íródik felül és nem változik. Az előzmények ezt megerősítik, például: „Másolat mentve: Plan.dwg (DWG (AutoCAD 2018)). Az eredeti Plan.dxf fájl nem változott.” DXF esetén ezt írja: „(DXF R12, bármely CAD-programmal megnyitható)”. A mellette lévő sorok felsorolják az útközben megváltozott dolgokat.

Ha a CadCraft asztali alkalmazásban fut, a mentés úgy működik, mint más asztali programoknál: a {{key:Mod+S}} visszaírja a rajzot a megnyitott fájlba, annak saját formátumában és verziójában, az előzmények pedig megadják, hová mentette. A {{ui:Mentés másként}} és az exportok a rendszer mentési párbeszédablakát mutatják, a dupla kattintással megnyitott `.dwg`, `.dxf` vagy `.ccsheets` fájl pedig a CadCraftban nyílik meg.

PDF-hez a plottolást használja (lásd alább).

## Mit őriz meg és mit változtat a DWG

A CadCraft a DWG-t a böngészőn belül maga írja, ugyanazzal a DWG-könyvtárral, amellyel olvassa. A verziót a {{ui:Mentés másként}} ablakban válassza ki: az AutoCAD 2000-es formátum (AC1015 fájlverzió) a legtöbb programban megnyílik, a régiek is beleértve; az újabb formátumok (2004, AC1018, egészen 2018-ig, AC1032) a valódi színeket is megőrzik. Semmi sem töltődik fel, és a DWG mentése offline is működik.

A verziók ellenőrzése úgy történik, hogy a mentett fájlokat három másik program DWG-olvasójával és a CadCraft saját olvasójával visszaolvassuk. A CadCraft DWG-jét még nem nyitották meg magában az AutoCAD-ben.

### Mit őriz meg a DWG

- Vonalak, ívek, körök, ellipszisek, pontok, valamint ívszakaszokkal rendelkező polivonalak.
- Egysoros szöveg igazításával és szélességi tényezőjével.
- Többsoros és tördelt szöveg többsoros szövegként. A másik program ugyanabból a szélességből újra tördeli.
- Objektumszínek: rétegről, blokkról, a 255 szabványos szín, valamint a valódi színek a 2004-es és későbbi formátumban.
- Rétegek színükkel, vonaltípusukkal, vonalvastagságukkal, valamint be/ki, befagyasztott, zárolt és plottolási beállításaikkal; az objektumok saját vonaltípusai, vonalvastagságai és vonaltípus-léptékei, a vonaltípus-mintázatok és a rajz vonaltípus-léptéke.
- A rajz mértékegységei és a hosszformátum (tizedes, láb és hüvelyk, törtek…).
- Blokkok alappontjukkal és attribútum-definícióikkal, beleértve a láthatatlan, állandó és előre beállított típusokat.
- Blokkhivatkozások léptékükkel, elforgatásukkal és attribútumértékeikkel.
- Tömör kitöltések, valamint mintázott sraffozások mintájukkal, léptékükkel és szögükkel (a minta saját vonalai, így más programok ugyanazokat a vonalakat rajzolják, mint a CadCraft).
- Méretek valódi méretekként: a másik programok nyújtáskor újra mérik őket. Mindegyik megtartja saját beállításait (szövegmagasság, nyílméret, tizedesjegyek, hosszformátum) és szövegét, és hordozza azt a rajzolt példányt, amely minden DWG-méretnek van.
- Rajzlapok (elrendezések): minden rajzlap papírméretével és mértékegységével, a rajta rajzolt elemekkel, valamint a nézetablakokkal, azok nézetével és léptékével.
- Nevesített nézetek.
- Többszörös vezetővonalak, többszörös vezetővonalként.
- Réteg- és blokknevek úgy, ahogy beírta, kis- és nagybetűkkel. (A DXF R12 nagybetűkkel írja őket.)

### Mit változtat a DWG

Ezek mindegyike megjelenik az előzményekben mentés után, ha a rajzára vonatkozik.

| A CadCraftban | A mentett DWG-ben |
|---|---|
| Valódi színek (színválasztóval kiválasztva), a 2000-es formátumban | A legközelebbi szabványos szín: a 2000-es formátum csak a 255 színt ismeri. A 2004-es vagy újabb formátumban mentve megmaradnak |
| Rajzlap nevesített nézetei | Papírtérbeli nézetek: a DWG nem mondja meg, melyik rajzlaphoz tartoznak, így a fájl újbóli megnyitásakor az első rajzlaphoz kerülnek |
| Többsoros szöveg szélességi tényezővel | Normál betűszélesség: DWG-ben a szélességi tényező csak egysoros szövegre vonatkozik |
| Réteg- vagy blokknév, amely olyan karaktereket tartalmaz, amelyeket a DWG nem enged | Megváltozik: a külső hivatkozásból származó `Base\|Walls` név `Base$0$Walls` lesz (ahogy a külső hivatkozás bekötése nevezi el), a többi karakter `_` lesz |

### Miért R12, és mi alakul át

DXF-ként mentéskor a CadCraft DXF R12-t ír, azt a verziót, amelyet minden CAD-program meg tud nyitni. Régebbi, mint egyes funkciók, ezért néhány dolog egyszerűbb formában íródik:

| A CadCraftban | A mentett R12-fájlban |
|---|---|
| Többsoros szöveg | Soronként egy szövegobjektum |
| Ellipszisek | Az ellipszist követő polivonalak |
| Sraffozások (megnyitott fájlokból) | Csak a körvonalaik |
| Valódi színek (színválasztóval kiválasztva) | A legközelebbi szabványos szín |
| Vonalvastagságok, és az objektumok saját vonaltípus-léptékei | Kimarad: az R12-ben egyik sincs meg (a vonaltípusok megmaradnak) |
| Réteg- és blokknevek | Nagybetűvel íródnak; a szóközök és más karakterek `_`-ra cserélődnek, a nevek 31 karakterre rövidülnek („Title block” helyett `TITLE_BLOCK` lesz) |
| Nem plottolódó beállítású rétegek | A másik programok plottolják őket (a CadCraft megjegyzi a beállítást, ha a rajznak van rajzlapja) |
| Méretek | Valódi méretek saját rajzolt blokkjukkal, így a másik programok úgy mutatják őket, ahogy látja |
| Többszörös vezetővonalak | Az általuk rajzolt vonalak, nyílhegy és szöveg |
| Nevesített nézetek | Megmaradnak, nevük nagybetűvel; a rajzlap nézetei az első rajzlapon térnek vissza |
| Több rajzlap | Az első rajzlap az a papírtér, amelyet minden program mutat; a többi `CCLAYOUT_1`, `CCLAYOUT_2` … nevű blokkként marad meg, amelyeket a CadCraft a fájl megnyitásakor újra rajzlapokká alakít |

Az előzmények felsorolják mindazt, ami a rajzára vonatkozott.

:::tip
Ha egy rajzon több napon át dolgozik, mentse DXF-ként, és a következő alkalommal azt a DXF-et nyissa meg. Minden, amit a CadCraft le tud rajzolni, megmarad az oda-vissza mentésen át, beleértve a méreteket, a blokkokat és az összes rajzlapot.
:::

## Csatolt rajzok (külső hivatkozások)

A {{cmd:XATTACH}} (`XA`, vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Rajz csatolása (xref)}}) egy másik DWG-t vagy DXF-et csatol: válassza ki a fájlt, majd kattintson arra a helyre, ahová kerüljön ({{key:Enter}} billentyűvel a 0,0 pontra kerül). Egyetlen blokként érkezik be, a fájl nevét viselve, a megfelelő léptékben, ha a két rajz mértékegysége eltérő. Rétegei és blokkjai megtartják nevüket, elé a csatolás nevével — `Plan|Walls`, `Plan|Door` —, így sosem keverednek a sajátjaival: a csatolt rétegeket be- és kikapcsolhatja, befagyaszthatja vagy zárolhatja, mint a sajátjait. A csatolás csak olvasható: módosítsa a másik rajzot, és töltse újra. Amit a csatolás rétegein beállít (szín, vonaltípus, vonalvastagság, be/ki, befagyasztás, zárolás, plottolás), megmarad az újratöltéskor, amikor a rajzot DWG-ként menti, miközben a csatolás még csatolás, és amikor egy másik rajz ezt csatolja.

A {{cmd:XREF}} (`XR`): `?` felsorolja a csatolásokat (betöltve vagy nem, melyik fájl, hány hivatkozás); `A` csatol; `R` újratölt egyet a fájljából (válassza ki újra a fájlt: a böngésző magától nem fér hozzá a mappáihoz); `B` köt be egyet (hagyományos blokká és rétegekké válik, `Plan$0$Walls` néven); `D` leválaszt egyet (a hivatkozásai és rétegei eltűnnek). Mindegyik egy visszavonási lépés.

A {{cmd:XCLIP}} (`XC`) a blokkhivatkozásokat és csatolásokat vágja: jelölje ki őket, majd `N` egy új határhoz, azután `R` és két sarok, vagy `P` és a sokszög pontjai ({{key:Enter}} zárja le); a `D` eltávolítja a vágást. Csak az látszik és plottolódik, ami a határon belül van, és a vágás a hivatkozással együtt mozog. A DWG és a DXF 2000 megőrzi a vágásokat; a DXF R12 a hivatkozást egészben menti, és ezt jelzi. Ha olyan csatolást köt be, amelynek vágott hivatkozásai vannak, a {{cmd:XREF}} `B` rákérdez: `A` mindent bekötéssel jár, `C` csak minden hivatkozás vágott részét tartja meg (a vonalak és ívek a határnál vágódnak; a szövegek és beágyazott blokkok megmaradnak, ha beillesztési pontjuk belül van).

A megnyitott rajz olyan fájlokra hivatkozhat, amelyeket a CadCraft nem lát: megmondja, hány nincs betöltve. A {{cmd:XREF}} parancs, az `R` és az egyes fájlok kiválasztásával láthatja őket.

Mentéskor a betöltött csatolás **bekötődik** a fájlba (a másik programok hagyományos blokkoknak és rétegeknek látják `Plan$0$…` néven), és az előzmények ezt jelzik. A be nem töltött csatolás továbbra is hivatkozás marad a fájljára, DWG-ben és DXF-ben egyaránt.

## Megnyitás 3D-ben

{{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Megnyitás a ModelCraftban}} ({{cmd:OPENIN3D}}) a rajzot a 3D-modellező alkalmazásban nyitja meg új lapon, DWG-ként, feltöltés nélkül. Az ott végrehajtott módosítások ott maradnak; ott mentse őket. A menüpont csak ott jelenik meg, ahol az alkalmazás át tudja venni a továbbadott rajzot.

## PDF plottolása

Nyomja meg az {{key:Mod+P}} billentyűt, kattintson a {{ui:Plottolás}} gombra, vagy írja be: `PLOT`. A PDF a böngészőn belül készül el, és letöltődik, vagy új lapon nyílik meg nyomtatáshoz. Lásd [Plottolás PDF-be](topic:plot-pdf).

## Hová kerülnek a fájlok

Minden mentés és plottolás letöltés, így a fájlok oda kerülnek, ahová a böngésző a letöltéseket teszi: általában a Letöltések mappába. Ha minden alkalommal mappát szeretne választani, módosítsa a letöltési beállítást a böngészőben; a [Böngészők és számítógépek](common:browsers) megmutatja, hol.

Semmi, amit megnyit vagy ment, nem kerül hozzánk. Lásd [Hová kerülnek a fájljai](common:your-files).

## PLN- és PLA-projektfájlok

A CadCraft DWG- és DXF-rajzokat nyit meg, nem az Archicad saját fájljait (`.pln`, `.pla`, `.tpl`, `.bpn`). Ha ilyet próbál megnyitni, megmondja, mi az. Az Archicadban mentse a szükséges nézeteket vagy elrendezéseket DWG-ként, és azokat nyissa meg itt, vagy exportálja a modellt IFC-ként, és nyissa meg a BimCraftban. Ahol a BimCraft át tudja venni a fájlt, a CadCraft felajánlja a {{ui:Megnyitás a BimCraftban}} gombot.

## Ha az oldal mentés előtt bezárul

A CadCraft minden módosított rajzról másolatot őriz, csak ebben a böngészőben, röviddel azután, hogy abbahagyta a szerkesztést. Ha a lap bezárul, a böngésző leáll vagy a számítógép újraindul a mentés előtt, a CadCraft a következő indításkor megkérdezi: **Helyreállítja a munkáját?** A {{ui:Helyreállítás}} gombbal a rajz újra megnyílik, mentetlenül, saját lapján. A rajz mentése eltávolítja a másolatát. Lásd [Munka helyreállítása](common:recover).

## Online és offline

A megnyitás, a rajzolás, a mentés (DWG és DXF) és a plottolás mind a számítógépén történik, így a CadCraft betöltése után kapcsolat nélkül is működnek.

Ha a CadCraftot teljesen kapcsolat nélkül szeretné használni, kattintson az {{ui:Mentés offline használatra}} gombra a felső sávban, miközben online van. A címke számol („Mentés: 40 / 212”), és „Offline kész” állapotban áll meg. A mentett másolat tartalmazza a DWG-olvasót, összesen mintegy 5 MB-tal, így **a DWG-fájlok offline is megnyílnak**, miután elmentette. A gombra újra kattintva elérhetők a {{ui:Mentés újra (a legújabb verzió beszerzése)}} és az {{ui:Az offline másolat eltávolítása}} lehetőségek. A „Nem sikerült a mentés” azt jelenti, hogy egyes fájlok nem töltődtek le: ellenőrizze a kapcsolatot, és kattintson újra. Az „Offline nem elérhető” azt jelenti, hogy ez a böngészőablak nem tud másolatot tartani (privát ablakok és egyes felügyelt számítógépek).

Mentett másolat nélkül a DWG-olvasó az oldal betöltése utáni első DWG-megnyitáskor töltődik le, így offline DWG-megnyitás sikertelen lehet; a DXF-fájloknak erre sosem van szükségük. Offline állapotban ne töltse újra az oldalt, hacsak a CadCraft nincs offline mentve.

Részletekért lásd: [Offline munka](common:offline).

:::offline
Most offline van. A rajzok DWG vagy DXF formátumban mentődnek és normálisan plottolódnak, a DXF-fájlok megnyílnak. A DWG-fájlok akkor nyílnak meg, ha a CadCraft az „Offline kész” állapotot mutatja, vagy ha a DWG-olvasó már betöltődött ebben a lapban.
:::

## Kényszerek a fájlokban

A kényszerek és paraméterek (lásd [Rajz kényszerezése](topic:constraints)) mind DWG-ben, mind DXF-ben mentődnek. Minden kényszerezett objektum kap egy kis CadCraft-megjegyzést (kiterjesztett adat), és egy `CADCRAFT_PARAMETRIC` nevű, nem használt blokk tartalmazza a kényszereket és a paramétertáblát. A másik programok normálisan megnyitják a rajzot, és mindkettőt figyelmen kívül hagyják; a tisztításkor törölhetik a nem használt blokkot. A megjegyzések az objektumokra saját kulcsukkal hivatkoznak, nem a fájl azonosítóival (handle), így az a program, amely újraszámozza az azonosítókat, nem rontja el őket. Ha egy másik program törölt vagy módosított egy kényszerezett objektumot, a CadCraft a fájl megnyitásakor eltávolítja rajta a kényszereket, és megmondja, hányat. Kényszerek nélküli fájl kényszerek nélkül nyílik meg.

Az alkatrész-modellezőből exportált vázlat (`.json`) is megnyílik: lásd [Vázlatok áthelyezése más alkatrész-modellezőkbe és onnan](topic:solidworks-sketches).

## Még nem érhető el

- Többszörös vezetővonalak többszörös vezetővonal-objektumként mentett DXF-ben (az R12-ben nincs ilyen: úgy mentődnek, ahogy rajzolják).
- Képek mentett DXF-ben (keretükként mentődnek; a DWG képként őrzi meg őket), és kitakarások, amelyek elrejtik az alattuk lévőt.
- Újabb DXF-verzió mentése a 2000-nél.
- Felhőbe mentés és szinkronizálás számítógépek között.

A teljes listát lásd: [Még nincs elkészítve](topic:not-built-yet).

---
title: Fájlok: mi nyílik meg, mi menthető
summary: A CadCraft által megnyitott, mentett és exportált formátumok, mi marad meg vagy konvertálódik, és hová kerülnek a fájlok.
keywords: xclip, clip, xclip határ, kivágott beépítése, dwg, dxf, pdf, r12, megnyitás, mentés, exportálás, importálás, formátumok, konvertálás, letöltés, saveas, dxfout, mentés másként, dwg mentés, formátum, qsave, xref, xattach, csatolt rajz, külső hivatkozás, beépítés, újratöltés, leválasztás
from: 6d68b34e
---

## Röviden

| Formátum | Megnyitás | Mentés | Megjegyzés |
|---|---|---|---|
| DXF (szöveges, bármely verzió) | Igen | Igen, DXF R12 vagy DXF 2000 formában | A bináris DXF-et elutasítja: előbb mentse szöveges DXF-ként. |
| DWG | Igen | Igen, DWG-ként (AutoCAD 2000, 2004, 2007, 2010, 2013 vagy 2018) | A CadCraft saját DWG-könyvtára olvassa és írja (AutoCAD R13-tól 2018-ig terjedő fájlok). A DWG-je sosem változik. A sérült fájlokat vagy az olvasó által nem kezelt verziókat üzenettel utasítja el. |
| PDF | Egy oldalt behoz: aláképként vagy objektumokként ([PDF-aláképek](topic:pdf-underlay)) | Igen, plottolással | Egy rajzlap vagy a modell vektoros PDF-je, adott méretaránnyal. |

Minden megnyitott (vagy az {{ui:Új}} paranccsal indított) rajz saját lapot kap a rajzterület fölött; az olyan új rajzot, amelyhez még senki nem nyúlt, a rendszer újrahasznosítja új lap helyett. A váltáshoz kattintson egy lapra, a bezáráshoz a lap {{ui:×}} jelére (a CadCraft előbb rákérdez, ha vannak mentetlen módosítások), vagy rendezze egymás mellé a nyitott rajzokat: lásd [A képernyő felosztása](topic:split-screen).

## Rajz megnyitása

- Nyomja meg a {{key:Mod+O}} billentyűkombinációt, kattintson a {{ui:Megnyitás}} gombra, vagy írja be: `OPEN`, majd válassza ki a fájlt.
- Vagy húzzon egy `.dwg` vagy `.dxf` fájlt a rajzterületre.

A fájlt a böngészőn belül olvassa be. Sehová nem töltődik fel. Az előzmények jelentik, hány objektum és réteg érkezett, és mennyi idő alatt, a bal oldali panel {{ui:Rajz}} szakasza pedig a formátumot mutatja, például „DWG 2018 (AC1032)”.

A DWG-olvasó a CadCraft része, és az oldal betöltése után az első megnyitott DWG-vel töltődik le (néhány száz KB), így nincs külön letöltés, amelyre várni kell. A fájlt a háttérben olvassa, így az oldal egy nagy DWG megnyitása közben is válaszol.

### Ami bejön

- Vonalak, ívek, körök, polivonalak (ívszakaszokkal), ellipszisek, pontok, szövegek és többsoros szövegek, kitöltések, sraffozások (a szabványos mintákat vonalaikként rajzolja, a többit egyszínű tónusként), blokkhivatkozások az attribútumaikkal (szerkeszthető értékek; lásd [Blokkattribútumok](topic:attributes)), méretek, valamint elrendezések a nézetablakaikkal.
- A spline-ok spline-ként jönnek be (fokszám, vezérlőpontok, csomóértékek, súlyok, illesztőpontok); lásd [Spline-ok és polivonalak](topic:splines).
- Az egy vezetővonalas és szöveges többszörös vezetővonalak szerkeszthető CadCraft-vezetővonalakként jönnek be (lásd {{cmd:MLEADER}}). A többit (blokkal, több vezetővonallal vagy íves vonalakkal) úgy rajzolja, ahogy a másik program rajzolta, és egyként mozognak; az előzmények megmondják, hányat.
- A képek addig keretként látszanak a kép fájlnevével, amíg át nem adja a fájlt a CadCraftnak az {{cmd:IMAGE}} paranccsal: lásd [Képek a rajzban](topic:pictures#show-the-pictures-a-dwg-uses). A kitakarások keretként látszanak, és ami alattuk van, látható marad.
- A DWG-beli táblázatok úgy jönnek be, ahogy a másik program rajzolta őket.
- A modelltér 3D lapjai a {{ui:3D}} lapra kerülnek, nem 2D objektumként; ugyanígy a blokkokon belüliek is, blokkhivatkozásonként egyszer a modellben. Blokkban és rajzlapon laposan is ki vannak rajzolva, körvonalként. Lásd: [Modellezés 3D-ben](topic:3d-solids).
- A rétegek megtartják a színüket, a be, befagyasztott, zárolt és plottolási beállításaikat. A DEFPOINTS soha nem plottolódik.
- A méretek valódi, szerkeszthető CadCraft-méretek lesznek, ahol a pontjaik kiolvashatók. Először pontosan úgy látszanak, ahogy a másik program rajzolta őket; amint módosít egyet, a CadCraft a saját stílusában újrarajzolja.
- Minden elrendezésből rajzlap-lap lesz. A másik programban minden elrendezésnek van egy rejtett első nézetablaka, amely maga a rajzlap; a CadCraft ezt kihagyja.

### Ami még nem jön be

Amit a CadCraft nem tud megrajzolni, azt megszámolja, nem találgatja. A bal oldali panel „A fájl névjegye” mezője „Még nem látható:” alatt sorolja fel, objektumfajtánként és darabszámmal. Tipikus esetek a DXF-beli táblázatok, a hálók és a blokkokon belüli 3D testek. A modelltér 3D testei, régiói és testobjektumai a 3D lapon látszanak (lásd [Modellezés 3D-ben](topic:3d-solids#solids-from-other-programs)). A fájlban elforgatott nézetablakok ott is elforgatva látszanak, és mentéskor megtartják az elforgatásukat; ugyanígy az aktuális UCS, az elnevezett UCS-ek és az elfordított nézet.

A szöveg egyetlen, Helvetica-jellegű betűtípussal van kirajzolva. Az az egysoros felirat, amely az eredeti program keskenyebb betűtípusával elfért, a CadCraftban két sorba törhet.

## Mentés

A mentésnek három módja van. Mindegyik másolatot tölt le.

- **Mentés**: nyomja meg a {{key:Mod+S}} billentyűkombinációt, kattintson a {{ui:Mentés}} gombra, vagy írja be: `SAVE` (vagy `QSAVE`). A rajz formátumában ment: DWG-t, ha DWG-t nyitott meg, DXF-et, ha DXF-et. A DWG megtartja a bejövő verziót (a 2018-as fájl 2018-ként mentődik). Az új rajz azt a formátumot és DWG-verziót használja, amelyet ebben a böngészőben legutóbb választott a Mentés másként párbeszédpanelen; ha soha nem választott, akkor DWG-t az AutoCAD 2000 formátumban.
- **Mentés másként**: nyomja meg a {{key:Mod+Shift+S}} billentyűkombinációt, kattintson a {{ui:Mentés másként}} gombra, vagy írja be: `SAVEAS`. A {{ui:Másolat mentése másként}} párbeszédpanel felkínálja a {{ui:DWG}}-t egy {{ui:Verzió}} listával (AutoCAD 2018, 2013, 2010, 2007, 2004 vagy 2000), a {{ui:DXF R12}}-t és a {{ui:DXF 2000}}-et, mindegyik a fájlnévvel, amelyet adni fog, és a rajz jelenlegi formátuma és verziója már ki van választva. A letöltéshez kattintson a {{ui:Mentés}} gombra, vagy a {{ui:Mégse}} gombra (vagy az {{key:Esc}} billentyűre), hogy semmi ne mentődjön; az előzmények ekkor ezt írják: „Nem lett mentve.” A választás megmarad: a {{key:Mod+S}} ettől kezdve ezt használja ennél a rajznál, az ebben a böngészőben indított új rajzok pedig ezzel indulnak.
- **DXFOUT**: írja be: `DXFOUT`. Mindig DXF R12 másolatot tölt le, és a következő {{key:Mod+S}} még mindig a rajz saját formátumában ment.

A böngésző a `<rajz neve>.dwg` vagy `<rajz neve>.dxf` fájlt tölti le. Minden mentés **új letöltés**; a megnyitott fájl soha nem íródik felül és nem változik. Az előzmények megerősítik, például „Másolat mentve: Plan.dwg (DWG (AutoCAD 2018)). Az eredeti Plan.dxf változatlan.” DXF-nél ezt írja: „(DXF R12, bármely CAD-programban megnyílik)”. Az alatta lévő sorok felsorolják mindazt, ami útközben megváltozott.

Amikor a CadCraft az asztali alkalmazásban fut, a mentés úgy működik, mint más asztali programokban: a {{key:Mod+S}} visszaírja a rajzot a megnyitott fájlba, a saját formátumában és verziójában, az előzmények pedig megmondják, hová mentett. A {{ui:Mentés másként}} és az exportálások a rendszer mentési párbeszédpaneljét mutatják, a duplán kattintott `.dwg`, `.dxf` vagy `.ccsheets` fájl pedig a CadCraftban nyílik meg.

PDF-hez inkább plottoljon (lásd lent).

## Mit őriz meg és mit változtat a DWG

A CadCraft maga írja a DWG-t, a böngészőn belül, ugyanazzal a DWG-könyvtárral, amellyel olvas. A Mentés másként párbeszédpanelen válassza ki a verziót: az AutoCAD 2000 formátum (AC1015 fájlverzió) nyílik meg a legtöbb programban, a régiekben is; az újabb formátumok (2004, AC1018, egészen 2018-ig, AC1032) a valódi színeket is megőrzik. Semmi nem töltődik fel, és a DWG mentése offline is működik.

Minden verziót úgy ellenőriztek, hogy a mentett fájlokat visszaolvasták három másik program DWG-olvasójával és magával a CadCrafttal. A CadCraft DWG-jét magában az AutoCADben még nem nyitották meg.

### Amit a DWG megőriz

- Vonalak, ívek, körök, ellipszisek, pontok és polivonalak az ívszakaszaikkal.
- Egysoros szöveg az igazításával és szélességi tényezőjével.
- Többsoros és tördelt szöveg, többsoros szövegként. A másik program ugyanazon szélességből újra tördeli.
- Az objektumok színei: rétegről, blokkról, a 255 szabványos szín, és valódi színek a 2004-es és újabb formátumban.
- Rétegek a színükkel, vonaltípusukkal, vonalvastagságukkal, valamint be, befagyasztott, zárolt és plottolási beállításaikkal; az objektumok saját vonaltípusai, vonalvastagságai és vonaltípus-léptékei, a vonaltípus-minták és a rajz vonaltípus-léptéke.
- A rajz mértékegységei és a hosszformátum (tizedes, láb és hüvelyk, törtek…).
- Blokkok az alappontjukkal és az attribútum-meghatározásaikkal, a láthatatlan, állandó és előre beállított attribútumokat is beleértve.
- Blokkhivatkozások a léptékükkel, elforgatásukkal és attribútumértékeikkel.
- Egyszínű kitöltések és mintás sraffozások a mintájukkal, léptékükkel és szögükkel (a minta saját vonalaival, így más programok ugyanazokat a vonalakat rajzolják, mint a CadCraft).
- Méretek, valódi méretekként: más programok újramérik őket, ha megnyújtják. Mindegyik megtartja a saját beállításait (szövegmagasság, nyílméret, tizedeshelyek, hosszformátum) és a szövegét, és hordozza azt a megrajzolt másolatot, amelyet minden DWG-méret hordoz.
- Rajzlapok (elrendezések): minden rajzlap a papírméretével és mértékegységével, a rajta lévő rajzzal, valamint a nézetablakaival, a nézetükkel és a léptékükkel.
- Elnevezett nézetek.
- Többszörös vezetővonalak, többszörös vezetővonalként.
- A rétegek és blokkok nevei úgy, ahogy beírta, kis- és nagybetűkkel. (A DXF R12 nagybetűvel írja őket.)

### Amit a DWG megváltoztat

Ezek mindegyike szerepel az előzményekben mentés után, ha érinti a rajzát.

| A CadCraftban | A mentett DWG-ben |
|---|---|
| Valódi színek (a színválasztóval kiválasztva), a 2000-es formátumban | A legközelebbi szabványos szín: a 2000-es formátum csak a 255-öt ismeri. A megőrzésükhöz mentsen 2004-es vagy újabb formátumban |
| Egy rajzlap elnevezett nézetei | Papírtér-nézetek: a DWG nem mondja meg, melyik rajzlaphoz tartoznak, így amikor a CadCraft újra megnyitja a fájlt, az első rajzlaphoz tartoznak |
| Többsoros szöveg szélességi tényezővel | Normál betűszélesség: a DWG-ben a szélességi tényező csak az egysoros szövegre vonatkozik |
| Olyan karaktereket tartalmazó réteg- vagy blokknevek, amelyeket a DWG nem enged | Megváltoztatva: a csatolt rajz neve, például `Base\|Walls`, `Base$0$Walls` lesz (ahogy a csatolt rajz beépítése nevezi el), a többi karakter `_` lesz |

### Miért R12, és mi konvertálódik

Ha DXF-ként ment, a CadCraft DXF R12-t ír, azt a verziót, amelyet minden CAD-program meg tud nyitni. Régebbi néhány szolgáltatásnál, ezért néhány dolog egyszerűbb formában íródik:

| A CadCraftban | A mentett R12 fájlban |
|---|---|
| Többsoros szöveg | Soronként egy szövegobjektum |
| Ellipszisek | Az ellipszist követő polivonalak |
| Sraffozások (megnyitott fájlokból) | Csak a körvonalaik |
| Valódi színek (a színválasztóval kiválasztva) | A legközelebbi szabványos szín |
| Vonalvastagságok és az objektumok saját vonaltípus-léptékei | Kimaradnak: az R12 egyiket sem ismeri (a vonaltípusok megmaradnak) |
| Réteg- és blokknevek | Nagybetűvel írva; a szóközök és más karakterek `_` lesznek, a nevek pedig 31 karakterre vágódnak („Title block” `TITLE_BLOCK` lesz) |
| Nem plottolásra állított rétegek | Más programok plottolni fogják őket (a CadCraft megjegyzi a beállítást, ha a rajznak van rajzlapja) |
| Méretek | Valódi méretek saját megrajzolt blokkal, így más programok úgy mutatják, ahogy Ön látja |
| Többszörös vezetővonalak | Az általuk rajzolt vonalak, nyílhegy és szöveg |
| Elnevezett nézetek | Megmaradnak, nagybetűs nevekkel; egy rajzlap nézetei az első rajzlapra kerülnek vissza |
| Több rajzlap | Az első rajzlap a papírtér, amelyet minden program mutat; a többi `CCLAYOUT_1`, `CCLAYOUT_2` … nevű blokkként marad meg, amelyeket a CadCraft a fájl megnyitásakor visszaalakít rajzlapokká |

Az előzmények felsorolják ezek közül azt, ami érintette a rajzát.

:::tip
Ha egy rajzon több napon át szeretne dolgozni, mentsen DXF-ként, és legközelebb nyissa meg azt a DXF-et. Minden, amit a CadCraft meg tud rajzolni, átvészeli az oda-vissza utat, a méreteket, a blokkokat és az összes rajzlapot is beleértve.
:::

## Csatolt rajzok (külső hivatkozások)

Az {{cmd:XATTACH}} (`XA`, vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Rajz csatolása (xref)}}) egy másik DWG-t vagy DXF-et csatol: válassza ki a fájlt, majd kattintson oda, ahová kerül (az {{key:Enter}} a 0,0 pontra teszi). Egyetlen, a fájlról elnevezett blokként érkezik, helyes léptékkel, ha a két rajz mértékegysége eltér. A rétegei és blokkjai megtartják a nevüket a csatolás nevével az elején — `Plan|Walls`, `Plan|Door` —, így sosem keverednek a sajátjaival: a csatolt rétegeket be- és kikapcsolhatja, befagyaszthatja vagy zárolhatja, mint a sajátjait. A csatolás csak olvasható: módosítsa a másik rajzot, és töltse újra. Amit a csatolás rétegein beállít (szín, vonaltípus, vonalvastagság, be/ki, befagyasztás, zárolás, plottolás), megmarad az újratöltéskor, a rajz DWG-ként mentésekor, amíg a csatolás még csatolás, és akkor is, ha egy másik rajz ezt a rajzot csatolja.

Az {{cmd:XREF}} (`XR`): a `?` (lista) felsorolja a csatolásokat (betöltve-e, melyik fájl, hány hivatkozás); az `A` (Csatolás, Attach) csatol; az `R` (Újratöltés, Reload) újratölt egyet a fájljából (jelölje ki újra a fájlt: a böngésző magától nem fér hozzá a mappáihoz); a `B` (Beépítés, Bind) beépít egyet (közönséges blokkok és rétegek lesznek `Plan$0$Walls` néven); a `D` (Leválasztás, Detach) leválaszt egyet (a hivatkozásai és rétegei megszűnnek). Mindegyik egy visszavonási lépés.

Az {{cmd:XCLIP}} (`XC`) blokkhivatkozásokat és csatolásokat vág ki: jelölje ki őket, az `N` (Új határ, New) új határt ad, majd az `R` (Téglalap, Rectangular) és két sarok, vagy a `P` (Sokszög, Polygon) és a sokszög pontjai (az {{key:Enter}} lezárja); a `D` (Törlés, Delete) eltávolítja a kivágást. Csak a belül lévő látszik és plottolódik, a kivágás pedig a hivatkozással együtt mozog. A DWG és a DXF 2000 megtartja a kivágásokat; a DXF R12 a hivatkozást egészben menti, és ezt kimondja. Ha kivágott hivatkozásokat tartalmazó csatolást épít be, az {{cmd:XREF}} `B` rákérdez: az `A` (Mind, All) mindent beépít, a `C` (Kivágott, Clipped) csak az egyes hivatkozások kivágott részét tartja meg (a vonalak és ívek a határnál elvágódnak; a szövegek és a beágyazott blokkok maradnak, ha a beszúrási pontjuk belül van).

A megnyitott rajz olyan fájlokat is csatolhat, amelyeket a CadCraft nem lát: megmondja, hányat nem töltött be. Az {{cmd:XREF}}, `R` paranccsal és az egyes fájlok kijelölésével láthatja őket.

Mentéskor a betöltött csatolás **beépül** a fájlba (más programok közönséges blokkokat és `Plan$0$…` nevű rétegeket látnak), és az előzmények ezt kimondják. A nem betöltött csatolás csatolás marad a fájljára, DWG-ben és DXF-ben is.

## Megnyitás 3D-ben

A {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Megnyitás a ModelCraftban}} ({{cmd:OPENIN3D}}) a rajzot a 3D modellező alkalmazásban nyitja meg új lapon, DWG-ként, feltöltés nélkül. Az ott végzett módosítások ott maradnak; ott mentse őket. A menüpont csak ott látszik, ahol az az alkalmazás át tud venni egy átadott rajzot.

## PDF plottolása

Nyomja meg a {{key:Mod+P}} billentyűkombinációt, kattintson a {{ui:Plottolás}} gombra, vagy írja be: `PLOT`. A PDF a böngészőn belül készül, és letöltődik, vagy új lapon nyílik meg nyomtatáshoz. Lásd: [Plottolás PDF-be](topic:plot-pdf).

## Hová kerülnek a fájlok

Minden mentés és minden plottolás letöltés, így a fájlok oda kerülnek, ahová a böngészője a letöltéseket teszi: általában a Letöltések mappába. Ha minden alkalommal mappát szeretne választani, módosítsa a böngészője letöltési beállítását; a [Böngészők és számítógépek](common:browsers) megmutatja, hol.

Semmit, amit megnyit vagy ment, nem küldünk el nekünk. Lásd: [Hová kerülnek a fájljai](common:your-files).

## PLN- és PLA-projektfájlok

A CadCraft DWG- és DXF-rajzokat nyit meg, az Archicad saját fájljait (`.pln`, `.pla`, `.tpl`, `.bpn`) nem. Megnyitásukkor megmondja, mik azok. Az Archicadben mentse DWG-ként a szükséges nézeteket vagy elrendezéseket, és azokat nyissa meg itt, vagy exportálja a modellt IFC-ként, és nyissa meg a BimCraftban. Ahol a BimCraft át tudja venni a fájlt, a CadCraft felkínálja a {{ui:Megnyitás a BimCraftban}} lehetőséget.

## Ha az oldal bezárul mentés előtt

A CadCraft minden módosított rajzról másolatot tart, csak ebben a böngészőben, röviddel a szerkesztés abbahagyása után. Ha a lap bezárul, a böngésző leáll vagy a számítógép újraindul mentés előtt, a CadCraft a következő indításkor megkérdezi: **Helyreállítja a munkáját?**: a {{ui:Helyreállítás}} újra megnyitja a rajzot, mentetlenül, saját lapon. A rajz mentése eltávolítja a másolatát. Lásd: [Munka helyreállítása](common:recover).

## Online és offline

A megnyitás, a rajzolás, a mentés (DWG és DXF) és a plottolás mind a számítógépén történik, így a CadCraft betöltése után kapcsolat nélkül is működnek.

A CadCraft teljesen kapcsolat nélküli használatához kattintson online állapotban a felső sávban a {{ui:Mentés offline használatra}} gombra. A felirat számol felfelé („Mentés: 40 / 212”), és az „Offline használatra kész” szöveggel ér véget. A mentett másolat tartalmazza a DWG-olvasót, összesen kb. 5 MB, így a mentés után **a DWG-fájlok is megnyílnak offline**. Kattintson újra a gombra a {{ui:Mentés újra (a legújabb verzió beszerzése)}} vagy az {{ui:Az offline másolat eltávolítása}} lehetőségért. A „Nem sikerült menteni” azt jelenti, hogy néhány fájl nem töltődött le: ellenőrizze a kapcsolatot, és kattintson az újrapróbálkozáshoz. Az „Az offline mód nem érhető el” azt jelenti, hogy ez a böngészőablak nem tud másolatot tartani (privát ablakok és néhány felügyelt számítógép).

Mentett másolat nélkül a DWG-olvasó az oldal betöltése után az első DWG megnyitásakor töltődik le, így a DWG offline megnyitása meghiúsulhat; a DXF-fájloknak sosem kell. Offline ne töltse újra az oldalt, hacsak a CadCraft nincs elmentve.

A részleteket lásd: [Munka offline](common:offline).

:::offline
Most offline van. A rajzok DWG-ként vagy DXF-ként menthetők és rendesen plottolhatók, a DXF-fájlok pedig megnyílnak. A DWG-fájlok megnyílnak, ha a CadCraft az „Offline használatra kész” szöveget mutatja, vagy ha a DWG-olvasó már betöltődött ebben a lapban.
:::

## Kényszerek a fájlokban

A kényszerek és paraméterek (lásd [Rajz kényszerezése](topic:constraints)) DWG-ben és DXF-ben is mentődnek. Minden kényszerezett objektum hordoz egy kis CadCraft-jegyzetet (kiterjesztett adat), egy `CADCRAFT_PARAMETRIC` nevű, nem használt blokk pedig a kényszereket és a paramétertáblázatot tartalmazza. Más programok normálisan megnyitják a rajzot, és mindkettőt figyelmen kívül hagyják; a nem használt blokkot kiüríthetik tisztításkor. A jegyzetek az objektumokra a saját kulcsukkal hivatkoznak, nem a fájl azonosítóival, így az azonosítókat újraszámozó program nem rontja el őket. Ha egy másik program törölt vagy módosított egy kényszerezett objektumot, a CadCraft a fájl megnyitásakor elhagyja a rá vonatkozó kényszereket, és megmondja, hányat. A nélkülük mentett fájl kényszerek nélkül nyílik meg.

Az alkatrészmodellezőből exportált vázlat (`.json`) is megnyílik: lásd [Vázlatok átvitele alkatrészmodellezők között](topic:solidworks-sketches).

## Még nem érhető el

- A többszörös vezetővonalak többszörös vezetővonal-objektumként a mentett DXF-ben (az R12 nem ismeri őket: azt mentik, amit rajzolnak).
- A képek a mentett DXF-ben (keretként mentődnek; a DWG képként tartja meg őket), és az alattuk lévőt eltakaró kitakarások.
- Újabb DXF-verzió mentése a 2000-esnél.
- Felhőbe mentés és szinkronizálás a számítógépek között.

A teljes listát lásd: [Mi nincs még elkészítve](topic:not-built-yet).

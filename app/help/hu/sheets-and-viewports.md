---
title: Rajzlap beállítása rajzfejjel és nézetablakokkal
summary: Készítsen rajzlapot kerettel és rajzfejjel, állítsa be a nézetablak léptékét, adjon hozzá második nézetablakot egy részlethez, és töltse ki a rajzfejet.
keywords: elrendezés, rajzlap, papírtér, nézetablak, mview, vpview, rajzfej, lépték, papírméret, keret, vports, plottolási lépték, mspace, pspace, modelltér, belépés a nézetablakba, nézetablakra kettős kattintás
from: 45a45de8
---

## Mit fog létrehozni

Egy A3-as rajzlap rajzfejjel, az egész alaprajz egy nézetablakban 1:100-as léptékben, és egy második nézetablak, amely egy sarkot mutat 1:20-as léptékben.

## Modell és rajzlapok

Az épületet a {{ui:Modell}} lapon, valós méretben rajzolja: egy 6 m-es fal milliméterben 6000 egység hosszú. A **rajzlap** (elrendezés) egy papírlap, amelynek mérete milliméterben vagy hüvelykben van. A **nézetablak** a rajzlapba vágott ablak, amely a modellt léptékben mutatja.

## Mielőtt elkezdi

1. Nyisson meg vagy rajzoljon egy alaprajzot a {{ui:Modell}} lapon.
2. Nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve.
3. A {{ui:Jelenlegi beállítások}} alatt állítsa a {{ui:Mértékegységek}} értékét arra az egységre, amelyben rajzolt, például {{ui:Milliméter}}.

Az egységek fontosak: a nézetablak léptéke, például 1:100, azt jelenti, hogy egy papírmilliméter 100 valós milliméternek felel meg, ezért a CadCraftnak tudnia kell, mit jelent egy rajzegység. A {{ui:Mértékegység nélkül}} hagyott rajzot a papír egységében kezeli (ISO papíron milliméterben, US-papíron hüvelykben).

## A rajzlap elkészítése

1. Kattintson a rajz alatti lapok jobb oldalán lévő {{ui:+}} gombra, vagy írja be: `LAYOUT`, majd nyomja meg az {{key:Enter}} billentyűt, vagy kattintson az {{ui:Új rajzlap}} gombra.

Megnyílik egy új lap, `Layout1` néven. Egy sötétebb asztalon lévő rajzlapot kell látnia: kerettel, a jobb alsó sarokban rajzfejjel, fölötte egy nézetablakkal, amely a teljes modellt mutatja a legnagyobb szabványos, elférő léptékben. Az előzmények megnevezik a papírt: ISO A3 a metrikus és a mértékegység nélküli rajzokhoz, Tabloid (ANSI B) a hüvelyk- vagy lábegységű rajzokhoz.

2. Kattintson az {{ui:Kiterjedés}} gombra, hogy a rajzlap a képernyőre illeszkedjen.

## Papír kiválasztása

1. Nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve. A jobb oldali panel fejléce ezt írja: „Rajzlap: Layout1”.
2. A {{ui:Név}} mezőbe írja be: `A-101 Plan`, majd nyomja meg az {{key:Enter}} billentyűt. A lap átnevezésre kerül.
3. A {{ui:Papír}} mezőben válasszon méretet.
4. A {{ui:Tájolás}} mezőben válassza a {{ui:Fekvő}} vagy {{ui:Álló}} lehetőséget.

:::warning
A papír módosítása nem mozgatja és nem méretezi át a rajzlapon lévő dolgokat. A módosítás után ellenőrizze, hogy a keret, a rajzfej és a nézetablak még elférnek-e, és mozgassa vagy méretezze át őket fogópontokkal. A milliméteres és a hüvelykes papír közötti váltás megtartja a számokat, így minden méret megváltozik: az állapotsor figyelmeztet.
:::

## A nézetablak léptékének beállítása

1. Kattintson a nézetablak keretére (a szélére). A panel fejléce ezt írja: „Nézetablak”.
2. A {{ui:Léptékezés (S)}} mezőben válassza ki: `1:100`.

A nézetablakon belüli modell 1:100 léptékben újrarajzolódik, azon a helyen, ahol volt. A lista metrikus léptékeket kínál 10:1-től 1:10000-ig; a hüvelyk- vagy lábegységű rajzok építészeti (1/4" = 1'-0" és hasonlók) és mérnöki léptékeket (1" = 20' és hasonlók) is kapnak. A {{ui:A teljes modell illesztése}} pontos, nem szabványos léptéket állít be, amely mindent elfér.

3. Ha az alaprajz már nincs középen, módosítsa a {{ui:X}} és {{ui:Y}} értékét a jobb oldali panelen a {{ui:Nézet középpontja (modell)}} alatt: ezek a modellpont, amely a nézetablak közepén látszik.

## Modell egy részének megjelenítése nézetablakban

1. A kijelölt nézetablakkal kattintson a jobb oldali panel {{ui:Ablak kijelölése a modellen…}} gombjára (vagy írja be: `VPVIEW`, majd nyomja meg az {{key:Enter}} billentyűt).
2. A CadCraft átvált a {{ui:Modell}} lapra. Kattintson a megjelenítendő terület egyik sarkára.
3. Kattintson az átellenes sarokra.

Visszakerül a rajzlapra, és a nézetablak ezt a területet mutatja a legnagyobb szabványos, elférő léptékben; az előzmények megmondják, melyikben. A {{ui:A teljes modell megjelenítése}} visszaállítja a teljes alaprajzot szabványos léptékben.

## Második nézetablak egy részlethez

1. Csináljon helyet a rajzlapon: jelölje ki az első nézetablakot, és húzza össze egy sarok fogópontjával.
2. Írja be: `MV`, majd nyomja meg az {{key:Enter}} billentyűt, vagy kattintson a {{ui:Nézetablak}} gombra a Rajzlapok csoportban.
3. Kattintson az új nézetablak egyik sarkára a rajzlapon.
4. Kattintson az átellenes sarokra.

Az új nézetablak az egész modellt mutatja. Az előzmények megadják a léptékét.

5. Kattintson az új nézetablak keretére.
6. Kattintson a {{ui:Ablak kijelölése a modellen…}} gombra, és jelöljön ki egy kis területet az alaprajz egyik sarka körül.
7. A {{ui:Léptékezés (S)}} mezőben válassza az `1:20` értéket.

A nézetablak-keretek a `Viewports` rétegen vannak, amely nincs plottolásra állítva, így a keretek a képernyőn látszanak, de a PDF-ben nem.

## A rajzfej kitöltése

A rajzfej a `Title block` rétegen lévő hagyományos vonalakból és szövegekből áll. Kezdésként a rajz nevét, az első nézetablak léptékét, a mai dátumot és a rajzlap számát tartalmazza.

1. Kattintson kétszer a nagy címszövegre. Megnyílik egy szerkesztőmező.
2. Írja be a rajzlap címét.
3. Kattintson az {{ui:OK}} gombra, vagy nyomja meg a {{key:Mod+Enter}} billentyűt.

Ugyanígy járjon el a többi mezőnél. Az üres „DRAWN BY” cellába a {{cmd:TEXT}} paranccsal írjon. A „SCALE” szöveg nem frissül magától, ha módosítja a nézetablak léptékét: kézzel szerkessze.

## Rajzolás a rajzlapon

Ami a rajzlap-lapon rajzol, az papíron van, papírmértékegységekben: a 3,5 magas szöveg 3,5 mm magas egy ISO-lapon. Ide tartoznak a megjegyzések, az északi nyilak és a rajzlap keretei.

Az alaprajz magának a módosításához lépjen a {{ui:Modell}} lapra, vagy dolgozzon egy nézetablakon keresztül (a következő szakasz); minden nézetablak mutatja a változást.

## A modell szerkesztése nézetablakon keresztül

1. Kattintson kétszer a nézetablakon belül, a keretétől távol. Vagy írja be: `MS`, majd nyomja meg az {{key:Enter}} billentyűt: ha egy nézetablak van a rajzlapon, egyenesen oda lép; ha több van, kattintson abba, amelybe be akar lépni.

A keret vastagabban rajzolódik, az előzmények megmondják, hogy bent van, és a rajzlap lapja kijelölve marad. Mindent, amit most rajzol vagy módosít, a modellbe rajzolja, modellegységekben, ahogy a {{ui:Modell}} lapon: a nézetablakon belül 1:100-ban rajzolt vonal valós milliméterben van. Az ebben a nézetablakban befagyasztott rétegek itt nem választhatók ki.

2. Forgassa a görgőt, vagy húzzon a középső gombbal, hogy nagyítsa és eltolja a nézetablak tartalmát. A rajzlap a helyén marad.
3. Kattintson kétszer a kereten kívül bárhova, vagy írja be: `PS`, majd nyomja meg az {{key:Enter}} billentyűt.

Visszakerül a rajzlapra. A nézetablak megtartja azt a nézetet, amelyben otthagyta; az {{key:Mod+Z}} egy lépésben visszaadja a régi nézetet. A rajz alatti bármelyik lapra kattintva is kilép a nézetablakból.

:::note
A nézetablak, amelynek megjelenítése zárolva van (a Tulajdonságok között a {{ui:Megjelenítés zárolva}}), megtartja a nézetét: benne az eltolás és a nagyítás a teljes rajzlapot mozgatja. A kikapcsolt nézetablakba nem lehet belépni.
:::

## A nézet megnevezése

A nézetablak alatti nézetcím megmutathatja a nézetablak nézetnevét, és követi azt:

1. Adjon nevet a nézetnek: jelölje ki a nézetablak keretét, és töltse ki a Tulajdonságok között a {{ui:Nézetnév}} mezőt — vagy mentse a nézetet a {{ui:Modell}} lapon a {{cmd:NAMEDVIEW}} paranccsal, majd a kijelölt nézetablakkal írja be: `VPVIEW`, `V`, és a nézet nevét: a nézetablak megjeleníti azt a nézetet, és átveszi a nevét.
2. Írja be: `VIEWLABEL` (`VL`), majd nyomja meg az {{key:Enter}} billentyűt, és kattintson arra a helyre, ahová a címke kerül ({{key:Enter}} a nézetablak bal alsó sarka alá helyezi).

Ha a nézet neve változik, a címke vele együtt változik, ugyanabban a visszavonási lépésben.

## Egy réteg befagyasztása egy nézetablakban

Ha egy réteget csak egy nézetablakban akar elrejteni, a többiben nem (például bútorokat egy részletben):

1. Jelölje ki a nézetablak keretét, vagy dolgozzon benne (kettős kattintással).

A {{ui:Rétegek}} panelen minden sorban egy újabb gomb jelenik meg, a lista fölötti sor ezt jelzi.

2. Kattintson a réteg sorában lévő gombra.

A réteg csak abban a nézetablakban tűnik el. Ismételt kattintásra újra feloldódik; az {{key:Mod+Z}} mindkettőt visszavonja. Több réteghez vagy nézetablakhoz egyszerre írja be: `VPLAYER`, majd `F` (befagyasztás) vagy `T` (feloldás), a rétegnevek (az `A-*` minden A- kezdetű réteget kiválasztja), végül `C` (aktuális), `A` (összes) vagy `S` (kijelölés). A `VPLAYER`, `V` (Vpvisdflt) azokat a rétegeket választja ki, amelyekkel az új nézetablakok befagyasztva indulnak.

## További rajzlapok

Minden {{ui:+}} újabb rajzlapot ad hozzá (`Layout2`, `Layout3` …) a következő rajzlap-számmal. A megnyitott rajzlap törléséhez nyomja meg az {{key:Esc}} billentyűt, és kattintson a jobb oldali panelen a {{ui:A rajzlap törlése}} gombra. Nem kérdez rá; az {{key:Mod+Z}} visszahozza.

A rajzlapot a {{ui:A rajzlap plottolása}} gombbal vagy az {{key:Mod+P}} billentyűvel plottolhatja; lásd [Plottolás PDF-be](topic:plot-pdf).

## Gyakori hibák

- **A nézetablak nem mutat semmit.** A modell üres, vagy a nézet máshová irányul. Jelölje ki a keretet, és kattintson a {{ui:A teljes modell megjelenítése}} gombra.
- **A léptéklista csak arányokat mutat, láb-hüvelyk léptékeket nem.** Állítsa a {{ui:Mértékegységek}} értékét {{ui:Hüvelyk}} vagy {{ui:Láb}} értékre a {{ui:Modell}} lapon.
- **Az 1:100 tízszer túl nagynak vagy kicsinek látszik.** A rajz egységei rosszak. Állítsa a {{ui:Mértékegységek}} értékét arra, mennyi valójában egy egység.
- **A nézetablakon belüli alaprajzra kattintva nincs kijelölés.** A rajzlapon a rajzlap saját objektumait jelöli ki. Kattintson kétszer a nézetablakon belül, hogy előbb a nézetablakon keresztül dolgozzon az alaprajzon.
- **A nézetablakon kívüli kattintások nem tesznek semmit.** Ön a nézetablakban van: kattintson kétszer a kereten kívül, vagy írja be a `PS` parancsot, hogy újra a rajzlapon dolgozzon.
- **„A nézetablakok rajzlapra kerülnek. Előbb nyisson rajzlap-lapot (vagy készítsen egyet a LAYOUT paranccsal).”** A {{cmd:MVIEW}} csak rajzlap-lapon működik.

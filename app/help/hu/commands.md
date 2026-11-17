---
title: Parancshivatkozás
summary: A CadCraft rajzolóalkalmazás minden parancsa az álneveivel, a kérdéseivel, a lehetőségeivel és az alapértelmezéseivel.
keywords: parancsok, álnevek, parancslista, terület, kerület, measuregeom, vonal, pline, kör, ív, vágás, eltolás, dimlinear, blokk, beszúrás, elrendezés, plottolás, nagyítás, súgó, copyclip, cutclip, pasteclip, pasteorig, copybase, kettőzés, selectall
from: 7db2646b
---

Írja be a parancs nevét vagy álnevét, majd nyomja meg az {{key:Enter}} vagy a {{key:Space}} billentyűt. A kis- és nagybetű nem számít, az elé írt `_`, `-`, `.` vagy `'` jel figyelmen kívül marad. A `HELP` (vagy `?`) beírásával a parancssor előzményeibe kiíródik az összes parancs rövid listája; az {{key:F1}} megnyomásával ezt a súgót nyitja meg.

A kérdések olvasása: a lehetőségek szögletes zárójelben vannak, és a nagybetűs betűik beírásával választhatja ki őket (`D` az átmérőhöz). Az alapértelmezett érték hegyes zárójelben van; az elfogadásához nyomja meg az {{key:Enter}} billentyűt. Ahol pontot kérnek, kattinthat vagy beírhatja a [Koordináta- és távolságbevitel](topic:coordinate-entry) bármelyik formátumát. Ahol távolságot kérnek, beírhat egy számot, vagy két pontra kattinthat.

Ha pont vagy objektum megadása szükséges, és nincs alapértelmezés, az {{key:Enter}} megnyomása befejezi a parancsot. Az {{key:Esc}} megszakítja. Bármit tett is a parancs, az egy visszavonási lépés.

## Rajzolás

### LINE

Álnevek: `L`. Egyenes szakaszok, mindegyik külön objektum.

- `Specify first point` (Enter: indulás a legutóbb megadott ponttól)
- `Specify next point [Undo]`, ismétlődve. Két szakasz után: `[Undo/Close]`.
- A `U` visszavonja az utolsó szakaszt, a `C` az első pontra zár és befejez. Az Enter befejez.

### PLINE

Álnevek: `PL`. Egy polivonal egyenes és ív szakaszokból.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (a Close két szakasz után)
- Az `A` ívre vált: `Specify endpoint of arc [Line/CLose/Undo]`. Minden ív érintőlegesen folytatja az előző szakaszt. Az `L` visszavált egyenesekre, a `CL` ívvel zár.
- Az Enter befejez; a polivonal nyitva marad.

### CIRCLE

Álnevek: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; a `D` a `Specify diameter of circle` kérdést teszi fel.
- `2P`: egy átmérő két vége. `3P`: három pont a körön.
- A `T` (a `TTR` parancs is, és a {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Kör: érintő, érintő, sugár}}): `Specify point on object for first tangent of circle`, majd a második, aztán a sugár (Enter: az utolsó). A kör mindkét objektumot érinti (vonalak, ívek, körök, polivonal-szakaszok, blokkokon belül is); az érintők közül a kattintásaihoz legközelebbi. Ha egy sem illik, a „Circle does not exist” üzenet jelenik meg.
- `TTT` (vagy {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Kör: érintő, érintő, érintő}}): három objektum; az a kör, amely mindhármat érinti, a kattintásaihoz legközelebbi (három egyenes esetén a belső vagy egy külső kör, attól függően, hová kattint).

### ARC

Álnevek: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: három ponton átmenő ív.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Az ív a kezdőponttól a végpontig az óramutató járásával ellentétesen fut.

### RECTANG

Álnevek: `REC`, `RECTANGLE`. Zárt polivonal.

- `Specify first corner point`, `Specify other corner point`. A második sarokhoz írja be a `@width,height` alakot.

### POLYGON

Álnevek: `POL`. Szabályos sokszög zárt polivonalként.

- `Enter number of sides <4>` (3-tól 1024-ig)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: kattintson vagy írjon be egy pontot; a távolsága adja a méretet, az iránya elforgatja a sokszöget.

### ELLIPSE

Álnevek: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, majd a másik tengelyig mért távolság.
- `I` (`Isocircle`, csak akkor, ha a {{cmd:ISODRAFT}} be van kapcsolva): középpont, majd sugár vagy `Diameter`: az ellipszis, ahogyan a kör az aktuális izometrikus síkon megjelenik.

### HATCH

Álnevek: `H`, `BH`, `BHATCH`; vagy a {{ui:Sraffozás}} az eszköztáron. Először kiírja az aktuális mintát, léptéket és szöget.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ismétlődve (`Undo`, ha már van terület): minden kattintás hozzáadja a körülötte lévő zárt területet, a benne lévő zárt alakzatok szigetekként. Az Enter az összesből egy sraffozást készít.
- `S`: `Select closed objects` (zárt polivonalak, körök, zárt ellipszisek).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): a kitöltés színátmenet, nem minta. A kérdéseit lásd: {{cmd:GRADIENT}}.

Lásd: [Sraffozás és kitöltött területek](topic:hatch).

### GRADIENT

Álnevek: `GD`. Területet tölt ki egy vagy két szín színátmenetével. Először a színátmenetet kérdezi, majd úgy folytatja, mint a {{cmd:HATCH}} (`Pick internal point`, `S` zárt objektumokhoz, az {{key:Enter}} a befejezéshez).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, ismétlődve; minden alkalommal kiírja a jelenlegi színátmenetet.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, vagy ezek egyike megfordítva (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Az első betűk elegendők.
- `O`: egy szín, majd az árnyalata 0 és 1 között (0 feketére árnyalja, 0,5 maga a szín, 1 fehérre világosítja). `TW`: az első és a második szín. Szín: 1 és 255 közötti szám, három szám, például `255,128,0`, vagy `#rrggbb`.
- `A`: a színátmenet futásának szöge. `C`: középre igazítva Igen vagy Nem (a Nem a színátmenet közepét az egyik oldalra viszi).
- Visszautasít egy ismeretlen színt vagy típust, valamint a 0 és 1 közötti tartományon kívüli árnyalatot.

A {{cmd:HATCHEDIT}} `G` és a Tulajdonságok (Színátmenet) később módosítja a színátmenetet, vagy bármely sraffozást színátmenetté alakít. A színátmenet a képernyőn és a plottoláskor is látszik. A DWG 2004 és újabb valódi színátmeneti sraffozásként tárolja; a DXF 2000 és a DWG 2000 a CadCraft számára tárolja, a többi program pedig egyszínű kitöltést lát az első színnel.

### HATCHGENERATEBOUNDARY

Álnevek: `HGB`. Újra létrehozza a határt egy sraffozásból, amelyből elveszett. `Select hatches` (vagy előbb jelölje ki őket), majd `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- A sraffozás minden hurka zárt polivonallá válik a sraffozás rétegén; az új polivonalak kijelölve maradnak. Egy íves él a sraffozás által megtartott rövid egyenes darabokként tér vissza.
- Igen esetén a sraffozás követi az új határát, ahogy a {{cmd:HATCH}} által készített sraffozás. Egy visszavonási lépés.
- Jelzi, ha nem volt sraffozás kijelölve.

### POINT

Álnevek: `PO`; vagy {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Pont}}. Pontobjektumok, kattintásonként egy, az Enterig.

- `Specify a point`

### XLINE

Álnevek: `XL`; vagy {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Szerkesztővonal}}. Szerkesztővonalak, mindkét irányban végtelenek. Lásd: [Szerkesztővonalak és sugarak](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, majd minden vonalhoz `Specify through point`, az Enterig.
- `A`: `Enter angle of construction line [Reference] <0>`; az `R` először a `Select a line object` kérdést teszi fel.
- `B`: `Specify angle vertex point`, `Specify angle start point`, majd minden vonalhoz `Specify angle end point`.
- `O`: `Specify offset distance [Through] <Through>`, majd minden vonalhoz `Select a line object` és `Specify side to offset` (vagy `Specify through point`).

### RAY

Nincs álnév; vagy {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Sugár}}. `Specify start point`, majd minden sugárhoz `Specify through point`, az Enterig.

### TEXT

Álnevek: `DT`, `DTEXT`; vagy a {{ui:Szöveg}} az eszköztáron. Egysoros szöveg; minden sor külön objektum.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, majd `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, ismétlődve: minden Enter a következő sort kezdi lent. Üres sorban az Enter befejez. A {{key:Space}} itt szóközt ír.

### DIVIDE

Álnév: `DIV`. A {{cmd:DIVIDE}} jeleket helyez el egy egyenesen, íven, körön, polivonalon, splinen vagy ellipszisen, amelyek egyenlő részekre osztják. Jelölje ki az objektumot, majd adja meg a részek számát (2 és 32767 között). Nyitott objektumon a jelek száma eggyel kevesebb, mint a részek száma; zártnál a kezdőpontban is van jel. Maga az objektum nem vágódik el. A jelek pontok; a `Block` ehelyett a rajz egy blokkját kéri, és azt, hogy forduljon-e az objektumot követve. A splineok és ellipszisek mentén a hosszakat rövid húrokon mérik. Visszautasít szöveget, sraffozásokat és más, hosszúsággal nem rendelkező objektumokat.

### MEASURE

Álnév: `ME`. A {{cmd:MEASURE}} minden megadott hossznál jelet helyez el egy egyenes, ív, kör, polivonal, spline vagy ellipszis mentén, a kattintásához legközelebbi végétől számítva (zárt objektumnál: a kezdőpontjától). A hosszt beírással vagy két ponttal adja meg. Egy nyitott objektum távoli végén nincs jel. A `Block` a jelek helyén pont helyett blokkot helyez el. Visszautasít 0 hosszt, az objektumnál hosszabb hosszt, és olyat, amely 32767-nél több jelet eredményezne.

### BOUNDARY

Álnevek: `BO`, `BPOLY`. A {{cmd:BOUNDARY}} zárt polivonalat készít a terület köré, amely a kiválasztott pontot tartalmazza, a képernyőn őt határoló vonalakból, ívekből, körökből, polivonalakból és görbékből. Az ívre vagy körre eső darabok ívszakaszokként térnek vissza; az ellipszisek és splinek darabjai rövid egyenes szakaszokként. Az `Islands` bekapcsolva (kezdő beállítás) a belsejében lévő minden zárt terület is kap saját polivonalat. Továbbra is adjon meg pontokat; az Enter befejez. A terület határát alkotó objektumok változatlanok maradnak. Jelzi, ha egyetlen zárt terület sem tartalmazza a pontot.

### BLEND

A {{cmd:BLEND}} spline-t rajzol két nyitott görbe végei között. Az összekötendő görbéket a végük közelében adja meg. A `CONtinuity` a `Tangent` (a spline mindkét görbét követve indul és érkezik) vagy a `Smooth` (a végeknél a görbületüket is követi) közül választ; a választás a munkamenetre marad. A két görbe nem változik. Visszautasít zárt objektumokat, és két olyan véget, amely már találkozik.

### REGION

Álnév: `REG`. A {{cmd:REGION}} zárt objektumokat tartománnyá alakít: sík területekké, amelyeket egyesíthet, vághat és mérhet. Jelöljön ki köröket, zárt polivonalakat, zárt ellipszisket vagy zárt splineokat, vagy olyan vonalakat, íveket és nyitott polivonalakat, amelyek végpontjaiknál hurkot zárnak; minden hurok egy tartománnyá lesz, és helyettesíti azokat az objektumokat, amelyekből készült. Az ívek ívek maradnak; az ellipszisek és splinek rövid egyenes szakaszokká válnak. Ami nincs lezárva és nem zár hurkot, változatlan marad, és ezt jelzi a számával. A rajzban a tartomány egy vagy több zárt polivonal, amelyeket névtelen csoportként tartanak össze, így a kattintás az egész tartományt kijelöli, a másolat pedig saját tartomány lesz; a fájlt más programokban megnyitva zárt polivonalakat látnak.

Ha a rajzban vannak tartományok, a 2D lapon a {{cmd:UNION}}, a {{cmd:SUBTRACT}} és az {{cmd:INTERSECT}} tartományokkal dolgozik: a `UNION` a kijelölt tartományokat egyesíti egyetlen tartománnyá (az egymástól különálló tartományok egy, több körvonalból álló tartománnyá lesznek); a `SUBTRACT` először azokat a tartományokat kéri, amelyekből kivon, majd azokat, amelyeket kivon (a lyuk a tartomány része marad); az `INTERSECT` azt a területet tartja meg, amelyet mindegyik közösen tartalmaz. Mindegyik megadja az eredmény területét, és egy visszavonási lépés. Visszautasítják, ha nem maradna semmi, vagy nincs közös rész. A 3D lapon, és olyan rajzban, amelyben nincsenek tartományok, ugyanezek a parancsok a korábbiak szerint testeken működnek.

## Módosítás

Álnevek: `MT`, `T`; vagy a {{ui:Bekezdés}} az eszköztáron. Szélességre tördelt bekezdésszöveg, helyben gépelve.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: a két sarok közötti szélesség adja meg, hol tördelődik a szöveg. A `H` a `Specify height` kérdést teszi fel, a `J` a `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>` kérdést, az `L` a `Enter line spacing factor (0.25 to 4)` kérdést, az `R` a `Specify rotation angle` kérdést, a `W` a `Specify width (0 for no wrapping)` kérdést teszi fel, és kihagyja a második sarkot.
- Ezután egy doboz nyílik a rajzon: gépeljen; az {{key:Enter}} új bekezdést kezd; a {{key:Mod+Enter}} vagy egy kattintás a doboz kívül befejez; az {{key:Esc}} megszakít. Sávja állítja a magasságot, a sorközt, a szélességet és az igazítást. Lásd: [Szöveg és feliratok hozzáadása](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Álnevek: `ED`, `DDEDIT`; vagy kettőskattintás egy szövegen. `Select a text to edit`, ismétlődve az {{key:Enter}}-ig: mindegyik ugyanabban a dobozban nyílik meg. Kijelölt vagy kettőskattintott szövegről indítva azt szerkeszti, majd véget ér.

### ERASE

Álnevek: `E`, `DELETE`; vagy nyomja meg a {{key:Delete}} billentyűt objektumok kijelölésével.

- `Select objects` (kimarad, ha az objektumok már ki vannak jelölve)

### MOVE

Álnevek: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, `dx,dy` alakban beírva.

### COPY

Álnevek: `CO`, `CP`. Annyiszor másol, ahányszor pontot ad meg.

A második pont kérdésénél az `Array` egy lépésben sort készít: adja meg az elemek számát (az eredeti is egynek számít), majd azt a pontot, ahová az első másolat kerül; a többi ugyanekkora távolsággal követi. A `Fit` ehelyett ezt a pontot az utolsó másolat helyévé teszi, a többit pedig egyenletesen szétosztja közéjük.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, ismétlődve az Enterig. A `U` visszavonja az utolsó másolatot.

### ROTATE

Álnevek: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: fok, az óramutató járásával ellentétes irány a pozitív; vagy kattintson egy pontra, hogy felé forgasson.

### SCALE

Álnevek: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: írjon be egy tényezőt, például `0.5` vagy `2`. A megadott pont távolsága az alapponttól adja a tényezőt.

### MIRROR

Álnevek: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Álnevek: `AL`; vagy {{ui:Módosítás}} › {{ui:Továbbiak}} › {{ui:Igazítás}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Két párral: `Scale objects based on alignment points? [Yes/No] <N>`

Lásd: [Objektumok igazítása](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (vagy a kijelölés), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; a `P` a pontot kéri. A kijelölés megmarad.

### DISTRIBUTE

- `Select objects` (legalább három), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. A két szélső helyben marad; a kijelölés megmarad.

### ALIGNPANEL

Álnevek: `ALP`; vagy {{ui:Módosítás}} › {{ui:Továbbiak}} › {{ui:Igazítás és elosztás}}. Megnyitja azt a panelt, amely kattintásokkal futtatja az ALIGNTO és a DISTRIBUTE parancsokat.

### LASER

Álnevek: `LASERCUT`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Lézer…}}. Megnyitja a Lézer panelt a rajz fölött: mit csinál minden réteg (vágás, bevésés, gravírozás, kitöltés, kép), az előnézet, a menthető GRBL G-kód, valamint a keretezés és a küldés Web Serialon keresztül. Lásd: [Rajz küldése lézerre](topic:laser-cutting).

### STRETCH

Álnevek: `S`; vagy {{ui:Nyújtás}}. `Select objects to stretch`: húzzon keresztező ablakokat a végeken a mozgatáshoz (vagy írja be a `C`-t). `Specify base point [Displacement]`, `Specify second point`. Az ablakokon belüli pontok mozognak: vonalvégek, polivonal-csúcsok (az ívszakaszok megtartják a magasságukat), méretpontok; a körök, ellipszisek, szövegek, pontok és blokkok egészben mozognak, ha középpontjuk vagy beillesztési pontjuk az ablakon belül van. A parancs előtt tett kijelölés megtartja azokat a keresztező ablakokat (és lasszókat), amelyek létrehozták, így ugyanúgy nyúlnak. Ablak nélkül az objektumok egészben mozognak.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Álnevek: `AR`; vagy {{ui:Sokszorozás}}. `Select objects`, majd `Enter array type [Rectangular/POlar] <Rectangular>` (csak az ARRAY-nél).

- A téglalap alakú sokszorozás 4 oszlop × 3 sor kiinduló elrendezéssel indul, az objektumok méretének 1,5-szeresével elosztva, előnézetként mutatva. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: a `COU` az oszlopok és sorok számát kéri, az `S` az oszlopok és sorok közötti távolságot (a negatív balra vagy lefelé megy), a `COL` és az `R` egy-egy irányt.
- A polár kérdezi a `Specify center point of array`-t, 6 elemmel indul, körbe, elforgatva. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: az `I` az elemek számát, az `F` a kitöltendő szöget (+ az óramutató járásával ellentétesen, − az óramutató járásával egyező), a `ROT` Igen vagy Nem.
- Az {{key:Enter}} (eXit) egyszerű objektumokként elkészíti a másolatokat. Egy visszavonási lépés.
- Az `AS` (ASsociative) egyszerű másolatok és szerkeszthető sokszorozás között vált: egyetlen objektum, amelyet később a {{cmd:ARRAYEDIT}} paranccsal, a fogópontjaival vagy a Tulajdonságokban módosíthat. A választás megmarad ({{cmd:ARRAYASSOCIATIVITY}}); egyszerű másolatokkal indul.

### ARRAYPATH

Másolatok egy görbe mentén. `Select objects`, majd `Select path curve`: egyenes, ív, kör, ellipszis, polivonal vagy spline (nem a sokszorozott objektumok egyike). Az útvonal a közelebbi végétől indul, és az első elem az objektumok eredeti helye.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, előnézettel. Az `M`: a `Divide` egyenletesen szétosztja az elemeket az egész útvonalon, a `Measure` egyet helyez el minden megadott távolságonként. Az `I`: az elemek száma (Measure esetén a 0 annyit jelent, amennyi elfér; az útvonal végét meghaladó szám az elférhetőre csökken). Az `SP`: az elemek távolsága az útvonalon (Measure-re vált). Az `AL`: Igen esetén minden elem követi az útvonalat, Nem esetén függőlegesen marad.
- Az `AS` ugyanaz, mint az {{cmd:ARRAY}}-ben. Bekapcsolva a sokszorozás megtartja az útvonal alakjának saját másolatát: az útvonalgörbe későbbi szerkesztése nem mozgatja az elemeket.
- Visszautasít olyan útvonalat, amely nem görbe, és egyetlen elemet.

### ARRAYEDIT

Az Asszociatív lehetőséggel készült sokszorozást módosítja. `Select array` (vagy előbb jelölje ki). Kiírja a sokszorozás jelenlegi állapotát, majd az {{key:Enter}}-ig kérdez:

- Téglalap: `COL` az oszlopok és a közük, `R` a sorok és a közük, `A` az oszlopok futási szöge.
- Polár: `I` az elemek, `F` a kitöltési szög, `ROT` az elemek forgatása Igen vagy Nem.
- Útvonal: `M` Divide vagy Measure, `I` az elemek, `SP` a távolság, `AL` az útvonalhoz igazítás.
- Az `S` (Source) megnyitja a sokszorozott objektumokat külön, a blokkszerkesztőhöz hasonlóan. Ott rajzoljon és szerkesszen; a {{cmd:ARRAYCLOSE}} menti vagy eldobja, és minden elem követi.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, majd kattintson a cserélendő elemekre, és nyomja meg az {{key:Enter}}-t. Ezek az elemek a cserét mutatják; a csereobjektumok kikerülnek a rajzból, és a sokszorozásban élnek tovább. Az `RES` (RESet) minden elemben újra megmutatja a forrásobjektumokat.
- Minden módosítás egy visszavonási lépés. Visszautasít egyszerű másolatokat, egyszerű blokkhivatkozást és zárolt rétegen lévő sokszorozást.

Ugyanezek a számok megvannak a Tulajdonságok panel Sokszorozás részében is, és a sokszorozásnak fogópontjai vannak: az alappontja mozgatja, a második elemnél lévő fogópont a távolságot, az utolsó elem utáni fogópont a darabszámot állítja (polár: a második elem az elemek számát, az utolsó elem a kitöltési szöget). A {{cmd:EXPLODE}} a sokszorozást egyszerű másolatokká alakítja vissza.

### ARRAYCLOSE

Befejezi a {{cmd:ARRAYEDIT}} Source (forrás) szerkesztését: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Jelzi, ha nincs megnyitott sokszorozási forrásobjektum. A {{cmd:BCLOSE}} ugyanezt teszi.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Beállítja, mire induljon a {{cmd:ARRAY}}, az ARRAYRECT, az ARRAYPOLAR és a {{cmd:ARRAYPATH}}; az `AS` lehetőségük ugyanezt a beállítást változtatja. Ebben a böngészőben marad meg.

### OFFSET

Álnevek: `O`. Vonalak, ívek, körök és polivonalak.

Ahol egy polivonal kifelé mozdul el, és egyenes szakaszai egy sarkon szétválnak, a {{cmd:OFFSETGAPTYPE}} dönti el, hogyan záródik a rés.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, majd `Specify point on side to offset` (vagy a Through esetén `Specify through point`), ismétlődve az Enterig.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: hogyan zárja a {{cmd:OFFSET}} a rést egy polivonal külső sarkainál. A `0` a szakaszokat addig hosszabbítja, amíg találkoznak (kezdő beállítás), az `1` egy ívvel köti össze őket a régi sarok körül, a `2` egyenes levágással. A belső sarkok és az ívszakaszok nem változnak. Erre a munkamenetre marad érvényben.

### EXTRIM

A {{cmd:EXTRIM}} egy él egyik oldalán mindent levág. Válassza ki a vágóélt (egyenes, ív, kör, polivonal, ellipszis, spline vagy szerkesztővonal), majd egy pontot azon az oldalon, amelyet tisztítani kell: minden egyenes, ív, kör, polivonal és szerkesztővonal, amely az élt metszi, elveszíti az oldalon lévő részét, ahol az éltől indul. Az oldal kiválasztása közben a kiesni készülő darabok a mutatót követik. Zárt él esetén az oldalak a belső és a külső. Azok az objektumok, amelyek csak érintik az élt, valamint az azt metsző szövegek, sraffozások, splineok és ellipszisek változatlanok maradnak. Egy visszavonási lépés.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: hogyan indul a {{cmd:TRIM}} és az {{cmd:EXTEND}}. Az `1` Gyors: minden objektum vágóél vagy határ. A `0` Szabványos: előbb kérik az éleket. LISP-ben is: `(setvar "TRIMEXTENDMODE" 0)`.

### TRIM

Álnevek: `TR`. Először kiírja: `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Gyors módban minden látható objektum vágóél, és az, amit semmi nem metsz, törlődik; szabványos módban először a `Select cutting edges (Enter = every object)` kérdést teszi fel, és csak ezeknél vág.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ismétlődve: kattintson a levágandó részre (a mutató alatt szürkén és szaggatottan látszik), húzzon át egy útvonalat több részen (mindegyik egy lépésben megy), vagy kattintson két üres helyre egy kerítéshez közöttük. A {{key:Shift}} ehelyett hosszabbít. A `T` a vágóéleket választja (szabványos mód), az `F` a kerítés pontjait kéri, a `C` két ablaksarkot (a részben bennük lévő darabok is elmennek), az `O` a `Enter a trim mode option [Quick/Standard]` kérdést teszi fel, az `E` az `Enter an implied edge extension mode [Extend/No extend]` kérdést (EDGEMODE), az `R` törli a kijelölt objektumokat, az `U` visszavonja az utolsó kattintást vagy húzást. Az Enter befejez. Lásd: [Vágás és nyújtás](topic:trim-and-extend).
- Egy sraffozásra kattintva a sraffozás vágódik: a vágóélek felosztják a sraffozott területet, és a megkattintott darab eltűnik (nem marad meg rajzolt körvonal a helyén). A sraffozás megtartja mintáját vagy színátmenetét; az a sraffozás, amely a határához volt kötve, utána már nincs hozzá kötve, mert nem tölti ki azt. Jelzi, ha ott nincs vágóél, amely a sraffozást szétválasztaná, ha a kattintás a sraffozáson kívül esik, és ha nem maradna semmi (ilyenkor az {{cmd:ERASE}} használata). A húzott útvonal vagy kerítés nem vág sraffozást.

### EXTEND

Álnevek: `EX`. Ugyanaz, mint a TRIM fordítva: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Egy kattintás a hozzá legközelebbi véget meghosszabbítja a következő határig; egy húzott útvonal vagy kerítés minden objektumot meghosszabbít, amelyet átmetsz; a {{key:Shift}} vág. A `B` a határéleket választja (szabványos mód). A módot és az élt a TRIM-mel közösen használja.

### LINKVIEWS

Álnevek: `SYNCVIEWS`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:A panelek nézeteinek összekapcsolása}}, vagy a rajzlapok kapcsolójele. `Link the panes' views [ON/OFF]` (az Enter a másik állapotot választja): bekapcsolva az aktív panelen végzett eltolás vagy nagyítás minden olyan panelt mozgat, amely ugyanolyan fajta teret mutat. Lásd: [Képernyő osztása](topic:split-screen).

### OPENIN3D

Nincs álnév; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Megnyitás a ModelCraftban}}, ahol a 3D-modellező alkalmazás átveszi a kézbesített rajzot. Új lapon nyitja meg ott, DWG-ként (semmi nem töltődik fel). Ha a böngésző letiltja a lapot, ezt jelzi.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: egy üres helyen nyomva és húzva mit rajzol. Ugyanaz, mint a Beállítások › CadCraft › Kijelölés húzással. Lásd: [Lasszós kijelölés](topic:lasso-selection).

### FILLET

Álnevek: `F`. Vonalak, ívek, körök és polivonalak. Először kiírja: `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - Az `R` a `Specify fillet radius <last>` kérdést teszi fel. A `T` a `Enter Trim mode option [Trim/No trim]` kérdést: a No trim (nincs vágás) esetén az objektumok változatlanok maradnak, és csak az ív kerül hozzá.
  - Az `M` további sarkokra folytatja a parancsot az {{key:Enter}}-ig; az `U` visszavonja az utolsó sarkot anélkül, hogy kilépne a parancsból.
  - A `P` a `Select 2D polyline [Radius]` kérdést teszi fel, és minden olyan sarkot lekerekít, ahol két egyenes szakasz találkozik. A már meglévő lekerekítéseket az új sugár váltja; a 0 sugár eltávolítja őket. Azokat a sarkokat, amelyek oldalai túl rövidek a sugárhoz, érintetlenül hagyja, és megszámolja őket.
- `Select second object or shift-select to apply corner [Radius]`. Tartsa nyomva a {{key:Shift}} billentyűt kattintás közben éles sarokhoz, a sugártól függetlenül.

Kattintson minden objektumra azon a részen, amelyet meg akar tartani. A nem találkozó két vonal meghosszabbításra kerül. Két párhuzamos vonal között a rés fölé félkör kerül, az első vonal azon végénél, amely a kattintásához legközelebb van. Egy kör soha nem vágódik. Egy polivonal két egymás melletti szakaszára az ív a polivonalon belülre kerül; egy polivonal és egy másik objektum működik, ha a vágás a polivonal első vagy utolsó szakaszára esik.

### CHAMFER

Álnevek: `CHA`. Vonalak és polivonalak egyenes szakaszai. Először kiírja a jelenlegi távolságokat (vagy hosszt és szöget).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - A `D` a `Specify first chamfer distance <last>` és a `Specify second chamfer distance <the first>` kérdést teszi fel: az elsőt a kiválasztott első vonalból vágja le, a másodikat a másikból.
  - Az `A` a `Specify chamfer length on the first line` és a `Specify chamfer angle from the first line` kérdést teszi fel.
  - Az `E` (mEthod) kiválasztja, melyik kettő szerint készüljön a következő letörés. A `T`, `M`, `U` és `P` ugyanúgy működik, mint a {{cmd:FILLET}}-nél.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. A {{key:Shift}}+kattintás éles sarkot készít.

A vonalnál hosszabb távolságot visszautasít (`Distance is too large.`).

### BREAK és BREAKATPOINT

Álnevek: `BR`. `Select object` (ahol kattint, az az első pont), `Specify second break point [First point]`; az `F` a `Specify first break point` és a `Specify second break point` kérdést teszi fel. A köztes rész eltűnik; körnél az óramutató járásával ellentétesen az első ponttól. A BREAKATPOINT a `Specify break point` kérdést teszi fel, és az objektumot ott két részre bontja (kör kivételével).

### LENGTHEN

Álnevek: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: egy kattintás kiírja a `Current length` értéket (íveknél a bezárt szöget is), és újra kérdez. A `DE` a `Enter delta length (negative shortens) [Angle]` kérdést teszi fel, a `P` a `Enter percentage length` kérdést, a `T` a `Specify total length [Angle]` kérdést, a `DY` húzással működik. Ezután a `Select an object to change [Undo]`, ismétlődve: a kattintáshoz legközelebbi vég mozog. Vonalak, ívek és nyitott polivonalak.

### JOIN

Álnevek: `J`. `Select objects to join`. A végpontjaiknál találkozó vonalak, ívek és nyitott polivonalak polivonallá válnak (zárttá, ha a lánc zárul); egy egyenesen lévő vonalak egy vonallá; egy körhöz tartozó ívek egy ívvé vagy körré. Az előzmény kiírja, hány objektum csatlakozott, és hány nem.

### MATCHPROP

Álnevek: `MA`, `PAINTER`. `Select source object`, majd `Select destination objects [Settings]`, és {{key:Enter}}. Átmásolja a réteget és a színt, és azonos típusú objektumok között a szövegmagasságot és -szélességet, a méretezés méreteit vagy a sraffozás mintáját. Az `S` a `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]` kérdést teszi fel, ismétlődve az Enterig; a választás a munkamenetre marad.

### EXPLODE

Álnevek: `X`. A polivonalak vonalakká és ívekké, a blokkhivatkozások az alkotóobjektumaikká, a méretek vonalakká, nyílhegyekké és szöveggé bomlanak. A szerkeszthető sokszorozás ({{cmd:ARRAYEDIT}}) egyszerű másolatokká alakul az objektumaival együtt.

- `Select objects`

### GROUP

Álnevek: `G`. A {{cmd:GROUP}} a kijelölt objektumoknak közös nevet ad. Jelölje ki az objektumokat, majd írjon be egy nevet (szóköz nélkül; a `?` listázza a csoportokat; az Enter névtelen csoportot készít), és egy névvel rendelkező csoportnál egy opcionális leírást. Ezentúl az egyikre kattintva mindegyik kijelölődik, vagy egy olyat érintő ablak mind kijelöli, így együtt mozognak, másolódnak és törlődnek; minden objektum továbbra is önálló objektum. Egy objektum több csoportban is lehet. Egy teljes csoport másolata új névtelen csoport; egy tag önálló másolata a csoporthoz csatlakozik. A csoportok ahhoz a térhez tartoznak, amelyben készültek (a modell vagy egy lap). DWG vagy DXF formátumban mentéskor megmaradnak, és a CadCraftban a fájl újbóli megnyitásakor is; a DXF 2000 fájlok csoportobjektumként is hordozzák őket más programok számára, és a DXF vagy DWG megnyitásakor a másik programban készült csoportok is beolvasódnak.

### UNGROUP

A {{cmd:UNGROUP}} szétbontja a csoportokat: jelöljön ki csoportok objektumait (minden csoport, amelyben vannak, szétbomlik), vagy írja be a `Name`-et és a csoport nevét. Az objektumok a rajzban maradnak. Egy visszavonási lépés visszahozza a csoportokat.

### GROUPEDIT

A {{cmd:GROUPEDIT}} egy csoportot módosít. Válasszon ki egy objektumát, vagy adja meg a `Name`-et és a nevét; a már kijelölt csoport úgy vehető, ahogy van. Ezután: `Add` objektumok (egyenként kiválasztva, nem csoportonként), `Remove` objektumok, `REName` a csoport átnevezése, a `Description` megváltoztatása, vagy a `Selectable` beállítása (hogy a kattintás a teljes csoportot jelölje-e ki). Az `eXit` vagy az Enter befejez. Az objektumok nélküli csoport megszűnik.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1`-gyel (kezdő beállítás) egy csoportos objektumra kattintva vagy ablakkal az egész csoport kijelölődik; `0`-val csak egyes objektumok, így egy tagot is szerkeszthet. Erre a munkamenetre marad érvényben.

## Vágólap

A CadCraft saját vágólapja: működik egy rajzon belül, rajzok között, és a CadCraft lapok között ebben a böngészőben. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, vagy a {{ui:Másolás}} a {{ui:Szerkesztés}} csoportban. Objektumokat másol a vágólapra, a használt blokkokkal és rétegekkel együtt. Az objektumok kijelölve maradnak.

- `Select objects to copy` (kimarad, ha az objektumok már ki vannak jelölve)

### CUTCLIP

{{key:Mod+X}}, vagy a {{ui:Kivágás}} a {{ui:Továbbiak}} menüben. Objektumokat másol a vágólapra, majd törli őket (egy visszavonási lépés).

- `Select objects to cut` (kimarad, ha az objektumok már ki vannak jelölve)

### COPYBASE

Objektumokat másol a vágólapra a megadott alappontjával; a beillesztés ezt a pontot helyezi el.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, vagy a {{ui:Beillesztés}} a {{ui:Szerkesztés}} csoportban. A másolat követi a kurzort, a kiterjedése bal alsó sarkától függően (vagy a középpontjától, vagy a `COPYBASE` pontjától; lásd: [CadCraft-beállítások](topic:settings)).

- `Specify insertion point`

A beillesztett objektumok kijelöltek. A rajzban már azonos néven létező blokk megtartja ennek a rajznak a definícióját.

Ha a MarkupCraftban másolt terület újabb, mint amit a CadCraft másolt (és 6 óránál fiatalabb), a {{key:Mod+V}} és a `PASTECLIP` ezt a területet illeszti be: lásd `PASTEAREA`.

### PASTEAREA

Álnevek: `PAREA`. A {{ui:Másolt terület beillesztése}} a {{ui:Továbbiak}} menüben. A MarkupCraftban a {{ui:Terület másolása}} paranccsal másolt területet képként, valódi méretben illeszti be. Lásd: [Képek a rajzban](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (csak akkor, ha a lapnak nem volt rajzléptéke): egy szám, az {{key:Enter}} a papírmérethez, vagy a `P`, majd `First point on the pasted area`, `Second point on the pasted area` és a valódi távolságuk.

### PASTEORIG

{{key:Mod+Shift+V}}, vagy a {{ui:Beillesztés helyben}} a {{ui:Továbbiak}} menüben. Azokra a koordinátákra illeszti be, ahonnan az objektumokat másolták. Nem kérdez semmit.

### DUPLICATE

Álnevek: `DUP`. {{key:Mod+D}}, vagy a {{ui:Kettőzés és mozgatás}} a {{ui:Továbbiak}} menüben. Az objektumok másolata a mutatóval együtt mozog onnan, ahol van; az {{key:Esc}} semmit nem hagy hátra. Nem használja a vágólapot.

- `Select objects to duplicate` (kimarad, ha az objektumok már ki vannak jelölve)
- `Specify where the copy goes (Esc leaves nothing)`: kattintson, írjon be egy pontot, `@dx,dy`-t (a mutató helyétől), vagy egy távolságot a kurzor irányába.

### SELECT

A `Select objects` kérdést teszi fel (az alábbi összes lehetőséggel), és a kiválasztott elemek kijelölve maradnak a következő parancsnak, vagy a későbbi `P`-nek.

### QSELECT

Álnevek: `QS`. A böngészőben a {{ui:Gyorskijelölés}} párbeszédpanel (lásd: [Objektumok kijelölése](topic:select-objects#select-by-a-rule-quick-select)). Nélküle a parancssor kérdezi: `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` és `Enter value`. A találatok lesznek a kijelölés.

### SELECTSIMILAR

Álnevek: `SIM`. `Select objects [SEttings]` (vagy a jelenlegi kijelölés): kijelöli az összes olyan azonos típusú objektumot, amelynek ugyanaz a rétege és a színe (és a blokk neve, a sraffozás mintája). Az `SE` a `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]` kérdést teszi fel, ismétlődve az Enterig.

### FIND

Nincs álnév; vagy {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Keresés és csere}}. A böngészőben a {{ui:Keresés és csere}} párbeszédpanel (lásd: [Szöveg és feliratok hozzáadása](topic:text#find-and-replace-words)). Nélküle: `Enter text to find`, majd `Enter replacement text (Enter: select what is found)`. Szövegben, attribútumértékekben és méretszövegben keres, a megnyitott lapon vagy a kijelölésen belül.

### SELECTALL és DESELECT

A `SELECTALL` (álnév: `AI_SELALL`, {{key:Mod+A}}) kijelöli a megnyitott lapon az összes szerkeszthető objektumot. A `DESELECT` (álnevek: `AI_DESELECT`, `SELECTNONE`; vagy {{key:Esc}}) törli a kijelölést.

## Méretezés

### DIMLINEAR

Álnevek: `DLI`, `DIMLIN`. Vízszintes vagy függőleges távolság.

- `Specify first extension line origin [Select object]` (Enter vagy `S`: `Select object to dimension`, majd kattintson egy vonal, ív, kör vagy polivonal-szakaszra)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. A `T` a szöveget kéri (`<>` a mért érték), a `H` és a `V` rögzíti az irányt, az `R` a `Specify angle of dimension line <0>` kérdést teszi fel.

### DIMALIGNED

Álnevek: `DAL`, `DIMALI`. Két pont közötti valódi távolság.

- Kezdőpontok, mint a {{cmd:DIMLINEAR}}-nél, majd `Specify dimension line location [Text]`.

### DIMANGULAR

Álnevek: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Ív: az ív szöge. Kör: `Specify second angle endpoint`. Vonal: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: kattintson a mérendő szög belsejébe.

### DIMRADIUS és DIMDIAMETER

Álnevek: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, majd `Specify dimension line location [Text]`.

### DIMCONTINUE

Álnevek: `DCO`, `DIMCONT`. Az utoljára készített lineáris vagy párhuzamos méretből folytatja (vagy kérdezi a `Select linear or aligned dimension`-t).

- `Specify second extension line origin [Undo]`, ismétlődve az Enterig.

### DIMBASELINE

Álnevek: `DBA`, `DIMBASE`. Mint a {{cmd:DIMCONTINUE}}, de minden méret az első kezdőpontból indul, és egyre kijjebb kerül.

### DIMORDINATE

Álnevek: `DOR`, `DIMORD`. `Specify feature location`, majd `Specify leader endpoint [Xdatum/Ydatum/Text]`. Kiírja, milyen távol van az elem az USC origójától az X vagy az Y mentén, egy vezetővonalon: a nagyjából felfelé vagy lefelé futó vezetővonal az X-et, az oldalra futó az Y-t adja; az `Xdatum` és az `Ydatum` rögzíti, melyik. Az origót először a {{cmd:UCS}} paranccsal állítsa be (ennek hiányában a rajz 0,0 pontja). A fogópontok mozgatják az elemet, az origót és a vezetővonal végét, az érték pedig követi. DWG és DXF formátumban valódi koordinátaméretként mentődik. Visszautasítja, ha a vezetővonal vége maga az elemen van.

### DIMARC

Álnevek: `DAR`. `Select arc or polyline arc segment`, majd `Specify arc length dimension location [Text]`. Az ív mentén mér (nem a húr mentén), és az értéke elé az ívjelet írja. Visszautasít teljes kört, egyenest vagy egyenes polivonal-szakaszt. A DWG ívhossz-méretként tárolja; a DXF szöges méretként tárolja, a hosszal a szövegében, és a CadCraft újra ívhossz-méretként nyitja meg.

### DIMJOGGED

Álnevek: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Sugárméret olyan görbéhez, amelynek középpontja messze van vagy a lapon kívül esik: a méretvonal a megadott ponttól indul a középpont helyett, egy töréssel, de továbbra is a valódi sugarat írja. A DWG töréses sugárméretként tárolja; a DXF sugárméretként tárolja, és a CadCraft újra töréssel nyitja meg.

### DIMJOGLINE

Álnevek: `DJL`. `Select dimension to add jog [Remove]`, majd `Specify jog location (or press Enter)`. Töréses jelet tesz egy lineáris vagy párhuzamos méretvonalra, jelezve, hogy a távolság nincs léptékhelyesen rajzolva; az érték nem változik. A `Remove` eltávolítja. Más fajta méretet visszautasít.

### QDIM

Nincs álnév. `Select geometry to dimension`, majd `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Több objektumot méret egy lépésben, vonalak és polivonal-szakaszok végeiből, körök és ívek középpontjaiból, pontokból és blokkhivatkozásokból. Az objektumok fölötti vagy alatti pozíció keresztbe mér, az oldalukon lévő felfelé. A `Continuous` láncba köti a pontokat, a `Baseline` mindet az elsőtől méri, a `Staggered` a párokat középről kifelé egymásba ágyazza, az `Ordinate` minden pontot a viszonyítási ponttól mért távolságával lát el (a `datumPoint` újat választ), a `Radius` és a `Diameter` minden kiválasztott kört és ívet méretez. A mód emlékezetben marad. Mindez egy visszavonási lépés. Jelzi, ha két pontnál kevesebb van, vagy a Radius és a Diameter esetén nincs ív vagy kör.

### DIMBREAK

Álnevek: `DBREAK`. `Select dimensions to add or remove breaks`, majd `Break where other objects cross [Auto/Manual/Remove] <Auto>`. Az `Auto` rést hagy a méretvonalban és a hosszabbítóvonalakban mindenhol, ahol egy másik objektum metszi őket, és ezeket a réseket újraszámítja, ha ezek az objektumok vagy a méret mozog. A `Manual` (egy méret) két pontot kér, és közöttük rést hagy. A `Remove` minden rést eltávolít. A rés a méretszöveg magasságának 1,5-szerese.

### DIMSPACE

Nincs álnév. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. A párhuzamos lineáris és párhuzamos méretek méretvonalait (vagy a szögméreteket egy közös csúcsnál) úgy mozgatja, hogy egyenlő távolságra kerüljenek egymástól, az alapmérettől számolva, mindegyik annak az oldalán, ahol van. A `0` az alapmérethez igazítja őket; az `Auto` a méretszöveg magasságának kétszerese. Az alapmérettel nem párhuzamos méretek változatlanok maradnak.

### DIMINSPECT

Nincs álnév. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Keretet rajzol az érték köré, előtte címkével és utána az ellenőrzési aránnyal. A `remove` eltávolítja a keretet. A tűrésszöveg az értékkel marad.

### DIMOVERRIDE

Álnevek: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, újra az Enterig, majd `Select dimensions`. Ezeket a beállításokat csak a kijelölt méreteken változtatja meg; a méretezési stílus nem változik. Azokat a változókat fogadja el, amelyek szám vagy kapcsoló (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). A `Clear` a kijelölt méreteket visszaállítja a stílusukra. Visszautasít olyan nevet, amely nem ilyen változó, és olyan értéket, amelyet nem tud fogadni.

### DIMREASSOCIATE

Álnevek: `DRE`, `DIMREASSOC`. `Select dimensions`, majd mindegyikhez a hosszabbítóvonal-kezdőpontjai (`Specify first extension line origin on an object`: illeszkedés egy vonal végére vagy közepére, egy polivonal-sarokra, egy középpontra; az Enter a pontot szabadon hagyja), vagy sugár, átmérő, töréses sugár vagy ívhossz-méret esetén `Select arc or circle`. A méret ezután ezekhez az objektumokhoz kötődik: ha azok mozognak vagy méretet változtatnak, a méret ugyanabban a visszavonási lépésben követi őket, és újra mér. Egy kötött pont kézi mozgatása vagy az objektum törlése megszünteti a kötést. A kötés DWG-ben és DXF 2000-ben a CadCraft saját adataként mentődik; más programok hagyományos méretet látnak.

### DIMDISASSOCIATE

Álnevek: `DDA`, `DIMDISASSOC`. `Select dimensions`. Szabaddá teszi őket azoktól az objektumoktól, amelyekhez kötve voltak; semmi nem mozdul.

### CENTERMARK

Álnevek: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, újra az Enterig. Keresztet rajzol a közepére és négy középvonalat a görbén túlnyúlva (vonaltípus: CENTER), mint sima vonalakat az aktuális rétegen; méretét az aktuális méretezési beállítások nyílmérete és általános léptéke adja, és az USC szerint fordul. Ha a kör mozog, nem követik.

### CENTERLINE

Álnevek: `CL`. `Select first line`, `Select second line`. Két vonal közé húz egy vonalat a közepükön (metszésük esetén a szögfelezőn), kissé hosszabban, mint amilyenek ők, CENTER vonaltípussal. Sima vonal: nem követi a két vonalat.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Nincs álnév. Mindegyik a `Enter new value for … <current>` kérdést teszi fel, és ezt a méretet állítja be az **új** méretekhez: általános léptékek, szövegmagasság, nyílméret, tizedesjegyek (legfeljebb 8), a szöveg körüli rés, a méretvonalon túli túlnyúlás, az origótól való eltolás. Lásd: [Méretek beállítása](topic:dimension-settings).

### DIMLUNIT

Méretezési beállítás: csak az új méretek formátuma (1 tudományos, 2 tizedes, 3 mérnöki, 4 építészeti, 5 törtes).

### DIMSTYLE és -DIMSTYLE

Álnevek: `DST`, `DDIM`, `D`. A méretezési stílusok kezelője: {{ui:Aktuálissá tétel}}, {{ui:Új…}}, {{ui:Módosítás…}}, {{ui:Átnevezés…}}, {{ui:Törlés}}, {{ui:Összehasonlítás…}}, {{ui:Alkalmazás a kijelöltre}}. A `-DIMSTYLE` a parancssorban: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Lásd: [Méretek beállítása](topic:dimension-settings#named-dimension-styles).

### DIMEDIT és DIMTEDIT

A `DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, majd a méretek (vagy a már kijelöltek). A New az új szöveget kéri (`<>` = a mért érték); a Rotate egy szöget; az Oblique a hosszabbítóvonalak szögét az X tengelytől (az Enter = nincs; csak lineáris és párhuzamos méreteknél). A `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Lásd: [Méretek beállítása](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Álnevek: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, vagy kijelölt méreteknél `Units in the text of the selected dimensions`. A mért hosszt abban az egységben írja ki, az egység utótaggal (DIMLFAC és DIMPOST utótag); a `D` visszatér a rajz egységeihez. Lásd: [Méretek mm, cm, m vagy km egységben](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Álnevek: `RC`. Kiírja: `Arc length: … Type: …`, majd `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. A Rectangular a `Specify opposite corner` kérdést teszi fel; a Polygonal a `Specify next point (Enter closes the cloud) [Undo]` kérdést; a Freehand a mutatót követi, amíg nem kattint vagy nem nyom Entert; az `O` a `Select object` kérdést teszi fel, és a `Reverse direction? [Yes/No] <N>` kérdést, majd az objektumot felhővé alakítja. Az `A` a `Specify the length of each arc` kérdést teszi fel. Az `R`, a `P` és az `F` a következő felhő típusát választja. Az eredmény zárt, ívekből álló polivonal.

### MLEADER

Álnevek: `MLD`; vagy {{ui:Vezetővonal}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, majd a szöveg a helyben nyíló dobozban (vagy enélkül `Enter text (an empty line ends)`). A `Block` először blokknevet kér, és a többszörös vezetővonal azt a blokkot mutatja szöveg helyett. További vezetővonalak: {{cmd:MLEADEREDIT}}. DWG-ben valódi többszörös vezetővonalként mentődik; a DXF megtartja a vonalakat, a nyílhegyet és a szöveget, amelyeket rajzol.

### MLEADEREDIT

Álnevek: `MLE`. `Select a multileader`, majd `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: minden pont új vezetővonalat ad egy új nyílhegytől ugyanahhoz a leszálláshoz, az Enterig. A `Remove leaders` ezután eltávolítja a megkattintott vezetővonalat (egy többszörös vezetővonalnak legalább egy marad). A `Block content` blokknevet kér, és a szöveg helyett azt a blokkot mutatja (az attribútumait kéri); a `Text content` visszaállítja a szöveget. Minden vezetővonalnak saját fogópontja van. A DWG-ben minden vezetővonal és a blokk egy többszörös vezetővonalban marad.

### MLEADERALIGN

Álnevek: `MLA`. `Select multileaders`, majd `Select multileader to align to [Distribute/Spacing/Use current spacing]` és `Specify direction`. A többi többszörös vezetővonal leszállását (és szövegüket vagy blokkjukat) a kiválasztott leszállásán átmenő vonalra mozgatja abban az irányban; a nyílhegyek ott maradnak, ahová mutatnak. A `Spacing` egyenlő távolságra is állítja őket; a `Distribute` két pontot kér, és közéjük egyenletesen szétosztja őket. Legalább két többszörös vezetővonal kell.

### MLEADERCOLLECT

Álnevek: `MLC`. `Select multileaders`, majd `Specify collected multileader location [Vertical/Horizontal]` (az Enter az első helyén tartja). Több többszörös vezetővonalból egyet készít: a blokk tartalom egy új blokkba kerül, amely mindet egymás mellett vagy egymás alatt tartalmazza; a szöveges tartalom egy megjegyzéssé lesz, minden sorral külön. Az első többszörös vezetővonal megtartja a vezetővonalait; a többit eltávolítja. Visszautasít szöveges és blokk tartalom keverékét.

### TABLE

Álnevek: `TB`; vagy {{ui:Feliratozás}} › {{ui:Továbbiak}} › {{ui:Tábla}}. Táblázatot készít: egy objektum, amelyet úgy mozgat, másol, forgat, léptékez és plottol, mint bármely más objektumot, cellái adatként megmaradnak.

- `Number of data rows or [Paste/File/Style] <3>`, majd `Number of columns <3>`, `Text height` és `Top left corner of the table`. A táblázat kap egy címsort (egy egyesített cella) és egy fejlécsort az adatsorok fölé.
- `P`: táblázat a vágólapon lévő táblázatkezelő cellákból (szöveg, cellák között tabulátorral). Ha ilyen cellák vannak a vágólapon, a {{key:Ctrl+V}} is ugyanezt teszi, kivéve, ha a CadCraft saját másolata az újabb (vagy a CadCraft nem tudja eldönteni; akkor a saját másolatát illeszti be, és ezt jelzi). `F`: táblázat egy `.csv` vagy tabulátorral elválasztott fájlból. Az első sor lesz a fejléc; az oszlopszélességek a szöveghez igazodnak.
- `S`: a táblázat stílusának kiválasztása (lásd: {{cmd:TABLESTYLE}}).
- Visszautasít nem egész számú sor- vagy oszlopszámot, és a táblázatba nem férő cellaszámot (2000 sor, 200 oszlop, 40 000 cella).
- Az {{cmd:EXPLODE}} a táblázatot vonalakká és szöveggé alakítja. DWG-ben mentve valódi táblázatobjektum, amelyet más programok szerkeszthetnek; DXF-ben mentve olyan blokk, amely rajzolja, és a CadCraft újra táblázatként nyitja meg.

### TABLEDIT

Álnevek: `TABLEEDIT`, `TABEDIT`; vagy kettőskattintás egy cellán. Táblázatot szerkeszt.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kattintson egy cellára, vagy egy kijelölt táblázat mellett írja be a nevét (`B3`: B oszlop, 3. sor; a címsor az 1. sor). A böngészőben egy doboz nyílik a cella fölött: az {{key:Enter}} megtartja a szöveget, a {{key:Tab}} a következő cellára lép, az {{key:Alt+Enter}} új sort kezd, az {{key:Esc}} a cellát változatlanul hagyja.
- A `=` jellel kezdődő szöveg képlet: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, a `+ - * / ^` műveletekkel, zárójelekkel és olyan függvényekkel, mint a `sqrt` és a `round`. A cella az értéket mutatja; az a képlet, amely a saját celláját nevezi meg, a táblázaton kívüli cellára hivatkozik, vagy számot nem tartalmazó cellára, `####`-et mutat, és a parancssor megmondja, miért.
- `R` / `C`: `Insert` vagy `Delete` sorok vagy oszlopok egy kiválasztott cellánál (hány, és felül vagy alul, balra vagy jobbra). A képletek követik a cellákat, amelyekre hivatkoznak.
- `S`: az oszlop szélessége és a sor magassága. Egy sor soha nem alacsonyabb, mint amennyi a szövegének kell. A kijelölt táblázatnak minden oszlop- és sorszélen van egy fogópontja.
- `M`: egyesítés egy kiválasztott cellától egy másikig; `U`: szétbontás. `A`: igazítás (`TL` bal felső … `MC` közép középső … `BR` jobb alsó). `H`: ennek a cellának a saját szövegmagassága (0 = a stílusé). `K`: a sor címsor, fejléc vagy adatsor legyen. `CL`: a cella kiürítése.
- Visszautasít zárolt rétegen lévő táblázatot, minden sor vagy oszlop törlését, és olyan egyesítést, amely egy másik egyesített cellát kettévágna.

### TABLESTYLE

Álnevek: `TS`. Felsorolja a táblázatstílusokat azzal, hány táblázat használja mindegyiket, majd `Table style: [New/Set/Edit/Delete/Apply]`.

- Egy stílus tartalmazza a cím-, fejléc- és adatsorok szövegmagasságát és igazítását, a cellamargót, és azt, mely szegélyek rajzolódnak (külső, sorok között, oszlopok között).
- Az `N` a jelenlegi stílusból készít egyet, és azt teszi aktuálissá; az `S` a jelenlegi stílust állítja be (az új táblázatok azt kapják); az `E` szerkeszt egyet: az azt használó táblázatok újrarajzolódnak; az `A` a kijelölt táblázatoknak a jelenlegi stílust adja; a `D` töröl egyet (a Standard és az aktuális nem; a törölt stílust használt táblázatok megőrzik a kinézetüket).
- A stílusok a rajzzal együtt mentődnek (DWG és DXF).

### TABLEEXPORT

A táblázat által megmutatott tartalmat CSV-fájlként menti (a képlet az értékével). `Select a table`, vagy előbb jelöljön ki egyet. Az `=`, `+`, `-` vagy `@` jellel kezdődő szövegcellák elé egy `'` kerül, hogy a táblázatkezelő ne futtassa le őket.

### TABLEPASTE

Álnevek: `PASTETABLE`. Táblázatot készít a vágólapon lévő táblázatkezelő cellákból, majd kérdezi a bal felső sarkát. Ugyanaz, mint a {{cmd:TABLE}} › `Paste`.

### DATALINK

Álnevek: `DL`. `Data link: [New/List/Remove] <New>`. Az `N` CSV-fájlt kér, táblázatot helyez el belőle, és megjegyzi a fájl nevét; az `L` listázza a kapcsolatokat a fájljukkal, méretükkel, az olvasás idejével és azzal, hány táblázat használja őket; az `R` eltávolít egy kapcsolatot (a táblázatai egyszerű táblázatok maradnak).

### DATALINKUPDATE

Álnevek: `DLU`. Újraolvassa az adatkapcsolat fájlját, és feltölti a hozzá kötött táblázatokat (sorok és oszlopok hozzáadódnak vagy eltávolítódnak, hogy illeszkedjenek). A böngésző nem tud magától fájlt megnyitni, ezért újra ki kell választani a fájlt. Több kapcsolat esetén megkérdezi, melyiket.

### FIELD

Mezőt helyez a rajzba: olyan szöveget, amely magától kiszámítja magát. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: most, vagy a mentett, létrehozott vagy plottolt dátum, és egy formátum (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: a fájl neve, kiterjesztéssel vagy anélkül. `S`: a lap száma, a címe, vagy hány lap van. `P`: egy rajztulajdonság név szerint (lásd: {{cmd:DWGPROPS}}). `O`: egy objektum kiválasztása, majd az, amit ki kell olvasni (terület, hossz, kerület, sugár, átmérő, réteg, név, x, y, szöveg, forgatás, szín), és a tizedesjegyek. `E`: egy képlet. `C`: szöveg, a kódjait úgy beírva, ahogy van, például `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Ezután: `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: a kiválasztott szöveghez a mező a tartalma után kerül; egy táblázatcella hasonlóan; egy attribútumos blokkhivatkozás kérdezi, melyik attribútum; az {{key:Enter}} egy magasságot és egy pontot kér új szöveghez.
- A képernyőn a mező világosszürke hátteret kap; a plottolás és a PDF soha nem mutatja. A mező szövegének kézi felülírása megszünteti a mezőt. A ki nem számítható mező `####`-et mutat.
- Egy objektum mezője a CadCraft által az objektumokon tartott kulcs alapján találja meg az objektumot (Beállítások › CadCraft › Egyesítésbarát fájlok); a kulcsok kikapcsolt állapotban visszautasít.

### UPDATEFIELD

Álnevek: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. Az `S` állítja be, mikor frissülnek magukat a mezők: írja be az `O` (open, megnyitás), `S` (save, mentés), `P` (plot, plottolás), `R` (regen, újragenerálás) betűit (mind a négy a kezdő beállítás), vagy a `NONE`-t.

### DWGPROPS

Álnevek: `DRAWINGPROPS`. Kilistázza a rajz tulajdonságait, majd `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Az első hatot a {{ui:Rajzadatok}} panel mutatja; a `U` saját nevet és értéket ad hozzá, az `R` eltávolít egyet. A mezők ezeket olvassák (`%<prop:title>%`, `%<prop:Client>%`), és azonnal követik. Visszautasít olyan egyéni nevet, amely beépített, vagy amely `%`, `<`, `>`, idézőjel vagy visszaperjel jelet tartalmaz.

## Paraméteres

Lásd: [Rajz kényszerezése](topic:constraints) és [Paraméterek és egyenletek használata](topic:parameters). A kényszerek a {{ui:Modell}} lapon működnek.

### GEOMCONSTRAINT és a GC parancsok

Álnevek: `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, majd az adott parancs kérdései.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (a második mozog).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT és a DC parancsok

Álnevek: `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (szám, kifejezés vagy `name=expression`).
- {{cmd:DCALIGNED}}: mint fent, a `[Object/Point & line/2Lines]` lehetőséggel.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. Az `S` a távolság- és szögtűrést kéri.
- {{cmd:DELCONSTRAINT}} (álnév: `DELCON`): `Select objects`; a kényszereik törlődnek.
- {{cmd:CONSTRAINTBAR}} (álnév: `CBAR`): `Select objects [Showall/Hideall]`, majd `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS és -PARAMETERS

{{cmd:PARAMETERS}} (álnevek: `PAR`, `PARAM`) megnyitja a {{ui:Paraméterek}} panelt. A `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Álnév: `SWMACRO`. Letölt egy makrót (.swb), amely a modellt egyetlen kényszerezett vázlatként építi újra a SolidWorks-ben. Lásd: [Vázlatok mozgatása más alkatrész-modellezőkbe és onnan](topic:solidworks-sketches).

## Blokkok

### ANNOSCALE

Álnevek: `CANNOSCALE`. Kiírja a rajz feliratozási léptékét és azt, hány feliratozó objektuma van, majd kérdezi a `New annotation scale`-t: írjon be `1:50`-et, `1:100`-at, `2:1`-et, egy puszta számot (az `50` az 1:50) vagy a rajz egyik saját léptékének nevét. Minden feliratozó szöveg és méret átméreteződik, hogy az új léptéken ugyanakkora méretben nyomtatódjon, egy visszavonási lépésben; a nem feliratozó objektumok változatlanok maradnak, és az a objektum is, amely léptéklistát tart, de az új lépték nincs benne ({{cmd:OBJECTSCALE}}). Lásd: [Mértékegységek, papírok és léptékek](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Álnevek: `OBJSCALE`. `Select annotative objects`, majd `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. A feliratozó szöveg vagy méret feliratozási léptékek listáját tartja. Az `Add` és a `Delete` egy léptéket kér (`1:50`, `2:1`, egy puszta szám, vagy a rajz egyik saját léptékének neve); a `Current scale` a rajz feliratozási léptékét adja hozzá; a `List` kiírja minden objektum léptékeit. Az a nézetablak, amelynek léptéke szerepel egy objektum listájában, az objektumot olyan méretben mutatja, amely ezen a léptéken a papíron a magasságát adja, a képernyőn és a plottokban egyaránt. Az utolsó lépték nem törölhető. A nem feliratozó objektumok kimaradnak: először a Tulajdonságokban kapcsolja be a Feliratozót. A listák DWG és DXF formátumban a CadCraft saját adataként mentődnek. Lásd: [Mértékegységek, papírok és léptékek](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Álnevek: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Bekapcsolva (így indul a rajz): egy feliratozó objektum olyan nézetablakban vagy a modellben is megjelenik, amelynek léptéke nincs a listájában, a rajta lévő méretben. Kikapcsolva: ott nem jelenik meg, és a modellben nem választható ki. A kapcsoló egy visszavonási lépés; a fájl nem tárolja.

### SCALELISTEDIT

Álnevek: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]`, az Enterig. Add: `Scale name`, `Paper units`, `Drawing units`. Az Edit és a Delete a lépték nevét kéri. A rajz saját léptékei bekerülnek a nézetablak- és plottolási léptéklistákba, és a rajzzal együtt mentődnek. Lásd: [Mértékegységek, papírok és léptékek](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT és PEDIT

A `SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: pontok, amelyeken a görbe áthalad; `Close`, `Undo`, majd `Start tangent` és `End tangent` (egy pont, vagy az {{key:Enter}}). A Method › Control vertices fokot kér (1 és 5 között), és egy vezérlő sokszögből rajzol. Az Object a polivonalakat a csúcsaikon átmenő splineokká alakítja. A `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. A `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, az `M` több objektumhoz; az egyenesek, ívek és splinek polivonallá alakítását először ajánlja fel. Lásd: [Splineok és polivonalak](topic:splines).

### BLOCK

Álnevek: `B`, `BMAKE`.

- `Enter block name`. Ha már létezik: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Egyetlen hivatkozássá válnak az új blokkra.

### WBLOCK

Álnevek: `W`, `-WBLOCK`. Egy blokkot, néhány objektumot vagy az egész rajzot új DWG vagy DXF fájlba ír. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ez lesz az új rajz origója), `Select objects`, majd `File format [DWG/DXF/R12 DXF]` és `File name for the new drawing`, végül `What to do with the objects [Retain/Convert to block/Delete]`. A Convert egyetlen hivatkozással helyettesíti őket a fájl nevével azonos nevű blokkra; a Delete eltávolítja őket.
- **Block**: `Block to write out`. A blokk saját objektumai, alappontjával mint origóval, a beágyazott blokkokkal együtt.
- **Entire drawing**: minden objektum a modelltérben. A lapok nem íródnak ki; a másolathoz, amely megtartja őket, használja a {{cmd:SAVEAS}} parancsot.

Az új fájl csak azokat a rétegeket, vonaltípusokat, szöveg- és méretezési stílusokat és blokkokat tartalmazza, amelyeket az objektumai használnak, és a rajz mértékegységeit. A DWG verziója az, amelyet a {{cmd:SAVEAS}} utoljára használt. A böngészőben a fájl letöltődik; a Studióban a mentési párbeszédpanel nyílik meg.

### ATTDEF

Álnevek: `ATT`, `DDATTDEF`, `-ATTDEF`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Attribútum meghatározása}}. Kiírja a módokat, majd `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (konstans esetén `Enter attribute value`), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. A {{cmd:BLOCK}} az attribútum-definíciókat a blokkba veszi.

### EATTEDIT és ATTEDIT

Az `EATTEDIT` (`DDATTE`, vagy kettőskattintás egy attribútumos hivatkozáson; {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Attribútumok szerkesztése}}): `Select a block reference with attributes`, majd az {{ui:Attribútumok szerkesztése}} párbeszédpanel. Az `ATTEDIT` (`ATE`, `-ATTEDIT`): ugyanaz a hivatkozás, majd minden attribútumhoz `<prompt> (<TAG>) <value>`; az {{key:Enter}} megtartja az értéket. Lásd: [Attribútumok](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Az értékek megmaradnak; az új attribútumok az alapértelmezésüket kapják, az eltávolítottak eltűnnek, az elhelyezések visszaállnak.

### BATTMAN

{{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Attribútumkezelő}}. A párbeszédpanel: blokk, attribútumok (címke, kérdés, alapértelmezés, módok, sorrend), {{ui:A hivatkozások frissítése (az értékek megmaradnak)}}, {{ui:Alkalmaz}}.

### REFEDIT és REFCLOSE

{{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Szerkesztés helyben}}. `REFEDIT`: `Select the block reference to edit in place` (vagy a kijelölés). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; a sáv {{ui:A blokk mentése}} és {{ui:Elvetés}} gombja ugyanezt teszi. Az egész szerkesztés egy visszavonási lépés. Lásd: [Attribútumok](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT és BCLOSE

`BE`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokk szerkesztése}}. Az `Enter block name to edit <the selected reference's block>` megnyitja a blokkszerkesztőt. A `BCLOSE` ezt kérdezi: `Close the block editor on "…" [Save/Discard] <Save>`; a sáv {{ui:Blokk mentése}} és {{ui:Módosítások elvetése}} gombja ugyanezt teszi. A szerkesztőben végzett minden művelet egy visszavonási lépés.

### VIEWBASE

Álnév: `FLATSHOT`. A 3D-lapon lévő testek lapos 2D nézete: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, egy lépték (`1:20`, `2:1`; az {{key:Enter}} azt veszi, amelyik a lapra illeszkedik), majd a nézet középpontja. Egy blokkhivatkozás: a látható élek a VIEW-VISIBLE rétegen, a takart élek szaggatottan a VIEW-HIDDEN rétegen. Lásd: [Lapos nézetek egy lapon](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Álnevek: `-PUBLISH`; vagy {{ui:Minden rajzlap egy PDF-ben}} a {{ui:Plottolás PDF-be}} párbeszédpanelben. `Sheets to plot [All/Some]`: az {{key:Enter}} minden lapot plottol, az `S` vesszővel elválasztott neveket kér. Egy PDF, laponként egy oldal és egy könyvjelző. Lásd: [Minden lap egy PDF-ben](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Álnevek: `SSM`, `SHEETSETMANAGER`. A bal panel {{ui:Rajzlapkészlet}} részéhez visz: több rajzból származó lapok, számozva és címezve, rajzfejük a készletből kitöltve, egyetlen PDF-be plottolva. Lásd: [Rajzlapkészletek](topic:sheet-sets).

### XATTACH, XREF

A {{cmd:XATTACH}} (`XA`): válasszon egy DWG vagy DXF fájlt, majd a beillesztési pontját. A {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; ha több hivatkozás van, válasszon egyet a hivatkozásai közül, vagy írja be az `N`-t és a nevét. Lásd: [Csatolt rajzok](topic:files#linked-drawings-external-references).

### COUNT

Álnevek: `BCOUNT`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok megszámlálása}}. `Select a block reference to count, or [All/Export] (Enter: All)`: egy kattintás kijelöli és megszámolja az adott blokk összes hivatkozását ebben a térben; az {{key:Enter}} vagy az `A` mindet listázza; az `E`, majd a `C` (darabszám) vagy az `A` (attribútumok) CSV-t tölt le. Lásd: [Blokkok számlálása és kimutatás exportálása](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Álnevek: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (kis- és nagybetű nem számít). Az `F` egy DWG vagy DXF fájlt kér, majd az egész rajzot vagy annak egyik blokkját; a már használt név a {{ui:A meglévők megtartása}} vagy az {{ui:Átnevezés}} választását kéri. Az `L` megnyitja a könyvtári panelt.
- `Specify insertion point [Scale/Rotate]`. Az `S` a `Specify scale factor` kérdést, az `R` a `Specify rotation angle` kérdést teszi fel; mindkettő megmarad.
- Ha a blokk már olyan objektumok mellett áll, amelyek máshol is ismétlődnek a blokk nélkül, egy sor jelzi, hány helyet javasol, és a kérdés kap egy `suGgested` lehetőséget: a `G` megmutatja őket; kattintson közel egyikhez, hogy oda kerüljön a blokk, az `A` mindet, az {{key:Enter}} visszalép. Ezek a szomszédaik elforgatását és az alapértelmezett attribútumértékeket veszik át. A nyitott térben 20 000 objektumnál többel rendelkező rajzokban nem keresnek.
- Ezután minden attribútumra, amelyet a blokk kér: `Enter <prompt> (<TAG>) <default>`. Lásd: [Blokkattribútumok](topic:attributes).

### LIBRARY

Álnevek: `LIB`. Megnyitja a könyvtári panelt: elemek elhelyezése, frissítések ellenőrzése, a könyvtár hivatkozásai. Nincs kérdés. Lásd: [Beszúrás fájlból vagy a könyvtárból](topic:insert-from-file-and-library).

### STEELMEMBER

Álnevek: `SMEMBER`; vagy a könyvtár {{ui:Standard}} lapján lévő {{ui:3D elem}}. `Section size <W12x26>` (ahogy a lap felsorolja), majd `Start point [Column]` és `End point`: egy tömör rúd a 3D-lapon a két pont között, a talajon állva. A `C` az oszlop alappontját és magasságát kéri. Egy visszavonási lépés. Lásd: [Acélszelvények és szabványos alkatrészek elhelyezése](topic:steel-and-standard-parts).

### PARTSLIST

Álnevek: `PLIST`. `Top left corner of the parts list`, majd `Text height <2.5>`: táblázatot rajzol minden olyan szabványos alkatrészről és acélszelvényről, amelyet a könyvtárból helyeztek el (tételszám, mennyiség, alkatrész, szabvány, méret, hossz, anyag, tömeg). Egy visszavonási lépés. Lásd: [Acélszelvények és szabványos alkatrészek elhelyezése](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Álnevek: `PU`. Eltávolítja azokat a blokkdefiníciókat, amelyeket semmi nem használ. Nincs kérdés.

### DELBLOCKS

Vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok törlése}}. `Select block to delete [Name/eXit]`: válasszon ki egy blokkhivatkozást, vagy az `N` a blokkok listáját szűrővel (több is választható), az `X` vagy az {{key:Enter}} befejez. Minden hivatkozás eltűnik – a modellben, minden lapon és más blokkokon belül –, majd a definíció is, és a parancssor megmondja, mi törlődött és mi nem. A névtelen blokkok és a csatolt rajzok nem ajánlódnak fel. A kérdés visszatér a következő blokkhoz; az egész parancs egy visszavonási lépés.

### PASTEBLOCK

A {{cmd:PASTEBLOCK}} az, amit másolt ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), egyetlen blokként illeszti be: válassza ki a beillesztési pontot, és oda kerül egy hivatkozás egy új blokkra, kijelölve. A blokk saját nevet kap (`A$C` és egy szám); a {{cmd:RENAME}} adja meg a sajátját. Egy visszavonási lépés eltávolítja a hivatkozást és a blokkot.

### BLOCKREPLACE

A {{cmd:BLOCKREPLACE}} kéri a lecserélendő blokkot és az arra helyette kerülő blokkot (`?` listázza a blokkokat), majd minden hivatkozást megváltoztat a modellben, minden lapon és más blokkokon belül. Minden hivatkozás megtartja helyét, léptékét, elforgatását és rétegét, valamint a mindkét blokkban meglévő attribútumok értékeit; az csak az új blokkban lévő attribútumok az alapértelmezésükön indulnak, és jelzi, mely értékek vesztek el. Ha a régi blokkot már semmi nem használja, felajánlja az eltávolítását. Visszautasít csatolt rajzokat, és olyan cserét, amely egy blokkot önmagába tenne. Egy visszavonási lépés.

### MINSERT

A {{cmd:MINSERT}} blokkot helyez el sorokban és oszlopokban: blokknév, beillesztési pont, lépték, elforgatás, a sorok és oszlopok száma, és a közük. Az egész halmaz az elforgatással együtt fordul. Mindegyik külön hivatkozás (legfeljebb 10 000), így bármelyik utólag mozgatható vagy törölhető.

### BLOCKSPALETTE

Álnevek: `BLOCKSPAL`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blocks panel}}. Megjeleníti a {{ui:Blokkok}} panelt, a kurzorral a szűrőjében. Minden blokknak van egy kis képe; a legutóbb elhelyezettek jönnek elöl. A szűrő melletti két gomb listára vagy képrácsra vált. Kattintson egy képre (vagy az {{ui:Beszúrás}}-ra), hogy a {{cmd:INSERT}} paranccsal elhelyezze a blokkot, vagy húzza a rajzra, hogy oda kerüljön, ahová elengedi.

A {{ui:Libraries}} alatt, a lista alatt: az {{ui:Add a drawing}} egy saját DWG vagy DXF fájlt vesz fel, és listázza a blokkjait képpel együtt, az egész rajzot pedig egyetlen blokként. Egy elhelyezés a definícióját (és a beágyazott blokkjait, és azok rétegeit) a rajzba másolja, ahogy az {{cmd:INSERT}} `File` lehetősége; ha a rajzban már van ugyanilyen definíciójú azonos blokk, azt kérdés nélkül használja; ha ugyanilyen nevű, de más definíciójú van, az {{ui:A meglévők megtartása}} vagy az {{ui:Átnevezés}} választását kéri. Böngészőben a fájl az oldal bezárásáig marad. A CadCraft Studióban az {{ui:Add a folder}} listázza egy mappa rajzait, mindegyiket megnyitva, amikor rákattint, és a fájlok és mappák megmaradnak. A kis x eltávolítja a könyvtárat a listából; a fájlt nem érinti. A közös {{ui:Könyvtár}} más dolog: lásd: [Beszúrás fájlból vagy a könyvtárból](topic:insert-from-file-and-library).

### BCONVERT

Vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Ismétlések átalakítása blokkokká}}. Megkeresi az ismétlődő geometriát, és minden másolatát egy blokk egy hivatkozásává alakítja.

- `Select the objects that repeat, or [Block]`: egy másolat objektumai. A `B` ehelyett egy meglévő blokkot nevez meg, hogy megtalálja az objektumainak laza másolatait.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: az `M`, `S` és `P` megváltoztatja, mi számít másolatnak; az {{key:Enter}} keres. A beállítások megmaradnak.
- `Name for the new block <Block1>`, majd `Specify the block's base point` ({{key:Enter}}: a kijelölés bal alsó sarka).
- Megmondja, hány másik objektumhalmaz azonos geometriájú, kiemeli mindazt, amit felcserélne, és `Yes/No`-t kérdez.

Egy másolat ugyanazok az objektumok, amelyeket bármilyen szögben elmozdítottak és elforgattak (és ha a tükrözés vagy léptékezés be van kapcsolva, akkor egy tényezővel tükrözve vagy léptékezve): minden objektumnak meg kell lennie a párjának a kijelölés méretének egymilliomodán belül. Minden hivatkozás a saját elforgatását és léptékét kapja (a tükrözött egy negatív Y-léptéket), és az objektumok közös rétegét. A zárolt rétegek objektumai érintetlenek maradnak, és meg lesznek számolva. A nyitott térben keres (a modellben vagy a megnyitott lapon). Egy nagyon nagy keresés egy munkakorlátnál megáll, és jelzi. Egy visszavonási lépés.

### BSEARCH

Vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok keresése}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: egy blokknév része, vagy minta `*` és `?` jelekkel. Minden blokkot listáz a hivatkozásaival együtt itt és az egész rajzban.
- `A`: egy attribútumérték, vagy `TAG=value`. Listázza azokat a blokkokat, amelyek hivatkozásai ezt tartalmazzák, a talált értékekkel. A konstans attribútumok is számítanak.
- `G`: jelöljön ki objektumokat vagy egy blokkhivatkozást, és a legalább 85%-ban hasonló alakú blokkok listázódnak, a legjobbal először. A méret, az elforgatás és a tükrözés nem számít. A mérés a körvonalak mentén szétszórt pontok távolságait hasonlítja össze, így megtalálja a hasonmásokat; a pontos másolatokhoz használja a {{cmd:BCONVERT}}-et.

A nyitott térben talált hivatkozások kijelölődnek a következő parancshoz.

### BREPLACE

Vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok cseréje}}. `Replace [Selected/All]`: az `S` a kijelölt blokkhivatkozásokat cseréli a megnevezett blokkra; az `A` egy blokkot és a cseréjét kéri, és minden hivatkozást megváltoztat, ahogy a {{cmd:BLOCKREPLACE}} teszi (ugyanaz a kód). A hivatkozás megtartja helyét, léptékét, elforgatását, rétegét és a mindkét blokkban meglévő attribútumok értékeit; az új blokknak nem jutó értékek elvesznek, és meg vannak nevezve. A `?` listázza a blokkokat. Egy visszavonási lépés.

### DATAEXTRACTION

Álnevek: `EATTEXT`, `DX`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Adatkinyerés}}. Blokkokat, azok attribútumait és az objektumtulajdonságokat listázza táblázatként vagy CSV-fájlként.

- A kijelölésre dolgozik, vagy kéri a `Select objects (Enter: everything in this space)`-t.
- `List: [Blocks/Objects/All]`, ha a kijelölés mindkettőt tartalmazza. A névtelen blokkok, táblázatok és anyagjegyzékek soha nem kerülnek listára.
- Kiírja az oszlopokat, amelyek közül választhat (név, típus, réteg, X, Y, forgatás, lépték, hossz, terület, szín, vonaltípus, tér és attribútumcímkénként egy), majd `Columns, by name or number with commas between`. Az {{key:Enter}} a csillagozottakat veszi: blokkoknál a nevet és minden attribútumot; objektumoknál a típust, a réteget és a hosszt.
- `Put identical rows together with a count? [Yes/No] <Yes>`, majd `Put the list in a: [Table/Csv] <Table>`. A táblázat egy közönséges táblázat ({{cmd:TABLEDIT}} szerkeszti), és nem élő: a rajz változása után futtassa újra a parancsot.
- Visszautasít olyan oszlopot, amely nincs a listán. Egy táblázat 1999 adatsort tart; egy CSV-fájl mindet befogadja.

### COUNTTABLE

A kijelölés (vagy a nyitott tér) blokkhivatkozásait számolja, és a számokat táblázatba (`Block`, `Count`) vagy CSV-fájlba teszi. A rajzzal magától követő számláláshoz lásd: {{cmd:BOMTABLE}}.

## Lapok és plottolás

### LAYOUT

Álnevek: `LO`, `NEWLAYOUT`; vagy a rajz alatti {{ui:+}} gomb. Új lap kerettel, rajzfejjel és egy nézetablakkal, ISO A3 méreten (vagy Tabloid méreten, ha a rajz hüvelykben vagy lábban van). Nincs kérdés.

### MVIEW

Álnevek: `MV`. Csak lapon ({{cmd:VPORTS}} lapon ugyanezt teszi).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. A nézetablak a teljes modellt szabványos léptékben mutatja.
- `P` (Polygonal): kattintson a körvonal sarkaira (`Undo`, `Close`), az {{key:Enter}} a végén. Kevesebb mint három sarkot visszautasít.
- `O` (Object): `Select a closed object for the viewport's outline`: egy zárt polivonal, kör vagy ellipszis a lapon. A nézetablak felveszi az alakját (az ívek rövid egyenes darabokként); az objektum változatlan marad. Egy nem zárt objektumot visszautasít.

### VPCLIP

Egy lapon már meglévő nézetablakot vág le. `Select viewport to clip` (vagy előbb jelölje ki), majd `Select the object to clip to [Polygonal/Delete]`:

- Kattintson egy zárt polivonalra, körre vagy ellipszisre, vagy az {{key:Enter}}-re (vagy a `P`-re) a sokszög sarkainak megadásához.
- A `D` (Delete, ha a nézetablak le van vágva) ismét téglalappá teszi: a körvonalа köré írt dobozt.
- Amit a nézetablak mutat, a papíron nem mozdul, és a léptéke megmarad. A modell csak a körvonalon belül rajzolódik és plottolódik, a keret pedig követi. Egy visszavonási lépés.
- Egy levágott nézetablaknak minden körvonal-sarkán van egy fogópontja, a középpontján és a doboz négy sarkán kívül (a doboz sarkának húzása vele együtt nyújtja a körvonalat). A Tulajdonságok a Körvonal: Téglalap, vagy Levágva, a sarkok számával értéket mutat.
- A DWG és DXF 2000 fájlok a körvonalat a CadCraft számára tartják meg. Más programok a nézetablakot az azt körülvevő téglalapként nyitják meg; a DXF R12 csak a téglalapot tartja meg.
- A modell lapon jelzi, hogy a nézetablakok lapokon vannak.

### VPORTS

Álnevek: `VIEWPORTS`. A {{cmd:SPLIT}} lapról is ugyanez, és a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Felosztás egymás mellett}}, {{ui:Felosztás egymás alatt}}, {{ui:Négy panel}}, {{ui:Egy panel}} ezt futtatja. A modellen: `Enter number of panes [SIngle/2/3/4] <3>`; a `2` a `[Horizontal/Vertical] <Vertical>` kérdést teszi fel (Vertical = egymás mellett), a `3` a `[Left/Right] <Right>` kérdést (hová kerül a nagy panel). Minden panel megtartja saját nézetét és terét; kattintás egy panelt aktívvá tesz. Lapon ez a {{cmd:MVIEW}}. Lásd: [Képernyő osztása](topic:split-screen).

### VPVIEW

Nincs álnév. Csak lapon.

- `Select viewport` (kimarad, ha egy már ki van jelölve), majd a modellen: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Nincs álnév. Saját koordináta-rendszer; nem szerkesztés. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: egy pont az új origó, majd `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origó, egy pont a pozitív X tengelyen, egy pont a pozitív Y oldalon. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` és egy név. A nézet úgy fordul, hogy az új X tengely vízszintes legyen. Lásd: [A nézet elforgatása és saját koordináták használata](topic:ucs-and-turned-view).

### PLAN

Nincs álnév. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: az aktív panel nézetét úgy forgatja, hogy az USC X tengelye (vagy a világé) vízszintes legyen. A rajz semmit nem mozgat.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nincs álnév; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:A nézet elfordítása 90°-kal balra}}, {{ui:A nézet elfordítása 90°-kal jobbra}}, {{ui:Vissza a világhoz}}. Ugyanaz, mint az `UCS Z -90`, `UCS Z 90` és `UCS W`, a nézet követésével.

### VPLAYER

Nincs álnév. Lapon, vagy egy nézetablakon belül. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: az `F`, `T`, `R` rétegneveket kér (vesszővel, `*` és `?` helyettesítő karakterekkel), majd a `[All/Select/Current] <Current>` nézetablakokat; a Reset minden réteget visszaállít az „új nézetablakban befagyasztva” alapértelmezésére; a `V` ezt az alapértelmezést állítja be (`[Frozen/Thawed]`), amelyet a {{cmd:MVIEW}} használ. A `?` listázza a jelenlegi nézetablakban befagyasztott rétegeket. A Rétegek panel nézetablak-oszlopa ugyanezt teszi egy nézetablakra. Lásd: [Réteg befagyasztása egy nézetablakban](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Álnevek: `MS`; vagy kettőskattintás egy nézetablakon belül. Csak lapon. A modell munkája egy nézetablakon keresztül: a kijelölt, a lap egyetlen nézetablaka, vagy a `Click inside the viewport to work in`. A nézetablakon belüli eltolás és nagyítás a nézetablak nézetét változtatja (a kijelzőre zárt nézetablak ezt megtartja, és a lap mozog helyette); az új nézet egy visszavonási lépés. Lásd: [Munka a modellen egy nézetablakon keresztül](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Álnevek: `PS`; vagy kettőskattintás a nézetablakon kívül, vagy egy lap alatti fülre kattintás. Vissza a lapra.

### PLOT

Álnevek: `PRINT`, `PUBLISH`, `EXPORTPDF`; vagy {{key:Mod+P}}. Megnyitja a {{ui:Plottolás PDF-be}} párbeszédpanelt. Lásd: [Plottolás PDF-be](topic:plot-pdf).

### PLOTSTYLES

Álnevek: `STYLESMANAGER`, `PSTABLES`; vagy {{ui:Táblák szerkesztése…}} a {{ui:Plottolás PDF-be}} párbeszédpanelben. Megnyitja a {{ui:Plottolási stílustáblák}} panelt: minden szín mit nyomtat (szín, szürke, tinta, vonalvastagság), a rajzzal együtt megőrizve. Lásd: [Plottolási stílustáblák](topic:plot-pdf#plot-style-tables).

### CHSPACE

A {{cmd:CHSPACE}} objektumokat mozgat a lap és a modell között egy nézetablakon keresztül, léptékükben és elforgatásukban úgy alakítva, hogy a másik oldalról ugyanúgy nézzenek ki. Lapon jelöljön ki objektumokat, és a modellbe kerülnek (ha a lapon több nézetablak van, válassza ki a nézetablakot). Amikor a modellen egy nézetablakon keresztül dolgozik ({{cmd:MSPACE}}), a kijelölt objektumok a lapra kerülnek. Jelzi, hányszor nagyobbak vagy kisebbek lettek. A nézetablakok a lapjukon maradnak. Egy visszavonási lépés.

### ISODRAFT

A {{cmd:ISODRAFT}} `ON` vagy `OFF` állapotba kapcsolja az izometrikus rajzolást, vagy közvetlenül a `Left`, `Top` vagy `Right` síkra áll. Bekapcsolva: az Ortogonális ({{key:F8}}) a sík két tengelye mentén tartja a vonalakat (bal: 90° és 150°; felső: 30° és 150°; jobb: 30° és 90°), a polárkövetés ({{key:F10}}) ugyanezeket a tengelyeket követi, a rácsfogás ({{key:F9}}) az izometrikus rácsot használja, a rács ({{key:F7}}) pedig 30°, 90° és 150°-os vonalakkal rajzolódik. Az {{cmd:ELLIPSE}} kap egy `Isocircle` lehetőséget: adjon meg egy középpontot és egy sugarat (vagy `Diameter`-t), és az ellipszist rajzolja, amelyet a kör az aktuális síkon mutat. A rajz lapos marad: ezek segédeszközök egy képszerű nézet rajzolásához, nem 3D-modell. A beállítás erre a munkamenetre szól, és nincs elmentve a fájlba.

### ISOPLANE

Az {{cmd:ISOPLANE}} kiválasztja a síkot, amelyen az izometrikus rajzolás dolgozik: `Left`, `Top` vagy `Right`. Az Enter a következő síkra lép. Amíg az izometrikus rajzolás be van kapcsolva, az {{key:F5}} ugyanezt teszi egy parancs közepén; kikapcsolva az {{key:F5}} a böngészőé.

## Lekérdezés

### CAL

Kiírja egy számítás értékét, ahogyan minden hosszként beírt helyen olvasná.

- `Expression`: írja be, például `12'6"+3/4"` vagy `(24'-0")/3`, és nyomja meg az {{key:Enter}}-t. A CadCraft kiírja: `= 12'-6 3/4"   (150.75 drawing units)`. Lásd: [Számtani műveletek a beírt értékben](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Álnevek: `DI`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Távolság mérése}}.

- `Specify first point`, `Specify second point`. Kiírja a távolságot, a szöget, a Delta X-et és a Delta Y-t.

### AREA

Álnevek: `AA`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Terület}}. Kiírja a területet és a kerületet.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Kattintson vagy írjon be sarkokat; a `Specify next point (Enter closes) [Undo]` kérdésnél az {{key:Enter}} lezárja a körvonalat. Az `U` visszavonja az utolsó sarkot.
  - Az {{key:Enter}} vagy az `O`, majd `Select object`: egy kör (kiírja a kerületét), egy ellipszis, egy polivonal (a nyitott területre egyenes vonallal zárul, és a hossza kiíródik), vagy egy sraffozás (a lyukakat levonja).
  - Az `A` (Add area) és az `S` (Subtract area) futó összeget tart: a kérdés `(ADD mode)` vagy `(SUBTRACT mode)` jelzéssel kezdődik, minden területet hozzáad vagy levon, és minden után kiíródik a `Total area = …`. Ezekben a módokban az `O` az Enterig választ objektumokat, és az első kérdésnél az {{key:Enter}} befejezi a parancsot.

### MEASUREGEOM

Álnevek: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; minden mérés után újra kérdez, alapértelmezett `eXit` lehetőséggel.

A `Quick` a mutató körül mér, ahogy mozgatja: a legközelebbi objektum távolságát jobbra, felfelé, balra és lefelé (a jelenlegi USC tengelyei mentén), ahogy halad rajzolva; és azt a szöget, ahol két ilyen szomszéd egyenes és találkozik. Egy kattintás a négy távolságot, a szabad szélességet és magasságot, valamint a szögeket írja az előzménybe; az Enter visszavisz a lehetőségekhez. A képernyőn lévőt olvassa.

- `D`: két pont, mint a {{cmd:DIST}}.
- `R`: `Select arc or circle`; kiírja a sugarat és az átmérőt.
- `A`: egy ív (a bezárt szöge), egy egyenes, majd egy második egyenes (a közöttük lévő szög, a távoli végük felé), vagy az {{key:Enter}} és három pont (csúcs, majd a két vég).
- `AR`: mint az {{cmd:AREA}}, egy terület.

### ID

Nincs álnév. `Specify point`; kiírja az X és Y értékét.

### LIST

Álnevek: `LI`, `LS`. `Select objects`; kiírja minden objektum típusát, rétegét és fő méreteit.

### MASSPROP

A {{cmd:MASSPROP}} a kijelölt tartományok és zárt objektumok keresztmetszeti tulajdonságait adja együtt: terület, kerület, befoglaló doboz, súlypont, a X és Y tengelyek körüli tehetetlenségi nyomatékok az origón át, a tehetetlenségi szorzat, a tehetetlenségi sugarak, ugyanezek a súlyponton át, valamint a főnyomatékok a tengelyeik irányával. A tartományokban a lyukak lyukként számítanak. A mennyiségek rajzegységben vannak, és vonalakból és ívekből álló körvonalak esetén pontosak; ellipszisek és splinek rövid egyenes szakaszokként mérődnek, és ezt jelzi. A jelentés után megkérdezi, írja-e szövegfájlba. A nem zárt objektumok kimaradnak, és jelzi, hány.

## Nézet, fájl és egyéb

### ZOOM

Álnevek: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Két sarokra kattintva ablak. Az `E`, az `A` vagy az Enter: az egész rajz.
- A `P` (Previous, vagy az {{ui:Előző}} az eszköztáron) visszatér az előző nézethez, laponként legfeljebb 10 nézetig; egy sor egérgörgetés-lépés vagy egy eltolás egy nézetnek számít.
- Egy szám, például `2`, `2x` vagy `0.5x` (vagy az `S`, majd a szám), a képernyő közepe körül ezzel a tényezővel nagyít vagy kicsinyít.
- A `C` a `Specify center point` és az `Enter height or magnification (nX)` kérdést teszi fel.

### PDFATTACH, PDFIMPORT és a PDF-parancsok

Álnevek: `PDFATT` a {{cmd:PDFATTACH}}-hez, `PDFIM` a {{cmd:PDFIMPORT}}-hoz. A {{cmd:PDFATTACH}} egy PDF-oldalt tesz a rajz alá (fájl, oldal, beillesztési pont, lépték, elforgatás); a {{cmd:PDFIMPORT}} egy oldal vonalait, íveit, kitöltéseit és szövegét rajzobjektummá alakítja a PDF nevéről elnevezett rétegeken, valódi méretben, megadott léptékben vagy két pontból és egy valódi távolságból léptékezve. A {{cmd:PDFCLIP}} levágja az alátétet, a {{cmd:PDFADJUST}} beállítja a halványítást, a kontrasztot, az egyszínűséget vagy kikapcsolja, a {{cmd:PDFLAYERS}} a PDF saját rétegeit kapcsolja, a {{cmd:PDF}} pedig újra megadja a CadCraftnak azokat a fájlokat, amelyeket a rajz alátétei használnak. Lásd: [PDF-alátétek](topic:pdf-underlay).

### AUTOCOMPLETE

Álnevek: `AUTOC`. A rajz automatikus kiegészítése: ha nem fut parancs, egy szürke halvány javaslat mutatja, mit mond a rajz saját mintái a következőről. Az {{cmd:AUTOCOMPLETE}} `On`-ra vagy `Off`-ra kapcsolja (vagy a Beállítások › CadCraft), vagy `Show`-val mutatja, mit javasolna most. A **Tab** a halvány javaslatot egy visszavonási lépésként rajzolja meg, az **Esc** elrejti, amíg a rajz nem változik. Három dolgot talál a legújabb objektumokban: egy kétszer vagy többször, egyenlő lépésben rajzolt elem következő másolatát (oszlopok, pillérek, egy lépcső felvonója és lépcsőfoka), egy polivonal lépcsőjének következő lépéseit, és egy szoba vagy fal lánc hiányzó oldalát. A {{cmd:LINE}} vagy {{cmd:PLINE}} közepén a halvány javaslat a **következő pont**: a lépcső következő lépése (felvonó, lépcsőfok, felvonó…), egy téglalap negyedik sarka, az a pont, amely azt lezárja, vagy egy újabb egyenlő lépés. Vigye a kurzort a közelébe, és nyomja meg a **Tab**-ot, mintha oda kattintott volna; folytassa, vagy nyomja meg az Enter-t. Szabályok alapján számolja ki ez a számítógép, modell nélkül.

### AUTOSHEET

Álnév: `ASH`. Önmagát elrendező lapok. Az {{cmd:AUTOSHEET}} veszi a rajz darabjait (az elnevezett nézeteit, vagy a modell külön darabjait, vagy az egész modellt), kiválaszt egy papírméretet (vagy az Önt), minden darabnak szabványos léptéket ad (egy lépték mindenre, vagy a legnagyobb, amelyet mindegyik elbír), és a nézeteket sorokban új lapokra helyezi, rajzfejjel és minden alatt egy felirattal (név és lépték). Ami nem fér el egy lapon, saját lapot kap. Egy visszavonási lépés. Szabályok alapján számolja ki ez a számítógép, modell nélkül.

### PHOTOSKETCH

Álnév: `PSK`. Fénykép-vázlatból rajz. Válasszon egy fényképet (JPEG, PNG vagy TIFF) egy papírlapon lévő kézi vázlatról. A {{cmd:PHOTOSKETCH}} megkeresi a lap négy sarkát, kiegyenesíti a perspektívát, átveszi az Ön által megnevezett papírméretet (`Paper`, vagy a legközelebbi szabványos) és a vázlat `Scale`-ét (1 : n), majd a tollvonalakat egyenesekké, ívekké és körökké követi, minden tollszínnek (fekete, piros, kék, zöld) egy-egy réteggel. Ha nem találja a papír szélét, az egész fényképet lapnak veszi, és ezt jelzi. A feliratokat kihagyja. Egy visszavonási lépés. Klasszikus képfeldolgozással készül ezen a számítógépen, modell nélkül, és semmi nem küldődik el sehová. Lásd még: a szkennelt rajz parancsait.

### AUTODIM

Álnév: `ADIM`. Automatikus méretezés szabályok szerint. Az {{cmd:AUTODIM}} a kijelölt objektumokat (vagy az egész rajzot) szintjük és függőleges éleik alapján méretezi: méretláncot az Ön által választott oldalak (`Sides`) mentén, egy egész méretet kívül, minden nyílás szélességét (egy egyvonalú falvonalak közötti rést), lyuk minden méretéhez egy átmérőt, és a `Grid` esetén a rácsvonalak közötti távolságot. Az, ami már ott van méretezve, nem készül el újra. Egy visszavonási lépés. Szabályok alapján számolja ki ez a számítógép, modell nélkül.

### GRIDMOVE

Álnév: `GM`. Egy rácsvonal mozgatása magával viszi a készletet. A {{cmd:GRIDMOVE}} mozgat egy rácsvonalat (egy olyan rétegen lévő vonalat, amelynek neve grid vagy axis szót tartalmaz), és ami rajta lóg: a végükkel a vonalon lévő falak követésre nyúlnak, a mentén lévő falak egészben mozognak, az oszlopok (a vonalon lévő blokkhivatkozások és körök), a buboréka és címkéje mozog, a pontjaikkal a vonalon lévő méretek pedig az új távolságot mérik. Adjon meg két pontot (csak a vonalon átmenő rész számít), vagy a `Distance`-t. Egy visszavonási lépés visszahoz mindent. Szabályok alapján, ezen a számítógépen.

### DETAILS

Álnév: `DET`. Részletek, amelyek megtalálják Önt. A {{cmd:DETAILS}} megtartja cége saját részleteit: az `Add` a rajz egy blokkját teszi a listába, a `List` és a `Remove` kezeli, a `Find` pedig rangsorolja őket a kijelöltekhez (vagy az utoljára rajzolthoz) a rétegeiken, blokknevein, sraffozási mintáin és megjegyzésein szereplő szavak alapján, a részletek nevével és megjegyzéseivel összevetve; így egy ablakfej megtalálja a párkányborítását. Számot és pontot kiválasztva helyezi el. Ha a `Hint` be van kapcsolva (a Beállítások › CadCraft alatt is), egy részlet által illeszkedő kijelölés egy sort ír az állapotsorba. A listát ebben a böngészőben, ezen a számítógépen tartja, és ez a lista az, amelyben keres. A `Share` a Dokumentumok mappájába is beteszi (`.cadcraft/firm-details.json`, minden blokk rajzával együtt): a `Pull` hozzáadja, ami a csapatánál van és Önnél nincs, a `Push` hozzáadja, ami Önnél van és nekik nincs, a `Both` mindkettőt, és semmi nem törlődik egyik oldalról sem. Nyissa meg előbb a Dokumentumok mappát ({{cmd:DOCUMENTS}}); ha ez a mappa egy Team Cloud Plan mappa, a teljes csapat ugyanazt a listát használja. A Könyvtár panel egy részlet-elemén egy **Hozzáadás a cégem részleteihez** gomb van, amely ugyanabba a listába teszi. Szavak alapján, modell nélkül számolja ki ez a számítógép.

### SKETCHFIX

Álnév: `SKF`. A tollvázlatok pontos geometriává válnak. Egyszerre egy szabad kézi vonást nyomjon és húzzon (tollal, egérrel vagy ujjal), majd Enter. Minden vonás egyenesként, körként, ívként, téglalapként vagy polivonalként értelmeződik: a közel vízszintes és függőleges vonalak pontosan vízszintessé és függőlegessé válnak, egy zárt, kerek vonás körré, egy négy derékszögű sarkú zárt vonás téglalappá, a vonások végei pedig összehúzódnak, és a rajzban már meglévő végekre kerülnek. Egy visszavonási lépés. Szabályok alapján számolja ki ez a számítógép, modell nélkül.

### A szkennelt rajz parancsai (SCANATTACH és társai)

Álnevek: `SCA` a {{cmd:SCANATTACH}}-hez, `SCS` a {{cmd:SCANSCALE}}-hez, `SCL` a {{cmd:SCANALIGN}}-hez, `SCD` a {{cmd:SCANDESKEW}}-hez, `SCC` a {{cmd:SCANCLEAN}}-hez, `SCR` a {{cmd:SCANCROP}}-hoz, `SCE` a {{cmd:SCANERASE}}-hez, `SCT` a {{cmd:SCANTRACE}}-hez, `SCI` a {{cmd:SCANINFO}}-hoz; a {{cmd:RASTERSNAP}}-nek nincs. Képpel dolgoznak, mindegyik egy visszavonási lépés. A {{cmd:SCANATTACH}} beszúr egy PNG-t, JPEG-et, TIFF-et (egy oldalt vagy mindet) vagy egy képként szereplő PDF-oldalt. A {{cmd:SCANSCALE}} két kijelölt pontból és a valódi távolságból léptékezi a lapot. A {{cmd:SCANALIGN}} két pontra mozgatja és forgatja (`Scale the sheet to fit` Igen/Nem). A {{cmd:SCANDESKEW}} megmutatja a lap hosszú vonalainak szögét, és elforgatja a lapot, amint `Accept`-et ad vagy `Value`-t ad meg. A {{cmd:SCANCLEAN}} feketére-fehérre alakítja (`Threshold` Auto/Adaptive/Level, `Specks`), és `Run`. A {{cmd:SCANCROP}} egy ablakot tart meg. A {{cmd:SCANERASE}} egy `Rectangle`-t, `Polygon`-t vagy `Lasso`-t töröl. A {{cmd:SCANTRACE}} vonalakat és íveket követ egy új rétegre (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`), és jelenti, mit talált és mit hagyott rasterként. A {{cmd:SCANINFO}} listázza az eredeti fájlt és a lépéseket. A {{cmd:RASTERSNAP}} a szkennelt lapok vonalaihoz való illesztést be- vagy kikapcsolja. Lásd a témakört: Szkennelt rajzok és a követés.

### REGEN és REGENALL

Álnevek: `RE` a {{cmd:REGEN}}-hez, `REA` a {{cmd:REGENALL}}-hoz. A képernyőn látható rajz újraépítése a rajzból: a {{cmd:REGEN}} az Ön által látott lapot (lapon a modellt is, amelyet a nézetablakai mutatnak), a {{cmd:REGENALL}} minden lapot, minden osztott panelt és minden megnyitott rajzot. Akkor használja, ha a kép elavultnak látszik egy szkriptelt vagy nagyon nagy változtatás után, vagy ha egy asszisztens szerkesztette a rajzot; maga a rajz nem változik, így nincs mit visszavonni.

### NAMEDVIEW

Álnevek: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, majd a nézet neve. Az `S` a képernyőn lévő nézetet menti, a `W` egy Ön által megadott ablakot, az `R` egy mentett nézetet mutat, a `D` egyet töröl, a `?` listázza ennek a lapnak a nézeteit. A meglévő névre mentés helyettesíti; minden változtatás egy visszavonási lépés. A nézetek ahhoz a laphoz tartoznak, amelyen mentették. A DWG és DXF fájlok megtartják őket (a VIEW táblázat); egy lap nézetei az első lapon térnek vissza, mert a fájl nem mondja meg, melyik melyiké.

### UNDO és REDO

Álnevek: `U` a {{cmd:UNDO}}-hoz; a {{cmd:REDO}}-nak nincs. Még: {{key:Mod+Z}} és {{key:Mod+Y}}.

### LAYER

Álnevek: `LA`. Ugrik a {{ui:Rétegek}} panelre.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` vagy egy név (a `?` listázza őket: Continuous, a rajz saját vonaltípusai, és DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE a `2` (fél) és `X2` (dupla) méretükkel). {{cmd:LWEIGHT}} (`LW`): az új objektumok vonalvastagsága mm-ben, vagy `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): a rajz vonaltípus-léptéke (visszavonható). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — ugyanaz, mint az állapotsor {{ui:LWT}} gombja. Lásd: [Vonalvastagságok és vonaltípusok](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, majd az új név; az objektumok vagy hivatkozások követik. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]`, az Enterig, majd `Select object on target layer or [Name]` és `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, majd `Y`: a réteg és minden rajta lévő objektum eltűnik (nem a 0. réteg, a DEFPOINTS vagy az aktuális réteg). Mindegyik egy visszavonási lépés. Lásd: [Rétegek rendezése a rajzban](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Rétegek objektumok kijelölésével; a {{ui:Rétegek}} panel {{ui:Eszközök}} menüjében is. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, majd az {{key:Enter}}: minden más réteg kikapcsol. A {{cmd:LAYUNISO}} visszakapcsolja őket. A {{cmd:LAYOFF}} és a {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (vagy befagyasztandó), újra és újra; az `U` visszavonja az utolsót, az {{key:Enter}} befejez. A {{cmd:LAYMCUR}}: `Select object whose layer will become current`. A {{cmd:LAYON}} minden réteget bekapcsol, a {{cmd:LAYTHW}} minden réteget befagyasztásból old fel. Mindegyik parancs egy visszavonási lépés. Lásd: [Rétegek rendezése a rajzban](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

A {{cmd:NEW}} üres rajzot kezd, az {{cmd:OPEN}} egy DWG-t vagy DXF-et nyit meg, mindegyik a saját lapján a rajz fölött (egy nem módosított új rajz helyett használja az új lapot). Egy módosítással rendelkező lap bezárása rákérdez. Lásd: [Képernyő osztása](topic:split-screen).

A {{cmd:SAVE}} (álnév: `QSAVE`, és {{key:Mod+S}}) a rajz másolatát a formátumában tölti le: DWG-ként, ha DWG-ből nyitották, DXF-ként, ha DXF-ből. Új rajz a böngészőben utoljára a Mentés másként párbeszédpanelben választott formátumot használja, egyébként a DWG-t.

A {{cmd:SAVEAS}} (és {{key:Mod+Shift+S}}) megnyitja a {{ui:Másolat mentése másként}} párbeszédpanelt: válassza a {{ui:DWG}}-t (és a {{ui:Verzió}}-ját), a {{ui:DXF R12}}-t vagy a {{ui:DXF 2000}}-t, majd a {{ui:Mentés}}-t. A választás erre a rajzra és az ebben a böngészőben készülő új rajzokra megmarad.

A {{cmd:DXFOUT}} mindig DXF R12 másolatot tölt le, anélkül, hogy a {{cmd:SAVE}} által használt formátumot megváltoztatná.

Lásd: [Fájlok: mit lehet megnyitni, mit lehet menteni](topic:files#saving).

### TOUR

Álnevek: `TUTORIAL`. Újraindítja a hatlépéses első-rajzolási bemutatót. Lásd: [Első lépések](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Álnevek: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Lásd: [Beállítások](topic:settings#toolbar-position).

### COMMANDLINE

Álnevek: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: a parancssort dokkolja vagy lebegteti, egysorossá teszi, megkérdezi, hány előzménysort mutasson (0 és 12 között), vagy megnyitja az előzményt. Lásd: [Beállítások](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: a rajz fölötti sávok úgy, ahogy voltak, vagy tömörítve. Lásd: [Beállítások](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: az a lépés, amelyre a {{ui:Polár}} követés igazodik (több mint 0, legfeljebb 180). Ebben a böngészőben marad meg.

### UNITS

Álnevek: `UN`. Hogyan íródnak és adhatók meg a hosszok.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Építészeti és törtes: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. A többinél: `Enter number of decimal places (0 to 8)`.

Az új méretek ezt követik. Egy visszavonási lépés. Ugyanaz, mint a {{ui:Hosszformátum}} és a {{ui:Pontosság}} a {{ui:Jelenlegi beállítások}}-ben; lásd: [Láb és hüvelyk](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Álnevek: `GDS`. Chip-elrendezés megtekintése (GDSII adatfolyam-fájl): laboratóriumi kísérlet, csak megtekintésre és mérésre.

- Egy fájlválasztó `.gds` fájlt fogad; több felső cella esetén: `Enter the top cell to draw`.
- Minden réteg és adattípus rajzrétegként jelenik meg (`GDS 1`, `GDS 2/5`), a hivatkozások és tömbök laposan kerülnek el, a fájl felhasználói egységében (általában mikrométerben). Egy visszavonási lépés. Semmi nem szimulálódik vagy ellenőrződik, és a fájl nem íródik vissza.

### DIAGRAM

Álnevek: `TEXTDIAGRAM`, `T2D`. Diagram szövegből.

- Egy doboz fogadja a szöveget (vagy egy sort a parancssorban, `;`-vel elválasztott utasításokkal): egy Mermaid folyamatábra, egy PlantUML komponensdiagram, egy D2 vagy egy honnan-hová lista.
- `Specify the top left corner of the diagram`, majd `Specify the text height`.

A blokkok és összekötők közönséges objektumok a `Diagram` nevű rétegen, és a végén kijelöltek. Egy visszavonási lépés. Lásd: [Diagram rajzolása szövegből](topic:text-to-diagram).

### OLELIST

Álnevek: `OLES`. Egy DWG-ben lévő OLE-objektumok, amelyeket a CadCraft magától nem tud elhelyezni.

- Mindegyiket listázza: sorszám, típus, méret, hogy mentett-e képet.
- `Enter an option [Place/eXit] <eXit>`: a Place a sorszámot, a bal alsó sarkot és a szélességet kéri, és egy keretet rajzol a képpel. Egy visszavonási lépés; a megőrzött objektum nem változik. Lásd: [Képek](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Álnevek: `SHX`. Saját SHX betűtípusai.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

A {{ui:Folder}} minden `.shx` fájlt beolvas egy mappából (CadCraft Studio; minden indításkor újra), a {{ui:Files}} kiválasztott fájlokat vesz (böngésző), a {{ui:Reverse}} egy betűtípus betűit az utolsótól az elsőig rendezi. A betűstílusok, amelyek egy betöltött betűtípusra hivatkoznak, abban rajzolódnak. Lásd: [Szöveg rajzolása saját SHX betűtípusokkal](topic:shx-fonts).

### LIMITS

Milyen nagyra szánt a rajz.

- `Specify lower left corner or [ON/OFF] <current>`: egy pont, `ON` vagy `OFF`.
- `Specify upper right corner <current>`.

A rács kitölti a határokat, a {{cmd:ZOOM}} All megmutatja őket, és BE állapotban a határokon kívüli pontot visszautasítja (`**Outside limits`). Egy visszavonási lépés; DWG-ben és DXF-ben mentődik. Lásd: [A rajzhatárok beállítása](topic:drawing-limits).

### AUNITS

Álnevek: `ANGUNITS`. Hogyan jelennek meg és adhatók meg a szögek.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, a másik kettőnél `Enter precision` (0 fok, 2 perc, 4 másodperc, 5 és 8 tizedes közötti másodperc).

Egy visszavonási lépés; DWG-ben és DXF-ben mentődik. Ugyanaz, mint a {{ui:Szögformátum}} a {{ui:Jelenlegi beállítások}}-ben. Lásd: [Irányszögek és szögek megadása és megjelenítése](topic:bearings-and-angles).

### APPLOAD

Álnevek: `AP`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Alkalmazás betöltése…}}. Az {{ui:Alkalmazások betöltése}} párbeszédpanel: `.lsp` rutinok és `.dcl` párbeszédfájlok betöltése, kiürítése, újratöltése az előzményből, valamint az indítókészlet. Egy rutin `(defun c:NAME …)` parancsai ugyanúgy működnek, mint bármely más. Lásd: [Alkalmazások betöltése](topic:load-applications) és [LISP-rutinok futtatása](topic:run-lisp).

### ALIASEDIT, REINIT

A {{cmd:ALIASEDIT}} (vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Álnevek szerkesztése…}}) megnyitja az álnevek fájlját (`ALIAS, *COMMAND` sorok); a {{ui:Mentés}} alkalmazza. A {{cmd:REINIT}} újra alkalmazza. Lásd: [Parancsálnevek szerkesztése](topic:command-aliases).

### LISPEDIT

Álnevek: `VLIDE`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:LISP editor}}. Megnyitja a LISP-szerkesztőt, egy ablakot, amely a rajz mellett nyitva marad.

- A szöveg: sorszámok, a kurzornál lévő zárójel párja megjelölve (pirossal, ha nincs párja), az {{key:Enter}} az új sort a nyitott zárójel alá húzza be, a {{key:Tab}} két szóközt ír, az {{key:Esc}} kilép a szövegből.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): beolvassa minden űrlapját, ahogy a {{cmd:APPLOAD}} teszi a fájllal, és elkészíti a `c:` parancsait. A fájl megjelenik a {{cmd:APPLOAD}} listájában.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): a kijelölt űrlapokat értékeli ki, vagy azt, amelyben a kurzor áll.
- {{ui:Stop}}: véget vet a futó rutinnak.
- {{ui:Console}}: amit a rutin kiírt, és minden hiba a sorával; egy hibára kattintva oda ugrik. A szöveg egyszerre egy legfelső szintű űrlap szerint fut, így a sor az űrlapé, vagy azon belül az a sor, amely a hibában megnevezett függvényt hívja.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): egy `.lsp` fájl. A szöveg ebben a böngészőben is megmarad, így az ablak bezárása nem veszíti el.
- A szöveg mellett: a rutin által definiált függvények, azok, amelyeket hív, de ez a LISP még nem ismer, azok, amelyeket hív, de sem nincsenek benne definiálva, sem beépítve, és a beépített és a nem beépített dolgok teljes listái.

Egy olyan szöveg, amelynek zárójele soha nincs lezárva, vagy amelyben egy szöveg soha nem ér véget, nem fut le: a sort megnevezi. Nincs lépésenkénti hibakereső, töréspont vagy figyelőablak. Lásd: [LISP-rutinok futtatása](topic:run-lisp).

### HELP

Álnevek: `?`. Kiír minden parancsot, az álneveit és egy soros leírást az parancssor előzményében. Nem nyitja meg ezt a súgót: ahhoz nyomja meg az {{key:F1}}-et vagy kattintson a {{ui:Súgó}}-ra.

## Az objektumkijelölés kérdése

Bármely `Select objects` kérdésnél: kattintson objektumokra, húzzon ablakokat (balról jobbra) és keresztező ablakokat (jobbról balra) két kattintással, vagy nyomja és húzza a lasszót ({{key:Space}} húzás közben: ablak, keresztezés, kerítés), a {{key:Shift}}+kattintás eltávolít, az {{key:Enter}} befejez. Írhatja a `ALL` (minden), `L` (az utolsó objektum), `P` (Previous: amit az utolsó parancs használt), `F` (Fence: objektumok, amelyeket pontok vonala metsz; az `U` visszavon egy pontot), `W` (Window), `C` (Crossing), `R` (Remove mód: a kattintások kiveszik az objektumokat; a kérdés `Remove objects`), és `A` (Add again) betűket is. A `?` listázza őket. Ezek nincsenek kiírva a kérdésben. A {{key:Tab}} átfedő objektumok fölött a következőt emeli ki; kattintson, hogy kiválassza. Lásd: [Objektumok kijelölése](topic:select-objects).

### ACCESS

Álnév: `AX`. Rajzolás látás nélkül. Az {{cmd:ACCESS}} be- vagy kikapcsolja a hozzáférést (`On`, `Off`), és kapcsolja a fogáshangokat (`Sound`) és a hangparancsokat (`Voice`); először kiírja az állapotot. Ha a hozzáférés be van kapcsolva, minden parancsot és eredményt a képernyőolvasón keresztül mondanak ki, és a rajzterületen billentyűzeti kurzor van. A „Rajzolás látás nélkül” súgótéma sorolja fel a billentyűket.

### DESCRIBE

Álnév: `DESC`. Leírja, mit tartalmaz a rajz: hány objektum van, milyen fajtájúak, mekkorák, hány rétegük van, mi van kijelölve. Csak olvas; semmit nem változtat.

### WHEREAMI

Álnév: `WHERE`. Megmondja, hol van a kurzor, a rajz egységeiben.

### NEARBY

Megmondja, mi van a kurzor közelében, a legközelebbi elöl, mindegyiket a távolságával és az oldalával együtt.

### SAYSEL

Elmondja, mi van kijelölve, objektumonként egy mondatban (vonal hossza, végei és szöge; kör sugara és középpontja; szöveg ahogy íródott).

### VOICE

Be- vagy kikapcsolja a kimondott parancsokat. Ezeket ez a számítógép ismeri fel; ahol a böngésző nem tudja, a hang ki marad, hacsak a Beállításokban nem választja a böngésző online szolgáltatását.

### TOUCHCROSSHAIR

Álnév: `TCX`. Az eltolt célkereszt ujjal való rajzoláshoz, hogy az ujjhegy ne takarja a kiválasztott pontot. Bekapcsolva egy ujj a rajzon nem választ: egy célkeresztet mozgat, amely az ujj fölött és az egyik oldalán van. Az objektumfogás és a követés a célkeresztet követi. Az ujj felemelése nem választ ki semmit, és a célkeresztet ott hagyja, ahol van. A kiválasztáshoz nyomja meg a sarokban lévő {{ui:Click}} gombot, vagy érintsen meg a rajzon bárhol egy második ujjal. A {{ui:Click}} gombot tartsa nyomva, miközben a másik ujját mozgatja a húzáshoz (kijelölő ablak, lasszó, fogópont). Egy mozdulatlanul lenyomva tartott ujj, vagy az {{ui:Enter}} gomb, az Enter. Két ujjal továbbra is el lehet tolni és nagyítani. A rajz alsó szélénél és a távoli oldalszélénél a célkereszt az ujjhoz húzódik, így a rajz minden része elérhető. Toll és egér mindig közvetlenül választ. A {{cmd:TOUCHCROSSHAIR}} kiírja az állapotot, és kérdezi: `ON`, `OFF`, `Auto` (csak ott be, ahol az ujj az egyetlen mutató, így egérrel rendelkező számítógépen ki van kapcsolva), `Distance` (milyen messze van a célkereszt az ujjtól, 24 és 240 képpont között) vagy `Side` (`Left`: felfelé és balra, jobb kézhez; `Right` bal kézhez; a gombok a másik sarokba kerülnek). Ugyanezek a választások a Beállítások › CadCraft alatt is vannak, érintőképernyős eszközön pedig az állapotsorban van egy {{ui:Eltolt célkereszt}} kapcsoló. A választások ebben a böngészőben maradnak meg.

### WHOHAS

Megmondja, ki nyitotta meg a rajzot. A CadCraft Studioban egy számítógépen a DWG vagy DXF megnyitása egy kis zárófájlt ír mellé (`Plan.dwg.cclock`: ki, mióta, melyik verzió), a rajz nyitva tartása alatt percenként frissíti, és a rajz bezárásakor eltávolítja. Egy másik által nyitott rajz megnyitásakor megmondja, ki és mióta, és felajánlja a {{ui:Open read-only}} (csak olvasható megnyitás; a mentés új nevet kér), az {{ui:Open anyway}} (a másik személy a következő frissítésnél értesül) vagy a {{ui:Cancel}} (Mégse) lehetőséget. Egy másik által nyitott fájl fölé mentés előbb rákérdez. Az ötpercnél régebben nem frissített zár elavultnak számít: a másik példány mentés nélkül zárult be, vagy a számítógép alszik.

A {{cmd:WHOHAS}} kérdezi: `Current` (a megnyitott rajz), `File` (válasszon egyet), `FOlder` (válasszon egy mappát: minden benne lévő rajz, amely valahol nyitva van, listázódik), `Path` (írja be a teljes útvonalat) vagy `Name` (a név, amelyet mások látnak; bejelentkezve a fiókjának neve). A Studio csak olyan mappákat ér el, amelyeket Ön választott: egy olyan mappából megnyitott rajznál, amelyet soha nem választott, egyszer jelzi, hogy nem tudja nyitottként feljegyezni a rajzot; a `FOlder` választja ki a mappát, és a zárak onnantól ott működnek. A zár egy üzenet az embereknek, nem akadály: egy másik program továbbra is írhatja a fájlt. Böngészőben nincsenek mappák, amelyekben nézelődni lehetne, és a parancs ezt mondja meg.

### OVERKILL

Törli az azonos objektumokat, és rendbe teszi az átfedő vonalakat és íveket, olyan rajzoknál, amelyek dupla vonalakkal érkeznek. `Select objects to clean up`, {{key:Enter}}, majd újra {{key:Enter}} a megjelenített beállításokkal való tisztításhoz, vagy előbb változtasson meg egyet:

- `Tolerance`: milyen közel kell lenniük két koordinátának ahhoz, hogy azonosnak számítsanak (kezdésként 0.000001; a 0 pontosan azonosat jelent).
- `Ignore`: olyan tulajdonságok, amelyek eltérhetnek két egyébként azonos objektumnál. Írjon be egy nevet a kapcsoláshoz: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, vagy `None` / `All`. Az {{key:Enter}} befejezéskor.
- `Overlap`: be vagy ki. Bekapcsolva az egy egyenesen futó, átfedő vonalak egy vonallá válnak (a másik belsejében lévő vonal egyszerűen törlődik), és az egy körön átfedő ívek egy ívvé; a teljes kört kiíró ívek körré válnak, és egy körön fekvő ív törlődik.
- `Ends`: be vagy ki. Bekapcsolva az egy egyenesen futó vonalak és az egy körön lévő ívek, amelyek csak végpontjaiknál érintkeznek, egy darabbá válnak.

Minden objektumtípust ellenőriz azonosság szempontjából: két objektum azonos, ha a geometriájuk a tűrésen belül azonos, és rétegük, színük, vonaltípusuk, vonaltípus-léptékük, vonalvastagságuk, vastagságuk, átlátszóságuk és magasságuk egyezik (kivéve azokat, amelyeket figyelmen kívül hagy). A vonalak és a nyitott polivonalak akkor is egyeznek, ha fordítva vannak rajzolva. A parancs jelenti, hány objektumot ellenőrzött és törölt: azonos, összeolvasztott átfedő darabok, végükön egybekapcsolt darabok. Egy {{cmd:UNDO}} mindent visszahoz. A beállítások a rajzablak bezárásáig maradnak.

Nem nyúl: a zárolt rétegek objektumaihoz és a rejtett objektumokhoz. Nem egyesíti a magassággal (Z) rendelkező vonalakat (a pontosan azonos példányaik még törlődnek), és nem érinti a polivonalon belüli szakaszokat (azok nem ritkulnak), a polivonal szakaszán fekvő vonalat, és a fordítva rajzolt zárt polivonalat.

### DRAWORDER

Megváltoztatja, mely objektumok rajzolódnak elöl. `Select objects to re-order`, {{key:Enter}}, majd `Above objects`, `Under objects`, `Front` vagy `Back` ({{key:Enter}} = `Back`). Az `Above objects` és az `Under objects` a referenciaobjektumokat kéri: a kijelölés közvetlenül az elülső közülük elé, vagy a hátsó közülük mögé kerül. A kijelölt objektumok saját sorrendjüket megtartják egymás között. Egy visszavonási lépés. A sorrend a rajzzal együtt mentődik DWG-ben és DXF-ben, ahol az a sorrend, amelyben az objektumok íródnak.

A képernyőn a CadCraft először a kitöltött területeket rajzolja (egyszínű sraffozások, vastag polivonalak, maszkok), aztán a vonalakat, aztán a szöveget, így a szöveg mindig a kitöltés fölött olvasható; a rajzolási sorrend a kitöltött objektumok között és a képek között látszik. Más programok, amelyek a fájlt megnyitják, minden objektumot a mentett sorrendben rajzolnak.

### TEXTTOFRONT

Minden szöveget, méretet és vezetővonalat minden más elé hoz a megnyitott térben: `Text`, `Dimensions`, `Leaders` vagy `All` ({{key:Enter}} = `All`). Egy visszavonási lépés. Jelzi, ha nincs ilyen, vagy ha már elöl vannak.

### HATCHTOBACK

A megnyitott tér minden sraffozását minden más mögé küldi, így a kitöltések nem takarják a vonalakat és a szöveget a mentett fájlban. Nincs kérdés. Egy visszavonási lépés.

### ISOLATEOBJECTS

Álnév: `ISOLATE`. Csak a kijelölt objektumokat mutatja: a nyitott térben minden más az UNISOLATEOBJECTS-ig látószögből kikerül. A {{cmd:LAYISO}}-val ellentétben azokon az objektumokon működik, amelyeket kiválaszt, bármilyen rétegen legyenek is, és egyik rétegen sem változtat. A rejtett objektumok nem rajzolódnak, nem választhatók ki, nem fognak rájuk, nem nagyítanak rájuk, és nem plottolódnak, és az `ALL`-t használó parancsok átugrják őket. Ami az elszigetelt objektumok mellett rajzolódik, az szokásosan jelenik meg.

Csak erre a munkamenetre szól: a rajzzal semmi nem mentődik, nem egy visszavonási lépés, és a rajz újbóli megnyitásakor minden látszik. Amíg objektumok vannak elrejtve, az állapotsor egy gombot mutat a számukkal; kattintson rá, hogy újra megmutassa őket.

### HIDEOBJECTS

Elrejti a kijelölt objektumokat az UNISOLATEOBJECTS-ig. Ugyanazok a szabályok, mint az {{cmd:ISOLATEOBJECTS}}-nél: csak erre a munkamenetre, nincs mentve, nem egy visszavonási lépés.

### UNISOLATEOBJECTS

Álnevek: `UNISOLATE`, `UNHIDE`. Újra megmutat minden objektumot, amelyet az {{cmd:ISOLATEOBJECTS}} vagy a {{cmd:HIDEOBJECTS}} elrejtett, és kiírja, hány tért vissza.

### LAYLOCKFADE

Beállítja, hogyan nézzenek ki a zárolt rétegek objektumai, és hogy egy kattintás eléri-e őket. Kiírja a jelenlegi állapotot, majd fogad:

- egy számot 0 és 90 között: a halványítás mértéke százalékban (kezdésként 50). A 0 kikapcsolja a halványítást.
- `ON` vagy `OFF`: halványítás be vagy ki, a mértéket megtartva.
- `Pick`, majd `Yes` vagy `No`: kijelölhet-e egy kattintás zárolt rétegek objektumait, amikor nem fut parancs? `No` (alapértelmezés): egyáltalán nem választhatók ki. `Yes`: egy kattintás vagy egy ablak kijelöli őket, hogy a {{ui:Tulajdonságok}} megmutathassa; így is változtathatatlanok maradnak, és egy parancs saját `Select objects`-e soha nem veszi őket fel.

Az objektumfogás mindkét esetben megtalálja a zárolt rétegek objektumait. A plottolás soha nem halványít. Mindkét beállítás az Öné, nem a rajzé, és a {{ui:Beállítások}} alatt a {{ui:Locked layers}} részben is megtalálható.

### BURST

Felbontja a blokkhivatkozásokat, és megtartja, amit az attribútumaik mondanak. `Select block references to burst`, {{key:Enter}}: minden hivatkozást a blokk objektumai váltanak fel, és minden látható attribútum értéke egyszerű szöveggé válik azon az attribútum saját rétegén (a 0. rétegen lévő attribútum a hivatkozás rétegére kerül, mint a blokk többi, 0. rétegen lévő objektuma). A láthatatlan attribútumok eltűnnek. A blokkon belüli blokk blokkhivatkozás marad. Egy visszavonási lépés; jelenti, hány hivatkozást bontott fel, és hány attribútumértéket alakított szöveggé.

Visszautasít egy csatolt rajzot név szerint (előbb kösse hozzá, vagy másoljon belőle a {{cmd:NCOPY}} használatával), és a kijelölés többi objektumát érintetlenül hagyja. Blokkhivatkozásoknál a {{cmd:EXPLODE}} ugyanazokat az objektumokat adja; a {{cmd:BURST}} csak blokkhivatkozásokat fogad el, és az attribútumszöveget is számolja.

### TXT2MTXT

Álnév: `T2M`. Egysoros szövegeket egyetlen bekezdésszöveggé egyesít. `Select single-line text to join`, {{key:Enter}}, majd `Paragraph` (a sorok összefutnak, és a legszélesebb sor szélességénél törnek) vagy `Lines` (minden szöveg saját sor marad); az {{key:Enter}} a legutóbb használtat veszi. A sorok felülről lefelé, majd balról jobbra rendeződnek, a felső szöveg irányában. A bekezdés a felső szöveg bal felső sarkától lóg, és átveszi annak magasságát, forgatását, stílusát, rétegét és színét. Egy visszavonási lépés.

A már bekezdésszöveg, az üres szöveg és a kijelölés más objektumai változatlanok maradnak, és a parancs jelzi, hány maradt így.

### NCOPY

Objektumokat másol egy blokkhivatkozásból vagy egy csatolt rajzból a rajzba, bármit felbontás nélkül. `Pick an object inside a block reference or a linked drawing`: a kattintáshoz legközelebbi objektum oda másolódik, ahol látszik, bármilyen mélyen legyen beágyazva; válasszon többet, majd {{key:Enter}}. Ezután: `Base point to move the copies`: az {{key:Enter}} a helyükön hagyja őket, vagy adjon meg egy alappontot és egy második pontot. Az egész parancs egy visszavonási lépés.

A másolat azt a réteget veszi át, amelyen látszik: a blokkon belül a 0. rétegen lévő objektum arra a hivatkozás rétegére kerül, amelyben volt, és egy ByBlock szín azon hivatkozás színe lesz. Csatolt rajzból a `Plan|Walls` réteg `Plan$0$Walls` lesz (a hivatkozás által adott név), a csatolt réteg színével, vonaltípusával és vonalvastagságával. Egy attribútum értéke szövegként másolódik. A zárolt rétegű blokkhivatkozások nem választhatók ki.

### FLATTEN

A kijelölt objektumok magasságát (Z) és vastagságát 0-ra állítja. `Select objects to flatten`, {{key:Enter}}. Laposítja a kijelölt blokkdefiníciók belsejében lévő objektumokat is (és azokban a blokkokban lévőket), így ezekre a blokkokra mutató minden hivatkozás megváltozik; a csatolt rajzok változatlanok maradnak. Egy visszavonási lépés; jelenti, hány objektum változott, és jelzi, ha egynek sem volt magassága vagy vastagsága.

A CadCraft egy 2D rajzban a harmadik dimenzióból ezeket tartja meg: magasságot a köröknél, íveknél, ellipszisek, pontok, szövegek, blokkhivatkozások, sraffozások, vezetővonalak és polivonalak esetén (a magasságuk), magasságot egy vonal mindkét végén, és vastagságot a vonalaknál, köröknél, íveknél, polivonalaknál, pontoknál és szövegeknél, ahogy a fájl tartalmazta. A {{cmd:FLATTEN}} pontosan ezeket törli. Nem nyúl a 3D-lap 3D-modelljéhez, a 3D-felületekhez vagy testekhez, és egy döntött síkban rajzolt objektum a fájl megnyitásakor már a rajzsíkba került.

### BREAKLINE

Vonalat rajzol törésjellel, egy rövidre vágott nézethez. Kiírja a jelenlegi méretet és túlnyúlást, majd a `First point of the break line` kérdést (vagy előbb a `Size` / `Extension` a megváltoztatásukhoz), a `Second point`-ot, és a `Where the break symbol sits`-et: kattintson a vonal mentén, vagy az {{key:Enter}}-t a közepéhez. Az eredmény egyetlen polivonal az aktuális rétegen: a vonal, amely minden pontján túl a túlnyúlással fut, egy Z alakú vonással, amely akkora, mint a méret, és annak felével egyenlő hosszú.

A `Size` és az `Extension` az Ön beállításaként megmarad (a méret kezdetben a méretszöveg magasságának és a méretezési léptéknek a kétszerese; a túlnyúlás a méret fele). Az {{key:Enter}} megismétli a parancsot.

### AUDIT

Ellenőrzi a megnyitott rajzot a sérülésekre, és javítja. Az {{cmd:AUDIT}} a modell, a lapok és a blokkok minden objektumát, valamint a rétegtáblát megnézi, és típus szerint listázza, amit talál:

- nem véges vagy abszurd nagyságú számok;
- méret nélküli objektumok: nulla hosszúságú vonal, nulla sugarú kör, egy csúcsú polivonal, betű nélküli vagy magasság nélküli szöveg, nulla léptékű blokkhivatkozás;
- olyan rétegen lévő objektumok, amely nincs a rajzban; hivatkozások olyan blokkra, amely nincs ott; szöveg- és méretezési stílusnevek és vonaltípus-nevek, amelyek nincsenek a rajzban;
- önmagukat tartalmazó blokkok, közvetlenül vagy más blokkokon keresztül;
- azonos azonosítót, kulcsot vagy fájlazonosítót megosztó objektumok;
- mérési pontok nélküli méretek, és olyan sraffozások, amelyek határa nem zárt körvonal.

Ezután ezt kérdezi: `Fix them? [Yes/No]`. A `No` semmit nem változtat. A `Yes` egy visszavonási lépésben mindent javít: ami nem rajzolható, eltávolítja (rossz számok, nincs méret, hiányzó blokk, hibás méret, olyan sraffozás, amelynek nincs használható határa, az a hivatkozás, amely egy blokkokból álló kört zár); a hiányzó réteget létrehozza; az ismeretlen stílus- és vonaltípus-neveket visszaállítja az alapértelmezésre; a megosztott kulcsot kicseréli. Kiírja, hány objektum lett eltávolítva, és hány lett javítva. Ugyanezek a megállapítások megjelennek a Problémák panelen is, mindegyik saját {{ui:Repair}} gombjával.

Semmit nem utasít vissza, de csak azt ellenőrzi, amit a CadCraft maga rajzol: a más programoknak megtartott adatokat (3D-testek, OLE-objektumok) nem nyitja meg.

### RECOVER

Megnyit egy sérült DXF vagy DWG fájlt. A {{cmd:RECOVER}} kéri a fájlt, beolvassa azt, ami olvasható, a fájl elutasítása helyett; listázza, mit hagyott ki vagy mit feltételezett, majd úgy ellenőrzi és javítja a rajzot, ahogy az {{cmd:AUDIT}} teszi `Yes` válasszal.

- DXF: azok a sorok, amelyek nem egy kód–érték pár részei, kimaradnak, amíg a párok újra nem illeszkednek; egy befejezés nélküli szakasz lezárul; egy idő előtt megszakadt fájl a megszakadásig olvasódik; egy idő előtt megszakadt bináris DXF az utolsó teljes értékéig. Ha egy szakasz, blokk vagy objektum továbbra sem olvasható, kimarad, név szerint jelölve, és az olvasás átugrik rajta.
- DWG: azok az objektumok, amelyek nem felelnek meg az ellenőrzéseiknek vagy nem dekódolhatók, kimaradnak, és az elveszett objektumlista az objektumadatok bejárásával épül újra.

A lemezen lévő fájl nem változik. A helyreállított rajz mentetlenül nyílik meg: mentse új néven. Egy olyan fájlt, amelyből semmi sem olvasható, az ok megnevezésével elutasít.

### LEGACYTEXT

Régi, 8 bites vietnami betűtípusokkal gépelt szöveget alakít Unicode-ra. Rövid nevei: `TEXTTOUNICODE` és `VNTEXT`.

A régebbi vietnami rajzok szövegüket olyan nyugat-európai karakterekként tárolják, amelyeket csak a betűtípus alakít vietnamivá: TCVN3 szöveg az ABC betűtípusokban (`.VnTime`, `.VnArial`, és a nagybetűs betűtípusok, amelyek neve `H`-ra végződik), és VNI szöveg a VNI betűtípusokban (`VNI-Times`). A CadCraft az ilyen szöveget már a rajz megnyitásakor úgy mutatja, ahogyan olvasható, a szövegstílusának, az objektumnak vagy a bekezdésszöveg egy futószakaszának betűtípusa szerint; a fájl továbbra is a régi karaktereket tartalmazza.

A {{cmd:LEGACYTEXT}} kiírja, hány szöveget talált az egyes kódolásokban, és kérdezi: `Convert … to Unicode?`. A `Yes` minden szöveget átír (modell, lapok, blokkok, attribútumértékek és -definíciók), és a szövegstílusoknak Unicode betűtípust ad (Times New Roman, Arial vagy Courier New a régi betűtípus fajtája szerint), egy visszavonási lépésben. A bekezdésszövegen belüli formázás megmarad.

Ha egy szöveg sem ismert betűtípust használ (olyan stílus, amelynek a betűtípus-neve elveszett), kéri: `Read selected texts as [Tcvn3/Vni/None]`: válassza ki a kódolást, és jelölje ki a szövegeket. A már Unicode szöveg változatlan marad. A méretszöveg-felülírások és a többszörös vezetővonal szövegei nem alakulnak át.

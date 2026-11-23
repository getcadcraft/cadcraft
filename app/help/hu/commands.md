---
title: Parancshivatkozás
summary: A CadCraft rajzoló alkalmazás minden parancsa a rövid neveivel, a kérdéseivel, opcióival és alapértelmezett értékeivel.
keywords: parancsok, álnevek, parancslista, terület, kerület, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

Írjon be egy parancsnevet vagy álnevet, és nyomja meg az {{key:Enter}} vagy a {{key:Space}} billentyűt. A kis- és nagybetű mindegy, a kezdő `_`, `-`, `.` vagy `'` karaktert a program figyelmen kívül hagyja. A `HELP` (vagy `?`) beírásával rövid listát kap minden parancsról a parancssor előzményeiben; az {{key:F1}} megnyitja ezt a súgót.

Hogyan olvassa a kérdéseket: az opciók szögletes zárójelben vannak, és a nagybetűs betűik beírásával választhat közülük (`D` az Átmérőhöz). Az alapértelmezett érték kacsacsőrben van; az {{key:Enter}} megnyomásával elfogadja. Ahol pontot kérnek, kattinthat, vagy beírhatja a [Koordináta- és távolságbevitel](topic:coordinate-entry) bármelyik formátumát. Ahol távolságot kérnek, számot írhat be, vagy két pontra kattinthat.

Ahol pontot vagy objektumot kell megadni, és nincs alapértelmezett, az {{key:Enter}} megnyomása befejezi a parancsot. Az {{key:Esc}} megszakítja. Bármit tett egy parancs, az egy visszavonási lépés.

## Rajzolás

### LINE

Álnév: `L`. Egyenes szakaszok, mindegyik saját objektum.

- `Specify first point` (Enter: az utoljára megadott ponttól indul)
- `Specify next point [Undo]`, ismételve. Két szakasz után: `[Undo/Close]`.
- A `U` visszaveszi az utolsó szakaszt, a `C` az első pontig zárja és befejezi. Az Enter befejezi.

### PLINE

Álnév: `PL`. Egy polivonal egyenes és ív szakaszokból.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (zárás, ha már két szakasz van)
- Az `A` ívre vált: `Specify endpoint of arc [Line/CLose/Undo]`. Minden ív érintőlegesen folytatja az előző szakaszt. Az `L` visszatér a vonalakhoz, a `CL` ívvel zár.
- Az Enter befejezi; a polivonal nyitva marad.

### CIRCLE

Álnév: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; a `D` kérdezi: `Specify diameter of circle`.
- `2P`: egy átmérő két vége. `3P`: három pont a körön.
- `T` (vagy a `TTR` parancs, és a {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Kör: érintő, érintő, sugár}}): `Specify point on object for first tangent of circle`, majd a második, végül a sugár (Enter: az utolsó). A kör mindkét objektumot érinti (vonalak, ívek, körök, polivonal-szakaszok, blokkokon belül is); az érintők közül azt, amely a kiválasztott pontjaihoz a legközelebb van. Ha egyik sem illik, a „Circle does not exist” üzenet jelenik meg.
- `TTT` (vagy a {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Kör: érintő, érintő, érintő}}): három objektum; a kör mindhármat érinti, a kiválasztott pontokhoz legközelebbi (három vonal esetén a belső vagy egy külső kör, attól függően, hová kattint).

### ARC

Álnév: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: háromponton átmenő ív.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Az ív a kezdőponttól a végpontig az óramutató járásával ellentétesen fut.

### RECTANG

Álnevek: `REC`, `RECTANGLE`. Zárt polivonal.

- `Specify first corner point`, `Specify other corner point`. A második sarokhoz írja be a `@width,height` alakot.

### POLYGON

Álnév: `POL`. Szabályos sokszög zárt polivonalként.

- `Enter number of sides <4>` (3 és 1024 között)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: kattintson vagy írjon be egy pontot; a távolsága adja a méretet, iránya pedig elforgatja a sokszöget.

### ELLIPSE

Álnév: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, majd a távolság a másik tengelyig.
- `I` (`Isocircle`, csak amíg a {{cmd:ISODRAFT}} be van kapcsolva): középpont, majd sugár vagy `Diameter`: az ellipszis, amelyként a kör látszik az aktuális izometrikus síkon.

### HATCH

Álnevek: `H`, `BH`, `BHATCH`; vagy a {{ui:Sraffozás}} gomb az eszköztáron. Először kiírja az aktuális mintát, léptéket és szöget.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, ismételve (`Undo`, miután van terület): minden kattintás hozzáadja a körülötte lévő zárt területet, a benne lévő zárt alakzatok szigetként. Az Enter egy sraffozást készít mindegyikből.
- `S`: `Select closed objects` (zárt polivonalak, körök, zárt ellipszisek).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): a kitöltés színátmenet minta helyett. Lásd a {{cmd:GRADIENT}} kérdéseit.

Lásd: [Sraffozás és kitöltött területek](topic:hatch).

### GRADIENT

Álnév: `GD`. Területet tölt ki egy vagy két szín színátmenetével. Először a színátmenetet kérdezi, majd úgy megy tovább, mint a {{cmd:HATCH}} (`Pick internal point`, `S` zárt objektumokhoz, az {{key:Enter}} a befejezéshez).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, ismételve; minden alkalommal kiírja az aktuális színátmenetet.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, vagy ezek egyike megfordítva (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Az első betűk elegendők.
- `O`: egy szín, majd az árnyalata 0 és 1 között (0 feketére sötétíti, 0,5 maga a szín, 1 fehérre világosítja). `TW`: az első és a második szín. A szín 1 és 255 közötti szám, három szám, például `255,128,0`, vagy `#rrggbb`.
- `A`: a szög, amelyben a színátmenet fut. `C`: középre igazított Igen vagy Nem (a Nem a színátmenet közepét az egyik oldalra viszi).
- Ismeretlen színt vagy típust, és a 0 és 1 közötti tartományon kívüli árnyalatot elutasít.

A {{cmd:HATCHEDIT}} `G` és a Tulajdonságok (Színátmenet) később módosítja a színátmenetet, vagy bármely sraffozást színátmenetessé alakít. A színátmenet a képernyőn és a nyomtatásban is megjelenik. A DWG 2004 és újabb formátumok valódi színátmenetes sraffozásként tárolják; a DXF 2000 és a DWG 2000 a CadCraft számára tárolja, a többi program pedig az első színnel kitöltött tömör kitöltést látja.

### HATCHGENERATEBOUNDARY

Álnév: `HGB`. Újra létrehozza a határt egy olyan sraffozásból, amely elvesztette azt. `Select hatches` (vagy előbb jelölje ki őket), majd `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- A sraffozás minden hurka zárt polivonallá válik a sraffozás rétegén; az új polivonalak kijelölve maradnak. Egy íves él a sraffozás által megtartott rövid egyenes darabokként jön vissza.
- Igennel a sraffozás követi az új határát, ahogy a {{cmd:HATCH}} paranccsal készített sraffozás. Egy visszavonási lépés.
- Jelzi, ha nem volt sraffozás kijelölve.

### POINT

Álnév: `PO`; vagy {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Pont}}. Pontobjektumok, kattintásonként egy, az Enter-ig.

- `Specify a point`

### XLINE

Álnév: `XL`; vagy {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Szerkesztővonal}}. Szerkesztővonalak, mindkét irányban végtelenek. Lásd: [Szerkesztővonalak és sugarak](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, majd minden vonalhoz `Specify through point`, az Enter-ig.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` először `Select a line object`-et kér.
- `B`: `Specify angle vertex point`, `Specify angle start point`, majd minden vonalhoz `Specify angle end point`.
- `O`: `Specify offset distance [Through] <Through>`, majd minden vonalhoz `Select a line object` és `Specify side to offset` (vagy `Specify through point`).

### RAY

Nincs álnév; vagy {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Sugár}}. `Specify start point`, majd minden sugárhoz `Specify through point`, az Enter-ig.

### TEXT

Álnevek: `DT`, `DTEXT`; vagy a {{ui:Szöveg}} gomb az eszköztáron. Egysoros szöveg; minden sor saját objektum.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, majd `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, ismételve: minden Enter a következő sort kezdi a sor alatt. Üres sornál az Enter befejezi. A {{key:Space}} itt szóközt ír.

### DIVIDE

Álnév: `DIV`. A {{cmd:DIVIDE}} jelöléseket tesz egy vonalra, ívre, körre, polivonalra, spline-ra vagy ellipszisre, amelyek egyenlő részekre osztják. Válassza ki az objektumot, majd adja meg a részek számát (2 és 32767 között). Egy nyitott objektumnál egyel kevesebb jelölés van, mint a rész; zártnál a kezdőpontján is jelölés van. Maga az objektum nincs elvágva. A jelölések pontok; a `Block` ehelyett ennek a rajznak egy blokkját kéri, és azt, hogy forduljon-e az objektumot követve. A spline-ok és ellipszisek mentén mért hosszak rövid húrok mentén számítódnak. Szöveget, sraffozásokat és más hosszal nem rendelkező objektumokat elutasít.

### MEASURE

Álnév: `ME`. A {{cmd:MEASURE}} minden megadott hosszúságnál jelölést tesz egy vonal, ív, kör, polivonal, spline vagy ellipszis mentén, attól a véghez számítva, amely a kiválasztási pontjához a legközelebb van (zárt objektumnál: a kezdőponttól). A hosszt beírással vagy két ponttal adja meg. Egy nyitott objektum távoli végén nincs jelölés. A `Block` minden jelölésnél egy blokkot helyez el pont helyett. Elutasítja a 0 hosszúságot, az objektumnál hosszabbat, és azt, amely 32767-nél több jelölést készítene.

### BOUNDARY

Álnevek: `BO`, `BPOLY`. A {{cmd:BOUNDARY}} zárt polivonalat készít a kiválasztott pontot tartalmazó terület köré, a képernyőn határoló vonalakból, ívekből, körökből, polivonalakból és görbékből. Az ív vagy kör mentén fekvő részek ívszakaszokként jönnek vissza; az ellipszisek és spline-ok darabjai rövid egyenes szakaszokként. A `Islands` bekapcsolva (kezdeti beállítás) a benne lévő zárt területek is kapnak saját polivonalat. Továbbra is kattintson pontokra; az Enter befejezi. A területet határoló objektumok változatlanok maradnak. Ha egyetlen zárt terület sem tartalmazza a pontot, ezt jelzi.

### BLEND

A {{cmd:BLEND}} spline-t rajzol két nyitott görbe végei között. Mindkét görbét a végéhez közel jelölje ki az összekötéshez. A `CONtinuity` a `Tangent` (a spline mindkét görbe irányában indul és érkezik) vagy a `Smooth` (a végeknél azt is követi, ahogy hajlanak) közül választ; a választás a munkamenetre megmarad. A két görbe nem változik. Zárt objektumokat és két olyan véget, amely már találkozik, elutasít.

### REGION

Álnév: `REG`. A {{cmd:REGION}} zárt objektumokat tartományokká (régiókká) alakít: olyan lapos területekké, amelyeket egyesíthet, vághat és mérhet. Válasszon köröket, zárt polivonalakat, zárt ellipsziseket vagy zárt spline-okat, vagy vonalakat, íveket és nyitott polivonalakat, amelyek végükön összezárva hurkot alkotnak; minden hurok egy tartománnyá lesz, és helyettesíti azokat az objektumokat, amelyekből készült. Az ívek ívek maradnak; az ellipszisek és spline-ok rövid egyenes szakaszokká válnak. Ami nincs zárva és nem zár hurkot, az marad, ahogy van, és megmondja, hány ilyen van. A rajzban a tartomány egy vagy több zárt polivonal, amelyeket egy névtelen csoport tart össze, így egy kattintás az egész tartományt kijelöli, és a másolata saját tartomány lesz; más programok, amelyek megnyitják a fájlt, zárt polivonalakat látnak.

A rajzban lévő tartományokkal a 2D lapon a {{cmd:UNION}}, a {{cmd:SUBTRACT}} és az {{cmd:INTERSECT}} tartományokkal dolgozik: a `UNION` a kijelölt tartományokat egyesíti eggyé (a szétválók egy több körvonalú tartományt adnak); a `SUBTRACT` kéri azokat a tartományokat, amelyekből kivon, majd azokat, amelyeket elvesz (a lyuk a tartomány része marad); az `INTERSECT` azt a területet tartja meg, amelyet mindegyik közösen tartalmaz. Mindegyik megmondja az eredmény területét, és egy visszavonási lépés. Elutasítják, ha nem maradna semmi, vagy nincs közös rész. A 3D lapon, és olyan rajzban, amelyben nincs tartomány, ugyanezek a parancsok továbbra is testeken működnek.

## Módosítás

Álnevek: `MT`, `T`; vagy a {{ui:Bekezdés}} az eszköztáron. Bekezdésszöveg, amely egy szélességre tördelődik, helyben gépelve.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: a két sarok közötti szélesség az, ahol a szöveg tördelődik. Az `H` `Specify height`-et kér, a `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`-t, az `L` `Enter line spacing factor (0.25 to 4)`-et, az `R` `Specify rotation angle`-t, a `W` `Specify width (0 for no wrapping)`-t, és kihagyja a második sarkot.
- Ezután a rajzon egy doboz nyílik: írjon, az {{key:Enter}} új bekezdést kezd, a {{key:Mod+Enter}} vagy a dobozon kívüli kattintás befejezi, az {{key:Esc}} megszakítja. Sávja állítja a magasságot, a sorközt, a szélességet és az igazítást. Lásd: [Szöveg és feliratok hozzáadása](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Álnevek: `ED`, `DDEDIT`; vagy duplán kattintson egy szövegre. `Select a text to edit`, ismételve az Enter-ig: mindegyik ugyanabban a dobozban nyílik meg. Kijelölt vagy duplán megkattintott szövegen indítva azt szerkeszti, és véget ér.

### ERASE

Álnevek: `E`, `DELETE`; vagy nyomja meg a {{key:Delete}} billentyűt objektumok kijelölése mellett.

- `Select objects` (kimarad, ha az objektumok már ki vannak jelölve)

### MOVE

Álnév: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, `dx,dy` alakban beírva.

### COPY

Álnevek: `CO`, `CP`. Annyiszor másol, ahány pontot ad meg.

Az `Array` a második pont kérdésénél egy sort készít egy lépésben: adja meg az elemek számát (az eredeti is egynek számít), majd azt a pontot, ahová az első másolat kerül; a többiek ugyanakkora távolsággal követik. A `Fit` ehelyett azt a pontot teszi az utolsó másolat helyévé, a többi egyenletesen szétosztva közéjük.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, ismételve az Enter-ig. A `U` visszaveszi az utolsó másolatot.

### ROTATE

Álnév: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: fok, az óramutató járásával ellentétes irány a pozitív; vagy kattintson egy pontra, hogy felé forgasson.

### SCALE

Álnév: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: írjon be egy tényezőt, például `0.5` vagy `2`. Egy megadott pont távolsága a bázispontól tényezőként számít.

### MIRROR

Álnév: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Álnév: `AL`; vagy {{ui:Módosítás}} › {{ui:Továbbiak}} › {{ui:Igazítás}}.

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

Álnév: `ALP`; vagy {{ui:Módosítás}} › {{ui:Továbbiak}} › {{ui:Igazítás és elosztás}}. Megnyitja a panelt, amely kattintásokkal futtatja az ALIGNTO és a DISTRIBUTE parancsokat.

### LASER

Álnév: `LASERCUT`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Lézer…}}. Megnyitja a Lézer panelt a rajz fölött: mit csinál minden réteg (vágás, bevágás, gravírozás, kitöltés, kép), az előnézet, a mentendő GRBL G-kód, valamint a keretezés és küldés Web Serial-on keresztül. Lásd: [Rajz küldése lézerhez](topic:laser-cutting).

### STRETCH

Álnév: `S`; vagy {{ui:Nyújtás}}. `Select objects to stretch`: húzzon keresztező ablakokat (vagy írja be a `C`-t) a végekre a mozgatáshoz. `Specify base point [Displacement]`, `Specify second point`. Az ablakokon belüli pontok mozognak: vonalvégek, polivonal-csúcsok (az ívszakaszok megtartják magasságukat), méretezési pontok; a körök, ellipszisek, szövegek, pontok és blokkok egészben mozognak, ha középpontjuk vagy beillesztési pontjuk benne van. A parancs előtt tett kijelölés megtartja a keresztező ablakokat (és lasszókat), amelyek létrehozták, így ugyanúgy nyúlnak. Ablak nélkül az objektumok egészben mozdulnak.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Álnév: `AR`; vagy {{ui:Tömb}}. `Select objects`, majd `Enter array type [Rectangular/POlar] <Rectangular>` (csak az ARRAY esetén).

- A téglalap 4 oszlop × 3 sor kezdettel indul, az objektumok méretének 1,5-szeresére osztva, előnézetként. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: a `COU` oszlopokat és sorokat kér, az `S` az oszlopok és sorok közötti távolságokat (negatív balra vagy lefelé megy), a `COL` és az `R` egy-egy irányt.
- A polár `Specify center point of array`-t kér, 6 elemmel indul, az egész körbe, elforgatva. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: az `I` az elemeket, az `F` a kitöltési szöget (+ az óramutató ellentétes, − az óramutató szerinti irányban), a `ROT` Igent vagy Nemet.
- Az {{key:Enter}} (eXit) elkészíti a másolatokat, sima objektumokként. Egy visszavonási lépés.
- Az `AS` (ASsociative) a sima másolatok és a később szerkeszthető tömb között vált: egy objektum, amelyet később a {{cmd:ARRAYEDIT}} paranccsal, a fogópontjaival vagy a Tulajdonságokban módosít. A választás megmarad ({{cmd:ARRAYASSOCIATIVITY}}); kezdetben sima másolatok.

### ARRAYPATH

Másolatok egy görbe mentén. `Select objects`, majd `Select path curve`: egy vonal, ív, kör, ellipszis, polivonal vagy spline (nem az elrendezendő objektumok egyike). Az útvonal az objektumokhoz közelebbi végétől indul, és az első elem az objektumok eredeti helyén van.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, előnézettel. `M`: a `Divide` az elemeket egyenletesen szétosztja az egész útvonalon, a `Measure` minden megadott távolságra tesz egyet. `I`: az elemek száma (Measure esetén a 0 annyit jelent, ahányba belefér; a végén túli szám az illeszkedőre csökken). `SP`: az elemek távolsága az útvonal mentén (Measure-re vált). `AL`: Igen esetén minden elem követi az útvonalat, Nem esetén függőlegesen marad.
- Az `AS` mint a {{cmd:ARRAY}} parancsnál. Bekapcsolva a tömb megtartja az útvonal alakjának saját másolatát: az útvonalgörbe későbbi szerkesztése nem mozgatja az elemeket.
- Elutasítja azt az útvonalat, amely nem görbe, és az egyelemű esetet.

### ARRAYEDIT

Az Asszociatív opcióval készített tömb módosítása. `Select array` (vagy előbb jelölje ki). Kiírja, milyen a tömb most, majd kérdez az {{key:Enter}}-ig:

- Téglalap: `COL` az oszlopok és a távolságuk, `R` a sorok és a távolságuk, `A` az oszlopok szöge.
- Polár: `I` az elemek, `F` a kitöltési szög, `ROT` az elemek forgatása Igen vagy Nem.
- Útvonal: `M` Divide vagy Measure, `I` az elemek, `SP` a távolság, `AL` igazítás az útvonalhoz.
- `S` (Source) megnyitja a tömb által ismételt objektumokat önmagukban, mint a blokkszerkesztő. Ott rajzoljon és szerkesszen; a {{cmd:ARRAYCLOSE}} menti vagy elveti, és minden elem követi.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, majd kattintson a cserélendő elemekre, és nyomja meg az {{key:Enter}} billentyűt. Ezek az elemek a cserét mutatják; a cserélő objektumok kikerülnek a rajzból, és a tömbben élnek. `RES` (RESet) minden elemben újra megmutatja az eredeti objektumokat.
- Minden változtatás egy visszavonási lépés. Elutasítja a sima másolatokat, a sima blokkhivatkozást és a zárolt rétegen lévő tömböt.

Ugyanezek a számok a Tulajdonságok Tömb részében vannak, és a tömbnek fogópontjai vannak: a bázispontja mozgatja, a második elemnél lévő fogópont a távolságot állítja, az utolsó elem utáni fogópont a darabszámot (polár: a második elem az elemek számát, az utolsó elem a kitöltési szöget). A {{cmd:EXPLODE}} a tömböt visszaalakítja sima másolatokká.

### ARRAYCLOSE

Befejezi az {{cmd:ARRAYEDIT}} forrás-szerkesztését: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Jelzi, ha nincs nyitott tömbforrás. A {{cmd:BCLOSE}} ugyanezt teszi.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Beállítja, mivel kezdődik a {{cmd:ARRAY}}, az ARRAYRECT, az ARRAYPOLAR és a {{cmd:ARRAYPATH}}; az `AS` opciójuk ugyanezt a beállítást változtatja. A böngészőben marad meg.

### OFFSET

Álnév: `O`. Vonalak, ívek, körök és polivonalak.

Ahol egy polivonal kifelé mozog, és egyenes szakaszai egy sarkon szétválnak, a {{cmd:OFFSETGAPTYPE}} dönti el, hogyan zárja a rést.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, majd `Specify point on side to offset` (vagy a Through opcióval `Specify through point`), ismételve az Enter-ig.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: ahogyan az {{cmd:OFFSET}} zárja a rést egy polivonal külső sarkainál. A `0` addig hosszabbítja a szakaszokat, amíg találkoznak (kezdeti beállítás), az `1` egy ívvel köti össze őket a régi sarok körül, a `2` egyenes vágással. A belső sarkok és az ívszakaszok nem változnak. Ebben a munkamenetben marad meg.

### EXTRIM

Az {{cmd:EXTRIM}} egy él egyik oldalán mindent levág. Válassza ki a vágóélt (vonal, ív, kör, polivonal, ellipszis, spline vagy szerkesztővonal), majd egy pontot azon az oldalon, amelyet tisztítani kell: minden vonal, ív, kör, polivonal és szerkesztővonal, amely keresztezi az élt, elveszti azt a részét ezen az oldalon, ahol az éltől indul. Miközben az oldalt választja, az eltűnő darabok a mutatót követik. Zárt élnél az oldalak a belső és a külső. Az élt csak érintő objektumok, és az élt keresztező szöveg, sraffozás, spline és ellipszis érintetlenek maradnak. Egy visszavonási lépés.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: hogyan indul a {{cmd:TRIM}} és az {{cmd:EXTEND}}. Az `1` Gyors: minden objektum vágóél vagy határ. A `0` Standard: először kérik az éleket. Ugyanez LISP-ben: `(setvar "TRIMEXTENDMODE" 0)`.

### TRIM

Álnév: `TR`. Először kiírja: `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. Gyors módban minden látható objektum vágóél, és az, amelyet semmi nem keresztez, törlődik; Standard módban először a `Select cutting edges (Enter = every object)` kérdést teszi fel, és csak ezeknél vág.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, ismételve: kattintson a levágandó darabra (a mutató rajta nyugvásakor szürkén és szaggatottan látszik), húzzon egy útvonalat több darabon át (mind egy lépésben megy), vagy kattintson két üres helyre, hogy kerítést húzzon közéjük. A {{key:Shift}} ehelyett meghosszabbít. A `T` a vágóéleket választja (Standard mód), az `F` a kerítés pontjait kéri, a `C` két ablaksarkot (a részben benne lévő darabok mennek), az `O` `Enter a trim mode option [Quick/Standard]`-t kér, az `E` `Enter an implied edge extension mode [Extend/No extend]`-et (EDGEMODE), az `R` a kijelölt objektumokat törli, az `U` visszavonja az utolsó kattintást vagy húzást. Az Enter befejezi. Lásd: [Levágás és nyújtás](topic:trim-and-extend).

- Egy sraffozásra kattintás levágja a sraffozást: a vágóélek felosztják a sraffozott területet, és a megkattintott darab eltávolítódik (rajzolt körvonal nem marad ott, ahol volt). A sraffozás megtartja mintáját vagy színátmenetét; az a sraffozás, amely a határához volt kötve, utána már nincs kötve, mert már nem tölti ki azt. Ha az él nem vágja ketté a sraffozást, ha a kattintás a sraffozáson kívül esik, vagy ha nem maradna semmi (használja a {{cmd:ERASE}} parancsot), ezt jelzi. Egy húzott útvonal vagy kerítés nem vág sraffozást.

### EXTEND

Álnév: `EX`. Ugyanaz, mint a TRIM fordítva: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Egy kattintás a hozzá legközelebbi véget a következő határig nyújtja; egy húzott útvonal vagy kerítés minden általa keresztezett objektumot megnyújt; a {{key:Shift}} levág. A `B` a határéleket választja (Standard mód). A Mode és az Edge a TRIM-mel közös.

### LINKVIEWS

Álnév: `SYNCVIEWS`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:A panelek nézeteinek összekapcsolása}}, vagy a link ikon a rajzlapokon. `Link the panes' views [ON/OFF]` (az Enter a másik állapotot választja): bekapcsolva az aktív panelben végzett pásztázás vagy nagyítás minden olyan panelt mozgat, amely ugyanolyan fajta teret mutat. Lásd: [Képernyő felosztása](topic:split-screen).

### OPENIN3D

Nincs álnév; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Megnyitás a ModelCraftban}}, ahol a 3D modellező alkalmazás átvesz egy átadott rajzot. Ott, új lapon nyitja meg DWG-ként (semmi nem töltődik fel). Ha a böngésző letiltja a lapot, ezt jelzi.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: mit rajzol az üres helyen lenyomott és húzott mutató. Ugyanaz, mint a Beállítások › CadCraft › Húzás a kijelöléshez. Lásd: [Lasszós kijelölés](topic:lasso-selection).

### FILLET

Álnév: `F`. Vonalak, ívek, körök és polivonalak. Először kiírja: `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - Az `R` a `Specify fillet radius <last>`-t kéri. A `T` a `Enter Trim mode option [Trim/No trim]`-t: a No trim mellett az objektumok a helyükön maradnak, és csak az ív kerül be.
  - Az `M` a parancsot több sarokra működteti az Enter-ig; a `U` visszaveszi az utolsó sarkot a parancsból kilépés nélkül.
  - A `P` a `Select 2D polyline [Radius]`-t kéri, és minden olyan sarkot lekerekít, ahol két egyenes szakasz találkozik. A már meglévő lekerekítéseket az új sugár helyettesíti; a 0 sugár eltávolítja őket. Azokat a sarkokat, amelyek oldalai túl rövidek a sugárhoz, kihagyja és megszámolja.
- `Select second object or shift-select to apply corner [Radius]`. Tartsa lenyomva a {{key:Shift}} billentyűt kattintás közben éles sarokhoz, bármilyen sugár mellett.

Mindkét objektumon kattintson arra a részre, amelyet meg akar tartani. Két nem találkozó vonal meghosszabbodik. Két párhuzamos vonal a rés fölött félkört kap, az első vonal azon végénél, amely a kattintásához legközelebb van. Egy kört soha nem vágnak el. Egy polivonal két egymás melletti szakasza az ívet a polivonalon belül kapja; egy polivonal és egy másik objektum akkor működik, ha a vágás a polivonal első vagy utolsó szakaszára esik.

### CHAMFER

Álnév: `CHA`. Vonalak és polivonalak egyenes szakaszai. Először kiírja a jelenlegi távolságokat (vagy hosszt és szöget).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - A `D` a `Specify first chamfer distance <last>`-t és a `Specify second chamfer distance <the first>`-t kéri: az elsőt az első kiválasztott vonalból vágja, a másodikat a másikból.
  - Az `A` a `Specify chamfer length on the first line`-t és a `Specify chamfer angle from the first line`-t kéri.
  - Az `E` (mEthod) azt választja, melyik a kettő közül használja a következő letörés. A `T`, `M`, `U` és `P` ugyanúgy működik, mint a {{cmd:FILLET}}-nél.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. A {{key:Shift}}+kattintás éles sarkot készít.

A vonalnál hosszabb távolságot elutasít (`Distance is too large.`).

### BREAK és BREAKATPOINT

Álnév: `BR`. `Select object` (ahol kattint, az az első pont), `Specify second break point [First point]`; az `F` `Specify first break point`-ot és `Specify second break point`-ot kér. A köztük lévő rész eltűnik; körnél az óramutató ellentétes irányában az első ponttól. A BREAKATPOINT `Specify break point`-ot kér, és ott kettéosztja az objektumot (nem kör).

### LENGTHEN

Álnév: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: egy kiválasztás kiírja `Current length`-et (és egy ív bezárt szögét), majd újra kérdez. A `DE` `Enter delta length (negative shortens) [Angle]`-t kér, a `P` `Enter percentage length`-et, a `T` `Specify total length [Angle]`-t, a `DY` húzással dolgozik. Ezután `Select an object to change [Undo]`, ismételve: a kattintáshoz legközelebbi vég mozdul. Vonalak, ívek és nyitott polivonalak.

### JOIN

Álnév: `J`. `Select objects to join`. A végükön találkozó vonalak, ívek és nyitott polivonalak polivonalakká lesznek (zártak, ha a lánc bezárul); egy egyenesen lévő vonalak egy vonallá lesznek; egy körön lévő ívek egy ívvé vagy körré. Az előzmények megmondják, hány objektum egyesült, és hány nem.

### MATCHPROP

Álnevek: `MA`, `PAINTER`. `Select source object`, majd `Select destination objects [Settings]` és {{key:Enter}}. Átmásolja a réteget és a színt, és azonos típusú objektumok között a szövegmagasságot és szélességet, a méretezések méreteit vagy a sraffozás mintáját. Az `S` `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`-t kér, ismételve az {{key:Enter}}-ig; a választás a munkamenetre megmarad.

### EXPLODE

Álnév: `X`. A polivonalak vonalakká és ívekké lesznek, a blokkhivatkozások az objektumaikká, a méretezések vonalakká, nyilakká és szöveggé. A szerkeszthető tömb ({{cmd:ARRAYEDIT}}) a tömb objektumainak sima másolataivá lesz.

- `Select objects`

### GROUP

Álnév: `G`. A {{cmd:GROUP}} a kijelölt objektumoknak közös nevet ad. Jelölje ki az objektumokat, majd írjon be egy nevet (szóköz nélkül; a `?` listázza a csoportokat; az Enter névtelen csoportot készít), és a nevesített csoportnál egy opcionális leírást. Ettől kezdve egy kattintás valamelyikükre, vagy egy olyan ablak, amely egyet magában foglal, az összeset kijelöli, így együtt mozognak, másolódnak és törlődnek; minden objektum továbbra is saját objektum. Egy objektum több csoportban is lehet. Egy egész csoport másolata új névtelen csoport; egy tag önálló másolata csatlakozik a csoporthoz. A csoportok ahhoz a térhez tartoznak, amelyben készültek (a modell vagy egy lap). DWG vagy DXF formátumban mentve, majd a CadCraftban újra megnyitva megmaradnak; a DXF 2000 fájlok más programok számára csoportobjektumként is hordozzák őket, és egy megnyitott DXF vagy DWG-ben a más programban készített csoportok is beolvasódnak.

### UNGROUP

Az {{cmd:UNGROUP}} szétbontja a csoportokat: jelöljön ki a csoportok objektumait (minden csoport, amelyben vannak, szétbomlik), vagy írja be a `Name`-t és a csoport nevét. Az objektumok a rajzban maradnak. Egy visszavonási lépés visszahozza a csoportokat.

### GROUPEDIT

A {{cmd:GROUPEDIT}} egy csoportot módosít. Válasszon ki egy objektumát, vagy adja meg a `Name`-t és a nevét; a már kijelölt csoportot úgy veszi, ahogy van. Ezután: `Add` objektumok (egyenként választva, nem csoportonként), `Remove` objektumok, a csoport `REName`-je, a `Description` módosítása, vagy a `Selectable` beállítása (az, hogy egy kattintás egy objektumra kijelöli-e az egész csoportot). Az `eXit` vagy az Enter befejezi. Objektumok nélküli csoport megszűnik.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: `1` mellett (kezdeti beállítás) egy kattintás vagy ablak csoportos objektumon a teljes csoportot kijelöli; `0` mellett csak egy objektumot, így egy tag szerkeszthető. Ebben a munkamenetben marad meg.

## Vágólap

A CadCraft saját vágólapja: egy rajzon belül, rajzok között és a böngészőben lévő CadCraft-lapok között működik. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, vagy {{ui:Másolás}} az {{ui:Szerkesztés}} csoportban. A vágólapra másolja az objektumokat, a használt blokkokkal és rétegekkel együtt. Az objektumok kijelölve maradnak.

- `Select objects to copy` (kimarad, ha az objektumok már ki vannak jelölve)

### CUTCLIP

{{key:Mod+X}}, vagy {{ui:Kivágás}} a {{ui:Továbbiak}} menüben. A vágólapra másolja az objektumokat, majd törli őket (egy visszavonási lépés).

- `Select objects to cut` (kimarad, ha az objektumok már ki vannak jelölve)

### COPYBASE

A vágólapra másolja az objektumokat egy Ön által választott bázisponttal; a beillesztés ezt a pontot helyezi el.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, vagy {{ui:Beillesztés}} az {{ui:Szerkesztés}} csoportban. A másolat követi a kurzort, a kiterjedése bal alsó sarkából lógva (vagy a középpontjából, vagy a `COPYBASE` pontjából; lásd: [CadCraft beállításai](topic:settings)).

- `Specify insertion point`

A beillesztett objektumok ki vannak jelölve. Egy blokk, amely már megvan a rajzban ugyanazzal a névvel, ennek a rajznak a definícióját tartja meg.

Ha a MarkupCraftban másolt terület újabb, mint amit a CadCraft másolt (és 6 óránál fiatalabb), a {{key:Mod+V}} és a `PASTECLIP` ezt a területet illeszti be: lásd `PASTEAREA`.

### PASTEAREA

Álnév: `PAREA`. {{ui:A másolt terület beillesztése}} a {{ui:Továbbiak}} menüben. A MarkupCraftban a {{ui:Terület másolása}} paranccsal másolt területet valódi méretében, képként illeszti be. Lásd: [Képek a rajzban](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (csak akkor, ha a lapnak nem volt rajzléptéke): egy szám, az {{key:Enter}} a papírméretre, vagy a `P`, majd `First point on the pasted area`, `Second point on the pasted area` és a valódi távolságuk.

### PASTEORIG

{{key:Mod+Shift+V}}, vagy {{ui:Beillesztés helyben}} a {{ui:Továbbiak}} menüben. Azokra a koordinátákra illeszti be, ahonnan az objektumokat másolták. Nem kérdez semmit.

### DUPLICATE

Álnév: `DUP`. {{key:Mod+D}}, vagy {{ui:Kettőzés és mozgatás}} a {{ui:Továbbiak}} menüben. Az objektumok másolata a mutatóval mozog onnan, ahol vannak; az {{key:Esc}} nem hagy semmit. Nem használja a vágólapot.

- `Select objects to duplicate` (kimarad, ha az objektumok már ki vannak jelölve)
- `Specify where the copy goes (Esc leaves nothing)`: kattintson, írjon be egy pontot, `@dx,dy`-t (onnan, ahol a mutató volt), vagy egy távolságot a kurzor felé.

### SELECT

`Select objects` kérdést tesz fel (minden alábbi opcióval), és a választott objektumokat kijelölve hagyja a következő parancshoz, vagy a `P` későbbi használatához.

### QSELECT

Álnév: `QS`. A böngészőben a {{ui:Gyorskijelölés}} párbeszédpanel (lásd [Objektumok kijelölése](topic:select-objects#select-by-a-rule-quick-select)). Nélküle a parancssor kérdezi: `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` és `Enter value`. Az egyezések lesznek a kijelölés.

### SELECTSIMILAR

Álnév: `SIM`. `Select objects [SEttings]` (vagy a jelenlegi kijelölés): minden olyan azonos típusú objektumot kijelöl, amelynek ugyanaz a rétege és színe (és blokkneve, sraffozási mintája). Az `SE` `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`-t kér, ismételve az {{key:Enter}}-ig.

### FIND

Nincs álnév; vagy {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Keresés és csere}}. A böngészőben a {{ui:Keresés és csere}} párbeszédpanel (lásd [Szöveg és feliratok hozzáadása](topic:text#find-and-replace-words)). Nélküle: `Enter text to find`, majd `Enter replacement text (Enter: select what is found)`. Szöveget, attribútumértékeket és méretszöveget keres a megnyitott lapon vagy a kijelölésben.

### SELECTALL és DESELECT

A `SELECTALL` (álnév `AI_SELALL`, {{key:Mod+A}}) kijelöli a megnyitott lapon minden szerkeszthető objektumot. A `DESELECT` (álnevek `AI_DESELECT`, `SELECTNONE`; vagy {{key:Esc}}) törli a kijelölést.

## Méretezések

### DIMLINEAR

Álnevek: `DLI`, `DIMLIN`. Vízszintes vagy függőleges távolság.

- `Specify first extension line origin [Select object]` (Enter vagy `S`: `Select object to dimension`, majd kattintson egy vonal, ív, kör vagy polivonal-szakaszra)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. A `T` szöveget kér (`<>` a mért érték), a `H` és a `V` az irányt rögzíti, az `R` `Specify angle of dimension line <0>`-t kér.

### DIMALIGNED

Álnevek: `DAL`, `DIMALI`. Két pont közötti valódi távolság.

- A kezdőpontok mint a {{cmd:DIMLINEAR}}-nél, majd `Specify dimension line location [Text]`.

### DIMANGULAR

Álnevek: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Ív: a szöge. Kör: `Specify second angle endpoint`. Vonal: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: kattintson a mérendő szögön belülre.

### DIMRADIUS és DIMDIAMETER

Álnevek: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, majd `Specify dimension line location [Text]`.

### DIMCONTINUE

Álnevek: `DCO`, `DIMCONT`. Az utoljára készített lineáris vagy párhuzamos méretezéstől folytatja (vagy kérdi: `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, ismételve az Enter-ig.

### DIMBASELINE

Álnevek: `DBA`, `DIMBASE`. Mint a {{cmd:DIMCONTINUE}}, de minden méretezés az első kezdőpontból indul, és egyre távolabb kerül.

### DIMORDINATE

Álnevek: `DOR`, `DIMORD`. `Specify feature location`, majd `Specify leader endpoint [Xdatum/Ydatum/Text]`. Egy vezetővonalon felírja, mennyire van a jellemző az UCS origójától X vagy Y irányban: a főleg felfelé vagy lefelé futó vezetővonal X-et, az oldalra futó Y-t ad; az `Xdatum` és az `Ydatum` rögzíti, melyik. Az origót előbb a {{cmd:UCS}} paranccsal adja meg (anélkül a rajz 0,0 pontja). A fogópontok mozgatják a jellemzőt, az origót és a vezetővonal végét, az érték pedig követi. DWG-ben és DXF-ben valódi koordinátaméretezésként mentődik. Elutasítja a vezetővonal végét magán a jellemzőn.

### DIMARC

Álnév: `DAR`. `Select arc or polyline arc segment`, majd `Specify arc length dimension location [Text]`. Az ív mentén mér (nem a húr mentén), és az érték elé az ívjelet írja. Elutasítja a teljes kört, egy vonalat vagy egy egyenes polivonal-szakaszt. DWG-ben ívhossz-méretezésként marad meg; DXF-ben szögméretezésként, a hosszal szövegként, és a CadCraft újra ívhossz-méretezésként nyitja meg.

### DIMJOGGED

Álnevek: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Sugárméretezés olyan görbéhez, amelynek középpontja messze van vagy a lapon kívül: a méretvonal az Ön által megadott pontból indul, a középpont helyett, egy törésnél, de továbbra is a valódi sugarat írja. DWG-ben megtört sugárméretezésként marad meg; DXF-ben sugárméretezésként, és a CadCraft megtörve nyitja újra.

### DIMJOGLINE

Álnév: `DJL`. `Select dimension to add jog [Remove]`, majd `Specify jog location (or press Enter)`. Törésjelet tesz egy lineáris vagy párhuzamos méretvonalra, jelezve, hogy a távolság nincs léptékhelyesen rajzolva; az érték nem változik. A `Remove` leveszi. Más fajta méretezést elutasít.

### QDIM

Nincs álnév. `Select geometry to dimension`, majd `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Több objektumot méretez egy lépésben: vonalak és polivonal-szakaszok végeiből, körök és ívek középpontjaiból, pontokból és blokkhivatkozásokból. Az objektumok fölötti vagy alatti pozíció a keresztirányban mér, az oldalukon lévő felfelé. A `Continuous` láncolja a pontokat, a `Baseline` mindent az elsőtől mér, a `Staggered` a középtől kifelé váltakozó párokat ágyaz, az `Ordinate` minden pontnak megadja a távolságát az alaptól (a `datumPoint` újat választ), a `Radius` és a `Diameter` minden kiválasztott kört és ívet méretez. A mód megmarad. Minden, amit készít, egy visszavonási lépés. Jelzi, ha két pontnál kevesebb van, vagy nincs ív vagy kör a Radius és Diameter módhoz.

### DIMBREAK

Álnév: `DBREAK`. `Select dimensions to add or remove breaks`, majd `Break where other objects cross [Auto/Manual/Remove] <Auto>`. Az `Auto` rést hagy a méretvonalban és a segédvonalakban mindenhol, ahol más objektum keresztezi őket, és ezeket újra kiszámolja, ha azok az objektumok vagy a méretezés mozog. A `Manual` (egy méretezésnél) két pontot kér, és rést hagy köztük. A `Remove` minden rést eltávolít. A rés a méretezés szövegmagasságának 1,5-szerese.

### DIMSPACE

Nincs álnév. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. A párhuzamos lineáris és párhuzamos méretezések méretvonalait (vagy az azonos csúcsból induló szögméretezések méretvonalait) úgy mozgatja, hogy egyenlő távolságra legyenek egymástól, az alapméretezéstől számítva, mindegyik azon az oldalon, ahol van. A `0` az alapmérethez igazítja őket, az `Auto` a szöveg magasságának kétszerese az alapméretezésé. Az alapmérethez nem párhuzamos méretezéseket érintetlenül hagyja.

### DIMINSPECT

Nincs álnév. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Keretet rajzol az érték köré, előtte címkével, utána az ellenőrzési aránnyal. A `remove` leveszi a keretet. A tűréseknek szóló szöveg az értékkel marad.

### DIMOVERRIDE

Álnevek: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, újra és újra az Enter-ig, majd `Select dimensions`. Csak a kijelölt méretezéseken módosítja ezeket a beállításokat; a méretezési stílus nem változik. Azokat a változókat veszi át, amelyek szám vagy kapcsoló (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). A `Clear` a kijelölt méretezéseket visszateszi a stílusukra. Elutasítja azt a nevet, amely nem ilyen változó, és azt az értéket, amelyet nem vehet fel.

### DIMREASSOCIATE

Álnevek: `DRE`, `DIMREASSOC`. `Select dimensions`, majd mindegyiknél a segédvonal kezdőpontjai (`Specify first extension line origin on an object`: egy vég, a vonal közepe, egy polivonal-sarok, egy középpont felé fogódzik; az Enter a pontot szabadon hagyja), vagy sugár, átmérő, megtört sugár vagy ívhossz-méretezésnél `Select arc or circle`. A méretezés ekkor ezekhez az objektumokhoz kötődik: ha azok mozognak vagy méretük változik, követi őket ugyanabban a visszavonási lépésben, és újra mér. Egy kötött pont kézi mozgatása vagy az objektum törlése megszünteti a kötést. A kötés DWG-ben és DXF 2000-ben a CadCraft saját adataként mentődik; más programok egy közönséges méretezést látnak.

### DIMDISASSOCIATE

Álnevek: `DDA`, `DIMDISASSOC`. `Select dimensions`. Elszabadítja őket az objektumoktól, amelyekhez kötve vannak; semmi nem mozdul.

### CENTERMARK

Álnevek: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, újra és újra az Enter-ig. Keresztet rajzol a középpontba, és négy középvonalat a görbén túl egy kicsivel (CENTER vonaltípus), egyszerű vonalként az aktuális rétegen; a méretét az aktuális méretezési beállítások nyíl- és általános léptékéből számolja, az UCS-hez igazítva. Ha a kör mozog, nem követik.

### CENTERLINE

Álnév: `CL`. `Select first line`, `Select second line`. Két vonal közötti félúton lévő vonalat rajzol (a szögfelezőjük mentén, ha találkoznak), a vonalaknál egy kicsit hosszabbat, CENTER vonaltípussal. Egyszerű vonal: nem követi a két vonalat.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Nincs álnév. Mindegyik `Enter new value for … <current>`-t kér, és beállítja ezt a méretet az **új** méretezéseknél: általános léptékét, szövegmagasságát, nyílméretét, tizedesjegyeit (legfeljebb 8), a szöveg körüli hézagot, a méretvonalon túli túlnyúlást, az origótól való eltolást. Lásd: [Méretezési méretek beállítása](topic:dimension-settings).

### DIMLUNIT

Méretezési beállítás: csak az új méretezések hosszformátuma (1 tudományos, 2 tizedes, 3 mérnöki, 4 építészeti, 5 törtes).

### DIMSTYLE és -DIMSTYLE

Álnevek: `DST`, `DDIM`, `D`. A méretezési stílus kezelője: {{ui:Aktuálissá tétel}}, {{ui:Új…}}, {{ui:Módosítás…}}, {{ui:Átnevezés…}}, {{ui:Törlés}}, {{ui:Összehasonlítás…}}, {{ui:Alkalmazás a kijelöltre}}. A `-DIMSTYLE` a parancssorban: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Lásd: [Méretezési méretek beállítása](topic:dimension-settings#named-dimension-styles).

### DIMEDIT és DIMTEDIT

A `DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, majd a méretezések (vagy a már kijelöltek). A New szöveget kér (`<>` = a mérés); a Rotate egy szöget (0 visszateszi a szöveget); az Oblique a segédvonalak szögét az X tengelytől (Enter = nincs; csak lineáris és párhuzamos méretezésnél). A `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Lásd: [Méretezési méretek beállítása](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Álnév: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, vagy kijelölt méretezéseknél `Units in the text of the selected dimensions`. A mért hosszt abban a mértékegységben írja ki, utána az egység jelével (DIMLFAC és DIMPOST utótag); a `D` visszatér a rajz egységeire. Lásd: [Méretezések mm, cm, m vagy km egységben](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Álnév: `RC`. Kiírja `Arc length: … Type: …`, majd `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. A Rectangular `Specify opposite corner`-t, a Polygonal `Specify next point (Enter closes the cloud) [Undo]`-t kér; a Freehand a mutatót követi, amíg nem kattint vagy az {{key:Enter}}; az `O` `Select object`-et és `Reverse direction? [Yes/No] <N>`-t kér, és az objektumot felhővé alakítja. Az `A` `Specify the length of each arc`-t kér. Az `R`, `P` és `F` a következő felhő típusát választja. Az eredmény ívekből álló zárt polivonal.

### MLEADER

Álnév: `MLD`; vagy {{ui:Vezetővonal}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, majd a szöveg a helyben lévő dobozban (vagy ennek hiányában `Enter text (an empty line ends)`). A `Block` előbb egy blokk nevét kéri, és a többszörös vezetővonal a szöveg helyett azt a blokkot mutatja. További vezetővonalak: {{cmd:MLEADEREDIT}}. DWG-ben valódi többszörös vezetővonalként mentődik; a DXF megtartja a rajzolt vonalakat, nyilat és szöveget.

### MLEADEREDIT

Álnév: `MLE`. `Select a multileader`, majd `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: minden pont egy új nyílból ugyanarra a helyre vezető vezetővonalat ad, az Enter-ig. A `Remove leaders` ezután eltávolítja az Ön által kattintott vezetővonalat (egy többszörös vezetővonalnak legalább egy marad). A `Block content` blokk nevet kér, és a szöveg helyett azt a blokkot mutatja (az attribútumait kérdezi); a `Text content` visszaállítja a szöveget. Minden vezetővonalnak saját fogópontja van. DWG-ben minden vezetővonal és a blokk egy többszörös vezetővonalban marad.

### MLEADERALIGN

Álnév: `MLA`. `Select multileaders`, majd `Select multileader to align to [Distribute/Spacing/Use current spacing]` és `Specify direction`. A többi többszörös vezetővonal helyét (és szövegét vagy blokkját) a kiválasztott helye által meghatározott vonalra mozgatja, abban az irányban; a nyilak ott maradnak, ahová mutatnak. A `Spacing` egyenlő távolságra is állítja őket; a `Distribute` két pontot kér, és közéjük egyenletesen osztja el őket. Legalább két többszörös vezetővonal kell.

### MLEADERCOLLECT

Álnév: `MLC`. `Select multileaders`, majd `Specify collected multileader location [Vertical/Horizontal]` (az Enter megtartja az első helyét). Több többszörös vezetővonalból egyet készít: a blokktartalom egy új blokkba kerül, amely mindet egymás mellett vagy egymás alatt tartalmazza; a szöveges tartalom egy megjegyzéssé lesz, soronként egy-egy sorral. Az első többszörös vezetővonal megtartja vezetővonalait; a többit eltávolítja. A szöveg- és blokktartalom keverékét elutasítja.

### TABLE

Álnév: `TB`; vagy {{ui:Feliratozás}} › {{ui:Továbbiak}} › {{ui:Táblázat}}. Táblázatot készít: egy objektum, amelyet úgy mozgat, másol, forgat, léptékez és nyomtat, mint bármely más objektumot, cellái adatként megmaradnak.

- `Number of data rows or [Paste/File/Style] <3>`, majd `Number of columns <3>`, `Text height` és `Top left corner of the table`. A táblázat címsort kap (egy egyesített cella) és fejlécsort az adatsorok fölött.
- `P`: táblázat a vágólapon lévő táblázatcellákból (szöveg, cellák között tabulátorral). Az {{key:Ctrl+V}} ilyen cellák esetén ugyanezt teszi, hacsak a CadCraft saját másolata nem újabb (vagy a CadCraft nem tudja megállapítani: ekkor a saját másolatát illeszti be, és ezt mondja). Az `F`: táblázat egy `.csv` vagy tabulátorral elválasztott fájlból. Az első sor lesz a fejléc; az oszlopszélességek a szöveghez illeszkednek.
- `S`: a táblázat stílusának kiválasztása (lásd {{cmd:TABLESTYLE}}).
- Elutasítja az egész számnak nem megfelelő sor- vagy oszlopszámot, és azt, hogy több cellát adjon meg, mint amennyi egy táblázatba fér (2000 sor, 200 oszlop, 40 000 cella).
- Az {{cmd:EXPLODE}} a táblázatot vonalakká és szöveggé alakítja. DWG-ként mentve valódi táblázatobjektum, amelyet más programok szerkeszthetnek; DXF-ként mentve olyan blokk, amely rajzolja, és a CadCraft újra táblázatként nyitja meg.

### TABLEDIT

Álnevek: `TABLEEDIT`, `TABEDIT`; vagy duplán kattintson egy cellára. Táblázatot szerkeszt.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Kattintson egy cellára, vagy ha egy táblázat ki van jelölve, írja be a nevét (`B3`: B oszlop, 3. sor; a címsor az 1. sor). A böngészőben a cella fölött doboz nyílik: az {{key:Enter}} megtartja a szöveget, a {{key:Tab}} a következő cellába ugrik, az {{key:Alt+Enter}} új sort kezd, az {{key:Esc}} a cellát az eredeti állapotában hagyja.
- A `=` jellel kezdődő szöveg képlet: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, a `+ - * / ^` műveletekkel, zárójelekkel és olyan függvényekkel, mint a `sqrt` és a `round`. A cella az értéket mutatja; az a képlet, amely a saját celláját nevezi meg, a táblázaton kívüli cellát vagy számot nem tartalmazó cellát, `####`-t mutat, és a parancssor megmondja, miért.
- `R` / `C`: sorok vagy oszlopok `Insert` vagy `Delete` egy kiválasztott cellánál (hány, és fent vagy lent, balra vagy jobbra). A képletek követik a cellákat, amelyeket megneveznek.
- `S`: az oszlop szélessége és a sor magassága. A sor sosem alacsonyabb, mint a szövege igényli. A kijelölt táblázatnak minden oszlop és sor szélén fogópontja van.
- `M`: egyesítés egy kiválasztott cellától egy másikig; `U`: szétválasztás. `A`: igazítás (`TL` bal felső … `MC` középső közép … `BR` jobb alsó). `H`: ennek a cellának a saját szövegmagassága (0 = a stílusé). `K`: a sor címsorrá, fejléccé vagy adatsorrá tétele. `CL`: a cella kiürítése.
- Elutasítja a zárolt rétegen lévő táblázatot, az összes sor vagy oszlop törlését, és azt az egyesítést, amely egy másik egyesített cellát kettévágna.

### TABLESTYLE

Álnév: `TS`. Felsorolja a táblázatstílusokat azzal, hány táblázat használja mindegyiket, majd `Table style: [New/Set/Edit/Delete/Apply]`.

- Egy stílus tartalmazza a cím-, fejléc- és adatsorok szövegmagasságát és igazítását, a cellamargót, és azt, mely szegélyek rajzolódnak (külső, sorok között, oszlopok között).
- `N` egy stílust készít a jelenlegiből, és aktuálissá teszi; `S` beállítja az aktuális stílust (az új táblázatok azt kapják); `E` szerkeszt egyet: a használó táblázatok újrarajzolódnak; `A` a kijelölt táblázatoknak az aktuális stílust adja; `D` töröl egyet (nem a Standardot, nem az aktuálisat; a használt táblázatok megtartják megjelenésüket).
- A stílusok a rajzzal együtt mentődnek (DWG és DXF).

### TABLEEXPORT

A táblázat által mutatott tartalmat CSV-fájlként menti (a képlet az értékével). `Select a table`, vagy előbb jelöljön ki egyet. A `=`, `+`, `-` vagy `@` jellel kezdődő szövegcellák elé `'` kerül, hogy a táblázatkezelő ne futtassa őket.

### TABLEPASTE

Álnév: `PASTETABLE`. A vágólapon lévő táblázatcellákból táblázatot készít, majd kérdezi a bal felső sarkát. Ugyanaz, mint a {{cmd:TABLE}} › `Paste`.

### DATALINK

Álnév: `DL`. `Data link: [New/List/Remove] <New>`. Az `N` egy CSV-fájlt kér, táblázatot helyez el belőle, és megjegyzi a fájl nevét; az `L` listázza a kapcsolatokat a fájlukkal, méretükkel, az olvasás idejével és azzal, hány táblázat használja őket; az `R` eltávolít egy kapcsolatot (táblázatai sima táblázatok maradnak).

### DATALINKUPDATE

Álnév: `DLU`. Újraolvassa egy adatkapcsolat fájlját, és újratölti a hozzá kötött táblázatokat (sorokat és oszlopokat ad hozzá vagy vesz el az illeszkedéshez). A böngésző nem tud magától fájlt megnyitni, ezért kéri, hogy válassza ki újra a fájlt. Több kapcsolatnál megkérdezi, melyiket.

### FIELD

Mezőt tesz a rajzba: olyan szöveget, amely magától kiszámítja magát. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: most, vagy a mentett, létrehozott vagy plottolt dátum, és egy formátum (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: a fájl neve, kiterjesztéssel vagy anélkül. `S`: a lap száma, címe, vagy hány lap van. `P`: egy rajzjellemző név szerint (lásd {{cmd:DWGPROPS}}). `O`: egy objektum kiválasztása, majd mit olvasson ki (terület, hossz, kerület, sugár, átmérő, réteg, név, x, y, szöveg, forgatás, szín) és a tizedesjegyek. `E`: egy képlet. `C`: egy szöveg, a kódokkal úgy, ahogy be van írva, például `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Ezután `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: egy kiválasztott szöveghez a mező a tartalma után kerül; egy táblázatcellához hasonlóan; egy attribútumokat tartalmazó blokkhivatkozás megkérdezi, melyik attribútum; az {{key:Enter}} magasságot és pontot kér egy új szöveghez.
- A képernyőn a mező világosszürke hátteret kap; a plottolás és a PDF soha nem mutatja. Ha a mező szövegét kézzel írja felül, a mező megszűnik. A ki nem számítható mező `####`-t mutat.
- Egy objektum mezője a CadCraft által az objektumokon tárolt kulccsal találja meg az objektumát (Beállítások › CadCraft › Összevonásbarát fájlok); kikapcsolt kulcsoknál elutasít.

### UPDATEFIELD

Álnév: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. Az `S` beállítja, mikor frissülnek a mezők maguktól: írja be az `O` (nyitás), `S` (mentés), `P` (plottolás), `R` (újraépítés) betűit, mind a négy az induláskor, vagy a `NONE`.

### DWGPROPS

Álnév: `DRAWINGPROPS`. Felsorolja a rajz tulajdonságait, majd `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Az első hatot a {{ui:Rajzadatok}} panel mutatja; a `U` saját nevet és értéket ad hozzá, az `R` eltávolít egyet. A mezők olvassák őket (`%<prop:title>%`, `%<prop:Client>%`), és azonnal követik. Elutasítja azt az egyéni nevet, amely beépített, vagy amely `%`, `<`, `>`, idézőjelet vagy visszaperjelet tartalmaz.

## Paraméteres

Lásd: [Rajz kényszerezése](topic:constraints) és [Paraméterek és egyenletek használata](topic:parameters). A kényszerek a {{ui:Modell}} lapon működnek.

### GEOMCONSTRAINT és a GC parancsok

Álnév `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, majd az adott parancs kérdései.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (a második mozog).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT és a DC parancsok

Álnév `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (szám, kifejezés vagy `name=expression`).
- {{cmd:DCALIGNED}}: mint fent, a `[Object/Point & line/2Lines]` opcióval.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. Az `S` a távolság- és szögtűréseket kéri.
- {{cmd:DELCONSTRAINT}} (álnév `DELCON`): `Select objects`; a kényszereik eltűnnek.
- {{cmd:CONSTRAINTBAR}} (álnév `CBAR`): `Select objects [Showall/Hideall]`, majd `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS és -PARAMETERS

A {{cmd:PARAMETERS}} (álnevek `PAR`, `PARAM`) megnyitja a {{ui:Paraméterek}} panelt. A `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Álnév `SWMACRO`. Letölt egy makrót (.swb), amely a modellt egy kényszerezett vázlatként építi újra a SolidWorksben. Lásd: [Vázlatok át- és visszavitele más alkatrész-modellezőkbe](topic:solidworks-sketches).

## Blokkok

### ANNOSCALE

Álnév: `CANNOSCALE`. Megmondja a rajz annotációs léptékét és azt, hány annotatív objektumot tartalmaz, majd kérdi: `New annotation scale`: írjon be `1:50`-et, `1:100`-at, `2:1`-et, egy puszta számot (`50` az 1:50) vagy a rajz egyik saját léptékének nevét. Minden annotatív szöveg és méretezés átméreteződik, hogy azonos méretben nyomtatódjon az új léptéken, egy visszavonási lépésben; a nem annotatív objektumok érintetlenek, és az is, amely egy léptéklistát tart az új léptékkel nélkül ({{cmd:OBJECTSCALE}}). Lásd: [Mértékegységek, papírok és léptékek](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Álnév: `OBJSCALE`. `Select annotative objects`, majd `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Egy annotatív szöveg vagy méretezés annotációs léptékek listáját tartja. Az `Add` és a `Delete` léptéket kér (`1:50`, `2:1`, puszta szám vagy a rajz egyik saját léptékének neve); a `Current scale` a rajz annotációs léptékét adja hozzá; a `List` kiírja minden objektum léptékeit. Az a nézetablak, amelynek léptéke benne van egy objektum listájában, azt a méretben mutatja, amely a papírmagasságát az adott léptéken nyomtatja, a képernyőn és a plottokban. Az utolsó léptéket nem lehet törölni. Az nem annotatív objektumok kimaradnak: először a Tulajdonságokban kapcsolja be az Annotatívot. A listák DWG-ben és DXF-ben a CadCraft saját adataiként mentődnek. Lásd: [Mértékegységek, papírok és léptékek](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Álnév: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Bekapcsolva (a rajz indulásakor): egy annotatív objektum egy olyan nézetablakban vagy a modellben is megjelenik, amelynek léptéke nincs a listáján, a saját méretében. Kikapcsolva: ott nem jelenik meg, és a modellben nem lehet kijelölni. A kapcsoló egy visszavonási lépés; a fájl nem tárolja.

### SCALELISTEDIT

Álnév: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` az Enter-ig. Add: `Scale name`, `Paper units`, `Drawing units`. Az Edit és a Delete a lépték nevét kéri. A rajz saját léptékei csatlakoznak a nézetablak- és nyomtatási léptéklistákhoz, és a rajzzal együtt mentődnek. Lásd: [Mértékegységek, papírok és léptékek](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT és PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: pontok, amelyeken a görbe átmegy; `Close`, `Undo`, majd `Start tangent` és `End tangent` (egy pont, vagy {{key:Enter}}). A Method › Control vertices fokot kér (1–5), és egy vezérlő-sokszögből rajzol. Az Object a polivonalakat a csúcsaikon átmenő spline-ná alakítja. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` több objektumhoz; a vonalak, ívek és spline-ok előbb polivonalként kínálkoznak. Lásd: [Spline-ok és polivonalak](topic:splines).

### BLOCK

Álnevek: `B`, `BMAKE`.

- `Enter block name`. Ha már létezik: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Ezek egyetlen, az új blokkra mutató hivatkozásra cserélődnek.

### WBLOCK

Álnevek: `W`, `-WBLOCK`. Egy blokkot, néhány objektumot vagy az egész rajzot új DWG- vagy DXF-fájlba ír. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ez lesz az új rajz origója), `Select objects`, majd `File format [DWG/DXF/R12 DXF]` és `File name for the new drawing`, végül `What to do with the objects [Retain/Convert to block/Delete]`. A Convert egy, az fájl nevét viselő blokkra mutató hivatkozással helyettesíti őket; a Delete törli.
- **Block**: `Block to write out`. A blokk saját objektumai, bázispontjukkal az origó, beágyazott blokkokkal együtt.
- **Entire drawing**: minden objektum a modellben. A lapok nem íródnak; a lapokat is megtartó másolathoz használja a {{cmd:SAVEAS}} parancsot.

Az új fájl csak azokat a rétegeket, vonaltípusokat, szöveg- és méretezési stílusokat és blokkokat tartalmazza, amelyeket az objektumai használnak, valamint a rajz egységeit. Egy DWG verziója az, amelyet a {{cmd:SAVEAS}} utoljára használt. A böngészőben a fájl letöltődik; a Studióban a mentési párbeszédpanel nyílik meg.

### ATTDEF

Álnevek: `ATT`, `DDATTDEF`, `-ATTDEF`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Attribútum meghatározása}}. Kiírja a módokat, majd `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value`, ha állandó), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. A {{cmd:BLOCK}} az attribútum-definíciókat beveszi a blokkba.

### EATTEDIT és ATTEDIT

`EATTEDIT` (`DDATTE`, vagy kattintson duplán egy attribútumos hivatkozásra; {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Attribútumok szerkesztése}}): `Select a block reference with attributes`, majd az {{ui:Attribútumok szerkesztése}} párbeszédpanel. Az `ATTEDIT` (`ATE`, `-ATTEDIT`): ugyanaz a hivatkozás, majd minden attribútumnál `<prompt> (<TAG>) <value>`; az {{key:Enter}} megtart egy értéket. Lásd: [Attribútumok](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Az értékek megmaradnak; az új attribútumok az alapértelmezést kapják, az eltávolítottak eltűnnek, az elhelyezések visszaállnak.

### BATTMAN

{{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Attribútumkezelő}}. A párbeszédpanel: blokk, attribútumok (címke, kérdés, alapérték, módok, sorrend), {{ui:A hivatkozások frissítése (az értékek megmaradnak)}}, {{ui:Alkalmaz}}.

### REFEDIT és REFCLOSE

{{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Szerkesztés helyben}}. `REFEDIT`: `Select the block reference to edit in place` (vagy a kijelölés). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; a sáv {{ui:A blokk mentése}} és {{ui:Elvetés}} gombjai ugyanezt teszik. Az egész szerkesztés egy visszavonási lépés. Lásd: [Attribútumok](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: hogy a tollvonás nyomása beállítja-e a {{cmd:SKETCHFIX}} és a {{cmd:SKETCHLIVE}} által készített objektumok vonalvastagságát (kezdetben be). Lásd: [Rajzolás tollal](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Álnév: `OFFSTD`. Megmondja, melyik irodai szabvány van érvényben ehhez a rajzhoz, és honnan származik: a rajz saját rekordja, a csapata közös szabványa, vagy az Alapértelmezett házirendek (szövegmagasságok: `all.anno.*`); ha nincs ilyen, a program saját méretei. `[Import/Layers/Title block/Clear/eXit]`: az `Import` egy `cc-office-standard` .json-t olvas (amelyet a SuperCad és a BimCraft ír) ebbe a rajzba, és a rajzzal együtt mentődik DWG-ben és DXF-ben; a `Layers` hozzáadja az irodai rétegeket, amelyek a rajzból hiányoznak, egy visszavonási lépésben, és soha nem távolít el egyet; a `Title block` felsorolja az iroda mezőit a rajz saját értékeivel; a `Clear` eltávolítja a rajz saját rekordját. Az annotatív szövegek és méretezések magassága az érvényes szabványt követi. Lásd: [Mértékegységek, papírok és léptékek](topic:units-papers-scales).

### BPARAMS

Álnevek: `BPM`, `BLOCKPARAMS`. Megnyitja a Paraméterkezelőt a blokkszerkesztőben lévő blokkhoz, a kijelölt hivatkozás blokkjához, vagy a megnevezett blokkhoz (`Block name`): képletekkel ellátott paraméterek, több láthatósági paraméter az állapotaikkal, és a kijelölt hivatkozás saját értékei és állapotai. Lásd: [Saját paraméterek és láthatósági állapotok](topic:dynamic-blocks#your-own-parameters-and-visibility-states). A `-BPARAMS` ugyanezt teszi a parancssorban: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT és BCLOSE

`BE`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokk szerkesztése}}. `Enter block name to edit <the selected reference's block>` megnyitja a blokkszerkesztőt. A `BCLOSE` ezt kérdezi: `Close the block editor on "…" [Save/Discard] <Save>`; a sáv {{ui:A blokk mentése}} és {{ui:A módosítások elvetése}} gombjai ugyanezt teszik. A szerkesztőben végzett minden művelet egy visszavonási lépés.

### VIEWBASE

Álnév: `FLATSHOT`. A 3D lapon lévő testek lapos 2D-nézete: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, egy lépték (`1:20`, `2:1`; az {{key:Enter}} a lapra illőt választja), majd a nézet középpontja. Egy blokkhivatkozás; a látható élek a VIEW-VISIBLE rétegen, a takart élek szaggatva a VIEW-HIDDEN rétegen. Lásd: [Lapos nézetek egy lapon](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Álnevek: `-PUBLISH`; vagy {{ui:Minden lap egy PDF-ben}} a {{ui:PDF-be plottolás}} párbeszédpanelen. `Sheets to plot [All/Some]`: az {{key:Enter}} minden lapot plottol, a `S` neveket kér vesszővel elválasztva. Egy PDF, laponként egy oldal és egy könyvjelző. Lásd: [Minden lap egy PDF-ben](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Álnevek: `SSM`, `SHEETSETMANAGER`. Elviszi a bal panel {{ui:Lapkészlet}} részéhez: több rajz lapjai, számozva és címezve, rajzfejeik a készletből kitöltve, egy PDF-be közzétéve. Lásd: [Lapkészletek](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): válasszon egy DWG- vagy DXF-fájlt, majd a beillesztési pontját. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; több kapcsolatnál válasszon egyet a hivatkozásai közül, vagy írja be az `N`-t és a nevét. Lásd: [Összekapcsolt rajzok](topic:files#linked-drawings-external-references).

### COUNT

Álnév: `BCOUNT`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok számlálása}}. `Select a block reference to count, or [All/Export] (Enter: All)`: egy kiválasztás kijelöli és megszámolja ennek a blokknak minden hivatkozását ebben a térben; az {{key:Enter}} vagy `A` mindet listázza; `E`, majd `C` (darabszám) vagy `A` (attribútumok) CSV-t tölt le. Lásd: [Blokkok számlálása és kimutatás exportálása](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Álnevek: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (a kis- és nagybetű mindegy). Az `F` DWG- vagy DXF-fájlt kér, majd az egész rajzot vagy annak egyik blokkját; egy már használt név az {{ui:A meglévők megtartása}} vagy az {{ui:Átnevezés}} kérdést veti fel. Az `L` megnyitja a könyvtár panelt.
- `Specify insertion point [Scale/Rotate]`. Az `S` `Specify scale factor`-t, az `R` `Specify rotation angle`-t kér; mindkettő megmarad.
- Ha a blokk már olyan objektumok mellett áll, amelyek máshol is ismétlődnek a nélküle, egy sor megmondja, hány helyet javasol, és a kérdés `suGgested` opcióval bővül: a `G` megmutatja őket; kattintson közel egyhez, hogy oda tegye a blokkot, az `A` mindet, az {{key:Enter}} visszavisz. Átveszik a szomszédaik forgatását és az attribútumok alapértékeit. A nyitott térben 20 000 objektumnál többel rendelkező rajzokban nem keresnek.
- Ezután `Enter <prompt> (<TAG>) <default>` minden attribútumra, amelyet a blokk kér. Lásd: [Blokkattribútumok](topic:attributes).

### LIBRARY

Álnév: `LIB`. Megnyitja a könyvtár panelt: elemek elhelyezése, frissítések keresése, könyvtári közreműködők. Kérdés nincs. Lásd: [Beszúrás fájlból vagy a könyvtárból](topic:insert-from-file-and-library).

### STEELMEMBER

Álnév: `SMEMBER`; vagy {{ui:3D elem}} a könyvtár {{ui:Standard}} lapján. `Section size <W12x26>` (ahogy a lap listázza), majd `Start point [Column]` és `End point`: egy tömör elem a 3D lapon a két pont között, a talajon állva. A `C` a pillér talppontját és magasságát kéri. Egy visszavonási lépés. Lásd: [Acélszelvények és szabványos alkatrészek elhelyezése](topic:steel-and-standard-parts).

### PARTSLIST

Álnév: `PLIST`. `Top left corner of the parts list`, majd `Text height <2.5>`: táblázatot rajzol minden szabványos alkatrészről és acélszelvényről, amelyet a könyvtárból helyeztek el (tételszámok, darabszám, alkatrész, szabvány, méret, hossz, anyag, tömeg). Egy visszavonási lépés. Lásd: [Acélszelvények és szabványos alkatrészek elhelyezése](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Álnév: `PU`. Eltávolítja azokat a blokkdefiníciókat, amelyeket semmi nem használ. Kérdés nincs.

### DELBLOCKS

Vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok törlése}}. `Select block to delete [Name/eXit]`: kattintson egy blokkhivatkozásra, vagy az `N` a blokkok listáját szűrővel (több is választható), az `X` vagy az {{key:Enter}} befejezi. Minden hivatkozás eltűnik — a modellben, minden lapon és más blokkokon belül —, majd a definíció; a parancssor megmondja, mi törlődött és mi nem. A névtelen blokkok és az összekapcsolt rajzok nem kínálkoznak fel. A kérdés a következő blokkra tér vissza; az egész parancs egy visszavonási lépés.

### PASTEBLOCK

A {{cmd:PASTEBLOCK}} azt, amit másolt ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), egy blokkként illeszti be: válasszon beillesztési pontot, és oda egy hivatkozás kerül egy új blokkra, kijelölve. A blokk saját nevet kap (`A$C` és egy szám); a {{cmd:RENAME}} adja meg a sajátját. Egy visszavonási lépés eltávolítja a hivatkozást és a blokkot.

### BLOCKREPLACE

A {{cmd:BLOCKREPLACE}} kéri a cserélendő blokkot és a helyére kerülő blokkot (a `?` listázza a blokkokat), majd minden hivatkozást megváltoztat a modellben, minden lapon és más blokkokon belül. Minden hivatkozás megtartja helyét, léptékét, forgatását, rétegét és mindkét blokk attribútumainak értékét; az csak az új blokkban lévő attribútumok az alapértékükről indulnak, és megmondja, mely értékek vesztek el. Ha a régi blokkot már semmi nem használja, felajánlja az eltávolítását. Elutasítja a külső rajzokat és azt a cserét, amely egy blokkot önmagába tenne. Egy visszavonási lépés.

### MINSERT

A {{cmd:MINSERT}} blokkot helyez el sorokban és oszlopokban: blokknév, beillesztési pont, lépték, forgatás, sorok és oszlopok száma, és a közöttük lévő távolságok. A teljes készlet a forgatással együtt fordul. Mindegyik saját hivatkozás (legfeljebb 10 000), így bármelyik utólag mozgatható vagy törölhető.

### BLOCKSPALETTE

Álnév: `BLOCKSPAL`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok panel}}. Megmutatja a {{ui:Blokkok}} panelt, a kurzorral a szűrőjében. Minden blokknak van egy kis képe; a legutóbb elhelyezettek jönnek először. A szűrő melletti két gomb a listanézet és a képrács között vált. Kattintson egy képre (vagy az {{ui:Beszúrás}} gombra), hogy a blokkot a {{cmd:INSERT}} paranccsal helyezze el, vagy húzza a rajzra, hogy oda kerüljön, ahová ejti.

A panel alatt a {{ui:Könyvtárak}}: a {{ui:Rajz hozzáadása}} egy saját DWG- vagy DXF-fájlt vesz fel, és blokkjait képpel listázza, az egész rajzot pedig egy blokként. Egy elhelyezésnél definíciója (és a beágyazott blokkjai, azok rétegeivel együtt) bemásolódik ebbe a rajzba, ahogy a {{cmd:INSERT}} `File` opciója teszi; az azonos definíciójú, már itt lévő blokk kérdés nélkül használódik, az azonos nevű, de eltérő definíciójú a {{ui:A meglévők megtartása}} vagy az {{ui:Átnevezés}} kérdést veti fel. Böngészőben a fájl az oldal bezárásáig marad meg. A CadCraft Studióban a {{ui:Mappa hozzáadása}} listázza egy mappa rajzait, mindegyiket megnyitva, amikor rákattint; a fájlok és mappák megjegyzésre kerülnek. A kis x eltávolítja a könyvtárat a listából; a fájlhoz nem nyúl. A megosztott {{ui:Könyvtár}} más dolog: lásd [Beszúrás fájlból vagy a könyvtárból](topic:insert-from-file-and-library).

### BCONVERT

Vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Ismétlések átalakítása blokkokká}}. Megtalálja az ismétlődő geometriát, és minden másolatot egy blokk egy hivatkozásává alakít.

- `Select the objects that repeat, or [Block]`: egy másolat objektumai. A `B` egy létező blokkot nevez meg, hogy a blokk szabad másolatait keresse.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: az `M`, `S` és `P` váltja, mi számít másolatnak; az {{key:Enter}} keres. A beállítások megmaradnak.
- `Name for the new block <Block1>`, majd `Specify the block's base point` ({{key:Enter}}: a kijelölés bal alsó sarka).
- Megmondja, hány másik objektumhalmaz azonos geometriájú, kiemeli mindazt, amit felcserélne, és `Yes/No`-t kérdez.

Egy másolat ugyanazok az objektumok, bármely szögben eltolva és elforgatva (és egyetlen tényezővel tükrözve vagy léptékezve, ha be van kapcsolva): minden objektumnak meg kell lennie a párjának a kijelölés méretének egymilliomodán belül. Minden hivatkozás saját forgatást és léptéket kap (a tükrözött negatív Y léptéket), és a réteget, amelyen az objektumai osztoznak. A zárolt rétegek objektumai érintetlenek, és számlálva vannak. A nyitott teret keresi (a modellt vagy a megnyitott lapot). Egy nagyon nagy keresés munkakorlátnál megáll, és ezt jelzi. Egy visszavonási lépés.

### BSEARCH

Vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok keresése}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: egy blokknév része, vagy minta `*` és `?` jelekkel. Minden blokkot listáz a hivatkozásaival együtt, itt és az egész rajzban.
- `A`: egy attribútumérték, vagy `TAG=value`. Listázza azokat a blokkokat, amelyek hivatkozásai ezt tartalmazzák, a megtalált értékekkel. A konstans attribútumok is számítanak.
- `G`: jelöljön ki objektumokat, vagy egy blokkhivatkozást, és a legalább 85%-ban hasonló alakú blokkok listázódnak, a legjobb először. A méret, forgatás és tükrözés nem számít. A mérték a kontúrok mentén elszórt pontok közötti távolságokat hasonlítja, így hasonmásokat talál; pontos másolatokhoz használja a {{cmd:BCONVERT}} parancsot.

A nyitott térben talált hivatkozások ki vannak jelölve, készen a következő parancsra.

### BREPLACE

Vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok cseréje}}. `Replace [Selected/All]`: az `S` a kijelölt blokkhivatkozásokat a megnevezett blokkal cseréli; az `A` egy blokkot és a cseréjét kéri, és minden hivatkozást megváltoztat, ahogy a {{cmd:BLOCKREPLACE}} teszi (ugyanaz a kód). Egy hivatkozás megtartja helyét, léptékét, forgatását, rétegét és mindkét blokk attribútumainak értékét; az új blokk számára helyet nem találó értékek elvesznek, és meg vannak nevezve. A `?` listázza a blokkokat. Egy visszavonási lépés.

### DATAEXTRACTION

Álnevek: `EATTEXT`, `DX`; vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Adatkinyerés}}. A blokkokat, attribútumaikat és objektum-tulajdonságaikat táblázatként vagy CSV-fájlként listázza.

- A kijelölésen dolgozik, vagy kérdi: `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]`, ha a kijelölés mindkettőt tartalmazza. A névtelen blokkok, táblázatok és anyagjegyzékek soha nem listázódnak.
- Kiírja a választható oszlopokat (név, típus, réteg, X, Y, forgatás, lépték, hossz, terület, szín, vonaltípus, tér, és egy minden attribútum-címkére), majd `Columns, by name or number with commas between`. Az {{key:Enter}} a csillaggal jelöltekre vesz: a nevet és minden attribútumot a blokkoknál; a típust, a réteget és a hosszt az objektumoknál.
- `Put identical rows together with a count? [Yes/No] <Yes>`, majd `Put the list in a: [Table/Csv] <Table>`. A táblázat közönséges táblázat ({{cmd:TABLEDIT}} szerkeszti), és nem élő: a rajz változása után futtassa újra a parancsot.
- Elutasítja a listában nem szereplő oszlopot. Egy táblázat 1999 adatsort tart; egy CSV-fájl mindet befogadja.

### COUNTTABLE

A kijelölés (vagy a nyitott tér) blokkhivatkozásait megszámolja, és a számokat egy táblázatba (`Block`, `Count`) vagy CSV-fájlba teszi. Az egyedül a rajzot követő számláláshoz lásd a {{cmd:BOMTABLE}}-t.

## Lapok és nyomtatás

### LAYOUT

Álnevek: `LO`, `NEWLAYOUT`; vagy a {{ui:+}} gomb a rajz alatt. Új lap szegéllyel, rajzfejjel és egy nézetablakkal, ISO A3-on (vagy inches/láb rajzoknál Tabloidon). Kérdés nincs.

### MVIEW

Álnév: `MV`. Csak lapon ({{cmd:VPORTS}} lapon ugyanezt teszi).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. A nézetablak a teljes modellt egy szabványos léptéken mutatja.
- `P` (Polygonal): kattintson a körvonal sarkaira (`Undo`, `Close`), az {{key:Enter}} ha kész. Három sarknál kevesebbet elutasít.
- `O` (Object): `Select a closed object for the viewport's outline`: egy zárt polivonal, kör vagy ellipszis a lapon. A nézetablak felveszi az alakját (az ívek rövid egyenes darabokként); az objektum megmarad. Egy nem zárt objektumot elutasít.

### VPCLIP

Egy már a lapon lévő nézetablakot vág le. `Select viewport to clip` (vagy előbb jelölje ki), majd `Select the object to clip to [Polygonal/Delete]`:

- Kattintson egy zárt polivonalra, körre vagy ellipszisre, vagy az {{key:Enter}} (vagy `P`) a sokszög sarkainak megadásához.
- A `D` (Delete, levágott nézetablaknál kínálkozik) ismét téglalappá teszi: az eredeti körvonal köré írt dobozzá.
- A nézetablak által mutatott tartalom a papíron nem mozdul, a léptéke megmarad. A modell csak a körvonalon belül rajzolódik és nyomtatódik ki, a szegély pedig követi. Egy visszavonási lépés.
- Egy levágott nézetablaknak minden körvonal-sarkon van fogópontja, a középpontján és a doboz négy sarkán felül (a doboz sarkának húzása vele nyújtja a körvonalat). A Tulajdonságok ezt mutatja: Körvonal: Téglalap, vagy Levágva a sarkok számával.
- A DWG és DXF 2000 fájlok a körvonalat a CadCraft számára tárolják. Más programok a nézetablakot a körülötte lévő téglalapként nyitják meg; a DXF R12 csak a téglalapot tartja meg.
- A modell lapon jelzi, hogy a nézetablakok lapokon vannak.

### VPORTS

Álnév: `VIEWPORTS`. A {{cmd:SPLIT}} ugyanaz egy lapról is, és a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Egymás mellett osztva}}, {{ui:Egymás alatt osztva}}, {{ui:Négy panel}}, {{ui:Egy panel}} ezt futtatják. A modellen: `Enter number of panes [SIngle/2/3/4] <3>`; a `2` `[Horizontal/Vertical] <Vertical>`-t kér (Vertical = egymás mellett), a `3` `[Left/Right] <Right>`-t (hova kerül a nagy panel). Minden panel saját nézetet és teret tart; egy kattintás aktívvá teszi a panelt. Lapon ez a {{cmd:MVIEW}}. Lásd: [Képernyő felosztása](topic:split-screen).

### VPVIEW

Nincs álnév. Csak lapon.

- `Select viewport` (kimarad, ha egy már ki van jelölve), majd a modellen: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Nincs álnév. Saját koordinátarendszer; nem szerkesztés. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: egy pont az új origó, majd `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origó, egy pont a pozitív X tengelyen, egy pont a pozitív Y oldalon. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` és egy név. A nézet úgy fordul, hogy az új X tengely vízszintes legyen. Lásd: [A nézet elforgatása és saját koordináták használata](topic:ucs-and-turned-view).

### PLAN

Nincs álnév. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: az aktív panel nézetét úgy forgatja, hogy az UCS X tengelye (vagy a világé) vízszintes legyen. A rajzban semmi nem mozdul.

### TURNLEFT, TURNRIGHT, TURNWORLD

Nincs álnév; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:A nézet elfordítása 90°-kal balra}}, {{ui:A nézet elfordítása 90°-kal jobbra}}, {{ui:Vissza a világhoz}}. Ugyanaz, mint az `UCS Z -90`, `UCS Z 90` és `UCS W`, a nézet követésével.

### VPLAYER

Nincs álnév. Lapon, vagy egy nézetablakon belül. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: az `F`, `T`, `R` rétegneveket kér (vesszők, `*` és `?` helyettesítő karakterek), majd a `[All/Select/Current] <Current>` nézetablakokat; a Reset minden réteget visszaállít az „új nézetablakokban befagyasztva” alapértelmezésére; a `V` ezt az alapértelmezést állítja (`[Frozen/Thawed]`), amelyet a {{cmd:MVIEW}} használ. A `?` listázza az aktuális nézetablakban befagyasztott rétegeket. A Rétegek panel nézetablak-oszlopa ugyanezt teszi egy nézetablakra. Lásd: [Réteg befagyasztása egy nézetablakban](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Álnevek: `MS`; vagy kattintson duplán a nézetablakon belül. Csak lapon. Munka a modellen egy nézetablakon keresztül: a kijelöltön, a lapon egyetlen nézetablakon, vagy `Click inside the viewport to work in`. A benne végzett pásztázás és nagyítás a nézetablak nézetét változtatja (a képernyőn rögzített nézet megtartja, és a lap mozog helyette); az új nézet egy visszavonási lépés. Lásd: [Munka a modellen egy nézetablakon keresztül](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Álnevek: `PS`; vagy kattintson duplán a nézetablakon kívül, vagy a rajz alatti lapfülre kattintson. Vissza a lapra.

### PLOT

Álnevek: `PRINT`, `PUBLISH`, `EXPORTPDF`; vagy {{key:Mod+P}}. Megnyitja a {{ui:PDF-be plottolás}} párbeszédpanelt. Lásd: [Plottolás PDF-be](topic:plot-pdf).

### PLOTSTYLES

Álnevek: `STYLESMANAGER`, `PSTABLES`; vagy {{ui:Táblák szerkesztése…}} a {{ui:PDF-be plottolás}} párbeszédpanelen. Megnyitja a {{ui:Nyomtatási stílustáblák}}at: mit nyomtat ki minden szín (szín, szürke, tinta, vonalvastagság), a rajzzal együtt tárolva. Lásd: [Nyomtatási stílustáblák](topic:plot-pdf#plot-style-tables).

### CHSPACE

A {{cmd:CHSPACE}} objektumokat mozgat lap és modell között egy nézetablakon keresztül, léptékezve és forgatva, hogy a másik oldalról ugyanúgy nézzenek ki. Egy lapon kijelölt objektumok a modellbe kerülnek (ha a lapon több nézetablak van, válassza ki azt). Amíg a modellen nézetablakon keresztül dolgozik ({{cmd:MSPACE}}), a kijelölt objektumok a lapra kerülnek. Megmondja, hányszor lettek nagyobbak vagy kisebbek. A nézetablakok a lapjukon maradnak. Egy visszavonási lépés.

### ISODRAFT

A {{cmd:ISODRAFT}} izometrikus rajzolást `ON` vagy `OFF` állapotba kapcsol, vagy egyenesen a `Left`, `Top` vagy `Right` síkra lép. Amíg be van kapcsolva: az Ortho ({{key:F8}}) a sík két tengelye mentén tartja a vonalakat (bal: 90° és 150°; felső: 30° és 150°; jobb: 30° és 90°), a polárkövetés ({{key:F10}}) ugyanezeket a tengelyeket követi, a rácsfogás ({{key:F9}}) az izometrikus rácsot használja, a rács ({{key:F7}}) 30°, 90° és 150°-os vonalakkal rajzolódik. Az {{cmd:ELLIPSE}} megkapja az `Isocircle` opciót: megad egy középpontot és egy sugarat (vagy `Diameter`-t), és az ellipszist rajzolja, amelyként a kör látszik az aktuális síkon. A rajz lapos marad: ezek egy képszerű nézet rajzolásának segédeszközei, nem 3D-modell. A beállítás erre a munkamenetre szól, nem mentődik a fájlba.

### ISOPLANE

A {{cmd:ISOPLANE}} kiválasztja azt a síkot, amelyen az izometrikus rajzolás dolgozik: `Left`, `Top` vagy `Right`. Az Enter a következő síkra lép. Amíg az izometrikus rajzolás be van kapcsolva, az {{key:F5}} ugyanezt teszi egy parancs közepén; kikapcsolva az {{key:F5}} a böngészőé.

## Lekérdezés

### CAL

Kiírja egy számítás értékét, úgy, ahogy bárhol olvasható, ahol hosszt gépel be.

- `Expression`: írja be például `12'6"+3/4"` vagy `(24'-0")/3`, és nyomja meg az {{key:Enter}} billentyűt. A CadCraft kiírja: `= 12'-6 3/4"   (150.75 drawing units)`. Lásd: [Aritmetika egy beírt értékben](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Álnév: `DI`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Távolság mérése}}.

- `Specify first point`, `Specify second point`. Kiírja a távolságot, a szöget, a Delta X-et és a Delta Y-t.

### AREA

Álnév: `AA`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Terület}}. Kiírja a területet és a kerületet.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Kattintson vagy írjon be sarkokat; a `Specify next point (Enter closes) [Undo]` kérdésnél az {{key:Enter}} lezárja a körvonalat. A `U` visszaveszi az utolsó sarkot.
  - Az {{key:Enter}} vagy `O`, majd `Select object`: egy kör (kiírja a kerületét), egy ellipszis, egy polivonal (a nyitott egyenes vonallal zárul a területhez, és a hossza kiíródik) vagy egy sraffozás (a lyukakat levonja).
  - Az `A` (Add area) és `S` (Subtract area) futó összeget tart: a kérdés `(ADD mode)` vagy `(SUBTRACT mode)` kezdettel indul, minden terület hozzáadódik vagy levonódik, és minden után kiíródik a `Total area = …`. Ezekben a módokban az `O` az Enter-ig választ objektumokat, és az első kérdésnél az Enter befejezi a parancsot.

### MEASUREGEOM

Álnév: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; minden mérés után újra kérdez, az alapértelmezés az `eXit`.

A `Quick` a mutató körül méri, ahogy mozgatja: a legközelebbi objektum távolságát jobbra, felfelé, balra és lefelé (az aktuális UCS tengelyei mentén), menet közben rajzolva, és azt a szöget, ahol két ilyen szomszéd egyenes és találkozik. Kattintás a négy távolságot, a szabad szélességet és magasságot, valamint a szögeket az előzményekbe írja; az Enter visszavisz az opciókhoz. A képernyőn lévőt olvassa.

- `D`: két pont, mint a {{cmd:DIST}}-nél.
- `R`: `Select arc or circle`; kiírja a sugarat és az átmérőt.
- `A`: egy ív (a bezárt szöge), egy vonal, majd egy második vonal (a szög közöttük, a távoli végeik felé), vagy az {{key:Enter}} és három pont (csúcs, majd a két vég).
- `AR`: mint az {{cmd:AREA}}, egy terület.

### ID

Nincs álnév. `Specify point`; kiírja az X és Y értékét.

### LIST

Álnevek: `LI`, `LS`. `Select objects`; kiírja minden objektum típusát, rétegét és főbb méreteit.

### MASSPROP

A {{cmd:MASSPROP}} a kijelölt tartományok és zárt objektumok keresztmetszeti tulajdonságait adja együtt: terület, kerület, határoló doboz, súlypont, az X és Y tengelyek körüli tehetetlenségi nyomatékok az origón át, a tehetetlenségi szorzat, a tehetetlenségi sugarak, ugyanezek a nyomatékok a súlypont körül, valamint a főnyomatékok a tengelyeik irányával. A tartományok furatai lyukként számítanak. Az értékek rajzegységekben vannak, és a vonalakból és ívekből álló körvonalakra pontosak; az ellipszisek és spline-ok rövid egyenes szakaszokként mérődnek, és ezt jelzi. A jelentés után megkérdezi, írja-e szövegfájlba. A nem zárt objektumokat kihagyja, és megmondja, hányat.

## Nézet, fájl és egyéb

### ZOOM

Álnév: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Két sarokkal ablakot adhat meg. Az `E`, `A` vagy az Enter: az egész rajz.
- A `P` (Previous, vagy {{ui:Előző}} az eszköztáron) az előző nézetre visszavisz, lapfülönként legfeljebb 10 nézetig; a görgetőkerék lépéssorozata vagy egy pásztázás egy nézetnek számít.
- Egy szám, például `2`, `2x` vagy `0.5x` (vagy `S`, majd a szám) a képernyő közepe körül ezzel a tényezővel nagyít vagy kicsinyít.
- A `C` `Specify center point`-ot, majd `Enter height or magnification (nX)`-t kér.

### PDFATTACH, PDFIMPORT és a PDF-parancsok

Álnevek: `PDFATT` a {{cmd:PDFATTACH}}-hez, `PDFIM` a {{cmd:PDFIMPORT}}-hez. A {{cmd:PDFATTACH}} egy PDF-oldalt tesz a rajz alá (fájl, oldal, beillesztési pont, lépték, forgatás); a {{cmd:PDFIMPORT}} egy oldal vonalait, íveit, kitöltéseit és szövegét rajzobjektumokká alakítja, a PDF nevét viselő rétegeken, valódi méretben, megadott léptékkel, vagy két pontból és egy valódi távolságból léptékezve. A {{cmd:PDFCLIP}} levág egy alátétet, a {{cmd:PDFADJUST}} beállítja a halványítást, kontrasztot, monokrómot vagy kikapcsolja, a {{cmd:PDFLAYERS}} a PDF saját rétegeit kapcsolja, a {{cmd:PDF}} pedig újra megadja a CadCraftnak a fájlokat, amelyeket a rajz alátétei használnak. Lásd: [PDF-alátétek](topic:pdf-underlay).

### AUTOCOMPLETE

Álnév: `AUTOC`. A rajz automatikus kiegészítése: ha nem fut parancs, egy szürke szellem mutatja, mit mondanak a rajz saját minták a következőről. Az {{cmd:AUTOCOMPLETE}} `On` vagy `Off` állapotba kapcsolja (vagy a Beállítások › CadCraft), vagy `Show`-olja, mit javasolna most. A **Tab** a szellemet egy visszavonási lépésként rajzolja, az **Esc** elveti, amíg a rajz nem változik. Három dolgot talál a legújabb objektumokban: egyenlő lépésben kétszer vagy többször rajzolt dolog következő másolatát (bordák, oszlopok, egy lépcső felfutója és lépcsőfoka), a polivonal lépcső következő lépéseit, és egy szoba vagy falsor hiányzó oldalát. A {{cmd:LINE}} vagy {{cmd:PLINE}} közben a szellem a **következő pont**: a lépcső következő lépése (felfutó, lépcsőfok, felfutó…), a téglalap negyedik sarka, az a pont, amely bezárja, vagy még egy egyenlő lépés. Vigye a kurzort a közelébe, és nyomja meg a **Tab**-ot, mintha oda kattintott volna; folytassa, vagy nyomjon Enter-t. A számítógépén, szabályok alapján, modell nélkül készül.

### AUTOSHEET

Álnév: `ASH`. Lapok, amelyek maguktól elrendeződnek. A {{cmd:AUTOSHEET}} a rajz darabjait veszi (az Ön megnevezett nézeteit, vagy a modell különálló darabjait, vagy az egész modellt), papírméretet választ (vagy az Ön megadottat), minden darabnak szabványos léptéket ad (egy léptéket mindnek, vagy azt a legnagyobbat, amelyet mindegyik elbír), és a nézeteket sorokban új lapokra helyezi, rajzfejjel és mindegyik alatt egy felirattal (név és lépték). Ami nem fér el egy lapon, saját lapot kap. Egy visszavonási lépés. A számítógépén, szabályok alapján, modell nélkül készül.

### PHOTOSKETCH

Álnév: `PSK`. Vázlatfotóból rajz. Válasszon egy fényképet (JPEG, PNG vagy TIFF) egy papírlapra készített kézi vázlatról. A {{cmd:PHOTOSKETCH}} megtalálja a lap négy sarkát, kiegyenesíti a perspektívát, felveszi az Ön által megnevezett papírméretet (`Paper`, vagy a legközelebbi szabványos), és a vázlat `Scale`-ét (1 : n), majd a tollvonalakat vonalakká, ívekké és körökké követi, minden tollszínnek (fekete, piros, kék, zöld) saját réteget adva. Ha nem találja a papír szélét, az egész fotót lapnak veszi, és ezt jelzi. A feliratokat kihagyja. Egy visszavonási lépés. Klasszikus képfeldolgozással, a számítógépén, modell nélkül, semmit nem küldve készül. Lásd még a beszkennelt rajz parancsait.

### AUTODIM

Álnév: `ADIM`. Automatikus méretezés szabályok szerint. Az {{cmd:AUTODIM}} a kijelölt objektumokat (vagy az egész rajzot) szintes és függőleges éleik alapján méretezi: a `Sides` mentén választott oldalak mentén méretláncot, azon kívül egy teljes méretet, minden nyílás szélességét (az egy egyenesen lévő falvonalak közötti hézagot), minden lyukméret átmérőjét, és a `Grid`-del a rácsvonalak közötti távolságot. Az, ami már méretezve van, nem készül el újra. Egy visszavonási lépés. A számítógépén, szabályok alapján, modell nélkül készül.

### GRIDMOVE

Álnév: `GM`. A rácsvonal mozgatása magával viszi a készletet. A {{cmd:GRIDMOVE}} egy rácsvonalat mozgat (olyan rétegen lévő vonalat, amelynek neve rács vagy tengely szó), és ami rajta lóg: a rajta végződő falak a vonal követésére nyúlnak, a vonal mentén futók egészben mozognak, az oszlopok (a vonalon lévő blokkhivatkozások és körök), a buborék és a címke mozognak, és az olyan méretezések, amelyek pontjai a vonalon ülnek, az új távolságot mérik. Adjon meg két pontot (csak a vonalon keresztüli rész számít), vagy a `Distance`-t. Egy visszavonási lépés visszahoz mindent. A számítógépén, szabályok alapján készül.

### DETAILS

Álnév: `DET`. Részletek, amelyek megtalálják Önt. A {{cmd:DETAILS}} megőrzi cége saját részleteit: az `Add` a rajz egy blokkját a listához teszi, a `List` és a `Remove` kezeli, a `Find` rangsorolja őket a kijelöltre (vagy az utoljára rajzoltra) a rétegeik, blokkneveik, sraffozási mintáik és megjegyzéseik szavai alapján, a részletek neveivel és megjegyzéseivel összevetve, így egy ablakfejhez megtalálja az ablakpárkány-lefolyót. Egy számot és egy pontot választva helyezi el. Ha a `Hint` be van kapcsolva (a Beállítások › CadCraft menüben is), egy részlettel egyező kijelölés egy sort ír az állapotsorba. A lista ebben a böngészőben, ezen a számítógépen marad meg, és ez a lista az, amelyben keres. A `Share` a Dokumentumok mappába is elteszi (`.cadcraft/firm-details.json`, minden blokk rajzával): a `Pull` hozzáadja, amit csapata tart és Önnek hiányzik, a `Push` amit Ön tart és nekik hiányzik, a `Both` mindkettőt, és semmi nem törlődik egyik oldalról sem. Nyissa meg előbb a Dokumentumok mappát ({{cmd:DOCUMENTS}}); ha ez egy Team Cloud Plan mappa, az egész csapat egy listát oszt meg. A Könyvtár panel egy részlet-elemén van egy **Hozzáadás a cégem részleteihez** gomb, amely ugyanabba a listába teszi. A számítógépén, szavak alapján, modell nélkül készül.

### SKETCHFIX

Álnév: `SKF`. Tollvázlatokból pontos geometria. Egyszerre egy szabadkézi vonást húzzon (tollal, egérrel vagy ujjal), majd Enter. Minden vonás vonalként, körként, ívként, téglalapként vagy polivonalként értelmeződik: a közel vízszintes és függőleges vonalak pontosan vízszintesek és függőlegesek lesznek, egy zárt, kerek vonás kör lesz, egy négy derékszögű sarkú zárt vonás téglalap, a vonások végei pedig egymáshoz és a rajzban már meglévő végekhez húzódnak. Egy visszavonási lépés. A számítógépén, szabályok alapján, modell nélkül készül.

### SCANATTACH és a beszkennelt rajz parancsai

Álnevek: `SCA` a {{cmd:SCANATTACH}}, `SCS` a {{cmd:SCANSCALE}}, `SCL` a {{cmd:SCANALIGN}}, `SCD` a {{cmd:SCANDESKEW}}, `SCC` a {{cmd:SCANCLEAN}}, `SCR` a {{cmd:SCANCROP}}, `SCE` a {{cmd:SCANERASE}}, `SCT` a {{cmd:SCANTRACE}}, `SCI` a {{cmd:SCANINFO}}; a {{cmd:RASTERSNAP}}-nek nincs. Egy képen dolgoznak, mindegyik egy visszavonási lépés. A {{cmd:SCANATTACH}} PNG-t, JPEG-et, TIFF-et (egy oldal vagy mind) vagy egy képként működő PDF-oldalt illeszt be. A {{cmd:SCANSCALE}} két kijelölt pontból és a valódi távolságból léptékezi a lapot. A {{cmd:SCANALIGN}} két pontra mozgatja és forgatja (`Scale the sheet to fit` Igen/Nem). A {{cmd:SCANDESKEW}} megmutatja a lap hosszú vonalainak szögét, és elfogadás vagy `Value` után elforgatja a lapot. A {{cmd:SCANCLEAN}} feketévé-fehérré teszi (`Threshold` Auto/Adaptive/Level, `Specks`), majd `Run`. A {{cmd:SCANCROP}} egy ablakot tart meg. A {{cmd:SCANERASE}} egy `Rectangle`-t, `Polygon`-t vagy `Lasso`-t töröl. A {{cmd:SCANTRACE}} vonalakat és íveket követ egy új rétegre (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`), és jelenti, mit talált, és mit hagyott rasztermaradványként. A {{cmd:SCANINFO}} felsorolja az eredeti fájlt és a lépéseket. A {{cmd:RASTERSNAP}} be vagy ki kapcsolja a beszkennelt lapok vonalaihoz való illesztést. Lásd a témakört: Beszkennelt rajzok és a követés.

### REGEN és REGENALL

Álnevek: `RE` a {{cmd:REGEN}}-re, `REA` a {{cmd:REGENALL}}-ra. A képernyőn látható dolgokat építi újra a rajzból: a {{cmd:REGEN}} azt a lapot, amelyet néz (lapon azt a modellt is, amelyet nézetablakai mutatnak), a {{cmd:REGENALL}} minden lapot, minden felosztott panelt és minden megnyitott rajzot. Akkor használja, ha a kép egy szkriptelt vagy nagyon nagy módosítás után elavultnak látszik, vagy egy asszisztens szerkesztette a rajzot; maga a rajz nem változik, ezért nincs mit visszavonni.

### NAMEDVIEW

Álnevek: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, majd a nézet neve. Az `S` elmenti a képernyőn lévő nézetet, a `W` egy Ön által kiválasztott ablakot, az `R` egy mentett nézetet mutat, a `D` egyet töröl, a `?` listázza ennek a lapnak a nézeteit. A meglévő névre mentés helyettesíti; minden változtatás egy visszavonási lépés. A nézetek ahhoz a laphoz tartoznak, amelyen mentették. A DWG és DXF fájlok megtartják őket (a VIEW táblában); egy lap nézetei az első lapon térnek vissza, mert a fájl nem mondja meg, melyiké.

### UNDO és REDO

Álnevek: `U` az {{cmd:UNDO}}-hoz; a {{cmd:REDO}}-nak nincs. Még a {{key:Mod+Z}} és a {{key:Mod+Y}}.

### LAYER

Álnév: `LA`. Ugrik a {{ui:Rétegek}} panelre.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` vagy egy név (`?` listázza őket: Continuous, a rajz saját vonaltípusai, és DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE a `2` (fél) és `X2` (dupla) méretekkel). {{cmd:LWEIGHT}} (`LW`): az új objektumok vonalvastagsága mm-ben, vagy `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): a rajz vonaltípus-léptéke (visszavonható). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — ugyanaz, mint az állapotsor {{ui:LWT}} gombja. Lásd: [Vonalvastagságok és vonaltípusok](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, majd az új név; az objektumok vagy hivatkozások követik. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` az Enter-ig, majd `Select object on target layer or [Name]` és `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, majd `Y`: a réteg és a rajta lévő minden objektum eltűnik (a 0 réteg, a DEFPOINTS vagy az aktuális réteg nem). Mindegyik egy visszavonási lépés. Lásd: [Rajz rendezése rétegekkel](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Rétegek objektumok kiválasztásával; a {{ui:Rétegek}} panel {{ui:Eszközök}} menüjében is. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, majd {{key:Enter}}: minden más réteg kikapcsol. A {{cmd:LAYUNISO}} visszakapcsolja őket. A {{cmd:LAYOFF}} és a {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (vagy befagyasztott), újra és újra; a `U` visszaveszi az utolsót, az {{key:Enter}} befejezi. A {{cmd:LAYMCUR}}: `Select object whose layer will become current`. A {{cmd:LAYON}} minden réteget bekapcsol, a {{cmd:LAYTHW}} minden réteget feloldja. Mindegyik parancs egy visszavonási lépés. Lásd: [Rajz rendezése rétegekkel](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

A {{cmd:NEW}} egy üres rajzot kezd, a {{cmd:OPEN}} egy DWG- vagy DXF-fájlt nyit meg, mindegyik saját lapfülön a rajz fölött (egy még nem módosított új rajz helyett használja a rendszer). Egy nem mentett módosításokat tartalmazó lap bezárásakor megkérdezi. Lásd: [Képernyő felosztása](topic:split-screen).

A {{cmd:SAVE}} (álnév `QSAVE`, és {{key:Mod+S}}) a rajz formátumában tölt le egy másolatot: DWG-ben, ha DWG-ből nyílt, DXF-ben, ha DXF-ből. Egy új rajz a böngészőben a Mentés másként során utoljára választott formátumot használja, különben DWG-t.

A {{cmd:SAVEAS}} (és {{key:Mod+Shift+S}}) megnyitja a {{ui:Másolat mentése másként}} párbeszédpanelt: válassza a {{ui:DWG}} (és a {{ui:Verzió}}) lehetőséget, a {{ui:DXF R12}}-t vagy a {{ui:DXF 2000}}-et, majd a {{ui:Mentés}}-t. A választás ehhez a rajzhoz és a böngészőben lévő új rajzokhoz megmarad.

A {{cmd:DXFOUT}} mindig DXF R12 másolatot tölt le, anélkül, hogy megváltoztatná a {{cmd:SAVE}} által használt formátumot.

Lásd: [Fájlok: mit nyit meg, mit ment](topic:files#saving).

### TOUR

Álnév: `TUTORIAL`. Újraindítja az első rajz hatlépéses bemutatóját. Lásd: [Kezdő lépések](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Álnév: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Lásd: [Beállítások](topic:settings#toolbar-position).

### COMMANDLINE

Álnév: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: lehorgonyozza vagy lebegteti a parancssort, egy sorrá teszi, megkérdezi, hány előzménysort mutasson (0 és 12 között), vagy megnyitja az előzményeket. Lásd: [Beállítások](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: a rajz feletti sávok a régi módon, vagy tömören. Lásd: [Beállítások](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: az a lépés fokban, amelyre a {{ui:Polár}} követés vonalakat igazít (0-nál több, 180-ig). Ebben a böngészőben marad meg.

### UNITS

Álnév: `UN`. Hogyan íródnak és gépelhetők be a hosszak.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Építészeti és Törtes: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. A többi: `Enter number of decimal places (0 to 8)`.

Az új méretezések ezt követik. Egy visszavonási lépés. Ugyanaz, mint a {{ui:Jelenlegi beállítások}} alatti {{ui:Hosszformátum}} és {{ui:Pontosság}}; lásd: [Láb és hüvelyk](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Álnév: `GDS`. Egy IC-elrendezés megtekintése (GDSII adatfolyam-fájl): labor-próba, csak megtekintésre és mérésre.

- Egy fájlválasztó `.gds` fájlt vesz; több felső cellánál: `Enter the top cell to draw`.
- Minden réteg és adattípus rajzrétegként jelenik meg (`GDS 1`, `GDS 2/5`); a hivatkozások és tömbök laposan, a fájl felhasználói egységében (általában mikrométerben) kerülnek elhelyezésre. Egy visszavonási lépés. Semmi nem szimulált vagy ellenőrzött, és a fájl nem íródik vissza.

### DIAGRAM

Álnevek: `TEXTDIAGRAM`, `T2D`. Diagram szövegből.

- Egy doboz veszi a szöveget (vagy egy sort a parancssorban, `;` jelekkel az állítások között): Mermaid folyamatábra, PlantUML komponensdiagram, D2 vagy honnan-hová lista.
- `Specify the top left corner of the diagram`, majd `Specify the text height`.

A blokkok és összekötők közönséges objektumok a `Diagram` rétegen, és a végén kijelölve maradnak. Egy visszavonási lépés. Lásd: [Diagram rajzolása szövegből](topic:text-to-diagram).

### OLELIST

Álnév: `OLES`. Az OLE-objektumok, amelyeket a DWG hordoz, és amelyeket a CadCraft maga nem tud elhelyezni.

- Mindegyiket felsorolja: sorszám, típus, méret, van-e mentett képe.
- `Enter an option [Place/eXit] <eXit>`: a Place a sorszámot, a bal alsó sarkot és a szélességet kéri, és egy képpel rendelkező keretet rajzol. Egy visszavonási lépés; a megtartott objektum nem változik. Lásd: [Képek](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Álnév: `SHX`. Saját SHX-betűtípusok.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

A {{ui:Folder}} egy mappa minden `.shx` fájlját beolvassa (CadCraft Studio; minden indításkor újra), a {{ui:Files}} kiválasztott fájlokat vesz (böngésző), a {{ui:Reverse}} egy betűtípus betűit az utolsótól az elsőig rendezi. A betűtípust megnevező szövegstílusok abban rajzolódnak. Lásd: [Szöveg rajzolása saját SHX-betűtípusokkal](topic:shx-fonts).

### LIMITS

Mekkora a rajz szánt mérete.

- `Specify lower left corner or [ON/OFF] <current>`: egy pont, `ON` vagy `OFF`.
- `Specify upper right corner <current>`.

A rács kitölti a határokat, a {{cmd:ZOOM}} All megmutatja őket, és ha be vannak kapcsolva, a rajtuk kívüli pontot elutasítja (`**Outside limits`). Egy visszavonási lépés; DWG-ben és DXF-ben mentődik. Lásd: [Rajzhatárok beállítása](topic:drawing-limits).

### AUNITS

Álnév: `ANGUNITS`. Hogyan jelennek meg és hogyan gépelhetők be a szögek.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, vagy a másik kettőnél `Enter precision` (0 fok, 2 perc, 4 másodperc, 5–8 tizedes a másodpercnél).

Egy visszavonási lépés; DWG-ben és DXF-ben mentődik. Ugyanaz, mint a {{ui:Jelenlegi beállítások}} alatti {{ui:Szögformátum}}. Lásd: [Irányszögek és szögek megadása és megjelenítése](topic:bearings-and-angles).

### APPLOAD

Álnév: `AP`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Alkalmazás betöltése…}}. A {{ui:Alkalmazások betöltése}} párbeszédpanel: `.lsp` rutinok és `.dcl` párbeszédfájlok betöltése, kiürítése, újratöltése az előzményekből, és az indítókészlet. Egy rutin `(defun c:NAME …)` parancsai ezután úgy működnek, mint bármely más. Lásd: [Alkalmazások betöltése](topic:load-applications) és [LISP-rutinok futtatása](topic:run-lisp).

### ALIASEDIT, REINIT

A {{cmd:ALIASEDIT}} (vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Álnevek szerkesztése…}}) megnyitja az álnévfájlt (`ALIAS, *COMMAND` sorok); a {{ui:Mentés}} alkalmazza. A {{cmd:REINIT}} újra alkalmazza. Lásd: [Parancsok álneveinek szerkesztése](topic:command-aliases).

### OPTIONKEYS

Álnevek: `OPTKEYS`; vagy {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Opcióbetűk}} › {{ui:Szerkesztés…}}. Megnyitja az opcióbetű-fájlt (`COMMAND.OPTION, LETTERS` sorok, például `ARRAY.PO, P`); a {{ui:Mentés}} alkalmazza, a {{cmd:REINIT}} újra alkalmazza. Lásd: [Saját betűk megadása a parancsopciókhoz](topic:option-letters).

### LISPEDIT

Álnév: `VLIDE`; vagy {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:LISP-szerkesztő}}. Megnyitja a LISP-szerkesztőt, egy ablakot, amely a rajz mellett nyitva marad.

- A szöveg: sorszámok, a kurzor alatti zárójel párja megjelölve (pirossal, ha nincs párja), az {{key:Enter}} behúzza az új sort a nyitó zárójel alá, a {{key:Tab}} két szóközt ír, az {{key:Esc}} kilép a szövegből.
- {{ui:Betöltés a rajzba}} ({{key:Ctrl+Shift+Enter}}): beolvassa az összes alakot, ahogy az {{cmd:APPLOAD}} a fájlt, és létrehozza a `c:` parancsait. A fájl megjelenik az {{cmd:APPLOAD}} listájában.
- {{ui:Kijelölés futtatása}} ({{key:Ctrl+Enter}}): kiértékeli a kijelölt alakokat, vagy azt, amelyben a kurzor van.
- {{ui:Leállítás}}: megszakítja a futó rutint.
- {{ui:Konzol}}: amit a rutin kiírt, és minden hiba a sorával; egy hibára kattintva oda ugrik. A szöveget egyszerre egy legfelső szintű alak fut, így a sor az alaké, vagy azon belül az a sor, amely a hibában megnevezett függvényt hívja.
- {{ui:Új}}, {{ui:Megnyitás}}, {{ui:Mentés}} ({{key:Ctrl+S}}): egy `.lsp` fájl. A szöveg ebben a böngészőben is megmarad, így az ablak bezárása nem veszíti el.
- A szöveg mellett: a rutin által definiált függvények, azok, amelyeket hív, de ez a LISP még nem tud, azok, amelyeket hív, de sem nincsenek definiálva benne, sem beépítettek, és a teljes lista arról, mi van beépítve és mi nincs.

A nem lezárt zárójelű vagy véget nem érő karakterláncú szöveg nem fut le: a sort megnevezi. Nincs lépésenkénti hibakereső, töréspont vagy megfigyelőablak. Lásd: [LISP-rutinok futtatása](topic:run-lisp).

### HELP

Álnév: `?`. Kiír minden parancsot, azok álneveit és egysoros leírását a parancssor előzményeibe. Nem nyitja meg ezt a súgót: ahhoz nyomja meg az {{key:F1}}-et, vagy kattintson a {{ui:Súgó}}-ra.

## Kijelölés kérése

Bármely `Select objects` kérésnél: kattintson objektumokra, húzzon ablakokat (balról jobbra) és keresztező ablakokat (jobbról balra) két kattintással, vagy nyomja meg és húzzon egy lasszót ({{key:Space}} húzás közben: ablak, keresztezés, kerítés), a {{key:Shift}}+kattintás eltávolít, az {{key:Enter}} befejez. Írhatja a `ALL`-t (minden), `L`-t (az utolsó objektum), `P`-t (Previous: amit az utolsó parancs használt), `F`-et (Fence: amelyeket egy pontokból álló vonal keresztez; a `U` visszavesz egy pontot), `W`-t (Window), `C`-t (Crossing), `R`-t (Remove mode: a kattintások objektumokat vesznek ki; a kérdés `Remove objects`), és `A`-t (Add again). A `?` listázza őket. A kérdésben nem látszanak. A {{key:Tab}} átfedő objektumok fölött a következőt emeli ki; kattintson, hogy kiválassza. Lásd: [Objektumok kijelölése](topic:select-objects).

### ACCESS

Álnév: `AX`. Vázlatolás látás nélkül. Az {{cmd:ACCESS}} be- és kikapcsolja a hozzáférést (`On`, `Off`), és kapcsolja a fogáshangokat (`Sound`) és a hangparancsokat (`Voice`); előbb kimondja az állapotot. Ha a hozzáférés be van kapcsolva, minden parancsot és eredményt a képernyőolvasó mond el, és a rajzterületen billentyűzeti kurzor van. A „Vázlatolás látás nélkül” súgótéma tartalmazza a billentyűket.

### DESCRIBE

Álnév: `DESC`. Megmondja, mit tartalmaz a rajz: hány objektum, milyen fajtájú, milyen nagy, hány réteg, mi van kijelölve. Csak olvas; semmit nem változtat.

### WHEREAMI

Álnév: `WHERE`. Megmondja, hol van a kurzor, a rajz egységeiben.

### NEARBY

Megmondja, mi van a kurzor közelében, a legközelebbi először, mindegyik a távolságával és az oldalával.

### SAYSEL

Megmondja, mi van kijelölve, objektumonként egy mondatban (vonal hossza, végei és szöge; kör sugara és középpontja; a szöveg úgy, ahogy van).

### VOICE

Hangparancsok be- vagy kikapcsolása. Ezen a számítógépen ismerik fel őket; ahol a böngésző ezt nem tudja, a hang ki marad, hacsak a Beállításokban nem a böngésző online szolgáltatását választja.

### TOUCHCROSSHAIR

Álnév: `TCX`. Az ujjal való rajzoláshoz szánt eltolt kereszthajszál, hogy az ujjhegy ne takarja a kiválasztott pontot. Ha be van kapcsolva, egy ujj a rajzon nem választ ki: egy kereszthajszált mozgat, amely az ujj fölött és az egyik oldalán van. Az objektumfogások és a követés a kereszthajszálat követik. Az ujj felemelése nem választ ki semmit, és a kereszthajszál ott marad, ahol van. A kiválasztáshoz nyomja meg a {{ui:Kattintás}} gombot a rajz sarkában, vagy koppintson a rajzon egy második ujjal. A {{ui:Kattintás}} lenyomva tartása a másik ujj mozgatása közben húz (kijelölési ablak, lasszó, fogópont). Egy ujj lenyomva tartva mozdulatlanul, vagy az {{ui:Enter}} gomb, az Enter. Két ujj pásztáz és nagyít, mint korábban. A rajz alsó szélénél és a távoli oldalsó szélénél a kereszthajszál az ujjhoz húzódik, így a rajz minden része elérhető. A toll és az egér mindig közvetlenül választ ki.

A {{cmd:TOUCHCROSSHAIR}} megmondja az állapotot, és kérdi: `ON`, `OFF`, `Auto` (csak ott be, ahol az ujj az egyetlen mutató, így egérrel rendelkező számítógépen ki van kapcsolva), `Distance` (milyen messze van a kereszthajszál az ujjtól, 24 és 240 pixel között) vagy `Side` (`Left`: fel és balra, a jobb kézhez; `Right` a bal kézhez; a gombok a másik sarokba kerülnek). Ugyanezek a választások a Beállítások › CadCraft menüben vannak, és érintőképernyős eszközön az állapotsoron van egy {{ui:Eltolt kereszthajszál}} kapcsoló. A választások ebben a böngészőben maradnak meg.

### WHOHAS

Megmondja, ki nyitotta meg a rajzot. A CadCraft Studióban, számítógépen, egy DWG vagy DXF megnyitásakor egy kis zárófájl íródik mellé (`Plan.dwg.cclock`: ki, mióta, melyik verzió), percenként frissül, amíg a rajz nyitva van, és a bezáráskor eltávolítódik. Egy másik személy által nyitott rajz megnyitásakor megmondja, ki és mióta, és felajánlja a {{ui:Megnyitás csak olvasásra}} (mentéskor új nevet kér), a {{ui:Megnyitás mindenképp}} (a másik személy a következő frissítésénél értesül) vagy a {{ui:Mégse}} lehetőséget. Egy másik személy által nyitott fájl fölé mentéskor előbb megkérdezi. Az öt percig nem frissített zár elavultnak számít: a másik példány mentés nélkül zárult be, vagy a számítógép alszik.

A {{cmd:WHOHAS}} kérdezi: `Current` (a megnyitott rajz), `File` (válasszon egyet), `FOlder` (válasszon mappát: listázza benne minden olyan rajzot, amely valahol nyitva van), `Path` (írjon be teljes útvonalat) vagy `Name` (az a név, amelyet mások látnak; be van jelentkezve, a fiókja neve). A Studio csak olyan mappákat ér el, amelyeket Ön választott: ha egy olyan mappából nyitott rajzról van szó, amelyet soha nem választott, egyszer megmondja, hogy nem tudja nyitva jelölni a rajzot; a `FOlder` választja ki a mappát, és onnantól a zárak ott működnek. A zár emlékeztető az embereknek, nem akadály: egy másik program még így is írhatja a fájlt. Böngészőben nincsenek mappák, ahol keresni lehetne, és a parancs ezt megmondja.

### OVERKILL

Törli az azonos objektumokat, és rendezi az átfedő vonalakat és íveket, olyan rajzokhoz, amelyek megduplázott vonalakkal érkeznek. `Select objects to clean up`, {{key:Enter}}, majd újra az {{key:Enter}}, hogy a megjelenített beállításokkal tisztítsa, vagy előbb változtasson egyen:

- `Tolerance`: milyen közel kell lennie két koordinátának ahhoz, hogy azonosnak számítsanak (kezdetben 0,000001; 0 pontosan azonosat jelent).
- `Ignore`: tulajdonságok, amelyek eltérhetnek két egyébként azonos objektumnál. Írjon be egy nevet a kapcsolóhoz: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, vagy `None` / `All`. Az {{key:Enter}} ha kész.
- `Overlap`: be vagy ki. Bekapcsolva az egy egyenesen átfedő vonalak egy vonallá lesznek (egy másik vonalon belül lévő vonal egyszerűen törlődik), és az egy körön átfedő ívek egy ívvé; a teljes kört kitevő ívek körré lesznek, és a körön fekvő ív törlődik.
- `Ends`: be vagy ki. Bekapcsolva az egy egyenesen lévő vonalak és az egy körön lévő ívek, amelyek csak végükön érintkeznek, egy darabbá lesznek.

Minden objektumfajtát ellenőriz duplikátumokra: két objektum akkor duplikátum, ha geometriájuk a tűrésen belül azonos, és rétegük, színük, vonaltípusuk, vonaltípus-léptékük, vonalvastagságuk, vastagságuk, átlátszatlanságuk és magasságuk egyezik (kivéve azokat, amelyeket figyelmen kívül hagy). A vonalak és a nyitott polivonalak akkor is egyeznek, ha fordítva vannak rajzolva. A rajzolási sorrendben első objektum megmarad, és megtartja a saját tulajdonságait. A parancs megmondja, hány objektumot ellenőrzött, és hányat törölt: duplikátumokat, összeolvasztott átfedő darabokat, végükön összekapcsolt darabokat. Egy {{cmd:UNDO}} mindent visszavesz. A beállítások a rajzablak bezárásáig maradnak meg.

Érintetlenül hagyja: a zárolt rétegek objektumait és a rejtett objektumokat. Nem egyesít magassággal (Z) rendelkező vonalakat (a pontosan azonos példányok azért törlődnek), és nem nyúl polivonalon belüli szakaszokhoz (nem vékonyítja őket), sem egy polivonal szakaszán fekvő vonalhoz, sem fordítva rajzolt zárt polivonalhoz.

### DRAWORDER

Megváltoztatja, mely objektumok legyenek elöl. `Select objects to re-order`, {{key:Enter}}, majd `Above objects`, `Under objects`, `Front` vagy `Back` ({{key:Enter}} = `Back`). Az `Above objects` és az `Under objects` a referenciaobjektumokat kéri: a kijelölés közvetlenül a legelső előtt, vagy közvetlenül a legutolsó mögött lesz. A kijelölt objektumok egymás közötti sorrendjüket megtartják. Egy visszavonási lépés. A sorrend a rajzzal együtt mentődik DWG-ben és DXF-ben, ahol az a sorrend, amelyben az objektumok íródnak.

A képernyőn minden objektum a rajz sorrendjében rajzolódik, ahogy más programok rajzolják meg a fájlt: egy tömör sraffozás, egy széles polivonal vagy egy szövegmaszk takarja a mögötte lévő vonalakat és szöveget, és ami előtte van, takarja azt. Ahol egy vonal átmetsz egy szöveget, mindkettő látszik. A képek és a csatolt PDF-oldalak a vonalrajz alatt maradnak. Nagyon nagy rajzban, ahol a kitöltések és a vonalak 256-nál többször átfedik és váltják egymást, az első 256 megtartja sorrendjét, a többi kitöltése a vonalak alá kerül, így az újrarajzolás gyors marad.

### TEXTTOFRONT

A szöveget, a méretezéseket és a vezetővonalakat a nyitott térben mindennek elé hozza: `Text`, `Dimensions`, `Leaders` vagy `All` ({{key:Enter}} = `All`). Egy visszavonási lépés. Jelzi, ha nincs ilyen, vagy ha már elöl vannak.

### HATCHTOBACK

A nyitott tér minden sraffozását minden más mögé küldi, így a kitöltések nem takarják a vonalrajzot és a szöveget a mentett fájlban. Kérdés nincs. Egy visszavonási lépés.

### ISOLATEOBJECTS

Álnév: `ISOLATE`. Csak a kijelölt objektumokat mutatja: minden más a nyitott térben az UNISOLATEOBJECTS-ig eltűnik. A {{cmd:LAYISO}}-val ellentétben a kijelölt objektumokon dolgozik, rétegüktől függetlenül, és egyetlen réteget sem kapcsol. A rejtett objektumokat nem rajzolja, nem jelöli ki, nem fogja meg, nem nagyítja rá a nézetet és nem plottolja, és az `ALL`-t használó parancsok átugorják őket. Ami az objektumok izolálása közben rajzolódik, az szokásosan látszik.

Csak erre a munkamenetre szól: semmi nem mentődik a rajzzal, nem egy visszavonási lépés, és a rajz újranyitása mindent mutat. Amíg objektumok vannak elrejtve, az állapotsor a számukkal ellátott gombot mutat; kattintson rá, hogy újra megjelenjenek.

### HIDEOBJECTS

A kijelölt objektumokat elrejti az UNISOLATEOBJECTS-ig. Ugyanazok a szabályok, mint az {{cmd:ISOLATEOBJECTS}}-nál: csak erre a munkamenetre, nem mentődik, nem egy visszavonási lépés.

### UNISOLATEOBJECTS

Álnevek: `UNISOLATE`, `UNHIDE`. Újra megmutatja az {{cmd:ISOLATEOBJECTS}} vagy {{cmd:HIDEOBJECTS}} által elrejtett minden objektumot, és megmondja, hányat.

### LAYLOCKFADE

Beállítja, hogyan néznek ki a zárolt rétegek objektumai, és hogy egy kattintás eléri-e őket. Megmondja a jelenlegi állapotot, majd:

- egy számot 0 és 90 között: a halványítás mértéke százalékban (kezdetben 50). A 0 kikapcsolja a halványítást.
- `ON` vagy `OFF`: a halványítás be vagy ki, a mérték megtartásával.
- `Pick`, majd `Yes` vagy `No`: kijelölhet-e egy kattintás zárolt rétegen lévő objektumokat, ha nincs parancs futva? A `No` (alapértelmezett): egyáltalán nem jelölhetők ki. A `Yes`: egy kattintás vagy ablak kijelöli őket, hogy a {{ui:Tulajdonságok}} megmutathassa; továbbra sem módosíthatók, és egy parancs saját `Select objects` kérése soha nem veszi fel őket.

Az objektumfogások mindkét esetben megtalálják a zárolt rétegek objektumait. A plottok soha nem halványodnak. Mindkét beállítás az Öné, nem a rajzé, és a {{ui:Beállítások}} alatt is megtalálható a {{ui:Zárolt rétegek}} részben.

### BURST

Szétbontja a blokkhivatkozásokat, és megtartja, amit attribútumaik mondanak. `Select block references to burst`, {{key:Enter}}: minden hivatkozást a blokk objektumai helyettesítenek, és minden látható attribútum értéke sima szöveggé lesz azon az attribútum saját rétegén (a 0 rétegen lévő attribútum a hivatkozás rétegére kerül, mint a blokk többi 0 rétegű objektuma). A láthatatlan attribútumok eltűnnek. A blokkon belüli blokk blokkhivatkozás marad. Egy visszavonási lépés; megmondja, hány hivatkozást bontott szét, és hány attribútumértéket alakított szöveggé.

Egy összekapcsolt rajzot névvel elutasít (előbb kösse hozzá, vagy másoljon belőle a {{cmd:NCOPY}} paranccsal), és a kijelölés többi objektumát érintetlenül hagyja. Blokkhivatkozásoknál az {{cmd:EXPLODE}} ugyanezeket az objektumokat adja; a {{cmd:BURST}} csak blokkhivatkozásokat fogad el, és az attribútumszöveget is számolja.

### TXT2MTXT

Álnév: `T2M`. Egysoros szövegeket egyetlen bekezdésszöveggé egyesít. `Select single-line text to join`, {{key:Enter}}, majd `Paragraph` (a sorok összefolynak, és a legszélesebb sor szélességénél tördelődnek) vagy `Lines` (minden szöveg saját sor marad); az {{key:Enter}} a legutóbb használtat veszi. A sorok fentről lefelé, majd balról jobbra rendeződnek, a felső szöveg irányában. A bekezdés a felső szöveg bal felső sarkából lóg, és átveszi annak magasságát, forgatását, stílusát, rétegét és színét. Egy visszavonási lépés.

A már bekezdésszöveg, az üres szöveg és a kijelölés többi objektuma érintetlen marad, és a parancs megmondja, hány van belőlük.

### NCOPY

Objektumokat másol egy blokkhivatkozásból vagy egy összekapcsolt rajzból a rajzba, semmit nem bontva szét. `Pick an object inside a block reference or a linked drawing`: a legközelebbi objektum ott másolódik, ahol látszik, bármilyen mélyen legyen beágyazva; további kattintás, majd {{key:Enter}}. Ezután `Base point to move the copies`: az {{key:Enter}} a helyén hagyja őket, vagy adjon egy bázispontot és egy második pontot. Az egész parancs egy visszavonási lépés.

A másolat azt a réteget kapja, amelyen látszik: a blokkon belüli 0 rétegű objektum abba a hivatkozás rétegére kerül, amelyben ült, és a ByBlock szín a hivatkozás színe lesz. Egy összekapcsolt rajzból a `Plan|Walls` réteg `Plan$0$Walls` lesz (a névet a kapcsolat adja), az összekapcsolt réteg színével, vonaltípusával és vonalvastagságával. Egy attribútum értéke szövegként másolódik. A zárolt rétegen lévő blokkhivatkozások nem kijelölhetők.

### FLATTEN

Az kijelölt objektumok magasságát (Z) és vastagságát 0-ra állítja. `Select objects to flatten`, {{key:Enter}}. Ezen felül a kijelölés által használt blokk-definíciókon belüli objektumokat is lapossá teszi (és a bennük lévő blokkokat is), így ezeknek a blokkoknak minden hivatkozása megváltozik; az összekapcsolt rajzok érintetlenek maradnak. Egy visszavonási lépés; megmondja, hány objektum változott, és ha egyiknek sem volt magassága vagy vastagsága, ezt jelzi.

Amit a CadCraft egy 2D-rajzban a harmadik dimenzióból megtart: magasság a körökön, íveken, ellipszisekben, pontokon, szövegen, blokkhivatkozásokon, sraffozásokon, vezetővonalakon és polivonalakon (a magasságuk), egy magasság a vonal mindkét végén, és vastagság a vonalakon, köröknél, íveken, polivonalakon, pontokon és szövegen, ahogy a fájlban voltak. A {{cmd:FLATTEN}} pontosan ezeket törli. Nem érinti a 3D lap 3D-modelljét, a 3D-felületeket vagy testeket, és a fájl megnyitásakor a döntött síkban rajzolt objektum már a rajzsíkba került.

### BREAKLINE

Vonalat rajzol törésjellel, egy levágott nézethez. Megmondja a jelenlegi méretet és nyúlást, majd `First point of the break line` (vagy előbb a `Size` / `Extension` a módosításukhoz), `Second point`, és `Where the break symbol sits`: kattintson a vonal mentén, vagy az {{key:Enter}} a középre. Az eredmény egy polivonal az aktuális rétegen: a vonal, amely minden pontján a nyúlással túlnyúlik, egy Z alakú vonással, amely akkora magas, mint a méret, és fele olyan hosszú.

A `Size` és az `Extension` a beállításaiként megmarad (a méret kezdetben a méretezési szövegmagasság és a méretezési lépték kétszerese; a nyúlás a méret fele). Az {{key:Enter}} megismétli a parancsot.

### AUDIT

Megvizsgálja a megnyitott rajzot sérülésekért, és megjavítja. Az {{cmd:AUDIT}} minden objektumot végignéz a modellben, a lapokon és blokkokon belül, és a rétegtáblát, majd fajtánként felsorolja, amit talál:

- nem véges vagy abszurdan nagy számok;
- méret nélküli objektumok: hossz nélküli vonal, sugár nélküli kör, egy pontnál kevesebb polivonal, betűk vagy magasság nélküli szöveg, nulla léptékű blokkhivatkozás;
- olyan rétegen lévő objektumok, amely nincs a rajzban; hiányzó blokkra mutató hivatkozások; a rajzban nem szereplő szöveg- és méretezési stílusnevek és vonaltípusnevek;
- önmagukat tartalmazó blokkok, közvetlenül vagy más blokkokon keresztül;
- azonos azonosítót, kulcsot vagy fájlhivatkozást megosztó objektumok;
- olyan méretezések, amelyeknek nincsenek mért pontjaik, és olyan sraffozások, amelyeknek határa nem zárt körvonal.

Ezután kérdi: `Fix them? [Yes/No]`. A `No` semmit nem változtat. A `Yes` egy visszavonási lépésben mindent megjavít: ami nem rajzolható, eltávolítódik (rossz számok, méret nélküli, hiányzó blokk, sérült méretezés, használhatatlan határú sraffozás, az a hivatkozás, amely egy blokkkörön zárja a kört); a hiányzó réteg létrejön; az ismeretlen stílus- és vonaltípusnevek visszatérnek az alapértékre; egy megosztott kulcs új kulcsot kap. Kiírja, hány objektum törlődött, és hány lett megjavítva. Ugyanezek a megállapítások megjelennek a Problémák panelen, mindegyik a saját {{ui:Javítás}} gombjával.

Nem utasít el semmit, de csak azt ellenőrzi, amit a CadCraft maga rajzol: a más programoknak tárolt adatokat (3D-testek, OLE-objektumok) nem nyitja meg.

### RECOVER

Megnyit egy sérült DXF- vagy DWG-fájlt. A {{cmd:RECOVER}} kéri a fájlt, beolvassa azt, amit lehet, ahelyett hogy visszautasítaná a fájlt, felsorolja, amit kihagyott vagy feltételezett, majd ellenőrzi és megjavítja a rajzot, ahogy az {{cmd:AUDIT}} teszi `Yes`-szel.

- DXF: azok a sorok, amelyek nem egy kód–érték pár részei, addig maradnak ki, míg a párok újra nem állnak össze; a befejezés nélküli szakasz le van zárva; a félbevágott fájl addig olvasódik, ahol megszakadt; a félbevágott bináris DXF az utolsó teljes értékig olvasódik. Ha egy szakasz, blokk vagy objektum továbbra sem olvasható, kimarad és meg van nevezve, az olvasás pedig tovább megy mellette.
- DWG: azok az objektumok, amelyek ellenőrzéseken nem mennek át, vagy nem dekódolhatók, kimaradnak, az elveszett objektumlistát pedig az objektumadatok bejárásával építi újra.

A lemezen lévő fájl nem változik. A helyreállított rajz mentetlenül nyílik meg: mentse új néven. Az a fájl, amelyből semmi nem olvasható, az okkal együtt elutasításra kerül.

### LEGACYTEXT

Régi, 8 bites vietnami betűtípusokkal gépelt szöveget Unicode-dá alakít. Rövid nevek: `TEXTTOUNICODE` és `VNTEXT`.

A régebbi vietnami rajzok szövegét nyugati karakterekként tárolják, amelyeket csak a betűtípus alakít vietnamivá: a TCVN3 szöveg az ABC betűtípusokban (`.VnTime`, `.VnArial`, és a nagybetűs, `H`-ra végződő nevű betűtípusok), a VNI szöveg a VNI-betűtípusokban (`VNI-Times`). A CadCraft ezt a szöveget már a rajz megnyitásakor úgy mutatja, ahogy olvasható, a szövegstílusa, az objektum vagy a bekezdésszövegen belüli futás betűtípusa alapján; a fájl továbbra is a régi karaktereket tartalmazza.

A {{cmd:LEGACYTEXT}} megmondja, hány szöveget talált az egyes kódolásokban, és kérdi: `Convert … to Unicode?`. A `Yes` mindegyiket újraírja (modell, lapok, blokkok, attribútumértékek és -definíciók), és a szövegstílusoknak Unicode-betűtípust ad (Times New Roman, Arial vagy Courier New a régi betűtípus fajtája szerint), egy visszavonási lépésben. A bekezdésszövegen belüli formázás megmarad.

Ha egyetlen szöveg sem használ ismert betűtípust (a stílusról elveszett a betűtípus neve), kérdi: `Read selected texts as [Tcvn3/Vni/None]`: válassza ki a kódolást, és jelölje ki a szövegeket. A már Unicode-szöveg érintetlen marad. A méretezési szöveg felülírásai és a többszörös vezetővonal szövege nem alakul át.

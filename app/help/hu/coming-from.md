---
title: Más tervezőprogramból érkezve
summary: Hogyan képeződnek le a megszokott parancsok, billentyűk és szokások a CadCraftban, és a különbségek, amelyek a tapasztalt tervezőket meglepik.
keywords: átállás, különbségek, áttérés, szokások, álnevek, dinamikus beviteli mező, pickfirst, pickadd, qsave, saveas, mentés másként, mtext, ctb, polárkövetés, xref, billentyűparancsok, megszokott, copyclip, pasteclip, pasteorig, copybase, vágólap
from: b58688e7
---

Ha használta az AutoCAD-et, vagy azonos modellen alapuló programot, a legtöbb, amit tud, itt is működik: a parancssor, az olyan álnevek, mint az `L`, `C`, `TR` és `O`, az Enter vagy a Space az ismétléshez, az ablakos és keresztező kijelölés, az objektumfogások az F3-on, az ortogonális mód az F8-on, a modelltér elrendezésekkel és nézetablakokkal. Ez az oldal felsorolja, mi működik közvetlenül, majd azokat a különbségeket, amelyek meglepik az embereket. Akkor is olvassa el a második felét, ha az elsőt csak átfutja.

## Ami közvetlenül megfelel

| Megszokás | A CadCraftban |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Ugyanazok a parancsok, ugyanazok az álnevek |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Ugyanaz |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Ugyanazok a méretezési parancsok |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` a parancssorba írva | Ugyanaz, új méretekhez |
| `B` blokk készítéséhez, `I` beszúráshoz, `PU` tisztításhoz | Ugyanaz (a tisztítás csak a használatlan blokkokat törli) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z`, majd `E` vagy `W` | Ugyanaz |
| `_LINE` vagy `-LAYER` beírása szkriptből vagy megszokásból | Az elöl álló `_`, `-`, `.` vagy `'` figyelmen kívül marad |
| Enter vagy Space üres parancssornál | Megismétli az utolsó parancsot, ugyanúgy |
| Az Esc megszakít; még egy Esc törli a kijelölést | Ugyanaz |
| `@dx,dy`, `@d<a`, a keleti iránytól óramutató-ellenében beírt szögek | Ugyanaz |
| Ablak balról jobbra, keresztező jobbról balra, kattintás-kattintás; nyomja le és húzza a lasszóhoz, a Space az ablak / keresztező / kerítés között vált (LASSOMODE) | Ugyanaz |
| Előbb a kijelölés, azután a parancs (főnév-ige) | Ugyanaz; a befejezett parancs törli a kijelölést |
| `ALL` és `L` az objektumok kiválasztásánál | Ugyanaz |
| Shift+kattintás eltávolít a kijelölésből | Ugyanaz. A beállítások szerint a kattintás lecserélheti a kijelölést, ahogy a PICKADD 0 teszi: lásd [CadCraft-beállítások](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Ugyanazok a parancsok és billentyűk; a beillesztés a másolatot a bal alsó sarkánál helyezi el, ahogy a PASTECLIP teszi |
| F3 objektumfogás, F7 rács, F8 ortogonális mód | Ugyanazok a billentyűk |
| Dupla kattintás a görgőn: nagyítás a teljes kiterjedésre | Ugyanaz |
| A tükrözött szöveg olvasható marad | Ugyanaz (mint a MIRRTEXT 0 esetén) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Ugyanaz; Mac gépen a Command is működik |

A [Parancshivatkozás](topic:commands) felsorolja az összes parancsot és álnevet.

:::tip
Ha tetszik az AutoCAD szalagja, a {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Menük, billentyűk és egér}} alatt válassza a {{ui:Klasszikus rajzoló}} menüstílust: a Kezdőlap, Beszúrás, Jegyzetek, Parametrikus, Nézet, Kezelés és Kimenet lapok ugyanazon a parancssoron, a középső gomb pedig panorámázik, a jobb kattintás pedig Enter. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse).
:::

A [parancstérkép](topic:command-map) felsorolja a CadCraft összes parancsát a rövid nevekkel, a [puskalap](topic:cheat-sheet) pedig a 40 leggyakrabban használt parancsot (egyoldalas PDF-ként is).

## Különbségek, amelyek meglepik az embereket

### A beírt pontok abszolútak

Ha a dinamikus beviteli mező be van kapcsolva, a másik program a második pontnál beírt `100,0` értéket relatívként kezeli. **A CadCraft parancssora nem:** ott az `x,y` mindig a kezdőponttól mérődik. A {{ui:Dyn}} ({{key:F12}}) bekapcsolt állapotában használja helyette a mezőit: távolság, {{key:Tab}}, szög. Az `@100,0` az „100-zal az utolsó ponttól jobbra” jelentésű, vagy mozgassa a keresztet a megfelelő irányba, és csak a `100` számot írja be.

### A Shift kihagyja a fogásokat; az ortogonális módot nem kapcsolja be

A Shift nyomva tartása kattintáskor az adott kattintásnál figyelmen kívül hagyja az objektumfogásokat. Nem kapcsolja át ideiglenesen az ortogonális módot. Használja az F8 billentyűt vagy az {{ui:Ortho}} gombot.

### A jobb kattintás mindig Enter

Nincs helyi menü. A jobb kattintás a rajzon Enter: befejez egy parancsot, lezárja a kijelölést, vagy megismétli az utolsó parancsot. Fogópont-mozgatás vagy kijelölőkeret közben ehelyett megszakít. A panorámázáshoz húzzon a jobb gombbal.

### Nincs panorámázás a szóközzel

A Space az Enter, így a szóköz nyomva tartása és húzása nem panorámáz. Panorámázzon a középső vagy a jobb gombbal, vagy a görgővel kicsinyítsen, majd másik helyen nagyítson vissza.

### Vágás és nyújtás

A vágás és a nyújtás gyorsmódban indul: minden látható objektum vágóél vagy határ, a mutató alatti rész mutatja, mi fog eltűnni, a húzott útvonal minden általa keresztezett darabot levág, az az objektum pedig, amelyet semmi nem keresztez, törlődik. A {{key:Shift}} a vágás és a nyújtás között vált. Az `O` a Standard módba vált (előbb válassza ki az éleket), az `F` és a `C` a kerítés és a keresztező, az `E` az EDGEMODE, az `R` törlést jelent. Nincs `P` (Vetítés) opció: a CadCraft a rajz síkjában vág.

### Lekerekítés és letörés

A {{cmd:FILLET}} és a {{cmd:CHAMFER}} az ismert opciókat fogadja el: Visszavonás (U), Polivonal, Rádiusz (vagy Távolság (D), Szög (A) és Módszer (E)), Vágás (T) és Többszörös (M), valamint a {{key:Shift}}+kattintás éles sarokhoz. Polivonal és vonal közötti lekerekítés az ívet külön objektumként veszi fel, nem egyesíti a polivonalba, és az ívszakasz melletti polivonal-sarkok változatlanok maradnak.

### Bekezdéses és soros szöveg

A `T`, `MT` és `MTEXT` helyben begépelt bekezdéses szöveg, szélességgel, sorközzel és igazítással; a `DT` és `DTEXT` az ismert soros szöveg. Nincs szövegstílus és oszlop, és még nem lehet szövegen belüli formázást beírni (félkövér, egymás alá írt törtek); a fájlból érkező formázás megmarad, megrajzolódik és mentődik (lásd: [Szöveg és feliratok hozzáadása](topic:text#formatting-inside-paragraph-text-from-other-programs)). Minden Helvetica-jellegű betűtípussal rajzolódik.

### A mentés „másolat letöltését” jelent

A {{key:Mod+S}}, a `SAVE` és a `QSAVE` a rajz formátumában tölt le egy másolatot: a megnyitott DWG DWG-ként mentődik, a DXF DXF-ként. A böngészőben semmi nem íródik felül a helyén, a megnyitott fájlok pedig soha nem változnak. A CadCraft Studióban a {{key:Mod+S}} visszaírja a megnyitott fájlba.

A `SAVEAS` ({{key:Mod+Shift+S}}) egy kis párbeszédpanel, nem fájlböngésző: válassza a {{ui:DWG}} lehetőséget (a hozzá tartozó {{ui:Verzió}}val, AutoCAD 2000-től 2018-ig), a {{ui:DXF R12}} vagy a {{ui:DXF 2000}} lehetőséget, és kattintson a {{ui:Mentés}} gombra. A letöltés helyét a böngésző dönti el. A `DXFOUT` mindig DXF R12-t tölt le.

A megnyitott DWG abban a verzióban mentődik, amelyben érkezett; az új rajz AutoCAD 2000 formátumban mentődik, hacsak nem választ mást. A rajzlapok, méretek és sraffozási minták megmaradnak. Lásd: [Fájlok: mi nyílik meg, mi menthető](topic:files#saving).

### Rétegek: egyszerűbben

- Minden rétegmódosítás (be, befagyasztás, zárolás, szín, plottolás, vonaltípus, vonalvastagság, aktuális réteg) egy visszavonási lépés.
- A kikapcsolás és a befagyasztás a CadCraftban azonos hatású.
- Ha egy rajz egy nézetablakban befagyaszt rétegeket, ott befagyasztva maradnak: a képernyőn, a plottolásokban és DWG vagy DXF mentésekor.
- Az a nézetablak, amely egy réteget a saját színével, vonaltípusával, vonalvastagságával vagy átlátszóságával mutat, ezt továbbra is megteszi a képernyőn, a plottolásokban és a mentett DWG-ben (a DXF megtartja a réteg saját beállításait; a mentés ezt jelzi). Ezeknek nézetablakonkénti módosítása még nincs kész.
- Nincs rétegtulajdonság-kezelő és nincsenek réteg-állapotok; a {{cmd:RENAME}}, {{cmd:LAYMRG}} és {{cmd:LAYDEL}} átnevezi, egyesíti és törli a rétegeket. A vonaltípusokat és vonalvastagságokat a jobb oldali panelen állítja be (lásd: [Vonalvastagságok és vonaltípusok](topic:units-papers-scales#line-weights-and-linetypes)); a {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} és {{cmd:LAYMCUR}} kijelöléssel működik.
- A DXF R12-be mentés a rétegneveket nagybetűvel írja. A DWG úgy tartja meg, ahogy beírta.

### Méretezési stílusok

A `DIMSTYLE` a nevezett stílusok kezelőjét nyitja meg (új, módosítás, aktuálissá tétel, összehasonlítás, alkalmazás). A `DIMSCALE` és a többi beállítás továbbra is azt változtatja, amit az új méretek használnak; minden méret megtartja a saját méreteit, amelyeket a Tulajdonságok panelen is módosíthat. Az aktuális stílus nincs elmentve a fájlba. A méretek a rajz hosszformátumát követik (tizedes, vagy láb és hüvelyk a {{cmd:UNITS}} paranccsal), vagy a saját {{ui:Formátum}} értéküket. Lásd: [Méretek beállítása](topic:dimension-settings).

### A plottolás egyszerűbb

A plottolási stílustáblák színek szerint működnek, ahogy a CTB-fájlok: a Monokróm, Színes és Szürkeárnyalatos be van építve, saját táblát is készíthet, és minden rajzlap megtartja a saját tábláját. A CTB-fájlok olvasása a közzétett leírás alapján készült, és csak általunk készített fájlokon próbálták ki; az elnevezett plottolási stílustáblák (STB) és az oldalbeállítások még nincsenek kész. A vonalak a vonalvastagságukkal nyomtatódnak, a többi egy tollszélességgel. A rajzlapok 1:1 arányban plottolódnak a saját papírjukra; a modell választott léptékben vagy illesztve. Lásd: [Plottolás PDF-be](topic:plot-pdf).

### Munka nézetablakon belül

Ahogy megszokta: a nézetablakon belüli dupla kattintással (vagy a {{cmd:MSPACE}} beírásával) a modellen dolgozhat annak nézetén keresztül, a nézetablakon kívüli dupla kattintással (vagy a {{cmd:PSPACE}} parancscsal) visszatér a rajzlapra. Belül a panorámázás és a nagyítás a nézetablak tartalmát változtatja, hacsak annak megjelenítése nincs zárolva; ilyenkor a rajzlapot mozgatják. A rajz alatti fülre kattintva szintén kilép a nézetablakból. Lásd: [Munka a modellen nézetablakon keresztül](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### A követés és a dinamikus beviteli mező igen, a rácsfogás még nem

A rács csak nézésre való; a pontok nem fognak rá (nincs F9 fogási mód). A polárkövetés ({{key:F10}}, a lépésköz a {{cmd:POLARANG}} paranccsal állítható) és az objektumfogás-követés ({{key:F11}}: egy fogáspontra állva veszi fel azt) úgy működik, ahogy ismeri; lásd: [Fogás objektumokhoz](topic:object-snaps#polar-tracking). A dinamikus beviteli mező ({{key:F12}}) a kereszt mellett mutatja a távolságot és a szöget (vagy az X és Y értéket); lásd: [Koordináta- és távolságbevitel](topic:coordinate-entry#dynamic-input).

### Láb és hüvelyk

Válassza a {{ui:Hosszformátum}} {{ui:Építészeti}} vagy {{ui:Mérnöki}} értéket (vagy írja be a {{cmd:UNITS}} parancsot), és a hosszúságokat úgy írja be, ahogy megszokta: `12'6"`, `12'6-1/2"`. Törtek elé kötőjelet írjon, nem szóközt: a {{key:Space}} az {{key:Enter}}. A {{ui:Mértékegységek}} értékét is állítsa {{ui:Hüvelyk}}-re, hogy a rajzlapok és plottolások építészeti léptékeket kínáljanak. A formátum a mentett DWG- és DXF-fájlokban megmarad. Lásd: [Láb és hüvelyk](topic:units-papers-scales#feet-and-inches-and-fractions).

### A másolás és beillesztés a CadCraftban marad

A {{key:Mod+C}}, {{key:Mod+X}} és {{key:Mod+V}} objektumokat másol, vág és illeszt be egy rajzon belül, rajzok között és ugyanazon böngészőben lévő CadCraft-lapok között. A vágólap a CadCraft saját vágólapja: CadCraft-objektumot nem illeszthet be más programba, és más programból származó objektumot sem a CadCraftba. Más mértékegységű rajzból való beillesztés nem méretez át: utána használja a {{cmd:SCALE}} parancsot. A {{key:Mod+D}} a mutatóval együtt mozgó kettőzés, ez a CadCraft kiegészítése. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

### Böngészőbillentyűk, amelyeket nem használhat

Egy weboldal nem veheti el a böngészőtől a {{key:Mod+N}}, {{key:Mod+W}} vagy {{key:Mod+T}} billentyűket: ezek ablakokat és lapokat nyitnak és zárnak. Használja az {{ui:Új}} gombot, vagy írja be a `NEW` parancsot. Lásd: [Billentyűk, egerek és érintőpadok](common:keys).

## Parancsok, amelyek még nincsenek itt

A {{cmd:TABLE}} még nincs elkészítve. Beírása ezt írja ki: „Ismeretlen parancs”. (A {{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} és {{cmd:XREF}} elkészült.) A [Még nincs elkészítve](topic:not-built-yet) felsorolja, mit tegyen helyette most.

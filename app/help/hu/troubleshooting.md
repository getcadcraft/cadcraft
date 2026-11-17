---
title: Hibaelhárítás
summary: A CadCraft által megjelenített üzenetek és a felmerülő problémák, mindegyikhez az ok és a megoldás.
keywords: probléma, hiba, nem működik, üzenet, nem nyitható meg, ismeretlen parancs, nem történik semmi, elakadt, billentyűk nem működnek, üres, hiányzik, javítás
from: 8299b222
---

## Fájlok megnyitása

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| „A CadCraft DWG- és DXF-rajzokat nyit meg. „…” egyik sem.” | A fájl nem `.dwg` vagy `.dxf`. | Nyissa meg magát a rajzfájlt. PDF-et be lehet hozni (a Megnyitás kérdezi: importálás vagy csatolás, lásd [PDF-alátétek](topic:pdf-underlay)); képeket az `IMAGEATTACH` paranccsal lehet beszúrni. |
| „Ez a bináris DXF egy objektum közepén ér véget: a fájl csonka vagy sérült.” | A bináris DXF a vége előtt megáll. | Írja be: RECOVER a beolvasható tartalom megnyitásához, vagy kérje újra a fájlt. |
| „Ez a fájl nem olvasható DXF (hibás csoportkód a(z) … sorban).” | A DXF sérült, vagy valójában nem DXF. | Kérje újra a fájlt, vagy kérjen DWG-t. |
| „Ezt a rajzot nem lehetett beolvasni. Lehet, hogy sérült, vagy olyan verzióban mentették, amelyet az olvasó még nem kezel (…).” | A DWG-olvasó nem tudta beolvasni. | Kérje a DWG-t egy régebbi verzióban mentve, vagy DXF-et. |
| „Ez a rajz AutoCAD R11 / R12 (DWG AC1009), régebbi, mint amit a CadCraft olvas …” | A Release 12 és korábbi DWG-fájlok olyan formátumot használnak, amelyet a CadCraft nem olvas. | Abban a programban, amelyben készült, mentse DXF-ként (bármely verzióban) vagy újabb DWG-ként, és azt nyissa meg. A CadCraft saját Mentés másként funkciója a DXF R12 formátumot is kínálja azoknak a programoknak, amelyek ezt a régi formátumot kérik. |
| „Nem sikerült megnyitni …”, hálózati üzenettel, az első DWG-nél | A DWG-olvasót nem lehetett letölteni: nincs kapcsolat, a CadCraft nincs offline használatra mentve, vagy megszakadt a kapcsolat. | Csatlakozzon az internetre, és próbálja újra, vagy nyisson meg DXF-et. Kattintson a {{ui:Mentés offline használatra}} gombra, és várja meg az „Offline kész” üzenetet, hogy a DWG-fájlok legközelebb offline is megnyíljanak. Lásd [Munka offline állapotban](common:offline). |
| Az offline gomb szövege: „Nem sikerült menteni” | Néhány fájl nem töltődött le. | Ellenőrizze a kapcsolatot, és kattintson a gombra újra. |
| Az offline gomb szövege: „Az offline mód nem érhető el” | A privát ablakok és egyes felügyelt számítógépek nem tudnak offline másolatot tárolni. | Használjon normál ablakot, vagy maradjon online. |
| A CadCraft nem nyílik meg kapcsolat nélkül | Ebben a böngészőben nem lett offline használatra mentve, vagy a böngésző törölte. | Legközelebb, amikor online lesz, kattintson a {{ui:Mentés offline használatra}} gombra, és várja meg az „Offline kész” üzenetet. |
| A rajz megnyílik, de egyes részek hiányoznak | A CadCraft még nem tud rajzolni bizonyos objektumokat, vagy a fájlban ki- vagy lefagyasztott rétegek vannak. | Olvassa el a bal panelen az „Erről a fájlról” részt. Ellenőrizze a {{ui:Rétegek}} panelt. |
| A szöveg két sorba törik | A CadCraft Helvetica jellegű betűtípussal rajzol, amely szélesebb, mint egyes CAD-betűtípusok. | Rövidítse le a szöveget a {{ui:Tulajdonságok}} panelen, vagy fogadja el a plusz sort. |
| A kör ellipszisnek látszik, vagy a tükrözött szöveg helyesen olvasható | Az objektumot megdöntött síkban rajzolták, vagy alulról látták abban a programban, amely a fájlt készítette. A CadCraft felülről látva mutatja, ahogy az adott program alaprajz-nézete is; a szöveg olvasható marad. | Nincs teendő. Ha a másik program módján szeretné látni, kérje a rajz laposított változatát, vagy az objektumok felülről rajzolt változatát. |
| Egy blokk, kör vagy méretvonal nem ott van, ahol a fájlt készítő programban | Olyan rajzeset, amelyet a CadCraft rosszul olvas. | Jelezze nekünk a Discordon, lehetőleg a fájllal, ha meg tudja osztani. |

## A parancssor

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| „Ismeretlen parancs: „…”. A listához írja be: HELP.” | Nincs ilyen nevű parancs vagy alias. | Írja be: `HELP`, vagy nézze meg a [Parancsreferenciát](topic:commands). Néhány ismerős parancs [még nincs elkészítve](topic:not-built-yet). |
| „Nincs ilyen parancs” a parancssor mellett, gépelés közben | Amit gépel, még nem egyezik semmivel. | Folytassa a gépelést, vagy ellenőrizze a helyesírást. |
| „Pont vagy beállítás szükséges.” | Amit gépelt, nem pont és nem beállítás. | Ellenőrizze a formátumot: `x,y`, `@dx,dy`, `@d<a`, vagy egyetlen szám. Lásd [Koordináta- és távolságbevitel](topic:coordinate-entry). |
| „Pozitív számot vagy két pontot igényel.” | Egy távolság negatív volt, vagy nem szám. | Írjon be pozitív számot, vagy kattintson két pontra. |
| „Szöget fokban vagy két pontot igényel.” | A szög nem szám volt. | Írja be a fokokat egyszerű számként. |
| „Számot igényel.” | Számot vártunk. | Csak számjegyeket írjon be. |
| „Érvénytelen beállítási kulcsszó.” | A betűk nem egyeznek egyik beállítással sem. | Írja be a szögletes zárójelben látható nagybetűket. |
| `*Mégse*` | Az {{key:Esc}} billentyűt nyomta meg, vagy az {{key:Enter}} billentyűt olyan helyen, ahol pontot kellett volna megadni. | Indítsa újra a parancsot. |
| A gépelés nem jut el a parancssorba | Egy panel vagy párbeszédpanel mezőjében van a kurzor. | Nyomja meg az {{key:Enter}} vagy az {{key:Esc}} billentyűt, vagy kattintson a rajzra. |
| A parancs olyan objektumokat használ, amelyeket nem Ön jelölt ki | Kijelölték őket, mielőtt elindította a parancsot. | Nyomja meg az {{key:Esc}} billentyűt a parancs előtt. |
| Egy vonal váratlan helyre került | Az `x,y` abszolút. | Relatív pontokhoz használja az `@dx,dy` formát. |
| „Előbb fejezze be vagy szakítsa meg az aktuális parancsot (Esc).” | A {{key:Mod+S}} billentyűt nyomta meg, miközben parancs futott. | Nyomja meg az {{key:Esc}} billentyűt, majd mentsen. |
| „Nem lehet DWG-ként menteni (AutoCAD 2000): … Próbálja a Mentés másként, majd a DXF lehetőséget.” | A rajz valamely eleme nem írható DWG-ként. | Nyomja meg a {{key:Mod+Shift+S}} billentyűkombinációt, válassza a {{ui:DXF R12}} lehetőséget, és kattintson a {{ui:Mentés}} gombra. |
| „Nincs mentve.” | A {{ui:Másolat mentése másként}} párbeszédpanelt a {{ui:Mégse}} gombbal vagy az {{key:Esc}} billentyűvel zárta be. | Nyomja meg újra a {{key:Mod+Shift+S}} billentyűkombinációt, és kattintson a {{ui:Mentés}} gombra. |

## Szerkesztés

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| Egy objektum nem jelölhető ki | A rétege zárolva, kikapcsolva vagy lefagyasztva van; vagy lapon van, és az a nézetablakban lévő modell. | Oldja fel a réteget, vagy lépjen a {{ui:Modell}} lapra. |
| „Ott nincs semmi.” | Nincs objektum a kattintás alatt. | Nagyítson, és magára a vonalra kattintson. |
| „Ott nem metsz semmit az az objektum.” | A {{cmd:TRIM}} nem talált olyan objektumot, amely metszené a kiválasztott részt. | Ellenőrizze, hogy a vágóvonal valóban metszi-e. |
| „Ezt az objektumot nem lehet vágni.” | A vágás vonalakon, íveken, köröken és polivonalakon működik. | Előbb bontsa fel a blokkokat, vagy törölje és rajzolja újra. |
| „Nincs határ abban az irányban.” | A {{cmd:EXTEND}} nem talált mit elérni. | Azon a végén kattintson, amelyet meg kell hosszabbítani. |
| „Ezt az objektumot nem lehet eltolni.” | Az eltolás vonalakon, íveken, köröken és polivonalakon működik. | Előbb bontsa fel, vagy rajzoljon párhuzamos vonalat. |
| „Ilyen messzire nem lehet eltolni.” | Az eltolás a formát belülről kifelé fordítaná. | Használjon kisebb távolságot. |
| „A rádiusz túl nagy.” vagy „A távolság túl nagy.” | A lekerekítés vagy letörés túlmenne egy vonal végén. | Állítson be kisebb rádiuszt az `R`, vagy kisebb távolságokat a `D` paranccsal. |
| „Csak egy nyitott polivonal első vagy utolsó szakasza vágható vissza.” | A sarok a polivonal közepébe vágna. | Jelöljön ki két egymás melletti szakaszt a polivonalból, vagy használja az `P` opciót minden sarokhoz. |
| „Jelöljön ki egy második, másik vonalat.” | A második kattintás ugyanaz a vonal volt, vagy nem vonal. | Válasszon másik vonalat. |
| „Csak polivonalak, blokkhivatkozások és méretvonalak bonthatók fel.” | A kijelölésben nem volt bontható elem. | Jelöljön ki polivonalat, blokkhivatkozást vagy méretvonalat. |
| „Ez az aktuális réteg. Előbb tegyen másik réteget aktuálissá.” | Az aktuális réteget próbálta kikapcsolni. | Kattintson egy másik réteg nevére, majd kapcsolja ki ezt. |
| „Már van ilyen nevű réteg: …” | A rétegneveknek egyedinek kell lenniük. | Válasszon másik nevet. |
| „Nincs visszavonható művelet.” | Nincs több visszavonható művelet, vagy új rajzot indított, illetve rajzot nyitott meg (ez törli az előzményeket). | — |

## Méretek és blokkok

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| A méretvonal szövege és nyilai aprók vagy óriásiak | A méretek rajzegységekben vannak; az általános lépték nem illik a rajzhoz. | Állítsa be a {{cmd:DIMSCALE}} értékét a plottolási léptékre; lásd [Méretvonal-méretek beállítása](topic:dimension-settings). |
| „Adjon meg egy pontot a mérni kívánt szögön belül.” | A szögméret helye egy szárra esik. | Kattintson a szögön belül. |
| „Ezek a vonalak párhuzamosak.” | A párhuzamos vonalak között nincs szög. | Válasszon két olyan vonalat, amely találkozik. |
| „Válasszon vízszintes-függőleges vagy párhuzamos méretet.” | A {{cmd:DIMCONTINUE}} vagy a {{cmd:DIMBASELINE}} parancsnak kezdőpont kell. | Válasszon vízszintes-függőleges vagy párhuzamos méretet. |
| „Ennek a rajznak még nincs blokkja: az `F` fájlból szúr be, az `L` a könyvtárból …” | A rajznak nincsenek saját blokkjai. | Írja be az `F` vagy az `L` betűt, vagy készítsen blokkot a {{cmd:BLOCK}} paranccsal. |
| „Nincs ilyen nevű blokk: „…”.” | A név hibás. | Az üzenet felsorolja a meglévő blokkokat. |
| „A blokk neve nem kezdődhet * karakterrel, és nem használhatja …” a karakterek listájával | A névben olyan karakter van, amelyet a blokkok nem használhatnak. | Használjon betűket, számjegyeket, `-` és `_` karaktereket. |
| „Egy blokk nem tartalmazhatja önmagát.” | A kijelölés tartalmazza a készülő blokk hivatkozását. | Hagyja ki ezt a hivatkozást. |
| „Nincs kijelölt objektum, nem készült semmi.” | Az objektumok kijelölése előtt az {{key:Enter}} billentyűt nyomta meg. | Indítsa újra a {{cmd:BLOCK}} parancsot, és jelölje ki az objektumokat. |

## Lapok és plottolás

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| „A nézetablakok elrendezésen készülnek. Nyisson meg előbb egy lapfület (vagy készítsen egyet a LAYOUT paranccsal).” | A {{cmd:MVIEW}} a {{ui:Modell}} lapon. | Előbb kattintson egy lapfülre. |
| „Előbb nyissa meg az elrendezést a nézetablakkal.” | A {{cmd:VPVIEW}} a {{ui:Modell}} lapon. | Kattintson előbb a lapfülre. |
| Egy nézetablak léptéke tízszer rossznak látszik | A rajzegységek rosszak. | Állítsa be a {{ui:Mértékegységek}} értéket a {{ui:Jelenlegi beállítások}} alatt. |
| „Még nincs mit plottolni.” | A modell üres. | Rajzoljon valamit, vagy nyisson meg egy rajzot. |
| „Válassza ki a plottolandó ablakot.” | A {{ui:Egy ablak…}} lehetőség van kiválasztva, de nem jelölt ki ablakot. | Kattintson a {{ui:Kijelölés}} gombra, és jelöljön ki két sarkot. |
| „… nagyobb, mint a papír: a szélek le vannak vágva.” | A terület nem fér el ezen a léptéken. | Válasszon kisebb léptéket, nagyobb papírt, vagy a {{ui:Illesztés a papírhoz}} lehetőséget. |
| „A böngésző letiltotta az új lapot, ezért a PDF letöltődött.” | A felugró ablakok le vannak tiltva a webhelyen. | Nyissa meg a letöltött PDF-et, vagy engedélyezze a felugró ablakokat a webhelyen. |
| A karakterek „?” jelként nyomtatódnak | A PDF betűtípusaiban nincs hozzájuk betű (ritka jelek, hindi és más, összetett formázást igénylő írásrendszerek …), vagy a nagyobb betűtípust nem lehetett letölteni (offline). Az európai írásrendszerek, a cirill, görög, héber, arab, perzsa, urdu, thai, kínai, japán és koreai önmagukként nyomtatódnak. | Arab írású, thai, kínai, japán vagy koreai szöveghez plottoljon újra kapcsolattal. A többi írásrendszer még nincs elkészítve. |
| A szerkesztővonalak látszanak a PDF-ben | Ezek rétege plottolódik. | Kattintson a réteg nyomtatógombjára. |
| Minden vonal egyformán vastag | Vonalvastagságuk {{ui:Alapérték}}, ezért a párbeszédpanelen megadott tollszélességgel nyomtatódnak. | Adjon a rétegeknek vagy objektumoknak {{ui:Vonalvastagság}} értéket a jobb oldali panelen, vagy válasszon {{ui:Vonalvastagság}} értéket a párbeszédpanelen. A vonalvastagságok képernyőn való megjelenítéséhez nyomja meg az {{ui:LWT}} gombot az állapotsorban. |

## Billentyűk és a képernyő

| Tünet | Ok | Megoldás |
|---|---|---|
| Az F3, F7 vagy F8 hangerőt változtat, vagy a Mission Controlt nyitja meg | Mac funkcióbillentyűk. | Tartsa lenyomva az **fn** billentyűt, vagy használja az állapotsor gombjait. Lásd [Billentyűk, egerek és érintőpadok](common:keys). |
| Az F7 a szövegkurzor-böngészést kérdezi | A Firefox saját F7-használata. | Válassza a Nem lehetőséget; használja a {{ui:Rács}} gombot. |
| A {{key:Mod+N}} böngészőablakot nyitott | A böngésző tartja fenn ezt a billentyűt. | Kattintson a {{ui:Új}} gombra, vagy írja be: `NEW`. |
| A {{key:Mod+A}} a parancssor szövegét jelölte ki | A parancssornak volt kurzora. | Előbb kattintson egy objektumra, vagy a `Objektumok kijelölése` kérdésnél írja be: `ALL`. |
| A {{key:Delete}} nem töröl | A parancssornak van kurzora. | Írja be: `E`, majd nyomja meg az {{key:Enter}} billentyűt. |
| A jobb kattintás nem csinál semmit Mac trackpadon | A Control-kattintás egyszerű kattintásnak számíthat. | Kattintson két ujjal. |
| Trackpadon nem lehet panorámázni | Nincs középső gomb, és a szóköz nem panorámáz. | Húzzon két ujjal: a 2D-s nézet panorámázik (a csíptetés és az egér görgője nagyít). Vagy húzzon jobb gombbal lenyomva tartva. |
| Az első {{key:Esc}} kilépett a teljes képernyőről | A böngésző az Esc billentyűvel lép ki a teljes képernyőből. | Nyomja meg újra az {{key:Esc}} billentyűt a parancs megszakításához. |
| Az {{key:F1}} nem csinál semmit Macen | Az F1 fényerő-billentyű. | Tartsa lenyomva az **fn** billentyűt, vagy kattintson a {{ui:Súgó}} gombra. |
| A gépelés a súgó keresőmezőjébe kerül | A súgópanelnek van kurzora. | Kattintson a rajzra. |
| A rajz üres lett | Nagyon messzire nagyított. | Kattintson a {{ui:Kiterjedés}} gombra, vagy kattintson duplán a görgőre. |
| „Elhagyja az oldalt?” a fül bezárásakor | Nem mentett módosítások vannak. | Maradjon itt, mentse a {{key:Mod+S}} billentyűkombinációval, majd zárja be. |

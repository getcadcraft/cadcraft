---
title: Még nincs elkészítve
summary: Mit nem tud még ez a CadCraft-verzió, és mit lehet helyette most tenni.
keywords: hiányzik, korlátozások, ctb, stb, plottolási stílus, tulajdonságok, ucs, annotatív, dinamikus blokk, spline, ütemterv, nem támogatott, dwg mentés, sraffozás, nyújtás, sokszorozás, egyesítés, matchprop, törés, hosszabbítás, vonaltípus, vonalvastagság, xref, felhő, 3d, testek, logikai műveletek, többszörös vezetővonal, kitakarás
from: 87e56521
---

A CadCraft fejlesztés alatt áll. Ez az oldal felsorolja, mit nem tud a jelenlegi verzió, hogy ne kelljen keresgélni. Minden tétel megmondja, mit lehet helyette most tenni.

## Fájlok és mentés

| Még nincs elkészítve | Helyette most |
|---|---|
| A CadCraft-DWG ellenőrzése magában az AutoCAD-ben | Minden mentett változatot három másik program DWG-olvasója és a CadCraft is visszaolvas. Lásd: [Mit őriz meg és mit változtat a DWG](topic:files#what-a-dwg-keeps-and-changes). |
| DXF mentése a 2000-nél újabb verzióban | Mentse DXF 2000 formátumban, vagy DWG formátumban legfeljebb AutoCAD 2018 verzióig. |
| Felülírás a megnyitott fájlba a böngészőben | Minden mentés új másolatot tölt le; ha szeretné, a régi fájlt Önnek kell kicserélnie. A CadCraft Studióban a {{key:Mod+S}} visszaírja a megnyitott fájlba. |
| Felhős mentés és szinkronizálás gépek között | A CadCraft még nem küldi a mentéseit a felhőbe: a DWG- és DXF-fájlokat a saját mappáiban tartsa. A CadCraft Studióban a [Előzmények](topic:history) listázza a máshonnan mentett rajz felhőbeli változatait, valamint a saját mentéseinek másolatait ezen a számítógépen. |
| Átfedések, és külső hivatkozású rajz szerkesztése helyben | Csatolja a rajzot hivatkozásként, és a másik rajz módosítása után töltse be újra. A hivatkozás DWG-ként mentéskor is hivatkozás marad, a {{cmd:XCLIP}} pedig levágja. |
| Képek DXF-ben; a mögöttük lévőt takaró kitakarások | A DXF a képet a fájlnévvel ellátott keretként őrzi; a DWG képként – lásd: [Képek a rajzban](topic:pictures). A kitakarás a keretével látszik. |
| Többszörös vezetővonalak szerkesztése görbe vezetővonallal, a tartalom mindkét oldalán vezetővonallal, vagy egyenetlenül elforgatott vagy léptékezett blokkal | Úgy rajzolódnak, ahogy a másik program rajzolta, és egyben mozognak. Az egy kiállású, egyenes vezetővonalú többszörös vezetővonalak, szöveggel vagy blokkal tartalommal, szerkeszthetően jönnek be ({{cmd:MLEADEREDIT}}). |
| Más programok táblázataiban: blokkot tartalmazó cella, cellán belüli szövegformázás, a DXF-táblázat cellánkénti szegélyei és színei, oszlopokra tört táblázat | A táblázat szerkeszthető táblázatként nyílik meg ({{cmd:TABLEDIT}}), és addig úgy jelenik meg, ahogy a másik program rajzolta, amíg nem szerkeszti; ezután a CadCraft a cellái alapján rajzolja újra: egyszerű szöveg, képletek, például `=G3*H3` és `=Sum(I3:I9)`, igazítás és szövegmagasság. A blokkot tartalmazó cella ekkor üres. A nem módosított DWG-táblázat a hozzá tartozó cellaadatokkal mentődik vissza. |
| Valódi táblázatobjektum mentett DXF-ben | A DWG a táblázatot olyan táblázatként őrzi, amelyet más programok is szerkeszthetnek. A DXF a rajzoló blokként tárolja, a CadCraft saját nyilvántartásával: a CadCraft újra táblázatként nyitja meg; más programok blokkot látnak. A tükrözött vagy egyenetlenül léptékezett táblázat DWG-ben is így mentődik. |
| Másolás és beillesztés más programokkal | A CadCraft vágólapja a CadCraft-rajzok és ugyanazon böngésző lapjai között működik, más programokkal nem. Mentse DWG vagy DXF formátumban, és nyissa meg ott. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste). |

## Rajzolás és szerkesztés

| Még nincs elkészítve | Helyette most |
|---|---|
| A CadCraft által nem ismert sraffozási minták, és az átmenetes kitöltések pontosan úgy, ahogy más programok festik | A megnyitott sraffozások, amelyeknek a CadCraft által nem ismert mintájuk van, egy árnyalattal látszanak. Az átmenetes kitöltést ({{cmd:GRADIENT}}) a CadCraft minden típusnál a saját módján festi: fajtájában hasonló a más programokéhoz, de nem pontról pontra. A DWG 2004 és újabb formátum valódi átmenetes sraffozásként őrzi; DXF 2000 vagy DWG 2000 fájlban csak a CadCraft olvassa vissza, más programok tömör kitöltésként látják. A minták egy `.pat` fájlból töltődnek be, a sraffozás pedig a határához köthető, és követi azt: lásd: [Sraffozás és kitöltött területek](topic:hatch). |
| Alakzatokat vagy szöveget tartalmazó vonaltípusok, és vonalvastagságok mentett DXF R12-ben | A fájl vonaltípusában lévő alakzatok és szöveg kimaradnak a szaggatásból; a vonalvastagságok megtartásához mentse DWG formátumban. |
| Mintázott sraffozások mentett DXF-ben | Az R12-ben nincs sraffozás: körvonalukkal mentődnek. A minta megtartásához mentse DWG formátumban. |
| Más program által készített vagy szerkeszthető sokszorozások; sorok és szintek útvonal- és poláris sokszorozásban; útvonalgörbét követő sokszorozás | Az ASsociative módban ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; módosítás: {{cmd:ARRAYEDIT}}) készített sokszorozás a CadCraft saját számaival blokkhivatkozásként mentődik: más programok megjelenítik, mozgatják, plottolják és felbontják, de a darabszámait nem tudják módosítani; a más programban készült sokszorozás itt sima blokkhivatkozásként nyílik meg. Az útvonal-sokszorozás megtartja az útvonalának egy másolatát: a görbe utólagos szerkesztése nem mozgatja az elemeket. |
| Levágott rajzlap-nézetablakok más programokba és onnan | A {{cmd:VPCLIP}} paranccsal levágott, vagy {{cmd:MVIEW}} Sokszög (P) vagy Objektum módban készült nézetablak a CadCraft saját körvonalával mentődik: más programok a körülötte lévő téglalapként nyitják meg, a más programban levágott nézetablak pedig itt a téglalapjával nyílik meg. A DXF R12 csak a téglalapot őrzi meg. |
| A {{cmd:STRETCH}} keresztező sokszöggel | Használjon egy vagy több keresztező ablakot. |
| A {{cmd:PEDIT}} Csúcs szerkesztése (E) (csúcsonként a parancssorban) | Fogópontok, és a Tulajdonságok csúcsböngészője (minden csúcs, szélessége és domborulata). A PEDIT többi része elkészült: lásd: [Spline-ok és polivonalak](topic:splines). |
| A {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} és {{cmd:JOIN}} parancsok ellipszisen és spline-on | Bontsa fel a spline-t ({{cmd:EXPLODE}}), vagy írja át polivonallá ({{cmd:PEDIT}}), hogy ezek a parancsok használhatók legyenek. |
| Lekerekítés és letörés egy polivonal ívszakasza és a mellette lévő szakasz között; vonal polivonallá kapcsolása lekerekítéssel | Bontsa fel a polivonalat ({{cmd:EXPLODE}}), majd kerekítse le a darabokat. A lekerekítő ív külön objektumként kerül be. |
| Vágás és nyújtás: a Vetítés (P) opció (3D) és a polivonal ívvégének nyújtása | Vágjon a rajz síkjában; ívvég esetén bontsa fel a polivonalat, vagy rajzolja újra az ívet. |
| OLE-objektumok: beszúrásuk, futtatásuk vagy szerkesztésük; a DWG-ben a fájl szerinti helyükön megjelenítésük; metafájl-képek | Lásd: [Képek](topic:pictures#objects-from-other-programs-ole). A DXF objektumai bittérképükkel vagy feliratos kerettel látszanak; a DWG objektumai megmaradnak, de nem a helyükön rajzolódnak ki (az OLELIST felsorolja őket, és a képről másolatot helyez el oda, ahová megadja). |
| Formázókódok gépelése bekezdésszövegben (félkövér, egymás alá írt törtek, szavankénti színek); a Helvetica-stílusú betűtípuson kívüli betűk; hasábok | A fájlból érkezett formázás megmarad, megrajzolódik és mentődik (lásd: Szöveg); az új bekezdésszöveg egy magasságú és egy színű. |
| Bekezdésszöveg szerkesztése elforgatva | A szerkesztő vízszintesen nyílik meg; a szöveg megtartja az elforgatását. |
| Többszörös vezetővonalak mentése többszörös vezetővonal-objektumként DXF-ben | A DWG többszörös vezetővonalként őrzi őket, minden vezetővonallal és blokk tartalommal; a DXF azt őrzi, amit rajzolnak (vonalak, nyilak és a szöveg vagy a blokk). |
| Táblázatokban ({{cmd:TABLE}}): cellán belül tördelődő szöveg, részekre törő táblázatok, a táblázatstílus saját szövegstílusa és sorfajtánkénti színei párbeszédpanelen, adatkapcsolat táblázatkezelő fájllal (`.xlsx`) vagy olyan, amely maga olvassa a fájlt | A cella szövege csak ott törik, ahol Ön töri ({{key:Alt+Enter}}); szélesítse az oszlopot. A {{cmd:DATALINK}} egy `.csv` fájlt olvas, a {{cmd:DATALINKUPDATE}} pedig újra kéri a fájl kiválasztását. A {{cmd:DATAEXTRACTION}} és a {{cmd:COUNTTABLE}} olyan táblázatot készít, amely nem követi magától a rajzot: futtassa újra őket (élő darabszámlálás: {{cmd:BOMTABLE}}). |
| Attribútum-definíciók, amelyek mentett fájlban önmagukban maradnak (blokkon kívül), többsoros attribútumok | Mentés előtt tegye az attribútum-definíciókat blokkba: önmagukban a címkét mutató szövegként mentődnek. |
| Rétegállapotok (annak mentése és visszaállítása, mely rétegek be vannak kapcsolva) | Használja a {{cmd:LAYISO}} / {{cmd:LAYUNISO}} parancsot, vagy kapcsolja be és ki a rétegeket kézzel. |
| Ablak-sokszög és keresztező sokszög szerinti kijelölés, és mentett kijelölési szűrők | Kerítés (`F`), Ablak, Keresztező, Eltávolítás (`R`), és a {{cmd:QSELECT}} feltételhez. |

## A Tulajdonságok panel

| Még nincs elkészítve | Helyette most |
|---|---|
| Az illesztési lehetőségek rajzolása, és a szöveg vízszintes helyzete és a vonal alatti szöveg a vízszintes-függőleges és a párhuzamos méreteken kívüli méreteknél | Az objektumon megmaradnak, a Tulajdonságok panelen láthatók és mentődnek; a CadCraft a saját szabálya szerint helyezi el a szöveget. |
| Más programok által látott anyagok | A mentett fájl a CadCraft számára megőrzi az anyag nevét; más programok a réteg anyagát mutatják. |
| Átlátszóság DWG 2000 és DXF fájlokban | Más programok ezeket az objektumokat tömörnek mutatják; a CadCraft megőrzi az átlátszóságot. Mindenki számára mentse DWG 2004 vagy újabb formátumban. |
| Másik programban készült sraffozás-hivatkozás | A CadCraft a saját hivatkozását DWG és DXF 2000 fájlokban menti; más programok hivatkozásait nem olvassa be. Használja a `HATCHEDIT` parancsot és a Hivatkozás (L) lehetőséget: lásd: [Sraffozás és kitöltött területek](topic:hatch). |
| Koordináták a Tulajdonságokban a felhasználói koordinátarendszerben (UCS) | A Tulajdonságok a világkoordinátákat mutatja; az állapotsor és a {{cmd:ID}} az UCS-koordinátákat. Lásd: [A nézet forgatása és a saját koordináták használata](topic:ucs-and-turned-view). |
| Annotatív objektum külön helyzete minden léptékénél; más programok léptékenkénti rekordjainak olvasása | Az annotatív szöveg vagy méret léptéklistát tart nyilván ({{cmd:OBJECTSCALE}}), és minden nézetablak a saját léptékének megfelelő méretben, ugyanazon a helyen mutatja. A lista a CadCraft saját adataként mentődik: más program az objektumot csak arra a léptékre látja, amelyre méretezték, a más programban készült listát pedig nem olvassa be. Lásd: [Mértékegységek, papírok és léptékek](topic:units-papers-scales#annotate-by-scale). |
| Dinamikus blokk távolságainak, szögeinek vagy tükrözéseinek módosítása; a dinamikus blokkok dinamikus megtartása, ha más DWG-verzióban vagy DXF-ként ment | A láthatósági állapotát a Tulajdonságok › {{ui:Egyéni}} részben kapcsolja; a többi értéke ott csak olvashatóan látszik. Dinamikus marad, ha abban a DWG-verzióban menti, amelyben a rajz érkezett. Lásd: [Dinamikus blokkok](topic:dynamic-blocks). |
| Spline illesztési tűrés, 6-nál magasabb fokú spline-ok, 3D spline-ok | Az illesztő- és vezérlőpontok, az 1–5. fok és a súlyok elkészültek: lásd: [Spline-ok és polivonalak](topic:splines). A spline magassága (Z) nem marad meg. |

## Pontossági segédeszközök

| Még nincs elkészítve | Helyette most |
|---|---|
| Követés pontokból parancsokon át, és a követési beállítások párbeszédpanel (relatív poláris szögek, további szögek) | A {{cmd:POLARANG}} állítja a lépést; a pontokat a következő parancsban újra rögzítse. |
| Fogás a rácsra | Adja meg a koordinátákat; a rács csak vizuális segédvonal. |
| Ív (A) és Hossz (L) lehetőségek a terület sarkainak kijelölésekor, és a MEASUREGEOM Térfogat (V) | Rajzolja meg a körvonalat a {{cmd:PLINE}} paranccsal (ívekkel együtt), majd az {{cmd:AREA}} `O` lehetőséggel. |
| Dinamikus bevitel fogópontokhoz, és ennek lehetőséglistája (a lefelé mutató nyíl) | A parancssor mutatja a lehetőségeket. |
| Szögek fok-perc-másodperc, grad vagy geodéziai irányszög formában | Tizedes fokban adja meg: `30.5` a 30°30'-hez. |
| Nézetkezelő párbeszédpanel; rajzlap elnevezett nézetei, amelyek ugyanazon a lapon térnek vissza | A {{cmd:NAMEDVIEW}} listázza és visszaállítja a nézeteket. A mentett fájl megőrzi őket, de a rajzlapok nézetei az első rajzlapon térnek vissza. |

## Rajzlapok, méretek és plottolás

| Még nincs elkészítve | Helyette most |
|---|---|
| Mezők a nézetablak léptékéhez, elnevezett objektumhoz, például réteghez vagy blokkhoz, hiperhivatkozáshoz, és a rajzlapkészlet mezői a rajzlap száma és neve mellett; olyan mezők, amelyeket mezőobjektumként írnak, és más programok frissítenek | A {{cmd:FIELD}} tartalmazza a dátumot, a fájlnevet, a rajzlap számát, nevét és darabszámát, a rajz tulajdonságait ({{cmd:DWGPROPS}}), egy objektum területét, hosszát és egyéb tulajdonságait, valamint képleteket, szövegben, attribútumokban és táblázatcellákban. Egy másik program a CadCraft mezőjét az utoljára beolvasott szövegként mutatja; a CadCraft beolvassa más program dátum-, fájlnév-, tulajdonság-, rajzlap- és kifejezés-mezőit, a többi fajtát szövegként hagyja. A nézetablak léptékét kézzel kell beírni. |
| Az aktuális méretezési stílus mentése; szabadon elhúzott méretszöveg | A rajz az aktuális Standard stílussal nyílik meg. A szöveg a méretvonalon ül (DIMTEDIT Bal / Jobb / Közép). Lásd: [Méretek méretének beállítása](topic:dimension-settings). |
| Szerkeszthető kétsoros szögméretek olyan megnyitott fájlokból, amelyeket a CadCraft nem tud kiszámítani | A fájlban rajzoltak szerint jelennek meg. Az ordinátaméret, az ívhossz-méret és a törtvonalú sugárméret szerkeszthető méretként nyílik meg. |
| CTB-olvasó ellenőrzése másik program fájljával (elkészült, a közzétett leírás alapján), elnevezett plottolási stílusok (STB), ditherelés, tollszámok, szürkeárnyalat CTB-ből és adaptív vonaltípus-igazítás plottolási stílusban | Készítse el a táblázatot a {{ui:Plottolási stílustáblák}} részben (szín, szürkeárnyalat, tinta, vonalvastagság, vonaltípus, vonalvég és -csatlakozás, és színenkénti kitöltési stílus): lásd: [Plottolási stílustáblák](topic:plot-pdf#plot-style-tables). |
| Oldalbeállítások | A papírt, a léptéket és a plottolási stílust a {{ui:Plottolás PDF-be}} párbeszédpanelen válassza ki; a rajzlap megtartja a plottolási stílusát. |
| Hindi és más, összetett alakítást igénylő írások PDF-ekben, valamint ritka ideogrammák (európai írások, cirill, görög, héber, arab, perzsa, urdu, thai, kínai, japán és koreai nyomtatott szöveg) | Kérdőjelként nyomtatódnak („?”). |
| Arab írású és kínai, japán vagy koreai szöveg ugyanabban a plottolt PDF-ben | A plottolás egy betűtípust használ: a két írás egyike „?”-ként nyomtatódik. |
| Szövegben megadott irányjelek (beágyazások, felülírások, izolálások) | Figyelmen kívül maradnak: minden sor csak a betűi alapján rendeződik. |
| Képek a csatolt PDF-oldalon belül, plottolásban | Az oldal vonalai, kitöltései és szövege kinyomtatódnak. Csak képet tartalmazó oldal a {{cmd:SCANATTACH}} paranccsal kerül be, és a képek kinyomtatódnak. Lásd: [PDF-alátétek](topic:pdf-underlay#plot-and-save). |
| Munka küldése lézerre a CadCraft Studióból (a Studióban nincs Web Serial) | Mentse a G-kódot, és küldje el a lézer saját programjával, vagy küldje el a Chrome-ból vagy az Edge-ből. Lásd: [Rajz küldése lézerre](topic:laser-cutting#send-from-the-browser). |

## Kényszerek és paraméterek

| Még nincs elkészítve | Helyette most |
|---|---|
| Kényszerek rajzlapokon, blokkokban, ellipszisen, spline-on vagy szövegen | Kényszerezzen a {{ui:Modell}} lapon, vonalakon, polivonalakon, köröken, íveken és pontokon. |
| Sima (G2) kényszer, és a polivonal ívdomborulatának közvetlen kényszerezése | Érintő és egyenlő; az ívszakasz követi a két végét. |
| Referencia (vezérelt) méretkényszerek, és a `3Point` a {{cmd:DCANGULAR}} parancsban | Egy egyszerű méret (DIMLINEAR …) értéket mutat, anélkül hogy vezérelné. |
| Papíron rögzített méretű méretkényszerek és ezek plottolása | Csak a képernyőn látszanak; a plottoláshoz adjon hozzá egyszerű méreteket. |
| Kényszerek megőrzése az EXPLODE, BREAK, JOIN és más, új objektumokat létrehozó parancsokon át, és vágott polivonalakon | Kényszerezze őket újra (az AUTOCONSTRAIN segít). A vonalak, ívek és körök {{cmd:MIRROR}} és {{cmd:TRIM}} műveletei megtartják őket. |
| Tervtáblázatok (konfigurációk) a CadCraftban | Módosítsa a paramétereket a panelen. |
| Tesztelt oda-vissza átvitel a SolidWorks-szel | Ellenőrizze a makró által készített vázlatot, mielőtt építene rá. |

## 3D

| Még nincs elkészítve | Helyette most |
|---|---|
| Lekerekítések, letörések, héjazások és áthúzások; emelkedő útvonal menti végigvezetések (3D-s útvonalak) | Ívekkel rendelkező körvonalakat húzzon ki, tolja és húzza a lapokat, forgassa testté, és vezesse végig lapos útvonalak mentén. |
| Kihúzás a felfelétől eltérő irányba | Rajzolja meg az alakzatot a talajon, és húzza ki felfelé vagy lefelé (ha szeretné, dőlésszöggel vagy útvonal mentén); a testet utólag forgassa el. |
| 2D-s objektumok magassága és vastagsága | A rajz a talajon fekszik (0 magasság) a 3D lapon. |
| Más programok testeinek, tartományainak és testtárgyainak szerkesztése; ezek megjelenítése blokkon belül; lapjaik végigvezetett, áthúzott vagy más szabad formájú felületeken; poliéder- és sokszöghálók | A modelltérben lévő testek a 3D lapon úgy jelennek meg, ahogy vannak, és DWG-ben változatlanul mentődnek vissza; a meg nem rajzolt elemeket a 3D lap megnyitásakor felsorolja. Kérjen hálókat 3D-s lapokként a modelltérben. Lásd: [Más programok testei](topic:3d-solids#solids-from-other-programs). |
| Testek másolása és beillesztése | A 3D lapon használja a {{cmd:COPY}} parancsot. A vágólap csak 2D-s objektumokat tartalmaz. |
| Metszetek, a testek későbbi változásait követő nézetek, és árnyalt testek plottolt rajzlapokon | A {{cmd:VIEWBASE}} lapos nézeteket helyez el (pillanatkép); a testek módosítása után futtassa újra. |
| Anyagok, textúrák és fénybeállítások | A vizuális stílusok: árnyalt, élek, takart vonal, drótváz, röntgen. |
| Térképrétegek plottolása, rajzlapok nézetablakaiban és a 3D lapon; a rajzmentéssel mentett fájlokból származó képek; a rajz helyzete más programoknak írva DWG 2000–2007 és DXF R12 formátumban | A térképrétegek a képernyőn a modelltér alatt látszanak; a rendszer és a rétegek listája a rajzzal együtt mentődik: lásd: [Térképrétegek a rajz alatt](topic:map-layers) |
| E57 szkenek 6 millió pont vagy 512 MB felett, szkennergyártók saját fájljai (RCP, RCS, FLS, LGS, TZF, ZFS), a rajzzal mentett vagy plottolt pontfelhő, fogás a felhőhöz a 3D lapon, függőleges (metszet) szeletek a Modell lapon | Nagy vagy gyártói szkenneket LAS vagy LAZ formátumban exportáljon ([Pontfelhő-formátumok](topic:point-cloud-formats)); a felhőt minden rajznyitáskor csatolja; alaprajzi szeletről kövesse a Modell lapon: lásd: [Kivitelezett vonalak követése pontfelhőn](topic:point-clouds) |
| Szkenek illesztése: célpontok (gömbök, sakktáblák) önálló megtalálása egy szkenen belül, az összes szken együttes kiegyenlítése (kötegelt kiigazítás), léptékezés, illesztés modellhez | Válasszon egyező pontokat, vagy adja meg a célpont koordinátáit, majd egyesével finomítsa a szkeneket ICP-vel: lásd: [Több szken egyesítése egybe](topic:register-scans) |

## Rutinok és testreszabás

| Még nincs elkészítve | Helyette most |
|---|---|
| Lefordított vagy védett LISP (.fas, .vlx), natív programok (.arx, .crx, .dbx) és VBA (.dvb) | Töltse be a rutin .lsp forrását a {{cmd:APPLOAD}} paranccsal. |
| A LISP `grread` függvénye, a reaktorok (`vlr-…`), görbefüggvények (`vlax-curve-…`), szótárak és bővített adatok, az Express Tools `acet-…` függvényei | A nyelv többi része fut: lásd: [LISP-rutinok futtatása](topic:run-lisp). A parancssor megnevezi a hiányzó függvényt, ha a rutin ilyenbe ütközik. |
| Képek és diák a rutin párbeszédpanelén | Üres keretként látszanak; a párbeszédpanel többi része működik. |
| CraftScript (.craft), Lua és Python a CadCraftban | Futtassa őket a PartCraft Szkript munkaterületén. |
| Réteg-, szín- és vonaltípus-listák a menüstílusok szalagmenüjében | Használja a {{ui:Rétegek}} panelt és a {{ui:Tulajdonságok}} panelt. |
| A Startup Suite és az álnevek, amelyek a számítógépén vannak vagy szinkronizálva | Ebben a böngészőben tárolódnak; az asztali alkalmazás és a felhőszolgáltatás majd Ön helyett tárolja őket. A Studióban az `acad.lsp` és az `acaddoc.lsp` fájlokat egy Ön által választott támogató mappából olvassa be (Alkalmazások betöltése). |

## Súgó

A súgó a jelenlegi verziót írja le. Amikor valami elkészül, kikerül ebből az oldalról, és az útmutatókba kerül.

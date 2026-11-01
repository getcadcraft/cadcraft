---
title: Újdonságok a 0.7-ben
summary: PDF-aláképek és PDF-importálás, beolvasott rajzok automatikus nyomkövetéssel, valódi spline-ok a SPLINE, SPLINEDIT és PEDIT paranccsal, méretezési stílus kezelő, formázását megtartó szöveg, WBLOCK és saját léptékek, 3D testek más programokból, letapogatások regisztrálása, Lézer panel, USD-exportálás, Előzmények és nyomtatás a CadCraft Studióban, vezetett első rajz, az eszköztár bármely oldalon vagy kevesebb sorban, valamint további lehetőségek az MI-asszisztensekhez.
keywords: újdonságok, kiadási jegyzet, változásnapló, változások, 0.7, verzió, új funkciók, pdf, pdfattach, pdfimport, alákép, beolvasás, scanattach, scantrace, nyomkövetés, raszter, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formázás, wblock, scalelistedit, léptéklista, acis, 3d testek, registerscans, letapogatások regisztrálása, icp, e57, las, lézer, grbl, g-kód, usd, usdout, előzmények, verziók, összehasonlítás, nyomtatás, nyomtató, png, svg, plottolási stílus, vonaltípus, bemutató, puska, parancstérkép, eszköztár helye, eszköztársorok, toolbardock, regen, regenall, trackpad, elhúzás, kódlap, cirill, koreai, kínai, japán, elektromos, rcd, p&id, pid, acad.lsp, acaddoc.lsp, támogatási mappa, asszisztensek, mcp, mértékegységek, portugál
from: b9258ca6
---

Ez változott a CadCraft 0.7-ben a 0.6-hoz képest. Sokat közülük a Discordon kértek. A lista területenként csoportosított, a legfontosabbak elöl.

## Újdonságok

### PDF-ek és beolvasott rajzok

- **PDF-oldal a rajz alá.** A {{cmd:PDFATTACH}} (`PDFATT`) egy oldalt valódi méretben vagy a beírt léptékben helyez el. Fogjon a vonalaihoz, halványítsa el, tegye egyszínűvé ({{cmd:PDFADJUST}}), vágja ki ({{cmd:PDFCLIP}}), és kapcsolgassa a PDF saját rétegeit ({{cmd:PDFLAYERS}}). Vonalként, kitöltésként és szövegként plottolódik, a DWG vagy DXF 2000 pedig a fájlra mutató hivatkozásként őrzi meg. A PDF megnyitása a {{ui:Megnyitás}} paranccsal rákérdez, hogy csatolja vagy importálja. Lásd: [PDF-aláképek és PDF-importálás](topic:pdf-underlay).
- **PDF-oldal átalakítása rajzobjektumokká.** A {{cmd:PDFIMPORT}} (`PDFIM`) vonalakat, polivonalakat, köröket, íveket, tömör sraffozásokat és szöveget készít a PDF után elnevezett rétegeken, valódi méretben, beírt léptékkel, vagy két pontból és egy valós távolságból skálázva, egyetlen visszavonási lépésben. Lásd: [Oldal importálása](topic:pdf-underlay#import-a-page).
- **Beolvasott rajzok.** A {{cmd:SCANATTACH}} PNG-t, JPEG-et vagy TIFF-et (egy oldalt vagy mindet), illetve képként lévő PDF-oldalt hoz be. Utána két pontból lépték szerint beállítható ({{cmd:SCANSCALE}}), igazítható ({{cmd:SCANALIGN}}), a saját hosszú vonalaiból kiegyenesíthető ({{cmd:SCANDESKEW}}), fekete-fehérré tehető és megtisztítható a foltoktól ({{cmd:SCANCLEAN}}), körülvágható, és részei kitörölhetők. Minden lépés egy visszavonási lépés, és az eredeti fájl megmarad. Lásd: [Beolvasott rajzok és a nyomkövetés](topic:scanned-drawings).
- **Beolvasás követése vonalakká és ívekké.** A {{cmd:SCANTRACE}} a beolvasás vonalait vonalként és ívként rajzolja egy új, SCAN-TRACE rétegre, az Ön által megadott tűréssel, a szöveget és a sraffozást pedig érintetlenül hagyja. A jelentés megmondja, mit készített és mit hagyott ki, és nem állítja, hogy az eredmény helyes: ellenőrizze a rajzlappal szemben. A {{cmd:RASTERSNAP}} lehetővé teszi, hogy az objektumfogások megtalálják a beolvasás végeit, sarkait és keresztezéseit. Semmi nem megy sehová, és nem használ betanított modellt. Lásd: [A nyomkövetés](topic:scanned-drawings#the-trace).

### Rajzolás és szerkesztés

- **Valódi spline-ok.** A {{cmd:SPLINE}} (`SPL`) pontokon át vagy vezérlőpontokból rajzol görbét (1–5. fokszám), végérintőkkel; a {{cmd:SPLINEDIT}} (`SPE`) illesztő- vagy vezérlőpontokat mozgat, ad hozzá és töröl, súlyokat állít, nyit, zár, megfordít, vagy a spline-t polivonallá alakítja. A DWG- és DXF-fájlokból származó spline-ok spline-ként nyílnak meg, a DWG és a DXF 2000 pedig spline-ként menti őket. Lásd: [Spline-ok és polivonalak](topic:splines).
- **PEDIT.** A {{cmd:PEDIT}} (`PE`) zár és nyit polivonalakat, vonalakat és íveket fűz hozzájuk, egy szélességet állít be, görbét illeszt a csúcsokon át vagy spline-t vezet mentükön, és a Decurve (görbe megszüntetése) paranccsal visszaveszi, megfordít, és egyszerre többet szerkeszt. Lásd: [Polivonal szerkesztése](topic:splines#edit-a-polyline).
- **WBLOCK.** A {{cmd:WBLOCK}} (`W`) egy blokkot, néhány objektumot vagy az egész rajzot új DWG-be vagy DXF-be írja, amely csak a használt rétegeket, stílusokat és blokkokat tartalmazza. Lásd: [Blokk vagy objektumok írása saját fájlba](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN és REGENALL.** A {{cmd:REGEN}} (`RE`) a rajzból újrarajzolja az aktuális lapot, a {{cmd:REGENALL}} (`REA`) minden lapot, panelt és nyitott rajzot. Lásd: [REGEN és REGENALL](topic:commands#regen-and-regenall).

### Szöveg és méretek

- **A szöveg megtartja a formázását.** A más programokból érkező bekezdésszöveg megtartja a szavankénti színeket, a félkövért és dőltet, az aláhúzást, az egymásra helyezett törteket és a magasságokat: a képernyőn és a PDF-ekben ki vannak rajzolva, a szavak szerkesztésekor megmaradnak, és visszamentődnek. Lásd: [Formázás más programokból érkező bekezdésszövegen belül](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Méretezési stílus kezelő.** A {{cmd:DIMSTYLE}} (`D`) elnevezett méretezési stílusokat készít, módosít, hasonlít össze és alkalmaz; egy stílus módosítása az azt használó összes méretet módosítja. A {{cmd:DIMEDIT}} (`DED`) visszaállítja a szöveget, új szöveget ír be, elforgatja, vagy megdönti a segédvonalakat; a {{cmd:DIMTEDIT}} a szöveget balra, jobbra vagy középre mozgatja. Lásd: [Elnevezett méretezési stílusok](topic:dimension-settings#named-dimension-styles).
- **Saját léptékek.** A {{cmd:SCALELISTEDIT}} (`SCALELIST`) az 1:75-höz hasonló léptékeket ad a nézetablak- és plottolási léptéklistákhoz; ezek a rajzban mentődnek (DWG és DXF 2000), és a más programból származó rajz hozza a saját listáját. Lásd: [Léptékek](topic:units-papers-scales#scales).
- **Szöveg más ábécékkel.** A cirill, koreai, kínai, japán vagy vietnami kódlapokkal mentett DXF-fájlok már a szövegükkel nyílnak meg, és a kínai, japán és koreai szöveg PDF-ben is nyomtatódik (a plottolás az első alkalommal nagyobb betűtípust tölt le, ha szüksége van rá). Lásd: [Betűtípus](topic:text#font).

### Plottolás és nyomtatás

- **Több a plottolási stílustáblákban.** A táblázat mostantól minden színhez vonaltípust, vonalvéget és vonalcsatlakozást, valamint olyan kitöltési stílust is beállíthat, amely a tömör kitöltéseket sraffvonalként nyomtatja; a táblának saját vonalvastagság-listája és vonaltípus-léptéke van. Lásd: [Plottolási stílustáblák](topic:plot-pdf#plot-style-tables).
- **Nyomtatás, valamint PNG- és SVG-fájlok.** A Plottolás párbeszédpanelen van {{ui:Nyomtatás…}}, {{ui:PNG letöltése}} (300 dpi) és {{ui:SVG letöltése}}. A CadCraft Studióban felsorolja a számítógép nyomtatóit, azok papírját és a példányszámot. Lásd: [Nyomtatás](topic:plot-pdf#print) és [Kép- és SVG-fájlok](topic:plot-pdf#picture-and-svg-files).

### 3D és pontfelhők

- **3D testek más programokból.** A rajz modelltérében lévő testek, régiók és testobjektumok a 3D lapon látszanak, csak olvashatóan, és a DWG-ként mentés változatlanul visszaírja őket. A CadCraft által még nem rajzolt felületek lapjait felsorolja, nem találgatja. Lásd: [Testek más programokból](topic:3d-solids#solids-from-other-programs).
- **Több letapogatás regisztrálása.** A {{cmd:REGISTERSCANS}} (`REGSCAN`) különböző helyzetekből készült letapogatásokat helyez egy keretbe pontpárokkal vagy beírt illesztőpont-koordinátákkal, ICP-vel finomítja őket, a regisztrációt kis projektfájlként menti, a regisztrált felhőt pedig egyetlen LAS- vagy E57-fájlba írja. Lásd: [Több letapogatás regisztrálása eggyé](topic:register-scans).
- **USD-exportálás.** Az {{cmd:USDOUT}}, vagy az {{cmd:EXPORT3D}} › {{ui:USD}} a 3D lap testeit `.usda`, `.usdc` vagy `.usdz` formában írja. Lásd: [A 3D modell exportálása USD-be](topic:usd).
- **Számítások a 3D lapon.** Ahol a 3D lap eszközei távolságot kérnek, számítást is beírhat, mint a parancssorban. Lásd: [Számtani műveletek a beírt értékben](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Készítés

- **Rajz küldése lézerre.** A {{cmd:LASER}}, vagy a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Lézer…}} a rajz fölött panelt nyit: minden réteg vág, karcol, vonalakat gravíroz, alakzatokat tölt ki, képet gravíroz, vagy nem lesz elküldve, a teljesítményével, sebességével és menetszámával. Az előnézet követi a szerkesztéseit, a {{ui:G-kód mentése…}} GRBL lézermódú G-kódot ír, Chrome-ban vagy Edge-ben pedig a panel be tudja keretezni a munkát és USB-n elküldeni. A beállítások a rajzban mentődnek (DWG és DXF). Lásd: [Rajz küldése lézerre](topic:laser-cutting).
- **Épületgépészeti jelek az Elektromos bővítményben.** Adat-, telefon- és tévéaljzatok, kulcsos és időkapcsolók, termosztát, kijáratjelző, érzékelők, kézi jelzésadó és hangjelző, ventilátor, vízmelegítő, tűzhely, elektromosautó-töltőpont, energiamérő és alelosztó, valamint RCD- és RCBO-jelek. Egy áramkör hordozhat RCD-t, a kapcsolószekrény-kimutatásban van RCD oszlop, az ellenőrzések pedig megnevezik azokat az aljzatáramköröket, amelyeken nincs legfeljebb 30 mA-es RCD. Tervezési emlékeztető, nem előírás-ellenőrzés.
- **P&ID bővítmény.** A P&ID technológiai ábrákat rajzol: csatlakozási pontokkal ellátott jeleket, technológiai és jelvonalakat, címkéket, vezetékszámokat, vezeték-, berendezés-, műszer- és szelepkimutatásokat (CSV vagy munkafüzet) és ellenőrzéseket. A CadCraft része, és ki van kapcsolva, amíg be nem kapcsolja itt: {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Bővítmények}}. Rajzolási segédeszköz, nem mérnöki jóváhagyás, és a szövegei egyelőre csak angolul vannak.

### Első lépések és a képernyő

- **Vezetett első rajz.** A {{cmd:TOUR}} (vagy a kezdőkártyán a {{ui:Bemutató indítása}}) hat lépésben végigvezeti a valódi rajzon: egy vonal, egy kör, egy mozgatás, egy vágás, egy törlés és egy méret. Magától az első alkalommal indul, amikor a CadCraft üresen nyílik meg. Lásd: [Szeretné, ha vezetnék?](topic:getting-started#prefer-to-be-guided)
- **Puska és parancstérkép.** A [puska](topic:cheat-sheet) egy oldalon tartalmazza a 40 mindennapi parancsot, nyomtatható PDF-ként is, a [parancstérkép](topic:command-map) pedig A-tól Z-ig felsorolja a parancsokat a rövid nevükkel.
- **Az eszköztár bármely oldalon.** {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Az eszköztár helye}}: fent (mint korábban), lent, balra vagy jobbra, vagy írja be: {{cmd:TOOLBARDOCK}}. Lásd: [Az eszköztár helye](topic:settings#toolbar-position).
- **Eszköztársorok.** {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Eszköztársorok}}: törés a méretre, 2 sor vagy 1 sor, a CadCraft eszköztárhoz és a Klasszikus rajzoló és Szalag stílusokhoz. A {{key:Shift+Ctrl+F1}} lépked közöttük, a {{key:Ctrl+F1}} azon, amit a gombok mutatnak, a {{cmd:TOOLBARROWS}} és a {{cmd:TOOLBAR}} pedig beállítja őket. A kezdőtippnek van bezárás gombja. Köszönet GJoe2-nek, aki ezt pull requestként küldte. Lásd: [Eszköztársorok](topic:settings#toolbar-rows).

### A CadCraft Studióban

- **Előzmények.** A {{cmd:HISTORY}} (`HIST`), vagy a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Előzmények…}}: a Studio által a rajz megnyitásakor és mentésekor őrzött másolatok, és a rajz felhőbeli verziói, ha a felhőből nyitotta meg. Nyisson meg vagy állítson vissza egyet, vagy hasonlítson össze kettőt, a hozzáadott, eltávolított és módosított dolgokat színnel jelölve. Lásd: [Előzmények](topic:history).
- **acad.lsp és acaddoc.lsp.** Válasszon támogatási mappát az {{cmd:APPLOAD}} parancsban: ez a két fájl a CadCraft indításakor betöltődik (az acaddoc.lsp minden új rajzlapra újra), és az `S::STARTUP` ezek után fut. Lásd: [Alkalmazások betöltése](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **A Plottolás párbeszédpanel saját ablakban.** A címsorában lévő gomb egy olyan ablakba viszi, amelyet másik monitorra tehet. Lásd: [Párbeszédpanel mozgatása](common:arrange-panels#move-a-dialog).

### MI-asszisztensekhez

- **Fájlok név szerint, az Ön által választott mappákban.** A CadCraft Studióban az asszisztens név szerint nyithat, menthet és plottolhat fájlokat, és átadhat egy parancsnak a kért fájlt (INSERT fájlból, a COUNT exportja, SAVEAS, PLOT), de csak azokon a mappákon belül, amelyeket a {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Asszisztensek}} › {{ui:Használható mappák}} alatt ad hozzá. Lásd: [Fájlok használatának engedélyezése a választott mappákban](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Kevesebb hívás.** Az asszisztens egyszerre beírhat egy egész parancssort, nyitva tarthat egy parancsot a hívásai között, típus és réteg szerint megszámolhatja az objektumokat felsorolás nélkül, és egy lépésben elhelyezhet egy blokkot az attribútumértékeivel.
- **Ablak nélkül.** A `cadcraft` parancssor SVG-plottolásokat ír, és egyszerre sok fájlt konvertál, plottol, ellenőriz vagy ír le. Az MCP-csomag még nincs közzétéve. Lásd: [Munka fájlokon a CadCraft megnyitása nélkül](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Módosult

- **A trackpad eltol.** Mozgasson két ujjat a trackpaden, és a 2D nézet követi őket; a csippentés és az egérgörgő nagyít. Lásd: [Egér, trackpad és érintés](topic:mouse-trackpad-touch).
- **Az OLE-objektumok megmaradnak.** A DXF beágyazott objektumai a képükként vagy feliratozott keretként látszanak, és a DXF 2000 visszamenti őket. A DWG-é megmarad, és DWG-ként mentéskor visszaíródik, de még nem látszik. Korábban mentéskor elvesztek. Lásd: [Más programok objektumai (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Az új rajz mértékegységei** a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} alatt csillagozott mértékegységet követik.

## Javítva

- Az üresen megnyíló, vagy egy nézetablakot elvesztő és helyette az egész modellt mutató elrendezések most a valódi nézetablakaikkal nyílnak meg. A tartalmához nem kapcsolódó elrendezés megmarad, és a megnyitási jelentés ezt kimondja.
- A régebbi kódlapú DXF-fájlokban a cirill és a koreai szöveg torzan látszott. Most helyesen olvashatók.
- A más programokból érkező bekezdésszöveg megnyitáskor elvesztette a formázását, és egyszerűen mentődött vissza.

## Minden alkalmazásban

- **Mértékegységek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} hossznak, területnek, térfogatnak, szögnek és lejtésnek külön listát ad, a mértékegységek definíciói szerinti pontos méretekkel (az amerikai geodéziai láb külön mértékegység). Kapcsolja ki a soha nem használtakat, és kikerülnek a listákból; csillagozzon meg egyet, és az új munka azzal indul. A fájl mindig megtartja a saját mértékegységét. A CadCraftban a csillag az új rajz mértékegységét állítja, ha az olyan mértékegység, amelyet a rajz hordozhat; a CadCraft saját {{ui:Mértékegységek}} mezője még nem követi a kapcsolókat. Ha a rajznak már van mértékegysége, a beírt hosszon bármely mértékegység jele szerepelhet. Lásd: [Mértékegységek, beírt értékek és a mértékegységlisták](common:unit-lists).
- **Sűrűbb elrendezés és eltűnő panelek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Elrendezés sűrűsége}} › {{ui:Kompakt}} több mindent elhelyez a képernyőn (az érintőképernyők és a telefonok megtartják a nagy gombjaikat). Minden oldalpanelnek van egy karcsú címsora: húzza a panel dokkolásához vagy lebegtetéséhez, ejtse egy másik panel sávjára, hogy egy keretben osztozzanak lapokként, rögzítse, hogy a szélre csússzon, vagy rejtse el, és hozza vissza a szélről. Lásd: [A panelek elrendezése](common:arrange-panels#make-the-layout-denser).
- **A párbeszédpanelek mozognak.** Húzza a párbeszédpanelt a címsoránál fogva a rajz elől; oda tér vissza, ahol hagyta. A címsorra duplán kattintva újra középre kerül. Lásd: [Párbeszédpanel mozgatása](common:arrange-panels#move-a-dialog).
- **Receptek MI-asszisztensekhez.** Tíz kidolgozott kérés a saját asszisztensének (rajz rendbetétele, rajzkészlet plottolása, rajzok ellenőrzése, kérdések egy modellről, mennyiségkimutatás összesítése, alkatrészváltozat kipróbálása…), mindegyikhez a hívott eszközökkel és a szükséges engedélyekkel, és mindegyiket lejátszották a tesztjeink. Az alkalmazások nem tartalmaznak MI-t. Lásd: [Receptek MI-asszisztensekhez](common:assistants-recipes).
- **Nyelvek.** Új a **Português (Portugal)** a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Nyelv}} alatt. Ez, a **Português (Brasil)**, az **Español (México)** és a **Bahasa Indonesia** most már az alkalmazások minden szavát tartalmazza, anyanyelvi beszélő által még nem ellenőrzött piszkozatként. A súgótémakörök angolul vannak.
- **A CadCraft Studio** megmondja, miért hiúsult meg egy frissítésellenőrzés (még nincs fájl az Ön rendszeréhez, nincs hálózat, hibás aláírás), a puszta „Kész” helyett, és nem hozza vissza a bezárt Újdonságok kártyát, amíg nincs újabb kiadás.

## Ebben a verzióban még nincs

- **A 0.7 nincs kódaláírással ellátva.** Az aláírás és a Microsoft Store csomag átkerült a 0.8-ba, mert a tanúsítvány érvényesítése még nem érkezett meg. Ellenőrizze a getcadcraft.com/download oldalon az egyes fájlok melletti SHA-256 értéket. Windowson, ha a SmartScreen megállítja a telepítőt, válassza a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} lehetőséget. Macen az első alkalommal kattintson jobb gombbal a CadCraft Studióra, és válassza a {{ui:Megnyitás}} parancsot. A CadCraft Studio még nincs alkalmazásboltban, és iPad- vagy iPhone-verzió sincs még.
- A {{ui:Mértékegységek}} szög- és lejtéslistái mentődnek, de mező még nem olvassa őket.
- A DWG OLE-objektumai megmaradnak, de nem látszanak, és az OLE-objektumokon belüli metafájlképek nincsenek kirajzolva.
- A más programok plottolási stílustábláinak (CTB-fájlok) olvasása mintafájlra vár.
- A `\M+` kódokkal írt régebbi ázsiai szöveget beolvassa, de más programból származó fájllal még nem ellenőrizték.
- PDF-aláképek: az oldalon belüli képek a képernyőn látszanak, de nem plottolódnak, az asszisztens plottolása kihagyja az aláképeket, és azt, hogy más programok hogyan olvassák a mentett kivágást és léptéket, nem ellenőrizték bennük.
- Előzmények: a CadCraft még nem küldi a mentéseit a felhőbe, így a felhőbeli verziók a más eszközökről és a webről mentettek. Az Előzmények csak a CadCraft Studióban van.
- Azt, hogy a Studio újraindítás után megtartja-e az acad.lsp támogatási mappát, még nem ellenőrizték; ha rákérdez, válassza ki újra a mappát az APPLOAD parancsban.
- A Lézer panelt valódi lézeren még nem próbálták ki: minden beállítást hulladékon teszteljen. A CadCraft Studióban nincs Web Serial, így a Studióban a panel csak G-kódot ment.
- A letapogatások regisztrálását kitalált letapogatásokon tesztelték, valódi lézerszkenner készletén még nem.
- A kétujjas eltolást szimulált trackpad-eseményekkel próbálták ki, valódi trackpaden még nem.
- A {{cmd:PEDIT}} parancsnak nincs Csúcs szerkesztése (Edit vertex) opciója (használjon fogópontokat vagy a Tulajdonságokat). A párhuzamos, vágás, nyújtás, lekerekítés, törés és egyesítés még nem fogad spline-okat; a spline magassága (Z) nem marad meg.
- Az új bekezdésszövegnek még nem adhatók formázási kódok, az SVG-plottolások pedig a formázott szöveget egy színnel mutatják.
- A WBLOCK Egész rajz (Entire drawing) opciója csak a modellt írja, a rajzlapokat nem. Az aktuális méretezési stílus nem mentődik a fájlba: a rajz Standard aktuális stílussal nyílik meg.
- A szalagos menüstílusokban még nincs réteg-, szín- vagy vonaltípus-lista: használja a {{ui:Rétegek}} panelt és a {{ui:Tulajdonságok}} panelt.
- A pontfelhők továbbra sem mentődnek a rajzban és nem plottolódnak, az E57-fájlok pedig legfeljebb 6 millió pontig és 512 MB-ig nyílnak meg.
- A CadCraft mentett DWG-fájljait magában az AutoCADben még nem ellenőrizték.

Minden más a [Mi nincs még elkészítve](topic:not-built-yet) témakörben van.

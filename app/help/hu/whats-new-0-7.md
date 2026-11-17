---
title: Újdonságok a 0.7 verzióban (korábbi)
summary: PDF-alátétek és PDF-importálás, beolvasott rajzok automatikus nyomkövetéssel, valódi spline-ok a SPLINE, SPLINEDIT és PEDIT parancsokkal, méretstílus-kezelő, formázását megtartó szöveg, WBLOCK és saját léptékek, 3D-s testek más programokból, szkennelések regisztrálása, Lézer-panel, USD-export, Előzmények és nyomtatás a CadCraft Studio-ban, vezetett első rajz, az eszköztár bármelyik oldalon vagy kevesebb sorban, és több újdonság az AI-asszisztenseknek.
keywords: újdonságok 0.7, korábbi kiadás, kiadási jegyzetek, változásnapló, változások, 0.7, verzió, új funkciók, pdf, pdfattach, pdfimport, alátét, szkennelés, scanattach, scantrace, nyomkövetés, raszter, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formázás, wblock, scalelistedit, léptéklista, acis, 3D-s testek, registerscans, szkennelések regisztrálása, icp, e57, las, lézer, grbl, g-code, usd, usdout, előzmények, verziók, összehasonlítás, nyomtatás, nyomtató, png, svg, plot stílus, vonaltípus, bemutató, puska, parancstérkép, parancssor, eszköztár helye, eszköztársorok, toolbardock, regen, regenall, érintőpad, csippentés, kódlap, cirill, koreai, kínai, japán, villamos, rcd, p&id, pid, acad.lsp, acaddoc.lsp, támogatási mappa, asszisztensek, mcp, mértékegységek, portugál
from: d07ca034
---

Ez a CadCraft 0.6-hoz képest 0.7-ben változott. Sok mindent a Discordon kértek. A lista terület szerint csoportosított, a legfontosabbal az elején.

## Új

### PDF-ek és beolvasott rajzok

- **PDF-oldal a rajz alá.** A {{cmd:PDFATTACH}} (`PDFATT`) a valós méretében vagy megadott léptékben helyezi el az oldalt. Illeszthet a vonalaihoz, halványíthatja, egyszínűvé alakíthatja ({{cmd:PDFADJUST}}), kivághatja ({{cmd:PDFCLIP}}), és kapcsolgathatja a PDF saját rétegeit ({{cmd:PDFLAYERS}}). Vonalként, kitöltésként és szövegként plottol, a DWG- vagy DXF 2000-fájl pedig hivatkozásként tartja meg a PDF-re. A PDF {{ui:Megnyitás}} funkcióval való megnyitásakor a rendszer megkérdezi, csatolja-e vagy importálja. Lásd [PDF-alátétek és PDF-importálás](topic:pdf-underlay).
- **PDF-oldal rajzelemekké alakítása.** A {{cmd:PDFIMPORT}} (`PDFIM`) vonalakat, polivonalakat, köröket, íveket, tömör sraffozásokat és szöveget hoz létre a PDF-ről elnevezett rétegeken: valós méretben, megadott léptékben, vagy két pontból és egy valós távolságból léptékezve, egyetlen visszavonási lépésben. Lásd [Oldal importálása](topic:pdf-underlay#import-a-page).
- **Beolvasott rajzok.** A {{cmd:SCANATTACH}} PNG, JPEG vagy TIFF képet hoz be (egy oldalt vagy mindet), vagy olyan PDF-oldalt, amely kép. Ezután két pontból léptékezhető ({{cmd:SCANSCALE}}), igazítható ({{cmd:SCANALIGN}}), a saját hosszú vonalai alapján derékszögűvé tehető ({{cmd:SCANDESKEW}}), fekete-fehérré alakítható és a foltok eltávolíthatók ({{cmd:SCANCLEAN}}), kivágható, és részek törölhetők belőle. Minden lépés egy visszavonási lépés, az eredeti fájl pedig megmarad. Lásd [Beolvasott rajzok és a nyomkövetés](topic:scanned-drawings).
- **Beolvasás nyomkövetése vonalakká és ívekké.** A {{cmd:SCANTRACE}} a beolvasás vonalait vonalakként és ívekként rajzolja egy új, SCAN-TRACE nevű rétegre, a megadott tűréssel; a szöveget és a sraffozást érintetlenül hagyja. A jelentés megmondja, mit készített és mit hagyott ki, de nem állítja, hogy az eredmény helyes: ellenőrizze a lappal. A {{cmd:RASTERSNAP}} lehetővé teszi, hogy az objektumfogások megtalálják a beolvasás végeit, sarkait és metszéspontjait. Semmi nem kerül sehova, és nincs betanított modell. Lásd [A nyomkövetés](topic:scanned-drawings#the-trace).

### Rajzolás és szerkesztés

- **Valódi spline-ok.** A {{cmd:SPLINE}} (`SPL`) pontokon át vagy vezérlőpontokból görbét rajzol (1–5. fok), végérintőkkel; a {{cmd:SPLINEDIT}} (`SPE`) mozgatja, hozzáadja és törli az illesztő- vagy vezérlőpontokat, súlyokat állít be, nyit, zár, megfordít, vagy spline-t polivonallá alakít. A DWG- és DXF-fájlokból érkező spline-ok spline-ként nyílnak meg, a DWG- és DXF 2000 pedig spline-ként menti őket. Lásd [Spline-ok és polivonalak](topic:splines).
- **PEDIT.** A {{cmd:PEDIT}} (`PE`) zárja és nyitja a polivonalakat, a vonalakat és íveket hozzájuk csatlakoztatja, egy szélességet állít be, görbét illeszt a csúcsokra vagy spline-t azok mentén, és a Decurve-vel visszaveszi, megfordítja, és többet egyszerre szerkeszt. Lásd [Polivonal szerkesztése](topic:splines#edit-a-polyline).
- **WBLOCK.** A {{cmd:WBLOCK}} (`W`) egy blokkot, néhány objektumot vagy az egész rajzot új DWG- vagy DXF-fájlba írja, amely csak az általuk használt rétegeket, stílusokat és blokkokat tartalmazza. Lásd [Blokk vagy objektumok írása saját fájlba](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN és REGENALL.** A {{cmd:REGEN}} (`RE`) a rajzból újrarajzolja az aktuális lapot, a {{cmd:REGENALL}} (`REA`) pedig minden lapot, ablaktáblát és megnyitott rajzot. Lásd [REGEN és REGENALL](topic:commands#regen-and-regenall).

### Szöveg és méretezés

- **A szöveg megtartja a formázását.** A más programokból származó bekezdésszöveg szavanként megtartja a színeit, a félkövér és dőlt, az aláhúzott, az egymás alatti törtek és a magasságok beállításait: ezek a képernyőn és a PDF-ekben úgy rajzolódnak ki, megmaradnak, amikor a szavakat szerkesztik, és visszamentődnek. Lásd [Más programokból származó bekezdésszöveg formázása](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Méretstílus-kezelő.** A {{cmd:DIMSTYLE}} (`D`) névvel ellátott méretezési stílusokat készít, módosít, összehasonlít és alkalmaz; egy stílus módosítása megváltoztatja az összes azt használó méretet. A {{cmd:DIMEDIT}} (`DED`) visszaállítja a szöveget, újat ír be, elforgatja a szöveget vagy megdönti a segédvonalakat; a {{cmd:DIMTEDIT}} a szöveget balra, jobbra vagy középre mozgatja. Lásd [Elnevezett méretezési stílusok](topic:dimension-settings#named-dimension-styles).
- **Saját léptékek.** A {{cmd:SCALELISTEDIT}} (`SCALELIST`) olyan léptékeket ad a nézetablak- és plottlépték-listákhoz, mint az 1:75; ezek a rajzban mentődnek (DWG és DXF 2000), és egy másik programból származó rajz a saját listáját hozza. Lásd [Léptékek](topic:units-papers-scales#scales).
- **Szöveg más ábécékben.** A cirill, koreai, kínai, japán vagy vietnami kódlapokkal mentett DXF-fájlok most már szöveggel együtt nyílnak meg, a kínai, japán és koreai szöveg pedig PDF-be nyomtatódik (a plot az első alkalommal, amikor szükséges, nagyobb betűkészletet tölt le). Lásd [Betűkészlet](topic:text#font).

### Plottolás és nyomtatás

- **Több a plot stílustáblákban.** Minden színhez a táblázat most már beállíthat vonaltípust, vonalvégződést és vonalcsatlakozást, valamint olyan kitöltési stílust, amely a tömör kitöltéseket sraffozási vonalakkal nyomtatja; a táblának saját vonalvastagság-listája és vonaltípus-léptéke van. Lásd [Plot stílustáblák](topic:plot-pdf#plot-style-tables).
- **Nyomtatás, valamint PNG- és SVG-fájlok.** A plottolás párbeszédpanelen megtalálható a {{ui:Nyomtatás…}}, a {{ui:PNG letöltése}} (300 dpi) és az {{ui:SVG letöltése}}. A CadCraft Studio-ban a számítógép nyomtatóit listázza, azok papírját és a példányszámot. Lásd [Nyomtatás](topic:plot-pdf#print) és [Kép- és SVG-fájlok](topic:plot-pdf#picture-and-svg-files).

### 3D és pontfelhők

- **3D-s testek más programokból.** A rajz modelltérében lévő testek, régiók és törzsek a 3D lapon jelennek meg, csak olvashatóan; DWG-ként mentve változatlanul visszaíródnak. A CadCraft által még nem rajzolt felületek lapjai fel vannak sorolva, nem találgatva. Lásd [Más programokból származó testek](topic:3d-solids#solids-from-other-programs).
- **Több szkennelés regisztrálása.** A {{cmd:REGISTERSCANS}} (`REGSCAN`) különböző helyekről készült szkenneléseket egy keretbe illeszt, pontpárokkal vagy beírt célkoordinátákkal, az ICP-vel finomítja őket, a regisztrációt kis projektfájlként menti, a regisztrált felhőt pedig egyetlen LAS- vagy E57-fájlba írja. Lásd [Több szkennelés egybe regisztrálása](topic:register-scans).
- **USD-export.** A {{cmd:USDOUT}}, vagy a {{cmd:EXPORT3D}} › {{ui:USD}} a 3D lap testeit `.usda`, `.usdc` vagy `.usdz` fájlba írja. Lásd [A 3D-s modell exportálása USD-be](topic:usd).
- **Számítások a 3D lapon.** Ahol a 3D lap eszközei távolságot kérnek, a parancssorhoz hasonlóan beírható egy számítás. Lásd [Számtani műveletek beírt értékben](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Készítés

- **Rajz küldése lézerre.** A {{cmd:LASER}}, vagy a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Lézer…}} egy panelt nyit a rajz felett: minden réteg vág, vonalat karcol, vonalakat gravíroz, alakzatokat tölt ki, képet gravíroz, vagy nem küldődik, a teljesítményével, sebességével és menetszámával. Az előnézet követi a szerkesztéseket, a {{ui:G-kód mentése…}} GRBL lézerüzemmódú G-kódot ír, Chrome-ban vagy Edge-ben pedig a panel be tudja keretezni a munkát, és USB-n keresztül elküldheti. A beállítások a rajzban mentődnek (DWG és DXF). Lásd [Rajz küldése lézerre](topic:laser-cutting).
- **Épületszerelési jelképek a villamos bővítményben.** Adat-, telefon- és TV-aljzatok, kulcsos és időkapcsolók, termosztát, kijárat-jelző, érzékelők, kézi jelzésadó és hangjelző, ventilátor, vízmelegítő, tűzhely, elektromos járműtöltő, fogyasztásmérő és alelosztó, valamint RCD- és RCBO-jelképek. Egy áramkör hordozhat RCD-t, az elosztótáblázatnak van RCD-oszlopa, az ellenőrzések pedig megnevezik azokat a dugaljáramköröket, amelyeknek nincs 30 mA-es vagy annál kisebb RCD-je. Ez tervezési emlékeztető, nem szabványellenőrzés.
- **A P&ID bővítmény.** A P&ID folyamatábrákat rajzol: csatlakozási pontokkal rendelkező jelképeket, folyamat- és jelvonalakat, címkéket, vonalszámokat, vonal-, berendezés-, műszer- és szelepjegyzékeket (CSV vagy munkafüzet) és ellenőrzéseket. A CadCraft-hoz jár, és ki van kapcsolva, amíg a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Bővítmények}} részben be nem kapcsolják. Ez rajzolási segédeszköz, nem mérnöki jóváhagyás, és a szövegei egyelőre csak angolul vannak.

### Kezdés és a képernyő

- **Vezetett első rajz.** A {{cmd:TOUR}} (vagy a kezdőkártyán lévő {{ui:Bemutató indítása}}) hat lépésen vezeti végig a valódi rajzban: egy vonal, egy kör, egy mozgatás, egy vágás, egy törlés és egy méret. A CadCraft első megnyitásakor, ha a rajz üres, magától indul. Lásd [Inkább vezetve haladna?](topic:getting-started#prefer-to-be-guided)
- **Gyorsreferencia és parancstérkép.** A [gyorsreferencia](topic:cheat-sheet) 40 mindennapi parancsot tartalmaz egy oldalon, nyomtatható PDF-ként is, a [parancstérkép](topic:command-map) pedig a parancsokat rövid nevükkel, A-tól Z-ig sorolja fel.
- **Az eszköztár bármelyik oldalon.** {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Az eszköztár helye}}: felül (mint korábban), alul, balra vagy jobbra, vagy írja be a {{cmd:TOOLBARDOCK}} parancsot. Lásd [Az eszköztár helye](topic:settings#toolbar-position).
- **Eszköztársorok.** {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Eszköztársorok}}: tördelés a férésig, 2 sor vagy 1 sor, a CadCraft eszköztárához és a Klasszikus rajzolás és Szalag stílusokhoz. A {{key:Shift+Ctrl+F1}} ezeken léptet végig, a {{key:Ctrl+F1}} azon, amit a gombok mutatnak, a {{cmd:TOOLBARROWS}} és a {{cmd:TOOLBAR}} pedig beállítja őket. A kezdő tippnek van bezáró gombja. Köszönet GJoe2-nek, aki pull requestként küldte. Lásd [Eszköztársorok](topic:settings#toolbar-rows).

### A CadCraft Studio-ban

- **Előzmények.** A {{cmd:HISTORY}} (`HIST`), vagy a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Előzmények…}}: a másolatok, amelyeket a Studio megőriz, amikor egy rajzot megnyit és ment, valamint a rajz felhőverziói, ha a felhőből nyitották meg. Egyet megnyithat vagy visszaállíthat, kettőt összehasonlíthat; a hozzáadott, eltávolított és módosított elemek színnel jelölve. Lásd [Előzmények](topic:history).
- **acad.lsp és acaddoc.lsp.** Az {{cmd:APPLOAD}}-ban válasszon támogatási mappát: a két fájl a CadCraft indulásakor töltődik be (az acaddoc.lsp minden új rajzlapnál újra), az `S::STARTUP` pedig utánuk fut. Lásd [Alkalmazások betöltése](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **A plottolás párbeszédpanel saját ablakban.** A címsorában lévő gomb egy olyan ablakba helyezi, amelyet egy másik monitorra lehet tenni. Lásd [Párbeszédpanel mozgatása](common:arrange-panels#move-a-dialog).

### AI-asszisztenseknek

- **Fájlok név szerint, a kiválasztott mappákban.** A CadCraft Studio-ban az asszisztens név szerint nyithat, menthet és plottolhat fájlokat, és átadhatja a parancsnak a kért fájlt (INSERT fájlból, a COUNT exportja, SAVEAS, PLOT), de csak azokban a mappákban, amelyeket a {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}} alatt adnak hozzá. Lásd [Fájlok használata a kiválasztott mappákban](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Kevesebb hívás.** Egy asszisztens egyszerre gépelhet be egész parancssort, nyitva tarthat egy parancsot a hívásai között, megszámolhatja az objektumokat típus és réteg szerint anélkül, hogy listázná őket, és egy lépésben elhelyezhet egy blokkot az attribútumértékeivel.
- **Ablak nélkül.** A `cadcraft` parancssor SVG-plotokat ír, és egyszerre sok fájlt konvertál, plottol, ellenőriz vagy ír le. Az MCP-csomag még nincs közzétéve. Lásd [Fájlok kezelése a CadCraft megnyitása nélkül](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Módosítva

- **Az érintőpad eltolja a nézetet.** Két ujjal mozgatva az érintőpadon a 2D-s nézet követi őket; csippentéssel és az egér görgőjével nagyít. Lásd [Egér, érintőpad és érintés](topic:mouse-trackpad-touch).
- **Az OLE-objektumok megmaradnak.** Egy DXF beágyazott objektumai képként vagy címkézett keretként jelennek meg, és a DXF 2000 visszamenti őket. Egy DWG-é megmarad, és DWG-ként mentéskor visszaíródik, de még nem jelenik meg. Korábban mentéskor elvesztek. Lásd [Más programokból származó objektumok (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Egy új rajz mértékegységei** azt a mértékegységet követik, amelyet csillaggal jelöltek meg a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} részben.

## Javítva

- Az üresen megnyíló elrendezések, illetve azok, amelyek elvesztettek egy nézetablakot, és helyette az egész modellt mutatták, most valódi nézetablakaikkal nyílnak meg. A tartalmával kapcsolatban nem álló elrendezés megmarad, és a megnyitási jelentés ezt közli.
- A régebbi kódlapokon lévő DXF-fájlokban a cirill és koreai szöveg összezavarodott. Most helyesen olvasódik.
- A más programokból származó bekezdésszöveg megnyitáskor elvesztette a formázását, és sima szövegként mentődött vissza.

## Minden alkalmazásban

- **Mértékegységek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Mértékegységek}} részben a hosszúságnak, a területnek, a térfogatnak, a szögnek és a lejtésnek külön-külön listája van, a mértékegységek definíciói szerinti pontos méretekkel (az USA-beli felmérési láb saját mértékegység). A soha nem használt mértékegységek kikapcsolhatók, és ekkor kikerülnek a listákból; ha egyet csillaggal jelölnek meg, az új munka abban indul. Egy fájl mindig megtartja a saját mértékegységét. A CadCraft-ban a csillag az új rajz mértékegységét állítja be, ha a rajz hordozhatja azt a mértékegységet; a CadCraft saját {{ui:Mértékegységek}} mezője még nem követi a kapcsolókat. Ha a rajznak már vannak mértékegységei, a beírt hossz bármelyik mértékegység jelölését viselheti. Lásd [Mértékegységek, beírt értékek és a mértékegység-listák](common:unit-lists).
- **Sűrűbb elrendezés és elrejthető panelek.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Elrendezés sűrűsége}} › {{ui:Tömör}} több mindent fér a képernyőre (az érintőképernyők és telefonok megtartják nagy gombjaikat). Minden oldalsó panelnek vékony címsora van: húzással rögzíthető vagy lebegtethető, egy másik panel sávjára ejtve lapokként oszthat meg egy keretet, rögzíthető úgy, hogy a szélre csússzon, vagy elrejthető, és a szélről visszahozható. Lásd [Panelek elrendezése](common:arrange-panels#make-the-layout-denser).
- **A párbeszédpanelek mozgathatók.** Húzza a párbeszédpanelt a címsoránál fogva a rajz útjából; visszatér oda, ahol hagyta. A címsorra duplán kattintva középre igazítja újra. Lásd [Párbeszédpanel mozgatása](common:arrange-panels#move-a-dialog).
- **Receptek AI-asszisztenseknek.** Tíz kidolgozott kérés saját asszisztensnek (rajz rendbetétele, készlet plottolása, rajzok ellenőrzése, kérdések feltevése a modellnek, mennyiségkimutatás összesítése, alkatrész-változat kipróbálása…), mindegyik a hívott eszközeivel és a szükséges jogosultságaival, és mindegyik a tesztjeinkben újrajátszva. Az alkalmazások nem tartalmaznak AI-t. Lásd [Receptek AI-asszisztenseknek](common:assistants-recipes).
- **Nyelvek.** A **Português (Portugal)** új a {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Nyelv}} alatt. Ez, a **Português (Brasil)**, az **Español (México)** és a **Bahasa Indonesia** most már az alkalmazások minden szavát tartalmazza, piszkozatként, amelyet még nem olvasott el anyanyelvi lektor. A súgótémakörök angolul vannak.
- **A CadCraft Studio** megmondja, miért nem sikerült a frissítés-ellenőrzés (még nincs fájl a rendszeréhez, nincs hálózat, hibás aláírás), ahelyett, hogy csak „Kész”-t írna, és nem hozza vissza a bezárt Újdonságok kártyát, amíg nincs újabb kiadás.

## Ebben a verzióban még nincs

- **A 0.7 nincs kódaláírva.** Az aláírás és a Microsoft Store-csomag a 0.8-ra került, mert a tanúsítvány ellenőrzése még nem érkezett meg. Ellenőrizze az egyes fájlok melletti SHA-256 értéket a getcadcraft.com/download oldalon. Windows alatt, ha a SmartScreen leállítja a telepítőt, válassza a {{ui:További információ}}, majd a {{ui:Mégis futtatás}} lehetőséget. Mac-en az első alkalommal kattintson jobb gombbal a CadCraft Studio-ra, és válassza a {{ui:Megnyitás}} lehetőséget. A CadCraft Studio még nincs alkalmazásboltban, és még nincs iPad- vagy iPhone-verzió.
- A {{ui:Mértékegységek}} szögek és lejtések listái mentődnek, de még egyetlen mező sem olvassa őket.
- A DWG OLE-objektumai megmaradnak, de nem jelennek meg, és az OLE-objektumokon belüli metafájl-képek nem rajzolódnak ki.
- Más programok plot stílustábláinak (CTB-fájlok) olvasása egy mintafájlra vár.
- A régebbi ázsiai szöveg, amelyet `\M+` kódokkal írtak, olvasható, de még nem ellenőrizték egy másik programból származó fájllal.
- PDF-alátétek: az oldalon belüli képek a képernyőn látszanak, de nem plottolódnak, egy asszisztens plotja kihagyja az alátéteket, és azt, hogy más programok hogyan olvassák a mentett kivágást és léptéket, még nem ellenőrizték bennük.
- Előzmények: a CadCraft még nem küldi a mentéseit a felhőbe, így a felhőverziók csak más eszközökről és a webről mentett verziók. Az Előzmények csak a CadCraft Studio-ban érhetők el.
- Még nem ellenőrizték, hogy a Studio megőrzi-e az acad.lsp támogatási mappát újraindítás után; ha kéri, az APPLOAD-ban válassza ki újra a mappát.
- A Lézer-panelt még nem próbálták valódi lézeren: minden beállítást hulladékanyagon teszteljen. A CadCraft Studio-ban nincs Web Serial, így a Studio-ban a panel csak G-kódot ment.
- A szkennelések regisztrálását kitalált szkenneléseken próbálták ki, valódi szkennerkészleten még nem.
- A kétujjas mozgatást szimulált érintőpad-eseményekkel próbálták ki, valódi érintőpadon még nem.
- A {{cmd:PEDIT}}-nek nincs csúcs-szerkesztési lehetősége (használjon fogópontokat vagy a Tulajdonságokat). Az eltolás, vágás, nyújtás, lekerekítés, törés és egyesítés még nem fogad el spline-t; a spline magassága (Z) nem marad meg.
- Új bekezdésszöveghez még nem lehet formázókódokat adni, és az SVG-plotok a formázott szöveget egy színnel mutatják.
- A WBLOCK „Teljes rajz” lehetősége csak a modellt írja, a lapokat nem. Az aktuális méretezési stílus nincs mentve a fájlba: a rajz Standard aktuális stílussal nyílik meg.
- A szalagmenüs stílusokban még nincs réteg-, szín- vagy vonaltípus-lista: használja a {{ui:Rétegek}} panelt és a {{ui:Tulajdonságok}} ablakot.
- A pontfelhők még nincsenek a rajzban mentve vagy plottolva, és az E57-fájlok legfeljebb 6 millió pontot és 512 MB-ot nyitnak meg.
- A CadCraft mentett DWG-fájljait még nem ellenőrizték magában az AutoCAD-ben.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon van.

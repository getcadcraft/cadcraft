---
title: Plottolás PDF-be
summary: Készítsen PDF-et egy rajzlapról egész méretben, vagy a modellről léptékben vagy a papírra illesztve, nyomtassa ki a böngészőből vagy a Studióból, vagy mentse PNG vagy SVG formátumban.
keywords: plottolás, nyomtatás, nyomtató, példányszám, png, svg, kép, pdf, publikálás, exportpdf, papír, lépték, egyszínű, szürkeárnyalat, fekete-fehér, vonalvastagság, toll, oldalbeállítás, plottolási ablak, plottolási stílus, plottolási stílustábla, ctb, színfüggő, rasztrozás, plotstyles, stylesmanager
from: a4752f83
---

## Amit elkészít

Egy rajzlap PDF-je egész méretben, utána a modell gyors PDF-je 1:100 léptékben, és egy nyomtatott példány.

A PDF a böngészőben készül; semmi sem töltődik fel. Vektoros PDF: a vonalak bármilyen nagyításnál élesek maradnak, a szöveg pedig kereshető.

## Rajzlap plottolása

1. Kattintson a rajzlap lapjára a rajz alatt.
2. Nyomja meg a {{key:Mod+P}} billentyűket, kattintson a {{ui:Plot}} gombra, vagy írja be: `PLOT`, majd nyomja meg az {{key:Enter}} billentyűt.

Megnyílik a {{ui:Plot to PDF}} párbeszédpanel. Megadja, melyik rajzlapot plottolja és milyen papírra, egész méretben, ahogy látja. A jobb oldali előnézet mutatja a rajzlapot.

3. A {{ui:Plot style}} résznél válassza a {{ui:Monochrome (black)}} lehetőséget a fekete vonalakhoz, a {{ui:Colour (as drawn)}} lehetőséget a színek megtartásához, a {{ui:Grayscale}} lehetőséget, vagy saját táblázatot (lásd [Plottolási stílustáblák](topic:plot-pdf#plot-style-tables)). A rajzlap megtartja ezt a választást: a rajzzal együtt mentődik.
4. A {{ui:Line weight}} résznél válasszon tollszélességet 0,13 mm és 0,70 mm között. Az alapértelmezett vonalvastagságú vonalak ezen a szélességen nyomtatódnak; a saját vonalvastagsággal rendelkező vonalak (réteg vagy objektum, vagy a színük tolla a táblázatban) azon.
5. Kattintson a {{ui:Download PDF}} gombra.

A böngésző a rajzról és a rajzlapról elnevezett PDF-et tölt le, például `Drawing1-A-101 Plan.pdf`. Az előzmények a fájl méretét bájtban, a papírméretet milliméterben mutatják.

A rajzlap mindig 1:1 léptékben plottolódik a saját papírján. A papír megváltoztatásához a rajzlapon magán módosítsa (lásd [Rajzlap beállítása](topic:sheets-and-viewports)). A nem plottolásra állított rétegek kimaradnak, a nézetablak-keretek is.

## Minden rajzlap egy PDF-ben

Két vagy több rajzlap esetén a {{ui:Plot to PDF}} párbeszédpanelen van a {{ui:All sheets in one PDF}} lehetőség; vagy írja be: {{cmd:PUBLISH}}. Az {{key:Enter}} billentyű minden rajzlapot kiválasztja; a Néhány (`S`) a rajzlapok nevét kéri, vesszővel elválasztva.

Egy PDF töltődik le, oldalanként egy rajzlappal, a lapfülek sorrendjében, mindegyik a saját papírméretében, és rajzlapnevenként egy könyvjelzővel. Minden rajzlap a saját plottolási stílustáblájával plottolódik; ha nincs kiválasztva, a párbeszédpanelben utoljára választott táblázatot és az utoljára választott tollszélességet használja.

## A modell plottolása

1. Kattintson a {{ui:Model}} fülre.
2. Nyomja meg a {{key:Mod+P}} billentyűket.

A párbeszédpanel jelzi, hogy a modellt egy papírlapra plottolja, és további beállításokat mutat:

3. A {{ui:Area}} résznél válassza ki, mit plottoljon:
   - {{ui:Everything (extents)}}: a teljes rajz.
   - {{ui:What is on screen}}: a rajzon most látható terület.
   - {{ui:A window…}}: majd kattintson a {{ui:Pick}} gombra, kattintson a rajzon két sarokra, és a párbeszédpanel visszatér.
4. A {{ui:Paper}} résznél válasszon méretet: ISO A4-től A0-ig, Letter, Legal, Tabloid, valamint ANSI C és D, vagy ARCH C, D és E.
5. Az {{ui:Orientation}} résznél válassza a {{ui:Landscape}} vagy a {{ui:Portrait}} lehetőséget.
6. A {{ui:Scale}} résznél válassza az {{ui:Fit to paper}} lehetőséget, vagy egy léptéket, például `1:100`.

A beállítások alatt egy sor jelzi a léptéket és azt, hogy a terület mekkora lesz a papíron. Ha nagyobb a papírnál, ezt is jelzi: a szélek levágódnak. Válasszon kisebb léptéket, nagyobb papírt, vagy az {{ui:Fit to paper}} lehetőséget.

7. Kattintson a {{ui:Download PDF}} gombra.

A modell-plottolás 5 mm-es margót hagy a szél körül, mert a legtöbb nyomtató nem tud a szélig nyomtatni. Az {{ui:Fit to paper}} furcsa léptéket ad (az előzmények és az információs sor „(illesztve)” szöveget ír); ha a rajznak valódi méretben kell mérnie, válasszon szabványos léptéket.

:::note
A léptékek valós egységekben értelmeződnek. Az 1:100 helyes eredményéhez állítsa be a {{ui:Current settings}} résznél a {{ui:Units}} beállítást arra, hogy mi egy rajzegység. A mértékegység nélküli rajzot a program milliméterként kezeli.
:::

## Plottolási stílustáblák

A plottolási stílustábla megadja, hogy a 255 szabványos rajzszín közül mindegyik hogyan nyomtatódjon, ahogy a színfüggő plottolási stílustábla (CTB) más CAD programokban. Három be van építve:

| Tábla | Nyomtatás |
|---|---|
| {{ui:Colour (as drawn)}} | Minden objektum a saját színében. |
| {{ui:Monochrome (black)}} | Minden szín fekete: a rajzoknál szokásos választás. |
| {{ui:Grayscale}} | Minden szín a saját szürke árnyalatában, így a színek fekete-fehér nyomtatón is elkülönülnek. |

Saját készítéséhez, például piros vonalak vastagon és feketén, minden más vékonyan:

1. A {{ui:Plot to PDF}} párbeszédpanelen kattintson az {{ui:Edit tables…}} gombra (vagy írja be: {{cmd:PLOTSTYLES}}).
2. Kattintson a {{ui:New}} gombra, és a {{ui:Name}} mezőbe írjon nevet, például `office`. Ha egy beépített táblából szeretne kiindulni, válassza ki a {{ui:Table}} listában, majd kattintson a {{ui:Copy}} gombra.
3. Kattintson a rácsban egy színre. A {{key:Shift}}+kattintás színtartományt jelöl ki, a {{key:Mod}}+kattintás egyet ad hozzá, a {{ui:Select every colour}} pedig mindet kijelöli.
4. Állítsa be, mivé nyomtatódjanak a kijelölt színek:
   - {{ui:Prints in}}: {{ui:Its own colour}}, {{ui:Black}} vagy {{ui:Another colour…}}.
   - {{ui:As a gray}}: a szín a saját szürke árnyalatában.
   - {{ui:Ink (%)}}: 100 a teljes tinta, 50 a fehér felé félúton (rasztrozás), háttérvonalakhoz.
   - {{ui:Lineweight}}: a {{ui:Its own lineweight}} megtartja az objektum vagy a réteg vonalvastagságát; egy érték esetén az adott színű minden vonal ezen a szélességen nyomtatódik.
   - {{ui:Linetype}}: az adott színű minden vonal másik vonaltípussal nyomtatódik (például minden piros vonal szaggatott); a {{ui:Use the object's linetype}} megtartja az eredetit.
   - {{ui:Line end}} és {{ui:Line join}}: tompa, négyzetes vagy kerek vonalvégek, illetve gérvágású, letört vagy kerek sarkok (kerek, ahogy korábban is, ha nem állít be semmit).
   - {{ui:Fill style}}: a tömör kitöltés ebben a színben vonalkázott mintaként nyomtatódik tinta helyett (vízszintes vagy függőleges csíkok, ferde vonalak, kereszt, rombuszok, négyzetes pöttyök), olyan nyomtatókhoz és alaprajzokhoz, ahol a tömör tinta túl erős.
   A táblának még két beállítása van: a {{ui:Lineweights}}, vagyis a felismert vonalvastagságok (a nyomtatott vonal a legközelebbi értékre kerül), és a {{ui:Linetype scale}}, egy szorzó, amely minden nem ISO vonaltípus szaggatására hat.
5. Kattintson a {{ui:Done}} gombra. A táblázat a rajzban marad, a rajzlap (vagy a modell) pedig már ezzel plottol. A {{ui:Cancel}} elveti a módosításokat.

Az saját tollal rendelkező szín sarkában pont látszik, a vonalvastagságot beállító szín alján pedig egy másik pont. Valódi színnel rendelkező objektum (nem a 255 szabványos szín egyike) a legközelebbi szabványos szín tollját használja.

A rajz megtartja a táblázatait és az egyes rajzlapok választását, amikor DWG (2000–2018) vagy DXF (R12 vagy 2000) formátumban menti, és ezekkel nyílik meg újra. Más programok a nevet látják az egyes rajzlapok oldalbeállításában (`office.ctb`), magát a táblázatot nem. Más programból származó rajz, amelynek oldalbeállítása olyan táblát nevez meg, mint például `monochrome.ctb`, a beépített, ilyen nevű táblával plottol; más névnél a párbeszédpanel közli, hogy a rajznak nincs ilyen táblája, és a rajz színeivel plottol, amíg nem választ táblát, vagy nem készít ilyen nevűt.

Egy táblázat másik rajzban való használatához a {{ui:Plot style tables}} résznél kattintson az {{ui:Export}} gombra (ez `office.plotstyle.json` fájlt ment), majd a másik rajzban az {{ui:Import…}} gombra. Az {{ui:Import…}} más programok `.ctb` fájlját is beolvassa: a formátum közzétett leírása alapján olvassa, és **még nem ellenőriztük valódi fájllal**. Minden szín színe, rasztrozása és vonalvastagsága beolvasásra kerül; a szürkeárnyalat, a tollszámok, a vonaltípusok, a vonalvégek és -csatlakozások, valamint a kitöltési stílusok nem, a nevesített (`.stb`) táblát pedig nem fogadja el. Hasonlítsa össze az első plottolást a várt eredménnyel, és ha hibás, küldje el nekünk a fájlt.

## Nyomtatás

**A böngészőben** kattintson a {{ui:Print…}} gombra. A CadCraft elkészíti a PDF-et, és megnyitja hozzá a böngésző saját nyomtatási párbeszédpanelét. Ott a „Tényleges méret” vagy a 100% lehetőséget válassza (ne az „Illesztés”-t), hogy a léptéket megtartsa. Ha a böngésző nem tud nyomtatni az oldalról, a PDF helyette új lapon nyílik meg: onnan nyomtassa ki a {{key:Mod+P}} billentyűkkel.

Kinyomtathatja a {{ui:Open to print}} gombbal is: a PDF új böngészőlapon nyílik meg, és onnan nyomtatja ki.

:::safari
A Safari megjelenítheti a PDF-et, és megvárhatja, amíg a **Fájl**, majd a **Nyomtatás** menüpontot használja.
:::

Ha a böngésző letiltja az új lapot, a CadCraft a PDF-et letölti, és ezt az előzményekben jelzi. A következő alkalomra engedélyezze a felugró ablakokat az oldalnak, hogy lapon nyíljon meg.

**A CadCraft Studio** alkalmazásban a {{ui:Plot to PDF}} párbeszédpanel a számítógép nyomtatóit listázza. Válassza ki a {{ui:Printer}} és a {{ui:Paper in the printer}} beállítást, valamint a {{ui:Copies}} számát, majd kattintson a {{ui:Print…}} gombra. A {{ui:A plottolással megegyező}} a rajzlap méretének megfelelő nyomtatópapírt választja (A3 az A3-as rajzlaphoz); ha a nyomtatón nincs ilyen, a saját papírját használja, és a rajzlapot ahhoz illeszti. Windows rendszeren a rajzlap 300 dpi-s képként kerül elküldésre, mert a Windows PDF-program nélkül nem nyomtat PDF-et; Linux és macOS rendszeren maga a PDF kerül a rendszer nyomtatási szolgáltatásához. Semmi sem hagyja el a számítógépet.

## Kép- és SVG-fájlok

A {{ui:Download PNG}} 300 dpi-s képként menti a plottolt rajzlapot (csak akkor csökkentve, ha egy nagyon nagy rajzlap nagyobb lenne, mint amit a böngésző elő tud állítani; az előzmények ezt jelzik). A {{ui:Download SVG}} méretezhető rajzként menti milliméterben, a plottolás vonalaival és szövegeivel. Mindkettő ugyanabból a plottolásból készül, mint a PDF, ugyanazzal a plottolási stílussal, vonalvastagsággal és területtel. A rajzba illesztett képek csak a PDF-ben szerepelnek; az előzmények megmondják, hány maradt ki.

## Képek

A képek a saját felbontásukban nyomtatódnak, a vonalak alatt. A párbeszédpanel {{ui:Pictures}} beállítása 600, 300 vagy 150 dpi-re korlátozza őket, kisebb fájlért. A vonalak, szövegek és kitöltések mindig élesek maradnak (vektoros), az átlátszóság pedig átlátszó marad. Lásd [Képek a rajzban](topic:pictures).

## Megjegyzett beállítások

A párbeszédpanel a böngészőben megjegyzi az utoljára használt papírt, tájolást, léptéket és vonalvastagságot. A plottolási stílustáblát minden rajzlap a rajzban tárolja; ha nincs kiválasztva, a rajzlap az utoljára választott táblával indul. Egy kijelölt ablak az oldal újratöltéséig marad meg; utána a párbeszédpanel a {{ui:Everything (extents)}} beállítással indul.

## Gyakori hibák

- **A PDF üres, vagy a gombok szürkék.** Nincs mit plottolni (üres modell), vagy a {{ui:A window…}} van kiválasztva, és még nincs ablak kijelölve („Jelöljön ki egy ablakot a plottoláshoz.”).
- **A PDF-ben a szöveg „?” jelet mutat.** A lengyel, cseh, cirill, görög és más európai írásrendszerek szövegei saját karaktereikkel nyomtatódnak: a PDF a szükséges betűket tartalmazza (a Liberation Sans betűtípusból, amelynek szélessége a Helvetica szélességével egyezik), a szöveg pedig kijelölhető és kereshető marad. A kínai, japán és koreai szöveg is saját karaktereivel nyomtatódik: ha a rajzban szerepel, a plottolás egy nagyobb betűtípust tölt le (kb. 10 MB, egyszer), a PDF pedig csak a használt karaktereket tartalmazza, ezért az első alkalommal internetkapcsolat kell hozzá (a korábban mentett offline másolatnál nem). A héber ugyanabba a beágyazott betűtípusba kerül, mint a latin szöveg; az arab, perzsa és urdu szöveg egy további betűtípust tölt le (1 MB alatt, egyszer); a jobbról balra haladó sorok rendezve vannak, betűik pedig összekapcsolódnak (lásd [Szöveg](topic:text)). A fenti betűtípusokon kívül eső ritka ideogramok és a hindi típusú összetett alakzást igénylő írások „?” jelként nyomtatódnak; az előzmények megszámolják őket.
- **Minden vonal egyforma vastag.** Az alapértelmezett vonalvastagságot használják. Adjon a rétegeknek vagy objektumoknak {{ui:Lineweight}} értéket a jobb oldali panelen (lásd [Vonalvastagságok és vonaltípusok](topic:units-papers-scales#line-weights-and-linetypes)), vagy állítson be vonalvastagságot színenként egy [plottolási stílustáblában](topic:plot-pdf#plot-style-tables).
- **„(nincs ebben a rajzban)” a plottolási stílus mellett.** A rajz másik programból származik, és olyan táblát nevez meg, amely nincs benne. Válasszon az egyik táblázat közül, vagy készítsen ilyen nevűt.
- **A segédvonalak is nyomtatódtak.** Állítsa be a rétegüket úgy, hogy ne plottoljon: kattintson a rétegük nyomtatógombjára a {{ui:Layers}} panelen.
- **A nyomtatvány rossz méretű.** A nyomtató átskálázta. Valós méretben nyomtasson.
- **A {{key:Mod+P}} a böngésző nyomtatási párbeszédpanelét nyitotta meg.** A kurzor a jobb oldali panel egyik mezőjében volt, vagy másik párbeszédpanel volt nyitva. Az {{key:Enter}} vagy az {{key:Esc}} billentyűvel lépjen ki a mezőből, majd próbálja újra, vagy kattintson a {{ui:Plot}} gombra.
- **A {{key:Mod+P}} nem csinált semmit.** Parancs fut. Nyomja meg előbb az {{key:Esc}} billentyűt.

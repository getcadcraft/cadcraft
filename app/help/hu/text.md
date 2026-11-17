---
title: Szöveg és feliratok hozzáadása
summary: Helyiségfeliratok elhelyezése egysoros szöveggel, tördelt megjegyzések írása helyben gépelt bekezdésszöveggel, és a szöveg utólagos szerkesztése.
keywords: szöveg, dtext, mtext, mleader, multileader, vezetővonal, revcloud, revíziófelhő, felhő, keresés, csere, keresés és csere, bekezdés, tördelés, sortávolság, felirat, megjegyzés, jegyzet, magasság, igazítás, textmask, háttérmaszk, maszk, wipeout, kitakarás, elforgatás, szöveg szerkesztése, ddedit, textedit, betűtípus
from: 4b76be99
---

## Amit létrehoz

Két helyiségfelirat, vízszintesen és függőlegesen a helyiségek közepére igazítva, egy megjegyzés, amely a saját szélességére tördelődik, majd az egyik felirat javítása.

## Szövegmagasság és rajzlépték

A szövegmagasság rajzegységekben adandó meg. Milliméterben készülő rajzon, amelyet 1:50 léptékben plottolnak, a papíron 2,5 mm magas szöveg a modellben 2,5 × 50 = 125 egység magas legyen. Lapfülön papíregységekben rajzol, így ott a 2,5 valóban 2,5 mm a papíron.

## Középre igazított felirat elhelyezése

1. Írja be: `DT`, majd nyomja meg az {{key:Enter}} billentyűt (vagy kattintson az eszköztár {{ui:Szöveg}} gombjára). A parancssor ezt írja ki: `Adja meg a szöveg kezdőpontját [Igazítás (J)]:`.
2. Írja be: `J`, majd nyomja meg az {{key:Enter}} billentyűt.
3. A `Adja meg a beállítást [Bal (L)/Középre (C)/Jobb (R)/Közép (M)/TL/MC] <L>:` kérdésnél írja be: `MC`, majd nyomja meg az {{key:Enter}} billentyűt.
4. A `Adja meg a szöveg beszúrási pontját` kérdésnél kattintson egy helyiség közepére.
5. A `Adja meg a magasságot` kérdésnél írja be: `250`, majd nyomja meg az {{key:Enter}} billentyűt.
6. A `Adja meg a szöveg elforgatási szögét <0>` kérdésnél nyomja meg az {{key:Enter}} billentyűt.
7. A `Adja meg a szöveget` kérdésnél írja be: `KONYHA`, majd nyomja meg az {{key:Enter}} billentyűt.

A felirat megjelenik, a kattintott pontra középre igazítva.

8. Az üres `Adja meg a szöveget` kérdésnél nyomja meg az {{key:Enter}} billentyűt a parancs befejezéséhez.

## Tördelt megjegyzés írása

A bekezdésszöveg ({{cmd:MTEXT}}) adott szélességre tördelődik, és közvetlenül a rajzra gépelhető.

1. Írja be: `T`, majd nyomja meg az {{key:Enter}} billentyűt, vagy kattintson az eszköztár {{ui:Bekezdés}} gombjára.
2. A `Adja meg az első sarkot` kérdésnél kattintson arra a helyre, ahová a megjegyzés bal felső sarka kerül.
3. Ha előbb a magasságot szeretné megváltoztatni, írja be: `H`, nyomja meg az {{key:Enter}} billentyűt, írja be: `250`, majd nyomja meg az {{key:Enter}} billentyűt.
4. A `Adja meg a szemközti sarkot [Magasság (H)/Igazítás (J)/Sortávolság (L)/Elforgatás (R)/Szélesség (W)]` kérdésnél kattintson az első sarokhoz képest jobbra. A két sarok közötti távolság adja a tördelés szélességét; a lefelé történő kattintás nem korlátozza a szöveget.
5. A rajz fölött megnyílik egy doboz, benne a kurzorral. Írja be: `MINDEN MÉRET MILLIMÉTERBEN, HA NINCS MÁSKÉNT JELÖLVE`. A szavak gépelés közben a szélességnél tördelődnek.
6. Nyomja meg az {{key:Enter}} billentyűt új bekezdés kezdéséhez, és írja be: `ELLENŐRZENDŐ A HELYSZÍNEN`.
7. Nyomja meg a {{key:Mod+Enter}} billentyűkombinációt, kattintson a {{ui:OK}} gombra, vagy kattintson a dobozon kívülre. A megjegyzés egyetlen objektum lesz.

A doboz fölötti sáv gépelés közben módosítja a {{ui:Magasság}}, a {{ui:Sortávolság}} (1 a normál, az 1,5 a fele résszel nagyobb), a {{ui:Szélesség}} (0 = nincs tördelés) és az {{ui:Igazítás}} beállításokat. Az {{key:Esc}} vagy a {{ui:Mégse}} bezárja a dobozt, és nem ad hozzá semmit.

A második sarkánál megadható beállítások: `H` magasság, `J` igazítás (`TL` bal felső … `BR` jobb alsó: az a sarok vagy a doboz közepe, amely helyben marad), `L` sortávolság, `R` elforgatás, `W` gépelt szélesség a második sarok helyett.

:::note
Amíg a doboz nyitva van, a {{key:Space}} szóközt szúr be, az {{key:Enter}} pedig új bekezdést kezd. A mentett DWG a bekezdésszöveget MTEXT formában tárolja; a DXF R12 formátumban nincs bekezdésszöveg, ezért minden sor külön szövegként mentődik.
:::

### Több egysoros szöveg helyette

{{cmd:TEXT}} (`DT`) egyszerre egy sort kér: minden {{key:Enter}} a következő sort kezdi, ami a szövegmagasság 1,667-szeresével lejjebb kerül, és minden sor külön objektum. Üres sorban nyomja meg az {{key:Enter}} billentyűt a befejezéshez.

## Igazítási lehetőségek

| Lehetőség | Az a pont, amelyre kattint |
|---|---|
| Bal (alapérték) | Az alapvonal bal vége |
| Középre | Az alapvonal közepe |
| Jobb | Az alapvonal jobb vége |
| Közép, MC | A szöveg közepe vízszintesen és függőlegesen is |
| TL | A bal felső sarok |

## Szöveg szerkesztése

1. Kattintson duplán egy szövegobjektumra. Az új bekezdésszöveggel megegyező dobozban nyílik meg, a kurzor a végén áll.
2. Módosítsa a szavakat.
3. Nyomja meg a {{key:Mod+Enter}} billentyűkombinációt, vagy kattintson a dobozon kívülre. A rajzon lévő szöveg megváltozik; az {{key:Esc}} billentyű a változatlan szöveget hagyja meg.

A {{cmd:TEXTEDIT}} (`ED`) ugyanezt teszi: egymás után választ ki szövegeket, a végén nyomja meg az {{key:Enter}} billentyűt.

Szöveg kiválasztásakor a módosítást a jobb oldali panelen is elvégezheti: {{ui:Szöveg}}, {{ui:Magasság}}, {{ui:Tördelési szélesség}} (0 = nincs tördelés), {{ui:Sortávolság}}, {{ui:Elforgatás}}, az X és Y pozíció, valamint az {{ui:Igazítás}}. Az {{ui:Igazítás}} listában megjelenik a Bal alsó lehetőség is, amelyet más programok szövegei néha használnak.

## Formázás más programokból származó bekezdésszövegben

A DWG vagy DXF bekezdésszöveg kódokat tartalmazhat: szavankénti színeket, félkövér és dőlt szöveget, aláhúzást, felülvonást és áthúzást, egymás fölé írt törteket, mint az 1/2, valamint eltérő magasságot egy-egy szóra. A CadCraft megtartja ezeket a kódokat, megjeleníti őket (a képernyőn és a plottolt PDF-ben), és változatlanul menti vissza.

Ilyen szöveg szerkesztésekor (duplakattintás, {{cmd:TEXTEDIT}}, a jobb oldali panel Szöveg mezője vagy a {{cmd:FIND}} cserével) a szöveg egyszerű szavait szerkeszti. A beírt szó a mellette lévő szakaszba kerül, és annak színét és stílusát veszi fel; a többi kód a helyén marad. Ha egy egymás fölé írt tört számait átírja, a tört egyszerű szöveggé válik. A teljes szöveg beállítása a Szöveg mezőből csak akkor őrzi meg a kódokat, ha meg tudja állapítani, mely szavak maradtak meg.

A betűtípusnevek (`\F`) megmaradnak és mentődnek, de minden szöveg egy Helvetica jellegű betűtípussal jelenik meg. A kódok beírásához még nincs eszköztár.

## Mutatás valamire: többszörös vezetővonalak

A {{ui:Vezetővonal}} a {{ui:Feliratozás}} csoportban ({{cmd:MLEADER}}, `MLD`) egy nyilat, vezetővonalat, rövid leszállást és megjegyzést rajzol, egyetlen objektumként.

1. Kattintson a {{ui:Vezetővonal}} gombra. A `Adja meg a vezetővonal nyílhegyének helyét` kérdésnél kattintson arra, amire a megjegyzés vonatkozik.
2. A `Adja meg a vezetővonal leszállási helyét` kérdésnél kattintson arra a helyre, ahová a megjegyzés kerül. A leszállás arra az oldalra fordul, amelyre kattintott.
3. Írja be a megnyíló dobozba a megjegyzést, majd nyomja meg a {{key:Mod+Enter}} billentyűkombinációt.

Az első kérdésnél az `A` és az `L` a nyílhegy méretét és a leszállás hosszát állítja be; a szövegmagasság az új méretvonalakhoz beállított {{ui:Szövegmagasság}} és az {{ui:Általános lépték}} szorzatából adódik. A szöveg módosításához kattintson duplán a többszörös vezetővonalra. A fogópontokkal a nyílhegy és a leszállás mozgatható; a megjegyzés a leszállást követi. A {{ui:Tulajdonságok}} panelen: {{ui:Szöveg}}, {{ui:Magasság}}, {{ui:Tördelési szélesség}}, {{ui:Nyílhegy mérete}} és {{ui:Leszállási távolság}}.

:::note
A többszörös vezetővonalak DWG-ben valódi többszörös vezetővonalként mentődnek. A DXF R12 és 2000 formátumban nincs többszörös vezetővonal, ezért ott azok a vonalak, nyílhegy és szöveg mentődnek, amelyeket rajzolnak.
:::

## Változások jelölése revíziófelhővel

{{ui:Feliratozás}} › {{ui:Továbbiak}} › {{ui:Revíziófelhő}} ({{cmd:REVCLOUD}}, `RC`) íveket rajzol a változások köré. Az előzmények mutatják az ívhosszt és a használt típust.

- **Téglalap alakú** (első alkalommal): kattintson két sarokra.
- `P` **Sokszög alakú**: kattintson a sarkokra, az {{key:Enter}} zárja le a felhőt.
- `F` **Szabadkézi**: kattintson oda, ahol kezdődik, majd mozgassa a mutatót a terület körül kattintás nélkül; minden ívhossznyi távolságnál kerül be egy új ív. Kattintson, vagy nyomja meg az {{key:Enter}} billentyűt a lezáráshoz.
- `O` **Objektum**: válasszon ki egy zárt polivonalat, kört vagy ellipszist (vagy egy vonalat, ívet vagy nyitott polivonalat); az lesz a felhő. A `Megfordítsam az irányt?` kérdésnél az `Y` (Igen) befelé fordítja az íveket.
- `A` **Ívhossz**: az egyes ívek hossza. Válasszon olyan értéket, amely illik a plottolási léptékhez.

A felhő zárt polivonal ívekből áll, ezért minden formátumban mentődik.

## Szavak keresése és cseréje

{{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Keresés és csere}} ({{cmd:FIND}}) a megnyitott lapon lévő szövegeket, blokkattribútumok értékeit és méretvonal-szövegeket nézi át (vagy csak a kijelölt objektumokban).

1. Írja be a szavakat a {{ui:Keresés}} mezőbe. A lista megmutatja, hol fordulnak elő, és a találatok számát.
2. Szükség esetén válassza a {{ui:Kis- és nagybetű megkülönböztetése}}, a {{ui:Csak egész szavak}} vagy a {{ui:Helyettesítő karakterek használata (* és ?)}} lehetőséget, és törölje a jelölést ott, ahol nem kell keresni.
3. Kattintson a {{ui:A találatok kijelölése}} gombra az objektumok kijelöléséhez, vagy írja be az új szavakat a {{ui:Csere erre}} mezőbe (a lista megmutatja, mivé válik minden találat), majd kattintson az {{ui:Összes cseréje}} gombra. Egy {{key:Mod+Z}} visszavon minden cserét.

A méretvonal mért értéke nem szöveg, ezért soha nem cserélődik: a `<> TYP.` esetében csak a `TYP.` cserélhető.

## Vonalak elrejtése a felirat mögött

1. Jelölje ki a szövegeket, írja be: {{cmd:TEXTMASK}}, majd nyomja meg az {{key:Enter}} billentyűt.
2. A `B` a rajz háttérszínét festi a szövegek mögé; a `C` egy színszámot kér. Az `O` eltávolítja a maszkot.
3. `Keretezési eltolási tényező`: az {{key:Enter}} megtartja az 1,5-öt, vagyis a szöveg körül fél szövegmagasságnyi térközt.

A maszk a szöveg alatti vonalakat takarja, a képernyőn és a plottoláskor is. A DWG 2004 vagy újabb és a DXF 2000 megőrzi; a 2000-es DWG formátum és a DXF R12 nem tudja, a mentés ezt jelzi.

## Betűtípus

Minden szöveg Helvetica jellegű betűtípussal jelenik meg, a képernyőn és a PDF-ekben. A megnyitott rajzok szövegei megtartják szavaikat, magasságukat és helyzetüket, de az eredeti betűtípusukat nem. (A bekezdésszövegen belüli betűtípusnevek a fájlban megmaradnak, lásd fent.)

A plottolt PDF-ekben az európai írásrendszerek, a cirill és a görög szöveg önmagaként nyomtatódik (a PDF tartalmazza a szükséges betűket, és a szöveg továbbra is kijelölhető és kereshető). A kínai, japán és koreai szöveg szintén önmagaként nyomtatódik (a plottolás az első alkalommal szükség esetén nagyobb betűtípust tölt le). Az arab, perzsa, urdu és héber szöveg is önmagaként nyomtatódik (lásd a következő szakaszt). Azok a karakterek, amelyekhez egyetlen betűtípus sincs betű, „?” jelként nyomtatódnak, és az előzmények megmondják, hányan voltak.

## Jobbról balra írt szöveg: arab, perzsa, urdu, héber

Írja be a szöveget a szokásos módon: a {{cmd:TEXT}} és a {{cmd:MTEXT}} minden sort olvasási sorrendben rajzol. Az a sor, amelynek első betűje arab vagy héber, jobbról balra olvasódik; a benne lévő számok és latin szavak megtartják saját balról jobbra sorrendjüket, és az arab írású betűk összekapcsolódnak. Az a sor, amely latin betűvel kezdődik, balról jobbra marad, és a benne lévő jobbról balra írt szavak a helyükön maradnak. A többsoros szöveg minden bekezdése saját irányt kap, és egy tördelt bekezdés minden során megtartja azt.

A szöveg úgy tárolódik, ahogy beírta, így a DWG- és DXF-fájlok változatlanul cserélik más programokkal. A beszúrási pont és az igazítás ({{ui:Bal}}, {{ui:Középpont}}, {{ui:Jobb}}) ugyanazt az oldalt jelenti, mint bármely szövegnél: a jobbról balra írt megjegyzés, amelynek a jobb végéhez kell igazodnia, a {{ui:Jobb}} igazítást kívánja.

A képernyőn a betűk a rendszer betűtípusaiból jönnek. Plottolt PDF-ben a héber ugyanazt a beágyazott betűtípust használja, mint a latin szöveg; az arab írású szöveghez a plottolás egy további betűtípust tölt le (1 MB alatt, egyszer), és a teljes PDF utána abban a betűtípusban nyomtatódik. Ehhez a három urdu karakterhez (heh goal, yeh barree és az urdu teljes pont), amelynek a betűtípusban nincs saját formája, a legközelebbi arab betű alakja nyomtatódik. Ha egy rajzon arab írású és kínai, japán vagy koreai szöveg is van, a kettő közül az egyik „?” jelként nyomtatódik, mert egy plottban egy betűtípus szerepel. A betöltött SHX-betűtípusban lévő szöveg akkor rendeződik és kapcsolódik össze, ha a betűtípus a betűket a Unicode-helyeiken tartalmazza; régi, már formázott betűtípusoknál használja a {{cmd:SHXFONTS}} parancs {{ui:Megfordítás}} beállítását, mint eddig.

## Gyakori hibák

- **A szöveg túl kicsi ahhoz, hogy lássa.** A magasság rajzegységekben értendő. Nagy rajzon használjon nagy magasságot (lásd fent), vagy nagyítson.
- **A parancs egy sor után befejeződött.** Üres sorban nyomta meg az {{key:Enter}} billentyűt a {{cmd:TEXT}} parancsnál. Indítsa újra, vagy használjon bekezdésszöveget (`T`), ahol az {{key:Enter}} új bekezdést kezd.
- **A `T` egy doboz megnyitását eredményezte egysoros kérés helyett.** Az AutoCAD-hez hasonlóan a `T` bekezdésszöveg ({{cmd:MTEXT}}); az egysoros szöveg a `DT`.
- **A szöveg másképp tördelődik, mint az AutoCAD-ben.** A CadCraft a Helvetica szélességeivel tördel; más betűtípus egy szóval többet vagy kevesebbet férhet el a sorban.
- **Szöveg egy tükrözött másolatban.** Tükrözve helyezkedik el, de balról jobbra továbbra is olvasható marad.

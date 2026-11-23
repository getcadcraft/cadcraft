---
title: Mértékegységek, papírméretek és léptékek
summary: Mit jelentenek a rajzegységek a CadCraftban, a lapok és nyomtatások papírméretei, minden szabványos lépték, és hogy a szöveg- és méretezési méretek hogyan viszonyulnak a nyomtatási léptékhez.
keywords: mértékegység, milliméter, hüvelyk, láb, láb és hüvelyk, építészeti, mérnöki, törtes, törtek, lunits, hosszformátum, pontosság, méter, papírméret, a3, a1, arch d, ansi, tabloid, letter, lépték, 1:100, 1/4 hüvelyk, építészeti lépték, mérnöki lépték, insunits
from: 7dc9b62e
---

## Rajzegységek

Teljes méretben rajzol, rajzegységekben. Hogy egy egység mit jelent, azt a rajz **Mértékegységek** beállítása adja meg:

1. Nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve, a {{ui:Modell}} lapon.
2. A {{ui:Jelenlegi beállítások}} alatt válassza a {{ui:Mértékegységek}} menüpontot: {{ui:Mértékegység nélkül}}, {{ui:Milliméter}}, {{ui:Centiméter}}, {{ui:Méter}}, {{ui:Hüvelyk}} vagy {{ui:Láb}}.

A méretezések a rajzegységtől függetlenül írhatják hosszaikat milliméterben, centiméterben, méterben vagy kilométerben: lásd [Méretek mm, cm, m vagy km egységben](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

A mértékegység megváltoztatása semmit nem átméretez. Azt változtatja meg, hogyan értelmeződnek a léptékek lapokon és nyomtatásokban, és milyen léptékeket kínál fel. A DWG vagy DXF fájlból megnyitott rajz megtartja a fájlban tárolt egységeket; a bal oldali panel {{ui:Rajz}} része mutatja őket.

A {{ui:Mértékegység nélkül}} rajzot a papír egységének tekinti: ISO papíron milliméterben, amerikai papíron hüvelykben.

## Láb és hüvelyk, és törtek

Az, hogy a hosszak hogyan **íródnak ki és gépelhetők be**, külön beállítás, a hosszformátum. Nem változtatja a geometriát, csak a számok megjelenését és azt, hogy mit lehet beírni.

1. Nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve, a {{ui:Modell}} lapon.
2. A {{ui:Jelenlegi beállítások}} alatt válassza a {{ui:Hosszformátum}} menüpontot: {{ui:Tizedes}} (`150.5`), {{ui:Építészeti}} (`12'-6 1/2"`), {{ui:Mérnöki}} (`12'-6.5"`), {{ui:Törtes}} (`150 1/2`) vagy {{ui:Tudományos}} (`1.505E+02`).
3. Válassza a {{ui:Pontosság}} beállítást: tizedesjegyek, vagy a legkisebb tört (az építészeti formátumhoz szokásos az 1/16).

Vagy írja be a {{cmd:UNITS}} (`UN`) parancsot, és válaszoljon a két kérdésére.

Az {{ui:Építészeti}} vagy {{ui:Mérnöki}} formátumnál egy rajzegység egy hüvelyk, mint az AutoCAD-ben: állítsa a {{ui:Mértékegységek}} értéket is {{ui:Hüvelyk}}re. Ezután hosszakat láb és hüvelyk alakban is beírhat mindenhol, ahol hosszt kérnek, és a {{ui:Tulajdonságok}} mezőiben:

| Ön beírja | Ez jelent |
|---|---|
| `12'6"` vagy `12'-6"` | 12 láb 6 hüvelyk (150) |
| `12'6-1/2"` | 12 láb 6½ hüvelyk. A tört elé kötőjel kell: a {{key:Space}} a parancssorban {{key:Enter}}. |
| `12'` | 12 láb |
| `6"` vagy `6` | 6 hüvelyk: a puszta szám hüvelyk |
| `1/2`, `6-1/2` | a törtek minden formátumban működnek |

A pontok ugyanezeket a hosszakat fogadják el: `@12'6",0` vagy `@10'<90`. A szögek fokban maradnak.

A formátum megjelenik az előzményekben ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: a területek négyzethüvelykben és négyzetlábban), a {{ui:Tulajdonságok}}ban, az állapotsoron lévő koordinátákban és az **új méretezéseknél**. A lapok megtartják papírjuk egységeit (milliméter vagy hüvelyk) tizedes alakban.

:::note
A hosszformátum DWG és DXF fájlban mentődik, és minden méretezés megtartja a sajátját: a mentett rajz úgy nyílik meg, ahogy hagyta.
:::

## Papírméretek

A lapok és a modell nyomtatásai ezeket a méreteket használják, bármelyik tájolásban:

| Papír | Méret | Egység a lapon |
|---|---|---|
| ISO A4 | 297 × 210 mm | milliméter |
| ISO A3 | 420 × 297 mm | milliméter |
| ISO A2 | 594 × 420 mm | milliméter |
| ISO A1 | 841 × 594 mm | milliméter |
| ISO A0 | 1189 × 841 mm | milliméter |
| Letter | 11 × 8,5 hüvelyk | hüvelyk |
| Legal | 14 × 8,5 hüvelyk | hüvelyk |
| Tabloid / ANSI B | 17 × 11 hüvelyk | hüvelyk |
| ANSI C | 22 × 17 hüvelyk | hüvelyk |
| ANSI D | 34 × 22 hüvelyk | hüvelyk |
| ARCH C | 24 × 18 hüvelyk | hüvelyk |
| ARCH D | 36 × 24 hüvelyk | hüvelyk |
| ARCH E | 48 × 36 hüvelyk | hüvelyk |

Az új lapok metrikus és mértékegység nélküli rajzoknál ISO A3-on indulnak, hüvelykben vagy lábban megadott rajzoknál Tabloidon. A modell nyomtatásai ugyanígy ISO A4-en vagy Letteren indulnak, majd megjegyzik az utolsó választását. A megnyitott fájlok lapjai megtartják saját méretüket, és „Egyéni” néven jelennek meg, ha nincs a listán.

## Léptékek

Az `1:n` lépték azt jelenti, hogy egy egység a papíron az épületben ugyanannyi egység n-szeresét mutatja, így az 1:100 az épület 1 m-ét a papíron 10 mm-ként mutatja. A CadCraft ezt a rajzegységekből és a papír egységéből számolja ki.

**Metrikus léptékek**, minden rajzhoz: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Építészeti léptékek**, ha az egységek hüvelyk vagy láb: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Mérnöki léptékek**, ha az egységek hüvelyk vagy láb: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Saját léptékek.** Írja be a `SCALELISTEDIT` (vagy `SCALELIST`) parancsot, hogy saját léptéket adjon hozzá, például 1:75-öt vagy egy telekléptéket: 2 papíregység : 300 rajzegység. A `Hozzáadás` a nevet kéri, majd a papír egységeit és a rajzegységeket (az olyan név, mint a `1:75`, saját számokat ajánl; nyomja meg az {{key:Enter}} billentyűt, hogy elfogadja). Az `Szerkesztés`, `Törlés`, `Lista` és `Visszaállítás` ugyanezen a listán dolgozik; a `Visszaállítás` visszaadja a szabványos listát. A saját léptékei a szabványosak után jelennek meg a Tulajdonságok nézetléptéklistájában és a {{ui:PDF-be plottolás}} párbeszédpanelen, a nézetablak a nevükön mutatja a léptékét, és a rajzban mentődnek (DWG és DXF 2000 formátumban) a rajz léptéklistájaként. Egy másik programból megnyitott rajz is behozza a listáját; a szabványos léptékkel egyező léptékek nem jelennek meg kétszer.

Ha egy nézetablakot a {{ui:A teljes modell megjelenítése}} vagy az {{ui:Ablak kijelölése a modellen…}} segítségével állít be, a CadCraft a legnagyobb olyan szabványos léptéket választja, amely belefér. A {{ui:A teljes modell illesztése}} pontos léptéket állít be, amely egyszerű arányként jelenik meg.

## Méretek papíron és a modellben

A szöveg- és méretezési méretek annak a térnek az egységeiben vannak, ahol rajzol.

| Papíron ezt akarja | Lapon rajzolva | Modellben 1:50-en (mm-es rajz) | Modellben 1/4" = 1'-0"-en (hüvelykes rajz) |
|---|---|---|---|
| 2,5 mm szöveg | 2,5 | 125 | — |
| 3/32" szöveg | 0,09375 | — | 4,5 |

A méretezéseknél tartsa a méreteket papírméretként, és állítsa az általános léptéket ({{cmd:DIMSCALE}}) a nyomtatási léptékre: 50 az 1:50-hez, 48 az 1/4" = 1'-0"-hez. Lásd: [Méretezési méretek beállítása](topic:dimension-settings).

## Léptékfüggő megjegyzések

Rajzolja a modellt teljes méretben, és hagyja, hogy a CadCraft elvégezze fent a számításokat.

1. Jelölje ki a szöveget vagy a méretezéseket, amelyeknek papíron meg kell tartaniuk a méretüket. A Tulajdonságokban jelölje be az {{ui:Annotatív}} négyzetet. A {{ui:Méret papíron}} például ezt mutatja: `2.5 mm at 1:50`.
2. Írja be a {{cmd:ANNOSCALE}} parancsot, és a rajz nyomtatási léptékét, például `1:100`.

Minden annotatív szöveg és méretezés átméreteződik, így az új léptéken ugyanakkora lesz a nyomtatásban: a 2,5 mm-es szöveg egy milliméteres rajzon 1:50-en 125 magas, 1:100-on 250. Egy bekezdés szélessége ezzel együtt változik; egy méretezés szövege, nyilai és közei együtt változnak (az általános léptéke). Ez egy visszavonási lépés, és a nem annotatív objektumokat soha nem változtatja meg.

A beállítás DWG-ben és DXF-ben mentődik: más programok az annotatív jelzőt olvassák, a CadCraft pedig megtartja minden objektum méretezési léptékét is.

Ha irodája a papírmagasságokat az Alapértelmezett házirendek bővítményben állítja be (Beállítások › Globális › Alapértelmezett házirendek › Megjegyzés-méretek papíron), a {{cmd:ANNOSCALE}} az új szöveg kezdő magasságát is az iroda adott léptékhez tartozó magasságára állítja. Lásd: [Alapértelmezett házirendek](topic:default-policies).

### Egy objektum több léptéken

Egy lapon gyakran ugyanazt az alaprajzot mutatják 1:100-on, egy részletét pedig 1:50-en. Adjon a megjegyzéseknek és méretezéseknek mindkét léptéket, így minden nézetablak a papíron megadott méretükön mutatja őket:

1. Jelölje ki az annotatív szöveget és méretezéseket, és írja be az `OBJECTSCALE` parancsot.
2. Válassza az `Add` (Hozzáadás) lehetőséget, és írja be a léptéket, például `1:50`. (A `Current scale` az aktuális rajzlépték hozzáadja; a `List` megmutatja, mely léptékeket tartja meg az objektum; a `Delete` eltávolít egyet.)

Az a nézetablak, amelynek léptéke benne van egy objektum listájában, az objektumot ahhoz a léptékhez tartozó méretben mutatja: 2,5 mm-es szöveg 1:100-as nézetablakban 250 magasan, 1:50-esben 125 magasan rajzolódik, a képernyőn és a nyomtatásban egyaránt. Az objektum helye nem változik; csak mérete különbözik. Olyan léptékű nézetablakban, amely nincs az objektum listáján, az objektum a saját méretében jelenik meg, amíg be nem írja az `ANNOALLVISIBLE` parancsot és az `OFF` lehetőséget választja: akkor ott kimarad. Az {{cmd:ANNOSCALE}} átméretezi azokat az objektumokat, amelyek listáján szerepel az új lépték, a többit érintetlenül hagyja.

A listák DWG és DXF formátumban a CadCraft saját adataiként mentődnek. Más program minden objektumot annotatívnak lát, azon az egy léptéken, amelyre méretezték. Az ANNOALLVISIBLE kapcsoló nem mentődik a fájlba.

## Vonalvastagságok és vonaltípusok

Egy rétegnek vagy egy objektumnak lehet **vonalvastagsága** (0,05–2,11 mm) és **vonaltípusa** (szaggatott, rejtett, középvonal, fázis, pont…). Ezeket a jobb oldali panelen állítsa be: ha nincs kijelölés, a {{ui:Jelenlegi beállítások}} alatti {{ui:Vonaltípus}} és {{ui:Vonalvastagság}} határozza meg az új objektumokét ({{ui:Rétegről}}, ha a rétegüket szeretné követni), a {{ui:Réteg …}} alatti kettő pedig az aktuális réteg saját beállítása. Ha objektumok vannak kijelölve, ugyanez a két sor és a {{ui:Vonaltípus léptéke}} ezeket az objektumokat módosítja. A parancsok: {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) és {{cmd:LTSCALE}} (`LTS`).

A vonaltípusok a képernyőn és a nyomtatásban is megjelennek. A szaggatásaik rajzegységben vannak: egy metrikus rajz az ISO-méreteket használja (DASHED: 12,7 mm szaggatás), egy hüvelykes rajz a hüvelykeseket (0,5"). Ha a szaggatások túl kicsinek vagy túl nagynak látszanak, módosítsa a rajz {{ui:Vonaltípus léptéke}} (LTSCALE) értékét: minden szaggatást és rést megszoroz vele; egy objektum saját léptéke ezt újra megszorozza. Az olyan finom mintát, amelyet egyáltalán nem lehet látni, folytonos vonalként rajzolja.

A vonalvastagságok a nyomtatásban milliméterben jelennek meg a papíron, a léptéktől függetlenül. Az {{ui:Alapérték}} vonalvastagságú vonalak a {{ui:PDF-be plottolás}} párbeszédpanelen választott tollszélességet használják (0,13–0,70 mm; kezdetben 0,25 mm); a 0 vonalvastagság a legvékonyabb vonalként nyomtatódik. A képernyőn minden vonal egy pixel széles, amíg meg nem nyomja az állapotsor {{ui:LWT}} gombját (vagy be nem írja a {{cmd:LWDISPLAY}} parancsot): ekkor a 0,25 mm-nél vastagabb vonalvastagság szélesebben rajzolódik (0,5 mm = 2 pixel) a modellben, és valódi szélességében a papíron, a lapokon. A választás ebben a böngészőben marad meg.

## Az irodai szabvány

Egy iroda a papírszövegmagasságait, rétegeit, a rajzfej mezőit és sablonjait egyetlen rekordban tarthatja: ez az irodai szabvány. A CadCraft ebben a sorrendben olvassa: a rajz saját rekordja ({{cmd:OFFICESTANDARD}} › `Import`, a fájlban tárolva), a csapata közös szabványa, majd az Alapértelmezett házirendek. Az annotatív szövegek és méretezések papírmagasságát a szabvány adja az annotációs léptéken. Egy üres szabvány nem változtat semmin. Az {{cmd:OFFICESTANDARD}} › `Layers` hozzáadja azokat az irodai rétegeket, amelyek a rajzból hiányoznak.

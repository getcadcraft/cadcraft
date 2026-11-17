---
title: Jednotky, formáty papíru a měřítka
summary: Co znamenají jednotky výkresu v CadCraftu, formáty papíru pro listy a tisky, všechna standardní měřítka a jak souvisí velikosti textu a kót s měřítkem tisku.
keywords: jednotky, milimetry, palce, stopy, stopy a palce, stavební, inženýrský, zlomkový, zlomky, lunits, formát délek, přesnost, metry, formát papíru, a3, a1, arch d, ansi, tabloid, letter, měřítko, 1:100, 1/4 palce, stavební měřítko, inženýrské měřítko, insunits
from: 8346236a
---

## Jednotky výkresu

Kreslíte v plné velikosti, v jednotkách výkresu. To, co jedna jednotka znamená, určuje nastavení výkresu **Jednotky**:

1. Stiskněte {{key:Esc}}, aby nic nebylo vybráno, na kartě {{ui:Model}}.
2. V {{ui:Aktuální nastavení}} zvolte {{ui:Jednotky}}: {{ui:Bez jednotek}}, {{ui:Milimetry}}, {{ui:Centimetry}}, {{ui:Metry}}, {{ui:Palce}} nebo {{ui:Stopy}}.

Kóty mohou zapisovat své délky v milimetrech, centimetrech, metrech nebo kilometrech bez ohledu na jednotku výkresu: viz [Kóty v mm, cm, m nebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Změna jednotek nic nezmění na velikosti. Mění jen to, jak se na listech a v tiscích čtou měřítka a která měřítka se nabízejí. Výkres otevřený z DWG nebo DXF si zachová jednotky uložené v souboru; sekce {{ui:Výkres}} v levém panelu je ukazuje.

S výkresem {{ui:Bez jednotek}} se zachází, jako by byl v jednotce papíru: milimetry na papíru ISO, palce na papíru US.

## Stopy a palce a zlomky

Jak se délky **zapisují a píšou**, je samostatné nastavení: formát délek. Nemění žádnou geometrii, jen to, jak čísla vypadají a co můžete napsat.

1. Stiskněte {{key:Esc}}, aby nic nebylo vybráno, na kartě {{ui:Model}}.
2. V {{ui:Aktuální nastavení}} zvolte {{ui:Formát délek}}: {{ui:Desetinný}} (`150.5`), {{ui:Stavební}} (`12'-6 1/2"`), {{ui:Inženýrský}} (`12'-6.5"`), {{ui:Zlomkový}} (`150 1/2`) nebo {{ui:Vědecký}} (`1.505E+02`).
3. Zvolte {{ui:Přesnost}}: desetinná místa, nebo nejmenší zlomek (1/16 je obvyklá volba pro stavební).

Nebo napište {{cmd:UNITS}} (`UN`) a odpovězte na jeho dvě otázky.

U {{ui:Stavební}} nebo {{ui:Inženýrský}} je jedna jednotka výkresu jeden palec, jako v AutoCADu: nastavte také {{ui:Jednotky}} na {{ui:Palce}}. Pak můžete psát délky ve stopách a palcích všude, kde se délka žádá, a v polích {{ui:Vlastnosti}}:

| Napíšete | Znamená |
|---|---|
| `12'6"` nebo `12'-6"` | 12 stop 6 palců (150) |
| `12'6-1/2"` | 12 stop 6½ palce. Před zlomkem použijte pomlčku: {{key:Space}} je na příkazovém řádku {{key:Enter}}. |
| `12'` | 12 stop |
| `6"` nebo `6` | 6 palců: prosté číslo je v palcích |
| `1/2`, `6-1/2` | zlomky fungují v libovolném formátu |

Body berou stejné délky: `@12'6",0` nebo `@10'<90`. Úhly zůstávají ve stupních.

Formát se ukazuje v historii ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: plochy jako čtvereční palce a čtvereční stopy), ve {{ui:Vlastnosti}}, v souřadnicích ve stavovém řádku a v **nových kótách**. Listy si zachovávají jednotky papíru (milimetry nebo palce) jako desetinná čísla.

:::note
Formát délek se ukládá do souborů DWG a DXF a každá kóta si ponechá vlastní: uložený výkres se otevře znovu tak, jak jste jej zanechali.
:::

## Formáty papíru

Listy a tisky modelu používají tyto formáty v obou orientacích:

| Papír | Velikost | Jednotka na listu |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetry |
| ISO A3 | 420 × 297 mm | milimetry |
| ISO A2 | 594 × 420 mm | milimetry |
| ISO A1 | 841 × 594 mm | milimetry |
| ISO A0 | 1189 × 841 mm | milimetry |
| Letter | 11 × 8.5 in | palce |
| Legal | 14 × 8.5 in | palce |
| Tabloid / ANSI B | 17 × 11 in | palce |
| ANSI C | 22 × 17 in | palce |
| ANSI D | 34 × 22 in | palce |
| ARCH C | 24 × 18 in | palce |
| ARCH D | 36 × 24 in | palce |
| ARCH E | 48 × 36 in | palce |

Nové listy začínají na ISO A3 u metrických výkresů a výkresů bez jednotek a na Tabloid u výkresů v palcích nebo stopách. Tisky modelu začínají stejným způsobem na ISO A4 nebo Letter, a pak si pamatují vaši poslední volbu. Listy z otevřených souborů si zachovají svou vlastní velikost, zobrazenou jako „Vlastní“, když není jednou z těchto.

## Měřítka

Měřítko `1:n` znamená, že jedna jednotka na papíře zobrazuje n stejných jednotek v modelu, takže 1:100 zobrazí 1 m budovy jako 10 mm papíru. CadCraft to vypočítá z jednotek výkresu a jednotky papíru.

**Metrická měřítka**, nabízená pro každý výkres: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Stavební měřítka**, nabízená, když jsou jednotky palce nebo stopy: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženýrská měřítka**, nabízená, když jsou jednotky palce nebo stopy: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vlastní měřítka.** Napište `SCALELISTEDIT` (nebo `SCALELIST`) a přidejte vlastní měřítko, například 1:75 nebo měřítko staveniště 2 papíru : 300 výkresu. Volba `Přidat (A)` se zeptá na název, pak na jednotky papíru a jednotky výkresu (název jako `1:75` nabídne vlastní čísla; stiskněte {{key:Enter}}, chcete-li je převzít). `Upravit (E)`, `Smazat (D)`, `Seznam (L)` a `Obnovit (R)` pracují se stejným seznamem; `Obnovit (R)` se vrátí na standardní seznam. Vaše měřítka se objeví za standardními v seznamu měřítek výřezu v {{ui:Vlastnosti}} a v dialogu {{ui:Vykreslit do PDF}}; výřez s takovým měřítkem se čte s jeho názvem a uloží se do výkresu (DWG a DXF 2000) jako seznam měřítek výkresu. Výkres otevřený z jiného programu přinese svůj seznam; měřítka, která odpovídají standardnímu, se neukážou dvakrát.

Když je výřez namířen pomocí {{ui:Zobrazit celý model}} nebo {{ui:Vybrat okno na modelu…}}, CadCraft vybere největší standardní měřítko, které se vejde. {{ui:Přizpůsobit celý model}} místo toho nastaví přesné měřítko, které se čte jako prostý poměr.

## Velikosti na papíře a v modelu

Velikosti textu a kót jsou v jednotkách prostoru, ve kterém kreslíte.

| Chcete na papíře | Nakresleno na listu | Nakresleno v modelu v 1:50 (výkres v mm) | Nakresleno v modelu v 1/4" = 1'-0" (výkres v palcích) |
|---|---|---|---|
| text 2.5 mm | 2.5 | 125 | — |
| text 3/32" | 0.09375 | — | 4.5 |

U kót ponechte velikosti jako velikosti na papíře a celkové měřítko ({{cmd:DIMSCALE}}) nastavte na měřítko tisku: 50 pro 1:50, 48 pro 1/4" = 1'-0". Viz [Nastavení velikostí kót](topic:dimension-settings).

## Kótování podle měřítka

Kreslete model v plné velikosti a nechte CadCraft, ať za vás provede výpočty výše.

1. Vyberte text nebo kóty, které mají zachovat svou velikost na papíře. V {{ui:Vlastnosti}} zaškrtněte {{ui:Anotativní}}. {{ui:Velikost na papíře}} pak ukáže například `2.5 mm at 1:50`.
2. Napište {{cmd:ANNOSCALE}} a měřítko, v němž bude výkres vytištěn, například `1:100`.

Každý anotativní text a kóta se přepočítá tak, aby se vytiskl ve stejné velikosti v novém měřítku: text 2.5 mm má výšku 125 ve výkresu v milimetrech při 1:50 a 250 při 1:100. Šířka odstavce se s tím mění; text kóty, šipky a mezery se mění společně (její celkové měřítko). Je to jeden krok zpět a objekty, které nejsou anotativní, se nikdy nemění.

Nastavení se ukládá do DWG a DXF: jiné programy čtou příznak anotativnosti a CadCraft si také uchovává měřítko, pro které je každý objekt dimenzován.

Pokud vaše kancelář nastavuje výšky na papíře v doplňku Výchozí zásady (Nastavení › Globální › Výchozí zásady › Velikosti anotací na papíře), {{cmd:ANNOSCALE}} také nastaví výšku, s níž začíná nový text, na výšku kanceláře pro poznámky v tomto měřítku. Viz [Výchozí zásady](topic:default-policies).

### Jeden objekt v několika měřítkách

List často zobrazuje týž půdorys v 1:100 a jeho část v 1:50. Dejte poznámkám a kótám obě měřítka a každý výřez je zobrazí v jejich velikosti na papíře:

1. Vyberte anotativní text a kóty a napište `OBJECTSCALE`.
2. Zvolte `Přidat (A)` a napište měřítko, například `1:50`. (`Aktuální (C)` přidá anotační měřítko výkresu; `Seznam (L)` ukazuje, co si každý objekt ponechává; `Smazat (D)` jedno odebere.)

Výřez, jehož měřítko je v seznamu objektu, zobrazí objekt ve velikosti pro toto měřítko: text 2.5 mm se kreslí s výškou 250 ve výřezu 1:100 a 125 ve výřezu 1:50, na obrazovce i v tisku. Objekt zůstává na místě; liší se jen velikost. Ve výřezu v měřítku, které není v seznamu objektu, se objekt zobrazí ve velikosti, kterou má, dokud nenapíšete `ANNOALLVISIBLE` a nezvolíte `OFF`: pak se tam vynechá. {{cmd:ANNOSCALE}} přemění velikost objektů, které mají nové měřítko v seznamu, a ostatní nechá, jak jsou.

Seznamy se ukládají do DWG a DXF jako vlastní data CadCraftu. Jiný program vidí každý objekt jako anotativní, v jediném měřítku, pro které je dimenzován. Přepínač ANNOALLVISIBLE se v souboru neukládá.

## Tloušťky a typy čar

Vrstva nebo objekt může mít **tloušťku čáry** (0.05 až 2.11 mm) a **typ čáry** (čárkovaná, skrytá, osová, fantomová, tečkovaná…). Nastavte je v pravém panelu: bez výběru jsou {{ui:Typ čáry}} a {{ui:Tloušťka čáry}} v {{ui:Aktuální nastavení}} tím, co dostanou nové objekty ({{ui:Podle vrstvy}}, chcete-li následovat svou vrstvu), a dvě pod {{ui:Vrstva …}} jsou vlastní pro aktuální vrstvu. U vybraných objektů stejné dva řádky a {{ui:Měřítko typu čáry}} mění tyto objekty. Příkazy jsou {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) a {{cmd:LTSCALE}} (`LTS`).

Typy čar se zobrazují na obrazovce i v tiscích. Jejich čárky jsou v jednotkách výkresu: metrický výkres používá velikosti ISO (DASHED: čárky 12.7 mm), palcový výkres palcové (0.5"). Pokud se čárky zdají příliš malé nebo velké, změňte {{ui:Měřítko typu čáry}} výkresu (LTSCALE): každá čárka i mezera se jím násobí; vlastní měřítko objektu jej násobí znovu. Vzor, který je příliš jemný na to, aby byl vidět, se nakreslí jako plná čára.

Tloušťky čar se tisknou v tiscích, v mm na papíře bez ohledu na měřítko. Čáry s výchozí tloušťkou {{ui:Výchozí}} používají šířku pera zvolenou v dialogu {{ui:Vykreslit do PDF}} (0.13 až 0.70 mm; zpočátku 0.25 mm); tloušťka 0 se tiskne jako nejtenčí čára. Na obrazovce je každá čára jeden pixel široká, dokud nestisknete {{ui:TČ}} ve stavovém řádku (nebo nenapíšete `LWDISPLAY`): pak se tloušťka nad 0.25 mm kreslí v modelu širší (0.5 mm = 2 pixely), a na listu ve své skutečné šířce na papíře. Volba se uchovává v tomto prohlížeči.

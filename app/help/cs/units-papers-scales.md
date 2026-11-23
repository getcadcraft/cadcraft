---
title: Jednotky, formáty papíru a měřítka
summary: Co znamenají jednotky výkresu v CadCraftu, formáty papíru pro listy a vykreslení, každé standardní měřítko a jak se velikosti textu a kót vztahují k měřítku tisku.
keywords: jednotky, milimetry, palce, stopy, stopy a palce, stavební, inženýrský, zlomkový, zlomky, lunits, formát délek, přesnost, metry, formát papíru, a3, a1, arch d, ansi, tabloid, letter, měřítko, 1:100, 1/4 palce, stavební měřítko, inženýrské měřítko, insunits
from: 7dc9b62e
---

## Jednotky výkresu

Kreslíte v plné velikosti, v jednotkách výkresu. Co jedna jednotka znamená, určuje nastavení výkresu {{ui:Jednotky}}:

1. Stiskněte {{key:Esc}}, aby nic nebylo vybráno, na kartě {{ui:Model}}.
2. V {{ui:Aktuální nastavení}} zvolte {{ui:Jednotky}}: {{ui:Bez jednotek}}, {{ui:Milimetry}}, {{ui:Centimetry}}, {{ui:Metry}}, {{ui:Palce}} nebo {{ui:Stopy}}.

Kóty mohou zapisovat délky v milimetrech, centimetrech, metrech nebo kilometrech, ať je jednotka výkresu jakákoli: viz [Kóty v mm, cm, m nebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Změna jednotek nic nezmění na velikosti. Mění jen to, jak se čtou měřítka na listech a ve vykreslení, a která měřítka se nabízejí. Výkres otevřený z DWG nebo DXF si zachová jednotky uložené v souboru; sekce {{ui:Výkres}} v levém panelu je ukazuje.

Výkres {{ui:Bez jednotek}} se bere jako výkres v jednotce papíru: milimetry na papíru ISO, palce na papíru US.

## Stopy a palce a zlomky

Jak se délky **zapisují a píší**, je samostatné nastavení: formát délek. Nemění žádnou geometrii, jen to, jak čísla vypadají a co můžete napsat.

1. Stiskněte {{key:Esc}}, aby nic nebylo vybráno, na kartě {{ui:Model}}.
2. V {{ui:Aktuální nastavení}} zvolte {{ui:Formát délek}}: {{ui:Desetinný}} (`150.5`), {{ui:Stavební}} (`12'-6 1/2"`), {{ui:Inženýrský}} (`12'-6.5"`), {{ui:Zlomkový}} (`150 1/2`) nebo {{ui:Vědecký}} (`1.505E+02`).
3. Zvolte {{ui:Přesnost}}: počet desetinných míst, nebo nejmenší zlomek (1/16 je pro stavební obvyklá volba).

Nebo napište {{cmd:UNITS}} (`UN`) a odpovězte na jeho dvě otázky.

U {{ui:Stavební}} nebo {{ui:Inženýrský}} je jedna jednotka výkresu jeden palec, jako v AutoCADu: nastavte také {{ui:Jednotky}} na {{ui:Palce}}. Pak můžete psát délky ve stopách a palcích všude, kde se délka žádá, a do polí ve {{ui:Vlastnosti}}:

| Napíšete | Znamená |
|---|---|
| `12'6"` nebo `12'-6"` | 12 stop 6 palců (150) |
| `12'6-1/2"` | 12 stop 6½ palce. Před zlomkem použijte pomlčku: {{key:Space}} je na příkazovém řádku {{key:Enter}}. |
| `12'` | 12 stop |
| `6"` nebo `6` | 6 palců: holé číslo je palce |
| `1/2`, `6-1/2` | zlomky fungují v každém formátu |

Body berou stejné délky: `@12'6",0` nebo `@10'<90`. Úhly zůstávají ve stupních.

Formát se ukazuje v historii ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: plochy jako čtvereční palce a čtvereční stopy), ve {{ui:Vlastnosti}}, v souřadnicích ve stavovém řádku a u **nových kót**. Listy si ponechávají své jednotky papíru (milimetry nebo palce) jako desetinná čísla.

:::note
Formát délek se ukládá do souborů DWG a DXF a každá kóta si drží svůj vlastní: uložený výkres se otevře tak, jak jste jej nechali.
:::

## Formáty papíru

Listy a vykreslení modelu používají tyto velikosti, v obou orientacích:

| Papír | Velikost | Jednotka na listu |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetry |
| ISO A3 | 420 × 297 mm | milimetry |
| ISO A2 | 594 × 420 mm | milimetry |
| ISO A1 | 841 × 594 mm | milimetry |
| ISO A0 | 1189 × 841 mm | milimetry |
| Letter | 11 × 8,5 palce | palce |
| Legal | 14 × 8,5 palce | palce |
| Tabloid / ANSI B | 17 × 11 palců | palce |
| ANSI C | 22 × 17 palců | palce |
| ANSI D | 34 × 22 palců | palce |
| ARCH C | 24 × 18 palců | palce |
| ARCH D | 36 × 24 palců | palce |
| ARCH E | 48 × 36 palců | palce |

Nové listy začínají na ISO A3 pro metrické výkresy a výkresy bez jednotek a na Tabloid pro výkresy v palcích nebo stopách. Vykreslení modelu začínají na ISO A4 nebo Letter stejným způsobem a potom si pamatují vaši poslední volbu. Listy z otevřených souborů si ponechají svou vlastní velikost, která se zobrazí jako „Custom“, není-li to jedna z těchto.

## Měřítka

Měřítko `1:n` znamená, že jedna jednotka na papíru ukazuje n stejných jednotek v modelu, takže 1:100 ukazuje 1 m stavby jako 10 mm papíru. CadCraft to počítá z jednotek výkresu a jednotky papíru.

**Metrická měřítka**, nabízená pro každý výkres: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Stavební měřítka**, nabízená, je-li jednotka palce nebo stopy: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženýrská měřítka**, nabízená, je-li jednotka palce nebo stopy: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vlastní měřítka.** Napište `SCALELISTEDIT` (nebo `SCALELIST`) a přidejte vlastní měřítko, například 1:75 nebo místní měřítko 2 papír : 300 výkres. `Add` se zeptá na název, potom na jednotky papíru a jednotky výkresu (název jako `1:75` nabídne vlastní čísla; stiskněte {{key:Enter}}, chcete-li je přijmout). `Edit`, `Delete`, `List` a `Reset` pracují se stejným seznamem; `Reset` se vrátí na standardní seznam. Vaše měřítka se objeví za standardními v seznamu měřítek výřezu ve Vlastnostech a v dialogu {{ui:Vykreslit do PDF}}, výřez v tomto měřítku se zobrazí s jeho názvem, a uloží se ve výkresu (DWG a DXF 2000) jako seznam měřítek výkresu. Výkres otevřený z jiného programu přinese svůj seznam; měřítka, která se shodují se standardním, se nezobrazí dvakrát.

Je-li výřez zaměřen příkazem {{ui:Zobrazit celý model}} nebo {{ui:Vybrat okno na modelu…}}, CadCraft vybere největší standardní měřítko, které se vejde. {{ui:Přizpůsobit celý model}} nastaví naopak přesné měřítko, které se čte jako prostý poměr.

## Velikosti na papíru a v modelu

Velikosti textu a kót jsou v jednotkách prostoru, v němž kreslíte.

| Chcete na papíru | Nakresleno na listu | Nakresleno v modelu při 1:50 (výkres v mm) | Nakresleno v modelu při 1/4" = 1'-0" (výkres v palcích) |
|---|---|---|---|
| Text 2,5 mm | 2,5 | 125 | — |
| Text 3/32" | 0,09375 | — | 4,5 |

U kót ponechte velikosti jako velikosti na papíru a nastavte celkové měřítko ({{cmd:DIMSCALE}}) na měřítko tisku: 50 pro 1:50, 48 pro 1/4" = 1'-0". Viz [Nastavení velikostí kót](topic:dimension-settings).

## Anotace podle měřítka

Nakreslete model v plné velikosti a nechte CadCraft za vás provést výpočty výše.

1. Vyberte text nebo kóty, které si mají na papíru zachovat velikost. Ve {{ui:Vlastnosti}} zaškrtněte {{ui:Anotativní}}. {{ui:Velikost na papíru}} pak ukáže například `2.5 mm at 1:50`.
2. Napište {{cmd:ANNOSCALE}} a měřítko, v němž bude výkres vytištěn, například `1:100`.

Každý anotativní text a kóta se změní tak, aby se při novém měřítku vytiskly stejně velké: text 2,5 mm je ve výkresu v milimetrech při 1:50 vysoký 125 a při 1:100 vysoký 250. Šířka odstavce se mění s ním; text kóty, šipky a mezery se mění společně (jejich celkové měřítko). Je to jeden krok zpět a objekty, které nejsou anotativní, se nikdy nemění.

Nastavení se ukládá do DWG a DXF: jiné programy čtou příznak anotace a CadCraft také uchovává měřítko, pro které je každý objekt dimenzován.

Pokud vaše kancelář nastavuje výšky papíru v doplňku Výchozí zásady (Nastavení › Globální › Výchozí zásady › Velikosti anotací na papíru), {{cmd:ANNOSCALE}} také nastaví výšku, s níž nový text začíná, na výšku kanceláře pro poznámky v tomto měřítku. Viz [Výchozí zásady](topic:default-policies).

### Jeden objekt v několika měřítkách

List často ukazuje tentýž půdorys v 1:100 a jeho část v 1:50. Dejte poznámkám a kótám obě měřítka a každý výřez je ukáže v jejich velikosti na papíře:

1. Vyberte anotativní text a kóty a napište `OBJECTSCALE`.
2. Zvolte `Add` a napište měřítko, například `1:50`. (`Current scale` přidá anotační měřítko výkresu; `List` ukáže, co si každý objekt drží; `Delete` jedno odebere.)

Výřez, jehož měřítko je v seznamu objektu, ho zobrazí v jeho velikosti pro toto měřítko: text 2,5 mm se nakreslí vysoký 250 přes výřez 1:100 a 125 přes výřez 1:50, na obrazovce i ve vykreslení. Objekt zůstává na místě; liší se jen jeho velikost. Ve výřezu v měřítku, které v seznamu objektu není, se objekt zobrazí ve velikosti, kterou má, dokud nenapíšete `ANNOALLVISIBLE` a nezvolíte `OFF`: pak se tam nezobrazí. {{cmd:ANNOSCALE}} změní velikost objektů, které uvádějí nové měřítko, a ostatní nechá být.

Seznamy se ukládají do DWG a DXF jako vlastní data CadCraftu. Jiný program vidí každý objekt jako anotativní, v jediném měřítku, pro které je dimenzován. Přepínač ANNOALLVISIBLE se do souboru neukládá.

## Tloušťky čar a typy čar

Vrstva nebo objekt může mít **tloušťku čáry** (0,05 až 2,11 mm) a **typ čáry** (čárkovaná, skrytá, osová, fantomová, tečková…). Nastavte je v pravém panelu: nic-nevybráno, {{ui:Typ čáry}} a {{ui:Tloušťka čáry}} v {{ui:Aktuální nastavení}} jsou to, co dostanou nové objekty ({{ui:Podle vrstvy}}, aby následovaly svou vrstvu), a obě pod {{ui:Vrstva …}} jsou vlastní hodnoty aktuální vrstvy. S vybranými objekty tytéž dva řádky a {{ui:Měřítko typu čáry}} změní tyto objekty. Příkazy jsou {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) a {{cmd:LTSCALE}} (`LTS`).

Typy čar se zobrazují na obrazovce i ve vykreslení. Jejich čárky jsou v jednotkách výkresu: metrický výkres používá ISO velikosti (DASHED: čárky 12,7 mm), výkres v palcích palcové (0,5"). Jsou-li čárky příliš malé nebo velké, změňte {{ui:Měřítko typu čáry}} výkresu (LTSCALE): každá čárka a mezera se jím násobí; měřítko objektu se násobí ještě jednou. Vzor příliš jemný, aby byl vidět, se kreslí jako plná čára.

Tloušťky čar se tisknou ve vykreslení v mm na papíře bez ohledu na měřítko. Čáry s výchozí tloušťkou {{ui:Výchozí}} používají šířku pera zvolenou v dialogu {{ui:Vykreslit do PDF}} (0,13 až 0,70 mm; zpočátku 0,25 mm); tloušťka 0 se tiskne jako nejtenčí čára. Na obrazovce je každá čára jeden pixel široká, dokud nestisknete {{ui:LWT}} ve stavovém řádku (nebo nenapíšete {{cmd:LWDISPLAY}}): pak tloušťka nad 0,25 mm kreslí širší čáru (0,5 mm = 2 pixely) v modelu a na listu v její skutečné šířce na papíře. Volba se uchovává v tomto prohlížeči.

## Kancelářský standard

Kancelář může uchovávat své výšky textu na papíru, vrstvy, pole razítka a šablony v jednom záznamu, kancelářském standardu. CadCraft jej čte v tomto pořadí: vlastní záznam výkresu (nastavený příkazem {{cmd:OFFICESTANDARD}} › `Import`, uložený v souboru), sdílený standard vašeho týmu, potom vaše Výchozí zásady. Anotativní text a kóty berou svou výšku na papíře z něj při anotačním měřítku. Prázdný standard nic nemění. {{cmd:OFFICESTANDARD}} › `Layers` přidá kancelářské vrstvy, které výkres nemá.

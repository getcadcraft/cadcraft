---
title: Jednotky, formáty papiera a mierky
summary: Čo znamenajú jednotky výkresu v CadCraft, formáty papiera pre listy a výkresy, všetky štandardné mierky a ako súvisia veľkosti textu a kót s mierkou vykreslenia.
keywords: jednotky, milimetre, palce, stopy, stopy a palce, architektonické, inžinierske, zlomkové, zlomky, lunits, formát dĺžky, presnosť, metre, veľkosť papiera, a3, a1, arch d, ansi, tabloid, letter, mierka, 1:100, 1/4 palca, architektonická mierka, inžinierska mierka, insunits
from: 8346236a
---

## Jednotky výkresu

Kreslíte v plnej veľkosti, v jednotkách výkresu. Čo znamená jedna jednotka, určuje nastavenie {{ui:Jednotky}} výkresu:

1. Na karte {{ui:Model}} stlačte {{key:Esc}}, aby nič nebolo vybrané.
2. V {{ui:Aktuálne nastavenia}} zvoľte {{ui:Jednotky}}: {{ui:Bez jednotiek}}, {{ui:Milimetre}}, {{ui:Centimetre}}, {{ui:Metre}}, {{ui:Palce}} alebo {{ui:Stopy}}.

Kóty môžu zapisovať dĺžky v milimetroch, centimetroch, metroch alebo kilometroch bez ohľadu na jednotku výkresu: pozri [Kóty v mm, cm, m alebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Zmena jednotiek nič nezmení na veľkosti. Mení sa iba to, ako sa čítajú mierky na listoch a vo výkresoch a ktoré mierky sa ponúkajú. Výkres otvorený z DWG alebo DXF si zachová jednotky uložené v súbore; sekcia {{ui:Výkres}} v ľavom paneli ich zobrazuje.

Výkres {{ui:Bez jednotiek}} sa považuje za jednotku papiera: milimetre na papieri ISO, palce na americkom papieri.

## Stopy a palce, a zlomky

Ako sa dĺžky **zapisujú a zadávajú**, je samostatné nastavenie, formát dĺžky. Nemení geometriu, iba to, ako čísla vyzerajú a čo môžete zadať.

1. Na karte {{ui:Model}} stlačte {{key:Esc}}, aby nič nebolo vybrané.
2. V {{ui:Aktuálne nastavenia}} zvoľte {{ui:Formát dĺžky}}: {{ui:Desatinný}} (`150.5`), {{ui:Architektonický}} (`12'-6 1/2"`), {{ui:Inžiniersky}} (`12'-6.5"`), {{ui:Zlomkový}} (`150 1/2`) alebo {{ui:Vedecký}} (`1.505E+02`).
3. Zvoľte {{ui:Presnosť}}: počet desatinných miest, alebo najmenší zlomok (pre architektonický je obvyklá voľba 1/16).

Alebo zadajte {{cmd:UNITS}} (`UN`) a odpovedzte na jeho dve otázky.

Pri {{ui:Architektonický}} alebo {{ui:Inžiniersky}} je jedna jednotka výkresu jeden palec, ako v AutoCAD: nastavte aj {{ui:Jednotky}} na {{ui:Palce}}. Potom môžete zadávať dĺžky v stopách a palcoch všade, kde sa pýta dĺžka, a v poliach {{ui:Vlastnosti}}:

| Zadáte | Znamená |
|---|---|
| `12'6"` alebo `12'-6"` | 12 stôp 6 palcov (150) |
| `12'6-1/2"` | 12 stôp 6½ palca. Pred zlomkom použite pomlčku: {{key:Space}} je na príkazovom riadku {{key:Enter}}. |
| `12'` | 12 stôp |
| `6"` alebo `6` | 6 palcov: obyčajné číslo znamená palce |
| `1/2`, `6-1/2` | zlomky fungujú v ktoromkoľvek formáte |

Body berú rovnaké dĺžky: `@12'6",0` alebo `@10'<90`. Uhly zostávajú v stupňoch.

Formát sa zobrazuje v histórii ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: plochy ako štvorcové palce a štvorcové stopy), vo {{ui:Vlastnosti}}, v súradniciach v stavovom riadku a pri **nových kótach**. Listy si zachovajú jednotky papiera (milimetre alebo palce) ako desatinné čísla.

:::note
Formát dĺžky sa ukladá do súborov DWG a DXF a každá kóta si ho ponecháva vlastný: uložený výkres sa otvorí znova tak, ako ste ho nechali.
:::

## Veľkosti papiera

Listy a vykreslenia modelu používajú tieto veľkosti v ktorejkoľvek orientácii:

| Papier | Veľkosť | Jednotka na liste |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetre |
| ISO A3 | 420 × 297 mm | milimetre |
| ISO A2 | 594 × 420 mm | milimetre |
| ISO A1 | 841 × 594 mm | milimetre |
| ISO A0 | 1189 × 841 mm | milimetre |
| Letter | 11 × 8.5 in | palce |
| Legal | 14 × 8.5 in | palce |
| Tabloid / ANSI B | 17 × 11 in | palce |
| ANSI C | 22 × 17 in | palce |
| ANSI D | 34 × 22 in | palce |
| ARCH C | 24 × 18 in | palce |
| ARCH D | 36 × 24 in | palce |
| ARCH E | 48 × 36 in | palce |

Nové listy začínajú na ISO A3 pre metrické a bezjednotkové výkresy a na Tabloid pre výkresy v palcoch alebo stopách. Vykreslenia modelu začínajú na ISO A4 alebo Letter rovnakým spôsobom a potom si zapamätajú vašu poslednú voľbu. Listy z otvorených súborov si zachovajú vlastnú veľkosť, zobrazenú ako „Vlastná“, keď nie je jednou z týchto.

## Mierky

Mierka `1:n` znamená, že jedna jednotka na papieri zobrazuje n rovnakých jednotiek v modeli, takže 1:100 zobrazuje 1 m budovy ako 10 mm papiera. CadCraft to vypočíta z jednotiek výkresu a jednotky papiera.

**Metrické mierky**, ponúkané pre každý výkres: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architektonické mierky**, ponúkané, keď sú jednotky palce alebo stopy: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inžinierske mierky**, ponúkané, keď sú jednotky palce alebo stopy: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vlastné mierky.** Zadajte {{cmd:SCALELISTEDIT}} (alebo {{cmd:SCALELIST}}), aby ste pridali vlastnú mierku, napríklad 1:75 alebo mierku lokality 2 papier : 300 výkres. `Pridať (A)` sa spýta na názov, potom na jednotky papiera a jednotky výkresu (názov ako `1:75` ponúkne svoje čísla; stlačte {{key:Enter}}, aby ste ich prevzali). `Upraviť (E)`, `Zmazať (D)`, `Zoznam (L)` a `Obnoviť (R)` pracujú s rovnakým zoznamom; `Obnoviť (R)` vráti štandardný zoznam. Vaše mierky sa zobrazia za štandardnými v zozname mierok výrezu vo {{ui:Vlastnosti}} a v dialógu {{ui:Vykresliť do PDF}}, výrez v tejto mierke sa zobrazí s jej názvom a uložia sa vo výkrese (DWG a DXF 2000) ako zoznam mierok výkresu. Výkres otvorený z iného programu prinesie svoj zoznam; mierky, ktoré zodpovedajú štandardnej, sa nezobrazia dvakrát.

Keď je výrez nasmerovaný pomocou {{ui:Zobraziť celý model}} alebo {{ui:Vybrať okno na modeli…}}, CadCraft vyberie najväčšiu štandardnú mierku, ktorá sa zmestí. {{ui:Prispôsobiť celý model}} nastaví namiesto toho presnú mierku, ktorá sa číta ako obyčajný pomer.

## Veľkosti na papieri a v modeli

Veľkosti textu a kót sú v jednotkách priestoru, v ktorom kreslíte.

| Chcete na papieri | Nakreslené na liste | Nakreslené v modeli v 1:50 (výkres v mm) | Nakreslené v modeli v 1/4" = 1'-0" (výkres v palcoch) |
|---|---|---|---|
| text 2.5 mm | 2.5 | 125 | — |
| text 3/32" | 0.09375 | — | 4.5 |

Pri kótach nechajte veľkosti ako veľkosti na papieri a nastavte celkovú mierku ({{cmd:DIMSCALE}}) na mierku vykreslenia: 50 pre 1:50, 48 pre 1/4" = 1'-0". Pozri [Nastavenie veľkostí kót](topic:dimension-settings).

## Anotácia podľa mierky

Model kreslite v plnej veľkosti a nechajte CadCraft, aby za vás urobil výpočty vyššie.

1. Vyberte text alebo kóty, ktoré si majú zachovať veľkosť na papieri. Vo {{ui:Vlastnosti}} zaškrtnite {{ui:Anotatívny}}. {{ui:Veľkosť na papieri}} potom zobrazí napríklad `2.5 mm pri 1:50`.
2. Zadajte {{cmd:ANNOSCALE}} a mierku, v ktorej sa výkres vytlačí, napríklad `1:100`.

Každý anotatívny text a kóta sa zmení tak, aby sa vytlačil v rovnakej veľkosti pri novej mierke: text 2.5 mm má výšku 125 vo výkrese v milimetroch pri 1:50 a 250 pri 1:100. Šírka odstavca sa mení s ním; text kóty, šípky a medzery sa menia spoločne (jej celková mierka). Je to jeden krok späť a objekty, ktoré nie sú anotatívne, sa nikdy nemenia.

Nastavenie sa ukladá do DWG a DXF: iné programy čítajú príznak anotatívnosti a CadCraft tiež uchováva mierku, pre ktorú je každý objekt dimenzovaný.

Ak vaša kancelária nastavuje výšky na papieri v doplnku Predvolené zásady (Nastavenia › Globálne › Predvolené zásady › Veľkosti anotácií na papieri), {{cmd:ANNOSCALE}} nastaví aj výšku, s ktorou začína nový text, na výšku kancelárie pre poznámky pri tejto mierke. Pozri [Predvolené zásady](topic:default-policies).

### Jeden objekt v niekoľkých mierkach

List často zobrazuje ten istý pôdorys v 1:100 a jeho časť v 1:50. Dajte poznámkam a kótam obe mierky a každý výrez ich zobrazí v ich veľkosti na papieri:

1. Vyberte anotatívny text a kóty a zadajte {{cmd:OBJECTSCALE}}.
2. Zvoľte `Pridať (A)` a zadajte mierku, napríklad 1:50. (`Aktuálna (C)` pridá mierku anotácií výkresu; `Zoznam (L)` ukáže, čo každý objekt uchováva; `Zmazať (D)` jednu odstráni.)

Výrez, ktorého mierka je v zozname objektu, ho zobrazí v jeho veľkosti pre túto mierku: text 2.5 mm sa nakreslí s výškou 250 vo výreze 1:100 a s výškou 125 vo výreze 1:50, na obrazovke aj vo vykreslení. Objekt zostáva na mieste; líši sa iba veľkosť. Vo výreze v mierke, ktorá nie je v zozname, objekt zobrazuje vo veľkosti, akú má, kým nezadáte {{cmd:ANNOALLVISIBLE}} a nezvolíte `OFF`: potom sa tam vynechá. {{cmd:ANNOSCALE}} zmení veľkosť objektov, ktoré uvádzajú novú mierku, a ostatné nechá tak, ako sú.

Zoznamy sa ukladajú do DWG a DXF ako vlastné dáta CadCraft. Iný program vidí každý objekt ako anotatívny, v jednej mierke, pre ktorú je dimenzovaný. Prepínač ANNOALLVISIBLE sa v súbore neuchováva.

## Hrúbky čiar a typy čiar

Hladina alebo objekt môže mať **hrúbku čiary** (0.05 až 2.11 mm) a **typ čiary** (prerušovaná, skrytá, os, fantómová, bodková…). Nastavte ich v pravom paneli: keď nič nie je vybrané, {{ui:Typ čiary}} a {{ui:Hrúbka čiary}} v {{ui:Aktuálne nastavenia}} sú tie, ktoré dostanú nové objekty ({{ui:Podľa hladiny}}, aby sledovali svoju hladinu), a dva pod {{ui:Hladina…}} sú vlastné hodnoty aktuálnej hladiny. Keď sú objekty vybraté, tie isté dva riadky a {{ui:Mierka typu čiary}} menia tieto objekty. Príkazy sú {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) a {{cmd:LTSCALE}} (`LTS`).

Typy čiar sa zobrazujú na obrazovke aj vo vykresleniach. Ich čiarky sú v jednotkách výkresu: metrický výkres používa ISO veľkosti (DASHED: čiarky 12.7 mm), palcový výkres palcové (0.5"). Ak čiarky vyzerajú príliš malé alebo veľké, zmeňte {{ui:Mierka typu čiary}} výkresu (LTSCALE): každá čiarka a medzera sa vynásobí ňou; vlastná mierka objektu ju vynásobí znova. Vzor, ktorý je príliš jemný na to, aby sa vôbec videl, sa nakreslí ako plná čiara.

Hrúbky čiar sa tlačia vo vykresleniach, v mm na papieri bez ohľadu na mierku. Čiary s predvolenou hrúbkou {{ui:Predvolené}} použijú šírku pera zvolenú v dialógu {{ui:Vykresliť do PDF}} (0.13 až 0.70 mm; na začiatku 0.25 mm); hrúbka 0 sa vytlačí ako najtenšia čiara. Na obrazovke je každá čiara široká jeden pixel, kým nestlačíte tlačidlo {{ui:LWT}} v stavovom riadku (alebo nezadáte {{cmd:LWDISPLAY}}): potom hrúbka nad 0.25 mm kreslí širšie (0.5 mm = 2 pixely) v modeli a na liste v skutočnej šírke na papieri. Voľba sa uchováva v tomto prehliadači.

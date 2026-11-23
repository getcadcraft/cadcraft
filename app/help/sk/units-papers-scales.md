---
title: Jednotky, formáty papiera a mierky
summary: Čo znamenajú jednotky výkresu v CadCraft, formáty papiera pre listy a výstupy, všetky štandardné mierky a ako súvisia veľkosti textu a kót s mierkou výstupu.
keywords: jednotky, milimetre, palce, stopy, stopy a palce, architektonický, inžiniersky, zlomkový, zlomky, lunits, formát dĺžky, presnosť, metre, formát papiera, a3, a1, arch d, ansi, tabloid, letter, mierka, 1:100, 1/4 palca, architektonická mierka, inžinierska mierka, insunits
from: 7dc9b62e
---

## Jednotky výkresu

Kreslíte v plnej veľkosti, v jednotkách výkresu. To, čo predstavuje jedna jednotka, určuje nastavenie **Jednotky** výkresu:

1. Stlačte {{key:Esc}}, aby nič nebolo vybrané, na karte {{ui:Model}}.
2. V {{ui:Aktuálne nastavenia}} vyberte {{ui:Jednotky}}: {{ui:Bez jednotiek}}, {{ui:Milimetre}}, {{ui:Centimetre}}, {{ui:Metre}}, {{ui:Palce}} alebo {{ui:Stopy}}.

Kóty môžu zapisovať dĺžky v milimetroch, centimetroch, metroch alebo kilometroch bez ohľadu na jednotku výkresu: pozrite [Kóty v mm, cm, m alebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Zmena jednotiek nič nezmení na veľkosti. Mení to, ako sa čítajú mierky na listoch a vo výstupoch, a ktoré mierky sa ponúkajú. Výkres otvorený z DWG alebo DXF zachováva jednotky uložené v súbore; sekcia {{ui:Výkres}} na ľavom paneli ich ukazuje.

Výkres {{ui:Bez jednotiek}} sa berie ako jednotka papiera: milimetre na ISO papieri, palce na US papieri.

## Stopy a palce, a zlomky

Ako sa dĺžky **zapisujú a zadávajú** je samostatné nastavenie, formát dĺžky. Nemení žiadnu geometriu, iba to, ako čísla vyzerajú a čo môžete zadať.

1. Stlačte {{key:Esc}}, aby nič nebolo vybrané, na karte {{ui:Model}}.
2. V {{ui:Aktuálne nastavenia}} vyberte {{ui:Formát dĺžky}}: {{ui:Desatinný}} (`150.5`), {{ui:Architektonický}} (`12'-6 1/2"`), {{ui:Inžiniersky}} (`12'-6.5"`), {{ui:Zlomkový}} (`150 1/2`) alebo {{ui:Vedecký}} (`1.505E+02`).
3. Vyberte {{ui:Presnosť}}: desatinné miesta, alebo najmenší zlomok (1/16 je obvyklá voľba pre architektonický).

Alebo napíšte {{cmd:UNITS}} (`UN`) a odpovedzte na jeho dve otázky.

S {{ui:Architektonický}} alebo {{ui:Inžiniersky}} je jedna jednotka výkresu jeden palec, ako v AutoCAD: nastavte aj {{ui:Jednotky}} na {{ui:Palce}}. Potom môžete zadávať dĺžky v stopách a palcoch kdekoľvek, kde sa pýta dĺžka, a v poliach {{ui:Vlastnosti}}:

| Napíšete | Znamená |
|---|---|
| `12'6"` alebo `12'-6"` | 12 stôp 6 palcov (150) |
| `12'6-1/2"` | 12 stôp 6½ palca. Pred zlomkom použite pomlčku: {{key:Space}} je {{key:Enter}} na riadku príkazov. |
| `12'` | 12 stôp |
| `6"` alebo `6` | 6 palcov: holé číslo je palce |
| `1/2`, `6-1/2` | zlomky fungujú v každom formáte |

Body berú rovnaké dĺžky: `@12'6",0` alebo `@10'<90`. Uhly zostávajú v stupňoch.

Formát sa zobrazuje v histórii ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: plochy ako štvorcové palce a štvorcové stopy), vo {{ui:Vlastnostiach}}, v súradniciach na stavovom riadku a v **nových kótach**. Listy zachovávajú svoje jednotky papiera (milimetre alebo palce) ako desatinné čísla.

:::note
Formát dĺžky sa ukladá v súboroch DWG a DXF a každá kóta si drží svoj vlastný: uložený výkres sa otvorí tak, ako ste ho nechali.
:::

## Formáty papiera

Listy a výstupy modelu používajú tieto veľkosti v ktorejkoľvek orientácii:

| Papier | Veľkosť | Jednotka na liste |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetre |
| ISO A3 | 420 × 297 mm | milimetre |
| ISO A2 | 594 × 420 mm | milimetre |
| ISO A1 | 841 × 594 mm | milimetre |
| ISO A0 | 1189 × 841 mm | milimetre |
| Letter | 11 × 8,5 palca | palce |
| Legal | 14 × 8,5 palca | palce |
| Tabloid / ANSI B | 17 × 11 palcov | palce |
| ANSI C | 22 × 17 palcov | palce |
| ANSI D | 34 × 22 palcov | palce |
| ARCH C | 24 × 18 palcov | palce |
| ARCH D | 36 × 24 palcov | palce |
| ARCH E | 48 × 36 palcov | palce |

Nové listy začínajú na ISO A3 pre metrické a bezjednotkové výkresy a na Tabloid pre výkresy v palcoch alebo stopách. Výstupy modelu začínajú na ISO A4 alebo Letter rovnakým spôsobom a potom si pamätajú vašu poslednú voľbu. Listy z otvorených súborov si zachovajú svoju vlastnú veľkosť, zobrazenú ako „Vlastný", keď nie je jednou z týchto.

## Mierky

Mierka `1:n` znamená, že jedna jednotka na papieri zobrazuje n rovnakých jednotiek v modeli, takže 1:100 zobrazuje 1 m budovy ako 10 mm papiera. CadCraft to vypočíta z jednotiek výkresu a jednotky papiera.

**Metrické mierky**, ponúkané pre každý výkres: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architektonické mierky**, ponúkané keď sú jednotky palce alebo stopy: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inžinierske mierky**, ponúkané keď sú jednotky palce alebo stopy: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vlastné mierky.** Napíšte `SCALELISTEDIT` (alebo `SCALELIST`), aby ste pridali vlastnú mierku, napríklad 1:75 alebo mierku lokality 2 jednotky papiera : 300 jednotiek výkresu. `Add` sa spýta na názov, potom na jednotky papiera a jednotky výkresu (názov ako `1:75` ponúkne svoje čísla; stlačte {{key:Enter}}, aby ste ich vzali). `Edit`, `Delete`, `List` a `Reset` pracujú s tým istým zoznamom; `Reset` sa vráti k štandardnému zoznamu. Vaše mierky sa objavia za štandardnými v zozname mierok pohľadu vo Vlastnostiach a v dialógu {{ui:Vykresliť do PDF}}; pohľad na tejto mierke sa číta s jeho názvom a ukladajú sa vkresbe (DWG a DXF 2000) ako zoznam mierok výkresu. Výkres otvorený z iného programu prinesie svoj zoznam; mierky, ktoré má a zhodujú sa so štandardnou, sa nezobrazia dvakrát.

Keď sa pohľad nasmeruje pomocou {{ui:Zobraziť celý model}} alebo {{ui:Vybrať okno na modeli…}}, CadCraft vyberie najväčšiu štandardnú mierku, ktorá sa zmestí. {{ui:Prispôsobiť celý model}} nastaví presnú mierku, ktorá sa číta ako obyčajný pomer.

## Veľkosti na papieri a v modeli

Veľkosti textu a kót sú v jednotkách priestoru, v ktorom kreslíte.

| Chcete na papieri | Nakreslené na liste | Nakreslené v modeli v 1:50 (výkres v mm) | Nakreslené v modeli v 1/4" = 1'-0" (výkres v palcoch) |
|---|---|---|---|
| text 2,5 mm | 2,5 | 125 | — |
| text 3/32" | 0,09375 | — | 4,5 |

Pri kótach držte veľkosti ako veľkosti na papieri a nastavte celkovú mierku ({{cmd:DIMSCALE}}) na mierku výstupu: 50 pre 1:50, 48 pre 1/4" = 1'-0". Pozrite [Nastavenie veľkostí kót](topic:dimension-settings).

## Popisy podľa mierky

Kreslite model v plnej veľkosti a nechajte CadCraft urobiť výpočty vyššie za vás.

1. Vyberte text alebo kóty, ktoré si majú zachovať veľkosť na papieri. Vo Vlastnostiach zaškrtnite {{ui:Anotatívny}}. {{ui:Veľkosť na papieri}} potom ukáže napríklad `2.5 mm at 1:50`.
2. Napíšte {{cmd:ANNOSCALE}} a mierku, v ktorej bude výkres vytlačený, napríklad `1:100`.

Každý anotatívny text a kóta sa zmení tak, aby sa pri novej mierke vytlačili v rovnakej veľkosti: text 2,5 mm je vysoký 125 v milimetrovom výkrese v 1:50 a 250 v 1:100. Šírka odseku sa mení s ním; text kóty, šípky a medzery sa menia spolu (ich celková mierka). Je to jeden krok späť a objekty, ktoré nie sú anotatívne, sa nikdy nemenia.

Nastavenie sa ukladá v DWG a DXF: ostatné programy čítajú príznak anotatívnosti a CadCraft tiež uchováva mierku, pre ktorú je každý objekt dimenzovaný.

Ak vaša kancelária nastavuje výšky na papieri v doplnku Predvolené politiky ({{ui:Nastavenia}} › {{ui:Globálne}} › {{ui:Predvolené politiky}} › {{ui:Veľkosti anotácií na papieri}}), {{cmd:ANNOSCALE}} tiež nastaví výšku, s ktorou začína nový text, na výšku kancelárie pre poznámky v tej mierke. Pozrite [Predvolené politiky](topic:default-policies).

### Jeden objekt v niekoľkých mierkach

List často zobrazuje ten istý pôdorys v 1:100 a jeho časť v 1:50. Dajte poznámkam a kótam obe mierky a každý pohľad ich zobrazí vo veľkosti na papieri:

1. Vyberte anotatívny text a kóty a napíšte `OBJECTSCALE`.
2. Vyberte `Add` a napíšte mierku, napríklad `1:50`. (`Current scale` pridá anotačnú mierku výkresu; `List` ukáže, čo každý objekt zachováva; `Delete` jednu odoberie.)

Pohľad, ktorého mierka je v zozname objektu, ho zobrazí vo veľkosti pre túto mierku: text 2,5 mm sa kreslí vysoký 250 cez pohľad 1:100 a 125 cez 1:50, na obrazovke aj vo výstupe. Objekt zostáva na mieste; líši sa iba jeho veľkosť. V pohľade s mierkou, ktorá nie je v zozname objektu, sa objekt zobrazí vo veľkosti, akú má, kým nenapíšete `ANNOALLVISIBLE` a nevyberiete `OFF`: potom sa tam nezobrazí. {{cmd:ANNOSCALE}} zmení veľkosť objektov, ktoré majú novú mierku v zozname, a ostatné nechá tak, ako sú.

Zoznamy sa ukladajú v DWG a DXF ako vlastné údaje CadCraftu. Iný program vidí každý objekt ako anotatívny, v jednej mierke, pre ktorú je dimenzovaný. Prepínač ANNOALLVISIBLE sa do súboru neukladá.

## Hrúbky a typy čiar

Vrstva alebo objekt môže mať **hrúbku čiary** (0,05 až 2,11 mm) a **typ čiary** (čiarkovaná, skrytá, osová, fantómová, bodkovaná…). Nastavte ich v pravom paneli: keď nič nie je vybrané, {{ui:Typ čiary}} a {{ui:Hrúbka čiary}} v {{ui:Aktuálne nastavenia}} sú to, čo dostanú nové objekty ({{ui:Podľa hladiny}}, aby sledovali svoju hladinu), a tie dve pod {{ui:Hladina …}} sú vlastné pre aktuálnu hladinu. Keď sú objekty vybrané, tie isté dva riadky a {{ui:Mierka typu čiary}} zmenia tieto objekty. Príkazy sú {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) a {{cmd:LTSCALE}} (`LTS`).

Typy čiar sa zobrazujú na obrazovke a vo výstupoch. Ich čiarky sú v jednotkách výkresu: metrický výkres používa ISO veľkosti (DASHED: čiarky 12,7 mm), výkres v palcoch palcové (0,5"). Ak sú čiarky príliš malé alebo veľké, zmeňte {{ui:Mierku typu čiary}} výkresu (LTSCALE): každá čiarka a medzera sa ním násobí; vlastná mierka objektu ho násobí znova. Vzor príliš jemný na to, aby bol vidieť, sa kreslí ako plná čiara.

Hrúbky čiar sa tlačia vo výstupoch, v mm na papieri bez ohľadu na mierku. Čiary s predvolenou {{ui:Predvolená}} hrúbkou používajú šírku pera zvolenú v dialógu {{ui:Vykresliť do PDF}} (0,13 až 0,70 mm; na začiatku 0,25 mm); hrúbka 0 sa tlačí ako najtenšia čiara. Na obrazovke má každá čiara šírku jeden pixel, kým nestlačíte {{ui:LWT}} na stavovom riadku (alebo nenapíšete {{cmd:LWDISPLAY}}): potom hrúbka nad 0,25 mm kreslí širšie (0,5 mm = 2 pixely) v modeli a na liste v jej skutočnej šírke na papieri. Voľba sa uchováva v tomto prehliadači.

## Štandard kancelárie

Kancelária môže uchovávať výšky textu na papieri, hladiny, polia popisového poľa a šablóny v jednom zázname, štandarde kancelárie. CadCraft ho číta v tomto poradí: vlastný záznam výkresu (nastavený cez {{cmd:OFFICESTANDARD}} › `Import`, uložený v súbore), spoločný štandard vášho tímu, potom vaše Predvolené politiky. Anotatívny text a kóty berú svoju výšku na papieri z neho pri anotačnej mierke. Prázdny štandard nič nemení. {{cmd:OFFICESTANDARD}} › `Layers` pridá kancelárske hladiny, ktoré výkres nemá.

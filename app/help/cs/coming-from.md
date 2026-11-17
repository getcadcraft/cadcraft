---
title: Přechod z jiného kreslicího softwaru
summary: Jak se známé příkazy, klávesy a zvyky mapují na CadCraft a rozdíly, které zaskočí zkušené kreslíře.
keywords: přechod, rozdíly, migrace, zvyky, zkratky, dynamické zadávání, pickfirst, pickadd, qsave, saveas, uložit jako, mtext, ctb, polární sledování, xref, klávesové zkratky, známé, copyclip, pasteclip, pasteorig, copybase, schránka
from: b58688e7
---

Pokud jste pracovali v AutoCADu nebo v programu postaveném na stejném modelu, většina toho, co znáte, funguje i tady: příkazový řádek, zkratky jako `L`, `C`, `TR` a `O`, Enter nebo Space k opakování, výběr oknem a křížením, uchopení objektů na F3, Ortho na F8, prostor modelu s rozvrženími a výřezy. Tato stránka uvádí, co se mapuje přímo, a pak rozdíly, na které lidé narážejí. Čtěte druhou polovinu i tehdy, když ji jen prolistujete.

## Co se mapuje přímo

| Zvyk | V CadCraftu |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Stejné příkazy, stejné zkratky |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Stejné |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Stejné kótovací příkazy |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` napsané na příkazovém řádku | Stejné, pro nové kóty |
| `B` pro vytvoření bloku, `I` pro vložení, `PU` pro vyčištění | Stejné (vyčištění odstraní jen nepoužité bloky) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` a potom `E` nebo `W` | Stejné |
| Napsání `_LINE` nebo `-LAYER` ze skriptu nebo ze zvyku | Úvodní `_`, `-`, `.` nebo `'` se ignoruje |
| Enter nebo Space na prázdné výzvě opakuje poslední příkaz | Stejné |
| Esc zruší; Esc znovu zruší výběr | Stejné |
| `@dx,dy`, `@d<a`, zadané úhly proti směru hodinových ručiček od východu | Stejné |
| Okno zleva doprava, křížení zprava doleva, klik-klik; stisk a tažení pro lasso, Space střídá okno / křížení / plot (LASSOMODE) | Stejné |
| Nejprve výběr, potom příkaz (podstatné jméno a sloveso) | Stejné; dokončený příkaz zruší výběr |
| `ALL` a `L` při výzvě Vyberte objekty | Stejné |
| Shift+klik odebere z výběru | Stejné. Nastavení může způsobit, že klik výběr nahradí, jako PICKADD 0: viz [Nastavení CadCraftu](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Stejné příkazy a klávesy; vložení umístí kopii podle jejího levého dolního rohu, jako PASTECLIP |
| F3 uchopení objektů, F7 mřížka, F8 Ortho | Stejné klávesy |
| Dvojklik na kolečko pro zoom na rozsah | Stejné |
| Zrcadlený text zůstane čitelný | Stejné (jako s MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Stejné; na Macu funguje i Command |

[Referenční příručka příkazů](topic:commands) uvádí každý příkaz a zkratku.

:::tip
Pokud máte rádi pás karet z AutoCADu, vyberte v {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Nabídky, klávesy a myš}} styl nabídek {{ui:Klasické kreslení}}: karty Domů, Vložit, Anotace, Parametrické, Pohled, Správa a Výstup nad stejným příkazovým řádkem; prostřední tlačítko posouvá, zatímco pravé tlačítko je Enter. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).
:::

[Přehled příkazů](topic:command-map) uvádí každý příkaz CadCraftu s jeho krátkými názvy a [rychlý přehled](topic:cheat-sheet) 40 nejpoužívanějších (také jako jednostránkové PDF).

## Rozdíly, na které lidé narážejí

### Zadané body jsou absolutní

S zapnutým dynamickým zadáváním jiný program bere zadaný `100,0` jako druhý bod relativně. **Příkazový řádek CadCraftu to nedělá:** tam je `x,y` vždy měřeno od počátku. S zapnutým {{ui:Dyn}} ({{key:F12}}) použijte místo toho jeho pole: vzdálenost, {{key:Tab}}, úhel. Použijte `@100,0` pro „100 vpravo od posledního bodu“, nebo pohněte kurzorem správným směrem a napište holé `100`.

### Shift přeskakuje uchopení; neaktivuje Ortho

Podržení Shiftu při kliknutí ignoruje uchopení objektů pro tento klik. Nepřepne dočasně Ortho. Použijte F8 nebo tlačítko {{ui:Ortogonální}}.

### Pravé tlačítko je vždy Enter

Nabídka pravým tlačítkem neexistuje. Pravé tlačítko v kresbě je Enter: ukončí příkaz, dokončí výběr nebo opakuje poslední příkaz. Během přesunu úchytu nebo výběrového rámečku naopak zruší akci. Pro posun táhněte pravým tlačítkem.

### Mezerník neposouvá

Mezerník je Enter, takže podržení mezerníku a tažení neposouvá. Posouvejte prostředním nebo pravým tlačítkem, nebo oddalte a přiblížte kolečkem na jiném místě.

### Oříznout a prodloužit

Oříznout a Prodloužit začínají v rychlém režimu: každý viditelný objekt je řezná hrana nebo hranice, kus pod kurzorem ukazuje, co zmizí, tažená dráha ořízne každý kus, který protíná, a objekt, který nic neprotíná, se smaže. {{key:Shift}} přepíná mezi oříznutím a prodloužením. `O` přepne do standardního režimu (nejprve vyberte hrany), `F` a `C` jsou plot a křížení, `E` je EDGEMODE, `R` maže. Volba `P` (Projekce) neexistuje: CadCraft ořezává v rovině výkresu.

### Zaoblení a sražení

{{cmd:FILLET}} a {{cmd:CHAMFER}} berou volby, které znáte: Zpět (U), Mnohočára (P), Poloměr (R) nebo Vzdálenost (D), Úhel (A) a Metoda (E), Oříznutí (T) a Vícenásobně (M), a {{key:Shift}}+klik pro ostrý roh. Zaoblení mezi mnohočárou a úsečkou přidá oblouk jako samostatný objekt místo spojení do mnohočáry a rohy mnohočáry vedle segmentu oblouku zůstanou beze změny.

### Odstavcový a jednořádkový text

`T`, `MT` a `MTEXT` je odstavcový text psaný přímo na místě, se šířkou, řádkováním a zarovnáním; `DT` a `DTEXT` je jednořádkový text, jak jej znáte. Nejsou tu styly textu ani sloupce a zatím nelze psát formátování uvnitř textu (tučně, zlomky pod sebou); formátování, které přijde v souboru, se zachová, vykreslí a uloží (viz [Přidání textu a popisků](topic:text#formatting-inside-paragraph-text-from-other-programs)). Vše se vykresluje v písmu ve stylu Helvetica.

### Uložit znamená „stáhnout kopii“

{{key:Mod+S}}, `SAVE` a `QSAVE` stáhnou kopii ve formátu výkresu: DWG, které jste otevřeli, se uloží jako DWG, DXF jako DXF. V prohlížeči se nic nepřepisuje na místě a otevřené soubory se nikdy nemění. V CadCraft Studio {{key:Mod+S}} zapíše zpět do souboru, který jste otevřeli.

`SAVEAS` ({{key:Mod+Shift+S}}) je malý dialog, ne prohlížeč souborů: vyberte {{ui:DWG}} (s jeho {{ui:Verze}}, AutoCAD 2000 až 2018), {{ui:DXF R12}} nebo {{ui:DXF 2000}} a klikněte na {{ui:Uložit}}. O tom, kam stahování půjde, rozhoduje prohlížeč. `DXFOUT` vždy stáhne DXF R12.

DWG, které jste otevřeli, se uloží ve verzi, ve které přišlo; nový výkres se uloží ve formátu AutoCAD 2000, pokud nevyberete jiný. Listy, kóty a vzory šrafování se zachovají. Viz [Soubory: co se otevře, co se uloží](topic:files#saving).

### Vrstvy: jednodušší

- Každá změna vrstvy (zapnutí, zmrazení, zamknutí, barva, vykreslení, typ čáry, tloušťka, aktuální vrstva) je jeden krok zpět.
- Vypnutí a zmrazení mají v CadCraftu stejný účinek.
- Vrstvy, které výkres zmrazí v jednom výřezu, zůstanou tam zmrazené: na obrazovce, ve výtiscích i při uložení jako DWG nebo DXF.
- Výřez, který zobrazuje vrstvu ve vlastní barvě, typu čáry, tloušťce nebo průhlednosti, to zachovává na obrazovce, ve výstupech i v uloženém DWG (DXF zachovává vlastní nastavení vrstvy; uložení to oznámí). Měnit to pro každý výřez zatím není hotovo.
- Správce vlastností vrstev ani stavy vrstev neexistují; {{cmd:RENAME}}, {{cmd:LAYMRG}} a {{cmd:LAYDEL}} přejmenují, sloučí a smažou vrstvy. Typy čar a tloušťky se nastavují v pravém panelu (viz [Tloušťky čar a typy čar](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} a {{cmd:LAYMCUR}} fungují výběrem.
- Uložení do DXF R12 zapíše názvy vrstev velkými písmeny. DWG je zachovává tak, jak jste je napsali.

### Styly kót

`DIMSTYLE` otevře správce pojmenovaných stylů (nový, upravit, nastavit aktuální, porovnat, použít). `DIMSCALE` a další nastavení stále mění, co používají nové kóty, a každá kóta si ponechává vlastní velikosti, které můžete změnit také v panelu Vlastnosti. Aktuální styl se do souboru neukládá. Kóty se řídí formátem délek výkresu (desetinně, nebo stopy a palce příkazem {{cmd:UNITS}}), nebo vlastním {{ui:Formát}}. Viz [Nastavení velikostí kót](topic:dimension-settings).

### Tisk je jednodušší

Tabulky stylů tisku fungují podle barvy, stejně jako soubory CTB: Monochrome, Colour a Grayscale jsou vestavěné, můžete si vytvořit vlastní a každý list si ponechává svou tabulku. Čtení souborů CTB je postaveno na zveřejněném popisu a vyzkoušeno jen na souborech, které jsme vytvořili; pojmenované tabulky stylů tisku (STB) a nastavení stránky zatím nejsou hotové. Čáry se tisknou se svou tloušťkou, ostatní jednou šířkou pera. Listy se vykreslují v měřítku 1:1 na svém vlastním papíru; model se vykresluje v zvoleném nebo přizpůsobeném měřítku. Viz [Vykreslit do PDF](topic:plot-pdf).

### Práce uvnitř výřezu

Jak to znáte: dvojklik uvnitř výřezu (nebo napište {{cmd:MSPACE}}) pracuje s modelem skrze něj, a dvojklik vně (nebo {{cmd:PSPACE}}) vás vrátí na list. Uvnitř výřezu posun a zoom mění, co výřez zobrazuje, pokud není jeho zobrazení zamčené; pak posouvají list. Kliknutí na záložku pod výkresem také výřez opustí. Viz [Práce na modelu přes výřez](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Sledování a dynamické zadávání ano, přichycení k mřížce zatím ne

Mřížka slouží jen k pohledu; body se k ní nepřichytávají (režim přichycení F9 neexistuje). Polární sledování ({{key:F10}}, krok nastavený příkazem {{cmd:POLARANG}}) a sledování uchopení objektů ({{key:F11}}: zastavte na bodu uchopení, abyste jej získali) fungují, jak je znáte; viz [Přichycení k objektům](topic:object-snaps#polar-tracking). Dynamické zadávání ({{key:F12}}) ukazuje vzdálenost a úhel (nebo X a Y) u kurzoru; viz [Zadávání souřadnic a vzdáleností](topic:coordinate-entry#dynamic-input).

### Stopy a palce

Zvolte {{ui:Formát délek}} {{ui:Stavební}} nebo {{ui:Inženýrský}} (nebo napište {{cmd:UNITS}}) a zadávejte délky tak, jak je znáte: `12'6"`, `12'6-1/2"`. Před zlomek použijte pomlčku, ne mezeru: {{key:Space}} je {{key:Enter}}. Nastavte i {{ui:Jednotky}} na {{ui:Palce}}, aby listy a výtisky nabízely architektonická měřítka. Formát se zachová v uložených souborech DWG a DXF. Viz [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopírování a vkládání zůstává uvnitř CadCraftu

{{key:Mod+C}}, {{key:Mod+X}} a {{key:Mod+V}} kopírují, vyjímají a vkládají objekty v rámci výkresu, mezi výkresy a mezi záložkami CadCraftu ve stejném prohlížeči. Schránka je vlastní schránkou CadCraftu: objekty CadCraftu nevložíte do jiného programu a objekty z jiného programu nevložíte do CadCraftu. Vložení z výkresu v jiných jednotkách nepřepočítá měřítko: použijte potom {{cmd:SCALE}}. {{key:Mod+D}} je duplikace, která se pohybuje s kurzorem, což je přidání CadCraftu. Viz [Kopírování, vkládání a duplikace](topic:copy-paste).

### Klávesy prohlížeče, které nelze použít

Webová stránka nemůže převzít {{key:Mod+N}}, {{key:Mod+W}} nebo {{key:Mod+T}} z prohlížeče: ty otevírají a zavírají okna a záložky. Použijte tlačítko {{ui:Nová}} nebo napište `NEW`. Viz [Klávesy, myši a touchpady](common:keys).

## Příkazy, které možná hledáte, ale ještě nejsou

{{cmd:TABLE}} není hotový. Při napsání se zobrazí „Neznámý příkaz“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} a {{cmd:XREF}} hotové jsou.) [Ještě není hotovo](topic:not-built-yet) uvádí, co dělat místo toho.

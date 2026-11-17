---
title: Vykreslit do PDF
summary: Vytvořte PDF listu v plné velikosti nebo modelu v měřítku či přizpůsobeném papíru, vytiskněte je z prohlížeče nebo ze Studia, případně uložte jako PNG nebo SVG.
keywords: vykreslit, tisk, tiskárna, kopie, png, svg, obrázek, pdf, publikovat, exportpdf, papír, měřítko, jednobarevně, stupně šedi, černobíle, tloušťka čáry, pero, nastavení stránky, okno vykreslení, styl tisku, tabulka stylů tisku, ctb, závislé na barvě, rastrování, plotstyles, stylesmanager
from: a4752f83
---

## Co vytvoříte

PDF listu v plné velikosti, poté rychlé PDF modelu v měřítku 1:100 a výtisk.

PDF se vytváří ve vašem prohlížeči; nic se nenahrává. Je to vektorové PDF: čáry zůstávají při každém zoomu ostré a text lze vyhledávat.

## Vykreslení listu

1. Klikněte na kartu listu pod výkresem.
2. Stiskněte {{key:Mod+P}}, klikněte na {{ui:Vykreslit}} nebo zadejte `PLOT` a stiskněte {{key:Enter}}.

Otevře se dialog {{ui:Vykreslit do PDF}}. Říká, který list vykresluje a na jaký papír, „v plné velikosti … tak, jak ho vidíte“. Náhled vpravo zobrazuje list.

3. V {{ui:Styl tisku}} vyberte {{ui:Jednobarevně (černě)}} pro černé čáry, {{ui:Barevně (jak je nakresleno)}} pro zachování barev, {{ui:Stupně šedi}}, nebo vlastní tabulku (viz [Tabulky stylů tisku](topic:plot-pdf#plot-style-tables)). List si tuto volbu ponechá: uloží se spolu s výkresem.
4. V {{ui:Tloušťka čáry}} vyberte šířku pera od 0.13 mm do 0.70 mm. Čáry s výchozí tloušťkou se vytisknou touto šířkou; čáry s vlastní tloušťkou (vrstvy nebo objektu, nebo pero jejich barvy v tabulce) se vytisknou právě touto vlastní tloušťkou.
5. Klikněte na {{ui:Stáhnout PDF}}.

Prohlížeč stáhne PDF pojmenované podle výkresu a listu, například `Drawing1-A-101 Plan.pdf`. Historie uvádí jeho velikost v bajtech a velikost papíru v milimetrech.

List se vždy vykresluje v měřítku 1:1 na svém vlastním papíru. Chcete-li změnit papír, změňte ho na samotném listu (viz [Nastavení listu](topic:sheets-and-viewports)). Vrstvy nastavené jako nevykreslované se vynechají, stejně jako rámečky výřezů.

## Všechny listy v jednom PDF

Při dvou nebo více listech má dialog {{ui:Vykreslit do PDF}} volbu {{ui:Všechny listy v jednom PDF}}; nebo zadejte {{cmd:PUBLISH}}. {{key:Enter}} vezme všechny listy; `Některé (S)` požádá o jejich názvy oddělené čárkami. Jedno PDF se stáhne se stránkou pro každý list v pořadí karet, každá ve své velikosti papíru, a se záložkou pro každý list s jeho názvem. Každý list se vykreslí se svou vlastní tabulkou stylů tisku; list, u kterého žádná není vybrána, použije tu, kterou jste naposledy zvolili v dialogu, a tloušťku pera, kterou jste naposledy zvolili.

## Vykreslení modelu

1. Klikněte na kartu {{ui:Model}}.
2. Stiskněte {{key:Mod+P}}.

Dialog říká, že vykresluje model na list papíru, a zobrazuje další nastavení:

3. V {{ui:Plocha}} vyberte, co se má vykreslit:
   - {{ui:Všechno (rozsah)}}: celý výkres.
   - {{ui:Co je na obrazovce}}: oblast, kterou nyní vidíte ve výkresu.
   - {{ui:Okno…}}: poté klikněte na {{ui:Vybrat}}, klikněte na dva rohy ve výkresu a dialog se vrátí.
4. V {{ui:Papír}} vyberte velikost: ISO A4 až A0, Letter, Legal, Tabloid a ANSI C a D, nebo ARCH C, D a E.
5. V {{ui:Orientace}} vyberte {{ui:Na šířku}} nebo {{ui:Na výšku}}.
6. V {{ui:Měřítko (S)}} vyberte {{ui:Přizpůsobit papíru}} nebo měřítko, například `1:100`.

Pod nastavením řádek uvádí měřítko a to, jak velká oblast vychází na papíře. Je-li větší než papír, dá to vědět: okraje jsou oříznuty. Vyberte menší měřítko, větší papír, nebo {{ui:Přizpůsobit papíru}}.

7. Klikněte na {{ui:Stáhnout PDF}}.

Vykreslení modelu ponechává kolem okraje 5 mm, protože většina tiskáren nemůže tisknout až k hraně. {{ui:Přizpůsobit papíru}} dává neobvyklé měřítko (historie a informační řádek uvádějí „(přizpůsobeno)“); musí-li výkres měřit přesně, zvolte standardní měřítko.

:::note
Měřítka se počítají ve skutečných jednotkách. Aby 1:100 bylo správně, nastavte {{ui:Jednotky}} v {{ui:Aktuální nastavení}} na to, čemu odpovídá jedna jednotka výkresu. Výkres bez jednotek se bere jako milimetry.
:::

## Tabulky stylů tisku

Tabulka stylů tisku říká, jak se každá z 255 standardních barev výkresu vytiskne, podobně jako tabulka stylů tisku závislá na barvě (CTB) v jiných CAD programech. Jsou zabudovány tři:

| Tabulka | Vytiskne |
|---|---|
| {{ui:Barevně (jak je nakresleno)}} | Každý objekt ve své barvě. |
| {{ui:Jednobarevně (černě)}} | Každou barvu černě: obvyklá volba pro výkresy. |
| {{ui:Stupně šedi}} | Každou barvu jako její odstín šedi, takže barvy zůstanou odlišitelné na černobílé tiskárně. |

Vlastní tabulku vytvoříte například takto: červené čáry tlusté a černé, vše ostatní tenké:

1. V dialogu {{ui:Vykreslit do PDF}} klikněte na {{ui:Upravit tabulky…}} (nebo zadejte {{cmd:PLOTSTYLES}}).
2. Klikněte na {{ui:Nová}} a do {{ui:Název}} napište název, například `office`. Chcete-li začít od zabudované tabulky, vyberte ji v {{ui:Tabulka}} a klikněte na {{ui:Kopírovat}}.
3. Klikněte na barvu v mřížce. {{key:Shift}}+klik vybere rozsah barev, {{key:Mod}}+klik přidá jednu další a {{ui:Vybrat všechny barvy}} vybere všechny.
4. Nastavte, jak se vybrané barvy vytisknou:
   - {{ui:Tiskne se}}: {{ui:Vlastní barvou}}, {{ui:Černě}} nebo {{ui:Jiná barva…}}.
   - {{ui:Jako šedou}}: barva jako její odstín šedi.
   - {{ui:Sytost (%)}}: 100 je plná sytost, 50 je v polovině cesty k bílé (rastrování), pro pozadí čar.
   - {{ui:Tloušťka čáry}}: {{ui:Vlastní tloušťkou čáry}} ponechá tloušťku objektu nebo vrstvy; hodnota vytiskne každou čáru dané barvy touto šířkou.
   - {{ui:Typ čáry}}: vytiskne každou čáru dané barvy jiným typem čáry (například vše červené čárkovaně); {{ui:Použít typ čáry objektu}} je ponechá.
   - {{ui:Konec čáry}} a {{ui:Spojení čar}}: tupé, hranaté nebo zaoblené konce a ostré, zkosené nebo zaoblené rohy (zaoblené, jako dříve, pokud nic nenastavíte).
   - {{ui:Styl výplně}}: plná výplň dané barvy se vytiskne jako šrafy (vodorovné nebo svislé pruhy, šikmé, křížové, kosočtverce, čtvercové tečky) místo inkoustu, pro tiskárny a plány, kde je plný inkoust příliš těžký.
   Samotná tabulka má ještě dvě nastavení: {{ui:Tloušťky čar}}, šířky, které zná (vytištěná čára jde na nejbližší z nich), a {{ui:Měřítko typu čáry}}, činitel pro čárkování všech typů čar, které nejsou ISO.
5. Klikněte na {{ui:Hotovo}}. Tabulka se uloží do výkresu a list (nebo model) se nyní vykresluje s ní. {{ui:Zrušit}} změny zahodí.

Barva s vlastním perem zobrazuje tečku v rohu a tečku dole, když nastavuje tloušťku čáry. Objekt s pravou barvou (ne jednou z 255) použije pero nejbližší standardní barvy.

Výkres si ponechá své tabulky a volbu každého listu, když uložíte jako DWG (2000 až 2018) nebo DXF (R12 nebo 2000), a znovu se s nimi otevře. Jiné programy vidí název jen v nastavení stránky každého listu (`office.ctb`), nikoli samotnou tabulku. Výkres z jiného programu, jehož nastavení stránky uvádí tabulku jako `monochrome.ctb`, se vykreslí se zabudovanou tabulkou tohoto názvu; pro jakýkoli jiný název dialog hlásí, že výkres ji nemá, a vykresluje barvy výkresu, dokud nevyberete tabulku nebo nevytvoříte tabulku s tímto názvem.

Chcete-li tabulku použít v jiném výkresu, klikněte v {{ui:Tabulky stylů tisku}} na {{ui:Exportovat}} (uloží `office.plotstyle.json`), pak na {{ui:Importovat…}} v jiném výkresu. {{ui:Importovat…}} přijme také soubor `.ctb` z jiného programu: čte se z publikovaného popisu formátu a **zatím nebyl ověřen proti skutečnému souboru**. Čte se barva, rastrování a tloušťka čáry každé barvy; stupně šedi, čísla per, typy čar, konce a spojení čar a styly výplně se nečtou, a pojmenovaná tabulka (`.stb`) se odmítne. Porovnejte první vykreslení s tím, co očekáváte, a pokud je chybné, pošlete nám soubor.

## Tisk

**V prohlížeči** klikněte na {{ui:Tisk…}}. CadCraft vytvoří PDF a otevře pro něj vlastní dialog tisku prohlížeče. Tam vyberte „Skutečná velikost“ nebo 100 % (ne „Přizpůsobit“), aby se zachovalo měřítko. Pokud prohlížeč z této stránky netiskne, PDF se místo toho otevře v nové kartě: vytiskněte ho odtud pomocí {{key:Mod+P}}.

Můžete také kliknout na {{ui:Otevřít k tisku}}: PDF se otevře v nové kartě prohlížeče a vytisknete ho odtud.

:::safari
Safari může PDF zobrazit a čekat, až použijete **Soubor** a pak **Tisk**.
:::

Pokud prohlížeč novou kartu blokuje, CadCraft místo toho PDF stáhne a v historii to oznámí. Povolte vyskakovací okna pro web, aby se příště otevřelo na kartě.

**V CadCraft Studio** dialog {{ui:Vykreslit do PDF}} vypíše tiskárny počítače. Vyberte {{ui:Tiskárna}}, {{ui:Papír v tiskárně}} a počet {{ui:Kopie}}, pak klikněte na {{ui:Tisk…}}. {{ui:Stejný jako vykreslení}} vybere papír tiskárny o velikosti listu (A3 pro list A3); pokud tiskárna žádný nemá, použije její vlastní papír a list na něj přizpůsobí. Ve Windows se list posílá jako obrázek v 300 dpi, protože Windows nemůže tisknout PDF bez programu pro PDF; v Linuxu a macOS jde samotné PDF do tiskové služby systému. Nic neopouští počítač.

## Soubory obrázků a SVG

{{ui:Stáhnout PNG}} uloží vykreslený list jako obrázek v 300 dpi (sníženo jen tehdy, když by velmi velký list byl větší, než prohlížeč zvládne vytvořit; historie to uvede). {{ui:Stáhnout SVG}} ho uloží jako škálovatelný výkres v milimetrech, s čarami a textem vykreslení. Obojí vychází ze stejného vykreslení jako PDF, se stejným stylem tisku, tloušťkou čar a oblastí. Obrázky vložené do výkresu jsou pouze v PDF; historie uvede, kolik jich bylo vynecháno.

## Obrázky

Obrázky se tisknou ve svém vlastním rozlišení pod čarami. {{ui:Obrázky}} v dialogu je omezí na 600, 300 nebo 150 dpi pro menší soubor. Čáry, text a šrafy zůstávají vždy ostré (vektorové) a průhlednost zůstává průhledností. Viz [Obrázky ve výkresu](topic:pictures).

## Nastavení, která se zapamatují

Dialog si v tomto prohlížeči pamatuje váš poslední papír, orientaci, měřítko a tloušťku čáry. Tabulka stylů tisku se uchovává u každého listu ve výkresu; list, u kterého žádná není vybrána, začne s tou, kterou jste zvolili naposledy. Zvolené okno se zachová, dokud znovu nenačtete stránku; poté dialog začíná na {{ui:Všechno (rozsah)}}.

## Časté chyby

- **PDF je prázdné nebo jsou tlačítka šedá.** Není co vykreslit (prázdný model), nebo je vybráno {{ui:Okno…}} a ještě není vybráno žádné okno („Vyberte okno k vykreslení.“).
- **Text ukazuje „?“ v PDF.** Text v polštině, češtině, cyrilici, řečtině a dalších evropských písmech se vytiskne jako sám sebe: PDF pak nese písmena, která potřebuje (z písma Liberation Sans, které má šířky písem Helvetica), a text lze stále označit a vyhledávat. Text v čínštině, japonštině a korejštině se také vytiskne jako sám sebe: když ho výkres obsahuje, vykreslení stáhne větší písmo (asi 10 MB, jednou) a PDF nese jen použité znaky, takže při prvním použití je potřeba připojení (netýká se offline kopie uložené dříve). Hebrejština se tiskne ze stejného vloženého písma jako latinka a text v arabštině, perštině a urdštině způsobí, že vykreslení stáhne ještě jedno písmo (méně než 1 MB, jednou); řádky zprava doleva se seřadí a jejich písmena se spojí (viz [Text](topic:text)). Vzácné ideogramy mimo tato písma a písma vyžadující složité tvarování, jako hindština, se vytisknou jako „?“ a historie je spočítá.
- **Všechny čáry mají stejnou tloušťku.** Jejich tloušťka je výchozí: dejte vrstvám nebo objektům {{ui:Tloušťka čáry}} v pravém panelu (viz [Tloušťky čar a typy čar](topic:units-papers-scales#line-weights-and-linetypes)), nebo nastavte tloušťky podle barvy v [tabulce stylů tisku](topic:plot-pdf#plot-style-tables).
- **„(není v tomto výkresu)“ vedle stylu tisku.** Výkres pochází z jiného programu a uvádí tabulku, kterou neobsahuje. Vyberte jednu z tabulek, nebo vytvořte tabulku s tímto názvem.
- **Konstrukční čáry se vytiskly.** Nastavte jejich vrstvu jako nevykreslovanou: klikněte na její tlačítko tisku v panelu {{ui:Vrstvy}}.
- **Výtisk má špatnou velikost.** Tiskárna ho zmenšila. Tiskněte ve skutečné velikosti.
- **{{key:Mod+P}} otevřel dialog tisku prohlížeče.** Kurzor byl v poli v pravém panelu, nebo byl otevřen jiný dialog. Stiskněte {{key:Enter}} nebo {{key:Esc}}, abyste pole opustili, a zkuste to znovu, nebo klikněte na {{ui:Vykreslit}}.
- **{{key:Mod+P}} nic neudělal.** Běží příkaz. Nejprve stiskněte {{key:Esc}}.

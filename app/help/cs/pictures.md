---
title: Obrázky ve výkresu
summary: Vložte obrázek PNG nebo JPEG, oříznete jej na obdélník nebo mnohoúhelník, zobrazte obrázky, které DWG používá, a vykreslete je ostře.
keywords: pastearea, parea, kopírovat oblast, zkopírovaná oblast, markupcraft, skutečná velikost, překryv, ole, ole2frame, vložený objekt, vložit obrázek, vložit snímek obrazovky, ctrl+v, obrázek ze schránky, snímek obrazovky, obrázek, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, fotografie, rastr, imagedef, xref, vykreslit, pdf, rozlišení
from: 4025ac97
---

## Co vytvoříte

Logo firmy umístěné v razítku, oříznuté na požadovanou část, a PDF, v němž se vytiskne ve vlastním rozlišení.

## Umístění obrázku

1. Napište {{cmd:IMAGEATTACH}} (nebo `IAT`) a stiskněte {{key:Enter}}. Vyberte soubor PNG nebo JPEG.
2. `Zadejte levý dolní roh`: klikněte, nebo napište bod.
3. `Zadejte jeho šířku`: šířka v jednotkách výkresu. {{key:Enter}} ponechá nabízenou šířku: jedna jednotka na pixel, nebo šířku, kterou jste zadali pro tento soubor minule (výzva říká, která).
4. `Zadejte jeho úhel natočení`: {{key:Enter}} pro žádné.

Obrázek je jeden objekt: vyberete jej podle jeho rámečku a přesunout, kopírovat, otočit, zvětšit nebo smazat jej můžete jako jakýkoli blok.

:::note
Soubor obrázku zůstává s výkresem, dokud je otevřený. Uložený DWG uvádí název souboru, jak to dělají jiné programy; neobsahuje pixely. Uchovávejte obrázek vedle výkresu.
:::

## Vložení snímku nebo zkopírovaného obrázku

1. Zkopírujte obrázek (snímek obrazovky pomocí {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=váš nástroj pro snímky obrazovky}},
   nebo Kopírovat obrázek v jiném programu či prohlížeči).
2. Ukažte, kam má na výkresu přijít, a stiskněte {{key:Mod+V}}.

Levý dolní roh obrázku dopadne na ukazatel (nebo doprostřed zobrazení), šířku má 40 % toho, co vidíte; přesuňte, zvětšete a oříznete jej jako jakýkoli obrázek. Jeho název je název výkresu s příponou `-picture-1.png` (pak `-2`, …), a historie to uvede. {{ui:Úpravy}} › {{ui:Více}} › {{ui:Vložit obrázek}} dělá totéž z nabídky (prohlížeč se může nejprve zeptat).

DWG si uchovává jen název souboru obrázku, takže uložení výkresu uloží i obrázek jako samostatný soubor. Oba držte ve stejné složce: výkres odtud zobrazuje obrázek. V prohlížeči je to druhé stažení a historie to uvede. Pokud je ve schránce jen objekty CadCraftu, {{key:Mod+V}} vloží je jako dříve.

## Vložení oblasti zkopírované v MarkupCraftu

{{ui:Kopírovat oblast}} v MarkupCraftu zkopíruje část listu jako obrázek, který ví, jak je velký. CadCraft jej vloží v této velikosti.

1. V MarkupCraftu zkopírujte oblast (obdélník, kružnici nebo volný tvar; {{ui:Kopírovat jako překryv}}, chcete-li přes ni vidět svůj výkres).
2. V CadCraftu stiskněte {{key:Mod+V}}, nebo napište {{cmd:PASTEAREA}} (nebo `PAREA`), nebo zvolte {{ui:Úpravy}} › {{ui:Více}} › {{ui:Vložit zkopírovanou oblast}}.
3. `Zadejte levý dolní roh zkopírované oblasti`: klikněte, nebo napište bod. Rámeček o velikosti oblasti se pohybuje za ukazatelem.

Jak velký bude:

- **List měl měřítko výkresu:** ve skutečné velikosti, v jednotkách výkresu (detail schodiště 2 m v měřítku 1:50 je dlouhý 2 m ve výkresu v metrech, 78.74 ve výkresu v palcích). Nic víc se nepožaduje.
- **List neměl měřítko:** CadCraft řekne jeho velikost na papíře a zeptá se na měřítko: napište `100` pro list 1:100, stiskněte {{key:Enter}} pro velikost papíru, nebo napište `P`, klikněte na dva body na vloženém obrázku a napište, jak daleko od sebe jsou ve skutečnosti (jako dělá {{cmd:SCANSCALE}}). Levý dolní roh zůstane tam, kam jste jej umístili.

Výkres bez jednotek přebírá milimetry, jako to dělá podklad PDF. Překryv zůstává na papíře průhledný a začíná tak zesvětlený, jak byl zkopírován; mimo kružnici nebo volný tvar je také průhledný. Vložená oblast je obrázek jako každý jiný: přesunout, otočit, zvětšit, oříznout nebo smazat jej lze, a celé vložení je jeden krok zpět. Uložená jako DWG je to IMAGE se svým zesvětlením a průhledností.

{{key:Mod+V}} vloží oblast, když je obrázek ve schránce oblastí, nebo když byla oblast zkopírována až po čemkoli, co jste zkopírovali v CadCraftu (a za posledních 6 hodin). Jinak se vloží jako dříve. {{cmd:PASTEAREA}} vloží poslední zkopírovanou oblast kdykoli.

## Zobrazení obrázků, které DWG používá

DWG ukládá jen to, kde jeho obrázky byly, takže CadCraft zobrazí každý z nich jako rámeček s názvem souboru.

1. Napište {{cmd:IMAGE}} (nebo `IM`). Příkazový řádek vypíše každý soubor obrázku a to, zda se zobrazuje.
2. Vyberte soubory (několik najednou). Soubor, jehož název obsahuje název, který výkres uvádí, se také počítá, protože exporty často přidávají předponu projektu.

## Oříznutí obrázku

1. Napište {{cmd:IMAGECLIP}} (nebo `ICL`) a vyberte obrázek.
2. Zvolte `R` a klikněte na dva rohy, nebo `P` a klikněte na body mnohoúhelníku, pak {{key:Enter}}. `D` ořez odstraní.

## Vykreslení obrázků

Obrázky se do PDF dostanou jako obrázky, ve svém rozlišení a pod čarami. V dialogu {{ui:Vykreslit}} mohou {{ui:Obrázky}} omezit rozlišení na 600, 300 nebo 150 dpi, aby byl soubor menší. JPEG se vloží tak, jak je.

## Co se kam ukládá

| Formát | Obrázky |
|---|---|
| DWG (každá verze) | Jako obrázky (IMAGE), s jejich ořezem |
| DXF | Jako jejich rámečky s názvem souboru; uložení to uvede |

## Objekty z jiných programů (OLE)

Výkres může obsahovat objekty, které vytvořil jiný program, například obrázek z malířského programu nebo oblast tabulky (objekty OLE). CadCraft je nespouští ani neupravuje a nové vložit nemůže. Dělá toto:

- **V DXF** se objekt OLE otevře jako rámeček. Pokud objekt uložil svůj obrázek a ten je bitmapa, obrázek se nakreslí uvnitř rámečku; jinak rámeček nese popisek s typem objektu, například „Microsoft Excel Worksheet (OLE)“. Rámeček můžete přesunout, kopírovat a smazat jako blok. {{cmd:SAVEAS}} do DXF 2000 jej zapíše znovu jako objekt OLE s nezměněnými daty.
- **V DWG** se objekty zachovají a při uložení jako DWG se zapíší zpět bajt po bajtu, ale **nejsou zobrazeny**: DWG si uchovává místo objektu uvnitř svých vlastních dat a CadCraft je zatím nečte. Historie uvede, kolik jich bylo zachováno. Napište {{cmd:OLELIST}}, abyste viděli, co to je (typ, velikost, zda každý uložil obrázek), a abyste na zvolené místo umístili kopii obrázku: **Umístit** se zeptá na číslo, levý dolní roh a šířku a nakreslí rámeček s obrázkem uvnitř. Tato kopie je rámeček, který lze přesunout nebo smazat; samotný objekt zůstane ve výkresu a při uložení se stále zapíše zpět.
- Objekt, který přišel z DXF, se v DWG uloží jen jako rámeček a popisek; historie to uvede. Uložte jako DXF 2000, chcete-li zachovat samotný objekt.
- Obrázky, které jsou metasoubory (což ukládá mnoho programů), se nekreslí: místo nich se zobrazí rámeček a popisek.

## Časté chyby

| Co vidíte | Proč | Oprava |
|---|---|---|
| Rámeček s názvem souboru | CadCraft nemá soubor | {{cmd:IMAGE}}, pak vyberte soubor |
| „To není obrázek“ | Vybraný objekt není obrázek | Vyberte rámeček obrázku |

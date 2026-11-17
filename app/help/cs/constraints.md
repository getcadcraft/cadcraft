---
title: Vazby ve výkresu
summary: Držte čáry vodorovně, konce u sebe a velikosti pevné pomocí geometrických a rozměrových vazeb a nechte výkres, aby se při změně velikosti přizpůsobil.
keywords: vazba, vazby, parametrické, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, stupně volnosti, plně svázáno
from: f8f21fa4
---

## Co vytvoříte

Desku, jejíž šířku změníte na jednom místě: její strany zůstanou kolmé, jeden roh zůstane na místě a výška bude vždy poloviční než šířka.

Vazby fungují na čárách, mnohočárách, kružnicích, obloucích a bodech na kartě {{ui:Model}}. Každá přidaná vazba je jeden krok, který lze vrátit zpět.

## Nakreslete obrys a zavažte jej

1. Napište `REC` a stiskněte {{key:Enter}}. Napište `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Napište `AUTOCONSTRAIN` a stiskněte {{key:Enter}}. Napište `ALL`, {{key:Enter}}, pak znovu {{key:Enter}}.

   Historie hlásí "Použity 4 vazby". Vedle stran se objeví malé rámečky s **H** a **V**: to jsou lišty vazeb.
3. Napište `GCFIX` a stiskněte {{key:Enter}}. Klikněte blízko levého dolního rohu. Objeví se rámeček s ⊕: tento roh zůstane tam, kde je.

`AUTOCONSTRAIN` přidává koincidentní vazby tam, kde se konce téměř stýkají, a vodorovné nebo svislé vazby tam, kde jsou čáry téměř vodorovné nebo svislé. Na jeho výzvu napište `S`, chcete-li změnit, jak blízko mají být (zpočátku 0.05 jednotky výkresu a 1°).

## Přidejte velikosti

1. Napište `DCHORIZONTAL` a stiskněte {{key:Enter}}.
2. Klikněte blízko levého dolního rohu, pak blízko pravého dolního rohu.
3. Klikněte pod obdélník pro kótovací čáru.
4. Výzva ukáže `Dimension text <d1=100>`. Napište `width=120` a stiskněte {{key:Enter}}.

   Obdélník má nyní šířku 120 a popisek zní `width=120`.
5. Napište `DCVERTICAL` a stiskněte {{key:Enter}}, napište `O` a stiskněte {{key:Enter}}, pak klikněte na pravou stranu.
6. Klikněte napravo od ní, napište `width/2` a stiskněte {{key:Enter}}.

   Výška je 60. Popisek zní `fx: d1=width/2`: výraz ji řídí.

Historie nyní hlásí, že obrys je plně svázán. Chcete-li změnit jeho velikost, změňte `width` (viz [Používání parametrů a rovnic](topic:parameters)), nebo dvakrát klikněte na popisek `width=120`, napište novou hodnotu a zvolte {{ui:Použít}}.

## Pohyb vázaných objektů

Přesun, otočení, měřítko, úchyty i panel Vlastnosti vazby zachovávají: co přesunete, zůstane podrženo a zbytek se přizpůsobí. Pokud vazby nemohou následovat, úprava se neprovede a historie uvede proč, například "Neprovedeno: vazby drží tento objekt na místě". Smazání objektu odstraní i jeho vazby.

## Zrcadlení a oříznutí vázaných objektů

- {{cmd:MIRROR}} zkopíruje vazby mezi zrcadlenými objekty na kopie. Strany (kterou stranou se tečna dotýká, od které strany se měří vzdálenost) se pro zrcadlenou kopii přepočítají a zkopírované kóty dostanou vlastní názvy, stejně jako při vložení. Při `Erase source objects` `Y` zůstanou vazby na zrcadlených objektech. Historie uvádí, kolik jich bylo přeneseno.
- {{cmd:TRIM}} ponechá vazby čáry nebo oblouku na zbylé části: vazba na konci přejde na kus, který tento konec stále má; pravidlo o směru ({{ui:Vodorovně}}, {{ui:Svisle}}, {{ui:Rovnoběžná}}, {{ui:Kolmá}}) platí na každém kusu a kóta mezi dvěma vnějšími konci je dál měří. Vazby, které držely odříznutou část, nebo délka, kterou řez změnil ({{ui:Stejná}}, úhel oblouku), zaniknou. Oříznutá kružnice si ponechá vazby středu a poloměru. Oříznuté mnohočáry své vazby ztrácejí.

## Vazby

| Příkaz | Udržuje |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | čáru nebo úsečku vodorovně nebo svisle (`2P`: dva body vodorovně nebo svisle) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dvě čáry rovnoběžně, kolmo nebo na jedné přímce |
| {{cmd:GCCOINCIDENT}} | dva body u sebe; `O`: bod na čáře, kružnici nebo oblouku |
| {{cmd:GCTANGENT}} | čáru a kružnici nebo oblouk, nebo dva z nich, v dotyku |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dvě kružnice nebo oblouky se společným středem; dvě délky nebo dva poloměry stejné |
| {{cmd:GCSYMMETRIC}} | dva body, čáry nebo kružnice souměrně přes čáru |
| {{cmd:GCFIX}} | bod (klikněte blízko něj) nebo celý objekt (`O`) tam, kde je |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | vzdálenost |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | poloměr, průměr, úhel mezi dvěma čárami nebo úhel oblouku |

{{cmd:GEOMCONSTRAINT}} a {{cmd:DIMCONSTRAINT}} se zeptají, která to má být; {{ui:Vazby}} a {{ui:Kóta}} ve skupině {{ui:Parametrické}} je spouštějí a {{ui:Více}} tam vypíše každou z nich. Kam kliknete, určí část: klik blízko konce, středu nebo středového bodu vybere tento bod; klik na mnohočáru vybere úsek pod ním. První objekt zůstane a druhý se přesune, aby se s ním setkal.

Vazba, která je v rozporu s ostatními, nebo nic nepřidá, protože ji ostatní již implikují, je odmítnuta se zprávou a nic se nepohne.

## Zobrazení, výběr a odstranění

- Klikněte na rámeček v liště vazeb (nebo na koincidentní čtvereček, nebo na popisek kóty) a vyberte tuto vazbu; historie ji pojmenuje. Stiskněte {{key:Delete}} pro její odstranění.
- {{cmd:DELCONSTRAINT}} odstraní všechny vazby z vybraných objektů.
- {{cmd:CONSTRAINTBAR}}: `S` zobrazí všechny lišty, `H` je skryje; nejprve vyberte objekty, abyste zobrazili nebo skryli jejich lišty. {{ui:Více}} obsahuje {{ui:Zobrazit lišty vazeb}} a {{ui:Skrýt lišty vazeb}}.
- {{cmd:DCDISPLAY}} zobrazí nebo skryje kótovací vazby. Nikdy se netisknou.
- {{cmd:DCCONVERT}} převede kóty nakreslené na čárách, kružnicích a obloucích na kótovací vazby.

:::note
Pokud jste používali parametrické kreslení v AutoCADu, názvy příkazů a výzvy jsou stejné. Vazby a parametry se ukládají do souborů DWG a DXF ve tvaru, který jiné programy ignorují; viz [Soubory](topic:files#constraints-in-files).
:::

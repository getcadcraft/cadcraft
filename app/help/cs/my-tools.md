---
title: Vlastní tlačítka (Moje nástroje)
summary: Přidávejte tlačítka na panel nástrojů, která spouštějí vlastní makra, přiřaďte jim klávesové zkratky, sdílejte je jako soubor a převezměte tlačítka ze souboru úprav CUIx.
keywords: moje nástroje, vlastní tlačítka, tlačítka panelu nástrojů, makro, makra, cui, cuix, přizpůsobit, nabídka, klávesové zkratky, zkratky, diesel, ^c^c, importovat tlačítka, exportovat tlačítka
from: 36618802
---

## Co se naučíte

Jak umístit vlastní tlačítka na panel nástrojů, každé spouští makro napsané tak, jak je píše AutoCAD, jak přiřadit tlačítku klávesu a jak převzít tlačítka souboru CUIx.

## Přidání tlačítka

1. Otevřete {{ui:Nastavení}} ({{key:Mod+,}}) a zůstaňte na kartě {{ui:CadCraft}}. Přejděte na {{ui:Moje nástroje}}.
2. Klikněte na {{ui:Přidat tlačítko…}}.
3. Vyplňte okno:
   - {{ui:Skupina}}: skupina panelu nástrojů, do které tlačítko patří, například `Moje nástroje`. Nový název vytvoří novou skupinu.
   - {{ui:Popisek}}: slova na tlačítku.
   - {{ui:Makro}}: co napíše, například `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Klávesová zkratka}}: klikněte do pole a stiskněte klávesy, například {{key:Ctrl+Alt+B}}.
   - {{ui:Ikona}}: obrázek PNG nebo SVG o velikosti nejvýše 64 KB, nebo žádnou (zobrazí se hvězdička).
4. Klikněte na {{ui:Uložit}}.

Tlačítko se objeví na konci panelu nástrojů, ve své skupině. Klikněte na něj, nebo stiskněte jeho klávesu, aby se spustilo. {{ui:Úpravy}} a {{ui:Smazat}} v seznamu jej změní, nebo odeberou.

## Psaní makra

Makro je to, co byste napsali na příkazový řádek, s několika znaky:

| Znak | Význam |
|---|---|
| `^C` | Zruší cokoli, co běží (`^C^C` je obvyklý začátek) |
| `;` nebo mezera | {{key:Enter}} |
| `\` | Počká na vás: kliknutí nebo napsanou odpověď, pak makro pokračuje |
| `_` nebo `.` před příkazem | Přijato a ignorováno (mezinárodní a vestavěné názvy) |
| `*` na úplném začátku | Spustí se znovu po každém ukončení, dokud nestisknete {{key:Esc}} |
| `^O`, `^G` | Zapne nebo vypne Ortogonální režim a mřížku |
| `$M=` | Zbytek je DIESEL. Čtou se jen `$(if,…)`, `$(getvar,…)`, `$(=,…)` a `$(eq,…)`; tlačítko s čímkoli jiným to oznámí a nic neudělá |

Příklady:

- `^C^C_line;0,0;@100,0;;` nakreslí úsečku délky 100 od počátku.
- `^C^C_circle;\25;` vás požádá o střed, pak tam nakreslí kružnici o poloměru 25.
- `^C^C_turnright` otočí pohled o 90° vpravo.

## Klávesové zkratky

Klávesa potřebuje {{key:Mod}} (Ctrl, nebo Cmd na Macu) nebo {{key:Alt}} s písmenem nebo číslicí, případně jednu z volných funkčních kláves {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Samotná písmena jdou na příkazový řádek. Klávesy, které už používají CadCraft, aplikace nebo prohlížeč (například {{key:Ctrl+S}} nebo {{key:Ctrl+Z}}), a klávesy, které už má jiné tlačítko, nebudou přijaty; okno uvede důvod.

## Sdílení tlačítek

- {{ui:Exportovat…}} uloží každou skupinu a tlačítko (s ikonami a klávesami) jako `my-tools.json`.
- {{ui:Importovat…}} přidá skupiny takového souboru za vaše. Název skupiny, který už používáte, dostane "(2)"; klávesa, která by kolidovala, se vynechá a panel to oznámí.

## Převzetí tlačítek ze souboru CUIx

1. Klikněte na {{ui:Importovat CUIx…}} a vyberte soubor `.cuix`.

Jeho panely nástrojů a panely pásu karet se stanou skupinami, každé tlačítko s jeho makrem a obrázkem (PNG, nebo BMP převedený do PNG). Jeho klávesové zkratky přijdou v samostatné skupině, každé tlačítko se svou klávesou; aliasy příkazů, které může nést, přijdou ve skupině {{ui:Aliasy}}. Panel vypíše, co bylo převzato.

:::note
Soubor se pouze čte. Příkazy, které CadCraft nemá, jsou uvedeny podle názvu, neodhadují se: jejich tlačítka to při kliknutí oznámí. DIESEL mimo několik výše uvedených funkcí, nabídky, tlačítka myši a pracovní prostředí se nečtou.
:::

## Dobré vědět

- Tlačítka se uchovávají v tomto prohlížeči (nebo v této desktopové aplikaci), nikoli ve výkresech.
- Tlačítko běží přes příkazový řádek, takže se vrací zpět jako cokoli, co napíšete: jedno {{key:Mod+Z}} na každý příkaz, který spustilo.

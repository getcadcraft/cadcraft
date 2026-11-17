---
title: Nabídky, klávesy a myš
summary: Vyberte styl nabídek, který odpovídá tomu, jak už pracujete, přiřaďte libovolnému příkazu vlastní klávesu nebo klávesu, která napíše příkaz, přesuňte příkazy mezi kartami pásu karet a nastavte, co dělá kolečko a tlačítka myši.
keywords: styl nabídek, nabídky, pás karet, panel nástrojů, řádek příkazů, klávesové zkratky, horké klávesy, klávesy, přizpůsobit, přemapovat, zkratky, textové klávesy, myš, kolečko, obrátit, směr přiblížení, prostřední tlačítko, pravé tlačítko, posun, export, import, přepínání, známý, klasické kreslení
from: 8bbf4f88
---

Příkazy CadCraftu jsou stejné, ať k nim přistoupíte jakkoli, a řádek příkazů je vždy k dispozici se svými zkratkami (`L`, `C`, `TR` …). **Styl nabídek** určuje jen to, kde na obrazovce jsou tlačítka, jak se tam jmenují a kterými klávesami se spouštějí. Zvolte ho v {{ui:Nastavení}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Nabídky, klávesy a myš}}; změna se projeví hned a tento prohlížeč si ji zapamatuje.

## Tři styly

| Styl | Co dostanete |
|---|---|
| {{ui:CadCraft}} | Vlastní panel nástrojů CadCraftu: Soubor, Kreslení, Úpravy, Kótování, Parametrické, Bloky, Listy, Upravit a Pohled, každý s nabídkou {{ui:Více}}. Výchozí. |
| {{ui:Klasické kreslení}} | Pás karet uspořádaný jako u klasických 2D kreslicích programů: nabídka {{ui:Soubor}} a rychlá tlačítka, pak karty {{ui:Domů}} (Kreslení, Úpravy, Anotace, Vrstvy, Blok, Vlastnosti, Nástroje, Schránka), {{ui:Vložit}}, {{ui:Kótování}}, {{ui:Parametrické}}, {{ui:Pohled}}, {{ui:Správa}}, {{ui:Výstup}} a {{ui:3D}}. Příkazy zadávejte jako vždy. Prostřední tlačítko posouvá; pravé kliknutí je {{key:Enter}} a tažení pravým tlačítkem nedělá nic. |
| {{ui:Pás karet}} | Pás jednoduchých úkolových karet: {{ui:Kreslení}}, {{ui:Úpravy}}, {{ui:Kótování}}, {{ui:Parametrické}}, {{ui:Bloky}}, {{ui:Listy}}, {{ui:Pohled}}, {{ui:3D}} a {{ui:Nástroje}}, s nabídkou {{ui:Soubor}} a rychlými tlačítky vpravo. Prostřední a pravé tlačítko posouvají, stejně jako ve stylu CadCraftu. |

Každý styl zachovává klávesy CadCraftu: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}} a {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} pro kreslicí pomůcky. Písmena nikdy nejsou klávesy: CadCraft je zapisuje do řádku příkazů.

Pás karet také obsahuje nástroje panelu Vrstvy a kreslicí pomůcky ze stavového řádku. Karta {{ui:3D}} se naplní, jakmile se otevře karta 3D pod výkresem; 3D nástroj zvolený na kartě Model nejdřív otevře kartu 3D a 2D nástroj zvolený na kartě 3D nejdřív vrátí na kartu Model.

:::tip
Klávesa, která patří k rozložení CadCraftu, ale váš styl ji přiřadil jinému příkazu, nedělá nic a stavový řádek řekne, kam její příkaz přešel („V Mých klávesách je Ortogonální na Ctrl+Alt+O“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šipky si vždy zachovají svůj význam. Když příkaz běží nebo se písmena píšou do řádku příkazů, klávesy patří řádku příkazů.
:::

## Vytvořte si vlastní

1. Vyberte styl nejbližší tomu, co chcete, pak klikněte na {{ui:Přizpůsobit…}}.
2. Na {{ui:Klávesy a nabídky}} najděte příkaz (pomůže vyhledávací pole). Klikněte na {{ui:Přidat klávesu}} a stiskněte klávesu. Kliknutím na klávesu ji odeberete.
3. U pásu karet {{ui:Kde je}} přesune příkaz na jinou kartu a panel, do nabídky {{ui:Soubor}}, nebo na {{ui:Jen klávesy}}.
4. Na {{ui:Myš}} nastavte kolečko a tlačítka, kterými se výkres posouvá.
5. Pojmenujte ho a klikněte na {{ui:Uložit}}.

Uložením vestavěného stylu vznikne vaše vlastní kopie („Moje klasické kreslení“); vestavěný se nikdy nemění. Klávesa přiřazená dvěma příkazům se zobrazí červeně a musí se opravit, než půjde uložit.

## Klávesy, které napíšou příkaz

{{cmd:SHORTCUTS}} (Pohled › Více › {{ui:Klávesové zkratky…}}) dá klávese celý řádek příkazu, například {{key:Ctrl+Alt+L}} pro `LINE` nebo {{key:F9}} pro `ZOOM E`. Tyto klávesy patří stylu, který je v použití: když tato verze poprvé otevře, klávesy, které jste vytvořili ve starší verzi, se jednorázově přenesou do vašeho vlastního stylu „Moje klávesy CadCraftu“ a fungují jako dřív. Export stylu je přenese s sebou.

## Myš

- **Kolečko myši**: {{ui:Posun kolečkem nahoru přibližuje}} (výchozí), nebo {{ui:Posun kolečkem nahoru oddaluje}}, a jak rychle. Gesto štípnutí na touchpadu vždy přibližuje nebo oddaluje tak, jak se pohybují vaše prsty.
- **Posun výkresu**: prostředním tlačítkem, pravým tlačítkem, nebo obojím. Pravé kliknutí bez tažení je vždy {{key:Enter}}. Levé tlačítko v CadCraftu vždy vybírá a kreslí, takže jeho zaškrtnutí zde nic nemění.
- **Tažení v 3D pohledech**: karta 3D si v každém stylu drží vlastní tlačítka (levé otáčí, prostřední a pravé posouvá).

## Vezměte to s sebou

{{ui:Exportovat}} uloží používaný styl jako malý soubor `.ccinput.json`; {{ui:Importovat…}} jej přidá, z jiného počítače nebo od kolegy. Importovaný soubor může ukazovat jen na vlastní příkazy CadCraftu: cokoli dalšího se vynechá a počet se ukáže ve stavovém řádku. {{ui:Smazat tento styl}} odstraní jeden z vašich vlastních.

:::note
Tato nastavení zůstávají v tomto prohlížeči. {{ui:Používat tento styl ve všech aplikacích}} pod kartami stylů způsobí, že se každá aplikace otevře ve svém odpovídajícím stylu (vlastní panel nástrojů, pás karet nebo Klasické kreslení), se změnami, které jste v každé z nich udělali. CadCraft nemá styl s řádkem nabídek: když je pro všechny aplikace zvolen řádek nabídek jiné aplikace, CadCraft ponechá svůj vlastní panel nástrojů.
:::

Související: [Klávesnice a myš](topic:keyboard) · [Nastavení CadCraftu](topic:settings) · [Přechod z jiného kreslicího softwaru](topic:coming-from) · [Zkratky příkazů](topic:command-aliases)

---
title: Kopírování, vložení a duplikování
summary: Kopírujte objekty do schránky CadCraftu, vkládejte je tam, kam kliknete, nebo na stejné místo, duplikujte je ukazovátkem a přenášejte práci z jiného výkresu nebo karty.
keywords: kopírovat, vyjmout, vložit, vložit na stejné místo, duplikovat, schránka, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, mezi výkresy, jiná karta, základní bod
from: 4b9f29d3
---

## Co se naučíte

Jak kopírovat objekty do schránky a vkládat je tam, kam kliknete, nebo podle jejich vlastních souřadnic, duplikovat je ukazovátkem, vyjmout je a přenést do jiného výkresu. Vše zde je také ve skupině {{ui:Úpravy}} na panelu nástrojů: {{ui:Kopírovat}}, {{ui:Vložit}} a nabídka {{ui:Více}}.

## Kopírování a vložení tam, kam kliknete

1. Vyberte objekty: klikněte na ně, nebo přetáhněte výběrové okno.
2. Stiskněte {{key:Mod+C}}, nebo klikněte na {{ui:Kopírovat}} ve skupině {{ui:Úpravy}}. Příkazový řádek řekne, kolik objektů bylo zkopírováno. Zůstávají vybrané.
3. Stiskněte {{key:Mod+V}}, nebo klikněte na {{ui:Vložit}}. Kopie se objeví u kurzoru, zavěšená za levý dolní roh zkopírovaných objektů.
4. Klikněte tam, kam má tento roh jít, nebo napište bod, například `2000,500`, a stiskněte {{key:Enter}}. Uchopení a ortogonální režim fungují jako obvykle.

Vložené objekty jsou vybrané, takže je můžete hned přesunout nebo změnit. Jedno {{key:Mod+Z}} vezme pryč celé vložení.

:::tip
Chcete, aby kopie visela z bodu, který si zvolíte, například z rohu stěny? Napište `COPYBASE`, klikněte na základní bod, vyberte objekty a stiskněte {{key:Enter}}. Vložení pak umístí tento bod tam, kam kliknete. Chcete-li zavěsit každou kopii za její střed místo levého dolního rohu, změňte {{ui:Bod vložení}} v [nastavení CadCraftu](topic:settings).
:::

## Vložení na stejné místo

Stiskněte {{key:Mod+Shift+V}}, nebo zvolte {{ui:Vložit na stejné místo}} v nabídce {{ui:Více}}. Kopie se vloží přesně do souřadnic, ze kterých byla zkopírována, bez kliknutí. Použijte to, když přenášíte objekty do jiného výkresu na stejné místo, nebo z jednoho listu na jiný.

## Duplikování a přesun

1. Vyberte objekty.
2. Stiskněte {{key:Mod+D}}, nebo zvolte {{ui:Duplikovat a přesunout}} v nabídce {{ui:Více}}.
3. Kopie leží na originálu a pohybuje se s ukazovátkem. Klikněte, kam má jít. Můžete také napsat posunutí, například `@0,-600`, nebo vzdálenost směrem ke kurzoru.

{{key:Esc}} před kliknutím nezanechá nic. Duplikát je jeden krok zpět a schránky se nedotýká.

## Vyjmutí

Stiskněte {{key:Mod+X}}, nebo zvolte {{ui:Vyjmout}} v nabídce {{ui:Více}}. Objekty se uloží do schránky a smažou z výkresu v jednom kroku zpět. Vraťte je pomocí {{key:Mod+V}} nebo {{key:Mod+Shift+V}}.

## Mezi výkresy a kartami

Schránka si podrží svou kopii, když otevřete jiný výkres, a sdílejí ji všechny karty CadCraftu v tomto prohlížeči. Zkopírujte v jedné kartě a pak stiskněte {{key:Mod+V}} v jiné.

- Bloky, které objekty používají, přijdou s nimi. Pokud výkres, do kterého vkládáte, už má blok stejného názvu, použije se jeho vlastní definice, jako v AutoCADu.
- Vrstvy, které objekty používají, se přidají s barvou a nastavením, která měly.
- Kopie se nepřepočítává měřítkem, když oba výkresy používají různé jednotky: CadCraft to oznámí a poté můžete použít {{cmd:SCALE}}.
- Výřezy zůstávají na svém listu; při kopírování se vynechají.

:::note
Schránka je vlastní schránka CadCraftu. Objekty CadCraftu nelze vložit do jiného programu ani vkládat do CadCraftu z jiného programu: uložte jako DWG nebo DXF. Velmi velká kopie se nemusí sdílet mezi kartami; příkazový řádek pak řekne, že ji může vložit jen tato karta.
:::

## Časté chyby

- **{{key:Mod+V}} vložilo text na příkazový řádek.** Něco jste tam psali, takže klávesy působily na text. Stiskněte {{key:Esc}} pro vymazání a pak znovu {{key:Mod+V}}.
- **Nic se nestalo a stavový řádek říká dokončit aktuální příkaz.** Běží jiný příkaz. Nejprve stiskněte {{key:Esc}}.
- **Vložení skončilo daleko.** Visí za levým dolním rohem toho, co jste zkopírovali, což může být vzdálený objekt, který jste omylem vybrali. Použijte {{ui:Vložit na stejné místo}}, nebo kopírujte pomocí `COPYBASE`.
- **"Nic nebylo vloženo" s důvodem.** To, co jiná karta nechala ve schránce, nešlo přečíst (bylo poškozené nebo změněné ručně). Zkopírujte objekty znovu.

Úplný seznam kláves najdete v [Klávesnice a myš](topic:keyboard) a každou výzvu v [Referenci příkazů](topic:commands#clipboard).

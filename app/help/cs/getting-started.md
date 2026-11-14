---
title: Začínáme s CadCraftem
summary: Co kreslicí aplikace CadCraft umí, kde běží a Váš první výkres od prázdné obrazovky po uložený soubor.
keywords: start, první výkres, nový, otevřít, uložit, uložit jako, začátek, návod, úvod, rychlý start
from: 1a56c575
---

CadCraft je 2D kreslicí aplikace. Kreslíte a upravujete úsečky, oblouky, mnohočáry, text, kóty a bloky, připravujete listy s razítky a výřezy a vykreslujete je do PDF. Otevírá výkresy DWG a DXF a ukládá je jako DWG nebo DXF.

Běží ve webovém prohlížeči. Není co instalovat: web Vám dá adresu a celá aplikace se načte do stránky. Výkresy se otevírají z Vašeho počítače a ukládají se zpět na něj. **Nic se nenahrává.**

Pokud jste již rýsovali, přečtěte si po této stránce téma [Pokud přicházíte z jiného kreslicího programu](topic:coming-from). Většina návyků zůstává a těch pár, které ne, je tam uvedeno.

## Chcete být provedeni?

Napište `TOUR` (nebo klikněte na {{ui:Absolvovat prohlídku}} na úvodní kartě, nebo {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Absolvovat prohlídku znovu}}). Šest krátkých kroků v rámečku nad výkresem: nakreslíte úsečku a kružnici, přesunete ji, oříznete, něco smažete a okótujete. Každý krok skončí, když ho provedete, a krok i celou prohlídku můžete přeskočit. Sama se spustí jen poprvé. [Tahák](topic:cheat-sheet) obsahuje 40 příkazů, které použijete nejčastěji, a [mapa příkazů](topic:command-map) všechny příkazy.

## Co potřebujete

- Aktuální Chrome, Edge, Firefox nebo Safari na počítači s Macem, Windows nebo Linuxem. Viz [Prohlížeče a platformy](common:browsers).
- Myš s kolečkem je nejpohodlnější. Trackpad funguje; viz [Myš, trackpad a dotyk](topic:mouse-trackpad-touch).
- Klávesnici. CadCraft se ovládá psanými příkazy, jako většina kreslicích programů.

## Princip v jednom odstavci

Napíšete příkaz (nebo kliknete na jeho tlačítko) a příkazový řádek dole se Vás ptá na jednu věc po druhé: „Zadejte první bod“, „Zadejte další bod“. Na každou otázku odpovíte kliknutím do výkresu nebo napsáním hodnoty a stiskem {{key:Enter}}. Klávesa {{key:Esc}} příkaz zruší. To je celý způsob ovládání; vše ostatní jsou podrobnosti.

## Váš první výkres

Nakreslíte obdélník 4000 krát 3000 z úseček, doprostřed vložíte kružnici a soubor uložíte.

1. Otevřete CadCraft. Příkazový řádek dole zobrazuje `Příkaz:` a plocha výkresu krátkou kartu „Začněte kreslit“.
2. Napište `L` a stiskněte {{key:Enter}}. Nemusíte nejdřív klikat do příkazového řádku: psaní kdekoli jde tam.
3. Výzva se změní na `Zadejte první bod:`. Napište `0,0` a stiskněte {{key:Enter}}.
4. Napište `@4000,0` a stiskněte {{key:Enter}}. Objeví se úsečka vedoucí doprava. Znak `@` znamená „od posledního bodu“.
5. Napište `@0,3000` a stiskněte {{key:Enter}}.
6. Napište `@-4000,0` a stiskněte {{key:Enter}}.
7. Napište `C` a stiskněte {{key:Enter}}. `C` je volba Uzavřít (C): poslední úsečka se vrátí do prvního bodu a příkaz skončí.
8. Klikněte na {{ui:Rozsah}} ve skupině Pohled na panelu nástrojů. Obdélník vyplní obrazovku.

Nyní byste měli vidět čtyři úsečky tvořící obdélník a historie nad příkazovým řádkem uvádí, co jste napsali.

9. Napište `C` a stiskněte {{key:Enter}} pro spuštění příkazu kružnice.
10. Napište `2000,1500` a stiskněte {{key:Enter}} jako střed.
11. Napište `500` a stiskněte {{key:Enter}} jako poloměr.

Uprostřed obdélníku se objeví kružnice.

12. Stiskněte {{key:Mod+S}} nebo klikněte na {{ui:Uložit}} ve skupině Soubor.

Prohlížeč stáhne `Drawing1.dwg` do Vaší obvyklé složky stažených souborů a historie uvede, že byla uložena kopie jako DWG. Tento soubor se znovu otevře v CadCraftu i ve většině jiných programů CAD. (Pokud jste v tomto prohlížeči dříve zvolili v {{ui:Uložit jako}} DXF, nový výkres se uloží místo toho jako `Drawing1.dxf`.)

:::tip
Stiskem {{key:Enter}} na prázdném příkazovém řádku zopakujete poslední příkaz. Pokud chcete, stiskněte místo {{key:Enter}} klávesu {{key:Space}}: mimo text dělá totéž.
:::

## Otevření existujícího výkresu

1. Stiskněte {{key:Mod+O}} nebo klikněte na {{ui:Otevřít}}.
2. V okně výběru souboru zvolte soubor `.dwg` nebo `.dxf`.

Soubor DWG nebo DXF můžete také přetáhnout z {{pick:mac=Finderu|windows=Průzkumníku souborů|linux=správce souborů}} a pustit na plochu výkresu. Soubor se čte ve stránce; Váš počítač nikdy neopustí.

Co se zachovává a co se převádí, uvádí téma [Soubory: co se otevírá, co se ukládá](topic:files).

## Ukládání: co čekat

Ukládání v prohlížeči funguje jinak než ve stolním programu:

- {{ui:Uložit}} vždy **stáhne novou kopii**. Soubor, který jste otevřeli, nepřepíše. Pokud ve složce stažených souborů již soubor stejného názvu je, prohlížeč obvykle přidá číslo, například `Drawing1 (1).dwg`.
- {{ui:Uložit}} používá formát výkresu: DWG, pokud jste otevřeli DWG, DXF, pokud jste otevřeli DXF. Chcete-li zvolit, stiskněte {{key:Mod+Shift+S}} nebo klikněte na {{ui:Uložit jako}} a vyberte {{ui:DWG}} (a jeho verzi), {{ui:DXF R12}} nebo {{ui:DXF 2000}}. Viz [Ukládání](topic:files#saving).
- Soubor, který jste otevřeli, se nikdy nezmění.
- Otevření jiného souboru nebo {{ui:Nový}} ho umístí do vlastní karty nad výkresem, takže se nic z otevřeného nezavře. Pokud zavřete kartu výkresu nebo opustíte stránku s neuloženými změnami, CadCraft se nejdřív zeptá: {{ui:Nejdřív uložit kopii}}, zahodit, nebo {{ui:Zrušit}}. Při zavření karty prohlížeče se zobrazí místo toho vlastní otázka prohlížeče „Opustit web?“.

Ukládání do cloudu zatím není k dispozici. Kam Vaše soubory jdou a proč zůstávají soukromé, vysvětluje téma [Vaše soubory a soukromí](common:your-files).

## Kam dál

Stiskem {{key:F1}} nebo kliknutím na {{ui:Nápověda}} v liště nahoře otevřete tuto nápovědu kdykoli vedle výkresu. Funguje bez připojení.

- [Obrazovka CadCraftu](topic:workspace) pojmenovává každou lištu a panel.
- [Kreslení pomocí souřadnic](topic:draw-with-coordinates) je nejlepší první postup.
- [Klávesnice a myš](topic:keyboard) uvádí všechny klávesy.
- Napište `HELP` na příkazový řádek pro seznam všech příkazů, nebo si přečtěte [Přehled příkazů](topic:commands).

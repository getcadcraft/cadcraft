---
title: Vytvoření a vložení bloků
summary: Proměňte nakreslené dveře v blok, vložte jej znovu na jiných místech, v jiných měřítkách a natočeních a vyčistěte nepoužité bloky.
keywords: block, bmake, vložit, ddinsert, symbol, vyčistit, rozložit, předefinovat, základní bod, odkaz, počet, bcount, rozpis, csv, atributy, extrakce dat
from: 125a129d
---

## Co vytvoříte

Symbol dveří, který proměníte v blok `DOOR-900`, a pak jej třikrát umístíte: v nakreslené podobě, otočený o 90 stupňů a zrcadlově převrácený.

Blok je pojmenovaná skupina objektů. Nakreslíte jej jednou; každé místo, kde jej použijete, je **odkaz na blok**, který ukazuje zpět na jedinou definici. Sekce {{ui:Bloky}} v levém panelu uvádí bloky ve výkresu a to, kolikrát se každý používá.

## Nakreslete dveře

1. Napište `L` a stiskněte {{key:Enter}}.
2. Napište `0,0` a stiskněte {{key:Enter}}.
3. Napište `@0,900` a stiskněte {{key:Enter}}, pak ještě jednou {{key:Enter}}. Toto je křídlo dveří.
4. Napište `A` a stiskněte {{key:Enter}}.
5. Napište `C` a stiskněte {{key:Enter}}, aby se nejprve zadal střed.
6. Napište `0,0` a stiskněte {{key:Enter}} pro střed.
7. Napište `900,0` a stiskněte {{key:Enter}} pro počáteční bod.
8. Napište `0,900` a stiskněte {{key:Enter}} pro koncový bod. Toto je otevírací oblouk.
9. Klikněte na {{ui:Rozsah}}.

Oblouky jdou proti směru hodinových ručiček od počátečního bodu ke koncovému bodu.

## Vytvoření bloku

1. Napište `B` a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Vytvořit}} ve skupině Bloky.
2. U výzvy `Zadejte název bloku` napište `DOOR-900` a stiskněte {{key:Enter}}.
3. U výzvy `Zadejte vkládací základní bod` napište `0,0` a stiskněte {{key:Enter}}. Toto je závěs: bod, který dopadne na místo, kam blok umístíte.
4. U výzvy `Vyberte objekty` táhněte okno kolem křídla a oblouku.
5. Stiskněte {{key:Enter}}.

Historie uvádí `Blok "DOOR-900" vytvořen ze 2 objektů, které byly nahrazeny jedním odkazem na něj.` Panel {{ui:Bloky}} ukazuje u DOOR-900 `1×`: jeden odkaz. Klikněte na dveře: nyní se vyberou jako jeden objekt, „Odkaz na blok“.

:::tip
Objekty můžete nejprve vybrat a pak napsat `B`. CadCraft se stále zeptá na název a základní bod a pak použije váš výběr.
:::

## Vložení bloku

1. Napište `I` a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Vložit}} vedle DOOR-900 v panelu {{ui:Bloky}}.
2. U výzvy `Zadejte název bloku nebo [Soubor (F)/Knihovna (L)] <DOOR-900>` stiskněte {{key:Enter}}. (Tlačítko {{ui:Vložit}} v panelu doplní název za vás.)
3. Dveře se pohybují podle kříže. Klikněte, kam má závěs přijít.

Objeví se druhé dveře.

## Vložení otočeného nebo zvětšeného bloku

1. Napište `I` a stiskněte {{key:Enter}}, pak stiskněte {{key:Enter}} pro potvrzení názvu.
2. U výzvy `Zadejte vkládací bod [Měřítko (S)/Natočení (R)]` napište `R` a stiskněte {{key:Enter}}.
3. Napište `90` a stiskněte {{key:Enter}}. Náhled se otočí.
4. Klikněte pro umístění.

Místo toho napište `S`, chcete-li nastavit koeficient měřítka; platí pro oba směry. Měřítko i natočení si program pamatuje pro další vložení. Chcete-li dveře zrcadlově převrátit, vložte je a pak na odkaz použijte {{cmd:MIRROR}}.

## Změna umístěného bloku

Vyberte odkaz na blok. V pravém panelu můžete změnit jeho {{ui:X}}, {{ui:Y}}, {{ui:Měřítko X}}, {{ui:Měřítko Y}} a {{ui:Natočení}}. Záporné {{ui:Měřítko X}} blok převrátí.

## Předefinování bloku

Chcete-li změnit všechny dveře najednou, vytvořte blok se stejným názvem:

1. Nakreslete novou verzi dveří.
2. Napište `B`, stiskněte {{key:Enter}} a napište `DOOR-900`.
3. U výzvy `Blok "DOOR-900" už existuje. Předefinovat?` napište `Y` a stiskněte {{key:Enter}}.
4. Zadejte základní bod a vyberte nové objekty, jako předtím.

Každý odkaz na DOOR-900 nyní zobrazuje novou verzi.

Nebo upravte blok přímo: {{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit blok}} ({{cmd:BEDIT}}) jej otevře samostatně a {{ui:Uložit blok}} jej vrátí zpět. Viz [Atributy bloků](topic:attributes#change-a-block-the-block-editor).

## Počítání bloků a export rozpisu

Napište {{cmd:COUNT}} (nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Počítat bloky}}), pak:

- klikněte na jedny dveře: vyberou se všechny dveře v tomto prostoru a historie uvede, kolik jich je tady a v celém výkresu;
- nebo stiskněte {{key:Enter}}: historie vypíše každý blok s jeho počtem, nejčetnější jako první;
- nebo napište `E`, pak `C` pro CSV s počty (v modelu, na listech, celkem) nebo `A` pro jeden řádek na každý odkaz s jeho vrstvou, polohou, natočením a každou hodnotou atributu — rozpis, který lze otevřít v tabulkovém procesoru.

Nepojmenované bloky (kóty, tabulky) a odkazy uvnitř jiných bloků se nepočítají. Buňky, které začínají jako vzorec (`=`, `+`, `-`, `@`), dostanou úvodní `'`, aby je tabulkový procesor zobrazil jako text.

## Rozložení a vyčištění

- {{cmd:EXPLODE}} (`X`) promění vybraný odkaz na blok zpět v samostatné objekty. Definice zůstane.
- {{cmd:PURGE}} (`PU`) odstraní definice bloků, které už nikdo nepoužívá. Historie uvede, kolik jich odstranil.

## Názvy bloků

Název může mít až 255 znaků a může obsahovat mezery, ale nesmí začínat hvězdičkou a nesmí obsahovat `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ani zpětný apostrof. Při uložení do DXF R12 se názvy zapisují velkými písmeny, jiné znaky než písmena, číslice, `$`, `_` a `-` se změní na `_` a názvy se zkrátí na 31 znaků; historie uvede, kolik se jich změnilo. Krátké názvy velkými písmeny, číslicemi a pomlčkami, jako `DOOR-900`, zůstanou beze změny. Uložený DWG zachovává názvy tak, jak jste je napsali, včetně velkých a malých písmen; mění se jen znaky, které DWG nepovoluje (`|` se změní na `$0$`, ostatní na `_`).

## Zápis bloku nebo objektů do vlastního souboru

Napište `W` ({{cmd:WBLOCK}}) a zvolte **Objekty**, **Blok** nebo **Celý výkres**. Výsledkem je nový DWG nebo DXF, který obsahuje jen vrstvy, styly a bloky, které používá, a jeho počátkem je váš základní bod. U objektů je můžete ponechat, proměnit v blok nebo smazat z tohoto výkresu.

## Časté chyby

- **Blok skončil daleko od kříže.** Základní bod nebyl na objektech. Vytvořte blok znovu se základním bodem v rohu nebo na závěsu.
- **„Nic není vybráno; nic nevytvořeno.“** Stiskli jste {{key:Enter}} dříve, než jste něco vybrali.
- **„Tento výkres zatím nemá žádné bloky: F vloží jeden ze souboru, L z knihovny (nebo jej vytvořte příkazem BLOCK).“** Napište `F`, chcete-li načíst blok z jiného výkresu, nebo `L` pro knihovnu. Viz [Vložení ze souboru nebo z knihovny](topic:insert-from-file-and-library).
- **„Výřez nelze vložit do bloku.“** Rámečky výřezů z výběru vynechejte.

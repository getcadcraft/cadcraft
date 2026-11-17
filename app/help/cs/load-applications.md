---
title: Načtení aplikací (APPLOAD)
summary: Načtěte rutiny LISP a jejich soubory dialogů, uvolněte je, znovu je načtěte z historie a ty, které používáte, ponechte v sadě pro spuštění.
keywords: appload, ap, načíst aplikaci, lisp, lsp, dcl, rutina, sada pro spuštění, uvolnit, historie, přetažení, načíst, přizpůsobit, správa
from: 89e0ee95
---

## Co se naučíte

Jak načíst rutinu LISP (soubor `.lsp`), aby její příkazy fungovaly v CadCraftu, jak ji uvolnit a jak ji nechat načítat při každém spuštění CadCraftu.

## Načtení rutiny

1. Otevřete {{ui:Pohled}} › {{ui:Více}} › {{ui:Načíst aplikaci…}}, nebo napište {{cmd:APPLOAD}} (nebo `AP`) a stiskněte {{key:Enter}}.
2. Klikněte na {{ui:Načíst soubor…}} a vyberte jeden nebo více souborů `.lsp`. Rutina, která otevírá dialog, obvykle přichází se souborem `.dcl`: vyberte i ten.
3. Dialog říká, co každý soubor vytvořil, například „Načten soubor delblocks.lsp: 1 příkaz, DELBLOCKS.“
4. Klikněte na {{ui:Uzavřít (C)}}, napište příkaz rutiny a stiskněte {{key:Enter}}.

Soubory `.lsp` a `.dcl` můžete také přetáhnout na výkres nebo do dialogu Načíst aplikace: načtou se hned.

Soubor se zde čte ve vašem prohlížeči. Nic se nenahrává.

:::tip
Stiskněte {{key:Enter}} na prázdném řádku příkazů, aby se příkaz rutiny spustil znovu, stejně jako každý jiný příkaz. Mohou se k němu dostat i vaše zkratky příkazů: viz „Úprava zkratek příkazů“.
:::

## Uvolnění rutiny

V {{ui:Načíst aplikace}}, pod {{ui:Načtené aplikace}}, klikněte vedle souboru na {{ui:Uvolnit}}. Příkazy, které vytvořil, zmizí, dokud ho znovu nenačtete.

## Načtení rutiny při každém spuštění CadCraftu

1. Načtěte rutinu.
2. Pod {{ui:Načtené aplikace}} klikněte vedle ní na {{ui:Přidat do Sady pro spuštění}}.

Od této chvíle se načte sama, kdykoli se CadCraft spustí v tomto prohlížeči. Chcete-li to zastavit, klikněte vedle ní pod {{ui:Sada pro spuštění}} na {{ui:Odebrat}}.

Sada pro spuštění si v úložišti tohoto prohlížeče uchovává kopii každého souboru. Pokud rutinu změníte, načtěte nový soubor a přidejte ho znovu.

## Načtení acad.lsp a acaddoc.lsp ze složky podpory (Studio)

V CadCraft Studio vezme {{ui:Složka podpory}} v dialogu {{ui:Načíst aplikace}} složku na vašem počítači. Klikněte na {{ui:Zvolit složku…}}. Při spuštění CadCraftu přečte `acad.lsp` a potom `acaddoc.lsp` z této složky (bez ohledu na velikost písmen v názvu), načte je a potom načte sadu pro spuštění. `acaddoc.lsp` se znovu přečte pokaždé, když se otevře nová karta výkresu. Nic jiného ve složce se nečte a soubor větší než 2 MB se přeskočí se zprávou.

Pokud soubor definuje funkci s názvem `S::STARTUP`, po načtení souborů se jednou spustí (i po sadě pro spuštění). {{ui:Načíst nyní}} totéž udělá na vyžádání; {{ui:Vymazat}} zapomene složku.

V prohlížeči stránka složku uchovat nemůže, takže zde žádná složka podpory není: použijte výše uvedenou sadu pro spuštění. Zkompilované soubory `.fas` a `.vlx` a nativní programy zůstávají odmítnuty.

## Opětovné načtení souboru z historie

{{ui:Historie}} vypisuje soubory, které jste v tomto prohlížeči načetli, od nejnovějšího. Klikněte vedle jednoho na {{ui:Načíst}}, abyste ho načetli znovu, bez hledání na počítači.

## Soubory, které CadCraft nenačte

| Soubor | Co je to | Co dělat |
|---|---|---|
| `.fas`, `.vlx` | zkompilovaný nebo chráněný LISP | načtěte místo toho zdrojový `.lsp` |
| `.arx`, `.crx`, `.dbx` | nativní programy Windows | v CadCraftu je nelze spustit |
| `.dvb` | projekt VBA | v CadCraftu je nelze spustit |
| `.craft`, `.lua`, `.py` | skripty CraftScript | otevřete je v pracovním prostoru Skript v PartCraftu |

Dialog Načíst aplikace řekne, o který z těchto souborů jde, když ho vyberete.

## Zastavení rutiny

Stiskněte {{key:Esc}}. Na jedné z výzev rutiny Esc zruší rutinu tak, jak to rutina očekává (spustí se její úklid). Pokud je zaneprázdněna a na nic se neptá, Esc ji zastaví okamžitě a řekne to; vaše načtené rutiny zůstanou načtené.

:::note
Vše, co rutina ve výkresu změní, je jeden krok: jedním {{key:Mod+Z}} to vše vrátíte zpět.
:::

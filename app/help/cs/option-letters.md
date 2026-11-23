---
title: Dejte volbám příkazů vlastní písmena
summary: Odpovídejte na volby příkazů písmeny, která si zvolíte, v libovolném jazyce, z jednoho textového souboru, který můžete upravit, importovat a exportovat.
keywords: písmena voleb, optionkeys, optkeys, klíčové slovo volby, klíčové slovo, přemapování, mapování, přizpůsobit, vlastní písmena, polar, array, P, PO, jazyk, přeložit volby, krátký tvar, import, export, nejednoznačné
from: 7c8328c6
---

## Co se naučíte

Jak změnit písmena, která píšete, abyste odpověděli na volby příkazu. Například {{cmd:ARRAY}} se ptá `[Rectangular/POlar]` a bere `PO` pro Polární; můžete udělat, aby `P` nebo jiná písmena dělala totéž, případně ve svém jazyce.

## Jak se odpovídá na volby

Když příkaz ukáže volby v hranatých závorkách, velká písmena jsou ta, která se píšou: `POlar` je `PO`, `eXit` je `X`.

Můžete napsat i méně písmen. Pokud to, co napíšete, sedí jen na jednu z nabízených voleb, CadCraft ji vezme: u `[Rectangular/POlar]` je samotné `P` Polární. Sedí-li na dvě, příkazový řádek je pojmenuje a zeptá se znovu:

```
C could be COUnt, COLumns. Type more letters.
```

Čísla se nikdy neodhadují, takže napsaná vzdálenost nebo počet se vždy čte jako číslo.

## Přidání vlastních písmen

Každý příkaz si drží svá vestavěná písmena. Přidáváte svá navrch, takže váš seznam obsahuje jen to, co jste změnili.

1. Otevřete {{ui:Nastavení}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Písmena voleb}} a klikněte na {{ui:Upravit…}}. Nebo napište {{cmd:OPTIONKEYS}} a stiskněte {{key:Enter}}.
2. Pod {{ui:Příkaz}} vyberte příkaz, například `ARRAY`. Seznam obsahuje každý příkaz, který se ptá na volby, a začíná na příkazu, který jste použili naposledy.
3. Pod {{ui:Volba}} vyberte volbu. Každá ukazuje svá vestavěná písmena v závorkách, například `POlar (PO)`.
4. Do {{ui:Vaše písmena}} napište písmena, která chcete, například `P`, a klikněte na {{ui:Přidat}}.
5. Volba se teď objeví pod {{ui:Vaše písmena}} se svými vestavěnými písmeny i vašimi. Klikněte na {{ui:Uložit}}.

Spusťte {{cmd:ARRAY}}, vyberte objekt a stiskněte {{key:Enter}}. Výzva ukáže vaše písmena za volbou, `POlar (P)`, a `P` na ni odpoví.

Chcete-li jedno odebrat, klikněte na křížek na konci jeho řádku a potom na {{ui:Uložit}}. Volba se vrátí jen ke svým vestavěným písmenům.

## Písmena, která nelze použít

Editor odmítne písmena, která by skryla něco, co příkazový řádek už čte, a řekne proč:

- vestavěná písmena jiné volby téhož příkazu (`R` pro Polární v `ARRAY`, kde `R` je Obdélníkové);
- slovo přichycení k objektu o třech a více písmenech, například `END`, `MID` nebo `CEN`, a slova `ALL` a `LAST`;
- stejná písmena pro dvě různé volby jednoho příkazu.

Dokud je cokoli vypsáno červeně, {{ui:Uložit}} je vypnuté: opravte řádek nebo jej odeberte a tlačítko se znovu zapne. Vestavěná písmena výzvy mají vždy přednost před vašimi, takže váš seznam nikdy nezastaví vestavěnou odpověď. Písmena, která jsou náhodou názvem příkazu, jako `L` nebo `C`, jsou v pořádku: u výzvy volby příkazový řádek čte odpověď, ne spouští příkaz.

Volby uvedené pro příkaz pocházejí od příkazů, které sdílejí jeho výzvy, takže občas příkaz uvede volbu, kterou se ptá jen v některých případech.

## Jedna volba pro každý příkaz

Pod {{ui:Příkaz}} vyberte {{ui:Každý příkaz}}. Volby jsou pak všechny volby, které kterýkoli příkaz má, například eXit nebo Undo. Písmena, která tam přidáte, odpovídají na tuto volbu kdekoli ji příkaz nabízí. Písmena přidaná pro jeden příkaz mají přednost před těmito.

## Písmena ve vašem jazyce

Písmena mohou být z libovolné abecedy, takže můžete odpovídat na volby, aniž byste přepínali klávesnici: přidejte `З` pro Zavřít pod {{ui:Každý příkaz}}, nebo `П` pro POlar v `ARRAY`.

CadCraft se dodává jen s anglickými písmeny. Váš vlastní seznam je to, čím vy, vaše kancelář nebo lidé, kteří sdílejí váš jazyk, doplníte zbytek, a {{ui:Exportovat}} vytvoří soubor, který můžete předat dál.

## Upravit jako text

{{ui:Upravit jako text}} v editoru ukáže týž seznam jako řádky textu, jeden na volbu, což je také to, co ukládá {{ui:Exportovat}}:

```
ARRAY.PO,  P
*.X,       Q
```

Každý řádek je příkaz, tečka, vestavěná písmena volby, čárka a vaše písmena. Hvězdička místo příkazu znamená každý příkaz. Řádek, který začíná `;`, je poznámka.

## Co zůstává stejné

- Vestavěná písmena fungují vedle vašich.
- Rutiny a tlačítka panelu nástrojů dál používají vestavěná písmena, takže nic, co jste načetli, se nerozbije. Chcete-li napsat vestavěná písmena sami tam, kde by vaše písmena překážela, dejte před ně podtržítko: `_PO`.
- Zkratka příkazu je něco jiného: viz [Úprava zkratek příkazů](topic:command-aliases).

## Řádky, které CadCraft odmítne

Když upravujete jako text nebo importujete soubor, editor vypíše každý problém s číslem řádku:

- příkaz neexistuje (zkratka příkazu je v pořádku: `AR.PO` se čte jako `ARRAY.PO`);
- řádek není ve tvaru `PŘÍKAZ.VOLBA, PÍSMENA`;
- písmena mají mezeru nebo znaménko (jen písmena a číslice, nejvýš 16);
- stejná písmena odpovídají na dvě různé volby jednoho příkazu.

## Import a export

{{ui:Exportovat}} uloží vaše písmena jako textový soubor, abyste si je nechali nebo je dali někomu jinému. {{ui:Importovat…}} takový soubor načte. Obojí je v editoru i v {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Písmena voleb}}.

V Nastavení {{ui:Importovat…}} nahradí váš soubor tím, který vyberete. Soubor s řádkem, který koliduje, nebo který nejde použít, se nepřevezme; otevřete editor a importujte jej tam, abyste viděli řádky. V editoru jen naplní pole: nic se nezmění, dokud neklikněte na {{ui:Uložit}}.

## Znovu načtení nebo odebrání

Napište {{cmd:REINIT}} a stiskněte {{key:Enter}}, aby se váš soubor znovu použil. Chcete-li písmeno odebrat, smažte jeho řádek a klikněte na {{ui:Uložit}}.

## Vaše písmena následují váš účet

Když jste přihlášeni na getcadcraft.com, vaše písmena se uchovávají u vašeho účtu. Otevřete-li CadCraft v jiném prohlížeči nebo na jiném počítači se stejným účtem, přijdou sama; příkazový řádek říká `Option letters from your account`. Pokud jste je změnili na dvou místech, vyhraje nejnovější kopie a ta, kterou nahradila, se uchová jednou.

{{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Písmena voleb}} říká, kde jsou. Jste-li odhlášeni nebo offline, zůstanou v tomto prohlížeči a při dalším uložení, až budete přihlášeni, se odešlou na váš účet.

Související: [Úprava zkratek příkazů](topic:command-aliases) · [Nastavení CadCraftu](topic:settings) · [Příkazy](topic:commands)

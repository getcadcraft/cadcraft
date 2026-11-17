---
title: Jednotky při importu – soubor udává své jednotky, nebo se nejdřív zeptáte
summary: Když soubor, který přinášíte do výkresu, udává své jednotky, CadCraft je převede a řekne to. Když je neudává, CadCraft se zeptá dřív, než něco umístí, a odpověď si pro daný soubor zapamatuje.
keywords: jednotky, import, insert, xref, připojit, XATTACH, INSERT, OBJ, DWG, DXF, mračno bodů, položka knihovny, milimetry, metry, palce, stopy, měřítko, špatná velikost, příliš velký, příliš malý, 1000krát, zeptat se, zapamatováno, INSUNITS
from: 558f1293
---

## Co uděláte

Přineste soubor do výkresu a ujistěte se, že se načte ve správné velikosti.

## Postup

1. Soubor přineste obvyklým způsobem: `INSERT` › Soubor, `XATTACH`, `POINTCLOUDATTACH`, nebo {{ui:Soubory}} v panelu Knihovna.
2. Pokud soubor udává své jednotky, nic se nezeptá. Příkazový řádek řekne, jaké jednotky soubor udává, a měřítko, které se použije, když se liší od jednotek výkresu.
3. Pokud je neudává, dialog se zeptá na **Jednotky** souboru. Zvolte, co znamená jedna jednotka v souboru, a klikněte na {{ui:Použít tyto jednotky}}. Dokud neodpovíte, nic se neumístí.
4. {{ui:Zrušit}} (nebo {{key:Esc}}) nepřinese nic.

## Které soubory udávají své jednotky

- **DWG a DXF**: jednotky vložení výkresu (`$INSUNITS`). U souboru bez nich se ptáme.
- **Mračna bodů**: LAS a LAZ se souřadnicovým systémem, E57, PTX a PLY své jednotky udávají. U ostatních se ptáme.
- **OBJ**: jednotky nikdy neudává. Ptáme se vás.
- **glTF a GLB**: metry, podle pravidla samotného formátu.
- **Obrázky**: vlastní velikost nemají. `IMAGEATTACH` se zeptá na šířku a nabídne šířku, kterou jste tomuto souboru zadali dříve.
- **Skeny**: sken, který udává svou hustotu (dpi), se načte ve skutečné velikosti v jednotkách výkresu; `SCANATTACH` se přesto zeptá na šířku.
- **Doplněk Mračna bodů**: zeptá se, když sestavujete mračno, jehož soubor neudává jednotku, a čísla mračna označí jednotkou, kterou nese.

## Dobré vědět

- Otevření DWG nebo DXF jako samostatného výkresu se nic neptá: příkazový řádek řekne, jaké jednotky soubor udává, nebo že žádné neudává. {{ui:Vlastnosti}} nastaví jednotky výkresu.
- Když ani tento výkres nemá jednotky, soubor se nedá převést: umístí se číslo za číslem a příkazový řádek to řekne.
- Odpověď se pro daný soubor zapamatuje na tomto počítači ve všech aplikacích CadCraft. Až přijde příště, neptáme se a příkazový řádek řekne, že byly použity zapamatované jednotky.
- Chcete-li se znovu zeptat: paleta příkazů ({{key:Mod+K}}) › **Znovu se zeptat na jednotky importovaných souborů**.

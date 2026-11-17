---
title: Otočení pohledu a vlastní souřadnice (UCS)
summary: Otočte pohled o 90° nebo o libovolný úhel bez pohybu čehokoli ve výkresu a nastavte uživatelský souřadnicový systém (UCS), aby body, ortogonální režim, polární sledování, mřížka i nový text sledovaly osy budovy.
keywords: ucs, uživatelský souřadnicový systém, půdorys, otočení pohledu, natočení pohledu, ucs z, ucs 3point, ucs object, ucs world, pojmenovaný ucs, ucsfollow, turnleft, turnright, turnworld, šikmá budova, natočená mřížka
from: 6f152c65
---

## Co se naučíte

Jak se dívat na výkres otočený tak, aby budova nakreslená pod úhlem byla na obrazovce čitelná kolmo, a jak psát body podél jejích vlastních os. Při tom se nic ve výkresu nehýbe: objekty si ponechají své souřadnice, otočení není úprava a výkres se neoznačí jako změněný.

## Otočení pohledu o čtvrt otáčky

1. Klikněte na {{ui:Pohled}} › {{ui:Více}} › {{ui:Otočit pohled o 90° doleva}} nebo {{ui:Otočit pohled o 90° doprava}}.

Výkres se na obrazovce otočí kolem středu kreslicí plochy. Opakováním pokračujte v otáčení.

2. Klikněte na {{ui:Pohled}} › {{ui:Více}} › {{ui:Zpět na svět}}, aby se vrátil do vodorovné polohy.

Za nimi jsou příkazy {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} a {{cmd:TURNWORLD}}. Chcete-li jednomu přiřadit klávesu, přidejte do svých aliasů řádek jako `TL=TURNLEFT` pomocí {{cmd:ALIASEDIT}}.

## Zarovnání se šikmou budovou

1. Napište `UCS` a stiskněte {{key:Enter}}, pak `OB` (objekt) a {{key:Enter}}.
2. Klikněte na čáru stěny blízko konce, který má být počátkem.

UCS nyní začíná na tom konci, jeho osa X vede podél stěny a pohled se otočí, aby stěna byla na obrazovce vodorovně. Ikona os v levém dolním rohu ukazuje, kam osy UCS směřují.

3. Kreslete jako obvykle. Když je UCS nastaven:
   - `x,y` a `@dx,dy` se měří podél os UCS; `d<a` měří úhel od osy X UCS.
   - {{ui:Ortogonální}}, polární sledování a mřížka sledují osy UCS a stejně tak kurzor.
   - Nový text a nové odstavce běží podél osy X UCS; vodorovný a svislý směr {{cmd:DIMLINEAR}} je také sleduje.
   - Souřadnice ve stavovém řádku a z {{cmd:ID}} jsou souřadnice UCS.
4. Chcete-li zadat světový bod, když je UCS nastaven, napište před něj `*`: `*0,0` nebo `@*100,0`.
5. Napište `UCS`, {{key:Enter}}, pak znovu {{key:Enter}}, abyste se vrátili do světa.

## Jiné způsoby nastavení UCS

Na výzvě {{cmd:UCS}}:

| Napíšete | Co to udělá |
|---|---|
| bod | Nový počátek; pak klikněte na bod na nové ose X, nebo stiskněte {{key:Enter}} pro zachování úhlu |
| `Z` | Otočí UCS kolem jeho počátku o úhel, který napíšete (stupně, proti směru hodinových ručiček), nebo který zvolíte |
| `3` (3 body) | Počátek, bod na kladné ose X a bod na kladné straně osy Y |
| `OB` (objekt) | Z úsečky, oblouku, kružnice, úseku mnohočáry, textu, odkazu na blok, bodu nebo konstrukční přímky |
| `P` (předchozí) | UCS před tímto (posledních deset se uchová, dokud je výkres otevřen) |
| `W` (svět) | Zpět do světa |
| `NA` (pojmenovaný) | `S` uloží aktuální UCS pod názvem, `R` jeden obnoví, `D` jeden smaže, `?` je vypíše |

Každá změna otočí pohled tak, aby nová osa X UCS byla vodorovná. {{cmd:PLAN}} otočí pohled bez změny UCS: {{key:Enter}} pro aktuální UCS, `U` pro uložený, `W` pro svět.

## Dobré vědět

- Každá část rozděleného okna si ponechá vlastní otočení. UCS patří k výkresu.
- Listy pracují v souřadnicích papíru; UCS nastavte na kartě {{ui:Model}}, nebo uvnitř výřezu.
- Výběrová okna tažená v otočeném pohledu vybírají to, co na obrazovce leží uvnitř.
- Rutiny LISP dostávají body v UCS z `getpoint`, mohou číst `UCSORG`, `UCSXDIR`, `UCSYDIR` a `VIEWTWIST` a `trans` převádí mezi světem, UCS a zobrazením.

:::note
Uložený soubor si UCS a otočení pohledu ponechá v pozdějším sestavení; do té doby vydrží, dokud je výkres otevřen.
:::

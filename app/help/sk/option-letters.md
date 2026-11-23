---
title: Dajte voľbám príkazov vlastné písmená
summary: Odpovedajte na voľby príkazu písmenami, ktoré si zvolíte v akomkoľvek jazyku, z jedného textového súboru, ktorý môžete upravovať, importovať a exportovať.
keywords: písmená volieb, optionkeys, optkeys, kľúčové slovo voľby, kľúčové slovo, premapovať, mapovanie, prispôsobiť, vlastné písmená, polárne, pole, P, PO, jazyk, preložiť voľby, krátky tvar, import, export, nejednoznačné
from: 7c8328c6
---

## Čo sa naučíte

Ako zmeniť písmená, ktoré píšete na odpoveď na voľbu príkazu. Napríklad {{cmd:ARRAY}} sa pýta `[Rectangular/POlar]` a `PO` znamená Polárne; môžete nastaviť, aby `P` alebo iné písmená robili to isté, aj vo vlastnom jazyku.

## Ako sa odpovedá na voľby

Keď príkaz zobrazí voľby v hranatých zátvorkách, na zapísanie sa používajú veľké písmená: `POlar` je `PO`, `eXit` je `X`.

Môžete napísať aj menej písmen. Ak to, čo napíšete, sedí iba na jednu z ponúknutých volieb, CadCraft ju vyberie: pri `[Rectangular/POlar]` znamená samotné `P` Polárne. Ak sedí na dve, riadok príkazov ich pomenuje a opýta sa znova:

```
C could be COUnt, COLumns. Type more letters.
```

Čísla sa nikdy neodhadujú, takže zadaná vzdialenosť alebo počet sa vždy čítajú ako číslo.

## Pridanie vlastných písmen

Každý príkaz si ponecháva vstavané písmená. Vaše pridávate navrch, takže váš zoznam obsahuje len to, čo ste zmenili.

1. Otvorte {{ui:Nastavenia}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Písmená možností}} a kliknite na {{ui:Upraviť…}}. Alebo napíšte {{cmd:OPTIONKEYS}} a stlačte {{key:Enter}}.
2. Pod {{ui:Príkaz}} vyberte príkaz, napríklad `ARRAY`. Zoznam obsahuje každý príkaz, ktorý pýta voľby, a začína na príkaze, ktorý ste použili naposledy.
3. Pod {{ui:Možnosť}} vyberte voľbu. Každá zobrazuje svoje vstavané písmená v zátvorkách, napríklad `POlar (PO)`.
4. Do poľa {{ui:Vaše písmená}} napíšte požadované písmená, napríklad `P`, a kliknite na {{ui:Pridať}}.
5. Voľba sa teraz objaví pod {{ui:Vaše písmená}} so svojimi vstavanými písmenami aj vašimi. Kliknite na {{ui:Uložiť}}.

Spustite {{cmd:ARRAY}}, vyberte objekt a stlačte {{key:Enter}}. Výzva zobrazí vaše písmená za voľbou, `POlar (P)`, a `P` na ňu odpovie.

Ak chcete niektoré písmená odstrániť, kliknite na x na konci jeho riadka a potom na {{ui:Uložiť}}. Voľba sa vráti k iba vstavaným písmenám.

## Písmená, ktoré nemôžete použiť

Editor odmietne písmená, ktoré by skryli niečo, čo riadok príkazov už číta, a uvedie dôvod:

- vstavané písmená inej voľby toho istého príkazu (`R` pre Polárne v `ARRAY`, kde `R` je Rectangular);
- slovo uchopenia objektu z troch a viacerých písmen, napríklad `END`, `MID` alebo `CEN`, a slová `ALL` a `LAST`;
- tie isté písmená pre dve rôzne voľby jedného príkazu.

Kým je čokoľvek vypísané červenou, {{ui:Uložiť}} je vypnuté: opravte riadok alebo ho odstráňte a tlačidlo sa znova zapne. Vstavané písmená výzvy majú vždy prednosť pred vašimi, takže váš zoznam nikdy nezabráni vstavanej odpovedi. Písmená, ktoré sú názvom príkazu, ako `L` alebo `C`, sú v poriadku: pri výzve na voľbu riadok príkazov číta odpoveď, nie spúšťa príkaz.

Zoznam volieb pre príkaz vychádza z príkazov, ktoré zdieľajú jeho výzvy, takže sa niekedy objaví voľba, ktorú príkaz pýta iba v niektorých prípadoch.

## Jedna voľba pre každý príkaz

V {{ui:Príkaz}} vyberte {{ui:Každý príkaz}}. Voľby sú potom všetky voľby, ktoré má ktorýkoľvek príkaz, napríklad eXit alebo Undo. Písmená, ktoré tu pridáte, odpovedajú na túto voľbu všade, kde ju príkaz ponúka. Písmená pridané pre jeden príkaz majú prednosť pred nimi.

## Písmená vo vlastnom jazyku

Písmená môžu byť z ľubovoľnej abecedy, takže na odpovedanie na voľby nemusíte prepínať klávesnicu: pridajte `З` pre Close pod {{ui:Každý príkaz}}, alebo `П` pre POlar v `ARRAY`.

CadCraft obsahuje iba anglické písmená. Váš vlastný zoznam je spôsob, ako vy, vaša kancelária alebo ľudia, ktorí zdieľajú váš jazyk, nastavíte zvyšok, a {{ui:Exportovať}} vytvorí súbor, ktorý môžete odovzdať ďalej.

## Upraviť ako text

{{ui:Upraviť ako text}} v editore zobrazí ten istý zoznam ako riadky textu, jeden na voľbu; to je aj to, čo ukladá {{ui:Exportovať}}:

```
ARRAY.PO,  P
*.X,       Q
```

Každý riadok tvorí príkaz, bodka, vstavané písmená voľby, čiarka a vaše písmená. Hviezdička namiesto príkazu znamená každý príkaz. Riadok, ktorý začína `;`, je poznámka.

## Čo zostáva rovnaké

- Vstavané písmená fungujú ďalej vedľa vašich.
- Rutiny a tlačidlá panela nástrojov naďalej používajú vstavané písmená, takže nič, čo ste načítali, sa nerozbije. Ak chcete napísať vstavané písmená sami tam, kde by vaše prekážali, pridajte pred ne podčiarkovník: `_PO`.
- Krátky názov príkazu je niečo iné: pozrite [Úprava aliasov príkazov](topic:command-aliases).

## Riadky, ktoré CadCraft odmietne

Pri úprave ako text alebo pri importe súboru editor uvedie každý problém s číslom riadka:

- príkaz neexistuje (alias príkazu je v poriadku: `AR.PO` sa číta ako `ARRAY.PO`);
- riadok nemá tvar `PRÍKAZ.VOĽBA, PÍSMENÁ`;
- písmená obsahujú medzeru alebo znamienko (iba písmená a číslice, najviac 16);
- tie isté písmená odpovedajú na dve rôzne voľby jedného príkazu.

## Import a export

{{ui:Exportovať}} uloží vaše písmená ako textový súbor, aby ste ich mohli ponechať alebo dať niekomu inému. {{ui:Importovať…}} takýto súbor načíta. Obe možnosti sú v editore a v {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Písmená možností}}.

V nastaveniach {{ui:Importovať…}} nahradí váš súbor tým, ktorý vyberiete. Súbor s riadkom, ktorý koliduje alebo sa nedá použiť, sa neprevezme; otvorte editor a importujte ho tam, aby ste videli riadky. V editore iba vyplní pole: nič sa nezmení, kým neklepnete na {{ui:Uložiť}}.

## Znovu načítanie alebo odstránenie

Napíšte {{cmd:REINIT}} a stlačte {{key:Enter}}, aby sa váš súbor znova použil. Písmeno odstránite tak, že zmažete jeho riadok a kliknete na {{ui:Uložiť}}.

## Vaše písmená nasledujú váš účet

Ak ste prihlásení na getcadcraft.com, vaše písmená sa uchovávajú s vaším účtom. Keď otvoríte CadCraft v inom prehliadači alebo na inom počítači s tým istým účtom, prídu samé; riadok príkazov hlási `Option letters from your account`. Ak ste ich zmenili na dvoch miestach, vyhrá najnovšia kópia a nahradená sa zachová raz.

{{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Písmená možností}} ukazuje, v akom stave sú. Ak ste odhlásení alebo offline, zostávajú v tomto prehliadači a pri ďalšom uložení počas prihlásenia sa odošlú na váš účet.

Súvisiace: [Úprava aliasov príkazov](topic:command-aliases) · [Nastavenia CadCraftu](topic:settings) · [Príkazy](topic:commands)

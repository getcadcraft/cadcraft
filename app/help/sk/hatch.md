---
title: Šráfovanie a výplň plôch
summary: Vyplňte plochu plnou farbou alebo štandardným vzorom kliknutím vnútri nej alebo výberom uzavretých tvarov, nastavte mierku a uhol vzoru a šráfovanie môžete neskôr zmeniť.
keywords: šráfovanie, bhatch, výplň, plná výplň, vzor, ansi31, ansi37, tehla, zemina, sieť, rezové čiary, poché, ostrov, hranica, mierka, uhol
from: 14399174
---

## Čo vytvoríte

Rez múrom vyplnený vzorom ANSI31, stĺpec v ňom ponechaný prázdny a plná výplň v stĺpci.

## Šráfovanie kliknutím vnútri plochy

1. Nakreslite obdĺžnik (`REC`, `0,0`, `@2000,1200`) a kružnicu vnútri neho (`C`, `1000,600`, `300`). Kliknite na {{ui:Rozsah}}.
2. Kliknite na {{ui:Šráfovanie}} v skupine {{ui:Kreslenie}} alebo napíšte `H` a stlačte {{key:Enter}}. História ukazuje, ktorý vzor je aktuálny, napríklad `Aktuálne šráfovanie: ANSI31, mierka 1, uhol 0°`.
3. Napíšte `P` a stlačte {{key:Enter}}, napíšte `ANSI31` a stlačte {{key:Enter}}.
4. Napíšte `SC` a stlačte {{key:Enter}}, napíšte `20` a stlačte {{key:Enter}}. Veľkosti vzorov sú na papieri, takže výkres vykreslený v mierke 1:20 potrebuje mierku 20.
5. Pri výzve `Zadajte vnútorný bod` kliknite vnútri obdĺžnika, mimo kružnice. Šráfovanie sa zobrazí ako náhľad.
6. Stlačte {{key:Enter}}. Obdĺžnik je zašráfovaný; kružnica vnútri zostane prázdna, pretože je ostrov.

Pred stlačením {{key:Enter}} kliknite vnútri viacerých plôch, aby vzniklo jedno šráfovanie. `U` vráti späť poslednú plochu.

## Plná výplň

1. Napíšte `H` a stlačte {{key:Enter}}.
2. Napíšte `P`, stlačte {{key:Enter}}, napíšte `SOLID` a stlačte {{key:Enter}}.
3. Kliknite vnútri kružnice a potom stlačte {{key:Enter}}.

## Šráfovanie vybraných uzavretých tvarov

Namiesto klikania vnútri napíšte pri výzve `Zadajte vnútorný bod` `S` (Vybrať objekty) a vyberte uzavreté lomené čiary, kružnice alebo uzavreté elipsy, potom stlačte {{key:Enter}}. Tvary vnútri iných zostanú prázdne striedavo (vonkajší zašráfovaný, ďalší prázdny a tak ďalej).

## Vzory

Pri výzve na vzor napíšte `?` pre zoznam. Štandardné sú ANSI31 až ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH a SOLID. Vo výkrese v palcoch (alebo so stopami a palcami ako formátom dĺžky) sa používajú palcové veľkosti vzorov ako v AutoCAD; inak milimetrové.

{{ui:Uhol}} (`A`) otočí celý vzor: ANSI31 pri 90° má sklon opačným smerom.

**Súbory vzorov.** Pri výzve `Zadajte vnútorný bod` napíšte `F` (Súbor vzoru) a vyberte súbor `.pat`. Vzory v ňom sa pridajú do zoznamu; ak ich je viac, budete vyzvaní, aby ste vybrali, ktorý použiť. Súbor bez vzorov, ktoré CadCraft dokáže čítať, to oznámi a každý preskočený vzor sa spočíta. Veľkosti v súbore `.pat` nemajú vlastnú jednotku, takže sa čítajú v jednotkách výkresu. Boli vyskúšané iba súbory zapísané v bežnom formáte `.pat`; žiadny vytvorený iným programom.

## Zmena šráfovania

Vyberte ho (kliknite na jednu z jeho čiar). V {{ui:Vlastnosti}}: {{ui:Vzor}}, {{ui:Mierka vzoru}} a {{ui:Uhol vzoru}}. Šráfovania z otvorených výkresov zobrazujú svoj vzor, ak je to jeden zo štandardných; ostatné sa zobrazia ako svetlý tón ich farby.

## Časté chyby

- **"Okolo tohto bodu nie je uzavretá hranica."** Obrys má medzeru alebo jeho časť je mimo obrazovky: CadCraft skúma iba to, čo je na obrazovke. Uzavrite medzeru (priblížte rohy) alebo oddiaľte zobrazenie.
- **"Vzor je pri tejto mierke príliš hustý na kreslenie."** Čiary by boli bližšie, než dokáže výkres zobraziť. Použite väčšiu mierku, napríklad mierku vykreslenia (20 pre 1:20).
- **Vzor vyzerá veľmi veľký alebo veľmi malý.** Mierka je v jednotkách výkresu na jednotku vzoru; pozri krok 4 vyššie.
- **Posun obrysu šráfovanie nepresunie.** Šráfovanie nie je viazané na svoju hranicu. Presuňte obe alebo šráfujte znova.

## Šráfovanie, ktoré zostáva so svojou hranicou

Šráfovanie, ktoré vytvoríte príkazom `HATCH`, si pamätá, čo ho ohraničuje. Presuniete, otočíte alebo zmeníte mierku hranice a šráfovanie aj jeho vzor sa presunú spolu s ňou. Presunutím úchytu zmeníte tvar hranice a šráfovanie sa prepočíta. Ak presuniete samotné šráfovanie, presunie sa aj jeho hranica, ako výplň tvaru v kresliacom programe.

Prepojenie sa preruší a príkazový riadok to oznámi, ak hranica už nie je uzavretá alebo ak šráfovanie upravíte ručne. Samotné šráfovanie zostane. Počas šráfovania napíšte `AS`, aby vznikli šráfovania, ktoré stoja samostatne. Ak skopírujete šráfovanie aj s hranicou, kópia bude mať vlastné prepojenie.

`HATCHEDIT` (`HE`) mení vzor, mierku, uhol a počiatok šráfovania a prepája ho s hranicou alebo prepojenie ukončí. Prepojenie sa ukladá do súborov DWG a DXF 2000. Súbor DXF R12 nemá objekt šráfovania a prepojenia vytvorené v iných programoch sa nečítajú: na ne použite `HATCHEDIT` a Prepojiť.

Šráfovanie, ktoré už nemá hranicu (hranica bola zmazaná alebo súbor prišiel bez nej), ju môže dostať späť: `HATCHGENERATEBOUNDARY` (`HGB`) nakreslí uzavretú lomenú čiaru okolo každej slučky šráfovania a ak odpoviete Áno, prepojí šráfovanie s týmito čiarami.

## Prechodová výplň

`GRADIENT` (`GD`) vyplní plochu prechodom namiesto vzoru: rovnaké výbery ako `HATCH`, potom sa spýta na typ (lineárny, valcový, guľový, polguľový, zakrivený a každý z nich obrátený), jednu farbu s odtieňom alebo dve farby, uhol a či je prechod vycentrovaný. V `HATCH` to isté robí voľba `G`. `HATCHEDIT` `G` alebo {{ui:Vlastnosti}} v časti Prechod zmení prechod alebo premení ľubovoľné šráfovanie na prechod.

Prechod sa zobrazuje na obrazovke aj vo výtlačkoch. Ak uložíte ako DWG 2004 alebo novší, iné programy dostanú skutočné šráfovanie s prechodom. DXF 2000 a DWG 2000 prechod nemajú: tam ho CadCraft uchováva iba pre seba a iné programy uvidia plnú výplň prvou farbou.

## Orezanie šráfovania

`TRIM` orezáva šráfovanie ako ľubovoľný iný objekt. Kliknite na šráfovanie na strane hrany orezania, ktorú chcete odstrániť: hrany rozdelia zašráfovanú plochu a tento kus sa odstráni. V rýchlom režime je každý objekt hranou orezania; hrany vyberte najprv (voľba `T`), keď ich je veľa. Orezané šráfovanie už nie je prepojené so svojou hranicou, pretože ju už nevypĺňa.

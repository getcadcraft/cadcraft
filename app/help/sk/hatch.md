---
title: Šrafovanie a výplň plôch
summary: Vyplňte plochu plnou farbou alebo štandardným vzorom kliknutím dovnútra alebo výberom uzavretých tvarov, nastavte mierku a uhol vzoru a neskôr šrafovanie upravte.
keywords: šrafovanie, bhatch, výplň, plná výplň, vzor, ansi31, ansi37, tehla, zemina, sieť, čiary rezu, pošé, ostrov, hranica, mierka, uhol
from: e7feb344
---

## Čo vytvoríte

Rez múrom vyplnený vzorom ANSI31, stĺpik v ňom ponechaný prázdny a plná výplň v stĺpiku.

## Šrafovanie kliknutím dovnútra plochy

1. Nakreslite obdĺžnik (`REC`, `0,0`, `@2000,1200`) a kružnicu vnútri (`C`, `1000,600`, `300`). Kliknite na {{ui:Rozsah}}.
2. Kliknite na {{ui:Šrafovanie}} v skupine {{ui:Kreslenie}}, alebo napíšte `H` a stlačte {{key:Enter}}. História povie, ktorý vzor je aktuálny, napríklad `Current hatch: ANSI31, scale 1, angle 0°`.
3. Napíšte `P` a stlačte {{key:Enter}}, napíšte `ANSI31` a stlačte {{key:Enter}}.
4. Napíšte `SC` a stlačte {{key:Enter}}, napíšte `20` a stlačte {{key:Enter}}. Veľkosti vzorov sú na papieri, takže výkres vytlačený v 1:20 chce mierku 20.
5. Pri `Pick internal point` kliknite vnútri obdĺžnika, mimo kružnice. Šrafovanie sa zobrazí ako náhľad.
6. Stlačte {{key:Enter}}. Obdĺžnik je šrafovaný; kružnica vnútri zostane prázdna, pretože je ostrovom.

Kliknite vnútri viacerých plôch pred stlačením {{key:Enter}}, aby sa z nich stalo jedno šrafovanie. `U` vezme späť poslednú plochu.

## Plná výplň

1. Napíšte `H` a stlačte {{key:Enter}}.
2. Napíšte `P`, stlačte {{key:Enter}}, napíšte `SOLID` a stlačte {{key:Enter}}.
3. Kliknite vnútri kružnice a potom stlačte {{key:Enter}}.

## Šrafovanie uzavretých tvarov, ktoré vyberiete

Namiesto klikania dovnútra napíšte pri `Pick internal point` `S` (Vybrať objekty) a vyberte uzavreté lomené čiary, kružnice alebo uzavreté elipsy, potom stlačte {{key:Enter}}. Tvary vnútri iných zostanú prázdne postupne (vonkajší šrafovaný, ďalší vnútri prázdny, a tak ďalej).

## Vzory

Na otázku vzoru napíšte `?` pre zoznam. Štandardné sú ANSI31 až ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS a EARTH, a SOLID. Vo výkrese v palcoch (alebo so stopami a palcami ako formátom dĺžky) sa používajú palcové veľkosti vzorov, ako v AutoCAD; inak milimetrové.

{{ui:Uhol}} (`A`) otočí celý vzor: ANSI31 pri 90° sa sklání opačným smerom.

**Súbory vzorov.** Pri `Pick internal point` napíšte `F` (Súbor vzoru) a vyberte súbor `.pat`. Vzory v ňom sa pridajú do zoznamu; keď je ich viac, spýta sa vás, ktorý použiť. Súbor bez vzoru, ktorý CadCraft dokáže prečítať, to oznámi a každý preskočený vzor sa spočíta. Veľkosti v súbore `.pat` nemajú vlastnú jednotku, takže sa čítajú v jednotkách výkresu. Boli vyskúšané iba súbory zapísané v obvyklom formáte `.pat`; žiadny vytvorený iným programom.

## Zmena šrafovania

Vyberte ho (kliknite na jednu z jeho čiar). Vo {{ui:Vlastnostiach}}: {{ui:Vzor}}, {{ui:Mierka vzoru}} a {{ui:Uhol vzoru}}. Šrafovania z otvorených výkresov ukazujú svoj vzor, keď je jedným zo štandardných; ostatné sa zobrazujú ako svetlý tón ich farby.

## Časté chyby

- **„No closed boundary round that point."** V obryse je medzera alebo jeho časť je mimo obrazovky: CadCraft sa pozerá iba na to, čo je na obrazovke. Uzavrite medzeru (priblížte rohy) alebo oddiaľte.
- **„The pattern is too dense to draw at this scale."** Čiary by boli bližšie, než ich výkres dokáže zobraziť. Použite väčšiu mierku: skúste mierku výstupu (20 pre 1:20).
- **Vzor vyzerá obrovský alebo drobný.** Mierka je v jednotkách výkresu na jednotku vzoru; pozrite krok 4 vyššie.
- **Šrafovanie prestalo nasledovať svoj obrys.** Šrafovanie vytvorené {{cmd:HATCH}} zostáva s objektmi, z ktorých vzniklo: posuniete, otočíte alebo zmeníte mierku obrysu a šrafovanie ide s ním; prekreslíte ho úchytom a šrafovanie sa vypočíta znova. Väzba sa skončí, keď sa obrys už neuzavrie, keď šrafovanie prekreslíte ručne, alebo keď ho orežete, a riadok príkazov to povie. Nič sa nestratí: vyšrafujte plochu znova, aby sa väzba vytvorila nanovo.

## Šrafovanie, ktoré zostáva so svojou hranicou

Šrafovanie, ktoré vytvoríte cez `HATCH`, si pamätá, čo ho ohraničuje. Posuniete, otočíte alebo zmeníte mierku hranice a šrafovanie aj jeho vzor idú s ňou. Ťahom úchytu prekreslíte hranicu a šrafovanie sa vypočíta znova. Posuniete samotné šrafovanie a jeho hranica príde tiež, ako tvar s výplňou v kresliacom programe.

Väzba sa skončí a riadok príkazov to povie, ak hranica sa už neuzavrie alebo prekreslíte šrafovanie ručne. Samotné šrafovanie zostane. Napíšte `AS` počas šrafovania, aby ste vytvorili samostatné šrafovania. Skopírovanie šrafovania s jeho hranicou dá kópii vlastnú väzbu.

`HATCHEDIT` (`HE`) mení vzor, mierku, uhol a začiatok šrafovania a prepojí ho s hranicou alebo ukončí väzbu. Väzba sa ukladá v súboroch DWG a DXF 2000. Súbor DXF R12 nemá objekt šrafovania a väzby urobené v iných programoch sa nečítajú: na ne použite `HATCHEDIT` a Prepojiť.

Šrafovanie, ktoré už nemá hranicu (hranica bola zmazaná alebo súbor prišiel bez nej), ju môže dostať späť: `HATCHGENERATEBOUNDARY` (`HGB`) nakreslí uzavretú lomenú čiaru okolo každej slučky šrafovania a ak odpoviete Áno, prepojí šrafovanie s nimi.

## Prechodová výplň

`GRADIENT` (`GD`) vyplní plochu prechodom namiesto vzoru: rovnaké výbery ako `HATCH`, potom pýta typ (lineárny, valcový, guľový, polguľový, zakrivený a každý z nich obrátený), jednu farbu s odtieňom alebo dve farby, uhol a či je stred vycentrovaný. V `HATCH` to isté robí voľba `G`. `HATCHEDIT` `G` alebo {{ui:Vlastnosti}} pod {{ui:Prechod}} zmení prechod alebo ľubovoľné šrafovanie na prechod.

Prechod sa zobrazuje na obrazovke a vo výstupoch. Uložte ako DWG 2004 alebo novší a ostatné programy dostanú skutočné šrafovanie prechodom. DXF 2000 a DWG 2000 nemajú prechod: tam ho CadCraft zachová pre seba a ostatné programy vidia plnú výplň prvou farbou.

## Orezanie šrafovania

`TRIM` reže šrafovanie ako ľubovoľný iný objekt. Kliknite na šrafovanie na strane hrany orezania, ktorú chcete odstrániť: hrany rozdelia vyšrafovanú plochu a ten kus sa odstráni. V rýchlom režime je každý objekt hranou orezania; pri mnohých hranách ich najprv vyberte (voľba `T`). Orezané šrafovanie už nie je prepojené so svojou hranicou, lebo ju už nevypĺňa.

---
title: Šrafy a výplně ploch
summary: Vyplňte plochu plnou barvou nebo standardním vzorem kliknutím dovnitř nebo výběrem uzavřených tvarů, nastavte měřítko a úhel vzoru a šrafu můžete později změnit.
keywords: šrafa, bhatch, výplň, plná výplň, vzor, ansi31, ansi37, brick, earth, net, šrafy řezu, plocha řezu, ostrov, hranice, měřítko, úhel
from: e7feb344
---

## Co vytvoříte

Řez stěnou vyplněný vzorem ANSI31, sloupek v něm ponechaný prázdný a plná výplň ve sloupku.

## Šrafa kliknutím dovnitř plochy

1. Nakreslete obdélník (`REC`, `0,0`, `@2000,1200`) a kružnici uvnitř něj (`C`, `1000,600`, `300`). Klikněte na {{ui:Rozsah}}.
2. Klikněte na {{ui:Šrafa}} ve skupině {{ui:Kreslení}}, nebo napište `H` a stiskněte {{key:Enter}}. Historie ukáže, který vzor je aktuální, například `Current hatch: ANSI31, scale 1, angle 0°`.
3. Napište `P` a stiskněte {{key:Enter}}, napište `ANSI31` a stiskněte {{key:Enter}}.
4. Napište `SC` a stiskněte {{key:Enter}}, napište `20` a stiskněte {{key:Enter}}. Velikosti vzoru jsou na papíru, takže výkres vykreslený v měřítku 1:20 potřebuje měřítko 20.
5. U výzvy `Pick internal point` klikněte uvnitř obdélníku, mimo kružnici. Šrafa se ukáže jako náhled.
6. Stiskněte {{key:Enter}}. Obdélník je vyšrafován; kružnice uvnitř zůstane prázdná, protože je ostrovem.

Před stisknutím {{key:Enter}} můžete kliknout uvnitř několika ploch, aby vznikla jedna šrafa. `U` vrátí poslední plochu zpět.

## Plná výplň

1. Napište `H` a stiskněte {{key:Enter}}.
2. Napište `P`, stiskněte {{key:Enter}}, napište `SOLID` a stiskněte {{key:Enter}}.
3. Klikněte uvnitř kružnice a potom stiskněte {{key:Enter}}.

## Šrafa vybraných uzavřených tvarů

Místo klikání dovnitř napište u výzvy `Pick internal point` `S` (Vybrat objekty), vyberte uzavřené mnohočáry, kružnice nebo uzavřené elipsy a stiskněte {{key:Enter}}. Tvary uvnitř jiných zůstanou postupně prázdné (vnější se vyšrafuje, další uvnitř zůstane prázdný a tak dále).

## Vzory

U otázky na vzor napište `?` pro seznam. Standardní vzory jsou ANSI31 až ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS a EARTH, a dále SOLID. Ve výkresu v palcích (nebo se stopami a palci jako formátem délek) se používají palcové velikosti vzorů, jako v AutoCADu; jinak milimetrové.

{{ui:Úhel}} (`A`) otočí celý vzor: ANSI31 pod úhlem 90° se sklání opačným směrem.

**Soubory vzorů.** U výzvy `Pick internal point` napište `F` (Soubor vzoru) a vyberte soubor `.pat`. Vzory z něj se připojí k seznamu; je-li jich více, zeptá se, který použít. Soubor, z něhož CadCraft nedokáže přečíst žádný vzor, to oznámí a každý přeskočený vzor se spočítá. Velikosti v souboru `.pat` nemají vlastní jednotku, takže se čtou v jednotkách výkresu. Vyzkoušeny byly jen soubory psané v obvyklém formátu `.pat`; žádný vytvořený jiným programem.

## Změna šrafy

Vyberte ji (klikněte na jednu z jejích čar). Ve {{ui:Vlastnosti}}: {{ui:Vzor}}, {{ui:Měřítko vzoru}} a {{ui:Úhel vzoru}}. Šrafy z otevřených výkresů ukazují svůj vzor, je-li to jeden ze standardních; ostatní se zobrazí jako světlý tón jejich barvy.

## Časté chyby

- **„No closed boundary round that point.“** V obrysu je mezera nebo jeho část je mimo obrazovku: CadCraft se dívá jen na to, co je na obrazovce. Uzavřete mezeru (přiblížením k rohům), nebo oddalte.
- **„The pattern is too dense to draw at this scale.“** Čáry by byly blíž, než výkres dokáže zobrazit. Použijte větší měřítko: zkuste měřítko tisku (20 pro 1:20).
- **Vzor vypadá obrovský nebo drobný.** Měřítko je v jednotkách výkresu na jednotku vzoru; viz krok 4 výše.
- **Šrafa přestala sledovat svůj obrys.** Šrafa vytvořená příkazem {{cmd:HATCH}} zůstává spojena s objekty, z nichž vznikla: přesunete-li, otočíte-li nebo zvětšíte-li obrys, jde šrafa s ním; tvar upravíte úchytem a šrafa se přepočítá. Spojení končí, když se obrys už neuzavře, když šrafu sami ručně přetvoříte, nebo když ji oříznete, a příkazový řádek to řekne. Nic se neztratí: znovu vyšrafujte plochu, a vazba vznikne znovu.

## Šrafa, která zůstává spojena se svou hranicí

Šrafa vytvořená příkazem `HATCH` si pamatuje, co ji ohraničuje. Přesunete-li, otočíte-li nebo zvětšíte-li hranici, jde šrafa i její vzor s ní. Úchytem přetvoříte-li hranici, šrafa se přepočítá. Přesunete-li samotnou šrafu, přijde s ní i její hranice, jako vyplněný tvar v kreslicím programu.

Spojení skončí a příkazový řádek to řekne, když hranice přestane být uzavřená nebo když šrafu ručně přetvoříte. Samotná šrafa zůstane. Při šrafování napište `AS`, aby vznikaly samostatné šrafy. Zkopírujete-li šrafu i s hranicí, kopie má vlastní spojení.

`HATCHEDIT` (`HE`) změní vzor, měřítko, úhel a počátek šrafy a spojí ji s hranicí, nebo spojení ukončí. Spojení se ukládá v souborech DWG a DXF 2000. Soubor DXF R12 nemá objekt šrafy a spojení vytvořená v jiných programech se nečtou: u nich použijte `HATCHEDIT` a Propojit.

Šrafa, která už nemá hranici (hranice byla smazána nebo soubor přišel bez ní), ji může získat zpět: `HATCHGENERATEBOUNDARY` (`HGB`) nakreslí uzavřenou mnohočáru kolem každé smyčky šrafy a, odpovíte-li Ano, šrafu s nimi spojí.

## Přechodová výplň

`GRADIENT` (`GD`) vyplní plochu přechodem místo vzoru: stejné výběry jako `HATCH`, a potom se zeptá na typ (lineární, válcový, kulový, polokulový, zakřivený a každý z nich obrácený), jednu barvu s odstínem nebo dvě barvy, úhel a zda je střed vycentrovaný. V příkazu `HATCH` dělá totéž volba `G`. `HATCHEDIT` `G` nebo {{ui:Vlastnosti}} v části Přechod změní přechod nebo jakoukoli šrafu přemění na přechod.

Přechod se zobrazí na obrazovce i ve vykreslení. Uložíte-li jako DWG 2004 nebo novější, dostanou jiné programy skutečnou šrafu s přechodem. DXF 2000 a DWG 2000 přechod nemají: CadCraft jej uchová pro sebe a ostatní programy vidí plnou výplň první barvou.

## Oříznutí šrafy

`TRIM` ořeže šrafu jako každý jiný objekt. Klikněte na šrafu na té straně řezné hrany, kterou chcete odstranit: hrany rozdělí vyšrafovanou plochu a tento kus se odstraní. V režimu Rychlý je každý objekt řeznou hranou; když jich je mnoho, nejprve zvolte hrany (volba `T`). Oříznutá šrafa už není spojena se svou hranicí, protože ji už nevyplňuje.

---
title: Šrafování a výplň ploch
summary: Vyplňte plochu plnou barvou nebo standardním vzorem kliknutím dovnitř nebo výběrem uzavřených tvarů, nastavte měřítko a úhel vzoru a šrafu můžete později změnit.
keywords: šrafa, bhatch, výplň, plná výplň, vzor, ansi31, ansi37, cihla, zemina, síť, čáry řezu, poché, ostrov, hranice, měřítko, úhel
from: 14399174
---

## Co vytvoříte

Řez stěnou vyplněný vzorem ANSI31, sloup v něm ponechaný prázdný a plná výplň ve sloupu.

## Šrafa kliknutím dovnitř plochy

1. Nakreslete obdélník (`REC`, `0,0`, `@2000,1200`) a kružnici uvnitř něj (`C`, `1000,600`, `300`). Klikněte na {{ui:Rozsah}}.
2. Klikněte na {{ui:Šrafa}} ve skupině {{ui:Kreslení}}, nebo napište `H` a stiskněte {{key:Enter}}. Historie příkazů ukazuje, který vzor je aktuální, například `Aktuální šrafa: ANSI31, měřítko 1, úhel 0°`.
3. Napište `P` a stiskněte {{key:Enter}}, napište `ANSI31` a stiskněte {{key:Enter}}.
4. Napište `SC` a stiskněte {{key:Enter}}, napište `20` a stiskněte {{key:Enter}}. Velikosti vzorů se udávají na papíře, takže výkres vykreslený v měřítku 1:20 potřebuje měřítko 20.
5. U výzvy `Zadejte vnitřní bod` klikněte dovnitř obdélníku, mimo kružnici. Šrafa se zobrazí jako náhled.
6. Stiskněte {{key:Enter}}. Obdélník je vyšrafován; kružnice uvnitř zůstane prázdná, protože je to ostrov.

Před stisknutím {{key:Enter}} klikněte dovnitř několika ploch, aby vznikla jedna šrafa. `U` (Zpět) odebere poslední plochu.

## Plná výplň

1. Napište `H` a stiskněte {{key:Enter}}.
2. Napište `P`, stiskněte {{key:Enter}}, napište `SOLID` a stiskněte {{key:Enter}}.
3. Klikněte dovnitř kružnice a potom stiskněte {{key:Enter}}.

## Šrafa vybraných uzavřených tvarů

Místo klikání dovnitř napište u výzvy `Zadejte vnitřní bod` `S` (Vybrat objekty) a vyberte uzavřené mnohočáry, kružnice nebo uzavřené elipsy, potom stiskněte {{key:Enter}}. Tvary uvnitř jiných zůstanou střídavě prázdné (vnější se vyšrafuje, další zůstane prázdný a tak dále).

## Vzory

U výzvy pro vzor napište `?` a zobrazí se seznam. Standardní vzory jsou ANSI31 až ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH a SOLID. U výkresu v palcích (nebo se stopami a palci jako délkovým formátem) se použijí palcové velikosti vzorů, jako v AutoCADu; jinak milimetrové.

{{ui:Úhel}} (`A`) otočí celý vzor: ANSI31 pod úhlem 90° má sklon opačným směrem.

**Soubory vzorů.** U výzvy `Zadejte vnitřní bod` napište `F` (Soubor vzoru) a vyberte soubor `.pat`. Vzory v něm se připojí k seznamu; je-li jich více, zeptá se vás program, který použít. Soubor bez vzoru, který CadCraft umí načíst, to oznámí a každý přeskočený vzor se započítá. Velikosti v souboru `.pat` nemají vlastní jednotku, takže se čtou v jednotkách výkresu. Vyzkoušeny byly pouze soubory ve běžném formátu `.pat`; žádný soubor vytvořený jiným programem vyzkoušen nebyl.

## Změna šrafy

Vyberte ji (klikněte na některou z jejích čar). V {{ui:Vlastnosti}}: {{ui:Vzor}}, {{ui:Měřítko vzoru}} a {{ui:Úhel vzoru}}. Šrafy z otevřených výkresů zobrazí svůj vzor, pokud je to některý ze standardních; ostatní se zobrazí jako světlý tón jejich barvy.

## Časté chyby

- **„Kolem tohoto bodu není uzavřená hranice.“** V obrysu je mezera nebo jeho část je mimo obrazovku: CadCraft kontroluje jen to, co je na obrazovce. Uzavřete mezeru (přibližte rohy) nebo oddalte pohled.
- **„Vzor je při tomto měřítku příliš hustý na vykreslení.“** Čáry by byly blíž, než výkres dokáže zobrazit. Použijte větší měřítko, třeba měřítko vykreslení (20 pro 1:20).
- **Vzor vypadá obrovsky nebo drobně.** Měřítko je v jednotkách výkresu na jednotku vzoru; viz krok 4 výše.
- **Posunutí obrysu šrafu nepřesune.** Šrafa není svázána se svou hranicí. Přesuňte obojí, nebo šrafu vytvořte znovu.

## Šrafa, která zůstává spojena se svou hranicí

Šrafa vytvořená příkazem `HATCH` si pamatuje, čím je ohraničena. Posunete-li, otočíte nebo zvětšíte hranici, šrafa i její vzor se pohnou spolu s ní. Tažením úchytu změníte tvar hranice a šrafa se přepočítá. Přesunete-li šrafu samostatně, přesune se i její hranice, podobně jako vyplněný tvar v kreslicím programu.

Vazba zanikne a příkazový řádek to oznámí, pokud hranice již není uzavřená nebo šrafu upravíte ručně. Šrafa sama zůstane. Při šrafování napište `AS` a vytvoříte šrafy, které jsou samostatné. Zkopírujete-li šrafu spolu s hranicí, kopie bude mít vlastní vazbu.

`HATCHEDIT` (`HE`) změní vzor, měřítko, úhel a počátek šrafy a propojí ji s hranicí nebo vazbu zruší. Vazba se ukládá do souborů DWG a DXF 2000. Soubor DXF R12 objekt šrafy neobsahuje a vazby vytvořené v jiných programech se nenačítají: pro ně použijte `HATCHEDIT` a volbu Propojit (L).

Šrafa, která už nemá hranici (hranice byla smazána nebo soubor přišel bez ní), ji může získat zpět: `HATCHGENERATEBOUNDARY` (`HGB`) nakreslí uzavřenou mnohočáru kolem každé smyčky šrafy a pokud odpovíte Ano, šrafu s nimi propojí.

## Přechodová výplň

`GRADIENT` (`GD`) vyplní plochu přechodem místo vzoru. Výběr ploch je stejný jako u `HATCH`; nejprve se zeptá na typ (lineární, válcový, kulový, polokulový, zakřivený a každý z nich obrácený), na jednu barvu s odstínem nebo na dvě barvy, na úhel a na to, zda bude přechod vystředěný. Volba `G` v příkazu `HATCH` dělá totéž. `HATCHEDIT` `G` nebo {{ui:Vlastnosti}} v části Přechod změní přechod nebo jakoukoli šrafu převedou na přechod.

Přechod se zobrazuje na obrazovce i ve výkresech. Uložíte-li soubor jako DWG 2004 nebo novější, ostatní programy uvidí skutečnou šrafu s přechodem. Formáty DXF 2000 a DWG 2000 přechod neobsahují: CadCraft si ho uchová jen pro sebe a ostatní programy zobrazí plnou výplň první barvou.

## Oříznutí šrafy

`TRIM` ořeže šrafu jako každý jiný objekt. Klikněte na šrafu na té straně řezné hrany, kterou chcete odstranit: hrany rozdělí vyšrafovanou plochu a tato část se odstraní. V rychlém režimu je každý objekt řeznou hranou; je-li jich mnoho, nejprve vyberte hrany volbou `T`. Oříznutá šrafa už není spojena se svou hranicí, protože už nevyplňuje její plochu.

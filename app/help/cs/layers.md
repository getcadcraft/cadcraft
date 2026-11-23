---
title: Uspořádání výkresu do vrstev
summary: Vytvořte vrstvy pro stěny, dveře a poznámky, nastavte barvy, nastavte aktuální vrstvu a vypínejte, zamrazujte či zamykejte vrstvy nebo je vyřaďte z vykreslení.
keywords: vrstva, vrstvy, la, aktuální vrstva, zamrazit, odmrazit, zamknout, vypnout, zapnout, vykreslit, nevykreslovat, barva, vlastnosti vrstvy, layiso, layuniso, izolovat, layoff, layfrz, laymcur, layon, laythw, přejmenovat, laymrg, sloučit, laydel, smazat vrstvu
from: ba9f0617
---

## Co vytvoříte

Tři vrstvy, Stěny, Dveře a Poznámky, každou se svou barvou, s objekty nakreslenými na každé z nich a přesunutými mezi nimi.

## Panel Vrstvy

Vrstvy jsou v panelu vlevo, pod {{ui:Vrstvy}}. Každý řádek ukazuje zleva doprava:

- tečku: vyplněnou pro **aktuální** vrstvu, na niž jdou nové objekty;
- barevný vzorek;
- název vrstvy;
- čtyři tlačítka: zapnutí/vypnutí (oko), zamrazení (vločka), zámek (visací zámek) a vykreslení (tiskárna).

Každý výkres má vrstvu nazvanou `0`. Napsáním `LA` a stisknutím {{key:Enter}} přeskočíte do panelu.

## Vytvoření vrstev

1. Klikněte na {{ui:Nová vrstva}} nad seznamem. Otevře se pole pro název.
2. Napište `Walls` (nebo `Stěny`) a stiskněte {{key:Enter}} (nebo klikněte na {{ui:Přidat}}).

Stavový řádek hlásí „Added layer Walls and made it current.“ Nová vrstva dostane barvu 7 (černou na světlém motivu, bílou na tmavém).

3. Znovu klikněte na {{ui:Nová vrstva}}, napište `Doors` a stiskněte {{key:Enter}}.
4. Znovu klikněte na {{ui:Nová vrstva}}, napište `Notes` a stiskněte {{key:Enter}}.

Nyní je aktuální Notes.

## Barva každé vrstvy

1. Klikněte na barevný vzorek na řádku Walls. Otevře se barevný výběr vašeho systému.
2. Vyberte barvu a potvrďte.

Vzorek a vše na Walls, co má barvu {{ui:Podle vrstvy}}, se změní.

:::note
Vybraná barva, která odpovídá jedné z 255 standardních barev CAD, se uloží jako toto číslo. Každá jiná barva se v CadCraftu uchová přesně, ale v souboru DWG nebo DXF se uloží jako nejbližší standardní barva.
:::

## Kreslení na vrstvu

1. Klikněte na název **Walls** v seznamu. Jeho tečka se vyplní a stavový řádek hlásí „Current layer: Walls“.
2. Nakreslete obdélník (`REC`). Půjde na Walls.
3. Klikněte na **Doors** a nakreslete oblouk (`A`). Půjde na Doors.

Aktuální vrstvu můžete zvolit také v {{ui:Aktuální nastavení}} vpravo (nic není vybráno), pod {{ui:Vrstva}}.

## Přesun objektů na jinou vrstvu

1. Vyberte objekty.
2. V pravém panelu zvolte novou vrstvu v {{ui:Vrstva}}.

Přesunou se na tuto vrstvu a převezmou její barvu, pokud je jejich barva {{ui:Podle vrstvy}}.

## Vypnutí, zamrazení, zamknutí a vykreslení

| Tlačítko | Co dělá |
|---|---|
| Zapnutí/vypnutí (oko) | Skryje objekty vrstvy. Nelze je vidět, vybrat ani na ně přichytit. |
| Zamrazení (vločka) | V CadCraftu stejný účinek jako vypnutí. Zachováno odděleně, protože jiné programy s nimi nakládají jinak, a nastavení se ukládá. |
| Zámek (visací zámek) | Objekty zůstávají vidět a lze na ně přichytit, ale nelze je vybrat ani změnit. Hodí se pro podklad, který obtahujete. |
| Vykreslení (tiskárna) | Je-li stisknuto, vrstva se na obrazovce zobrazí, ale **vynechá se z vykreslení** a z PDF. Používejte ji pro konstrukční čáry a poznámky sobě. |

Tlačítko podržte myší a uvidíte, co udělá („Vypnout“, „Zamrazit“, „Zamknout“, „Nevykreslovat tuto vrstvu“).

Aktuální vrstvu nelze vypnout: stavový řádek hlásí „That is the current layer. Make another layer current first.“ Kliknutí na název vrstvy, aby se stala aktuální, ji také zapne a odmrazí.

Každá změna vrstev, v panelu nebo příkazem, je jeden krok zpět: {{key:Mod+Z}} ji vrátí.

## Práce s vrstvami výběrem objektů

Název vrstvy nemusíte znát: vyberte objekt na ní. Napište příkaz, nebo otevřete {{ui:Nástroje}} nahoře v panelu {{ui:Vrstvy}}.

| Příkaz | Co dělá |
|---|---|
| {{cmd:LAYISO}} | Vyberte objekty a stiskněte {{key:Enter}}: zůstanou zapnuté jen jejich vrstvy, všechny ostatní se vypnou. Je-li aktuální vrstva vypnuta, jedna z izolovaných vrstev se stane aktuální. |
| {{cmd:LAYUNISO}} | Znovu zapne vrstvy, které poslední {{cmd:LAYISO}} vypnulo, a vrátí aktuální vrstvu, kterou změnilo. |
| {{cmd:LAYOFF}} | Klikejte na objekty jeden po druhém: vrstva každého z nich se vypne. Napište `U`, abyste vzali zpět poslední, a {{key:Enter}}, abyste skončili. |
| {{cmd:LAYFRZ}} | Totéž, ale zamrazuje každou vrstvu. |
| {{cmd:LAYMCUR}} | Klikněte na objekt: jeho vrstva se stane aktuální (a zapne a odmrazí se). Je-li už vybrán jeden objekt, použije se ten. |
| {{cmd:LAYON}} | Zapne všechny vrstvy. |
| {{cmd:LAYTHW}} | Odmrazí všechny vrstvy. |

Aktuální vrstva se tímto způsobem nikdy nevypne ani nezamrazí: historie to oznámí a nejprve můžete aktuální vrstvu nastavit příkazem {{cmd:LAYMCUR}}. Vyberete-li odkaz na blok, použije se vlastní vrstva odkazu.

## Přejmenování, sloučení a smazání vrstev

- {{cmd:RENAME}}: napište `LA`, starý název a nový. Každý objekt na vrstvě půjde s ním. (`B` přejmenuje blok stejným způsobem, se všemi odkazy na něj.)
- {{cmd:LAYMRG}}: klikněte na objekt na každé vrstvě, kterou chcete sloučit (nebo napište `N` a název), stiskněte {{key:Enter}}, potom vyberte cílovou vrstvu a odpovězte `Y`. Objekty přejdou na cíl – v modelu, na listech i uvnitř bloků – a sloučené vrstvy zmizí.
- {{cmd:LAYDEL}}: vyberte objekt na vrstvě (nebo napište `N` a její název) a odpovězte `Y`. Vrstva zmizí **spolu se všemi objekty na ní**, všude. Vrstvu 0, DEFPOINTS ani aktuální vrstvu nelze smazat.

Každá z těchto akcí je jeden krok zpět. Všechny tři jsou v {{ui:Nástroje}} nahoře v panelu {{ui:Vrstvy}}.

1. Klikněte na jednu čáru stěny, potom napište `LAYISO` a stiskněte {{key:Enter}}. Zůstane zapnutá jen Walls.
2. Nakreslete nebo změňte, co potřebujete, na Walls.
3. Napište `LAYUNISO` a stiskněte {{key:Enter}}. Doors a Notes se vrátí.

## Časté chyby

- **Nové čáry skončily na jiné vrstvě.** Před kreslením zkontrolujte, která tečka je vyplněná. Nová vrstva se stane aktuální, jakmile ji přidáte.
- **Objekt nejde vybrat.** Jeho vrstva je zamčená, vypnutá nebo zamrazená.
- **Vrstva se v jiném programu stále tiskne.** DXF R12 neumí uložit „nevykreslovat“. CadCraft to nastavení uchová pro sebe, je-li ve výkresu list, ale jiné programy danou vrstvu vykreslí.
- **Názvy vrstev jsou po uložení velkými písmeny.** DXF R12 ukládá názvy velkými písmeny, takže `Walls` se vrátí jako `WALLS` a mezery se změní na `_`. Uložené DWG zachovává názvy tak, jak jste je napsali.
- **Přejmenování, sloučení nebo smazání vrstvy.** Použijte {{cmd:RENAME}}, {{cmd:LAYMRG}} nebo {{cmd:LAYDEL}} (také v {{ui:Nástroje}}): viz níže.

## Seskupení vrstev

Seznam udržíte krátký tím, že vrstvy vložíte do složek, například Existující, Navrhované a Rozvody. Každá složka se sbaluje a její přepínače zapínají, vypínají, zamrazují nebo zamykají všechny její vrstvy najednou. Aktuální vrstvu nikdy nevypnete.

V {{ui:Nástroje}} na panelu Vrstvy zvolte {{ui:Přidat hotové skupiny}} pro sadu určenou pro malé obytné stavby, {{ui:Seskupit podle názvu}} pro seskupení vrstev, které sdílejí předponu (`E-Walls`, `E-Doors`), nebo {{ui:Nová skupina}}. Přetáhněte vrstvu na složku, nebo použijte seznam nad vrstvami pro aktuální vrstvu. Napište do {{ui:Najít vrstvu}}, chcete-li seznam zúžit. `LAYGROUP` (`LG`) dělá totéž na příkazovém řádku.

Chcete-li přejmenovat skupinu, dvakrát klikněte na její název (nebo ji vyberte a stiskněte {{key:F2}}), napište nový název a stiskněte {{key:Enter}}; {{key:Esc}} ponechá starý název a {{cmd:UNDO}} jej vrátí. {{ui:Nová skupina}} je v {{ui:Nástroje}} na panelu Vrstvy.

Samotné vrstvy se nemění, takže je ostatní CAD programy vidí jako obyčejný ploský seznam. CadCraft skupiny uchovává v souboru.

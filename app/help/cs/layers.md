---
title: Uspořádání výkresu pomocí vrstev
summary: Vytvořte vrstvy pro stěny, dveře a poznámky, nastavte barvy, nastavte aktuální vrstvu a vypínejte, zamrazujte, zamykejte nebo je nechte nevykreslovat.
keywords: vrstva, vrstvy, la, aktuální vrstva, zamrazit, odmrazit, zamknout, vypnout, zapnout, vykreslit, nevykreslit, barva, vlastnosti vrstvy, layiso, layuniso, izolovat, layoff, layfrz, laymcur, layon, laythw, přejmenovat, laymrg, sloučit, laydel, smazat vrstvu
from: cd033591
---

## Co vytvoříte

Tři vrstvy, Stěny, Dveře a Poznámky, každou s vlastní barvou, s objekty nakreslenými na každé z nich a přesunutými mezi nimi.

## Panel Vrstvy

Vrstvy jsou na panelu vlevo, pod {{ui:Vrstvy}}. Každý řádek zleva doprava ukazuje:

- tečku: vyplněnou pro **aktuální** vrstvu, kam směřují nové objekty;
- barevný vzorek;
- název vrstvy;
- čtyři tlačítka: zapnout/vypnout (oko), zamrazit (vločka), zamknout (visací zámek) a vykreslit (tiskárna).

Každý výkres má vrstvu `0`. Napsání `LA` a stisknutí {{key:Enter}} přesune na panel.

## Vytvoření vrstev

1. Klikněte na {{ui:Nová vrstva}} nad seznamem. Otevře se pole pro název.
2. Napište `Stěny` a stiskněte {{key:Enter}} (nebo klikněte na {{ui:Přidat}}).

Stavový řádek hlásí „Přidána vrstva Stěny a nastavena jako aktuální.“ Nová vrstva dostane barvu 7 (černou na světlém motivu, bílou na tmavém).

3. Znovu klikněte na {{ui:Nová vrstva}}, napište `Dveře` a stiskněte {{key:Enter}}.
4. Znovu klikněte na {{ui:Nová vrstva}}, napište `Poznámky` a stiskněte {{key:Enter}}.

Nyní je aktuální **Poznámky**.

## Barva každé vrstvy

1. Klikněte na barevný vzorek na řádku Stěny. Otevře se výběr barvy vašeho systému.
2. Zvolte barvu a potvrďte.

Vzorek a všechno na vrstvě Stěny, které má barvu {{ui:Podle vrstvy}}, se změní.

:::note
Vybraná barva, která odpovídá jedné z 255 standardních CAD barev, se uloží jako toto číslo. Jakákoli jiná barva se v CadCraftu zachová přesně, ale v souboru DWG nebo DXF se uloží jako nejbližší standardní barva.
:::

## Kreslení na vrstvě

1. Klikněte na název **Stěny** v seznamu. Jeho tečka se vyplní a stavový řádek hlásí „Aktuální vrstva: Stěny“.
2. Nakreslete obdélník (`REC`). Půjde na Stěny.
3. Klikněte na **Dveře** a nakreslete oblouk (`A`). Půjde na Dveře.

Aktuální vrstvu můžete zvolit i v {{ui:Aktuální nastavení}} vpravo (když nic není vybráno), v části {{ui:Vrstva}}.

## Přesun objektů na jinou vrstvu

1. Vyberte objekty.
2. V pravém panelu zvolte novou vrstvu v {{ui:Vrstva}}.

Přesunou se na tuto vrstvu a převezmou její barvu, pokud je jejich barva {{ui:Podle vrstvy}}.

## Vypnutí, zamrazení, zamknutí a tisk

| Tlačítko | Co dělá |
|---|---|
| Zapnout/vypnout (oko) | Skryje objekty vrstvy. Nejdou vidět, vybrat ani na ně přichytit. |
| Zamrazit (vločka) | V CadCraftu stejné jako vypnout. Ponecháno odděleně, protože ostatní programy s nimi zacházejí jinak, a nastavení se uloží. |
| Zamknout (visací zámek) | Objekty zůstanou vidět a můžete na ně přichytit, ale nejdou vybrat ani změnit. Hodí se pro podklad, který obtahujete. |
| Vykreslit (tiskárna) | Když je stisknuto, vrstva se zobrazí na obrazovce, ale **nevykresluje se** do tisků a PDF. Používá se pro konstrukční čáry a poznámky pro sebe. |

Najetím na tlačítko uvidíte, co udělá („Vypnout“, „Zamrazit“, „Zamknout“, „Nevykreslovat tuto vrstvu“).

Aktuální vrstvu nelze vypnout: stavový řádek hlásí „Toto je aktuální vrstva. Nejdřív nastavte jinou vrstvu jako aktuální.“ Kliknutí na název vrstvy, aby se stala aktuální, ji také zapne a odmrazí.

Každá změna vrstvy, v panelu nebo příkazem, je jeden krok zpět: {{key:Mod+Z}} ji vrátí.

## Práce s vrstvami výběrem objektů

Nemusíte znát název vrstvy: vyberte objekt na ní. Napište příkaz, nebo otevřete {{ui:Nástroje}} nahoře na panelu {{ui:Vrstvy}}.

| Příkaz | Co dělá |
|---|---|
| {{cmd:LAYISO}} | Vyberte objekty a stiskněte {{key:Enter}}: zůstanou zapnuté jen jejich vrstvy, všechny ostatní se vypnou. Pokud je aktuální vrstva vypnutá, jedna z izolovaných vrstev se stane aktuální. |
| {{cmd:LAYUNISO}} | Znovu zapne vrstvy, které vypnul poslední {{cmd:LAYISO}}, a vrátí aktuální vrstvu, kterou změnil. |
| {{cmd:LAYOFF}} | Klikejte postupně na objekty: vrstva každého se vypne. Napište `U` pro vrácení posledního, {{key:Enter}} pro dokončení. |
| {{cmd:LAYFRZ}} | Totéž, ale zamrazuje vrstvy. |
| {{cmd:LAYMCUR}} | Klikněte na objekt: jeho vrstva se stane aktuální (a je zapnuta a odmrazena). Pokud je už jeden objekt vybrán, použije se ten. |
| {{cmd:LAYON}} | Zapne všechny vrstvy. |
| {{cmd:LAYTHW}} | Odmrazí všechny vrstvy. |

Aktuální vrstva se tímto způsobem nikdy nevypne ani nezamrazí: historie to uvádí a nejdřív můžete jinou vrstvu nastavit jako aktuální pomocí {{cmd:LAYMCUR}}. Při výběru odkazu na blok se použije vlastní vrstva tohoto odkazu.

## Přejmenování, sloučení a smazání vrstev

- {{cmd:RENAME}}: napište `LA`, starý název a nový. Každý objekt na vrstvě půjde za ním. (`B` přejmenuje blok stejným způsobem, se všemi jeho odkazy.)
- {{cmd:LAYMRG}}: klikněte na objekt na každé vrstvě, která se má sloučit (nebo napište `N` a název), stiskněte {{key:Enter}}, pak vyberte cílovou vrstvu a odpovězte `Y`. Objekty přejdou na cílovou vrstvu — v modelu, na listech i uvnitř bloků — a sloučené vrstvy zmizí.
- {{cmd:LAYDEL}}: vyberte objekt na vrstvě (nebo `N` a její název) a odpovězte `Y`. Vrstva zmizí **i se všemi objekty na ní**, všude. Vrstvu 0, DEFPOINTS ani aktuální vrstvu nelze smazat.

Každá z těchto operací je jeden krok zpět. Všechny tři jsou v {{ui:Nástroje}} nahoře na panelu {{ui:Vrstvy}}.

1. Klikněte na jednu čáru stěny, pak napište `LAYISO` a stiskněte {{key:Enter}}. Zůstanou zapnuté jen Stěny.
2. Nakreslete nebo upravte, co potřebujete, na Stěnách.
3. Napište `LAYUNISO` a stiskněte {{key:Enter}}. Dveře a Poznámky se vrátí.

## Časté chyby

- **Nové čáry jsou na špatné vrstvě.** Před kreslením zkontrolujte, která tečka je vyplněná. Nová vrstva se stane aktuální hned, jak ji přidáte.
- **Objekt nejde vybrat.** Jeho vrstva je zamknutá, vypnutá nebo zamrazená.
- **Vrstva se v jiném programu stále tiskne.** DXF R12 neumí uložit „nevykreslovat“. CadCraft si nastavení ponechá sám, když má výkres list, ale ostatní programy danou vrstvu vykreslí.
- **Názvy vrstev velkými písmeny po uložení.** DXF R12 ukládá názvy velkými písmeny, takže `Stěny` se vrátí jako `STĚNY` a mezery se změní na `_`. Uložený DWG zachová názvy tak, jak jste je napsali.
- **Přejmenování, sloučení nebo smazání vrstvy.** Použijte {{cmd:RENAME}}, {{cmd:LAYMRG}} nebo {{cmd:LAYDEL}} (také v {{ui:Nástroje}}): viz výše.

## Seskupení vrstev

Udržujte seznam krátký tím, že vrstvy dáte do složek, například Stávající, Navrhované a Inženýrské sítě. Každá složka se dá sbalit a její přepínače zapnou nebo vypnou všechny její vrstvy, zamrazí je nebo zamknou dohromady. Aktuální vrstva se nikdy nevypne.

V {{ui:Nástroje}} na panelu Vrstvy zvolte {{ui:Přidat hotové skupiny}} pro sadu připravenou pro malé obytné stavby, {{ui:Seskupit podle názvu}} pro seskupení vrstev, které sdílejí předponu (`E-Stěny`, `E-Dveře`), nebo {{ui:Nová skupina}}. Vrstvu přetáhněte na složku, nebo použijte seznam nad vrstvami pro aktuální vrstvu. Napište do pole {{ui:Najít vrstvu}}, čímž seznam zúžíte. `LAYGROUP` (`LG`) dělá totéž na příkazovém řádku.

Vrstvy samy se nemění, takže je ostatní CAD programy vidí jako obyčejný plochý seznam. CadCraft skupiny uchovává v souboru.

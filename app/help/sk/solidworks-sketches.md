---
title: Presun náčrtov do iných modelárov súčiastok a späť
summary: Napíšte makro, ktoré prestaví váš výkres ako jeden viazaný náčrt v modelári súčiastok, a otvorte náčrt exportovaný z neho.
keywords: náčrt, makro, swb, vba, export, modelár súčiastok, globálne premenné, rovnice, vzťahy, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nie je dostupný tam, kde sa CadCraft zostavuje, takže ani jeden smer zatiaľ nebol otestovaný v SolidWorks. Čo CadCraft zapíše, sa kontroluje len z hľadiska štruktúry. Výsledok pred použitím overte.
:::

## Odoslanie výkresu ako náčrtu

1. Viažte a okótujte výkres (pozri [Viazanie výkresu](topic:constraints)).
2. V skupine {{ui:Parametrické}} otvorte {{ui:Viac}} a zvoľte {{ui:Makro pre SolidWorks (.swb)}}, alebo napíšte {{cmd:SWBOUT}}.

   Stiahne sa súbor pomenovaný podľa výkresu s koncovkou `.swb`.
3. V SolidWorks zvoľte **Tools > Macro > Run** a vyberte tento súbor.

Makro vytvorí novú súčiastku zo svojej predvolenej šablóny, otvorí náčrt na prednej rovine a nakreslí do neho čiary, kružnice, oblúky, body a lomené čiary modelu, s:

- vašimi viazaniami ako vzťahmi náčrtu,
- vašimi rozmerovými viazaniami ako kótami s rovnakými názvami (`d1@Sketch1`),
- vašimi vlastnými parametrami ako globálnymi premennými,
- každým výrazom ako rovnicou.

Súčiastka používa dĺžkovú jednotku výkresu. Text, bloky, šrafovania, kóty a listy nie sú súčasťou náčrtu; história uvedie, čo sa vynechalo. Výrazy bez tvaru rovnice (`if`, `min`, `max`, `round`, `%` a niekoľko ďalších) sa zapíšu ako ich aktuálna hodnota a história uvedie, ktoré. Čokoľvek, čo makro nedokáže vytvoriť, sa zapíše do logového súboru vedľa makra a na konci sa zobrazí súhrnná správa.

## Otvorenie náčrtu zo súčiastky

1. V SolidWorks spustite na súčiastke exportné makro CadCraft (stiahnete ho v aplikácii PartCraft: Súbor > Export > Export makra na vrátenie súčiastok). Vedľa súčiastky zapíše súbor `.json` vo formáte `cadcraft-sw-export`.
2. V CadCraft zvoľte {{ui:Otvoriť}} a vyberte tento súbor `.json`.
3. Ak má súčiastka viac náčrtov, vyberte jeden.

Náčrt sa stane výkresom v milimetroch: jeho čiary, oblúky, kružnice a body, jeho vzťahy ako viazania, jeho rozmery ako rozmerové viazania pomenované tak, ako boli (`D1`, `D2` …), jeho globálne premenné ako parametre a rovnice na jeho rozmeroch ako výrazy. História uvedie, čo sa neprenieslo, napríklad vzťahy, ktoré CadCraft nemá. Umiestnenie náčrtu v súčiastke sa neuchováva: nakreslí sa plošne, tak ako je vidieť na jeho rovine.

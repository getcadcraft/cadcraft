---
title: Značky: atributy, které plní tabulky
summary: Definujte značku (její druh, hodnoty, které může nabývat, bloky, na které se vztahuje), nastavte ji na odkazy na bloky a vypište odkazy jako tabulku, kterou můžete uložit jako CSV.
keywords: značky, značka, atribut, tabulka, extrakce dat, vlastnost, požární odolnost, seznam hodnot, odkaz na blok, TAGS, csv
from: 9b90bacc
---

Značka je **atribut bloku** s definicí: jaký druh hodnoty drží, které hodnoty jsou povoleny a na které bloky se vztahuje. Hodnoty jsou běžné atributy bloků, takže je přečte jakýkoli jiný program a {{cmd:ATTEDIT}} je zobrazí. Nové jsou jen definice, a ty se uchovávají ve výkresu.

## Definice a nastavení

Napište {{cmd:TAGS}} a zvolte:

- {{ui:Definovat}}: název (písmena, číslice, mezera, `_ . -`), druh (`text`, `number`, `integer`, `yesno`, `length`, `angle`), povolené hodnoty oddělené `;` (ponechte prázdné pro libovolné) a názvy bloků, na které se vztahuje (`DOOR*` odpovídá každému bloku začínajícímu na DOOR; prázdné znamená každý blok).
- {{ui:Sada}}: s vybranými odkazy na bloky napište `FireRating=60 min; Width=850`. Hodnota mimo povolený seznam nebo nečíselná hodnota u číselné značky se odmítne a program to oznámí. Jeden krok zpět. Blok, který atribut nemá, jej dostane jako skrytý atribut.
- {{ui:Tabulka (C)}}: každý odkaz na blok, na který se značka vztahuje, volitelně seskupený podle značky nebo názvu bloku, vytištěný a uložený jako CSV.
- {{ui:Odebrat}}: zapomene definici; hodnoty na odkazech zůstanou.

Přejmenování značky přejmenuje její hodnoty na každém odkazu. Názvy značek nerozlišují velká a malá písmena, stejně jako názvy atributů.

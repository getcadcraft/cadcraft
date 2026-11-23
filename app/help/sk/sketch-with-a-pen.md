---
title: Kreslenie perom a získanie presnej geometrie
summary: Kreslite voľnou rukou perom, myšou alebo prstom a každý ťah sa pri zdvihnutí pera stane čistou čiarou, kružnicou, oblúkom, obdĺžnikom alebo lomenou čiarou, prichytenou k tomu, čo je už nakreslené, s veľkosťou pripravenou na prepísanie.
keywords: náčrt, pero, rysik, voľná ruka, prst, vyčistiť, presné, uchopenie, SKETCHLIVE, SKETCHFIX, veľkosť, prepísať, tlak, hrúbka čiary, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Spustite {{cmd:SKETCHLIVE}} (alebo vyberte **Kreslenie › Viac › Kresliť perom**) a nakreslite ťah stlačením a ťahaním. Keď pero zdvihnete, CadCraft prečíta, čo ste mali na mysli, a vloží to do výkresu:

| Váš ťah | Čo dostanete |
|---|---|
| Takmer rovný | Čiara. Takmer vodorovná alebo zvislá čiara sa urobí presne vodorovne alebo zvisle. |
| Uzavretý a okrúhly | Kružnica |
| Časť okrúhleho tvaru | Oblúk |
| Uzavretý so štyrmi pravouhlými rohmi | Obdĺžnik |
| Čokoľvek iné | Lomená čiara s hranatými stranami |

Konce ťahu sa pritiahnu k najbližšiemu koncu toho, čo je už nakreslené, takže nakreslený múr sa stretne so susedným múrom.

## Prepísanie veľkosti

Po každom ťahu riadok príkazov zobrazí jeho veľkosť (dĺžku čiary, polomer kružnice alebo oblúka, šírku obdĺžnika) ako predvolenú hodnotu. Stlačte {{key:Enter}}, aby ste ju ponechali, alebo napíšte číslo alebo dĺžku, napríklad `12'6"`, aby ste ju nahradili. Čiara si zachová svoj prvý koniec, kružnica svoj stred, obdĺžnik svoj prvý roh.

Stlačením {{key:Enter}} na prázdnej výzve ukončíte, alebo napíšte `U`, aby ste vzali späť posledný ťah. Celá relácia je jeden krok späť.

## Čistenie viacerých ťahov naraz

{{cmd:SKETCHFIX}} zbiera ťahy a zmení ich všetky na presné, keď stlačíte {{key:Enter}}; to sa hodí na rýchlo nakreslený hrubý návrh.

:::note
Všetko sa počíta na vašom počítači podľa pravidiel, bez modelu a bez odosielania niekam.
:::

## Tlak nastavuje hrúbku čiary

Tam, kde je pero zapnuté pre aplikácie (Nastavenia › Globálne › Vstupné zariadenia › Pero), ťah nakreslený perom nesie každý bod, ktorý pero dalo, a jeho tlak. Ľahký ťah urobí tenký objekt a pevný hrubý: priemerný tlak ťahu vyberie 0,18, 0,25, 0,35 alebo 0,50 mm a riadok príkazov povie, ktorý. Ťahy nakreslené myšou alebo prstom používajú aktuálnu hrúbku čiary ako predtým. {{cmd:PENPRESSURE}} to vypne (alebo znova zapne); voľba sa uchováva v tomto prehliadači.

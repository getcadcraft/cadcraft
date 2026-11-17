---
title: Náčrt perom a presná geometria
summary: Kreslite perom, myšou alebo prstom a každý ťah sa po zdvihnutí pera zmení na čistú čiaru, kružnicu, oblúk, obdĺžnik alebo lomenú čiaru, prichytenú k tomu, čo je už nakreslené, s veľkosťou pripravenou na prepísanie.
keywords: náčrt, pero, dotykové pero, voľná ruka, prst, vyčistenie, presný, prichytenie, SKETCHLIVE, SKETCHFIX, veľkosť, prepísanie
from: cd87eb75
---

Spustite {{cmd:SKETCHLIVE}} (alebo zvoľte **Kreslenie › Viac › Náčrt perom**) a nakreslite ťah stlačením a ťahaním. Keď pero zdvihnete, CadCraft pochopí, čo ste mysleli, a vloží to do výkresu:

| Váš ťah | Čo dostanete |
|---|---|
| Takmer rovný | Čiara. Takmer vodorovná alebo zvislá čiara sa presne zarovná do vodorovnej alebo zvislej polohy. |
| Uzavretý a okrúhly | Kružnica |
| Časť okrúhleho tvaru | Oblúk |
| Uzavretý so štyrmi pravouhlými rohmi | Obdĺžnik |
| Čokoľvek iné | Lomená čiara s hranatými stranami |

Koncové body ťahu sa pritiahnu k najbližšiemu koncu toho, čo je už nakreslené, takže načrtnutá stena sa napojí na susednú stenu.

## Prepísanie veľkosti

Po každom ťahu riadok príkazov zobrazí jeho veľkosť (dĺžku čiary, polomer kružnice alebo oblúka, šírku obdĺžnika) ako predvolenú hodnotu. Stlačte {{key:Enter}}, ak ju chcete zachovať, alebo napíšte číslo či dĺžku, napríklad `12'6"`, a nahraďte ju. Čiara si zachová svoj prvý koniec, kružnica svoj stred a obdĺžnik svoj prvý roh.

Stlačte {{key:Enter}} na prázdnej výzve, aby ste dokončili, alebo napíšte `U`, aby ste posledný ťah vrátili späť. Celé sedenie je jeden krok späť.

## Čistenie viacerých ťahov naraz

{{cmd:SKETCHFIX}} zbiera ťahy a spresní ich všetky po stlačení {{key:Enter}}, čo sa hodí pri rýchlo nakreslenom hrubom návrhu rozloženia.

:::note
Všetko sa vypočíta na vašom počítači podľa pravidiel, bez modelu a bez odosielania kamkoľvek.
:::

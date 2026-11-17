---
title: Kurzor preskakuje alebo mešká nad výkresom
summary: Čo robiť, keď zameriavací kríž nesleduje myš plynulo na staršom alebo pomalšom počítači.
keywords: preskakovanie kurzora, oneskorenie kurzora, pomalý kurzor, trhavý kurzor, starý počítač, stará grafická karta, integrovaná grafika, hardvérová akcelerácia, plynulejší kurzor, pomalý notebook
from: 39dc9057
---

CadCraft beží v prehliadači (CadCraft Studio je tiež zobrazenie v prehliadači), takže nič v ňom nie je prispôsobené pre jednu alebo druhú grafickú kartu. Zameriavací kríž kreslí aplikácia, čo znamená, že sa môže pohybovať len tak rýchlo, ako aplikácia dokáže nakresliť jednu snímku.

## Nechajte CadCraft znížiť extrá

1. Otvorte {{ui:Nastavenia}} (ozubené koliesko vpravo hore) a zostaňte na karte {{ui:CadCraft}}.
2. Zvoľte {{ui:Plynulejší kurzor na pomalších počítačoch}}.
3. Vyberte {{ui:Zapnuté}}.

Keď je to zapnuté, namiesto nakresleného zameriavacieho kríža a výberového štvorčeka (aj celoobrazovkového kríža) sa použije vlastný kurzor vášho počítača a objekt pod kurzorom sa zvýrazní, keď kurzor stojí, nie keď sa pohybuje. Uchopenie objektov, sledovanie a gumový pás fungujú ako predtým.

{{ui:Automaticky}} je spôsob, akým CadCraft štartuje: sleduje, ako dlho trvajú snímky, keď pohybujete kurzorom, a sám to zapne, keď zostanú pomalé niekoľko sekúnd. Raz vás o tom informuje. {{ui:Vypnúť}} ponechá nakreslený zameriavací kríž bez ohľadu na rýchlosť.

## Ak je to stále pomalé

- Skontrolujte, či je v prehliadači zapnutá hardvérová akcelerácia: v novej karte otvorte `chrome://gpu` (alebo `edge://gpu`). Ak prvé riadky hovoria "Software only" alebo "Disabled", prehliadač kreslí bez grafickej karty. Aktualizácia ovládača grafiky to často opraví.
- Zatvorte ostatné náročné karty a programy a skúste menšie okno prehliadača.
- Dajte nám vedieť cez {{ui:Pomocník}}, {{ui:Nahlásiť problém}}: uveďte, či používate prehliadač alebo CadCraft Studio, jeho verziu a čo je na stránke gpu.

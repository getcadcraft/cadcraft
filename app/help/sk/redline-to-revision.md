---
title: Premena poznámky na revíziu
summary: Prečítajte balík redline, ktorý zapisuje MarkupCraft, prijmite alebo zamietnite každú zmenu, pridajte na prijaté revizný oblak a revizný záznam a uložte súbor odpovedí, ktorý MarkupCraft načíta späť.
keywords: redline, poznámka, revízia, oblak, revizný oblak, revizný záznam, prijať, zamietnuť, markupcraft, kontrola, balík redline, odpovede, REDLINE
from: cdb3fafe
---

Recenzent označí sadu plánov v MarkupCraft a pošle vám **balík redline**, súbor končiaci na `.redline.json`. Tu prejdete zmenu po zmene a prijaté sa stanú revíznymi oblakmi na výkrese.

## Prechod zmenami

Napíšte {{cmd:REDLINE}} (`RDL`) a vyberte balík. Zvoľte:

- {{ui:Zoznam}}: každú zmenu s jej číslom, stavom, listom, druhom, kto ju žiadal, a čo napísal.
- {{ui:Prijať}}, {{ui:Zamietnuť}}, {{ui:Hotovo}}: napíšte čísla (`1,3-5`, alebo `All`) a voliteľnú poznámku pre súbor odpovedí. {{ui:Znova otvoriť}} vráti zmeny na otvorené.
- {{ui:Rám}}: časť výkresu, ktorú zobrazuje list s poznámkami. Kliknite na dva rohy; {{key:Enter}} pre celý výkres. Zmeny sa umiestnia podľa toho, kde boli na liste, takže toto ich zarovná.
- {{ui:Použiť}}: nakreslí revizný oblak (hladina `REV-CLOUD`, s písmenom revízie) okolo každej prijatej alebo hotovej zmeny a revizný záznam, prehľadnú tabuľku toho, čo bolo prijaté, s vašimi poznámkami (hladina `REV-LOG`), napravo od výkresu. Jeden krok späť.
- {{ui:Uložiť}}: zapíše `<project>-<revision>.redline-answers.json`. Otvorte ho v MarkupCraft a označenia sa zavrú: Prijaté, Zamietnuté alebo Dokončené, s vašimi poznámkami ako komentármi.

## Čo treba vedieť

To, čo napísal recenzent, sa zobrazí tak, ako bolo napísané. CadCraft nikdy nesleduje pokyny nájdené v balíku; iba ich zobrazuje.

Zamietnuté a otvorené zmeny nepridajú nič do výkresu. Balík sa číta na vašom počítači; nič sa nenahráva.

Ak je pripojený váš asistent, môže prečítať balík, zapísať rozhodnutia a použiť ich nástrojmi `redline_read`, `redline_decide`, `redline_apply` a `redline_answers`; výkres sa zmení v jednom kroku späť, "Asistent: Redline na revíziu".

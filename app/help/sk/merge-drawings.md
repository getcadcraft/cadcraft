---
title: Zlúčenie úprav jedného výkresu od dvoch ľudí
summary: Nechajte git, Fossil alebo Mercurial zlúčiť dve kópie objektu DWG alebo DXF po objektoch pomocou kľúča, ktorý CadCraft uchováva pri každom objekte.
keywords: zlúčiť, zlučovanie, git, fossil, mercurial, riadenie verzií, rozdiel, konflikt, trojcestné, cadcraft merge, kľúč, gitattributes, DWG, DXF
from: 71482bf9
---

Dvaja ľudia upravujú ten istý výkres. Ak zmenili rôzne objekty, zlúčenie môže byť automatické: nič netreba robiť znova ručne.

## Čo to umožňuje

CadCraft dá každému objektu, ktorý nakreslíte, krátky **kľúč**, ktorý sa nikdy nemení a nikdy sa nedáva dvom objektom. Uloží sa spolu s objektom do DWG alebo DXF (ako dodatočné údaje, ktoré si iné programy ponechajú). Zlúčenie hľadá objekty podľa tohto kľúča, nie podľa ich pozície v súbore, pretože každý program pri ukladaní prečísluje pozície. Ak nikdy nezlučujete, vypnite to v {{ui:Nastavenia}} › CadCraft › Súbory vhodné na zlučovanie; súbory budú asi o 10 percent menšie.

Výkres uložený pred vznikom kľúčov sa zlúči aj tak: jeho objekty dostanú kľúč podľa miesta v súbore, rovnaký pre každého, kto ho otvorí.

## Nastavenie

Git potrebuje dva riadky raz pre každé úložisko:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# jednorazovo, na každom počítači
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gitu ho spustite ručne: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil a Mercurial berú tie isté tri súbory vo svojom vlastnom nastavení nástroja na zlučovanie.

## Pravidlá

- Objekt zmenený iba na jednej strane sa prevezme. Rovnaká zmena na oboch stranách sa prevezme raz.
- Vlastnosť zmenená dvoma spôsobmi je **konflikt**: vaša strana ostane a správa uvedie obe hodnoty. Otvorte výsledok, pozrite sa na daný objekt a opravte ho ručne.
- Objekt pridaný na ktorejkoľvek strane sa zachová. Objekt odstránený na jednej strane a nedotknutý na druhej sa odstráni. Odstránený na jednej strane a zmenený na druhej: odstráni sa a nahlási sa.
- Hladiny, bloky, štýly textu a kót, listy a pomenované pohľady sa zlučujú rovnako. Väzby nasledujú objekty, ktoré menujú.
- Výsledok sa zapíše v rovnakom formáte a verzii súboru ako váš.

Nezlučuje sa: poradie, v akom sa objekty kreslia, je vaše, potom nasledujú objekty, ktoré pridala druhá strana. Zmeny rovnakej definície bloku na oboch stranách sú konflikt, nikdy sa nezmiešajú. Nič sa nenahráva; všetko beží na vašom počítači.

---
title: Prepísanie triedy vo výreze
summary: Na liste skryte triedu alebo jej v jednom výreze nastavte inú farbu, hrúbku čiary alebo výplň; model a ostatné výrezy zostávajú nezmenené.
keywords: výrez, prepísanie triedy, prepísanie výrezu, skryť triedu vo výreze, list, rozloženie, VPLAYER, vykresliť, Vectorworks
from: c1a2b51f
---

List často zobrazuje ten istý model viackrát: pôdorys s nábytkom a pôdorys bez neho alebo svetelný plán, kde sú farebné iba svetlá. Prepísanie triedy vo výreze mení, ako sa jedna [trieda](topic:classes) zobrazuje **iba v tom výreze**.

1. Otvorte list a vyberte jeden výrez.
2. Otvorte panel Triedy (`CLASSES`) a vyberte triedu.
3. V časti {{ui:Tento výrez}} zaškrtnite {{ui:Skryť v tomto výreze}} alebo nastavte {{ui:Farba tu}}, {{ui:Hrúbka čiary tu}} alebo {{ui:Výplň tu}}.

Zoznam nižšie ukazuje každú triedu, ktorú tento výrez mení. {{ui:Zrušiť prepísania tohto výrezu}} ich všetky zruší. Každá zmena je jeden krok späť.

## Čo prepísanie mení

- **Skryť** skryje triedu a každú triedu pod ňou v tomto výreze.
- **Farba, hrúbka čiary a výplň** menia objekty triedy, ktorých hodnota nie je nastavená na samotnom objekte, t. j. objekty, ktoré ju preberajú podľa triedy alebo hladiny. Objekt s vlastnou farbou si ju zachová, rovnako ako pri prepísaní hladiny vo výreze.

Prepísania sa zobrazia na obrazovke aj vo vykresleniach a súboroch PDF vrátane súboru listov uverejneného do PDF. Fungujú spolu so zmrazenými hladinami výrezu a prepísaniami hladín.

Prepísania sa ukladajú s výkresom do DWG a DXF (so zoznamom tried v bloku `CADCRAFT_CLASSES`) a pri otvorení súboru v CadCraft sa vrátia do toho istého výrezu.

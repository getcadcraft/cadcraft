---
title: Zoradenie podlaží do jedného výkresu
summary: Nakreslite prvé podlažie nad prízemím na rovnakých súradniciach a každé podlažie vypnite, bez externých referencií (xref).
keywords: podlažie, podlažia, FLOORS, FLR, FLOOR, FLOORLAYERS, poschodie, úroveň, zoradiť, návrhová hladina, priestor modelu, podklad, xref
from: 7440fc87
---

Podlažia vám umožňujú zoradiť pôdorysy v jednom priestore modelu. Každé podlažie má vlastné objekty a hladiny fungujú naprieč všetkými. Múr na `P-Walls` môže byť na ľubovoľnom podlaží.

## Začiatok

Napíšte `FLOORS` (`FLR`) alebo zvoľte {{ui:Podlažia…}} v ponuke {{ui:Viac}} skupiny {{ui:Pohľad}} a potom zvoľte {{ui:Začať s podlažiami}}. Čo ste doteraz nakreslili, pôjde na prízemie.

## Kreslenie na podlaží

Vyberte podlažie okrúhlym tlačidlom v paneli. Nové objekty pôjdu na ňu.

Ostatné zapnuté podlažia sa zobrazujú zoslabené pod ním. Môžete sa na ne uchopiť, takže prvé podlažie sa zarovná s prízemím, ale nemôžete ich meniť, kým ich neurobíte aktívnym podlažím. Ikona oka podlažie vypne. Múry sa spájajú iba s múrmi na svojom podlaží.

Ak chcete podlažie začať z podlažia pod ním, vyberte, čo chcete, zvoľte podlažie v paneli a stlačte {{ui:Kopírovať tam}}.

## Umiestnenie podlaží na listy

Vyberte výrez na liste a v Vlastnostiach zvoľte jeho podlažie pod {{ui:Zobrazené podlažie}}. Výrez, pri ktorom nie je zvolené žiadne podlažie, zobrazí všetky zapnuté podlažia.

## Odoslanie súboru niekomu inému

Iné CAD programy o podlažiach nevedia, takže zobrazia všetky podlažia spolu. Pred odoslaním súboru zvoľte v paneli {{ui:Premeniť podlažia na hladiny}} alebo napíšte `FLOORLAYERS`. Každý objekt sa presunie na hladinu pomenovanú podľa svojho podlažia, napríklad `Ground floor-P-Walls`, takže ich možno ďalej vypínať po podlažiach. Späť to vráti. CadCraft ukladá podlažia do súboru DWG alebo DXF, ktorý uloží.

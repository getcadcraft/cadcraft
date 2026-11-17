---
title: Punktar fyrir BIM-forrit
summary: Fluttu út punkta, og innsetningarpunkta blokka með lýsingu, í CSV- eða TXT-skrá sem BIM- og mælingaforrit lesa.
keywords: exportpoints, flytja út punkta, punktar, csv, txt, pnezd, penzd, xyz, mælipunktar, hnit, bim, staðsetning, punktaskrá, norðurhnit, austurhnit, hæð
from: d80e2d53
---

## Hvað þú munt gera

Punktaskrá: ein lína á hvern punkt, með númeri hans, norðurhnitum, austurhnitum, hæð og lýsingu, sem BIM-forrit (Revit og Archicad meðal þeirra) og mælingahugbúnaður geta lesið inn til að setja mælipunkta, staðsetningarmerki eða tæki.

## Flytja út punktana

1. Veldu punktana og blokkavísanirnar sem þú vilt innsetningarpunkta þeirra, eða veldu ekkert til að taka alla punkta.
2. Skrifaðu {{cmd:EXPORTPOINTS}} (eða `EXPPTS`, eða {{ui:Blokkir}} › {{ui:Meira}} › {{ui:Flytja út punkta}}) og ýttu á {{key:Enter}} (ýttu aftur á {{key:Enter}} við `Select points and blocks` þegar ekkert var valið).
3. Þegar þú valdir blokkir með eigindum, listar CadCraft merkjum þeirra: skrifaðu merkið sem gildið er lýsingin (til dæmis `ITEM`), eða eitthvað annað til að nota heiti hverrar blokkar.
4. Veldu dálkana: `PNEZD` (punktur, norðurhnit, austurhnit, hæð, lýsing: sá algengasti), `PENZD` (austurhnit áður en norðurhnit) eða `XYZ` (aðeins hnitin).
5. Veldu einingar: `D` eins og teiknað, eða `M` metrar eða `F` fet (aðeins þegar einingar teikningarinnar eru stilltar: Eiginleikar › {{ui:Einingar}} með ekkert valið).
6. Með UCS stillt, veldu `W` heimshnit eða `U` UCS-hnit (sjá [UCS og snúin sýn](topic:ucs-and-turned-view)).
7. Veldu `C` fyrir kommuaðskilda `.csv` eða `T` fyrir tabúaðskilda `.txt`, og fyrsta punktanúmerið.

Skráin sækist sem `<drawing>-points.csv` (eða `.txt`), og söguskráin segir hversu marga punkta hún hefur.

## Hvað er í skránni

- Einn punktur á línu, sem endar með línuskiptum (CR LF), þrír aukastafir.
- Hæð punkts er Z hans (0 þegar hann hefur enga). Punktur blokkar er innsetningarpunktur hennar.
- Lýsing sem inniheldur kommu (eða tab í TXT) eða gæsalappir er sett í gæsalappir, með gæsalöppunum í henni tvöfölduðum.
- Sniðið er það sem CivilCraft les og skrifar, þannig að skráin opnast þar sem punktar líka.

## Algeng mistök

- Aðeins `D` er boðið fyrir einingarnar: teikningin hefur engar einingar stilltar. Stilltu þær, eða breyttu í hinu forritinu.
- Punktarnir eru langt frá því sem þú býst við í hinu forritinu: fluttu út heimshnit (`W`), eða UCS sem punktur mælingarforritsins notar (`U`).

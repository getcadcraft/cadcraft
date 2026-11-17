---
title: Unități la import: un fișier își declară unitățile sau se cere confirmare mai întâi
summary: Când un fișier pe care îl aduceți într-un desen își declară unitățile, CadCraft le convertește și spune asta. Când nu, CadCraft întreabă înainte să plaseze ceva și reține răspunsul pentru acel fișier.
keywords: unități, import, inserare, xref, atașare, XATTACH, INSERT, OBJ, DWG, DXF, nor de puncte, element de bibliotecă, milimetri, metri, inchi, picioare, scară, dimensiune greșită, prea mare, prea mic, de 1000 de ori, întrebare, reținut, INSUNITS
from: 558f1293
---

## Ce veți face

Aduceți un fișier într-un desen și asigurați-vă că intră la dimensiunea corectă.

## Pași

1. Aduceți fișierul ca de obicei: `INSERT` › Fișier, `XATTACH`, `POINTCLOUDATTACH` sau {{ui:Fișiere}} din panoul Bibliotecă.
2. Dacă fișierul își declară unitățile, nu se întreabă nimic. Linia de comandă spune ce unități declară fișierul și scara folosită atunci când diferă de ale desenului.
3. Dacă nu le declară, o casetă întreabă **Unitățile fișierului**. Alegeți ce reprezintă o unitate din fișier și faceți clic pe {{ui:Folosește aceste unități}}. Nimic nu este plasat până nu răspundeți.
4. {{ui:Anulare}} (sau {{key:Esc}}) nu aduce nimic.

## Ce fișiere își declară unitățile

- **DWG și DXF**: unitățile de inserare ale desenului (`$INSUNITS`). Un fișier fără ele este întrebat.
- **Nori de puncte**: LAS și LAZ cu un sistem de coordonate, E57, PTX și PLY își declară unitățile. Celelalte sunt întrebate.
- **OBJ**: nu își declară niciodată unitățile. Sunteți întrebat.
- **glTF și GLB**: metri, după regula formatului.
- **Imagini**: nu au o dimensiune proprie. `IMAGEATTACH` cere lățimea și oferă lățimea pe care ați dat-o fișierului înainte.
- **Scanări**: o scanare care își declară densitatea (puncte pe inch) intră la dimensiunea ei reală, în unitățile desenului; `SCANATTACH` cere tot lățimea.
- **Suplimentul Nori de puncte**: întreabă când construiți un nor al cărui fișier nu declară nicio unitate și etichetează valorile norului în unitatea pe care o poartă.

## De reținut

- Deschiderea unui DWG sau DXF ca desen propriu nu întreabă nimic: linia de comandă spune ce unități declară fișierul sau că nu declară niciuna. {{ui:Proprietăți}} setează unitățile unui desen.
- Când acest desen nu are nici el unități, un fișier nu poate fi convertit: este plasat număr cu număr, iar linia de comandă o spune.
- Răspunsul este reținut pentru acel fișier pe acest calculator, în toate aplicațiile CadCraft. Data următoare când fișierul intră, nu sunteți întrebat, iar linia de comandă spune că s-au folosit unitățile reținute.
- Pentru a fi întrebat din nou: paleta de comenzi ({{key:Mod+K}}) › **Întreabă din nou despre unitățile fișierelor importate**.

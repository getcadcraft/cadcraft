---
title: Excepcions de classe per finestra gràfica
summary: En un full, amagueu una classe o doneu-li un altre color, gruix de línia o farciment només en una finestra gràfica; el model i les altres finestres es mantenen com estan.
keywords: finestra gràfica, excepció de classe, excepció de finestra gràfica, amagar classe en finestra gràfica, full, presentació, VPLAYER, traçat, Vectorworks
from: c1a2b51f
---

Un full sovint mostra el mateix model més d'una vegada: un plànol amb el mobiliari i un plànol sense ell, o un plànol d'il·luminació on només els llums són en color. Una excepció de classe de finestra gràfica canvia com es mostra una [classe](topic:classes) **només en aquesta finestra gràfica**.

1. Obriu el full i seleccioneu una finestra gràfica.
2. Obriu el tauler de classes (`CLASSES`) i trieu la classe.
3. Sota {{ui:Aquesta finestra gràfica}}, marqueu {{ui:Amaga en aquesta finestra gràfica}}, o definiu {{ui:Color aquí}}, {{ui:Gruix aquí}} o {{ui:Farciment aquí}}.

La llista de sota mostra totes les classes que aquesta finestra gràfica canvia. {{ui:Esborra les excepcions d'aquesta finestra gràfica}} les treu totes. Cada canvi és un pas per desfer.

## Què canvia una excepció

- **Amaga** amaga la classe i totes les classes que en depenen, en aquesta finestra gràfica.
- **Color, gruix de línia i farciment** canvien els objectes de la classe la valor dels quals no s'ha definit a l'objecte mateix, és a dir, els objectes que la prenen de la classe o de la capa. Un objecte amb color propi el manté, igual que passa amb una excepció de capa de finestra gràfica.

Les excepcions es mostren a la pantalla i als traçats i PDF, inclòs un joc de fulls publicat a PDF. Funcionen juntament amb les capes congelades i les excepcions de capa de la finestra gràfica.

Les excepcions es desen amb el dibuix en DWG i DXF (amb la llista de classes, al bloc `CADCRAFT_CLASSES`) i tornen a la mateixa finestra gràfica quan el fitxer s'obre a CadCraft.

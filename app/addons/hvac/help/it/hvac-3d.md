---
title: HVAC: canali nella scheda 3D
summary: Ogni tratta di canale è anche un solido nella scheda 3D di CadCraft, costruito dalla stessa tratta e tenuto aggiornato mentre si disegna.
keywords: 3d, solido, modello, canalizzazioni, quota, fondo del canale, etichetta, glb, coordinamento
from: e5774345
---

## La stessa tratta in 3D

Ogni tratta di canale è costruita come un unico solido chiuso nella scheda {{ui:3D}}, alla sua quota (il fondo del canale), con le sue curve, transizioni e diramazioni. Viene ridisegnata nello stesso passaggio ogni volta che la tratta cambia, quindi {{ui:Annulla}} riporta indietro insieme il 2D e il 3D.

I solidi portano l'etichetta `HVAC ductwork`: per nasconderli o mostrarli tutti, usare le etichette della scheda 3D. Ogni sistema ha il suo colore.

## Costruirli di nuovo

{{cmd:DUCT3D}} ricostruisce il solido di ogni tratta ed elimina i solidi di tratte che non esistono più. Usarlo dopo aver aperto un disegno modificato senza il componente HVAC (le sue tratte si sono spostate, ma i loro solidi no), oppure dopo aver riattivato i solidi.

Per disegni molto grandi, disattivare i solidi in {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:HVAC}} › {{ui:Solidi nella scheda 3D}}; i solidi già presenti restano finché non vengono eliminati nella scheda 3D.

## Senza l'add-on

Un solido è un normale gruppo 3D. Viene salvato con il disegno (DWG e DXF), appare nella scheda {{ui:3D}} ed è esportato in GLB, OBJ e STL insieme al resto, con o senza HVAC attivo.

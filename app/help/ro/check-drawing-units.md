---
title: Verificarea unităților de măsură ale unui desen
summary: Aflați dacă un desen deschis este în milimetri, în inchi sau în altă unitate, verificați prin măsurare și aflați de ce un alt program poate indica unități diferite pentru același DXF.
keywords: unități, ce unități, care unități, verificare unități, milimetri, mm, inchi, metric, imperial, unități DXF, STEP în DXF, unități greșite, inchi sau mm, INSUNITS, MEASUREMENT, unități desen, DXF PartCraft
from: c0ee75bb
---

## Ce veți face

Aflați ce înseamnă o unitate dintr-un desen deschis și asigurați-vă că numerele pe care le citiți au dimensiunea pe care o așteptați.

## Pași

1. Deschideți desenul, apoi apăsați {{key:Esc}} ca nimic să nu fie selectat, pe fila {{ui:Model}}.
2. În panoul din dreapta, sub {{ui:Setări curente}}, citiți {{ui:Unități}}. Acolo scrie ce reprezintă o unitate a desenului: {{ui:Milimetri}}, {{ui:Inchi}}, {{ui:Picioare}} și așa mai departe. Un DXF salvat din PartCraft indică {{ui:Milimetri}}.
3. Verificați printr-o măsurătoare a ceva a cărui dimensiune o cunoașteți. Tastați {{cmd:DIST}} și alegeți cele două capete ale unei muchii sau ale unei găuri. Dacă o piesă pe care o cunoașteți de 25 mm apare ca `25`, desenul este în milimetri; dacă apare ca aproximativ `0.98`, desenul este în inchi.

{{ui:Fără unități}} înseamnă că fișierul nu spune. CadCraft tratează atunci desenul ca unitatea hârtiei (milimetri pe hârtie ISO, inchi pe hârtie US), iar numerele sunt doar atât de corecte cât programul care le-a scris.

## Dacă unitățile sunt greșite

Schimbarea {{ui:Unități}} **nu redimensionează nimic**: numerele rămân aceleași, se schimbă doar ce înseamnă ele. Așadar setați-o doar ca să spuneți ce este desenul în realitate. Dacă numerele sunt milimetri, iar {{ui:Unități}} spune {{ui:Inchi}}, alegeți {{ui:Milimetri}}. Dacă aveți nevoie de geometrie în alte unități, scalați-o cu {{cmd:SCALE}} (25.4 de la inchi la milimetri, 1/25.4 în sens invers) și apoi setați {{ui:Unități}}.

Modul în care se scriu lungimile (zecimal, picioare și inchi, fracții) este o setare separată, {{ui:Format lungime}}: vezi [Unități, formate de hârtie și scări](topic:units-papers-scales).

## De ce alt program poate spune inchi

Un DXF își declară unitățile în antet. Cel mai vechi tip de DXF, R12, nu avea deloc o variabilă de unități, deci un program care citește R12 strict ignoră ce este scris acolo și folosește propriul implicit, care este adesea inchi. Geometria din fișier este aceeași în ambele cazuri: diferă doar eticheta. PartCraft scrie fișierele DXF ca R12 și declară milimetrii în două feluri (`$INSUNITS` 4 și `$MEASUREMENT` 1), ca mai multe programe să le citească corect. Dacă un program tot spune inchi, setați-i unitățile la milimetri când deschideți fișierul.

Aducerea unui fișier într-un desen (nu deschiderea lui) îi convertește unitățile: vezi [Unități la import](topic:units-on-import).

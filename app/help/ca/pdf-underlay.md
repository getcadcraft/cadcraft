---
title: Fons PDF i importació de PDF
summary: Posa una pàgina PDF sota el dibuix per calcar-la i traçar-la, o converteix les línies i el text de la pàgina en objectes de dibuix.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, fons, calc, importa pdf, escaneig, planta, esvaeix, retall, capes, pas, obre pdf
from: aa301d0f
---

## Dues maneres d'incorporar una pàgina PDF

- **Adjunta** ({{cmd:PDFATTACH}}) manté el PDF com una imatge sota el dibuix. El calques, hi ajustes el cursor, l'esvaeixes, li fas un retall, i s'imprimeix amb el full. El dibuix només guarda el nom del fitxer.
- **Importa** ({{cmd:PDFIMPORT}}) converteix les línies, les corbes, els farciments i el text de la pàgina en objectes de dibuix normals, en capes amb el nom del PDF. Són teus per editar-los, i després ja no cal el PDF.

Obrir un PDF amb {{ui:Open}} pregunta quina de les dues vols.

## Adjunta una pàgina

1. Escriu `PDFATTACH` (o `PDFATT`) i tria el PDF. Si té diverses pàgines, escriu el número de pàgina.
2. Fes clic al punt d'inserció (la cantonada inferior esquerra de la pàgina).
3. Prem {{key:Enter}} per a la mida real de la pàgina, o escriu l'escala: unitats de dibuix per punt PDF (un punt és 1/72 de polzada, així que 0.3528 en un dibuix en mil·límetres).
4. Prem {{key:Enter}} per no girar-la, o escriu un angle.

La pàgina és un objecte com una referència de bloc: mou-la, gira-la, escala-la, copia-la, esborra-la i posa-la en una capa. Desactiva la seva capa i desapareix. Amplia el zoom i la pàgina es torna a dibuixar nítida.

## Calca-la

Amb {{ui:Snap}} activat, el cursor s'ajusta a les línies pròpies del PDF: extrems, punts mitjans i interseccions (i {{ui:Nearest}} quan aquesta referència està activada). El text format per lletres a la pàgina no s'ajusta.

## Ajusta-la

- `PDFADJUST`: **Esvaeix** (0 a 80 per cent), **Contrast** (0 a 100), **Monocrom**, i **Onoff** per amagar-la sense esborrar-la.
- `PDFCLIP`: mostra només un rectangle o un polígon de la pàgina; **Suprimeix** elimina el retall.
- `PDFLAYERS`: un PDF pot tenir les seves pròpies capes. L'ordre les llista; escriu un número per activar o desactivar aquella capa només per a aquest fons. Les capes que el fitxer té desactivades comencen desactivades.

## Traça i desa

PLOT traça la pàgina com a línies, farciments i text (així es manté nítida i es pot cercar). Les imatges dins del PDF es mostren a la pantalla però encara no s'imprimeixen.

Un DWG o un DXF 2000 guarda el fons com a enllaç: el nom del fitxer, la pàgina, on es troba, la seva escala, el gir, el retall, l'esvaïment i el contrast. El PDF en si no és dins del dibuix. Torna a obrir el dibuix, escriu `PDF` i torna a triar el fitxer; mentre no ho facis, les pàgines es mostren com a marcs i prenen la seva mida real només quan ho fas. El DXF antic (R12) no té fons: guarda el marc i el nom. No s'ha comprovat encara com llegeixen el retall i l'escala desats les altres aplicacions.

## Importa una pàgina

1. Escriu `PDFIMPORT` (o `PDFIM`) i tria el PDF i la pàgina.
2. Fes clic on ha d'anar la cantonada inferior esquerra de la pàgina.
3. Prem {{key:Enter}} per a la mida real, escriu una escala, o tria **Dos punts**: la pàgina es dibuixa a la mida real, després fas clic en dos punts d'una distància que coneguis i escrius la distància real; tot s'escala en conseqüència.

Les línies es converteixen en línies i polilínies, es reconeixen cercles i arcs, les formes amb farciment es converteixen en trames sòlides, i el text esdevé text en una capa que acaba en `-TEXT`. És un sol pas per desfer. Les imatges del PDF no s'importen: adjunta la pàgina en lloc seu. Un escaneig (una pàgina que només és una imatge) no té línies per importar.

Els PDF es llegeixen com a fitxers no fiables: no s'executa cap script, i una pàgina molt gran es talla i se n'informa.

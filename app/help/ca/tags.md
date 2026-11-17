---
title: Etiquetes: atributs que alimenten els quadres
summary: Definir una etiqueta (el seu tipus, els valors que pot prendre, els blocs als quals s'aplica), assignar-la a referències de bloc i llistar les referències en un quadre que podeu desar com a CSV.
keywords: etiquetes, etiqueta, atribut, quadre, extracció de dades, propietat, classificació contra incendis, llista de selecció, referència de bloc, TAGS, csv
from: 9b90bacc
---

Una **etiqueta** és un atribut de bloc amb una definició: quin tipus de valor conté, quins valors estan permesos i a quins blocs s'aplica. Els valors són atributs de bloc normals, de manera que qualsevol altre programa els llegeix i {{cmd:ATTEDIT}} els mostra. Només les definicions són noves, i es guarden al dibuix.

## Definir i assignar

Escriviu {{cmd:TAGS}} i trieu:

- {{ui:Defineix}}: un nom (lletres, dígits, espai, `_ . -`), un tipus (`text`, `number`, `integer`, `yesno`, `length`, `angle`), els valors permesos separats per `;` (deixeu-ho buit per a qualsevol valor), i els noms de bloc als quals s'aplica (`DOOR*` coincideix amb tots els blocs que comencen per DOOR; buit vol dir tots els blocs).
- {{ui:Joc}}: amb referències de bloc seleccionades, escriviu `FireRating=60 min; Width=850`. Un valor fora de la llista permesa, o que no sigui un nombre en una etiqueta numèrica, es rebutja i se n'indica el motiu. Un sol pas de desfer. Un bloc que no té l'atribut el rep com a atribut ocult.
- {{ui:Quadre}}: totes les referències a un bloc al qual s'aplica una etiqueta, agrupades opcionalment per una etiqueta o pel nom del bloc, imprimides i desades com a CSV.
- {{ui:Elimina (R)}}: oblida una definició; els valors es mantenen a les referències.

Canviar el nom d'una etiqueta canvia els seus valors a cada referència. Els noms d'etiqueta no distingeixen entre majúscules i minúscules, igual que els noms d'atribut.

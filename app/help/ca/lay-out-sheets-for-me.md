---
title: Organitza els fulls automàticament
summary: Poseu les parts d'un dibuix en fulls automàticament: CadCraft tria una mida de paper i una escala estàndard que hi càpiga, col·loca cada part amb un caixetí i l'escala a sota, i tot és editable.
keywords: fulls, presentacions, paper, escala, automàtic, AUTOSHEET, caixetí, finestres gràfiques, vistes amb nom
from: 7f315dff
---

Trieu **Vista › Més › Organitza els fulls automàticament** (o escriviu {{cmd:AUTOSHEET}}). CadCraft troba les parts del dibuix (les vistes amb nom o els grups separats del model), tria una mida de paper i una escala estàndard a la qual hi càpiguen, i les posa en fulls nous amb un caixetí, un rètol i l'escala sota cada una.

Abans d'executar-se, podeu canviar-ne el funcionament: **Parts** (vistes amb nom, grups, tot el dibuix, o deixeu que ho decideixi CadCraft), **Paper** (automàtic o una mida com `iso-a1`), **Escala** (una escala per a totes, o cada part a la seva) i **Fulls** (quantes parts comparteixen un full).

Els fulls són fulls normals: moveu una finestra gràfica, canvieu-ne l'escala o suprimiu un full com de costum. Premeu {{key:Ctrl+Z}} una sola vegada per desfer tots els fulls nous.

## Notes clau

A {{cmd:AUTOSHEET}} trieu **Notes clau** per afegir una llegenda numerada sota les vistes de cada full. Llista les capes dibuixades en aquestes vistes, una línia numerada per cada una, com a text pla que podeu editar com qualsevol altre text. Trieu **Fitxer** per llegir la vostra pròpia llista de notes (un número i les seves paraules per línia, separats per un tabulador, una coma o un punt i coma): una capa el nom de la qual coincideix amb un número de la llista pren les seves paraules. No hi ha cap llista de notes amb l'aplicació.

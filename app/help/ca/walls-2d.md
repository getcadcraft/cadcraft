---
title: Dibuixa murs, portes i finestres intel·ligents en 2D
summary: Dibuixeu murs com una polilínia, uniu-los netament i inseriu portes i finestres que es mouen amb el mur. Tot és 2D, sense model 3D.
keywords: mur, murs, WALL, WA, porta, DOOR, DR, finestra, WINDOW, WN, DELOPENING, mur intel·ligent, plànol de planta, batent, frontissa, obertura
from: 45845d49
---

Els murs aquí són objectes de dibuix 2D. No creen cap model 3D, de manera que un plànol es manté tan lleuger com un dibuix de línies. Per a un model d'edifici, useu BimCraft.

## Dibuixa murs

Escriviu `WALL` (`WA`), o trieu {{ui:Mur}} al menú {{ui:Més}} del grup {{ui:Dibuix}}, i després feu clic en punts com faríeu amb una polilínia. Premeu {{key:Enter}} per acabar, o escriviu `C` per tancar l'estança.

- `T` defineix el gruix.
- `J` indica a què segueixen els vostres clics: el centre del mur, o la seva cara esquerra o dreta.
- `F` defineix el farciment: cap, sòlid o trama.

Les cantonades fan bisell per elles mateixes. Un mur que acaba dins del gruix d'un altre s'uneix a ell en una T neta, i els murs que es creuen s'obren l'un a l'altre. Les unions es desen amb els murs. Per a rectangles, polígons, arcs, talls, bloquejos i la resta, vegeu "Formes, talls, desplaçaments i bloquejos per als murs 2D".

## Afegeix portes i finestres

Escriviu `DOOR` (`DR`) o `WINDOW` (`WN`) i feu clic en un mur. Una porta obre cap al costat del mur on feu clic. `W` defineix l'amplada, `Y` el tipus i `H` el costat de la frontissa. Seguiu fent clics per col·locar-ne més, i premeu {{key:Enter}} per acabar. Les portes poden ser simples, dobles, corredisses o una entrada oberta. Les finestres poden ser fixes, de batent o corredisses.

## Canvieu-les

Seleccioneu un mur per veure'n les nanses:

- Les nanses de final estiren el mur. Els murs units a ell el segueixen.
- La nansa del mig mou el mur.
- Una nansa sobre una obertura la fa lliscar al llarg del mur.
- Les fletxes canvien la frontissa i el batent d'una porta.

Propietats mostra el gruix, el farciment i cada obertura: tipus, amplada, posició, frontissa, batent, mostrada oberta o tancada, i {{ui:Elimina (R)}}. `DELOPENING` treu l'obertura més propera al punt on feu clic.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` i `ERASE` funcionen com de costum. Les portes i finestres van amb el seu mur, els murs units conserven les seves unions, i un {{ui:Desfés}} ho desfà tot.

## En altres programes

Cada mur es desa com a bloc normal, de manera que altres programes CAD el mostren correctament i el poden moure, però no el poden editar com a mur. `EXPLODE` converteix un mur en línies i arcs senzills, i deixa de ser un mur.

---
title: Organitza un dibuix amb classes
summary: Les classes ordenen els objectes d'una segona manera, a través de les capes (Lighting-Fixtures-Spot): mostra'ls i amaga'ls, dona'ls un color, tipus de línia, gruix de línia, farciment i estil de text que els objectes poden prendre «per classe», i defineix la classe on van els objectes nous.
keywords: classe, classes, CLASSES, CLS, CLASS, per classe, ByClass, classe activa, usa en crear, Cap, capa de disseny, escala de capa, elevació, Vectorworks
from: 672de9cb
---

Les capes indiquen *on* pertany un objecte al dibuix; les classes indiquen *què* és. Un mur de la capa `Level 1` pot estar a la classe `Walls-Exterior`, i un llum puntual de la capa `Ceiling` a la classe `Lighting-Fixtures-Spot`. Pots amagar tots els llums de totes les capes d'una vegada, o fer que tots els murs exteriors surtin més gruixuts en el traçat, sense moure res entre capes.

Tots els objectes comencen a la classe **Cap**. Un dibuix sense classes pròpies funciona exactament com abans.

## Obre el tauler de Classes

Escriu `CLASSES` (o `CLS`) i prem {{key:Enter}}, o tria {{ui:Classes…}} al menú {{ui:Més}} del grup {{ui:Vista}}. El tauler s'obre sobre el dibuix i es manté obert mentre dibuixes.

- **Afegeix una classe:** escriu-ne el nom a la casella de dalt i prem {{key:Enter}}. Un `-` crea un nivell: `Lighting-Fixtures-Spot` queda sota de `Lighting-Fixtures`, que queda sota de `Lighting`; els nivells que falten s'afegeixen automàticament.
- **Mostra o amaga:** l'ull al costat d'una classe. Amagar una classe amaga totes les classes que hi ha sota, a la pantalla i al paper.
- **Classe activa:** el botó rodó. Els objectes nous que dibuixes van a la classe activa.
- **Tria una classe:** fes clic sobre el seu nom. Els botons i la configuració de sota la llista actuen llavors sobre aquesta classe.

El número al final de cada fila és quants objectes hi ha en aquesta classe (al model, a les presentacions i dins de les definicions de bloc).

## Posa objectes en una classe

Selecciona els objectes, tria una classe al tauler i escull {{ui:Assigna la classe}}. Marca primer {{ui:Per classe}} perquè prenguin el color, el tipus de línia, el gruix de línia, el farciment i l'estil de text de la classe. També pots:

- escriure `CLASS` amb objectes seleccionats i introduir un nom de classe (un nom nou crea la classe);
- escriure `CLASS` sense res seleccionat per definir la classe activa; `?` llista les classes amb els seus recomptes;
- usar la secció {{ui:Classe}} del tauler Propietats: la classe, i un interruptor {{ui:… per classe}} per al color, el tipus de línia i el gruix de línia (farciment per a trames, estil de text per a textos);
- seleccionar per classe amb `QSELECT`: escull la propietat {{ui:Classe}}.

{{ui:Selecciona els seus objectes}} selecciona tots els objectes de la classe triada a la presentació oberta (o al model).

## Com es dibuixa un objecte: objecte, classe, capa

El color, el tipus de línia, el gruix de línia, el farciment i l'estil de text d'un objecte poden ser **per classe**, igual que poden ser per capa. CadCraft mira en aquest ordre:

1. El valor propi de l'objecte, tret que aquest valor sigui per classe.
2. El valor de la classe, quan l'objecte el pren per classe i la classe en té un.
3. El valor de la capa.

Una classe el color (o el tipus de línia…) de la qual és {{ui:No definit}} passa l'objecte a la seva capa. Tria una classe i defineix el seu {{ui:Color}}, {{ui:Tipus de línia}}, {{ui:Gruix de línia}}, {{ui:Farciment (trames)}} i {{ui:Estil de text}} sota els botons. Marca {{ui:Usa en crear}} perquè els objectes nous dibuixats en aquesta classe prenguin tots aquests valors per classe.

Cada canvi al tauler és un pas de {{ui:Desfés}}.

## Reanomena i suprimeix

{{ui:Reanomena}} edita el nom al lloc: prem {{key:Enter}} per mantenir-lo i {{key:Esc}} per sortir. Les classes que hi ha sota segueixen el canvi (`Lighting-Spot` passa a `Light-Spot` quan `Lighting` passa a `Light`), i també ho fan els seus objectes i les substitucions de classe de les finestres gràfiques.

{{ui:Suprimeix}} elimina la classe i totes les classes que hi ha sota. Els seus objectes passen a **Cap**. Un {{ui:Desfés}} ho recupera tot. **Cap** no es pot reanomenar ni suprimir.

## Capes de disseny

Sota {{ui:Capes de disseny}} cada capa pot tenir una escala (`1:50`) i una elevació. Una capa de disseny és una capa qualsevol: l'espai model i les presentacions funcionen com abans, i l'escala i l'elevació es guarden amb el dibuix per a les eines que les faran servir.

## En fitxers DWG i DXF

Les classes es guarden en totes les versions de DWG que CadCraft desa i en DXF (R12 i 2000). La classe de cada objecte és la seva pròpia dada estesa (aplicació `CADCRAFT_CLASS`), de manera que AutoCAD i altres programes la conserven amb l'objecte. La llista de classes, els colors i la visibilitat es guarden en un únic bloc no utilitzat anomenat `CADCRAFT_CLASSES`; si un altre programa purga aquest bloc, CadCraft igualment troba la classe de cada objecte i les classes tornen amb la configuració per defecte.

Els altres programes no coneixen les classes: dibuixen cada objecte amb els seus valors propis o els de la seva capa.

Consulta també [Substitucions de classe per finestra gràfica](topic:viewport-overrides) i [Organitza un dibuix amb capes](topic:layers).

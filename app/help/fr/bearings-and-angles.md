---
title: Saisir et afficher les gisements et les angles en degrés, minutes, secondes
summary: Saisissez une direction sous forme de gisement de géomètre, comme N45°23'30"E, ou en degrés-minutes-secondes partout où un angle est demandé, et choisissez l'affichage des angles avec AUNITS.
keywords: gisement, gisements, géomètre, gisement en quadrant, N45E, degrés minutes secondes, DMS, angle, direction, lot, lots, implanter, cheminement, AUNITS, ANGUNITS, format des angles, polaire, distance directe, DIST
from: af805567
---

Partout où CadCraft demande un **angle ou une direction**, vous pouvez saisir un **gisement en quadrant** ou un angle en **degrés, minutes et secondes**, aussi bien qu'un simple nombre de degrés.

## Gisements

Un gisement indique le nord ou le sud, un angle allant jusqu'à 90°, puis l'est ou l'ouest :

| Vous saisissez | Direction |
|---|---|
| `N45°23'30"E` ou `N45d23'30"E` | 45°23'30" à partir du nord vers l'est |
| `S10-30-00W` ou `S 10 30 W` | 10°30' à partir du sud vers l'ouest (tirets ou espaces entre les parties) |
| `N45.5E` | 45.5° à partir du nord vers l'est |
| `N`, `E`, `S`, `W` | plein nord, est, sud, ouest |

Les lettres peuvent être en minuscules ou en majuscules. En espagnol, `O` signifie aussi ouest (oeste). `d` et `°` ont le même sens ; `'` correspond aux minutes et `"` aux secondes.

Pour implanter une ligne de lot de 20 m à N45°23'E, lancez {{cmd:LINE}} et tapez le premier point, puis `@20<N45d23'E`. Cela fonctionne de même à l'invite d'angle de {{cmd:ROTATE}}, à toute autre invite qui demande un angle, et dans la case d'angle de {{ui:Saisie dynamique}}.

## Degrés, minutes, secondes

`45°23'30"`, `45d23'30"`, `45d30'` ou `45d` est un angle à partir de l'axe X, dans le sens antihoraire. Le `°` ou le `d` est nécessaire : `45-23-30` est lu comme un calcul (45 − 23 − 30). Les minutes et les secondes doivent être inférieures à 60. Un simple nombre, avec un calcul (`360/7`), fonctionne toujours.

## Affichage des angles

Tapez {{cmd:AUNITS}} (ou choisissez {{ui:Format des angles}} dans {{ui:Propriétés}} › {{ui:Réglages actuels}}) et choisissez :

- **Degrés décimaux** (par défaut) : `44.6083°`.
- **Degrés-minutes-secondes** : `44°36'30"`.
- **Gisements de géomètre** : `N45°23'30"E`.

La précision suit ce que vous tapez pour {{cmd:AUNITS}} : 0 affiche les degrés, 2 les minutes, 4 les secondes, et 5 à 8 ajoutent des décimales de seconde. Le format s'affiche dans {{cmd:DIST}}, dans la barre d'état, dans la saisie dynamique et les infobulles de repérage, ainsi que dans les cases d'angle de {{ui:Propriétés}} (une case que vous modifiez accepte l'une des formes ci-dessus). C'est une étape d'annulation, et il est enregistré dans les fichiers DWG et DXF (`$AUNITS`, `$AUPREC`) ; LISP le lit et l'écrit sous `AUNITS` et `AUPREC`.

---
title: Points pour les programmes BIM
summary: Exportez les points, et les points d'insertion des blocs avec une description, dans un fichier CSV ou TXT que les programmes BIM et de topographie importent.
keywords: exportpoints, exporter les points, points, csv, txt, pnezd, penzd, xyz, points topographiques, coordonnées, bim, implantation, fichier de points, nord, est, altitude
from: d80e2d53
---

## Ce que vous allez réaliser

Un fichier de points : une ligne par point, avec son numéro, son nord, son est, son altitude et sa description, que les programmes BIM (Revit et Archicad notamment) et les logiciels de topographie peuvent importer pour placer des points topographiques, des repères de chantier ou des équipements.

## Exporter les points

1. Sélectionnez les points et les références de blocs dont vous voulez les points d'insertion, ou ne sélectionnez rien pour prendre tous les points.
2. Tapez {{cmd:EXPORTPOINTS}} (ou `EXPPTS`, ou {{ui:Blocs}} › {{ui:Plus}} › {{ui:Exporter les points}}) et appuyez sur {{key:Enter}}
   (appuyez de nouveau sur {{key:Enter}} à `Sélectionnez des points et des blocs` si rien n'était sélectionné).
3. Lorsque vous avez choisi des blocs avec attributs, CadCraft liste leurs repères : tapez celui dont la valeur est la description (par exemple `ITEM`), ou autre chose pour utiliser le nom de chaque bloc.
4. Choisissez les colonnes : `PNEZD` (point, nord, est, altitude, description : le choix habituel), `PENZD` (est avant nord) ou `XYZ` (seules les coordonnées).
5. Choisissez les unités : `D` telles que dessinées, ou `M` mètres ou `F` pieds (seulement lorsque les unités du dessin sont réglées : {{ui:Propriétés}} › {{ui:Unités}} sans sélection).
6. Avec un SCU défini, choisissez `W` monde ou `U` coordonnées SCU (voir [SCU et vue tournée](topic:ucs-and-turned-view)).
7. Choisissez `C` pour un `.csv` séparé par des virgules ou `T` pour un `.txt` séparé par des tabulations, puis le premier numéro de point.

Le fichier se télécharge sous le nom `<drawing>-points.csv` (ou `.txt`), et l'historique indique combien de points il contient.

## Contenu du fichier

- Un point par ligne, suivi d'un saut de ligne (CR LF), trois décimales.
- L'altitude d'un point est son Z (0 s'il n'en a pas). Le point d'un bloc est son point d'insertion.
- Une description contenant une virgule (ou une tabulation dans un TXT) ou un guillemet est mise entre guillemets doubles, ses guillemets étant doublés.
- Le format est celui que CivilCraft lit et écrit, de sorte que le fichier s'ouvre aussi là-bas comme des points.

## Erreurs courantes

- Seul `D` est proposé pour les unités : le dessin n'a pas d'unités réglées. Réglez-les, ou convertissez dans l'autre programme.
- Les points sont loin de l'endroit attendu dans l'autre programme : exportez les coordonnées monde (`W`), ou le SCU que le point topographique de l'autre programme utilise (`U`).

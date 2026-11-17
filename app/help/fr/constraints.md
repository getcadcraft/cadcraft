---
title: Contraindre un dessin
summary: Garder les lignes horizontales, les extrémités réunies et les cotes fixes avec des contraintes géométriques et dimensionnelles, et laisser le dessin suivre lorsque vous modifiez une cote.
keywords: contrainte, contraintes, paramétrique, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, degrés de liberté, entièrement contraint
from: f8f21fa4
---

## Ce que vous allez réaliser

Une plaque dont vous modifiez la largeur à un seul endroit : ses côtés restent d'équerre, un coin reste en place, et sa hauteur reste égale à la moitié de sa largeur.

Les contraintes s'appliquent aux lignes, polylignes, cercles, arcs et points de l'onglet {{ui:Modèle}}. Chaque contrainte que vous ajoutez correspond à une étape d'annulation.

## Dessiner et contraindre le contour

1. Tapez `REC` et appuyez sur {{key:Enter}}. Tapez `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Tapez `AUTOCONSTRAIN` et appuyez sur {{key:Enter}}. Tapez `ALL`, {{key:Enter}}, puis {{key:Enter}} à nouveau.

   L'historique indique « 4 contraintes appliquées ». De petites cases portant **H** et **V** apparaissent à côté des côtés : ce sont les barres de contraintes.
3. Tapez `GCFIX` et appuyez sur {{key:Enter}}. Cliquez près du coin inférieur gauche. Une case avec ⊕ apparaît : ce coin reste à sa place.

`AUTOCONSTRAIN` ajoute des contraintes de coïncidence là où les extrémités se touchent presque, et des contraintes horizontales ou verticales là où les lignes sont presque à niveau ou d'aplomb. Tapez `S` à son invite pour modifier la proximité retenue (0.05 unité de dessin et 1° au départ).

## Ajouter les cotes

1. Tapez `DCHORIZONTAL` et appuyez sur {{key:Enter}}.
2. Cliquez près du coin inférieur gauche, puis près du coin inférieur droit.
3. Cliquez sous le rectangle pour la ligne de cote.
4. L'invite affiche `Dimension text <d1=100>`. Tapez `width=120` et appuyez sur {{key:Enter}}.

   Le rectangle fait maintenant 120 de large, et le libellé indique `width=120`.
5. Tapez `DCVERTICAL` et appuyez sur {{key:Enter}}, tapez `O` et appuyez sur {{key:Enter}}, puis cliquez sur le côté droit.
6. Cliquez à droite de celui-ci, tapez `width/2` et appuyez sur {{key:Enter}}.

   Il mesure 60 de haut. Le libellé indique `fx: d1=width/2` : une expression le pilote.

L'historique indique maintenant que le contour est entièrement contraint. Pour modifier sa taille, changez `width` (voir [Utiliser les paramètres et les équations](topic:parameters)), ou double-cliquez sur le libellé `width=120`, tapez une nouvelle valeur et choisissez {{ui:Appliquer}}.

## Déplacer des objets contraints

Déplacer, faire pivoter, mettre à l'échelle, les poignées et le panneau Propriétés conservent toutes les contraintes : ce que vous déplacez est maintenu, et le reste suit. Lorsque les contraintes ne peuvent pas suivre, la modification n'est pas effectuée et l'historique indique pourquoi, par exemple « Non effectué : les contraintes maintiennent cet objet à sa place ». Effacer un objet supprime aussi ses contraintes.

## Symétrie et ajustement d'objets contraints

- {{cmd:MIRROR}} copie sur les copies les contraintes entre les objets que vous symétrisez. Les côtés (le sens dans lequel une tangente touche, le côté par rapport auquel une distance est mesurée) sont recalculés pour la copie symétrique, et les cotes copiées reçoivent leurs propres noms, comme lors d'un collage. Avec `Erase source objects` `Y`, les contraintes restent sur les objets symétrisés. L'historique indique combien ont été transférées.
- {{cmd:TRIM}} conserve sur ce qui reste les contraintes d'une ligne ou d'un arc : une contrainte sur une extrémité passe au morceau qui possède encore cette extrémité, une règle de direction ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Parallèle}}, {{ui:Perpendiculaire}}) reste valable sur chaque morceau, et une cote entre les deux extrémités extérieures continue de les mesurer. Les contraintes qui maintenaient la partie coupée, ou une longueur modifiée par la coupe ({{ui:Égale}}, l'angle balayé d'un arc), sont supprimées. Un cercle ajusté conserve ses contraintes de centre et de rayon. Les polylignes ajustées perdent les leurs.

## Les contraintes

| Commande | Conserve |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | une ligne ou un segment à niveau ou d'aplomb (`2P` : deux points à niveau ou d'aplomb) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | deux lignes parallèles, perpendiculaires ou sur une même droite |
| {{cmd:GCCOINCIDENT}} | deux points confondus ; `O` : un point sur une ligne, un cercle ou un arc |
| {{cmd:GCTANGENT}} | une ligne et un cercle ou un arc, ou deux d'entre eux, tangents |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | deux cercles ou arcs de même centre ; deux longueurs ou deux rayons égaux |
| {{cmd:GCSYMMETRIC}} | deux points, lignes ou cercles symétriques par rapport à une ligne |
| {{cmd:GCFIX}} | un point (cliquez près de lui) ou un objet entier (`O`) à sa place |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | une distance |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | un rayon, un diamètre, un angle entre deux lignes ou l'angle d'un arc |

{{cmd:GEOMCONSTRAINT}} et {{cmd:DIMCONSTRAINT}} demandent laquelle utiliser ; {{ui:Contraindre}} et {{ui:Cote}} du groupe {{ui:Paramétrique}} les lancent, et {{ui:Plus}} y affiche chacune. L'endroit où vous cliquez choisit la partie concernée : un clic près d'une extrémité, au milieu ou sur un centre retient ce point ; un clic sur une polyligne retient le segment situé dessous. Le premier objet reste en place, et le second se déplace pour le rejoindre.

Une contrainte qui entre en conflit avec d'autres, ou qui n'apporte rien parce que les autres l'impliquent déjà, est refusée avec un message, et rien ne bouge.

## Voir, sélectionner et supprimer

- Cliquez sur une case d'une barre de contraintes (ou sur un carré de coïncidence, ou sur un libellé de cote) pour sélectionner cette contrainte ; l'historique la nomme. Appuyez sur {{key:Delete}} pour la supprimer.
- {{cmd:DELCONSTRAINT}} supprime toutes les contraintes des objets que vous sélectionnez.
- {{cmd:CONSTRAINTBAR}} : `S` affiche toutes les barres, `H` les masque ; sélectionnez d'abord des objets pour afficher ou masquer les leurs. {{ui:Plus}} propose {{ui:Afficher les barres de contraintes}} et {{ui:Masquer les barres de contraintes}}.
- {{cmd:DCDISPLAY}} affiche ou masque les contraintes dimensionnelles. Elles ne sont jamais tracées.
- {{cmd:DCCONVERT}} transforme les cotes tracées sur des lignes, des cercles et des arcs en contraintes dimensionnelles.

:::note
Si vous avez déjà utilisé le dessin paramétrique d'AutoCAD, les noms de commandes et les invites sont les mêmes. Les contraintes et les paramètres sont enregistrés dans les fichiers DWG et DXF sous une forme que les autres logiciels ignorent ; voir [Fichiers](topic:files#constraints-in-files).
:::

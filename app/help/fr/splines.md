---
title: Splines et polylignes : SPLINE, SPLINEDIT, PEDIT
summary: Tracez une courbe lisse passant par des points ou à partir d'un polygone de contrôle, modifiez son ajustement et ses points de contrôle, éditez les polylignes (joindre, fermer, largeur, ajuster, spline, décourber) ou transformez une spline en polyligne.
keywords: spline, splinedit, spl, spe, pedit, pe, points d'ajustement, points de contrôle, poids, nurbs, édition de polyligne, joindre, courbe d'ajustement, décourber, convertir en polyligne, précision, tangente, courbe, tolérance d'ajustement
from: d31f72d8
---

## Ce que vous allez créer

Une courbe passant par cinq points, puis cette même courbe modifiée de trois façons, et une polyligne construite à partir de trois lignes.

## Tracer une spline par des points

1. Saisissez `SPL` puis appuyez sur {{key:Enter}}.
2. Cliquez ou saisissez les points par lesquels la courbe doit passer : `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Appuyez sur {{key:Enter}} après le dernier.
3. {{ui:Tangente de départ}} : cliquez sur un point vers lequel la courbe doit partir, ou appuyez sur {{key:Enter}} pour qu'elle décide. Procédez de même pour la tangente de fin.

La courbe passe par chaque point. Saisissez `C` au lieu d'appuyer sur {{key:Enter}} pour la fermer (la courbe revient au premier point). {{key:U}} (`Annuler`) retire le dernier point pendant le tracé.

### Tracer à partir d'un polygone de contrôle

Saisissez `M` à la première invite, puis `C` (Sommets de contrôle) et un degré de 1 à 5 (3 est le plus courant). Les points que vous choisissez sont alors les sommets d'un polygone qui attire la courbe vers eux ; la courbe part du premier et se termine sur le dernier. Une courbe fermée s'enroule, sans angle à la jonction.

### Transformer une polyligne en spline

À la première invite, saisissez `O` (Objet) et sélectionnez des polylignes ou des lignes. Elles deviennent des splines passant par leurs sommets ; les originaux sont supprimés.

## Modifier une spline

Sélectionnez-la puis saisissez `SPE` (ou saisissez `SPE` puis cliquez dessus). Les poignées affichent les points d'ajustement (ou les points de contrôle d'une spline qui n'en a pas) : faites glisser l'un d'eux pour remodeler la courbe. À l'invite :

- **Données d'ajustement** (une spline tracée par des points) : `A` ajoute un point d'ajustement (cliquez à l'endroit voulu), `D` supprime un point (cliquez à proximité), `M` déplace un point (cliquez à proximité, puis à son nouvel emplacement), `T` définit les tangentes de fin, `P` purge les points d'ajustement, de sorte que la spline soit ensuite modifiée par ses points de contrôle.
- **Modifier le sommet** : `A` ajoute un point de contrôle sans modifier la courbe, `M` en déplace un, `W` lui attribue un **poids** (au-dessus de 1, la courbe s'en rapproche ; en dessous de 1, elle s'en éloigne).
- **Ouvrir** ou **Fermer**, et **Inverser** (la courbe est parcourue dans l'autre sens).
- **Convertir en polyligne** (`P`) : la spline devient une polyligne ; la précision correspond au nombre de segments de chaque portion (10 est la valeur usuelle).
- **Annuler** rétablit la dernière modification ; **Quitter** (`X`) met fin à la commande.

{{ui:Propriétés}} affiche le degré d'une spline, le nombre de points d'ajustement et de contrôle qu'elle possède, sa longueur, et permet de l'ouvrir ou de la fermer.

## Modifier une polyligne

Sélectionnez une polyligne et saisissez `PE`. Une ligne, un arc ou une spline que vous choisissez vous est d'abord proposé comme polyligne à obtenir (une spline demande la précision).

- **Fermer** / **Ouvrir** joint ou sépare les extrémités.
- **Joindre** ajoute des lignes, arcs et polylignes dont les extrémités rejoignent celle de la polyligne. `Distance de tolérance` correspond à l'écart maximal entre les extrémités pour qu'elles se joignent encore (0 signifie qu'elles doivent se toucher).
- **Largeur** donne une seule largeur à l'ensemble de la polyligne (0 la supprime).
- **Ajuster** remplace la polyligne par une courbe lisse passant par ses sommets ; **Spline** la remplace par une B-spline cubique qui les suit (elle part du premier sommet et se termine au dernier, et reste proche des autres). Les deux deviennent une polyligne de petits segments, et les angles d'origine sont conservés, de sorte que **Décourber** les restaure.
- **Génération du type de ligne** indique si un type de ligne en tirets se poursuit sur toute la polyligne ou recommence à chaque sommet.
- **Inverser** change l'ordre de ses sommets. **Multiple** (`M` à la première invite) modifie plusieurs polylignes avec les mêmes options.

La modification des sommets d'une polyligne dans {{ui:Propriétés}} ou avec les poignées ne change rien : PEDIT ne dispose pas d'éditeur de sommets.

## Dans les fichiers

DWG et DXF 2000 conservent une spline sous forme de spline : degré, points de contrôle, nœuds, poids, points d'ajustement et tangentes. Une spline ouverte puis non modifiée est réécrite exactement comme elle était. Le format DXF R12 ne connaît pas la spline : elle est enregistrée sous forme de polyligne suivant la courbe, et l'historique indique le nombre de segments.

Décaler, ajuster, prolonger, raccorder, couper et joindre ne fonctionnent pas sur les splines. Utilisez {{cmd:EXPLODE}} sur une spline, ou {{cmd:PEDIT}}, pour obtenir une polyligne que ces commandes acceptent.

## Erreurs courantes

- **La courbe dépasse entre des points rapprochés.** Une courbe passant par des points s'infléchit là où se trouvent les points. Utilisez moins de points, ou un polygone de contrôle.
- **« Ce n'est pas une spline. »** SPLINEDIT n'accepte que les splines ; {{cmd:PEDIT}} modifie les polylignes.
- **Une spline ajustée et fermée a une forme légèrement différente dans un autre programme.** CadCraft la ferme par une jonction lisse unique au premier point ; un autre programme peut la fermer par une courbe périodique. Une spline fermée par points de contrôle est identique dans les deux.

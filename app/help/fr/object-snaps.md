---
title: S'accrocher aux points des objets
summary: Utiliser les accrochages aux objets, Ortho et la grille pour saisir à la souris des extrémités, milieux, centres et intersections exacts.
keywords: accrochage aux objets, osnap, extrémité, milieu, centre, intersection, perpendiculaire, quadrant, proche, nœud, insertion, ortho, grille, f3, f8, f7, repérage polaire, polaire, polarang, suivi d'accrochage, otrack, suivi, f10, f11
from: 3cf17f94
---

## Ce que vous allez créer

Un rectangle avec ses deux diagonales, un cercle centré à leur croisement, et une ligne allant du milieu d'un côté jusqu'au cercle. Chaque point est saisi à la souris, et chaque point est exact.

## Fonctionnement de l'accrochage

Pendant qu'une commande demande un point, CadCraft recherche des points d'accrochage à environ 10 pixels du réticule. Lorsqu'il en trouve un, un marqueur et une étiquette apparaissent (« Extrémité », « Intersection »), et un clic tombe **exactement** sur ce point, et non à l'endroit du réticule.

Les accrochages sont actifs lorsque {{ui:Accrochage}} est enfoncé dans la barre d'état. {{key:F3}} les active et les désactive.

Les accrochages utilisables sont les suivants :

| Accrochage | Se pose sur |
|---|---|
| Extrémité | Les extrémités de lignes, d'arcs et de segments de polyligne |
| Milieu | Le milieu des lignes, arcs et segments de polyligne |
| Centre | Le centre des cercles et des arcs, et des segments d'arc de polyligne |
| Quadrant | Les points à 0, 90, 180 et 270 degrés des cercles et des arcs |
| Intersection | Là où deux objets se croisent |
| Perpendiculaire | Le point d'un objet perpendiculaire au dernier point (nécessite un point de base) |
| Tangente | Le point d'un cercle ou d'un arc que touche tout juste une ligne partant du dernier point. Sans dernier point (premier point d'une ligne), le marqueur affiche « différé » : le point de tangence est calculé une fois le point suivant connu, de sorte qu'une ligne de Tangente à Tangente touche les deux cercles |
| Proche | Le point le plus proche sur n'importe quel objet |
| Nœud | Objets point |
| Insertion | Le point d'insertion des textes et des références de bloc |

Tous sont activés par défaut, sauf Tangente et Proche. Proche l'emporte souvent lorsque vous voulez autre chose ; activez Tangente lorsque vous en avez besoin.

## Choisir vos accrochages

1. Cliquez sur la petite flèche à côté de {{ui:Accrochage}} dans la barre d'état. La liste {{ui:Accrochages aux objets}} s'ouvre.
2. Cochez ou décochez des accrochages. Les modifications s'appliquent immédiatement.
3. Cliquez de nouveau sur la flèche pour fermer la liste.

CadCraft mémorise votre choix, ainsi que les réglages {{ui:Grille}}, {{ui:Ortho}} et {{ui:Accrochage}}, dans ce navigateur.

## Étapes

1. Saisissez `REC` puis appuyez sur {{key:Enter}}.
2. Saisissez `0,0` puis appuyez sur {{key:Enter}}.
3. Saisissez `@4000,3000` puis appuyez sur {{key:Enter}}. Un rectangle apparaît.
4. Cliquez sur {{ui:Étendue}}.
5. Saisissez `L` puis appuyez sur {{key:Enter}}.
6. Placez le réticule sur le coin inférieur gauche. Le marqueur affiche « Extrémité ». Cliquez.
7. Déplacez-vous jusqu'au coin supérieur droit jusqu'à ce que « Extrémité » s'affiche. Cliquez.
8. Appuyez sur {{key:Enter}} pour terminer la ligne.
9. Appuyez de nouveau sur {{key:Enter}} pour relancer {{cmd:LINE}}, puis tracez l'autre diagonale du coin inférieur droit jusqu'au coin supérieur gauche de la même façon.
10. Saisissez `C` puis appuyez sur {{key:Enter}} pour commencer un cercle.
11. Placez le réticule à l'endroit où les diagonales se croisent. Le marqueur affiche « Intersection ». Cliquez.
12. Saisissez `800` puis appuyez sur {{key:Enter}}.

Vous devez voir un cercle centré exactement sur le croisement.

13. Saisissez `L` puis appuyez sur {{key:Enter}}.
14. Déplacez-vous jusqu'au milieu du côté gauche du rectangle jusqu'à ce que « Milieu » s'affiche. Cliquez.
15. Placez le réticule sur le cercle, sur son côté gauche. Le marqueur affiche « Perpendiculaire » ou « Quadrant » ; ici il s'agit du même point. Cliquez.
16. Appuyez sur {{key:Enter}}.

La nouvelle ligne part du milieu du côté gauche et s'arrête exactement sur le cercle.

## Ignorer un accrochage pour un seul clic

Maintenez la touche {{key:Shift}} enfoncée pendant que vous cliquez. Les accrochages aux objets sont ignorés pour ce clic, et le point va exactement à l'endroit du réticule (ou dans la direction d'Ortho, si Ortho est activé).

## Ortho

{{ui:Ortho}} ({{key:F8}}) garde le point suivant en ligne droite, horizontale ou verticale, depuis le point de base. Il s'applique aux clics et à la saisie directe de distance (un nombre seul saisi à l'invite). Les accrochages aux objets priment sur Ortho : si un marqueur d'accrochage s'affiche, le clic va à l'accrochage.

## Repérage polaire

{{ui:Polaire}} ({{key:F10}}) est Ortho à davantage d'angles. Lorsqu'une commande a un point de base (le dernier point d'une ligne, le point de base d'un déplacement), le pointeur s'aligne dès qu'il se rapproche d'un rayon issu de ce point, à un multiple du pas polaire : une ligne pointillée s'affiche, et une étiquette à côté du réticule indique `Polaire : 1200 < 30°`. Cliquez pour utiliser ce point, ou saisissez une distance : `1200` va exactement 1200 le long du rayon.

Le pas est de 90° tant que vous ne le modifiez pas : saisissez {{cmd:POLARANG}}, appuyez sur {{key:Enter}}, puis saisissez `30` (ou 45, 22.5, 15 …). Polaire et Ortho s'excluent mutuellement : activer l'un désactive l'autre.

## Suivi d'accrochage

{{ui:Repérage}} ({{key:F11}}) aligne le pointeur sur les points d'accrochage où vous vous êtes arrêté, afin de pouvoir choisir un point au même niveau qu'un coin et au-dessus d'un autre, sans dessiner de lignes auxiliaires.

1. Activez {{ui:Accrochage}} et {{ui:Repérage}}, puis lancez une commande qui demande un point (`L`).
2. Posez le pointeur sur un point d'accrochage, comme un coin, pendant une demi-seconde, sans cliquer. Une petite croix le marque : il est acquis. Posez-le de nouveau dessus pour le retirer.
3. Déplacez le pointeur tout droit à partir de lui, horizontalement ou verticalement. Une ligne pointillée suit le pointeur et l'étiquette affiche `Suivi : 600 < 90°`. Cliquez, ou saisissez une distance.
4. Acquérez un deuxième point, puis déplacez-vous jusqu'à l'endroit où la verticale issue de l'un rencontre l'horizontale issue de l'autre : le pointeur s'accroche à ce croisement (`Suivi : croisement de deux lignes`).

Lorsque {{ui:Polaire}} est également activé, les points acquis suivent à chaque angle polaire. Sept points au maximum sont conservés, jusqu'à la fin de la commande. {{key:Shift}} désactive le suivi pour un clic, comme pour les accrochages.

## Grille

{{ui:Grille}} ({{key:F7}}) affiche une grille de lignes derrière le dessin, avec des lignes plus épaisses toutes les cinq lignes ; l'espacement change lorsque vous zoomez. Ce n'est qu'un repère tant que vous n'activez pas {{ui:Résolution sur la grille}} ({{key:F9}}) : les clics tombent alors sur le point de grille le plus proche, sauf si un accrochage aux objets prend le point en premier.

## Touches de fonction de votre ordinateur

{{key:F9}} correspond à Résolution sur la grille, {{key:F10}} à Polaire et {{key:F11}} à Repérage.

:::mac
Sur un Mac, F3, F7, F8 et F9 commandent généralement Mission Control et les médias. Maintenez **fn** avec la touche, ou activez les touches de fonction standard, comme décrit dans [Touches, souris et pavés tactiles](common:keys). Les boutons de la barre d'état fonctionnent toujours.
:::

:::firefox
Dans Firefox, F7 sert aussi à la navigation par curseur. Si Firefox demande s'il faut activer la navigation par curseur, choisissez **Non**. Utilisez le bouton {{ui:Grille}} si la question revient sans cesse.
:::

:::touch
Sur un écran tactile, il n'y a pas de survol : le marqueur d'accrochage n'apparaît qu'à l'endroit touché par votre doigt. Zoomez de près pour les petites cibles, ou saisissez des coordonnées.
:::

## Erreurs courantes

- **Le clic est tombé sur le mauvais point.** Lisez l'étiquette du marqueur avant de cliquer : Extrémité l'emporte sur Milieu lorsque les deux sont proches. Zoomez, ou décochez les accrochages dont vous n'avez pas besoin.
- **Aucun marqueur n'apparaît.** {{ui:Accrochage}} est désactivé, ou l'accrochage voulu est décoché, ou l'objet se trouve sur un calque désactivé ou gelé.
- **Les accrochages saisissent la mauvaise chose dans un dessin chargé.** Zoomez. La distance d'accrochage se mesure en pixels à l'écran : zoomer la réduit donc sur le dessin.
- **Attendre que {{key:Shift}} donne une ligne droite.** Dans CadCraft, {{key:Shift}} désactive les accrochages pour un clic. Utilisez {{ui:Ortho}} pour les lignes droites.
- **Attendre que les points tombent sur les points de grille.** Activez {{ui:Résolution sur la grille}} ({{key:F9}}), ou saisissez des coordonnées pour obtenir des nombres ronds.

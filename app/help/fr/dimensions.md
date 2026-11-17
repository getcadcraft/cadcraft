---
title: Coter un plan
summary: Ajouter des cotes linéaires, alignées, angulaires, de rayon et de diamètre, les enchaîner avec Cote en chaîne et Cote de base, et remplacer le texte.
keywords: cote, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, chaîne, ligne, annoter, outil de cote, où, trouver, barre d'outils, mesurer, mm, cm, m, km, unités
from: 9ee65123
---

## Ce que vous allez réaliser

Une pièce cotée : largeur et hauteur totales, une chaîne de cotes le long d'un mur, un mur incliné, un coin arrondi et un angle.

Avant de commencer, lisez [Régler les tailles des cotes](topic:dimension-settings) si votre dessin est grand : le texte des cotes mesure 2.5 unités de dessin de haut par défaut, ce qui est minuscule dans un dessin mesuré en millimètres. Pour les étapes ci-dessous, tapez d'abord `DIMSCALE`, appuyez sur {{key:Enter}}, tapez `50` et appuyez sur {{key:Enter}}.

## Où se trouvent les outils de cote

Avec le style de menu CadCraft (celui avec lequel CadCraft démarre), les outils de cote se trouvent dans la barre d'outils au-dessus du dessin, dans le groupe {{ui:Annoter}} : {{ui:Linéaire}}, {{ui:Alignée}}, {{ui:Angle}}, {{ui:Rayon}} et {{ui:Diamètre}}. Le menu {{ui:Plus}} du groupe propose {{ui:Cote en chaîne}} et {{ui:Cote de base}}. Placez le pointeur sur un bouton pour voir ce qu'il fait.

- Avec le style de menu {{ui:Dessin classique}} ou {{ui:Ruban}}, ouvrez l'onglet {{ui:Annoter}} : les outils se trouvent dans son panneau {{ui:Cotes}}. {{ui:Dessin classique}} propose aussi {{ui:Linéaire}} dans l'onglet {{ui:Accueil}}, sous {{ui:Annotation}}. Voir [Menus, touches et souris](topic:menus-keys-and-mouse).
- Ou tapez la commande dans la ligne de commande sous le dessin et appuyez sur {{key:Enter}} : `DLI` (linéaire), `DAL` (alignée), `DAN` (angulaire), `DRA` (rayon), `DDI` (diamètre), `DCO` (chaîne), `DBA` (base).
- Sur un écran étroit, la barre d'outils tient sur une seule ligne : faites-la défiler latéralement pour atteindre {{ui:Annoter}}.

Pour afficher les longueurs en millimètres, centimètres, mètres ou kilomètres, voir [Cotes en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Dessiner ce qu'il faut coter

1. Tapez `PL` et appuyez sur {{key:Enter}}.
2. Tapez `0,0` et appuyez sur {{key:Enter}}.
3. Tapez `@6000,0` et appuyez sur {{key:Enter}}.
4. Tapez `@1500<60` et appuyez sur {{key:Enter}}.
5. Tapez `@0,2700` et appuyez sur {{key:Enter}}.
6. Tapez `@-6750,0` et appuyez sur {{key:Enter}}.
7. Tapez `C` et appuyez sur {{key:Enter}}. Le contour se referme.
8. Tapez `C` et appuyez sur {{key:Enter}} pour commencer un cercle.
9. Cliquez à l'intérieur de la pièce, loin des murs, pour le centre.
10. Tapez `600` et appuyez sur {{key:Enter}}. C'est un poteau.
11. Cliquez sur {{ui:Étendue}}.

## Linéaire : horizontale ou verticale

1. Tapez `DLI` et appuyez sur {{key:Enter}}.
2. À `Specify first extension line origin`, accrochez-vous au coin inférieur gauche (Extrémité) et cliquez.
3. À `Specify second extension line origin`, accrochez-vous au coin inférieur droit et cliquez.
4. Déplacez le réticule sous la pièce. La cote suit, horizontale.
5. Cliquez pour placer la ligne de cote.

L'historique indique `Dimension text = 6000`.

L'endroit où vous placez la ligne détermine le sens : en dessous ou au-dessus donne une cote horizontale, à gauche ou à droite une cote verticale. Pour l'imposer, tapez `H` (horizontale), `V` (verticale) ou `R` (pivotée, puis un angle) avant de la placer.

:::tip
Appuyez sur {{key:Enter}} à la première invite au lieu de choisir un point, puis cliquez sur une ligne, un arc, un cercle ou un segment de polyligne. CadCraft prend les deux extrémités pour vous.
:::

## Cote en chaîne : une suite de cotes

{{cmd:DIMCONTINUE}} ({{ui:Annoter}} › {{ui:Plus}} › {{ui:Cote en chaîne}}, ou `DCO`) poursuit à partir de la dernière cote linéaire ou alignée que vous avez créée ; chaque nouvelle cote commence là où la précédente s'est terminée.

1. Tapez `DLI` et appuyez sur {{key:Enter}}.
2. Tapez `0,0` et appuyez sur {{key:Enter}} pour la première origine.
3. Tapez `2000,0` et appuyez sur {{key:Enter}} pour la seconde origine.
4. Cliquez sous la pièce pour la placer.
5. Tapez `DCO` et appuyez sur {{key:Enter}}.
6. Tapez `4500,0` et appuyez sur {{key:Enter}}. Une seconde cote suit la première, sur la même ligne.
7. Accrochez-vous au coin inférieur droit et cliquez. Une troisième cote termine la chaîne.
8. Appuyez sur {{key:Enter}} pour terminer la commande.

:::note
Ici, les points sont saisis volontairement en coordonnées absolues. Un point `@` se compte depuis le dernier point que vous avez donné, et ce dernier point est l'endroit où vous avez placé la cote précédente, et non l'extrémité de la cote. Les points absolus, les accrochages ou une simple distance avec {{ui:Ortho}} activé sont plus sûrs dans une chaîne de cotes.
:::

Tapez `U` et appuyez sur {{key:Enter}} pour annuler la dernière cote de la chaîne sans quitter la commande.

## Cote de base : cotes empilées depuis une même ligne

{{cmd:DIMBASELINE}} ({{ui:Annoter}} › {{ui:Plus}} › {{ui:Cote de base}}, ou `DBA`) mesure chaque nouvelle cote depuis la première origine de la dernière, et empile chacune un cran plus loin.

1. Tapez `DLI` et appuyez sur {{key:Enter}}.
2. Accrochez-vous au coin inférieur gauche et cliquez.
3. Accrochez-vous au coin supérieur gauche et cliquez.
4. Déplacez le réticule à gauche de la pièce et cliquez. Une cote verticale apparaît.
5. Tapez `DBA` et appuyez sur {{key:Enter}}.
6. Accrochez-vous à l'extrémité haute du mur à 60 degrés (Extrémité) et cliquez. Une seconde cote verticale apparaît, un cran plus loin que la première.
7. Appuyez sur {{key:Enter}} pour terminer.

## Alignée : longueur réelle d'une ligne inclinée

1. Tapez `DAL` et appuyez sur {{key:Enter}}.
2. Appuyez sur {{key:Enter}} pour sélectionner un objet.
3. Cliquez sur le mur à 60 degrés.
4. Éloignez-vous et cliquez pour placer la cote.

Le texte indique 1500 : la longueur réelle, mesurée le long du mur.

## Rayon et diamètre

1. Tapez `DRA` et appuyez sur {{key:Enter}}.
2. Cliquez sur le cercle du poteau.
3. Déplacez le réticule. La ligne de repère pointe du centre vers le réticule.
4. Cliquez pour placer le texte.

Le texte indique `R600`. {{cmd:DIMDIAMETER}} (`DDI`) fait de même avec le signe ⌀ et le diamètre.

## Angulaire

Les murs ici forment une seule polyligne ; on mesure donc le coin par son sommet. (Entre deux lignes distinctes, vous pouvez cliquer sur les lignes à la place.)

1. Tapez `DAN` et appuyez sur {{key:Enter}}.
2. À `Select arc, circle or line, or Enter for a vertex`, appuyez sur {{key:Enter}}.
3. À `Specify angle vertex`, accrochez-vous au coin inférieur droit et cliquez.
4. À `Specify first angle endpoint`, accrochez-vous au coin inférieur gauche et cliquez.
5. À `Specify second angle endpoint`, accrochez-vous à l'extrémité haute du mur à 60 degrés et cliquez.
6. Déplacez le réticule à l'intérieur de la pièce, près du coin, et cliquez.

Le texte indique `120°`, l'angle intérieur du coin. Placée de l'autre côté du coin, la cote mesure l'angle de ce côté à la place. Cliquez sur un arc à la première invite pour coter l'angle qu'il couvre, ou cliquez sur deux lignes pour coter l'angle entre elles.

## Modifier le texte

Pour écrire votre propre texte, tapez `T` et appuyez sur {{key:Enter}} avant de placer la cote, puis tapez le texte. Dans votre texte, `<>` représente la valeur mesurée : `<> TYP.` donne `6000 TYP.`. Appuyez sur {{key:Enter}} sur une ligne vide pour conserver la valeur mesurée.

Pour modifier une cote existante :

1. Cliquez dessus.
2. Dans le panneau de droite, saisissez dans {{ui:Texte}}. Laissez vide pour la valeur mesurée.
3. Appuyez sur {{key:Enter}}.

## Les cotes suivent la géométrie

Une cote retient ses points. Faites glisser l'une de ses poignées, ou déplacez, faites pivoter ou mettez à l'échelle la cote avec les objets qu'elle mesure, et elle se remesure. Si vous étirez la géométrie sans déplacer la cote, celle-ci ne suit pas : elle garde ses propres points.

## Erreurs courantes

- **Le texte et les flèches sont minuscules ou énormes.** Réglez l'échelle globale : voir [Régler les tailles des cotes](topic:dimension-settings).
- **« Choisissez un point à l'intérieur de l'angle à mesurer. »** Le point cliqué pour une cote angulaire se trouve sur l'un des côtés. Déplacez-le à l'intérieur de l'angle.
- **La chaîne a commencé à partir de la mauvaise cote.** Elle repart toujours de la dernière cote linéaire ou alignée créée dans cette session. Créez (ou recréez) d'abord celle qui doit servir de départ.
- **La cote est sortie verticale.** Vous l'avez placée sur le côté. Tapez `H` avant de la placer.
- **Pieds et pouces.** Réglez d'abord le format de longueur du dessin sur {{ui:Architecturales}}, ou le {{ui:Format}} d'une cote dans {{ui:Propriétés}} : voir [Pieds et pouces dans les cotes](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Les nombres ne sont pas dans l'unité voulue.** Choisissez {{ui:Unités dans le texte}} : voir [Cotes en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

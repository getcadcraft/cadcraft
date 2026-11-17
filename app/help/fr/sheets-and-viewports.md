---
title: Préparer une feuille avec un cartouche et des fenêtres de présentation
summary: Créer une feuille (présentation) avec un cadre et un cartouche, régler l'échelle des fenêtres de présentation, ajouter une deuxième fenêtre pour un détail, et remplir le cartouche.
keywords: présentation, feuille, espace papier, fenêtre de présentation, mview, vpview, cartouche, échelle, format de papier, cadre, vports, échelle de tracé, mspace, pspace, espace objet, entrer dans la fenêtre, double-cliquer sur la fenêtre
from: 45a45de8
---

## Ce que vous allez créer

Une feuille A3 avec un cartouche, le plan entier dans une fenêtre de présentation au 1:100, et une deuxième fenêtre montrant un coin au 1:20.

## Modèle et feuilles

Vous dessinez le bâtiment sur l'onglet {{ui:Modèle}}, en grandeur réelle : un mur de 6 m fait 6000 unités en millimètres. Une **feuille** (une présentation) est un morceau de papier, mesuré en millimètres ou en pouces. Une **fenêtre de présentation** est une ouverture découpée dans la feuille qui montre le modèle à une échelle donnée.

## Avant de commencer

1. Ouvrez ou dessinez un plan sur l'onglet {{ui:Modèle}}.
2. Appuyez sur {{key:Esc}} pour ne rien sélectionner.
3. Dans {{ui:Réglages actuels}}, réglez {{ui:Unités}} sur l'unité dans laquelle vous avez dessiné, par exemple {{ui:Millimètres}}.

Les unités comptent : une échelle de fenêtre comme 1:100 signifie qu'un millimètre sur le papier représente 100 millimètres réels, donc CadCraft doit savoir ce que vaut une unité de dessin. Un dessin laissé en {{ui:Sans unité}} est considéré comme étant dans l'unité du papier (millimètres sur papier ISO, pouces sur papier US).

## Créer la feuille

1. Cliquez sur le bouton {{ui:+}} à droite des onglets sous le dessin, ou saisissez `LAYOUT` puis appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Nouvelle feuille}}.

Un nouvel onglet `Layout1` s'ouvre. Vous devez voir une feuille sur un bureau plus foncé : un cadre, un cartouche dans le coin inférieur droit et une fenêtre de présentation au-dessus, montrant tout le modèle à la plus grande échelle standard qui tient. L'historique nomme le papier : ISO A3 pour les dessins métriques et sans unité, Tabloid (ANSI B) pour les dessins en pouces ou en pieds.

2. Cliquez sur {{ui:Étendue}} pour ajuster la feuille à l'écran.

## Choisir le papier

1. Appuyez sur {{key:Esc}} pour ne rien sélectionner. Le titre du panneau de droite affiche « Feuille : Layout1 ».
2. Dans {{ui:Nom}}, saisissez `A-101 Plan` puis appuyez sur {{key:Enter}}. L'onglet est renommé.
3. Dans {{ui:Papier}}, choisissez un format.
4. Dans {{ui:Orientation}}, choisissez {{ui:Paysage}} ou {{ui:Portrait}}.

:::warning
Changer le papier ne déplace ni ne redimensionne ce qui se trouve déjà sur la feuille. Après le changement, vérifiez que le cadre, le cartouche et la fenêtre tiennent toujours, et déplacez-les ou redimensionnez-les avec les poignées. Passer d'un papier en millimètres à un papier en pouces conserve les nombres, donc tout change de taille : la barre d'état vous en avertit.
:::

## Régler l'échelle de la fenêtre

1. Cliquez sur le cadre de la fenêtre (son bord). Le titre du panneau affiche « Fenêtre de présentation ».
2. Dans {{ui:Échelle (S)}}, choisissez `1:100`.

Le modèle à l'intérieur de la fenêtre se redessine au 1:100, centré là où il était. La liste propose des échelles métriques de 10:1 à 1:10000 ; les dessins en pouces ou en pieds disposent aussi d'échelles architecturales (1/4" = 1'-0" et similaires) et d'échelles d'ingénieur (1" = 20' et similaires). {{ui:Ajuster tout le modèle}} définit une échelle exacte, non standard, qui fait tenir tout le modèle.

3. Si le plan n'est plus centré, modifiez {{ui:X}} et {{ui:Y}} sous {{ui:Centre de la vue (modèle)}} dans le panneau de droite : ils indiquent le point du modèle affiché au centre de la fenêtre.

## Afficher une partie du modèle dans une fenêtre

1. La fenêtre étant sélectionnée, cliquez sur {{ui:Choisissez une fenêtre sur le modèle…}} dans le panneau de droite (ou saisissez `VPVIEW` puis appuyez sur {{key:Enter}}).
2. CadCraft passe sur l'onglet {{ui:Modèle}}. Cliquez sur un coin de la zone à afficher.
3. Cliquez sur le coin opposé.

Vous revenez sur la feuille, et la fenêtre montre cette zone à la plus grande échelle standard qui tient ; l'historique indique laquelle. {{ui:Afficher tout le modèle}} revient au plan entier, à une échelle standard.

## Ajouter une deuxième fenêtre pour un détail

1. Faites de la place sur la feuille : sélectionnez la première fenêtre et faites glisser une poignée de coin pour la réduire.
2. Saisissez `MV` puis appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Fenêtre de présentation}} dans le groupe Feuilles.
3. Cliquez sur un coin de la nouvelle fenêtre sur la feuille.
4. Cliquez sur le coin opposé.

La nouvelle fenêtre montre le modèle entier. L'historique indique son échelle.

5. Cliquez sur le cadre de la nouvelle fenêtre.
6. Cliquez sur {{ui:Choisissez une fenêtre sur le modèle…}} et choisissez une petite zone autour d'un coin du plan.
7. Dans {{ui:Échelle (S)}}, choisissez `1:20`.

Les cadres des fenêtres sont sur le calque `Viewports`, réglé comme non tracé : les cadres s'affichent à l'écran mais pas dans le PDF.

## Remplir le cartouche

Le cartouche est fait de lignes et de textes ordinaires sur le calque `Title block`. Il commence par le nom du dessin, l'échelle de la première fenêtre, la date du jour et le numéro de feuille.

1. Double-cliquez sur le grand texte du titre. Une zone d'édition s'ouvre par-dessus.
2. Saisissez le titre de la feuille.
3. Cliquez sur {{ui:OK}}, ou appuyez sur {{key:Mod+Enter}}.

Faites de même pour les autres champs. Utilisez {{cmd:TEXT}} pour écrire dans la case vide « DRAWN BY ». Le texte SCALE ne se met pas à jour seul lorsque vous modifiez l'échelle d'une fenêtre : modifiez-le à la main.

## Dessiner sur la feuille

Tout ce que vous dessinez sur un onglet de feuille se trouve sur le papier, en unités de papier : un texte de hauteur 3.5 mesure 3.5 mm de haut sur une feuille ISO. Les notes, les flèches du nord et les cadres de feuille ont leur place ici.

Pour modifier le plan lui-même, passez sur l'onglet {{ui:Modèle}}, ou travaillez à travers une fenêtre (section suivante) ; chaque fenêtre affiche la modification.

## Travailler sur le modèle à travers une fenêtre

1. Double-cliquez à l'intérieur d'une fenêtre, en dehors de son cadre. Ou saisissez `MS` puis appuyez sur {{key:Enter}} : avec une seule fenêtre sur la feuille, vous entrez directement ; avec plusieurs, cliquez dans celle que vous voulez.

Le cadre est dessiné plus épais, l'historique indique que vous êtes à l'intérieur, et l'onglet de la feuille reste sélectionné. Tout ce que vous dessinez ou modifiez est désormais sur le modèle, en unités du modèle, comme sur l'onglet {{ui:Modèle}} : une ligne dessinée dans une fenêtre au 1:100 est en millimètres réels. Les calques gelés dans cette fenêtre ne peuvent pas être choisis ici.

2. Tournez la molette ou faites glisser avec le bouton du milieu pour zoomer et déplacer ce que montre la fenêtre. La feuille reste à sa place.
3. Double-cliquez n'importe où en dehors du cadre, ou saisissez `PS` puis appuyez sur {{key:Enter}}.

Vous revenez sur la feuille. La fenêtre conserve la vue dans laquelle vous l'avez laissée ; {{key:Mod+Z}} remet l'ancienne vue en une seule étape. Cliquer sur n'importe quel onglet sous le dessin quitte aussi la fenêtre.

:::note
Une fenêtre dont l'affichage est verrouillé ({{ui:Affichage verrouillé}} dans {{ui:Propriétés}}) conserve sa vue : à l'intérieur, panoramique et zoom déplacent toute la feuille. Une fenêtre désactivée ne peut pas être ouverte.
:::

## Étiqueter une vue avec son nom

Un titre de vue sous une fenêtre peut afficher le nom de la vue de la fenêtre et le suivre :

1. Donnez un nom à la vue : sélectionnez le cadre de la fenêtre et renseignez {{ui:Nom de la vue}} dans {{ui:Propriétés}} — ou enregistrez la vue sur l'onglet {{ui:Modèle}} avec {{cmd:NAMEDVIEW}} et, la fenêtre sélectionnée, saisissez `VPVIEW`, `V` et le nom de la vue : la fenêtre affiche cette vue et prend son nom.
2. Saisissez `VIEWLABEL` (`VL`) puis appuyez sur {{key:Enter}}, puis cliquez à l'endroit où doit aller l'étiquette ({{key:Enter}} la place sous le coin inférieur gauche de la fenêtre).

Lorsque le nom de la vue change, l'étiquette change avec lui, dans la même étape d'annulation.

## Geler un calque dans une seule fenêtre

Pour masquer un calque dans une fenêtre mais pas dans les autres (du mobilier dans un détail, par exemple) :

1. Sélectionnez le cadre de la fenêtre, ou travaillez à l'intérieur (double-clic).

Le panneau {{ui:Calques}} reçoit un bouton de plus sur chaque ligne, et une ligne au-dessus de la liste l'indique.

2. Cliquez sur ce bouton sur la ligne du calque.

Le calque disparaît de cette seule fenêtre. Cliquez de nouveau pour le dégeler ; {{key:Mod+Z}} annule l'une ou l'autre action. Pour plusieurs calques ou fenêtres à la fois, saisissez `VPLAYER` : `F` (Geler) ou `T` (Dégeler), les noms de calques (`A-*` prend tous les calques commençant par A-), puis `C` (Courant), `A` (Tous) ou `S` (Sélection). `VPLAYER` `V` (Vpvisdflt) choisit les calques avec lesquels les nouvelles fenêtres démarrent gelées.

## Plus de feuilles

Chaque {{ui:+}} ajoute une autre feuille (`Layout2`, `Layout3` …) avec le numéro de feuille suivant. Pour supprimer la feuille ouverte, appuyez sur {{key:Esc}} et cliquez sur {{ui:Supprimer cette feuille}} dans le panneau de droite. Elle est supprimée sans demande ; {{key:Mod+Z}} la restaure.

Tracez une feuille avec {{ui:Tracer cette feuille}} ou {{key:Mod+P}} ; voir [Tracer en PDF](topic:plot-pdf).

## Erreurs courantes

- **La fenêtre n'affiche rien.** Le modèle est vide, ou la vue vise ailleurs. Sélectionnez le cadre et cliquez sur {{ui:Afficher tout le modèle}}.
- **La liste d'échelles ne propose que des rapports, sans échelles en pieds et pouces.** Réglez {{ui:Unités}} sur {{ui:Pouces}} ou {{ui:Pieds}} dans l'onglet {{ui:Modèle}}.
- **Le 1:100 paraît dix fois trop grand ou trop petit.** Les unités de dessin sont erronées. Réglez {{ui:Unités}} sur ce que vaut réellement une unité.
- **Cliquer sur le plan dans la fenêtre ne sélectionne rien.** Sur une feuille, vous sélectionnez les objets de la feuille. Double-cliquez d'abord dans la fenêtre pour travailler sur le plan à travers elle.
- **Les clics en dehors de la fenêtre ne font rien.** Vous êtes dans une fenêtre : double-cliquez en dehors, ou saisissez `PS`, pour travailler de nouveau sur la feuille.
- **« Les fenêtres de présentation vont sur une présentation. Ouvrez d'abord un onglet de présentation (ou créez-en une avec LAYOUT). »** {{cmd:MVIEW}} ne fonctionne que sur un onglet de feuille.

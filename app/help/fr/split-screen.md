---
title: Diviser l'écran
summary: Affichez le dessin en deux, trois ou quatre volets avec leur propre zoom, placez une feuille à côté du modèle, et ouvrez plusieurs dessins côte à côte.
keywords: diviser, diviser l'écran, volets, vports, viewports, juxtaposé, juxtaposer, empilé, côte à côte, deux dessins, onglets, onglets de document, comparer, séparateur, modèle et feuille, plusieurs dessins, dessins ouverts
from: ee2f034b
---

## Ce que vous allez apprendre

Comment observer un dessin dans plusieurs volets à la fois, chacun avec son propre zoom, et comment ouvrir plusieurs dessins pour les voir côte à côte.

## Diviser un dessin en volets

1. Ouvrez un dessin, ou tracez quelques lignes et cercles.
2. Ouvrez {{ui:Vue}} › {{ui:Plus}} et choisissez {{ui:Diviser côte à côte}} (ou saisissez {{cmd:VPORTS}}, puis `2`, puis {{key:Enter}}).

La zone de dessin se divise en deux volets affichant la même vue. Le volet actif a un cadre bleu et reçoit le réticule.

3. Cliquez dans l'autre volet. Il devient actif. (Ce premier clic ne fait que changer de volet ; cliquez à nouveau pour choisir.)
4. Zoomez avec la molette. Seul ce volet zoome.
5. Faites glisser la ligne entre les volets pour en élargir un. {{key:Home}} sur un séparateur ayant le focus le replace au milieu.

{{cmd:VPORTS}} accepte aussi `3` (deux volets d'un côté et un grand de l'autre : `L` ou `R`), `4`, et `SI` pour revenir à un seul volet. La vue du volet actif remplit alors toute la zone. Sur une feuille, {{cmd:VPORTS}} ajoute plutôt une fenêtre de présentation à la feuille (comme dans AutoCAD) ; saisissez {{cmd:SPLIT}} à cet endroit, ou utilisez le menu Vue.

## Dessiner d'un volet vers un autre

1. Divisez côte à côte, puis faites un zoom de chaque volet sur un coin différent du dessin.
2. Saisissez `L` et appuyez sur {{key:Enter}}, puis cliquez sur le premier point dans le volet de gauche.
3. Cliquez une fois dans le volet de droite pour le rendre actif, puis cliquez sur le second point.

La ligne relie les deux emplacements. Une commande se poursuit lorsque vous changez de volet, et l'élastique s'affiche dans chaque volet.

## Le modèle à côté d'une feuille

1. Divisez côte à côte.
2. Cliquez dans le volet de droite, puis cliquez sur l'onglet d'une feuille sous le dessin.

Le volet de droite affiche la feuille ; celui de gauche continue d'afficher le modèle. Chaque volet conserve son propre espace, de sorte que vous pouvez dessiner sur le modèle et observer la fenêtre de présentation de la feuille se mettre à jour.

## Plusieurs dessins dans une seule fenêtre

1. Ouvrez un dessin. Puis ouvrez-en un autre (ou appuyez sur {{ui:Nouvelle}}).

Chaque dessin s'ouvre dans son propre onglet au-dessus de la zone de dessin. Cliquez sur un onglet pour basculer ; la ligne de commande, les panneaux et l'annulation suivent le dessin affiché. {{key:Mod+C}} dans un dessin puis {{key:Mod+V}} dans un autre copie des objets de l'un à l'autre.

2. Cliquez sur {{ui:Disposer les dessins ouverts côte à côte}} (l'icône de division à la fin des onglets), ou sur l'icône empilée à côté.

Chaque volet affiche désormais l'un des dessins ouverts, jusqu'à quatre. Cliquez dans un volet pour travailler sur ce dessin.

3. Cliquez sur le {{ui:×}} d'un onglet pour fermer ce dessin. S'il contient des modifications non enregistrées, CadCraft le demande d'abord.

:::tip
Ouvrir un dessin pendant que la fenêtre ne contient qu'un dessin nouveau et vierge utilise cet onglet au lieu d'en ajouter un.
:::

## Panoramique et zoom ensemble

Pour comparer deux révisions, juxtaposez-les, puis cliquez sur {{ui:Lier les vues des volets}} (l'icône de liaison à la fin des onglets), ou choisissez-la dans {{ui:Vue}} › {{ui:Plus}}, ou saisissez {{cmd:LINKVIEWS}} puis `ON`. Désormais, un panoramique ou un zoom dans un volet déplace chaque volet affichant le modèle (ou chaque volet affichant une feuille) au même endroit, de sorte que les deux dessins restent alignés. {{cmd:LINKVIEWS}} `OFF` permet à chaque volet de se déplacer à nouveau seul.

## Erreurs courantes

- **Mon clic n'a rien fait.** Il a rendu ce volet actif. Cliquez à nouveau pour choisir ou dessiner.
- **La molette a zoomé le mauvais volet.** La molette zoome le volet situé sous le pointeur et le rend actif.
- **Les volets sont revenus à un seul.** L'ouverture d'un dessin l'affiche tel qu'il a été enregistré ; un dessin enregistré sans volets s'ouvre dans un seul.
- **La fermeture de la page signale des modifications non enregistrées que je ne vois pas.** Un autre onglet contient un dessin modifié. Basculez vers lui et enregistrez, ou quittez sans enregistrer.

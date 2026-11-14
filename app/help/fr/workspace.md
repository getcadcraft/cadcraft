---
title: L'écran de CadCraft
summary: Une visite de chaque barre, panneau et onglet de l'application de dessin, sous le nom qu'ils portent à l'écran.
keywords: écran, interface, barre d'outils, ruban, panneaux, ligne de commande, barre d'état, onglets, onglets de présentation, propriétés, panneau des calques, visite
from: b5a33388
---

L'écran comporte sept parties. De haut en bas : la barre de l'application, la barre d'outils, la zone de dessin avec un panneau de chaque côté, les onglets sous le dessin, la ligne de commande et la barre d'état.

## La barre de l'application

La fine barre tout en haut appartient au site, pas au dessin. Elle affiche le logo CadCraft, le nom de l'application, la version que vous utilisez, un lien vers la page de l'application, un bouton {{ui:Aide}} (ou {{key:F1}}), un bouton {{ui:Enregistrer pour le hors ligne}}, un bouton {{ui:Plein écran}} et deux boutons de thème, {{ui:Papier}} et {{ui:Objet}}.

Le bouton {{ui:Paramètres}} (engrenage) contient les paramètres propres à CadCraft et ceux que toutes les applications partagent : voir [Paramètres de CadCraft](topic:settings).

{{ui:Enregistrer pour le hors ligne}} conserve une copie de CadCraft, avec son lecteur DWG, dans ce navigateur pour qu'il s'ouvre sans connexion. Son libellé indique l'état : « Enregistrement : N sur M », « Prêt hors ligne », « Enregistrement impossible » ou « Hors ligne indisponible ». Voir [Travailler hors ligne](common:offline).

:::note
Les boutons {{ui:Papier}} et {{ui:Objet}} de la barre de l'application ne changent que les couleurs de l'écran : {{ui:Papier}} est un thème clair, {{ui:Objet}} un thème sombre. Ils n'ont rien à voir avec l'onglet {{ui:Modèle}} sous le dessin, qui bascule entre le dessin et ses feuilles.
:::

Le bouton {{ui:Plein écran}}, ou {{key:Ctrl+Shift+F}} (la touche Ctrl sur tous les ordinateurs, Mac compris), fait défiler trois modes d'écran : normal, plein écran, et plein écran avec les barres masquées. Quand les barres sont masquées, amenez le pointeur au bord supérieur de l'écran pour les faire revenir.

## La barre d'outils

Sous la barre de l'application se trouve la barre d'outils. Chaque bouton lance une commande, exactement comme si vous l'aviez saisie, de sorte que la ligne de commande pose les mêmes questions dans les deux cas. Survolez un bouton pour voir l'alias de sa commande. Les groupes sont :

| Groupe | Boutons |
|---|---|
| Fichier | {{ui:Nouveau}}, {{ui:Ouvrir}}, {{ui:Enregistrer}}, {{ui:Enregistrer sous}}, {{ui:Tracer}} |
| Dessin | {{ui:Ligne}}, {{ui:Polyligne}}, {{ui:Cercle}}, {{ui:Arc}}, {{ui:Rectangle}}, {{ui:Polygone}}, {{ui:Ellipse}}, {{ui:Texte}}, {{ui:Paragraphe}}, {{ui:Hachure}}, et {{ui:Plus}} : {{ui:Point}}, {{ui:Ligne de construction}} et {{ui:Demi-droite}} (voir [Lignes de construction et demi-droites](topic:construction-lines)) |
| Modification | {{ui:Déplacer}}, {{ui:Copier}}, {{ui:Pivoter}}, {{ui:Échelle}}, {{ui:Symétrie}}, {{ui:Étirer}}, {{ui:Décaler}}, {{ui:Ajuster}}, {{ui:Prolonger}}, {{ui:Raccord}}, {{ui:Chanfrein}}, {{ui:Décomposer}}, {{ui:Effacer}}, et {{ui:Plus}} : {{ui:Réseau}}, {{ui:Joindre}}, {{ui:Reproduire les propriétés}}, {{ui:Couper}} et {{ui:Allonger}} |
| Annotation | {{ui:Linéaire}}, {{ui:Alignée}}, {{ui:Angle}}, {{ui:Rayon}}, {{ui:Diamètre}} (cotes), {{ui:Repère}} (ligne de repère multiple), et {{ui:Plus}} : {{ui:Cote en chaîne}}, {{ui:Cote en ligne de base}} et {{ui:Nuage de révision}} |
| Paramétrique | {{ui:Auto}}, {{ui:Contraindre}}, {{ui:Cote}}, {{ui:Paramètres}}, et {{ui:Plus}} avec chaque contrainte (voir [Contraindre un dessin](topic:constraints)) |
| Blocs | {{ui:Créer}}, {{ui:Insérer}}, {{ui:Bibliothèque}}, et {{ui:Plus}} : {{ui:Modifier le bloc}} et {{ui:Définir un attribut}} |
| Feuilles | {{ui:Nouvelle feuille}}, {{ui:Fenêtre de présentation}} |
| Édition | {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}} (dans le presse-papiers), {{ui:Coller}}, et {{ui:Plus}} : un menu avec {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Coller à la même position}}, {{ui:Dupliquer et déplacer}}, {{ui:Supprimer}}, {{ui:Tout sélectionner}}, {{ui:Désélectionner tout}}, {{ui:Sélection rapide}}, {{ui:Sélectionner les objets similaires}} et {{ui:Chercher et remplacer}}, chacun avec sa touche |
| Vue | {{ui:Étendue}}, {{ui:Fenêtre}}, {{ui:Précédent}}, et {{ui:Plus}} : {{ui:Mesurer une distance}}, {{ui:Aire}}, {{ui:Mesurer (rayon, angle …)}}, et l'écran divisé : {{ui:Diviser côte à côte}}, {{ui:Diviser superposé}}, {{ui:Quatre volets}}, {{ui:Un seul volet}} (voir [Diviser l'écran](topic:split-screen)), et {{ui:Tourner la vue de 90° à gauche}}, {{ui:Tourner la vue de 90° à droite}}, {{ui:Retour au monde}} (voir [Tourner la vue](topic:ucs-and-turned-view)) |

{{ui:Copier}} dans le groupe {{ui:Modifier}} est la commande {{cmd:COPY}} (point de base, puis l'endroit où va chaque copie) ; {{ui:Copier}} dans le groupe {{ui:Édition}} place les objets dans le presse-papiers pour {{ui:Coller}}. Voir [Copier, coller et dupliquer](topic:copy-paste). Le bouton de la commande en cours reste en surbrillance jusqu'à la fin de la commande. Les info-bulles indiquent les raccourcis Windows (« Ctrl+O ») ; sur Mac, {{key:Mod+O}} fonctionne aussi.

Sur une fenêtre peu haute (un portable dont l'affichage est mis à l'échelle à 125 % ou plus, par exemple), la barre d'outils ne prend jamais la place du dessin : quand le dessin disposerait de trop peu de hauteur, les boutons perdent les mots sous leurs icônes ainsi que les noms de groupes (survolez un bouton pour voir son nom), et si cela ne suffit pas, la barre d'outils devient une seule ligne qui défile sur le côté. Une fenêtre plus haute ramène les mots.

## Le panneau de gauche

Le panneau de gauche comporte trois sections.

- **{{ui:Calques}}.** Tous les calques du dessin, avec un point plein sur le calque courant. Cliquez sur un nom pour rendre ce calque courant. Chaque ligne a un échantillon de couleur (cliquez dessus pour choisir une couleur) et quatre boutons : activé/désactivé (œil), geler (flocon), verrouiller (cadenas) et tracer (imprimante). {{ui:Nouveau calque}} ouvre une boîte pour en ajouter un. Voir [Organiser un dessin avec des calques](topic:layers).
- **{{ui:Blocs}}.** Les blocs définis dans le dessin, le nombre d'utilisations de chacun, et un bouton {{ui:Insérer}} pour chacun. Voir [Créer et insérer des blocs](topic:blocks).
- **{{ui:Dessin}}.** Des informations sur le fichier ouvert : nom (avec « (modifié) » en cas de modifications non enregistrées), format, taille, unités, nombre d'objets, de calques, de blocs et de feuilles. Après l'ouverture d'un fichier, une boîte « À propos de ce fichier » liste tout ce que CadCraft n'a pas pu afficher ou a dû convertir.

## La zone de dessin

Le milieu de l'écran est le dessin. Le pointeur est un réticule. Quand CadCraft attend un point, un petit repère et une étiquette (« Extrémité », « Milieu ») montrent où un accrochage aux objets va tomber. Quand il attend des objets, le réticule porte une cible de sélection et les objets qui se trouvent dessous s'illuminent.

Quand le dessin est vide, une carte « Commencer un dessin » propose quelques premières commandes. Elle disparaît dès que vous lancez une commande ou ouvrez un fichier. Vous pouvez déposer un fichier DWG ou DXF n'importe où sur cette zone pour l'ouvrir.

## Les onglets sous le dessin

Sous le dessin se trouvent les onglets : {{ui:Modèle}} en premier, puis {{ui:3D}}, puis un onglet par feuille (présentation), puis un bouton {{ui:+}}.

- {{ui:Modèle}} est le dessin lui-même, à pleine taille, en unités de dessin.
- {{ui:3D}} montre le dessin posé au sol et les solides qui en sont issus. Pendant son affichage, la barre d'outils comporte un groupe {{ui:3D}} à la place des groupes de dessin. Voir [Modéliser en 3D](topic:3d-solids).
- Chaque onglet de feuille est une feuille de papier avec un cartouche et des fenêtres de présentation donnant sur le modèle. Ce que vous y dessinez est en unités papier (millimètres ou pouces). Double-cliquez dans une fenêtre de présentation pour travailler sur le modèle à travers elle (voir [Travailler sur le modèle à travers une fenêtre de présentation](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Un nom de feuille trop long est tronqué sur son onglet ; survolez l'onglet pour voir le nom entier. Avec de nombreuses feuilles, {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Onglets de feuilles}} › {{ui:Numéros de feuilles seulement}} n'affiche que le numéro de chaque feuille (A-101) sur son onglet.
- {{ui:+}} crée une nouvelle feuille avec un cadre, un cartouche et une fenêtre de présentation. C'est la même chose que la commande {{cmd:LAYOUT}}.
- Double-cliquez sur l'onglet d'une feuille pour la renommer. Avec un onglet actif, {{key:Left}} et {{key:Right}} passent d'un onglet à l'autre.

Chaque onglet conserve son propre zoom et son propre panoramique. Voir [Préparer une feuille](topic:sheets-and-viewports).

## Le panneau de droite : Propriétés

Le panneau de droite change selon ce qui est sélectionné.

- **Rien n'est sélectionné, sur l'onglet {{ui:Modèle}} :** le titre indique {{ui:Réglages actuels}}. Vous y réglez le {{ui:Calque}}, la {{ui:Couleur}} et la {{ui:Hauteur du texte}} des nouveaux objets, les {{ui:Unités}} du dessin, et les tailles des nouvelles cotes ({{ui:Hauteur du texte}}, {{ui:Taille de flèche}}, {{ui:Décimales}}, {{ui:Échelle globale}}).
- **Rien n'est sélectionné, sur une feuille :** le titre indique « Feuille : » suivi du nom de la feuille. Vous pouvez renommer la feuille, changer son {{ui:Papier}} et son {{ui:Orientation}}, {{ui:Tracer cette feuille}} ou {{ui:Supprimer cette feuille}}. Les réglages des nouveaux objets suivent en dessous.
- **Un objet est sélectionné :** son type en titre (Ligne, Cercle, Texte, Cote, Fenêtre de présentation …), puis son calque, sa couleur et sa géométrie. Saisissez une nouvelle valeur et appuyez sur {{key:Enter}} pour la modifier.
- **Plusieurs objets sont sélectionnés :** leur nombre, ainsi que leur {{ui:Calque}} et leur {{ui:Couleur}} communs. Modifier l'un ou l'autre les modifie tous. « Variable » signifie qu'ils diffèrent.

Voir [Modifier avec les poignées et les propriétés](topic:grips-and-properties).

En dessous, le panneau {{ui:Paramètres}} s'ouvre quand vous choisissez {{ui:Paramètres}} ou saisissez {{cmd:PARAMETERS}} : tous les paramètres et toutes les contraintes dimensionnelles dans un seul tableau. Voir [Utiliser les paramètres et les équations](topic:parameters).

## La ligne de commande

En bas se trouve la ligne de commande : l'historique de ce que vous avez fait, et en dessous l'invite.

- L'invite affiche `Commande :` quand rien n'est en cours. Pendant qu'une commande s'exécute, elle affiche la question, ses options entre crochets et la valeur par défaut entre chevrons, par exemple `Indiquez le rayon du cercle [Diamètre] <500> :`.
- Pendant que vous saisissez un nom de commande, une suggestion à droite propose les commandes correspondantes. Appuyez sur {{key:Tab}} pour accepter la première. « Commande inexistante » signifie que rien ne correspond.
- {{key:Up}} et {{key:Down}} rappellent les lignes saisies précédemment.
- L'historique conserve les 400 dernières lignes. Les messages des commandes, les mesures de {{cmd:DIST}} et {{cmd:LIST}}, et les comptes rendus d'enregistrement et de traçage y apparaissent.

## La barre d'état

La toute dernière ligne en bas est la barre d'état.

- Les **coordonnées** à gauche : le X et le Y du réticule. Quand une commande a un point de base, elle affiche aussi la distance et l'angle depuis ce point, par exemple `Δ 1200 < 90°`.
- Les **messages** au milieu, tels que « Ortho activé » ou « Calque courant : Walls ». Ils s'estompent au bout de quelques secondes.
- **{{ui:Grille}}**, **{{ui:Ortho}}**, **{{ui:Polaire}}**, **{{ui:Accrochage}}**, **{{ui:Repérage}}**, **{{ui:Dyn}}** et **{{ui:LWT}}** à droite. Chacun est un interrupteur ; un bouton enfoncé est activé. {{ui:LWT}} affiche les épaisseurs de ligne à l'écran (voir [Épaisseurs de ligne et types de ligne](topic:units-papers-scales#line-weights-and-linetypes)). La petite flèche à côté de {{ui:Accrochage}} ouvre {{ui:Accrochages aux objets}}, où vous cochez les accrochages actifs. Voir [S'accrocher aux points des objets](topic:object-snaps).

## La boîte de dialogue Tracer en PDF

{{ui:Tracer}} (ou {{key:Mod+P}}) ouvre la boîte de dialogue {{ui:Tracer en PDF}}, avec les réglages à gauche et un aperçu en direct à droite. Voir [Tracer en PDF](topic:plot-pdf).

## L'aide

{{key:F1}} ou le bouton {{ui:Aide}} ouvre cette aide dans un panneau latéral ; le dessin reste utilisable à côté. Elle fonctionne sans connexion. {{key:F1}} de nouveau, ou {{key:Esc}} dans le panneau, la ferme. Voir [Utiliser cette aide](common:help).

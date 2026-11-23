---
title: Paramètres de CadCraft
summary: Les réglages propres à l'application de dessin : taille du curseur, point d'où pend une copie collée sous le curseur, effet d'un clic sur la sélection, nombre de lignes de la barre d'outils, emplacement et hauteur de la ligne de commande, zone supérieure compacte et indicateur de coin.
keywords: ligne de commande, ligne de commande flottante, flottante, ancrer, une seule ligne, f2, historique des commandes, commandline, cmdline, toparea, zone supérieure, compacte, cursorsize, réticule plein écran, curseur plein écran, bord à bord, lignes de la barre d'outils, affichage de la barre d'outils, ctrl f1, paramètres, préférences, options, indicateur de coin, cube de vue, icône d'axes, icône SCU, curseur, réticule, boîte de pointage, point de collage, point de base, clic sur les objets, sélection, pickadd, maj, réinitialiser
from: ae1a81db
---

Ouvrez {{ui:Paramètres}} avec l'engrenage de la barre d'application, ou avec {{key:Mod+,}}. Le premier onglet, {{ui:CadCraft}}, contient les réglages propres à cette application ; {{ui:Général}} contient ceux que partagent toutes les applications de la famille (thème, taille du texte et largeurs des panneaux, aspect et ordre de la barre d'outils). Les réglages de CadCraft n'existent que dans l'application : vous les modifiez ici, et ce navigateur s'en souvient. {{ui:Réinitialiser les paramètres de CadCraft}} remet chacun d'eux à sa valeur de départ.

## Curseur

**Petit**, **Moyen** (par défaut), **Grand** ou **Plein écran** : la taille du réticule et de la boîte de pointage dans le dessin. Une boîte de pointage plus grande désigne aussi les objets d'un peu plus loin, ce qui aide sur un écran tactile ou un dessin très fin.

**Plein écran** trace les deux lignes du réticule d'un bord à l'autre du dessin, même lorsqu'aucune commande n'est en cours, afin de vérifier à l'œil que deux éléments sont alignés sur toute la vue. Lorsque la vue est partagée, les lignes restent dans le volet où vous travaillez. C'est l'équivalent du {{cmd:CURSORSIZE}} 100 d'AutoCAD : tapez {{cmd:CURSORSIZE}} et 100 pour le plein écran ; un nombre plus petit choisit la taille la plus proche (moins de 5 Petit, de 5 à 9 Moyen, de 10 à 99 Grand).

## Point de collage

Là où une copie collée pend du curseur après {{key:Mod+V}} ({{cmd:PASTECLIP}}), jusqu'à ce que vous cliquiez :

- **Coin inférieur gauche** (par défaut) : le coin inférieur gauche de l'étendue des objets copiés, comme dans AutoCAD.
- **Centre** : le milieu de leur étendue. Pratique pour placer un symbole à l'œil.

Une copie faite avec `COPYBASE` pend toujours du point de base que vous avez désigné. {{ui:Coller sur place}} ({{key:Mod+Shift+V}}) ignore ce réglage : il conserve les coordonnées d'origine. Voir [Copier, coller et dupliquer](topic:copy-paste).

## Clic sur les objets

Ce qu'un clic dans le dessin fait à la sélection lorsqu'aucune commande n'est en cours :

- **Ajoute à la sélection** (par défaut) : chaque clic ou fenêtre ajoute des objets ; {{key:Shift}}+clic, ou une fenêtre avec {{key:Shift}}, les retire.
- **Remplace la sélection** : un clic ou une fenêtre ne sélectionne que ce qu'il désigne. {{key:Shift}}+clic ajoute un objet, ou retire celui qui est déjà sélectionné ; une fenêtre avec {{key:Shift}} ajoute.

À une invite `Sélectionnez des objets :` à l'intérieur d'une commande, les clics ajoutent toujours (et {{key:Shift}} retire), quel que soit ce réglage. Voir [Sélectionner des objets](topic:select-objects).

## Clic sur un espace vide

Ce qu'un clic à un endroit où il n'y a pas d'objet fait lorsqu'aucune commande n'est en cours. Dans les deux cas, il lance une fenêtre de sélection (un second clic la termine).

- **Efface la sélection** (par défaut) : ce qui était sélectionné est abandonné. Maintenez {{key:Shift}} en cliquant pour le conserver.
- **Conserve la sélection** : la sélection reste, comme dans d'autres logiciels de dessin ; la fenêtre s'y ajoute. Appuyez sur {{key:Esc}} pour effacer la sélection.

## Glisser pour sélectionner

Ce que fait un appui suivi d'un glissement sur un espace vide :

- **Lasso** (par défaut) : un contour à main levée. Un mouvement vers la droite d'abord sélectionne ce qui est entièrement à l'intérieur ; vers la gauche d'abord, ce qu'il touche. {{key:Space}} pendant le glissement passe de la fenêtre à la capture et à la clôture.
- **Rectangle** : la boîte, comme on la trace avec un clic puis un second clic.

{{cmd:LASSOMODE}} `1` ou `0` règle la même chose. Voir [Sélection au lasso](topic:lasso-selection).

## Glisser pour ajuster et prolonger

Ce qu'un appui sur un espace vide, suivi d'un glissement, fait dans {{cmd:TRIM}} et {{cmd:EXTEND}} :

- **Un tracé** (par défaut) : un tracé à main levée ; chaque morceau qu'il traverse est ajusté (ou prolongé).
- **Une fenêtre** : une boîte ; chaque morceau qu'elle touche est ajusté, comme le fait l'option `C`.

Voir [Ajuster et prolonger](topic:trim-and-extend).

## Position de la barre d'outils

{{ui:CadCraft}} › {{ui:Position de la barre d'outils}} : **Haut** (par défaut, comme toujours), **Bas**, **Gauche** ou **Droite**. À gauche ou à droite, les groupes d'outils s'empilent dans une colonne qui défile lorsqu'elle dépasse la fenêtre, et les boutons se répartissent sur deux ou trois lignes. Le choix est enregistré avec vos paramètres, et {{cmd:TOOLBARDOCK}} (`TBDOCK`) le règle depuis la ligne de commande. {{ui:Général}} › {{ui:Réinitialiser la disposition}} remet la barre d'outils en haut.

Les barres des styles de menu se placent dans la barre d'outils et la suivent, mais le style {{ui:Ruban}} est conçu pour s'étendre en haut ou en bas : sur un côté, il prend une colonne étroite qui défile. Sur un téléphone, la barre d'outils reste là où la disposition du téléphone la place.

## Lignes de la barre d'outils

Le nombre de lignes qu'occupent les outils au-dessus du dessin, dans la barre d'outils de CadCraft et dans les styles {{ui:Dessin classique}} et {{ui:Ruban}} :

- **Retour à la ligne** (par défaut) : les outils passent à la ligne selon la largeur de la fenêtre.
- **2 lignes** : deux lignes au maximum. Lorsque les outils tiennent sur deux lignes ou moins à cette largeur, ils passent simplement à la ligne ; sinon, ils occupent deux rangées qui défilent latéralement.
- **1 ligne** : une seule ligne qui défile latéralement, ce qui laisse au dessin le plus de place.

{{key:Shift+Ctrl+F1}} fait défiler les trois, et {{cmd:TOOLBARROWS}} en règle un. Ce que montrent les boutons (icônes et texte, icônes seules, ou texte seul) est un réglage de {{ui:Général}} › {{ui:Barre d'outils}} ; {{key:Ctrl+F1}} le fait défiler, et {{cmd:TOOLBAR}} le règle.

## Ligne de commande

La ligne de commande peut rester ancrée sous le dessin, comme toujours, ou flotter par-dessus ; elle peut aussi être réduite à une seule ligne.

- **La faire flotter.** Faites glisser la poignée à son extrémité gauche dans le dessin, ou choisissez {{ui:Flottante au-dessus du dessin}} dans son menu {{ui:Options de la ligne de commande}} (les trois points à son extrémité droite). Faites glisser la poignée à nouveau pour la déplacer ; sa place est conservée lorsque la fenêtre change de taille. Faites glisser son bord droit pour l'élargir ou la rétrécir. Déposez-la sur la barre d'état, ou choisissez {{ui:Ancrer en bas}}, pour l'ancrer à nouveau.
- **La rendre plus fine ou plus haute.** Faites glisser son bord supérieur : chaque cran équivaut à une ligne d'historique. Jusqu'à zéro ligne, elle devient une **ligne de commande d'une seule ligne** : seuls l'invite et ce que vous tapez s'affichent, et un nouveau message apparaît brièvement au-dessus. Un double-clic sur le bord supérieur bascule entre une ligne et la hauteur que vous aviez.
- **L'historique.** {{key:F2}}, ou le bouton horloge de la ligne de commande ({{ui:Historique des commandes (F2)}}), ouvre tout l'historique au-dessus de la ligne (en dessous lorsque la ligne flotte près du haut de la fenêtre). La saisie reste dans la ligne de commande ; {{key:PageUp}} et {{key:PageDown}} font défiler l'historique, et {{key:Esc}}, {{key:F2}} ou un clic ailleurs le referment. Une touche à vous sur F2 l'emporte sur cela.
- **Au clavier.** La poignée est un bouton : lorsqu'elle a le focus, les touches fléchées déplacent une ligne de commande flottante (avec {{key:Shift}}, par pas plus grands) ; {{key:Up}} fait flotter une ligne ancrée, et {{key:Down}} au bord inférieur l'ancre. Le bord supérieur est un séparateur : {{key:Up}} et {{key:Down}} ajoutent ou retirent une ligne, {{key:Home}} la réduit à une ligne, {{key:End}} la rend la plus haute. Les lecteurs d'écran entendent toujours chaque message, y compris dans la ligne de commande d'une seule ligne.

{{ui:CadCraft}} › {{ui:Ligne de commande}} propose les mêmes choix : {{ui:Ancrée en bas}} ou {{ui:Flottante}}, {{ui:Lignes d'historique affichées}} (0 à 12) et {{ui:Hauteur standard}}. {{cmd:COMMANDLINE}} (`CMDLINE`) les règle depuis la ligne de commande. L'emplacement et la hauteur sont conservés pour CadCraft dans ce navigateur avec le reste de la disposition, si bien qu'un environnement de travail enregistré les garde ; {{ui:Général}} › {{ui:Réinitialiser la disposition}} ancre à nouveau la ligne de commande à sa hauteur standard. Sur un téléphone, la ligne de commande reste ancrée avec une seule ligne d'historique ; le bouton d'historique y fonctionne aussi.

{{ui:CadCraft}} › {{ui:Lettres d'option}} conserve les lettres que vous avez choisies pour les options de commande : {{ui:Modifier…}} ouvre le fichier, {{ui:Importer…}} le remplace par un fichier que vous choisissez, et {{ui:Exporter}} l'enregistre. Voir [Donner à vos options de commande vos propres lettres](topic:option-letters).

Lorsque la fenêtre est basse et que la vérification de la disposition propose une disposition plus serrée, son bouton {{ui:Oui}} réduit aussi la ligne de commande à une seule ligne si le dessin reste trop court après les barres d'outils.

## Zone supérieure

{{ui:CadCraft}} › {{ui:Zone supérieure}} : **Standard** (par défaut) ou **Compacte**. Compacte réduit les barres au-dessus du dessin dans tous les styles de menu : les noms des groupes et les mots sous les icônes disparaissent (les infobulles et les lecteurs d'écran les conservent) et les boutons sont plus serrés. Cela fonctionne avec [Lignes de la barre d'outils](topic:settings#toolbar-rows) : Compacte et **1 ligne** laissent au dessin le plus de place. {{cmd:TOPAREA}} le règle.

## Indicateur de coin

Ce qui se trouve dans le coin du dessin :

- **Automatique** (par défaut) : l'icône d'axes sur l'onglet {{ui:Modèle}} et le cube de vue sur l'onglet {{ui:3D}}.
- **Icône d'axes** : le repère X et Y en bas à gauche de l'onglet {{ui:Modèle}}, et un petit repère X, Y et Z sur l'onglet {{ui:3D}}.
- **Cube de vue** : un cube en haut à droite des deux onglets. Sur l'onglet {{ui:Modèle}}, il montre le dessin depuis le dessus ; cliquer sur une autre face, arête ou un autre coin ouvre l'onglet {{ui:3D}} en regardant depuis là. Sur l'onglet 3D, il tourne avec la vue : cliquez pour regarder d'un côté, glissez pour orbiter, et la vue d'accueil revient à la vue isométrique. Voir [Modèle en 3D](topic:3d-solids).
- **Aucun** : rien dans le coin.

Les feuilles n'affichent ni l'un ni l'autre.

## Longueur et aire de la sélection

- **Dans la barre d'état** (par défaut) : lorsque des objets sont sélectionnés, la barre d'état affiche leur longueur totale et l'aire totale des objets fermés. Voir [Totaux d'une sélection](topic:properties-panel#totals-of-a-selection).
- **Masqué** : la barre d'état ne les affiche pas. Propriétés les montre toujours pour plusieurs objets.

## Grille, Ortho et accrochages

Ceux-ci ne figurent pas dans la boîte de dialogue : les boutons {{ui:Grille}}, {{ui:Ortho}} et {{ui:Accrochage}} de la barre d'état (ou {{key:F7}}, {{key:F8}}, {{key:F3}}) et la liste des accrochages aux objets à côté sont mémorisés dès que vous les réglez. Voir [Accrocher des points sur les objets](topic:object-snaps).

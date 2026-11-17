---
title: Paramètres de CadCraft
summary: Les paramètres propres à l'application de dessin : taille du curseur, point d'accroche d'une copie collée, effet d'un clic sur la sélection, nombre de rangées de la barre d'outils, emplacement et hauteur de la ligne de commande, zone supérieure compacte et indicateur de coin.
keywords: ligne de commande, ligne de commande flottante, flottante, ancrer, une ligne, f2, historique des commandes, commandline, cmdline, toparea, zone supérieure, compacte, cursorsize, curseur plein écran, curseur bord à bord, rangées de la barre d'outils, affichage de la barre d'outils, ctrl f1, paramètres, préférences, options, indicateur de coin, cube de vue, icône d'axe, icône SCU, curseur, réticule, boîte de visée, point de collage, point de base, clic sur les objets, sélection, pickadd, maj, réinitialiser
from: 0896eb42
---

Ouvrez {{ui:Paramètres}} avec l'engrenage de la barre d'application ou {{key:Mod+,}}. Le premier onglet, {{ui:CadCraft}}, regroupe les paramètres propres à cette application ; {{ui:Général}} regroupe ceux que partagent toutes les applications de la famille (thème, taille du texte et largeurs des panneaux, apparence et ordre de la barre d'outils). Les paramètres de CadCraft n'existent que dans l'application : vous les modifiez ici, et ce navigateur s'en souvient. {{ui:Réinitialiser les paramètres de CadCraft}} remet chacun à sa valeur de départ.

## Curseur

**Petit**, **Moyen** (par défaut), **Grand** ou **Plein écran** : la taille du réticule et de la boîte de visée dans le dessin. Une boîte de visée plus grande prend aussi les objets d'un peu plus loin, ce qui aide sur un écran tactile ou un dessin très fin.

**Plein écran** fait traverser le réticule de bord à bord du dessin, y compris lorsqu'aucune commande n'est en cours, pour vérifier à l'œil que deux éléments sont alignés sur toute la vue. Lorsque la vue est scindée, les lignes restent dans le volet où vous travaillez. Comme la commande {{cmd:CURSORSIZE}} 100 d'AutoCAD : tapez {{cmd:CURSORSIZE}} puis 100 pour le plein écran ; un nombre plus petit choisit la taille la plus proche (en dessous de 5 Petit, de 5 à 9 Moyen, de 10 à 99 Grand).

## Point de collage

Où une copie collée se suspend au curseur après {{key:Mod+V}} ({{cmd:PASTECLIP}}), jusqu'à votre clic :

- **Coin inférieur gauche** (par défaut) : le coin inférieur gauche de l'étendue des objets copiés, comme dans AutoCAD.
- **Centre** : le milieu de leur étendue. Pratique pour placer un symbole à l'œil.

Une copie faite avec `COPYBASE` est toujours suspendue au point de base que vous avez choisi. {{ui:Coller sur place}} ({{key:Mod+Shift+V}}) ignore ce réglage : il conserve les coordonnées d'origine. Voir [Copier, coller et dupliquer](topic:copy-paste).

## Clic sur les objets

Ce que fait un clic dans le dessin sur la sélection lorsqu'aucune commande n'est en cours :

- **Ajoute à la sélection** (par défaut) : chaque clic ou fenêtre ajoute des objets ; {{key:Shift}}+clic, ou une fenêtre avec {{key:Shift}}, les retire.
- **Remplace la sélection** : un clic ou une fenêtre ne sélectionne que ce qu'il prend. {{key:Shift}}+clic ajoute un objet, ou retire un objet déjà sélectionné ; une fenêtre avec {{key:Shift}} ajoute.

À l'invite « Sélectionnez des objets : » dans une commande, les clics ajoutent toujours (et {{key:Shift}} retire), quel que soit ce réglage. Voir [Sélectionner des objets](topic:select-objects).

## Clic sur un endroit vide

Ce que fait un clic à un endroit sans objet lorsqu'aucune commande n'est en cours. Dans les deux cas, il lance une fenêtre de sélection (un second clic la termine).

- **Efface la sélection** (par défaut) : ce qui était sélectionné est relâché. Maintenez {{key:Shift}} en cliquant pour la conserver.
- **Garde la sélection** : la sélection reste, comme dans d'autres logiciels de dessin ; la fenêtre s'y ajoute. Appuyez sur {{key:Esc}} pour effacer la sélection.

## Glisser pour sélectionner

Ce que dessine un appui suivi d'un glissement sur un endroit vide :

- **Lasso** (par défaut) : un contour à main levée. Un mouvement vers la droite d'abord sélectionne ce qui est entièrement inclus, vers la gauche d'abord ce qu'il touche ; {{key:Space}} pendant le glissement permet de passer entre fenêtre, capture et clôture.
- **Rectangle** : le cadre, comme le tracent un clic puis un second clic.

{{cmd:LASSOMODE}} `1` ou `0` règle la même chose. Voir [Sélection au lasso](topic:lasso-selection).

## Glisser pour ajuster et prolonger

Ce que fait un appui sur un endroit vide suivi d'un glissement dans {{cmd:TRIM}} et {{cmd:EXTEND}} :

- **Un tracé** (par défaut) : un chemin à main levée ; chaque morceau qu'il traverse est ajusté (ou prolongé).
- **Une fenêtre** : un cadre ; chaque morceau qu'il touche est ajusté, comme le fait l'option `C`.

Voir [Ajuster et prolonger](topic:trim-and-extend).

## Position de la barre d'outils

{{ui:CadCraft}} › {{ui:Position de la barre d'outils}} : **Haut** (par défaut, comme auparavant), **Bas**, **Gauche** ou **Droite**. Sur la gauche ou la droite, les groupes d'outils s'empilent en colonne qui défile lorsqu'elle est plus haute que la fenêtre, et les boutons se répartissent sur deux ou trois lignes. Le choix est enregistré avec vos paramètres, et {{cmd:TOOLBARDOCK}} (`TBDOCK`) le définit depuis la ligne de commande. {{ui:Général}} › {{ui:Réinitialiser la disposition}} replace la barre d'outils en haut.

Les barres des styles de menu sont à l'intérieur de la barre d'outils et se déplacent avec elle, mais le style {{ui:Ruban}} est conçu pour s'étendre en haut ou en bas : sur un côté, il prend une colonne étroite qui défile. Sur un téléphone, la barre d'outils reste à l'endroit que lui donne la disposition du téléphone.

## Rangées de la barre d'outils

Le nombre de lignes occupées par les outils au-dessus du dessin, dans la barre d'outils de CadCraft et dans les styles {{ui:Dessin classique}} et {{ui:Ruban}} :

- **Retour à la ligne** (par défaut) : les outils se répartissent sur la largeur de la fenêtre.
- **2 rangées** : deux lignes au maximum. Si les outils tiennent sur deux lignes ou moins à cette largeur, ils retournent simplement à la ligne ; sinon ils occupent deux rangées qui défilent latéralement.
- **1 rangée** : une seule ligne qui défile latéralement, ce qui laisse le plus de place au dessin.

{{key:Shift+Ctrl+F1}} fait défiler les trois, et {{cmd:TOOLBARROWS}} en règle une. L'affichage des boutons (icônes et texte, icônes seules ou texte seul) est un réglage de {{ui:Général}} › {{ui:Barre d'outils}} ; {{key:Ctrl+F1}} le fait défiler et {{cmd:TOOLBAR}} le règle.

## Ligne de commande

La ligne de commande peut rester ancrée sous le dessin, comme auparavant, ou flotter au-dessus de lui, et elle peut être aussi fine qu'une seule ligne.

- **La rendre flottante.** Faites glisser la poignée à son extrémité gauche dans le dessin, ou choisissez {{ui:Flotter au-dessus du dessin}} dans son menu {{ui:Options de la ligne de commande}} (les trois points à son extrémité droite). Faites à nouveau glisser la poignée pour la déplacer ; sa place est conservée lorsque la fenêtre change de taille. Faites glisser son bord droit pour la rendre plus large ou plus étroite. Déposez-la sur la barre d'état, ou choisissez {{ui:Ancrer en bas}}, pour l'ancrer à nouveau.
- **La rendre plus fine ou plus haute.** Faites glisser son bord supérieur : chaque pas équivaut à une ligne d'historique. Jusqu'à zéro ligne, elle devient une **ligne de commande d'une seule ligne** : seulement l'invite et ce que vous tapez, et un nouveau message s'affiche brièvement au-dessus. Un double-clic sur le bord supérieur bascule entre une ligne et la hauteur que vous aviez.
- **L'historique.** {{key:F2}}, ou le bouton horloge de la ligne de commande ({{ui:Historique des commandes (F2)}}), ouvre tout l'historique au-dessus de la ligne (en dessous lorsque la ligne flotte près du haut de la fenêtre). La saisie continue d'aller à la ligne de commande ; {{key:PageUp}} et {{key:PageDown}} font défiler l'historique, et {{key:Esc}}, {{key:F2}} ou un clic ailleurs le referme. Une touche qui vous est propre sur F2 l'emporte sur cela.
- **Au clavier.** La poignée est un bouton : lorsqu'elle a le focus, les flèches déplacent une ligne de commande flottante (avec {{key:Shift}}, par pas plus grands) ; {{key:Up}} fait flotter une ligne ancrée, et {{key:Down}} au bord inférieur l'ancre. Le bord supérieur est un séparateur : {{key:Up}} et {{key:Down}} ajoutent ou retirent une ligne, {{key:Home}} la réduit à une ligne, {{key:End}} la rend la plus haute. Les lecteurs d'écran entendent encore chaque message, y compris dans la ligne de commande d'une seule ligne.

{{ui:CadCraft}} › {{ui:Ligne de commande}} propose les mêmes choix : {{ui:Ancrée en bas}} ou {{ui:Flottante}}, {{ui:Lignes d'historique affichées}} (0 à 12) et {{ui:Hauteur standard}}. {{cmd:COMMANDLINE}} (`CMDLINE`) les règle depuis la ligne de commande. L'emplacement et la hauteur sont conservés pour CadCraft dans ce navigateur avec le reste de la disposition, si bien qu'un environnement de travail enregistré les conserve ; {{ui:Général}} › {{ui:Réinitialiser la disposition}} ancre à nouveau la ligne de commande à sa hauteur standard. Sur un téléphone, la ligne de commande reste ancrée avec une seule ligne d'historique ; le bouton d'historique y fonctionne aussi.

Lorsque la fenêtre est basse et que la vérification de la disposition propose une disposition plus serrée, son {{ui:Oui}} règle aussi la ligne de commande sur une seule ligne si le dessin reste trop court après les barres d'outils.

## Zone supérieure

{{ui:CadCraft}} › {{ui:Zone supérieure}} : **Standard** (par défaut) ou **Compacte**. Compacte réduit les barres au-dessus du dessin dans chaque style de menu : les noms de groupes et les mots sous les icônes disparaissent (les info-bulles et les lecteurs d'écran les conservent) et les boutons sont plus serrés. Cela fonctionne avec [Rangées de la barre d'outils](topic:settings#toolbar-rows) : Compacte et **1 rangée** laissent le plus de place au dessin. {{cmd:TOPAREA}} le règle.

## Indicateur de coin

Ce qui se trouve dans le coin du dessin :

- **Automatique** (par défaut) : l'icône d'axe sur l'onglet {{ui:Modèle}} et le cube de vue sur l'onglet {{ui:3D}}.
- **Icône d'axe** : le repère X et Y en bas à gauche de l'onglet {{ui:Modèle}}, et un petit repère X, Y et Z sur l'onglet {{ui:3D}}.
- **Cube de vue** : un cube en haut à droite des deux onglets. Sur l'onglet {{ui:Modèle}}, il montre le dessin depuis le dessus, et un clic sur une autre face, arête ou un autre coin ouvre l'onglet {{ui:3D}} en regardant depuis là. Sur l'onglet 3D, il tourne avec la vue : cliquez pour regarder depuis un côté, faites glisser pour orbiter, et l'icône maison revient à la vue isométrique. Voir [Modèle en 3D](topic:3d-solids).
- **Aucun** : rien dans le coin.

Les feuilles n'affichent ni l'un ni l'autre.

## Longueur et aire de la sélection

- **Dans la barre d'état** (par défaut) : lorsque des objets sont sélectionnés, la barre d'état affiche leur longueur totale et l'aire totale de ceux qui sont fermés. Voir [Totaux d'une sélection](topic:properties-panel#totals-of-a-selection).
- **Masqué** : la barre d'état ne les affiche pas. Propriétés les montre encore pour plusieurs objets.

## Grille, Ortho et accrochages

Ceux-ci ne figurent pas dans la boîte de dialogue : les boutons {{ui:Grille}}, {{ui:Ortho}} et {{ui:Accrochage}} de la barre d'état (ou {{key:F7}}, {{key:F8}}, {{key:F3}}) et la liste des accrochages aux objets à côté sont mémorisés tels que vous les laissez. Voir [Accrocher aux points des objets](topic:object-snaps).

---
title: Référence des commandes
summary: Chaque commande de l'application de dessin CadCraft, avec ses alias, les questions qu'elle pose, ses options et ses valeurs par défaut.
keywords: commandes, alias, liste des commandes, aire, périmètre, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Tapez un nom de commande ou un alias, puis appuyez sur {{key:Enter}} ou {{key:Space}}. La casse n'a pas d'importance, et un `_`, `-`, `.` ou `'` placé au début est ignoré. Tapez `HELP` (ou `?`) pour afficher une courte liste de toutes les commandes dans l'historique de la ligne de commande ; appuyez sur {{key:F1}} pour cette aide.

Comment lire les invites : les options sont entre crochets, et vous en choisissez une en tapant ses majuscules (`D` pour Diamètre). Une valeur par défaut est entre chevrons ; appuyez sur {{key:Enter}} pour l'accepter. Lorsqu'un point est demandé, vous pouvez cliquer ou saisir l'un des formats décrits dans [Saisie des coordonnées et des distances](topic:coordinate-entry). Lorsqu'une distance est demandée, vous pouvez taper un nombre ou cliquer sur deux points.

Appuyer sur {{key:Enter}} lorsqu'un point ou un objet est requis, sans valeur par défaut, termine la commande. {{key:Esc}} l'annule. Tout ce qu'une commande fait constitue une seule étape d'annulation.

## Dessiner

### LINE

Alias : `L`. Segments droits, chacun étant un objet distinct.

- `Spécifiez le premier point` ({{key:Enter}} : commence au dernier point donné)
- `Spécifiez le point suivant [Annuler (U)]`, répété. Après deux segments : `[Annuler (U)/Fermer (C)]`.
- `U` retire le dernier segment, `C` ferme jusqu'au premier point et termine. {{key:Enter}} termine.

### PLINE

Alias : `PL`. Une polyligne de segments droits et d'arcs.

- `Spécifiez le point de départ`
- `Spécifiez le point suivant [Arc/Fermer (C)/Annuler (U)]` (Fermer dès deux segments)
- `A` passe aux arcs : `Spécifiez le point final de l'arc [Ligne/Fermer (CL)/Annuler (U)]`. Chaque arc se poursuit tangentiellement au segment précédent. `L` revient aux lignes, `CL` ferme avec un arc.
- {{key:Enter}} termine ; la polyligne reste ouverte.

### CIRCLE

Alias : `C`.

- `Spécifiez le centre du cercle [3P/2P/Ttr (tangente tangente rayon)]`
- `Spécifiez le rayon du cercle [Diamètre] <dernier rayon>` ; `D` demande `Spécifiez le diamètre du cercle`.
- `2P` : les deux extrémités d'un diamètre. `3P` : trois points sur le cercle.
- `T` (aussi la commande `TTR`, et {{ui:Dessiner}} › {{ui:Plus}} › {{ui:Cercle : Tangente, Tangente, Rayon}}) : `Spécifiez le point sur l'objet pour la première tangente du cercle`, puis la seconde, puis le rayon ({{key:Enter}} : le dernier). Le cercle touche les deux objets (lignes, arcs, cercles, segments de polyligne, aussi dans les blocs) ; parmi les cercles qui conviennent, celui qui touche au plus près de vos points de désignation. « Le cercle n'existe pas » lorsqu'aucun ne convient.
- `TTT` (ou {{ui:Dessiner}} › {{ui:Plus}} › {{ui:Cercle : Tangente, Tangente, Tangente}}) : trois objets ; le cercle qui les touche tous, le plus proche de vos points (trois lignes donnent le cercle inscrit ou un cercle circonscrit, selon l'endroit où vous cliquez).

### ARC

Alias : `A`.

- `Spécifiez le point de départ de l'arc [Centre]`, `Spécifiez le second point de l'arc`, `Spécifiez le point final de l'arc` : un arc passant par trois points.
- `C` : `Spécifiez le centre de l'arc`, `Spécifiez le point de départ de l'arc`, `Spécifiez le point final de l'arc`. L'arc va dans le sens antihoraire, du départ à la fin.

### RECTANG

Alias : `REC`, `RECTANGLE`. Une polyligne fermée.

- `Spécifiez le premier coin`, `Spécifiez l'autre coin`. Tapez `@largeur,hauteur` pour le second coin.

### POLYGON

Alias : `POL`. Un polygone régulier sous forme de polyligne fermée.

- `Saisissez le nombre de côtés <4>` (3 à 1024)
- `Spécifiez le centre du polygone`
- `Saisissez une option [Inscrit dans le cercle/Circonscrit au cercle] <I>`
- `Spécifiez le rayon du cercle` : cliquez ou saisissez un point ; sa distance fixe la taille et sa direction oriente le polygone.

### ELLIPSE

Alias : `EL`.

- `Spécifiez l'extrémité d'un axe de l'ellipse [Centre]`, `Spécifiez l'autre extrémité de l'axe`, `Spécifiez la distance à l'autre axe`
- `C` : `Spécifiez le centre de l'ellipse`, `Spécifiez l'extrémité de l'axe`, puis la distance à l'autre axe.

### HATCH

Alias : `H`, `BH`, `BHATCH` ; ou {{ui:Hachure}} dans la barre d'outils. Affiche d'abord le motif, l'échelle et l'angle courants.

- `Désignez un point intérieur [Sélectionner des objets (S)/Motif (P)/Échelle (SC)/Angle (A)]`, répété (`Annuler (U)` dès qu'une zone existe) : chaque clic ajoute la zone fermée qui l'entoure, avec les formes fermées à l'intérieur comme îlots. {{key:Enter}} crée une seule hachure de toutes ces zones.
- `S` : `Sélectionnez des objets fermés` (polylignes fermées, cercles, ellipses fermées).
- `P` : `Saisissez un nom de motif, SOLID, ou ? pour la liste <courant>`. `SC` : `Spécifiez l'échelle du motif`. `A` : `Spécifiez l'angle du motif`.

Voir [Hachures et remplissage de zones](topic:hatch).

### POINT

Alias : `PO` ; ou {{ui:Dessiner}} › {{ui:Plus}} › {{ui:Point}}. Objets point, un par clic, jusqu'à {{key:Enter}}.

- `Spécifiez un point`

### XLINE

Alias : `XL` ; ou {{ui:Dessiner}} › {{ui:Plus}} › {{ui:Ligne de construction}}. Lignes de construction, sans fin des deux côtés. Voir [Lignes de construction et demi-droites](topic:construction-lines).

- `Spécifiez un point [Horizontale/Verticale/Angle/Bissectrice/Décalage (O)]`, puis `Spécifiez le point de passage` pour chaque ligne, jusqu'à {{key:Enter}}.
- `A` : `Saisissez l'angle de la ligne de construction [Référence] <0>` ; `R` demande d'abord `Sélectionnez un objet ligne`.
- `B` : `Spécifiez le sommet de l'angle`, `Spécifiez le point de départ de l'angle`, puis `Spécifiez le point d'arrivée de l'angle` pour chaque ligne.
- `O` : `Spécifiez la distance de décalage [Passant par (T)] <Passant par (T)>`, puis `Sélectionnez un objet ligne` et `Spécifiez le côté à décaler` (ou `Spécifiez le point de passage`) pour chaque ligne.

### RAY

Pas d'alias ; ou {{ui:Dessiner}} › {{ui:Plus}} › {{ui:Demi-droite}}. `Spécifiez le point de départ`, puis `Spécifiez le point de passage` pour chaque demi-droite, jusqu'à {{key:Enter}}.

### TEXT

Alias : `DT`, `DTEXT` ; ou {{ui:Texte}} dans la barre d'outils. Texte sur une seule ligne ; chaque ligne est un objet distinct.

- `Spécifiez le point de départ du texte [Justifier]`
- `J` : `Saisissez une option [Gauche (L)/Centre/Droite (R)/Milieu/TL/MC] <L>`, puis `Spécifiez le point d'insertion du texte`
- `Spécifiez la hauteur <hauteur du texte courante>`
- `Spécifiez l'angle de rotation du texte <0>`
- `Saisissez le texte`, répété : chaque {{key:Enter}} commence la ligne suivante, en dessous. {{key:Enter}} sur une ligne vide termine. {{key:Space}} saisit ici un espace.

## Modifier

Alias : `MT`, `T` ; ou {{ui:Paragraphe}} dans la barre d'outils. Texte multiligne qui se répartit sur une largeur, saisi sur place.

- `Spécifiez le premier coin`
- `Spécifiez l'autre coin [Hauteur/Justifier/Interligne/Rotation/Largeur]` : la largeur entre les deux coins est celle où le texte passe à la ligne. `H` demande `Spécifiez la hauteur`, `J` `Saisissez la justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Saisissez le facteur d'interligne (0.25 à 4)`, `R` `Spécifiez l'angle de rotation`, `W` `Spécifiez la largeur (0 pour aucun retour à la ligne)` et saute le second coin.
- Puis une zone s'ouvre sur le dessin : saisissez, {{key:Enter}} pour un nouveau paragraphe, Mod+Enter ou un clic à l'extérieur pour terminer, {{key:Esc}} pour annuler. Sa barre règle la hauteur, l'interligne, la largeur et la justification. Voir [Ajouter du texte et des légendes](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias : `ED`, `DDEDIT` ; ou double-cliquez sur un texte. `Sélectionnez un texte à modifier`, répété jusqu'à {{key:Enter}} : chacun s'ouvre dans la même zone. Lancé sur un texte sélectionné ou double-cliqué, il modifie celui-là et se termine.

### ERASE

Alias : `E`, `DELETE` ; ou appuyez sur {{key:Delete}} avec des objets sélectionnés.

- `Sélectionnez des objets` (ignoré si des objets sont déjà sélectionnés)

### MOVE

Alias : `M`.

- `Sélectionnez des objets`
- `Spécifiez le point de base [Déplacement (D)]`, `Spécifiez le second point`
- `D` : `Spécifiez le déplacement`, saisi sous la forme `dx,dy`.

### COPY

Alias : `CO`, `CP`. Copies autant de fois que vous donnez de points.

- `Sélectionnez des objets`
- `Spécifiez le point de base [Déplacement (D)]`
- `Spécifiez le second point [Annuler (U)]`, répété jusqu'à {{key:Enter}}. `U` retire la dernière copie.

### ROTATE

Alias : `RO`.

- `Sélectionnez des objets`, `Spécifiez le point de base`
- `Spécifiez l'angle de rotation <dernier angle>` : en degrés, positif dans le sens antihoraire ; ou cliquez un point pour tourner vers lui.

### SCALE

Alias : `SC`.

- `Sélectionnez des objets`, `Spécifiez le point de base`
- `Spécifiez le facteur d'échelle` : saisissez un facteur, par exemple `0.5` ou `2`. Un point cliqué donne sa distance au point de base comme facteur.

### MIRROR

Alias : `MI`.

- `Sélectionnez des objets`
- `Spécifiez le premier point de l'axe de symétrie`, `Spécifiez le second point de l'axe de symétrie`
- `Effacer les objets sources ? [Oui (Y)/Non] <N>`

### ALIGN

Alias : `AL` ; ou {{ui:Modifier}} › {{ui:Plus}} › {{ui:Aligner}}.

- `Sélectionnez des objets`
- `Spécifiez le premier point source`, `Spécifiez le premier point de destination`
- `Spécifiez le second point source ({{key:Enter}} pour continuer)`, `Spécifiez le second point de destination`
- `Spécifiez le troisième point source ({{key:Enter}} pour continuer)`, `Spécifiez le troisième point de destination`
- Avec deux paires : `Mettre les objets à l'échelle selon les points d'alignement ? [Oui (Y)/Non] <N>`

Voir [Aligner des objets](topic:modify-objects#align-objects).

### ALIGNTO

- `Sélectionnez des objets` (ou la sélection), `Aligner [Gauche (L)/Centre/Droite (R)/Haut (T)/Milieu/Bas] <Gauche>`, `Vers [Sélection (S)/Premier (F)/Dernier (L)/Point] <Sélection>` ; `P` demande le point. La sélection reste.

### DISTRIBUTE

- `Sélectionnez des objets` (trois au moins), `Répartir [Horizontalement/Verticalement] <Horizontalement>`, `Espacer également [Centres/Espaces (G)] <Espaces (G)>`. Les deux extrêmes restent ; la sélection reste.

### ALIGNPANEL

Alias : `ALP` ; ou {{ui:Modifier}} › {{ui:Plus}} › {{ui:Aligner et répartir}}. Ouvre le panneau qui lance ALIGNTO et DISTRIBUTE par clics.

### LASER

Alias : `LASERCUT` ; ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Laser…}}. Ouvre le panneau Laser au-dessus du dessin : ce que fait chaque calque (découpe, rainure, gravure, remplissage, image), l'aperçu, le G-code GRBL à enregistrer, et le cadrage et l'envoi via Web Serial. Voir [Envoyer un dessin à une découpeuse laser](topic:laser-cutting).

### STRETCH

Alias : `S` ; ou {{ui:Étirer}}. `Sélectionnez les objets à étirer` : tracez des fenêtres de capture (ou tapez `C`) sur les extrémités à déplacer. `Spécifiez le point de base [Déplacement (D)]`, `Spécifiez le second point`. Les points situés dans les fenêtres se déplacent : extrémités de lignes, sommets de polyligne (les segments d'arc gardent leur hauteur), points de cote ; cercles, ellipses, textes, points et blocs se déplacent entiers lorsque leur centre ou leur point d'insertion est dans la fenêtre. Une sélection faite avant la commande conserve les fenêtres de capture (et les lassos) qui l'ont faite, pour qu'elles s'étirent de la même façon. Sans fenêtre, les objets se déplacent entiers.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias : `AR` ; ou {{ui:Réseau}}. `Sélectionnez des objets`, puis `Saisissez le type de réseau [Rectangulaire/POlaire] <Rectangulaire>` (ARRAY seulement).

- Rectangulaire démarre à 4 colonnes × 3 lignes, espacées de 1.5 fois la taille des objets, affiché en aperçu. `Saisissez une option [Nombre (COU)/Espacement (S)/Colonnes (COL)/Lignes (R)/Quitter (X)] <X>` : `COU` demande colonnes et lignes, `S` les distances entre colonnes et entre lignes (négatif va à gauche ou vers le bas), `COL` et `R` une direction chacun.
- Polaire demande `Spécifiez le point central du réseau`, démarre à 6 éléments sur tout le tour, pivotés. `Saisissez une option [Éléments (I)/Angle de remplissage (F)/Pivoter les éléments (ROT)/Quitter (X)] <X>` : `I` éléments, `F` l'angle à remplir (+ antihoraire, − horaire), `ROT` Oui ou Non.
- {{key:Enter}} (Quitter) crée les copies, en objets simples. Une seule étape d'annulation.

### OFFSET

Alias : `O`. Lignes, arcs, cercles et polylignes.

- `Spécifiez la distance de décalage [Passant par (T)] <dernière distance, ou Passant par (T)>`
- `Sélectionnez l'objet à décaler`, puis `Spécifiez le point du côté à décaler` (ou, avec Passant par, `Spécifiez le point de passage`), répété jusqu'à {{key:Enter}}.

### TRIMEXTENDMODE

- `Saisissez la nouvelle valeur de TRIMEXTENDMODE (1 Rapide, 0 Standard)` : comment {{cmd:TRIM}} et {{cmd:EXTEND}} démarrent. `1` Rapide : chaque objet est une arête de coupe ou une limite. `0` Standard : elles demandent d'abord les arêtes. Aussi `(setvar "TRIMEXTENDMODE" 0)` en LISP.

### TRIM

Alias : `TR`. Affiche d'abord `Réglages actuels : mode Rapide (TRIMEXTENDMODE 1), arêtes : sans prolongement, le glissement trace un chemin`. En mode Rapide, chaque objet visible est une arête de coupe, et un objet que rien ne traverse est effacé ; en mode Standard, elle demande d'abord `Sélectionnez les arêtes de coupe (Entrée = tous les objets)` et ne coupe qu'à celles-ci.

- `Sélectionnez l'objet à ajuster ou Maj+sélection pour prolonger [Arêtes de coupe (T)/Clôture (F)/Capture (C)/Mode (O)/Arête (E)/Effacer (R)/Annuler (U)]`, répété : cliquez la partie à retirer (elle s'affiche en gris et en tirets tant que le pointeur reste dessus), glissez un chemin à travers plusieurs parties (toutes partent en une seule étape), ou cliquez deux points vides pour une clôture entre eux. {{key:Shift}} prolonge à la place. `T` choisit les arêtes de coupe (mode Standard), `F` demande des points de clôture, `C` deux coins de fenêtre (les parties partiellement à l'intérieur partent), `O` demande `Saisissez une option de mode d'ajustement [Rapide/Standard]`, `E` demande `Saisissez un mode de prolongement implicite des arêtes [Prolonger/Sans prolongement]` (EDGEMODE), `R` efface les objets que vous sélectionnez, `U` annule le dernier choix ou glissement. {{key:Enter}} termine. Voir [Ajuster et prolonger](topic:trim-and-extend).

### EXTEND

Alias : `EX`. Comme TRIM dans l'autre sens : `Sélectionnez l'objet à prolonger ou Maj+sélection pour ajuster [Arêtes limites (B)/Clôture (F)/Capture (C)/Mode (O)/Arête (E)/Annuler (U)]`. Un clic allonge l'extrémité la plus proche jusqu'à la limite suivante ; un chemin ou une clôture glissé allonge chaque objet traversé ; {{key:Shift}} ajuste. `B` choisit les arêtes limites (mode Standard). Mode et Arête sont partagés avec TRIM.

### LINKVIEWS

Alias : `SYNCVIEWS` ; ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Lier les vues des volets}}, ou l'icône de lien sur les onglets du dessin. `Lier les vues des volets [ON/OFF]` ({{key:Enter}} bascule) : tant que c'est activé, un panoramique ou un zoom dans le volet actif déplace chaque volet qui affiche le même type d'espace. Voir [Diviser l'écran](topic:split-screen).

### OPENIN3D

Pas d'alias ; ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Ouvrir dans ModelCraft}}, où l'application de modélisation 3D reprend un dessin transmis. Ouvre le dessin là-bas, dans un nouvel onglet, en DWG (rien n'est téléversé). Si le navigateur bloque l'onglet, il le signale.

### LASSOMODE

`Saisissez la nouvelle valeur de LASSOMODE (1 = lasso, 0 = rectangle)` : ce que dessine un appui suivi d'un glissement sur un espace vide. Identique à Paramètres › CadCraft › Glisser pour sélectionner. Voir [Sélection au lasso](topic:lasso-selection).

### FILLET

Alias : `F`. Lignes, arcs, cercles et polylignes. Affiche d'abord `Réglages actuels : Mode = TRIM, Rayon = 0`.

- `Sélectionnez le premier objet [Annuler (U)/Polyligne/Rayon/Ajuster (T)/Multiple]`
  - `R` demande `Spécifiez le rayon du raccord <dernier>`. `T` demande `Saisissez une option de mode d'ajustement [Ajuster/Sans ajustement]` : sans ajustement, les objets restent tels quels et seul l'arc est ajouté.
  - `M` poursuit la commande pour d'autres angles, jusqu'à {{key:Enter}} ; `U` annule le dernier angle sans quitter la commande.
  - `P` demande `Sélectionnez une polyligne 2D [Rayon]` et arrondit chaque angle où deux segments droits se rencontrent. Les raccords déjà présents sont remplacés par le nouveau rayon ; rayon 0 les supprime. Les angles dont les côtés sont trop courts pour le rayon sont laissés et comptés.
- `Sélectionnez le second objet ou Maj+clic pour appliquer l'angle [Rayon]`. Maintenez {{key:Shift}} pendant le clic pour un angle vif, quel que soit le rayon.

Cliquez chaque objet sur la partie à conserver. Deux lignes qui ne se rencontrent pas sont prolongées. Deux lignes parallèles reçoivent un demi-cercle à travers l'écart, à l'extrémité de la première ligne la plus proche de votre clic. Un cercle n'est jamais coupé. Deux segments voisins d'une même polyligne reçoivent l'arc à l'intérieur de la polyligne ; une polyligne et un autre objet fonctionnent lorsque la coupe tombe sur le premier ou le dernier segment de la polyligne.

### CHAMFER

Alias : `CHA`. Lignes et segments droits des polylignes. Affiche d'abord les distances courantes (ou la longueur et l'angle).

- `Sélectionnez la première ligne [Annuler (U)/Polyligne/Distance/Angle/Ajuster (T)/Méthode (E)/Multiple]`
  - `D` demande `Spécifiez la première distance de chanfrein <dernière>` et `Spécifiez la seconde distance de chanfrein <la première>` : la première est coupée sur la première ligne désignée, la seconde sur l'autre.
  - `A` demande `Spécifiez la longueur du chanfrein sur la première ligne` et `Spécifiez l'angle du chanfrein par rapport à la première ligne`.
  - `E` (Méthode) choisit lequel des deux le chanfrein suivant utilise. `T`, `M`, `U` et `P` fonctionnent comme dans {{cmd:FILLET}}.
- `Sélectionnez la seconde ligne ou Maj+clic pour appliquer l'angle [Distance/Angle/Méthode (E)]`. {{key:Shift}}+clic crée un angle vif.

Une distance plus longue que la ligne est refusée (`La distance est trop grande.`).

### BREAK et BREAKATPOINT

Alias : `BR`. `Sélectionnez l'objet` (l'endroit où vous cliquez est le premier point), `Spécifiez le second point de coupure [Premier point (F)]` ; `F` demande `Spécifiez le premier point de coupure` et `Spécifiez le second point de coupure`. La partie comprise entre les deux disparaît ; sur un cercle, dans le sens antihoraire depuis le premier point. BREAKATPOINT demande `Spécifiez le point de coupure` et coupe l'objet en deux à cet endroit (pas un cercle).

### LENGTHEN

Alias : `LEN`. `Sélectionnez un objet à mesurer [Variation (DE)/Pourcentage (P)/Total/Dynamique (DY)]` : un choix affiche `Longueur actuelle` (et l'angle inclus d'un arc) et demande à nouveau. `DE` demande `Saisissez la variation de longueur (négative raccourcit) [Angle]`, `P` `Saisissez le pourcentage de longueur`, `T` `Spécifiez la longueur totale [Angle]`, `DY` glisse. Puis `Sélectionnez un objet à modifier [Annuler (U)]`, répété : l'extrémité la plus proche du clic se déplace. Lignes, arcs et polylignes ouvertes.

### JOIN

Alias : `J`. `Sélectionnez les objets à joindre`. Les lignes, arcs et polylignes ouvertes qui se rejoignent bout à bout deviennent des polylignes (fermées si la chaîne se referme) ; les lignes sur une même droite deviennent une seule ligne ; les arcs d'un même cercle deviennent un arc, ou le cercle. L'historique indique combien d'objets ont été joints et combien ne l'ont pas été.

### MATCHPROP

Alias : `MA`, `PAINTER`. `Sélectionnez l'objet source`, puis `Sélectionnez les objets de destination [Paramètres (S)]` et {{key:Enter}}. Copie le calque et la couleur, et entre objets de même nature la hauteur et la largeur du texte, les dimensions de cote, ou le motif de hachure. `S` demande `Activez ou désactivez une propriété [Couleur/Calque (LA)/Texte/Cote (D)/Hachure (H)]`, répété jusqu'à {{key:Enter}} ; le choix est mémorisé pour la session.

### EXPLODE

Alias : `X`. Les polylignes deviennent des lignes et des arcs, les références de bloc deviennent leurs objets, les cotes deviennent des lignes, des flèches et du texte.

- `Sélectionnez des objets`

## Presse-papiers

Presse-papiers propre à CadCraft : il fonctionne dans un dessin, entre des dessins et entre les onglets CadCraft de ce navigateur. Voir [Copier, coller et dupliquer](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ou {{ui:Copier}} dans le groupe {{ui:Édition}}. Copie des objets dans le presse-papiers, avec les blocs et les calques qu'ils utilisent. Les objets restent sélectionnés.

- `Sélectionnez les objets à copier` (ignoré si des objets sont déjà sélectionnés)

### CUTCLIP

{{key:Mod+X}}, ou {{ui:Couper}} dans le menu {{ui:Plus}}. Copie des objets dans le presse-papiers, puis les efface (une seule étape d'annulation).

- `Sélectionnez les objets à couper` (ignoré si des objets sont déjà sélectionnés)

### COPYBASE

Copie des objets dans le presse-papiers avec un point de base que vous désignez ; le collage place ce point.

- `Spécifiez le point de base`
- `Sélectionnez les objets à copier`

### PASTECLIP

{{key:Mod+V}}, ou {{ui:Coller}} dans le groupe {{ui:Édition}}. La copie suit le curseur, accrochée par le coin inférieur gauche de son étendue (ou son centre, ou le point de `COPYBASE` ; voir [Paramètres de CadCraft](topic:settings)).

- `Spécifiez le point d'insertion`

Les objets collés sont sélectionnés. Un bloc que le dessin possède déjà sous le même nom garde la définition de ce dessin.

Lorsqu'une zone copiée dans MarkupCraft est plus récente que ce que CadCraft a copié (et a moins de 6 heures), {{key:Mod+V}} et `PASTECLIP` collent cette zone à la place : voir `PASTEAREA`.

### PASTEAREA

Alias : `PAREA`. {{ui:Coller une zone copiée}} dans le menu {{ui:Plus}}. Colle une zone copiée avec {{ui:Copier une zone}} dans MarkupCraft, comme une image à sa taille réelle. Voir [Images dans un dessin](topic:pictures).

- `Spécifiez le coin inférieur gauche de la zone copiée`
- `Mettez son format papier à l'échelle de (100 pour une feuille au 1:100 ; Points : deux points dessus et leur distance réelle) [Points (P)] <1>` (seulement si la feuille n'avait pas d'échelle de dessin) : un nombre, {{key:Enter}} pour le format papier, ou `P`, puis `Premier point sur la zone collée`, `Second point sur la zone collée` et leur distance réelle.

### PASTEORIG

{{key:Mod+Shift+V}}, ou {{ui:Coller sur place}} dans le menu {{ui:Plus}}. Colle aux coordonnées d'où les objets ont été copiés. Ne demande rien.

### DUPLICATE

Alias : `DUP`. {{key:Mod+D}}, ou {{ui:Dupliquer et déplacer}} dans le menu {{ui:Plus}}. Une copie des objets suit le pointeur depuis sa position ; {{key:Esc}} ne laisse rien. N'utilise pas le presse-papiers.

- `Sélectionnez les objets à dupliquer` (ignoré si des objets sont déjà sélectionnés)
- `Spécifiez l'emplacement de la copie ({{key:Esc}} ne laisse rien)` : cliquez, saisissez un point, `@dx,dy` (depuis la position du pointeur), ou une distance vers le curseur.

### SELECT

Demande `Sélectionnez des objets` (avec toutes les options ci-dessous) et laisse sélectionné ce que vous avez choisi, pour la commande suivante ou pour `P` plus tard.

### QSELECT

Alias : `QS`. Dans le navigateur, la boîte de dialogue {{ui:Sélection rapide}} (voir [Sélectionner des objets](topic:select-objects#select-by-a-rule-quick-select)). Sans elle, la ligne de commande demande `Saisissez le type d'objet`, `Saisissez la propriété`, `Saisissez l'opérateur [=/<>/>/</*/Tout sélectionner] <=>` et `Saisissez la valeur`. Les correspondances deviennent la sélection.

### SELECTSIMILAR

Alias : `SIM`. `Sélectionnez des objets [Paramètres (SE)]` (ou la sélection courante) : sélectionne chaque objet du même type, avec le même calque et la même couleur (et le même nom de bloc, motif de hachure). `SE` demande `Activez ou désactivez une propriété [Calque (LA)/Couleur (CO)/Nom (NA)/Motif (PA)/Hauteur]`, répété jusqu'à {{key:Enter}}.

### FIND

Pas d'alias ; ou {{ui:Édition}} › {{ui:Plus}} › {{ui:Chercher et remplacer}}. Dans le navigateur, la boîte de dialogue {{ui:Chercher et remplacer}} (voir [Ajouter du texte et des étiquettes](topic:text#find-and-replace-words)). Sans elle : `Saisissez le texte à rechercher`, puis `Saisissez le texte de remplacement ({{key:Enter}} : sélectionner ce qui est trouvé)`. Cherche dans le texte, les valeurs d'attributs et le texte des cotes, dans l'onglet ouvert ou dans la sélection.

### SELECTALL et DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) sélectionne chaque objet que vous pouvez modifier dans l'onglet ouvert. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE` ; ou {{key:Esc}}) efface la sélection.

## Cotes

### DIMLINEAR

Alias : `DLI`, `DIMLIN`. Distance horizontale ou verticale.

- `Spécifiez l'origine de la première ligne d'attache [Sélectionner un objet]` ({{key:Enter}} ou `S` : `Sélectionnez l'objet à coter`, puis cliquez sur une ligne, un arc, un cercle ou un segment de polyligne)
- `Spécifiez l'origine de la seconde ligne d'attache`
- `Spécifiez l'emplacement de la ligne de cote [Texte/Horizontale/Verticale/Rotation (R)]`. `T` demande le texte (`<>` est la valeur mesurée), `H` et `V` fixent la direction, `R` demande `Spécifiez l'angle de la ligne de cote <0>`.

### DIMALIGNED

Alias : `DAL`, `DIMALI`. La distance réelle entre deux points.

- Origines comme pour {{cmd:DIMLINEAR}}, puis `Spécifiez l'emplacement de la ligne de cote [Texte]`.

### DIMANGULAR

Alias : `DAN`, `DIMANG`.

- `Sélectionnez un arc, un cercle ou une ligne, ou {{key:Enter}} pour un sommet`
- Arc : son angle. Cercle : `Spécifiez le second point d'extrémité de l'angle`. Ligne : `Sélectionnez la seconde ligne`. {{key:Enter}} : `Spécifiez le sommet de l'angle`, `Spécifiez le premier point d'extrémité de l'angle`, `Spécifiez le second point d'extrémité de l'angle`.
- `Spécifiez l'emplacement de la ligne de cote [Texte]` : cliquez à l'intérieur de l'angle à mesurer.

### DIMRADIUS et DIMDIAMETER

Alias : `DRA`, `DIMRAD` ; `DDI`, `DIMDIA`.

- `Sélectionnez un arc ou un cercle`, puis `Spécifiez l'emplacement de la ligne de cote [Texte]`.

### DIMCONTINUE

Alias : `DCO`, `DIMCONT`. Continue à partir de la dernière cote linéaire ou alignée créée (ou demande `Sélectionnez une cote linéaire ou alignée`).

- `Spécifiez l'origine de la seconde ligne d'attache [Annuler (U)]`, répété jusqu'à {{key:Enter}}.

### DIMBASELINE

Alias : `DBA`, `DIMBASE`. Comme {{cmd:DIMCONTINUE}}, mais chaque cote part de la première origine et s'empile plus loin.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Pas d'alias. Chacun demande `Saisissez la nouvelle valeur de … <courante>` et règle cette taille pour les **nouvelles** cotes : échelle générale, hauteur du texte, taille des flèches, nombre de décimales (jusqu'à 8), espace autour du texte, prolongement au-delà de la ligne de cote, décalage par rapport à l'origine. Voir [Régler la taille des cotes](topic:dimension-settings).

### DIMLUNIT

Réglage de cote : le format des nouvelles cotes uniquement (1 scientifique, 2 décimal, 3 ingénieur, 4 architectural, 5 fractionnaire).

### DIMSTYLE et -DIMSTYLE

Alias : `DST`, `DDIM`, `D`. Le gestionnaire de styles de cote : {{ui:Définir l'actuel}}, {{ui:Nouveau…}}, {{ui:Modifier…}}, {{ui:Renommer…}}, {{ui:Supprimer}}, {{ui:Comparer…}}, {{ui:Appliquer à la sélection}}. `-DIMSTYLE` dans la ligne de commande : `Style de cote [Restaurer/Enregistrer/Supprimer/Appliquer/Comparer/Renommer/Liste]`. Voir [Régler la taille des cotes](topic:dimension-settings#named-dimension-styles).

### DIMEDIT et DIMTEDIT

`DIMEDIT` (`DED`) : `Édition de cote [Origine (H)/Nouveau (N)/Pivoter (R)/Oblique (O)] <Origine (H)>`, puis les cotes (ou celles déjà sélectionnées). Nouveau demande le texte (`<>` = la mesure) ; Pivoter un angle (0 remet le texte) ; Oblique l'angle des lignes d'attache par rapport à l'axe X ({{key:Enter}} = aucun ; cotes linéaires et alignées seulement). `DIMTEDIT` (`DIMTED`) : `Texte de cote [Gauche (L)/Droite (R)/Centre/Origine (H)/Angle] <Centre>`. Voir [Régler la taille des cotes](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias : `DTU`. `Unités dans le texte des nouvelles cotes [Unités du dessin (D)/mm/cm/m/km]`, ou avec des cotes sélectionnées `Unités dans le texte des cotes sélectionnées`. Écrit la longueur mesurée dans cette unité, suivie de l'unité (DIMLFAC et un suffixe DIMPOST) ; `D` revient aux unités du dessin. Voir [Cotes en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias : `RC`. Affiche `Longueur d'arc : … Type : …`, puis `Spécifiez le premier point [Longueur d'arc (A)/Objet (O)/Rectangulaire (R)/Polygonal (P)/Main levée (F)]`. Rectangulaire demande `Spécifiez l'autre coin` ; Polygonal `Spécifiez le point suivant ({{key:Enter}} ferme le nuage) [Annuler (U)]` ; Main levée suit le pointeur jusqu'à un clic ou {{key:Enter}} ; `O` demande `Sélectionnez un objet` et `Inverser le sens ? [Oui (Y)/Non] <N>`, puis transforme l'objet en nuage. `A` demande `Spécifiez la longueur de chaque arc`. `R`, `P` et `F` choisissent le type du prochain nuage. Le résultat est une polyligne fermée d'arcs.

### MLEADER

Alias : `MLD` ; ou {{ui:Repère}}. `Spécifiez l'emplacement de la pointe de flèche du repère [Taille de la flèche (A)/Distance d'atterrissage (L)]`, `Spécifiez l'emplacement d'atterrissage du repère`, puis le texte dans la zone sur place (ou, sans elle, `Saisissez le texte (une ligne vide termine)`). Enregistré comme un vrai repère multiple dans le DWG ; le DXF conserve les lignes, la pointe de flèche et le texte qu'il dessine.

## Paramétrique

Voir [Contraindre un dessin](topic:constraints) et [Utiliser des paramètres et des équations](topic:parameters). Les contraintes s'appliquent sur l'onglet {{ui:Modèle}}.

### GEOMCONSTRAINT et les commandes GC

Alias `GCON` : `Saisissez le type de contrainte [Horizontale/Verticale/Perpendiculaire/Parallèle (PA)/Tangente/Coïncidente/Concentrique (CON)/Colinéaire (COL)/Symétrique/Égale (E)/Fixe] <Horizontale>`, puis les invites de cette commande.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} : `Sélectionnez un objet [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}} : `Sélectionnez le premier objet`, `Sélectionnez le second objet` (le second se déplace).
- {{cmd:GCCOINCIDENT}} : `Sélectionnez le premier point [Objet/Contrainte auto (A)] <Objet>`, `Sélectionnez le second point [Objet] <Objet>`.
- {{cmd:GCFIX}} : `Sélectionnez le point [Objet] <Objet>`.
- {{cmd:GCSYMMETRIC}} : `Sélectionnez le premier objet [2Points] <2Points>`, `Sélectionnez le second objet`, `Sélectionnez la ligne de symétrie`.

### DIMCONSTRAINT et les commandes DC

Alias `DCON` : `Sélectionnez la cote associative à convertir [Linéaire (LI)/Horizontale/Verticale/Alignée/Angulaire (AN)/Rayon/Diamètre/Convertir] <Alignée>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}} : `Spécifiez le premier point de contrainte [Objet] <Objet>`, `Spécifiez le second point de contrainte`, `Spécifiez l'emplacement de la ligne de cote`, `Texte de la cote <d1=40>` (un nombre, une expression, ou `nom=expression`).
- {{cmd:DCALIGNED}} : comme ci-dessus, avec `[Objet/Point et ligne/2 lignes]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}} : `Sélectionnez un arc ou un cercle`. {{cmd:DCANGULAR}} : `Sélectionnez la première ligne ou le premier arc`, `Sélectionnez la seconde ligne`.
- {{cmd:DCCONVERT}} : `Sélectionnez les cotes à convertir`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}} : `Sélectionnez des objets [Paramètres]`. `S` demande les tolérances de distance et d'angle.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`) : `Sélectionnez des objets` ; leurs contraintes disparaissent.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`) : `Sélectionnez des objets [Tout afficher/Tout masquer]`, puis `[Afficher/Masquer]`.
- {{cmd:DCDISPLAY}} : `Saisissez une option [Afficher/Masquer]`.

### PARAMETERS et -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) ouvre le panneau {{ui:Paramètres}}. `-PARAMETERS` : `Saisissez une option [Nouveau (N)/Modifier/Renommer/Supprimer/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Télécharge une macro (.swb) qui reconstruit le modèle en une seule esquisse contrainte dans SolidWorks. Voir [Déplacer des esquisses vers d'autres modeleurs de pièces, et en provenir](topic:solidworks-sketches).

## Blocs

### ANNOSCALE

Alias : `CANNOSCALE`. Indique l'échelle d'annotation du dessin et le nombre d'objets annotatifs qu'il contient, puis demande `Nouvelle échelle d'annotation` : saisissez `1:50`, `1:100`, `2:1`, un simple nombre (`50` vaut 1:50) ou le nom d'une des échelles propres au dessin. Chaque texte et chaque cote annotatifs sont redimensionnés pour s'imprimer à la même taille à la nouvelle échelle, en une seule étape d'annulation ; les objets non annotatifs ne sont pas modifiés. Voir [Unités, papiers et échelles](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Alias : `SCALELIST`. `Liste d'échelles [Ajouter/Modifier/Supprimer/Liste/Réinitialiser]` jusqu'à {{key:Enter}}. Ajouter : `Nom de l'échelle`, `Unités du papier`, `Unités du dessin`. Modifier et Supprimer demandent le nom de l'échelle. Les échelles propres au dessin rejoignent les listes d'échelles des fenêtres et du tracé, et sont enregistrées avec le dessin. Voir [Unités, papiers et échelles](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT et PEDIT

`SPLINE` (`SPL`) : `Premier point de la spline [Méthode/Objet] (Points de passage)`. Points de passage : points par lesquels passe la courbe ; `Fermer`, `Annuler`, puis `Tangente de départ` et `Tangente d'arrivée` (un point, ou {{key:Enter}}). Méthode › Sommets de contrôle demande un degré (1 à 5) et trace à partir d'un polygone de contrôle. Objet transforme les polylignes en splines passant par leurs sommets. `SPLINEDIT` (`SPE`) : `[Données de passage/Modifier un sommet/Convertir en polyligne/Ouvrir ou Fermer/Inverser/Annuler/Quitter]` ; Données de passage `[Ajouter/Supprimer/Déplacer/Purger/Tangentes/Quitter]` ; Modifier un sommet `[Ajouter un point de contrôle/Déplacer/Poids/Quitter]`. `PEDIT` (`PE`) : `[Fermer/Ouvrir/Joindre/Largeur/Ajuster/Spline/Décourber/Génération de type de ligne/Inverser/Annuler/Quitter]`, `M` pour plusieurs objets ; lignes, arcs et splines sont proposés comme polylignes d'abord. Voir [Splines et polylignes](topic:splines).

### BLOCK

Alias : `B`, `BMAKE`.

- `Saisissez le nom du bloc`. S'il existe : `Le bloc "…" existe déjà. Le redéfinir ? [Oui (Y)/Non] <N>`.
- `Spécifiez le point de base d'insertion`
- `Sélectionnez des objets`. Ils sont remplacés par une seule référence au nouveau bloc.

### WBLOCK

Alias : `W`, `-WBLOCK`. Écrit un bloc, quelques objets ou le dessin entier dans un nouveau fichier DWG ou DXF. `Source [Bloc/Dessin entier/Objets] <Objets>` :

- **Objets** : `Spécifiez le point de base d'insertion` (il devient l'origine du nouveau dessin), `Sélectionnez des objets`, puis `Format de fichier [DWG/DXF/DXF R12]` et `Nom du fichier du nouveau dessin`, puis `Que faire des objets [Conserver/Convertir en bloc/Supprimer]`. Convertir les remplace par une seule référence à un bloc portant le nom du fichier ; Supprimer les efface.
- **Bloc** : `Bloc à écrire`. Les objets propres du bloc, avec son point de base comme origine, blocs imbriqués compris.
- **Dessin entier** : chaque objet de l'espace objet. Les feuilles ne sont pas écrites ; utilisez {{cmd:SAVEAS}} pour une copie qui les conserve.

Le nouveau fichier ne contient que les calques, types de ligne, textes, styles de cote et blocs que ses objets utilisent, ainsi que les unités du dessin. La version d'un DWG est celle que {{cmd:SAVEAS}} a utilisée en dernier. Dans le navigateur, le fichier se télécharge ; dans Studio, la boîte d'enregistrement s'ouvre.

### ATTDEF

Alias : `ATT`, `DDATTDEF`, `-ATTDEF` ; ou {{ui:Blocs}} › {{ui:Plus}} › {{ui:Définir un attribut}}. Affiche les modes, puis `Saisissez une option à modifier (Entrée quand c'est fini) [Invisible/Constant/Prédéfini (P)]`, `Saisissez le nom d'étiquette de l'attribut`, `Saisissez l'invite de l'attribut`, `Saisissez la valeur par défaut de l'attribut` (`Saisissez la valeur de l'attribut` si constante), `Spécifiez le point de départ du texte`, `Spécifiez la hauteur du texte`, `Spécifiez l'angle de rotation du texte`. {{cmd:BLOCK}} intègre les définitions d'attributs au bloc.

### EATTEDIT et ATTEDIT

`EATTEDIT` (`DDATTE`, ou double-cliquez sur une référence avec attributs ; {{ui:Blocs}} › {{ui:Plus}} › {{ui:Modifier les attributs}}) : `Sélectionnez une référence de bloc avec attributs`, puis la boîte de dialogue {{ui:Modifier les attributs}}. `ATTEDIT` (`ATE`, `-ATTEDIT`) : la même référence, puis `<invite> (<ÉTIQUETTE>) <valeur>` pour chaque attribut ; {{key:Enter}} garde une valeur. Voir [Attributs](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Mettre à jour les attributs des références de quel bloc [Nom/Sélection/Tous] <Sélection>`. Les valeurs sont conservées ; les nouveaux attributs reçoivent leur valeur par défaut, les attributs supprimés disparaissent, les positions sont réinitialisées.

### BATTMAN

{{ui:Blocs}} › {{ui:Plus}} › {{ui:Gestionnaire d'attributs}}. La boîte de dialogue : bloc, attributs (étiquette, invite, valeur par défaut, modes, ordre), {{ui:Mettre à jour les références (valeurs gardées)}}, {{ui:Appliquer}}.

### REFEDIT et REFCLOSE

{{ui:Blocs}} › {{ui:Plus}} › {{ui:Modifier sur place}}. `REFEDIT` : `Sélectionnez la référence de bloc à modifier sur place` (ou la sélection). `REFCLOSE` : `Enregistrer les modifications de "…" [Enregistrer/Abandonner] <Enregistrer>` ; les boutons {{ui:Enregistrer le bloc}} et {{ui:Abandonner}} de la barre font la même chose. Toute la modification est une seule étape d'annulation. Voir [Attributs](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT et BCLOSE

`BE` ; ou {{ui:Blocs}} › {{ui:Plus}} › {{ui:Modifier le bloc}}. `Saisissez le nom du bloc à modifier <le bloc de la référence sélectionnée>` ouvre l'éditeur de blocs. `BCLOSE` demande `Fermer l'éditeur de blocs sur "…" [Enregistrer/Abandonner] <Enregistrer>` ; les boutons {{ui:Enregistrer le bloc}} et {{ui:Abandonner les modifications}} bandeau font la même chose. Tout ce qui est fait dans l'éditeur constitue une seule étape d'annulation.

### VIEWBASE

Alias : `FLATSHOT`. Une vue 2D à plat des solides de l'onglet 3D : `Vue [Avant/Dessus/Droite/Gauche/Arrière/Dessous/Iso]`, `Lignes cachées [Afficher/Masquer]`, une échelle (`1:20`, `2:1` ; {{key:Enter}} prend celle qui convient à la feuille), puis le centre de la vue. Une seule référence de bloc : les arêtes visibles sur VIEW-VISIBLE, les arêtes cachées en tirets sur VIEW-HIDDEN. Voir [Vues à plat sur une feuille](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias : `-PUBLISH` ; ou {{ui:Toutes les feuilles dans un seul PDF}} dans la boîte de dialogue {{ui:Tracer en PDF}}. `Feuilles à tracer [Toutes/Certaines]` : {{key:Enter}} trace chaque feuille, `S` demande des noms séparés par des virgules. Un seul PDF, une page et un signet par feuille. Voir [Toutes les feuilles dans un seul PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias : `SSM`, `SHEETSETMANAGER`. Vous amène à la section {{ui:Jeu de feuilles}} du panneau de gauche : des feuilles issues de nombreux dessins, numérotées et titrées, leurs cartouches remplis depuis le jeu, publiées en un seul PDF. Voir [Jeux de feuilles](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`) : choisissez un DWG ou un DXF, puis son point d'insertion. {{cmd:XREF}} (`XR`, `-XREF`) : `Dessins liés [?/Attacher/Recharger (R)/Lier (B)/Détacher] (Entrée : ?)` ; avec plusieurs liens, choisissez une de leurs références ou tapez `N` puis son nom. Voir [Dessins liés](topic:files#linked-drawings-external-references).

### COUNT

Alias : `BCOUNT` ; ou {{ui:Blocs}} › {{ui:Plus}} › {{ui:Compter les blocs}}. `Sélectionnez une référence de bloc à compter, ou [Tous (A)/Exporter (E)] (Entrée : Tous)` : un clic sélectionne et compte chaque référence de ce bloc dans cet espace ; {{key:Enter}} ou `A` les liste toutes ; `E` puis `C` (comptage) ou `A` (attributs) télécharge un CSV. Voir [Compter les blocs et exporter un tableau](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias : `I`, `DDINSERT`.

- `Saisissez le nom du bloc ou [Fichier (F)/Bibliothèque (L)] <dernier bloc>` (la casse n'a pas d'importance). `F` demande un DWG ou un DXF, puis le dessin entier ou l'un de ses blocs ; un nom déjà utilisé demande {{ui:Garder les existants}} ou {{ui:Renommer}}. `L` ouvre le panneau de bibliothèque.
- `Spécifiez le point d'insertion [Échelle (S)/Rotation (R)]`. `S` demande `Spécifiez le facteur d'échelle`, `R` demande `Spécifiez l'angle de rotation` ; les deux sont mémorisés.
- Puis `Saisissez <invite> (<ÉTIQUETTE>) <valeur par défaut>` pour chaque attribut demandé par le bloc. Voir [Attributs de bloc](topic:attributes).

### LIBRARY

Alias : `LIB`. Ouvre le panneau de bibliothèque : placer des éléments, rechercher des mises à jour, crédits de la bibliothèque. Aucune question. Voir [Insérer depuis un fichier ou la bibliothèque](topic:insert-from-file-and-library).

### STEELMEMBER

Alias : `SMEMBER` ; ou {{ui:Élément 3D}} sur l'onglet {{ui:Standard}} de la bibliothèque. `Dimension de section <W12x26>` (comme la liste de l'onglet), puis `Point de départ [Poteau (C)]` et `Point d'arrivée` : un élément plein sur l'onglet 3D entre les deux points, posé sur le sol. `C` demande le point de base du poteau et sa hauteur. Une seule étape d'annulation. Voir [Placer des profilés d'acier et des pièces standard](topic:steel-and-standard-parts).

### PARTSLIST

Alias : `PLIST`. `Coin supérieur gauche de la nomenclature`, puis `Hauteur du texte <2.5>` : dessine un tableau de chaque pièce standard et profilé d'acier posé depuis la bibliothèque (numéros de repère, quantité, pièce, norme, dimension, longueur, matériau, masse). Une seule étape d'annulation. Voir [Placer des profilés d'acier et des pièces standard](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias : `PU`. Supprime les définitions de blocs que rien n'utilise. Aucune question.

### DELBLOCKS

Ou {{ui:Blocs}} › {{ui:Plus}} › {{ui:Supprimer des blocs}}. `Sélectionnez le bloc à supprimer [Nom/Quitter (X)]` : cliquez une référence de bloc, ou `N` pour la liste des blocs avec un filtre (en choisir plusieurs), ou `X` / {{key:Enter}} pour terminer. Chaque référence disparaît — dans le modèle, sur chaque feuille et dans d'autres blocs — puis la définition, et la ligne de commande indique ce qui a été supprimé et ce qui ne l'a pas pu. Les blocs sans nom et les dessins liés ne sont pas proposés. L'invite revient pour le bloc suivant ; toute la commande est une seule étape d'annulation.

## Feuilles et tracé

### LAYOUT

Alias : `LO`, `NEWLAYOUT` ; ou le bouton {{ui:+}} sous le dessin. Une nouvelle feuille avec un cadre, un cartouche et une fenêtre de présentation, au format ISO A3 (ou Tabloid pour les dessins en pouces ou en pieds). Aucune question.

### MVIEW

Alias : `MV`. Sur une feuille uniquement ({{cmd:VPORTS}} sur une feuille fait la même chose).

- `Spécifiez le coin de la fenêtre de présentation`, `Spécifiez le coin opposé`. La fenêtre montre le modèle entier à une échelle standard.

### VPORTS

Alias : `VIEWPORTS`. {{cmd:SPLIT}} fait la même chose depuis une feuille, et {{ui:Vue}} › {{ui:Plus}} › {{ui:Diviser côte à côte}}, {{ui:Diviser superposé}}, {{ui:Quatre volets}}, {{ui:Un seul volet}} les exécutent. Sur le modèle : `Saisissez le nombre de volets [Simple (SI)/2/3/4] <3>` ; `2` demande `[Horizontal/Vertical] <Vertical>` (Vertical = côte à côte), `3` demande `[Gauche/Droite] <Droite>` (où se place le grand volet). Chaque volet garde sa propre vue et son espace ; un clic rend un volet actif. Sur une feuille, c'est {{cmd:MVIEW}}. Voir [Diviser l'écran](topic:split-screen).

### VPVIEW

Pas d'alias. Sur une feuille uniquement.

- `Sélectionnez une fenêtre de présentation` (ignoré si une est sélectionnée), puis sur le modèle : `Spécifiez le premier coin de la fenêtre à afficher`, `Spécifiez le coin opposé`.

### UCS

Pas d'alias. Un système de coordonnées à vous ; ce n'est pas une modification. `Spécifiez l'origine de l'UCS [Nommé (NA)/Objet (OB)/Précédent/Monde/Z/3points] <Monde>` : un point devient une nouvelle origine, puis `Spécifiez le point sur l'axe X ({{key:Enter}} garde l'angle)`. `Z` : `Spécifiez l'angle de rotation autour de l'axe Z <90>`. `3` : origine, un point sur l'axe X positif, un point du côté Y positif. `OB` : `Sélectionnez un objet pour aligner l'UCS`. `NA` : `[Restaurer/Enregistrer/Supprimer/?]` et un nom. La vue tourne pour que le nouvel axe X soit horizontal. Voir [Tourner la vue et utiliser vos propres coordonnées](topic:ucs-and-turned-view).

### PLAN

Pas d'alias. `Saisissez une option [UCS courant/Ucs/Monde] <UCS courant>` : tourne la vue du volet actif pour que l'axe X de l'UCS (ou du monde) soit horizontal. Rien du dessin ne bouge.

### TURNLEFT, TURNRIGHT, TURNWORLD

Pas d'alias ; ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Tourner la vue de 90° à gauche}}, {{ui:Tourner la vue de 90° à droite}}, {{ui:Retour au monde}}. Identique à `UCS Z -90`, `UCS Z 90` et `UCS W`, la vue suivant.

### VPLAYER

Pas d'alias. Sur une feuille, ou dans une fenêtre de présentation. `Saisissez une option [?/Geler (F)/Dégeler (T)/Réinitialiser (R)/Vpvisdflt]` : `F`, `T`, `R` demandent des noms de calques (séparés par des virgules, jokers `*` et `?`), puis `[Toutes/Sélection/Courante] <Courante>` fenêtres ; Réinitialiser remet chaque calque à son réglage « gelé dans les nouvelles fenêtres » par défaut ; `V` règle ce réglage par défaut (`[Gelé/Dégelé]`), que {{cmd:MVIEW}} utilise. `?` liste les calques gelés dans la fenêtre courante. La colonne fenêtre du panneau Calques fait la même chose pour une seule fenêtre. Voir [Geler un calque dans une seule fenêtre](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias : `MS` ; ou double-cliquez dans une fenêtre de présentation. Sur une feuille uniquement. Travailler sur le modèle à travers une fenêtre : celle qui est sélectionnée, l'unique fenêtre de la feuille, ou `Cliquez dans la fenêtre pour y travailler`. Le panoramique et le zoom à l'intérieur modifient la vue de la fenêtre (une fenêtre à affichage verrouillé la conserve, et la feuille se déplace à la place) ; la nouvelle vue est écrite en une seule étape d'annulation. Voir [Travailler sur le modèle à travers une fenêtre de présentation](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias : `PS` ; ou double-cliquez en dehors de la fenêtre, ou cliquez sur un onglet sous le dessin. Retour à la feuille.

### PLOT

Alias : `PRINT`, `PUBLISH`, `EXPORTPDF` ; ou {{key:Mod+P}}. Ouvre la boîte de dialogue {{ui:Tracer en PDF}}. Voir [Tracer en PDF](topic:plot-pdf).

### PLOTSTYLES

Alias : `STYLESMANAGER`, `PSTABLES` ; ou {{ui:Modifier les tables…}} dans la boîte de dialogue {{ui:Tracer en PDF}}. Ouvre {{ui:Tables de styles de tracé}} : ce que prend chaque couleur à l'impression (couleur, gris, encre, épaisseur de ligne), conservé avec le dessin. Voir [Tables de styles de tracé](topic:plot-pdf#plot-style-tables).

## Interrogation

### CAL

Affiche la valeur d'un calcul, telle qu'elle serait lue partout où une longueur est saisie.

- `Expression` : saisissez-la, par exemple `12'6"+3/4"` ou `(24'-0")/3`, et appuyez sur {{key:Enter}}. CadCraft affiche `= 12'-6 3/4"   (150.75 unités du dessin)`. Voir [Calcul dans une valeur saisie](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias : `DI` ; ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Mesurer une distance}}.

- `Spécifiez le premier point`, `Spécifiez le second point`. Affiche la distance, l'angle, Delta X et Delta Y.

### AREA

Alias : `AA` ; ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Aire}}. Affiche l'aire et le périmètre.

- `Spécifiez le premier coin [Objet (O)/Ajouter une aire/Soustraire une aire] <Objet>`
  - Cliquez ou saisissez des coins ; à `Spécifiez le point suivant ({{key:Enter}} ferme) [Annuler (U)]`, appuyez sur {{key:Enter}} pour fermer le contour. `U` retire le dernier coin.
  - {{key:Enter}} ou `O`, puis `Sélectionnez un objet` : un cercle (affiche sa circonférence), une ellipse, une polyligne (une polyligne ouverte est fermée par une droite pour l'aire, et sa longueur est affichée) ou une hachure (les trous sont retirés).
  - `A` (Ajouter une aire) et `S` (Soustraire une aire) gardent un total cumulé : l'invite commence par `(mode AJOUT)` ou `(mode SOUSTRACTION)`, chaque aire est ajoutée ou retirée, et `Aire totale = …` est affichée après chacune. Dans ces modes, `O` désigne des objets jusqu'à {{key:Enter}}, et {{key:Enter}} à la première invite termine la commande.

### MEASUREGEOM

Alias : `MEA`. `Saisissez une option [Distance/Rayon/Angle/Aire] <Distance>` ; après chaque mesure, elle demande à nouveau, avec `Quitter (X)` par défaut.

- `D` : deux points, comme {{cmd:DIST}}.
- `R` : `Sélectionnez un arc ou un cercle` ; affiche le rayon et le diamètre.
- `A` : un arc (son angle inclus), une ligne puis une seconde ligne (l'angle entre elles, vers leurs extrémités éloignées), ou {{key:Enter}} puis trois points (sommet, puis les deux extrémités).
- `AR` : comme {{cmd:AREA}}, une seule aire.

### ID

Pas d'alias. `Spécifiez le point` ; affiche ses X et Y.

### LIST

Alias : `LI`, `LS`. `Sélectionnez des objets` ; affiche le type, le calque et les principales mesures de chaque objet.

## Vue, fichier et autres

### ZOOM

Alias : `Z`.

- `Spécifiez le coin de la fenêtre, saisissez un facteur d'échelle (nX) [Étendue (E)/Tout (A)/Fenêtre (W)/Précédent (P)/Échelle (S)/Centre (C)]`. Cliquez deux coins pour une fenêtre. `E`, `A` ou {{key:Enter}} : tout le dessin.
- `P` (Précédent, ou {{ui:Précédent}} dans la barre d'outils) revient à la vue précédente, jusqu'à 10 vues par onglet ; une série de crans de molette ou un panoramique compte pour une seule vue.
- Un nombre tel que `2`, `2x` ou `0.5x` (ou `S` puis le nombre) zoome ou dézoome de ce facteur autour du centre de l'écran.
- `C` demande `Spécifiez le point central` et `Saisissez la hauteur ou le grossissement (nX)`.

### PDFATTACH, PDFIMPORT et les commandes PDF

Alias : `PDFATT` pour {{cmd:PDFATTACH}}, `PDFIM` pour {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} place une page PDF en fond de dessin (fichier, page, point d'insertion, échelle, rotation) ; {{cmd:PDFIMPORT}} transforme les lignes, courbes, remplissages et textes d'une page en objets du dessin, sur des calques nommés d'après le PDF, à taille réelle, à une échelle saisie, ou mis à l'échelle à partir de deux points et d'une distance réelle. {{cmd:PDFCLIP}} découpe un fond, {{cmd:PDFADJUST}} règle l'estompage, le contraste, le monochrome ou désactive le fond, {{cmd:PDFLAYERS}} active ou désactive les calques propres du PDF, et {{cmd:PDF}} rend à CadCraft les fichiers utilisés par les fonds d'un dessin. Voir [Fonds PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias : `AUTOC`. Saisie automatique du dessin : sans commande en cours, un fantôme gris montre ce que les motifs propres à votre dessin laissent prévoir. {{cmd:AUTOCOMPLETE}} l'active `On` ou le désactive `Off` (aussi dans Paramètres › CadCraft), ou `Show` affiche ce qu'il proposerait maintenant. **{{key:Tab}}** dessine le fantôme en une seule étape d'annulation, **{{key:Esc}}** le rejette jusqu'à ce que le dessin change. Il repère trois choses dans les objets les plus récents : la copie suivante de quelque chose dessiné deux fois ou plus à pas régulier (montants, colonnes, contremarche et marche d'un escalier), les pas suivants d'un escalier en polyligne, et le côté manquant d'une pièce ou d'une chaîne de murs. Au milieu de {{cmd:LINE}} ou {{cmd:PLINE}}, le fantôme est le **point suivant** : le pas suivant d'un escalier (contremarche, marche, contremarche…), le quatrième coin d'un rectangle, le point qui le ferme, ou un pas égal de plus. Approchez le curseur et appuyez sur **{{key:Tab}}**, comme si vous aviez cliqué ; continuez ou appuyez sur {{key:Enter}}. Calculé sur cet ordinateur par des règles, sans modèle.

### AUTOSHEET

Alias : `ASH`. Feuilles qui se mettent en page toutes seules. {{cmd:AUTOSHEET}} prend les pièces du dessin (vos vues nommées, ou les pièces séparées du modèle, ou le modèle entier), choisit un format de papier (ou celui que vous donnez), attribue à chaque pièce une échelle standard (une seule pour toutes, ou la plus grande que chacune accepte) et place les vues en rangées sur de nouvelles feuilles, avec un cartouche et une légende (nom et échelle) sous chacune. Ce qui ne tient pas sur une feuille reçoit sa propre feuille. Une seule étape d'annulation. Calculé sur cet ordinateur par des règles, sans modèle.

### PHOTOSKETCH

Alias : `PSK`. Esquisse photo vers dessin. Choisissez une photo (JPEG, PNG ou TIFF) d'une esquisse à main levée sur une feuille de papier. {{cmd:PHOTOSKETCH}} repère les quatre coins de la feuille, redresse la perspective, prend le format de papier que vous indiquez (`Papier`, ou le format standard le plus proche) et l'`Échelle` de l'esquisse (1 : n), puis trace les traits au stylo en lignes, arcs et cercles, avec un calque pour chaque couleur de stylo (noir, rouge, bleu, vert). S'il ne trouve pas le bord du papier, il prend la photo entière comme feuille et le signale. Le lettrage est exclu. Une seule étape d'annulation. Réalisé sur cet ordinateur par un traitement d'image classique : aucun modèle, rien n'est envoyé. Voir aussi les commandes de dessin numérisé.

### AUTODIM

Alias : `ADIM`. Cotation automatique par règles. {{cmd:AUTODIM}} cote les objets sélectionnés (ou le dessin entier) d'après leurs niveaux et leurs arêtes d'aplomb : une chaîne de cotes le long des côtés que vous choisissez (`Côtés (S)`), une cote globale à l'extérieur, la largeur de chaque ouverture (un écart entre des lignes de mur alignées), un diamètre pour chaque taille de trou, et avec `Trame (G)` l'écart entre les lignes de trame. Une cote déjà présente n'est pas recréée. Une seule étape d'annulation. Calculé sur cet ordinateur par des règles, sans modèle.

### GRIDMOVE

Alias : `GM`. Déplacer une ligne de trame entraîne l'ensemble. {{cmd:GRIDMOVE}} déplace une ligne de trame (une ligne sur un calque dont le nom contient grid ou axis) et ce qui y est accroché : les murs ayant une extrémité sur la ligne s'étirent pour la suivre, les murs qui la longent se déplacent entiers, les poteaux (références de bloc et cercles sur la ligne), sa bulle et son repère se déplacent, et les cotes dont les points sont sur elle mesurent le nouvel espacement. Donnez deux points (seule la partie traversant la ligne compte) ou `Distance`. Une étape d'annulation reprend tout. Réalisé par règles sur cet ordinateur.

### DETAILS

Alias : `DET`. Des détails qui viennent à vous. {{cmd:DETAILS}} conserve les détails propres à votre cabinet : `Ajouter` place un bloc de ce dessin dans la liste, `Liste` et `Retirer` la gèrent, et `Rechercher` classe les détails pour ce qui est sélectionné (ou pour ce que vous avez dessiné en dernier) d'après les mots de leurs calques, noms de blocs, motifs de hachure et notes, comparés au nom et aux notes de chaque détail ; ainsi une tête de fenêtre trouve votre bavette d'appui. Choisissez un numéro et un point pour le placer. Avec `Indice` activé (aussi dans Paramètres › CadCraft), sélectionner quelque chose qu'un détail reconnaît affiche une ligne dans la barre d'état. La liste est conservée dans ce navigateur, sur cet ordinateur, et c'est elle qui est recherchée. `Partager` la place aussi dans votre dossier Documents (`.cadcraft/firm-details.json`, avec le dessin de chaque bloc) : `Récupérer` ajoute ce que votre équipe possède et vous non, `Envoyer` ajoute ce que vous avez et qu'elle n'a pas, `Les deux` fait les deux, et rien n'est jamais supprimé d'un côté ou de l'autre. Ouvrez d'abord le dossier Documents ({{cmd:DOCUMENTS}}) ; lorsque ce dossier est un dossier Team Cloud Plan, toute l'équipe partage une seule liste. Un élément de détail dans le panneau Bibliothèque a un bouton **Ajouter aux détails de mon cabinet** qui le place dans la même liste. Calculé sur cet ordinateur par des mots, sans modèle.

### SKETCHFIX

Alias : `SKF`. Esquisses au stylo qui deviennent une géométrie précise. Appuyez et faites glisser un seul tracé à main levée à la fois (stylo, souris ou doigt), puis {{key:Enter}}. Chaque tracé est lu comme une ligne, un cercle, un arc, un rectangle ou une polyligne : les lignes presque horizontales et verticales deviennent exactement horizontales et verticales, un tracé fermé et rond devient un cercle, un tracé fermé à quatre angles droits devient un rectangle, et les extrémités des tracés sont rapprochées et calées sur les extrémités déjà présentes dans le dessin. Une seule étape d'annulation. Calculé sur cet ordinateur par des règles, sans modèle.

### SCANATTACH et les commandes de dessin numérisé

Alias : `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}} ; {{cmd:RASTERSNAP}} n'a pas d'alias. Elles travaillent sur une image, une étape d'annulation chacune. {{cmd:SCANATTACH}} insère un PNG, un JPEG, un TIFF (une page ou toutes) ou une page PDF qui est une image. {{cmd:SCANSCALE}} met la feuille à l'échelle à partir de deux points désignés et de la distance réelle. {{cmd:SCANALIGN}} la déplace et la tourne sur deux points (`Mettre la feuille à l'échelle` Oui/Non). {{cmd:SCANDESKEW}} affiche l'angle des longues lignes de la feuille et la redresse une fois que vous `Acceptez` ou donnez une `Valeur`. {{cmd:SCANCLEAN}} la passe en noir et blanc (`Seuil` Auto/Adaptatif/Niveau, `Taches`) puis `Lance`. {{cmd:SCANCROP}} conserve une fenêtre. {{cmd:SCANERASE}} efface un `Rectangle`, un `Polygone` ou un `Lasso`. {{cmd:SCANTRACE}} trace des lignes et des arcs sur un nouveau calque (`Tolérance`, `Fenêtre`, `Arcs`, `Restes`, `Lance`) et indique ce qu'il a trouvé et ce qu'il laisse en trame. {{cmd:SCANINFO}} liste le fichier d'origine et les étapes. {{cmd:RASTERSNAP}} active ou désactive l'accrochage aux lignes des feuilles numérisées (On ou Off). Voir la rubrique Dessins numérisés et le tracé.

### REGEN et REGENALL

Alias : `RE` pour {{cmd:REGEN}}, `REA` pour {{cmd:REGENALL}}. Reconstruit à l'écran ce qui est dessiné à partir du dessin : {{cmd:REGEN}} l'onglet que vous regardez (sur une feuille, le modèle que ses fenêtres affichent aussi), {{cmd:REGENALL}} chaque onglet, chaque volet de l'écran divisé et chaque dessin ouvert. Utilisez-les lorsque l'image semble périmée après une modification scriptée ou très volumineuse, ou lorsqu'un assistant a modifié le dessin ; le dessin lui-même n'est pas touché, il n'y a donc rien à annuler.

### NAMEDVIEW

Alias : `NV`, `VIEWS`. `Saisissez une option [?/Restaurer (R)/Enregistrer (S)/Fenêtre (W)/Supprimer (D)] <Restaurer>`, puis le nom de la vue. `S` enregistre la vue à l'écran, `W` une fenêtre que vous désignez, `R` affiche une vue enregistrée, `D` supprime une vue, `?` liste les vues de cet onglet. Enregistrer sous un nom existant le remplace ; chaque modification est une étape d'annulation. Les vues appartiennent à l'onglet où elles ont été enregistrées. Les fichiers DWG et DXF les conservent (la table VIEW) ; les vues d'une feuille reviennent sur la première feuille, le fichier ne précisant pas laquelle.

### UNDO et REDO

Alias : `U` pour {{cmd:UNDO}} ; {{cmd:REDO}} n'a pas d'alias. Aussi {{key:Mod+Z}} et {{key:Mod+Y}}.

### LAYER

Alias : `LA`. Va au panneau {{ui:Calques}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`) : `Saisissez le type de ligne des nouveaux objets` — `DuCalque`, `DuBloc` ou un nom (`?` les liste : Continu, ceux du dessin, et DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE avec leurs tailles `2` (moitié) et `X2` (double)). {{cmd:LWEIGHT}} (`LW`) : l'épaisseur des nouveaux objets en mm, ou `DuCalque`, `DuBloc`, `Défaut`. {{cmd:LTSCALE}} (`LTS`) : l'échelle des types de ligne du dessin (annulable). {{cmd:LWDISPLAY}} (`LWT`) : `Afficher les épaisseurs [ON/OFF]`, comme le bouton {{ui:LWT}} de la barre d'état. Voir [Épaisseurs de ligne et types de ligne](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`) : `Saisissez le type d'objet à renommer [Calque/Bloc]`, `Saisissez l'ancien nom`, puis le nouveau nom ; les objets ou les références suivent. {{cmd:LAYMRG}} : `Sélectionnez un objet du calque à fusionner ou [Nom]` jusqu'à {{key:Enter}}, puis `Sélectionnez un objet du calque cible ou [Nom]` et `Y`. {{cmd:LAYDEL}} : `Sélectionnez un objet du calque à supprimer ou [Nom]`, puis `Y` : le calque et chaque objet qu'il porte disparaissent (ni le calque 0, ni DEFPOINTS, ni le calque courant). Une étape d'annulation chacune. Voir [Organiser un dessin avec des calques](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Calques par désignation d'objets ; aussi dans le menu {{ui:Outils}} du panneau {{ui:Calques}}. {{cmd:LAYISO}} : `Sélectionnez des objets sur le ou les calques à isoler`, puis {{key:Enter}} : tous les autres calques sont désactivés. {{cmd:LAYUNISO}} les réactive. {{cmd:LAYOFF}} et {{cmd:LAYFRZ}} : `Sélectionnez un objet sur le calque à désactiver` (ou à geler), en boucle ; `U` annule le dernier, {{key:Enter}} termine. {{cmd:LAYMCUR}} : `Sélectionnez l'objet dont le calque deviendra courant`. {{cmd:LAYON}} active tous les calques, {{cmd:LAYTHW}} dégèle tous les calques. Chaque commande est une étape d'annulation. Voir [Organiser un dessin avec des calques](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} crée un dessin vide et {{cmd:OPEN}} ouvre un DWG ou un DXF, chacun dans son propre onglet au-dessus du dessin (un nouveau dessin non modifié est utilisé à la place d'un nouvel onglet). Fermer un onglet comportant des modifications non enregistrées demande d'abord confirmation. Voir [Diviser l'écran](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, aussi {{key:Mod+S}}) télécharge une copie dans le format du dessin : DWG s'il a été ouvert depuis un DWG, DXF s'il vient d'un DXF. Un nouveau dessin utilise le format choisi en dernier dans Enregistrer sous, dans ce navigateur, sinon DWG.

{{cmd:SAVEAS}} (aussi {{key:Mod+Shift+S}}) ouvre la boîte de dialogue {{ui:Enregistrer une copie sous}} : choisissez {{ui:DWG}} (et sa {{ui:Version}}), {{ui:DXF R12}} ou {{ui:DXF 2000}}, puis {{ui:Enregistrer}}. Le choix reste pour ce dessin et pour les nouveaux dessins de ce navigateur.

{{cmd:DXFOUT}} télécharge toujours une copie DXF R12, sans changer le format qu'utilise {{cmd:SAVE}}.

Voir [Fichiers : ce qui s'ouvre, ce qui s'enregistre](topic:files#saving).

### TOUR

Alias : `TUTORIAL`. Relance la visite du premier dessin en six étapes. Voir [Premiers pas](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias : `TBDOCK`. `Position de la barre d'outils [Haut/Bas/Gauche/Droite]`. Voir [Paramètres](topic:settings#toolbar-position).

### COMMANDLINE

Alias : `CMDLINE`. `Ligne de commande [Ancrée en bas/Flottante/Une ligne/Lignes d'historique affichées/Historique des commandes (F2)]` : ancre ou détache la ligne de commande, la met sur une seule ligne, demande combien de lignes d'historique afficher (0 à 12), ou ouvre l'historique. Voir [Paramètres](topic:settings#command-line).

### TOPAREA

`Zone supérieure [Standard/Compacte]` : les barres au-dessus du dessin telles qu'elles étaient, ou compactes. Voir [Paramètres](topic:settings#top-area).

### POLARANG

`Saisissez le pas de repérage polaire en degrés <90>` : le pas sur lequel les lignes du repérage {{ui:Polaire}} s'alignent (plus de 0, jusqu'à 180). Conservé dans ce navigateur.

### UNITS

Alias : `UN`. Comment les longueurs sont écrites et saisies.

- `Saisissez le format des longueurs [Scientifique/Décimal/Ingénieur/Architectural/Fractionnaire] <courant>`
- Architectural et Fractionnaire : `Saisissez le dénominateur de la plus petite fraction à afficher (1, 2, 4, 8, 16, 32, 64, 128 ou 256)`. Pour les autres : `Saisissez le nombre de décimales (0 à 8)`.

Les nouvelles cotes le suivent. Une seule étape d'annulation. Identique à {{ui:Format de longueur}} et {{ui:Précision}} dans {{ui:Réglages actuels}} ; voir [Pieds et pouces](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias : `GDS`. Affiche une mise en page de circuit intégré (un fichier de flux GDSII) : essai de laboratoire, uniquement pour visualiser et mesurer.

- Un sélecteur de fichier prend un fichier `.gds` ; avec plusieurs cellules de tête, `Saisissez la cellule de tête à dessiner`.
- Chaque couche et chaque type de données devient un calque du dessin (`GDS 1`, `GDS 2/5`), les références et réseaux sont placés à plat, dans l'unité utilisateur du fichier (en général le micromètre). Une étape d'annulation. Rien n'est simulé ni vérifié, et le fichier n'est pas réécrit.

### DIAGRAM

Alias : `TEXTDIAGRAM`, `T2D`. Un schéma à partir de texte.

- Une zone prend le texte (ou une ligne avec `;` entre les instructions sur la ligne de commande) : un organigramme Mermaid, un schéma de composants PlantUML, D2 ou une liste de-à.
- `Spécifiez le coin supérieur gauche du schéma`, puis `Spécifiez la hauteur du texte`.

Les blocs et connecteurs sont des objets ordinaires sur le calque `Diagram`, sélectionnés à la fin. Une étape d'annulation. Voir [Dessiner un schéma à partir de texte](topic:text-to-diagram).

### OLELIST

Alias : `OLES`. Les objets OLE qu'un DWG contient et que CadCraft ne peut pas placer seul.

- Liste chacun : numéro, type, taille, et s'il a enregistré une image.
- `Saisissez une option [Placer/Quitter (X)] <Quitter (X)>` : Placer demande le numéro, le coin inférieur gauche et la largeur, et dessine un cadre avec l'image. Une étape d'annulation ; l'objet conservé n'est pas modifié. Voir [Images](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias : `SHX`. Vos propres polices SHX.

- `Saisissez une option de police SHX [Dossier/Fichiers/Liste/Retirer/Inverser (R)/Vider] <Liste>`

{{ui:Dossier}} lit chaque `.shx` d'un dossier (CadCraft Studio ; de nouveau à chaque démarrage), {{ui:Fichiers}} prend des fichiers choisis (le navigateur), {{ui:Inverser (R)}} dispose les lettres d'une police de la dernière à la première. Les styles de texte qui nomment une police chargée s'affichent avec elle. Voir [Dessiner du texte avec vos propres polices SHX](topic:shx-fonts).

### LIMITS

Taille que le dessin est censé avoir.

- `Spécifiez le coin inférieur gauche ou [ON/OFF] <courant>` : un point, `ON` ou `OFF`.
- `Spécifiez le coin supérieur droit <courant>`.

La grille couvre les limites, {{cmd:ZOOM}} Tout les montre, et lorsqu'elles sont ON, un point situé en dehors est refusé (`**En dehors des limites`). Une étape d'annulation ; enregistré en DWG et DXF. Voir [Définir les limites du dessin](topic:drawing-limits).

### AUNITS

Alias : `ANGUNITS`. Comment les angles sont affichés et saisis.

- `Saisissez le format des angles [Degrés décimaux/Degrés-minutes-secondes/Gisements de géomètre] <courant>`
- `Saisissez le nombre de décimales (0 à 8)`, ou pour les deux autres `Saisissez la précision` (0 degré, 2 minutes, 4 secondes, 5 à 8 décimales de seconde).

Une étape d'annulation ; enregistré en DWG et DXF. Identique à {{ui:Format des angles}} dans {{ui:Réglages actuels}}. Voir [Saisir et afficher les gisements et les angles](topic:bearings-and-angles).

### APPLOAD

Alias : `AP` ; ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Charger une application…}}. La boîte de dialogue {{ui:Charger des applications}} : charger des routines `.lsp` et des fichiers de boîte de dialogue `.dcl`, les décharger, les recharger depuis l'historique, et la Suite de démarrage. Les commandes `(defun c:NOM …)` d'une routine fonctionnent ensuite comme les autres. Voir [Charger des applications](topic:load-applications) et [Exécuter des routines LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Modifier les alias…}}) ouvre votre fichier d'alias (lignes `ALIAS, *COMMANDE`) ; {{ui:Enregistrer}} l'applique. {{cmd:REINIT}} l'applique à nouveau. Voir [Modifier les alias de commandes](topic:command-aliases).

### HELP

Alias : `?`. Affiche chaque commande, ses alias et une description d'une ligne dans l'historique de la ligne de commande. Cela n'ouvre pas cette aide : appuyez sur {{key:F1}} ou cliquez sur {{ui:Aide}} pour cela.

## Invite « Sélectionnez des objets »

À toute invite `Sélectionnez des objets` : cliquez sur des objets, tracez des fenêtres (de gauche à droite) et des captures (de droite à gauche) en deux clics, ou appuyez et faites glisser un lasso ({{key:Space}} pendant le glissement : fenêtre, capture, clôture), {{key:Shift}}+clic pour retirer, et appuyez sur {{key:Enter}} pour terminer. Vous pouvez aussi taper `ALL` (tout), `L` (le dernier objet), `P` (Précédent : ce que la dernière commande utilisait), `F` (Clôture : les objets traversés par une ligne de points ; `U` annule un point), `W` (Fenêtre), `C` (Capture), `R` (mode Retrait : les choix retirent les objets ; l'invite affiche `Retirer des objets`) et `A` (Ajouter à nouveau). `?` les liste. Elles ne sont pas affichées dans l'invite. {{key:Tab}} sur des objets qui se superposent met en évidence le suivant ; cliquez pour le choisir. Voir [Sélectionner des objets](topic:select-objects).

### ACCESS

Alias : `AX`. Dessiner sans voir. {{cmd:ACCESS}} active ou désactive l'accès (`On`, `Off`) et règle les sons d'accrochage (`Sound`) et les commandes vocales (`Voice`) ; il annonce d'abord l'état. Avec l'accès activé, chaque commande et chaque résultat est lu par votre lecteur d'écran, et la zone de dessin dispose d'un curseur clavier. La rubrique d'aide « Dessiner sans voir » donne les touches.

### DESCRIBE

Alias : `DESC`. Décrit ce que contient le dessin : nombre d'objets, leur nature, leur taille, nombre de calques, ce qui est sélectionné. Lecture seule ; ne modifie rien.

### WHEREAMI

Alias : `WHERE`. Indique où se trouve le curseur, dans les unités du dessin.

### NEARBY

Dit ce qui se trouve près du curseur, du plus proche au plus lointain, chacun avec sa distance et le côté où il se trouve.

### SAYSEL

Dit ce qui est sélectionné, une phrase par objet (longueur de ligne, extrémités et angle ; rayon et centre d'un cercle ; texte tel qu'il est écrit).

### VOICE

Active ou désactive les commandes vocales. Elles sont reconnues sur cet ordinateur ; là où le navigateur ne peut pas le faire, la voix reste désactivée sauf si vous choisissez le service en ligne du navigateur dans Paramètres.

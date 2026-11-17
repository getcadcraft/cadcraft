---
title: Venir d'un autre logiciel de dessin
summary: Comment les commandes, touches et habitudes familières correspondent à CadCraft, et les différences qui déroutent les dessinateurs expérimentés.
keywords: passage, différences, migrer, habitudes, alias, saisie dynamique, pickfirst, pickadd, qsave, saveas, enregistrer sous, mtext, ctb, repérage polaire, xref, raccourcis clavier, familier, copyclip, pasteclip, pasteorig, copybase, presse-papiers
from: b58688e7
---

Si vous avez utilisé AutoCAD, ou un programme construit sur le même modèle, la plupart de ce que vous connaissez fonctionne ici : la ligne de commande, les alias comme `L`, `C`, `TR` et `O`, {{key:Enter}} ou {{key:Space}} pour répéter, la sélection par fenêtre et par capture, les accrochages aux objets sur F3, Ortho sur F8, l'espace objet avec présentations et fenêtres de présentation. Cette page indique ce qui correspond directement, puis les différences qui piègent les gens. Lisez la seconde partie même si vous parcourez la première.

## Ce qui correspond directement

| Habitude | Dans CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Mêmes commandes, mêmes alias |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Identique |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Mêmes commandes de cote |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` tapés dans la ligne de commande | Identique, pour les nouvelles cotes |
| `B` pour créer un bloc, `I` pour insérer, `PU` pour purger | Identique (la purge ne supprime que les blocs inutilisés) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` puis `E` ou `W` | Identique |
| Taper `_LINE` ou `-LAYER` depuis un script ou par habitude | Le `_`, `-`, `.` ou `'` initial est ignoré |
| {{key:Enter}} ou {{key:Space}} sur une invite vide répète la dernière commande | Identique |
| {{key:Esc}} annule ; {{key:Esc}} à nouveau désélectionne | Identique |
| `@dx,dy`, `@d<a`, angles saisis dans le sens antihoraire depuis l'est | Identique |
| Fenêtre de gauche à droite, capture de droite à gauche, clic-clic ; appuyez et faites glisser pour un lasso, {{key:Space}} fait défiler fenêtre / capture / clôture (LASSOMODE) | Identique |
| Sélectionner d'abord, puis la commande (nom-verbe) | Identique ; une commande terminée vide la sélection |
| `ALL` et `L` à « Sélectionnez des objets » | Identique |
| {{key:Shift}}+clic retire de la sélection | Identique. Les réglages peuvent faire qu'un clic remplace la sélection, comme le fait PICKADD 0 : voir [Paramètres de CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Mêmes commandes et touches ; le collage place la copie par son coin inférieur gauche, comme PASTECLIP |
| F3 accrochage aux objets, F7 grille, F8 Ortho | Mêmes touches |
| Double-cliquer sur la molette pour le zoom étendu | Identique |
| Le texte miroir reste lisible | Identique (comme avec MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Identique ; sur Mac, Command fonctionne aussi |

La [Référence des commandes](topic:commands) liste chaque commande et chaque alias.

:::tip
Si vous aimez le ruban d'AutoCAD, choisissez le style de menu {{ui:Dessin classique}} dans {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Menus, touches et souris}} : des onglets Accueil, Insertion, Annotation, Paramétrique, Vue, Gestion et Sortie au-dessus de la même ligne de commande ; le bouton central fait un panoramique et un clic droit vaut {{key:Enter}}. Voir [Menus, touches et souris](topic:menus-keys-and-mouse).
:::

La [table des commandes](topic:command-map) liste toutes les commandes de CadCraft avec leurs noms courts, et l'[aide-mémoire](topic:cheat-sheet) présente les 40 que vous utiliserez le plus (aussi en PDF d'une page).

## Différences qui déroutent

### Les points saisis sont absolus

Avec la saisie dynamique activée, l'autre programme traite un `100,0` saisi comme second point comme relatif. **La ligne de commande de CadCraft ne fait pas cela :** là, `x,y` est toujours mesuré depuis l'origine. Avec {{ui:Dyn}} ({{key:F12}}) activé, utilisez plutôt ses champs : distance, {{key:Tab}}, angle. Tapez `@100,0` pour « 100 à droite du dernier point », ou placez le réticule dans la bonne direction et tapez simplement `100`.

### Maj ignore les accrochages ; il n'active pas Ortho

Maintenir {{key:Shift}} pendant un clic ignore les accrochages aux objets pour ce clic. Il n'active pas temporairement Ortho. Utilisez F8 ou le bouton {{ui:Ortho}}.

### Le clic droit vaut toujours Entrée

Il n'y a pas de menu contextuel. Un clic droit dans le dessin vaut {{key:Enter}} : il termine une commande, achève une sélection ou répète la dernière commande. Pendant un déplacement par poignée ou un cadre de sélection, il annule à la place. Faites glisser avec le bouton droit pour faire un panoramique.

### Pas de panoramique avec la barre d'espace

{{key:Space}} vaut {{key:Enter}}, donc maintenir {{key:Space}} et faire glisser ne fait pas de panoramique. Faites le panoramique avec le bouton central ou le bouton droit, ou dézoomez puis rezoomez sur un autre point avec la molette.

### TRIM et EXTEND

TRIM et EXTEND démarrent en mode Rapide : chaque objet visible est une arête de coupe ou une limite, la partie sous le pointeur montre ce qui va disparaître, un tracé glissé ajuste chaque partie qu'il traverse, et un objet que rien ne traverse est effacé. {{key:Shift}} alterne entre ajuster et prolonger. `O` passe en mode Standard (choisissez d'abord les arêtes), `F` et `C` sont la clôture et la capture, `E` est EDGEMODE, `R` efface. Il n'y a pas d'option `P` (Projection) : CadCraft ajuste dans le plan du dessin.

### FILLET et CHAMFER

{{cmd:FILLET}} et {{cmd:CHAMFER}} acceptent les options que vous connaissez : Annuler (U), Polyligne, Rayon, Ajuster (T), Multiple, et Méthode (E) pour CHAMFER ; ainsi que {{key:Shift}}+clic pour un angle vif. Un raccord entre une polyligne et une ligne ajoute l'arc comme objet distinct au lieu de le joindre à la polyligne, et les angles de polyligne voisins d'un segment d'arc sont laissés tels quels.

### Texte multiligne et texte sur une seule ligne

`T`, `MT` et `MTEXT` sont des textes multilignes saisis sur place, avec une largeur, un interligne et une justification ; `DT` et `DTEXT` sont des textes sur une seule ligne, comme vous les connaissez. Il n'existe ni styles de texte ni colonnes, et vous ne pouvez pas encore saisir de mise en forme dans le texte (gras, fractions empilées) ; la mise en forme venant d'un fichier est conservée, dessinée et enregistrée (voir [Ajouter du texte et des légendes](topic:text#formatting-inside-paragraph-text-from-other-programs)). Tout se dessine dans une police de type Helvetica.

### Enregistrer signifie « télécharger une copie »

{{key:Mod+S}}, `SAVE` et `QSAVE` téléchargent une copie dans le format du dessin : un DWG ouvert s'enregistre en DWG, un DXF en DXF. Dans le navigateur, rien n'est écrasé sur place, et les fichiers ouverts ne sont jamais modifiés. Dans CadCraft Studio, {{key:Mod+S}} réécrit le fichier que vous avez ouvert.

`SAVEAS` ({{key:Mod+Shift+S}}) ouvre une petite boîte de dialogue, et non un explorateur de fichiers : choisissez {{ui:DWG}} (avec sa {{ui:Version}}, AutoCAD 2000 à 2018), {{ui:DXF R12}} ou {{ui:DXF 2000}}, puis cliquez sur {{ui:Enregistrer}}. Le navigateur décide où va le téléchargement. `DXFOUT` télécharge toujours du DXF R12.

Un DWG ouvert s'enregistre dans la version d'origine ; un nouveau dessin s'enregistre au format AutoCAD 2000, sauf si vous en choisissez un autre. Les feuilles, les cotes et les motifs de hachure sont conservés. Voir [Fichiers : ce qui s'ouvre, ce qui s'enregistre](topic:files#saving).

### Calques : plus simple

- Chaque modification de calque (activation, gel, verrouillage, couleur, tracé, type de ligne, épaisseur, calque courant) constitue une seule étape d'annulation.
- Désactivation et gel ont le même effet dans CadCraft.
- Les calques gelés dans une fenêtre de présentation restent gelés là : à l'écran, dans les tracés et lorsque vous enregistrez le dessin en DWG ou DXF.
- Une fenêtre de présentation qui affiche un calque avec sa propre couleur, son type de ligne, son épaisseur ou sa transparence continue de le faire à l'écran, dans les tracés et dans un DWG enregistré (le DXF conserve les réglages propres du calque ; l'enregistrement l'indique). La modification de ces réglages par fenêtre n'est pas encore disponible.
- Il n'existe ni gestionnaire de propriétés de calque ni états de calque ; {{cmd:RENAME}}, {{cmd:LAYMRG}} et {{cmd:LAYDEL}} renomment, fusionnent et suppriment les calques. Les types de ligne et les épaisseurs se règlent dans le panneau de droite (voir [Épaisseurs de ligne et types de ligne](topic:units-papers-scales#line-weights-and-linetypes)) ; {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} et {{cmd:LAYMCUR}} fonctionnent par désignation.
- L'enregistrement en DXF R12 écrit les noms de calques en majuscules. Un DWG les conserve comme vous les avez saisis.

### Styles de cote

`DIMSTYLE` ouvre un gestionnaire de styles nommés (nouveau, modifier, définir comme actuel, comparer, appliquer). `DIMSCALE` et les autres réglages modifient toujours ce qu'utilisent les nouvelles cotes, et chaque cote conserve ses propres dimensions, que vous pouvez aussi modifier dans le panneau Propriétés. Le style courant n'est pas enregistré dans le fichier. Les cotes suivent le format de longueur du dessin (décimal, ou pieds et pouces avec {{cmd:UNITS}}), ou leur propre {{ui:Format}}. Voir [Régler la taille des cotes](topic:dimension-settings).

### Le tracé est plus simple

Les tables de styles de tracé fonctionnent par couleur, comme les fichiers CTB : Monochrome, Couleur et Niveaux de gris sont intégrées, vous pouvez en créer vos propres, et chaque feuille conserve sa table. La lecture des fichiers CTB repose sur la description publiée et n'a été testée que sur des fichiers que nous avons produits ; les tables de styles de tracé nommées (STB) et les mises en page ne sont pas encore disponibles. Les lignes s'impriment à leur épaisseur, les autres à une épaisseur de plume unique. Les feuilles se tracent à 1:1 sur leur propre papier ; l'espace objet se trace à une échelle choisie ou ajustée. Voir [Tracer en PDF](topic:plot-pdf).

### Travailler dans une fenêtre de présentation

Comme vous le connaissez : double-cliquez dans une fenêtre de présentation (ou tapez {{cmd:MSPACE}}) pour travailler sur le modèle à travers elle, et double-cliquez en dehors (ou {{cmd:PSPACE}}) pour revenir à la feuille. À l'intérieur, le panoramique et le zoom modifient ce qu'affiche la fenêtre, sauf si son affichage est verrouillé ; sinon ils déplacent la feuille. Cliquer sur un onglet sous le dessin quitte aussi la fenêtre. Voir [Travailler sur le modèle à travers une fenêtre de présentation](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Repérage et saisie dynamique oui ; accrochage à la grille pas encore

La grille sert uniquement à s'orienter ; les points ne s'y accrochent pas (il n'y a pas de mode d'accrochage F9). Le repérage polaire ({{key:F10}}, dont le pas se règle avec {{cmd:POLARANG}}) et le repérage d'accrochage aux objets ({{key:F11}} : arrêtez-vous sur un point d'accrochage pour le saisir) fonctionnent comme vous les connaissez ; voir [Accrocher aux objets](topic:object-snaps#polar-tracking). La saisie dynamique ({{key:F12}}) affiche la distance et l'angle (ou X et Y) près du réticule ; voir [Saisie des coordonnées et des distances](topic:coordinate-entry#dynamic-input).

### Pieds et pouces

Choisissez {{ui:Format de longueur}} {{ui:Architecturales}} ou {{ui:Ingénieur}} (ou tapez {{cmd:UNITS}}), et saisissez les longueurs comme vous les connaissez : `12'6"`, `12'6-1/2"`. Utilisez un trait d'union, et non un espace, avant une fraction : {{key:Space}} vaut {{key:Enter}}. Réglez aussi {{ui:Unités}} sur {{ui:Pouces}}, pour que les feuilles et les tracés proposent les échelles architecturales. Le format est conservé dans les fichiers DWG et DXF enregistrés. Voir [Pieds et pouces](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copier-coller reste dans CadCraft

{{key:Mod+C}}, {{key:Mod+X}} et {{key:Mod+V}} copient, coupent et collent des objets dans un dessin, entre des dessins, et entre les onglets CadCraft du même navigateur. Le presse-papiers est celui de CadCraft : vous ne pouvez pas coller des objets CadCraft dans un autre programme, ni des objets d'un autre programme dans CadCraft. Coller depuis un dessin dans d'autres unités ne redimensionne pas : utilisez ensuite {{cmd:SCALE}}. {{key:Mod+D}} est un dupliquage qui suit le pointeur, un ajout propre à CadCraft. Voir [Copier, coller et dupliquer](topic:copy-paste).

### Touches du navigateur inaccessibles

Une page web ne peut pas prendre {{key:Mod+N}}, {{key:Mod+W}} ou {{key:Mod+T}} au navigateur : ces touches ouvrent et ferment les fenêtres et les onglets. Utilisez le bouton {{ui:Nouvelle}} ou tapez `NEW`. Voir [Touches, souris et pavés tactiles](common:keys).

## Commandes que vous pourriez chercher et qui ne sont pas encore là

{{cmd:TABLE}} n'est pas encore disponible. La saisir affiche « Commande inconnue ». ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} et {{cmd:XREF}} sont disponibles.) [Pas encore disponible](topic:not-built-yet) indique ce qu'il faut faire à la place aujourd'hui.

---
title: Le panneau Propriétés
summary: Voyez et modifiez tout ce qui concerne les objets sélectionnés, plusieurs à la fois : coordonnées avec Z, dimensions, texte, réglages de cote, transparence et plus. Les champs acceptent des expressions et des longueurs avec unités.
keywords: totaux, longueur totale, aire totale, somme, longueur de la sélection, propriétés, palette des propriétés, ctrl+1, pr, ch, mo, ddmodify, variable, sélection rapide, pickadd, coordonnées, z, altitude, épaisseur, transparence, matériau, lien hypertexte, expression, quickcalc, sommet, style de cote, tolérance, décimales
from: 10d6a829
---

## Ce que vous allez apprendre

Comment ouvrir le panneau Propriétés, modifier un objet ou cent en une seule étape, saisir des coordonnées exactes (avec Z), utiliser des expressions et des unités dans chaque champ numérique, et ce que montre chaque type d'objet.

## Ouvrir le panneau

Le panneau se trouve à droite. Pour le ramener au premier plan :

- Appuyez sur {{key:Mod+1}}, ou tapez {{cmd:PROPERTIES}} (ou `PR`, `CH`, `MO`).
- Double-cliquez sur un objet (le texte et les repères multiples ouvrent leur éditeur de texte).

Le panneau est un panneau déplaçable comme les autres : faites glisser sa poignée pour l'ancrer à gauche, à droite ou en bas, ou déposez-le sur le dessin pour le rendre flottant (voir [Organiser les panneaux et utiliser un second écran](common:arrange-panels)).

### Le replier

Le bouton épingle en haut à droite du panneau active le **masquage automatique** : le panneau se replie en une bande sur le bord droit, et le dessin gagne de la place. Pointez la bande (ou appuyez sur {{key:Mod+1}}) et il s'ouvre sur le dessin ; éloignez-vous et il se replie. Cliquez de nouveau sur l'épingle pour le garder ouvert. {{cmd:PROPERTIESCLOSE}} le replie aussi.

## Sections

Les propriétés sont regroupées en sections que vous pouvez replier : **Général**, **Géométrie**, **Texte**, **Lignes et flèches**, **Ajustement**, **Unités principales**, **Unités secondaires**, **Tolérances**, **Motif**, **Divers**, et pour les blocs **Attributs** et **Élément de bibliothèque**. Cliquez sur le nom d'une section pour la replier ou l'ouvrir ; CadCraft se souvient de celles que vous avez repliées.

Faites glisser le fin trait entre les noms et les valeurs pour élargir ou rétrécir les noms. Double-cliquez dessus pour le remettre. Au clavier, placez le focus dessus et utilisez les flèches.

## Modifier une valeur

1. Cliquez sur une ligne. L'en-tête indique « Ligne ».
2. Cliquez dans {{ui:Longueur}}. Pendant la modification, le champ affiche la valeur complète, et non la valeur arrondie.
3. Tapez `2500` et appuyez sur {{key:Enter}}. La ligne mesure maintenant 2500 de long, en gardant son point de départ et son angle.

{{key:Enter}} ou un clic ailleurs applique la valeur ; {{key:Esc}} remet l'ancienne valeur. Chaque modification est une seule étape d'annulation.

### Expressions et unités

Chaque champ numérique accepte plus qu'un simple nombre :

| Vous tapez | Vous obtenez |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (pouces, dans un dessin en pieds et pouces) |
| `900mm`, `3.5m`, `2ft` | Convertis dans les unités du dessin |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (champs d'angle) |
| `0.5r`, `100g` | Radians et grades, convertis en degrés |

Une longueur avec unité nécessite que le dessin ait des unités : réglez d'abord {{ui:Unités}} sous {{ui:Nouveaux objets}} (sans sélection). Une saisie incorrecte est refusée avec une remarque sous le panneau, et rien ne change ; elle n'est jamais enregistrée comme 0. Fonctions : sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if ; angles en degrés.

## Modifier plusieurs objets à la fois

1. Sélectionnez plusieurs objets, par exemple 8 lignes et 4 cotes.
2. L'en-tête indique « 12 objets », et une liste en haut propose **Tous (12)**, **Ligne (8)** et **Cote (4)**.
3. **Tous** montre ce que possède chaque objet (calque, couleur, type de ligne…). Choisissez **Cote (4)** pour voir les réglages de cote.
4. Modifiez une valeur, par exemple {{ui:Décimales}} à `1`.

Les quatre cotes changent, en une seule étape d'annulation. Un champ qui affiche **Variable** signifie que les objets diffèrent ; taper une valeur la règle sur tous. Les objets sur des calques verrouillés restent tels quels, et la remarque indique combien.

## Totaux d'une sélection

Lorsque plusieurs objets sont sélectionnés, la section {{ui:Totaux}} en haut indique :

- **Objets** : combien de chaque sorte, par exemple « 8 lignes, 2 polylignes, 1 cercle ».
- **Longueur totale** : la somme des lignes, arcs et polylignes (les splines comptent aussi), et combien d'objets cela représente.
- **Aire totale** : la somme des objets fermés : cercles, ellipses entières, polylignes fermées et hachures (les trous d'une hachure sont retirés).

Elles sont dans le format de longueur du dessin (pieds et pouces lorsqu'il les utilise ; aires alors en pouces carrés et pieds carrés). La barre d'état affiche la même longueur et aire chaque fois que des objets sont sélectionnés ; {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Longueur et aire de la sélection}} › {{ui:Masqués}} désactive cela. Pour un seul objet, {{ui:Géométrie}} montre sa propre longueur et aire, comme avant.

## Coordonnées

Chaque point affiche **X**, **Y** et **Z** : début et fin d'une ligne, centres, points d'insertion, positions de texte, le sommet courant d'une polyligne. Les lignes affichent aussi **Delta X**, **Delta Y** et **Delta Z** (en lecture seule). Les polylignes et hachures ont une **Altitude** (un Z pour l'objet entier).

Le bouton en forme de viseur à côté du nom d'un point vous permet de le choisir sur le dessin : cliquez dessus, puis cliquez la nouvelle position (les accrochages fonctionnent). Les valeurs sont des coordonnées monde.

## Général

| Champ | Ce que c'est |
|---|---|
| {{ui:Calque}}, {{ui:Couleur}}, {{ui:Type de ligne}}, {{ui:Échelle du type de ligne}}, {{ui:Épaisseur de ligne}} | Comme dans le panneau des calques ; {{ui:Par calque}} suit le calque |
| {{ui:Transparence}} | Par calque, par bloc, ou de 0 à 90 % |
| {{ui:Épaisseur}} | Jusqu'où les lignes, cercles, arcs, polylignes, points et textes s'étendent en Z |
| {{ui:Matériau}} | Par calque, par bloc, Global ou un nom apporté par un dessin |
| {{ui:Style de tracé}} | En lecture seule : les dessins se tracent par couleur, via la [table de styles de tracé](topic:plot-pdf#plot-style-tables) de la feuille |
| {{ui:Lien hypertexte}} | Une adresse web conservée avec l'objet |

## Ce que montre chaque type

| Sélectionné | Vous pouvez modifier |
|---|---|
| Ligne | Début et fin X, Y, Z ; longueur ; angle |
| Cercle | Centre ; rayon ; diamètre ; circonférence ; aire (chacun règle le rayon) |
| Arc | Centre ; rayon ; angles de début et de fin ; angle total ; corde (affiche la longueur de l'arc et l'aire) |
| Ellipse | Centre ; rayons majeur et mineur ; rapport des rayons ; angle de l'axe majeur ; angles de début et de fin |
| Polyligne | Le navigateur de sommets (ci-dessous) ; largeur globale ; altitude ; fermée ; aire lorsqu'elle est fermée (la met à l'échelle autour de son centre) |
| Texte | Contenu ; style ; justification ; hauteur ; rotation ; facteur de largeur ; angle d'oblique ; largeur définie ; interligne ; annotatif ; position |
| Référence de bloc | Point d'insertion ; rotation ; échelle X, Y, Z et échelle uniforme ; valeurs d'attributs |
| Hachure | Motif ; échelle ; angle ; origine ; associative ; détection des îlots ; couleur de fond ; altitude |
| Cote | Voir ci-dessous |
| Ligne de repère multiple | Texte ; hauteur ; largeur ; côté du texte ; taille de la flèche ; distance d'atterrissage ; point de la flèche |
| Fenêtre de présentation | Échelle ; centre et taille sur la feuille ; centre de vue dans le modèle ; activée ; affichage verrouillé |

### Sommets de polyligne

{{ui:Sommet courant}} indique à quel sommet appartiennent les champs situés sous lui. Utilisez les boutons fléchés, ou tapez un numéro, pour aller à un autre sommet ; il n'y a pas de limite. Chaque sommet a X, Y, la largeur de segment de début et de fin, et le bombement du segment qui commence là (0 = droit).

## Cotes

Une cote affiche son **Style de cote**, ce qu'elle mesure, ses points et chaque réglage :

- **Lignes et flèches :** pointe de flèche pour chaque extrémité, taille de flèche, taille des traits obliques, couleurs et épaisseurs des lignes de cote et de rappel, masquage de l'une ou l'autre moitié ou de l'une ou l'autre ligne de rappel, décalage et prolongement des lignes de rappel.
- **Texte :** remplacement (laisser vide pour la valeur mesurée ; `<>` la représente dans votre propre texte), style, couleur, hauteur, décalage, position verticale et horizontale, toujours horizontal, rotation, remplissage de fond.
- **Ajustement :** échelle globale, espacement des lignes de base, ce qui bouge lorsque l'espace manque, déplacement du texte.
- **Unités principales :** format, décimales, arrondi, préfixe, suffixe, échelle de mesure, séparateur décimal, suppression des zéros de début et de fin ; pour les angles, le format et les décimales d'angle.
- **Unités secondaires :** activées ou non, format, décimales, multiplicateur (25.4 convertit des pouces en millimètres), arrondi, préfixe et suffixe.
- **Tolérances :** aucune, symétriques, écart, limites ou de base, avec valeurs supérieure et inférieure, décimales, hauteur et position.

Modifier l'un de ces réglages sur une cote ouverte supprime le dessin que l'autre programme en avait fait, et CadCraft le redessine.

:::note
La position horizontale du texte (à côté de la première ou de la deuxième ligne de rappel) et le texte sous la ligne sont dessinés sur les cotes linéaires et alignées ; sur les autres cotes, ils sont conservés et enregistrés mais pas encore dessinés. Les choix d'ajustement sont conservés et enregistrés mais pas encore dessinés : CadCraft place le texte selon sa propre règle (au-dessus de la ligne, à l'extérieur lorsqu'il ne tient pas).
:::

## Aucune sélection

Sans sélection, le panneau affiche :

- **Nouveaux objets :** le calque, la couleur, le type de ligne, l'épaisseur de ligne et la hauteur de texte que reçoivent les nouveaux objets ; les unités du dessin et le format de longueur ; le type de ligne et l'épaisseur du calque courant ; les tailles des nouvelles cotes. Sur une feuille, le nom, le papier et l'orientation de la feuille viennent en premier.
- **Vue :** le centre, la hauteur et la largeur de ce qui est à l'écran. Tapez une valeur pour déplacer la vue à cet endroit.
- **Divers :** l'icône du SCU activée ou non, le SCU (toujours Monde : CadCraft n'a pas encore de systèmes de coordonnées utilisateur) et l'échelle d'annotation.

## Les boutons en haut

| Bouton | Action |
|---|---|
| Entonnoir | {{cmd:QSELECT}} : sélectionne par type et propriété |
| Pointeur | {{cmd:SELECT}} : sélectionne des objets sur la ligne de commande |
| Plus ou 1 | Si un clic ajoute à la sélection (plus) ou la remplace (1) ; le même réglage que {{ui:Paramètres}}, {{ui:CadCraft}} |
| Épingle | Masquage automatique, ci-dessus |

## Erreurs courantes

- **Taper dans un champ n'a rien fait.** Appuyez sur {{key:Enter}} ou cliquez ailleurs pour l'appliquer. Un champ rouge et une remarque signifient que la saisie a été refusée.
- **Une longueur avec unité est refusée.** Le dessin n'a pas d'unités. Réglez {{ui:Unités}} sans sélection.
- **Seuls Calque et Couleur s'affichent.** Plusieurs sortes d'objets sont sélectionnées et **Tous** est choisi. Choisissez une seule sorte dans la liste en haut.
- **Certains objets n'ont pas changé.** Ils sont sur un calque verrouillé. Déverrouillez le calque dans le panneau des calques.
- **Des lettres tapées sont allées dans un champ.** Tant qu'un champ a le curseur, les touches s'y tapent. Appuyez sur {{key:Enter}} ou {{key:Esc}}, puis tapez la commande.

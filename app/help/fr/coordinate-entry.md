---
title: Saisie des coordonnées et des distances
summary: Toutes les façons de saisir un point, une distance, un angle ou un nombre dans la ligne de commande de CadCraft, avec des exemples.
keywords: saisie dynamique, dyn, f12, tab, coordonnées, absolu, relatif, polaire, @, distance directe, angle, degrés, dernier point, lastpoint, saisie de points, saisie, calcul, calculatrice, cal, plus, fraction, expression
from: 7de9252d
---

## Points

Lorsque l'invite demande un point, saisissez l'une de ces formes puis appuyez sur {{key:Enter}} :

| Vous saisissez | Signification | Exemple |
|---|---|---|
| `x,y` | Absolu : mesuré depuis l'origine 0,0 | `2500,1200` |
| `#x,y` | Également absolu (accepté par habitude) | `#2500,1200` |
| `@dx,dy` | Relatif : vers la droite et vers le haut depuis le dernier point | `@600,0` |
| `@d<a` | Polaire relatif : distance et angle depuis le dernier point | `@1500<45` |
| `d<a` | Polaire absolu : distance et angle depuis l'origine | `3000<90` |
| un seul nombre | Distance directe : à cette distance du point de base, en direction du réticule | `1200` |
| `*x,y`, `@*dx,dy` | Coordonnées monde lorsqu'un {{cmd:UCS}} est défini | `*0,0` |

Lorsqu'un UCS est défini ({{cmd:UCS}}), `x,y`, `@dx,dy` et l'angle de `d<a` sont mesurés le long des axes de l'UCS. Voir [Tourner la vue et utiliser vos propres coordonnées](topic:ucs-and-turned-view).

Vous pouvez aussi cliquer dans le dessin : les accrochages aux objets et {{ui:Ortho}} s'appliquent aux clics.

Règles :

- Une virgule sépare X de Y. Les décimales utilisent un point : `1250.75,300`.
- Les valeurs négatives vont vers la gauche et vers le bas : `@-600,0`.
- Ne saisissez pas d'espaces : {{key:Space}} valide la ligne, comme {{key:Enter}}.
- Les nombres peuvent utiliser des exposants : `1e3` vaut 1000.
- Ne saisissez aucune unité, ni la notation en pieds et pouces. Saisissez de simples nombres dans les unités du dessin.

## Le dernier point

`@` compte à partir du **dernier point donné à une invite de point**, dans n'importe quelle commande : un clic, un accrochage ou un point saisi. Il est mémorisé d'une commande à l'autre : vous pouvez donc commencer une nouvelle ligne à `@0,500` de l'endroit où la précédente s'est terminée. Tant qu'aucun point n'a été donné, `@` compte à partir de 0,0.

Quelques cas où cela compte :

- Dans {{cmd:COPY}}, après la première copie, le dernier point est celui de cette copie. `@600,0` saisi deux fois place les copies à 600 et 1200 de l'original.
- Après avoir placé une cote, le dernier point est l'endroit où vous avez placé la ligne de cote, et non l'extrémité de la cote.

En cas de doute, utilisez un point absolu, un accrochage ou une distance directe.

## Saisie de la distance directe

Un nombre seul est une distance depuis le **point de base** de la commande (le point d'où part l'élastique), en direction du réticule :

1. Déplacez le réticule dans la direction souhaitée.
2. Saisissez la distance puis appuyez sur {{key:Enter}}.

Lorsque {{ui:Ortho}} est activé, la direction s'aligne à l'horizontale ou à la verticale, ce qui en fait le moyen le plus rapide de dessiner des murs d'équerre. S'il n'y a pas de point de base, ou si le réticule se trouve exactement dessus, le nombre est refusé avec le message « Point ou mot-clé d'option requis. »

## Angles

- En degrés, sous forme de nombre simple : `30`, `-45`, `112.5`.
- Mesurés dans le sens antihoraire à partir de la direction X positive (vers la droite) : 0 est à droite, 90 en haut, 180 à gauche, 270 ou -90 en bas.
- Lorsqu'un angle est demandé (rotation, angle du texte), vous pouvez aussi cliquer : l'angle est mesuré depuis le point de base jusqu'au clic. Tant qu'il n'existe pas de point de base, le premier clic le définit et l'invite demande un second point.

## Distances

Lorsqu'une distance est demandée (rayon, décalage, hauteur du texte, facteur d'échelle) :

- saisissez un nombre positif (dans un dessin en pieds et pouces, également `12'6"` ou `6-1/2` : voir [Pieds et pouces](topic:units-papers-scales#feet-and-inches-and-fractions)), ou
- cliquez un point : la distance entre le point de base de la commande et ce point, ou
- cliquez deux points lorsqu'il n'y a pas de point de base : l'invite devient `Spécifiez le second point`.

Le message « Un nombre positif ou deux points sont requis. » signifie que la valeur n'était pas un nombre, ou qu'elle était négative.

## Calcul dans une valeur saisie

Partout où une longueur, une coordonnée, un angle ou un nombre est saisi (ligne de commande, saisie dynamique, zones des Propriétés et boîtes de dialogue), vous pouvez saisir un calcul avec `+`, `-`, `*`, `/` et des parenthèses au lieu de le calculer d'abord :

| Saisissez | Donne |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (dans un dessin en pieds et pouces) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, dans les unités du dessin (lorsque ses unités sont définies) |
| `@4+7/16,0` | un point situé à 4.4375 à droite du dernier |
| `360/7` | un angle de 51.43 degrés |

- Un tiret écrit dans une longueur en fait toujours partie : `4-7/16` vaut 4 7/16 et `24'-6"` vaut 24 pieds 6 pouces. Pour soustraire après une marque de pieds, terminez d'abord la longueur, `24'-0"-6"`, ou placez le calcul entre parenthèses avec des espaces autour du tiret, `(24' - 6")` (entre parenthèses, un espace est un espace ; ailleurs, il déclenche {{key:Enter}}).
- Un nombre simple ajouté à une longueur est exprimé dans les unités du dessin ; le multiplier ou le diviser met la longueur à l'échelle. Deux longueurs multipliées donnent une surface : `2'*3'` est donc refusé.
- Les fonctions `abs`, `round`, `ceil` et `floor` fonctionnent aussi : `round(10/3)`.
- Un calcul illisible est refusé avec l'indication de l'erreur, par exemple « Le calcul se termine trop tôt (caractère 3) : une valeur manque. » Rien n'est jamais lu comme 0. {{cmd:CAL}} affiche la valeur d'un calcul.

## Saisie dynamique

{{ui:Dyn}} ({{key:F12}}, dans la barre d'état) affiche les valeurs à côté du réticule lorsqu'une commande demande un point.

- Sans point de base (premier point d'une ligne), les deux champs sont **X** et **Y**.
- Ensuite, ce sont la **distance** et l'**angle** depuis le dernier point.

La saisie se fait toujours dans la ligne de commande ; le champ à côté du réticule l'affiche, et l'élastique la suit.

1. Saisissez une valeur : elle va dans le champ en surbrillance.
2. Appuyez sur {{key:Tab}} (ou saisissez une virgule après X). La valeur est verrouillée (affichée en gras) et le champ suivant est mis en surbrillance. Une distance verrouillée maintient l'élastique à cette longueur pendant que vous visez avec la souris.
3. Saisissez la seconde valeur, ou visez simplement, puis appuyez sur {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} trace 50 vers le haut depuis le dernier point.

Appuyer sur {{key:Enter}} après une seule valeur, sans {{key:Tab}}, fonctionne comme la saisie de la distance directe. Les pieds et pouces fonctionnent aussi dans les champs (`12'6"`). Les invites de distance et d'angle (rayon d'un cercle, rotation) affichent elles aussi leur valeur à côté du réticule.

## Options et valeurs par défaut

- Les options apparaissent entre crochets. Saisissez les lettres majuscules d'une option (`D` pour `[Diamètre]`, `CL` pour `[Fermer (CL)]`) puis appuyez sur {{key:Enter}}. Les débuts de mot plus longs fonctionnent aussi (`DIA`).
- Une valeur par défaut apparaît entre chevrons, comme `<500>`. Appuyez sur {{key:Enter}} ou faites un clic droit pour l'utiliser.

## Autres dispositions de clavier et pavé numérique

Les noms de commandes, les noms courts et les lettres d'options sont des lettres latines. Avec une disposition grecque, cyrillique (russe, ukrainienne, biélorusse, serbe, macédonienne, bulgare), hébraïque, arabe, persane, thaïe ou coréenne active, vous n'avez pas besoin de changer de disposition : lorsque le mot saisi n'est pas une commande, un nom court ou une option tel quel, CadCraft le lit d'après les touches pressées. La touche marquée `L` sur un clavier latin lance toujours `LINE`, et la touche `C` répond toujours à l'option `Fermer (C)`, quelle que soit la lettre que la disposition affiche dessus. La liste des commandes correspondantes au-dessus de la ligne de commande suit la même règle. Le texte saisi lorsqu'une commande demande un texte (le contenu de {{cmd:TEXT}}, un nom) n'est jamais modifié.

Sur les dispositions dont la touche décimale du pavé numérique donne une virgule, cette touche saisit un point décimal dans la ligne de commande et dans les zones de nombres, ce qui permet de saisir `12.5` au pavé numérique. La touche virgule du clavier principal sépare toujours `x,y`.

Les deux options peuvent être désactivées dans {{ui:Settings}} : {{ui:Commands on a non-Latin keyboard layout}} et {{ui:Keypad decimal key}}.

## L'affichage des coordonnées

La barre d'état affiche les coordonnées X et Y du réticule (dans l'UCS lorsqu'un UCS est défini), après les accrochages et {{ui:Ortho}}. Lorsqu'une commande a un point de base, elle ajoute `Δ` avec la distance et l'angle depuis ce point, par exemple `Δ 1500 < 30°` : les nombres que vous saisiriez sous la forme `@1500<30`.

Utilisez {{cmd:ID}} pour afficher les coordonnées d'un point et {{cmd:DIST}} pour mesurer entre deux points.

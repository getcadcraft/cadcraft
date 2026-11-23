---
title: Unités, formats de papier et échelles
summary: Ce que signifient les unités de dessin dans CadCraft, les formats de papier pour les feuilles et les tracés, toutes les échelles standard, et le rapport entre les tailles de texte et de cote et l'échelle de tracé.
keywords: unités, millimètres, pouces, pieds, pieds et pouces, architectural, ingénieur, fractionnaire, fractions, lunits, format de longueur, précision, mètres, format de papier, a3, a1, arch d, ansi, tabloid, letter, échelle, 1:100, 1/4 de pouce, échelle architecturale, échelle d'ingénieur, insunits
from: 7dc9b62e
---

## Unités de dessin

Vous dessinez en grandeur réelle, en unités de dessin. Ce que représente une unité est le réglage **Unités** du dessin :

1. Appuyez sur {{key:Esc}} pour ne rien sélectionner, sur l'onglet {{ui:Modèle}}.
2. Dans {{ui:Réglages actuels}}, choisissez {{ui:Unités}} : {{ui:Sans unité}}, {{ui:Millimètres}}, {{ui:Centimètres}}, {{ui:Mètres}}, {{ui:Pouces}} ou {{ui:Pieds}}.

Les cotes peuvent écrire leurs longueurs en millimètres, centimètres, mètres ou kilomètres, quelle que soit l'unité du dessin : voir [Cotes en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Changer les unités ne redimensionne rien. Cela modifie la façon dont les échelles sont lues sur les feuilles et dans les tracés, ainsi que les échelles proposées. Un dessin ouvert depuis un DWG ou un DXF garde les unités enregistrées dans le fichier ; la section {{ui:Dessin}} du panneau de gauche les affiche.

Un dessin {{ui:Sans unité}} est traité comme s'il était dans l'unité du papier : millimètres sur papier ISO, pouces sur papier US.

## Pieds et pouces, et fractions

La façon dont les longueurs sont **écrites et saisies** est un réglage à part, le format de longueur. Il ne modifie aucune géométrie, seulement l'apparence des nombres et ce que vous pouvez taper.

1. Appuyez sur {{key:Esc}} pour ne rien sélectionner, sur l'onglet {{ui:Modèle}}.
2. Dans {{ui:Réglages actuels}}, choisissez {{ui:Format de longueur}} : {{ui:Décimales}} (`150.5`), {{ui:Architecturales}} (`12'-6 1/2"`), {{ui:Ingénieur}} (`12'-6.5"`), {{ui:Fractionnaires}} (`150 1/2`) ou {{ui:Scientifique}} (`1.505E+02`).
3. Choisissez {{ui:Précision}} : le nombre de décimales, ou la plus petite fraction (1/16 est le choix habituel pour l'architecture).

Ou tapez {{cmd:UNITS}} (`UN`) et répondez à ses deux questions.

Avec {{ui:Architecturales}} ou {{ui:Ingénieur}}, une unité de dessin vaut un pouce, comme dans AutoCAD : réglez aussi {{ui:Unités}} sur {{ui:Pouces}}. Vous pouvez alors saisir des longueurs en pieds et pouces partout où une longueur est demandée, et dans les cases de {{ui:Propriétés}} :

| Vous tapez | Cela signifie |
|---|---|
| `12'6"` ou `12'-6"` | 12 pieds 6 pouces (150) |
| `12'6-1/2"` | 12 pieds 6½ pouces. Utilisez un trait d'union avant la fraction : {{key:Space}} équivaut à {{key:Enter}} à la ligne de commande. |
| `12'` | 12 pieds |
| `6"` ou `6` | 6 pouces : un nombre seul désigne des pouces |
| `1/2`, `6-1/2` | les fractions fonctionnent dans tous les formats |

Les points acceptent les mêmes longueurs : `@12'6",0` ou `@10'<90`. Les angles restent en degrés.

Le format apparaît dans l'historique ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}} : aires en pouces carrés et pieds carrés), dans {{ui:Propriétés}}, dans les coordonnées de la barre d'état, et dans les **nouvelles cotes**. Les feuilles gardent leurs unités de papier (millimètres ou pouces) en décimales.

:::note
Le format de longueur est enregistré dans les fichiers DWG et DXF, et chaque cote garde le sien : un dessin enregistré se rouvre tel que vous l'aviez laissé.
:::

## Formats de papier

Les feuilles et les tracés de modèle utilisent ces formats, dans l'une ou l'autre orientation :

| Papier | Dimensions | Unité sur la feuille |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimètres |
| ISO A3 | 420 × 297 mm | millimètres |
| ISO A2 | 594 × 420 mm | millimètres |
| ISO A1 | 841 × 594 mm | millimètres |
| ISO A0 | 1189 × 841 mm | millimètres |
| Letter | 11 × 8.5 in | pouces |
| Legal | 14 × 8.5 in | pouces |
| Tabloid / ANSI B | 17 × 11 in | pouces |
| ANSI C | 22 × 17 in | pouces |
| ANSI D | 34 × 22 in | pouces |
| ARCH C | 24 × 18 in | pouces |
| ARCH D | 36 × 24 in | pouces |
| ARCH E | 48 × 36 in | pouces |

Les nouvelles feuilles démarrent en ISO A3 pour les dessins métriques et sans unité, et en Tabloid pour les dessins en pouces ou en pieds. Les tracés de modèle démarrent en ISO A4 ou Letter de la même façon, puis mémorisent votre dernier choix. Les feuilles des fichiers ouverts gardent leur propre format, affiché « Personnalisé » lorsqu'il ne correspond à aucun de ceux-ci.

## Échelles

Une échelle `1:n` signifie qu'une unité sur le papier représente n unités de même nature dans le modèle ; ainsi, 1:100 montre 1 m de bâtiment sous la forme de 10 mm de papier. CadCraft calcule cela à partir des unités du dessin et de l'unité du papier.

**Échelles métriques**, proposées pour tous les dessins : 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Échelles architecturales**, proposées lorsque les unités sont en pouces ou en pieds : 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Échelles d'ingénieur**, proposées lorsque les unités sont en pouces ou en pieds : 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Vos propres échelles.** Tapez `SCALELISTEDIT` (ou `SCALELIST`) pour ajouter une échelle à vous, comme 1:75 ou une échelle de site de 2 unités de papier pour 300 unités de dessin. `Ajouter` demande un nom, puis les unités de papier et les unités de dessin (un nom comme `1:75` propose ses propres nombres ; appuyez sur {{key:Enter}} pour les prendre). `Modifier`, `Supprimer`, `Liste` et `Réinitialiser` agissent sur la même liste ; `Réinitialiser` revient à la liste standard. Vos échelles apparaissent après les échelles standard dans la liste des échelles de fenêtre de présentation de {{ui:Propriétés}} et dans la boîte de dialogue {{ui:Tracer en PDF}} ; une fenêtre de présentation réglée sur l'une d'elles s'affiche avec son nom, et elles sont enregistrées dans le dessin (DWG et DXF 2000) comme liste d'échelles du dessin. Un dessin ouvert depuis un autre programme apporte sa liste ; les échelles qu'il contient et qui correspondent à une échelle standard ne sont pas affichées deux fois.

Lorsqu'une fenêtre de présentation est orientée avec {{ui:Afficher tout le modèle}} ou {{ui:Choisissez une fenêtre sur le modèle…}}, CadCraft choisit la plus grande échelle standard qui tienne. {{ui:Ajuster tout le modèle}} règle à la place une échelle exacte, qui s'affiche comme un simple rapport.

## Tailles sur papier et dans le modèle

Les tailles de texte et de cote s'expriment dans les unités de l'espace où vous dessinez.

| Vous voulez sur le papier | Dessiné sur une feuille | Dessiné dans le modèle au 1:50 (dessin en mm) | Dessiné dans le modèle au 1/4" = 1'-0" (dessin en pouces) |
|---|---|---|---|
| Texte de 2.5 mm | 2.5 | 125 | — |
| Texte de 3/32" | 0.09375 | — | 4.5 |

Pour les cotes, gardez les tailles comme tailles sur papier et réglez l'échelle générale ({{cmd:DIMSCALE}}) à l'échelle de tracé : 50 pour 1:50, 48 pour 1/4" = 1'-0". Voir [Régler les tailles de cote](topic:dimension-settings).

## Annoter selon l'échelle

Dessinez le modèle en grandeur réelle et laissez CadCraft faire les calculs ci-dessus pour vous.

1. Sélectionnez le texte ou les cotes qui doivent garder leur taille sur papier. Dans {{ui:Propriétés}}, cochez {{ui:Annotatif}}. {{ui:Taille sur papier}} affiche alors, par exemple, `2.5 mm à 1:50`.
2. Tapez {{cmd:ANNOSCALE}} puis l'échelle à laquelle le dessin sera imprimé, par exemple `1:100`.

Chaque texte et cote annotatif est redimensionné pour s'imprimer à la même taille à la nouvelle échelle : un texte de 2.5 mm mesure 125 de haut dans un dessin en millimètres à 1:50, et 250 à 1:100. La largeur d'un paragraphe change avec lui ; le texte, les flèches et les espaces d'une cote changent ensemble (son échelle générale). C'est une seule étape d'annulation, et les objets non annotatifs ne sont jamais modifiés.

Le réglage est enregistré dans DWG et DXF : les autres programmes lisent l'indicateur annotatif, et CadCraft conserve aussi l'échelle pour laquelle chaque objet est dimensionné.

Si votre bureau fixe des hauteurs sur papier dans le module Politiques par défaut (Paramètres › Global › Politiques par défaut › Tailles d'annotation sur papier), {{cmd:ANNOSCALE}} règle aussi la hauteur de départ des nouveaux textes à celle du bureau pour les notes à cette échelle. Voir [Politiques par défaut](topic:default-policies).

### Un objet à plusieurs échelles

Une feuille montre souvent le même plan au 1:100, et une partie de celui-ci au 1:50. Donnez aux notes et aux cotes les deux échelles, et chaque fenêtre de présentation les affiche à leur taille sur papier :

1. Sélectionnez les textes et les cotes annotatifs et tapez `OBJECTSCALE`.
2. Choisissez `Ajouter` et tapez l'échelle, par exemple `1:50`. (`Échelle courante` ajoute l'échelle d'annotation du dessin ; `Liste` affiche les échelles conservées par chaque objet ; `Supprimer` en retire une.)

Une fenêtre de présentation dont l'échelle figure dans la liste d'un objet l'affiche à la taille qui imprime sa hauteur sur papier à cette échelle : un texte de 2.5 mm est dessiné haut de 250 dans une fenêtre au 1:100, et haut de 125 dans une fenêtre au 1:50, à l'écran comme dans le tracé. L'objet reste à sa place ; seule sa taille change. Dans une fenêtre à une échelle absente de la liste d'un objet, celui-ci s'affiche à la taille qu'il a, jusqu'à ce que vous tapiez `ANNOALLVISIBLE` et choisissiez `OFF` : il est alors omis à cet endroit. {{cmd:ANNOSCALE}} redimensionne les objets dont la liste comporte la nouvelle échelle, et laisse les autres tels quels.

Les listes sont enregistrées dans DWG et DXF comme données propres à CadCraft. Un autre programme voit chaque objet comme annotatif, à la seule échelle pour laquelle il est dimensionné. Le commutateur ANNOALLVISIBLE n'est pas conservé dans le fichier.

## Épaisseurs de ligne et types de ligne

Un calque, ou un objet, peut avoir une **épaisseur de ligne** (0.05 à 2.11 mm) et un **type de ligne** (tireté, caché, axe, fantôme, pointillé…). Réglez-les dans le panneau de droite : sans rien sélectionner, {{ui:Type de ligne}} et {{ui:Épaisseur de ligne}} sous {{ui:Réglages actuels}} sont ce que reçoivent les nouveaux objets ({{ui:Par calque}} pour suivre leur calque), et les deux lignes sous {{ui:Calque …}} sont celles du calque courant. Avec des objets sélectionnés, ces deux lignes et {{ui:Échelle du type de ligne}} modifient ces objets. Les commandes sont {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) et {{cmd:LTSCALE}} (`LTS`).

Les types de ligne s'affichent à l'écran et dans les tracés. Leurs tirets sont exprimés en unités de dessin : un dessin métrique utilise les tailles ISO (DASHED : tirets de 12.7 mm), un dessin en pouces les tailles en pouces (0.5"). Si les tirets paraissent trop petits ou trop grands, modifiez l'{{ui:Échelle du type de ligne}} (LTSCALE) du dessin : chaque tiret et chaque espace est multiplié par elle ; l'échelle propre à un objet la multiplie à nouveau. Un motif trop fin pour être vu est dessiné comme une ligne pleine.

Les épaisseurs de ligne s'impriment dans les tracés, en mm sur le papier quelle que soit l'échelle. Les lignes à l'épaisseur {{ui:Valeur par défaut}} utilisent la largeur de plume choisie dans la boîte de dialogue {{ui:Tracer en PDF}} (0.13 à 0.70 mm ; 0.25 mm au départ) ; une épaisseur de 0 s'imprime avec le trait le plus fin. À l'écran, chaque ligne fait un pixel de large jusqu'à ce que vous appuyiez sur {{ui:LWT}} dans la barre d'état (ou tapiez {{cmd:LWDISPLAY}}) : une épaisseur supérieure à 0.25 mm s'affiche alors plus large (0.5 mm = 2 pixels) dans le modèle, et à sa vraie largeur sur le papier pour une feuille. Le choix est conservé dans ce navigateur.

## La norme de bureau

Un bureau peut conserver ses hauteurs de texte sur papier, ses calques, les champs du cartouche et ses modèles dans un seul enregistrement : la norme de bureau. CadCraft la lit dans cet ordre : l'enregistrement propre au dessin (réglé avec {{cmd:OFFICESTANDARD}} › `Import`, et conservé dans le fichier), la norme partagée de votre équipe, puis vos Politiques par défaut. Les textes et cotes annotatifs prennent leur hauteur sur papier dans cette norme, à l'échelle d'annotation. Une norme vide ne change rien. {{cmd:OFFICESTANDARD}} › `Layers` ajoute à un dessin les calques du bureau qui lui manquent.

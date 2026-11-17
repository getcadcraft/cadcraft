---
title: Hachure et remplissage de zones
summary: Remplissez une zone avec une couleur pleine ou un motif standard en cliquant à l'intérieur ou en choisissant des formes fermées, réglez l'échelle et l'angle du motif, puis modifiez une hachure après coup.
keywords: hachure, bhatch, remplissage, remplissage plein, motif, ansi31, ansi37, brick, earth, net, lignes de coupe, poché, îlot, contour, échelle, angle
from: 14399174
---

## Ce que vous allez créer

Une coupe de mur remplie du motif ANSI31, une colonne laissée vide dans ce mur, et un remplissage plein dans la colonne.

## Hachurer en cliquant dans une zone

1. Dessinez un rectangle (`REC`, `0,0`, `@2000,1200`) et un cercle à l'intérieur (`C`, `1000,600`, `300`). Cliquez sur {{ui:Étendue}}.
2. Cliquez sur {{ui:Hachure}} dans le groupe {{ui:Dessiner}}, ou saisissez `H` puis appuyez sur {{key:Enter}}. L'historique indique le motif courant, par exemple `Hachure courante : ANSI31, échelle 1, angle 0°`.
3. Saisissez `P` puis appuyez sur {{key:Enter}}, saisissez `ANSI31` puis appuyez sur {{key:Enter}}.
4. Saisissez `SC` puis appuyez sur {{key:Enter}}, saisissez `20` puis appuyez sur {{key:Enter}}. Les tailles de motif sont données sur papier : un dessin tracé à 1:20 demande l'échelle 20.
5. À `Spécifiez un point intérieur`, cliquez dans le rectangle, en dehors du cercle. La hachure apparaît en aperçu.
6. Appuyez sur {{key:Enter}}. Le rectangle est hachuré ; le cercle à l'intérieur reste vide, car c'est un îlot.

Cliquez dans plusieurs zones avant d'appuyer sur {{key:Enter}} pour n'en faire qu'une seule hachure. `U` retire la dernière zone choisie.

## Un remplissage plein

1. Saisissez `H` puis appuyez sur {{key:Enter}}.
2. Saisissez `P`, appuyez sur {{key:Enter}}, saisissez `SOLID` puis appuyez sur {{key:Enter}}.
3. Cliquez dans le cercle, puis appuyez sur {{key:Enter}}.

## Hachurer des formes fermées que vous choisissez

Au lieu de cliquer à l'intérieur, saisissez `S` (Sélectionner des objets) à `Spécifiez un point intérieur`, choisissez des polylignes fermées, des cercles ou des ellipses fermées, puis appuyez sur {{key:Enter}}. Les formes situées à l'intérieur d'autres formes restent vides à tour de rôle (la plus extérieure est hachurée, la suivante reste vide, et ainsi de suite).

## Motifs

Saisissez `?` à la question du motif pour afficher la liste. Les motifs standard sont ANSI31 à ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS et EARTH, ainsi que SOLID. Dans un dessin en pouces (ou avec pieds et pouces comme format de longueur), les tailles en pouces des motifs sont utilisées, comme dans AutoCAD ; sinon, ce sont les tailles en millimètres.

{{ui:Angle}} (`A`) fait pivoter tout le motif : ANSI31 à 90° part dans l'autre sens.

**Fichiers de motifs.** Saisissez `F` (Fichier de motif) à `Spécifiez un point intérieur` et choisissez un fichier `.pat`. Les motifs qu'il contient rejoignent la liste ; s'il y en a plusieurs, il vous est demandé lequel utiliser. Un fichier sans motif que CadCraft peut lire le signale, et tout motif ignoré est compté. Les tailles d'un fichier `.pat` n'ont pas d'unité propre ; elles sont donc lues dans les unités du dessin. Seuls les fichiers écrits au format `.pat` habituel ont été testés ; aucun fichier produit par un autre programme ne l'a été.

## Modifier une hachure

Sélectionnez-la (cliquez sur une de ses lignes). Dans {{ui:Propriétés}} : {{ui:Motif}}, {{ui:Échelle du motif}} et {{ui:Angle du motif}}. Les hachures issues de dessins ouverts affichent leur motif lorsqu'il s'agit d'un motif standard ; les autres s'affichent dans une teinte claire de leur couleur.

## Erreurs courantes

- **« Aucun contour fermé autour de ce point. »** Il existe un trou dans le contour, ou une partie est hors écran : CadCraft ne regarde que ce qui est à l'écran. Fermez le trou (zoomez sur les angles), ou dézoomez.
- **« Le motif est trop dense pour être tracé à cette échelle. »** Les lignes seraient plus rapprochées que ne peut les afficher le dessin. Utilisez une échelle plus grande : essayez l'échelle de tracé (20 pour 1:20).
- **Le motif paraît énorme ou minuscule.** L'échelle exprime des unités de dessin par unité de motif ; voir l'étape 4 ci-dessus.
- **Déplacer le contour ne déplace pas la hachure.** Une hachure n'est pas liée à son contour. Déplacez les deux, ou hachurez de nouveau.

## Une hachure qui reste liée à son contour

Une hachure créée avec `HATCH` retient le contour qui la délimite. Déplacez, tournez ou mettez à l'échelle le contour, et la hachure et son motif suivent. Faites glisser une poignée pour remodeler le contour, et la hachure est recalculée. Déplacez la hachure seule, et son contour suit aussi, comme une forme remplie dans un logiciel de dessin.

Le lien se rompt, et la ligne de commande l'indique, si le contour ne se referme plus ou si vous remodelez la hachure à la main. La hachure reste en place. Saisissez `AS` pendant la hachure pour créer des hachures indépendantes. Copiez une hachure avec son contour : la copie a son propre lien.

`HATCHEDIT` (`HE`) modifie le motif, l'échelle, l'angle et l'origine d'une hachure, et la lie à un contour ou met fin au lien. Le lien est enregistré dans les fichiers DWG et DXF 2000. Un fichier DXF R12 n'a pas d'objet hachure, et les liens créés dans d'autres programmes ne sont pas lus : utilisez `HATCHEDIT` et l'option Lier pour ceux-là.

Une hachure qui n'a plus de contour (le contour a été effacé, ou le fichier est arrivé sans lui) peut en recevoir un : `HATCHGENERATEBOUNDARY` (`HGB`) trace une polyligne fermée autour de chaque boucle de la hachure et, si vous répondez Oui, lie la hachure à elles.

## Un remplissage en dégradé

`GRADIENT` (`GD`) remplit une zone avec un dégradé au lieu d'un motif : mêmes choix que `HATCH`, après qu'il vous demande le type (linéaire, cylindrique, sphérique, hémisphérique, courbe, et chacun de ces types inversé), une couleur avec une teinte ou deux couleurs, l'angle, et centré ou non. Dans `HATCH`, l'option `G` fait la même chose. `HATCHEDIT` `G`, ou {{ui:Propriétés}} sous Dégradé, modifie un dégradé ou transforme n'importe quelle hachure en dégradé.

Un dégradé s'affiche à l'écran et dans les tracés. Enregistrez en DWG 2004 ou version ultérieure, et les autres programmes obtiennent une véritable hachure en dégradé. DXF 2000 et DWG 2000 n'ont pas de dégradé : CadCraft le conserve pour lui-même, et les autres programmes voient un remplissage plein de la première couleur.

## Découper une hachure

`TRIM` découpe une hachure comme tout autre objet. Cliquez sur la hachure du côté de l'arête de coupe que vous voulez supprimer : les arêtes divisent la zone hachurée, et ce morceau est retiré. En mode rapide, chaque objet est une arête de coupe ; choisissez d'abord les arêtes (option `T`) s'il y en a beaucoup. Une hachure découpée n'est plus liée à son contour, car elle ne le remplit plus.

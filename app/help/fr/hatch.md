---
title: Hachures et zones de remplissage
summary: Remplissez une zone d'une couleur pleine ou d'un motif standard en cliquant à l'intérieur ou en choisissant des formes fermées, réglez l'échelle et l'angle du motif, et modifiez une hachure ensuite.
keywords: hachure, bhatch, remplissage, remplissage plein, motif, ansi31, ansi37, brique, terre, grille, lignes de coupe, poché, îlot, contour, échelle, angle
from: e7feb344
---

## Ce que vous allez créer

Une coupe de mur remplie du motif ANSI31, une colonne laissée vide dans cette coupe, et un remplissage plein dans la colonne.

## Hachurer en cliquant à l'intérieur d'une zone

1. Dessinez un rectangle (`REC`, `0,0`, `@2000,1200`) et un cercle à l'intérieur (`C`, `1000,600`, `300`). Cliquez sur {{ui:Étendue}}.
2. Cliquez sur {{ui:Hachure}} dans le groupe {{ui:Dessiner}}, ou tapez `H` et appuyez sur {{key:Enter}}. L'historique indique le motif courant, par exemple `Hachure courante : ANSI31, échelle 1, angle 0°`.
3. Tapez `P` et appuyez sur {{key:Enter}}, tapez `ANSI31` et appuyez sur {{key:Enter}}.
4. Tapez `SC` et appuyez sur {{key:Enter}}, tapez `20` et appuyez sur {{key:Enter}}. Les tailles de motif sont données sur papier : un dessin tracé au 1:20 demande donc l'échelle 20.
5. À `Spécifiez un point interne`, cliquez à l'intérieur du rectangle, à l'extérieur du cercle. La hachure s'affiche en aperçu.
6. Appuyez sur {{key:Enter}}. Le rectangle est haché ; le cercle à l'intérieur reste vide, car c'est un îlot.

Cliquez à l'intérieur de plusieurs zones avant d'appuyer sur {{key:Enter}} pour n'en faire qu'une seule hachure. `U` annule la dernière zone.

## Un remplissage plein

1. Tapez `H` et appuyez sur {{key:Enter}}.
2. Tapez `P`, appuyez sur {{key:Enter}}, tapez `SOLID` et appuyez sur {{key:Enter}}.
3. Cliquez à l'intérieur du cercle, puis appuyez sur {{key:Enter}}.

## Hachurer des formes fermées que vous désignez

Au lieu de cliquer à l'intérieur, tapez `S` (Sélectionner des objets) à `Spécifiez un point interne`, désignez des polylignes fermées, des cercles ou des ellipses fermées, puis appuyez sur {{key:Enter}}. Une forme située à l'intérieur d'une autre reste vide à son tour (la plus extérieure est hachurée, la suivante reste vide, et ainsi de suite).

## Motifs

Tapez `?` à la question du motif pour afficher la liste. Les motifs standard sont ANSI31 à ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS et EARTH, ainsi que SOLID. Dans un dessin en pouces (ou dont le format de longueur est en pieds et pouces), on utilise les tailles en pouces des motifs, comme dans AutoCAD ; sinon, ce sont les tailles en millimètres.

{{ui:Angle}} (`A`) fait pivoter tout le motif : ANSI31 à 90° penche dans l'autre sens.

**Fichiers de motifs.** Tapez `F` (Fichier de motif) à `Spécifiez un point interne` et choisissez un fichier `.pat`. Les motifs qu'il contient rejoignent la liste ; s'il y en a plusieurs, on vous demande lequel utiliser. Un fichier sans motif que CadCraft sait lire le signale, et tout motif ignoré est compté. Les tailles d'un fichier `.pat` n'ont pas d'unité propre : elles sont lues dans les unités du dessin. Seuls les fichiers écrits au format `.pat` habituel ont été essayés ; aucun n'a été produit par un autre programme.

## Modifier une hachure

Sélectionnez-la (cliquez sur l'une de ses lignes). Dans {{ui:Propriétés}} : {{ui:Motif}}, {{ui:Échelle du motif}} et {{ui:Angle du motif}}. Les hachures issues de dessins ouverts affichent leur motif lorsqu'il s'agit d'un motif standard ; les autres s'affichent dans une teinte claire de leur couleur.

## Erreurs courantes

- **« No closed boundary round that point. »** (Aucun contour fermé autour de ce point.) Il y a un trou dans le contour, ou une partie de celui-ci est hors écran : CadCraft ne regarde que ce qui est à l'écran. Fermez le trou (zoomez sur les angles), ou dézoomez.
- **« The pattern is too dense to draw at this scale. »** (Le motif est trop dense pour être dessiné à cette échelle.) Les lignes seraient plus serrées que ce que le dessin peut montrer. Utilisez une échelle plus grande : essayez l'échelle de tracé (20 pour 1:20).
- **Le motif paraît énorme ou minuscule.** L'échelle s'exprime en unités de dessin par unité de motif ; voir l'étape 4 ci-dessus.
- **La hachure ne suit plus son contour.** Une hachure créée avec {{cmd:HATCH}} reste liée aux objets dont elle est issue : déplacez, tournez ou mettez à l'échelle le contour, et la hachure suit ; remodelez-la avec une poignée, et elle est recalculée. Le lien prend fin lorsque le contour ne se referme plus, lorsque vous remodelez la hachure elle-même à la main ou que vous l'ajustez ; la ligne de commande le signale. Rien n'est perdu : hachurez à nouveau la zone pour la relier.

## Une hachure qui reste liée à son contour

Une hachure créée avec `HATCH` garde en mémoire ce qui la délimite. Déplacez, tournez ou mettez à l'échelle la limite, et la hachure et son motif suivent. Faites glisser une poignée pour remodeler la limite, et la hachure est recalculée. Déplacez la hachure seule, et sa limite suit aussi, comme une forme remplie dans un logiciel de dessin.

Le lien prend fin, et la ligne de commande le signale, si la limite ne se referme plus ou si vous remodelez la hachure à la main. La hachure elle-même reste. Tapez `AS` pendant la hachure pour créer des hachures autonomes. Copier une hachure avec sa limite donne une copie qui possède son propre lien.

`HATCHEDIT` (`HE`) modifie le motif, l'échelle, l'angle et l'origine d'une hachure, et la relie à une limite ou met fin à ce lien. Le lien est enregistré dans les fichiers DWG et DXF 2000. Un fichier DXF R12 n'a pas d'objet hachure, et les liens créés dans d'autres programmes ne sont pas lus : utilisez `HATCHEDIT` et Lier pour ceux-là.

Une hachure qui n'a plus de limite (la limite a été effacée, ou le fichier est arrivé sans elle) peut la retrouver : `HATCHGENERATEBOUNDARY` (`HGB`) trace une polyligne fermée autour de chaque boucle de la hachure et, si vous répondez Oui, relie la hachure à ces polylignes.

## Un remplissage en dégradé

`GRADIENT` (`GD`) remplit une zone avec un dégradé au lieu d'un motif : mêmes désignations que `HATCH`, après que la commande demande le type (linéaire, cylindrique, sphérique, hémisphérique, courbe, et chacun de ces types inversé), une couleur avec une teinte ou deux couleurs, l'angle, et centré ou non. Dans `HATCH`, l'option `G` fait la même chose. `HATCHEDIT` `G`, ou {{ui:Propriétés}} sous Dégradé, modifie un dégradé ou transforme n'importe quelle hachure en dégradé.

Un dégradé s'affiche à l'écran et dans les tracés. Enregistré en DWG 2004 ou ultérieur, il devient une vraie hachure en dégradé pour les autres programmes. Les DXF 2000 et DWG 2000 n'ont pas de dégradé : CadCraft le conserve pour lui-même, et les autres programmes voient un remplissage plein de la première couleur.

## Ajuster une hachure

`TRIM` coupe une hachure comme tout autre objet. Cliquez sur la hachure du côté de l'arête de coupe que vous voulez supprimer : les arêtes divisent la zone hachurée, et le morceau désigné est retiré. En mode Rapide, chaque objet est une arête de coupe ; choisissez d'abord les arêtes (option `T`) lorsqu'il y en a beaucoup. Une hachure ajustée n'est plus reliée à sa limite, puisqu'elle ne la remplit plus.

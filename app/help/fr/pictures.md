---
title: Images dans un dessin
summary: Placer une image PNG ou JPEG, la découper selon un rectangle ou un polygone, afficher les images qu'utilise un DWG, et les tracer nettes.
keywords: pastearea, parea, zone copiée, copie de zone, markupcraft, taille réelle, superposition, ole, ole2frame, objet incorporé, coller une image, capture d'écran, ctrl+v, image du presse-papiers, capture, image, imageattach, iat, image, imageclip, découpe, png, jpeg, jpg, logo, photo, matricielle, imagedef, xref, tracé, pdf, résolution
from: 4025ac97
---

## Ce que vous allez créer

Un logo d'entreprise placé dans un cartouche, découpé sur la partie voulue, et un PDF dans lequel il s'imprime à sa propre résolution.

## Placer une image

1. Saisissez {{cmd:IMAGEATTACH}} (ou `IAT`) puis appuyez sur {{key:Enter}}. Choisissez un fichier PNG ou JPEG.
2. `Spécifiez le coin inférieur gauche` : cliquez, ou saisissez un point.
3. `Spécifiez sa largeur` : la largeur en unités de dessin. {{key:Enter}} conserve la largeur proposée : une unité par pixel, ou la largeur que vous avez donnée à ce fichier la dernière fois (l'invite l'indique).
4. `Spécifiez l'angle de rotation` : {{key:Enter}} pour aucun.

L'image est un seul objet : sélectionnez-la par son cadre, puis déplacez, copiez, faites pivoter, mettez à l'échelle ou effacez-la comme n'importe quel bloc.

:::note
Le fichier de l'image reste avec le dessin tant que celui-ci est ouvert. Un DWG enregistré mentionne le nom du fichier, comme le font les autres programmes ; il ne contient pas les pixels. Gardez l'image à côté du dessin.
:::

## Coller une capture d'écran ou une image copiée

1. Copiez l'image (une capture d'écran avec {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=votre outil de capture d'écran}}, ou Copier l'image dans un autre programme ou un navigateur).
2. Pointez l'endroit où elle doit aller sur le dessin, et appuyez sur {{key:Mod+V}}.

Le coin inférieur gauche de l'image se pose au pointeur (ou au milieu de la vue), à 40 % de la largeur de ce que vous voyez ; déplacez-la, mettez-la à l'échelle et découpez-la comme toute image. Son nom est celui du dessin suivi de `-picture-1.png` (puis `-2`, …), et l'historique l'indique.
{{ui:Édition}} › {{ui:Plus}} › {{ui:Coller une image}} fait la même chose depuis le menu (le navigateur peut demander d'abord).

Un DWG ne conserve que le nom du fichier d'une image ; l'enregistrement du dessin enregistre donc aussi l'image dans son propre fichier. Gardez les deux dans le même dossier : le dessin affiche l'image depuis cet emplacement. Dans le navigateur, cela représente un second téléchargement, et l'historique l'indique. Si le presse-papiers ne contient que des objets CadCraft, {{key:Mod+V}} les colle comme auparavant.

## Coller une zone copiée dans MarkupCraft

{{ui:Copier une zone}} dans MarkupCraft copie une partie d'une feuille sous forme d'image qui connaît sa taille. CadCraft la colle à cette taille.

1. Dans MarkupCraft, copiez la zone (un rectangle, un cercle ou une forme libre ; {{ui:Copier en superposition}} si vous voulez voir votre dessin à travers elle).
2. Dans CadCraft, appuyez sur {{key:Mod+V}}, ou saisissez {{cmd:PASTEAREA}} (ou `PAREA`), ou choisissez {{ui:Édition}} › {{ui:Plus}} › {{ui:Coller une zone copiée}}.
3. `Spécifiez le coin inférieur gauche de la zone copiée` : cliquez, ou saisissez un point. Un cadre de la taille de la zone suit le pointeur.

Taille du collage :

- **La feuille avait une échelle de dessin :** à sa taille réelle, dans les unités du dessin (un détail au 1:50 d'un escalier de 2 m fait 2 m de long dans un dessin en mètres, 78.74 dans un dessin en pouces). Rien d'autre n'est demandé.
- **La feuille n'avait pas d'échelle :** CadCraft indique sa taille sur papier et demande une échelle : saisissez `100` pour une feuille au 1:100, appuyez sur {{key:Enter}} pour la taille du papier, ou saisissez `P`, cliquez sur deux points de l'image collée et saisissez la distance réelle qui les sépare (comme le fait {{cmd:SCANSCALE}}). Le coin inférieur gauche reste à l'endroit où vous l'avez placé.

Un dessin sans unités prend les millimètres, comme un fond PDF. Une superposition conserve son papier transparent et commence aussi estompée qu'elle l'était lors de la copie ; l'extérieur d'un cercle ou d'une forme libre est également transparent. La zone collée est une image comme une autre : déplacez-la, faites-la pivoter, mettez-la à l'échelle, découpez-la ou effacez-la ; tout le collage constitue une seule étape d'annulation. Enregistrée en DWG, elle devient une IMAGE avec son estompage et sa transparence.

{{key:Mod+V}} colle la zone lorsque l'image du presse-papiers est celle de la zone, ou lorsque la zone a été copiée après tout ce que vous avez copié dans CadCraft (et dans les 6 dernières heures). Sinon, il colle comme auparavant. {{cmd:PASTEAREA}} colle la dernière zone copiée à tout moment.

## Afficher les images qu'utilise un DWG

Un DWG ne stocke que l'emplacement de ses images ; CadCraft affiche donc chacune sous forme de cadre portant son nom de fichier.

1. Saisissez {{cmd:IMAGE}} (ou `IM`). La ligne de commande liste chaque fichier d'image et indique s'il s'affiche.
2. Choisissez les fichiers (plusieurs à la fois). Un fichier dont le nom contient celui que mentionne le dessin compte aussi, car les exports ajoutent souvent un préfixe de projet.

## Découper une image

1. Saisissez {{cmd:IMAGECLIP}} (ou `ICL`) et sélectionnez l'image.
2. Choisissez `R` puis cliquez sur deux coins, ou `P` puis cliquez sur les points d'un polygone, puis appuyez sur {{key:Enter}}. `D` supprime le découpage.

## Tracer les images

Les images entrent dans le PDF comme des images, à leur propre résolution et sous les lignes. Dans la boîte de dialogue {{ui:Tracer}}, {{ui:Images}} peut les limiter à 600, 300 ou 150 dpi pour réduire la taille du fichier. Un JPEG entre tel quel.

## Ce qui est enregistré où

| Format | Images |
|---|---|
| DWG (toutes versions) | Comme images (IMAGE), avec leur découpage |
| DXF | Comme leurs cadres avec le nom du fichier ; l'enregistrement le signale |

## Objets provenant d'autres programmes (OLE)

Un dessin peut contenir des objets créés par un autre programme, comme une image provenant d'un logiciel de dessin ou une plage de tableur (objets OLE). CadCraft ne les exécute ni ne les modifie, et ne peut pas en insérer de nouveaux. Il fait ceci :

- **Dans un DXF**, un objet OLE s'ouvre comme un cadre. Si l'objet a enregistré une image de lui-même et que cette image est une bitmap, l'image est dessinée à l'intérieur du cadre ; sinon, le cadre porte une étiquette avec le type de l'objet, comme « Feuille de calcul Microsoft Excel (OLE) ». Vous pouvez déplacer, copier et effacer le cadre comme un bloc. {{cmd:SAVEAS}} vers DXF 2000 le réécrit comme objet OLE, avec ses données inchangées.
- **Dans un DWG**, les objets sont conservés et réécrits lors de l'enregistrement en DWG, octet par octet, mais ils ne sont **pas affichés** : un DWG conserve la place d'un objet dans ses propres données, et CadCraft ne la lit pas encore. L'historique indique combien ont été conservés. Saisissez {{cmd:OLELIST}} pour voir de quoi il s'agit (type, taille, et si chacun a enregistré une image) et pour placer une copie d'une image à l'endroit de votre choix : **Placer** demande le numéro, le coin inférieur gauche et la largeur, et dessine un cadre contenant l'image. Cette copie est un cadre que vous pouvez déplacer ou effacer ; l'objet lui-même reste dans le dessin et est toujours réécrit lors de l'enregistrement.
- Un objet venant d'un DXF est enregistré dans un DWG seulement sous forme de cadre et d'étiquette ; l'historique le signale. Enregistrez en DXF 2000 pour conserver l'objet lui-même.
- Les images qui sont des métafichiers (ce qu'enregistrent beaucoup de programmes) ne sont pas dessinées : le cadre et l'étiquette s'affichent à la place.

## Erreurs courantes

| Vous voyez | Pourquoi | Solution |
|---|---|---|
| Un cadre avec un nom de fichier | CadCraft n'a pas le fichier | {{cmd:IMAGE}}, puis choisissez le fichier |
| « Ce n'est pas une image » | L'objet choisi n'est pas une image | Choisissez le cadre de l'image |

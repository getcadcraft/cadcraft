---
title: Copier, coller et dupliquer
summary: Copier des objets dans le presse-papiers de CadCraft, les coller à l'endroit où vous cliquez ou sur place, les dupliquer avec le pointeur, et transférer un travail depuis un autre dessin ou onglet.
keywords: copier, couper, coller, coller sur place, dupliquer, presse-papiers, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, entre dessins, autre onglet, point de base
from: 4b9f29d3
---

## Ce que vous allez apprendre

Comment copier des objets dans le presse-papiers et les coller à l'endroit où vous cliquez, les coller à leurs propres coordonnées, les dupliquer avec le pointeur, les couper, et les transporter dans un autre dessin. Tout cela se trouve aussi dans le groupe {{ui:Édition}} de la barre d'outils : {{ui:Copier}}, {{ui:Coller}} et le menu {{ui:Plus}}.

## Copier et coller à l'endroit où vous cliquez

1. Sélectionnez les objets : cliquez dessus, ou tracez une fenêtre.
2. Appuyez sur {{key:Mod+C}}, ou cliquez sur {{ui:Copier}} dans le groupe {{ui:Édition}}. La ligne de commande indique combien d'objets ont été copiés. Ils restent sélectionnés.
3. Appuyez sur {{key:Mod+V}}, ou cliquez sur {{ui:Coller}}. La copie apparaît sur le curseur, accrochée au coin inférieur gauche des objets copiés.
4. Cliquez à l'endroit où ce coin doit aller, ou tapez un point tel que `2000,500` et appuyez sur {{key:Enter}}. Les accrochages aux objets et Ortho fonctionnent comme d'habitude.

Les objets collés sont sélectionnés, vous pouvez donc les déplacer ou les modifier tout de suite. Un seul {{key:Mod+Z}} retire la totalité du collage.

:::tip
Vous voulez que la copie soit accrochée à un point que vous choisissez, comme le coin d'un mur ? Tapez `COPYBASE`, cliquez sur le point de base, sélectionnez les objets et appuyez sur {{key:Enter}}. Le collage place alors ce point à l'endroit où vous cliquez. Pour accrocher chaque copie par son centre au lieu de son coin inférieur gauche, modifiez {{ui:Point de collage}} dans les [paramètres de CadCraft](topic:settings).
:::

## Coller sur place

Appuyez sur {{key:Mod+Shift+V}}, ou choisissez {{ui:Coller sur place}} dans le menu {{ui:Plus}}. La copie est placée exactement aux coordonnées d'origine, sans clic. Utilisez-la pour transporter des objets dans un autre dessin au même endroit, ou d'une feuille vers une autre feuille.

## Dupliquer et déplacer

1. Sélectionnez les objets.
2. Appuyez sur {{key:Mod+D}}, ou choisissez {{ui:Dupliquer et déplacer}} dans le menu {{ui:Plus}}.
3. Une copie se place sur l'original et se déplace avec le pointeur. Cliquez à l'endroit voulu. Vous pouvez aussi taper un déplacement tel que `@0,-600`, ou une distance dans la direction du curseur.

{{key:Esc}} avant le clic ne laisse rien derrière. Le doublon constitue une seule étape d'annulation et ne touche pas au presse-papiers.

## Couper

Appuyez sur {{key:Mod+X}}, ou choisissez {{ui:Couper}} dans le menu {{ui:Plus}}. Les objets vont dans le presse-papiers et sont effacés du dessin, en une seule étape d'annulation. Recollez-les avec {{key:Mod+V}} ou {{key:Mod+Shift+V}}.

## Entre dessins et onglets

Le presse-papiers conserve sa copie lorsque vous ouvrez un autre dessin, et il est partagé par tous les onglets CadCraft de ce navigateur. Copiez dans un onglet, puis appuyez sur {{key:Mod+V}} dans un autre.

- Les blocs utilisés par les objets les accompagnent. Si le dessin dans lequel vous collez possède déjà un bloc du même nom, sa propre définition est utilisée, comme le fait AutoCAD.
- Les calques utilisés par les objets sont ajoutés, avec la couleur et les réglages qu'ils avaient.
- La copie n'est pas remise à l'échelle lorsque les deux dessins utilisent des unités différentes : CadCraft le signale, et vous pouvez ensuite utiliser {{cmd:SCALE}}.
- Les fenêtres de présentation restent sur leur feuille ; elles sont exclues de la copie.

:::note
Le presse-papiers est celui de CadCraft. Vous ne pouvez pas coller des objets CadCraft dans un autre logiciel, ni coller dans CadCraft ce qui vient d'un autre logiciel : enregistrez plutôt en DWG ou en DXF. Une copie très volumineuse peut être trop grande pour être partagée entre onglets ; la ligne de commande indique alors que seul cet onglet peut la coller.
:::

## Erreurs courantes

- **{{key:Mod+V}} a collé du texte dans la ligne de commande.** Vous aviez tapé quelque chose à cet endroit, donc les touches ont agi sur le texte. Appuyez sur {{key:Esc}} pour le vider, puis appuyez de nouveau sur {{key:Mod+V}}.
- **Rien ne s'est passé, et la barre d'état demande de terminer la commande en cours.** Une autre commande est active. Appuyez d'abord sur {{key:Esc}}.
- **Le collage a atterri loin.** Il est accroché au coin inférieur gauche de ce que vous avez copié, qui peut être un objet éloigné sélectionné par erreur. Utilisez {{ui:Coller sur place}}, ou copiez avec `COPYBASE`.
- **« Rien n'a été collé », avec un motif.** Ce qu'un autre onglet a laissé dans le presse-papiers n'a pas pu être lu (il était endommagé, ou modifié à la main). Copiez de nouveau les objets.

Voir la liste complète des touches dans [Clavier et souris](topic:keyboard), et chaque invite dans la [Référence des commandes](topic:commands#clipboard).

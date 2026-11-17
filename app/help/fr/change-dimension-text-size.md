---
title: Modifier la taille du texte des cotes
summary: Agrandir ou réduire le texte des cotes, pour les nouvelles cotes comme pour celles déjà présentes dans le dessin.
keywords: taille du texte de cote, hauteur du texte, dimtxt, dimscale, texte de cote trop petit, texte de cote trop grand, agrandir le texte de cote, échelle d'annotation
from: 30e40633
---

## Pour les cotes que vous créerez ensuite

1. Appuyez sur {{key:Esc}} pour ne rien sélectionner : le panneau de droite affiche {{ui:Réglages actuels}}.
2. Faites défiler le panneau jusqu'à {{ui:Nouvelles cotes}}. Saisissez dans {{ui:Hauteur du texte}} la hauteur voulue sur papier (par exemple `2.5` pour 2.5 mm, ou `3/32"`), puis appuyez sur {{key:Enter}}.
3. Réglez {{ui:Échelle globale}} sur l'échelle de tracé (`50` pour 1:50, `48` pour 1/4" = 1'-0") : chaque taille est multipliée par cette valeur.

Sur la ligne de commande, {{cmd:DIMTXT}} règle la hauteur et {{cmd:DIMSCALE}} l'échelle globale.

## Pour les cotes déjà présentes dans le dessin

1. Sélectionnez les cotes (une seule, ou plusieurs : choisissez {{ui:Cote}} dans la liste en haut de {{ui:Propriétés}}).
2. Tapez la nouvelle {{ui:Hauteur du texte}} (dans la section {{ui:Texte}}), ou une nouvelle {{ui:Échelle globale}} (dans la section {{ui:Ajustement}}, plus bas), et appuyez sur {{key:Enter}}.

Elles se redessinent immédiatement, en une seule étape d'annulation. Une cote provenant du fichier d'un autre programme est redessinée dans le style de CadCraft dès que vous la modifiez.

:::tip
Un texte juste à l'écran mais minuscule sur la feuille tracée signifie généralement que l'échelle globale vaut 1 : réglez-la sur l'échelle de la feuille.
:::

Voir [Définir les tailles, les décimales et l'échelle des cotes](topic:dimension-settings) pour tous les réglages.

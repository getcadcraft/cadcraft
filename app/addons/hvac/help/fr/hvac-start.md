---
title: CVC : prise en main
summary: Ce que fait le module CVC dans CadCraft, comment l'activer, et comment le gainage est conservé dans un fichier DWG ou DXF ordinaire.
keywords: cvc, module, gainage, gaine, mécanique, tôle, débit d'air, cfm, perte de charge égale, tableau
from: a9ad5492
---

## Ce que c'est

CVC est un module complémentaire de CadCraft, livré avec lui et gratuit. Il dessine le gainage : vous cliquez sur l'axe d'un tronçon de gaine, et le module dessine les deux côtés de la gaine avec ses coudes, transitions et piquages, la dimensionne à partir du débit d'air, la construit comme un solide sur l'onglet {{ui:3D}} et la répertorie dans un tableau des gaines avec sa surface de tôle.

Il reste désactivé tant que vous ne l'activez pas : {{ui:Paramètres}} › {{ui:Général}} › {{ui:Modules complémentaires}} › {{ui:CVC}}. Ses outils se trouvent dans la section {{ui:CVC}} du panneau de droite, sous forme de commandes (ci-dessous), et, si vous le demandez dans {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:CVC}}, sous forme de groupe à la fin de la barre d'outils.

Les tailles suivent les unités du dessin : un dessin en in ou en ft obtient des tailles en in, un débit en cfm et une perte de charge en in. w.g. par 100 ft ; tout autre dessin obtient des millimètres, des litres par seconde et des Pa/m.

## Votre premier tronçon de gaine

1. Saisissez {{cmd:DUCT}}. Saisissez {{ui:Taille (Z)}} puis une taille, par exemple `24x12` (largeur × hauteur) — ou {{ui:Débit d'air (A)}} puis le débit, et le module choisit la taille.
2. Cliquez sur les points du tronçon. Chaque angle reçoit automatiquement un coude. Appuyez sur Entrée pour terminer.
3. Pour créer une dérivation, commencez le tronçon suivant à l'intérieur du premier : le clic se place sur son axe, et la dérivation reçoit un té ou un piquage à cet endroit.
4. Saisissez {{cmd:DUCTSCHED}} et cliquez à l'endroit où doit se placer le tableau.

Voir [Dessiner les tronçons de gaines](topic:hvac-ducts) pour tout ce qu'un tronçon peut faire.

## Fichiers ouvrables partout

Un tronçon de gaine est enregistré comme une référence de bloc avec son dessin à l'intérieur, et ses données sont conservées avec lui sous le nom d'application `CC_HVAC`. Ainsi, un gainage enregistré en DWG ou DXF s'ouvre dans n'importe quel logiciel de CAO comme gaine dessinée, et s'ouvre dans CadCraft sans le module sans rien perdre. Ses solides sont des groupes 3D ordinaires sur l'onglet {{ui:3D}}. Avec le module CVC activé, les tronçons redeviennent des tronçons de gaine.

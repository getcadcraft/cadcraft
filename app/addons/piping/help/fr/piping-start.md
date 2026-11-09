---
title: Tuyauterie : premiers pas
summary: Ce que fait le module Tuyauterie dans CadCraft, comment l'activer, et comment les canalisations sont conservées dans un fichier DWG ou DXF ordinaire.
keywords: tuyauterie, tuyau, module, plomberie, mécanique, acier, cuivre, pvc, pex, vanne, p&id, nomenclature, évacuation
from: 1048242c
---

## Ce que c'est

La tuyauterie est un module de CadCraft, livré avec lui et gratuit. Vous cliquez sur l'axe d'un tronçon de tuyau, et il dessine le tuyau à sa taille réelle — acier, cuivre, PVC ou PEX, par diamètre nominal et schedule ou type selon les normes publiques — avec ses coudes, réductions et tés, les vannes que vous placez dessus, une pente pour les évacuations, un solide sur l'onglet {{ui:3D}} et une ligne dans le tableau des tuyaux et raccords. Un jeu de symboles de type P&ID l'accompagne.

Il est désactivé tant que vous ne l'activez pas : {{ui:Paramètres}} › {{ui:Général}} › {{ui:Modules complémentaires}} › {{ui:Tuyauterie}}. Ses outils se trouvent dans la section {{ui:Tuyauterie}} du panneau de droite, sous forme de commandes (ci-dessous), et, si vous le demandez dans {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Tuyauterie}}, sous forme de groupe à la fin de la barre d'outils.

Un dessin en pouces ou en pieds désigne les tailles par NPS (`2"`) et mesure en pieds ; tout autre dessin désigne l'acier et le PVC par DN (`DN50`), le cuivre et le PEX par leur diamètre nominal et leur diamètre extérieur en millimètres, et mesure en mètres.

## Votre premier tronçon de tuyau

1. Tapez {{cmd:PIPE}}. Tapez {{ui:M}} pour le matériau, {{ui:Z}} puis une taille (`2`, `1-1/2`, `DN50`).
2. Cliquez sur les points du tronçon. Chaque angle reçoit un coude. Appuyez sur Entrée pour terminer.
3. Pour créer un piquage, commencez le tronçon suivant sur le premier : le clic se place sur son axe et un té s'y crée.
4. Tapez {{cmd:VALVE}} et cliquez sur un tronçon pour y placer une vanne.
5. Tapez {{cmd:PIPESCHED}} et cliquez à l'endroit où le tableau doit aller.

## Fichiers ouverts partout

Un tronçon de tuyau est enregistré comme une référence de bloc avec son dessin à l'intérieur, et ses données sont conservées avec lui sous le nom d'application `CC_PIPING` ; c'est aussi le cas d'un symbole. Un tracé de tuyauterie enregistré en DWG ou DXF s'ouvre dans n'importe quel logiciel de CAO tel qu'il a été dessiné, et dans CadCraft sans le module, sans rien perdre. Ses solides sont des groupes 3D ordinaires sur l'onglet {{ui:3D}}.

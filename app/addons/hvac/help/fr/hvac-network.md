---
title: CVC : pression dans tout le réseau de gaines
summary: DUCTNET suit les gaines dessinées depuis le ventilateur, calcule la perte de pression jusqu'à chaque extrémité libre, le chemin critique, le registre nécessaire à chaque autre extrémité et la pression du ventilateur.
keywords: réseau, pression, chemin critique, pression du ventilateur, registre, équilibrage, perte de charge singulière, DUCTNET, DNET, pression statique, système
from: b6f568fe
---

{{cmd:DUCTSIZE}} dimensionne un seul tronçon. {{cmd:DUCTNET}} (`DNET`) examine tout le réseau dessiné.

1. Donnez à chaque section son débit d'air ({{ui:Débit d'air}} de la gaine, en cfm ou en L/s). L'extrémité libre d'un tronçon reprend le débit de la section à cette extrémité.
2. Saisissez {{cmd:DUCTNET}} puis cliquez sur l'extrémité du tronçon où se raccorde le ventilateur ou le groupe de traitement d'air. Les extrémités qui touchent un autre tronçon sont reliées ; les dérivations sont détectées là où un tronçon se termine sur un autre.
3. Il affiche chaque extrémité libre avec son débit et la perte de pression subie depuis le ventilateur, le **chemin critique** (l'extrémité qui perd le plus), le **registre** nécessaire à chaque autre extrémité pour l'équilibrer, et la **pression du ventilateur** : le chemin critique plus la pression des batteries et des filtres que vous saisissez avec l'option {{ui:Pression de l'équipement}} (données des fabricants).

Les pertes par frottement utilisent la même formule de Colebrook que le dimensionnement. Les accessoires (coudes, changements de taille, piquages) utilisent une courte liste de coefficients par défaut arrondis : ce sont des valeurs par défaut signalées, et non une base de données d'accessoires, et l'effet de cheminée est ignoré. Vérifiez le résultat avec votre ingénieur avant de vous y fier.

Les sections trop petites pour leur débit, trop rapides ou trop aplaties sont listées par tronçon. Les boucles sont ignorées (le calcul suit une arborescence) et le module le signale. {{ui:Méthode}} fait basculer la vérification de taille entre perte de charge linéaire égale et limite de vitesse. {{ui:Exporter}} › Pression du réseau de gaines écrit toutes les sections en CSV.

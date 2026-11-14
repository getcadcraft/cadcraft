---
title: CVC : gaines dans TakeoffCraft
summary: Envoyez le tableau des gaines à TakeoffCraft sous forme de postes — un PDF du plan avec le métré intégré, ou les ouvrages sous forme de lot pour votre bibliothèque de prix.
keywords: takeoffcraft, métré, chiffrage, quantités, postes, lot, bibliothèque de prix, tôle, pdf
from: 7289df5d
---

## Un PDF avec le métré intégré

{{cmd:EXPORT}} › {{ui:Gaines pour TakeoffCraft (PDF avec le métré intégré)}} trace le plan sur une seule feuille (ARCH D ou ISO A1, à la plus grande échelle normalisée qui convient) et place un métré TakeoffCraft dans le PDF. Ouvrez le PDF dans TakeoffCraft : il propose le métré :

- un **poste linéaire** par forme, taille et matériau de gaine, avec un repère le long de chaque tronçon droit ;
- un **poste de comptage** par accessoire et par taille, avec un repère à chaque emplacement ;
- l'ouvrage de chaque poste comporte sa **tôle** : le périmètre de la gaine × L, ou la surface de l'accessoire × N.

TakeoffCraft mesure les repères à l'échelle de la feuille : ses longueurs sont donc celles du tableau, et vous voyez sur la feuille à quoi correspond chacune. L'échelle est définie et vérifiée d'après le plus long tronçon de gaine. Les postes n'ont pas de prix : le prix unitaire est à définir par vous.

## Les ouvrages sous forme de lot

{{cmd:EXPORT}} › {{ui:Ensembles de gaines pour TakeoffCraft (lot)}} écrit les mêmes postes sans quantités, sous forme de lot TakeoffCraft (un fichier `.json`). Dans TakeoffCraft, ouvrez {{ui:Bibliothèque}} › {{ui:Lots}} › {{ui:Ouvrir un fichier de lot}} pour les ajouter à votre bibliothèque de prix. Chaque poste indique la quantité qu'il avait dans le dessin.

---
title: Tuyauterie : nomenclature des tuyaux et raccords
summary: Tuyaux par matériau et taille avec leur longueur et leur poids d'acier, chaque raccord et vanne, et les altitudes de chaque tronçon — dans le dessin, en CSV ou dans TakeoffCraft.
keywords: nomenclature, tableau des tuyauteries, raccords, vannes, longueur, poids, csv, takeoffcraft, métré, lot, quantités
from: c852343a
---

## Un tableau dans le dessin

Tapez {{cmd:PIPESCHED}} ; la ligne de commande donne les totaux et les évacuations trop plates ; cliquez à l'endroit où le tableau doit se placer. Il liste les tuyaux par matériau, classe et taille avec leur longueur (et leur poids, pour l'acier), puis chaque raccord et chaque vanne par nature et taille avec leur nombre, et un total. Il se met à jour lorsque les tronçons changent, dans la même étape d'annulation.

La longueur des tuyaux se mesure d'axe en axe à travers les raccords, le long de la pente. Le poids de l'acier est le poids à extrémités lisses de l'ASME B36.10M : 10.69 × (D − t) × t livres par pied (0.0246615 × (D − t) × t kilogrammes par mètre), donc 20 ft de 2 in Schedule 40 pèsent 73.1 lb.

## Un fichier CSV

{{cmd:EXPORT}} › {{ui:Tableau des tuyauteries (CSV)}} écrit les tuyaux (matériau, taille, longueur, poids), les raccords et vannes (nombre), et chaque tronçon (repère, système, matériau, longueur, son altitude aux deux extrémités et sa pente).

## Dans TakeoffCraft

- {{cmd:EXPORT}} › {{ui:Tuyauteries pour TakeoffCraft (PDF avec le métré intégré)}} trace le plan sur une seule feuille à une échelle standard et place le métré dans le PDF. Ouvrez-le dans TakeoffCraft : un poste linéaire par taille de tuyau, avec un repère le long de chaque portion d'axe (les tronçons en pente se mesurent le long de leur pente) ; un poste de comptage par raccord et par vanne, avec un repère à son emplacement, chacun avec son numéro CSI MasterFormat selon le système ; l'ouvrage du tuyau en acier porte son poids. Aucun prix unitaire : ils vous appartiennent.
- {{cmd:EXPORT}} › {{ui:Ensembles de tuyauteries pour TakeoffCraft (lot)}} écrit les mêmes postes sans quantités, sous forme de lot pour {{ui:Bibliothèque}} › {{ui:Lots}} › {{ui:Ouvrir un fichier de lot}}.

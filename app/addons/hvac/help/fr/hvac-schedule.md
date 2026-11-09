---
title: CVC : le tableau des gaines
summary: Gaine droite par taille et matériau, chaque accessoire et la surface de tôle de chacun, sous forme de tableau dans le dessin ou de fichier CSV.
keywords: tableau, tableau des gaines, tôle, surface, pieds carrés, accessoires, csv, quantités, longueur
from: a5764fca
---

## Un tableau dans le dessin

Saisissez {{cmd:DUCTSCHED}}. La ligne de commande donne les totaux ; cliquez à l'endroit où doit se placer le tableau (son coin supérieur gauche). Le tableau répertorie :

- la **gaine droite** par forme, taille et matériau, avec sa longueur et sa surface de tôle ;
- les **accessoires** — coudes, transitions et réductions, tés, piquages et dérivations — par type et taille, avec leur nombre et leur tôle ;
- un total.

Le tableau se met à jour de lui-même : chaque modification d'un tronçon le change dans la même étape ({{cmd:UNDO}} annule les deux). Sa hauteur de texte se règle dans {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:CVC}}.

## Calcul de la surface de tôle

- Gaine droite : son périmètre × sa longueur. Une gaine de 24 × 12 in longue de 10 ft a 6 ft × 10 ft = 60 ft².
- Coudes : le périmètre × la longueur sur axe. Pour un coude à rayon, c'est exact : les deux joues, le talon et la gorge correspondent exactement à ce total. Un coude de 90° de 24 × 12 in avec un rayon de 24 in a 18.85 ft².
- Transitions rectangulaires : leurs quatre faces planes, chacune calculée exactement.
- Transitions rondes et de forme mixte : le périmètre moyen × la longueur de pente (exact pour une réduction ronde centrée aux deux extrémités, proche pour les autres).
- Piquage ou té d'une dérivation : sa collerette, soit le périmètre de la dérivation × 2 in (50 mm).

Les joints, recouvrements et chutes ne sont pas inclus : ajoutez-les dans TakeoffCraft comme chute, ou selon la règle de votre atelier.

## Un fichier CSV

{{cmd:EXPORT}} › {{ui:Tableau des gaines (CSV)}} écrit trois tableaux : la gaine droite (forme, taille, matériau, longueur, périmètre, surface), les accessoires (nombre, surface unitaire, surface) et chaque section (repère, système, taille, longueur, débit d'air, vitesse, perte de charge linéaire).

Pour chiffrer à partir du tableau, voir [Gaines dans TakeoffCraft](topic:hvac-takeoff).

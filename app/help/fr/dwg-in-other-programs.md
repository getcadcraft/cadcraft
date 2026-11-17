---
title: Ouvrir un DWG CadCraft dans d'autres programmes
summary: Dans quels programmes un DWG enregistré par CadCraft a été ouvert, ce qui est vérifié, et quoi faire lorsque l'un d'eux signale un problème.
keywords: dwg, ouvrir dans d'autres programmes, compatibilité, s'ouvre-t-il, audit, trueview, autres programmes CAO, dxf, vérifier, enregistrer en DWG
from: 0f8c15c4
---

## Ce que CadCraft écrit

{{ui:Enregistrer}} écrit un vrai DWG, dans la version avec laquelle le dessin a été ouvert ou celle que vous choisissez dans {{ui:Enregistrer sous}} : AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018. Rien n'est converti à votre insu : l'historique liste tout ce qui a changé au passage (par exemple une couleur vraie écrite comme la couleur standard la plus proche dans un DWG 2000).

## Où il a été ouvert

Chaque DWG écrit par CadCraft est ouvert, dans chaque version, par trois programmes qui ne sont pas CadCraft : l'ODA File Converter (qui vérifie le fichier sans rien y réparer), LibreDWG et libdxfrw. Leur lecture est comparée à celle de CadCraft : objets, calques, blocs et attributs, cotes, hachures, feuilles et leurs fenêtres de présentation.

L'ouverture des fichiers DWG de CadCraft dans AutoCAD et dans le DWG TrueView gratuit est en cours de vérification sous Windows, type d'objet par type d'objet (AUDIT, calques, feuilles, cotes, hachures, attributs, blocs dynamiques, références découpées, images). Les résultats seront listés ici une fois disponibles.

## Quand un autre programme signale un problème

1. Enregistrez de nouveau en DXF ({{ui:Enregistrer sous}} › {{ui:DXF 2000}}) et ouvrez ce fichier : la plupart des programmes lisent le DXF.
2. Enregistrez le DWG dans une version plus ancienne (2013 ou 2010).
3. Dites-nous sur Discord quel programme et quelle version vous utilisez, et ce qu'il a affiché ; le fichier aide le plus.

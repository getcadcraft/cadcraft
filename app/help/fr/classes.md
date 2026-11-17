---
title: Organiser un dessin avec des classes
summary: Les classes trient les objets d'une seconde façon, à travers les calques (Éclairage-Luminaires-Spot) : les afficher ou les masquer, leur donner une couleur, un type de ligne, une épaisseur, un remplissage et un style de texte que les objets peuvent prendre « par classe », et choisir la classe dans laquelle les nouveaux objets sont créés.
keywords: classe, classes, CLASSES, CLS, CLASS, par classe, ByClass, classe active, utiliser à la création, Aucune, calque de conception, échelle de calque, altitude, Vectorworks
from: 672de9cb
---

Les calques indiquent *où* un objet se trouve dans le dessin ; les classes indiquent *ce qu'il est*. Un mur sur le calque `Niveau 1` peut appartenir à la classe `Murs-Extérieurs`, un spot placé sur le calque `Plafond` à la classe `Éclairage-Luminaires-Spot`. Vous pouvez masquer tous les luminaires de tous les calques d'un seul coup, ou tracer tous les murs extérieurs plus épais, sans rien déplacer d'un calque à l'autre.

Chaque objet commence dans la classe **Aucune**. Un dessin sans classes propres fonctionne exactement comme avant.

## Ouvrir le panneau Classes

Tapez `CLASSES` (ou `CLS`) et appuyez sur {{key:Enter}}, ou choisissez {{ui:Classes…}} dans le menu {{ui:Plus}} du groupe {{ui:Vue}}. Le panneau s'ouvre au-dessus du dessin et reste ouvert pendant que vous dessinez.

- **Ajouter une classe :** tapez son nom dans la zone en haut et appuyez sur {{key:Enter}}. Un `-` crée un niveau : `Éclairage-Luminaires-Spot` se place sous `Éclairage-Luminaires`, lui-même sous `Éclairage` ; les niveaux manquants sont ajoutés pour vous.
- **Afficher ou masquer :** l'œil à côté d'une classe. Masquer une classe masque toutes les classes qui se trouvent sous elle, à l'écran comme sur papier.
- **Classe active :** le bouton rond. Les nouveaux objets que vous dessinez vont dans la classe active.
- **Choisir une classe :** cliquez sur son nom. Les boutons et réglages situés sous la liste agissent alors sur elle.

Le nombre en fin de chaque ligne indique combien d'objets contient la classe (dans l'espace objet, sur les feuilles et dans les définitions de bloc).

## Placer des objets dans une classe

Sélectionnez les objets, choisissez une classe dans le panneau et cliquez sur {{ui:Définir la classe}}. Cochez d'abord {{ui:Par classe}} pour qu'ils prennent leur couleur, leur type de ligne, leur épaisseur, leur remplissage et leur style de texte depuis la classe. Vous pouvez aussi :

- tapez `CLASS` avec des objets sélectionnés et saisissez un nom de classe (un nouveau nom crée la classe) ;
- tapez `CLASS` sans rien sélectionner pour définir la classe active ; `?` affiche les classes avec leur nombre d'objets ;
- utilisez la section {{ui:Classe}} du panneau Propriétés : la classe, et un interrupteur {{ui:… par classe}} pour la couleur, le type de ligne et l'épaisseur (remplissage pour les hachures, style de texte pour le texte) ;
- sélectionnez par classe avec `QSELECT` : choisissez la propriété {{ui:Classe}}.

{{ui:Sélectionner ses objets}} sélectionne tous les objets de la classe choisie sur la feuille ouverte (ou dans l'espace objet).

## Comment un objet s'affiche : objet, classe, calque

La couleur, le type de ligne, l'épaisseur, le remplissage et le style de texte d'un objet peuvent être **par classe**, comme ils peuvent l'être par calque. CadCraft cherche dans cet ordre :

1. La valeur propre de l'objet, sauf si cette valeur est « par classe ».
2. La valeur de la classe, lorsque l'objet la prend par classe et que la classe en possède une.
3. La valeur du calque.

Une classe dont la couleur (ou le type de ligne…) est {{ui:Non défini}} transmet l'objet à son calque. Choisissez une classe et réglez sa {{ui:Couleur}}, son {{ui:Type de ligne}}, son {{ui:Épaisseur de ligne}}, son {{ui:Remplissage (hachures)}} et son {{ui:Style de texte}} sous les boutons. Cochez {{ui:Utiliser à la création}} pour que les nouveaux objets dessinés dans cette classe prennent tous ces réglages par classe.

Chaque modification dans le panneau constitue une seule étape d'annulation.

## Renommer et supprimer

{{ui:Renommer}} modifie le nom sur place : appuyez sur {{key:Enter}} pour le garder, sur {{key:Esc}} pour l'abandonner. Les classes situées dessous suivent (`Éclairage-Spot` devient `Lumière-Spot` lorsque `Éclairage` devient `Lumière`), ainsi que leurs objets et les dérogations de fenêtre de présentation.

{{ui:Supprimer}} retire la classe et toutes les classes situées sous elle. Leurs objets passent dans **Aucune**. Un seul {{ui:Annuler}} remet tout en place. **Aucune** ne peut être ni renommée ni supprimée.

## Calques de conception

Sous {{ui:Calques de conception}}, chaque calque peut porter une échelle (`1:50`) et une altitude. Un calque de conception est un calque ordinaire : l'espace objet et les feuilles fonctionnent comme avant, et l'échelle et l'altitude sont conservées avec le dessin pour les outils qui les utiliseront.

## Dans les fichiers DWG et DXF

Les classes sont conservées dans toutes les versions DWG que CadCraft enregistre, et dans le DXF (R12 et 2000). La classe de chaque objet est sa propre donnée étendue (application `CADCRAFT_CLASS`), ainsi AutoCAD et les autres programmes la conservent avec l'objet. La liste des classes, leurs couleurs et leur visibilité sont conservées dans un bloc inutilisé nommé `CADCRAFT_CLASSES` ; si un autre programme purge ce bloc, CadCraft retrouve tout de même la classe de chaque objet, et les classes reviennent avec leurs réglages par défaut.

Les autres programmes ne connaissent pas les classes : ils dessinent chaque objet avec ses propres valeurs ou celles de son calque.

Voir aussi [Dérogations de classe dans une fenêtre de présentation](topic:viewport-overrides) et [Organiser un dessin avec des calques](topic:layers).

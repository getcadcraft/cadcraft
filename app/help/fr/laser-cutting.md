---
title: Envoyer un dessin vers un laser
summary: Ouvrir le panneau Laser, choisir ce que fait chaque calque (découper, marquer, graver, remplir, image), prévisualiser les déplacements de la tête, enregistrer le G-code en mode laser GRBL, ou l'envoyer depuis le navigateur après avoir encadré le travail.
keywords: laser, découpe laser, gravure laser, GRBL, G-code, gcode, graver, remplir, tramage, gravure d'image, marquer, découper, Web Serial, encadrer le travail, puissance, vitesse, passes, LASER, LASERCUT, CNC
from: 72b56db0
---

Le panneau {{ui:Laser}} transforme les calques d'un dessin en programme pour un laser qui fonctionne avec GRBL (la plupart des contrôleurs de diodes et CO2 d'amateur et de petit atelier). Tapez `LASER` (ou `LASERCUT`) et appuyez sur {{key:Enter}}, ou choisissez {{ui:Laser…}} dans le menu {{ui:Plus}} du groupe {{ui:Vue}}. Dans les styles de ruban, il se trouve dans le menu {{ui:Fichier}} et à côté de {{ui:Tracer}}. Le panneau s'ouvre sur le dessin et reste ouvert pendant que vous dessinez : l'aperçu suit chaque modification.

:::warning
Testez chaque réglage sur une chute d'abord, portez des lunettes de protection adaptées à votre laser, gardez le capot fermé lorsqu'il y en a un, et ne laissez jamais un laser en marche sans surveillance. Les valeurs de départ d'un calque sont des valeurs indicatives, et non des recommandations pour un matériau donné.
:::

## Ce qui est envoyé

Le panneau lit le modèle (et non les feuilles), sur les calques activés et dégelés :

- Lignes, arcs, cercles, polylignes (les segments d'arc restent des arcs), ellipses et splines. Une forme qui se termine là où elle commence compte comme fermée.
- Les blocs sont décomposés : un objet du calque 0 à l'intérieur d'un bloc suit le calque de la référence de bloc.
- Une hachure envoie son contour, donc un logo haché sur un calque **Remplir** est rempli.
- Une image (`IMAGEATTACH`) est gravée sur un calque réglé sur **Graver une image**, lorsqu'elle est d'équerre (ni tournée ni inclinée) et que son fichier est ouvert dans CadCraft.
- Le texte, les cotes, les lignes de repère, les points et les lignes de construction ne sont pas envoyés ; le panneau indique combien il en a laissé de côté. Pour graver du texte, dessinez les lettres sous forme de formes ou hachez-les.

Les dimensions sont envoyées en millimètres à partir des unités du dessin (`UNITS`) : un dessin en pouces est multiplié par 25.4. Un dessin sans unités définies est envoyé à raison d'une unité pour un millimètre. Cochez {{ui:Seulement les objets sélectionnés}} pour n'envoyer qu'une partie du dessin.

## Choisir ce que fait chaque calque

Chaque calque contenant quelque chose est une ligne. {{ui:Action}} le règle sur **Découper**, **Marquer**, **Graver les traits**, **Remplir les formes**, **Graver une image** ou **Non envoyé**, avec une {{ui:Puissance %}}, une {{ui:Vitesse mm/min}} et un nombre de {{ui:Passes}}. Chaque modification correspond à une seule étape d'annulation et est enregistrée dans le dessin : les DWG (chaque version que CadCraft enregistre) et les DXF conservent les réglages, de sorte que le dessin s'ouvre avec eux la fois suivante. Les autres programmes ouvrent le fichier comme avant ; ils voient un bloc inutilisé nommé CADCRAFT_LASER (le purger là-bas supprime les réglages).

- **Remplir** grave l'intérieur des formes fermées en lignes espacées de {{ui:Interligne}}, selon un {{ui:Angle}}, dans les deux sens ou dans un seul, avec un dépassement pour que la tête soit à vitesse lorsque le laser s'allume ; le quadrillage ajoute une deuxième passe à 90°. Une forme avec un trou reste ouverte au niveau du trou.
- **Graver une image** transforme une image en points (Floyd–Steinberg, Atkinson, tramage ordonné, ou simple noir et blanc à un seuil) ou, avec *Niveaux de gris*, en puissance variable.
- Ordre : images et remplissages d'abord, puis gravure de traits, puis marquages, puis découpes, afin qu'une pièce découpée ne bouge pas pendant qu'elle est gravée. Dans un même calque, les trajets se font **de l'intérieur vers l'extérieur** (un trou avant la plaque qui le contient), le plus proche ensuite.

## Aperçu, puis enregistrement

L'aperçu dessine ce que fait la tête : les traits en cours de gravure en couleur, les déplacements rapides en gris, et une boîte verte autour de tout ce qui brûle. En dessous figurent la taille, la longueur de gravure et une estimation de durée (sans accélération ; une vraie machine prend plus de temps). {{ui:Enregistrer le G-code…}} écrit le G-code en mode laser GRBL : `$32=1`, `M4` (ou `M3`) avec des valeurs S, des déplacements `G0` et `G1`, `M5` à la fin. X0 Y0 est le coin inférieur gauche du travail, sauf si vous choisissez l'origine du dessin : réglez le zéro de travail de votre machine à cet endroit.

## Envoyer depuis le navigateur

Dans Chrome et Edge, {{ui:Connecter…}} vous demande de choisir le port USB du laser. Rien ne se connecte ni n'envoie tant que vous n'appuyez pas sur un bouton. Appuyez d'abord sur {{ui:Parcourir le cadre du travail}} : la tête trace la boîte du travail, laser **éteint** (ou à la faible puissance que vous réglez pour un pointeur), afin que vous voyiez où il va graver. Seulement alors {{ui:Envoyer le travail}} s'active, et il se désactive de nouveau si vous modifiez quoi que ce soit. {{ui:Pause}} maintient la tête, {{ui:Arrêter}} la maintient aussi, réinitialise le contrôleur (le laser s'éteint) et envoie `M5`. Là où Web Serial manque (Firefox, Safari, et CadCraft Studio, qui n'a pas encore Web Serial), le panneau propose seulement l'enregistrement : enregistrez le G-code et envoyez-le avec le programme propre à votre laser.

## Pas encore disponible

Pas encore disponible : les formats d'autres contrôleurs (Ruida, lasers Marlin, fichiers des fabricants), les onglets et les amorces, le décalage de trait de coupe (kerf), les bibliothèques de matériaux, les axes rotatif et Z, l'alignement par caméra, le texte converti en contours.

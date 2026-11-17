---
title: Définir les limites du dessin
summary: "LIMITS définit un rectangle pour le dessin : la grille le remplit, ZOOM All l'affiche, et avec les limites activées, les points situés en dehors sont refusés. Elles sont enregistrées dans les fichiers DWG et DXF."
keywords: limites, limites du dessin, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grille, hors limites, format de feuille, zone de dessin, zoom all, bordure
from: 9e97b30d
---

**Les limites du dessin** sont un rectangle qui indique la taille prévue du dessin : la zone dans laquelle vous comptez dessiner, comme une feuille de 420 × 297. Un nouveau dessin n'en a aucune : la grille et la zone de dessin sont donc illimitées, comme auparavant.

## Les définir

Tapez {{cmd:LIMITS}} et répondez :

- `Spécifiez le coin inférieur gauche ou [ON/OFF] <0,0>` : un point, ou {{key:Enter}} pour garder le point actuel.
- `Spécifiez le coin supérieur droit <420,297>` : un point, ou {{key:Enter}} pour garder le point actuel. Il doit être au-dessus et à droite du premier.

Ou tapez `ON` ou `OFF` à la première question pour activer ou désactiver le contrôle sans modifier le rectangle. Définir les coins constitue une seule étape d'annulation, et il en va de même pour chaque ON et OFF.

## Leur effet

- **La grille remplit les limites** et s'arrête à leur bord. C'est une image de la zone : activez {{ui:Grille}} pour la voir.
- **ZOOM All** ({{cmd:ZOOM}}, puis {{ui:Tous}}) affiche les limites et le dessin ensemble ; {{ui:Étendue}} n'affiche que le dessin.
- **Avec les limites activées**, un point saisi ou cliqué en dehors est refusé avec `**Hors limites`, et l'invite reste. Cela concerne les commandes qui créent des objets : {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, les commandes de cotation et quelques autres. Les commandes qui se contentent de déplacer, de sélectionner ou de mesurer ne sont pas limitées, pas plus que le collage, le glissement d'une poignée ou un objet créé par une routine LISP : les limites sont un guide de dessin, pas un mur. Avec les limites désactivées, rien n'est refusé.
- Les objets déjà situés en dehors restent en place.

## Dans les fichiers et en LISP

Elles sont enregistrées dans les DWG et DXF sous les noms `$LIMMIN`, `$LIMMAX` et `$LIMCHECK`. Un fichier venant d'un autre programme qui n'a que les limites par défaut de ce programme (0,0 à 12,9 ou 420,297, contrôle désactivé) s'ouvre sans limites, afin que sa grille ne soit pas compressée dans un petit rectangle ; un fichier ayant ses propres limites, ou avec le contrôle activé, les conserve. En LISP, `(getvar "LIMMIN")`, `LIMMAX` et `LIMCHECK` les lisent, et `setvar` les écrit, en une seule étape d'annulation.

Les limites appartiennent à l'espace objet. Une feuille (une présentation) a son propre format de papier.

---
title: Fusionner les modifications de deux personnes sur un même dessin
summary: Laissez git, Fossil ou Mercurial fusionner deux copies d'un DWG ou DXF objet par objet, à l'aide de la clé que CadCraft conserve sur chaque objet.
keywords: fusion, git, fossil, mercurial, gestion de versions, différences, conflit, trois sens, fusion cadcraft, clé, gitattributes, DWG, DXF
from: 71482bf9
---

Deux personnes modifient le même dessin. Si elles ont changé des objets différents, la fusion peut être automatique : rien à refaire à la main.

## Ce qui rend cela possible

CadCraft attribue à chaque objet que vous dessinez une courte **clé** qui ne change jamais et n'est jamais donnée à deux objets. Elle est enregistrée avec l'objet dans le DWG ou DXF (comme donnée supplémentaire que les autres logiciels conservent). La fusion recherche les objets par cette clé, et non par leur position dans le fichier, car chaque logiciel renumérote les positions lorsqu'il enregistre. Désactivez cette option dans {{ui:Paramètres}} › CadCraft › Fichiers compatibles avec la fusion si vous ne fusionnez jamais : les fichiers sont alors environ 10 % plus petits.

Un dessin enregistré avant l'existence des clés peut tout de même être fusionné : ses objets reçoivent une clé à partir de leur place dans le fichier, la même pour tous ceux qui l'ouvrent.

## Mise en place

Git a besoin de deux lignes, une seule fois par dépôt :

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# une seule fois, sur chaque ordinateur
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sans git, lancez-le à la main : `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil et Mercurial acceptent les mêmes trois fichiers dans leur propre réglage d'outil de fusion.

## Les règles

- Un objet modifié d'un seul côté est repris. La même modification des deux côtés n'est reprise qu'une fois.
- La même propriété modifiée de deux façons constitue un **conflit** : votre version est conservée et le rapport liste les deux valeurs. Ouvrez le résultat, examinez cet objet et corrigez-le à la main.
- Un objet ajouté d'un côté est conservé. Un objet supprimé d'un côté et non modifié de l'autre est supprimé. Supprimé d'un côté et modifié de l'autre : supprimé, et signalé.
- Les calques, blocs, styles de texte et de cote, feuilles et vues nommées fusionnent de la même façon. Les contraintes suivent les objets qu'elles désignent.
- Le résultat est écrit dans le même format de fichier et la même version que le vôtre.

Non fusionnés : l'ordre de tracé des objets vous appartient, puis viennent les objets ajoutés par l'autre côté. Les modifications d'une même définition de bloc des deux côtés constituent un conflit, jamais un mélange. Rien n'est téléversé : tout s'exécute sur votre ordinateur.

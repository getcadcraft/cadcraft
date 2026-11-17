---
title: Dessins numérisés et tracé
summary: Importer une feuille numérisée, la mettre à l'échelle et la redresser, la nettoyer, effacer des parties, s'accrocher à ses lignes et la tracer en lignes et arcs.
keywords: numérisation, dessin numérisé, matriciel, raster, tiff, jpeg, png, échelle, aligner, redressement, suppression des taches, seuil, noir et blanc, recadrage, effacer, tracé, vectoriser, accrochage, arcs, hachures, dessins sur papier, anciens dessins, scanattach, scantrace
from: 36227e5b
---

## D'une feuille papier aux objets du dessin

Un dessin numérisé est une image. CadCraft conserve l'image que vous lui avez donnée et ne la modifie jamais : chaque étape de nettoyage produit une nouvelle image, avec une étape d'annulation chacune, et {{cmd:SCANINFO}} liste le fichier d'origine et les étapes effectuées depuis. Rien n'est envoyé nulle part et rien n'est deviné par un modèle entraîné : le nettoyage et le tracé sont un traitement d'image classique, exécuté sur votre ordinateur.

1. **Insérez-la.** {{cmd:SCANATTACH}} lit un PNG, un JPEG, un TIFF (une page, ou toutes les pages d'un fichier multipage) ou une page PDF qui est une image. Elle demande la page, le coin inférieur gauche et la largeur. Pour une page PDF, elle demande aussi le nombre de pixels par pouce auquel dessiner la page.
2. **Mettez-la à l'échelle.** {{cmd:SCANSCALE}} : pointez deux points sur la numérisation, puis saisissez la distance réelle entre eux. La feuille est mise à l'échelle autour du premier point.
3. **Alignez-la.** {{cmd:SCANALIGN}} : pointez deux points sur la numérisation et les deux emplacements auxquels ils appartiennent ; la feuille se déplace et pivote pour s'ajuster, et elle est aussi mise à l'échelle, sauf si vous répondez Non.
4. **Redressez-la.** {{cmd:SCANDESKEW}} mesure l'angle des longues lignes de la feuille, l'affiche avec son degré de fiabilité. Acceptez-le, ou saisissez le vôtre, et la feuille est tournée. Une feuille comportant peu de longues lignes déclenche un avertissement : vérifiez l'angle avant de l'accepter.
5. **Nettoyez-la.** {{cmd:SCANCLEAN}} passe la feuille en noir et blanc (Auto uniformise d'abord le papier ; Adaptatif suit de plus près les variations du papier ; Niveau est un seul nombre pour toute la feuille) et supprime les taches jusqu'à la taille que vous définissez.
6. **Recadrez et effacez.** {{cmd:SCANCROP}} conserve une fenêtre. {{cmd:SCANERASE}} efface un rectangle, un polygone ou un lasso (appuyez et faites glisser) : tampons, notes, cerne de café.

L'image nettoyée est ce que contient un DWG enregistré (une IMAGE et son IMAGEDEF, le fichier de l'image étant placé à côté du dessin, comme pour toute image).

## S'accrocher aux lignes de la numérisation

Avec {{cmd:RASTERSNAP}} activé (par défaut), les accrochages aux objets trouvent aussi les lignes d'une numérisation en noir et blanc : extrémités des lignes, milieux, coins et croisements, affichés avec les repères habituels d'accrochage. La partie de la feuille sous le pointeur est tracée au fur et à mesure de vos mouvements ; zoomez suffisamment pour qu'un pixel représente quelques pixels d'écran. Une ligne plus longue que la partie en cours de tracé est suivie jusqu'à ses extrémités.

## Le tracé

{{cmd:SCANTRACE}} transforme les lignes de la feuille en lignes et arcs sur un nouveau calque (SCAN-TRACE), en une seule étape d'annulation, la numérisation restant sous eux. Vous définissez :

- **Tolérance :** à quelle distance une ligne ou un arc tracé peut se trouver des lignes de la numérisation, en unités de dessin (le rapport donne aussi les pixels). Une tolérance serrée suit chaque ondulation ; une tolérance lâche produit moins de morceaux, plus droits.
- **Fenêtre :** un coin de la feuille, ou la feuille entière.
- **Arcs :** désactivé, ne produit que des lignes.
- **Restes :** ce que le tracé a laissé de côté est dessiné sous forme de rectangles sur un calque que vous pouvez désactiver, ou n'est pas dessiné.

Le tracé trouve le centre de chaque trait, le suit, ajuste des droites et des arcs de cercle, rejoint les tronçons coupés là où une autre ligne les croisait, rend exactement horizontales et verticales les lignes presque horizontales et presque verticales, et ferme les angles. **Le texte et les hachures restent en matriciel :** les morceaux de la taille de lettres sont mis de côté, et les faisceaux de courtes lignes parallèles sont pris pour des hachures et mis de côté.

Lorsqu'il se termine, il indique combien de lignes et d'arcs il a créés, la tolérance, et combien de morceaux il a laissés en matriciel. **C'est ce que les pixels ont donné, à cette tolérance, et ce n'est pas une garantie que le résultat soit juste.** Comparez-le avec la feuille : un tracé peut manquer une ligne pâle, joindre deux lignes très proches, ou dessiner une ligne là où il n'y a qu'une tache. Nettoyez d'abord la numérisation (redressée, en noir et blanc, taches supprimées) et le résultat est bien meilleur.

## Ce qu'il ne lit pas

Les fichiers TIFF stockés en tuiles, les BigTIFF, les TIFF avec compression JPEG ou deflate, le codage Group 3 de télécopie et les couleurs conservées dans des plans séparés sont refusés avec un message ; enregistrez-les à nouveau en bandes avec compression LZW, PackBits, Group 4 ou sans compression. Les fichiers PNG entrelacés sont aussi refusés. Les fichiers de plus de 128 MB ou de plus de 100 millions de pixels sont refusés, et une fenêtre de tracé peut contenir au plus 64 millions de pixels.

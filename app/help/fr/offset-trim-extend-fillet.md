---
title: Décaler, ajuster, prolonger, raccorder et chanfreiner des murs
summary: Transformez des lignes simples en murs doubles avec Décaler, nettoyez les angles avec Raccord, et coupez et allongez des lignes avec Ajuster et Prolonger.
keywords: décaler, ajuster, prolonger, raccord, chanfrein, biseau, couper, breakatpoint, allonger, murs, angle, couper, allonger, parallèle, rayon, nettoyage
from: c6c5cbd0
---

## Ce que vous allez réaliser

Une petite pièce avec des murs de 200 d'épaisseur : la face intérieure est dessinée, la face extérieure est décalée, les angles sont nettoyés, et une ouverture est percée dans un mur.

## Dessiner la face intérieure

1. Saisissez `L` et appuyez sur {{key:Enter}}.
2. Saisissez `0,0` et appuyez sur {{key:Enter}}.
3. Saisissez `@5000,0` et appuyez sur {{key:Enter}}.
4. Saisissez `@0,4000` et appuyez sur {{key:Enter}}.
5. Saisissez `@-5000,0` et appuyez sur {{key:Enter}}.
6. Saisissez `C` et appuyez sur {{key:Enter}}.
7. Cliquez sur {{ui:Étendue}}.

Vous avez quatre lignes distinctes. (Une polyligne fermée se décalerait d'un seul coup ; des lignes séparées montrent comment Raccord nettoie les angles.)

## Décaler la face extérieure

1. Saisissez `O` et appuyez sur {{key:Enter}}. L'invite affiche `Spécifiez la distance de décalage [Passant (T)] <Passant>:`.
2. Saisissez `200` et appuyez sur {{key:Enter}}.
3. À l'invite `Sélectionnez l'objet à décaler`, cliquez sur la ligne du bas.
4. À l'invite `Spécifiez un point du côté à décaler`, cliquez n'importe où sous elle. Une ligne parallèle apparaît à 200 sous elle.
5. Cliquez sur la ligne de droite, puis cliquez à sa droite.
6. Cliquez sur la ligne du haut, puis cliquez au-dessus.
7. Cliquez sur la ligne de gauche, puis cliquez à sa gauche.
8. Appuyez sur {{key:Enter}} pour terminer la commande.

Vous devriez voir quatre lignes extérieures, chacune de la même longueur que sa ligne intérieure, de sorte que les angles extérieurs ne se rejoignent pas.

:::tip
Appuyez sur {{key:Enter}} à l'invite de distance pour réutiliser la dernière distance. Saisissez `T` (Passant) : chaque copie passe alors par le point que vous cliquez, à la distance qui en résulte.
:::

{{cmd:OFFSET}} fonctionne sur les lignes, arcs, cercles et polylignes. Décaler une polyligne fermée décale tout le contour, angles compris.

## Nettoyer les angles extérieurs avec Raccord

{{cmd:FILLET}} joint deux lignes à un angle : il les ajuste ou les prolonge pour qu'elles se rejoignent. Avec un rayon de 0, l'angle est vif.

1. Saisissez `F` et appuyez sur {{key:Enter}}. L'invite affiche `Sélectionnez la première ligne [Rayon]:`.
2. Si le dernier raccord que vous avez fait utilisait un rayon, saisissez `R`, appuyez sur {{key:Enter}}, saisissez `0` et appuyez sur {{key:Enter}}.
3. Cliquez sur la ligne extérieure du bas, près de son extrémité droite.
4. À l'invite `Sélectionnez la deuxième ligne`, cliquez sur la ligne extérieure de droite, près de son extrémité inférieure.

Les deux lignes se rejoignent maintenant en angle vif, et la commande se termine.

5. Appuyez sur {{key:Enter}} pour répéter {{cmd:FILLET}}, et faites le coin suivant.
6. Répétez jusqu'à ce que les quatre angles extérieurs se rejoignent.

Cliquez chaque ligne sur la partie que vous voulez **conserver**. Avec un rayon supérieur à 0, Raccord ajoute à la place un arc entre les lignes.

:::tip
Saisissez `M` à la première invite pour faire les quatre angles d'un coup, ou dessinez la face extérieure comme une polyligne fermée et saisissez `P` : chaque angle est traité en une fois. Maintenez {{key:Shift}} en cliquant sur la deuxième ligne pour un angle vif sans changer le rayon.
:::

## Chanfreiner un angle avec Chanfrein

{{cmd:CHAMFER}} coupe un angle par une ligne droite.

1. Saisissez `CHA` et appuyez sur {{key:Enter}}.
2. Saisissez `D` et appuyez sur {{key:Enter}}. Saisissez `300` et appuyez sur {{key:Enter}} pour la première distance, puis appuyez sur {{key:Enter}} pour utiliser 300 aussi pour la seconde.
3. Cliquez sur la ligne intérieure du haut près de son extrémité gauche, puis sur la ligne intérieure de gauche près de son extrémité haute.

L'angle est coupé de 300 le long de chaque ligne, et une ligne de chanfrein les relie. Saisissez `A` au lieu de `D` pour donner une longueur sur la première ligne, puis un angle.

## Percer une ouverture avec Ajuster

Dessinez d'abord les deux montants de porte à travers le mur du bas, puis ajustez les lignes du mur entre eux.

1. Saisissez `L` et appuyez sur {{key:Enter}}.
2. Saisissez `1000,200` et appuyez sur {{key:Enter}}.
3. Saisissez `@0,-600` et appuyez sur {{key:Enter}}, puis appuyez à nouveau sur {{key:Enter}}.
4. Appuyez sur {{key:Enter}} pour répéter {{cmd:LINE}}.
5. Saisissez `1900,200` et appuyez sur {{key:Enter}}.
6. Saisissez `@0,-600` et appuyez sur {{key:Enter}}, puis appuyez à nouveau sur {{key:Enter}}.

Vous avez maintenant deux lignes courtes qui traversent le mur du bas, à 900 l'une de l'autre.

7. Saisissez `TR` et appuyez sur {{key:Enter}}. L'historique indique `Réglages actuels : mode rapide, arêtes : pas de prolongement`.
8. Cliquez sur la ligne intérieure du bas entre les deux montants. Ce morceau disparaît. (Posez d'abord le pointeur dessus : le morceau qui va disparaître devient gris et pointillé.)
9. Cliquez sur la ligne extérieure du bas entre les deux montants. Ce morceau disparaît aussi.
10. Cliquez sur la partie de chaque montant qui dépasse au-dessus du mur, puis sur celle qui se trouve en dessous.
11. Appuyez sur {{key:Enter}} pour terminer la commande.

Vous devriez voir une ouverture de 900 dans le mur du bas, les montants fermant les extrémités du mur.

En mode rapide (par défaut), Ajuster ne vous demande pas de choisir d'abord les arêtes de coupe : chaque objet visible est une arête de coupe. Désignez le morceau à supprimer, ou faites glisser un tracé à travers plusieurs morceaux pour les ajuster tous d'un coup. Saisissez `U` et appuyez sur {{key:Enter}} pour remettre la dernière désignation ou le dernier glissement sans quitter la commande. La clôture, la capture, les arêtes choisies et {{key:Shift}} pour prolonger sont dans [Ajuster et prolonger](topic:trim-and-extend).

## Prolonger une ligne jusqu'à une autre

{{cmd:EXTEND}} allonge une ligne, un arc ou une extrémité de polyligne jusqu'à ce qu'il rencontre l'objet suivant dans cette direction.

1. Saisissez `L` et appuyez sur {{key:Enter}}.
2. Saisissez `1000,2000` et appuyez sur {{key:Enter}}.
3. Saisissez `@2000,0` et appuyez sur {{key:Enter}}, puis appuyez à nouveau sur {{key:Enter}}. La ligne s'arrête à 2000 du mur de droite.
4. Saisissez `EX` et appuyez sur {{key:Enter}}.
5. Cliquez sur la nouvelle ligne près de son extrémité droite.
6. Appuyez sur {{key:Enter}} pour terminer la commande.

La ligne va maintenant jusqu'à la face intérieure du mur de droite. Chaque objet visible est une limite ; désignez près de l'extrémité qui doit s'allonger. Dans {{cmd:TRIM}}, {{key:Shift}}+clic fait la même chose.

## Briser et allonger

{{cmd:BREAK}} (`BR`, ou {{ui:Modifier}} › {{ui:Plus}} › {{ui:Couper}}) crée un vide sans arête de coupe : cliquez sur l'objet à l'endroit où le vide commence (ce clic est le premier point), puis cliquez où il se termine. Sur un cercle, la partie qui va dans le sens antihoraire du premier point au second disparaît. `F` à la seconde question permet de redonner le premier point, et {{cmd:BREAKATPOINT}} coupe un objet en deux en un point, sans vide.

{{cmd:LENGTHEN}} (`LEN`) modifie une longueur à une extrémité :

1. Saisissez `LEN` et appuyez sur {{key:Enter}}. Cliquez une ligne pour voir sa longueur actuelle ; l'invite redemande.
2. Choisissez le mode : `DE` (Delta : une quantité à ajouter, négative pour retirer ; `A` pour l'angle d'un arc), `P` (Pourcentage : 50 la divise par deux), `T` (Total : la longueur voulue) ou `DY` (Dynamique : faites glisser l'extrémité).
3. Cliquez chaque objet près de l'extrémité qui doit bouger. `U` reprend le dernier ; {{key:Enter}} termine.

Les lignes, arcs et polylignes ouvertes (leur segment d'extrémité) peuvent être allongés.

## Erreurs fréquentes

- **Une ligne entière a disparu.** Rien ne la croisait, donc le mode rapide l'a effacée. Saisissez `U` pour la remettre ; vérifiez que la ligne de coupe la croise vraiment (zoomez) et qu'elle n'est pas sur un calque désactivé.
- **« Aucune limite dans cette direction. »** Prolonger n'a rien trouvé à rencontrer. Désignez plus près de l'extrémité à allonger.
- **« Le rayon est trop grand. »** L'arc dépasserait l'extrémité de l'une des lignes. Utilisez un rayon plus petit.
- **« Seul le premier ou le dernier segment d'une polyligne ouverte peut être raccourci. »** Désignez deux segments de la polyligne qui se suivent, ou saisissez `P` pour arrondir chaque angle.
- **Le décalage est allé du mauvais côté.** Le côté est celui où vous cliquez après avoir désigné l'objet. Annulez avec {{key:Mod+Z}} et cliquez de l'autre côté.
- **« Impossible de décaler aussi loin. »** Le décalage retournerait l'arc, le cercle ou la polyligne à l'envers. Utilisez une distance plus petite.

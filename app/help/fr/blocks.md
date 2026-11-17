---
title: Créer et insérer des blocs
summary: Transformer une porte dessinée en bloc, la placer de nouveau à d'autres positions, échelles et angles, et nettoyer les blocs inutilisés.
keywords: bloc, bmake, insérer, ddinsert, symbole, purge, décomposer, redéfinir, point de base, référence, compter, bcount, nomenclature, csv, attributs, extraction de données
from: 125a129d
---

## Ce que vous allez créer

Un symbole de porte transformé en bloc nommé `DOOR-900`, puis placé trois fois : tel quel, pivoté de 90 degrés et en symétrie.

Un bloc est un groupe d'objets nommé. Vous le dessinez une fois ; chaque endroit où vous l'utilisez est une **référence de bloc** qui pointe vers l'unique définition. La section {{ui:Blocs}} du panneau de gauche répertorie les blocs du dessin et le nombre d'utilisations de chacun.

## Dessiner la porte

1. Saisissez `L` puis appuyez sur {{key:Enter}}.
2. Saisissez `0,0` puis appuyez sur {{key:Enter}}.
3. Saisissez `@0,900` puis appuyez sur {{key:Enter}}, puis appuyez de nouveau sur {{key:Enter}}. Il s'agit du vantail de la porte.
4. Saisissez `A` puis appuyez sur {{key:Enter}}.
5. Saisissez `C` puis appuyez sur {{key:Enter}} pour indiquer d'abord le centre.
6. Saisissez `0,0` puis appuyez sur {{key:Enter}} pour le centre.
7. Saisissez `900,0` puis appuyez sur {{key:Enter}} pour le point de départ.
8. Saisissez `0,900` puis appuyez sur {{key:Enter}} pour le point d'arrivée. Il s'agit du débattement.
9. Cliquez sur {{ui:Étendue}}.

Les arcs vont dans le sens inverse des aiguilles d'une montre, du point de départ au point d'arrivée.

## Créer le bloc

1. Saisissez `B` puis appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Créer}} dans le groupe Blocs.
2. À l'invite `Entrez le nom du bloc`, saisissez `DOOR-900` puis appuyez sur {{key:Enter}}.
3. À l'invite `Spécifiez le point de base d'insertion`, saisissez `0,0` puis appuyez sur {{key:Enter}}. Il s'agit de la charnière : le point qui se place à l'endroit où vous posez le bloc.
4. À l'invite `Sélectionnez des objets`, faites glisser une fenêtre autour du vantail et de l'arc.
5. Appuyez sur {{key:Enter}}.

L'historique affiche « Bloc DOOR-900 créé à partir de 2 objets ; ils ont été remplacés par une référence à ce bloc. » Le panneau {{ui:Blocs}} affiche DOOR-900 avec `1×` à côté : une seule référence. Cliquez sur la porte : elle se sélectionne désormais comme un seul objet, une « référence de bloc ».

:::tip
Vous pouvez d'abord sélectionner les objets, puis saisir `B`. CadCraft demande tout de même le nom et le point de base, puis utilise votre sélection.
:::

## Insérer le bloc

1. Saisissez `I` puis appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Insérer}} à côté de DOOR-900 dans le panneau {{ui:Blocs}}.
2. À l'invite `Entrez le nom du bloc ou [Fichier/Bibliothèque (L)] <DOOR-900>`, appuyez sur {{key:Enter}}. (Le bouton {{ui:Insérer}} du panneau renseigne le nom à votre place.)
3. La porte suit le réticule. Cliquez à l'endroit où doit se trouver la charnière.

Une deuxième porte apparaît.

## Insérer tourné ou mis à l'échelle

1. Saisissez `I` puis appuyez sur {{key:Enter}}, puis appuyez sur {{key:Enter}} pour accepter le nom.
2. À l'invite `Spécifiez le point d'insertion [Échelle (S)/Rotation]`, saisissez `R` puis appuyez sur {{key:Enter}}.
3. Saisissez `90` puis appuyez sur {{key:Enter}}. L'aperçu pivote.
4. Cliquez pour la placer.

Saisissez plutôt `S` pour définir un facteur d'échelle ; il s'applique aux deux directions. L'échelle et la rotation sont mémorisées pour l'insertion suivante. Pour mettre une porte en symétrie, insérez-la puis utilisez {{cmd:MIRROR}} sur la référence.

## Modifier un bloc placé

Sélectionnez une référence de bloc. Dans le panneau de droite, vous pouvez modifier ses {{ui:X}}, {{ui:Y}}, {{ui:Échelle X}}, {{ui:Échelle Y}} et {{ui:Rotation}}. Une valeur négative de {{ui:Échelle X}} le retourne.

## Redéfinir un bloc

Pour modifier toutes les portes d'un coup, créez un bloc portant le même nom :

1. Dessinez la nouvelle version de la porte.
2. Saisissez `B` puis appuyez sur {{key:Enter}}, et saisissez `DOOR-900`.
3. À l'invite `Le bloc « DOOR-900 » existe déjà. Le redéfinir ?`, saisissez `Y` puis appuyez sur {{key:Enter}}.
4. Indiquez le point de base et sélectionnez les nouveaux objets, comme précédemment.

Chaque référence à DOOR-900 affiche maintenant la nouvelle version.

Ou modifiez le bloc lui-même : {{ui:Blocs}} › {{ui:Plus}} › {{ui:Modifier le bloc}} ({{cmd:BEDIT}}) l'ouvre seul, et {{ui:Enregistrer le bloc}} le remet en place. Voir [Attributs de bloc](topic:attributes#change-a-block-the-block-editor).

## Compter les blocs et exporter une nomenclature

Saisissez {{cmd:COUNT}} (ou {{ui:Blocs}} › {{ui:Plus}} › {{ui:Compter les blocs}}), puis :

- cliquez sur une porte : toutes les portes de cet espace sont sélectionnées, et l'historique indique combien il y en a ici et dans tout le dessin ;
- ou appuyez sur {{key:Enter}} : l'historique liste chaque bloc avec son nombre, le plus nombreux en premier ;
- ou saisissez `E`, puis `C` pour un CSV des comptages (dans le modèle, sur les feuilles, au total) ou `A` pour une ligne par référence avec son calque, sa position, sa rotation et chaque valeur d'attribut — une nomenclature que vous pouvez ouvrir dans un tableur.

Les blocs sans nom (cotes, tableaux) et les références placées à l'intérieur d'autres blocs ne sont pas comptés. Les cellules qui commencent comme une formule (`=`, `+`, `-`, `@`) reçoivent une `'` en tête, afin qu'un tableur les affiche comme du texte.

## Décomposer et purger

- {{cmd:EXPLODE}} (`X`) transforme une référence de bloc sélectionnée en objets séparés. La définition reste.
- {{cmd:PURGE}} (`PU`) supprime les définitions de bloc que plus rien n'utilise. L'historique indique combien il en a supprimé.

## Noms de blocs

Un nom peut compter jusqu'à 255 caractères et contenir des espaces, mais il ne peut pas commencer par un astérisque ni contenir `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ou un accent grave. Lorsque vous enregistrez en DXF R12, les noms sont écrits en majuscules, les caractères autres que les lettres, les chiffres, `$`, `_` et `-` deviennent `_`, et les noms sont tronqués à 31 caractères ; l'historique indique combien ont changé. Les noms courts en majuscules, chiffres et tirets, comme `DOOR-900`, restent inchangés. Un DWG enregistré conserve les noms tels que vous les avez saisis, en majuscules et minuscules ; seuls les caractères que le DWG n'accepte pas changent (un `|` devient `$0$`, les autres deviennent `_`).

## Écrire un bloc ou des objets dans un fichier distinct

Saisissez `W` ({{cmd:WBLOCK}}) et choisissez **Objets**, **Bloc** ou **Dessin entier**. Le résultat est un nouveau DWG ou DXF ne contenant que les calques, styles et blocs qu'il utilise, avec votre point de base comme origine. Pour les objets, vous pouvez les conserver, les transformer en bloc ou les supprimer de ce dessin.

## Erreurs courantes

- **Le bloc s'est posé loin du réticule.** Le point de base n'était pas sur les objets. Recréez le bloc avec le point de base sur un coin ou une charnière.
- **« Aucun objet sélectionné ; rien créé. »** Vous avez appuyé sur {{key:Enter}} avant de sélectionner quoi que ce soit.
- **« Ce dessin ne contient pas encore de bloc : F en insère un depuis un fichier, L depuis la bibliothèque (ou créez-en un avec BLOCK). »** Saisissez `F` pour importer un bloc depuis un autre dessin, ou `L` pour la bibliothèque. Voir [Insérer depuis un fichier ou la bibliothèque](topic:insert-from-file-and-library).
- **« Une fenêtre de présentation ne peut pas aller dans un bloc. »** Excluez les cadres de fenêtres de présentation de la sélection.

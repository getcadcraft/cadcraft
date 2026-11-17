---
title: Exécuter des routines LISP
summary: Ce que fait le LISP de CadCraft (fonctions, invites, commandes, objets, boîtes de dialogue, objets vla), comment saisir du LISP sur la ligne de commande et ce qui n'est pas encore disponible.
keywords: lisp, routine, lsp, dcl, boîte de dialogue, commande, defun, entget, ssget, vla, vlax, vl, getpoint, erreur, compatibilité, ce qui fonctionne
from: 571bc077
---

## Ce que vous allez apprendre

À quoi vous attendre en chargeant une routine LISP écrite pour un autre logiciel de CAO : quelles parties s'exécutent dans CadCraft, et ce qui n'est pas encore disponible.

CadCraft dispose de son propre LISP. Il a été écrit à partir de la référence publique AutoLISP, et non du programme de quiconque ; la plupart des routines écrites pour AutoCAD fonctionnent donc sans modification. Lorsqu'une fonction manque, la ligne de commande la nomme, ce qui vous permet de distinguer une lacune de CadCraft d'une erreur dans la routine.

## Saisir du LISP sur la ligne de commande

Saisissez une expression qui commence par `(` puis appuyez sur {{key:Enter}} : `(+ 1 2)` affiche `3`. `!nom` affiche la valeur d'une variable. Une expression qui n'est pas encore fermée attend la ligne suivante.

À une invite, une expression répond : à « Spécifiez le rayon », saisissez `(* 2 12.5)` pour obtenir 25.

## Ce qui s'exécute

- **Le langage :** `defun` (avec des variables locales après `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` et `*error*` (un `*error*` local fonctionne). Les noms ne tiennent pas compte de la casse ; les entiers et les réels diffèrent, comme vous vous y attendez (`(/ 7 2)` donne 3).
- **Fonctions intégrées :** calcul, listes (`car`, `cdr` et leur famille, `assoc`, `nth`, `member`, `subst`, `append`…), chaînes (`strcat`, `substr`, `strcase`, `wcmatch`…), conversions (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), géométrie (`polar`, `distance`, `angle`, `inters`) et fichiers (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Commandes :** `(defun c:NOM …)` crée une commande. `(command …)` et `(command-s …)` pilotent les commandes propres à CadCraft, avec `pause` pour votre réponse.
- **Invites :** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` avec des mots-clés `initget`, `entsel`, `nentsel` et `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, avec des listes de filtres et des tests `-4`).
- **Objets sous forme de listes :** `entget`, `entmod`, `entmake` (y compris les blocs), `entdel`, `entlast`, `entnext` (les attributs d'une référence de bloc viennent après elle sous forme d'ATTRIB, puis d'un SEQEND, si bien que les routines d'attributs fonctionnent), `handent`, les jeux de sélection, `tblsearch` et `tblnext`, `layoutlist`, `regapp`, `getvar` et `setvar` pour les paramètres que CadCraft possède.
- **Boîtes de dialogue :** fichiers `.dcl` avec `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Les boutons, champs de saisie, listes, listes déroulantes, bascules, boutons radio, lignes, colonnes et cadres s'affichent tous. Une routine qui écrit sa boîte de dialogue dans un fichier temporaire fonctionne aussi.
- **Objets :** `vl-load-com` (sans effet ; rien n'a besoin d'être chargé), les fonctions de liste et de chaîne `vl-`, `vl-catch-all-apply`, ainsi que les propriétés `vla-get-…` / `vla-put-…`, les méthodes `vla-…` et `vlax-for` sur les collections Blocks, Layers et Layouts, l'espace objet et les définitions de blocs, avec des variantes et des tableaux sécurisés.

## Routines testées

Les tests de CadCraft exécutent un ensemble de routines écrites pour ces vérifications (filtres de sélection, invites, commandes, objets, gestionnaires d'erreurs), ainsi qu'une routine très demandée par son nom : DelBlocks de Lee Mac, appelée par son nom depuis sa boîte de dialogue et en désignant un bloc. CadCraft possède aussi sa propre commande {{cmd:DELBLOCKS}}, donc vous n'avez pas besoin d'une routine pour cela.

## Pas encore disponible

- `grread` (suivre la souris vous-même), les réacteurs (`vlr-…`), les fonctions de courbe (`vlax-curve-…`), les dictionnaires et les données étendues (`dictsearch`, xdata dans `entget` et `entmake`), et les fonctions `acet-…` des Express Tools.
- Les images et les diapositives dans les boîtes de dialogue s'affichent comme des cadres vides.
- Exécuter un autre programme, le registre Windows, et les fichiers autres que ceux que vous chargez : une routine peut écrire et lire ses propres fichiers temporaires, qui durent jusqu'à la fermeture de la page.

Lorsqu'une routine atteint l'une de ces fonctions, la ligne de commande affiche « no function definition » et le nom, et indique que CadCraft ne la prend pas encore en charge.

## Erreurs à éviter

- **Une commande portant le même nom que l'une de celles de CadCraft.** La commande de CadCraft est conservée. Lancez celle de la routine sous la forme `(c:NOM)` sur la ligne de commande.
- **Exécuter du LISP auquel vous ne faites pas confiance.** Une routine peut modifier tout ce qui se trouve dans le dessin, mais rien au-delà : elle ne peut pas atteindre vos fichiers, d'autres sites ni d'autres applications.

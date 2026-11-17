---
title: Modifier les alias de commandes
summary: Conservez vos propres alias de commandes dans un seul fichier texte au format habituel, importez et exportez un fichier .pgp, et rechargez-le avec REINIT.
keywords: alias, aliases, aliasedit, pgp, raccourci, nom court, reinit, clavier, personnaliser, modifier les alias
from: 6ab6fa0e
---

## Ce que vous allez apprendre

Comment ajouter vos propres noms courts pour les commandes, par exemple `LL` pour {{cmd:LINE}}, le tout dans un seul fichier texte.

## Ajouter un alias

1. Ouvrez {{ui:Vue}} › {{ui:Plus}} › {{ui:Modifier les alias…}}, ou tapez {{cmd:ALIASEDIT}} et appuyez sur {{key:Enter}}.
2. Ajoutez une ligne avec l'alias, une virgule, puis la commande précédée d'une étoile :

```
LL,     *LINE
```

3. Cliquez sur {{ui:Enregistrer}}. La ligne de commande indique combien de vos alias sont utilisés.
4. Tapez `LL` et appuyez sur {{key:Enter}} : LINE démarre.

Vos alias s'ajoutent à ceux de CadCraft. Une ligne à vous l'emporte sur un alias intégré de même nom ; supprimez votre ligne et l'alias intégré revient.

## Lignes refusées par CadCraft

L'éditeur signale chaque problème avec son numéro de ligne pendant la saisie :

- la commande n'existe pas ;
- l'alias est lui-même le nom d'une commande (`LINE, *CIRCLE` masquerait LINE) ;
- la ligne n'est pas de la forme `ALIAS, *COMMANDE` ;
- le même alias figure sur deux lignes (la dernière l'emporte).

Les lignes qui lancent un programme sur votre ordinateur, comme `NOTEPAD, START, 1, *File to edit: ,`, sont ignorées avec une remarque : une application dans le navigateur ne peut pas lancer de programmes.

## Importer vos alias depuis un autre programme

1. Dans l'éditeur d'alias, cliquez sur {{ui:Importer un .pgp…}} et choisissez le fichier. Vous pouvez aussi déposer un fichier `.pgp` sur le dessin.
2. Vérifiez les problèmes signalés (les commandes que CadCraft ne possède pas sont refusées, le reste fonctionne).
3. Cliquez sur {{ui:Enregistrer}}.

{{ui:Exporter un .pgp}} enregistre les alias de CadCraft et les vôtres dans un seul fichier, au même format.

## Recharger le fichier

Tapez {{cmd:REINIT}} et appuyez sur {{key:Enter}} pour appliquer à nouveau votre fichier d'alias. Il est conservé dans ce navigateur ; l'application de bureau le conservera dans son propre dossier, et le service cloud le synchronisera.

## Raccourcis clavier pour n'importe quelle commande

Un alias se tape ; un raccourci est une touche. Pour attribuer une touche à une commande :

1. Cliquez sur {{ui:Vue}} › {{ui:Plus}} › {{ui:Raccourcis clavier…}}, ou tapez `KEYS` et appuyez sur {{key:Enter}}.
2. Cliquez dans la case {{ui:Touche}} et appuyez sur les touches, par exemple {{key:Alt+Shift+C}}.
3. Dans {{ui:Lance}}, saisissez la commande et, si vous le souhaitez, ce qu'il faut taper ensuite : `CIRCLE`, ou `ZOOM E`.
4. Cliquez sur {{ui:Ajouter}}.

Une touche doit comporter {{key:Mod}} ou {{key:Alt}} avec une lettre ou un chiffre, ou être une touche de fonction libre ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Les touches déjà utilisées par CadCraft, l'application ou le navigateur, ainsi que celles d'un bouton Mes outils (voir [Boutons personnels](topic:my-tools)), sont refusées, et la case indique pourquoi. Les raccourcis sont conservés dans ce navigateur (ou l'application de bureau) ; {{ui:Retirer}} en supprime un.

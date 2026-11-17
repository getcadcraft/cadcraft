---
title: Charger des applications (APPLOAD)
summary: Chargez des routines LISP et leurs fichiers de boîte de dialogue, déchargez-les, rechargez-les depuis l'historique, et gardez celles que vous utilisez dans la Suite de démarrage.
keywords: appload, ap, charger une application, lisp, lsp, dcl, routine, suite de démarrage, décharger, historique, déposer, charger, personnaliser, gérer
from: 89e0ee95
---

## Ce que vous allez apprendre

Comment charger une routine LISP (un fichier `.lsp`) pour que ses commandes fonctionnent dans CadCraft, comment la décharger, et comment la faire charger à chaque démarrage de CadCraft.

## Charger une routine

1. Ouvrez {{ui:Vue}} › {{ui:Plus}} › {{ui:Charger une application…}}, ou tapez {{cmd:APPLOAD}} (ou `AP`) et appuyez sur {{key:Enter}}.
2. Cliquez sur {{ui:Charger un fichier…}} et choisissez un ou plusieurs fichiers `.lsp`. Une routine qui ouvre une boîte de dialogue est généralement accompagnée d'un fichier `.dcl` : choisissez-le aussi.
3. La boîte de dialogue indique ce que chaque fichier a créé, par exemple « delblocks.lsp chargé : 1 commande, DELBLOCKS. »
4. Cliquez sur {{ui:Fermer (C)}}, tapez la commande de la routine et appuyez sur {{key:Enter}}.

Vous pouvez aussi déposer des fichiers `.lsp` et `.dcl` sur le dessin, ou sur la boîte de dialogue Charger des applications : ils se chargent immédiatement.

Le fichier est lu ici, dans votre navigateur. Rien n'est téléversé.

:::tip
Appuyez sur {{key:Enter}} sur une ligne de commande vide pour relancer la commande de la routine, comme pour toute autre commande. Vos alias de commande peuvent aussi l'atteindre : voir « Modifier les alias de commande ».
:::

## Décharger une routine

Dans {{ui:Charger des applications}}, sous {{ui:Applications chargées}}, cliquez sur {{ui:Décharger}} à côté du fichier. Les commandes qu'il avait créées disparaissent jusqu'à ce que vous le rechargiez.

## Charger une routine à chaque démarrage de CadCraft

1. Chargez la routine.
2. Sous {{ui:Applications chargées}}, cliquez sur {{ui:Ajouter à la Suite de démarrage}} à côté d'elle.

Désormais, elle se charge automatiquement à chaque démarrage de CadCraft dans ce navigateur. Pour arrêter cela, cliquez sur {{ui:Retirer}} à côté d'elle, sous {{ui:Suite de démarrage}}.

La Suite de démarrage conserve une copie de chaque fichier dans le stockage de ce navigateur. Si vous modifiez la routine, chargez le nouveau fichier et ajoutez-le de nouveau.

## Charger acad.lsp et acaddoc.lsp depuis un dossier de support (Studio)

Dans CadCraft Studio, {{ui:Dossier de support}} dans la boîte de dialogue {{ui:Charger des applications}} désigne un dossier de votre ordinateur. Cliquez sur {{ui:Choisir un dossier…}}. Au démarrage, CadCraft lit `acad.lsp` puis `acaddoc.lsp` dans ce dossier (quelle que soit la casse des noms), les charge, puis charge la Suite de démarrage. `acaddoc.lsp` est relu à chaque ouverture d'un nouvel onglet de dessin. Aucun autre fichier du dossier n'est lu, et un fichier de plus de 2 MB est ignoré avec un message.

Si un fichier définit une fonction nommée `S::STARTUP`, elle s'exécute une fois après le chargement des fichiers (aussi après la Suite de démarrage). {{ui:Charger maintenant}} fait de même sur demande ; {{ui:Effacer}} oublie le dossier.

Dans le navigateur, une page ne peut pas conserver un dossier : il n'y a donc pas de dossier de support. Utilisez la Suite de démarrage ci-dessus. Les fichiers `.fas` et `.vlx` compilés et les programmes natifs restent refusés.

## Recharger un fichier depuis l'historique

{{ui:Historique}} liste les fichiers que vous avez chargés dans ce navigateur, du plus récent au plus ancien. Cliquez sur {{ui:Charger}} à côté de l'un d'eux pour le recharger, sans le chercher sur votre ordinateur.

## Fichiers que CadCraft ne peut pas charger

| Fichier | Ce que c'est | Que faire |
|---|---|---|
| `.fas`, `.vlx` | LISP compilé ou protégé | chargez plutôt la source `.lsp` |
| `.arx`, `.crx`, `.dbx` | programmes natifs Windows | ces fichiers ne peuvent pas être exécutés dans CadCraft |
| `.dvb` | un projet VBA | ces fichiers ne peuvent pas être exécutés dans CadCraft |
| `.craft`, `.lua`, `.py` | scripts CraftScript | ouvrez-les dans l'espace de travail Script de PartCraft |

La boîte de dialogue Charger des applications indique laquelle de ces catégories correspond à un fichier lorsque vous le choisissez.

## Arrêter une routine

Appuyez sur {{key:Esc}}. À l'une des invites de la routine, Échap l'annule comme la routine l'attend (son propre nettoyage s'exécute). Si elle est occupée sans rien demander, Échap l'arrête immédiatement et le signale ; vos routines chargées restent chargées.

:::note
Tout ce qu'une routine modifie dans le dessin constitue une seule étape : un seul {{key:Mod+Z}} annule tout.
:::

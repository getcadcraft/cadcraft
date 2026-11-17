---
title: Utiliser CadCraft avec un assistant IA
summary: Laissez votre propre assistant IA ou script travailler avec CadCraft : ce qu'il peut faire, comment connecter n'importe quel client MCP, et comment vous gardez la main (autorisations, annulation, journal d'activité, Déconnecter).
keywords: ia, assistant, agent, mcp, model context protocol, script, automatisation, ligne de commande, cli, json, jeton, autorisations, déconnecter, activité, dossiers, chemins, svg, lot
from: 06ba4ef6
---

## Ce que vous allez apprendre

Comment laisser un assistant IA (ou un script que vous avez écrit) examiner un dessin, exécuter les commandes de CadCraft, tracer et enregistrer, et décider de ce qu'il a le droit de modifier.

CadCraft n'a **pas d'IA propre** et n'envoie rien nulle part. Vous apportez l'assistant : tout programme qui parle le Model Context Protocol (MCP). CadCraft lui fournit seulement des outils, et vous choisissez lesquels.

Il existe deux façons d'y accéder :

- **Le dessin que vous avez ouvert.** L'assistant travaille dans cette fenêtre, à côté de vous, via CadCraft Studio sur votre ordinateur. C'est à cela que sert {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Assistants}}.
- **Des dessins sur votre ordinateur, sans ouvrir l'application.** Le serveur MCP de CadCraft et la ligne de commande `cadcraft` lisent et écrivent des fichiers DWG et DXF dans les dossiers que vous indiquez. Voir « Travailler sur des fichiers sans ouvrir CadCraft » ci-dessous.

## Activer la fonction

1. Ouvrez {{ui:Paramètres}} (l'engrenage dans la barre d'application, ou {{key:Mod+,}}) et allez à l'onglet {{ui:CadCraft}}.
2. Sous {{ui:Assistants}}, cochez **Autoriser les assistants IA et les scripts à utiliser CadCraft**. Elle reste désactivée tant que vous ne la cochez pas.
3. Choisissez ce qu'il peut faire. **Lecture** est cochée au départ ; cochez les autres seulement quand vous en avez besoin.

| Autorisation | Ce que l'assistant peut faire |
|---|---|
| Lecture | Examiner le dessin : le décrire, lister et trouver des objets, voir la sélection, décrire la vue et en prendre une image, le vérifier selon les règles de calques et de dessin |
| Modification | Exécuter des commandes sur le dessin et modifier la sélection. Chaque action est une étape que vous pouvez annuler |
| Enregistrement | Enregistrer le dessin (sur l'ordinateur, dans son fichier ; dans un navigateur, sous forme de téléchargement) |
| Export | Tracer en PDF et créer d'autres fichiers |

## Lui laisser utiliser des fichiers dans les dossiers de votre choix

Dans CadCraft Studio, un assistant peut ouvrir, enregistrer et tracer des fichiers par leur nom au lieu d'utiliser les boîtes de dialogue de fichiers, mais seulement à l'intérieur des dossiers que vous ajoutez sous {{ui:Assistants}} › {{ui:Dossiers que les assistants peuvent utiliser}} :

1. Choisissez {{ui:Ajouter un dossier…}} et sélectionnez le dossier dans la boîte de dialogue propre à Studio.
2. L'assistant peut maintenant lister les fichiers qui s'y trouvent (`files_list`), ouvrir un dessin (`drawing_open`), l'y enregistrer dans une version DWG ou en DXF, tracer un fichier PDF ou SVG, charger un fichier LISP, et donner à une commande le fichier qu'elle demande (`INSERT` `F`, `XATTACH`, un fichier de points), ou indiquer où va le fichier d'une commande (le CSV de `COUNT`, `PUBLISH`).
3. {{ui:Retirer}} retire immédiatement un dossier. Les chemins situés ailleurs sont refusés, et un fichier déjà présent n'est remplacé que si l'assistant le demande ou s'il l'a lui-même écrit.

Ouvrir un dessin demande toujours **Lecture** ; l'enregistrer demande **Enregistrement** ; tout autre fichier demande **Export**.

Les outils qui sortent des autorisations cochées ne sont pas proposés à l'assistant du tout, et s'il en demande un malgré tout, CadCraft le refuse et l'inscrit dans le journal d'activité. Désactiver l'interrupteur met fin à toutes les connexions d'un coup. {{ui:Réinitialiser les paramètres de CadCraft}} le désactive aussi.

## Connecter votre assistant

Les assistants se connectent via **CadCraft Studio** sur votre ordinateur : Studio lance un petit serveur que seul cet ordinateur peut atteindre (adresse `127.0.0.1`), protégé par un jeton que Studio crée à chaque démarrage. Ouvrez Studio, choisissez {{ui:Connecter un assistant}}, et copiez l'adresse et le jeton.

- Dans votre assistant, ajoutez un serveur MCP de type HTTP avec l'adresse (elle ressemble à `http://127.0.0.1:47615/mcp`) et l'en-tête `Authorization: Bearer <token>`. Studio affiche les paramètres à coller.

{{ui:Nouveau jeton}} dans Studio fait reconnecter tous les assistants connectés avec le nouveau jeton. Ne partagez jamais le jeton : quiconque le possède peut utiliser les applications que vous avez activées, tant que Studio est lancé.

:::note
Un onglet du navigateur ne peut pas ouvrir une connexion pour un assistant : dans les applications dans le navigateur, l'interrupteur n'a aucun effet tant que vous n'utilisez pas CadCraft Studio sur votre ordinateur.
:::

## Vous gardez la main

- **Chaque action est une étape d'annulation**, portant le nom que lui donne l'assistant, par exemple « Assistant : LINE ». Appuyez sur {{key:Mod+Z}} pour annuler la dernière action de l'assistant en une seule fois.
- **Vous voyez ce qu'il fait.** Ses commandes apparaissent dans l'historique des commandes avec **[Assistant]** devant, et le dessin se rafraîchit pendant son travail.
- **Il attend son tour.** Pendant que vous êtes au milieu d'une commande, l'assistant peut lire mais non modifier le dessin ; il est prévenu de réessayer quand vous avez terminé.
- **Vous savez quand il est connecté.** Un bouton dans la barre d'application indique le nom de l'assistant tant qu'il est connecté. Cliquez dessus pour voir ce qu'il peut faire, ou pour le **Déconnecter**.
- **Activité.** {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activité}} liste chaque appel : quand, quel outil, terminé ou refusé, et l'étape d'annulation qu'il a créée. {{ui:Enregistrer le journal}} en garde une copie.

## Ce que peut demander un assistant

| Outil | Autorisation | Ce qu'il fait |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lecture | Le nom du dessin, les unités, les calques, les blocs, les feuilles ; ce qui est à l'écran |
| `files_list`, `drawing_open` | Lecture | Studio : les fichiers de vos dossiers ; en ouvrir un dans cette fenêtre |
| `objects_list`, `object_get`, `selection_get` | Lecture | Les objets avec leur géométrie, longueur et aire (ou seulement leur nombre, par type et calque) ; la sélection |
| `drawing_check` | Lecture | Des règles telles que calques autorisés, rien sur le calque 0, couleurs DuCalque, hauteurs de texte |
| `view_screenshot` | Lecture | Une image du dessin tel qu'il est affiché |
| `command_run` | Modification | Saisit à la ligne de commande : `LINE 0,0 @100,0 @0,50 ` se lit comme vous le saisiriez (un espace termine une réponse), ou une liste avec une réponse chacune. Elle peut laisser une commande ouverte et continuer à l'appel suivant |
| `script_run` | Modification | Un script (`.scr`) ou un fichier LISP, comme le charge {{ui:APPLOAD}} |
| `block_insert` | Modification | Place un bloc avec ses valeurs d'attributs en une seule étape |
| `selection_set`, `undo` | Modification | Sélectionne des objets pour la commande suivante ; annule ses propres étapes |
| `drawing_save` | Enregistrement | {{ui:Enregistrer}} de CadCraft lui-même, ou {{ui:Enregistrer sous}} dans un de vos dossiers |
| `drawing_plot` | Export | Un PDF ou SVG d'une feuille ou du modèle, à une échelle ou ajusté (les fonds PDF ne sont pas encore imprimés de cette façon) |

Pendant qu'un assistant exécute une commande, CadCraft pose ses questions sur la ligne de commande au lieu d'une boîte de dialogue (par exemple s'il faut insérer tout un dessin ou un seul bloc), afin que l'assistant puisse y répondre. La bibliothèque et {{ui:Rechercher}} ont toujours besoin de vous ; l'assistant est invité à vous demander.

## Travailler sur des fichiers sans ouvrir CadCraft

Le serveur MCP de CadCraft (`cadcraft-mcp`) et la ligne de commande (`cadcraft`) exécutent le code de dessin propre à CadCraft dans Node.js, sans fenêtre. Ils nécessitent Node.js 20 ou plus récent.

- **Le serveur MCP** ne fonctionne qu'à l'intérieur des dossiers que vous indiquez, et seulement avec les autorisations que vous lui donnez : `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Sans `--root`, il ne peut ouvrir aucun fichier ; sans `--allow`, il ne peut que lire. Il peut aussi lire des modèles IFC, des métrés et les annotations des jeux PDF.
- **La ligne de commande** est destinée à vos propres scripts : `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Plusieurs fichiers à la fois : `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Ajoutez `--json` pour une sortie qu'un programme peut lire.

:::note
Si `npx @getcadcraft/mcp` indique que le paquet est introuvable, il n'a pas encore été publié. Les actualités sur getcadcraft.com indiqueront quand il le sera.
:::

## Si quelque chose ne fonctionne pas

- **L'assistant ne voit aucun outil CadCraft :** vérifiez que l'interrupteur est activé dans cette fenêtre, et que la fenêtre est ouverte dans Studio.
- **« needs the edit permission » :** cochez **Modification** sous {{ui:Assistants}}, puis redemandez.
- **« outside the folders assistants may use » :** ajoutez ce dossier sous {{ui:Assistants}} › {{ui:Dossiers que les assistants peuvent utiliser}}, ou demandez à l'assistant d'utiliser un fichier d'un dossier déjà ajouté.
- **Erreurs « 401 » ou de jeton :** le jeton a changé (Studio a redémarré, ou {{ui:Nouveau jeton}}). Copiez le nouveau jeton dans les paramètres de l'assistant.
- **Sa modification est fausse :** appuyez sur {{key:Mod+Z}}. Une seule pression annule une action complète de l'assistant.

## Voir aussi

- [Recettes pour assistants IA](common:assistants-recipes) : exemples détaillés, chacun avec les outils qu'il appelle.

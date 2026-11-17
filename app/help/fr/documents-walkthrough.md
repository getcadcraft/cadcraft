---
title: Documents et révisions (le coffre)
summary: Parcours pas à pas d'un vrai projet : mettre un dossier de projet sous contrôle, réserver un dessin, le modifier, le rendre avec une note, l'envoyer en revue, l'approuver et le publier, consulter l'historique et les utilisations, voir ce que voit une seconde personne pendant la réservation, et fonctionnement avec les dossiers cloud.
keywords: coffre, documents, parcours, tutoriel, réserver, rendre, révision, publier, approuver, verrouiller, historique, où utilisé, dossier cloud, dossier de projet, gestion de documents, pdm, deux personnes, dossier partagé
from: 3829528d
---

## Ce que vous allez faire

Vous êtes Ana, et vous travaillez sur la Riverside Clinic avec une collègue, Ben. Les dessins du projet se trouvent dans un même dossier auquel vous accédez tous les deux (un lecteur partagé, un dossier synchronisé ou un dossier cloud). À la fin, un fichier est passé de sa première copie à la révision **A** publiée, a été modifié de nouveau en **B.1**, vous avez vu qui a fait quoi, et vous avez vu ce que voit Ben lorsque vous tenez le fichier.

Tout est conservé dans un dossier caché `.ccvault` à côté de vos fichiers : pas de serveur, et rien n'est envoyé (un dossier cloud fait exception, voir la dernière étape). Pour chaque bouton et chaque règle, au même endroit, voir la rubrique *Documents : réservation, révisions et publication* là où votre application la propose.

## 1. Mettre en place le dossier de projet

1. Choisissez {{ui:Documents…}} dans le menu {{ui:Plus}} de l'onglet **Affichage**, ou tapez `DOCUMENTS` (ou `DOCS`) et appuyez sur {{key:Enter}}.
2. Choisissez {{ui:Choisir le dossier de projet}} et sélectionnez le dossier qui contient les dessins du projet. (Les dossiers de projet fonctionnent dans Studio et dans les navigateurs qui peuvent ouvrir un dossier, comme Chrome et Edge. Dans les autres navigateurs, le panneau l'indique.)
3. Choisissez {{ui:Changer}} à côté de **Vous :** et tapez votre nom, `Ana` (si le panneau le demande, aussi le nom de cet ordinateur). Le panneau affiche maintenant *Vous : Ana sur* votre ordinateur. Votre nom accompagne tout ce que vous faites.
4. Choisissez {{ui:Créer un coffre dans ce dossier}} et tapez le nom du projet, `Riverside clinic`. Le panneau affiche *Coffre créé pour Riverside clinic.*

## 2. Placer un fichier sous contrôle

1. Ouvrez **Fichiers hors du coffre** et choisissez {{ui:Ajouter}} à côté de `plans/A-101.dxf`.
2. Il apparaît sous **Fichiers du coffre** à la révision **A.1**, état **En cours**. A.1 est sa première copie ; le coffre conserve une copie de chaque révision.

## 3. Réserver, modifier, rendre

1. Choisissez {{ui:Ouvrir}} à côté de `plans/A-101.dxf`. Le dessin s'ouvre dans CadCraft et le panneau se ferme pour que vous puissiez le voir. Le panneau reste accessible en une commande : `DOCUMENTS`.
2. Rouvrez le panneau et choisissez {{ui:Réserver}}. La ligne indique maintenant **Réservé par vous**. Un fichier de verrouillage a été créé dans `.ccvault/locks` ; personne d'autre ne peut réserver ce fichier tant que vous ne l'avez pas rendu.
3. Dessinez quelque chose : ajoutez une ligne, déplacez un mur. Rien de ce que vous faites ne peut être enregistré par-dessus le fichier du coffre à moins que le dessin ne soit réservé à vous ; Enregistrer sous fonctionne toujours pour une copie à vous.
4. Ouvrez le panneau, choisissez {{ui:Rendre}} et tapez ce qui a changé (`Moved the door`). Le panneau indique *rendu sous A.2*. Le fichier du dossier de projet est maintenant le dessin que vous aviez ouvert, et le verrou est levé. Rendre sans aucune modification conserve la révision.

Si vous changez d'avis, {{ui:Annuler la réservation}} rend le fichier sans nouvelle révision.

## 4. Revoir et publier

1. Choisissez {{ui:Envoyer en revue}}. L'état devient **En revue** et le fichier passe en lecture seule.
2. Avant d'approuver, choisissez {{ui:Paramètres du projet}} et indiquez qui peut approuver (un nom par ligne), par exemple `Ben` et `Carla`, puis cochez la règle selon laquelle l'approbateur doit être une personne autre que l'auteur. Choisissez {{ui:Enregistrer les paramètres}}. Désormais, le coffre lui-même refuse toute autre personne.
3. Ben (ou Carla) choisit {{ui:Approuver}} et tape le nom de l'approbateur. L'état devient **Publié** et la révision devient **A**, avec *approuvé par* et le nom. Un fichier publié est en lecture seule. {{ui:Renvoyer}} l'aurait ramené à En cours, avec un motif.

Le nom de l'approbateur est celui saisi dans le panneau : c'est une trace de qui a validé, et non une preuve d'identité.

## 5. Une nouvelle révision

1. Sur le fichier publié, choisissez {{ui:Nouvelle révision}}. Vous le réservez pour la lettre suivante.
2. Modifiez-le, puis choisissez {{ui:Rendre}}. La révision est **B.1**, en cours. Publiez-la de la même façon et elle devient **B**. {{ui:Annuler la réservation}} avant le premier rendu la laisse à **A**.

Les lettres de révision vont A, B … Z, AA, AB. Si votre norme en omet certaines, le paramètre de projet *Utiliser la séquence ASME Y14.35* ignore I, O, Q, S, X et Z pour les révisions suivantes.

## 6. Voir ce qui s'est passé

Choisissez le nom du fichier pour ouvrir ses détails :

- **{{ui:Historique}}** : chaque événement, du plus récent au plus ancien, avec qui, sur quel ordinateur et à quelle heure : *Rendu sous A.2* par Ana, *Publié* par Ben, et ainsi de suite.
- **{{ui:Révisions}}** : le tableau des révisions. {{ui:Ouvrir une copie}} ouvre une révision comme une copie simple qui ne peut pas écraser le fichier du coffre ; {{ui:Comparer avec}} liste ce qui a été ajouté, supprimé et modifié par rapport à la révision précédente, ou à une autre.
- **{{ui:Utilise}}** : les dessins auxquels il renvoie (références externes).
- **{{ui:Utilisé par}}** : liste chaque autre dessin du coffre qui renvoie à celui-ci : si vous modifiez un plan de base, vous savez quelles feuilles vérifier.

## Révision sur la feuille

Avec le dessin ouvert (et une présentation dans celui-ci), choisissez {{ui:Tableau des révisions}} : un tableau des révisions publiées est dessiné en haut à droite de la feuille. Choisissez {{ui:Remplir les cartouches}} pour remplir les attributs de cartouche marqués `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ou `APPROVED_BY` avec la révision, l'état, la date et l'approbateur du fichier. Lorsque vous approuvez la publication suivante, le tableau des révisions est mis à jour.

## 7. Ce que voit Ben pendant que vous tenez le fichier

Réservez maintenant le fichier à nouveau, et demandez à Ben d'ouvrir le même dossier de projet sur son ordinateur et d'ouvrir le panneau. Sur la ligne du fichier, il voit **Réservé par Ana sur** votre ordinateur **depuis** l'heure indiquée, et aucun bouton {{ui:Réserver}}. S'il essaie malgré tout, le coffre refuse : le verrou est un fichier que le système ne crée pas deux fois, de sorte que deux personnes ne peuvent pas tenir le fichier, même à la même fraction de seconde, lorsque le dossier se trouve sur le disque dans Studio. (Dans un navigateur, le dossier n'offre qu'une garantie partielle, et le panneau l'indique sous **Dossier**.)

Si Ana est absente et que Ben a besoin du fichier, {{ui:Lever la réservation}} le libère. Il doit saisir un motif ; celui-ci est consigné dans le journal, avec le nom de la personne qui détenait la réservation. Lorsque le projet indique des administrateurs, eux seuls peuvent le faire. Une réservation plus ancienne que la limite de péremption (14 jours par défaut) est marquée *depuis longtemps*. Après la levée, le rendu tardif d'Ana est refusé, de sorte que vous ne puissiez pas vous écraser mutuellement.

## 8. Dossiers cloud

Un dossier cloud est un dossier de projet conservé dans le stockage cloud de votre équipe, ce qui évite à l'équipe d'avoir un lecteur partagé. Dans Studio, connecté à votre compte CadCraft, le panneau affiche {{ui:Ouvrir un dossier cloud}} à côté de {{ui:Choisir le dossier de projet}}. Choisissez-le et sélectionnez le dossier, listé sous la forme espace de travail / dossier. Le propriétaire de l'espace de travail crée d'abord le dossier, et le stockage cloud de l'équipe doit être actif. Tout ce qui précède fonctionne de la même façon ; c'est le serveur qui crée le verrou, et il est strict entre les personnes. Si vous n'êtes pas connecté, le panneau vous demande de vous connecter. Dans un onglet de navigateur ordinaire, le bouton cloud n'est pas proposé ; utilisez Studio.

## Essayez

Suivez les huit étapes ci-dessus avec une copie d'un vrai fichier. Pour les étapes à deux personnes, il vous faut une autre personne, ou deux fenêtres avec deux noms. Si vous essayez avec un vrai dossier partagé, la page des tests communautaires propose une vérification qui pose exactement cette question, et elle accepte les résultats.

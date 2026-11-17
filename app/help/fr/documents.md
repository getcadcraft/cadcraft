---
title: "Documents : réservation, révisions et publication"
summary: "Gardez sous contrôle les dessins d'un dossier de projet : réservez un fichier pour que personne d'autre ne le modifie, rendez-le comme nouvelle révision, envoyez-le en revue et publiez-le avec le nom d'un approbateur ; historique, utilisations, nomenclature et cartouches qui affichent la révision."
keywords: paramètres du projet, approbateurs, administrateurs, lettres de révision, ASME, lecture seule, comparer les révisions, ouvrir une copie, partcraft, bimcraft, documents, DOCUMENTS, DOCS, coffre, gestion documentaire, pdm, réserver, rendre, check out, check in, checkout, checkin, verrouillage, révision, rev, lettre de révision, publication, publié, approuver, approbation, revue, obsolète, où utilisé, bom, nomenclature, cartouche, tableau des révisions, dossier de projet
from: ee938722
---

## Ce que vous allez réaliser

Un dossier de projet dans lequel chaque dessin possède une révision (A.1, A.2 … puis A, B …) et un état (En cours, En revue, Publié, Obsolète), où une seule personne à la fois peut modifier un fichier, et où chaque réservation, remise, approbation et réservation levée est consignée avec le nom de son auteur et la date.

Tout est conservé dans le dossier lui-même, dans un dossier caché `.ccvault` à côté de vos dessins. Un dossier sur un lecteur partagé ou un dossier synchronisé convient à toute une équipe. Il n'y a pas de serveur et rien n'est téléversé.

## Ouvrir Documents

Tapez `DOCUMENTS` (ou `DOCS`) et appuyez sur {{key:Enter}}. Le panneau s'ouvre à côté du dessin.

Choisissez {{ui:Choisir le dossier de projet}} et sélectionnez le dossier qui contient les dessins du projet. Les dossiers de projet fonctionnent dans CadCraft Studio et dans les navigateurs capables d'ouvrir un dossier (Chrome, Edge). Dans les autres navigateurs, le panneau l'indique.

La première fois, saisissez votre nom (il figure sur tout ce que vous faites) et le nom de cet ordinateur. Si vous êtes connecté, votre nom est déjà renseigné.

## Créer un coffre

Un dossier qui n'est pas encore un coffre propose {{ui:Créer un coffre dans ce dossier}}. Saisissez le nom du projet. Ouvrez ensuite {{ui:Fichiers hors du coffre}} et choisissez {{ui:Ajouter}} à côté de chaque fichier à placer sous contrôle. Un fichier ajouté démarre à la révision **A.1**, En cours.

## Modifier un dessin

1. Choisissez {{ui:Ouvrir}} à côté d'un dessin. Il s'ouvre dans CadCraft. S'il n'est pas réservé à votre nom, consultez-le sans le modifier : {{ui:Enregistrer}} refuse de l'écraser et indique la raison (utilisez {{ui:Enregistrer sous}} pour garder une copie personnelle).
2. Choisissez {{ui:Réserver}}. Personne d'autre ne peut le réserver maintenant ; le panneau indique qui le détient, sur quel ordinateur et depuis quand.
3. Dessinez.
4. Choisissez {{ui:Rendre}} et indiquez ce qui a changé. Le dessin ouvert est enregistré dans le dossier du projet, dans son propre format, et devient la révision suivante (A.1, puis A.2). Rendre sans modification conserve la révision.

{{ui:Annuler la réservation}} rend le fichier sans créer de nouvelle révision.

## Revue et publication

- {{ui:Envoyer en revue}} : le fichier est en lecture seule pendant sa revue.
- {{ui:Approuver}} : saisissez le nom de l'approbateur. A.3 devient **A**, Publié. Les fichiers publiés sont en lecture seule.
- {{ui:Renvoyer}} : retour à En cours, avec la raison.
- {{ui:Nouvelle révision}} sur un fichier publié le réserve pour la lettre suivante : sa première remise est **B.1**. {{ui:Annuler la réservation}} avant cette remise le laisse à A.
- {{ui:Rendre obsolète}} retire un fichier publié.

Un projet peut tenir la liste des personnes autorisées à approuver, et exiger que l'approbateur ne soit pas la personne qui a remis le fichier (voir Paramètres du projet ci-dessous).

## Paramètres du projet

Ouvrez {{ui:Paramètres du projet}} dans le panneau :

- **Approbateurs** : un nom par ligne. S'il y en a, eux seuls peuvent approuver une publication.
- **L'approbateur doit être une autre personne que l'auteur** : la règle des « quatre yeux ».
- **Administrateurs** : un nom par ligne. S'il y en a, eux seuls peuvent lever la réservation d'une autre personne ou modifier ces paramètres.
- **Lettres de révision à exclure** : {{ui:Utiliser la séquence ASME Y14.35}} saute I, O, Q, S, X et Z, ou saisissez vos propres lettres. Les lettres déjà attribuées restent ; le choix s'applique aux révisions suivantes.
- **Une réservation devient périmée après** : le nombre de jours (14 par défaut).

Choisissez {{ui:Enregistrer les paramètres}}. La modification est consignée dans le journal avec le nom de son auteur.

## Fichier laissé réservé

{{ui:Lever la réservation}} libère un fichier réservé par quelqu'un d'autre (il est absent, ou son ordinateur est en panne). Vous devez saisir une raison : elle est consignée dans le journal avec le nom du détenteur de la réservation. Lorsque le projet a des administrateurs, eux seuls peuvent le faire. Une réservation de plus de 14 jours est signalée comme ancienne.

## Historique, révisions, utilisations, utilisé par

Choisissez le nom d'un fichier pour voir :

- {{ui:Historique}} : chaque événement, du plus récent au plus ancien, avec la personne, l'ordinateur et la date.
- {{ui:Révisions}} : chaque révision conservée. Une copie de chaque révision se trouve dans le coffre (un contenu identique n'est conservé qu'une fois). {{ui:Ouvrir une copie}} ouvre cette révision comme une copie simple qui ne peut pas écraser le fichier du coffre. {{ui:Comparer avec}} liste ce qui a été ajouté, supprimé et modifié entre cette révision et la précédente (ou toute autre que vous choisissez), et le met en couleur sur le dessin.
- {{ui:Utilise}} : les dessins qu'il référence (références externes), les documents auxquels un modèle IFC renvoie, les pièces d'un assemblage PartCraft.
- {{ui:Utilisé par}} : chaque fichier du coffre qui utilise celui-ci.

{{ui:Nomenclature (CSV)}} enregistre la liste de tout ce qu'utilise un fichier, niveau par niveau, avec les quantités, les révisions et les états, pour un tableur.

## Un tableau des révisions sur la feuille

Avec un dessin ouvert qui possède une présentation, choisissez {{ui:Tableau des révisions}}. Un tableau des révisions publiées (révision, date, auteur, approuvé par, description) est tracé en haut à droite de la feuille que vous consultez. Lorsque vous approuvez une publication, le tableau est mis à jour.

## Révision dans le cartouche

Donnez à vos attributs de cartouche l'une de ces balises, puis choisissez {{ui:Remplir les cartouches}} sur le dessin ouvert :

| Balise | Rempli avec |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | la révision (B, ou B.2 pendant qu'elle est en cours de modification) |
| `VAULT.STATE` | l'état (Publié …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | la date de la dernière révision |
| `VAULT.APPROVER`, `APPROVED_BY` | la personne qui a approuvé la dernière publication |

## PartCraft et BimCraft

PartCraft et BimCraft ont le même panneau Documents pour leurs propres fichiers : pièces et assemblages dans PartCraft, modèles IFC dans BimCraft. La remise enregistre le modèle ouvert dans le dossier du projet, et un assemblage affiche les pièces qu'il utilise ainsi qu'une nomenclature.

## À savoir

- Deux personnes sur le même dossier partagé ne peuvent pas réserver le même fichier tous les deux : la réservation est un fichier que le système refuse de créer deux fois. Dans un navigateur, et dans un Studio dont la version est plus ancienne que cette fonction, la protection est aussi stricte que le permet le dossier : deux réservations dans la même fraction de seconde pourraient réussir toutes deux. Le panneau indique le cas applicable.
- Ne modifiez pas et ne supprimez pas le dossier `.ccvault` à la main. Le journal qu'il contient fait foi ; le coffre reconstruit sa liste à partir de ce journal si nécessaire.
- Modifier un fichier du dossier sans le réserver est indiqué comme {{ui:Modifié dans le dossier sans réservation}}.

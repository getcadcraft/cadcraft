---
title: Historique : versions et modifications
summary: Consulter les versions d'un dessin (copies que Studio conserve à l'enregistrement, et celles du cloud), en ouvrir ou en restaurer une, et comparer deux versions avec les modifications affichées en couleur.
keywords: historique, versions, historique des versions, restaurer, version précédente, annuler un enregistrement, comparer, comparer des dessins, dwgcompare, modifications, ajouté, supprimé, modifié, instantané, sauvegarde, versions cloud
from: 141d37b3
---

## Ce que vous allez créer

Un aperçu d'une version antérieure d'un dessin, et une liste des différences avec la version actuelle : ce qui a été ajouté, supprimé et modifié, marqué en couleur sur le dessin.

## Ouvrir l'historique

Tapez `HISTORY` (ou `HIST`) et appuyez sur {{key:Enter}}, ou choisissez {{ui:Historique…}} dans le menu {{ui:Plus}} du groupe {{ui:Vue}}. Le panneau s'ouvre à côté du dessin et reste ouvert pendant votre travail ; vous pouvez ainsi faire un panoramique et un zoom sur le dessin avec les couleurs affichées.

L'historique fonctionne dans CadCraft Studio. Dans un navigateur, le panneau le signale simplement.

## D'où viennent les versions

- **Sur cet ordinateur.** Chaque fois que vous ouvrez un dessin depuis un fichier dans Studio, et chaque fois que vous l'enregistrez, Studio conserve une copie du fichier dans son propre espace de stockage sur cet ordinateur. La première copie est {{ui:À l'ouverture}} : le fichier tel qu'il était avant votre premier enregistrement par-dessus. Studio conserve les 25 copies les plus récentes de chaque dessin, et les plus anciennes partent en premier lorsque l'ensemble des copies dépasse 400 Mo. Un enregistrement qui ne change rien ne conserve rien. Rien n'est envoyé.
- **Dans le cloud.** Lorsque vous ouvrez un dessin depuis vos fichiers cloud dans Studio, le panneau liste aussi {{ui:Dans le cloud}} : chaque version conservée par le cloud, avec son numéro, son auteur et sa note. Le panneau ne fait que les lire. CadCraft n'envoie pas encore ses propres enregistrements vers le cloud : ce sont donc les versions enregistrées depuis d'autres appareils et depuis le web. Reconnectez-vous dans Studio s'il indique que la session de connexion a expiré.

Un dessin que vous n'avez pas encore enregistré n'a aucune copie : enregistrez-le d'abord.

## Ouvrir ou restaurer une version

- {{ui:Ouvrir}} place cette version dans un onglet à part. Votre dessin n'est pas modifié.
- {{ui:Restaurer}} remplace ce dessin par cette version. Il demande d'abord confirmation. Studio conserve une copie du dessin tel qu'il est actuellement dans l'historique (marquée {{ui:Avant une restauration}}) avant de procéder, et rien n'est écrit dans le fichier tant que vous ne l'avez pas enregistré. Une restauration ne peut pas être annulée avec {{key:Mod+Z}} ; utilisez cette copie.

## Comparer

1. Cliquez sur {{ui:Comparer}} sur une version. Elle est comparée à {{ui:Le dessin tel qu'il est maintenant}} ; pour la comparer plutôt à une autre version, choisissez d'abord celle-ci dans {{ui:Comparer avec}}.
2. Lisez le résultat sous la liste : le nombre d'objets ajoutés, supprimés et modifiés, ainsi que la liste de ceux-ci. Cliquez sur un élément de la liste pour déplacer la vue vers lui.
3. Sur le dessin :
   - les objets **verts** ont été ajoutés,
   - les objets **rouges** ont été supprimés (ils n'existent que dans la version la plus ancienne),
   - les objets **orange** ont été modifiés : la nouvelle forme est pleine et l'ancienne en pointillés.
4. {{ui:Afficher sur le dessin}} active et désactive les couleurs ; {{ui:Effacer les couleurs}} supprime le résultat. Fermer le panneau efface aussi les couleurs.

La liste indique ce qui a changé dans un objet modifié : son texte, son déplacement, sa forme, son calque, sa couleur, son type de ligne ou son épaisseur de ligne. Chaque feuille est comparée séparément ; les couleurs apparaissent sur la feuille ouverte.

:::note
Un dessin n'a pas de numéro durable pour chaque objet, donc CadCraft fait correspondre les objets selon ce qu'ils sont : le même objet des deux côtés est inchangé ; un objet du même type et du même calque situé à moins de sa propre taille d'un ancien objet est le même objet, modifié ; le reste est ajouté ou supprimé. Un objet déplacé loin de sa position d'origine apparaît comme supprimé à un endroit et ajouté à l'autre. Une référence de bloc compte le contenu de son bloc.
:::

## Erreurs fréquentes

- **« Aucune copie pour l'instant. »** Studio conserve une copie à chaque ouverture et enregistrement d'un dessin qui a un fichier sur cet ordinateur. Un dessin ouvert depuis un onglet de navigateur, ou jamais enregistré, n'en a aucune.
- **La liste du cloud manque.** Elle apparaît pour un dessin ouvert depuis le cloud dans Studio ; un fichier ouvert depuis le disque n'est pas un dessin cloud.
- **Tout apparaît modifié.** Deux versions enregistrées par des programmes différents écrivent le même dessin de façons différentes (noms des blocs anonymes, arrondis). Comparez des versions enregistrées par CadCraft.

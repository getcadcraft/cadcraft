---
title: Organiser un dessin avec des calques
summary: Créez des calques pour les murs, les portes et les notes, réglez les couleurs, rendez un calque courant, et désactivez, gelez, verrouillez ou exemptez-les du tracé.
keywords: calque, calques, la, calque courant, geler, dégeler, verrouiller, déverrouiller, activer, désactiver, tracer, ne pas tracer, couleur, propriétés de calque, layiso, layuniso, isoler, layoff, layfrz, laymcur, layon, laythw, renommer, laymrg, fusionner, laydel, supprimer un calque
from: ba9f0617
---

## Ce que vous allez créer

Trois calques, Murs, Portes et Notes, chacun avec sa couleur, des objets dessinés sur chacun, et des objets déplacés de l'un à l'autre.

## Le panneau Calques

Les calques se trouvent dans le panneau de gauche, sous {{ui:Calques}}. Chaque ligne affiche, de gauche à droite :

- un point : plein pour le calque **courant**, où vont les nouveaux objets ;
- une pastille de couleur ;
- le nom du calque ;
- quatre boutons : activer ou désactiver (œil), geler (flocon), verrouiller (cadenas) et tracer (imprimante).

Chaque dessin possède un calque nommé `0`. Taper `LA` puis {{key:Enter}} amène au panneau.

## Créer des calques

1. Cliquez sur {{ui:Nouveau calque}} au-dessus de la liste. Une case de nom s'ouvre.
2. Tapez `Murs` et appuyez sur {{key:Enter}} (ou cliquez sur {{ui:Ajouter}}).

La barre d'état indique « Calque Murs ajouté et rendu courant. » Le nouveau calque reçoit la couleur 7 (noir sur le thème clair, blanc sur le thème sombre).

3. Cliquez à nouveau sur {{ui:Nouveau calque}}, tapez `Portes` et appuyez sur {{key:Enter}}.
4. Cliquez à nouveau sur {{ui:Nouveau calque}}, tapez `Notes` et appuyez sur {{key:Enter}}.

Notes est maintenant le calque courant.

## Donner une couleur à chaque calque

1. Cliquez sur la pastille de couleur de la ligne Murs. Le sélecteur de couleurs de votre système s'ouvre.
2. Choisissez une couleur et confirmez.

La pastille et tout ce qui se trouve sur Murs et est coloré {{ui:Par calque}} changent.

:::note
Une couleur choisie qui correspond à l'une des 255 couleurs CAO standard est enregistrée sous ce numéro. Toute autre couleur est conservée telle quelle dans CadCraft, mais elle est enregistrée sous la couleur standard la plus proche dans un fichier DWG ou DXF.
:::

## Dessiner sur un calque

1. Cliquez sur le nom **Murs** dans la liste. Son point se remplit et la barre d'état indique « Calque courant : Murs ».
2. Dessinez un rectangle (`REC`). Il va sur Murs.
3. Cliquez sur **Portes**, puis dessinez un arc (`A`). Il va sur Portes.

Vous pouvez aussi choisir le calque courant dans {{ui:Réglages actuels}} à droite (rien de sélectionné), sous {{ui:Calque}}.

## Déplacer des objets vers un autre calque

1. Sélectionnez les objets.
2. Dans le panneau de droite, choisissez le nouveau calque dans {{ui:Calque}}.

Ils passent sur ce calque et prennent sa couleur si leur couleur est {{ui:Par calque}}.

## Désactiver, geler, verrouiller et tracer

| Bouton | Ce qu'il fait |
|---|---|
| Activer ou désactiver (œil) | Masque les objets du calque. Ils ne peuvent être ni vus, ni sélectionnés, ni accrochés. |
| Geler (flocon) | Même effet que désactiver dans CadCraft. Gardé séparé parce que les autres programmes les traitent différemment, et le réglage est enregistré. |
| Verrouiller (cadenas) | Les objets restent visibles et vous pouvez vous y accrocher, mais ils ne peuvent être ni sélectionnés ni modifiés. Pratique pour un fond sur lequel vous calquez. |
| Tracer (imprimante) | Lorsqu'il est enfoncé, le calque est affiché à l'écran mais **exclu des tracés** et des PDF. À utiliser pour les lignes de construction et les notes pour vous-même. |

Survolez un bouton pour voir ce qu'il fera (« Désactiver », « Geler », « Verrouiller », « Ne pas tracer ce calque »).

Vous ne pouvez pas désactiver le calque courant : la barre d'état indique « C'est le calque courant. Rendez d'abord un autre calque courant. » Cliquer sur le nom d'un calque pour le rendre courant l'active aussi et le dégèle.

Chaque modification de calque, dans le panneau ou par une commande, est une seule étape d'annulation : {{key:Mod+Z}} la rétablit.

## Travailler sur les calques en désignant des objets

Vous n'avez pas besoin de connaître le nom d'un calque : désignez un objet qui s'y trouve. Tapez la commande, ou ouvrez {{ui:Outils}} en haut du panneau {{ui:Calques}}.

| Commande | Ce qu'elle fait |
|---|---|
| {{cmd:LAYISO}} | Sélectionnez des objets, puis appuyez sur {{key:Enter}} : seuls leurs calques restent actifs, tous les autres sont désactivés. Si le calque courant est désactivé, l'un des calques isolés devient courant. |
| {{cmd:LAYUNISO}} | Réactive les calques que le dernier {{cmd:LAYISO}} avait désactivés, et rend le calque courant qu'il avait modifié. |
| {{cmd:LAYOFF}} | Cliquez sur les objets l'un après l'autre : le calque de chacun est désactivé. Tapez `U` pour annuler le dernier, {{key:Enter}} pour terminer. |
| {{cmd:LAYFRZ}} | Identique, mais en gelant chaque calque. |
| {{cmd:LAYMCUR}} | Cliquez sur un objet : son calque devient courant (et il est activé et dégelé). Si un objet est déjà sélectionné, c'est lui qui est utilisé. |
| {{cmd:LAYON}} | Active tous les calques. |
| {{cmd:LAYTHW}} | Dégèle tous les calques. |

Le calque courant n'est jamais désactivé ni gelé de cette manière : l'historique le signale, et vous pouvez d'abord rendre un autre calque courant avec {{cmd:LAYMCUR}}. Désigner une référence de bloc utilise le calque propre à cette référence.

## Renommer, fusionner et supprimer des calques

- {{cmd:RENAME}} : tapez `LA`, l'ancien nom, puis le nouveau. Chaque objet du calque suit. (`B` renomme un bloc de la même façon, avec toutes ses références.)
- {{cmd:LAYMRG}} : cliquez sur un objet de chaque calque à fusionner (ou tapez `N` et un nom), appuyez sur {{key:Enter}}, puis désignez le calque cible et répondez `Y`. Les objets passent sur la cible — dans le modèle, sur les feuilles et dans les blocs — et les calques fusionnés disparaissent.
- {{cmd:LAYDEL}} : désignez un objet du calque (ou tapez `N` et son nom) et répondez `Y`. Le calque disparaît **avec tous les objets qu'il contient**, partout. Le calque 0, DEFPOINTS et le calque courant ne peuvent pas être supprimés.

Chacune est une seule étape d'annulation. Les trois se trouvent dans {{ui:Outils}} en haut du panneau {{ui:Calques}}.

1. Cliquez sur une ligne de mur, puis tapez `LAYISO` et appuyez sur {{key:Enter}}. Seul Murs reste actif.
2. Dessinez ou modifiez ce dont vous avez besoin sur Murs.
3. Tapez `LAYUNISO` et appuyez sur {{key:Enter}}. Portes et Notes reviennent.

## Erreurs courantes

- **De nouvelles lignes sont allées sur le mauvais calque.** Vérifiez quel point est plein avant de dessiner. Un nouveau calque devient courant dès que vous l'ajoutez.
- **Un objet ne se sélectionne pas.** Son calque est verrouillé, désactivé ou gelé.
- **Le calque s'imprime encore dans un autre programme.** Le DXF R12 ne peut pas stocker « ne pas tracer ». CadCraft garde ce réglage pour lui-même lorsque le dessin possède une feuille, mais les autres programmes tracent ce calque.
- **Noms de calques en majuscules après l'enregistrement.** Le DXF R12 stocke les noms en majuscules : `Murs` revient donc sous la forme `MURS`, et les espaces deviennent `_`. Un DWG enregistré garde les noms tels que vous les avez saisis.
- **Renommer, fusionner ou supprimer un calque.** Utilisez {{cmd:RENAME}}, {{cmd:LAYMRG}} ou {{cmd:LAYDEL}} (également dans {{ui:Outils}}) : voir ci-dessus.

## Grouper les calques

Gardez la liste courte en rangeant les calques dans des dossiers, par exemple Existant, Projet et Réseaux. Chaque dossier se replie, et ses interrupteurs activent ou désactivent tous ses calques, ou les gèlent ou les verrouillent ensemble. Le calque courant n'est jamais désactivé.

Dans {{ui:Outils}} du panneau Calques, choisissez {{ui:Ajouter des groupes prêts à l'emploi}} pour un ensemble conçu pour de petits projets résidentiels, {{ui:Grouper par nom}} pour regrouper les calques qui partagent un préfixe (`E-Murs`, `E-Portes`), ou {{ui:Nouveau groupe}}. Faites glisser un calque sur un dossier, ou utilisez la liste au-dessus des calques pour le calque courant. Tapez dans {{ui:Rechercher un calque}} pour réduire la liste. `LAYGROUP` (`LG`) fait la même chose sur la ligne de commande.

Pour renommer un groupe, double-cliquez sur son nom (ou sélectionnez-le et appuyez sur {{key:F2}}), tapez le nouveau nom et appuyez sur {{key:Enter}} ; {{key:Esc}} garde l'ancien nom, et {{cmd:UNDO}} le rétablit. {{ui:Nouveau groupe}} se trouve dans {{ui:Outils}} du panneau Calques.

Les calques eux-mêmes ne changent pas : les autres logiciels de CAO les voient donc comme une liste plate ordinaire. CadCraft conserve les groupes dans le fichier.

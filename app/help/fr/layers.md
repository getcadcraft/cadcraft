---
title: Organiser un dessin avec des calques
summary: Créez des calques pour les murs, les portes et les notes, définissez des couleurs, rendez un calque courant, et désactivez, gelez, verrouillez-les ou empêchez leur tracé.
keywords: calque, calques, la, calque courant, geler, dégeler, verrouiller, désactiver, activer, tracer, pas de tracé, couleur, propriétés du calque, layiso, layuniso, isoler, layoff, layfrz, laymcur, layon, laythw, renommer, laymrg, fusionner, laydel, supprimer un calque
from: cd033591
---

## Ce que vous allez réaliser

Trois calques, Murs, Portes et Notes, chacun avec sa propre couleur, avec des objets dessinés sur chacun et déplacés de l'un à l'autre.

## Le panneau Calques

Les calques se trouvent dans le panneau de gauche, sous {{ui:Calques}}. Chaque ligne affiche, de gauche à droite :

- un point : plein pour le calque **courant**, où vont les nouveaux objets ;
- un échantillon de couleur ;
- le nom du calque ;
- quatre boutons : activer ou désactiver (œil), geler (flocon), verrouiller (cadenas) et tracer (imprimante).

Chaque dessin possède un calque nommé `0`. Tapez `LA` et appuyez sur {{key:Enter}} pour aller au panneau.

## Créer des calques

1. Cliquez sur {{ui:Nouveau calque}} au-dessus de la liste. Une zone de saisie du nom s'ouvre.
2. Tapez `Murs` et appuyez sur {{key:Enter}} (ou cliquez sur {{ui:Ajouter}}).

La barre d'état indique « Calque Murs ajouté et rendu courant. » Le nouveau calque reçoit la couleur 7 (noir sur le thème clair, blanc sur le thème sombre).

3. Cliquez de nouveau sur {{ui:Nouveau calque}}, tapez `Portes` et appuyez sur {{key:Enter}}.
4. Cliquez de nouveau sur {{ui:Nouveau calque}}, tapez `Notes` et appuyez sur {{key:Enter}}.

Notes est maintenant courant.

## Donner une couleur à chaque calque

1. Cliquez sur l'échantillon de couleur de la ligne Murs. Le sélecteur de couleurs de votre système s'ouvre.
2. Choisissez une couleur et confirmez.

L'échantillon change, ainsi que tous les objets de Murs colorés {{ui:Par calque}}.

:::note
Une couleur choisie qui correspond à l'une des 255 couleurs CAO standard est enregistrée sous ce numéro. Toute autre couleur est conservée exactement dans CadCraft, mais enregistrée avec la couleur standard la plus proche dans un fichier DWG ou DXF.
:::

## Dessiner sur un calque

1. Cliquez sur le nom **Murs** dans la liste. Son point se remplit et la barre d'état indique « Calque courant : Murs ».
2. Dessinez un rectangle (`REC`). Il va sur Murs.
3. Cliquez sur **Portes**, puis dessinez un arc (`A`). Il va sur Portes.

Vous pouvez aussi choisir le calque courant dans {{ui:Réglages actuels}} à droite (aucun objet sélectionné), sous {{ui:Calque}}.

## Déplacer des objets vers un autre calque

1. Sélectionnez les objets.
2. Dans le panneau de droite, choisissez le nouveau calque dans {{ui:Calque}}.

Ils passent sur ce calque et prennent sa couleur si leur couleur est {{ui:Par calque}}.

## Désactiver, geler, verrouiller et tracer

| Bouton | Ce qu'il fait |
|---|---|
| Activer ou désactiver (œil) | Masque les objets du calque. Ils ne peuvent être ni vus, ni sélectionnés, ni accrochés. |
| Geler (flocon) | Même effet que la désactivation dans CadCraft. Les deux sont distincts car d'autres logiciels les traitent différemment, et le réglage est enregistré. |
| Verrouiller (cadenas) | Les objets restent visibles et vous pouvez vous y accrocher, mais ils ne peuvent être ni sélectionnés ni modifiés. Utile pour un fond sur lequel vous calquez. |
| Tracer (imprimante) | Lorsque ce bouton est activé, le calque reste affiché à l'écran mais **n'est pas inclus** dans les tracés ni les PDF. À utiliser pour les lignes de construction et vos notes personnelles. |

Pointez un bouton pour voir son effet (« Désactiver », « Geler », « Verrouiller », « Ne pas tracer ce calque »).

Vous ne pouvez pas désactiver le calque courant : la barre d'état indique « C'est le calque courant. Rendez d'abord un autre calque courant. » Cliquer sur le nom d'un calque pour le rendre courant l'active également et le dégèle.

Chaque modification de calque, dans le panneau ou par une commande, constitue une seule étape d'annulation : {{key:Mod+Z}} l'annule.

## Travailler sur les calques en désignant des objets

Vous n'avez pas besoin de connaître le nom d'un calque : désignez un objet qui s'y trouve. Tapez la commande, ou ouvrez {{ui:Outils}} en haut du panneau {{ui:Calques}}.

| Commande | Ce qu'elle fait |
|---|---|
| {{cmd:LAYISO}} | Sélectionnez des objets, puis appuyez sur {{key:Enter}} : seuls leurs calques restent activés, tous les autres sont désactivés. Si le calque courant est désactivé, l'un des calques isolés devient courant. |
| {{cmd:LAYUNISO}} | Réactive les calques que la dernière {{cmd:LAYISO}} avait désactivés, et rend le calque courant qu'elle avait modifié. |
| {{cmd:LAYOFF}} | Cliquez les objets l'un après l'autre : le calque de chacun est désactivé. Tapez `U` pour annuler le dernier, {{key:Enter}} pour terminer. |
| {{cmd:LAYFRZ}} | Identique, en gelant chaque calque. |
| {{cmd:LAYMCUR}} | Cliquez un objet : son calque devient courant (et est activé et dégelé). Si un objet est déjà sélectionné, c'est lui qui est utilisé. |
| {{cmd:LAYON}} | Active tous les calques. |
| {{cmd:LAYTHW}} | Dégèle tous les calques. |

Le calque courant n'est jamais désactivé ni gelé de cette façon : l'historique le signale, et vous pouvez rendre un autre calque courant avec {{cmd:LAYMCUR}} au préalable. Désigner une référence de bloc utilise le calque propre à cette référence.

## Renommer, fusionner et supprimer des calques

- {{cmd:RENAME}} : tapez `LA`, l'ancien nom, puis le nouveau. Chaque objet du calque suit. (`B` renomme un bloc de la même façon, avec toutes ses références.)
- {{cmd:LAYMRG}} : cliquez un objet sur chaque calque à fusionner (ou tapez `N` et un nom), appuyez sur {{key:Enter}}, puis désignez le calque cible et répondez `Y`. Les objets passent sur la cible, dans le modèle, sur les feuilles et dans les blocs, et les calques fusionnés disparaissent.
- {{cmd:LAYDEL}} : désignez un objet du calque (ou tapez `N` et son nom) et répondez `Y`. Le calque disparaît **avec tous les objets qu'il contient**, partout. Le calque 0, DEFPOINTS et le calque courant ne peuvent pas être supprimés.

Chacune de ces opérations constitue une seule étape d'annulation. Les trois se trouvent dans {{ui:Outils}} en haut du panneau {{ui:Calques}}.

1. Cliquez sur une ligne de mur, puis tapez `LAYISO` et appuyez sur {{key:Enter}}. Seul Murs reste activé.
2. Dessinez ou modifiez ce dont vous avez besoin sur Murs.
3. Tapez `LAYUNISO` et appuyez sur {{key:Enter}}. Portes et Notes réapparaissent.

## Erreurs fréquentes

- **Les nouvelles lignes sont allées sur le mauvais calque.** Vérifiez quel point est rempli avant de dessiner. Un nouveau calque devient courant dès que vous l'ajoutez.
- **Un objet ne se sélectionne pas.** Son calque est verrouillé, désactivé ou gelé.
- **Le calque s'imprime encore dans un autre logiciel.** Le DXF R12 ne peut pas stocker « ne pas tracer ». CadCraft conserve ce réglage pour lui-même lorsque le dessin possède une feuille, mais les autres logiciels tracent ce calque.
- **Noms de calques en majuscules après l'enregistrement.** Le DXF R12 enregistre les noms en majuscules : `Murs` revient donc `MURS`, et les espaces deviennent `_`. Un DWG enregistré conserve les noms tels que vous les avez saisis.
- **Renommer, fusionner ou supprimer un calque.** Utilisez {{cmd:RENAME}}, {{cmd:LAYMRG}} ou {{cmd:LAYDEL}} (aussi dans {{ui:Outils}}) : voir ci-dessus.

## Regrouper les calques

Gardez la liste courte en rangeant les calques dans des dossiers, par exemple Existant, Projeté et Réseaux. Chaque dossier se replie, et ses interrupteurs activent ou désactivent, gèlent ou verrouillent tous ses calques ensemble. Le calque courant n'est jamais désactivé.

Dans {{ui:Outils}} du panneau Calques, choisissez {{ui:Ajouter des groupes prêts à l'emploi}} pour un ensemble conçu pour les petits chantiers résidentiels, {{ui:Grouper par nom}} pour regrouper les calques qui partagent un préfixe (`E-Murs`, `E-Portes`), ou {{ui:Nouveau groupe}}. Glissez un calque sur un dossier, ou utilisez la liste au-dessus des calques pour le calque courant. Tapez dans {{ui:Rechercher un calque}} pour affiner la liste. `LAYGROUP` (`LG`) fait la même chose en ligne de commande.

Les calques eux-mêmes ne changent pas : les autres logiciels de CAO les voient comme une liste plate ordinaire. CadCraft conserve les groupes dans le fichier.

---
title: Blocs dynamiques
summary: Ce que CadCraft fait des blocs dynamiques dans un DWG : ils gardent leurs vrais noms, affichent l'état dans lequel ils ont été enregistrés, changent d'état de visibilité, montrent leurs autres valeurs et restent dynamiques à l'enregistrement.
keywords: bloc dynamique, blocs dynamiques, visibilité, état de visibilité, retourner, étirer, recherche, paramètres, personnalisé, propriétés de bloc, blocs *u, dynamique
from: dea2ee7c
---

## Ce qui fonctionne

Un DWG créé avec des blocs dynamiques s'ouvre avec ceux-ci fonctionnant jusqu'à ce point :

- **Leurs vrais noms.** Un bloc dynamique est listé dans le panneau {{ui:Blocs}} sous son propre nom (« Receptacle », « Sink »), et non comme un bloc `*U` sans nom.
- **L'état dans lequel ils ont été enregistrés.** Chaque référence affiche exactement ce que l'autre programme montrait : l'état de visibilité sur lequel elle était réglée, étirée ou retournée telle qu'elle était enregistrée.
- **Changer l'état de visibilité.** Sélectionnez une référence (ou plusieurs du même bloc), ouvrez {{ui:Propriétés}}, puis dans la section {{ui:Personnalisé}}, choisissez un autre état dans la liste {{ui:Visibilité}}. La référence affiche aussitôt cet état, ainsi que ses attributs : ceux que l'état masque disparaissent, ceux qu'il montre apparaissent avec leurs valeurs. Une référence conserve toutes les valeurs, donc rien ne revient vide ; {{ui:Propriétés}} liste les valeurs masquées avec la mention « masqué ». {{key:Mod+Z}} rétablit l'ancien état en une seule étape.
- **Les poignées.** Un bloc dynamique sélectionné affiche ses propres poignées là où se trouvent ses paramètres : un petit triangle pour l'état de visibilité (cliquez dessus pour la liste des états), des flèches aux extrémités d'une distance, une double flèche pour un retournement. Seule la poignée de visibilité agit aujourd'hui ; les autres l'indiquent dans la barre d'état.
- **Les autres valeurs, en lecture seule.** Sous la liste de visibilité, {{ui:Personnalisé}} affiche aussi les distances, les angles d'alignement, les états de retournement et les points du bloc tels que le dessin les contient.
- **Modifier les états de visibilité.** Ouvrez le bloc avec {{cmd:BEDIT}} : l'éditeur affiche un état, nommé dans la barre au-dessus du dessin (choisissez-en un autre à cet endroit). Tapez {{cmd:BVSTATE}} pour changer d'état, en ajouter un (en masquant tout, en montrant tout ou en gardant ce qui est visible), le renommer ou le supprimer ; {{cmd:BVHIDE}} masque les objets sélectionnés dans l'état affiché ; {{cmd:BVSHOW}} affiche les objets masqués en grisé, pour que vous cliquiez sur ceux à rétablir. Enregistrez le bloc : les références réglées sur un état renommé le conservent sous son nouveau nom, et celles qui sont réglées sur un état supprimé affichent le premier état.
- **Ils restent dynamiques.** Enregistrés en DWG dans la version où le dessin a été ouvert, les blocs restent dynamiques, avec l'état que vous avez choisi : l'autre programme les ouvre comme les mêmes blocs dynamiques. Les états de visibilité que vous avez modifiés sont enregistrés eux aussi : leurs nouveaux noms, les états ajoutés et ce que montre chacun.

## Ce qui est en lecture seule, ou pas encore disponible

| Pas encore disponible | En attendant, aujourd'hui |
|---|---|
| Modifier les distances, les angles ou les retournements (actions d'étirement, de déplacement, de retournement) | Ils s'affichent en lecture seule dans {{ui:Personnalisé}} ; modifiez-les dans le programme qui a créé le bloc. |
| Paramètres de recherche, XY, de rotation et polaires | Non lus pour l'instant : la référence s'affiche telle qu'elle a été enregistrée. |
| Faire glisser les poignées de distance, de retournement et de point | Elles montrent où se trouvent les paramètres ; la poignée de visibilité et la liste {{ui:Visibilité}} dans Propriétés changent d'état. |
| Créer des blocs dynamiques du type de l'autre programme (étirement, retournement, recherche) | Les blocs créés dans CadCraft sont des blocs ordinaires ; {{cmd:BPARAMETER}} le signale. Vos propres paramètres et plusieurs paramètres de visibilité se trouvent dans le gestionnaire de paramètres (voir « Vos propres paramètres et états de visibilité » ci-dessous). |
| Ajouter ou effacer des objets d'un bloc à états de visibilité dans l'éditeur de blocs | Le bloc est alors enregistré comme bloc ordinaire (l'éditeur le signale à sa fermeture). |
| Les garder dynamiques dans une autre version de DWG ou en DXF | Ils sont enregistrés comme blocs ordinaires affichant l'état choisi, et l'enregistrement le signale. |

:::note
Déplacer ou modifier des objets dans {{cmd:BEDIT}} garde un bloc à états de visibilité dynamique. Un bloc sans états, ou dont des objets ont été ajoutés ou effacés dans l'éditeur, devient un bloc ordinaire.
:::

## Vos propres paramètres et états de visibilité

Un bloc créé dans CadCraft peut porter ses propres paramètres et **plusieurs** paramètres de visibilité, chacun avec ses états. Tapez {{cmd:BPARAMS}} (ou `BPM`) pour ouvrir le **gestionnaire de paramètres** du bloc que vous éditez dans {{cmd:BEDIT}}, du bloc de la référence sélectionnée, ou du bloc que vous nommez.

- **Paramètres** : un nom, un type (nombre, longueur, angle, nombre entier, oui/non), et une valeur ou une formule portant sur d'autres paramètres (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Résultat}} affiche le résultat. Une formule qui ne fonctionne pas, ou une valeur qui ne convient pas à son type (un nombre entier de 1.5), est refusée, et le gestionnaire indique pourquoi ; rien d'autre ne change.
- **Paramètres de visibilité** : {{ui:Ajouter un paramètre de visibilité}} en crée un avec un premier état. Chaque état peut être renommé, retiré (le dernier reste) ou recevoir un numéro « affiché quand ». Une formule choisit l'état à partir des paramètres (l'état dont le numéro correspond, sinon l'état à cette place dans la liste) ; sans formule, chaque référence choisit le sien.
- **Mettre des objets dans un état** : dans l'éditeur de blocs, sélectionnez les objets, tapez {{cmd:BPARAMS}}, puis cliquez sur {{ui:Placer les objets sélectionnés ici}} sur l'état. Les objets qu'aucun paramètre de visibilité ne liste s'affichent toujours.
- **Cette référence** : lancé sur une référence sélectionnée, le gestionnaire affiche aussi les valeurs et les états propres à cette référence.

Hors de l'éditeur de blocs, chaque modification est une seule étape d'annulation. Dans l'éditeur de blocs, les modifications relèvent de l'éditeur : {{ui:Enregistrer le bloc}} les conserve. `-BPARAMS` pose les mêmes questions sur la ligne de commande.

**Dans le fichier.** DWG et DXF conservent les paramètres, les objets qui appartiennent à chaque état et les valeurs propres à chaque référence, dans les enregistrements propres à CadCraft ; rouvrez le fichier dans CadCraft et tout revient. Un autre programme voit chaque référence comme le bloc avec tous ses objets, puisqu'un DWG ne contient qu'au plus un paramètre de visibilité par bloc de son propre type. Une référence déplacée par un autre programme, ou un bloc dont cet autre programme a modifié les objets, revient sans les parties qui ne correspondent plus (rien n'est deviné).

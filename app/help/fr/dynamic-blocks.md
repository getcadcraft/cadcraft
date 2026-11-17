---
title: Blocs dynamiques
summary: "Ce que CadCraft fait des blocs dynamiques d'un DWG : ils conservent leurs vrais noms, affichent l'état dans lequel ils ont été enregistrés, changent d'état de visibilité, affichent leurs autres valeurs et restent dynamiques à l'enregistrement."
keywords: bloc dynamique, blocs dynamiques, visibilité, état de visibilité, retournement, étirement, recherche, paramètres, personnalisé, propriétés de bloc, *u blocks, dynamique
from: 26b6aa80
---

## Ce qui fonctionne

Un DWG créé avec des blocs dynamiques s'ouvre avec les fonctions suivantes :

- **Leurs vrais noms.** Un bloc dynamique figure dans le panneau {{ui:Blocs}} sous son propre nom (« Receptacle », « Sink »), et non comme un bloc `*U` sans nom.
- **L'état dans lequel ils ont été enregistrés.** Chaque référence affiche exactement ce que l'autre programme montrait : l'état de visibilité auquel elle était réglée, étirée ou retournée comme elle avait été enregistrée.
- **Changer l'état de visibilité.** Sélectionnez une référence (ou plusieurs du même bloc), ouvrez {{ui:Propriétés}}, et dans la section {{ui:Personnalisé}} choisissez un autre état dans la liste {{ui:Visibilité}}. La référence affiche aussitôt cet état, ainsi que ses attributs : ceux que l'état masque disparaissent, ceux qu'il affiche apparaissent avec leurs valeurs. Une référence conserve toutes ses valeurs, donc rien ne revient vide ; {{ui:Propriétés}} liste les valeurs masquées, marquées « masqué ». {{key:Mod+Z}} remet l'ancien état en une seule étape.
- **Poignées.** Un bloc dynamique sélectionné affiche ses propres poignées là où se trouvent ses paramètres : un petit triangle pour l'état de visibilité (cliquez dessus pour la liste des états), des flèches aux extrémités d'une distance, une double flèche pour un retournement. Seule la poignée de visibilité agit aujourd'hui ; les autres l'indiquent dans la barre d'état.
- **Les autres valeurs, en lecture seule.** Sous la liste de visibilité, {{ui:Personnalisé}} affiche aussi les distances, les angles d'alignement, les états de retournement et les points du bloc tels que le dessin les contient.
- **Modifier les états de visibilité.** Ouvrez le bloc avec {{cmd:BEDIT}} : l'éditeur affiche un état, nommé dans la barre au-dessus du dessin (vous pouvez en choisir un autre à cet endroit). Tapez {{cmd:BVSTATE}} pour changer d'état, en ajouter un (en masquant tout, en affichant tout ou en gardant ce qui est affiché), le renommer ou le supprimer ; {{cmd:BVHIDE}} masque les objets sélectionnés dans l'état affiché ; {{cmd:BVSHOW}} affiche en estompé les objets masqués pour que vous cliquiez sur ceux à rétablir. Enregistrez le bloc : les références réglées sur un état renommé le gardent sous son nouveau nom, et celles réglées sur un état supprimé affichent le premier état.
- **Restent dynamiques.** Enregistrés en DWG dans la version du dessin d'origine, les blocs restent dynamiques, avec l'état que vous avez choisi : l'autre programme les ouvre comme les mêmes blocs dynamiques. Les états de visibilité que vous avez modifiés sont enregistrés aussi : leurs nouveaux noms, les états ajoutés et ce que chacun affiche.

## Ce qui est en lecture seule ou pas encore disponible

| Pas encore disponible | En attendant, aujourd'hui |
|---|---|
| Modifier les distances, les angles ou les retournements (actions d'étirement, de déplacement, de retournement) | Ils s'affichent en lecture seule dans {{ui:Personnalisé}} ; modifiez-les dans le programme qui a créé le bloc. |
| Paramètres de recherche, XY, de rotation et polaires | Non lus pour l'instant : la référence s'affiche telle qu'elle a été enregistrée. |
| Faire glisser les poignées de distance, de retournement et de point | Elles indiquent où se trouvent les paramètres ; la poignée de visibilité et la liste {{ui:Visibilité}} des Propriétés changent d'état. |
| Créer des blocs dynamiques (ajouter des paramètres, ou des états de visibilité à un bloc qui n'en a pas) | Les blocs créés dans CadCraft sont des blocs ordinaires ; {{cmd:BPARAMETER}} l'indique. |
| Ajouter ou effacer des objets d'un bloc à états de visibilité dans l'éditeur de blocs | Le bloc est alors enregistré comme un bloc ordinaire (l'éditeur le signale à sa fermeture). |
| Les garder dynamiques dans une autre version de DWG ou en DXF | Ils sont enregistrés comme des blocs ordinaires affichant l'état choisi, et l'enregistrement le signale. |

:::note
Déplacer ou modifier des objets dans {{cmd:BEDIT}} conserve un bloc à états de visibilité en mode dynamique. Un bloc sans états, ou dont des objets ont été ajoutés ou effacés dans l'éditeur, devient un bloc ordinaire.
:::

---
title: Attributs de bloc
summary: Voir et modifier les valeurs portées par une référence de bloc, comme un numéro d'élément ou un fabricant, et les conserver lorsque vous enregistrez une copie.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, cartouche, modifier sur place, éditeur d'attributs, attdef, définir un attribut, bedit, éditeur de bloc, bclose, attribut, attributs, attdef, attrib, étiquette, numéro d'élément, valeur, invisible, constant, bloc, propriétés, liste, étiquette d'équipement
from: 34d307c7
---

## Ce que sont les attributs

Un attribut est une valeur nommée qui voyage avec une référence de bloc : le numéro d'élément d'une étiquette d'équipement, le nom d'une étiquette de pièce, la résistance au feu d'une porte. La définition du bloc indique les attributs qu'il possède (chacun a une **étiquette**, une **invite**, une **valeur par défaut** et un emplacement, une taille et un angle pour son texte). Chaque référence au bloc porte ses propres valeurs.

Certains attributs sont **invisibles** : ils contiennent des données, comme un fabricant ou un numéro de modèle, mais ne sont jamais dessinés. D'autres sont **constants** : identiques pour chaque référence, fixés par le bloc.

## D'où viennent les attributs

- Les blocs des fichiers DWG et DXF que vous ouvrez conservent leurs attributs, avec les valeurs de chaque référence.
- Les blocs importés avec {{cmd:INSERT}} et l'option {{ui:Fichier}} conservent les leurs. Voir [Insérer depuis un fichier ou la bibliothèque](topic:insert-from-file-and-library).
- Les éléments de bibliothèque arrivent comme des blocs avec attributs : un numéro d'élément visible et les données de l'élément, invisibles.

- Les blocs que vous créez vous-même : définissez d'abord les attributs avec {{cmd:ATTDEF}} (ci-dessous), puis sélectionnez-les avec les autres objets lorsque vous créez le bloc.

## Définir des attributs pour vos propres blocs

1. Dessinez les lignes du bloc, par exemple une étiquette de pièce.
2. Choisissez {{ui:Blocs}} › {{ui:Plus}} › {{ui:Définir un attribut}}, ou tapez `ATT` et appuyez sur {{key:Enter}}.
3. L'historique affiche les modes (`Invisible=No Constant=No Preset=No`). Tapez `I`, `C` ou `P` pour en changer un, et appuyez sur {{key:Enter}} lorsqu'ils sont justes. Les valeurs invisibles sont conservées mais non dessinées ; une valeur constante est identique dans chaque référence ; une valeur prédéfinie n'est pas demandée lorsque vous insérez le bloc.
4. Tapez l'étiquette (par exemple `ROOM_NO` : majuscules, sans espaces), l'invite (`Numéro de pièce`) et une valeur par défaut (`101`).
5. Cliquez à l'endroit où la valeur ira, puis indiquez la hauteur et la rotation. L'étiquette s'affiche sur le dessin.
6. Créez le bloc avec {{cmd:BLOCK}}, en sélectionnant ensemble les lignes et les définitions d'attributs. La référence qui les remplace reçoit les valeurs par défaut ; chaque nouvel {{cmd:INSERT}} les demande.

Un attribut sélectionné affiche {{ui:Étiquette}}, {{ui:Invite}}, {{ui:Valeur par défaut}} et les modes dans {{ui:Propriétés}}.

## Modifier un bloc : l'éditeur de bloc

{{ui:Blocs}} › {{ui:Plus}} › {{ui:Modifier le bloc}} ({{cmd:BEDIT}}, `BE`) ouvre un bloc à part : tapez son nom (ou sélectionnez d'abord une référence). Une barre en haut indique le bloc que vous modifiez. Dessinez, effacez et modifiez ses objets avec les commandes habituelles, et ajoutez ou changez les définitions d'attributs. Puis cliquez sur {{ui:Enregistrer le bloc}} (ou tapez {{cmd:BCLOSE}} puis `S`) : chaque référence montre la modification, et un seul {{key:Mod+Z}} annule le tout. {{ui:Abandonner les modifications}} ({{cmd:BCLOSE}}, `D`) laisse le bloc tel qu'il était.

Lorsque vous avez ajouté, supprimé ou modifié des définitions d'attributs, l'enregistrement met aussi toutes les références à jour : les valeurs que vous avez saisies sont conservées, un nouvel attribut reçoit sa valeur par défaut, un attribut supprimé disparaît, et chaque attribut retourne à l'emplacement que la définition lui donne. L'historique indique combien de références ont été mises à jour.

## Modifier un cartouche sur place (REFEDIT)

Un cartouche sur une feuille se trouve souvent à l'intérieur d'un bloc. Pour en modifier les lignes ou les textes sans quitter la feuille :

1. Sélectionnez le cartouche, puis {{ui:Blocs}} › {{ui:Plus}} › {{ui:Modifier sur place}} (ou tapez {{cmd:REFEDIT}}).
2. Son contenu devient des objets ordinaires à leur place ; tout le reste est estompé et ne peut pas être modifié.
3. Modifiez, effacez ou dessinez : les nouveaux objets font partie du bloc.
4. Cliquez sur {{ui:Enregistrer le bloc}} dans la barre en haut (ou tapez {{cmd:REFCLOSE}} puis `S`). Chaque référence montre la modification, et un seul {{key:Mod+Z}} annule toute la modification. {{ui:Abandonner}} laisse le bloc tel qu'il était.

Un dessin lié, un bloc dynamique, ou une référence mise à l'échelle différemment en X et en Y ne peuvent pas être modifiés sur place : utilisez {{cmd:BEDIT}} (ou ouvrez le dessin lié).

:::note
Enregistrez ou abandonnez dans l'éditeur de bloc avant d'enregistrer le dessin : un fichier enregistré pendant que l'éditeur est ouvert contient le bloc tel qu'il était avant.
:::

## Remplir les valeurs lorsque vous placez un bloc

1. Tapez `I` et appuyez sur {{key:Enter}}, tapez le nom du bloc et appuyez sur {{key:Enter}}.
2. Cliquez à l'endroit où il va.
3. CadCraft demande chaque valeur, par exemple `Saisissez le numéro d'élément (ITEM) <>`. Tapez la valeur et appuyez sur {{key:Enter}}, ou appuyez sur {{key:Enter}} pour garder la valeur par défaut affichée entre chevrons.

Les valeurs que le bloc marque comme prédéfinies, et les valeurs constantes, ne sont pas demandées. Elles prennent leur valeur par défaut.

## Voir et modifier les valeurs

1. Cliquez sur une référence de bloc.
2. Dans le panneau de droite, sous {{ui:Attributs}}, chaque étiquette a sa valeur. Les valeurs invisibles affichent `hidden`.
3. Cliquez sur une valeur, tapez la nouvelle et appuyez sur {{key:Enter}}.

Le dessin affiche la nouvelle valeur immédiatement. Chaque modification est une étape : {{key:Mod+Z}} l'annule.

**L'éditeur d'attributs.** Double-cliquez sur une référence avec attributs (ou tapez {{cmd:EATTEDIT}}) : la boîte de dialogue {{ui:Modifier les attributs}} liste chaque étiquette avec son invite et sa valeur. Tapez les nouvelles valeurs ; cliquez sur une ligne pour modifier la {{ui:Hauteur}}, la {{ui:Rotation}}, le {{ui:Facteur de largeur}}, la {{ui:Justification}}, le {{ui:Calque}}, la {{ui:Couleur}} et {{ui:Invisible}} de cet attribut, pour cette référence seulement. {{ui:Appliquer}} garde la boîte de dialogue ouverte ; {{ui:OK}} applique et ferme. Chaque {{ui:Appliquer}} ou {{ui:OK}} est une étape d'annulation.

**Sur la ligne de commande**, {{cmd:ATTEDIT}} demande chaque valeur à son tour : tapez-en une nouvelle, ou appuyez sur {{key:Enter}} pour la garder.

## Modifier les définitions d'attributs (BATTMAN, ATTSYNC)

{{ui:Blocs}} › {{ui:Plus}} › {{ui:Gestionnaire d'attributs}} ({{cmd:BATTMAN}}) liste les attributs d'un bloc : modifiez une étiquette, une invite ou une valeur par défaut, cochez {{ui:Invisible}}, {{ui:Constant}} ou {{ui:Prédéfini}}, et déplacez-les vers le haut ou vers le bas (l'ordre dans lequel les valeurs sont demandées). Avec {{ui:Mettre à jour les références (valeurs gardées)}} coché, {{ui:Appliquer}} met aussi toutes les références à jour ; une étiquette renommée conserve ses valeurs. Chaque {{ui:Appliquer}} est une étape d'annulation.

{{cmd:ATTSYNC}} remet les références en accord avec les définitions de leur bloc, à la main : `S` choisit une référence, `N` nomme un bloc, `A` traite chaque bloc. Les valeurs sont conservées.

Les valeurs des champs propres à un élément de bibliothèque (son identifiant, sa version, sa licence et son attribution) sont affichées mais non modifiables, afin que la vérification des mises à jour continue de fonctionner. Son numéro d'élément et sa quantité, en revanche, peuvent être modifiés par vous.

## Les lister

Sélectionnez des références et tapez `LI` (pour {{cmd:LIST}}). L'historique affiche chaque attribut sous la forme `TAG = valeur`, avec `(invisible)` ou `(constant)` lorsque c'est le cas.

## Déplacer, faire pivoter et décomposer

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} et {{cmd:MIRROR}} conservent les valeurs ; le texte suit le bloc et reste lisible.
- {{cmd:EXPLODE}} transforme les attributs visibles en texte ordinaire avec leurs valeurs. Les attributs invisibles sont supprimés.

## Enregistrement

Un DWG et un DXF enregistrés conservent chaque attribut : les définitions de chaque bloc (y compris les invisibles, les constantes et les prédéfinies) et les valeurs de chaque référence. Les autres logiciels de CAO les lisent comme des attributs de bloc ordinaires.

Dans un DXF R12, une valeur de plus de 255 caractères est tronquée à 255, et l'historique l'indique.

## Erreurs courantes

- **Une valeur n'apparaît pas sur le dessin.** Elle est invisible, ou elle est vide. Les valeurs invisibles s'affichent toujours dans le panneau de droite.
- **La valeur que vous avez tapée est allée sur la ligne de commande.** Cliquez d'abord dans la zone de valeur du panneau de droite.

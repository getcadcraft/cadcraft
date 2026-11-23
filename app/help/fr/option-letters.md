---
title: Donner à vos options de commande vos propres lettres
summary: Répondez aux options d'une commande avec des lettres de votre choix, dans n'importe quelle langue, depuis un fichier texte modifiable, importable et exportable.
keywords: lettres d'option, optionkeys, optkeys, mot-clé d'option, mot-clé, redéfinir, correspondance, personnaliser, lettres personnalisées, polaire, réseau, P, PO, langue, traduire les options, forme courte, importer, exporter, ambigu
from: 7c8328c6
---

## Ce que vous allez apprendre

Comment changer les lettres que vous tapez pour répondre aux options d'une commande. Par exemple, {{cmd:ARRAY}} demande `[Rectangulaire/POlaire]` et prend `PO` pour Polaire ; vous pouvez faire en sorte que `P` ou d'autres lettres fassent la même chose, dans votre langue si vous le souhaitez.

## Comment répondre aux options

Lorsqu'une commande affiche des options entre crochets, les lettres en capitales sont celles à taper : `POlaire` s'écrit `PO`, et `Quitter (X)` s'écrit `X`.

Vous pouvez aussi taper moins de lettres. Si ce que vous tapez ne correspond qu'à une seule des options affichées, CadCraft la prend : avec `[Rectangulaire/POlaire]`, un `P` seul désigne Polaire. Si cela correspond à deux options, la ligne de commande les nomme et demande de nouveau :

```
C could be COUnt, COLumns. Type more letters.
```

Les nombres ne sont jamais devinés : une distance ou un nombre saisi est toujours lu comme un nombre.

## Ajouter vos propres lettres

Chaque commande garde ses lettres intégrées. Vous ajoutez les vôtres par-dessus, si bien que votre liste ne contient que ce que vous avez modifié.

1. Ouvrez {{ui:Paramètres}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Lettres d'option}}, puis cliquez sur {{ui:Modifier…}}. Ou tapez {{cmd:OPTIONKEYS}} et appuyez sur {{key:Enter}}.
2. Sous {{ui:Commande}}, choisissez la commande, par exemple `ARRAY`. La liste comprend toutes les commandes qui demandent des options, et elle commence par la commande que vous avez utilisée en dernier.
3. Sous {{ui:Option}}, choisissez l'option. Chacune affiche ses lettres intégrées entre crochets, par exemple `POlaire (PO)`.
4. Dans {{ui:Vos lettres}}, tapez les lettres voulues, par exemple `P`, puis cliquez sur {{ui:Ajouter}}.
5. L'option apparaît maintenant sous {{ui:Vos lettres}}, avec ses lettres intégrées et les vôtres. Cliquez sur {{ui:Enregistrer}}.

Lancez {{cmd:ARRAY}}, sélectionnez un objet et appuyez sur {{key:Enter}}. L'invite affiche vos lettres après l'option, `POlaire (P)`, et `P` y répond.

Pour en retirer une, cliquez sur la croix au bout de sa ligne, puis sur {{ui:Enregistrer}}. L'option revient à ses seules lettres intégrées.

## Lettres que vous ne pouvez pas utiliser

L'éditeur refuse les lettres qui masqueraient quelque chose que la ligne de commande lit déjà, et indique pourquoi :

- les lettres intégrées d'une autre option de la même commande (`R` pour Polaire dans `ARRAY`, où `R` désigne Rectangulaire) ;
- un mot d'accrochage aux objets de trois lettres ou plus, comme `END`, `MID` ou `CEN`, ainsi que les mots `ALL` et `LAST` ;
- les mêmes lettres pour deux options différentes d'une même commande.

Tant qu'une ligne est affichée en rouge, {{ui:Enregistrer}} est désactivé : corrigez la ligne ou supprimez-la, et le bouton redevient disponible. Les lettres intégrées d'une invite l'emportent toujours sur les vôtres, si bien que votre liste ne peut jamais empêcher une réponse intégrée de fonctionner. Les lettres qui correspondent au nom d'une commande, comme `L` ou `C`, sont sans problème : à une invite d'option, la ligne de commande lit une réponse, et non le lancement d'une commande.

La liste des options d'une commande provient des commandes qui partagent ses invites ; une commande peut donc parfois lister une option qu'elle ne demande que dans certains cas.

## Un seul choix pour toutes les commandes

Sous {{ui:Commande}}, choisissez {{ui:Toutes les commandes}}. Les options sont alors toutes celles que possède n'importe quelle commande, comme Quitter ou Annuler. Les lettres ajoutées ici répondent à cette option partout où une commande la propose. Les lettres ajoutées pour une commande précise l'emportent sur celles-ci.

## Lettres dans votre propre langue

Les lettres peuvent venir de n'importe quel alphabet, si bien que vous pouvez répondre aux options sans changer de clavier : ajoutez `З` pour Fermer sous {{ui:Toutes les commandes}}, ou `П` pour POlaire dans `ARRAY`.

CadCraft n'est livré qu'avec les lettres anglaises. Votre propre liste permet à vous, à votre bureau ou aux personnes qui partagent votre langue de compléter le reste, et {{ui:Exporter}} produit un fichier que vous pouvez transmettre.

## Modifier en texte

{{ui:Modifier en texte}} dans l'éditeur affiche la même liste sous forme de lignes de texte, une par option, ce que {{ui:Exporter}} enregistre aussi :

```
ARRAY.PO,  P
*.X,       Q
```

Chaque ligne se compose de la commande, d'un point, des lettres intégrées de l'option, d'une virgule et de vos lettres. Une étoile à la place de la commande désigne toutes les commandes. Une ligne qui commence par `;` est une note.

## Ce qui ne change pas

- Les lettres intégrées continuent de fonctionner à côté des vôtres.
- Les routines et les boutons de la barre d'outils continuent d'utiliser les lettres intégrées, si bien que rien de ce que vous avez chargé ne casse. Pour taper vous-même les lettres intégrées lorsque les vôtres gêneraient, placez d'abord un tiret bas : `_PO`.
- Le nom court d'une commande est autre chose : voir [Modifier les alias de commandes](topic:command-aliases).

## Lignes que CadCraft refuse

Lorsque vous modifiez en texte ou importez un fichier, l'éditeur signale chaque problème avec son numéro de ligne :

- la commande n'existe pas (l'alias d'une commande convient : `AR.PO` est lu comme `ARRAY.PO`) ;
- la ligne n'est pas de la forme `COMMANDE.OPTION, LETTRES` ;
- les lettres contiennent un espace ou un signe (lettres et chiffres seulement, 16 au maximum) ;
- les mêmes lettres répondent à deux options différentes d'une même commande.

## Importer et exporter

{{ui:Exporter}} enregistre vos lettres dans un fichier texte, pour les garder ou les transmettre à quelqu'un. {{ui:Importer…}} lit un tel fichier. Les deux sont dans l'éditeur et dans {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Lettres d'option}}.

Dans les Paramètres, {{ui:Importer…}} remplace votre fichier par celui que vous choisissez. Un fichier comportant une ligne en conflit ou inutilisable n'est pas retenu : ouvrez l'éditeur et importez-le là pour voir les lignes. Dans l'éditeur, l'importation remplit seulement la zone : rien ne change tant que vous ne cliquez pas sur {{ui:Enregistrer}}.

## Recharger ou retirer

Tapez {{cmd:REINIT}} et appuyez sur {{key:Enter}} pour appliquer à nouveau votre fichier. Pour retirer une lettre, supprimez sa ligne et cliquez sur {{ui:Enregistrer}}.

## Vos lettres suivent votre compte

Lorsque vous êtes connecté à getcadcraft.com, vos lettres sont conservées avec votre compte. Ouvrez CadCraft dans un autre navigateur ou sur un autre ordinateur avec le même compte, et elles arrivent d'elles-mêmes ; la ligne de commande indique `Lettres d'option depuis votre compte`. Si vous les avez modifiées à deux endroits, la copie la plus récente l'emporte et celle qu'elle remplace est conservée une fois.

{{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Lettres d'option}} indique où elles en sont. Hors connexion ou hors ligne, elles restent dans ce navigateur et sont envoyées à votre compte la prochaine fois que vous les enregistrez en étant connecté.

Voir aussi : [Modifier les alias de commandes](topic:command-aliases) · [Paramètres de CadCraft](topic:settings) · [Commandes](topic:commands)

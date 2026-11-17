---
title: Jeux de feuilles
summary: Réunir des feuilles de plusieurs dessins dans une seule liste numérotée, remplir leurs cartouches à partir du jeu, les publier dans un seul PDF et archiver le jeu dans un zip.
keywords: jeu de feuilles, gestionnaire de jeux de feuilles, ssm, sheetset, ccsheets, dst, liste des feuilles, index des feuilles, cartouche, champs, publier, renuméroter, archiver, etransmit, bordereau de transmission, sous-ensembles, page de garde, liste des dessins
from: 2c855720
---

## Ce que vous allez apprendre

Comment rassembler des feuilles (présentations) de plusieurs fichiers de dessin dans un **jeu de feuilles**, les numéroter et les intituler, faire remplir leurs cartouches à votre place, publier l'ensemble du jeu dans un seul PDF, et tout regrouper dans un zip à envoyer.

Un jeu de feuilles vit dans un petit fichier qui lui est propre, `<nom>.ccsheets`, dans le dossier qui contient les dessins. Le fichier du jeu liste les feuilles avec des chemins à partir de ce dossier, si bien que vous pouvez déplacer ou copier tout le dossier.

:::note
Ouvrir un dossier pour lire et écrire nécessite Chrome ou Edge (ils peuvent autoriser une page à travailler dans un dossier que vous choisissez), ou l'application de bureau. Les autres navigateurs ouvrent un jeu en lecture seule : vous pouvez le consulter et le publier, et le fichier du jeu est téléchargé au lieu d'être enregistré.
:::

## Créer un jeu

1. Trouvez la section {{ui:Jeu de feuilles}} dans le panneau de gauche, et ouvrez son menu {{ui:Jeu}}. Taper {{cmd:SHEETSET}} (ou `SSM`) vous y mène aussi.
2. Choisissez {{ui:Nouveau jeu…}}. Donnez un nom au jeu et, si vous le souhaitez, le nom et le numéro du projet.
3. Choisissez le dossier qui contient les dessins. Le fichier du jeu y est enregistré.

Pour ouvrir un jeu plus tard, choisissez {{ui:Ouvrir un jeu…}} et sélectionnez le même dossier. Si le dossier contient plusieurs jeux, CadCraft demande lequel.

## Ajouter des feuilles

1. Choisissez {{ui:Ajouter des feuilles depuis un dessin…}} et sélectionnez l'un des dessins du dossier.
2. CadCraft lit ce dessin en arrière-plan (il ne s'ouvre pas à l'écran) et liste ses feuilles. Cochez celles que vous voulez et cliquez sur {{ui:OK}}.
3. Sélectionnez une feuille et appuyez sur {{key:F2}} (ou {{ui:Renommer et renuméroter…}}) pour lui donner un numéro et un titre, par exemple `A-101` et `Plan d'étage`.

{{ui:Nouvelle feuille depuis un modèle…}} crée un nouveau dessin à partir de la feuille d'un autre dessin (son cartouche et ses fenêtres de présentation), nommé d'après la nouvelle feuille, et l'ajoute. Le jeu retient le dessin utilisé comme modèle.

## Organiser le jeu

- **Sous-ensembles** regroupent des feuilles, comme Architecture › Plans : sélectionnez l'endroit où le placer et choisissez {{ui:Nouveau sous-ensemble…}}.
- **Ordre** : faites glisser une feuille à un autre endroit de la liste, ou sur un sous-ensemble pour l'y déplacer. Au clavier, sélectionnez-la et appuyez sur {{key:Alt+Up}} ou {{key:Alt+Down}}.
- **Ouvrir une feuille** : double-cliquez dessus (ou appuyez sur {{key:Enter}}). Son dessin s'ouvre dans son propre onglet, sur cette feuille.
- **Retirer** : sélectionnez-la et appuyez sur {{key:Delete}}. Le dessin lui-même n'est pas modifié.
- **Annuler** : {{ui:Annuler la modification du jeu}} et {{ui:Rétablir la modification du jeu}} parcourent ce que vous avez modifié dans le jeu.
- **Renuméroter** : {{ui:Renuméroter les feuilles…}} numérote chaque feuille, ou celles d'un sous-ensemble, dans l'ordre de la liste : un préfixe, un début et un pas (`A-` et `101` donnent A-101, A-102 …).

Chaque modification est enregistrée immédiatement dans le fichier du jeu.

## Numéroter les feuilles à partir de leurs champs

Au lieu de numéroter les feuilles à la main, laissez une règle construire chaque numéro à partir des champs de la feuille : une feuille qui passe à un autre niveau ou à une autre discipline reçoit son nouveau numéro toute seule.

1. Donnez à chaque feuille ses champs : sélectionnez-la, cliquez sur {{ui:Renommer…}} et, dans {{ui:Champs de cette feuille}}, écrivez-en un par ligne, par exemple `DISCIPLINE = A` et `LEVEL = 1`. Un champ que tout le jeu partage (par exemple `DISCIPLINE = A`) peut figurer à la place dans les {{ui:Propriétés…}} du jeu.
2. Ouvrez le menu du panneau et cliquez sur {{ui:Règle de numérotation…}}.
3. Écrivez la règle, par exemple `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` s'incrémente parmi les feuilles dont les autres champs sont identiques : le niveau 1 reçoit A-101, A-102, et le niveau 2 recommence à A-201. `{SEQ:2}` l'écrit sur deux chiffres ; `{SUBSET}` est le nom du sous-ensemble où se trouve une feuille.
4. Choisissez ce qui se passe lorsqu'un champ change : {{ui:Renuméroter les feuilles}} garde les numéros conformes à la règle après chaque modification ; l'autre choix les numérote une seule fois, maintenant.

La règle est enregistrée dans le fichier du jeu. Pendant qu'il renumérote tout seul, modifiez les champs d'une feuille plutôt que son numéro.

## Remplir les cartouches à partir du jeu

Un cartouche reçoit son texte du jeu lorsque ses attributs portent le nom d'un champ :

| Balise | Ce qu'elle affiche |
|---|---|
| `SHEETNUMBER` (ou `SHEET_NO`, `DWG_NO`) | Le numéro de la feuille |
| `SHEETTITLE` (ou `TITLE`, `SHEET_TITLE`) | Le titre de la feuille |
| `SHEETDESC` | La description de la feuille |
| `PROJECTNAME` (ou `PROJECT`) | Le nom du projet |
| `PROJECTNUMBER` (ou `PROJECT_NO`, `JOB_NO`) | Le numéro du projet |
| `SHEETSETNAME` | Le nom du jeu |
| `SHEETINDEX`, `SHEETCOUNT` | « 3 sur 12 », et 12 |
| Les vôtres, comme `CLIENT` | Ce que vous avez saisi pour lui dans {{ui:Remplir les champs…}} |

{{ui:Remplir les champs…}} contient le nom et le numéro du projet, ainsi que vos propres champs, un par ligne sous la forme `NOM = valeur`.

{{ui:Mettre à jour les dessins}} écrit les numéros, les titres et les champs dans les cartouches de chaque dessin du jeu, et renomme l'onglet de chaque feuille comme le jeu l'indique (par défaut numéro et titre, comme `A-101 Plan d'étage` ; {{ui:Remplir les champs…}} › {{ui:Noms des onglets de présentation}} modifie cela). Chaque dessin est enregistré sur place, dans son propre format et sa version. Après avoir renuméroté ou renommé des feuilles, relancez-la : les onglets et les cartouches suivent.

## Une liste des feuilles sur la page de garde

Sélectionnez la page de garde dans la liste et choisissez {{ui:Mettre la liste des feuilles sur cette feuille}}. Un tableau de chaque feuille (numéro et titre, sous son sous-ensemble) est placé dans le coin supérieur gauche de la feuille. {{ui:Mettre à jour les dessins}} et {{ui:Publier en PDF}} le tiennent à jour. C'est un seul bloc, `CC_SHEETLIST` : déplacez-le comme toute référence de bloc.

## Publier le jeu

{{ui:Publier en PDF}} crée un seul PDF avec une page par feuille, dans l'ordre du jeu, à la taille de papier propre à chaque feuille, avec un signet par feuille (« A-101 — Plan d'étage »). Lorsqu'un sous-ensemble est sélectionné, CadCraft demande s'il faut publier seulement ce sous-ensemble. Les cartouches du PDF sont remplis à partir du jeu, même avant que vous ne mettiez à jour les dessins ; la publication ne modifie pas les dessins eux-mêmes. Le PDF est téléchargé.

{{ui:Publier en DWG…}} écrit chaque feuille dans un DWG qui lui est propre (DWG 2018) : le modèle et cette seule feuille, avec son cartouche rempli à partir du jeu, nommé d'après son numéro et son titre (`A-101 Plan du niveau 1.dwg`). Choisissez {{ui:DWG}}, ou {{ui:DWG + PDF}} pour y ajouter le PDF du jeu. Un `publish.json` liste chaque fichier avec sa taille et son SHA-256. Lorsque le dossier du jeu peut être écrit (CadCraft Studio, ou un dossier que vous avez choisi dans le navigateur), les fichiers vont dans un dossier `<nom du jeu> - publié` ; sinon ils sont téléchargés dans un seul zip. Les [remplacements de classes](topic:viewport-overrides) des fenêtres de présentation sont repris dans chaque DWG.

## Archiver le jeu

{{ui:Archiver en zip}} regroupe le fichier du jeu, chaque dessin qu'il utilise et ce que ces dessins lient (les dessins référencés, ceux qu'ils lient à leur tour, et les images), en conservant leurs dossiers, plus un `Transmittal.txt` qui liste chaque fichier. Un lien qui ne se trouve pas dans le dossier du jeu y est listé comme manquant. Les liens sont retrouvés par leur chemin depuis le dessin, puis par leur nom de fichier n'importe où dans le dossier.

## Le fichier du jeu

Le fichier `.ccsheets` est du JSON que vous pouvez lire dans n'importe quel éditeur de texte :

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Les chemins sont relatifs au dossier du jeu, avec `/` entre les dossiers. CadCraft vérifie le fichier à l'ouverture : un chemin absolu, une feuille sans fichier ni présentation, ou un texte qui n'est pas du texte brut est écarté, et l'historique l'indique.

## Dépannage

| Ce que vous voyez | Pourquoi | Que faire |
|---|---|---|
| « This folder is read only here » : « Ce dossier est en lecture seule ici » | Le navigateur ne peut pas écrire dans ce dossier | Utilisez Chrome ou Edge, ou l'application de bureau ; en attendant, {{ui:Télécharger le fichier du jeu}} conserve vos modifications |
| Une feuille est absente du PDF : « n'a pas de présentation nommée … » | La présentation de la feuille a été renommée ou supprimée dans son dessin | Ouvrez le dessin et vérifiez ses onglets ; retirez la feuille et ajoutez-la à nouveau |
| Un cartouche reste vide | Ses attributs portent d'autres balises | Renommez les balises des attributs avec les noms de champs ci-dessus (BEDIT) |
| « possède déjà une présentation nommée … donc cet onglet n'a pas été renommé » | Deux feuilles d'un même dessin recevraient le même nom d'onglet | Donnez à l'une d'elles un autre numéro ou un autre titre |

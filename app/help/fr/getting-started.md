---
title: Premiers pas avec CadCraft
summary: Ce que fait l'application de dessin CadCraft, où elle fonctionne, et votre premier dessin, de l'écran vide au fichier enregistré.
keywords: démarrer, premier dessin, nouveau, ouvrir, enregistrer, enregistrer sous, débuter, tutoriel, introduction, démarrage rapide
from: 1a56c575
---

CadCraft est une application de dessin 2D. Vous dessinez et modifiez des lignes, des arcs, des polylignes, du texte, des cotes et des blocs, vous préparez des feuilles avec cartouches et fenêtres de présentation, et vous les tracez en PDF. Elle ouvre les dessins DWG et DXF et les enregistre en DWG ou en DXF.

Elle fonctionne dans votre navigateur web. Il n'y a rien à installer : le site vous donne l'adresse, et toute l'application se charge dans la page. Vos dessins s'ouvrent depuis votre propre ordinateur et y sont enregistrés. **Rien n'est téléversé.**

Si vous avez déjà dessiné avec un autre logiciel, lisez [Si vous venez d'un autre logiciel de dessin](topic:coming-from) après cette page. La plupart des habitudes restent valables, et les quelques différences y sont listées.

## Vous préférez être guidé ?

Saisissez `TOUR` (ou cliquez sur {{ui:Faire la visite}} sur la carte de démarrage, ou sur {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Refaire la visite}}). Six courtes étapes dans une boîte au-dessus du dessin : tracer une ligne et un cercle, la déplacer, l'ajuster, effacer quelque chose et le coter. Chaque étape se termine quand vous l'avez faite, et vous pouvez passer une étape ou toute la visite. Elle ne démarre toute seule que la première fois. L'[aide-mémoire](topic:cheat-sheet) contient les 40 commandes que vous utiliserez le plus, et la [carte des commandes](topic:command-map) toutes les commandes existantes.

## Ce qu'il vous faut

- Un Chrome, Edge, Firefox ou Safari récent, sur un ordinateur Mac, Windows ou Linux. Voir [Navigateurs et plateformes](common:browsers).
- Une souris à molette est le plus confortable. Un pavé tactile convient aussi ; voir [Souris, pavé tactile et écran tactile](topic:mouse-trackpad-touch).
- Un clavier. CadCraft se pilote par des commandes saisies, comme la plupart des logiciels de dessin.

## L'idée en un paragraphe

Vous saisissez une commande (ou cliquez sur son bouton), et la ligne de commande en bas vous pose des questions une à une : « Indiquez le premier point », « Indiquez le point suivant ». Vous répondez à chaque question en cliquant dans le dessin ou en saisissant une valeur, puis en appuyant sur {{key:Enter}}. {{key:Esc}} annule. C'est tout le principe d'interaction ; le reste n'est que détail.

## Votre premier dessin

Vous allez tracer un rectangle de 4000 sur 3000 avec des lignes, placer un cercle au milieu, puis enregistrer le fichier.

1. Ouvrez CadCraft. La ligne de commande en bas affiche `Commande :` et la zone de dessin affiche une courte carte « Commencer un dessin ».
2. Saisissez `L` et appuyez sur {{key:Enter}}. Inutile de cliquer d'abord sur la ligne de commande : la saisie y va où que vous soyez.
3. L'invite devient `Indiquez le premier point :`. Saisissez `0,0` et appuyez sur {{key:Enter}}.
4. Saisissez `@4000,0` et appuyez sur {{key:Enter}}. Une ligne apparaît, vers la droite. Le `@` signifie « à partir du dernier point ».
5. Saisissez `@0,3000` et appuyez sur {{key:Enter}}.
6. Saisissez `@-4000,0` et appuyez sur {{key:Enter}}.
7. Saisissez `C` et appuyez sur {{key:Enter}}. `C` est l'option Fermer : la dernière ligne revient au premier point et la commande se termine.
8. Cliquez sur {{ui:Étendue}} dans le groupe Vue de la barre d'outils. Le rectangle remplit l'écran.

Vous devriez voir quatre lignes formant un rectangle, et l'historique au-dessus de la ligne de commande liste ce que vous avez saisi.

9. Saisissez `C` et appuyez sur {{key:Enter}} pour lancer la commande de cercle.
10. Saisissez `2000,1500` et appuyez sur {{key:Enter}} pour le centre.
11. Saisissez `500` et appuyez sur {{key:Enter}} pour le rayon.

Un cercle apparaît au milieu du rectangle.

12. Appuyez sur {{key:Mod+S}}, ou cliquez sur {{ui:Enregistrer}} dans le groupe Fichier.

Le navigateur télécharge `Drawing1.dwg` dans votre dossier de téléchargements habituel, et l'historique indique qu'une copie a été enregistrée en DWG. Ce fichier s'ouvre de nouveau dans CadCraft, et dans la plupart des autres logiciels de CAO. (Si vous avez choisi DXF dans {{ui:Enregistrer sous}} auparavant, dans ce navigateur, un nouveau dessin s'enregistre plutôt sous `Drawing1.dxf`.)

:::tip
Appuyez sur {{key:Enter}} sur une ligne de commande vide pour répéter la dernière commande. Vous pouvez aussi appuyer sur {{key:Space}} à la place de {{key:Enter}} : en dehors d'un texte, cela fait la même chose.
:::

## Ouvrir un dessin existant

1. Appuyez sur {{key:Mod+O}}, ou cliquez sur {{ui:Ouvrir}}.
2. Choisissez un fichier `.dwg` ou `.dxf` dans le sélecteur de fichiers.

Vous pouvez aussi faire glisser un fichier DWG ou DXF depuis {{pick:mac=le Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} et le déposer sur la zone de dessin. Le fichier est lu dans la page ; il ne quitte jamais votre ordinateur.

Voir [Fichiers : ce qui s'ouvre, ce qui s'enregistre](topic:files) pour ce qui est conservé et ce qui est converti.

## Enregistrer : à quoi s'attendre

Enregistrer dans un navigateur fonctionne autrement que dans un logiciel de bureau :

- {{ui:Enregistrer}} **télécharge toujours une nouvelle copie**. Il n'écrase pas le fichier que vous avez ouvert. Si un fichier du même nom se trouve déjà dans votre dossier de téléchargements, le navigateur ajoute en général un numéro, par exemple `Drawing1 (1).dwg`.
- {{ui:Enregistrer}} utilise le format du dessin : DWG si vous avez ouvert un DWG, DXF si vous avez ouvert un DXF. Pour choisir, appuyez sur {{key:Mod+Shift+S}} ou cliquez sur {{ui:Enregistrer sous}}, puis choisissez {{ui:DWG}} (et sa version), {{ui:DXF R12}} ou {{ui:DXF 2000}}. Voir [Enregistrer](topic:files#saving).
- Le fichier que vous avez ouvert n'est jamais modifié.
- Ouvrir un autre fichier, ou {{ui:Nouveau}}, le place dans son propre onglet au-dessus du dessin : rien de ce que vous avez ouvert n'est fermé. Si vous fermez l'onglet d'un dessin ou quittez la page avec des modifications non enregistrées, CadCraft demande d'abord : {{ui:Enregistrer une copie d'abord}}, abandonner ou {{ui:Annuler}}. Fermer l'onglet du navigateur affiche à la place la question propre au navigateur, « Quitter le site ? ».

L'enregistrement dans le cloud n'est pas encore disponible. Où vont vos fichiers et pourquoi ils restent privés est expliqué dans [Vos fichiers et votre vie privée](common:your-files).

## Où aller ensuite

Appuyez sur {{key:F1}} ou cliquez sur {{ui:Aide}} dans la barre du haut pour ouvrir cette aide à côté du dessin à tout moment. Elle fonctionne sans connexion.

- [L'écran de CadCraft](topic:workspace) nomme chaque barre et chaque panneau.
- [Dessiner avec des coordonnées](topic:draw-with-coordinates) est le meilleur premier pas à pas.
- [Clavier et souris](topic:keyboard) liste toutes les touches.
- Saisissez `HELP` à la ligne de commande pour obtenir la liste de toutes les commandes, ou lisez la [Référence des commandes](topic:commands).

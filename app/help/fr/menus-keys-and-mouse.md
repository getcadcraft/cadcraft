---
title: Menus, touches et souris
summary: Choisissez un style de menus qui correspond à votre façon de travailler, donnez à toute commande votre propre touche ou une touche qui saisit une commande, déplacez des commandes entre les onglets du ruban, et réglez l'action de la molette et des boutons de la souris.
keywords: style de menu, menus, ruban, barre d'outils, ligne de commande, raccourcis clavier, raccourcis, touches, personnaliser, réaffecter, réattribuer, touches de saisie, souris, molette, inverser, sens du zoom, bouton du milieu, bouton droit, panoramique, exporter, importer, changer, familier, dessin classique
from: 8bbf4f88
---

Les commandes de CadCraft sont les mêmes quelle que soit la façon dont vous les atteignez, et la ligne de commande est toujours là, avec ses alias (`L`, `C`, `TR` …). Un **style de menus** détermine seulement où se placent les boutons à l'écran, comment ils sont nommés et quelles touches les lancent. Choisissez-le dans {{ui:Paramètres}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, touches et souris}} ; le changement est immédiat, et ce navigateur s'en souvient.

## Les trois styles

| Style | Ce que vous obtenez |
|---|---|
| {{ui:CadCraft}} | La barre d'outils propre à CadCraft : Fichier, Dessiner, Modifier, Annoter, Paramétrique, Blocs, Feuilles, Édition et Vue, chacun avec un menu {{ui:Plus}}. Le point de départ. |
| {{ui:Dessin classique}} | Un ruban disposé comme les anciens logiciels de dessin 2D : un menu {{ui:Fichier}} et des boutons rapides, puis les onglets {{ui:Accueil}} (Dessin, Modification, Annotation, Calques, Bloc, Propriétés, Utilitaires, Presse-papiers), {{ui:Insérer}}, {{ui:Annoter}}, {{ui:Paramétrique}}, {{ui:Vue}}, {{ui:Gestion}}, {{ui:Sortie}} et {{ui:3D}}. Tapez les commandes comme d'habitude. Le bouton du milieu fait un panoramique ; un clic droit équivaut à {{key:Enter}}, et glisser avec le bouton droit ne fait rien. |
| {{ui:Ruban}} | Un ruban d'onglets de tâches simples : {{ui:Dessiner}}, {{ui:Modifier}}, {{ui:Annoter}}, {{ui:Paramétrique}}, {{ui:Blocs}}, {{ui:Feuilles}}, {{ui:Vue}}, {{ui:3D}} et {{ui:Outils}}, avec un menu {{ui:Fichier}} et des boutons rapides à droite. Les boutons du milieu et de droite font un panoramique, comme dans le style propre à CadCraft. |

Tous les styles conservent les touches de CadCraft : {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, ainsi que {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}} et {{key:F12}} pour les aides au dessin. Les lettres ne sont jamais des touches : CadCraft les saisit dans la ligne de commande.

Les rubans contiennent aussi les outils du panneau Calques et les aides au dessin de la barre d'état. L'onglet {{ui:3D}} se remplit une fois l'onglet 3D situé sous le dessin ouvert ; un outil 3D choisi dans l'onglet Objet ouvre d'abord l'onglet 3D, et un outil 2D choisi dans l'onglet 3D revient d'abord à l'onglet Objet.

:::tip
Une touche qui appartient à la disposition propre à CadCraft, mais que votre style a attribuée à une autre commande, ne fait rien, et la barre d'état indique où sa commande est passée (« Dans Mes touches, Ortho est Ctrl+Alt+O »). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} et les flèches gardent toujours leur sens. Pendant qu'une commande s'exécute, ou pendant la saisie de lettres dans la ligne de commande, les touches reviennent à la ligne de commande.
:::

## Personnaliser

1. Choisissez le style le plus proche de ce que vous souhaitez, puis cliquez sur {{ui:Personnaliser…}}.
2. Dans {{ui:Touches et menus}}, trouvez une commande (la zone de recherche aide). Cliquez sur {{ui:Ajouter une touche}}, puis appuyez sur la touche. Cliquez sur une touche pour la retirer.
3. Avec un ruban, {{ui:Emplacement}} déplace la commande vers un autre onglet et panneau, vers le menu {{ui:Fichier}}, ou vers {{ui:Touches seulement}}.
4. Dans {{ui:Souris}}, réglez la molette et les boutons qui font le panoramique du dessin.
5. Donnez-lui un nom, puis cliquez sur {{ui:Enregistrer}}.

Enregistrer un style intégré crée votre propre copie (« Mon dessin classique ») ; le style intégré ne change jamais. Une touche attribuée à deux commandes s'affiche en rouge et doit être corrigée avant l'enregistrement.

## Touches qui saisissent une commande

{{cmd:SHORTCUTS}} (Vue › Plus › {{ui:Raccourcis clavier…}}) attribue à une touche une ligne de commande complète, comme {{key:Ctrl+Alt+L}} pour `LINE` ou {{key:F9}} pour `ZOOM E`. Ces touches appartiennent au style utilisé : la première fois que cette version s'ouvre, les touches que vous aviez créées dans une version précédente sont reportées une seule fois dans votre propre style « Mes touches CadCraft », et fonctionnent comme avant. L'exportation du style les inclut.

## Souris

- **Molette** : {{ui:Faire défiler vers le haut zoome en avant}} (le réglage de départ) ou {{ui:Faire défiler vers le haut zoome en arrière}}, et à quelle vitesse. Un pincement sur le pavé tactile zoome toujours dans le sens du mouvement de vos doigts.
- **Faire un panoramique du dessin avec** : le bouton du milieu, le bouton droit, ou les deux. Un clic droit sans glisser équivaut toujours à {{key:Enter}}. Le bouton gauche sert toujours à désigner et à dessiner dans CadCraft ; le cocher ne change donc rien ici.
- **Glisser dans les vues 3D** : l'onglet 3D garde ses propres boutons dans tous les styles (gauche pour orbiter, milieu et droit pour le panoramique).

## Emporter avec soi

{{ui:Exporter}} enregistre le style utilisé dans un petit fichier `.ccinput.json` ; {{ui:Importer…}} en ajoute un, depuis un autre ordinateur ou d'un collègue. Un fichier importé ne peut renvoyer qu'aux commandes propres à CadCraft : tout le reste est laissé de côté et compté dans la barre d'état. {{ui:Supprimer ce style}} retire un de vos propres styles.

:::note
Ces réglages restent dans ce navigateur. {{ui:Utiliser ce style dans toutes les applications}} sous les cartes de style fait s'ouvrir chaque application dans son style correspondant (sa propre barre d'outils, un ruban ou Dessin classique), avec les modifications que vous avez faites dans chacune. CadCraft n'a pas de style à barre de menus : lorsque la barre de menus d'une autre application est choisie pour toutes les applications, CadCraft conserve sa propre barre d'outils.
:::

Voir aussi : [Clavier et souris](topic:keyboard) · [Paramètres de CadCraft](topic:settings) · [Venir d'autres logiciels de dessin](topic:coming-from) · [Alias de commande](topic:command-aliases)

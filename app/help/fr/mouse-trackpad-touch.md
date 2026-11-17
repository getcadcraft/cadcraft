---
title: Souris, pavé tactile et écran tactile
summary: Comment zoomer, faire un panoramique, faire un clic droit et désigner dans CadCraft avec une souris à molette, un pavé tactile Mac ou PC, ou un écran tactile, et ce qui diffère selon les navigateurs.
keywords: pavé tactile, trackpad, magic mouse, tactile, tablette, ipad, panoramique, zoom, pincer, clic droit, deux doigts, bouton central, navigateur, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft est conçu pour une souris à molette. Tout fonctionne aussi avec un pavé tactile, moyennant quelques habitudes à prendre. Les écrans tactiles permettent de désigner, mais avec des limites.

## Souris à molette

- **Zoom :** faites tourner la molette. Le dessin zoome autour du réticule : pointez ce que vous voulez voir.
- **Panoramique :** maintenez la molette enfoncée et glissez, ou glissez avec le bouton droit.
- **Zoom sur tout :** double-cliquez sur la molette, ou cliquez sur {{ui:Étendue}}.
- **Revenir à la vue précédente :** cliquez sur {{ui:Précédent}} dans le groupe Vue, ou saisissez `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Une série de crans de molette compte pour une seule vue, donc un seul {{ui:Précédent}} l'annule. Enregistrez les vues auxquelles vous revenez avec {{cmd:NAMEDVIEW}} (`NV`).
- **Entrée :** clic droit.

## Pavé tactile

:::mac
- **Panoramique :** déplacez deux doigts sur le pavé tactile, dans n'importe quelle direction : le dessin suit vos doigts. Vous pouvez aussi glisser avec un clic à deux doigts maintenu (un glissement du bouton droit).
- **Zoom :** pincez avec deux doigts. Le zoom suit le réticule.
- **Clic droit (Entrée) :** cliquez avec deux doigts. Activez « Clic secondaire » dans **Réglages système**, puis dans **Pavé tactile**, si cela ne fait rien. Le Ctrl+clic peut compter comme un clic ordinaire dans CadCraft plutôt que comme un clic droit : utilisez donc le clic à deux doigts.
- **Zoom sur une zone :** cliquez sur {{ui:Fenêtre (W)}} dans le groupe Vue, puis cliquez sur deux coins.
:::

:::windows linux
- **Panoramique :** déplacez deux doigts sur le pavé tactile, dans n'importe quelle direction : le dessin suit vos doigts. Vous pouvez aussi glisser avec le bouton droit maintenu.
- **Zoom :** pincez avec deux doigts. Le zoom suit le réticule.
- **Clic droit (Entrée) :** cliquez avec deux doigts, ou cliquez dans le coin inférieur droit du pavé tactile, selon les réglages de votre pavé.
- **Zoom sur une zone :** cliquez sur {{ui:Fenêtre (W)}} dans le groupe Vue, puis cliquez sur deux coins.
:::

Maintenir {{key:Space}} et glisser ne fait **pas** de panoramique dans CadCraft : {{key:Space}} équivaut à {{key:Enter}}.

Une molette de souris zoome toujours, un cran à la fois. Un pavé tactile qui envoie son défilement par crans entiers, comme une molette, zoome avec un défilement à deux doigts au lieu de faire un panoramique : dézoomez, pointez la zone voulue, puis zoomez à nouveau. L'onglet 3D garde ses propres déplacements au pavé tactile (voir [Modèle en 3D](topic:3d-solids#look-around)).

## Écrans tactiles et tablettes

CadCraft interprète un doigt comme un clic de souris :

- Un appui désigne un point ou un objet, ou sélectionne.
- Faire glisser un doigt sur un espace vide trace un lasso (vers la droite d'abord une fenêtre, vers la gauche d'abord une capture ; voir [Sélection au lasso](topic:lasso-selection)).
- Dans {{cmd:TRIM}} et {{cmd:EXTEND}}, faire glisser un doigt à travers des morceaux les ajuste ou les prolonge tous.
- Faire glisser la poignée d'un objet sélectionné déplace la poignée (les poignées et la boîte de désignation sont plus grandes pour un doigt).
- **Pincez** avec deux doigts pour zoomer autour du point situé entre eux ; déplacez deux doigts ensemble pour faire un **panoramique**. Un second doigt annule ce que le premier a commencé, de sorte qu'un pincement ne laisse jamais de trace.
- Un **appui long** (maintenez immobile environ une demi-seconde) est un clic droit : {{key:Enter}}. Il termine une commande, achève une sélection ou répète la dernière commande.

Sous la ligne de commande apparaît une **rangée de touches** : {{ui:Échap}}, {{ui:Annuler}}, {{ui:Rétablir}}, les caractères qu'une tablette masque (`@` `,` `<` `'` `"` `-`), {{ui:Accrochage}}, {{ui:Ortho}}, un bouton clavier et un grand {{ui:Entrée}}. Touchez le bouton clavier (ou la ligne de commande) pour saisir une commande ou un nombre.

Il n'y a pas de survol : les repères d'accrochage ne s'affichent qu'à l'endroit où se trouve votre doigt.

:::touch
Vous utilisez un écran tactile. Pour autre chose qu'un simple coup d'œil, un clavier et une souris ou un pavé tactile branchés rendent CadCraft beaucoup plus facile à utiliser.
:::

## Navigateurs

CadCraft fonctionne de la même façon dans Chrome, Edge, Firefox et Safari, sur Mac, Windows et Linux. Les différences sont minimes :

| Sujet | À savoir |
|---|---|
| Ouverture d'un DWG | Les grands dessins prennent quelques secondes à lire dans tous les navigateurs ; la ligne d'état affiche « Lecture … » entre-temps |
| Téléchargements | Chaque navigateur décide où vont les téléchargements et s'il demande d'abord ; voir [Navigateurs et ordinateurs](common:browsers) |
| Ouvrir pour imprimer | Ouvre le PDF dans un nouvel onglet. Si le navigateur bloque les fenêtres surgissantes, CadCraft télécharge le PDF à la place |
| F7 | Firefox peut proposer la navigation par curseur ; choisissez Non |
| Quitter avec des modifications non enregistrées | Chaque navigateur affiche sa propre question « Quitter le site ? », que CadCraft ne peut pas modifier |

:::safari
Dans Safari, un PDF ouvert avec {{ui:Ouvrir pour imprimer}} peut s'afficher dans l'onglet sans s'imprimer : utilisez **Fichier**, puis **Imprimer**.
:::

:::firefox
Firefox peut demander ce qu'il faut faire de chaque téléchargement. Choisissez d'enregistrer le fichier, ou modifiez ce réglage une fois pour toutes dans les paramètres de Firefox, sous Téléchargements.
:::

---
title: Esquisser au stylet et obtenir une géométrie précise
summary: Dessinez à main levée avec un stylet, une souris ou un doigt : chaque tracé devient une ligne, un cercle, un arc, un rectangle ou une polyligne propre dès que vous relevez le stylet, accroché à ce qui est déjà dessiné, avec sa dimension prête à être saisie par-dessus.
keywords: esquisse, stylet, main levée, doigt, nettoyer, précis, accrochage, SKETCHLIVE, SKETCHFIX, dimension, saisir par-dessus
from: cd87eb75
---

Démarrez {{cmd:SKETCHLIVE}} (ou choisissez **Dessiner › Plus › Esquisser au stylet**) puis tracez un trait en appuyant et en faisant glisser. Lorsque vous relevez le stylet, CadCraft interprète votre intention et la place dans le dessin :

| Votre tracé | Ce que vous obtenez |
|---|---|
| Presque droit | Une ligne. Une ligne presque horizontale ou verticale est rendue exactement horizontale ou verticale. |
| Fermé et rond | Un cercle |
| Partie d'une forme ronde | Un arc |
| Fermé avec quatre angles droits | Un rectangle |
| Tout le reste | Une polyligne à angles droits |

Les extrémités d'un tracé sont attirées vers l'extrémité la plus proche de ce qui est déjà dessiné, de sorte qu'un mur esquissé rejoint le mur voisin.

## Saisir la dimension par-dessus

Après chaque tracé, la ligne de commande affiche sa dimension (la **longueur** d'une ligne, le **rayon** d'un cercle ou d'un arc, la **largeur** d'un rectangle) comme valeur par défaut. Appuyez sur {{key:Enter}} pour la conserver, ou saisissez un nombre ou une longueur comme `12'6"` pour la remplacer. Une ligne conserve sa première extrémité, un cercle son centre, un rectangle son premier coin.

Appuyez sur {{key:Enter}} sur une invite vide pour terminer, ou saisissez `U` pour annuler le dernier tracé. La session entière constitue une seule étape d'annulation.

## Nettoyer plusieurs tracés à la fois

{{cmd:SKETCHFIX}} collecte les tracés et les rend tous précis lorsque vous appuyez sur {{key:Enter}}, ce qui convient à une disposition approximative tracée rapidement.

:::note
Tout est calculé sur votre ordinateur à l'aide de règles, sans modèle et sans rien envoyer ailleurs.
:::

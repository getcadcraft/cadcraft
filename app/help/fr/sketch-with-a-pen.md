---
title: Dessiner au stylet et obtenir une géométrie précise
summary: Dessinez à main levée avec un stylet, une souris ou un doigt : chaque trait devient une ligne, un cercle, un arc, un rectangle ou une polyligne nette au moment où vous levez le stylet, accroché à ce qui est déjà dessiné, avec sa taille prête à être retapée.
keywords: croquis, stylet, plume, main levée, doigt, nettoyer, précis, accrochage, SKETCHLIVE, SKETCHFIX, taille, retaper par-dessus, pression, épaisseur de ligne, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Lancez {{cmd:SKETCHLIVE}} (ou choisissez **Dessiner › Plus › Dessiner au stylet**), puis tracez un trait en appuyant et en glissant. Lorsque vous levez le stylet, CadCraft comprend ce que vous vouliez dire et le place dans le dessin :

| Votre trait | Ce que vous obtenez |
|---|---|
| Presque droit | Une ligne. Une ligne presque horizontale ou verticale est rendue exactement horizontale ou verticale. |
| Fermé et rond | Un cercle |
| Partie d'une forme ronde | Un arc |
| Fermé, avec quatre angles droits | Un rectangle |
| Autre chose | Une polyligne aux côtés à angle droit |

Les extrémités d'un trait sont attirées sur l'extrémité la plus proche de ce qui est déjà dessiné ; ainsi, un mur esquissé rejoint le mur voisin.

## Retaper la taille

Après chaque trait, la ligne de commande affiche sa taille (la **longueur** d'une ligne, le **rayon** d'un cercle ou d'un arc, la **largeur** d'un rectangle) comme valeur par défaut. Appuyez sur {{key:Enter}} pour la garder, ou tapez un nombre ou une longueur comme `12'6"` pour la remplacer. Une ligne garde sa première extrémité, un cercle son centre, un rectangle son premier coin.

Appuyez sur {{key:Enter}} à une invite vide pour terminer, ou tapez `U` pour annuler le dernier trait. La session entière est une seule étape d'annulation.

## Nettoyer plusieurs traits à la fois

{{cmd:SKETCHFIX}} collecte les traits et les rend tous précis lorsque vous appuyez sur {{key:Enter}}, ce qui convient à une disposition rapide et approximative.

:::note
Tout est calculé sur votre ordinateur selon des règles, sans modèle, et rien n'est envoyé nulle part.
:::

## La pression règle l'épaisseur de ligne

Là où le stylet est activé pour les applications (Paramètres › Global › Périphériques de saisie › Stylet), un trait tracé au stylet conserve chaque point donné par le stylet, avec sa pression. Un trait léger donne un objet fin, et un trait appuyé un objet épais : la pression moyenne du trait choisit 0.18, 0.25, 0.35 ou 0.50 mm, et la ligne de commande indique laquelle. Les traits tracés à la souris ou au doigt prennent l'épaisseur de ligne courante, comme avant. {{cmd:PENPRESSURE}} désactive cela (ou le réactive) ; le choix est conservé dans ce navigateur.

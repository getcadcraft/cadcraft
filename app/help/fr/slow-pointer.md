---
title: Le pointeur saute ou accuse un retard sur le dessin
summary: Que faire lorsque le réticule ne suit pas la souris de façon fluide, sur un ordinateur ancien ou lent.
keywords: saut du curseur, retard du pointeur, réticule lent, curseur saccadé, vieil ordinateur, ancienne carte graphique, carte graphique intégrée, accélération matérielle, pointeur plus fluide, ordinateur portable lent
from: 39dc9057
---

CadCraft s'exécute dans le navigateur (CadCraft Studio est aussi une vue de navigateur), donc rien n'y est conçu pour une carte graphique plutôt qu'une autre. Le réticule est dessiné par l'application, ce qui signifie qu'il ne peut se déplacer pas plus vite que l'application ne peut dessiner une image.

## Laisser CadCraft réduire les options

1. Ouvrez {{ui:Paramètres}} (l'engrenage en haut à droite) et restez sur l'onglet {{ui:CadCraft}}.
2. Choisissez {{ui:Pointeur plus fluide sur les ordinateurs lents}}.
3. Sélectionnez {{ui:Activé}}.

Une fois cette option activée, le pointeur en croix de votre ordinateur remplace le réticule et la case de sélection dessinés (y compris le réticule en plein écran), et l'objet sous le pointeur s'allume lorsque le pointeur est immobile, au lieu de s'allumer pendant le déplacement. Les accrochages aux objets, le repérage et l'élastique fonctionnent comme auparavant.

{{ui:Automatique}} correspond au démarrage de CadCraft : l'application surveille la durée des images pendant que vous déplacez le pointeur, et active cette option d'elle-même lorsqu'elles restent lentes pendant quelques secondes. Elle vous en informe une fois. {{ui:Non}} conserve le réticule dessiné, quelle que soit la vitesse.

## Si c'est toujours lent

- Vérifiez que l'accélération matérielle est activée dans votre navigateur : ouvrez `chrome://gpu` (ou `edge://gpu`) dans un nouvel onglet. Si les premières lignes indiquent "Software only" ou "Disabled", le navigateur dessine sans la carte graphique. La mise à jour du pilote graphique rétablit souvent le fonctionnement.
- Fermez les autres onglets et programmes gourmands, et essayez une fenêtre de navigateur plus petite.
- Signalez-le via {{ui:Aide}}, {{ui:Signaler un problème}} : indiquez si vous utilisez le navigateur ou CadCraft Studio, sa version, et ce qu'affiche la page gpu.

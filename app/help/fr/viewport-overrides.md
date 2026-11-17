---
title: Remplacements de classe par fenêtre de présentation
summary: Sur une feuille, masquer une classe ou lui donner une autre couleur, épaisseur de ligne ou remplissage dans une seule fenêtre de présentation ; le modèle et les autres fenêtres ne changent pas.
keywords: fenêtre de présentation, remplacement de classe, remplacement de fenêtre, masquer une classe dans la fenêtre, feuille, présentation, VPLAYER, tracer, Vectorworks
from: c1a2b51f
---

Une feuille montre souvent le même modèle plus d'une fois : un plan avec le mobilier et un plan sans, ou un plan d'éclairage où seuls les luminaires sont en couleur. Un remplacement de classe de fenêtre de présentation modifie l'affichage d'une [classe](topic:classes) **dans cette fenêtre seulement**.

1. Ouvrez la feuille et sélectionnez une fenêtre de présentation.
2. Ouvrez le panneau Classes (`CLASSES`) et choisissez la classe.
3. Sous {{ui:Cette fenêtre}}, cochez {{ui:Masquer dans cette fenêtre}}, ou réglez {{ui:Couleur ici}}, {{ui:Épaisseur de ligne ici}} ou {{ui:Remplissage ici}}.

La liste ci-dessous affiche chaque classe que cette fenêtre modifie. {{ui:Effacer les remplacements de cette fenêtre}} les supprime toutes. Chaque modification est une étape d'annulation.

## Ce que modifie un remplacement

- **Masquer** cache la classe et toutes les classes placées sous elle, dans cette fenêtre.
- **Couleur, épaisseur de ligne et remplissage** modifient les objets de la classe dont la valeur n'est pas définie sur l'objet lui-même, c'est-à-dire les objets qui la prennent par classe ou par calque. Un objet ayant sa propre couleur la conserve, comme pour un remplacement de calque de fenêtre.

Les remplacements s'affichent à l'écran, dans les tracés et dans les PDF, y compris pour un jeu de feuilles publié en PDF. Ils fonctionnent avec les calques gelés de la fenêtre et ses remplacements de calque.

Les remplacements sont enregistrés avec le dessin en DWG et DXF (avec la liste des classes, dans le bloc `CADCRAFT_CLASSES`) et reviennent sur la même fenêtre quand le fichier est ouvert dans CadCraft.

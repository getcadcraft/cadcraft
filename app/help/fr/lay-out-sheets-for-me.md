---
title: Mettre en page automatiquement les feuilles
summary: Répartissez les parties d'un dessin sur des feuilles automatiquement : CadCraft choisit un format de papier et une échelle standard qui conviennent, place chaque partie avec un titre et son échelle dessous, et tout reste modifiable.
keywords: feuilles, mise en page, présentations, papier, échelle, automatique, AUTOSHEET, cartouche, fenêtres de présentation, vues nommées
from: 7f315dff
---

Choisissez **Vue › Plus › Mettre en page automatiquement les feuilles** (ou tapez {{cmd:AUTOSHEET}}). CadCraft trouve les parties de votre dessin (vos vues nommées, ou les groupes distincts du modèle), choisit un format de papier et une échelle standard auxquels elles s'ajustent, puis les place sur de nouvelles feuilles avec un cartouche, une légende et l'échelle sous chaque partie.

Avant son exécution, vous pouvez modifier son fonctionnement : **Parties** (vues nommées, groupes, tout le dessin, ou laisser CadCraft décider), **Papier** (automatique ou un format tel que `iso-a1`), **Échelle** (une seule pour toutes les parties, ou chacune la sienne) et **Feuilles** (combien de parties partagent une feuille).

Les feuilles sont des feuilles ordinaires : déplacez une fenêtre de présentation, modifiez son échelle ou supprimez une feuille comme d'habitude. Appuyez une fois sur {{key:Ctrl+Z}} pour annuler toutes les nouvelles feuilles.

## Légendes numérotées

Dans {{cmd:AUTOSHEET}}, choisissez **Légendes numérotées** pour ajouter une légende numérotée sous les vues de chaque feuille. Elle liste les calques dessinés dans ces vues, une ligne numérotée chacune, sous forme de texte brut que vous pouvez modifier comme tout autre texte. Choisissez **Fichier** pour lire votre propre liste de légendes (un numéro et ses mots par ligne, séparés par une tabulation, une virgule ou un point-virgule) : un calque dont le nom correspond à un numéro de votre liste reprend ses mots. Aucune liste de légendes n'est fournie avec l'application.

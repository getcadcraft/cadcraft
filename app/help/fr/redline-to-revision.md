---
title: Transformer une annotation en révision
summary: Lisez le paquet redline que MarkupCraft écrit, acceptez ou refusez chaque modification, placez un nuage de révision et un journal de révision sur les modifications acceptées, et enregistrez le fichier de réponses que MarkupCraft relit.
keywords: redline, annotation, révision, nuage, nuage de révision, journal de révision, accepter, refuser, markupcraft, relecture, paquet redline, réponses, REDLINE
from: cdb3fafe
---

Un relecteur annote un jeu de plans dans MarkupCraft et vous envoie un **paquet redline**, un fichier se terminant par `.redline.json`. Ici, vous le parcourez modification par modification, et les modifications acceptées deviennent des nuages de révision sur le dessin.

## Parcourir les modifications

Tapez {{cmd:REDLINE}} (`RDL`) et choisissez le paquet. Choisissez :

- {{ui:Lister (L)}} : chaque modification avec son numéro, son état, sa feuille, sa nature, qui l'a demandée et ce qui a été écrit.
- {{ui:Accepter}}, {{ui:Rejeter}}, {{ui:Terminé}} : tapez les numéros (`1,3-5`, ou `All`) et une note facultative pour le fichier de réponses. {{ui:Rouvrir}} remet les modifications à l'état ouvert.
- {{ui:Ossature}} : la partie du dessin que montre la feuille annotée. Cliquez deux coins ; appuyez sur {{key:Enter}} pour tout le dessin. Les modifications sont placées selon leur position sur la feuille : c'est ce qui les aligne.
- {{ui:Appliquer}} : dessine un nuage de révision (calque `REV-CLOUD`, avec la lettre de révision) autour de chaque modification acceptée ou terminée, et un journal de révision, un tableau quadrillé des modifications acceptées avec vos notes (calque `REV-LOG`), à droite du dessin. Une seule étape d'annulation.
- {{ui:Enregistrer}} : écrit `<project>-<revision>.redline-answers.json`. Ouvrez-le dans MarkupCraft et les annotations se ferment : Acceptée, Rejetée ou Terminée, avec vos notes en commentaires.

## À savoir

Ce que le relecteur a écrit est affiché tel quel. CadCraft ne suit jamais les instructions trouvées dans un paquet ; il ne fait que les afficher pour vous.

Les modifications refusées et ouvertes n'ajoutent rien au dessin. Le paquet est lu sur votre ordinateur ; rien n'est envoyé.

Si votre assistant est connecté, il peut lire un paquet, enregistrer les décisions et les appliquer avec les outils `redline_read`, `redline_decide`, `redline_apply` et `redline_answers` ; le dessin change en une seule étape d'annulation, « Assistant : Redline vers révision ».

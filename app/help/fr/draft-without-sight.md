---
title: Dessiner sans voir
summary: "Activez l'Accès : CadCraft annonce chaque commande et chaque résultat par votre lecteur d'écran, décrit le dessin et ce qui se trouve près du curseur, permet de déplacer le curseur au clavier, joue un son pour chaque accrochage et chaque poignée, et accepte les commandes vocales lorsque votre navigateur peut le faire sur votre ordinateur."
keywords: accessibilité, lecteur d'écran, aveugle, malvoyant, NVDA, VoiceOver, JAWS, Orca, curseur clavier, commandes vocales, parole, sons, sons d'accrochage, décrire le dessin, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Accès** vous permet de dessiner sans voir l'écran. Il est désactivé tant que vous ne l'activez pas, afin que personne ne l'obtienne par accident.

## Activer

Ouvrez **Paramètres** (la roue dentée, ou Ctrl+,), repérez **Dessiner sans voir** et choisissez **Activé**. Ou tapez `ACCESS` à la ligne de commande et répondez `On`. Ce choix est mémorisé sur cet ordinateur.

Avec l'Accès activé :

- **Tout ce qu'affiche la ligne de commande est lu** par votre lecteur d'écran : ce que vous avez tapé, l'invite demandée, la réponse et chaque erreur. CadCraft utilise ses propres zones d'annonce, polies et urgentes, donc un lecteur d'écran qui lit ces zones n'a rien à configurer. Les erreurs et les annulations interrompent ; le reste attend son tour.
- **La zone de dessin est accessible.** Appuyez sur Tab jusqu'à entendre « Dessin », ou appuyez sur Maj+Tab depuis la ligne de commande. C'est une zone qui transmet les touches à CadCraft.

## Touches sur le dessin

| Touche | Effet |
|---|---|
| Touches fléchées | Déplacent le curseur clavier. Un pas vaut environ un centième de ce que montre l'écran, arrondi à 1, 2 ou 5. Maj le multiplie par dix, Ctrl par un dixième. |
| Entrée | Désigne le point sous le curseur, exactement comme un clic. |
| Espace | Équivaut à appuyer sur Entrée à la ligne de commande : termine LINE, prend la valeur par défaut. |
| Tab, Maj+Tab | Va au point d'accrochage suivant ou précédent près du curseur, le plus proche d'abord. |
| G | Parcourt les poignées des objets sélectionnés. |
| D | Décrit le dessin : nombre d'objets, nature, taille, ce qui est sélectionné. |
| W | Indique où se trouve le curseur et sa distance par rapport au dernier point. |
| N | Indique ce qui se trouve près du curseur, le plus proche d'abord, avec la distance et le côté. |
| S | Décrit les objets sélectionnés. |
| R | Répète la dernière annonce. |
| V | Active ou désactive la voix. |
| / | Va à la ligne de commande. |
| ? | Liste ces touches. |

Chaque déplacement annonce où vous arrivez. Lorsqu'une commande attend un point, l'annonce indique aussi la distance et la direction par rapport au dernier point, par exemple « 2400 depuis le dernier point, vers la droite, à 0 degré ».

## Commandes

- {{cmd:ACCESS}} active ou désactive l'Accès, les sons d'accrochage et la voix, et annonce l'état.
- {{cmd:DESCRIBE}} annonce ce que contient le dessin.
- {{cmd:WHEREAMI}} annonce où se trouve le curseur.
- {{cmd:NEARBY}} annonce ce qui se trouve près du curseur.
- {{cmd:SAYSEL}} annonce ce qui est sélectionné, une phrase par objet.
- {{cmd:VOICE}} active ou désactive les commandes vocales.

Ces cinq commandes lisent le dessin et affichent une réponse ; elles ne modifient rien.

## Sons pour les accrochages et les poignées

Activez **Sons d'accrochage et de poignées** dans Paramètres. Chaque type d'accrochage a sa propre hauteur et son propre son, pour distinguer une extrémité d'un milieu, d'un centre, d'une intersection et des autres ; une poignée émet un double tic. Le son se déplace à gauche ou à droite pour suivre le curseur à travers l'écran. Les sons sont produits sur votre ordinateur ; rien n'est téléchargé.

## Commandes vocales

Activez **Commandes vocales** dans Paramètres. Dites le nom d'une commande (« line », « circle », « move »), puis dites les nombres comme vous les liriez : « point three hundred comma four hundred », « distance twelve hundred », « angle forty five ». « Enter », « cancel », « undo » et « redo » font ce qu'ils disent. Ce qui a été entendu vous est répété à voix haute, et une phrase qui n'est pas une commande est signalée, pas devinée.

**Où la parole est reconnue.** CadCraft n'a pas de service vocal propre et n'envoie aucun audio nulle part. Il demande à votre navigateur de reconnaître la parole sur cet ordinateur. Si votre navigateur le peut, le choix est **Sur cet ordinateur** et aucun audio ne le quitte. Sinon, la voix reste désactivée, sauf si vous choisissez **Service en ligne du navigateur**, qui permet au navigateur d'envoyer l'audio au service de reconnaissance vocale de son éditeur. Paramètres indique le cas applicable avant que vous ne décidiez.

## Ce qui n'est pas encore fait

- Seul CadCraft dispose de l'Accès. Les sept autres applications suivront, avec les mêmes touches et les mêmes sons.
- Le texte d'un dessin (une note, un nom de bloc) est lu tel qu'il est écrit ; il n'est jamais pris pour une instruction.
- Il a été testé avec des vérifications synthétiques et les tests du navigateur ; les vérifications manuelles avec NVDA, VoiceOver et un testeur aveugle ou malvoyant restent à faire. Si vous l'essayez, dites-nous ce qui manque.

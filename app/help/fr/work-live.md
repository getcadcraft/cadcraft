---
title: Travailler ensemble sur un même dessin avec Live TeamWork
summary: Ce qui change dans CadCraft pendant une session Live TeamWork depuis CadCraft Studio : curseurs et sélections des autres, objets en cours de modification, verrous de l'hôte, votre propre annulation, et la jonction depuis un navigateur sur le même réseau.
keywords: live, live teamwork, studio live, ensemble, collaborer, coédition, session, partager en direct, rejoindre, curseur, maintenu, modification, verrou, livelock, liveunlock, livehold, calque maintenu, zone maintenue, cadenas, annulation, hôte, assistant, même fichier, nombreuses personnes, lent, limite, qui a modifié, modifications récentes, journal des modifications
from: 0497d2a3
---

## Ce que vous allez apprendre

Ce qui se voit et ce qui arrive à vos modifications quand plusieurs personnes travaillent sur un même dessin en même temps. CadCraft Studio démarre et rejoint la session Live TeamWork (Partager en direct, Rejoindre) ; cette page porte sur le dessin lui-même.

## Tout le monde dessine en même temps

Dessinez et modifiez comme d'habitude. Vos propres modifications s'affichent aussitôt, même avant que les autres ne les aient, et celles des autres apparaissent sur votre écran un instant après qu'elles les ont faites. Toutes les commandes fonctionnent : dessin, modification, calques, blocs, feuilles, cotes, contraintes.

Deux personnes peuvent modifier le même objet. Quand vous modifiez des choses différentes, comme la couleur et une extrémité d'une même ligne, les deux modifications sont conservées. Quand vous modifiez la même chose, la modification la plus récente l'emporte.

Ce qui reste à vous seul : le calque courant, la couleur et la hauteur de texte des nouveaux objets, vos réglages de cotes, votre vue, la vue fractionnée et le SCU. Le dessin est partagé ; la façon dont vous le regardez ne l'est pas.

## Les autres personnes sur votre dessin

- **Curseurs :** le pointeur de chaque personne s'affiche avec son nom, dans sa propre couleur, ainsi que la commande qu'elle exécute. Vous voyez les curseurs des personnes qui travaillent près de ce qui est affiché à votre écran.
- **Sélections :** ce que quelqu'un a sélectionné est contouré dans sa couleur.
- **En cours de modification :** un objet que quelqu'un a sélectionné porte une étiquette du type « Ana modifie ». Vous pouvez encore changer sa couleur ou le déplacer, mais vous ne pouvez pas le supprimer, le décomposer ni le modifier par saisie tant qu'elle ne l'a pas relâché. En le sélectionnant, vous savez qui le détient.
- **Qui l'a modifié en dernier :** sélectionnez un objet qu'une autre personne a modifié dans cette session, et la ligne de commande indique qui l'a modifié et quelle était la modification (« Ben a modifié cela en dernier : CIRCLE. »). Le panneau Live de Studio liste chaque modification récente sous {{ui:Modifications récentes}}. Rien de cela n'est enregistré dans le dessin : cela dure le temps de la session.

## Maintenir un calque ou une zone pendant que vous y travaillez

Sur un grand dessin à plusieurs personnes, indiquez quelle partie vous revient pour l'instant :

1. Tapez `LIVEHOLD` et appuyez sur {{key:Enter}}.
2. Choisissez `L` et tapez un nom de calque (Entrée conserve le calque courant), ou choisissez `A` et désignez deux coins d'une zone.
3. Les modifications des autres sur ce calque, ou sur des objets de cette zone, sont annulées, et ils sont informés que vous y travaillez. Vous voyez votre zone sous forme de cadre en tirets ; les autres la voient dans votre couleur avec votre nom, et les calques que vous maintenez sont listés en haut à gauche de leur dessin.
4. `LIVEHOLD`, puis `R`, libère tout ce que vous maintenez. Quitter la session le libère aussi.

Chacun dans la session peut maintenir, l'hôte compris ; les verrous de l'hôte s'appliquent toujours en plus. Une réservation n'est jamais enregistrée dans le fichier.

## Quand une modification est annulée

La copie du dessin de l'hôte vérifie chaque modification. Quelques-unes ne peuvent pas passer, et CadCraft les annule sur votre écran et indique pourquoi sur la ligne de commande, par exemple :

- quelqu'un a supprimé l'objet, ou le calque ou le bloc dont il a besoin, juste avant vous ;
- quelqu'un modifie cet objet, ou maintient son calque ou la zone où il se trouve ;
- l'hôte l'a verrouillé ;
- le bloc que vous placez a été purgé, ou un calque que vous supprimez contient encore des objets.

## Annuler annule votre propre travail

{{key:Mod+Z}} et {{ui:Annuler}} annulent votre dernière commande, en entier, et laissent le travail des autres intact. Si quelqu'un a modifié la même chose depuis, rien n'est annulé et la ligne de commande indique qui l'a modifié. {{key:Mod+Y}} rétablit.

## Verrous (l'hôte)

L'hôte peut protéger des objets, ou un calque entier, pour que personne ne les modifie, l'hôte compris, jusqu'à leur déverrouillage :

1. Sélectionnez les objets, puis tapez `LIVELOCK` et appuyez sur {{key:Enter}}. Ou tapez `LIVELOCK` sans rien sélectionner et choisissez `L` pour verrouiller un calque par son nom : les objets ajoutés à ce calque plus tard sont verrouillés aussi.
2. Les objets verrouillés sont dessinés en tirets, avec une étiquette « Verrouillé par l'hôte » sur l'écran de chacun.
3. `LIVEUNLOCK` les déverrouille de la même façon.

Les verrous appartiennent à la session : ils prennent fin avec elle et ne sont jamais enregistrés dans le fichier.

## Rejoindre avec le même fichier

Si vous avez ouvert le fichier même que celui de l'hôte (depuis un dossier partagé ou la même copie), rejoignez depuis votre propre fenêtre CadCraft dans Studio : ouvrez le panneau {{ui:Live}} et utilisez {{ui:Rejoindre ici}} avec le code de l'hôte. Seules les modifications faites depuis que l'hôte a ouvert le fichier circulent, si bien qu'un grand dessin est prêt tout de suite. Si votre fichier est un autre, le dessin de l'hôte remplace le vôtre à l'écran (votre fichier reste tel quel). Cela ne fonctionne que tant que votre dessin n'a pas changé depuis que vous l'avez ouvert.

## Assistants dans une session live

Un assistant connecté à votre fenêtre CadCraft (voir l'aide sur le travail avec les assistants IA) rejoint la session comme son propre participant, affiché pour tous comme « Assistant (via <votre nom>) ». L'hôte le laisse entrer, comme pour une personne ; l'assistant de l'hôte rejoint aussitôt. Ses modifications ont leur propre annulation : votre {{key:Mod+Z}} annule votre travail, et l'annulation de l'assistant n'annule que ses propres actions. Il quitte la session quand vous le déconnectez ou quand vous partez, et il ne peut travailler dans la session que tant que vous pouvez modifier.

## Rejoindre depuis un navigateur

Un coéquipier sans Studio peut scanner l'image sous le code de l'hôte avec un téléphone, une tablette ou un ordinateur sur le même réseau. CadCraft s'ouvre dans le navigateur, demande votre nom sur la ligne de commande, et se remplit du dessin de l'hôte dès que l'hôte vous laisse entrer. Un lien d'invitation permet à quelqu'un de rejoindre depuis un autre réseau : l'hôte a besoin d'un poste Team Cloud Plan pour l'application, tous les autres rejoignent gratuitement, et le lien ne fonctionne que tant que la session de l'hôte est ouverte.

## Beaucoup de personnes sur un même dessin

Chaque modification est envoyée à tout le monde dans la session ; plus il y a de personnes, plus chaque modification met de temps à atteindre chacune d'elles, et les ordinateurs portables et les connexions plus lentes prennent du retard en premier. Une session compte en général 20 personnes ; l'hôte peut en autoriser davantage pour une session donnée (voir l'aide sur le travail ensemble en direct). Si le dessin semble lent avec de nombreuses personnes, moins de personnes, moins d'entre elles qui modifient au même moment, ou une meilleure connexion aident.

## Quand la session se termine

Seul l'hôte enregistre le dessin. Quand l'hôte termine la session, tous les autres gardent une copie non enregistrée : enregistrez-la si vous voulez la conserver.

:::note
Ce qui a été annulé est dessiné par-dessus les objets qui l'entourent sur votre propre écran, jusqu'à ce que vous rouvriez le dessin. Les hachures et les objets remplis qui se chevauchent peuvent paraître différents de la copie de l'hôte ; le dessin lui-même est le même.
:::

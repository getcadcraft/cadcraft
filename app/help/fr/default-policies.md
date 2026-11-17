---
title: "Règles par défaut : régler ce avec quoi démarre un nouveau dessin"
summary: Indiquer une fois les unités, le format de longueur, la précision, la hauteur du texte et le papier des feuilles avec lesquels démarre un nouveau dessin, pour le travail métrique comme impérial, et partager ces règles dans le bureau sous forme d'un petit fichier.
keywords: défaut, défauts, règles par défaut, règle, standard de bureau, valeurs par défaut du bureau, gabarit, nouveau dessin, unités, insunits, format de longueur, architecturales, précision, luprec, hauteur du texte, papier de feuille, a1, partager, exporter, importer, json
from: 7b80fd13
---

## Ce que vous allez faire

Indiquez à CadCraft avec quoi doit démarrer un nouveau dessin, afin que personne dans le bureau n'ait à lancer UNITS et à modifier les mêmes réglages à chaque fois. C'est un module complémentaire : il est désactivé tant que vous ne l'activez pas, et une règle que vous ne réglez pas laisse la valeur propre à CadCraft exactement telle quelle.

:::note
Ces règles valent pour les **nouveaux** dessins et les **nouvelles** feuilles. Un dessin déjà commencé n'est pas modifié, et il n'est pas modifié non plus lorsque vous l'ouvrez.
:::

## Étapes

1. Ouvrez Paramètres, allez dans {{ui:Modules complémentaires}} et activez {{ui:Règles par défaut}}.
2. Dans Paramètres, ouvrez l'onglet **CadCraft** et choisissez {{ui:Règles par défaut}} dans la liste à gauche.
3. Réglez les règles voulues. Chacune démarre sur **celle de CadCraft**. Une règle qui comporte une case **Métrique** et une case **Impérial** prend une valeur pour chaque type de dessin ; ne remplissez que celles dont vous avez besoin.
4. Il n'y a pas de bouton Enregistrer : chaque modification est enregistrée dès que vous la faites.
5. Démarrez un nouveau dessin. Il a les unités, le format de longueur, la précision et la hauteur de texte que vous avez réglés, et sa première nouvelle feuille est sur le papier que vous avez choisi.

## Les règles

- **Unités d'un nouveau dessin** : aucune, millimètres, centimètres, mètres, pouces ou pieds.
- **Format de longueur** et **Précision de longueur** : ce que règle la commande UNITS, pour un nouveau dessin.
- **Hauteur des nouveaux textes**, en unités de dessin.
- **Papier d'une nouvelle feuille** : le papier qu'utilise {{ui:Nouvelle feuille}}.
- **Tailles d'annotation sur papier** (Paramètres › Global › Règles par défaut) : les hauteurs du bureau, en millimètres tels qu'imprimés. CadCraft utilise celle des notes et des libellés : {{cmd:ANNOSCALE}} règle la hauteur de départ du nouveau texte à cette hauteur à l'échelle d'annotation. Voir [Unités, papiers et échelles](topic:units-papers-scales#annotate-by-scale).

Un dessin en pouces ou en pieds utilise les valeurs **Impérial** ; tout autre dessin utilise les valeurs **Métrique**. Un dessin sans unités utilise le système défini dans Paramètres › Global › Règles par défaut, ou le métrique si aucun n'est défini.

## Partager dans le bureau

1. Dans Paramètres, ouvrez l'onglet **Global** et choisissez {{ui:Règles par défaut}}.
2. Cliquez sur {{ui:Enregistrer dans un fichier}}. Vous obtenez un petit fichier se terminant par `.ccdefaults.json`.
3. Sur un autre ordinateur, activez le module complémentaire, ouvrez le même emplacement et cliquez sur {{ui:Charger depuis un fichier}}. Les règles du fichier remplacent celles de cet ordinateur.

Un seul fichier contient les règles de toutes les applications CadCraft ; le même fichier fonctionne donc dans BimCraft.

## Bon à savoir

- Il n'existe pas de règle pour l'échelle d'une feuille : la vue d'une nouvelle feuille est ajustée au dessin, et vous réglez son échelle sur la feuille.
- Il n'existe pas de règle pour un style de cote : un nouveau dessin n'a pas de styles de cote nommés. Réglez vos cotes avec DIMSTYLE, ou partez d'un dessin qui contient les vôtres.
- Le fichier est du JSON simple et lisible. Une règle que le fichier nomme et que cette version ne connaît pas est ignorée et signalée dans le message ; le reste se charge.
- Les règles sont conservées dans ce navigateur, et non dans le dessin. Désactivez le module complémentaire et tout redevient celui de CadCraft.

---
title: Définir la police et la taille du texte avec des styles de texte
summary: Créez des styles de texte nommés avec une police, une hauteur, une largeur et une inclinaison, définissez-en un comme actuel pour le nouveau texte, et modifiez un style pour changer tout le texte qui l'utilise.
keywords: style de texte, style, STYLE, ST, TEXTSTYLE, -STYLE, police, hauteur de texte, facteur de largeur, oblique, inclinaison, changer de police, style standard, appliquer un style, DDSTYLE
from: bd5a4883
---

## Ce que vous allez faire

Créer un style de texte nommé `Notes` avec sa propre police et sa propre hauteur, l'utiliser pour le nouveau texte, puis modifier plus tard le style pour que toutes les notes qui l'utilisent changent en une fois.

## Étapes

1. Saisissez {{cmd:STYLE}} (`ST`) puis appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Style de texte}} dans la barre d'outils {{ui:Dessiner}}. La boîte de dialogue {{ui:Style de texte}} liste les styles du dessin. Chaque dessin contient `Standard`.
2. Cliquez sur {{ui:Nouveau…}}, saisissez `Notes` comme nom du nouveau style, puis cliquez sur {{ui:OK}}. La barre d'état indique « Style de texte Notes créé et défini comme actuel. »
3. Dans {{ui:Police}}, choisissez ou saisissez un nom de police. Réglez {{ui:Hauteur (0 = demander à chaque fois)}} sur un nombre, comme `2.5`, afin que chaque nouveau texte ait cette hauteur. Laissez `0` pour être interrogé à chaque fois.
4. Réglez {{ui:Facteur de largeur}} et {{ui:Angle d'inclinaison (°)}} si vous voulez des lettres plus étroites, plus larges ou inclinées. La ligne d'exemple montre le résultat.
5. Cliquez sur {{ui:Fermer}}. Saisissez du texte avec {{cmd:TEXT}} ou {{cmd:MTEXT}} : le nouveau texte prend le style actuel.
6. Pour utiliser un style déjà créé, rouvrez la boîte de dialogue, sélectionnez-le dans la liste et cliquez sur {{ui:Définir l'actuel}}.
7. Pour appliquer un style à un texte déjà dessiné, sélectionnez ce texte, ouvrez la boîte de dialogue, choisissez le style et cliquez sur {{ui:Appliquer au texte sélectionné}}.

## Modifier un style ultérieurement

Modifiez la police, la hauteur, la largeur ou l'inclinaison d'un style dans la boîte de dialogue : chaque texte qui l'utilise suit la modification, en une seule étape d'annulation ({{key:Mod+Z}}). La barre d'état indique combien de textes ont suivi.

## Notes

- {{ui:Supprimer}} refuse `Standard`, ainsi qu'un style encore utilisé par un texte : changez d'abord ce texte pour un autre style.
- Les styles sont enregistrés dans la table STYLE du dessin, de sorte que les fichiers DXF et DWG les conservent.
- En ligne de commande, `-STYLE` fait de même avec des options (Current, New, Font, Height, Width, Oblique, Delete, List).
- Une police absente de l'ordinateur qui ouvre le dessin est affichée avec une autre police.

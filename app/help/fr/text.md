---
title: Ajouter du texte et des étiquettes
summary: Placer des étiquettes de pièce avec du texte sur une ligne, rédiger des notes à retour à la ligne avec du texte paragraphe saisi sur place, et modifier le texte ensuite.
keywords: texte, dtext, mtext, mleader, multileader, repère, revcloud, nuage de révision, cloud, rechercher, remplacer, rechercher et remplacer, paragraphe, retour à la ligne, interligne, étiquette, note, annotation, hauteur, justifier, textmask, masque de fond, masque, wipeout, rotation, modifier le texte, ddedit, textedit, police
from: 4b76be99
---

## Ce que vous allez créer

Deux étiquettes de pièce, centrées dans leurs pièces, une note qui se répartit sur sa largeur, puis une correction sur l'une des étiquettes.

## Hauteur du texte et échelle du dessin

La hauteur du texte est exprimée en unités de dessin. Dans un dessin en millimètres qui sera tracé à 1:50, un texte haut de 2.5 mm sur papier doit mesurer 2.5 × 50 = 125 unités de hauteur dans le modèle. Sur un onglet de feuille, vous dessinez en unités de papier : 2.5 y représente donc 2.5 mm sur papier.

## Placer une étiquette centrée

1. Tapez `DT` puis appuyez sur {{key:Enter}} (ou cliquez sur {{ui:Texte}} dans la barre d'outils). L'invite affiche `Spécifiez le point de départ du texte [Justification]:`.
2. Tapez `J` puis appuyez sur {{key:Enter}}.
3. À l'invite `Saisissez une option [Gauche (L)/Centre/Droite (R)/Milieu/Haut gauche (TL)/MC] <L>:`, tapez `MC` puis appuyez sur {{key:Enter}}.
4. À `Spécifiez le point d'insertion du texte`, cliquez au milieu d'une pièce.
5. À `Spécifiez la hauteur`, tapez `250` puis appuyez sur {{key:Enter}}.
6. À `Spécifiez l'angle de rotation du texte <0>`, appuyez sur {{key:Enter}}.
7. À `Saisissez le texte`, tapez `CUISINE` puis appuyez sur {{key:Enter}}.

L'étiquette apparaît, centrée sur le point sur lequel vous avez cliqué.

8. Appuyez sur {{key:Enter}} sur l'invite `Saisissez le texte` vide pour terminer la commande.

## Rédiger une note à retour à la ligne

Le texte paragraphe ({{cmd:MTEXT}}) se répartit sur une largeur et se saisit directement sur le dessin.

1. Tapez `T` puis appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Paragraphe}} dans la barre d'outils.
2. À `Spécifiez le premier coin`, cliquez à l'endroit où doit se trouver le coin supérieur gauche de la note.
3. Pour modifier d'abord la hauteur, tapez `H`, appuyez sur {{key:Enter}}, tapez `250` puis appuyez sur {{key:Enter}}.
4. À `Spécifiez le coin opposé [Hauteur/Justification/Interligne (L)/Rotation (R)/Largeur (W)]`, cliquez à droite du premier coin. La distance horizontale est la largeur à laquelle le texte revient à la ligne ; la profondeur du clic vers le bas ne limite rien.
5. Une zone s'ouvre sur le dessin, avec le curseur à l'intérieur. Tapez `TOUTES LES COTES SONT EN MILLIMÈTRES SAUF INDICATION CONTRAIRE`. Les mots reviennent à la ligne à la largeur définie pendant la saisie.
6. Appuyez sur {{key:Enter}} pour commencer un nouveau paragraphe et tapez `VÉRIFIER SUR CHANTIER`.
7. Appuyez sur {{key:Mod+Enter}}, cliquez sur {{ui:OK}}, ou cliquez n'importe où en dehors de la zone. La note devient un seul objet.

La barre au-dessus de la zone modifie pendant la saisie {{ui:Hauteur}}, {{ui:Interligne}} (1 correspond à la normale, 1.5 à une fois et demie), {{ui:Largeur}} (0 = pas de retour à la ligne) et {{ui:Justification}}. {{key:Esc}} ou {{ui:Annuler}} ferme la zone sans rien ajouter.

Options au second coin : `H` hauteur, `J` justification (`TL` haut gauche … `BR` bas droite : le coin ou le milieu de la zone qui reste en place), `L` interligne, `R` rotation, `W` une largeur saisie au lieu du second coin.

:::note
Pendant que la zone est ouverte, {{key:Space}} saisit un espace et {{key:Enter}} commence un nouveau paragraphe. Un DWG enregistré conserve le texte paragraphe en MTEXT ; un DXF R12 ne connaît pas le texte paragraphe, donc chaque ligne est enregistrée comme texte distinct.
:::

### Plusieurs lignes simples à la place

{{cmd:TEXT}} (`DT`) demande une ligne à la fois : chaque {{key:Enter}} commence la ligne suivante, 1.667 fois la hauteur du texte plus bas, et chaque ligne est un objet distinct. Appuyez sur {{key:Enter}} sur une ligne vide pour terminer.

## Options de justification

| Option | Le point sur lequel vous cliquez est |
|---|---|
| Gauche (par défaut) | L'extrémité gauche de la ligne de base |
| Centre | Le milieu de la ligne de base |
| Droite | L'extrémité droite de la ligne de base |
| Milieu, MC | Le milieu du texte, en largeur comme en hauteur |
| TL | Le coin supérieur gauche |

## Modifier le texte

1. Double-cliquez sur un objet texte. Il s'ouvre dans la même zone que le texte paragraphe, avec le curseur à la fin.
2. Modifiez les mots.
3. Appuyez sur {{key:Mod+Enter}} ou cliquez en dehors de la zone. Le texte du dessin change ; {{key:Esc}} le laisse tel qu'il était.

{{cmd:TEXTEDIT}} (`ED`) fait la même chose : choisissez un texte après l'autre, puis appuyez sur {{key:Enter}} pour terminer.

Sélectionnez un texte pour le modifier dans le panneau de droite : {{ui:Texte}}, {{ui:Hauteur}}, {{ui:Largeur de retour à la ligne}} (0 = pas de retour à la ligne), {{ui:Interligne}}, {{ui:Rotation}}, la position X et Y et {{ui:Justification}}. La liste {{ui:Justification}} propose aussi Bas gauche, que le texte provenant d'autres logiciels utilise parfois.

## Mise en forme du texte paragraphe provenant d'autres logiciels

Le texte paragraphe d'un DWG ou d'un DXF peut contenir des codes : couleurs mot par mot, gras et italique, soulignement, surlignement et barré, fractions empilées comme 1/2, et une hauteur différente pour un mot. CadCraft conserve ces codes, les dessine (à l'écran et dans un PDF tracé) et les réenregistre sans modification.

Lorsque vous modifiez un tel texte (double-clic, {{cmd:TEXTEDIT}}, le champ Texte du panneau de droite, ou {{cmd:FIND}} avec remplacement), vous modifiez ses mots en clair. Un mot que vous saisissez entre dans le segment voisin et prend sa couleur et son style ; les autres codes restent à leur place. Si vous retapez les nombres d'une fraction empilée, cette fraction devient du texte simple. Remplacer tout le texte depuis le champ Texte ne conserve les codes que là où l'on peut dire quels mots n'ont pas changé.

Les noms de police (`\F`) sont conservés et enregistrés, mais tout est dessiné dans la seule police de type Helvetica. Il n'existe pas encore de barre d'outils pour saisir ces codes.

## Désigner un élément : repères multiples

{{ui:Repère}} dans le groupe {{ui:Annoter}} ({{cmd:MLEADER}}, `MLD`) trace une flèche, une ligne de repère, un palier court et une note, en un seul objet.

1. Cliquez sur {{ui:Repère}}. À `Spécifiez l'emplacement de la flèche du repère`, cliquez sur l'élément concerné par la note.
2. À `Spécifiez l'emplacement du palier du repère`, cliquez à l'endroit où doit se trouver la note. Le palier s'oriente vers le côté sur lequel vous avez cliqué.
3. Tapez la note dans la zone qui s'ouvre, puis appuyez sur {{key:Mod+Enter}}.

`A` et `L` à la première question règlent la taille de la flèche et la longueur du palier ; la hauteur du texte vient de {{ui:Hauteur du texte}} pour les nouvelles cotes, multipliée par {{ui:Échelle globale}}. Double-cliquez sur un repère multiple pour modifier ses mots. Les poignées déplacent la flèche et le palier ; la note suit le palier. Dans {{ui:Propriétés}} : {{ui:Texte}}, {{ui:Hauteur}}, {{ui:Largeur de retour à la ligne}}, {{ui:Taille de la flèche}} et {{ui:Distance du palier}}.

:::note
Les repères multiples s'enregistrent comme de vrais repères multiples en DWG. Le DXF n'a pas de repère multiple en R12 ni en 2000 ; ils sont donc enregistrés sous forme des lignes, de la flèche et du texte qu'ils dessinent.
:::

## Marquer les modifications avec un nuage de révision

{{ui:Annoter}} › {{ui:Plus}} › {{ui:Nuage de révision}} ({{cmd:REVCLOUD}}, `RC`) trace un nuage d'arcs autour de ce qui a changé. L'historique affiche la longueur d'arc et le type qu'il utilisera.

- **Rectangulaire** (la première fois) : cliquez sur deux coins.
- `P` **Polygonal** : cliquez sur les coins, {{key:Enter}} ferme le nuage.
- `F` **Main levée** : cliquez là où il commence et déplacez le pointeur autour de la zone sans cliquer ; un arc est ajouté à chaque longueur d'arc. Cliquez ou appuyez sur {{key:Enter}} pour le fermer.
- `O` **Objet** : choisissez une polyligne fermée, un cercle ou une ellipse (ou une ligne, un arc ou une polyligne ouverte) ; il devient le nuage. `Inverser le sens ?` `Y` retourne les arcs vers l'intérieur.
- `A` **Longueur d'arc** : la longueur de chaque arc. Choisissez-en une adaptée à l'échelle de tracé.

Le nuage est une polyligne fermée d'arcs : il s'enregistre donc dans tous les formats.

## Rechercher et remplacer des mots

{{ui:Édition}} › {{ui:Plus}} › {{ui:Chercher et remplacer}} ({{cmd:FIND}}) parcourt le texte, les valeurs des attributs de bloc et le texte des cotes dans l'onglet ouvert (ou seulement dans les objets sélectionnés).

1. Tapez les mots dans {{ui:Rechercher}}. La liste indique chaque emplacement et le nombre total.
2. Cochez {{ui:Respecter la casse}}, {{ui:Mots entiers seulement}} ou {{ui:Utiliser les caractères génériques (* et ?)}} si nécessaire, et décochez les zones où ne pas chercher.
3. Cliquez sur {{ui:Sélectionner les résultats}} pour sélectionner ces objets, ou tapez les nouveaux mots dans {{ui:Remplacer par}} (la liste indique ce que devient chacun) et cliquez sur {{ui:Tout remplacer}}. Un seul {{key:Mod+Z}} annule tous les remplacements.

La valeur mesurée d'une cote n'est pas du texte : elle n'est donc jamais remplacée. Dans `<> TYP.`, seul `TYP.` peut l'être.

## Masquer les lignes derrière une étiquette

1. Sélectionnez les textes, tapez {{cmd:TEXTMASK}} puis appuyez sur {{key:Enter}}.
2. `B` peint le fond du dessin derrière eux ; `C` demande un numéro de couleur ; `O` supprime le masque.
3. `Facteur de décalage du contour` : {{key:Enter}} conserve 1.5, soit une demi-hauteur de texte autour du texte.

Le masque couvre les lignes situées sous le texte, à l'écran comme au tracé. Le DWG 2004 ou ultérieur et le DXF 2000 le conservent ; le DWG 2000 et le DXF R12 ne le peuvent pas, et l'enregistrement le signale.

## Police

Tout le texte est dessiné dans une police de type Helvetica, à l'écran comme dans les PDF. Le texte des dessins ouverts conserve ses mots, sa hauteur et sa position, mais pas sa police d'origine (le nom d'une police à l'intérieur d'un texte paragraphe est conservé dans le fichier, voir ci-dessus).

Dans les PDF tracés, un texte dans n'importe quel alphabet européen, cyrillique ou grec s'imprime tel quel (le PDF contient les lettres nécessaires, et vous pouvez toujours sélectionner et rechercher le texte). Le texte chinois, japonais et coréen s'imprime aussi tel quel (le tracé télécharge une police plus grande la première fois qu'elle est nécessaire). Le texte arabe, persan, ourdou et hébreu s'imprime également tel quel (voir la section suivante). Les caractères qu'aucune police ne possède s'impriment sous la forme « ? », et l'historique indique combien il y en a eu.

## Texte de droite à gauche : arabe, persan, ourdou, hébreu

Saisissez le texte comme partout ailleurs : {{cmd:TEXT}} et {{cmd:MTEXT}} dessinent chaque ligne dans l'ordre de lecture. Une ligne dont la première lettre est arabe ou hébraïque se lit de droite à gauche ; les chiffres et les mots latins qu'elle contient gardent leur ordre de gauche à droite, et les lettres en écriture arabe sont liées. Une ligne qui commence par une lettre latine reste de gauche à droite, avec les mots de droite à gauche placés à l'intérieur. Chaque paragraphe d'un texte multiligne a sa propre direction, et un paragraphe qui revient à la ligne la conserve sur chaque ligne.

Le texte est enregistré tel que vous l'avez saisi : les fichiers DWG et DXF l'échangent donc avec les autres logiciels sans modification. Le point d'insertion et la justification ({{ui:Gauche}}, {{ui:Centre}}, {{ui:Droite}}) désignent le même côté que pour tout autre texte : une note de droite à gauche qui doit pendre depuis son extrémité droite demande {{ui:Droite}}.

À l'écran, les lettres proviennent des polices de votre système. Dans un PDF tracé, l'hébreu utilise la même police intégrée que le texte latin ; le texte en écriture arabe fait télécharger une police supplémentaire (moins de 1 Mo, une seule fois), et tout le PDF s'imprime alors dans cette police. Cette police n'a pas de forme propre pour trois caractères ourdous (heh goal, yeh barree et le point final ourdou) : ils s'impriment dans la forme de la lettre arabe la plus proche. Un dessin qui contient à la fois du texte en écriture arabe et du texte chinois, japonais ou coréen imprime l'un des deux sous forme de « ? », car un tracé ne contient qu'une police. Un texte d'une police SHX chargée est ordonné et lié lorsque la police possède les lettres à leur place Unicode ; pour les anciennes polices dont les lettres sont déjà mises en forme, utilisez {{ui:Inverser (R)}} dans {{cmd:SHXFONTS}} comme auparavant.

## Erreurs fréquentes

- **Le texte est trop petit pour être vu.** La hauteur est exprimée en unités de dessin. Dans un grand dessin, utilisez une grande hauteur (voir ci-dessus), ou zoomez.
- **La commande s'est arrêtée après une ligne.** Vous avez appuyé sur {{key:Enter}} sur une ligne vide dans {{cmd:TEXT}}. Relancez-la, ou utilisez le texte paragraphe (`T`), où {{key:Enter}} commence un nouveau paragraphe.
- **`T` a ouvert une zone au lieu de demander une ligne.** Comme dans AutoCAD, `T` correspond au texte paragraphe ({{cmd:MTEXT}}) ; le texte sur une seule ligne est `DT`.
- **Le texte revient à la ligne à un autre endroit dans AutoCAD.** CadCraft fait les retours à la ligne avec les largeurs de Helvetica ; une autre police peut faire tenir un mot un peu plus ou un peu moins sur une ligne.
- **Texte d'une copie en miroir.** Il est placé en miroir mais reste lisible de gauche à droite.

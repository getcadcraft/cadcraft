---
title: Tracer en PDF
summary: Créez un PDF d'une feuille en taille réelle, ou du modèle à une échelle ou ajusté au papier, imprimez-le depuis le navigateur ou depuis Studio, ou enregistrez-le en PNG ou SVG.
keywords: tracer, imprimer, imprimante, copies, png, svg, image, pdf, publier, exportpdf, papier, échelle, monochrome, niveaux de gris, noir et blanc, épaisseur de trait, stylo, mise en page, fenêtre de tracé, style de tracé, table de styles de tracé, ctb, dépendant de la couleur, tramage, plotstyles, stylesmanager
from: a4752f83
---

## Ce que vous allez réaliser

Un PDF d'une feuille en taille réelle, puis un PDF rapide du modèle à 1:100, et une impression.

Le PDF est créé dans votre navigateur ; rien n'est envoyé. C'est un PDF vectoriel : les lignes restent nettes à tout zoom, et le texte peut être recherché.

## Tracer une feuille

1. Cliquez sur l'onglet de la feuille sous le dessin.
2. Appuyez sur {{key:Mod+P}}, cliquez sur {{ui:Tracer}}, ou saisissez `PLOT` et appuyez sur {{key:Enter}}.

La boîte de dialogue {{ui:Tracer en PDF}} s'ouvre. Elle indique la feuille tracée et le papier utilisé, « en taille réelle … tel que vous le voyez ». L'aperçu à droite montre la feuille.

3. Dans {{ui:Style de tracé}}, choisissez {{ui:Monochrome (noir)}} pour des lignes noires, {{ui:Couleur (comme dessiné)}} pour conserver les couleurs, {{ui:Niveaux de gris}}, ou une table de votre choix (voir [Tables de styles de tracé](topic:plot-pdf#plot-style-tables)). La feuille conserve ce choix : il est enregistré avec le dessin.
4. Dans {{ui:Épaisseur de trait}}, choisissez une largeur de stylo entre 0.13 mm et 0.70 mm. Les lignes avec l'épaisseur par défaut sont tracées à cette largeur ; les lignes ayant leur propre épaisseur (calque ou objet, ou stylo de leur couleur dans la table) sont tracées à celle-ci.
5. Cliquez sur {{ui:Télécharger le PDF}}.

Le navigateur télécharge un PDF nommé d'après le dessin et la feuille, par exemple `Drawing1-A-101 Plan.pdf`. L'historique indique sa taille en octets et son format de papier en millimètres.

Une feuille est toujours tracée à 1:1 sur son propre papier. Pour changer de papier, modifiez-le sur la feuille elle-même (voir [Configurer une feuille](topic:sheets-and-viewports)). Les calques réglés pour ne pas être tracés sont exclus, de même que les cadres de fenêtres de présentation.

## Toutes les feuilles dans un seul PDF

Avec deux feuilles ou plus, la boîte de dialogue {{ui:Tracer en PDF}} comporte {{ui:Toutes les feuilles dans un seul PDF}} ; ou saisissez {{cmd:PUBLISH}}. {{key:Enter}} prend toutes les feuilles ; `Certaines` (`S`) demande leurs noms, séparés par des virgules.

Un seul PDF est téléchargé, avec une page par feuille, dans l'ordre des onglets, chacune à sa propre taille de papier, et un signet par feuille portant son nom. Chaque feuille est tracée avec sa propre table de styles de tracé ; une feuille sans table choisie utilise celle que vous avez choisie en dernier dans la boîte de dialogue, ainsi que la largeur de stylo choisie en dernier.

## Tracer le modèle

1. Cliquez sur l'onglet {{ui:Modèle}}.
2. Appuyez sur {{key:Mod+P}}.

La boîte de dialogue indique qu'elle trace le modèle sur une feuille de papier, et affiche d'autres réglages :

3. Dans {{ui:Aire}}, choisissez ce qu'il faut tracer :
   - {{ui:Tout (étendue)}} : tout le dessin.
   - {{ui:Ce qui est à l'écran}} : la zone que vous voyez actuellement dans le dessin.
   - {{ui:Une fenêtre…}} : puis cliquez sur {{ui:Choisir}}, cliquez sur deux coins du dessin, et la boîte de dialogue revient.
4. Dans {{ui:Papier}}, choisissez un format : ISO A4 à A0, Letter, Legal, Tabloid et ANSI C et D, ou ARCH C, D et E.
5. Dans {{ui:Orientation}}, choisissez {{ui:Paysage}} ou {{ui:Portrait}}.
6. Dans {{ui:Échelle (S)}}, choisissez {{ui:Ajuster au papier}} ou une échelle telle que `1:100`.

Sous les réglages, une ligne indique l'échelle et la taille que prend la zone sur le papier. Si elle dépasse le papier, elle le signale : les bords sont coupés. Choisissez une échelle plus petite, un papier plus grand, ou {{ui:Ajuster au papier}}.

7. Cliquez sur {{ui:Télécharger le PDF}}.

Un tracé du modèle laisse une marge de 5 mm sur le pourtour, car la plupart des imprimantes ne peuvent pas imprimer jusqu'au bord. {{ui:Ajuster au papier}} donne une échelle inhabituelle (l'historique et la ligne d'information indiquent « (ajusté) ») ; choisissez une échelle standard lorsque le dessin doit être mesuré exactement.

:::note
Les échelles sont calculées en unités réelles. Pour que 1:100 soit juste, réglez {{ui:Unités}} dans {{ui:Réglages actuels}} sur ce que représente une unité de dessin. Un dessin sans unité est considéré en millimètres.
:::

## Tables de styles de tracé

Une table de styles de tracé indique comment chacune des 255 couleurs standard du dessin est tracée, comme le fait une table de styles de tracé dépendante de la couleur (CTB) dans d'autres logiciels de CAO. Trois sont intégrées :

| Table | Rendu |
|---|---|
| {{ui:Couleur (comme dessiné)}} | Chaque objet dans sa propre couleur. |
| {{ui:Monochrome (noir)}} | Toutes les couleurs en noir : le choix habituel pour les dessins. |
| {{ui:Niveaux de gris}} | Chaque couleur en son gris, pour que les couleurs restent distinctes sur une imprimante noir et blanc. |

Pour créer la vôtre, par exemple des lignes rouges épaisses et noires, le reste fin :

1. Dans la boîte de dialogue {{ui:Tracer en PDF}}, cliquez sur {{ui:Modifier les tables…}} (ou saisissez {{cmd:PLOTSTYLES}}).
2. Cliquez sur {{ui:Nouvelle}}, et saisissez un nom comme `office` dans {{ui:Nom}}. Pour partir d'une table intégrée, choisissez-la dans {{ui:Table}} puis cliquez sur {{ui:Copier}}.
3. Cliquez sur une couleur dans la grille. {{key:Shift}}+clic sélectionne une plage de couleurs, {{key:Mod}}+clic en ajoute une, et {{ui:Sélectionner toutes les couleurs}} les prend toutes.
4. Réglez ce que prennent les couleurs sélectionnées :
   - {{ui:Tracée en}} : {{ui:Sa propre couleur}}, {{ui:Noir}} ou {{ui:Autre couleur…}}.
   - {{ui:En gris}} : la couleur en son gris.
   - {{ui:Encre (%)}} : 100 est l'encre pleine, 50 est à mi-chemin du blanc (tramage), pour les lignes d'arrière-plan.
   - {{ui:Épaisseur de ligne}} : {{ui:Sa propre épaisseur de ligne}} conserve l'épaisseur de l'objet ou du calque ; une valeur trace chaque ligne de cette couleur à cette largeur.
   - {{ui:Type de ligne}} : tracer chaque ligne de cette couleur avec un autre type de ligne (par exemple toutes les lignes rouges en tirets) ; {{ui:Utiliser le type de ligne de l'objet}} les laisse telles quelles.
   - {{ui:Extrémité de ligne}} et {{ui:Jonction de lignes}} : extrémités à bout droit, carrées ou arrondies, et angles à onglet, biseautés ou arrondis (arrondis, comme auparavant, lorsque vous ne réglez rien).
   - {{ui:Style de remplissage}} : un remplissage plein de cette couleur est tracé en hachures (barres horizontales ou verticales, obliques, croisillons, losanges, points carrés) au lieu d'encre, pour les imprimantes et les plans où l'encre pleine est trop lourde.

   La table elle-même a deux autres réglages : {{ui:Épaisseurs de trait}}, les largeurs qu'elle connaît (une ligne tracée prend la plus proche d'entre elles), et {{ui:Échelle du type de ligne}}, un facteur appliqué aux tirets de chaque type de ligne qui n'est pas ISO.
5. Cliquez sur {{ui:Terminé}}. La table est conservée dans le dessin, et la feuille (ou le modèle) est désormais tracée avec elle. {{ui:Annuler}} abandonne les modifications.

Une couleur ayant son propre stylo affiche un point dans son coin, et un point en bas lorsqu'elle définit une épaisseur de ligne. Un objet avec une couleur vraie (non parmi les 255) utilise le stylo de la couleur standard la plus proche.

Le dessin conserve ses tables et le choix de chaque feuille lorsque vous l'enregistrez en DWG (2000 à 2018) ou en DXF (R12 ou 2000), et les retrouve à l'ouverture. Les autres logiciels voient le nom dans la mise en page de chaque feuille (`office.ctb`), et non la table elle-même. Un dessin venant d'un autre logiciel dont la mise en page nomme une table telle que `monochrome.ctb` est tracé avec la table intégrée de ce nom ; pour tout autre nom, la boîte de dialogue indique que le dessin ne la possède pas, et trace les couleurs du dessin jusqu'à ce que vous choisissiez une table ou en créiez une portant ce nom.

Pour utiliser une table dans un autre dessin, cliquez sur {{ui:Exporter}} dans {{ui:Tables de styles de tracé}} (il enregistre `office.plotstyle.json`), puis sur {{ui:Importer…}} dans l'autre dessin. {{ui:Importer…}} accepte aussi un fichier `.ctb` d'un autre logiciel : il est lu d'après la description publiée du format et **n'a pas encore été vérifié sur un vrai fichier**. La couleur, le tramage et l'épaisseur de chaque couleur sont lus ; les niveaux de gris, les numéros de stylo, les types de ligne, les extrémités et jonctions de lignes et les styles de remplissage ne le sont pas, et une table nommée (`.stb`) est refusée. Comparez le premier tracé avec ce que vous attendez, et envoyez-nous le fichier s'il est incorrect.

## Imprimer

**Dans le navigateur**, cliquez sur {{ui:Imprimer…}}. CadCraft crée le PDF et ouvre la boîte de dialogue d'impression du navigateur pour celui-ci. Choisissez « Taille réelle » ou 100 % (et non « Ajuster ») pour conserver l'échelle. Si le navigateur ne permet pas d'imprimer depuis la page, le PDF s'ouvre dans un nouvel onglet à la place : imprimez-le depuis là avec {{key:Mod+P}}.

Vous pouvez aussi cliquer sur {{ui:Ouvrir pour imprimer}} : le PDF s'ouvre dans un nouvel onglet du navigateur, et vous l'imprimez depuis là.

:::safari
Safari peut afficher le PDF et attendre que vous utilisiez **Fichier**, puis **Imprimer**.
:::

Si votre navigateur bloque le nouvel onglet, CadCraft télécharge le PDF à la place et l'indique dans l'historique. Autorisez les fenêtres contextuelles pour le site afin de l'ouvrir dans un onglet la prochaine fois.

**Dans CadCraft Studio**, la boîte de dialogue {{ui:Tracer en PDF}} liste les imprimantes de l'ordinateur. Choisissez l'{{ui:Imprimante}}, le {{ui:Papier dans l'imprimante}} et le nombre de {{ui:Copies}}, puis cliquez sur {{ui:Imprimer…}}. {{ui:Identique au tracé}} choisit le papier de l'imprimante qui correspond au format de la feuille (A3 pour une feuille A3) ; si l'imprimante n'en a pas, elle utilise son propre papier et ajuste la feuille à celui-ci. Sous Windows, la feuille est envoyée sous forme d'image à 300 dpi, car Windows ne peut pas imprimer un PDF sans logiciel PDF ; sous Linux et macOS, le PDF lui-même est envoyé au service d'impression du système. Rien ne quitte l'ordinateur.

## Fichiers image et SVG

{{ui:Télécharger le PNG}} enregistre la feuille tracée sous forme d'image à 300 dpi (réduite seulement lorsqu'une très grande feuille serait plus grande que ce que le navigateur peut générer ; l'historique l'indique). {{ui:Télécharger le SVG}} l'enregistre sous forme de dessin redimensionnable en millimètres, avec les lignes et le texte du tracé. Les deux proviennent du même tracé que le PDF, avec le même style de tracé, la même épaisseur de ligne et la même zone. Les images placées dans le dessin ne figurent que dans le PDF ; l'historique indique combien ont été omises.

## Images

Les images sont tracées à leur propre résolution, sous les lignes. {{ui:Images}} dans la boîte de dialogue les limite à 600, 300 ou 150 dpi pour un fichier plus petit. Les lignes, le texte et les hachures restent toujours nets (vectoriels), et la transparence reste de la transparence. Voir [Images dans un dessin](topic:pictures).

## Réglages mémorisés

La boîte de dialogue mémorise dans ce navigateur votre dernier papier, orientation, échelle et épaisseur de ligne. La table de styles de tracé est conservée avec chaque feuille dans le dessin ; une feuille sans table choisie démarre avec celle que vous avez choisie en dernier. Une fenêtre choisie est conservée jusqu'au rechargement de la page ; ensuite la boîte de dialogue revient à {{ui:Tout (étendue)}}.

## Erreurs courantes

- **Le PDF est vide ou les boutons sont grisés.** Il n'y a rien à tracer (un modèle vide), ou {{ui:Une fenêtre…}} est choisi et aucune fenêtre n'est encore choisie (« Choisissez la fenêtre à tracer. »).
- **Le texte affiche « ? » dans le PDF.** Le texte en polonais, tchèque, cyrillique, grec et autres écritures d'Europe s'imprime tel quel : le PDF contient alors les lettres nécessaires (de la police Liberation Sans, qui a les largeurs de Helvetica), et le texte peut toujours être sélectionné et recherché. Le texte chinois, japonais et coréen s'imprime aussi tel quel : lorsqu'un dessin le contient, le tracé télécharge une police plus grande (environ 10 Mo, une seule fois) et le PDF ne contient que les caractères utilisés ; il faut donc une connexion la première fois (pas dans une copie hors ligne enregistrée auparavant). L'hébreu s'imprime avec la même police intégrée que le texte latin, et le texte arabe, persan et ourdou fait télécharger une police supplémentaire au tracé (moins de 1 Mo, une seule fois) ; les lignes de droite à gauche sont ordonnées et leurs lettres liées (voir [Texte](topic:text)). Les idéogrammes rares hors de ces polices, et les écritures nécessitant une mise en forme complexe comme le hindi, s'impriment en « ? », et l'historique les compte.
- **Toutes les lignes ont la même épaisseur.** Leur épaisseur est celle par défaut : donnez aux calques ou aux objets une {{ui:Épaisseur de ligne}} dans le panneau de droite (voir [Épaisseurs de trait et types de ligne](topic:units-papers-scales#line-weights-and-linetypes)), ou réglez les épaisseurs par couleur dans une [table de styles de tracé](topic:plot-pdf#plot-style-tables).
- **« (absente de ce dessin) » à côté du style de tracé.** Le dessin provient d'un autre logiciel et nomme une table qu'il ne contient pas. Choisissez l'une des tables, ou créez-en une portant ce nom.
- **Des lignes de construction ont été tracées.** Réglez leur calque pour qu'il ne soit pas tracé : cliquez sur son bouton imprimante dans le panneau {{ui:Calques}}.
- **Le tirage a la mauvaise taille.** L'imprimante l'a mis à l'échelle. Imprimez à taille réelle.
- **{{key:Mod+P}} a ouvert la boîte de dialogue d'impression du navigateur.** Le curseur se trouvait dans une zone du panneau de droite, ou une autre boîte de dialogue était ouverte. Appuyez sur {{key:Enter}} ou {{key:Esc}} pour quitter la zone, puis réessayez, ou cliquez sur {{ui:Tracer}}.
- **{{key:Mod+P}} n'a rien fait.** Une commande est en cours. Appuyez d'abord sur {{key:Esc}}.

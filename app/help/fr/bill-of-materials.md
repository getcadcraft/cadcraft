---
title: Nomenclatures par zone
summary: Marquez des zones du dessin et placez un tableau pour chacune, qui compte les blocs à l'intérieur. Les tableaux suivent le dessin pendant que vous travaillez, et vous choisissez les colonnes que chacun affiche.
keywords: nomenclature, BOM, liste des pièces, tableau de nomenclature, zone, surface, tableau, comptage, quantité, attribut, colonnes, numéro d'élément, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Une **zone** est une surface nommée du dessin. Une **table de nomenclature** liste ce qui se trouve à l'intérieur d'une zone, ou dans tout le dessin : chaque bloc avec sa quantité et ses valeurs d'attributs. Un dessin peut avoir autant de zones et de tableaux que nécessaire, et une zone peut avoir plusieurs tableaux aux colonnes différentes.

Les outils se trouvent sur l'onglet Blocs, sous {{ui:Nomenclature}}, dans le menu {{ui:Plus}} du groupe Blocs, et peuvent être tapés.

## Créer une zone

Tapez {{cmd:BOMZONE}} puis, soit

- cliquez deux coins opposés pour un rectangle,
- choisissez {{ui:Polygone}}, cliquez sur chaque coin et appuyez sur {{key:Enter}} pour le fermer, ou
- choisissez {{ui:Objet}} et sélectionnez une polyligne fermée, un cercle, une ellipse ou une spline fermée. Son contour est copié ; l'objet reste tel quel.

Tapez ensuite le nom de la zone. La zone est dessinée en contour en tirets, avec son nom au-dessus du coin supérieur gauche, sur le calque `BOM-ZONES`, qui n'est pas tracé. Activez le tracé de ce calque si vous voulez les zones sur papier.

Une zone est une polyligne fermée ordinaire : déplacez-la, étirez-la ou faites glisser ses poignées, et son nom suit. Pour renommer une zone, modifiez le texte du nom, ou utilisez {{cmd:BOMZONE}} et {{ui:Renommer}}. {{ui:Zones}} liste chaque zone et le nombre de tableaux qu'elle possède.

## Placer un tableau

Tapez {{cmd:BOMTABLE}} (ou {{cmd:BOM}}), désignez le contour de la zone ou son nom, indiquez la hauteur du texte, puis cliquez à l'endroit où ira le coin supérieur gauche du tableau. Appuyez sur {{key:Enter}} au lieu de désigner une zone, ou choisissez {{ui:Ensemble}}, pour obtenir un tableau de tout le dessin.

Un nouveau tableau affiche le numéro d'élément, la quantité, le nom du bloc et une colonne pour chaque attribut que portent les blocs (les six premiers ; les autres sont proposés non cochés). Les blocs de même nom et aux mêmes valeurs d'attributs partagent une ligne.

## Ce qui compte comme étant à l'intérieur

- Un bloc compte dans la zone qui contient son **point d'insertion**.
- Une ligne, un arc, un cercle, une polyligne, une ellipse, une spline ou une hachure compte **en entier** dans la zone qui contient le milieu de son étendue (pour une ligne, son milieu). Sa longueur n'est pas coupée au bord de la zone.
- Un point exactement sur le bord est à l'intérieur.
- Les zones peuvent se chevaucher. Chaque zone compte pour elle-même : un objet situé dans la partie commune figure donc dans les deux tableaux.

## Les tableaux suivent le dessin

Lorsque vous ajoutez, déplacez, copiez ou effacez un bloc, modifiez un attribut, ou remodelez ou déplacez une zone, chaque tableau est redessiné dans la même étape. Annuler reprend votre modification et la mise à jour du tableau ensemble.

Pour empêcher un tableau de suivre, cochez {{ui:Gelés}} dans ses réglages. Un tableau gelé ne change que lorsque vous modifiez ses réglages ou tapez {{cmd:BOMUPDATE}}, qui met à jour tous les tableaux maintenant.

## Choisir les colonnes

Sélectionnez un tableau et tapez {{cmd:BOMEDIT}}. Dans la boîte de dialogue :

- **Colonnes** : cochez celles à afficher (élément, quantité, nom, calque, longueur, surface, remarques et chaque attribut), saisissez votre propre en-tête pour chacune, et déplacez-les vers le haut ou vers le bas.
- {{ui:Grouper les lignes par}} : valeurs du nom de bloc et des attributs, nom de bloc seul, calque, ou un attribut. Dans une ligne fusionnée, une valeur qui diffère d'un bloc à l'autre affiche « varie ».
- {{ui:Trier par}} n'importe quelle colonne, en croissant ou en décroissant.
- {{ui:Titre}}, {{ui:Afficher le titre}} et {{ui:Ligne des totaux}}.
- {{ui:Compter les tracés par calque}} ajoute une ligne par calque avec le nombre d'objets, leur longueur totale et, pour les formes fermées, leur surface totale, en unités de dessin.
- **Remarques** : cochez la colonne Remarques, puis saisissez une remarque pour n'importe quelle ligne du tableau, dans la zone en bas de la boîte de dialogue.

Chaque tableau garde ses propres choix.

## Numéros d'élément

Une ligne conserve son numéro d'élément tant qu'elle est dans le tableau. Une nouvelle ligne prend le prochain numéro libre, et un numéro déjà attribué n'est jamais réutilisé, afin que les bulles et les notes qui citent un numéro restent justes. {{ui:Renuméroter les éléments}} les numérote à partir de 1, dans l'ordre affiché.

Une ligne est reconnue par ce qu'elle regroupe : si vous modifiez la façon de grouper les lignes, ou une valeur d'attribut utilisée par le regroupement, la ligne compte comme une nouvelle.

## Export et autres programmes

{{cmd:BOMEXPORT}}, ou {{ui:Exporter en CSV}} dans la boîte de dialogue, enregistre un tableau sous forme de fichier .csv pour un tableur.

Dans un fichier DWG ou DXF, un tableau est un bloc ordinaire de lignes et de texte, que les autres programmes affichent et tracent tel qu'il a été dessiné. Ce n'est pas un objet tableau dans ces fichiers, et il ne se met pas à jour dans les autres programmes. Le lien vers sa zone est conservé dans le fichier sous forme de données d'extension que CadCraft relit, si bien que le tableau redevient vivant lorsque vous rouvrez le dessin dans CadCraft. Un DXF R12 d'un dessin sans feuille ne conserve pas le réglage « non tracé » du calque de la zone.

Décomposer un tableau le transforme en lignes et texte indépendants, et met fin au lien.

---
title: Insérer depuis un fichier ou la bibliothèque
summary: Importer un bloc, ou un dessin entier, depuis un autre DWG ou DXF, et placer des éléments depuis la Bibliothèque, un fichier ou une autre bibliothèque, avec leurs crédits et mises à jour.
keywords: insérer, fichier, bibliothèque, librarycraft, élément, équipement, bloc depuis un autre dessin, wblock, centre de conception, crédits, attribution, licence, mise à jour, flux, item.json
from: 316188d2
---

## Insérer un bloc depuis un autre dessin

1. Tapez `I` et appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Insérer}} dans le groupe Blocs.
2. À `Entrez le nom du bloc ou [Fichier/Bibliothèque (L)]`, tapez `F` et appuyez sur {{key:Enter}}.
3. Choisissez le DWG ou le DXF sur cet ordinateur. Il est lu ici ; il n'est pas ouvert, et rien n'est envoyé.
4. Dans la boîte de dialogue {{ui:Insérer depuis}}, choisissez un bloc dans la liste (tapez dans {{ui:Filtrer les blocs}} pour le trouver), ou conservez {{ui:Tout le dessin}}. Cliquez sur {{ui:Insérer}}.
5. Cliquez à l'endroit voulu, et renseignez les attributs demandés.

Le dessin entier est importé comme un seul bloc portant le nom du fichier. Les blocs contenus dans le bloc choisi sont importés aussi. Les calques qu'ils utilisent sont ajoutés à ce dessin.

Si l'autre dessin est dans d'autres unités (pouces et millimètres, par exemple), CadCraft met la référence à l'échelle et l'indique dans l'historique.

### Lorsqu'un nom est déjà utilisé

Si ce dessin contient déjà un bloc du même nom, CadCraft demande :

- {{ui:Garder les existants}} utilise le bloc de ce dessin portant ce nom.
- {{ui:Renommer}} importe le nouveau sous le nom `Nom (2)`.

L'insertion complète est une seule étape : {{key:Mod+Z}} supprime à nouveau la référence et les définitions copiées.

## Ouvrir la bibliothèque

Cliquez sur {{ui:Bibliothèque…}} dans le panneau {{ui:Blocs}}, ou sur {{ui:Bibliothèque}} dans le groupe Blocs, ou tapez `LIB`. À l'invite `INSERT`, `L` l'ouvre aussi.

La bibliothèque comporte quatre sources, sous forme d'onglets :

- {{ui:Bibliothèque}} : la bibliothèque CadCraft. Recherchez par nom, fabricant ou modèle, et filtrez par catégorie.
- {{ui:Fichiers…}} : un fichier d'élément (`item.json`) provenant de n'importe quelle bibliothèque, ou un dessin, un tableur ou un modèle 3D pour créer des éléments : un DWG ou DXF (chaque bloc devient un élément), un CSV avec des colonnes nom et dimensions, ou un modèle glTF ou OBJ. Rien n'est envoyé.
- {{ui:Standard}} : profilés en acier (en coupes, élévations ou barres 3D) et pièces standard comme les boulons, écrous et roulements, créés ici à partir de tableaux publiés. Voir [Placer des profilés en acier et des pièces standard](topic:steel-and-standard-parts).
- {{ui:Autres flux}} : d'autres bibliothèques qui répondent de la même façon que la Bibliothèque. Ajoutez leur adresse une fois ; ce navigateur la mémorise.

Chaque fiche affiche un aperçu, le nom, le fabricant et le modèle, la licence et la version. Un élément retiré est marqué {{ui:Retiré}} avec la raison ; CadCraft demande confirmation avant que vous en placiez un.

## Placer un élément

1. Cliquez sur {{ui:Placer}} sur une fiche.
2. Cliquez à l'endroit où va l'élément. Tapez `R` d'abord pour le faire pivoter, ou `S` pour le mettre à l'échelle.
3. À `Entrez le numéro d'élément (CC-ITEM)`, appuyez sur {{key:Enter}} pour le prochain numéro libre, ou tapez le vôtre.

L'élément devient un bloc nommé `LIB_<nom>_v<version>`, dessiné dans les unités de ce dessin. Si le dessin n'a pas d'unités, l'élément est placé en millimètres et l'historique l'indique ; réglez d'abord {{ui:Unités}} dans le panneau de droite.

Ses données sont embarquées sous forme d'attributs invisibles : l'identifiant et la version de l'élément, la licence et l'attribution, le fabricant, le modèle, la catégorie et les dimensions. Voir [Attributs de bloc](topic:attributes).

## Éléments dans votre langue

Un élément peut porter son nom et sa description dans d'autres langues. Lorsqu'il les possède dans la langue réglée dans CadCraft (Paramètres › Général › Langue), la fiche et le nom d'élément du bloc placé les utilisent. Le bloc lui-même garde un nom issu du nom propre de l'élément ; un dessin a donc un seul bloc par élément, quelle que soit la langue utilisée pour le placer.

## Vérifier les mises à jour

1. Ouvrez la bibliothèque.
2. Cliquez sur {{ui:Vérifier les mises à jour}}.

Chaque élément de bibliothèque du dessin est listé avec ses numéros d'élément, et indique s'il est à jour, s'il existe une version plus récente (et ce qui a changé), ou s'il a été retiré. Cliquez sur {{ui:Mettre à jour}} sur une ligne, ou sur {{ui:Tout mettre à jour}}. Chaque référence passe au bloc de la nouvelle version et conserve son numéro d'élément, sa quantité, son emplacement, son angle et son calque. {{key:Mod+Z}} annule une mise à jour.

## Citer ce que vous avez utilisé

Cliquez sur {{ui:Crédits de la bibliothèque}}. Chaque élément est listé avec sa ligne d'attribution et sa licence.

- {{ui:Copier l'attribution}} copie la ligne d'un élément ; {{ui:Tout copier}} copie toutes les lignes.
- {{ui:Télécharger le CSV}} enregistre la liste avec les numéros d'élément, les fabricants, les modèles, les licences et les attributions. Elle s'ouvre dans n'importe quel tableur.

Des licences comme CC BY demandent de citer l'auteur là où vous utilisez l'œuvre. Reportez les lignes sur le dessin, dans le cahier des charges ou dans les notes du projet.

## Symboles et ressources

La bibliothèque comporte trois types d'éléments : les Symboles (conventions de dessin, en 2D), les Types (de quoi un élément est constitué) et les Ressources (objets physiques). Dans l'onglet {{ui:Bibliothèque}}, la liste {{ui:Type d'élément}} affiche Symboles et ressources ensemble, uniquement les Symboles, ou uniquement les Ressources. Les Types sont ceux dont un projet BimCraft est constitué, donc CadCraft ne les liste pas.

## Se connecter à la bibliothèque

Cliquez sur {{ui:Se connecter à la bibliothèque}}. Une petite fenêtre s'ouvre sur le site ; une fois connecté là-bas, CadCraft peut afficher les éléments de votre équipe et enregistrer ceux que vous placez, afin que vous soyez averti lorsqu'un élément utilisé change. La connexion dure pour cet onglet du navigateur. Révoquez-la à tout moment depuis la page de sécurité de votre compte.

## Erreurs fréquentes

- **« La création d'éléments à partir de types IFC se fait dans BimCraft. »** Les fichiers IFC et de familles se lisent dans l'application BimCraft. Créez l'élément là-bas ou dans la Bibliothèque, puis utilisez son `item.json` ici.
- **« La bibliothèque est injoignable. »** Vous êtes hors ligne, ou la bibliothèque est indisponible. Les éléments déjà présents dans le dessin ne sont pas affectés.
- **Un élément est beaucoup trop grand ou trop petit.** Les unités du dessin sont fausses ou non réglées. Annulez, réglez {{ui:Unités}}, puis replacez l'élément.

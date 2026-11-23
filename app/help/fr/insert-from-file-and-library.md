---
title: Insérer depuis un fichier ou la bibliothèque
summary: Importez un bloc, ou un dessin entier, depuis un autre DWG ou DXF, et placez des éléments depuis la Bibliothèque, un fichier ou une autre bibliothèque, avec leurs crédits et leurs mises à jour.
keywords: insérer, fichier, bibliothèque, librarycraft, élément, équipement, bloc depuis un autre dessin, wblock, centre de conception, crédits, attribution, licence, mise à jour, flux, item.json
from: f6e4e452
---

## Insérer un bloc depuis un autre dessin

1. Tapez `I` et appuyez sur {{key:Enter}}, ou cliquez sur {{ui:Insérer}} dans le groupe Blocs.
2. La ligne de commande en bas de la fenêtre demande `Saisissez le nom du bloc ou [Fichier/Bibliothèque (L)]`. Tapez `F` et appuyez sur {{key:Enter}}.
3. Choisissez le DWG ou le DXF sur cet ordinateur. Il est lu ici ; il n'est pas ouvert, et rien n'est envoyé.
4. Dans la boîte de dialogue {{ui:Insérer depuis}}, choisissez un bloc dans la liste (tapez dans {{ui:Filtrer les blocs}} pour le trouver), ou gardez {{ui:Le dessin entier}}. Cliquez sur {{ui:Insérer}}.
5. Cliquez à l'endroit voulu, et renseignez les attributs que le bloc demande.

Vous pouvez aussi partir du panneau {{ui:Blocs}} : tapez `F` dans sa case {{ui:Filtrer les blocs}} et appuyez sur {{key:Enter}}, ou tapez quelque chose qu'aucun bloc ne correspond, puis cliquez sur {{ui:Depuis un fichier…}}. `L` et {{ui:Bibliothèque…}} ouvrent la bibliothèque de la même façon. Avant la version 0.10.1, une lettre tapée dans {{ui:Filtrer les blocs}} ne cherchait que dans les blocs de ce dessin, et répondait « No block matches the filter. » (Aucun bloc ne correspond au filtre.)

Pour garder sous la main un dessin de vos propres blocs, cliquez sur {{ui:Ajouter un dessin}} sous {{ui:Bibliothèques}} dans le panneau {{ui:Blocs}}, et choisissez le DWG ou le DXF. Ses blocs sont listés avec des aperçus ; cliquez sur l'un d'eux pour le placer.

Le dessin entier entre comme un seul bloc, nommé d'après le fichier. Les blocs contenus dans le bloc choisi entrent aussi. Les calques qu'ils utilisent sont ajoutés à ce dessin.

Si l'autre dessin est dans d'autres unités (pouces et millimètres, par exemple), CadCraft met la référence à l'échelle pour correspondre et le signale dans l'historique.

### Lorsqu'un nom est déjà utilisé

Si ce dessin possède déjà un bloc du même nom, CadCraft demande :

- {{ui:Garder les existants}} utilise le bloc de ce dessin portant ce nom ;
- {{ui:Renommer}} importe le nouveau bloc sous le nom `Nom (2)`.

L'insertion complète est une seule étape : {{key:Mod+Z}} retire à nouveau la référence et les définitions copiées.

## Ouvrir la bibliothèque

Cliquez sur {{ui:Bibliothèque…}} dans le panneau {{ui:Blocs}}, ou sur {{ui:Bibliothèque}} dans le groupe Blocs, ou tapez `LIB`. À l'invite `INSERT`, `L` l'ouvre aussi.

La bibliothèque a quatre sources, présentées sous forme d'onglets :

- {{ui:Bibliothèque}} : la bibliothèque CadCraft. Cherchez par nom, fabricant ou modèle, et filtrez par catégorie.
- {{ui:Fichiers…}} : un fichier d'élément (`item.json`) provenant de n'importe quelle bibliothèque, ou un dessin, un tableur ou un modèle 3D pour créer des éléments : un DWG ou DXF (chaque bloc devient un élément), un CSV avec des colonnes de nom et de dimensions, ou un modèle glTF ou OBJ. Rien n'est envoyé.
- {{ui:Standard}} : profilés d'acier (sous forme de coupes, d'élévations ou d'éléments 3D) et pièces standard comme boulons, écrous et roulements, créés ici à partir de tables publiées. Voir [Placer des profilés d'acier et des pièces standard](topic:steel-and-standard-parts).
- {{ui:Autres flux}} : d'autres bibliothèques qui répondent comme la Bibliothèque. Ajoutez leur adresse une seule fois ; ce navigateur s'en souvient.

Chaque fiche affiche un aperçu, le nom, le fabricant et le modèle, la licence et la version. Un élément retiré est marqué {{ui:Retiré}} avec sa raison ; CadCraft demande confirmation avant que vous en placiez un.

## Placer un élément

1. Cliquez sur {{ui:Placer}} sur une fiche.
2. Cliquez à l'endroit où l'élément doit aller. Tapez d'abord `R` pour le faire pivoter, ou `S` pour le mettre à l'échelle.
3. À `Saisissez le numéro d'élément (CC-ITEM)`, appuyez sur {{key:Enter}} pour le prochain numéro libre, ou tapez le vôtre.

L'élément devient un bloc nommé `LIB_<nom>_v<version>`, dessiné dans les unités de ce dessin. Si le dessin n'a pas d'unités, l'élément entre en millimètres et l'historique le signale ; réglez d'abord {{ui:Unités}} dans le panneau de droite.

Ses données voyagent sous forme d'attributs invisibles : l'identifiant et la version de l'élément, la licence et l'attribution, le fabricant, le modèle, la catégorie et les dimensions. Voir [Attributs de bloc](topic:attributes).

## Éléments dans votre langue

Un élément peut porter son nom et sa description dans d'autres langues. Lorsqu'il les possède dans la langue réglée dans CadCraft (Paramètres › Général › Langue), la fiche et le nom d'élément du bloc placé les utilisent. Le bloc lui-même garde un nom construit à partir du nom propre de l'élément ; un dessin a ainsi un seul bloc par élément, quelle que soit la langue utilisée pour le placer.

## Vérifier les mises à jour

1. Ouvrez la bibliothèque.
2. Cliquez sur {{ui:Vérifier les mises à jour}}.

Chaque élément de bibliothèque du dessin est listé avec ses numéros d'élément et indique s'il est à jour, s'il existe une version plus récente (et ce qui a changé), ou s'il a été retiré. Cliquez sur {{ui:Mettre à jour}} sur une ligne, ou sur {{ui:Tout mettre à jour}}. Chaque référence passe au bloc de la nouvelle version et conserve son numéro d'élément, sa quantité, son emplacement, son angle et son calque. {{key:Mod+Z}} annule une mise à jour.

## Citer ce que vous avez utilisé

Cliquez sur {{ui:Crédits de la bibliothèque}}. Chaque élément est listé avec sa ligne d'attribution et sa licence.

- {{ui:Copier l'attribution}} copie la ligne d'un élément ; {{ui:Tout copier}} copie toutes les lignes.
- {{ui:Télécharger le CSV}} enregistre la liste avec les numéros d'élément, les fabricants, les modèles, les licences et les attributions. Elle s'ouvre dans n'importe quel tableur.

Des licences comme CC BY vous demandent de citer l'auteur là où vous utilisez l'œuvre. Placez les lignes sur le dessin, dans le cahier des charges ou dans les notes du projet.

## Symboles et ressources

La bibliothèque compte trois types d'éléments : Symboles (conventions de dessin, en 2D), Types (de quoi un élément est constitué) et Ressources (objets physiques). Dans l'onglet {{ui:Bibliothèque}}, la liste {{ui:Type d'élément}} affiche les symboles et les ressources ensemble, seulement les symboles, ou seulement les ressources. Les types sont ce dont un projet BimCraft est constitué ; CadCraft ne les liste donc pas.

## Se connecter à la bibliothèque

Cliquez sur {{ui:Se connecter à la bibliothèque}}. Une petite fenêtre s'ouvre sur le site ; une fois connecté là-bas, CadCraft peut afficher les éléments de votre équipe et enregistrer ce que vous placez, afin que vous soyez prévenu lorsqu'un élément que vous avez utilisé change. La connexion dure pour cet onglet du navigateur. Révoquez-la à tout moment depuis la page de sécurité de votre compte.

## Garder vos propres objets dans Mes objets

{{ui:Mes objets}} est une liste privée de la bibliothèque, que vous seul voyez. Elle ne figure pas dans la bibliothèque publique, ni dans la recherche, ni dans ce que voit votre équipe, et elle suit votre compte sur chaque ordinateur où vous vous connectez à la bibliothèque.

1. Dans le panneau Bibliothèque, cliquez sur {{ui:Fichiers…}} et lisez un fichier.
2. Sur l'élément que vous voulez retrouver, cliquez sur {{ui:Conserver dans mes objets}}.
3. Plus tard, cliquez sur {{ui:Mes objets}}, puis sur {{ui:Placer}}. Il se place comme tout élément de bibliothèque, et {{ui:Vérifier les mises à jour}} s'en occupe.
4. {{ui:Retirer de mes objets}} le retire de la liste. Les copies déjà placées dans des dessins restent en place.

Vous devez être connecté à la bibliothèque. La lecture d'un fichier n'envoie rien ; conserver un élément n'envoie que cet élément à votre compte.

:::note
Mes objets est en cours de test et peut ne pas être ouvert pour votre compte. S'il affiche « My objects is not open for this account yet » (Mes objets n'est pas encore ouvert pour ce compte), vous pouvez tout de même placer des éléments de vos propres fichiers avec {{ui:Fichiers…}}.
:::

## Erreurs courantes

- **« Making items from IFC types is in BimCraft. »** (La création d'éléments à partir de types IFC se fait dans BimCraft.) Les fichiers IFC et de familles sont lus dans l'application BimCraft. Créez l'élément là-bas ou dans la bibliothèque, puis utilisez son `item.json` ici.
- **« The library could not be reached. »** (La bibliothèque est injoignable.) Vous êtes hors ligne, ou la bibliothèque est indisponible. Les éléments déjà présents dans le dessin ne sont pas touchés.
- **Un élément est beaucoup trop grand ou trop petit.** Les unités du dessin sont fausses ou ne sont pas réglées. Annulez, réglez {{ui:Unités}}, puis replacez l'élément.

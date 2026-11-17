---
title: Couches cartographiques sous le dessin
summary: Affichez des plans de rues, des photos aériennes ou une image avec un fichier monde sous l'espace objet, positionnés par le système de coordonnées du dessin.
keywords: carte, couches cartographiques, maplayers, ml, geomap, fond de plan, aérien, satellite, tuiles, xyz, wms, wmts, service de cartes, fichier monde, système de coordonnées, epsg, state plane, utm, géoréférencement, plan de site, géolocalisation, position géographique, géodonnées, enregistré, dwg, dxf
from: f103045f
---

## Ce que vous allez réaliser

Un plan de site dessiné par-dessus une photo aérienne ou un plan de rues, chacun à sa juste place.

## Indiquer à CadCraft où se trouve le dessin

1. Réglez les unités du dessin dans {{ui:Propriétés}} › {{ui:Unités}} (par exemple pieds ou mètres).
2. Tapez {{cmd:MAPLAYERS}} (ou `ML`) et appuyez sur {{key:Enter}}.
3. Sous {{ui:Où se trouve le dessin}}, tapez un nom ou un code EPSG dans {{ui:Trouver un système}} (par exemple `2277` ou `Texas Central`), et choisissez-le dans {{ui:Système}}.
4. Si le dessin est tracé dans les coordonnées propres à ce système, laissez le positionnement à 0. Sinon, indiquez un point du dessin ({{ui:X du dessin}}, {{ui:Y du dessin}}), l'endroit où se trouve ce point sur la grille cartographique ({{ui:Est}}, {{ui:Nord}}), et de combien le dessin est tourné par rapport à l'est ({{ui:Tourné (°)}}).
5. Cliquez sur {{ui:Utiliser ce système}}.

## Ajouter une couche

1. Activez {{ui:Couches cartographiques depuis Internet}} en haut de la boîte de dialogue. Tant que ce n'est pas le cas, aucun serveur n'est sollicité ; une fois activé, les serveurs que vous ajoutez voient la zone affichée à l'écran et votre adresse Internet, jamais votre dessin.
2. Dans {{ui:Ajouter une couche}}, choisissez sa provenance :
   - **Tuiles (XYZ)** : une adresse de tuiles avec `{z}`, `{x}` et `{y}`, un nom et la mention exigée par son fournisseur.
   - **WMS**, **WMTS** ou **ArcGIS** : l'adresse du service, puis {{ui:Obtenir les couches}}, et choisissez-en une.
   - **Une image** : un PNG ou JPEG avec son fichier monde (et son `.prj` s'il existe).
3. La couche s'affiche sous le dessin. Sa mention apparaît en bas à droite du dessin.

Chaque couche de la liste peut être masquée, rendue plus ou moins transparente, déplacée vers le haut ou vers le bas, ou retirée.

Chaque modification du système ou des couches constitue une étape de {{cmd:UNDO}}.

## Enregistré avec le dessin

Le système de coordonnées et la liste des couches sont enregistrés dans le dessin lorsque vous l'enregistrez en DWG ou DXF, et reviennent à l'ouverture, sur n'importe quel ordinateur. Les images issues de fichiers ne sont pas enregistrées : ajoutez-les de nouveau après l'ouverture. L'interrupteur {{ui:Couches cartographiques depuis Internet}} n'est pas enregistré dans le dessin : il appartient à ce navigateur. Ainsi, un dessin que quelqu'un vous envoie n'interroge aucun serveur tant que vous ne l'activez pas vous-même.

Ce que voient les autres logiciels :

| Enregistré en | Emplacement du dessin | Couches cartographiques |
|---|---|---|
| DWG 2010, 2013 ou 2018, DXF 2000 | Écrit de la façon standard dont les logiciels lisent la position géographique d'un dessin : le code EPSG du système, un point du dessin et sa position sur la grille cartographique, les unités et le nord. | CadCraft uniquement |
| DWG 2000, 2004 ou 2007, DXF R12 | CadCraft uniquement (CadCraft le signale lors de l'enregistrement) | CadCraft uniquement |

- **Vérifié :** l'ODA File Converter lit la position sans erreur, et une bibliothèque DXF (ezdxf) lit exactement le code EPSG et le positionnement.
- **Pas encore vérifié :** si d'autres logiciels de dessin reconnaissent le système à partir de son code EPSG. Un logiciel qui tient sa propre liste de systèmes sous d'autres noms peut afficher le dessin sans position.
- Les autres logiciels affichent un bloc nommé `CADCRAFT_GEO` dans la liste des blocs. C'est la copie propre à CadCraft du système et des couches ; il n'est jamais placé dans le dessin. Laissez-le en place.

## Dessins issus d'autres logiciels

Lorsqu'un dessin provenant d'un autre logiciel possède une position géographique, CadCraft la lit :

- Si elle désigne un code EPSG, {{ui:Où se trouve le dessin}} affiche ce système, et les couches cartographiques sont positionnées selon lui.
- Si CadCraft ne connaît pas le système (nom propre à un autre logiciel, grille locale ou facteur d'échelle), la position n'est pas utilisée, mais elle est conservée et réenregistrée telle quelle, pour que l'autre logiciel la retrouve. Choisissez un système dans {{ui:Où se trouve le dessin}} pour la remplacer.

:::note
Les couches cartographiques ne sont dessinées qu'à l'écran : elles ne se tracent pas. N'utilisez que des services cartographiques dont les conditions d'utilisation le permettent, et gardez leur mention visible.
:::

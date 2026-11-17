---
title: Régler les tailles, les décimales et l'échelle des cotes
summary: Choisir la hauteur du texte, la taille des flèches, les décimales et l'échelle globale des nouvelles cotes, modifier les cotes existantes, et comprendre le fonctionnement des styles de cote dans CadCraft.
keywords: style de cote, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, échelle globale, décimales, taille de flèche, échelle d'annotation, dimtextunit, unités dans le texte, mm, cm, m, km, millimètres, mètres, dimlfac, dimpost
from: 8ec82a07
---

## Ce que vous allez apprendre

La taille du texte et des flèches des cotes, comment les régler pour un dessin tracé à 1:50 ou 1:100, et comment modifier les cotes que vous avez déjà créées.

## Comment fonctionnent les tailles des cotes

Chaque cote porte son propre ensemble de tailles : hauteur du texte, taille des flèches, décimales, l'espace autour du texte, la distance dont les lignes d'attache dépassent la ligne de cote, et la distance à laquelle elles commencent par rapport à l'objet. Les valeurs par défaut sont proches du style ISO courant :

| Réglage | Valeur par défaut | Commande |
|---|---|---|
| Hauteur du texte | 2.5 | {{cmd:DIMTXT}} |
| Taille de flèche | 2.5 | {{cmd:DIMASZ}} |
| Décimales | 2 (zéros de fin supprimés) | {{cmd:DIMDEC}} |
| Espace autour du texte | 0.625 | {{cmd:DIMGAP}} |
| Dépassement des lignes d'attache | 1.25 | {{cmd:DIMEXE}} |
| Décalage par rapport à l'objet | 0.625 | {{cmd:DIMEXO}} |
| Échelle globale | 1 | {{cmd:DIMSCALE}} |

Chaque taille est multipliée par l'**échelle globale**. Réglez les tailles telles que vous les voulez sur papier (texte de 2.5 mm), puis réglez l'échelle globale sur l'échelle de tracé (50 pour 1:50). Le texte mesure alors 2.5 × 50 = 125 unités de dessin de haut, ce qui se trace à 2.5 mm.

:::note
Les styles de cote nommés se gèrent avec {{cmd:DIMSTYLE}} : voir la section ci-dessous. Chaque cote conserve aussi les réglages avec lesquels elle a été créée, de sorte que vous pouvez encore modifier une seule cote dans {{ui:Propriétés}}.
:::

## Régler les tailles des nouvelles cotes

Les deux méthodes ci-dessous ne modifient que les cotes que vous créerez ensuite.

### Dans le panneau Réglages actuels

1. Appuyez sur {{key:Esc}} pour ne rien sélectionner. Dans l'onglet {{ui:Modèle}}, le panneau de droite affiche {{ui:Réglages actuels}}.
2. Faites défiler le panneau jusqu'à {{ui:Nouvelles cotes}}, après les lignes de calque, de couleur, d'unités et {{ui:Calque 0}} (sur un petit écran, la section commence sous le bord inférieur). Cliquez dans {{ui:Échelle globale}}, tapez `50` et appuyez sur {{key:Enter}}.
3. Réglez de la même façon {{ui:Hauteur du texte}}, {{ui:Taille de flèche}} et {{ui:Décimales}} si vous voulez d'autres valeurs.

La barre d'état confirme chaque valeur, par exemple « Échelle globale pour les nouvelles cotes : 50 ».

### En ligne de commande

1. Tapez `DIMSCALE` et appuyez sur {{key:Enter}}.
2. À `Enter new value for DIMSCALE <1>`, tapez `50` et appuyez sur {{key:Enter}}.

L'historique confirme « DIMSCALE = 50. Les nouvelles cotes l'utilisent ; sélectionnez les cotes existantes pour modifier les leurs. » {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} et {{cmd:DIMEXO}} fonctionnent de la même façon. Appuyez sur {{key:Enter}} à l'invite pour conserver la valeur actuelle.

### Pieds et pouces dans les cotes

Les nouvelles cotes utilisent le format de longueur du dessin : réglez-le avec {{ui:Format de longueur}} dans {{ui:Réglages actuels}} ou avec {{cmd:UNITS}} (voir [Pieds et pouces](topic:units-papers-scales#feet-and-inches-and-fractions)), et la cote suivante affiche `12'-6 1/2"`. {{cmd:DIMLUNIT}} ne règle que le format des cotes (2 décimales, 3 ingénieur, 4 architectural, 5 fractionnaire). Pour une cote déjà créée, sélectionnez-la et choisissez {{ui:Format}} dans {{ui:Propriétés}} ; avec un format fractionnaire, sa zone {{ui:Fraction}} prend la puissance de deux (4 = 1/16).

## Cotes en mm, cm, m ou km

Une cote mesure en unités de dessin. Elle peut écrire cette longueur en millimètres, centimètres, mètres ou kilomètres, avec l'unité après le nombre : un mur de 1250 mm s'affiche `1250 mm`, `125 cm`, `1.25 m` ou `0.00125 km`.

1. Réglez d'abord les {{ui:Unités}} du dessin dans {{ui:Réglages actuels}} (voir [Unités, formats de papier et échelles](topic:units-papers-scales#drawing-units)), afin que CadCraft sache ce que vaut une unité de dessin. Un dessin sans unités est lu en millimètres, et {{cmd:DIMTEXTUNIT}} l'indique.
2. Pour les nouvelles cotes : appuyez sur {{key:Esc}} pour ne rien sélectionner, puis sous {{ui:Nouvelles cotes}}, choisissez {{ui:Unités dans le texte}} : {{ui:Unités du dessin}}, `mm`, `cm`, `m` ou `km`.
3. Pour les cotes déjà créées : sélectionnez-les, puis dans {{ui:Propriétés}} › {{ui:Unités principales}}, choisissez {{ui:Unités dans le texte}}.

Ou tapez {{cmd:DIMTEXTUNIT}} (`DTU`) et répondez `D`, `MM`, `CM`, `M` ou `KM` : si des cotes sont sélectionnées, elles changent (une seule étape d'annulation) ; sans sélection, cela règle les nouvelles cotes.

{{ui:Décimales}} ({{cmd:DIMDEC}}) règle toujours le nombre de décimales affichées : avec des mètres et 3 décimales, 1234 mm s'affiche `1.234 m`. Le texte est écrit comme un nombre décimal. Sur une feuille, les cotes se mesurent dans l'unité de papier de la feuille (millimètres ou pouces).

Un DWG ou un DXF enregistré conserve ce choix sous forme d'échelle de mesure de la cote (DIMLFAC) et d'un suffixe (DIMPOST, ` m`), afin que les autres logiciels affichent le même texte. Si vous modifiez plus tard les {{ui:Unités}} du dessin, les cotes écrites en mm, cm, m ou km sont recalculées, de sorte qu'elles continuent d'indiquer la bonne longueur. {{ui:Réglé à la main (échelle ou suffixe)}} signifie que l'{{ui:Échelle de mesure}} ou le suffixe de la cote a été réglé autrement ; choisissez une unité pour les remplacer.

## Modifier les cotes déjà créées

1. Cliquez sur une cote. Le titre du panneau de droite affiche {{ui:Cote}}.
2. Les réglages sont regroupés par sections ; faites défiler le panneau pour atteindre les dernières :
   - {{ui:Général}} : {{ui:Style de cote}}
   - {{ui:Géométrie}} : {{ui:Type}} et {{ui:Mesure}} (lecture seule)
   - {{ui:Texte}} : {{ui:Texte de remplacement}} et {{ui:Hauteur du texte}}
   - {{ui:Lignes et flèches}} : {{ui:Taille de flèche}}
   - {{ui:Ajustement}} : {{ui:Échelle globale}}
   - {{ui:Unités principales}} : {{ui:Décimales}}
3. Tapez une nouvelle valeur et appuyez sur {{key:Enter}}.

La cote se redessine aussitôt. Pour les cotes angulaires, {{ui:Décimales (°)}} règle les décimales de l'angle.

:::note
Lorsque plusieurs cotes sont sélectionnées, le panneau affiche les lignes qu'elles ont en commun, et une valeur qui diffère entre elles s'affiche {{ui:Variable}}. Une valeur que vous saisissez modifie toutes les cotes sélectionnées en une seule étape ; un seul {{key:Mod+Z}} les remet toutes en place.
:::

## Cotes issues de dessins ouverts

Une cote issue d'un DWG ou d'un DXF ouvert s'affiche exactement comme l'autre logiciel l'a dessinée. Son panneau indique « Affichée telle que la dessinait le logiciel qui l'a créée. Si vous la modifiez, CadCraft la redessine dans son propre style. » Dès que vous modifiez une valeur, déplacez une poignée ou la cote elle-même, CadCraft la redessine avec ses propres flèches et sa police, en reprenant les tailles lues dans le fichier.

Certaines cotes ne peuvent être lues que telles qu'elles ont été dessinées, et non comme des cotes modifiables ; le panneau affiche alors « Dessinée à partir de » et un nom de bloc, et la boîte « À propos de ce fichier » les compte.

## Erreurs courantes

- **Modifier DIMSCALE n'a rien changé à l'écran.** Le réglage concerne les nouvelles cotes. Sélectionnez les cotes existantes et modifiez {{ui:Échelle globale}} dans le panneau.
- **Les décimales affichent moins de chiffres que prévu.** Les zéros de fin sont supprimés : avec 2 décimales, on lit `1250` et `1250.5`, et non `1250.00`.
- **Le texte a la bonne hauteur sur papier dans une fenêtre de présentation, mais pas dans un tracé du modèle.** L'échelle globale doit correspondre à l'échelle de tracé. Un tracé en Ajuster au papier donne une échelle inhabituelle ; choisissez une échelle standard dans la boîte de dialogue de tracé.
- **Des unités telles que mm ou m dans le texte.** Choisissez {{ui:Unités dans le texte}} (voir [Cotes en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Pour tout autre mot après le nombre, saisissez-le dans un remplacement : `<> TYP.`.

## Styles de cote nommés

Tapez `DIMSTYLE` (`D`) pour ouvrir le {{ui:Gestionnaire de styles de cote}}. Il liste les styles du dessin, le nombre de cotes qui utilise chacun, et celui qui est courant. **Standard** est toujours présent.

- {{ui:Définir l'actuel}} : les nouvelles cotes utilisent les réglages de ce style et portent son nom.
- {{ui:Nouveau…}} : un nouveau style qui démarre comme une copie de celui que vous choisissez.
- {{ui:Modifier…}} : les mêmes champs que la section cote du panneau {{ui:Propriétés}} (lignes et flèches, texte, ajustement, unités, unités de substitution, tolérances). Appuyez sur {{ui:OK}} et le style change, **et chaque cote qui l'utilise change avec lui**, réglage par réglage. Un réglage que vous avez modifié sur une seule cote reste tel quel, sauf si le style modifie ce réglage.
- {{ui:Renommer…}} et {{ui:Supprimer}} : Standard ne peut être ni renommé ni supprimé, pas plus que le style courant ou un style utilisé par des cotes.
- {{ui:Comparer…}} : ce qui diffère entre deux styles.
- {{ui:Appliquer à la sélection}} : sélectionnez d'abord des cotes ; elles prennent les réglages du style et son nom.

`-DIMSTYLE` fait la même chose en ligne de commande : `Restore`, `Save` (les réglages courants, y compris ce que vous avez saisi avec {{cmd:DIMTXT}} et les autres, sous un nom), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Les styles sont enregistrés dans un DWG ou un DXF (dans sa table de styles de cote) et lus depuis les fichiers que vous ouvrez. Le style *courant* n'est pas enregistré : un dessin s'ouvre avec Standard courant. Standard conserve ses propres réglages pendant qu'un autre style est courant.

## Modifier le texte et les lignes d'attache des cotes

{{cmd:DIMEDIT}} (`DED`) agit sur les cotes que vous sélectionnez : **Accueil** remet le texte où le style le place, **Nouveau** saisit un autre texte (`<>` représente la mesure), **Rotation** fait pivoter le texte, **Oblique** incline les lignes d'attache des cotes linéaires et alignées selon un angle que vous saisissez (appuyez sur {{key:Enter}} pour aucun). {{cmd:DIMTEDIT}} déplace le texte à **Gauche**, **Droite** ou **Centre** de la ligne de cote, ou le fait pivoter (**Angle**), ou le renvoie à l'**Accueil**. Le texte reste toujours sur la ligne de cote : il ne peut pas être glissé à un endroit libre.

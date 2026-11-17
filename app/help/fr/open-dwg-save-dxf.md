---
title: Ouvrir un DWG, le modifier et enregistrer une copie
summary: Ouvrez un dessin envoyé par un confrère, vérifiez ce qui a été importé, faites une modification et renvoyez une copie en DWG ou en DXF.
keywords: dwg, dxf, ouvrir, importer, exporter, enregistrer, r12, aller-retour, consultant, xref, vérifier le dessin, saveas, enregistrer sous, enregistrement DWG, format
from: 49de4bf6
---

## Ce que vous allez faire

Ouvrir un DWG envoyé par un consultant, vérifier ce que CadCraft a pu afficher ou non, ajouter une remarque, tracer une feuille en PDF et enregistrer une copie à renvoyer, en DWG ou en DXF.

## Ouvrir le fichier

1. Appuyez sur {{key:Mod+O}}, ou cliquez sur {{ui:Open}}.
2. Choisissez le fichier `.dwg`.

La barre d'état affiche « Lecture… » pendant la lecture du dessin. Une fois la lecture terminée, le dessin occupe tout l'écran, et l'historique indique, par exemple, « Ouvert : plan.dwg, 18,240 objets sur 64 calques », avec la durée de la lecture.

:::offline
Vous êtes hors ligne. Si le bouton {{ui:Save for offline}} affiche « Prêt hors ligne », les fichiers DWG s'ouvrent normalement. Sinon, et si aucun DWG n'a encore été ouvert dans cet onglet, l'ouverture d'un DWG peut échouer, car le lecteur DWG de CadCraft est chargé avec le premier DWG : ouvrez un DXF à la place, ou enregistrez CadCraft pour une utilisation hors ligne la prochaine fois que vous êtes en ligne. Voir [Travailler hors ligne](common:offline).
:::

## Vérifier ce qui a été importé

1. Regardez la section {{ui:Drawing}} du panneau de gauche : format et version, unités, nombre d'objets et de calques, et feuilles.
2. Lisez la boîte « À propos de ce fichier » située sous celle-ci, s'il y en a une.

La boîte affiche :

- **Pas encore affichés :** objets que CadCraft ne peut pas encore dessiner, par type et par nombre. Ils sont omis, et non devinés.
- **Présentations (feuilles) importées :** ouvrez-les avec les onglets situés sous le dessin.
- **Cotes qui n'ont pu être lues que telles qu'elles sont dessinées.**

3. Cliquez sur les onglets sous le dessin pour voir chaque feuille.
4. Vérifiez {{ui:Units}} dans {{ui:Current settings}} (rien de sélectionné, onglet {{ui:Model}}). Si la valeur est {{ui:Unitless}} alors que vous savez que le dessin est en millimètres, modifiez-la, pour que les échelles des feuilles et des tracés soient correctes.

:::tip
Si une partie du dessin devrait être visible et ne l'est pas, vérifiez le panneau {{ui:Layers}} : le calque peut être désactivé ou gelé dans le fichier. Cliquez sur son nom pour le rendre courant ; cela l'active.
:::

## Faire votre modification

1. Créez un calque pour vos notes : cliquez sur {{ui:New layer}}, saisissez `NOTES` et appuyez sur {{key:Enter}}.
2. Saisissez `DT` et appuyez sur {{key:Enter}}.
3. Cliquez à l'emplacement de la note.
4. Saisissez une hauteur de texte adaptée au dessin (voir [Ajouter du texte et des légendes](topic:text)) et appuyez sur {{key:Enter}}.
5. Appuyez sur {{key:Enter}} pour conserver la rotation à 0.
6. Saisissez votre note et appuyez sur {{key:Enter}}.
7. Appuyez de nouveau sur {{key:Enter}} pour terminer.

Les modifications des cotes importées ne posent aucun problème : dès que vous en modifiez une, CadCraft la redessine dans son propre style.

## Tracer une feuille pour relecture

1. Cliquez sur l'onglet de la feuille.
2. Appuyez sur {{key:Mod+P}}.
3. Cliquez sur {{ui:Download PDF}}.

Voir [Tracer en PDF](topic:plot-pdf).

## Enregistrer une copie

1. Appuyez sur {{key:Mod+S}}, ou cliquez sur {{ui:Save}}.

Vous avez ouvert un DWG : le navigateur télécharge `<name>.dwg`, dans la version d'origine du DWG. L'historique indique, par exemple, « Copie enregistrée sous : Plan.dwg (DWG (AutoCAD 2018)). » et liste, sur les lignes en dessous, tout ce qui a changé au passage.

2. Lisez ces lignes avant d'envoyer le fichier. [Ce qu'un DWG conserve et modifie](topic:files#what-a-dwg-keeps-and-changes) explique chacune d'elles.

Votre DWG d'origine n'est jamais modifié. Chaque enregistrement crée un nouveau téléchargement.

## Enregistrer en DWG ou en DXF

Pour choisir vous-même le format :

1. Appuyez sur {{key:Mod+Shift+S}}, ou cliquez sur {{ui:Save as}}.

La boîte de dialogue {{ui:Save a copy as}} s'ouvre avec quatre choix, chacun avec le nom de fichier qu'il donnera : {{ui:DWG}}, avec sa liste {{ui:Version}}, {{ui:DXF R12}}, {{ui:DXF 2000}} et {{ui:DXF 2000 (binary)}}. Le format et la version actuels du dessin sont déjà sélectionnés.

2. Cliquez sur le format voulu. Pour le DWG, choisissez la version utilisée par l'autre bureau, ou une version plus ancienne : AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000.
3. Cliquez sur {{ui:Save}}.

La copie se télécharge. Dès maintenant, {{key:Mod+S}} enregistre ce dessin dans ce format, et les nouveaux dessins commencent aussi avec ce format, dans ce navigateur. {{ui:Cancel}} ou {{key:Esc}} n'enregistre rien, et l'historique indique « Non enregistré ».

Lequel choisir :

- **DWG** conserve le plus : les feuilles avec leurs fenêtres de présentation, les cotes réelles, les motifs de hachures, les noms de calques et de blocs tels que vous les avez saisis, et le texte multiligne en texte multiligne. La version AutoCAD 2000 s'ouvre dans le plus de logiciels ; les versions 2004 et ultérieures conservent aussi les couleurs réelles.
- **DXF 2000** est un fichier texte qui conserve presque tout ce que conserve un DWG : chaque feuille comme présentation avec ses fenêtres, les cotes réelles, les motifs de hachures, les couleurs réelles, les épaisseurs de ligne, les types de ligne, et les noms tels que vous les avez saisis. Il s'ouvre dans AutoCAD 2000 et les versions ultérieures, ainsi que dans la plupart des logiciels de CAO. Les lignes de repère multiples deviennent les lignes, pointes de flèche et textes qu'elles dessinent. Un DXF ouvert en version 2000 ou ultérieure s'enregistre en DXF 2000.
- **DXF 2000 (binary)** contient le même contenu que le DXF 2000, sous la forme binaire du format : un fichier plus petit qui conserve chaque nombre exactement. Les fichiers DXF binaires venant d'autres logiciels s'ouvrent comme les fichiers texte, et un dessin ouvert depuis un DXF binaire s'enregistre de nouveau en binaire.
- **DXF R12** s'ouvre dans presque tous les logiciels de CAO. Il conserve la première feuille avec ses fenêtres, ainsi que les autres feuilles de CadCraft. Il simplifie les éléments plus récents, comme le texte multiligne et les hachures.

## Ce que verra l'autre bureau

Dans un DWG :

- Lignes, arcs, cercles, ellipses, polylignes, texte, texte multiligne, blocs avec leurs attributs, remplissages pleins, motifs de hachures et calques tels que vous les voyez.
- Cotes réelles : l'autre logiciel les recalcule lorsqu'elles sont étirées.
- Chaque feuille, avec son papier et ses fenêtres de présentation.
- Lignes de repère multiples, comme lignes de repère multiples. Dans la version AutoCAD 2000, les couleurs réelles deviennent la couleur standard la plus proche.

Dans un DXF R12 :

- Lignes, arcs, cercles, polylignes, texte, références de blocs et cotes tels que vous les voyez. Les cotes restent des cotes réelles.
- Noms de calques en majuscules, les espaces étant remplacés par `_`.
- La première feuille devient l'espace papier du dessin, avec ses fenêtres. Les feuilles suivantes arrivent sous forme de blocs nommés `CCLAYOUT_1`, et ainsi de suite ; si l'autre bureau a besoin de chaque feuille comme présentation, tracez aussi un PDF de chaque feuille pour lui.
- Texte multiligne en lignes séparées, ellipses en polylignes, hachures en contours.

Dans les deux cas, tout ce qui figurait dans « Pas encore affichés » à l'ouverture du DWG n'est **pas** dans la copie, sauf si l'historique indique qu'il a été conservé : les objets OLE d'un DWG et ses solides 3D dans l'espace objet sont réécrits lorsque vous enregistrez en DWG. Prévenez-les, et envoyez aussi un PDF.

## Erreurs courantes

- **« CadCraft ouvre les dessins DWG et DXF. »** Le fichier a une autre extension. Vérifiez qu'il s'agit d'un `.dwg` ou d'un `.dxf`.
- **« Ce dessin n'a pas pu être lu. »** Le DWG est endommagé ou dans une version que le lecteur ne prend pas en charge. Demandez un DXF, ou le DWG enregistré dans une version plus ancienne.
- **« Ce DXF binaire se termine au milieu d'un objet. »** Le fichier est tronqué ou endommagé. Saisissez RECOVER pour ouvrir ce qui peut être lu, ou demandez à nouveau le fichier.
- **Le fichier enregistré s'appelle `name (1).dwg` ou `name (1).dxf`.** Le navigateur procède ainsi lorsqu'un fichier de même nom existe déjà dans le dossier.
- **Leur logiciel est plus ancien et ne peut pas ouvrir le DWG.** Enregistrez en DWG avec la {{ui:Version}} {{ui:AutoCAD 2000}}, ou en {{ui:DXF R12}} : presque tous les logiciels de CAO l'ouvrent.
- **Des parties du dessin manquent.** Les dessins liés (xrefs) ne sont pas chargés tant que vous n'avez pas choisi leurs fichiers ({{cmd:XREF}}, `R`), et les images s'affichent comme des cadres avec leurs noms de fichiers.

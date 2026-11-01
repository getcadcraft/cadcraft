---
title: Fichiers : ce qui s'ouvre, ce qui s'enregistre
summary: Les formats que CadCraft ouvre, enregistre et exporte, ce qui est conservé ou converti, et où vont les fichiers.
keywords: xclip, découpage, limite de découpage, fusionner un découpage, dwg, dxf, pdf, r12, ouvrir, enregistrer, exporter, importer, formats, conversion, télécharger, enregistrer sous, dxfout, format, qsave, xref, xattach, dessin lié, référence externe, fusionner, recharger, détacher
from: 6d68b34e
---

## En un coup d'œil

| Format | Ouvrir | Enregistrer | Remarques |
|---|---|---|---|
| DXF (texte, toute version) | Oui | Oui, en DXF R12 ou DXF 2000 | Le DXF binaire est refusé : enregistrez-le d'abord en DXF texte. |
| DWG | Oui | Oui, en DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018) | Lu et écrit par la propre bibliothèque DWG de CadCraft (fichiers AutoCAD R13 à 2018). Votre DWG n'est jamais modifié. Les fichiers endommagés, ou les versions que le lecteur ne gère pas, sont refusés avec un message. |
| PDF | Fait entrer une page : en fond de plan ou en objets ([Fonds de plan PDF](topic:pdf-underlay)) | Oui, par le traçage | PDF vectoriel d'une feuille, ou du modèle à une échelle. |

Chaque dessin que vous ouvrez (ou démarrez avec {{ui:Nouveau}}) obtient son propre onglet au-dessus de la zone de dessin ; un nouveau dessin que personne n'a touché est réutilisé au lieu d'ajouter un onglet. Cliquez sur un onglet pour passer de l'un à l'autre, sur son {{ui:×}} pour le fermer (CadCraft demande d'abord s'il y a des modifications non enregistrées), ou juxtaposez les dessins ouverts : voir [Diviser l'écran](topic:split-screen).

## Ouvrir un dessin

- Appuyez sur {{key:Mod+O}}, cliquez sur {{ui:Ouvrir}}, ou saisissez `OPEN`, puis choisissez le fichier.
- Ou faites glisser un fichier `.dwg` ou `.dxf` sur la zone de dessin.

Le fichier est lu dans votre navigateur. Il n'est téléversé nulle part. L'historique indique combien d'objets et de calques sont entrés et le temps que cela a pris, et la section {{ui:Dessin}} du panneau de gauche affiche le format, par exemple « DWG 2018 (AC1032) ».

Le lecteur DWG fait partie de CadCraft et se charge avec le premier DWG que vous ouvrez après le chargement de la page (quelques centaines de Ko), il n'y a donc pas de téléchargement séparé à attendre. Il lit le fichier en arrière-plan, la page reste donc réactive pendant l'ouverture d'un gros DWG.

### Ce qui entre

- Lignes, arcs, cercles, polylignes (avec segments d'arc), ellipses, points, texte et texte multiligne, solides, hachures (les motifs standard tracés avec leurs lignes, les autres en teinte plate), références de bloc avec leurs attributs (des valeurs que vous pouvez modifier ; voir [Attributs de bloc](topic:attributes)), cotes, et présentations avec leurs fenêtres de présentation.
- Les splines entrent comme des splines (degré, points de contrôle, nœuds, poids, points d'ajustement) ; voir [Splines et polylignes](topic:splines).
- Les lignes de repère multiples à une seule ligne de repère et un texte entrent comme des lignes de repère multiples CadCraft que vous pouvez modifier (voir {{cmd:MLEADER}}). Les autres (avec un bloc, plusieurs lignes de repère ou des lignes courbes) sont dessinées comme l'autre logiciel les a dessinées et se déplacent d'un bloc ; l'historique indique combien.
- Les images s'affichent sous forme d'un cadre portant le nom du fichier de l'image, jusqu'à ce que vous donniez le fichier à CadCraft avec {{cmd:IMAGE}} : voir [Images dans un dessin](topic:pictures#show-the-pictures-a-dwg-uses). Les masques (wipeouts) s'affichent comme leur cadre, et ce qui se trouve dessous reste visible.
- Les tableaux d'un DWG entrent tels que l'autre logiciel les a dessinés.
- Les faces 3D de l'espace objet entrent sur l'onglet {{ui:3D}}, pas comme des objets 2D ; il en va de même de celles qui se trouvent dans des blocs, une fois par référence de bloc dans le modèle. Dans un bloc et sur une feuille, elles sont aussi tracées à plat, en contours. Voir [Modéliser en 3D](topic:3d-solids).
- Les calques gardent leur couleur et leurs réglages d'activation, de gel, de verrouillage et de traçage. DEFPOINTS ne se trace jamais.
- Les cotes deviennent de vraies cotes CadCraft modifiables là où leurs points peuvent être lus. Elles sont d'abord affichées exactement comme l'autre logiciel les a dessinées ; dès que vous en modifiez une, CadCraft la redessine dans son propre style.
- Chaque présentation devient un onglet de feuille. Dans l'autre logiciel, chaque présentation a une première fenêtre de présentation cachée qui est la feuille elle-même ; CadCraft l'omet.

### Ce qui n'entre pas encore

Tout ce que CadCraft ne sait pas dessiner est compté, pas deviné. La boîte « À propos de ce fichier » du panneau de gauche le liste sous « Pas encore affichés : » suivi de chaque sorte d'objet et de leur nombre. Cas typiques : les tableaux d'un DXF, les maillages et les solides 3D dans des blocs. Les solides 3D, les régions et les corps de l'espace objet s'affichent sur l'onglet 3D (voir [Modéliser en 3D](topic:3d-solids#solids-from-other-programs)). Les fenêtres de présentation tournées dans le fichier s'affichent tournées, comme dans l'original, et gardent leur rotation à l'enregistrement ; il en va de même du SCU courant, des SCU nommés et d'une vue tournée.

Le texte est tracé dans une seule police de style Helvetica. Une étiquette qui tient sur une ligne dans la police plus étroite du logiciel d'origine peut passer sur deux lignes dans CadCraft.

## Enregistrer

Il y a trois façons d'enregistrer. Chacune télécharge une copie.

- **Enregistrer** : appuyez sur {{key:Mod+S}}, cliquez sur {{ui:Enregistrer}}, ou saisissez `SAVE` (ou `QSAVE`). Il enregistre dans le format du dessin : DWG si vous avez ouvert un DWG, DXF si vous avez ouvert un DXF. Un DWG garde la version dans laquelle il est entré (un fichier 2018 s'enregistre en 2018). Un nouveau dessin utilise le format et la version DWG que vous avez choisis en dernier dans Enregistrer sous dans ce navigateur ; si vous n'en avez jamais choisi, DWG au format AutoCAD 2000.
- **Enregistrer sous** : appuyez sur {{key:Mod+Shift+S}}, cliquez sur {{ui:Enregistrer sous}}, ou saisissez `SAVEAS`. La boîte de dialogue {{ui:Enregistrer une copie sous}} propose {{ui:DWG}}, avec une liste {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000), {{ui:DXF R12}} et {{ui:DXF 2000}}, chacun avec le nom de fichier qu'il donnera, et le format et la version actuels du dessin déjà sélectionnés. Cliquez sur {{ui:Enregistrer}} pour télécharger, ou sur {{ui:Annuler}} (ou {{key:Esc}}) pour ne rien enregistrer ; l'historique indique alors « Non enregistré. » Votre choix est mémorisé : {{key:Mod+S}} l'utilise ensuite pour ce dessin, et les nouveaux dessins de ce navigateur démarrent avec.
- **DXFOUT** : saisissez `DXFOUT`. Il télécharge toujours une copie DXF R12, et le {{key:Mod+S}} suivant enregistre toujours dans le format propre au dessin.

Le navigateur télécharge `<nom du dessin>.dwg` ou `<nom du dessin>.dxf`. Chaque enregistrement est un **nouveau téléchargement** ; le fichier que vous avez ouvert n'est jamais écrasé ni modifié. L'historique le confirme, par exemple « Copie enregistrée sous Plan.dwg (DWG (AutoCAD 2018)). Votre fichier d'origine Plan.dxf n'a pas été modifié. » Pour un DXF, il indique « (DXF R12, s'ouvre dans tout logiciel de CAO) ». Les lignes qui suivent listent tout ce qui a changé en route.

Quand CadCraft fonctionne dans l'application de bureau, l'enregistrement se comporte comme dans les autres logiciels de bureau : {{key:Mod+S}} réécrit le dessin dans le fichier que vous avez ouvert, dans son propre format et sa propre version, et l'historique indique où il a été enregistré. {{ui:Enregistrer sous}} et les exportations affichent la boîte de dialogue d'enregistrement du système, et un fichier `.dwg`, `.dxf` ou `.ccsheets` sur lequel vous double-cliquez s'ouvre dans CadCraft.

Pour un PDF, tracez plutôt (voir plus bas).

## Ce qu'un DWG conserve et modifie

CadCraft écrit lui-même le DWG, dans votre navigateur, avec la même bibliothèque DWG que celle qu'il utilise pour lire. Choisissez la version dans Enregistrer sous : le format AutoCAD 2000 (version de fichier AC1015) s'ouvre dans le plus grand nombre de logiciels, anciens compris ; les formats plus récents (2004, AC1018, jusqu'à 2018, AC1032) conservent aussi les vraies couleurs. Rien n'est téléversé, et l'enregistrement d'un DWG fonctionne hors ligne.

Chaque version est vérifiée en relisant les fichiers enregistrés avec les lecteurs DWG de trois autres logiciels et avec CadCraft lui-même. Un DWG de CadCraft n'a pas encore été ouvert dans AutoCAD lui-même.

### Ce qu'un DWG conserve

- Lignes, arcs, cercles, ellipses, points, et polylignes avec leurs segments d'arc.
- Texte monoligne avec son alignement et son facteur de largeur.
- Texte multiligne et texte avec retour à la ligne, comme texte multiligne. L'autre logiciel le remet en forme à partir de la même largeur.
- Couleurs des objets : DuCalque, DuBloc, les 255 couleurs standard, et les vraies couleurs au format 2004 et suivants.
- Calques avec leur couleur, leur type de ligne, leur épaisseur de ligne et leurs réglages d'activation, de gel, de verrouillage et de traçage ; types de ligne, épaisseurs de ligne et échelles de type de ligne propres aux objets, motifs des types de ligne et échelle de type de ligne du dessin.
- Les unités du dessin et le format de longueur (décimal, pieds et pouces, fractions…).
- Blocs avec leur point de base et leurs définitions d'attributs, y compris invisibles, constants et prédéfinis.
- Références de bloc avec leur échelle, leur rotation et leurs valeurs d'attributs.
- Remplissages pleins, et hachures à motif avec leur motif, leur échelle et leur angle (les lignes propres du motif, de sorte que les autres logiciels tracent les mêmes lignes que CadCraft).
- Cotes, comme de vraies cotes : les autres logiciels les remesurent quand elles sont étirées. Chacune garde ses propres réglages (hauteur du texte, taille de flèche, décimales, format de longueur) et son texte, et porte la copie dessinée que possède toute cote DWG.
- Feuilles (présentations) : chaque feuille avec son format de papier et ses unités, ce qui y est dessiné, et ses fenêtres de présentation avec leur vue et leur échelle.
- Vues nommées.
- Lignes de repère multiples, comme lignes de repère multiples.
- Noms de calques et de blocs tels que vous les avez saisis, en majuscules et en minuscules. (Le DXF R12 les écrit en majuscules.)

### Ce qu'un DWG modifie

Chacun de ces points est listé dans l'historique après l'enregistrement, quand il concerne votre dessin.

| Dans CadCraft | Dans le DWG enregistré |
|---|---|
| Vraies couleurs (choisies avec le sélecteur de couleur), au format 2000 | La couleur standard la plus proche : le format 2000 n'a que les 255. Enregistrez en 2004 ou plus récent pour les conserver |
| Vues nommées d'une feuille | Vues de l'espace papier : un DWG n'indique pas de quelle feuille il s'agit, de sorte que lorsque CadCraft rouvre le fichier elles appartiennent à la première feuille |
| Texte multiligne avec un facteur de largeur | Largeur de lettre normale : dans un DWG, le facteur de largeur ne s'applique qu'au texte monoligne |
| Noms de calques ou de blocs contenant des caractères que le DWG n'autorise pas | Modifiés : un nom provenant d'un dessin lié comme `Base\|Walls` devient `Base$0$Walls` (la façon dont la fusion d'un dessin lié nomme les éléments), et les autres caractères deviennent `_` |

### Pourquoi R12, et ce qui est converti

Quand vous enregistrez en DXF, CadCraft écrit du DXF R12, la version que tous les logiciels de CAO savent ouvrir. Elle est plus ancienne que certaines fonctions, de sorte que quelques éléments sont écrits sous une forme plus simple :

| Dans CadCraft | Dans le fichier R12 enregistré |
|---|---|
| Texte multiligne | Un objet texte par ligne |
| Ellipses | Polylignes qui suivent l'ellipse |
| Hachures (de fichiers ouverts) | Leurs contours seulement |
| Vraies couleurs (choisies avec le sélecteur de couleur) | La couleur standard la plus proche |
| Épaisseurs de ligne, et échelles de type de ligne propres aux objets | Omises : le R12 n'a ni l'une ni l'autre (les types de ligne sont conservés) |
| Noms de calques et de blocs | Écrits en majuscules ; les espaces et autres caractères deviennent `_`, et les noms sont coupés à 31 caractères (« Title block » devient `TITLE_BLOCK`) |
| Calques réglés pour ne pas être tracés | Les autres logiciels les traceront (CadCraft mémorise le réglage quand le dessin a une feuille) |
| Cotes | De vraies cotes avec leur propre bloc dessiné, de sorte que les autres logiciels les montrent comme vous les voyez |
| Lignes de repère multiples | Les lignes, la pointe de flèche et le texte qu'elles dessinent |
| Vues nommées | Conservées, avec des noms en majuscules ; les vues d'une feuille reviennent sur la première feuille |
| Plusieurs feuilles | La première feuille est l'espace papier que tous les logiciels affichent ; les autres sont conservées comme des blocs nommés `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft retransforme en feuilles à l'ouverture du fichier |

L'historique liste chacun de ces points qui a concerné votre dessin.

:::tip
Pour continuer à travailler sur un dessin pendant plusieurs jours, enregistrez-le en DXF et ouvrez ce DXF la fois suivante. Tout ce que CadCraft sait dessiner survit à l'aller-retour, y compris les cotes, les blocs et toutes les feuilles.
:::

## Dessins liés (références externes)

{{cmd:XATTACH}} (`XA`, ou {{ui:Blocs}} › {{ui:Plus}} › {{ui:Lier un dessin (xref)}}) lie un autre DWG ou DXF : choisissez le fichier, puis cliquez à l'endroit où il va ({{key:Enter}} le place en 0,0). Il entre sous la forme d'un bloc portant le nom du fichier, à la bonne échelle quand les deux dessins ont des unités différentes. Ses calques et ses blocs gardent leurs noms précédés du nom du lien — `Plan|Walls`, `Plan|Door` — de sorte qu'ils ne se mélangent jamais aux vôtres : activez et désactivez les calques liés, gelez-les ou verrouillez-les comme les vôtres. Un lien est en lecture seule : modifiez l'autre dessin et rechargez-le. Ce que vous réglez sur les calques d'un lien (couleur, type de ligne, épaisseur de ligne, activation, gel, verrouillage, traçage) est conservé quand vous le rechargez, quand vous enregistrez le dessin en DWG alors que le lien est encore un lien, et quand un autre dessin lie celui-ci.

{{cmd:XREF}} (`XR`) : `?` liste les liens (chargés ou non, quel fichier, combien de références) ; `A` en attache un ; `R` en recharge un depuis son fichier (choisissez de nouveau le fichier : le navigateur ne peut pas accéder seul à vos dossiers) ; `B` en fusionne un (il devient des blocs et des calques ordinaires nommés `Plan$0$Walls`) ; `D` en détache un (ses références et ses calques disparaissent). Chacune est une seule étape d'annulation.

{{cmd:XCLIP}} (`XC`) découpe les références de bloc et les liens : sélectionnez-les, `N` pour une nouvelle limite, puis `R` et deux coins, ou `P` et les points d'un polygone ({{key:Enter}} le ferme) ; `D` supprime le découpage. Seul ce qui se trouve à l'intérieur s'affiche et se trace, et le découpage suit la référence. Le DWG et le DXF 2000 conservent les découpages ; le DXF R12 enregistre la référence entière et le signale. Quand vous fusionnez un lien qui a des références découpées, {{cmd:XREF}} `B` demande : `A` fusionne tout, `C` ne garde que la partie découpée de chaque référence (les lignes et les arcs sont coupés à la limite ; les textes et les blocs imbriqués restent quand leur point d'insertion est à l'intérieur).

Un dessin que vous ouvrez peut lier des fichiers que CadCraft ne voit pas : il indique combien ne sont pas chargés. Utilisez {{cmd:XREF}}, `R` et choisissez chaque fichier pour les voir.

À l'enregistrement, un lien chargé est **fusionné** dans le fichier (les autres logiciels voient des blocs et des calques ordinaires nommés `Plan$0$…`), et l'historique l'indique. Un lien qui n'est pas chargé reste un lien vers son fichier, en DWG comme en DXF.

## Ouvrir en 3D

{{ui:Vue}} › {{ui:Plus}} › {{ui:Ouvrir dans ModelCraft}} ({{cmd:OPENIN3D}}) ouvre le dessin dans l'application de modélisation 3D, dans un nouvel onglet, en DWG, sans le téléverser. Les modifications faites là-bas y restent ; enregistrez-les là-bas. L'élément de menu ne s'affiche que là où cette application peut recevoir un dessin transmis.

## Tracer un PDF

Appuyez sur {{key:Mod+P}}, cliquez sur {{ui:Tracer}}, ou saisissez `PLOT`. Le PDF est créé dans le navigateur puis téléchargé, ou ouvert dans un nouvel onglet pour l'impression. Voir [Tracer en PDF](topic:plot-pdf).

## Où vont les fichiers

Chaque enregistrement et chaque traçage est un téléchargement : les fichiers atterrissent donc là où votre navigateur place les téléchargements, en général le dossier Téléchargements. Pour choisir un dossier à chaque fois, modifiez le réglage de téléchargement de votre navigateur ; [Navigateurs et ordinateurs](common:browsers) indique où.

Rien de ce que vous ouvrez ou enregistrez ne nous est envoyé. Voir [Où vont vos fichiers](common:your-files).

## Fichiers de projet PLN et PLA

CadCraft ouvre les dessins DWG et DXF, pas les fichiers propres à Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). En ouvrir un vous dit ce que c'est. Dans Archicad, enregistrez en DWG les vues ou les présentations dont vous avez besoin et ouvrez-les ici, ou exportez le modèle en IFC et ouvrez-le dans BimCraft. Là où BimCraft peut reprendre le fichier, CadCraft propose {{ui:Ouvrir dans BimCraft}}.

## Si la page se ferme avant l'enregistrement

CadCraft conserve une copie de chaque dessin que vous modifiez, dans ce navigateur seulement, un instant après que vous avez cessé de modifier. Si l'onglet se ferme, si le navigateur s'arrête ou si l'ordinateur redémarre avant que vous n'enregistriez, CadCraft demande **Récupérer votre travail ?** au prochain démarrage : {{ui:Récupérer}} rouvre le dessin, non enregistré, dans son propre onglet. Enregistrer le dessin supprime sa copie. Voir [Récupérer votre travail](common:recover).

## En ligne et hors ligne

Ouvrir, dessiner, enregistrer (DWG et DXF) et tracer se font tous sur votre ordinateur, et fonctionnent donc sans connexion une fois CadCraft chargé.

Pour utiliser CadCraft sans aucune connexion, cliquez sur {{ui:Enregistrer pour le hors ligne}} dans la barre du haut pendant que vous êtes en ligne. Le libellé compte (« Enregistrement : 40 sur 212 ») et se termine par « Prêt hors ligne ». La copie enregistrée comprend le lecteur DWG, environ 5 Mo en tout, de sorte que les **fichiers DWG s'ouvrent aussi hors ligne** une fois la copie enregistrée. Cliquez de nouveau sur le bouton pour {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} ou {{ui:Supprimer la copie hors ligne}}. « Enregistrement impossible » signifie que certains fichiers ne se sont pas téléchargés : vérifiez la connexion et cliquez pour réessayer. « Hors ligne indisponible » signifie que cette fenêtre de navigateur ne peut pas conserver de copie (fenêtres privées et certains ordinateurs gérés).

Sans copie enregistrée, le lecteur DWG est récupéré la première fois que vous ouvrez un DWG après le chargement de la page, de sorte que l'ouverture d'un DWG hors ligne peut échouer ; les fichiers DXF n'en ont jamais besoin. Ne rechargez pas la page hors ligne sauf si CadCraft est enregistré.

Voir [Travailler hors ligne](common:offline) pour les détails.

:::offline
Vous êtes hors ligne. Les dessins s'enregistrent en DWG ou en DXF et se tracent normalement, et les fichiers DXF s'ouvrent. Les fichiers DWG s'ouvrent si CadCraft affiche « Prêt hors ligne », ou si le lecteur DWG s'est déjà chargé dans cet onglet.
:::

## Contraintes dans les fichiers

Les contraintes et les paramètres (voir [Contraindre un dessin](topic:constraints)) sont enregistrés en DWG comme en DXF. Chaque objet contraint porte une petite note CadCraft (données étendues), et un bloc inutilisé nommé `CADCRAFT_PARAMETRIC` contient les contraintes et le tableau des paramètres. Les autres logiciels ouvrent le dessin normalement et ignorent les deux ; ils peuvent supprimer le bloc inutilisé lors d'une purge. Les notes désignent les objets par leur propre clé, pas par les poignées du fichier, de sorte qu'un logiciel qui renumérote les poignées ne les casse pas. Quand un autre logiciel a supprimé ou modifié un objet contraint, CadCraft abandonne les contraintes qui le concernent à l'ouverture du fichier et indique combien. Un fichier qui n'en contient pas s'ouvre sans contraintes.

Une esquisse exportée depuis un modeleur de pièces (`.json`) s'ouvre aussi : voir [Échanger des esquisses avec d'autres modeleurs de pièces](topic:solidworks-sketches).

## Pas encore disponible

- Les lignes de repère multiples comme objets de ligne de repère multiple dans un DXF enregistré (le R12 n'en a pas : elles sont enregistrées comme ce qu'elles dessinent).
- Les images dans un DXF enregistré (elles s'enregistrent comme leurs cadres ; le DWG les conserve comme images), et les masques qui cachent ce qui se trouve dessous.
- L'enregistrement dans une version de DXF plus récente que 2000.
- L'enregistrement dans le cloud et la synchronisation entre ordinateurs.

Voir [Pas encore réalisé](topic:not-built-yet) pour la liste complète.

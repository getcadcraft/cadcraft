---
title: "Fichiers : ce qui s'ouvre, ce qui s'enregistre"
summary: Les formats que CadCraft ouvre, enregistre et exporte, ce qui est conservé ou converti, et où vont les fichiers.
keywords: xclip, clip, limite xclip, lier découpé, dwg, dxf, pdf, r12, ouvrir, enregistrer, exporter, importer, formats, conversion, télécharger, saveas, dxfout, enregistrer sous, enregistrement dwg, format, qsave, xref, xattach, dessin lié, référence externe, lier, recharger, détacher
from: b8c5778d
---

## En bref

| Format | Ouverture | Enregistrement | Remarques |
|---|---|---|---|
| DXF (texte ou binaire, toute version) | Oui | Oui, en DXF R12, DXF 2000 ou DXF 2000 (binaire) | Un DXF binaire s'ouvre comme un DXF texte et s'enregistre de nouveau en binaire. |
| DWG | Oui | Oui, en DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018) | Lu et écrit par la propre bibliothèque DWG de CadCraft (fichiers AutoCAD R13 à 2018). Votre DWG n'est jamais modifié. Les fichiers endommagés, ou les versions que le lecteur ne gère pas, sont refusés avec un message. |
| PDF | Importe une page : en fond ([Fonds PDF](topic:pdf-underlay)) ou en objets | Oui, par tracé | PDF vectoriel d'une feuille, ou du modèle à une échelle donnée. |

Chaque dessin que vous ouvrez (ou créez avec {{ui:Nouvelle}}) reçoit son propre onglet au-dessus de la zone de dessin ; un nouveau dessin que personne n'a encore modifié est utilisé à la place d'un nouvel onglet. Cliquez sur un onglet pour basculer, sur son {{ui:×}} pour le fermer (CadCraft demande d'abord s'il y a des modifications non enregistrées), ou disposez les dessins ouverts côte à côte : voir [Partager l'écran](topic:split-screen).

## Ouvrir un dessin

- Appuyez sur {{key:Mod+O}}, cliquez sur {{ui:Ouvrir}}, ou saisissez `OPEN`, puis choisissez le fichier.
- Ou faites glisser un fichier `.dwg` ou `.dxf` dans la zone de dessin.

Le fichier est lu dans votre navigateur. Il n'est envoyé nulle part. L'historique indique combien d'objets et de calques ont été importés et le temps que cela a pris, et la section {{ui:Dessin}} du panneau de gauche affiche le format, par exemple « DWG 2018 (AC1032) ».

Le lecteur DWG fait partie de CadCraft ; il est récupéré avec le premier DWG que vous ouvrez après le chargement de la page (quelques centaines de KB), donc il n'y a aucun téléchargement séparé à attendre. Il lit le fichier en arrière-plan, si bien que la page reste réactive pendant l'ouverture d'un gros DWG.

Un DXF est lu par morceaux d'environ 4 MB, jamais comme un seul bloc de texte, si bien qu'un DXF de plus de 512 MB s'ouvre aussi. Ce qui limite l'ouverture, c'est la mémoire de votre ordinateur : pendant l'ouverture d'un DXF, comptez environ 16 à 20 fois la taille du fichier (un DXF de 100 MB comportant environ 690 000 objets a utilisé environ 1.5 GB lors de notre essai).

### Ce qui est importé

- Lignes, arcs, cercles, polylignes (avec segments d'arc), ellipses, points, texte et texte multiligne, solides, hachures (les motifs standard sont dessinés comme leurs lignes, les autres en teinte plate), références de bloc avec leurs attributs (valeurs modifiables ; voir [Attributs de bloc](topic:attributes)), cotes, et présentations avec leurs fenêtres de présentation.
- Les splines entrent comme des splines (degré, points de contrôle, nœuds, poids, points d'ajustement) ; voir [Splines et polylignes](topic:splines).
- Les multirepères composés d'une ligne de repère et de texte entrent comme des multirepères CadCraft modifiables (voir {{cmd:MLEADER}}). Les autres (avec un bloc, plusieurs lignes de repère ou des lignes courbes) sont dessinés comme les a dessinés l'autre programme et se déplacent d'un seul tenant ; l'historique indique combien.
- Les images apparaissent comme un cadre portant le nom du fichier de l'image, tant que vous ne fournissez pas le fichier à CadCraft avec {{cmd:IMAGE}} : voir [Images dans un dessin](topic:pictures#show-the-pictures-a-dwg-uses). Les masques d'effacement s'affichent par leur cadre, et ce qui se trouve dessous reste visible.
- Les tableaux d'un DWG entrent tels que les a dessinés l'autre programme.
- Les faces 3D de l'espace objet entrent dans l'onglet {{ui:3D}}, et non comme des objets 2D ; il en va de même pour celles qui se trouvent dans des blocs, une fois par référence de bloc dans le modèle. Dans un bloc et sur une feuille, elles sont aussi dessinées à plat, sous forme de contours. Voir [Modèle en 3D](topic:3d-solids).
- Les calques conservent leur couleur ainsi que leurs réglages activé, gelé, verrouillé et tracé. DEFPOINTS ne se trace jamais.
- Les cotes deviennent de véritables cotes CadCraft modifiables lorsque leurs points peuvent être lus. Elles s'affichent d'abord exactement comme l'autre programme les a dessinées ; dès que vous en modifiez une, CadCraft la redessine dans son propre style.
- Chaque présentation devient un onglet de feuille. Dans l'autre programme, chaque présentation possède une première fenêtre de présentation cachée qui est la feuille elle-même ; CadCraft l'omet.

### Ce qui n'est pas encore importé

Tout ce que CadCraft ne peut pas dessiner est compté, et non deviné. La boîte « À propos de ce fichier » du panneau de gauche le répertorie sous « Pas encore affiché : », suivi de chaque type d'objet et de leur nombre. Les cas typiques sont les tableaux d'un DXF, les maillages et les solides 3D situés à l'intérieur de blocs. Les solides 3D, régions et corps de l'espace objet s'affichent dans l'onglet 3D (voir [Modèle en 3D](topic:3d-solids#solids-from-other-programs)). Les fenêtres de présentation inclinées dans le fichier s'affichent inclinées, comme dans l'original, et conservent leur inclinaison à l'enregistrement ; il en va de même pour le UCS courant, les UCS nommés et une vue tournée.

Le texte est dessiné dans une seule police de type Helvetica. Une étiquette qui tient sur une ligne dans la police, plus étroite, du programme d'origine peut passer sur deux lignes dans CadCraft.

## Enregistrer

Il existe trois façons d'enregistrer. Chacune télécharge une copie.

- **Enregistrer** : appuyez sur {{key:Mod+S}}, cliquez sur {{ui:Enregistrer}}, ou saisissez `SAVE` (également `QSAVE`). Il enregistre dans le format du dessin : DWG si vous avez ouvert un DWG, DXF si vous avez ouvert un DXF. Un DWG conserve la version dans laquelle il est arrivé (un fichier 2018 s'enregistre en 2018). Un nouveau dessin utilise le format et la version DWG que vous avez choisis en dernier dans {{ui:Enregistrer sous}} dans ce navigateur ; si vous n'en avez jamais choisi, c'est DWG au format AutoCAD 2000.
- **Enregistrer sous** : appuyez sur {{key:Mod+Shift+S}}, cliquez sur {{ui:Enregistrer sous}}, ou saisissez `SAVEAS`. La boîte {{ui:Enregistrer une copie sous}} propose {{ui:DWG}}, avec une liste {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ou 2000), DXF R12 et {{ui:DXF 2000}}, chacun avec le nom de fichier qu'il donnera, et le format et la version actuels du dessin déjà sélectionnés. Cliquez sur {{ui:Enregistrer}} pour télécharger, ou sur {{ui:Annuler}} (ou {{key:Esc}}) pour n'enregistrer rien ; l'historique affiche alors « Non enregistré ». Votre choix est conservé : {{key:Mod+S}} l'utilise ensuite pour ce dessin, et les nouveaux dessins de ce navigateur commencent avec lui.
- **DXFOUT** : saisissez `DXFOUT`. Elle télécharge toujours une copie en DXF R12, et le prochain {{key:Mod+S}} enregistre tout de même dans le format propre du dessin.

Le navigateur télécharge `<nom du dessin>.dwg` ou `<nom du dessin>.dxf`. Chaque enregistrement est un **nouveau téléchargement** ; le fichier que vous avez ouvert n'est jamais écrasé ni modifié. L'historique le confirme, par exemple : « Copie enregistrée sous Plan.dwg (DWG (AutoCAD 2018)). Votre original Plan.dxf est inchangé. » Pour un DXF, il indique « (DXF R12, s'ouvre dans n'importe quel logiciel de CAO) ». Les lignes situées dessous listent tout ce qui a été modifié en cours de route.

Lorsque CadCraft fonctionne dans l'application de bureau, l'enregistrement se fait comme dans les autres programmes de bureau : {{key:Mod+S}} réécrit le dessin dans le fichier que vous avez ouvert, dans son propre format et sa version, et l'historique indique où il a été enregistré. {{ui:Enregistrer sous}} et les exports affichent la boîte d'enregistrement du système, et un fichier `.dwg`, `.dxf` ou `.ccsheets` sur lequel vous double-cliquez s'ouvre dans CadCraft.

Pour un PDF, tracez plutôt (voir ci-dessous).

## Ce qu'un DWG conserve et modifie

CadCraft écrit le DWG lui-même, dans votre navigateur, avec la même bibliothèque DWG que celle qui le lit. Choisissez la version dans {{ui:Enregistrer sous}} : le format AutoCAD 2000 (version de fichier AC1015) s'ouvre dans le plus grand nombre de programmes, y compris les anciens ; les formats plus récents (2004, AC1018, jusqu'à 2018, AC1032) conservent aussi les couleurs vraies. Rien n'est envoyé, et l'enregistrement d'un DWG fonctionne hors ligne.

Chaque version est vérifiée en relisant les fichiers enregistrés avec les lecteurs DWG de trois autres programmes, et avec CadCraft lui-même. Un DWG de CadCraft n'a pas encore été ouvert dans AutoCAD lui-même.

### Ce qu'un DWG conserve

- Lignes, arcs, cercles, ellipses, points, et polylignes avec leurs segments d'arc.
- Texte sur une ligne, avec son alignement et son facteur de largeur.
- Texte multiligne et texte à retour automatique, en tant que texte multiligne. L'autre programme le rejustifie à partir de la même largeur.
- Couleurs des objets : par calque, par bloc, les 255 couleurs standard, et les couleurs vraies dans le format 2004 et ultérieurs.
- Calques avec leur couleur, leur type de ligne, leur épaisseur et leurs réglages activé, gelé, verrouillé et tracé ; types de ligne, épaisseurs et échelles de type de ligne propres aux objets, motifs de types de ligne, et échelle de type de ligne du dessin.
- Les unités du dessin et le format de longueur (décimal, pieds et pouces, fractions…).
- Blocs avec leur point de base et leurs définitions d'attributs, y compris les attributs invisibles, constants et préréglés.
- Références de bloc avec leur échelle, leur rotation et leurs valeurs d'attributs.
- Remplissages pleins et hachures à motif, avec leur motif, leur échelle et leur angle (les lignes propres au motif, de sorte que les autres programmes tracent les mêmes lignes que CadCraft).
- Cotes, en tant que véritables cotes : les autres programmes les recalculent lorsqu'elles sont étirées. Chacune conserve ses propres réglages (hauteur de texte, taille des flèches, décimales, format de longueur) et son texte, et porte la copie dessinée que possède chaque cote DWG.
- Feuilles (présentations) : chaque feuille avec son format de papier et ses unités, ce qui y est dessiné, et ses fenêtres de présentation avec leur vue et leur échelle.
- Vues nommées.
- Multirepères, en tant que multirepères.
- Noms de calques et de blocs tels que vous les avez saisis, en majuscules et minuscules. (Le DXF R12 les écrit en majuscules.)

### Ce qu'un DWG modifie

Chacun de ces points est répertorié dans l'historique après l'enregistrement, lorsqu'il s'applique à votre dessin.

| Dans CadCraft | Dans le DWG enregistré |
|---|---|
| Couleurs vraies (choisies avec le sélecteur de couleurs), au format 2000 | La couleur standard la plus proche : le format 2000 ne compte que les 255 couleurs. Enregistrez en 2004 ou ultérieur pour les conserver |
| Vues nommées d'une feuille | Vues de l'espace papier : un DWG ne précise pas à quelle feuille elles appartiennent ; lorsque CadCraft rouvre le fichier, elles reviennent à la première feuille |
| Texte multiligne avec un facteur de largeur | Largeur de lettre normale : dans un DWG, le facteur de largeur ne s'applique qu'au texte sur une ligne |
| Noms de calques ou de blocs contenant des caractères que le DWG n'accepte pas | Modifiés : un nom venant d'une référence externe comme `Base\|Walls` devient `Base$0$Walls` (la façon dont la liaison d'une référence externe le nomme), et les autres caractères deviennent `_` |

### Pourquoi R12, et ce qui se convertit

Lorsque vous enregistrez en DXF, CadCraft écrit du DXF R12, la version que tous les logiciels de CAO peuvent ouvrir. Elle est plus ancienne que certaines fonctions ; quelques éléments sont donc écrits sous une forme plus simple :

| Dans CadCraft | Dans le fichier R12 enregistré |
|---|---|
| Texte multiligne | Un objet texte par ligne |
| Ellipses | Polylignes qui suivent l'ellipse |
| Hachures (issues de fichiers ouverts) | Leurs contours seulement |
| Couleurs vraies (choisies avec le sélecteur de couleurs) | La couleur standard la plus proche |
| Épaisseurs de ligne, et échelles de type de ligne propres aux objets | Omises : R12 ne gère ni l'un ni l'autre (les types de ligne sont conservés) |
| Noms de calques et de blocs | Écrits en majuscules ; les espaces et autres caractères deviennent `_`, et les noms sont tronqués à 31 caractères (« Cartouche » devient `CARTOUCHE`) |
| Calques réglés sur non-tracé | Les autres programmes les tracent (CadCraft mémorise le réglage lorsque le dessin comporte une feuille) |
| Cotes | Vraies cotes avec leur propre bloc dessiné, de sorte que les autres programmes les affichent comme vous les voyez |
| Multirepères | Les lignes, la flèche et le texte qu'ils dessinent |
| Vues nommées | Conservées, avec des noms en majuscules ; les vues d'une feuille reviennent sur la première feuille |
| Plusieurs feuilles | La première feuille est l'espace papier que tous les programmes affichent ; les autres sont conservées comme blocs nommés `CCLAYOUT_1`, `CCLAYOUT_2` … que CadCraft retransforme en feuilles à l'ouverture du fichier |

L'historique répertorie chacun de ces points qui s'appliquait à votre dessin.

:::tip
Pour poursuivre un dessin sur plusieurs jours, enregistrez-le en DXF et ouvrez ce DXF la fois suivante. Tout ce que CadCraft peut dessiner survit à l'aller-retour, y compris les cotes, les blocs et toutes les feuilles.
:::

## Dessins liés (références externes)

{{cmd:XATTACH}} (`XA`, ou {{ui:Blocs}} › {{ui:Plus}} › {{ui:Lier un dessin (xref)}}) lie un autre DWG ou DXF : choisissez le fichier, puis cliquez à l'endroit où il doit aller ({{key:Enter}} le place en 0,0). Il entre comme un seul bloc portant le nom du fichier, à la bonne échelle lorsque les deux dessins ont des unités différentes. Ses calques et ses blocs conservent leurs noms, précédés du nom du lien — `Plan|Walls`, `Plan|Door` — de sorte qu'ils ne se mêlent jamais aux vôtres : activez, désactivez, gelez ou verrouillez les calques liés comme les vôtres. Un lien est en lecture seule : modifiez l'autre dessin, puis rechargez-le. Les réglages que vous appliquez aux calques d'un lien (couleur, type de ligne, épaisseur, activé ou désactivé, gelé, verrouillé, tracé) sont conservés lorsque vous le rechargez, lorsque vous enregistrez le dessin en DWG alors que le lien est encore un lien, et lorsqu'un autre dessin lie celui-ci.

{{cmd:XREF}} (`XR`) : `?` répertorie les liens (chargés ou non, quel fichier, combien de références) ; `A` attache ; `R` recharge un lien depuis son fichier (choisissez de nouveau le fichier : le navigateur ne peut pas accéder seul à vos dossiers) ; `B` incorpore un lien (il devient des blocs et des calques ordinaires nommés `Plan$0$Walls`) ; `D` détache un lien (ses références et ses calques disparaissent). Chacune de ces actions constitue une seule étape d'annulation.

{{cmd:XCLIP}} (`XC`) découpe des références de bloc et des liens : sélectionnez-les, `N` pour une nouvelle limite, puis `R` et deux coins, ou `P` et les points d'un polygone ({{key:Enter}} le ferme) ; `D` supprime le découpage. Seul ce qui se trouve à l'intérieur s'affiche et se trace, et le découpage suit la référence. Les DWG et DXF 2000 conservent les découpages ; le DXF R12 enregistre la référence entière et l'indique. Lorsque vous incorporez un lien qui comporte des références découpées, {{cmd:XREF}} `B` demande : `A` incorpore tout, `C` ne conserve que la partie découpée de chaque référence (les lignes et les arcs sont coupés à la limite ; les textes et les blocs imbriqués restent lorsque leur point d'insertion est à l'intérieur).

Un dessin ouvert peut contenir des liens vers des fichiers que CadCraft ne peut pas voir : il indique combien ne sont pas chargés. Utilisez {{cmd:XREF}}, `R`, puis choisissez chaque fichier pour les afficher.

Lors de l'enregistrement, un lien chargé est **incorporé** au fichier (les autres programmes voient des blocs et calques ordinaires nommés `Plan$0$…`), et l'historique l'indique. Un lien non chargé reste un lien vers son fichier, en DWG comme en DXF.

## Ouvrir en 3D

{{ui:Vue}} › {{ui:Plus}} › {{ui:Ouvrir dans ModelCraft}} ({{cmd:OPENIN3D}}) ouvre le dessin dans l'application de modélisation 3D, dans un nouvel onglet, sous forme de DWG, sans le téléverser. Les modifications faites là-bas y restent ; enregistrez-les là-bas. L'élément de menu n'apparaît que lorsque cette application peut recevoir un dessin transmis.

## Tracer un PDF

Appuyez sur {{key:Mod+P}}, cliquez sur {{ui:Tracer}}, ou saisissez `PLOT`. Le PDF est créé dans le navigateur et téléchargé, ou ouvert dans un nouvel onglet pour l'impression. Voir [Tracer en PDF](topic:plot-pdf).

## Où vont les fichiers

Chaque enregistrement et chaque tracé est un téléchargement : les fichiers atterrissent donc là où votre navigateur place les téléchargements, en général le dossier Téléchargements. Pour choisir un dossier à chaque fois, modifiez le réglage de téléchargement de votre navigateur ; [Navigateurs et ordinateurs](common:browsers) indique où le trouver.

Rien de ce que vous ouvrez ou enregistrez ne nous est envoyé. Voir [Où vont vos fichiers](common:your-files).

## Fichiers de projet PLN et PLA

CadCraft ouvre les dessins DWG et DXF, pas les fichiers propres à Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Lorsque vous en ouvrez un, CadCraft vous indique de quoi il s'agit. Dans Archicad, enregistrez en DWG les vues ou présentations dont vous avez besoin et ouvrez-les ici, ou exportez le modèle en IFC et ouvrez-le dans BimCraft. Lorsque BimCraft peut reprendre le fichier, CadCraft propose {{ui:Ouvrir dans BimCraft}}.

## Si la page se ferme avant l'enregistrement

CadCraft conserve une copie de chaque dessin que vous modifiez, dans ce seul navigateur, peu après que vous avez cessé de modifier. Si l'onglet se ferme, si le navigateur s'arrête ou si l'ordinateur redémarre avant l'enregistrement, CadCraft demande **Récupérer votre travail ?** au prochain démarrage : {{ui:Récupérer}} rouvre le dessin, non enregistré, dans son propre onglet. L'enregistrement du dessin supprime sa copie. Voir [Récupérer votre travail](common:recover).

## En ligne et hors ligne

L'ouverture, le dessin, l'enregistrement (DWG et DXF) et le tracé se font sur votre ordinateur ; ils fonctionnent donc sans connexion une fois CadCraft chargé.

Pour utiliser CadCraft sans aucune connexion, cliquez sur {{ui:Enregistrer pour le hors ligne}} dans la barre supérieure pendant que vous êtes en ligne. Le libellé s'incrémente (« Enregistrement 40 sur 212 ») et se termine par « Prêt hors ligne ». La copie enregistrée comprend le lecteur DWG, environ 5 MB au total ; une fois enregistrée, **les fichiers DWG s'ouvrent donc aussi hors ligne**. Cliquez de nouveau sur le bouton pour {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} ou {{ui:Supprimer la copie hors ligne}}. « Enregistrement impossible » signifie que certains fichiers n'ont pas été téléchargés : vérifiez la connexion et cliquez pour réessayer. « Hors ligne non disponible » signifie que cette fenêtre du navigateur ne peut pas conserver de copie (fenêtres privées et certains ordinateurs gérés).

Sans copie enregistrée, le lecteur DWG est chargé la première fois que vous ouvrez un DWG après le chargement de la page ; l'ouverture d'un DWG hors ligne peut donc échouer. Les fichiers DXF n'en ont jamais besoin. Ne rechargez pas la page hors ligne, sauf si CadCraft est enregistré.

Voir [Travailler hors ligne](common:offline) pour les détails.

:::offline
Vous êtes maintenant hors ligne. Les dessins s'enregistrent en DWG ou DXF et se tracent normalement, et les fichiers DXF s'ouvrent. Les fichiers DWG s'ouvrent si CadCraft affiche « Prêt hors ligne », ou si le lecteur DWG est déjà chargé dans cet onglet.
:::

## Contraintes dans les fichiers

Les contraintes et paramètres (voir [Contraindre un dessin](topic:constraints)) sont enregistrés en DWG comme en DXF. Chaque objet contraint porte une petite note CadCraft (données étendues), et un bloc inutilisé nommé `CADCRAFT_PARAMETRIC` contient les contraintes et la table des paramètres. Les autres programmes ouvrent le dessin normalement et ignorent les deux ; ils peuvent supprimer le bloc inutilisé lors d'une purge. Les notes désignent les objets par leur propre clé, et non par les identifiants internes du fichier : un programme qui renumérote ces identifiants ne les casse donc pas. Lorsqu'un autre programme a supprimé ou modifié un objet contraint, CadCraft retire les contraintes qui s'y rattachent à l'ouverture du fichier et indique combien. Un fichier sans elles s'ouvre sans contraintes.

Une esquisse exportée depuis un logiciel de modélisation de pièces (`.json`) s'ouvre aussi : voir [Transférer des esquisses vers et depuis d'autres logiciels de pièces](topic:solidworks-sketches).

## Pas encore disponible

- Multirepères en tant qu'objets multirepères dans un DXF enregistré (le R12 n'en a pas : ils sont enregistrés sous forme de ce qu'ils dessinent).
- Images dans un DXF enregistré (elles sont enregistrées sous forme de cadres ; le DWG les conserve comme images), et masques d'effacement qui cachent ce qui se trouve dessous.
- Enregistrement d'une version de DXF plus récente que 2000.
- Enregistrement dans le cloud et synchronisation entre ordinateurs.

Voir [Pas encore disponible](topic:not-built-yet) pour la liste complète.

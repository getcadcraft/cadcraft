---
title: Table des commandes : quoi taper
summary: Toutes les commandes de CadCraft avec leurs noms courts, de A à Z, établies à partir du programme lui-même, et les habitudes d'autres logiciels de dessin qui diffèrent.
keywords: table des commandes, commandes, alias, noms courts, depuis, liste des commandes, quoi taper, effacer, ajuster, équivalent, différences
from: 3bdfd3e6
---

CadCraft reprend les noms de commandes et les noms courts que les utilisateurs connaissent d'autres logiciels de dessin : tapez `L` pour une ligne, `TR` pour ajuster, `E` pour effacer. Il n'y a donc pas de table de correspondance à apprendre pour la plupart d'entre elles : le nom que vous connaissez est celui qui est utilisé ici. La liste ci-dessous contient toutes les commandes de CadCraft, établie à partir du programme lui-même. {{key:Enter}} répète la dernière commande ; `HELP` dans la ligne de commande affiche la même liste.

Les rares commandes qui diffèrent, ou qui ne sont pas encore disponibles :

- **Enregistrer** télécharge une copie dans le navigateur ({{cmd:SAVE}}, {{cmd:SAVEAS}}) ; dans CadCraft Studio, il écrit le fichier. Voir [Depuis d'autres logiciels de dessin](topic:coming-from).
- **PLOT** crée un PDF (également PNG et SVG), avec une table de styles de tracé ; il n'existe pas de gestionnaire de mise en page.
- **DIMSTYLE** et **PEDIT** sont disponibles ; **PEDIT** n'a pas d'option de modification de sommet (ce sont les poignées qui le font).
- **TABLE** n'est pas encore disponible ; {{cmd:XREF}}, {{cmd:SPLINE}} et {{cmd:WBLOCK}} le sont.
- Les commandes propres à une routine (AutoLISP `C:NAME`) apparaissent après son chargement avec {{cmd:APPLOAD}} ; elles ne sont pas listées ici.

## Toutes les commandes (398)

| Commande | Noms courts | Ce que fait la commande |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Fait orbiter la vue 3D avec le bouton gauche |
| `ACCESS` | `AX` | Active ou désactive le dessin sans vue : résultats énoncés par votre lecteur d'écran, curseur clavier sur le dessin, sons d'accrochage et commandes vocales. |
| `ALIASEDIT` |  | Modifie les alias de commandes dans un seul fichier texte (le format *LINE familier, avec L) |
| `ALIGN` | `AL` | Déplace et tourne les objets pour que des points source tombent sur des points de destination (une, deux ou trois paires), et les met à l'échelle si vous le souhaitez |
| `ALIGNPANEL` | `ALP` | Ouvre le panneau Aligner et répartir |
| `ALIGNTO` |  | Aligne les bords gauche, centre, droit, haut, milieu ou bas des objets sélectionnés, sur la sélection, sur le premier ou le dernier objet choisi, ou sur un point |
| `ANNOALLVISIBLE` | `ANNOALL` | Affiche les objets d'annotation à toutes les échelles, ou seulement là où l'échelle de la fenêtre de présentation (ou du dessin) figure dans leur liste |
| `ANNOSCALE` | `CANNOSCALE` | Définit l'échelle d'annotation du dessin : le texte et les cotes annotatifs sont redimensionnés pour s'imprimer à la même taille |
| `APPLOAD` | `AP` | Charge des applications : routines LISP (.lsp) et leurs fichiers de boîte de dialogue (.dcl) ; la suite de démarrage (AP) |
| `ARC` | `A` | Arc : 3 points, Début (S)/Centre/Fin (E), Début (S)/Centre/Angle, Début (S)/Centre/Longueur, Début (S)/Fin/Angle, Début (S)/Fin/Direction, Début (S)/Fin/Rayon, Centre/Début (S)/Fin (E), Centre/Début (S)/Angle, Centre/Début (S)/Longueur, Continuer |
| `AREA` | `AA` | Surface et périmètre par points ou d'un objet ; Ajouter et Soustraire gardent un total cumulé (AA) |
| `ARRAY` | `AR` | Copies en lignes et colonnes, ou autour d'un centre (AR) |
| `ARRAYASSOCIATIVITY` |  | Définit si les commandes ARRAY créent des réseaux qui restent modifiables (1) ou de simples copies (0) |
| `ARRAYCLOSE` |  | Termine la modification des objets source d'un réseau |
| `ARRAYEDIT` |  | Modifie un réseau créé avec l'option Associatif : nombre, espacement, objets source, un seul élément |
| `ARRAYPATH` |  | Copies d'objets le long d'une ligne, d'un arc, d'une polyligne ou d'une autre courbe |
| `ARRAYPOLAR` |  | Copies autour d'un point central |
| `ARRAYRECT` |  | Copies en lignes et colonnes |
| `ASBUILT` | `ASB` | ASBUILT lit les points de récolement mesurés par une équipe (CSV / TXT, tels qu'écrits par EXPORTPOINTS) et les compare aux points du dessin : dans ou hors tolérance, non mesurés, en trop. Les marque sur le calque AS-BUILT et télécharge un rapport CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Définit un attribut (une étiquette pour laquelle un bloc demande une valeur) à placer dans un bloc (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Modifie les valeurs d'attributs d'une référence de bloc dans la ligne de commande, l'une après l'autre (Entrée conserve une valeur) |
| `ATTSYNC` |  | Met les références d'un bloc en accord avec ses définitions d'attributs : les nouvelles sont ajoutées avec leurs valeurs par défaut, les supprimées sont retirées, positions et textes sont réinitialisés ; valeurs conservées |
| `AUDIT` |  | Vérifie le dessin ouvert pour détecter les dommages : nombres non finis, objets sans taille, calques, blocs, styles et types de ligne manquants, blocs qui se contiennent eux-mêmes, identifiants partagés, cotes et hachures cassées. Liste ce qui est trouvé par type et demande avant de corriger ; la correction est une seule étape d'annulation. |
| `AUNITS` | `ANGUNITS` | Comment les angles sont affichés et saisis : degrés décimaux, degrés-minutes-secondes ou gisements comme N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Saisie automatique du dessin activée ou désactivée, ou liste des motifs suggérés par le dessin à cet instant. |
| `AUTOCONSTRAIN` |  | Ajoute des contraintes de coïncidence, horizontales et verticales là où la géométrie est déjà proche |
| `AUTODIM` | `ADIM` | Cotation selon des règles : encombrement, chaînes le long des côtés, ouvertures, diamètres de trous et espacement de grille, sans recoter ce qui est déjà coté. |
| `AUTOSHEET` | `ASH` | Met en page les feuilles automatiquement : choisit le papier et les échelles standard, et place chaque vue avec un titre et un cartouche. |
| `BATTMAN` |  | Gestionnaire d'attributs de bloc : ordre, étiquettes, invites, valeurs par défaut et modes des attributs d'un bloc, puis mise à jour de ses références |
| `BCLOSE` |  | Ferme l'éditeur de bloc : enregistre le bloc ou annule les modifications |
| `BCONVERT` |  | BCONVERT trouve la géométrie qui se répète et la transforme en références de bloc. Sélectionnez les objets qui se répètent : chaque autre ensemble d'objets de l'espace ouvert qui a la même géométrie, déplacée et tournée d'un angle quelconque, est trouvé ; avec Miroir et Mis à l'échelle activés, les images miroir et les copies à une autre taille le sont aussi. Donnez au nouveau bloc un nom et un point de base ; la sélection et chaque copie deviennent des références à ce bloc, chacune avec sa propre rotation et son échelle. Ou choisissez Bloc et nommez un bloc existant pour trouver des copies isolées de ses objets. Une copie doit avoir le même calque, la même couleur, le même type de ligne et la même épaisseur, sauf si Propriétés est réglé sur Ignorer. Les objets sur des calques verrouillés sont laissés de côté. Une seule étape d'annulation. |
| `BEDIT` | `BE` | Éditeur de bloc : modifie les objets et attributs d'un bloc ; BCLOSE enregistre (BE) |
| `BLEND` |  | BLEND : une spline entre les extrémités de deux courbes ouvertes, choisies près des extrémités pour les joindre. Continuité (CON) : Tangente suit les deux directions, Lisse (S) suit aussi leur courbure. |
| `BLOCK` | `B`, `BMAKE` | Crée un bloc à partir d'objets (ils deviennent une seule référence) |
| `BLOCKREPLACE` |  | BLOCKREPLACE : toute référence à un bloc devient une référence à un autre, au même endroit, avec la même échelle et la même rotation. Les valeurs des attributs que les deux blocs possèdent sont conservées. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE affiche le panneau Blocs avec le curseur dans son filtre. Le panneau montre une image de chaque bloc (les plus récemment placés en premier), sous forme de liste ou de grille ; cliquez sur une image ou faites-la glisser sur le dessin pour placer le bloc avec INSERT. Sous Bibliothèques, ajoutez un fichier DWG ou DXF de votre choix : ses blocs sont listés avec leurs images et sont copiés dans ce dessin lorsque vous en placez un. Dans CadCraft Studio, un dossier de dessins peut aussi être ajouté, et les fichiers et dossiers sont mémorisés. |
| `BOMEDIT` | `BOMCOLUMNS` | Colonnes, regroupement, tri, titre, totaux et remarques d'un tableau de nomenclature |
| `BOMEXPORT` |  | Enregistre un tableau de nomenclature dans un fichier .csv |
| `BOMTABLE` | `BOM` | Tableau de nomenclature dynamique d'une zone, ou de tout le dessin |
| `BOMUPDATE` |  | Met à jour maintenant tous les tableaux de nomenclature, y compris les figés |
| `BOMZONE` | `BZONE` | Zone nommée du dessin pour une nomenclature : deux coins, un polygone, ou le contour d'un objet fermé |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO) : choisissez un point à l'intérieur d'une zone fermée et obtenez une polyligne fermée autour d'elle. Les arcs restent des arcs. Îlots (I) contourne aussi les zones qui se trouvent à l'intérieur. |
| `BOX` |  | Un parallélépipède : deux coins et une hauteur (3D) |
| `BPARAMETER` | `BPARAM` | Pas encore disponible : ajout d'un paramètre (comme Visibilité) à un bloc. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Paramètres de bloc : paramètres nommés avec formules, et plusieurs paramètres de visibilité dans un même bloc. Fonctionne dans l'éditeur de bloc (affecte les objets sélectionnés à un état) et sur une référence sélectionnée (ses propres valeurs et états). |
| `BREAK` | `BR` | Coupe une ligne, un arc, un cercle ou une polyligne entre deux points (BR) |
| `BREAKATPOINT` |  | Scinde une ligne, un arc ou une polyligne en deux à un point |
| `BREAKLINE` |  | Trace une ligne avec un symbole de coupure ; sa taille et le prolongement au-delà des extrémités sont mémorisés. |
| `BREPLACE` |  | BREPLACE remplace un bloc par un autre. Sélection : choisissez des références de bloc et nommez le bloc à utiliser à la place. Tout : nommez un bloc et son remplacement, et chaque référence, dans chaque espace et à l'intérieur d'autres blocs, change. Une référence garde sa place, son échelle, sa rotation et son calque, ainsi que les valeurs des attributs que les deux blocs possèdent ; les valeurs sans emplacement dans le nouveau bloc sont supprimées et signalées. |
| `BSEARCH` |  | BSEARCH trouve des blocs. Nom : une partie du nom d'un bloc, ou un motif avec * et ?. Attribut : une valeur (ou TAG=valeur) portée par les attributs d'une référence. Géométrie : sélectionnez des objets ou une référence de bloc, et les blocs dont la forme ressemble à 85 % au moins sont listés, les meilleurs en premier ; la taille, la rotation et la symétrie ne comptent pas. Les références trouvées dans l'espace ouvert sont sélectionnées, prêtes pour la commande suivante. |
| `BURST` |  | Décompose les références de bloc et conserve ce que disent leurs attributs : chaque valeur devient un texte sur le calque de l'attribut. |
| `BVHIDE` | `BVH` | Dans l'éditeur de bloc : masque les objets de l'état de visibilité actuel. |
| `BVSHOW` | `BVSH` | Dans l'éditeur de bloc : affiche les objets que l'état de visibilité actuel masque (ils apparaissent estompés pour être choisis). |
| `BVSTATE` | `BVS` | Dans l'éditeur de bloc, sur un bloc avec états de visibilité : passe à un état, ou en ajoute, renomme ou supprime un. |
| `CAL` |  | Calcule une longueur ou un nombre : + − * / et parenthèses, tels que vous les tapez n'importe où |
| `CENTERLINE` | `CL` | Ligne d'axe entre deux lignes : à mi-chemin entre elles, ou le long de la bissectrice lorsqu'elles se rejoignent (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Repère de centre : une croix au centre d'un cercle ou d'un arc, avec des lignes d'axe qui dépassent légèrement (CM) |
| `CHAMFER` | `CHA` | Biseaute l'angle entre deux lignes (D distances, A longueur et angle, P chaque angle d'une polyligne) |
| `CHSPACE` |  | CHSPACE : déplace des objets entre une feuille et le modèle à travers une fenêtre de présentation. Ils sont mis à l'échelle et tournés pour apparaître identiques de l'autre côté. Sur une feuille, ils vont dans le modèle ; lorsque vous travaillez à travers une fenêtre (MSPACE), ils passent sur la feuille. |
| `CIRCLE` | `C` | Centre et rayon, diamètre, 2 ou 3 points |
| `CLASS` |  | Place les objets sélectionnés dans une classe, ou, sans sélection, définit la classe active (? les liste) |
| `CLASSES` | `CLS` | Le panneau Classes : les classes trient les objets à travers les calques ; affichez, masquez et stylisez-les, et modifiez-les par fenêtre de présentation (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ancre ou rend flottante la ligne de commande, la met sur une seule ligne, définit le nombre de lignes d'historique, ou ouvre l'historique (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compare des styles de cote, des styles de texte, des calques, des feuilles ou des unités : deux dans ce dessin, ou ce dessin avec un autre ouvert, et copie une valeur d'un côté à l'autre. |
| `CONSTRAINTBAR` | `CBAR` | Affiche ou masque les barres de contraintes (Tout afficher / Tout masquer, ou par objet) |
| `COPY` | `CO`, `CP` | Copie des objets, autant de fois que vous cliquez |
| `COPYBASE` |  | Copie des objets dans le presse-papiers avec un point de base que vous choisissez |
| `COPYCLIP` |  | Copie des objets dans le presse-papiers (Ctrl+C) ; PASTECLIP les place |
| `COUNT` | `BCOUNT` | Compte les références de bloc : choisissez-en une pour sélectionner et compter chaque référence de son bloc |
| `COUNTTABLE` |  | Place un tableau de comptage de blocs |
| `CREDITS` |  | Place les crédits de la bibliothèque dans le dessin sous forme de tableau. Relancez-la pour mettre à jour le tableau d'après les éléments du dessin actuel. |
| `CURSORSIZE` |  | Taille du réticule : 100 le fait traverser le dessin d'un bord à l'autre (Paramètres › Curseur › Plein écran) |
| `CUTCLIP` |  | Coupe des objets dans le presse-papiers (Ctrl+X) : copie, puis efface |
| `CYLINDER` | `CYL` | Un cylindre : centre, rayon et hauteur (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Liste les blocs, leurs attributs et les propriétés des objets sous forme de tableau dans le dessin ou dans un fichier CSV |
| `DATALINK` | `DL` | Un tableau issu d'un fichier CSV qui mémorise le fichier, pour pouvoir le relire |
| `DATALINKUPDATE` | `DLU` | Relit le fichier d'une liaison de données et remplit à nouveau ses tableaux |
| `DCALIGNED` | `DCALI` | Contrainte dimensionnelle : distance réelle entre des points, un point et une ligne, ou deux lignes |
| `DCANGULAR` | `DCANG` | Contrainte dimensionnelle : angle entre deux lignes, ou d'un arc |
| `DCCONVERT` |  | Transforme les cotes tracées sur une géométrie contraignable en contraintes dimensionnelles |
| `DCDIAMETER` | `DCDIA` | Contrainte dimensionnelle : diamètre d'un cercle ou d'un arc |
| `DCDISPLAY` |  | Affiche ou masque les contraintes dimensionnelles sur le dessin |
| `DCHORIZONTAL` | `DCHOR` | Contrainte dimensionnelle : distance horizontale |
| `DCLINEAR` | `DCLIN` | Contrainte dimensionnelle : distance horizontale ou verticale, à partir de l'endroit où vous la placez |
| `DCRADIUS` | `DCRAD` | Contrainte dimensionnelle : rayon d'un cercle ou d'un arc |
| `DCVERTICAL` | `DCVER` | Contrainte dimensionnelle : distance verticale |
| `DELBLOCKS` |  | Supprime des blocs : chaque référence (imbriquées aussi, sur chaque feuille) et les définitions |
| `DELCONSTRAINT` | `DELCON` | Supprime toutes les contraintes (géométriques et dimensionnelles) des objets que vous sélectionnez |
| `DELOPENING` |  | Retire une porte ou une fenêtre d'un mur. |
| `DESCRIBE` | `DESC` | Décrit le contenu du dessin : nombre d'objets, types, dimensions, ce qui est sélectionné. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Vide la sélection (Échap) |
| `DETAILS` | `DET` | Les détails propres à votre cabinet, trouvés selon ce que vous dessinez : rechercher, ajouter un bloc, lister, retirer, activer ou désactiver les suggestions. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Dessine un diagramme à partir de texte : un organigramme Mermaid, un diagramme de composants PlantUML, D2, une liste de-à ou du XML draw.io, sous forme de blocs et de connecteurs modifiables |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distance réelle entre deux points |
| `DIMANGULAR` | `DAN`, `DIMANG` | Angle entre deux lignes, d'un arc, ou par trois points |
| `DIMARC` | `DAR` | Cote de longueur d'arc : la distance le long d'un arc, avec le symbole d'arc (DAR) |
| `DIMASZ` |  | Réglage de cote : taille des flèches |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotes empilées depuis une ligne de base |
| `DIMBREAK` | `DBREAK` | Coupe les lignes de cote et d'attache là où elles croisent d'autres objets (Auto), entre deux points (Manuel), ou supprime les coupures |
| `DIMCONSTRAINT` | `DCON` | Contraintes dimensionnelles : linéaire, alignée, angulaire, rayon, diamètre, convertir |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Une chaîne de cotes, chacune à partir de l'extrémité de la précédente |
| `DIMDEC` |  | Réglage de cote : nombre de décimales |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diamètre d'un arc ou d'un cercle |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Libère les cotes des objets auxquels elles sont liées (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Modifie le texte de cote (Position initiale, Nouveau texte, Rotation) ou incline les lignes d'attache (Oblique) |
| `DIMEXE` |  | Réglage de cote : prolongement au-delà de la ligne de cote |
| `DIMEXO` |  | Réglage de cote : décalage par rapport à l'origine |
| `DIMGAP` |  | Réglage de cote : espace autour du texte |
| `DIMINSPECT` |  | Cote de contrôle : un cadre autour de la valeur, avec une étiquette et la fréquence de contrôle de la pièce |
| `DIMJOGGED` | `DJO`, `JOG` | Cote de rayon décalé : un rayon tracé depuis un point plus proche lorsque le centre est loin (DJO) |
| `DIMJOGLINE` | `DJL` | Ajoute un symbole de brisure à une ligne de cote linéaire ou alignée, pour montrer que la distance n'est pas à l'échelle (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distance horizontale ou verticale (R pour tout angle) |
| `DIMLUNIT` |  | Réglage de cote : format de longueur (1 scientifique, 2 décimal, 3 ingénieur, 4 architectural, 5 fractionnaire) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cote de coordonnée : distance X ou Y d'un point par rapport à l'origine du SCU, sur une ligne de repère (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Remplace les variables de cote sur les cotes sélectionnées sans modifier leur style ; Effacer rétablit le style (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Rayon d'un arc ou d'un cercle |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Lie les points d'une cote à des objets, pour qu'elle les suive et se remesure lorsqu'ils bougent (DRE) |
| `DIMSCALE` |  | Réglage de cote : échelle globale (tailles × cette valeur) |
| `DIMSPACE` |  | Espacement régulier entre cotes parallèles, mesuré depuis une cote de base (0 les aligne, Auto vaut deux fois la hauteur du texte) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crée, modifie, définit comme courant, supprime, applique et compare des styles de cote nommés (la boîte de dialogue ; -DIMSTYLE dans la ligne de commande) |
| `DIMTEDIT` | `DIMTED` | Déplace le texte de cote à gauche, à droite ou au centre de la ligne de cote, ou le tourne |
| `DIMTEXTUNIT` | `DTU` | Texte de cote en mm, cm, m ou km, ou dans les unités propres au dessin : les cotes sélectionnées, sinon les nouvelles (DTU) |
| `DIMTXT` |  | Réglage de cote : hauteur du texte |
| `DIST` | `DI` | Distance et angle entre deux points |
| `DISTRIBUTE` |  | Répartit les objets sélectionnés uniformément, de côté à côté ou de haut en bas : pas égaux entre centres, ou espaces égaux ; les deux extrêmes restent en place |
| `DIVIDE` | `DIV` | DIVIDE (DIV) : marques qui découpent une ligne, un arc, un cercle, une polyligne, une spline ou une ellipse en parties égales. Des points, ou avec Bloc un bloc à chaque marque. |
| `DOCUMENTS` | `DOCS` | Ouvre le panneau Documents : extraire et restituer des dessins, révisions, états de diffusion et approbation pour un dossier de projet |
| `DOOR` | `DR` | Place une porte dans un mur. Le côté sur lequel vous cliquez est celui vers lequel elle s'ouvre. |
| `DRAWORDER` |  | Modifie l'ordre de tracé : amener les objets au premier plan, les envoyer à l'arrière, ou les placer au-dessus ou au-dessous d'autres objets. |
| `DUPLICATE` | `DUP` | Une copie qui suit le pointeur : cliquez pour la poser (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Propriétés du dessin : titre, auteur et le reste, ainsi que vos propres paires nom et valeur |
| `DXFOUT` |  | Télécharge le dessin au format DXF R12 (Enregistrer conserve son propre format) |
| `EATTEDIT` | `DDATTE` | Modifie les attributs d'une référence de bloc : valeurs, texte et propriétés, un attribut à la fois |
| `ELLIPSE` | `EL` | Extrémités de l'axe et l'autre demi-axe |
| `ERASE` | `E`, `DELETE` | Retire des objets |
| `EXPLODE` | `X` | Décompose les polylignes, blocs et cotes en leurs parties |
| `EXPORT` | `EXP` | Enregistre une copie du dessin dans un type de fichier qu'un module complémentaire écrit |
| `EXPORT3D` | `3DEXPORT` | Exporte le modèle 3D : GLB, OBJ ou STL |
| `EXPORTPOINTS` | `EXPPTS` | Écrit des points, et les points d'insertion des blocs avec un attribut comme description, dans un fichier CSV ou TXT (PNEZD, PENZD ou XYZ) pour les logiciels BIM et de topographie |
| `EXTEND` | `EX` | Allonge les objets jusqu'à en rencontrer d'autres : cliquez près d'une extrémité, faites glisser à travers plusieurs, ou Maj+clic pour ajuster |
| `EXTRIM` |  | EXTRIM : choisissez une arête de coupe, puis un côté. Tout ce qui croise l'arête est ajusté de ce côté. Les morceaux qui disparaîtraient apparaissent lorsque vous déplacez le pointeur. |
| `EXTRUDE` | `EXT` | Extrude des objets 2D fermés en solides (3D) |
| `FIELD` |  | Place un champ dans un texte, une cellule de tableau ou un attribut : une date, le nom du fichier, le numéro de feuille, une propriété du dessin, l'aire ou la longueur d'un objet, ou une formule |
| `FILLET` | `F` | Arrondit ou carre l'angle entre deux objets (R rayon, P chaque angle d'une polyligne, M plusieurs) |
| `FIND` |  | Recherche et remplace des mots dans le texte, les valeurs d'attributs et le texte des cotes |
| `FLATTEN` |  | Met la hauteur (Z) et l'épaisseur des objets sélectionnés à 0, y compris dans les blocs qu'ils utilisent. |
| `FLOOR` |  | Choisit l'étage où dessiner, en ajoute un, ou y déplace ou copie la sélection. |
| `FLOORLAYERS` |  | Transforme les étages en calques nommés Étage-Calque, pour un fichier destiné à quelqu'un sans étages. |
| `FLOORS` | `FLR` | Ouvre le panneau Étages : empile des étages dans un même espace objet. |
| `GCCOINCIDENT` |  | Contrainte : deux points se rejoignent, ou un point reste sur un objet |
| `GCCOLLINEAR` |  | Contrainte : deux lignes restent alignées sur une même droite |
| `GCCONCENTRIC` |  | Contrainte : deux cercles ou arcs partagent un centre |
| `GCEQUAL` |  | Contrainte : deux lignes gardent la même longueur, ou deux cercles ou arcs le même rayon |
| `GCFIX` |  | Contrainte : un point ou un objet entier reste en place |
| `GCHORIZONTAL` |  | Contrainte : une ligne (ou deux points) reste horizontale |
| `GCPARALLEL` |  | Contrainte : deux lignes restent parallèles |
| `GCPERPENDICULAR` |  | Contrainte : deux lignes restent à angle droit |
| `GCSYMMETRIC` |  | Contrainte : deux points, lignes ou cercles se reflètent de part et d'autre d'une ligne |
| `GCTANGENT` |  | Contrainte : une ligne et un cercle ou un arc (ou deux d'entre eux) restent tangents |
| `GCVERTICAL` |  | Contrainte : une ligne (ou deux points) reste verticale |
| `GDSIN` | `GDS` | Affiche un tracé de circuit intégré (fichier de flux GDSII) : chaque calque et type de données comme calque de dessin, à plat, en unités utilisateur ; pour la consultation et la mesure uniquement (essai en laboratoire) |
| `GEOMCONSTRAINT` | `GCON` | Contraintes géométriques : horizontale, verticale, parallèle, tangente, coïncidente… |
| `GLBOUT` |  | Exporte le modèle 3D en GLB (glTF) |
| `GRADIENT` | `GD` | Remplit une zone d'un dégradé de une ou deux couleurs |
| `GRIDMOVE` | `GM` | Déplace une ligne de trame et entraîne ce qui y est accroché : les murs s'étirent, les poteaux, bulles et étiquettes se déplacent, les cotes suivent. |
| `GROUP` | `G` | GROUP (G) : donne aux objets sélectionnés un nom commun. Un clic sur l'un d'eux les sélectionne alors tous. Entrée sur le nom crée un groupe sans nom. |
| `GROUPEDIT` |  | GROUPEDIT : modifie un groupe. Choisissez l'un de ses objets ou donnez son Nom, puis Ajouter ou Retirer des objets, RENommer, modifier sa Description, ou indiquer si un clic le sélectionne en entier. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Remplit une zone d'une hachure pleine ou d'un motif : cliquez à l'intérieur, ou sélectionnez des objets fermés (H) |
| `HATCHEDIT` | `HE` | Modifie une hachure : motif, échelle, angle, origine et son lien à un contour. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Recrée les polylignes de contour à partir d'une hachure, liées ou non à elle |
| `HATCHTOBACK` |  | Envoie toutes les hachures derrière tout le reste. |
| `HELP` | `?` | Cette liste |
| `HIDEOBJECTS` |  | Masque les objets sélectionnés jusqu'à UNISOLATEOBJECTS. Non enregistré avec le dessin. |
| `HISTORY` | `HIST` | HISTORY (HIST) : les versions de ce dessin — copies conservées sur cet ordinateur lorsque Studio l'enregistre, et versions du cloud — à ouvrir, restaurer et comparer avec ce qui a changé, affiché en couleur. |
| `ID` |  | Coordonnées d'un point |
| `IMAGE` | `IM` | Indique à CadCraft les fichiers d'images qu'un dessin utilise (un DWG ne stocke que leur emplacement) |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Place une image (PNG ou JPEG) depuis un fichier. |
| `IMAGECLIP` | `ICL` | Découpe une image dans un rectangle ou un polygone, ou retire son découpage. |
| `IMPORT` | `IMP` | Importe dans ce dessin un fichier d'un type qu'un module complémentaire lit |
| `INSERT` | `I`, `DDINSERT` | Place un bloc (S échelle, R rotation) ; F depuis un fichier DWG/DXF, L depuis la bibliothèque |
| `INTERSECT` | `IN` | Ne conserve que ce que les solides ont en commun (3D), ou la zone commune aux régions 2D |
| `ISODRAFT` |  | ISODRAFT : dessin isométrique activé ou désactivé, ou directement sur le plan Gauche, Dessus ou Droit. Lorsqu'il est actif, Ortho et le repérage polaire suivent les deux axes du plan, la grille est dessinée en isométrie, et ELLIPSE propose Isocercle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Affiche seulement les objets sélectionnés ; tout le reste de cet espace est masqué jusqu'à UNISOLATEOBJECTS. Non enregistré avec le dessin. |
| `ISOPLANE` |  | ISOPLANE : choisissez le plan isométrique où dessiner : Gauche, Dessus ou Droit. Entrée passe au suivant, comme F5 lorsque le dessin isométrique est actif. |
| `JOIN` | `J` | Joint les lignes, arcs et polylignes qui se rejoignent bout à bout en une seule polyligne ; les lignes alignées en une seule ligne (J) |
| `LASER` | `LASERCUT` | Ouvre le panneau Laser : envoie des calques à une découpeuse ou une graveuse laser (code G GRBL) |
| `LASSOMODE` |  | Appuyer et faire glisser trace un lasso (1) ou un rectangle (0) |
| `LAYDEL` |  | Supprime un calque et chaque objet qu'il contient (dans le modèle, sur les feuilles et dans les blocs) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Ouvre le Gestionnaire de calques : tous les calques dans un seul tableau |
| `LAYERPANEL` |  | Affiche le panneau des calques |
| `LAYFRZ` |  | Gèle le calque de chaque objet que vous choisissez |
| `LAYGROUP` | `LG` | Regroupe les calques en dossiers dans le panneau Calques. |
| `LAYISO` |  | Isole les calques des objets sélectionnés (tous les autres calques désactivés) |
| `LAYLOCKFADE` |  | Définit le degré d'estompage des objets sur calques verrouillés, et si un clic peut les sélectionner. |
| `LAYMCUR` |  | Rend courant le calque de l'objet que vous choisissez |
| `LAYMRG` |  | Fusionne des calques : leurs objets passent sur un calque cible, et les calques fusionnés disparaissent |
| `LAYOFF` |  | Désactive le calque de chaque objet que vous choisissez |
| `LAYON` |  | Active tous les calques |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Une nouvelle feuille avec un cartouche et une fenêtre de présentation |
| `LAYTHW` |  | Dégèle tous les calques |
| `LAYUNISO` |  | Réactive les calques que LAYISO a désactivés |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Convertit en Unicode le texte saisi avec d'anciennes polices vietnamiennes (polices TCVN3 / ABC comme .VnTime, et polices VNI comme VNI-Times). Ce texte s'affiche déjà correctement ; cette commande le réécrit définitivement, avec un compte et une seule étape d'annulation. |
| `LENGTHEN` | `LEN` | Allonge ou raccourcit lignes, arcs et polylignes : d'une valeur, d'un pourcentage, jusqu'à un total, ou en faisant glisser (LEN) |
| `LIBRARY` | `LIB` | Le panneau Bibliothèque : placer des éléments, vérifier les mises à jour, crédits |
| `LIMITS` |  | Définit les limites du dessin : ON, OFF, ou les coins inférieur gauche et supérieur droit. Avec les limites activées, les points situés en dehors sont refusés |
| `LINE` | `L` | Segments droits, chacun étant un objet distinct |
| `LINETYPE` | `LT`, `CELTYPE` | Le type de ligne des nouveaux objets (par calque, par bloc, ou un type nommé) |
| `LINKVIEWS` | `SYNCVIEWS` | Panoramique et zoom synchronisés sur tous les volets (écran partagé), pour comparer deux dessins ou révisions |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ou VLIDE) ouvre l'éditeur LISP : une fenêtre pour écrire, charger et tester une routine. Charger dans le dessin lit chaque forme, comme le fait APPLOAD avec le fichier, et crée ses commandes. Exécuter la sélection évalue les formes sélectionnées, ou la forme où se trouve le curseur. La console affiche ce que la routine a imprimé et chaque erreur avec sa ligne. La parenthèse correspondante est repérée pendant la frappe, et Entrée met la nouvelle ligne en retrait. Nouveau, Ouvrir et Enregistrer fonctionnent sur un fichier .lsp. Les listes à côté du texte montrent les fonctions que définit la routine, celles qu'elle appelle et que ce LISP ne possède pas encore, et toutes celles qu'il possède. La fenêtre ne bloque pas le dessin, donc une routine peut demander des points ; Arrêter ou Échap termine une routine en cours d'exécution. |
| `LIST` | `LI`, `LS` | Décrit des objets dans l'historique |
| `LTSCALE` | `LTS` | L'échelle des types de ligne du dessin (chaque tiret et chaque espace est multiplié par elle) |
| `LWDISPLAY` | `LWT` | Affiche ou masque les épaisseurs de ligne à l'écran (le bouton LWT de la barre d'état) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | L'épaisseur de ligne des nouveaux objets (par calque, par bloc, par défaut, ou en mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Calques cartographiques sous l'espace objet : le système de coordonnées du dessin, tuiles, WMS, WMTS, ArcGIS, images |
| `MASSPROP` |  | MASSPROP : propriétés de section des régions et objets fermés : aire, périmètre, centre de gravité, moments et produit d'inertie, rayons de giration et axes principaux. Exact pour les lignes et arcs. Peut écrire le rapport dans un fichier texte. |
| `MATCHPROP` | `MA`, `PAINTER` | Reproduit les propriétés : copie le calque, la couleur et plus encore d'un objet sur d'autres (MA) |
| `MEASURE` | `ME` | MEASURE (ME) : une marque tous les X de longueur le long d'une ligne, d'un arc, d'un cercle, d'une polyligne, d'une spline ou d'une ellipse, à partir de l'extrémité la plus proche de votre choix. Des points, ou avec Bloc un bloc à chaque marque. |
| `MEASUREGEOM` | `MEA` | Mesure une distance, un rayon, un angle ou une aire (MEA) |
| `MINSERT` |  | MINSERT : place un bloc en lignes et colonnes d'un seul coup. Chacun est une référence distincte, donc vous pouvez déplacer ou effacer chacune d'elles. |
| `MIRROR` | `MI` | Symétrie des objets par rapport à une ligne |
| `MLEADER` | `MLD`, `MLEAD` | Multiligne de repère : une flèche, une ligne de repère et une note, en un seul objet (MLD) |
| `MLEADERALIGN` | `MLA` | Aligne les multilignes de repère sur l'une d'elles selon une direction, à espacement égal, ou les répartit entre deux points (MLA) |
| `MLEADERCOLLECT` | `MLC` | Regroupe plusieurs multilignes de repère en une seule : leurs blocs en ligne ou en colonne, ou leurs notes l'une sous l'autre (MLC) |
| `MLEADEREDIT` | `MLE` | Ajoute des lignes de repère à une multiligne de repère ou en retire ; fait passer son contenu de texte à bloc, et inversement (MLE) |
| `MLINE` |  | Trace des lignes parallèles ensemble, jointes aux angles. |
| `MOVE` | `M` | Déplace des objets par un point de base et un second point |
| `MSPACE` | `MS` | Travaille sur le modèle à travers une fenêtre de présentation de la feuille ouverte (ou double-cliquez dans la fenêtre). |
| `MTEXT` | `MT`, `T` | Texte en paragraphe : faites glisser sa largeur, puis tapez sur place ; Entrée commence un nouveau paragraphe (T) |
| `MVIEW` | `MV` | Une fenêtre de présentation sur le modèle, dans une présentation |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vues nommées : enregistre la vue à l'écran (ou une fenêtre) sous un nom et y revient (NV) |
| `NCOPY` |  | Copie des objets hors d'une référence de bloc ou d'un dessin lié vers le dessin, sans la décomposer. |
| `NEARBY` |  | Décrit ce qui se trouve près du curseur, le plus proche d'abord, avec la distance et le côté. |
| `NEW` |  | Commence un nouveau dessin |
| `OBJECTSCALE` | `OBJSCALE` | Échelles d'annotation du texte et des cotes annotatifs : ajoute une échelle, en supprime une, ajoute l'échelle actuelle, ou les liste (chaque fenêtre les affiche à la taille de sa propre échelle) |
| `OBJOUT` |  | Exporte le modèle 3D en OBJ |
| `OFFSET` | `O` | Copies parallèles à une distance |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE : comment OFFSET comble les espaces aux angles extérieurs d'une polyligne. 0 prolonge les segments, 1 ajoute un arc, 2 ajoute une coupe droite. Conservé pour cette session. |
| `OLELIST` | `OLES` | Liste les objets OLE d'un dessin et place une copie de l'image de l'un d'eux à l'endroit choisi |
| `OPEN` |  | Ouvre un DWG ou un DXF depuis cet ordinateur |
| `OPENIN3D` |  | Ouvre ce dessin dans l'application de modélisation 3D, dans un nouvel onglet (rien n'est téléversé) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Ouvre le menu d'accrochage aux objets : choisissez les accrochages actifs. Également un clic droit sur Accrochage dans la barre d'état. |
| `OVERKILL` |  | Supprime les objets en double et fusionne les lignes et arcs qui se chevauchent ou se suivent bout à bout, dans une tolérance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Le panneau Paramètres : paramètres utilisateur et contraintes dimensionnelles dans un seul tableau |
| `PARTSLIST` | `PLIST` | Un tableau de liste des pièces de chaque pièce standard et profilé d'acier placé depuis la Bibliothèque |
| `PASTEAREA` | `PAREA` | Colle une zone copiée dans MarkupCraft (Copier la zone) à sa taille réelle, sous forme d'image. |
| `PASTEBLOCK` |  | PASTEBLOCK : colle ce que vous avez copié comme un seul bloc. Le bloc reçoit un nom propre ; RENAME lui donne le vôtre. |
| `PASTECLIP` |  | Colle le presse-papiers : il suit le curseur, cliquez où il doit aller (Ctrl+V) |
| `PASTEORIG` |  | Colle le presse-papiers aux coordonnées depuis lesquelles il a été copié (Ctrl+Shift+V) |
| `PDF` |  | Indique à CadCraft les fichiers PDF utilisés comme fonds par le dessin |
| `PDFADJUST` |  | Estompe, règle le contraste, passe en monochrome ou désactive un fond PDF |
| `PDFATTACH` | `PDFATT` | Attache une page PDF comme fond (PDFATTACH) |
| `PDFCLIP` |  | Découpe un fond PDF dans un rectangle ou un polygone |
| `PDFIMPORT` | `PDFIM` | Transforme les lignes, remplissages et textes d'une page PDF en objets de dessin (PDFIMPORT) |
| `PDFLAYERS` |  | Active ou désactive les calques d'un fond PDF |
| `PEDIT` | `PE` | Modifie une polyligne : fermer, ouvrir, joindre, largeur, courbe ajustée, courbe spline, supprimer la courbure, génération de type de ligne, inverser ; les lignes, arcs et splines peuvent être transformés en polylignes |
| `PHOTOSKETCH` | `PSK` | Transforme une photo d'un croquis à la main sur papier en lignes et arcs à l'échelle, en redressant la perspective et en donnant à chaque couleur de stylo son propre calque. |
| `PICKSTYLE` |  | PICKSTYLE : si la sélection d'un objet d'un groupe sélectionne le groupe entier (1, réglage de départ) ou seulement cet objet (0). Conservé pour cette session. |
| `PLAN` |  | Oriente la vue pour que l'axe X du SCU (SCU actuel, un SCU enregistré, ou le Monde) soit à niveau à l'écran. Rien dans le dessin ne bouge. |
| `PLINE` | `PL` | Une polyligne de segments droits et d'arcs |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Tracé en PDF : une présentation, ou le modèle à une échelle |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tables de styles de tracé : définit ce que chaque couleur imprime (couleur, noir, gris, encre, épaisseur de ligne) ; conservé avec le dessin (STYLESMANAGER) |
| `POINT` | `PO` | Objets points |
| `POINTCLOUD` | `PC` | Le nuage de points rattaché : tranche, hauteur, épaisseur, couleur, taille, visible, zoom, détacher |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Rattache un nuage de points (LAS, LAZ, XYZ, PTS) sous le dessin |
| `POLARANG` |  | Le pas du repérage polaire en degrés (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polygone régulier |
| `PRESSPULL` |  | Pousse ou tire une face d'un solide (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Ouvre le panneau Propriétés (aussi Ctrl+1, ou double-clic sur un objet) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Replie le panneau Propriétés sur le bord de la fenêtre |
| `PSPACE` | `PS` | Quitte la fenêtre de présentation où vous travaillez et revient à la feuille (ou double-cliquez en dehors). |
| `PUBLISH` | `-PUBLISH` | Trace plusieurs feuilles ou toutes les feuilles dans un seul PDF (une page et un signet par feuille) |
| `PURGE` | `PU` | Supprime les définitions de blocs non utilisées |
| `QDIM` |  | Cote rapide : cote plusieurs objets à la fois (continue, à partir d'une base, décalée, coordonnée, rayon ou diamètre) |
| `QPMODE` | `QP` | Propriétés rapides près du curseur, activé ou désactivé |
| `QSELECT` | `QS` | Sélection rapide : chaque objet d'un type dont le calque, la couleur, la taille ou le nom correspond (QS) |
| `RASTERSNAP` |  | Active ou désactive l'accrochage aux lignes des feuilles numérisées. |
| `RAY` |  | Demi-droite : une ligne de construction à partir d'un point, sans fin d'un côté. |
| `RECOVER` |  | Ouvre un DXF ou un DWG endommagé : passe ce qui ne peut pas être lu au lieu de refuser le fichier, indique ce qui a été ignoré, puis vérifie et répare le dessin comme le fait AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Une polyligne fermée à partir de deux coins |
| `REDLINE` | `RDL` | Du redline à la révision : lit un paquet redline de MarkupCraft, accepte ou refuse chaque modification, entoure les modifications acceptées d'un nuage avec un journal de révision, et enregistre le fichier de réponses (RDL) |
| `REDO` |  | Rétablit ce qui a été annulé |
| `REFCLOSE` |  | Termine la modification d'un bloc sur place : l'enregistre ou annule les modifications |
| `REFEDIT` |  | Modifie un bloc sur place, à l'endroit où se trouve une de ses références, le reste du dessin étant estompé ; REFCLOSE enregistre |
| `REGEN` | `RE` | Recalcule ce qui est dessiné dans cet onglet à partir du dessin |
| `REGENALL` | `REA` | Recalcule ce qui est dessiné dans chaque onglet, volet et dessin ouvert |
| `REGION` | `REG` | REGION (REG) : crée des régions planes à partir d'objets fermés, ou de lignes, arcs et polylignes qui forment une boucle bout à bout. UNION, SUBTRACT et INTERSECT combinent ensuite des régions, et MASSPROP donne leurs propriétés de section. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Recale plusieurs numérisations : les place dans un même cadre par paires de points choisis ou par cibles, affine avec ICP, exporte un seul fichier LAS ou E57 |
| `REINIT` |  | Recharge votre fichier d'alias |
| `RENAME` | `-RENAME`, `REN` | Renomme un calque ou un bloc (chaque objet ou référence suit) |
| `REVCLOUD` | `RC` | Nuage de révision : entoure un rectangle, un polygone, un tracé à main levée ou un objet (RC) |
| `REVOLVE` | `REV` | Fait tourner des objets 2D fermés autour d'un axe pour en faire des solides (3D) |
| `ROTATE` | `RO` | Fait pivoter des objets autour d'un point de base |
| `SAMPLES` | `SAMPLE` | Ouvre l'un des dessins d'exemple de CadCraft (un jeu architectural, un récolement) pour apprendre |
| `SAVE` | `QSAVE` | Télécharge le dessin dans son format (DWG ou DXF) |
| `SAVEAS` |  | Télécharge le dessin en DWG ou DXF : vous choisissez |
| `SAYSEL` |  | Énonce ce qui est sélectionné, une phrase par objet. |
| `SCALE` | `SC` | Met à l'échelle des objets autour d'un point de base |
| `SCALELISTEDIT` | `SCALELIST` | Ajoute, modifie et supprime les échelles propres au dessin ; elles apparaissent dans les listes d'échelles de fenêtre et de tracé et sont enregistrées dans le fichier (SCALELIST) |
| `SCANALIGN` | `SCL` | Aligne une feuille numérisée sur deux points : déplace, tourne et, si vous le choisissez, met à l'échelle. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insère un dessin numérisé : un PNG, JPEG ou TIFF (une page ou toutes les pages d'un fichier multipage) ou une page PDF qui est une image. |
| `SCANCLEAN` | `SCC` | Rend une feuille numérisée en noir et blanc et supprime les taches. |
| `SCANCROP` | `SCR` | Recadre une feuille numérisée dans une fenêtre. |
| `SCANDESKEW` | `SCD` | Trouve l'angle des longues lignes d'une feuille numérisée et redresse la feuille une fois l'angle accepté. |
| `SCANERASE` | `SCE` | Efface une zone d'une feuille numérisée : un rectangle, un polygone ou un lasso. |
| `SCANINFO` | `SCI` | Affiche le fichier d'origine d'une feuille numérisée et les étapes effectuées depuis. |
| `SCANSCALE` | `SCS` | Met à l'échelle une feuille numérisée : choisissez deux points et tapez la distance réelle entre eux. |
| `SCANTRACE` | `SCT` | Transforme une feuille numérisée en lignes et arcs sur un nouveau calque, avec une tolérance que vous réglez. Le texte et les hachures restent en matriciel. |
| `SELECT` |  | Sélectionne des objets maintenant (P pour Précédent, dans la commande suivante) |
| `SELECTALL` | `AI_SELALL` | Sélectionne chaque objet modifiable de cet onglet (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Sélectionne chaque objet semblable à ceux que vous choisissez : même type, même calque et même couleur (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Affiche le panneau Jeu de feuilles : feuilles de nombreux dessins, numérotées, publiées en un seul PDF. |
| `SHORTCUTS` | `KEYS` | Donne à n'importe quelle commande une touche qui vous est propre (Ctrl ou Alt avec une lettre, ou une touche de fonction libre), conservée dans ce navigateur ou cette application de bureau. |
| `SHXFONTS` | `SHX` | Donne à CadCraft des polices SHX depuis un dossier ou des fichiers, pour que les styles de texte qui les nomment s'en servent (liste, retrait, inversion) |
| `SKETCHFIX` | `SKF` | Dessinez à main levée ; chaque tracé devient une ligne, un cercle, un arc, un rectangle ou une polyligne nets, redressés et joints aux autres. |
| `SKETCHLIVE` | `SKL` | Esquissez avec un stylet : chaque tracé devient une ligne, un cercle, un arc ou un rectangle précis lorsque vous levez le stylet, accroché au dessin, avec sa taille à saisir par-dessus. |
| `SPLINE` | `SPL` | Dessine une spline passant par des points (ou avec un polygone de contrôle), ou transforme une polyligne en spline |
| `SPLINEDIT` | `SPE` | Modifie une spline : points d'ajustement, points de contrôle et poids, l'ouvre ou la ferme, l'inverse, ou la convertit en polyligne |
| `SPLIT` |  | Divise la zone de dessin en volets (comme VPORTS sur le modèle ; depuis une feuille aussi) |
| `STEELMEMBER` | `SMEMBER` | Un élément d'acier en 3D à partir d'une section standard : deux points (une poutre) ou un point de base et une hauteur (Poteau) |
| `STLOUT` |  | Exporte le modèle 3D en STL (millimètres) |
| `STRETCH` | `S` | Étire : faites glisser une fenêtre de capture sur les extrémités pour déplacer ; ce qui est à l'intérieur bouge, le reste reste en place (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Styles de texte : la police, la hauteur, la largeur et l'inclinaison que prend le nouveau texte (la boîte de dialogue ; -STYLE dans la ligne de commande) |
| `SUBTRACT` | `SU` | Retire des solides d'autres (3D), ou des régions 2D d'autres régions |
| `SWBOUT` | `SWMACRO` | Télécharge une macro pour SolidWorks (.swb) qui reconstruit le modèle en une seule esquisse contrainte |
| `SWEEP` |  | Balaie des objets 2D fermés le long d'un tracé (ligne, polyligne, arc, cercle) pour en faire des solides (3D) |
| `TABLE` | `TB` | Crée un tableau : lignes et colonnes, ou à partir de cellules de tableur du presse-papiers ou d'un fichier CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Modifie un tableau : saisie dans une cellule, insertion et suppression de lignes et de colonnes, dimensions, cellules fusionnées, alignement |
| `TABLEEXPORT` |  | Enregistre ce qu'affiche un tableau dans un fichier CSV |
| `TABLEPASTE` | `PASTETABLE` | Crée un tableau à partir de cellules de tableur du presse-papiers |
| `TABLESTYLE` | `TS` | Styles de tableau : hauteurs de texte, alignement, marges et bordures pour les lignes de titre, d'en-tête et de données |
| `TAGS` |  | Étiquettes sur les références de bloc : définit une étiquette (type, valeurs autorisées, blocs concernés), la règle sur les références sélectionnées, et les liste dans un tableau que vous pouvez enregistrer en CSV |
| `TEXT` | `DT`, `DTEXT` | Texte sur une seule ligne ; Entrée commence la ligne suivante |
| `TEXTEDIT` | `ED`, `DDEDIT` | Modifie le texte sur place : choisissez un texte (ou double-cliquez dessus) (ED) |
| `TEXTMASK` | `TMASK` | Place un masque d'arrière-plan derrière les textes (fond du dessin ou une couleur), ou le retire. |
| `TEXTTOFRONT` |  | Place tous les textes, cotes et repères au premier plan, devant tout le reste. |
| `TOOLBAR` |  | Choisit ce qu'affichent les boutons de la barre d'outils : icônes et texte, icônes seules, ou texte seul (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Place la barre d'outils en haut, en bas, à gauche ou à droite de la fenêtre |
| `TOOLBARROWS` |  | Choisit le nombre de lignes de la barre d'outils : s'adapter à la fenêtre, 2 ou 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Met les barres au-dessus du dessin en version standard ou compacte |
| `TOUCHCROSSHAIR` | `TCX` | Réticule décalé pour dessiner au doigt : un doigt déplace un réticule placé au-dessus et à côté de lui, pour que le doigt ne masque pas le point choisi. Relever le doigt ne choisit rien ; le bouton Clic ou un appui d'un second doigt choisit au réticule, et maintenir Clic en déplaçant fait glisser. Un appui long ou le bouton Entrée valent Entrée. Deux doigts font un panoramique et un zoom. Options : ON, OFF, Auto (activé seulement là où un doigt est le seul pointeur), Distance, Côté (S). |
| `TOUR` | `TUTORIAL` | Refait la visite en six étapes du premier dessin |
| `TRIM` | `TR` | Coupe les objets jusqu'aux endroits où d'autres les croisent : cliquez sur un morceau, faites glisser à travers plusieurs, ou Maj+clic pour prolonger |
| `TRIMEXTENDMODE` |  | Comment AJUSTER et PROLONGER démarrent : 1 Rapide (chaque objet est une arête de coupe ou une limite), 0 Standard (choisissez d'abord les arêtes) |
| `TTR` |  | Un cercle tangent à deux objets, avec un rayon que vous donnez (identique à CIRCLE T). |
| `TURNLEFT` |  | Fait pivoter la vue de 90° vers la gauche (sens antihoraire) : Z du SCU -90, et la vue suit. Rien dans le dessin ne bouge. |
| `TURNRIGHT` |  | Fait pivoter la vue de 90° vers la droite (sens horaire) : Z du SCU 90, et la vue suit. Rien dans le dessin ne bouge. |
| `TURNWORLD` |  | Retour au monde : SCU Monde, et la vue est de nouveau à niveau. |
| `TXT2MTXT` | `T2M` | Joint des textes sur une seule ligne en un seul texte en paragraphe, de haut en bas. |
| `UCS` |  | Votre propre système de coordonnées : une origine et un axe X (origine, angle Z, 3 points, Objet (OB), Précédent (P), Monde (W), Nommé (NA)) ; les points saisis, Ortho, le repérage polaire, la grille et le nouveau texte le suivent ; la vue tourne pour que son axe X soit à niveau. Rien dans le dessin ne bouge. |
| `UNDO` | `U` | Annule la dernière commande |
| `UNGROUP` |  | UNGROUP : dissout des groupes. Sélectionnez des objets des groupes, ou donnez un Nom. Les objets restent dans le dessin. |
| `UNION` | `UNI` | Joint des solides en un seul (3D), ou des régions 2D en une seule région |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Affiche de nouveau chaque objet masqué par ISOLATEOBJECTS ou HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Comment les longueurs sont affichées et saisies : décimal, pieds et pouces, fractions (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Recalcule les champs, et choisit quand ils se mettent à jour d'eux-mêmes |
| `USDOUT` |  | Exporte le modèle 3D en USD (texte .usda, binaire .usdc ou paquet .usdz) |
| `VIEW` | `-VIEW`, `V` | Vues 3D standard, en perspective ou parallèles (3D) |
| `VIEWBASE` | `FLATSHOT` | Place une vue 2D plane des solides 3D (face, dessus, côté ou isométrie, arêtes cachées en tirets) sur une feuille ou dans le modèle |
| `VIEWLABEL` | `VL` | Un titre de vue sur une feuille qui affiche le nom de la vue de sa fenêtre, et change avec elle. |
| `VOICE` |  | Active ou désactive les commandes vocales. Elles sont reconnues sur cet ordinateur. |
| `VPCLIP` |  | Découpe une fenêtre de présentation de feuille dans un objet fermé ou un polygone dessiné ; Supprimer la rend de nouveau rectangulaire |
| `VPLAYER` |  | Gèle ou dégèle des calques dans certaines fenêtres seulement (Geler (F), Dégeler (T), Réinitialiser (R)), et choisit les calques gelés dans les nouvelles fenêtres (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divise la zone de dessin en volets, chacun avec sa propre vue (sur une feuille : une fenêtre de présentation, comme MVIEW) |
| `VPVIEW` |  | Définit ce qu'affiche une fenêtre de présentation : choisissez une fenêtre sur le modèle |
| `VSCURRENT` | `VS`, `SHADEMODE` | Style visuel de la vue 3D : ombré, arêtes, lignes cachées, fil de fer, rayons X |
| `WALL` | `WA` | Dessine des murs 2D comme une polyligne. Ils se joignent et portent portes et fenêtres. |
| `WALLARC` | `WARC` | Dessine un arc de murs. Les murs en plan sont droits, donc l'arc est dessiné en petits murs droits (15 degrés chacun) qui se joignent. |
| `WALLDELSEG` |  | Supprime un morceau de mur entre deux points. Ce qui reste demeure un ou deux murs. |
| `WALLDIM` |  | Saisissez une nouvelle valeur pour une cote : le mur à son extrémité éloignée se déplace d'équerre, le mur à la première extrémité reste en place, et les murs qui y sont joints suivent. |
| `WALLDISJOIN` |  | Choisissez un mur près d'une extrémité pour interdire les jonctions à cette extrémité : elle est dessinée d'équerre et rien ne la suit. Choisissez-la à nouveau pour les autoriser. |
| `WALLGRID` |  | Verrouille un mur sur une ligne de trame : le long de celle-ci, ou une extrémité dessus. Déplacez la ligne avec GRIDMOVE et le mur suit. |
| `WALLHOLD` |  | Aligne et verrouille : un mur garde sa place par rapport à un autre (sur sa ligne, ou à la distance qu'il a). Si l'un bouge, l'autre suit. |
| `WALLHOLDDIM` |  | Verrouille la distance entre deux murs parallèles. Si l'un bouge, l'autre suit pour la conserver. |
| `WALLHOLDS` |  | Liste les verrous des murs. |
| `WALLJOINS` |  | Donne à chaque mur d'un dessin plus ancien son identifiant et enregistre les jonctions entre eux. Cela se fait aussi au premier changement que vous effectuez. |
| `WALLJOINSTYLE` |  | Cliquez sur un angle où deux murs se rejoignent bout à bout pour modifier son dessin : onglet, about ou arasé. T inverse le mur qui traverse. |
| `WALLOFFSET` | `WO` | Déplace un mur d'équerre par rapport à lui-même d'une distance (les murs qui y sont joints suivent), ou en fait une copie à cette distance. |
| `WALLPICK` |  | Crée des murs sur une ligne ou une polyligne du dessin, avec les lignes qui y sont jointes si vous répondez Oui. |
| `WALLPOLY` | `WP` | Dessine des murs autour d'un polygone régulier de 3 à 64 côtés, comme POLYGON. |
| `WALLRECT` | `WR` | Dessine quatre murs joints à partir de deux coins opposés, comme RECTANG. |
| `WALLREJOIN` |  | Refait d'un seul mur deux parties d'un mur. La première garde sa place dans le dessin. |
| `WALLROT` |  | Dessine quatre murs joints sous forme de rectangle tourné à un angle quelconque : le premier côté, puis jusqu'où il s'étend. |
| `WALLSPLIT` | `WS` | Scinde un mur en deux à un point ou là où un autre mur le croise. Les parties restent jointes sauf si vous demandez un espace ou des extrémités libres. Portes et fenêtres suivent leur partie. |
| `WALLSPLITGAP` |  | Scinde un mur en laissant un espace : tapez l'espace, choisissez le mur, puis le point. Les parties ont des extrémités libres et peuvent être rejointes. |
| `WALLSTRETCH` |  | Étire avec une fenêtre : les extrémités de murs qui y sont comprises se déplacent, les murs entièrement compris bougent en entier, et les murs qui s'appuient sur leurs côtés glissent avec eux. |
| `WALLTAN` |  | Prolonge un mur par un arc qui le quitte dans son prolongement (dessiné en petits murs droits). |
| `WALLTRACE` |  | Crée des murs autour de la plus petite zone fermée de lignes et de murs qui entoure le point où vous cliquez. |
| `WALLUNHOLD` |  | Retire les verrous d'un mur (et les verrous des autres murs qui lui sont liés). |
| `WBLOCK` | `W`, `-WBLOCK` | Écrit un bloc, quelques objets ou tout le dessin dans un nouveau fichier DWG ou DXF (W) |
| `WEDGE` | `WE` | Un coin : deux coins et une hauteur ; il s'incline à partir du premier coin (3D) |
| `WHEREAMI` | `WHERE` | Indique où se trouve le curseur. |
| `WHOHAS` |  | Indique qui a un dessin ouvert. CadCraft Studio conserve un petit fichier de verrouillage à côté de chaque dessin ouvert (Plan.dwg.cclock : qui, depuis quand, quelle version) et le supprime à la fermeture. Options : Actuel (C) (le dessin ouvert), Fichier (F) (en choisir un), DOSsier (FO) (chaque dessin d'un dossier ouvert quelque part ; cela permet aussi à Studio de conserver des fichiers de verrouillage dans ce dossier), Chemin (P) (le taper), Nom (N) (le nom que voient les autres). Un verrou non rafraîchi depuis cinq minutes est dit périmé. Non disponible dans un navigateur. |
| `WINDOW` | `WN` | Place une fenêtre dans un mur. |
| `XATTACH` | `XA` | Lie un autre DWG ou DXF à ce dessin, affiché en lecture seule (XREF les liste et les recharge) |
| `XCLIP` | `XC` | Découpe des références de bloc et des dessins liés dans un rectangle ou un polygone, ou retire le découpage. |
| `XLINE` | `XL` | Ligne de construction, sans fin des deux côtés : par deux points, horizontale, verticale, à un angle, bissectrice d'un angle, ou décalée d'une ligne. |
| `XREF` | `XR`, `-XREF` | Dessins liés (références externes) : lister, attacher, recharger, lier, détacher |
| `ZOOM` | `Z` | Étendue, ou une fenêtre |

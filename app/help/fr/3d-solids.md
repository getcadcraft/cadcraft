---
title: Modéliser en 3D
summary: Voir le dessin en 3D sur l'onglet 3D et créer des solides simples à partir de lui : extrusion (avec une conicité ou le long d'un tracé), révolution, pousser et tirer des faces, boîtes, cylindres et biseaux, réunir, soustraire et intersecter, puis déplacer, copier, faire pivoter et effacer, et placer sur une feuille des vues 2D planes de ces solides.
keywords: 3d, trois d, solide, solides, 3dsolid, région, corps, acis, sat, sab, solides d'autres programmes, ouvrir un dessin 3D, extrusion, ext, révolution, rev, balayage, conicité, tracé, presspull, pousser tirer, push pull, boîte, cylindre, cyl, biseau, 3dorbit, orbite, vue, vscurrent, style visuel, ombré, lignes cachées, fil de fer, rayons X, xray, iso, perspective, parallèle, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cube de vue, union, uni, soustraire, su, intersection, in, booléen, combiner, joindre solides, viewbase, flatshot, vue plane, vue 2D, vue de dessin, vue de face, vue de dessus, vue de côté, lignes cachées
from: 13060e71
---

## Ce que vous allez réaliser

Une emprise de pièce de 1000 × 600 extrudée en un bloc de 400 de haut, une face soulevée, et un cylindre à côté — puis le modèle enregistré avec le dessin et exporté pour une visionneuse 3D ou une imprimante.

L'onglet {{ui:3D}} se trouve à côté de {{ui:Modèle}}, sous le dessin. Il affiche le dessin de l'espace objet posé au sol, dans les couleurs de ses calques (les calques désactivés ou gelés restent masqués), ainsi que les solides que vous créez. La première fois qu'il s'ouvre, la vue 3D se charge ; ensuite, il bascule immédiatement.

## Extruder une forme

1. Sur l'onglet {{ui:Modèle}}, tapez `REC` et appuyez sur {{key:Enter}}. Tapez `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Cliquez sur l'onglet {{ui:3D}}. La barre d'outils affiche le groupe {{ui:3D}} à la place des groupes du dessin.
3. Cliquez sur {{ui:Extrusion}} (ou tapez {{cmd:EXTRUDE}}, `EXT`). Cliquez à l'intérieur du rectangle, puis appuyez sur {{key:Enter}}.
4. Tapez `400` et appuyez sur {{key:Enter}}. L'historique indique « 1 solide extrudé, hauteur 400 » avec son volume.

Les polylignes fermées (arcs compris), rectangles, polygones, cercles et ellipses s'extrudent ; les lignes et les polylignes ouvertes ne s'extrudent pas, et l'historique en indique la raison. Vous pouvez aussi sélectionner d'abord les formes sur l'onglet {{ui:Modèle}} et taper `EXTRUDE` là. Au lieu de taper la hauteur, vous pouvez la cliquer : le contour suit le curseur vers le haut et vers le bas. Une hauteur négative descend. Tapez `D` à l'invite de hauteur pour supprimer les formes 2D après l'extrusion (`D` à nouveau les conserve).

À l'invite de hauteur, `T` demande un angle en degrés pour la conicité : les côtés s'inclinent de cet angle, si bien que le dessus est plus petit (un angle négatif le rend plus grand) ; un angle trop raide pour la forme est refusé. `P` pour le tracé balaie les formes le long d'un tracé à la place (voir ci-dessous).

## Révolution et balayage

- {{cmd:REVOLVE}} (`REV`, ou {{ui:Plus}} › {{ui:Révolution autour d'un axe}}) : sélectionnez des formes fermées, appuyez sur {{key:Enter}}, puis cliquez sur les deux extrémités de l'axe (ou tapez `X` ou `Y` pour l'axe du dessin passant par 0,0), puis tapez un angle ou appuyez sur {{key:Enter}} pour un tour complet. La forme tourne autour de l'axe et se dresse hors du sol : dessinez la moitié du contour d'un vase à côté d'une ligne, puis effectuez la révolution autour de cette ligne. La forme peut toucher l'axe mais pas le croiser. Un tour complet compte 48 segments.
- {{cmd:SWEEP}} (ou {{ui:Plus}} › {{ui:Balayage le long d'un tracé}}, ou `P` à l'invite de hauteur de EXTRUDE) : sélectionnez des formes fermées (le profil), appuyez sur {{key:Enter}}, puis cliquez sur le tracé : une ligne, une polyligne, un arc, un cercle ou une ellipse. Le profil se dresse en travers du tracé, son milieu posé dessus, et court le long de celui-ci ; les angles sont à onglet, et un tracé fermé fait un anneau. Un petit rectangle balayé le long du contour d'une pièce fait une plinthe ; un cercle le long d'une polyligne fait une canalisation.

## Pousser et tirer une face

1. Cliquez sur {{ui:Pousser/tirer}} (ou tapez {{cmd:PRESSPULL}}).
2. Cliquez sur la face supérieure du bloc.
3. Tapez `100` et appuyez sur {{key:Enter}}, ou déplacez le curseur et cliquez. Le bloc fait 500 de haut.

## Boîtes, cylindres et biseaux

- {{cmd:BOX}} : cliquez ou tapez deux coins, puis une hauteur.
- {{cmd:CYLINDER}} (`CYL`) : le centre, le rayon, puis une hauteur. Les cylindres et les cercles extrudés ont 48 côtés, ombrés en douceur.
- {{cmd:WEDGE}} (`WE`) : deux coins et une hauteur. La hauteur est pleine au premier coin et descend à zéro à l'autre.

Sur l'onglet 3D, un clic tombe sur la face ou l'arête sous le curseur, sinon sur le sol, si bien qu'une boîte peut reposer sur un autre solide.

## Déplacer, copier, faire pivoter et effacer des solides

Sur l'onglet 3D, un clic sélectionne un solide ; faites glisser de gauche à droite pour une fenêtre, de droite à gauche pour une capture. Puis :

- {{cmd:MOVE}} : cliquez un point de base puis l'endroit où il va, ou tapez `<100,0,0>` (ou `@100,0`) pour une distance selon X, Y et Z.
- {{cmd:COPY}} : pareil, en laissant l'original.
- {{cmd:ROTATE}} : tapez un angle (la rotation se fait autour du milieu de la sélection, autour de Z), ou cliquez le centre, un point de départ et l'angle.
- {{cmd:ERASE}} ou {{key:Delete}}.

## Réunir, soustraire et intersecter des solides

Ouvrez {{ui:Plus}} dans la barre d'outils 3D, ou tapez la commande :

- {{cmd:UNION}} (`UNI`) : sélectionnez les solides, appuyez sur {{key:Enter}} : ils ne forment plus qu'un seul solide.
- {{cmd:SUBTRACT}} (`SU`) : sélectionnez les solides à conserver et appuyez sur {{key:Enter}}, puis ceux à retirer et appuyez sur {{key:Enter}}. Un trou traversant dans un bloc : dessinez un cylindre qui le traverse, puis soustrayez le cylindre.
- {{cmd:INTERSECT}} (`IN`) : sélectionnez les solides, appuyez sur {{key:Enter}} : il ne reste que la partie commune à tous.

L'historique indique le volume du résultat. Chacune de ces opérations est une étape d'annulation. La première que vous lancez charge le moteur booléen 3D (environ 0.5 MB ; inclus dans {{ui:Enregistrer pour le hors ligne}}). Seuls les solides fermés peuvent être combinés : un solide à arêtes ouvertes (provenant de faces 3D isolées d'un autre programme) est refusé, avec la raison indiquée. Le résultat est un seul solide ; les faces courbes restent faites de petites facettes planes, comme l'était le cylindre.

Double-cliquez sur un solide pour modifier ses faces et ses arêtes séparément ; {{key:Esc}} le referme. Chaque modification 3D est une étape d'annulation dans le même historique que le dessin : {{key:Mod+Z}} annule la dernière action effectuée sur l'un ou l'autre onglet.

## Vues planes sur une feuille

1. Ouvrez un onglet de feuille (ou restez sur {{ui:Modèle}}), puis tapez {{cmd:VIEWBASE}} (ou `FLATSHOT`).
2. Choisissez la vue : {{key:Enter}} pour la vue de face, ou `T` (dessus), `R` (droite), `L` (gauche), `BA` (arrière), `BO` (dessous), `I` (isométrique).
3. {{key:Enter}} affiche les lignes cachées, en tirets ; `H` les omet.
4. {{key:Enter}} retient l'échelle suggérée par CadCraft : sur une feuille, la plus grande échelle normalisée (par exemple 1:20) à laquelle la vue tient dans moins de la moitié du papier. Ou tapez-en une : `1:50`, `2:1`.
5. Cliquez, ou tapez, l'emplacement du centre de la vue.

La vue est une seule référence de bloc, `VIEW-FRONT-1` et ainsi de suite : les arêtes visibles sur le calque VIEW-VISIBLE (0.5 mm), les cachées sur VIEW-HIDDEN (en tirets, 0.25 mm). Déplacez-la, cotez-la et tracez-la comme tout autre dessin. C'est une image des solides au moment où vous l'avez créée : après les avoir modifiés, effacez la vue et relancez {{cmd:VIEWBASE}}. Pour d'autres vues, lancez la commande une fois par vue.

## Regarder autour

Faites glisser avec la molette pour orbiter, {{key:Shift}} + glisser avec la molette ou le bouton droit pour le panoramique, et tournez la molette pour zoomer au niveau du curseur. Sur un pavé tactile, deux doigts orbitent et un pincement zoome. Un clic droit sans glisser équivaut à {{key:Enter}}, comme sur les autres onglets. 3DORBIT permet au bouton gauche d'orbiter jusqu'à ce que vous appuyiez sur {{key:Enter}} ou {{key:Esc}}.

- {{ui:Vues}} (ou {{cmd:VIEW}}) : Iso, Dessus, Dessous, Face, Arrière, Gauche, Droite, Perspective ou Parallèle, et Zoom sur l'étendue.
- {{ui:Style}} (ou {{cmd:VSCURRENT}}, `VS`) : Ombré, Ombré avec arêtes, Lignes cachées, Fil de fer ou Rayons X.

Les points sur lesquels vous cliquez s'accrochent aux solides (coins, arêtes, faces) et au dessin 2D posé au sol : les extrémités et les milieux de ses lignes et arcs, et les points le long de ceux-ci. Les lignes 2D ne sont jamais sélectionnées sur l'onglet 3D. Lorsqu'une commande demande des objets 2D (EXTRUDE, REVOLVE, SWEEP), un clic en choisit un, un glissement de gauche à droite prend ce qui se trouve entièrement dans la fenêtre, et un glissement de droite à gauche prend ce qu'il croise, comme sur l'onglet {{ui:Modèle}}.

Un ViewCube se trouve en haut à droite de l'onglet 3D : cliquez sur une face, une arête ou un coin pour regarder depuis là, faites-le glisser pour orbiter, et le bouton en forme de maison ramène à la vue isométrique. C'est le réglage {{ui:Automatique}} de {{ui:Indicateur d'angle}} dans [Paramètres de CadCraft](topic:settings). Réglé sur {{ui:Cube de vue}}, l'onglet {{ui:Modèle}} affiche aussi un cube, regardant depuis le dessus ; cliquer sur une autre face ouvre l'onglet 3D en regardant depuis là. Réglé sur {{ui:Icône des axes}}, les deux onglets affichent à la place le repère des axes.

## Solides provenant d'autres programmes

Un dessin provenant d'un autre programme peut contenir des solides 3D, des régions et des corps (3DSOLID, REGION, BODY : l'autre programme conserve leur forme sous forme de données ACIS). CadCraft affiche ceux de l'espace objet sur l'onglet 3D, dans la couleur de leur calque et avec leurs propres arêtes, la première fois que vous ouvrez l'onglet ; la ligne de commande indique alors combien ont été dessinés.

- Ils s'affichent tels quels : vous ne pouvez pas les sélectionner, les déplacer ni les modifier. Les calques désactivés ou gelés les masquent.
- Un enregistrement en DWG les réécrit à l'identique, dans n'importe quelle version DWG, afin que l'autre programme les retrouve. Les fichiers DXF ne les conservent pas : CadCraft les écrit uniquement dans le DWG, et le signale lorsque vous enregistrez en DXF.
- Dessinés : les faces planes, et les faces sur cylindres, cônes, sphères, tores et surfaces spline simples, avec des arêtes droites, rondes et spline. Une face sur tout autre type de surface, ou une face que CadCraft ne peut pas mettre en page, n'est pas devinée : elle est omise et listée, par exemple « Pas encore disponible (solides 3D) : 2 faces sur spline-surface (sweepsur), une surface pas encore disponible. »
- Les solides à l'intérieur des blocs ne sont pas encore affichés ; « À propos de ce fichier » les compte.

Les faces courbes sont dessinées en petits morceaux plans, espacés d'environ 7.5°, si bien qu'un solide courbe paraît un peu facetté de près.

## Enregistrer et exporter

Enregistrer conserve le modèle 3D, en DWG et en DXF. Chaque face est écrite comme une face 3D sur le calque `CC-3D`, afin que les autres programmes affichent les solides, et CadCraft conserve dans le fichier sa propre copie exacte, qu'il relit lorsque vous rouvrez le dessin, avec la vue 3D telle qu'elle était (caméra, projection et style visuel). Les faces 3D créées par d'autres programmes arrivent sur l'onglet 3D sous forme de faces isolées, regroupées en un seul groupe. Une face 3D à l'intérieur d'un bloc arrive une fois pour chaque référence à ce bloc dans le modèle, placée et tournée comme la référence ; dans le bloc lui-même, et sur une feuille, une face 3D est dessinée à plat, par son contour.

{{ui:Exporter}} dans le groupe 3D télécharge les solides seuls : GLB pour les visionneuses et le web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ou STL pour l'impression 3D, en millimètres ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} demande lequel.

:::note
Le modèle 3D est à taille réelle. Un dessin sans unités compte comme des millimètres, donc `1000` correspond à un mètre. Si vous changez ensuite les unités du dessin (Propriétés, sans rien sélectionner), les solides sont mis à l'échelle avec elles pour rester sur le dessin, et l'historique l'indique. Un seul {{key:Mod+Z}} annule à la fois le changement d'unités et la mise à l'échelle.
:::

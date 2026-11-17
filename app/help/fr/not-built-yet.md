---
title: Pas encore disponible
summary: Ce que cette version de l'application de dessin CadCraft ne fait pas encore, et ce qu'il faut faire en attendant.
keywords: manquant, limites, ctb, stb, style de tracé, propriétés, ucs, annotatif, bloc dynamique, spline, feuille de route, non pris en charge, enregistrement DWG, hachure, étirer, réseau, joindre, matchprop, couper, allonger, type de ligne, épaisseur de ligne, xref, nuage, 3d, solides, booléens, ligne de repère multiple, masquage
from: 87e56521
---

CadCraft est en cours de développement. Cette page liste ce que la version actuelle ne fait pas encore, pour que vous n'ayez pas à le chercher. Chaque élément indique ce qu'il faut faire en attendant.

## Fichiers et enregistrement

| Pas encore disponible | En attendant |
|---|---|
| Un DWG CadCraft contrôlé dans AutoCAD lui-même | Chaque version enregistrée est relue par les lecteurs DWG de trois autres logiciels et par CadCraft. Voir [Ce qu'un DWG conserve et modifie](topic:files#what-a-dwg-keeps-and-changes). |
| Enregistrement en DXF plus récent que 2000 | Enregistrez en DXF 2000, ou en DWG jusqu'à AutoCAD 2018. |
| Enregistrement par-dessus le fichier ouvert dans le navigateur | Chaque enregistrement télécharge une nouvelle copie ; remplacez vous-même l'ancien fichier si vous le souhaitez. Dans CadCraft Studio, {{key:Mod+S}} réécrit le fichier que vous avez ouvert. |
| Enregistrement dans le cloud et synchronisation entre ordinateurs | CadCraft n'envoie pas encore ses enregistrements dans le cloud : gardez vos fichiers DWG et DXF dans vos propres dossiers. Dans CadCraft Studio, [Historique](topic:history) liste les versions cloud d'un dessin enregistré ailleurs, ainsi que les copies de vos propres enregistrements sur cet ordinateur. |
| Superpositions, et modification d'un dessin lié sur place | Joignez le dessin comme référence externe et rechargez-le après avoir modifié l'autre dessin. Une référence reste une référence lorsque vous enregistrez en DWG, et {{cmd:XCLIP}} la découpe. |
| Images dans un DXF ; masquages qui cachent ce qui est dessous | Un DXF conserve une image sous forme de son cadre, avec le nom du fichier ; un DWG la conserve comme image : voir [Images dans un dessin](topic:pictures). Un masquage s'affiche comme son cadre. |
| Modification des lignes de repère multiples à lignes courbes, à lignes des deux côtés du contenu, ou avec un bloc tourné ou mis à l'échelle de façon inégale | Elles sont dessinées comme l'autre logiciel les a dessinées, et se déplacent d'un seul bloc. Les lignes de repère multiples à lignes droites menant à un seul point d'arrivée, avec du texte ou un bloc comme contenu, sont modifiables ({{cmd:MLEADEREDIT}}). |
| Dans les tableaux d'autres logiciels : une cellule contenant un bloc, la mise en forme du texte dans une cellule, les bordures et couleurs par cellule d'un tableau DXF, un tableau découpé en colonnes | Le tableau s'ouvre comme tableau modifiable ({{cmd:TABLEDIT}}) et s'affiche tel que l'autre logiciel l'a dessiné, jusqu'à ce que vous le modifiiez ; CadCraft le redessine alors à partir de ses cellules : texte simple, formules comme `=G3*H3` et `=Sum(I3:I9)`, alignement et hauteurs de texte. Une cellule de bloc est alors vide. Un tableau DWG non modifié est enregistré avec les données de cellules qu'il avait. |
| Un vrai objet tableau dans un DXF enregistré | Un DWG conserve un tableau comme tableau que d'autres logiciels peuvent modifier. Un DXF le conserve comme le bloc qui le dessine, avec un enregistrement propre à CadCraft : CadCraft le rouvre comme tableau, les autres logiciels voient un bloc. Un tableau miroir ou mis à l'échelle de façon inégale est enregistré ainsi dans un DWG aussi. |
| Copier-coller avec d'autres logiciels | Le presse-papiers de CadCraft fonctionne entre les dessins et onglets CadCraft du même navigateur, pas avec d'autres logiciels. Enregistrez en DWG ou en DXF et ouvrez le fichier là-bas. Voir [Copier, coller et dupliquer](topic:copy-paste). |

## Dessin et modification

| Pas encore disponible | En attendant |
|---|---|
| Motifs de hachures que CadCraft n'a pas, et remplissages en dégradé tels que d'autres logiciels les peignent point par point | Les hachures ouvertes avec des motifs que CadCraft n'a pas s'affichent en teinte unie. Un remplissage en dégradé ({{cmd:GRADIENT}}) est peint à la façon de CadCraft pour chaque type : proche de celui des autres logiciels dans son genre, mais pas point par point. Le DWG 2004 et les versions ultérieures le conservent comme un vrai dégradé ; dans un fichier DXF 2000 ou DWG 2000, seul CadCraft le relit, et les autres logiciels voient un remplissage plein. Les motifs se chargent depuis un fichier `.pat`, et une hachure peut être liée à son contour pour le suivre : voir [Hachures et zones de remplissage](topic:hatch). |
| Types de ligne avec formes ou texte, et épaisseurs de ligne dans un DXF R12 enregistré | Les formes et le texte d'un type de ligne du fichier sont omis de ses tirets ; enregistrez en DWG pour conserver les épaisseurs de ligne. |
| Hachures à motif dans un DXF enregistré | Le R12 n'a pas de hachure : elles sont enregistrées comme leurs contours. Enregistrez en DWG pour conserver le motif. |
| Réseaux créés par un autre logiciel ou modifiables par lui ; lignes et niveaux dans les réseaux sur chemin et polaires ; réseau qui suit sa courbe de chemin | Un réseau créé avec l'option ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}} ; modifié avec {{cmd:ARRAYEDIT}}) est enregistré comme référence de bloc avec les nombres propres à CadCraft : les autres logiciels l'affichent, le déplacent, le tracent et le décomposent, mais ne peuvent pas modifier ses nombres ; un réseau créé dans un autre logiciel s'ouvre ici comme simple référence de bloc. Un réseau sur chemin conserve une copie de son chemin : modifier ensuite la courbe ne déplace pas les éléments. |
| Fenêtres de présentation découpées vers et depuis d'autres logiciels | Une fenêtre découpée avec {{cmd:VPCLIP}} ou créée avec {{cmd:MVIEW}} Polygonal ou Object est enregistrée avec son propre contour CadCraft : les autres logiciels l'ouvrent comme le rectangle qui l'entoure, et une fenêtre découpée dans un autre logiciel s'ouvre ici comme son rectangle. Le DXF R12 ne conserve que le rectangle. |
| {{cmd:STRETCH}} avec un polygone de capture | Utilisez une ou plusieurs fenêtres de capture. |
| {{cmd:PEDIT}} Éditer sommet (un sommet à la fois, sur la ligne de commande) | Les poignées, et le navigateur de sommets dans Propriétés (chaque sommet, ses largeurs et son bombement). Le reste de PEDIT est disponible : voir [Splines et polylignes](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} et {{cmd:JOIN}} sur des ellipses et des splines | {{cmd:EXPLODE}} une spline (ou {{cmd:PEDIT}}) pour obtenir une polyligne que ces commandes acceptent. |
| Raccord et chanfrein entre un segment en arc d'une polyligne et le segment voisin ; raccord qui joint une ligne à une polyligne | {{cmd:EXPLODE}} la polyligne, puis faites le raccord sur les morceaux. L'arc de raccord est ajouté comme objet distinct. |
| Ajuster et prolonger : l'option Projet (3D) et le prolongement d'une extrémité d'arc de polyligne | Ajustez dans le plan du dessin ; pour une extrémité d'arc, décomposez la polyligne ou redessinez l'arc. |
| Objets OLE : les insérer, les exécuter ou les modifier ; afficher ceux d'un DWG là où le fichier les place ; images métafichier | Voir [Images](topic:pictures#objects-from-other-programs-ole). Les objets d'un DXF s'affichent sous forme de bitmap ou de cadre étiqueté ; ceux d'un DWG sont conservés, mais non dessinés à leur place (OLELIST les liste et place une copie d'image là où vous l'indiquez). |
| Saisir la mise en forme (gras, fractions empilées, couleurs par mot) dans un paragraphe de texte ; polices autres que la police de type Helvetica ; colonnes | La mise en forme venue d'un fichier est conservée, dessinée et enregistrée (voir Texte) ; le nouveau texte de paragraphe a une seule hauteur et une seule couleur. |
| Texte de paragraphe modifié selon sa rotation | L'éditeur s'ouvre à plat ; le texte conserve sa rotation. |
| Lignes de repère multiples enregistrées comme objets multiligne dans un DXF | Un DWG les conserve comme lignes de repère multiples, avec chaque ligne de repère et un bloc comme contenu ; un DXF conserve ce qu'elles dessinent (lignes, pointes de flèche, et le texte ou le bloc). |
| Dans les tableaux ({{cmd:TABLE}}) : texte qui revient à la ligne dans une cellule, tableaux qui se découpent en parties, style de texte propre au style de tableau et couleurs par type de ligne dans une boîte de dialogue, liaison de données vers un fichier tableur (`.xlsx`) ou vers un fichier qu'il lit seul | Le texte d'une cellule ne se coupe qu'aux endroits où vous le coupez ({{key:Alt+Enter}}) ; élargissez la colonne. {{cmd:DATALINK}} lit un fichier `.csv`, et {{cmd:DATALINKUPDATE}} vous demande de choisir à nouveau le fichier. {{cmd:DATAEXTRACTION}} et {{cmd:COUNTTABLE}} créent un tableau qui ne suit pas le dessin tout seul : relancez-les (comptage en direct : {{cmd:BOMTABLE}}). |
| Définitions d'attributs conservées à part dans un fichier enregistré (hors bloc), attributs sur plusieurs lignes | Placez les définitions d'attributs dans un bloc avant d'enregistrer : seules, elles sont enregistrées comme du texte affichant la balise. |
| États de calques (enregistrer et restaurer les calques activés) | Utilisez {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, ou activez et désactivez les calques à la main. |
| Sélection par polygone de fenêtre et polygone de capture, et filtres de sélection enregistrés | Clôture (`F`), Fenêtre, Capture, Retirer, {{cmd:QSELECT}} pour une règle. |

## Le panneau Propriétés

| Pas encore disponible | En attendant |
|---|---|
| Dessiner les options d'ajustement, et la position horizontale du texte ainsi que le texte sous la ligne sur les cotes autres que linéaires et alignées | Elles sont conservées sur l'objet, affichées dans Propriétés et enregistrées ; CadCraft place le texte selon sa propre règle. |
| Matériaux que voient d'autres logiciels | Un fichier enregistré conserve le nom du matériau pour CadCraft ; les autres logiciels affichent le matériau du calque. |
| Transparence dans les fichiers DWG 2000 et DXF | Les autres logiciels affichent ces objets pleins ; CadCraft conserve la transparence. Enregistrez en DWG 2004 ou ultérieur pour que tout le monde la voie. |
| Lien de hachure créé dans un autre logiciel | CadCraft enregistre son propre lien dans les fichiers DWG et DXF 2000 ; les liens créés dans d'autres logiciels ne sont pas lus. Utilisez `HATCHEDIT`, puis Lien : voir [Hachures et zones de remplissage](topic:hatch). |
| Coordonnées dans Propriétés dans l'UCS | Propriétés affiche les coordonnées monde ; la barre d'état et {{cmd:ID}} affichent les coordonnées UCS. Voir [Tourner la vue et utiliser vos propres coordonnées](topic:ucs-and-turned-view). |
| Une position distincte pour un objet annotatif à chacune de ses échelles ; lecture des enregistrements par échelle que d'autres logiciels conservent | Un texte ou une cote annotatif conserve une liste d'échelles ({{cmd:OBJECTSCALE}}) et chaque fenêtre l'affiche à la taille de son échelle, au même endroit. La liste est enregistrée comme donnée propre à CadCraft : un autre logiciel voit l'objet à la seule échelle pour laquelle il est dimensionné, et une liste créée dans un autre logiciel n'est pas lue. Voir [Unités, papiers et échelles](topic:units-papers-scales#annotate-by-scale). |
| Modifier les distances, angles ou retournements d'un bloc dynamique ; blocs dynamiques restant dynamiques lorsque vous enregistrez dans une autre version DWG ou en DXF | Changez son état de visibilité dans Propriétés › {{ui:Custom}} ; ses autres valeurs s'y affichent en lecture seule. Il reste dynamique lorsque vous l'enregistrez en DWG dans la version d'origine du dessin. Voir [Blocs dynamiques](topic:dynamic-blocks). |
| Tolérance d'ajustement des splines, degré de spline 6 et plus, splines 3D | Les points d'ajustement et de contrôle, les degrés 1 à 5 et les poids sont disponibles : voir [Splines et polylignes](topic:splines). La hauteur (Z) d'une spline n'est pas conservée. |
## Aides à la précision

| Pas encore disponible | En attendant |
|---|---|
| Repérage à partir de points à travers les commandes, et boîte de dialogue des réglages de repérage (angles polaires relatifs, angles supplémentaires) | {{cmd:POLARANG}} règle le pas ; acquérez de nouveau les points dans la commande suivante. |
| Accrochage à la grille | Saisissez les coordonnées ; la grille n'est qu'un repère visuel. |
| Options Arc et Longueur lors du choix des angles d'une zone, et MEASUREGEOM Volume | Dessinez le contour avec {{cmd:PLINE}} (arcs compris), puis {{cmd:AREA}} `O`. |
| Saisie dynamique pour les poignées, et sa liste d'options (la flèche vers le bas) | La ligne de commande affiche les options. |
| Angles en degrés-minutes-secondes, grades ou gisements de géomètre | Saisissez des degrés décimaux : `30.5` pour 30°30'. |
| Une boîte de gestionnaire de vues ; vues nommées d'une feuille qui reviennent sur cette feuille | {{cmd:NAMEDVIEW}} liste et restaure les vues. Un fichier enregistré les conserve, mais les vues d'une feuille reviennent sur la première feuille. |

## Feuilles, cotes et tracé

| Pas encore disponible | En attendant |
|---|---|
| Champs pour l'échelle d'une fenêtre, un objet nommé comme un calque ou un bloc, un lien hypertexte, et champs de jeu de feuilles au-delà du numéro et du nom de feuille ; champs écrits comme objets de champ que d'autres logiciels mettent à jour | {{cmd:FIELD}} propose la date, le nom du fichier, le numéro, le nom et le nombre de feuilles, les propriétés du dessin ({{cmd:DWGPROPS}}), la surface, la longueur et d'autres propriétés d'un objet, ainsi que des formules, dans le texte, les attributs et les cellules de tableau. Un autre logiciel affiche un champ CadCraft comme le texte qu'il a lu en dernier ; CadCraft lit les champs de date, de nom de fichier, de propriété, de feuille et d'expression d'un autre logiciel, et laisse les autres types en texte. L'échelle d'une fenêtre se saisit à la main. |
| Enregistrer le style de cote courant ; texte de cote déplacé à un endroit libre | Un dessin s'ouvre avec le style Standard courant. Le texte se place sur la ligne de cote (DIMTEDIT Left / Right / Center). Voir [Régler les tailles de cote](topic:dimension-settings). |
| Cotes angulaires modifiables à deux lignes issues de fichiers ouverts que CadCraft ne peut pas résoudre | Elles s'affichent comme dessinées dans le fichier. Les cotes de coordonnées, de longueur d'arc et de rayon coudé s'ouvrent comme cotes modifiables. |
| Vérification du lecteur CTB face à un fichier d'un autre logiciel (il est construit d'après la description publiée), styles de tracé nommés (STB), tramage, numéros de plume, niveaux de gris d'un CTB et ajustement adaptatif du type de ligne dans un style de tracé | Créez la table dans {{ui:Plot style tables}} (couleur, gris, encre, épaisseur de ligne, type de ligne, extrémité et jonction de ligne, et style de remplissage par couleur) : voir [Tables de styles de tracé](topic:plot-pdf#plot-style-tables). |
| Configurations de page | Choisissez le papier, l'échelle et le style de tracé dans la boîte de dialogue {{ui:Plot to PDF}} ; une feuille conserve son style de tracé. |
| Hindi et autres écritures qui exigent une mise en forme complexe dans les PDF, et idéogrammes rares (impression de textes européens, cyrilliques, grecs, hébreux, arabes, persans, ourdous, thaïs, chinois, japonais et coréens) | Ils s'impriment en « ? ». |
| Texte en écriture arabe et en chinois, japonais ou coréen dans le même PDF tracé | Un tracé utilise une seule police : l'une des deux écritures s'imprime en « ? ». |
| Marques de direction explicites dans le texte (incrustations, substitutions, isolats) | Elles sont ignorées : chaque ligne est ordonnée selon ses seules lettres. |
| Images dans une page PDF attachée, dans un tracé | Les traits, remplissages et textes de la page s'impriment. Une page qui n'est qu'une image s'ajoute avec {{cmd:SCANATTACH}}, et ses images s'impriment. Voir [Sous-jacents PDF](topic:pdf-underlay#plot-and-save). |
| Envoyer un travail à une découpeuse laser depuis CadCraft Studio (Studio n'a pas Web Serial) | Enregistrez le G-code et envoyez-le avec le programme de votre découpeuse, ou depuis Chrome ou Edge. Voir [Envoyer un dessin à une découpeuse laser](topic:laser-cutting#send-from-the-browser). |

## Contraintes et paramètres

| Pas encore disponible | En attendant |
|---|---|
| Contraintes sur les feuilles, dans les blocs, sur les ellipses, les splines ou le texte | Contraignez dans l'onglet {{ui:Model}}, sur les lignes, polylignes, cercles, arcs et points. |
| Continuité (G2), et contrainte directe du bombement d'un arc de polyligne | Tangente et égale ; un segment en arc suit ses deux extrémités. |
| Contraintes dimensionnelles de référence (pilotées), et `3Point` dans {{cmd:DCANGULAR}} | Une cote simple (DIMLINEAR …) affiche une valeur sans la piloter. |
| Contraintes dimensionnelles d'une taille fixe sur papier, et leur tracé | Elles s'affichent uniquement à l'écran ; ajoutez des cotes simples pour le tracé. |
| Contraintes conservées après EXPLODE, BREAK, JOIN et autres commandes qui créent de nouveaux objets, et sur les polylignes ajustées | Recontraignez-les (AUTOCONSTRAIN aide). {{cmd:MIRROR}} et {{cmd:TRIM}} des lignes, arcs et cercles les conservent. |
| Tableaux de configurations dans CadCraft | Modifiez les paramètres dans le panneau. |
| Aller-retour testé avec SolidWorks | Vérifiez l'esquisse que la macro construit avant de vous y fier. |

## 3D

| Pas encore disponible | En attendant |
|---|---|
| Congés, chanfreins, coques et lissages ; balayages le long d'un chemin qui s'élève (chemins 3D) | Extrudez des contours avec arcs, poussez et tirez les faces, faites des révolutions et balayez le long de chemins plats. |
| Extrusion dans une autre direction que vers le haut | Dessinez la forme sur le sol et extrudez-la vers le haut ou vers le bas (avec une dépouille ou le long d'un chemin si vous le souhaitez) ; faites pivoter ensuite le solide. |
| Élévation et épaisseur des objets 2D | Le dessin repose sur le sol (hauteur 0) dans l'onglet 3D. |
| Modification de solides, régions et corps venant d'autres logiciels ; affichage de ceux qui sont dans des blocs ; leurs faces sur des surfaces balayées, lissées ou autres surfaces libres ; maillages polyface et polygonaux | Les solides de l'espace objet s'affichent dans l'onglet 3D tels quels et sont réenregistrés sans modification en DWG ; ce qui n'est pas dessiné est listé à l'ouverture de l'onglet 3D. Demandez les maillages sous forme de faces 3D dans l'espace objet. Voir [Solides venant d'autres logiciels](topic:3d-solids#solids-from-other-programs). |
| Copier-coller de solides | Dans l'onglet 3D, utilisez {{cmd:COPY}}. Le presse-papiers ne contient que des objets 2D. |
| Coupes, vues qui suivent les modifications ultérieures des solides, et solides ombrés sur les feuilles tracées | {{cmd:VIEWBASE}} place des vues plates (un instantané) ; relancez-la après avoir modifié les solides. |
| Matériaux, textures et réglages d'éclairage | Les styles visuels : ombré, arêtes, ligne masquée, fil de fer, rayons X. |
| Couches cartographiques tracées, sur les fenêtres des feuilles et dans l'onglet 3D ; images venant de fichiers enregistrés avec le dessin ; localisation du dessin écrite pour d'autres logiciels en DWG 2000–2007 et DXF R12 | Les couches cartographiques s'affichent sous l'espace objet à l'écran ; le système et la liste des couches sont enregistrés avec le dessin : voir [Couches cartographiques sous le dessin](topic:map-layers) |
| Scans E57 de plus de 6 millions de points ou 512 Mo, fichiers propres aux fabricants de scanners (RCP, RCS, FLS, LGS, TZF, ZFS), nuage de points enregistré avec le dessin ou tracé, accrochage à un nuage dans l'onglet 3D, tranches verticales (coupes) dans l'onglet {{ui:Model}} | Exportez les gros scans ou ceux des fabricants en LAS ou LAZ ([Formats de nuages de points](topic:point-cloud-formats)) ; attachez le nuage à chaque ouverture du dessin ; tracez à partir d'une coupe en plan dans l'onglet {{ui:Model}} : voir [Tracer des lignes as-built sur un nuage de points](topic:point-clouds) |
| Recalage de scans : repérage automatique des cibles (sphères, damiers) dans un scan, calcul simultané de tous les scans (compensation par faisceaux), échelle, recalage sur un modèle | Choisissez des points correspondants ou saisissez les coordonnées des cibles, puis affinez un scan à la fois avec ICP : voir [Recaler plusieurs scans en un seul](topic:register-scans) |

## Routines et personnalisation

| Pas encore disponible | En attendant |
|---|---|
| LISP compilé ou protégé (.fas, .vlx), programmes natifs (.arx, .crx, .dbx) et VBA (.dvb) | Chargez le source .lsp d'une routine avec {{cmd:APPLOAD}}. |
| `grread` de LISP, réacteurs (`vlr-…`), fonctions de courbe (`vlax-curve-…`), dictionnaires et données étendues, `acet-…` des Express Tools | Le reste du langage fonctionne : voir [Exécuter des routines LISP](topic:run-lisp). La ligne de commande signale la fonction manquante lorsqu'une routine en atteint une. |
| Images et diapositives dans la boîte de dialogue d'une routine | Elles s'affichent comme des cadres vides ; le reste de la boîte fonctionne. |
| CraftScript (.craft), Lua et Python dans CadCraft | Exécutez-les dans l'espace Script de PartCraft. |
| Listes de calques, de couleurs et de types de ligne dans les styles de menu ruban | Utilisez le panneau {{ui:Layers}} et {{ui:Properties}}. |
| La Suite de démarrage et les alias conservés sur votre ordinateur ou synchronisés | Ils sont conservés dans ce navigateur ; l'application de bureau et le service cloud les conserveront pour vous. Dans Studio, `acad.lsp` et `acaddoc.lsp` sont lus depuis un dossier de support que vous choisissez (Charger des applications). |

## Aide

L'aide décrit cette version. Lorsqu'une fonction est ajoutée, elle sort de cette page pour passer dans les pas à pas.

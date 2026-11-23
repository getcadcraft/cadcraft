---
title: Nouveautés de la 0.9 (version antérieure)
summary: Hachures qui suivent leur contour, calques groupés, étages superposés, murs intelligents 2D avec portes et fenêtres, styles de texte et éditeur de texte mis en forme, ligne de commande flottante, accrochage à la grille, dix façons de tracer un arc, et le panneau Documents.
keywords: nouveautés 0.9, version antérieure, nouveautés, 0.9, notes de version, journal des modifications, hachure, hachure associative, hachureedit, fichier pat, fichier de motif, groupes de calques, laygroup, étages, étages superposés, floorlayers, murs intelligents, mur, porte, fenêtre, outils de mur, style de texte, éditeur mtext, texte en paragraphe, mise en forme, ligne de commande flottante, ligne de commande, haut de la fenêtre, compact, accrochage à la grille, grid snap, f9, arc, panneau documents, extraction, normes d'acier britanniques, draw.io, texte thaï, dxf r12, quoi de neuf, changements, 0.8, 0.8.1, version, nouvelles fonctions, complétion automatique, fantôme, tab, sketchfix, photosketch, autosheet, détails, gridmove, autodim, étiquettes, redline, fusion, git, fossil, access, dessin sans la vue, lecteur d'écran, limites, relèvements, aunits, shx, diagramme, ole, historique, comparer, en mots, propriétés, pieds et pouces, étirer, langues, périphériques de saisie, problèmes, live, assistants
from: 3451e64c
---

Voici ce qui a changé dans CadCraft 0.9, par rapport à la 0.8.1. CadCraft est l'application de dessin 2D et 3D de CadCraft Studio 0.9 et de ses huit applications. La 0.9 achève le dessin en plan, ajoute les styles de texte et un véritable éditeur de texte, et donne plus de place à l'écran.

## Nouveautés

### Dessin en plan

- **Des hachures qui suivent leur contour.** {{cmd:HATCH}} se lie à ce qui la délimite. Déplacez, tournez ou mettez à l'échelle le contour, et la hachure et son motif suivent ; remodelez-le, et la hachure est recalculée. {{cmd:HATCHEDIT}} (`HE`) modifie une hachure après coup et crée ou met fin au lien. Voir [Hachures et zones de remplissage](topic:hatch).
- **Fichiers de motifs de hachure.** À la question `Spécifiez un point interne` de {{cmd:HATCH}}, tapez `F` (Fichier de motif) et choisissez un fichier `.pat`. Seuls les fichiers écrits au format habituel ont été essayés.
- **Groupes de calques.** Dans {{ui:Outils}} du panneau {{ui:Calques}} : {{ui:Nouveau groupe}}, {{ui:Ajouter des groupes prêts à l'emploi}}, {{ui:Grouper par nom}} et {{ui:Rechercher un calque}} ; ou tapez {{cmd:LAYGROUP}} (`LG`). Voir [Organiser un dessin avec des calques](topic:layers#group-layers).
- **Étages superposés.** {{cmd:FLOORS}} (`FLR`), ou {{ui:Étages…}} dans le menu {{ui:Plus}} du groupe {{ui:Vue}}. Une fenêtre de présentation sur une feuille peut afficher un étage sous {{ui:Étage affiché}} dans Propriétés. {{cmd:FLOORLAYERS}} transforme les étages en calques pour un fichier destiné à quelqu'un d'autre. Voir [Superposer les étages dans un même dessin](topic:floors).
- **Murs, portes et fenêtres intelligents en 2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) et {{cmd:DELOPENING}}. Les angles, les jonctions en T et les croisements sont calculés pour vous. Les murs gardent la trace de la façon dont ils se joignent, et Propriétés propose Interdire la jonction au début / à la fin, une Ligne d'implantation et une Longueur modifiable. Voir [Dessiner des murs, portes et fenêtres en 2D](topic:walls-2d).
- **L'outil de mur pour les murs de plan.** Tapez {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} et les autres. Ils n'ont pas encore de boutons dans la barre d'outils. Voir [Formes de murs, coupes, décalages et verrouillages pour murs 2D](topic:wall-tools-2d).

### Texte

- **Styles de texte.** {{cmd:STYLE}} (`ST`), ou {{ui:Style de texte}} dans la barre d'outils {{ui:Dessiner}} : des styles nommés avec une police, une hauteur, un facteur de largeur et une inclinaison. Voir [Régler la police et la taille du texte avec des styles de texte](topic:text-styles).
- **Un éditeur de texte en paragraphe mis en forme.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ou un double-clic sur un texte ouvre une case avec police, taille, gras, italique, souligné, barré, couleur, alignement, et les signes degré, plus-moins et diamètre, ainsi que {{ui:OK}} et {{ui:Annuler}}. Voir [Mettre en forme un texte en paragraphe](topic:format-paragraph-text).
- **Un diagramme à partir de XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) lit aussi le XML draw.io collé. Voir [Dessiner un diagramme à partir de texte](topic:text-to-diagram).
- **Texte thaï dans un tracé PDF.** Il s'imprimait auparavant sous forme de points d'interrogation.

### Plus de place et aides au dessin

- **Une ligne de commande flottante et plus fine, et une zone supérieure compacte.** Faites glisser la poignée de la ligne de commande pour la faire flotter, faites glisser son bord supérieur pour réduire le nombre de lignes, et {{key:F2}} ouvre l'historique. {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Ligne de commande}} et les choix de la zone supérieure ont les mêmes réglages. Voir [Paramètres](topic:settings#command-line).
- **Menu d'accrochage aux objets.** Cliquez droit sur {{ui:Accrochage}} dans la barre d'état, ou tapez {{cmd:OSNAP}}.
- **Accrochage à la grille.** Le bouton {{ui:Résolution sur la grille}} de la barre d'état, ou {{key:F9}} : les points désignés vont au point de grille le plus proche lorsqu'aucun accrochage aux objets n'a pris le point.
- **Arc de dix façons, et Continuer.** {{ui:Arc}} dans la barre d'outils {{ui:Dessiner}} ou {{cmd:ARC}} : trois points, la famille Début/Centre/Fin et la famille Centre/Début/Fin, et Continuer (appuyez sur {{key:Enter}} au point de départ) à partir de la dernière ligne, du dernier arc ou de la dernière polyligne.
- **Le panneau Documents.** {{cmd:DOCUMENTS}} (`DOCS`) ou {{ui:Documents…}} dans le menu {{ui:Plus}} du groupe {{ui:Vue}} : révision, état et réservation pour chaque dessin d'un dossier de projet. Il s'ouvre comme une boîte de dialogue centrée. Voir [Documents](topic:documents).

### Fichiers

- **Profilés d'acier britanniques.** 976 sections dans le panneau Standard, saisies comme sur les plans (par exemple `305x165x40 UB`).
- **Jeux sud-africains** (pratique de dessin et règlements de construction) sous forme de jeux du module Règlements de construction. Les chiffres ne sont pas vérifiés.
- **Modules complémentaires pour CadCraft**, ajoutés à la demande et désactivés par défaut : conception d'éclairage intérieur, conception de puces (du HDL au tracé), découpe de routeur, simulation de circuits, pignons de chaîne à rouleaux et jeux de règlements de construction par pays.

## Corrigé

- Déplacer, tourner ou mettre à l'échelle une hachure laissait son motif derrière.
- {{cmd:GRIDMOVE}} entraînait un mur de plan entier qui ne commence que sur la ligne de grille. Un mur est désormais jugé par ses extrémités.
- La grille n'apparaissait qu'à l'intérieur des limites du dessin, même lorsque les limites étaient désactivées.
- La liste des blocs du panneau latéral défile, et un nom qui n'est celui d'aucun bloc liste les blocs qui commencent par lui (« Vouliez-vous dire ? »).
- Les fichiers DXF R12 que AutoCAD refusait (« Unknown group 1001 for table ») s'ouvrent maintenant ici.
- Les très gros fichiers (environ 70 000 entités et plus) ne s'ouvraient pas avec « Maximum call stack size exceeded ».
- Les fichiers DWG issus d'AutoCAD 2018 et ultérieurs, à version de maintenance élevée, ne s'ouvraient pas avec « bad BITLONG code 11 ».
- Dans la case de texte en paragraphe, une nouvelle taille saisie pour une partie sélectionnée conserve la sélection.

## Dans toutes les applications

Infobulles Bootstrap sur chaque commande qui porte une indication, une astuce de démarrage que vous pouvez fermer, des bandes d'onglets qui défilent lorsqu'elles ne tiennent pas, et un titre d'onglet du navigateur qui suit le dessin ouvert (`<dessin> - CadCraft | CadCraft`). {{ui:Paramètres}} › {{ui:Disposition}} est désormais une liste déroulante de choix sur deux lignes. La liste des langues dans {{ui:Paramètres}} est plus longue qu'en 0.8. La co-édition en direct, les collections de la Bibliothèque et les unités de poids et de température sont décrites dans les notes de CadCraft Studio.

## Limites réelles

- Le texte en paragraphe n'a ni listes à puces ou numérotées, ni règle de tabulation, ni justification. Les tracés PDF composent le texte en Helvetica.
- Les murs de plan sont droits, si bien qu'un arc est dessiné comme de courts murs. La vérification collective de l'outil de mur par la communauté est en attente.
- Les groupes de calques ne sont pas écrits dans le format propre à AutoCAD, si bien qu'AutoCAD les affiche comme une liste plate. Les autres programmes affichent tous les étages ensemble, sauf si vous lancez {{cmd:FLOORLAYERS}}.
- Le panneau Documents n'a pas été essayé par deux personnes sur un vrai partage réseau. La découpe de routeur n'a tourné sur aucune machine réelle. L'estimation d'éclairage a été vérifiée par un tracé de photons, et non dans un autre logiciel. Les modules d'ingénierie sont des aides à la vérification, et non un remplacement de la revue d'un ingénieur.
- Les langues autres que l'anglais sont des brouillons automatiques, et certains des nouveaux mots n'existent qu'en anglais.

## Antérieure : 0.8 et 0.8.1

Voici ce qui a changé dans CadCraft 0.8 et 0.8.1, par rapport à la 0.7. La 0.8 (1er novembre 2026) ajoute des aides au dessin qui travaillent à partir de votre propre dessin, par règles sur votre ordinateur et sans modèle ; la 0.8.1 (2 novembre 2026) corrige les bogues signalés après elle.

### Nouveautés

**Un dessin qui achève votre idée**

- **Un fantôme montre ce qui vient ensuite.** Lorsqu'aucune commande n'est en cours, un fantôme gris en pointillés montre ce que les motifs de votre dessin indiquent comme suite : le montant suivant à même écartement, la marche suivante d'un escalier, le mur manquant d'une pièce. Appuyez sur {{key:Tab}} pour le dessiner en une seule étape d'annulation, ou sur {{key:Esc}} pour le rejeter. Il n'examine que les objets les plus récents, si bien qu'il reste fluide sur un gros dessin. Désactivez-le dans {{ui:Paramètres}} › {{ui:CadCraft}} ou avec {{cmd:AUTOCOMPLETE}} `Off`.
- **Le point suivant pendant le tracé d'une ligne.** Au milieu de {{cmd:LINE}} ou {{cmd:PLINE}}, le fantôme est le point suivant : la marche suivante d'un escalier, le quatrième coin d'un rectangle, ou le point qui le ferme. Approchez le curseur et appuyez sur {{key:Tab}}, comme si vous aviez cliqué là.
- **Les croquis au stylet deviennent une géométrie précise.** {{cmd:SKETCHFIX}} : dessinez des traits approximatifs au stylet, à la souris ou au doigt, et chacun devient une ligne, un cercle, un arc, un rectangle ou une polyligne nets, accrochés à ce qui est déjà dessiné. Voir [Dessiner au stylet et obtenir une géométrie précise](topic:sketch-with-a-pen).
- **Une photo d'un croquis devient un dessin.** {{cmd:PHOTOSKETCH}} (`PSK`) repère la feuille sur une photo, redresse la perspective, applique le format de papier et l'échelle que vous donnez, et trace les traits du stylo sur un calque par couleur de stylo. Les lettrages ne sont pas tracés.
- **Le coter par règles.** {{cmd:AUTODIM}} (`ADIM`) crée des chaînes de cotes le long des côtés que vous choisissez, une cote d'ensemble, les largeurs d'ouvertures, les diamètres de trous et, avec `Grid`, l'entraxe des lignes de grille. Il ne répète jamais une cote déjà présente.
- **Déplacer une ligne de grille, et l'ensemble suit.** {{cmd:GRIDMOVE}} (`GM`) : les murs qui se terminent sur la ligne de grille s'étirent avec elle, les murs qui lui sont alignés, les colonnes, sa bulle et son repère se déplacent, et les cotes sur elle mesurent le nouvel entraxe. Une seule étape d'annulation.

**Feuilles, détails et repères**

- **Des feuilles qui se mettent en page toutes seules.** {{cmd:AUTOSHEET}} prend vos vues nommées (ou les parties séparées du modèle), choisit un format de papier et une échelle standard, et place les vues sur de nouvelles feuilles avec un cartouche et une légende (nom et échelle) sous chacune. Tout reste modifiable. Voir [Mettre en page les feuilles à ma place](topic:lay-out-sheets-for-me).
- **Les détails de votre bureau, proposés pendant le dessin.** {{cmd:DETAILS}} (`DET`) conserve vos propres blocs de détail. Lorsque ce que vous sélectionnez correspond à l'un d'eux par les mots de ses calques, de ses noms de blocs et de ses notes, la barre d'état le signale ; désignez-le et placez-le. {{cmd:DETAILS}} › Partager dépose votre liste dans votre dossier Documents et intègre ce que votre équipe y a ajouté. Les Paramètres désactivent ces propositions.
- **Des repères sur les blocs.** {{cmd:TAGS}} définit un repère (sa nature, les valeurs qu'il peut prendre, les blocs auxquels il s'applique), le pose sur les références de blocs que vous sélectionnez, et les liste sous forme de nomenclature que vous pouvez enregistrer en CSV. Les définitions sont conservées dans le DWG. Voir [Repères](topic:tags).
- **Limites du dessin.** {{cmd:LIMITS}} fixe un rectangle pour le dessin : la grille le remplit et {{cmd:ZOOM}} Tout l'affiche. Les limites apparaissent sous forme de contour et sont enregistrées dans DWG et DXF, avec les limites du papier. Voir [Régler les limites du dessin](topic:drawing-limits).

**Travailler avec d'autres personnes et d'autres programmes**

- **Transformer une annotation en révision.** {{cmd:REDLINE}} lit le paquet écrit par MarkupCraft et liste chaque modification. Acceptez ou refusez chacune avec une note ; les modifications acceptées reçoivent un nuage de révision et un journal de révision en une seule étape d'annulation, et vous enregistrez le fichier de réponses qui clôt les annotations dans MarkupCraft. Voir [Transformer une annotation en révision](topic:redline-to-revision).
- **Des dessins que git et Fossil peuvent fusionner.** Avec {{ui:Fichiers compatibles avec la fusion}} activé dans {{ui:Paramètres}} › {{ui:CadCraft}}, chaque objet reçoit une clé qui ne change jamais (les fichiers sont environ 10 pour cent plus gros). `cadcraft merge base ours theirs` fusionne alors les modifications de deux personnes sur un même DWG ou DXF, objet par objet, et ne signale que les endroits où deux personnes ont changé la même chose. Voir [Fusionner les modifications de deux personnes sur un même dessin](topic:merge-drawings).
- **Ce qui a changé, en mots.** Dans Historique, Comparer donne une liste claire : où les choses ont changé, la taille des zones, ce qui a été ajouté, retiré ou modifié, et le texte qui a été édité. Voir [Dire en mots ce qui a changé](topic:changes-in-words).
- **Relèvements et angles.** Saisissez une direction sous forme de relèvement de géomètre, comme N45°23'30"E, ou en degrés, minutes et secondes, partout où un angle est demandé ; AUNITS règle l'affichage des angles. Voir [Saisir et afficher des relèvements et des angles](topic:bearings-and-angles).
- **Vos propres polices SHX.** Donnez à CadCraft un dossier de polices SHX : les styles de texte qui les nomment sont dessinés avec elles, à l'écran comme dans les tracés. Voir [Dessiner du texte avec vos propres polices SHX](topic:shx-fonts).
- **Un diagramme à partir de texte.** {{cmd:DIAGRAM}} lit un organigramme Mermaid, un diagramme de composants PlantUML, D2 ou une liste de/vers, et dessine des blocs et des connecteurs modifiables. Voir [Dessiner un diagramme à partir de texte](topic:text-to-diagram).
- **Objets OLE dans un DWG.** {{cmd:OLELIST}} liste les objets OLE qu'un DWG contient et que CadCraft ne peut pas placer seul, et place une copie d'une image à l'endroit que vous indiquez. Voir [Images](topic:pictures#objects-from-other-programs-ole).
- **Vos calculs restent avec le dessin.** Les feuilles de calcul et les raisons de conception sont conservées dans le DWG avec la table des classes.

**Dessin sans la vue**

- Activez {{ui:Dessin sans la vue}} dans {{ui:Paramètres}} (ou tapez {{cmd:ACCESS}} et répondez `On`). CadCraft annonce chaque commande et chaque résultat par votre lecteur d'écran, décrit le dessin et ce qui se trouve près du curseur, vous laisse déplacer le curseur et désigner des points au clavier, et joue un son pour chaque accrochage et chaque poignée. Lorsque votre navigateur sait reconnaître la parole sur votre ordinateur, les commandes peuvent être dictées. Voir [Dessiner sans la vue](topic:draft-without-sight).

**Dans toutes les applications**

- **Langues.** 54 langues ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili, ouzbek). Les langues autres que l'anglais sont des brouillons automatiques, jusqu'à ce qu'un locuteur natif les relise.
- **Périphériques de saisie.** Pavé tactile, stylet, souris 3D, manette de jeu et commandes MIDI.
- **Barres d'outils et grille des propriétés.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose Retour à la ligne, 2 lignes ou 1 ligne dans les autres applications. CadCraft garde son propre réglage dans {{ui:Paramètres}} › {{ui:CadCraft}} (voir [Lignes de la barre d'outils](topic:settings#toolbar-rows)). La grille des propriétés commune se trouve dans trois autres applications, et non dans CadCraft.
- **Problèmes, Live et modules.** Un panneau Problèmes commun qui avertit dans chaque application, une vue Live de la position de chacun dans CadCraft Studio (voir [Travailler sur un dessin à plusieurs](topic:work-live)), et une liste des modules.
- **Connectez votre IA.** Une seule connexion depuis CadCraft Studio vers les huit applications, avec un niveau lecture seule, suggestion ou modification par application, et un journal en langage clair de ce que l'assistant a fait. CadCraft n'a pas d'IA propre, et Demander dans chaque application utilise l'IA que vous connectez.

### Corrigé dans la 0.8.1

- **Les Propriétés affichaient 150 au lieu de 12'-6"** dans les dessins en pieds et pouces. Les champs que l'application lit elle-même retrouvent leur texte.
- **Des fichiers DWG dont la section des classes était lue comme le mauvais type** (GitHub cadcraft#5) s'ouvrent maintenant correctement.
- **Le réticule n'apparaît plus derrière les fenêtres surgissantes.**
- **Studio et les éditions empaquetées peuvent changer de langue à l'exécution.** Auparavant, elles n'étaient qu'en anglais. Pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.
- **Les tablettes en portrait** donnent la hauteur libre de la grille à la zone de dessin, et le mode feuilles démarre à 760 px ou moins.
- **STRETCH avec une fenêtre de capture, et LIMITS,** ont été signalés sur Studio 0.8.0 et étaient déjà corrects dans la version web 0.8 ; l'installeur de la personne qui a signalé le bogue était plus ancien. Studio 0.8.1 les contient.

### Pas encore dans cette version

- **La 0.8 et la 0.8.1 ne sont pas signées par un certificat de code.** Windows peut avertir (choisissez {{ui:Informations complémentaires}}, puis {{ui:Exécuter quand même}}) ; sur un Mac, faites un clic droit sur CadCraft Studio et choisissez {{ui:Ouvrir}}. Les versions pour les boutiques sont suspendues, et la version iPad et iPhone n'a pas été reconstruite pour la 0.8.1.
- **Les croquis au stylet et les photos de croquis** n'ont été essayés que sur de fausses photos et avec une souris, pas encore avec un vrai stylet, un écran tactile ou un croquis à la main sur papier.
- **Le dessin sans la vue** a été testé avec des contrôles automatiques, pas encore avec un lecteur d'écran ni avec un testeur aveugle.
- **Le partage des détails** n'a pas eu de vérification à deux personnes, et un dossier Team Cloud Plan comme dossier Documents n'est pas encore construit.
- **La fusion** fonctionne pour les fichiers DWG et DXF de CadCraft ; elle n'est pas encore construite pour les fichiers des autres applications.
- **Annuler entre fenêtres :** CadCraft signale chaque étape terminée, mais Studio n'a pas encore d'Annuler unique pour toutes les applications ; chaque application annule ses propres étapes.
- **Les objets OLE d'un DWG** sont conservés mais ne sont pas dessinés à leur place.
- **La lecture des tables de styles de tracé (fichiers CTB)** des autres programmes est construite, mais n'a pas été vérifiée sur un fichier venant d'un autre programme.
- **Connectez votre IA :** la connexion en un clic dans Studio, le connecteur hébergé pour l'IA du navigateur, votre propre clé d'API dans Studio et le paquet MCP publié ne sont pas promis dans cette version.

Pour la version précédente, voir [Nouveautés de la 0.7](topic:whats-new-0-7).

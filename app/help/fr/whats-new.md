---
title: Nouveautés de la version 0.9
summary: Hachures qui suivent leur contour, groupes de calques, étages superposés, murs intelligents en 2D avec portes et fenêtres, styles de texte et éditeur de texte mis en forme, ligne de commande flottante, accrochage à la grille, dix façons de dessiner un arc, et le panneau Documents.
keywords: nouveautés, 0.9, notes de version, journal des modifications, hachure, hachure associative, hatchedit, fichier pat, fichier de motif, groupes de calques, laygroup, étages, étages superposés, floorlayers, murs intelligents, mur, porte, fenêtre, outils de mur, style de texte, style, éditeur mtext, texte en paragraphe, mise en forme, ligne de commande flottante, ligne de commande, zone supérieure, compact, accrochage à la grille, grid snap, f9, arc, panneau documents, extraction, profilés acier UK, draw.io, texte thaï, dxf r12, 0.8, 0.8.1, version, nouvelles fonctionnalités, autocomplétion, fantôme, tab, sketchfix, photosketch, autosheet, détails, gridmove, autodim, étiquettes, redline, fusion, git, fossil, access, dessiner sans la vue, lecteur d'écran, limites, relèvements, aunits, shx, diagramme, ole, historique, comparer, en mots, propriétés, pieds et pouces, étirer, langues, périphériques de saisie, problèmes, live, assistants
from: 8b6dea0b
---

Voici ce qui a changé dans CadCraft 0.9 par rapport à la 0.8.1. CadCraft est l'application de dessin 2D et 3D de CadCraft Studio 0.9 et de ses huit applications. La 0.9 achève le dessin de plans, ajoute des styles de texte et un véritable éditeur de texte, et vous donne plus de place à l'écran.

## Nouveautés

### Dessin de plans

- **Des hachures qui suivent leur contour.** {{cmd:HATCH}} se lie à ce qui la délimite. Déplacez, faites pivoter ou mettez à l'échelle le contour, et la hachure et son motif suivent ; remodelez-le, et la hachure est recalculée. {{cmd:HATCHEDIT}} (`HE`) modifie une hachure après coup, et crée ou supprime le lien. Voir [Hachures et zones de remplissage](topic:hatch).
- **Fichiers de motifs de hachures.** À la question `Spécifiez le point intérieur` de {{cmd:HATCH}}, tapez `F` (Fichier de motif) et choisissez un fichier `.pat`. Seuls les fichiers écrits au format habituel ont été essayés.
- **Groupes de calques.** Dans {{ui:Outils}} du panneau {{ui:Calques}} : {{ui:Nouveau groupe}}, {{ui:Ajouter des groupes prêts à l'emploi}}, {{ui:Grouper par nom}} et {{ui:Rechercher un calque}} ; ou tapez {{cmd:LAYGROUP}} (`LG`). Voir [Organiser un dessin avec les calques](topic:layers#group-layers).
- **Étages superposés.** {{cmd:FLOORS}} (`FLR`), ou {{ui:Étages…}} dans le menu {{ui:Plus}} du groupe {{ui:Vue}}. Une fenêtre de présentation sur une feuille peut afficher un étage sous {{ui:Étage affiché}} dans Propriétés. {{cmd:FLOORLAYERS}} transforme les étages en calques, pour un fichier destiné à quelqu'un d'autre. Voir [Superposer des étages dans un même dessin](topic:floors).
- **Murs, portes et fenêtres intelligents en 2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) et {{cmd:DELOPENING}}. Les angles, les jonctions en T et les croisements sont calculés pour vous. Les murs gardent une trace de la façon dont ils se joignent, et Propriétés reçoit {{ui:Interdire la jonction au début}} / {{ui:Interdire la jonction à la fin}}, une {{ui:Ligne de localisation}} et une {{ui:Longueur}} modifiable. Voir [Dessiner des murs, portes et fenêtres intelligents en 2D](topic:walls-2d).
- **L'outil de mur sur les murs de plan.** Tapez {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} et le reste. Ils n'ont pas encore de boutons dans la barre d'outils. Voir [Formes, coupes, décalages et verrouillages des murs 2D](topic:wall-tools-2d).

### Texte

- **Styles de texte.** {{cmd:STYLE}} (`ST`), ou {{ui:Style de texte}} sur la barre d'outils {{ui:Dessiner}} : des styles nommés avec une police, une hauteur, un facteur de largeur et une inclinaison. Voir [Régler la police et la taille du texte avec des styles de texte](topic:text-styles).
- **Un éditeur de texte en paragraphe mis en forme.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}}, ou un double-clic sur un texte ouvre une boîte avec la police, la taille, le gras, l'italique, le soulignement, le barré, la couleur, l'alignement, et les signes degré, plus-moins et diamètre, ainsi que {{ui:OK}} et {{ui:Annuler}}. Voir [Mettre en forme un texte en paragraphe](topic:format-paragraph-text).
- **Un diagramme à partir du XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) lit aussi le XML draw.io collé. Voir [Dessiner un diagramme à partir de texte](topic:text-to-diagram).
- **Texte thaï dans un tracé PDF.** Il s'imprimait auparavant sous forme de points d'interrogation.

### Plus de place et aides au dessin

- **Une ligne de commande flottante et plus fine, et une zone supérieure compacte.** Faites glisser la poignée de la ligne de commande pour la rendre flottante, faites glisser son bord supérieur pour avoir moins de lignes ; {{key:F2}} ouvre l'historique. {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Ligne de commande}} et les choix de la zone supérieure ont les mêmes réglages. Voir [Paramètres](topic:settings#command-line).
- **Menu d'accrochage aux objets.** Clic droit sur {{ui:Accrochage}} dans la barre d'état, ou tapez {{cmd:OSNAP}}.
- **Accrochage à la grille.** Le bouton {{ui:Résolution sur la grille}} dans la barre d'état, ou {{key:F9}} : les points choisis vont au point de grille le plus proche lorsqu'aucun accrochage aux objets n'a saisi le point.
- **Arc de dix façons, et Continuer.** {{ui:Arc}} sur la barre d'outils {{ui:Dessiner}}, ou {{cmd:ARC}} : 3 points, la famille Début/Centre/Fin, et la famille Centre/Début/Fin, et Continuer (appuyez sur {{key:Enter}} au point de début) à partir de la dernière ligne, du dernier arc ou de la dernière polyligne.
- **Le panneau Documents.** {{cmd:DOCUMENTS}} (`DOCS`), ou {{ui:Documents…}} dans le menu {{ui:Plus}} du groupe {{ui:Vue}} : révision, état et extraction pour chaque dessin d'un dossier de projet. Il s'ouvre comme une boîte de dialogue centrée. Voir [Documents](topic:documents).

### Fichiers

- **Profilés acier UK.** 976 profilés dans le panneau Standard, saisis comme sur les plans (par exemple `305x165x40 UB`).
- **Jeux sud-africains** (pratique du dessin et réglementation du bâtiment), sous forme de jeux du module complémentaire Réglementation du bâtiment. Les chiffres ne sont pas vérifiés.
- **Modules complémentaires pour CadCraft,** ajoutés à la demande et désactivés par défaut : conception de l'éclairage intérieur, conception de puces (HDL vers implantation), usinage à la défonceuse, simulation de circuits, pignons pour chaînes à rouleaux, et jeux nationaux de réglementation du bâtiment.

## Corrigé

- Déplacer, faire pivoter ou mettre à l'échelle une hachure laissait son motif en place.
- {{cmd:GRIDMOVE}} entraînait en entier un mur de plan qui ne fait que commencer sur la ligne de trame. Un mur est désormais jugé par ses extrémités.
- La grille ne s'affichait qu'à l'intérieur des limites du dessin, même lorsque les limites étaient désactivées.
- La liste des blocs du panneau latéral défile, et un nom qui n'est pas un bloc liste les blocs qui commencent par lui (« Vouliez-vous dire »).
- Les fichiers DXF R12 qu'AutoCAD refusait (« Unknown group 1001 for table ») s'ouvrent désormais là.
- Les très gros fichiers (environ 70 000 entités et plus) ne s'ouvraient pas et affichaient « Maximum call stack size exceeded ».
- Les fichiers DWG d'AutoCAD 2018 et plus, avec une version de maintenance élevée, ne s'ouvraient pas et affichaient « bad BITLONG code 11 ».
- Dans la boîte de texte en paragraphe, une nouvelle taille saisie pour une partie sélectionnée conserve la sélection.

## Dans toutes les applications

Des info-bulles Bootstrap sur chaque commande qui a une aide, une astuce de démarrage que vous pouvez fermer, des bandes d'onglets qui défilent lorsqu'elles ne tiennent pas, et un titre d'onglet du navigateur qui suit le dessin ouvert (`<drawing> - CadCraft | CadCraft`). {{ui:Paramètres}} › {{ui:Disposition}} est désormais une liste déroulante de choix sur deux lignes. La liste des langues dans {{ui:Paramètres}} est plus longue qu'en 0.8. La coédition Live, les collections de la bibliothèque et les unités de poids et de température sont décrites dans les notes de Studio.

## Limites réelles

- Le texte en paragraphe n'a ni listes à puces ou numérotées, ni règle de tabulation, ni justification. Les PDF tracés composent le texte en Helvetica.
- Les murs de plan sont droits, donc un arc est dessiné sous forme de courts murs. La vérification à la main de l'outil de mur par la communauté est en attente.
- Les groupes de calques ne sont pas écrits dans le format propre à AutoCAD, si bien qu'AutoCAD affiche une liste plate. Les autres logiciels affichent tous les étages ensemble, sauf si vous lancez {{cmd:FLOORLAYERS}}.
- Le panneau Documents n'a pas été essayé par deux personnes sur un vrai partage. L'usinage à la défonceuse n'a tourné sur aucune machine réelle. L'estimation d'éclairage a été vérifiée avec un tracé de photons, et non avec un autre logiciel. Les modules complémentaires d'ingénierie sont des aides de vérification, non un remplacement de la revue d'un ingénieur.
- Les langues autres que l'anglais sont des brouillons automatiques, et certains des nouveaux mots ne sont qu'en anglais.

## Précédentes : 0.8 et 0.8.1

Voici ce qui a changé dans CadCraft 0.8 et 0.8.1 par rapport à la 0.7. La 0.8 (1er novembre 2026) ajoute des aides au dessin qui travaillent à partir de votre propre dessin, selon des règles sur votre ordinateur et sans modèle, et la 0.8.1 (2 novembre 2026) corrige les bogues signalés après sa sortie.

### Nouveautés

**Un dessin qui achève votre pensée**

- **Un fantôme montre la suite.** Lorsqu'aucune commande n'est en cours, un fantôme gris en tirets montre ce que les motifs propres à votre dessin indiquent comme suite : le montant suivant à même écartement, la marche suivante d'un escalier, le mur manquant d'une pièce. Appuyez sur {{key:Tab}} pour le dessiner en une seule étape d'annulation, ou sur {{key:Esc}} pour le fermer. Il ne regarde que les objets les plus récents, si bien qu'il reste fluide sur un grand dessin. Désactivez-le dans {{ui:Paramètres}} › {{ui:CadCraft}}, ou avec {{cmd:AUTOCOMPLETE}} `Off`.
- **Le point suivant pendant le tracé d'une ligne.** Au milieu de {{cmd:LINE}} ou {{cmd:PLINE}}, le fantôme est le point suivant : la marche suivante d'un escalier, le quatrième angle d'un rectangle, ou le point qui le ferme. Approchez le curseur et appuyez sur {{key:Tab}}, comme si vous aviez cliqué à cet endroit.
- **Les croquis au stylet deviennent une géométrie précise.** {{cmd:SKETCHFIX}} : tracez des traits approximatifs au stylet, à la souris ou au doigt, et chacun devient une ligne, un cercle, un arc, un rectangle ou une polyligne nets, calés sur ce qui est déjà dessiné. Voir [Croquer au stylet et obtenir une géométrie précise](topic:sketch-with-a-pen).
- **Une photo d'un croquis devient un dessin.** {{cmd:PHOTOSKETCH}} (`PSK`) repère la feuille sur une photo, redresse la perspective, applique le format de feuille et l'échelle que vous donnez, et trace les traits au stylet sur un calque pour chaque couleur de stylo. Les lettrages ne sont pas tracés.
- **Coter selon des règles.** {{cmd:AUTODIM}} (`ADIM`) crée des chaînes de cotes le long des côtés que vous choisissez, une dimension hors tout, des largeurs d'ouverture, des diamètres de trou et, avec `Grid`, l'entraxe de la grille. Il ne répète jamais une cote déjà présente.
- **Déplacez une ligne de trame et l'ensemble suit.** {{cmd:GRIDMOVE}} (`GM`) : les murs qui se terminent sur la ligne de trame s'étirent avec elle, les murs qui la longent, les poteaux, sa bulle et son étiquette se déplacent, et les cotes qui s'y rapportent mesurent le nouvel entraxe. Une seule étape d'annulation.

**Feuilles, détails et étiquettes**

- **Des feuilles qui se mettent en page toutes seules.** {{cmd:AUTOSHEET}} prend vos vues nommées (ou les parties séparées du modèle), choisit un format de feuille et une échelle normalisée, et place les vues sur de nouvelles feuilles avec un cartouche et une légende nom-échelle. Tout reste modifiable. Voir [Mettre en page les feuilles pour moi](topic:lay-out-sheets-for-me).
- **Les détails de votre agence, proposés au fil du dessin.** {{cmd:DETAILS}} (`DET`) conserve vos propres blocs de détail. Lorsque ce que vous sélectionnez correspond à l'un d'eux par les mots de ses calques, noms de blocs et notes, la barre d'état le signale ; choisissez-le et placez-le. {{cmd:DETAILS}} › Partager dépose votre liste dans votre dossier Documents et récupère ce que votre équipe y a ajouté. {{ui:Paramètres}} désactive ces propositions.
- **Étiquettes sur les blocs.** {{cmd:TAGS}} définit une étiquette (son type, les valeurs qu'elle peut prendre, les blocs auxquels elle s'applique), la pose sur les références de bloc que vous sélectionnez, et les liste dans une nomenclature que vous pouvez enregistrer en CSV. Les définitions sont conservées dans le DWG. Voir [Étiquettes](topic:tags).
- **Limites du dessin.** {{cmd:LIMITS}} règle un rectangle pour le dessin : la grille le remplit et le zoom Étendue l'affiche. Les limites s'affichent comme un contour et sont enregistrées en DWG et DXF, avec les limites de feuille. Voir [Régler les limites du dessin](topic:drawing-limits).

**Travailler avec d'autres personnes et d'autres logiciels**

- **Transformer une annotation en révision.** {{cmd:REDLINE}} lit le paquet écrit par MarkupCraft et liste chaque modification. Acceptez ou refusez chacune avec une note ; les modifications acceptées reçoivent un nuage de révision et un journal de révision en une seule étape d'annulation, et vous enregistrez le fichier de réponses qui clôt les annotations dans MarkupCraft. Voir [Transformer une annotation en révision](topic:redline-to-revision).
- **Des dessins que git et Fossil savent fusionner.** Avec {{ui:Fichiers compatibles avec la fusion}} activé dans {{ui:Paramètres}} › {{ui:CadCraft}}, chaque objet reçoit une clé qui ne change jamais (les fichiers sont environ 10 % plus gros). `cadcraft merge base ours theirs` fusionne alors les modifications de deux personnes sur un même objet DWG ou DXF, objet par objet, et ne signale que les endroits où deux personnes ont modifié la même chose. Voir [Fusionner les modifications de deux personnes sur un même dessin](topic:merge-drawings).
- **Ce qui a changé, en mots.** Dans l'historique, Comparer donne une liste simple : où les choses ont changé, la taille des zones, ce qui a été ajouté, supprimé ou modifié, et le texte qui a été édité. Voir [Dire en mots ce qui a changé](topic:changes-in-words).
- **Relèvements et angles.** Saisissez une direction sous forme de relèvement de géomètre, tel que N45°23'30"E, ou en degrés, minutes et secondes, partout où un angle est demandé ; AUNITS règle la façon dont les angles s'affichent. Voir [Saisir et afficher les relèvements et angles](topic:bearings-and-angles).
- **Vos propres polices SHX.** Donnez à CadCraft un dossier de polices SHX : les styles de texte qui les nomment sont dessinés avec elles, à l'écran et dans les tracés. Voir [Dessiner du texte dans vos propres polices SHX](topic:shx-fonts).
- **Un diagramme à partir de texte.** {{cmd:DIAGRAM}} lit un organigramme Mermaid, un diagramme de composants PlantUML, D2 ou une liste de-à, et dessine des blocs et des connecteurs modifiables. Voir [Dessiner un diagramme à partir de texte](topic:text-to-diagram).
- **Objets OLE dans un DWG.** {{cmd:OLELIST}} liste les objets OLE qu'un DWG porte et que CadCraft ne peut pas placer seul, et place une copie d'une image là où vous l'indiquez. Voir [Images](topic:pictures#objects-from-other-programs-ole).
- **Vos calculs restent avec le dessin.** Les feuilles de calcul et les justifications de conception sont conservées dans le DWG, avec la table des classes.

**Dessiner sans la vue**

- Activez {{ui:Dessiner sans la vue}} dans {{ui:Paramètres}} (ou tapez {{cmd:ACCESS}} et répondez `On`). CadCraft énonce chaque commande et chaque résultat par votre lecteur d'écran, décrit le dessin et ce qui se trouve près du curseur, vous laisse déplacer le curseur et choisir des points au clavier, et joue un son pour chaque accrochage et chaque poignée. Lorsque votre navigateur peut reconnaître la parole sur votre ordinateur, les commandes peuvent être dictées. Voir [Dessiner sans voir](topic:draft-without-sight).

**Dans toutes les applications**

- **Langues.** 54 langues ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili, ouzbek). Les langues autres que l'anglais sont des brouillons automatiques jusqu'à leur relecture par un locuteur natif.
- **Périphériques de saisie.** Pavé tactile, stylet, souris 3D, manette de jeu et commandes MIDI.
- **Lignes de la barre d'outils et grille de propriétés.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose Adapter, 2 lignes ou 1 ligne dans les autres applications. CadCraft conserve son propre réglage dans {{ui:Paramètres}} › {{ui:CadCraft}} (voir [Lignes de la barre d'outils](topic:settings#toolbar-rows)). La grille de propriétés partagée se trouve dans trois autres applications, et non dans CadCraft.
- **Problèmes, Live et modules complémentaires.** Un panneau Problèmes partagé qui avertit dans chaque application, une vue Live de qui se trouve où dans CadCraft Studio (voir [Travailler ensemble sur un même dessin avec Live TeamWork](topic:work-live)), et une liste des modules complémentaires.
- **Connecter votre IA.** Une seule connexion depuis CadCraft Studio vers les huit applications, avec un niveau lecture seule, suggestion ou modification par application, et un journal en langage simple de ce qu'a fait l'assistant. CadCraft n'a pas d'IA propre, et Demander dans chaque application utilise l'IA que vous connectez.

### Corrigé dans la 0.8.1

- **Propriétés affichait 150 au lieu de 12'-6"** dans les dessins en pieds et pouces. Les champs que l'application lit elle-même conservent de nouveau leur texte.
- **Les fichiers DWG dont la section des classes était lue avec le mauvais type** (GitHub cadcraft#5) s'ouvrent désormais correctement.
- **Le réticule n'apparaît plus derrière les fenêtres surgissantes.**
- **Studio et les éditions empaquetées peuvent changer de langue à l'exécution.** Auparavant, elles n'étaient qu'en anglais. Pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.
- **Les tablettes en portrait** laissent la place libre de la grille à la zone de dessin, et le mode feuilles démarre à 760 px ou moins.
- **STRETCH avec une fenêtre de capture, et LIMITS,** avaient été signalés sur Studio 0.8.0 et étaient déjà corrects dans la version web 0.8 ; le programme d'installation de la personne qui avait signalé était plus ancien. Studio 0.8.1 les intègre.

### Pas encore dans cette version

- **Les versions 0.8 et 0.8.1 ne sont pas signées numériquement.** Windows peut afficher un avertissement (choisissez {{ui:Plus d'informations}}, puis {{ui:Exécuter quand même}}) ; sur un Mac, faites un clic droit sur CadCraft Studio et choisissez {{ui:Ouvrir}}. Les versions pour boutiques sont suspendues, et la version iPad et iPhone n'a pas été reconstruite pour la 0.8.1.
- **Les croquis au stylet et les photos de croquis** n'ont été essayés que sur des photos fictives et avec une souris, pas encore avec un vrai stylet, un écran tactile ou un croquis à la main sur papier.
- **Dessiner sans la vue** a été testé avec des contrôles automatisés, pas encore avec un lecteur d'écran ni un testeur aveugle.
- **Le partage des détails** n'a pas fait l'objet d'une vérification à deux personnes, et un dossier Team Cloud Plan comme dossier Documents n'est pas encore réalisé.
- **La fusion** fonctionne pour les fichiers DWG et DXF de CadCraft ; elle n'est pas encore réalisée pour les fichiers des autres applications.
- **Annulation entre fenêtres :** CadCraft signale chaque étape terminée, mais Studio n'a pas encore d'annulation unique pour toutes les applications ; chaque application annule ses propres étapes.
- **Les objets OLE d'un DWG** sont conservés mais non dessinés à leur emplacement.
- **La lecture des tables de styles de tracé (fichiers CTB)** venant d'autres logiciels est réalisée, mais n'a pas été vérifiée avec un fichier d'un autre logiciel.
- **Connecter votre IA :** la connexion en un clic dans Studio, le connecteur hébergé pour l'IA du navigateur, votre propre clé d'API dans Studio et le paquet MCP publié ne sont pas promis dans cette version.

Pour la version précédente, voir [Nouveautés de la version 0.7](topic:whats-new-0-7).

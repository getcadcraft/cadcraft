---
title: Nouveautés de la 0.8 et de la 0.8.1
summary: Un fantôme qui termine votre dessin, croquis au stylet et photos de croquis transformés en géométrie, feuilles qui se mettent en page seules, détails proposés pendant le dessin, GRIDMOVE et AUTODIM, étiquettes, fichiers compatibles avec la fusion, annotations transformées en révisions, dessin sans la vue, limites du dessin, gisements, polices SHX, schémas à partir de texte, et corrections de la 0.8.1.
keywords: quoi de neuf, nouveautés, notes de version, journal des modifications, modifications, 0.8, 0.8.1, version, nouvelles fonctions, saisie automatique, fantôme, tabulation, sketchfix, photosketch, autosheet, détails, gridmove, autodim, étiquettes, redline, fusion, git, fossil, accès, dessiner sans la vue, lecteur d'écran, limites, gisements, aunits, shx, schéma, ole, historique, comparer, en mots, propriétés, pieds et pouces, étirer, langues, périphériques de saisie, problèmes, live, assistants
from: 9dd82db5
---

Voici ce qui a changé dans CadCraft 0.8 et 0.8.1, par rapport à la 0.7. La 0.8 (1er novembre 2026) ajoute des aides au dessin qui travaillent à partir de votre propre dessin, grâce à des règles sur votre ordinateur et sans modèle, et la 0.8.1 (2 novembre 2026) corrige les bogues signalés après sa sortie.

## Nouveautés

### Un dessin qui achève votre idée

- **Un fantôme montre la suite.** Sans commande en cours, un fantôme gris en pointillés montre ce que les motifs de votre dessin laissent prévoir : le prochain montant au même écartement, la prochaine marche d'un escalier, le mur manquant d'une pièce. Appuyez sur {{key:Tab}} pour le dessiner en une seule étape d'annulation, ou sur {{key:Esc}} pour le faire disparaître. Il n'examine que les objets les plus récents, il reste donc fluide sur un grand dessin. Désactivez-le dans {{ui:Paramètres}} › {{ui:CadCraft}} ou avec {{cmd:AUTOCOMPLETE}} `Off`.
- **Le point suivant pendant le tracé d'une ligne.** Au milieu de {{cmd:LINE}} ou {{cmd:PLINE}}, le fantôme indique le point suivant : la prochaine marche d'un escalier, le quatrième coin d'un rectangle, ou le point qui le referme. Approchez le curseur et appuyez sur {{key:Tab}}, comme si vous aviez cliqué à cet endroit.
- **Les croquis au stylet deviennent une géométrie précise.** {{cmd:SKETCHFIX}} : tracez des traits grossiers au stylet, à la souris ou au doigt, et chacun devient une ligne, un cercle, un arc, un rectangle ou une polyligne nette, accrochée à ce qui est déjà dessiné. Voir [Esquisser au stylet et obtenir une géométrie précise](topic:sketch-with-a-pen).
- **Une photo de croquis devient un dessin.** {{cmd:PHOTOSKETCH}} (`PSK`) repère la feuille sur une photo, redresse la perspective, applique le format de feuille et l'échelle que vous indiquez, et trace les traits au stylet sur un calque par couleur de stylo. Les inscriptions ne sont pas tracées.
- **Le cotage par règles.** {{cmd:AUTODIM}} (`ADIM`) crée des chaînes de cotes le long des côtés que vous choisissez, une cote d'encombrement, les largeurs d'ouvertures, les diamètres de trous et, avec `Grid`, l'espacement de la grille. Il ne répète jamais une cote déjà présente.
- **Déplacez une ligne de trame, et l'ensemble suit.** {{cmd:GRIDMOVE}} (`GM`) : les murs qui se terminent sur la ligne de trame s'étirent avec elle, les murs qui la longent, les poteaux, sa bulle et son repère se déplacent, et les cotes portées dessus mesurent le nouvel espacement. Une seule étape d'annulation.

### Feuilles, détails et étiquettes

- **Des feuilles qui se mettent en page seules.** {{cmd:AUTOSHEET}} prend vos vues nommées (ou les pièces séparées du modèle), choisit un format de papier et une échelle standard, et place les vues sur de nouvelles feuilles avec un cartouche et une légende nom et échelle. Tout reste modifiable. Voir [Mettre les feuilles en page pour moi](topic:lay-out-sheets-for-me).
- **Les détails de votre agence, proposés pendant le dessin.** {{cmd:DETAILS}} (`DET`) conserve vos propres blocs de détails. Quand ce que vous sélectionnez correspond à l'un d'eux par les mots de ses calques, de ses noms de blocs et de ses notes, la barre d'état l'indique ; choisissez-le et placez-le. {{cmd:DETAILS}} › Partager dépose votre liste dans votre dossier Documents et importe ce que votre équipe a ajouté. Paramètres désactive les propositions.
- **Étiquettes sur les blocs.** {{cmd:TAGS}} définit une étiquette (son type, les valeurs qu'elle peut prendre, les blocs concernés), l'affecte aux références de blocs que vous sélectionnez, et les liste dans un tableau que vous pouvez enregistrer en CSV. Les définitions sont conservées dans le DWG. Voir [Étiquettes](topic:tags).
- **Limites du dessin.** {{cmd:LIMITS}} définit un rectangle pour le dessin : la grille le remplit et le zoom Tout l'affiche. Les limites apparaissent en contour et sont enregistrées en DWG et en DXF, avec les limites de la feuille. Voir [Définir les limites du dessin](topic:drawing-limits).

### Travail avec d'autres personnes et d'autres programmes

- **Transformer une annotation en révision.** {{cmd:REDLINE}} lit le paquet que MarkupCraft écrit et liste chaque modification. Acceptez ou refusez chacune avec une remarque ; les modifications acceptées reçoivent un nuage de révision et un journal des révisions, en une seule étape d'annulation, et vous enregistrez le fichier de réponses qui ferme les annotations dans MarkupCraft. Voir [Transformer une annotation en révision](topic:redline-to-revision).
- **Dessins que git et Fossil peuvent fusionner.** Avec {{ui:Fichiers compatibles avec la fusion}} activé dans {{ui:Paramètres}} › {{ui:CadCraft}}, chaque objet reçoit une clé qui ne change jamais (les fichiers sont environ 10 % plus gros). `cadcraft merge base ours theirs` fusionne alors les modifications de deux personnes sur un même objet DWG ou DXF, objet par objet, et ne signale que les cas où deux personnes ont modifié la même chose. Voir [Fusionner les modifications de deux personnes sur un dessin](topic:merge-drawings).
- **Ce qui a changé, en mots.** Dans Historique, Comparer donne une liste en clair : où les choses ont changé, la taille des zones, ce qui a été ajouté, supprimé ou modifié, et le texte qui a été corrigé. Voir [Dire en mots ce qui a changé](topic:changes-in-words).
- **Gisements et angles.** Saisissez une direction sous forme de gisement d'arpenteur, comme N45°23'30"E, ou en degrés, minutes et secondes, partout où un angle est demandé ; AUNITS règle l'affichage des angles. Voir [Saisir et afficher les gisements et les angles](topic:bearings-and-angles).
- **Vos propres polices SHX.** Donnez à CadCraft un dossier de polices SHX : les styles de texte qui les nomment s'affichent avec elles, à l'écran comme sur les tracés. Voir [Dessiner du texte dans vos propres polices SHX](topic:shx-fonts).
- **Un schéma à partir de texte.** {{cmd:DIAGRAM}} lit un organigramme Mermaid, un schéma de composants PlantUML, du D2 ou une liste de départ et d'arrivée, et dessine des blocs et des connecteurs que vous pouvez modifier. Voir [Dessiner un schéma à partir de texte](topic:text-to-diagram).
- **Objets OLE dans un DWG.** {{cmd:OLELIST}} liste les objets OLE qu'un DWG contient et que CadCraft ne peut pas placer seul, et place une copie d'une image à l'endroit que vous indiquez. Voir [Images](topic:pictures#objects-from-other-programs-ole).
- **Vos calculs restent avec le dessin.** Les feuilles de calcul et les raisons de conception sont conservées dans le DWG, avec la table des classes.

### Dessiner sans la vue

- Activez {{ui:Dessiner sans la vue}} dans {{ui:Paramètres}} (ou tapez {{cmd:ACCESS}} et répondez `On`). CadCraft annonce chaque commande et chaque résultat par votre lecteur d'écran, décrit le dessin et ce qui se trouve près du curseur, vous laisse déplacer le curseur et choisir des points au clavier, et joue un son pour chaque accrochage et chaque poignée. Lorsque votre navigateur sait reconnaître la parole sur votre ordinateur, les commandes peuvent être dictées. Voir [Dessiner sans la vue](topic:draft-without-sight).

### Dans chaque application

- **Langues.** 54 langues ; dix sont nouvelles (lituanien, letton, bosniaque, marathi, télougou, albanais, afrikaans, filipino, swahili, ouzbek). Les langues autres que l'anglais restent des brouillons automatiques tant qu'un locuteur natif ne les a pas relues.
- **Périphériques de saisie.** Pavé tactile, stylet, souris 3D, manette de jeu et commandes MIDI.
- **Lignes de la barre d'outils et grille des propriétés.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} propose Renvoi à la ligne, 2 lignes ou 1 ligne dans les autres applications. CadCraft conserve son propre réglage dans {{ui:Paramètres}} › {{ui:CadCraft}} (voir [Lignes de la barre d'outils](topic:settings#toolbar-rows)). La grille des propriétés commune se trouve dans trois autres applications, pas dans CadCraft.
- **Problèmes, Live et modules complémentaires.** Un panneau Problèmes commun qui avertit dans chaque application, une vue Live de la présence de chacun dans CadCraft Studio (voir [Travailler à plusieurs sur un même dessin](topic:work-live)), et une liste des modules complémentaires.
- **Connectez votre IA.** Une seule connexion depuis CadCraft Studio vers les huit applications, avec un niveau lecture seule, suggestion ou modification pour chaque application, et un journal en termes simples de ce que l'assistant a fait. CadCraft n'a pas d'IA propre, et Demander dans chaque application utilise l'IA que vous connectez.

## Corrigé dans la 0.8.1

- **Les propriétés affichaient 150 au lieu de 12'-6"** dans les dessins en pieds et pouces. Les champs que l'application lit elle-même retrouvent leur texte.
- **Les fichiers DWG dont la section des classes était lue avec le mauvais type** (GitHub cadcraft#5) s'ouvrent désormais correctement.
- **Le réticule n'apparaît plus derrière les fenêtres contextuelles.**
- **Studio et les éditions empaquetées peuvent changer de langue pendant l'exécution.** Auparavant, elles n'étaient qu'en anglais. Pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.
- **Tablettes en portrait :** la zone de dessin reçoit la hauteur de grille restante, et le mode feuilles démarre à 760 px ou moins.
- **STRETCH avec une fenêtre de capture, et LIMITS,** signalés sur Studio 0.8.0 ; ils étaient déjà corrects dans la version web 0.8, et l'installateur de la personne qui a signalé le problème était plus ancien. Studio 0.8.1 les contient.

## Pas encore dans cette version

- **Les versions 0.8 et 0.8.1 ne sont pas signées numériquement.** Windows peut afficher un avertissement (choisissez {{ui:Informations complémentaires}}, puis {{ui:Exécuter quand même}}) ; sur un Mac, faites un clic droit sur CadCraft Studio et choisissez {{ui:Ouvrir}}. Les versions pour les boutiques d'applications sont suspendues, et la version iPad et iPhone n'a pas été recompilée pour la 0.8.1.
- **Croquis au stylet et photos de croquis** n'ont été essayés que sur des photos fictives et avec une souris, pas encore avec un vrai stylet, un écran tactile ou un croquis à la main sur papier.
- **Dessiner sans la vue** a été testé avec des contrôles automatiques, pas encore avec un lecteur d'écran ni avec un testeur aveugle.
- **Le partage des détails** n'a pas fait l'objet d'un contrôle à deux personnes, et un dossier Team Cloud Plan utilisé comme dossier Documents n'est pas encore disponible.
- **La fusion** fonctionne pour les fichiers DWG et DXF de CadCraft ; elle n'est pas encore disponible pour les fichiers des autres applications.
- **Annulation entre fenêtres :** CadCraft signale chaque étape terminée, mais Studio n'a pas encore d'annulation unique pour toutes les applications ; chaque application annule ses propres étapes.
- **Les objets OLE d'un DWG** sont conservés, mais ne sont pas dessinés à leur place.
- **La lecture des tables de styles de tracé (fichiers CTB)** d'autres programmes est réalisée, mais n'a pas été vérifiée sur un fichier d'un autre programme.
- **Connectez votre IA :** la connexion en un clic dans Studio, le connecteur hébergé pour l'IA du navigateur, votre propre clé API dans Studio et le paquet MCP publié ne sont pas promis dans cette version.

Pour la version précédente, voir [Nouveautés de la 0.7](topic:whats-new-0-7).

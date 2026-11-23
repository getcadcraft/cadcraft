---
title: Nouveautés de la version 0.7 (précédente)
summary: Fonds PDF et importation de PDF, dessins numérisés avec un tracé automatique, vraies splines avec SPLINE, SPLINEDIT et PEDIT, un gestionnaire de styles de cote, un texte qui conserve sa mise en forme, WBLOCK et vos propres échelles, solides 3D venant d'autres logiciels, recalage des numérisations, un panneau Laser, export USD, Historique et impression dans CadCraft Studio, un premier dessin guidé, la barre d'outils sur n'importe quel côté ou en moins de lignes, et plus encore pour les assistants IA.
keywords: nouveautés 0.7, version précédente, notes de version, journal des modifications, modifications, 0.7, version, nouvelles fonctionnalités, pdf, pdfattach, pdfimport, fond, numérisation, scanattach, scantrace, tracé, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, mise en forme, wblock, scalelistedit, liste d'échelles, acis, solides 3D, registerscans, recalage des numérisations, icp, e57, las, laser, grbl, g-code, usd, usdout, historique, versions, comparer, imprimer, imprimante, png, svg, style de tracé, type de ligne, visite, aide-mémoire, carte des commandes, position de la barre d'outils, lignes de la barre d'outils, toolbardock, regen, regenall, pavé tactile, glissement, page de codes, cyrillique, coréen, chinois, japonais, électrique, rcd, p&id, pid, acad.lsp, acaddoc.lsp, dossier de support, assistants, mcp, unités, portugais
from: d9a8ea79
---

Voici ce qui a changé dans CadCraft 0.7 par rapport à la 0.6. Une grande partie a été demandée sur Discord. La liste est regroupée par domaine, les points les plus importants en premier.

## Nouveautés

### PDF et dessins numérisés

- **Placer une page PDF sous le dessin.** {{cmd:PDFATTACH}} (`PDFATT`) place une page à sa taille réelle ou à une échelle que vous tapez. Accrochez-vous à ses lignes, estompez-la, rendez-la monochrome ({{cmd:PDFADJUST}}), découpez-la ({{cmd:PDFCLIP}}) et activez ou désactivez les calques propres au PDF ({{cmd:PDFLAYERS}}). Elle se trace sous forme de lignes, de remplissages et de texte, et un DWG ou DXF 2000 la conserve comme un lien vers le fichier. Ouvrir un PDF avec {{ui:Ouvrir}} demande s'il faut l'attacher ou l'importer. Voir [Fonds PDF et importation de PDF](topic:pdf-underlay).
- **Transformer une page PDF en objets de dessin.** {{cmd:PDFIMPORT}} (`PDFIM`) crée des lignes, des polylignes, des cercles, des arcs, des hachures pleines et du texte, sur des calques nommés d'après le PDF, à la taille réelle, à une échelle tapée, ou mis à l'échelle à partir de deux points et d'une distance réelle, en une seule étape d'annulation. Voir [Importer une page](topic:pdf-underlay#import-a-page).
- **Dessins numérisés.** {{cmd:SCANATTACH}} importe un PNG, JPEG ou TIFF (une page ou toutes) ou une page PDF qui est une image. Ensuite, mettez-la à l'échelle à partir de deux points ({{cmd:SCANSCALE}}), alignez-la ({{cmd:SCANALIGN}}), redressez-la d'après ses propres longues lignes ({{cmd:SCANDESKEW}}), passez-la en noir et blanc et retirez les poussières ({{cmd:SCANCLEAN}}), recadrez-la et effacez-en des parties. Chaque étape est une étape d'annulation, et le fichier d'origine est conservé. Voir [Dessins numérisés et tracé](topic:scanned-drawings).
- **Tracer une numérisation en lignes et arcs.** {{cmd:SCANTRACE}} dessine les lignes de la numérisation sous forme de lignes et d'arcs, sur un nouveau calque, SCAN-TRACE, avec une tolérance que vous réglez, et laisse le texte et les hachures tels quels. Le rapport indique ce qu'il a créé et ce qu'il a laissé ; ce n'est pas une garantie que le résultat est juste : vérifiez-le par rapport à la feuille. {{cmd:RASTERSNAP}} permet aux accrochages aux objets de trouver les extrémités, les angles et les croisements de la numérisation. Rien n'est envoyé nulle part, et aucun modèle entraîné n'est utilisé. Voir [Le tracé](topic:scanned-drawings#the-trace).

### Dessin et modification

- **Vraies splines.** {{cmd:SPLINE}} (`SPL`) dessine une courbe passant par des points, ou à partir de points de contrôle (degré 1 à 5), avec des tangentes aux extrémités ; {{cmd:SPLINEDIT}} (`SPE`) déplace, ajoute et supprime des points d'ajustement ou de contrôle, règle les poids, ouvre, ferme, inverse, ou transforme une spline en polyligne. Les splines issues de fichiers DWG et DXF s'ouvrent comme splines, et les DWG et DXF 2000 les enregistrent comme splines. Voir [Splines et polylignes](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) ferme et ouvre les polylignes, y joint des lignes et des arcs, règle une largeur unique, fait passer une courbe par les sommets ou une spline le long de ceux-ci, revient en arrière avec Decurve, inverse, et modifie plusieurs polylignes à la fois. Voir [Modifier une polyligne](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) écrit un bloc, quelques objets ou tout le dessin dans un nouveau DWG ou DXF ne contenant que les calques, styles et blocs qu'ils utilisent. Voir [Écrire un bloc ou des objets dans un fichier distinct](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN et REGENALL.** {{cmd:REGEN}} (`RE`) redessine l'onglet actif à partir du dessin, {{cmd:REGENALL}} (`REA`) tous les onglets, volets et dessins ouverts. Voir [REGEN et REGENALL](topic:commands#regen-and-regenall).

### Texte et cotes

- **Le texte conserve sa mise en forme.** Le texte en paragraphe venant d'autres logiciels conserve ses couleurs mot par mot, le gras et l'italique, le soulignement, les fractions empilées et les hauteurs : il est dessiné à l'écran et dans les PDF, conservé quand vous modifiez les mots, et réenregistré. Voir [Mise en forme dans un texte en paragraphe venant d'autres logiciels](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un gestionnaire de styles de cote.** {{cmd:DIMSTYLE}} (`D`) crée, modifie, compare et applique des styles de cote nommés ; modifier un style modifie chaque cote qui l'utilise. {{cmd:DIMEDIT}} (`DED`) rétablit le texte par défaut, saisit un nouveau texte, le fait pivoter ou incline les lignes d'attache ; {{cmd:DIMTEDIT}} déplace le texte à gauche, à droite ou au centre. Voir [Styles de cote nommés](topic:dimension-settings#named-dimension-styles).
- **Vos propres échelles.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) ajoute des échelles telles que 1:75 aux listes d'échelles de fenêtre et de tracé ; elles sont enregistrées dans le dessin (DWG et DXF 2000), et un dessin venant d'un autre logiciel apporte sa propre liste. Voir [Échelles](topic:units-papers-scales#scales).
- **Texte dans d'autres alphabets.** Les fichiers DXF enregistrés dans les pages de codes cyrillique, coréenne, chinoise, japonaise ou vietnamienne s'ouvrent maintenant avec leur texte, et le texte chinois, japonais et coréen s'imprime dans les PDF (le tracé télécharge une police plus grande la première fois qu'il en a besoin). Voir [Police](topic:text#font).

### Tracé et impression

- **Plus de possibilités dans les tables de styles de tracé.** Pour chaque couleur, une table peut désormais aussi régler un type de ligne, l'extrémité et la jonction des lignes, et un style de remplissage qui imprime les remplissages pleins en lignes de hachures ; la table a sa propre liste d'épaisseurs de ligne et une échelle de types de ligne. Voir [Tables de styles de tracé](topic:plot-pdf#plot-style-tables).
- **Impression, fichiers PNG et SVG.** La boîte de dialogue Tracer contient {{ui:Imprimer…}}, {{ui:Télécharger le PNG}} (300 dpi) et {{ui:Télécharger le SVG}}. Dans CadCraft Studio, elle liste les imprimantes de l'ordinateur, leur papier et le nombre de copies. Voir [Impression](topic:plot-pdf#print) et [Fichiers image et SVG](topic:plot-pdf#picture-and-svg-files).

### 3D et nuages de points

- **Solides 3D venant d'autres logiciels.** Les solides, régions et corps de l'espace objet d'un dessin s'affichent dans l'onglet 3D, en lecture seule, et l'enregistrement en DWG les réécrit sans modification. Les faces sur des surfaces que CadCraft ne dessine pas encore sont listées, et non devinées. Voir [Solides venant d'autres logiciels](topic:3d-solids#solids-from-other-programs).
- **Recaler plusieurs numérisations.** {{cmd:REGISTERSCANS}} (`REGSCAN`) place des numérisations prises depuis des positions différentes dans un même repère, par paires de points ou par coordonnées cibles saisies, les affine avec ICP, enregistre le recalage dans un petit fichier de projet, et écrit le nuage recalé en un seul fichier LAS ou E57. Voir [Recaler plusieurs numérisations en une seule](topic:register-scans).
- **Export USD.** {{cmd:USDOUT}}, ou {{cmd:EXPORT3D}} › {{ui:USD}}, écrit les solides de l'onglet 3D au format `.usda`, `.usdc` ou `.usdz`. Voir [Exporter le modèle 3D en USD](topic:usd).
- **Calculs dans l'onglet 3D.** Lorsque les outils de l'onglet 3D demandent une distance, vous pouvez saisir un calcul, comme sur la ligne de commande. Voir [Calcul dans une valeur saisie](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabrication

- **Envoyer un dessin à une découpeuse laser.** {{cmd:LASER}}, ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Laser…}}, ouvre un panneau au-dessus du dessin : chaque calque découpe, trace une rainure, grave des lignes, remplit des formes, grave une image ou n'est pas envoyé, avec sa puissance, sa vitesse et ses passes. L'aperçu suit vos modifications, {{ui:Enregistrer le G-code…}} écrit le G-code en mode laser GRBL, et dans Chrome ou Edge le panneau peut encadrer le travail et l'envoyer par USB. Les réglages sont enregistrés dans le dessin (DWG et DXF). Voir [Envoyer un dessin à une découpeuse laser](topic:laser-cutting).
- **Symboles d'installation du bâtiment dans le module complémentaire Électrique.** Prises de données, de téléphone et de TV, interrupteurs à clé et temporisés, un thermostat, une signalisation de sortie, des détecteurs, un point d'appel et un avertisseur sonore, un ventilateur, un chauffe-eau, une cuisinière, un point de recharge de véhicule électrique, un compteur d'énergie et un sous-tableau, ainsi que les symboles RCD et RCBO. Un circuit peut porter un RCD, la nomenclature du tableau électrique a une colonne RCD, et les vérifications signalent les circuits de prises sans RCD de 30 mA ou moins. C'est un rappel de planification, et non un contrôle de conformité.
- **Un module complémentaire P&ID.** P&ID dessine des schémas de procédés : symboles avec points de connexion, lignes de procédé et de signal, repères, numéros de ligne, listes de lignes, d'équipements, d'instruments et de vannes (CSV ou classeur), et contrôles. Il est fourni avec CadCraft et désactivé jusqu'à ce que vous l'activiez dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Modules complémentaires}}. C'est une aide au dessin, non une validation d'ingénierie, et ses termes ne sont pour l'instant qu'en anglais.

### Premiers pas et l'écran

- **Un premier dessin guidé.** {{cmd:TOUR}} (ou {{ui:Faire la visite}} sur la carte de démarrage) vous guide en six étapes dans le vrai dessin : une ligne, un cercle, un déplacement, un ajustement, un effacement et une cote. Il démarre tout seul la première fois que CadCraft s'ouvre vide. Voir [Vous préférez être guidé ?](topic:getting-started#prefer-to-be-guided)
- **Un aide-mémoire et une carte des commandes.** L'[aide-mémoire](topic:cheat-sheet) donne les 40 commandes courantes sur une page, aussi en PDF à imprimer, et la [carte des commandes](topic:command-map) liste les commandes avec leurs noms courts, de A à Z.
- **La barre d'outils sur n'importe quel côté.** {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Position de la barre d'outils}} : en haut (comme avant), en bas, à gauche ou à droite, ou tapez {{cmd:TOOLBARDOCK}}. Voir [Position de la barre d'outils](topic:settings#toolbar-position).
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Lignes de la barre d'outils}} : s'adapter à la largeur, 2 lignes ou 1 ligne, pour la barre d'outils de CadCraft et les styles Dessin classique et Ruban. {{key:Shift+Ctrl+F1}} les parcourt, {{key:Ctrl+F1}} parcourt ce qu'affichent les boutons, et {{cmd:TOOLBARROWS}} et {{cmd:TOOLBAR}} les règlent. L'astuce de démarrage a un bouton de fermeture. Merci à GJoe2, qui l'a proposé sous forme de demande de fusion (pull request). Voir [Lignes de la barre d'outils](topic:settings#toolbar-rows).

### Dans CadCraft Studio

- **Historique.** {{cmd:HISTORY}} (`HIST`), ou {{ui:Vue}} › {{ui:Plus}} › {{ui:Historique…}} : les copies que Studio conserve quand vous ouvrez et enregistrez un dessin, et les versions du dessin dans le cloud lorsque vous l'avez ouvert depuis le cloud. Ouvrez-en une ou restaurez-la, ou comparez-en deux, avec ce qui a été ajouté, supprimé et modifié affiché en couleur. Voir [Historique](topic:history).
- **acad.lsp et acaddoc.lsp.** Choisissez un dossier de support dans {{cmd:APPLOAD}} : ces deux fichiers se chargent au démarrage de CadCraft (acaddoc.lsp à nouveau pour chaque nouvel onglet de dessin), et `S::STARTUP` s'exécute après eux. Voir [Charger des applications](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **La boîte de dialogue Tracer dans sa propre fenêtre.** Un bouton dans sa barre de titre la place dans une fenêtre que vous pouvez mettre sur un autre écran. Voir [Déplacer une boîte de dialogue](common:arrange-panels#move-a-dialog).

### Pour les assistants IA

- **Fichiers par nom, dans les dossiers de votre choix.** Dans CadCraft Studio, un assistant peut ouvrir, enregistrer et tracer des fichiers par leur nom, et donner à une commande le fichier qu'elle demande (INSERT depuis un fichier, l'export de COUNT, SAVEAS, PLOT), mais seulement à l'intérieur des dossiers que vous ajoutez sous {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Dossiers que les assistants peuvent utiliser}}. Voir [Lui laisser utiliser des fichiers dans les dossiers de votre choix](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Moins d'appels.** Un assistant peut saisir une ligne de commande entière d'un coup, garder une commande ouverte entre ses appels, compter les objets par type et calque sans les lister, et placer un bloc avec ses valeurs d'attributs en une seule étape.
- **Sans fenêtre.** La ligne de commande `cadcraft` écrit des tracés SVG, et convertit, trace, vérifie ou décrit plusieurs fichiers à la fois. Le paquet MCP n'est pas encore publié. Voir [Travailler sur des fichiers sans ouvrir CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Modifications

- **Un pavé tactile fait le panoramique.** Déplacez deux doigts sur le pavé tactile et la vue 2D les suit ; pincer et la molette de la souris font le zoom. Voir [Souris, pavé tactile et écran tactile](topic:mouse-trackpad-touch).
- **Les objets OLE sont conservés.** Les objets incorporés d'un DXF s'affichent comme leur image ou comme un cadre étiqueté, et sont réenregistrés par DXF 2000. Ceux d'un DWG sont conservés et réécrits quand vous enregistrez en DWG, mais ne sont pas encore affichés. Auparavant, ils étaient perdus à l'enregistrement. Voir [Objets venant d'autres logiciels (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Les unités d'un nouveau dessin** suivent l'unité que vous marquez d'une étoile dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}}.

## Corrigé

- Les présentations qui s'ouvraient vides, ou perdaient une fenêtre et affichaient tout le modèle à sa place, s'ouvrent désormais avec leurs vraies fenêtres. Une présentation sans lien vers son contenu est conservée, et le rapport d'ouverture le signale.
- Les fichiers DXF dans les anciennes pages de codes affichaient du cyrillique et du coréen illisibles. Ils se lisent correctement maintenant.
- Le texte en paragraphe venant d'autres logiciels perdait sa mise en forme à l'ouverture et était réenregistré en texte brut.

## Dans toutes les applications

- **Unités.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Unités}} propose une liste pour chacun des éléments suivants : longueur, aire, volume, angle et pente, avec les tailles exactes données par les définitions des unités (le pied de l'arpentage américain est une unité à part). Désactivez les unités que vous n'utilisez jamais : elles quittent les listes d'unités ; marquez-en une d'une étoile et les nouveaux travaux démarrent dedans. Un fichier conserve toujours sa propre unité. Dans CadCraft, l'étoile règle les unités d'un nouveau dessin lorsqu'il s'agit d'une unité qu'un dessin peut porter ; la case {{ui:Unités}} propre à CadCraft ne suit pas encore ces réglages. Une fois qu'un dessin a des unités, une longueur que vous saisissez peut porter le symbole de n'importe quelle unité. Voir [Unités, valeurs saisies et listes d'unités](common:unit-lists).
- **Une disposition plus dense et des panneaux qui se rangent.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Densité de la mise en page}} › {{ui:Compacte}} fait tenir davantage à l'écran (les écrans tactiles et les téléphones gardent leurs gros boutons). Chaque panneau latéral a une barre de titre fine : faites-la glisser pour ancrer ou rendre flottant le panneau, déposez-la sur la barre d'un autre panneau pour partager un même cadre en onglets, épinglez-le pour qu'il se rétracte vers le bord, ou masquez-le et faites-le revenir depuis le bord. Voir [Disposer les panneaux](common:arrange-panels#make-the-layout-denser).
- **Les boîtes de dialogue se déplacent.** Faites glisser une boîte de dialogue par sa barre de titre pour la sortir du dessin ; elle revient là où vous l'avez laissée. Double-cliquez sur la barre de titre pour la recentrer. Voir [Déplacer une boîte de dialogue](common:arrange-panels#move-a-dialog).
- **Recettes pour assistants IA.** Dix demandes détaillées pour votre propre assistant (ranger un dessin, tracer un jeu, vérifier des dessins, poser des questions à un modèle, totaliser un métré, essayer une variante de pièce…), chacune avec les outils qu'elle appelle et les autorisations nécessaires, et chacune rejouée par nos tests. Les applications ne contiennent aucune IA. Voir [Recettes pour assistants IA](common:assistants-recipes).
- **Langues.** **Português (Portugal)** est nouveau dans {{ui:Paramètres}} › {{ui:Général}} › {{ui:Langue}}. Lui, **Português (Brasil)**, **Español (México)** et **Bahasa Indonesia** disposent désormais de tous les mots des applications, sous forme de brouillons non encore relus par un locuteur natif. Les rubriques d'aide sont en anglais.
- **CadCraft Studio** indique pourquoi une vérification de mise à jour a échoué (pas encore de fichier pour votre système, pas de réseau, mauvaise signature) au lieu de simplement « Terminé », et ne fait plus réapparaître une carte Nouveautés que vous avez fermée, tant qu'il n'existe pas de version plus récente.

## Pas encore dans cette version

- **La 0.7 n'est pas signée numériquement.** La signature, ainsi que le paquet Microsoft Store, est reportée à la 0.8 car la validation du certificat n'a pas encore abouti. Vérifiez le SHA-256 à côté de chaque fichier sur getcadcraft.com/download. Sous Windows, si SmartScreen bloque le programme d'installation, choisissez {{ui:Plus d'informations}}, puis {{ui:Exécuter quand même}}. Sur un Mac, la première fois, faites un clic droit sur CadCraft Studio et choisissez {{ui:Ouvrir}}. CadCraft Studio n'est pas encore dans une boutique d'applications, et il n'existe pas encore de version iPad ou iPhone.
- Les listes d'angles et de pentes de {{ui:Unités}} sont enregistrées, mais aucune case ne les lit encore.
- Les objets OLE d'un DWG sont conservés mais non affichés, et les images métafichier à l'intérieur des objets OLE ne sont pas dessinées.
- La lecture des tables de styles de tracé (fichiers CTB) venant d'autres logiciels attend un fichier d'exemple.
- Le texte asiatique ancien écrit avec des codes `\M+` est lu, mais n'a pas encore été vérifié avec un fichier d'un autre logiciel.
- Fonds PDF : les images à l'intérieur de la page sont affichées à l'écran mais non tracées, le tracé d'un assistant laisse les fonds de côté, et la façon dont d'autres logiciels lisent le découpage et l'échelle enregistrés n'a pas été vérifiée dans ceux-ci.
- Historique : CadCraft n'envoie pas encore ses enregistrements dans le cloud, si bien que les versions du cloud sont celles enregistrées depuis d'autres appareils et le web. L'historique n'existe que dans CadCraft Studio.
- Il n'a pas encore été vérifié si Studio conserve le dossier de support acad.lsp après un redémarrage ; s'il le demande, choisissez à nouveau le dossier dans APPLOAD.
- Le panneau Laser n'a pas encore été essayé sur une vraie découpeuse laser : testez chaque réglage sur des chutes de matériau. CadCraft Studio n'a pas de Web Serial, donc dans Studio le panneau enregistre seulement du G-code.
- Le recalage des numérisations a été testé sur des numérisations fictives, pas encore sur un jeu issu d'un vrai scanner.
- Le panoramique à deux doigts a été testé avec des événements de pavé tactile simulés, pas encore sur un vrai pavé tactile.
- {{cmd:PEDIT}} n'a pas d'option Modifier sommet (utilisez les poignées ou Propriétés). Décaler, ajuster, prolonger, raccorder, couper et joindre n'acceptent pas encore les splines ; la hauteur (Z) d'une spline n'est pas conservée.
- Un nouveau texte en paragraphe ne peut pas encore recevoir de codes de mise en forme, et les tracés SVG affichent le texte mis en forme dans une seule couleur.
- L'option Dessin entier de WBLOCK n'écrit que le modèle, pas les feuilles. Le style de cote actif n'est pas enregistré dans le fichier : un dessin s'ouvre avec le style Standard actif.
- Les styles de menu en ruban n'ont pas encore de listes de calques, de couleurs ni de types de ligne : utilisez le panneau {{ui:Calques}} et {{ui:Propriétés}}.
- Les nuages de points ne sont toujours pas enregistrés dans le dessin ni tracés, et les fichiers E57 s'ouvrent jusqu'à 6 millions de points et 512 Mo.
- Les fichiers DWG enregistrés par CadCraft n'ont pas encore été vérifiés dans AutoCAD lui-même.

Le reste figure dans [Pas encore réalisé](topic:not-built-yet).

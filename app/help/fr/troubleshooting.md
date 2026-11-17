---
title: Dépannage
summary: Messages que CadCraft affiche et problèmes que vous pouvez rencontrer, chacun avec sa cause et sa solution.
keywords: problème, erreur, ne fonctionne pas, message, impossible d'ouvrir, commande inconnue, rien ne se passe, bloqué, touches sans effet, vide, manquant, corriger
from: 8299b222
---

## Ouverture des fichiers

| Message ou symptôme | Cause | Solution |
|---|---|---|
| « CadCraft ouvre les dessins DWG et DXF. « … » n'est ni l'un ni l'autre. » | Le fichier n'est pas un `.dwg` ni un `.dxf`. | Ouvrez le fichier de dessin lui-même. Un PDF peut être importé (Ouvrir demande : importer ou attacher, voir [fonds PDF](topic:pdf-underlay)) ; les images s'insèrent avec `IMAGEATTACH`. |
| « Ce DXF binaire se termine au milieu d'un objet : le fichier est tronqué ou endommagé. » | Le DXF binaire s'arrête avant sa fin. | Tapez RECOVER pour ouvrir ce qui peut être lu, ou demandez à nouveau le fichier. |
| « Ce fichier n'est pas un DXF lisible (mauvais code de groupe à la ligne …). » | Le DXF est endommagé ou n'est pas réellement un DXF. | Demandez à nouveau le fichier, ou un DWG. |
| « Ce dessin n'a pas pu être lu. Il est peut-être endommagé, ou enregistré dans une version que le lecteur ne gère pas encore (…). » | Le lecteur DWG n'a pas pu le lire. | Demandez le DWG enregistré dans une version plus ancienne, ou un DXF. |
| « Ce dessin provient d'AutoCAD R11 / R12 (DWG AC1009), plus ancien que ce que CadCraft lit … » | Les fichiers DWG de la version 12 et antérieures utilisent un format que CadCraft ne lit pas. | Dans le logiciel qui l'a créé, enregistrez-le en DXF (quelle que soit la version) ou en DWG plus récent, puis ouvrez-le. La fonction Enregistrer sous de CadCraft propose le DXF R12 pour les logiciels qui demandent cet ancien format. |
| « Impossible d'ouvrir … » suivi d'un message réseau, au premier DWG | Le lecteur DWG n'a pas pu être téléchargé : vous êtes hors ligne et CadCraft n'est pas enregistré pour un usage hors ligne, ou la connexion a été coupée. | Repassez en ligne et réessayez, ou ouvrez un DXF. Cliquez sur {{ui:Enregistrer pour le hors ligne}} et attendez « Prêt hors ligne » pour que les DWG s'ouvrent hors ligne la prochaine fois. Voir [Travailler hors ligne](common:offline). |
| Le bouton hors ligne affiche « Impossible d'enregistrer » | Certains fichiers n'ont pas été téléchargés. | Vérifiez la connexion et cliquez sur le bouton pour réessayer. |
| Le bouton hors ligne affiche « Hors ligne indisponible » | Les fenêtres privées et certains ordinateurs gérés ne peuvent pas conserver de copie hors ligne. | Utilisez une fenêtre normale, ou restez en ligne. |
| CadCraft ne s'ouvre pas sans connexion | Il n'a pas été enregistré pour un usage hors ligne dans ce navigateur, ou le navigateur l'a effacé. | La prochaine fois que vous êtes en ligne, cliquez sur {{ui:Enregistrer pour le hors ligne}} et attendez « Prêt hors ligne ». |
| Le dessin s'ouvre mais des parties manquent | Objets que CadCraft ne peut pas encore dessiner, ou calques désactivés ou gelés dans le fichier. | Lisez « À propos de ce fichier » dans le panneau de gauche. Vérifiez le panneau {{ui:Calques}}. |
| Le texte passe sur deux lignes | CadCraft dessine le texte dans une police de type Helvetica, plus large que certaines polices CAO. | Raccourcissez le texte dans Propriétés, ou acceptez la ligne supplémentaire. |
| Un cercle apparaît comme une ellipse, ou un texte en miroir se lit dans le bon sens | L'objet a été dessiné dans un plan incliné, ou vu depuis dessous, dans le logiciel qui a créé le fichier. CadCraft l'affiche vu d'en haut, comme la vue en plan de ce logiciel ; le texte reste lisible. | Rien à corriger. Pour le voir comme dans l'autre logiciel, demandez le dessin aplati, ou avec les objets dessinés depuis le dessus. |
| Un bloc, un cercle ou une cote se trouve ailleurs que dans le logiciel qui a créé le fichier | Un cas de dessin que CadCraft lit mal. | Signalez-le-nous sur Discord, avec le fichier si vous pouvez le partager. |

## La ligne de commande

| Message ou symptôme | Cause | Solution |
|---|---|---|
| « Commande inconnue « … ». Tapez HELP pour la liste. » | Aucune commande ni alias ne porte ce nom. | Tapez `HELP`, ou consultez la [référence des commandes](topic:commands). Certaines commandes familières sont [pas encore disponibles](topic:not-built-yet). |
| « Aucune commande de ce nom » à côté de la ligne de commande pendant la saisie | Ce que vous avez tapé ne correspond à rien pour l'instant. | Continuez à taper, ou vérifiez l'orthographe. |
| « Point ou mot-clé d'option requis. » | Ce que vous avez tapé n'est ni un point ni une option. | Vérifiez le format : `x,y`, `@dx,dy`, `@d<a`, ou un seul nombre. Voir [Saisie des coordonnées et des distances](topic:coordinate-entry). |
| « Une distance positive ou deux points sont requis. » | Une distance était négative ou n'était pas un nombre. | Tapez un nombre positif, ou cliquez sur deux points. |
| « Un angle en degrés ou deux points sont requis. » | L'angle n'était pas un nombre. | Tapez les degrés sous forme de nombre simple. |
| « Un nombre est requis. » | Un nombre était attendu. | Tapez uniquement des chiffres. |
| « Mot-clé d'option invalide. » | Les lettres ne correspondent à aucune option. | Tapez les lettres majuscules indiquées entre crochets. |
| `*Annulé*` | Vous avez appuyé sur {{key:Esc}}, ou sur {{key:Enter}} là où un point était requis. | Relancez la commande. |
| La saisie n'atteint pas la ligne de commande | Une zone d'un panneau ou d'une boîte de dialogue a le curseur. | Appuyez sur {{key:Enter}} ou {{key:Esc}}, ou cliquez sur le dessin. |
| La commande utilise des objets que vous n'avez pas choisis | Ils étaient sélectionnés avant le lancement de la commande. | Appuyez sur {{key:Esc}} avant la commande. |
| Une ligne est allée à un endroit inattendu | `x,y` est absolu. | Utilisez `@dx,dy` pour des points relatifs. |
| « Terminez ou annulez d'abord la commande en cours (Échap). » | Vous avez appuyé sur {{key:Mod+S}} pendant qu'une commande était en cours. | Appuyez sur {{key:Esc}}, puis enregistrez. |
| « Enregistrement en DWG (AutoCAD 2000) impossible : … Essayez Enregistrer sous, puis DXF. » | Un élément du dessin n'a pas pu être écrit en DWG. | Appuyez sur {{key:Mod+Shift+S}}, choisissez {{ui:DXF R12}} et cliquez sur {{ui:Enregistrer}}. |
| « Non enregistré. » | Vous avez fermé la boîte {{ui:Enregistrer une copie sous}} avec {{ui:Annuler}} ou {{key:Esc}}. | Appuyez à nouveau sur {{key:Mod+Shift+S}} et cliquez sur {{ui:Enregistrer}}. |

## Édition

| Message ou symptôme | Cause | Solution |
|---|---|---|
| Un objet ne se sélectionne pas | Son calque est verrouillé, désactivé ou gelé ; ou vous êtes sur une feuille et il s'agit du modèle à l'intérieur d'une fenêtre de présentation. | Déverrouillez le calque, ou passez à l'onglet {{ui:Modèle}}. |
| « Rien trouvé à cet endroit. » | Aucun objet sous le clic. | Zoomez et cliquez sur la ligne elle-même. |
| « Aucun objet ne croise celui-ci à cet endroit. » | {{cmd:TRIM}} n'a trouvé aucun objet croisant le morceau choisi. | Vérifiez que la ligne de coupe croise bien cet objet. |
| « Impossible d'ajuster cet objet. » | Ajuster fonctionne sur les lignes, arcs, cercles et polylignes. | Décomposez d'abord les blocs, ou effacez et redessinez. |
| « Aucune limite dans cette direction. » | {{cmd:EXTEND}} n'a rien trouvé à rejoindre. | Choisissez plus près de l'extrémité qui doit s'allonger. |
| « Impossible de décaler cet objet. » | Décaler fonctionne sur les lignes, arcs, cercles et polylignes. | Décomposez-le d'abord, ou tracez une ligne parallèle. |
| « Impossible de décaler aussi loin. » | Le décalage retournerait la forme sur elle-même. | Utilisez une distance plus petite. |
| « Le rayon est trop grand. » ou « La distance est trop grande. » | Le raccord ou le chanfrein dépasserait l'extrémité d'une ligne. | Définissez un rayon plus petit avec `R`, ou des distances plus petites avec `D`. |
| « Seuls le premier ou le dernier segment d'une polyligne ouverte peuvent être raccourcis. » | Le coin couperait au milieu de la polyligne. | Choisissez deux segments voisins de la polyligne, ou utilisez `P` pour chaque coin. |
| « Choisissez une deuxième ligne, différente. » | Le second choix était la même ligne, ou n'était pas une ligne. | Choisissez une autre ligne. |
| « Seules les polylignes, références de bloc et cotes se décomposent. » | La sélection ne contenait rien à décomposer. | Sélectionnez une polyligne, une référence de bloc ou une cote. |
| « C'est le calque courant. Rendez d'abord un autre calque courant. » | Vous avez voulu désactiver le calque courant. | Cliquez sur le nom d'un autre calque, puis désactivez celui-ci. |
| « Un calque nommé … existe déjà. » | Les noms de calque doivent être uniques. | Choisissez un autre nom. |
| « Rien à annuler. » | Il ne reste rien à annuler, ou vous avez ouvert ou commencé un dessin (cela efface l'historique). | — |

## Cotes et blocs

| Message ou symptôme | Cause | Solution |
|---|---|---|
| Le texte et les flèches des cotes sont minuscules ou énormes | Les tailles sont exprimées en unités de dessin ; l'échelle globale ne correspond pas au dessin. | Réglez {{cmd:DIMSCALE}} sur l'échelle de tracé ; voir [Définir les tailles de cote](topic:dimension-settings). |
| « Choisissez un point à l'intérieur de l'angle à mesurer. » | L'emplacement de la cote angulaire se trouve sur un côté. | Cliquez à l'intérieur de l'angle. |
| « Ces lignes sont parallèles. » | Des lignes parallèles n'ont pas d'angle entre elles. | Choisissez deux lignes qui se rejoignent. |
| « Choisissez une cote linéaire ou alignée. » | {{cmd:DIMCONTINUE}} ou {{cmd:DIMBASELINE}} a besoin d'un point de départ. | Choisissez une cote linéaire ou alignée. |
| « Ce dessin n'a pas encore de blocs : F en insère un depuis un fichier, L depuis la bibliothèque … » | Le dessin n'a pas de blocs propres. | Tapez `F` ou `L`, ou créez un bloc avec {{cmd:BLOCK}}. |
| « Aucun bloc nommé « … ». » | Le nom est incorrect. | Le message liste les blocs existants. |
| « Un nom de bloc ne peut pas commencer par * ni utiliser … » suivi d'une liste de caractères | Le nom contient un caractère que les blocs ne peuvent pas utiliser. | Utilisez des lettres, des chiffres, `-` et `_`. |
| « Un bloc ne peut pas se contenir lui-même. » | La sélection contient une référence au bloc en cours de création. | Retirez cette référence de la sélection. |
| « Aucun objet sélectionné ; rien n'a été créé. » | Vous avez appuyé sur {{key:Enter}} avant de sélectionner. | Relancez {{cmd:BLOCK}} et sélectionnez les objets. |

## Feuilles et tracé

| Message ou symptôme | Cause | Solution |
|---|---|---|
| « Les fenêtres de présentation se placent sur une présentation. Ouvrez d'abord un onglet de présentation (ou créez-en une avec LAYOUT). » | {{cmd:MVIEW}} sur l'onglet {{ui:Modèle}}. | Cliquez d'abord sur un onglet de feuille. |
| « Ouvrez d'abord la présentation avec la fenêtre de présentation. » | {{cmd:VPVIEW}} sur l'onglet {{ui:Modèle}}. | Cliquez d'abord sur l'onglet de feuille. |
| L'échelle d'une fenêtre de présentation semble dix fois fausse | Les unités du dessin sont incorrectes. | Réglez {{ui:Unités}} dans {{ui:Réglages actuels}}. |
| « Il n'y a encore rien à tracer. » | Le modèle est vide. | Dessinez quelque chose, ou ouvrez un dessin. |
| « Choisissez la fenêtre à tracer. » | {{ui:Une fenêtre…}} est choisi et aucune fenêtre n'a été choisie. | Cliquez sur {{ui:Choisir}} et choisissez deux coins. |
| « … plus grand que le papier : les bords sont coupés. » | La zone ne tient pas à cette échelle. | Choisissez une échelle plus petite, un papier plus grand, ou {{ui:Ajuster au papier}}. |
| « Le navigateur a bloqué le nouvel onglet, le PDF a donc été téléchargé à la place. » | Les fenêtres surgissantes sont bloquées pour le site. | Ouvrez le PDF téléchargé, ou autorisez les fenêtres surgissantes pour le site. |
| Des caractères s'impriment en « ? » | Les polices du PDF n'ont pas de lettre pour eux (idéogrammes rares, hindi et autres écritures qui exigent une mise en forme complexe, …), ou la police plus grande n'a pas pu être téléchargée (hors ligne). Les écritures européennes, cyrillique, grecque, hébraïque, arabe, persane, ourdou, thaï, chinoise, japonaise et coréenne s'impriment telles quelles. | Pour l'arabe, le thaï, le chinois, le japonais ou le coréen, relancez le tracé avec une connexion. Les autres écritures ne sont pas encore disponibles. |
| Des lignes de construction apparaissent dans le PDF | Leur calque est tracé. | Cliquez sur le bouton d'impression du calque. |
| Toutes les lignes ont la même épaisseur | Leur épaisseur est {{ui:Valeur par défaut}}, elles s'impriment donc avec la largeur de plume de la boîte de dialogue. | Donnez aux calques ou aux objets une {{ui:Épaisseur de ligne}} dans le panneau de droite, ou choisissez une {{ui:Épaisseur de trait}} dans la boîte de dialogue. Pour voir les épaisseurs à l'écran, appuyez sur {{ui:LWT}} dans la barre d'état. |

## Touches et écran

| Symptôme | Cause | Solution |
|---|---|---|
| F3, F7 ou F8 changent le volume ou ouvrent Mission Control | Touches de fonction du Mac. | Maintenez **fn**, ou utilisez les boutons de la barre d'état. Voir [Touches, souris et pavés tactiles](common:keys). |
| F7 demande si vous voulez la navigation par curseur | Firefox utilise lui-même F7. | Choisissez Non ; utilisez le bouton {{ui:Grille}}. |
| {{key:Mod+N}} a ouvert une fenêtre du navigateur | Le navigateur garde cette touche. | Cliquez sur {{ui:Nouvelle}} ou tapez `NEW`. |
| {{key:Mod+A}} a sélectionné le texte de la ligne de commande | La ligne de commande avait le curseur. | Cliquez d'abord sur un objet, ou tapez `ALL` à une invite « Sélectionnez des objets ». |
| {{key:Delete}} n'efface rien | La ligne de commande avait le curseur. | Tapez `E` puis appuyez sur {{key:Enter}}. |
| Le clic droit ne fait rien sur le pavé tactile d'un Mac | Le clic avec la touche Control peut compter comme un clic ordinaire. | Cliquez avec deux doigts. |
| Rien ne se déplace sur le pavé tactile | Il n'y a pas de bouton central, et Espace ne déplace pas la vue. | Faites glisser avec deux doigts : la vue 2D se déplace (le pincement et la molette de la souris zooment). Ou faites glisser en maintenant le clic droit. |
| Le premier {{key:Esc}} a quitté le plein écran | Le navigateur utilise Échap pour quitter le plein écran. | Appuyez à nouveau sur {{key:Esc}} pour annuler la commande. |
| {{key:F1}} ne fait rien sur un Mac | F1 est une touche de luminosité. | Maintenez **fn**, ou cliquez sur {{ui:Aide}}. |
| La saisie va dans le champ de recherche de l'aide | Le panneau d'aide a le curseur. | Cliquez sur le dessin. |
| Le dessin est devenu vide | Vous avez zoomé très loin. | Cliquez sur {{ui:Étendue}}, ou double-cliquez sur la molette. |
| « Quitter le site ? » à la fermeture de l'onglet | Il y a des modifications non enregistrées. | Restez, enregistrez avec {{key:Mod+S}}, puis fermez. |

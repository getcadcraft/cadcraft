---
title: Boutons personnalisés (Mes outils)
summary: Ajoutez des boutons de barre d'outils qui exécutent vos propres macros, attribuez-leur des touches de raccourci, partagez-les dans un fichier et importez des boutons depuis un fichier de personnalisation CUIx.
keywords: mes outils, boutons personnalisés, boutons de barre d'outils, macro, macros, cui, cuix, personnaliser, personnalisation, menu, touches de raccourci, raccourcis clavier, diesel, ^c^c, importer des boutons, exporter des boutons
from: 36618802
---

## Ce que vous allez apprendre

Comment placer vos propres boutons sur la barre d'outils, chacun exécutant une macro écrite comme AutoCAD les écrit, comment attribuer une touche à un bouton, et comment importer les boutons d'un fichier CUIx.

## Ajouter un bouton

1. Ouvrez {{ui:Paramètres}} ({{key:Mod+,}}) et restez sur l'onglet {{ui:CadCraft}}. Faites défiler jusqu'à {{ui:Mes outils}}.
2. Cliquez sur {{ui:Ajouter un bouton…}}.
3. Remplissez la boîte :
   - {{ui:Groupe}} : le groupe de barre d'outils où il va, par exemple `Mes outils`. Un nouveau nom crée un nouveau groupe.
   - {{ui:Libellé}} : les mots inscrits sur le bouton.
   - {{ui:Macro}} : ce qu'il saisit, par exemple `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Touche de raccourci}} : cliquez dans la case et appuyez sur les touches, par exemple {{key:Ctrl+Alt+B}}.
   - {{ui:Icône}} : une image PNG ou SVG d'au plus 64 KB, ou aucune (une étoile s'affiche).
4. Cliquez sur {{ui:Enregistrer}}.

Le bouton apparaît à la fin de la barre d'outils, dans son groupe. Cliquez dessus, ou appuyez sur sa touche, pour l'exécuter. {{ui:Édition}} et {{ui:Supprimer}} dans la liste le modifient ou le retirent.

## Écrire une macro

Une macro est ce que vous saisiriez dans la ligne de commande, avec quelques signes :

| Signe | Signifie |
|---|---|
| `^C` | Annule ce qui est en cours (`^C^C` est le début habituel) |
| `;` ou un espace | {{key:Enter}} |
| `\` | Attend un clic ou une réponse saisie, puis la macro reprend |
| `_` ou `.` avant une commande | Accepté et ignoré (noms internationaux et intégrés) |
| `*` tout au début | Recommence à chaque fin, jusqu'à ce que vous appuyiez sur {{key:Esc}} |
| `^O`, `^G` | Active ou désactive Ortho et la grille |
| `$M=` | La suite est du DIESEL. Seuls `$(if,…)`, `$(getvar,…)`, `$(=,…)` et `$(eq,…)` sont lus ; un bouton utilisant autre chose le signale et ne fait rien |

Exemples :

- `^C^C_line;0,0;@100,0;;` trace une ligne de 100 de long depuis l'origine.
- `^C^C_circle;\25;` vous demande le centre, puis trace un cercle de rayon 25 à cet endroit.
- `^C^C_turnright` tourne la vue de 90° vers la droite.

## Touches de raccourci

Une touche doit comporter {{key:Mod}} (Ctrl, ou Cmd sur Mac) ou {{key:Alt}} avec une lettre ou un chiffre, ou l'une des touches de fonction libres {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Les lettres seules vont à la ligne de commande. Les touches déjà utilisées par CadCraft, l'application ou le navigateur (comme {{key:Ctrl+S}} ou {{key:Ctrl+Z}}), et celles qu'un autre bouton utilise, sont refusées ; la case indique pourquoi.

## Partager vos boutons

- {{ui:Exporter…}} enregistre chaque groupe et chaque bouton (avec icônes et touches) dans `my-tools.json`.
- {{ui:Importer…}} ajoute après les vôtres les groupes d'un tel fichier. Un nom de groupe déjà utilisé reçoit « (2) » ; une touche qui entrerait en conflit est retirée, et le panneau le signale.

## Importer des boutons depuis un fichier CUIx

1. Cliquez sur {{ui:Importer un CUIx…}} et choisissez le fichier `.cuix`.

Ses barres d'outils et panneaux de ruban deviennent des groupes, chaque bouton avec sa macro et son image (PNG, ou BMP converti en PNG). Ses touches de raccourci forment un groupe à part, chaque bouton avec sa touche ; les alias de commandes qu'il peut contenir forment un groupe {{ui:Alias}}. Le panneau liste ce qui a été importé.

:::note
Le fichier est seulement lu. Les commandes que CadCraft n'a pas sont listées par leur nom, sans être devinées : leurs boutons le signalent au clic. Le DIESEL au-delà des quelques fonctions ci-dessus, les menus, les boutons de souris et les espaces de travail ne sont pas lus.
:::

## Bon à savoir

- Les boutons sont conservés dans ce navigateur (ou dans cette application de bureau), et non dans les dessins.
- Un bouton s'exécute par la ligne de commande ; il s'annule donc comme tout ce que vous saisissez : un {{key:Mod+Z}} par commande qu'il a exécutée.

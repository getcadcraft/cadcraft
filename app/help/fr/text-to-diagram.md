---
title: Dessiner un diagramme à partir d'un texte
summary: Collez un organigramme Mermaid, un schéma de composants PlantUML, D2, une liste de-à ou du XML draw.io, et CadCraft dispose les blocs et les connecteurs, que vous pouvez modifier comme les autres objets.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modèle local, diagramme, organigramme, mermaid, plantuml, d2, de à, liste de-à, diagramme par blocs, connecteurs, texte vers diagramme, DIAGRAM, TEXTDIAGRAM, schéma système, schéma de câblage, tuyauterie, csv
from: b26af54b
---

Tapez {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Une boîte s'ouvre : collez le texte, choisissez {{ui:Dessiner}}, cliquez sur le coin supérieur gauche du diagramme et indiquez la hauteur du texte. CadCraft lit le texte, dispose les blocs en couches avec des connecteurs à angle droit, et les dessine sur un calque appelé `Diagram`. Les nouveaux objets sont sélectionnés, vous pouvez donc les déplacer tout de suite. Ce sont des objets ordinaires : modifiez le texte d'un bloc avec {{cmd:TEXTEDIT}}, étirez un connecteur avec ses poignées, effacez un bloc, ajoutez vos propres lignes. Un seul {{cmd:UNDO}} retire tout le diagramme.

Dans la ligne de commande, sans la boîte, le texte peut tenir sur une seule ligne, avec `;` entre les instructions : `flowchart LR; A[Pump] --> B[Tank]`.

## Ce qu'il lit

| Texte | Ce qui est lu |
|---|---|
| **Mermaid** `flowchart` ou `graph` avec `TD`, `TB`, `BT`, `LR` ou `RL` | `A`, `A[texte]`, `A(texte)`, `A([texte])`, `A{texte}` (une décision, dessinée en losange), texte entre guillemets, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, une étiquette sous la forme `-->|texte|` ou `-- texte -->`, enchaînements `A --> B --> C`, groupes `A & B --> C`, `<br/>` pour un retour à la ligne, commentaires `%%` |
| **PlantUML** entre `@startuml` et `@enduml` (composants et déploiement) | `[Composant]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` et d'autres avec des noms `as`, `A --> B : étiquette`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: étiquette`, `a <- b`, `a <-> b`, `a -- b`, enchaînements, `a: Libellé`, `direction: right`, noms entre guillemets, commentaires `#` |
| **Une liste de-à** (un tableau collé comme texte ou en CSV) | colonnes `from`, `to` et éventuellement `label` et `type` (`dashed` dessine un connecteur en pointillés), dans n'importe quel ordre, séparées par des virgules, des points-virgules ou des tabulations ; sans ligne d'en-tête, les trois premières colonnes sont from, to, label |
| **XML draw.io** (le texte d'un fichier `.drawio`, `<mxfile>` ou `<mxGraphModel>`) | boîtes, boîtes aux coins arrondis, ellipses, décisions en losange et texte brut ; boîtes de conteneur et de couloir (dessinées en pointillés avec leur titre) ; connecteurs avec leurs points intermédiaires, extrémités de flèche (`endArrow`, `startArrow`) et `dashed=1` ; les étiquettes HTML deviennent du texte brut, `<UserObject label>` et `<object label>` fonctionnent |

Tout le reste d'une ligne (styles, remarques, cadres de boucle) est ignoré, et la ligne de commande indique le nombre de lignes ignorées. Un diagramme comporte au maximum 400 blocs et 1200 connecteurs.

## Le XML draw.io garde ses positions

Les autres formats indiquent seulement ce qui est relié à quoi, donc CadCraft les dispose. Le XML draw.io indique déjà où se trouve chaque élément : CadCraft le conserve. Chaque bloc reste à l'endroit indiqué dans le fichier, mis à l'échelle pour qu'une police de 12 pixels devienne la hauteur de texte que vous donnez (une boîte de 120 par 60 pixels mesure 60 par 30 unités de dessin à la hauteur 6), et le coin supérieur gauche du diagramme est placé au point où vous cliquez. Les connecteurs vont du bord d'un bloc au bord du suivant, en passant par leurs points intermédiaires ; un connecteur avec `orthogonalEdgeStyle` et sans point intermédiaire reçoit un seul coude à angle droit.

L'enregistrement par défaut de draw.io est compressé. La boîte et la ligne de commande l'ouvrent pour vous ; un outil d'assistant dans une fenêtre sans flux de décompression le signale, et `File › Export as › XML` avec *Compressed* décoché donne un XML brut. Les images, les connecteurs à extrémité libre et les pages supplémentaires sont ignorés et comptés.

## Écrire avec un modèle sur votre ordinateur

Un modèle local (Ollama, LM Studio, llama.cpp, Jan) peut écrire le XML ou le texte Mermaid à partir du contenu d'un PDF ou d'un SVG. Le résultat est saisi par la même boîte, ou placé directement dans le dessin lorsque le modèle est connecté comme assistant : `diagram_from_text` accepte `format` `drawio`. Les petits modèles font plus d'erreurs en XML qu'en Mermaid ou en liste de-à ; un premier essai avec Mermaid coûte donc moins cher. Ce que le lecteur ne peut pas utiliser est ignoré et compté, pas deviné. Voir Connecter votre IA pour les recettes de modèles.

## Disposition

Les blocs sont placés en couches selon les connecteurs (un connecteur qui revient en arrière est dessiné vers le haut), ordonnés pour limiter les croisements, avec des connecteurs à angle droit qui partent du bas d'un bloc et arrivent au haut du suivant ; `LR` et `RL` transforment les couches en colonnes. La hauteur de texte que vous indiquez fixe la taille de l'ensemble.

## Sous-graphes et diagrammes de séquence

- Un `subgraph name [Title]` Mermaid … `end` dessine une boîte en pointillés avec son titre autour de ses blocs ; les sous-graphes peuvent être imbriqués. La disposition n'empêche pas un autre bloc d'entrer dans une boîte : déplacez un bloc égaré avec ses poignées.
- Un `sequenceDiagram` Mermaid, ou un texte PlantUML avec des lignes `participant` et des messages `->`, est dessiné sous forme de blocs en haut, d'une ligne de vie en pointillés sous chacun, et d'une ligne par message. `-->` et `-->>` sont en pointillés, `->>` et `-)` ont une pointe de flèche, `autonumber` numérote les messages, un message adressé à soi-même fait une boucle. Les notes et les cadres `loop` / `alt` sont ignorés.

## Symboles pour les schémas unifilaires et de tuyauterie

Un bloc peut être un symbole dessiné, avec son nom dessous, au lieu d'une boîte. Indiquez le symbole dans le texte :

| Texte | Comment |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ou une ligne `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ou `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Une liste de-à | colonnes `from_symbol` et `to_symbol` |

Les noms sont ceux des symboles P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` et le reste de la bibliothèque P&ID) et du jeu Électrique (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` et ainsi de suite). Un nom que deux jeux partagent va au jeu P&ID ; écrivez `pid:` ou `el:` devant pour choisir. Un nom que CadCraft ne connaît pas est ignoré et compté. Les symboles sont dessinés comme des lignes, des cercles et des arcs simples sur le calque `Diagram`, à l'échelle de la hauteur du texte. Ce ne sont pas les blocs avec repères des modules complémentaires : pour un dessin de travail, utilisez les commandes P&ID ou Électrique.

Les assistants IA peuvent faire la même chose avec l'outil `diagram_from_text` dans la fenêtre.

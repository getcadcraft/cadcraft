---
title: Transférer des esquisses vers et depuis d'autres modeleurs de pièces
summary: Écrivez une macro qui reconstruit votre dessin sous forme d'une esquisse contrainte dans un modeleur de pièces, et ouvrez une esquisse exportée depuis un tel modeleur.
keywords: esquisse, macro, swb, vba, export, modeleur de pièces, variables globales, équations, relations, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks n'est pas disponible là où CadCraft est compilé : aucun des deux sens n'a donc encore été testé dans SolidWorks. Ce que CadCraft écrit n'est vérifié que quant à sa structure. Contrôlez le résultat avant de vous y fier.
:::

## Envoyer un dessin comme esquisse

1. Contraignez et cotez le dessin (voir [Contraindre un dessin](topic:constraints)).
2. Dans le groupe {{ui:Paramétrique}}, ouvrez {{ui:Plus}} et choisissez {{ui:Macro pour SolidWorks (.swb)}}, ou saisissez {{cmd:SWBOUT}}.

   Un fichier portant le nom du dessin et se terminant par `.swb` est téléchargé.
3. Dans SolidWorks, choisissez **Outils > Macro > Exécuter** puis sélectionnez ce fichier.

La macro crée une nouvelle pièce à partir de votre modèle de pièce par défaut, ouvre une esquisse sur le plan de face et y dessine les lignes, cercles, arcs, points et polylignes du modèle, avec :

- vos contraintes sous forme de relations d'esquisse,
- vos contraintes dimensionnelles sous forme de cotes portant les mêmes noms (`d1@Sketch1`),
- vos propres paramètres sous forme de variables globales,
- chaque expression sous forme d'équation.

La pièce utilise l'unité de longueur du dessin. Le texte, les blocs, les hachures, les cotes et les feuilles ne font pas partie de l'esquisse ; l'historique indique ce qui a été omis. Les expressions sans forme d'équation dans SolidWorks (`if`, `min`, `max`, `round`, `%` et quelques autres) sont écrites sous leur valeur actuelle, et l'historique le précise. Tout ce que la macro ne peut pas créer est consigné dans un fichier journal à côté de la macro, et un message en fait le bilan à la fin.

## Ouvrir une esquisse depuis une pièce

1. Dans SolidWorks, exécutez sur la pièce la macro d'export de CadCraft (téléchargez-la dans l'application PartCraft : Fichier > Exporter > Exporter la macro pour ramener les pièces). Elle écrit un fichier `.json` au format `cadcraft-sw-export` à côté de la pièce.
2. Dans CadCraft, choisissez {{ui:Ouvrir}} et sélectionnez ce fichier `.json`.
3. Si la pièce contient plusieurs esquisses, choisissez-en une.

L'esquisse devient le dessin, en millimètres : ses lignes, arcs, cercles et points, ses relations sous forme de contraintes, ses cotes sous forme de contraintes dimensionnelles conservant leur nom (`D1`, `D2` …), ses variables globales sous forme de paramètres, et les équations de ses cotes sous forme d'expressions. L'historique indique ce qui n'a pas été repris, comme les relations que CadCraft ne possède pas. La position de l'esquisse dans la pièce n'est pas conservée : elle est dessinée à plat, telle qu'elle apparaît sur son plan.

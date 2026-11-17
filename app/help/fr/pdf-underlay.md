---
title: Fonds PDF et import de PDF
summary: Placez une page PDF sous votre dessin pour la décalquer et la tracer, ou transformez ses lignes et son texte en objets de dessin.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, fond, décalquer, importer pdf, scan, plan d'étage, estomper, découper, calques, accrochage, ouvrir pdf
from: aa301d0f
---

## Deux façons d'intégrer une page PDF

- **Attacher** ({{cmd:PDFATTACH}}) garde le PDF comme une image sous votre dessin. Vous le décalquez, vous vous accrochez à ses lignes, vous l'estompez, vous le découpez, et il s'imprime avec la feuille. Le dessin ne garde que le nom du fichier.
- **Importer** ({{cmd:PDFIMPORT}}) transforme les lignes, courbes, remplissages et textes de la page en objets de dessin ordinaires, sur des calques nommés d'après le PDF. Ils sont à vous pour les modifier, et le PDF n'est plus nécessaire ensuite.

Ouvrir un PDF avec {{ui:Ouvrir}} demande lequel des deux vous voulez.

## Attacher une page

1. Tapez `PDFATTACH` (ou `PDFATT`) et choisissez le PDF. S'il comporte plusieurs pages, tapez le numéro de la page.
2. Cliquez le point d'insertion (le coin inférieur gauche de la page).
3. Appuyez sur {{key:Enter}} pour la taille réelle de la page, ou tapez l'échelle : unités de dessin par point PDF (un point vaut 1/72 de pouce, soit 0.3528 dans un dessin en millimètres).
4. Appuyez sur {{key:Enter}} pour aucune rotation, ou tapez un angle.

La page est un objet comme une référence de bloc : déplacez-la, faites-la pivoter, mettez-la à l'échelle, copiez-la, effacez-la et placez-la sur un calque. Désactivez son calque et elle disparaît. Faites un zoom avant et la page est redessinée nettement.

## Décalquer

Avec {{ui:Accrochage}} activé, le curseur s'accroche aux lignes propres du PDF : extrémités, milieux et croisements (et {{ui:Le plus proche}} si cet accrochage est activé). Le texte dessiné sous forme de lettres sur la page n'est pas accroché.

## Ajuster

- `PDFADJUST` : **Estompage** (0 à 80 pour cent), **Contraste** (0 à 100), **Monochrome**, et **Activé/désactivé** pour le masquer sans l'effacer.
- `PDFCLIP` : n'affiche qu'un rectangle ou un polygone de la page ; **Supprimer** retire le découpage.
- `PDFLAYERS` : un PDF peut avoir ses propres calques. La commande les liste ; tapez un numéro pour activer ou désactiver ce calque pour ce fond seulement. Les calques désactivés dans le fichier commencent désactivés.

## Tracer et enregistrer

PLOT trace la page comme ses lignes, remplissages et textes (elle reste nette et consultable). Les images contenues dans le PDF s'affichent à l'écran, mais ne sont pas encore imprimées.

Un DWG ou DXF 2000 conserve le fond sous forme de lien : nom du fichier, page, position, échelle, rotation, découpe, estompage et contraste. Le PDF lui-même n'est pas dans le dessin. Rouvrez le dessin, tapez `PDF` et choisissez de nouveau le fichier ; les pages s'affichent en cadres tant que vous ne l'avez pas fait, et prennent leur taille réelle à ce moment-là. Le DXF ancien (R12) n'a pas de fonds : il garde le cadre et le nom. La façon dont d'autres programmes lisent la découpe et l'échelle enregistrées n'a pas encore été vérifiée dans ces programmes.

## Importer une page

1. Tapez `PDFIMPORT` (ou `PDFIM`) et choisissez le PDF et la page.
2. Cliquez à l'endroit où doit aller le coin inférieur gauche de la page.
3. Appuyez sur {{key:Enter}} pour la taille réelle, tapez une échelle, ou choisissez **Deux points** : la page est dessinée à sa taille réelle, puis vous cliquez deux points dont vous connaissez la distance et tapez la distance réelle ; tout est mis à l'échelle en conséquence.

Les lignes deviennent des lignes et des polylignes, les cercles et arcs sont reconnus, les formes remplies deviennent des hachures pleines, et le texte devient du texte sur un calque se terminant par `-TEXT`. C'est une seule étape d'annulation. Les images du PDF ne sont pas importées : attachez plutôt la page. Un scan (une page qui n'est qu'une image) n'a aucune ligne à importer.

Les PDF sont lus comme des fichiers non fiables : aucun script ne s'exécute, et une page très grande est tronquée, ce qui est signalé.

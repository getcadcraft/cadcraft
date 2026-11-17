---
title: Dessiner le texte avec vos polices SHX
summary: Donnez à CadCraft un dossier de polices SHX (ou choisissez les fichiers) : les styles de texte qui les nomment sont dessinés avec elles, à l'écran et dans un tracé ou un PDF, avec la hauteur, le facteur de largeur et l'inclinaison du style.
keywords: shx, polices, police, police de forme, grand jeu de caractères, bigfont, unifont, héritage, persan, farsi, arabe, style de texte, police manquante, police de remplacement, SHXFONTS, dossier, inverser, ordre visuel, simplex, isocp
from: 14b0a4ab
---

Les dessins provenant d'autres logiciels nomment souvent des **polices SHX** dans leurs styles de texte, et un DWG n'en contient pas. Sans la police, CadCraft dessine ce texte avec sa propre police, ce qui convient pour un texte latin ordinaire mais pas pour les anciennes polices qui associent des codes de caractères simples à d'autres formes de lettres, comme l'annotation persane héritée.

Donnez les polices à CadCraft, et il dessine le texte avec elles.

## Charger vos polices

Tapez {{cmd:SHXFONTS}} (`SHX`) et choisissez :

- {{ui:Dossier}} (CadCraft Studio) : choisissez un dossier. Chaque fichier `.shx` qu'il contient est lu immédiatement, puis à nouveau à chaque démarrage de CadCraft.
- {{ui:Fichiers}} (le navigateur) : choisissez un ou plusieurs fichiers `.shx`. Ils sont conservés dans ce navigateur et ne sont jamais envoyés.
- {{ui:Lister (L)}} : les polices chargées, et celles que le dessin ouvert nomme mais que vous n'avez pas chargées.
- {{ui:Retirer}} et {{ui:Effacer}} : oublier une police, ou toutes les polices.

CadCraft ne peut pas inclure de polices tierces : il n'en livre donc aucune ; elles viennent de vous. Un dessin ne fait que nommer ses polices et ne conserve aucune copie de celles-ci.

## Ce qui se passe

Le nom de police d'un style de texte est associé à une police chargée par son nom, sans tenir compte de la casse, du dossier ni de `.shx` (`SIMPLEX.SHX` trouve `simplex`). Un texte dans un tel style est dessiné en traits, à l'écran, dans un tracé et dans un PDF, à sa place, avec sa hauteur, sa rotation, son facteur de largeur et son angle d'oblique. Sa largeur est celle de la police elle-même : l'alignement {{ui:Centre}} et {{ui:Droite}}, le retour à la ligne et la sélection correspondent donc à ce que vous voyez. Un style dont la police n'est pas chargée conserve la police intégrée, et lorsque vous ouvrez un dessin qui nomme des polices que vous n'avez pas chargées, la ligne de commande le signale.

Le style Standard compte aussi : un dessin dont le style Standard nomme sa propre police la conserve.

## Polices déjà en ordre visuel

De nombreuses anciennes polices SHX persanes et arabes contiennent des lettres déjà formées pour l'écran et tracées de gauche à droite, si bien qu'un texte saisi dans l'ordre logique sort à l'envers. Tapez {{cmd:SHXFONTS}}, choisissez {{ui:Inverser (R)}}, et nommez la police : son texte est alors disposé en commençant par la dernière lettre. Relancez-la pour annuler. Le réglage appartient à la police, est conservé dans ce navigateur et n'est pas enregistré dans le dessin.

## Ce qui n'est pas encore couvert

- Un texte avec des codes de mise en forme en ligne (couleurs, empilements dans un MTEXT) reste dans la police intégrée.
- Les grandes polices (de type à deux octets) remplacent les codes manquants dans la police principale, mais un texte dans une page de codes d'Asie de l'Est, déjà converti par CadCraft en Unicode, n'est pas reconverti en codes à deux octets de la police.
- Le lecteur de polices suit la description publiée du format et a été testé sur des polices faites pour CadCraft. Si l'une des vôtres se dessine mal, envoyez-nous la police et le dessin.

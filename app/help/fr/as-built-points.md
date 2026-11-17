---
title: Vérifier les points de récolement
summary: Lire les points mesurés par une équipe de relevé et les comparer aux points et blocs du dessin : dans ou hors d'une tolérance, non mesurés, en trop — marqués dans le dessin et écrits dans un rapport CSV.
keywords: récolement, as built, as-built, asbuilt, relevé, station totale, implantation, piquetage, fichier de points, csv, txt, pnezd, penzd, xyz, tolérance, écart, contrôle, comparer, exportpoints, points d'implantation
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) est l'autre moitié de {{cmd:EXPORTPOINTS}} : vous exportez les points du dessin pour le terrain, l'équipe les implante et mesure ce qui a été construit, puis ASBUILT compare leur fichier avec le dessin.

1. Tapez {{cmd:ASBUILT}} et sélectionnez les mêmes points et blocs que ceux que vous avez exportés ({{key:Enter}} prend tous les POINT, comme EXPORTPOINTS).
2. **Associez les points récolés par** **Numéro** (l'équipe a gardé vos numéros de points : indiquez le premier numéro exporté) ou **Plus proche** (elle a numéroté ses propres visées : chaque point de conception prend le plus proche).
3. Indiquez les unités et les coordonnées du fichier telles que vous les avez exportées (Dessin, Mètres ou Pieds ; Monde ou SCU), et la **tolérance** en unités de dessin.
4. Choisissez le fichier CSV ou TXT de l'équipe. CadCraft le lit comme le fait CivilCraft : virgules, tabulations, points-virgules ou espaces, une ligne d'en-tête nommant ses colonnes, ou PNEZD d'après le nombre de colonnes.

La ligne de commande indique combien de points ont été associés, combien sont dans la tolérance, hors de celle-ci, non mesurés et en trop, ainsi que la plus grande distance. **Les marquer dans le dessin ?** Oui les place sur le calque **AS-BUILT** en une seule étape d'annulation : un point à chaque visée, son numéro et sa distance à côté, et une ligne rouge du point de conception à chaque visée hors de la tolérance. Un rapport CSV se télécharge avec tous les points : coordonnées de conception et réelles, les écarts en est, en nord et en altitude, et le résultat.

Voir aussi [Points pour les programmes BIM](topic:points-for-bim).

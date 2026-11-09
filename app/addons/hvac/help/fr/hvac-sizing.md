---
title: CVC : dimensionner les gaines
summary: Dimensionnement des gaines à perte de charge linéaire égale à partir du débit d'air, formules utilisées par le module et leur origine, et calculateur de gaines.
keywords: dimensionnement, perte de charge égale, perte de charge linéaire, débit d'air, cfm, vitesse, colebrook, darcy, diamètre équivalent, huebscher, ovale plate, ashrae, calculateur
from: c739aec8
---

## Perte de charge égale

Chaque section est dimensionnée pour la même perte de charge par longueur — la perte de charge linéaire. Réglez-la dans {{ui:Paramètres}} › {{ui:CadCraft}} › {{ui:CVC}} : 0.1 in. w.g. par 100 ft ou 0.8 Pa/m pour commencer (valeur de départ courante, et non une règle). Donnez un débit d'air à une section ({{cmd:DUCT}} › {{ui:Débit d'air}}, ou {{cmd:DUCTSIZE}}) et le module :

1. trouve le diamètre rond qui perd exactement cette perte de charge à ce débit ;
2. l'arrondit **au-dessus** à une taille commerciale, pour que la gaine ne perde pas plus que la valeur : gaines rondes par pas de 1 in jusqu'à 10 in, puis par pas de 2 in ; en métrique 63, 80, 100, 125, 160, 200, 250, 315, 355, 400 mm et au-delà ;
3. pour une gaine rectangulaire ou ovale plate, conserve la hauteur que vous avez réglée (12 in ou 300 mm sauf modification) et l'élargit par pas de 2 in ou 50 mm jusqu'à ce que son diamètre équivalent soit au moins égal au diamètre rond.

Il indique ensuite la taille, la vitesse et la perte de charge linéaire réellement obtenues. Une gaine rectangulaire dont les côtés dépassent un rapport de 4 pour 1 est signalée.

## Les formules

La méthode et les valeurs sont celles, publiques, du chapitre consacré à la conception des gaines de l'ASHRAE Handbook—Fundamentals (2021) :

- Perte de charge par frottement (Darcy–Weisbach) : Δp/L = (f / D) × ρV²/2.
- Coefficient de frottement issu de l'équation de Colebrook : 1/√f = −2 log₁₀(ε / 3.7D + 2.51 / (Re √f)), résolue par itérations.
- Air standard : masse volumique 1.204 kg/m³ et viscosité cinématique 1.51 × 10⁻⁵ m²/s (20 °C, niveau de la mer) ; Re = V × D / ν.
- Rugosité : lisse 0.03 mm (aluminium, PVC, inox), moyennement lisse 0.09 mm (acier galvanisé), moyennement rugueuse 0.9 mm (panneau de laine de verre), rugueuse 3.0 mm (gaine souple, entièrement tendue). Choisissez le matériau dans {{ui:Paramètres}} ou {{ui:Propriétés}}.
- Gaines rectangulaires : diamètre rond équivalent à perte de charge et débit égaux, Huebscher (1948) : De = 1.30 (a × b)^0.625 / (a + b)^0.25.
- Gaines ovales plates : Heyt et Diaz (1975) : De = 1.55 A^0.625 / P^0.25, avec A = πb²/4 + b(a − b) et P = πb + 2(a − b).

Exemples travaillés sur lesquels le module est testé : 1000 cfm dans une gaine ronde de 12 in circulent à 1273 fpm et perdent 0.189 in. w.g. par 100 ft ; 24 × 12 in équivaut à une gaine ronde de 18.3 in ; 1000 cfm à 0.1 in. w.g. par 100 ft demandent exactement 13.66 in, donc 14 in rond ou 14 × 12 in rectangulaire.

## Le calculateur de gaines

{{cmd:DUCTCALC}} demande un débit d'air et une perte de charge linéaire, puis donne le diamètre rond exact, ainsi que les tailles rondes, rectangulaires et ovales plates disponibles avec leur vitesse et leur perte de charge. Il ne modifie rien dans le dessin.

## Ce que le dimensionnement ne fait pas

Il ne cumule pas les pertes des accessoires, n'équilibre pas les dérivations et ne vérifie pas le ventilateur : il dimensionne chaque section séparément, à la perte de charge linéaire. Vérifiez les vitesses par rapport aux limites de bruit de votre projet.

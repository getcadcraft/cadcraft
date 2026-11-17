---
title: Lignes de construction et demi-droites
summary: Tracer des lignes qui se prolongent sans fin (XLINE) ou depuis un point dans un seul sens (RAY) pour aligner des éléments, et les ajuster en lignes ordinaires.
keywords: xline, ray, ligne de construction, lignes de construction, ligne infinie, ligne guide, ligne de référence, bissectrice, ligne de décalage, lignes de mise en page, xl
from: b6c398bc
---

## Ce que vous allez apprendre

Comment tracer des lignes de construction pour aligner des éléments pendant le dessin : par deux points, à niveau ou d'aplomb, à un angle, à mi-chemin entre deux directions, ou à une distance donnée d'une ligne. Et comment les ajuster en lignes ordinaires lorsqu'elles ont rempli leur rôle.

## Deux types

- Une **ligne de construction** ({{cmd:XLINE}}) se prolonge sans fin dans les deux sens.
- Une **demi-droite** ({{cmd:RAY}}) part d'un point et se prolonge sans fin dans un seul sens.

Les deux sont tracées sur toute la zone de dessin, quel que soit le zoom, en écran partagé et dans les fenêtres de présentation d'une feuille. {{ui:Étendue}} les exclut, de sorte que le zoom sur le dessin cadre toujours ce que vous avez tracé.

## Tracer des lignes de construction

1. Cliquez sur {{ui:Dessiner}} › {{ui:Plus}} › {{ui:Ligne de construction}}, ou tapez `XL` et appuyez sur {{key:Enter}}.
2. Cliquez sur un point. Chaque clic suivant ajoute une ligne de construction passant par le premier point et par celui sur lequel vous cliquez.
3. Appuyez sur {{key:Enter}} pour terminer.

Au lieu du premier point, vous pouvez taper une option :

| Option | Ce qu'elle fait |
|---|---|
| `H` (Hor) | Lignes horizontales, une par point cliqué. |
| `V` (Ver) | Lignes verticales passant par chaque point. |
| `A` (Ang) | Lignes à un angle que vous saisissez (en degrés, dans le sens antihoraire depuis l'axe X), passant par chaque point. `R` (Référence) mesure l'angle à partir d'une ligne que vous choisissez. |
| `B` (Bisect) | Cliquez sur le coin, puis sur un point le long d'un côté : chaque point cliqué le long de l'autre côté ajoute la ligne à mi-chemin entre les deux. |
| `O` (Décaler) | Saisissez une distance, choisissez une ligne, puis cliquez du côté voulu : une ligne de construction, parallèle, située à cette distance. `T` (Passant) la place par un point que vous cliquez à la place. La distance est mémorisée pour la fois suivante. |

## Tracer des demi-droites

1. Cliquez sur {{ui:Dessiner}} › {{ui:Plus}} › {{ui:Demi-droite}}, ou tapez `RAY` et appuyez sur {{key:Enter}}.
2. Cliquez à l'endroit où les demi-droites commencent.
3. Cliquez sur un point que chaque demi-droite doit traverser. Appuyez sur {{key:Enter}} pour terminer.

## Les accrocher et les ajuster

Les lignes de construction et les demi-droites acceptent les accrochages Proche, Perpendiculaire et Intersection. Elles n'ont ni extrémité ni milieu : Extrémité et Milieu ne trouvent donc rien sur elles.

Elles se coupent et se font couper comme les autres lignes avec {{cmd:TRIM}} et {{cmd:BREAK}} :

- Ajustez une extrémité d'une ligne de construction : elle devient une demi-droite partant de la coupe.
- Ajustez la partie éloignée d'une demi-droite : elle devient une ligne ordinaire.
- Coupez une ligne de construction en un point : vous obtenez deux demi-droites.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} et {{cmd:STRETCH}} fonctionnent aussi sur elles. Une sélection par fenêtre ne les retient jamais, car aucune fenêtre ne peut contenir la totalité d'une ligne sans fin ; une fenêtre de capture ou un clic le permet.

:::note
Un DWG (toutes versions) et un DXF 2000 les conservent comme lignes de construction. Le DXF R12 n'en possède pas : elles y deviennent des lignes traversant le dessin, et l'enregistrement le signale. Un tracé ou un PDF ne les dessine que sur la zone qui s'imprime.
:::

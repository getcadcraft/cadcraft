---
title: Useu paràmetres i equacions
summary: Doneu noms a les mides, controleu-les amb expressions com `width / 2`, i escriviu un número en una mida controlada per canviar el que la controla.
keywords: paràmetres, par, gestor de paràmetres, equacions, expressions, variables, bidireccional, intenció de disseny, paràmetre d'usuari, fx
from: 650b9844
---

## Una taula per a cada mida

El tauler {{ui:Paràmetres}} (el botó {{ui:Paràmetres}} del grup {{ui:Paramètric}}, o escriviu {{cmd:PARAMETERS}}) enumera totes les restriccions dimensionals (`d1`, `rad1`, `dia1`, `ang1`, o el nom que hi heu donat) i els vostres propis paràmetres junts. Qualsevol nom es pot usar en qualsevol expressió.

Cada fila té:

- **Nom**: escriviu-ne un de nou per canviar-lo de nom; cada expressió que l'usa el segueix.
- **Expressió**: un número (`40`) o una expressió (`width / 2 + gap`). Escriviu-hi i premeu {{key:Enter}}: el dibuix segueix.
- **Valor**: el que resulta. En una fila que una expressió controla, també podeu escriure un número aquí: CadCraft calcula el paràmetre que hi ha darrere. Amb `d1 = width / 2`, escriure `30` al valor de d1 fixa `width` a 60.

Quan dos paràmetres controlen un valor (`width / 2 + gap`), un diàleg pregunta quin canviar. Cada canvi és un sol pas per desfer ({{key:Mod+Z}}).

## Afegiu-ne un de propi

1. Obriu el tauler {{ui:Paràmetres}}.
2. Escriviu un nom (`gap`) i un valor (`10`), després trieu {{ui:Afegeix}}.
3. Useu-lo: a l'expressió de d1, escriviu `width / 2 + gap` i premeu {{key:Enter}}.

Els noms comencen amb una lletra o `_` i contenen lletres, dígits i `_`. Els noms de funció, `pi` i els noms d'unitat no poden ser noms.

## Expressions

| Escriviu | Vol dir |
|---|---|
| `+ - * / ^ %` | suma, resta, multiplicació, divisió, potència, residu |
| `( )` | agrupació |
| `sin cos tan asin acos atan atan2` | trigonometria en graus |
| `sqrt pow exp ln log abs sign` | arrels, potències, logaritmes |
| `ceil floor int round min max` | arrodoniment i límits |
| `if(a > b, x, y)` | una elecció |
| `pi` | 3.14159… |

Els números poden portar una unitat: `25mm`, `1in`, `2'`, `90deg`. Les longituds amb unitat es converteixen en mil·límetres, així que useu unitats només en dibuixos acotats en mil·límetres; en qualsevol altre cas escriviu números simples.

## A la línia d'ordres

`-PARAMETERS` fa el mateix sense el tauler: `N` nou, `E` edita (també una restricció dimensional), `R` canvia el nom, `D` suprimeix, `?` llista.

## Què es rebutja

- Una expressió que s'usa a si mateixa, directament o a través d'altres: «width, d1 s'usen mútuament».
- Un valor que una mida no pot prendre: una longitud negativa, un angle superior a 180°.
- Un valor que el dibuix no pot prendre amb les seves altres restriccions: no canvia res, i el missatge indica les restriccions que ho impedeixen.
- Suprimir un paràmetre que alguna cosa usa: el tauler ofereix escriure'n primer el valor en aquells llocs. El nom d'una restricció dimensional se suprimeix suprimint la restricció.

---
title: Utiliser les paramètres et les équations
summary: Nommez des cotes, pilotez-les avec des expressions comme largeur / 2, et saisissez un nombre sur une cote pilotée pour modifier ce qui la pilote.
keywords: paramètres, par, gestionnaire de paramètres, équations, expressions, variables, bidirectionnel, intention de conception, paramètre utilisateur, fx
from: 650b9844
---

## Un seul tableau pour toutes les cotes

Le panneau {{ui:Paramètres}} (le bouton {{ui:Paramètres}} du groupe {{ui:Paramétrique}}, ou saisissez {{cmd:PARAMETERS}}) liste ensemble chaque contrainte dimensionnelle (`d1`, `rad1`, `dia1`, `ang1`, ou le nom que vous lui avez donné) et vos propres paramètres. Tout nom peut être utilisé dans n'importe quelle expression.

Chaque ligne comporte :

- **Nom** : saisissez-en un nouveau pour le renommer ; chaque expression qui l'utilise suit.
- **Expression** : un nombre (`40`) ou une expression (`largeur / 2 + espacement`). Saisissez-la et appuyez sur {{key:Enter}} : le dessin suit.
- **Valeur** : le résultat du calcul. Sur une ligne qu'une expression pilote, vous pouvez aussi saisir un nombre ici : CadCraft calcule le paramètre qui se trouve derrière. Avec `d1 = largeur / 2`, saisir `30` dans la valeur de d1 règle `largeur` à 60.

Quand deux paramètres pilotent une valeur (`largeur / 2 + espacement`), une boîte de dialogue demande lequel modifier. Chaque modification est une étape d'annulation ({{key:Mod+Z}}).

## Ajouter le vôtre

1. Ouvrez le panneau {{ui:Paramètres}}.
2. Saisissez un nom (`espacement`) et une valeur (`10`), puis choisissez {{ui:Ajouter}}.
3. Utilisez-le : dans l'expression de d1, saisissez `largeur / 2 + espacement` et appuyez sur {{key:Enter}}.

Les noms commencent par une lettre ou `_` et ne contiennent que des lettres, des chiffres et `_`. Les noms de fonctions, `pi` et les noms d'unités ne peuvent pas servir de nom.

## Expressions

| Saisir | Signifie |
|---|---|
| `+ - * / ^ %` | addition, soustraction, multiplication, division, puissance, reste |
| `( )` | regroupement |
| `sin cos tan asin acos atan atan2` | trigonométrie en degrés |
| `sqrt pow exp ln log abs sign` | racines, puissances, logarithmes |
| `ceil floor int round min max` | arrondis et limites |
| `if(a > b, x, y)` | un choix |
| `pi` | 3.14159… |

Les nombres peuvent porter une unité : `25mm`, `1in`, `2'`, `90deg`. Les longueurs avec une unité sont converties en millimètres ; n'utilisez donc les unités que dans les dessins cotés en millimètres, et ailleurs saisissez des nombres simples.

## Dans la ligne de commande

`-PARAMETERS` fait la même chose sans le panneau : `N` nouveau, `E` modifier (une contrainte dimensionnelle aussi), `R` renommer, `D` supprimer, `?` lister.

## Ce qui est refusé

- Une expression qui se réfère à elle-même, directement ou par d'autres : « width, d1 se réfèrent l'un à l'autre. »
- Une valeur qu'une cote ne peut pas prendre : une longueur négative, un angle supérieur à 180°.
- Une valeur que le dessin ne peut pas prendre avec ses autres contraintes : rien ne change, et le message nomme les contraintes qui gênent.
- Supprimer un paramètre utilisé par une autre expression : le panneau propose d'abord d'écrire sa valeur dans ces expressions. Le nom d'une contrainte dimensionnelle se supprime en supprimant la contrainte.

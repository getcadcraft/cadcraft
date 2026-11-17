---
title: Usar parámetros y ecuaciones
summary: Asigne nombres a las medidas, controle las medidas con expresiones como width / 2, y escriba un número en una medida controlada para cambiar lo que la controla.
keywords: parámetros, par, administrador de parámetros, ecuaciones, expresiones, variables, bidireccional, intención de diseño, parámetro de usuario, fx
from: 650b9844
---

## Una tabla para cada medida

El panel {{ui:Parámetros}} (el botón {{ui:Parámetros}} del grupo {{ui:Paramétrico}}, o escriba {{cmd:PARAMETERS}}) enumera cada restricción dimensional (`d1`, `rad1`, `dia1`, `ang1`, o el nombre que le dio) y sus propios parámetros juntos. Cualquier nombre puede usarse en cualquier expresión.

Cada fila tiene:

- **Nombre**: escriba uno nuevo para renombrarla; cada expresión que lo usa lo sigue.
- **Expresión**: un número (`40`) o una expresión (`width / 2 + gap`). Escriba en ella y pulse {{key:Enter}}: el dibujo se actualiza.
- **Valor**: el resultado de la expresión. En una fila que controla una expresión, también puede escribir aquí un número: CadCraft calcula el parámetro que hay detrás. Con `d1 = width / 2`, escribir `30` en el valor de d1 fija `width` en 60.

Cuando dos parámetros controlan un valor (`width / 2 + gap`), un cuadro pregunta cuál cambiar. Cada cambio es un paso de deshacer ({{key:Mod+Z}}).

## Añadir los suyos

1. Abra el panel {{ui:Parámetros}}.
2. Escriba un nombre (`gap`) y un valor (`10`), y después elija {{ui:Añadir}}.
3. Úselo: en la expresión de d1, escriba `width / 2 + gap` y pulse {{key:Enter}}.

Los nombres empiezan con una letra o `_` y contienen letras, dígitos y `_`. Los nombres de función, `pi` y los nombres de unidad no pueden usarse como nombres.

## Expresiones

| Escriba | Significa |
|---|---|
| `+ - * / ^ %` | suma, resta, multiplicación, división, potencia, resto |
| `( )` | agrupación |
| `sin cos tan asin acos atan atan2` | trigonometría en grados |
| `sqrt pow exp ln log abs sign` | raíces, potencias, logaritmos |
| `ceil floor int round min max` | redondeo y límites |
| `if(a > b, x, y)` | una elección |
| `pi` | 3.14159… |

Los números pueden llevar una unidad: `25mm`, `1in`, `2'`, `90deg`. Las longitudes con unidad se convierten en milímetros, así que use unidades solo en dibujos medidos en milímetros; en los demás, escriba números simples.

## En la línea de comandos

`-PARAMETERS` hace lo mismo sin el panel: `N` nuevo, `E` editar (también una restricción dimensional), `R` renombrar, `D` eliminar, `?` listar.

## Lo que se rechaza

- Una expresión que se usa a sí misma, directa o indirectamente a través de otras: "width, d1 se usan mutuamente".
- Un valor que una medida no puede tomar: una longitud negativa, o un ángulo mayor de 180°.
- Un valor que el dibujo no puede admitir con sus otras restricciones: no cambia nada, y el mensaje indica qué restricciones estorban.
- Eliminar un parámetro que algo usa: el panel ofrece escribir antes su valor en esos lugares. El nombre de una restricción dimensional se elimina al eliminar la restricción.

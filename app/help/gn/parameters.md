---
title: Usar parámetros y ecuaciones
summary: Nombrá medidas, controlalas con expresiones como ancho / 2, y escribí un número en una medida controlada para cambiar lo que la controla.
keywords: parámetros, par, administrador de parámetros, ecuaciones, expresiones, variables, bidireccional, intención de diseño, parámetro de usuario, fx
from: 650b9844
---

## Una tabla para cada medida

El panel {{ui:Parámetros}} (el botón {{ui:Parámetros}} en el grupo {{ui:Paramétrico}}, o escribí {{cmd:PARAMETERS}}) lista cada restricción dimensional (`d1`, `rad1`, `dia1`, `ang1`, o el nombre que le diste) y tus propios parámetros juntos. Cualquier nombre sirve en cualquier expresión.

Cada fila tiene:

- **Nombre**: escribí uno nuevo para renombrarla; cada expresión que lo usa lo sigue.
- **Expresión**: un número (`40`) o una expresión (`ancho / 2 + espacio`). Escribí en ella y presioná {{key:Enter}}: el plano se actualiza.
- **Valor**: lo que resulta. En una fila que controla una expresión, también podés escribir un número acá: CadCraft calcula el parámetro detrás. Con `d1 = ancho / 2`, escribir `30` en el valor de d1 pone `ancho` en 60.

Cuando dos parámetros controlan un valor (`ancho / 2 + espacio`), un diálogo pregunta cuál cambiar. Cada cambio es un paso de deshacer ({{key:Mod+Z}}).

## Agregar los tuyos

1. Abrí el panel {{ui:Parámetros}}.
2. Escribí un nombre (`espacio`) y un valor (`10`), luego elegí {{ui:Agregar}}.
3. Usalo: en la expresión de d1, escribí `ancho / 2 + espacio` y presioná {{key:Enter}}.

Los nombres empiezan con una letra o `_` y contienen letras, dígitos y `_`. Los nombres de función, `pi` y los nombres de unidad no pueden usarse como nombres.

## Expresiones

| Escribir | Significa |
|---|---|
| `+ - * / ^ %` | sumar, restar, multiplicar, dividir, potencia, resto |
| `( )` | agrupar |
| `sin cos tan asin acos atan atan2` | trigonometría en grados |
| `sqrt pow exp ln log abs sign` | raíces, potencias, logaritmos |
| `ceil floor int round min max` | redondeo y límites |
| `if(a > b, x, y)` | una elección |
| `pi` | 3.14159… |

Los números pueden llevar unidad: `25mm`, `1in`, `2'`, `90deg`. Las longitudes con unidad se convierten en milímetros, así que usá unidades solo en planos medidos en milímetros; en otros casos escribí números simples.

## En la línea de comando

`-PARAMETERS` hace lo mismo sin el panel: `N` nuevo, `E` editar (también una restricción dimensional), `R` renombrar, `D` borrar, `?` listar.

## Lo que se rechaza

- Una expresión que se usa a sí misma, directa o indirectamente: "ancho, d1 se usan entre sí."
- Un valor que una medida no puede tomar: una longitud negativa, un ángulo mayor de 180°.
- Un valor que el plano no puede tomar con sus otras restricciones: nada cambia, y el mensaje nombra las restricciones que estorban.
- Borrar un parámetro que algo usa: el panel ofrece escribir primero su valor en esos lugares. El nombre de una restricción dimensional se borra borrando la restricción.

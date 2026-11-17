---
title: Usar parámetros e ecuacións
summary: Dea nome aos tamaños, dirixa o debuxo con expresións como width / 2, e escriba un número nun tamaño dirixido para cambiar o que o dirixe.
keywords: parámetros, par, xestor de parámetros, ecuacións, expresións, variables, bidireccional, intención de deseño, parámetro de usuario, fx
from: 650b9844
---

## Unha táboa para todos os tamaños

O panel {{ui:Parámetros}} (o botón {{ui:Parámetros}} do grupo {{ui:Paramétrico}}, ou escriba {{cmd:PARAMETERS}}) enumera todas as restricións dimensionais (`d1`, `rad1`, `dia1`, `ang1`, ou o nome que lle deu) e os seus propios parámetros xuntos. Calquera nome pode usarse en calquera expresión.

Cada fila ten:

- **Nome**: escriba un novo para cambialo; todas as expresións que o usan seguen o cambio.
- **Expresión**: un número (`40`) ou unha expresión (`width / 2 + gap`). Escriba nela e prema {{key:Enter}}: o debuxo segue o cambio.
- **Valor**: o resultado. Nunha fila que unha expresión dirixe, tamén pode escribir aquí un número: CadCraft calcula o parámetro que hai detrás. Con `d1 = width / 2`, escribir `30` no valor de d1 fixa `width` en 60.

Cando dous parámetros dirixen un valor (`width / 2 + gap`), un diálogo pregunta cal cambiar. Cada cambio é un paso de desfacer ({{key:Mod+Z}}).

## Engadir os seus

1. Abra o panel {{ui:Parámetros}}.
2. Escriba un nome (`gap`) e un valor (`10`), e logo escolla {{ui:Engadir}}.
3. Use o parámetro: na expresión de d1, escriba `width / 2 + gap` e prema {{key:Enter}}.

Os nomes comezan por unha letra ou `_` e conteñen letras, números e `_`. Os nomes de funcións, `pi` e os nomes de unidades non poden usarse como nomes.

## Expresións

| Escriba | Significa |
|---|---|
| `+ - * / ^ %` | sumar, restar, multiplicar, dividir, potencia, resto |
| `( )` | agrupación |
| `sin cos tan asin acos atan atan2` | trigonometría en graos |
| `sqrt pow exp ln log abs sign` | raíces, potencias, logaritmos |
| `ceil floor int round min max` | redondeo e límites |
| `if(a > b, x, y)` | unha elección |
| `pi` | 3.14159… |

Os números poden levar unha unidade: `25mm`, `1in`, `2'`, `90deg`. As lonxitudes con unidade convértense en milímetros, así que use unidades só en debuxos medidos en milímetros; noutros casos escriba números simples.

## Na liña de comandos

`-PARAMETERS` fai o mesmo sen o panel: `N` novo, `E` editar (tamén unha restrición dimensional), `R` cambiar o nome, `D` eliminar, `?` listar.

## O que se rexeita

- Unha expresión que se usa a si mesma, directa ou indirectamente: «width, d1 úsanse mutuamente».
- Un valor que un tamaño non pode tomar: unha lonxitude negativa, ou un ángulo superior a 180°.
- Un valor que o debuxo non pode tomar coas súas outras restricións: nada cambia, e a mensaxe nomea as restricións que o impiden.
- Eliminar un parámetro que algo usa: o panel ofrece escribir antes o seu valor nesas expresións. O nome dunha restrición dimensional elimínase eliminando a restrición.

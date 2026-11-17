---
title: Usar parâmetros e equações
summary: Dê nomes a dimensões, comande-as com expressões como width / 2, e escreva um número numa dimensão comandada para alterar o que a comanda.
keywords: parâmetros, par, gestor de parâmetros, equações, expressões, variáveis, bidirecional, intenção de projeto, parâmetro de utilizador, fx
from: 650b9844
---

## Uma tabela para todas as dimensões

O painel {{ui:Parâmetros}} (o botão {{ui:Parâmetros}} no grupo {{ui:Paramétrico}}, ou escreva {{cmd:PARAMETERS}}) lista todas as restrições dimensionais (`d1`, `rad1`, `dia1`, `ang1`, ou o nome que lhe deu) e os seus próprios parâmetros, em conjunto. Qualquer nome pode ser usado em qualquer expressão.

Cada linha tem:

- **Nome**: escreva um novo para o renomear; toda a expressão que o usa segue-o.
- **Expressão**: um número (`40`) ou uma expressão (`width / 2 + gap`). Escreva-a e prima {{key:Enter}}: o desenho acompanha.
- **Valor**: o que resulta. Numa linha que uma expressão comanda, pode escrever aqui também um número: o CadCraft calcula o parâmetro por trás dele. Com `d1 = width / 2`, escrever `30` no valor de d1 define `width` como 60.

Quando dois parâmetros comandam um valor (`width / 2 + gap`), uma caixa pergunta qual deles alterar. Cada alteração é um único passo de anulação ({{key:Mod+Z}}).

## Acrescentar os seus

1. Abra o painel {{ui:Parâmetros}}.
2. Escreva um nome (`gap`) e um valor (`10`), depois escolha {{ui:Adicionar}}.
3. Use-o: na expressão de d1, escreva `width / 2 + gap` e prima {{key:Enter}}.

Os nomes começam com uma letra ou `_` e contêm letras, algarismos e `_`. Nomes de funções, `pi` e nomes de unidades não podem ser nomes.

## Expressões

| Escreva | Significa |
|---|---|
| `+ - * / ^ %` | somar, subtrair, multiplicar, dividir, potência, resto |
| `( )` | agrupamento |
| `sin cos tan asin acos atan atan2` | trigonometria em graus |
| `sqrt pow exp ln log abs sign` | raízes, potências, logaritmos |
| `ceil floor int round min max` | arredondamentos e limites |
| `if(a > b, x, y)` | uma escolha |
| `pi` | 3.14159… |

Os números podem levar uma unidade: `25mm`, `1in`, `2'`, `90deg`. Os comprimentos com unidade são convertidos em milímetros, por isso use unidades só em desenhos medidos em milímetros; noutros casos escreva números simples.

## Na linha de comandos

`-PARAMETERS` faz o mesmo sem o painel: `N` novo, `E` editar (também uma restrição dimensional), `R` renomear, `D` eliminar, `?` listar.

## O que é recusado

- Uma expressão que usa a si própria, diretamente ou através de outras: "width, d1 usam-se mutuamente."
- Um valor que uma dimensão não pode tomar: um comprimento negativo, ou um ângulo acima de 180°.
- Um valor que o desenho não pode tomar com as suas outras restrições: nada muda, e a mensagem indica as restrições que o impedem.
- Eliminar um parâmetro que algo usa: o painel oferece-se para escrever primeiro o seu valor nesses sítios. O nome de uma restrição dimensional é eliminado ao eliminar a restrição.

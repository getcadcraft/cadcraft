---
title: Usar parâmetros e equações
summary: Dê nomes a dimensões, controle-as com expressões como largura / 2, e digite um número em uma dimensão conduzida para alterar o que a conduz.
keywords: parâmetros, par, gerenciador de parâmetros, equações, expressões, variáveis, bidirecional, intenção de projeto, parâmetro do usuário, fx
from: 650b9844
---

## Uma tabela para todas as dimensões

O painel {{ui:Parâmetros}} (o botão {{ui:Parâmetros}} no grupo {{ui:Paramétrico}}, ou digite {{cmd:PARAMETERS}}) lista cada restrição dimensional (`d1`, `rad1`, `dia1`, `ang1`, ou o nome que você deu) e seus próprios parâmetros juntos. Qualquer nome pode ser usado em qualquer expressão.

Cada linha tem:

- **Nome**: digite um novo para renomear; toda expressão que o usa acompanha.
- **Expressão**: um número (`40`) ou uma expressão (`largura / 2 + folga`). Digite nela e pressione {{key:Enter}}: o desenho acompanha.
- **Valor**: o que ela resulta. Em uma linha que uma expressão conduz, você pode digitar um número aqui também: o CadCraft calcula o parâmetro por trás dele. Com `d1 = largura / 2`, digitar `30` no valor de d1 define `largura` como 60.

Quando dois parâmetros conduzem um valor (`largura / 2 + folga`), uma caixa pergunta qual alterar. Cada alteração é um passo de desfazer ({{key:Mod+Z}}).

## Adicione os seus

1. Abra o painel {{ui:Parâmetros}}.
2. Digite um nome (`folga`) e um valor (`10`), depois escolha {{ui:Adicionar}}.
3. Use-o: na expressão de d1, digite `largura / 2 + folga` e pressione {{key:Enter}}.

Nomes começam com uma letra ou `_` e contêm letras, dígitos e `_`. Nomes de função, `pi` e nomes de unidade não podem ser nomes.

## Expressões

| Escreva | Significa |
|---|---|
| `+ - * / ^ %` | somar, subtrair, multiplicar, dividir, potência, resto |
| `( )` | agrupamento |
| `sin cos tan asin acos atan atan2` | trigonometria em graus |
| `sqrt pow exp ln log abs sign` | raízes, potências, logaritmos |
| `ceil floor int round min max` | arredondamento e limites |
| `if(a > b, x, y)` | uma escolha |
| `pi` | 3.14159… |

Números podem ter uma unidade: `25mm`, `1in`, `2'`, `90deg`. Comprimentos com unidade são convertidos em milímetros, então use unidades só em desenhos medidos em milímetros; em outros casos digite números simples.

## Na linha de comando

`-PARAMETERS` faz o mesmo sem o painel: `N` novo, `E` editar (uma restrição dimensional também), `R` renomear, `D` excluir, `?` listar.

## O que é recusado

- Uma expressão que usa a si mesma, direta ou indiretamente por outras: "largura, d1 se usam mutuamente."
- Um valor que uma dimensão não pode ter: um comprimento negativo, um ângulo acima de 180°.
- Um valor que o desenho não pode ter com suas outras restrições: nada muda, e a mensagem nomeia as restrições no caminho.
- Excluir um parâmetro que algo usa: o painel oferece escrever o valor dele nelas antes. O nome de uma restrição dimensional é excluído excluindo a restrição.

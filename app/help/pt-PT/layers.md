---
title: Organizar um desenho com camadas
summary: Crie camadas para paredes, portas e notas, defina cores, torne uma camada atual e desligue camadas, congele-as, bloqueie-as ou impeça que sejam impressas.
keywords: camada, camadas, la, camada atual, congelar, descongelar, bloquear, desligar, ligar, imprimir, não imprimir, cor, colorir, propriedades da camada, layiso, layuniso, isolar, layoff, layfrz, laymcur, layon, laythw, renomear, laymrg, fundir, laydel, eliminar camada
from: cd033591
---

## O que vai criar

Três camadas, Paredes, Portas e Notas, cada uma com a sua cor, com objetos desenhados em cada uma e movidos entre elas.

## O painel Camadas

As camadas estão no painel à esquerda, em {{ui:Camadas}}. Cada linha mostra, da esquerda para a direita:

- um ponto: preenchido para a camada **atual**, onde vão os novos objetos;
- uma amostra de cor;
- o nome da camada;
- quatro botões: ligar/desligar (olho), congelar (floco de neve), bloquear (cadeado) e imprimir (impressora).

Todo o desenho tem uma camada chamada `0`. Escrever `LA` e premir {{key:Enter}} leva ao painel.

## Criar camadas

1. Clique em {{ui:Nova camada}} acima da lista. Abre-se uma caixa para o nome.
2. Escreva `Paredes` e prima {{key:Enter}} (ou clique em {{ui:Adicionar}}).

A barra de estado diz "Camada Paredes adicionada e tornada atual." A nova camada recebe a cor 7 (preto no tema claro, branco no escuro).

3. Clique de novo em {{ui:Nova camada}}, escreva `Portas` e prima {{key:Enter}}.
4. Clique de novo em {{ui:Nova camada}}, escreva `Notas` e prima {{key:Enter}}.

Notas é agora a atual.

## Dar uma cor a cada camada

1. Clique na amostra de cor na linha Paredes. Abre-se o seletor de cores do seu sistema.
2. Escolha uma cor e confirme.

A amostra e tudo o que estiver em Paredes com a cor {{ui:PorCamada}} mudam.

:::note
Uma cor escolhida que corresponda a uma das 255 cores CAD padrão fica guardada como esse número. Qualquer outra cor é mantida exatamente no CadCraft, mas é guardada como a cor padrão mais próxima num ficheiro DWG ou DXF.
:::

## Desenhar numa camada

1. Clique no nome **Paredes** na lista. O ponto fica preenchido e a barra de estado diz "Camada atual: Paredes".
2. Desenhe um retângulo (`REC`). Fica em Paredes.
3. Clique em **Portas** e desenhe um arco (`A`). Fica em Portas.

Também pode escolher a camada atual em {{ui:Definições atuais}} à direita (sem nada selecionado), em {{ui:Camada}}.

## Mover objetos para outra camada

1. Selecione os objetos.
2. No painel da direita, escolha a nova camada em {{ui:Camada}}.

Passam para essa camada e tomam a cor dela se a cor deles for {{ui:PorCamada}}.

## Desligar, congelar, bloquear e imprimir

| Botão | O que faz |
|---|---|
| Ligar/desligar (olho) | Oculta os objetos da camada. Não podem ser vistos, selecionados nem apanhados por snap. |
| Congelar (floco de neve) | Efeito igual a desligar no CadCraft. Mantido separado porque outros programas o tratam de forma diferente, e a definição fica guardada. |
| Bloquear (cadeado) | Os objetos continuam visíveis e pode fazer snap a eles, mas não podem ser selecionados nem alterados. Útil para um fundo sobre o qual vai decalcar. |
| Imprimir (impressora) | Quando ativado, a camada é mostrada no ecrã mas **fica fora das impressões** e dos PDF. Use-a para linhas de construção e notas pessoais. |

Passe o rato sobre um botão para ver o que fará ("Desligar", "Congelar", "Bloquear", "Não imprimir esta camada").

Não pode desligar a camada atual: a barra de estado diz "Essa é a camada atual. Torne outra camada atual primeiro." Clicar no nome de uma camada para a tornar atual também a liga e a descongela.

Cada alteração de camada, no painel ou por um comando, é um passo de anulação: {{key:Mod+Z}} repõe-na.

## Trabalhar nas camadas escolhendo objetos

Não precisa de saber o nome de uma camada: escolha um objeto nela. Escreva o comando ou abra {{ui:Ferramentas}} no topo do painel {{ui:Camadas}}.

| Comando | O que faz |
|---|---|
| {{cmd:LAYISO}} | Selecione objetos e prima {{key:Enter}}: só as respetivas camadas ficam ligadas; todas as outras são desligadas. Se a camada atual estiver desligada, uma das camadas isoladas passa a ser a atual. |
| {{cmd:LAYUNISO}} | Volta a ligar as camadas que o último {{cmd:LAYISO}} desligou, e devolve a camada atual que tinha alterado. |
| {{cmd:LAYOFF}} | Clique em objetos um a um: a camada de cada um é desligada. Escreva `U` para anular o último, {{key:Enter}} para terminar. |
| {{cmd:LAYFRZ}} | O mesmo, congelando cada camada. |
| {{cmd:LAYMCUR}} | Clique num objeto: a respetiva camada torna-se atual (e fica ligada e descongelada). Com um objeto já selecionado, usa-se esse. |
| {{cmd:LAYON}} | Liga todas as camadas. |
| {{cmd:LAYTHW}} | Descongela todas as camadas. |

A camada atual nunca é desligada nem congelada desta forma: o histórico indica-o, e pode tornar outra camada atual com {{cmd:LAYMCUR}} primeiro. Escolher uma referência de bloco usa a camada dessa própria referência.

## Renomear, fundir e eliminar camadas

- {{cmd:RENAME}}: escreva `LA`, o nome antigo e o novo. Todos os objetos da camada acompanham a mudança. (`B` renomeia um bloco da mesma forma, com todas as referências a ele.)
- {{cmd:LAYMRG}}: clique num objeto em cada camada a fundir (ou escreva `N` e um nome), prima {{key:Enter}}, depois escolha a camada de destino e responda `Y`. Os objetos passam para o destino — no modelo, nas folhas e dentro de blocos — e as camadas fundidas desaparecem.
- {{cmd:LAYDEL}}: escolha um objeto da camada (ou escreva `N` e o nome dela) e responda `Y`. A camada desaparece **com todos os objetos nela**, em todo o lado. A camada 0, DEFPOINTS e a camada atual não podem ser eliminadas.

Cada um é um passo de anulação. Os três estão em {{ui:Ferramentas}} no topo do painel {{ui:Camadas}}.

1. Clique numa linha de parede, depois escreva `LAYISO` e prima {{key:Enter}}. Só Paredes fica ligada.
2. Desenhe ou altere o que precisar em Paredes.
3. Escreva `LAYUNISO` e prima {{key:Enter}}. Portas e Notas voltam.

## Erros comuns

- **As novas linhas foram para a camada errada.** Verifique qual ponto está preenchido antes de desenhar. Uma camada nova torna-se atual assim que a adiciona.
- **Um objeto não seleciona.** A respetiva camada está bloqueada, desligada ou congelada.
- **A camada ainda imprime noutro programa.** O DXF R12 não consegue guardar "não imprimir". O CadCraft mantém a definição quando o desenho tem uma folha, mas outros programas vão imprimir essa camada.
- **Nomes de camadas em maiúsculas depois de guardar.** O DXF R12 guarda os nomes em maiúsculas, por isso `Paredes` volta como `PAREDES`, e os espaços passam a `_`. Um DWG guardado mantém os nomes como os escreveu.
- **Renomear, fundir ou eliminar uma camada.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} ou {{cmd:LAYDEL}} (também em {{ui:Ferramentas}}): consulte abaixo.

## Agrupar camadas

Mantenha a lista curta pondo as camadas em pastas, como Existente, Proposto e Serviços. Cada pasta pode ser recolhida, e os seus interruptores ligam ou desligam todas as camadas, congelam-nas ou bloqueiam-nas em conjunto. A camada atual nunca é desligada.

Em {{ui:Ferramentas}} no painel {{ui:Camadas}}, escolha {{ui:Adicionar grupos predefinidos}} para um conjunto pensado para pequenas obras residenciais, {{ui:Agrupar por nome}} para agrupar camadas que partilham um prefixo (`E-Paredes`, `E-Portas`), ou {{ui:Novo grupo}}. Arraste uma camada para uma pasta, ou use a lista acima das camadas para a camada atual. Escreva em {{ui:Procurar uma camada}} para reduzir a lista. `LAYGROUP` (`LG`) faz o mesmo na linha de comandos.

As próprias camadas não mudam, por isso outros programas CAD as veem como uma lista simples. O CadCraft guarda os grupos no ficheiro.

---
title: Organizar um desenho com camadas
summary: Crie camadas para paredes, portas e anotações, defina cores, torne uma camada atual e desligue, congele, bloqueie ou impeça a plotagem de camadas.
keywords: camada, camadas, la, camada atual, congelar, descongelar, bloquear, desbloquear, desligar, ligar, plotar, não plotar, cor, propriedades da camada, layiso, layuniso, isolar, layoff, layfrz, laymcur, layon, laythw, renomear, laymrg, mesclar, laydel, excluir camada
from: cd033591
---

## O que você vai criar

Três camadas, Paredes, Portas e Notas, cada uma com sua própria cor, com objetos desenhados em cada uma e movidos entre elas.

## O painel Camadas

As camadas ficam no painel à esquerda, em {{ui:Camadas}}. Cada linha mostra, da esquerda para a direita:

- um ponto: preenchido para a camada **atual**, onde os novos objetos vão;
- uma amostra de cor;
- o nome da camada;
- quatro botões: ligar/desligar (olho), congelar (floco de neve), bloquear (cadeado) e plotar (impressora).

Todo desenho tem uma camada chamada `0`. Digitar `LA` e pressionar {{key:Enter}} leva ao painel.

## Criar camadas

1. Clique em {{ui:Nova camada}} acima da lista. Abre-se uma caixa de nome.
2. Digite `Paredes` e pressione {{key:Enter}} (ou clique em {{ui:Adicionar}}).

A barra de status informa "Camada Paredes adicionada e tornada atual." A nova camada recebe a cor 7 (preto no tema claro, branco no escuro).

3. Clique em {{ui:Nova camada}} novamente, digite `Portas` e pressione {{key:Enter}}.
4. Clique em {{ui:Nova camada}} novamente, digite `Notas` e pressione {{key:Enter}}.

Notas agora é a atual.

## Dar uma cor a cada camada

1. Clique na amostra de cor na linha Paredes. Abre-se o seletor de cores do seu sistema.
2. Escolha uma cor e confirme.

A amostra e tudo em Paredes com cor {{ui:PorCamada}} mudam.

:::note
Uma cor escolhida que corresponda a uma das 255 cores padrão de CAD é armazenada como esse número. Qualquer outra cor é mantida exatamente no CadCraft, mas é salva como a cor padrão mais próxima em um arquivo DWG ou DXF.
:::

## Desenhar em uma camada

1. Clique no nome **Paredes** na lista. Seu ponto fica preenchido e a barra de status informa "Camada atual: Paredes".
2. Desenhe um retângulo (`REC`). Ele vai para Paredes.
3. Clique em **Portas** e desenhe um arco (`A`). Ele vai para Portas.

Você também pode escolher a camada atual em {{ui:Configurações atuais}} à direita (sem nada selecionado), em {{ui:Camada}}.

## Mover objetos para outra camada

1. Selecione os objetos.
2. No painel da direita, escolha a nova camada em {{ui:Camada}}.

Eles passam para essa camada e assumem a cor dela se a cor deles for {{ui:PorCamada}}.

## Desligar, congelar, bloquear e plotar

| Botão | O que faz |
|---|---|
| Ligar/desligar (olho) | Oculta os objetos da camada. Eles não podem ser vistos, selecionados nem usados em snap. |
| Congelar (floco de neve) | No CadCraft, tem o mesmo efeito de desligar. Mantido separado porque outros programas os tratam de forma diferente, e a configuração é salva. |
| Bloquear (cadeado) | Os objetos continuam visíveis e você pode fazer snap neles, mas não podem ser selecionados nem alterados. Bom para um fundo sobre o qual você decalca. |
| Plotar (impressora) | Quando pressionado, a camada é exibida na tela, mas **fica fora das plotagens** e dos PDFs. Use-o para linhas de construção e notas para você mesmo. |

Passe o cursor sobre um botão para ver o que ele faz ("Desligar", "Congelar", "Bloquear", "Não plotar esta camada").

Você não pode desligar a camada atual: a barra de status informa "Esta é a camada atual. Torne outra camada atual primeiro." Clicar no nome de uma camada para torná-la atual também a liga e a descongela.

Cada alteração de camada, no painel ou por comando, é um passo de desfazer: {{key:Mod+Z}} a desfaz.

## Trabalhar nas camadas escolhendo objetos

Você não precisa saber o nome da camada: escolha um objeto nela. Digite o comando ou abra {{ui:Ferramentas}} no topo do painel {{ui:Camadas}}.

| Comando | O que faz |
|---|---|
| {{cmd:LAYISO}} | Selecione objetos e pressione {{key:Enter}}: somente as camadas deles permanecem ligadas, e todas as outras são desligadas. Se a camada atual for desligada, uma das camadas isoladas se torna a atual. |
| {{cmd:LAYUNISO}} | Religa as camadas que o último {{cmd:LAYISO}} desligou e devolve a camada atual que ele alterou. |
| {{cmd:LAYOFF}} | Clique em objetos um após o outro: a camada de cada um é desligada. Digite `U` para desfazer o último, {{key:Enter}} para concluir. |
| {{cmd:LAYFRZ}} | O mesmo, congelando cada camada. |
| {{cmd:LAYMCUR}} | Clique em um objeto: a camada dele se torna a atual (e é ligada e descongelada). Com um objeto já selecionado, esse é o usado. |
| {{cmd:LAYON}} | Liga todas as camadas. |
| {{cmd:LAYTHW}} | Descongela todas as camadas. |

A camada atual nunca é desligada nem congelada dessa forma: o histórico informa isso, e você pode tornar outra camada atual com {{cmd:LAYMCUR}} antes. Escolher uma referência de bloco usa a camada da própria referência.

## Renomear, mesclar e excluir camadas

- {{cmd:RENAME}}: digite `LA`, o nome antigo e o novo. Todos os objetos da camada acompanham. (`B` renomeia um bloco do mesmo jeito, com todas as referências a ele.)
- {{cmd:LAYMRG}}: clique em um objeto de cada camada a mesclar (ou digite `N` e um nome), pressione {{key:Enter}}, depois escolha a camada de destino e responda `Y`. Os objetos passam para o destino — no modelo, nas folhas e dentro de blocos — e as camadas mescladas são removidas.
- {{cmd:LAYDEL}}: escolha um objeto da camada (ou `N` e o nome dela) e responda `Y`. A camada é excluída **junto com todos os objetos nela**, em todos os lugares. A camada 0, DEFPOINTS e a camada atual não podem ser excluídas.

Cada um é um passo de desfazer. Os três estão em {{ui:Ferramentas}} no topo do painel {{ui:Camadas}}.

1. Clique em uma linha de parede, depois digite `LAYISO` e pressione {{key:Enter}}. Somente Paredes permanece ligada.
2. Desenhe ou altere o que precisar em Paredes.
3. Digite `LAYUNISO` e pressione {{key:Enter}}. Portas e Notas voltam.

## Erros comuns

- **Novas linhas foram para a camada errada.** Verifique qual ponto está preenchido antes de desenhar. Uma nova camada se torna a atual assim que você a adiciona.
- **Um objeto não seleciona.** A camada dele está bloqueada, desligada ou congelada.
- **A camada ainda é impressa em outro programa.** O DXF R12 não consegue armazenar "não plotar". O CadCraft mantém a configuração para si quando o desenho tem uma folha, mas outros programas vão plotar essa camada.
- **Nomes de camadas em maiúsculas após salvar.** O DXF R12 armazena os nomes em maiúsculas, então `Paredes` volta como `PAREDES`, e espaços viram `_`. Um DWG salvo mantém os nomes como você os digitou.
- **Renomear, mesclar ou excluir uma camada.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} ou {{cmd:LAYDEL}} (também em {{ui:Ferramentas}}): veja acima.

## Agrupar camadas

Mantenha a lista curta colocando as camadas em pastas, como Existente, Proposto e Serviços. Cada pasta se recolhe, e suas opções ligam ou desligam todas as camadas dela, congelam ou bloqueiam todas juntas. A camada atual nunca é desligada.

Em {{ui:Ferramentas}} no painel Camadas, escolha {{ui:Adicionar grupos prontos}} para um conjunto feito para pequenas obras residenciais, {{ui:Agrupar por nome}} para agrupar camadas que compartilham um prefixo (`E-Paredes`, `E-Portas`), ou {{ui:Novo grupo}}. Arraste uma camada para uma pasta, ou use a lista acima das camadas para a camada atual. Digite em {{ui:Localizar uma camada}} para reduzir a lista. `LAYGROUP` (`LG`) faz o mesmo na linha de comando.

As próprias camadas não mudam, então outros programas CAD as veem como uma lista simples comum. O CadCraft mantém os grupos no arquivo.

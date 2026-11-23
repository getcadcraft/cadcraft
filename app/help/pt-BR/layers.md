---
title: Organizar um desenho com camadas
summary: Crie camadas para paredes, portas e notas, defina cores, torne uma camada atual e desligue, congele, bloqueie ou impeça camadas de sair na plotagem.
keywords: camada, camadas, la, camada atual, congelar, descongelar, bloquear, desligar, ligar, plotar, sem plotagem, cor, propriedades da camada, layiso, layuniso, isolar, layoff, layfrz, laymcur, layon, laythw, renomear, laymrg, mesclar, laydel, excluir camada
from: ba9f0617
---

## O que você vai fazer

Três camadas, Paredes, Portas e Notas, cada uma com sua própria cor, com objetos desenhados em cada uma e movidos entre elas.

## O painel Camadas

As camadas ficam no painel à esquerda, em {{ui:Layers}}. Cada linha mostra, da esquerda para a direita:

- um ponto: preenchido para a camada **atual**, onde vão os novos objetos;
- uma amostra de cor;
- o nome da camada;
- quatro botões: ligar/desligar (olho), congelar (floco de neve), bloquear (cadeado) e plotar (impressora).

Todo desenho tem uma camada chamada `0`. Digitar `LA` e pressionar {{key:Enter}} leva ao painel.

## Criar camadas

1. Clique em {{ui:New layer}} acima da lista. Abre-se uma caixa de nome.
2. Digite `Paredes` e pressione {{key:Enter}} (ou clique em {{ui:Add}}).

A barra de status diz "Camada Paredes adicionada e definida como atual." A nova camada recebe a cor 7 (preto no tema claro, branco no escuro).

3. Clique em {{ui:New layer}} de novo, digite `Portas` e pressione {{key:Enter}}.
4. Clique em {{ui:New layer}} de novo, digite `Notas` e pressione {{key:Enter}}.

Notas agora é a atual.

## Dar a cada camada uma cor

1. Clique na amostra de cor da linha Paredes. Abre-se o seletor de cores do seu sistema.
2. Escolha uma cor e confirme.

A amostra e tudo o que está em Paredes e colorido {{ui:By layer}} (PorCamada) mudam.

:::note
Uma cor escolhida que corresponde a uma das 255 cores padrão de CAD é guardada como esse número. Qualquer outra cor é mantida exatamente no CadCraft, mas é salva como a cor padrão mais próxima em um arquivo DWG ou DXF.
:::

## Desenhar em uma camada

1. Clique no nome **Paredes** na lista. Seu ponto fica preenchido e a barra de status diz "Camada atual: Paredes".
2. Desenhe um retângulo (`REC`). Ele vai para Paredes.
3. Clique em **Portas** e desenhe um arco (`A`). Ele vai para Portas.

Você também pode escolher a camada atual em {{ui:Current settings}} à direita (sem nada selecionado), em {{ui:Layer}}.

## Mover objetos para outra camada

1. Selecione os objetos.
2. No painel da direita, escolha a nova camada em {{ui:Layer}}.

Eles passam para essa camada e assumem a cor dela se a cor deles for {{ui:By layer}} (PorCamada).

## Desligar, congelar, bloquear e plotar

| Botão | O que faz |
|---|---|
| Ligar/desligar (olho) | Oculta os objetos da camada. Eles não podem ser vistos, selecionados nem encaixados. |
| Congelar (floco de neve) | Mesmo efeito de desligar no CadCraft. Mantido separado porque outros programas os tratam de forma diferente, e a configuração é salva. |
| Bloquear (cadeado) | Os objetos continuam visíveis e você pode encaixar neles, mas não podem ser selecionados nem alterados. Bom para um fundo sobre o qual você decalca. |
| Plotar (impressora) | Quando pressionado, a camada é mostrada na tela, mas **não sai nas plotagens** nem nos PDFs. Use para linhas de construção e notas para você mesmo. |

Passe o mouse sobre um botão para ver o que ele fará ("Desligar", "Congelar", "Bloquear", "Não plotar esta camada").

Você não pode desligar a camada atual: a barra de status diz "Esta é a camada atual. Torne outra camada atual primeiro." Clicar no nome de uma camada para torná-la atual também a liga e a descongela.

Toda alteração de camada, no painel ou por um comando, é um passo de desfazer: {{key:Mod+Z}} a devolve.

## Trabalhar nas camadas escolhendo objetos

Você não precisa saber o nome da camada: escolha um objeto nela. Digite o comando, ou abra {{ui:Tools}} no topo do painel {{ui:Layers}}.

| Comando | O que faz |
|---|---|
| {{cmd:LAYISO}} | Selecione objetos, pressione {{key:Enter}}: só as camadas deles ficam ligadas, todas as outras são desligadas. Se a camada atual estiver desligada, uma das camadas isoladas se torna a atual. |
| {{cmd:LAYUNISO}} | Liga de novo as camadas que o último {{cmd:LAYISO}} desligou, e devolve a camada atual que ele alterou. |
| {{cmd:LAYOFF}} | Clique em objetos um após o outro: a camada de cada um é desligada. Digite `U` para desfazer o último, {{key:Enter}} para terminar. |
| {{cmd:LAYFRZ}} | O mesmo, congelando cada camada. |
| {{cmd:LAYMCUR}} | Clique em um objeto: a camada dele se torna a atual (e é ligada e descongelada). Com um objeto já selecionado, é esse que se usa. |
| {{cmd:LAYON}} | Liga todas as camadas. |
| {{cmd:LAYTHW}} | Descongela todas as camadas. |

A camada atual nunca é desligada nem congelada desta forma: o histórico informa isso, e você pode tornar outra camada atual com {{cmd:LAYMCUR}} antes. Escolher uma referência de bloco usa a camada própria da referência.

## Renomear, mesclar e excluir camadas

- {{cmd:RENAME}}: digite `LA`, o nome antigo e o novo. Todo objeto da camada acompanha. (`B` renomeia um bloco do mesmo modo, com todas as suas referências.)
- {{cmd:LAYMRG}}: clique em um objeto de cada camada para mesclar (ou digite `N` e um nome), pressione {{key:Enter}}, depois escolha a camada de destino e responda `Y` (Sim). Os objetos passam para o destino — no modelo, nas folhas e dentro dos blocos — e as camadas mescladas desaparecem.
- {{cmd:LAYDEL}}: escolha um objeto na camada (ou `N` e o nome) e responda `Y` (Sim). A camada desaparece **com todos os objetos nela**, em todo lugar. As camadas 0, DEFPOINTS e a atual não podem ser excluídas.

Cada uma é um passo de desfazer. As três estão em {{ui:Tools}} no topo do painel {{ui:Layers}}.

1. Clique em uma linha de parede, depois digite `LAYISO` e pressione {{key:Enter}}. Só Paredes fica ligada.
2. Desenhe ou altere o que precisar em Paredes.
3. Digite `LAYUNISO` e pressione {{key:Enter}}. Portas e Notas voltam.

## Erros comuns

- **Novas linhas foram para a camada errada.** Verifique qual ponto está preenchido antes de desenhar. Uma nova camada se torna a atual assim que você a adiciona.
- **Um objeto não seleciona.** A camada dele está bloqueada, desligada ou congelada.
- **A camada ainda sai impressa em outro programa.** DXF R12 não guarda "não plotar". O CadCraft mantém a configuração para si quando o desenho tem uma folha, mas outros programas plotarão essa camada.
- **Nomes de camada em maiúsculas depois de salvar.** DXF R12 guarda nomes em maiúsculas, então `Paredes` volta como `PAREDES`, e espaços viram `_`. Um DWG salvo mantém os nomes como você digitou.
- **Renomear, mesclar ou excluir uma camada.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} ou {{cmd:LAYDEL}} (também em {{ui:Tools}}): veja abaixo.

## Agrupar camadas

Mantenha a lista curta colocando camadas em pastas, como Existentes, Propostas e Serviços. Cada pasta se recolhe, e suas chaves ligam ou desligam todas as suas camadas, ou as congelam ou bloqueiam juntas. A camada atual nunca é desligada.

Em {{ui:Tools}} no painel Camadas, escolha {{ui:Add ready-made groups}} para um conjunto feito para pequenos projetos residenciais, {{ui:Group by name}} para agrupar camadas que compartilham um prefixo (`E-Paredes`, `E-Portas`), ou {{ui:New group}}. Arraste uma camada para uma pasta, ou use a lista acima das camadas para a camada atual. Digite em {{ui:Find a layer}} para restringir a lista. `LAYGROUP` (`LG`) faz o mesmo na linha de comando.

Para renomear um grupo, dê clique duplo no nome (ou selecione-o e pressione {{key:F2}}), digite o novo nome e pressione {{key:Enter}}; {{key:Esc}} mantém o antigo, e {{cmd:UNDO}} o devolve. {{ui:New group}} fica em {{ui:Tools}} no painel Camadas.

As camadas em si não mudam, então outros programas CAD as veem como uma lista plana comum. O CadCraft guarda os grupos no arquivo.

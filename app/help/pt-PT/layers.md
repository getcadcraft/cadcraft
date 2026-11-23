---
title: Organizar um desenho com camadas
summary: Crie camadas para paredes, portas e notas, defina cores, torne uma camada atual e desligue, congele, bloqueie ou impeça a impressão de camadas.
keywords: camada, camadas, la, camada atual, congelar, descongelar, bloquear, desligar, ligar, imprimir, não imprimir, cor, propriedades da camada, layiso, layuniso, isolar, layoff, layfrz, laymcur, layon, laythw, renomear, laymrg, fundir, laydel, apagar camada
from: ba9f0617
---

## O que vai criar

Três camadas, Walls, Doors e Notes, cada uma com a sua própria cor, com objetos desenhados em cada uma e movidos entre elas.

## O painel Camadas

As camadas estão no painel à esquerda, em {{ui:Camadas}}. Cada linha mostra, da esquerda para a direita:

- um ponto: preenchido para a camada **atual**, onde vão os novos objetos;
- uma amostra de cor;
- o nome da camada;
- quatro botões: ligar/desligar (olho), congelar (floco de neve), bloquear (cadeado) e imprimir (impressora).

Todo o desenho tem uma camada chamada `0`. Escrever `LA` e premir {{key:Enter}} leva ao painel.

## Criar camadas

1. Clique em {{ui:Nova camada}} acima da lista. Abre-se uma caixa para o nome.
2. Escreva `Walls` e prima {{key:Enter}} (ou clique em {{ui:Adicionar}}).

A barra de estado diz "Camada Walls acrescentada e tornada atual." A nova camada fica com a cor 7 (preto no tema claro, branco no escuro).

3. Clique de novo em {{ui:Nova camada}}, escreva `Doors` e prima {{key:Enter}}.
4. Clique de novo em {{ui:Nova camada}}, escreva `Notes` e prima {{key:Enter}}.

Notes é agora a atual.

## Dar uma cor a cada camada

1. Clique na amostra de cor na linha Walls. Abre-se o seletor de cores do seu sistema.
2. Escolha uma cor e confirme.

A amostra e tudo o que está em Walls com cor {{ui:PorCamada}} mudam.

:::note
Uma cor escolhida que corresponda a uma das 255 cores CAD normalizadas fica guardada com esse número. Qualquer outra cor é mantida exatamente no CadCraft, mas é guardada como a cor normalizada mais próxima num ficheiro DWG ou DXF.
:::

## Desenhar numa camada

1. Clique no nome **Walls** na lista. O ponto fica preenchido e a barra de estado diz "Camada atual: Walls".
2. Desenhe um retângulo (`REC`). Fica em Walls.
3. Clique em **Doors** e desenhe um arco (`A`). Fica em Doors.

Também pode escolher a camada atual em {{ui:Definições atuais}} à direita (nada selecionado), em {{ui:Camada}}.

## Mover objetos para outra camada

1. Selecione os objetos.
2. No painel da direita, escolha a nova camada em {{ui:Camada}}.

Passam para essa camada e tomam a sua cor se a cor deles for {{ui:PorCamada}}.

## Desligar, congelar, bloquear e imprimir

| Botão | O que faz |
|---|---|
| Ligar/desligar (olho) | Oculta os objetos da camada. Não podem ser vistos, selecionados nem encaixados. |
| Congelar (floco de neve) | Mesmo efeito de desligar no CadCraft. Mantido separado porque outros programas os tratam de forma diferente, e a definição fica guardada. |
| Bloquear (cadeado) | Os objetos continuam visíveis e pode encaixar-se a eles, mas não podem ser selecionados nem alterados. Bom para um fundo sobre o qual faz um decalque. |
| Imprimir (impressora) | Quando premido, a camada é mostrada no ecrã mas **não é incluída nas impressões** nem nos PDF. Use-o para linhas de construção e notas para si. |

Pouse o rato sobre um botão para ver o que fará ("Desligar", "Congelar", "Bloquear", "Não imprimir esta camada").

Não pode desligar a camada atual: a barra de estado diz "Essa é a camada atual. Torne primeiro outra camada atual." Clicar no nome de uma camada para a tornar atual também a liga e descongela.

Cada alteração de camada, no painel ou por um comando, é um passo de anular: {{key:Mod+Z}} repõe-na.

## Trabalhar nas camadas escolhendo objetos

Não precisa de saber o nome de uma camada: escolha um objeto nela. Escreva o comando, ou abra {{ui:Ferramentas}} no topo do painel {{ui:Camadas}}.

| Comando | O que faz |
|---|---|
| {{cmd:LAYISO}} | Selecione objetos e prima {{key:Enter}}: só as suas camadas ficam ligadas, e todas as outras são desligadas. Se a camada atual for desligada, uma das camadas isoladas torna-se a atual. |
| {{cmd:LAYUNISO}} | Volta a ligar as camadas que o último {{cmd:LAYISO}} desligou, e devolve a camada atual que alterou. |
| {{cmd:LAYOFF}} | Clique em objetos um a seguir ao outro: a camada de cada um é desligada. Escreva `U` para anular o último, {{key:Enter}} para terminar. |
| {{cmd:LAYFRZ}} | O mesmo, congelando cada camada. |
| {{cmd:LAYMCUR}} | Clique num objeto: a sua camada torna-se atual (e fica ligada e descongelada). Com um objeto já selecionado, usa-se esse. |
| {{cmd:LAYON}} | Liga todas as camadas. |
| {{cmd:LAYTHW}} | Descongela todas as camadas. |

A camada atual nunca é desligada nem congelada desta forma: o histórico indica-o, e pode tornar outra camada atual com {{cmd:LAYMCUR}} primeiro. Escolher uma referência de bloco usa a camada da própria referência.

## Renomear, fundir e apagar camadas

- {{cmd:RENAME}}: escreva `LA`, o nome antigo e o novo. Cada objeto da camada acompanha. (`B` renomeia um bloco da mesma forma, com todas as referências a ele.)
- {{cmd:LAYMRG}}: clique num objeto em cada camada a fundir (ou escreva `N` e um nome), prima {{key:Enter}}, depois escolha a camada de destino e responda `Y`. Os objetos passam para o destino — no modelo, nas folhas e dentro dos blocos — e as camadas fundidas desaparecem.
- {{cmd:LAYDEL}}: escolha um objeto na camada (ou `N` e o seu nome) e responda `Y`. A camada desaparece **com todos os objetos que tem**, em todo o lado. A camada 0, DEFPOINTS e a camada atual não podem ser apagadas.

Cada uma é um passo de anular. As três estão em {{ui:Ferramentas}} no topo do painel {{ui:Camadas}}.

1. Clique numa linha de parede, depois escreva `LAYISO` e prima {{key:Enter}}. Só Walls fica ligada.
2. Desenhe ou altere o que precisar em Walls.
3. Escreva `LAYUNISO` e prima {{key:Enter}}. Doors e Notes voltam.

## Erros comuns

- **As novas linhas foram para a camada errada.** Verifique qual ponto está preenchido antes de desenhar. Uma nova camada torna-se atual logo que a acrescenta.
- **Um objeto não seleciona.** A sua camada está bloqueada, desligada ou congelada.
- **A camada continua a imprimir noutro programa.** O DXF R12 não consegue guardar "não imprimir". O CadCraft mantém a definição para si quando o desenho tem uma folha, mas os outros programas imprimirão essa camada.
- **Nomes de camadas em maiúsculas depois de guardar.** O DXF R12 guarda os nomes em maiúsculas, por isso `Walls` volta como `WALLS`, e os espaços passam a `_`. Um DWG guardado mantém os nomes como os escreveu.
- **Renomear, fundir ou apagar uma camada.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} ou {{cmd:LAYDEL}} (também em {{ui:Ferramentas}}): veja abaixo.

## Agrupar camadas

Mantenha a lista curta pondo as camadas em pastas, como Existente, Proposto e Serviços. Cada pasta dobra-se, e os seus interruptores ligam ou desligam todas as suas camadas, congelam-nas ou bloqueiam-nas em conjunto. A camada atual nunca é desligada.

Em {{ui:Ferramentas}} no painel Camadas, escolha {{ui:Adicionar grupos predefinidos}} para um conjunto feito para pequenas obras residenciais, {{ui:Agrupar por nome}} para agrupar camadas que partilham um prefixo (`E-Walls`, `E-Doors`), ou {{ui:Novo grupo}}. Arraste uma camada para uma pasta, ou use a lista acima das camadas para a camada atual. Escreva em {{ui:Procurar uma camada}} para restringir a lista. `LAYGROUP` (`LG`) faz o mesmo na linha de comandos.

Para mudar o nome de um grupo, faça duplo clique no nome (ou selecione-o e prima {{key:F2}}), escreva o novo nome e prima {{key:Enter}}; {{key:Esc}} mantém o antigo, e {{cmd:UNDO}} repõe-no. {{ui:Novo grupo}} está em {{ui:Ferramentas}} no painel Camadas.

As próprias camadas não mudam, por isso os outros programas CAD veem-nas como uma lista simples e plana. O CadCraft guarda os grupos no ficheiro.

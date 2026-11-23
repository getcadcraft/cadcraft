---
title: Formas de parede, cortes, deslocamentos e travas para paredes 2D
summary: Desenhe paredes como retângulos, polígonos e arcos, divida-as e una-as de novo, mova-as por uma cota, e trave uma parede a outra ou a uma linha de grade. As mesmas ferramentas das paredes do BimCraft.
keywords: parede, paredes, barra de paredes, botões de parede, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de união, meia-esquadria, reta, alisar, cadeado, pega, arrastar extremidade, girar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unir, não permitir união, travar, linha de grade, dividir, vão, deslocar, linha de localização
from: 49044181
---

Estas ferramentas atuam nas paredes 2D criadas por `WALL` (veja "Desenhe paredes, portas e janelas inteligentes em 2D"). Usam as mesmas regras das ferramentas de parede do BimCraft, então uma parede se comporta do mesmo jeito nos dois programas.

## Onde ficam as ferramentas

- Na barra de ferramentas, o grupo {{ui:Walls}} (Paredes) tem {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} e {{ui:Offset}}. Seu menu {{ui:More}} tem todas as outras ferramentas de parede, cada uma com seu ícone.
- Nos estilos de menu Faixa de opções, a aba {{ui:Walls}} tem os painéis {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} e {{ui:Join}}.
- Em um layout, as linhas de ferramentas e a caixa de ferramentas mostram o mesmo grupo {{ui:Walls}}.
- Você também pode digitar qualquer comando nomeado abaixo.

## As uniões são salvas

Quando a extremidade de uma parede cai sobre outra parede, o CadCraft salva essa união com as duas paredes. Ele não recalcula mais as uniões a partir de onde as extremidades por acaso estão. Assim:

- Paredes unidas a uma parede que você move a seguem e continuam unidas. Suas extremidades deslizam ao longo das próprias linhas, então nada gira.
- Arraste uma extremidade de parede pela pega e a parede unida ali mantém a direção também. A extremidade dela desliza ao longo da própria linha até encontrar a parede arrastada, então a extremidade arrastada cai sobre essa linha, nem sempre sob o cursor. A visualização mostra onde. Uma parede que encosta na parede arrastada segue ao longo da própria linha. Arrastar a extremidade diretamente ao longo da parede muda o comprimento dela, e a parede unida ali se move com ele.
- `ROTATE` sobre uma parede unida funciona do mesmo jeito: as extremidades das vizinhas deslizam ao longo das próprias linhas até a parede girada.
- Para mover um canto, selecione as duas paredes que se encontram ali e arraste a pega do canto. As duas paredes permanecem no canto e ambas giram. As paredes mais adiante ficam como estavam.
- Mantenha {{key:Alt}} pressionado ao clicar no novo lugar da pega para quebrar as uniões de propósito: a parede vai para onde você a pôs e nada a segue.
- Se um arrasto fizer uma parede unida girar de volta através da própria extremidade distante, ele é recusado e nada muda.
- Uma parede que você desenha com {{ui:Disallow joins}} (`D` em `WALL`), ou desliga em Propriedades ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), fica livre nessa extremidade, mesmo que toque outra parede, até você permitir de novo.
- `WALLDISJOIN` ({{ui:Disallow join}} no grupo {{ui:Walls}}) faz o mesmo com um clique: clique em uma parede perto de uma extremidade para não permitir uniões ali, e clique de novo para permiti-las.
- Um desenho antigo ainda não tem uniões salvas. Na primeira alteração que você fizer, elas são encontradas uma vez, a partir de como as paredes estavam antes da alteração, e salvas. `WALLJOINS` faz isso de imediato.
- Arquivos DWG e DXF levam as uniões dentro de cada parede. O CadCraft as lê de volta como salvas. Um programa que não guarda dados estendidos mostra as paredes como blocos simples e descarta as uniões, e uma união cujas paredes foram movidas em outro programa é descartada na próxima vez que você alterar uma delas.

## Estilo de união de um canto

Um canto onde duas paredes se encontram ponta a ponta é desenhado como meia-esquadria, a menos que você escolha outro estilo.

- `WALLJOINSTYLE` ({{ui:Join style}} no grupo {{ui:Walls}}): clique no canto. Cada clique passa ao próximo estilo: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, e de novo {{ui:Mitre}}. Digite `T` para trocar qual das duas paredes passa por dentro no canto em que você clicou por último. Pressione {{key:Enter}} para terminar. Uma execução do comando é um passo de desfazer.
- {{ui:Butt}} (Reta): uma parede passa até a face distante da outra, e a outra para encostada na lateral. {{ui:Square off}} (Reto): o mesmo, mas a parede que passa termina em esquadro consigo mesma. Em ângulo reto as duas ficam parecidas.
- Em Propriedades de uma parede: {{ui:Join style at start}}, {{ui:Join style at end}}, e {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- O estilo é salvo com as duas paredes e viaja em arquivos DWG e DXF. Uma cópia de uma parede começa sem ele.
- Uma união em T não tem estilo para escolher: passa por dentro a parede cuja lateral é encontrada. Um canto onde três ou mais paredes se encontram continua sendo meia-esquadria. Também um canto muito agudo (abaixo de cerca de 30 graus) e duas paredes em uma mesma linha.

## Desenhar formas de parede

Cada uma cria as paredes em um passo de desfazer, com os cantos unidos. Em `WALL`, `O` define um deslocamento de posicionamento (quanto à esquerda dos seus cliques a parede vai), e `D` desliga a união para as paredes que você desenhar em seguida.

- `WALLRECT` (`WR`): dois cantos opostos, como `RECTANG`.
- `WALLROT`: o primeiro lado, depois quanto o outro lado se afasta, para um retângulo em qualquer ângulo.
- `WALLPOLY` (`WP`): o número de lados (3 a 64), o centro, `I` para inscrito ou `C` para circunscrito, depois o raio, como `POLYGON`: clique, ou digite (um raio digitado vai na direção do ponteiro, ou ao longo de X quando o ponteiro ainda está no centro).
- `WALLARC` (`WARC`): centro, início, fim. `D` inverte o sentido do arco.
- `WALLTAN`: clique perto da extremidade de uma parede, depois na extremidade do arco, que sai ao longo dessa parede.
- `WALLPICK`: clique em uma linha ou polilinha e diga se quer levar também as linhas unidas a ela.
- `WALLTRACE`: clique dentro de uma área fechada de linhas e paredes para colocar paredes ao redor da menor.

Paredes em planta são retas, então um arco é desenhado como pequenas paredes retas de 15 graus cada. Elas se unem como qualquer canto.

## Cortar paredes

- `WALLSPLIT` (`WS`): clique na parede, depois no ponto. `C` corta onde outra parede a cruza, `G` deixa um vão entre as partes, `F` deixa as extremidades cortadas livres em vez de unidas. A primeira parte mantém o lugar da parede no desenho, e portas e janelas acompanham a sua parte. Um corte através de uma porta ou janela é recusado.
- `WALLSPLITGAP` ({{ui:Split with gap}}): a mesma divisão, mas pergunta primeiro o vão.
- `WALLDELSEG`: clique na parede, depois nas duas extremidades do trecho a apagar.
- `WALLREJOIN`: clique em duas partes de uma mesma parede para torná-las uma só de novo.

## Mover paredes por distância

- `WALLDIM` ({{ui:Edit by dimension}}): clique em uma cota linear ou alinhada que vai de uma parede a outra, depois digite o novo valor. A parede na extremidade distante se move em esquadro consigo mesma, a parede na primeira extremidade permanece, e as paredes unidas a ela seguem. O ponto distante da cota se move com a parede, então a cota mostra o valor que você digitou.
- `WALLOFFSET` (`WO`): clique em uma parede, depois no lado para o qual movê-la (`D` digita uma distância, `C` faz uma cópia em vez disso).
- `WALLSTRETCH`: uma janela em volta das extremidades da parede, depois um ponto base e um segundo ponto.
- Em Propriedades, um {{ui:Length}} (Comprimento) digitado mantém o início e leva a parede unida na extremidade distante junto, e uma nova {{ui:Thickness}} (Espessura) cresce para longe da {{ui:Location line}} (Linha de localização) que você escolheu (a face esquerda, a face direita ou o centro).

## Cota entre linhas de centro de paredes

A linha de centro de uma parede não é desenhada, mas o snap de objeto a encontra. Com o snap de objeto ligado ({{key:F3}}), mova o ponteiro sobre o meio da espessura de uma parede: a marca mostra `Centro da parede: extremidade` ou `Centro da parede: ponto médio`, e a linha de centro aparece tracejada enquanto a marca está sobre ela. Com {{ui:Perpendicular}} ou {{ui:Nearest}} ligados na lista de snaps de objeto, esses também funcionam na linha de centro.

1. Comece `DIMLINEAR` (ou `DIMALIGNED`).
2. Clique na primeira parede onde a marca mostra `Centro da parede: ponto médio` ou `Centro da parede: extremidade`.
3. Clique na segunda parede do mesmo jeito, depois clique onde vai a linha de cota.
4. Para alterar a distância, comece `WALLDIM`, clique na cota e digite o novo valor. A segunda parede se move.

O snap na linha de centro funciona em todo comando que pede um ponto.

## Travar paredes

Uma trava permanece com a parede no arquivo. Se você move uma parede travada, a outra segue. Se uma alteração move as duas paredes de modos diferentes, ela é recusada e nada muda.

- `WALLHOLD`: trava uma parede a outra parede. `A` a move primeiro para a linha da outra parede, `K` mantém a distância que ela tem.
- `WALLHOLDDIM`: trava a distância entre duas paredes paralelas.
- `WALLGRID`: trava uma parede a uma linha de grade (uma linha em uma camada de grade, com sua etiqueta em texto em uma extremidade), seja ao longo dela, seja com uma extremidade sobre ela. Uma parede travada ao longo da linha mantém a distância que tem dela. Mova a linha de grade com `GRIDMOVE` e a parede segue inteira, com suas paredes unidas. Uma parede que fica ao longo de uma linha de grade se move inteira com ela mesmo sem trava, e uma parede que apenas termina na linha é esticada por essa extremidade.
- `WALLHOLDS` lista as travas. `WALLUNHOLD` tira as travas de uma parede.
- Cada trava mostra um pequeno cadeado na planta: ao lado do meio da parede travada, ou ao lado da extremidade travada a uma linha de grade. Clique em um cadeado para tirar essa trava.

## O que ainda não está aqui

As travas usam as linhas de centro das paredes. Paredes aqui não têm camadas, então não há prioridade de camada em uma junção, e as paredes não se curvam (veja os arcos acima). Ninguém testou estas ferramentas em um desenho grande, e elas não foram verificadas em outro programa CAD.

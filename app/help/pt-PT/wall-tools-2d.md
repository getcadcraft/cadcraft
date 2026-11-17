---
title: Formas, cortes, offsets e bloqueios de paredes 2D
summary: Desenhar paredes como retângulos, polígonos e arcos, dividi-las e voltar a uni-las, deslocá-las por uma cota, e bloquear uma parede a outra ou a uma linha de grelha. As mesmas ferramentas das paredes do BimCraft.
keywords: parede, barra de paredes, botões de paredes, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de união, meia-esquadria, reta, cortar reto, cadeado, grip, arrastar extremidade, rodar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, união, proibir união, bloqueio, linha de grelha, dividir, intervalo, offset, linha de localização
from: f41e7433
---

Estas ferramentas funcionam nas paredes 2D criadas com `WALL` (veja «Desenhar paredes, portas e janelas inteligentes em 2D»). Usam as mesmas regras das ferramentas de paredes do BimCraft, pelo que uma parede se comporta da mesma forma nos dois.

## Onde estão as ferramentas

- Na barra de ferramentas, o grupo {{ui:Paredes}} tem {{ui:Parede}}, {{ui:Retângulo}}, {{ui:Dividir}} e {{ui:Offset}}. O seu menu {{ui:Mais}} tem todas as outras ferramentas de parede, cada uma com o seu ícone.
- Nos estilos de friso do menu, o separador {{ui:Paredes}} tem os painéis {{ui:Desenhar paredes}}, {{ui:Cortar}}, {{ui:Definir e modificar}}, {{ui:Manter}} e {{ui:Unir}}.
- Num layout, as linhas de ferramentas e a caixa de ferramentas mostram o mesmo grupo {{ui:Paredes}}.
- Também pode escrever qualquer comando indicado abaixo.

## As uniões são guardadas

Quando a extremidade de uma parede cai sobre outra parede, o CadCraft guarda essa união nas duas paredes. Já não calcula as uniões de novo a partir de onde as extremidades estão por acaso. Assim:

- As paredes unidas a uma parede que move seguem-na e mantêm a união. As suas extremidades deslizam ao longo das próprias linhas, pelo que nada roda.
- Arraste uma extremidade de uma parede pelo seu grip e a parede unida aí mantém também a sua direção. A extremidade dela desliza ao longo da sua própria linha até encontrar a parede arrastada, pelo que a extremidade arrastada fica sobre essa linha, nem sempre debaixo do cursor. A pré-visualização mostra onde. Uma parede que encosta à parede arrastada segue ao longo da sua própria linha. Arrastar a extremidade em linha reta ao longo da parede altera o comprimento, e a parede unida aí move-se com ela.
- `ROTATE` numa parede unida funciona da mesma forma: as extremidades das paredes vizinhas deslizam ao longo das suas próprias linhas até à parede rodada.
- Para mover um canto, selecione as duas paredes que se encontram aí e arraste o grip do canto. Ambas as paredes ficam no canto e ambas rodam. As paredes mais adiante mantêm-se como estavam.
- Mantenha {{key:Alt}} ao clicar no novo lugar do grip para partir as uniões de propósito: a parede vai para onde a colocou e nada a segue.
- Se um arrastamento fizer rodar uma parede unida para trás, passando pela sua própria extremidade oposta, é recusado e nada muda.
- Uma parede desenhada com {{ui:Não permitir junções}} (`D` em `WALL`), ou desligada nas Propriedades ({{ui:Não permitir junção no início}}, {{ui:Não permitir junção no fim}}), fica livre nessa extremidade, mesmo que toque noutra parede, até voltar a permiti-la.
- `WALLDISJOIN` ({{ui:Proibir união}} no grupo {{ui:Paredes}}) faz o mesmo com um clique: clique numa parede perto de uma extremidade para proibir as uniões nessa extremidade, e clique de novo para as permitir.
- Um desenho mais antigo ainda não tem uniões guardadas. A primeira alteração que fizer encontra-as uma vez, a partir de como as paredes estavam antes da alteração, e guarda-as. `WALLJOINS` faz isto de imediato.
- Os ficheiros DWG e DXF levam as uniões dentro de cada parede, e o CadCraft lê-as de volta tal como foram guardadas. Um programa que não guarda dados estendidos mostra as paredes como blocos simples e perde as uniões, e uma união cujas paredes foram movidas noutro programa é perdida na próxima vez que alterar qualquer uma das paredes.

## Estilo de união de um canto

Um canto onde duas paredes se encontram extremidade com extremidade é desenhado em meia-esquadria, a não ser que escolha outro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de união}} no grupo {{ui:Paredes}}): clique no canto. Cada clique passa ao estilo seguinte: {{ui:Meia-esquadria}}, {{ui:Reta}}, {{ui:Cortar reto}} e de novo {{ui:Meia-esquadria}}. Escreva `T` para trocar qual das duas paredes atravessa o canto em que clicou por último. Prima {{key:Enter}} para terminar. Uma execução do comando é um passo de anulação.
- {{ui:Reta}}: uma parede atravessa até à face distante da outra, e a outra pára contra o lado dela. {{ui:Cortar reto}}: o mesmo, mas a parede que atravessa termina perpendicular a si própria. Num ângulo reto, os dois têm o mesmo aspeto.
- Nas Propriedades de uma parede: {{ui:Estilo de união no início}}, {{ui:Estilo de união no fim}}, e {{ui:Atravessa no início}}, {{ui:Atravessa no fim}}.
- O estilo é guardado com as duas paredes e segue nos ficheiros DWG e DXF. Uma cópia de uma parede começa sem ele.
- Uma união em T não tem estilo a escolher: atravessa a parede cujo lado é encontrado. Um canto onde três ou mais paredes se encontram fica em meia-esquadria. O mesmo acontece com um canto muito agudo (abaixo de cerca de 30 graus) e com duas paredes em linha reta.

## Desenhar formas de paredes

Cada uma cria as paredes num só passo de anulação, com os cantos unidos. Em `WALL`, `O` define um deslocamento de colocação (a que distância à esquerda dos seus cliques fica a parede) e `D` desliga a união para as paredes que desenhar a seguir.

- `WALLRECT` (`WR`): dois cantos opostos, como `RECTANG`.
- `WALLROT`: o primeiro lado, depois a distância a que vai o outro lado, para um retângulo em qualquer ângulo.
- `WALLPOLY` (`WP`): o número de lados (3 a 64), o centro, `I` para inscrito ou `C` para circunscrito, e depois o raio, como `POLYGON`.
- `WALLARC` (`WARC`): centro, início, fim. `D` inverte o sentido do arco.
- `WALLTAN`: clique perto da extremidade de uma parede e depois na extremidade do arco, que sai ao longo dessa parede.
- `WALLPICK`: clique numa linha ou polilinha e indique se devem ser tomadas também as linhas unidas a ela.
- `WALLTRACE`: clique dentro de uma área fechada de linhas e paredes para colocar paredes à volta da menor.

As paredes em planta são retas, pelo que um arco é desenhado como pequenas paredes retas de 15 graus cada. Unem-se como qualquer canto.

## Cortar paredes

- `WALLSPLIT` (`WS`): clique na parede e depois no ponto. `C` corta onde outra parede a atravessa, `G` deixa um intervalo entre as partes, `F` deixa as extremidades cortadas livres em vez de unidas. A primeira parte mantém o lugar da parede no desenho, e as portas e janelas seguem a sua parte. Um corte que atravesse uma porta ou janela é recusado.
- `WALLSPLITGAP` ({{ui:Dividir com intervalo}}): a mesma divisão, mas pede primeiro o intervalo.
- `WALLDELSEG`: clique na parede e depois nas duas extremidades do troço a eliminar.
- `WALLREJOIN`: clique em duas partes de uma mesma parede para voltarem a ser uma só.

## Mover paredes por distância

- `WALLDIM`: clique numa cota linear ou alinhada que vá de uma parede a outra, e depois escreva o novo valor. A parede na extremidade distante move-se perpendicularmente a si própria, a parede na primeira extremidade mantém-se, e as paredes unidas a ela seguem-na.
- `WALLOFFSET` (`WO`): clique numa parede e depois no lado para onde a mover (`D` escreve uma distância, `C` cria uma cópia em vez disso).
- `WALLSTRETCH`: uma janela à volta das extremidades da parede, depois um ponto base e um segundo ponto.
- Nas Propriedades, um {{ui:Comprimento}} escrito mantém o início e leva consigo a parede unida na extremidade distante, e uma nova {{ui:Espessura}} cresce a partir da {{ui:Linha de localização}} que escolheu (a face esquerda, a face direita ou o centro).

## Bloquear paredes

Um bloqueio fica com a parede no ficheiro. Se mover uma parede bloqueada, a outra segue-a. Se uma alteração mover as duas paredes de forma diferente, é recusada e nada muda.

- `WALLHOLD`: bloqueie uma parede a outra parede. `A` move-a primeiro para a linha da outra parede, `K` mantém a distância que tem.
- `WALLHOLDDIM`: bloqueie a distância entre duas paredes paralelas.
- `WALLGRID`: bloqueie uma parede a uma linha de grelha (uma linha numa camada de grelha com a sua etiqueta em texto numa das extremidades), ao longo dela ou com uma extremidade sobre ela. Uma parede bloqueada ao longo da linha mantém a distância que tem dela. Mova a linha de grelha com `GRIDMOVE` e a parede segue inteira, com as suas paredes unidas. Uma parede que está ao longo de uma linha de grelha move-se inteira com ela mesmo sem bloqueio, e uma parede que apenas termina na linha é esticada por essa extremidade.
- `WALLHOLDS` lista os bloqueios. `WALLUNHOLD` retira os bloqueios de uma parede.
- Cada bloqueio mostra um pequeno cadeado na planta: ao lado do meio da parede bloqueada, ou ao lado da extremidade bloqueada a uma linha de grelha. Clique num cadeado para retirar esse bloqueio.

## O que ainda não está aqui

Os bloqueios usam as linhas centrais das paredes. As paredes aqui não têm camadas, pelo que não há prioridade de camada numa junção, e as paredes não curvam (veja os arcos acima). Ninguém testou estas ferramentas num desenho grande, e não foram verificadas noutro programa de CAD.

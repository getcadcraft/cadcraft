---
title: Formas de paredes, cortes, deslocamentos e bloqueios para paredes 2D
summary: Desenhe paredes como retângulos, polígonos e arcos, divida-as e volte a uni-las, mova-as por uma cota, e bloqueie uma parede a outra ou a uma linha de grelha. As mesmas ferramentas das paredes do BimCraft.
keywords: parede, barra de paredes, botões de parede, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de união, meia-esquadria, reta, cortar reto, cadeado, grip, arrastar extremidade, rodar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, união, proibir união, bloqueio, linha de grelha, dividir, intervalo, deslocamento, linha de localização
from: 49044181
---

Estas ferramentas atuam sobre as paredes 2D criadas com `WALL` (veja "Desenhar paredes, portas e janelas inteligentes em 2D"). Usam as mesmas regras das ferramentas de parede do BimCraft, por isso uma parede se comporta de igual forma nos dois.

## Onde estão as ferramentas

- Na barra de ferramentas, o grupo {{ui:Paredes}} tem {{ui:Parede}}, {{ui:Retângulo}}, {{ui:Dividir}} e {{ui:Offset}}. O seu menu {{ui:Mais}} tem todas as outras ferramentas de parede, cada uma com o seu ícone.
- Nos estilos de menu em friso, o separador {{ui:Paredes}} tem os painéis {{ui:Desenhar paredes}}, {{ui:Cortar}}, {{ui:Definir e modificar}}, {{ui:Manter}} e {{ui:Unir}}.
- Num layout, as linhas de ferramentas e a caixa de ferramentas mostram o mesmo grupo {{ui:Paredes}}.
- Também pode escrever qualquer comando indicado abaixo.

## As uniões ficam guardadas

Quando a extremidade de uma parede cai sobre outra parede, o CadCraft guarda essa união com as duas paredes. Já não recalcula as uniões a partir de onde as extremidades calham estar. Assim:

- As paredes unidas a uma parede que move seguem-na e mantêm-se unidas. As suas extremidades deslizam ao longo das suas próprias linhas, por isso nada roda.
- Arraste uma extremidade de uma parede pelo seu grip e a parede unida aí mantém também a sua direção. A sua extremidade desliza ao longo da sua própria linha para encontrar a parede arrastada, por isso a extremidade arrastada cai nessa linha, nem sempre debaixo do cursor. A pré-visualização mostra onde. Uma parede que embate na parede arrastada segue ao longo da sua própria linha. Arrastar a extremidade diretamente ao longo da parede altera o seu comprimento, e a parede unida aí move-se com ela.
- `ROTATE` numa parede unida funciona da mesma forma: as extremidades dos seus vizinhos deslizam ao longo das suas próprias linhas até à parede rodada.
- Para mover um canto, selecione as duas paredes que aí se encontram e arraste o grip do canto. As duas paredes mantêm-se no canto e ambas rodam. As paredes mais adiante mantêm-se como estavam.
- Mantenha {{key:Alt}} premido ao clicar na nova posição do grip para quebrar as uniões de propósito: a parede vai para onde a pôs e nada a segue.
- Se um arrastamento fizesse uma parede unida voltar a passar pela sua própria extremidade distante, é recusado e nada muda.
- Uma parede que desenha com {{ui:Não permitir junções}} (`D` em `WALL`), ou desativa nas Propriedades ({{ui:Não permitir junção no início}}, {{ui:Não permitir junção no fim}}), fica livre nessa extremidade, mesmo que toque noutra parede, até voltar a permiti-la.
- `WALLDISJOIN` ({{ui:Proibir união}} no grupo {{ui:Paredes}}) faz o mesmo com um clique: clique numa parede perto de uma extremidade para proibir as uniões nessa extremidade, e clique de novo para as permitir.
- Um desenho mais antigo ainda não tem uniões guardadas. A primeira alteração que fizer encontra-as uma vez, a partir de como as paredes estavam antes da alteração, e guarda-as. `WALLJOINS` faz isto de imediato.
- Os ficheiros DWG e DXF transportam as uniões dentro de cada parede. O CadCraft lê-as como foram guardadas. Um programa que não guarda dados estendidos mostra as paredes como blocos simples e deixa cair as uniões, e uma união cujas paredes foram movidas noutro programa é eliminada da próxima vez que alterar uma delas.

## Estilo de união de um canto

Um canto onde duas paredes se encontram extremidade com extremidade é desenhado como meia-esquadria, a menos que escolha outro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de união}} no grupo {{ui:Paredes}}): clique no canto. Cada clique passa ao estilo seguinte: {{ui:Meia-esquadria}}, {{ui:Reta}}, {{ui:Cortar reto}}, e depois {{ui:Meia-esquadria}} de novo. Escreva `T` para trocar qual das duas paredes atravessa o canto em que clicou por último. Prima {{key:Enter}} para terminar. Uma execução do comando é um único passo de anular.
- {{ui:Reta}}: uma parede atravessa até à face distante da outra, e a outra para contra o seu lado. {{ui:Cortar reto}}: o mesmo, mas a parede que atravessa termina em esquadria consigo mesma. A um ângulo reto as duas parecem iguais.
- Nas Propriedades de uma parede: {{ui:Estilo de união no início}}, {{ui:Estilo de união no fim}}, e {{ui:Atravessa no início}}, {{ui:Atravessa no fim}}.
- O estilo é guardado com as duas paredes e segue nos ficheiros DWG e DXF. Uma cópia de uma parede começa sem ele.
- Uma união em T não tem estilo a escolher: a parede cujo lado é encontrado atravessa. Um canto onde três ou mais paredes se encontram mantém-se meia-esquadria. Também um canto muito agudo (abaixo de cerca de 30 graus) e duas paredes em linha.

## Desenhar formas de parede

Cada uma cria as paredes num único passo de anular, com os cantos unidos. Em `WALL`, `O` define um deslocamento de colocação (a que distância à esquerda dos seus cliques vai a parede) e `D` desliga a união para as paredes que desenhar a seguir.

- `WALLRECT` (`WR`): dois cantos opostos, como `RECTANG`.
- `WALLROT`: o primeiro lado, depois a distância a que vai o outro lado, para um retângulo a qualquer ângulo.
- `WALLPOLY` (`WP`): o número de lados (3 a 64), o centro, `I` para inscrito ou `C` para circunscrito, depois o raio, como em `POLYGON`: clique, ou escreva-o (um raio escrito segue na direção do ponteiro, ou ao longo de X quando o ponteiro ainda está no centro).
- `WALLARC` (`WARC`): centro, início, fim. `D` inverte o sentido do arco.
- `WALLTAN`: clique perto da extremidade de uma parede, depois a extremidade do arco, que sai ao longo dessa parede.
- `WALLPICK`: clique numa linha ou polilinha e diga se também quer as linhas unidas a ela.
- `WALLTRACE`: clique dentro de uma área fechada de linhas e paredes para colocar paredes à volta da menor.

As paredes em planta são retas, por isso um arco é desenhado como pequenas paredes retas de 15 graus cada. Unem-se como qualquer canto.

## Cortar paredes

- `WALLSPLIT` (`WS`): clique na parede e depois no ponto. `C` corta onde outra parede a atravessa, `G` deixa um intervalo entre as partes, `F` deixa as extremidades cortadas livres em vez de unidas. A primeira parte mantém o lugar da parede no desenho, e as portas e janelas seguem com a sua parte. Um corte que atravessa uma porta ou janela é recusado.
- `WALLSPLITGAP` ({{ui:Dividir com intervalo}}): a mesma divisão, mas pede primeiro o intervalo.
- `WALLDELSEG`: clique na parede, depois nas duas extremidades da parte a apagar.
- `WALLREJOIN`: clique em duas partes de uma parede para as voltar a tornar uma só.

## Mover paredes por distância

- `WALLDIM` ({{ui:Editar por cota}}): clique numa cota linear ou alinhada que vai de uma parede a outra, depois escreva o novo valor. A parede da extremidade distante move-se em esquadria consigo mesma, a parede da primeira extremidade mantém-se, e as paredes unidas a ela seguem. O ponto distante da cota move-se com a sua parede, por isso a cota mostra o valor que escreveu.
- `WALLOFFSET` (`WO`): clique numa parede, depois o lado para onde a mover (`D` escreve uma distância, `C` cria antes uma cópia).
- `WALLSTRETCH`: uma janela à volta das extremidades das paredes, depois um ponto base e um segundo ponto.
- Nas Propriedades, um {{ui:Comprimento}} escrito mantém o início e leva consigo a parede unida na extremidade distante, e uma nova {{ui:Espessura}} cresce a partir da {{ui:Linha de localização}} que escolheu (a face esquerda, a face direita ou o centro).

## Cotar entre eixos de paredes

O eixo de uma parede não é desenhado, mas o snap a objetos encontra-o. Com o snap a objetos ativo ({{key:F3}}), mova o ponteiro para o meio da espessura de uma parede: o marcador indica `Wall center: endpoint` ou `Wall center: midpoint`, e o eixo mostra-se como uma linha tracejada enquanto o marcador estiver sobre ele. Com {{ui:Perpendicular}} ou {{ui:Mais próximo}} ativados na lista de snaps a objetos, estes funcionam também no eixo.

1. Inicie `DIMLINEAR` (ou `DIMALIGNED`).
2. Clique na primeira parede onde o marcador indica `Wall center: midpoint` ou `Wall center: endpoint`.
3. Clique na segunda parede da mesma forma, depois clique onde deve ficar a linha de cota.
4. Para alterar a distância, inicie `WALLDIM`, clique na cota e escreva o novo valor. A segunda parede move-se.

O snap ao eixo funciona em todos os comandos que pedem um ponto.

## Bloquear paredes

Um bloqueio fica com a parede no ficheiro. Se mover uma parede bloqueada, a outra segue-a. Se uma alteração mover as duas paredes de forma diferente, é recusada e nada muda.

- `WALLHOLD`: bloqueia uma parede a outra parede. `A` move-a primeiro para a linha da outra parede, `K` mantém a distância que tem.
- `WALLHOLDDIM`: bloqueia a distância entre duas paredes paralelas.
- `WALLGRID`: bloqueia uma parede a uma linha de grelha (uma linha numa camada de grelha com a sua etiqueta em texto numa extremidade), seja ao longo dela ou com uma extremidade nela. Uma parede bloqueada ao longo da linha mantém a distância que tem dela. Mova a linha de grelha com `GRIDMOVE` e a parede segue por inteiro, com as paredes unidas. Uma parede que está ao longo de uma linha de grelha move-se por inteiro com ela mesmo sem bloqueio, e uma parede que só termina na linha é esticada por essa extremidade.
- `WALLHOLDS` lista os bloqueios. `WALLUNHOLD` retira os bloqueios de uma parede.
- Cada bloqueio mostra um pequeno cadeado na planta: ao lado do meio da parede bloqueada, ou ao lado da extremidade bloqueada a uma linha de grelha. Clique num cadeado para retirar esse bloqueio.

## O que ainda não existe

Os bloqueios usam os eixos das paredes. As paredes aqui não têm camadas, por isso não há prioridade de camada numa junção, e as paredes não curvam (veja os arcos acima). Ninguém testou estas ferramentas num desenho grande, e não foram verificadas noutro programa CAD.

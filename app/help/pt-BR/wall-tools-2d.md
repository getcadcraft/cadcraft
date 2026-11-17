---
title: Formas, cortes, deslocamentos e travamentos de paredes em 2D
summary: Desenhe paredes como retângulos, polígonos e arcos, divida-as e una-as de novo, mova-as por uma cota e trave uma parede a outra ou a uma linha de grade. As mesmas ferramentas das paredes do BimCraft.
keywords: parede, barra de paredes, botões de parede, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de união, meia-esquadria, reta, reto, cadeado, grip, arrastar extremidade, girar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, união, impedir união, travar, linha de grade, dividir, vão, deslocar, linha de localização
from: f41e7433
---

Estas ferramentas trabalham nas paredes 2D criadas por `WALL` (veja "Desenhe paredes inteligentes, portas e janelas em 2D"). Elas usam as mesmas regras das ferramentas de parede do BimCraft, então uma parede se comporta do mesmo jeito nos dois.

## Onde ficam as ferramentas

- Na barra de ferramentas, o grupo {{ui:Paredes}} tem {{ui:Parede}}, {{ui:Retângulo}}, {{ui:Dividir}} e {{ui:Deslocar}}. O menu {{ui:Mais}} dele tem todas as outras ferramentas de parede, cada uma com seu ícone.
- Nos estilos de faixa de opções (ribbon), a guia {{ui:Paredes}} tem os painéis {{ui:Desenhar paredes}}, {{ui:Recortar}}, {{ui:Definir e modificar}}, {{ui:Manter}} e {{ui:Unir}}.
- Em um layout, as linhas de ferramentas e a caixa de ferramentas mostram o mesmo grupo {{ui:Paredes}}.
- Você também pode digitar qualquer comando listado abaixo.

## As uniões são salvas

Quando a extremidade de uma parede encontra outra parede, o CadCraft salva essa união com as duas paredes. Ele não recalcula as uniões a partir de onde as extremidades estão. Assim:

- Paredes unidas a uma parede que você move a seguem e continuam unidas. Suas extremidades deslizam ao longo das próprias linhas, então nada gira.
- Arraste uma extremidade de parede pelo seu grip e a parede unida ali mantém a direção. A extremidade dela desliza ao longo da própria linha até encontrar a parede arrastada, então a extremidade arrastada cai sobre essa linha, nem sempre embaixo do cursor. A prévia mostra onde. Uma parede que encosta na parede arrastada segue ao longo da própria linha. Arrastar a extremidade diretamente ao longo da parede muda o comprimento dela, e a parede unida ali se move junto.
- `ROTATE` em uma parede unida funciona do mesmo jeito: as extremidades das vizinhas deslizam ao longo das próprias linhas até a parede girada.
- Para mover um canto, selecione as duas paredes que se encontram ali e arraste o grip do canto. As duas paredes continuam no canto, e as duas giram. As paredes mais adiante continuam como estavam.
- Mantenha {{key:Alt}} ao clicar no novo lugar do grip para desfazer as uniões de propósito: a parede vai para onde você a colocou, e nada a segue.
- Se um arrasto fizer uma parede unida girar de volta pela própria extremidade oposta, ele é recusado e nada muda.
- Uma parede desenhada com {{ui:Disallow joins}} (`D` em `WALL`), ou desligada em Propriedades ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), fica livre nessa extremidade, mesmo que toque outra parede, até você permitir de novo.
- `WALLDISJOIN` ({{ui:Impedir união}} no grupo {{ui:Paredes}}) faz o mesmo com um clique: clique em uma parede perto de uma extremidade para impedir as uniões ali, e clique de novo para permiti-las.
- Um desenho mais antigo ainda não tem uniões salvas. A primeira alteração que você fizer as encontra uma vez, a partir de como as paredes estavam antes da mudança, e as salva. `WALLJOINS` faz isso de imediato.
- Arquivos DWG e DXF guardam as uniões dentro de cada parede. O CadCraft as lê de volta como foram salvas. Um programa que não guarda dados estendidos mostra as paredes como blocos simples e descarta as uniões. Uma união cujas paredes foram movidas em outro programa é descartada na próxima vez que você alterar uma das duas.

## Estilo de união de um canto

Um canto onde duas paredes se encontram ponta a ponta é desenhado com meia-esquadria, a não ser que você escolha outro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de união}} no grupo {{ui:Paredes}}): clique no canto. Cada clique passa ao próximo estilo: {{ui:Meia-esquadria}}, {{ui:Reta}}, {{ui:Reto}} e depois {{ui:Meia-esquadria}} de novo. Digite `T` para trocar qual das duas paredes passa pelo canto onde você clicou por último. Pressione {{key:Enter}} para terminar. Uma execução do comando é uma etapa de desfazer.
- {{ui:Reta}}: uma parede passa até a face distante da outra, e a outra para encostada na lateral. {{ui:Reto}}: igual, mas a parede que passa termina em esquadro consigo mesma. Em ângulo reto, os dois são parecidos.
- Em Propriedades de uma parede: {{ui:Estilo de união no início}}, {{ui:Estilo de união no fim}}, e {{ui:Passa por cima no início}}, {{ui:Passa por cima no fim}}.
- O estilo é salvo com as duas paredes e vai nos arquivos DWG e DXF. Uma cópia de parede começa sem ele.
- Uma união em T não tem estilo para escolher: passa a parede cuja lateral é encontrada. Um canto onde três ou mais paredes se encontram continua em meia-esquadria. Também continua assim um canto muito agudo (abaixo de cerca de 30 graus) e duas paredes em linha reta.

## Desenhe formas de parede

Cada uma cria as paredes em uma etapa de desfazer, com os cantos unidos. No `WALL`, `O` define um deslocamento de posicionamento (a que distância à esquerda dos seus cliques a parede fica), e `D` desliga a união para as próximas paredes que você desenhar.

- `WALLRECT` (`WR`): dois cantos opostos, como `RECTANG`.
- `WALLROT`: o primeiro lado, depois a distância do outro lado, para um retângulo em qualquer ângulo.
- `WALLPOLY` (`WP`): o número de lados (3 a 64), o centro, `I` para inscrito ou `C` para circunscrito, depois o raio, como `POLYGON`.
- `WALLARC` (`WARC`): centro, início, fim. `D` inverte o sentido do arco.
- `WALLTAN`: clique perto da extremidade de uma parede, depois na extremidade do arco, que sai ao longo dessa parede.
- `WALLPICK`: clique em uma linha ou polilinha e diga se quer levar também as linhas unidas a ela.
- `WALLTRACE`: clique dentro de uma área fechada de linhas e paredes para colocar paredes em volta da menor.

Paredes de planta são retas, então um arco é desenhado como pequenas paredes retas de 15 graus cada. Elas se unem como qualquer canto.

## Cortar paredes

- `WALLSPLIT` (`WS`): clique na parede, depois no ponto. `C` corta onde outra parede a cruza, `G` deixa um vão entre as partes, `F` deixa as extremidades cortadas livres em vez de unidas. A primeira parte mantém o lugar da parede no desenho, e portas e janelas acompanham a parte delas. Um corte que passa por uma porta ou janela é recusado.
- `WALLSPLITGAP` ({{ui:Dividir com vão}}): o mesmo corte, mas pergunta o vão primeiro.
- `WALLDELSEG`: clique na parede, depois nas duas extremidades do trecho a apagar.
- `WALLREJOIN`: clique em duas partes de uma parede para torná-las uma só de novo.

## Mova paredes por distância

- `WALLDIM`: clique em uma cota linear ou alinhada que vai de uma parede a outra, depois digite o novo valor. A parede da extremidade distante se move em esquadro consigo mesma, a parede da primeira extremidade se mantém, e as paredes unidas a ela seguem.
- `WALLOFFSET` (`WO`): clique em uma parede, depois no lado para onde movê-la (`D` digita uma distância, `C` cria uma cópia).
- `WALLSTRETCH`: uma janela em volta das extremidades da parede, depois um ponto base e um segundo ponto.
- Em Propriedades, um {{ui:Comprimento}} digitado mantém o início e leva junto a parede unida na extremidade distante. Uma nova {{ui:Espessura}} cresce a partir da {{ui:Linha de localização}} que você escolheu (a face esquerda, a face direita ou o centro).

## Travar paredes

Um travamento fica com a parede no arquivo. Se você mover uma parede travada, a outra segue. Se uma mudança mover as duas paredes de forma diferente, ela é recusada e nada muda.

- `WALLHOLD`: trava uma parede a outra parede. `A` a move primeiro para a linha da outra parede, `K` mantém a distância que ela tem.
- `WALLHOLDDIM`: trava a distância entre duas paredes paralelas.
- `WALLGRID`: trava uma parede a uma linha de grade (uma linha em uma camada de grade, com a etiqueta em texto em uma das extremidades), ao longo dela ou com uma extremidade sobre ela. Uma parede travada ao longo da linha mantém a distância que tem dela. Mova a linha de grade com `GRIDMOVE` e a parede segue inteira, com as paredes unidas a ela. Uma parede que está ao longo de uma linha de grade se move inteira com ela, mesmo sem trava, e uma parede que só termina na linha é esticada por essa extremidade.
- `WALLHOLDS` lista os travamentos. `WALLUNHOLD` tira os travamentos de uma parede.
- Cada travamento mostra um pequeno cadeado na planta: ao lado do meio da parede travada, ou ao lado da extremidade travada a uma linha de grade. Clique em um cadeado para tirar esse travamento.

## O que ainda não está aqui

Os travamentos usam as linhas de centro das paredes. Paredes aqui não têm camadas, então não há prioridade de camada em uma junção, e as paredes não são curvas (veja os arcos acima). Ninguém testou estas ferramentas em um desenho grande, e elas não foram conferidas em outro programa de CAD.

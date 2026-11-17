---
title: Referência de comandos
summary: Todos os comandos do aplicativo de desenho CadCraft, com seus aliases, as perguntas que fazem, suas opções e padrões.
keywords: comandos, aliases, lista de comandos, área, perímetro, measuregeom, linha, pline, círculo, arco, aparar, deslocar, dimlinear, bloco, inserir, layout, plotar, zoom, ajuda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicar, selectall
from: 7db2646b
---

Digite o nome de um comando ou um alias e pressione {{key:Enter}} ou {{key:Space}}. Não há diferença entre maiúsculas e minúsculas, e um `_`, `-`, `.` ou `'` no início é ignorado. Digite `HELP` (ou `?`) para imprimir no histórico da linha de comando uma lista curta de todos os comandos; pressione {{key:F1}} para esta ajuda.

Como ler os avisos: as opções ficam entre colchetes, e você escolhe uma digitando suas letras maiúsculas (`D` para Diâmetro). Um padrão fica entre sinais de menor e maior; pressione {{key:Enter}} para aceitá-lo. Quando for pedido um ponto, você pode clicar ou digitar qualquer um dos formatos de [Entrada de coordenadas e distância](topic:coordinate-entry). Quando for pedida uma distância, você pode digitar um número ou clicar em dois pontos.

Pressionar {{key:Enter}} onde for exigido um ponto ou um objeto, e não houver padrão, encerra o comando. {{key:Esc}} o cancela. O que um comando fez é uma única etapa de desfazer.

## Desenhar

### LINE

Aliases: `L`. Segmentos retos, cada um um objeto próprio.

- `Especifique o primeiro ponto` (Enter: começar pelo último ponto informado)
- `Especifique o próximo ponto [Desfazer (U)]`, repetido. Depois de dois segmentos: `[Desfazer (U)/Fechar (C)]`.
- `U` desfaz o último segmento, `C` fecha até o primeiro ponto e encerra. Enter encerra.

### PLINE

Aliases: `PL`. Uma polilinha de segmentos de linha e de arco.

- `Especifique o ponto inicial`
- `Especifique o próximo ponto [Arco (A)/Desfazer (U)/Fechar (C)]` (Fechar quando houver dois segmentos)
- `A` troca para arcos: `Especifique a extremidade do arco [Linha (L)/Fechar (CL)/Desfazer (U)]`. Cada arco continua tangente ao segmento anterior. `L` volta para linhas, `CL` fecha com um arco.
- Enter encerra; a polilinha permanece aberta.

### CIRCLE

Aliases: `C`.

- `Especifique o ponto central do círculo [3P/2P/Ttr (tan tan raio)]`
- `Especifique o raio do círculo [Diâmetro] <último raio>`; `D` pede `Especifique o diâmetro do círculo`.
- `2P`: duas extremidades de um diâmetro. `3P`: três pontos no círculo.
- `T` (também o comando `TTR`, e {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Círculo: Tan, Tan, Raio}}): `Especifique o ponto no objeto para a primeira tangente do círculo`, depois a segunda, e então o raio (Enter: o último). O círculo toca os dois objetos (linhas, arcos, círculos, segmentos de polilinha, também dentro de blocos); entre os que tocam, o que fica mais perto dos seus pontos escolhidos. "Círculo não existe" quando nenhum serve.
- `TTT` (ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Círculo: Tan, Tan, Tan}}): três objetos; o círculo que toca os três, o mais próximo dos seus pontos escolhidos (três linhas dão o círculo interno ou um externo, conforme onde você escolher).

### ARC

Aliases: `A`.

- `Especifique o ponto inicial do arco [Centro]`, `Especifique o segundo ponto do arco`, `Especifique o ponto final do arco`: um arco por três pontos.
- `C`: `Especifique o ponto central do arco`, `Especifique o ponto inicial do arco`, `Especifique o ponto final do arco`. O arco percorre o sentido anti-horário, do início ao fim.

### RECTANG

Aliases: `REC`, `RECTANGLE`. Uma polilinha fechada.

- `Especifique o primeiro canto`, `Especifique o outro canto`. Digite `@largura,altura` para o segundo canto.

### POLYGON

Aliases: `POL`. Um polígono regular como polilinha fechada.

- `Informe o número de lados <4>` (3 a 1024)
- `Especifique o centro do polígono`
- `Informe uma opção [Inscrito no círculo/Circunscrito ao círculo] <I>`
- `Especifique o raio do círculo`: clique ou digite um ponto; sua distância define o tamanho e sua direção gira o polígono.

### ELLIPSE

Aliases: `EL`.

- `Especifique a extremidade do eixo da elipse [Centro]`, `Especifique a outra extremidade do eixo`, `Especifique a distância até o outro eixo`
- `C`: `Especifique o centro da elipse`, `Especifique a extremidade do eixo`, depois a distância até o outro eixo.
- `I` (`Isocírculo`, somente enquanto {{cmd:ISODRAFT}} estiver ligado): centro, depois raio ou `Diâmetro`: a elipse que um círculo mostra no plano isométrico atual.

### HATCH

Aliases: `H`, `BH`, `BHATCH`; ou {{ui:Hachura}} na barra de ferramentas. Imprime primeiro o padrão, a escala e o ângulo atuais.

- `Escolha um ponto interno [Selecionar objetos/Padrão/Escala/Ângulo]`, repetido (`Desfazer` quando já houver uma área): cada clique adiciona a área fechada ao redor dele, com as formas fechadas dentro dela como ilhas. Enter cria uma única hachura com todas elas.
- `S`: `Selecione objetos fechados` (polilinhas fechadas, círculos, elipses fechadas).
- `P`: `Informe um nome de padrão, SOLID, ou ? para a lista <atual>`. `SC`: `Especifique a escala do padrão`. `A`: `Especifique o ângulo do padrão`.
- `G` (Gradiente): o preenchimento é um gradiente em vez de um padrão. Veja {{cmd:GRADIENT}} para as suas perguntas.

Veja [Hachura e áreas de preenchimento](topic:hatch).

### GRADIENT

Aliases: `GD`. Preenche uma área com um gradiente de uma ou duas cores. Ele pergunta primeiro o gradiente, depois segue como {{cmd:HATCH}} faz (`Escolha um ponto interno`, `S` para objetos fechados, {{key:Enter}} para terminar).

- `Informe uma opção de gradiente [Tipo/Uma cor/Duas cores/Ângulo/Centralizado/eXit] <X>`, repetido; a cada vez imprime o gradiente como está.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ou um deles invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). As primeiras letras bastam.
- `O`: uma cor, depois o seu tom de 0 a 1 (0 a escurece até o preto, 0,5 é a própria cor, 1 a clareia até o branco). `TW`: a primeira e a segunda cor. Uma cor é um número de 1 a 255, três números como `255,128,0`, ou `#rrggbb`.
- `A`: o ângulo em que o gradiente corre. `C`: centralizado Sim ou Não (Não move o meio do gradiente para um dos lados).
- Recusa uma cor ou um tipo que não conhece, e um tom fora de 0 a 1.

{{cmd:HATCHEDIT}} `G` e Propriedades (Gradiente) alteram um gradiente depois, ou transformam qualquer hachura em um. Um gradiente é desenhado na tela e plotado. DWG 2004 e posteriores o mantêm como hachura de gradiente real; DXF 2000 e DWG 2000 o mantêm para o CadCraft, e outros programas veem um preenchimento sólido na primeira cor.

### HATCHGENERATEBOUNDARY

Aliases: `HGB`. Refaz o contorno a partir de uma hachura que o perdeu. `Selecione hachuras` (ou selecione-as antes), depois `Vincular cada hachura ao seu novo contorno, para que a hachura o acompanhe? [Sim/Não] <Sim>`.

- Cada laço da hachura torna-se uma polilinha fechada na camada da hachura; as novas polilinhas ficam selecionadas. Uma borda curva volta como os pequenos segmentos retos que a hachura mantém.
- Com Sim, a hachura acompanha o novo contorno, como uma hachura feita com {{cmd:HATCH}}. Uma etapa de desfazer.
- Informa quando nenhuma hachura foi selecionada.

### POINT

Aliases: `PO`; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Ponto}}. Objetos de ponto, um por clique, até Enter.

- `Especifique um ponto`

### XLINE

Aliases: `XL`; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Linha de construção}}. Linhas de construção, sem fim nas duas direções. Veja [Linhas de construção e semirretas](topic:construction-lines).

- `Especifique um ponto [Horiz/Vert/Âng/Bissetriz/Deslocar]`, depois `Especifique o ponto de passagem` para cada linha, até Enter.
- `A`: `Informe o ângulo da linha de construção [Referência] <0>`; `R` pede primeiro `Selecione um objeto de linha`.
- `B`: `Especifique o vértice do ângulo`, `Especifique o ponto inicial do ângulo`, depois `Especifique o ponto final do ângulo` para cada linha.
- `O`: `Especifique a distância de deslocamento [Passante] <Passante>`, depois `Selecione um objeto de linha` e `Especifique o lado para deslocar` (ou `Especifique o ponto de passagem`) para cada linha.

### RAY

Sem aliases; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Semirreta}}. `Especifique o ponto inicial`, depois `Especifique o ponto de passagem` para cada semirreta, até Enter.

### TEXT

Aliases: `DT`, `DTEXT`; ou {{ui:Texto}} na barra de ferramentas. Texto de uma linha; cada linha é um objeto próprio.

- `Especifique o ponto inicial do texto [Justificar]`
- `J`: `Informe uma opção [Esquerda/Centro/Direita/Meio/TL/MC] <L>`, depois `Especifique o ponto de inserção do texto`
- `Especifique a altura <altura atual do texto>`
- `Especifique o ângulo de rotação do texto <0>`
- `Informe o texto`, repetido: cada Enter inicia a linha seguinte, abaixo. Enter em uma linha vazia encerra. {{key:Space}} digita um espaço aqui.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} coloca marcas em uma linha, arco, círculo, polilinha, spline ou elipse que a dividem em partes iguais. Escolha o objeto, depois informe o número de partes (2 a 32767). Um objeto aberto recebe uma marca a menos que o número de partes; um fechado recebe também uma marca no início. O próprio objeto não é cortado. As marcas são pontos; `Bloco` pede um bloco deste desenho, e se ele gira para acompanhar o objeto. Os comprimentos ao longo de splines e elipses são medidos por cordas curtas. Recusa textos, hachuras e outros objetos que não têm comprimento.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} coloca uma marca a cada comprimento dado ao longo de uma linha, arco, círculo, polilinha, spline ou elipse, contando a partir da extremidade mais próxima de onde você escolheu (um objeto fechado: a partir do seu início). Informe o comprimento digitando-o ou por dois pontos. A extremidade final de um objeto aberto não recebe marca. `Bloco` coloca um bloco em cada marca, em vez de um ponto. Recusa um comprimento de 0, um maior que o objeto, e um que resultaria em mais de 32767 marcas.

### BOUNDARY

Aliases: `BO`, `BPOLY`. {{cmd:BOUNDARY}} cria uma polilinha fechada ao redor da área que contém o ponto escolhido, a partir de quaisquer linhas, arcos, círculos, polilinhas e curvas que a delimitam na tela. Trechos sobre um arco ou círculo voltam como segmentos de arco; trechos de elipses e splines voltam como pequenos segmentos retos. Com `Ilhas` ativado (a configuração inicial), cada área fechada dentro dela também recebe sua própria polilinha. Continue escolhendo pontos; Enter encerra. Os objetos que delimitam a área permanecem como estão. Informa quando nenhuma área fechada contém o ponto.

### BLEND

{{cmd:BLEND}} desenha uma spline entre as extremidades de duas curvas abertas. Escolha cada curva perto da extremidade a unir. `CONtinuidade` escolhe `Tangente` (a spline sai e chega seguindo as duas curvas) ou `Suave` (também acompanha como elas se curvam nas extremidades); a escolha fica salva durante a sessão. As duas curvas não são alteradas. Recusa objetos fechados e duas extremidades que já se encontram.

### REGION

Alias: `REG`. {{cmd:REGION}} transforma objetos fechados em regiões: áreas planas que você pode unir, cortar e medir. Selecione círculos, polilinhas fechadas, elipses fechadas ou splines fechadas, ou linhas, arcos e polilinhas abertas que fecham um laço ponta a ponta; cada laço vira uma região e substitui os objetos de que veio. Arcos continuam arcos; elipses e splines viram pequenos segmentos retos. O que não está fechado e não fecha laço algum permanece como está, e o programa informa quantos foram. No desenho, uma região é uma ou mais polilinhas fechadas mantidas juntas como um grupo sem nome; assim, um clique seleciona a região inteira e uma cópia é uma região própria. Outros programas que abrem o arquivo veem polilinhas fechadas.

Com regiões no desenho, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} na guia 2D trabalham com regiões: `UNION` une as regiões selecionadas em uma (regiões separadas tornam-se uma região de vários contornos); `SUBTRACT` pede as regiões das quais subtrair e depois as que serão retiradas (um furo continua fazendo parte da região); `INTERSECT` mantém a área que todas compartilham. Cada um informa a área do resultado e é uma única etapa de desfazer. Recusam-se quando nada restaria ou quando nada é compartilhado. Na guia 3D, e em um desenho sem regiões, os mesmos comandos funcionam em sólidos, como antes.

## Modificar

Aliases: `MT`, `T`; ou {{ui:Parágrafo}} na barra de ferramentas. Texto de parágrafo que quebra linhas em uma largura, digitado no lugar.

- `Especifique o primeiro canto`
- `Especifique o canto oposto [Altura/Justificar/Espaçamento entre linhas/Rotação/Largura]`: a largura entre os dois cantos é onde o texto quebra. `H` pede `Especifique a altura`, `J` `Informe a justificação [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Informe o fator de espaçamento entre linhas (0,25 a 4)`, `R` `Especifique o ângulo de rotação`, `W` `Especifique a largura (0 para não quebrar)` e pula o segundo canto.
- Depois abre-se uma caixa sobre o desenho: digite, {{key:Enter}} para um novo parágrafo, {{key:Mod+Enter}} ou um clique fora para terminar, {{key:Esc}} para cancelar. Sua barra define altura, espaçamento entre linhas, largura e justificação. Veja [Adicionar texto e rótulos](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliases: `ED`, `DDEDIT`; ou clique duas vezes em um texto. `Selecione um texto para editar`, repetido até {{key:Enter}}: cada um abre na mesma caixa. Iniciado em um texto selecionado ou clicado duas vezes, edita esse e encerra.

### ERASE

Aliases: `E`, `DELETE`; ou pressione {{key:Delete}} com objetos selecionados.

- `Selecione objetos` (pulado quando os objetos já estão selecionados)

### MOVE

Aliases: `M`.

- `Selecione objetos`
- `Especifique o ponto base [Deslocamento]`, `Especifique o segundo ponto`
- `D`: `Especifique o deslocamento`, digitado como `dx,dy`.

### COPY

Aliases: `CO`, `CP`. Copia quantas vezes você informar pontos.

`Matriz` no prompt do segundo ponto cria uma linha de uma vez: informe o número de itens (o original conta como um), depois o ponto onde vai a primeira cópia; as outras seguem com o mesmo espaçamento. `Ajustar` faz desse ponto o lugar da última cópia, com as outras distribuídas igualmente entre elas.

- `Selecione objetos`
- `Especifique o ponto base [Deslocamento]`
- `Especifique o segundo ponto [Desfazer (U)]`, repetido até Enter. `U` desfaz a última cópia.

### ROTATE

Aliases: `RO`.

- `Selecione objetos`, `Especifique o ponto base`
- `Especifique o ângulo de rotação <último ângulo>`: em graus, positivo no sentido anti-horário; ou clique em um ponto para girar em direção a ele.

### SCALE

Aliases: `SC`.

- `Selecione objetos`, `Especifique o ponto base`
- `Especifique o fator de escala`: digite um fator como `0.5` ou `2`. Um ponto clicado dá sua distância até o ponto base como fator.

### MIRROR

Aliases: `MI`.

- `Selecione objetos`
- `Especifique o primeiro ponto da linha de espelho`, `Especifique o segundo ponto da linha de espelho`
- `Apagar objetos de origem? [Sim/Não] <N>`

### ALIGN

Aliases: `AL`; ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar}}.

- `Selecione objetos`
- `Especifique o primeiro ponto de origem`, `Especifique o primeiro ponto de destino`
- `Especifique o segundo ponto de origem (Enter para continuar)`, `Especifique o segundo ponto de destino`
- `Especifique o terceiro ponto de origem (Enter para continuar)`, `Especifique o terceiro ponto de destino`
- Com dois pares: `Escalar objetos com base nos pontos de alinhamento? [Sim/Não] <N>`

Veja [Alinhar objetos](topic:modify-objects#align-objects).

### ALIGNTO

- `Selecione objetos` (ou a seleção), `Alinhar [Esquerda/Centro/Direita/Topo/Meio/Base] <Esquerda>`, `Em relação a [Seleção/Primeiro/Último/Ponto] <Seleção>`; `P` pede o ponto. A seleção permanece.

### DISTRIBUTE

- `Selecione objetos` (no mínimo três), `Distribuir [Horizontalmente/Verticalmente] <Horizontalmente>`, `Espaçar igualmente [Centros/Espaçamentos] <Espaçamentos>`. Os dois externos permanecem; a seleção permanece.

### ALIGNPANEL

Aliases: `ALP`; ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar e distribuir}}. Abre o painel que executa ALIGNTO e DISTRIBUTE por cliques.

### LASER

Aliases: `LASERCUT`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Laser…}}. Abre o painel Laser sobre o desenho: o que cada camada faz (cortar, vincar, gravar, preencher, imagem), a visualização, o G-code GRBL para salvar, e o enquadramento e o envio por Web Serial. Veja [Enviar um desenho para um laser](topic:laser-cutting).

### STRETCH

Aliases: `S`; ou {{ui:Esticar}}. `Selecione objetos para esticar`: arraste janelas de cruzamento (ou digite `C`) sobre as extremidades para mover. `Especifique o ponto base [Deslocamento]`, `Especifique o segundo ponto`. Pontos dentro das janelas se movem: extremidades de linhas, vértices de polilinhas (segmentos de arco mantêm sua altura), pontos de cota; círculos, elipses, textos, pontos e blocos se movem inteiros quando o centro ou o ponto de inserção está dentro. Uma seleção feita antes do comando mantém as janelas de cruzamento (e os laços) que a fizeram, de modo que a esticam da mesma forma. Sem janela, os objetos se movem inteiros.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliases: `AR`; ou {{ui:Matriz}}. `Selecione objetos`, depois `Informe o tipo de matriz [Retangular/POlar] <Retangular>` (somente ARRAY).

- Retangular começa com 4 colunas × 3 linhas, espaçadas em 1,5 vez o tamanho dos objetos, mostradas como visualização. `Informe uma opção [COUnt/Espaçamento/COLunas/Linhas/eXit] <X>`: `COU` pede colunas e linhas, `S` as distâncias entre colunas e entre linhas (negativo vai para a esquerda ou para baixo), `COL` e `R` uma direção cada.
- Polar pede `Especifique o ponto central da matriz`, começa com 6 itens em volta de todo o círculo, girados. `Informe uma opção [Itens/Ângulo de preenchimento/Girar itens/eXit] <X>`: `I` itens, `F` o ângulo a preencher (+ anti-horário, − horário), `ROT` Sim ou Não.
- {{key:Enter}} (eXit) cria as cópias, como objetos simples. Uma etapa de desfazer.
- `AS` (Associativa) alterna entre cópias simples e uma matriz que continua editável: um objeto que você altera depois com {{cmd:ARRAYEDIT}}, por seus grips ou em Propriedades. A escolha é lembrada ({{cmd:ARRAYASSOCIATIVITY}}); começa em cópias simples.

### ARRAYPATH

Cópias ao longo de uma curva. `Selecione objetos`, depois `Selecione a curva do caminho`: uma linha, arco, círculo, elipse, polilinha ou spline (não um dos objetos sendo copiados). O caminho começa na extremidade mais próxima dos objetos, e o primeiro item são os objetos onde estão.

- `Informe uma opção [Método/Itens/Espaçamento/Alinhar/Associativa/eXit] <X>`, com visualização. `M`: `Dividir` espalha os itens igualmente por todo o caminho, `Medir` coloca um a cada tanto ao longo dele. `I`: o número de itens (com Medir, 0 significa quantos couberem; um número além do fim do caminho é limitado ao que cabe). `SP`: a distância entre os itens ao longo do caminho (muda para Medir). `AL`: Sim faz cada item girar para acompanhar o caminho, Não os mantém em pé.
- `AS` como em {{cmd:ARRAY}}. Com ele ligado, a matriz mantém sua própria cópia da forma do caminho: editar depois a curva do caminho não move os itens.
- Recusa um caminho que não é uma curva, e um único item.

### ARRAYEDIT

Altera uma matriz feita com Associativa. `Selecione a matriz` (ou selecione-a antes). Imprime como a matriz está agora, depois pergunta até {{key:Enter}}:

- Retangular: `COL` colunas e seu espaçamento, `R` linhas e seu espaçamento, `A` o ângulo em que as colunas correm.
- Polar: `I` itens, `F` o ângulo de preenchimento, `ROT` girar itens Sim ou Não.
- Caminho: `M` Dividir ou Medir, `I` itens, `SP` espaçamento, `AL` alinhar com o caminho.
- `S` (Origem) abre os objetos que a matriz repete, por conta própria, como o editor de blocos. Desenhe e edite ali; {{cmd:ARRAYCLOSE}} salva ou descarta, e cada item acompanha.
- `REP` (REPlace): `Selecione os objetos de substituição`, `Especifique o ponto base dos objetos de substituição`, depois clique nos itens a substituir, {{key:Enter}}. Esses itens passam a mostrar a substituição; os objetos de substituição saem do desenho e ficam na matriz. `RES` (RESet) mostra os objetos de origem em todos os itens de novo.
- Cada alteração é uma etapa de desfazer. Recusa cópias simples, uma referência de bloco simples e uma matriz em camada bloqueada.

Os mesmos números estão em Propriedades, em Matriz, e a matriz tem grips: seu ponto base a move, o grip no segundo item define o espaçamento, o grip depois do último item define a quantidade (polar: o segundo item define quantos itens, o último item o ângulo de preenchimento). {{cmd:EXPLODE}} transforma uma matriz de volta em cópias simples.

### ARRAYCLOSE

Encerra {{cmd:ARRAYEDIT}} Origem: `Salvar as alterações nos objetos de origem da matriz? [Salvar/Descartar] <Salvar>`. Informa quando nenhum objeto de origem de matriz está aberto. {{cmd:BCLOSE}} faz o mesmo.

### ARRAYASSOCIATIVITY

`Informe novo valor para ARRAYASSOCIATIVITY (1 = matrizes continuam editáveis, 0 = cópias simples)`. Define com o que {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR e {{cmd:ARRAYPATH}} começam; a opção `AS` deles altera a mesma configuração. Lembrado neste navegador.

### OFFSET

Aliases: `O`. Linhas, arcos, círculos e polilinhas.

Quando uma polilinha se afasta para fora e seus segmentos retos se separam em um canto, {{cmd:OFFSETGAPTYPE}} decide como a lacuna é fechada.

- `Especifique a distância de deslocamento [Passante] <última distância, ou Passante>`
- `Selecione o objeto para deslocar`, depois `Especifique o ponto do lado para deslocar` (ou, com Passante, `Especifique o ponto de passagem`), repetido até Enter.

### OFFSETGAPTYPE

- `Lacunas nos cantos do deslocamento: 0 estender, 1 arredondar, 2 chanfrar`: como {{cmd:OFFSET}} fecha as lacunas nos cantos externos de uma polilinha. `0` estende os segmentos até se encontrarem (a configuração inicial), `1` os une com um arco ao redor do canto antigo, `2` com um corte reto. Os cantos internos e os segmentos de arco não são afetados. Mantido nesta sessão.

### EXTRIM

{{cmd:EXTRIM}} apara tudo de um lado de uma aresta. Escolha a aresta de corte (uma linha, arco, círculo, polilinha, elipse, spline ou linha de construção), depois um ponto do lado a limpar: cada linha, arco, círculo, polilinha e linha de construção que cruza a aresta perde a parte daquele lado, a partir da aresta. Enquanto você escolhe o lado, as partes que sairiam seguem o ponteiro. Para uma aresta fechada, os lados são interno e externo. Objetos que apenas tocam a aresta, e textos, hachuras, splines e elipses que a cruzam, permanecem como estão. Uma etapa de desfazer.

### TRIMEXTENDMODE

- `Informe novo valor para TRIMEXTENDMODE (1 Rápido, 0 Padrão)`: como {{cmd:TRIM}} e {{cmd:EXTEND}} começam. `1` Rápido: todo objeto é uma aresta de corte ou limite. `0` Padrão: pedem primeiro as arestas. Também `(setvar "TRIMEXTENDMODE" 0)` em LISP.

### TRIM

Aliases: `TR`. Imprime primeiro `Configurações atuais: modo Rápido (TRIMEXTENDMODE 1), arestas: sem prolongar, arrastar traça um caminho`. No modo Rápido, todo objeto visível é uma aresta de corte, e um objeto que nada cruza é apagado; no modo Padrão, pede primeiro `Selecione as arestas de corte (Enter = todos os objetos)` e corta apenas nelas.

- `Selecione o objeto para aparar ou Shift+selecione para estender [Arestas de corte/Cerca/Cruzamento/Modo/Aresta/Apagar/Desfazer]`, repetido: clique no pedaço a remover (ele fica cinza e tracejado enquanto o ponteiro estiver sobre ele), arraste um caminho por vários pedaços (todos saem em uma etapa), ou clique em dois pontos vazios para uma cerca entre eles. {{key:Shift}} estende em vez disso. `T` escolhe as arestas de corte (modo Padrão), `F` pede pontos de cerca, `C` dois cantos de janela (pedaços parcialmente dentro também saem), `O` pede `Informe uma opção de modo de aparar [Rápido/Padrão]`, `E` pede `Informe um modo de extensão de aresta implícita [Estender/Não estender]` (EDGEMODE), `R` apaga os objetos que você selecionar, `U` desfaz o último pedaço ou arrasto. Enter encerra. Veja [Aparar e estender](topic:trim-and-extend).

- Um clique em uma hachura corta a hachura: as arestas de corte dividem a área hachurada, e o pedaço clicado é removido (nenhum contorno desenhado permanece no lugar). A hachura mantém seu padrão ou gradiente; uma hachura vinculada ao seu contorno deixa de estar vinculada depois, pois já não o preenche. Informa quando nenhuma aresta de corte divide a hachura ali, quando o clique está fora da hachura, e quando nada restaria (use {{cmd:ERASE}}). Um caminho ou uma cerca arrastados não cortam hachuras.

### EXTEND

Aliases: `EX`. O mesmo que TRIM ao contrário: `Selecione o objeto para estender ou Shift+selecione para aparar [Arestas limite/Cerca/Cruzamento/Modo/Aresta/Desfazer]`. Um clique alonga a extremidade mais próxima até o próximo limite; um caminho ou uma cerca arrastados alongam todo objeto que cruzam; {{key:Shift}} apara. `B` escolhe as arestas limite (modo Padrão). Modo e Aresta são compartilhados com TRIM.

### LINKVIEWS

Aliases: `SYNCVIEWS`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Vincular as vistas dos painéis}}, ou o ícone de vínculo nas guias do desenho. `Vincular as vistas dos painéis [ON/OFF]` (Enter alterna para o outro estado): enquanto estiver ligado, um pan ou zoom no painel ativo move todos os painéis que mostram o mesmo tipo de espaço. Veja [Dividir a tela](topic:split-screen).

### OPENIN3D

Sem aliases; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Abrir no ModelCraft}}, onde o aplicativo de modelagem 3D recebe um desenho entregue. Abre-o ali em uma nova guia, como DWG (nada é enviado). Se o navegador bloquear a guia, informa isso.

### LASSOMODE

`Informe novo valor para LASSOMODE (1 = laço, 0 = retângulo)`: o que pressionar e arrastar em um ponto vazio desenha. O mesmo que Configurações › CadCraft › Arrastar para selecionar. Veja [Seleção por laço](topic:lasso-selection).

### FILLET

Aliases: `F`. Linhas, arcos, círculos e polilinhas. Imprime primeiro `Configurações atuais: Modo = TRIM, Raio = 0`.

- `Selecione o primeiro objeto [Desfazer/Polilinha/Raio/Aparar/Múltiplo]`
  - `R` pede `Especifique o raio de concordância <último>`. `T` pede `Informe uma opção de modo de aparar [Aparar/Não aparar]`: com Não aparar os objetos permanecem como estão e apenas o arco é acrescentado.
  - `M` mantém o comando para mais cantos até {{key:Enter}}; `U` desfaz o último canto sem sair do comando.
  - `P` pede `Selecione polilinha 2D [Raio]` e arredonda cada canto onde dois segmentos retos se encontram. Concordâncias que ela já tem são substituídas pelo novo raio; raio 0 as remove. Cantos cujos lados são curtos demais para o raio são deixados e contados.
- `Selecione o segundo objeto ou Shift+selecione para aplicar o canto [Raio]`. Mantenha {{key:Shift}} pressionado ao clicar para um canto vivo, qualquer que seja o raio.

Clique em cada objeto na parte que você quer manter. Duas linhas que não se encontram são estendidas. Duas linhas paralelas recebem um meio círculo através da lacuna, na extremidade da primeira linha mais próxima do seu clique. Um círculo nunca é cortado. Dois segmentos de uma mesma polilinha lado a lado recebem o arco dentro da polilinha; uma polilinha e outro objeto funcionam quando o corte cai no primeiro ou último segmento da polilinha.

### CHAMFER

Aliases: `CHA`. Linhas e os segmentos retos de polilinhas. Imprime primeiro as distâncias atuais (ou comprimento e ângulo).

- `Selecione a primeira linha [Desfazer/Polilinha/Distância/Ângulo/Aparar/mEtodo/Múltiplo]`
  - `D` pede `Especifique a primeira distância do chanfro <última>` e `Especifique a segunda distância do chanfro <a primeira>`: a primeira é cortada na primeira linha que você escolher, a segunda na outra.
  - `A` pede `Especifique o comprimento do chanfro na primeira linha` e `Especifique o ângulo do chanfro a partir da primeira linha`.
  - `E` (mEtodo) escolhe qual dos dois o próximo chanfro usa. `T`, `M`, `U` e `P` funcionam como em {{cmd:FILLET}}.
- `Selecione a segunda linha ou Shift+selecione para aplicar o canto [Distância/Ângulo/mEtodo]`. {{key:Shift}}+clique faz um canto vivo.

Uma distância maior que a linha é recusada (`Distância muito grande.`).

### BREAK e BREAKATPOINT

Aliases: `BR`. `Selecione o objeto` (onde você clica é o primeiro ponto), `Especifique o segundo ponto de quebra [Primeiro ponto]`; `F` pede `Especifique o primeiro ponto de quebra` e `Especifique o segundo ponto de quebra`. A parte entre eles sai; em um círculo, no sentido anti-horário a partir do primeiro ponto. BREAKATPOINT pede `Especifique o ponto de quebra` e divide o objeto em dois ali (não um círculo).

### LENGTHEN

Aliases: `LEN`. `Selecione um objeto para medir [DElta/Percentual/Total/DYnâmico]`: um clique imprime `Comprimento atual` (e o ângulo incluído de um arco) e pergunta de novo. `DE` pede `Informe o comprimento de variação (negativo encurta) [Ângulo]`, `P` `Informe o comprimento em porcentagem`, `T` `Especifique o comprimento total [Ângulo]`, `DY` arrasta. Depois `Selecione um objeto para alterar [Desfazer]`, repetido: a extremidade mais próxima do clique se move. Linhas, arcos e polilinhas abertas.

### JOIN

Aliases: `J`. `Selecione objetos para unir`. Linhas, arcos e polilinhas abertas que se encontram ponta a ponta tornam-se polilinhas (fechadas quando a cadeia se fecha); linhas sobre uma mesma reta tornam-se uma linha; arcos de um mesmo círculo tornam-se um arco ou o círculo. O histórico informa quantos objetos foram unidos e quantos não.

### MATCHPROP

Aliases: `MA`, `PAINTER`. `Selecione o objeto de origem`, depois `Selecione os objetos de destino [Configurações]` e {{key:Enter}}. Copia camada e cor, e entre objetos do mesmo tipo a altura e a largura do texto, os tamanhos de cota, ou o padrão de hachura. `S` pede `Ligue ou desligue uma propriedade [Cor/Camada/Texto/Cota/Hachura]`, repetido até {{key:Enter}}; a escolha fica lembrada durante a sessão.

### EXPLODE

Aliases: `X`. Polilinhas viram linhas e arcos, referências de bloco viram seus objetos, cotas viram linhas, setas e textos. Uma matriz que continua editável ({{cmd:ARRAYEDIT}}) vira cópias simples dos seus objetos.

- `Selecione objetos`

### GROUP

Alias: `G`. {{cmd:GROUP}} dá aos objetos selecionados um nome que eles compartilham. Selecione os objetos, depois digite um nome (sem espaços; `?` lista os grupos; Enter cria um grupo sem nome) e, para um grupo nomeado, uma descrição opcional. A partir daí, um clique em um deles, ou uma janela que pegue um deles, seleciona todos, de modo que se movem, copiam e apagam juntos; cada objeto continua sendo um objeto próprio. Um objeto pode estar em vários grupos. Uma cópia de um grupo inteiro é um novo grupo sem nome; uma cópia de um membro isolado entra no grupo. Os grupos pertencem ao espaço em que foram criados (o modelo ou uma folha). São mantidos quando você salva como DWG ou DXF e abre o arquivo de novo no CadCraft; arquivos DXF 2000 também os trazem como objetos de grupo para outros programas, e grupos criados em outro programa são lidos quando um DXF ou DWG é aberto.

### UNGROUP

{{cmd:UNGROUP}} desfaz grupos: selecione objetos dos grupos (cada grupo em que estiverem é desfeito) ou digite `Nome` e o nome do grupo. Os objetos permanecem no desenho. Uma etapa de desfazer restaura os grupos.

### GROUPEDIT

{{cmd:GROUPEDIT}} altera um grupo. Escolha um dos seus objetos, ou `Nome` e o seu nome; um grupo que já está selecionado é aceito como está. Depois: `Adicionar` objetos (escolhidos um de cada vez, não grupo por grupo), `Remover` objetos, `REnomear` o grupo, alterar a sua `Descrição`, ou definir `Selecionável` (se um clique em um objeto seleciona o grupo inteiro). `eXit` ou Enter encerra. Um grupo sem objetos restantes desaparece.

### PICKSTYLE

- `Seleção de grupo: 0 um clique seleciona um objeto, 1 o grupo inteiro`: com `1` (a configuração inicial) um clique ou uma janela em um objeto agrupado seleciona o grupo inteiro; com `0`, objetos isolados, para que você edite um membro. Mantido nesta sessão.

## Área de transferência

A área de transferência própria do CadCraft: funciona dentro de um desenho, entre desenhos e entre guias do CadCraft neste navegador. Veja [Copiar, colar e duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ou {{ui:Copiar}} no grupo {{ui:Editar}}. Copia objetos para a área de transferência, com os blocos e as camadas que usam. Os objetos permanecem selecionados.

- `Selecione objetos para copiar` (pulado quando os objetos já estão selecionados)

### CUTCLIP

{{key:Mod+X}}, ou {{ui:Recortar}} no menu {{ui:Mais}}. Copia objetos para a área de transferência e depois os apaga (uma etapa de desfazer).

- `Selecione objetos para recortar` (pulado quando os objetos já estão selecionados)

### COPYBASE

Copia objetos para a área de transferência com um ponto base que você escolhe; colar posiciona esse ponto.

- `Especifique o ponto base`
- `Selecione objetos para copiar`

### PASTECLIP

{{key:Mod+V}}, ou {{ui:Colar}} no grupo {{ui:Editar}}. A cópia segue o cursor, pendurada pelo canto inferior esquerdo da sua extensão (ou pelo seu centro, ou pelo ponto de {{cmd:COPYBASE}}; veja [Configurações do CadCraft](topic:settings)).

- `Especifique o ponto de inserção`

Os objetos colados ficam selecionados. Um bloco que o desenho já tem com o mesmo nome mantém a definição deste desenho.

Quando uma área copiada no MarkupCraft é mais recente do que o que o CadCraft copiou (e tem menos de 6 horas), {{key:Mod+V}} e `PASTECLIP` colam essa área: veja `PASTEAREA`.

### PASTEAREA

Aliases: `PAREA`. {{ui:Colar uma área copiada}} no menu {{ui:Mais}}. Cola uma área copiada com {{ui:Copiar área}} no MarkupCraft como imagem em seu tamanho real. Veja [Imagens em um desenho](topic:pictures).

- `Especifique o canto inferior esquerdo da área copiada`
- `Escala do tamanho do papel (100 para uma folha 1:100; Pontos: dois pontos nela e a distância real entre eles) [Pontos] <1>` (somente quando a folha não tinha escala de desenho): um número, {{key:Enter}} para o tamanho do papel, ou `P`, depois `Primeiro ponto na área colada`, `Segundo ponto na área colada` e a distância real entre eles.

### PASTEORIG

{{key:Mod+Shift+V}}, ou {{ui:Colar no mesmo local}} no menu {{ui:Mais}}. Cola nas coordenadas de onde os objetos foram copiados. Não pergunta nada.

### DUPLICATE

Aliases: `DUP`. {{key:Mod+D}}, ou {{ui:Duplicar e mover}} no menu {{ui:Mais}}. Uma cópia dos objetos se move com o ponteiro a partir de onde está; {{key:Esc}} não deixa nada. Não usa a área de transferência.

- `Selecione objetos para duplicar` (pulado quando os objetos já estão selecionados)
- `Especifique onde a cópia vai (Esc não deixa nada)`: clique, digite um ponto, `@dx,dy` (a partir de onde estava o ponteiro), ou uma distância em direção ao cursor.

### SELECT

Pede `Selecione objetos` (com todas as opções abaixo) e deixa o que você escolheu selecionado, para o próximo comando ou para `P` depois.

### QSELECT

Aliases: `QS`. No navegador, a caixa de diálogo {{ui:Seleção rápida}} (veja [Selecionar objetos](topic:select-objects#select-by-a-rule-quick-select)). Sem ela, a linha de comando pede `Informe o tipo de objeto`, `Informe a propriedade`, `Informe o operador [=/<>/>/</*/Selecionar tudo] <=>` e `Informe o valor`. Os resultados tornam-se a seleção.

### SELECTSIMILAR

Aliases: `SIM`. `Selecione objetos [Configurações]` (ou a seleção atual): seleciona todo objeto do mesmo tipo, com a mesma camada e cor (e o mesmo nome de bloco e padrão de hachura). `SE` pede `Ligue ou desligue uma propriedade [Camada/COr/NOme/PAdrão/ALtura]`, repetido até {{key:Enter}}.

### FIND

Sem aliases; ou {{ui:Editar}} › {{ui:Mais}} › {{ui:Localizar e substituir}}. No navegador, a caixa de diálogo {{ui:Localizar e substituir}} (veja [Adicionar texto e rótulos](topic:text#find-and-replace-words)). Sem ela: `Informe o texto a localizar`, depois `Informe o texto de substituição (Enter: selecionar o que foi encontrado)`. Procura em textos, valores de atributos e textos de cota, na guia aberta ou na seleção.

### SELECTALL e DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) seleciona todo objeto que você pode editar na guia aberta. `DESELECT` (aliases `AI_DESELECT`, `SELECTNONE`; ou {{key:Esc}}) limpa a seleção.

## Cotas

### DIMLINEAR

Aliases: `DLI`, `DIMLIN`. Distância horizontal ou vertical.

- `Especifique a origem da primeira linha de extensão [Selecionar objeto]` (Enter ou `S`: `Selecione o objeto a cotar`, depois clique em uma linha, arco, círculo ou segmento de polilinha)
- `Especifique a origem da segunda linha de extensão`
- `Especifique a posição da linha de cota [Texto/Horizontal/Vertical/Girada]`. `T` pede o texto (`<>` é o valor medido), `H` e `V` fixam a direção, `R` pede `Especifique o ângulo da linha de cota <0>`.

### DIMALIGNED

Aliases: `DAL`, `DIMALI`. A distância real entre dois pontos.

- Origens como em {{cmd:DIMLINEAR}}, depois `Especifique a posição da linha de cota [Texto]`.

### DIMANGULAR

Aliases: `DAN`, `DIMANG`.

- `Selecione arco, círculo ou linha, ou Enter para um vértice`
- Arco: seu ângulo. Círculo: `Especifique o segundo ponto final do ângulo`. Linha: `Selecione a segunda linha`. Enter: `Especifique o vértice do ângulo`, `Especifique o primeiro ponto final do ângulo`, `Especifique o segundo ponto final do ângulo`.
- `Especifique a posição da linha de cota [Texto]`: clique dentro do ângulo a medir.

### DIMRADIUS e DIMDIAMETER

Aliases: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Selecione arco ou círculo`, depois `Especifique a posição da linha de cota [Texto]`.

### DIMCONTINUE

Aliases: `DCO`, `DIMCONT`. Continua a partir da última cota linear ou alinhada feita (ou pede `Selecione uma cota linear ou alinhada`).

- `Especifique a origem da segunda linha de extensão [Desfazer (U)]`, repetido até Enter.

### DIMBASELINE

Aliases: `DBA`, `DIMBASE`. Como {{cmd:DIMCONTINUE}}, mas toda cota começa na primeira origem e é empilhada mais para fora.

### DIMORDINATE

Aliases: `DOR`, `DIMORD`. `Especifique a localização do elemento`, depois `Especifique a extremidade da linha de chamada [Xdatum/Ydatum/Texto]`. Escreve a distância do elemento até a origem do UCS ao longo de X ou de Y, em uma linha de chamada: uma linha que sobe ou desce sobretudo lê X, uma que vai para o lado lê Y; `Xdatum` e `Ydatum` fixam qual. Defina a origem antes com {{cmd:UCS}} (sem ela, é o 0,0 do desenho). Os grips movem o elemento, a origem e a extremidade da linha de chamada, e o valor acompanha. Salva como cota de ordenada real em DWG e DXF. Recusa uma extremidade de linha de chamada sobre o próprio elemento.

### DIMARC

Aliases: `DAR`. `Selecione arco ou segmento de arco de polilinha`, depois `Especifique a posição da cota de comprimento de arco [Texto]`. Mede ao longo do arco (não a corda) e escreve o símbolo de arco antes do valor. Recusa um círculo completo, uma linha ou um segmento reto de polilinha. Um DWG a mantém como cota de comprimento de arco; um DXF a mantém como cota angular com o comprimento como texto, e o CadCraft a abre de novo como cota de comprimento de arco.

### DIMJOGGED

Aliases: `DJO`, `JOG`. `Selecione arco ou círculo`, `Especifique a substituição da localização do centro`, `Especifique a localização da quebra`. Uma cota de raio para uma curva cujo centro está longe ou fora da folha: a linha de cota começa no ponto que você informa em vez do centro, com uma quebra, e continua escrevendo o raio verdadeiro. Um DWG a mantém como cota de raio quebrado; um DXF a mantém como cota de raio, e o CadCraft a abre quebrada de novo.

### DIMJOGLINE

Aliases: `DJL`. `Selecione a cota para adicionar a quebra [Remover]`, depois `Especifique a localização da quebra (ou pressione Enter)`. Coloca um símbolo de quebra na linha de uma cota linear ou alinhada, para mostrar que a distância não está desenhada em escala; o valor não muda. `Remover` o tira. Recusa outros tipos de cota.

### QDIM

Sem aliases. `Selecione a geometria a cotar`, depois `Especifique a posição da linha de cota [Contínua/Escalonada/De base/Ordenada/Raio/Diâmetro/pontoDeReferência]`. Cota vários objetos em uma única etapa, a partir das extremidades de linhas e segmentos de polilinha, centros de círculos e arcos, pontos e referências de bloco. Uma posição acima ou abaixo dos objetos mede através deles; uma posição ao lado mede para cima. `Contínua` encadeia os pontos, `De base` mede todos a partir do primeiro, `Escalonada` aninha pares do meio para fora, `Ordenada` dá a cada ponto sua distância até a referência (`pontoDeReferência` escolhe uma nova), `Raio` e `Diâmetro` cotam cada círculo e arco escolhido. O modo fica lembrado. Tudo o que cria é uma etapa de desfazer. Informa quando há menos de dois pontos, ou nenhum arco ou círculo para Raio e Diâmetro.

### DIMBREAK

Aliases: `DBREAK`. `Selecione cotas para adicionar ou remover quebras`, depois `Quebrar onde outros objetos cruzam [Auto/Manual/Remover] <Auto>`. `Auto` deixa uma lacuna nas linhas de cota e de extensão onde quer que outro objeto as cruze, e recalcula as lacunas quando esses objetos ou a cota se movem. `Manual` (uma cota) pede dois pontos e deixa uma lacuna entre eles. `Remover` tira todas as lacunas. A lacuna tem 1,5 vez a altura do texto da cota.

### DIMSPACE

Sem aliases. `Selecione a cota de base`, `Selecione as cotas para espaçar`, `Informe o valor de espaçamento ou Auto <Auto>`. Move as linhas de cota de cotas lineares e alinhadas paralelas (ou angulares sobre o mesmo vértice) para que fiquem à mesma distância, contada a partir da cota de base, cada uma do lado em que está. `0` as alinha com a base; `Auto` é o dobro da altura do texto da cota de base. Cotas que não são paralelas à base são deixadas em paz.

### DIMINSPECT

Sem aliases. `Selecione as cotas`, `Forma do quadro de inspeção [Redondo/Angular/Nenhum/remover] <Redondo>`, `Informe o rótulo`, `Informe a taxa de inspeção <100%>`. Desenha um quadro ao redor do valor, com um rótulo antes dele e a taxa de inspeção depois. `remover` tira o quadro. O texto de tolerância permanece com o valor.

### DIMOVERRIDE

Aliases: `DOV`, `DIMOVER`. `Informe o nome da variável de cota a substituir ou Limpar`, `Informe novo valor para …`, de novo até Enter, depois `Selecione as cotas`. Altera essas configurações apenas nas cotas selecionadas; o estilo de cota não muda. Aceita as variáveis que são número ou chave (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Limpar` devolve as cotas selecionadas ao seu estilo. Recusa um nome que não é uma dessas variáveis e um valor que ela não aceita.

### DIMREASSOCIATE

Aliases: `DRE`, `DIMREASSOC`. `Selecione as cotas`, depois, para cada uma, suas origens de linha de extensão (`Especifique a primeira origem da linha de extensão em um objeto`: encaixa-se em uma extremidade ou no meio de uma linha, em um canto de polilinha, em um centro; Enter mantém esse ponto livre), ou, para uma cota de raio, diâmetro, raio quebrado ou comprimento de arco, `Selecione arco ou círculo`. A cota fica então vinculada a esses objetos: quando eles se movem ou mudam de tamanho, ela acompanha na mesma etapa de desfazer e mede de novo. Mover um ponto vinculado à mão, ou apagar o objeto, encerra o vínculo. O vínculo é salvo em DWG e DXF 2000 como dados próprios do CadCraft; outros programas veem uma cota comum.

### DIMDISASSOCIATE

Aliases: `DDA`, `DIMDISASSOC`. `Selecione as cotas`. Libera-as dos objetos a que estão vinculadas; nada se move.

### CENTERMARK

Aliases: `CM`, `DIMCENTER`, `DCE`. `Selecione círculo ou arco para adicionar marca de centro`, de novo até Enter. Desenha uma cruz no centro e quatro linhas de centro até um pouco além da curva (tipo de linha CENTER), como linhas simples na camada atual; dimensionadas pelo tamanho da seta e pela escala geral das configurações atuais de cota, giradas com o UCS. Não acompanham o círculo se ele se mover.

### CENTERLINE

Aliases: `CL`. `Selecione a primeira linha`, `Selecione a segunda linha`. Desenha uma linha no meio de duas linhas (ao longo da bissetriz quando se encontram), um pouco mais longa que elas, no tipo de linha CENTER. Uma linha simples: não acompanha as duas linhas.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sem aliases. Cada um pergunta `Informe novo valor para … <atual>` e define esse tamanho para **novas** cotas: escala geral, altura do texto, tamanho da seta, casas decimais (até 8), espaço ao redor do texto, extensão além da linha de cota, deslocamento da origem. Veja [Definir tamanhos de cota](topic:dimension-settings).

### DIMLUNIT

Configuração de cota: o formato apenas das novas cotas (1 científico, 2 decimal, 3 engenharia, 4 arquitetônico, 5 fracionário).

### DIMSTYLE e -DIMSTYLE

Aliases: `DST`, `DDIM`, `D`. O gerenciador de estilos de cota: {{ui:Definir como atual}}, {{ui:Novo…}}, {{ui:Modificar…}}, {{ui:Renomear…}}, {{ui:Excluir}}, {{ui:Comparar…}}, {{ui:Aplicar às selecionadas}}. `-DIMSTYLE` na linha de comando: `Estilo de cota [Restaurar/Salvar/Excluir/Aplicar/Comparar/reNomear/Listar]`. Veja [Definir tamanhos de cota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT e DIMTEDIT

`DIMEDIT` (`DED`): `Edição de cota [Início/Novo/Girar/Oblíquo] <Início>`, depois as cotas (ou as já selecionadas). Novo pede o texto (`<>` = a medição); Girar, um ângulo (0 devolve o texto); Oblíquo, o ângulo das linhas de extensão a partir do eixo X (Enter = nenhum; somente cotas lineares e alinhadas). `DIMTEDIT` (`DIMTED`): `Texto da cota [Esquerda/Direita/Centro/Início/Ângulo] <Centro>`. Veja [Definir tamanhos de cota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliases: `DTU`. `Unidades no texto das novas cotas [Unidades do desenho/mm/cm/m/km]`, ou, com cotas selecionadas, `Unidades no texto das cotas selecionadas`. Escreve o comprimento medido nessa unidade, com a unidade depois (DIMLFAC e um sufixo DIMPOST); `D` volta às unidades do desenho. Veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliases: `RC`. Imprime `Comprimento do arco: … Tipo: …`, depois `Especifique o primeiro ponto [Comprimento do arco/Objeto/Retangular/Poligonal/Livre]`. Retangular pede `Especifique o canto oposto`; Poligonal `Especifique o próximo ponto (Enter fecha a nuvem) [Desfazer (U)]`; Livre segue o ponteiro até um clique ou {{key:Enter}}; `O` pede `Selecione o objeto` e `Inverter o sentido? [Sim/Não] <N>` e transforma o objeto na nuvem. `A` pede `Informe o comprimento de cada arco`. `R`, `P` e `F` escolhem o tipo da próxima nuvem. O resultado é uma polilinha fechada de arcos.

### MLEADER

Aliases: `MLD`; ou {{ui:Chamada}}. `Especifique a localização da seta da linha de chamada [Tamanho da seta/Distância de pouso/Bloco]`, `Especifique a localização do pouso da linha de chamada`, depois o texto na caixa no lugar (ou, sem ela, `Informe o texto (uma linha vazia encerra)`). `Bloco` pede primeiro o nome de um bloco, e a multichamada mostra esse bloco em vez de texto. Mais linhas de chamada: {{cmd:MLEADEREDIT}}. Salva como multichamada real em DWG; DXF mantém as linhas, a seta e o texto que desenha.

### MLEADEREDIT

Aliases: `MLE`. `Selecione uma multichamada`, depois `Especifique a localização da seta da linha de chamada [Remover linhas/Conteúdo do bloco/Conteúdo do texto]`: cada ponto adiciona uma linha de chamada de uma nova seta até o mesmo pouso, até Enter. `Remover linhas` então tira a linha de chamada em que você clicar (uma multichamada mantém pelo menos uma). `Conteúdo do bloco` pede um nome de bloco e mostra esse bloco em vez do texto (seus atributos são pedidos); `Conteúdo do texto` devolve o texto. Cada linha de chamada tem seu próprio grip. Um DWG mantém todas as linhas de chamada e o bloco em uma única multichamada.

### MLEADERALIGN

Aliases: `MLA`. `Selecione multichamadas`, depois `Selecione a multichamada para alinhar [Distribuir/Espaçamento/Usar espaçamento atual]` e `Especifique a direção`. Move os pousos das outras multichamadas (e seus textos ou blocos) para a linha que passa pelo pouso da escolhida, nessa direção; as setas permanecem onde apontam. `Espaçamento` também as deixa a uma distância igual; `Distribuir` pede dois pontos e as espalha igualmente entre eles. Precisa de pelo menos duas multichamadas.

### MLEADERCOLLECT

Aliases: `MLC`. `Selecione multichamadas`, depois `Especifique a localização da multichamada reunida [Vertical/Horizontal]` (Enter mantém o lugar da primeira). Faz uma única multichamada com várias: o conteúdo de bloco vai para um novo bloco que contém todos lado a lado ou um sob o outro; o conteúdo de texto vira uma nota só, com uma linha para cada. A primeira multichamada mantém suas linhas de chamada; as outras são removidas. Recusa uma mistura de conteúdo de texto e de bloco.

### TABLE

Aliases: `TB`; ou {{ui:Anotar}} › {{ui:Mais}} › {{ui:Tabela}}. Cria uma tabela: um objeto que você move, copia, gira, escala e plota como qualquer outro, com suas células mantidas como dados.

- `Número de linhas de dados ou [Colar/Arquivo/Estilo] <3>`, depois `Número de colunas <3>`, `Altura do texto` e `Canto superior esquerdo da tabela`. A tabela recebe uma linha de título (uma célula mesclada) e uma linha de cabeçalho acima das linhas de dados.
- `P`: uma tabela a partir de células de planilha na área de transferência (texto com uma tabulação entre as células). Pressionar {{key:Ctrl+V}} com essas células na área de transferência faz o mesmo, a menos que a cópia própria do CadCraft seja a mais recente (ou o CadCraft não consiga saber: então cola a sua própria cópia e informa isso). `F`: uma tabela a partir de um arquivo `.csv` ou separado por tabulações. A primeira linha torna-se a linha de cabeçalho; as larguras de coluna se ajustam ao texto.
- `S`: escolhe o estilo de tabela desta tabela (veja {{cmd:TABLESTYLE}}).
- Recusa uma contagem de linhas ou colunas que não seja um número inteiro, e mais células do que uma tabela comporta (2.000 linhas, 200 colunas, 40.000 células).
- {{cmd:EXPLODE}} transforma uma tabela em linhas e textos. Salva como DWG, uma tabela é um objeto de tabela real que outros programas podem editar; salva como DXF, é um bloco que a desenha, e o CadCraft a abre de novo como tabela.

### TABLEDIT

Aliases: `TABLEEDIT`, `TABEDIT`; ou clique duas vezes em uma célula. Edita uma tabela.

- `Escolha uma célula para digitar (Enter para terminar) ou [Linha/Coluna/Tamanho/Mesclar/Desmesclar/Alinhar/Altura/Tipo/Limpar]`. Clique em uma célula, ou, com uma tabela selecionada, digite o seu nome (`B3`: coluna B, linha 3; a linha de título é a linha 1). No navegador, abre-se uma caixa sobre a célula: {{key:Enter}} mantém o texto, {{key:Tab}} vai para a próxima célula, {{key:Alt+Enter}} inicia uma nova linha, {{key:Esc}} deixa a célula como estava.
- Um texto que começa com `=` é uma fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, com `+ - * / ^`, parênteses e funções como `sqrt` e `round`. A célula mostra o valor; uma fórmula que cita a própria célula, uma célula fora da tabela ou uma célula sem número mostra `####`, e a linha de comando diz por quê.
- `R` / `C`: `Inserir` ou `Excluir` linhas ou colunas em uma célula escolhida (quantas, e acima ou abaixo, à esquerda ou à direita). As fórmulas acompanham as células que citam.
- `S`: a largura da coluna e a altura da linha. Uma linha nunca fica menor que o seu texto precisa. Uma tabela selecionada também tem um grip na borda de cada coluna e de cada linha.
- `M`: mescla de uma célula escolhida até outra; `U`: desmescla. `A`: alinhamento (`TL` superior esquerdo … `MC` meio centro … `BR` inferior direito). `H`: a altura do texto desta célula (0 = a do estilo). `K`: transforma a linha em título, cabeçalho ou linha de dados. `CL`: esvazia a célula.
- Recusa uma tabela em camada bloqueada, apagar todas as linhas ou colunas, e uma mesclagem que cortaria outra célula mesclada em duas.

### TABLESTYLE

Aliases: `TS`. Lista os estilos de tabela com quantas tabelas usa cada um, depois `Estilo de tabela: [Nova/Definir/Editar/Excluir/Aplicar]`.

- Um estilo guarda a altura e o alinhamento do texto das linhas de título, cabeçalho e dados, a margem da célula, e quais bordas são desenhadas (externas, entre linhas, entre colunas).
- `N` cria um estilo a partir do atual e o torna atual; `S` define o estilo atual (novas tabelas o recebem); `E` edita um: as tabelas que o usam são redesenhadas; `A` dá às tabelas selecionadas o estilo atual; `D` exclui um (não o Padrão, nem o atual; as tabelas que o usavam mantêm sua aparência).
- Os estilos são salvos com o desenho (DWG e DXF).

### TABLEEXPORT

Salva o que uma tabela mostra como arquivo CSV (uma fórmula como o seu valor). `Selecione uma tabela`, ou selecione uma antes. Células de texto que começam com `=`, `+`, `-` ou `@` recebem um `'` no início para que a planilha não as execute.

### TABLEPASTE

Aliases: `PASTETABLE`. Cria uma tabela a partir de células de planilha na área de transferência, depois pede seu canto superior esquerdo. O mesmo que {{cmd:TABLE}} › `Colar`.

### DATALINK

Aliases: `DL`. `Vínculo de dados: [Novo/Listar/Remover] <Novo>`. `N` pede um arquivo CSV, coloca uma tabela dele e lembra o nome do arquivo; `L` lista os vínculos com o seu arquivo, tamanho, quando foi lido e quantas tabelas o usam; `R` remove um vínculo (suas tabelas permanecem como tabelas simples).

### DATALINKUPDATE

Aliases: `DLU`. Lê de novo o arquivo de um vínculo de dados e preenche de novo as tabelas vinculadas a ele (linhas e colunas são adicionadas ou removidas para coincidir). Um navegador não consegue abrir um arquivo sozinho, então pede que você escolha o arquivo de novo. Com vários vínculos, pergunta qual.

### FIELD

Coloca um campo no desenho: um texto que se calcula sozinho. `Campo: [Data/Nome do arquivo/Folha/Propriedade/Objeto/Expressão/Código] <Data>`:

- `D`: agora, ou a data salva, criada ou plotada, e um formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: o nome do arquivo, com ou sem a extensão. `S`: o número da folha, o seu título, ou quantas folhas há. `P`: uma propriedade do desenho pelo nome (veja {{cmd:DWGPROPS}}). `O`: escolha um objeto, depois o que ler (área, comprimento, perímetro, raio, diâmetro, camada, nome, x, y, texto, rotação, cor) e as casas decimais. `E`: uma fórmula. `C`: um texto com códigos digitados como estão, como `Folha %<sheetnumber>% de %<sheetcount>%`.
- Depois `Selecione um texto, uma célula de tabela ou um bloco com atributos para colocá-lo (Enter: um novo texto)`: um texto escolhido recebe o campo depois do que já contém; uma célula de tabela, da mesma forma; uma referência de bloco pergunta qual atributo; {{key:Enter}} pede uma altura e um ponto para um novo texto.
- Na tela, um campo tem um fundo cinza claro; uma plotagem e um PDF nunca o mostram. Digitar por cima do texto de um campo, à mão, encerra o campo. Um campo que não pode ser calculado mostra `####`.
- O campo de um objeto encontra o seu objeto pela chave que o CadCraft mantém nos objetos (Configurações › CadCraft › Arquivos compatíveis com mesclagem); com as chaves desligadas, recusa.

### UPDATEFIELD

Aliases: `UPDATEFIELDS`. `Selecione os objetos cujos campos atualizar (Enter: todos os campos) ou [Configurações]`. `S` define quando os campos se atualizam sozinhos: digite as letras de `O` abrir, `S` salvar, `P` plotar, `R` regenerar (todas as quatro para começar), ou `NONE`.

### DWGPROPS

Aliases: `DRAWINGPROPS`. Lista as propriedades do desenho, depois `Alterar: [Título/Assunto/Autor/Empresa/Palavras-chave/coMentários/cUstom/Remover/eXit]`. As seis primeiras são as que o painel {{ui:Detalhes do desenho}} mostra; `U` adiciona seu próprio nome e valor, `R` remove um. Os campos as leem (`%<prop:title>%`, `%<prop:Client>%`) e acompanham de imediato. Recusa um nome personalizado que seja um dos internos ou que contenha `%`, `<`, `>`, aspas ou uma barra invertida.

## Paramétrico

Veja [Restringir um desenho](topic:constraints) e [Usar parâmetros e equações](topic:parameters). As restrições funcionam na guia {{ui:Modelo}}.

### GEOMCONSTRAINT e os comandos GC

Alias `GCON`: `Informe o tipo de restrição [Horizontal/Vertical/Perpendicular/Paralela/Tangente/Coincidente/CONcêntrica/COLinear/Simétrica/Igual/Fixar] <Horizontal>`, depois as perguntas desse comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Selecione um objeto [2Pontos] <2Pontos>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Selecione o primeiro objeto`, `Selecione o segundo objeto` (o segundo é que se move).
- {{cmd:GCCOINCIDENT}}: `Selecione o primeiro ponto [Objeto/Restringir automaticamente] <Objeto>`, `Selecione o segundo ponto [Objeto] <Objeto>`.
- {{cmd:GCFIX}}: `Selecione o ponto [Objeto] <Objeto>`.
- {{cmd:GCSYMMETRIC}}: `Selecione o primeiro objeto [2Pontos] <2Pontos>`, `Selecione o segundo objeto`, `Selecione a linha de simetria`.

### DIMCONSTRAINT e os comandos DC

Alias `DCON`: `Selecione a cota associativa a converter [LInear/Horizontal/Vertical/ALinhada/ANgular/Radial/Diâmetro/Converter] <ALinhada>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Especifique o primeiro ponto de restrição [Objeto] <Objeto>`, `Especifique o segundo ponto de restrição`, `Especifique a localização da linha de cota`, `Texto da cota <d1=40>` (um número, uma expressão, ou `nome=expressão`).
- {{cmd:DCALIGNED}}: como acima, com `[Objeto/Ponto e linha/2Linhas]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Selecione arco ou círculo`. {{cmd:DCANGULAR}}: `Selecione a primeira linha ou arco`, `Selecione a segunda linha`.
- {{cmd:DCCONVERT}}: `Selecione as cotas a converter`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Selecione objetos [Configurações]`. `S` pede as tolerâncias de distância e de ângulo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Selecione objetos`; as restrições deles são removidas.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Selecione objetos [Mostrar tudo/Ocultar tudo]`, depois `[Mostrar/Ocultar]`.
- {{cmd:DCDISPLAY}}: `Informe uma opção [Mostrar/Ocultar]`.

### PARAMETERS e -PARAMETERS

{{cmd:PARAMETERS}} (aliases `PAR`, `PARAM`) abre o painel {{ui:Parâmetros}}. `-PARAMETERS`: `Informe uma opção [Nova/Editar/Renomear/Excluir/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Baixa uma macro (.swb) que reconstrói o modelo como um único esboço restringido no SolidWorks. Veja [Mover esboços de e para outros modeladores de peças](topic:solidworks-sketches).

## Blocos

### ANNOSCALE

Aliases: `CANNOSCALE`. Informa a escala de anotação do desenho e quantos objetos anotativos ele contém, depois pergunta `Nova escala de anotação`: digite `1:50`, `1:100`, `2:1`, um número sozinho (`50` é 1:50) ou o nome de uma das escalas próprias do desenho. Cada texto e cota anotativos é redimensionado para sair impresso no mesmo tamanho na nova escala, em uma única etapa de desfazer; objetos não anotativos são deixados em paz, e também um objeto que mantém uma lista de escalas sem a nova ({{cmd:OBJECTSCALE}}). Veja [Unidades, papéis e escalas](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliases: `OBJSCALE`. `Selecione objetos anotativos`, depois `Escalas de anotação dos objetos selecionados [Adicionar/Excluir/Escala atual/Listar/eXit] <Adicionar>`. Um texto ou cota anotativos mantém uma lista de escalas de anotação. `Adicionar` e `Excluir` pedem uma escala (`1:50`, `2:1`, um número sozinho, ou o nome de uma das escalas próprias do desenho); `Escala atual` adiciona a escala de anotação do desenho; `Listar` imprime as escalas de cada objeto. Uma viewport cuja escala está na lista de um objeto mostra o objeto no tamanho que imprime sua altura no papel nessa escala, na tela e nas plotagens. A última escala não pode ser excluída. Objetos que não são anotativos ficam de fora: ligue Anotativo em Propriedades antes. As listas são salvas em DWG e DXF como dados próprios do CadCraft. Veja [Unidades, papéis e escalas](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliases: `ANNOALL`. `Mostrar objetos anotativos em todas as escalas [ON/OFF]`. Ligado (como um desenho começa): um objeto anotativo também aparece em uma viewport, ou no modelo, cuja escala não está na sua lista, no tamanho que tem. Desligado: não aparece ali, e não pode ser escolhido no modelo. A alternância é uma etapa de desfazer; não é guardada no arquivo.

### SCALELISTEDIT

Aliases: `SCALELIST`. `Lista de escalas [Adicionar/Editar/Excluir/Listar/Redefinir]` até {{key:Enter}}. Adicionar: `Nome da escala`, `Unidades do papel`, `Unidades do desenho`. Editar e Excluir pedem o nome da escala. As escalas próprias do desenho entram nas listas de escalas de viewport e de plotagem, e são salvas com o desenho. Veja [Unidades, papéis e escalas](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT e PEDIT

`SPLINE` (`SPL`): `Primeiro ponto da spline [Método/Objeto] (Pontos de ajuste)`. Ajuste: pontos pelos quais a curva passa; `Fechar`, `Desfazer`, depois `Tangente inicial` e `Tangente final` (um ponto, ou {{key:Enter}}). Método › Vértices de controle pede um grau (1 a 5) e desenha a partir de um polígono de controle. Objeto transforma polilinhas em splines pelos seus vértices. `SPLINEDIT` (`SPE`): `[Dados de ajuste/Editar vértice/converter para Polilinha/Abrir ou Fechar/Inverter/Desfazer/eXit]`; Dados de ajuste `[Adicionar/Excluir/Mover/Limpar/Tangentes/eXit]`; Editar vértice `[Adicionar ponto de controle/Mover/Peso/eXit]`. `PEDIT` (`PE`): `[Fechar/Abrir/Unir/Largura/Ajustar/Spline/Desfazer curva/Geração de tipo de linha/Inverter/Desfazer/eXit]`, `M` para vários objetos; linhas, arcos e splines são oferecidos como polilinhas primeiro. Veja [Splines e polilinhas](topic:splines).

### BLOCK

Aliases: `B`, `BMAKE`.

- `Informe o nome do bloco`. Se ele existir: `Bloco "…" já existe. Redefinir? [Sim/Não] <N>`.
- `Especifique o ponto base de inserção`
- `Selecione objetos`. Eles são substituídos por uma única referência ao novo bloco.

### WBLOCK

Aliases: `W`, `-WBLOCK`. Grava um bloco, alguns objetos ou o desenho inteiro como um novo arquivo DWG ou DXF. `Origem do WBLOCK [Bloco/Desenho inteiro/Objetos] <Objetos>`:

- **Objetos**: `Especifique o ponto base de inserção` (ele se torna a origem do novo desenho), `Selecione objetos`, depois `Formato de arquivo [DWG/DXF/DXF R12]` e `Nome do arquivo do novo desenho`, depois `O que fazer com os objetos [Manter/Converter em bloco/Excluir]`. Converter os substitui por uma única referência a um bloco com o nome do arquivo; Excluir os remove.
- **Bloco**: `Bloco a gravar`. Os próprios objetos do bloco, com o seu ponto base como origem, incluindo blocos aninhados.
- **Desenho inteiro**: cada objeto do espaço modelo. As folhas não são gravadas; use {{cmd:SAVEAS}} para uma cópia que as mantenha.

O novo arquivo contém apenas as camadas, tipos de linha, estilos de texto e de cota e blocos que os seus objetos usam, e as unidades do desenho. A versão de um DWG é a que {{cmd:SAVEAS}} usou por último. No navegador, o arquivo é baixado; no Studio, abre-se a caixa de salvar.

### ATTDEF

Aliases: `ATT`, `DDATTDEF`, `-ATTDEF`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Definir atributo}}. Imprime os modos, depois `Informe uma opção a alterar (Enter ao concluir) [Invisível/Constante/Predefinido]`, `Informe o nome da etiqueta do atributo`, `Informe o aviso do atributo`, `Informe o valor padrão do atributo` (`Informe o valor do atributo` quando constante), `Especifique o ponto inicial do texto`, `Especifique a altura do texto`, `Especifique o ângulo de rotação do texto`. {{cmd:BLOCK}} leva as definições de atributo para dentro do bloco.

### EATTEDIT e ATTEDIT

`EATTEDIT` (`DDATTE`, ou clique duas vezes em uma referência com atributos; {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar atributos}}): `Selecione uma referência de bloco com atributos`, depois a caixa de diálogo {{ui:Editar atributos}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): a mesma referência, depois `<aviso> (<TAG>) <valor>` para cada atributo; {{key:Enter}} mantém um valor. Veja [Atributos](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Atualizar os atributos das referências de qual bloco [Nome/Selecionar/Todos] <Selecionar>`. Valores mantidos; novos atributos recebem o seu padrão, os removidos saem, as posições são redefinidas.

### BATTMAN

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Gerenciador de atributos}}. A caixa de diálogo: bloco, atributos (etiqueta, aviso, padrão, modos, ordem), {{ui:Atualizar as referências (valores mantidos)}}, {{ui:Aplicar}}.

### REFEDIT e REFCLOSE

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar no local}}. `REFEDIT`: `Selecione a referência de bloco a editar no local` (ou a seleção). `REFCLOSE`: `Salvar as alterações em "…" [Salvar/Descartar] <Salvar>`; os botões {{ui:Salvar o bloco}} e {{ui:Descartar}} da barra fazem o mesmo. Toda a edição é uma única etapa de desfazer. Veja [Atributos](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT e BCLOSE

`BE`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar bloco}}. `Informe o nome do bloco a editar <o bloco da referência selecionada>` abre o editor de blocos. `BCLOSE` pergunta `Fechar o editor de blocos em "…" [Salvar/Descartar] <Salvar>`; os botões {{ui:Salvar bloco}} e {{ui:Descartar alterações}} da faixa fazem o mesmo. Tudo feito no editor é uma única etapa de desfazer.

### VIEWBASE

Alias: `FLATSHOT`. Uma vista 2D plana dos sólidos na guia 3D: `Vista [Frontal/Superior/Direita/Esquerda/Traseira/Inferior/Iso]`, `Linhas ocultas [Mostrar/Ocultar]`, uma escala (`1:20`, `2:1`; {{key:Enter}} escolhe a que cabe na folha), depois o centro da vista. Uma referência de bloco; as arestas visíveis na camada VIEW-VISIBLE, as ocultas tracejadas na camada VIEW-HIDDEN. Veja [Vistas planas em uma folha](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliases: `-PUBLISH`; ou {{ui:Todas as folhas em um PDF}} na caixa de diálogo {{ui:Plotar em PDF}}. `Folhas a plotar [Todas/Algumas]`: {{key:Enter}} plota toda folha, `S` pede nomes separados por vírgulas. Um PDF, uma página e um marcador por folha. Veja [Todas as folhas em um PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliases: `SSM`, `SHEETSETMANAGER`. Leva você à seção {{ui:Conjunto de folhas}} do painel da esquerda: folhas de vários desenhos, numeradas e tituladas, com suas legendas preenchidas a partir do conjunto, publicadas como um único PDF. Veja [Conjuntos de folhas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): escolha um DWG ou DXF, depois o seu ponto de inserção. {{cmd:XREF}} (`XR`, `-XREF`): `Desenhos vinculados [?/Anexar/Recarregar/Incorporar/Desanexar] (Enter: ?)`; com mais de um vínculo, escolha uma das suas referências ou digite `N` e o nome dela. Veja [Desenhos vinculados](topic:files#linked-drawings-external-references).

### COUNT

Aliases: `BCOUNT`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Contar blocos}}. `Selecione uma referência de bloco a contar, ou [Todas/Exportar] (Enter: Todas)`: um clique seleciona e conta toda referência desse bloco neste espaço; {{key:Enter}} ou `A` lista todas; `E`, depois `C` (contagens) ou `A` (atributos) baixa um CSV. Veja [Contar blocos e exportar um quadro](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliases: `I`, `DDINSERT`.

- `Informe o nome do bloco ou [Arquivo/Biblioteca] <último bloco>` (não diferencia maiúsculas de minúsculas). `F` pede um DWG ou DXF, depois o desenho inteiro ou um dos seus blocos; um nome já usado pede {{ui:Manter os existentes}} ou {{ui:Renomear}}. `L` abre o painel da biblioteca.
- `Especifique o ponto de inserção [Escala/Girar]`. `S` pede `Especifique o fator de escala`, `R` pede `Especifique o ângulo de rotação`; ambos ficam lembrados.
- Quando o bloco já está ao lado de objetos que se repetem em outros lugares sem ele, uma linha informa quantos lugares são sugeridos, e o aviso ganha `suGgested`: `G` os mostra; clique perto de um para colocar o bloco ali, `A` para todos, {{key:Enter}} para voltar. Eles assumem a rotação de seus vizinhos e os valores padrão de atributos. Desenhos com mais de 20.000 objetos no espaço aberto não são pesquisados.
- Depois `Informe <aviso> (<TAG>) <padrão>` para cada atributo que o bloco pede. Veja [Atributos de bloco](topic:attributes).

### LIBRARY

Aliases: `LIB`. Abre o painel da biblioteca: coloca itens, verifica atualizações, créditos da biblioteca. Sem perguntas. Veja [Inserir de um arquivo ou da biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Aliases: `SMEMBER`; ou {{ui:Barra 3D}} na guia {{ui:Padrão}} da biblioteca. `Tamanho da seção <W12x26>` (como a guia o lista), depois `Ponto inicial [Pilar]` e `Ponto final`: uma barra sólida na guia 3D entre os dois pontos, apoiada no chão. `C` pede o ponto base do pilar e a sua altura. Uma etapa de desfazer. Veja [Colocar seções de aço e peças padrão](topic:steel-and-standard-parts).

### PARTSLIST

Aliases: `PLIST`. `Canto superior esquerdo da lista de peças`, depois `Altura do texto <2,5>`: desenha uma tabela de cada peça padrão e seção de aço colocada a partir da biblioteca (números de item, quantidade, peça, norma, tamanho, comprimento, material, massa). Uma etapa de desfazer. Veja [Colocar seções de aço e peças padrão](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliases: `PU`. Remove definições de bloco que nada usa. Sem perguntas.

### DELBLOCKS

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Excluir blocos}}. `Selecione o bloco a excluir [Nome/eXit]`: escolha uma referência de bloco, ou `N` para a lista de blocos com um filtro (escolha vários), ou `X` / {{key:Enter}} para encerrar. Toda referência vai — no modelo, em todas as folhas e dentro de outros blocos — e depois a definição, e a linha de comando diz o que foi excluído e o que não pôde ser. Blocos sem nome e desenhos vinculados não são oferecidos. O prompt volta para o próximo bloco; o comando inteiro é uma única etapa de desfazer.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} cola o que você copiou ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) como um bloco: escolha o ponto de inserção e uma referência a um novo bloco vai para lá, selecionada. O bloco recebe um nome próprio (`A$C` e um número); {{cmd:RENAME}} dá a ele o seu. Uma etapa de desfazer remove a referência e o bloco.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pede o bloco a substituir e o bloco que o substitui (`?` lista os blocos), depois altera toda referência no modelo, em todas as folhas e dentro de outros blocos. Cada referência mantém seu lugar, escala, rotação, camada e os valores dos atributos que os dois blocos têm; atributos que só o novo bloco tem começam com seus padrões, e o programa informa quais valores foram descartados. Quando nada mais usa o bloco antigo, ele oferece removê-lo. Recusa vínculos de desenhos e uma substituição que colocaria um bloco dentro de si mesmo. Uma etapa de desfazer.

### MINSERT

{{cmd:MINSERT}} coloca um bloco em linhas e colunas: nome do bloco, ponto de inserção, escala, rotação, número de linhas e colunas, e as distâncias entre elas. O conjunto inteiro gira com a rotação. Cada um é uma referência própria (no máximo 10.000), então qualquer um deles pode ser movido ou apagado depois.

### BLOCKSPALETTE

Aliases: `BLOCKSPAL`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Blocks panel}}. Mostra o painel {{ui:Blocos}} com o cursor no filtro. Cada bloco tem uma pequena imagem; os colocados mais recentemente vêm primeiro. Os dois botões ao lado do filtro alternam entre lista e grade de imagens. Clique em uma imagem (ou em {{ui:Inserir}}) para colocar o bloco com {{cmd:INSERT}}, ou arraste-o para o desenho para colocá-lo onde soltar.

{{ui:Libraries}}, sob a lista: {{ui:Add a drawing}} recebe um arquivo DWG ou DXF próprio e lista os seus blocos com imagens, e o desenho inteiro como um bloco. Colocar um deles copia a sua definição (e os blocos que ele aninha, e as camadas deles) para este desenho, como faz a opção `Arquivo` de {{cmd:INSERT}}; um bloco que já está aqui com a mesma definição é usado sem perguntas, e um de mesmo nome que difere pede {{ui:Manter os existentes}} ou {{ui:Renomear}}. Em um navegador, o arquivo permanece até a página ser fechada. No CadCraft Studio, {{ui:Add a folder}} lista os desenhos de uma pasta, cada um aberto ao ser clicado, e arquivos e pastas são lembrados. O pequeno x remove uma biblioteca da lista; o arquivo não é alterado. A {{ui:Library}} compartilhada é outra coisa: veja [Inserir de um arquivo ou da biblioteca](topic:insert-from-file-and-library).

### BCONVERT

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Convert repeats to blocks}}. Encontra geometria que se repete e transforma cada cópia em uma referência a um único bloco.

- `Selecione os objetos que se repetem, ou [Bloco]`: os objetos de uma cópia. `B` informa um bloco existente, para encontrar cópias soltas dos seus objetos.
- `Uma cópia pode ser: espelhada = Não, escalada = Não; camada, cor, tipo de linha e espessura de linha = Igualar … [Espelhada/Escalada/Propriedades]`: `M`, `S` e `P` trocam o que conta como cópia; {{key:Enter}} pesquisa. As configurações ficam lembradas.
- `Nome do novo bloco <Bloco1>`, depois `Especifique o ponto base do bloco` ({{key:Enter}} usa o canto inferior esquerdo da seleção).
- Informa quantos outros conjuntos de objetos têm a mesma geometria, destaca tudo o que substituiria e pergunta `Sim/Não`.

Uma cópia são os mesmos objetos movidos e girados em qualquer ângulo (e espelhados ou escalados por um fator, quando isso estiver ligado): cada objeto deve ter o seu correspondente, dentro de um milionésimo do tamanho da seleção. Cada referência recebe a sua própria rotação e escala (uma espelhada, uma escala Y negativa), e a camada que os seus objetos compartilhavam. Objetos em camadas bloqueadas são deixados em paz e contados. Pesquisa o espaço aberto (o modelo ou a folha aberta). Uma pesquisa muito grande para em um limite de trabalho e informa isso. Uma etapa de desfazer.

### BSEARCH

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Find blocks}}. `Encontrar blocos por [Nome/Atributo/Geometria] <Nome>`:

- `N`: parte do nome de um bloco, ou um padrão com `*` e `?`. Lista cada bloco com as suas referências aqui e em todo o desenho.
- `A`: um valor de atributo, ou `TAG=valor`. Lista os blocos cujas referências o contêm, com os valores encontrados. Atributos constantes contam.
- `G`: selecione objetos, ou uma referência de bloco, e são listados os blocos cuja forma é pelo menos 85% parecida, do melhor para o pior. Tamanho, rotação e espelhamento não contam. A medida compara as distâncias entre pontos espalhados pelos contornos, então encontra parecidos; use {{cmd:BCONVERT}} para encontrar cópias exatas.

As referências encontradas no espaço aberto ficam selecionadas, prontas para o próximo comando.

### BREPLACE

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Replace blocks}}. `Substituir [Selecionados/Todos]`: `S` substitui as referências de bloco que você seleciona pelo bloco que você informar; `A` pede um bloco e o seu substituto e altera toda referência, como faz {{cmd:BLOCKREPLACE}} (o mesmo código). Uma referência mantém seu lugar, escala, rotação, camada e os valores dos atributos que os dois blocos têm; valores para os quais o novo bloco não tem lugar são descartados e informados. `?` lista os blocos. Uma etapa de desfazer.

### DATAEXTRACTION

Aliases: `EATTEXT`, `DX`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Data extraction}}. Lista blocos, seus atributos e propriedades dos objetos como tabela ou arquivo CSV.

- Trabalha na seleção, ou pergunta `Selecione objetos (Enter: tudo neste espaço)`.
- `Lista: [Blocos/Objetos/Todos]` quando a seleção tem os dois. Blocos sem nome, tabelas e listas de materiais nunca são listados.
- Imprime as colunas que você pode escolher (nome, tipo, camada, X, Y, rotação, escala, comprimento, área, cor, tipo de linha, espaço, e uma para cada etiqueta de atributo), depois `Colunas, por nome ou número separados por vírgulas`. {{key:Enter}} escolhe as marcadas com asterisco: o nome e cada atributo para blocos; tipo, camada e comprimento para objetos.
- `Juntar linhas idênticas com uma contagem? [Sim/Não] <Sim>`, depois `Colocar a lista em um: [Tabela/Csv] <Tabela>`. Uma tabela é uma tabela comum ({{cmd:TABLEDIT}} a edita) e não é dinâmica: execute o comando de novo quando o desenho mudar.
- Recusa uma coluna que não está na lista. Uma tabela comporta 1.999 linhas de dados; um arquivo CSV comporta todas.

### COUNTTABLE

Conta as referências de bloco da seleção (ou do espaço aberto) e coloca as contagens em uma tabela (`Bloco`, `Contagem`) ou em um arquivo CSV. Para uma contagem que acompanha o desenho sozinha, veja {{cmd:BOMTABLE}}.

## Folhas e plotagem

### LAYOUT

Aliases: `LO`, `NEWLAYOUT`; ou o botão {{ui:+}} sob o desenho. Uma nova folha com moldura, uma legenda e uma viewport, em ISO A3 (ou Tabloide para desenhos em polegadas ou pés). Sem perguntas.

### MVIEW

Aliases: `MV`. Somente em uma folha ({{cmd:VPORTS}} em uma folha faz o mesmo).

- `Especifique o canto da viewport [Poligonal/Objeto]`, `Especifique o canto oposto`. A viewport mostra o modelo inteiro em uma escala padrão.
- `P` (Poligonal): clique nos cantos do contorno (`Desfazer`, `Fechar`), {{key:Enter}} ao concluir. Recusa menos de três cantos.
- `O` (Objeto): `Selecione um objeto fechado para o contorno da viewport`: uma polilinha fechada, um círculo ou uma elipse na folha. A viewport assume a sua forma (curvas como pequenos segmentos retos); o objeto permanece como estava. Recusa um objeto que não está fechado.

### VPCLIP

Recorta uma viewport que já está na folha. `Selecione a viewport a recortar` (ou selecione-a antes), depois `Selecione o objeto para recortar [Poligonal/Excluir]`:

- Clique em uma polilinha fechada, círculo ou elipse, ou {{key:Enter}} (ou `P`) para clicar nos cantos de um polígono.
- `D` (Excluir, oferecido quando a viewport está recortada) a torna um retângulo de novo: a caixa ao redor do contorno que tinha.
- O que a viewport mostra não se move no papel, e a sua escala permanece. O modelo é desenhado e plotado apenas dentro do contorno, e a borda o acompanha. Uma etapa de desfazer.
- Uma viewport recortada tem um grip em cada canto do seu contorno, além do centro e dos quatro cantos da sua caixa (arrastar um canto da caixa estica o contorno junto). Propriedades mostra Contorno: Retângulo, ou Recortado com o número de cantos.
- Arquivos DWG e DXF 2000 mantêm o contorno para o CadCraft. Outros programas abrem a viewport como o retângulo ao redor dela; DXF R12 mantém somente o retângulo.
- Na guia do modelo, informa que as viewports ficam em folhas.

### VPORTS

Aliases: `VIEWPORTS`. {{cmd:SPLIT}} é o mesmo também a partir de uma folha, e {{ui:Vista}} › {{ui:Mais}} › {{ui:Dividir lado a lado}}, {{ui:Dividir empilhado}}, {{ui:Quatro painéis}}, {{ui:Um painel}} executam o comando. No modelo: `Informe o número de painéis [SIngle/2/3/4] <3>`; `2` pede `[Horizontal/Vertical] <Vertical>` (Vertical = lado a lado), `3` pede `[Esquerda/Direita] <Direita>` (onde fica o painel grande). Cada painel mantém sua própria vista e espaço; um clique torna um painel ativo. Em uma folha é {{cmd:MVIEW}}. Veja [Dividir a tela](topic:split-screen).

### VPVIEW

Sem aliases. Somente em uma folha.

- `Selecione a viewport` (pulado se uma já estiver selecionada), depois, no modelo: `Especifique o primeiro canto da janela a mostrar`, `Especifique o canto oposto`.

### UCS

Sem aliases. Um sistema de coordenadas próprio; não é uma edição. `Especifique a origem do UCS [NAmeado/OBjeto/Anterior/Global/Z/3pontos] <Global>`: um ponto é uma nova origem, depois `Especifique o ponto no eixo X (Enter mantém o ângulo)`. `Z`: `Especifique o ângulo de rotação em torno do eixo Z <90>`. `3`: origem, um ponto no eixo X positivo, um ponto do lado Y positivo. `OB`: `Selecione o objeto para alinhar o UCS`. `NA`: `[Restaurar/Salvar/Excluir/?]` e um nome. A vista gira para que o novo eixo X fique nivelado. Veja [Girar a vista e usar suas próprias coordenadas](topic:ucs-and-turned-view).

### PLAN

Sem aliases. `Informe uma opção [UCS atual/UCS/Global] <UCS atual>`: gira a vista do painel ativo para que o eixo X do UCS (ou o do mundo) fique nivelado. Nada no desenho se move.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sem aliases; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Girar a vista 90° para a esquerda}}, {{ui:Girar a vista 90° para a direita}}, {{ui:Voltar ao global}}. O mesmo que `UCS Z -90`, `UCS Z 90` e `UCS W`, com a vista acompanhando.

### VPLAYER

Sem aliases. Em uma folha, ou dentro de uma viewport. `Informe uma opção [?/Congelar/Descongelar/Redefinir/Vpvisdflt]`: `F`, `T`, `R` pedem nomes de camadas (vírgulas, curingas `*` e `?`), depois as viewports `[Todas/Selecionar/Atual] <Atual>`; Redefinir devolve cada camada ao padrão "congelada em novas viewports"; `V` define esse padrão (`[Congelada/Descongelada]`), que {{cmd:MVIEW}} usa. `?` lista as camadas congeladas na viewport atual. A coluna de viewports do painel Camadas faz o mesmo para uma viewport. Veja [Congelar uma camada em uma viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliases: `MS`; ou clique duas vezes dentro de uma viewport. Somente em uma folha. Trabalha no modelo por meio de uma viewport: a selecionada, a única na folha, ou `Clique dentro da viewport para trabalhar nela`. Pan e zoom ali alteram a vista da viewport (uma viewport com a exibição bloqueada mantém a vista, e a folha se move no lugar); a nova vista é gravada como uma etapa de desfazer. Veja [Trabalhar no modelo por meio de uma viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliases: `PS`; ou clique duas vezes fora da viewport, ou clique em uma guia sob o desenho. Volta à folha.

### PLOT

Aliases: `PRINT`, `PUBLISH`, `EXPORTPDF`; ou {{key:Mod+P}}. Abre a caixa de diálogo {{ui:Plotar em PDF}}. Veja [Plotar em PDF](topic:plot-pdf).

### PLOTSTYLES

Aliases: `STYLESMANAGER`, `PSTABLES`; ou {{ui:Editar tabelas…}} na caixa de diálogo {{ui:Plotar em PDF}}. Abre {{ui:Tabelas de estilos de plotagem}}: como cada cor sai impressa (cor, cinza, tinta, espessura de linha), mantida com o desenho. Veja [Tabelas de estilos de plotagem](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} move objetos entre uma folha e o modelo por meio de uma viewport, escalados e girados para parecerem iguais do outro lado. Em uma folha, selecione objetos e eles vão para o modelo (escolha a viewport quando a folha tiver mais de uma). Enquanto você trabalha no modelo por meio de uma viewport ({{cmd:MSPACE}}), os objetos selecionados vão para a folha. Informa quantas vezes maiores ou menores eles ficaram. As viewports permanecem em sua folha. Uma etapa de desfazer.

### ISODRAFT

{{cmd:ISODRAFT}} liga ou desliga o desenho isométrico (`ON` ou `OFF`), ou vai direto para o plano `Left`, `Top` ou `Right`. Enquanto estiver ligado: Orto ({{key:F8}}) mantém linhas nos dois eixos do plano (esquerdo: 90° e 150°; superior: 30° e 150°; direito: 30° e 90°), o rastreamento polar ({{key:F10}}) segue os mesmos eixos, o snap na grade ({{key:F9}}) usa a grade isométrica, e a grade ({{key:F7}}) é desenhada com linhas a 30°, 90° e 150°. {{cmd:ELLIPSE}} ganha `Isocírculo`: informe um centro e um raio (ou `Diâmetro`) e ela desenha a elipse que um círculo mostra no plano atual. O desenho continua plano: são auxílios para desenhar uma vista pictórica, não um modelo 3D. A configuração vale para esta sessão e não é salva no arquivo.

### ISOPLANE

{{cmd:ISOPLANE}} escolhe o plano em que o desenho isométrico trabalha: `Left`, `Top` ou `Right`. Enter vai para o próximo plano. Enquanto o desenho isométrico estiver ligado, {{key:F5}} faz o mesmo no meio de um comando; enquanto estiver desligado, {{key:F5}} fica com o navegador.

## Consulta

### CAL

Imprime o valor de um cálculo, como seria lido em qualquer lugar onde um comprimento é digitado.

- `Expressão`: digite-a, por exemplo `12'6"+3/4"` ou `(24'-0")/3`, e pressione {{key:Enter}}. O CadCraft imprime `= 12'-6 3/4"   (150,75 unidades do desenho)`. Veja [Aritmética em um valor digitado](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliases: `DI`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Medir distância}}.

- `Especifique o primeiro ponto`, `Especifique o segundo ponto`. Imprime distância, ângulo, Delta X e Delta Y.

### AREA

Aliases: `AA`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Área}}. Imprime a área e o perímetro.

- `Especifique o primeiro canto [Objeto/Adicionar área/Subtrair área] <Objeto>`
  - Clique ou digite os cantos; em `Especifique o próximo ponto (Enter fecha) [Desfazer (U)]` pressione {{key:Enter}} para fechar o contorno. `U` desfaz o último canto.
  - {{key:Enter}} ou `O`, depois `Selecione o objeto`: um círculo (imprime a circunferência), uma elipse, uma polilinha (uma aberta é fechada por uma linha reta para a área, e seu comprimento é impresso) ou uma hachura (furos são descontados).
  - `A` (Adicionar área) e `S` (Subtrair área) mantêm um total acumulado: o prompt começa com `(modo ADICIONAR)` ou `(modo SUBTRAIR)`, cada área é somada ou descontada, e `Área total = …` é impressa depois de cada uma. Nesses modos, `O` escolhe objetos até {{key:Enter}}, e {{key:Enter}} no primeiro prompt encerra o comando.

### MEASUREGEOM

Aliases: `MEA`. `Informe uma opção [Distância/Raio/Ângulo/Área] <Distância>`; depois de cada medição pergunta de novo, com `eXit` como padrão.

`Rápido` mede ao redor do ponteiro enquanto você o move: a distância até o objeto mais próximo à direita, acima, à esquerda e abaixo (ao longo dos eixos do UCS atual), desenhada à medida que você avança, e o ângulo onde dois desses vizinhos são retos e se encontram. Um clique grava as quatro distâncias, a largura e a altura livres e os ângulos no histórico; Enter volta às opções. Lê o que está na tela.

- `D`: dois pontos, como {{cmd:DIST}}.
- `R`: `Selecione arco ou círculo`; imprime o raio e o diâmetro.
- `A`: um arco (seu ângulo incluído), uma linha e depois uma segunda linha (o ângulo entre elas, para o lado das extremidades distantes), ou {{key:Enter}} e três pontos (vértice, depois as duas extremidades).
- `AR`: como {{cmd:AREA}}, uma área.

### ID

Sem aliases. `Especifique o ponto`; imprime o seu X e Y.

### LIST

Aliases: `LI`, `LS`. `Selecione objetos`; imprime o tipo, a camada e as principais medidas de cada objeto.

### MASSPROP

{{cmd:MASSPROP}} dá as propriedades de seção das regiões e dos objetos fechados que você seleciona, tomados em conjunto: área, perímetro, caixa delimitadora, centroide, momentos de inércia em torno dos eixos X e Y que passam pela origem, o produto de inércia, raios de giração, os mesmos momentos em torno do centroide, e os momentos principais com as direções dos seus eixos. Furos em uma região contam como furos. As figuras estão nas unidades do desenho e são exatas para contornos feitos de linhas e arcos; elipses e splines são medidas como pequenos segmentos retos, e o programa informa isso. Depois do relatório, pergunta se deve gravá-lo em um arquivo de texto. Objetos que não estão fechados ficam de fora, e o programa informa quantos.

## Vista, arquivo e outros

### ZOOM

Aliases: `Z`.

- `Especifique o canto da janela, informe um fator de escala (nX) [Extensão/Tudo/Janela/Anterior/Escala/Centro]`. Clique em dois cantos para uma janela. `E`, `A` ou Enter: o desenho inteiro.
- `P` (Anterior, ou {{ui:Anterior}} na barra de ferramentas) volta à vista anterior, até 10 vistas por guia; uma sequência de passos da roda ou um pan contam como uma vista.
- Um número como `2`, `2x` ou `0.5x` (ou `S` e depois o número) aproxima ou afasta por esse fator em torno do centro da tela.
- `C` pede `Especifique o ponto central` e `Informe a altura ou a ampliação (nX)`.

### PDFATTACH, PDFIMPORT e os comandos PDF

Aliases: `PDFATT` para {{cmd:PDFATTACH}}, `PDFIM` para {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} coloca uma página de PDF sob o desenho (arquivo, página, ponto de inserção, escala, rotação); {{cmd:PDFIMPORT}} transforma as linhas, curvas, preenchimentos e textos de uma página em objetos do desenho, em camadas com o nome do PDF, em tamanho real, em uma escala digitada, ou escalados a partir de dois pontos e uma distância real. {{cmd:PDFCLIP}} recorta um underlay, {{cmd:PDFADJUST}} define esmaecimento, contraste, monocromático ou o desliga, {{cmd:PDFLAYERS}} liga e desliga as camadas do próprio PDF, e {{cmd:PDF}} informa ao CadCraft de novo os arquivos que os underlays de um desenho usam. Veja [Underlays de PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Preenchimento automático do desenho: sem comando em execução, um fantasma cinza mostra o que os próprios padrões do desenho indicam como próximo. {{cmd:AUTOCOMPLETE}} o liga com `On` ou `Off` (também em Configurações › CadCraft) ou `Show` mostra o que sugeriria agora. **Tab** desenha o fantasma como uma etapa de desfazer, **Esc** o dispensa até o desenho mudar. Ele encontra três coisas nos objetos mais novos: a próxima cópia de algo desenhado duas vezes ou mais em um passo regular (montantes, colunas, espelho e piso de uma escada), os próximos passos de uma escada em polilinha, e o lado que falta de um ambiente ou de uma cadeia de paredes. No meio de {{cmd:LINE}} ou {{cmd:PLINE}}, o fantasma é o **próximo ponto**: o próximo passo de uma escada (espelho, piso, espelho…), o quarto canto de um retângulo, o ponto que o fecha, ou mais um passo igual. Leve o cursor perto dele e pressione **Tab**, como se tivesse clicado ali; continue ou pressione Enter. Calculado neste computador por regras, sem modelo.

### AUTOSHEET

Alias: `ASH`. Folhas que se montam sozinhas. {{cmd:AUTOSHEET}} pega as partes do desenho (suas vistas nomeadas, ou as partes separadas do modelo, ou o modelo inteiro), escolhe um tamanho de papel (ou o que você informar), dá a cada parte uma escala padrão (uma escala para todas, ou a maior que cada uma comporta) e posiciona as vistas em linhas, em novas folhas, com uma legenda e uma legenda de vista (nome e escala) sob cada uma. O que não cabe em uma folha ganha uma folha própria. Uma etapa de desfazer. Calculado neste computador por regras, sem modelo.

### PHOTOSKETCH

Alias: `PSK`. Foto de esboço para desenho. Escolha uma foto (JPEG, PNG ou TIFF) de um esboço à mão em uma folha de papel. {{cmd:PHOTOSKETCH}} encontra os quatro cantos da folha, endireita a perspectiva, usa o tamanho do papel que você informar (`Papel`, ou o padrão mais próximo) e a `Escala` do esboço (1 : n), depois traça as linhas da caneta em linhas, arcos e círculos, com uma camada para cada cor de caneta (preto, vermelho, azul, verde). Se não encontrar a borda do papel, usa a foto inteira como folha e informa isso. As letras ficam de fora. Uma etapa de desfazer. Feito neste computador com processamento clássico de imagens, sem modelo, sem enviar nada a lugar algum. Veja também os comandos de desenho digitalizado.

### AUTODIM

Alias: `ADIM`. Cotagem automática por regras. {{cmd:AUTODIM}} cota os objetos selecionados (ou o desenho inteiro) a partir das suas arestas de nível e de prumo: uma cadeia de cotas ao longo dos lados que você escolher (`Lados`), uma cota total por fora, a largura de cada vão (um espaço entre linhas de parede alinhadas), um diâmetro para cada tamanho de furo, e com `Grade` o espaçamento entre as linhas de grade. Uma cota que já existe não é criada de novo. Uma etapa de desfazer. Calculado neste computador por regras, sem modelo.

### GRIDMOVE

Alias: `GM`. Mover uma linha de grade leva o conjunto junto. {{cmd:GRIDMOVE}} move uma linha de grade (uma linha em uma camada cujo nome diz grade ou eixo) e o que nela se apoia: paredes com uma extremidade sobre a linha se esticam para acompanhá-la, paredes ao longo dela se movem inteiras, colunas (referências de bloco e círculos sobre a linha), seu balão e sua etiqueta se movem, e cotas cujos pontos estão sobre ela medem o novo espaçamento. Dê dois pontos (só a parte que atravessa a linha conta) ou `Distância`. Uma etapa de desfazer desfaz tudo. Feito por regras neste computador.

### DETAILS

Alias: `DET`. Detalhes que encontram você. {{cmd:DETAILS}} mantém os detalhes próprios do seu escritório: `Adicionar` põe um bloco deste desenho na lista, `Listar` e `Remover` a gerenciam, e `Localizar` as ordena para o que está selecionado (ou para o que você desenhou por último) pelas palavras de suas camadas, nomes de blocos, padrões de hachura e notas, comparadas ao nome e às notas de cada detalhe, de modo que uma verga de janela encontra o seu pingadeira de peitoril. Escolha um número e um ponto para colocá-lo. Com `Dica` ligada (também em Configurações › CadCraft), selecionar algo que um detalhe reconhece coloca uma linha na barra de status. A lista fica guardada neste navegador, neste computador, e é essa lista que é pesquisada. `Compartilhar` a coloca também na sua pasta Documentos (`.cadcraft/firm-details.json`, com o desenho de cada bloco): `Puxar` adiciona o que a sua equipe tem e você não tem, `Enviar` adiciona o que você tem e eles não têm, `Ambos` faz as duas coisas, e nada é removido de nenhum dos lados. Abra antes a pasta Documentos ({{cmd:DOCUMENTS}}); quando essa pasta for uma pasta de plano Team Cloud, a equipe inteira compartilha uma única lista. Um item de detalhe no painel Biblioteca tem um botão **Adicionar aos detalhes da minha empresa** que o coloca nessa mesma lista. Feito neste computador por palavras, sem modelo.

### SKETCHFIX

Alias: `SKF`. Esboços a caneta viram geometria precisa. Pressione e arraste um traço à mão livre de cada vez (caneta, mouse ou dedo), depois Enter. Cada traço é lido como uma linha, círculo, arco, retângulo ou polilinha: linhas quase horizontais e verticais ficam exatamente horizontais e verticais, um traço fechado e redondo vira um círculo, um traço fechado com quatro cantos retos vira um retângulo, e as extremidades dos traços são puxadas para se encontrar entre si e com as extremidades já existentes no desenho. Uma etapa de desfazer. Calculado neste computador por regras, sem modelo.

### SCANATTACH e os comandos de desenho digitalizado

Aliases: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} não tem nenhum. Trabalham sobre uma imagem, cada um em uma etapa de desfazer. {{cmd:SCANATTACH}} insere um PNG, JPEG, TIFF (uma página ou todas) ou uma página de PDF que seja uma imagem. {{cmd:SCANSCALE}} escala a folha a partir de dois pontos escolhidos e da distância real. {{cmd:SCANALIGN}} a move e gira sobre dois pontos (`Escalar a folha para caber` Sim/Não). {{cmd:SCANDESKEW}} mostra o ângulo das linhas longas da folha e a gira quando você `Aceitar` ou informar um `Valor`. {{cmd:SCANCLEAN}} a deixa em preto e branco (`Limiar` Auto/Adaptativo/Nível, `Manchas`) e `Executar`. {{cmd:SCANCROP}} mantém uma janela. {{cmd:SCANERASE}} apaga um `Retângulo`, `Polígono` ou `Laço`. {{cmd:SCANTRACE}} traça linhas e arcos em uma nova camada (`Tolerância`, `Janela`, `Arcos`, `Restos`, `Executar`) e informa o que encontrou e o que deixou como raster. {{cmd:SCANINFO}} lista o arquivo original e as etapas. {{cmd:RASTERSNAP}} liga ou desliga o snap nas linhas das folhas digitalizadas. Veja o tópico Desenhos digitalizados e o traçado.

### REGEN e REGENALL

Aliases: `RE` para {{cmd:REGEN}}, `REA` para {{cmd:REGENALL}}. Refaz na tela o que é desenhado a partir do desenho: {{cmd:REGEN}} a guia que você está vendo (em uma folha, também o modelo que as suas viewports mostram), {{cmd:REGENALL}} todas as guias, todos os painéis de tela dividida e todos os desenhos abertos. Use quando a imagem parecer desatualizada depois de uma alteração feita por script ou muito grande, ou quando um assistente tiver editado o desenho; o próprio desenho não é tocado, então não há nada a desfazer.

### NAMEDVIEW

Aliases: `NV`, `VIEWS`. `Informe uma opção [?/Restaurar/Salvar/Janela/Excluir] <Restaurar>`, depois o nome da vista. `S` salva a vista na tela, `W` uma janela que você escolhe, `R` mostra uma vista salva, `D` exclui uma, `?` lista as vistas desta guia. Salvar com um nome existente o substitui; cada alteração é uma etapa de desfazer. As vistas pertencem à guia em que foram salvas. Arquivos DWG e DXF as mantêm (a tabela VIEW); as vistas de uma folha voltam na primeira folha, já que o arquivo não diz qual é qual.

### UNDO e REDO

Aliases: `U` para {{cmd:UNDO}}; {{cmd:REDO}} não tem nenhum. Também {{key:Mod+Z}} e {{key:Mod+Y}}.

### LAYER

Aliases: `LA`. Vai para o painel {{ui:Camadas}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Informe o tipo de linha para os novos objetos` — `PorCamada`, `PorBloco` ou um nome (`?` lista: Continuous, os do próprio desenho, e DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE com seus tamanhos `2` (metade) e `X2` (dobro)). {{cmd:LWEIGHT}} (`LW`): a espessura de linha dos novos objetos em mm, ou `PorCamada`, `PorBloco`, `Padrão`. {{cmd:LTSCALE}} (`LTS`): a escala de tipo de linha do desenho (com desfazer). {{cmd:LWDISPLAY}} (`LWT`): `Mostrar espessuras de linha [ON/OFF]` — o mesmo que o botão {{ui:LWT}} na barra de status. Veja [Espessuras de linha e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Informe o tipo de objeto a renomear [LAyer/Block]`, `Informe o nome antigo`, depois o novo nome; objetos ou referências acompanham. {{cmd:LAYMRG}}: `Selecione objeto na camada a mesclar ou [Nome]` até {{key:Enter}}, depois `Selecione objeto na camada de destino ou [Nome]` e `Y`. {{cmd:LAYDEL}}: `Selecione objeto na camada a excluir ou [Nome]`, depois `Y`: a camada e cada objeto nela vão embora (não a camada 0, DEFPOINTS ou a camada atual). Uma etapa de desfazer cada. Veja [Organizar um desenho com camadas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Camadas escolhendo objetos; também no menu {{ui:Ferramentas}} do painel {{ui:Camadas}}. {{cmd:LAYISO}}: `Selecione objetos na(s) camada(s) a isolar`, depois {{key:Enter}}: todas as outras camadas são desligadas. {{cmd:LAYUNISO}} as liga de novo. {{cmd:LAYOFF}} e {{cmd:LAYFRZ}}: `Selecione um objeto na camada a desligar` (ou congelar), repetidamente; `U` desfaz o último, {{key:Enter}} encerra. {{cmd:LAYMCUR}}: `Selecione o objeto cuja camada se tornará atual`. {{cmd:LAYON}} liga todas as camadas, {{cmd:LAYTHW}} descongela todas. Cada comando é uma etapa de desfazer. Veja [Organizar um desenho com camadas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} inicia um desenho vazio e {{cmd:OPEN}} abre um DWG ou DXF, cada um em sua própria guia sobre o desenho (um novo desenho intocado é usado no lugar de uma nova guia). Fechar uma guia com alterações não salvas pergunta antes. Veja [Dividir a tela](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, também {{key:Mod+S}}) baixa uma cópia no formato do desenho: DWG se foi aberto de um DWG, DXF se foi de um DXF. Um novo desenho usa o formato escolhido por último em Salvar como neste navegador, senão DWG.

{{cmd:SAVEAS}} (também {{key:Mod+Shift+S}}) abre a caixa de diálogo {{ui:Salvar uma cópia como}}: escolha {{ui:DWG}} (e a sua {{ui:Versão}}), {{ui:DXF R12}} ou {{ui:DXF 2000}}, depois {{ui:Salvar}}. A escolha fica para este desenho e para os novos desenhos neste navegador.

{{cmd:DXFOUT}} baixa sempre uma cópia DXF R12, sem alterar o formato que {{cmd:SAVE}} usa.

Veja [Arquivos: o que abre, o que salva](topic:files#saving).

### TOUR

Aliases: `TUTORIAL`. Inicia de novo o tour de seis passos do primeiro desenho. Veja [Primeiros passos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliases: `TBDOCK`. `Posição da barra de ferramentas [Topo/Base/Esquerda/Direita]`. Veja [Configurações](topic:settings#toolbar-position).

### COMMANDLINE

Aliases: `CMDLINE`. `Linha de comando [Acoplada na base/Flutuante/Uma linha/Linhas do histórico exibidas/Histórico de comandos (F2)]`: acopla ou flutua a linha de comando, a deixa em uma linha, pergunta quantas linhas do histórico mostrar (0 a 12), ou abre o histórico. Veja [Configurações](topic:settings#command-line).

### TOPAREA

`Área superior [Padrão/Compacta]`: as barras acima do desenho como estavam, ou compactas. Veja [Configurações](topic:settings#top-area).

### POLARANG

`Informe o passo do ângulo polar em graus <90>`: o passo em que o rastreamento {{ui:Polar}} se alinha (maior que 0, até 180). Mantido neste navegador.

### UNITS

Aliases: `UN`. Como os comprimentos são escritos e digitados.

- `Informe o formato de comprimento [Científico/Decimal/Engenharia/Arquitetônico/Fracionário] <atual>`
- Arquitetônico e Fracionário: `Informe o denominador da menor fração a exibir (1, 2, 4, 8, 16, 32, 64, 128 ou 256)`. Os outros: `Informe o número de casas decimais (0 a 8)`.

As novas cotas o seguem. Uma etapa de desfazer. O mesmo que {{ui:Formato de comprimento}} e {{ui:Precisão}} em {{ui:Configurações atuais}}; veja [Pés e polegadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliases: `GDS`. Visualiza um layout de CI (um arquivo de fluxo GDSII): protótipo de laboratório, apenas para visualizar e medir.

- Um seletor de arquivo recebe um arquivo `.gds`; com várias células de topo, `Informe a célula de topo a desenhar`.
- Cada camada e tipo de dado torna-se uma camada do desenho (`GDS 1`, `GDS 2/5`), referências e matrizes são colocadas planas, na unidade de usuário do arquivo (geralmente micrômetros). Uma etapa de desfazer. Nada é simulado ou verificado, e o arquivo não é gravado de volta.

### DIAGRAM

Aliases: `TEXTDIAGRAM`, `T2D`. Um diagrama a partir de texto.

- Uma caixa recebe o texto (ou uma linha com `;` entre as instruções na linha de comando): um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de origem e destino.
- `Especifique o canto superior esquerdo do diagrama`, depois `Especifique a altura do texto`.

Blocos e conectores são objetos comuns na camada `Diagram`, selecionados ao final. Uma etapa de desfazer. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).

### OLELIST

Aliases: `OLES`. Os objetos OLE que um DWG contém e que o CadCraft não consegue colocar sozinho.

- Lista cada um: número, tipo, tamanho, se salvou uma imagem.
- `Informe uma opção [Colocar/eXit] <eXit>`: Colocar pede o número, o canto inferior esquerdo e a largura, e desenha um quadro com a imagem. Uma etapa de desfazer; o objeto mantido não é alterado. Veja [Imagens](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliases: `SHX`. Suas próprias fontes SHX.

- `Informe uma opção de fonte SHX [Pasta/Arquivos/Listar/Remover/Inverter/Limpar] <Listar>`

{{ui:Pasta}} lê cada `.shx` de uma pasta (CadCraft Studio; de novo a cada início), {{ui:Arquivos}} recebe arquivos escolhidos (o navegador), {{ui:Inverter}} dispõe as letras de uma fonte começando pela última. Estilos de texto que citam uma fonte carregada desenham com ela. Veja [Desenhar texto com suas próprias fontes SHX](topic:shx-fonts).

### LIMITS

Qual o tamanho que o desenho deve ter.

- `Especifique o canto inferior esquerdo ou [ON/OFF] <atual>`: um ponto, `ON` ou `OFF`.
- `Especifique o canto superior direito <atual>`.

A grade preenche os limites, {{cmd:ZOOM}} Tudo os mostra, e com os limites em ON um ponto fora deles é recusado (`**Fora dos limites`). Uma etapa de desfazer; salvo em DWG e DXF. Veja [Definir os limites do desenho](topic:drawing-limits).

### AUNITS

Aliases: `ANGUNITS`. Como os ângulos são mostrados e digitados.

- `Informe o formato de ângulo [Graus decimais/Graus-minutos-segundos/Rumos de agrimensor] <atual>`
- `Informe o número de casas decimais (0 a 8)`, ou, para os outros dois, `Informe a precisão` (0 graus, 2 minutos, 4 segundos, 5 a 8 casas decimais de segundo).

Uma etapa de desfazer; salvo em DWG e DXF. O mesmo que {{ui:Formato de ângulo}} em {{ui:Configurações atuais}}. Veja [Digitar e mostrar rumos e ângulos](topic:bearings-and-angles).

### APPLOAD

Aliases: `AP`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Carregar aplicativo…}}. A caixa de diálogo {{ui:Carregar aplicativos}}: carrega rotinas `.lsp` e arquivos de diálogo `.dcl`, descarrega-os, carrega-os de novo pelo histórico, e a Suíte de inicialização. Os comandos `(defun c:NAME …)` de uma rotina então funcionam como quaisquer outros. Veja [Carregar aplicativos](topic:load-applications) e [Executar rotinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Editar aliases…}}) abre seu arquivo de aliases (linhas `ALIAS, *COMMAND`); {{ui:Salvar}} o aplica. {{cmd:REINIT}} o aplica de novo. Veja [Editar aliases de comandos](topic:command-aliases).

### LISPEDIT

Aliases: `VLIDE`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Editor LISP}}. Abre o editor LISP, uma janela que fica aberta ao lado do desenho.

- O texto: números de linha, o par do parêntese no cursor marcado (em vermelho quando não tem), {{key:Enter}} recua a nova linha sob o parêntese aberto, {{key:Tab}} digita dois espaços, {{key:Esc}} sai do texto.
- {{ui:Carregar no desenho}} ({{key:Ctrl+Shift+Enter}}): lê todas as formas, como {{cmd:APPLOAD}} faz com o arquivo, e cria os seus comandos `c:`. O arquivo aparece na lista de {{cmd:APPLOAD}}.
- {{ui:Executar seleção}} ({{key:Ctrl+Enter}}): avalia as formas selecionadas, ou a forma em que o cursor está.
- {{ui:Parar}}: encerra uma rotina em execução.
- {{ui:Console}}: o que a rotina imprimiu, e cada erro com a sua linha; clique em um erro para ir até ele. O texto é executado uma forma de nível superior por vez, então a linha é a da forma, ou, dentro dela, a linha que chama a função que o erro cita.
- {{ui:Nova}}, {{ui:Abrir}}, {{ui:Salvar}} ({{key:Ctrl+S}}): um arquivo `.lsp`. O texto também fica guardado neste navegador, então fechar a janela não perde nada.
- Ao lado do texto: as funções que a rotina define, as que ela chama e que este LISP ainda não tem, as que ela chama e que não são definidas nela nem embutidas, e as listas completas do que está embutido e do que não está.

Um texto com um parêntese que nunca fecha, ou uma cadeia que nunca termina, não é executado: a linha é indicada. Não há depurador passo a passo, pontos de parada nem janela de observação. Veja [Executar rotinas LISP](topic:run-lisp).

### HELP

Aliases: `?`. Imprime todos os comandos, seus aliases e uma descrição de uma linha no histórico da linha de comando. Não abre esta ajuda: pressione {{key:F1}} ou clique em {{ui:Ajuda}} para isso.

## Prompt de seleção de objetos

Em qualquer prompt `Selecione objetos`: clique em objetos, desenhe janelas (da esquerda para a direita) e cruzamentos (da direita para a esquerda) com dois cliques, ou pressione e arraste um laço ({{key:Space}} enquanto arrasta: janela, cruzamento, cerca), {{key:Shift}}+clique para remover, e pressione {{key:Enter}} para terminar. Você também pode digitar `ALL` (tudo), `L` (o último objeto), `P` (Anterior: o que o último comando usou), `F` (Cerca: objetos que uma linha de pontos cruza; `U` desfaz um ponto), `W` (Janela), `C` (Cruzamento), `R` (modo Remover: os cliques tiram objetos; o prompt diz `Remover objetos`) e `A` (Adicionar de novo). `?` lista todos. Eles não aparecem no prompt. {{key:Tab}} sobre objetos sobrepostos destaca o próximo; clique para escolhê-lo. Veja [Selecionar objetos](topic:select-objects).

### ACCESS

Alias: `AX`. Desenhar sem visão. {{cmd:ACCESS}} liga ou desliga o Acesso (`On`, `Off`) e alterna os sons de snap (`Sound`) e os comandos de voz (`Voice`); primeiro diz o estado. Com o Acesso ligado, cada comando e resultado é falado pelo leitor de tela, e a área de desenho tem um cursor de teclado. O tópico de ajuda "Desenhar sem visão" tem as teclas.

### DESCRIBE

Alias: `DESC`. Informa o que o desenho contém: quantos objetos, de que tipo, de que tamanho, quantas camadas, o que está selecionado. Apenas lê; não altera nada.

### WHEREAMI

Alias: `WHERE`. Informa onde está o cursor, nas unidades do desenho.

### NEARBY

Informa o que está perto do cursor, do mais próximo para o mais distante, cada um com a sua distância e o lado em que está.

### SAYSEL

Informa o que está selecionado, uma frase por objeto (comprimento da linha, extremidades e ângulo; raio e centro do círculo; texto como escrito).

### VOICE

Liga ou desliga comandos falados. São reconhecidos neste computador; quando o navegador não consegue fazer isso, a voz fica desligada, a menos que você escolha o serviço online do navegador em Configurações.

### TOUCHCROSSHAIR

Alias: `TCX`. A mira deslocada para desenhar com o dedo, para que a ponta do dedo não cubra o ponto que você escolhe. Enquanto estiver ligada, um dedo sobre o desenho não escolhe: move uma mira que fica acima do dedo e para um dos lados. Os snaps de objeto e o rastreamento seguem a mira. Levantar o dedo não escolhe nada e deixa a mira onde está. Para escolher, pressione o botão {{ui:Click}} no canto do desenho, ou toque em qualquer ponto do desenho com um segundo dedo. Mantenha {{ui:Click}} pressionado enquanto move o outro dedo para arrastar (uma janela de seleção, um laço, um grip). Um dedo pressionado e parado, ou o botão {{ui:Enter}}, é Enter. Dois dedos fazem pan e zoom como antes. Perto da borda inferior e da borda lateral oposta, a mira se aproxima do dedo, para que toda parte do desenho possa ser alcançada. Uma caneta e um mouse sempre escolhem diretamente.

{{cmd:TOUCHCROSSHAIR}} informa o estado e pergunta `ON`, `OFF`, `Auto` (ligada apenas onde um dedo é o único ponteiro, então fica desligada em um computador com mouse), `Distance` (a distância da mira até o dedo, de 24 a 240 pixels) ou `Side` (`Left`: para cima e à esquerda, para a mão direita; `Right` para a mão esquerda; os botões vão para o outro canto). As mesmas escolhas estão em Configurações › CadCraft, e em um dispositivo com tela sensível ao toque a barra de status tem uma chave {{ui:Offset crosshair}}. As escolhas ficam guardadas neste navegador.

### WHOHAS

Informa quem tem um desenho aberto. No CadCraft Studio, em um computador, abrir um DWG ou DXF grava um pequeno arquivo de bloqueio ao lado dele (`Plan.dwg.cclock`: quem, desde quando, qual versão), atualiza-o a cada minuto enquanto o desenho estiver aberto, e o remove quando o desenho é fechado. Abrir um desenho que outra pessoa tem aberto informa quem é e desde quando, e oferece {{ui:Open read-only}} (Salvar então pede um novo nome), {{ui:Open anyway}} (a outra pessoa é avisada na próxima atualização dela) ou {{ui:Cancel}}. Salvar sobre um arquivo que outra pessoa tem aberto pergunta antes. Um bloqueio que não foi atualizado por cinco minutos é considerado obsoleto: a outra cópia foi fechada sem salvar, ou o computador está em suspensão.

{{cmd:WHOHAS}} pergunta `Current` (o desenho aberto), `File` (escolha um), `FOlder` (escolha uma pasta: cada desenho nela que esteja aberto em algum lugar é listado), `Path` (digite um caminho completo) ou `Name` (o nome que os outros veem; o nome da sua conta, quando você está conectado). O Studio só alcança pastas que você escolheu: para um desenho aberto de uma pasta que nunca foi escolhida, avisa uma vez que não pode anotá-lo como aberto; `FOlder` escolhe a pasta, e os bloqueios passam a funcionar ali dali em diante. O bloqueio é um aviso para as pessoas, não uma barreira: outro programa ainda pode gravar o arquivo. Em um navegador não há pastas a consultar, e o comando diz isso.

### OVERKILL

Exclui objetos duplicados e arruma linhas e arcos sobrepostos, para desenhos que chegam cheios de traçados duplicados. `Selecione objetos para limpar`, {{key:Enter}}, depois {{key:Enter}} de novo para limpar com as configurações mostradas, ou altere uma antes:

- `Tolerância`: quão próximas duas coordenadas devem estar para contar como iguais (0,000001 para começar; 0 significa exatamente iguais).
- `Ignorar`: propriedades que podem diferir entre dois objetos que são de resto iguais. Digite um nome para alterná-la: `Cor`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ou `Nenhum` / `Todos`. {{key:Enter}} ao concluir.
- `Sobreposição`: ligado ou desligado. Ligado, linhas sobre uma mesma reta que se sobrepõem tornam-se uma linha (uma linha dentro de outra é simplesmente excluída), e arcos sobre um mesmo círculo que se sobrepõem tornam-se um arco; arcos que fecham uma volta completa tornam-se um círculo, e um arco sobre um círculo é excluído.
- `Extremidades`: ligado ou desligado. Ligado, linhas sobre uma mesma reta e arcos sobre um mesmo círculo que só se tocam ponta a ponta tornam-se um único pedaço.

Todo tipo de objeto é verificado quanto a duplicatas: dois objetos são duplicados quando a geometria é a mesma dentro da tolerância e a camada, cor, tipo de linha, escala do tipo de linha, espessura de linha, espessura, transparência e altura coincidem (menos as que você ignorar). Linhas e polilinhas abertas também coincidem quando desenhadas no sentido contrário. O comando informa quantos objetos verificou e excluiu: duplicatas, pedaços sobrepostos mesclados, pedaços unidos ponta a ponta. Um {{cmd:UNDO}} desfaz tudo. As configurações valem até você fechar a janela do desenho.

Ele deixa em paz: objetos em camadas bloqueadas e objetos ocultos. Não mescla linhas com altura (Z) (duplicatas exatas delas ainda são excluídas), e não toca nos segmentos dentro de uma polilinha (eles não são afinados), em uma linha sobre um segmento de polilinha, nem em uma polilinha fechada desenhada no sentido contrário.

### DRAWORDER

Altera quais objetos são desenhados na frente. `Selecione objetos para reordenar`, {{key:Enter}}, depois `Acima dos objetos`, `Abaixo dos objetos`, `Frente` ou `Trás` ({{key:Enter}} = `Trás`). `Acima dos objetos` e `Abaixo dos objetos` pedem os objetos de referência: a seleção vai logo na frente do mais à frente deles, ou logo atrás do mais ao fundo. Os objetos selecionados mantêm sua própria ordem entre si. Uma etapa de desfazer. A ordem é salva com o desenho em DWG e DXF, onde é a ordem em que os objetos são gravados.

Na tela, o CadCraft desenha primeiro as áreas preenchidas (hachuras sólidas, polilinhas largas, máscaras), depois as linhas, depois os textos, então um texto sempre se lê sobre um preenchimento; a ordem de desenho aparece entre objetos preenchidos e entre imagens. Outros programas que abrem o arquivo desenham cada objeto na ordem salva.

### TEXTTOFRONT

Traz textos, cotas e linhas de chamada para a frente de tudo o mais no espaço aberto: `Texto`, `Cotas`, `Linhas de chamada` ou `Tudo` ({{key:Enter}} = `Tudo`). Uma etapa de desfazer. Informa quando não há nenhum, ou quando já estão na frente.

### HATCHTOBACK

Envia toda hachura do espaço aberto para trás de tudo o mais, para que os preenchimentos deixem de cobrir linhas e textos no arquivo salvo. Sem perguntas. Uma etapa de desfazer.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Mostra apenas os objetos selecionados: tudo o mais no espaço aberto sai de vista até {{cmd:UNISOLATEOBJECTS}}. Diferente de {{cmd:LAYISO}}, funciona sobre os objetos que você escolhe, sejam quais forem as suas camadas, e não altera nenhuma camada. Objetos ocultos não são desenhados, escolhidos, alvos de snap, enquadrados por zoom nem plotados, e comandos que aceitam `ALL` os ignoram. O que você desenhar enquanto os objetos estão isolados aparece normalmente.

Isto vale só para a sessão: nada disso é salvo com o desenho, não é uma etapa de desfazer, e ao abrir o desenho de novo tudo aparece. Enquanto houver objetos ocultos, a barra de status mostra um botão com a quantidade; clique nele para mostrá-los de novo.

### HIDEOBJECTS

Oculta os objetos selecionados até {{cmd:UNISOLATEOBJECTS}}. As mesmas regras de {{cmd:ISOLATEOBJECTS}}: só para a sessão, não salvo, não é uma etapa de desfazer.

### UNISOLATEOBJECTS

Aliases: `UNISOLATE`, `UNHIDE`. Mostra de novo todo objeto ocultado por {{cmd:ISOLATEOBJECTS}} ou {{cmd:HIDEOBJECTS}}, e informa quantos voltaram.

### LAYLOCKFADE

Define como os objetos em camadas bloqueadas aparecem e se um clique os alcança. Informa o estado atual, depois aceita:

- um número de 0 a 90: a quantidade de esmaecimento em porcentagem (50 para começar). 0 desliga o esmaecimento.
- `ON` ou `OFF`: esmaecimento ligado ou desligado, mantendo a quantidade.
- `Pick`, depois `Yes` ou `No`: um clique pode selecionar objetos em camadas bloqueadas quando nenhum comando está em execução? `No` (o padrão): eles não podem ser escolhidos de jeito nenhum. `Yes`: um clique ou uma janela os seleciona para que {{ui:Propriedades}} possa mostrá-los; eles continuam não podendo ser alterados, e o próprio `Selecione objetos` de um comando nunca os pega.

Snaps de objeto encontram objetos em camadas bloqueadas de qualquer forma. Plotagens nunca são esmaecidas. As duas configurações são suas, não do desenho, e também estão em {{ui:Configurações}} em {{ui:Camadas bloqueadas}}.

### BURST

Explode referências de bloco e mantém o que os atributos dizem. `Selecione referências de bloco a explodir`, {{key:Enter}}: cada referência é substituída pelos objetos do bloco, e o valor de cada atributo visível vira texto simples na camada desse atributo (um atributo na camada 0 cai na camada da referência, como os outros objetos do bloco na camada 0). Atributos invisíveis são descartados. Um bloco dentro do bloco continua sendo uma referência de bloco. Uma etapa de desfazer; informa as referências explodidas e os valores de atributo transformados em texto.

Recusa um desenho vinculado pelo nome (vincule-o antes, ou copie dele com {{cmd:NCOPY}}), e deixa em paz os outros objetos selecionados. Para referências de bloco, {{cmd:EXPLODE}} dá os mesmos objetos; {{cmd:BURST}} trabalha apenas com referências de bloco e conta o texto dos atributos.

### TXT2MTXT

Alias: `T2M`. Une textos de uma linha em um único texto de parágrafo. `Selecione textos de uma linha para unir`, {{key:Enter}}, depois `Parágrafo` (as linhas se juntam e quebram na largura da linha mais larga) ou `Linhas` (cada texto continua sendo uma linha própria); {{key:Enter}} escolhe o último usado. As linhas são ordenadas de cima para baixo, depois da esquerda para a direita, ao longo da direção do texto de cima. O parágrafo pende do canto superior esquerdo do texto de cima e assume a altura, rotação, estilo, camada e cor dele. Uma etapa de desfazer.

Textos que já são de parágrafo, textos em branco e outros objetos da seleção são deixados em paz, e o comando informa quantos.

### NCOPY

Copia objetos de uma referência de bloco ou de um desenho vinculado para o desenho, sem explodir nada. `Escolha um objeto dentro de uma referência de bloco ou de um desenho vinculado`: o objeto mais próximo do ponto escolhido é copiado onde ele aparece, não importa quantos blocos de profundidade esteja; escolha mais, depois {{key:Enter}}. Em seguida `Ponto base para mover as cópias`: {{key:Enter}} as deixa no lugar, ou dê um ponto base e um segundo ponto. O comando inteiro é uma única etapa de desfazer.

Uma cópia assume a camada em que aparece: um objeto na camada 0 dentro de um bloco vai para a camada da referência em que estava, e uma cor ByBlock vira a cor dessa referência. De um desenho vinculado, a camada `Plan|Walls` vira `Plan$0$Walls` (o nome dado pelo vínculo), feita com a cor, o tipo de linha e a espessura de linha da camada vinculada. O valor de um atributo é copiado como texto. Referências de bloco em camadas bloqueadas não podem ser escolhidas.

### FLATTEN

Define a altura (Z) e a espessura dos objetos selecionados como 0. `Selecione objetos para achatar`, {{key:Enter}}. Também achata os objetos dentro das definições de bloco que a seleção usa (e os blocos dentro deles), de modo que toda referência a esses blocos muda; desenhos vinculados são deixados como estão. Uma etapa de desfazer; informa quantos objetos mudaram, e diz quando nenhum tinha altura ou espessura.

O que o CadCraft guarda da terceira dimensão em um desenho 2D é: uma altura em círculos, arcos, elipses, pontos, textos, referências de bloco, hachuras, linhas de chamada e polilinhas (sua elevação), uma altura em cada extremidade de uma linha, e uma espessura em linhas, círculos, arcos, polilinhas, pontos e textos, como o arquivo as tinha. {{cmd:FLATTEN}} limpa exatamente esses valores. Não toca no modelo 3D da guia 3D, nas faces 3D ou nos sólidos, e um objeto desenhado em um plano inclinado já foi trazido para o plano do desenho quando o arquivo foi aberto.

### BREAKLINE

Desenha uma linha com símbolo de quebra, para uma vista que foi cortada. Informa o tamanho e a extensão atuais, depois `Primeiro ponto da linha de quebra` (ou `Tamanho` / `Extensão` para alterá-los antes), `Segundo ponto`, e `Onde fica o símbolo de quebra`: clique ao longo da linha, ou {{key:Enter}} para o meio. O resultado é uma única polilinha na camada atual: a linha, passando de cada ponto pela extensão, com um traço em forma de Z tão alto quanto o tamanho e metade do comprimento.

`Tamanho` e `Extensão` ficam lembrados como as suas configurações (o tamanho começa como o dobro da altura do texto da cota vezes a escala da cota; a extensão, metade do tamanho). {{key:Enter}} repete o comando.

### AUDIT

Verifica o desenho aberto quanto a danos e os repara. {{cmd:AUDIT}} examina cada objeto no modelo, nas folhas e dentro dos blocos, e a tabela de camadas, e lista o que encontra por tipo:

- números que não são finitos ou são absurdamente grandes;
- objetos sem tamanho: uma linha sem comprimento, um círculo sem raio, uma polilinha com um só ponto, texto sem letras ou altura, uma referência de bloco com escala zero;
- objetos em uma camada que o desenho não tem; referências a um bloco que não existe; nomes de estilos de texto e de cota e nomes de tipos de linha que não estão no desenho;
- blocos que contêm a si mesmos, diretamente ou por meio de outros blocos;
- objetos que compartilham um id, uma chave ou um identificador de arquivo;
- cotas sem os pontos a partir dos quais são medidas, e hachuras cujo contorno não é uma linha fechada.

Depois pergunta `Corrigi-los? [Sim/Não]`. `Não` não altera nada. `Sim` repara tudo em uma única etapa de desfazer: o que não pode ser desenhado é removido (números inválidos, sem tamanho, bloco ausente, cota quebrada, hachura sem contorno utilizável, a referência que fecha um círculo de blocos); uma camada ausente é criada; nomes de estilo e de tipo de linha desconhecidos voltam aos padrões; uma chave compartilhada é substituída. Imprime quantos objetos foram removidos e quantos foram reparados. Os mesmos achados aparecem no painel Problemas, cada um com seu próprio {{ui:Repair}}.

Não recusa nada, mas só verifica o que o próprio CadCraft desenha: dados mantidos para outros programas (sólidos 3D, objetos OLE) não são abertos.

### RECOVER

Abre um DXF ou DWG danificado. {{cmd:RECOVER}} pede o arquivo, lê o que pode ser lido em vez de recusar o arquivo, lista o que ignorou ou presumiu, depois verifica e repara o desenho como {{cmd:AUDIT}} faz com `Sim`.

- DXF: linhas que não fazem parte de um par código e valor são ignoradas até os pares voltarem a se alinhar; uma seção sem fim é fechada; um arquivo cortado é lido até o corte; um DXF binário cortado é lido até o último valor inteiro. Quando uma seção, um bloco ou um objeto ainda não pode ser lido, ele fica de fora e é nomeado, e a leitura prossegue depois dele.
- DWG: objetos que não passam nas suas verificações ou não podem ser decodificados ficam de fora, e uma lista de objetos perdida é refeita percorrendo os dados dos objetos.

O arquivo no disco não é alterado. O desenho recuperado abre sem estar salvo: salve-o com um novo nome. Um arquivo do qual nada pode ser lido é recusado, com o motivo.

### LEGACYTEXT

Converte textos digitados com fontes vietnamitas antigas de 8 bits para Unicode. Nomes curtos `TEXTTOUNICODE` e `VNTEXT`.

Desenhos vietnamitas mais antigos guardam seu texto como caracteres ocidentais que só a fonte transforma em vietnamita: texto TCVN3 nas fontes ABC (`.VnTime`, `.VnArial`, e as fontes em maiúsculas cujos nomes terminam em `H`), e texto VNI nas fontes VNI (`VNI-Times`). O CadCraft mostra esses textos como são lidos assim que o desenho é aberto, pela fonte do seu estilo de texto, do objeto, ou de um trecho dentro de texto de parágrafo; o arquivo ainda guarda os caracteres antigos.

{{cmd:LEGACYTEXT}} informa quantos textos encontrou em cada codificação e pergunta `Converter … para Unicode?`. `Sim` reescreve cada um (modelo, folhas, blocos, valores e definições de atributos) e dá aos estilos de texto uma fonte Unicode (Times New Roman, Arial ou Courier New, conforme o tipo da fonte antiga), em uma única etapa de desfazer. A formatação dentro de texto de parágrafo é mantida.

Quando nenhum texto usa uma fonte conhecida (um estilo que perdeu o nome da fonte), pergunta `Ler os textos selecionados como [Tcvn3/Vni/Nenhum]`: escolha a codificação e selecione os textos. Texto que já é Unicode é deixado em paz. Textos de substituição de cota e texto de multichamada não são convertidos.

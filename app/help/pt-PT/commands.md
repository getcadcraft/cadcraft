---
title: Referência de comandos
summary: Todos os comandos do aplicativo de desenho CadCraft, com os seus aliases, as perguntas que fazem, as suas opções e predefinições.
keywords: comandos, aliases, lista de comandos, área, perímetro, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Escreva o nome de um comando ou um alias e prima {{key:Enter}} ou {{key:Space}}. As maiúsculas e minúsculas não fazem diferença, e um `_`, `-`, `.` ou `'` inicial é ignorado. Escreva `HELP` (ou `?`) para imprimir no histórico da linha de comandos uma lista curta de todos os comandos; prima {{key:F1}} para esta ajuda.

Como ler os pedidos: as opções estão entre parênteses retos, e escolhe-se uma escrevendo as suas letras maiúsculas (`D` para Diâmetro). Um valor predefinido está entre parênteses angulares; prima {{key:Enter}} para o aceitar. Quando se pede um ponto, pode clicar ou escrever qualquer um dos formatos de [Entrada de coordenadas e distâncias](topic:coordinate-entry). Quando se pede uma distância, pode escrever um número ou clicar em dois pontos.

Premir {{key:Enter}} quando se pede um ponto ou um objeto, e não há predefinição, termina o comando. {{key:Esc}} cancela-o. O que um comando fez é um só passo de anulação.

## Desenhar

### LINE

Aliases: `L`. Segmentos retos, cada um um objeto próprio.

- `Especifique o primeiro ponto` (Enter: começa no último ponto que deu)
- `Especifique o ponto seguinte [Anular (U)]`, repetido. Depois de dois segmentos: `[Anular (U)/Fechar (C)]`.
- `U` anula o último segmento, `C` fecha no primeiro ponto e termina. Enter termina.

### PLINE

Aliases: `PL`. Uma polilinha de segmentos de linha e de arco.

- `Especifique o ponto inicial`
- `Especifique o ponto seguinte [Arco/Fechar (C)/Anular (U)]` (Fechar, depois de haver dois segmentos)
- `A` passa a arcos: `Especifique o ponto final do arco [Linha/Fechar (CL)/Anular (U)]`. Cada arco continua tangente ao segmento anterior. `L` volta às linhas, `CL` fecha com um arco.
- Enter termina; a polilinha fica aberta.

### CIRCLE

Aliases: `C`.

- `Especifique o ponto central do círculo [3P/2P/Ttr (tan tan raio)]`
- `Especifique o raio do círculo [Diâmetro] <último raio>`; `D` pede `Especifique o diâmetro do círculo`.
- `2P`: duas extremidades de um diâmetro. `3P`: três pontos no círculo.
- `T` (também o comando `TTR`, e {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Círculo: Tan, Tan, Raio}}): `Especifique o ponto sobre o objeto para a primeira tangente do círculo`, depois a segunda, depois o raio (Enter: o último). O círculo toca os dois objetos (linhas, arcos, círculos, segmentos de polilinha, também dentro de blocos); dos círculos que o fazem, é o que toca mais perto dos pontos indicados. «O círculo não existe» quando nenhum serve.
- `TTT` (ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Círculo: Tan, Tan, Tan}}): três objetos; o círculo tangente aos três, o mais perto dos seus pontos (três linhas dão o círculo interior ou um exterior, consoante onde indique).

### ARC

Aliases: `A`.

- `Especifique o ponto inicial do arco [Centro]`, `Especifique o segundo ponto do arco`, `Especifique o ponto final do arco`: um arco por três pontos.
- `C`: `Especifique o ponto central do arco`, `Especifique o ponto inicial do arco`, `Especifique o ponto final do arco`. O arco percorre no sentido contrário aos ponteiros do relógio, do início ao fim.

### RECTANG

Aliases: `REC`, `RECTANGLE`. Uma polilinha fechada.

- `Especifique o primeiro canto`, `Especifique o outro canto`. Escreva `@largura,altura` para o segundo canto.

### POLYGON

Aliases: `POL`. Um polígono regular como polilinha fechada.

- `Introduza o número de lados <4>` (3 a 1024)
- `Especifique o centro do polígono`
- `Introduza uma opção [Inscrito na circunferência/Circunscrito à circunferência] <I>`
- `Especifique o raio do círculo`: clique ou escreva um ponto; a sua distância define o tamanho e a sua direção roda o polígono.

### ELLIPSE

Aliases: `EL`.

- `Especifique a extremidade do eixo da elipse [Centro]`, `Especifique a outra extremidade do eixo`, `Especifique a distância ao outro eixo`
- `C`: `Especifique o centro da elipse`, `Especifique a extremidade do eixo`, depois a distância ao outro eixo.
- `I` (`Isocírculo`, apenas enquanto {{cmd:ISODRAFT}} estiver ativo): centro, depois raio ou `Diâmetro`: a elipse que um círculo mostra no plano isométrico atual.

### HATCH

Aliases: `H`, `BH`, `BHATCH`; ou {{ui:Trama}} na barra de ferramentas. Imprime primeiro o padrão, a escala e o ângulo atuais.

- `Indique um ponto interior [Selecionar (S)/Padrão/Escala (SC)/Ângulo (A)]`, repetido (`Anular (U)` quando houver uma área): cada clique acrescenta a área fechada à sua volta, com as formas fechadas no interior como ilhas. Enter cria uma só trama com todas elas.
- `S`: `Selecione objetos fechados` (polilinhas fechadas, círculos, elipses fechadas).
- `P`: `Introduza o nome de um padrão, SOLID, ou ? para a lista <atual>`. `SC`: `Especifique a escala do padrão`. `A`: `Especifique o ângulo do padrão`.
- `G` (Gradiente): o preenchimento é um gradiente em vez de um padrão. Veja {{cmd:GRADIENT}} para as suas perguntas.

Veja [Tramas e áreas de preenchimento](topic:hatch).

### GRADIENT

Aliases: `GD`. Preenche uma área com um gradiente de uma ou duas cores. Pergunta primeiro o gradiente e depois continua como {{cmd:HATCH}} (`Indique um ponto interior`, `S` para objetos fechados, {{key:Enter}} para terminar).

- `Introduza uma opção de gradiente [Tipo/Uma cor/Duas cores (TW)/Ângulo/Centrado (C)/Sair (X)] <X>`, repetido; cada vez imprime o gradiente tal como está agora.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ou um deles invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Bastam as primeiras letras.
- `O`: uma cor, depois a sua tonalidade de 0 a 1 (0 escurece até ao preto, 0.5 é a própria cor, 1 clareia até ao branco). `TW`: a primeira e a segunda cor. Uma cor é um número de 1 a 255, três números como `255,128,0`, ou `#rrggbb`.
- `A`: o ângulo em que o gradiente corre. `C`: centrado Sim ou Não (Não move o meio do gradiente para um lado).
- Recusa uma cor ou um tipo que não conhece, e uma tonalidade fora de 0 a 1.

{{cmd:HATCHEDIT}} `G` e Propriedades (Gradiente) alteram depois um gradiente, ou transformam qualquer trama num gradiente. Um gradiente é desenhado no ecrã e impresso. O DWG 2004 e posteriores mantêm-no como uma trama de gradiente real; DXF 2000 e DWG 2000 mantêm-no para o CadCraft, e os outros programas veem um preenchimento sólido na primeira cor.

### HATCHGENERATEBOUNDARY

Aliases: `HGB`. Volta a criar o contorno a partir de uma trama que o perdeu. `Selecione tramas` (ou selecione-as primeiro), depois `Ligar cada trama ao seu novo contorno, para que a siga? [Sim (Y)/Não (N)] <Sim>`.

- Cada circuito da trama torna-se uma polilinha fechada na camada da trama; as novas polilinhas ficam selecionadas. Uma aresta curva volta como os pequenos segmentos retos que a trama mantém.
- Com Sim, a trama segue o seu novo contorno, como uma trama criada com {{cmd:HATCH}}. Um passo de anulação.
- Indica quando nenhuma trama foi selecionada.

### POINT

Aliases: `PO`; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Ponto}}. Objetos de ponto, um por clique, até Enter.

- `Especifique um ponto`

### XLINE

Aliases: `XL`; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Linha de construção}}. Linhas de construção, sem fim nos dois sentidos. Veja [Linhas de construção e semirretas](topic:construction-lines).

- `Especifique um ponto [Hor/Ver/Âng/Bissetriz/Afastamento (O)]`, depois `Especifique o ponto de passagem` para cada linha, até Enter.
- `A`: `Introduza o ângulo da linha de construção [Referência] <0>`; `R` pede primeiro `Selecione um objeto de linha`.
- `B`: `Especifique o vértice do ângulo`, `Especifique o ponto inicial do ângulo`, depois `Especifique o ponto final do ângulo` para cada linha.
- `O`: `Especifique a distância de afastamento [Passante] <Passante>`, depois `Selecione um objeto de linha` e `Especifique o lado do afastamento` (ou `Especifique o ponto de passagem`) para cada linha.

### RAY

Sem aliases; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Semirreta}}. `Especifique o ponto inicial`, depois `Especifique o ponto de passagem` para cada semirreta, até Enter.

### TEXT

Aliases: `DT`, `DTEXT`; ou {{ui:Texto}} na barra de ferramentas. Texto de uma linha; cada linha é um objeto próprio.

- `Especifique o ponto inicial do texto [Justificar (J)]`
- `J`: `Introduza uma opção [Esquerda (L)/Centro/Direita (R)/Meio/TL/MC] <L>`, depois `Especifique o ponto de inserção do texto`
- `Especifique a altura <altura atual do texto>`
- `Especifique o ângulo de rotação do texto <0>`
- `Introduza o texto`, repetido: cada Enter inicia a linha seguinte, abaixo. Enter numa linha vazia termina. {{key:Space}} escreve aqui um espaço.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} coloca marcas numa linha, arco, círculo, polilinha, spline ou elipse, que a dividem em partes iguais. Indique o objeto e depois o número de partes (2 a 32767). Um objeto aberto recebe uma marca a menos do que partes; um fechado recebe também uma marca no seu início. O próprio objeto não é cortado. As marcas são pontos; `Bloco` pede em vez disso um bloco deste desenho, e se ele roda para seguir o objeto. Os comprimentos ao longo de splines e elipses são medidos por cordas curtas. Recusa texto, tramas e outros objetos sem comprimento.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} coloca uma marca a cada comprimento indicado ao longo de uma linha, arco, círculo, polilinha, spline ou elipse, contando a partir da extremidade mais próxima de onde indicou (um objeto fechado: a partir do seu início). Indique o comprimento escrevendo-o ou com dois pontos. A extremidade final de um objeto aberto não recebe marca. `Bloco` coloca um bloco em cada marca em vez de um ponto. Recusa um comprimento de 0, um maior do que o objeto, e um que resultasse em mais de 32767 marcas.

### BOUNDARY

Aliases: `BO`, `BPOLY`. {{cmd:BOUNDARY}} cria uma polilinha fechada em redor da área que contém o ponto indicado, a partir de tudo o que são linhas, arcos, círculos, polilinhas e curvas que a limitam no ecrã. Os troços sobre um arco ou círculo voltam como segmentos de arco; os troços de elipses e splines voltam como pequenos segmentos retos. Com `Ilhas` ativo (a definição inicial), cada área fechada no seu interior também recebe a sua polilinha. Continue a indicar pontos; Enter termina. Os objetos que limitam a área ficam como estão. Indica quando nenhuma área fechada contém o ponto.

### BLEND

{{cmd:BLEND}} desenha uma spline entre as extremidades de duas curvas abertas. Indique cada curva perto da extremidade a unir. `CONtinuidade` escolhe `Tangente` (a spline sai e chega ao longo das duas curvas) ou `Suave` (segue também a curvatura nas extremidades); a escolha fica guardada para a sessão. As duas curvas não são alteradas. Recusa objetos fechados e duas extremidades que já se tocam.

### REGION

Alias: `REG`. {{cmd:REGION}} transforma objetos fechados em regiões: áreas planas que pode unir, cortar e medir. Selecione círculos, polilinhas fechadas, elipses fechadas ou splines fechadas, ou linhas, arcos e polilinhas abertas que fechem um circuito de extremidade a extremidade; cada circuito torna-se uma região e substitui os objetos de que veio. Os arcos mantêm-se arcos; elipses e splines tornam-se pequenos segmentos retos. O que não está fechado nem fecha circuito fica como está, e indica quantos são. No desenho, uma região é uma ou mais polilinhas fechadas mantidas juntas como um grupo sem nome, por isso um clique seleciona a região inteira e uma cópia é uma região própria; os outros programas que abrem o ficheiro veem polilinhas fechadas.

Com regiões no desenho, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} no separador 2D trabalham sobre regiões: `UNION` une as regiões selecionadas numa só (regiões separadas tornam-se uma região com vários contornos), `SUBTRACT` pede as regiões de onde subtrair e depois as que se retiram (um furo mantém-se parte da região), `INTERSECT` mantém a área que todas partilham. Cada um indica a área do resultado e é um passo de anulação. Recusam-se quando não sobraria nada ou quando nada é partilhado. No separador 3D, e num desenho sem regiões, os mesmos comandos trabalham sobre sólidos como antes.

## Modificar

Aliases: `MT`, `T`; ou {{ui:Parágrafo}} na barra de ferramentas. Texto de parágrafo que quebra linha numa largura, escrito no próprio local.

- `Especifique o primeiro canto`
- `Especifique o canto oposto [Altura (H)/Justificar (J)/Espaçamento entre linhas (L)/Rotação (R)/Largura (W)]`: a largura entre os dois cantos é onde o texto quebra linha. `H` pede `Especifique a altura`, `J` `Introduza a justificação [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Introduza o fator de espaçamento entre linhas (0.25 a 4)`, `R` `Especifique o ângulo de rotação`, `W` `Especifique a largura (0 para não quebrar linha)` e salta o segundo canto.
- Depois abre-se uma caixa no desenho: escreva, {{key:Enter}} para um novo parágrafo, {{key:Mod+Enter}} ou um clique fora para terminar, {{key:Esc}} para cancelar. A sua barra define a altura, o espaçamento entre linhas, a largura e a justificação. Veja [Acrescentar texto e etiquetas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliases: `ED`, `DDEDIT`; ou faça duplo clique num texto. `Selecione um texto a editar`, repetido até Enter: cada um abre-se na mesma caixa. Iniciado sobre um texto selecionado ou com duplo clique, edita esse e termina.

### ERASE

Aliases: `E`, `DELETE`; ou prima {{key:Delete}} com objetos selecionados.

- `Selecione objetos` (ignorado quando já há objetos selecionados)

### MOVE

Aliases: `M`.

- `Selecione objetos`
- `Especifique o ponto base [Deslocamento (D)]`, `Especifique o segundo ponto`
- `D`: `Especifique o deslocamento`, escrito como `dx,dy`.

### COPY

Aliases: `CO`, `CP`. Copia tantas vezes quantos pontos der.

`Matriz (A)` no pedido do segundo ponto cria uma linha de uma vez: indique o número de itens (o original conta como um), depois o ponto onde fica a primeira cópia; as outras seguem com o mesmo espaçamento. `Ajustar (F)` faz desse ponto o lugar da última cópia, com as outras distribuídas uniformemente entre elas.

- `Selecione objetos`
- `Especifique o ponto base [Deslocamento (D)]`
- `Especifique o segundo ponto [Anular (U)]`, repetido até Enter. `U` anula a última cópia.

### ROTATE

Aliases: `RO`.

- `Selecione objetos`, `Especifique o ponto base`
- `Especifique o ângulo de rotação <último ângulo>`: graus, positivos no sentido contrário aos ponteiros do relógio; ou clique num ponto para rodar na sua direção.

### SCALE

Aliases: `SC`.

- `Selecione objetos`, `Especifique o ponto base`
- `Especifique o fator de escala`: escreva um fator como `0.5` ou `2`. Um ponto clicado dá a sua distância ao ponto base como fator.

### MIRROR

Aliases: `MI`.

- `Selecione objetos`
- `Especifique o primeiro ponto da linha de espelho`, `Especifique o segundo ponto da linha de espelho`
- `Apagar objetos de origem? [Sim (Y)/Não (N)] <N>`

### ALIGN

Aliases: `AL`; ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar}}.

- `Selecione objetos`
- `Especifique o primeiro ponto de origem`, `Especifique o primeiro ponto de destino`
- `Especifique o segundo ponto de origem (Enter para continuar)`, `Especifique o segundo ponto de destino`
- `Especifique o terceiro ponto de origem (Enter para continuar)`, `Especifique o terceiro ponto de destino`
- Com dois pares: `Dimensionar objetos com base nos pontos de alinhamento? [Sim (Y)/Não (N)] <N>`

Veja [Alinhar objetos](topic:modify-objects#align-objects).

### ALIGNTO

- `Selecione objetos` (ou a seleção), `Alinhar [Esquerda (L)/Centro/Direita (R)/Topo (T)/Meio (M)/Base (B)] <Esquerda>`, `Para [Seleção/Primeiro (F)/Último (L)/Ponto] <Seleção>`; `P` pede o ponto. A seleção mantém-se.

### DISTRIBUTE

- `Selecione objetos` (pelo menos três), `Distribuir [Horizontalmente/Verticalmente] <Horizontalmente>`, `Espaçar uniformemente [Centros/Intervalos (G)] <Intervalos>`. Os dois exteriores mantêm-se; a seleção mantém-se.

### ALIGNPANEL

Aliases: `ALP`; ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar e distribuir}}. Abre o painel que executa ALIGNTO e DISTRIBUTE com cliques.

### LASER

Aliases: `LASERCUT`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Laser…}}. Abre o painel Laser sobre o desenho: o que cada camada faz (cortar, marcar, gravar, preencher, imagem), a pré-visualização, o código G GRBL a guardar, e o enquadramento e o envio por Web Serial. Veja [Enviar um desenho para um laser](topic:laser-cutting).

### STRETCH

Aliases: `S`; ou {{ui:Esticar}}. `Selecione objetos a esticar`: arraste janelas de cruzamento (ou escreva `C`) sobre as extremidades a mover. `Especifique o ponto base [Deslocamento (D)]`, `Especifique o segundo ponto`. Os pontos dentro das janelas movem-se: extremidades de linhas, vértices de polilinhas (os segmentos de arco mantêm a sua altura), pontos de cota; círculos, elipses, textos, pontos e blocos movem-se inteiros quando o seu centro ou ponto de inserção está dentro. Uma seleção feita antes do comando mantém as janelas de cruzamento (e os laços) que a fizeram, por isso esticam da mesma forma. Sem janela, os objetos movem-se inteiros.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliases: `AR`; ou {{ui:Matriz}}. `Selecione objetos`, depois `Introduza o tipo de matriz [Retangular (R)/Polar (PO)] <Retangular>` (apenas ARRAY).

- Retangular começa com 4 colunas × 3 linhas, espaçadas 1.5 vezes o tamanho dos objetos, mostradas como pré-visualização. `Introduza uma opção [Quantidade (COU)/Espaçamento (S)/Colunas (COL)/Linhas (R)/Sair (X)] <X>`: `COU` pede colunas e linhas, `S` as distâncias entre colunas e entre linhas (negativo vai para a esquerda ou para baixo), `COL` e `R` uma direção cada.
- Polar pede `Especifique o ponto central da matriz`, começa com 6 itens à volta de tudo, rodados. `Introduza uma opção [Itens (I)/Preencher ângulo (F)/Rodar itens (ROT)/Sair (X)] <X>`: `I` itens, `F` o ângulo a preencher (+ sentido contrário aos ponteiros, − sentido dos ponteiros), `ROT` Sim ou Não.
- Enter (Sair) cria as cópias, como objetos simples. Um passo de anulação.
- `AS` (Associativa) alterna entre cópias simples e uma matriz que continua editável: um objeto que altera depois com {{cmd:ARRAYEDIT}}, pelos seus grips ou em Propriedades. A escolha fica memorizada ({{cmd:ARRAYASSOCIATIVITY}}); começa em cópias simples.

### ARRAYPATH

Cópias ao longo de uma curva. `Selecione objetos`, depois `Selecione a curva de trajeto`: uma linha, arco, círculo, elipse, polilinha ou spline (não um dos objetos a matrizar). O trajeto começa na extremidade mais próxima dos objetos, e o primeiro item são os objetos onde estão.

- `Introduza uma opção [Método (M)/Itens (I)/Espaçamento (SP)/Alinhar (AL)/Associativa (AS)/Sair (X)] <X>`, com pré-visualização. `M`: `Dividir` distribui os itens uniformemente por todo o trajeto, `Medir` coloca um a cada tanto ao longo dele. `I`: o número de itens (com Medir, 0 significa tantos quantos couberem; um número para lá do fim do trajeto é limitado ao que cabe). `SP`: a distância entre itens ao longo do trajeto (passa para Medir). `AL`: Sim roda cada item para seguir o trajeto, Não mantém-nos na vertical.
- `AS` como em {{cmd:ARRAY}}. Com ele ativo, a matriz guarda a sua própria cópia da forma do trajeto: editar depois a curva do trajeto não move os itens.
- Recusa um trajeto que não seja uma curva, e um só item.

### ARRAYEDIT

Altera uma matriz criada com ASsociativa. `Selecione a matriz` (ou selecione-a primeiro). Imprime como a matriz está agora, depois pergunta até {{key:Enter}}:

- Retangular: `COL` colunas e o seu espaçamento, `R` linhas e o seu espaçamento, `A` o ângulo em que as colunas correm.
- Polar: `I` itens, `F` o ângulo de preenchimento, `ROT` rodar itens Sim ou Não.
- Trajeto: `M` Dividir ou Medir, `I` itens, `SP` espaçamento, `AL` alinhar com o trajeto.
- `S` (Origem) abre os objetos que a matriz repete, por si, como o editor de blocos. Desenhe e edite aí; {{cmd:ARRAYCLOSE}} guarda ou descarta, e todos os itens seguem.
- `REP` (Substituir): `Selecione os objetos de substituição`, `Especifique o ponto base dos objetos de substituição`, depois clique nos itens a substituir, e Enter. Esses itens passam a mostrar a substituição; os objetos de substituição saem do desenho e ficam na matriz. `RES` (Repor) volta a mostrar os objetos de origem em todos os itens.
- Cada alteração é um passo de anulação. Recusa cópias simples, uma referência de bloco simples e uma matriz numa camada bloqueada.

Os mesmos números estão em Propriedades, em Matriz, e a matriz tem grips: o seu ponto base move-a, o grip no segundo item define o espaçamento, o grip depois do último item define a quantidade (polar: o segundo item define quantos itens, o último item o ângulo de preenchimento). {{cmd:EXPLODE}} transforma uma matriz de novo em cópias simples.

### ARRAYCLOSE

Termina {{cmd:ARRAYEDIT}} Origem: `Guardar as alterações aos objetos de origem da matriz? [Guardar (S)/Descartar] <Guardar>`. Indica quando nenhum objeto de origem de matriz está aberto. {{cmd:BCLOSE}} faz o mesmo.

### ARRAYASSOCIATIVITY

`Introduza o novo valor para ARRAYASSOCIATIVITY (1 = as matrizes continuam editáveis, 0 = cópias simples)`. Define com o que {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR e {{cmd:ARRAYPATH}} começam; a sua opção `AS` altera a mesma definição. Memorizado neste navegador.

### OFFSET

Aliases: `O`. Linhas, arcos, círculos e polilinhas.

Quando uma polilinha se afasta para fora e os seus segmentos retos se separam num canto, {{cmd:OFFSETGAPTYPE}} decide como se fecha o intervalo.

- `Especifique a distância de afastamento [Passante] <última distância, ou Passante>`
- `Selecione o objeto a afastar`, depois `Especifique o ponto do lado a afastar` (ou, com Passante, `Especifique o ponto de passagem`), repetido até Enter.

### OFFSETGAPTYPE

- `Intervalos de cantos de afastamento: 0 prolongar, 1 arredondar, 2 chanfrar`: como {{cmd:OFFSET}} fecha os intervalos nos cantos exteriores de uma polilinha. `0` prolonga os segmentos até se encontrarem (a definição inicial), `1` une-os com um arco em redor do canto antigo, `2` com um corte reto. Os cantos interiores e os segmentos de arco não são afetados. Mantém-se para esta sessão.

### EXTRIM

{{cmd:EXTRIM}} apara tudo de um lado de uma aresta. Indique a aresta de corte (uma linha, arco, círculo, polilinha, elipse, spline ou linha de construção), depois indique um ponto do lado a limpar: cada linha, arco, círculo, polilinha e linha de construção que cruze a aresta perde a sua parte desse lado, a partir da aresta. Enquanto escolhe o lado, as partes que seriam eliminadas seguem o ponteiro. Para uma aresta fechada, os lados são o interior e o exterior. Os objetos que apenas tocam a aresta, e textos, tramas, splines e elipses que a atravessam, ficam como estão. Um passo de anulação.

### TRIMEXTENDMODE

- `Introduza o novo valor para TRIMEXTENDMODE (1 Rápido, 0 Normal)`: como começam {{cmd:TRIM}} e {{cmd:EXTEND}}. `1` Rápido: cada objeto é uma aresta de corte ou um limite. `0` Normal: pedem primeiro as arestas. Também `(setvar "TRIMEXTENDMODE" 0)` em LISP.

### TRIM

Aliases: `TR`. Imprime primeiro `Definições atuais: modo Rápido (TRIMEXTENDMODE 1), arestas: sem prolongamento, arrastar desenha um percurso`. No modo Rápido cada objeto visível é uma aresta de corte, e um objeto que nada cruze é eliminado; no modo Normal pede primeiro `Selecione as arestas de corte (Enter = todos os objetos)` e corta só nelas.

- `Selecione o objeto a aparar ou Shift-selecione para prolongar [Arestas de corte (T)/Vedação (F)/Cruzamento (C)/Modo (O)/Aresta (E)/Apagar (R)/Anular (U)]`, repetido: clique na parte a remover (fica cinzenta e a tracejado enquanto o ponteiro repousa sobre ela), arraste um percurso sobre várias partes (todas vão num só passo), ou clique em dois sítios vazios para uma vedação entre eles. {{key:Shift}} prolonga em vez disso. `T` escolhe as arestas de corte (modo Normal), `F` pede pontos de vedação, `C` dois cantos de janela (as partes parcialmente dentro também vão), `O` pede `Introduza uma opção de modo de aparar [Rápido/Normal]`, `E` pede `Introduza um modo de extensão de aresta implícita [Prolongar/Sem prolongamento]` (EDGEMODE), `R` apaga os objetos que selecionar, `U` anula a última escolha ou arrasto. Enter termina. Veja [Aparar e prolongar](topic:trim-and-extend).

- Um clique numa trama corta a trama: as arestas de corte dividem a área com trama, e a parte em que clicou é retirada (não fica nenhum contorno desenhado onde estava). A trama mantém o seu padrão ou gradiente; uma trama que estava ligada ao seu contorno deixa de estar ligada, porque já não o preenche. Indica quando nenhuma aresta de corte divide a trama ali, quando o clique está fora da trama, e quando nada sobraria (use {{cmd:ERASE}}). Um percurso ou vedação arrastados não cortam tramas.

### EXTEND

Aliases: `EX`. O mesmo que TRIM ao contrário: `Selecione o objeto a prolongar ou Shift-selecione para aparar [Arestas limite (B)/Vedação (F)/Cruzamento (C)/Modo (O)/Aresta (E)/Anular (U)]`. Um clique alonga a extremidade mais próxima até ao limite seguinte; um percurso ou vedação arrastados alonga cada objeto que cruzam; {{key:Shift}} apara. `B` escolhe as arestas limite (modo Normal). Modo e Aresta são partilhados com TRIM.

### LINKVIEWS

Aliases: `SYNCVIEWS`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Ligar as vistas dos painéis}}, ou o ícone de ligação nos separadores do desenho. `Ligar as vistas dos painéis [ON/OFF]` (Enter muda para o outro estado): enquanto estiver ativo, um deslocamento ou zoom no painel ativo move todos os painéis que mostram o mesmo tipo de espaço. Veja [Dividir o ecrã](topic:split-screen).

### OPENIN3D

Sem aliases; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Abrir no ModelCraft}}, onde a aplicação de modelação 3D recebe um desenho entregue. Abre-o aí num novo separador, como DWG (nada é carregado). Se o navegador bloquear o separador, indica-o.

### LASSOMODE

`Introduza o novo valor para LASSOMODE (1 = laço, 0 = retângulo)`: o que desenha premir e arrastar num sítio vazio. O mesmo que Definições › CadCraft › Arrastar para selecionar. Veja [Seleção por laço](topic:lasso-selection).

### FILLET

Aliases: `F`. Linhas, arcos, círculos e polilinhas. Imprime primeiro `Definições atuais: Modo = TRIM, Raio = 0`.

- `Selecione o primeiro objeto [Anular (U)/Polilinha (P)/Raio (R)/Aparar (T)/Múltiplos (M)]`
  - `R` pede `Especifique o raio do arredondamento <último>`. `T` pede `Introduza uma opção de modo de aparar [Aparar/Sem aparar]`: com Sem aparar os objetos ficam como estão e só o arco é acrescentado.
  - `M` mantém o comando para mais cantos até {{key:Enter}}; `U` anula o último canto sem sair do comando.
  - `P` pede `Selecione a polilinha 2D [Raio]` e arredonda cada canto onde dois segmentos retos se encontram. Os arredondamentos que já tem são substituídos pelo novo raio; raio 0 retira-os. Os cantos cujos lados são curtos demais para o raio ficam como estão e são contados.
- `Selecione o segundo objeto ou Shift-selecione para aplicar ao canto [Raio]`. Mantenha {{key:Shift}} ao clicar para um canto vivo, qualquer que seja o raio.

Clique em cada objeto na parte que quer manter. Duas linhas que não se encontram são prolongadas. Duas linhas paralelas recebem um meio círculo a atravessar o intervalo, na extremidade da primeira linha mais próxima do seu clique. Um círculo nunca é cortado. Dois segmentos de uma mesma polilinha vizinhos recebem o arco dentro da polilinha; uma polilinha e outro objeto funcionam quando o corte cai sobre o primeiro ou o último segmento da polilinha.

### CHAMFER

Aliases: `CHA`. Linhas e os segmentos retos de polilinhas. Imprime primeiro as distâncias atuais (ou comprimento e ângulo).

- `Selecione a primeira linha [Anular (U)/Polilinha (P)/Distância (D)/Ângulo (A)/Aparar (T)/Método (E)/Múltiplos (M)]`
  - `D` pede `Especifique a primeira distância de chanfro <última>` e `Especifique a segunda distância de chanfro <a primeira>`: a primeira é cortada na primeira linha que indicar, a segunda na outra.
  - `A` pede `Especifique o comprimento do chanfro na primeira linha` e `Especifique o ângulo do chanfro a partir da primeira linha`.
  - `E` (Método) escolhe qual das duas o chanfro seguinte usa. `T`, `M`, `U` e `P` funcionam como em {{cmd:FILLET}}.
- `Selecione a segunda linha ou Shift-selecione para aplicar ao canto [Distância/Ângulo/Método (E)]`. Shift+clique faz um canto vivo.

Uma distância maior do que a linha é recusada (`Distance is too large.`).

### BREAK e BREAKATPOINT

Aliases: `BR`. `Selecione o objeto` (onde clica é o primeiro ponto), `Especifique o segundo ponto de quebra [Primeiro ponto (F)]`; `F` pede `Especifique o primeiro ponto de quebra` e `Especifique o segundo ponto de quebra`. A parte entre eles desaparece; num círculo, no sentido contrário aos ponteiros do relógio a partir do primeiro ponto. BREAKATPOINT pede `Especifique o ponto de quebra` e divide o objeto em dois aí (não um círculo).

### LENGTHEN

Aliases: `LEN`. `Selecione um objeto a medir [Delta (DE)/Percentagem (P)/Total (T)/Dinâmico (DY)]`: um clique imprime `Comprimento atual` (e o ângulo incluído de um arco) e pergunta de novo. `DE` pede `Introduza o comprimento delta (negativo encurta) [Ângulo]`, `P` `Introduza o comprimento em percentagem`, `T` `Especifique o comprimento total [Ângulo]`, `DY` arrasta. Depois `Selecione o objeto a alterar [Anular (U)]`, repetido: move-se a extremidade mais próxima do clique. Linhas, arcos e polilinhas abertas.

### JOIN

Aliases: `J`. `Selecione os objetos a unir`. Linhas, arcos e polilinhas abertas que se encontram extremidade a extremidade tornam-se polilinhas (fechadas quando a cadeia fecha); linhas na mesma reta tornam-se uma linha; arcos de um mesmo círculo tornam-se um arco ou o círculo. O histórico diz quantos objetos foram unidos e quantos não.

### MATCHPROP

Aliases: `MA`, `PAINTER`. `Selecione o objeto de origem`, depois `Selecione os objetos de destino [Definições]` e {{key:Enter}}. Copia a camada e a cor, e entre objetos do mesmo tipo a altura e largura do texto, os tamanhos de cota, ou o padrão da trama. `S` pede `Ative ou desative uma propriedade [Cor/Camada (LA)/Texto/Cota/Trama]`, repetido até Enter; a escolha fica memorizada para a sessão.

### EXPLODE

Aliases: `X`. Polilinhas tornam-se linhas e arcos, referências de blocos tornam-se os seus objetos, cotas tornam-se linhas, setas e textos. Uma matriz que continua editável ({{cmd:ARRAYEDIT}}) torna-se cópias simples dos seus objetos.

- `Selecione objetos`

### GROUP

Alias: `G`. {{cmd:GROUP}} dá aos objetos selecionados um nome comum. Selecione os objetos e depois escreva um nome (sem espaços; `?` lista os grupos; Enter cria um grupo sem nome) e, para um grupo com nome, uma descrição opcional. A partir daí, um clique em qualquer um deles, ou uma janela que apanhe um, seleciona todos, por isso movem-se, copiam-se e apagam-se em conjunto; cada objeto continua a ser um objeto próprio. Um objeto pode estar em vários grupos. A cópia de um grupo inteiro é um novo grupo sem nome; a cópia de um membro isolado junta-se ao grupo. Os grupos pertencem ao espaço em que foram criados (o modelo ou uma folha). São mantidos ao guardar como DWG ou DXF e ao abrir de novo o ficheiro no CadCraft; os ficheiros DXF 2000 levam-nos também como objetos de grupo para outros programas, e os grupos criados noutro programa são lidos quando um DXF ou DWG é aberto.

### UNGROUP

{{cmd:UNGROUP}} desfaz grupos: selecione objetos dos grupos (cada grupo a que pertencem é desfeito) ou escreva `Name` e o nome do grupo. Os objetos mantêm-se no desenho. Um passo de anulação traz os grupos de volta.

### GROUPEDIT

{{cmd:GROUPEDIT}} altera um grupo. Indique um dos seus objetos, ou `Name` e o seu nome; um grupo já selecionado é aceite como está. Depois: `Adicionar` objetos (indicados um a um, não grupo a grupo), `Remover` objetos, `REName` (mudar o nome) ao grupo, alterar a sua `Descrição`, ou definir `Selectable` (se um clique num objeto seleciona o grupo inteiro). `eXit` ou Enter termina. Um grupo sem objetos deixa de existir.

### PICKSTYLE

- `Seleção de grupo: 0 um clique seleciona um objeto, 1 o grupo inteiro`: com `1` (a definição inicial) um clique ou uma janela num objeto agrupado seleciona o grupo inteiro; com `0` objetos isolados, para poder editar um membro. Mantém-se para esta sessão.

## Área de transferência

A área de transferência do próprio CadCraft: funciona dentro de um desenho, entre desenhos e entre separadores do CadCraft neste navegador. Veja [Copiar, colar e duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ou {{ui:Copiar}} no grupo {{ui:Editar}}. Copia objetos para a área de transferência, com os blocos e camadas que usam. Os objetos ficam selecionados.

- `Selecione os objetos a copiar` (ignorado quando já há objetos selecionados)

### CUTCLIP

{{key:Mod+X}}, ou {{ui:Cortar}} no menu {{ui:Mais}}. Copia objetos para a área de transferência e depois apaga-os (um passo de anulação).

- `Selecione os objetos a cortar` (ignorado quando já há objetos selecionados)

### COPYBASE

Copia objetos para a área de transferência com um ponto base que indicar; colar coloca esse ponto.

- `Especifique o ponto base`
- `Selecione os objetos a copiar`

### PASTECLIP

{{key:Mod+V}}, ou {{ui:Colar}} no grupo {{ui:Editar}}. A cópia segue o cursor, pendurada do canto inferior esquerdo da sua extensão (ou do seu centro, ou do ponto de `COPYBASE`; veja [Definições do CadCraft](topic:settings)).

- `Especifique o ponto de inserção`

Os objetos colados ficam selecionados. Um bloco que o desenho já tenha com o mesmo nome mantém a definição deste desenho.

Quando uma área copiada no MarkupCraft é mais recente do que o que o CadCraft copiou (e tem menos de 6 horas), {{key:Mod+V}} e `PASTECLIP` colam essa área em vez disso: veja `PASTEAREA`.

### PASTEAREA

Aliases: `PAREA`. {{ui:Colar uma área copiada}} no menu {{ui:Mais}}. Cola uma área copiada com {{ui:Copiar área}} no MarkupCraft como imagem à sua escala real. Veja [Imagens num desenho](topic:pictures).

- `Especifique o canto inferior esquerdo da área copiada`
- `Escala a sua dimensão no papel por (100 para uma folha 1:100; Pontos: dois pontos nela e a sua distância real) [Pontos] <1>` (apenas quando a folha não tinha escala de desenho): um número, {{key:Enter}} para a dimensão no papel, ou `P`, depois `Primeiro ponto na área colada`, `Segundo ponto na área colada` e a sua distância real.

### PASTEORIG

{{key:Mod+Shift+V}}, ou {{ui:Colar no mesmo sítio}} no menu {{ui:Mais}}. Cola nas coordenadas de onde os objetos foram copiados. Não pergunta nada.

### DUPLICATE

Aliases: `DUP`. {{key:Mod+D}}, ou {{ui:Duplicar e mover}} no menu {{ui:Mais}}. Uma cópia dos objetos move-se com o ponteiro a partir de onde está; {{key:Esc}} não deixa nada. Não usa a área de transferência.

- `Selecione os objetos a duplicar` (ignorado quando já há objetos selecionados)
- `Especifique onde fica a cópia (Esc não deixa nada)`: clique, escreva um ponto, `@dx,dy` (a partir de onde estava o ponteiro), ou uma distância em direção ao cursor.

### SELECT

Pede `Selecione objetos` (com todas as opções abaixo) e deixa selecionado o que escolheu, para o comando seguinte ou para `P` mais tarde.

### QSELECT

Aliases: `QS`. No navegador, a caixa de diálogo {{ui:Seleção rápida}} (veja [Selecionar objetos](topic:select-objects#select-by-a-rule-quick-select)). Sem ela, a linha de comandos pede `Introduza o tipo de objeto`, `Introduza a propriedade`, `Introduza o operador [=/<>/>/</*/Selecionar tudo] <=>` e `Introduza o valor`. Os resultados tornam-se a seleção.

### SELECTSIMILAR

Aliases: `SIM`. `Selecione objetos [Definições (SE)]` (ou a seleção atual): seleciona cada objeto do mesmo tipo com a mesma camada e cor (e o mesmo nome de bloco, padrão de trama). `SE` pede `Ative ou desative uma propriedade [Camada (LA)/Cor (CO)/Nome (N)/Padrão (PA)/Altura (HE)]`, repetido até {{key:Enter}}.

### FIND

Sem aliases; ou {{ui:Editar}} › {{ui:Mais}} › {{ui:Localizar e substituir}}. No navegador, a caixa de diálogo {{ui:Localizar e substituir}} (veja [Acrescentar texto e etiquetas](topic:text#find-and-replace-words)). Sem ela: `Introduza o texto a localizar`, depois `Introduza o texto de substituição (Enter: selecionar o que é encontrado)`. Procura em textos, valores de atributos e textos de cota, no separador aberto ou na seleção.

### SELECTALL e DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) seleciona todos os objetos que pode editar no separador aberto. `DESELECT` (aliases `AI_DESELECT`, `SELECTNONE`; ou {{key:Esc}}) limpa a seleção.

## Cotas

### DIMLINEAR

Aliases: `DLI`, `DIMLIN`. Distância horizontal ou vertical.

- `Especifique a origem da primeira linha de extensão [Selecionar objeto (S)]` (Enter ou `S`: `Selecione o objeto a cotar`, depois clique numa linha, arco, círculo ou segmento de polilinha)
- `Especifique a origem da segunda linha de extensão`
- `Especifique a localização da linha de cota [Texto (T)/Horizontal (H)/Vertical (V)/Rodada (R)]`. `T` pede o texto (`<>` é o valor medido), `H` e `V` fixam a direção, `R` pede `Especifique o ângulo da linha de cota <0>`.

### DIMALIGNED

Aliases: `DAL`, `DIMALI`. A distância real entre dois pontos.

- Origens como em {{cmd:DIMLINEAR}}, depois `Especifique a localização da linha de cota [Texto (T)]`.

### DIMANGULAR

Aliases: `DAN`, `DIMANG`.

- `Selecione um arco, círculo ou linha, ou Enter para um vértice`
- Arco: o seu ângulo. Círculo: `Especifique o segundo ponto final do ângulo`. Linha: `Selecione a segunda linha`. Enter: `Especifique o vértice do ângulo`, `Especifique o primeiro ponto final do ângulo`, `Especifique o segundo ponto final do ângulo`.
- `Especifique a localização da linha de cota [Texto (T)]`: clique dentro do ângulo a medir.

### DIMRADIUS e DIMDIAMETER

Aliases: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Selecione um arco ou círculo`, depois `Especifique a localização da linha de cota [Texto (T)]`.

### DIMCONTINUE

Aliases: `DCO`, `DIMCONT`. Continua a partir da última cota linear ou alinhada feita (ou pede `Selecione uma cota linear ou alinhada`).

- `Especifique a origem da segunda linha de extensão [Anular (U)]`, repetido até Enter.

### DIMBASELINE

Aliases: `DBA`, `DIMBASE`. Como {{cmd:DIMCONTINUE}}, mas cada cota parte da primeira origem e fica empilhada mais para fora.

### DIMORDINATE

Aliases: `DOR`, `DIMORD`. `Especifique a localização do elemento`, depois `Especifique o ponto final da chamada [Datum X (X)/Datum Y (Y)/Texto (T)]`. Escreve a distância do elemento à origem do UCS segundo X ou segundo Y, numa linha de chamada: uma chamada que sobe ou desce sobretudo lê-se em X, uma que vai de lado lê-se em Y; `Datum X` e `Datum Y` fixam qual. Defina primeiro a origem com {{cmd:UCS}} (sem uma, é o 0,0 do desenho). Os grips movem o elemento, a origem e a extremidade da chamada, e o valor segue. Guardado como cota de ordenada real em DWG e DXF. Recusa uma extremidade da chamada sobre o próprio elemento.

### DIMARC

Aliases: `DAR`. `Selecione um arco ou segmento de arco de polilinha`, depois `Especifique a localização da cota de comprimento de arco [Texto (T)]`. Mede ao longo do arco (não da corda) e escreve o símbolo de arco antes do valor. Recusa um círculo completo, uma linha ou um segmento reto de polilinha. Um DWG mantém-na como cota de comprimento de arco; um DXF mantém-na como cota angular com o comprimento como texto, e o CadCraft volta a abri-la como cota de comprimento de arco.

### DIMJOGGED

Aliases: `DJO`, `JOG`. `Selecione um arco ou círculo`, `Especifique a substituição da localização do centro`, `Especifique a localização da quebra`. Uma cota de raio para uma curva cujo centro está longe ou fora da folha: a linha de cota começa no ponto que indica em vez do centro, com uma quebra, e continua a escrever o raio verdadeiro. Um DWG mantém-na como cota de raio com quebra; um DXF mantém-na como cota de raio, e o CadCraft volta a abri-la com quebra.

### DIMJOGLINE

Aliases: `DJL`. `Selecione a cota a acrescentar quebra [Remover]`, depois `Especifique a localização da quebra (ou prima Enter)`. Coloca um símbolo de quebra na linha de uma cota linear ou alinhada, para mostrar que a distância não está desenhada à escala; o valor não muda. `Remover` tira-o. Recusa outros tipos de cota.

### QDIM

Sem aliases. `Selecione a geometria a cotar`, depois `Especifique a posição da linha de cota [Contínua/Escalonada/De base (B)/Ordenada (O)/Raio/Diâmetro/datumPoint]`. Cota vários objetos num só passo, a partir das extremidades de linhas e segmentos de polilinha, centros de círculos e arcos, pontos e referências de blocos. Uma posição acima ou abaixo dos objetos mede na horizontal, uma ao lado deles mede na vertical. `Contínua` encadeia os pontos, `De base` mede todos a partir do primeiro, `Escalonada` aninha pares a partir do meio para fora, `Ordenada` dá a cada ponto a sua distância ao datum (`datumPoint` escolhe um novo), `Raio` e `Diâmetro` cotam cada círculo e arco indicado. O modo fica memorizado. Tudo o que cria é um passo de anulação. Indica quando há menos de dois pontos, ou nenhum arco ou círculo para Raio e Diâmetro.

### DIMBREAK

Aliases: `DBREAK`. `Selecione as cotas a acrescentar ou remover interrupções`, depois `Interromper onde outros objetos cruzam [Automático (A)/Manual (M)/Remover (R)] <Automático>`. `Automático` deixa uma falha nas linhas de cota e de extensão onde quer que outro objeto as cruze, e recalcula essas falhas quando esses objetos ou a cota se movem. `Manual` (uma cota) pede dois pontos e deixa uma falha entre eles. `Remover` tira todas as falhas. A falha é 1.5 vezes a altura do texto da cota.

### DIMSPACE

Sem aliases. `Selecione a cota de base`, `Selecione as cotas a espaçar`, `Introduza o valor de espaçamento ou Automático <Automático>`. Move as linhas de cota de cotas lineares e alinhadas paralelas (ou angulares sobre o mesmo vértice) para ficarem à mesma distância umas das outras, contadas a partir da cota de base, cada uma do lado em que está. `0` alinha-as com a base; `Automático` é o dobro da altura do texto da cota de base. As cotas que não são paralelas à base ficam como estão.

### DIMINSPECT

Sem aliases. `Selecione as cotas`, `Forma do quadro de inspeção [Redondo/Angular/Nenhum/remover] <Redondo>`, `Introduza a etiqueta`, `Introduza a taxa de inspeção <100%>`. Desenha um quadro em redor do valor, com uma etiqueta antes dele e a taxa de inspeção depois. `remover` tira o quadro. O texto de tolerância fica com o valor.

### DIMOVERRIDE

Aliases: `DOV`, `DIMOVER`. `Introduza o nome da variável de cota a substituir ou Limpar`, `Introduza o novo valor para …`, de novo até Enter, depois `Selecione as cotas`. Altera essas definições apenas nas cotas selecionadas; o estilo da cota não muda. Aceita as variáveis que são um número ou um interruptor (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Limpar` repõe as cotas selecionadas no seu estilo. Recusa um nome que não seja uma destas variáveis e um valor que não aceite.

### DIMREASSOCIATE

Aliases: `DRE`, `DIMREASSOC`. `Selecione as cotas`, depois, para cada uma, as origens das suas linhas de extensão (`Especifique a primeira origem da linha de extensão num objeto`: encaixe numa extremidade ou no meio de uma linha, num canto de polilinha, num centro; Enter deixa esse ponto livre), ou, para uma cota de raio, diâmetro, raio com quebra ou comprimento de arco, `Selecione um arco ou círculo`. A cota fica então ligada a esses objetos: quando se movem ou mudam de tamanho, segue-os no mesmo passo de anulação e volta a medir. Mover à mão um ponto ligado, ou apagar o objeto, desfaz essa ligação. A ligação é guardada em DWG e DXF 2000 como dados próprios do CadCraft; os outros programas veem uma cota comum.

### DIMDISASSOCIATE

Aliases: `DDA`, `DIMDISASSOC`. `Selecione as cotas`. Liberta-as dos objetos a que estão ligadas; nada se move.

### CENTERMARK

Aliases: `CM`, `DIMCENTER`, `DCE`. `Selecione um círculo ou arco para acrescentar marca de centro`, de novo até Enter. Desenha uma cruz no centro e quatro linhas de centro até um pouco para lá da curva (tipo de linha CENTER), como linhas simples na camada atual; dimensionadas pelo tamanho da seta e pela escala global das definições de cota atuais, e rodadas com o UCS. Não seguem o círculo se este se mover.

### CENTERLINE

Aliases: `CL`. `Selecione a primeira linha`, `Selecione a segunda linha`. Desenha uma linha a meio caminho entre duas linhas (ao longo da bissetriz quando se encontram), um pouco mais comprida do que elas, no tipo de linha CENTER. É uma linha simples: não segue as duas linhas.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sem aliases. Cada um pergunta `Introduza o novo valor para … <atual>` e define esse tamanho para as **novas** cotas: escala global, altura do texto, tamanho da seta, casas decimais (até 8), espaço em redor do texto, extensão para além da linha de cota, afastamento da origem. Veja [Definir tamanhos de cota](topic:dimension-settings).

### DIMLUNIT

Definição de cota: o formato apenas das novas cotas (1 científico, 2 decimal, 3 engenharia, 4 arquitetónico, 5 fracionário).

### DIMSTYLE e -DIMSTYLE

Aliases: `DST`, `DDIM`, `D`. O gestor de estilos de cota: {{ui:Tornar atual}}, {{ui:Novo…}}, {{ui:Modificar…}}, {{ui:Mudar o nome…}}, {{ui:Eliminar}}, {{ui:Comparar…}}, {{ui:Aplicar à seleção}}. `-DIMSTYLE` na linha de comandos: `Estilo de cota [Repor/Guardar/Eliminar/Aplicar/Comparar/reName/Listar]`. Veja [Definir tamanhos de cota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT e DIMTEDIT

`DIMEDIT` (`DED`): `Editar cota [Início (H)/Novo (N)/Rodar (R)/Oblíqua] <Início>`, depois as cotas (ou as já selecionadas). Novo pede o texto (`<>` = a medição); Rodar pede um ângulo (0 repõe o texto); Oblíqua o ângulo das linhas de extensão a partir do eixo X (Enter = nenhum; apenas cotas lineares e alinhadas). `DIMTEDIT` (`DIMTED`): `Texto da cota [Esquerda (L)/Direita (R)/Centro/Início (H)/Ângulo (A)] <Centro>`. Veja [Definir tamanhos de cota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliases: `DTU`. `Unidades no texto das novas cotas [Unidades do desenho/mm/cm/m/km]`, ou, com cotas selecionadas, `Unidades no texto das cotas selecionadas`. Escreve o comprimento medido nessa unidade, com a unidade a seguir (DIMLFAC e um sufixo DIMPOST); `D` volta às unidades do desenho. Veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliases: `RC`. Imprime `Comprimento do arco: … Tipo: …`, depois `Especifique o primeiro ponto [Comprimento do arco/Objeto/Retangular/Poligonal/Mão livre]`. Retangular pede `Especifique o canto oposto`; Poligonal `Especifique o ponto seguinte (Enter fecha a nuvem) [Anular (U)]`; Mão livre segue o ponteiro até um clique ou {{key:Enter}}; `O` pede `Selecione o objeto` e `Inverter a direção? [Sim (Y)/Não (N)] <N>` e transforma o objeto na nuvem. `A` pede `Especifique o comprimento de cada arco`. `R`, `P` e `F` escolhem o tipo da próxima nuvem. O resultado é uma polilinha fechada de arcos.

### MLEADER

Aliases: `MLD`; ou {{ui:Chamada}}. `Especifique a localização da seta da linha de chamada [Tamanho da seta/Distância de aterragem/Bloco]`, `Especifique a localização de aterragem da linha de chamada`, depois o texto na caixa no local (ou, sem ela, `Introduza o texto (uma linha vazia termina)`). `Bloco` pede primeiro um nome de bloco e a chamada múltipla mostra esse bloco em vez de texto. Mais linhas de chamada: {{cmd:MLEADEREDIT}}. Guardado como chamada múltipla real em DWG; o DXF mantém as linhas, a seta e o texto que desenha.

### MLEADEREDIT

Aliases: `MLE`. `Selecione uma chamada múltipla`, depois `Especifique a localização da seta da linha de chamada [Remover linhas/Conteúdo do bloco/Conteúdo do texto]`: cada ponto acrescenta uma linha de chamada desde uma nova seta até à mesma aterragem, até Enter. `Remover linhas` retira depois a linha de chamada em que clicar (uma chamada múltipla mantém pelo menos uma). `Conteúdo do bloco` pede um nome de bloco e mostra esse bloco em vez do texto (os seus atributos são pedidos); `Conteúdo do texto` repõe o texto. Cada linha de chamada tem o seu próprio grip. Um DWG mantém todas as linhas de chamada e o bloco numa só chamada múltipla.

### MLEADERALIGN

Aliases: `MLA`. `Selecione chamadas múltiplas`, depois `Selecione a chamada múltipla de alinhamento [Distribuir/Espaçamento/Usar o espaçamento atual]` e `Especifique a direção`. Move as aterragens (e o seu texto ou bloco) das outras chamadas múltiplas para a linha que passa pela aterragem da escolhida, nessa direção; as setas mantêm-se onde apontam. `Espaçamento` define também uma distância igual entre elas; `Distribuir` pede dois pontos e espalha-as uniformemente entre eles. Precisa de pelo menos duas chamadas múltiplas.

### MLEADERCOLLECT

Aliases: `MLC`. `Selecione chamadas múltiplas`, depois `Especifique a localização da chamada múltipla reunida [Vertical/Horizontal]` (Enter mantém o lugar da primeira). Faz uma só chamada múltipla a partir de várias: o conteúdo de bloco vai para um novo bloco que contém todos lado a lado ou um por baixo do outro; o conteúdo de texto torna-se uma nota com uma linha para cada. A primeira chamada múltipla mantém as suas linhas de chamada; as outras são removidas. Recusa uma mistura de conteúdo de texto e de bloco.

### TABLE

Aliases: `TB`; ou {{ui:Anotar}} › {{ui:Mais}} › {{ui:Tabela}}. Cria uma tabela: um objeto que move, copia, roda, escala e imprime como qualquer outro, com as suas células guardadas como dados.

- `Número de linhas de dados ou [Colar (P)/Ficheiro (F)/Estilo (S)] <3>`, depois `Número de colunas <3>`, `Altura do texto` e `Canto superior esquerdo da tabela`. A tabela recebe uma linha de título (uma célula fundida) e uma linha de cabeçalho acima das linhas de dados.
- `P`: uma tabela a partir de células de folha de cálculo da área de transferência (texto com um tabulador entre células). Premir {{key:Ctrl+V}} com essas células na área de transferência faz o mesmo, a não ser que a cópia do próprio CadCraft seja a mais recente (ou que o CadCraft não consiga distinguir: então cola a sua própria cópia e diz isso). `F`: uma tabela a partir de um ficheiro `.csv` ou separado por tabulações. A primeira linha torna-se a linha de cabeçalho; as larguras das colunas ajustam-se ao texto.
- `S`: escolhe o estilo de tabela desta tabela (veja {{cmd:TABLESTYLE}}).
- Recusa um número de linhas ou colunas que não seja inteiro, e mais células do que uma tabela suporta (2.000 linhas, 200 colunas, 40.000 células).
- {{cmd:EXPLODE}} transforma uma tabela em linhas e texto. Guardada como DWG, uma tabela é um objeto de tabela real que outros programas podem editar; guardada como DXF é um bloco que a desenha, e o CadCraft volta a abri-la como tabela.

### TABLEDIT

Aliases: `TABLEEDIT`, `TABEDIT`; ou faça duplo clique numa célula. Edita uma tabela.

- `Indique uma célula para escrever (Enter para terminar) ou [Linha/Coluna/Tamanho/Fundir/Desfundir/Alinhar/Altura/Tipo/Limpar]`. Clique numa célula, ou, com uma tabela selecionada, escreva o seu nome (`B3`: coluna B, linha 3; a linha de título é a linha 1). No navegador abre-se uma caixa sobre a célula: {{key:Enter}} mantém o texto, {{key:Tab}} passa para a célula seguinte, {{key:Alt+Enter}} inicia uma nova linha, {{key:Esc}} deixa a célula como estava.
- Um texto que começa com `=` é uma fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, com `+ - * / ^`, parênteses e funções como `sqrt` e `round`. A célula mostra o valor; uma fórmula que nomeia a sua própria célula, uma célula fora da tabela ou uma célula sem número mostra `####`, e a linha de comandos diz porquê.
- `R` / `C`: `Inserir` ou `Eliminar` linhas ou colunas numa célula indicada (quantas, e acima ou abaixo, à esquerda ou à direita). As fórmulas seguem as células que nomeiam.
- `S`: a largura da coluna e a altura da linha. Uma linha nunca é mais baixa do que o seu texto precisa. Uma tabela selecionada tem também um grip em cada borda de coluna e de linha.
- `M`: fundir desde uma célula indicada até outra; `U`: desfundir. `A`: alinhamento (`TL` topo esquerda … `MC` meio centro … `BR` base direita). `H`: a altura do texto desta célula (0 = a do estilo). `K`: transforma a linha em título, cabeçalho ou linha de dados. `CL`: esvazia a célula.
- Recusa uma tabela numa camada bloqueada, eliminar todas as linhas ou colunas, e uma fusão que partisse outra célula fundida em duas.

### TABLESTYLE

Aliases: `TS`. Lista os estilos de tabela com quantas tabelas usam cada um, depois `Estilo de tabela: [Novo/Definir/Editar/Eliminar/Aplicar]`.

- Um estilo guarda a altura e o alinhamento do texto das linhas de título, cabeçalho e dados, a margem da célula, e que contornos são desenhados (exterior, entre linhas, entre colunas).
- `N` cria um estilo a partir do atual e torna-o atual; `S` define o estilo atual (as novas tabelas o recebem); `E` edita um: as tabelas que o usam são redesenhadas; `A` dá às tabelas selecionadas o estilo atual; `D` elimina um (não o Normal, nem o atual; as tabelas que o usavam mantêm o seu aspeto).
- Os estilos são guardados com o desenho (DWG e DXF).

### TABLEEXPORT

Guarda o que uma tabela mostra como ficheiro CSV (uma fórmula pelo seu valor). `Selecione uma tabela`, ou selecione-a primeiro. As células de texto que começam por `=`, `+`, `-` ou `@` recebem um `'` inicial para que a folha de cálculo não as execute.

### TABLEPASTE

Aliases: `PASTETABLE`. Cria uma tabela a partir de células de folha de cálculo da área de transferência, depois pede o canto superior esquerdo. Igual a {{cmd:TABLE}} › `Colar`.

### DATALINK

Aliases: `DL`. `Ligação de dados: [Novo/Listar/Remover] <Novo>`. `N` pede um ficheiro CSV, coloca uma tabela dele e memoriza o nome do ficheiro; `L` lista as ligações com o seu ficheiro, tamanho, quando foi lido e quantas tabelas o usam; `R` remove uma ligação (as suas tabelas ficam como tabelas simples).

### DATALINKUPDATE

Aliases: `DLU`. Lê de novo o ficheiro de uma ligação de dados e volta a preencher as tabelas ligadas a ele (linhas e colunas são acrescentadas ou removidas para corresponder). Um navegador não consegue abrir um ficheiro por si, por isso pede que escolha o ficheiro de novo. Com várias ligações pergunta qual.

### FIELD

Coloca um campo no desenho: texto que se calcula sozinho. `Campo: [Data/Nome do ficheiro/Folha/Propriedade/Objeto/Expressão/Código] <Data>`:

- `D`: agora, ou a data guardada, criada ou impressa, e um formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: o nome do ficheiro, com ou sem a sua extensão. `S`: o número da folha, o seu título, ou quantas folhas existem. `P`: uma propriedade do desenho pelo nome (veja {{cmd:DWGPROPS}}). `O`: indique um objeto, depois o que ler (área, comprimento, perímetro, raio, diâmetro, camada, nome, x, y, texto, rotação, cor) e as casas decimais. `E`: uma fórmula. `C`: um texto com códigos escritos tal como são, como `Folha %<sheetnumber>% de %<sheetcount>%`.
- Depois `Selecione um texto, uma célula de tabela ou um bloco com atributos onde o pôr (Enter: um novo texto)`: um texto indicado recebe o campo acrescentado ao que tem; uma célula de tabela igualmente; uma referência de bloco pede qual atributo; {{key:Enter}} pede uma altura e um ponto para um novo texto.
- No ecrã um campo tem um fundo cinzento claro; uma impressão ou um PDF nunca o têm. Escrever à mão sobre o texto de um campo termina o campo. Um campo que não consegue calcular mostra `####`.
- O campo de um objeto encontra o seu objeto pela chave que o CadCraft guarda nos objetos (Definições › CadCraft › Ficheiros compatíveis com fusão); com as chaves desligadas, recusa.

### UPDATEFIELD

Aliases: `UPDATEFIELDS`. `Selecione os objetos cujos campos atualizar (Enter: todos os campos) ou [Definições]`. `S` define quando os campos se atualizam sozinhos: escreva as letras de `O` abrir, `S` guardar, `P` imprimir, `R` regenerar (todas as quatro para começar), ou `NONE` (nenhum).

### DWGPROPS

Aliases: `DRAWINGPROPS`. Lista as propriedades do desenho, depois `Alterar: [Título/Assunto/Autor/Empresa/Palavras-chave/Comentários (M)/Personalizado (U)/Remover/Sair]`. As seis primeiras são as que mostra o painel {{ui:Detalhes do desenho}}; `U` acrescenta o seu próprio nome e valor, `R` remove um. Os campos lêem-nas (`%<prop:title>%`, `%<prop:Client>%`) e seguem de imediato. Recusa um nome personalizado que seja um dos incorporados ou que contenha `%`, `<`, `>`, aspas ou uma barra invertida.

## Paramétrico

Veja [Restringir um desenho](topic:constraints) e [Usar parâmetros e equações](topic:parameters). As restrições funcionam no separador {{ui:Modelo}}.

### GEOMCONSTRAINT e os comandos GC

Alias `GCON`: `Introduza o tipo de restrição [Horizontal/Vertical/Perpendicular/Paralela (AR)/Tangente/Coincidente/Concêntrica (CON)/Colinear (COL)/Simétrica/Igual/Fixar] <Horizontal>`, depois os pedidos desse comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Selecione um objeto [2 pontos] <2 pontos>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Selecione o primeiro objeto`, `Selecione o segundo objeto` (o segundo move-se).
- {{cmd:GCCOINCIDENT}}: `Selecione o primeiro ponto [Objeto/Restrição automática] <Objeto>`, `Selecione o segundo ponto [Objeto] <Objeto>`.
- {{cmd:GCFIX}}: `Selecione o ponto [Objeto] <Objeto>`.
- {{cmd:GCSYMMETRIC}}: `Selecione o primeiro objeto [2 pontos] <2 pontos>`, `Selecione o segundo objeto`, `Selecione a linha de simetria`.

### DIMCONSTRAINT e os comandos DC

Alias `DCON`: `Selecione a cota associativa a converter [Linear/Horizontal/Vertical/Alinhada/Angular/Radial/Diâmetro/Converter] <Alinhada>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Especifique o primeiro ponto de restrição [Objeto] <Objeto>`, `Especifique o segundo ponto de restrição`, `Especifique a localização da linha de cota`, `Texto da cota <d1=40>` (um número, uma expressão, ou `nome=expressão`).
- {{cmd:DCALIGNED}}: como acima, com `[Objeto/Ponto e linha/2 linhas]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Selecione um arco ou círculo`. {{cmd:DCANGULAR}}: `Selecione a primeira linha ou arco`, `Selecione a segunda linha`.
- {{cmd:DCCONVERT}}: `Selecione as cotas a converter`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Selecione objetos [Definições]`. `S` pede as tolerâncias de distância e de ângulo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Selecione objetos`; as suas restrições são removidas.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Selecione objetos [Mostrar tudo/Ocultar tudo]`, depois `[Mostrar/Ocultar]`.
- {{cmd:DCDISPLAY}}: `Introduza uma opção [Mostrar/Ocultar]`.

### PARAMETERS e -PARAMETERS

{{cmd:PARAMETERS}} (aliases `PAR`, `PARAM`) abre o painel {{ui:Parâmetros}}. `-PARAMETERS`: `Introduza uma opção [Novo/Editar/Mudar o nome/Eliminar/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Transfere uma macro (.swb) que reconstrói o modelo como um só esboço restringido no SolidWorks. Veja [Mover esboços de e para outros modeladores de peças](topic:solidworks-sketches).

## Blocos

### ANNOSCALE

Aliases: `CANNOSCALE`. Diz a escala de anotação do desenho e quantos objetos anotativos contém, depois pede `Nova escala de anotação`: escreva `1:50`, `1:100`, `2:1`, um número simples (`50` é 1:50) ou o nome de uma das escalas próprias do desenho. Cada texto e cota anotativos são redimensionados para imprimirem com o mesmo tamanho na nova escala, num só passo de anulação; os objetos que não são anotativos ficam como estão, e também um objeto que mantém uma lista de escalas sem a nova (veja {{cmd:OBJECTSCALE}}). Veja [Unidades, formatos e escalas](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliases: `OBJSCALE`. `Selecione objetos anotativos`, depois `Escalas de anotação dos objetos selecionados [Adicionar (A)/Eliminar (E)/Escala atual (C)/Listar (L)/Sair (X)] <Adicionar>`. Um texto ou cota anotativos mantém uma lista de escalas de anotação. `Adicionar` e `Eliminar` pedem uma escala (`1:50`, `2:1`, um número simples, ou o nome de uma das escalas próprias do desenho); `Escala atual` acrescenta a escala de anotação do desenho; `Listar` imprime as escalas de cada objeto. Uma viewport cuja escala esteja na lista de um objeto mostra o objeto com o tamanho que imprime a altura do seu papel nessa escala, no ecrã e nas impressões. A última escala não pode ser eliminada. Os objetos que não são anotativos ficam de fora: ative Anotativo em Propriedades primeiro. As listas são guardadas em DWG e DXF como dados próprios do CadCraft. Veja [Unidades, formatos e escalas](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliases: `ANNOALL`. `Mostrar objetos anotativos em todas as escalas [ON/OFF]`. Ligado (como um desenho começa): um objeto anotativo também aparece numa viewport, ou no modelo, cuja escala não esteja na sua lista, com o tamanho que tem. Desligado: não aparece aí, e não pode ser indicado no modelo. O interruptor é um passo de anulação; não fica guardado no ficheiro.

### SCALELISTEDIT

Aliases: `SCALELIST`. `Lista de escalas [Adicionar/Editar/Eliminar/Listar/Repor]` até {{key:Enter}}. Adicionar: `Nome da escala`, `Unidades do papel`, `Unidades do desenho`. Editar e Eliminar pedem o nome da escala. As escalas próprias do desenho entram nas listas de escalas da viewport e de impressão, e são guardadas com o desenho. Veja [Unidades, formatos e escalas](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT e PEDIT

`SPLINE` (`SPL`): `Primeiro ponto da spline [Método/Objeto] (Pontos de ajuste)`. Ajuste: pontos por onde a curva passa; `Fechar`, `Anular`, depois `Tangente inicial` e `Tangente final` (um ponto, ou {{key:Enter}}). Método › Vértices de controlo pede um grau (1 a 5) e desenha a partir de um polígono de controlo. Objeto transforma polilinhas em splines que passam pelos seus vértices. `SPLINEDIT` (`SPE`): `[Dados de ajuste/Editar vértice/converter em Polilinha/Abrir ou Fechar/Inverter/Anular/Sair]`; Dados de ajuste `[Adicionar/Eliminar/Mover/Limpar/Tangentes/Sair]`; Editar vértice `[Adicionar ponto de controlo/Mover/Peso/Sair]`. `PEDIT` (`PE`): `[Fechar/Abrir/Unir/Largura/Ajustar/Spline/Desfazer curva/Gerar tipo de linha/Inverter/Anular/Sair]`, `M` para vários objetos; linhas, arcos e splines são oferecidos primeiro como polilinhas. Veja [Splines e polilinhas](topic:splines).

### BLOCK

Aliases: `B`, `BMAKE`.

- `Introduza o nome do bloco`. Se existir: `O bloco «…» já existe. Redefinir? [Sim (Y)/Não (N)] <N>`.
- `Especifique o ponto base de inserção`
- `Selecione objetos`. São substituídos por uma só referência ao novo bloco.

### WBLOCK

Aliases: `W`, `-WBLOCK`. Escreve um bloco, alguns objetos ou o desenho inteiro como novo ficheiro DWG ou DXF. `Origem do WBLOCK [Bloco/Desenho inteiro/Objetos] <Objetos>`:

- **Objetos**: `Especifique o ponto base de inserção` (torna-se a origem do novo desenho), `Selecione objetos`, depois `Formato do ficheiro [DWG/DXF/DXF R12]` e `Nome do ficheiro do novo desenho`, depois `O que fazer com os objetos [Manter/Converter em bloco/Eliminar]`. Converter substitui-os por uma referência a um bloco com o nome do ficheiro; Eliminar remove-os.
- **Bloco**: `Bloco a escrever`. Os objetos próprios do bloco, com o seu ponto base como origem, incluindo blocos encaixados.
- **Desenho inteiro**: todos os objetos do espaço modelo. As folhas não são escritas; use {{cmd:SAVEAS}} para uma cópia que as mantenha.

O novo ficheiro leva apenas as camadas, tipos de linha, estilos de texto e de cota e blocos que os seus objetos usam, e as unidades do desenho. A versão de um DWG é a que {{cmd:SAVEAS}} usou por último. No navegador o ficheiro é transferido; no Studio abre-se a caixa de guardar.

### ATTDEF

Aliases: `ATT`, `DDATTDEF`, `-ATTDEF`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Definir atributo}}. Imprime os modos, depois `Introduza uma opção a alterar (Enter quando terminar) [Invisível/Constante/Predefinido]`, `Introduza o nome da etiqueta do atributo`, `Introduza o pedido do atributo`, `Introduza o valor predefinido do atributo` (`Introduza o valor do atributo` quando constante), `Especifique o ponto inicial do texto`, `Especifique a altura do texto`, `Especifique o ângulo de rotação do texto`. {{cmd:BLOCK}} leva as definições de atributos para o bloco.

### EATTEDIT e ATTEDIT

`EATTEDIT` (`DDATTE`, ou faça duplo clique numa referência com atributos; {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar atributos}}): `Selecione uma referência de bloco com atributos`, depois a caixa de diálogo {{ui:Editar atributos}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): a mesma referência, depois `<pedido> (<TAG>) <valor>` para cada atributo; {{key:Enter}} mantém um valor. Veja [Atributos](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Atualizar os atributos das referências de qual bloco [Nome/Selecionar/Todos] <Selecionar>`. Os valores são mantidos; os novos atributos recebem o seu predefinido, os removidos saem, as posições são repostas.

### BATTMAN

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Gestor de atributos}}. A caixa de diálogo: bloco, atributos (etiqueta, pedido, predefinido, modos, ordem), {{ui:Atualizar as referências (valores mantidos)}}, {{ui:Aplicar}}.

### REFEDIT e REFCLOSE

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar no local}}. `REFEDIT`: `Selecione a referência de bloco a editar no local` (ou a seleção). `REFCLOSE`: `Guardar as alterações a «…» [Guardar/Descartar] <Guardar>`; {{ui:Guardar o bloco}} e {{ui:Descartar}} na barra fazem o mesmo. Toda a edição é um passo de anulação. Veja [Atributos](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT e BCLOSE

`BE`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar bloco}}. `Introduza o nome do bloco a editar <o bloco da referência selecionada>` abre o editor de blocos. `BCLOSE` pergunta `Fechar o editor de blocos em «…» [Guardar/Descartar] <Guardar>`; {{ui:Guardar bloco}} e {{ui:Descartar alterações}} na faixa fazem o mesmo. Tudo o que se faz no editor é um passo de anulação.

### VIEWBASE

Alias: `FLATSHOT`. Uma vista 2D plana dos sólidos no separador 3D: `Vista [Frente/Topo/Direita/Esquerda/Trás (BA)/Base (BO)/Isométrica (I)]`, `Linhas ocultas [Mostrar/Ocultar]`, uma escala (`1:20`, `2:1`; {{key:Enter}} escolhe a que cabe na folha), depois o centro da vista. Uma referência de bloco, com as arestas visíveis em VIEW-VISIBLE e as ocultas a tracejado em VIEW-HIDDEN. Veja [Vistas planas numa folha](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliases: `-PUBLISH`; ou {{ui:Todas as folhas num único PDF}} na caixa de diálogo {{ui:Imprimir para PDF}}. `Folhas a imprimir [Todas/Algumas]`: {{key:Enter}} imprime cada folha, `S` pede nomes separados por vírgulas. Um só PDF, com uma página e um marcador por folha. Veja [Todas as folhas num só PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliases: `SSM`, `SHEETSETMANAGER`. Leva-o à secção {{ui:Conjunto de folhas}} do painel da esquerda: folhas de vários desenhos, numeradas e tituladas, as suas legendas preenchidas a partir do conjunto, publicadas num só PDF. Veja [Conjuntos de folhas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): escolha um DWG ou DXF, depois o seu ponto de inserção. {{cmd:XREF}} (`XR`, `-XREF`): `Desenhos ligados [?/Anexar (A)/Recarregar (R)/Vincular (B)/Desanexar (D)] (Enter: ?)`; com mais de uma ligação, indique uma das suas referências ou escreva `N` e o seu nome. Veja [Desenhos ligados](topic:files#linked-drawings-external-references).

### COUNT

Aliases: `BCOUNT`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Contar blocos}}. `Selecione uma referência de bloco a contar, ou [Todos/Exportar] (Enter: Todos)`: uma indicação seleciona e conta todas as referências desse bloco neste espaço; {{key:Enter}} ou `A` lista-as todas; `E` depois `C` (contagens) ou `A` (atributos) transfere um CSV. Veja [Contar blocos e exportar uma tabela](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliases: `I`, `DDINSERT`.

- `Introduza o nome do bloco ou [Ficheiro (F)/Biblioteca (L)] <último bloco>` (as maiúsculas não contam). `F` pede um DWG ou DXF, depois o desenho inteiro ou um dos seus blocos; um nome já usado pede {{ui:Manter os existentes}} ou {{ui:Mudar o nome}}. `L` abre o painel da biblioteca.
- `Especifique o ponto de inserção [Escala (S)/Rodar (R)]`. `S` pede `Especifique o fator de escala`, `R` pede `Especifique o ângulo de rotação`; ambos ficam memorizados.
- Quando o bloco já está ao lado de objetos que se repetem noutros sítios sem ele, uma linha diz quantos sítios são sugeridos, e o pedido ganha `suGgested`: `G` mostra-os; clique perto de um para lá colocar o bloco, `A` para todos, {{key:Enter}} para voltar atrás. Tomam a rotação dos vizinhos e os valores predefinidos dos atributos. Desenhos com mais de 20.000 objetos no espaço aberto não são pesquisados.
- Depois `Introduza <pedido> (<TAG>) <predefinido>` para cada atributo que o bloco pede. Veja [Atributos de bloco](topic:attributes).

### LIBRARY

Aliases: `LIB`. Abre o painel da biblioteca: coloca itens, verifica atualizações, créditos da biblioteca. Sem perguntas. Veja [Inserir a partir de um ficheiro ou da biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Aliases: `SMEMBER`; ou {{ui:Barra 3D}} no separador {{ui:Normal}} da biblioteca. `Dimensão do perfil <W12x26>` (como o separador a lista), depois `Ponto inicial [Pilar (C)]` e `Ponto final`: uma barra sólida no separador 3D entre os dois pontos, assente no chão. `C` pede o ponto base do pilar e a sua altura. Um passo de anulação. Veja [Colocar perfis de aço e peças normalizadas](topic:steel-and-standard-parts).

### PARTSLIST

Aliases: `PLIST`. `Canto superior esquerdo da lista de peças`, depois `Altura do texto <2.5>`: desenha uma tabela de todas as peças normalizadas e perfis de aço colocados a partir da biblioteca (números de item, quantidade, peça, norma, dimensão, comprimento, material, massa). Um passo de anulação. Veja [Colocar perfis de aço e peças normalizadas](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliases: `PU`. Remove definições de blocos que nada usa. Sem perguntas.

### DELBLOCKS

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Eliminar blocos}}. `Selecione o bloco a eliminar [Nome/Sair]`: indique uma referência de bloco, ou `N` para a lista de blocos com um filtro (escolha vários), ou `X` / {{key:Enter}} para terminar. Cada referência desaparece — no modelo, em todas as folhas e dentro de outros blocos — e depois a definição, e a linha de comandos diz o que foi eliminado e o que não pôde ser. Blocos sem nome e desenhos ligados não são oferecidos. O pedido volta para o bloco seguinte; o comando inteiro é um passo de anulação.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} cola o que copiou ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) como um só bloco: indique o ponto de inserção e aí fica uma referência a um novo bloco, selecionada. O bloco recebe um nome próprio (`A$C` e um número); {{cmd:RENAME}} dá-lhe o seu. Um passo de anulação remove a referência e o bloco.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pede o bloco a substituir e o bloco que o substitui (`?` lista os blocos), depois altera cada referência no modelo, em todas as folhas e dentro de outros blocos. Cada referência mantém o seu lugar, escala, rotação, camada e os valores dos atributos que ambos os blocos têm; os atributos que só o novo bloco tem começam nos seus predefinidos, e indica quais os valores descartados. Quando já nada usa o bloco antigo, oferece-se para o remover. Recusa desenhos ligados e uma substituição que colocaria um bloco dentro de si próprio. Um passo de anulação.

### MINSERT

{{cmd:MINSERT}} coloca um bloco em linhas e colunas: nome do bloco, ponto de inserção, escala, rotação, número de linhas e colunas, e as distâncias entre elas. O conjunto inteiro roda com a rotação. Cada um é a sua própria referência (no máximo 10.000), por isso qualquer um pode ser movido ou apagado depois.

### BLOCKSPALETTE

Aliases: `BLOCKSPAL`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Painel de blocos}}. Mostra o painel {{ui:Blocos}} com o cursor no filtro. Cada bloco tem uma pequena imagem; os colocados mais recentemente vêm primeiro. Os dois botões ao lado do filtro alternam entre lista e grelha de imagens. Clique numa imagem (ou em {{ui:Inserir}}) para colocar o bloco com {{cmd:INSERT}}, ou arraste-o para o desenho para o colocar onde o largar.

{{ui:Bibliotecas}}, sob a lista: {{ui:Adicionar um desenho}} aceita um ficheiro DWG ou DXF seu e lista os seus blocos com imagens, e o desenho inteiro como um bloco. Colocar um deles copia a sua definição (e os blocos que encaixa, e as suas camadas) para este desenho, como faz a opção `Ficheiro` de {{cmd:INSERT}}; um bloco que já existe aqui com a mesma definição é usado sem perguntas, um com o mesmo nome mas diferente pede {{ui:Manter os existentes}} ou {{ui:Mudar o nome}}. Num navegador o ficheiro fica até a página fechar. No CadCraft Studio {{ui:Adicionar uma pasta}} lista os desenhos de uma pasta, cada um aberto quando clica nele, e os ficheiros e pastas ficam memorizados. O pequeno x remove uma biblioteca da lista; o ficheiro não é tocado. A {{ui:Biblioteca}} partilhada é outra coisa: veja [Inserir a partir de um ficheiro ou da biblioteca](topic:insert-from-file-and-library).

### BCONVERT

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Converter repetições em blocos}}. Encontra geometria que se repete e transforma cada cópia numa referência a um só bloco.

- `Selecione os objetos que se repetem, ou [Bloco]`: os objetos de uma cópia. `B` indica um bloco existente, para encontrar cópias soltas dos seus objetos.
- `Uma cópia pode ser: espelhada = Não, escalada = Não; camada, cor, tipo de linha e espessura = Corresponder … [Espelhada (M)/Escalada (S)/Propriedades (P)]`: `M`, `S` e `P` alternam o que conta como cópia; {{key:Enter}} pesquisa. As definições ficam memorizadas.
- `Nome do novo bloco <Bloco1>`, depois `Especifique o ponto base do bloco` ({{key:Enter}} toma o canto inferior esquerdo da seleção).
- Indica quantos outros conjuntos de objetos têm a mesma geometria, realça tudo o que substituiria, e pergunta `Sim/Não`.

Uma cópia são os mesmos objetos movidos e rodados por qualquer ângulo (e espelhados ou escalados por um fator, quando estão ativos): cada objeto deve ter o seu correspondente, com uma tolerância de um milionésimo da dimensão da seleção. Cada referência recebe a sua própria rotação e escala (uma espelhada uma escala Y negativa), e a camada que os seus objetos partilhavam. Objetos em camadas bloqueadas ficam como estão e são contados. Pesquisa o espaço aberto (o modelo ou a folha aberta). Uma pesquisa muito grande pára num limite de trabalho e indica-o. Um passo de anulação.

### BSEARCH

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Localizar blocos}}. `Localizar blocos por [Nome/Atributo/Geometria] <Nome>`:

- `N`: parte do nome de um bloco, ou um padrão com `*` e `?`. Lista cada bloco com as suas referências aqui e em todo o desenho.
- `A`: um valor de atributo, ou `TAG=valor`. Lista os blocos cujas referências o têm, com os valores encontrados. Os atributos constantes contam.
- `G`: selecione objetos, ou uma referência de bloco, e são listados, do mais semelhante para o menos, os blocos cuja forma seja pelo menos 85% semelhante. Tamanho, rotação e espelhamento não contam. A medida compara as distâncias entre pontos espalhados pelos contornos, por isso encontra parecidos; use {{cmd:BCONVERT}} para encontrar cópias exatas.

As referências encontradas no espaço aberto ficam selecionadas, prontas para o comando seguinte.

### BREPLACE

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Substituir blocos}}. `Substituir [Selecionados/Todos]`: `S` substitui as referências de blocos que selecionar pelo bloco que indicar; `A` pede um bloco e o seu substituto e altera cada referência, como faz {{cmd:BLOCKREPLACE}} (é o mesmo código). Uma referência mantém o seu lugar, escala, rotação, camada e os valores dos atributos que ambos os blocos têm; os valores para os quais o novo bloco não tem lugar são descartados e indicados. `?` lista os blocos. Um passo de anulação.

### DATAEXTRACTION

Aliases: `EATTEXT`, `DX`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Extração de dados}}. Lista blocos, os seus atributos e as propriedades dos objetos como tabela ou ficheiro CSV.

- Trabalha sobre a seleção, ou pede `Selecione objetos (Enter: tudo neste espaço)`.
- `Listar: [Blocos/Objetos/Todos]` quando a seleção tem ambos. Blocos sem nome, tabelas e listas de materiais nunca são listados.
- Imprime as colunas a escolher (nome, tipo, camada, X, Y, rotação, escala, comprimento, área, cor, tipo de linha, espaço, e uma por etiqueta de atributo), depois `Colunas, por nome ou número separados por vírgulas`. {{key:Enter}} escolhe as marcadas com asterisco: o nome e todos os atributos para blocos; tipo, camada e comprimento para objetos.
- `Juntar linhas idênticas com uma contagem? [Sim (Y)/Não (N)] <Sim>`, depois `Colocar a lista em: [Tabela/Csv] <Tabela>`. Uma tabela é uma tabela comum ({{cmd:TABLEDIT}} edita-a) e não é dinâmica: volte a executar o comando depois de o desenho mudar.
- Recusa uma coluna que não esteja na lista. Uma tabela suporta 1.999 linhas de dados; um ficheiro CSV leva todas.

### COUNTTABLE

Conta as referências de blocos da seleção (ou do espaço aberto) e coloca as contagens numa tabela (`Bloco`, `Contagem`) ou num ficheiro CSV. Para uma contagem que segue o desenho sozinha veja {{cmd:BOMTABLE}}.

## Folhas e impressão

### LAYOUT

Aliases: `LO`, `NEWLAYOUT`; ou o botão {{ui:+}} sob o desenho. Uma nova folha com moldura, legenda e uma viewport, em ISO A3 (ou Tabloid para desenhos em polegadas ou pés). Sem perguntas.

### MVIEW

Aliases: `MV`. Só numa folha ({{cmd:VPORTS}} numa folha faz o mesmo).

- `Especifique o canto da viewport [Poligonal (P)/Objeto (O)]`, `Especifique o canto oposto`. A viewport mostra o modelo inteiro numa escala padrão.
- `P` (Poligonal): clique nos cantos do contorno (`Anular (U)`, `Fechar (C)`), {{key:Enter}} quando terminar. Recusa menos de três cantos.
- `O` (Objeto): `Selecione um objeto fechado para o contorno da viewport`: uma polilinha fechada, um círculo ou uma elipse na folha. A viewport toma a sua forma (as curvas como pequenos segmentos retos); o objeto mantém-se como estava. Recusa um objeto que não esteja fechado.

### VPCLIP

Recorta uma viewport que já está na folha. `Selecione a viewport a recortar` (ou selecione-a primeiro), depois `Selecione o objeto para recortar [Poligonal/Eliminar]`:

- Clique numa polilinha fechada, círculo ou elipse, ou {{key:Enter}} (ou `P`) para clicar nos cantos de um polígono.
- `D` (Eliminar, oferecido quando a viewport está recortada) torna-a de novo um retângulo: a caixa em redor do contorno que tinha.
- O que a viewport mostra não se move no papel, e a sua escala mantém-se. O modelo é desenhado e impresso apenas dentro do contorno, e a moldura segue-o. Um passo de anulação.
- Uma viewport recortada tem um grip em cada canto do seu contorno, além do centro e dos quatro cantos da sua caixa (arrastar um canto da caixa estica o contorno com ele). Propriedades mostra Contorno: Retângulo, ou Recortado com o número de cantos.
- Os ficheiros DWG e DXF 2000 guardam o contorno para o CadCraft. Os outros programas abrem a viewport como o retângulo à sua volta; DXF R12 guarda apenas o retângulo.
- No separador do modelo indica que as viewports estão nas folhas.

### VPORTS

Aliases: `VIEWPORTS`. {{cmd:SPLIT}} é o mesmo também a partir de uma folha, e {{ui:Vista}} › {{ui:Mais}} › {{ui:Dividir lado a lado}}, {{ui:Dividir na vertical, um sobre o outro}}, {{ui:Quatro painéis}}, {{ui:Um painel}} executam-no. No modelo: `Introduza o número de painéis [SIngle/2/3/4] <3>`; `2` pede `[Horizontal/Vertical] <Vertical>` (Vertical = lado a lado), `3` pede `[Esquerda/Direita] <Direita>` (onde fica o painel grande). Cada painel mantém a sua própria vista e espaço; um clique torna um painel ativo. Numa folha é {{cmd:MVIEW}}. Veja [Dividir o ecrã](topic:split-screen).

### VPVIEW

Sem aliases. Só numa folha.

- `Selecione a viewport` (ignorado se já houver uma selecionada), depois no modelo: `Especifique o primeiro canto da janela a mostrar`, `Especifique o canto oposto`.

### UCS

Sem aliases. Um sistema de coordenadas próprio; não é uma edição. `Especifique a origem do UCS [Nomeado (NA)/Objeto (OB)/Anterior (P)/Mundo (W)/Z/3 pontos] <Mundo>`: um ponto é uma nova origem, depois `Especifique o ponto no eixo X (Enter mantém o ângulo)`. `Z`: `Especifique o ângulo de rotação em torno do eixo Z <90>`. `3`: origem, um ponto no eixo X positivo, um ponto no lado Y positivo. `OB`: `Selecione o objeto para alinhar o UCS`. `NA`: `[Repor/Guardar/Eliminar/?]` e um nome. A vista roda para que o novo eixo X fique nivelado. Veja [Rodar a vista e usar as suas próprias coordenadas](topic:ucs-and-turned-view).

### PLAN

Sem aliases. `Introduza uma opção [UCS atual/Ucs/Mundo] <UCS atual>`: roda a vista do painel ativo para que o eixo X do UCS (ou o do mundo) fique nivelado. Nada no desenho se move.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sem aliases; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Rodar a vista 90° para a esquerda}}, {{ui:Rodar a vista 90° para a direita}}, {{ui:Voltar ao global}}. O mesmo que `UCS Z -90`, `UCS Z 90` e `UCS W`, com a vista a acompanhar.

### VPLAYER

Sem aliases. Numa folha, ou dentro de uma viewport. `Introduza uma opção [?/Congelar/Descongelar/Repor/Vpvisdflt]`: `F`, `T`, `R` pedem nomes de camadas (separados por vírgulas, com os curingas `*` e `?`), depois as viewports `[Todas/Selecionar/Atual] <Atual>`; Repor devolve cada camada ao seu predefinido de "congelada nas novas viewports"; `V` define esse predefinido (`[Congelada/Descongelada]`), que {{cmd:MVIEW}} usa. `?` lista as camadas congeladas na viewport atual. A coluna de viewport do painel Camadas faz o mesmo para uma só viewport. Veja [Congelar uma camada numa viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliases: `MS`; ou faça duplo clique dentro de uma viewport. Só numa folha. Trabalha no modelo através de uma viewport: a selecionada, a única da folha, ou `Clique dentro da viewport para trabalhar nela`. Deslocar e aplicar zoom lá dentro altera a vista da viewport (uma bloqueada na visualização mantém-na e a folha é que se move); a nova vista fica como um passo de anulação. Veja [Trabalhar no modelo através de uma viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliases: `PS`; ou faça duplo clique fora da viewport, ou clique num separador sob o desenho. Regressa à folha.

### PLOT

Aliases: `PRINT`, `PUBLISH`, `EXPORTPDF`; ou {{key:Mod+P}}. Abre a caixa de diálogo {{ui:Imprimir para PDF}}. Veja [Imprimir para PDF](topic:plot-pdf).

### PLOTSTYLES

Aliases: `STYLESMANAGER`, `PSTABLES`; ou {{ui:Editar tabelas…}} na caixa de diálogo {{ui:Imprimir para PDF}}. Abre {{ui:Tabelas de estilos de impressão}}: como cada cor imprime (cor, cinzento, tinta, espessura de linha), guardado com o desenho. Veja [Tabelas de estilos de impressão](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} move objetos entre uma folha e o modelo através de uma viewport, escalados e rodados para parecerem iguais do outro lado. Numa folha, selecione objetos e eles passam para o modelo (indique a viewport quando a folha tem mais de uma). Enquanto trabalha no modelo através de uma viewport ({{cmd:MSPACE}}), os objetos selecionados passam para a folha. Indica quantas vezes ficaram maiores ou mais pequenos. As viewports ficam na sua folha. Um passo de anulação.

### ISODRAFT

{{cmd:ISODRAFT}} ativa ou desativa o desenho isométrico `ON` ou `OFF`, ou vai diretamente para o plano `Left` (Esquerdo), `Top` (Superior) ou `Right` (Direito). Enquanto estiver ativo: o Orto ({{key:F8}}) mantém as linhas nos dois eixos do plano (esquerdo: 90° e 150°; superior: 30° e 150°; direito: 30° e 90°), o rastreio polar ({{key:F10}}) segue os mesmos eixos, o snap à grelha ({{key:F9}}) usa a grelha isométrica, e a grelha ({{key:F7}}) é desenhada com linhas a 30°, 90° e 150°. {{cmd:ELLIPSE}} ganha `Isocírculo`: dê um centro e um raio (ou `Diâmetro`) e desenha a elipse que um círculo mostra no plano atual. O desenho mantém-se plano: são ajudas para desenhar uma vista pictórica, não um modelo 3D. A definição é para esta sessão e não fica guardada no ficheiro.

### ISOPLANE

{{cmd:ISOPLANE}} escolhe o plano em que o desenho isométrico trabalha: `Left` (Esquerdo), `Top` (Superior) ou `Right` (Direito). Enter passa para o plano seguinte. Enquanto o desenho isométrico estiver ativo, {{key:F5}} faz o mesmo a meio de um comando; enquanto estiver desligado, {{key:F5}} fica para o navegador.

## Consulta

### CAL

Imprime o valor de um cálculo, tal como seria lido em qualquer sítio onde se escreva um comprimento.

- `Expressão`: escreva-a, por exemplo `12'6"+3/4"` ou `(24'-0")/3`, e prima {{key:Enter}}. O CadCraft imprime `= 12'-6 3/4"   (150.75 unidades do desenho)`. Veja [Aritmética num valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliases: `DI`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Medir distância}}.

- `Especifique o primeiro ponto`, `Especifique o segundo ponto`. Imprime distância, ângulo, Delta X e Delta Y.

### AREA

Aliases: `AA`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Área}}. Imprime a área e o perímetro.

- `Especifique o primeiro ponto de canto [Objeto (O)/Acrescentar área (A)/Subtrair área (S)] <Objeto>`
  - Clique ou escreva cantos; em `Especifique o ponto seguinte (Enter fecha) [Anular (U)]`, prima {{key:Enter}} para fechar o contorno. `U` anula o último canto.
  - {{key:Enter}} ou `O`, depois `Selecione o objeto`: um círculo (imprime a sua circunferência), uma elipse, uma polilinha (uma aberta é fechada por uma linha reta para a área, e o seu comprimento é impresso) ou uma trama (os furos são retirados).
  - `A` (Acrescentar área) e `S` (Subtrair área) mantêm um total acumulado: o pedido começa com `(modo ADD)` ou `(modo SUBTRACT)`, cada área é somada ou retirada, e `Área total = …` é impresso depois de cada uma. Nestes modos `O` escolhe objetos até {{key:Enter}}, e {{key:Enter}} no primeiro pedido termina o comando.

### MEASUREGEOM

Aliases: `MEA`. `Introduza uma opção [Distância/Raio/Ângulo/Área] <Distância>`; depois de cada medição pergunta de novo, com `eXit` (Sair) como predefinição.

`Rápido` mede à volta do ponteiro enquanto o move: a distância ao objeto mais próximo à direita, acima, à esquerda e abaixo (segundo os eixos do UCS atual), desenhada à medida que avança, e o ângulo onde dois desses vizinhos são retos e se encontram. Um clique escreve no histórico as quatro distâncias, a largura e altura livres e os ângulos; Enter volta às opções. Lê o que está no ecrã.

- `D`: dois pontos, como {{cmd:DIST}}.
- `R`: `Selecione um arco ou círculo`; imprime o raio e o diâmetro.
- `A`: um arco (o seu ângulo incluído), uma linha e depois uma segunda linha (o ângulo entre elas, para o lado das suas extremidades distantes), ou {{key:Enter}} e três pontos (vértice, depois as duas extremidades).
- `AR`: como {{cmd:AREA}}, uma área.

### ID

Sem aliases. `Especifique o ponto`; imprime o seu X e Y.

### LIST

Aliases: `LI`, `LS`. `Selecione objetos`; imprime o tipo, a camada e as principais medidas de cada objeto.

### MASSPROP

{{cmd:MASSPROP}} dá as propriedades de secção das regiões e dos objetos fechados que selecionar, tomados em conjunto: área, perímetro, caixa envolvente, centroide, momentos de inércia em torno dos eixos X e Y que passam pela origem, o produto de inércia, raios de giração, os mesmos momentos em torno do centroide, e os momentos principais com as direções dos seus eixos. Os furos numa região contam como furos. Os valores estão nas unidades do desenho e são exatos para contornos feitos de linhas e arcos; elipses e splines são medidos como pequenos segmentos retos, e isso é indicado. Depois do relatório pergunta se o escreve num ficheiro de texto. Objetos que não estão fechados ficam de fora, e indica quantos são.

## Vista, ficheiro e outros

### ZOOM

Aliases: `Z`.

- `Especifique o canto da janela, introduza um fator de escala (nX) [Extensões (E)/Tudo (A)/Janela (W)/Anterior (P)/Escala (S)/Centro (C)]`. Clique em dois cantos para uma janela. `E`, `A` ou Enter: o desenho inteiro.
- `P` (Anterior, ou {{ui:Anterior}} na barra de ferramentas) regressa à vista anterior, até 10 vistas por separador; uma série de passos da roda ou um deslocamento contam como uma vista.
- Um número como `2`, `2x` ou `0.5x` (ou `S` e depois o número) aproxima ou afasta por esse fator em redor do meio do ecrã.
- `C` pede `Especifique o ponto central` e `Introduza a altura ou ampliação (nX)`.

### PDFATTACH, PDFIMPORT e os comandos PDF

Aliases: `PDFATT` para {{cmd:PDFATTACH}}, `PDFIM` para {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} coloca uma página PDF sob o desenho (ficheiro, página, ponto de inserção, escala, rotação); {{cmd:PDFIMPORT}} transforma as linhas, curvas, preenchimentos e textos de uma página em objetos do desenho, em camadas com o nome do PDF, à escala real, numa escala escrita, ou escalados a partir de dois pontos e uma distância real. {{cmd:PDFCLIP}} recorta uma sobreposição, {{cmd:PDFADJUST}} define o esbatimento, o contraste, o monocromático ou desativa-a, {{cmd:PDFLAYERS}} liga e desliga as camadas do próprio PDF, e {{cmd:PDF}} volta a dar ao CadCraft os ficheiros que as sobreposições de um desenho usam. Veja [Sobreposições PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autocompletar do desenho: sem comando em execução, um fantasma cinzento mostra o que os padrões do próprio desenho indicam como seguinte. {{cmd:AUTOCOMPLETE}} ativa-o `On` ou `Off` (também em Definições › CadCraft) ou `Show` mostra o que sugeriria agora. **Tab** desenha o fantasma como um passo de anulação, **Esc** dispensa-o até o desenho mudar. Encontra três coisas nos objetos mais recentes: a próxima cópia de algo desenhado duas vezes ou mais a um passo igual (montantes, pilares, espelho e pisador de uma escada), os próximos degraus de uma escada em polilinha, e o lado em falta de uma divisão ou de uma cadeia de paredes. A meio de {{cmd:LINE}} ou {{cmd:PLINE}} o fantasma é o **próximo ponto**: o próximo degrau de uma escada (espelho, pisador, espelho…), o quarto canto de um retângulo, o ponto que o fecha, ou mais um passo igual. Aproxime o cursor dele e prima **Tab**, como se tivesse clicado aí; continue ou prima Enter. Calculado neste computador por regras, sem modelo.

### AUTOSHEET

Alias: `ASH`. Folhas que se organizam sozinhas. {{cmd:AUTOSHEET}} pega nas partes do desenho (as suas vistas com nome, ou as partes separadas do modelo, ou o modelo inteiro), escolhe um formato de papel (ou o que der), dá a cada parte uma escala padrão (uma escala para todas, ou a maior que cada uma aceita) e coloca as vistas em linhas em novas folhas com uma legenda e uma designação (nome e escala) sob cada uma. O que não cabe numa folha recebe uma folha própria. Um passo de anulação. Calculado neste computador por regras, sem modelo.

### PHOTOSKETCH

Alias: `PSK`. Esboço fotografado para desenho. Escolha uma fotografia (JPEG, PNG ou TIFF) de um esboço à mão numa folha de papel. {{cmd:PHOTOSKETCH}} encontra os quatro cantos da folha, endireita a perspetiva, toma a dimensão do papel que indicar (`Papel`, ou a padrão mais próxima) e a `Escala` do esboço (1 : n), depois transforma os traços da caneta em linhas, arcos e círculos, uma camada para cada cor de caneta (preto, vermelho, azul, verde). Se não encontrar a borda do papel, toma a fotografia inteira como folha e indica-o. As letras ficam de fora. Um passo de anulação. Feito neste computador com processamento clássico de imagem, sem modelo, nada enviado para lado nenhum. Veja também os comandos de desenhos digitalizados.

### AUTODIM

Alias: `ADIM`. Cota automática por regras. {{cmd:AUTODIM}} cota os objetos selecionados (ou o desenho inteiro) a partir das suas arestas de nível e de prumo: uma cadeia de cotas ao longo dos lados que escolher (`Lados`), uma cota total exterior, a largura de cada vão (uma distância entre linhas de parede colineares), um diâmetro para cada dimensão de furo, e com `Grelha` o espaçamento entre linhas da grelha. Uma cota que já existe não é criada de novo. Um passo de anulação. Calculado neste computador por regras, sem modelo.

### GRIDMOVE

Alias: `GM`. Mover uma linha da grelha arrasta o conjunto. {{cmd:GRIDMOVE}} move uma linha da grelha (uma linha numa camada cujo nome diz grid ou eixo) e o que nela está pendurado: as paredes com uma extremidade na linha esticam para a seguir, as paredes ao longo dela movem-se inteiras, os pilares (referências de blocos e círculos na linha), a sua bolha e etiqueta movem-se, e as cotas cujos pontos estão sobre ela medem o novo espaçamento. Indique dois pontos (só conta a parte que atravessa a linha) ou `Distância`. Um passo de anulação leva tudo de volta. Feito por regras neste computador.

### DETAILS

Alias: `DET`. Detalhes que o encontram. {{cmd:DETAILS}} guarda os detalhes próprios da sua empresa: `Adicionar` põe na lista um bloco deste desenho, `Listar` e `Remover` gerem-na, e `Procurar` ordena-os para o que está selecionado (ou para o que desenhou por último) pelas palavras nas suas camadas, nomes de blocos, padrões de trama e notas, comparadas com o nome e as notas de cada detalhe; assim, um detalhe de cabeça de janela encontra a sua caleira de peitoril. Escolha um número e um ponto para o colocar. Com `Sugestão` ativa (também em Definições › CadCraft), selecionar algo que um detalhe reconhece põe uma linha na barra de estado. A lista fica guardada neste navegador, neste computador, e é essa lista que se pesquisa. `Partilhar` põe-na também na sua pasta Documentos (`.cadcraft/firm-details.json`, com o desenho de cada bloco): `Receber` acrescenta o que a sua equipa tem e você não tem, `Enviar` acrescenta o que tem e eles não têm, `Ambos` faz as duas coisas, e nada é alguma vez removido de nenhum dos lados. Abra primeiro a pasta Documentos ({{cmd:DOCUMENTS}}); quando essa pasta é uma pasta de Team Cloud Plan, toda a equipa partilha uma só lista. Um item de detalhe no painel da Biblioteca tem um botão **Adicionar aos detalhes da minha empresa** que o põe na mesma lista. Calculado neste computador por palavras, sem modelo.

### SKETCHFIX

Alias: `SKF`. Esboços a caneta tornam-se geometria precisa. Prima e arraste um traço à mão livre de cada vez (caneta, rato ou dedo), depois Enter. Cada traço é lido como uma linha, círculo, arco, retângulo ou polilinha: linhas quase horizontais e a prumo ficam exatamente horizontais e a prumo, um traço fechado redondo torna-se um círculo, um traço fechado com quatro cantos retos torna-se um retângulo, e as extremidades dos traços são puxadas umas para as outras e para as extremidades que já estão no desenho. Um passo de anulação. Calculado neste computador por regras, sem modelo.

### SCANATTACH e os comandos de desenhos digitalizados

Aliases: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} não tem nenhum. Trabalham sobre uma imagem, um passo de anulação cada. {{cmd:SCANATTACH}} insere um PNG, JPEG, TIFF (uma página ou todas) ou uma página PDF que seja uma imagem. {{cmd:SCANSCALE}} escala a folha a partir de dois pontos indicados e da distância real. {{cmd:SCANALIGN}} move-a e roda-a sobre dois pontos (`Escalar a folha para caber` Sim/Não). {{cmd:SCANDESKEW}} mostra o ângulo das linhas longas da folha e roda-a quando `Aceitar` ou der um `Valor`. {{cmd:SCANCLEAN}} torna-a preto e branco (`Limiar` Automático/Adaptativo/Nível, `Manchas`) e `Executar`. {{cmd:SCANCROP}} mantém uma janela. {{cmd:SCANERASE}} apaga um `Retângulo`, `Polígono` ou `Laço`. {{cmd:SCANTRACE}} traça linhas e arcos para uma nova camada (`Tolerância`, `Janela`, `Arcos`, `Restos`, `Executar`) e indica o que encontrou e o que deixou como raster. {{cmd:SCANINFO}} lista o ficheiro original e os passos. {{cmd:RASTERSNAP}} ativa ou desativa o snap às linhas de folhas digitalizadas. Veja o tópico Desenhos digitalizados e o traçado.

### REGEN e REGENALL

Aliases: `RE` para {{cmd:REGEN}}, `REA` para {{cmd:REGENALL}}. Reconstroem o que está desenhado no ecrã a partir do desenho: {{cmd:REGEN}} o separador que está a ver (numa folha, o modelo que as suas viewports mostram também), {{cmd:REGENALL}} todos os separadores, todos os painéis de ecrã dividido e todos os desenhos abertos. Use-os quando a imagem parecer desatualizada depois de uma alteração feita por script ou muito grande, ou quando um assistente editou o desenho; o próprio desenho não é tocado, por isso não há nada para anular.

### NAMEDVIEW

Aliases: `NV`, `VIEWS`. `Introduza uma opção [?/Repor/Guardar/Janela/Eliminar] <Repor>`, depois o nome da vista. `S` guarda a vista no ecrã, `W` uma janela que indica, `R` mostra uma vista guardada, `D` elimina uma, `?` lista as vistas deste separador. Guardar com um nome já existente substitui-a; cada alteração é um passo de anulação. As vistas pertencem ao separador em que foram guardadas. Os ficheiros DWG e DXF guardam-nas (a tabela VIEW); as vistas de uma folha voltam na primeira folha, porque o ficheiro não diz qual é.

### UNDO e REDO

Aliases: `U` para {{cmd:UNDO}}; {{cmd:REDO}} não tem nenhum. Também {{key:Mod+Z}} e {{key:Mod+Y}}.

### LAYER

Aliases: `LA`. Salta para o painel {{ui:Camadas}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Introduza o tipo de linha para os novos objetos` — `ByLayer` (PorCamada), `ByBlock` (PorBloco) ou um nome (`?` lista-os: Continuous, os do próprio desenho, e DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE com os seus tamanhos `2` (metade) e `X2` (o dobro)). {{cmd:LWEIGHT}} (`LW`): a espessura de linha dos novos objetos em mm, ou `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): a escala de tipo de linha do desenho (com anulação). {{cmd:LWDISPLAY}} (`LWT`): `Mostrar espessuras de linha [ON/OFF]` — o mesmo que o botão {{ui:LWT}} na barra de estado. Veja [Espessuras e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Introduza o tipo de objeto a mudar o nome [Camada (LA)/Bloco]`, `Introduza o nome antigo`, depois o novo nome; objetos ou referências seguem. {{cmd:LAYMRG}}: `Selecione o objeto na camada a fundir ou [Nome]` até {{key:Enter}}, depois `Selecione o objeto na camada de destino ou [Nome]` e `Y`. {{cmd:LAYDEL}}: `Selecione o objeto na camada a eliminar ou [Nome]`, depois `Y`: a camada e todos os objetos nela desaparecem (não a camada 0, DEFPOINTS nem a camada atual). Um passo de anulação cada. Veja [Organizar um desenho com camadas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Camadas escolhendo objetos; também no menu {{ui:Ferramentas}} do painel {{ui:Camadas}}. {{cmd:LAYISO}}: `Selecione objetos na(s) camada(s) a isolar`, depois {{key:Enter}}: todas as outras camadas ficam desligadas. {{cmd:LAYUNISO}} volta a ligá-las. {{cmd:LAYOFF}} e {{cmd:LAYFRZ}}: `Selecione um objeto na camada a desligar` (ou congelar), repetidamente; `U` anula o último, {{key:Enter}} termina. {{cmd:LAYMCUR}}: `Selecione o objeto cuja camada se torna atual`. {{cmd:LAYON}} liga todas as camadas, {{cmd:LAYTHW}} descongela todas. Cada comando é um passo de anulação. Veja [Organizar um desenho com camadas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} inicia um desenho vazio e {{cmd:OPEN}} abre um DWG ou DXF, cada um no seu separador sobre o desenho (um desenho novo intacto é usado em vez de abrir um separador). Ao fechar um separador com alterações não guardadas, pergunta primeiro. Veja [Dividir o ecrã](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, também {{key:Mod+S}}) transfere uma cópia no formato do desenho: DWG se foi aberto de um DWG, DXF se veio de um DXF. Um desenho novo usa o formato escolhido por último em Guardar como neste navegador, senão DWG.

{{cmd:SAVEAS}} (também {{key:Mod+Shift+S}}) abre a caixa {{ui:Guardar uma cópia como}}: escolha {{ui:DWG}} (e a sua {{ui:Versão}}), {{ui:DXF R12}} ou {{ui:DXF 2000}}, depois {{ui:Guardar}}. A escolha fica para este desenho e para os novos desenhos neste navegador.

{{cmd:DXFOUT}} transfere sempre uma cópia DXF R12, sem alterar o formato que {{cmd:SAVE}} usa.

Veja [Ficheiros: o que abre, o que guarda](topic:files#saving).

### TOUR

Aliases: `TUTORIAL`. Inicia de novo a visita guiada de seis passos ao primeiro desenho. Veja [Primeiros passos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliases: `TBDOCK`. `Posição da barra de ferramentas [Topo/Base/Esquerda/Direita]`. Veja [Definições](topic:settings#toolbar-position).

### COMMANDLINE

Aliases: `CMDLINE`. `Linha de comandos [Ancorada em baixo/Flutuante/Uma linha/Linhas do histórico mostradas/Histórico de comandos (F2)]`: ancora ou flutua a linha de comandos, torna-a numa só linha, pergunta quantas linhas do histórico mostrar (0 a 12), ou abre o histórico. Veja [Definições](topic:settings#command-line).

### TOPAREA

`Área superior [Normal/Compacta]`: as barras acima do desenho como estavam, ou compactas. Veja [Definições](topic:settings#top-area).

### POLARANG

`Introduza o passo do ângulo polar em graus <90>`: o passo em que o rastreio {{ui:Polar}} alinha as linhas (mais de 0, até 180). Mantido neste navegador.

### UNITS

Aliases: `UN`. Como os comprimentos são escritos e escritos ao digitar.

- `Introduza o formato de comprimento [Científico/Decimal/Engenharia/Arquitetónico/Fracionário] <atual>`
- Arquitetónico e Fracionário: `Introduza o denominador da menor fração a mostrar (1, 2, 4, 8, 16, 32, 64, 128 ou 256)`. Os outros: `Introduza o número de casas decimais (0 a 8)`.

As novas cotas seguem-no. Um passo de anulação. O mesmo que {{ui:Formato de comprimento}} e {{ui:Precisão}} em {{ui:Definições atuais}}; veja [Pés e polegadas e frações](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliases: `GDS`. Visualiza um layout de circuito integrado (um ficheiro de fluxo GDSII): teste de laboratório, apenas para ver e medir.

- Um seletor de ficheiros aceita um ficheiro `.gds`; com várias células de topo, `Introduza a célula de topo a desenhar`.
- Cada camada e tipo de dados torna-se uma camada de desenho (`GDS 1`, `GDS 2/5`); as referências e matrizes são colocadas planificadas, na unidade de utilizador do ficheiro (normalmente micrómetros). Um passo de anulação. Nada é simulado nem verificado, e o ficheiro não é escrito de volta.

### DIAGRAM

Aliases: `TEXTDIAGRAM`, `T2D`. Um diagrama a partir de texto.

- Uma caixa recebe o texto (ou uma linha com `;` entre instruções na linha de comandos): um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de origem-destino.
- `Especifique o canto superior esquerdo do diagrama`, depois `Especifique a altura do texto`.

Blocos e conectores são objetos comuns na camada `Diagram`, selecionados quando termina. Um passo de anulação. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).

### OLELIST

Aliases: `OLES`. Os objetos OLE que um DWG transporta e que o CadCraft não consegue colocar por si.

- Lista cada um: número, tipo, tamanho, se guardou uma imagem.
- `Introduza uma opção [Colocar/Sair (X)] <Sair>`: Colocar pede o número, o canto inferior esquerdo e a largura, e desenha uma moldura com a imagem. Um passo de anulação; o objeto guardado não é alterado. Veja [Objetos de outros programas (OLE)](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliases: `SHX`. Os seus próprios tipos de letra SHX.

- `Introduza uma opção de tipo de letra SHX [Pasta/Ficheiros/Listar/Remover/Inverter/Limpar] <Listar>`

{{ui:Pasta}} lê cada `.shx` de uma pasta (CadCraft Studio; de novo em cada arranque), {{ui:Ficheiros}} aceita ficheiros indicados (o navegador), {{ui:Inverter}} dispõe as letras de um tipo de letra do último para o primeiro. Os estilos de texto que nomeiam um tipo carregado desenham nele. Veja [Desenhar texto com os seus tipos de letra SHX](topic:shx-fonts).

### LIMITS

Qual o tamanho que o desenho deve ter.

- `Especifique o canto inferior esquerdo ou [ON/OFF] <atual>`: um ponto, `ON` ou `OFF`.
- `Especifique o canto superior direito <atual>`.

A grelha preenche os limites, {{cmd:ZOOM}} Tudo mostra-os, e com eles em ON um ponto fora é recusado (`**Fora dos limites`). Um passo de anulação; guardado em DWG e DXF. Veja [Definir os limites do desenho](topic:drawing-limits).

### AUNITS

Aliases: `ANGUNITS`. Como os ângulos são mostrados e escritos.

- `Introduza o formato do ângulo [Graus decimais/Graus-minutos-segundos/Rumos de topógrafo] <atual>`
- `Introduza o número de casas decimais (0 a 8)`, ou para os outros dois `Introduza a precisão` (0 graus, 2 minutos, 4 segundos, 5 a 8 casas decimais de segundo).

Um passo de anulação; guardado em DWG e DXF. O mesmo que {{ui:Formato de ângulo}} em {{ui:Definições atuais}}. Veja [Escrever e mostrar rumos e ângulos](topic:bearings-and-angles).

### APPLOAD

Aliases: `AP`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Carregar aplicação…}}. A caixa {{ui:Carregar aplicações}}: carrega rotinas `.lsp` e ficheiros de diálogo `.dcl`, descarrega-os, volta a carregá-los a partir do histórico, e o Startup Suite. Os comandos `(defun c:NAME …)` de uma rotina funcionam depois como qualquer outro. Veja [Carregar aplicações](topic:load-applications) e [Executar rotinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Editar aliases…}}) abre o seu ficheiro de aliases (linhas `ALIAS, *COMMAND`); {{ui:Guardar}} aplica-o. {{cmd:REINIT}} volta a aplicá-lo. Veja [Editar aliases de comandos](topic:command-aliases).

### LISPEDIT

Aliases: `VLIDE`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Editor LISP}}. Abre o editor LISP, uma janela que fica aberta ao lado do desenho.

- O texto: números de linha, o parceiro do parêntesis no cursor assinalado (a vermelho quando não tem), {{key:Enter}} indenta a nova linha sob o parêntesis aberto, {{key:Tab}} escreve dois espaços, {{key:Esc}} sai do texto.
- {{ui:Carregar no desenho}} ({{key:Ctrl+Shift+Enter}}): lê todas as formas, como {{cmd:APPLOAD}} faz com o ficheiro, e cria os seus comandos `c:`. O ficheiro aparece na lista de {{cmd:APPLOAD}}.
- {{ui:Executar seleção}} ({{key:Ctrl+Enter}}): avalia as formas selecionadas, ou a forma onde está o cursor.
- {{ui:Parar}}: termina uma rotina em execução.
- {{ui:Consola}}: o que a rotina imprimiu, e cada erro com a sua linha; clique num erro para ir até lá. O texto é executado uma forma de topo de cada vez, por isso a linha é a da forma, ou dentro dela a linha que chama a função que o erro nomeia.
- {{ui:Novo}}, {{ui:Abrir}}, {{ui:Guardar}} ({{key:Ctrl+S}}): um ficheiro `.lsp`. O texto fica também guardado neste navegador, por isso fechar a janela não perde nada.
- Ao lado do texto: as funções que a rotina define, as que chama e que este LISP ainda não tem, as que chama e que não estão definidas nela nem incorporadas, e as listas completas do que está implementado e do que não está.

Um texto com um parêntesis que nunca fecha, ou uma cadeia que nunca termina, não é executado: indica-se a linha. Não há depurador passo a passo, pontos de paragem nem janela de observação. Veja [Executar rotinas LISP](topic:run-lisp).

### HELP

Aliases: `?`. Imprime cada comando, os seus aliases e uma descrição de uma linha no histórico da linha de comandos. Não abre esta ajuda: prima {{key:F1}} ou clique em {{ui:Ajuda}} para isso.

## Pedido de seleção de objetos

Em qualquer pedido `Selecione objetos`: clique em objetos, desenhe janelas (da esquerda para a direita) e cruzamentos (da direita para a esquerda) com dois cliques, ou prima e arraste um laço ({{key:Space}} enquanto arrasta: janela, cruzamento, vedação), {{key:Shift}}+clique para remover, e prima {{key:Enter}} para terminar. Também pode escrever `ALL` (tudo), `L` (o último objeto), `P` (Anterior: o que o último comando usou), `F` (Vedação: objetos que uma linha de pontos cruza; `U` anula um ponto), `W` (Janela), `C` (Cruzamento), `R` (modo Remover: as escolhas tiram objetos; o pedido diz `Remover objetos`) e `A` (Acrescentar de novo). `?` lista-os. Não são mostrados no pedido. {{key:Tab}} sobre objetos sobrepostos realça o seguinte; clique para o escolher. Veja [Selecionar objetos](topic:select-objects).

### ACCESS

Alias: `AX`. Desenhar sem visão. {{cmd:ACCESS}} ativa ou desativa o Acesso (`On`, `Off`) e alterna os sons de snap (`Sound`) e os comandos por voz (`Voice`); indica primeiro o estado. Com o Acesso ativo, cada comando e resultado é lido pelo leitor de ecrã e a área de desenho tem um cursor de teclado. O tópico de ajuda «Desenhar sem visão» tem as teclas.

### DESCRIBE

Alias: `DESC`. Diz o que o desenho contém: quantos objetos, de que tipo, de que tamanho, quantas camadas, o que está selecionado. Só lê; não altera nada.

### WHEREAMI

Alias: `WHERE`. Diz onde está o cursor, nas unidades do desenho.

### NEARBY

Diz o que está perto do cursor, do mais próximo para o mais distante, cada um com a sua distância e o lado em que está.

### SAYSEL

Diz o que está selecionado, uma frase por objeto (comprimento da linha, extremidades e ângulo; raio e centro do círculo; texto como está escrito).

### VOICE

Ativa ou desativa os comandos falados. São reconhecidos neste computador; quando o navegador não o consegue fazer, a voz fica desligada, a não ser que escolha o serviço online do navegador nas Definições.

### TOUCHCROSSHAIR

Alias: `TCX`. A cruzeta deslocada para desenhar com o dedo, para que a ponta do dedo não tape o ponto que indica. Enquanto estiver ativa, um dedo sobre o desenho não indica: move uma cruzeta que fica acima do dedo e para um dos lados. Os snaps a objetos e o rastreio seguem a cruzeta. Levantar o dedo não indica nada e deixa a cruzeta onde está. Para indicar, prima o botão {{ui:Clique}} no canto do desenho, ou toque em qualquer sítio do desenho com um segundo dedo. Mantenha {{ui:Clique}} enquanto move o outro dedo para arrastar (uma janela de seleção, um laço, um grip). Um dedo pousado e parado, ou o botão {{ui:Enter}}, é Enter. Dois dedos deslocam e aplicam zoom como antes. Perto da margem inferior e da margem do lado distante, a cruzeta aproxima-se do dedo, para que toda a parte do desenho seja alcançável. Uma caneta e um rato indicam sempre diretamente.

{{cmd:TOUCHCROSSHAIR}} diz o estado e pergunta `ON`, `OFF`, `Auto` (ativo apenas onde um dedo seja o único ponteiro, por isso fica desligado num computador com rato), `Distance` (Distância: a distância a que a cruzeta fica do dedo, de 24 a 240 pixels) ou `Side` (Lado: `Left` (Esquerdo): para cima e para a esquerda, para a mão direita; `Right` (Direito) para a mão esquerda; os botões passam para o outro canto). As mesmas escolhas estão em Definições › CadCraft, e num dispositivo com ecrã tátil a barra de estado tem um interruptor {{ui:Cruzeta deslocada}}. As escolhas ficam guardadas neste navegador.

### WHOHAS

Diz quem tem um desenho aberto. No CadCraft Studio num computador, abrir um DWG ou DXF escreve um pequeno ficheiro de bloqueio ao lado dele (`Plan.dwg.cclock`: quem, desde quando, que versão), atualiza-o a cada minuto enquanto o desenho está aberto, e remove-o quando o desenho é fechado. Abrir um desenho que outra pessoa tem aberto diz quem e desde quando, e oferece {{ui:Abrir só para leitura}} (guardar pede então um novo nome), {{ui:Abrir mesmo assim}} (a outra pessoa é avisada na próxima atualização) ou {{ui:Cancelar}}. Guardar sobre um ficheiro que outra pessoa tem aberto pergunta primeiro. Um bloqueio que não foi atualizado durante cinco minutos é considerado obsoleto: a outra cópia foi fechada sem guardar ou o computador está em suspensão.

{{cmd:WHOHAS}} pergunta `Atual` (o desenho aberto), `Ficheiro` (escolha um), `Pasta` (escolha uma pasta: lista cada desenho nela que esteja aberto algures), `Caminho` (escreva um caminho completo) ou `Nome` (o nome que os outros veem; o nome da sua conta quando tem sessão iniciada). O Studio só consegue alcançar as pastas que escolheu: para um desenho aberto a partir de uma pasta que nunca foi escolhida, indica uma vez que não consegue registar o desenho como aberto; `Pasta` escolhe a pasta, e os bloqueios funcionam aí a partir daí. O bloqueio é um aviso para as pessoas, não uma barreira: outro programa pode continuar a escrever o ficheiro. Num navegador não há pastas onde procurar, e o comando diz isso.

### OVERKILL

Elimina objetos duplicados e arruma linhas e arcos sobrepostos, para desenhos que chegam cheios de traçado duplicado. `Selecione objetos a limpar`, {{key:Enter}}, depois {{key:Enter}} de novo para limpar com as definições mostradas, ou altere uma primeiro:

- `Tolerância`: o quão próximas duas coordenadas devem estar para contar como iguais (0.000001 para começar; 0 significa exatamente iguais).
- `Ignorar`: propriedades que podem diferir entre dois objetos de resto iguais. Escreva um nome para o alternar: `Cor`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ou `None` (Nenhum) / `All` (Todos). {{key:Enter}} quando terminar.
- `Sobreposição`: ativo ou inativo. Ativo, as linhas sobre uma mesma reta que se sobrepõem tornam-se uma linha (uma linha dentro de outra é simplesmente eliminada), e os arcos de um mesmo círculo que se sobrepõem tornam-se um arco; arcos que fecham uma volta completa tornam-se um círculo, e um arco sobre um círculo é eliminado.
- `Extremidades`: ativo ou inativo. Ativo, linhas sobre uma mesma reta e arcos de um mesmo círculo que apenas se tocam extremidade a extremidade tornam-se um só troço.

Todo o tipo de objeto é verificado quanto a duplicados: dois objetos são duplicados quando a sua geometria é a mesma dentro da tolerância e a sua camada, cor, tipo de linha, escala do tipo de linha, espessura de linha, espessura, transparência e altura coincidem (menos as que ignora). Linhas e polilinhas abertas também coincidem quando desenhadas no sentido contrário. O primeiro objeto na ordem de desenho mantém-se e fica com as suas próprias propriedades. O comando indica quantos objetos verificou e eliminou: duplicados, troços sobrepostos fundidos, troços unidos extremidade a extremidade. Um {{cmd:UNDO}} desfaz tudo. As definições duram até fechar a janela do desenho.

Deixa de fora: objetos em camadas bloqueadas e objetos ocultos. Não funde linhas com altura (Z) (os duplicados exatos delas são eliminados), e não toca em segmentos dentro de uma polilinha (não são desbastados), numa linha sobre um segmento de polilinha, nem numa polilinha fechada desenhada no sentido contrário.

### DRAWORDER

Altera quais os objetos desenhados à frente. `Selecione objetos a reordenar`, {{key:Enter}}, depois `Acima de objetos`, `Abaixo de objetos`, `Frente` ou `Trás` ({{key:Enter}} = `Trás`). `Acima de objetos` e `Abaixo de objetos` pedem os objetos de referência: a seleção fica logo à frente do mais da frente deles, ou logo atrás do mais de trás. Os objetos selecionados mantêm a sua ordem entre si. Um passo de anulação. A ordem fica guardada com o desenho em DWG e DXF, onde é a ordem pela qual os objetos são escritos.

No ecrã o CadCraft desenha primeiro as áreas preenchidas (tramas sólidas, polilinhas largas, máscaras), depois o traçado, depois o texto, por isso o texto lê-se sempre sobre um preenchimento; a ordem de desenho aparece entre objetos preenchidos e entre imagens. Outros programas que abrem o ficheiro desenham cada objeto pela ordem guardada.

### TEXTTOFRONT

Traz o texto, as cotas e as linhas de chamada para a frente de tudo o resto no espaço aberto: `Texto`, `Cotas`, `Chamadas` ou `Tudo` ({{key:Enter}} = `Tudo`). Um passo de anulação. Indica quando não há nenhum, ou quando já estão à frente.

### HATCHTOBACK

Envia todas as tramas do espaço aberto para trás de tudo o resto, para que os preenchimentos deixem de tapar o traçado e o texto no ficheiro guardado. Sem perguntas. Um passo de anulação.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Mostra apenas os objetos selecionados: tudo o resto no espaço aberto sai de vista até {{cmd:UNISOLATEOBJECTS}}. Ao contrário de {{cmd:LAYISO}}, trabalha nos objetos que indica, quaisquer que sejam as suas camadas, e não altera nenhuma camada. Objetos ocultos não são desenhados, indicados, apanhados por snap, ampliados nem impressos, e os comandos que aceitam `ALL` passam por cima deles. O que desenhar enquanto os objetos estão isolados aparece como de costume.

Isto é só para a sessão: nada disto fica guardado com o desenho, não é um passo de anulação, e ao abrir o desenho de novo tudo aparece. Enquanto houver objetos ocultos, a barra de estado mostra um botão com o seu número; clique nele para os voltar a mostrar.

### HIDEOBJECTS

Oculta os objetos selecionados até {{cmd:UNISOLATEOBJECTS}}. As mesmas regras de {{cmd:ISOLATEOBJECTS}}: só para a sessão, não guardado, não é um passo de anulação.

### UNISOLATEOBJECTS

Aliases: `UNISOLATE`, `UNHIDE`. Volta a mostrar todos os objetos ocultos por {{cmd:ISOLATEOBJECTS}} ou {{cmd:HIDEOBJECTS}}, e diz quantos voltaram.

### LAYLOCKFADE

Define como os objetos em camadas bloqueadas aparecem e se um clique os alcança. Diz o estado atual, depois aceita:

- um número de 0 a 90: a quantidade de esbatimento em percentagem (50 para começar). 0 desliga o esbatimento.
- `ON` ou `OFF`: esbatimento ativo ou inativo, mantendo a quantidade.
- `Pick` (Indicar), depois `Yes` (Sim) ou `No` (Não): um clique pode selecionar objetos em camadas bloqueadas quando nenhum comando está em execução? `No` (a predefinição): não podem ser indicados de todo. `Yes`: um clique ou uma janela seleciona-os para que {{ui:Propriedades}} os possa mostrar; continuam sem poder ser alterados, e o próprio `Selecione objetos` de um comando nunca os aceita.

Os snaps a objetos encontram objetos em camadas bloqueadas de qualquer forma. As impressões nunca são esbatidas. Ambas as definições são suas, não do desenho, e estão também em {{ui:Definições}}, em {{ui:Camadas bloqueadas}}.

### BURST

Decompõe referências de blocos e mantém o que os seus atributos dizem. `Selecione as referências de blocos a decompor`, {{key:Enter}}: cada referência é substituída pelos objetos do bloco, e o valor de cada atributo visível passa a texto simples na camada desse atributo (um atributo na camada 0 fica na camada da referência, como os outros objetos do bloco na camada 0). Os atributos invisíveis são eliminados. Um bloco dentro do bloco mantém-se referência de bloco. Um passo de anulação; indica as referências decompostas e os valores de atributos transformados em texto.

Recusa um desenho ligado pelo nome (vincule-o primeiro, ou copie dele com {{cmd:NCOPY}}), e deixa os outros objetos selecionados em paz. Para referências de blocos, {{cmd:EXPLODE}} dá os mesmos objetos; {{cmd:BURST}} trabalha apenas com referências de blocos e conta o texto dos atributos.

### TXT2MTXT

Alias: `T2M`. Une textos de uma linha num só texto de parágrafo. `Selecione textos de uma linha a unir`, {{key:Enter}}, depois `Parágrafo` (as linhas correm juntas e quebram à largura da linha mais larga) ou `Linhas` (cada texto mantém-se uma linha própria); {{key:Enter}} escolhe o último usado. As linhas são ordenadas de cima para baixo, depois da esquerda para a direita, segundo a direção do texto de cima. O parágrafo pende do canto superior esquerdo do texto de cima e toma a sua altura, rotação, estilo, camada e cor. Um passo de anulação.

Texto que já é de parágrafo, texto em branco e outros objetos na seleção ficam como estão, e o comando indica quantos são.

### NCOPY

Copia objetos de uma referência de bloco ou de um desenho ligado para o desenho, sem decompor nada. `Indique um objeto dentro de uma referência de bloco ou de um desenho ligado`: o objeto mais próximo do ponto indicado é copiado onde se vê, qualquer que seja a profundidade do bloco; indique mais, depois {{key:Enter}}. Depois `Ponto base para mover as cópias`: {{key:Enter}} deixa-as no lugar, ou dê um ponto base e um segundo ponto. O comando inteiro é um passo de anulação.

Uma cópia toma a camada em que se vê: um objeto na camada 0 dentro de um bloco fica na camada da referência em que estava, e uma cor ByBlock (PorBloco) torna-se a cor dessa referência. De um desenho ligado, a camada `Plan|Walls` torna-se `Plan$0$Walls` (o nome que a ligação lhe dá), criada com a cor, o tipo de linha e a espessura da camada ligada. O valor de um atributo é copiado como texto. Referências de blocos em camadas bloqueadas não podem ser indicadas.

### FLATTEN

Define a altura (Z) e a espessura dos objetos selecionados como 0. `Selecione objetos a achatar`, {{key:Enter}}. Também achata os objetos dentro das definições de blocos que a seleção usa (e os blocos dentro desses), por isso cada referência a esses blocos muda; os desenhos ligados ficam como estão. Um passo de anulação; indica quantos objetos mudaram, e diz quando nenhum tinha altura ou espessura.

O que o CadCraft guarda da terceira dimensão num desenho 2D é: uma altura em círculos, arcos, elipses, pontos, textos, referências de blocos, tramas, chamadas e polilinhas (a sua cota), uma altura em cada extremidade de uma linha, e uma espessura em linhas, círculos, arcos, polilinhas, pontos e textos, tal como o ficheiro os tinha. {{cmd:FLATTEN}} limpa exatamente isso. Não toca no modelo 3D do separador 3D, nem em faces 3D ou sólidos, e um objeto desenhado num plano inclinado já tinha sido trazido para o plano do desenho quando o ficheiro foi aberto.

### BREAKLINE

Desenha uma linha com símbolo de quebra, para uma vista que é cortada. Indica o tamanho e o prolongamento atuais, depois `Primeiro ponto da linha de quebra` (ou `Tamanho` / `Prolongamento` para os alterar antes), `Segundo ponto`, e `Onde fica o símbolo de quebra`: clique ao longo da linha, ou {{key:Enter}} para o meio. O resultado é uma polilinha na camada atual: a linha, prolongando-se para lá de cada ponto pelo prolongamento, com um traço em Z tão alto quanto o tamanho e metade do comprimento.

`Tamanho` e `Prolongamento` ficam memorizados como as suas definições (o tamanho começa como o dobro da altura do texto da cota vezes a escala da cota; o prolongamento como metade do tamanho). {{key:Enter}} repete o comando.

### AUDIT

Verifica o desenho aberto quanto a danos e repara-o. {{cmd:AUDIT}} examina cada objeto no modelo, nas folhas e dentro dos blocos, e a tabela de camadas, e lista o que encontra por tipo:

- números que não são finitos ou são absurdamente grandes;
- objetos sem dimensão: uma linha sem comprimento, um círculo sem raio, uma polilinha com um só ponto, texto sem letras ou altura, uma referência de bloco com escala zero;
- objetos numa camada que o desenho não tem; referências a um bloco que não existe; nomes de estilos de texto e de cota e nomes de tipos de linha que não estão no desenho;
- blocos que se contêm a si próprios, diretamente ou através de outros blocos;
- objetos que partilham um identificador, uma chave ou um identificador de ficheiro;
- cotas sem os pontos a partir dos quais são medidas, e tramas cujo contorno não é um contorno fechado.

Depois pergunta `Corrigi-los? [Sim (Y)/Não (N)]`. `Não` não altera nada. `Sim` repara tudo num só passo de anulação: o que não pode ser desenhado é removido (números maus, sem dimensão, bloco em falta, cota danificada, uma trama sem contorno utilizável, a referência que fecha um círculo de blocos); uma camada em falta é criada; nomes de estilos e tipos de linha desconhecidos voltam às predefinições; uma chave partilhada é substituída. Imprime quantos objetos foram removidos e quantos reparados. As mesmas conclusões aparecem no painel Problemas, cada uma com o seu próprio {{ui:Reparar}}.

Não recusa nada, mas apenas verifica o que o próprio CadCraft desenha: os dados guardados para outros programas (sólidos 3D, objetos OLE) não são abertos.

### RECOVER

Abre um DXF ou DWG danificado. {{cmd:RECOVER}} pede o ficheiro, lê o que pode ser lido em vez de recusar o ficheiro, lista o que ignorou ou assumiu, e depois verifica e repara o desenho como {{cmd:AUDIT}} faz com `Sim`.

- DXF: as linhas que não fazem parte de um par código e valor são ignoradas até os pares voltarem a alinhar; uma secção sem fim é fechada; um ficheiro cortado é lido até ao corte; um DXF binário cortado é lido até ao seu último valor completo. Quando uma secção, um bloco ou um objeto ainda não pode ser lido, fica de fora e é indicado pelo nome, e a leitura continua para além dele.
- DWG: os objetos que falham as suas verificações ou não podem ser descodificados ficam de fora, e uma lista de objetos perdida é reconstruída percorrendo os dados dos objetos.

O ficheiro em disco não é alterado. O desenho recuperado abre-se por guardar: guarde-o com um novo nome. Um ficheiro do qual nada pode ser lido é recusado, com a razão.

### LEGACYTEXT

Converte texto escrito com tipos de letra vietnamitas antigos de 8 bits para Unicode. Nomes curtos `TEXTTOUNICODE` e `VNTEXT`.

Os desenhos vietnamitas mais antigos guardam o seu texto como caracteres ocidentais que só o tipo de letra transforma em vietnamita: texto TCVN3 nos tipos ABC (`.VnTime`, `.VnArial`, e os tipos em maiúsculas cujos nomes terminam em `H`), e texto VNI nos tipos VNI (`VNI-Times`). O CadCraft mostra esse texto como é lido assim que o desenho abre, pelo tipo do seu estilo de texto, do objeto, ou de um trecho dentro de um texto de parágrafo; o ficheiro continua a ter os caracteres antigos.

{{cmd:LEGACYTEXT}} diz quantos textos encontrou em cada codificação e pergunta `Converter … para Unicode?`. `Sim` reescreve cada um (modelo, folhas, blocos, valores e definições de atributos) e dá aos estilos de texto um tipo de letra Unicode (Times New Roman, Arial ou Courier New, conforme o tipo antigo), num só passo de anulação. A formatação dentro de um texto de parágrafo é mantida.

Quando nenhum texto usa um tipo conhecido (um estilo que perdeu o nome do tipo), pergunta `Ler os textos selecionados como [Tcvn3/Vni/Nenhum]`: escolha a codificação e selecione os textos. Texto que já é Unicode fica como está. O texto de substituição de cotas e o texto de chamadas múltiplas não são convertidos.

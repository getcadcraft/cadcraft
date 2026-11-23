---
title: Referência de comandos
summary: Todos os comandos da aplicação de desenho CadCraft, com os seus aliases, as perguntas que fazem, as suas opções e predefinições.
keywords: comandos, aliases, lista de comandos, área, perímetro, measuregeom, linha, pline, círculo, arco, aparar, deslocar, dimlinear, bloco, inserir, layout, imprimir, zoom, ajuda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicar, selectall
from: 979ffe3b
---

Escreva o nome de um comando ou um alias e prima {{key:Enter}} ou {{key:Space}}. Não importa se é maiúscula ou minúscula, e um `_`, `-`, `.` ou `'` no início é ignorado. Escreva `HELP` (ou `?`) para imprimir uma lista curta de todos os comandos no histórico da linha de comandos; prima {{key:F1}} para esta ajuda.

Como ler os pedidos: as opções estão entre parênteses retos, e escolhe-se uma escrevendo as suas letras maiúsculas (`D` para Diameter). Uma predefinição está entre parênteses angulares; prima {{key:Enter}} para a aceitar. Quando se pede um ponto, pode clicar ou escrever qualquer dos formatos de [Introdução de coordenadas e distâncias](topic:coordinate-entry). Quando se pede uma distância, pode escrever um número ou clicar em dois pontos.

Premir {{key:Enter}} onde se exige um ponto ou um objeto, e não há predefinição, termina o comando. {{key:Esc}} cancela-o. O que um comando fez é um único passo de anular.

## Desenhar

### LINE

Aliases: `L`. Segmentos retos, cada um o seu próprio objeto.

- `Specify first point` (Enter: começa no último ponto dado)
- `Specify next point [Undo]`, repetido. Depois de dois segmentos: `[Undo/Close]`.
- `U` anula o último segmento, `C` fecha até ao primeiro ponto e termina. Enter termina.

### PLINE

Aliases: `PL`. Uma polilinha de segmentos de linha e de arco.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close depois de dois segmentos)
- `A` passa a arcos: `Specify endpoint of arc [Line/CLose/Undo]`. Cada arco continua tangente ao segmento anterior. `L` volta às linhas, `CL` fecha com um arco.
- Enter termina; a polilinha fica aberta.

### CIRCLE

Aliases: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pede `Specify diameter of circle`.
- `2P`: duas extremidades de um diâmetro. `3P`: três pontos no círculo.
- `T` (também o comando `TTR`, e {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Círculo: Tan, Tan, Raio}}): `Specify point on object for first tangent of circle`, depois o segundo, e depois o raio (Enter: o último). O círculo toca os dois objetos (linhas, arcos, círculos, segmentos de polilinha, também dentro de blocos); dos círculos que o fazem, o que toca mais perto das suas escolhas. "Círculo não existe" quando nenhum serve.
- `TTT` (ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Círculo: Tan, Tan, Tan}}): três objetos; o círculo que toca os três, o mais próximo das suas escolhas (três linhas dão o círculo interior ou um exterior, consoante onde escolher).

### ARC

Aliases: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: um arco por três pontos.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. O arco percorre o sentido contrário ao dos ponteiros do relógio, do início ao fim.

### RECTANG

Aliases: `REC`, `RECTANGLE`. Uma polilinha fechada.

- `Specify first corner point`, `Specify other corner point`. Escreva `@width,height` para o segundo canto.

### POLYGON

Aliases: `POL`. Um polígono regular como polilinha fechada.

- `Enter number of sides <4>` (3 a 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: clique ou escreva um ponto; a sua distância define o tamanho e a sua direção roda o polígono.

### ELLIPSE

Aliases: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, depois a distância ao outro eixo.
- `I` (`Isocircle`, só com {{cmd:ISODRAFT}} ativo): centro, depois raio ou `Diameter`: a elipse que um círculo mostra no plano isométrico atual.

### HATCH

Aliases: `H`, `BH`, `BHATCH`; ou {{ui:Trama}} na barra de ferramentas. Imprime primeiro o padrão, a escala e o ângulo atuais.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, repetido (`Undo` quando já há uma área): cada clique acrescenta a área fechada à sua volta, com as formas fechadas dentro dela como ilhas. Enter faz uma só trama de todas elas.
- `S`: `Select closed objects` (polilinhas fechadas, círculos, elipses fechadas).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradiente): o preenchimento é um gradiente em vez de um padrão. Veja {{cmd:GRADIENT}} para as suas perguntas.

Veja [Tramas e áreas de preenchimento](topic:hatch).

### GRADIENT

Aliases: `GD`. Preenche uma área com um gradiente de uma ou duas cores. Pergunta primeiro o gradiente, depois continua como {{cmd:HATCH}} (`Pick internal point`, `S` para objetos fechados, {{key:Enter}} para terminar).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, repetido; imprime o gradiente tal como está de cada vez.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ou um deles invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). As primeiras letras bastam.
- `O`: uma cor, depois o seu tom de 0 a 1 (0 escurece-a até ao preto, 0.5 é a própria cor, 1 clareia-a até ao branco). `TW`: a primeira e a segunda cor. Uma cor é um número de 1 a 255, três números como `255,128,0`, ou `#rrggbb`.
- `A`: o ângulo em que o gradiente corre. `C`: centrado Yes ou No (No move o meio do gradiente para um lado).
- Recusa uma cor ou um tipo que não conhece, e um tom fora de 0 a 1.

{{cmd:HATCHEDIT}} `G` e Propriedades (Gradiente) alteram um gradiente depois, ou transformam qualquer trama num. Um gradiente é desenhado no ecrã e impresso. O DWG 2004 e posteriores guardam-no como uma trama de gradiente real; o DXF 2000 e o DWG 2000 guardam-no para o CadCraft, e os outros programas veem um preenchimento sólido na primeira cor.

### HATCHGENERATEBOUNDARY

Aliases: `HGB`. Volta a criar o contorno a partir de uma trama que o perdeu. `Select hatches` (ou selecione-as primeiro), depois `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Cada circuito da trama torna-se uma polilinha fechada na camada da trama; as novas polilinhas ficam selecionadas. Uma aresta curva volta como os pequenos segmentos retos que a trama mantém.
- Com Yes a trama segue o seu novo contorno, como faz uma trama feita com {{cmd:HATCH}}. Um passo de anular.
- Indica-o quando nenhuma trama foi selecionada.

### POINT

Aliases: `PO`; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Ponto}}. Objetos de ponto, um por clique, até Enter.

- `Specify a point`

### XLINE

Aliases: `XL`; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Linha de construção}}. Linhas de construção, infinitas nos dois sentidos. Veja [Linhas de construção e semirretas](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, depois `Specify through point` para cada linha, até Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` pede primeiro `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, depois `Specify angle end point` para cada linha.
- `O`: `Specify offset distance [Through] <Through>`, depois `Select a line object` e `Specify side to offset` (ou `Specify through point`) para cada linha.

### RAY

Sem aliases; ou {{ui:Desenhar}} › {{ui:Mais}} › {{ui:Semirreta}}. `Specify start point`, depois `Specify through point` para cada semirreta, até Enter.

### TEXT

Aliases: `DT`, `DTEXT`; ou {{ui:Texto}} na barra de ferramentas. Texto de uma linha; cada linha é o seu próprio objeto.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, depois `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, repetido: cada Enter começa a linha seguinte por baixo. Enter numa linha vazia termina. {{key:Space}} escreve um espaço aqui.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} coloca marcas numa linha, arco, círculo, polilinha, spline ou elipse que o divide em partes iguais. Escolha o objeto e depois indique o número de partes (2 a 32767). Um objeto aberto recebe uma marca a menos do que partes; um fechado recebe também uma marca no seu início. O próprio objeto não é cortado. As marcas são pontos; `Block` pede antes um bloco deste desenho e se ele roda para seguir o objeto. Os comprimentos ao longo de splines e elipses são medidos por pequenas cordas. Recusa texto, tramas e outros objetos que não têm comprimento.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} coloca uma marca a cada comprimento indicado ao longo de uma linha, arco, círculo, polilinha, spline ou elipse, contando a partir da extremidade mais próxima de onde escolheu (um objeto fechado: a partir do seu início). Indique o comprimento escrevendo-o ou por dois pontos. A extremidade distante de um objeto aberto não recebe marca. `Block` coloca um bloco em cada marca em vez de um ponto. Recusa um comprimento de 0, um maior do que o objeto, e um que criasse mais de 32767 marcas.

### BOUNDARY

Aliases: `BO`, `BPOLY`. {{cmd:BOUNDARY}} faz uma polilinha fechada à volta da área que contém o ponto que escolher, a partir das linhas, arcos, círculos, polilinhas e curvas que a delimitam no ecrã. Os troços que estão sobre um arco ou círculo voltam como segmentos de arco; os troços de elipses e splines voltam como pequenos segmentos retos. Com `Islands` ativo (a definição inicial) cada área fechada dentro dela recebe também a sua própria polilinha. Continue a escolher pontos; Enter termina. Os objetos que delimitam a área ficam como estão. Indica-o quando nenhuma área fechada contém o ponto.

### BLEND

{{cmd:BLEND}} desenha uma spline entre as extremidades de duas curvas abertas. Escolha cada curva perto da extremidade a unir. `CONtinuity` escolhe `Tangent` (a spline sai e chega ao longo das duas curvas) ou `Smooth` (também curva da maneira como elas curvam nas extremidades); a escolha fica para a sessão. As duas curvas não são alteradas. Recusa objetos fechados e duas extremidades que já se encontram.

### REGION

Alias: `REG`. {{cmd:REGION}} transforma objetos fechados em regiões: áreas planas que pode unir, cortar e medir. Selecione círculos, polilinhas fechadas, elipses fechadas ou splines fechadas, ou linhas, arcos e polilinhas abertas que fecham um circuito extremidade com extremidade; cada circuito torna-se uma região e substitui os objetos de onde veio. Os arcos continuam arcos; as elipses e splines tornam-se pequenos segmentos retos. O que não está fechado e não fecha nenhum circuito fica como está, e indica quantos. No desenho uma região é uma ou mais polilinhas fechadas mantidas juntas como um grupo sem nome, por isso um clique seleciona a região inteira e uma cópia é uma região própria; os outros programas que abrem o ficheiro veem polilinhas fechadas.

Com regiões no desenho, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} no separador 2D atuam sobre regiões: `UNION` une as regiões selecionadas numa só (regiões separadas tornam-se uma região de vários contornos), `SUBTRACT` pede as regiões a subtrair e depois as que se retiram (um furo continua a fazer parte da região), `INTERSECT` mantém a área que todas partilham. Cada um indica a área do resultado e é um passo de anular. Recusam quando nada restaria ou nada é partilhado. No separador 3D, e num desenho sem regiões, os mesmos comandos atuam sobre sólidos como antes.

## Modificar

### MTEXT

Aliases: `MT`, `T`; ou {{ui:Parágrafo}} na barra de ferramentas. Texto de parágrafo que quebra segundo uma largura, escrito no próprio local.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: a largura entre os dois cantos é onde o texto quebra. `H` pede `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` e salta o segundo canto.
- Depois abre-se uma caixa sobre o desenho: escreva, {{key:Enter}} para um novo parágrafo, {{key:Mod+Enter}} ou um clique fora para terminar, {{key:Esc}} para cancelar. A sua barra define altura, espaçamento entre linhas, largura e alinhamento. Veja [Acrescentar texto e etiquetas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliases: `ED`, `DDEDIT`; ou faça duplo clique num texto. `Select a text to edit`, repetido até {{key:Enter}}: cada um abre na mesma caixa. Iniciado num texto selecionado ou com duplo clique, edita esse e termina.

### ERASE

Aliases: `E`, `DELETE`; ou prima {{key:Delete}} com objetos selecionados.

- `Select objects` (ignorado quando os objetos já estão selecionados)

### MOVE

Aliases: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, escrito como `dx,dy`.

### COPY

Aliases: `CO`, `CP`. Cópias tantas vezes quantos pontos der.

`Array` no pedido do segundo ponto faz uma fila de uma vez: indique o número de itens (o original conta como um), depois o ponto onde vai a primeira cópia; as outras seguem com o mesmo espaçamento. `Fit` faz desse ponto o lugar da última cópia, com as outras distribuídas uniformemente entre elas.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, repetido até Enter. `U` anula a última cópia.

### ROTATE

Aliases: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: graus, positivo no sentido contrário aos ponteiros do relógio; ou clique num ponto para rodar na sua direção.

### SCALE

Aliases: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: escreva um fator como `0.5` ou `2`. Um ponto clicado dá como fator a sua distância ao ponto base.

### MIRROR

Aliases: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliases: `AL`; ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Com dois pares: `Scale objects based on alignment points? [Yes/No] <N>`

Veja [Alinhar objetos](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ou a seleção), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` pede o ponto. A seleção mantém-se.

### DISTRIBUTE

- `Select objects` (três no mínimo), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Os dois exteriores mantêm-se; a seleção mantém-se.

### ALIGNPANEL

Aliases: `ALP`; ou {{ui:Modificar}} › {{ui:Mais}} › {{ui:Alinhar e distribuir}}. Abre o painel que executa ALIGNTO e DISTRIBUTE por cliques.

### LASER

Aliases: `LASERCUT`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Laser…}}. Abre o painel Laser sobre o desenho: o que cada camada faz (cortar, marcar, gravar, preencher, imagem), a pré-visualização, o G-code GRBL a guardar, e o enquadramento e envio por Web Serial. Veja [Enviar um desenho para um laser](topic:laser-cutting).

### STRETCH

Aliases: `S`; ou {{ui:Esticar}}. `Select objects to stretch`: arraste janelas de cruzamento (ou escreva `C`) por cima das extremidades a mover. `Specify base point [Displacement]`, `Specify second point`. Os pontos dentro das janelas movem-se: extremidades de linhas, vértices de polilinhas (os segmentos de arco mantêm a sua altura), pontos de cotas; círculos, elipses, texto, pontos e blocos movem-se por inteiro quando o seu centro ou ponto de inserção está dentro. Uma seleção feita antes do comando mantém as janelas de cruzamento (e laços) que a fizeram, por isso esticam da mesma forma. Sem janela, os objetos movem-se por inteiro.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliases: `AR`; ou {{ui:Matriz}}. `Select objects`, depois `Enter array type [Rectangular/POlar] <Rectangular>` (só ARRAY).

- Retangular começa com 4 colunas × 3 linhas, espaçadas 1.5 vezes o tamanho dos objetos, mostrado como pré-visualização. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pede colunas e linhas, `S` as distâncias entre colunas e entre linhas (negativo vai para a esquerda ou para baixo), `COL` e `R` uma direção cada.
- Polar pede `Specify center point of array`, começa com 6 itens à volta de todo o círculo, rodados. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` itens, `F` o ângulo a preencher (+ sentido contrário aos ponteiros, − sentido dos ponteiros), `ROT` Yes ou No.
- {{key:Enter}} (eXit) cria as cópias, como objetos simples. Um passo de anular.
- `AS` (ASsociative) alterna entre cópias simples e uma matriz que continua editável: um objeto que altera depois com {{cmd:ARRAYEDIT}}, pelos seus grips ou nas Propriedades. A escolha fica memorizada ({{cmd:ARRAYASSOCIATIVITY}}); começa com cópias simples.

### ARRAYPATH

Cópias ao longo de uma curva. `Select objects`, depois `Select path curve`: uma linha, arco, círculo, elipse, polilinha ou spline (não um dos objetos que estão a ser copiados em matriz). O caminho começa na extremidade mais próxima dos objetos, e o primeiro item são os objetos onde estão.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, com uma pré-visualização. `M`: `Divide` distribui os itens uniformemente por todo o caminho, `Measure` põe um a cada distância indicada ao longo dele. `I`: o número de itens (com Measure, 0 significa tantos quantos couberem; um número para além do fim do caminho fica limitado ao que cabe). `SP`: a distância entre itens ao longo do caminho (passa a Measure). `AL`: Yes roda cada item para seguir o caminho, No mantém-nos na vertical.
- `AS` como em {{cmd:ARRAY}}. Com ele ativo, a matriz guarda a sua própria cópia da forma do caminho: editar depois a curva do caminho não move os itens.
- Recusa um caminho que não é uma curva, e um único item.

### ARRAYEDIT

Altera uma matriz feita com ASsociative. `Select array` (ou selecione-a primeiro). Imprime como está a matriz agora e depois pergunta até {{key:Enter}}:

- Retangular: `COL` colunas e o seu espaçamento, `R` linhas e o seu espaçamento, `A` o ângulo em que as colunas correm.
- Polar: `I` itens, `F` o ângulo de preenchimento, `ROT` rodar os itens Yes ou No.
- Caminho: `M` Divide ou Measure, `I` itens, `SP` espaçamento, `AL` alinhar com o caminho.
- `S` (Source) abre os objetos que a matriz repete, por si próprios, como o editor de blocos. Desenhe e edite aí; {{cmd:ARRAYCLOSE}} guarda ou descarta, e cada item segue.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, depois clique nos itens a substituir, {{key:Enter}}. Esses itens passam a mostrar a substituição; os objetos de substituição saem do desenho e passam a viver na matriz. `RES` (RESet) volta a mostrar os objetos de origem em cada item.
- Cada alteração é um passo de anular. Recusa cópias simples, uma referência de bloco simples e uma matriz numa camada bloqueada.

Os mesmos números estão nas Propriedades em Matriz, e a matriz tem grips: o seu ponto base move-a, o grip no segundo item define o espaçamento, o grip depois do último item define a contagem (polar: o segundo item define quantos itens, o último item o ângulo de preenchimento). {{cmd:EXPLODE}} transforma uma matriz de novo em cópias simples.

### ARRAYCLOSE

Termina {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Indica-o quando não há objetos de origem de matriz abertos. {{cmd:BCLOSE}} faz o mesmo.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Define com o que {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR e {{cmd:ARRAYPATH}} começam; a sua opção `AS` altera a mesma definição. Memorizado neste navegador.

### OFFSET

Aliases: `O`. Linhas, arcos, círculos e polilinhas.

Quando uma polilinha se desloca para fora e os seus segmentos retos se separam num canto, {{cmd:OFFSETGAPTYPE}} decide como se fecha o intervalo.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, depois `Specify point on side to offset` (ou, com Through, `Specify through point`), repetido até Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: como {{cmd:OFFSET}} fecha os intervalos nos cantos exteriores de uma polilinha. `0` prolonga os segmentos até se encontrarem (a definição inicial), `1` une-os com um arco à volta do canto antigo, `2` com um corte reto. Os cantos interiores e os segmentos de arco não são afetados. Mantido para esta sessão.

### EXTRIM

{{cmd:EXTRIM}} apara tudo de um lado de uma aresta. Escolha a aresta de corte (uma linha, arco, círculo, polilinha, elipse, spline ou linha de construção), depois um ponto do lado a limpar: cada linha, arco, círculo, polilinha e linha de construção que atravessa a aresta perde a sua parte desse lado, a partir da aresta. Enquanto escolhe o lado, as partes que sairiam seguem o ponteiro. Para uma aresta fechada os lados são o interior e o exterior. Os objetos que apenas tocam a aresta, e o texto, as tramas, splines e elipses que a atravessam, ficam como estão. Um passo de anular.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: como {{cmd:TRIM}} e {{cmd:EXTEND}} começam. `1` Rápido: cada objeto é uma aresta de corte ou limite. `0` Normal: pedem primeiro as arestas. Também `(setvar "TRIMEXTENDMODE" 0)` em LISP.

### TRIM

Aliases: `TR`. Imprime primeiro `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. No modo Rápido, cada objeto visível é uma aresta de corte, e um objeto que nada atravessa é apagado; no modo Normal pede primeiro `Select cutting edges (Enter = every object)` e corta apenas nelas.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, repetido: clique na parte a remover (fica cinzenta e a tracejado enquanto o ponteiro está sobre ela), arraste um caminho sobre várias partes (todas vão num só passo), ou clique em dois espaços vazios para uma vedação entre eles. {{key:Shift}} prolonga em vez disso. `T` escolhe arestas de corte (modo Normal), `F` pede pontos de vedação, `C` dois cantos de janela (as partes parcialmente dentro vão), `O` pede `Enter a trim mode option [Quick/Standard]`, `E` pede `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` apaga os objetos que selecionar, `U` anula a última escolha ou arrastamento. Enter termina. Veja [Aparar e prolongar](topic:trim-and-extend).

- Um clique numa trama corta a trama: as arestas de corte dividem a área tramada, e a parte em que clicou é retirada (não fica nenhum contorno desenhado onde estava). A trama mantém o seu padrão ou gradiente; uma trama que estava associada ao seu contorno deixa de o estar, porque já não o preenche. Indica-o quando nenhuma aresta de corte divide a trama aí, quando o clique está fora da trama, e quando nada restaria (use {{cmd:ERASE}}). Um caminho ou vedação arrastado não corta tramas.

### EXTEND

Aliases: `EX`. Igual a TRIM ao contrário: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Um clique alonga a extremidade mais próxima até ao próximo limite; um caminho ou vedação arrastado alonga cada objeto que atravessa; {{key:Shift}} apara. `B` escolhe arestas-limite (modo Normal). Modo e Edge são partilhados com TRIM.

### LINKVIEWS

Aliases: `SYNCVIEWS`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Ligar as vistas dos painéis}}, ou o ícone de ligação nos separadores do desenho. `Link the panes' views [ON/OFF]` (Enter muda para o outro estado): enquanto ligado, um deslocamento ou zoom no painel ativo move todos os painéis que mostram o mesmo tipo de espaço. Veja [Dividir o ecrã](topic:split-screen).

### OPENIN3D

Sem aliases; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Abrir no ModelCraft}}, quando a aplicação de modelação 3D recebe um desenho entregue. Abre-o aí num novo separador, como DWG (nada é enviado). Se o navegador bloquear o separador, indica-o.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: o que premir e arrastar num espaço vazio desenha. O mesmo que Definições › CadCraft › Arrastar para selecionar. Veja [Seleção por laço](topic:lasso-selection).

### FILLET

Aliases: `F`. Linhas, arcos, círculos e polilinhas. Imprime primeiro `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pede `Specify fillet radius <last>`. `T` pede `Enter Trim mode option [Trim/No trim]`: com No trim os objetos ficam como estão e apenas se acrescenta o arco.
  - `M` mantém o comando ativo para mais cantos até {{key:Enter}}; `U` anula o último canto sem sair do comando.
  - `P` pede `Select 2D polyline [Radius]` e arredonda cada canto onde se encontram dois segmentos retos. Os arredondamentos que já tem são substituídos pelo novo raio; raio 0 retira-os. Os cantos cujos lados são curtos demais para o raio ficam por fazer e são contados.
- `Select second object or shift-select to apply corner [Radius]`. Mantenha {{key:Shift}} premido ao clicar para um canto vivo, seja qual for o raio.

Clique em cada objeto na parte que quer manter. Duas linhas que não se encontram são prolongadas. Duas linhas paralelas recebem um semicírculo através do intervalo, na extremidade da primeira linha mais próxima do seu clique. Um círculo nunca é cortado. Dois segmentos de uma mesma polilinha lado a lado recebem o arco dentro da polilinha; uma polilinha e outro objeto funcionam quando o corte cai no primeiro ou no último segmento da polilinha.

### CHAMFER

Aliases: `CHA`. Linhas e os segmentos retos de polilinhas. Imprime primeiro as distâncias atuais (ou comprimento e ângulo).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pede `Specify first chamfer distance <last>` e `Specify second chamfer distance <the first>`: a primeira é cortada da primeira linha que escolher, a segunda da outra.
  - `A` pede `Specify chamfer length on the first line` e `Specify chamfer angle from the first line`.
  - `E` (mEthod) escolhe qual das duas o próximo chanfro usa. `T`, `M`, `U` e `P` funcionam como em {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+clique faz um canto vivo.

Uma distância maior do que a linha é recusada (`Distance is too large.`).

### BREAK and BREAKATPOINT

Aliases: `BR`. `Select object` (onde clica é o primeiro ponto), `Specify second break point [First point]`; `F` pede `Specify first break point` e `Specify second break point`. A parte entre eles desaparece; num círculo, no sentido contrário aos ponteiros a partir do primeiro ponto. BREAKATPOINT pede `Specify break point` e divide o objeto em dois aí (não um círculo).

### LENGTHEN

Aliases: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: uma escolha imprime `Current length` (e o ângulo incluído de um arco) e pergunta de novo. `DE` pede `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` arrasta. Depois `Select an object to change [Undo]`, repetido: move-se a extremidade mais próxima do clique. Linhas, arcos e polilinhas abertas.

### JOIN

Aliases: `J`. `Select objects to join`. Linhas, arcos e polilinhas abertas que se encontram extremidade com extremidade tornam-se polilinhas (fechadas quando a cadeia fecha); linhas sobre uma mesma reta tornam-se uma linha; arcos de um mesmo círculo tornam-se um arco ou o círculo. O histórico indica quantos objetos se uniram e quantos não.

### MATCHPROP

Aliases: `MA`, `PAINTER`. `Select source object`, depois `Select destination objects [Settings]` e {{key:Enter}}. Copia camada e cor, e entre objetos do mesmo tipo a altura e largura do texto, os tamanhos das cotas ou o padrão da trama. `S` pede `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, repetido até {{key:Enter}}; a escolha fica memorizada para a sessão.

### EXPLODE

Aliases: `X`. As polilinhas tornam-se linhas e arcos, as referências de bloco tornam-se os seus objetos, as cotas tornam-se linhas, setas e texto. Uma matriz que continua editável ({{cmd:ARRAYEDIT}}) torna-se cópias simples dos seus objetos.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} dá aos objetos selecionados um nome que partilham. Selecione os objetos, depois escreva um nome (sem espaços; `?` lista os grupos; Enter cria um grupo sem nome) e, para um grupo com nome, uma descrição opcional. A partir daí, um clique em qualquer deles, ou uma janela que apanhe um, seleciona-os todos, por isso movem-se, copiam-se e apagam-se em conjunto; cada objeto continua a ser o seu próprio objeto. Um objeto pode estar em vários grupos. Uma cópia de um grupo inteiro é um novo grupo sem nome; uma cópia de um membro sozinho junta-se ao grupo. Os grupos pertencem ao espaço onde foram criados (o modelo ou uma folha). São mantidos quando guarda como DWG ou DXF e volta a abrir o ficheiro no CadCraft; os ficheiros DXF 2000 transportam-nos também como objetos de grupo para outros programas, e os grupos criados noutro programa são lidos quando se abre um DXF ou DWG.

### UNGROUP

{{cmd:UNGROUP}} desfaz grupos: selecione objetos dos grupos (cada grupo em que estão é desfeito) ou escreva `Name` e o nome do grupo. Os objetos ficam no desenho. Um passo de anular repõe os grupos.

### GROUPEDIT

{{cmd:GROUPEDIT}} altera um grupo. Escolha um dos seus objetos, ou `Name` e o seu nome; um grupo que já está selecionado é tomado tal como está. Depois: `Add` objetos (escolhidos um a um, não grupo a grupo), `Remove` objetos, `REName` o grupo, altere a sua `Description`, ou defina `Selectable` (se um clique num objeto seleciona o grupo inteiro). `eXit` ou Enter termina. Um grupo sem objetos restantes desaparece.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: com `1` (a definição inicial) um clique ou janela num objeto agrupado seleciona o grupo inteiro; com `0` objetos individuais, para poder editar um membro. Mantido para esta sessão.

## Área de transferência

A área de transferência do próprio CadCraft: funciona dentro de um desenho, entre desenhos e entre separadores do CadCraft neste navegador. Veja [Copiar, colar e duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ou {{ui:Copiar}} no grupo {{ui:Editar}}. Copia objetos para a área de transferência, com os blocos e camadas que usam. Os objetos ficam selecionados.

- `Select objects to copy` (ignorado quando os objetos já estão selecionados)

### CUTCLIP

{{key:Mod+X}}, ou {{ui:Cortar}} no menu {{ui:Mais}}. Copia objetos para a área de transferência e depois apaga-os (um passo de anular).

- `Select objects to cut` (ignorado quando os objetos já estão selecionados)

### COPYBASE

Copia objetos para a área de transferência com um ponto base que escolher; colar coloca esse ponto.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ou {{ui:Colar}} no grupo {{ui:Editar}}. A cópia segue o cursor, pendendo do canto inferior esquerdo da sua extensão (ou do seu centro, ou do ponto `COPYBASE`; veja [Definições do CadCraft](topic:settings)).

- `Specify insertion point`

Os objetos colados ficam selecionados. Um bloco que o desenho já tem com o mesmo nome mantém a definição deste desenho.

Quando uma área copiada no MarkupCraft é mais recente do que o que o CadCraft copiou (e tem menos de 6 horas), {{key:Mod+V}} e `PASTECLIP` colam essa área em vez disso: veja `PASTEAREA`.

### PASTEAREA

Aliases: `PAREA`. {{ui:Colar uma área copiada}} no menu {{ui:Mais}}. Cola uma área copiada com {{ui:Copiar área}} no MarkupCraft como imagem à sua escala real. Veja [Imagens num desenho](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (só quando a folha não tinha escala de desenho): um número, {{key:Enter}} para o tamanho do papel, ou `P`, depois `First point on the pasted area`, `Second point on the pasted area` e a sua distância real.

### PASTEORIG

{{key:Mod+Shift+V}}, ou {{ui:Colar no mesmo sítio}} no menu {{ui:Mais}}. Cola nas coordenadas de onde os objetos foram copiados. Não pergunta nada.

### DUPLICATE

Aliases: `DUP`. {{key:Mod+D}}, ou {{ui:Duplicar e mover}} no menu {{ui:Mais}}. Uma cópia dos objetos move-se com o ponteiro a partir de onde está; {{key:Esc}} não deixa nada. Não usa a área de transferência.

- `Select objects to duplicate` (ignorado quando já estão selecionados)
- `Specify where the copy goes (Esc leaves nothing)`: clique, escreva um ponto, `@dx,dy` (a partir de onde estava o ponteiro), ou uma distância na direção do cursor.

### SELECT

Pede `Select objects` (com todas as opções abaixo) e deixa selecionado o que escolheu, para o comando seguinte ou para `P` mais tarde.

### QSELECT

Aliases: `QS`. No navegador, a caixa {{ui:Seleção rápida}} (veja [Selecionar objetos](topic:select-objects#select-by-a-rule-quick-select)). Sem ela, a linha de comandos pede `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` e `Enter value`. As correspondências tornam-se a seleção.

### SELECTSIMILAR

Aliases: `SIM`. `Select objects [SEttings]` (ou a seleção atual): seleciona cada objeto do mesmo tipo com a mesma camada e cor (e nome de bloco, padrão de trama). `SE` pede `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, repetido até {{key:Enter}}.

### FIND

Sem aliases; ou {{ui:Editar}} › {{ui:Mais}} › {{ui:Localizar e substituir}}. No navegador, a caixa {{ui:Localizar e substituir}} (veja [Acrescentar texto e etiquetas](topic:text#find-and-replace-words)). Sem ela: `Enter text to find`, depois `Enter replacement text (Enter: select what is found)`. Procura no texto, nos valores de atributos e no texto das cotas, no separador aberto ou na seleção.

### SELECTALL and DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) seleciona cada objeto que pode editar no separador aberto. `DESELECT` (aliases `AI_DESELECT`, `SELECTNONE`; ou {{key:Esc}}) limpa a seleção.

## Cotas

### DIMLINEAR

Aliases: `DLI`, `DIMLIN`. Distância horizontal ou vertical.

- `Specify first extension line origin [Select object]` (Enter ou `S`: `Select object to dimension`, depois clique num segmento de linha, arco, círculo ou polilinha)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pede o texto (`<>` é o valor medido), `H` e `V` fixam a direção, `R` pede `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliases: `DAL`, `DIMALI`. A distância real entre dois pontos.

- Origens como em {{cmd:DIMLINEAR}}, depois `Specify dimension line location [Text]`.

### DIMANGULAR

Aliases: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Arco: o seu ângulo. Círculo: `Specify second angle endpoint`. Linha: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: clique dentro do ângulo a medir.

### DIMRADIUS and DIMDIAMETER

Aliases: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, depois `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliases: `DCO`, `DIMCONT`. Continua a partir da última cota linear ou alinhada feita (ou pede `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, repetido até Enter.

### DIMBASELINE

Aliases: `DBA`, `DIMBASE`. Como {{cmd:DIMCONTINUE}}, mas cada cota parte da primeira origem e fica empilhada mais para fora.

### DIMORDINATE

Aliases: `DOR`, `DIMORD`. `Specify feature location`, depois `Specify leader endpoint [Xdatum/Ydatum/Text]`. Escreve a distância da característica à origem do UCS ao longo de X ou de Y, numa linha de chamada: uma linha que vai sobretudo para cima ou para baixo lê X, uma que vai para o lado lê Y; `Xdatum` e `Ydatum` fixam qual. Defina primeiro a origem com {{cmd:UCS}} (sem ela é 0,0 do desenho). Os grips movem a característica, a origem e a extremidade da linha, e o valor acompanha. Guardada como uma cota de ordenada real em DWG e DXF. Recusa uma extremidade de linha sobre a própria característica.

### DIMARC

Aliases: `DAR`. `Select arc or polyline arc segment`, depois `Specify arc length dimension location [Text]`. Mede ao longo do arco (não da corda) e escreve o símbolo de arco antes do valor. Recusa um círculo completo, uma linha ou um segmento reto de polilinha. Um DWG mantém-na como cota de comprimento de arco; um DXF mantém-na como cota angular com o comprimento como texto, e o CadCraft volta a abri-la como cota de comprimento de arco.

### DIMJOGGED

Aliases: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Uma cota de raio para uma curva cujo centro está longe ou fora da folha: a linha de cota começa no ponto que dá em vez do centro, com um ressalto, e continua a escrever o raio real. Um DWG mantém-na como cota de raio com ressalto; um DXF mantém-na como cota de raio, e o CadCraft volta a abri-la com ressalto.

### DIMJOGLINE

Aliases: `DJL`. `Select dimension to add jog [Remove]`, depois `Specify jog location (or press Enter)`. Coloca um símbolo de ressalto na linha de uma cota linear ou alinhada, para mostrar que a distância não está desenhada à escala; o valor não muda. `Remove` retira-o. Recusa outros tipos de cota.

### QDIM

Sem aliases. `Select geometry to dimension`, depois `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Cota vários objetos num só passo, a partir das extremidades de linhas e segmentos de polilinha, centros de círculos e arcos, pontos e referências de bloco. Uma posição acima ou abaixo dos objetos mede na horizontal; uma ao lado deles mede na vertical. `Continuous` encadeia os pontos, `Baseline` mede todos a partir do primeiro, `Staggered` aninha pares do meio para fora, `Ordinate` dá a cada ponto a sua distância à referência (`datumPoint` escolhe uma nova), `Radius` e `Diameter` cotam cada círculo e arco escolhido. O modo fica memorizado. Tudo o que cria é um passo de anular. Indica-o quando há menos de dois pontos, ou nenhum arco ou círculo para Radius e Diameter.

### DIMBREAK

Aliases: `DBREAK`. `Select dimensions to add or remove breaks`, depois `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` deixa um intervalo nas linhas de cota e de extensão sempre que outro objeto as atravessa, e recalcula os intervalos quando esses objetos ou a cota se movem. `Manual` (uma cota) pede dois pontos e deixa um intervalo entre eles. `Remove` retira todos os intervalos. O intervalo é 1.5 vezes a altura do texto da cota.

### DIMSPACE

Sem aliases. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Move as linhas de cota de cotas lineares e alinhadas paralelas (ou angulares sobre o mesmo vértice) para ficarem à mesma distância umas das outras, contada a partir da cota base, cada uma do lado em que está. `0` alinha-as com a base; `Auto` é o dobro da altura do texto da cota base. As cotas que não são paralelas à base ficam como estão.

### DIMINSPECT

Sem aliases. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Desenha uma moldura à volta do valor, com uma etiqueta antes dele e a taxa de inspeção depois. `remove` retira a moldura. O texto de tolerância mantém-se com o valor.

### DIMOVERRIDE

Aliases: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, de novo até Enter, depois `Select dimensions`. Altera essas definições apenas nas cotas selecionadas; o estilo da cota não muda. Aceita as variáveis que são um número ou um interruptor (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` devolve as cotas selecionadas ao seu estilo. Recusa um nome que não seja essa variável e um valor que não pode aceitar.

### DIMREASSOCIATE

Aliases: `DRE`, `DIMREASSOC`. `Select dimensions`, depois para cada uma as suas origens das linhas de extensão (`Specify first extension line origin on an object`: encaixa numa extremidade ou no meio de uma linha, num canto de polilinha, num centro; Enter mantém esse ponto livre), ou, para uma cota de raio, diâmetro, raio com ressalto ou comprimento de arco, `Select arc or circle`. A cota fica então ligada a esses objetos: quando se movem ou mudam de tamanho segue-os no mesmo passo de anular e volta a medir. Mover um ponto ligado à mão, ou apagar o objeto, termina essa ligação. A ligação é guardada em DWG e DXF 2000 como dados próprios do CadCraft; os outros programas veem uma cota comum.

### DIMDISASSOCIATE

Aliases: `DDA`, `DIMDISASSOC`. `Select dimensions`. Liberta-as dos objetos a que estão ligadas; nada se move.

### CENTERMARK

Aliases: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, de novo até Enter. Desenha uma cruz no centro e quatro linhas de eixo até um pouco além da curva (tipo de linha CENTER), como linhas simples na camada atual; dimensionadas a partir do tamanho da seta e da escala global das definições de cota atuais, rodadas com o UCS. Não seguem o círculo se este se mover.

### CENTERLINE

Aliases: `CL`. `Select first line`, `Select second line`. Desenha uma linha a meio caminho entre duas linhas (ao longo da bissetriz quando se encontram), um pouco mais comprida do que elas, no tipo de linha CENTER. Uma linha simples: não segue as duas linhas.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sem aliases. Cada um pede `Enter new value for … <current>` e define esse tamanho para **novas** cotas: escala global, altura do texto, tamanho da seta, casas decimais (até 8), intervalo à volta do texto, extensão para além da linha de cota, deslocamento da origem. Veja [Definir tamanhos de cotas](topic:dimension-settings).

### DIMLUNIT

Definição de cota: apenas o formato das novas cotas (1 científico, 2 decimal, 3 engenharia, 4 arquitetónico, 5 fracionário).

### DIMSTYLE and -DIMSTYLE

Aliases: `DST`, `DDIM`, `D`. O gestor de estilos de cota: {{ui:Tornar atual}}, {{ui:Novo…}}, {{ui:Modificar…}}, {{ui:Mudar o nome…}}, {{ui:Eliminar}}, {{ui:Comparar…}}, {{ui:Aplicar à seleção}}. `-DIMSTYLE` na linha de comandos: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Veja [Definir tamanhos de cotas](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, depois as cotas (ou as já selecionadas). New pede o texto (`<>` = a medição); Rotate um ângulo (0 repõe o texto); Oblique o ângulo das linhas de extensão a partir do eixo X (Enter = nenhum; só cotas lineares e alinhadas). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Veja [Definir tamanhos de cotas](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliases: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ou com cotas selecionadas `Units in the text of the selected dimensions`. Escreve o comprimento medido nessa unidade com a unidade depois dele (DIMLFAC e um sufixo DIMPOST); `D` volta às unidades do desenho. Veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliases: `RC`. Imprime `Arc length: … Type: …`, depois `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Retangular pede `Specify opposite corner`; Poligonal `Specify next point (Enter closes the cloud) [Undo]`; Mão livre segue o ponteiro até um clique ou {{key:Enter}}; `O` pede `Select object` e `Reverse direction? [Yes/No] <N>` e transforma o objeto na nuvem. `A` pede `Specify the length of each arc`. `R`, `P` e `F` escolhem o tipo para a próxima nuvem. O resultado é uma polilinha fechada de arcos.

### MLEADER

Aliases: `MLD`; ou {{ui:Chamada}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, depois o texto na caixa no local (ou, sem ela, `Enter text (an empty line ends)`). `Block` pede primeiro um nome de bloco e a chamada múltipla mostra esse bloco em vez de texto. Mais linhas de chamada: {{cmd:MLEADEREDIT}}. Guardada como uma chamada múltipla real em DWG; o DXF mantém as linhas, a seta e o texto que desenha.

### MLEADEREDIT

Aliases: `MLE`. `Select a multileader`, depois `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: cada ponto acrescenta uma linha de chamada desde uma nova seta até ao mesmo ponto de chegada, até Enter. `Remove leaders` retira a linha de chamada em que clicar (uma chamada múltipla mantém pelo menos uma). `Block content` pede um nome de bloco e mostra esse bloco em vez do texto (são pedidos os seus atributos); `Text content` repõe o texto. Cada linha de chamada tem o seu próprio grip. Um DWG mantém todas as linhas de chamada e o bloco numa só chamada múltipla.

### MLEADERALIGN

Aliases: `MLA`. `Select multileaders`, depois `Select multileader to align to [Distribute/Spacing/Use current spacing]` e `Specify direction`. Move os pontos de chegada das outras chamadas múltiplas (e o seu texto ou bloco) para a linha que passa pelo ponto de chegada da escolhida, nessa direção; as setas ficam onde apontam. `Spacing` também as põe a igual distância; `Distribute` pede dois pontos e distribui-as uniformemente entre eles. Precisa de pelo menos duas chamadas múltiplas.

### MLEADERCOLLECT

Aliases: `MLC`. `Select multileaders`, depois `Specify collected multileader location [Vertical/Horizontal]` (Enter mantém o lugar da primeira). Faz uma só chamada múltipla a partir de várias: o conteúdo de bloco vai para um novo bloco que contém cada bloco lado a lado ou um por baixo do outro; o conteúdo de texto torna-se uma só nota com uma linha para cada. A primeira chamada múltipla mantém as suas linhas de chamada; as outras são removidas. Recusa uma mistura de texto e conteúdo de bloco.

### TABLE

Aliases: `TB`; ou {{ui:Anotar}} › {{ui:Mais}} › {{ui:Tabela}}. Cria uma tabela: um objeto que move, copia, roda, escala e imprime como qualquer outro, com as suas células guardadas como dados.

- `Number of data rows or [Paste/File/Style] <3>`, depois `Number of columns <3>`, `Text height` e `Top left corner of the table`. A tabela recebe uma linha de título (uma célula fundida) e uma linha de cabeçalho acima das linhas de dados.
- `P`: uma tabela a partir de células de folha de cálculo na área de transferência (texto com um tabulador entre células). Premir {{key:Ctrl+V}} com essas células na área de transferência faz o mesmo, a menos que a cópia do próprio CadCraft seja a mais recente (ou o CadCraft não consiga distinguir: então cola a sua própria cópia e indica-o). `F`: uma tabela a partir de um ficheiro `.csv` ou separado por tabuladores. A primeira linha torna-se a linha de cabeçalho; as larguras das colunas ajustam-se ao texto.
- `S`: escolha o estilo da tabela para esta tabela (veja {{cmd:TABLESTYLE}}).
- Recusa uma contagem de linhas ou colunas que não seja um número inteiro, e mais células do que uma tabela suporta (2,000 linhas, 200 colunas, 40,000 células).
- {{cmd:EXPLODE}} transforma uma tabela em linhas e texto. Guardada como DWG, uma tabela é um objeto de tabela real que outros programas podem editar; guardada como DXF é um bloco que a desenha, e o CadCraft volta a abri-la como tabela.

### TABLEDIT

Aliases: `TABLEEDIT`, `TABEDIT`; ou faça duplo clique numa célula. Edita uma tabela.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Clique numa célula, ou com uma tabela selecionada escreva o seu nome (`B3`: coluna B, linha 3; a linha de título é a linha 1). No navegador abre-se uma caixa sobre a célula: {{key:Enter}} mantém o texto, {{key:Tab}} passa à célula seguinte, {{key:Alt+Enter}} inicia uma nova linha, {{key:Esc}} deixa a célula como estava.
- Um texto que começa com `=` é uma fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, com `+ - * / ^`, parênteses e funções como `sqrt` e `round`. A célula mostra o valor; uma fórmula que nomeia a sua própria célula, uma célula fora da tabela ou uma célula sem número mostra `####` e a linha de comandos indica o motivo.
- `R` / `C`: `Insert` ou `Delete` linhas ou colunas numa célula escolhida (quantas, e acima ou abaixo, à esquerda ou à direita). As fórmulas seguem as células que nomeiam.
- `S`: a largura da coluna e a altura da linha. Uma linha nunca fica mais baixa do que o seu texto precisa. Uma tabela selecionada tem também um grip em cada bordo de coluna e de linha.
- `M`: fundir de uma célula escolhida até outra; `U`: desfundir. `A`: alinhamento (`TL` superior esquerdo … `MC` centro … `BR` inferior direito). `H`: a altura de texto própria desta célula (0 = a do estilo). `K`: tornar a linha um título, cabeçalho ou linha de dados. `CL`: esvaziar a célula.
- Recusa uma tabela numa camada bloqueada, apagar todas as linhas ou colunas, e uma fusão que dividiria outra célula fundida em duas.

### TABLESTYLE

Aliases: `TS`. Lista os estilos de tabela com quantas tabelas usa cada um, depois `Table style: [New/Set/Edit/Delete/Apply]`.

- Um estilo guarda a altura do texto e o alinhamento das linhas de título, cabeçalho e dados, a margem da célula, e que bordas são desenhadas (exteriores, entre linhas, entre colunas).
- `N` cria um estilo a partir do atual e torna-o atual; `S` define o estilo atual (as novas tabelas o recebem); `E` edita um: as tabelas que o usam são redesenhadas; `A` dá o estilo atual às tabelas selecionadas; `D` apaga um (não o Normal, nem o atual; as tabelas que o usavam mantêm o seu aspeto).
- Os estilos são guardados com o desenho (DWG e DXF).

### TABLEEXPORT

Guarda o que uma tabela mostra como ficheiro CSV (uma fórmula como o seu valor). `Select a table`, ou selecione uma primeiro. As células de texto que começam com `=`, `+`, `-` ou `@` recebem um `'` no início para que uma folha de cálculo não as execute.

### TABLEPASTE

Aliases: `PASTETABLE`. Cria uma tabela a partir de células de folha de cálculo na área de transferência, depois pergunta o canto superior esquerdo. O mesmo que {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliases: `DL`. `Data link: [New/List/Remove] <New>`. `N` pede um ficheiro CSV, coloca uma tabela dele e memoriza o nome do ficheiro; `L` lista as ligações com o seu ficheiro, tamanho, quando foi lido e quantas tabelas o usam; `R` remove uma ligação (as suas tabelas ficam como tabelas simples).

### DATALINKUPDATE

Aliases: `DLU`. Lê de novo o ficheiro de uma ligação de dados e volta a preencher as tabelas ligadas a ele (linhas e colunas são acrescentadas ou removidas para coincidir). Um navegador não consegue abrir um ficheiro por si, por isso pede que escolha o ficheiro de novo. Com várias ligações, pergunta qual.

### FIELD

Coloca um campo no desenho: texto que se calcula sozinho. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: agora, ou a data guardada, criada ou impressa, e um formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: o nome do ficheiro, com ou sem a sua extensão. `S`: o número da folha, o seu título, ou quantas folhas há. `P`: uma propriedade do desenho pelo nome (veja {{cmd:DWGPROPS}}). `O`: escolha um objeto, depois o que ler (área, comprimento, perímetro, raio, diâmetro, camada, nome, x, y, texto, rotação, cor) e as casas decimais. `E`: uma fórmula. `C`: um texto com códigos escritos tal como são, como `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Depois `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: um texto escolhido recebe o campo acrescentado ao que já contém; uma célula de tabela também; uma referência de bloco pergunta qual atributo; {{key:Enter}} pede uma altura e um ponto para um novo texto.
- No ecrã um campo tem um fundo cinzento claro; uma impressão ou um PDF nunca o tem. Escrever por cima do texto de um campo à mão termina o campo. Um campo que não pode ser calculado mostra `####`.
- O campo de um objeto encontra o seu objeto pela chave que o CadCraft guarda nos objetos (Definições › CadCraft › Ficheiros compatíveis com fusão); com as chaves desligadas, recusa.

### UPDATEFIELD

Aliases: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` define quando os campos se atualizam sozinhos: escreva as letras de `O` abrir, `S` guardar, `P` imprimir, `R` regenerar (as quatro para começar), ou `NONE`.

### DWGPROPS

Aliases: `DRAWINGPROPS`. Lista as propriedades do desenho, depois `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. As seis primeiras são as que o painel {{ui:Detalhes do desenho}} mostra; `U` acrescenta o seu próprio nome e valor, `R` remove um. Os campos lêem-nos (`%<prop:title>%`, `%<prop:Client>%`) e seguem de imediato. Recusa um nome próprio que seja um dos incorporados ou que tenha `%`, `<`, `>`, aspas ou uma barra invertida.

## Paramétrico

Veja [Restringir um desenho](topic:constraints) e [Usar parâmetros e equações](topic:parameters). As restrições funcionam no separador {{ui:Modelo}}.

### GEOMCONSTRAINT e os comandos GC

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, depois os pedidos desse comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (o segundo move-se).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT e os comandos DC

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (um número, uma expressão, ou `name=expression`).
- {{cmd:DCALIGNED}}: como acima, com `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` pede as tolerâncias de distância e de ângulo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; as suas restrições saem.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, depois `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (aliases `PAR`, `PARAM`) abre o painel {{ui:Parâmetros}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Transfere uma macro (.swb) que reconstrói o modelo como um só esboço restringido no SolidWorks. Veja [Mover esboços de e para outros modeladores de peças](topic:solidworks-sketches).

## Blocos

### ANNOSCALE

Aliases: `CANNOSCALE`. Diz a escala de anotação do desenho e quantos objetos anotativos tem, depois pede `New annotation scale`: escreva `1:50`, `1:100`, `2:1`, um número simples (`50` é 1:50) ou o nome de uma das escalas próprias do desenho. Cada texto e cota anotativos é redimensionado para imprimirem com o mesmo tamanho na nova escala, numa só operação de anular; os objetos que não são anotativos ficam em paz, e também um objeto que mantém uma lista de escalas sem a nova ({{cmd:OBJECTSCALE}}). Veja [Unidades, formatos de papel e escalas](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliases: `OBJSCALE`. `Select annotative objects`, depois `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Um texto ou cota anotativos mantém uma lista de escalas de anotação. `Add` e `Delete` pedem uma escala (`1:50`, `2:1`, um número simples, ou o nome de uma das escalas próprias do desenho); `Current scale` acrescenta a escala de anotação do desenho; `List` imprime as escalas de cada objeto. Uma viewport cuja escala está na lista de um objeto mostra o objeto no tamanho que imprime a sua altura no papel a essa escala, no ecrã e nas impressões. A última escala não pode ser apagada. Os objetos que não são anotativos ficam de fora: ative Anotativo nas Propriedades primeiro. As listas são guardadas em DWG e DXF como dados próprios do CadCraft. Veja [Unidades, formatos de papel e escalas](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliases: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Ligado (como começa um desenho): um objeto anotativo também aparece numa viewport, ou no modelo, cuja escala não está na sua lista, no tamanho que tem. Desligado: não aparece aí, e não pode ser escolhido no modelo. O interruptor é um passo de anular; não fica guardado no ficheiro.

### SCALELISTEDIT

Aliases: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` até {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit e Delete pedem o nome da escala. As escalas próprias do desenho juntam-se às listas de escalas da viewport e da impressão e são guardadas com o desenho. Veja [Unidades, formatos de papel e escalas](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT e PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: pontos por onde a curva passa; `Close`, `Undo`, depois `Start tangent` e `End tangent` (um ponto, ou {{key:Enter}}). Method › Control vertices pede um grau (1 a 5) e desenha a partir de um polígono de controlo. Object transforma polilinhas em splines pelos seus vértices. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` para vários objetos; linhas, arcos e splines são oferecidos como polilinhas primeiro. Veja [Splines e polilinhas](topic:splines).

### BLOCK

Aliases: `B`, `BMAKE`.

- `Enter block name`. Se existir: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. São substituídos por uma referência ao novo bloco.

### WBLOCK

Aliases: `W`, `-WBLOCK`. Escreve um bloco, alguns objetos ou o desenho inteiro para um novo ficheiro DWG ou DXF. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (torna-se a origem do novo desenho), `Select objects`, depois `File format [DWG/DXF/R12 DXF]` e `File name for the new drawing`, depois `What to do with the objects [Retain/Convert to block/Delete]`. Convert substitui-os por uma referência a um bloco com o nome do ficheiro; Delete remove-os.
- **Block**: `Block to write out`. Os objetos do próprio bloco, com o seu ponto base como origem, blocos aninhados incluídos.
- **Entire drawing**: cada objeto do espaço do modelo. As folhas não são escritas; use {{cmd:SAVEAS}} para uma cópia que as mantenha.

O novo ficheiro contém apenas as camadas, tipos de linha, estilos de texto e de cota e blocos que os seus objetos usam, e as unidades do desenho. A versão de um DWG é a que {{cmd:SAVEAS}} usou por último. No navegador o ficheiro é transferido; no Studio abre-se a caixa de guardar.

### ATTDEF

Aliases: `ATT`, `DDATTDEF`, `-ATTDEF`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Definir atributo}}. Imprime os modos, depois `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` quando é constante), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} leva as definições de atributos para dentro do bloco.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, ou faça duplo clique numa referência com atributos; {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar atributos}}): `Select a block reference with attributes`, depois a caixa {{ui:Editar atributos}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): a mesma referência, depois `<prompt> (<TAG>) <value>` para cada atributo; {{key:Enter}} mantém um valor. Veja [Atributos](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Valores mantidos; os novos atributos recebem a sua predefinição, os removidos saem, as posições são repostas.

### BATTMAN

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Gestor de atributos}}. A caixa de diálogo: bloco, atributos (etiqueta, pedido, predefinição, modos, ordem), {{ui:Atualizar as referências (valores mantidos)}}, {{ui:Aplicar}}.

### REFEDIT and REFCLOSE

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar no local}}. `REFEDIT`: `Select the block reference to edit in place` (ou a seleção). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; os botões da barra {{ui:Guardar o bloco}} e {{ui:Descartar}} fazem o mesmo. Toda a edição é um passo de anular. Veja [Atributos](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: se a pressão de um traço de caneta define a espessura de linha do que {{cmd:SKETCHFIX}} e {{cmd:SKETCHLIVE}} criam (ativo ao início). Veja [Desenhar à mão com uma caneta](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Diz qual o padrão do escritório em vigor neste desenho e de onde vem: o registo próprio do desenho, o padrão partilhado da sua equipa, ou as suas Políticas predefinidas (alturas de texto `all.anno.*`); sem nenhum, os tamanhos do próprio programa. `[Import/Layers/Title block/Clear/eXit]`: `Import` lê um `cc-office-standard` .json (o registo que SuperCad e BimCraft escrevem) para este desenho, guardado com ele em DWG e DXF; `Layers` acrescenta as camadas do escritório que o desenho não tem, num passo de anular, e nunca remove uma; `Title block` lista os campos do escritório com os valores próprios deste desenho; `Clear` remove o registo próprio do desenho. As alturas de texto e de cota anotativos seguem o padrão em vigor. Veja [Unidades, formatos de papel e escalas](topic:units-papers-scales).

### BPARAMS

Aliases: `BPM`, `BLOCKPARAMS`. Abre o gestor de Parâmetros para o bloco no editor de blocos, o bloco da referência selecionada, ou o bloco que indicar (`Block name`): parâmetros com fórmulas, vários parâmetros de visibilidade com os seus estados, e os valores e estados próprios da referência selecionada. Veja [Os seus próprios parâmetros e estados de visibilidade](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` faz o mesmo na linha de comandos: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT and BCLOSE

`BE`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar bloco}}. `Enter block name to edit <the selected reference's block>` abre o editor de blocos. `BCLOSE` pergunta `Close the block editor on "…" [Save/Discard] <Save>`; os botões da faixa {{ui:Guardar bloco}} e {{ui:Descartar alterações}} fazem o mesmo. Tudo o que se faz no editor é um passo de anular.

### VIEWBASE

Alias: `FLATSHOT`. Uma vista 2D plana dos sólidos no separador 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, uma escala (`1:20`, `2:1`; {{key:Enter}} escolhe a que cabe na folha), depois o centro da vista. Uma referência de bloco, com as arestas visíveis em VIEW-VISIBLE e as ocultas a tracejado em VIEW-HIDDEN. Veja [Vistas planas numa folha](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliases: `-PUBLISH`; ou {{ui:Todas as folhas num único PDF}} na caixa {{ui:Imprimir para PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} imprime cada folha, `S` pede nomes separados por vírgulas. Um só PDF, uma página e um marcador por folha. Veja [Todas as folhas num único PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliases: `SSM`, `SHEETSETMANAGER`. Leva-o à secção {{ui:Conjunto de folhas}} do painel da esquerda: folhas de muitos desenhos, numeradas e tituladas, com os seus blocos de título preenchidos a partir do conjunto, publicadas como um só PDF. Veja [Conjuntos de folhas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): escolha um DWG ou DXF, depois o seu ponto de inserção. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; com mais de uma ligação, escolha uma das suas referências ou escreva `N` e o seu nome. Veja [Desenhos ligados](topic:files#linked-drawings-external-references).

### COUNT

Aliases: `BCOUNT`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Contar blocos}}. `Select a block reference to count, or [All/Export] (Enter: All)`: uma escolha seleciona e conta cada referência desse bloco neste espaço; {{key:Enter}} ou `A` lista-as todas; `E` depois `C` (contagens) ou `A` (atributos) transfere um CSV. Veja [Contar blocos e exportar um quadro](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliases: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (não importa se é maiúscula ou minúscula). `F` pede um DWG ou DXF, depois o desenho inteiro ou um dos seus blocos; um nome já usado pede {{ui:Manter os existentes}} ou {{ui:Mudar o nome}}. `L` abre o painel da biblioteca.
- `Specify insertion point [Scale/Rotate]`. `S` pede `Specify scale factor`, `R` pede `Specify rotation angle`; ambos ficam memorizados.
- Quando o bloco já está ao lado de objetos que se repetem noutros sítios sem ele, uma linha indica quantos lugares são sugeridos e o pedido ganha `suGgested`: `G` mostra-os; clique perto de um para pôr o bloco aí, `A` para todos, {{key:Enter}} para voltar. Tomam a rotação dos seus vizinhos e os valores predefinidos dos atributos. Desenhos com mais de 20,000 objetos no espaço aberto não são pesquisados.
- Depois `Enter <prompt> (<TAG>) <default>` para cada atributo que o bloco pede. Veja [Atributos de bloco](topic:attributes).

### LIBRARY

Aliases: `LIB`. Abre o painel da Biblioteca: colocar itens, procurar atualizações, créditos da biblioteca. Sem perguntas. Veja [Inserir a partir de um ficheiro ou da biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Aliases: `SMEMBER`; ou {{ui:Barra 3D}} no separador {{ui:Normal}} da biblioteca. `Section size <W12x26>` (como o separador a lista), depois `Start point [Column]` e `End point`: uma peça sólida no separador 3D entre os dois pontos, assente no chão. `C` pede o ponto base do pilar e a sua altura. Um passo de anular. Veja [Colocar perfis de aço e peças normalizadas](topic:steel-and-standard-parts).

### PARTSLIST

Aliases: `PLIST`. `Top left corner of the parts list`, depois `Text height <2.5>`: desenha uma tabela de cada peça normalizada e secção de aço colocada a partir da biblioteca (números de item, quantidade, peça, norma, tamanho, comprimento, material, massa). Um passo de anular. Veja [Colocar perfis de aço e peças normalizadas](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliases: `PU`. Remove definições de blocos que nada usa. Sem perguntas.

### DELBLOCKS

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Apagar blocos}}. `Select block to delete [Name/eXit]`: escolha uma referência de bloco, ou `N` para a lista de blocos com um filtro (escolha vários), ou `X` / {{key:Enter}} para terminar. Cada referência desaparece — no modelo, em cada folha e dentro de outros blocos — e depois a definição, e a linha de comandos indica o que foi apagado e o que não pôde ser. Os blocos sem nome e os desenhos ligados não são oferecidos. O pedido volta para o bloco seguinte; o comando inteiro é um passo de anular.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} cola o que copiou ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) como um só bloco: escolha o ponto de inserção e uma referência a um novo bloco fica aí, selecionada. O bloco recebe um nome próprio (`A$C` e um número); {{cmd:RENAME}} dá-lhe o seu. Um passo de anular remove a referência e o bloco.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pede o bloco a substituir e o bloco que o substitui (`?` lista os blocos), depois altera cada referência no modelo, em cada folha e dentro de outros blocos. Cada referência mantém o seu lugar, escala, rotação, camada e os valores dos atributos que ambos os blocos têm; os atributos que só o novo bloco tem começam nas predefinições, e indica-lhe quais os valores que foram descartados. Quando nada usa já o bloco antigo, oferece-se para o remover. Recusa ligações a desenhos e uma substituição que colocaria um bloco dentro de si próprio. Um passo de anular.

### MINSERT

{{cmd:MINSERT}} coloca um bloco em linhas e colunas: nome do bloco, ponto de inserção, escala, rotação, número de linhas e colunas, e as distâncias entre elas. O conjunto inteiro roda com a rotação. Cada um é a sua própria referência (10,000 no máximo), por isso qualquer um pode ser movido ou apagado depois.

### BLOCKSPALETTE

Aliases: `BLOCKSPAL`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Painel de blocos}}. Mostra o painel {{ui:Blocos}} com o cursor no seu filtro. Cada bloco tem uma pequena imagem; os colocados mais recentemente vêm primeiro. Os dois botões ao lado do filtro alternam entre uma lista e uma grelha de imagens. Clique numa imagem (ou em {{ui:Inserir}}) para colocar o bloco com {{cmd:INSERT}}, ou arraste-o para o desenho para o colocar onde o largar.

{{ui:Bibliotecas}}, por baixo da lista: {{ui:Adicionar um desenho}} recebe um ficheiro DWG ou DXF seu e lista os seus blocos com imagens, e o desenho inteiro como um bloco. Colocar um copia a sua definição (e os blocos que aninha, e as suas camadas) para este desenho, como faz a opção `File` de {{cmd:INSERT}}; um bloco que já existe aqui com a mesma definição é usado sem perguntas, e um do mesmo nome que difere pede {{ui:Manter os existentes}} ou {{ui:Mudar o nome}}. Num navegador o ficheiro fica até a página fechar. No CadCraft Studio, {{ui:Adicionar uma pasta}} lista os desenhos de uma pasta, cada um aberto ao ser clicado, e os ficheiros e pastas são memorizados. O pequeno x remove uma biblioteca da lista; o ficheiro não é tocado. A {{ui:Biblioteca}} partilhada é outra coisa: veja [Inserir a partir de um ficheiro ou da biblioteca](topic:insert-from-file-and-library).

### BCONVERT

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Converter repetições em blocos}}. Encontra geometria que se repete e transforma cada cópia numa referência a um só bloco.

- `Select the objects that repeat, or [Block]`: os objetos de uma cópia. `B` indica um bloco existente, para encontrar cópias soltas dos seus objetos.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` e `P` mudam o que conta como cópia; {{key:Enter}} pesquisa. As definições ficam memorizadas.
- `Name for the new block <Block1>`, depois `Specify the block's base point` ({{key:Enter}} toma o canto inferior esquerdo da seleção).
- Indica quantos outros conjuntos de objetos são a mesma geometria, destaca tudo o que substituiria, e pergunta `Yes/No`.

Uma cópia são os mesmos objetos movidos e rodados em qualquer ângulo (e espelhados ou escalados por um fator quando estão ativos): cada objeto deve ter o seu correspondente, com uma tolerância de um milionésimo do tamanho da seleção. Cada referência recebe a sua própria rotação e escala (uma espelhada uma escala Y negativa), e a camada que os seus objetos partilhavam. Os objetos em camadas bloqueadas ficam de fora e são contados. Pesquisa o espaço aberto (o modelo ou a folha aberta). Uma pesquisa muito grande para num limite de trabalho e indica-o. Um passo de anular.

### BSEARCH

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Procurar blocos}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: parte de um nome de bloco, ou um padrão com `*` e `?`. Lista cada bloco com as suas referências aqui e em todo o desenho.
- `A`: um valor de atributo, ou `TAG=value`. Lista os blocos cujas referências o têm, com os valores encontrados. Os atributos constantes contam.
- `G`: selecione objetos, ou uma referência de bloco, e os blocos cuja forma é pelo menos 85% semelhante são listados, o melhor primeiro. Tamanho, rotação e espelhamento não contam. A medida compara as distâncias entre pontos espalhados pelos contornos, por isso encontra semelhantes; use {{cmd:BCONVERT}} para encontrar cópias exatas.

As referências encontradas no espaço aberto ficam selecionadas, prontas para o comando seguinte.

### BREPLACE

Ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Substituir blocos}}. `Replace [Selected/All]`: `S` substitui as referências de bloco que selecionar pelo bloco que indicar; `A` pede um bloco e a sua substituição e altera cada referência, como faz {{cmd:BLOCKREPLACE}} (o mesmo código). Uma referência mantém o seu lugar, escala, rotação, camada e os valores dos atributos que ambos os blocos têm; os valores para os quais o novo bloco não tem lugar são descartados e indicados. `?` lista os blocos. Um passo de anular.

### DATAEXTRACTION

Aliases: `EATTEXT`, `DX`; ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Extração de dados}}. Lista blocos, os seus atributos e propriedades de objetos como tabela ou ficheiro CSV.

- Trabalha sobre a seleção, ou pergunta `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` quando a seleção tem ambos. Blocos sem nome, tabelas e listas de materiais nunca são listados.
- Imprime as colunas a escolher (nome, tipo, camada, X, Y, rotação, escala, comprimento, área, cor, tipo de linha, espaço, e uma por etiqueta de atributo), depois `Columns, by name or number with commas between`. {{key:Enter}} escolhe as marcadas com asterisco: o nome e cada atributo para os blocos; tipo, camada e comprimento para os objetos.
- `Put identical rows together with a count? [Yes/No] <Yes>`, depois `Put the list in a: [Table/Csv] <Table>`. Uma tabela é uma tabela comum ({{cmd:TABLEDIT}} edita-a) e não é em tempo real: execute o comando de novo depois de o desenho mudar.
- Recusa uma coluna que não está na lista. Uma tabela tem 1,999 linhas de dados; um ficheiro CSV leva todas.

### COUNTTABLE

Conta as referências de bloco da seleção (ou do espaço aberto) e põe as contagens numa tabela (`Block`, `Count`) ou num ficheiro CSV. Para uma contagem que segue o desenho sozinha, veja {{cmd:BOMTABLE}}.

## Folhas e impressão

### LAYOUT

Aliases: `LO`, `NEWLAYOUT`; ou o botão {{ui:+}} sob o desenho. Uma nova folha com uma moldura, um bloco de título e uma viewport, em ISO A3 (ou Tabloid para desenhos em polegadas ou pés). Sem perguntas.

### MVIEW

Aliases: `MV`. Só numa folha ({{cmd:VPORTS}} numa folha faz o mesmo).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. A viewport mostra o modelo inteiro a uma escala normalizada.
- `P` (Polygonal): clique nos cantos do contorno (`Undo`, `Close`), {{key:Enter}} quando terminar. Recusa menos de três cantos.
- `O` (Object): `Select a closed object for the viewport's outline`: uma polilinha fechada, um círculo ou uma elipse na folha. A viewport toma a sua forma (as curvas como pequenos segmentos retos); o objeto fica como estava. Recusa um objeto que não é fechado.

### VPCLIP

Recorta uma viewport que já está na folha. `Select viewport to clip` (ou selecione-a primeiro), depois `Select the object to clip to [Polygonal/Delete]`:

- Clique numa polilinha fechada, num círculo ou numa elipse, ou {{key:Enter}} (ou `P`) para clicar nos cantos de um polígono.
- `D` (Delete, oferecido quando a viewport está recortada) torna-a de novo um retângulo: a caixa à volta do contorno que tinha.
- O que a viewport mostra não se move no papel, e a sua escala mantém-se. O modelo é desenhado e impresso só dentro do contorno, e a moldura segue-o. Um passo de anular.
- Uma viewport recortada tem um grip em cada canto do seu contorno, para além do centro e dos quatro cantos da sua caixa (arrastar um canto da caixa estica o contorno com ela). As Propriedades mostram Contorno: Retângulo, ou Recortado com o número de cantos.
- Os ficheiros DWG e DXF 2000 guardam o contorno para o CadCraft. Os outros programas abrem a viewport como o retângulo à sua volta; o DXF R12 guarda apenas o retângulo.
- No separador do modelo indica que as viewports estão nas folhas.

### VPORTS

Aliases: `VIEWPORTS`. {{cmd:SPLIT}} é o mesmo a partir de uma folha também, e {{ui:Vista}} › {{ui:Mais}} › {{ui:Dividir lado a lado}}, {{ui:Dividir na vertical, um sobre o outro}}, {{ui:Quatro painéis}}, {{ui:Um painel}} executam-no. No modelo: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pede `[Horizontal/Vertical] <Vertical>` (Vertical = lado a lado), `3` pede `[Left/Right] <Right>` (onde fica o painel grande). Cada painel mantém a sua própria vista e espaço; um clique torna um painel ativo. Numa folha é {{cmd:MVIEW}}. Veja [Dividir o ecrã](topic:split-screen).

### VPVIEW

Sem aliases. Só numa folha.

- `Select viewport` (ignorado se já há uma selecionada), depois no modelo: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Sem aliases. Um sistema de coordenadas próprio; não é uma edição. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: um ponto é uma nova origem, depois `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origem, um ponto no eixo X positivo, um ponto do lado Y positivo. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` e um nome. A vista roda para que o novo eixo X fique horizontal. Veja [Rodar a vista e usar as suas próprias coordenadas](topic:ucs-and-turned-view).

### PLAN

Sem aliases. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: roda a vista do painel ativo para que o eixo X do UCS (ou o do mundo) fique horizontal. Nada no desenho se move.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sem aliases; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Rodar a vista 90° para a esquerda}}, {{ui:Rodar a vista 90° para a direita}}, {{ui:Voltar ao global}}. O mesmo que `UCS Z -90`, `UCS Z 90` e `UCS W`, com a vista a seguir.

### VPLAYER

Sem aliases. Numa folha, ou dentro de uma viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` pedem nomes de camadas (vírgulas, e os caracteres universais `*` e `?`), depois as viewports `[All/Select/Current] <Current>`; Reset repõe cada camada no seu predefinido "congelada em novas viewports"; `V` define esse predefinido (`[Frozen/Thawed]`), que {{cmd:MVIEW}} usa. `?` lista as camadas congeladas na viewport atual. A coluna de viewport do painel Camadas faz o mesmo para uma viewport. Veja [Congelar uma camada numa viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliases: `MS`; ou faça duplo clique dentro de uma viewport. Só numa folha. Trabalhe no modelo através de uma viewport: a selecionada, a única da folha, ou `Click inside the viewport to work in`. Deslocar e aproximar aí mudam a vista da viewport (uma viewport bloqueada na visualização mantém-na e a folha é que se move); a nova vista fica como um passo de anular. Veja [Trabalhar no modelo através de uma viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliases: `PS`; ou faça duplo clique fora da viewport, ou clique num separador sob o desenho. Volta à folha.

### PLOT

Aliases: `PRINT`, `PUBLISH`, `EXPORTPDF`; ou {{key:Mod+P}}. Abre a caixa {{ui:Imprimir para PDF}}. Veja [Imprimir para PDF](topic:plot-pdf).

### PLOTSTYLES

Aliases: `STYLESMANAGER`, `PSTABLES`; ou {{ui:Editar tabelas…}} na caixa {{ui:Imprimir para PDF}}. Abre {{ui:Tabelas de estilos de impressão}}: como cada cor é impressa (cor, cinzento, tinta, espessura de linha), guardadas com o desenho. Veja [Tabelas de estilos de impressão](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} move objetos entre uma folha e o modelo através de uma viewport, escalados e rodados para parecerem iguais do outro lado. Numa folha, selecione objetos e eles vão para o modelo (escolha a viewport quando a folha tem mais de uma). Enquanto trabalha no modelo através de uma viewport ({{cmd:MSPACE}}), os objetos selecionados vêm para a folha. Indica quantas vezes ficaram maiores ou mais pequenos. As viewports ficam na sua folha. Um passo de anular.

### ISODRAFT

{{cmd:ISODRAFT}} liga ou desliga o desenho isométrico (`ON` ou `OFF`), ou vai diretamente para o plano `Left`, `Top` ou `Right`. Enquanto está ativo: o Orto ({{key:F8}}) mantém as linhas nos dois eixos do plano (esquerdo: 90° e 150°; superior: 30° e 150°; direito: 30° e 90°), o rastreio polar ({{key:F10}}) segue os mesmos eixos, o snap à grelha ({{key:F9}}) usa a grelha isométrica, e a grelha ({{key:F7}}) é desenhada com linhas a 30°, 90° e 150°. {{cmd:ELLIPSE}} ganha `Isocircle`: dê um centro e um raio (ou `Diameter`) e desenha a elipse que um círculo mostra no plano atual. O desenho continua plano: são auxiliares para desenhar uma vista pictórica, não um modelo 3D. A definição vale para esta sessão e não é guardada no ficheiro.

### ISOPLANE

{{cmd:ISOPLANE}} escolhe o plano em que o desenho isométrico trabalha: `Left`, `Top` ou `Right`. Enter passa ao seguinte. Enquanto o desenho isométrico está ativo, {{key:F5}} faz o mesmo a meio de um comando; enquanto está desligado, {{key:F5}} fica para o navegador.

## Consulta

### CAL

Imprime o valor de um cálculo, tal como é lido em qualquer lugar onde se escreve um comprimento.

- `Expression`: escreva-a, por exemplo `12'6"+3/4"` ou `(24'-0")/3`, e prima {{key:Enter}}. O CadCraft imprime `= 12'-6 3/4"   (150.75 drawing units)`. Veja [Aritmética num valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliases: `DI`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Medir distância}}.

- `Specify first point`, `Specify second point`. Imprime distância, ângulo, Delta X e Delta Y.

### AREA

Aliases: `AA`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Área}}. Imprime a área e o perímetro.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Clique ou escreva cantos; em `Specify next point (Enter closes) [Undo]` prima {{key:Enter}} para fechar o contorno. `U` anula o último canto.
  - {{key:Enter}} ou `O`, depois `Select object`: um círculo (imprime a sua circunferência), uma elipse, uma polilinha (uma aberta é fechada por uma linha reta para a área, e o seu comprimento é impresso) ou uma trama (os furos são retirados).
  - `A` (Acrescentar área) e `S` (Subtrair área) mantêm um total acumulado: o pedido começa com `(ADD mode)` ou `(SUBTRACT mode)`, cada área é somada ou retirada, e `Total area = …` é impresso depois de cada uma. Nestes modos, `O` escolhe objetos até {{key:Enter}}, e {{key:Enter}} no primeiro pedido termina o comando.

### MEASUREGEOM

Aliases: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; depois de cada medição pergunta de novo, com `eXit` como predefinição.

`Quick` mede à volta do ponteiro enquanto o move: a distância ao objeto mais próximo à direita, acima, à esquerda e abaixo (segundo os eixos do UCS atual), desenhada à medida que avança, e o ângulo onde dois desses vizinhos são retos e se encontram. Um clique escreve as quatro distâncias, a largura e altura livres e os ângulos no histórico; Enter volta às opções. Lê o que está no ecrã.

- `D`: dois pontos, como {{cmd:DIST}}.
- `R`: `Select arc or circle`; imprime o raio e o diâmetro.
- `A`: um arco (o seu ângulo incluído), uma linha e depois uma segunda linha (o ângulo entre elas, para os seus extremos distantes), ou {{key:Enter}} e três pontos (vértice, depois as duas extremidades).
- `AR`: como {{cmd:AREA}}, uma área.

### ID

Sem aliases. `Specify point`; imprime o seu X e Y.

### LIST

Aliases: `LI`, `LS`. `Select objects`; imprime o tipo, a camada e as principais medidas de cada objeto.

### MASSPROP

{{cmd:MASSPROP}} dá as propriedades de secção das regiões e objetos fechados que selecionar, tomados em conjunto: área, perímetro, caixa envolvente, centroide, momentos de inércia em torno dos eixos X e Y que passam pela origem, o produto de inércia, raios de giração, os mesmos momentos em torno do centroide, e os momentos principais com as direções dos seus eixos. Os furos numa região contam como furos. As figuras são em unidades de desenho e exatas para contornos feitos de linhas e arcos; elipses e splines são medidas como pequenos segmentos retos, e indica-o. Depois do relatório pergunta se o escreve num ficheiro de texto. Os objetos que não são fechados ficam de fora, e indica quantos.

## Vista, ficheiro e outros

### ZOOM

Aliases: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Clique em dois cantos para uma janela. `E`, `A` ou Enter: o desenho inteiro.
- `P` (Anterior, ou {{ui:Anterior}} na barra de ferramentas) volta à vista anterior, até 10 vistas por separador; uma série de passos da roda do rato ou um deslocamento conta como uma vista.
- Um número como `2`, `2x` ou `0.5x` (ou `S` e depois o número) aproxima ou afasta por esse fator em torno do meio do ecrã.
- `C` pede `Specify center point` e `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT e os comandos PDF

Aliases: `PDFATT` para {{cmd:PDFATTACH}}, `PDFIM` para {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} põe uma página PDF por baixo do desenho (ficheiro, página, ponto de inserção, escala, rotação); {{cmd:PDFIMPORT}} transforma as linhas, curvas, preenchimentos e texto de uma página em objetos do desenho, em camadas com o nome do PDF, à escala real, a uma escala escrita, ou escalados a partir de dois pontos e uma distância real. {{cmd:PDFCLIP}} recorta um subjacente, {{cmd:PDFADJUST}} define o esbatimento, o contraste, o monocromático ou desliga-o, {{cmd:PDFLAYERS}} liga e desliga as camadas do próprio PDF, e {{cmd:PDF}} indica ao CadCraft de novo os ficheiros que os subjacentes de um desenho usam. Veja [Subjacentes PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autocompletar do desenho: sem comando em curso, um fantasma cinzento mostra o que os padrões do próprio desenho indicam como próximo. {{cmd:AUTOCOMPLETE}} liga-o (`On`) ou desliga-o (`Off`) (também em Definições › CadCraft) ou mostra (`Show`) o que sugeriria agora. **Tab** desenha o fantasma como um passo de anular, **Esc** dispensa-o até o desenho mudar. Encontra três coisas nos objetos mais recentes: a próxima cópia de algo desenhado duas vezes ou mais a um passo igual (montantes, pilares, espelho e pisada de uma escada), os próximos degraus de uma escada em polilinha, e o lado em falta de uma divisão ou cadeia de paredes. No meio de {{cmd:LINE}} ou {{cmd:PLINE}} o fantasma é o **ponto seguinte**: o próximo degrau de uma escada (espelho, pisada, espelho…), o quarto canto de um retângulo, o ponto que o fecha, ou mais um passo igual. Aproxime o cursor dele e prima **Tab**, como se tivesse clicado aí; continue ou prima Enter. Calculado neste computador por regras, sem modelo.

### AUTOSHEET

Alias: `ASH`. Folhas que se organizam sozinhas. {{cmd:AUTOSHEET}} usa as partes do desenho (as suas vistas com nome, ou as partes separadas do modelo, ou o modelo inteiro), escolhe um formato de papel (ou o que indicar), dá a cada parte uma escala normalizada (uma escala para todas, ou a maior que cada uma aceita) e coloca as vistas em filas em novas folhas, com um bloco de título e uma legenda (nome e escala) por baixo de cada uma. O que não cabe numa folha ganha uma folha própria. Um passo de anular. Calculado neste computador por regras, sem modelo.

### PHOTOSKETCH

Alias: `PSK`. Fotografia de esboço para desenho. Escolha uma fotografia (JPEG, PNG ou TIFF) de um esboço à mão numa folha de papel. {{cmd:PHOTOSKETCH}} encontra os quatro cantos da folha, endireita a perspetiva, toma o formato de papel que indicar (`Paper`, ou o normalizado mais próximo) e a `Scale` do esboço (1 : n), depois transforma as linhas da caneta em linhas, arcos e círculos, uma camada por cada cor de caneta (preto, vermelho, azul, verde). Se não encontrar a borda do papel, toma a fotografia inteira como folha e indica-o. As letras ficam de fora. Um passo de anular. Feito neste computador com processamento clássico de imagem, sem modelo, sem enviar nada. Veja também os comandos de desenhos digitalizados.

### AUTODIM

Alias: `ADIM`. Cota automática por regras. {{cmd:AUTODIM}} cota os objetos selecionados (ou o desenho inteiro) a partir das suas arestas de nível e de prumo: uma cadeia de cotas ao longo dos lados que escolher (`Sides`), uma cota total por fora dela, a largura de cada vão (um intervalo entre linhas de paredes colineares), um diâmetro para cada tamanho de furo, e com `Grid` o espaçamento entre linhas de grelha. Uma cota que já existe não é feita outra vez. Um passo de anular. Calculado neste computador por regras, sem modelo.

### GRIDMOVE

Alias: `GM`. Mover uma linha de grelha leva o conjunto consigo. {{cmd:GRIDMOVE}} move uma linha de grelha (uma linha numa camada cujo nome diz grid ou eixo) e o que nela está pendurado: as paredes com uma extremidade na linha esticam para a seguir, as paredes ao longo dela movem-se por inteiro, os pilares (referências de bloco e círculos na linha), a sua bolha e etiqueta movem-se, e as cotas cujos pontos estão nela medem o novo espaçamento. Dê dois pontos (só conta a parte que atravessa a linha) ou `Distance`. Um passo de anular desfaz tudo. Feito neste computador por regras.

### DETAILS

Alias: `DET`. Detalhes que o encontram. {{cmd:DETAILS}} guarda os detalhes próprios do seu escritório: `Add` põe um bloco deste desenho na lista, `List` e `Remove` gerem-na, e `Find` ordena-os para o que está selecionado (ou para o que desenhou por último) pelas palavras das suas camadas, nomes de blocos, padrões de trama e notas, comparadas com o nome e as notas de cada detalhe, de modo que uma padieira encontra o seu peitoril. Escolha um número e um ponto para o colocar. Com `Hint` ativo (também em Definições › CadCraft), selecionar algo que um detalhe corresponde põe uma linha na barra de estado. A lista fica guardada neste navegador, neste computador, e é essa lista que se pesquisa. `Share` coloca-a também na sua pasta Documentos (`.cadcraft/firm-details.json`, com o desenho de cada bloco): `Pull` acrescenta o que a equipa tem e você não tem, `Push` acrescenta o que você tem e eles não têm, `Both` faz as duas coisas, e nada é removido de nenhum lado. Abra primeiro a pasta Documentos ({{cmd:DOCUMENTS}}); quando essa pasta é uma pasta Team Cloud Plan, a equipa inteira partilha uma lista. Um item de detalhe no painel da Biblioteca tem um botão **Acrescentar aos detalhes do meu escritório** que o põe na mesma lista. Calculado neste computador por palavras, sem modelo.

### SKETCHFIX

Alias: `SKF`. Esboços à caneta tornam-se geometria precisa. Prima e arraste um traço à mão livre de cada vez (caneta, rato ou dedo), depois Enter. Cada traço é lido como uma linha, círculo, arco, retângulo ou polilinha: linhas quase horizontais e verticais ficam exatamente horizontais e verticais, um traço fechado e redondo torna-se um círculo, um traço fechado com quatro cantos retos um retângulo, e as extremidades dos traços são puxadas umas para as outras e para as extremidades já no desenho. Um passo de anular. Calculado neste computador por regras, sem modelo.

### SCANATTACH e os comandos de desenhos digitalizados

Aliases: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} não tem nenhum. Trabalham sobre uma imagem, com um passo de anular cada. {{cmd:SCANATTACH}} insere um PNG, JPEG, TIFF (uma página ou todas) ou uma página PDF que é uma imagem. {{cmd:SCANSCALE}} escala a folha a partir de dois pontos escolhidos e da distância real. {{cmd:SCANALIGN}} move-a e roda-a até dois pontos (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} mostra o ângulo das linhas longas da folha e roda-a quando aceita `Accept` ou indica um `Value`. {{cmd:SCANCLEAN}} torna-a preto e branco (`Threshold` Auto/Adaptive/Level, `Specks`) e `Run`. {{cmd:SCANCROP}} mantém uma janela. {{cmd:SCANERASE}} apaga um `Rectangle`, `Polygon` ou `Lasso`. {{cmd:SCANTRACE}} transforma linhas e arcos numa nova camada (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) e indica o que encontrou e o que deixou como imagem. {{cmd:SCANINFO}} lista o ficheiro original e os passos. {{cmd:RASTERSNAP}} liga ou desliga o encaixe às linhas das folhas digitalizadas. Veja o tópico Desenhos digitalizados e o traço.

### REGEN and REGENALL

Aliases: `RE` para {{cmd:REGEN}}, `REA` para {{cmd:REGENALL}}. Reconstrói no ecrã o que está desenhado a partir do desenho: {{cmd:REGEN}} o separador que está a ver (numa folha, também o modelo que as suas viewports mostram), {{cmd:REGENALL}} todos os separadores, todos os painéis de ecrã dividido e todos os desenhos abertos. Use-os quando a imagem parece desatualizada depois de uma alteração programada ou muito grande, ou quando um assistente editou o desenho; o desenho em si não é tocado, por isso não há nada a anular.

### NAMEDVIEW

Aliases: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, depois o nome da vista. `S` guarda a vista no ecrã, `W` uma janela que escolher, `R` mostra uma vista guardada, `D` apaga uma, `?` lista as vistas deste separador. Guardar com um nome existente substitui-a; cada alteração é um passo de anular. As vistas pertencem ao separador em que foram guardadas. Os ficheiros DWG e DXF guardam-nas (a tabela VIEW); as vistas de uma folha voltam na primeira folha, porque o ficheiro não indica qual.

### UNDO and REDO

Aliases: `U` para {{cmd:UNDO}}; {{cmd:REDO}} não tem nenhum. Também {{key:Mod+Z}} e {{key:Mod+Y}}.

### LAYER

Aliases: `LA`. Leva ao painel {{ui:Camadas}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ou um nome (`?` lista-os: Continuous, os do próprio desenho, e DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE com os seus tamanhos `2` (metade) e `X2` (dobro)). {{cmd:LWEIGHT}} (`LW`): a espessura de linha dos novos objetos em mm, ou `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): a escala de tipos de linha do desenho (com anulação). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — o mesmo que o botão {{ui:LWT}} da barra de estado. Veja [Espessuras de linha e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, depois o novo nome; os objetos ou referências acompanham. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` até {{key:Enter}}, depois `Select object on target layer or [Name]` e `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, depois `Y`: a camada e cada objeto nela desaparecem (não a camada 0, DEFPOINTS ou a camada atual). Um passo de anular cada. Veja [Organizar um desenho com camadas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Camadas escolhendo objetos; também no menu {{ui:Ferramentas}} do painel {{ui:Camadas}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, depois {{key:Enter}}: todas as outras camadas são desligadas. {{cmd:LAYUNISO}} volta a ligá-las. {{cmd:LAYOFF}} e {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ou congelada), repetidamente; `U` anula o último, {{key:Enter}} termina. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} liga todas as camadas, {{cmd:LAYTHW}} descongela todas. Cada comando é um passo de anular. Veja [Organizar um desenho com camadas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} inicia um desenho vazio e {{cmd:OPEN}} abre um DWG ou DXF, cada um no seu separador sobre o desenho (um desenho novo intacto é usado em vez de um novo separador). Fechar um separador com alterações por guardar pergunta primeiro. Veja [Dividir o ecrã](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, também {{key:Mod+S}}) transfere uma cópia no formato do desenho: DWG se foi aberto de um DWG, DXF se foi de um DXF. Um desenho novo usa o formato escolhido por último em Guardar como neste navegador, senão DWG.

{{cmd:SAVEAS}} (também {{key:Mod+Shift+S}}) abre a caixa {{ui:Guardar uma cópia como}}: escolha {{ui:DWG}} (e a sua {{ui:Versão}}), {{ui:DXF R12}} ou {{ui:DXF 2000}}, depois {{ui:Guardar}}. A escolha fica para este desenho e para os novos desenhos neste navegador.

{{cmd:DXFOUT}} transfere sempre uma cópia DXF R12, sem mudar o formato que {{cmd:SAVE}} usa.

Veja [Ficheiros: o que abre, o que guarda](topic:files#saving).

### TOUR

Aliases: `TUTORIAL`. Inicia de novo a visita de seis passos ao primeiro desenho. Veja [Primeiros passos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliases: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Veja [Definições](topic:settings#toolbar-position).

### COMMANDLINE

Aliases: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: ancora ou faz flutuar a linha de comandos, torna-a uma linha, pergunta quantas linhas de histórico mostrar (0 a 12), ou abre o histórico. Veja [Definições](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: as barras acima do desenho como eram, ou compactas. Veja [Definições](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: o passo em que o rastreio {{ui:Polar}} se alinha (mais de 0, até 180). Fica guardado neste navegador.

### UNITS

Aliases: `UN`. Como os comprimentos são escritos e introduzidos.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Arquitetónico e Fracionário: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 ou 256)`. Os outros: `Enter number of decimal places (0 to 8)`.

As novas cotas seguem-no. Um passo de anular. O mesmo que {{ui:Formato de comprimento}} e {{ui:Precisão}} em {{ui:Definições atuais}}; veja [Pés e polegadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliases: `GDS`. Ver um layout de circuito integrado (um ficheiro de fluxo GDSII): ensaio de laboratório, só para ver e medir.

- Um seletor de ficheiros aceita um ficheiro `.gds`; com várias células de topo, `Enter the top cell to draw`.
- Cada camada e tipo de dados torna-se uma camada do desenho (`GDS 1`, `GDS 2/5`), as referências e matrizes são colocadas planificadas, na unidade de utilizador do ficheiro (normalmente micrómetros). Um passo de anular. Nada é simulado nem verificado, e o ficheiro não é escrito de volta.

### DIAGRAM

Aliases: `TEXTDIAGRAM`, `T2D`. Um diagrama a partir de texto.

- Uma caixa recebe o texto (ou uma linha com `;` entre instruções na linha de comandos): um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de origem e destino.
- `Specify the top left corner of the diagram`, depois `Specify the text height`.

Os blocos e conetores são objetos comuns na camada `Diagram`, selecionados quando termina. Um passo de anular. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).

### OLELIST

Aliases: `OLES`. Os objetos OLE que um DWG transporta e que o CadCraft não consegue colocar sozinho.

- Lista cada um: número, tipo, tamanho, se guardou uma imagem.
- `Enter an option [Place/eXit] <eXit>`: Place pede o número, o canto inferior esquerdo e a largura, e desenha uma moldura com a imagem. Um passo de anular; o objeto guardado não é alterado. Veja [Imagens](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliases: `SHX`. Os seus próprios tipos de letra SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Pasta}} lê cada `.shx` de uma pasta (CadCraft Studio; de novo em cada arranque), {{ui:Ficheiros}} aceita ficheiros escolhidos (o navegador), {{ui:Inverter}} dispõe as letras de um tipo de letra do fim para o princípio. Os estilos de texto que indicam um tipo carregado desenham com ele. Veja [Desenhar texto com os seus próprios tipos de letra SHX](topic:shx-fonts).

### LIMITS

Qual o tamanho que o desenho deve ter.

- `Specify lower left corner or [ON/OFF] <current>`: um ponto, `ON` ou `OFF`.
- `Specify upper right corner <current>`.

A grelha preenche os limites, {{cmd:ZOOM}} Tudo mostra-os, e com os limites ON um ponto fora deles é recusado (`**Outside limits`). Um passo de anular; guardado em DWG e DXF. Veja [Definir os limites do desenho](topic:drawing-limits).

### AUNITS

Aliases: `ANGUNITS`. Como os ângulos são mostrados e escritos.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ou para os outros dois `Enter precision` (0 graus, 2 minutos, 4 segundos, 5 a 8 casas decimais de segundo).

Um passo de anular; guardado em DWG e DXF. O mesmo que {{ui:Formato de ângulo}} em {{ui:Definições atuais}}. Veja [Escrever e mostrar rumos e ângulos](topic:bearings-and-angles).

### APPLOAD

Aliases: `AP`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Carregar aplicação…}}. A caixa {{ui:Carregar aplicações}}: carrega rotinas `.lsp` e ficheiros de diálogo `.dcl`, descarrega-os, carrega-os de novo a partir do histórico, e a Suite de Arranque. Os comandos `(defun c:NAME …)` de uma rotina passam a funcionar como os outros. Veja [Carregar aplicações](topic:load-applications) e [Executar rotinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Editar aliases…}}) abre o seu ficheiro de aliases (linhas `ALIAS, *COMMAND`); {{ui:Guardar}} aplica-o. {{cmd:REINIT}} aplica-o de novo. Veja [Editar aliases de comandos](topic:command-aliases).

### OPTIONKEYS

Aliases: `OPTKEYS`; ou {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Letras das opções}} › {{ui:Editar…}}. Abre o seu ficheiro de letras de opções (linhas `COMMAND.OPTION, LETTERS`, como `ARRAY.PO, P`); {{ui:Guardar}} aplica-o e {{cmd:REINIT}} aplica-o de novo. Veja [Dar às opções dos comandos as suas próprias letras](topic:option-letters).

### LISPEDIT

Aliases: `VLIDE`; ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Editor LISP}}. Abre o editor LISP, uma janela que fica aberta ao lado do desenho.

- O texto: números de linha, o parêntese correspondente ao cursor marcado (a vermelho quando não tem par), {{key:Enter}} indenta a nova linha sob o parêntese aberto, {{key:Tab}} escreve dois espaços, {{key:Esc}} sai do texto.
- {{ui:Carregar no desenho}} ({{key:Ctrl+Shift+Enter}}): lê cada forma, como {{cmd:APPLOAD}} faz com o ficheiro, e cria os seus comandos `c:`. O ficheiro aparece na lista de {{cmd:APPLOAD}}.
- {{ui:Executar seleção}} ({{key:Ctrl+Enter}}): avalia as formas selecionadas, ou a forma onde está o cursor.
- {{ui:Stop}}: termina uma rotina em execução.
- {{ui:Consola}}: o que a rotina imprimiu, e cada erro com a sua linha; clique num erro para ir até lá. O texto é executado uma forma de topo de cada vez, por isso a linha é a da forma, ou dentro dela a linha que chama a função que o erro indica.
- {{ui:Novo}}, {{ui:Abrir}}, {{ui:Guardar}} ({{key:Ctrl+S}}): um ficheiro `.lsp`. O texto fica também guardado neste navegador, por isso fechar a janela não perde nada.
- Ao lado do texto: as funções que a rotina define, as que chama e que este LISP ainda não tem, as que chama sem estarem definidas nela nem incorporadas, e as listas completas do que está incorporado e do que não está.

Um texto com um parêntese que nunca fecha, ou uma cadeia que nunca termina, não é executado: indica-se a linha. Não há depurador passo a passo, pontos de paragem nem janela de observação. Veja [Executar rotinas LISP](topic:run-lisp).

### HELP

Aliases: `?`. Imprime cada comando, os seus aliases e uma descrição de uma linha no histórico da linha de comandos. Não abre esta ajuda: prima {{key:F1}} ou clique em {{ui:Ajuda}} para isso.

## Pedido de seleção de objetos

Em qualquer pedido `Select objects`: clique em objetos, desenhe janelas (da esquerda para a direita) e cruzamentos (da direita para a esquerda) com dois cliques, ou prima e arraste um laço ({{key:Space}} enquanto arrasta: janela, cruzamento, vedação), {{key:Shift}}+clique para remover, e prima {{key:Enter}} para terminar. Também pode escrever `ALL` (tudo), `L` (o último objeto), `P` (Anterior: o que o último comando usou), `F` (Vedação: objetos que uma linha de pontos atravessa; `U` anula um ponto), `W` (Janela), `C` (Cruzamento), `R` (modo Remover: as escolhas retiram objetos; o pedido diz `Remove objects`) e `A` (Acrescentar de novo). `?` lista-os. Não são mostrados no pedido. {{key:Tab}} sobre objetos sobrepostos destaca o seguinte; clique para o escolher. Veja [Selecionar objetos](topic:select-objects).

### ACCESS

Alias: `AX`. Desenhar sem ver. {{cmd:ACCESS}} liga ou desliga o Acesso (`On`, `Off`) e muda os sons de snap (`Sound`) e os comandos de voz (`Voice`); indica primeiro o estado. Com o Acesso ligado, cada comando e resultado é falado pelo leitor de ecrã e a área de desenho tem um cursor de teclado. O tópico de ajuda "Desenhar sem ver" tem as teclas.

### DESCRIBE

Alias: `DESC`. Diz o que o desenho contém: quantos objetos, de que tipo, de que tamanho, quantas camadas, o que está selecionado. Só lê; não altera nada.

### WHEREAMI

Alias: `WHERE`. Diz onde está o cursor, nas unidades do desenho.

### NEARBY

Diz o que está perto do cursor, o mais próximo primeiro, cada um com a sua distância e o lado em que está.

### SAYSEL

Diz o que está selecionado, uma frase por objeto (comprimento da linha, extremidades e ângulo; raio e centro do círculo; texto tal como está escrito).

### VOICE

Liga ou desliga os comandos falados. São reconhecidos neste computador; quando o navegador não o consegue fazer, a voz fica desligada, a menos que escolha o serviço online do navegador nas Definições.

### TOUCHCROSSHAIR

Alias: `TCX`. A cruz de mira deslocada para desenhar com o dedo, para que a ponta do dedo não tape o ponto escolhido. Enquanto está ativa, um dedo no desenho não escolhe: move uma cruz que fica acima do dedo e para um lado. Os snaps a objetos e o rastreio seguem a cruz. Levantar o dedo não escolhe nada e deixa a cruz onde está. Para escolher, prima o botão {{ui:Clicar}} no canto do desenho, ou toque em qualquer ponto do desenho com um segundo dedo. Mantenha {{ui:Clicar}} premido enquanto move o outro dedo para arrastar (uma janela de seleção, um laço, um grip). Um dedo pousado e parado, ou o botão {{ui:Enter}}, é Enter. Dois dedos deslocam e aproximam como antes. Perto do bordo inferior e do bordo lateral oposto, a cruz aproxima-se do dedo, para que toda a parte do desenho possa ser alcançada. Uma caneta e um rato escolhem sempre diretamente.

{{cmd:TOUCHCROSSHAIR}} indica o estado e pergunta `ON`, `OFF`, `Auto` (ativo só onde um dedo é o único ponteiro, por isso desligado num computador com rato), `Distance` (a distância da cruz ao dedo, de 24 a 240 pixels) ou `Side` (`Left`: para cima e para a esquerda, para a mão direita; `Right` para a mão esquerda; os botões passam ao outro canto). As mesmas escolhas estão em Definições › CadCraft, e num aparelho com ecrã tátil a barra de estado tem um interruptor {{ui:Cruz de mira deslocada}}. As escolhas ficam guardadas neste navegador.

### WHOHAS

Diz quem tem um desenho aberto. No CadCraft Studio, num computador, abrir um DWG ou DXF escreve ao seu lado um pequeno ficheiro de bloqueio (`Plan.dwg.cclock`: quem, desde quando, qual versão), atualiza-o a cada minuto enquanto o desenho está aberto, e remove-o quando o desenho fecha. Abrir um desenho que outra pessoa tem aberto diz quem e desde quando, e oferece {{ui:Abrir em modo de leitura}} (Guardar pede então um novo nome), {{ui:Abrir mesmo assim}} (a outra pessoa é avisada na sua próxima atualização) ou {{ui:Cancelar}}. Guardar sobre um ficheiro que outra pessoa tem aberto pergunta primeiro. Um bloqueio que não foi atualizado durante cinco minutos é considerado obsoleto: a outra cópia fechou sem guardar, ou o computador está em suspensão.

{{cmd:WHOHAS}} pergunta `Current` (o desenho aberto), `File` (escolher um), `FOlder` (escolher uma pasta: cada desenho dela que esteja aberto algures é listado), `Path` (escrever um caminho completo) ou `Name` (o nome que os outros veem; o nome da sua conta quando tem sessão iniciada). O Studio só pode aceder às pastas que escolheu: para um desenho aberto a partir de uma pasta que nunca foi escolhida, diz uma vez que não consegue assinalar o desenho como aberto; `FOlder` escolhe a pasta, e os bloqueios funcionam aí a partir daí. O bloqueio é uma nota para as pessoas, não uma barreira: outro programa ainda pode escrever o ficheiro. Num navegador não há pastas onde procurar, e o comando diz isso.

### OVERKILL

Apaga objetos duplicados e arruma linhas e arcos sobrepostos, para desenhos que chegam cheios de traços duplicados. `Select objects to clean up`, {{key:Enter}}, depois {{key:Enter}} de novo para limpar com as definições mostradas, ou altere uma primeiro:

- `Tolerance`: a proximidade que duas coordenadas devem ter para contarem como iguais (0.000001 para começar; 0 significa exatamente iguais).
- `Ignore`: propriedades que podem diferir entre dois objetos de resto iguais. Escreva um nome para o ativar: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ou `None` / `All`. {{key:Enter}} quando terminar.
- `Overlap`: ligado ou desligado. Ligado, linhas sobre uma mesma reta que se sobrepõem tornam-se uma linha (uma linha dentro de outra é simplesmente apagada), e arcos sobre um mesmo círculo que se sobrepõem tornam-se um arco; arcos que fecham uma volta completa tornam-se um círculo, e um arco sobre um círculo é apagado.
- `Ends`: ligado ou desligado. Ligado, linhas sobre uma mesma reta e arcos sobre um mesmo círculo que apenas se tocam extremidade com extremidade tornam-se uma só peça.

Cada tipo de objeto é verificado quanto a duplicados: dois objetos são duplicados quando a sua geometria é a mesma dentro da tolerância e a sua camada, cor, tipo de linha, escala do tipo de linha, espessura de linha, espessura, transparência e altura coincidem (menos as que ignorar). Linhas e polilinhas abertas também coincidem quando desenhadas ao contrário. O primeiro objeto na ordem de desenho fica e mantém as suas próprias propriedades. O comando indica quantos objetos verificou e apagou: duplicados, partes sobrepostas fundidas, partes unidas extremidade com extremidade. Um {{cmd:UNDO}} desfaz tudo. As definições duram até fechar a janela do desenho.

Deixa de fora: objetos em camadas bloqueadas e objetos ocultos. Não funde linhas com altura (Z) (os duplicados exatos delas são apagados na mesma), e não toca em segmentos dentro de uma polilinha (não são afinados), nem numa linha sobre um segmento de polilinha, nem numa polilinha fechada desenhada ao contrário.

### DRAWORDER

Muda os objetos que ficam desenhados à frente. `Select objects to re-order`, {{key:Enter}}, depois `Above objects`, `Under objects`, `Front` ou `Back` ({{key:Enter}} = `Back`). `Above objects` e `Under objects` pedem os objetos de referência: a seleção fica mesmo à frente do mais à frente deles, ou mesmo atrás do mais atrás. Os objetos selecionados mantêm a sua própria ordem entre si. Um passo de anular. A ordem é guardada com o desenho em DWG e DXF, onde é a ordem pela qual os objetos são escritos.

No ecrã cada objeto é desenhado na ordem do desenho, como outros programas que abrem o ficheiro o desenham: uma trama sólida, uma polilinha larga ou uma máscara de texto cobre as linhas e o texto que estão atrás, e o que está à frente cobre-o. Onde uma linha cruza um texto, ambos aparecem. As imagens e as páginas PDF anexadas ficam por baixo das linhas. Num desenho muito grande cujos preenchimentos e linhas se sobrepõem e alternam mais de 256 vezes, as primeiras 256 mantêm a ordem e as restantes desenham os seus preenchimentos por baixo das linhas, para que redesenhar continue rápido.

### TEXTTOFRONT

Traz texto, cotas e chamadas para a frente de tudo o resto no espaço aberto: `Text`, `Dimensions`, `Leaders` ou `All` ({{key:Enter}} = `All`). Um passo de anular. Indica-o quando não há nenhum, ou quando já estão à frente.

### HATCHTOBACK

Envia cada trama do espaço aberto para trás de tudo o resto, para que os preenchimentos deixem de cobrir as linhas e o texto no ficheiro guardado. Sem perguntas. Um passo de anular.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Mostra apenas os objetos selecionados: tudo o resto no espaço aberto sai de vista até {{cmd:UNISOLATEOBJECTS}}. Ao contrário de {{cmd:LAYISO}}, funciona sobre os objetos que escolhe, sejam quais forem as suas camadas, e não altera nenhuma camada. Os objetos ocultos não são desenhados, escolhidos, encaixados, ampliados nem impressos, e os comandos que aceitam `ALL` passam por eles. O que desenhar enquanto os objetos estão isolados aparece como de costume.

Isto vale só para a sessão: nada disto é guardado com o desenho, não é um passo de anular, e ao reabrir o desenho tudo aparece. Enquanto houver objetos ocultos, a barra de estado mostra um botão com o seu número; clique nele para os voltar a mostrar.

### HIDEOBJECTS

Oculta os objetos selecionados até {{cmd:UNISOLATEOBJECTS}}. As mesmas regras de {{cmd:ISOLATEOBJECTS}}: só para a sessão, não guardado, não é um passo de anular.

### UNISOLATEOBJECTS

Aliases: `UNISOLATE`, `UNHIDE`. Mostra de novo cada objeto ocultado por {{cmd:ISOLATEOBJECTS}} ou {{cmd:HIDEOBJECTS}}, e indica quantos voltaram.

### LAYLOCKFADE

Define como os objetos em camadas bloqueadas aparecem, e se um clique os alcança. Indica o estado atual, depois aceita:

- um número de 0 a 90: a quantidade de esbatimento em percentagem (50 para começar). 0 desliga o esbatimento.
- `ON` ou `OFF`: esbatimento ligado ou desligado, mantendo a quantidade.
- `Pick`, depois `Yes` ou `No`: um clique pode selecionar objetos em camadas bloqueadas quando nenhum comando está em curso? `No` (a predefinição): não podem ser escolhidos de todo. `Yes`: um clique ou uma janela selecionam-nos para que as {{ui:Propriedades}} os possam mostrar; continuam sem poder ser alterados, e o `Select objects` de um comando nunca os aceita.

Os snaps a objetos encontram objetos em camadas bloqueadas em qualquer dos casos. As impressões nunca são esbatidas. Ambas as definições são suas, não do desenho, e estão também em {{ui:Definições}} sob {{ui:Camadas bloqueadas}}.

### BURST

Decompõe referências de bloco e mantém o que os seus atributos dizem. `Select block references to burst`, {{key:Enter}}: cada referência é substituída pelos objetos do bloco, e o valor de cada atributo visível torna-se texto simples na camada desse atributo (um atributo na camada 0 cai na camada da referência, como os outros objetos do bloco na camada 0). Os atributos invisíveis são descartados. Um bloco dentro do bloco continua a ser uma referência de bloco. Um passo de anular; indica quantas referências foram decompostas e quantos valores de atributo se tornaram texto.

Recusa um desenho ligado pelo nome (primeiro incorpore-o, ou copie dele com {{cmd:NCOPY}}), e deixa os outros objetos selecionados em paz. Para referências de bloco, {{cmd:EXPLODE}} dá os mesmos objetos; {{cmd:BURST}} trata apenas de referências de bloco e conta o texto dos atributos.

### TXT2MTXT

Alias: `T2M`. Une textos de uma linha num só texto de parágrafo. `Select single-line text to join`, {{key:Enter}}, depois `Paragraph` (as linhas correm juntas e quebram na largura da linha mais larga) ou `Lines` (cada texto continua uma linha própria); {{key:Enter}} escolhe o último usado. As linhas são ordenadas de cima para baixo, depois da esquerda para a direita, ao longo da direção do texto de cima. O parágrafo fica pendurado no canto superior esquerdo do texto de cima e toma a sua altura, rotação, estilo, camada e cor. Um passo de anular.

O texto que já é de parágrafo, o texto em branco e os outros objetos da seleção ficam de fora, e o comando indica quantos.

### NCOPY

Copia objetos de uma referência de bloco ou de um desenho ligado para o desenho, sem decompor nada. `Pick an object inside a block reference or a linked drawing`: o objeto mais próximo da escolha é copiado onde se vê, por mais blocos aninhados que esteja; escolha mais, depois {{key:Enter}}. Depois `Base point to move the copies`: {{key:Enter}} deixa-as no lugar, ou dê um ponto base e um segundo ponto. O comando inteiro é um passo de anular.

Uma cópia toma a camada onde se vê: um objeto na camada 0 dentro de um bloco cai na camada da referência em que estava, e uma cor ByBlock torna-se a cor dessa referência. De um desenho ligado, a camada `Plan|Walls` torna-se `Plan$0$Walls` (o nome que a ligação lhe dá), feita com a cor, o tipo de linha e a espessura da camada ligada. O valor de um atributo é copiado como texto. Referências de bloco em camadas bloqueadas não podem ser escolhidas.

### FLATTEN

Define a altura (Z) e a espessura dos objetos selecionados como 0. `Select objects to flatten`, {{key:Enter}}. Também achata os objetos dentro das definições de blocos que a seleção usa (e os blocos dentro deles), por isso cada referência a esses blocos muda; os desenhos ligados ficam como estão. Um passo de anular; indica quantos objetos mudaram, e diz quando nenhum tinha altura ou espessura.

O que o CadCraft guarda da terceira dimensão num desenho 2D é: uma altura em círculos, arcos, elipses, pontos, texto, referências de bloco, tramas, chamadas e polilinhas (a sua elevação), uma altura em cada extremidade de uma linha, e uma espessura em linhas, círculos, arcos, polilinhas, pontos e texto, tal como o ficheiro os tinha. {{cmd:FLATTEN}} limpa exatamente isso. Não toca no modelo 3D do separador 3D, nas faces 3D ou nos sólidos, e um objeto desenhado num plano inclinado já foi trazido para o plano do desenho quando o ficheiro foi aberto.

### BREAKLINE

Desenha uma linha com um símbolo de interrupção, para uma vista que é cortada. Indica o tamanho e a extensão atuais, depois `First point of the break line` (ou `Size` / `Extension` para os alterar primeiro), `Second point`, e `Where the break symbol sits`: clique ao longo da linha, ou {{key:Enter}} para o meio. O resultado é uma polilinha na camada atual: a linha, prolongada para além de cada ponto pela extensão, com um traço em forma de Z tão alto como o tamanho e metade do comprimento.

`Size` e `Extension` ficam memorizados como as suas definições (o tamanho começa como o dobro da altura do texto da cota vezes a escala da cota; a extensão, metade do tamanho). {{key:Enter}} repete o comando.

### AUDIT

Verifica o desenho aberto quanto a danos e repara-o. {{cmd:AUDIT}} olha para cada objeto no modelo, nas folhas e dentro dos blocos, e para a tabela de camadas, e lista o que encontra por tipo:

- números que não são finitos ou são absurdamente grandes;
- objetos sem tamanho: uma linha sem comprimento, um círculo sem raio, uma polilinha com um só ponto, texto sem letras ou altura, uma referência de bloco com escala zero;
- objetos numa camada que o desenho não tem; referências a um bloco que não existe; nomes de estilos de texto e de cota e de tipos de linha que não estão no desenho;
- blocos que se contêm a si próprios, diretamente ou através de outros blocos;
- objetos que partilham um identificador, uma chave ou um identificador de ficheiro;
- cotas sem os pontos a partir dos quais são medidas, e tramas cujo contorno não é um contorno fechado.

Depois pergunta `Fix them? [Yes/No]`. `No` não altera nada. `Yes` repara tudo num só passo de anular: o que não pode ser desenhado é removido (números maus, sem tamanho, bloco em falta, cota danificada, trama sem contorno utilizável, a referência que fecha um círculo de blocos); uma camada em falta é criada; os nomes de estilos e tipos de linha desconhecidos voltam às predefinições; uma chave partilhada é substituída. Indica quantos objetos foram removidos e quantos reparados. As mesmas conclusões aparecem no painel Problemas, cada uma com o seu próprio {{ui:Reparar}}.

Não recusa nada, mas só verifica o que o próprio CadCraft desenha: os dados guardados para outros programas (sólidos 3D, objetos OLE) não são abertos.


### RECOVER

Abre um DXF ou DWG danificado. {{cmd:RECOVER}} pede o ficheiro, lê o que pode ser lido em vez de recusar o ficheiro, lista o que saltou ou assumiu, depois verifica e repara o desenho como {{cmd:AUDIT}} faz com `Yes`.

- DXF: as linhas que não fazem parte de um par código e valor são saltadas até os pares voltarem a alinhar; uma secção sem fim é fechada; um ficheiro cortado é lido até ao corte; um DXF binário cortado é lido até ao seu último valor completo. Quando uma secção, um bloco ou um objeto ainda não pode ser lido, fica de fora e é indicado pelo nome, e a leitura continua para além dele.
- DWG: os objetos que falham as suas verificações ou não podem ser descodificados ficam de fora, e uma lista de objetos perdida é reconstruída percorrendo os dados dos objetos.

O ficheiro no disco não é alterado. O desenho recuperado abre-se por guardar: guarde-o com um nome novo. Um ficheiro do qual nada se consegue ler é recusado, com o motivo.


### LEGACYTEXT

Converte texto escrito com tipos de letra vietnamitas antigos de 8 bits para Unicode. Nomes curtos `TEXTTOUNICODE` e `VNTEXT`.

Os desenhos vietnamitas mais antigos guardam o texto como caracteres ocidentais que só o tipo de letra transforma em vietnamita: texto TCVN3 nos tipos ABC (`.VnTime`, `.VnArial`, e os tipos em maiúsculas cujos nomes acabam em `H`), e texto VNI nos tipos VNI (`VNI-Times`). O CadCraft mostra esse texto como se lê assim que o desenho é aberto, pelo tipo de letra do seu estilo de texto, do objeto, ou de um troço de texto de parágrafo; o ficheiro continua a ter os caracteres antigos.

{{cmd:LEGACYTEXT}} diz quantos textos encontrou em cada codificação e pergunta `Convert … to Unicode?`. `Yes` reescreve cada um (modelo, folhas, blocos, valores e definições de atributos) e dá aos estilos de texto um tipo de letra Unicode (Times New Roman, Arial ou Courier New, conforme o tipo antigo), num só passo de anular. A formatação dentro do texto de parágrafo é mantida.

Quando nenhum texto usa um tipo conhecido (um estilo que perdeu o nome do tipo de letra), pergunta `Read selected texts as [Tcvn3/Vni/None]`: escolha a codificação e selecione os textos. O texto que já é Unicode fica como está. Os textos substituídos de cotas e o texto de chamadas múltiplas não são convertidos.

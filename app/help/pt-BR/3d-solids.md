---
title: Modelar em 3D
summary: Veja o desenho em 3D na guia 3D e crie sólidos simples a partir dele: extrudar (com inclinação ou ao longo de um caminho), revolucionar, empurrar e puxar faces, caixas, cilindros e cunhas, unir, subtrair e interseccionar sólidos, depois mover, copiar, girar e apagar, e colocar vistas planas 2D deles em uma folha.
keywords: 3d, três d, sólido, sólidos, 3dsolid, região, corpo, acis, sat, sab, sólidos de outros programas, abrir desenho 3d, extrudar, ext, revolucionar, rev, varrer, inclinação, caminho, presspull, empurrar e puxar, empurrar puxar, caixa, cilindro, cyl, cunha, 3dorbit, órbita, vista, vscurrent, estilo visual, sombreado, linha oculta, arame, raio x, xray, iso, perspectiva, paralela, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cubo de vista, união, uni, subtrair, su, interseção, in, booleana, combinar, unir sólidos, viewbase, flatshot, vista plana, vista 2d, vista do desenho, vista frontal, vista superior, vista lateral, linhas ocultas
from: 13060e71
---

## O que você vai criar

Uma planta de sala de 1000 × 600 extrudada em um bloco de 400 de altura, uma face puxada para cima e um cilindro ao lado — depois o modelo salvo com o desenho e exportado para um visualizador 3D ou uma impressora.

A guia {{ui:3D}} fica ao lado de {{ui:Modelo}}, abaixo do desenho. Ela mostra o desenho do espaço modelo deitado no chão, nas cores das suas camadas (camadas desligadas ou congeladas ficam ocultas), e os sólidos que você criar. Na primeira vez que ela abre, a vista 3D é carregada; depois disso, a troca é imediata.

## Extrudar uma forma

1. Na guia {{ui:Modelo}}, digite `REC` e pressione {{key:Enter}}. Digite `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Clique na guia {{ui:3D}}. A barra de ferramentas mostra o grupo {{ui:3D}} no lugar dos grupos do desenho.
3. Clique em {{ui:Extrudar}} (ou digite {{cmd:EXTRUDE}}, `EXT`). Clique dentro do retângulo e pressione {{key:Enter}}.
4. Digite `400` e pressione {{key:Enter}}. O histórico diz "1 sólido extrudado, 400 de altura" com o volume.

Polilinhas fechadas (inclusive com arcos), retângulos, polígonos, círculos e elipses podem ser extrudados; linhas e polilinhas abertas não podem, e o histórico diz o motivo. Você também pode selecionar as formas na guia {{ui:Modelo}} primeiro e digitar `EXTRUDE` ali. Em vez de digitar a altura, você pode defini-la com um clique: o contorno acompanha o cursor para cima e para baixo. Uma altura negativa vai para baixo. Digite `D` no prompt de altura para apagar as formas 2D depois de extrudar (`D` de novo as mantém).

No prompt de altura, `T` (inclinação) pede um ângulo em graus: as laterais se inclinam para dentro, de modo que o topo fica menor (um ângulo negativo o deixa maior); um ângulo inclinado demais para a forma é recusado. `P` (Caminho) varre as formas ao longo de um caminho (veja abaixo).

## Revolucionar e varrer

- {{cmd:REVOLVE}} (`REV`, ou {{ui:Mais}} › {{ui:Revolucionar em torno de um eixo}}): selecione formas fechadas, pressione {{key:Enter}}, depois clique nas duas extremidades do eixo (ou digite `X` ou `Y` para o eixo do desenho que passa por 0,0), e então digite um ângulo ou pressione {{key:Enter}} para dar a volta completa. A forma gira em torno do eixo e se levanta do chão: desenhe o contorno de meio vaso ao lado de uma linha e revolucione-o em torno da linha. A forma pode tocar o eixo, mas não pode cruzá-lo. Uma volta completa tem 48 passos.
- {{cmd:SWEEP}} (ou {{ui:Mais}} › {{ui:Varrer ao longo de um caminho}}, ou `P` no prompt de altura do EXTRUDE): selecione formas fechadas (o perfil), pressione {{key:Enter}}, depois clique no caminho: uma linha, polilinha, arco, círculo ou elipse. O perfil se levanta sobre o caminho, com o meio sobre ele, e percorre-o; as quinas são emendadas em meia-esquadria, e um caminho fechado gera um anel. Um retângulo pequeno varrido ao longo do contorno de uma sala faz um rodapé; um círculo ao longo de uma polilinha faz um tubo.

## Empurrar e puxar uma face

1. Clique em {{ui:Empurrar/puxar}} (ou digite {{cmd:PRESSPULL}}).
2. Clique na face superior do bloco.
3. Digite `100` e pressione {{key:Enter}}, ou mova o cursor e clique. O bloco fica com 500 de altura.

## Caixas, cilindros e cunhas

- {{cmd:BOX}}: clique ou digite dois cantos, depois uma altura.
- {{cmd:CYLINDER}} (`CYL`): o centro, o raio, depois uma altura. Cilindros e círculos extrudados têm 48 lados, com sombreamento suave.
- {{cmd:WEDGE}} (`WE`): dois cantos e uma altura. Tem altura total no primeiro canto e cai até zero no outro.

Na guia 3D, um clique cai sobre a face ou aresta sob o cursor; senão, no chão. Assim, uma caixa pode ficar apoiada sobre outro sólido.

## Mover, copiar, girar e apagar sólidos

Na guia 3D, um clique seleciona um sólido; arraste da esquerda para a direita para uma janela, da direita para a esquerda para um cruzamento. Depois:

- {{cmd:MOVE}}: clique em um ponto base e onde ele vai, ou digite `<100,0,0>` (ou `@100,0`) para uma distância ao longo de X, Y e Z.
- {{cmd:COPY}}: o mesmo, deixando o original.
- {{cmd:ROTATE}}: digite um ângulo (ele gira em torno do meio da seleção, em torno de Z), ou clique no centro, num ponto inicial e no ângulo.
- {{cmd:ERASE}} ou {{key:Delete}}.

## Unir, subtrair e interseccionar sólidos

Abra {{ui:Mais}} na barra de ferramentas 3D, ou digite o comando:

- {{cmd:UNION}} (`UNI`): selecione os sólidos, pressione {{key:Enter}}: eles se tornam um único sólido.
- {{cmd:SUBTRACT}} (`SU`): selecione os sólidos que serão mantidos e pressione {{key:Enter}}, depois os que serão retirados e pressione {{key:Enter}}. Um furo através de um bloco: desenhe um cilindro atravessando-o e depois subtraia o cilindro.
- {{cmd:INTERSECT}} (`IN`): selecione os sólidos, pressione {{key:Enter}}: sobra apenas o que todos têm em comum.

O histórico informa o volume do resultado. Cada operação é um passo de desfazer. A primeira que você executar carrega o motor booleano 3D (cerca de 0.5 MB; incluído em {{ui:Salvar para uso offline}}). Somente sólidos fechados podem ser combinados: um sólido com arestas abertas (de faces 3D soltas de outro programa) é recusado, com esse motivo. O resultado é um único sólido; faces curvas continuam formadas por facetas planas, como o cilindro era.

Clique duas vezes em um sólido para editar suas faces e arestas isoladamente; {{key:Esc}} o fecha de novo. Cada alteração 3D é um passo de desfazer no mesmo histórico do desenho: {{key:Mod+Z}} desfaz a última ação feita em qualquer uma das guias.

## Vistas planas em uma folha

1. Abra uma aba de folha (ou fique em {{ui:Modelo}}), depois digite {{cmd:VIEWBASE}} (ou `FLATSHOT`).
2. Escolha a vista: {{key:Enter}} para a frontal, ou Superior (T), Direita (R), Esquerda (L), Traseira (BA), Inferior (BO), Isométrica (I).
3. {{key:Enter}} mostra as linhas ocultas, tracejadas; `H` as deixa de fora.
4. {{key:Enter}} usa a escala que o CadCraft sugere: em uma folha, a maior escala padrão (como 1:20) na qual a vista cabe em menos da metade do papel. Ou digite uma: `1:50`, `2:1`.
5. Clique, ou digite, onde fica o centro da vista.

A vista é uma referência de bloco, `VIEW-FRONT-1` e assim por diante: arestas visíveis na camada VIEW-VISIBLE (0.5 mm), ocultas na VIEW-HIDDEN (tracejadas, 0.25 mm). Mova, cote e plote-a como qualquer outro desenho. Ela é uma imagem dos sólidos no momento em que foi feita: depois de alterá-los, apague a vista e execute {{cmd:VIEWBASE}} de novo. Para mais vistas, execute o comando uma vez para cada vista.

## Olhar ao redor

Arraste com a roda para orbitar, {{key:Shift}} + arrastar com a roda ou com o botão direito para deslocar, e gire a roda para dar zoom no cursor. Em trackpad, dois dedos orbitam e pinça dá zoom. Um clique com o botão direito sem arrastar é {{key:Enter}}, como nas outras guias. 3DORBIT permite que o botão esquerdo oriente a vista até você pressionar {{key:Enter}} ou {{key:Esc}}.

- {{ui:Vistas}} (ou {{cmd:VIEW}}): Isométrica, Superior, Inferior, Frontal, Traseira, Esquerda, Direita, Perspectiva ou Paralela, e Zoom para tudo.
- {{ui:Estilo}} (ou {{cmd:VSCURRENT}}, `VS`): Sombreado, Sombreado com arestas, Linha oculta, Arame ou Raio X.

Os pontos em que você clica se ajustam (snap) aos sólidos (cantos, arestas, faces) e ao desenho 2D no chão: as extremidades e os meios de suas linhas e arcos, e pontos ao longo deles. As linhas 2D nunca são selecionadas na guia 3D. Quando um comando pede objetos 2D (EXTRUDE, REVOLVE, SWEEP), um clique escolhe um, arrastar da esquerda para a direita pega o que está inteiramente dentro da janela, e arrastar da direita para a esquerda pega o que ela cruza, como na guia {{ui:Modelo}}.

Um cubo de vista fica no canto superior direito da guia 3D: clique em uma face, aresta ou canto para olhar a partir dali, arraste-o para orbitar, e o botão de casa volta à vista isométrica. Isso é {{ui:Automática}}, o início de {{ui:Indicador de canto}} nas [configurações do CadCraft](topic:settings). Com {{ui:Cubo de vista}} definido, a guia {{ui:Modelo}} também mostra um cubo, olhando de cima; clicar em qualquer outro lado abre a guia 3D olhando a partir dali. Com {{ui:Ícone de eixos}} definido, as duas guias mostram o marcador de eixos.

## Sólidos de outros programas

Um desenho de outro programa pode ter sólidos 3D, regiões e corpos (3DSOLID, REGION, BODY: o outro programa mantém a forma deles como dados ACIS). O CadCraft mostra os que estão no espaço modelo na guia 3D, na cor da camada deles e com as próprias arestas, na primeira vez que você abre a guia; a linha de comando então informa quantos foram desenhados.

- Eles aparecem como são: você não pode selecioná-los, movê-los nem alterá-los. Camadas desligadas ou congeladas os ocultam.
- Salvar como DWG grava cada um de volta sem alterações, em qualquer versão DWG, para que o outro programa os receba de novo. Arquivos DXF não os mantêm: o CadCraft os grava apenas em DWG e avisa isso quando você salva como DXF.
- Desenhados: faces planas, e faces em cilindros, cones, esferas, toros e superfícies spline simples, com arestas retas, arredondadas e spline. Uma face em qualquer outro tipo de superfície, ou que o CadCraft não consegue dispor, não é adivinhada: fica de fora e é listada, por exemplo "Ainda não desenhado (sólidos 3D): 2 faces em spline-surface (sweepsur), uma superfície ainda não desenhada."
- Sólidos dentro de blocos ainda não são mostrados; "Sobre este arquivo" os conta.

Faces curvas são desenhadas como pequenos pedaços planos, a cerca de 7.5° um do outro, então um sólido curvo fica um pouco facetado de perto.

## Salvar e exportar

Salvar mantém o modelo 3D, em DWG e em DXF. Cada face é gravada como uma face 3D na camada `CC-3D`, para que outros programas mostrem os sólidos, e o CadCraft mantém no arquivo sua própria cópia exata, que ele relê quando você abre o desenho de novo, com a vista 3D como estava (câmera, projeção e estilo visual). Faces 3D feitas por outros programas entram na guia 3D como faces soltas, mantidas juntas como um grupo. Uma face 3D dentro de um bloco entra uma vez para cada referência desse bloco no modelo, posicionada e girada como a referência; no próprio bloco, e em uma folha, uma face 3D é desenhada plana, como o contorno dela.

{{ui:Exportar}} no grupo 3D baixa somente os sólidos: GLB para visualizadores e a web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ou STL para impressão 3D, em milímetros ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pergunta qual.

:::note
O modelo 3D tem tamanho real. Um desenho sem unidades é contado como milímetros, então 1000 é um metro. Se você mudar as unidades do desenho depois (Propriedades, sem nada selecionado), os sólidos são escalados junto para continuarem sobre o desenho, e o histórico informa isso. Um {{key:Mod+Z}} desfaz a mudança de unidades e a escala juntas.
:::

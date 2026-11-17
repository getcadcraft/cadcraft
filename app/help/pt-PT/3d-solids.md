---
title: Modelar em 3D
summary: Veja o desenho em 3D no separador 3D e crie sólidos simples a partir dele: extrudir (com inclinação ou ao longo de um caminho), revolução, empurrar e puxar faces, caixas, cilindros e cunhas, unir, subtrair e fazer a interseção de sólidos, depois mover, copiar, rodar e apagar, e colocar vistas planas 2D deles numa folha.
keywords: 3d, três d, sólido, sólidos, 3dsolid, região, corpo, acis, sat, sab, sólidos de outros programas, abrir desenho 3D, extrudir, ext, revolução, rev, varrimento, inclinação, caminho, presspull, empurrar e puxar, caixa, cilindro, cyl, cunha, 3dorbit, orbitar, vista, vscurrent, estilo visual, sombreado, linha oculta, arame, raio-X, xray, iso, perspetiva, paralela, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cubo de vistas, união, uni, subtrair, su, interseção, in, booleana, combinar, unir sólidos, viewbase, flatshot, vista plana, vista 2D, vista de desenho, vista de frente, vista de topo, vista lateral, linhas ocultas
from: 13060e71
---

## O que vai criar

Um contorno de compartimento de 1000 × 600 extrudido num bloco com 400 de altura, uma face puxada para cima e um cilindro ao lado — depois o modelo guardado com o desenho e exportado para um visualizador 3D ou uma impressora.

O separador {{ui:3D}} fica ao lado de {{ui:Modelo}}, por baixo do desenho. Mostra o desenho do espaço modelo assente no solo, com as cores das suas camadas (as camadas desligadas ou congeladas continuam ocultas), e os sólidos que criar. Na primeira vez que o abre, a vista 3D carrega; depois disso, muda de imediato.

## Extrudir uma forma

1. No separador {{ui:Modelo}}, escreva `REC` e prima {{key:Enter}}. Escreva `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Clique no separador {{ui:3D}}. A barra de ferramentas mostra o grupo {{ui:3D}} no lugar dos grupos do desenho.
3. Clique em {{ui:Extrudir}} (ou escreva {{cmd:EXTRUDE}}, `EXT`). Clique dentro do retângulo e prima {{key:Enter}}.
4. Escreva `400` e prima {{key:Enter}}. O histórico diz "1 sólido extrudido, 400 de altura", com o seu volume.

Polilinhas fechadas (incluindo arcos), retângulos, polígonos, círculos e elipses podem ser extrudidos; linhas e polilinhas abertas não, e o histórico indica o motivo. Também pode selecionar primeiro as formas no separador {{ui:Modelo}} e escrever `EXTRUDE` aí. Em vez de escrever a altura, pode indicá-la com o rato: o contorno segue o cursor para cima e para baixo. Uma altura negativa desce. Escreva `D` no pedido de altura para apagar as formas 2D depois de extrudir (`D` de novo mantém-nas).

No pedido de altura, `T` (Inclinação) pede um ângulo em graus: as faces laterais inclinam-se nesse valor, pelo que o topo fica mais pequeno (um ângulo negativo torna-o maior); um ângulo demasiado acentuado para a forma é recusado. `P` (Caminho) varre as formas ao longo de um caminho em vez disso (ver abaixo).

## Rodar e varrer

- {{cmd:REVOLVE}} (`REV`, ou {{ui:Mais}} › {{ui:Revolução em torno de um eixo}}): selecione formas fechadas, prima {{key:Enter}}, depois clique nas duas extremidades do eixo (ou escreva `X` ou `Y` para o eixo do desenho que passa por 0,0), e escreva um ângulo ou prima {{key:Enter}} para uma volta completa. A forma roda em torno do eixo e levanta-se do solo: desenhe metade do contorno de um vaso ao lado de uma linha e rode-o em torno dessa linha. A forma pode tocar no eixo, mas não o pode atravessar. Uma volta completa tem 48 passos.
- {{cmd:SWEEP}} (ou {{ui:Mais}} › {{ui:Varrimento ao longo de um caminho}}, ou `P` no pedido de altura do EXTRUDE): selecione formas fechadas (o perfil), prima {{key:Enter}}, depois clique no caminho: uma linha, polilinha, arco, círculo ou elipse. O perfil levanta-se através do caminho, com o meio sobre ele, e percorre-o; os cantos são cortados em meia-esquadria, e um caminho fechado faz um anel. Um retângulo pequeno varrido ao longo do contorno de um compartimento faz um rodapé; um círculo ao longo de uma polilinha faz um tubo.

## Empurrar e puxar uma face

1. Clique em {{ui:Empurrar/puxar}} (ou escreva {{cmd:PRESSPULL}}).
2. Clique na face superior do bloco.
3. Escreva `100` e prima {{key:Enter}}, ou mova o cursor e clique. O bloco fica com 500 de altura.

## Caixas, cilindros e cunhas

- {{cmd:BOX}}: clique ou escreva dois cantos, depois uma altura.
- {{cmd:CYLINDER}} (`CYL`): o centro, o raio e depois uma altura. Os cilindros e os círculos extrudidos têm 48 lados, sombreados de forma suave.
- {{cmd:WEDGE}} (`WE`): dois cantos e uma altura. Tem a altura total no primeiro canto e desce até zero no outro.

No separador 3D, um clique cai na face ou na aresta sob o cursor, ou então no solo; assim, uma caixa pode assentar sobre outro sólido.

## Mover, copiar, rodar e apagar sólidos

No separador 3D, um clique seleciona um sólido; arraste da esquerda para a direita para uma janela, da direita para a esquerda para um cruzamento. Depois:

- {{cmd:MOVE}}: clique num ponto base e no sítio para onde vai, ou escreva `<100,0,0>` (ou `@100,0`) para uma distância ao longo de X, Y e Z.
- {{cmd:COPY}}: o mesmo, deixando o original.
- {{cmd:ROTATE}}: escreva um ângulo (roda em torno do meio da seleção, em torno de Z), ou clique no centro, num ponto inicial e depois indique o ângulo.
- {{cmd:ERASE}} ou {{key:Delete}}.

## Unir, subtrair e fazer a interseção de sólidos

Abra {{ui:Mais}} na barra de ferramentas 3D, ou escreva o comando:

- {{cmd:UNION}} (`UNI`): selecione os sólidos e prima {{key:Enter}}: passam a ser um só sólido.
- {{cmd:SUBTRACT}} (`SU`): selecione os sólidos a manter e prima {{key:Enter}}, depois os que devem sair e prima {{key:Enter}}. Um furo atravessado num bloco: desenhe um cilindro que o atravesse e depois subtraia o cilindro.
- {{cmd:INTERSECT}} (`IN`): selecione os sólidos e prima {{key:Enter}}: fica apenas o que todos têm em comum.

O histórico indica o volume do resultado. Cada operação é um passo de anulação. A primeira que executar carrega o motor de operações booleanas 3D (cerca de 0,5 MB; incluído em {{ui:Guardar para offline}}). Só sólidos fechados podem ser combinados: um sólido com arestas abertas (vindo de faces 3D soltas de outro programa) é recusado, com o motivo indicado. O resultado é um único sólido; as faces curvas continuam feitas de pequenas facetas planas, tal como o cilindro.

Faça duplo clique num sólido para editar as suas faces e arestas em separado; {{key:Esc}} fecha-o de novo. Cada alteração 3D é um passo de anulação no mesmo histórico do desenho: {{key:Mod+Z}} anula a última ação feita em qualquer dos separadores.

## Vistas planas numa folha

1. Abra um separador de folha (ou fique em {{ui:Modelo}}) e escreva {{cmd:VIEWBASE}} (ou `FLATSHOT`).
2. Escolha a vista: {{key:Enter}} para a frente, ou `T` (topo), `R` (direita), `L` (esquerda), `BA` (traseira), `BO` (inferior), `I` (isométrica).
3. {{key:Enter}} mostra as linhas ocultas, a tracejado; `H` deixa-as de fora.
4. {{key:Enter}} aceita a escala que o CadCraft sugere: numa folha, a maior escala normalizada (como 1:20) à qual a vista cabe em menos de metade do papel. Ou escreva uma: `1:50`, `2:1`.
5. Clique, ou escreva, onde deve ficar o centro da vista.

A vista é uma referência de bloco, `VIEW-FRONT-1` e assim por diante: as arestas visíveis ficam na camada VIEW-VISIBLE (0,5 mm), e as ocultas em VIEW-HIDDEN (a tracejado, 0,25 mm). Mova-a, cote-a e imprima-a como qualquer outro desenho. É uma imagem dos sólidos no momento em que a criou: depois de os alterar, apague a vista e volte a executar {{cmd:VIEWBASE}}. Para mais vistas, execute o comando uma vez por cada vista.

## Observar à volta

Arraste com a roda para orbitar, {{key:Shift}} + arrastar com a roda ou com o botão direito para deslocar a vista, e rode a roda para aproximar no cursor. Num trackpad, dois dedos orbitam e um gesto de pinça aproxima. Um clique com o botão direito sem arrastar equivale a {{key:Enter}}, como nos outros separadores. `3DORBIT` permite que o botão esquerdo oriente a vista até premir {{key:Enter}} ou {{key:Esc}}.

- {{ui:Vistas}} (ou {{cmd:VIEW}}): Iso, Topo, Inferior, Frente, Trás, Esquerda, Direita, Perspetiva ou Paralela, e Zoom para tudo.
- {{ui:Estilo}} (ou {{cmd:VSCURRENT}}, `VS`): Sombreado, Sombreado com arestas, Linha oculta, Arame ou Raio-X.

Os pontos onde clica ajustam-se aos sólidos (cantos, arestas, faces) e ao desenho 2D no solo: as extremidades e os meios das suas linhas e arcos, e os pontos ao longo deles. As linhas 2D nunca são selecionadas no separador 3D. Quando um comando pede objetos 2D (EXTRUDE, REVOLVE, SWEEP), um clique escolhe um, um arrasto da esquerda para a direita apanha o que está totalmente dentro da janela, e um arrasto da direita para a esquerda apanha o que ela cruza, tal como no separador {{ui:Modelo}}.

Um cubo de vistas fica no canto superior direito do separador 3D: clique numa face, aresta ou canto para ver a partir daí, arraste-o para orbitar, e o botão da casa volta à vista isométrica. Isso corresponde a {{ui:Automática}}, a primeira opção de {{ui:Indicador de canto}} em [Definições do CadCraft](topic:settings). Definido como {{ui:Cubo de vistas}}, o separador {{ui:Modelo}} também mostra um cubo, a olhar de cima; clicar em qualquer outro lado abre o separador 3D a partir desse lado. Definido como {{ui:Ícone de eixos}}, ambos os separadores mostram o marcador de eixos.

## Sólidos de outros programas

Um desenho de outro programa pode conter sólidos 3D, regiões e corpos (3DSOLID, REGION, BODY: o outro programa guarda a forma como dados ACIS). O CadCraft mostra os que estão no espaço modelo no separador 3D, na cor da sua camada e com as suas próprias arestas, na primeira vez que abre o separador; a linha de comandos indica depois quantos foram desenhados.

- Aparecem tal como são: não pode selecioná-los, movê-los nem alterá-los. As camadas desligadas ou congeladas ocultam-nos.
- Guardar em DWG grava cada um de volta sem alterações, em qualquer versão de DWG, para que o outro programa os volte a receber. Os ficheiros DXF não os mantêm: o CadCraft grava-os apenas em DWG e indica-o quando guarda em DXF.
- Desenhados: faces planas e faces em cilindros, cones, esferas, toros e superfícies spline simples, com arestas retas, redondas e spline. Uma face em qualquer outro tipo de superfície, ou uma que o CadCraft não consiga dispor, não é adivinhada: fica de fora e é listada, por exemplo "Ainda não desenhado (sólidos 3D): 2 faces em superfície spline (sweepsur), uma superfície ainda não desenhada."
- Os sólidos dentro de blocos ainda não são mostrados; {{ui:Sobre este ficheiro}} conta-os.

As faces curvas são desenhadas como pequenas peças planas, com cerca de 7,5° de distância entre si, pelo que um sólido curvo parece um pouco facetado de perto.

## Guardar e exportar

Guardar mantém o modelo 3D, em DWG e em DXF. Cada face entra como face 3D na camada `CC-3D`, para que os outros programas mostrem os sólidos, e o CadCraft guarda no ficheiro uma cópia exata própria, que lê de volta quando volta a abrir o desenho, com a vista 3D tal como estava (câmara, projeção e estilo visual). As faces 3D feitas por outros programas entram no separador 3D como faces soltas, agrupadas num só grupo. Uma face 3D dentro de um bloco entra uma vez por cada referência a esse bloco no modelo, colocada e rodada como a referência; no próprio bloco, e numa folha, uma face 3D é desenhada plana, pelo seu contorno.

{{ui:Exportar}} no grupo 3D transfere apenas os sólidos: GLB para visualizadores e a web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ou STL para impressão 3D, em milímetros ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pergunta qual.

:::note
O modelo 3D tem tamanho real. Um desenho sem unidades conta como milímetros, por isso `1000` é um metro. Se mudar mais tarde as unidades do desenho (Propriedades, sem nada selecionado), os sólidos são escalados com elas para continuarem sobre o desenho, e o histórico indica-o. Um {{key:Mod+Z}} anula a mudança de unidades e o escalamento em conjunto.
:::

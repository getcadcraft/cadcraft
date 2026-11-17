---
title: Mapa de comandos: o que escrever
summary: Todos os comandos do CadCraft com os seus nomes curtos, de A a Z, feitos a partir do próprio programa, e os hábitos de outros programas de desenho que diferem.
keywords: mapa de comandos, comandos, nomes curtos, vindo de, lista de comandos, o que escrever, apagar, aparar, equivalente, diferenças
from: 3bdfd3e6
---

O CadCraft usa os nomes de comandos e os nomes curtos que as pessoas conhecem de outros programas de desenho: escreva `L` para uma linha, `TR` para aparar, `E` para apagar. Assim, para a maioria deles não há tabela de tradução para aprender: o nome que já conhece é o nome aqui. A lista abaixo é de todos os comandos que o CadCraft tem, feita a partir do próprio programa. {{key:Enter}} repete o último; `HELP` na linha de comandos mostra a mesma lista.

Os poucos que não são iguais, ou que ainda não estão implementados:

- **Guardar** transfere uma cópia no navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); no CadCraft Studio escreve o ficheiro. Ver [Vindo de outro software de desenho](topic:coming-from).
- **PLOT** cria um PDF (também PNG e SVG), com uma tabela de estilos de impressão; não há gestor de configuração de página.
- **DIMSTYLE** e **PEDIT** estão implementados; **PEDIT** não tem a opção Vértice de edição (os grips fazem isso).
- **TABLE** não está implementado; {{cmd:XREF}}, {{cmd:SPLINE}} e {{cmd:WBLOCK}} estão.
- Os comandos próprios de uma rotina (AutoLISP `C:NAME`) aparecem depois de a carregar com {{cmd:APPLOAD}}; não são listados aqui.

## Todos os comandos (398)

| Comando | Nomes curtos | O que faz |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitar a vista 3D com o botão esquerdo |
| `ACCESS` | `AX` | Ligar ou desligar o desenho sem visão: resultados lidos pelo leitor de ecrã, um cursor do teclado no desenho, sons de snap e comandos falados. |
| `ALIASEDIT` |  | Editar os nomes curtos dos comandos num único ficheiro de texto (o formato familiar L, *LINE) |
| `ALIGN` | `AL` | Mover e rodar objetos para que os pontos de origem caiam nos pontos de destino (um, dois ou três pares), e escalá-los se quiser |
| `ALIGNPANEL` | `ALP` | Abrir o painel Alinhar e distribuir |
| `ALIGNTO` |  | Alinhar as arestas esquerda, centro, direita, topo, meio ou base dos objetos selecionados, pela seleção, pelo primeiro ou último objeto escolhido, ou por um ponto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostrar os objetos anotativos em todas as escalas, ou só onde a escala da janela (ou do desenho) está na sua lista |
| `ANNOSCALE` | `CANNOSCALE` | Definir a escala de anotação do desenho: o texto e as cotas anotativos são redimensionados para sair impressos com o mesmo tamanho |
| `APPLOAD` | `AP` | Carregar aplicações: rotinas LISP (.lsp) e os respetivos ficheiros de diálogo (.dcl); o Conjunto de arranque (AP) |
| `ARC` | `A` | Arco: 3 pontos, Início/Centro/Fim, Início/Centro/Ângulo, Início/Centro/Comprimento, Início/Fim/Ângulo, Início/Fim/Direção, Início/Fim/Raio, Centro/Início/Fim, Centro/Início/Ângulo, Centro/Início/Comprimento, Continuar |
| `AREA` | `AA` | Área e perímetro por pontos ou de um objeto; Adicionar e Subtrair mantêm um total acumulado (AA) |
| `ARRAY` | `AR` | Cópias em linhas e colunas, ou em redor de um centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Define se os comandos ARRAY criam matrizes que continuam editáveis (1) ou cópias simples (0) |
| `ARRAYCLOSE` |  | Termina a edição dos objetos de origem de uma matriz |
| `ARRAYEDIT` |  | Altera uma matriz criada com a opção Associativa: quantidades, espaçamento, objetos de origem, um item |
| `ARRAYPATH` |  | Cópias de objetos ao longo de uma linha, arco, polilinha ou outra curva |
| `ARRAYPOLAR` |  | Cópias em redor de um ponto central |
| `ARRAYRECT` |  | Cópias em linhas e colunas |
| `ASBUILT` | `ASB` | ASBUILT lê os pontos como construídos que uma equipa mediu (CSV / TXT, tal como os escreve EXPORTPOINTS) e compara-os com os pontos do desenho: dentro ou fora da tolerância, não medidos, extra. Marca-os na camada AS-BUILT e transfere um relatório CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definir um atributo (uma etiqueta à qual um bloco pede um valor) para colocar num bloco (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Editar os valores dos atributos de uma referência de bloco na linha de comandos, um a seguir ao outro (Enter mantém um valor) |
| `ATTSYNC` |  | Atualizar as referências de um bloco de acordo com as suas definições de atributos: as novas são acrescentadas com os valores predefinidos, as removidas são eliminadas, as posições e o texto são repostos; os valores são mantidos |
| `AUDIT` |  | Verifica o desenho aberto quanto a danos: números não finitos, objetos sem tamanho, camadas, blocos, estilos e tipos de linha em falta, blocos que se contêm a si próprios, identificadores partilhados, cotas e tramas danificadas. Lista o que encontra por tipo e pergunta antes de corrigir; a correção é um único passo de anulação. |
| `AUNITS` | `ANGUNITS` | Como os ângulos são mostrados e escritos: graus decimais, graus-minutos-segundos ou rumos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Preenchimento automático do desenho ligado ou desligado, ou listar o que os padrões do desenho sugerem agora. |
| `AUTOCONSTRAIN` |  | Acrescentar restrições de coincidência, horizontais e verticais onde a geometria já está próxima |
| `AUTODIM` | `ADIM` | Cotar por regras: dimensão global, cadeias ao longo dos lados, vãos, diâmetros de furos e espaçamento da grelha, sem repetir o que já está cotado. |
| `AUTOSHEET` | `ASH` | Organiza as folhas sozinho: escolhe o formato do papel e as escalas padrão, e coloca cada vista com uma legenda e um título. |
| `BATTMAN` |  | Gestor de atributos de blocos: ordem, etiquetas, pedidos, valores predefinidos e modos dos atributos de um bloco, depois as suas referências atualizadas |
| `BCLOSE` |  | Fechar o editor de blocos: guardar o bloco ou descartar as alterações |
| `BCONVERT` |  | BCONVERT encontra geometria que se repete e transforma-a em referências de bloco. Selecione os objetos que se repetem: são encontrados todos os outros conjuntos de objetos no espaço aberto com a mesma geometria, movidos e rodados em qualquer ângulo; com Espelhado e Escalado ativos, também imagens espelhadas e cópias noutra escala. Dê ao novo bloco um nome e um ponto base; a seleção e cada cópia passam a ser referências a ele, cada uma com a sua rotação e escala. Ou escolha Bloco e indique um bloco existente para encontrar cópias soltas dos seus objetos. Uma cópia tem de ter a mesma camada, cor, tipo de linha e espessura, salvo se Propriedades estiver em Ignorar. Os objetos em camadas bloqueadas ficam como estão. Um único passo de anulação. |
| `BEDIT` | `BE` | Editor de blocos: editar os objetos e atributos de um bloco; BCLOSE guarda (BE) |
| `BLEND` |  | BLEND: uma spline entre as extremidades de duas curvas abertas, escolhidas perto das extremidades para as unir. CONtinuity: Tangente segue as duas direções; Suave segue também a curvatura. |
| `BLOCK` | `B`, `BMAKE` | Criar um bloco a partir de objetos (passam a ser uma só referência) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referência a um bloco passa a ser uma referência a outro, no mesmo lugar e com a mesma escala e rotação. Os valores dos atributos que os dois blocos têm são mantidos. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mostra o painel Blocos com o cursor no filtro. O painel mostra uma imagem de cada bloco (os colocados mais recentemente primeiro), em lista ou em grelha; clique numa imagem ou arraste-a para o desenho para colocar o bloco com INSERT. Em Biblioteca, acrescente um ficheiro DWG ou DXF seu: os seus blocos são listados com imagens e são copiados para este desenho quando colocar um. No CadCraft Studio pode acrescentar também uma pasta de desenhos, e os ficheiros e pastas ficam memorizados. |
| `BOMEDIT` | `BOMCOLUMNS` | As colunas, o agrupamento, a ordenação, o título, os totais e as observações de uma tabela de lista de materiais |
| `BOMEXPORT` |  | Guardar uma tabela de lista de materiais como ficheiro .csv |
| `BOMTABLE` | `BOM` | Uma tabela de lista de materiais em tempo real de uma zona, ou de todo o desenho |
| `BOMUPDATE` |  | Atualizar agora todas as tabelas de lista de materiais, incluindo as congeladas |
| `BOMZONE` | `BZONE` | Uma área com nome do desenho para uma lista de materiais: dois cantos, um polígono, ou o contorno de um objeto fechado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): escolha um ponto dentro de uma área fechada e obtenha uma polilinha fechada à sua volta. Os arcos continuam arcos. Ilhas contorna também as áreas que estão dentro dela. |
| `BOX` |  | Uma caixa: dois cantos e uma altura (3D) |
| `BPARAMETER` | `BPARAM` | Ainda não implementado: acrescentar um parâmetro (como Visibilidade) a um bloco. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parâmetros de bloco: parâmetros com nome e fórmulas, e vários parâmetros de visibilidade num só bloco. Funciona no editor de blocos (atribua os objetos selecionados a um estado) e numa referência selecionada (os seus próprios valores e estados). |
| `BREAK` | `BR` | Interromper uma linha, arco, círculo ou polilinha entre dois pontos (BR) |
| `BREAKATPOINT` |  | Dividir uma linha, arco ou polilinha em dois, num ponto |
| `BREAKLINE` |  | Desenhar uma linha com símbolo de quebra; o seu tamanho e a extensão além das extremidades ficam memorizados. |
| `BREPLACE` |  | BREPLACE troca um bloco por outro. Selecionados: escolha referências de bloco e indique o bloco a usar em vez delas. Todos: indique um bloco e o seu substituto, e cada referência em todos os espaços e dentro de outros blocos muda. Uma referência mantém o seu lugar, escala, rotação e camada, e os valores dos atributos que os dois blocos têm; os valores para os quais o novo bloco não tem lugar são eliminados e indicados. |
| `BSEARCH` |  | BSEARCH encontra blocos. Nome: parte do nome de um bloco, ou um padrão com * e ?. Atributo: um valor (ou TAG=valor) contido nos atributos de uma referência. Geometria: selecione objetos ou uma referência de bloco, e são listados os blocos cuja forma é pelo menos 85% semelhante, do melhor para o pior; tamanho, rotação e espelhamento não contam. As referências encontradas no espaço aberto ficam selecionadas, prontas para o comando seguinte. |
| `BURST` |  | Decompor referências de bloco e manter o que os seus atributos dizem: cada valor torna-se texto na camada do atributo. |
| `BVHIDE` | `BVH` | No editor de blocos: ocultar objetos no estado de visibilidade atual. |
| `BVSHOW` | `BVSH` | No editor de blocos: mostrar objetos que o estado de visibilidade atual oculta (aparecem esbatidos para os poder escolher). |
| `BVSTATE` | `BVS` | No editor de blocos, num bloco com estados de visibilidade: mudar para um estado, ou acrescentar, renomear ou eliminar um. |
| `CAL` |  | Calcular um comprimento ou um número: + − * / e parênteses, como os escreve em qualquer lugar |
| `CENTERLINE` | `CL` | Linha de eixo entre duas linhas: a meio caminho entre elas, ou ao longo da bissetriz quando se encontram (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: uma cruz no centro de um círculo ou arco, com linhas de centro que ultrapassam um pouco (CM) |
| `CHAMFER` | `CHA` | Chanfrar o canto entre duas linhas (D duas distâncias, A comprimento e ângulo, P cada canto de uma polilinha) |
| `CHSPACE` |  | CHSPACE: move objetos entre uma folha e o modelo através de uma janela. São escalados e rodados para parecerem iguais do outro lado. Numa folha vão para o modelo; enquanto trabalha através de uma janela (MSPACE) vão para a folha. |
| `CIRCLE` | `C` | Centro e raio, diâmetro, 2 ou 3 pontos |
| `CLASS` |  | Colocar os objetos selecionados numa classe, ou, sem seleção, definir a classe ativa (? lista-as) |
| `CLASSES` | `CLS` | O painel Classes: as classes organizam objetos por camadas; mostrá-las, ocultá-las e dar-lhes estilo, e substituí-las por janela (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ancorar ou flutuar a linha de comandos, torná-la numa só linha, definir as suas linhas de histórico, ou abrir o histórico (F2) |
| `COMPARESETTINGS` | `CMPSET` | Comparar estilos de cota, estilos de texto, camadas, folhas ou unidades: dois neste desenho, ou este desenho contra outro aberto, e copiar um valor de um para o outro. |
| `CONSTRAINTBAR` | `CBAR` | Mostrar ou ocultar as barras de restrição (Mostrar tudo / Ocultar tudo, ou por objeto) |
| `COPY` | `CO`, `CP` | Copiar objetos, tantas vezes quantas clicar |
| `COPYBASE` |  | Copiar objetos para a área de transferência com um ponto base que escolhe |
| `COPYCLIP` |  | Copiar objetos para a área de transferência (Ctrl+C); PASTECLIP coloca-os |
| `COUNT` | `BCOUNT` | Contar referências de bloco: escolha uma para selecionar e contar todas as referências do seu bloco |
| `COUNTTABLE` |  | Colocar uma tabela de contagens de blocos |
| `CREDITS` |  | Coloca os créditos da Biblioteca no desenho como tabela. Execute outra vez para atualizar a tabela com os itens que o desenho tem neste momento. |
| `CURSORSIZE` |  | O tamanho da cruz: 100 atravessa o desenho de lado a lado (Definições › Cursor › Ecrã inteiro) |
| `CUTCLIP` |  | Cortar objetos para a área de transferência (Ctrl+X): copiar e depois apagar |
| `CYLINDER` | `CYL` | Um cilindro: centro, raio e altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listar blocos, os seus atributos e as propriedades dos objetos como tabela no desenho ou num ficheiro CSV |
| `DATALINK` | `DL` | Uma tabela de um ficheiro CSV que memoriza o ficheiro, para o poder ler outra vez |
| `DATALINKUPDATE` | `DLU` | Ler outra vez o ficheiro de uma ligação de dados e recarregar as suas tabelas |
| `DCALIGNED` | `DCALI` | Restrição dimensional: distância real entre pontos, um ponto e uma linha, ou duas linhas |
| `DCANGULAR` | `DCANG` | Restrição dimensional: ângulo entre duas linhas, ou de um arco |
| `DCCONVERT` |  | Transforma cotas desenhadas em geometria restringível em restrições dimensionais |
| `DCDIAMETER` | `DCDIA` | Restrição dimensional: diâmetro de um círculo ou arco |
| `DCDISPLAY` |  | Mostrar ou ocultar restrições dimensionais no desenho |
| `DCHORIZONTAL` | `DCHOR` | Restrição dimensional: distância horizontal |
| `DCLINEAR` | `DCLIN` | Restrição dimensional: distância horizontal ou vertical, a partir do ponto onde a colocar |
| `DCRADIUS` | `DCRAD` | Restrição dimensional: raio de um círculo ou arco |
| `DCVERTICAL` | `DCVER` | Restrição dimensional: distância vertical |
| `DELBLOCKS` |  | Eliminar blocos: cada referência (também as aninhadas, em todas as folhas) e as definições |
| `DELCONSTRAINT` | `DELCON` | Remover todas as restrições (geométricas e dimensionais) dos objetos que selecionar |
| `DELOPENING` |  | Retirar uma porta ou janela de uma parede. |
| `DESCRIBE` | `DESC` | Diz o que o desenho contém: quantos objetos, de que tipo, de que tamanho, o que está selecionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Limpar a seleção (Esc) |
| `DETAILS` | `DET` | Os detalhes próprios da sua empresa, encontrados para o que está a desenhar: procurar, acrescentar um bloco, listar, remover, ligar ou desligar as sugestões. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Desenhar um diagrama a partir de texto: um fluxograma Mermaid, um diagrama de componentes PlantUML, D2, uma lista de origem-destino ou XML do draw.io, como blocos e conectores editáveis |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distância real entre dois pontos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ângulo entre duas linhas, de um arco, ou por três pontos |
| `DIMARC` | `DAR` | Cota de comprimento de arco: a distância ao longo de um arco, com o símbolo de arco (DAR) |
| `DIMASZ` |  | Definição de cota: tamanho da seta |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas empilhadas a partir de uma linha de base |
| `DIMBREAK` | `DBREAK` | Interrompe as linhas de cota e de extensão onde cruzam outros objetos (Automático), entre dois pontos (Manual), ou remove as interrupções |
| `DIMCONSTRAINT` | `DCON` | Restrições dimensionais: linear, alinhada, angular, raio, diâmetro, converter |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Uma cadeia de cotas, cada uma a partir do fim da anterior |
| `DIMDEC` |  | Definição de cota: casas decimais |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diâmetro de um arco ou círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Liberta as cotas dos objetos a que estão ligadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Altera o texto da cota (Início, Novo texto, Rodar) ou inclina as linhas de extensão (Oblíqua) (DED) |
| `DIMEXE` |  | Definição de cota: extensão além da linha de cota |
| `DIMEXO` |  | Definição de cota: desvio da origem |
| `DIMGAP` |  | Definição de cota: espaço à volta do texto |
| `DIMINSPECT` |  | Cota de inspeção: uma moldura à volta do valor com uma etiqueta e a frequência com que a peça é verificada |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de raio com ressalto: um raio desenhado a partir de um ponto mais próximo quando o centro está longe (DJO) |
| `DIMJOGLINE` | `DJL` | Acrescenta um símbolo de ressalto a uma linha de cota linear ou alinhada, para mostrar que a distância não está à escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distância horizontal ou vertical (R para qualquer ângulo) |
| `DIMLUNIT` |  | Definição de cota: formato de comprimento (1 científico, 2 decimal, 3 engenharia, 4 arquitetónico, 5 fracionário) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: a distância X ou Y de um ponto à origem do SCU, numa chamada (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Substitui variáveis de cota nas cotas selecionadas sem alterar o estilo; Limpar repõe o estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raio de um arco ou círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Liga os pontos de uma cota a objetos, para que siga e volte a medir quando se movem (DRE) |
| `DIMSCALE` |  | Definição de cota: escala global (tamanhos × este valor) |
| `DIMSPACE` |  | Espaçamento uniforme entre cotas paralelas, medido a partir de uma cota base (0 alinha-as; Automático é o dobro da altura do texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Criar, alterar, definir como atual, eliminar, aplicar e comparar estilos de cota com nome (a caixa de diálogo; -DIMSTYLE na linha de comandos) |
| `DIMTEDIT` | `DIMTED` | Move o texto da cota para a esquerda, a direita ou o centro da linha de cota, ou roda-o |
| `DIMTEXTUNIT` | `DTU` | Texto da cota em mm, cm, m ou km, ou nas unidades próprias do desenho: as cotas selecionadas, senão as novas (DTU) |
| `DIMTXT` |  | Definição de cota: altura do texto |
| `DIST` | `DI` | Distância e ângulo entre dois pontos |
| `DISTRIBUTE` |  | Espaça os objetos selecionados de forma uniforme, de lado a lado ou de cima a baixo: passos iguais entre centros, ou espaços iguais; os dois exteriores mantêm-se |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que dividem uma linha, arco, círculo, polilinha, spline ou elipse em partes iguais. Pontos, ou com Bloco, um bloco em cada marca. |
| `DOCUMENTS` | `DOCS` | Abrir o painel Documentos: retirar e devolver desenhos, revisões, estados de lançamento e aprovação de uma pasta de projeto |
| `DOOR` | `DR` | Colocar uma porta numa parede. O lado onde clica é o lado para onde abre. |
| `DRAWORDER` |  | Alterar a ordem de desenho: trazer objetos para a frente, enviá-los para trás, ou pô-los acima ou abaixo de outros objetos. |
| `DUPLICATE` | `DUP` | Uma cópia que acompanha o ponteiro: clique para a pousar (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | As propriedades do desenho: título, autor e restantes, e os seus próprios pares de nome e valor |
| `DXFOUT` |  | Transferir o desenho como DXF R12 (Guardar mantém o seu próprio formato) |
| `EATTEDIT` | `DDATTE` | Editar os atributos de uma referência de bloco: valores, texto e propriedades, um atributo de cada vez |
| `ELLIPSE` | `EL` | Extremidades do eixo e o outro semieixo |
| `ERASE` | `E`, `DELETE` | Apagar objetos |
| `EXPLODE` | `X` | Decompor polilinhas, blocos e cotas nas suas partes |
| `EXPORT` | `EXP` | Guardar uma cópia do desenho num tipo de ficheiro que um suplemento escreve |
| `EXPORT3D` | `3DEXPORT` | Exportar o modelo 3D: GLB, OBJ ou STL |
| `EXPORTPOINTS` | `EXPPTS` | Escrever pontos, e os pontos de inserção dos blocos com um atributo como descrição, num ficheiro CSV ou TXT (PNEZD, PENZD ou XYZ) para programas de BIM e de topografia |
| `EXTEND` | `EX` | Prolongar objetos até encontrarem outros: clique perto de uma extremidade, arraste por vários, ou Shift+clique para aparar |
| `EXTRIM` |  | EXTRIM: escolha uma aresta de corte e depois um lado. Tudo o que cruza a aresta é aparado nesse lado. As partes que seriam removidas aparecem ao mover o ponteiro. |
| `EXTRUDE` | `EXT` | Extrudir objetos 2D fechados em sólidos (3D) |
| `FIELD` |  | Colocar um campo num texto, numa célula de tabela ou num atributo: uma data, o nome do ficheiro, o número da folha, uma propriedade do desenho, a área ou o comprimento de um objeto, ou uma fórmula |
| `FILLET` | `F` | Arredondar ou fazer canto vivo entre dois objetos (R raio, P cada canto de uma polilinha, M vários) |
| `FIND` |  | Procurar e substituir palavras no texto, nos valores de atributos e no texto de cotas |
| `FLATTEN` |  | Define a altura (Z) e a espessura dos objetos selecionados como 0, também nos blocos que eles usam. |
| `FLOOR` |  | Escolher o piso onde desenhar, acrescentar um, ou mover ou copiar a seleção para um. |
| `FLOORLAYERS` |  | Transforma pisos em camadas com o nome Floor-Layer, para um ficheiro que vai para alguém sem pisos. |
| `FLOORS` | `FLR` | Abrir o painel Pisos: empilhar pisos num só espaço modelo. |
| `GCCOINCIDENT` |  | Restrição: dois pontos juntam-se, ou um ponto fica sobre um objeto |
| `GCCOLLINEAR` |  | Restrição: duas linhas ficam na mesma reta |
| `GCCONCENTRIC` |  | Restrição: dois círculos ou arcos partilham um centro |
| `GCEQUAL` |  | Restrição: duas linhas mantêm o mesmo comprimento, ou dois círculos ou arcos o mesmo raio |
| `GCFIX` |  | Restrição: um ponto ou um objeto inteiro fica onde está |
| `GCHORIZONTAL` |  | Restrição: uma linha (ou dois pontos) mantém-se horizontal |
| `GCPARALLEL` |  | Restrição: duas linhas mantêm-se paralelas |
| `GCPERPENDICULAR` |  | Restrição: duas linhas mantêm-se em ângulo reto |
| `GCSYMMETRIC` |  | Restrição: dois pontos, linhas ou círculos espelham-se um ao outro através de uma linha |
| `GCTANGENT` |  | Restrição: uma linha e um círculo ou arco (ou dois deles) mantêm-se tangentes |
| `GCVERTICAL` |  | Restrição: uma linha (ou dois pontos) mantém-se vertical |
| `GDSIN` | `GDS` | Ver um layout de circuito integrado (um ficheiro de fluxo GDSII): cada camada e tipo de dados como camada de desenho, plana, em unidades do utilizador; só para ver e medir (protótipo de laboratório) |
| `GEOMCONSTRAINT` | `GCON` | Restrições geométricas: horizontal, vertical, paralela, tangente, coincidente… |
| `GLBOUT` |  | Exportar o modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Preenche uma área com um gradiente de uma ou duas cores |
| `GRIDMOVE` | `GM` | Mover uma linha de grelha e levar o que nela está pendurado: as paredes esticam, pilares, balões e etiquetas movem-se, as cotas seguem. |
| `GROUP` | `G` | GROUP (G): dar aos objetos selecionados um nome comum. Um clique em qualquer um deles seleciona-os todos. Enter no nome cria um grupo sem nome. |
| `GROUPEDIT` |  | GROUPEDIT: alterar um grupo. Escolha um dos seus objetos ou indique o Nome, depois Adicionar ou Remover objetos, REName para o renomear, alterar a sua Descrição, ou indicar se um clique o seleciona por inteiro. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Preencher uma área com uma trama sólida ou um padrão: clique dentro dela, ou selecione objetos fechados (H) |
| `HATCHEDIT` | `HE` | Alterar uma trama: padrão, escala, ângulo, origem e a sua ligação a um contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Refaz as polilinhas de contorno a partir de uma trama, ligadas a ela ou não |
| `HATCHTOBACK` |  | Envia todas as tramas para trás de tudo o resto. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Oculta os objetos selecionados até UNISOLATEOBJECTS. Não é guardado com o desenho. |
| `HISTORY` | `HIST` | HISTORY (HIST): as versões deste desenho — cópias guardadas neste computador quando o Studio o guarda, e as versões da nuvem — para abrir, repor e comparar com o que mudou, mostrado a cores. |
| `ID` |  | Coordenadas de um ponto |
| `IMAGE` | `IM` | Indique ao CadCraft os ficheiros de imagem que um desenho usa (um DWG guarda apenas onde estavam). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Colocar uma imagem (PNG ou JPEG) a partir de um ficheiro. |
| `IMAGECLIP` | `ICL` | Recortar uma imagem a um retângulo ou polígono, ou remover o seu recorte. |
| `IMPORT` | `IMP` | Importar para este desenho um ficheiro de um tipo que um suplemento lê |
| `INSERT` | `I`, `DDINSERT` | Colocar um bloco (S escala, R rodar); F a partir de um ficheiro DWG/DXF, L da biblioteca |
| `INTERSECT` | `IN` | Manter apenas o que os sólidos têm em comum (3D), ou a área que as regiões 2D partilham |
| `ISODRAFT` |  | ISODRAFT: desenho isométrico ligado ou desligado, ou diretamente no plano Esquerdo, Superior ou Direito. Enquanto estiver ligado, o Orto e o rastreio polar seguem os dois eixos do plano, a grelha é desenhada isométrica e ELLIPSE tem Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostrar apenas os objetos selecionados; tudo o resto deste espaço fica oculto até UNISOLATEOBJECTS. Não é guardado com o desenho. |
| `ISOPLANE` |  | ISOPLANE: escolher o plano isométrico onde desenhar: Esquerdo, Superior ou Direito. Enter passa ao seguinte, como F5 faz com o desenho isométrico ligado. |
| `JOIN` | `J` | Juntar linhas, arcos e polilinhas que se encontram extremidade a extremidade numa só polilinha; linhas na mesma reta numa só linha (J) |
| `LASER` | `LASERCUT` | Abrir o painel Laser: enviar camadas para uma máquina de corte ou de gravação a laser (código G GRBL) |
| `LASSOMODE` |  | Premir e arrastar desenha um laço (1) ou um retângulo (0) |
| `LAYDEL` |  | Eliminar uma camada e todos os objetos nela (no modelo, nas folhas e nos blocos) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abrir o gestor de camadas: todas as camadas numa só tabela |
| `LAYERPANEL` |  | Mostrar o painel de camadas |
| `LAYFRZ` |  | Congelar a camada de cada objeto que escolher |
| `LAYGROUP` | `LG` | Agrupar camadas em pastas no painel Camadas. |
| `LAYISO` |  | Isolar as camadas dos objetos selecionados (todas as outras camadas desligadas) |
| `LAYLOCKFADE` |  | Definir o grau de esbatimento dos objetos em camadas bloqueadas, e se um clique os pode selecionar. |
| `LAYMCUR` |  | Tornar atual a camada do objeto que escolher |
| `LAYMRG` |  | Fundir camadas: os seus objetos passam para uma camada de destino, e as camadas fundidas desaparecem |
| `LAYOFF` |  | Desligar a camada de cada objeto que escolher |
| `LAYON` |  | Ligar todas as camadas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Uma nova folha com um bloco de título e uma janela |
| `LAYTHW` |  | Descongelar todas as camadas |
| `LAYUNISO` |  | Voltar a ligar as camadas que LAYISO desligou |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converte texto escrito com as antigas fontes vietnamitas (fontes TCVN3 / ABC, como .VnTime, e fontes VNI, como VNI-Times) para Unicode. Este texto já é mostrado como se lê; isto reescreve-o de forma definitiva, com uma contagem e um único passo de anulação. |
| `LENGTHEN` | `LEN` | Alongar ou encurtar linhas, arcos e polilinhas: por uma quantidade, uma percentagem, até um total, ou arrastando (LEN) |
| `LIBRARY` | `LIB` | O painel da Biblioteca: colocar itens, verificar atualizações, créditos |
| `LIMITS` |  | Definir os limites do desenho: LIGADO, DESLIGADO, ou os cantos inferior esquerdo e superior direito. Com os limites ligados, os pontos fora deles são recusados |
| `LINE` | `L` | Segmentos retos, cada um um objeto próprio |
| `LINETYPE` | `LT`, `CELTYPE` | O tipo de linha que os novos objetos recebem (por camada, por bloco, ou um com nome) |
| `LINKVIEWS` | `SYNCVIEWS` | Deslocar a vista e fazer zoom em todos os painéis em conjunto (ecrã dividido), para comparar dois desenhos ou revisões |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ou VLIDE) abre o editor LISP: uma janela para escrever, carregar e testar uma rotina. Carregar no desenho lê cada forma, como carregar o ficheiro com APPLOAD, e cria os seus comandos. Executar seleção avalia as formas selecionadas, ou a forma onde está o cursor. A consola mostra o que a rotina escreveu e cada erro com a sua linha. O parêntese correspondente é marcado enquanto escreve, e Enter indenta a nova linha. Novo, Abrir e Guardar funcionam num ficheiro .lsp. As listas ao lado do texto mostram as funções que a rotina define, as que chama e que este LISP ainda não tem, e todas as que tem. A janela não bloqueia o desenho, por isso uma rotina pode pedir pontos; Parar ou Esc termina uma rotina em execução. |
| `LIST` | `LI`, `LS` | Descreve objetos no histórico |
| `LTSCALE` | `LTS` | A escala de tipos de linha do desenho (cada traço e cada intervalo é multiplicado por ela) |
| `LWDISPLAY` | `LWT` | Mostrar ou ocultar espessuras de linha no ecrã (o botão LWT na barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | A espessura de linha que os novos objetos recebem (por camada, por bloco, predefinida ou em mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Camadas de mapa sob o espaço modelo: o sistema de coordenadas do desenho, mosaicos, WMS, WMTS, ArcGIS, imagens |
| `MASSPROP` |  | MASSPROP: propriedades de secção de regiões e objetos fechados: área, perímetro, centroide, momentos e produto de inércia, raios de giração e os eixos principais. Exato para linhas e arcos. Pode escrever o relatório num ficheiro de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propriedades: copiar a camada, a cor e mais de um objeto para outros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): uma marca a cada comprimento indicado ao longo de uma linha, arco, círculo, polilinha, spline ou elipse, a partir da extremidade mais próxima do seu ponto. Pontos, ou com Bloco, um bloco em cada marca. |
| `MEASUREGEOM` | `MEA` | Medir uma distância, um raio, um ângulo ou uma área (MEA) |
| `MINSERT` |  | MINSERT: colocar um bloco em linhas e colunas de uma só vez. Cada um é a sua própria referência, por isso pode mover ou apagar qualquer um deles. |
| `MIRROR` | `MI` | Espelhar objetos através de uma linha |
| `MLEADER` | `MLD`, `MLEAD` | Chamada múltipla: uma seta, uma linha de chamada e uma nota, como um só objeto (MLD) |
| `MLEADERALIGN` | `MLA` | Alinhar chamadas múltiplas com uma delas numa direção, com espaçamento igual, ou distribuídas entre dois pontos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reunir várias chamadas múltiplas numa só: os seus blocos numa linha ou coluna, ou as suas notas uma debaixo da outra (MLC) |
| `MLEADEREDIT` | `MLE` | Acrescentar linhas de chamada a uma chamada múltipla ou removê-las; mudar o seu conteúdo entre texto e bloco (MLE) |
| `MLINE` |  | Desenhar linhas paralelas juntas, ligadas nos cantos. |
| `MOVE` | `M` | Mover objetos por um ponto base e um segundo ponto |
| `MSPACE` | `MS` | Trabalhar no modelo através de uma janela da folha aberta (ou fazer duplo clique dentro da janela). |
| `MTEXT` | `MT`, `T` | Texto de parágrafo: arraste a largura e escreva no lugar; Enter inicia um novo parágrafo (T) |
| `MVIEW` | `MV` | Uma janela sobre o modelo, numa folha |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas com nome: guardar a vista no ecrã (ou uma janela) com um nome e voltar a ela (NV) |
| `NCOPY` |  | Copiar objetos de uma referência de bloco ou de um desenho ligado para o desenho, sem o decompor. |
| `NEARBY` |  | Diz o que está perto do cursor, do mais próximo para o mais distante, com a distância e o lado. |
| `NEW` |  | Iniciar um novo desenho |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotação de texto e cotas anotativos: acrescentar uma escala, eliminar uma, acrescentar a escala atual, ou listá-las (cada janela as mostra no tamanho da sua própria escala) |
| `OBJOUT` |  | Exportar o modelo 3D como OBJ |
| `OFFSET` | `O` | Cópias paralelas a uma distância |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: como o OFFSET fecha os espaços nos cantos exteriores de uma polilinha. 0 prolonga os segmentos, 1 acrescenta um arco, 2 acrescenta um corte reto. Mantido nesta sessão. |
| `OLELIST` | `OLES` | Lista os objetos OLE que um desenho contém e coloca uma cópia da imagem de um deles onde escolher |
| `OPEN` |  | Abrir um DWG ou DXF deste computador |
| `OPENIN3D` |  | Abrir este desenho na aplicação de modelação 3D, num novo separador (nada é carregado) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abrir o menu de snap a objetos: escolha quais os snaps que ficam ativos. Também um clique com o botão direito em Snap na barra de estado. |
| `OVERKILL` |  | Eliminar objetos duplicados e juntar linhas e arcos sobrepostos ou de extremidade a extremidade, dentro de uma tolerância. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | O painel Parâmetros: parâmetros do utilizador e restrições dimensionais numa só tabela |
| `PARTSLIST` | `PLIST` | Uma tabela de lista de peças com cada peça padrão e secção de aço colocada a partir da Biblioteca |
| `PASTEAREA` | `PAREA` | Colar uma área copiada no MarkupCraft (Copiar área) no seu tamanho real, como imagem. |
| `PASTEBLOCK` |  | PASTEBLOCK: colar o que copiou como um só bloco. O bloco recebe um nome próprio; RENAME dá-lhe o seu. |
| `PASTECLIP` |  | Colar a área de transferência: segue o cursor, clique onde deve ficar (Ctrl+V) |
| `PASTEORIG` |  | Colar a área de transferência nas coordenadas de onde foi copiada (Ctrl+Shift+V) |
| `PDF` |  | Indique ao CadCraft os ficheiros PDF que os subjacentes do desenho usam |
| `PDFADJUST` |  | Esbater, contrastar, tornar monocromático ou desligar um subjacente PDF |
| `PDFATTACH` | `PDFATT` | Anexar uma página PDF como subjacente (PDFATTACH) |
| `PDFCLIP` |  | Recortar um subjacente PDF a um retângulo ou polígono |
| `PDFIMPORT` | `PDFIM` | Transforma as linhas, os preenchimentos e o texto de uma página PDF em objetos do desenho (PDFIMPORT) |
| `PDFLAYERS` |  | Ligar ou desligar as camadas de um subjacente PDF |
| `PEDIT` | `PE` | Editar uma polilinha: fechar, abrir, juntar, largura, curva ajustada, curva spline, desfazer curva, geração de tipo de linha, inverter; linhas, arcos e splines podem ser transformados em polilinhas |
| `PHOTOSKETCH` | `PSK` | Transforma uma fotografia de um esboço à mão em papel em linhas e arcos à escala, corrige a perspetiva e dá a cada cor de caneta a sua própria camada. |
| `PICKSTYLE` |  | PICKSTYLE: se selecionar um objeto de um grupo seleciona o grupo inteiro (1, a definição inicial) ou só esse objeto (0). Mantido nesta sessão. |
| `PLAN` |  | Roda a vista para que o eixo X do SCU (UCS atual, um UCS guardado, ou o Mundo) fique nivelado no ecrã. Nada no desenho se move. |
| `PLINE` | `PL` | Uma polilinha de segmentos de linha e de arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Imprimir para PDF: uma folha, ou o modelo a uma escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabelas de estilos de impressão: definir como cada cor imprime (cor, preto, cinzento, tinta, espessura de linha); guardadas com o desenho (STYLESMANAGER) |
| `POINT` | `PO` | Objetos de ponto |
| `POINTCLOUD` | `PC` | A nuvem de pontos anexada: fatiar, altura, espessura, cor, tamanho, visível, zoom, desanexar |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Anexar uma nuvem de pontos (LAS, LAZ, XYZ, PTS) por baixo do desenho |
| `POLARANG` |  | O passo do rastreio polar em graus (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Um polígono regular |
| `PRESSPULL` |  | Empurrar ou puxar uma face de um sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abrir o painel Propriedades (também Ctrl+1, ou fazer duplo clique num objeto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Recolher o painel Propriedades para a margem da janela |
| `PSPACE` | `PS` | Sair da janela onde está a trabalhar e voltar à folha (ou fazer duplo clique fora dela). |
| `PUBLISH` | `-PUBLISH` | Imprimir várias ou todas as folhas num só PDF (uma página e um marcador por folha) |
| `PURGE` | `PU` | Remover definições de blocos que nada usa |
| `QDIM` |  | Cota rápida: cotar vários objetos de uma vez (contínua, de base, escalonada, ordenada, raio ou diâmetro) |
| `QPMODE` | `QP` | Propriedades rápidas junto do cursor, ligadas ou desligadas |
| `QSELECT` | `QS` | Seleção rápida: cada objeto de um tipo cuja camada, cor, tamanho ou nome coincide (QS) |
| `RASTERSNAP` |  | Ligar ou desligar o snap às linhas de folhas digitalizadas. |
| `RAY` |  | Semirreta: uma linha de construção a partir de um ponto, infinita numa só direção. |
| `RECOVER` |  | Abre um DXF ou DWG danificado: salta o que não pode ser lido em vez de recusar o ficheiro, diz o que saltou, e depois verifica e repara o desenho como faz AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Uma polilinha fechada a partir de dois cantos |
| `REDLINE` | `RDL` | Redline para revisão: ler um pacote de redline do MarkupCraft, aceitar ou recusar cada alteração, colocar em nuvem as aceites com um registo de revisão, e guardar o ficheiro de respostas (RDL) |
| `REDO` |  | Refazer o que foi anulado |
| `REFCLOSE` |  | Terminar a edição de um bloco no próprio lugar: guardá-lo, ou descartar as alterações |
| `REFEDIT` |  | Editar um bloco no próprio lugar, onde está uma das suas referências, com o resto do desenho esbatido; REFCLOSE guarda-o |
| `REGEN` | `RE` | Reconstruir o que está desenhado neste separador a partir do desenho (RE) |
| `REGENALL` | `REA` | Reconstruir o que está desenhado em cada separador, painel e desenho aberto |
| `REGION` | `REG` | REGION (REG): criar regiões planas a partir de objetos fechados, ou de linhas, arcos e polilinhas que fecham um ciclo de extremidade a extremidade. UNION, SUBTRACT e INTERSECT depois combinam regiões, e MASSPROP dá as suas propriedades de secção. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registar várias digitalizações: colocá-las num só enquadramento através de pares de pontos ou alvos escolhidos, refinar com ICP, exportar um único LAS ou E57 |
| `REINIT` |  | Recarregar o seu ficheiro de nomes curtos |
| `RENAME` | `-RENAME`, `REN` | Renomear uma camada ou um bloco (cada objeto ou referência segue) |
| `REVCLOUD` | `RC` | Nuvem de revisão: contornar um retângulo, um polígono, um caminho à mão livre ou um objeto (RC) |
| `REVOLVE` | `REV` | Rodar objetos 2D fechados em torno de um eixo para os transformar em sólidos (3D) |
| `ROTATE` | `RO` | Rodar objetos em torno de um ponto base |
| `SAMPLES` | `SAMPLE` | Abrir um dos desenhos de exemplo do CadCraft (um conjunto de arquitetura, um as-built) para aprender |
| `SAVE` | `QSAVE` | Transferir o desenho no seu formato (DWG ou DXF) |
| `SAVEAS` |  | Transferir o desenho como DWG ou DXF: escolha qual |
| `SAYSEL` |  | Diz o que está selecionado, uma frase por cada objeto. |
| `SCALE` | `SC` | Escalar objetos em torno de um ponto base |
| `SCALELISTEDIT` | `SCALELIST` | Acrescentar, editar e eliminar as escalas próprias do desenho; aparecem nas listas de escalas de janela e de impressão e são guardadas no ficheiro (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinhar uma folha digitalizada a dois pontos: mover, rodar e, se quiser, escalar. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Inserir um desenho digitalizado: um PNG, JPEG ou TIFF (uma página ou todas as páginas de um ficheiro de várias páginas), ou uma página PDF que seja uma imagem. |
| `SCANCLEAN` | `SCC` | Tornar uma folha digitalizada a preto e branco e remover manchas. |
| `SCANCROP` | `SCR` | Recortar uma folha digitalizada a uma janela. |
| `SCANDESKEW` | `SCD` | Encontrar o ângulo em que as linhas longas de uma folha digitalizada estão e endireitar a folha quando aceitar o ângulo. |
| `SCANERASE` | `SCE` | Apagar uma área de uma folha digitalizada: um retângulo, um polígono ou um laço. |
| `SCANINFO` | `SCI` | Mostrar o ficheiro original de uma folha digitalizada e os passos dados desde então. |
| `SCANSCALE` | `SCS` | Escalar uma folha digitalizada: escolher dois pontos nela e escrever a distância real entre eles. |
| `SCANTRACE` | `SCT` | Transformar uma folha digitalizada em linhas e arcos numa nova camada, com a tolerância que definir. O texto e as tramas mantêm-se como imagem. |
| `SELECT` |  | Selecionar objetos agora (para P, Anterior, no comando seguinte) |
| `SELECTALL` | `AI_SELALL` | Selecionar cada objeto que pode editar neste separador (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selecionar cada objeto como os que escolhe: mesmo tipo, camada e cor (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Mostra o painel Conjunto de folhas: folhas de muitos desenhos, numeradas, publicadas como um só PDF. |
| `SHORTCUTS` | `KEYS` | Dar a qualquer comando uma tecla própria (Ctrl ou Alt com uma letra, ou uma tecla de função livre), guardada neste navegador ou na aplicação de secretária. |
| `SHXFONTS` | `SHX` | Dar ao CadCraft tipos de letra SHX de uma pasta ou de ficheiros, para que os estilos de texto que os indicam desenhem com eles (listar, remover, inverter) |
| `SKETCHFIX` | `SKF` | Desenhar traços à mão livre; cada um torna-se uma linha, círculo, arco, retângulo ou polilinha limpos, alinhados e ligados aos outros. |
| `SKETCHLIVE` | `SKL` | Esboçar com uma caneta: cada traço torna-se uma linha, círculo, arco ou retângulo precisos ao levantar a caneta, encaixados no desenho, com o tamanho a escrever por cima. |
| `SPLINE` | `SPL` | Desenhar uma spline através de pontos (ou com um polígono de controlo), ou transformar uma polilinha numa spline |
| `SPLINEDIT` | `SPE` | Editar uma spline: pontos de ajuste, pontos de controlo e pesos, abrir ou fechar, inverter, ou convertê-la numa polilinha |
| `SPLIT` |  | Dividir a área de desenho em painéis (como VPORTS no modelo; também a partir de uma folha) |
| `STEELMEMBER` | `SMEMBER` | Uma barra de aço em 3D a partir de uma secção padrão: dois pontos (uma viga) ou um ponto base e uma altura (Coluna) |
| `STLOUT` |  | Exportar o modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Esticar: arraste uma janela de cruzamento sobre as extremidades para mover; o que está dentro move-se, o resto fica (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: o tipo de letra, a altura, a largura e a inclinação que o novo texto recebe (a caixa de diálogo; -STYLE na linha de comandos) |
| `SUBTRACT` | `SU` | Retirar sólidos a outros (3D), ou regiões 2D a outras regiões |
| `SWBOUT` | `SWMACRO` | Transferir uma macro para o SolidWorks (.swb) que reconstrói o modelo como um só esboço restringido |
| `SWEEP` |  | Varrer objetos 2D fechados ao longo de um caminho (linha, polilinha, arco, círculo) para os transformar em sólidos (3D) |
| `TABLE` | `TB` | Criar uma tabela: linhas e colunas, ou a partir de células de folha de cálculo na área de transferência ou de um ficheiro CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Editar uma tabela: escrever numa célula, inserir e eliminar linhas e colunas, tamanhos, células combinadas, alinhamento |
| `TABLEEXPORT` |  | Guardar o que uma tabela mostra como ficheiro CSV |
| `TABLEPASTE` | `PASTETABLE` | Criar uma tabela a partir de células de folha de cálculo na área de transferência |
| `TABLESTYLE` | `TS` | Estilos de tabela: alturas de texto, alinhamento, margem e bordas para as linhas de título, de cabeçalho e de dados |
| `TAGS` |  | Etiquetas em referências de bloco: definir uma etiqueta (tipo, valores permitidos, blocos a que se aplica), defini-la nas referências selecionadas, e listá-las como um quadro que pode guardar como CSV |
| `TEXT` | `DT`, `DTEXT` | Texto de uma linha; Enter inicia a linha seguinte |
| `TEXTEDIT` | `ED`, `DDEDIT` | Editar texto no próprio lugar: escolha um texto (ou faça duplo clique nele) (ED) |
| `TEXTMASK` | `TMASK` | Colocar uma máscara de fundo atrás dos textos (o fundo do desenho ou uma cor), ou removê-la. |
| `TEXTTOFRONT` |  | Trazer todo o texto, cotas e chamadas para a frente de tudo o resto. |
| `TOOLBAR` |  | Escolher o que os botões da barra de ferramentas mostram: ícones e texto, só ícones, ou só texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Colocar a barra de ferramentas no topo, na base, à esquerda ou à direita da janela |
| `TOOLBARROWS` |  | Escolher quantas linhas usa a barra de ferramentas: ajustar, 2 ou 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Tornar as barras acima do desenho padrão ou compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruz desviada para desenhar com o dedo: um dedo move uma cruz que fica acima e ao lado dele, para que o dedo não tape o ponto escolhido. Levantar o dedo não escolhe nada; o botão Clique, ou um toque com um segundo dedo, escolhe na cruz, e manter Clique enquanto move arrasta. Premir longamente, ou o botão Enter, é Enter. Dois dedos deslocam a vista e fazem zoom. Opções: LIGADO, DESLIGADO, Auto (ligado só onde um dedo é o único ponteiro), Distância, Lado. |
| `TOUR` | `TUTORIAL` | Fazer outra vez o percurso de seis passos do primeiro desenho |
| `TRIM` | `TR` | Cortar objetos até onde outros os cruzam: clique num pedaço, arraste por vários, ou Shift+clique para prolongar (TR) |
| `TRIMEXTENDMODE` |  | Como APARAR e PROLONGAR começam: 1 Rápido (cada objeto é uma aresta de corte ou limite), 0 Padrão (escolha primeiro as arestas) |
| `TTR` |  | Um círculo tangente a dois objetos, com um raio que indica (igual a CIRCLE T) |
| `TURNLEFT` |  | Rodar a vista 90° para a esquerda (sentido anti-horário): UCS Z -90, e a vista segue. Nada no desenho se move. |
| `TURNRIGHT` |  | Rodar a vista 90° para a direita (sentido horário): UCS Z 90, e a vista segue. Nada no desenho se move. |
| `TURNWORLD` |  | De volta ao mundo: UCS Mundo, e a vista fica nivelada outra vez. |
| `TXT2MTXT` | `T2M` | Juntar textos de uma linha num só texto de parágrafo, de cima para baixo. |
| `UCS` |  | O seu próprio sistema de coordenadas: uma origem e um eixo X (origem, ângulo Z, 3pontos, OBjeto, Anterior, Mundo, NOmeado). Os pontos que escrever, o orto, o rastreio polar, a grelha e o novo texto seguem-no; a vista roda para que o seu eixo X fique nivelado. Nada no desenho se move. |
| `UNDO` | `U` | Anular o último comando |
| `UNGROUP` |  | UNGROUP: desfazer grupos. Selecione objetos dos grupos, ou indique um Nome. Os objetos continuam no desenho. |
| `UNION` | `UNI` | Juntar sólidos num só (3D), ou regiões 2D numa só região |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostrar outra vez cada objeto ocultado por ISOLATEOBJECTS ou HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Como os comprimentos são mostrados e escritos: decimal, pés e polegadas, frações (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Recalcular os campos, e escolher quando se atualizam sozinhos |
| `USDOUT` |  | Exportar o modelo 3D como USD (.usda texto, .usdc binário ou um pacote .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D padrão, em perspetiva ou paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Colocar uma vista 2D plana dos sólidos 3D (frontal, superior, lateral ou isométrica, com linhas ocultas a tracejado) numa folha ou no modelo |
| `VIEWLABEL` | `VL` | Um título de vista numa folha que mostra o nome da vista da sua janela, e muda com ela. |
| `VOICE` |  | Ligar ou desligar comandos falados. São reconhecidos neste computador. |
| `VPCLIP` |  | Recorta uma janela de folha a um objeto fechado ou a um polígono desenhado; Delete torna-a outra vez um retângulo |
| `VPLAYER` |  | Congelar ou descongelar camadas só em algumas janelas (Congelar, Descongelar, Repor), e escolher com que camadas as novas janelas começam congeladas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dividir a área de desenho em painéis, cada um com a sua própria vista (numa folha: uma janela, como MVIEW) |
| `VPVIEW` |  | Definir o que uma janela mostra: escolher uma janela no modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual da vista 3D: sombreado, arestas, linha oculta, arame, raio-X |
| `WALL` | `WA` | Desenhar paredes 2D como uma polilinha. Juntam-se e levam portas e janelas. |
| `WALLARC` | `WARC` | Desenhar um arco de paredes. As paredes em planta são retas, por isso o arco é desenhado como pequenas paredes retas (15 graus cada) que se juntam. |
| `WALLDELSEG` |  | Apagar um pedaço de uma parede entre dois pontos. O que resta fica como uma ou duas paredes. |
| `WALLDIM` |  | Escrever um valor novo para uma cota: a parede na sua extremidade distante move-se em ângulo reto consigo própria, a parede na primeira extremidade mantém-se, e as paredes ligadas a ela seguem. |
| `WALLDISJOIN` |  | Escolher uma parede perto de uma extremidade para não permitir junções nessa extremidade: a extremidade é desenhada reta e nada a segue. Escolha outra vez para as permitir. |
| `WALLGRID` |  | Prender uma parede a uma linha de grelha: ao longo dela, ou uma extremidade nela. Mova a linha com GRIDMOVE e a parede segue. |
| `WALLHOLD` |  | Alinhar e bloquear: uma parede mantém o seu lugar face a outra parede (na sua linha, ou à distância que tem). Se uma se mover, a outra segue. |
| `WALLHOLDDIM` |  | Bloquear a distância entre duas paredes paralelas. Se uma se mover, a outra segue para a manter. |
| `WALLHOLDS` |  | Listar os bloqueios das paredes. |
| `WALLJOINS` |  | Dar a cada parede de um desenho antigo o seu identificador e guardar as junções entre elas. Isto também acontece na primeira alteração que fizer. |
| `WALLJOINSTYLE` |  | Clique num canto onde duas paredes se encontram extremidade a extremidade para mudar a forma como é desenhado: meia-esquadria, topo, esquadrado. T troca a parede que passa. |
| `WALLOFFSET` | `WO` | Mover uma parede em ângulo reto consigo própria por uma distância (as paredes ligadas a ela seguem), ou criar uma cópia a essa distância |
| `WALLPICK` |  | Criar paredes numa linha ou polilinha do desenho, com as linhas ligadas a ela se disser Sim. |
| `WALLPOLY` | `WP` | Desenhar paredes em redor de um polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Desenhar quatro paredes ligadas a partir de dois cantos opostos, como RECTANG. |
| `WALLREJOIN` |  | Tornar outra vez uma só parede as duas partes de uma parede. A primeira mantém o seu lugar no desenho. |
| `WALLROT` |  | Desenhar quatro paredes ligadas como um retângulo rodado a qualquer ângulo: o primeiro lado, depois a distância para fora. |
| `WALLSPLIT` | `WS` | Dividir uma parede em duas, num ponto ou onde outra parede a cruza. As partes mantêm-se ligadas, salvo se pedir uma abertura ou extremidades livres. Portas e janelas seguem a sua parte. |
| `WALLSPLITGAP` |  | Dividir uma parede deixando uma abertura: escreva a abertura, escolha a parede, depois o ponto. As partes ficam com extremidades livres e podem voltar a juntar-se. |
| `WALLSTRETCH` |  | Esticar com uma janela: as extremidades das paredes que estão dentro dela movem-se, as paredes totalmente dentro movem-se inteiras, e as paredes que embatem nos seus lados deslizam com elas. |
| `WALLTAN` |  | Continuar uma parede com um arco que sai dela ao longo da parede (desenhado como pequenas paredes retas). |
| `WALLTRACE` |  | Criar paredes em redor da menor área fechada de linhas e paredes à volta do ponto onde clica. |
| `WALLUNHOLD` |  | Retirar os bloqueios de uma parede (e os bloqueios de outras paredes a ela). |
| `WBLOCK` | `W`, `-WBLOCK` | Escrever um bloco, alguns objetos ou o desenho inteiro para um novo ficheiro DWG ou DXF (W) |
| `WEDGE` | `WE` | Uma cunha: dois cantos e uma altura; inclina-se a partir do primeiro canto (3D) |
| `WHEREAMI` | `WHERE` | Diz onde está o cursor. |
| `WHOHAS` |  | Diz quem tem um desenho aberto. O CadCraft Studio guarda um pequeno ficheiro de bloqueio junto de cada desenho aberto (Plan.dwg.cclock: quem, desde quando, qual versão) e remove-o ao fechar. Opções: Atual (o desenho aberto), Ficheiro (escolher um), Pasta (cada desenho de uma pasta que esteja aberto em algum lado; isto também permite ao Studio guardar ficheiros de bloqueio nessa pasta), Caminho (escrever um), Nome (o nome que os outros veem). Um bloqueio não atualizado há cinco minutos diz-se obsoleto. Não disponível no navegador. |
| `WINDOW` | `WN` | Colocar uma janela numa parede. |
| `XATTACH` | `XA` | Ligar outro DWG ou DXF a este desenho, mostrado só para leitura (XREF lista-os e recarrega-os) |
| `XCLIP` | `XC` | Recortar referências de bloco e desenhos ligados a um retângulo ou polígono, ou remover o recorte. |
| `XLINE` | `XL` | Linha de construção, infinita nos dois sentidos: por dois pontos, horizontal, vertical, num ângulo, bissetriz de um ângulo, ou deslocada de uma linha. |
| `XREF` | `XR`, `-XREF` | Desenhos ligados (referências externas): listar, anexar, recarregar, integrar, desanexar |
| `ZOOM` | `Z` | Extensões, ou uma janela |

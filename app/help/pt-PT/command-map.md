---
title: Mapa de comandos: o que escrever
summary: Todos os comandos do CadCraft com os seus nomes curtos, de A a Z, gerados a partir do próprio programa, e os hábitos de outros programas de desenho que diferem.
keywords: mapa de comandos, comandos, aliases, nomes curtos, vindo de, lista de comandos, o que escrever, apagar, aparar, equivalente, diferenças
from: 9426856f
---

O CadCraft usa os nomes de comandos e os nomes curtos que as pessoas conhecem de outros programas de desenho: escreva `L` para uma linha, `TR` para aparar, `E` para apagar. Por isso, para a maioria deles não há tabela de correspondências a aprender: o nome que conhece é o nome aqui. A lista seguinte contém todos os comandos do CadCraft, gerada a partir do próprio programa. {{key:Enter}} repete o último; `HELP` na linha de comandos imprime a mesma lista.

Os poucos que não são iguais, ou que ainda não estão implementados:

- **Guardar** transfere uma cópia para o navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); no CadCraft Studio guarda o ficheiro. Veja [Vindo de outro software de desenho](topic:coming-from).
- **PLOT** cria um PDF (também PNG e SVG), com uma tabela de estilos de impressão; não há gestor de configuração de página.
- **DIMSTYLE** e **PEDIT** estão implementados; o **PEDIT** não tem a opção Editar vértice (isso faz-se com os grips, pontos de controlo).
- **TABLE** não está implementado; {{cmd:XREF}}, {{cmd:SPLINE}} e {{cmd:WBLOCK}} estão.
- Os comandos próprios de uma rotina (AutoLISP `C:NAME`) aparecem depois de a carregar com {{cmd:APPLOAD}}; não estão listados aqui.

## Todos os comandos (402)

| Comando | Nomes curtos | O que faz |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbita a vista 3D com o botão esquerdo |
| `ACCESS` | `AX` | Ativa ou desativa o desenho sem ver: resultados lidos pelo leitor de ecrã, um cursor de teclado no desenho, sons de snap e comandos falados. |
| `ALIASEDIT` |  | Edita os aliases de comandos num único ficheiro de texto (o formato familiar L, *LINE) |
| `ALIGN` | `AL` | Move e roda objetos para que os pontos de origem caiam em pontos de destino (um, dois ou três pares), e escala-os se quiser |
| `ALIGNPANEL` | `ALP` | Abre o painel Alinhar e distribuir |
| `ALIGNTO` |  | Alinha as arestas esquerda, centro, direita, topo, meio ou fundo dos objetos selecionados, na seleção, no primeiro ou último objeto escolhido, ou num ponto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostra os objetos anotativos em todas as escalas, ou só onde a escala da viewport (ou do desenho) está na sua lista |
| `ANNOSCALE` | `CANNOSCALE` | Define a escala de anotação do desenho: o texto e as cotas anotativos são redimensionados para imprimirem com o mesmo tamanho |
| `APPLOAD` | `AP` | Carrega aplicações: rotinas LISP (.lsp) e os seus ficheiros de diálogo (.dcl); a Suite de Arranque (AP) |
| `ARC` | `A` | Arco: 3 pontos, Início/Centro/Fim, Início/Centro/Ângulo, Início/Centro/Comprimento, Início/Fim/Ângulo, Início/Fim/Direção, Início/Fim/Raio, Centro/Início/Fim, Centro/Início/Ângulo, Centro/Início/Comprimento, Continuar |
| `AREA` | `AA` | Área e perímetro por pontos ou de um objeto; Acrescentar e Subtrair mantêm um total acumulado (AA) |
| `ARRAY` | `AR` | Cópias em linhas e colunas, ou à volta de um centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Define se os comandos ARRAY criam matrizes que continuam editáveis (1) ou cópias simples (0) |
| `ARRAYCLOSE` |  | Termina a edição dos objetos de origem de uma matriz |
| `ARRAYEDIT` |  | Altera uma matriz feita com a opção Associativa: quantidades, espaçamento, objetos de origem, um item |
| `ARRAYPATH` |  | Cópias de objetos ao longo de uma linha, arco, polilinha ou outra curva |
| `ARRAYPOLAR` |  | Cópias à volta de um ponto central |
| `ARRAYRECT` |  | Cópias em linhas e colunas |
| `ASBUILT` | `ASB` | ASBUILT lê os pontos como construídos que uma equipa mediu (CSV / TXT, tal como o EXPORTPOINTS escreve) e compara-os com os pontos do desenho: dentro ou fora da tolerância, não medidos, extra. Marca-os na camada AS-BUILT e transfere um relatório CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Define um atributo (uma etiqueta à qual um bloco pede um valor) para pôr num bloco (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edita os valores dos atributos de uma referência de bloco na linha de comandos, um a seguir ao outro (Enter mantém um valor) |
| `ATTSYNC` |  | Alinha as referências de um bloco com as suas definições de atributos: as novas são acrescentadas com os seus valores predefinidos, as removidas são eliminadas, posições e texto repostos; valores mantidos |
| `AUDIT` |  | Verifica o desenho aberto quanto a danos: números que não são finitos, objetos sem tamanho, camadas, blocos, estilos e tipos de linha em falta, blocos que se contêm a si próprios, identificadores partilhados, cotas e tramas danificadas. Lista o que encontra por tipo e pergunta antes de corrigir; a correção é um passo de anular. |
| `AUNITS` | `ANGUNITS` | Como os ângulos são mostrados e escritos: graus decimais, graus-minutos-segundos ou rumos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletar do desenho ativado ou desativado, ou lista o que os padrões do desenho sugerem agora. |
| `AUTOCONSTRAIN` |  | Acrescenta restrições de coincidência, horizontais e verticais onde a geometria já está próxima |
| `AUTODIM` | `ADIM` | Cota por regras: dimensão total, cadeias ao longo dos lados, vãos, diâmetros de furos e espaçamento da grelha, sem repetir o que já está cotado. |
| `AUTOSHEET` | `ASH` | Organiza as folhas sozinho: escolhe papel e escalas normalizadas e coloca cada vista com uma legenda e um bloco de título. |
| `BATTMAN` |  | Gestor de atributos de bloco: ordem, etiquetas, pedidos, predefinições e modos dos atributos de um bloco, depois as suas referências atualizadas |
| `BCLOSE` |  | Fecha o editor de blocos: guarda o bloco ou descarta as alterações |
| `BCONVERT` |  | BCONVERT encontra geometria que se repete e transforma-a em referências de bloco. Selecione os objetos que se repetem: cada outro conjunto de objetos no espaço aberto que é a mesma geometria, movido e rodado em qualquer ângulo, é encontrado, e com Espelhado ou Escalado ativos também encontra imagens espelhadas e cópias noutra escala. Dê ao novo bloco um nome e um ponto base; a seleção e cada cópia tornam-se referências a ele, cada uma com a sua rotação e escala. Ou escolha Bloco e indique um bloco existente para encontrar cópias soltas dos seus objetos. Uma cópia deve ter a mesma camada, cor, tipo de linha e espessura de linha, a menos que Propriedades esteja em Ignorar. Os objetos em camadas bloqueadas ficam de fora. Um passo de anular. |
| `BEDIT` | `BE` | Editor de blocos: edita os objetos e atributos de um bloco; BCLOSE guarda (BE) |
| `BLEND` |  | BLEND: uma spline entre as extremidades de duas curvas abertas, escolhidas perto das extremidades para unir. CONtinuity: Tangent segue as duas direções, Smooth segue também a forma como curvam. |
| `BLOCK` | `B`, `BMAKE` | Cria um bloco a partir de objetos (passam a ser uma referência) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referência a um bloco passa a ser uma referência a outro, no mesmo lugar e com a mesma escala e rotação. Os valores dos atributos que ambos os blocos têm são mantidos. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mostra o painel Blocos com o cursor no seu filtro. O painel mostra uma imagem de cada bloco (os colocados mais recentemente primeiro), em lista ou em grelha; clique numa imagem ou arraste-a para o desenho para colocar o bloco com INSERT. Em Bibliotecas, acrescente um DWG ou DXF seu: os seus blocos são listados com imagens e são copiados para este desenho quando colocar um. No CadCraft Studio também se pode acrescentar uma pasta de desenhos, e os ficheiros e pastas são memorizados. |
| `BOMEDIT` | `BOMCOLUMNS` | As colunas, agrupamento, ordenação, título, totais e notas de uma tabela de lista de materiais |
| `BOMEXPORT` |  | Guarda uma tabela de lista de materiais como ficheiro .csv |
| `BOMTABLE` | `BOM` | Uma tabela de lista de materiais em tempo real de uma zona, ou de todo o desenho |
| `BOMUPDATE` |  | Atualiza agora todas as tabelas de lista de materiais, mesmo as congeladas |
| `BOMZONE` | `BZONE` | Uma área com nome do desenho para uma lista de materiais: dois cantos, um polígono, ou o contorno de um objeto fechado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): escolha um ponto dentro de uma área fechada e obtenha uma polilinha fechada à sua volta. Os arcos continuam arcos. Islands contorna também as áreas que estão dentro dela. |
| `BOX` |  | Uma caixa: dois cantos e uma altura (3D) |
| `BPARAMETER` | `BPARAM` | Ainda não implementado: acrescentar um parâmetro (como Visibilidade) a um bloco. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parâmetros de bloco: parâmetros com nome e fórmulas, e vários parâmetros de visibilidade num só bloco. Funciona no editor de blocos (atribui os objetos selecionados a um estado) e numa referência selecionada (os seus próprios valores e estados). |
| `BREAK` | `BR` | Parte uma linha, arco, círculo ou polilinha entre dois pontos (BR) |
| `BREAKATPOINT` |  | Divide uma linha, arco ou polilinha em dois num ponto |
| `BREAKLINE` |  | Desenha uma linha com um símbolo de interrupção; o seu tamanho e a extensão para além das extremidades ficam memorizados. |
| `BREPLACE` |  | BREPLACE troca um bloco por outro. Selecionados: escolha referências de bloco e indique o bloco a usar em vez delas. Todos: indique um bloco e a sua substituição, e cada referência em cada espaço e dentro de outros blocos muda. Uma referência mantém o seu lugar, escala, rotação e camada, e os valores dos atributos que ambos os blocos têm; os valores para os quais o novo bloco não tem lugar são eliminados e indicados. |
| `BSEARCH` |  | BSEARCH encontra blocos. Nome: parte de um nome de bloco, ou um padrão com * e ?. Atributo: um valor (ou TAG=valor) que os atributos de uma referência têm. Geometria: selecione objetos ou uma referência de bloco, e os blocos cuja forma é pelo menos 85% semelhante são listados, o melhor primeiro; tamanho, rotação e espelhamento não contam. As referências encontradas no espaço aberto ficam selecionadas, prontas para o comando seguinte. |
| `BURST` |  | Decompõe referências de bloco e mantém o que os seus atributos dizem: cada valor torna-se texto na camada do atributo. |
| `BVHIDE` | `BVH` | No editor de blocos: oculta objetos no estado de visibilidade atual. |
| `BVSHOW` | `BVSH` | No editor de blocos: mostra os objetos que o estado de visibilidade atual oculta (aparecem em esbatido para escolher). |
| `BVSTATE` | `BVS` | No editor de blocos, num bloco com estados de visibilidade: muda para um estado, ou acrescenta, renomeia ou elimina um. |
| `CAL` |  | Calcula um comprimento ou um número: + − * / e parênteses, como os escreve em qualquer lugar |
| `CENTERLINE` | `CL` | Linha de eixo entre duas linhas: a meio caminho entre elas, ou ao longo da bissetriz quando se encontram (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: uma cruz no centro de um círculo ou arco, com linhas de eixo até um pouco além dele (CM) |
| `CHAMFER` | `CHA` | Chanfra o canto entre duas linhas (D duas distâncias, A comprimento e ângulo, P cada canto de uma polilinha) |
| `CHSPACE` |  | CHSPACE: move objetos entre uma folha e o modelo através de uma viewport. São escalados e rodados para parecerem iguais do outro lado. Numa folha vão para o modelo; quando trabalha através de uma viewport (MSPACE) vêm para a folha. |
| `CIRCLE` | `C` | Centro e raio, diâmetro, 2 ou 3 pontos |
| `CLASS` |  | Coloca os objetos selecionados numa classe, ou sem seleção define a classe ativa (? lista-as) |
| `CLASSES` | `CLS` | O painel Classes: as classes ordenam objetos por camadas; mostra, oculta e estiliza-as, e substitui-as por viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ancora ou faz flutuar a linha de comandos, torna-a uma linha, define as suas linhas de histórico, ou abre o histórico (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compara estilos de cota, estilos de texto, camadas, folhas ou unidades: dois neste desenho, ou este desenho contra outro aberto, e copia um valor. |
| `CONSTRAINTBAR` | `CBAR` | Mostra ou oculta as barras de restrição (Showall / Hideall, ou por objeto) |
| `COPY` | `CO`, `CP` | Copia objetos, tantas vezes quantos cliques der |
| `COPYBASE` |  | Copia objetos para a área de transferência com um ponto base que escolhe |
| `COPYCLIP` |  | Copia objetos para a área de transferência (Ctrl+C); PASTECLIP coloca-os |
| `COUNT` | `BCOUNT` | Conta referências de bloco: escolha uma para selecionar e contar cada referência do seu bloco |
| `COUNTTABLE` |  | Coloca uma tabela de contagens de blocos |
| `CREDITS` |  | Põe os créditos da Biblioteca no desenho como uma tabela. Execute-o de novo para atualizar a tabela com os itens do desenho agora. |
| `CURSORSIZE` |  | O tamanho da cruz: 100 percorre-a de bordo a bordo do desenho (Definições › Cursor › Ecrã inteiro) |
| `CUTCLIP` |  | Corta objetos para a área de transferência (Ctrl+X): copia e depois apaga |
| `CYLINDER` | `CYL` | Um cilindro: centro, raio e altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Lista blocos, os seus atributos e propriedades de objetos como tabela no desenho ou num ficheiro CSV |
| `DATALINK` | `DL` | Uma tabela de um ficheiro CSV que memoriza o ficheiro, para o poder ler de novo |
| `DATALINKUPDATE` | `DLU` | Volta a ler o ficheiro de uma ligação de dados e volta a preencher as suas tabelas |
| `DCALIGNED` | `DCALI` | Restrição dimensional: distância real entre pontos, um ponto e uma linha, ou duas linhas |
| `DCANGULAR` | `DCANG` | Restrição dimensional: ângulo entre duas linhas, ou de um arco |
| `DCCONVERT` |  | Transforma cotas desenhadas sobre geometria restringível em restrições dimensionais |
| `DCDIAMETER` | `DCDIA` | Restrição dimensional: diâmetro de um círculo ou arco |
| `DCDISPLAY` |  | Mostra ou oculta as restrições dimensionais no desenho |
| `DCHORIZONTAL` | `DCHOR` | Restrição dimensional: distância horizontal |
| `DCLINEAR` | `DCLIN` | Restrição dimensional: distância horizontal ou vertical, a partir de onde a coloca |
| `DCRADIUS` | `DCRAD` | Restrição dimensional: raio de um círculo ou arco |
| `DCVERTICAL` | `DCVER` | Restrição dimensional: distância vertical |
| `DELBLOCKS` |  | Apaga blocos: cada referência (também as aninhadas, em cada folha) e as definições |
| `DELCONSTRAINT` | `DELCON` | Remove cada restrição (geométrica e dimensional) dos objetos que selecionar |
| `DELOPENING` |  | Retira uma porta ou janela de uma parede. |
| `DESCRIBE` | `DESC` | Diz o que o desenho contém: quantos objetos, de que tipo, de que tamanho, o que está selecionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Limpa a seleção (Esc) |
| `DETAILS` | `DET` | Os detalhes próprios do seu escritório, encontrados para o que está a desenhar: procurar, acrescentar um bloco, listar, remover, ativar ou desativar as sugestões. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Desenha um diagrama a partir de texto: um fluxograma Mermaid, um diagrama de componentes PlantUML, D2, uma lista de origem e destino ou XML do draw.io, como blocos e conetores que pode editar |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distância real entre dois pontos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ângulo entre duas linhas, de um arco, ou por três pontos |
| `DIMARC` | `DAR` | Cota de comprimento de arco: a distância ao longo de um arco, com o símbolo de arco (DAR) |
| `DIMASZ` |  | Definição de cota: Tamanho da seta |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas empilhadas a partir de uma linha de base |
| `DIMBREAK` | `DBREAK` | Interrompe as linhas de cota e de extensão onde cruzam outros objetos (Auto), entre dois pontos (Manual), ou remove as interrupções |
| `DIMCONSTRAINT` | `DCON` | Restrições dimensionais: linear, alinhada, angular, raio, diâmetro, converter |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Uma cadeia de cotas, cada uma a partir do fim da anterior |
| `DIMDEC` |  | Definição de cota: casas decimais |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diâmetro de um arco ou círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Liberta cotas dos objetos a que estão ligadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Altera o texto da cota (Início, Novo texto, Rodar) ou inclina as linhas de extensão (Oblíqua) |
| `DIMEXE` |  | Definição de cota: Extensão para além da linha de cota |
| `DIMEXO` |  | Definição de cota: Deslocamento a partir da origem |
| `DIMGAP` |  | Definição de cota: Intervalo à volta do texto |
| `DIMINSPECT` |  | Cota de inspeção: uma moldura à volta do valor com uma etiqueta e a frequência com que a peça é verificada |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de raio com ressalto: um raio desenhado a partir de um ponto mais próximo quando o centro está longe (DJO) |
| `DIMJOGLINE` | `DJL` | Acrescenta um símbolo de ressalto à linha de uma cota linear ou alinhada, para mostrar que a distância não está desenhada à escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distância horizontal ou vertical (R para qualquer ângulo) |
| `DIMLUNIT` |  | Definição de cota: formato de comprimento (1 científico, 2 decimal, 3 engenharia, 4 arquitetónico, 5 fracionário) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: a distância X ou Y de um ponto à origem do UCS, numa linha de chamada (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Substitui variáveis de cota nas cotas selecionadas sem mudar o seu estilo; Clear repõe o estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raio de um arco ou círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Liga os pontos de uma cota a objetos, para que a cota os siga e volte a medir quando se movem (DRE) |
| `DIMSCALE` |  | Definição de cota: Escala global (tamanhos × isto) |
| `DIMSPACE` |  | Espaçamento igual entre cotas paralelas, medido a partir de uma cota base (0 alinha-as, Auto é o dobro da altura do texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Cria, altera, define como atual, elimina, aplica e compara estilos de cota com nome (a caixa de diálogo; -DIMSTYLE na linha de comandos) |
| `DIMTEDIT` | `DIMTED` | Move o texto da cota para a esquerda, a direita ou o centro da linha de cota, ou roda-o |
| `DIMTEXTUNIT` | `DTU` | Texto da cota em mm, cm, m ou km, ou nas unidades do próprio desenho: as cotas selecionadas, senão as novas (DTU) |
| `DIMTXT` |  | Definição de cota: Altura do texto |
| `DIST` | `DI` | Distância e ângulo entre dois pontos |
| `DISTRIBUTE` |  | Espaça os objetos selecionados igualmente, de lado a lado ou de cima a baixo: passos iguais entre centros, ou intervalos iguais; os dois exteriores ficam |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que dividem uma linha, arco, círculo, polilinha, spline ou elipse em partes iguais. Pontos, ou com Bloco um bloco em cada marca. |
| `DOCUMENTS` | `DOCS` | Abre o painel Documentos: reserve e devolva desenhos, revisões, estados de publicação e aprovação de uma pasta de projeto |
| `DOOR` | `DR` | Coloca uma porta numa parede. O lado em que clica é o lado para onde abre. |
| `DRAWORDER` |  | Altera a ordem de desenho: traz objetos para a frente, envia-os para trás, ou põe-nos acima ou abaixo de outros objetos. |
| `DUPLICATE` | `DUP` | Uma cópia que se move com o ponteiro: clique para a pousar (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | As propriedades do desenho: título, autor e restantes, e os seus próprios pares de nome e valor |
| `DXFOUT` |  | Transfere o desenho como DXF R12 (Guardar mantém o seu próprio formato) |
| `EATTEDIT` | `DDATTE` | Edita os atributos de uma referência de bloco: valores, texto e propriedades, um atributo de cada vez |
| `ELLIPSE` | `EL` | Extremidades do eixo e o outro meio-eixo |
| `ERASE` | `E`, `DELETE` | Remove objetos |
| `EXPLODE` | `X` | Decompõe polilinhas, blocos e cotas nas suas partes |
| `EXPORT` | `EXP` | Guarda uma cópia do desenho num tipo de ficheiro que um suplemento escreve |
| `EXPORT3D` | `3DEXPORT` | Exporta o modelo 3D: GLB, OBJ ou STL |
| `EXPORTPOINTS` | `EXPPTS` | Escreve pontos, e os pontos de inserção dos blocos com um atributo como descrição, num ficheiro CSV ou TXT (PNEZD, PENZD ou XYZ) para programas BIM e de topografia |
| `EXTEND` | `EX` | Alonga objetos até encontrarem outros: clique perto de uma extremidade, arraste por vários, ou Shift+clique para aparar |
| `EXTRIM` |  | EXTRIM: escolha uma aresta de corte, depois um lado. Tudo o que cruza a aresta é aparado nesse lado. As partes que sairiam aparecem enquanto move o ponteiro. |
| `EXTRUDE` | `EXT` | Extrude objetos 2D fechados em sólidos (3D) |
| `FIELD` |  | Coloca um campo num texto, numa célula de tabela ou num atributo: uma data, o nome do ficheiro, o número da folha, uma propriedade do desenho, a área ou o comprimento de um objeto, ou uma fórmula |
| `FILLET` | `F` | Arredonda ou corta o canto entre dois objetos (R raio, P cada canto de uma polilinha, M vários) |
| `FIND` |  | Procura e substitui palavras em textos, valores de atributos e texto de cotas |
| `FLATTEN` |  | Define a altura (Z) e a espessura dos objetos selecionados como 0, também nos blocos que usam. |
| `FLOOR` |  | Escolhe o piso onde desenhar, acrescenta um, ou move ou copia a seleção para um. |
| `FLOORLAYERS` |  | Transforma pisos em camadas com o nome Piso-Camada, para um ficheiro que vai para alguém sem pisos. |
| `FLOORS` | `FLR` | Abre o painel Pisos: sobrepõe pisos num único espaço de modelo. |
| `GCCOINCIDENT` |  | Restrição: dois pontos encontram-se, ou um ponto fica sobre um objeto |
| `GCCOLLINEAR` |  | Restrição: duas linhas ficam na mesma reta |
| `GCCONCENTRIC` |  | Restrição: dois círculos ou arcos partilham um centro |
| `GCEQUAL` |  | Restrição: duas linhas ficam com o mesmo comprimento, ou dois círculos/arcos com o mesmo raio |
| `GCFIX` |  | Restrição: um ponto ou um objeto inteiro fica onde está |
| `GCHORIZONTAL` |  | Restrição: uma linha (ou dois pontos) fica horizontal |
| `GCPARALLEL` |  | Restrição: duas linhas ficam paralelas |
| `GCPERPENDICULAR` |  | Restrição: duas linhas ficam em ângulo reto |
| `GCSYMMETRIC` |  | Restrição: dois pontos, linhas ou círculos espelham-se através de uma linha |
| `GCTANGENT` |  | Restrição: uma linha e um círculo ou arco (ou dois deles) ficam tangentes |
| `GCVERTICAL` |  | Restrição: uma linha (ou dois pontos) fica vertical |
| `GDSIN` | `GDS` | Ver um layout de circuito integrado (um ficheiro de fluxo GDSII): cada camada e tipo de dados como camada de desenho, planificado, em unidades do utilizador; só para ver e medir (teste de laboratório) |
| `GEOMCONSTRAINT` | `GCON` | Restrições geométricas: horizontal, vertical, paralela, tangente, coincidente… |
| `GLBOUT` |  | Exporta o modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Preenche uma área com um gradiente de uma ou duas cores |
| `GRID` |  | Define a grelha: a distância entre linhas, cada N-ésima linha como linha principal, LIGADA ou DESLIGADA, ou Auto para voltar a seguir o zoom |
| `GRIDMOVE` | `GM` | Move uma linha de grelha e o que nela está pendurado: as paredes esticam, os pilares, as bolhas e as etiquetas movem-se, as cotas seguem. |
| `GROUP` | `G` | GROUP (G): dá aos objetos selecionados um nome que partilham. Um clique num deles passa a selecioná-los todos. Enter no nome cria um grupo sem nome. |
| `GROUPEDIT` |  | GROUPEDIT: altera um grupo. Escolha um dos seus objetos ou indique o seu Nome, depois Acrescentar ou Remover objetos, REName para mudar o nome, altere a sua Descrição, ou indique se um clique o seleciona por inteiro. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Preenche uma área com um preenchimento sólido ou um padrão: clique dentro dela, ou selecione objetos fechados (H) |
| `HATCHEDIT` | `HE` | Altera uma trama: padrão, escala, ângulo, origem e a sua ligação a um contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Volta a criar as polilinhas do contorno a partir de uma trama, ligadas a ela ou não |
| `HATCHTOBACK` |  | Envia todas as tramas para trás de tudo o resto. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Oculta os objetos selecionados até UNISOLATEOBJECTS. Não fica guardado com o desenho. |
| `HISTORY` | `HIST` | HISTORY (HIST): as versões deste desenho — cópias guardadas neste computador quando o Studio o guarda, e as versões na nuvem — para abrir, repor e comparar com o que mudou, mostrado a cores. |
| `ID` |  | Coordenadas de um ponto |
| `IMAGE` | `IM` | Indica ao CadCraft os ficheiros de imagem que um desenho usa (um DWG guarda apenas onde estavam). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Coloca uma imagem (PNG ou JPEG) a partir de um ficheiro. |
| `IMAGECLIP` | `ICL` | Recorta uma imagem a um retângulo ou um polígono, ou retira o recorte. |
| `IMPORT` | `IMP` | Importa um ficheiro de um tipo que um suplemento lê, para este desenho |
| `INSERT` | `I`, `DDINSERT` | Coloca um bloco (S escala, R roda); F a partir de um ficheiro DWG/DXF, L a partir da biblioteca |
| `INTERSECT` | `IN` | Mantém apenas o que os sólidos têm em comum (3D), ou a área que as regiões 2D partilham |
| `ISODRAFT` |  | ISODRAFT: desenho isométrico ativado ou desativado, ou diretamente sobre o plano Esquerdo, Superior ou Direito. Enquanto está ativo, Orto e rastreio polar seguem os dois eixos do plano, a grelha é desenhada em isométrico, e ELLIPSE tem Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostra apenas os objetos selecionados; tudo o resto neste espaço fica oculto até UNISOLATEOBJECTS. Não fica guardado com o desenho. |
| `ISOPLANE` |  | ISOPLANE: escolhe o plano isométrico onde desenhar: Esquerdo, Superior ou Direito. Enter passa ao seguinte, como F5 faz com o desenho isométrico ativo. |
| `JOIN` | `J` | Une linhas, arcos e polilinhas que se encontram extremidade com extremidade numa só polilinha; linhas sobre a mesma reta numa só linha (J) |
| `LASER` | `LASERCUT` | Abre o painel Laser: envia camadas para uma máquina de corte a laser ou de gravação (G-code GRBL) |
| `LASSOMODE` |  | Premir e arrastar desenha um laço (1) ou um retângulo (0) |
| `LAYDEL` |  | Apaga uma camada e todos os objetos nela (no modelo, nas folhas e nos blocos) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abre o gestor de camadas: todas as camadas numa tabela |
| `LAYERPANEL` |  | Mostra o painel de camadas |
| `LAYFRZ` |  | Congela a camada de cada objeto que escolher |
| `LAYGROUP` | `LG` | Agrupa camadas em pastas no painel Camadas. |
| `LAYISO` |  | Isola as camadas dos objetos selecionados (todas as outras desligadas) |
| `LAYLOCKFADE` |  | Define quanto esbatem os objetos em camadas bloqueadas, e se um clique os pode selecionar. |
| `LAYMCUR` |  | Torna atual a camada do objeto que escolher |
| `LAYMRG` |  | Funde camadas: os seus objetos passam para uma camada de destino, e as camadas fundidas desaparecem |
| `LAYOFF` |  | Desliga a camada de cada objeto que escolher |
| `LAYON` |  | Liga todas as camadas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Uma nova folha com bloco de título e uma viewport |
| `LAYTHW` |  | Descongela todas as camadas |
| `LAYUNISO` |  | Volta a ligar as camadas que LAYISO desligou |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converte texto escrito com tipos de letra vietnamitas antigos (tipos TCVN3 / ABC, como .VnTime, e VNI, como VNI-Times) para Unicode. Este texto já é mostrado como se lê; isto reescreve-o de vez, com uma contagem e um passo de anular. |
| `LENGTHEN` | `LEN` | Alonga ou encurta linhas, arcos e polilinhas: por uma quantidade, uma percentagem, até um total, ou arrastando (LEN) |
| `LIBRARY` | `LIB` | O painel da Biblioteca: colocar itens, procurar atualizações, créditos |
| `LIMITS` |  | Define os limites do desenho: ON, OFF, ou os cantos inferior esquerdo e superior direito. Com os limites ON, os pontos fora deles são recusados |
| `LINE` | `L` | Segmentos retos, cada um o seu próprio objeto |
| `LINETYPE` | `LT`, `CELTYPE` | O tipo de linha que os novos objetos recebem (por camada, por bloco, ou um com nome) |
| `LINKVIEWS` | `SYNCVIEWS` | Desloca e aproxima todos os painéis em conjunto (ecrã dividido), para comparar dois desenhos ou revisões |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ou VLIDE) abre o editor LISP: uma janela para escrever, carregar e experimentar uma rotina. Carregar no desenho lê cada forma, como carregar o ficheiro com APPLOAD, e cria os seus comandos. Executar seleção avalia as formas selecionadas, ou a forma onde está o cursor. A consola mostra o que a rotina imprimiu e cada erro com a sua linha. O parêntese correspondente é marcado enquanto escreve e Enter indenta a nova linha. Novo, Abrir e Guardar funcionam com um ficheiro .lsp. As listas ao lado do texto mostram as funções que a rotina define, as que chama e que este LISP ainda não tem, e todas as que tem. A janela não bloqueia o desenho, por isso uma rotina pode pedir pontos; Stop ou Esc termina uma rotina em execução. |
| `LIST` | `LI`, `LS` | Descreve objetos no histórico |
| `LTSCALE` | `LTS` | A escala de tipos de linha do desenho (cada traço e cada intervalo é multiplicado por ela) |
| `LWDISPLAY` | `LWT` | Mostra ou oculta as espessuras de linha no ecrã (o botão LWT na barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | A espessura de linha que os novos objetos recebem (por camada, por bloco, predefinição, ou mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Camadas de mapa sob o espaço do modelo: o sistema de coordenadas do desenho, mosaicos, WMS, WMTS, ArcGIS, imagens |
| `MASSPROP` |  | MASSPROP: propriedades de secção de regiões e objetos fechados: área, perímetro, centroide, momentos e produto de inércia, raios de giração e os eixos principais. Exato para linhas e arcos. Pode escrever o relatório num ficheiro de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propriedades: copia a camada, a cor e mais de um objeto para outros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): uma marca a cada comprimento indicado ao longo de uma linha, arco, círculo, polilinha, spline ou elipse, a partir da extremidade mais próxima da sua escolha. Pontos, ou com Bloco um bloco em cada marca. |
| `MEASUREGEOM` | `MEA` | Mede uma distância, um raio, um ângulo ou uma área (MEA) |
| `MINSERT` |  | MINSERT: coloca um bloco em linhas e colunas de uma vez. Cada um é a sua própria referência, por isso pode mover ou apagar qualquer um deles. |
| `MIRROR` | `MI` | Espelha objetos através de uma linha |
| `MLEADER` | `MLD`, `MLEAD` | Chamada múltipla: uma seta, uma linha de chamada e uma nota, como um só objeto (MLD) |
| `MLEADERALIGN` | `MLA` | Alinha chamadas múltiplas com uma delas, numa direção, com espaçamento igual, ou distribuídas entre dois pontos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Junta várias chamadas múltiplas numa só: os seus blocos numa linha ou coluna, ou as suas notas uma por baixo da outra (MLC) |
| `MLEADEREDIT` | `MLE` | Acrescenta linhas de chamada a uma chamada múltipla ou remove-as; troca o seu conteúdo entre texto e bloco (MLE) |
| `MLINE` |  | Desenha linhas paralelas em conjunto, unidas nos cantos. |
| `MOVE` | `M` | Move objetos por um ponto base e um segundo ponto |
| `MSPACE` | `MS` | Trabalha no modelo através de uma viewport da folha aberta (ou faça duplo clique dentro da viewport). |
| `MTEXT` | `MT`, `T` | Texto de parágrafo: arraste a sua largura, depois escreva no próprio local; Enter inicia um novo parágrafo (T) |
| `MVIEW` | `MV` | Uma viewport sobre o modelo, num layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas com nome: guarde a vista do ecrã (ou uma janela) com um nome e volte a ela (NV) |
| `NCOPY` |  | Copia objetos de uma referência de bloco ou de um desenho ligado para o desenho, sem os decompor. |
| `NEARBY` |  | Diz o que está perto do cursor, o mais próximo primeiro, com a distância e o lado. |
| `NEW` |  | Inicia um novo desenho |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotação de texto e cotas anotativos: acrescenta uma escala, apaga uma, acrescenta a escala atual, ou lista-as (cada viewport mostra-as no tamanho da sua própria escala) |
| `OBJOUT` |  | Exporta o modelo 3D como OBJ |
| `OFFICESTANDARD` | `OFFSTD` | O padrão do escritório: alturas de texto no papel, camadas, campos da legenda e modelos num só registo. Mostra o que está em vigor e de onde vem; Importa um registo .json para este desenho, acrescenta as camadas do escritório que faltam, lista os campos da legenda. |
| `OFFSET` | `O` | Cópias paralelas a uma distância |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: como OFFSET fecha os intervalos nos cantos exteriores de uma polilinha. 0 prolonga os segmentos, 1 acrescenta um arco, 2 acrescenta um corte reto. Mantido para esta sessão. |
| `OLELIST` | `OLES` | Lista os objetos OLE que um desenho transporta e põe uma cópia da imagem de um deles onde escolher |
| `OPEN` |  | Abre um DWG ou DXF deste computador |
| `OPENIN3D` |  | Abre este desenho na aplicação de modelação 3D, num novo separador (nada é enviado) |
| `OPTIONKEYS` | `OPTKEYS` | Dá às opções dos comandos letras próprias (ARRAY.PO, P), num ficheiro de texto |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abre o menu de snap a objetos: escolha quais os snaps ativos. Também um clique com o botão direito em Snap na barra de estado. |
| `OVERKILL` |  | Apaga objetos duplicados e funde linhas e arcos sobrepostos ou extremidade com extremidade, dentro de uma tolerância. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | O painel de Parâmetros: parâmetros do utilizador e restrições dimensionais numa só tabela |
| `PARTSLIST` | `PLIST` | Uma tabela de lista de peças com cada peça normalizada e secção de aço colocada a partir da Biblioteca |
| `PASTEAREA` | `PAREA` | Cola uma área copiada no MarkupCraft (Copiar área) no seu tamanho real, como imagem. |
| `PASTEBLOCK` |  | PASTEBLOCK: cola o que copiou como um só bloco. O bloco recebe um nome próprio; RENAME dá-lhe o seu. |
| `PASTECLIP` |  | Cola a área de transferência: segue o cursor, clique onde deve ir (Ctrl+V) |
| `PASTEORIG` |  | Cola a área de transferência nas coordenadas de onde foi copiada (Ctrl+Shift+V) |
| `PDF` |  | Indica ao CadCraft os ficheiros PDF que os subjacentes do desenho usam |
| `PDFADJUST` |  | Esbate, ajusta o contraste, torna monocromático ou desliga um subjacente PDF |
| `PDFATTACH` | `PDFATT` | Anexa uma página PDF como subjacente (PDFATTACH) |
| `PDFCLIP` |  | Recorta um subjacente PDF a um retângulo ou polígono |
| `PDFIMPORT` | `PDFIM` | Transforma as linhas, preenchimentos e texto de uma página PDF em objetos do desenho (PDFIMPORT) |
| `PDFLAYERS` |  | Liga ou desliga as camadas de um subjacente PDF |
| `PEDIT` | `PE` | Edita uma polilinha: fechar, abrir, unir, largura, curva ajustada, spline, descurvar, gerar tipo de linha, inverter; linhas, arcos e splines podem ser transformados em polilinhas |
| `PENPRESSURE` |  | Se a pressão de um traço de caneta define a espessura de linha do que SKETCHFIX e SKETCHLIVE criam (ativo por predefinição). Fica guardado neste navegador. |
| `PHOTOSKETCH` | `PSK` | Transforma uma fotografia de um esboço à mão em papel em linhas e arcos à escala, endireitando a perspetiva e dando a cada cor de caneta a sua própria camada. |
| `PICKSTYLE` |  | PICKSTYLE: se selecionar um objeto de um grupo seleciona o grupo inteiro (1, a definição inicial) ou apenas esse objeto (0). Mantido para esta sessão. |
| `PLAN` |  | Roda a vista para que o eixo X do UCS (UCS atual, um Ucs guardado, ou o Mundo) fique horizontal no ecrã. Nada no desenho se move. |
| `PLINE` | `PL` | Uma polilinha de segmentos de linha e de arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Imprimir para PDF: um layout, ou o modelo a uma escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabelas de estilos de impressão: define como cada cor é impressa (cor, preto, cinzento, tinta, espessura de linha); guardadas com o desenho (STYLESMANAGER) |
| `POINT` | `PO` | Objetos de ponto |
| `POINTCLOUD` | `PC` | a nuvem de pontos anexada: fatia, altura, espessura, cor, tamanho, visível, zoom, desanexar |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | anexa uma nuvem de pontos (LAS, LAZ, XYZ, PTS) sob o desenho |
| `POLARANG` |  | O passo de rastreio polar em graus (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Um polígono regular |
| `PRESSPULL` |  | Empurra ou puxa uma face de um sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abre o painel de Propriedades (também Ctrl+1, ou faça duplo clique num objeto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Recolhe o painel de Propriedades para a borda da janela |
| `PSPACE` | `PS` | Sai da viewport em que trabalha e volta à folha (ou faça duplo clique fora dela). |
| `PUBLISH` | `-PUBLISH` | Imprime várias ou todas as folhas num só PDF (uma página e um marcador por folha) |
| `PURGE` | `PU` | Remove definições de blocos que nada usa |
| `QDIM` |  | Cota rápida: cota vários objetos de uma vez (contínua, de base, escalonada, de ordenada, de raio ou de diâmetro) |
| `QPMODE` | `QP` | Propriedades rápidas junto ao cursor, ativadas ou desativadas |
| `QSELECT` | `QS` | Seleção rápida: cada objeto de um tipo cuja camada, cor, tamanho ou nome coincide (QS) |
| `RASTERSNAP` |  | Ativa ou desativa o encaixe às linhas de folhas digitalizadas. |
| `RAY` |  | Semirreta: uma linha de construção a partir de um ponto, sem fim de um lado. |
| `RECOVER` |  | Abre um DXF ou DWG danificado: salta o que não pode ser lido em vez de recusar o ficheiro, indica o que saltou, e depois verifica e repara o desenho como AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Uma polilinha fechada a partir de dois cantos |
| `REDLINE` | `RDL` | Anotação para revisão: lê um pacote de anotações do MarkupCraft, aceita ou recusa cada alteração, põe nuvem nas aceites com um registo de revisão, e guarda o ficheiro de respostas (RDL) |
| `REDO` |  | Refaz o que foi anulado |
| `REFCLOSE` |  | Termina a edição de um bloco no local: guarda-o ou descarta as alterações |
| `REFEDIT` |  | Edita um bloco no local, onde está uma referência dele, com o resto do desenho esbatido; REFCLOSE guarda |
| `REGEN` | `RE` | Reconstrói o que está desenhado neste separador a partir do desenho |
| `REGENALL` | `REA` | Reconstrói o que está desenhado em cada separador, painel e desenho aberto |
| `REGION` | `REG` | REGION (REG): cria regiões planas a partir de objetos fechados, ou de linhas, arcos e polilinhas que fecham um circuito extremidade com extremidade. UNION, SUBTRACT e INTERSECT combinam depois regiões, e MASSPROP dá as suas propriedades de secção. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Regista várias digitalizações: coloca-as num só quadro por pares de pontos escolhidos ou alvos, refina com ICP, exporta um LAS ou E57 |
| `REINIT` |  | Volta a carregar o seu ficheiro de aliases |
| `RENAME` | `-RENAME`, `REN` | Renomeia uma camada ou um bloco (cada objeto ou referência acompanha) |
| `REVCLOUD` | `RC` | Nuvem de revisão: contorna um retângulo, um polígono, um traço à mão livre ou um objeto (RC) |
| `REVOLVE` | `REV` | Roda objetos 2D fechados em torno de um eixo e transforma-os em sólidos (3D) |
| `ROTATE` | `RO` | Roda objetos em torno de um ponto base |
| `SAMPLES` | `SAMPLE` | Abre um dos desenhos de exemplo do CadCraft (um conjunto arquitetónico, um tal-como-construído) para aprender |
| `SAVE` | `QSAVE` | Transfere o desenho no seu formato (DWG ou DXF) |
| `SAVEAS` |  | Transfere o desenho como DWG ou DXF: escolha qual |
| `SAYSEL` |  | Diz o que está selecionado, uma frase por objeto. |
| `SCALE` | `SC` | Escala objetos em torno de um ponto base |
| `SCALELISTEDIT` | `SCALELIST` | Acrescenta, edita e elimina as escalas próprias do desenho; aparecem nas listas de escalas da viewport e da impressão e são guardadas no ficheiro (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinha uma folha digitalizada com dois pontos: move, roda e, se escolher, escala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insere um desenho digitalizado: um PNG, JPEG ou TIFF (uma página ou todas as páginas de um ficheiro de várias páginas) ou uma página PDF que é uma imagem. |
| `SCANCLEAN` | `SCC` | Torna uma folha digitalizada a preto e branco e remove manchas. |
| `SCANCROP` | `SCR` | Recorta uma folha digitalizada a uma janela. |
| `SCANDESKEW` | `SCD` | Encontra o ângulo em que as linhas longas de uma folha digitalizada estão e endireita-a quando aceita o ângulo. |
| `SCANERASE` | `SCE` | Apaga uma área de uma folha digitalizada: um retângulo, um polígono ou um laço. |
| `SCANINFO` | `SCI` | Mostra o ficheiro original de uma folha digitalizada e os passos dados desde então. |
| `SCANSCALE` | `SCS` | Escala uma folha digitalizada: escolha dois pontos nela e escreva a distância real entre eles. |
| `SCANTRACE` | `SCT` | Transforma uma folha digitalizada em linhas e arcos numa nova camada, com uma tolerância que define. Texto e tramas ficam como imagem. |
| `SELECT` |  | Seleciona objetos agora (para P, Anterior, no comando seguinte) |
| `SELECTALL` | `AI_SELALL` | Seleciona cada objeto que pode editar neste separador (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seleciona cada objeto como os que escolhe: mesmo tipo, camada e cor (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Mostra o painel Conjunto de folhas: folhas de muitos desenhos, numeradas, publicadas como um só PDF. |
| `SHORTCUTS` | `KEYS` | Dá a qualquer comando uma tecla própria (Ctrl ou Alt com uma letra, ou uma tecla de função livre), guardada neste navegador ou na aplicação de ambiente de trabalho. |
| `SHXFONTS` | `SHX` | Dá ao CadCraft tipos de letra SHX de uma pasta ou de ficheiros, para que os estilos de texto que os indicam os usem (listar, remover, inverter) |
| `SKETCHFIX` | `SKF` | Desenha traços à mão livre; cada um torna-se uma linha, círculo, arco, retângulo ou polilinha limpos, alinhados e unidos aos outros. |
| `SKETCHLIVE` | `SKL` | Esboça com uma caneta: cada traço torna-se uma linha, círculo, arco ou retângulo precisos ao levantar a caneta, encaixados ao desenho, com o seu tamanho para escrever por cima. |
| `SPLINE` | `SPL` | Desenha uma spline por pontos (ou com um polígono de controlo), ou transforma uma polilinha numa |
| `SPLINEDIT` | `SPE` | Edita uma spline: pontos de ajuste, pontos de controlo e pesos, abrir ou fechar, inverter, ou convertê-la em polilinha |
| `SPLIT` |  | Divide a área de desenho em painéis (como VPORTS no modelo; também a partir de uma folha) |
| `STEELMEMBER` | `SMEMBER` | Uma peça de aço em 3D a partir de uma secção normalizada: dois pontos (uma viga) ou um ponto base e uma altura (Coluna) |
| `STLOUT` |  | Exporta o modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Esticar: arraste uma janela de cruzamento sobre as extremidades para mover; o que está dentro move-se, o resto fica (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: o tipo de letra, altura, largura e inclinação que o novo texto usa (a caixa de diálogo; -STYLE na linha de comandos) |
| `SUBTRACT` | `SU` | Retira sólidos a outros (3D), ou regiões 2D a regiões |
| `SWBOUT` | `SWMACRO` | Transfere uma macro para o SolidWorks (.swb) que reconstrói o modelo como um só esboço restringido |
| `SWEEP` |  | Varre objetos 2D fechados ao longo de um caminho (linha, polilinha, arco, círculo) para sólidos (3D) |
| `TABLE` | `TB` | Cria uma tabela: linhas e colunas, ou a partir de células de folha de cálculo na área de transferência ou de um ficheiro CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edita uma tabela: escreve numa célula, insere e apaga linhas e colunas, tamanhos, células fundidas, alinhamento |
| `TABLEEXPORT` |  | Guarda o que uma tabela mostra como ficheiro CSV |
| `TABLEPASTE` | `PASTETABLE` | Cria uma tabela a partir de células de folha de cálculo na área de transferência |
| `TABLESTYLE` | `TS` | Estilos de tabela: alturas de texto, alinhamento, margem e bordas dos títulos, cabeçalhos e linhas de dados |
| `TAGS` |  | Etiquetas em referências de bloco: define uma etiqueta (tipo, valores permitidos, blocos a que se aplica), define-a nas referências selecionadas, e lista-as como um quadro que pode guardar em CSV |
| `TEXT` | `DT`, `DTEXT` | Texto de uma linha; Enter inicia a linha seguinte |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edita texto no local: escolha um texto (ou faça duplo clique) (ED) |
| `TEXTMASK` | `TMASK` | Põe uma máscara de fundo atrás dos textos (o fundo do desenho ou uma cor), ou a retira. |
| `TEXTTOFRONT` |  | Traz todo o texto, cotas e chamadas para a frente de tudo o resto. |
| `TOOLBAR` |  | Escolhe o que os botões da barra de ferramentas mostram: ícones e texto, só ícones, ou só texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Põe a barra de ferramentas no topo, no fundo, à esquerda ou à direita da janela |
| `TOOLBARROWS` |  | Escolhe quantas linhas a barra de ferramentas usa: quebrar para caber, 2 ou 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Põe as barras acima do desenho em normal ou compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruz de mira deslocada para desenhar com o dedo: um dedo move uma cruz que fica acima e ao lado dele, para que o dedo não tape o ponto escolhido. Levantar o dedo não escolhe nada; o botão Clicar ou um toque com um segundo dedo escolhe na cruz, e manter Clicar premido enquanto move arrasta. Um toque longo ou o botão Enter é Enter. Dois dedos deslocam e aproximam. Opções: ON, OFF, Auto (ativo só onde um dedo é o único ponteiro), Distância, Lado. |
| `TOUR` | `TUTORIAL` | Refaz a visita de seis passos ao primeiro desenho |
| `TRIM` | `TR` | Corta objetos até onde outros os cruzam: clique numa parte, arraste por várias, ou Shift+clique para prolongar |
| `TRIMEXTENDMODE` |  | Como TRIM e EXTEND começam: 1 Rápido (cada objeto é uma aresta de corte ou limite), 0 Normal (escolha primeiro as arestas) |
| `TTR` |  | Um círculo tangente a dois objetos, com um raio que indica (o mesmo que CIRCLE T). |
| `TURNLEFT` |  | Roda a vista 90° para a esquerda (sentido contrário aos ponteiros do relógio): UCS Z -90, e a vista segue. Nada no desenho se move. |
| `TURNRIGHT` |  | Roda a vista 90° para a direita (sentido dos ponteiros do relógio): UCS Z 90, e a vista segue. Nada no desenho se move. |
| `TURNWORLD` |  | De volta ao mundo: UCS Mundo, e a vista fica horizontal de novo. |
| `TXT2MTXT` | `T2M` | Une textos de uma linha num só texto de parágrafo, de cima para baixo. |
| `UCS` |  | O seu próprio sistema de coordenadas: uma origem e um eixo X (origem, ângulo Z, 3 pontos, OBjeto, Anterior, Mundo, Nomeado). Os pontos que escreve, o orto, o rastreio polar, a grelha e o novo texto seguem-no; a vista roda para que o seu eixo X fique horizontal. Nada no desenho se move. |
| `UNDO` | `U` | Anula o último comando |
| `UNGROUP` |  | UNGROUP: desfaz grupos. Selecione objetos dos grupos, ou indique um Nome. Os objetos continuam no desenho. |
| `UNION` | `UNI` | Une sólidos num só (3D), ou regiões 2D numa região |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostra de novo cada objeto ocultado por ISOLATEOBJECTS ou HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Como os comprimentos são mostrados e escritos: decimal, pés e polegadas, frações (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Calcula de novo os campos, e escolhe quando se atualizam sozinhos |
| `USDOUT` |  | Exporta o modelo 3D como USD (texto .usda, binário .usdc ou um pacote .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D normalizadas, em perspetiva ou paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Coloca uma vista 2D plana dos sólidos 3D (frente, topo, lado ou isométrica, arestas ocultas a tracejado) numa folha ou no modelo |
| `VIEWLABEL` | `VL` | Um título de vista numa folha que mostra o nome da vista da sua viewport, e muda com ela. |
| `VOICE` |  | Liga ou desliga os comandos falados. São reconhecidos neste computador. |
| `VPCLIP` |  | Recorta uma viewport da folha a um objeto fechado ou a um polígono desenhado; Delete torna-a de novo um retângulo |
| `VPLAYER` |  | Congela ou descongela camadas só em algumas viewports (Freeze, Thaw, Reset), e escolhe quais as camadas que as novas viewports começam congeladas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divide a área de desenho em painéis, cada um com a sua própria vista (numa folha: uma viewport, como MVIEW) |
| `VPVIEW` |  | Define o que uma viewport mostra: escolha uma janela no modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual da vista 3D: sombreado, arestas, linha oculta, arame, raio X |
| `WALL` | `WA` | Desenha paredes 2D como uma polilinha. Unem-se, e levam portas e janelas. |
| `WALLARC` | `WARC` | Desenha um arco de paredes. As paredes em planta são retas, por isso o arco é desenhado como pequenas paredes retas (15 graus cada) que se unem. |
| `WALLDELSEG` |  | Apaga uma parte de uma parede entre dois pontos. O que resta fica como uma ou duas paredes. |
| `WALLDIM` |  | Escreva um novo valor para uma cota: a parede na sua extremidade distante move-se em esquadria consigo mesma, a parede na primeira extremidade mantém-se, e as paredes unidas a ela seguem. |
| `WALLDISJOIN` |  | Escolha uma parede perto de uma extremidade para proibir as uniões nessa extremidade: a extremidade fica em esquadria e nada a segue. Escolha de novo para as permitir. |
| `WALLGRID` |  | Bloqueia uma parede a uma linha de grelha: ao longo dela, ou com uma extremidade nela. Mova a linha com GRIDMOVE e a parede segue. |
| `WALLHOLD` |  | Alinha e bloqueia: uma parede mantém o seu lugar em relação a outra (na sua linha, ou à distância que tem). Se uma se mover, a outra segue. |
| `WALLHOLDDIM` |  | Bloqueia a distância entre duas paredes paralelas. Se uma se mover, a outra segue para a manter. |
| `WALLHOLDS` |  | Lista os bloqueios das paredes. |
| `WALLJOINS` |  | Dá a cada parede de um desenho mais antigo o seu identificador e guarda as uniões entre elas. Isto acontece também na primeira alteração que fizer. |
| `WALLJOINSTYLE` |  | Clique num canto onde duas paredes se encontram extremidade com extremidade para mudar como é desenhado: meia-esquadria, reta, cortar reto. T troca qual parede atravessa. |
| `WALLOFFSET` | `WO` | Move uma parede em esquadria consigo mesma por uma distância (as paredes unidas a ela seguem), ou cria uma cópia a essa distância. |
| `WALLPICK` |  | Cria paredes numa linha ou polilinha do desenho, com as linhas unidas a ela se disser Yes. |
| `WALLPOLY` | `WP` | Desenha paredes em torno de um polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Desenha quatro paredes unidas a partir de dois cantos opostos, como RECTANG. |
| `WALLREJOIN` |  | Torna de novo uma só parede duas partes de uma parede. A primeira mantém o seu lugar no desenho. |
| `WALLROT` |  | Desenha quatro paredes unidas como um retângulo rodado para qualquer ângulo: o primeiro lado, depois até onde vai o outro. |
| `WALLSPLIT` | `WS` | Divide uma parede em duas num ponto ou onde outra parede a cruza. As partes ficam unidas, a menos que peça um intervalo ou extremidades livres. As portas e janelas seguem a sua parte. |
| `WALLSPLITGAP` |  | Divide uma parede deixando um intervalo: escreva o intervalo, escolha a parede e depois o ponto. As partes ficam com extremidades livres e podem voltar a unir-se. |
| `WALLSTRETCH` |  | Esticar com uma janela: as extremidades das paredes dentro dela movem-se, as paredes totalmente dentro movem-se por inteiro, e as paredes que embatem nos seus lados deslizam com elas. |
| `WALLTAN` |  | Continua uma parede com um arco que sai dela ao longo da parede (desenhado como pequenas paredes retas). |
| `WALLTRACE` |  | Cria paredes à volta da menor área fechada de linhas e paredes à volta do ponto em que clica. |
| `WALLUNHOLD` |  | Retira os bloqueios de uma parede (e os bloqueios de outras paredes a ela). |
| `WBLOCK` | `W`, `-WBLOCK` | Escreve um bloco, alguns objetos ou o desenho inteiro para um novo ficheiro DWG ou DXF (W) |
| `WEDGE` | `WE` | Uma cunha: dois cantos e uma altura; desce a partir do primeiro canto (3D) |
| `WHEREAMI` | `WHERE` | Diz onde está o cursor. |
| `WHOHAS` |  | Diz quem tem um desenho aberto. O CadCraft Studio guarda um pequeno ficheiro de bloqueio ao lado de cada desenho aberto (Plan.dwg.cclock: quem, desde quando, qual versão) e remove-o ao fechar. Opções: Current (o desenho aberto), File (escolher um), FOlder (cada desenho de uma pasta que esteja aberto algures; isto também permite ao Studio guardar ficheiros de bloqueio nessa pasta), Path (escrever um), Name (o nome que os outros veem). Um bloqueio não atualizado durante cinco minutos é considerado obsoleto. Não disponível num navegador. |
| `WINDOW` | `WN` | Coloca uma janela numa parede. |
| `XATTACH` | `XA` | Liga outro DWG ou DXF a este desenho, mostrado só de leitura (XREF lista-os e volta a carregá-los) |
| `XCLIP` | `XC` | Recorta referências de bloco e desenhos ligados a um retângulo ou polígono, ou retira o recorte. |
| `XLINE` | `XL` | Linha de construção, sem fim nos dois sentidos: por dois pontos, horizontal, vertical, a um ângulo, bissetriz de um ângulo, ou deslocada de uma linha. |
| `XREF` | `XR`, `-XREF` | Desenhos ligados (referências externas): listar, anexar, voltar a carregar, incorporar, desanexar |
| `ZOOM` | `Z` | Extensões, ou uma janela |

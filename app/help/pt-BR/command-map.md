---
title: Mapa de comandos: o que digitar
summary: Todo comando do CadCraft com seus nomes curtos, de A a Z, feito a partir do próprio programa, e os hábitos de outros programas de desenho que diferem.
keywords: mapa de comandos, comandos, aliases, nomes curtos, vindo de, lista de comandos, o que digitar, apagar, aparar, equivalente, diferenças
from: 9426856f
---

CadCraft usa os nomes de comando e nomes curtos que as pessoas conhecem de outros programas de desenho: digite `L` para uma linha, `TR` para aparar, `E` para apagar. Assim, não há tabela de tradução a aprender para a maioria deles: o nome que você conhece é o nome aqui. A lista abaixo contém todos os comandos do CadCraft, feita a partir do próprio programa. {{key:Enter}} repete o último; `HELP` na linha de comando imprime a mesma lista.

Os poucos que não são iguais, ou ainda não foram implementados:

- **Salvar** baixa uma cópia no navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); no CadCraft Studio grava o arquivo. Veja [Vindo de outro software de desenho](topic:coming-from).
- **PLOT** cria um PDF (também PNG e SVG), com uma tabela de estilos de plotagem; não há gerenciador de configuração de página.
- **DIMSTYLE** e **PEDIT** estão implementados; **PEDIT** não tem a opção Editar vértice (as pegas fazem isso).
- **TABLE** não está implementado; {{cmd:XREF}}, {{cmd:SPLINE}} e {{cmd:WBLOCK}} estão.
- Os comandos próprios de uma rotina (AutoLISP `C:NAME`) aparecem depois de carregá-la com {{cmd:APPLOAD}}; não estão listados aqui.

## Todos os comandos (402)

| Comando | Nomes curtos | O que faz |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbita a vista 3D com o botão esquerdo |
| `ACCESS` | `AX` | Liga ou desliga o desenho sem enxergar: resultados falados pelo leitor de tela, um cursor de teclado no desenho, sons de snap e comandos falados. |
| `ALIASEDIT` |  | Edita aliases de comandos em um único arquivo de texto (o formato conhecido L, *LINE) |
| `ALIGN` | `AL` | Move e gira objetos para que pontos de origem caiam sobre pontos de destino (um, dois ou três pares), e os escala se quiser |
| `ALIGNPANEL` | `ALP` | Abre o painel Alinhar e distribuir |
| `ALIGNTO` |  | Alinha as bordas esquerda, centro, direita, topo, meio ou base dos objetos selecionados, na seleção, no primeiro ou no último objeto escolhido, ou em um ponto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostra objetos anotativos em todas as escalas, ou só onde a escala da viewport (ou do desenho) está na lista deles |
| `ANNOSCALE` | `CANNOSCALE` | Define a escala de anotação do desenho: textos e cotas anotativos são redimensionados para sair impressos no mesmo tamanho |
| `APPLOAD` | `AP` | Carrega aplicativos: rotinas LISP (.lsp) e seus arquivos de diálogo (.dcl); a Suíte de Inicialização (AP) |
| `ARC` | `A` | Arco: 3 pontos, Início/Centro/Fim, Início/Centro/Ângulo, Início/Centro/Comprimento, Início/Fim/Ângulo, Início/Fim/Direção, Início/Fim/Raio, Centro/Início/Fim, Centro/Início/Ângulo, Centro/Início/Comprimento, Continuar |
| `AREA` | `AA` | Área e perímetro por pontos ou de um objeto; Adicionar e Subtrair mantêm um total acumulado (AA) |
| `ARRAY` | `AR` | Cópias em linhas e colunas, ou em volta de um centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Define se os comandos ARRAY criam matrizes que continuam editáveis (1) ou cópias simples (0) |
| `ARRAYCLOSE` |  | Encerra a edição dos objetos de origem de uma matriz |
| `ARRAYEDIT` |  | Altera uma matriz feita com a opção Associativa: quantidades, espaçamento, objetos de origem, um item |
| `ARRAYPATH` |  | Cópias de objetos ao longo de uma linha, arco, polilinha ou outra curva |
| `ARRAYPOLAR` |  | Cópias em volta de um ponto central |
| `ARRAYRECT` |  | Cópias em linhas e colunas |
| `ASBUILT` | `ASB` | ASBUILT lê os pontos como construídos que uma equipe mediu (CSV / TXT, como EXPORTPOINTS grava) e os compara com os pontos do desenho: dentro ou fora da tolerância, não medidos, extras. Marca-os na camada AS-BUILT e baixa um relatório CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Define um atributo (uma etiqueta que um bloco pede um valor) para colocar em um bloco (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edita os valores de atributos de uma referência de bloco na linha de comando, um após o outro (Enter mantém um valor) |
| `ATTSYNC` |  | Alinha as referências de um bloco com suas definições de atributos: novas são adicionadas com seus padrões, as removidas são descartadas, posições e textos são redefinidos; valores mantidos |
| `AUDIT` |  | Verifica o desenho aberto quanto a danos: números não finitos, objetos sem tamanho, camadas, blocos, estilos e tipos de linha ausentes, blocos que contêm a si mesmos, ids compartilhados, cotas e hachuras quebradas. Lista o que encontra por tipo e pergunta antes de corrigir; a correção é um único passo de desfazer. |
| `AUNITS` | `ANGUNITS` | Como os ângulos são mostrados e digitados: graus decimais, graus-minutos-segundos ou rumos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletar do desenho ligado ou desligado, ou lista o que os padrões do desenho sugerem agora. |
| `AUTOCONSTRAIN` |  | Adiciona restrições de coincidência, horizontais e verticais onde a geometria já está próxima |
| `AUTODIM` | `ADIM` | Cota por regras: dimensão total, cadeias ao longo dos lados, vãos, diâmetros de furos e espaçamento de grade, sem repetir o que já está cotado. |
| `AUTOSHEET` | `ASH` | Monta as folhas sozinho: escolhe papel e escalas padrão e posiciona cada vista com uma descrição e uma legenda. |
| `BATTMAN` |  | Gerenciador de atributos de bloco: ordem, etiquetas, avisos, padrões e modos dos atributos de um bloco, depois as referências atualizadas |
| `BCLOSE` |  | Fecha o editor de blocos: salva o bloco ou descarta as alterações |
| `BCONVERT` |  | BCONVERT encontra geometria que se repete e a transforma em referências de bloco. Selecione os objetos que se repetem: todo outro conjunto de objetos no espaço aberto que tenha a mesma geometria, movido e girado em qualquer ângulo, é encontrado, e com Espelhado ou Escalado ligados, também imagens espelhadas e cópias em outro tamanho. Dê ao novo bloco um nome e um ponto base; a seleção e cada cópia tornam-se referências a ele, cada uma com sua própria rotação e escala. Ou escolha Bloco e nomeie um bloco existente para encontrar cópias soltas de seus objetos. Uma cópia deve ter a mesma camada, cor, tipo e espessura de linha, a menos que Propriedades esteja em Ignorar. Objetos em camadas bloqueadas ficam intocados. Um passo de desfazer. |
| `BEDIT` | `BE` | Editor de blocos: edita os objetos e atributos de um bloco; BCLOSE salva (BE) |
| `BLEND` |  | BLEND: uma spline entre as extremidades de duas curvas abertas, escolhidas perto das extremidades para unir. CONtinuidade: Tangente segue as duas direções; Suave também segue como elas se curvam. |
| `BLOCK` | `B`, `BMAKE` | Cria um bloco a partir de objetos (eles se tornam uma única referência) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: toda referência a um bloco passa a referenciar outro, no mesmo lugar e com a mesma escala e rotação. Valores de atributos que os dois blocos têm são mantidos. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mostra o painel de Blocos com o cursor no filtro. O painel mostra uma imagem de cada bloco (os colocados mais recentemente primeiro), em lista ou grade; clique em uma imagem ou arraste-a para o desenho para colocar o bloco com INSERT. Em Bibliotecas, adicione um arquivo DWG ou DXF seu: seus blocos são listados com imagens e são copiados para este desenho quando você coloca um. No CadCraft Studio também pode ser adicionada uma pasta de desenhos, e arquivos e pastas são lembrados. |
| `BOMEDIT` | `BOMCOLUMNS` | Colunas, agrupamento, ordenação, título, totais e observações de uma tabela de lista de materiais |
| `BOMEXPORT` |  | Salva uma tabela de lista de materiais como arquivo .csv |
| `BOMTABLE` | `BOM` | Uma tabela de lista de materiais dinâmica de uma zona, ou de todo o desenho |
| `BOMUPDATE` |  | Atualiza agora todas as tabelas de lista de materiais, inclusive as congeladas |
| `BOMZONE` | `BZONE` | Uma área nomeada do desenho para uma lista de materiais: dois cantos, um polígono ou o contorno de um objeto fechado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): escolha um ponto dentro de uma área fechada e obtenha uma polilinha fechada ao redor dela. Arcos continuam arcos. Ilhas contorna também as áreas dentro dela. |
| `BOX` |  | Uma caixa: dois cantos e uma altura (3D) |
| `BPARAMETER` | `BPARAM` | Ainda não implementado: adicionar um parâmetro (como Visibilidade) a um bloco. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parâmetros de bloco: parâmetros nomeados com fórmulas, e vários parâmetros de visibilidade em um bloco. Funciona no editor de blocos (atribui os objetos selecionados a um estado) e em uma referência selecionada (seus próprios valores e estados). |
| `BREAK` | `BR` | Quebra uma linha, arco, círculo ou polilinha entre dois pontos (BR) |
| `BREAKATPOINT` |  | Divide uma linha, arco ou polilinha em dois em um ponto |
| `BREAKLINE` |  | Desenha uma linha com símbolo de quebra; o tamanho e o prolongamento além das extremidades são lembrados. |
| `BREPLACE` |  | BREPLACE troca um bloco por outro. Selecionados: escolha referências de bloco e nomeie o bloco a usar no lugar. Todos: nomeie um bloco e seu substituto, e toda referência em todos os espaços e dentro de outros blocos é trocada. Uma referência mantém seu lugar, escala, rotação e camada, e os valores de atributos que os dois blocos têm; valores para os quais o novo bloco não tem lugar são descartados e listados. |
| `BSEARCH` |  | BSEARCH encontra blocos. Nome: parte de um nome de bloco, ou um padrão com * e ?. Atributo: um valor (ou TAG=valor) contido nos atributos de uma referência. Geometria: selecione objetos ou uma referência de bloco, e os blocos cuja forma seja pelo menos 85% parecida são listados, o melhor primeiro; tamanho, rotação e espelhamento não contam. As referências encontradas no espaço aberto são selecionadas, prontas para o próximo comando. |
| `BURST` |  | Explode referências de bloco e mantém o que seus atributos dizem: cada valor vira texto na camada do atributo. |
| `BVHIDE` | `BVH` | No editor de blocos: oculta objetos no estado de visibilidade atual. |
| `BVSHOW` | `BVSH` | No editor de blocos: mostra objetos que o estado de visibilidade atual oculta (eles aparecem esmaecidos para escolher). |
| `BVSTATE` | `BVS` | No editor de blocos, em um bloco com estados de visibilidade: troca de estado, ou adiciona, renomeia ou exclui um. |
| `CAL` |  | Calcula um comprimento ou número: + − * / e parênteses, como você os digita em qualquer lugar |
| `CENTERLINE` | `CL` | Linha de centro entre duas linhas: a meio caminho entre elas, ou ao longo da bissetriz quando se encontram (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: uma cruz no centro de um círculo ou arco, com linhas de centro até um pouco além (CM) |
| `CHAMFER` | `CHA` | Chanfra o canto entre duas linhas (D duas distâncias, A comprimento e ângulo, P cada canto de uma polilinha) |
| `CHSPACE` |  | CHSPACE: move objetos entre uma folha e o modelo por uma viewport. Eles são escalados e girados para ficarem iguais vistos do outro lado. Em uma folha, vão para o modelo; enquanto você trabalha por uma viewport (MSPACE), vêm para a folha. |
| `CIRCLE` | `C` | Centro e raio, diâmetro, 2 ou 3 pontos |
| `CLASS` |  | Coloca os objetos selecionados em uma classe, ou, sem seleção, define a classe ativa (? lista as classes) |
| `CLASSES` | `CLS` | O painel Classes: classes agrupam objetos entre camadas; mostra, oculta e estiliza, e substitui por viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acopla ou flutua a linha de comando, deixa-a em uma linha, define suas linhas de histórico ou abre o histórico (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compara estilos de cota, estilos de texto, camadas, folhas ou unidades: dois neste desenho, ou este desenho contra outro aberto, e copia um valor de um para o outro. |
| `CONSTRAINTBAR` | `CBAR` | Mostra ou oculta as barras de restrição (Mostrar tudo / Ocultar tudo, ou por objeto) |
| `COPY` | `CO`, `CP` | Copia objetos, quantas vezes você clicar |
| `COPYBASE` |  | Copia objetos para a área de transferência com um ponto base que você escolhe |
| `COPYCLIP` |  | Copia objetos para a área de transferência (Ctrl+C); PASTECLIP os coloca |
| `COUNT` | `BCOUNT` | Conta referências de bloco: escolha uma para selecionar e contar todas as referências do bloco |
| `COUNTTABLE` |  | Coloca uma tabela com a contagem de blocos |
| `CREDITS` |  | Coloca os créditos da Biblioteca no desenho como tabela. Execute de novo para atualizar a tabela com os itens do desenho agora. |
| `CURSORSIZE` |  | O tamanho da mira: 100 a faz ir de borda a borda do desenho (Configurações › Cursor › Tela cheia) |
| `CUTCLIP` |  | Recorta objetos para a área de transferência (Ctrl+X): copia e depois apaga |
| `CYLINDER` | `CYL` | Um cilindro: centro, raio e altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Lista blocos, seus atributos e propriedades de objetos como tabela no desenho ou arquivo CSV |
| `DATALINK` | `DL` | Uma tabela de um arquivo CSV que lembra o arquivo, para que possa ser lida de novo |
| `DATALINKUPDATE` | `DLU` | Lê de novo o arquivo vinculado a dados e preenche de novo suas tabelas |
| `DCALIGNED` | `DCALI` | Restrição dimensional: distância verdadeira entre pontos, um ponto e uma linha, ou duas linhas |
| `DCANGULAR` | `DCANG` | Restrição dimensional: ângulo entre duas linhas, ou de um arco |
| `DCCONVERT` |  | Transforma cotas desenhadas sobre geometria restringível em restrições dimensionais |
| `DCDIAMETER` | `DCDIA` | Restrição dimensional: diâmetro de um círculo ou arco |
| `DCDISPLAY` |  | Mostra ou oculta restrições dimensionais no desenho |
| `DCHORIZONTAL` | `DCHOR` | Restrição dimensional: distância horizontal |
| `DCLINEAR` | `DCLIN` | Restrição dimensional: distância horizontal ou vertical, a partir de onde você a posiciona |
| `DCRADIUS` | `DCRAD` | Restrição dimensional: raio de um círculo ou arco |
| `DCVERTICAL` | `DCVER` | Restrição dimensional: distância vertical |
| `DELBLOCKS` |  | Excluir blocos: toda referência (inclusive as aninhadas, em todas as folhas) e as definições |
| `DELCONSTRAINT` | `DELCON` | Remove todas as restrições (geométricas e dimensionais) dos objetos que você seleciona |
| `DELOPENING` |  | Tira uma porta ou janela de uma parede. |
| `DESCRIBE` | `DESC` | Diz o que o desenho contém: quantos objetos, de que tipo, de que tamanho, o que está selecionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Limpa a seleção (Esc) |
| `DETAILS` | `DET` | Os detalhes próprios do seu escritório, encontrados para o que você está desenhando: buscar, adicionar um bloco, listar, remover, ligar ou desligar as sugestões. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Desenha um diagrama a partir de texto: um fluxograma Mermaid, um diagrama de componentes PlantUML, D2, uma lista de origem e destino ou XML do draw.io, como blocos e conectores que você pode editar |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distância verdadeira entre dois pontos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ângulo entre duas linhas, de um arco, ou por três pontos |
| `DIMARC` | `DAR` | Cota de comprimento de arco: a distância ao longo de um arco, com o símbolo de arco (DAR) |
| `DIMASZ` |  | Configuração de cota: Tamanho da seta |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas empilhadas a partir de uma linha de base |
| `DIMBREAK` | `DBREAK` | Quebra as linhas de cota e de extensão onde cruzam outros objetos (Auto), entre dois pontos (Manual), ou remove as quebras |
| `DIMCONSTRAINT` | `DCON` | Restrições dimensionais: linear, alinhada, angular, raio, diâmetro, converter |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Uma cadeia de cotas, cada uma a partir do fim da anterior |
| `DIMDEC` |  | Configuração de cota: casas decimais |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diâmetro de um arco ou círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Libera as cotas dos objetos a que estão presas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Altera o texto da cota (Início, Novo texto, Girar) ou inclina as linhas de extensão (Oblíqua) |
| `DIMEXE` |  | Configuração de cota: extensão além da linha de cota |
| `DIMEXO` |  | Configuração de cota: deslocamento da origem |
| `DIMGAP` |  | Configuração de cota: espaço ao redor do texto |
| `DIMINSPECT` |  | Cota de inspeção: um quadro ao redor do valor, com um rótulo e a frequência com que a peça é verificada |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de raio com quebra: um raio desenhado a partir de um ponto mais próximo quando o centro está longe (DJO) |
| `DIMJOGLINE` | `DJL` | Adiciona um símbolo de quebra a uma linha de cota linear ou alinhada, para mostrar que a distância não está em escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distância horizontal ou vertical (R para qualquer ângulo) |
| `DIMLUNIT` |  | Configuração de cota: formato de comprimento (1 científico, 2 decimal, 3 engenharia, 4 arquitetônico, 5 fracionário) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: a distância X ou Y de um ponto em relação à origem do SCU, em uma chamada (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Substitui variáveis de cota nas cotas selecionadas sem alterar o estilo; Limpar devolve o estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raio de um arco ou círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Prende os pontos de uma cota a objetos, para que ela acompanhe e meça de novo quando eles se moverem (DRE) |
| `DIMSCALE` |  | Configuração de cota: Escala geral (tamanhos × este) |
| `DIMSPACE` |  | Espaçamento igual entre cotas paralelas, medido a partir de uma cota de base (0 as alinha, Auto é o dobro da altura do texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Cria, altera, define como atual, exclui, aplica e compara estilos de cota nomeados (a caixa de diálogo; -DIMSTYLE na linha de comando) |
| `DIMTEDIT` | `DIMTED` | Move o texto da cota para a esquerda, a direita ou o centro da linha de cota, ou o gira |
| `DIMTEXTUNIT` | `DTU` | Texto da cota em mm, cm, m ou km, ou nas unidades do próprio desenho: as cotas selecionadas, senão as novas (DTU) |
| `DIMTXT` |  | Configuração de cota: Altura do texto |
| `DIST` | `DI` | Distância e ângulo entre dois pontos |
| `DISTRIBUTE` |  | Espaça os objetos selecionados igualmente, lado a lado ou para cima e para baixo: passos iguais entre centros, ou vãos iguais; os dois externos permanecem |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que cortam uma linha, arco, círculo, polilinha, spline ou elipse em partes iguais. Pontos, ou com Bloco um bloco em cada marca. |
| `DOCUMENTS` | `DOCS` | Abre o painel Documentos: faz check-out e check-in de desenhos, revisões, estados de liberação e aprovação de uma pasta de projeto |
| `DOOR` | `DR` | Coloca uma porta em uma parede. O lado em que você clica é o lado para onde ela abre. |
| `DRAWORDER` |  | Altera a ordem de desenho: traz objetos para a frente, envia-os para trás, ou os põe acima ou abaixo de outros objetos. |
| `DUPLICATE` | `DUP` | Uma cópia que se move com o ponteiro: clique para soltá-la (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Propriedades do desenho: título, autor e o restante, e seus próprios pares de nome e valor |
| `DXFOUT` |  | Baixa o desenho como DXF R12 (Salvar mantém seu próprio formato) |
| `EATTEDIT` | `DDATTE` | Edita os atributos de uma referência de bloco: valores, texto e propriedades, um atributo por vez |
| `ELLIPSE` | `EL` | Extremidades do eixo e a outra semieixo |
| `ERASE` | `E`, `DELETE` | Remove objetos |
| `EXPLODE` | `X` | Quebra polilinhas, blocos e cotas em suas partes |
| `EXPORT` | `EXP` | Salva uma cópia do desenho em um tipo de arquivo que um complemento grava |
| `EXPORT3D` | `3DEXPORT` | Exporta o modelo 3D: GLB, OBJ ou STL |
| `EXPORTPOINTS` | `EXPPTS` | Grava pontos, e os pontos de inserção de blocos com um atributo como descrição, em um arquivo CSV ou TXT (PNEZD, PENZD ou XYZ) para programas de BIM e topografia |
| `EXTEND` | `EX` | Alonga objetos até encontrarem outros: clique perto de uma extremidade, arraste por vários, ou Shift+clique para aparar |
| `EXTRIM` |  | EXTRIM: escolha uma aresta de corte e depois um lado. Tudo o que cruza a aresta é aparado naquele lado. As partes que sairiam aparecem enquanto você move o ponteiro. |
| `EXTRUDE` | `EXT` | Extrude objetos 2D fechados em sólidos (3D) |
| `FIELD` |  | Coloca um campo em um texto, em uma célula de tabela ou em um atributo: uma data, o nome do arquivo, o número da folha, uma propriedade do desenho, a área ou o comprimento de um objeto, ou uma fórmula |
| `FILLET` | `F` | Arredonda ou alisa o canto entre dois objetos (R raio, P cada canto de uma polilinha, M vários) |
| `FIND` |  | Localiza e substitui palavras em textos, valores de atributos e textos de cota |
| `FLATTEN` |  | Define a altura (Z) e a espessura dos objetos selecionados como 0, também nos blocos que eles usam. |
| `FLOOR` |  | Escolhe o pavimento onde desenhar, adiciona um, ou move ou copia a seleção para ele. |
| `FLOORLAYERS` |  | Transforma pavimentos em camadas chamadas Pavimento-Camada, para um arquivo que vai para alguém sem pavimentos. |
| `FLOORS` | `FLR` | Abre o painel Pavimentos: empilha pavimentos em um único espaço do modelo. |
| `GCCOINCIDENT` |  | Restrição: dois pontos se encontram, ou um ponto permanece sobre um objeto |
| `GCCOLLINEAR` |  | Restrição: duas linhas permanecem sobre uma mesma reta |
| `GCCONCENTRIC` |  | Restrição: dois círculos ou arcos compartilham um centro |
| `GCEQUAL` |  | Restrição: duas linhas permanecem do mesmo comprimento, ou dois círculos/arcos do mesmo raio |
| `GCFIX` |  | Restrição: um ponto ou um objeto inteiro permanece onde está |
| `GCHORIZONTAL` |  | Restrição: uma linha (ou dois pontos) permanece horizontal |
| `GCPARALLEL` |  | Restrição: duas linhas permanecem paralelas |
| `GCPERPENDICULAR` |  | Restrição: duas linhas permanecem em ângulo reto |
| `GCSYMMETRIC` |  | Restrição: dois pontos, linhas ou círculos se espelham em relação a uma linha |
| `GCTANGENT` |  | Restrição: uma linha e um círculo ou arco (ou dois deles) permanecem tangentes |
| `GCVERTICAL` |  | Restrição: uma linha (ou dois pontos) permanece vertical |
| `GDSIN` | `GDS` | Vê um layout de CI (um arquivo de fluxo GDSII): cada camada e tipo de dado como camada de desenho, plano, em unidades do usuário; apenas para visualizar e medir (protótipo de laboratório) |
| `GEOMCONSTRAINT` | `GCON` | Restrições geométricas: horizontal, vertical, paralela, tangente, coincidente… |
| `GLBOUT` |  | Exporta o modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Preenche uma área com um gradiente de uma ou duas cores |
| `GRID` |  | Define a grade: a distância entre as linhas, toda enésima linha como linha principal, ligada ou desligada, ou Auto para seguir o zoom de novo |
| `GRIDMOVE` | `GM` | Move uma linha de grade e o que está pendurado nela: paredes se esticam, colunas, bolhas e etiquetas se movem, cotas acompanham. |
| `GROUP` | `G` | GROUP (G): dá aos objetos selecionados um nome compartilhado. Um clique em um deles então seleciona todos. Enter no nome cria um grupo sem nome. |
| `GROUPEDIT` |  | GROUPEDIT: altera um grupo. Escolha um dos seus objetos ou informe seu Nome, depois Adicionar ou Remover objetos, Renomear, alterar sua Descrição, ou dizer se um clique o seleciona inteiro. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Preenche uma área com um preenchimento sólido ou um padrão: clique dentro dela, ou selecione objetos fechados (H) |
| `HATCHEDIT` | `HE` | Altera uma hachura: padrão, escala, ângulo, origem e sua ligação a um contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Refaz os contornos de polilinha a partir de uma hachura, vinculada a ela ou não |
| `HATCHTOBACK` |  | Envia toda hachura para trás de tudo o mais. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Oculta os objetos selecionados até UNISOLATEOBJECTS. Não é salvo com o desenho. |
| `HISTORY` | `HIST` | HISTORY (HIST): as versões deste desenho — cópias mantidas neste computador quando o Studio salva, e as versões da nuvem — para abrir, restaurar e comparar com o que mudou, mostrado em cor. |
| `ID` |  | Coordenadas de um ponto |
| `IMAGE` | `IM` | Informa ao CadCraft os arquivos de imagem que um desenho usa (um DWG guarda apenas onde estavam). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Coloca uma imagem (PNG ou JPEG) a partir de um arquivo. |
| `IMAGECLIP` | `ICL` | Recorta uma imagem em um retângulo ou polígono, ou remove seu recorte. |
| `IMPORT` | `IMP` | Importa para este desenho um arquivo de um tipo que um complemento lê |
| `INSERT` | `I`, `DDINSERT` | Coloca um bloco (S escala, R girar); F a partir de um arquivo DWG/DXF, L da biblioteca |
| `INTERSECT` | `IN` | Mantém apenas o que os sólidos têm em comum (3D), ou a área que as regiões 2D compartilham |
| `ISODRAFT` |  | ISODRAFT: desenho isométrico ligado ou desligado, ou diretamente sobre os planos Esquerdo, Superior ou Direito. Enquanto estiver ligado, Orto e rastreamento polar seguem os dois eixos do plano, a grade é desenhada em isométrico, e ELLIPSE tem Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostra apenas os objetos selecionados; todo o resto neste espaço fica oculto até UNISOLATEOBJECTS. Não é salvo com o desenho. |
| `ISOPLANE` |  | ISOPLANE: escolhe o plano isométrico para desenhar: Esquerdo, Superior ou Direito. Enter passa para o seguinte, como F5 faz enquanto o desenho isométrico está ligado. |
| `JOIN` | `J` | Une linhas, arcos e polilinhas que se encontram ponta a ponta em uma só polilinha; linhas na mesma reta em uma só linha (J) |
| `LASER` | `LASERCUT` | Abre o painel Laser: envia camadas para uma cortadora ou gravadora a laser (código G GRBL) |
| `LASSOMODE` |  | Pressionar e arrastar desenha um laço (1) ou um retângulo (0) |
| `LAYDEL` |  | Exclui uma camada e cada objeto nela (no modelo, nas folhas e nos blocos) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abre o gerenciador de camadas: todas as camadas em uma só tabela |
| `LAYERPANEL` |  | Mostra o painel de camadas |
| `LAYFRZ` |  | Congela a camada de cada objeto que você escolher |
| `LAYGROUP` | `LG` | Agrupa camadas em pastas no painel Camadas. |
| `LAYISO` |  | Isola as camadas dos objetos selecionados (todas as outras desligadas) |
| `LAYLOCKFADE` |  | Define o quanto os objetos em camadas bloqueadas esmaecem, e se um clique pode selecioná-los. |
| `LAYMCUR` |  | Torna atual a camada do objeto que você escolher |
| `LAYMRG` |  | Mescla camadas: seus objetos vão para uma camada de destino, e as camadas mescladas somem |
| `LAYOFF` |  | Desliga a camada de cada objeto que você escolher |
| `LAYON` |  | Liga todas as camadas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Uma nova folha com legenda e uma viewport |
| `LAYTHW` |  | Descongela todas as camadas |
| `LAYUNISO` |  | Liga de novo as camadas que LAYISO desligou |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converte texto digitado com fontes vietnamitas antigas (fontes TCVN3 / ABC como .VnTime, e fontes VNI como VNI-Times) para Unicode. Esse texto já é mostrado como se lê; isto o reescreve de vez, com uma contagem e um passo de desfazer. |
| `LENGTHEN` | `LEN` | Alonga ou encurta linhas, arcos e polilinhas: em um valor, uma porcentagem, até um total, ou arrastando (LEN) |
| `LIBRARY` | `LIB` | O painel da biblioteca: coloca itens, verifica atualizações, créditos |
| `LIMITS` |  | Define os limites do desenho: LIGADO, DESLIGADO, ou os cantos inferior esquerdo e superior direito. Com os limites ligados, pontos fora deles são recusados |
| `LINE` | `L` | Segmentos retos, cada um um objeto próprio |
| `LINETYPE` | `LT`, `CELTYPE` | O tipo de linha que os novos objetos recebem (por camada, por bloco, ou um nomeado) |
| `LINKVIEWS` | `SYNCVIEWS` | Move e amplia todos os painéis juntos (tela dividida), para comparar dois desenhos ou revisões |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ou VLIDE) abre o editor LISP: uma janela para escrever, carregar e testar uma rotina. Carregar no desenho lê cada forma, como carregar o arquivo com APPLOAD, e cria seus comandos. Executar seleção avalia as formas selecionadas, ou a forma em que está o cursor. O console mostra o que a rotina imprimiu e cada erro com sua linha. O parêntese correspondente é marcado enquanto você digita, e Enter recua a nova linha. Novo, Abrir e Salvar funcionam em um arquivo .lsp. As listas ao lado do texto mostram as funções que a rotina define, as que ela chama e que este LISP ainda não tem, e todas as que ele tem. A janela não bloqueia o desenho, então uma rotina pode pedir pontos; Parar ou Esc encerra uma rotina em execução. |
| `LIST` | `LI`, `LS` | Descreve objetos no histórico |
| `LTSCALE` | `LTS` | A escala de tipo de linha do desenho (cada traço e cada espaço é multiplicado por ela) |
| `LWDISPLAY` | `LWT` | Mostra ou oculta espessuras de linha na tela (o botão LWT na barra de status) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | A espessura de linha que os novos objetos recebem (por camada, por bloco, padrão, ou mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Camadas de mapa sob o espaço do modelo: o sistema de coordenadas do desenho, blocos de mosaico, WMS, WMTS, ArcGIS, imagens |
| `MASSPROP` |  | MASSPROP: propriedades de seção de regiões e objetos fechados: área, perímetro, centroide, momentos e produto de inércia, raios de giração e eixos principais. Exato para linhas e arcos. Pode gravar o relatório em um arquivo de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propriedades: copia a camada, a cor e mais de um objeto para outros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): uma marca a cada comprimento dado ao longo de uma linha, arco, círculo, polilinha, spline ou elipse, a partir da extremidade mais próxima do seu clique. Pontos, ou com Bloco um bloco em cada marca. |
| `MEASUREGEOM` | `MEA` | Mede uma distância, um raio, um ângulo ou uma área (MEA) |
| `MINSERT` |  | MINSERT: coloca um bloco em linhas e colunas de uma vez. Cada um é uma referência própria, então você pode mover ou apagar qualquer um deles. |
| `MIRROR` | `MI` | Espelha objetos em relação a uma linha |
| `MLEADER` | `MLD`, `MLEAD` | Multichamada: uma seta, uma chamada e uma nota, como um único objeto (MLD) |
| `MLEADERALIGN` | `MLA` | Alinha multichamadas com uma delas em uma direção, com espaçamento igual, ou distribuídas entre dois pontos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reúne várias multichamadas em uma: seus blocos em linha ou em coluna, ou suas notas uma sob a outra (MLC) |
| `MLEADEREDIT` | `MLE` | Adiciona linhas de chamada a uma multichamada ou as remove; alterna o conteúdo entre texto e bloco (MLE) |
| `MLINE` |  | Desenha linhas paralelas juntas, unidas nos cantos. |
| `MOVE` | `M` | Move objetos por um ponto base e um segundo ponto |
| `MSPACE` | `MS` | Trabalha no modelo por uma viewport da folha aberta (ou dê clique duplo dentro da viewport). |
| `MTEXT` | `MT`, `T` | Texto de parágrafo: arraste sua largura, depois digite no lugar; Enter inicia um novo parágrafo (T) |
| `MVIEW` | `MV` | Uma viewport sobre o modelo, em um layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas nomeadas: salva a vista na tela (ou uma janela) com um nome e volta a ela (NV) |
| `NCOPY` |  | Copia objetos de uma referência de bloco ou de um desenho vinculado para o desenho, sem explodi-la. |
| `NEARBY` |  | Diz o que está perto do cursor, o mais próximo primeiro, com a distância e o lado. |
| `NEW` |  | Inicia um novo desenho |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotação de textos e cotas anotativos: adiciona uma escala, exclui uma, adiciona a escala atual ou as lista (cada viewport os mostra no tamanho de sua própria escala) |
| `OBJOUT` |  | Exporta o modelo 3D como OBJ |
| `OFFICESTANDARD` | `OFFSTD` | O padrão do escritório: alturas de texto no papel, camadas, campos do carimbo e modelos em um só registro. Mostra o que está em vigor e de onde vem; Importa um registro .json para este desenho, adiciona as camadas do escritório que o desenho não tem, lista os campos da legenda. |
| `OFFSET` | `O` | Cópias paralelas a uma distância |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: como DESLOCAR fecha os vãos nos cantos externos de uma polilinha. 0 estende os segmentos, 1 adiciona um arco, 2 adiciona um corte reto. Mantido para esta sessão. |
| `OLELIST` | `OLES` | Lista os objetos OLE que um desenho contém e coloca uma cópia da imagem de um deles onde você escolher |
| `OPEN` |  | Abre um DWG ou DXF deste computador |
| `OPENIN3D` |  | Abre este desenho no aplicativo de modelagem 3D, em uma nova aba (nada é enviado) |
| `OPTIONKEYS` | `OPTKEYS` | Dá às opções de comando suas próprias letras (ARRAY.PO, P), em um arquivo de texto |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abre o menu de snap de objeto: escolha quais snaps estão ligados. Também um clique com o botão direito em Snap na barra de status. |
| `OVERKILL` |  | Exclui objetos duplicados e mescla linhas e arcos sobrepostos ou ponta a ponta, dentro de uma tolerância. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | O painel de Parâmetros: parâmetros do usuário e restrições dimensionais em uma só tabela |
| `PARTSLIST` | `PLIST` | Uma tabela de lista de peças com cada peça padrão e perfil de aço colocado da Biblioteca |
| `PASTEAREA` | `PAREA` | Cola uma área copiada no MarkupCraft (Copiar área) em seu tamanho real, como imagem. |
| `PASTEBLOCK` |  | PASTEBLOCK: cola o que você copiou como um bloco. O bloco recebe um nome próprio; RENAME dá o seu. |
| `PASTECLIP` |  | Cola a área de transferência: ela segue o cursor; clique onde ela deve ir (Ctrl+V) |
| `PASTEORIG` |  | Cola a área de transferência nas coordenadas de onde foi copiada (Ctrl+Shift+V) |
| `PDF` |  | Informa ao CadCraft os arquivos PDF usados pelas sublinhas do desenho |
| `PDFADJUST` |  | Esmaece, altera o contraste, deixa monocromático ou desliga uma sublinha PDF |
| `PDFATTACH` | `PDFATT` | Anexa uma página PDF como sublinha (PDFATTACH) |
| `PDFCLIP` |  | Recorta uma sublinha PDF em um retângulo ou polígono |
| `PDFIMPORT` | `PDFIM` | Transforma linhas, preenchimentos e textos de uma página PDF em objetos do desenho (PDFIMPORT) |
| `PDFLAYERS` |  | Liga ou desliga as camadas de uma sublinha PDF |
| `PEDIT` | `PE` | Edita uma polilinha: fecha, abre, une, largura, ajustar curva, curva spline, desfazer curva, geração de tipo de linha, inverter; linhas, arcos e splines podem virar polilinhas |
| `PENPRESSURE` |  | Se a pressão de um traço de caneta define a espessura de linha do que SKETCHFIX e SKETCHLIVE criam (ligado por padrão). Salvo neste navegador. |
| `PHOTOSKETCH` | `PSK` | Transforma uma foto de um esboço à mão em papel em linhas e arcos em escala, endireitando a perspectiva e dando a cada cor de caneta sua própria camada. |
| `PICKSTYLE` |  | PICKSTYLE: se selecionar um objeto de um grupo seleciona o grupo inteiro (1, a configuração inicial) ou só esse objeto (0). Mantido para esta sessão. |
| `PLAN` |  | Gira a vista para que o eixo X do SCU (SCU atual, um SCU salvo, ou o Mundo) fique nivelado na tela. Nada no desenho se move. |
| `PLINE` | `PL` | Uma polilinha de segmentos de linha e de arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plotar em PDF: um layout, ou o modelo em uma escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabelas de estilos de plotagem: define como cada cor imprime (cor, preto, cinza, tinta, espessura de linha); mantido com o desenho (STYLESMANAGER) |
| `POINT` | `PO` | Objetos de ponto |
| `POINTCLOUD` | `PC` | A nuvem de pontos anexada: fatia, altura, espessura, cor, tamanho, visível, zoom, desanexar |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Anexa uma nuvem de pontos (LAS, LAZ, XYZ, PTS) abaixo do desenho |
| `POLARANG` |  | O passo do rastreamento polar em graus (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Um polígono regular |
| `PRESSPULL` |  | Empurra ou puxa uma face de um sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abre o painel Propriedades (também Ctrl+1, ou clique duplo em um objeto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Recolhe o painel Propriedades para a borda da janela |
| `PSPACE` | `PS` | Sai da viewport em que você trabalha e volta à folha (ou dê clique duplo fora dela). |
| `PUBLISH` | `-PUBLISH` | Plota várias ou todas as folhas em um PDF (uma página e um marcador por folha) |
| `PURGE` | `PU` | Remove definições de blocos que ninguém usa |
| `QDIM` |  | Cota rápida: cota vários objetos de uma vez (contínua, linha de base, escalonada, ordenada, raio ou diâmetro) |
| `QPMODE` | `QP` | Propriedades rápidas pelo cursor ligadas ou desligadas |
| `QSELECT` | `QS` | Seleção rápida: todo objeto de um tipo cuja camada, cor, tamanho ou nome corresponda (QS) |
| `RASTERSNAP` |  | Liga ou desliga o snap às linhas de folhas digitalizadas. |
| `RAY` |  | Semirreta: uma linha de construção a partir de um ponto, sem fim em um sentido. |
| `RECOVER` |  | Abre um DXF ou DWG danificado: pula o que não pode ser lido em vez de recusar o arquivo, informa o que foi pulado, depois verifica e repara o desenho como AUDIT faz. |
| `RECTANG` | `REC`, `RECTANGLE` | Uma polilinha fechada a partir de dois cantos |
| `REDLINE` | `RDL` | Redline para revisão: lê um pacote de redline do MarkupCraft, aceita ou rejeita cada mudança, cria nuvem nas aceitas com um registro de revisão, e salva o arquivo de respostas (RDL) |
| `REDO` |  | Refaz o que foi desfeito |
| `REFCLOSE` |  | Termina a edição de um bloco no lugar: salva ou descarta as alterações |
| `REFEDIT` |  | Edita um bloco no lugar, onde está uma referência dele, com o resto do desenho esmaecido; REFCLOSE salva |
| `REGEN` | `RE` | Reconstrói o que está desenhado nesta aba a partir do desenho |
| `REGENALL` | `REA` | Reconstrói o que está desenhado em cada aba, painel e desenho aberto |
| `REGION` | `REG` | REGION (REG): cria regiões planas a partir de objetos fechados, ou de linhas, arcos e polilinhas que fecham um laço ponta a ponta. UNION, SUBTRACT e INTERSECT então combinam regiões, e MASSPROP dá suas propriedades de seção. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registra várias digitalizações: as coloca em um quadro por pares de pontos escolhidos ou alvos, refina com ICP, exporta um LAS ou E57 |
| `REINIT` |  | Recarrega seu arquivo de aliases |
| `RENAME` | `-RENAME`, `REN` | Renomeia uma camada ou um bloco (todo objeto ou referência acompanha) |
| `REVCLOUD` | `RC` | Nuvem de revisão: arredonda um retângulo, um polígono, um caminho livre ou um objeto (RC) |
| `REVOLVE` | `REV` | Gira objetos 2D fechados em torno de um eixo, transformando-os em sólidos (3D) |
| `ROTATE` | `RO` | Gira objetos em torno de um ponto base |
| `SAMPLES` | `SAMPLE` | Abre um dos desenhos de exemplo do CadCraft (um conjunto arquitetônico, um como construído) para aprender |
| `SAVE` | `QSAVE` | Baixa o desenho no seu formato (DWG ou DXF) |
| `SAVEAS` |  | Baixa o desenho como DWG ou DXF: escolha qual |
| `SAYSEL` |  | Diz o que está selecionado, uma frase por objeto. |
| `SCALE` | `SC` | Escala objetos em torno de um ponto base |
| `SCALELISTEDIT` | `SCALELIST` | Adiciona, edita e exclui as escalas próprias do desenho; elas aparecem nas listas de escalas de viewport e de plotagem e são salvas no arquivo (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinha uma folha digitalizada a dois pontos: move, gira e, se quiser, escala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insere um desenho digitalizado: um PNG, JPEG ou TIFF (uma página ou todas as páginas de um arquivo de várias páginas) ou uma página PDF que seja uma imagem. |
| `SCANCLEAN` | `SCC` | Deixa uma folha digitalizada em preto e branco e remove manchas. |
| `SCANCROP` | `SCR` | Recorta uma folha digitalizada em uma janela. |
| `SCANDESKEW` | `SCD` | Encontra o ângulo em que estão as linhas longas de uma folha digitalizada e a endireita quando você aceita o ângulo. |
| `SCANERASE` | `SCE` | Apaga uma área de uma folha digitalizada: um retângulo, um polígono ou um laço. |
| `SCANINFO` | `SCI` | Mostra o arquivo original de uma folha digitalizada e as etapas feitas desde então. |
| `SCANSCALE` | `SCS` | Escala uma folha digitalizada: escolha dois pontos nela e digite a distância real entre eles. |
| `SCANTRACE` | `SCT` | Traça uma folha digitalizada em linhas e arcos em uma nova camada, com a tolerância que você definir. Texto e hachuras permanecem como imagem. |
| `SELECT` |  | Seleciona objetos agora (para P, Anterior, no próximo comando) |
| `SELECTALL` | `AI_SELALL` | Seleciona todos os objetos editáveis nesta aba (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seleciona todos os objetos iguais aos que você escolher: mesmo tipo, camada e cor (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Mostra o painel do Conjunto de Folhas: folhas de vários desenhos, numeradas, publicadas como um PDF. |
| `SHORTCUTS` | `KEYS` | Dá a qualquer comando uma tecla própria (Ctrl ou Alt com uma letra, ou uma tecla de função livre), mantida neste navegador ou aplicativo de desktop. |
| `SHXFONTS` | `SHX` | Dá ao CadCraft fontes SHX de uma pasta ou de arquivos, para que estilos de texto que as citem desenhem nelas (listar, remover, inverter) |
| `SKETCHFIX` | `SKF` | Desenha traços à mão livre; cada um vira uma linha, círculo, arco, retângulo ou polilinha limpos, alinhados e unidos aos outros. |
| `SKETCHLIVE` | `SKL` | Esboça com caneta: cada traço vira uma linha, círculo, arco ou retângulo precisos ao levantar a caneta, encaixados no desenho, com o tamanho para digitar por cima. |
| `SPLINE` | `SPL` | Desenha uma spline por pontos (ou com um polígono de controle), ou transforma uma polilinha em uma |
| `SPLINEDIT` | `SPE` | Edita uma spline: pontos de ajuste, pontos de controle e pesos, abre ou fecha, inverte, ou converte para polilinha |
| `SPLIT` |  | Divide a área de desenho em painéis (como VPORTS no modelo; também a partir de uma folha) |
| `STEELMEMBER` | `SMEMBER` | Uma barra de aço em 3D a partir de um perfil padrão: dois pontos (uma viga) ou um ponto base e uma altura (Pilar) |
| `STLOUT` |  | Exporta o modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Esticar: arraste uma janela de cruzamento sobre as extremidades para mover; o que está dentro se move, o resto fica (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: a fonte, altura, largura e inclinação que o novo texto recebe (a caixa de diálogo; -STYLE na linha de comando) |
| `SUBTRACT` | `SU` | Tira sólidos de outros (3D), ou regiões 2D de regiões |
| `SWBOUT` | `SWMACRO` | Baixa uma macro para o SolidWorks (.swb) que reconstrói o modelo como um único esboço restringido |
| `SWEEP` |  | Varre objetos 2D fechados ao longo de um caminho (linha, polilinha, arco, círculo) transformando-os em sólidos (3D) |
| `TABLE` | `TB` | Cria uma tabela: linhas e colunas, ou a partir de células de planilha da área de transferência ou de um arquivo CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edita uma tabela: digita numa célula, insere e exclui linhas e colunas, tamanhos, células mescladas, alinhamento |
| `TABLEEXPORT` |  | Salva o que uma tabela mostra como arquivo CSV |
| `TABLEPASTE` | `PASTETABLE` | Cria uma tabela a partir de células de planilha da área de transferência |
| `TABLESTYLE` | `TS` | Estilos de tabela: alturas de texto, alinhamento, margem e bordas para as linhas de título, cabeçalho e dados |
| `TAGS` |  | Etiquetas em referências de bloco: define uma etiqueta (tipo, valores permitidos, blocos a que se aplica), a define nas referências selecionadas e as lista como uma tabela que você pode salvar como CSV |
| `TEXT` | `DT`, `DTEXT` | Texto de uma linha; Enter inicia a linha seguinte |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edita o texto no lugar: escolha um texto (ou dê clique duplo nele) (ED) |
| `TEXTMASK` | `TMASK` | Coloca uma máscara de fundo atrás dos textos (o fundo do desenho ou uma cor), ou a remove. |
| `TEXTTOFRONT` |  | Traz todo texto, cotas e chamadas para a frente de tudo o mais. |
| `TOOLBAR` |  | Escolhe o que os botões da barra mostram: ícones e texto, só ícones, ou só texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Coloca a barra de ferramentas no topo, embaixo, à esquerda ou à direita da janela |
| `TOOLBARROWS` |  | Escolhe quantas linhas a barra de ferramentas usa: quebrar para caber, 2 ou 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Deixa as barras acima do desenho padrão ou compactas |
| `TOUCHCROSSHAIR` | `TCX` | Mira deslocada para desenhar com o dedo: um dedo move uma mira que fica acima e ao lado dele, para que o dedo não cubra o ponto escolhido. Levantar o dedo não escolhe nada; o botão Clique ou um toque com um segundo dedo escolhe na mira, e manter Clique pressionado enquanto se move arrasta. Pressionar longamente ou o botão Enter é Enter. Dois dedos movem e ampliam. Opções: LIGADA, DESLIGADA, Auto (ligada só onde um dedo é o único ponteiro), Distância, Lado. |
| `TOUR` | `TUTORIAL` | Inicia de novo o tour de seis passos do primeiro desenho |
| `TRIM` | `TR` | Corta objetos até onde outros os cruzam: clique em um pedaço, arraste por vários, ou Shift+clique para estender |
| `TRIMEXTENDMODE` |  | Como APARAR e ESTENDER começam: 1 Rápido (todo objeto é uma aresta de corte ou limite), 0 Padrão (escolha as arestas antes) |
| `TTR` |  | Um círculo tangente a dois objetos, com um raio que você informa (o mesmo que CIRCLE T). |
| `TURNLEFT` |  | Gira a vista 90° para a esquerda (anti-horário): Z do SCU -90, e a vista acompanha. Nada no desenho se move. |
| `TURNRIGHT` |  | Gira a vista 90° para a direita (horário): Z do SCU 90, e a vista acompanha. Nada no desenho se move. |
| `TURNWORLD` |  | De volta ao mundo: SCU Mundo, e a vista fica nivelada de novo. |
| `TXT2MTXT` | `T2M` | Une textos de uma linha em um só texto de parágrafo, de cima para baixo. |
| `UCS` |  | Seu próprio sistema de coordenadas: uma origem e um eixo X (origem, ângulo Z, 3 pontos, OBjeto, Anterior, Mundo, NOmeado). Pontos digitados, orto, rastreamento polar, a grade e o novo texto o seguem; a vista gira para que seu eixo X fique nivelado. Nada no desenho se move. |
| `UNDO` | `U` | Desfaz o último comando |
| `UNGROUP` |  | UNGROUP: desfaz grupos. Selecione objetos dos grupos, ou informe um Nome. Os objetos continuam no desenho. |
| `UNION` | `UNI` | Une sólidos em um só (3D), ou regiões 2D em uma região |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostra de novo todo objeto oculto por ISOLATEOBJECTS ou HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Como os comprimentos são mostrados e digitados: decimal, pés e polegadas, frações (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Recalcula os campos, e escolhe quando eles se atualizam sozinhos |
| `USDOUT` |  | Exporta o modelo 3D como USD (.usda texto, .usdc binário ou um pacote .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D padrão, em perspectiva ou paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Coloca uma vista 2D plana dos sólidos 3D (frontal, superior, lateral ou isométrica, linhas ocultas tracejadas) em uma folha ou no modelo |
| `VIEWLABEL` | `VL` | Um título de vista em uma folha que mostra o nome da vista de sua viewport, e muda com ela. |
| `VOICE` |  | Liga ou desliga comandos falados. São reconhecidos neste computador. |
| `VPCLIP` |  | Recorta uma viewport de folha em um objeto fechado ou em um polígono desenhado; Delete a torna retângulo de novo |
| `VPLAYER` |  | Congela ou descongela camadas só em algumas viewports (Congelar, Descongelar, Redefinir), e escolhe quais camadas as novas viewports começam congeladas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divide a área de desenho em painéis, cada um com sua própria vista (em uma folha: uma viewport, como MVIEW) |
| `VPVIEW` |  | Define o que uma viewport mostra: escolhe uma janela no modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual da vista 3D: sombreado, arestas, linha oculta, arame, raio X |
| `WALL` | `WA` | Desenha paredes 2D como uma polilinha. Elas se unem e recebem portas e janelas. |
| `WALLARC` | `WARC` | Desenha um arco de paredes. Paredes em planta são retas, então o arco é desenhado como pequenas paredes retas (15 graus cada) que se unem. |
| `WALLDELSEG` |  | Apaga um pedaço de parede entre dois pontos. O que sobra permanece como uma ou duas paredes. |
| `WALLDIM` |  | Digite um novo valor para uma cota: a parede na sua extremidade distante se move em esquadro consigo mesma, a parede na primeira extremidade permanece, e as paredes unidas a ela seguem. |
| `WALLDISJOIN` |  | Escolha uma parede perto de uma extremidade para não permitir uniões ali: a extremidade é desenhada em esquadro e nada a segue. Escolha de novo para permitir. |
| `WALLGRID` |  | Prende uma parede a uma linha de grade: ao longo dela, ou com uma extremidade sobre ela. Mova a linha com GRIDMOVE e a parede segue. |
| `WALLHOLD` |  | Alinha e trava: uma parede mantém seu lugar contra outra parede (sobre a linha dela, ou na distância que tem). Se uma se move, a outra segue. |
| `WALLHOLDDIM` |  | Trava a distância entre duas paredes paralelas. Se uma se mover, a outra segue para manter a distância. |
| `WALLHOLDS` |  | Lista as travas das paredes. |
| `WALLJOINS` |  | Dá a cada parede de um desenho antigo o seu id e salva as uniões entre elas. Isso também acontece na primeira alteração que você fizer. |
| `WALLJOINSTYLE` |  | Clique em um canto onde duas paredes se encontram ponta a ponta para mudar como ele é desenhado: meia-esquadria, reta, alisar. T troca qual parede passa por dentro. |
| `WALLOFFSET` | `WO` | Move uma parede em esquadro consigo mesma por uma distância (as paredes unidas a ela seguem), ou faz uma cópia nessa distância. |
| `WALLPICK` |  | Cria paredes sobre uma linha ou polilinha do desenho, com as linhas unidas a ela se você disser Sim. |
| `WALLPOLY` | `WP` | Desenha paredes em volta de um polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Desenha quatro paredes unidas a partir de dois cantos opostos, como RECTANG. |
| `WALLREJOIN` |  | Torna de novo uma só parede as duas partes de uma parede. A primeira mantém seu lugar no desenho. |
| `WALLROT` |  | Desenha quatro paredes unidas como um retângulo girado em qualquer ângulo: o primeiro lado, depois a distância do outro. |
| `WALLSPLIT` | `WS` | Divide uma parede em duas em um ponto ou onde outra parede a cruza. As partes permanecem unidas, a menos que você peça um vão ou extremidades livres. Portas e janelas acompanham a sua parte. |
| `WALLSPLITGAP` |  | Divide uma parede deixando um vão: digite o vão, escolha a parede, depois o ponto. As partes ficam com extremidades livres e podem ser unidas de novo. |
| `WALLSTRETCH` |  | Esticar com uma janela: as extremidades de parede dentro dela se movem, paredes totalmente dentro se movem inteiras, e paredes que encostam nas laterais deslizam com elas. |
| `WALLTAN` |  | Continua uma parede com um arco que sai dela ao longo da parede (desenhado como pequenas paredes retas). |
| `WALLTRACE` |  | Cria paredes em volta da menor área fechada de linhas e paredes ao redor do ponto que você clicar. |
| `WALLUNHOLD` |  | Tira as travas de uma parede (e as travas de outras paredes a ela). |
| `WBLOCK` | `W`, `-WBLOCK` | Grava um bloco, alguns objetos ou o desenho inteiro em um novo arquivo DWG ou DXF (W) |
| `WEDGE` | `WE` | Uma cunha: dois cantos e uma altura; ela desce a partir do primeiro canto (3D) |
| `WHEREAMI` | `WHERE` | Diz onde está o cursor. |
| `WHOHAS` |  | Diz quem tem um desenho aberto. CadCraft Studio mantém um pequeno arquivo de bloqueio ao lado de cada desenho aberto (Plan.dwg.cclock: quem, desde quando, qual versão) e o remove ao fechar. Opções: Atual (o desenho aberto), Arquivo (escolha um), Pasta (cada desenho dela aberto em algum lugar; isso também permite ao Studio manter arquivos de bloqueio nessa pasta), Caminho (digite um), Nome (o nome que os outros veem). Um bloqueio não atualizado há cinco minutos é considerado obsoleto. Não disponível em um navegador. |
| `WINDOW` | `WN` | Coloca uma janela em uma parede. |
| `XATTACH` | `XA` | Vincula outro DWG ou DXF a este desenho, mostrado somente leitura (XREF os lista e recarrega) |
| `XCLIP` | `XC` | Recorta referências de bloco e desenhos vinculados em um retângulo ou polígono, ou remove o recorte. |
| `XLINE` | `XL` | Linha de construção, sem fim nos dois sentidos: por dois pontos, horizontal, vertical, em ângulo, bissetriz de um ângulo, ou deslocada de uma linha. |
| `XREF` | `XR`, `-XREF` | Desenhos vinculados (referências externas): listar, anexar, recarregar, vincular, desanexar |
| `ZOOM` | `Z` | Extensão, ou uma janela |

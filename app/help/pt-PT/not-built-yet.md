---
title: Ainda não implementado
summary: O que esta versão da aplicação de desenho CadCraft ainda não faz e o que fazer em alternativa hoje.
keywords: em falta, limitações, ctb, stb, estilo de impressão, propriedades, ucs, anotativo, bloco dinâmico, spline, roteiro, não suportado, guardar dwg, trama, esticar, matriz, unir, matchprop, quebrar, alongar, tipo de linha, espessura de linha, xref, nuvem, 3d, sólidos, booleanas, multichamada, wipeout
from: 87e56521
---

O CadCraft está em desenvolvimento. Esta página lista o que a versão atual não faz, para não andar à procura. Cada item indica o que fazer em alternativa hoje.

## Ficheiros e guardar

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Um DWG do CadCraft verificado no próprio AutoCAD | Cada versão guardada é lida de novo por leitores de DWG de três outros programas e pelo CadCraft. Veja [O que um DWG mantém e altera](topic:files#what-a-dwg-keeps-and-changes). |
| Guardar DXF mais recente que 2000 | Guarde como DXF 2000, ou como DWG até AutoCAD 2018. |
| Guardar por cima do ficheiro aberto no navegador | Cada gravação transfere uma nova cópia; substitua o ficheiro antigo manualmente, se quiser. No CadCraft Studio, {{key:Mod+S}} grava de volta no ficheiro aberto. |
| Guardar na nuvem e sincronização entre computadores | O CadCraft ainda não envia as gravações para a nuvem: mantenha os ficheiros DWG e DXF nas suas pastas. No CadCraft Studio, [Histórico](topic:history) lista as versões na nuvem de um desenho guardado noutro lado e as cópias das suas gravações neste computador. |
| Sobreposições, e edição de um desenho referenciado no próprio local | Anexe o desenho como ligação e recarregue-o depois de alterar o outro desenho. Uma ligação mantém-se ligação ao guardar como DWG, e {{cmd:XCLIP}} recorta-a. |
| Imagens em DXF; wipeouts que escondem o que está por baixo | O DXF mantém uma imagem como a sua moldura, com o nome do ficheiro; o DWG mantém-na como imagem: veja [Imagens num desenho](topic:pictures). Um wipeout aparece como a sua moldura. |
| Editar multichamadas com linhas de chamada curvas, com linhas de chamada dos dois lados do conteúdo, ou com um bloco rodado ou escalado de forma desigual | São desenhadas como o outro programa as desenhou e movem-se como um só. As multichamadas com linhas de chamada retas para um só ponto, e com texto ou um bloco como conteúdo, ficam editáveis ({{cmd:MLEADEREDIT}}). |
| Em tabelas de outros programas: uma célula que contém um bloco, formatação de texto dentro de uma célula, bordas e cores por célula de uma tabela de DXF, uma tabela dividida em colunas | A tabela abre como tabela editável ({{cmd:TABLEDIT}}) e é mostrada como o outro programa a desenhou, até ser editada; depois, o CadCraft redesenha-a a partir das suas células: texto simples, fórmulas como `=G3*H3` e `=Sum(I3:I9)`, alinhamento e alturas de texto. Uma célula de bloco fica então vazia. Uma tabela de DWG não editada é guardada de volta com os dados das células que trazia. |
| Um objeto de tabela real num DXF guardado | Um DWG mantém uma tabela como tabela que outros programas podem editar. Um DXF mantém-na como o bloco que a desenha, com o registo próprio do CadCraft: o CadCraft abre-a de novo como tabela; os outros programas veem um bloco. Uma tabela espelhada ou escalada de forma desigual é guardada assim também num DWG. |
| Copiar e colar com outros programas | A área de transferência do CadCraft funciona entre desenhos e separadores do CadCraft no mesmo navegador, não com outros programas. Guarde como DWG ou DXF e abra-o lá. Veja [Copiar, colar e duplicar](topic:copy-paste). |

## Desenho e edição

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Padrões de trama que o CadCraft não tem, e preenchimentos em gradiente tal como os outros programas os pintam | As tramas abertas com padrões que o CadCraft não tem aparecem com um tom uniforme. Um preenchimento em gradiente ({{cmd:GRADIENT}}) é pintado à maneira do CadCraft para cada tipo: parecido com o dos outros programas no tipo, não ponto a ponto. O DWG 2004 e posteriores mantém-no como trama de gradiente real; num ficheiro DXF 2000 ou DWG 2000 só o CadCraft o lê de volta, e os outros programas veem um preenchimento sólido. Os padrões são carregados de um ficheiro `.pat`, e uma trama pode ser ligada ao seu contorno e segue-o: veja [Tramas e áreas de preenchimento](topic:hatch). |
| Tipos de linha com formas ou texto, e espessuras de linha num DXF R12 guardado | As formas e o texto do tipo de linha de um ficheiro ficam de fora dos traços; guarde como DWG para manter as espessuras de linha. |
| Tramas com padrão num DXF guardado | O R12 não tem trama: são guardadas como os seus contornos. Guarde como DWG para manter o padrão. |
| Matrizes feitas por outro programa ou editáveis nele; linhas e níveis em matrizes de caminho e polares; uma matriz que segue a sua curva de caminho | Uma matriz feita com ASsociativo ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; alterada com {{cmd:ARRAYEDIT}}) é guardada como referência de bloco com os números próprios do CadCraft: os outros programas mostram, movem, imprimem e decompõem-na, mas não podem alterar as contagens; uma matriz feita noutro programa abre aqui como referência de bloco simples. Uma matriz de caminho guarda uma cópia do seu caminho: editar a curva depois não move os itens. |
| Janelas de visualização de folhas recortadas de e para outros programas | Uma janela recortada com {{cmd:VPCLIP}} ou criada com {{cmd:MVIEW}} Poligonal ou Objeto é guardada com o contorno próprio do CadCraft: os outros programas abrem-na como o retângulo à volta; uma janela recortada noutro programa abre aqui como o seu retângulo. O DXF R12 mantém apenas o retângulo. |
| {{cmd:STRETCH}} com um polígono de cruzamento | Use uma ou mais janelas de cruzamento. |
| {{cmd:PEDIT}} Editar vértice (um vértice de cada vez na linha de comandos) | Grips (pontos de controlo) e o navegador de vértices em Propriedades (todos os vértices, as suas larguras e curvatura). O resto do PEDIT está implementado: veja [Splines e polilinhas](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} e {{cmd:JOIN}} em elipses e splines | {{cmd:EXPLODE}} uma spline (ou faça {{cmd:PEDIT}} a ela) para obter uma polilinha que estes comandos aceitam. |
| Concordância e chanfre entre um segmento em arco de uma polilinha e o segmento seguinte; concordância que une uma linha a uma polilinha | {{cmd:EXPLODE}} a polilinha e depois aplique a concordância às peças. O arco de concordância é acrescentado como objeto próprio. |
| Aparar e prolongar: a opção Projeto (3D) e prolongar a extremidade em arco de uma polilinha | Apare no plano do desenho; para uma extremidade em arco, decomponha a polilinha ou desenhe o arco de novo. |
| Objetos OLE: inseri-los, executá-los ou editá-los; mostrar os que um DWG tem onde o ficheiro os põe; imagens metafile | Veja [Imagens](topic:pictures#objects-from-other-programs-ole). Os objetos de um DXF aparecem como o seu mapa de bits ou como uma moldura com etiqueta; os de um DWG são mantidos, não desenhados no lugar (OLELIST os lista e coloca uma cópia de uma imagem onde indicar). |
| Escrever códigos de formatação (negrito, frações empilhadas, cores por palavra) em texto de parágrafo; tipos de letra além do de estilo Helvetica; colunas | A formatação que veio num ficheiro é mantida, desenhada e guardada (veja Texto); o novo texto de parágrafo tem uma altura e uma cor. |
| Texto de parágrafo editado na sua rotação | O editor abre na horizontal; o texto mantém a sua rotação. |
| Multichamadas guardadas como objetos de multichamada num DXF | Um DWG mantém-nas como multichamadas, com cada linha de chamada e um bloco como conteúdo; um DXF mantém o que elas desenham (linhas, pontas de seta e o texto ou o bloco). |
| Em tabelas ({{cmd:TABLE}}): texto que quebra dentro de uma célula, tabelas que se dividem em partes, o estilo de texto próprio de um estilo de tabela e cores por tipo de linha numa caixa de diálogo, uma ligação de dados a um ficheiro de folha de cálculo (`.xlsx`) ou uma que lê o ficheiro sozinha | O texto de uma célula só quebra onde se quebra manualmente ({{key:Alt+Enter}}); alargue a coluna. {{cmd:DATALINK}} lê um ficheiro `.csv`, e {{cmd:DATALINKUPDATE}} pede que escolha o ficheiro de novo. {{cmd:DATAEXTRACTION}} e {{cmd:COUNTTABLE}} criam uma tabela que não segue o desenho sozinha: execute-os de novo (uma contagem em tempo real: {{cmd:BOMTABLE}}). |
| Definições de atributos guardadas à parte num ficheiro (fora de um bloco), atributos de várias linhas | Coloque as definições de atributos num bloco antes de guardar: sozinhas, são guardadas como texto que mostra a etiqueta. |
| Estados de camadas (guardar e restaurar quais as camadas ligadas) | Use {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, ou ligue e desligue as camadas à mão. |
| Seleção por polígono de janela e por polígono de cruzamento, e filtros de seleção guardados | Vedação (F), Janela, Cruzamento, Remover (`R`), {{cmd:QSELECT}} para uma regra. |

## O painel Propriedades

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Desenhar as opções de ajuste, e a posição horizontal do texto e o texto abaixo da linha nas cotas que não são lineares nem alinhadas | Ficam guardadas no objeto, mostradas em Propriedades e guardadas; o CadCraft coloca o texto pela sua própria regra. |
| Materiais que outros programas veem | Um ficheiro guardado mantém o nome do material para o CadCraft; os outros programas mostram o material da camada. |
| Transparência em ficheiros DWG 2000 e DXF | Os outros programas mostram esses objetos sólidos; o CadCraft mantém a transparência. Guarde como DWG 2004 ou posterior para que todos a vejam. |
| Uma ligação de trama feita noutro programa | O CadCraft guarda a sua própria ligação em ficheiros DWG e DXF 2000; as ligações feitas noutros programas não são lidas. Use `HATCHEDIT` e Ligação: veja [Tramas e áreas de preenchimento](topic:hatch). |
| Coordenadas em Propriedades no UCS | Propriedades mostra coordenadas do mundo; a barra de estado e {{cmd:ID}} mostram as do UCS. Veja [Rode a vista e use as suas próprias coordenadas](topic:ucs-and-turned-view). |
| Uma posição separada para um objeto anotativo em cada uma das suas escalas; ler os registos por escala que outros programas guardam | Um texto ou cota anotativa mantém uma lista de escalas ({{cmd:OBJECTSCALE}}) e cada janela mostra-o no tamanho da sua escala, no mesmo lugar. A lista é guardada como dados próprios do CadCraft: outro programa vê o objeto na única escala para a qual tem o tamanho, e uma lista feita noutro programa não é lida. Veja [Unidades, folhas e escalas](topic:units-papers-scales#annotate-by-scale). |
| Alterar as distâncias, os ângulos ou os espelhamentos de um bloco dinâmico; blocos dinâmicos mantidos dinâmicos ao guardar noutra versão de DWG ou como DXF | Mude o estado de visibilidade em Propriedades › {{ui:Personalizado}}; os outros valores aparecem aí só para leitura. Mantém-se dinâmico ao guardar como DWG na versão em que o desenho chegou. Veja [Blocos dinâmicos](topic:dynamic-blocks). |
| Tolerância de ajuste de spline, grau de spline 6 ou superior, splines 3D | Os pontos de ajuste e de controlo, o grau de 1 a 5 e os pesos estão implementados: veja [Splines e polilinhas](topic:splines). A altura (Z) de uma spline não é mantida. |

## Auxílios de precisão

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Rastreio a partir de pontos entre comandos, e a caixa de definições de rastreio (ângulos polares relativos, ângulos extra) | {{cmd:POLARANG}} define o passo; obtenha os pontos de novo no comando seguinte. |
| Snap à grelha | Escreva coordenadas; a grelha é apenas uma guia visual. |
| Opções Arco e Comprimento ao indicar os cantos de uma área, e Volume de MEASUREGEOM | Desenhe o contorno com {{cmd:PLINE}} (com arcos) e depois use {{cmd:AREA}} `O`. |
| Entrada dinâmica para grips, e a sua lista de opções (a seta para baixo) | A linha de comandos mostra as opções. |
| Ângulos em graus, minutos e segundos, grados ou rumos topográficos | Escreva graus decimais: `30.5` para 30°30'. |
| Uma caixa de gestor de vistas; vistas nomeadas de uma folha que voltam nessa folha | {{cmd:NAMEDVIEW}} lista e restaura vistas. Um ficheiro guardado mantém-nas, mas as vistas de uma folha voltam na primeira folha. |

## Folhas, cotas e impressão

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Campos para a escala de uma janela, um objeto com nome como uma camada ou um bloco, uma hiperligação, e campos de conjunto de folhas além do número e do nome da folha; campos escritos como objetos de campo que outros programas atualizam | {{cmd:FIELD}} tem a data, o nome do ficheiro, o número, o nome e a contagem da folha, as propriedades do desenho ({{cmd:DWGPROPS}}), a área, o comprimento e outras propriedades de um objeto, e fórmulas, em texto, atributos e células de tabela. Outro programa mostra um campo do CadCraft como o texto que leu por último; o CadCraft lê os campos de data, nome de ficheiro, propriedade, folha e expressão de outro programa e deixa os outros tipos como texto. A escala de uma janela é escrita à mão. |
| Guardar qual o estilo de cota atual; texto de cota arrastado para um lugar livre | Um desenho abre com o estilo Standard atual. O texto fica sobre a linha de cota (DIMTEDIT Esquerda / Direita / Centro). Veja [Definir tamanhos de cota](topic:dimension-settings). |
| Cotas angulares de duas linhas editáveis, de ficheiros abertos que o CadCraft não consegue resolver | São mostradas como desenhadas no ficheiro. As cotas de ordenada, de comprimento de arco e de raio dobrado abrem como cotas editáveis. |
| Verificar o leitor de CTB contra um ficheiro de outro programa (está implementado, a partir da descrição publicada), estilos de impressão nomeados (STB), tramas em pontilhado (dithering), números de caneta, escala de cinzentos a partir de um CTB e ajuste adaptativo de tipo de linha num estilo de impressão | Crie a tabela em {{ui:Tabelas de estilos de impressão}} (cor, cinzento, tinta, espessura de linha, tipo de linha, fim e junção de linha, e estilo de preenchimento por cor): veja [Tabelas de estilos de impressão](topic:plot-pdf#plot-style-tables). |
| Configurações de página | Escolha o papel, a escala e o estilo de impressão na caixa {{ui:Imprimir para PDF}}; uma folha mantém o seu estilo de impressão. |
| Hindi e outras escritas que precisam de formação complexa em PDF, e ideogramas raros (escritas europeias, cirílico, grego, hebraico, árabe, persa, urdu, tailandês, chinês, japonês e coreano na impressão) | Imprimem-se como «?». |
| Texto em escrita árabe e texto chinês, japonês ou coreano no mesmo PDF impresso | Uma impressão leva uma só fonte: uma das duas escritas imprime-se como «?». |
| Marcas explícitas de direção no texto (incorporações, substituições, isolados) | São ignoradas: cada linha é ordenada apenas pelas suas letras. |
| Imagens dentro de uma página PDF anexada, numa impressão | As linhas, os preenchimentos e o texto da página são impressos. Uma página que é só uma imagem entra com {{cmd:SCANATTACH}}, e as imagens são impressas. Veja [Subjacentes em PDF](topic:pdf-underlay#plot-and-save). |
| Enviar um trabalho para um laser a partir do CadCraft Studio (o Studio não tem Web Serial) | Guarde o G-code e envie-o com o programa do próprio laser, ou envie-o a partir do Chrome ou do Edge. Veja [Enviar um desenho para um laser](topic:laser-cutting#send-from-the-browser). |

## Restrições e parâmetros

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Restrições em folhas, em blocos, em elipses, splines ou texto | Restrinja no separador {{ui:Modelo}}, em linhas, polilinhas, círculos, arcos e pontos. |
| Suave (G2), e restringir diretamente a curvatura de um arco de polilinha | Tangente e igual; um segmento em arco segue as suas duas extremidades. |
| Restrições dimensionais de referência (conduzidas), e `3Point` em {{cmd:DCANGULAR}} | Uma cota simples (DIMLINEAR …) mostra um valor sem o conduzir. |
| Restrições dimensionais de tamanho fixo no papel, e a sua impressão | Mostram-se só no ecrã; acrescente cotas simples para a impressão. |
| Restrições mantidas através de EXPLODE, BREAK, JOIN e outros comandos que criam objetos novos, e em polilinhas aparadas | Restrinja-as de novo (AUTOCONSTRAIN ajuda). {{cmd:MIRROR}} e {{cmd:TRIM}} de linhas, arcos e círculos mantêm-nas. |
| Tabelas de projeto (configurações) no CadCraft | Altere os parâmetros no painel. |
| Um teste completo de ida e volta com SolidWorks | Verifique o esboço que a macro cria antes de confiar nele. |

## 3D

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| Concordâncias, chanfros, cascas e lofts; varrimentos ao longo de um caminho que sobe (caminhos 3D) | Extrudir contornos com arcos, empurrar e puxar faces, fazer revoluções e varrimentos ao longo de caminhos planos. |
| Extrusão noutra direção que não para cima | Desenhe a forma no chão e extrude-a para cima ou para baixo (com inclinação ou ao longo de um caminho, se quiser); depois rode o sólido. |
| Elevação e espessura de objetos 2D | O desenho fica no chão (altura 0) no separador 3D. |
| Edição de sólidos, regiões e corpos de outros programas; mostrar os que estão dentro de blocos; as suas faces em superfícies de forma livre (varridas, em loft ou outras); malhas poliface e de polígonos | Os sólidos do espaço modelo aparecem no separador 3D como estão e são guardados de volta sem alterações num DWG; o que não é desenhado fica listado quando o separador 3D abre. Peça malhas como faces 3D no espaço modelo. Veja [Sólidos de outros programas](topic:3d-solids#solids-from-other-programs). |
| Copiar e colar sólidos | No separador 3D, use {{cmd:COPY}}. A área de transferência só tem objetos 2D. |
| Cortes, vistas que seguem alterações posteriores aos sólidos, e sólidos sombreados em folhas impressas | {{cmd:VIEWBASE}} coloca vistas planas (uma fotografia); execute-o de novo depois de alterar os sólidos. |
| Materiais, texturas e definições de iluminação | Os estilos visuais: sombreado, arestas, linha oculta, arame e raio X. |
| Camadas de mapa impressas, nas janelas das folhas e no separador 3D; imagens de ficheiros guardados com o desenho; a localização de um desenho escrita para outros programas em DWG 2000–2007 e DXF R12 | As camadas de mapa aparecem sob o espaço modelo no ecrã; o sistema e a lista de camadas são guardados com o desenho: veja [Camadas de mapa sob o desenho](topic:map-layers). |
| Digitalizações E57 com mais de 6 milhões de pontos ou 512 MB, ficheiros próprios dos fabricantes de scanners (RCP, RCS, FLS, LGS, TZF, ZFS), uma nuvem de pontos guardada com o desenho ou impressa, snap a uma nuvem no separador 3D, fatias verticais (de corte) no separador Modelo | Exporte digitalizações grandes ou dos fabricantes como LAS ou LAZ ([Formatos de nuvem de pontos](topic:point-cloud-formats)); anexe a nuvem sempre que abrir o desenho; trace a partir de uma fatia em planta no separador Modelo: veja [Traçar linhas as-built sobre uma nuvem de pontos](topic:point-clouds). |
| Registar digitalizações: encontrar alvos (esferas, tabuleiros de xadrez) numa digitalização sozinho, resolver todas as digitalizações em conjunto (ajustamento de feixe), escala, registar contra um modelo | Escolha pontos correspondentes ou escreva as coordenadas dos alvos, e depois refine uma digitalização de cada vez com ICP: veja [Registar várias digitalizações numa só](topic:register-scans). |

## Rotinas e personalização

| Ainda não implementado | Em alternativa, hoje |
|---|---|
| LISP compilado ou protegido (.fas, .vlx), programas nativos (.arx, .crx, .dbx) e VBA (.dvb) | Carregue o código-fonte .lsp de uma rotina com {{cmd:APPLOAD}}. |
| `grread` de LISP, reatores (`vlr-…`), funções de curva (`vlax-curve-…`), dicionários e dados estendidos, `acet-…` das Express Tools | O resto da linguagem funciona: veja [Executar rotinas LISP](topic:run-lisp). A linha de comandos indica uma função em falta quando uma rotina a usa. |
| Imagens e slides na caixa de diálogo de uma rotina | Aparecem como molduras em branco; o resto da caixa funciona. |
| CraftScript (.craft), Lua e Python no CadCraft | Execute-os no espaço Script do PartCraft. |
| Listas de camadas, cores e tipos de linha dentro dos estilos de menu da faixa | Use o painel {{ui:Camadas}} e {{ui:Propriedades}}. |
| A Startup Suite e os aliases guardados no seu computador ou sincronizados | Ficam guardados neste navegador; a aplicação de computador e o serviço na nuvem tratam disso. No Studio, `acad.lsp` e `acaddoc.lsp` são lidos de uma pasta de suporte que escolher (Carregar aplicações). |

## Ajuda

A ajuda descreve esta versão. Quando algo for acrescentado, sai desta página e passa para os tutoriais.

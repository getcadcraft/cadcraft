---
title: Ainda não implementado
summary: O que esta versão do aplicativo de desenho CadCraft ainda não faz e o que fazer hoje no lugar.
keywords: ausente, limitações, ctb, stb, estilo de plotagem, propriedades, ucs, anotativo, bloco dinâmico, spline, roteiro, não suportado, salvar DWG, hachura, esticar, matriz, unir, matchprop, quebrar, alongar, tipo de linha, espessura de linha, xref, nuvem, 3d, sólidos, booleanas, multichamada, wipeout
from: 87e56521
---

O CadCraft está em desenvolvimento. Esta página lista o que a versão atual não faz, para que você não precise procurar. Cada item diz o que fazer hoje no lugar.

## Arquivos e salvamento

| Ainda não implementado | No lugar, hoje |
|---|---|
| Um DWG do CadCraft verificado no próprio AutoCAD | Cada versão salva é relida pelos leitores DWG de três outros programas e pelo CadCraft. Veja [O que um DWG mantém e altera](topic:files#what-a-dwg-keeps-and-changes). |
| Salvar DXF mais novo que 2000 | Salve como DXF 2000, ou como DWG até AutoCAD 2018. |
| Salvar sobre o arquivo aberto no navegador | Cada salvamento baixa uma nova cópia; substitua o arquivo antigo você mesmo, se quiser. No CadCraft Studio, {{key:Mod+S}} grava de volta no arquivo que você abriu. |
| Salvamento na nuvem e sincronização entre computadores | O CadCraft ainda não envia seus salvamentos para a nuvem: mantenha seus arquivos DWG e DXF em suas próprias pastas. No CadCraft Studio, [Histórico](topic:history) lista as versões na nuvem de um desenho salvo em outro lugar e as cópias dos seus próprios salvamentos neste computador. |
| Sobreposições, e edição de um desenho vinculado no próprio lugar | Anexe o desenho como link e recarregue-o depois de alterar o outro desenho. Um link continua sendo link ao salvar como DWG, e {{cmd:XCLIP}} o recorta. |
| Imagens em DXF; wipeouts que ocultam o que está embaixo | DXF mantém uma imagem como sua moldura com o nome do arquivo; DWG a mantém como imagem — veja [Imagens em um desenho](topic:pictures). Um wipeout aparece como sua moldura. |
| Edição de multichamadas com linhas de chamada curvas, com linhas de chamada dos dois lados do conteúdo, ou com um bloco girado ou escalado de forma desigual | Elas são desenhadas como o outro programa as desenhou e se movem como um conjunto. Multichamadas com linhas de chamada retas para uma única base, e texto ou bloco como conteúdo, ficam editáveis ({{cmd:MLEADEREDIT}}). |
| Em tabelas de outros programas: uma célula que contém um bloco, formatação de texto dentro de uma célula, bordas e cores por célula da tabela de um DXF, uma tabela dividida em colunas | A tabela abre como tabela editável ({{cmd:TABLEDIT}}) e é mostrada como o outro programa a desenhou até você editá-la; depois o CadCraft a redesenha a partir de suas células: texto simples, fórmulas como `=G3*H3` e `=Sum(I3:I9)`, alinhamento e alturas de texto. Uma célula com bloco fica então vazia. Uma tabela DWG não editada é salva de volta com os dados de célula que tinha. |
| Um objeto de tabela real em um DXF salvo | Um DWG mantém uma tabela como tabela que outros programas podem editar. Um DXF a mantém como o bloco que a desenha, com o registro próprio do CadCraft: o CadCraft a abre de novo como tabela; outros programas veem um bloco. Uma tabela espelhada ou com escala desigual também é salva assim em um DWG. |
| Copiar e colar com outros programas | A área de transferência do CadCraft funciona entre desenhos e abas do CadCraft no mesmo navegador, não com outros programas. Salve como DWG ou DXF e abra lá. Veja [Copiar, colar e duplicar](topic:copy-paste). |

## Desenho e edição

| Ainda não implementado | No lugar, hoje |
|---|---|
| Padrões de hachura que o CadCraft não tem, e preenchimentos de gradiente exatamente como outros programas os pintam | Hachuras abertas com padrões que o CadCraft não tem aparecem como um tom. Um preenchimento de gradiente ({{cmd:GRADIENT}}) é pintado do jeito próprio do CadCraft para cada tipo: parecido com o dos outros programas no tipo, não ponto a ponto. DWG 2004 e posteriores o mantêm como uma hachura de gradiente real; em um arquivo DXF 2000 ou DWG 2000 só o CadCraft o lê de volta, e outros programas veem um preenchimento sólido. Padrões são carregados de um arquivo `.pat`, e uma hachura pode ser vinculada ao seu contorno e então acompanhá-lo: veja [Hachura e áreas de preenchimento](topic:hatch). |
| Tipos de linha com formas ou texto dentro deles, e espessuras de linha em um DXF R12 salvo | Formas e textos no tipo de linha de um arquivo ficam de fora dos traços; salve como DWG para manter as espessuras de linha. |
| Hachuras com padrão em um DXF salvo | O R12 não tem hachura: elas são salvas como seus contornos. Salve como DWG para manter o padrão. |
| Matrizes feitas por outro programa ou que ele pode editar; linhas e níveis em matrizes de caminho e polares; uma matriz que segue a curva do seu caminho | Uma matriz feita com ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; alterada com {{cmd:ARRAYEDIT}}) é salva como referência de bloco com os números próprios do CadCraft: outros programas mostram, movem, plotam e explodem, mas não podem alterar as quantidades, e uma matriz feita em outro programa abre aqui como uma simples referência de bloco. Uma matriz de caminho mantém uma cópia do seu caminho: editar a curva depois não move os itens. |
| Viewports de folha recortadas de e para outros programas | Uma viewport recortada com {{cmd:VPCLIP}} ou feita com {{cmd:MVIEW}} Poligonal ou Objeto é salva com o contorno próprio do CadCraft: outros programas a abrem como o retângulo ao redor dela, e uma viewport recortada em outro programa abre aqui como seu retângulo. DXF R12 mantém só o retângulo. |
| {{cmd:STRETCH}} com um polígono de cruzamento | Use uma ou mais janelas de cruzamento. |
| {{cmd:PEDIT}} Editar vértice (um vértice por vez na linha de comando) | Grips, e o navegador de vértices em Propriedades (todos os vértices, suas larguras e bulge). O resto do PEDIT está implementado: veja [Splines e polilinhas](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} e {{cmd:JOIN}} em elipses e splines | {{cmd:EXPLODE}} uma spline (ou {{cmd:PEDIT}} nela) para obter uma polilinha que esses comandos aceitam. |
| Concordância e chanfro entre um segmento de arco de uma polilinha e o segmento ao lado; concordância que une uma linha a uma polilinha | {{cmd:EXPLODE}} a polilinha, depois faça a concordância nas partes. O arco de concordância é adicionado como um objeto próprio. |
| Aparar e estender: a opção Projeto (3D) e estender a extremidade de arco de uma polilinha | Apare no plano do desenho; para uma extremidade de arco, exploda a polilinha ou desenhe o arco de novo. |
| Objetos OLE: inseri-los, executá-los ou editá-los; mostrar os de um DWG onde o arquivo os coloca; imagens metarquivo | Veja [Imagens](topic:pictures#objects-from-other-programs-ole). Os objetos de um DXF aparecem como sua imagem em bitmap ou uma moldura com rótulo; os de um DWG são mantidos, não desenhados no lugar ({{cmd:OLELIST}} os lista e coloca uma cópia de uma imagem onde você indicar). |
| Digitar códigos de formatação (negrito, frações empilhadas, cores por palavra) em texto de parágrafo; fontes além da fonte estilo Helvetica; colunas | A formatação que veio em um arquivo é mantida, desenhada e salva (veja Texto); o novo texto de parágrafo tem uma só altura e cor. |
| Texto de parágrafo editado em sua rotação | O editor abre nivelado; o texto mantém sua rotação. |
| Multichamadas salvas como objetos multichamada em um DXF | Um DWG as mantém como multichamadas, com cada linha de chamada e um bloco como conteúdo; um DXF mantém o que elas desenham (linhas, setas e o texto ou o bloco). |
| Em tabelas ({{cmd:TABLE}}): texto que quebra linha dentro de uma célula, tabelas divididas em partes, o estilo de texto próprio de um estilo de tabela e cores por tipo de linha em uma caixa de diálogo, um vínculo de dados com um arquivo de planilha (`.xlsx`) ou um que lê o arquivo sozinho | O texto de uma célula só quebra onde você o quebra ({{key:Alt+Enter}}); alargue a coluna. {{cmd:DATALINK}} lê um arquivo `.csv`, e {{cmd:DATALINKUPDATE}} pede que você escolha o arquivo de novo. {{cmd:DATAEXTRACTION}} e {{cmd:COUNTTABLE}} criam uma tabela que não acompanha o desenho sozinha: execute-os de novo (uma contagem ao vivo: {{cmd:BOMTABLE}}). |
| Definições de atributo mantidas sozinhas em um arquivo salvo (fora de um bloco), atributos de múltiplas linhas | Coloque as definições de atributo em um bloco antes de salvar: sozinhas, elas são salvas como texto mostrando a etiqueta. |
| Estados de camada (salvar e restaurar quais camadas estão ligadas) | Use {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, ou ligue e desligue as camadas manualmente. |
| Seleção por polígono de janela e polígono de cruzamento, e filtros de seleção salvos | Cerca (`F`), Janela, Cruzamento, Remover (`R`), {{cmd:QSELECT}} para uma regra. |


## O painel Propriedades

| Ainda não implementado | No lugar, hoje |
|---|---|
| Desenhar as opções de Ajuste, e a posição horizontal do texto e o texto abaixo da linha em cotas que não são lineares nem alinhadas | Elas são mantidas no objeto, mostradas em Propriedades e salvas; o CadCraft posiciona o texto pela sua própria regra. |
| Materiais que outros programas veem | Um arquivo salvo mantém o nome do material para o CadCraft; outros programas mostram o material da camada. |
| Transparência em arquivos DWG 2000 e DXF | Outros programas mostram esses objetos sólidos; o CadCraft mantém a transparência. Salve como DWG 2004 ou posterior para todos. |
| Um vínculo de hachura feito em outro programa | O CadCraft salva o próprio vínculo em arquivos DWG e DXF 2000; vínculos feitos em outros programas não são lidos. Use `HATCHEDIT` e Link: veja [Hachura e áreas de preenchimento](topic:hatch). |
| Coordenadas em Propriedades no UCS | Propriedades mostra coordenadas do mundo; a barra de status e {{cmd:ID}} mostram as do UCS. Veja [Gire a vista e use suas próprias coordenadas](topic:ucs-and-turned-view). |
| Uma posição separada para um objeto anotativo em cada uma de suas escalas; ler os registros por escala que outros programas mantêm | Um texto ou cota anotativa mantém uma lista de escalas ({{cmd:OBJECTSCALE}}), e cada viewport o mostra no tamanho da sua escala, no mesmo lugar. A lista é salva como dados próprios do CadCraft: outro programa vê o objeto na única escala para a qual ele foi dimensionado, e uma lista feita em outro programa não é lida. Veja [Unidades, folhas e escalas](topic:units-papers-scales#annotate-by-scale). |
| Alterar distâncias, ângulos ou espelhamentos de um bloco dinâmico; blocos dinâmicos mantidos dinâmicos ao salvar em outra versão DWG ou como DXF | Troque o estado de visibilidade em Propriedades › {{ui:Personalizado}}; seus outros valores aparecem ali apenas para leitura. Ele continua dinâmico quando você o salva como DWG na versão em que o desenho chegou. Veja [Blocos dinâmicos](topic:dynamic-blocks). |
| Tolerância de ajuste de spline, grau de spline 6 ou superior, splines 3D | Pontos de ajuste e de controle, grau 1 a 5 e pesos estão implementados: veja [Splines e polilinhas](topic:splines). A altura (Z) de uma spline não é mantida. |
## Auxílios de precisão

| Ainda não implementado | No lugar, hoje |
|---|---|
| Rastreamento a partir de pontos entre comandos, e a caixa de configurações de rastreamento (ângulos polares relativos, ângulos extras) | {{cmd:POLARANG}} define o passo; adquira os pontos de novo no próximo comando. |
| Snap na grade | Digite as coordenadas; a grade é apenas um guia visual. |
| Opções Arco e Comprimento ao escolher os cantos de uma área, e Volume do MEASUREGEOM | Desenhe o contorno com {{cmd:PLINE}} (com arcos), depois {{cmd:AREA}} `O`. |
| Entrada dinâmica para grips, e sua lista de opções (a seta para baixo) | A linha de comando mostra as opções. |
| Ângulos em graus-minutos-segundos, grados ou rumos de agrimensura | Digite graus decimais: `30.5` para 30°30'. |
| Uma caixa de gerenciador de vistas; vistas nomeadas de uma folha que voltam nessa folha | {{cmd:NAMEDVIEW}} lista e restaura vistas. Um arquivo salvo as mantém, mas as vistas de uma folha voltam na primeira folha. |

## Folhas, cotas e plotagem

| Ainda não implementado | No lugar, hoje |
|---|---|
| Campos para a escala de uma viewport, um objeto nomeado como uma camada ou um bloco, um hiperlink, e campos de conjunto de folhas além do número e do nome da folha; campos gravados como objetos de campo que outros programas atualizam | {{cmd:FIELD}} tem a data, o nome do arquivo, o número, nome e contagem da folha, as propriedades do desenho ({{cmd:DWGPROPS}}), a área, o comprimento e outras propriedades de um objeto, e fórmulas, em texto, atributos e células de tabela. Outro programa mostra um campo do CadCraft como o texto que leu por último; o CadCraft lê os campos de data, nome de arquivo, propriedade, folha e expressão de outro programa e deixa os outros tipos como texto. A escala de uma viewport é digitada à mão. |
| Salvar qual estilo de cota está atual; texto de cota arrastado para um lugar livre | Um desenho abre com Standard atual. O texto fica sobre a linha de cota (DIMTEDIT Esquerda / Direita / Centro). Veja [Definir tamanhos de cota](topic:dimension-settings). |
| Cotas angulares de duas linhas editáveis, de arquivos abertos que o CadCraft não consegue calcular | Elas são mostradas como desenhadas no arquivo. Cotas de ordenada, de comprimento de arco e de raio com quebra abrem como cotas que você pode editar. |
| Verificação do leitor CTB com um arquivo de outro programa (ele está implementado, a partir da descrição publicada), estilos de plotagem nomeados (STB), tramas (dither), números de caneta, escala de cinza de um CTB e ajuste adaptativo de tipo de linha em um estilo de plotagem | Monte a tabela em {{ui:Tabelas de estilos de plotagem}} (cor, cinza, tinta, espessura de linha, tipo de linha, final e junção de linha, e estilo de preenchimento por cor): veja [Tabelas de estilos de plotagem](topic:plot-pdf#plot-style-tables). |
| Configurações de página | Escolha papel, escala e estilo de plotagem na caixa {{ui:Plotar em PDF}}; uma folha mantém seu estilo de plotagem. |
| Hindi e outros alfabetos que precisam de formação complexa de caracteres em PDFs, e ideogramas raros (alfabetos europeus, cirílico, grego, hebraico, árabe, persa, urdu, tailandês, chinês, japonês e coreano) | Eles são impressos como "?". |
| Texto em escrita árabe e em chinês, japonês ou coreano no mesmo PDF plotado | Uma plotagem tem uma só fonte: um dos dois alfabetos é impresso como "?". |
| Marcas explícitas de direção no texto (incorporações, substituições, isolamentos) | São ignoradas: cada linha é ordenada somente pelas suas letras. |
| Imagens dentro de uma página PDF anexada, em uma plotagem | As linhas, preenchimentos e textos da página são impressos. Uma página que é só uma imagem entra com {{cmd:SCANATTACH}}, e as imagens são impressas. Veja [Sobreposições de PDF](topic:pdf-underlay#plot-and-save). |
| Enviar um trabalho para um laser a partir do CadCraft Studio (o Studio não tem Web Serial) | Salve o G-code e envie-o pelo programa do seu laser, ou envie pelo Chrome ou Edge. Veja [Enviar um desenho para um laser](topic:laser-cutting#send-from-the-browser). |

## Restrições e parâmetros

| Ainda não implementado | No lugar, hoje |
|---|---|
| Restrições em folhas, em blocos, em elipses, splines ou textos | Restrinja na guia {{ui:Modelo}}, em linhas, polilinhas, círculos, arcos e pontos. |
| Suave (G2), e restringir diretamente o bulge do arco de uma polilinha | Tangente e igual; um segmento de arco segue suas duas extremidades. |
| Restrições dimensionais de referência (dirigidas), e `3Point` em {{cmd:DCANGULAR}} | Uma cota simples (DIMLINEAR …) mostra um valor sem controlá-lo. |
| Restrições dimensionais de tamanho fixo no papel, e a plotagem delas | Aparecem só na tela; adicione cotas simples para a plotagem. |
| Restrições mantidas através de EXPLODE, BREAK, JOIN e outros comandos que criam novos objetos, e em polilinhas aparadas | Restrinja-as de novo (AUTOCONSTRAIN ajuda). {{cmd:MIRROR}} e {{cmd:TRIM}} de linhas, arcos e círculos as mantêm. |
| Tabelas de projeto (configurações) no CadCraft | Altere os parâmetros no painel. |
| Um ciclo de ida e volta testado com o SolidWorks | Confira o esboço que a macro cria antes de confiar nele. |

## 3D

| Ainda não implementado | No lugar, hoje |
|---|---|
| Arredondamentos, chanfros, cascas e lofts; varreduras ao longo de um caminho que sobe (caminhos 3D) | Extrude contornos com arcos, empurre e puxe faces, revolucione e varra ao longo de caminhos planos. |
| Extrusão em outra direção que não para cima | Desenhe a forma no chão e extrua-a para cima ou para baixo (com conicidade ou ao longo de um caminho, se quiser); gire o sólido depois. |
| Elevação e espessura de objetos 2D | O desenho fica no chão (altura 0) na guia 3D. |
| Edição de sólidos, regiões e corpos de outros programas; exibição deles dentro de blocos; suas faces em superfícies varridas, lofts ou outras superfícies de forma livre; malhas polyface e poligonais | Sólidos do espaço modelo aparecem na guia 3D como estão e são salvos de volta sem alterações em DWG; o que não é desenhado é listado quando a guia 3D abre. Peça as malhas como faces 3D no espaço modelo. Veja [Sólidos de outros programas](topic:3d-solids#solids-from-other-programs). |
| Copiar e colar sólidos | Na guia 3D, use {{cmd:COPY}}. A área de transferência guarda só objetos 2D. |
| Cortes, vistas que acompanham alterações posteriores nos sólidos, e sólidos sombreados em folhas plotadas | {{cmd:VIEWBASE}} coloca vistas planas (um instantâneo); execute-o de novo depois de alterar os sólidos. |
| Materiais, texturas e configurações de iluminação | Os estilos visuais: sombreado, arestas, linha oculta, arame e raio-X. |
| Camadas de mapa plotadas, nas viewports das folhas e na guia 3D; imagens de arquivos salvos com o desenho; a localização de um desenho gravada para outros programas em DWG 2000–2007 e DXF R12 | Camadas de mapa aparecem sob o espaço modelo na tela; o sistema e a lista de camadas são salvos com o desenho: veja [Camadas de mapa sob o desenho](topic:map-layers) |
| Varreduras E57 com mais de 6 milhões de pontos ou 512 MB, arquivos próprios dos fabricantes de scanners (RCP, RCS, FLS, LGS, TZF, ZFS), uma nuvem de pontos salva com o desenho ou plotada, snap em uma nuvem na guia 3D, fatias verticais (de corte) na guia Modelo | Exporte varreduras grandes ou dos fabricantes como LAS ou LAZ ([Formatos de nuvem de pontos](topic:point-cloud-formats)); anexe a nuvem toda vez que abrir o desenho; trace a partir de um corte de planta na guia Modelo: veja [Traçar linhas como construídas sobre uma nuvem de pontos](topic:point-clouds) |
| Registro de varreduras: encontrar alvos (esferas, tabuleiros de xadrez) em uma varredura sozinho, resolver todas as varreduras juntas (ajuste de feixe), escala, registro contra um modelo | Escolha pontos correspondentes ou digite as coordenadas dos alvos, depois refine uma varredura por vez com ICP: veja [Registrar várias varreduras em uma](topic:register-scans) |

## Rotinas e personalização

| Ainda não implementado | No lugar, hoje |
|---|---|
| LISP compilado ou protegido (.fas, .vlx), programas nativos (.arx, .crx, .dbx) e VBA (.dvb) | Carregue o código-fonte .lsp de uma rotina com {{cmd:APPLOAD}}. |
| `grread` do LISP, reatores (`vlr-…`), funções de curva (`vlax-curve-…`), dicionários e dados estendidos, os `acet-…` do Express Tools | O resto da linguagem funciona: veja [Executar rotinas LISP](topic:run-lisp). A linha de comando nomeia uma função ausente quando uma rotina a acessa. |
| Imagens e slides na caixa de diálogo de uma rotina | Aparecem como molduras em branco; o resto da caixa funciona. |
| CraftScript (.craft), Lua e Python no CadCraft | Execute-os na área de trabalho Script do PartCraft. |
| Listas de camada, cor e tipo de linha dentro dos estilos de menu da faixa de opções | Use o painel {{ui:Camadas}} e {{ui:Propriedades}}. |
| O Startup Suite e os aliases salvos no seu computador ou sincronizados | Eles são salvos neste navegador; o aplicativo de desktop e o serviço na nuvem vão mantê-los para você. No Studio, `acad.lsp` e `acaddoc.lsp` são lidos de uma pasta de suporte que você escolher (Carregar aplicativos). |

## Ajuda

A ajuda descreve esta versão. Quando algo é adicionado, sai desta página e passa para os tutoriais.

---
title: Novidades da 0.7
summary: Bases em PDF e importação de PDF, desenhos digitalizados com decalque automático, splines reais com SPLINE, SPLINEDIT e PEDIT, um gestor de estilos de cota, texto que mantém a formatação, WBLOCK e escalas próprias, sólidos 3D de outros programas, registo de digitalizações, um painel Laser, exportação USD, Histórico e impressão no CadCraft Studio, um primeiro desenho guiado, a barra de ferramentas em qualquer lado ou em menos filas, e mais ferramentas para assistentes de IA.
keywords: novidades, o que há de novo, notas de versão, registo de alterações, alterações, 0.7, versão, novas funcionalidades, pdf, pdfattach, pdfimport, base, digitalização, scanattach, scantrace, decalque, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatação, wblock, scalelistedit, lista de escalas, acis, sólidos 3d, registerscans, registar digitalizações, icp, e57, las, laser, grbl, g-code, usd, usdout, histórico, versões, comparar, imprimir, impressora, png, svg, estilo de impressão, tipo de linha, visita guiada, folha de consulta, mapa de comandos, posição da barra de ferramentas, linhas da barra de ferramentas, toolbardock, regen, regenall, trackpad, deslizar, página de código, cirílico, coreano, chinês, japonês, elétrico, diferencial, p&id, pid, acad.lsp, acaddoc.lsp, pasta de suporte, assistentes, mcp, unidades, português
from: b9258ca6
---

Isto é o que mudou no CadCraft 0.7, em comparação com a 0.6. Grande parte foi pedida no Discord. A lista está agrupada por área, com o mais importante primeiro.

## Novo

### PDF e desenhos digitalizados

- **Colocar uma página de PDF por baixo do desenho.** {{cmd:PDFATTACH}} (`PDFATT`) coloca uma página ao seu tamanho real ou a uma escala que escrever. Faça snap às suas linhas, esbata-a, torne-a monocromática ({{cmd:PDFADJUST}}), recorte-a ({{cmd:PDFCLIP}}) e ligue ou desligue as camadas do próprio PDF ({{cmd:PDFLAYERS}}). Imprime-se como linhas, preenchimentos e texto, e um DWG ou DXF 2000 guarda-a como ligação para o ficheiro. Abrir um PDF com {{ui:Abrir}} pergunta se o quer anexar ou importar. Consulte [Bases em PDF e importação de PDF](topic:pdf-underlay).
- **Transformar uma página de PDF em objetos de desenho.** {{cmd:PDFIMPORT}} (`PDFIM`) cria linhas, polilinhas, círculos, arcos, tramas sólidas e texto em camadas com o nome do PDF, ao tamanho real, a uma escala escrita, ou à escala dada por dois pontos e uma distância real, num só passo de anulação. Consulte [Importar uma página](topic:pdf-underlay#import-a-page).
- **Desenhos digitalizados.** {{cmd:SCANATTACH}} traz um PNG, JPEG ou TIFF (uma página ou todas) ou uma página de PDF que seja uma imagem. Depois, ponha-o à escala a partir de dois pontos ({{cmd:SCANSCALE}}), alinhe-o ({{cmd:SCANALIGN}}), endireite-o a partir das suas próprias linhas longas ({{cmd:SCANDESKEW}}), torne-o a preto e branco e remova as manchas ({{cmd:SCANCLEAN}}), recorte-o e apague partes dele. Cada passo é um passo de anulação e o ficheiro original é mantido. Consulte [Desenhos digitalizados e o decalque](topic:scanned-drawings).
- **Decalcar uma digitalização em linhas e arcos.** {{cmd:SCANTRACE}} desenha as linhas da digitalização como linhas e arcos numa nova camada, SCAN-TRACE, com uma tolerância que definir, e deixa o texto e as tramas como estão. O relatório diz o que criou e o que deixou, e não afirma que o resultado esteja certo: verifique-o com a folha. {{cmd:RASTERSNAP}} permite que os snaps a objetos encontrem as extremidades, cantos e cruzamentos da digitalização. Nada é enviado para lado nenhum e não se usa nenhum modelo treinado. Consulte [O decalque](topic:scanned-drawings#the-trace).

### Desenhar e editar

- **Splines reais.** {{cmd:SPLINE}} (`SPL`) desenha uma curva por pontos ou a partir de pontos de controlo (grau 1 a 5), com tangentes nas extremidades; {{cmd:SPLINEDIT}} (`SPE`) move, acrescenta e elimina pontos de ajuste ou de controlo, define pesos, abre, fecha, inverte, ou transforma uma spline numa polilinha. As splines de ficheiros DWG e DXF abrem-se como splines, e o DWG e o DXF 2000 guardam-nas como splines. Consulte [Splines e polilinhas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) fecha e abre polilinhas, une-lhes linhas e arcos, define uma largura única, ajusta uma curva pelos vértices ou uma spline ao longo deles e desfaz-a com Desfazer curva, inverte, e edita várias de uma vez. Consulte [Editar uma polilinha](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escreve um bloco, alguns objetos ou o desenho inteiro num novo DWG ou DXF que contém apenas as camadas, estilos e blocos que usam. Consulte [Escrever um bloco ou objetos num ficheiro próprio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN e REGENALL.** {{cmd:REGEN}} (`RE`) volta a desenhar o separador em que está a partir do desenho, {{cmd:REGENALL}} (`REA`) todos os separadores, painéis e desenhos abertos. Consulte [REGEN e REGENALL](topic:commands#regen-and-regenall).

### Texto e cotas

- **O texto mantém a formatação.** O texto de parágrafo de outros programas mantém as cores por palavra, o negrito e o itálico, o sublinhado, as frações empilhadas e as alturas: são desenhados no ecrã e em PDF, mantidos quando edita as palavras e guardados de volta. Consulte [Formatação dentro de texto de parágrafo de outros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Um gestor de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) cria, altera, compara e aplica estilos de cota com nome; alterar um estilo altera todas as cotas que o usam. {{cmd:DIMEDIT}} (`DED`) repõe o texto, escreve texto novo, roda-o ou inclina as linhas de extensão; {{cmd:DIMTEDIT}} move o texto para a esquerda, para a direita ou para o centro. Consulte [Estilos de cota com nome](topic:dimension-settings#named-dimension-styles).
- **As suas próprias escalas.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) acrescenta escalas como 1:75 às listas de escalas de viewport e de impressão; são guardadas no desenho (DWG e DXF 2000), e um desenho de outro programa traz a sua própria lista. Consulte [Escalas](topic:units-papers-scales#scales).
- **Texto noutros alfabetos.** Os ficheiros DXF guardados em páginas de código cirílicas, coreanas, chinesas, japonesas ou vietnamitas abrem-se agora com o seu texto, e o texto chinês, japonês e coreano imprime-se em PDF (a impressão vai buscar um tipo de letra maior na primeira vez que precisa de um). Consulte [Tipo de letra](topic:text#font).

### Impressão

- **Mais nas tabelas de estilos de impressão.** Para cada cor, uma tabela pode agora também definir um tipo de linha, o remate e a junção das linhas, e um estilo de preenchimento que imprime os preenchimentos sólidos como linhas de trama; a tabela tem a sua própria lista de espessuras de linha e uma escala de tipo de linha. Consulte [Tabelas de estilos de impressão](topic:plot-pdf#plot-style-tables).
- **Imprimir, e ficheiros PNG e SVG.** A caixa de diálogo Imprimir tem {{ui:Imprimir…}}, {{ui:Transferir PNG}} (300 dpi) e {{ui:Transferir SVG}}. No CadCraft Studio lista as impressoras do computador, o seu papel e o número de cópias. Consulte [Imprimir](topic:plot-pdf#print) e [Ficheiros de imagem e SVG](topic:plot-pdf#picture-and-svg-files).

### 3D e nuvens de pontos

- **Sólidos 3D de outros programas.** Os sólidos, regiões e corpos no espaço modelo de um desenho aparecem no separador 3D, só de leitura, e guardar como DWG escreve-os de volta sem alterações. As faces em superfícies que o CadCraft ainda não desenha são listadas, não adivinhadas. Consulte [Sólidos de outros programas](topic:3d-solids#solids-from-other-programs).
- **Registar várias digitalizações.** {{cmd:REGISTERSCANS}} (`REGSCAN`) coloca num único referencial digitalizações feitas de posições diferentes, por pares de pontos ou por coordenadas de alvos escritas, afina-as com ICP, guarda o registo num pequeno ficheiro de projeto e escreve a nuvem registada como um só ficheiro LAS ou E57. Consulte [Registar várias digitalizações numa só](topic:register-scans).
- **Exportação USD.** {{cmd:USDOUT}}, ou {{cmd:EXPORT3D}} › {{ui:USD}}, escreve os sólidos do separador 3D como `.usda`, `.usdc` ou `.usdz`. Consulte [Exportar o modelo 3D como USD](topic:usd).
- **Cálculos no separador 3D.** Onde as ferramentas do separador 3D pedem uma distância, pode escrever um cálculo, como na linha de comandos. Consulte [Aritmética num valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricar coisas

- **Enviar um desenho para um laser.** {{cmd:LASER}}, ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Laser…}}, abre um painel sobre o desenho: cada camada corta, marca, grava linhas, preenche formas, grava uma imagem ou não é enviada, com a sua potência, velocidade e passagens. A pré-visualização acompanha as suas edições, {{ui:Guardar G-code…}} escreve G-code em modo laser GRBL e, no Chrome ou no Edge, o painel pode enquadrar o trabalho e enviá-lo por USB. As definições são guardadas no desenho (DWG e DXF). Consulte [Enviar um desenho para um laser](topic:laser-cutting).
- **Símbolos de instalações de edifícios no suplemento Eletricidade.** Tomadas de dados, de telefone e de TV, interruptores de chave e temporizados, um termóstato, sinal de saída, detetores, botão de alarme e sirene, um ventilador, esquentador, fogão, posto de carregamento de veículos elétricos, contador de energia e subquadro, e símbolos de diferencial (RCD) e de disjuntor diferencial (RCBO). Um circuito pode levar um diferencial, o mapa do quadro tem uma coluna de diferencial, e as verificações assinalam circuitos de tomadas sem diferencial de 30 mA ou menos. É um lembrete de planeamento, não uma verificação regulamentar.
- **Um suplemento P&ID.** O P&ID desenha diagramas de processo: símbolos com pontos de ligação, linhas de processo e de sinal, etiquetas, números de linha, listas de linhas, equipamento, instrumentos e válvulas (CSV ou livro de folhas de cálculo) e verificações. Vem com o CadCraft e está desligado até o ligar em {{ui:Definições}} › {{ui:Geral}} › {{ui:Suplementos}}. É uma ajuda de desenho, não uma aprovação de engenharia, e os seus textos estão apenas em inglês por agora.

### Primeiros passos e o ecrã

- **Um primeiro desenho guiado.** {{cmd:TOUR}} (ou {{ui:Fazer a visita guiada}} no cartão inicial) conduz-o por seis passos no desenho real: uma linha, um círculo, um movimento, um corte, uma eliminação e uma cota. Arranca sozinho na primeira vez que o CadCraft se abre sem nada lá dentro. Consulte [Prefere ser guiado?](topic:getting-started#prefer-to-be-guided)
- **Uma folha de consulta e um mapa de comandos.** A [folha de consulta](topic:cheat-sheet) tem os 40 comandos do dia a dia numa só página, também em PDF para imprimir, e o [mapa de comandos](topic:command-map) lista os comandos com os seus nomes curtos, de A a Z.
- **A barra de ferramentas em qualquer lado.** {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Posição da barra de ferramentas}}: em cima (como antes), em baixo, à esquerda ou à direita, ou escreva {{cmd:TOOLBARDOCK}}. Consulte [Posição da barra de ferramentas](topic:settings#toolbar-position).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Linhas da barra de ferramentas}}: quebrar para caber, 2 linhas ou 1 linha, para a barra de ferramentas do CadCraft e para os estilos Drafting clássico e Friso. {{key:Shift+Ctrl+F1}} percorre-as, {{key:Ctrl+F1}} percorre o que os botões mostram, e {{cmd:TOOLBARROWS}} e {{cmd:TOOLBAR}} definem-nas. A sugestão inicial tem um botão de fechar. Obrigado ao GJoe2, que enviou isto como pull request. Consulte [Linhas da barra de ferramentas](topic:settings#toolbar-rows).

### No CadCraft Studio

- **Histórico.** {{cmd:HISTORY}} (`HIST`), ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Histórico…}}: as cópias que o Studio guarda quando abre e guarda um desenho, e as versões do desenho na nuvem quando o abriu a partir da nuvem. Abra ou restaure uma, ou compare duas, com o que foi acrescentado, removido e alterado mostrado a cores. Consulte [Histórico](topic:history).
- **acad.lsp e acaddoc.lsp.** Escolha uma pasta de suporte em {{cmd:APPLOAD}}: esses dois ficheiros são carregados quando o CadCraft arranca (o acaddoc.lsp de novo para cada novo separador de desenho), e `S::STARTUP` corre depois deles. Consulte [Carregar aplicações](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **A caixa de diálogo Imprimir na sua própria janela.** Um botão na sua barra de título move-a para uma janela que pode pôr noutro monitor. Consulte [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).

### Para assistentes de IA

- **Ficheiros por nome, em pastas que escolhe.** No CadCraft Studio, um assistente pode abrir, guardar e imprimir ficheiros por nome, e entregar a um comando o ficheiro que ele pede (INSERT a partir de um ficheiro, a exportação de COUNT, SAVEAS, PLOT), mas apenas dentro das pastas que acrescentar em {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Assistentes}} › {{ui:Pastas que podem utilizar}}. Consulte [Deixá-lo utilizar ficheiros em pastas que escolhe](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos chamadas.** Um assistente pode escrever uma linha de comando inteira de uma só vez, manter um comando aberto entre as suas chamadas, contar objetos por tipo e camada sem os listar, e colocar um bloco com os valores dos seus atributos num só passo.
- **Sem janela.** A linha de comandos `cadcraft` escreve impressões SVG e converte, imprime, verifica ou descreve muitos ficheiros de uma vez. O pacote MCP ainda não está publicado. Consulte [Trabalhar em ficheiros sem abrir o CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Alterado

- **Um trackpad desloca a vista.** Mova dois dedos num trackpad e a vista 2D acompanha-os; juntar os dedos e a roda do rato fazem zoom. Consulte [Rato, trackpad e toque](topic:mouse-trackpad-touch).
- **Os objetos OLE são mantidos.** Os objetos incorporados de um DXF aparecem como a sua imagem ou como uma moldura com etiqueta e são guardados de volta pelo DXF 2000. Os de um DWG são mantidos e escritos de volta quando guarda como DWG, mas ainda não são mostrados. Antes, perdiam-se ao guardar. Consulte [Objetos de outros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **As unidades de um desenho novo** seguem a unidade que marcar com estrela em {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}}.

## Corrigido

- Os layouts que se abriam vazios, ou perdiam um viewport e mostravam o modelo inteiro no seu lugar, abrem-se agora com os seus viewports verdadeiros. Um layout sem ligação ao seu conteúdo é mantido e o relatório de abertura di-lo.
- Os ficheiros DXF em páginas de código antigas mostravam texto cirílico e coreano ilegível. Agora leem-se bem.
- O texto de parágrafo de outros programas perdia a formatação quando era aberto e era guardado de volta sem formatação.

## Em todas as aplicações

- **Unidades.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para o comprimento, a área, o volume, o ângulo e a inclinação, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade própria). Desligue as unidades que nunca usa e saem das listas de unidades; marque uma com estrela e o trabalho novo começa nela. Um ficheiro mantém sempre a sua própria unidade. No CadCraft, a estrela define as unidades de um desenho novo quando é uma unidade que um desenho pode ter; a caixa {{ui:Unidades}} do próprio CadCraft ainda não segue os interruptores. Quando um desenho tem unidades, um comprimento que escrever pode levar o símbolo de qualquer unidade. Consulte [Unidades, valores escritos e as listas de unidades](common:unit-lists).
- **Uma disposição mais densa e painéis que se arrumam.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Densidade do esquema}} › {{ui:Compacta}} faz caber mais no ecrã (os ecrãs táteis e os telemóveis mantêm os seus botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para ancorar ou fazer flutuar o painel, largue-a na barra de outro painel para partilharem uma moldura como separadores, fixe-a para deslizar para a margem, ou oculte-a e traga-a de volta a partir da margem. Consulte [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo movem-se.** Arraste uma caixa de diálogo pela barra de título para a tirar da frente do desenho; volta a ficar onde a deixou. Faça duplo clique na barra de título para a centrar de novo. Consulte [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos resolvidos para o seu próprio assistente (arrumar um desenho, imprimir um conjunto, verificar desenhos, fazer perguntas a um modelo, totalizar uma medição de quantidades, experimentar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um reproduzido pelos nossos testes. As aplicações não contêm IA. Consulte [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Definições}} › {{ui:Geral}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** têm agora todas as palavras das aplicações, como rascunhos ainda não revistos por um falante nativo. Os tópicos de ajuda estão em inglês.
- **O CadCraft Studio** diz porque falhou uma verificação de atualizações (ainda não há ficheiro para o seu sistema, sem rede, assinatura inválida) em vez de apenas "Concluído", e deixa de trazer de volta um cartão Novidades que fechou até haver uma versão mais recente.

## Ainda não nesta versão

- **A 0.7 não está assinada digitalmente.** A assinatura, e o pacote da Microsoft Store, passaram para a 0.8 porque a validação do certificado ainda não chegou. Confirme o SHA-256 junto a cada ficheiro em getcadcraft.com/download. No Windows, se o SmartScreen parar o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Num Mac, na primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está numa loja de aplicações, e ainda não há versão para iPad nem iPhone.
- As listas de ângulo e de inclinação em {{ui:Unidades}} são guardadas, mas nenhuma caixa as lê ainda.
- Os objetos OLE de um DWG são mantidos mas não mostrados, e as imagens em metaficheiro dentro de objetos OLE não são desenhadas.
- A leitura de tabelas de estilos de impressão (ficheiros CTB) de outros programas aguarda um ficheiro de exemplo.
- O texto asiático antigo escrito como códigos `\M+` é lido, mas ainda não foi confrontado com um ficheiro de outro programa.
- Bases em PDF: as imagens dentro da página são mostradas no ecrã mas não impressas, a impressão de um assistente deixa as bases de fora, e a forma como outros programas leem o recorte e a escala guardados não foi verificada neles.
- Histórico: o CadCraft ainda não envia as suas gravações para a nuvem, pelo que as versões na nuvem são as guardadas a partir de outros dispositivos e da web. O Histórico existe apenas no CadCraft Studio.
- Ainda não se verificou se o Studio mantém a pasta de suporte do acad.lsp depois de reiniciar; se perguntar, escolha a pasta de novo em APPLOAD.
- O painel Laser ainda não foi experimentado num laser real: teste todas as definições em material de refugo. O CadCraft Studio não tem Web Serial, pelo que no Studio o painel só guarda G-code.
- O registo de digitalizações foi testado com digitalizações inventadas, ainda não com um conjunto de um scanner real.
- O deslocamento com dois dedos foi experimentado com eventos de trackpad simulados, ainda não num trackpad real.
- {{cmd:PEDIT}} não tem a opção Editar vértice (use grips ou Propriedades). Offset, aparar, prolongar, concordância, quebrar e unir ainda não aceitam splines; a altura (Z) de uma spline não é mantida.
- Ainda não é possível dar códigos de formatação a texto de parágrafo novo, e as impressões SVG mostram o texto formatado numa só cor.
- O Desenho inteiro do WBLOCK escreve apenas o modelo, não as folhas. O estilo de cota atual não é guardado no ficheiro: um desenho abre-se com Standard como atual.
- Os estilos de menu com friso ainda não têm listas de camadas, cores ou tipos de linha: utilize o painel {{ui:Camadas}} e {{ui:Propriedades}}.
- As nuvens de pontos continuam a não ser guardadas no desenho nem impressas, e os ficheiros E57 abrem-se até 6 milhões de pontos e 512 MB.
- Os ficheiros DWG guardados pelo CadCraft ainda não foram verificados no próprio AutoCAD.

Tudo o resto está em [Ainda não implementado](topic:not-built-yet).

---
title: Novidades da versão 0.7 (anteriores)
summary: PDF como sobreposição e importação de PDF, desenhos digitalizados com traçado automático, splines reais com SPLINE, SPLINEDIT e PEDIT, um gestor de estilos de cota, texto que mantém a formatação, WBLOCK e escalas próprias, sólidos 3D de outros programas, registo de digitalizações, um painel Laser, exportação USD, Histórico e impressão no CadCraft Studio, um primeiro desenho guiado, a barra de ferramentas em qualquer lado ou em menos linhas, e mais para assistentes de IA.
keywords: novidades 0.7, versão anterior, notas de lançamento, registo de alterações, alterações, 0.7, versão, novas funcionalidades, pdf, pdfattach, pdfimport, sobreposição, digitalização, scanattach, scantrace, traçado, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatação, wblock, scalelistedit, lista de escalas, acis, sólidos 3D, registerscans, registar digitalizações, icp, e57, las, laser, grbl, g-code, usd, usdout, histórico, versões, comparar, imprimir, impressora, png, svg, estilo de impressão, tipo de linha, visita guiada, resumo de comandos, mapa de comandos, posição da barra de ferramentas, linhas da barra de ferramentas, toolbardock, regen, regenall, trackpad, deslizar, página de códigos, cirílico, coreano, chinês, japonês, elétrico, rcd, p&id, pid, acad.lsp, acaddoc.lsp, pasta de suporte, assistentes, mcp, unidades, português
from: d07ca034
---

Eis o que mudou no CadCraft 0.7, em comparação com a 0.6. Grande parte foi pedida no Discord. A lista está agrupada por área, com o mais importante primeiro.

## Novidades

### PDF e desenhos digitalizados

- **Colocar uma página PDF por baixo do desenho.** {{cmd:PDFATTACH}} (`PDFATT`) coloca uma página no seu tamanho real ou numa escala que escreva. Use o snap nas suas linhas, esbata-a, torne-a monocromática ({{cmd:PDFADJUST}}), recorte-a ({{cmd:PDFCLIP}}) e ative ou desative as camadas próprias do PDF ({{cmd:PDFLAYERS}}). Imprime-se como linhas, preenchimentos e texto, e um DWG ou DXF 2000 guarda-a como uma ligação ao ficheiro. Abrir um PDF com {{ui:Abrir}} pergunta se deve anexá-lo ou importá-lo. Veja [Sobreposições PDF e importação de PDF](topic:pdf-underlay).
- **Transformar uma página PDF em objetos de desenho.** {{cmd:PDFIMPORT}} (`PDFIM`) cria linhas, polilinhas, círculos, arcos, tramas sólidas e texto em camadas com o nome do PDF, no tamanho real, numa escala escrita, ou escalada a partir de dois pontos e de uma distância real, num só passo de anulação. Veja [Importar uma página](topic:pdf-underlay#import-a-page).
- **Desenhos digitalizados.** {{cmd:SCANATTACH}} traz um PNG, JPEG ou TIFF (uma página ou todas) ou uma página PDF que seja uma imagem. Depois, escale-a a partir de dois pontos ({{cmd:SCANSCALE}}), alinhe-a ({{cmd:SCANALIGN}}), endireite-a pelas suas linhas longas ({{cmd:SCANDESKEW}}), torne-a a preto e branco e remova os pontos ({{cmd:SCANCLEAN}}), recorte-a e apague partes dela. Cada passo é um passo de anulação, e o ficheiro original é mantido. Veja [Desenhos digitalizados e o traçado](topic:scanned-drawings).
- **Traçar uma digitalização em linhas e arcos.** {{cmd:SCANTRACE}} desenha as linhas da digitalização como linhas e arcos numa camada nova, SCAN-TRACE, com a tolerância que definir, e deixa o texto e as tramas como estão. O relatório diz o que criou e o que deixou, e não garante que o resultado esteja certo: verifique-o com a folha. {{cmd:RASTERSNAP}} permite que os snaps a objetos encontrem as extremidades, os cantos e os cruzamentos da digitalização. Nada é enviado para lado nenhum e não é usado nenhum modelo treinado. Veja [O traçado](topic:scanned-drawings#the-trace).

### Desenho e edição

- **Splines reais.** {{cmd:SPLINE}} (`SPL`) desenha uma curva por pontos ou a partir de pontos de controlo (grau 1 a 5), com tangentes nas extremidades; {{cmd:SPLINEDIT}} (`SPE`) move, acrescenta e apaga pontos de passagem ou de controlo, define pesos, abre, fecha, inverte, ou converte uma spline numa polilinha. As splines dos ficheiros DWG e DXF abrem como splines, e DWG e DXF 2000 guardam-nas como splines. Veja [Splines e polilinhas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) fecha e abre polilinhas, une-lhes linhas e arcos, define uma só largura, ajusta uma curva pelos vértices ou uma spline ao longo deles, e retira-a com Decurve, inverte e edita várias de uma vez. Veja [Editar uma polilinha](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escreve um bloco, alguns objetos ou o desenho inteiro para um DWG ou DXF novo, que contém apenas as camadas, estilos e blocos que usam. Veja [Escrever um bloco ou objetos para um ficheiro próprio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN e REGENALL.** {{cmd:REGEN}} (`RE`) redesenha o separador em que está a partir do desenho, e {{cmd:REGENALL}} (`REA`) faz o mesmo para todos os separadores, painéis e desenhos abertos. Veja [REGEN e REGENALL](topic:commands#regen-and-regenall).

### Texto e cotas

- **O texto mantém a formatação.** O texto de parágrafo de outros programas mantém as cores por palavra, o negrito e o itálico, o sublinhado, as frações empilhadas e as alturas: é desenhado no ecrã e nos PDF, mantém-se quando edita as palavras, e é guardado de volta. Veja [Formatação dentro de texto de parágrafo de outros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Um gestor de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) cria, altera, compara e aplica estilos de cota com nome; alterar um estilo altera todas as cotas que o usam. {{cmd:DIMEDIT}} (`DED`) repõe o texto, escreve texto novo, roda-o ou inclina as linhas de extensão; {{cmd:DIMTEDIT}} move o texto para a esquerda, para a direita ou para o centro. Veja [Estilos de cota com nome](topic:dimension-settings#named-dimension-styles).
- **As suas próprias escalas.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) acrescenta escalas como 1:75 às listas de escalas das viewports e da impressão. Ficam guardadas no desenho (DWG e DXF 2000), e um desenho de outro programa traz a sua própria lista. Veja [Escalas](topic:units-papers-scales#scales).
- **Texto noutros alfabetos.** Os ficheiros DXF guardados nas páginas de códigos cirílico, coreano, chinês, japonês ou vietnamita abrem agora com o seu texto, e o texto em chinês, japonês e coreano imprime-se em PDF (a impressão obtém um tipo de letra maior na primeira vez que o precisa). Veja [Tipo de letra](topic:text#font).

### Impressão

- **Mais nas tabelas de estilos de impressão.** Para cada cor, uma tabela pode agora também definir um tipo de linha, o fim e a junção da linha, e um estilo de preenchimento que imprime os preenchimentos sólidos como linhas de trama. A tabela tem a sua própria lista de espessuras de linha e uma escala de tipo de linha. Veja [Tabelas de estilos de impressão](topic:plot-pdf#plot-style-tables).
- **Impressão, e ficheiros PNG e SVG.** A caixa de diálogo de impressão tem {{ui:Imprimir…}}, {{ui:Transferir PNG}} (300 dpi) e {{ui:Transferir SVG}}. No CadCraft Studio lista as impressoras do computador, o seu papel e o número de cópias. Veja [Imprimir](topic:plot-pdf#print) e [Ficheiros de imagem e SVG](topic:plot-pdf#picture-and-svg-files).

### 3D e nuvens de pontos

- **Sólidos 3D de outros programas.** Sólidos, regiões e corpos no espaço do modelo de um desenho aparecem no separador 3D, só para leitura, e guardar como DWG escreve-os de volta sem alterações. As faces em superfícies que o CadCraft ainda não desenha são listadas, não adivinhadas. Veja [Sólidos de outros programas](topic:3d-solids#solids-from-other-programs).
- **Registar várias digitalizações.** {{cmd:REGISTERSCANS}} (`REGSCAN`) coloca digitalizações feitas de posições diferentes num só referencial, por pares de pontos ou por coordenadas de destino escritas, refina-as com ICP, guarda o registo como um pequeno ficheiro de projeto, e escreve a nuvem registada como um único ficheiro LAS ou E57. Veja [Registar várias digitalizações num só](topic:register-scans).
- **Exportação USD.** {{cmd:USDOUT}}, ou {{cmd:EXPORT3D}} › {{ui:USD}}, escreve os sólidos do separador 3D como `.usda`, `.usdc` ou `.usdz`. Veja [Exportar o modelo 3D como USD](topic:usd).
- **Cálculos no separador 3D.** Onde as ferramentas do separador 3D pedem uma distância, pode escrever um cálculo, como na linha de comandos. Veja [Aritmética num valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabrico

- **Enviar um desenho para um laser.** {{cmd:LASER}}, ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Laser…}}, abre um painel sobre o desenho: cada camada corta, risca, grava linhas, preenche formas, grava uma imagem ou não é enviada, com a sua potência, velocidade e passagens. A pré-visualização segue as suas edições, {{ui:Guardar G-code…}} escreve G-code do modo laser GRBL, e no Chrome ou no Edge o painel pode enquadrar o trabalho e enviá-lo por USB. As definições ficam guardadas no desenho (DWG e DXF). Veja [Enviar um desenho para um laser](topic:laser-cutting).
- **Símbolos de instalações prediais no suplemento Elétrico.** Tomadas de dados, de telefone e de TV, interruptores de chave e temporizados, um termóstato, sinalização de saída, detetores, botão de alarme e sirene, um ventilador, um esquentador, um fogão, um ponto de carregamento de veículos elétricos, um contador de energia e um subquadro, e símbolos RCD e RCBO. Um circuito pode ter um RCD, o mapa do quadro tem uma coluna RCD, e as verificações indicam os circuitos de tomadas sem RCD de 30 mA ou menos. É um lembrete de planeamento, não uma verificação regulamentar.
- **Um suplemento P&ID.** P&ID desenha diagramas de processo: símbolos com pontos de ligação, linhas de processo e de sinal, etiquetas, números de linha, listas de linhas, de equipamentos, de instrumentos e de válvulas (CSV ou uma folha de cálculo), e verificações. Vem com o CadCraft e está desativado até o ativar em {{ui:Definições}} › {{ui:Geral}} › {{ui:Suplementos}}. É uma ajuda de desenho, não uma aprovação de engenharia, e os seus textos estão, por agora, só em inglês.

### Primeiros passos e o ecrã

- **Um primeiro desenho guiado.** {{cmd:TOUR}} (ou {{ui:Fazer a visita guiada}} no cartão inicial) conduz em seis passos no desenho real: uma linha, um círculo, um mover, um aparar, um apagar e uma cota. Começa sozinho na primeira vez que o CadCraft abre sem nada. Veja [Prefere ser guiado?](topic:getting-started#prefer-to-be-guided)
- **Resumo de comandos e mapa de comandos.** O [resumo de comandos](topic:cheat-sheet) tem os 40 comandos do dia a dia numa só página, também em PDF para imprimir, e o [mapa de comandos](topic:command-map) lista os comandos com os seus nomes curtos, de A a Z.
- **A barra de ferramentas em qualquer lado.** {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Posição da barra de ferramentas}}: em cima (como antes), em baixo, à esquerda ou à direita, ou escreva {{cmd:TOOLBARDOCK}}. Veja [Posição da barra de ferramentas](topic:settings#toolbar-position).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Linhas da barra de ferramentas}}: ajustar à largura, 2 linhas ou 1 linha, para a barra do CadCraft e para os estilos Drafting clássico e Friso. {{key:Shift+Ctrl+F1}} percorre-as, {{key:Ctrl+F1}} percorre o que os botões mostram, e {{cmd:TOOLBARROWS}} e {{cmd:TOOLBAR}} definem-nas. A dica inicial tem um botão de fechar. Obrigado ao GJoe2, que enviou isto como pull request. Veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows).

### No CadCraft Studio

- **Histórico.** {{cmd:HISTORY}} (`HIST`), ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Histórico…}}: as cópias que o Studio mantém quando abre e guarda um desenho, e as versões na nuvem do desenho quando o abriu a partir da nuvem. Abra ou restaure uma, ou compare duas, com o que foi acrescentado, removido e alterado mostrado a cores. Veja [Histórico](topic:history).
- **acad.lsp e acaddoc.lsp.** Escolha uma pasta de suporte em {{cmd:APPLOAD}}: esses dois ficheiros carregam-se quando o CadCraft arranca (o acaddoc.lsp de novo para cada novo separador de desenho), e `S::STARTUP` executa-se depois deles. Veja [Carregar aplicações](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **A caixa de diálogo de impressão na sua própria janela.** Um botão na barra de título move-a para uma janela que pode colocar noutro monitor. Veja [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).

### Para assistentes de IA

- **Ficheiros pelo nome, em pastas que escolher.** No CadCraft Studio um assistente pode abrir, guardar e imprimir ficheiros pelo nome, e entregar a um comando o ficheiro que ele pede (INSERT a partir de um ficheiro, a exportação de COUNT, SAVEAS, PLOT), mas só dentro das pastas que acrescentar em {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Assistentes}} › {{ui:Pastas que podem utilizar}}. Veja [Deixar usar ficheiros em pastas que escolher](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos chamadas.** Um assistente pode escrever uma linha de comandos inteira de uma só vez, manter um comando aberto entre as suas chamadas, contar objetos por tipo e camada sem os listar, e colocar um bloco com os valores dos seus atributos num só passo.
- **Sem janela.** A linha de comandos `cadcraft` gera ficheiros SVG de impressão e converte, imprime, verifica ou descreve muitos ficheiros de uma vez. O pacote MCP ainda não foi publicado. Veja [Trabalhar com ficheiros sem abrir o CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Alterações

- **Um trackpad desloca a vista.** Mova dois dedos sobre o trackpad e a vista 2D segue-os; o gesto de pinça e a roda do rato fazem zoom. Veja [Rato, trackpad e toque](topic:mouse-trackpad-touch).
- **Os objetos OLE são mantidos.** Os objetos incorporados de um DXF aparecem como a sua imagem ou como uma moldura com etiqueta, e são guardados de volta pelo DXF 2000. Os de um DWG são mantidos e escritos de volta quando guarda como DWG, mas ainda não são mostrados. Antes, perdiam-se ao guardar. Veja [Objetos de outros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **As unidades de um desenho novo** seguem a unidade que assinalar com uma estrela em {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}}.

## Corrigido

- Os layouts que abriam vazios, ou que perdiam uma viewport e mostravam o modelo inteiro no seu lugar, abrem agora com as suas viewports reais. Um layout sem ligação ao seu conteúdo é mantido, e o relatório de abertura indica-o.
- Os ficheiros DXF em páginas de códigos antigas mostravam texto cirílico e coreano desfigurado. Agora lêem-se bem.
- O texto de parágrafo de outros programas perdia a formatação ao ser aberto, e era guardado de volta sem formatação.

## Em todas as aplicações

- **Unidades.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para cada uma: comprimento, área, volume, ângulo e declive, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade própria). Desative as unidades que nunca usa e saem das listas de unidades; assinale uma com uma estrela e os trabalhos novos começam nela. Um ficheiro mantém sempre a sua própria unidade. No CadCraft, a estrela define as unidades de um desenho novo quando é uma unidade que um desenho pode ter; a caixa {{ui:Unidades}} do próprio CadCraft ainda não segue os interruptores. Quando um desenho já tem unidades, um comprimento que escreva pode ter a marca de qualquer unidade. Veja [Unidades, valores escritos e listas de unidades](common:unit-lists).
- **Um esquema mais denso e painéis que se arrumam.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Densidade do esquema}} › {{ui:Compacta}} cabe mais no ecrã (os ecrãs tácteis e os telemóveis mantêm os botões grandes). Cada painel lateral tem uma barra de título estreita: arraste-a para ancorar ou flutuar o painel, largue-a sobre a barra de outro painel para partilhar uma moldura em separadores, fixe-a para que o painel deslize para a margem, ou oculte-o e traga-o de volta a partir da margem. Veja [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **Caixas de diálogo que se movem.** Arraste uma caixa de diálogo pela barra de título para fora do caminho do desenho; volta ao sítio onde a deixou. Clique duas vezes na barra de título para a centrar de novo. Veja [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez exemplos práticos para o seu próprio assistente (arrumar um desenho, imprimir um conjunto, verificar desenhos, fazer perguntas a um modelo, somar uma medição de quantidades, experimentar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um repetido pelos nossos testes. As aplicações não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Definições}} › {{ui:Geral}} › {{ui:Idioma}}. O **Português (Portugal)**, o **Português (Brasil)**, o **Español (México)** e o **Bahasa Indonesia** têm agora todas as palavras das aplicações, como rascunhos ainda não revistos por um falante nativo. Os tópicos de ajuda estão em inglês.
- **CadCraft Studio** diz porque falhou uma verificação de atualização (ainda não há ficheiro para o seu sistema, sem rede, uma assinatura inválida) em vez de apenas «Concluído», e deixa de voltar a mostrar um cartão de Novidades que fechou, até haver uma versão mais recente.

## Ainda não nesta versão

- **A versão 0.7 não tem assinatura de código.** A assinatura e o pacote para a Microsoft Store passaram para a 0.8, porque a validação do certificado ainda não chegou. Confirme o SHA-256 junto de cada ficheiro em getcadcraft.com/download. No Windows, se o SmartScreen parar o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Num Mac, na primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está numa loja de aplicações, e ainda não há versão para iPad nem para iPhone.
- A lista de ângulos e declives em {{ui:Unidades}} é guardada, mas nenhuma caixa a lê ainda.
- Os objetos OLE de um DWG são mantidos mas não mostrados, e as imagens em metaficheiro dentro de objetos OLE não são desenhadas.
- A leitura de tabelas de estilos de impressão (ficheiros CTB) de outros programas aguarda um ficheiro de exemplo.
- O texto asiático mais antigo escrito com códigos `\M+` é lido, mas ainda não foi verificado com um ficheiro de outro programa.
- As sobreposições PDF: as imagens dentro da página são mostradas no ecrã mas não impressas, a impressão feita por um assistente deixa as sobreposições de fora, e não foi verificado como outros programas leem nelas o recorte e a escala guardados.
- Histórico: o CadCraft ainda não envia para a nuvem o que guarda, pelo que as versões na nuvem são as guardadas a partir de outros dispositivos e da web. O Histórico existe só no CadCraft Studio.
- Ainda não foi verificado se o Studio mantém a pasta de suporte acad.lsp depois de reiniciar; se o programa o pedir, escolha a pasta outra vez em APPLOAD.
- O painel Laser ainda não foi testado numa máquina de laser real: teste todas as definições em material de sobra. O CadCraft Studio não tem Web Serial, pelo que, no Studio, o painel só guarda G-code.
- Registar digitalizações foi testado com digitalizações inventadas, ainda não com um conjunto de um scanner real.
- A deslocação com dois dedos foi testada com eventos simulados de trackpad, ainda não num trackpad real.
- {{cmd:PEDIT}} não tem a opção Edit vertex (use os grips ou as Propriedades). Offset, aparar, prolongar, concordância, quebrar e unir ainda não aceitam splines; a altura (Z) de uma spline não é mantida.
- O novo texto de parágrafo ainda não pode receber códigos de formatação, e as impressões SVG mostram o texto formatado numa só cor.
- A opção Entire drawing do WBLOCK escreve só o modelo, não as folhas. O estilo de cota atual não é guardado no ficheiro: um desenho abre com Standard como atual.
- Os menus de estilo de friso ainda não têm listas de camadas, de cores nem de tipos de linha: use o painel {{ui:Camadas}} e as {{ui:Propriedades}}.
- As nuvens de pontos ainda não são guardadas no desenho nem impressas, e os ficheiros E57 abrem até 6 milhões de pontos e 512 MB.
- Os ficheiros DWG guardados pelo CadCraft ainda não foram verificados no próprio AutoCAD.

Tudo o resto está em [Ainda não implementado](topic:not-built-yet).

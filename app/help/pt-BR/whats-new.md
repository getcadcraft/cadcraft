---
title: Novidades da versão 0.7
summary: Referências de fundo e importação de PDF, desenhos digitalizados com traçado automático, splines de verdade com SPLINE, SPLINEDIT e PEDIT, um gerenciador de estilos de cota, texto que mantém a formatação, WBLOCK e escalas próprias, sólidos 3D de outros programas, registro de varreduras, um painel Laser, exportação USD, Histórico e impressão no CadCraft Studio, um primeiro desenho guiado, a barra de ferramentas em qualquer lado ou em menos linhas e mais recursos para assistentes de IA.
keywords: novidades, notas de versão, lista de alterações, mudanças, 0.7, versão, novos recursos, pdf, pdfattach, pdfimport, referência de fundo, varredura, scanattach, scantrace, traçado, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatação, wblock, scalelistedit, lista de escalas, acis, sólidos 3d, registerscans, registrar varreduras, icp, e57, las, laser, grbl, g-code, usd, usdout, histórico, versões, comparar, imprimir, impressora, png, svg, tabela de estilos de plotagem, tipo de linha, tour, folha de consulta, mapa de comandos, posição da barra de ferramentas, linhas da barra de ferramentas, toolbardock, regen, regenall, trackpad, deslizar, página de código, cirílico, coreano, chinês, japonês, elétrica, dr, p&id, pid, acad.lsp, acaddoc.lsp, pasta de suporte, assistentes, mcp, unidades, português
from: b9258ca6
---

Isto é o que mudou no CadCraft 0.7, em comparação com o 0.6. Boa parte foi pedida no Discord. A lista está agrupada por área, com o mais importante primeiro.

## Novidades

### PDFs e desenhos digitalizados

- **Coloque uma página de PDF sob o desenho.** {{cmd:PDFATTACH}} (`PDFATT`) coloca uma página no tamanho real ou em uma escala que você digita. Use snap nas linhas dela, atenue-a, deixe-a monocromática ({{cmd:PDFADJUST}}), recorte-a ({{cmd:PDFCLIP}}) e alterne as camadas do próprio PDF ({{cmd:PDFLAYERS}}). Ela é plotada como linhas, preenchimentos e texto, e um DWG ou DXF 2000 a mantém como um vínculo para o arquivo. Abrir um PDF com {{ui:Abrir}} pergunta se você quer anexá-lo ou importá-lo. Veja [Referências de fundo em PDF e importação de PDF](topic:pdf-underlay).
- **Transforme uma página de PDF em objetos de desenho.** {{cmd:PDFIMPORT}} (`PDFIM`) cria linhas, polilinhas, círculos, arcos, hachuras sólidas e texto em camadas com o nome do PDF, no tamanho real, em uma escala digitada ou escalonados a partir de dois pontos e uma distância real, em um só passo de desfazer. Veja [Importe uma página](topic:pdf-underlay#import-a-page).
- **Desenhos digitalizados.** {{cmd:SCANATTACH}} traz um PNG, JPEG ou TIFF (uma página ou todas) ou uma página de PDF que é uma imagem. Depois, escale-a a partir de dois pontos ({{cmd:SCANSCALE}}), alinhe-a ({{cmd:SCANALIGN}}), endireite-a pelas próprias linhas longas ({{cmd:SCANDESKEW}}), deixe-a em preto e branco e remova manchas ({{cmd:SCANCLEAN}}), recorte-a e apague partes dela. Cada passo é um passo de desfazer e o arquivo original é mantido. Veja [Desenhos digitalizados e o traçado](topic:scanned-drawings).
- **Trace uma varredura em linhas e arcos.** {{cmd:SCANTRACE}} desenha as linhas da varredura como linhas e arcos em uma camada nova, SCAN-TRACE, com uma tolerância que você define, e deixa texto e hachuras como estão. O relatório diz o que ele fez e o que deixou, e não afirma que o resultado está certo: confira com a folha. {{cmd:RASTERSNAP}} permite que os snaps de objeto encontrem extremidades, cantos e cruzamentos da varredura. Nada é enviado a lugar nenhum e nenhum modelo treinado é usado. Veja [O traçado](topic:scanned-drawings#the-trace).

### Desenhar e editar

- **Splines de verdade.** {{cmd:SPLINE}} (`SPL`) desenha uma curva por pontos ou a partir de pontos de controle (grau 1 a 5), com tangentes nas pontas; {{cmd:SPLINEDIT}} (`SPE`) move, adiciona e exclui pontos de ajuste ou de controle, define pesos, abre, fecha, inverte ou transforma uma spline em uma polilinha. Splines de arquivos DWG e DXF abrem como splines, e DWG e DXF 2000 as salvam como splines. Veja [Splines e polilinhas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) fecha e abre polilinhas, une linhas e arcos a elas, define uma largura única, ajusta uma curva pelos vértices ou uma spline ao longo deles e desfaz isso com Decurve, inverte e edita várias de uma vez. Veja [Edite uma polilinha](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) grava um bloco, alguns objetos ou o desenho inteiro em um DWG ou DXF novo que contém só as camadas, os estilos e os blocos que eles usam. Veja [Grave um bloco ou objetos em um arquivo próprio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN e REGENALL.** {{cmd:REGEN}} (`RE`) redesenha a guia em que você está a partir do desenho, {{cmd:REGENALL}} (`REA`) todas as guias, painéis e desenhos abertos. Veja [REGEN e REGENALL](topic:commands#regen-and-regenall).

### Texto e cotas

- **O texto mantém a formatação.** Texto de parágrafo de outros programas mantém as cores por palavra, negrito e itálico, sublinhado, frações empilhadas e alturas: eles são desenhados na tela e em PDFs, mantidos quando você edita as palavras e salvos de volta. Veja [Formatação dentro de texto de parágrafo de outros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Um gerenciador de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) cria, altera, compara e aplica estilos de cota nomeados; alterar um estilo altera toda cota que o usa. {{cmd:DIMEDIT}} (`DED`) restaura o texto, digita um texto novo, gira-o ou inclina as linhas de extensão; {{cmd:DIMTEDIT}} move o texto para a esquerda, para a direita ou para o centro. Veja [Estilos de cota nomeados](topic:dimension-settings#named-dimension-styles).
- **Suas próprias escalas.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) acrescenta escalas como 1:75 às listas de escala de viewport e de plotagem; elas são salvas no desenho (DWG e DXF 2000), e um desenho de outro programa traz a própria lista. Veja [Escalas](topic:units-papers-scales#scales).
- **Texto em outros alfabetos.** Arquivos DXF salvos em páginas de código cirílicas, coreanas, chinesas, japonesas ou vietnamitas agora abrem com o texto, e o texto chinês, japonês e coreano é impresso em PDFs (a plotagem busca uma fonte maior na primeira vez em que precisa de uma). Veja [Fonte](topic:text#font).

### Plotar e imprimir

- **Mais nas tabelas de estilos de plotagem.** Para cada cor, uma tabela agora também pode definir um tipo de linha, a extremidade e a junção da linha e um estilo de preenchimento que imprime preenchimentos sólidos como linhas de hachura; a tabela tem a própria lista de espessuras de linha e uma escala de tipo de linha. Veja [Tabelas de estilos de plotagem](topic:plot-pdf#plot-style-tables).
- **Imprimir, e arquivos PNG e SVG.** A caixa de diálogo Plotar tem {{ui:Imprimir…}}, {{ui:Baixar PNG}} (300 dpi) e {{ui:Baixar SVG}}. No CadCraft Studio ela lista as impressoras do computador, o papel delas e o número de cópias. Veja [Imprimir](topic:plot-pdf#print) e [Arquivos de imagem e SVG](topic:plot-pdf#picture-and-svg-files).

### 3D e nuvens de pontos

- **Sólidos 3D de outros programas.** Sólidos, regiões e corpos no espaço modelo de um desenho aparecem na guia 3D, somente leitura, e salvar como DWG os grava de volta sem alteração. Faces em superfícies que o CadCraft ainda não desenha são listadas, não adivinhadas. Veja [Sólidos de outros programas](topic:3d-solids#solids-from-other-programs).
- **Registre várias varreduras.** {{cmd:REGISTERSCANS}} (`REGSCAN`) coloca varreduras feitas de posições diferentes em um só referencial, por pares de pontos ou coordenadas de alvos digitadas, refina-as com ICP, salva o registro em um pequeno arquivo de projeto e grava a nuvem registrada como um só arquivo LAS ou E57. Veja [Registre várias varreduras em uma](topic:register-scans).
- **Exportação USD.** {{cmd:USDOUT}}, ou {{cmd:EXPORT3D}} › {{ui:USD}}, grava os sólidos da guia 3D como `.usda`, `.usdc` ou `.usdz`. Veja [Exporte o modelo 3D como USD](topic:usd).
- **Cálculos na guia 3D.** Onde as ferramentas da guia 3D pedem uma distância, você pode digitar um cálculo, como na linha de comando. Veja [Aritmética em um valor digitado](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricação

- **Envie um desenho a um laser.** {{cmd:LASER}}, ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Laser…}}, abre um painel sobre o desenho: cada camada corta, marca, grava linhas, preenche formas, grava uma imagem ou não é enviada, com a sua potência, velocidade e passadas. A visualização acompanha suas edições, {{ui:Salvar G-code…}} grava G-code do modo laser do GRBL e, no Chrome ou no Edge, o painel pode enquadrar o trabalho e enviá-lo por USB. As configurações são salvas no desenho (DWG e DXF). Veja [Envie um desenho a um laser](topic:laser-cutting).
- **Símbolos de instalações prediais no complemento Elétrica.** Tomadas de dados, telefone e TV, interruptores de chave e de tempo, um termostato, placa de saída, detectores, acionador manual e sirene, um ventilador, aquecedor de água, fogão, ponto de carregamento de veículo elétrico, medidor de energia e subquadro, e símbolos de DR e de disjuntor DR. Um circuito pode levar um DR, a tabela do quadro tem uma coluna de DR, e as verificações apontam circuitos de tomadas sem DR de 30 mA ou menos. É um lembrete de planejamento, não uma verificação de norma.
- **Um complemento P&ID.** O P&ID desenha diagramas de processo: símbolos com pontos de conexão, linhas de processo e de sinal, tags, números de linha, listas de linhas, equipamentos, instrumentos e válvulas (CSV ou planilha) e verificações. Ele vem com o CadCraft e fica desligado até você ligá-lo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Complementos}}. É um auxílio de desenho, não uma aprovação de engenharia, e por ora as palavras dele estão só em inglês.

### Primeiros passos e a tela

- **Um primeiro desenho guiado.** {{cmd:TOUR}} (ou {{ui:Fazer o tour}} no cartão inicial) leva você por seis passos no desenho real: uma linha, um círculo, um deslocamento, um aparar, um apagar e uma cota. Ele começa sozinho na primeira vez que o CadCraft abre sem nada dentro. Veja [Prefere ser guiado?](topic:getting-started#prefer-to-be-guided)
- **Uma folha de consulta rápida e um mapa de comandos.** A [folha de consulta rápida](topic:cheat-sheet) traz os 40 comandos do dia a dia em uma página, também em PDF para imprimir, e o [mapa de comandos](topic:command-map) lista os comandos com seus nomes curtos, de A a Z.
- **A barra de ferramentas em qualquer lado.** {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Posição da barra de ferramentas}}: em cima (como antes), embaixo, à esquerda ou à direita, ou digite {{cmd:TOOLBARDOCK}}. Veja [Posição da barra de ferramentas](topic:settings#toolbar-position).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Linhas da barra de ferramentas}}: quebrar para caber, 2 linhas ou 1 linha, para a barra de ferramentas do CadCraft e para os estilos Drafting clássico e Faixa de opções. {{key:Shift+Ctrl+F1}} percorre as opções, {{key:Ctrl+F1}} percorre o que os botões mostram, e {{cmd:TOOLBARROWS}} e {{cmd:TOOLBAR}} as definem. A dica inicial tem um botão de fechar. Obrigado a GJoe2, que enviou isto como um pull request. Veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows).

### No CadCraft Studio

- **Histórico.** {{cmd:HISTORY}} (`HIST`), ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Histórico…}}: as cópias que o Studio guarda quando você abre e salva um desenho, e as versões na nuvem do desenho quando você o abriu da nuvem. Abra ou restaure uma, ou compare duas, com o que foi adicionado, removido e alterado mostrado em cores. Veja [Histórico](topic:history).
- **acad.lsp e acaddoc.lsp.** Escolha uma pasta de suporte em {{cmd:APPLOAD}}: esses dois arquivos são carregados quando o CadCraft inicia (acaddoc.lsp de novo para cada guia de desenho nova), e `S::STARTUP` roda depois deles. Veja [Carregar aplicativos](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **A caixa de diálogo Plotar em uma janela própria.** Um botão na barra de título a move para uma janela que você pode colocar em outro monitor. Veja [Mova uma caixa de diálogo](common:arrange-panels#move-a-dialog).

### Para assistentes de IA

- **Arquivos pelo nome, em pastas que você escolhe.** No CadCraft Studio, um assistente pode abrir, salvar e plotar arquivos pelo nome e entregar a um comando o arquivo que ele pede (INSERT a partir de um arquivo, a exportação do COUNT, SAVEAS, PLOT), mas só dentro das pastas que você adiciona em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Assistentes}} › {{ui:Pastas que os assistentes podem usar}}. Veja [Deixe-o usar arquivos em pastas que você escolhe](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos chamadas.** Um assistente pode digitar uma linha de comando inteira de uma vez, manter um comando aberto entre as chamadas, contar objetos por tipo e camada sem listá-los e colocar um bloco com seus valores de atributo em um só passo.
- **Sem janela.** A linha de comando `cadcraft` grava plotagens em SVG e converte, plota, verifica ou descreve muitos arquivos de uma vez. O pacote MCP ainda não foi publicado. Veja [Trabalhe com arquivos sem abrir o CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Alterado

- **Um trackpad faz pan.** Mova dois dedos no trackpad e a vista 2D os acompanha; o gesto de pinça e a roda do mouse dão zoom. Veja [Mouse, trackpad e toque](topic:mouse-trackpad-touch).
- **Objetos OLE são mantidos.** Os objetos incorporados de um DXF aparecem como a imagem deles ou como uma moldura com rótulo e são salvos de volta pelo DXF 2000. Os de um DWG são mantidos e gravados de volta quando você salva como DWG, mas ainda não são exibidos. Antes, eram perdidos ao salvar. Veja [Objetos de outros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **As unidades de um desenho novo** seguem a unidade que você marca com estrela em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}}.

## Corrigido

- Layouts que abriam vazios, ou perdiam um viewport e mostravam o modelo inteiro no lugar dele, agora abrem com os viewports reais. Um layout sem vínculo com o seu conteúdo é mantido e o relatório de abertura avisa.
- Arquivos DXF em páginas de código mais antigas mostravam texto cirílico e coreano embaralhado. Agora são lidos corretamente.
- O texto de parágrafo de outros programas perdia a formatação ao ser aberto e era salvo de volta sem ela.

## Em todos os aplicativos

- **Unidades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para cada um de comprimento, área, volume, ângulo e declividade, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade própria). Desligue as unidades que você nunca usa e elas saem das listas de unidades; marque uma com estrela e o trabalho novo começa nela. Um arquivo sempre mantém a própria unidade. No CadCraft, a estrela define as unidades de um desenho novo quando é uma unidade que um desenho pode carregar; a caixa {{ui:Unidades}} do próprio CadCraft ainda não segue as chaves. Quando um desenho tem unidades, um comprimento que você digita pode levar a marca de qualquer unidade. Veja [Unidades, valores digitados e as listas de unidades](common:unit-lists).
- **Um layout mais denso e painéis que se recolhem.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Densidade do layout}} › {{ui:Compacto}} cabe mais na tela (telas de toque e celulares mantêm os botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para acoplar ou flutuar o painel, solte-a na barra de outro painel para dividir uma moldura como guias, fixe-o para deslizar até a borda, ou oculte-o e traga-o de volta pela borda. Veja [Organize os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo se movem.** Arraste uma caixa de diálogo pela barra de título para tirá-la da frente do desenho; ela volta onde você a deixou. Clique duas vezes na barra de título para centralizá-la de novo. Veja [Mova uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos resolvidos para o seu próprio assistente (arrumar um desenho, plotar um conjunto, verificar desenhos, fazer perguntas a um modelo, totalizar um levantamento de quantitativos, testar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um reexecutado pelos nossos testes. Os aplicativos não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Idioma}}. Ele, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** agora têm todas as palavras dos aplicativos, como rascunhos ainda não revisados por um falante nativo. Os tópicos de ajuda ainda estão, em sua maioria, em inglês.
- **O CadCraft Studio** diz por que uma verificação de atualização falhou (ainda não há arquivo para o seu sistema, sem rede, assinatura inválida) em vez de apenas "Concluído", e deixa de trazer de volta um cartão Novidades que você fechou até haver uma versão mais nova.

## Ainda não nesta versão

- **O 0.7 não tem assinatura de código.** A assinatura e o pacote da Microsoft Store passaram para o 0.8 porque a validação do certificado ainda não saiu. Confira o SHA-256 ao lado de cada arquivo em getcadcraft.com/download. No Windows, se o SmartScreen bloquear o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar assim mesmo}}. No Mac, na primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está em nenhuma loja de aplicativos, e ainda não há versão para iPad ou iPhone.
- As listas de ângulo e de declividade em {{ui:Unidades}} são salvas, mas nenhuma caixa as lê ainda.
- Os objetos OLE de um DWG são mantidos, mas não exibidos, e as imagens de metarquivo dentro de objetos OLE não são desenhadas.
- A leitura de tabelas de estilos de plotagem (arquivos CTB) de outros programas aguarda um arquivo de exemplo.
- Texto asiático mais antigo escrito como códigos `\M+` é lido, mas ainda não foi conferido com um arquivo de outro programa.
- Referências de fundo em PDF: as imagens dentro da página aparecem na tela mas não são plotadas, a plotagem de um assistente deixa as referências de fundo de fora, e como outros programas leem o recorte e a escala salvos ainda não foi conferido neles.
- Histórico: o CadCraft ainda não envia seus salvamentos para a nuvem, então as versões na nuvem são as salvas de outros dispositivos e da web. O Histórico existe só no CadCraft Studio.
- Se o Studio mantém a pasta de suporte do acad.lsp depois de reiniciar ainda não foi conferido; se ele perguntar, escolha a pasta de novo em APPLOAD.
- O painel Laser ainda não foi testado em um laser de verdade: teste cada configuração em sucata. O CadCraft Studio não tem Web Serial, então no Studio o painel só salva G-code.
- O registro de varreduras foi testado em varreduras inventadas, ainda não no conjunto de um scanner de verdade.
- O pan com dois dedos foi testado com eventos de trackpad simulados, ainda não em um trackpad de verdade.
- {{cmd:PEDIT}} não tem a opção Editar vértice (use grips ou Propriedades). Deslocar, aparar, estender, concordância, quebrar e unir ainda não funcionam com splines; a altura (Z) de uma spline não é mantida.
- Ainda não é possível dar códigos de formatação a texto de parágrafo novo, e as plotagens em SVG mostram texto formatado em uma só cor.
- O Desenho inteiro do WBLOCK grava só o modelo, não as folhas. O estilo de cota atual não é salvo no arquivo: um desenho abre com Standard como atual.
- Os estilos de menu com faixa de opções ainda não têm listas de camada, cor ou tipo de linha: use o painel {{ui:Camadas}} e {{ui:Propriedades}}.
- Nuvens de pontos ainda não são salvas no desenho nem plotadas, e arquivos E57 abrem até 6 milhões de pontos e 512 MB.
- Os arquivos DWG salvos pelo CadCraft ainda não foram conferidos no próprio AutoCAD.

Todo o resto está em [Ainda não implementado](topic:not-built-yet).

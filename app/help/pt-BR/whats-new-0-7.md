---
title: Novidades da versão 0.7 (anteriores)
summary: Base em PDF e importação de PDF, desenhos digitalizados com traçado automático, splines reais com SPLINE, SPLINEDIT e PEDIT, um gerenciador de estilos de cota, texto que mantém a formatação, WBLOCK e escalas próprias, sólidos 3D de outros programas, registro de escaneamentos, um painel Laser, exportação USD, Histórico e impressão no CadCraft Studio, um primeiro desenho guiado, a barra de ferramentas em qualquer lado ou em menos linhas, e mais recursos para assistentes de IA.
keywords: novidades 0.7, versão anterior, notas de versão, registro de alterações, mudanças, 0.7, versão, novos recursos, pdf, pdfattach, pdfimport, base, digitalização, scan, scanattach, scantrace, traçado, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatação, wblock, scalelistedit, lista de escalas, acis, sólidos 3d, registerscans, registrar escaneamentos, icp, e57, las, laser, grbl, g-code, usd, usdout, histórico, versões, comparar, imprimir, impressora, png, svg, estilo de plotagem, tipo de linha, tour, cola de referência, mapa de comandos, posição da barra de ferramentas, linhas da barra de ferramentas, toolbardock, regen, regenall, trackpad, deslizar, página de código, cirílico, coreano, chinês, japonês, elétrica, rcd, p&id, pid, acad.lsp, acaddoc.lsp, pasta de suporte, assistentes, mcp, unidades, português
from: d9a8ea79
---

Estas são as mudanças da versão 0.7 do CadCraft, em comparação com a 0.6. Muitas foram pedidas no Discord. A lista está agrupada por área, com as mais importantes primeiro.

## Novidades

### PDFs e desenhos digitalizados

- **Coloque uma página de PDF sob o desenho.** {{cmd:PDFATTACH}} (`PDFATT`) posiciona uma página no tamanho real ou em uma escala que você digitar. Faça snap nas linhas dela, esmaeça, deixe-a monocromática ({{cmd:PDFADJUST}}), recorte-a ({{cmd:PDFCLIP}}) e alterne as camadas do próprio PDF ({{cmd:PDFLAYERS}}). Ela é plotada como linhas, preenchimentos e textos, e um DWG ou DXF 2000 a mantém como um link para o arquivo. Abrir um PDF com {{ui:Abrir}} pergunta se você quer anexá-lo ou importá-lo. Veja [Base em PDF e importação de PDF](topic:pdf-underlay).
- **Transforme uma página de PDF em objetos de desenho.** {{cmd:PDFIMPORT}} (`PDFIM`) cria linhas, polilinhas, círculos, arcos, hachuras sólidas e textos em camadas com o nome do PDF, no tamanho real, em uma escala digitada ou escalonada a partir de dois pontos e uma distância real, em uma única etapa de desfazer. Veja [Importe uma página](topic:pdf-underlay#import-a-page).
- **Desenhos digitalizados.** {{cmd:SCANATTACH}} traz um PNG, JPEG ou TIFF (uma página ou todas) ou uma página de PDF que seja uma imagem. Depois, escale-a a partir de dois pontos ({{cmd:SCANSCALE}}), alinhe-a ({{cmd:SCANALIGN}}), endireite-a pelas próprias linhas longas ({{cmd:SCANDESKEW}}), deixe-a em preto e branco e remova manchas ({{cmd:SCANCLEAN}}), recorte-a e apague partes dela. Cada passo é uma etapa de desfazer, e o arquivo original é mantido. Veja [Desenhos digitalizados e o traçado](topic:scanned-drawings).
- **Trace uma digitalização em linhas e arcos.** {{cmd:SCANTRACE}} desenha as linhas da digitalização como linhas e arcos em uma nova camada, SCAN-TRACE, com a tolerância que você definir, e deixa textos e hachuras como estão. O relatório diz o que foi feito e o que foi deixado, e não garante que o resultado esteja certo: confira-o com a folha. {{cmd:RASTERSNAP}} permite que os snaps de objeto encontrem as extremidades, cantos e cruzamentos da digitalização. Nada é enviado para lugar nenhum, e nenhum modelo treinado é usado. Veja [O traçado](topic:scanned-drawings#the-trace).

### Desenho e edição

- **Splines reais.** {{cmd:SPLINE}} (`SPL`) desenha uma curva por pontos ou a partir de pontos de controle (grau 1 a 5), com tangentes nas extremidades. {{cmd:SPLINEDIT}} (`SPE`) move, adiciona e apaga pontos de ajuste ou de controle, define pesos, abre, fecha, inverte ou transforma uma spline em polilinha. Splines de arquivos DWG e DXF abrem como splines, e DWG e DXF 2000 as salvam como splines. Veja [Splines e polilinhas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) fecha e abre polilinhas, une linhas e arcos a elas, define uma única largura, ajusta uma curva pelos vértices ou uma spline ao longo deles e desfaz isso com Decurve, inverte, e edita várias de uma vez. Veja [Edite uma polilinha](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) grava um bloco, alguns objetos ou o desenho inteiro em um novo DWG ou DXF que contém apenas as camadas, estilos e blocos que eles usam. Veja [Grave um bloco ou objetos em um arquivo próprio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN e REGENALL.** {{cmd:REGEN}} (`RE`) redesenha a guia em que você está a partir do desenho; {{cmd:REGENALL}} (`REA`) faz isso em todas as guias, painéis e desenhos abertos. Veja [REGEN e REGENALL](topic:commands#regen-and-regenall).

### Texto e cotas

- **O texto mantém a formatação.** Textos de parágrafo de outros programas mantêm as cores por palavra, negrito e itálico, sublinhado, frações empilhadas e alturas: são desenhados na tela e nos PDFs, mantidos quando você edita as palavras e salvos de volta. Veja [Formatação dentro de texto de parágrafo de outros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Um gerenciador de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) cria, altera, compara e aplica estilos de cota nomeados; alterar um estilo altera todas as cotas que o usam. {{cmd:DIMEDIT}} (`DED`) restaura o texto, digita um novo texto, gira-o ou inclina as linhas de extensão; {{cmd:DIMTEDIT}} move o texto para a esquerda, para a direita ou para o centro. Veja [Estilos de cota nomeados](topic:dimension-settings#named-dimension-styles).
- **Escalas próprias.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) adiciona escalas como 1:75 às listas de escala de viewport e de plotagem. Elas são salvas no desenho (DWG e DXF 2000), e um desenho de outro programa traz a própria lista. Veja [Escalas](topic:units-papers-scales#scales).
- **Textos em outros alfabetos.** Arquivos DXF salvos nas páginas de código cirílico, coreano, chinês, japonês ou vietnamita agora abrem com o texto, e textos em chinês, japonês e coreano são impressos em PDFs (a plotagem busca uma fonte maior na primeira vez em que precisa dela). Veja [Fonte](topic:text#font).

### Plotagem e impressão

- **Mais recursos em tabelas de estilo de plotagem.** Para cada cor, uma tabela agora também pode definir um tipo de linha, a ponta e a união da linha, e um estilo de preenchimento que imprime preenchimentos sólidos como linhas de hachura. A tabela tem sua própria lista de espessuras de linha e uma escala de tipo de linha. Veja [Tabelas de estilo de plotagem](topic:plot-pdf#plot-style-tables).
- **Impressão, e arquivos PNG e SVG.** A caixa de diálogo Plotar tem {{ui:Imprimir…}}, {{ui:Baixar PNG}} (300 dpi) e {{ui:Baixar SVG}}. No CadCraft Studio, ela lista as impressoras do computador, o papel delas e o número de cópias. Veja [Imprimir](topic:plot-pdf#print) e [Imagem e arquivos SVG](topic:plot-pdf#picture-and-svg-files).

### 3D e nuvens de pontos

- **Sólidos 3D de outros programas.** Sólidos, regiões e corpos no espaço modelo de um desenho aparecem na guia 3D, somente leitura, e salvar como DWG os grava de volta sem alteração. Faces em superfícies que o CadCraft ainda não desenha são listadas, não adivinhadas. Veja [Sólidos de outros programas](topic:3d-solids#solids-from-other-programs).
- **Registre vários escaneamentos.** {{cmd:REGISTERSCANS}} (`REGSCAN`) posiciona escaneamentos feitos de posições diferentes em um mesmo referencial, por pares de pontos ou coordenadas de destino digitadas, refina-os com ICP, salva o registro como um pequeno arquivo de projeto e grava a nuvem registrada em um único arquivo LAS ou E57. Veja [Registre vários escaneamentos em um só](topic:register-scans).
- **Exportação USD.** {{cmd:USDOUT}}, ou {{cmd:EXPORT3D}} › {{ui:USD}}, grava os sólidos da guia 3D como `.usda`, `.usdc` ou `.usdz`. Veja [Exporte o modelo 3D como USD](topic:usd).
- **Cálculos na guia 3D.** Quando as ferramentas da guia 3D pedem uma distância, você pode digitar um cálculo, como na linha de comando. Veja [Aritmética em um valor digitado](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricação

- **Envie um desenho para um laser.** {{cmd:LASER}}, ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Laser…}}, abre um painel sobre o desenho: cada camada corta, risca, grava linhas, preenche formas, grava uma imagem ou não é enviada, com potência, velocidade e passadas. A prévia acompanha suas edições, {{ui:Salvar G-code…}} grava G-code de modo laser GRBL, e no Chrome ou no Edge o painel pode enquadrar a tarefa e enviá-la por USB. As configurações são salvas no desenho (DWG e DXF). Veja [Envie um desenho para um laser](topic:laser-cutting).
- **Símbolos de instalações prediais no complemento Elétrica.** Tomadas de dados, telefone e TV, interruptores de chave e de horário, um termostato, placa de saída de emergência, detectores, ponto de acionamento e sirene, um ventilador, aquecedor de água, fogão, ponto de recarga para veículos elétricos, medidor de energia e subquadro, e símbolos RCD e RCBO. Um circuito pode ter um RCD, a tabela do quadro tem uma coluna de RCD, e as verificações apontam circuitos de tomadas sem RCD de 30 mA ou menos. É um lembrete de planejamento, não uma verificação de norma.
- **Um complemento P&ID.** P&ID desenha diagramas de processo: símbolos com pontos de conexão, linhas de processo e de sinal, etiquetas, numeração de linhas, listas de linhas, equipamentos, instrumentos e válvulas (CSV ou uma planilha) e verificações. Ele vem com o CadCraft e fica desligado até você ligá-lo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Complementos}}. É um auxiliar de desenho, não uma aprovação de engenharia, e suas palavras estão só em inglês por enquanto.

### Primeiros passos e tela

- **Um primeiro desenho guiado.** {{cmd:TOUR}} (ou {{ui:Fazer o tour}} no cartão inicial) conduz você por seis passos no desenho real: uma linha, um círculo, um mover, um aparar, um apagar e uma cota. Ele começa sozinho na primeira vez que o CadCraft abre sem nada nele. Veja [Prefere ser guiado?](topic:getting-started#prefer-to-be-guided)
- **Uma cola de referência e um mapa de comandos.** A [cola de referência](topic:cheat-sheet) tem os 40 comandos do dia a dia em uma página, também como PDF para imprimir, e o [mapa de comandos](topic:command-map) lista os comandos com seus nomes curtos, de A a Z.
- **A barra de ferramentas em qualquer lado.** {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Posição da barra de ferramentas}}: em cima (como antes), embaixo, à esquerda ou à direita, ou digite {{cmd:TOOLBARDOCK}}. Veja [Posição da barra de ferramentas](topic:settings#toolbar-position).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Linhas da barra de ferramentas}}: quebrar para caber, 2 linhas ou 1 linha, para a barra do CadCraft e para os estilos Drafting classic e Ribbon. {{key:Shift+Ctrl+F1}} percorre essas opções, {{key:Ctrl+F1}} percorre o que os botões mostram, e {{cmd:TOOLBARROWS}} e {{cmd:TOOLBAR}} as definem. A dica inicial tem um botão de fechar. Obrigado a GJoe2, que enviou isto como um pull request. Veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows).

### No CadCraft Studio

- **Histórico.** {{cmd:HISTORY}} (`HIST`), ou {{ui:Vista}} › {{ui:Mais}} › {{ui:Histórico…}}: as cópias que o Studio guarda quando você abre e salva um desenho, e as versões do desenho na nuvem quando você o abriu da nuvem. Abra ou restaure uma delas, ou compare duas, com o que foi adicionado, removido e alterado mostrado em cor. Veja [Histórico](topic:history).
- **acad.lsp e acaddoc.lsp.** Escolha uma pasta de suporte em {{cmd:APPLOAD}}: esses dois arquivos são carregados quando o CadCraft inicia (o acaddoc.lsp de novo para cada nova aba de desenho), e `S::STARTUP` roda depois deles. Veja [Carregar aplicativos](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **A caixa de diálogo Plotar em sua própria janela.** Um botão na barra de título dela a move para uma janela que você pode colocar em outro monitor. Veja [Mova uma caixa de diálogo](common:arrange-panels#move-a-dialog).

### Para assistentes de IA

- **Arquivos pelo nome, em pastas que você escolhe.** No CadCraft Studio, um assistente pode abrir, salvar e plotar arquivos pelo nome, e entregar a um comando o arquivo que ele pede (INSERT a partir de um arquivo, exportação do COUNT, SAVEAS, PLOT), mas somente dentro das pastas que você adicionar em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}}. Veja [Deixe-o usar arquivos nas pastas que você escolher](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos chamadas.** Um assistente pode digitar uma linha de comando inteira de uma vez, manter um comando aberto entre as chamadas, contar objetos por tipo e camada sem listá-los, e colocar um bloco com os valores dos seus atributos em uma única etapa.
- **Sem janela.** A linha de comando `cadcraft` grava plotagens SVG e converte, plota, verifica ou descreve muitos arquivos de uma vez. O pacote MCP ainda não foi publicado. Veja [Trabalhe com arquivos sem abrir o CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Alterado

- **Um trackpad faz pan.** Mova dois dedos em um trackpad e a vista 2D acompanha; pinça e a roda do mouse dão zoom. Veja [Mouse, trackpad e toque](topic:mouse-trackpad-touch).
- **Objetos OLE são mantidos.** Os objetos incorporados de um DXF aparecem como a imagem ou como um quadro com rótulo, e são salvos de volta pelo DXF 2000. Os de um DWG são mantidos e gravados de volta ao salvar como DWG, mas ainda não aparecem. Antes, eram perdidos ao salvar. Veja [Objetos de outros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **As unidades de um desenho novo** seguem a unidade que você marcar em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}}.

## Corrigido

- Layouts que abriam vazios, ou perdiam uma viewport e mostravam o modelo inteiro no lugar dela, agora abrem com suas viewports reais. Um layout sem vínculo com o conteúdo é mantido, e o relatório de abertura informa isso.
- Arquivos DXF em páginas de código antigas mostravam textos cirílicos e coreanos ilegíveis. Agora são lidos corretamente.
- Textos de parágrafo de outros programas perdiam a formatação ao serem abertos e eram salvos como texto simples.

## Em todos os aplicativos

- **Unidades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para comprimento, área, volume, ângulo e inclinação, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade própria). Desligue as unidades que você nunca usa e elas saem das listas; marque uma com estrela e um trabalho novo começa nela. Um arquivo sempre mantém a própria unidade. No CadCraft, a estrela define as unidades de um desenho novo quando é uma unidade que um desenho pode ter; a caixa {{ui:Unidades}} do próprio CadCraft ainda não segue as chaves. Quando um desenho já tem unidades, um comprimento digitado pode ter a marca de qualquer unidade. Veja [Unidades, valores digitados e listas de unidades](common:unit-lists).
- **Layout mais denso e painéis que se recolhem.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Densidade do layout}} › {{ui:Compacta}} cabe mais na tela (telas touch e celulares mantêm os botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para acoplar ou flutuar o painel, solte-a sobre a barra de outro painel para compartilhar um quadro como guias, fixe-a para que deslize até a borda, ou oculte-a e a traga de volta pela borda. Veja [Organize os painéis](common:arrange-panels#make-the-layout-denser).
- **Caixas de diálogo se movem.** Arraste uma caixa de diálogo pela barra de título para tirá-la do caminho do desenho; ela volta para onde você a deixou. Dê dois cliques na barra de título para centralizá-la de novo. Veja [Mova uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos prontos para o seu próprio assistente (organizar um desenho, plotar um conjunto, verificar desenhos, fazer perguntas a um modelo, totalizar um levantamento de quantitativos, testar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um reproduzido pelos nossos testes. Os aplicativos não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Idioma}}. Ele, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** agora têm todas as palavras dos aplicativos, como rascunhos ainda não revisados por um falante nativo. Os tópicos de ajuda estão em inglês.
- **CadCraft Studio** informa por que uma verificação de atualização falhou (ainda não há arquivo para o seu sistema, sem rede, assinatura inválida) em vez de só "Concluído", e deixa de trazer de volta um cartão de Novidades que você fechou, até que haja uma versão mais nova.

## Ainda não nesta versão

- **A 0.7 não tem assinatura de código.** A assinatura e o pacote da Microsoft Store passaram para a 0.8, porque a validação do certificado ainda não chegou. Confira o SHA-256 ao lado de cada arquivo em getcadcraft.com/download. No Windows, se o SmartScreen parar o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Em um Mac, na primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está em loja de aplicativos, e ainda não há versão para iPad ou iPhone.
- A lista de ângulos e inclinações em {{ui:Unidades}} é salva, mas nenhuma caixa a lê ainda.
- Os objetos OLE de um DWG são mantidos, mas não mostrados, e imagens metafile dentro de objetos OLE não são desenhadas.
- A leitura de tabelas de estilo de plotagem (arquivos CTB) de outros programas aguarda um arquivo de exemplo.
- Textos asiáticos antigos escritos como códigos `\M+` são lidos, mas ainda não foram conferidos com um arquivo de outro programa.
- Bases em PDF: imagens dentro da página aparecem na tela, mas não são plotadas; uma plotagem feita por assistente deixa as bases de fora; e não foi conferido ainda como outros programas leem o recorte e a escala salvos.
- Histórico: o CadCraft ainda não envia seus salvamentos para a nuvem, então as versões na nuvem são as salvas em outros dispositivos e na web. O Histórico existe apenas no CadCraft Studio.
- Ainda não foi conferido se o Studio mantém a pasta de suporte do acad.lsp depois de reiniciar; se pedir, escolha a pasta de novo em APPLOAD.
- O painel Laser ainda não foi testado em um laser de verdade: teste cada configuração em sucata. O CadCraft Studio não tem Web Serial, então no Studio o painel só salva G-code.
- O registro de escaneamentos foi testado com escaneamentos inventados, ainda não com um conjunto de um escâner real.
- A panorâmica com dois dedos foi testada com eventos simulados de trackpad, ainda não com um trackpad real.
- {{cmd:PEDIT}} não tem a opção Editar vértice (use os grips ou Propriedades). Deslocar, aparar, estender, concordância, quebrar e unir ainda não aceitam splines; a altura (Z) de uma spline não é mantida.
- Texto de parágrafo novo ainda não pode receber códigos de formatação, e as plotagens SVG mostram texto formatado em uma só cor.
- O WBLOCK com Desenho inteiro grava só o modelo, não as folhas. O estilo de cota atual não é salvo no arquivo: um desenho abre com Standard como atual.
- Os estilos de menu de faixa de opções ainda não têm listas de camadas, cores ou tipos de linha: use o painel {{ui:Camadas}} e {{ui:Propriedades}}.
- Nuvens de pontos ainda não são salvas no desenho nem plotadas, e arquivos E57 abrem com até 6 milhões de pontos e 512 MB.
- Os arquivos DWG salvos pelo CadCraft ainda não foram conferidos no próprio AutoCAD.

Todo o resto está em [Ainda não implementado](topic:not-built-yet).

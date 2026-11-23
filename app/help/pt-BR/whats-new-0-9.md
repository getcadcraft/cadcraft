---
title: Novidades da versão 0.9 (anteriores)
summary: Hachuras que seguem seu contorno, grupos de camadas, pavimentos empilhados, paredes inteligentes 2D com portas e janelas, estilos de texto e um editor de texto formatado, uma linha de comando flutuante, snap de grade, dez formas de desenhar um arco e o painel Documentos.
keywords: novidades 0.9, versão anterior, novidades, 0.9, notas de versão, registro de alterações, hachura, hachura associativa, hatchedit, arquivo pat, arquivo de padrão, grupos de camadas, laygroup, pavimentos, pavimentos empilhados, floorlayers, paredes inteligentes, parede, porta, janela, ferramentas de parede, estilo de texto, estilo, editor mtext, texto de parágrafo, formatação, linha de comando flutuante, linha de comando, área superior, compacto, snap à grade, snap de grade, f9, arco, painel documentos, check-out, tamanhos de aço do Reino Unido, draw.io, texto tailandês, dxf r12, novidades, notas de versão, mudanças, 0.8, 0.8.1, versão, novos recursos, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalhes, gridmove, autodim, etiquetas, redline, mesclar, git, fossil, access, desenhar sem enxergar, leitor de tela, limites, rumos, aunits, shx, diagrama, ole, histórico, comparar, em palavras, propriedades, pés e polegadas, esticar, idiomas, dispositivos de entrada, problemas, live, assistentes
from: 3451e64c
---

Isto é o que mudou no CadCraft 0.9, em comparação com a 0.8.1. O CadCraft é o aplicativo de desenho 2D e 3D do CadCraft Studio 0.9 e de seus oito aplicativos. A 0.9 completa o desenho de plantas, adiciona estilos de texto e um editor de texto de verdade, e dá mais espaço na tela.

## Novidades

### Desenho de plantas

- **Hachuras que seguem seu contorno.** {{cmd:HATCH}} se vincula ao que a delimita. Mova, gire ou escale o contorno e a hachura e seu padrão o acompanham; remodele-o e a hachura é recalculada. {{cmd:HATCHEDIT}} (`HE`) altera uma hachura depois e cria ou encerra o vínculo. Veja [Hachuras e áreas de preenchimento](topic:hatch).
- **Arquivos de padrão de hachura.** Na pergunta `Escolha o ponto interno` de {{cmd:HATCH}}, digite `F` (Arquivo de padrão) e escolha um arquivo `.pat`. Só arquivos gravados no formato usual foram testados.
- **Grupos de camadas.** Em {{ui:Tools}} no painel {{ui:Layers}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} e {{ui:Find a layer}}; ou digite {{cmd:LAYGROUP}} (`LG`). Veja [Organizar um desenho com camadas](topic:layers#group-layers).
- **Pavimentos empilhados.** {{cmd:FLOORS}} (`FLR`), ou {{ui:Floors…}} (Pavimentos…) no menu {{ui:More}} do grupo {{ui:View}}. Uma viewport em uma folha pode mostrar um pavimento em {{ui:Floor shown}} nas Propriedades. {{cmd:FLOORLAYERS}} transforma pavimentos em camadas para um arquivo que vai para outra pessoa. Veja [Empilhar pavimentos em um desenho](topic:floors).
- **Paredes inteligentes 2D, portas e janelas.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) e {{cmd:DELOPENING}}. Cantos, junções em T e cruzamentos são calculados para você. As paredes guardam um registro de como se unem, e as Propriedades ganham Não permitir união no início / no fim, uma Linha de localização e um Comprimento editável. Veja [Desenhar paredes, portas e janelas 2D](topic:walls-2d).
- **A ferramenta de parede em paredes de planta.** Digite {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} e as demais. Ainda não têm botões na barra de ferramentas. Veja [Formas de parede, cortes, deslocamentos e travas para paredes 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), ou {{ui:Text style}} na barra {{ui:Draw}}: estilos nomeados com fonte, altura, fator de largura e inclinação. Veja [Definir fonte e tamanho do texto com estilos de texto](topic:text-styles).
- **Um editor de texto de parágrafo formatado.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ou um clique duplo em um texto abre uma caixa com fonte, tamanho, negrito, itálico, sublinhado, tachado, cor, alinhamento e os símbolos de grau, mais ou menos e diâmetro, além de {{ui:OK}} e {{ui:Cancel}}. Veja [Formatar texto de parágrafo](topic:format-paragraph-text).
- **Um diagrama a partir de XML do draw.io.** {{cmd:DIAGRAM}} (`T2D`) também lê XML do draw.io colado. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).
- **Texto tailandês em uma plotagem PDF.** Antes, saía como pontos de interrogação.

### Mais espaço e ajudas de desenho

- **Uma linha de comando flutuante e mais fina, e uma área superior compacta.** Arraste a alça da linha de comando para fazê-la flutuar, arraste sua borda superior para menos linhas, e {{key:F2}} abre o histórico. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} e as escolhas de área superior têm as mesmas configurações. Veja [Configurações](topic:settings#command-line).
- **Menu de snap de objeto.** Clique com o botão direito em {{ui:Snap}} na barra de status, ou digite {{cmd:OSNAP}}.
- **Snap à grade.** O botão {{ui:Grid snap}} na barra de status, ou {{key:F9}}: pontos escolhidos vão para o ponto de grade mais próximo quando nenhum snap de objeto pegou o ponto.
- **Arco em dez formas, e Continuar.** {{ui:Arc}} na barra {{ui:Draw}} ou {{cmd:ARC}}: 3 pontos, a família Início/Centro/Fim e a família Centro/Início/Fim, e Continuar (pressione {{key:Enter}} no ponto inicial) a partir da última linha, arco ou polilinha.
- **O painel Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) ou {{ui:Documents…}} (Documentos…) no menu {{ui:More}} do grupo {{ui:View}}: revisão, estado e check-out de cada desenho em uma pasta de projeto. Abre como uma caixa de diálogo centralizada. Veja [Documentos](topic:documents).

### Arquivos

- **Tamanhos de aço do Reino Unido.** 976 seções no painel Padrão, digitadas como nos desenhos (por exemplo `305x165x40 UB`).
- **Pacotes sul-africanos** (práticas de desenho e regulamentos de construção) como pacotes do complemento Regulamentos de construção. Os números não foram verificados.
- **Complementos para o CadCraft,** adicionados sob demanda e desligados por padrão: projeto de iluminação interna, projeto de chips (HDL para layout), entalhe de roteador, simulação de circuitos, pinhões de corrente de rolos e pacotes de países do complemento Regulamentos de construção.

## Corrigido

- Mover, girar ou escalar uma hachura deixava seu padrão para trás.
- {{cmd:GRIDMOVE}} arrastava uma parede de planta inteira que só começa na linha de grade. Agora uma parede é julgada pelas suas extremidades.
- A grade aparecia só dentro dos limites do desenho, mesmo com os limites desligados.
- A lista de blocos no painel lateral rola, e um nome que não é um bloco lista os blocos que começam com ele ("Você quis dizer?").
- Arquivos DXF R12 que o AutoCAD recusava ("Unknown group 1001 for table") agora abrem ali.
- Arquivos muito grandes (cerca de 70,000 entidades ou mais) não abriam com "Maximum call stack size exceeded".
- Arquivos DWG do AutoCAD 2018 e posteriores com uma versão de manutenção alta não abriam com "bad BITLONG code 11".
- Na caixa de texto de parágrafo, um novo tamanho digitado para uma parte selecionada mantém a seleção.

## Em todos os aplicativos

Dicas do Bootstrap em todo controle com uma dica, uma dica inicial que você pode fechar, faixas de abas que rolam quando não cabem, e um título da aba do navegador que segue o desenho aberto (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} agora é uma lista suspensa de opções de duas linhas. A lista de idiomas em {{ui:Settings}} é mais longa que na 0.8. Coedição ao vivo, coleções da Biblioteca e unidades de peso e temperatura são descritas nas notas do Studio.

## Limites honestos

- Texto de parágrafo não tem listas com marcadores ou numeradas, régua de tabulação nem justificação. PDFs plotados compõem o texto em Helvetica.
- Paredes de planta são retas, então um arco é desenhado como paredes curtas. A verificação da ferramenta de parede pela comunidade está pendente.
- Grupos de camadas não são gravados no formato próprio do AutoCAD, então o AutoCAD mostra uma lista plana. Outros programas mostram todos os pavimentos juntos, a menos que você execute {{cmd:FLOORLAYERS}}.
- O painel Documentos não foi testado por duas pessoas em uma pasta compartilhada real. O entalhe de roteador não rodou em nenhuma máquina real. A estimativa de iluminação foi verificada contra um traçado de fótons, não contra outro programa. Os complementos de engenharia são ferramentas de verificação, não substituem a revisão de um engenheiro.
- Idiomas além do inglês são rascunhos de máquina, e algumas das palavras novas estão só em inglês.

## Anterior: 0.8 e 0.8.1

Isto é o que mudou no CadCraft 0.8 e 0.8.1, em comparação com a 0.7. A 0.8 (1 de novembro de 2026) adiciona ajudas de desenho que trabalham a partir do seu próprio desenho, por regras no seu computador e sem modelo, e a 0.8.1 (2 de novembro de 2026) corrige erros relatados depois dela.

### Novidades

**Desenho que completa o seu raciocínio**

- **Um fantasma mostra o que vem a seguir.** Sem comando em execução, um fantasma cinza tracejado mostra o que os próprios padrões do seu desenho indicam como próximo: o próximo montante com o mesmo espaçamento, o próximo degrau de uma escada, a parede que falta de um cômodo. Pressione {{key:Tab}} para desenhá-lo como um passo de desfazer, ou {{key:Esc}} para dispensá-lo. Ele olha só para os objetos mais novos, então continua fluido em um desenho grande. Desligue-o em {{ui:Settings}} › {{ui:CadCraft}} ou com {{cmd:AUTOCOMPLETE}} `Off`.
- **O próximo ponto enquanto você desenha uma linha.** No meio de {{cmd:LINE}} ou {{cmd:PLINE}}, o fantasma é o próximo ponto: o próximo degrau de uma escada, o quarto canto de um retângulo, ou o ponto que o fecha. Aproxime o cursor dele e pressione {{key:Tab}}, como se tivesse clicado ali; continue ou pressione Enter.
- **Esboços à caneta viram geometria precisa.** {{cmd:SKETCHFIX}}: desenhe traços rascunhados com caneta, mouse ou dedo e cada um vira uma linha, círculo, arco, retângulo ou polilinha limpos, encaixados no que já está desenhado. Veja [Esboçar com caneta e obter geometria precisa](topic:sketch-with-a-pen).
- **Uma foto de um esboço vira um desenho.** {{cmd:PHOTOSKETCH}} (`PSK`) encontra o papel em uma foto, endireita a perspectiva, aplica o tamanho de papel e a escala que você informar, e traça as linhas da caneta em uma camada para cada cor de caneta. Letras não são traçadas.
- **Cote por regras.** {{cmd:AUTODIM}} (`ADIM`) cria cadeias de cotas ao longo dos lados que você escolher, uma dimensão total, larguras de vãos, diâmetros de furos e, com `Grid`, o espaçamento da grade. Nunca repete uma cota que já existe.
- **Mova uma linha de grade e o conjunto segue.** {{cmd:GRIDMOVE}} (`GM`): paredes que terminam na linha de grade se esticam com ela, paredes ao longo dela, colunas, sua bolha e etiqueta se movem, e cotas sobre ela medem o novo espaçamento. Um passo de desfazer.

**Folhas, detalhes e etiquetas**

- **Folhas que se organizam sozinhas.** {{cmd:AUTOSHEET}} pega suas vistas nomeadas (ou as partes separadas do modelo), escolhe um tamanho de papel e uma escala padrão, e coloca as vistas em novas folhas com uma legenda e uma descrição de nome e escala sob cada uma. Tudo continua editável. Veja [Organize folhas para mim](topic:lay-out-sheets-for-me).
- **Os detalhes do seu escritório, oferecidos enquanto você desenha.** {{cmd:DETAILS}} (`DET`) guarda seus próprios blocos de detalhe. Quando o que você seleciona coincide com um deles pelas palavras nas camadas, nos nomes de blocos e nas notas, a barra de status informa; escolha-o e coloque. {{cmd:DETAILS}} › Compartilhar põe sua lista na sua pasta Documentos e traz o que sua equipe acrescentou. Configurações desliga as sugestões.
- **Etiquetas em blocos.** {{cmd:TAGS}} define uma etiqueta (seu tipo, os valores que pode ter, os blocos a que se aplica), a define nas referências de bloco que você seleciona, e as lista como uma tabela que você pode salvar como CSV. As definições ficam no DWG. Veja [Etiquetas](topic:tags).
- **Limites do desenho.** {{cmd:LIMITS}} define um retângulo para o desenho: a grade o preenche e o zoom Tudo o mostra. Os limites aparecem como contorno e são salvos em DWG e DXF, junto com os limites do papel. Veja [Definir os limites do desenho](topic:drawing-limits).

**Trabalhar com outras pessoas e outros programas**

- **Transforme uma marcação em revisão.** {{cmd:REDLINE}} lê o pacote que o MarkupCraft grava e lista cada mudança. Aceite ou rejeite cada uma com uma nota; as aceitas recebem uma nuvem de revisão e um registro de revisão em um passo de desfazer, e você salva o arquivo de respostas que fecha as marcações no MarkupCraft. Veja [Transforme uma marcação em revisão](topic:redline-to-revision).
- **Desenhos que o git e o Fossil conseguem mesclar.** Com {{ui:Merge-friendly files}} ligado em {{ui:Settings}} › {{ui:CadCraft}}, cada objeto recebe uma chave que nunca muda (os arquivos ficam cerca de 10 por cento maiores). `cadcraft merge base ours theirs` então mescla as edições de duas pessoas em um DWG ou DXF, objeto por objeto, e informa apenas onde duas pessoas mudaram a mesma coisa. Veja [Mesclar as edições de duas pessoas em um desenho](topic:merge-drawings).
- **O que mudou, em palavras.** No Histórico, Comparar dá uma lista simples: onde as coisas mudaram, o tamanho dos locais, o que foi adicionado, removido ou alterado, e o texto que foi editado. Veja [Dizer em palavras o que mudou](topic:changes-in-words).
- **Rumos e ângulos.** Digite uma direção como um rumo de topógrafo, como N45°23'30"E, ou em graus, minutos e segundos, em qualquer lugar em que um ângulo é pedido; AUNITS define como os ângulos são mostrados. Veja [Digitar e mostrar rumos e ângulos](topic:bearings-and-angles).
- **Suas próprias fontes SHX.** Dê ao CadCraft uma pasta de fontes SHX e os estilos de texto que as citam são desenhados nelas, na tela e nas plotagens. Veja [Desenhar texto com suas próprias fontes SHX](topic:shx-fonts).
- **Um diagrama a partir de texto.** {{cmd:DIAGRAM}} lê um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de origem e destino, e desenha blocos e conectores que você pode editar. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).
- **Objetos OLE em um DWG.** {{cmd:OLELIST}} lista os objetos OLE que um DWG contém e que o CadCraft não consegue colocar sozinho, e coloca uma cópia de uma imagem onde você disser. Veja [Imagens](topic:pictures#objects-from-other-programs-ole).
- **Seus cálculos ficam com o desenho.** Folhas de cálculo e razões de projeto são mantidas no DWG junto com a tabela de classes.

**Desenhar sem enxergar**

- Ligue {{ui:Drafting without sight}} em {{ui:Settings}} (ou digite {{cmd:ACCESS}} e responda `On`). O CadCraft fala cada comando e resultado pelo seu leitor de tela, descreve o desenho e o que está perto do cursor, deixa você mover o cursor e escolher pontos pelo teclado, e toca um som para cada snap e cada pega. Onde o navegador consegue reconhecer fala no seu computador, os comandos podem ser falados. Veja [Desenhar sem enxergar](topic:draft-without-sight).

**Em todos os aplicativos**

- **Idiomas.** 54 idiomas; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli, uzbeque). Idiomas além do inglês são rascunhos de máquina até que um falante nativo os leia.
- **Dispositivos de entrada.** Trackpad, caneta, mouse 3D, controle de jogo e controles MIDI.
- **Linhas da barra de ferramentas e a grade de propriedades.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} oferece Quebrar, 2 linhas ou 1 linha nos outros aplicativos. O CadCraft tem sua própria configuração em {{ui:Settings}} › {{ui:CadCraft}} (veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows)). A grade de propriedades compartilhada está em três outros aplicativos, não no CadCraft.
- **Problemas, Live e complementos.** Um painel compartilhado de Problemas que avisa em todo aplicativo, uma visão Live de quem está onde no CadCraft Studio (veja [Trabalhar em um desenho junto](topic:work-live)), e uma listagem de complementos.
- **Conecte sua IA.** Uma conexão do CadCraft Studio a todos os oito aplicativos, com um nível somente leitura, sugerir ou editar por aplicativo, e um registro em linguagem simples do que o assistente fez. O CadCraft não tem IA própria, e Perguntar em todo aplicativo usa a IA que você conectar.

### Corrigido na 0.8.1

- **Propriedades mostravam 150 em vez de 12'-6"** em desenhos de pés e polegadas. Os campos que o aplicativo lê por conta própria voltam a manter o texto.
- **Arquivos DWG cuja seção de classes era lida como o tipo errado** (GitHub cadcraft#5) agora abrem corretamente.
- **A mira não aparece mais atrás de janelas pop-up.**
- **O Studio e as edições empacotadas podem trocar de idioma em tempo de execução.** Antes eram só em inglês. Ainda não testado em todas as plataformas: avise-nos se o idioma não mudar.
- **Tablets na vertical** dão a altura de grade sobrando para a tela, e o modo de folhas começa em 760 px ou menos.
- **STRETCH com janela de cruzamento, e LIMITS,** foram relatados no Studio 0.8.0 e já estavam corretos na versão web 0.8; o instalador de quem relatou era mais antigo. O Studio 0.8.1 os traz.

### Ainda não nesta versão

- **0.8 e 0.8.1 não têm assinatura de código.** O Windows pode avisar (escolha {{ui:More info}}, depois {{ui:Run anyway}}); em um Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Open}}. As versões das lojas estão em pausa, e a versão para iPad e iPhone não foi refeita para a 0.8.1.
- **Esboços à caneta e fotos de esboços** foram testados só em fotos inventadas e com mouse, ainda não com uma caneta real, tela sensível ao toque ou um esboço à mão em papel.
- **Desenhar sem enxergar** foi testado com verificações automáticas, ainda não com um leitor de tela ou um testador cego.
- **Compartilhar detalhes** não teve verificação com duas pessoas, e uma pasta do Team Cloud Plan como pasta Documentos não está pronta.
- **Mesclagem** funciona para os arquivos DWG e DXF do CadCraft; para os arquivos dos outros aplicativos, não está pronta.
- **Desfazer entre janelas:** o CadCraft informa cada passo concluído, mas o Studio ainda não tem um Desfazer único para todos os aplicativos; cada aplicativo desfaz os próprios passos.
- **Objetos OLE de um DWG** são mantidos, mas não são desenhados no lugar.
- **Leitura de tabelas de estilos de plotagem (arquivos CTB)** de outros programas está pronta, mas não foi verificada com um arquivo de outro programa.
- **Conecte sua IA:** conexão com um clique no Studio, o conector hospedado para IA de navegador, sua própria chave de API dentro do Studio e o pacote MCP publicado não são prometidos nesta versão.

Para a versão anterior, veja [Novidades da 0.7](topic:whats-new-0-7).

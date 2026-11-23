---
title: Novidades da versão 0.9 (anteriores)
summary: Tramas que seguem o seu contorno, grupos de camadas, pisos sobrepostos, paredes inteligentes 2D com portas e janelas, estilos de texto e um editor de texto formatado, uma linha de comandos flutuante, snap à grelha, dez formas de desenhar um arco e o painel Documentos.
keywords: novidades 0.9, versão anterior, novidades, 0.9, notas de versão, registo de alterações, trama, trama associada, hatchedit, ficheiro pat, ficheiro de padrão, grupos de camadas, laygroup, pisos, pisos sobrepostos, floorlayers, paredes inteligentes, parede, porta, janela, ferramentas de parede, estilo de texto, estilo, editor mtext, texto de parágrafo, formatação, linha de comandos flutuante, linha de comandos, área superior, compacto, snap à grelha, grid snap, f9, arco, painel documentos, check out, tamanhos de aço do Reino Unido, draw.io, texto em tailandês, dxf r12, alterações, 0.8, 0.8.1, versão, novas funcionalidades, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalhes, gridmove, autodim, etiquetas, redline, fusão, git, fossil, access, desenhar sem ver, leitor de ecrã, limites, rumos, aunits, shx, diagrama, ole, histórico, comparar, por palavras, propriedades, pés e polegadas, esticar, idiomas, dispositivos de entrada, problemas, live, assistentes
from: 3451e64c
---

Eis o que mudou no CadCraft 0.9, em comparação com a 0.8.1. O CadCraft é a aplicação de desenho 2D e 3D do CadCraft Studio 0.9 e das suas oito aplicações. A versão 0.9 completa o desenho em planta, acrescenta estilos de texto e um editor de texto a sério, e dá-lhe mais espaço no ecrã.

## Novidades

### Desenho em planta

- **Tramas que seguem o seu contorno.** {{cmd:HATCH}} associa-se ao que a delimita. Mova, rode ou escale o contorno e a trama e o seu padrão seguem; reformule-o e a trama é calculada de novo. {{cmd:HATCHEDIT}} (`HE`) altera uma trama depois e cria ou termina a associação. Veja [Tramas e áreas de preenchimento](topic:hatch).
- **Ficheiros de padrão de trama.** No pedido {{cmd:HATCH}} `Pick internal point`, escreva `F` (Ficheiro de padrão) e escolha um ficheiro `.pat`. Só foram testados ficheiros escritos no formato habitual.
- **Grupos de camadas.** Em {{ui:Ferramentas}} no painel {{ui:Camadas}}: {{ui:Novo grupo}}, {{ui:Adicionar grupos predefinidos}}, {{ui:Agrupar por nome}} e {{ui:Procurar uma camada}}; ou escreva {{cmd:LAYGROUP}} (`LG`). Veja [Organizar um desenho com camadas](topic:layers#group-layers).
- **Pisos sobrepostos.** {{cmd:FLOORS}} (`FLR`), ou {{ui:Pisos…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. Uma viewport numa folha pode mostrar um piso em {{ui:Piso mostrado}} nas Propriedades. {{cmd:FLOORLAYERS}} transforma os pisos em camadas para um ficheiro que vai para outra pessoa. Veja [Sobrepor pisos num desenho](topic:floors).
- **Paredes, portas e janelas inteligentes em 2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) e {{cmd:DELOPENING}}. Os cantos, as uniões em T e os cruzamentos são calculados por si. As paredes guardam um registo de como se unem, e as Propriedades ganham {{ui:Não permitir junção no início}} / {{ui:Não permitir junção no fim}}, uma {{ui:Linha de localização}} e um {{ui:Comprimento}} editável. Veja [Desenhar paredes, portas e janelas 2D](topic:walls-2d).
- **A ferramenta de parede nas paredes em planta.** Escreva {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} e as restantes. Ainda não têm botões na barra de ferramentas. Veja [Formas de paredes, cortes, deslocamentos e bloqueios para paredes 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), ou {{ui:Estilo de texto}} na barra {{ui:Desenhar}}: estilos com nome, com tipo de letra, altura, fator de largura e inclinação. Veja [Definir o tipo de letra e o tamanho do texto com estilos de texto](topic:text-styles).
- **Um editor de texto de parágrafo formatado.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ou um duplo clique num texto abre uma caixa com tipo de letra, tamanho, negrito, itálico, sublinhado, rasurado, cor, alinhamento e os símbolos de grau, mais ou menos e diâmetro, e ainda {{ui:OK}} e {{ui:Cancelar}}. Veja [Formatar texto de parágrafo](topic:format-paragraph-text).
- **Um diagrama a partir de XML do draw.io.** {{cmd:DIAGRAM}} (`T2D`) lê também XML do draw.io colado. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).
- **Texto em tailandês numa impressão PDF.** Antes saía impresso como pontos de interrogação.

### Mais espaço e auxiliares de desenho

- **Uma linha de comandos flutuante e mais fina, e uma área superior compacta.** Arraste o grip da linha de comandos para a fazer flutuar, arraste o seu bordo superior para menos linhas, {{key:F2}} abre o histórico. {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Linha de comandos}} e as escolhas da área superior têm as mesmas definições. Veja [Definições](topic:settings#command-line).
- **Menu de snap a objetos.** Clique com o botão direito em {{ui:Snap}} na barra de estado, ou escreva {{cmd:OSNAP}}.
- **Snap à grelha.** O botão {{ui:Snap à grelha}} na barra de estado, ou {{key:F9}}: os pontos escolhidos vão para o ponto de grelha mais próximo quando nenhum snap a objetos apanhou o ponto.
- **Arco de dez formas, e Continuar.** {{ui:Arco}} na barra {{ui:Desenhar}} ou {{cmd:ARC}}: 3 pontos, a família Início/Centro/Fim e a família Centro/Início/Fim, e Continuar (prima {{key:Enter}} no ponto inicial) a partir da última linha, arco ou polilinha.
- **O painel Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) ou {{ui:Documentos…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}: revisão, estado e reserva para cada desenho de uma pasta de projeto. Abre-se como uma caixa de diálogo centrada. Veja [Documentos](topic:documents).

### Ficheiros

- **Tamanhos de aço do Reino Unido.** 976 perfis no painel {{ui:Normal}}, escritos como nos desenhos (por exemplo `305x165x40 UB`).
- **Pacotes sul-africanos** (prática de desenho e regulamentos de construção) como pacotes do suplemento Regulamentos de construção. Os números não estão verificados.
- **Suplementos para o CadCraft,** acrescentados a pedido e desligados por predefinição: desenho de iluminação interior, desenho de chips (HDL para layout), entalhe por router, simulação de circuitos, rodas dentadas de correntes de rolos e pacotes nacionais de Regulamentos de construção.

## Corrigido

- Mover, rodar ou escalar uma trama deixava o seu padrão para trás.
- {{cmd:GRIDMOVE}} levava uma parede de planta inteira que apenas começava na linha de grelha. Agora uma parede é avaliada pelas suas extremidades.
- A grelha só aparecia dentro dos limites do desenho, mesmo com os limites desligados.
- A lista de blocos no painel lateral desloca-se, e um nome que não é bloco lista os blocos que começam por ele ("Quis dizer?").
- Os ficheiros DXF R12 que o AutoCAD recusava ("Unknown group 1001 for table") abrem agora aqui.
- Os ficheiros muito grandes (cerca de 70,000 entidades ou mais) não abriam com "Maximum call stack size exceeded".
- Os ficheiros DWG do AutoCAD 2018 e posteriores com uma versão de manutenção alta não abriam com "bad BITLONG code 11".
- Na caixa de texto de parágrafo, um novo tamanho escrito para uma parte selecionada mantém a seleção.

## Em todas as aplicações

Dicas de ferramentas em todos os controlos com uma sugestão, uma dica de arranque que pode fechar, separadores que se deslocam quando não cabem, e um título do separador do navegador que segue o desenho aberto (`<drawing> - CadCraft | CadCraft`). {{ui:Definições}} › {{ui:Esquema}} é agora uma lista de escolhas de duas linhas. A lista de idiomas em {{ui:Definições}} é mais longa do que na 0.8. A edição conjunta em Live, as coleções da Biblioteca e as unidades de peso e de temperatura estão descritas nas notas do Studio.

## Limites honestos

- O texto de parágrafo não tem listas com marcas ou numeradas, régua de tabulações nem justificação. Os PDF impressos compõem o texto em Helvetica.
- As paredes em planta são retas, por isso um arco é desenhado como pequenas paredes. A verificação manual da ferramenta de parede pela comunidade está pendente.
- Os grupos de camadas não são escritos no formato próprio do AutoCAD, por isso o AutoCAD mostra uma lista plana. Os outros programas mostram todos os pisos juntos, a menos que execute {{cmd:FLOORLAYERS}}.
- O painel Documentos ainda não foi testado por duas pessoas numa partilha real. O entalhe por router não correu em nenhuma máquina real. A estimativa de iluminação foi verificada contra um traçado de fotões, não contra outro programa. Os suplementos de engenharia são auxiliares de verificação, não substituem a revisão de um engenheiro.
- As línguas que não o inglês são rascunhos automáticos, e algumas das palavras novas estão só em inglês.

## Anterior: 0.8 e 0.8.1

Eis o que mudou no CadCraft 0.8 e 0.8.1, em comparação com a 0.7. A 0.8 (1 de novembro de 2026) acrescenta auxiliares de desenho que trabalham a partir do seu próprio desenho, por regras no seu computador e sem modelo, e a 0.8.1 (2 de novembro de 2026) corrige erros reportados depois dela.

### Novidades

**Desenho que completa o seu raciocínio**

- **Um fantasma mostra o que vem a seguir.** Sem comando em curso, um fantasma cinzento tracejado mostra o que os padrões do próprio desenho indicam como próximo: o próximo montante à mesma distância, o próximo degrau de uma escada, a parede em falta de uma divisão. Prima {{key:Tab}} para o desenhar como um único passo de anular, ou {{key:Esc}} para o dispensar. Olha apenas para os objetos mais recentes, por isso mantém-se fluido num desenho grande. Desligue-o em {{ui:Definições}} › {{ui:CadCraft}} ou com {{cmd:AUTOCOMPLETE}} `Off`.
- **O ponto seguinte enquanto desenha uma linha.** No meio de {{cmd:LINE}} ou {{cmd:PLINE}} o fantasma é o ponto seguinte: o próximo degrau de uma escada, o quarto canto de um retângulo, ou o ponto que o fecha. Aproxime o cursor dele e prima {{key:Tab}}, como se tivesse clicado aí.
- **Os esboços à caneta tornam-se geometria precisa.** {{cmd:SKETCHFIX}}: desenhe traços grosseiros com caneta, rato ou dedo e cada um torna-se uma linha, círculo, arco, retângulo ou polilinha limpos, encaixados ao que já está desenhado. Veja [Desenhar à mão com uma caneta e obter geometria precisa](topic:sketch-with-a-pen).
- **Uma fotografia de um esboço torna-se um desenho.** {{cmd:PHOTOSKETCH}} (`PSK`) encontra o papel numa fotografia, endireita a perspetiva, aplica o formato de papel e a escala que indicar, e transfere as linhas da caneta para uma camada por cada cor de caneta. As letras não são transferidas.
- **Cotar por regras.** {{cmd:AUTODIM}} (`ADIM`) cria cadeias de cotas ao longo dos lados que escolher, uma dimensão total, larguras de vãos, diâmetros de furos e, com `Grid`, o espaçamento da grelha. Nunca repete uma cota que já existe.
- **Mova uma linha de grelha e o conjunto segue.** {{cmd:GRIDMOVE}} (`GM`): as paredes que terminam na linha de grelha esticam com ela, as paredes ao longo dela, os pilares, a sua bolha e etiqueta movem-se, e as cotas nela medem o novo espaçamento. Um único passo de anular.

**Folhas, detalhes e etiquetas**

- **Folhas que se organizam sozinhas.** {{cmd:AUTOSHEET}} usa as suas vistas com nome (ou as partes separadas do modelo), escolhe um formato de papel e uma escala normalizada, e coloca as vistas em novas folhas com uma legenda e uma legenda de nome e escala. Tudo continua editável. Veja [Organizar folhas por mim](topic:lay-out-sheets-for-me).
- **Os detalhes do seu escritório, oferecidos enquanto desenha.** {{cmd:DETAILS}} (`DET`) guarda os seus próprios blocos de detalhe. Quando o que seleciona corresponde a um pelas palavras das suas camadas, nomes de blocos e notas, a barra de estado indica-o; escolha-o e coloque-o. {{cmd:DETAILS}} › Share coloca a sua lista na pasta Documentos e traz o que a sua equipa acrescentou. As Definições desligam as sugestões.
- **Etiquetas em blocos.** {{cmd:TAGS}} define uma etiqueta (o seu tipo, os valores que pode ter, os blocos a que se aplica), define-a nas referências de bloco que selecionar, e lista-as como um quadro que pode guardar em CSV. As definições ficam guardadas no DWG. Veja [Etiquetas](topic:tags).
- **Limites do desenho.** {{cmd:LIMITS}} define um retângulo para o desenho: a grelha preenche-o e o zoom Tudo mostra-o. Os limites aparecem como um contorno e são guardados em DWG e DXF, juntamente com os limites do papel. Veja [Definir os limites do desenho](topic:drawing-limits).

**Trabalhar com outras pessoas e outros programas**

- **Transformar uma anotação numa revisão.** {{cmd:REDLINE}} lê o pacote que o MarkupCraft escreve e lista cada alteração. Aceite ou recuse cada uma com uma nota; as aceites recebem uma nuvem de revisão e um registo de revisão num único passo de anular, e guarda o ficheiro de respostas que fecha as anotações no MarkupCraft. Veja [Transformar uma anotação numa revisão](topic:redline-to-revision).
- **Desenhos que o git e o Fossil conseguem fundir.** Com {{ui:Ficheiros compatíveis com fusão}} ativo em {{ui:Definições}} › {{ui:CadCraft}}, cada objeto recebe uma chave que nunca muda (os ficheiros ficam cerca de 10 por cento maiores). `cadcraft merge base ours theirs` funde depois as edições de duas pessoas num DWG ou DXF objeto a objeto e indica apenas onde duas pessoas alteraram a mesma coisa. Veja [Fundir as edições de duas pessoas num desenho](topic:merge-drawings).
- **O que mudou, por palavras.** No Histórico, Comparar dá uma lista simples: onde as coisas mudaram, qual o tamanho dessas zonas, o que foi acrescentado, removido ou alterado, e o texto que foi editado. Veja [Dizer por palavras o que mudou](topic:changes-in-words).
- **Rumos e ângulos.** Escreva uma direção como rumo de topógrafo, como N45°23'30"E, ou em graus, minutos e segundos, em qualquer sítio onde se peça um ângulo; AUNITS define como os ângulos são mostrados. Veja [Escrever e mostrar rumos e ângulos](topic:bearings-and-angles).
- **Os seus próprios tipos de letra SHX.** Dê ao CadCraft uma pasta de tipos de letra SHX e os estilos de texto que os indicam são desenhados com eles, no ecrã e nas impressões. Veja [Desenhar texto com os seus próprios tipos de letra SHX](topic:shx-fonts).
- **Um diagrama a partir de texto.** {{cmd:DIAGRAM}} lê um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de origem e destino, e desenha blocos e conetores que pode editar. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).
- **Objetos OLE num DWG.** {{cmd:OLELIST}} lista os objetos OLE que um DWG transporta e que o CadCraft não consegue colocar sozinho, e coloca uma cópia de uma imagem onde indicar. Veja [Imagens](topic:pictures#objects-from-other-programs-ole).
- **Os seus cálculos ficam com o desenho.** As folhas de cálculo e as razões de projeto são guardadas no DWG com a tabela de classes.

**Desenhar sem ver**

- Ative {{ui:Desenhar sem ver}} em {{ui:Definições}} (ou escreva {{cmd:ACCESS}} e responda `On`). O CadCraft diz em voz alta cada comando e resultado através do seu leitor de ecrã, descreve o desenho e o que está perto do cursor, deixa-o mover o cursor e escolher pontos com o teclado, e reproduz um som para cada snap e grip. Onde o navegador consegue reconhecer voz no seu computador, os comandos podem ser ditos. Veja [Desenhar sem ver](topic:draft-without-sight).

**Em todas as aplicações**

- **Idiomas.** 54 idiomas; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africânder, filipino, suaíli, uzbeque). Os idiomas além do inglês são rascunhos automáticos até um falante nativo os rever.
- **Dispositivos de entrada.** Trackpad, caneta, rato 3D, comando de jogo e controlos MIDI.
- **Linhas da barra de ferramentas e a grelha de propriedades.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Quebrar, 2 linhas ou 1 linha nas outras aplicações. O CadCraft mantém a sua própria definição em {{ui:Definições}} › {{ui:CadCraft}} (veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows)). A grelha de propriedades partilhada está em três outras aplicações, não no CadCraft.
- **Problemas, Live e suplementos.** Um painel de Problemas partilhado que avisa em todas as aplicações, uma vista Live de quem está onde no CadCraft Studio (veja [Trabalhar num desenho em conjunto](topic:work-live)), e uma lista de suplementos.
- **Ligue a sua IA.** Uma única ligação do CadCraft Studio às oito aplicações, com um nível de só leitura, de sugestão ou de edição por aplicação, e um registo em linguagem simples do que o assistente fez. O CadCraft não tem IA própria, e Perguntar em todas as aplicações usa a IA que ligar.

### Corrigido na 0.8.1

- **As Propriedades mostravam 150 em vez de 12'-6"** em desenhos em pés e polegadas. Os campos que a aplicação lê por si voltam a manter o seu texto.
- **Ficheiros DWG cuja secção de classes era lida com o tipo errado** (GitHub cadcraft#5) abrem agora corretamente.
- **A cruz já não aparece por trás das janelas pop-up.**
- **O Studio e as edições empacotadas podem mudar de idioma em tempo de execução.** Antes eram só em inglês. Ainda não testado em todas as plataformas: diga-nos se o idioma não mudar.
- **Tablets na vertical** dão a altura livre da grelha à área de desenho, e o modo de folhas começa em 760 px ou menos.
- **STRETCH com uma janela de cruzamento, e LIMITS,** foram reportados no Studio 0.8.0 e já estavam corretos na versão web da 0.8; o instalador de quem reportou era mais antigo. O Studio 0.8.1 inclui-os.

### Ainda não nesta versão

- **A 0.8 e a 0.8.1 não têm assinatura de código.** O Windows pode avisar (escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}); num Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para loja estão em suspenso, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- **Os esboços à caneta e as fotografias de esboços** só foram testados com fotografias fabricadas e um rato, ainda não com uma caneta real, um ecrã tátil ou um esboço à mão em papel.
- **Desenhar sem ver** foi testado com verificações automáticas, ainda não com um leitor de ecrã nem com um utilizador cego.
- **Partilhar detalhes** não teve uma verificação de duas pessoas, e uma pasta do Team Cloud Plan como pasta Documentos não está implementada.
- **A fusão** funciona para os ficheiros DWG e DXF do CadCraft; para os ficheiros das outras aplicações não está implementada.
- **Anular entre janelas:** o CadCraft indica cada passo concluído, mas o Studio ainda não tem um único Anular para todas as aplicações; cada aplicação anula os seus próprios passos.
- **Os objetos OLE de um DWG** são mantidos mas não são desenhados no seu lugar.
- **A leitura de tabelas de estilos de impressão (ficheiros CTB)** de outros programas está implementada mas não foi verificada com um ficheiro de outro programa.
- **Ligue a sua IA:** a ligação com um clique no Studio, o conector alojado para a IA do navegador, a sua própria chave de API dentro do Studio e o pacote MCP publicado não são prometidos nesta versão.

Para a versão anterior a esta, veja [Novidades da versão 0.7](topic:whats-new-0-7).

---
title: Novidades da versão 0.9
summary: Tramas que seguem o seu contorno, grupos de camadas, pisos empilhados, paredes inteligentes 2D com portas e janelas, estilos de texto e um editor de texto formatado, uma linha de comandos flutuante, snap à grelha, dez maneiras de desenhar um arco e o painel Documentos.
keywords: novidades, 0.9, notas de lançamento, registo de alterações, alterações, trama, trama associativa, hatch, HATCHEDIT, ficheiro de padrões, ficheiro .pat, grupos de camadas, LAYGROUP, pisos, pisos empilhados, FLOORLAYERS, paredes inteligentes, parede, porta, janela, ferramentas de parede, estilo de texto, estilo, editor de MTEXT, texto de parágrafo, formatação, linha de comandos flutuante, linha de comandos, área superior, compacto, snap à grelha, grelha, F9, arco, painel Documentos, retirar, secções de aço do Reino Unido, draw.io, texto em tailandês, DXF R12, novidades, notas de lançamento, 0.8, 0.8.1, versão, novas funcionalidades, autocompletar, fantasma, separador, sketchfix, photosketch, autosheet, detalhes, gridmove, autodim, etiquetas, redline, merge, git, fossil, access, desenhar sem ver, leitor de ecrã, limites, rumos, aunits, shx, diagrama, ole, histórico, comparar, em palavras, propriedades, pés e polegadas, esticar, idiomas, dispositivos de entrada, problemas, live, assistentes
from: 8b6dea0b
---

Eis o que mudou no CadCraft 0.9, em comparação com a 0.8.1. O CadCraft é a aplicação de desenho 2D e 3D do CadCraft Studio 0.9 e das suas oito aplicações. A 0.9 conclui o desenho de plantas, acrescenta estilos de texto e um editor de texto a sério, e dá mais espaço no ecrã.

## Novidades

### Desenho em planta

- **Tramas que seguem o seu contorno.** {{cmd:HATCH}} fica ligado ao que a limita. Mova, rode ou escale o contorno e a trama e o seu padrão seguem; remodele-o e a trama é recalculada. {{cmd:HATCHEDIT}} (`HE`) altera uma trama depois, e cria ou termina a ligação. Veja [Tramas e áreas de preenchimento](topic:hatch).
- **Ficheiros de padrão de trama.** Na pergunta de {{cmd:HATCH}} «Indique um ponto interno», escreva `F` (Ficheiro de padrão) e escolha um ficheiro `.pat`. Só foram testados ficheiros escritos no formato habitual.
- **Grupos de camadas.** Em {{ui:Ferramentas}} no painel {{ui:Camadas}}: {{ui:Novo grupo}}, {{ui:Adicionar grupos predefinidos}}, {{ui:Agrupar por nome}} e {{ui:Procurar uma camada}}; ou escreva {{cmd:LAYGROUP}} (`LG`). Veja [Organizar um desenho com camadas](topic:layers#group-layers).
- **Pisos empilhados.** {{cmd:FLOORS}} (`FLR`), ou {{ui:Pisos…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. Uma viewport numa folha pode mostrar um só piso em {{ui:Piso mostrado}}, nas Propriedades. {{cmd:FLOORLAYERS}} transforma os pisos em camadas para um ficheiro que vai para outra pessoa. Veja [Empilhar pisos num desenho](topic:floors).
- **Paredes inteligentes 2D, portas e janelas.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) e {{cmd:DELOPENING}}. Cantos, uniões em T e cruzamentos são calculados automaticamente. As paredes guardam o registo de como se unem, e as Propriedades ganham {{ui:Não permitir junção no início}} / {{ui:Não permitir junção no fim}}, uma {{ui:Linha de localização}} e um {{ui:Comprimento}} editável. Veja [Desenhar paredes, portas e janelas inteligentes em 2D](topic:walls-2d).
- **As ferramentas de parede nas paredes de planta.** Escreva {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} e as restantes. Ainda não têm botões na barra de ferramentas. Veja [Formas, cortes, offsets e bloqueios de paredes 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), ou {{ui:Estilo de texto}} na barra de ferramentas {{ui:Desenhar}}: estilos com nome, com um tipo de letra, uma altura, um fator de largura e uma inclinação. Veja [Definir o tipo de letra e o tamanho do texto com estilos de texto](topic:text-styles).
- **Um editor de texto de parágrafo formatado.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ou um duplo clique no texto abre uma caixa com tipo de letra, tamanho, negrito, itálico, sublinhado, rasurado, cor, alinhamento e os sinais de grau, de mais ou menos e de diâmetro, mais {{ui:OK}} e {{ui:Cancelar}}. Veja [Formatar texto de parágrafo](topic:format-paragraph-text).
- **Um diagrama a partir de XML do draw.io.** {{cmd:DIAGRAM}} (`T2D`) também lê XML do draw.io colado. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).
- **Texto em tailandês num PDF impresso.** Antes saía com pontos de interrogação.

### Mais espaço e ajudas de desenho

- **Uma linha de comandos flutuante, mais fina, e uma área superior compacta.** Arraste o grip da linha de comandos para a tornar flutuante, arraste a sua borda superior para ter menos linhas, e {{key:F2}} abre o histórico. {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Linha de comandos}} e as opções da área superior têm as mesmas definições. Veja [Definições](topic:settings#command-line).
- **Menu de snap a objetos.** Clique com o botão direito em {{ui:Snap}} na barra de estado, ou escreva {{cmd:OSNAP}}.
- **Snap à grelha.** O botão {{ui:Snap à grelha}} na barra de estado, ou {{key:F9}}: os pontos escolhidos vão para o ponto de grelha mais próximo quando nenhum snap a objetos captou o ponto.
- **Arco de dez maneiras, e Continuar.** {{ui:Arco}} na barra {{ui:Desenhar}} ou {{cmd:ARC}}: três pontos, a família Início/Centro/Fim e a família Centro/Início/Fim, e Continuar (prima {{key:Enter}} no ponto inicial) a partir da última linha, arco ou polilinha.
- **O painel Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) ou {{ui:Documentos…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}: revisão, estado e retirada para cada desenho numa pasta de projeto. Abre como uma caixa de diálogo centrada. Veja [Documentos](topic:documents).

### Ficheiros

- **Perfis de aço do Reino Unido.** 976 secções no painel Standard, escritas como nos desenhos (por exemplo `305x165x40 UB`).
- **Pacotes da África do Sul** (prática de desenho e regulamentos de construção) como pacotes do suplemento Regulamentos de construção. Os números não foram verificados.
- **Suplementos para o CadCraft,** acrescentados a pedido e desativados por defeito: desenho de iluminação de interiores, desenho de chips (de HDL para layout), entalhe com router, simulação de circuitos, rodas dentadas para correntes de rolos, e pacotes de regulamentos de construção por país.

## Corrigido

- Mover, rodar ou escalar uma trama deixava o seu padrão para trás.
- {{cmd:GRIDMOVE}} arrastava uma parede de planta inteira que só começa na linha da grelha. Agora uma parede é avaliada pelas suas extremidades.
- A grelha só aparecia dentro dos limites do desenho, mesmo com os limites desligados.
- A lista de blocos no painel lateral desloca-se, e um nome que não é bloco lista os blocos que começam por ele («Queria dizer?»).
- Os ficheiros DXF R12 que o AutoCAD recusava («Unknown group 1001 for table») abrem agora aí.
- Ficheiros muito grandes (cerca de 70 000 entidades ou mais) não abriam com «Maximum call stack size exceeded».
- Ficheiros DWG do AutoCAD 2018 e posteriores com uma versão de manutenção alta não abriam com «bad BITLONG code 11».
- Na caixa de texto de parágrafo, um novo tamanho escrito para uma parte selecionada mantém a seleção.

## Em todas as aplicações

Dicas Bootstrap em todos os controlos que têm uma sugestão, uma dica inicial que pode fechar, faixas de separadores que deslocam quando não cabem, e um título do separador do navegador que segue o desenho aberto (`<drawing> - CadCraft | CadCraft`). {{ui:Definições}} › {{ui:Esquema}} é agora uma lista pendente de opções de duas linhas. A lista de idiomas em {{ui:Definições}} é mais longa do que na 0.8. A co-edição Live, as coleções da Biblioteca e as unidades de peso e de temperatura são descritas nas notas do Studio.

## Limites reconhecidos

- O texto de parágrafo não tem listas com marcas nem numeradas, régua de tabulações nem justificação. Os PDF impressos compõem o texto em Helvetica.
- As paredes em planta são retas, pelo que um arco é desenhado como pequenas paredes. A verificação pela comunidade da ferramenta de parede está pendente.
- Os grupos de camadas não são escritos no formato próprio do AutoCAD, pelo que o AutoCAD mostra uma lista plana. Outros programas mostram todos os pisos juntos, a não ser que execute {{cmd:FLOORLAYERS}}.
- O painel Documentos ainda não foi testado por duas pessoas numa partilha real. A gravação em router ainda não correu em nenhuma máquina real. A estimativa de iluminação foi verificada contra um traçado de fotões, não contra outro programa. Os suplementos de engenharia são auxiliares de verificação, não substituem a revisão de um engenheiro.
- Os idiomas diferentes do inglês são rascunhos de máquina, e algumas das novas palavras estão só em inglês.

## Anteriores: 0.8 e 0.8.1

Eis o que mudou no CadCraft 0.8 e 0.8.1, em comparação com a 0.7. A 0.8 (1 de novembro de 2026) acrescenta ajudas de desenho que trabalham a partir do próprio desenho, por regras no computador e sem modelo, e a 0.8.1 (2 de novembro de 2026) corrige os erros comunicados depois dela.

### Novidades

**Desenho que antecipa o que falta**

- **Um fantasma mostra o que vem a seguir.** Sem nenhum comando em execução, um fantasma cinzento tracejado mostra o que os padrões do próprio desenho indicam que vem a seguir: o próximo montante à mesma distância, o próximo degrau de uma escada, a parede que falta num compartimento. Prima {{key:Tab}} para o desenhar como um só passo de anulação, ou {{key:Esc}} para o dispensar. Considera apenas os objetos mais recentes, pelo que se mantém fluido num desenho grande. Desligue-o em {{ui:Definições}} › {{ui:CadCraft}} ou com {{cmd:AUTOCOMPLETE}} `Off`.
- **O próximo ponto ao desenhar uma linha.** No meio de {{cmd:LINE}} ou {{cmd:PLINE}}, o fantasma é o próximo ponto: o próximo degrau de uma escada, o quarto canto de um retângulo, ou o ponto que o fecha. Aproxime o cursor dele e prima {{key:Tab}}, como se fosse um clique nesse ponto.
- **Os esboços à caneta tornam-se geometria precisa.** {{cmd:SKETCHFIX}}: desenhe traços rápidos com caneta, rato ou dedo, e cada um torna-se uma linha, círculo, arco, retângulo ou polilinha limpa, ajustado ao que já está desenhado. Veja [Esboçar com caneta e obter geometria precisa](topic:sketch-with-a-pen).
- **Uma fotografia de um esboço torna-se um desenho.** {{cmd:PHOTOSKETCH}} (`PSK`) encontra o papel numa fotografia, endireita a perspetiva, aplica o formato de papel e a escala que indicar, e traça as linhas de caneta para uma camada de cada cor de caneta. As letras não são traçadas.
- **Cotagem por regras.** {{cmd:AUTODIM}} (`ADIM`) faz cadeias de cotas ao longo dos lados que escolher, uma dimensão global, larguras de vãos, diâmetros de furos e, com `Grid`, o espaçamento da grelha. Nunca repete uma cota que já existe.
- **Mover uma linha de grelha e o conjunto segue.** {{cmd:GRIDMOVE}} (`GM`): as paredes que terminam na linha da grelha esticam com ela, as paredes ao longo dela, os pilares, a bolha e a etiqueta movem-se, e as cotas sobre ela medem o novo espaçamento. Um passo de anulação.

**Folhas, detalhes e etiquetas**

- **Folhas que se dispõem sozinhas.** {{cmd:AUTOSHEET}} pega nas suas vistas com nome (ou nas peças separadas do modelo), escolhe um formato de papel e uma escala padrão, e coloca as vistas em folhas novas com uma legenda e um rótulo com nome e escala. Tudo continua editável. Veja [Dispor folhas automaticamente](topic:lay-out-sheets-for-me).
- **Os detalhes da empresa, sugeridos enquanto desenha.** {{cmd:DETAILS}} (`DET`) guarda os seus próprios blocos de detalhe. Quando o que seleciona coincide com um deles pelas palavras das suas camadas, nomes de blocos e notas, a barra de estado diz isso; escolha-o e coloque-o. {{cmd:DETAILS}} › Partilhar coloca a sua lista na pasta Documentos e traz o que a equipa acrescentou. As {{ui:Definições}} desligam as sugestões.
- **Etiquetas em blocos.** {{cmd:TAGS}} define uma etiqueta (o seu tipo, os valores que pode ter, os blocos a que se aplica), define-a nas referências de bloco que selecionar, e lista-as como um mapa que pode guardar como CSV. As definições ficam guardadas no DWG. Veja [Etiquetas](topic:tags).
- **Limites do desenho.** {{cmd:LIMITS}} define um retângulo para o desenho: a grelha preenche-o e o zoom Tudo mostra-o. Os limites aparecem como contorno e ficam guardados em DWG e DXF, com os limites de papel. Veja [Definir os limites do desenho](topic:drawing-limits).

**Trabalhar com outras pessoas e outros programas**

- **Transformar uma anotação de revisão numa revisão.** {{cmd:REDLINE}} lê o pacote que o MarkupCraft escreve e lista cada alteração. Aceite ou rejeite cada uma com uma nota; as aceites recebem uma nuvem de revisão e um registo de revisões num só passo de anulação, e guarda-se o ficheiro de respostas que fecha as anotações no MarkupCraft. Veja [Transformar uma anotação de revisão numa revisão](topic:redline-to-revision).
- **Desenhos que o git e o Fossil conseguem fundir.** Com {{ui:Ficheiros compatíveis com fusão}} ativado em {{ui:Definições}} › {{ui:CadCraft}}, cada objeto recebe uma chave que nunca muda (os ficheiros ficam cerca de 10 por cento maiores). `cadcraft merge base ours theirs` funde então as edições feitas por duas pessoas num mesmo DWG ou DXF, objeto a objeto, e só indica onde duas pessoas alteraram a mesma coisa. Veja [Fundir as edições de duas pessoas num desenho](topic:merge-drawings).
- **O que mudou, em palavras.** Em Histórico, {{ui:Comparar}} dá uma lista simples: onde as coisas mudaram, a dimensão das áreas afetadas, o que foi acrescentado, removido ou alterado, e o texto que foi editado. Veja [Dizer em palavras o que mudou](topic:changes-in-words).
- **Rumos e ângulos.** Escreva uma direção como rumo de topógrafo, como N45°23'30"E, ou em graus, minutos e segundos, em qualquer sítio onde se pede um ângulo; AUNITS define a forma como os ângulos são mostrados. Veja [Escrever e mostrar rumos e ângulos](topic:bearings-and-angles).
- **Os seus próprios tipos de letra SHX.** Indique ao CadCraft uma pasta de tipos de letra SHX, e os estilos de texto que os nomeiem são desenhados com eles, no ecrã e nas impressões. Veja [Desenhar texto com os seus próprios tipos de letra SHX](topic:shx-fonts).
- **Um diagrama a partir de texto.** {{cmd:DIAGRAM}} lê um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de origem e destino, e desenha blocos e conectores que pode editar. Veja [Desenhar um diagrama a partir de texto](topic:text-to-diagram).
- **Objetos OLE num DWG.** {{cmd:OLELIST}} lista os objetos OLE que um DWG tem e que o CadCraft não consegue colocar sozinho, e coloca uma cópia de uma imagem onde indicar. Veja [Imagens](topic:pictures#objects-from-other-programs-ole).
- **As suas calculações ficam com o desenho.** As folhas de cálculo e as justificações de projeto ficam guardadas no DWG, com a tabela de classes.

**Desenhar sem ver**

- Ative {{ui:Desenhar sem ver}} em {{ui:Definições}} (ou escreva {{cmd:ACCESS}} e responda `On`). O CadCraft lê em voz alta cada comando e resultado através do seu leitor de ecrã, descreve o desenho e o que está perto do cursor, permite mover o cursor e escolher pontos pelo teclado, e toca um som em cada snap e em cada grip. Quando o navegador consegue reconhecer fala no computador, os comandos podem ser ditados. Veja [Desenhar sem ver](topic:draft-without-sight).

**Em todas as aplicações**

- **Idiomas.** 54 idiomas; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africânder, filipino, suaíli, uzbeque). Os idiomas para além do inglês são rascunhos de máquina até que um falante nativo os reveja.
- **Dispositivos de entrada.** Trackpad, caneta, rato 3D, comando de jogos e controlos MIDI.
- **Linhas da barra de ferramentas e a grelha de propriedades.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Ajustar, 2 linhas ou 1 linha nas outras aplicações. O CadCraft mantém a sua própria definição em {{ui:Definições}} › {{ui:CadCraft}} (veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows)). A grelha de propriedades partilhada está em três outras aplicações, não no CadCraft.
- **Problemas, Live e suplementos.** Um painel Problemas partilhado que avisa em todas as aplicações, uma vista Live de quem está onde no CadCraft Studio (veja [Trabalhar num desenho em conjunto com o Live TeamWork](topic:work-live)), e uma lista de suplementos.
- **Ligar a IA.** Uma ligação do CadCraft Studio às oito aplicações, com um nível de só leitura, de sugestão ou de edição por aplicação, e um registo em linguagem simples do que o assistente fez. O CadCraft não tem IA própria, e Perguntar em todas as aplicações usa a IA que ligar.

### Corrigido na 0.8.1

- **As Propriedades mostravam 150 em vez de 12'-6"** em desenhos em pés e polegadas. Os campos que a própria aplicação lê voltam a manter o seu texto.
- **Ficheiros DWG cuja secção de classes era lida como outro tipo** (GitHub cadcraft#5) abrem agora corretamente.
- **O cursor já não aparece por trás das janelas pop-up.**
- **O Studio e as edições empacotadas podem mudar de idioma em tempo de execução.** Antes eram só em inglês. Ainda não testado em todas as plataformas: informe-nos se o idioma não mudar.
- **Tablets em retrato** dão à área de desenho a altura que sobra na grelha, e o modo de folhas começa aos 760 px ou menos.
- **STRETCH com janela de cruzamento, e LIMITS,** foram comunicados no Studio 0.8.0 e já estavam corretos na versão web 0.8; o instalador de quem o comunicou era mais antigo. A Studio 0.8.1 inclui-os.

### Ainda não nesta versão

- **0.8 e 0.8.1 não têm assinatura de código.** O Windows pode avisar (escolha {{ui:Mais informações}}, depois {{ui:Executar mesmo assim}}); num Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para loja estão suspensas, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- **Os esboços à caneta e as fotografias de esboços** foram testados apenas com fotografias inventadas e rato, ainda não com uma caneta real, um ecrã tátil ou um esboço feito à mão em papel.
- **Desenhar sem ver** foi testado com verificações automáticas, ainda não com um leitor de ecrã nem com um testador cego.
- **A partilha de detalhes** não teve uma verificação por duas pessoas, e uma pasta do Team Cloud Plan como pasta Documentos ainda não está construída.
- **A fusão** funciona para os ficheiros DWG e DXF do CadCraft; o mesmo para os ficheiros das outras aplicações ainda não está construído.
- **Anular entre janelas:** o CadCraft comunica cada passo concluído, mas o Studio ainda não tem um único Anular para todas as aplicações; cada aplicação anula os seus próprios passos.
- **Os objetos OLE de um DWG** são mantidos, mas não desenhados no seu lugar.
- **A leitura de tabelas de estilos de impressão (ficheiros CTB)** de outros programas está construída, mas ainda não foi verificada com um ficheiro de outro programa.
- **Ligar a IA:** a ligação com um clique no Studio, o conector alojado para IA no navegador, a sua própria chave de API dentro do Studio e o pacote MCP publicado não estão prometidos nesta versão.

Para a versão anterior, veja [Novidades da versão 0.7](topic:whats-new-0-7).

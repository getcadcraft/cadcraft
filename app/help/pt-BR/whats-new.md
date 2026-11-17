---
title: Novidades da versão 0.9
summary: Hachuras que seguem o contorno, grupos de camadas, pavimentos empilhados, paredes inteligentes 2D com portas e janelas, estilos de texto e um editor de texto formatado, uma linha de comando flutuante, snap de grade, dez formas de desenhar um arco e o painel Documentos.
keywords: novidades, 0.9, notas de versão, registro de alterações, hachura, hachura associativa, hatchedit, arquivo pat, arquivo de padrão, grupos de camadas, laygroup, pavimentos, pavimentos empilhados, floorlayers, paredes inteligentes, parede, porta, janela, ferramentas de parede, estilo de texto, estilo, editor mtext, texto de parágrafo, formatação, linha de comando flutuante, linha de comando, área superior, compacta, snap na grade, snap de grade, f9, arco, painel documentos, check out, seções de aço do Reino Unido, draw.io, texto em tailandês, dxf r12, novidades, what's new, changelog, alterações, 0.8, 0.8.1, versão, novos recursos, preenchimento automático, fantasma, tab, sketchfix, photosketch, autosheet, detalhes, gridmove, autodim, etiquetas, redline, mesclar, git, fossil, access, desenhar sem enxergar, leitor de tela, limites, rumos, aunits, shx, diagrama, ole, histórico, comparar, em palavras, propriedades, pés e polegadas, esticar, idiomas, dispositivos de entrada, problemas, live, assistentes
from: 8b6dea0b
---

Estas são as mudanças da versão 0.9 do CadCraft, em comparação com a 0.8.1. O CadCraft é o aplicativo de desenho 2D e 3D do CadCraft Studio 0.9 e de seus oito aplicativos. A 0.9 conclui o desenho de plantas, acrescenta estilos de texto e um editor de texto de verdade, e dá mais espaço na tela.

## Novidades

### Desenho de plantas

- **Hachuras que seguem o contorno.** {{cmd:HATCH}} se liga ao que a delimita. Mova, gire ou escale o contorno, e a hachura e o padrão dela seguem; redesenhe-o, e a hachura é calculada de novo. {{cmd:HATCHEDIT}} (`HE`) altera uma hachura depois e cria ou encerra essa ligação. Veja [Hachura e áreas de preenchimento](topic:hatch).
- **Arquivos de padrão de hachura.** Na pergunta `Pick internal point` do {{cmd:HATCH}}, digite `F` (arquivo de padrão) e escolha um arquivo `.pat`. Somente arquivos escritos no formato usual foram testados.
- **Grupos de camadas.** Em {{ui:Ferramentas}} no painel {{ui:Camadas}}: {{ui:Novo grupo}}, {{ui:Adicionar grupos prontos}}, {{ui:Agrupar por nome}} e {{ui:Localizar uma camada}}; ou digite {{cmd:LAYGROUP}} (`LG`). Veja [Organize um desenho com camadas](topic:layers#group-layers).
- **Pavimentos empilhados.** {{cmd:FLOORS}} (`FLR`), ou {{ui:Pavimentos…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. Uma viewport em uma folha pode mostrar um pavimento em {{ui:Pavimento exibido}} nas Propriedades. {{cmd:FLOORLAYERS}} transforma pavimentos em camadas para um arquivo que vai para outra pessoa. Veja [Empilhe pavimentos em um desenho](topic:floors).
- **Paredes inteligentes 2D, portas e janelas.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) e {{cmd:DELOPENING}}. Cantos, uniões em T e cruzamentos são calculados para você. As paredes guardam o registro de como se unem, e as Propriedades ganham {{ui:Disallow join at start}} / {{ui:Disallow join at end}}, uma Linha de localização e um Comprimento editável. Veja [Desenhe paredes inteligentes, portas e janelas em 2D](topic:walls-2d).
- **A ferramenta de parede nas paredes de planta.** Digite {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} e as demais. Elas ainda não têm botões na barra de ferramentas. Veja [Formas, cortes, deslocamentos e travamentos de paredes em 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), ou {{ui:Estilo de texto}} na barra {{ui:Desenhar}}: estilos nomeados com uma fonte, altura, fator de largura e inclinação. Veja [Defina a fonte e o tamanho do texto com estilos de texto](topic:text-styles).
- **Um editor de texto de parágrafo formatado.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ou um duplo clique em um texto abre uma caixa com fonte, tamanho, negrito, itálico, sublinhado, tachado, cor, alinhamento e os sinais de grau, mais e menos e diâmetro, além de {{ui:OK}} e {{ui:Cancelar}}. Veja [Formate texto de parágrafo](topic:format-paragraph-text).
- **Um diagrama a partir de XML do draw.io.** {{cmd:DIAGRAM}} (`T2D`) também lê XML do draw.io colado. Veja [Desenhe um diagrama a partir de texto](topic:text-to-diagram).
- **Texto em tailandês em uma plotagem PDF.** Antes, saía como pontos de interrogação.

### Mais espaço e auxílios de desenho

- **Linha de comando flutuante, mais fina, e área superior compacta.** Arraste a alça da linha de comando para deixá-la flutuante, arraste a borda superior dela para ter menos linhas, e {{key:F2}} abre o histórico. {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Linha de comando}} e as opções da área superior têm as mesmas configurações. Veja [Configurações](topic:settings#command-line).
- **Menu de snap de objeto.** Clique com o botão direito em {{ui:Snap}} na barra de status, ou digite {{cmd:OSNAP}}.
- **Snap na grade.** O botão {{ui:Snap de grade}} na barra de status, ou {{key:F9}}: os pontos escolhidos vão para o ponto de grade mais próximo quando nenhum snap de objeto pegou o ponto.
- **Arco de dez formas, e Continuar.** {{ui:Arco}} na barra {{ui:Desenhar}} ou {{cmd:ARC}}: 3 pontos, a família Início/Centro/Fim e a família Centro/Início/Fim, e Continuar (pressione {{key:Enter}} no ponto inicial) a partir da última linha, arco ou polilinha.
- **O painel Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) ou {{ui:Documentos…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}: revisão, estado e check-out de cada desenho em uma pasta de projeto. Ele abre como uma caixa de diálogo centralizada. Veja [Documentos](topic:documents).

### Arquivos

- **Seções de aço do Reino Unido.** 976 perfis no painel Padrão, digitados como nos desenhos (por exemplo `305x165x40 UB`).
- **Pacotes da África do Sul** (prática de desenho e normas de edificação) como pacotes do complemento Normas de edificação. Os números não foram verificados.
- **Complementos para o CadCraft,** adicionados sob demanda e desligados por padrão: projeto de iluminação interna, projeto de chips (de HDL para layout), entalhe com roteador, simulação de circuitos, pinhões de corrente de rolos e pacotes de país do complemento Normas de edificação.

## Corrigido

- Mover, girar ou escalar uma hachura deixava o padrão para trás.
- {{cmd:GRIDMOVE}} arrastava uma parede de planta inteira que só começa na linha de grade. Agora uma parede é avaliada pelas extremidades.
- A grade aparecia só dentro dos limites do desenho, mesmo com os limites desligados.
- A lista de blocos no painel lateral rola, e um nome que não é bloco lista os blocos que começam com ele ("Você quis dizer").
- Arquivos DXF R12 que o AutoCAD recusava ("Unknown group 1001 for table") agora abrem.
- Desenhos muito grandes (cerca de 70 000 entidades ou mais) não abriam com "Maximum call stack size exceeded".
- Arquivos DWG do AutoCAD 2018 em diante, com uma versão de manutenção alta, não abriam com "bad BITLONG code 11".
- Na caixa de texto de parágrafo, um novo tamanho digitado para uma parte selecionada mantém a seleção.

## Em todos os aplicativos

Dicas Bootstrap em todos os controles com uma sugestão, uma dica inicial que você pode fechar, guias de abas que rolam quando não cabem, e um título de aba do navegador que segue o desenho aberto (`<drawing> - CadCraft | CadCraft`). {{ui:Configurações}} › {{ui:Layout}} agora é uma lista suspensa de opções de duas linhas. A lista de idiomas em {{ui:Configurações}} é maior do que na 0.8. A coedição Live, as coleções da biblioteca e as unidades de peso e temperatura são descritas nas notas do Studio.

## Limites reconhecidos

- Texto de parágrafo não tem listas com marcadores ou numeradas, régua de tabulação nem justificação. PDFs plotados definem o texto em Helvetica.
- Paredes de planta são retas, então um arco é desenhado como pequenas paredes. A verificação da ferramenta de parede pela comunidade ainda está pendente.
- Grupos de camadas não são gravados no formato próprio do AutoCAD, então o AutoCAD mostra uma lista plana. Outros programas mostram todos os pavimentos juntos, a não ser que você execute {{cmd:FLOORLAYERS}}.
- O painel Documentos ainda não foi testado por duas pessoas em um compartilhamento real. O entalhe com roteador não rodou em nenhuma máquina real. A estimativa de iluminação foi conferida com um rastreamento de fótons, não com outro programa. Os complementos de engenharia são auxílios de conferência, não substituem a revisão de um engenheiro.
- Idiomas diferentes do inglês são rascunhos feitos por máquina, e algumas das palavras novas estão só em inglês.

## Antes: 0.8 e 0.8.1

Estas são as mudanças das versões 0.8 e 0.8.1, em comparação com a 0.7. A 0.8 (1 de novembro de 2026) acrescenta auxílios de desenho que trabalham a partir do seu próprio desenho, por regras no seu computador e sem modelo, e a 0.8.1 (2 de novembro de 2026) corrige erros reportados depois dela.

### Novidades

**Desenho que completa o seu raciocínio**

- **Um fantasma mostra o que vem a seguir.** Sem nenhum comando em execução, um fantasma cinza tracejado mostra o que os padrões do seu próprio desenho indicam como próximo passo: o próximo montante com o mesmo espaçamento, o próximo degrau de uma escada, a parede que falta em um cômodo. Pressione {{key:Tab}} para desenhá-lo como uma etapa de desfazer, ou {{key:Esc}} para dispensá-lo. Ele olha apenas para os objetos mais novos, então continua fluido em um desenho grande. Desligue-o em {{ui:Configurações}} › {{ui:CadCraft}} ou com {{cmd:AUTOCOMPLETE}} `Off`.
- **O próximo ponto enquanto você desenha uma linha.** No meio de {{cmd:LINE}} ou {{cmd:PLINE}}, o fantasma é o próximo ponto: o próximo degrau de uma escada, o quarto canto de um retângulo, ou o ponto que o fecha. Aproxime o cursor dele e pressione {{key:Tab}}, como se você tivesse clicado ali.
- **Esboços à caneta viram geometria precisa.** {{cmd:SKETCHFIX}}: desenhe traços soltos com caneta, mouse ou dedo, e cada um vira uma linha, círculo, arco, retângulo ou polilinha limpos, encaixados no que já está desenhado. Veja [Desenhe à mão com caneta e obtenha geometria precisa](topic:sketch-with-a-pen).
- **Uma foto de um esboço vira um desenho.** {{cmd:PHOTOSKETCH}} (`PSK`) encontra o papel em uma foto, endireita a perspectiva, aplica o tamanho de papel e a escala que você informar, e traça as linhas da caneta em uma camada para cada cor de caneta. Letras não são traçadas.
- **Cote por regras.** {{cmd:AUTODIM}} (`ADIM`) cria correntes de cotas ao longo dos lados que você escolher, uma cota geral, larguras de vãos, diâmetros de furos e, com `Grid`, o espaçamento da grade. Nunca repete uma cota que já existe.
- **Mova uma linha de grade e o conjunto segue.** {{cmd:GRIDMOVE}} (`GM`): paredes que terminam na linha de grade se esticam com ela, paredes ao longo dela, pilares, seu balão e sua etiqueta se movem, e cotas sobre ela medem o novo espaçamento. Uma etapa de desfazer.

**Folhas, detalhes e etiquetas**

- **Folhas que se organizam sozinhas.** {{cmd:AUTOSHEET}} pega suas vistas nomeadas (ou as partes separadas do modelo), escolhe um tamanho de papel e uma escala padrão, e coloca as vistas em folhas novas com uma legenda e uma legenda de nome e escala. Tudo continua editável. Veja [Monte as folhas para mim](topic:lay-out-sheets-for-me).
- **Os detalhes da sua empresa, oferecidos enquanto você desenha.** {{cmd:DETAILS}} (`DET`) mantém seus próprios blocos de detalhe. Quando o que você seleciona corresponde a um deles pelas palavras nas camadas, nos nomes dos blocos e nas notas, a barra de status avisa; escolha-o e posicione. {{cmd:DETAILS}} › Compartilhar coloca sua lista na pasta Documentos e traz o que a sua equipe acrescentou. As Configurações desligam as sugestões.
- **Etiquetas em blocos.** {{cmd:TAGS}} define uma etiqueta (o tipo, os valores que ela pode ter, os blocos a que se aplica), a aplica às referências de bloco que você seleciona e as lista como uma tabela que você pode salvar como CSV. As definições ficam no DWG. Veja [Etiquetas](topic:tags).
- **Limites do desenho.** {{cmd:LIMITS}} define um retângulo para o desenho: a grade o preenche, e o zoom Tudo o mostra. Os limites aparecem como um contorno e são salvos em DWG e DXF, junto com os limites de papel. Veja [Defina os limites do desenho](topic:drawing-limits).

**Trabalho com outras pessoas e outros programas**

- **Transforme uma marcação em revisão.** {{cmd:REDLINE}} lê o pacote que o MarkupCraft grava e lista cada mudança. Aceite ou recuse cada uma com uma nota; as aceitas ganham uma nuvem de revisão e um registro de revisão, em uma etapa de desfazer, e você salva o arquivo de respostas que fecha as marcações no MarkupCraft. Veja [Transforme uma marcação em revisão](topic:redline-to-revision).
- **Desenhos que o git e o Fossil conseguem mesclar.** Com {{ui:Arquivos compatíveis com mesclagem}} ligado em {{ui:Configurações}} › {{ui:CadCraft}}, cada objeto recebe uma chave que nunca muda (os arquivos ficam cerca de 10% maiores). `cadcraft merge base ours theirs` então mescla as edições de duas pessoas em um mesmo objeto DWG ou DXF, objeto por objeto, e informa apenas onde duas pessoas mudaram a mesma coisa. Veja [Mescle as edições de duas pessoas em um desenho](topic:merge-drawings).
- **O que mudou, em palavras.** No Histórico, Comparar dá uma lista simples: onde as coisas mudaram, o tamanho dos lugares, o que foi adicionado, removido ou alterado, e o texto que foi editado. Veja [Diga em palavras o que mudou](topic:changes-in-words).
- **Rumos e ângulos.** Digite uma direção como um rumo de topógrafo, como N45°23'30"E, ou em graus, minutos e segundos, em qualquer lugar onde se pede um ângulo; AUNITS define como os ângulos são mostrados. Veja [Digite e mostre rumos e ângulos](topic:bearings-and-angles).
- **Suas próprias fontes SHX.** Dê ao CadCraft uma pasta de fontes SHX, e estilos de texto que as citem são desenhados com elas, na tela e nas plotagens. Veja [Desenhe texto com suas próprias fontes SHX](topic:shx-fonts).
- **Um diagrama a partir de texto.** {{cmd:DIAGRAM}} lê um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de origem e destino, e desenha blocos e conectores que você pode editar. Veja [Desenhe um diagrama a partir de texto](topic:text-to-diagram).
- **Objetos OLE em um DWG.** {{cmd:OLELIST}} lista os objetos OLE que um DWG traz e que o CadCraft não consegue posicionar sozinho, e coloca uma cópia de uma imagem onde você indicar. Veja [Imagens](topic:pictures#objects-from-other-programs-ole).
- **Seus cálculos ficam com o desenho.** Folhas de cálculo e justificativas de projeto são mantidas no DWG, junto com a tabela de classes.

**Desenhar sem enxergar**

- Ligue {{ui:Desenhar sem enxergar}} em {{ui:Configurações}} (ou digite {{cmd:ACCESS}} e responda `On`). O CadCraft fala cada comando e resultado pelo seu leitor de tela, descreve o desenho e o que está perto do cursor, deixa você mover o cursor e escolher pontos pelo teclado, e toca um som para cada snap e grip. Onde o seu navegador reconhece fala no seu computador, os comandos podem ser ditados. Veja [Desenhe sem enxergar](topic:draft-without-sight).

**Em todos os aplicativos**

- **Idiomas.** 54 idiomas; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli, uzbeque). Idiomas além do inglês são rascunhos feitos por máquina até que um falante nativo os revise.
- **Dispositivos de entrada.** Trackpad, caneta, mouse 3D, controle de videogame e controles MIDI.
- **Linhas da barra de ferramentas e a grade de propriedades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Quebrar, 2 linhas ou 1 linha nos outros aplicativos. O CadCraft mantém a própria configuração em {{ui:Configurações}} › {{ui:CadCraft}} (veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows)). A grade de propriedades compartilhada fica em três outros aplicativos, não no CadCraft.
- **Problemas, Live e complementos.** Um painel Problemas compartilhado que avisa em todos os aplicativos, uma visão Live no CadCraft Studio de quem está onde (veja [Trabalhe em um desenho junto](topic:work-live)), e uma lista de complementos.
- **Conecte sua IA.** Uma conexão do CadCraft Studio para os oito aplicativos, com um nível somente leitura, de sugestão ou de edição por aplicativo, e um registro em linguagem simples do que o assistente fez. O CadCraft não tem IA própria, e Perguntar em todos os aplicativos usa a IA que você conectar.

### Corrigido na 0.8.1

- **Propriedades mostravam 150 em vez de 12'-6"** em desenhos com pés e polegadas. Campos que o aplicativo lê por conta própria voltam a manter o próprio texto.
- **Arquivos DWG cuja seção de classes era lida como outro tipo** (GitHub cadcraft#5) agora abrem corretamente.
- **O cursor de mira não aparece mais atrás de janelas pop-up.**
- **O Studio e as edições empacotadas podem trocar de idioma em tempo de execução.** Antes, eram só em inglês. Ainda não testado em todas as plataformas: avise-nos se o idioma não mudar.
- **Tablets na vertical** dão a altura livre da grade para a área de desenho, e o modo de folhas começa em 760 px ou menos.
- **STRETCH com uma janela de cruzamento, e LIMITS,** foram relatados no Studio 0.8.0 e já estavam corretos na versão web 0.8; o instalador de quem relatou era mais antigo. O Studio 0.8.1 os traz.

### Não nesta versão ainda

- **A 0.8 e a 0.8.1 não têm assinatura de código.** O Windows pode avisar (escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}); em um Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para lojas estão em espera, e o build para iPad e iPhone não foi refeito para a 0.8.1.
- **Esboços à caneta e fotos de esboços** foram testados só com fotos inventadas e mouse, ainda não com uma caneta real, tela touch ou um esboço à mão no papel.
- **Desenhar sem enxergar** foi testado com verificações automáticas, ainda não com um leitor de tela ou um testador cego.
- **Compartilhar detalhes** não passou por verificação com duas pessoas, e uma pasta do Team Cloud Plan como pasta Documentos não está pronta.
- **Mesclagem** funciona para arquivos DWG e DXF do CadCraft; para os arquivos dos outros aplicativos, ainda não está pronta.
- **Desfazer entre janelas:** o CadCraft informa cada etapa concluída, mas o Studio ainda não tem um Desfazer único para todos os aplicativos; cada um desfaz as próprias etapas.
- **Os objetos OLE de um DWG** são mantidos, mas não desenhados no lugar.
- **A leitura de tabelas de estilo de plotagem (arquivos CTB)** de outros programas está pronta, mas não foi conferida com um arquivo de outro programa.
- **Conecte sua IA:** conexão com um clique no Studio, o conector hospedado para IA no navegador, sua própria chave de API dentro do Studio e o pacote MCP publicado não são prometidos nesta versão.

Para a versão anterior, veja [Novidades da versão 0.7](topic:whats-new-0-7).

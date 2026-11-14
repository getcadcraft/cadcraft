---
title: Novidades na 0.8 e 0.8.1
summary: Um fantasma que completa o seu desenho, esboços à caneta e fotografias de esboços convertidos em geometria, folhas que se organizam sozinhas, detalhes sugeridos ao desenhar, GRIDMOVE e AUTODIM, etiquetas, ficheiros compatíveis com fusão, anotações de revisão convertidas em revisões, desenhar sem ver, limites do desenho, rumos, tipos de letra SHX, diagramas a partir de texto e correções na 0.8.1.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, preenchimento automático, fantasma, Tab, sketchfix, photosketch, autosheet, detalhes, gridmove, autodim, etiquetas, revisão, fusão, git, fossil, acesso, desenhar sem ver, leitor de ecrã, limites, rumos, aunits, shx, diagrama, ole, histórico, comparar, por palavras, propriedades, pés e polegadas, esticar, idiomas, dispositivos de entrada, problemas, live, assistentes
from: 9dd82db5
---

Eis o que mudou no CadCraft 0.8 e 0.8.1, em comparação com a 0.7. A 0.8 (1 de novembro de 2026) acrescenta auxiliares de desenho que funcionam a partir do seu próprio desenho, por regras no seu computador e sem modelo, e a 0.8.1 (2 de novembro de 2026) corrige os erros comunicados depois dela.

## Novidades

### Desenho que completa a sua ideia

- **Um fantasma mostra o que vem a seguir.** Sem nenhum comando em execução, um fantasma cinzento tracejado mostra o que os próprios padrões do seu desenho indicam como seguinte: o próximo montante com o mesmo espaçamento, o próximo degrau de uma escada, a parede que falta numa divisão. Prima {{key:Tab}} para o desenhar como um único passo de anulação, ou {{key:Esc}} para o dispensar. Analisa apenas os objetos mais recentes, pelo que se mantém fluido num desenho grande. Desative-o em {{ui:Definições}} › {{ui:CadCraft}} ou com {{cmd:AUTOCOMPLETE}} `Off`.
- **O ponto seguinte enquanto desenha uma linha.** A meio de {{cmd:LINE}} ou {{cmd:PLINE}}, o fantasma é o ponto seguinte: o próximo degrau de uma escada, o quarto canto de um retângulo ou o ponto que o fecha. Aproxime o cursor e prima {{key:Tab}}, como se tivesse clicado ali.
- **Os esboços à caneta tornam-se geometria precisa.** {{cmd:SKETCHFIX}}: desenhe traços rápidos com uma caneta, rato ou dedo e cada um torna-se uma linha, círculo, arco, retângulo ou polilinha limpos, ajustados ao que já está desenhado. Veja [Desenhe à caneta e obtenha geometria precisa](topic:sketch-with-a-pen).
- **Uma fotografia de um esboço torna-se um desenho.** {{cmd:PHOTOSKETCH}} (`PSK`) encontra a folha de papel numa fotografia, endireita a perspetiva, aplica o formato de papel e a escala que indicar, e transfere os traços de caneta para uma camada por cada cor de caneta. As inscrições não são transferidas.
- **Cote por regras.** {{cmd:AUTODIM}} (`ADIM`) cria cadeias de cotas ao longo dos lados que escolher, uma dimensão total, larguras de vão, diâmetros de furo e, com `Grid`, o espaçamento da grelha. Nunca repete uma cota que já existe.
- **Mova uma linha da grelha e o conjunto acompanha.** {{cmd:GRIDMOVE}} (`GM`): as paredes que terminam na linha da grelha esticam com ela, as paredes ao longo dela, os pilares, o seu balão e a etiqueta movem-se, e as cotas sobre ela medem o novo espaçamento. Um único passo de anulação.

### Folhas, detalhes e etiquetas

- **Folhas que se organizam sozinhas.** {{cmd:AUTOSHEET}} recolhe as suas vistas com nome (ou as peças separadas do modelo), escolhe um formato de papel e uma escala padrão, e coloca as vistas em folhas novas com uma legenda e um rótulo com nome e escala. Tudo continua editável. Veja [Organize as folhas automaticamente](topic:lay-out-sheets-for-me).
- **Os detalhes da sua empresa, sugeridos ao desenhar.** {{cmd:DETAILS}} (`DET`) guarda os seus próprios blocos de detalhe. Quando o que seleciona coincide com um deles pelas palavras nas respetivas camadas, nomes de blocos e notas, a barra de estado indica-o; escolha-o e coloque-o. {{cmd:DETAILS}} › Partilhar coloca a sua lista na pasta Documentos e traz o que a sua equipa acrescentou. Em Definições desativam-se as sugestões.
- **Etiquetas em blocos.** {{cmd:TAGS}} define uma etiqueta (o seu tipo, os valores que pode tomar, os blocos a que se aplica), aplica-a às referências de bloco que selecionar, e lista-as num mapa que pode guardar em CSV. As definições ficam guardadas no DWG. Veja [Etiquetas](topic:tags).
- **Limites do desenho.** {{cmd:LIMITS}} define um retângulo para o desenho: a grelha preenche-o e zoom Tudo mostra-o. Os limites aparecem como contorno e são guardados em DWG e DXF, juntamente com os limites do papel. Veja [Defina os limites do desenho](topic:drawing-limits).

### Trabalhar com outras pessoas e outros programas

- **Transforme uma anotação numa revisão.** {{cmd:REDLINE}} lê o pacote que o MarkupCraft escreve e lista cada alteração. Aceite ou recuse cada uma com uma nota; as aceites recebem uma nuvem de revisão e um registo de revisões num único passo de anulação, e guarda-se o ficheiro de respostas que fecha as anotações no MarkupCraft. Veja [Transforme uma anotação numa revisão](topic:redline-to-revision).
- **Desenhos que o git e o Fossil conseguem fundir.** Com {{ui:Ficheiros compatíveis com fusão}} ligado em {{ui:Definições}} › {{ui:CadCraft}}, cada objeto recebe uma chave que nunca muda (os ficheiros ficam cerca de 10 por cento maiores). `cadcraft merge base ours theirs` funde então as alterações de duas pessoas a um mesmo objeto DWG ou DXF, objeto a objeto, e indica apenas onde duas pessoas alteraram a mesma coisa. Veja [Funda as alterações de duas pessoas num desenho](topic:merge-drawings).
- **O que mudou, por palavras.** No Histórico, Comparar dá uma lista simples: onde as coisas mudaram, a dimensão das zonas afetadas, o que foi acrescentado, removido ou alterado, e o texto que foi editado. Veja [Diga por palavras o que mudou](topic:changes-in-words).
- **Rumos e ângulos.** Escreva uma direção como rumo de topógrafo, tal como N45°23'30"E, ou em graus, minutos e segundos, em qualquer ponto em que seja pedido um ângulo; AUNITS define a forma como os ângulos são apresentados. Veja [Escreva e apresente rumos e ângulos](topic:bearings-and-angles).
- **Os seus próprios tipos de letra SHX.** Indique ao CadCraft uma pasta de tipos de letra SHX, e os estilos de texto que os nomeiam são desenhados com eles, no ecrã e nas impressões. Veja [Desenhe texto nos seus próprios tipos de letra SHX](topic:shx-fonts).
- **Um diagrama a partir de texto.** {{cmd:DIAGRAM}} lê um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de origem e destino, e desenha blocos e conetores que pode editar. Veja [Desenhe um diagrama a partir de texto](topic:text-to-diagram).
- **Objetos OLE num DWG.** {{cmd:OLELIST}} lista os objetos OLE que um DWG contém e que o CadCraft não consegue colocar por si, e coloca uma cópia de uma imagem onde indicar. Veja [Imagens](topic:pictures#objects-from-other-programs-ole).
- **Os seus cálculos ficam com o desenho.** As folhas de cálculo e as justificações de projeto ficam guardadas no DWG, com a tabela de classes.

### Desenhar sem ver

- Ative {{ui:Desenhar sem ver}} em {{ui:Definições}} (ou escreva {{cmd:ACCESS}} e responda `On`). O CadCraft anuncia cada comando e resultado através do seu leitor de ecrã, descreve o desenho e o que está perto do cursor, permite-lhe mover o cursor e escolher pontos com o teclado, e reproduz um som por cada snap e grip. Quando o seu navegador conseguir reconhecer a fala no seu computador, os comandos podem ser ditados. Veja [Desenhe sem ver](topic:draft-without-sight).

### Em todas as aplicações

- **Idiomas.** 54 idiomas; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli, usbeque). Os idiomas além do inglês são rascunhos feitos por máquina até que um falante nativo os leia.
- **Dispositivos de entrada.** Touchpad, caneta, rato 3D, comando de jogo e controlos MIDI.
- **Linhas da barra de ferramentas e grelha de propriedades.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Quebrar, 2 linhas ou 1 linha nas outras aplicações. O CadCraft mantém a sua própria definição em {{ui:Definições}} › {{ui:CadCraft}} (veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows)). A grelha de propriedades partilhada está em três outras aplicações, não no CadCraft.
- **Problemas, Live e suplementos.** Um painel Problemas partilhado que avisa em todas as aplicações, uma vista Live de quem está onde no CadCraft Studio (veja [Trabalhe num desenho em conjunto](topic:work-live)), e uma lista de suplementos.
- **Ligue a sua IA.** Uma ligação do CadCraft Studio às oito aplicações, com um nível só de leitura, de sugestão ou de edição por aplicação, e um registo em linguagem simples do que o assistente fez. O CadCraft não tem IA própria, e Perguntar em todas as aplicações usa a IA que ligar.

## Corrigido na 0.8.1

- **As propriedades mostravam 150 em vez de 12'-6"** em desenhos em pés e polegadas. Os campos que a aplicação lê por si voltam a manter o seu texto.
- **Ficheiros DWG cuja secção de classes era lida como o tipo errado** (GitHub cadcraft#5) abrem agora corretamente.
- **A cruz de mira já não aparece atrás de pop-ups.**
- **O Studio e as edições empacotadas podem mudar de idioma em tempo de execução.** Antes, estavam apenas em inglês. Ainda não testado em todas as plataformas: diga-nos se o idioma não mudar.
- **Tablets na vertical** dão a altura livre da grelha à área de desenho, e o modo de folhas começa nos 760 px ou menos.
- **STRETCH com janela de cruzamento, e LIMITS,** foram comunicados no Studio 0.8.0 e já estavam corretos na versão web da 0.8; o instalador de quem comunicou era mais antigo. O Studio 0.8.1 já os inclui.

## Ainda não nesta versão

- **A 0.8 e a 0.8.1 não têm assinatura de código.** O Windows pode mostrar um aviso (escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}); num Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para a Loja estão suspensas, e a versão para iPad e iPhone não foi recompilada para a 0.8.1.
- **Esboços à caneta e fotografias de esboços** foram testados apenas com fotografias inventadas e um rato, ainda não com uma caneta verdadeira, um ecrã tátil ou um esboço feito à mão em papel.
- **Desenhar sem ver** foi testado com verificações automáticas, ainda não com um leitor de ecrã ou um testador cego.
- **A partilha de detalhes** não teve uma verificação por duas pessoas, e uma pasta do Team Cloud Plan como pasta Documentos ainda não está implementada.
- **A fusão** funciona para os ficheiros DWG e DXF do CadCraft; o mesmo para os ficheiros das outras aplicações ainda não está implementado.
- **Anular entre janelas:** o CadCraft comunica cada passo concluído, mas o Studio ainda não tem um único Anular para todas as aplicações; cada aplicação anula os seus próprios passos.
- **Os objetos OLE de um DWG** são mantidos, mas não são desenhados no lugar.
- **A leitura de tabelas de estilos de impressão (ficheiros CTB)** de outros programas está implementada, mas ainda não foi verificada com um ficheiro de outro programa.
- **Ligue a sua IA:** a ligação com um clique no Studio, o conector alojado para IA no navegador, a sua própria chave de API dentro do Studio e o pacote MCP publicado não estão prometidos nesta versão.

Para a versão anterior, veja [Novidades na 0.7](topic:whats-new-0-7).

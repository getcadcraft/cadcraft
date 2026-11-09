---
title: Novidades na 0.8 e 0.8.1
summary: Um fantasma que completa o seu desenho, esboços a caneta e fotos de esboços transformados em geometria, folhas que se organizam sozinhas, detalhes sugeridos enquanto você desenha, GRIDMOVE e AUTODIM, etiquetas, arquivos compatíveis com mesclagem, marcações transformadas em revisões, desenhar sem enxergar, limites do desenho, rumos, fontes SHX, diagramas a partir de texto e correções na 0.8.1.
keywords: novidades, o que há de novo, notas de lançamento, changelog, mudanças, 0.8, 0.8.1, versão, novos recursos, preenchimento automático, autocomplete, fantasma, ghost, tab, sketchfix, photosketch, autosheet, detalhes, details, gridmove, autodim, etiquetas, tags, redline, mesclagem, merge, git, fossil, acesso, desenhar sem enxergar, leitor de tela, limites, limits, rumos, bearings, aunits, shx, diagrama, diagram, ole, histórico, comparar, em palavras, propriedades, pés e polegadas, esticar, idiomas, dispositivos de entrada, problemas, live, assistentes
from: 9dd82db5
---

Esta é a lista do que mudou no CadCraft 0.8 e 0.8.1, em comparação com a 0.7. A 0.8 (1 de novembro de 2026) adiciona auxiliares de desenho que trabalham a partir do seu próprio desenho, por regras no seu computador e sem modelo; a 0.8.1 (2 de novembro de 2026) corrige erros relatados depois dela.

## Novidades

### Um desenho que completa o seu raciocínio

- **Um fantasma mostra o que vem a seguir.** Sem nenhum comando em execução, um fantasma tracejado cinza mostra o que os padrões do próprio desenho indicam como próximo passo: o próximo montante com o mesmo espaçamento, o próximo degrau de uma escada, a parede que falta em um ambiente. Pressione {{key:Tab}} para desenhá-lo como uma única etapa de desfazer, ou {{key:Esc}} para dispensá-lo. Ele analisa apenas os objetos mais recentes, então continua fluido em um desenho grande. Desative em {{ui:Configurações}} › {{ui:CadCraft}} ou com {{cmd:AUTOCOMPLETE}} `Off`.
- **O próximo ponto enquanto você desenha uma linha.** No meio de {{cmd:LINE}} ou {{cmd:PLINE}}, o fantasma é o próximo ponto: o próximo degrau de uma escada, o quarto canto de um retângulo ou o ponto que o fecha. Aproxime o cursor dele e pressione {{key:Tab}}, como se tivesse clicado ali.
- **Esboços a caneta viram geometria precisa.** {{cmd:SKETCHFIX}}: desenhe traços rápidos com caneta, mouse ou dedo e cada um vira uma linha, círculo, arco, retângulo ou polilinha limpa, ajustada ao que já está desenhado. Veja [Desenhe com caneta e obtenha geometria precisa](topic:sketch-with-a-pen).
- **Uma foto de um esboço vira desenho.** {{cmd:PHOTOSKETCH}} (`PSK`) encontra o papel em uma foto, endireita a perspectiva, aplica o tamanho de papel e a escala que você informar, e traça as linhas da caneta em uma camada para cada cor de caneta. Letras manuscritas não são traçadas.
- **Cotar por regras.** {{cmd:AUTODIM}} (`ADIM`) cria cadeias de cotas ao longo dos lados que você escolher, uma cota total, larguras de vãos, diâmetros de furos e, com `Grid`, o espaçamento da grade. Nunca repete uma cota que já existe.
- **Mova uma linha de grade e o conjunto acompanha.** {{cmd:GRIDMOVE}} (`GM`): paredes que terminam na linha de grade se esticam com ela, paredes ao longo dela, pilares, sua bolha e etiqueta se movem, e as cotas sobre ela medem o novo espaçamento. Uma única etapa de desfazer.

### Folhas, detalhes e etiquetas

- **Folhas que se organizam sozinhas.** {{cmd:AUTOSHEET}} usa suas vistas nomeadas (ou as partes separadas do modelo), escolhe um tamanho de papel e uma escala padrão, e coloca as vistas em novas folhas com uma legenda e um rótulo com nome e escala. Tudo continua editável. Veja [Organize folhas para mim](topic:lay-out-sheets-for-me).
- **Os detalhes da sua empresa, sugeridos enquanto você desenha.** {{cmd:DETAILS}} (`DET`) mantém seus próprios blocos de detalhe. Quando o que você seleciona corresponde a um deles pelas palavras nas camadas, nos nomes dos blocos e nas notas, a barra de status avisa; escolha-o e posicione. {{cmd:DETAILS}} › Compartilhar coloca sua lista na pasta Documentos e traz o que a sua equipe acrescentou. Configurações desativa as sugestões.
- **Etiquetas em blocos.** {{cmd:TAGS}} define uma etiqueta (seu tipo, os valores que pode assumir, os blocos a que se aplica), a aplica às referências de bloco que você seleciona e as lista como uma tabela que você pode salvar como CSV. As definições ficam salvas no DWG. Veja [Etiquetas](topic:tags).
- **Limites do desenho.** {{cmd:LIMITS}} define um retângulo para o desenho: a grade o preenche e Zoom Tudo o mostra. Os limites aparecem como contorno e são salvos em DWG e DXF, junto com os limites do papel. Veja [Defina os limites do desenho](topic:drawing-limits).

### Trabalho com outras pessoas e outros programas

- **Transforme uma marcação em revisão.** {{cmd:REDLINE}} lê o pacote que o MarkupCraft grava e lista cada alteração. Aceite ou recuse cada uma com uma nota; as aceitas recebem uma nuvem de revisão e um registro de revisões em uma única etapa de desfazer, e você salva o arquivo de respostas que fecha as marcações no MarkupCraft. Veja [Transforme uma marcação em revisão](topic:redline-to-revision).
- **Desenhos que git e Fossil conseguem mesclar.** Com {{ui:Arquivos compatíveis com mesclagem}} ativado em {{ui:Configurações}} › {{ui:CadCraft}}, cada objeto recebe uma chave que nunca muda (os arquivos ficam cerca de 10% maiores). `cadcraft merge base ours theirs` então mescla as edições de duas pessoas em um mesmo DWG ou DXF, objeto por objeto, e informa apenas onde duas pessoas alteraram a mesma coisa. Veja [Mescle as edições de duas pessoas em um desenho](topic:merge-drawings).
- **O que mudou, em palavras.** Em Histórico, Comparar apresenta uma lista simples: onde as coisas mudaram, o tamanho das áreas, o que foi adicionado, removido ou alterado, e o texto que foi editado. Veja [Diga em palavras o que mudou](topic:changes-in-words).
- **Rumos e ângulos.** Digite uma direção como rumo de topógrafo, como N45°23'30"E, ou em graus, minutos e segundos, em qualquer lugar onde um ângulo for solicitado; AUNITS define como os ângulos são mostrados. Veja [Digite e mostre rumos e ângulos](topic:bearings-and-angles).
- **Suas próprias fontes SHX.** Dê ao CadCraft uma pasta de fontes SHX e os estilos de texto que as nomeiem serão desenhados com elas, na tela e nas plotagens. Veja [Desenhe texto com suas próprias fontes SHX](topic:shx-fonts).
- **Um diagrama a partir de texto.** {{cmd:DIAGRAM}} lê um fluxograma Mermaid, um diagrama de componentes PlantUML, D2 ou uma lista de-para, e desenha blocos e conectores que você pode editar. Veja [Desenhe um diagrama a partir de texto](topic:text-to-diagram).
- **Objetos OLE em um DWG.** {{cmd:OLELIST}} lista os objetos OLE que um DWG contém e que o CadCraft não consegue posicionar sozinho, e posiciona uma cópia de uma imagem onde você indicar. Veja [Imagens](topic:pictures#objects-from-other-programs-ole).
- **Seus cálculos ficam com o desenho.** Planilhas de cálculo e justificativas de projeto são mantidas no DWG junto com a tabela de classes.

### Desenhar sem enxergar

- Ative {{ui:Desenhar sem enxergar}} em {{ui:Configurações}} (ou digite {{cmd:ACCESS}} e responda `On`). O CadCraft fala cada comando e resultado pelo seu leitor de tela, descreve o desenho e o que está perto do cursor, permite mover o cursor e escolher pontos pelo teclado, e toca um som para cada snap e grip. Onde o seu navegador consegue reconhecer a fala no seu computador, os comandos podem ser ditos em voz alta. Veja [Desenhe sem enxergar](topic:draft-without-sight).

### Em todos os aplicativos

- **Idiomas.** 54 idiomas; dez são novos (lituano, letão, bósnio, marata, télugo, albanês, africâner, filipino, suaíli, uzbeque). Idiomas além do inglês são rascunhos de máquina até que um falante nativo os revise.
- **Dispositivos de entrada.** Trackpad, caneta, mouse 3D, controle de videogame e controles MIDI.
- **Linhas da barra de ferramentas e a grade de propriedades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} oferece Quebrar, 2 linhas ou 1 linha nos outros aplicativos. O CadCraft mantém a sua própria configuração em {{ui:Configurações}} › {{ui:CadCraft}} (veja [Linhas da barra de ferramentas](topic:settings#toolbar-rows)). A grade de propriedades compartilhada está em três outros aplicativos, não no CadCraft.
- **Problemas, Live e complementos.** Um painel de Problemas compartilhado que avisa em todos os aplicativos, uma visualização Live de quem está onde no CadCraft Studio (veja [Trabalhe em um desenho em conjunto](topic:work-live)) e uma lista de complementos.
- **Conecte sua IA.** Uma conexão do CadCraft Studio com todos os oito aplicativos, com nível somente leitura, de sugestão ou de edição por aplicativo, e um registro em linguagem simples do que o assistente fez. O CadCraft não tem IA própria, e Perguntar em todos os aplicativos usa a IA que você conectar.

## Corrigido na 0.8.1

- **Propriedades mostravam 150 em vez de 12'-6"** em desenhos em pés e polegadas. Os campos que o aplicativo lê por conta própria voltam a manter o seu texto.
- **Arquivos DWG cuja seção de classes era lida com o tipo errado** (GitHub cadcraft#5) agora abrem corretamente.
- **A mira não aparece mais atrás de janelas pop-up.**
- **Studio e as edições empacotadas podem trocar de idioma em tempo de execução.** Antes, eram somente em inglês. Ainda não testado em todas as plataformas: avise-nos se o idioma não mudar.
- **Tablets na orientação retrato** dão a altura livre da grade para a área de desenho, e o modo de folhas começa em 760 px ou menos.
- **STRETCH com janela de cruzamento, e LIMITS,** foram relatados no Studio 0.8.0 e já estavam corretos na versão web 0.8; o instalador de quem relatou era mais antigo. O Studio 0.8.1 já os traz.

## Ainda não implementado nesta versão

- **0.8 e 0.8.1 não têm assinatura de código.** O Windows pode avisar (escolha {{ui:Mais informações}}, depois {{ui:Executar assim mesmo}}); em um Mac, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. As versões para lojas estão suspensas, e a versão para iPad e iPhone não foi refeita para a 0.8.1.
- **Esboços a caneta e fotos de esboços** foram testados apenas com fotos fictícias e mouse, ainda não com caneta real, tela sensível ao toque ou esboço à mão em papel.
- **Desenhar sem enxergar** foi testado com verificações automatizadas, ainda não com leitor de tela ou testador cego.
- **Compartilhar detalhes** não passou por uma verificação com duas pessoas, e uma pasta do Team Cloud Plan como pasta Documentos ainda não foi implementada.
- **Mesclagem** funciona para os arquivos DWG e DXF do CadCraft; o mesmo para os arquivos dos outros aplicativos ainda não foi implementado.
- **Desfazer entre janelas:** o CadCraft informa cada etapa concluída, mas o Studio ainda não tem um único Desfazer para todos os aplicativos; cada aplicativo desfaz as suas próprias etapas.
- **Objetos OLE de um DWG** são mantidos, mas não desenhados no lugar.
- **Leitura de tabelas de estilo de plotagem (arquivos CTB)** de outros programas foi implementada, mas ainda não foi verificada com um arquivo de outro programa.
- **Conecte sua IA:** conexão com um clique no Studio, o conector hospedado para IA no navegador, sua própria chave de API dentro do Studio e o pacote MCP publicado não estão prometidos nesta versão.

Para a versão anterior, veja [Novidades na 0.7](topic:whats-new-0-7).

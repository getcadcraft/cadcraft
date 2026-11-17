---
title: Imprimir para PDF
summary: Crie um PDF de uma folha em tamanho real, ou do modelo a uma escala ou ajustado ao papel, imprima-o a partir do navegador ou do Studio, ou guarde-o como PNG ou SVG.
keywords: imprimir, plotar, impressora, cópias, png, svg, imagem, pdf, publicar, exportpdf, papel, escala, monocromático, escala de cinzentos, preto e branco, espessura de linha, caneta, configuração da página, janela de impressão, estilo de impressão, tabela de estilos de impressão, ctb, dependente da cor, tramagem, plotstyles, stylesmanager
from: a4752f83
---

## O que vai criar

Um PDF de uma folha em tamanho real, depois um PDF rápido do modelo a 1:100, e uma impressão.

O PDF é criado no navegador; nada é carregado. É um PDF vetorial: as linhas mantêm-se nítidas em qualquer zoom, e o texto pode ser pesquisado.

## Imprimir uma folha

1. Clique no separador da folha, abaixo do desenho.
2. Prima {{key:Mod+P}}, clique em {{ui:Imprimir}}, ou escreva `PLOT` e prima {{key:Enter}}.

A caixa de diálogo {{ui:Imprimir para PDF}} abre-se. Indica a folha que vai imprimir e em que papel, «à escala real … tal como a vê». A pré-visualização à direita mostra a folha.

3. Em {{ui:Estilo de impressão}}, escolha {{ui:Monocromático (preto)}} para linhas a preto, {{ui:Cor (como desenhado)}} para manter as cores, {{ui:Escala de cinzentos}}, ou uma tabela própria (veja [Tabelas de estilos de impressão](topic:plot-pdf#plot-style-tables)). A folha guarda esta escolha: fica guardada com o desenho.
4. Em {{ui:Espessura de linha}}, escolha a espessura da caneta entre 0.13 mm e 0.70 mm. As linhas com a espessura predefinida imprimem-se com esta largura; as linhas com espessura própria (da camada ou do objeto, ou da caneta da cor na tabela) imprimem-se com essa.
5. Clique em {{ui:Transferir PDF}}.

O navegador transfere um PDF com o nome do desenho e da folha, por exemplo `Drawing1-A-101 Plan.pdf`. O histórico indica o tamanho em bytes e o tamanho do papel em milímetros.

Uma folha imprime-se sempre a 1:1 no seu próprio papel. Para mudar o papel, altere-o na própria folha (veja [Configurar uma folha](topic:sheets-and-viewports)). As camadas definidas para não imprimir ficam de fora, tal como as molduras dos viewports.

## Todas as folhas num único PDF

Com duas ou mais folhas, a caixa {{ui:Imprimir para PDF}} tem {{ui:Todas as folhas num único PDF}}; ou escreva {{cmd:PUBLISH}}. {{key:Enter}} inclui todas as folhas; `S` (Algumas) pede os respetivos nomes, separados por vírgulas. Transfere-se um único PDF com uma página por folha, pela ordem dos separadores, cada uma com o seu próprio tamanho de papel, e um marcador por folha com o respetivo nome. Cada folha imprime-se com a sua própria tabela de estilos de impressão; uma folha sem nenhuma escolhida usa a que escolheu por último na caixa de diálogo, e a espessura da caneta que escolheu por último.

## Imprimir o modelo

1. Clique no separador {{ui:Modelo}}.
2. Prima {{key:Mod+P}}.

A caixa indica que vai imprimir o modelo numa folha de papel, e mostra mais definições:

3. Em {{ui:Área}}, escolha o que imprimir:
   - {{ui:Tudo (extensão)}}: o desenho completo.
   - {{ui:O que está no ecrã}}: a área que vê agora no desenho.
   - {{ui:Uma janela…}}: depois clique em {{ui:Escolher}}, clique em dois cantos no desenho, e a caixa volta a aparecer.
4. Em {{ui:Papel}}, escolha um tamanho: ISO A4 a A0, Letter, Legal, Tabloid e ANSI C e D, ou ARCH C, D e E.
5. Em {{ui:Orientação}}, escolha {{ui:Horizontal}} ou {{ui:Vertical}}.
6. Em {{ui:Escala}}, escolha {{ui:Ajustar ao papel}} ou uma escala como `1:100`.

Por baixo das definições, uma linha indica a escala e o tamanho que a área ocupa no papel. Se for maior do que o papel, avisa: as extremidades ficam cortadas. Escolha uma escala menor, um papel maior, ou {{ui:Ajustar ao papel}}.

7. Clique em {{ui:Transferir PDF}}.

A impressão do modelo deixa uma margem de 5 mm em redor, porque a maioria das impressoras não imprime até à borda. {{ui:Ajustar ao papel}} dá uma escala irregular (o histórico e a linha de informação dizem «(ajustado)»); escolha uma escala normalizada quando o desenho tiver de medir corretamente.

:::note
As escalas são lidas em unidades reais. Para que 1:100 esteja certo, defina {{ui:Unidades}} em {{ui:Definições atuais}} como aquilo que representa uma unidade do desenho. Um desenho sem unidades é considerado em milímetros.
:::

## Tabelas de estilos de impressão

Uma tabela de estilos de impressão indica como cada uma das 255 cores padrão do desenho é impressa, tal como uma tabela de estilos dependente da cor (CTB) noutros programas de CAD. Há três incorporadas:

| Tabela | Imprime |
|---|---|
| {{ui:Cor (como desenhado)}} | Cada objeto na sua própria cor. |
| {{ui:Monocromático (preto)}} | Todas as cores a preto: a escolha habitual para desenhos. |
| {{ui:Escala de cinzentos}} | Cada cor no seu cinzento, para que as cores se distingam numa impressora a preto e branco. |

Para criar uma tabela própria, por exemplo com linhas vermelhas grossas impressas a preto e tudo o resto fino:

1. Na caixa {{ui:Imprimir para PDF}}, clique em {{ui:Editar tabelas…}} (ou escreva {{cmd:PLOTSTYLES}}).
2. Clique em {{ui:Nova}}, e escreva um nome, como `office`, em {{ui:Nome}}. Para partir de uma tabela incorporada, escolha-a em {{ui:Tabela}} e clique em {{ui:Copiar}}.
3. Clique numa cor da grelha. {{key:Shift}}+clique seleciona um intervalo de cores, {{key:Mod}}+clique acrescenta mais uma, e {{ui:Selecionar todas as cores}} seleciona todas.
4. Defina como imprimem as cores selecionadas:
   - {{ui:Imprime a}}: {{ui:A sua própria cor}}, {{ui:Preto}} ou {{ui:Outra cor…}}.
   - {{ui:Como cinzento}}: a cor no seu cinzento.
   - {{ui:Tinta (%)}}: 100 é tinta cheia, 50 está a meio caminho do branco (tramagem), para linhas de fundo.
   - {{ui:Espessura de linha}}: {{ui:A sua própria espessura de linha}} mantém a espessura do objeto ou da camada; um valor imprime todas as linhas dessa cor com essa largura.
   - {{ui:Tipo de linha}}: imprime todas as linhas dessa cor com outro tipo de linha (por exemplo, tudo o que é vermelho tracejado); {{ui:Usar o tipo de linha do objeto}} deixa-as como estão.
   - {{ui:Extremidade da linha}} e {{ui:Junção de linhas}}: extremidades retas, quadradas ou arredondadas, e cantos em meia-esquadria, chanfrados ou arredondados (arredondados, como antes, quando não define nada).
   - {{ui:Estilo de preenchimento}}: um preenchimento sólido dessa cor imprime-se como linhas de trama (barras horizontais ou verticais, inclinadas, cruzadas, losangos, pontos quadrados) em vez de tinta, para impressoras e plantas em que a tinta chapada é pesada de mais.
   A própria tabela tem mais duas definições: {{ui:Espessuras de linha}}, as larguras que conhece (uma linha impressa vai para a mais próxima delas), e {{ui:Escala do tipo de linha}}, um fator aplicado aos traços de todos os tipos de linha que não são ISO.
5. Clique em {{ui:Concluir}}. A tabela fica guardada no desenho, e a folha (ou o modelo) passa a imprimir com ela. {{ui:Cancelar}} descarta as alterações.

Uma cor com caneta própria mostra um ponto no canto, e um ponto em baixo quando define uma espessura de linha. Um objeto com cor verdadeira (que não é uma das 255) usa a caneta da cor padrão mais próxima.

O desenho guarda as suas tabelas e a escolha de cada folha quando guarda como DWG (2000 a 2018) ou DXF (R12 ou 2000), e reabre-as com elas. Outros programas veem apenas o nome na configuração de página de cada folha (`office.ctb`), não a tabela em si. Um desenho de outro programa cuja configuração de página indique uma tabela como `monochrome.ctb` imprime-se com a tabela incorporada desse nome; para qualquer outro nome, a caixa de diálogo indica que o desenho não a tem, e imprime as cores do desenho até escolher uma tabela ou criar uma com esse nome.

Para usar uma tabela noutro desenho, clique em {{ui:Exportar}} em {{ui:Tabelas de estilos de impressão}} (guarda `office.plotstyle.json`) e depois em {{ui:Importar…}} no outro desenho. {{ui:Importar…}} também aceita um ficheiro `.ctb` de outro programa: é lido a partir da descrição publicada do formato e **ainda não foi verificado com um ficheiro real**. São lidas a cor, a tramagem e a espessura de linha de cada cor; não são lidos a escala de cinzentos, os números de caneta, os tipos de linha, as extremidades e junções de linhas nem os estilos de preenchimento, e uma tabela com nome (`.stb`) é recusada. Compare a primeira impressão com o que espera, e envie-nos o ficheiro se estiver errado.

## Imprimir

**No navegador**, clique em {{ui:Imprimir…}}. O CadCraft cria o PDF e abre para ele a caixa de impressão do próprio navegador. Escolha aí «Tamanho real» ou 100% (não «Ajustar») para manter a escala. Se o navegador não imprimir a partir da página, o PDF abre-se num novo separador; imprima-o a partir daí com {{key:Mod+P}}.

Também pode clicar em {{ui:Abrir para imprimir}}: o PDF abre-se num novo separador do navegador, e imprime-o a partir daí.

:::safari
O Safari pode mostrar o PDF e esperar que use **Ficheiro** e depois **Imprimir**.
:::

Se o navegador bloquear o novo separador, o CadCraft transfere o PDF e indica-o no histórico. Permita as janelas pop-up para o site, para o abrir num separador da próxima vez.

**No CadCraft Studio**, a caixa {{ui:Imprimir para PDF}} lista as impressoras do computador. Escolha a {{ui:Impressora}}, o {{ui:Papel na impressora}} e o número de {{ui:Cópias}}, e clique em {{ui:Imprimir…}}. {{ui:Igual à impressão}} escolhe o papel da impressora com o tamanho da folha (A3 para uma folha A3); quando a impressora não tem nenhum, usa o próprio papel e ajusta a folha a ele. No Windows, a folha é enviada como imagem de 300 dpi, porque o Windows não consegue imprimir um PDF sem um programa de PDF; no Linux e no macOS, o próprio PDF segue para o serviço de impressão do sistema. Nada sai do computador.

## Ficheiros de imagem e SVG

{{ui:Transferir PNG}} guarda a folha impressa como imagem a 300 dpi (reduzida apenas quando uma folha muito grande seria maior do que o navegador consegue criar; o histórico indica-o). {{ui:Transferir SVG}} guarda-a como desenho escalável em milímetros, com as linhas e o texto da impressão. Ambos vêm da mesma impressão que o PDF, com a mesma tabela de estilos, espessura de linha e área. As imagens colocadas no desenho ficam apenas no PDF; o histórico indica quantas foram deixadas de fora.

## Imagens

As imagens imprimem-se na sua resolução própria, por baixo das linhas. {{ui:Imagens}} na caixa limita-as a 600, 300 ou 150 dpi para um ficheiro mais pequeno. As linhas, o texto e as tramas mantêm-se sempre nítidos (vetoriais), e a transparência continua a ser transparência. Veja [Imagens num desenho](topic:pictures).

## Definições memorizadas

A caixa memoriza, neste navegador, o último papel, a orientação, a escala e a espessura de linha que usou. A tabela de estilos de impressão fica guardada com cada folha no desenho; uma folha sem nenhuma escolhida começa com a que escolheu por último. Uma janela escolhida mantém-se até recarregar a página; depois disso, a caixa começa em {{ui:Tudo (extensão)}}.

## Erros comuns

- **O PDF está em branco ou os botões estão cinzentos.** Não há nada para imprimir (um modelo vazio), ou está escolhido {{ui:Uma janela…}} e ainda não foi escolhida nenhuma janela («Escolha a janela a imprimir.»).
- **O texto mostra «?» no PDF.** O texto em polaco, checo, cirílico, grego e as outras escritas europeias imprime-se como é: o PDF leva então as letras de que precisa (da fonte Liberation Sans, que tem as larguras da Helvetica), e o texto continua a poder ser selecionado e pesquisado. O texto chinês, japonês e coreano também se imprime como é: quando um desenho o tem, a impressão transfere uma fonte maior (cerca de 10 MB, uma única vez) e o PDF leva apenas os caracteres usados, por isso precisa de ligação à primeira vez (não numa cópia offline guardada antes). O hebraico imprime-se com a mesma fonte incorporada do texto latino, e o texto árabe, persa e urdu faz a impressão transferir mais uma fonte (menos de 1 MB, uma única vez); as linhas da direita para a esquerda são ordenadas e as letras ligadas (veja [Texto](topic:text)). Ideogramas raros fora dessas fontes, e escritas que precisam de formação complexa, como o híndi, imprimem-se como «?», e o histórico conta-os.
- **Todas as linhas têm a mesma espessura.** A espessura delas é a predefinida: dê às camadas ou aos objetos uma {{ui:Espessura de linha}} no painel da direita (veja [Espessuras de linha e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes)), ou defina espessuras por cor numa [tabela de estilos de impressão](topic:plot-pdf#plot-style-tables).
- **«(não está neste desenho)» junto ao estilo de impressão.** O desenho veio de outro programa e indica uma tabela que não inclui. Escolha uma das tabelas, ou crie uma com esse nome.
- **Linhas de construção impressas.** Defina a camada para não imprimir: clique no botão da impressora dela no painel {{ui:Camadas}}.
- **A impressão sai com o tamanho errado.** A impressora ajustou-a à escala. Imprima em tamanho real.
- **{{key:Mod+P}} abriu a caixa de impressão do navegador.** O cursor estava numa caixa do painel da direita, ou outra caixa de diálogo estava aberta. Prima {{key:Enter}} ou {{key:Esc}} para sair da caixa, e tente de novo, ou clique em {{ui:Imprimir}}.
- **{{key:Mod+P}} não fez nada.** Um comando está em execução. Prima {{key:Esc}} primeiro.

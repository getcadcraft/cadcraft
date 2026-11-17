---
title: Plotar em PDF
summary: Crie um PDF de uma folha em tamanho real, ou do modelo em uma escala ou ajustado ao papel, imprima pelo navegador ou pelo Studio, ou salve como PNG ou SVG.
keywords: plotar, imprimir, impressora, cópias, png, svg, imagem, pdf, publicar, exportpdf, papel, escala, monocromático, escala de cinza, preto e branco, espessura de linha, caneta, configuração de página, janela de plotagem, estilo de plotagem, tabela de estilos de plotagem, ctb, dependente de cor, retícula, plotstyles, stylesmanager
from: a4752f83
---

## O que você vai fazer

Um PDF de uma folha em tamanho real, depois um PDF rápido do modelo em 1:100, e uma impressão.

O PDF é criado dentro do seu navegador; nada é enviado. É um PDF vetorial: as linhas ficam nítidas em qualquer zoom, e o texto pode ser pesquisado.

## Plotar uma folha

1. Clique na guia da folha abaixo do desenho.
2. Pressione {{key:Mod+P}}, clique em {{ui:Plot}}, ou digite `PLOT` e pressione {{key:Enter}}.

A caixa de diálogo {{ui:Plot to PDF}} abre. Ela informa qual folha será plotada e em qual papel, "em tamanho real … como você vê". A visualização à direita mostra a folha.

3. Em {{ui:Plot style}}, escolha {{ui:Monochrome (black)}} para linhas pretas, {{ui:Colour (as drawn)}} para manter as cores, {{ui:Grayscale}}, ou uma tabela sua (veja [Tabelas de estilos de plotagem](topic:plot-pdf#plot-style-tables)). A folha mantém esta escolha: ela é salva com o desenho.
4. Em {{ui:Line weight}}, escolha a espessura da caneta, de 0,13 mm a 0,70 mm. As linhas com a espessura padrão são impressas nesta largura; as linhas com espessura própria (da camada ou do objeto, ou da caneta da cor na tabela) são impressas nessa espessura.
5. Clique em {{ui:Download PDF}}.

O navegador baixa um PDF com o nome do desenho e da folha, por exemplo `Drawing1-A-101 Plan.pdf`. O histórico informa o tamanho em bytes e o tamanho do papel em milímetros.

Uma folha sempre é plotada na escala 1:1 no próprio papel. Para mudar o papel, altere-o na própria folha (veja [Configurar uma folha](topic:sheets-and-viewports)). Camadas configuradas para não plotar ficam de fora, e os contornos de viewport também.

## Todas as folhas em um PDF

Com duas ou mais folhas, a caixa de diálogo {{ui:Plot to PDF}} tem {{ui:All sheets in one PDF}}; ou digite {{cmd:PUBLISH}}. {{key:Enter}} inclui todas as folhas; `Algumas (S)` pede os nomes delas, separados por vírgulas. Um único PDF é baixado, com uma página por folha, na ordem das guias, cada uma no seu próprio tamanho de papel, e um marcador por folha com o nome dela. Cada folha é plotada com a sua própria tabela de estilos de plotagem; uma folha sem tabela escolhida usa a última que você escolheu na caixa de diálogo, e a última espessura de caneta escolhida.

## Plotar o modelo

1. Clique na guia {{ui:Model}}.
2. Pressione {{key:Mod+P}}.

A caixa de diálogo informa que vai plotar o modelo em uma folha de papel, e mostra mais configurações:

3. Em {{ui:Area}}, escolha o que plotar:
   - {{ui:Everything (extents)}}: o desenho inteiro.
   - {{ui:What is on screen}}: a área que você vê agora no desenho.
   - {{ui:A window…}}: depois clique em {{ui:Pick}}, clique em dois cantos no desenho, e a caixa de diálogo volta.
4. Em {{ui:Paper}}, escolha um tamanho: ISO A4 a A0, Letter, Legal, Tabloid e ANSI C e D, ou ARCH C, D e E.
5. Em {{ui:Orientation}}, escolha {{ui:Landscape}} ou {{ui:Portrait}}.
6. Em {{ui:Scale}}, escolha {{ui:Fit to paper}} ou uma escala como `1:100`.

Abaixo das configurações, uma linha informa a escala e o tamanho que a área terá no papel. Se ela for maior que o papel, a linha avisa: as bordas serão cortadas. Escolha uma escala menor, um papel maior, ou {{ui:Fit to paper}}.

7. Clique em {{ui:Download PDF}}.

A plotagem do modelo deixa uma margem de 5 mm na borda, porque a maioria das impressoras não imprime até a borda. {{ui:Fit to paper}} gera uma escala não padronizada (o histórico e a linha de informação dizem "(ajustado)"); escolha uma escala padrão quando o desenho precisar ter medidas reais.

:::note
As escalas são lidas em unidades reais. Para que 1:100 esteja correto, defina {{ui:Units}} em {{ui:Current settings}} para o que representa uma unidade do desenho. Um desenho sem unidade é considerado em milímetros.
:::

## Tabelas de estilos de plotagem

Uma tabela de estilos de plotagem define como cada uma das 255 cores padrão do desenho é impressa, do mesmo modo que uma tabela de estilos de plotagem dependente de cor (CTB) faz em outros programas de CAD. Três são embutidas:

| Tabela | Imprime |
|---|---|
| {{ui:Colour (as drawn)}} | Cada objeto na sua própria cor. |
| {{ui:Monochrome (black)}} | Todas as cores em preto: a escolha usual para desenhos. |
| {{ui:Grayscale}} | Cada cor no seu tom de cinza, para que as cores fiquem separadas em uma impressora preto e branco. |

Para criar a sua, por exemplo linhas vermelhas grossas e pretas, e o resto fino:

1. Na caixa de diálogo {{ui:Plot to PDF}}, clique em {{ui:Edit tables…}} (ou digite {{cmd:PLOTSTYLES}}).
2. Clique em {{ui:New}} e digite um nome como `office` em {{ui:Name}}. Para começar de uma tabela embutida, escolha-a em {{ui:Table}} e clique em {{ui:Copy}}.
3. Clique em uma cor na grade. {{key:Shift}}+clique seleciona um intervalo de cores, {{key:Mod}}+clique acrescenta mais uma, e {{ui:Select every colour}} seleciona todas.
4. Defina como as cores selecionadas são impressas:
   - {{ui:Prints in}}: {{ui:Its own colour}}, {{ui:Black}} ou {{ui:Another colour…}}.
   - {{ui:As a gray}}: a cor no seu tom de cinza.
   - {{ui:Ink (%)}}: 100 é tinta total, 50 é meio caminho até o branco (retícula), para linhas de fundo.
   - {{ui:Lineweight}}: {{ui:Its own lineweight}} mantém a espessura do objeto ou da camada; um valor imprime todas as linhas dessa cor com essa largura.
   - {{ui:Linetype}}: imprime todas as linhas dessa cor com outro tipo de linha (por exemplo, tudo vermelho tracejado); {{ui:Use the object's linetype}} as deixa como estão.
   - {{ui:Line end}} e {{ui:Line join}}: extremidades retas, quadradas ou arredondadas, e cantos em meia-esquadria, chanfrados ou arredondados (arredondado, como antes, quando você não define nada).
   - {{ui:Fill style}}: um preenchimento sólido dessa cor é impresso como linhas de hachura (barras horizontais ou verticais, diagonais, hachura cruzada, losangos, pontos quadrados) em vez de tinta, para impressoras e plantas em que a tinta chapada fica pesada demais.
   A tabela em si tem mais duas configurações: {{ui:Lineweights}}, as larguras que ela conhece (uma linha impressa vai para a mais próxima delas), e {{ui:Linetype scale}}, um fator sobre os traços de todo tipo de linha que não seja ISO.
5. Clique em {{ui:Done}}. A tabela é mantida no desenho, e a folha (ou o modelo) passa a plotar com ela. {{ui:Cancel}} descarta as alterações.

Uma cor com caneta própria mostra um ponto no canto, e um ponto embaixo quando define uma espessura de linha. Um objeto com cor verdadeira (que não seja uma das 255) usa a caneta da cor padrão mais próxima.

O desenho mantém as suas tabelas e a escolha de cada folha ao salvar como DWG (2000 a 2018) ou DXF (R12 ou 2000), e as reabre com elas. Outros programas veem o nome na configuração de página de cada folha (`office.ctb`), e não a tabela em si. Um desenho de outro programa cuja configuração de página nomeia uma tabela como `monochrome.ctb` é plotado com a tabela embutida de mesmo nome; para qualquer outro nome, a caixa de diálogo informa que o desenho não a possui, e plota as cores do desenho até você escolher uma tabela ou criar uma com esse nome.

Para usar uma tabela em outro desenho, clique em {{ui:Export}} em {{ui:Plot style tables}} (ele salva `office.plotstyle.json`), depois em {{ui:Import…}} no outro desenho. {{ui:Import…}} também aceita um arquivo `.ctb` de outro programa: ele é lido a partir da descrição publicada do formato e **ainda não foi verificado com um arquivo real**. São lidas a cor, a retícula e a espessura de linha de cada cor; escala de cinza, números de caneta, tipos de linha, extremidades e junções de linhas e estilos de preenchimento não são lidos, e uma tabela nomeada (`.stb`) é recusada. Compare a primeira plotagem com o que você espera, e envie-nos o arquivo se estiver errado.

## Imprimir

**No navegador**, clique em {{ui:Print…}}. O CadCraft cria o PDF e abre a caixa de diálogo de impressão do próprio navegador para ele. Escolha "Tamanho real" ou 100% (não "Ajustar") ali para manter a escala. Se o navegador não conseguir imprimir a partir da página, o PDF abre em uma nova guia: imprima-o a partir dela com {{key:Mod+P}}.

Você também pode clicar em {{ui:Open to print}}: o PDF abre em uma nova guia do navegador, e você o imprime a partir dela.

:::safari
O Safari pode mostrar o PDF e aguardar que você use **Arquivo** e depois **Imprimir**.
:::

Se o navegador bloquear a nova guia, o CadCraft baixa o PDF e informa isso no histórico. Permita pop-ups para o site para abri-lo em uma guia na próxima vez.

**No CadCraft Studio**, a caixa de diálogo {{ui:Plot to PDF}} lista as impressoras do computador. Escolha a {{ui:Printer}}, o {{ui:Paper in the printer}} e o número de {{ui:Copies}}, depois clique em {{ui:Print…}}. {{ui:Same as the plot}} escolhe o papel da impressora com o tamanho da folha (A3 para uma folha A3); quando a impressora não tem esse papel, usa o papel dela e ajusta a folha a ele. No Windows, a folha é enviada como imagem de 300 dpi, porque o Windows não consegue imprimir um PDF sem um programa de PDF; no Linux e no macOS, o próprio PDF vai para o serviço de impressão do sistema. Nada sai do computador.

## Arquivos de imagem e SVG

{{ui:Download PNG}} salva a folha plotada como imagem a 300 dpi (reduzida apenas quando uma folha muito grande seria maior do que o navegador consegue gerar; o histórico informa isso). {{ui:Download SVG}} salva como um desenho escalável em milímetros, com as linhas e o texto da plotagem. Ambos vêm da mesma plotagem do PDF, com o mesmo estilo de plotagem, espessura de linha e área. Imagens colocadas no desenho aparecem apenas no PDF; o histórico informa quantas foram deixadas de fora.

## Imagens

As imagens são impressas na sua própria resolução, sob as linhas. {{ui:Pictures}} na caixa de diálogo as limita a 600, 300 ou 150 dpi, para um arquivo menor. Linhas, textos e hachuras sempre ficam nítidos (vetoriais), e a transparência continua transparente. Veja [Imagens no desenho](topic:pictures).

## Configurações que são lembradas

A caixa de diálogo lembra o seu último papel, orientação, escala e espessura de linha neste navegador. A tabela de estilos de plotagem é mantida com cada folha no desenho; uma folha sem tabela escolhida começa com a que você escolheu por último. Uma janela selecionada é mantida até você recarregar a página; depois disso, a caixa de diálogo começa em {{ui:Everything (extents)}}.

## Erros comuns

- **O PDF está em branco ou os botões estão cinza.** Não há nada para plotar (um modelo vazio), ou {{ui:A window…}} está escolhido e nenhuma janela foi selecionada ainda ("Selecione a janela para plotar.").
- **O texto mostra "?" no PDF.** Texto em polonês, tcheco, cirílico, grego e outras escritas da Europa é impresso como está: o PDF então carrega as letras que precisa (da fonte Liberation Sans, que tem as larguras da Helvetica), e o texto ainda pode ser selecionado e pesquisado. Texto em chinês, japonês e coreano também é impresso como está: quando um desenho o contém, a plotagem busca uma fonte maior (cerca de 10 MB, uma vez) e o PDF carrega apenas os caracteres usados, então é preciso uma conexão na primeira vez (não em uma cópia offline salva antes). Texto em hebraico é impresso com a mesma fonte embutida do texto latino, e texto em árabe, persa e urdu faz a plotagem buscar mais uma fonte (menos de 1 MB, uma vez); linhas da direita para a esquerda são ordenadas e suas letras unidas (veja [Texto](topic:text)). Ideogramas raros fora dessas fontes, e escritas que exigem formação complexa de caracteres, como o hindi, são impressos como "?", e o histórico os conta.
- **Todas as linhas têm a mesma espessura.** A espessura delas é a padrão: dê às camadas ou aos objetos uma {{ui:Lineweight}} no painel da direita (veja [Espessuras de linha e tipos de linha](topic:units-papers-scales#line-weights-and-linetypes)), ou defina espessuras por cor em uma [tabela de estilos de plotagem](topic:plot-pdf#plot-style-tables).
- **"(not in this drawing)" ao lado do estilo de plotagem.** O desenho veio de outro programa e cita uma tabela que ele não inclui. Escolha uma das tabelas, ou crie uma com esse nome.
- **Linhas de construção impressas.** Configure a camada delas para não plotar: clique no botão de impressora dela no painel {{ui:Layers}}.
- **A impressão saiu no tamanho errado.** A impressora ajustou a escala. Imprima em tamanho real.
- **{{key:Mod+P}} abriu a caixa de diálogo de impressão do navegador.** O cursor estava em um campo do painel da direita, ou outra caixa de diálogo estava aberta. Pressione {{key:Enter}} ou {{key:Esc}} para sair do campo, depois tente de novo, ou clique em {{ui:Plot}}.
- **{{key:Mod+P}} não fez nada.** Um comando está em execução. Pressione {{key:Esc}} primeiro.

---
title: Imagens em um desenho
summary: Coloque uma imagem PNG ou JPEG, recorte-a em um retângulo ou em um polígono, mostre as imagens que um DWG usa, e plote-as nítidas.
keywords: pastearea, parea, copiar área, área copiada, markupcraft, tamanho real, sobreposição, ole, ole2frame, objeto incorporado, colar imagem, colar captura de tela, ctrl+v, imagem da área de transferência, captura de tela, imagem, imageattach, iat, imageclip, recorte, png, jpeg, jpg, logo, foto, raster, imagedef, xref, plotar, pdf, resolução
from: 4025ac97
---

## O que você vai criar

Um logotipo de empresa colocado em uma legenda, recortado na parte que você quer, e um PDF no qual ele imprime na própria resolução.

## Coloque uma imagem

1. Digite {{cmd:IMAGEATTACH}} (ou `IAT`) e pressione {{key:Enter}}. Escolha um arquivo PNG ou JPEG.
2. `Especifique o canto inferior esquerdo`: clique, ou digite um ponto.
3. `Especifique a largura`: a largura em unidades de desenho. {{key:Enter}} mantém a largura oferecida: uma unidade por pixel, ou a largura que você deu a este arquivo na última vez (o prompt informa qual).
4. `Especifique o ângulo de rotação`: {{key:Enter}} para nenhum.

A imagem é um único objeto: selecione-o pela moldura, e mova, copie, gire, escale ou apague-o como qualquer bloco.

:::note
O arquivo da imagem permanece com o desenho enquanto ele estiver aberto. Um DWG salvo informa o nome do arquivo, como outros programas fazem; ele não guarda os pixels. Mantenha a imagem ao lado do desenho.
:::

## Cole uma captura de tela ou uma imagem copiada

1. Copie a imagem (uma captura de tela com {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=sua ferramenta de captura de tela}}, ou Copiar imagem em outro programa ou em um navegador).
2. Aponte para onde ela deve ir no desenho e pressione {{key:Mod+V}}.

O canto inferior esquerdo da imagem cai no ponteiro (ou no centro da vista), com 40 % da largura do que você vê; mova, escale e recorte-a como qualquer imagem. Seu nome é o do desenho com `-picture-1.png` (depois `-2`, …), e o histórico informa isso.
{{ui:Editar}} › {{ui:Mais}} › {{ui:Colar uma imagem}} faz o mesmo pelo menu (o navegador pode perguntar antes).

Um DWG mantém apenas o nome do arquivo de uma imagem, então salvar o desenho também salva a imagem como arquivo próprio. Mantenha os dois na mesma pasta: o desenho mostra a imagem a partir dali. No navegador isso é um segundo download, e o histórico informa isso. Com nada além de objetos do CadCraft na área de transferência, {{key:Mod+V}} cola esses objetos, como antes.

## Cole uma área copiada no MarkupCraft

{{ui:Copiar área}} no MarkupCraft copia parte de uma folha como uma imagem que sabe o próprio tamanho. O CadCraft a cola nesse tamanho.

1. No MarkupCraft, copie a área (um retângulo, um círculo ou uma forma livre; {{ui:Copiar como sobreposição}} se você quiser ver seu desenho através dela).
2. No CadCraft, pressione {{key:Mod+V}}, ou digite {{cmd:PASTEAREA}} (ou `PAREA`), ou escolha {{ui:Editar}} › {{ui:Mais}} › {{ui:Colar uma área copiada}}.
3. `Especifique o canto inferior esquerdo da área copiada`: clique, ou digite um ponto. Uma moldura do tamanho da área segue o ponteiro.

Como ela cai no desenho:

- **A folha tinha uma escala de desenho:** no tamanho real, nas unidades do desenho (um detalhe 1:50 de uma escada de 2 m fica com 2 m de comprimento em um desenho em metros, ou 78.74 em um desenho em polegadas). Nada mais é perguntado.
- **A folha não tinha escala:** o CadCraft informa o tamanho dela no papel e pede uma escala: digite `100` para uma folha 1:100, pressione {{key:Enter}} para o tamanho do papel, ou digite `P`, clique em dois pontos na imagem colada e digite a distância real entre eles (como faz {{cmd:SCANSCALE}}). O canto inferior esquerdo permanece onde você o colocou.

Um desenho sem unidades usa milímetros, como uma base PDF. Uma sobreposição mantém seu papel transparente e começa tão apagada quanto foi copiada; fora de um círculo ou de uma forma livre, ela também é transparente. A área colada é uma imagem como qualquer outra: mova, gire, escale, recorte ou apague-a, e a colagem inteira é um passo de desfazer. Salva como DWG, ela é um IMAGE com seu esmaecimento e transparência.

{{key:Mod+V}} cola a área quando a imagem na área de transferência é a da área, ou quando a área foi copiada depois de qualquer coisa que você copiou no CadCraft (e nas últimas 6 horas). Caso contrário, cola como antes. {{cmd:PASTEAREA}} cola a última área copiada a qualquer momento.

## Mostre as imagens que um DWG usa

Um DWG guarda apenas onde estavam suas imagens, então o CadCraft mostra cada uma como uma moldura com o nome do arquivo.

1. Digite {{cmd:IMAGE}} (ou `IM`). A linha de comando lista cada arquivo de imagem e se ele é mostrado.
2. Escolha os arquivos (vários de uma vez). Um arquivo cujo nome contém o que o desenho informa também conta, porque exportações costumam acrescentar um prefixo de projeto.

## Recorte uma imagem

1. Digite {{cmd:IMAGECLIP}} (ou `ICL`) e selecione a imagem.
2. Escolha `R` e clique em dois cantos, ou `P` e clique nos pontos de um polígono, depois {{key:Enter}}. `D` remove o recorte.

## Plote imagens

Imagens entram no PDF como imagens, na própria resolução e abaixo das linhas. Na caixa {{ui:Plotar}}, {{ui:Imagens}} pode limitá-las a 600, 300 ou 150 dpi para deixar o arquivo menor. Um JPEG entra como está.

## O que é salvo onde

| Formato | Imagens |
|---|---|
| DWG (todas as versões) | Como imagens (IMAGE), com seu recorte |
| DXF | Como suas molduras, com o nome do arquivo; o salvamento informa isso |

## Objetos de outros programas (OLE)

Um desenho pode conter objetos feitos por outro programa, como uma imagem de um programa de pintura ou um intervalo de planilha (objetos OLE). O CadCraft não executa nem edita esses objetos, e não consegue inserir novos. O que ele faz:

- **Em um DXF**, um objeto OLE abre como uma moldura. Se o objeto guardou uma imagem de si mesmo e essa imagem é um bitmap, a imagem é desenhada dentro da moldura; caso contrário, a moldura traz um rótulo com o tipo do objeto, como "Microsoft Excel Worksheet (OLE)". Você pode mover, copiar e apagar a moldura como um bloco. {{cmd:SAVEAS}} para DXF 2000 o grava de novo como objeto OLE, com seus dados inalterados.
- **Em um DWG**, os objetos são mantidos e gravados de volta quando você salva como DWG, byte por byte, mas **não são mostrados**: um DWG guarda o lugar de um objeto dentro de seus próprios dados, e o CadCraft ainda não os lê. O histórico informa quantos foram mantidos. Digite {{cmd:OLELIST}} para ver quais são (tipo, tamanho, se cada um guardou uma imagem) e para colocar uma cópia de uma imagem onde você escolher: **Colocar** pede o número, o canto inferior esquerdo e a largura, e desenha uma moldura com a imagem dentro. Essa cópia é uma moldura que você pode mover ou apagar; o objeto em si permanece no desenho e ainda é gravado de volta quando você salva.
- Um objeto que veio de um DXF é salvo em um DWG apenas como sua moldura e rótulo; o histórico informa isso. Salve como DXF 2000 para manter o objeto em si.
- Imagens que são metarquivos (o que muitos programas salvam) não são desenhadas: a moldura e o rótulo aparecem no lugar.

## Erros comuns

| Você vê | Por quê | Solução |
|---|---|---|
| Uma moldura com um nome de arquivo | O CadCraft não tem o arquivo | {{cmd:IMAGE}}, depois escolha o arquivo |
| "Isso não é uma imagem" | O objeto escolhido não é uma imagem | Escolha a moldura da imagem |

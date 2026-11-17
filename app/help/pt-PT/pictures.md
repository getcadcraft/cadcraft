---
title: Imagens num desenho
summary: Coloque uma imagem PNG ou JPEG, recorte-a a um retângulo ou polígono, mostre as imagens que um DWG usa, e imprima-as nítidas.
keywords: pastearea, parea, copiar área, área copiada, markupcraft, tamanho real, sobreposição, ole, ole2frame, objeto incorporado, colar imagem, colar captura de ecrã, ctrl+v, imagem da área de transferência, captura de ecrã, imagem, imageattach, iat, imageclip, clip, png, jpeg, jpg, logótipo, fotografia, raster, imagedef, xref, imprimir, pdf, resolução
from: 4025ac97
---

## O que vai criar

O logótipo de uma empresa colocado numa legenda, recortado à parte pretendida, e um PDF em que ele é impresso na sua própria resolução.

## Colocar uma imagem

1. Escreva {{cmd:IMAGEATTACH}} (ou `IAT`) e prima {{key:Enter}}. Escolha um ficheiro PNG ou JPEG.
2. `Especifique o canto inferior esquerdo`: clique, ou escreva um ponto.
3. `Especifique a largura`: a largura em unidades de desenho. {{key:Enter}} mantém a largura sugerida: uma unidade por pixel, ou a largura que deu a este ficheiro da última vez (o pedido indica qual).
4. `Especifique o ângulo de rotação`: {{key:Enter}} para nenhum.

A imagem é um único objeto: selecione-a pelo seu contorno, e mova, copie, rode, escale ou apague-a como qualquer bloco.

:::note
O ficheiro da imagem fica com o desenho enquanto estiver aberto. Um DWG guardado indica o nome do ficheiro, como fazem outros programas; não guarda os pixels. Mantenha a imagem ao lado do desenho.
:::

## Colar uma captura de ecrã ou uma imagem copiada

1. Copie a imagem (uma captura de ecrã com {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=uma ferramenta de captura de ecrã}}, ou Copiar imagem noutro programa ou num navegador).
2. Aponte para onde deve ficar no desenho e prima {{key:Mod+V}}.

O canto inferior esquerdo da imagem cai no cursor (ou no centro da vista), com 40 % da largura do que vê; mova, escale e recorte-a como qualquer imagem. O nome é o do desenho com `-picture-1.png` acrescentado (depois `-2`, …), e o histórico indica-o.

{{ui:Editar}} › {{ui:Mais}} › {{ui:Colar uma imagem}} faz o mesmo a partir do menu (o navegador pode perguntar antes).

Um DWG guarda apenas o nome do ficheiro de uma imagem, por isso ao guardar o desenho também se guarda a imagem como ficheiro próprio. Mantenha os dois na mesma pasta: o desenho mostra a imagem a partir daí. No navegador, isso é uma segunda transferência, e o histórico indica-o. Com apenas objetos do CadCraft na área de transferência, {{key:Mod+V}} cola esses objetos, como antes.

## Colar uma área copiada no MarkupCraft

{{ui:Copiar área}} no MarkupCraft copia parte de uma folha como uma imagem que sabe o próprio tamanho. O CadCraft cola-a nesse tamanho.

1. No MarkupCraft, copie a área (um retângulo, um círculo ou uma forma livre; {{ui:Copiar como sobreposição}} se quiser ver o desenho através dela).
2. No CadCraft, prima {{key:Mod+V}}, ou escreva {{cmd:PASTEAREA}} (ou `PAREA`), ou escolha {{ui:Editar}} › {{ui:Mais}} › {{ui:Colar uma área copiada}}.
3. `Especifique o canto inferior esquerdo da área copiada`: clique, ou escreva um ponto. Um quadro do tamanho da área segue o cursor.

Quanto fica:

- **A folha tinha uma escala de desenho:** ao seu tamanho real, nas unidades do desenho (um detalhe 1:50 de uma escada de 2 m fica com 2 m de comprimento num desenho em metros, e com 78.74 num desenho em polegadas). Não é pedido mais nada.
- **A folha não tinha escala:** o CadCraft indica o seu tamanho no papel e pede uma escala: escreva `100` para uma folha 1:100, prima {{key:Enter}} para o tamanho de papel, ou escreva `P`, clique em dois pontos na imagem colada e escreva a distância real entre eles (como faz o {{cmd:SCANSCALE}}). O canto inferior esquerdo fica onde o colocou.

Um desenho sem unidades usa milímetros, como uma sobreposição de PDF. Uma sobreposição mantém o papel transparente e começa tão desvanecida como foi copiada; fora de um círculo ou de uma forma livre, também é transparente. A área colada é uma imagem como as outras: mova, rode, escale, recorte ou apague-a, e a colagem inteira é um único passo de anulação. Guardada como DWG, fica como IMAGE com o respetivo desvanecimento e transparência.

{{key:Mod+V}} cola a área quando a imagem na área de transferência é a própria área, ou quando a área foi copiada depois de qualquer coisa copiada no CadCraft (e nas últimas 6 horas). Caso contrário, cola como antes. {{cmd:PASTEAREA}} cola a última área copiada a qualquer momento.

## Mostrar as imagens que um DWG usa

Um DWG guarda apenas onde estavam as suas imagens, por isso o CadCraft mostra cada uma como um contorno com o nome do ficheiro.

1. Escreva {{cmd:IMAGE}} (ou `IM`). A linha de comandos lista cada ficheiro de imagem e indica se é mostrado.
2. Escolha os ficheiros (vários de uma vez). Um ficheiro cujo nome contém o nome indicado pelo desenho também conta, porque as exportações costumam acrescentar um prefixo de projeto.

## Recortar uma imagem

1. Escreva {{cmd:IMAGECLIP}} (ou `ICL`) e selecione a imagem.
2. Escolha `R` e clique em dois cantos, ou `P` e clique nos pontos de um polígono, e depois prima {{key:Enter}}. `D` remove o recorte.

## Imprimir imagens

As imagens entram no PDF como imagens, na sua própria resolução e por baixo das linhas. Na caixa de diálogo {{ui:Imprimir}}, {{ui:Imagens}} pode limitá-las a 600, 300 ou 150 dpi, para tornar o ficheiro mais pequeno. Um JPEG entra tal como está.

## O que se guarda onde

| Formato | Imagens |
|---|---|
| DWG (todas as versões) | Como imagens (IMAGE), com o seu recorte |
| DXF | Como os seus contornos, com o nome do ficheiro; o aviso ao guardar indica-o |

## Objetos de outros programas (OLE)

Um desenho pode conter objetos feitos por outro programa, como uma imagem de um programa de pintura ou um intervalo de uma folha de cálculo (objetos OLE). O CadCraft não os executa nem edita, e não consegue inserir novos. O que faz:

- **Num DXF**, um objeto OLE abre-se como um contorno. Se o objeto guardou uma imagem de si próprio e essa imagem é um bitmap, a imagem é desenhada dentro do contorno; caso contrário, o contorno tem uma etiqueta com o tipo do objeto, como "Microsoft Excel Worksheet (OLE)". Pode mover, copiar e apagar o contorno como um bloco. {{cmd:SAVEAS}} para DXF 2000 escreve-o de novo como objeto OLE, com os dados inalterados.
- **Num DWG**, os objetos são mantidos e escritos de volta quando guarda como DWG, byte a byte, mas **não são mostrados**: um DWG guarda a posição de um objeto dentro dos seus próprios dados, e o CadCraft ainda não os lê. O histórico indica quantos foram mantidos. Escreva {{cmd:OLELIST}} para ver quais são (tipo, tamanho, se cada um guardou uma imagem) e para pôr uma cópia de uma imagem onde escolher: **Colocar** pede o número, o canto inferior esquerdo e a largura, e desenha um contorno com a imagem dentro. Essa cópia é um contorno que pode mover ou apagar; o próprio objeto mantém-se no desenho e continua a ser escrito de volta ao guardar.
- Um objeto que veio de um DXF é guardado num DWG apenas como o seu contorno e a etiqueta; o histórico indica-o. Guarde como DXF 2000 para manter o próprio objeto.
- As imagens que são metaficheiros (o que muitos programas guardam) não são desenhadas: aparecem o contorno e a etiqueta.

## Erros comuns

| Vê | Porquê | Solução |
|---|---|---|
| Um contorno com um nome de ficheiro | O CadCraft não tem o ficheiro | {{cmd:IMAGE}}, depois escolha o ficheiro |
| "Isso não é uma imagem" | O objeto escolhido não é uma imagem | Escolha o contorno da imagem |

---
title: Desenhos digitalizados e o traçado
summary: Trazer uma folha digitalizada, escalá-la e endireitá-la, limpá-la, apagar partes dela, fazer snap às suas linhas e traçá-la em linhas e arcos.
keywords: digitalização, desenho digitalizado, raster, tiff, jpeg, png, escala, alinhar, endireitar, remover pontos, limiar, preto e branco, recortar, apagar, traçar, vetorizar, snap, arcos, trama, desenhos em papel, desenhos antigos, scanattach, scantrace
from: 36227e5b
---

## Da folha de papel aos objetos de desenho

Um desenho digitalizado é uma imagem. O CadCraft mantém a imagem que lhe deu e nunca a altera: cada passo de limpeza cria uma nova imagem, com um passo de anulação cada, e {{cmd:SCANINFO}} lista o ficheiro original e os passos dados desde então. Nada é enviado para fora e nada é adivinhado por um modelo treinado: a limpeza e o traçado são processamento de imagem comum, e correm no seu computador.

1. **Inserir.** {{cmd:SCANATTACH}} lê um PNG, um JPEG, um TIFF (uma página, ou todas as páginas de um ficheiro com várias) ou uma página PDF que seja uma imagem. Pede a página, o canto inferior esquerdo e a largura. Para uma página PDF pede também quantos pixels por polegada usar ao desenhar a página.
2. **Escalar.** {{cmd:SCANSCALE}}: escolha dois pontos na digitalização e escreva a distância real entre eles. A folha é escalada em torno do primeiro ponto.
3. **Alinhar.** {{cmd:SCANALIGN}}: escolha dois pontos na digitalização e os dois sítios a que pertencem; a folha desloca-se e roda para encaixar, e também escala, a não ser que responda Não.
4. **Endireitar.** {{cmd:SCANDESKEW}} mede o ângulo em que as linhas longas da folha estão e mostra-o, com o grau de certeza. Aceite-o ou escreva o seu, e a folha é rodada. Uma folha com poucas linhas longas recebe um aviso: verifique o ângulo antes de aceitar.
5. **Limpar.** {{cmd:SCANCLEAN}} torna a folha a preto e branco (Automático uniformiza primeiro o papel; Adaptativo acompanha mais de perto as alterações do papel; Nível é um só número para a folha inteira) e remove os pontos até ao tamanho que definir.
6. **Recortar e apagar.** {{cmd:SCANCROP}} mantém uma janela. {{cmd:SCANERASE}} apaga um retângulo, um polígono ou um laço (prima e arraste): carimbos, notas, uma mancha de café.

A imagem limpa é o que um DWG guardado contém (um IMAGE e o seu IMAGEDEF, com o ficheiro da imagem ao lado do desenho, como para qualquer imagem).

## Fazer snap às linhas da digitalização

Com {{cmd:RASTERSNAP}} ativo (por predefinição), os snaps a objetos também encontram as linhas de uma digitalização a preto e branco: as extremidades das linhas, os seus pontos médios, cantos e cruzamentos, mostrados com as marcas de snap habituais. A parte da folha sob o cursor é traçada à medida que se move; amplie o suficiente para que um pixel ocupe poucos pixels do ecrã. Uma linha mais longa do que a parte que está a ser traçada é seguida até às suas extremidades.

## O traçado

{{cmd:SCANTRACE}} transforma as linhas da folha em linhas e arcos numa nova camada (SCAN-TRACE), num único passo de anulação, com a digitalização ainda por baixo. Define:

- **Tolerância:** a distância máxima a que uma linha ou arco traçado pode ficar das linhas da digitalização, em unidades de desenho (o relatório dá também os pixels). Uma tolerância apertada segue cada irregularidade; uma larga produz menos peças, mais retas.
- **Janela:** um canto da folha, ou a folha inteira.
- **Arcos:** desativado produz só linhas.
- **Restantes:** o que o traçado deixou de fora é desenhado como caixas numa camada que pode desligar, ou não é desenhado.

O traçado encontra o centro de cada traço, segue-o, ajusta linhas retas e arcos circulares a ele, junta troços que foram cortados onde outra linha cruzava, torna exatamente horizontais e verticais as linhas quase horizontais e quase verticais, e fecha os cantos. **O texto e as tramas permanecem em raster:** as peças do tamanho de letras são postas de parte, e os conjuntos de linhas curtas paralelas são tomados como trama e postos de parte.

Quando termina, indica quantas linhas e arcos fez, a tolerância e quantas peças deixou como raster. **Isto é o que os pixels deram, com essa tolerância, e não é uma garantia de que o resultado esteja certo.** Compare-o com a folha: um traçado pode não apanhar uma linha ténue, juntar duas linhas muito próximas, ou desenhar uma linha onde há apenas uma mancha. Limpe primeiro a digitalização (endireitada, a preto e branco, sem pontos) e o resultado fica muito melhor.

## O que não lê

Os ficheiros TIFF guardados em mosaicos, BigTIFF, TIFF com compressão JPEG ou deflate, codificação de fax Grupo 3 e cores guardadas em planos separados são recusados com uma mensagem; guarde-os de novo em faixas com LZW, PackBits, Grupo 4 ou sem compressão. Os ficheiros PNG entrelaçados também são recusados. Os ficheiros com mais de 128 MB ou 100 milhões de pixels são recusados, e uma janela de traçado pode ter no máximo 64 milhões de pixels.

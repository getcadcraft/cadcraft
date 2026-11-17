---
title: Desenhos escaneados e o traçado
summary: Trazer uma folha escaneada, escalá-la e alinhá-la, limpá-la, apagar partes dela, prender-se às suas linhas e traçá-la em linhas e arcos.
keywords: escaneamento, desenho escaneado, raster, tiff, jpeg, png, escala, alinhar, endireitar, remover manchas, limiar, preto e branco, recortar, apagar, traçar, vetorizar, snap, arcos, hachura, desenhos em papel, desenhos antigos, scanattach, scantrace
from: 36227e5b
---

## Da folha de papel aos objetos do desenho

Um desenho escaneado é uma imagem. O CadCraft mantém a imagem que você forneceu e nunca a altera: cada etapa de limpeza gera uma nova imagem, com um passo de desfazer cada uma, e {{cmd:SCANINFO}} lista o arquivo original e as etapas feitas desde então. Nada é enviado para lugar nenhum e nada é deduzido por um modelo treinado: a limpeza e o traçado são processamento de imagem comum, executados no seu computador.

1. **Insira-o.** {{cmd:SCANATTACH}} lê um PNG, um JPEG, um TIFF (uma página, ou todas as páginas de um arquivo com várias páginas) ou uma página PDF que seja uma imagem. Ele pede a página, o canto inferior esquerdo e a largura. Para uma página PDF, pede também quantos pixels por polegada usar ao desenhar a página.
2. **Escale-o.** {{cmd:SCANSCALE}}: escolha dois pontos no escaneamento e digite a distância real entre eles. A folha é escalada em torno do primeiro ponto.
3. **Alinhe-o.** {{cmd:SCANALIGN}}: escolha dois pontos no escaneamento e os dois lugares a que eles pertencem. A folha se move e gira para encaixar, e também é escalada, a menos que você responda Não.
4. **Endireite-o.** {{cmd:SCANDESKEW}} mede o ângulo em que as linhas longas da folha estão e o mostra, com o grau de certeza. Aceite-o ou digite o seu, e a folha é girada. Uma folha com poucas linhas longas recebe um aviso: verifique o ângulo antes de aceitar.
5. **Limpe-o.** {{cmd:SCANCLEAN}} torna a folha preto e branco (Automático uniformiza primeiro o papel; Adaptativo acompanha mais de perto as mudanças do papel; Nível é um único número para a folha inteira) e remove manchas até o tamanho que você definir.
6. **Recorte e apague.** {{cmd:SCANCROP}} mantém uma janela. {{cmd:SCANERASE}} apaga um retângulo, um polígono ou um laço (pressione e arraste): carimbos, anotações, uma marca de café.

A imagem limpa é o que um DWG salvo contém (uma IMAGE e a sua IMAGEDEF, com o arquivo da imagem ao lado do desenho, como em qualquer imagem).

## Prender-se às linhas do escaneamento

Com {{cmd:RASTERSNAP}} ativado (padrão), os snaps de objeto também encontram as linhas de um escaneamento em preto e branco: as extremidades das linhas, seus pontos médios, cantos e cruzamentos, mostrados com as marcas de snap habituais. A parte da folha sob o ponteiro é traçada à medida que você se move. Amplie o suficiente para que um pixel ocupe poucos pixels da tela. Uma linha mais longa que a parte sendo traçada é seguida até as suas extremidades.

## O traçado

{{cmd:SCANTRACE}} transforma as linhas da folha em linhas e arcos em uma nova camada (SCAN-TRACE), como um único passo de desfazer, com o escaneamento ainda por baixo. Você define:

- **Tolerância:** o quanto uma linha ou arco traçado pode ficar afastado das linhas do escaneamento, em unidades do desenho (o relatório também informa em pixels). Uma tolerância apertada segue cada irregularidade; uma folgada gera menos peças, mais retas.
- **Janela:** um canto da folha, ou a folha inteira.
- **Arcos:** desativado, gera somente linhas.
- **Sobras:** o que o traçado deixou de fora é desenhado como caixas em uma camada que você pode desligar, ou então não é desenhado.

O traçado encontra o centro de cada traço, o acompanha, ajusta linhas retas e arcos circulares a ele, une trechos que foram cortados onde outra linha cruzava, torna exatamente horizontais e verticais as linhas quase horizontais e quase verticais, e fecha os cantos. **Texto e hachura permanecem como raster:** peças do tamanho de letras são separadas, e feixes de linhas curtas e paralelas são considerados hachura e também separados.

Quando termina, informa quantas linhas e arcos foram feitos, a tolerância e quantas peças foram deixadas como raster. **Isso é o que os pixels deram, dentro dessa tolerância, e não é garantia de que o resultado esteja certo.** Compare com a folha: um traçado pode deixar de fora uma linha tênue, unir duas linhas muito próximas ou desenhar uma linha onde há apenas uma mancha. Limpe o escaneamento antes (endireitado, em preto e branco, sem manchas) e o resultado fica bem melhor.

## O que não é lido

Arquivos TIFF armazenados em blocos (tiles), BigTIFF, TIFF com compressão JPEG ou deflate, codificação de fax Grupo 3 e cores mantidas em planos separados são recusados com uma mensagem. Salve-os novamente como faixas (strips) com compressão LZW, PackBits, Grupo 4 ou sem compressão. Arquivos PNG entrelaçados também são recusados. Arquivos acima de 128 MB ou de 100 milhões de pixels são recusados, e uma janela de traçado pode conter no máximo 64 milhões de pixels.

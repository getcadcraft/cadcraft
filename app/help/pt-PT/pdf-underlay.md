---
title: Sobreposições PDF e importação de PDF
summary: Coloque uma página PDF por baixo do desenho para a traçar e imprimir, ou transforme as linhas e o texto da página em objetos do desenho.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, sobreposição, traçar, importar pdf, digitalização, planta, esmaecer, recortar, camadas, snap, abrir pdf
from: aa301d0f
---

## Duas formas de trazer uma página PDF

- **Anexar** ({{cmd:PDFATTACH}}) mantém o PDF como uma imagem por baixo do desenho. Traça-o, faz snap às suas linhas, esmaece-o e recorta-o, e é impresso com a folha. O desenho guarda apenas o nome do ficheiro.
- **Importar** ({{cmd:PDFIMPORT}}) transforma as linhas, curvas, preenchimentos e texto da página em objetos de desenho normais, em camadas com o nome do PDF. Podem ser editados à vontade, e o PDF deixa de ser necessário depois.

Abrir um PDF com {{ui:Abrir}} pergunta qual das duas opções pretende.

## Anexar uma página

1. Escreva `PDFATTACH` (ou `PDFATT`) e escolha o PDF. Se tiver várias páginas, escreva o número da página.
2. Clique no ponto de inserção (o canto inferior esquerdo da página).
3. Prima {{key:Enter}} para o tamanho real da página, ou escreva a escala: unidades de desenho por ponto PDF (um ponto é 1/72 de polegada, portanto 0.3528 num desenho em milímetros).
4. Prima {{key:Enter}} para não rodar, ou escreva um ângulo.

A página é um objeto como uma referência de bloco: pode mover, rodar, escalar, copiar, apagar e colocá-la numa camada. Desligue a camada e ela desaparece. Aumente o zoom e a página volta a ser desenhada com nitidez.

## Traçar

Com {{ui:Snap}} ativo, o cursor faz snap às próprias linhas do PDF: extremidades, pontos médios e cruzamentos (e {{ui:Mais próximo}} quando esse snap estiver ativo). O texto desenhado como letras na página não é alvo de snap.

## Ajustar

- `PDFADJUST`: **Esmaecimento** (de 0 a 80 por cento), **Contraste** (de 0 a 100), **Monocromático** e **Onoff** para ocultar sem apagar.
- `PDFCLIP`: mostra apenas um retângulo ou polígono da página; **Eliminar** remove o recorte.
- `PDFLAYERS`: um PDF pode ter as suas próprias camadas. O comando lista-as; escreva um número para ligar ou desligar essa camada apenas nesta sobreposição. As camadas que o ficheiro tem desligadas começam desligadas.

## Imprimir e guardar

PLOT imprime a página como as suas linhas, preenchimentos e texto (assim fica nítida e pesquisável). As imagens dentro do PDF são mostradas no ecrã, mas ainda não são impressas.

Um DWG ou um DXF 2000 guarda a sobreposição como uma ligação: o nome do ficheiro, a página, a posição, a escala, a rotação, o recorte, o esmaecimento e o contraste. O próprio PDF não fica no desenho. Reabra o desenho, escreva `PDF` e escolha de novo o ficheiro; até o fazer, as páginas são mostradas como molduras, e só assumem o tamanho real quando o fizer. O DXF mais antigo (R12) não tem sobreposições: guarda a moldura e o nome. Ainda não foi verificado como outros programas leem o recorte e a escala guardados.

## Importar uma página

1. Escreva `PDFIMPORT` (ou `PDFIM`) e escolha o PDF e a página.
2. Clique onde deve ficar o canto inferior esquerdo da página.
3. Prima {{key:Enter}} para o tamanho real, escreva uma escala, ou escolha **Dois pontos**: a página é desenhada em tamanho real; depois clique em dois pontos de uma distância que conhece e escreva a distância real. Tudo é escalado em conformidade.

As linhas tornam-se linhas e polilinhas, os círculos e arcos são reconhecidos, as formas preenchidas tornam-se tramas sólidas, e o texto torna-se texto numa camada que termina em `-TEXT`. É um só passo de anulação. As imagens no PDF não são importadas: anexe a página em vez disso. Uma digitalização (uma página que é apenas uma imagem) não tem linhas para importar.

Os PDF são lidos como ficheiros não confiáveis: nenhum script é executado, e uma página muito grande é truncada, o que é indicado.

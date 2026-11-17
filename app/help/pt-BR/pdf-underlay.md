---
title: Sobreposições de PDF e importação de PDF
summary: Coloque uma página PDF sob o seu desenho para traçar e plotar, ou transforme as linhas e textos da página em objetos do desenho.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, sobreposição, traçar, importar pdf, digitalização, planta baixa, esmaecer, recorte, camadas, snap, abrir pdf
from: aa301d0f
---

## Duas formas de trazer uma página PDF

- **Anexar** ({{cmd:PDFATTACH}}) mantém o PDF como uma imagem sob o seu desenho. Você faz o traçado sobre ele, usa snap nas suas linhas, esmaece e recorta, e ele é impresso junto com a folha. O desenho guarda apenas o nome do arquivo.
- **Importar** ({{cmd:PDFIMPORT}}) transforma as linhas, curvas, preenchimentos e textos da página em objetos comuns do desenho, em camadas com o nome do PDF. Eles são seus para editar, e o PDF não é mais necessário depois.

Abrir um PDF com {{ui:Abrir}} pergunta qual das duas opções você quer.

## Anexar uma página

1. Digite `PDFATTACH` (ou `PDFATT`) e escolha o PDF. Se ele tiver várias páginas, digite o número da página.
2. Clique no ponto de inserção (o canto inferior esquerdo da página).
3. Pressione {{key:Enter}} para o tamanho real da página, ou digite a escala: unidades do desenho por ponto do PDF (um ponto tem 1/72 de polegada, então 0.3528 em um desenho em milímetros).
4. Pressione {{key:Enter}} para nenhuma rotação, ou digite um ângulo.

A página é um objeto, como uma referência de bloco: mova, gire, escale, copie, apague e coloque-a em uma camada. Desligue a camada dela e ela desaparece. Amplie o zoom e a página é desenhada de novo com nitidez.

## Traçar sobre ela

Com {{ui:Snap}} ligado, o cursor faz snap nas próprias linhas do PDF: extremidades, pontos médios e interseções (e {{ui:Mais próximo}} quando esse snap estiver ligado). Texto desenhado como letras na página não recebe snap.

## Ajustar

- `PDFADJUST`: **Esmaecer** (0 a 80 por cento), **Contraste** (0 a 100), **Monocromático** e **Ligar/desligar** para ocultar sem apagar.
- `PDFCLIP`: mostra apenas um retângulo ou polígono da página; **Excluir** remove o recorte.
- `PDFLAYERS`: um PDF pode ter camadas próprias. O comando as lista; digite um número para ligar ou desligar aquela camada apenas para esta sobreposição. As camadas que o arquivo tem desligadas começam desligadas.

## Plotar e salvar

PLOT imprime a página como as suas linhas, preenchimentos e textos (assim ela continua nítida e pesquisável). Imagens dentro do PDF são mostradas na tela, mas ainda não são impressas.

Um DWG ou DXF 2000 mantém a sobreposição como um vínculo: o nome do arquivo, a página, onde ela está, sua escala, rotação, recorte, esmaecimento e contraste. O próprio PDF não fica no desenho. Reabra o desenho, digite `PDF` e selecione o arquivo de novo; até lá as páginas aparecem como pórticos, e recebem o tamanho real quando você fizer isso. O DXF antigo (R12) não tem sobreposições: mantém o pórtico e o nome. Ainda não foi verificado como outros programas leem o recorte e a escala salvos.

## Importar uma página

1. Digite `PDFIMPORT` (ou `PDFIM`) e escolha o PDF e a página.
2. Clique onde deve ficar o canto inferior esquerdo da página.
3. Pressione {{key:Enter}} para o tamanho real, digite uma escala, ou escolha **Dois pontos**: a página é desenhada no tamanho real, depois você clica em dois pontos de uma distância que você conhece e digita a distância real; tudo é escalado para combinar.

Linhas viram linhas e polilinhas, círculos e arcos são reconhecidos, formas preenchidas viram hachuras sólidas, e textos viram texto em uma camada que termina em `-TEXT`. É uma única etapa de desfazer. Imagens do PDF não são importadas: anexe a página. Uma digitalização (página que é apenas uma imagem) não tem linhas para importar.

Os PDFs são lidos como arquivos não confiáveis: nenhum script é executado, e uma página muito grande é cortada, e o programa avisa disso.

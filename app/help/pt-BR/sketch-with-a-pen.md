---
title: Esboçar com caneta e obter geometria precisa
summary: Desenhe à mão livre com uma caneta, mouse ou dedo e cada traço vira uma linha, círculo, arco, retângulo ou polilinha limpos ao levantar a caneta, encaixados no que já está desenhado, com o tamanho pronto para digitar por cima.
keywords: esboço, caneta, stylus, à mão livre, dedo, limpar, preciso, snap, SKETCHLIVE, SKETCHFIX, tamanho, digitar por cima, pressão, espessura de linha, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Inicie {{cmd:SKETCHLIVE}} (ou escolha **Desenhar › Mais › Esboçar com caneta**) e desenhe um traço pressionando e arrastando. Ao levantar a caneta, o CadCraft lê o que você quis dizer e o coloca no desenho:

| Seu traço | O que você obtém |
|---|---|
| Quase reto | Uma linha. Uma linha quase nivelada ou a prumo fica exatamente nivelada ou a prumo. |
| Fechado e redondo | Um círculo |
| Parte de uma forma redonda | Um arco |
| Fechado, com quatro cantos em ângulo reto | Um retângulo |
| Qualquer outra coisa | Uma polilinha com lados em esquadro |

As extremidades de um traço são puxadas para a extremidade mais próxima do que já está desenhado, então uma parede esboçada encontra a parede ao lado.

## Digitar por cima do tamanho

Depois de cada traço, a linha de comando mostra o tamanho dele (o **comprimento** de uma linha, o **raio** de um círculo ou arco, a **largura** de um retângulo) como padrão. Pressione {{key:Enter}} para mantê-lo, ou digite um número ou um comprimento como `12'6"` para substituí-lo. Uma linha mantém sua primeira extremidade, um círculo o seu centro, um retângulo o seu primeiro canto.

Pressione {{key:Enter}} em um prompt vazio para terminar, ou digite `U` para desfazer o último traço. A sessão inteira é um único passo de desfazer.

## Limpar vários traços de uma vez

{{cmd:SKETCHFIX}} reúne traços e os torna todos precisos quando você pressiona {{key:Enter}}, o que combina com um layout rascunhado com rapidez.

:::note
Tudo é calculado no seu computador por regras, sem modelo e sem enviar nada a lugar algum.
:::

## A pressão define a espessura de linha

Onde a caneta está ativada para os aplicativos (Geral › Dispositivos de entrada › Caneta), um traço feito com caneta carrega cada ponto que a caneta deu e a pressão deles. Um traço leve faz um objeto fino, e um firme um objeto grosso: a pressão média do traço escolhe 0.18, 0.25, 0.35 ou 0.50 mm, e a linha de comando informa qual. Traços feitos com mouse ou dedo assumem a espessura de linha atual, como antes. {{cmd:PENPRESSURE}} desliga isto (ou o liga de novo); a escolha é salva neste navegador.

---
title: Esboce com uma caneta e obtenha geometria precisa
summary: Desenhe à mão livre com caneta, mouse ou dedo e cada traço vira uma linha, círculo, arco, retângulo ou polilinha limpos ao levantar a caneta, com snap no que já está desenhado, e com o tamanho pronto para ser digitado por cima.
keywords: esboço, caneta, stylus, mão livre, dedo, limpar, preciso, snap, SKETCHLIVE, SKETCHFIX, tamanho, digitar por cima
from: cd87eb75
---

Inicie {{cmd:SKETCHLIVE}} (ou escolha **Desenhar › Mais › Esboçar com caneta**) e desenhe um traço pressionando e arrastando. Ao levantar a caneta, o CadCraft interpreta o que você quis e o coloca no desenho:

| Seu traço | O que você obtém |
|---|---|
| Quase reto | Uma linha. Uma linha quase horizontal ou vertical é deixada exatamente horizontal ou vertical. |
| Fechado e redondo | Um círculo |
| Parte de uma forma redonda | Um arco |
| Fechado com quatro cantos retos | Um retângulo |
| Qualquer outra coisa | Uma polilinha com lados retos |

As extremidades de um traço são puxadas para a extremidade mais próxima do que já foi desenhado, de modo que uma parede esboçada encontra a parede ao lado.

## Digitar sobre o tamanho

Após cada traço, a linha de comando mostra o tamanho dele (o **comprimento** de uma linha, o **raio** de um círculo ou arco, a **largura** de um retângulo) como padrão. Pressione {{key:Enter}} para mantê-lo, ou digite um número ou uma medida como `12'6"` para substituí-lo. Uma linha mantém a primeira extremidade, um círculo mantém o centro, um retângulo mantém o primeiro canto.

Pressione {{key:Enter}} com o prompt vazio para concluir, ou digite `U` para desfazer o último traço. A sessão inteira é uma única etapa de desfazer.

## Limpar vários traços de uma vez

{{cmd:SKETCHFIX}} reúne traços e os torna todos precisos quando você pressiona {{key:Enter}}, o que é adequado para um layout grosseiro desenhado rapidamente.

:::note
Tudo é calculado no seu computador por regras, sem modelo e sem enviar nada a lugar algum.
:::

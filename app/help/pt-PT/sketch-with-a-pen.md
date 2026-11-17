---
title: Desenhar à mão livre com uma caneta e obter geometria precisa
summary: Desenhe à mão livre com uma caneta, rato ou dedo e cada traço torna-se uma linha, círculo, arco, retângulo ou polilinha limpa ao levantar a caneta, alinhada com o que já está desenhado, com a medida pronta a escrever por cima.
keywords: esboço, caneta, stylus, mão livre, dedo, limpar, preciso, snap, SKETCHLIVE, SKETCHFIX, medida, escrever por cima
from: cd87eb75
---

Inicie {{cmd:SKETCHLIVE}} (ou escolha **Desenhar › Mais › Desenhar com uma caneta**) e desenhe um traço premindo e arrastando. Ao levantar a caneta, o CadCraft interpreta o que pretendia e coloca-o no desenho:

| Traço | Resultado |
|---|---|
| Quase reto | Uma linha. Uma linha quase na horizontal ou na vertical fica exatamente na horizontal ou na vertical. |
| Fechado e redondo | Um círculo |
| Parte de uma forma redonda | Um arco |
| Fechado com quatro cantos retos | Um retângulo |
| Qualquer outra coisa | Uma polilinha com lados retos |

As extremidades de um traço são puxadas para a extremidade mais próxima do que já está desenhado, pelo que uma parede esboçada encontra a parede ao lado.

## Escrever por cima da medida

Após cada traço, a linha de comandos mostra a sua medida (o **comprimento** de uma linha, o **raio** de um círculo ou de um arco, a **largura** de um retângulo) como valor predefinido. Prima {{key:Enter}} para a manter, ou escreva um número ou um comprimento, como `12'6"`, para a substituir. Uma linha mantém a primeira extremidade, um círculo mantém o seu centro e um retângulo mantém o primeiro canto.

Prima {{key:Enter}} numa linha de comandos vazia para terminar, ou escreva `U` para anular o último traço. Toda a sessão é um único passo de anulação.

## Limpar vários traços de uma só vez

{{cmd:SKETCHFIX}} recolhe traços e torna-os todos precisos ao premir {{key:Enter}}, o que é útil para uma disposição grosseira desenhada depressa.

:::note
Tudo é calculado no seu computador, por regras, sem modelo e sem enviar nada para fora.
:::

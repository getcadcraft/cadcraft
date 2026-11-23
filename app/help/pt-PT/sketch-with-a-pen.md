---
title: Desenhar à mão com uma caneta e obter geometria precisa
summary: Desenhe à mão livre com uma caneta, rato ou dedo e cada traço torna-se uma linha, círculo, arco, retângulo ou polilinha limpos ao levantar a caneta, encaixados ao que já está desenhado, com o seu tamanho pronto a ser escrito por cima.
keywords: esboço, caneta, stylus, mão livre, dedo, limpar, preciso, snap, SKETCHLIVE, SKETCHFIX, tamanho, escrever por cima, pressão, espessura de linha, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Inicie {{cmd:SKETCHLIVE}} (ou escolha **Desenhar › Mais › Desenhar à mão com uma caneta**) e desenhe um traço premindo e arrastando. Ao levantar a caneta, o CadCraft lê o que pretendia e coloca-o no desenho:

| O seu traço | O que obtém |
|---|---|
| Quase reto | Uma linha. Uma linha quase horizontal ou vertical fica exatamente horizontal ou vertical. |
| Fechado e redondo | Um círculo |
| Parte de uma forma redonda | Um arco |
| Fechado com quatro cantos retos | Um retângulo |
| Qualquer outro | Uma polilinha com lados retos |

As extremidades de um traço são puxadas para a extremidade mais próxima do que já está desenhado, por isso uma parede esboçada encontra a parede ao lado.

## Escrever por cima do tamanho

Depois de cada traço, a linha de comandos mostra o seu tamanho (o **comprimento** de uma linha, o **raio** de um círculo ou arco, a **largura** de um retângulo) como predefinição. Prima {{key:Enter}} para o manter, ou escreva um número ou um comprimento como `12'6"` para o substituir. Uma linha mantém a sua primeira extremidade, um círculo o seu centro, um retângulo o seu primeiro canto.

Prima {{key:Enter}} num pedido vazio para terminar, ou escreva `U` para anular o último traço. A sessão inteira é um único passo de anular.

## Limpar vários traços de uma vez

{{cmd:SKETCHFIX}} recolhe traços e torna-os todos precisos quando prime {{key:Enter}}, o que convém a um esboço grosseiro desenhado depressa.

:::note
Tudo é calculado no seu computador por regras, sem modelo e sem enviar nada para lado nenhum.
:::

## A pressão define a espessura de linha

Onde a caneta está ativada para as aplicações (Definições › Global › Dispositivos de entrada › Caneta), um traço desenhado com uma caneta leva todos os pontos que a caneta deu e a sua pressão. Um traço leve faz um objeto fino e um firme um objeto grosso: a pressão média do traço escolhe 0.18, 0.25, 0.35 ou 0.50 mm, e a linha de comandos indica qual. Os traços desenhados com rato ou dedo usam a espessura de linha atual, como antes. {{cmd:PENPRESSURE}} desliga isto (ou volta a ligar); a escolha fica guardada neste navegador.

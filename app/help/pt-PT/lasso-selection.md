---
title: Seleção por laço
summary: Prima e arraste um contorno à mão livre à volta de objetos para os selecionar, como uma janela, um cruzamento ou uma vedação; alterne com Space enquanto arrasta.
keywords: laço, lassomode, arrastar, à mão livre, selecionar, seleção, janela, cruzamento, vedação, espaço, polígono, toque, caneta, retângulo
from: 9ec6154d
---

## O que vai aprender

Como selecionar objetos desenhando à volta deles, e como recuperar o retângulo quando quiser.

## Desenhar um laço

1. Desenhe algumas linhas e círculos próximos uns dos outros.
2. Sem nenhum comando em execução, prima o botão do rato num local vazio e arraste à volta de alguns deles, movendo **para a direita** primeiro.
3. Largue.

Só são selecionados os objetos totalmente dentro do contorno. O contorno é desenhado a cheio enquanto arrasta: este é um laço de janela.

## Janela, cruzamento e vedação

Os objetos selecionados dependem do primeiro movimento do arrastamento e de {{key:Space}}:

| Ao arrastar | Laço | Seleciona |
|---|---|---|
| Primeiro para a direita | Janela (contorno a cheio) | Apenas objetos **totalmente dentro** |
| Primeiro para a esquerda | Cruzamento (a tracejado, verde) | Objetos dentro **e** objetos que o contorno toca |
| Prima {{key:Space}} enquanto arrasta | Janela, depois cruzamento, depois vedação | Vedação (um percurso a tracejado, não fechado): apenas objetos que o percurso cruza |

1. Prima num local vazio e arraste à volta de alguns objetos, movendo **primeiro para a esquerda**. Tudo o que o contorno tocar também fica selecionado.
2. Prima {{key:Esc}}.
3. Prima e arraste de novo; mantendo ainda o botão premido, prima {{key:Space}} uma vez. O contorno passa a cruzamento; prima {{key:Space}} outra vez para uma vedação.

{{key:Shift}} ao largar retira os objetos da seleção (com "Clicking objects: Adicionar" nas Definições).

## Dentro de um comando

Um laço funciona sempre que o CadCraft pede `Select objects`: desenhe-o e, depois, prima {{key:Enter}} para terminar. {{cmd:STRETCH}} usa um laço de cruzamento como janela, por isso pode esticar de uma só vez uma parte em forma de L de um desenho.

{{cmd:TRIM}} e {{cmd:EXTEND}} usam o arrastamento de forma diferente: aí aparam (ou prolongam) todas as partes que o percurso cruza. Consulte [Aparar e prolongar](topic:trim-and-extend).

## O retângulo

Um clique num espaço vazio, um movimento e um segundo clique desenham sempre a janela retangular (da esquerda para a direita) ou o cruzamento (da direita para a esquerda).

Para que um arrastamento volte a desenhar o retângulo, abra {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Arrastar para selecionar}} e escolha {{ui:Retângulo}}, ou escreva {{cmd:LASSOMODE}} e depois `0`. Escreva {{cmd:LASSOMODE}} e depois `1` para o laço. A escolha fica guardada neste navegador.

:::touch
Arraste com o dedo ou com a caneta da mesma forma. Um toque continua a escolher um só objeto.
:::

## Erros comuns

- **Não foi selecionado nada.** O laço era uma janela e nenhum objeto estava totalmente dentro. Comece o arrastamento para a esquerda, ou prima {{key:Space}} enquanto arrasta.
- **O arrastamento moveu um grip.** Premir o grip de um objeto selecionado move o grip. Comece o laço num local vazio.
- **O Space terminou o comando.** {{key:Space}} só alterna o laço enquanto o botão estiver premido; caso contrário, é Enter.

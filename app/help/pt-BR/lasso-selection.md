---
title: Seleção por laço
summary: Pressione e arraste um contorno à mão livre ao redor de objetos para selecioná-los, como janela, cruzamento ou cerca; alterne com Space enquanto arrasta.
keywords: laço, lassomode, arrastar, à mão livre, selecionar, seleção, janela, cruzamento, cerca, space, polígono, toque, caneta, retângulo
from: 9ec6154d
---

## O que você vai aprender

Como selecionar objetos desenhando um contorno ao redor deles e como voltar ao retângulo quando quiser.

## Desenhar um laço

1. Desenhe algumas linhas e círculos próximos uns dos outros.
2. Sem nenhum comando em execução, pressione o botão do mouse em um espaço vazio e arraste ao redor de alguns deles, movendo **para a direita** primeiro.
3. Solte.

Somente os objetos totalmente dentro do contorno são selecionados. O contorno é desenhado contínuo enquanto você arrasta: este é um laço de janela.

## Janela, cruzamento e cerca

Os objetos selecionados dependem do primeiro movimento do arraste e de {{key:Space}}:

| Você arrasta | Laço | Seleciona |
|---|---|---|
| Primeiro para a direita | Janela (contorno contínuo) | Somente objetos **totalmente dentro** |
| Primeiro para a esquerda | Cruzamento (tracejado, verde) | Objetos dentro **e** objetos que o contorno toca |
| Pressione {{key:Space}} enquanto arrasta | Janela, depois cruzamento, depois cerca | Cerca (um caminho tracejado, não fechado): somente objetos que o caminho cruza |

1. Pressione em um espaço vazio e arraste ao redor de alguns objetos, movendo **para a esquerda** primeiro. Tudo o que o contorno toca também é selecionado.
2. Pressione {{key:Esc}}.
3. Pressione e arraste novamente; ainda com o botão pressionado, pressione {{key:Space}} uma vez. O contorno se transforma em cruzamento; pressione {{key:Space}} novamente para uma cerca.

{{key:Shift}} ao soltar remove os objetos da seleção (com "Clicando em objetos: Adiciona" nas Configurações).

## Dentro de um comando

Um laço funciona sempre que o CadCraft pedir `Select objects`: desenhe-o e pressione {{key:Enter}} para concluir. {{cmd:STRETCH}} usa um laço de cruzamento como janela, para que você possa esticar uma parte em forma de L do desenho de uma só vez.

{{cmd:TRIM}} e {{cmd:EXTEND}} usam o arraste de outra forma: nesses comandos, ele apara (ou estende) cada trecho que o caminho cruza. Veja [Aparar e estender](topic:trim-and-extend).

## O retângulo

Um clique em espaço vazio, um movimento e um segundo clique sempre desenham o retângulo de janela (da esquerda para a direita) ou de cruzamento (da direita para a esquerda).

Para que um arraste volte a desenhar o retângulo, abra {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Arrastar para selecionar}} e escolha {{ui:Retângulo}}, ou digite {{cmd:LASSOMODE}} e depois `0`. Digite {{cmd:LASSOMODE}} e depois `1` para o laço. A escolha fica salva neste navegador.

:::touch
Arraste com o dedo ou com a caneta do mesmo jeito. Um toque ainda seleciona um objeto.
:::

## Erros comuns

- **Nada foi selecionado.** O laço era uma janela e nada ficava totalmente dentro. Comece o arraste para a esquerda, ou pressione {{key:Space}} enquanto arrasta.
- **O arraste moveu um grip.** Pressionar o grip de um objeto selecionado move o grip. Comece o laço em um espaço vazio.
- **Space encerrou o comando.** {{key:Space}} alterna o laço somente enquanto o botão está pressionado; caso contrário, é {{key:Enter}}.

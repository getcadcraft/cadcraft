---
title: Editar com grips e Propriedades
summary: Estique, mova e redimensione objetos pelos seus grips, e digite comprimentos, raios, ângulos e coordenadas exatos no painel Propriedades.
keywords: grips, propriedades, esticar, comprimento, raio, coordenadas, editar, propriedades rápidas, paleta de propriedades, alterar, camada, cor, color
from: f22541ba
---

## O que você vai aprender

Duas formas rápidas de alterar um objeto sem um comando: arrastar os seus **grips**, ou digitar novos valores no painel **Propriedades** à direita.

## Grips

Quando você seleciona objetos (até 200 por vez) sem nenhum comando em execução, pequenos quadrados aparecem neles. Estes são os grips:

| Objeto | Grips |
|---|---|
| Linha | As duas extremidades e o meio (move a linha inteira) |
| Círculo | O centro (move-o) e quatro pontos no círculo (alteram o raio) |
| Arco | O centro e as duas extremidades (alteram onde ele começa e termina) |
| Polilinha | Cada vértice |
| Texto, ponto, referência de bloco | O ponto de inserção |
| Elipse | O centro |
| Cota | Seus pontos de definição e a posição da linha de cota |
| Viewport | O centro (move-o) e os quatro cantos (redimensionam-no) |

### Mover um grip

1. Desenhe uma linha e clique nela. Três grips aparecem.
2. Clique no grip de uma extremidade. A barra de status diz "Clique onde este grip vai ficar (Esc para cancelar). Snaps e Orto se aplicam."
3. Mova o cursor de mira. Uma prévia acompanha.
4. Clique na nova posição, ou faça snap em um ponto de outro objeto e clique.

A extremidade se move e o restante da linha continua no lugar. Você também pode pressionar um grip e arrastá-lo, e soltar onde ele deve ficar.

:::note
Você não pode digitar uma coordenada para um grip. Para uma posição exata, faça snap em um ponto ou digite o valor em Propriedades.
:::

Pressione {{key:Esc}} ou clique com o botão direito para cancelar um movimento de grip.

## Propriedades

O painel da direita mostra as propriedades do que está selecionado.

1. Clique em uma linha. O título do painel diz "Linha".
2. Clique em {{ui:Comprimento}}, digite `2500` e pressione {{key:Enter}}.

A linha agora tem exatamente 2500 de comprimento, mantendo o ponto inicial e o ângulo. {{key:Enter}} ou clicar em outro lugar aplica um valor; {{key:Esc}} devolve o valor antigo. Cada alteração é uma única etapa de desfazer, também quando muitos objetos mudam ao mesmo tempo.

Os campos aceitam expressões (`=2*45`) e comprimentos com unidades (`3'6"`, `900mm`), cada ponto tem X, Y e Z, e vários objetos podem ser alterados juntos. Tudo isso está em [O painel Propriedades](topic:properties-panel).

## Erros comuns

- **Nenhum grip aparece.** Um comando está em execução (pressione {{key:Esc}}), ou mais de 200 objetos estão selecionados, ou o objeto está em uma camada bloqueada.
- **O grip foi para o lugar errado.** Um snap o capturou. Mantenha {{key:Shift}} pressionada enquanto clica para ignorar snaps.
- **Digitar em Propriedades não fez nada.** Pressione {{key:Enter}} ou clique em outro lugar para aplicar. Uma entrada recusada (comprimentos e raios zero ou negativos, texto que não é um valor) deixa o campo vermelho e informa o motivo.
- **Letras digitadas foram para um campo de Propriedades.** Enquanto um campo tem o cursor, as teclas digitam ali. Pressione {{key:Enter}} ou {{key:Esc}} e depois digite o comando.

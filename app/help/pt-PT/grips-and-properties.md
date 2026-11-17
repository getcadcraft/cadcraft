---
title: Editar com grips e Propriedades
summary: Estique, mova e redimensione objetos pelos seus grips, e escreva comprimentos, raios, ângulos e coordenadas exatos no painel Propriedades.
keywords: grips, propriedades, esticar, comprimento, raio, coordenadas, editar, propriedades rápidas, paleta de propriedades, alterar, camada, cor, color
from: f22541ba
---

## O que vai aprender

Duas formas rápidas de alterar um objeto sem comando: arraste os seus **grips**, ou escreva novos valores no painel **Propriedades** à direita.

## Grips

Quando seleciona objetos (até 200 de cada vez) sem nenhum comando em curso, aparecem pequenos quadrados nos objetos. São os grips:

| Objeto | Grips |
|---|---|
| Linha | Ambas as extremidades e o meio (move a linha inteira) |
| Círculo | O centro (move-o) e quatro pontos no círculo (alteram o raio) |
| Arco | O centro e as duas extremidades (alteram onde começa e termina) |
| Polilinha | Cada vértice |
| Texto, ponto, referência de bloco | O ponto de inserção |
| Elipse | O centro |
| Cota | Os seus pontos de definição e a posição da linha de cota |
| Viewport | O centro (move-o) e os quatro cantos (redimensiona-o) |

### Mover um grip

1. Desenhe uma linha e clique nela. Aparecem três grips.
2. Clique no grip de uma extremidade. A barra de estado diz "Clique onde este grip deve ir (Esc para cancelar). Os snaps e o Orto aplicam-se."
3. Mova a cruz. Uma pré-visualização acompanha o movimento.
4. Clique na nova posição, ou faça snap a um ponto noutro objeto e clique.

A extremidade move-se e o resto da linha mantém-se no lugar. Também pode premir um grip e arrastá-lo, e depois largá-lo onde deve ficar.

:::note
Não é possível escrever uma coordenada para um grip. Para uma posição exata, faça snap a um ponto, ou escreva o valor em Propriedades.
:::

Prima {{key:Esc}} ou clique com o botão direito para cancelar um movimento de grip.

## Propriedades

O painel da direita mostra as propriedades do que está selecionado.

1. Clique numa linha. O cabeçalho do painel lê "Linha".
2. Clique em {{ui:Comprimento}}, escreva `2500` e prima {{key:Enter}}.

A linha passa a ter exatamente 2500 de comprimento, mantendo o seu ponto inicial e o ângulo. {{key:Enter}} ou clicar noutro sítio aplica um valor; {{key:Esc}} repõe o valor anterior. Cada alteração corresponde a um único passo de anulação, também quando muitos objetos mudam ao mesmo tempo.

Os campos aceitam expressões (`=2*45`) e comprimentos com unidades (`3'6"`, `900mm`), cada ponto tem X, Y e Z, e vários objetos podem ser alterados em conjunto. Tudo isto está em [O painel Propriedades](topic:properties-panel).

## Erros comuns

- **Não aparecem grips.** Há um comando em curso (prima {{key:Esc}}), ou estão selecionados mais de 200 objetos, ou o objeto está numa camada bloqueada.
- **O grip foi para o sítio errado.** Um snap apanhou-o. Mantenha {{key:Shift}} premido ao clicar para ignorar os snaps.
- **Escrever em Propriedades não fez nada.** Prima {{key:Enter}} ou clique noutro sítio para aplicar. Uma entrada recusada (comprimentos e raios zero ou negativos, texto que não é um valor) torna o campo vermelho e indica o motivo.
- **As letras que escreveu foram para um campo de Propriedades.** Enquanto um campo tem o cursor, as teclas escrevem aí. Prima {{key:Enter}} ou {{key:Esc}} e escreva depois o comando.

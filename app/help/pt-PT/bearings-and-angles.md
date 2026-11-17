---
title: Escrever e mostrar rumos e ângulos em graus, minutos e segundos
summary: Escreva uma direção como rumo topográfico, como N45°23'30"E, ou como graus, minutos e segundos onde quer que se peça um ângulo, e escolha como o desenho mostra os ângulos com AUNITS.
keywords: rumo, rumos, topógrafo, rumo por quadrante, N45E, graus minutos segundos, DMS, ângulo, direção, lote, lotes, implantar, poligonal, AUNITS, ANGUNITS, formato de ângulo, polar, distância direta, DIST
from: af805567
---

Sempre que o CadCraft pede um **ângulo ou uma direção**, pode escrever um **rumo por quadrante** ou um ângulo em **graus, minutos e segundos**, além de um número simples de graus.

## Rumos

Um rumo indica norte ou sul, um ângulo até 90°, e depois leste ou oeste:

| Escreva | Direção |
|---|---|
| `N45°23'30"E` ou `N45d23'30"E` | 45°23'30" a partir do norte em direção a leste |
| `S10-30-00W` ou `S 10 30 W` | 10°30' a partir do sul em direção a oeste (hífenes ou espaços entre as partes) |
| `N45.5E` | 45.5° a partir do norte em direção a leste |
| `N`, `E`, `S`, `W` | norte, leste, sul, oeste, exatamente |

As letras podem estar em maiúsculas ou minúsculas. Em pt-PT, `O` significa oeste. `d` e `°` significam o mesmo; `'` são minutos e `"` são segundos.

Para implantar uma linha de lote com 20 m de comprimento a N45°23'E, inicie {{cmd:LINE}} e escreva o primeiro ponto, depois `@20<N45d23'E`. O mesmo funciona no pedido de ângulo de {{cmd:ROTATE}}, em qualquer outro pedido que peça um ângulo, e na caixa de ângulo de {{ui:Entrada dinâmica}}.

## Graus, minutos e segundos

`45°23'30"`, `45d23'30"`, `45d30'` ou `45d` é um ângulo a partir do eixo X, no sentido anti-horário. O `°` ou o `d` são necessários: `45-23-30` é lido como aritmética (45 − 23 − 30). Os minutos e os segundos têm de ser inferiores a 60. Um número simples, com aritmética (`360/7`), continua a funcionar.

## Como os ângulos são mostrados

Escreva {{cmd:AUNITS}} (ou escolha {{ui:Formato de ângulo}} em {{ui:Propriedades}} › {{ui:Definições atuais}}) e escolha:

- **Graus decimais** (o predefinido): `44.6083°`.
- **Graus, minutos e segundos**: `44°36'30"`.
- **Rumos topográficos**: `N45°23'30"E`.

A precisão segue o que escreve para {{cmd:AUNITS}}: 0 mostra graus, 2 minutos, 4 segundos, e de 5 a 8 acrescentam casas decimais de segundo. O formato aparece em {{cmd:DIST}}, na barra de estado, na entrada dinâmica e nas dicas de rastreio, e nas caixas de ângulo de {{ui:Propriedades}} (uma caixa que edita aceita qualquer uma das formas acima). É um passo de anulação e é guardado em ficheiros DWG e DXF (`$AUNITS`, `$AUPREC`); o LISP lê-o e escreve-o como `AUNITS` e `AUPREC`.

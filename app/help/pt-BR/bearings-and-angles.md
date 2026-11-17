---
title: Digitar e mostrar rumos e ângulos em graus, minutos e segundos
summary: Digite uma direção como rumo de agrimensor, como N45°23'30"E, ou como graus-minutos-segundos onde quer que um ângulo seja pedido, e escolha como o desenho mostra os ângulos com AUNITS.
keywords: rumo, rumos, agrimensor, rumo de quadrante, N45E, graus minutos segundos, DMS, ângulo, direção, lote, lotes, locar, poligonal, AUNITS, ANGUNITS, formato de ângulo, polar, distância direta, DIST
from: af805567
---

Em qualquer lugar onde o CadCraft pede um **ângulo ou uma direção**, você pode digitar um **rumo de quadrante** ou um ângulo em **graus, minutos e segundos**, além de um número simples de graus.

## Rumos

Um rumo indica norte ou sul, um ângulo de até 90°, e depois leste ou oeste:

| Você digita | Direção |
|---|---|
| `N45°23'30"E` ou `N45d23'30"E` | 45°23'30" a partir do norte em direção ao leste |
| `S10-30-00W` ou `S 10 30 W` | 10°30' a partir do sul em direção ao oeste (traços ou espaços entre as partes) |
| `N45.5E` | 45.5° a partir do norte em direção ao leste |
| `N`, `E`, `S`, `W` | exatamente norte, leste, sul, oeste |

As letras podem estar em qualquer caixa (maiúsculas ou minúsculas). No português, `O` também significa oeste. `d` e `°` significam o mesmo; `'` são minutos e `"` são segundos.

Para locar uma linha de lote de 20 m de comprimento em N45°23'E, inicie {{cmd:LINE}} e digite o primeiro ponto, depois `@20<N45d23'E`. O mesmo funciona no prompt de ângulo de {{cmd:ROTATE}} e em todo outro prompt que pede um ângulo, e na caixa de ângulo de {{ui:Entrada dinâmica}}.

## Graus, minutos, segundos

`45°23'30"`, `45d23'30"`, `45d30'` ou `45d` é um ângulo a partir do eixo X, no sentido anti-horário. O `°` ou o `d` é necessário: `45-23-30` é lido como aritmética (45 − 23 − 30). Minutos e segundos devem ser menores que 60. Um número simples, com aritmética (`360/7`), continua funcionando.

## Como os ângulos são mostrados

Digite {{cmd:AUNITS}} (ou escolha {{ui:Formato de ângulo}} em {{ui:Propriedades}} › {{ui:Configurações atuais}}) e escolha:

- **Graus decimais** (o padrão): `44.6083°`.
- **Graus, minutos e segundos**: `44°36'30"`.
- **Rumos de agrimensor**: `N45°23'30"E`.

A precisão segue o que você digita para {{cmd:AUNITS}}: 0 mostra graus, 2 minutos, 4 segundos, e 5 a 8 acrescentam casas decimais de segundo. O formato aparece em {{cmd:DIST}}, na barra de status, na entrada dinâmica e nas dicas de rastreamento, e nas caixas de ângulo de {{ui:Propriedades}} (uma caixa que você edita aceita qualquer uma das formas acima). É um passo de desfazer e é salvo em arquivos DWG e DXF (`$AUNITS`, `$AUPREC`); o LISP lê e grava como `AUNITS` e `AUPREC`.

---
title: Restringir um desenho
summary: Mantenha linhas na horizontal, extremidades juntas e medidas fixas com restrições geométricas e dimensionais, e deixe o desenho acompanhar quando você mudar uma medida.
keywords: restrição, restrições, paramétrico, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, graus de liberdade, totalmente restringido
from: f8f21fa4
---

## O que você vai criar

Uma chapa cuja largura você muda em um só lugar: seus lados continuam em esquadro, um canto permanece no lugar e a altura continua sendo metade da largura.

As restrições funcionam em linhas, polilinhas, círculos, arcos e pontos na guia {{ui:Modelo}}. Cada uma que você adiciona é um passo de desfazer.

## Desenhe e restrinja o contorno

1. Digite `REC` e pressione {{key:Enter}}. Digite `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Digite `AUTOCONSTRAIN` e pressione {{key:Enter}}. Digite `ALL`, {{key:Enter}}, e depois {{key:Enter}} de novo.

   O histórico diz "4 restrições aplicadas". Pequenas caixas com **H** e **V** aparecem ao lado dos lados: são as barras de restrição.
3. Digite `GCFIX` e pressione {{key:Enter}}. Clique perto do canto inferior esquerdo. Aparece uma caixa com ⊕: esse canto permanece onde está.

`AUTOCONSTRAIN` adiciona restrições de coincidência onde as extremidades quase se encontram, e restrições de horizontal ou vertical onde as linhas estão quase niveladas ou aprumadas. Digite `S` no prompt para mudar o quão perto isso precisa estar (começando com 0,05 unidades de desenho e 1°).

## Adicione as medidas

1. Digite `DCHORIZONTAL` e pressione {{key:Enter}}.
2. Clique perto do canto inferior esquerdo e depois perto do canto inferior direito.
3. Clique abaixo do retângulo para a linha de cota.
4. O prompt mostra `Texto da cota <d1=100>`. Digite `width=120` e pressione {{key:Enter}}.

   O retângulo agora tem 120 de largura, e o rótulo mostra `width=120`.
5. Digite `DCVERTICAL` e pressione {{key:Enter}}, digite `O` e pressione {{key:Enter}}, depois clique no lado direito.
6. Clique à direita dele, digite `width/2` e pressione {{key:Enter}}.

   Tem 60 de altura. O rótulo mostra `fx: d1=width/2`: uma expressão controla a medida.

O histórico agora diz que o contorno está totalmente restringido. Para mudar o tamanho, altere `width` (veja [Use parâmetros e equações](topic:parameters)), ou dê duplo clique no rótulo `width=120`, digite um novo valor e escolha {{ui:Aplicar}}.

## Movendo objetos restringidos

Mover, girar, escalar, grips e o painel Propriedades mantêm todas as restrições: o que você moveu fica preso, e o resto acompanha. Quando as restrições não conseguem acompanhar, a edição não é feita e o histórico informa o motivo, por exemplo "Não feito: as restrições mantêm esse objeto onde está". Apagar um objeto remove as restrições dele junto.

## Espelhe e apare objetos restringidos

- {{cmd:MIRROR}} copia para as cópias as restrições entre os objetos que você espelha. Os lados (de que lado uma tangente toca, de que lado uma distância é medida) são recalculados para a cópia espelhada, e as cotas copiadas recebem nomes próprios, como em uma colagem. Com `Apagar objetos de origem` em `Y`, as restrições permanecem nos objetos espelhados. O histórico informa quantas vieram junto.
- {{cmd:TRIM}} mantém as restrições de uma linha ou de um arco no que sobra: uma restrição em uma extremidade vai para o pedaço que ainda tem essa extremidade; uma regra de direção ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Paralela}}, {{ui:Perpendicular}}) vale em todos os pedaços; e uma cota entre as duas extremidades externas continua medindo-as. Restrições que mantinham a parte cortada, ou um comprimento que o corte alterou ({{ui:Igual}}, a abertura de um arco), são removidas. Um círculo aparado mantém suas restrições de centro e raio. Polilinhas aparadas perdem as suas.

## As restrições

| Comando | Mantém |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | uma linha ou segmento na horizontal ou na vertical (`2P`: dois pontos na horizontal ou na vertical) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | duas linhas paralelas, em esquadro ou sobre uma mesma reta |
| {{cmd:GCCOINCIDENT}} | dois pontos juntos; `O`: um ponto sobre uma linha, círculo ou arco |
| {{cmd:GCTANGENT}} | uma linha e um círculo ou arco, ou dois deles, tangentes |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dois círculos ou arcos com o mesmo centro; dois comprimentos ou dois raios iguais |
| {{cmd:GCSYMMETRIC}} | dois pontos, linhas ou círculos espelhados em relação a uma linha |
| {{cmd:GCFIX}} | um ponto (clique perto dele) ou um objeto inteiro (`O`) onde está |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | uma distância |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | um raio, um diâmetro, um ângulo entre duas linhas ou o ângulo de um arco |

{{cmd:GEOMCONSTRAINT}} e {{cmd:DIMCONSTRAINT}} perguntam qual é; {{ui:Restringir}} e {{ui:Cota}} no grupo {{ui:Paramétrico}} executam esses comandos, e {{ui:Mais}} lista cada um. Onde você clica define a parte: um clique perto de uma extremidade, do meio ou de um centro escolhe esse ponto; um clique em uma polilinha escolhe o segmento sob ele. O primeiro objeto permanece e o segundo se move até encontrá-lo.

Uma restrição que conflita com outras, ou que não acrescenta nada porque as outras já a implicam, é recusada com uma mensagem, e nada se move.

## Ver, selecionar e remover

- Clique em uma caixa de uma barra de restrição (ou em um quadrado de coincidência, ou em um rótulo de cota) para selecionar essa restrição; o histórico a identifica. Pressione {{key:Delete}} para removê-la.
- {{cmd:DELCONSTRAINT}} remove todas as restrições dos objetos que você selecionar.
- {{cmd:CONSTRAINTBAR}}: `S` mostra todas as barras, `H` as oculta; selecione os objetos antes para mostrar ou ocultar as barras deles. {{ui:Mais}} tem {{ui:Mostrar barras de restrição}} e {{ui:Ocultar barras de restrição}}.
- {{cmd:DCDISPLAY}} mostra ou oculta as restrições dimensionais. Elas nunca são plotadas.
- {{cmd:DCCONVERT}} transforma cotas desenhadas em linhas, círculos e arcos em restrições dimensionais.

:::note
Se você já usou o desenho paramétrico do AutoCAD, os nomes dos comandos e os prompts são os mesmos. Restrições e parâmetros são salvos em arquivos DWG e DXF em uma forma que outros programas ignoram; veja [Arquivos](topic:files#constraints-in-files).
:::

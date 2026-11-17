---
title: Definir os limites do desenho
summary: O LIMITS define um retângulo para o desenho: a grelha preenche-o, ZOOM Todos mostra-o e, com os limites em ON, os pontos fora dele são recusados. São guardados em ficheiros DWG e DXF.
keywords: limites, limites do desenho, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grelha, fora dos limites, tamanho da folha, área de desenho, zoom todos, contorno
from: 9e97b30d
---

**Os limites do desenho** são um retângulo que indica o tamanho previsto do desenho: a área em que pretende desenhar, como uma folha de 420 × 297. Um desenho novo não tem nenhum, por isso a grelha e a área de desenho são ilimitadas, como antes.

## Defini-los

Escreva {{cmd:LIMITS}} e responda:

- `Especifique o canto inferior esquerdo ou [ON/OFF] <0,0>`: um ponto, ou {{key:Enter}} para manter o atual.
- `Especifique o canto superior direito <420,297>`: um ponto, ou {{key:Enter}} para manter o atual. Tem de estar acima e à direita do primeiro.

Ou escreva `ON` ou `OFF` na primeira pergunta para ativar ou desativar a verificação sem alterar o retângulo. Definir os cantos conta como um passo de anulação, e também cada ON e OFF.

## O que fazem

- **A grelha preenche os limites** e pára na sua borda. É uma imagem da área, por isso ative a {{ui:Grelha}} para a ver.
- **ZOOM Todos** ({{cmd:ZOOM}}, depois {{ui:Todos}}) mostra os limites e o desenho em conjunto; {{ui:Extensão}} continua a mostrar apenas o desenho.
- **Com os limites em ON**, um ponto que escreve ou clica fora deles é recusado com `**Fora dos limites` e a pergunta mantém-se. Aplica-se aos comandos que criam objetos: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, os comandos de cota e mais alguns. Os comandos que apenas movem, selecionam ou medem não são limitados, nem o são colar, arrastar um grip ou um objeto criado por uma rotina LISP: os limites são uma orientação para o desenho, não uma parede. Com os limites em OFF nada é recusado.
- Os objetos que já estão fora permanecem onde estão.

## Em ficheiros e LISP

São guardados em DWG e DXF como `$LIMMIN`, `$LIMMAX` e `$LIMCHECK`. Um ficheiro de outro programa que tenha apenas os limites predefinidos desse programa (0,0 a 12,9 ou 420,297, verificação desligada) abre-se sem nenhum, para que a grelha não fique espremida num retângulo pequeno; um ficheiro com limites próprios, ou com a verificação ligada, mantém-nos. Em LISP, `(getvar "LIMMIN")`, `LIMMAX` e `LIMCHECK` leem-nos e `setvar` escreve-os, como um único passo de anulação.

Os limites pertencem ao modelo. Uma folha (layout) tem o seu próprio formato de papel.

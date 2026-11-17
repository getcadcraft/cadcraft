---
title: Definir os limites do desenho
summary: LIMITS define um retângulo para o desenho: a grade o preenche, ZOOM Todos o mostra, e com os limites ligados, pontos fora dele são recusados. Eles são salvos em arquivos DWG e DXF.
keywords: limites, limites do desenho, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grade, fora dos limites, tamanho da folha, área de desenho, zoom todos, limite
from: 9e97b30d
---

Os **limites do desenho** são um retângulo que indica o tamanho que o desenho deve ter: a área em que você planeja desenhar, como uma folha de 420 × 297. Um desenho novo não tem limites, então a grade e a área de desenho são ilimitadas, como antes.

## Defini-los

Digite {{cmd:LIMITS}} e responda:

- `Especifique o canto inferior esquerdo ou [ON/OFF] <0,0>`: um ponto, ou {{key:Enter}} para manter o atual.
- `Especifique o canto superior direito <420,297>`: um ponto, ou {{key:Enter}} para manter o atual. Ele deve estar acima e à direita do primeiro.

Ou digite `ON` ou `OFF` na primeira pergunta para ligar ou desligar a verificação sem alterar o retângulo. Definir os cantos é uma única etapa de desfazer, e cada ON e OFF também.

## O que eles fazem

- **A grade preenche os limites** e para na borda deles. Ela é uma representação da área, então ative {{ui:Grid}} para vê-la.
- **ZOOM Todos** ({{cmd:ZOOM}}, depois {{ui:All}}) mostra os limites e o desenho juntos; {{ui:Extents}} continua mostrando apenas o desenho.
- **Com os limites ON**, um ponto digitado ou clicado fora deles é recusado com `**Fora dos limites` e o prompt permanece. Isso vale para os comandos que criam objetos: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, os comandos de cota e mais alguns. Comandos que apenas movem, selecionam ou medem não são limitados, e também não são colagens, arrastos de grip nem um objeto criado por uma rotina LISP: os limites são uma orientação para desenhar, não uma parede. Com os limites OFF, nada é recusado.
- Objetos que já estão fora permanecem onde estão.

## Em arquivos e LISP

Eles são salvos em DWG e DXF como `$LIMMIN`, `$LIMMAX` e `$LIMCHECK`. Um arquivo de outro programa que tenha apenas os limites padrão daquele programa (0,0 a 12,9 ou 420,297, verificação desligada) abre sem nenhum limite, para que a grade não fique espremida em um retângulo pequeno; um arquivo com limites próprios, ou com a verificação ligada, mantém os seus. Em LISP, `(getvar "LIMMIN")`, `LIMMAX` e `LIMCHECK` leem esses valores, e `setvar` os grava, como uma única etapa de desfazer.

Os limites pertencem ao modelo. Uma folha (um layout) tem seu próprio tamanho de papel.

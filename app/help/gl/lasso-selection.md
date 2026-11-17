---
title: Selección con lazo
summary: Prema e arrastre un contorno a man alzada arredor dos obxectos para seleccionalos, como xanela, cruzamento ou valado; cambie con Space mentres arrastra.
keywords: lazo, lassomode, arrastrar, man alzada, seleccionar, selección, xanela, cruzamento, valado, space, polígono, tacto, lapis, rectángulo
from: 9ec6154d
---

## O que vai aprender

Como seleccionar obxectos debuxando un contorno arredor deles e como recuperar o rectángulo cando o queira.

## Debuxar un lazo

1. Debuxe algunhas liñas e círculos xuntos.
2. Sen ningún comando en execución, prema o botón do rato nun espazo baleiro e arrastre arredor de algúns deles, movendo **á dereita** primeiro.
3. Solte.

Só se seleccionan os obxectos que quedan completamente dentro do contorno. O contorno debúxase continuo mentres arrastra: este é un lazo de xanela.

## Xanela, cruzamento e valado

Os obxectos que obtén dependen do primeiro movemento do arrastre e de {{key:Space}}:

| Arrastra | Lazo | Selecciona |
|---|---|---|
| Primeiro á dereita | Xanela (contorno continuo) | Só os obxectos **completamente dentro** |
| Primeiro á esquerda | Cruzamento (de trazos, verde) | Os obxectos dentro **e** os que toca o contorno |
| Prema {{key:Space}} mentres arrastra | Xanela, despois cruzamento, despois valado | Valado (un camiño de trazos, sen pechar): só os obxectos que cruza o camiño |

1. Prema nun espazo baleiro e arrastre arredor de algúns obxectos, movendo primeiro **á esquerda**. Seleccionanse tamén todos os que toca o contorno.
2. Prema {{key:Esc}}.
3. Prema e arrastre de novo; mentres mantén o botón premido, prema {{key:Space}} unha vez. O contorno pasa a ser un cruzamento; prema {{key:Space}} outra vez para un valado.

Con {{key:Shift}} ao soltar, os obxectos sáen da selección (con "Clicar en obxectos: Engadir" en Configuración).

## Dentro dun comando

O lazo funciona en todos os puntos onde CadCraft pide `Seleccione obxectos`: debúxeo e despois prema {{key:Enter}} para rematar. {{cmd:STRETCH}} toma un lazo de cruzamento como xanela, así que pode estirar dun só golpe unha parte en forma de L dun debuxo.

{{cmd:TRIM}} e {{cmd:EXTEND}} usan o arrastre de xeito distinto: alí recortan (ou alongan) cada tramo que cruza o camiño. Consulte [Recortar e alongar](topic:trim-and-extend).

## O rectángulo

Un clic nun espazo baleiro, un movemento e un segundo clic deseñan sempre a xanela rectangular (de esquerda a dereita) ou o cruzamento (de dereita a esquerda).

Para que un arrastre volva debuxar o rectángulo, abra {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to select}} e escolla {{ui:Rectangle}}, ou escriba {{cmd:LASSOMODE}} e logo `0`. Escriba {{cmd:LASSOMODE}} e logo `1` para o lazo. A opción consérvase neste navegador.

:::touch
Arrastre cun dedo ou cun lapis do mesmo xeito. Un toque seguirá escollendo un único obxecto.
:::

## Erros frecuentes

- **Non se seleccionou nada.** O lazo era unha xanela e non había nada completamente dentro. Comece o arrastre á esquerda, ou prema {{key:Space}} mentres arrastra.
- **O arrastre moveu unha pega.** Premer na pega dun obxecto seleccionado move a pega. Comece o lazo nun espazo baleiro.
- **Space rematou o comando.** {{key:Space}} cambia o lazo só mentres o botón está premido; noutro caso é {{key:Enter}}.

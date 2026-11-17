---
title: Debuxo sen vista
summary: Con Acceso activado, CadCraft di en voz alta cada comando e resultado a través do seu lector de pantalla, describe o debuxo e o que hai preto do cursor, permite mover o cursor co teclado, reproduce un son por cada enganche e cada pinza, e recibe comandos por voz onde o seu navegador o poida facer no seu computador.
keywords: accesibilidade, lector de pantalla, cego, baixa visión, NVDA, VoiceOver, JAWS, Orca, cursor do teclado, comandos por voz, fala, sons, sons de enganche, describir debuxo, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Acceso** permítelle debuxar sen ver a pantalla. Está desactivado ata que o active, para que ninguén o active por erro.

## Activalo

Abra **Configuración** (a engrenaxe, ou Ctrl+,), busque **Debuxo sen vista** e escolla **Activado**. Ou escriba `ACCESS` na liña de comandos e responda `On`. Recórdase neste computador.

Con Acceso activado:

- **Dise en voz alta todo o que diga a liña de comandos** a través do lector de pantalla: o que escribiu, a indicación que pide, a resposta e cada erro. CadCraft usa as súas propias rexións en directo, corteses e urxentes, así que un lector de pantalla que lea rexións en directo non precisa configurarse. Os erros e os cancelamentos interrompen; o resto espera o seu turno.
- **Pódese chegar á área de debuxo.** Prema Tab ata oír «Debuxo», ou prema Shift+Tab desde a liña de comandos. É unha rexión que pasa as teclas a CadCraft.

## Teclas no debuxo

| Tecla | Que fai |
|---|---|
| Teclas de flecha | Desloca o cursor do teclado. Un paso é aproximadamente a centésima parte do que mostra a pantalla, redondeado a 1, 2 ou 5. Shift desprázao dez veces máis, Ctrl a décima parte. |
| Enter | Escolle o punto baixo o cursor, exactamente como faría un clic. |
| Space | Igual que Enter na liña de comandos: remata LINE, toma o valor predeterminado. |
| Tab, Shift+Tab | Salta ao seguinte ou ao anterior punto de enganche preto do cursor, o máis próximo primeiro. |
| G | Percorre as pinzas dos obxectos seleccionados. |
| D | Describe o debuxo: cantos obxectos, de que tipo, que tamaño teñen, que está seleccionado. |
| W | Di onde está o cursor e a que distancia está do último punto. |
| N | Di o que hai preto do cursor, o máis próximo primeiro, coa distancia e o lado. |
| S | Describe os obxectos seleccionados. |
| R | Repite a última cousa dita. |
| V | Activa ou desactiva a voz. |
| / | Vai á liña de comandos. |
| ? | Lista estas teclas. |

Ao mover coas teclas indica onde quedou. Cando un comando espera un punto, tamén di a que distancia e en que dirección está do último punto, por exemplo «2400 desde o último punto, á dereita, a 0 graos».

## Comandos

- {{cmd:ACCESS}} activa ou desactiva Acceso, os sons de enganche e a voz, e di o estado.
- {{cmd:DESCRIBE}} di o que contén o debuxo.
- {{cmd:WHEREAMI}} di onde está o cursor.
- {{cmd:NEARBY}} di o que está preto do cursor.
- {{cmd:SAYSEL}} di o que está seleccionado, unha frase por obxecto.
- {{cmd:VOICE}} activa ou desactiva os comandos falados.

Estes cinco len o debuxo e mostran unha resposta; non cambian nada.

## Sons para enganches e pinzas

Active **Sons de enganche e pinza** en Configuración. Cada tipo de enganche ten o seu propio ton e son, así pode distinguir un extremo dun punto medio, un centro, unha intersección e o resto, e unha pinza ten un dobre tic. O son despraza-se á esquerda ou á dereita para seguir o cursor pola pantalla. Os sons xéranse no seu computador; non se descarga nada.

## Comandos por voz

Active **Comandos por voz** en Configuración. Diga o nome dun comando («line», «circle», «move»), e despois diga os números como os leria: «punto trescentos coma catrocentos», «distancia mil douscentos», «ángulo corenta e cinco». «Enter», «cancel», «undo» e «redo» fan o que din. O que se oíu repítese en voz alta, e unha frase que non é un comando infórmase en lugar de adiviñarse.

**Onde se recoñece a fala.** CadCraft non ten un servizo de fala propio e non envía audio a ningures. Pídelle ao navegador que recoñeza a fala neste computador. Se o navegador pode, a opción é **Neste computador** e ningún audio sae del. Se non pode, a voz permanece desactivada a non ser que escolla **Servizo en liña do navegador**, que permite ao navegador enviar audio ao servizo de fala do seu fabricante. Configuración indica cal se aplica antes de decidir.

## Que non fai aínda

- Só CadCraft ten Acceso. As outras sete aplicacións seguirán, coas mesmas teclas e sons.
- O texto dun debuxo (unha nota, o nome dun bloque) léese tal como está escrito; nunca se toma como unha instrución.
- Probouse con comprobacións sintéticas e coas probas do navegador; as comprobacións manuais con NVDA, VoiceOver e unha persoa cega ou con baixa visión aínda están por chegar. Se o proba, díganos que falta.

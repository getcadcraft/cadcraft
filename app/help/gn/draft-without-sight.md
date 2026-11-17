---
title: Dibujar sin ver
summary: Active Acceso y CadCraft dice cada comando y resultado mediante su lector de pantalla, describe el dibujo y lo que está cerca del cursor, le permite mover el cursor con el teclado, reproduce un sonido por cada ajuste y agarre, y acepta comandos por voz donde su navegador puede hacerlo en su computadora.
keywords: accesibilidad, lector de pantalla, ciego, baja visión, NVDA, VoiceOver, JAWS, Orca, cursor de teclado, comandos por voz, voz, habla, sonidos, sonidos de ajuste, describir dibujo, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Access** le permite dibujar sin ver la pantalla. Está desactivado hasta que lo active, para que nadie lo tenga por accidente.

## Activarlo

Abra **Configuración** (el engranaje, o Ctrl+,), busque **Dibujar sin ver** y elija **Activado**. O escriba `ACCESS` en la línea de comandos y responda `On`. Queda recordado en esta computadora.

Con Access activado:

- **Todo lo que dice la línea de comandos se lee en voz alta** mediante su lector de pantalla: lo que escribió, la indicación que pide, la respuesta y cada error. CadCraft usa sus propias regiones en vivo, corteses y urgentes, así que un lector de pantalla que lee regiones en vivo no necesita configuración. Los errores y las cancelaciones interrumpen; lo demás espera su turno.
- **Se puede llegar al área de dibujo.** Presione Tab hasta oír "Dibujo", o presione Shift+Tab desde la línea de comandos. Es una región que pasa las teclas a CadCraft.

## Teclas en el dibujo

| Tecla | Qué hace |
|---|---|
| Teclas de flecha | Mueven el cursor de teclado. Un paso es aproximadamente una centésima de lo que muestra la pantalla, redondeado a 1, 2 o 5. Shift lo mueve diez veces más, Ctrl una décima parte. |
| Enter | Toma el punto bajo el cursor, exactamente como lo haría un clic. |
| Espacio | Presiona Enter en la línea de comandos: termina LINE, toma el valor por defecto. |
| Tab, Shift+Tab | Saltan al siguiente o anterior punto de ajuste cerca del cursor, el más cercano primero. |
| G | Recorre los agarres de los objetos seleccionados. |
| D | Describe el dibujo: cuántos objetos, de qué tipo, qué tamaño, qué está seleccionado. |
| W | Dice dónde está el cursor y a qué distancia está del último punto. |
| N | Dice qué hay cerca del cursor, el más cercano primero, con la distancia y el lado. |
| S | Describe los objetos seleccionados. |
| R | Repite lo último que se dijo. |
| V | Voz activada o desactivada. |
| / | Va a la línea de comandos. |
| ? | Lista estas teclas. |

Al mover con las teclas se dice dónde quedó. Cuando un comando espera un punto, también dice a qué distancia y en qué dirección está del último punto, por ejemplo "2400 desde el último punto, a la derecha, a 0 grados".

## Comandos

- {{cmd:ACCESS}} activa o desactiva Access, los sonidos de ajuste y la voz, y dice el estado.
- {{cmd:DESCRIBE}} dice qué contiene el dibujo.
- {{cmd:WHEREAMI}} dice dónde está el cursor.
- {{cmd:NEARBY}} dice qué hay cerca del cursor.
- {{cmd:SAYSEL}} dice qué está seleccionado, una oración por objeto.
- {{cmd:VOICE}} activa o desactiva los comandos hablados.

Estos cinco leen el dibujo e imprimen una respuesta; no cambian nada.

## Sonidos para ajustes y agarres

Active **Sonidos de ajuste y agarre** en Configuración. Cada tipo de ajuste tiene su propio tono y sonido, así puede distinguir un extremo de un punto medio, un centro, una intersección y los demás, y un agarre tiene un doble toque. El sonido se desplaza a la izquierda o a la derecha para seguir el cursor en la pantalla. Los sonidos se generan en su computadora; no se descarga nada.

## Comandos por voz

Active **Comandos por voz** en Configuración. Diga el nombre de un comando ("line", "circle", "move"), luego diga los números como los leería: "punto trescientos coma cuatrocientos", "distancia mil doscientos", "ángulo cuarenta y cinco". "Enter", "cancel", "undo" y "redo" hacen lo que dicen. Lo que se oyó se repite en voz alta, y una frase que no es un comando se informa, no se adivina.

**Dónde se reconoce la voz.** CadCraft no tiene un servicio de voz propio y no envía audio a ningún lado. Pide a su navegador que reconozca la voz en esta computadora. Si su navegador puede, la opción es **En esta computadora** y ningún audio sale de ella. Si no puede, la voz queda desactivada salvo que elija **Servicio en línea del navegador**, que permite al navegador enviar audio al servicio de voz de su fabricante. Configuración indica cuál aplica antes de que decida.

## Lo que todavía no hace

- Solo CadCraft tiene Access. Las otras siete aplicaciones lo seguirán, con las mismas teclas y sonidos.
- El texto de un dibujo (una nota, el nombre de un bloque) se lee tal como está escrito; nunca se toma como una instrucción.
- Se ha probado con verificaciones sintéticas y con las pruebas del navegador; las verificaciones manuales con NVDA, VoiceOver y una persona ciega o con baja visión están pendientes. Si lo prueba, por favor díganos qué falta.

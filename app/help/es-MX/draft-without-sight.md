---
title: Dibujar sin ver
summary: Active Acceso y CadCraft dice en voz alta cada comando y resultado a través de su lector de pantalla, describe el dibujo y lo que está cerca del cursor, le permite mover el cursor con el teclado, reproduce un sonido por cada referencia a objetos y pinzamiento, y acepta comandos por voz cuando su navegador puede hacerlo en su computadora.
keywords: accesibilidad, lector de pantalla, discapacidad visual, baja visión, NVDA, VoiceOver, JAWS, Orca, cursor del teclado, comandos por voz, voz, sonidos, sonidos de referencia, describir dibujo, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Acceso** le permite dibujar sin ver la pantalla. Está desactivado hasta que usted lo active, para que nadie lo active por accidente.

## Activarlo

Abra **Configuración** (el engrane, o Ctrl+,), busque **Dibujo sin ver** y elija **Activado**. O escriba `ACCESS` en la línea de comandos y responda `On`. Se recuerda en esta computadora.

Con Acceso activado:

- **Todo lo que dice la línea de comandos se lee en voz alta** a través de su lector de pantalla: lo que escribió, la indicación que pide, la respuesta y cada error. CadCraft usa sus propias regiones en vivo, corteses y urgentes, así que un lector de pantalla que lee regiones en vivo no necesita configuración. Los errores y las cancelaciones interrumpen; lo demás espera su turno.
- **Se puede llegar al área de dibujo.** Pulse Tab hasta que oiga "Dibujo", o pulse Shift+Tab desde la línea de comandos. Es una región que pasa las teclas a CadCraft.

## Teclas en el dibujo

| Tecla | Qué hace |
|---|---|
| Teclas de flecha | Mueven el cursor del teclado. Un paso es aproximadamente una centésima de lo que muestra la pantalla, redondeado a 1, 2 o 5. Shift lo mueve diez veces más lejos, Ctrl una décima. |
| Enter | Designa el punto bajo el cursor, igual que lo haría un clic. |
| Espacio | Pulse Enter en la línea de comandos: termina LINE, toma el valor predeterminado. |
| Tab, Shift+Tab | Saltan al siguiente o anterior punto de referencia cerca del cursor, primero el más cercano. |
| G | Recorre los pinzamientos de los objetos seleccionados. |
| D | Describe el dibujo: cuántos objetos, de qué tipo, qué tamaño, qué está seleccionado. |
| W | Dice dónde está el cursor y qué distancia hay desde el último punto. |
| N | Dice qué hay cerca del cursor, primero lo más cercano, con la distancia y el lado. |
| S | Describe los objetos seleccionados. |
| R | Repite lo último que se dijo. |
| V | Activa o desactiva la voz. |
| / | Va a la línea de comandos. |
| ? | Lista estas teclas. |

Al mover el cursor con las teclas se dice dónde quedó. Cuando un comando espera un punto, también dice a qué distancia está del último punto y en qué dirección, por ejemplo "2400 desde el último punto, a la derecha, a 0 grados".

## Comandos

- {{cmd:ACCESS}} activa o desactiva Acceso, los sonidos de referencias y la voz, y dice el estado.
- {{cmd:DESCRIBE}} dice lo que contiene el dibujo.
- {{cmd:WHEREAMI}} dice dónde está el cursor.
- {{cmd:NEARBY}} dice qué hay cerca del cursor.
- {{cmd:SAYSEL}} dice lo que está seleccionado, una oración por objeto.
- {{cmd:VOICE}} activa o desactiva los comandos por voz.

Estos cinco leen el dibujo y muestran una respuesta; no cambian nada.

## Sonidos para referencias y pinzamientos

Active **Sonidos de referencias a objetos y pinzamientos** en Configuración. Cada tipo de referencia tiene su propio tono y sonido, así puede distinguir un punto final de un punto medio, un centro, una intersección y los demás, y un pinzamiento tiene un doble clic. El sonido se desplaza a la izquierda o a la derecha para seguir el cursor en la pantalla. Los sonidos se generan en su computadora; no se descarga nada.

## Comandos por voz

Active **Comandos por voz** en Configuración. Diga el nombre de un comando ("línea", "círculo", "desplazar") y después diga los números como se leen: "punto tres cientos, coma, cuatro cientos", "distancia mil doscientos", "ángulo cuarenta y cinco". "Enter", "cancelar", "deshacer" y "rehacer" hacen lo que dicen. Lo que se escuchó se repite en voz alta, y una frase que no es un comando se informa, no se adivina.

**Dónde se reconoce la voz.** CadCraft no tiene un servicio de voz propio y no envía audio a ningún lugar. Pide a su navegador que reconozca la voz en esta computadora. Si su navegador puede hacerlo, la opción es **En esta computadora** y ningún audio sale de ella. Si no puede, la voz queda desactivada, a menos que elija **Servicio en línea del navegador**, que permite al navegador enviar audio al servicio de voz de su fabricante. Configuración indica cuál aplica antes de que usted decida.

## Lo que todavía no hace

- Solo CadCraft tiene Acceso. Las otras siete aplicaciones lo seguirán, con las mismas teclas y sonidos.
- El texto de un dibujo (una nota, el nombre de un bloque) se lee tal como está escrito; nunca se toma como instrucción.
- Se ha probado con verificaciones sintéticas y con las pruebas del navegador. Las verificaciones manuales con NVDA, VoiceOver y con una persona ciega o con baja visión todavía están pendientes. Si lo prueba, díganos qué falta.

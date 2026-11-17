---
title: Dibujar sin ver
summary: Active Acceso y CadCraft comunica por el lector de pantalla cada comando y cada resultado, describe el dibujo y lo que hay cerca del cursor, le permite mover el cursor con el teclado, reproduce un sonido por cada ajuste y cada agarre, y acepta comandos por voz cuando su navegador puede hacerlo en su equipo.
keywords: accesibilidad, lector de pantalla, ciego, baja visión, NVDA, VoiceOver, JAWS, Orca, cursor del teclado, comandos por voz, voz, sonidos, sonidos de ajuste, describir dibujo, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Acceso** le permite dibujar sin ver la pantalla. Está desactivado hasta que lo active, para que nadie lo tenga por accidente.

## Activarlo

Abra **Configuración** (el engranaje, o Ctrl+,), busque **Dibujo sin ver** y elija **Activado**. O escriba `ACCESS` en la línea de comandos y responda `On`. Se recuerda en este equipo.

Con Acceso activado:

- **Todo lo que dice la línea de comandos se lee en voz alta** mediante su lector de pantalla: lo que ha escrito, el aviso que pide, la respuesta y cada error. CadCraft usa sus propias regiones en vivo, corteses y urgentes, así que un lector de pantalla que lee las regiones en vivo no necesita configuración. Los errores y las cancelaciones interrumpen; lo demás espera su turno.
- **Se puede llegar al área de dibujo.** Pulse Tab hasta oír «Dibujo», o pulse Shift+Tab desde la línea de comandos. Es una región que pasa las teclas a CadCraft.

## Teclas en el dibujo

| Tecla | Qué hace |
|---|---|
| Teclas de flecha | Mueven el cursor del teclado. Un paso equivale a aproximadamente una centésima de lo que muestra la pantalla, redondeado a 1, 2 o 5. Shift lo mueve diez veces más, Ctrl una décima parte. |
| Intro | Designa el punto bajo el cursor, exactamente como lo haría un clic. |
| Espacio | Pulsa Intro en la línea de comandos: termina LINE, toma el valor predeterminado. |
| Tab, Shift+Tab | Saltan al siguiente o anterior punto de ajuste cercano al cursor, empezando por el más próximo. |
| G | Recorre los agarres de los objetos seleccionados. |
| D | Describe el dibujo: cuántos objetos hay, de qué tipo, qué tamaño tienen y qué está seleccionado. |
| W | Indica dónde está el cursor y a qué distancia está del último punto. |
| N | Indica qué hay cerca del cursor, empezando por lo más próximo, con la distancia y el lado. |
| S | Describe los objetos seleccionados. |
| R | Repite lo último que se dijo. |
| V | Activa o desactiva la voz. |
| / | Va a la línea de comandos. |
| ? | Enumera estas teclas. |

Al moverse con las teclas se indica dónde ha llegado. Cuando un comando espera un punto, también indica a qué distancia y en qué dirección está del último punto, por ejemplo «2400 desde el último punto, hacia la derecha, a 0 grados».

## Comandos

- {{cmd:ACCESS}} activa o desactiva Acceso, los sonidos de ajuste y la voz, e indica el estado.
- {{cmd:DESCRIBE}} indica lo que contiene el dibujo.
- {{cmd:WHEREAMI}} indica dónde está el cursor.
- {{cmd:NEARBY}} indica lo que está cerca del cursor.
- {{cmd:SAYSEL}} indica lo que está seleccionado, una frase por objeto.
- {{cmd:VOICE}} activa o desactiva los comandos hablados.

Estos cinco leen el dibujo y muestran una respuesta; no cambian nada.

## Sonidos de ajustes y agarres

Active **Sonidos de ajuste y agarre** en Configuración. Cada tipo de ajuste tiene su propio tono y sonido, así puede distinguir un extremo de un punto medio, un centro, una intersección y el resto, y un agarre tiene un doble toque. El sonido se desplaza a la izquierda o a la derecha para seguir el cursor por la pantalla. Los sonidos se generan en su equipo; no se descarga nada.

## Comandos por voz

Active **Comandos por voz** en Configuración. Diga el nombre de un comando («línea», «círculo», «mover») y después diga los números tal como los leería: «punto trescientos coma cuatrocientos», «distancia mil doscientos», «ángulo cuarenta y cinco». «Intro», «cancelar», «deshacer» y «rehacer» hacen lo que dicen. Lo que se ha oído se repite en voz alta, y una frase que no es un comando se indica, no se adivina.

**Dónde se reconoce la voz.** CadCraft no tiene servicio de voz propio y no envía audio a ninguna parte. Pide a su navegador que reconozca la voz en este equipo. Si su navegador puede hacerlo, la opción es **En este equipo** y ningún audio sale de él. Si no puede, la voz permanece desactivada a menos que elija **Servicio en línea del navegador**, que permite al navegador enviar el audio al servicio de voz de su fabricante. Configuración indica cuál se aplica antes de que decida.

## Lo que todavía no hace

- Solo CadCraft tiene Acceso. Las otras siete aplicaciones lo seguirán, con las mismas teclas y sonidos.
- El texto de un dibujo (una nota, el nombre de un bloque) se lee tal como está escrito; nunca se toma como una instrucción.
- Se ha probado con comprobaciones sintéticas y las pruebas del navegador; las comprobaciones manuales con NVDA, VoiceOver y un probador ciego o con baja visión todavía están pendientes. Si lo prueba, díganos qué falta.

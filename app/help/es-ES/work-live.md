---
title: Trabajar juntos en un mismo dibujo con Live TeamWork
summary: Qué cambia en CadCraft mientras está en una sesión de Live TeamWork desde CadCraft Studio: cursores y selecciones de otras personas, objetos que alguien edita, los bloqueos del anfitrión, su propio deshacer y la unión desde un navegador en la misma red.
keywords: en vivo, live teamwork, studio live, juntos, colaborar, coedición, sesión, compartir en vivo, unirse, cursor, retenido, editando, bloqueo, livelock, liveunlock, livehold, mantener capa, mantener área, candado, deshacer, anfitrión, asistente, mismo archivo, muchas personas, lento, límite, quién cambió, ediciones recientes, registro de ediciones
from: 0497d2a3
---

## Lo que aprenderá

Lo que ve y lo que pasa con sus ediciones mientras varias personas trabajan en un mismo dibujo al mismo tiempo. CadCraft Studio inicia y se une a la sesión de Live TeamWork (Compartir en directo, Unirse); esta página trata sobre el propio dibujo.

## Todos dibujan a la vez

Dibuje y edite como de costumbre. Sus propias ediciones se ven de inmediato, incluso antes de que los demás las tengan, y las de los demás aparecen en su pantalla un momento después de hacerlas. Todos los comandos funcionan: dibujar, modificar, capas, bloques, hojas, cotas, restricciones.

Dos personas pueden cambiar el mismo objeto. Si cambian cosas distintas, como el color y un extremo de una línea, se conservan ambos cambios. Si cambian lo mismo, gana el cambio posterior.

Lo que sigue siendo solo suyo: la capa actual, el color y la altura de texto de los objetos nuevos, sus ajustes de cota, su vista, la vista dividida y su SCP. El dibujo es compartido; la forma de verlo no.

## Otras personas en su dibujo

- **Cursores:** el puntero de cada persona se muestra con su nombre, en su propio color, y el comando que está ejecutando. Ve los cursores de quienes trabajan cerca de lo que hay en su pantalla.
- **Selecciones:** lo que alguien ha seleccionado se resalta con su color.
- **Siendo editado:** un objeto que alguien ha seleccionado lleva una etiqueta como «Ana lo está editando». Puede seguir cambiando su color o moverlo, pero no puede borrarlo, descomponerlo ni volver a escribirlo hasta que la otra persona lo suelte. Al seleccionarlo se le dice quién lo tiene.
- **Quién lo cambió por último:** seleccione un objeto que otra persona cambió en esta sesión y la línea de comandos indica quién lo cambió y qué cambio fue («Ben lo cambió por último: CIRCLE.»). El panel Live de Studio enumera cada edición reciente en {{ui:Ediciones recientes}}. Nada de esto se guarda en el dibujo: dura lo que dure la sesión.

## Mantenga una capa o una zona mientras trabaja allí

En un dibujo grande con varias personas, indique qué parte es suya por ahora:

1. Escriba `LIVEHOLD` y pulse {{key:Enter}}.
2. Elija `L` y escriba un nombre de capa (con {{key:Enter}} se mantiene la capa actual), o elija `A` y señale dos esquinas de una zona.
3. Las ediciones de otras personas en esa capa, o a objetos de esa zona, se deshacen, y se les avisa de que usted trabaja allí. Ve su zona como un marco discontinuo; los demás la ven en su color con su nombre, y las capas que mantiene aparecen listadas arriba a la izquierda de su dibujo.
4. `LIVEHOLD`, luego `R`, libera todo lo que mantiene. Salir de la sesión también lo libera.

Cualquiera en la sesión puede mantener, incluido el anfitrión; los bloqueos del anfitrión siguen aplicándose por encima. Una retención nunca se guarda en el archivo.

## Cuando se deshace una edición

La copia del dibujo del anfitrión comprueba cada edición. Algunas no pueden entrar, y CadCraft las deshace en su pantalla y le dice por qué en la línea de comandos, por ejemplo:

- alguien borró el objeto, o la capa o el bloque que necesita, justo antes que usted;
- alguien está editando ese objeto, o mantiene su capa o la zona en la que está;
- el anfitrión lo bloqueó;
- el bloque que coloca se purgó, o una capa que borra todavía tiene objetos.

## Deshacer deshace su propio trabajo

{{key:Mod+Z}} y {{ui:Deshacer}} deshacen su último comando, completo, y dejan intacto el trabajo de los demás. Si alguien cambió lo mismo después, no se deshace nada y la línea de comandos indica quién lo cambió. {{key:Mod+Y}} rehace.

## Bloqueos (el anfitrión)

El anfitrión puede proteger objetos o una capa completa para que nadie los cambie, incluido el propio anfitrión, hasta que se desbloqueen:

1. Seleccione los objetos, luego escriba `LIVELOCK` y pulse {{key:Enter}}. O escriba `LIVELOCK` sin nada seleccionado y elija `L` para bloquear una capa por su nombre: los objetos que se añadan después a esa capa también quedan bloqueados.
2. Los objetos bloqueados se dibujan discontinuos, con una etiqueta «Bloqueado por el anfitrión» en la pantalla de todos.
3. `LIVEUNLOCK` los desbloquea del mismo modo.

Los bloqueos pertenecen a la sesión: terminan cuando esta termina y nunca se guardan en el archivo.

## Unirse con el mismo archivo

Si abrió el mismo archivo que abrió el anfitrión (desde una carpeta compartida o desde la misma copia), únase desde su propia ventana de CadCraft en Studio: abra el panel {{ui:Live}} y use {{ui:Unir aquí}} con el código del anfitrión. Solo viajan los cambios hechos desde que el anfitrión lo abrió, así que un dibujo grande está listo al instante. Si su archivo es otro, el dibujo del anfitrión sustituye al suyo en su pantalla (su archivo se queda como está). Esto solo funciona mientras su dibujo no haya cambiado desde que lo abrió.

## Asistentes en una sesión en vivo

Un asistente conectado a su ventana de CadCraft (vea la ayuda sobre cómo trabajar con asistentes de IA) se une a la sesión como participante propio, que todos ven como «Asistente (vía <su nombre>)». El anfitrión lo admite, como a una persona; el asistente del propio anfitrión se une de inmediato. Sus cambios tienen su propio deshacer: su {{key:Mod+Z}} deshace su trabajo, y el deshacer del asistente solo deshace lo suyo. Sale de la sesión cuando lo desconecta o cuando usted sale, y solo puede trabajar en la sesión mientras usted pueda editar.

## Unirse desde un navegador

Un compañero sin Studio puede escanear con un teléfono, una tableta o un equipo en la misma red la imagen con el código del anfitrión. CadCraft se abre en el navegador, le pide su nombre en la línea de comandos, y se llena con el dibujo del anfitrión cuando el anfitrión le deja entrar. Un enlace de invitación permite que alguien se una desde otra red: el anfitrión necesita un puesto de Team Cloud Plan para la aplicación, los demás se unen gratis, y el enlace solo funciona mientras la sesión del anfitrión está abierta.

## Muchas personas en un dibujo

Cada edición llega a todos en la sesión, así que cuantas más personas haya, más tarda cada cambio en llegar a cada una, y los equipos portátiles y las conexiones más lentas se retrasan primero. El tamaño habitual de una sesión es de 20 personas; el anfitrión puede permitir más para una sesión concreta (vea la ayuda sobre trabajar juntos en vivo). Si el dibujo va lento con muchas personas, ayuda tener menos personas, menos editando al mismo tiempo, o una conexión mejor.

## Cuando la sesión termina

Solo el anfitrión guarda el dibujo. Cuando el anfitrión termina la sesión, los demás conservan una copia sin guardar: guárdela si quiere conservarla.

:::note
Lo que se deshizo se dibuja encima de los objetos de alrededor en su propia pantalla hasta que vuelva a abrir el dibujo. Los rellenos y objetos rellenos que se solapan pueden verse distintos de la copia del anfitrión; el dibujo en sí es el mismo.
:::

---
title: Trabajar en un dibujo en conjunto con Live TeamWork
summary: Qué cambia en CadCraft mientras está en una sesión de Live TeamWork desde CadCraft Studio: cursores y selecciones de otras personas, objetos que alguien está editando, los bloqueos del anfitrión, su propio deshacer, y unirse desde un navegador en la misma red.
keywords: live, live teamwork, studio live, juntos, colaborar, coedición, sesión, compartir en vivo, unirse, cursor, retenido, editando, bloqueo, livelock, liveunlock, livehold, mantener capa, mantener área, candado, deshacer, anfitrión, asistente, mismo archivo, muchas personas, lento, límite, quién cambió, ediciones recientes, registro de ediciones
from: 0497d2a3
---

## Qué aprenderá

Lo que ve y lo que pasa con sus ediciones mientras varias personas trabajan en un mismo dibujo al mismo tiempo. CadCraft Studio inicia y se une a la sesión de Live TeamWork (Compartir en vivo, Unirse); esta página trata sobre el dibujo mismo.

## Todos dibujan a la vez

Dibuje y edite como de costumbre. Sus propias ediciones se muestran de inmediato, incluso antes de que las demás personas las tengan, y las de ellas aparecen en su pantalla poco después de hacerlas. Todos los comandos funcionan: dibujar, modificar, capas, bloques, hojas, cotas, restricciones.

Dos personas pueden cambiar el mismo objeto. Si cambian cosas distintas, como el color y un extremo de una línea, se conservan ambos cambios. Si cambian lo mismo, gana el cambio posterior.

Lo que queda solo para usted: la capa actual, el color y la altura de texto de los objetos nuevos, su configuración de cotas, su vista, la pantalla dividida y el SCP. El dibujo se comparte; cómo lo mira usted, no.

## Otras personas en su dibujo

- **Cursores:** el puntero de cada persona se muestra con su nombre en su propio color, y el comando que ejecuta. Usted ve los cursores de las personas que trabajan cerca de lo que hay en su pantalla.
- **Selecciones:** lo que alguien ha seleccionado se contornea con su color.
- **Siendo editado:** un objeto que alguien ha seleccionado lleva una etiqueta como «Ana está editando». Usted todavía puede cambiar su color o moverlo, pero no puede borrarlo, descomponerlo ni volver a escribirlo hasta que la persona lo suelte. Al seleccionarlo, le indica quién lo tiene.
- **Quién lo cambió por última vez:** seleccione un objeto que otra persona cambió en esta sesión, y la línea de comandos indica quién y qué cambio hizo («Ben lo cambió por última vez: CIRCLE.»). El panel Viva de Studio enumera cada edición reciente bajo {{ui:Ediciones recientes}}. Nada de esto se guarda en el dibujo: dura mientras dure la sesión.

## Retener una capa o un área mientras trabaja allí

En un dibujo grande con varias personas, indique qué parte es suya por ahora:

1. Escriba `LIVEHOLD` y pulse {{key:Enter}}.
2. Elija `L` y escriba un nombre de capa (Enter mantiene la capa actual), o elija `A` y seleccione dos esquinas de un área.
3. Las ediciones de otras personas en esa capa, o a objetos de esa área, se devuelven, y se les avisa que usted trabaja allí. Usted ve su área como un marco punteado; los demás la ven en su color con su nombre, y las capas que usted retiene aparecen listadas arriba a la izquierda de su dibujo.
4. `LIVEHOLD`, luego `R`, libera todo lo que usted retiene. Salir de la sesión también lo libera.

Cualquiera en la sesión puede retener, incluido el anfitrión; los bloqueos del anfitrión siguen aplicándose encima. Una retención nunca se guarda en el archivo.

## Cuando se devuelve una edición

La copia del dibujo del anfitrión revisa cada edición. Algunas no pueden entrar, y CadCraft las devuelve en su pantalla y explica el motivo en la línea de comandos, por ejemplo:

- alguien borró el objeto, o la capa o el bloque que necesita, justo antes que usted;
- alguien está editando ese objeto, o retiene su capa o el área donde está;
- el anfitrión lo bloqueó;
- el bloque que usted coloca fue purgado, o una capa que borra todavía tiene objetos.

## Deshacer deshace su propio trabajo

{{key:Mod+Z}} y {{ui:Deshacer}} deshacen su último comando, completo, y dejan intacto el trabajo de los demás. Si alguien cambió lo mismo después, no se deshace nada y la línea de comandos indica quién lo cambió. {{key:Mod+Y}} rehace.

## Bloqueos (el anfitrión)

El anfitrión puede proteger objetos o una capa completa para que nadie los cambie, incluido el propio anfitrión, hasta que se desbloqueen:

1. Seleccione los objetos, luego escriba `LIVELOCK` y pulse {{key:Enter}}. O escriba `LIVELOCK` sin nada seleccionado y elija `L` para bloquear una capa por nombre: los objetos que se agreguen después a esa capa también quedan bloqueados.
2. Los objetos bloqueados se dibujan con línea punteada y una etiqueta «Bloqueado por el anfitrión» en la pantalla de todos.
3. `LIVEUNLOCK` los desbloquea de la misma forma.

Los bloqueos pertenecen a la sesión: terminan cuando ella termina y nunca se guardan en el archivo.

## Unirse con el mismo archivo

Si abrió el mismo archivo que abrió el anfitrión (desde una carpeta compartida o la misma copia), únase desde su propia ventana de CadCraft en Studio: abra el panel {{ui:Viva}} y use {{ui:Unirse aquí}} con el código del anfitrión. Solo viajan los cambios hechos desde que el anfitrión lo abrió, así que un dibujo grande queda listo de inmediato. Si su archivo es otro, el dibujo del anfitrión reemplaza al suyo en su pantalla (su archivo se queda como está). Esto funciona solo mientras su dibujo no haya cambiado desde que lo abrió.

## Asistentes en una sesión en vivo

Un asistente conectado a su ventana de CadCraft (vea la ayuda sobre cómo trabajar con asistentes de IA) se une a la sesión como un participante propio, que todos ven como «Asistente (vía <su nombre>)». El anfitrión lo deja entrar, como a una persona; el asistente del anfitrión entra de inmediato. Sus cambios tienen su propio deshacer: su {{key:Mod+Z}} deshace su trabajo, y el deshacer del asistente deshace solo lo suyo. El asistente sale de la sesión cuando usted lo desconecta o sale, y solo puede trabajar en la sesión mientras usted pueda editar.

## Unirse desde un navegador

Un compañero sin Studio puede escanear con un teléfono, tableta o computadora en la misma red el código que muestra la imagen del anfitrión. CadCraft se abre en el navegador, pide su nombre en la línea de comandos, y se llena con el dibujo del anfitrión cuando el anfitrión lo deja entrar. Un enlace de invitación permite unirse desde otra red: el anfitrión necesita un asiento de Team Cloud Plan para la aplicación, los demás se unen gratis, y el enlace solo funciona mientras la sesión del anfitrión esté abierta.

## Muchas personas en un dibujo

Cada edición llega a todos en la sesión, así que cuantas más personas haya, más tarda cada cambio en llegar a cada una, y las computadoras portátiles y conexiones más lentas se retrasan primero. El tamaño habitual de una sesión es de 20 personas; el anfitrión puede permitir más en una sesión concreta (vea la ayuda sobre trabajar en conjunto en vivo). Si el dibujo se siente lento con muchas personas, ayudan menos personas, menos de ellas editando al mismo tiempo, o una mejor conexión.

## Cuando termina la sesión

Solo el anfitrión guarda el dibujo. Cuando el anfitrión termina la sesión, los demás conservan una copia sin guardar: guárdela si quiere conservarla.

:::note
Lo devuelto se dibuja encima de los objetos que lo rodean en su propia pantalla hasta que vuelva a abrir el dibujo. Los sombreados y objetos rellenos que se superponen pueden verse distintos de la copia del anfitrión; el dibujo en sí es el mismo.
:::

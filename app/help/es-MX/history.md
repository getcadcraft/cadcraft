---
title: Historial: versiones y cambios
summary: Vea las versiones de un dibujo (las copias que Studio guarda al guardar y las de la nube), abra o restaure una, y compare dos con los cambios mostrados en color.
keywords: historial, versiones, historial de versiones, restaurar, versión anterior, deshacer un guardado, comparar, comparar dibujos, dwgcompare, cambios, agregados, eliminados, modificados, instantánea, copia de seguridad, versiones en la nube
from: 141d37b3
---

## Lo que creará

Una vista de una versión anterior de un dibujo, y una lista de lo que es distinto de ahora: lo que se agregó, lo que se eliminó y lo que cambió, marcado en color sobre el dibujo.

## Abrir Historial

Escriba `HISTORY` (o `HIST`) y pulse {{key:Enter}}, o elija {{ui:Historial…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. El panel se abre junto al dibujo y permanece abierto mientras trabaja, así puede desplazar y acercar el dibujo con los colores.

Historial funciona en CadCraft Studio. En un navegador, el panel solo lo indica.

## De dónde vienen las versiones

- **En este equipo.** Cada vez que abre un dibujo desde un archivo en Studio, y cada vez que lo guarda, Studio guarda una copia del archivo en su propio almacenamiento de este equipo. La primera copia es {{ui:Al abrir}}: el archivo tal como estaba antes de su primer guardado sobre él. Studio conserva las 25 copias más recientes de cada dibujo, y las más antiguas se eliminan primero cuando todas las copias juntas superan 400 MB. Un guardado que no cambia nada no conserva nada. No se sube nada.
- **En la nube.** Cuando abre un dibujo desde sus archivos en la nube en Studio, el panel también muestra {{ui:En la nube}}: cada versión que guarda la nube, con su número, quién la guardó y la nota. El panel solo las lee. CadCraft todavía no envía sus propios guardados a la nube, así que estas son las versiones guardadas desde otros dispositivos y desde la web. Vuelva a iniciar sesión en Studio si indica que la sesión venció.

Un dibujo que aún no ha guardado no tiene copias: guárdelo primero.

## Abrir o restaurar una versión

- {{ui:Abrir}} pone esa versión en una pestaña propia. Su dibujo no se modifica.
- {{ui:Restaurar}} reemplaza este dibujo por esa versión. Antes pregunta. Studio guarda una copia del dibujo tal como está ahora en Historial (marcada como {{ui:Antes de restaurar}}) antes de hacerlo, y no se escribe nada en el archivo hasta que guarde. Una restauración no se puede deshacer con {{key:Mod+Z}}; use esa copia.

## Comparar

1. Haga clic en {{ui:Comparar}} en una versión. Se compara con {{ui:El dibujo como está ahora}}; para compararla con otra versión, elija antes esa versión en {{ui:Comparar con}}.
2. Lea el resultado debajo de la lista: cuántos objetos se agregaron, eliminaron y modificaron, y la lista de ellos. Haga clic en un elemento de la lista para mover la vista hasta él.
3. En el dibujo:
   - los objetos en **verde** se agregaron,
   - los objetos en **rojo** se eliminaron (solo están en la versión anterior),
   - los objetos en **naranja** cambiaron: la forma nueva es sólida y la anterior, discontinua.
4. {{ui:Mostrar en el dibujo}} activa y desactiva los colores; {{ui:Quitar los colores}} quita el resultado. Al cerrar el panel también se quitan.

La lista indica qué cambió en un objeto modificado: su texto, si se desplazó, su forma, su capa, su color, su tipo de línea o su grosor de línea. Cada hoja se compara por separado; los colores se muestran en la hoja que está abierta.

:::note
Un dibujo no tiene un número permanente para cada objeto, así que CadCraft compara los objetos por lo que son: el mismo objeto en ambos lados está sin cambios; un objeto del mismo tipo y la misma capa que queda dentro de su propio tamaño de uno antiguo es el mismo objeto, modificado; lo que sobra se agrega o se elimina. Un objeto desplazado muy lejos de donde estaba aparece como eliminado en un lugar y agregado en el otro. Una referencia a bloque cuenta el contenido de su bloque.
:::

## Errores comunes

- **"No hay copias todavía."** Studio guarda una copia en cada apertura y guardado de un dibujo que tiene un archivo en este equipo. Un dibujo abierto desde una pestaña del navegador, o que nunca se guardó, no tiene ninguna.
- **Falta la lista de la nube.** Aparece para un dibujo abierto desde la nube en Studio; un archivo abierto desde el disco no es un dibujo de la nube.
- **Todo aparece como modificado.** Dos versiones guardadas por programas distintos escriben el mismo dibujo de formas diferentes (nombres de bloques anónimos, redondeos). Compare versiones guardadas por CadCraft.

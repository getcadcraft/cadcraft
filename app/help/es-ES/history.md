---
title: Historial: versiones y cambios
summary: Vea las versiones de un dibujo (las copias que Studio guarda al guardar, y las de la nube), ábralas o restitúyalas, y compare dos con los cambios marcados en color.
keywords: historial, versiones, historial de versiones, restituir, versión anterior, deshacer un guardado, comparar, comparar dibujos, dwgcompare, cambios, añadido, eliminado, modificado, instantánea, copia de seguridad, versiones en la nube
from: 141d37b3
---

## Qué creará

Una vista de una versión anterior de un dibujo, y una lista de lo que es distinto de ahora: qué se añadió, qué se eliminó y qué cambió, marcado en color sobre el dibujo.

## Abrir el Historial

Escriba `HISTORY` (o `HIST`) y pulse {{key:Enter}}, o elija {{ui:Historial…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. El panel se abre junto al dibujo y permanece abierto mientras trabaja, así que puede desplazar y acercar el dibujo con sus colores.

El Historial funciona en CadCraft Studio. En un navegador, el panel solo lo indica.

## De dónde vienen las versiones

- **En este equipo.** Cada vez que abre un dibujo desde un archivo en Studio, y cada vez que lo guarda, Studio conserva una copia del archivo en su propio almacenamiento de este equipo. La primera copia es {{ui:Tal como se abrió}}: el archivo tal como estaba antes de su primer guardado sobre él. Studio conserva las 25 copias más recientes de cada dibujo, y cuando todas las copias juntas superan 400 MB, se eliminan primero las más antiguas. Un guardado que no cambia nada no conserva nada. No se sube nada.
- **En la nube.** Cuando abre un dibujo de sus archivos en la nube desde Studio, el panel también muestra {{ui:En la nube}}: cada versión que tiene la nube, con su número, quién la guardó y la nota. El panel solo las lee. CadCraft todavía no envía sus propios guardados a la nube, así que estas son las versiones guardadas desde otros dispositivos y desde la web. Vuelva a iniciar sesión en Studio si indica que la sesión ha caducado.

Un dibujo que todavía no ha guardado no tiene copias: guárdelo primero.

## Abrir o restituir una versión

- {{ui:Abrir}} pone esa versión en una pestaña propia. Su dibujo no se toca.
- {{ui:Restituir}} reemplaza este dibujo por esa versión. Antes pregunta. Studio conserva en el Historial una copia del dibujo tal como está ahora (marcada como {{ui:Antes de una restauración}}) antes de hacerlo, y no se escribe nada en el archivo hasta que guarde. Una restitución no se puede deshacer con {{key:Mod+Z}}; use esa copia.

## Comparar

1. Haga clic en {{ui:Comparar}} en una versión. Se compara con {{ui:El dibujo tal como está ahora}}; para compararla con otra versión, elija antes esa versión en {{ui:Comparar con}}.
2. Lea el resultado bajo la lista: cuántos objetos se añadieron, eliminaron y modificaron, y la lista de ellos. Haga clic en un elemento de la lista para mover la vista hasta él.
3. En el dibujo:
   - los objetos **verdes** se añadieron,
   - los objetos **rojos** se eliminaron (solo están en la versión anterior),
   - los objetos **naranjas** cambiaron: la forma nueva es continua y la antigua discontinua.
4. {{ui:Mostrar en el dibujo}} activa y desactiva los colores; {{ui:Quitar los colores}} elimina el resultado. Al cerrar el panel también se quitan.

La lista indica qué cambió en un objeto modificado: su texto, si se movió, su forma, su capa, su color, su tipo de línea o su grosor de línea. Cada hoja se compara por separado; los colores se muestran en la hoja que está abierta.

:::note
Un dibujo no tiene un número permanente para cada objeto, así que CadCraft empareja los objetos por lo que son: el mismo objeto en ambos lados está sin cambios; un objeto del mismo tipo y capa que está dentro de su propio tamaño de otro antiguo es el mismo objeto, modificado; lo que queda se añade o se elimina. Un objeto movido lejos de donde estaba aparece como eliminado en un lugar y añadido en el otro. Una referencia de bloque cuenta el contenido de su bloque.
:::

## Errores comunes

- **"Todavía no hay copias."** Studio guarda una copia en cada apertura y en cada guardado de un dibujo que tiene un archivo en este equipo. Un dibujo abierto desde una pestaña del navegador, o que nunca se guardó, no tiene ninguna.
- **Falta la lista de la nube.** Aparece para un dibujo abierto desde la nube en Studio; un archivo abierto desde el disco no es un dibujo de la nube.
- **Todo parece modificado.** Dos versiones guardadas por programas distintos escriben el mismo dibujo de formas diferentes (nombres de bloques anónimos, redondeos). Compare versiones guardadas por CadCraft.

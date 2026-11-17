---
title: Enviar un dibujo a un láser
summary: Abra el panel Láser, elija qué hace cada capa (cortar, marcar, grabar, rellenar, imagen), vea una vista previa de los movimientos del cabezal, guarde el G-code en modo láser GRBL, o envíelo desde el navegador tras enmarcar el trabajo.
keywords: láser, cortadora láser, grabadora láser, GRBL, G-code, gcode, grabar, rellenar, tramado, grabado de imagen, marcar, cortar, Web Serial, enmarcar el trabajo, potencia, velocidad, pasadas, LASER, LASERCUT, CNC
from: 72b56db0
---

El panel {{ui:Láser}} convierte las capas de un dibujo en un programa para un láser que funciona con GRBL (la mayoría de los controladores de diodo y de CO2 de aficionados y talleres pequeños). Escriba `LASER` (o `LASERCUT`) y pulse {{key:Enter}}, o elija {{ui:Láser…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. En los estilos de cinta está en el menú {{ui:Archivo}} y junto a {{ui:Trazar}}. El panel se abre sobre el dibujo y permanece abierto mientras dibuja: la vista previa sigue cada cambio.

:::warning
Pruebe cada ajuste primero con un retal, use gafas de protección adecuadas para su láser, mantenga cerrada la tapa cuando la haya, y nunca deje un láser en marcha sin vigilancia. Los valores con los que empieza cada capa son marcadores de posición, no recomendaciones para ningún material.
:::

## Qué se envía

El panel lee el modelo (no las hojas), de las capas que están encendidas y descongeladas:

- Líneas, arcos, círculos, polilíneas (los segmentos en arco siguen siendo arcos), elipses y splines. Una forma que termina donde empieza cuenta como cerrada.
- Los bloques se descomponen: un objeto de la capa 0 dentro de un bloque va con la capa de la referencia del bloque.
- Un sombreado envía su contorno, así que un logotipo sombreado en una capa **Rellenar formas** se rellena.
- Una imagen (`IMAGEATTACH`) se graba en una capa con **Grabar imagen**, cuando está cuadrada (sin girar ni inclinar) y su archivo está abierto en CadCraft.
- El texto, las acotaciones, las directrices, los puntos y las líneas de construcción no se envían; el panel indica cuántos dejó fuera. Para grabar texto, dibuje las letras como formas o sombréelas.

Los tamaños se envían en milímetros a partir de las unidades del dibujo (`UNITS`): un dibujo en pulgadas se multiplica por 25.4. Un dibujo sin unidades definidas se envía a razón de una unidad por un milímetro. Marque {{ui:Solo los objetos seleccionados}} para enviar una parte del dibujo.

## Elija qué hace cada capa

Cada capa con algo dibujado es una fila. {{ui:Hace}} la pone en **Cortar**, **Marcar**, **Grabar líneas**, **Rellenar formas**, **Grabar imagen** o **No enviar**, con una {{ui:Potencia %}}, una {{ui:Velocidad mm/min}} y un número de {{ui:Pasadas}}. Cada cambio es un paso de deshacer y se guarda en el dibujo: DWG (todas las versiones que CadCraft guarda) y DXF conservan los ajustes, así que el dibujo se abre con ellos la próxima vez. Otros programas abren el archivo como antes; ven un bloque sin usar llamado CADCRAFT_LASER (purgarlo allí elimina los ajustes).

- **Rellenar formas** quema el interior de las formas cerradas con líneas separadas {{ui:Interlineado}}, a un {{ui:Ángulo}}, en ambos sentidos o en uno, con un sobrerrecorrido para que el cabezal vaya a velocidad cuando se enciende el láser; el relleno cruzado añade una segunda pasada a 90°. Una forma con un agujero queda abierta en el agujero.
- **Grabar imagen** convierte una imagen en puntos (Floyd–Steinberg, Atkinson, ordenado, o simple blanco y negro con un umbral) o, con *Niveles de gris*, en potencia variable.
- Orden: primero imágenes y rellenos, después grabado de líneas, luego marcados, y por último cortes, para que una pieza recortada no se mueva mientras se graba. Dentro de una capa, las trayectorias van **de dentro hacia fuera** (un agujero antes de la placa en la que está), y después la más cercana.

## Vista previa, después guardar

La vista previa dibuja lo que hace el cabezal: las líneas que queman, en color; los movimientos rápidos, en gris; y un recuadro verde alrededor de todo lo que quema. Debajo están el tamaño, la longitud de quemado y una estimación de tiempo (sin aceleración; una máquina real tarda más). {{ui:Guardar código G…}} escribe G-code GRBL en modo láser: `$32=1`, `M4` (o `M3`) con valores S, movimientos `G0` y `G1`, y `M5` al final. X0 Y0 es la esquina inferior izquierda del trabajo, salvo que elija el origen del dibujo: sitúe ahí el cero de trabajo de su máquina.

## Enviar desde el navegador

En Chrome y Edge, {{ui:Conectar…}} le pide elegir el puerto USB del láser. No se conecta ni se envía nada hasta que pulse un botón. Pulse primero {{ui:Enmarcar el trabajo}}: el cabezal recorre el recuadro del trabajo con el láser **apagado** (o con la potencia baja que haya fijado para un puntero), para que vea dónde quemará. Solo entonces se activa {{ui:Enviar trabajo}}, y se desactiva de nuevo si cambia algo. {{ui:Pausar}} detiene el cabezal, {{ui:Detener}} lo detiene, reinicia el controlador (el láser se apaga) y envía `M5`. Donde falta Web Serial (Firefox, Safari y CadCraft Studio, que todavía no tiene Web Serial) el panel solo ofrece guardar: guarde el G-code y envíelo con el programa propio de su láser.

## Todavía no disponible

Todavía no están disponibles: los formatos de otros controladores (Ruida, láseres Marlin, archivos de fabricantes), las pestañas y las entradas de aproximación, la compensación de corte (kerf), las bibliotecas de materiales, los ejes rotativo y Z, la alineación con cámara, y el texto como contornos.

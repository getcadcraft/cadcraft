---
title: Enviar un plano a un láser
summary: Abra el panel Láser, elija qué hace cada capa (cortar, marcar, grabar, rellenar, imagen), vea el recorrido del cabezal, guarde el G-code en modo láser GRBL, o envíelo desde el navegador tras enmarcar el trabajo.
keywords: láser, cortadora láser, grabadora láser, GRBL, G-code, gcode, grabar, rellenar, tramado, grabado de imagen, marcar, cortar, Web Serial, enmarcar el trabajo, potencia, velocidad, pasadas, LASER, LASERCUT, CNC
from: 72b56db0
---

El panel {{ui:Láser}} convierte las capas de un plano en un programa para un láser que usa GRBL (la mayoría de los controladores de diodo y CO2 de uso aficionado y pequeño taller). Escriba `LASER` (o `LASERCUT`) y presione {{key:Enter}}, o elija {{ui:Láser…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. En los estilos de cinta está en el menú {{ui:Archivo}} y junto a {{ui:Trazar}}. El panel se abre sobre el plano y queda abierto mientras dibuja: la vista previa sigue cada cambio.

:::warning
Pruebe cada configuración primero en un recorte de descarte, use protección ocular adecuada para su láser, mantenga la tapa cerrada cuando la haya, y nunca deje un láser encendido sin vigilancia. Los números con los que empieza una capa son valores de prueba, no recomendaciones para ningún material.
:::

## Qué se envía

El panel lee el modelo (no las hojas), en capas encendidas y descongeladas:

- Líneas, arcos, círculos, polilíneas (los segmentos de arco siguen siendo arcos), elipses y splines. Una forma que termina donde empieza cuenta como cerrada.
- Los bloques se desarman: un objeto de la capa 0 dentro de un bloque toma la capa de la referencia del bloque.
- Un sombreado envía su contorno, así que un logo sombreado en una capa **Rellenar** se rellena.
- Una imagen (`IMAGEATTACH`) se graba en una capa configurada en **Grabar imagen**, cuando está recta (sin girar ni inclinar) y su archivo está abierto en CadCraft.
- El texto, las cotas, las directrices, los puntos y las líneas de construcción no se envían; el panel dice cuántos dejó fuera. Para grabar texto, dibuje las letras como formas o sombréelas.

Los tamaños salen en milímetros a partir de las unidades del plano (`UNITS`): un plano en pulgadas se multiplica por 25.4. Un plano sin unidades configuradas se envía con una unidad igual a un milímetro. Marque {{ui:Solo los objetos seleccionados}} para enviar parte del plano.

## Elegir qué hace cada capa

Cada capa con algo dibujado es una fila. {{ui:Hace}} la configura en **Cortar**, **Marcar**, **Grabar líneas**, **Rellenar formas**, **Grabar imagen** o **No enviar**, con una {{ui:Potencia %}}, una {{ui:Velocidad mm/min}} y un número de {{ui:Pasadas}}. Cada cambio es un paso de deshacer y se guarda en el plano: DWG (todas las versiones que CadCraft guarda) y DXF conservan la configuración, así el plano se abre con ella la próxima vez. Otros programas abren el archivo como antes; ven un bloque sin usar llamado CADCRAFT_LASER (purgarlo allí elimina la configuración).

- **Rellenar** quema el interior de formas cerradas con líneas separadas {{ui:Interlineado}}, en un {{ui:Ángulo [A]}}, en ambas direcciones o en una, con un sobrerrecorrido para que el cabezal esté a velocidad cuando se enciende el láser; el sombreado cruzado agrega una segunda pasada a 90°. Una forma con agujero queda abierta en el agujero.
- **Grabar imagen** convierte una imagen en puntos (Floyd–Steinberg, Atkinson, ordenado, o blanco y negro simple con un umbral) o, con *Niveles de gris*, en potencia variable.
- Orden: primero imágenes y rellenos, luego grabado de líneas, luego marcas, luego cortes, para que una pieza recortada no se mueva mientras se graba. Dentro de una capa, los trazos van **primero por dentro** (un agujero antes de la placa en la que está), y el más cercano después.

## Vista previa, luego guardar

La vista previa dibuja lo que hace el cabezal: líneas de quemado en color, movimientos rápidos en gris, y una caja verde alrededor de todo lo que quema. Debajo están el tamaño, la longitud de quemado y una estimación de tiempo (sin aceleración; una máquina real tarda más). {{ui:Guardar G-code…}} escribe G-code en modo láser GRBL: `$32=1`, `M4` (o `M3`) con valores S, movimientos `G0` y `G1`, `M5` al final. X0 Y0 es la esquina inferior izquierda del trabajo, salvo que elija el origen del plano: configure allí el cero de trabajo de su máquina.

## Enviar desde el navegador

En Chrome y Edge, {{ui:Conectar…}} pide elegir el puerto USB del láser. Nada se conecta ni envía hasta que presione un botón. Presione primero {{ui:Enmarcar el trabajo}}: el cabezal recorre la caja del trabajo con el láser **apagado** (o con la potencia baja que configure para un puntero) para que vea dónde va a quemar. Recién entonces se activa {{ui:Enviar trabajo}}, y se desactiva otra vez si cambia algo. {{ui:Pausa}} detiene el cabezal, {{ui:Detener}} lo detiene, reinicia el controlador (el láser se apaga) y envía `M5`. Donde falta Web Serial (Firefox, Safari y CadCraft Studio, que todavía no tiene Web Serial) el panel solo ofrece guardar: guarde el G-code y envíelo con el programa propio de su láser.

## Aún no construido

Todavía no construido: formatos de otros controladores (Ruida, láseres Marlin, archivos de fabricante), pestañas y entradas de aproximación, desplazamiento por ancho de corte, bibliotecas de materiales, ejes rotativos y Z, alineación con cámara, texto como contornos.

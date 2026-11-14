---
title: Primeros pasos con CadCraft
summary: Qué hace la aplicación de dibujo CadCraft, dónde se ejecuta y su primer dibujo, desde una pantalla en blanco hasta un archivo guardado.
keywords: inicio, primer dibujo, nuevo, abrir, guardar, guardar como, empezar, tutorial, introducción, inicio rápido
from: 1a56c575
---

CadCraft es una aplicación de dibujo en 2D. Usted dibuja y edita líneas, arcos, polilíneas, texto, cotas y bloques, prepara hojas con cajetines y ventanas gráficas, y las traza a PDF. Abre dibujos DWG y DXF y los guarda como DWG o DXF.

Se ejecuta en su navegador web. No hay nada que instalar: el sitio le da la dirección y toda la aplicación se carga en la página. Sus dibujos se abren desde su propio ordenador y se guardan de nuevo en él. **No se sube nada.**

Si ya ha dibujado antes, lea [Si viene de otro programa de dibujo](topic:coming-from) después de esta página. La mayoría de los hábitos se mantienen, y los pocos que no, están ahí.

## ¿Prefiere que le guíen?

Escriba `TOUR` (o haga clic en {{ui:Hacer el recorrido}} en la tarjeta de inicio, o en {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Repetir el recorrido}}). Son seis pasos breves en un recuadro sobre el dibujo: dibujar una línea y un círculo, desplazarlos, recortar, borrar algo y acotarlo. Cada paso termina cuando lo hace, y puede saltarse un paso o todo el recorrido. Solo se inicia por sí mismo la primera vez. La [hoja de referencia rápida](topic:cheat-sheet) recoge los 40 comandos que más usará, y el [mapa de comandos](topic:command-map) todos los que existen.

## Lo que necesita

- Una versión reciente de Chrome, Edge, Firefox o Safari en un ordenador Mac, Windows o Linux. Consulte [Navegadores y plataformas](common:browsers).
- Un ratón con rueda es lo más cómodo. Un panel táctil funciona; consulte [Ratón, panel táctil y pantalla táctil](topic:mouse-trackpad-touch).
- Un teclado. CadCraft se maneja con comandos escritos, como la mayoría de los programas de dibujo.

## La idea en un párrafo

Escribe un comando (o hace clic en su botón) y la línea de comandos de la parte inferior le hace preguntas una a una: "Especifique primer punto", "Especifique punto siguiente". Responde a cada pregunta haciendo clic en el dibujo o escribiendo un valor y pulsando {{key:Enter}}. Pulsar {{key:Esc}} cancela. Ese es todo el modelo de interacción; lo demás es detalle.

## Su primer dibujo

Va a dibujar con líneas un rectángulo de 4000 por 3000, poner un círculo en el centro y guardar el archivo.

1. Abra CadCraft. La línea de comandos de la parte inferior muestra `Command:` y el área de dibujo muestra una breve tarjeta "Start drawing".
2. Escriba `L` y pulse {{key:Enter}}. No hace falta hacer clic antes en la línea de comandos: lo que escriba, vaya donde vaya, llega a ella.
3. El mensaje cambia a `Specify first point:`. Escriba `0,0` y pulse {{key:Enter}}.
4. Escriba `@4000,0` y pulse {{key:Enter}}. Aparece una línea que va hacia la derecha. La `@` significa "desde el último punto".
5. Escriba `@0,3000` y pulse {{key:Enter}}.
6. Escriba `@-4000,0` y pulse {{key:Enter}}.
7. Escriba `C` y pulse {{key:Enter}}. `C` es la opción Cerrar: la última línea vuelve al primer punto y el comando termina.
8. Haga clic en {{ui:Extensión}} en el grupo Vista de la barra de herramientas. El rectángulo llena la pantalla.

Ahora debería ver cuatro líneas que forman un rectángulo, y el historial situado sobre la línea de comandos enumera lo que ha escrito.

9. Escriba `C` y pulse {{key:Enter}} para iniciar el comando de círculo.
10. Escriba `2000,1500` y pulse {{key:Enter}} para el centro.
11. Escriba `500` y pulse {{key:Enter}} para el radio.

Aparece un círculo en el centro del rectángulo.

12. Pulse {{key:Mod+S}}, o haga clic en {{ui:Guardar}} en el grupo Archivo.

El navegador descarga `Drawing1.dwg` en su carpeta de descargas habitual, y el historial indica que se guardó una copia como DWG. Ese archivo se vuelve a abrir en CadCraft y en la mayoría de los demás programas de CAD. (Si antes eligió DXF en {{ui:Guardar como}}, en este navegador, un dibujo nuevo se guarda como `Drawing1.dxf`.)

:::tip
Pulse {{key:Enter}} con la línea de comandos vacía para repetir el último comando. Si lo prefiere, pulse {{key:Space}} en lugar de {{key:Enter}}: fuera del texto, hace lo mismo.
:::

## Abrir un dibujo existente

1. Pulse {{key:Mod+O}}, o haga clic en {{ui:Abrir}}.
2. Elija un archivo `.dwg` o `.dxf` en el selector de archivos.

También puede arrastrar un archivo DWG o DXF desde {{pick:mac=Finder|windows=el Explorador de archivos|linux=su gestor de archivos}} y soltarlo en el área de dibujo. El archivo se lee en la página; nunca sale de su ordenador.

Consulte [Archivos: qué se abre, qué se guarda](topic:files) para saber qué se conserva y qué se convierte.

## Guardar: qué esperar

Guardar en un navegador funciona de forma distinta a un programa de escritorio:

- {{ui:Guardar}} siempre **descarga una copia nueva**. No sobrescribe el archivo que abrió. Si ya hay un archivo con el mismo nombre en su carpeta de descargas, el navegador suele añadir un número, como `Drawing1 (1).dwg`.
- {{ui:Guardar}} usa el formato del dibujo: DWG si abrió un DWG, DXF si abrió un DXF. Para elegir, pulse {{key:Mod+Shift+S}} o haga clic en {{ui:Guardar como}} y escoja {{ui:DWG}} (y su versión), {{ui:DXF R12}} o {{ui:DXF 2000}}. Consulte [Guardar](topic:files#saving).
- El archivo que abrió nunca se modifica.
- Al abrir otro archivo, o con {{ui:Nuevo}}, este se coloca en su propia pestaña sobre el dibujo, de modo que no se cierra nada de lo que tenga abierto. Si cierra la pestaña de un dibujo o abandona la página con cambios sin guardar, CadCraft pregunta antes: {{ui:Guardar antes una copia}}, descartar o {{ui:Cancelar}}. Al cerrar la pestaña del navegador aparece en su lugar la pregunta propia del navegador, "¿Salir del sitio?".

El guardado en la nube aún no está disponible. En [Sus archivos y su privacidad](common:your-files) se explica adónde van sus archivos y por qué siguen siendo privados.

## Adónde ir después

Pulse {{key:F1}} o haga clic en {{ui:Ayuda}} en la barra superior para abrir esta ayuda junto al dibujo en cualquier momento. Funciona sin conexión.

- [La pantalla de CadCraft](topic:workspace) nombra todas las barras y paneles.
- [Dibujar con coordenadas](topic:draw-with-coordinates) es el mejor primer recorrido práctico.
- [Teclado y ratón](topic:keyboard) enumera todas las teclas.
- Escriba `HELP` en la línea de comandos para ver una lista de todos los comandos, o lea la [Referencia de comandos](topic:commands).

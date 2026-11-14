---
title: Primeros pasos con CadCraft
summary: Qué hace la aplicación de dibujo CadCraft, dónde se ejecuta y su primer dibujo, desde una pantalla en blanco hasta un archivo guardado.
keywords: inicio, primer dibujo, nuevo, abrir, guardar, guardar como, empezar, tutorial, introducción, inicio rápido
from: 1a56c575
---

CadCraft es una aplicación de dibujo en 2D. Usted dibuja y edita líneas, arcos, polilíneas, texto, cotas y bloques, prepara hojas con cuadros de rotulación y ventanas gráficas, y las traza a PDF. Abre dibujos DWG y DXF y los guarda como DWG o DXF.

Se ejecuta en su navegador web. No hay nada que instalar: el sitio le da la dirección y toda la aplicación se carga en la página. Sus dibujos se abren desde su propia computadora y se guardan de vuelta en ella. **No se sube nada.**

Si ya ha dibujado antes, lea [Si viene de otro programa de dibujo](topic:coming-from) después de esta página. La mayoría de los hábitos se conservan, y los pocos que no, están ahí.

## ¿Prefiere que lo guíen?

Escriba `TOUR` (o haga clic en {{ui:Hacer el recorrido}} en la tarjeta de inicio, o en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Hacer el recorrido de nuevo}}). Son seis pasos cortos en un cuadro sobre el dibujo: dibuje una línea y un círculo, desplácelos, recórtelos, borre algo y acótelo. Cada paso termina cuando usted lo hace, y puede omitir un paso o todo el recorrido. Solo arranca por sí mismo la primera vez. La [hoja de referencia](topic:cheat-sheet) tiene los 40 comandos que más usará, y el [mapa de comandos](topic:command-map) todos los comandos que existen.

## Qué necesita

- Una versión reciente de Chrome, Edge, Firefox o Safari en una computadora Mac, Windows o Linux. Vea [Navegadores y plataformas](common:browsers).
- Un mouse con rueda es lo más cómodo. Un trackpad funciona; vea [Mouse, trackpad y pantalla táctil](topic:mouse-trackpad-touch).
- Un teclado. CadCraft se maneja con comandos escritos, como la mayoría de los programas de dibujo.

## La idea en un párrafo

Usted escribe un comando (o hace clic en su botón) y la línea de comandos, abajo, le hace preguntas una por una: "Precise el primer punto", "Precise el punto siguiente". Usted responde cada pregunta haciendo clic en el dibujo o escribiendo un valor y pulsando {{key:Enter}}. {{key:Esc}} cancela. Ese es todo el modelo de interacción; lo demás es detalle.

## Su primer dibujo

Dibujará un rectángulo de 4000 por 3000 con líneas, pondrá un círculo en el centro y guardará el archivo.

1. Abra CadCraft. La línea de comandos, abajo, muestra `Comando:` y el área de dibujo muestra una tarjeta breve "Empiece a dibujar".
2. Escriba `L` y pulse {{key:Enter}}. No necesita hacer clic antes en la línea de comandos: lo que escriba, en cualquier parte, va ahí.
3. El mensaje cambia a `Precise el primer punto:`. Escriba `0,0` y pulse {{key:Enter}}.
4. Escriba `@4000,0` y pulse {{key:Enter}}. Aparece una línea hacia la derecha. La `@` significa "desde el último punto".
5. Escriba `@0,3000` y pulse {{key:Enter}}.
6. Escriba `@-4000,0` y pulse {{key:Enter}}.
7. Escriba `C` y pulse {{key:Enter}}. `C` es la opción Cerrar: la última línea vuelve al primer punto y el comando termina.
8. Haga clic en {{ui:Extensión}} en el grupo Vista de la barra de herramientas. El rectángulo llena la pantalla.

Ahora debería ver cuatro líneas que forman un rectángulo, y el historial sobre la línea de comandos lista lo que escribió.

9. Escriba `C` y pulse {{key:Enter}} para iniciar el comando de círculo.
10. Escriba `2000,1500` y pulse {{key:Enter}} para el centro.
11. Escriba `500` y pulse {{key:Enter}} para el radio.

Aparece un círculo en el centro del rectángulo.

12. Pulse {{key:Mod+S}}, o haga clic en {{ui:Guardar}} en el grupo Archivo.

El navegador descarga `Drawing1.dwg` a su carpeta habitual de descargas, y el historial dice que se guardó una copia como DWG. Ese archivo se abre de nuevo en CadCraft y en la mayoría de los demás programas de CAD. (Si antes eligió DXF en {{ui:Guardar como}}, en este navegador, un dibujo nuevo se guarda como `Drawing1.dxf`.)

:::tip
Pulse {{key:Enter}} en una línea de comandos vacía para repetir el último comando. Pulse {{key:Space}} en lugar de {{key:Enter}} si lo prefiere: fuera de un texto, hace lo mismo.
:::

## Abrir un dibujo existente

1. Pulse {{key:Mod+O}}, o haga clic en {{ui:Abrir}}.
2. Elija un archivo `.dwg` o `.dxf` en el selector de archivos.

También puede arrastrar un archivo DWG o DXF desde {{pick:mac=Finder|windows=el Explorador de archivos|linux=su administrador de archivos}} y soltarlo en el área de dibujo. El archivo se lee en la página; nunca sale de su computadora.

Vea [Archivos: qué se abre y qué se guarda](topic:files) para saber qué se conserva y qué se convierte.

## Guardar: qué esperar

Guardar en un navegador funciona distinto que en un programa de escritorio:

- {{ui:Guardar}} siempre **descarga una copia nueva**. No sobrescribe el archivo que abrió. Si en su carpeta de descargas ya hay un archivo con el mismo nombre, el navegador suele agregar un número, como `Drawing1 (1).dwg`.
- {{ui:Guardar}} usa el formato del dibujo: DWG si abrió un DWG, DXF si abrió un DXF. Para elegir, pulse {{key:Mod+Shift+S}} o haga clic en {{ui:Guardar como}}, y escoja {{ui:DWG}} (y su versión), {{ui:DXF R12}} o {{ui:DXF 2000}}. Vea [Guardar](topic:files#saving).
- El archivo que abrió nunca se modifica.
- Abrir otro archivo, o {{ui:Nuevo}}, lo pone en su propia pestaña sobre el dibujo, así que nada de lo que tiene abierto se cierra. Si cierra la pestaña de un dibujo o sale de la página con cambios sin guardar, CadCraft pregunta antes: {{ui:Guardar antes una copia}}, descartar o {{ui:Cancelar}}. Al cerrar la pestaña del navegador aparece en su lugar la pregunta propia del navegador, "¿Salir del sitio?".

Todavía no se puede guardar en la nube. Adónde van sus archivos y por qué siguen siendo privados se explica en [Sus archivos y su privacidad](common:your-files).

## Adónde ir después

Pulse {{key:F1}} o haga clic en {{ui:Ayuda}} en la barra de arriba para abrir esta ayuda junto al dibujo en cualquier momento. Funciona sin conexión.

- [La pantalla de CadCraft](topic:workspace) nombra cada barra y panel.
- [Dibujar con coordenadas](topic:draw-with-coordinates) es el mejor primer recorrido.
- [Teclado y mouse](topic:keyboard) lista todas las teclas.
- Escriba `HELP` en la línea de comandos para ver todos los comandos, o lea la [Referencia de comandos](topic:commands).

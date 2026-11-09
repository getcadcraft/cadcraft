---
title: Primeros pasos con CadCraft
summary: Mba'e ojapo CadCraft aplicación dibujo, moõ guýpe ojapo, ha ne primer plano pantalla mboyve peteĩ archivo oñeguardáva.
keywords: inicio, primer dibujo, nuevo, abrir, guardar, guardar como, comenzar, tutorial, introducción, inicio rápido
from: 1a56c575
---

CadCraft peteĩ aplicación de dibujo 2D. Ejedibuja ha ejedita líneas, arcos, polilíneas, textos, cotas y bloques, ha ejepreparáta hojas title block ha viewports-pe, ha ejetrazá PDF-pe. Ojeabre DWG ha DXF planos ha ojeguarda DWG térã DXF-pe.

Ojapo navegador-pe. Ndaipóri instalación: sitio ome'ẽ dirección, aplicación opavave página-pe ojeguahẽ. Ne planos ojeabre ne computadora-gui ha ojeguarda hendápe. **Ndojeguejýi ningo-pe.**

Ndereiko ramo dibujo, ehecha [Viniendo de otro software de dibujo](topic:coming-from) ko página rire. Ha'e heta costumbre ojekuaa, ha mba'e ndojekuaáiva upépe oĩ.

## ¿Preferís guía?

Emoñe'ẽ `TOUR` (térã eclic {{ui:Hacer el recorrido}} inicio tarjeta-pe, térã {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Hacer el recorrido otra vez}}). Mokõiha... seis paso mbykýva caja plano ári: dibuja línea ha círculo, omoĩ, recorta, eliminar peteĩ mba'e ha cota. Peteĩteĩ paso ojekúi nde ojapo rire, ha paso térã recorrido opavave ejejoka ikatu. Automáticamente ojepyrũ peteĩ vez. [Cheat sheet](topic:cheat-sheet) oguereko 40 comando ojeporúva hetaiterei, ha [mapa de comandos](topic:command-map) opavave comando.

## Mba'e reikotevẽ

- Chrome, Edge, Firefox térã Safari pyahúva Mac, Windows térã Linux computadora-pe. Ehecha [Navegadores y plataformas](common:browsers).
- Rueda oguerekóva mouse ojeporu porã. Trackpad ikatu; ehecha [Mouse, trackpad y táctil](topic:mouse-trackpad-touch).
- Teclado. CadCraft ojeporu comando ojeikuaáva, heta plano programa-icha.

## Peteĩ idea

Ejeeʼẽ comando (térã eclic botón), ha comando línea pe ápe ojeporandu peteĩ peteĩ: "Especifique primer punto", "Especifique siguiente punto". Ejeʼẽ peteĩteĩ pregunta ndive eclic plano-pe térã emoñe'ẽ valor, upéi ejapo {{key:Enter}}. {{key:Esc}} ombotyre. Ko'ã opavave interacción; ambue detalle.

## Ne primer plano

Ejedibuja rectángulo 4000 por 3000 líneakuéra ndive, círculo peteĩ mbytépe, ha ejeguarda archivo.

1. Ejepyrũ CadCraft. Comando línea pe ápe `Command:` ohechauka, ha plano área "Comenzar a dibujar" tarjeta ohechauka.
2. Emoñe'ẽ `L` ha ejapo {{key:Enter}}. Comando línea-pe eclic ndejeporavaʼekue: ndeporandu ejapóva oñeme'ẽ upépe.
3. Pregunta ojeikoʼẽ `Especifique primer punto:`. Emoñe'ẽ `0,0` ha ejapo {{key:Enter}}.
4. Emoñe'ẽ `@4000,0` ha ejapo {{key:Enter}}. Línea ohechauka, derecha-pe ojeʼe. `@` ohechauka "mboyve último punto".
5. Emoñe'ẽ `@0,3000` ha ejapo {{key:Enter}}.
6. Emoñe'ẽ `@-4000,0` ha ejapo {{key:Enter}}.
7. Emoñe'ẽ `C` ha ejapo {{key:Enter}}. `C` oguereko Cerrar opción: última línea primer punto-pe ojevolve ha comando oñemboty.
8. Eclic {{ui:Extensiones}} herramienta barra Vista grupo-pe. Rectángulo pantalla ojeipe'a.

Ko'ẽrõ mokõi línea rectángulo ojapo ohechauka, ha historia ndive comando línea ohechauka mba'e emoñe'ẽva.

9. Emoñe'ẽ `C` ha ejapo {{key:Enter}} círculo comando ojepyrũ haguã.
10. Emoñe'ẽ `2000,1500` ha ejapo {{key:Enter}} centro haguã.
11. Emoñe'ẽ `500` ha ejapo {{key:Enter}} radio haguã.

Círculo rectángulo mbytépe ohechauka.

12. Ejapo {{key:Mod+S}}, térã eclic {{ui:Guardar}} grupo Archivo-pe.

Navegador oguahẽ `Drawing1.dwg` ne descarga carpeta-pe, ha historia ohechauka DWG copia oñeguardava. Upe archivo CadCraft-pe ojeabre ha ambue CAD programa heta-pe. (Ejeporavo DXF {{ui:Guardar como}}-pe ko navegador-pe, plano pyahu `Drawing1.dxf` oñeguarda.)

:::tip
Ejapo {{key:Enter}} línea vacía-pe comando ombohasa haguã. Ejapo {{key:Space}} {{key:Enter}} rehe, ndeipota-piko: texto ndaipóriva, mba'e ojapo ojapóicha.
:::

## Abrir un plano ojeguerekova

1. Ejapo {{key:Mod+O}}, térã eclic {{ui:Abrir}}.
2. Eiporavo `.dwg` térã `.dxf` archivo archivo selector-pe.

Ejeʼẽ DWG térã DXF {{pick:mac=Finder|windows=Explorador de archivos|linux=tu administrador de archivos}} ha ejeʼẽ plano área-pe. Archivo página-pe ojeleéva; ndojeguahẽi ne computadora-gui.

Ehecha [Archivos: mba'e ojeabre, mba'e ojeguarda](topic:files) mba'e ojeñoha ha ojecambia.

## Guardar: mba'e ndejechauka

Navegador-pe guardar ojapo escritorio programa-icha ndojapóiva:

- {{ui:Guardar}} ojeguarda **peteĩ copia pyahu**. Ndojejoka ojeabrevaʼekue archivo. Mba'e nombre ndive ndejeguarda carpeta-pe, navegador oipuru número, ejemplo `Drawing1 (1).dwg`.
- {{ui:Guardar}} oipuru plano formato: DWG DWG ojeabréramo, DXF DXF ojeabréramo. Ejeporavo {{key:Mod+Shift+S}} térã eclic {{ui:Guardar como}}, ha upéi {{ui:DWG}} (ha versión), {{ui:DXF R12}} térã {{ui:DXF 2000}}. Ehecha [Guardar](topic:files#saving).
- Ejeabréva archivo ndojecambiáiva.
- Ambue archivo ejeabre térã {{ui:Nuevo}}, pestaña pyahúpe oñemoĩ, upévare nde ojeabréva ndojejokái. Plano pestaña ejejoka térã página ndejeguejýva guardaʼỹre, CadCraft ndeporandu ante: {{ui:Guardar una copia primero}}, descartar térã {{ui:Cancelar}}. Navegador pestaña ejejoka rire, navegador ndeporandu "¿Salir del sitio?".

Nube guardar ndaipóri ko'ẽrõ. Mba'éichapa nde archivo ndojeguahẽi ha ndoikóiva privado ojehechaukáva [Tus archivos y privacidad](common:your-files) ndive.

## Ámbue tembiapo

Ejapo {{key:F1}} térã eclic {{ui:Ayuda}} barra pyahúpe, ko ayuda ojeikeva plano costado-pe. Mba'e ojeporu conexión'ỹ rire.

- [La pantalla de CadCraft](topic:workspace) opavave barra ha panel ohechauka.
- [Dibujar con coordenadas](topic:draw-with-coordinates) mejor primer recorrido.
- [Teclado y mouse](topic:keyboard) opavave tecla ohechauka.
- Emoñe'ẽ `HELP` comando línea-pe opavave comando lista haguã, térã ehecha [Referencia de comandos](topic:commands).

---
title: Tuberías: primeros pasos
summary: Qué hace el complemento Tuberías en CadCraft, cómo activarlo y cómo se guardan las tuberías en un archivo DWG o DXF normal.
keywords: tuberías, tubería, complemento, fontanería, mecánica, acero, cobre, pvc, pex, válvula, p&id, tabla, saneamiento
from: 1048242c
---

## Qué es

Tuberías es un complemento de CadCraft que viene incluido y es gratuito. Usted hace clic en el eje de un tramo de tubería y el complemento dibuja la tubería a su tamaño real —acero, cobre, PVC o PEX, por diámetro nominal y espesor (schedule) o tipo, según las normas públicas— con sus codos, reducciones y tes, las válvulas que coloque en ella, una pendiente para los desagües, un sólido en la pestaña {{ui:3D}} y una línea en la tabla de tuberías y accesorios. Incluye además un juego de símbolos de estilo P&ID.

Está desactivado hasta que lo active: {{ui:Ajustes}} › {{ui:General}} › {{ui:Complementos}} › {{ui:Tuberías}}. Sus herramientas están en la sección {{ui:Tuberías}} del panel derecho, como comandos (más abajo) y, si lo solicita en {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Tuberías}}, como un grupo al final de la barra de herramientas.

Un dibujo en pulgadas o pies nombra los diámetros por NPS (`2"`) y mide en pies; cualquier otro dibujo nombra el acero y el PVC por DN (`DN50`), y el cobre y el PEX por su diámetro nominal y su diámetro exterior en milímetros, y mide en metros.

## Su primer tramo de tubería

1. Escriba {{cmd:PIPE}}. Escriba {{ui:M}} para el material, {{ui:Z}} y un diámetro (`2`, `1-1/2`, `DN50`).
2. Haga clic en los puntos del tramo. Cada esquina recibe un codo. Pulse Intro para terminar.
3. Para derivar, empiece el siguiente tramo sobre el primero: el clic se ajusta al eje del primero y allí se coloca una te.
4. Escriba {{cmd:VALVE}} y haga clic en un tramo para colocar una válvula en él.
5. Escriba {{cmd:PIPESCHED}} y haga clic donde irá la tabla.

## Archivos que se abren en cualquier lugar

Un tramo de tubería se guarda como referencia de bloque con su dibujo dentro, y sus datos se conservan con él bajo el nombre de aplicación `CC_PIPING`; lo mismo ocurre con un símbolo. Las tuberías guardadas en DWG o DXF se abren en cualquier programa CAD tal como se dibujaron, y en CadCraft sin el complemento sin que se pierda nada. Sus sólidos son grupos 3D normales en la pestaña {{ui:3D}}.

---
title: Tuberías: primeros pasos
summary: Qué hace el complemento Tuberías en CadCraft, cómo activarlo y cómo se conserva la tubería en un archivo DWG o DXF común.
keywords: tuberías, tubería, complemento, plomería, mecánica, acero, cobre, pvc, pex, válvula, p&id, cuadro, drenaje
from: 1048242c
---

## Qué es

Tuberías es un complemento de CadCraft que viene incluido y es gratuito. Usted pulsa el eje de un tramo de tubería y se dibuja la tubería en su tamaño real (acero, cobre, PVC o PEX, por tamaño nominal y cédula o tipo según las normas públicas), con sus codos, reducciones y tes, las válvulas que le ponga, una pendiente para drenajes, un sólido en la pestaña {{ui:3D}} y una línea en el cuadro de tuberías y accesorios. Viene con un juego de símbolos de estilo P&ID.

Está desactivado hasta que lo active: {{ui:Configuración}} › {{ui:General}} › {{ui:Complementos}} › {{ui:Tuberías}}. Sus herramientas están en la sección {{ui:Tuberías}} del panel derecho, como comandos (abajo), y, si lo pide en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Tuberías}}, como un grupo al final de la barra de herramientas.

Un dibujo en pulgadas o pies nombra los tamaños por NPS (`2"`) y mide en pies; cualquier otro dibujo nombra el acero y el PVC por DN (`DN50`), y el cobre y el PEX por su tamaño nominal y su diámetro exterior en milímetros, y mide en metros.

## Su primer tramo de tubería

1. Escriba {{cmd:PIPE}}. Escriba {{ui:M}} para el material, {{ui:Z}} y un tamaño (`2`, `1-1/2`, `DN50`).
2. Pulse los puntos del tramo. Cada esquina recibe un codo. Pulse Enter para terminar.
3. Para derivar, empiece el siguiente tramo sobre el primero: el clic se mueve sobre su eje y se coloca una te allí.
4. Escriba {{cmd:VALVE}} y pulse sobre un tramo para poner una válvula.
5. Escriba {{cmd:PIPESCHED}} y pulse donde irá el cuadro.

## Archivos que se abren en cualquier parte

Un tramo de tubería se guarda como referencia a bloque con su dibujo dentro, y sus datos se conservan con él bajo el nombre de aplicación `CC_PIPING`; igual que un símbolo. La tubería guardada como DWG o DXF se abre en cualquier programa CAD tal como se dibujó, y en CadCraft sin el complemento sin perder nada. Sus sólidos son grupos 3D comunes en la pestaña {{ui:3D}}.

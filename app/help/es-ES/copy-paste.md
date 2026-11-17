---
title: Copiar, pegar y duplicar
summary: Copie objetos al portapapeles de CadCraft, péguelos donde haga clic o en su mismo lugar, duplique con el puntero y traiga trabajo desde otro dibujo o pestaña.
keywords: copiar, copia, cortar, pegar, pegar en el mismo lugar, duplicar, portapapeles, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, entre dibujos, otra pestaña, punto base
from: 4b9f29d3
---

## Lo que aprenderá

Cómo copiar objetos al portapapeles, pegarlos donde haga clic o en sus propias coordenadas, duplicarlos con el puntero, cortarlos y llevarlos a otro dibujo. Todo esto está también en el grupo {{ui:Edición}} de la barra de herramientas: {{ui:Copiar}}, {{ui:Pegar}} y el menú {{ui:Más}}.

## Copiar y pegar donde haga clic

1. Seleccione los objetos: haga clic en ellos o arrastre una ventana.
2. Pulse {{key:Mod+C}}, o haga clic en {{ui:Copiar}} en el grupo {{ui:Edición}}. La línea de comandos indica cuántos objetos se copiaron. Siguen seleccionados.
3. Pulse {{key:Mod+V}}, o haga clic en {{ui:Pegar}}. La copia aparece en el cursor, colgando de la esquina inferior izquierda de los objetos copiados.
4. Haga clic donde deba ir esa esquina, o escriba un punto como `2000,500` y pulse {{key:Enter}}. Los ajustes a objetos y Orto funcionan como de costumbre.

Los objetos pegados quedan seleccionados, así que puede moverlos o cambiarlos enseguida. Un {{key:Mod+Z}} retira todo lo pegado.

:::tip
¿Quiere que la copia cuelgue de un punto que elija, como la esquina de un muro? Escriba `COPYBASE`, haga clic en el punto base, seleccione los objetos y pulse {{key:Enter}}. Al pegar, ese punto se coloca donde haga clic. Para que cada copia cuelgue de su centro en lugar de su esquina inferior izquierda, cambie {{ui:Punto de pegado}} en [Ajustes de CadCraft](topic:settings).
:::

## Pegar en el mismo lugar

Pulse {{key:Mod+Shift+V}}, o elija {{ui:Pegar en el mismo lugar}} en el menú {{ui:Más}}. La copia se coloca exactamente en las coordenadas desde las que se copió, sin hacer clic. Úselo para llevar objetos a otro dibujo en el mismo sitio, o de una hoja a otra hoja.

## Duplicar y desplazar

1. Seleccione los objetos.
2. Pulse {{key:Mod+D}}, o elija {{ui:Duplicar y desplazar}} en el menú {{ui:Más}}.
3. Una copia se sitúa encima del original y se mueve con el puntero. Haga clic donde deba ir. También puede escribir un desplazamiento como `@0,-600`, o una distancia hacia el cursor.

{{key:Esc}} antes del clic no deja nada. El duplicado es un solo paso de deshacer y no toca el portapapeles.

## Cortar

Pulse {{key:Mod+X}}, o elija {{ui:Cortar}} en el menú {{ui:Más}}. Los objetos pasan al portapapeles y se borran del dibujo, en un solo paso de deshacer. Vuelva a pegarlos con {{key:Mod+V}} o {{key:Mod+Shift+V}}.

## Entre dibujos y pestañas

El portapapeles conserva su copia cuando abre otro dibujo, y la comparten todas las pestañas de CadCraft de este navegador. Copie en una pestaña y pulse {{key:Mod+V}} en otra.

- Los bloques que usan los objetos vienen con ellos. Si el dibujo donde pega ya tiene un bloque con el mismo nombre, se usa su propia definición, como hace AutoCAD.
- Las capas que usan los objetos se añaden, con el color y los ajustes que tenían.
- La copia no se reescala cuando los dos dibujos usan unidades distintas: CadCraft lo indica, y después puede usar {{cmd:SCALE}}.
- Las ventanas gráficas se quedan en su hoja; se dejan fuera de la copia.

:::note
El portapapeles es propio de CadCraft. No puede pegar objetos de CadCraft en otro programa, ni pegar en CadCraft lo copiado en otro programa: guarde como DWG o DXF. Una copia muy grande puede ser demasiado para compartir entre pestañas; entonces la línea de comandos indica que solo esta pestaña puede pegarla.
:::

## Errores comunes

- **{{key:Mod+V}} pegó texto en la línea de comandos.** Había escrito algo allí, así que las teclas actuaron sobre el texto. Pulse {{key:Esc}} para borrarlo y, después, vuelva a pulsar {{key:Mod+V}}.
- **No pasó nada, y la barra de estado indica que termine el comando actual.** Hay otro comando en marcha. Pulse {{key:Esc}} primero.
- **El pegado quedó lejos.** Cuelga de la esquina inferior izquierda de lo que copió, que puede ser un objeto distante que seleccionó por error. Use {{ui:Pegar en el mismo lugar}}, o copie con `COPYBASE`.
- **"No se ha pegado nada" con un motivo.** Lo que otra pestaña dejó en el portapapeles no se pudo leer (estaba dañado, o se cambió a mano). Copie los objetos de nuevo.

Consulte la lista completa de teclas en [Teclado y ratón](topic:keyboard), y cada indicación en la [Referencia de comandos](topic:commands#clipboard).

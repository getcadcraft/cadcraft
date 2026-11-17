---
title: Cambiar el tamaño del texto de cota
summary: Haga el texto de las cotas más grande o más pequeño, tanto para las cotas nuevas como para las que ya están en el dibujo.
keywords: tamaño de texto de cota, altura de texto, dimtxt, dimscale, texto de cota demasiado pequeño, texto de cota demasiado grande, texto de cota más grande, escala de anotación
from: 30e40633
---

## Para las cotas que cree a continuación

1. Pulse {{key:Esc}} para que no haya nada seleccionado: el panel derecho muestra {{ui:Parámetros actuales}}.
2. Desplácese hacia abajo en el panel hasta {{ui:Cotas nuevas}}. Escriba en {{ui:Altura de texto}} la altura que desea en papel (por ejemplo `2.5` para 2,5 mm, o `3/32"`) y pulse {{key:Enter}}.
3. Ponga {{ui:Escala global}} en la escala de trazado (`50` para 1:50, `48` para 1/4" = 1'-0"): cada medida se multiplica por ella.

En la línea de comandos, {{cmd:DIMTXT}} fija la altura y {{cmd:DIMSCALE}} la escala global.

## Para las cotas que ya están en el dibujo

1. Seleccione las cotas (una, o varias: elija {{ui:Cota}} en la lista de la parte superior de {{ui:Propiedades}}).
2. Escriba la nueva {{ui:Altura de texto}} (en la sección {{ui:Texto}}), o una nueva {{ui:Escala global}} (en la sección {{ui:Ajustar}}, más abajo), y pulse {{key:Enter}}.

Se redibujan al instante, en un solo paso de deshacer. Una cota de un archivo de otro programa se redibuja con el estilo de CadCraft en cuanto la cambie.

:::tip
Un texto que se ve bien en pantalla pero es diminuto en la hoja impresa suele significar que la escala global es 1: ajústela a la escala de la hoja.
:::

Véase [Establecer tamaños, decimales y escala de cota](topic:dimension-settings) para todos los ajustes.

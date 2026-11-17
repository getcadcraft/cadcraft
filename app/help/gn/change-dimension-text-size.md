---
title: Cambiar el tamaño del texto de cotas
summary: Hacé el texto de las cotas más grande o más chico, para las cotas nuevas y para las que ya están en el plano.
keywords: tamaño del texto de cota, altura del texto, dimtxt, dimscale, texto de cota muy chico, texto de cota muy grande, texto de cota más grande, escala de anotación
from: 30e40633
---

## Para las cotas que vas a hacer

1. Presioná {{key:Esc}} para que nada esté seleccionado: el panel derecho muestra {{ui:Configuración actual}}.
2. Bajá en el panel hasta {{ui:Cotas nuevas}}. Escribí la altura que querés en el papel en {{ui:Altura del texto}} (por ejemplo `2.5` para 2,5 mm, o `3/32"`) y presioná {{key:Enter}}.
3. Poné {{ui:Escala general}} en la escala de impresión (`50` para 1:50, `48` para 1/4" = 1'-0"): cada tamaño se multiplica por ese valor.

En la línea de comandos, {{cmd:DIMTXT}} fija la altura y {{cmd:DIMSCALE}} la escala general.

## Para las cotas que ya están en el plano

1. Seleccioná las cotas (una, o varias: elegí {{ui:Cota}} en la lista de arriba de Propiedades).
2. Escribí la nueva {{ui:Altura del texto}} (en la sección {{ui:Texto}}), o una nueva {{ui:Escala general}} (en la sección {{ui:Ajuste}}, más abajo), y presioná {{key:Enter}}.

Se redibujan enseguida, en un solo paso de deshacer. Una cota de un archivo de otro programa se redibuja con el estilo de CadCraft en cuanto la cambiás.

:::tip
Un texto que se ve bien en pantalla pero queda chiquito en la hoja impresa suele significar que la escala general está en 1: ponela en la escala de la hoja.
:::

Ver [Configurar tamaños, decimales y escala de cotas](topic:dimension-settings) para cada ajuste.

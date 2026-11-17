---
title: Cambiar el tamaño del texto de cotas
summary: Haga el texto de las cotas más grande o más pequeño, para las cotas nuevas y para las que ya están en el dibujo.
keywords: tamaño de texto de cota, altura de texto, dimtxt, dimscale, texto de cota muy pequeño, texto de cota muy grande, texto de cota más grande, escala de anotación
from: 30e40633
---

## Para las cotas que hará después

1. Pulse {{key:Esc}} para que no haya nada seleccionado: el panel derecho dice {{ui:Parámetros actuales}}.
2. Desplácese por el panel hasta {{ui:Cotas nuevas}}. Escriba en {{ui:Altura de texto}} la altura que quiere en papel (por ejemplo `2.5` para 2.5 mm, o `3/32"`) y pulse {{key:Enter}}.
3. Ajuste {{ui:Escala global}} a la escala de trazado (`50` para 1:50, `48` para 1/4" = 1'-0"): cada medida se multiplica por ella.

En la línea de comandos, {{cmd:DIMTXT}} fija la altura y {{cmd:DIMSCALE}} la escala global.

## Para las cotas que ya están en el dibujo

1. Seleccione las cotas (una, o varias: elija {{ui:Cota}} en la lista de la parte superior de Propiedades).
2. Escriba la nueva {{ui:Altura de texto}} (en la sección {{ui:Texto}}), o una nueva {{ui:Escala global}} (en la sección {{ui:Ajustar}}, más abajo), y pulse {{key:Enter}}.

Se redibujan de inmediato, en un solo paso de deshacer. Una cota del archivo de otro programa se redibuja con el estilo de CadCraft en cuanto la cambia.

:::tip
El texto que se ve bien en pantalla pero es diminuto en la hoja impresa normalmente significa que la escala global está en 1: ajústela a la escala de la hoja.
:::

Vea [Definir tamaños, decimales y escala de cotas](topic:dimension-settings) para cada ajuste.

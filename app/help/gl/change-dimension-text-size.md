---
title: Cambiar o tamaño do texto das cotas
summary: Faga o texto das cotas máis grande ou máis pequeno, tanto para as cotas novas como para as que xa están no debuxo.
keywords: tamaño do texto da cota, altura do texto, dimtxt, dimscale, texto da cota demasiado pequeno, texto da cota demasiado grande, texto de cota máis grande, escala de anotación
from: 30e40633
---

## Para as cotas que vai crear

1. Prema {{key:Esc}} para que non haxa nada seleccionado: o panel dereito indica {{ui:Configuración actual}}.
2. Baixe o panel ata {{ui:Cotas novas}}. Escriba en {{ui:Altura do texto}} a altura que quere no papel (por exemplo `2.5` para 2.5 mm, ou
   `3/32"`) e prema {{key:Enter}}.
3. Defina {{ui:Escala global}} á escala de impresión (`50` para 1:50, `48` para 1/4" = 1'-0"): cada tamaño se multiplica por ela.

Na liña de comandos, {{cmd:DIMTXT}} define a altura e {{cmd:DIMSCALE}} a escala global.

## Para as cotas que xa están no debuxo

1. Seleccione as cotas (unha, ou varias: escolla {{ui:Cota}} na lista da parte superior de Propiedades).
2. Escriba a nova {{ui:Altura do texto}} (na sección {{ui:Texto}}), ou unha nova {{ui:Escala global}} (na sección {{ui:Axuste}} máis abaixo), e prema {{key:Enter}}.

Redébuxanse de inmediato, nun só paso de desfacer. Unha cota dun ficheiro doutro programa redébuxase no estilo de CadCraft en canto a cambia.

:::tip
O texto que se ve ben na pantalla pero é minúsculo na folla impresa adoita indicar que a escala global é 1: defina a escala da folla.
:::

Vexa [Definir tamaños, decimais e escala das cotas](topic:dimension-settings) para cada axuste.

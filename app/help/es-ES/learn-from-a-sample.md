---
title: Aprender con un dibujo de ejemplo
summary: Abra la casa de ejemplo o el levantamiento de ejemplo de CadCraft y recorra sus hojas, cajetín, cotas y capas.
keywords: ejemplo, ejemplos, dibujo de ejemplo, aprender, tutorial, recorrido, cajetín, hojas, levantamiento, juego de planos de arquitectura, abrir un ejemplo
from: aa1f960a
---

## Qué aprenderá

Cómo se construye un juego terminado: espacio modelo, hojas con ventanas gráficas a escala, un cajetín con atributos, cotas en pies y pulgadas y en milímetros, y capas. Los ejemplos son propios de CadCraft y de uso libre para cualquier fin (CC0).

## Abrir un ejemplo

1. En el panel izquierdo, bajo {{ui:Dibujo}}, haga clic en {{ui:Abrir un ejemplo}} (o escriba {{cmd:SAMPLES}}; en los estilos con cinta está en el menú {{ui:Archivo}}).
2. Haga clic en {{ui:Abrir}} junto a {{ui:Casa de ejemplo}}. Se abre en su propia pestaña, así que su trabajo sigue abierto.

## Recorra el modelo

1. Haga clic en {{ui:Extensión}} (o escriba `ZOOM` y después `E`): la planta, el alzado frontal, una sección y un detalle de muro.
2. En {{ui:Capas}}, haga clic en el ojo junto a `A-ANNO-DIMS` para ocultar las cotas, y otra vez para mostrarlas.
3. Haga clic en una puerta: Propiedades muestra una referencia de bloque de `DOOR-32`. Las puertas y las ventanas son bloques, colocados girados y en simetría.

## Las hojas

1. Haga clic en {{ui:A-101 FLOOR PLAN}} bajo el dibujo: una hoja ARCH D con una ventana gráfica a 1/4" = 1'-0".
2. Haga doble clic dentro de la ventana gráfica para trabajar en el modelo a través de ella; haga doble clic fuera para volver.
3. {{ui:A-501 DETAILS}} muestra el detalle de muro a 1 1/2" = 1'-0": el mismo modelo, otra escala.

## El cajetín

1. En cualquier hoja, haga doble clic en el cajetín: {{ui:Editar atributos}} enumera PROJECT, TITLE, SCALE, DATE, DRAWN y SHEET.
2. Cambie DRAWN por sus iniciales y haga clic en {{ui:Aceptar}}.
3. Para cambiar el propio cajetín en todas las hojas, selecciónelo y elija {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar en su sitio}}. Consulte [Atributos](topic:attributes).

## El levantamiento

Abra {{ui:Levantamiento de ejemplo}} del mismo modo. Los puntos grises de `SCAN-SLICE` son un corte de un escaneado; los muros de `AB-WALL` se calcaron sobre ellos. El muro este está 35 mm fuera de escuadra: las cotas lo dicen dos veces, en milímetros (`AB-DIMS-MM`) y en pies y pulgadas (`AB-DIMS-FTIN`, las mismas longitudes con una escala de medición). Las nubes rojas de `REV-1` marcan lo que halló el levantamiento.

## Siguiente

- [Cambiar el tamaño del texto de las cotas](topic:change-dimension-text-size)
- [Trazar a PDF](topic:plot-pdf): trace {{ui:A-101 FLOOR PLAN}}.

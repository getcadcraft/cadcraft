---
title: Definir el tipo y el tamaño de letra del texto con estilos de texto
summary: Cree estilos de texto con nombre, con tipo de letra, altura, anchura e inclinación; defina uno como actual para el texto nuevo, y cambie un estilo para modificar todo el texto que lo usa.
keywords: estilo de texto, estilo, STYLE, ST, TEXTSTYLE, -STYLE, tipo de letra, altura del texto, factor de anchura, oblicuo, inclinación, cambiar tipo de letra, estilo estándar, aplicar estilo, DDSTYLE
from: bd5a4883
---

## Lo que hará

Crear un estilo de texto llamado `Notes` con su propio tipo de letra y altura, usarlo para el texto nuevo y, después, cambiar el estilo para que cada nota que lo usa cambie a la vez.

## Pasos

1. Escriba {{cmd:STYLE}} (`ST`) y pulse {{key:Enter}}, o haga clic en {{ui:Estilo de texto}} en la barra de herramientas {{ui:Dibujo}}. El cuadro de diálogo {{ui:Estilo de texto}} muestra los estilos del dibujo. Todo dibujo tiene `Estándar`.
2. Haga clic en {{ui:Nuevo…}}, escriba `Notes` como nombre del nuevo estilo y haga clic en {{ui:Aceptar}}. La línea de estado indica "Estilo de texto Notes creado y definido como actual."
3. En {{ui:Tipo de letra}}, elija o escriba un nombre de tipo de letra. Ajuste {{ui:Altura (0 = preguntar cada vez)}} a un número, como `2.5`, para que cada texto nuevo tenga esa altura. Déjelo en `0` para que se le pregunte cada vez.
4. Ajuste {{ui:Factor de anchura}} y {{ui:Ángulo de inclinación (°)}} si quiere letras más estrechas, más anchas o inclinadas. La línea de muestra muestra el resultado.
5. Haga clic en {{ui:Cerrar}}. Dibuje texto con {{cmd:TEXT}} o {{cmd:MTEXT}}: el texto nuevo toma el estilo actual.
6. Para usar un estilo que ya creó, abra el cuadro de diálogo de nuevo, selecciónelo en la lista y haga clic en {{ui:Definir actual}}.
7. Para aplicar un estilo a un texto que ya está dibujado, seleccione el texto, abra el cuadro de diálogo, elija el estilo y haga clic en {{ui:Aplicar al texto seleccionado}}.

## Cambiar un estilo después

Cambie el tipo de letra, la altura, la anchura o la inclinación de un estilo en el cuadro de diálogo y cada texto que lo usa lo seguirá, en un solo paso de deshacer ({{key:Mod+Z}}). La línea de estado indica cuántos textos siguieron el cambio.

## Notas

- {{ui:Eliminar}} rechaza `Estándar` y un estilo que aún usa algún texto: cambie antes ese texto a otro estilo.
- Los estilos se guardan en la tabla STYLE del dibujo, así que los archivos DXF y DWG los conservan.
- En la línea de comandos, `-STYLE` hace lo mismo con opciones (Current, New, Font, Height, Width, Oblique, Delete, List).
- Una fuente que no está instalada en el ordenador que abre el dibujo se muestra con otro tipo de letra.

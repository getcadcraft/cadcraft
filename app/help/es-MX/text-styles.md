---
title: Definir el tipo de letra y el tamaño del texto con estilos de texto
summary: Cree estilos de texto con nombre, con un tipo de letra, altura, anchura e inclinación, defina uno como actual para el texto nuevo, y cambie un estilo para cambiar todo el texto que lo usa.
keywords: estilo de texto, estilo, STYLE, ST, TEXTSTYLE, -STYLE, tipo de letra, altura de texto, factor de anchura, oblicuidad, inclinación, cambiar tipo de letra, estilo estándar, aplicar estilo, DDSTYLE
from: bd5a4883
---

## Lo que hará

Crear un estilo de texto llamado `Notes` con su propio tipo de letra y altura, usarlo para texto nuevo y, más tarde, cambiar el estilo para que cada nota que lo usa cambie al mismo tiempo.

## Pasos

1. Escriba {{cmd:STYLE}} (`ST`) y pulse {{key:Enter}}, o haga clic en {{ui:Estilo de texto}} en la barra {{ui:Dibujo}}. El cuadro {{ui:Estilo de texto}} muestra los estilos del dibujo. Todo dibujo tiene `Standard`.
2. Haga clic en {{ui:Nuevo…}}, escriba `Notes` como nombre del nuevo estilo y haga clic en {{ui:Aceptar}}. La línea de estado dice "Estilo de texto Notes creado y definido como actual."
3. En {{ui:Tipo de letra}}, elija o escriba un nombre de tipo de letra. Defina {{ui:Altura (0 = preguntar cada vez)}} con un número, como `2.5`, para que cada texto nuevo tenga esa altura. Déjelo en `0` para que se le pregunte cada vez.
4. Defina {{ui:Factor de anchura}} y {{ui:Ángulo de oblicuidad (°)}} si desea letras más estrechas, más anchas o inclinadas. La línea de muestra muestra el resultado.
5. Haga clic en {{ui:Cerrar}}. Dibuje texto con {{cmd:TEXT}} o {{cmd:MTEXT}}: el texto nuevo toma el estilo actual.
6. Para usar un estilo que ya creó, abra el cuadro de nuevo, selecciónelo en la lista y haga clic en {{ui:Definir actual}}.
7. Para aplicar un estilo a texto que ya está dibujado, seleccione el texto, abra el cuadro, elija el estilo y haga clic en {{ui:Aplicar al texto seleccionado}}.

## Cambiar un estilo después

Cambie el tipo de letra, la altura, la anchura o la inclinación de un estilo en el cuadro, y cada texto que lo usa se actualizará, en un solo paso de deshacer ({{key:Mod+Z}}). La línea de estado indica cuántos textos se actualizaron.

## Notas

- {{ui:Eliminar}} rechaza `Standard` y un estilo que aún usa un texto: cambie primero ese texto a otro estilo.
- Los estilos se guardan en la tabla STYLE del dibujo, así que los archivos DXF y DWG los conservan.
- En la línea de comandos, `-STYLE` hace lo mismo con opciones (Actual, Nuevo, Tipo de letra, Altura, Anchura, Oblicuidad, Eliminar, Lista).
- Una fuente que no está instalada en la computadora que abre el dibujo se muestra con otra tipografía.

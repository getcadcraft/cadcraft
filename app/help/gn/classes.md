---
title: Organizar un plano con clases
summary: Las clases ordenan los objetos de otra forma, a través de las capas (Iluminación-Luminarias-Spot): mostrarlas y ocultarlas, darles color, tipo de línea, grosor de línea, relleno y estilo de texto que los objetos pueden tomar "por clase", y elegir la clase en la que se crean los objetos nuevos.
keywords: clase, clases, CLASES, CLS, CLASE, por clase, ByClass, clase activa, usar al crear, Ninguna, capa de diseño, escala de capa, elevación, Vectorworks
from: 672de9cb
---

Las capas indican *dónde* pertenece un objeto en el plano; las clases indican *qué* es. Un muro en la capa `Nivel 1` puede estar en la clase `Muros-Exterior`, y un spot en la capa `Cielorraso` en la clase `Iluminación-Luminarias-Spot`. Podés ocultar todas las luminarias de todas las capas a la vez, o plotear todos los muros exteriores con más grosor, sin mover nada entre capas.

Cada objeto empieza en la clase **Ninguna**. Un plano sin clases propias funciona igual que antes.

## Abrir el panel de Clases

Escribí `CLASES` (o `CLS`) y apretá {{key:Enter}}, o elegí {{ui:Clases…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. El panel se abre sobre el plano y queda abierto mientras dibujás.

- **Agregar una clase:** escribí su nombre en el cuadro de arriba y apretá {{key:Enter}}. Un `-` crea un nivel: `Iluminación-Luminarias-Spot` queda debajo de `Iluminación-Luminarias`, que queda debajo de `Iluminación`; los niveles que faltan se agregan solos.
- **Mostrar u ocultar:** el ojo al lado de una clase. Ocultar una clase oculta todas las clases debajo, en pantalla y en papel.
- **Clase activa:** el botón redondo. Los objetos nuevos que dibujes van en la clase activa.
- **Elegir una clase:** hacé clic en su nombre. Los botones y configuraciones debajo de la lista funcionan entonces sobre ella.

El número al final de cada fila es cuántos objetos hay en esa clase (en el modelo, en las hojas y dentro de las definiciones de bloque).

## Poner objetos en una clase

Seleccioná los objetos, elegí una clase en el panel y elegí {{ui:Asignar clase}}. Marcá primero {{ui:Por clase}} para que tomen color, tipo de línea, grosor de línea, relleno y estilo de texto de la clase. También podés:

- escribir `CLASE` con objetos seleccionados e ingresar un nombre de clase (un nombre nuevo crea la clase);
- escribir `CLASE` sin nada seleccionado para fijar la clase activa; `?` lista las clases con sus cantidades;
- usar la sección {{ui:Clase}} del panel de Propiedades: la clase, y un interruptor {{ui:… por clase}} para color, tipo de línea y grosor de línea (relleno para sombreados, estilo de texto para texto);
- seleccionar por clase con `QSELECT`: elegí la propiedad {{ui:Clase}}.

{{ui:Seleccionar sus objetos}} selecciona todos los objetos de la clase elegida en la hoja abierta (o en el modelo).

## Cómo se dibuja un objeto: objeto, clase, capa

El color, tipo de línea, grosor de línea, relleno y estilo de texto de un objeto pueden ser **por clase**, igual que pueden ser por capa. CadCraft mira en este orden:

1. El valor propio del objeto, salvo que ese valor sea por clase.
2. El valor de la clase, cuando el objeto lo toma por clase y la clase lo tiene.
3. El valor de la capa.

Una clase cuyo color (o tipo de línea …) está en {{ui:Ndoikóiva}} pasa el objeto a su capa. Elegí una clase y configurá su {{ui:Color}}, {{ui:Tipo de línea}}, {{ui:Grosor de línea}}, {{ui:Relleno (sombreados)}} y {{ui:Estilo de texto}} debajo de los botones. Marcá {{ui:Usar al crear}} para que los objetos nuevos dibujados en esa clase tomen todos ellos por clase.

Cada cambio en el panel es un paso de {{ui:Deshacer}}.

## Renombrar y eliminar

{{ui:Renombrar}} edita el nombre en el lugar: apretá {{key:Enter}} para conservarlo, {{key:Esc}} para salir. Las clases debajo lo siguen (`Iluminación-Spot` pasa a `Luz-Spot` cuando `Iluminación` pasa a `Luz`), y lo mismo sus objetos y las sobreescrituras de ventana gráfica.

{{ui:Eliminar}} quita la clase y todas las clases debajo. Sus objetos pasan a **Ninguna**. Un {{ui:Deshacer}} devuelve todo. **Ninguna** no se puede renombrar ni eliminar.

## Capas de diseño

Debajo de {{ui:Capas de diseño}} cada capa puede tener una escala (`1:50`) y una elevación. Una capa de diseño es una capa común: el espacio modelo y las hojas funcionan como antes, y la escala y la elevación se guardan con el plano para las herramientas que las vayan a usar.

## En archivos DWG y DXF

Las clases se guardan en todas las versiones DWG que CadCraft guarda y en DXF (R12 y 2000). La clase de cada objeto es su propio dato extendido (aplicación `CADCRAFT_CLASS`), así que AutoCAD y otros programas la conservan con el objeto. La lista de clases, colores y visibilidad se guarda en un bloque sin usar llamado `CADCRAFT_CLASSES`; si otro programa purga ese bloque, CadCraft igual encuentra la clase de cada objeto y las clases vuelven con configuración por defecto.

Otros programas no conocen las clases: dibujan cada objeto con sus propios valores o los de su capa.

Ver también [Sobreescrituras de clase en ventana gráfica](topic:viewport-overrides) y [Organizar un plano con capas](topic:layers).

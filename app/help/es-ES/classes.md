---
title: Organizar un dibujo con clases
summary: Las clases ordenan los objetos de otra forma, a través de las capas (`Lighting-Fixtures-Spot`): muéstrelas y ocúltelas, dé color, tipo de línea, grosor, relleno y estilo de texto que los objetos pueden tomar "por clase", y defina la clase en la que se colocan los objetos nuevos.
keywords: clase, clases, CLASES, CLS, CLASS, por clase, ByClass, clase activa, usar al crear, Ninguna, capa de diseño, escala de capa, elevación, Vectorworks
from: 672de9cb
---

Las capas indican *dónde* pertenece un objeto en el dibujo; las clases indican *qué* es. Un muro en la capa `Nivel 1` puede estar en la clase `Walls-Exterior`, y un foco de techo en la capa `Ceiling` en la clase `Lighting-Fixtures-Spot`. Puede ocultar a la vez todas las luminarias de todas las capas, o trazar todos los muros exteriores con más grosor, sin mover nada entre capas.

Cada objeto empieza en la clase **Ninguna**. Un dibujo sin clases propias funciona exactamente igual que antes.

## Abrir el panel Clases

Escriba `CLASSES` (o `CLS`) y pulse {{key:Enter}}, o elija {{ui:Clases…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. El panel se abre sobre el dibujo y permanece abierto mientras dibuja.

- **Añadir una clase:** escriba su nombre en el cuadro superior y pulse {{key:Enter}}. Un `-` crea un nivel: `Lighting-Fixtures-Spot` queda bajo `Lighting-Fixtures`, que queda bajo `Lighting`; los niveles que falten se añaden por usted.
- **Mostrar u ocultar:** el ojo junto a una clase. Ocultar una clase oculta todas las clases que cuelgan de ella, en pantalla y en papel.
- **Clase activa:** el botón redondo. Los objetos nuevos que dibuje van a la clase activa.
- **Elegir una clase:** haga clic en su nombre. Los botones y ajustes de debajo de la lista actúan entonces sobre ella.

El número al final de cada fila indica cuántos objetos hay en esa clase (en el modelo, en las hojas y dentro de las definiciones de bloque).

## Poner objetos en una clase

Seleccione los objetos, elija una clase en el panel y pulse {{ui:Asignar clase}}. Marque primero {{ui:Por clase}} para que tomen de la clase su color, tipo de línea, grosor, relleno y estilo de texto. También puede:

- escribir `CLASS` con objetos seleccionados e indicar un nombre de clase (un nombre nuevo crea la clase);
- escribir `CLASS` sin nada seleccionado para definir la clase activa; `?` enumera las clases con sus recuentos;
- usar la sección {{ui:Clase}} del panel Propiedades: la clase, y un interruptor {{ui:… por clase}} para color, tipo de línea y grosor (relleno para sombreados, estilo de texto para texto);
- seleccionar por clase con `QSELECT`: elija la propiedad {{ui:Clase}}.

{{ui:Seleccionar sus objetos}} selecciona todos los objetos de la clase elegida en la hoja abierta (o en el modelo).

## Cómo se dibuja un objeto: objeto, clase, capa

El color, tipo de línea, grosor, relleno y estilo de texto de un objeto pueden ser **por clase**, igual que pueden ser por capa. CadCraft busca en este orden:

1. El valor propio del objeto, salvo que ese valor sea por clase.
2. El valor de la clase, cuando el objeto lo toma por clase y la clase lo tiene.
3. El valor de la capa.

Una clase cuyo color (o tipo de línea …) está {{ui:Sin definir}} pasa el objeto a su capa. Elija una clase y defina su {{ui:Color}}, {{ui:Tipo de línea}}, {{ui:Grosor de línea}}, {{ui:Relleno (tramas)}} y {{ui:Estilo de texto}} debajo de los botones. Marque {{ui:Usar al crear}} para que los objetos nuevos dibujados en esa clase tomen todos ellos por clase.

Cada cambio en el panel es un paso de {{ui:Deshacer}}.

## Renombrar y eliminar

{{ui:Renombrar}} edita el nombre en su sitio: pulse {{key:Enter}} para conservarlo, {{key:Esc}} para salir. Las clases que cuelgan de ella se actualizan (`Lighting-Spot` pasa a `Light-Spot` cuando `Lighting` pasa a `Light`), y lo mismo ocurre con sus objetos y con las anulaciones por ventana gráfica.

{{ui:Eliminar}} quita la clase y todas las clases que cuelgan de ella. Sus objetos pasan a **Ninguna**. Un {{ui:Deshacer}} lo devuelve todo. **Ninguna** no se puede renombrar ni eliminar.

## Capas de diseño

Bajo {{ui:Capas de diseño}} cada capa puede tener una escala (`1:50`) y una elevación. Una capa de diseño es una capa normal: el espacio modelo y las hojas funcionan como antes, y la escala y la elevación se guardan con el dibujo para las herramientas que las usarán.

## En archivos DWG y DXF

Las clases se conservan en todas las versiones DWG que guarda CadCraft y en DXF (R12 y 2000). La clase de cada objeto es su propio dato extendido (aplicación `CADCRAFT_CLASS`), así que AutoCAD y otros programas la mantienen con el objeto. La lista de clases, colores y visibilidad se guarda en un bloque sin usar llamado `CADCRAFT_CLASSES`; si otro programa purga ese bloque, CadCraft sigue encontrando la clase de cada objeto y las clases vuelven con los ajustes predeterminados.

Otros programas no conocen las clases: dibujan cada objeto con sus valores propios o con los de su capa.

Consulte también [Anulaciones de clase por ventana gráfica](topic:viewport-overrides) y [Organizar un dibujo con capas](topic:layers).

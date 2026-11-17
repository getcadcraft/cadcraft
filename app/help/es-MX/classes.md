---
title: Organice un dibujo con clases
summary: Las clases ordenan los objetos de otra manera, a través de las capas (Lighting-Fixtures-Spot): muéstrelas y ocúltelas, asígneles un color, tipo de línea, grosor de línea, relleno y estilo de texto que los objetos puedan tomar «por clase», y configure la clase en la que van los objetos nuevos.
keywords: clase, clases, CLASSES, CLS, CLASS, por clase, ByClass, clase activa, usar al crear, Ninguna, capa de diseño, escala de capa, elevación, Vectorworks
from: 672de9cb
---

Las capas indican *dónde* pertenece un objeto en el dibujo; las clases indican *qué* es. Un muro en la capa `Level 1` puede estar en la clase `Walls-Exterior`, y una luminaria de foco en la capa `Ceiling` en la clase `Lighting-Fixtures-Spot`. Puede ocultar todas las luminarias de todas las capas a la vez, o trazar todos los muros exteriores con más grosor, sin mover nada entre capas.

Cada objeto empieza en la clase **Ninguna**. Un dibujo sin clases propias funciona exactamente igual que antes.

## Abra el panel Clases

Escriba `CLASSES` (o `CLS`) y pulse {{key:Enter}}, o elija {{ui:Clases…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}. El panel se abre sobre el dibujo y permanece abierto mientras dibuja.

- **Añadir una clase:** escriba su nombre en el cuadro de arriba y pulse {{key:Enter}}. Un `-` crea un nivel: `Lighting-Fixtures-Spot` queda debajo de `Lighting-Fixtures`, que queda debajo de `Lighting`; los niveles que faltan se añaden por usted.
- **Mostrar u ocultar:** el ojo junto a una clase. Ocultar una clase oculta todas las clases que están debajo de ella, en pantalla y en el papel.
- **Clase activa:** el botón redondo. Los objetos nuevos que dibuje van en la clase activa.
- **Elegir una clase:** haga clic en su nombre. Los botones y los parámetros de debajo de la lista actúan entonces sobre ella.

El número al final de cada fila indica cuántos objetos hay en esa clase (en el modelo, en las hojas y dentro de las definiciones de bloque).

## Ponga objetos en una clase

Designe los objetos, elija una clase en el panel y elija {{ui:Asignar clase}}. Marque primero {{ui:Por clase}} para que tomen su color, tipo de línea, grosor de línea, relleno y estilo de texto de la clase. También puede:

- escribir `CLASS` con objetos designados e indicar un nombre de clase (un nombre nuevo crea la clase);
- escribir `CLASS` sin nada designado para definir la clase activa; `?` enumera las clases con sus conteos;
- usar la sección {{ui:Clase}} del panel Propiedades: la clase, y un interruptor {{ui:… por clase}} para color, tipo de línea y grosor de línea (relleno para sombreados, estilo de texto para texto);
- designar por clase con `QSELECT`: elija la propiedad {{ui:Clase}}.

{{ui:Seleccionar sus objetos}} designa cada objeto de la clase elegida en la hoja abierta (o en el modelo).

## Cómo se dibuja un objeto: objeto, clase, capa

El color, tipo de línea, grosor de línea, relleno y estilo de texto de un objeto pueden ser **por clase**, igual que pueden serlo por capa. CadCraft busca en este orden:

1. El valor propio del objeto, salvo que ese valor sea por clase.
2. El valor de la clase, cuando el objeto lo toma por clase y la clase lo tiene.
3. El valor de la capa.

Una clase cuyo color (o tipo de línea…) está {{ui:Sin definir}} pasa el objeto a su capa. Elija una clase y configure su {{ui:Color}}, {{ui:Tipo de línea}}, {{ui:Grosor de línea}}, {{ui:Relleno (sombreados)}} y {{ui:Estilo de texto}} debajo de los botones. Marque {{ui:Usar al crear}} para que los objetos nuevos dibujados en esa clase tomen todos ellos por clase.

Cada cambio en el panel es un paso de deshacer.

## Renombrar y eliminar

{{ui:Renombrar}} edita el nombre en su sitio: pulse {{key:Enter}} para conservarlo, {{key:Esc}} para salir. Las clases que están debajo lo siguen (`Lighting-Spot` pasa a `Light-Spot` cuando `Lighting` pasa a `Light`), y también sus objetos y las sustituciones de clase por ventana gráfica.

{{ui:Eliminar}} quita la clase y todas las clases que están debajo de ella. Sus objetos pasan a **Ninguna**. Un {{ui:Deshacer}} lo devuelve todo. **Ninguna** no puede renombrarse ni eliminarse.

## Capas de diseño

En {{ui:Capas de diseño}}, cada capa puede tener una escala (`1:50`) y una elevación. Una capa de diseño es una capa normal: el espacio modelo y las hojas funcionan como antes, y la escala y la elevación se guardan con el dibujo para las herramientas que las usarán.

## En archivos DWG y DXF

Las clases se conservan en todas las versiones de DWG que CadCraft guarda y en DXF (R12 y 2000). La clase de cada objeto es su propio dato extendido (aplicación `CADCRAFT_CLASS`), así que AutoCAD y otros programas la conservan con el objeto. La lista de clases, los colores y la visibilidad se guardan en un bloque sin usar llamado `CADCRAFT_CLASSES`; si otro programa purga ese bloque, CadCraft sigue encontrando la clase de cada objeto y las clases vuelven con la configuración predeterminada.

Otros programas no conocen las clases: dibujan cada objeto con sus valores propios o con los de su capa.

Vea también [Sustituciones de clase en ventanas gráficas](topic:viewport-overrides) y [Organizar un dibujo con capas](topic:layers).

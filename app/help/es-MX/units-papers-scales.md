---
title: Unidades, tamaños de papel y escalas
summary: Qué significan las unidades de dibujo en CadCraft, los tamaños de papel para hojas y trazados, todas las escalas estándar, y cómo se relacionan los tamaños de texto y de cota con la escala de trazado.
keywords: unidades, milímetros, pulgadas, pies, pies y pulgadas, arquitectónicas, ingeniería, fraccionarias, fracciones, lunits, formato de longitud, precisión, metros, tamaño de papel, a3, a1, arch d, ansi, tabloid, letter, escala, 1:100, 1/4 pulgada, escala arquitectónica, escala de ingeniería, insunits
from: 7dc9b62e
---

## Unidades de dibujo

Usted dibuja a tamaño real, en unidades de dibujo. Lo que representa una unidad es el ajuste de **Unidades** del dibujo:

1. Pulse {{key:Esc}} para que no haya nada seleccionado, en la pestaña {{ui:Model}}.
2. En {{ui:Current settings}}, elija {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} o {{ui:Feet}}.

Las cotas pueden escribir sus longitudes en milímetros, centímetros, metros o kilómetros sin importar la unidad del dibujo: vea [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Cambiar las unidades no cambia ningún tamaño. Solo cambia cómo se leen las escalas en hojas y trazados, y qué escalas se ofrecen. Un dibujo abierto desde un DWG o DXF conserva las unidades guardadas en el archivo; la sección {{ui:Drawing}} del panel izquierdo las muestra.

Un dibujo {{ui:Unitless}} se trata como si estuviera en la unidad del papel: milímetros en papel ISO, pulgadas en papel de EE. UU.

## Pies y pulgadas, y fracciones

Cómo se **escriben y se teclean** las longitudes es un ajuste aparte, el formato de longitud. Cambia cómo se ven los números y lo que puede escribir, pero no cambia ninguna geometría.

1. Pulse {{key:Esc}} para que no haya nada seleccionado, en la pestaña {{ui:Model}}.
2. En {{ui:Current settings}}, elija {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) o {{ui:Scientific}} (`1.505E+02`).
3. Elija {{ui:Precision}}: lugares decimales, o la fracción más pequeña (1/16 es lo habitual para arquitectónico).

O escriba {{cmd:UNITS}} (`UN`) y responda sus dos preguntas.

Con {{ui:Architectural}} o {{ui:Engineering}}, una unidad de dibujo es una pulgada, como en AutoCAD: configure también {{ui:Units}} en {{ui:Inches}}. Así puede escribir longitudes en pies y pulgadas en cualquier lugar donde se pida una longitud, y en los cuadros de {{ui:Properties}}:

| Usted escribe | Significa |
|---|---|
| `12'6"` o `12'-6"` | 12 pies 6 pulgadas (150) |
| `12'6-1/2"` | 12 pies 6½ pulgadas. Use un guion antes de la fracción: {{key:Space}} equivale a {{key:Enter}} en la línea de comandos. |
| `12'` | 12 pies |
| `6"` o `6` | 6 pulgadas: un número solo son pulgadas |
| `1/2`, `6-1/2` | las fracciones funcionan en cualquier formato |

Los puntos aceptan las mismas longitudes: `@12'6",0` o `@10'<90`. Los ángulos siguen en grados.

El formato se muestra en el historial ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: áreas en pulgadas cuadradas y pies cuadrados), en {{ui:Properties}}, en las coordenadas de la barra de estado, y en las **cotas nuevas**. Las hojas conservan sus unidades de papel (milímetros o pulgadas) como decimales.

:::note
El formato de longitud se guarda en archivos DWG y DXF, y cada cota conserva el suyo: un dibujo guardado se abre como lo dejó.
:::

## Tamaños de papel

Hojas y trazados de modelo usan estos tamaños, en cualquier orientación:

| Papel | Tamaño | Unidad en la hoja |
|---|---|---|
| ISO A4 | 297 × 210 mm | milímetros |
| ISO A3 | 420 × 297 mm | milímetros |
| ISO A2 | 594 × 420 mm | milímetros |
| ISO A1 | 841 × 594 mm | milímetros |
| ISO A0 | 1189 × 841 mm | milímetros |
| Carta (Letter) | 11 × 8.5 in | pulgadas |
| Oficio (Legal) | 14 × 8.5 in | pulgadas |
| Tabloid / ANSI B | 17 × 11 in | pulgadas |
| ANSI C | 22 × 17 in | pulgadas |
| ANSI D | 34 × 22 in | pulgadas |
| ARCH C | 24 × 18 in | pulgadas |
| ARCH D | 36 × 24 in | pulgadas |
| ARCH E | 48 × 36 in | pulgadas |

Las hojas nuevas empiezan en ISO A3 para dibujos métricos y sin unidades, y en Tabloid para dibujos en pulgadas o pies. Los trazados de modelo empiezan en ISO A4 o Carta de la misma forma, y luego recuerdan su última elección. Las hojas de archivos abiertos conservan su propio tamaño, que se muestra como "Personalizado" cuando no es uno de estos.

## Escalas

Una escala `1:n` significa que una unidad en papel muestra n de la misma unidad en el modelo, así 1:100 muestra 1 m de edificio como 10 mm de papel. CadCraft lo calcula a partir de las unidades del dibujo y de la unidad del papel.

**Escalas métricas**, ofrecidas para cualquier dibujo: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitectónicas**, ofrecidas cuando las unidades son pulgadas o pies: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de ingeniería**, ofrecidas cuando las unidades son pulgadas o pies: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Sus propias escalas.** Escriba `SCALELISTEDIT` (o `SCALELIST`) para agregar una escala propia, como 1:75 o una escala de sitio de 2 de papel : 300 de dibujo. `Add` pide un nombre, luego las unidades de papel y las unidades de dibujo (un nombre como `1:75` ofrece sus propios números; pulse {{key:Enter}} para tomarlos). `Edit`, `Delete`, `List` y `Reset` trabajan sobre la misma lista; `Reset` vuelve a la lista estándar. Sus escalas aparecen después de las estándar en la lista de escalas de ventana gráfica de Propiedades y en el cuadro {{ui:Plot to PDF}}; una ventana gráfica a esa escala muestra su nombre, y las escalas se guardan en el dibujo (DWG y DXF 2000) como la lista de escalas del dibujo. Un dibujo abierto desde otro programa trae su lista; las escalas que coinciden con una estándar no se muestran dos veces.

Cuando una ventana gráfica se apunta con {{ui:Show the whole model}} o {{ui:Pick a window on the model…}}, CadCraft elige la escala estándar más grande que quepa. {{ui:Fit the whole model}} fija en cambio una escala exacta, que se lee como una razón simple.

## Tamaños en papel y en el modelo

Los tamaños de texto y de cota están en las unidades del espacio donde dibuja.

| Lo que quiere en papel | Dibujado en una hoja | Dibujado en el modelo a 1:50 (dibujo en mm) | Dibujado en el modelo a 1/4" = 1'-0" (dibujo en pulgadas) |
|---|---|---|---|
| Texto de 2.5 mm | 2.5 | 125 | — |
| Texto de 3/32" | 0.09375 | — | 4.5 |

Para cotas, mantenga los tamaños como tamaños de papel y fije la escala general ({{cmd:DIMSCALE}}) a la escala de trazado: 50 para 1:50, 48 para 1/4" = 1'-0". Vea [Fijar tamaños de cota](topic:dimension-settings).

## Anotar por escala

Dibuje el modelo a tamaño real y deje que CadCraft haga las cuentas de arriba por usted.

1. Seleccione el texto o las cotas que deben conservar su tamaño en papel. En Propiedades marque {{ui:Annotative}}. {{ui:Size on paper}} muestra entonces, por ejemplo, `2.5 mm a 1:50`.
2. Escriba {{cmd:ANNOSCALE}} y la escala a la que se imprimirá el dibujo, como `1:100`.

Cada texto y cota anotativa se redimensiona para que se imprima del mismo tamaño en la nueva escala: el texto de 2.5 mm mide 125 de alto en un dibujo en milímetros a 1:50, y 250 a 1:100. El ancho de un párrafo cambia con ello; el texto, las flechas y los espacios de una cota cambian juntos (su escala general). Es un paso de deshacer, y los objetos no anotativos nunca se cambian.

El ajuste se guarda en DWG y DXF: otros programas leen la marca anotativa, y CadCraft también conserva la escala a la que se dimensiona cada objeto.

Si su oficina fija alturas en papel en el complemento Políticas predeterminadas (Parámetros › Global › Políticas predeterminadas › Tamaños de anotación en papel), {{cmd:ANNOSCALE}} también fija la altura con la que empieza el texto nuevo a la altura de la oficina para notas a esa escala. Vea [Políticas predeterminadas](topic:default-policies).

### Un objeto a varias escalas

Una hoja muestra a menudo la misma planta a 1:100 y una parte a 1:50. Dé a las notas y cotas ambas escalas, y cada ventana gráfica las muestra a su tamaño en papel:

1. Seleccione el texto y las cotas anotativas, y escriba `OBJECTSCALE`.
2. Elija `Add` y escriba la escala, por ejemplo `1:50`. (`Current scale` agrega la escala de anotación del dibujo; `List` muestra lo que conserva cada objeto; `Delete` quita una.)

Una ventana gráfica cuya escala está en la lista de un objeto lo muestra al tamaño de esa escala: el texto de 2.5 mm se dibuja de 250 de alto a través de una ventana de 1:100, y de 125 a través de una de 1:50, en pantalla y en el trazado. El objeto se queda donde está; solo cambia su tamaño. En una ventana gráfica con una escala que no está en la lista de un objeto, el objeto se muestra al tamaño que tiene, hasta que escriba `ANNOALLVISIBLE` y elija `OFF`: entonces se omite allí. {{cmd:ANNOSCALE}} redimensiona los objetos que listan la nueva escala y deja los demás como están.

Las listas se guardan en DWG y DXF como datos propios de CadCraft. Otro programa ve cada objeto como anotativo, a la única escala a la que está dimensionado. El interruptor ANNOALLVISIBLE no se guarda en el archivo.

## Grosores de línea y tipos de línea

Una capa, o un objeto, puede tener un **grosor de línea** (de 0.05 a 2.11 mm) y un **tipo de línea** (discontinua, oculta, centro, fantasma, punto…). Configúrelos en el panel derecho: sin nada seleccionado, {{ui:Linetype}} y {{ui:Lineweight}} bajo {{ui:Current settings}} son lo que reciben los objetos nuevos ({{ui:By layer}} para seguir su capa), y los dos bajo {{ui:Layer …}} son los de la capa actual. Con objetos seleccionados, las mismas dos filas y {{ui:Linetype scale}} cambian esos objetos. Los comandos son {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) y {{cmd:LTSCALE}} (`LTS`).

Los tipos de línea se ven en pantalla y en los trazados. Sus guiones están en unidades de dibujo: un dibujo métrico usa los tamaños ISO (DASHED: guiones de 12.7 mm), un dibujo en pulgadas usa los de pulgadas (0.5"). Si los guiones se ven demasiado pequeños o demasiado grandes, cambie la {{ui:Linetype scale}} del dibujo (LTSCALE): cada guion y cada espacio se multiplica por ella; la escala propia de un objeto la multiplica otra vez. Un patrón demasiado fino para verse se dibuja como línea sólida.

Los grosores de línea se imprimen en los trazados, en mm sobre el papel sin importar la escala. Las líneas con grosor {{ui:Default}} usan el ancho de pluma elegido en el cuadro {{ui:Plot to PDF}} (de 0.13 a 0.70 mm; 0.25 mm para empezar); un grosor de 0 se imprime como la línea más delgada. En pantalla cada línea mide un píxel hasta que pulse {{ui:LWT}} en la barra de estado (o escriba {{cmd:LWDISPLAY}}): entonces un grosor mayor de 0.25 mm se dibuja más ancho (0.5 mm = 2 píxeles) en el modelo, y en su ancho real sobre el papel en una hoja. La elección se guarda en este navegador.

## El estándar de oficina

Una oficina puede guardar sus alturas de texto en papel, capas, campos de cajetín y plantillas en un solo registro, el estándar de oficina. CadCraft lo lee en este orden: el registro propio del dibujo (fijado con {{cmd:OFFICESTANDARD}} › `Import`, guardado en el archivo), el estándar compartido de su equipo, y luego sus Políticas predeterminadas. Los textos y cotas anotativos toman su altura en papel del estándar a la escala de anotación. Un estándar vacío no cambia nada. {{cmd:OFFICESTANDARD}} › `Layers` agrega a un dibujo las capas de oficina que le faltan.

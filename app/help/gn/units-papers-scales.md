---
title: Unidades, tamaños de papel y escalas
summary: Qué significan las unidades de dibujo en CadCraft, los tamaños de papel para hojas y trazados, cada escala estándar, y cómo se relacionan el texto y los tamaños de cota con la escala de trazado.
keywords: unidades, milímetros, pulgadas, pies, pies y pulgadas, arquitectónico, ingeniería, fraccionario, fracciones, lunits, formato de longitud, precisión, metros, tamaño de papel, a3, a1, arch d, ansi, tabloid, carta, escala, 1:100, 1/4 pulgada, escala arquitectónica, escala de ingeniería, insunits
from: 8346236a
---

## Unidades de dibujo

Dibujás a tamaño real, en unidades de dibujo. Lo que vale una unidad es la configuración **Unidades** del plano:

1. Presioná {{key:Esc}} para que no quede nada seleccionado, en la pestaña {{ui:Model}}.
2. En {{ui:Current settings}}, elegí {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} o {{ui:Feet}}.

Las cotas pueden escribir sus longitudes en milímetros, centímetros, metros o kilómetros sin importar la unidad del plano: ver [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Cambiar las unidades no cambia ningún tamaño. Cambia cómo se leen las escalas en hojas y trazados, y cuáles escalas se ofrecen. Un plano abierto desde un DWG o DXF conserva las unidades guardadas en el archivo; la sección {{ui:Drawing}} del panel izquierdo las muestra.

Un plano {{ui:Unitless}} se trata como si estuviera en la unidad del papel: milímetros en papel ISO, pulgadas en papel US.

## Pies y pulgadas, y fracciones

Cómo se **escriben y se tipean** las longitudes es una configuración aparte, el formato de longitud. No cambia la geometría, solo cómo se ven los números y lo que podés escribir.

1. Presioná {{key:Esc}} para que no quede nada seleccionado, en la pestaña {{ui:Model}}.
2. En {{ui:Current settings}}, elegí {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) o {{ui:Scientific}} (`1.505E+02`).
3. Elegí {{ui:Precision}}: cantidad de decimales, o la fracción más chica (1/16 es la opción habitual para arquitectura).

O escribí {{cmd:UNITS}} (`UN`) y respondé sus dos preguntas.

Con {{ui:Architectural}} o {{ui:Engineering}}, una unidad de dibujo es una pulgada, como en AutoCAD: poné {{ui:Units}} en {{ui:Inches}} también. Después podés escribir longitudes en pies y pulgadas en cualquier lugar donde se pida una longitud, y en los cuadros de {{ui:Properties}}:

| Escribís | Significa |
|---|---|
| `12'6"` o `12'-6"` | 12 pies 6 pulgadas (150) |
| `12'6-1/2"` | 12 pies 6½ pulgadas. Usá un guion antes de la fracción: {{key:Space}} equivale a {{key:Enter}} en la línea de comandos. |
| `12'` | 12 pies |
| `6"` o `6` | 6 pulgadas: un número simple son pulgadas |
| `1/2`, `6-1/2` | las fracciones funcionan en cualquier formato |

Los puntos aceptan las mismas longitudes: `@12'6",0` o `@10'<90`. Los ángulos siguen en grados.

El formato aparece en el historial ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: las áreas en pulgadas cuadradas y pies cuadrados), en {{ui:Properties}}, en las coordenadas de la barra de estado, y en las **cotas nuevas**. Las hojas conservan sus unidades de papel (milímetros o pulgadas) como decimales.

:::note
El formato de longitud se guarda en archivos DWG y DXF, y cada cota conserva el suyo: un plano guardado se abre otra vez tal como lo dejaste.
:::

## Tamaños de papel

Las hojas y los trazados de modelo usan estos tamaños, en cualquier orientación:

| Papel | Tamaño | Unidad en la hoja |
|---|---|---|
| ISO A4 | 297 × 210 mm | milímetros |
| ISO A3 | 420 × 297 mm | milímetros |
| ISO A2 | 594 × 420 mm | milímetros |
| ISO A1 | 841 × 594 mm | milímetros |
| ISO A0 | 1189 × 841 mm | milímetros |
| Letter | 11 × 8.5 in | pulgadas |
| Legal | 14 × 8.5 in | pulgadas |
| Tabloid / ANSI B | 17 × 11 in | pulgadas |
| ANSI C | 22 × 17 in | pulgadas |
| ANSI D | 34 × 22 in | pulgadas |
| ARCH C | 24 × 18 in | pulgadas |
| ARCH D | 36 × 24 in | pulgadas |
| ARCH E | 48 × 36 in | pulgadas |

Las hojas nuevas empiezan en ISO A3 para planos métricos y sin unidades, y en Tabloid para planos en pulgadas o pies. Los trazados de modelo empiezan en ISO A4 o Letter de la misma manera, y después recuerdan tu última elección. Las hojas de archivos abiertos conservan su propio tamaño, que se muestra como "Personalizado" cuando no es uno de estos.

## Escalas

Una escala `1:n` significa que una unidad en el papel muestra n de la misma unidad en el modelo, así que 1:100 muestra 1 m de edificio como 10 mm de papel. CadCraft lo calcula a partir de las unidades del plano y de la unidad del papel.

**Escalas métricas**, ofrecidas para cualquier plano: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitectónicas**, ofrecidas cuando las unidades son pulgadas o pies: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de ingeniería**, ofrecidas cuando las unidades son pulgadas o pies: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Tus propias escalas.** Escribí `SCALELISTEDIT` (o `SCALELIST`) para agregar una escala propia, como 1:75 o una escala de sitio de 2 de papel : 300 de dibujo. `Add` pide un nombre, después las unidades de papel y las del dibujo (un nombre como `1:75` ofrece sus propios números; presioná {{key:Enter}} para tomarlos). `Edit`, `Delete`, `List` y `Reset` funcionan sobre la misma lista; `Reset` vuelve a la lista estándar. Tus escalas aparecen después de las estándar en la lista de escalas de vista de Propiedades y en el cuadro {{ui:Plot to PDF}}; una vista a esa escala se lee con su nombre, y se guardan en el plano (DWG y DXF 2000) como la lista de escalas del plano. Un plano abierto desde otro programa trae su lista; las escalas que coinciden con una estándar no se muestran dos veces.

Cuando una vista se apunta con {{ui:Show the whole model}} o {{ui:Pick a window on the model…}}, CadCraft elige la mayor escala estándar que entra. {{ui:Fit the whole model}} fija una escala exacta en cambio, que se lee como una proporción simple.

## Tamaños en el papel y en el modelo

El tamaño del texto y de las cotas está en las unidades del espacio donde dibujás.

| Querés en el papel | Dibujado en la hoja | Dibujado en el modelo a 1:50 (plano en mm) | Dibujado en el modelo a 1/4" = 1'-0" (plano en pulgadas) |
|---|---|---|---|
| texto de 2.5 mm | 2.5 | 125 | — |
| texto de 3/32" | 0.09375 | — | 4.5 |

Para las cotas, mantené los tamaños como tamaños de papel y poné la escala general ({{cmd:DIMSCALE}}) en la escala de trazado: 50 para 1:50, 48 para 1/4" = 1'-0". Ver [Configurar tamaños de cota](topic:dimension-settings).

## Anotar por escala

Dibujá el modelo a tamaño real y dejá que CadCraft haga las cuentas de arriba por vos.

1. Seleccioná el texto o las cotas que deben mantener su tamaño en el papel. En Propiedades marcá {{ui:Annotative}}. {{ui:Size on paper}} entonces muestra, por ejemplo, `2.5 mm a 1:50`.
2. Escribí {{cmd:ANNOSCALE}} y la escala con la que se va a imprimir el plano, como `1:100`.

Cada texto y cota anotativa se redimensiona para que se imprima con el mismo tamaño en la nueva escala: el texto de 2.5 mm mide 125 de alto en un plano en milímetros a 1:50 y 250 de alto a 1:100. El ancho de un párrafo cambia con él; el texto de una cota, sus flechas y sus espacios cambian juntos (su escala general). Es un solo paso de deshacer, y los objetos que no son anotativos nunca se cambian.

La configuración se guarda en DWG y DXF: otros programas leen la marca anotativa, y CadCraft además conserva la escala para la que está dimensionado cada objeto.

Si tu oficina fija alturas en papel en el complemento Default Policies (Configuración › Global › Default Policies › Tamaños de anotación en papel), {{cmd:ANNOSCALE}} también pone la altura con la que empieza el texto nuevo en la altura de la oficina para notas a esa escala. Ver [Default Policies](topic:default-policies).

### Un objeto en varias escalas

Una hoja suele mostrar la misma planta a 1:100 y una parte de ella a 1:50. Dale a las notas y cotas las dos escalas y cada vista las muestra en su tamaño de papel:

1. Seleccioná el texto y las cotas anotativas y escribí `OBJECTSCALE`.
2. Elegí `Add` y escribí la escala, por ejemplo `1:50`. (`Current scale` agrega la escala de anotación del plano; `List` muestra lo que conserva cada objeto; `Delete` quita una.)

Una vista cuya escala está en la lista de un objeto lo muestra en el tamaño de esa escala: el texto de 2.5 mm se dibuja de 250 de alto en una vista 1:100 y de 125 de alto en una 1:50, en pantalla y en el trazado. El objeto se queda donde está; solo cambia su tamaño. En una vista a una escala que no está en la lista, el objeto se muestra con el tamaño que ya tiene, hasta que escribas `ANNOALLVISIBLE` y elijas `OFF`: entonces se omite allí. {{cmd:ANNOSCALE}} redimensiona los objetos que listan la nueva escala y deja los demás como están.

Las listas se guardan en DWG y DXF como datos propios de CadCraft. Otro programa ve cada objeto como anotativo, en la única escala para la que está dimensionado. El interruptor ANNOALLVISIBLE no se guarda en el archivo.

## Grosores y tipos de línea

Una capa, o un objeto, puede tener un **grosor de línea** (de 0.05 a 2.11 mm) y un **tipo de línea** (discontinua, oculta, de centro, fantasma, de puntos…). Configuralos en el panel derecho: sin nada seleccionado, {{ui:Linetype}} y {{ui:Lineweight}} bajo {{ui:Current settings}} son los que reciben los objetos nuevos ({{ui:By layer}} para seguir su capa), y los dos bajo {{ui:Layer …}} son los de la capa actual. Con objetos seleccionados, esas mismas dos filas y {{ui:Linetype scale}} cambian esos objetos. Los comandos son {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) y {{cmd:LTSCALE}} (`LTS`).

Los tipos de línea se muestran en pantalla y en los trazados. Sus guiones están en unidades de dibujo: un plano métrico usa los tamaños ISO (DASHED: guiones de 12.7 mm), un plano en pulgadas usa los de pulgadas (0.5"). Si los guiones se ven demasiado chicos o demasiado grandes, cambiá la {{ui:Linetype scale}} del plano (LTSCALE): cada guion y cada espacio se multiplica por ella; la escala propia de un objeto la multiplica otra vez. Un patrón demasiado fino para verse se dibuja como línea continua.

Los grosores se imprimen en los trazados, en mm sobre el papel sin importar la escala. Las líneas con el grosor {{ui:Default}} usan el ancho de pluma elegido en el cuadro {{ui:Plot to PDF}} (de 0.13 a 0.70 mm; 0.25 mm para empezar); un grosor de 0 se imprime como la línea más fina. En pantalla cada línea tiene un píxel de ancho hasta que presionás {{ui:LWT}} en la barra de estado (o escribís {{cmd:LWDISPLAY}}): entonces un grosor mayor a 0.25 mm se dibuja más ancho (0.5 mm = 2 píxeles) en el modelo, y en su ancho real sobre el papel en una hoja. La elección se guarda en este navegador.

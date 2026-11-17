---
title: Unidades, tamaños de papel y escalas
summary: Qué significan las unidades de dibujo en CadCraft, los tamaños de papel de hojas y trazados, todas las escalas estándar, y cómo se relacionan los tamaños de texto y de cota con la escala de trazado.
keywords: unidades, milímetros, pulgadas, pies, pies y pulgadas, arquitectónica, ingeniería, fraccionaria, fracciones, lunits, formato de longitud, precisión, metros, tamaño de papel, a3, a1, arch d, ansi, tabloid, letter, escala, 1:100, 1/4 pulgada, escala arquitectónica, escala de ingeniería, insunits
from: 8346236a
---

## Unidades de dibujo

Dibuje a tamaño real, en unidades de dibujo. Lo que representa una unidad es el ajuste **Unidades** del dibujo:

1. Pulse {{key:Esc}} para que nada esté seleccionado, en la pestaña {{ui:Modelo}}.
2. En {{ui:Parámetros actuales}}, elija {{ui:Unidades}}: {{ui:Sin unidades}}, {{ui:Milímetros}}, {{ui:Centímetros}}, {{ui:Metros}}, {{ui:Pulgadas}} o {{ui:Pies}}.

Las cotas pueden escribir sus longitudes en milímetros, centímetros, metros o kilómetros, sea cual sea la unidad del dibujo: consulte [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Cambiar las unidades no cambia el tamaño de nada. Cambia cómo se leen las escalas en las hojas y en los trazados, y qué escalas se ofrecen. Un dibujo abierto desde un DWG o un DXF conserva las unidades guardadas en el archivo; la sección {{ui:Dibujo}} del panel izquierdo las muestra.

Un dibujo {{ui:Sin unidades}} se trata como si estuviera en la unidad del papel: milímetros en papel ISO, pulgadas en papel estadounidense.

## Pies y pulgadas, y fracciones

Cómo se **escriben y se introducen** las longitudes es un ajuste aparte, el formato de longitud. No cambia la geometría, solo cómo se ven los números y qué puede escribir.

1. Pulse {{key:Esc}} para que nada esté seleccionado, en la pestaña {{ui:Modelo}}.
2. En {{ui:Parámetros actuales}}, elija {{ui:Formato de longitud}}: {{ui:Decimales}} (`150.5`), {{ui:Arquitectónicas}} (`12'-6 1/2"`), {{ui:Ingeniería}} (`12'-6.5"`), {{ui:Fraccionarias}} (`150 1/2`) o {{ui:Científicas}} (`1.505E+02`).
3. Elija {{ui:Precisión}}: decimales, o la fracción más pequeña (1/16 es la opción habitual para arquitectura).

O escriba {{cmd:UNITS}} (`UN`) y responda sus dos preguntas.

Con {{ui:Arquitectónicas}} o {{ui:Ingeniería}}, una unidad de dibujo equivale a una pulgada, como en AutoCAD: establezca también {{ui:Unidades}} en {{ui:Pulgadas}}. Entonces puede escribir longitudes en pies y pulgadas en cualquier lugar donde se pida una longitud, y en los cuadros de {{ui:Propiedades}}:

| Escribe | Significa |
|---|---|
| `12'6"` o `12'-6"` | 12 pies y 6 pulgadas (150) |
| `12'6-1/2"` | 12 pies y 6½ pulgadas. Use un guion antes de la fracción: {{key:Space}} equivale a {{key:Enter}} en la línea de comandos. |
| `12'` | 12 pies |
| `6"` o `6` | 6 pulgadas: un número sin unidad son pulgadas |
| `1/2`, `6-1/2` | las fracciones funcionan en cualquier formato |

Los puntos aceptan las mismas longitudes: `@12'6",0` o `@10'<90`. Los ángulos siguen en grados.

El formato aparece en el historial ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: las áreas en pulgadas cuadradas y pies cuadrados), en {{ui:Propiedades}}, en las coordenadas de la barra de estado y en las **cotas nuevas**. Las hojas conservan sus unidades de papel (milímetros o pulgadas) como decimales.

:::note
El formato de longitud se guarda en los archivos DWG y DXF, y cada cota conserva el suyo: un dibujo guardado se vuelve a abrir como lo dejó.
:::

## Tamaños de papel

Las hojas y los trazados de modelo usan estos tamaños, en cualquiera de las dos orientaciones:

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

Las hojas nuevas empiezan en ISO A3 para dibujos métricos y sin unidades, y en Tabloid para dibujos en pulgadas o en pies. Los trazados de modelo empiezan en ISO A4 o en Letter de la misma manera, y después recuerdan su última elección. Las hojas de archivos abiertos conservan su propio tamaño, que se muestra como "Personalizado" cuando no es uno de estos.

## Escalas

Una escala `1:n` significa que una unidad sobre el papel muestra n de la misma unidad en el modelo, así que 1:100 muestra 1 m de edificio como 10 mm de papel. CadCraft lo calcula a partir de las unidades del dibujo y de la unidad del papel.

**Escalas métricas**, ofrecidas para cualquier dibujo: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitectónicas**, ofrecidas cuando las unidades son pulgadas o pies: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de ingeniería**, ofrecidas cuando las unidades son pulgadas o pies: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Sus propias escalas.** Escriba `SCALELISTEDIT` (o `SCALELIST`) para añadir una escala propia, como 1:75 o una escala de obra de 2 de papel : 300 de dibujo. `Add` pide un nombre, y después las unidades de papel y las de dibujo (un nombre como `1:75` ofrece sus propios números; pulse {{key:Enter}} para tomarlos). `Edit`, `Delete`, `List` y `Reset` actúan sobre la misma lista; `Reset` vuelve a la lista estándar. Sus escalas aparecen después de las estándar en la lista de escalas de ventana gráfica de Propiedades y en el cuadro {{ui:Trazar a PDF}}; una ventana gráfica a esa escala se lee con su nombre, y las escalas se guardan en el dibujo (DWG y DXF 2000) como la lista de escalas del dibujo. Un dibujo abierto desde otro programa trae su lista; las escalas que coinciden con una estándar no se muestran dos veces.

Cuando una ventana gráfica se apunta con {{ui:Mostrar todo el modelo}} o {{ui:Designar una ventana en el modelo…}}, CadCraft elige la mayor escala estándar que cabe. {{ui:Ajustar todo el modelo}} establece una escala exacta, que se lee como una razón simple.

## Tamaños en papel y en el modelo

Los tamaños de texto y de cota están en las unidades del espacio en el que dibuja.

| Lo quiere en papel | Dibujado en una hoja | Dibujado en el modelo a 1:50 (dibujo en mm) | Dibujado en el modelo a 1/4" = 1'-0" (dibujo en pulgadas) |
|---|---|---|---|
| texto de 2.5 mm | 2.5 | 125 | — |
| texto de 3/32" | 0.09375 | — | 4.5 |

Para las cotas, mantenga los tamaños como tamaños de papel y establezca la escala general ({{cmd:DIMSCALE}}) a la escala de trazado: 50 para 1:50, 48 para 1/4" = 1'-0". Consulte [Establecer tamaños de cota](topic:dimension-settings).

## Anotar por escala

Dibuje el modelo a tamaño real y deje que CadCraft haga las cuentas anteriores por usted.

1. Seleccione el texto o las cotas que deben mantener su tamaño en papel. En Propiedades marque {{ui:Anotativo}}. {{ui:Tamaño en papel}} muestra entonces, por ejemplo, `2.5 mm at 1:50`.
2. Escriba {{cmd:ANNOSCALE}} y la escala a la que se imprimirá el dibujo, como `1:100`.

Cada texto y cota anotativa se redimensiona para que se imprima con el mismo tamaño en la nueva escala: un texto de 2.5 mm mide 125 de alto en un dibujo en milímetros a 1:50, y 250 de alto a 1:100. El ancho de un párrafo cambia con él; el texto de una cota, sus flechas y sus separaciones cambian juntos (su escala general). Es un solo paso de deshacer, y los objetos no anotativos nunca se cambian.

El ajuste se guarda en DWG y DXF: otros programas leen la marca de anotativo, y CadCraft también conserva la escala para la que está dimensionado cada objeto.

Si su oficina fija alturas de papel en el complemento Políticas predeterminadas (Ajustes › Global › Políticas predeterminadas › Tamaños de anotación en papel), {{cmd:ANNOSCALE}} también establece la altura con la que empieza el texto nuevo en la altura de la oficina para notas a esa escala. Consulte [Políticas predeterminadas](topic:default-policies).

### Un objeto a varias escalas

Una hoja muestra a menudo el mismo plano a 1:100 y una parte a 1:50. Dé a las notas y cotas ambas escalas, y cada ventana gráfica las mostrará con su tamaño de papel:

1. Seleccione el texto y las cotas anotativos y escriba `OBJECTSCALE`.
2. Elija `Add` y escriba la escala, por ejemplo `1:50`. (`Current scale` añade la escala de anotación del dibujo; `List` muestra lo que conserva cada objeto; `Delete` quita una.)

Una ventana gráfica cuya escala está en la lista de un objeto lo muestra con el tamaño de esa escala: un texto de 2.5 mm se dibuja con 250 de alto en una ventana gráfica 1:100, y con 125 en una de 1:50, en pantalla y en el trazado. El objeto se queda donde está; solo cambia su tamaño. En una ventana gráfica con una escala que no está en la lista de un objeto, este se muestra con el tamaño que tiene, hasta que escriba `ANNOALLVISIBLE` y elija `OFF`: entonces se omite allí. {{cmd:ANNOSCALE}} redimensiona los objetos que tienen la nueva escala en su lista y deja los demás como están.

Las listas se guardan en DWG y DXF como datos propios de CadCraft. Otro programa ve cada objeto como anotativo, a la única escala para la que está dimensionado. El interruptor ANNOALLVISIBLE no se guarda en el archivo.

## Grosores de línea y tipos de línea

Una capa, o un objeto, puede tener un **grosor de línea** (de 0.05 a 2.11 mm) y un **tipo de línea** (discontinua, oculta, eje, fantasma, punto…). Establézcalos en el panel derecho: sin nada seleccionado, {{ui:Tipo de línea}} y {{ui:Grosor de línea}} en {{ui:Parámetros actuales}} son los que reciben los objetos nuevos ({{ui:PorCapa}} para seguir su capa), y los dos bajo Capa … son los de la capa actual. Con objetos seleccionados, esas mismas dos filas y {{ui:Escala de tipo de línea}} cambian esos objetos. Los comandos son {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) y {{cmd:LTSCALE}} (`LTS`).

Los tipos de línea se muestran en pantalla y en los trazados. Sus guiones van en unidades de dibujo: un dibujo métrico usa los tamaños ISO (DASHED: guiones de 12.7 mm), y un dibujo en pulgadas, los de pulgadas (0.5"). Si los guiones se ven demasiado pequeños o demasiado grandes, cambie la {{ui:Escala de tipo de línea}} del dibujo (LTSCALE): cada guion y cada hueco se multiplica por ella; la escala propia de un objeto la multiplica de nuevo. Un patrón demasiado fino para verse se dibuja como línea continua.

Los grosores de línea se imprimen en los trazados, en mm sobre el papel, sea cual sea la escala. Las líneas con el grosor {{ui:Por defecto}} usan el ancho de pluma elegido en el cuadro {{ui:Trazar a PDF}} (de 0.13 a 0.70 mm; 0.25 mm al principio); un grosor de 0 se imprime como la línea más fina. En pantalla, cada línea mide un píxel de ancho hasta que pulse {{ui:LWT}} en la barra de estado (o escriba {{cmd:LWDISPLAY}}): entonces, un grosor superior a 0.25 mm se dibuja más ancho (0.5 mm = 2 píxeles) en el modelo, y con su ancho real en el papel en una hoja. La elección se conserva en este navegador.

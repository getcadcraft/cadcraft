---
title: Definir tamaños, decimales y escala de cotas
summary: Elija la altura del texto, el tamaño de flecha, los decimales y la escala global para las cotas nuevas, cambie las existentes y entienda cómo funcionan los estilos de cota en CadCraft.
keywords: estilo de cota, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, escala global, decimales, tamaño de flecha, escala de anotación, dimtextunit, unidades en el texto, mm, cm, m, km, milímetros, metros, dimlfac, dimpost
from: 8ec82a07
---

## Lo que aprenderá

Qué tamaño tienen el texto y las flechas de cota, cómo definirlos para un dibujo impreso a 1:50 o 1:100, y cómo cambiar las cotas que ya hizo.

## Cómo funcionan los tamaños de cota

Cada cota lleva su propio conjunto de tamaños: altura de texto, tamaño de flecha, decimales, el margen alrededor del texto, cuánto sobresalen las líneas de extensión más allá de la línea de cota y a qué distancia empiezan del objeto. Los valores predeterminados se acercan al estilo ISO habitual:

| Ajuste | Predeterminado | Comando |
|---|---|---|
| Altura de texto | 2.5 | {{cmd:DIMTXT}} |
| Tamaño de flecha | 2.5 | {{cmd:DIMASZ}} |
| Decimales | 2 (se omiten los ceros finales) | {{cmd:DIMDEC}} |
| Margen alrededor del texto | 0.625 | {{cmd:DIMGAP}} |
| Prolongación más allá de la línea de cota | 1.25 | {{cmd:DIMEXE}} |
| Separación del objeto | 0.625 | {{cmd:DIMEXO}} |
| {{ui:Escala global}} | 1 | {{cmd:DIMSCALE}} |

Todos los tamaños se multiplican por la **escala global**. Defina los tamaños como los quiere en papel (texto de 2.5 mm) y fije la escala global a la escala de impresión (50 para 1:50). Así el texto mide 2.5 × 50 = 125 unidades de dibujo de alto, y se imprime a 2.5 mm.

:::note
Los estilos de cota con nombre se gestionan con {{cmd:DIMSTYLE}}: vea la sección siguiente. Cada cota también conserva los ajustes con los que se creó, así que aún puede cambiar una sola cota en {{ui:Propiedades}}.
:::

## Definir los tamaños para cotas nuevas

Cualquiera de las dos formas siguientes cambia solo las cotas que haga después.

### En el panel Parámetros actuales

1. Pulse {{key:Esc}} para no tener nada seleccionado. En la pestaña {{ui:Modelo}} el panel derecho muestra {{ui:Parámetros actuales}}.
2. Desplácese por el panel hasta {{ui:Cotas nuevas}}, después de las filas de capa, color, unidades y {{ui:Capa 0}} (en una pantalla pequeña empieza bajo el borde inferior). Haga clic en {{ui:Escala global}}, escriba `50` y pulse {{key:Enter}}.
3. Defina {{ui:Altura de texto}}, {{ui:Tamaño de flecha}} y {{ui:Decimales}} del mismo modo si quiere otros valores.

La barra de estado confirma cada uno, por ejemplo "Escala global para cotas nuevas: 50".

### En la línea de comandos

1. Escriba `DIMSCALE` y pulse {{key:Enter}}.
2. En `Introduzca nuevo valor para DIMSCALE <1>`, escriba `50` y pulse {{key:Enter}}.

El historial confirma "DIMSCALE = 50. Las cotas nuevas lo usan; seleccione las existentes para cambiar las suyas." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} y {{cmd:DIMEXO}} funcionan igual. Pulse {{key:Enter}} en la indicación para mantener el valor actual.

### Pies y pulgadas en cotas

Las cotas nuevas usan el formato de longitud del dibujo: defínalo con {{ui:Formato de longitud}} en {{ui:Parámetros actuales}} o con {{cmd:UNITS}} (vea [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions)), y la siguiente cota leerá `12'-6 1/2"`. {{cmd:DIMLUNIT}} define solo el formato de las cotas (2 decimales, 3 ingenieril, 4 arquitectónico, 5 fraccionario). Para una cota que ya hizo, selecciónela y elija {{ui:Formato}} en {{ui:Propiedades}}; con un formato fraccionario, su cuadro {{ui:Fracción}} toma la potencia de dos (4 = 1/16).

## Cotas en mm, cm, m o km

Una cota mide en unidades de dibujo. Puede escribir esa longitud en milímetros, centímetros, metros o kilómetros en su lugar, con la unidad después del número: un muro de 1250 mm se lee `1250 mm`, `125 cm`, `1.25 m` o `0.00125 km`.

1. Defina primero las {{ui:Unidades}} del dibujo en {{ui:Parámetros actuales}} (vea [Unidades, tamaños de papel y escalas](topic:units-papers-scales#drawing-units)), para que CadCraft sepa cuánto es una unidad de dibujo. Un dibujo sin unidades se lee como milímetros, y {{cmd:DIMTEXTUNIT}} lo indica.
2. Para cotas nuevas: pulse {{key:Esc}} para no tener nada seleccionado y, en {{ui:Cotas nuevas}}, elija {{ui:Unidades en el texto}}: {{ui:Unidades del dibujo}}, `mm`, `cm`, `m` o `km`.
3. Para cotas que ya hizo: selecciónelas y, en {{ui:Propiedades}} › {{ui:Unidades principales}}, elija {{ui:Unidades en el texto}}.

O escriba {{cmd:DIMTEXTUNIT}} (`DTU`) y responda `D`, `MM`, `CM`, `M` o `KM`: con cotas seleccionadas las cambia (en un solo paso de deshacer); sin nada seleccionado, define las cotas nuevas.

{{ui:Decimales}} ({{cmd:DIMDEC}}) sigue fijando cuántas cifras decimales se ven: con metros y 3 decimales, 1234 mm se lee `1.234 m`. El texto se escribe como número decimal. En una hoja, las cotas se miden en la unidad de papel de la hoja (milímetros o pulgadas).

Un DWG o DXF guardado conserva la elección como escala de medida de la cota (DIMLFAC) y como sufijo (DIMPOST, ` m`), para que otros programas muestren el mismo texto. Si cambia después las {{ui:Unidades}} del dibujo, las cotas escritas en mm, cm, m o km se reajustan, para que sigan diciendo la longitud correcta. {{ui:Definido a mano (escala o sufijo)}} significa que la {{ui:Escala de medida}} o el sufijo de la cota se fijaron de otra manera; elija una unidad para sustituirlos.

## Cambiar cotas que ya hizo

1. Haga clic en una cota. El encabezado del panel derecho dice {{ui:Cota}}.
2. Los ajustes están en secciones; desplácese por el panel para llegar a las siguientes:
   - {{ui:General}}: {{ui:Estilo de cota}}
   - {{ui:Geometría}}: {{ui:Tipo}} y {{ui:Medida}} (solo lectura)
   - {{ui:Texto}}: {{ui:Modificación de texto}} y {{ui:Altura de texto}}
   - {{ui:Líneas y flechas}}: {{ui:Tamaño de flecha}}
   - {{ui:Ajustar}}: {{ui:Escala global}}
   - {{ui:Unidades principales}}: {{ui:Decimales}}
3. Escriba un valor nuevo y pulse {{key:Enter}}.

La cota se redibuja al momento. En cotas angulares, {{ui:Decimales (°)}} fija los decimales del ángulo.

:::note
Con varias cotas seleccionadas, el panel muestra las filas que comparten, y un valor que difiere entre ellas aparece como {{ui:Varía}}. Un valor que escriba cambia todas las cotas seleccionadas en un solo paso, así que un {{key:Mod+Z}} las devuelve todas.
:::

## Cotas de dibujos abiertos

Una cota de un DWG o DXF abierto se muestra exactamente como la dibujó el otro programa. Su panel dice "Se muestra como la dibujó el programa que la creó. Si la cambia, CadCraft la vuelve a dibujar con su propio estilo." En cuanto cambia cualquier valor, mueve un pinzamiento o desplaza la cota, CadCraft la redibuja con sus propias flechas y su propia fuente, usando los tamaños que leyó del archivo.

Algunas cotas solo se pueden leer tal como se dibujaron, no como cotas editables; el panel muestra entonces "Dibujada desde" y un nombre de bloque, y el cuadro "Acerca de este archivo" las cuenta.

## Errores comunes

- **Cambiar DIMSCALE no cambió nada en pantalla.** El ajuste es para cotas nuevas. Seleccione las existentes y cambie {{ui:Escala global}} en el panel.
- **Los decimales muestran menos cifras de las fijadas.** Se omiten los ceros finales: con 2 decimales se ve `1250` y `1250.5`, no `1250.00`.
- **El texto tiene la altura correcta en papel en una ventana gráfica, pero está mal en un trazado del modelo.** La escala global debe coincidir con la escala de impresión. Imprimir en Ajustar al papel da una escala irregular; elija una escala estándar en el diálogo de impresión.
- **Unidades como mm o m en el texto.** Elija {{ui:Unidades en el texto}} (vea [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Para cualquier otra palabra tras el número, escríbala en una sustitución: `<> TYP.`.

## Estilos de cota con nombre

Escriba `DIMSTYLE` (`D`) para abrir el {{ui:Administrador de estilos de cota}}. Lista los estilos del dibujo, cuántas cotas usa cada uno y cuál es el actual. **Estándar** siempre está.

- {{ui:Definir actual}}: las cotas nuevas usan los ajustes de ese estilo y llevan su nombre.
- {{ui:Nuevo…}}: un estilo nuevo que empieza como copia del que elija.
- {{ui:Modificar…}}: los mismos campos que la sección de cotas de {{ui:Propiedades}} (líneas y flechas, texto, ajuste, unidades, unidades alternativas, tolerancias). Pulse {{ui:Aceptar}} y el estilo cambia, y **cada cota que lo usa cambia con él**, ajuste a ajuste. Un ajuste que cambió en una sola cota se mantiene tal cual, salvo que el estilo cambie ese ajuste.
- {{ui:Cambiar nombre…}} y {{ui:Eliminar}}: Estándar no se puede renombrar ni eliminar, como tampoco el estilo actual ni uno que usen cotas.
- {{ui:Comparar…}}: lo que difiere entre dos estilos.
- {{ui:Aplicar a la selección}}: seleccione antes las cotas; toman los ajustes del estilo y su nombre.

`-DIMSTYLE` hace lo mismo en la línea de comandos: `Restore`, `Save` (guarda los ajustes actuales, incluidos los que escribió con {{cmd:DIMTXT}} y los demás, con un nombre), `Delete`, `Apply`, `Compare`, `reName` y `List`.

Los estilos se guardan en un DWG o DXF (en su tabla de estilos de cota) y se leen de los archivos que abre. El estilo *actual* no se guarda: un dibujo se abre con Estándar como actual. Estándar conserva sus propios ajustes mientras otro estilo es el actual.

## Cambiar el texto de cota y las líneas de extensión

{{cmd:DIMEDIT}} (`DED`) trabaja con las cotas que seleccione: **Home** devuelve el texto a donde lo sitúa el estilo, **New** escribe otro texto (`<>` representa la medida), **Rotate** gira el texto, y **Oblique** inclina las líneas de extensión de las cotas lineales y alineadas hasta un ángulo que escriba (pulse {{key:Enter}} para ninguno). {{cmd:DIMTEDIT}} mueve el texto a **Left**, **Right** o **Center** de la línea de cota, o lo gira (**Angle**), o lo envía a **Home**. El texto siempre queda sobre la línea de cota: no se puede arrastrar a un lugar libre.

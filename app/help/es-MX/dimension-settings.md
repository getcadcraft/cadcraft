---
title: Defina tamaños, decimales y escala de cotas
summary: Elija la altura del texto, el tamaño de flecha, los decimales y la escala global para las cotas nuevas, cambie las existentes y entienda cómo funcionan los estilos de cota en CadCraft.
keywords: estilo de cota, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, escala global, decimales, tamaño de flecha, escala de anotación, dimtextunit, unidades en el texto, mm, cm, m, km, milímetros, metros, dimlfac, dimpost
from: 8ec82a07
---

## Lo que aprenderá

Qué tan grandes son el texto y las flechas de cota, cómo definirlos para un dibujo trazado a 1:50 o 1:100, y cómo cambiar las cotas que ya hizo.

## Cómo funcionan los tamaños de cota

Cada cota lleva su propio conjunto de tamaños: altura del texto, tamaño de flecha, decimales, el espacio alrededor del texto, cuánto sobrepasan las líneas de extensión la línea de cota y a qué distancia empiezan del objeto. Los valores predeterminados son cercanos al estilo ISO común:

| Ajuste | Predeterminado | Comando |
|---|---|---|
| Altura del texto | 2.5 | {{cmd:DIMTXT}} |
| Tamaño de flecha | 2.5 | {{cmd:DIMASZ}} |
| Decimales | 2 (se omiten los ceros finales) | {{cmd:DIMDEC}} |
| Espacio alrededor del texto | 0.625 | {{cmd:DIMGAP}} |
| Extensión más allá de la línea de cota | 1.25 | {{cmd:DIMEXE}} |
| Desfase del objeto | 0.625 | {{cmd:DIMEXO}} |
| Escala global | 1 | {{cmd:DIMSCALE}} |

Cada tamaño se multiplica por la **escala global**. Defina los tamaños como los quiere en el papel (texto de 2.5 mm), y la escala global a la escala de trazado (50 para 1:50). El texto mide entonces 2.5 × 50 = 125 unidades de dibujo de alto, y se traza con 2.5 mm.

:::note
Los estilos de cota con nombre se administran con {{cmd:DIMSTYLE}}: vea la sección siguiente. Cada cota también conserva los ajustes con que se hizo, así que todavía puede cambiar una sola cota en {{ui:Propiedades}}.
:::

## Defina los tamaños para cotas nuevas

Cualquiera de las dos formas siguientes cambia solo las cotas que haga después.

### En el panel Parámetros actuales

1. Pulse {{key:Esc}} para que no haya nada seleccionado. En la pestaña {{ui:Modelo}} el panel derecho dice {{ui:Parámetros actuales}}.
2. Desplácese por el panel hasta {{ui:Cotas nuevas}}, después de las filas de capa, color, unidades y {{ui:Capa 0}} (en una pantalla pequeña empieza debajo del borde inferior). Haga clic en {{ui:Escala global}}, escriba `50` y pulse {{key:Enter}}.
3. Defina {{ui:Altura de texto}}, {{ui:Tamaño de flecha}} y {{ui:Decimales}} de la misma manera si quiere otros valores.

La barra de estado confirma cada uno, por ejemplo "Escala global para cotas nuevas: 50".

### En la línea de comandos

1. Escriba `DIMSCALE` y pulse {{key:Enter}}.
2. En `Enter new value for DIMSCALE <1>`, escriba `50` y pulse {{key:Enter}}.

El historial confirma "DIMSCALE = 50. Las cotas nuevas lo usan; seleccione las existentes para cambiar las suyas." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} y {{cmd:DIMEXO}} funcionan igual. Pulse {{key:Enter}} en la indicación para conservar el valor actual.

### Pies y pulgadas en las cotas

Las cotas nuevas usan el formato de longitud del dibujo: defínalo con {{ui:Formato de longitud}} en {{ui:Parámetros actuales}} o con {{cmd:UNITS}} (vea [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions)), y la siguiente cota lee `12'-6 1/2"`. {{cmd:DIMLUNIT}} define solo el formato de las cotas (2 decimales, 3 de ingeniería, 4 arquitectónico, 5 fraccionario). Para una cota que ya hizo, selecciónela y elija {{ui:Formato}} en {{ui:Propiedades}}; con un formato fraccionario, su cuadro {{ui:Fracción}} toma la potencia de dos (4 = 1/16).

## Cotas en mm, cm, m o km

Una cota mide en unidades de dibujo. Puede escribir esa longitud en milímetros, centímetros, metros o kilómetros, con la unidad después del número: un muro de 1250 mm se lee `1250 mm`, `125 cm`, `1.25 m` o `0.00125 km`.

1. Primero defina las {{ui:Unidades}} del dibujo en {{ui:Parámetros actuales}} (vea [Unidades, tamaños de papel y escalas](topic:units-papers-scales#drawing-units)), para que CadCraft sepa qué es una unidad de dibujo. Un dibujo sin unidades se lee como milímetros, y {{cmd:DIMTEXTUNIT}} lo indica.
2. Para cotas nuevas: pulse {{key:Esc}} para que no haya nada seleccionado, y en {{ui:Cotas nuevas}} elija {{ui:Unidades en el texto}}: {{ui:Unidades del dibujo}}, `mm`, `cm`, `m` o `km`.
3. Para cotas que ya hizo: selecciónelas, y en {{ui:Propiedades}} › {{ui:Unidades principales}} elija {{ui:Unidades en el texto}}.

O escriba {{cmd:DIMTEXTUNIT}} (`DTU`) y responda `D`, `MM`, `CM`, `M` o `KM`: con cotas seleccionadas las cambia (un paso para deshacer), y sin nada seleccionado define las cotas nuevas.

{{ui:Decimales}} ({{cmd:DIMDEC}}) sigue definiendo cuántas posiciones decimales se muestran: con metros y 3 decimales, 1234 mm se lee `1.234 m`. El texto se escribe como número decimal. En una hoja, las cotas miden en la unidad de papel de la hoja (milímetros o pulgadas).

Un DWG o DXF guardado conserva la elección como escala de medida de la cota (DIMLFAC) y un sufijo (DIMPOST, ` m`), para que otros programas muestren el mismo texto. Si después cambia las {{ui:Unidades}} del dibujo, las cotas escritas en mm, cm, m o km se reajustan, así que siguen indicando la longitud correcta. {{ui:Definido a mano (escala o sufijo)}} significa que la {{ui:Escala de medida}} o el sufijo de la cota se definieron de otra forma; elija una unidad para reemplazarlos.

## Cambie cotas que ya hizo

1. Haga clic en una cota. El encabezado del panel derecho dice {{ui:Cota}}.
2. Los ajustes están en secciones; desplácese hacia abajo para llegar a las últimas:
   - {{ui:General}}: {{ui:Estilo de cota}}
   - {{ui:Geometría}}: {{ui:Tipo}} y {{ui:Medida}} (solo lectura)
   - {{ui:Texto}}: {{ui:Modificación de texto}} y {{ui:Altura de texto}}
   - {{ui:Líneas y flechas}}: {{ui:Tamaño de flecha}}
   - {{ui:Ajustar}}: {{ui:Escala global}}
   - {{ui:Unidades principales}}: {{ui:Decimales}}
3. Escriba un valor nuevo y pulse {{key:Enter}}.

La cota se redibuja de inmediato. En las cotas angulares, {{ui:Decimales (°)}} define los decimales del ángulo.

:::note
Con varias cotas seleccionadas, el panel muestra las filas que comparten, y un valor que difiere entre ellas aparece como {{ui:Varía}}. Un valor que escriba cambia cada cota seleccionada en un solo paso, así que un {{key:Mod+Z}} las devuelve todas.
:::

## Cotas de dibujos abiertos

Una cota de un DWG o DXF abierto se muestra exactamente como la dibujó el otro programa. Su panel dice "Se muestra como la dibujó el programa que la creó. Si la cambia, CadCraft la vuelve a dibujar con su propio estilo." En cuanto cambia cualquier valor, mueve un pinzamiento o mueve la cota, CadCraft la redibuja con sus propias flechas y fuente, usando los tamaños que leyó del archivo.

Algunas cotas solo pueden leerse como se dibujaron, no como cotas editables; el panel entonces muestra "Dibujada desde" y un nombre de bloque, y el cuadro "Acerca de este archivo" las cuenta.

## Errores comunes

- **Al cambiar DIMSCALE no cambió nada en pantalla.** El ajuste es para cotas nuevas. Seleccione las existentes y cambie {{ui:Escala global}} en el panel.
- **Los decimales muestran menos dígitos de los definidos.** Los ceros finales se omiten: con 2 decimales se muestra `1250` y `1250.5`, no `1250.00`.
- **El texto tiene la altura correcta en papel en una ventana gráfica, pero mal en un trazado del modelo.** La escala global debe coincidir con la escala de trazado. Trazar con {{ui:Ajustar}} al papel da una escala irregular; elija una escala estándar en el diálogo de trazado.
- **Unidades como mm o m en el texto.** Elija {{ui:Unidades en el texto}} (vea [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Para cualquier otra palabra después del número, escríbala en una modificación: `<> TYP.`.

## Estilos de cota con nombre

Escriba `DIMSTYLE` (`D`) para abrir el {{ui:Administrador de estilos de cota}}. Lista los estilos del dibujo, cuántas cotas usa cada uno, y cuál es el actual. **Standard** siempre está.

- {{ui:Definir actual}}: las cotas nuevas usan los ajustes de ese estilo y llevan su nombre.
- {{ui:Nuevo…}}: un estilo nuevo que empieza como copia del que elija.
- {{ui:Modificar…}}: los mismos campos que la sección de cota de {{ui:Propiedades}} (líneas y flechas, texto, ajuste, unidades, unidades alternas, tolerancias). Pulse {{ui:Aceptar}} y el estilo cambia **y cada cota que lo usa cambia con él**, ajuste por ajuste. Un ajuste que cambió en una sola cota se queda como está, salvo que el estilo cambie ese ajuste.
- {{ui:Cambiar nombre…}} y {{ui:Eliminar}}: Standard no puede renombrarse ni eliminarse, tampoco el estilo actual ni uno que usen cotas.
- {{ui:Comparar…}}: lo que difiere entre dos estilos.
- {{ui:Aplicar a lo designado}}: seleccione primero las cotas; toman los ajustes del estilo y su nombre.

`-DIMSTYLE` hace lo mismo en la línea de comandos: `Restore`, `Save` (los ajustes actuales, incluidos los que escribió con {{cmd:DIMTXT}} y los demás, con un nombre), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Los estilos se guardan en un DWG o DXF (su tabla de estilos de cota) y se leen de los archivos que abre. El estilo *actual* no se guarda: un dibujo se abre con Standard como actual. Standard conserva sus propios ajustes mientras otro estilo es el actual.

## Cambie el texto y las líneas de extensión de las cotas

{{cmd:DIMEDIT}} (`DED`) trabaja sobre las cotas que seleccione: **Inicio** devuelve el texto a donde lo coloca el estilo, **Nuevo** escribe otro texto (`<>` representa la medida), **Girar** gira el texto, **Oblicua** inclina las líneas de extensión de las cotas lineales y alineadas a un ángulo que escriba (pulse {{key:Enter}} para ninguno). {{cmd:DIMTEDIT}} mueve el texto a la **Izquierda**, **Derecha** o **Centro** de la línea de cota, o lo gira (**Ángulo**), o lo envía a **Inicio**. El texto siempre queda sobre la línea de cota: no se puede arrastrar a un lugar libre.

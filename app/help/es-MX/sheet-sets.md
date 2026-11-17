---
title: Juegos de hojas
summary: Reúna hojas de muchos dibujos en una sola lista numerada, llene sus cajetines a partir del juego, publíquelas como un solo PDF y archive el juego como zip.
keywords: juego de hojas, administrador de juegos de hojas, ssm, sheetset, ccsheets, dst, lista de hojas, índice de hojas, cajetín, campos, publicar, renumerar, archivar, etransmit, remisión, subconjuntos, hoja de portada, lista de dibujos
from: 2c855720
---

## Lo que aprenderá

Cómo reunir hojas (presentaciones) de varios archivos de dibujo en un **juego de hojas**, numerarlas y titularlas, llenar sus cajetines por usted, publicar todo el juego como un solo PDF y empaquetar todo en un zip para enviarlo.

Un juego de hojas vive en un pequeño archivo propio, `<name>.ccsheets`, en la carpeta que contiene los dibujos. El archivo del juego enumera las hojas con rutas desde esa carpeta, así que puede mover o copiar toda la carpeta.

:::note
Para abrir una carpeta y leer y escribir en ella se necesita Chrome o Edge (pueden permitir que una página trabaje en una carpeta que usted elija), o la aplicación de escritorio. Otros navegadores abren el juego en solo lectura: puede verlo y publicarlo, y el archivo del juego se descarga en lugar de guardarse.
:::

## Iniciar un juego

1. Busque la sección {{ui:Juego de hojas}} en el panel izquierdo, y abra su menú {{ui:Juego}}. Escribir {{cmd:SHEETSET}} (o `SSM`) también lo lleva allí.
2. Elija {{ui:Nuevo juego…}}. Dele un nombre y, si lo desea, el nombre y el número del proyecto.
3. Elija la carpeta que contiene los dibujos. El archivo del juego se guarda allí.

Para abrir un juego después, elija {{ui:Abrir juego…}} y seleccione la misma carpeta. Si la carpeta contiene más de un juego, CadCraft le pregunta cuál.

## Agregar hojas

1. Elija {{ui:Agregar hojas desde un dibujo…}} y seleccione uno de los dibujos de la carpeta.
2. CadCraft lee ese dibujo en segundo plano (no se abre en pantalla) y enumera sus hojas. Marque las que quiera y pulse {{ui:Aceptar}}.
3. Seleccione una hoja y pulse {{key:F2}} (o {{ui:Renombrar y renumerar…}}) para darle un número y un título, como `A-101` y `Planta baja`.

{{ui:Nueva hoja desde plantilla…}} crea un dibujo nuevo a partir de la hoja de otro dibujo (su cajetín y sus ventanas gráficas), con el nombre de la nueva hoja, y lo agrega. El juego recuerda el dibujo que usó como plantilla.

## Organizar el juego

- **Subconjuntos** agrupan hojas, como Arquitectura › Plantas: seleccione el lugar donde van y elija {{ui:Nuevo subconjunto…}}.
- **Orden**: arrastre una hoja a otro lugar de la lista, o sobre un subconjunto para moverla allí. Con el teclado, selecciónela y pulse {{key:Alt+Up}} o {{key:Alt+Down}}.
- **Abrir una hoja**: haga doble clic en ella (o pulse {{key:Enter}}). Su dibujo se abre en su propia pestaña, en esa hoja.
- **Quitar**: selecciónela y pulse {{key:Delete}}. El dibujo en sí no se modifica.
- **Deshacer**: {{ui:Deshacer cambio del juego}} y {{ui:Rehacer cambio del juego}} recorren lo que cambió en el juego.
- **Renumerar**: {{ui:Renumerar hojas…}} numera cada hoja, o las de un subconjunto, en el orden de la lista: un prefijo, un inicio y un paso (`A-` y `101` dan A-101, A-102 …).

Cada cambio se guarda de inmediato en el archivo del juego.

## Numerar hojas a partir de sus campos

En lugar de numerar las hojas a mano, deje que una regla construya cada número a partir de los campos de la hoja, de modo que una hoja que pasa a otro nivel o disciplina recibe su nuevo número por sí sola.

1. Dé a cada hoja sus campos: selecciónela, pulse {{ui:Cambiar nombre…}} y, en {{ui:Campos de esta hoja}}, escriba uno por línea, por ejemplo `DISCIPLINE = A` y `LEVEL = 1`. Un campo que comparte todo el juego (por ejemplo `DISCIPLINE = A`) puede ir en las {{ui:Propiedades…}} del juego.
2. Abra el menú del panel y pulse {{ui:Regla de numeración…}}.
3. Escriba la regla, por ejemplo `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` cuenta hacia arriba entre las hojas cuyos otros campos se leen igual, de modo que el nivel 1 recibe A-101, A-102, y el nivel 2 vuelve a empezar en A-201. `{SEQ:2}` lo escribe con dos dígitos; `{SUBSET}` es el nombre del subconjunto en el que está una hoja.
4. Elija qué ocurre cuando cambia un campo: {{ui:Renumerar las hojas}} mantiene los números siguiendo la regla después de cada cambio; la otra opción los numera una vez, ahora.

La regla se guarda en el archivo del juego. Mientras renumera por sí misma, cambie los campos de una hoja en lugar de su número.

## Llenar cajetines desde el juego

Un cajetín toma su texto del juego cuando sus atributos están etiquetados con el nombre de un campo:

| Etiqueta | Lo que muestra |
|---|---|
| `SHEETNUMBER` (o `SHEET_NO`, `DWG_NO`) | El número de la hoja |
| `SHEETTITLE` (o `TITLE`, `SHEET_TITLE`) | El título de la hoja |
| `SHEETDESC` | La descripción de la hoja |
| `PROJECTNAME` (o `PROJECT`) | El nombre del proyecto |
| `PROJECTNUMBER` (o `PROJECT_NO`, `JOB_NO`) | El número del proyecto |
| `SHEETSETNAME` | El nombre del juego |
| `SHEETINDEX`, `SHEETCOUNT` | "3 de 12", y 12 |
| Los suyos, como `CLIENT` | Lo que escribió para él en {{ui:Campos del juego…}} |

{{ui:Campos del juego…}} contiene el nombre y el número del proyecto y sus propios campos, uno por línea, como `NOMBRE = valor`.

{{ui:Actualizar dibujos}} escribe los números, títulos y campos en los cajetines de cada dibujo del juego, y renombra la pestaña de presentación de cada hoja según indique el juego (por defecto número y título, como `A-101 Planta baja`; {{ui:Campos del juego…}} › {{ui:Nombres de las pestañas de presentación}} lo cambia). Cada dibujo se guarda en su lugar, en su propio formato y versión. Después de renumerar o renombrar hojas, ejecútelo de nuevo y las pestañas y los cajetines se actualizarán.

## Una lista de hojas en la hoja de portada

Seleccione la hoja de portada en la lista y elija {{ui:Poner la lista de hojas en esta hoja}}. Una tabla con todas las hojas (número y título, bajo su subconjunto) se coloca en la esquina superior izquierda de la hoja. {{ui:Actualizar dibujos}} y {{ui:Publicar en PDF}} la mantienen al día. Es un solo bloque, `CC_SHEETLIST`: muévalo como cualquier referencia a bloque.

## Publicar el juego

{{ui:Publicar en PDF}} crea un PDF con una página por hoja, en el orden del juego, con el tamaño de papel propio de cada hoja, y un marcador por hoja ("A-101 — Planta baja"). Con un subconjunto seleccionado, CadCraft pregunta si publicar solo ese subconjunto. Los cajetines del PDF se llenan a partir del juego incluso antes de actualizar los dibujos; publicar no modifica los dibujos. El PDF se descarga.

{{ui:Publicar en DWG…}} escribe cada hoja como su propio DWG (DWG 2018): el modelo y esa sola hoja, con su cajetín llenado a partir del juego, con el nombre que le da su número y título (`A-101 Level 1 floor plan.dwg`). Elija {{ui:DWG}}, o {{ui:DWG + PDF}} para incluir el PDF del juego junto a ellos. Un `publish.json` enumera cada archivo con su tamaño y su SHA-256. Cuando la carpeta del juego se puede escribir (CadCraft Studio, o una carpeta que eligió en el navegador), los archivos van a una carpeta `<set name> - published`; de lo contrario se descargan como un zip. Las [anulaciones de clase](topic:viewport-overrides) de las ventanas gráficas viajan en cada DWG.

## Archivar el juego

{{ui:Archivar como zip}} empaqueta el archivo del juego, cada dibujo que usa y lo que esos dibujos enlazan (dibujos enlazados, y los que enlazan a su vez, e imágenes), conservando sus carpetas, más un `Transmittal.txt` que enumera cada archivo. Un enlace que no está en la carpeta del juego se lista ahí como faltante. Los enlaces se encuentran por su ruta desde el dibujo, y luego por su nombre de archivo en cualquier parte de la carpeta.

## El archivo del juego

El archivo `.ccsheets` es JSON que puede leer en cualquier editor de texto:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Las rutas son relativas a la carpeta del juego, con `/` entre carpetas. CadCraft revisa el archivo al abrirlo: una ruta absoluta, una hoja sin archivo o sin presentación, o un texto que no es simple se omite, y el historial lo indica.

## Solución de problemas

| Lo que ve | Por qué | Qué hacer |
|---|---|---|
| "Esta carpeta es de solo lectura aquí" | El navegador no puede escribir en la carpeta | Use Chrome o Edge, o la aplicación de escritorio; mientras tanto, {{ui:Descargar el archivo del juego}} conserva sus cambios |
| Una hoja se omite del PDF: "no tiene una presentación llamada …" | La presentación de la hoja se renombró o se eliminó en su dibujo | Abra el dibujo y revise sus pestañas; quite la hoja y vuelva a agregarla |
| Un cajetín queda vacío | Sus atributos tienen otras etiquetas | Renombre las etiquetas de los atributos con los nombres de campo de arriba (BEDIT) |
| "ya tiene una presentación llamada … así que la pestaña no se renombró" | Dos hojas de un mismo dibujo tendrían el mismo nombre de pestaña | Dé a una de ellas otro número o título |

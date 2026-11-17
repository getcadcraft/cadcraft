---
title: Juegos de hojas
summary: Reunir hojas de muchos dibujos en una sola lista numerada, rellenar sus cajetines desde el juego, publicarlas como un único PDF y archivar el juego como zip.
keywords: juego de hojas, gestor de juegos de hojas, ssm, sheetset, ccsheets, dst, lista de hojas, índice de hojas, cajetín, campos, publicar, renumerar, archivar, etransmit, transmittal, subconjuntos, hoja de portada, lista de planos
from: 2c855720
---

## Lo que aprenderá

Cómo reunir hojas (presentaciones) de varios archivos de dibujo en un **juego de hojas**, numerarlas y titularlas, hacer que sus cajetines se rellenen solos, publicar el juego completo como un único PDF y empaquetarlo todo en un zip para enviar.

Un juego de hojas vive en un archivo pequeño propio, `<nombre>.ccsheets`, en la carpeta que contiene los dibujos. El archivo del juego enumera las hojas con rutas desde esa carpeta, de modo que puede mover o copiar toda la carpeta.

:::note
Para abrir una carpeta y leer y escribir en ella se necesita Chrome o Edge (pueden permitir que una página trabaje en una carpeta que usted elija), o la aplicación de escritorio. Otros navegadores abren un juego en solo lectura: puede consultarlo y publicarlo, y el archivo del juego se descarga en lugar de guardarse.
:::

## Crear un juego

1. Busque la sección {{ui:Juego de hojas}} en el panel izquierdo y abra su menú {{ui:Juego}}. Escribir {{cmd:SHEETSET}} (o `SSM`) también le lleva hasta allí.
2. Elija {{ui:Nuevo juego…}}. Ponga un nombre al juego y, si lo desea, el nombre y el número del proyecto.
3. Elija la carpeta que contiene los dibujos. El archivo del juego se guarda allí.

Para abrir un juego más tarde, elija {{ui:Abrir juego…}} y seleccione la misma carpeta. Si la carpeta contiene más de un juego, CadCraft le pregunta cuál.

## Añadir hojas

1. Elija {{ui:Agregar hojas desde un dibujo…}} y seleccione uno de los dibujos de la carpeta.
2. CadCraft lee ese dibujo en segundo plano (no se abre en pantalla) y enumera sus hojas. Marque las que quiera y haga clic en {{ui:Aceptar}}.
3. Seleccione una hoja y pulse {{key:F2}} (o {{ui:Renombrar y renumerar…}}) para asignarle un número y un título, como `A-101` y `Plano de planta`.

{{ui:Nueva hoja desde plantilla…}} crea un dibujo nuevo a partir de la hoja de otro dibujo (su cajetín y sus ventanas gráficas), con el nombre de la nueva hoja, y lo añade. El juego recuerda el dibujo que usó como plantilla.

## Organizar el juego

- **Subconjuntos** agrupan hojas, como Arquitectura › Planos: seleccione el lugar donde irán y elija {{ui:Nuevo subconjunto…}}.
- **Orden**: arrastre una hoja a otro lugar de la lista, o sobre un subconjunto para trasladarla allí. Con el teclado, selecciónela y pulse {{key:Alt+Up}} o {{key:Alt+Down}}.
- **Abrir una hoja**: haga doble clic en ella (o pulse {{key:Enter}}). Su dibujo se abre en su propia pestaña, en esa hoja.
- **Quitar**: selecciónela y pulse {{key:Delete}}. El dibujo en sí no cambia.
- **Deshacer**: {{ui:Deshacer cambio del juego}} y {{ui:Rehacer cambio del juego}} recorren los cambios hechos en el juego.
- **Renumerar**: {{ui:Renumerar hojas…}} numera todas las hojas, o las de un subconjunto, en el orden de la lista: un prefijo, un inicio y un paso (`A-` y `101` dan A-101, A-102 …).

Cada cambio se guarda en el archivo del juego de inmediato.

## Numerar hojas a partir de sus campos

En lugar de numerar las hojas a mano, deje que una regla forme cada número a partir de los campos de la hoja, de modo que una hoja que pase a otra planta o disciplina obtenga su nuevo número automáticamente.

1. Asigne a cada hoja sus campos: selecciónela, haga clic en {{ui:Renombrar…}} y, en {{ui:Campos de esta hoja}}, escriba uno por línea, por ejemplo `DISCIPLINE = A` y `LEVEL = 1`. Un campo que comparte todo el juego (por ejemplo `DISCIPLINE = A`) puede ir en {{ui:Propiedades…}} del juego en su lugar.
2. Abra el menú del panel y haga clic en {{ui:Regla de numeración…}}.
3. Escriba la regla, por ejemplo `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` cuenta hacia arriba entre las hojas cuyos otros campos se leen igual, de modo que la planta 1 obtiene A-101, A-102, y la planta 2 empieza de nuevo en A-201. `{SEQ:2}` lo escribe con dos dígitos; `{SUBSET}` es el nombre del subconjunto en el que está una hoja.
4. Elija qué ocurre cuando cambia un campo: {{ui:Renumerar las hojas}} mantiene los números según la regla tras cada cambio; la otra opción los numera una sola vez, ahora.

La regla se guarda en el archivo del juego. Mientras renumera por sí misma, cambie los campos de una hoja en lugar de su número.

## Rellenar cajetines desde el juego

Un cajetín toma su texto del juego cuando sus atributos llevan la etiqueta con el nombre de un campo:

| Etiqueta | Lo que muestra |
|---|---|
| `SHEETNUMBER` (o `SHEET_NO`, `DWG_NO`) | El número de la hoja |
| `SHEETTITLE` (o `TITLE`, `SHEET_TITLE`) | El título de la hoja |
| `SHEETDESC` | La descripción de la hoja |
| `PROJECTNAME` (o `PROJECT`) | El nombre del proyecto |
| `PROJECTNUMBER` (o `PROJECT_NO`, `JOB_NO`) | El número del proyecto |
| `SHEETSETNAME` | El nombre del juego |
| `SHEETINDEX`, `SHEETCOUNT` | «3 de 12», y 12 |
| Los suyos propios, como `CLIENT` | Lo que escribió para él en {{ui:Campos del juego…}} |

{{ui:Campos del juego…}} contiene el nombre y el número del proyecto y sus propios campos, uno por línea, en la forma `NOMBRE = valor`.

{{ui:Actualizar dibujos}} escribe los números, títulos y campos en los cajetines de cada dibujo del juego, y renombra la pestaña de cada presentación según indica el juego (por defecto, número y título, como `A-101 Plano de planta`; {{ui:Campos del juego…}} › {{ui:Nombres de las pestañas de presentación}} lo cambia). Cada dibujo se guarda en su sitio, con su propio formato y versión. Después de renumerar o renombrar hojas, vuelva a ejecutarlo y las pestañas y los cajetines se actualizarán.

## Una lista de hojas en la hoja de portada

Seleccione la hoja de portada en la lista y elija {{ui:Poner la lista de hojas en esta hoja}}. Una tabla con todas las hojas (número y título, bajo su subconjunto) se coloca en la esquina superior izquierda de la hoja. {{ui:Actualizar dibujos}} y {{ui:Publicar en PDF}} la mantienen actualizada. Es un solo bloque, `CC_SHEETLIST`: muévalo como cualquier referencia de bloque.

## Publicar el juego

{{ui:Publicar en PDF}} crea un único PDF con una página por hoja, en el orden del juego, con el tamaño de papel propio de cada hoja, y un marcador por hoja («A-101 — Plano de planta»). Con un subconjunto seleccionado, CadCraft pregunta si quiere publicar solo ese subconjunto. Los cajetines del PDF se rellenan desde el juego incluso antes de actualizar los dibujos; los dibujos en sí no cambian al publicar. El PDF se descarga.

{{ui:Publicar en DWG…}} escribe cada hoja como un DWG propio (DWG 2018): el modelo y esa única hoja, con su cajetín rellenado desde el juego, con nombre según su número y título (`A-101 Level 1 floor plan.dwg`). Elija {{ui:DWG}}, o {{ui:DWG + PDF}} para añadir el PDF del juego junto a ellos. Un `publish.json` enumera cada archivo con su tamaño y su SHA-256. Cuando la carpeta del juego admite escritura (CadCraft Studio, o una carpeta que eligió en el navegador), los archivos van a una carpeta `<nombre del juego> - published`; si no, se descargan como un zip. Las [anulaciones de clase](topic:viewport-overrides) de las ventanas gráficas se incluyen en cada DWG.

## Archivar el juego

{{ui:Archivar como zip}} empaqueta el archivo del juego, cada dibujo que usa y lo que esos dibujos enlazan (dibujos enlazados, y los que a su vez enlazan, e imágenes), conservando sus carpetas, además de un `Transmittal.txt` que enumera cada archivo. Un enlace que no está en la carpeta del juego aparece allí como que falta. Los enlaces se localizan por su ruta desde el dibujo, y luego por su nombre de archivo en cualquier parte de la carpeta.

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

Las rutas son relativas a la carpeta del juego, con `/` entre carpetas. CadCraft comprueba el archivo al abrirlo: una ruta absoluta, una hoja sin archivo o sin presentación, o un texto que no sea plano se omite, y el historial lo indica.

## Solución de problemas

| Lo que ve | Motivo | Qué hacer |
|---|---|---|
| «Esta carpeta es de solo lectura aquí» | El navegador no puede escribir en la carpeta | Use Chrome o Edge, o la aplicación de escritorio; mientras tanto, {{ui:Descargar el archivo del juego}} conserva sus cambios |
| Una hoja queda fuera del PDF: «no tiene una presentación llamada …» | La presentación de la hoja se renombró o se eliminó en su dibujo | Abra el dibujo y revise sus pestañas; quite la hoja y añádala de nuevo |
| Un cajetín queda vacío | Sus atributos tienen otras etiquetas | Renombre las etiquetas de atributo con los nombres de campo de arriba (BEDIT) |
| «ya tiene una presentación llamada … así que esa pestaña no se renombró» | Dos hojas de un mismo dibujo tendrían el mismo nombre de pestaña | Dé a una de ellas otro número o título |

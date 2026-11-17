---
title: Conjuntos de planos
summary: Ojuaʼẽ hojas heta planos rehegua peteĩ lista numerada-pe, omboguapy title block conjunto-gui, omboguapy peteĩ PDF-pe ha omboty conjunto zip-pe.
keywords: conjunto de planos, administrador conjunto de planos, ssm, sheetset, ccsheets, dst, lista de hojas, índice de hojas, bloque de título, campos, publicar, renumerar, archivar, etransmit, transmittal, subconjuntos, hoja de portada, lista de planos
from: 2c855720
---

## Mba'e rekuaáta

Mba'éichapa oñembyatyhágui hojas (layouts) heta plano archivo-gui **conjunto de planos**-pe, numerar ha título omoĩ, title block conjunto-gui oñemboguapy, opa conjunto peteĩ PDF-pe omboty ha opa zip-pe omboty ojehasa.

Conjunto de planos oguereko peteĩ archivo `<name>.ccsheets`, plano carpeta-pe. Conjunto archivo hojas lista oguereko, carpeta-gui camino-pe, upévare carpeta opa ojeheja térã ojapo ikatu.

:::note
Carpeta leer ha escribir Chrome térã Edge (carpeta ojeporu ikatu page-pe) térã escritorio app ojeporu. Ambue navegador conjunto solo lectura-pe ojeporu: ojecheka ha publicar ikatu, conjunto archivo ojeheja.
:::

## Ojepyrũ conjunto

1. Ejepe'a {{ui:Conjunto de planos}} sección izquierda panel-pe, ha ejepe'a {{ui:Conjunto}} menú. {{cmd:SHEETSET}} (térã `SSM`) eskribi jave ojepyrũ.
2. Ejepe'a {{ui:Nuevo conjunto…}}. Conjunto nombre omoĩ, ha proyecto nombre ha número ejeporu.
3. Ejepe'a plano ryru carpeta. Conjunto archivo upépe oñemboty.

Conjunto ojeporu ojepe'a {{ui:Abrir conjunto…}} ha carpeta. Carpeta conjunto mokõi ojeguerekopa, CadCraft ojehusu mavãpa.

## Hojas agrega

1. Ejepe'a {{ui:Agregar hojas desde un plano…}} ha peteĩ plano carpeta-pe ejepe'a.
2. CadCraft plano ojelee segundo plano-pe (pantalla-pe ndojehechái) ha hojas lista omoĩ. Ejepe'a ojeporavo ha ejepe'a {{ui:Aceptar}}.
3. Hoja ejepe'a ha {{key:F2}} ejepe'a ({{ui:Renumerar y renombrar…}}) número ha título omoĩ, `A-101` ha `Planta baja` mbaʼe.

{{ui:Nueva hoja desde plantilla…}} ojapo plano ambue plano hoja-gui (title block ha viewport), hoja nombre rupi, ha agrega. Conjunto oguarda plano plantilla-kuéra.

## Conjunto ñemoĩ

- **Subconjuntos** hojas oñembyatyva, ha'e Arquitectónico › Planos: ejepe'a ha {{ui:Nuevo subconjunto…}}.
- **Orden**: hoja ojehaʼa lista iñapytépe, térã subconjunto-pe. Teclado-pe ejepe'a ha {{key:Alt+Up}} térã {{key:Alt+Down}}.
- **Hoja abrir**: mokõi clic térã {{key:Enter}}. Plano hoja-pe oñemboguapy ijehegui pestaña-pe.
- **Quitar**: ejepe'a ha {{key:Delete}}. Plano ndojejapóiva.
- **Deshacer**: {{ui:Deshacer cambio del conjunto}} ha {{ui:Rehacer cambio del conjunto}} conjunto mba'e oñemboguapyva.
- **Renumerar**: {{ui:Renumerar hojas…}} opa hoja, térã subconjunto, lista orden-pe numera: prefijo, inicio ha paso (`A-` ha `101` A-101, A-102 …).

Opa cambio conjunto archivo-pe oñemboty ko'ẽrõ.

## Campos-gui numera hojas

Número-pe eskribi ndahaʼéi, regla hoja campos-gui oñemboguapy, hoja nivel térã disciplina oñemboguapy número ojehupytýva.

1. Hoja campos omoĩ: ejepe'a, {{ui:Renombrar…}} ejepe'a, {{ui:Campos de esta hoja}}-pe peteĩ línea, ohechauka `DISCIPLINA = A` ha `NIVEL = 1`. Conjunto compartido campo (`DISCIPLINA = A`) conjunto {{ui:Propiedades…}}-pe omoĩ.
2. Panel menú ejepe'a, {{ui:Regla de numeración…}}.
3. Regla eskribi, ha'e `{DISCIPLINA}-{NIVEL}{SEQ:2}`. `{SEQ}` hoja mbohapy ojuhúvape, ambue campos mismo ojehecha: nivel 1 A-101, A-102 ha nivel 2 A-201 jey oñepyrũ. `{SEQ:2}` mokõi número; `{SUBSET}` subconjunto nombre.
4. Campo cambio jave mba'épa: {{ui:Renumerar las hojas}} regla ojehai opa cambio rire; ambue elección peteĩ jey numera ko'ẽrõ.

Regla conjunto archivo-pe oñemboty. Regla ojapo automático renumera jave, hoja campo omoambue, número ndoomoambue.

## Title block conjunto-gui omboguapy

Title block texto conjunto-gui oñemoĩ attribute etiqueta campo nombre-gui:

| Etiqueta | Mba'épa ohechauka |
|---|---|
| `SHEETNUMBER` (térã `SHEET_NO`, `DWG_NO`) | Hoja número |
| `SHEETTITLE` (térã `TITLE`, `SHEET_TITLE`) | Hoja título |
| `SHEETDESC` | Hoja descripción |
| `PROJECTNAME` (térã `PROJECT`) | Proyecto nombre |
| `PROJECTNUMBER` (térã `PROJECT_NO`, `JOB_NO`) | Proyecto número |
| `SHEETSETNAME` | Conjunto nombre |
| `SHEETINDEX`, `SHEETCOUNT` | "3 de 12", ha 12 |
| Ne ijehegui, ha'e `CLIENT` | {{ui:Campos del conjunto…}}-pe eskribi chupe |

{{ui:Campos del conjunto…}} proyecto nombre ha número, ha ne ijehegui campo, peteĩ línea `NOMBRE = valor`.

{{ui:Actualizar planos}} número, título ha campo opa conjunto plano title block-pe oñemoĩ, ha hoja pestaña nombre conjunto ojehai rupi renombrado (ha'e número ha título; {{ui:Campos del conjunto…}} › {{ui:Nombres de pestañas de diseño}} oñemboguapy). Plano ojerekoháicha archivo-pe oñemboty. Hoja renumera térã renombra rire, ojapo jey.

## Hoja portada-pe lista

Hoja portada lista-pe ejepe'a ha {{ui:Poner la lista de hojas en esta hoja}} ejepe'a. Opa hoja tabla (número ha título, subconjunto iñapytépe) hoja izquierda superior esquina-pe oñemoĩ. {{ui:Actualizar planos}} ha {{ui:Publicar en PDF}} ohechaukáiva oñemoĩ. Peteĩ bloque, `CC_SHEETLIST`: bloque referencia ojeporavo ojeplaza.

## Conjunto publicar

{{ui:Publicar en PDF}} peteĩ PDF oñemoĩ, hoja-pe peteĩ página, conjunto orden-pe, hoja papel tamaño-pe, hoja-pe marcador ("A-101 — Planta baja"). Subconjunto ejepe'a jave, CadCraft oheka ha subconjunto ha'e publicar. Title block PDF-pe conjunto-gui oñemoĩ, plano actualizar ndojehai mboyve. Publicar plano ndojejapói. PDF oñemboty.

{{ui:Publicar DWG…}} hoja peteĩ-peteĩ DWG ojapo (DWG 2018): modelo ha hoja hoja title block conjunto-gui oñemoĩ, número ha título rupi nombre (`A-101 Planta baja nivel 1.dwg`). Ejepe'a {{ui:DWG}}, térã {{ui:DWG + PDF}} PDF ndive. `publish.json` opa archivo tamaño ha SHA-256 ohechauka. Conjunto carpeta escribir ojeporaseʼỹ jave (CadCraft Studio, térã navegador carpeta ejepe'a) archivo carpeta `<conjunto nombre> - publicado`-pe oñemboty; ambue ndojeporomboaje zip-pe oñemboty. Viewport [clase reemplazos](topic:viewport-overrides) DWG-pe oñemboty.

## Conjunto archivar

{{ui:Archivar como zip}} conjunto archivo, opa plano ojeporúva, plano ojeporúva ha ojejuntáva (imagen avei), carpeta ojeporu, `Transmittal.txt` oñemboty opa archivo ohechaukáva. Conjunto carpeta-pe ndaipóri link faltante-pe omombe'u. Link ruta-gui ojuhu, plano nombre-gui carpeta-pe.

## Conjunto archivo

`.ccsheets` archivo JSON ojehecháva texto editor-pe:

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

Ruta conjunto carpeta-gui relativo, `/` carpeta. CadCraft oheka jave: ruta absoluta, archivo ndoguerekóiva hoja, térã texto simple ndaiporiva omboty, historia omombe'u.

## Mba'e jejapo vai

| Mba'épa ohechauka | Mba'éramo | Mba'épa ojapo |
|---|---|---|
| "Esta carpeta es de solo lectura aquí" | Navegador ndoikói carpeta-pe escribir | Chrome térã Edge ojeporu, térã escritorio app; {{ui:Descargar el archivo del conjunto}} oñongatu ojapo |
| Hoja PDF-pe ndoguerekói: "no tiene un diseño llamado …" | Plano hoja diseño oñemoĩ térã oñemboty | Plano ojehecha pestaña; hoja omboty ha ojehai ojapo |
| Title block empty ojeguerekõ | Attribute etiqueta ambue | Attribute etiqueta campo nombre-pe omoambue (BEDIT) |
| "ya tiene un diseño llamado … así que la pestaña no se renombró" | Mokõi hoja peteĩ plano mismo pestaña nombre | Peteĩ número térã título ambue omoĩ |

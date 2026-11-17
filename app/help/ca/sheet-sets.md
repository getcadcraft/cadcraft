---
title: Jocs de fulls
summary: Reuniu fulls de molts dibuixos en una sola llista numerada, ompliu els seus caixetins a partir del joc, publiqueu-los com un sol PDF i arxiveu el joc com un zip.
keywords: joc de fulls, gestor de jocs de fulls, ssm, sheetset, ccsheets, dst, llista de fulls, índex de fulls, caixetí, camps, publica, renumera, arxiva, etransmit, lliurament, subconjunts, full de portada, llista de dibuixos
from: 2c855720
---

## Què aprendreu

Com reunir fulls (presentacions) de diversos fitxers de dibuix en un **joc de fulls**, numerar-los i posar-los títol, fer que els seus caixetins s'omplin per vosaltres, publicar tot el joc com un sol PDF i empaquetar-ho tot en un zip per enviar.

Un joc de fulls viu en un fitxer petit propi, `<name>.ccsheets`, a la carpeta que conté els dibuixos. El fitxer del joc enumera els fulls amb rutes des d'aquesta carpeta, de manera que podeu moure o copiar tota la carpeta.

:::note
Per obrir una carpeta per llegir-hi i escriure-hi cal Chrome o Edge (poden deixar que una pàgina treballi en una carpeta que trieu), o l'aplicació d'escriptori. Els altres navegadors obren un joc només de lectura: el podeu consultar i publicar, i el fitxer del joc es baixa en lloc de desar-se.
:::

## Comença un joc

1. Busqueu la secció {{ui:Joc de fulls}} al panell de l'esquerra i obriu el seu menú {{ui:Joc}}. Escriure {{cmd:SHEETSET}} (o `SSM`) també us hi porta.
2. Trieu {{ui:Joc nou…}}. Doneu un nom al joc i, si voleu, el nom i el número del projecte.
3. Trieu la carpeta que conté els dibuixos. El fitxer del joc es desa allà.

Per obrir un joc més tard, trieu {{ui:Obre el joc…}} i trieu la mateixa carpeta. Si la carpeta conté més d'un joc, CadCraft pregunta quin.

## Afegeix fulls

1. Trieu {{ui:Afegeix fulls d'un dibuix…}} i trieu un dels dibuixos de la carpeta.
2. CadCraft llegeix aquest dibuix en segon pla (no s'obre a la pantalla) i en llista els fulls. Marqueu els que vulgueu i feu clic a {{ui:D'acord}}.
3. Seleccioneu un full i premeu {{key:F2}} (o {{ui:Reanomena i renumera…}}) per donar-li un número i un títol, com ara `A-101` i `Floor plan`.

{{ui:Full nou des d'una plantilla…}} crea un dibuix nou a partir del full d'un altre dibuix (el seu caixetí i les seves finestres gràfiques), amb el nom del full nou, i l'afegeix. El joc recorda el dibuix que heu fet servir com a plantilla.

## Organitzeu el joc

- Els **subconjunts** agrupen fulls, com ara Architectural › Plans: seleccioneu on ha d'anar i trieu {{ui:Subconjunt nou…}}.
- **Ordre**: arrossegueu un full a un altre lloc de la llista, o sobre un subconjunt per moure'l-hi. Amb el teclat, seleccioneu-lo i premeu {{key:Alt+Up}} o {{key:Alt+Down}}.
- **Obre un full**: feu doble clic (o premeu {{key:Enter}}). El seu dibuix s'obre en la seva pròpia pestanya, en aquell full.
- **Elimina**: seleccioneu-lo i premeu {{key:Delete}}. El dibuix en si no es canvia.
- **Desfés**: {{ui:Desfés el canvi del joc}} i {{ui:Refés el canvi del joc}} recorren els canvis fets al joc.
- **Renumera**: {{ui:Renumera els fulls…}} numera cada full, o els d'un subconjunt, en l'ordre de la llista: un prefix, un inici i un pas (`A-` i `101` donen A-101, A-102 …).

Cada canvi es desa al fitxer del joc de seguida.

## Numera els fulls a partir dels seus camps

En lloc de numerar els fulls a mà, deixeu que una regla construeixi cada número a partir dels camps del full, de manera que un full que passa a un altre nivell o disciplina rep el seu número nou automàticament.

1. Doneu els camps a cada full: seleccioneu-lo, feu clic a {{ui:Canvia el nom…}} i, a {{ui:Camps d'aquest full}}, escriviu-ne un per línia, per exemple `DISCIPLINE = A` i `LEVEL = 1`. Un camp que comparteix tot el joc (per exemple `DISCIPLINE = A`) es pot posar a {{ui:Propietats…}} del joc.
2. Obriu el menú del panell i feu clic a {{ui:Regla de numeració…}}.
3. Escriviu la regla, per exemple `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` compta cap amunt entre els fulls els altres camps dels quals tenen el mateix valor, de manera que el nivell 1 rep A-101, A-102 i el nivell 2 torna a començar a A-201. `{SEQ:2}` l'escriu amb dos dígits; `{SUBSET}` és el nom del subconjunt on és un full.
4. Trieu què passa quan canvia un camp: {{ui:Renumera els fulls}} manté els números seguint la regla després de cada canvi; l'altra opció els numera una sola vegada, ara.

La regla es desa al fitxer del joc. Mentre renumera sola, canvieu els camps d'un full, no el seu número.

## Omple els caixetins a partir del joc

Un caixetí rep el seu text del joc quan els seus atributs estan etiquetats amb el nom d'un camp:

| Etiqueta | Què mostra |
|---|---|
| `SHEETNUMBER` (o `SHEET_NO`, `DWG_NO`) | El número del full |
| `SHEETTITLE` (o `TITLE`, `SHEET_TITLE`) | El títol del full |
| `SHEETDESC` | La descripció del full |
| `PROJECTNAME` (o `PROJECT`) | El nom del projecte |
| `PROJECTNUMBER` (o `PROJECT_NO`, `JOB_NO`) | El número del projecte |
| `SHEETSETNAME` | El nom del joc |
| `SHEETINDEX`, `SHEETCOUNT` | "3 de 12", i 12 |
| Els vostres propis, com `CLIENT` | El que hi heu escrit a {{ui:Defineix camps…}} |

{{ui:Defineix camps…}} conté el nom i el número del projecte i els vostres propis camps, un per línia com a `NAME = value`.

{{ui:Actualitza els dibuixos}} escriu els números, els títols i els camps als caixetins de cada dibuix del joc, i canvia el nom de la pestanya de presentació de cada full segons el joc (per defecte, número i títol, com ara `A-101 Floor plan`; {{ui:Defineix camps…}} › {{ui:Noms de les pestanyes de presentació}} ho canvia). Cada dibuix es desa al mateix lloc, en el seu format i versió. Després de renumerar o reanomenar fulls, torneu-lo a executar i les pestanyes i els caixetins se seguiran.

## Una llista de fulls a la portada

Seleccioneu el full de portada a la llista i trieu {{ui:Posa la llista de fulls en aquest full}}. Una taula de cada full (número i títol, sota el seu subconjunt) es posa a la cantonada superior esquerra del full. {{ui:Actualitza els dibuixos}} i {{ui:Publica a PDF}} la mantenen al dia. És un sol bloc, `CC_SHEETLIST`: mogueu-lo com qualsevol referència de bloc.

## Publica el joc

{{ui:Publica a PDF}} fa un sol PDF amb una pàgina per full, en l'ordre del joc, a la mida de paper de cada full, amb un marcador per full ("A-101 — Floor plan"). Amb un subconjunt seleccionat, CadCraft pregunta si cal publicar només aquell subconjunt. Els caixetins del PDF s'omplen amb les dades del joc fins i tot abans d'actualitzar els dibuixos; els dibuixos en si no es canvien en publicar. El PDF es baixa.

{{ui:Publica en DWG…}} escriu cada full com un DWG propi (DWG 2018): el model i aquell full, amb el seu caixetí omplert a partir del joc, i amb nom segons el seu número i títol (`A-101 Level 1 floor plan.dwg`). Trieu {{ui:DWG}}, o {{ui:DWG + PDF}} per tenir també el PDF del joc al costat. Un `publish.json` enumera cada fitxer amb la seva mida i el seu SHA-256. Quan es pot escriure a la carpeta del joc (CadCraft Studio, o una carpeta que hàgiu triat al navegador), els fitxers van a una carpeta `<set name> - published`; si no, es baixen en un sol zip. Les [substitucions de classe](topic:viewport-overrides) de les finestres gràfiques es porten a cada DWG.

## Arxiva el joc

{{ui:Arxiva com a zip}} empaqueta el fitxer del joc, cada dibuix que fa servir i el que aquests dibuixos enllacen (dibuixos enllaçats, i els seus en cadena, i imatges), mantenint les seves carpetes, més un `Transmittal.txt` que enumera cada fitxer. Un enllaç que no és a la carpeta del joc hi apareix com a absent. Els enllaços es troben per la seva ruta des del dibuix i, després, pel nom del fitxer en qualsevol lloc de la carpeta.

## El fitxer del joc

El fitxer `.ccsheets` és un JSON que podeu llegir en qualsevol editor de text:

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

Les rutes són relatives a la carpeta del joc, amb `/` entre carpetes. CadCraft comprova el fitxer quan l'obre: una ruta absoluta, un full sense fitxer o sense pestanya de presentació, o un text que no és text pla s'ometen, i l'historial ho diu.

## Resolució de problemes

| Què veieu | Per què | Què cal fer |
|---|---|---|
| "Aquesta carpeta és de només lectura aquí" | El navegador no pot escriure en una carpeta | Useu Chrome o Edge, o l'aplicació d'escriptori; mentrestant, {{ui:Baixa el fitxer del joc}} conserva els vostres canvis |
| Un full no surt al PDF: "no té cap presentació anomenada …" | La presentació del full s'ha canviat de nom o s'ha suprimit al seu dibuix | Obriu el dibuix i comproveu les seves pestanyes; elimineu el full i torneu a afegir-lo |
| Un caixetí es queda buit | Els seus atributs tenen altres etiquetes | Canvieu el nom de les etiquetes d'atribut pels noms de camp de dalt (BEDIT) |
| "ja té una presentació anomenada … així que la pestanya no s'ha canviat de nom" | Dos fulls d'un mateix dibuix tindrien el mateix nom de pestanya | Doneu a un d'ells un altre número o títol |

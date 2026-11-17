---
title: Conxuntos de follas
summary: Reunir follas de moitos debuxos nunha única lista numerada, encher as súas cartelas desde o conxunto, publicalas como un só PDF e arquivar o conxunto como zip.
keywords: conxunto de follas, xestor de conxuntos de follas, ssm, sheetset, ccsheets, dst, lista de follas, índice de follas, cartela, campos, publicar, renumerar, arquivar, etransmit, transmital, subconxuntos, folla de portada, lista de debuxos
from: 2c855720
---

## O que vai aprender

Como reunir follas (disposicións) de varios ficheiros de debuxo nun **conxunto de follas**, numeralas e titulalas, facer que as súas cartelas se encham por vostede, publicar todo o conxunto nun só PDF e empaquetar todo nun único zip para enviar.

Un conxunto de follas vive nun ficheiro pequeno propio, `<name>.ccsheets`, no cartafol que contén os debuxos. O ficheiro do conxunto enumera as follas con rutas desde ese cartafol, así que pode mover ou copiar todo o cartafol.

:::note
Para abrir un cartafol para ler e escribir fai falta Chrome ou Edge (poden deixar que unha páxina traballe nun cartafol que vostede escolla), ou a aplicación de escritorio. Outros navegadores abren un conxunto só de lectura: pode consultalo e publicalo, e o ficheiro do conxunto descárgase en lugar de gardarse.
:::

## Crear un conxunto

1. Atope a sección {{ui:Conxunto de follas}} no panel esquerdo e abra o seu menú {{ui:Conxunto}}. Escribir {{cmd:SHEETSET}} (ou `SSM`) tamén o leva até alí.
2. Escolla {{ui:Novo conxunto…}}. Dea un nome ao conxunto e, se quere, o nome e o número do proxecto.
3. Escolla o cartafol que contén os debuxos. O ficheiro do conxunto gárdase alí.

Para abrir un conxunto máis tarde, escolla {{ui:Abrir conxunto…}} e seleccione o mesmo cartafol. Se o cartafol contén máis dun conxunto, CadCraft pregunta cal.

## Engadir follas

1. Escolla {{ui:Engadir follas dun debuxo…}} e seleccione un dos debuxos do cartafol.
2. CadCraft lee ese debuxo en segundo plano (non se abre na pantalla) e enumera as súas follas. Marque as que queira e prema {{ui:Aceptar}}.
3. Seleccione unha folla e prema {{key:F2}} (ou {{ui:Renomear e renumerar…}}) para darlle un número e un título, como `A-101` e `Planta do piso`.

{{ui:Nova folla desde modelo…}} crea un debuxo novo a partir dunha folla doutro debuxo (a súa cartela e as súas viewports), co nome da nova folla, e engádeo. O conxunto recorda o debuxo que usou como modelo.

## Organizar o conxunto

- **Subconxuntos** agrupan follas, como Arquitectura › Planos: seleccione o lugar onde irá e escolla {{ui:Novo subconxunto…}}.
- **Orde**: arrastre unha folla a outro lugar da lista, ou sobre un subconxunto para movela alí. Co teclado, seleccione a folla e prema {{key:Alt+Up}} ou {{key:Alt+Down}}.
- **Abrir unha folla**: faga dobre clic (ou prema {{key:Enter}}). O seu debuxo ábrese na súa propia lapela, nesa folla.
- **Retirar**: seleccione a folla e prema {{key:Delete}}. O propio debuxo non se modifica.
- **Desfacer**: {{ui:Desfacer cambio do conxunto}} e {{ui:Refacer cambio do conxunto}} recorren os cambios feitos no conxunto.
- **Renumerar**: {{ui:Renumerar follas…}} numera cada folla, ou as dun subconxunto, segundo a orde da lista: un prefixo, un inicio e un paso (`A-` e `101` dan A-101, A-102 …).

Cada cambio se garda de inmediato no ficheiro do conxunto.

## Numerar follas a partir dos seus campos

En lugar de numerar as follas a man, deixe que unha regra constrúa cada número a partir dos campos da folla, de modo que unha folla que pase a outro nivel ou disciplina reciba o seu novo número por si mesma.

1. Dea a cada folla os seus campos: seleccione a folla, prema {{ui:Cambiar o nome…}} e, en {{ui:Campos desta folla}}, escriba un por liña, por exemplo `DISCIPLINE = A` e `LEVEL = 1`. Un campo que comparte todo o conxunto (por exemplo `DISCIPLINE = A`) pode ir nas {{ui:Propiedades…}} do conxunto.
2. Abra o menú do panel e prema {{ui:Regra de numeración…}}.
3. Escriba a regra, por exemplo `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` avanza entre as follas cuxos outros campos son iguais, de xeito que o nivel 1 recibe A-101, A-102, e o nivel 2 comeza de novo en A-201. `{SEQ:2}` escríbeo con dous díxitos; `{SUBSET}` é o nome do subconxunto no que está unha folla.
4. Escolla o que pasa cando cambia un campo: {{ui:Renumerar as follas}} mantén os números segundo a regra despois de cada cambio; a outra opción numéraas unha vez, agora.

A regra gárdase no ficheiro do conxunto. Mentres renumera por si mesma, cambie os campos dunha folla en lugar do seu número.

## Encher as cartelas desde o conxunto

Unha cartela recibe o seu texto do conxunto cando os seus atributos están etiquetados co nome dun campo:

| Etiqueta | Que mostra |
|---|---|
| `SHEETNUMBER` (ou `SHEET_NO`, `DWG_NO`) | O número da folla |
| `SHEETTITLE` (ou `TITLE`, `SHEET_TITLE`) | O título da folla |
| `SHEETDESC` | A descrición da folla |
| `PROJECTNAME` (ou `PROJECT`) | O nome do proxecto |
| `PROJECTNUMBER` (ou `PROJECT_NO`, `JOB_NO`) | O número do proxecto |
| `SHEETSETNAME` | O nome do conxunto |
| `SHEETINDEX`, `SHEETCOUNT` | "3 de 12", e 12 |
| O seu propio, como `CLIENT` | O que escribiu para el en {{ui:Definir campos…}} |

{{ui:Definir campos…}} contén o nome e o número do proxecto e os seus propios campos, un por liña, como `NAME = value`.

{{ui:Actualizar debuxos}} escribe os números, títulos e campos nas cartelas de cada debuxo do conxunto, e cambia o nome á lapela de disposición de cada folla segundo o conxunto (por defecto, número e título, como `A-101 Planta do piso`; {{ui:Definir campos…}} › {{ui:Nomes das lapelas de disposición}} cambia iso). Cada debuxo gárdase no seu lugar, no seu propio formato e versión. Despois de renumerar ou cambiar o nome das follas, execútao de novo e as lapelas e as cartelas seguirán.

## Unha lista de follas na folla de portada

Seleccione a folla de portada na lista e escolla {{ui:Pór a lista de follas nesta folla}}. Unha táboa con todas as follas (número e título, baixo o seu subconxunto) colócase na esquina superior esquerda da folla. {{ui:Actualizar debuxos}} e {{ui:Publicar en PDF}} mantenna actualizada. É un único bloque, `CC_SHEETLIST`: móvao como calquera referencia de bloque.

## Publicar o conxunto

{{ui:Publicar en PDF}} crea un PDF con unha páxina por folla, na orde do conxunto, cada unha co tamaño de papel propio da folla, e cun marcador por folla («A-101 — Planta do piso»). Se hai un subconxunto seleccionado, CadCraft pregunta se quere publicar só ese subconxunto. As cartelas do PDF énchense desde o conxunto mesmo antes de actualizar os debuxos; os propios debuxos non se modifican ao publicar. O PDF descárgase.

{{ui:Publicar en DWG…}} escribe cada folla como un DWG propio (DWG 2018): o modelo e esa folla, coa súa cartela cuberta desde o conxunto, co nome do seu número e título (`A-101 Planta do nivel 1.dwg`). Escolla {{ui:DWG}}, ou {{ui:DWG + PDF}} para ter ademais o PDF do conxunto. Un `publish.json` enumera cada ficheiro co seu tamaño e SHA-256. Cando o cartafol do conxunto se pode escribir (CadCraft Studio, ou un cartafol escollido no navegador), os ficheiros van a un cartafol `<set name> - published`; se non, descárganse nun zip. As [substitucións de clase](topic:viewport-overrides) da viewport viaxan en cada DWG.

## Arquivar o conxunto

{{ui:Arquivar como zip}} empaqueta o ficheiro do conxunto, cada debuxo que usa e o que eses debuxos enlazan (debuxos enlazados, e os seus a súa vez, e imaxes), conservando os seus cartafoles, e un `Transmittal.txt` que enumera cada ficheiro. Unha ligazón que non está no cartafol do conxunto aparece alí como ausente. As ligazóns atópanse pola súa ruta desde o debuxo, e logo polo seu nome de ficheiro en calquera lugar do cartafol.

## O ficheiro do conxunto

O ficheiro `.ccsheets` é JSON que pode ler en calquera editor de texto:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Clínica Riverside",
  "properties": { "PROJECTNAME": "Clínica Riverside", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Planos", "sheets": [
    { "id": "p1", "file": "planos/Nivel 1.dwg", "layout": "A-101 Planta do nivel 1", "number": "A-101", "title": "Planta do nivel 1" }
  ] } ]
}
```

As rutas son relativas ao cartafol do conxunto, con `/` entre cartafoles. CadCraft comproba o ficheiro ao abrilo: unha ruta absoluta, unha folla sen ficheiro ou disposición, ou un texto que non sexa simple quédanse fóra, e o historial indícao.

## Solución de problemas

| O que ve | Motivo | Que facer |
|---|---|---|
| "Este cartafol é só de lectura aquí" | O navegador non pode escribir nun cartafol | Use Chrome ou Edge, ou a aplicación de escritorio; mentres tanto, {{ui:Descargar o ficheiro do conxunto}} conserva os seus cambios |
| Unha folla queda fóra do PDF: «non ten unha disposición chamada …» | A disposición da folla foi renomeada ou eliminada no seu debuxo | Abra o debuxo e comprobe as súas lapelas; retire a folla e engádaa de novo |
| Unha cartela queda baleira | Os seus atributos teñen outras etiquetas | Renomee as etiquetas de atributo cos nomes de campo de arriba (BEDIT) |
| «xa ten unha disposición chamada … polo que a lapela non se renomeou» | Dúas follas dun mesmo debuxo recibirían o mesmo nome de lapela | Dea a unha delas outro número ou título |

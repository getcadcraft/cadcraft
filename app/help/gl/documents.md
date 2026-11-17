---
title: Documentos: rexistro en saída, revisións e liberación
summary: Manteña baixo control os debuxos dunha carpeta de proxecto: rexistre un ficheiro en saída para que ninguén máis o cambie, rexístreo en entrada como unha nova revisión, envíeo a revisión e libéreo co nome dun aprobador; historial, que usa que, unha lista de materiais e cadros de título que mostran a revisión.
keywords: configuración do proxecto, aprobadores, administradores, letras de revisión, ASME, só lectura, comparar revisións, abrir copia, partcraft, bimcraft, documents, DOCUMENTS, DOCS, arquivo, xestión de documentos, pdm, rexistro en saída, rexistro en entrada, checkout, checkin, bloqueo, revisión, rev, letra de revisión, liberación, liberado, aprobar, aprobación, revisión, obsoleto, onde se usa, bom, lista de materiais, cadro de título, cadro de revisións, carpeta do proxecto
from: ee938722
---

## Que vai crear

Unha carpeta de proxecto na que cada debuxo ten unha revisión (A.1, A.2 … e despois A, B …) e un estado (En curso, Para revisión, Liberado, Obsoleto), na que só unha persoa de cada vez pode cambiar un ficheiro, e na que cada rexistro en saída, rexistro en entrada, aprobación e rotura de rexistro en saída queda anotado con quen o fixo e cando.

Todo se garda na propia carpeta, nunha carpeta oculta `.ccvault` xunto aos debuxos. Unha carpeta nunha unidade compartida ou sincronizada serve para un equipo completo. Non hai servidor e non se envía nada.

## Abrir Documentos

Escriba `DOCUMENTS` (ou `DOCS`) e prema {{key:Enter}}. O panel ábrese ao lado do debuxo.

Prema {{ui:Escolla a carpeta do proxecto}} e seleccione a carpeta que contén os debuxos do proxecto. As carpetas de proxecto funcionan en CadCraft Studio e en navegadores que poden abrir unha carpeta (Chrome, Edge). Noutros navegadores o panel indícao.

A primeira vez, escriba o seu nome (vai en todo o que fai) e o nome deste computador. Se ten a sesión iniciada, o seu nome xa está aí.

## Crear un arquivo

Unha carpeta que aínda non é un arquivo ofrece {{ui:Crear un arquivo nesta carpeta}}. Escriba o nome do proxecto. Despois abra {{ui:Ficheiros fóra do arquivo}} e prema {{ui:Engadir}} xunto a cada ficheiro que quere controlar. Un ficheiro engadido comeza na revisión **A.1**, En curso.

## Cambiar un debuxo

1. Prema {{ui:Abrir}} xunto a un debuxo. Ábrese en CadCraft. Se non está rexistrado en saída a seu nome, mire pero non o cambie: {{ui:Gardar}} negarase a escribir enriba e dirá por que (use {{ui:Gardar como}} para conservar unha copia propia).
2. Prema {{ui:Rexistrar en saída}}. Ninguén máis pode rexistralo agora; o panel mostra quen o ten, en que computador e desde cando.
3. Debuxe.
4. Prema {{ui:Rexistrar en entrada}} e indique o que cambiou. O debuxo que ten aberto gárdase na carpeta do proxecto no seu propio formato e convértese na seguinte revisión (A.1, despois A.2). Se rexistra en entrada sen cambios, a revisión mantense.

{{ui:Desfacer rexistro en saída}} devolve o ficheiro sen unha nova revisión.

## Revisión e liberación

- {{ui:Enviar para revisión}}: o ficheiro é de só lectura mentres se revisa.
- {{ui:Aprobar}}: escriba o nome do aprobador. A.3 pasa a ser **A**, Liberado. Os ficheiros liberados son de só lectura.
- {{ui:Devolver}}: volve a En curso, co motivo.
- {{ui:Nova revisión}} nun ficheiro liberado rexistra en saída para a seguinte letra: o seu primeiro rexistro en entrada é **B.1**. {{ui:Desfacer rexistro en saída}} antes diso déixao en A.
- {{ui:Marcar como obsoleto}} retira un ficheiro liberado.

Un proxecto pode manter unha lista de quen pode aprobar, e pode esixir que o aprobador non sexa a persoa que rexistrou o ficheiro en entrada (vexa Configuración do proxecto máis abaixo).

## Configuración do proxecto

Abra {{ui:Configuración do proxecto}} no panel:

- **Aprobadores**: un nome por liña. Cando hai algún, só eles poden aprobar unha liberación.
- **O aprobador ten que ser outra persoa distinta do autor**: a regra dos «catro ollos».
- **Administradores**: un nome por liña. Cando hai algún, só eles poden romper o rexistro en saída doutra persoa ou cambiar estes axustes.
- **Letras de revisión que se omiten**: {{ui:Usar a secuencia ASME Y14.35}} omite I, O, Q, S, X e Z, ou escriba as súas propias letras. As letras xa dadas mantéñense; a elección aplícase ás seguintes revisións.
- **Un rexistro en saída considérase caducado despois de**: o número de días (14 por defecto).

Prema {{ui:Gardar configuración}}. O cambio escríbese no rexistro con quen o fixo.

## Alguén deixou un ficheiro rexistrado en saída

{{ui:Romper retirada}} libera un ficheiro que outra persoa rexistrou en saída (está fóra ou o seu computador faleceu). Ten que escribir un motivo: escríbese no rexistro, xunto a de quen era o rexistro en saída. Cando o proxecto ten administradores, só eles poden facelo. Un rexistro en saída de máis de 14 días márcase como de longa duración.

## Historial, revisións, usos, usado por

Prema o nome dun ficheiro para ver:

- {{ui:Historial}}: cada evento, o máis recente primeiro, con quen, en que computador e cando.
- {{ui:Revisións}}: cada revisión conservada. Hai unha copia de cada revisión no arquivo (o mesmo contido gárdase unha soa vez). {{ui:Abrir copia}} abre esa revisión como unha copia simple que non pode sobrescribir o ficheiro do arquivo. {{ui:Comparar con}} enumera o que se engadiu, eliminou e cambiou entre esa revisión e a anterior (ou calquera outra que escolla), e colóreo no debuxo.
- {{ui:Usa}}: os debuxos ás que enlaza (xrefs), os documentos ao que apunta un modelo IFC, as pezas dun conxunto de PartCraft.
- {{ui:Usado por}}: cada ficheiro do arquivo que usa este.

{{ui:Lista de materiais (CSV)}} garda a lista de todo o que usa un ficheiro, nivel por nivel, con cantidades, revisións e estados, para unha folla de cálculo.

## Un cadro de revisións na folla

Con un debuxo aberto que teña unha disposición, prema {{ui:Cadro de revisións}}. Debuxase unha táboa das revisións liberadas (revisión, data, por, aprobado, descrición) na parte superior dereita da folla que está a ver. Cando aprobe unha liberación, a táboa actualízase.

## Revisión no cadro de título

Dé aos atributos do seu cadro de título unha destas etiquetas e prema {{ui:Encher os cadros de título}} no debuxo aberto:

| Etiqueta | Enchido con |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | a revisión (B, ou B.2 mentres se traballa nela) |
| `VAULT.STATE` | o estado (Liberado …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | a data da última revisión |
| `VAULT.APPROVER`, `APPROVED_BY` | quen aprobou a última liberación |

## PartCraft e BimCraft

PartCraft e BimCraft teñen o mesmo panel de Documentos para os seus propios ficheiros: pezas e conxuntos en PartCraft, modelos IFC en BimCraft. Ao rexistrar en entrada, gárdase o modelo aberto na carpeta do proxecto, e un conxunto mostra que pezas usa e unha lista de materiais.

## Cousas que conven saber

- Dúas persoas na mesma carpeta compartida non poden rexistrar en saída o mesmo ficheiro á vez: o rexistro en saída é un ficheiro que o sistema se nega a crear dúas veces. Nun navegador, e nun Studio cuxo shell é anterior a esta función, esta regra é tan estrita como permite a carpeta: dous rexistros en saída no mesmo instante poderían ter éxito os dous. O panel indica cal se aplica.
- Non edite nin elimine a carpeta `.ccvault` a man. O rexistro que contén é o historial; o arquivo reconstrúe a súa lista a partir del se fai falta.
- Cambiar un ficheiro da carpeta sen rexistralo en saída aparece como {{ui:Cambiado na carpeta sen rexistro en saída}}.

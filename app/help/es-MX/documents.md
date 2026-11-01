---
title: Documentos: reservar, revisiones y liberación
summary: Mantenga bajo control los dibujos de una carpeta de proyecto: reserve un archivo para que nadie más lo cambie, entréguelo como una revisión nueva, envíelo a revisión y libérelo con el nombre de quien aprueba; historial, qué usa qué, una lista de materiales y cuadros de rótulo que muestran la revisión.
keywords: documentos, DOCUMENTS, DOCS, bóveda, gestión de documentos, reservar, entregar, bloqueo, revisión, letra de revisión, liberar, liberado, aprobar, aprobación, obsoleto, dónde se usa, lista de materiales, cuadro de rótulo, tabla de revisiones, carpeta de proyecto, ajustes del proyecto, aprobadores, administradores, solo lectura, comparar revisiones, copia, PartCraft, BimCraft
from: ee938722
---

## Qué logrará

Una carpeta de proyecto donde cada dibujo tiene una revisión (A.1, A.2 … y luego A, B …) y un estado (En trabajo, En revisión, Liberado, Obsoleto), donde solo una persona a la vez puede cambiar un archivo, y donde cada reserva, entrega, aprobación y reserva rota queda anotada con quién la hizo y cuándo.

Todo se guarda en la propia carpeta, en una carpeta oculta `.ccvault` junto a sus dibujos. Sirve una carpeta en una unidad compartida o sincronizada para todo un equipo. No hay servidor y no se sube nada.

## Abrir Documentos

Escriba `DOCUMENTS` (o `DOCS`) y pulse {{key:Enter}}. El panel se abre junto al dibujo.

Elija {{ui:Elegir la carpeta del proyecto}} y escoja la carpeta que contiene los dibujos del proyecto. Las carpetas de proyecto funcionan en CadCraft Studio y en navegadores que pueden abrir una carpeta (Chrome, Edge). En otros navegadores el panel lo indica.

La primera vez, escriba su nombre (queda en todo lo que haga) y el nombre de esta computadora. Si inició sesión, su nombre ya está puesto.

## Crear una bóveda

Una carpeta que aún no es una bóveda ofrece {{ui:Crear una bóveda en esta carpeta}}. Escriba el nombre del proyecto. Luego abra {{ui:Archivos fuera de la bóveda}} y elija {{ui:Agregar}} junto a cada archivo que quiera controlar. Un archivo agregado empieza en la revisión **A.1**, En trabajo.

## Cambiar un dibujo

1. Elija {{ui:Abrir}} junto a un dibujo. Se abre en CadCraft. Si no lo tiene reservado, solo mírelo: Guardar se niega a escribir sobre él y dice por qué (use Guardar como para conservar una copia propia).
2. Elija {{ui:Reservar}}. Nadie más puede reservarlo ahora; el panel les muestra quién lo tiene, en qué computadora y desde cuándo.
3. Dibuje.
4. Elija {{ui:Entregar}} y diga qué cambió. El dibujo abierto se guarda en la carpeta del proyecto en su propio formato y pasa a ser la revisión siguiente (A.1, luego A.2). Entregar sin cambios conserva la revisión.

{{ui:Deshacer la reserva}} devuelve el archivo sin crear una revisión nueva.

## Revisar y liberar

- {{ui:Enviar a revisión}}: el archivo queda de solo lectura mientras se revisa.
- {{ui:Aprobar}}: escriba el nombre de quien aprueba. A.3 pasa a ser **A**, Liberado. Los archivos liberados son de solo lectura.
- {{ui:Devolver}}: vuelve a En trabajo, con el motivo.
- {{ui:Nueva revisión}} en un archivo liberado lo reserva para la letra siguiente: su primera entrega es **B.1**. {{ui:Deshacer la reserva}} antes de eso lo deja en A.
- {{ui:Marcar obsoleto}} retira un archivo liberado.

Un proyecto puede llevar una lista de quién puede aprobar y exigir que quien aprueba no sea quien entregó el archivo (vea Ajustes del proyecto, abajo).

## Ajustes del proyecto

Abra {{ui:Ajustes del proyecto}} en el panel:

- **Aprobadores**: un nombre por línea. Si hay alguno, solo ellos pueden aprobar una liberación.
- **El aprobador debe ser alguien distinto del autor**: la regla de los "cuatro ojos".
- **Administradores**: un nombre por línea. Si hay alguno, solo ellos pueden romper la reserva de otra persona o cambiar estos ajustes.
- **Letras de revisión que se omiten**: {{ui:Usar la secuencia ASME Y14.35}} omite I, O, Q, S, X y Z, o escriba sus propias letras. Las letras ya asignadas se quedan; la elección vale para las próximas revisiones.
- **Una reserva se considera vencida después de**: el número de días (14 de forma predeterminada).

Elija {{ui:Guardar ajustes}}. El cambio queda en el registro con quién lo hizo.

## Alguien dejó un archivo reservado

{{ui:Romper la reserva}} libera un archivo que otra persona tiene reservado (está ausente, o su computadora falló). Debe escribir un motivo: queda en el registro con el nombre de quien lo tenía. Cuando el proyecto tiene administradores, solo ellos pueden hacerlo. Una reserva de más de 14 días se marca como muy antigua.

## Historial, revisiones, usa, lo usan

Elija el nombre de un archivo para ver:

- {{ui:Historial}}: cada evento, el más reciente primero, con quién, en qué computadora y cuándo.
- {{ui:Revisiones}}: cada revisión guardada. Hay una copia de cada revisión en la bóveda (el mismo contenido se guarda una sola vez). {{ui:Abrir copia}} abre esa revisión como una copia simple que no puede sobrescribir el archivo de la bóveda. {{ui:Comparar con}} lista lo que se agregó, quitó y cambió entre esa revisión y la anterior (o cualquier otra que elija), y lo colorea en el dibujo.
- {{ui:Usa}}: los dibujos a los que se vincula (referencias externas), los documentos a los que apunta un modelo IFC, las piezas de un ensamble de PartCraft.
- {{ui:Lo usan}}: cada archivo de la bóveda que usa este.

{{ui:Lista de materiales (CSV)}} guarda la lista de todo lo que usa un archivo, nivel por nivel, con cantidades, revisiones y estados, para una hoja de cálculo.

## Una tabla de revisiones en la hoja

Con un dibujo abierto que tenga una presentación, elija {{ui:Tabla de revisiones}}. Se dibuja una tabla de las revisiones liberadas (revisión, fecha, por, aprobó, descripción) arriba a la derecha de la hoja que está viendo. Al aprobar una liberación, la tabla se actualiza.

## La revisión en el cuadro de rótulo

Dé a los atributos de su cuadro de rótulo una de estas etiquetas y elija {{ui:Llenar cuadros de rótulo}} en el dibujo abierto:

| Etiqueta | Se llena con |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | la revisión (B, o B.2 mientras se trabaja) |
| `VAULT.STATE` | el estado (Liberado …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | la fecha de la última revisión |
| `VAULT.APPROVER`, `APPROVED_BY` | quién aprobó la última liberación |

## PartCraft y BimCraft

PartCraft y BimCraft tienen el mismo panel Documentos para sus propios archivos: piezas y ensambles en PartCraft, modelos IFC en BimCraft. Al entregar se guarda en la carpeta del proyecto el modelo abierto, y un ensamble muestra qué piezas usa y una lista de materiales.

## Conviene saber

- Dos personas en la misma carpeta compartida no pueden reservar a la vez un archivo: la reserva es un archivo que el sistema se niega a crear dos veces. En un navegador, y en un Studio cuyo shell es anterior a esta función, es tan estricto como lo permite la carpeta: dos reservas en la misma fracción de segundo podrían tener éxito. El panel dice cuál caso aplica.
- No edite ni borre a mano la carpeta `.ccvault`. El registro que contiene es el historial; la bóveda reconstruye su lista a partir de él si hace falta.
- Un archivo cambiado en la carpeta sin reservarlo se muestra como {{ui:Cambiado en la carpeta sin reservarlo}}.

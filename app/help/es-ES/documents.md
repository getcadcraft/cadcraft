---
title: Documentos: reserva, revisiones y liberación
summary: Mantenga bajo control los dibujos de una carpeta de proyecto: reserve un archivo para que nadie más lo modifique, devuélvalo como nueva revisión, envíelo a revisión y libérelo con el nombre de un aprobador; historial, qué usa qué, una lista de materiales y cajetines que muestran la revisión.
keywords: ajustes del proyecto, aprobadores, administradores, letras de revisión, ASME, solo lectura, comparar revisiones, abrir copia, partcraft, bimcraft, documentos, DOCUMENTS, DOCS, depósito, gestión de documentos, pdm, reservar, devolver, check out, check in, checkout, checkin, bloqueo, revisión, rev, letra de revisión, liberación, liberado, aprobar, aprobación, revisar, obsoleto, dónde se usa, bom, lista de materiales, cajetín, cuadro de revisiones, carpeta del proyecto
from: ee938722
---

## Qué creará

Una carpeta de proyecto en la que cada dibujo tiene una revisión (A.1, A.2 … después A, B …) y un estado (En curso, Para revisión, Liberado, Obsoleto), en la que solo una persona a la vez puede modificar un archivo, y en la que cada reserva, devolución, aprobación y reserva anulada queda registrada con quién la hizo y cuándo.

Todo se guarda en la propia carpeta, en una carpeta oculta `.ccvault` junto a sus dibujos. Una carpeta de una unidad compartida o una carpeta sincronizada sirve para todo un equipo. No hay servidor y no se sube nada.

## Abrir Documentos

Escriba `DOCUMENTS` (o `DOCS`) y pulse {{key:Enter}}. El panel se abre junto al dibujo.

Elija {{ui:Elegir la carpeta del proyecto}} y seleccione la carpeta que contiene los dibujos del proyecto. Las carpetas de proyecto funcionan en CadCraft Studio y en los navegadores que pueden abrir una carpeta (Chrome, Edge). En otros navegadores, el panel lo indica.

La primera vez, escriba su nombre (aparece en todo lo que haga) y el nombre de este equipo. Si ha iniciado sesión, su nombre ya está puesto.

## Crear un depósito

Una carpeta que todavía no es un depósito ofrece {{ui:Crear un depósito en esta carpeta}}. Escriba el nombre del proyecto. Después abra {{ui:Archivos fuera del depósito}} y elija {{ui:Añadir}} junto a cada archivo que quiera incorporar al control. Un archivo añadido empieza en la revisión **A.1**, En curso.

## Modificar un dibujo

1. Elija {{ui:Abrir}} junto a un dibujo. Se abre en CadCraft. Si no está reservado a su nombre, consúltelo, pero no lo modifique: Guardar se niega a sobrescribirlo y explica el motivo (use Guardar como para conservar una copia propia).
2. Elija {{ui:Reservar}}. Nadie más puede reservarlo ahora; el panel le muestra quién lo tiene, en qué equipo y desde cuándo.
3. Dibuje.
4. Elija {{ui:Devolver}} e indique qué ha cambiado. El dibujo abierto se guarda en la carpeta del proyecto con su propio formato y pasa a ser la siguiente revisión (A.1, después A.2). Si devuelve sin cambios, la revisión se mantiene.

{{ui:Cancelar reserva}} devuelve el archivo sin crear una nueva revisión.

## Revisión y liberación

- {{ui:Enviar a revisión}}: el archivo es de solo lectura mientras se revisa.
- {{ui:Aprobar}}: escriba el nombre del aprobador. A.3 pasa a ser **A**, Liberado. Los archivos liberados son de solo lectura.
- {{ui:Devolver al autor}}: vuelve a En curso, indicando el motivo.
- {{ui:Nueva revisión}} sobre un archivo liberado lo reserva para la siguiente letra: su primera devolución será **B.1**. {{ui:Cancelar reserva}} antes de eso lo deja en A.
- {{ui:Declarar obsoleto}} retira un archivo liberado.

Un proyecto puede mantener una lista de quién puede aprobar, y puede exigir que el aprobador no sea la persona que devolvió el archivo (véase Ajustes del proyecto más abajo).

## Ajustes del proyecto

Abra {{ui:Ajustes del proyecto}} en el panel:

- **Aprobadores**: un nombre por línea. Si hay alguno, solo ellos pueden aprobar una liberación.
- **El aprobador debe ser otra persona distinta del autor**: la regla de «cuatro ojos».
- **Administradores**: un nombre por línea. Si hay alguno, solo ellos pueden anular la reserva de otra persona o cambiar estos ajustes.
- **Letras de revisión que se omiten**: {{ui:Usar la secuencia ASME Y14.35}} omite I, O, Q, S, X y Z, o escriba sus propias letras. Las letras ya asignadas se mantienen; la elección se aplica a las siguientes revisiones.
- **Una reserva se considera caducada después de**: el número de días (14 por defecto).

Elija {{ui:Guardar ajustes}}. El cambio queda anotado en el registro con quién lo hizo.

## Un archivo quedó reservado

{{ui:Anular reserva}} libera un archivo que otra persona ha reservado (está ausente, o su equipo se ha estropeado). Debe escribir un motivo: queda anotado en el registro junto con de quién era la reserva. Cuando el proyecto tiene administradores, solo ellos pueden hacerlo. Una reserva con más de 14 días se marca como de larga duración.

## Historial, revisiones, usos, usado por

Elija el nombre de un archivo para ver:

- {{ui:Historial}}: cada suceso, del más reciente al más antiguo, con quién, en qué equipo y cuándo.
- {{ui:Revisiones}}: cada revisión conservada. Una copia de cada revisión está en el depósito (el mismo contenido se guarda una sola vez). {{ui:Abrir copia}} abre esa revisión como una copia normal que no puede sobrescribir el archivo del depósito. {{ui:Comparar con}} enumera lo añadido, eliminado y modificado entre esa revisión y la anterior (o cualquier otra que elija), y lo resalta en el dibujo.
- {{ui:Usa}}: los dibujos que enlaza (xref), los documentos a los que apunta un modelo IFC y las piezas de un ensamblaje de PartCraft.
- {{ui:Usado por}}: cada archivo del depósito que usa este.

{{ui:Lista de materiales (CSV)}} guarda la lista de todo lo que usa un archivo, nivel por nivel, con cantidades, revisiones y estados, para una hoja de cálculo.

## Un cuadro de revisiones en la hoja

Con un dibujo abierto que tiene un diseño de presentación, elija {{ui:Cuadro de revisiones}}. En la parte superior derecha de la hoja que está viendo se dibuja una tabla de las revisiones liberadas (revisión, fecha, por, aprobado, descripción). Cuando aprueba una liberación, la tabla se actualiza.

## Revisión en el cajetín

Asigne a los atributos de su cajetín una de estas etiquetas y elija {{ui:Llenar cuadros de rotulación}} en el dibujo abierto:

| Etiqueta | Se rellena con |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | la revisión (B, o B.2 mientras se trabaja en ella) |
| `VAULT.STATE` | el estado (Liberado …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | la fecha de la última revisión |
| `VAULT.APPROVER`, `APPROVED_BY` | quién aprobó la última liberación |

## PartCraft y BimCraft

PartCraft y BimCraft tienen el mismo panel Documentos para sus propios archivos: piezas y ensamblajes en PartCraft, modelos IFC en BimCraft. Devolver guarda el modelo abierto en la carpeta del proyecto, y un ensamblaje muestra qué piezas usa y una lista de materiales.

## Conviene saber

- Dos personas en la misma carpeta compartida no pueden reservar un mismo archivo a la vez: la reserva es un archivo que el sistema se niega a crear dos veces. En un navegador, y en un Studio cuyo shell es anterior a esta función, esto es tan estricto como lo permita la carpeta: dos reservas en el mismo instante podrían tener éxito. El panel indica cuál de los dos casos se aplica.
- No edite ni elimine la carpeta `.ccvault` a mano. El registro que contiene es el historial; el depósito reconstruye su lista a partir de él si hace falta.
- Un cambio en un archivo de la carpeta sin reservarlo se muestra como {{ui:Modificado en la carpeta sin reserva}}.

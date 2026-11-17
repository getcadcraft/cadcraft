---
title: Documentos: retiro, revisiones y liberación
summary: Mantenga bajo control los planos de una carpeta de proyecto: retire un archivo para que nadie más lo cambie, devuélvalo como nueva revisión, envíelo a revisión y libérelo con el nombre de quien aprueba; historial, qué usa qué, una lista de materiales y cajetines que muestran la revisión.
keywords: configuración de proyecto, aprobadores, administradores, letras de revisión, ASME, solo lectura, comparar revisiones, abrir copia, partcraft, bimcraft, documentos, DOCUMENTS, DOCS, depósito, gestión de documentos, pdm, retirar, devolver, retiro, devolución, bloqueo, revisión, rev, letra de revisión, liberar, liberado, aprobar, aprobación, revisar, obsoleto, dónde se usa, bom, lista de materiales, cajetín, cajetín de revisión, carpeta del proyecto
from: ee938722
---

## Lo que va a crear

Una carpeta de proyecto donde cada plano tiene una revisión (A.1, A.2 … luego A, B …) y un estado (En progreso, Para revisión, Liberado, Obsoleto), donde solo una persona a la vez puede cambiar un archivo, y donde cada retiro, devolución, aprobación y retiro anulado queda registrado con quién lo hizo y cuándo.

Todo se guarda en la propia carpeta, en una carpeta oculta `.ccvault` junto a sus planos. Una carpeta en una unidad compartida o una carpeta sincronizada sirve para todo un equipo. No hay servidor y nada se sube.

## Abrir Documentos

Escriba `DOCUMENTS` (o `DOCS`) y presione {{key:Enter}}. El panel se abre junto al plano.

Elija {{ui:Elija la carpeta del proyecto}} y seleccione la carpeta que contiene los planos del proyecto. Las carpetas de proyecto funcionan en CadCraft Studio y en navegadores que pueden abrir una carpeta (Chrome, Edge). En otros navegadores, el panel lo indica.

La primera vez, escriba su nombre (aparece en todo lo que haga) y el nombre de esta computadora. Si ha iniciado sesión, su nombre ya está puesto.

## Iniciar un depósito

Una carpeta que todavía no es un depósito ofrece {{ui:Cree un depósito en esta carpeta}}. Escriba el nombre del proyecto. Luego abra {{ui:Archivos fuera del depósito}} y elija {{ui:Agregar [A]}} junto a cada archivo que quiera poner bajo control. Un archivo que agregue empieza en la revisión **A.1**, En progreso.

## Cambiar un plano

1. Elija {{ui:Abrir}} junto a un plano. Se abre en CadCraft. Si no está retirado a su nombre, mírelo pero no lo cambie: Guardar se niega a escribir encima y dice por qué (use Guardar como para guardar una copia propia).
2. Elija {{ui:Retirar}}. Nadie más puede retirarlo ahora; el panel le muestra quién lo tiene, en qué computadora y desde cuándo.
3. Dibuje.
4. Elija {{ui:Devolver}} y diga qué cambió. El plano que tiene abierto se guarda en la carpeta del proyecto con su propio formato y pasa a ser la siguiente revisión (A.1, luego A.2). Devolver sin cambios mantiene la revisión.

{{ui:Deshacer retiro}} devuelve el archivo sin una nueva revisión.

## Revisión y liberación

- {{ui:Mondá revisiónpe}}: el archivo queda de solo lectura mientras se revisa.
- {{ui:Aprobá}}: escriba el nombre de quien aprueba. A.3 pasa a ser **A**, Liberado. Los archivos liberados son de solo lectura.
- {{ui:Emboguejy}}: vuelve a En progreso, con el motivo.
- {{ui:Revisión pyahu}} en un archivo liberado lo retira para la siguiente letra: su primera devolución es **B.1**. {{ui:Deshacer retiro}} antes de eso lo deja en A.
- {{ui:Marcar obsoleto}} retira de uso un archivo liberado.

Un proyecto puede mantener una lista de quién puede aprobar, y puede exigir que quien aprueba no sea la persona que devolvió el archivo (vea Configuración del proyecto más abajo).

## Configuración del proyecto

Abra {{ui:Proyecto configuración}} en el panel:

- **Aprobadores**: un nombre por línea. Cuando hay alguno, solo ellos pueden aprobar una liberación.
- **Quien aprueba debe ser otra persona que el autor**: la regla de "cuatro ojos".
- **Administradores**: un nombre por línea. Cuando hay alguno, solo ellos pueden anular el retiro de otra persona o cambiar esta configuración.
- **Letras de revisión a omitir**: {{ui:Usar la secuencia ASME Y14.35}} omite I, O, Q, S, X y Z, o escriba sus propias letras. Las letras ya dadas se mantienen; la elección se aplica a las siguientes revisiones.
- **Un retiro se considera vencido después de**: la cantidad de días (14 por defecto).

Elija {{ui:Configuración oñeñongatu}}. El cambio queda anotado en el registro con quién lo hizo.

## Alguien dejó un archivo retirado

{{ui:Anular salida [C]}} libera un archivo que otra persona tiene retirado (está ausente o su computadora falló). Debe escribir un motivo: queda anotado en el registro con el retiro de quién era. Cuando el proyecto tiene administradores, solo ellos pueden hacerlo. Un retiro de más de 14 días se marca como de larga data.

## Historial, revisiones, usos, usado por

Elija el nombre de un archivo para ver:

- {{ui:Historial}}: cada evento, del más nuevo al más antiguo, con quién, en qué computadora y cuándo.
- {{ui:Revisiones}}: cada revisión guardada. Hay una copia de cada revisión en el depósito (el mismo contenido se guarda una sola vez). {{ui:Kopia abrir}} abre esa revisión como una copia simple que no puede sobrescribir el archivo del depósito. {{ui:Comparar con}} lista lo que se agregó, quitó y cambió entre esa revisión y la anterior (o cualquier otra que elija), y lo colorea en el plano.
- {{ui:Oipuru}}: los planos a los que enlaza (xrefs), los documentos que apunta un modelo IFC, las piezas de un conjunto de PartCraft.
- {{ui:Oipuru avei}}: cada archivo del depósito que usa este.

{{ui:Lista de materiales (CSV)}} guarda la lista de todo lo que usa un archivo, nivel por nivel, con cantidades, revisiones y estados, para una planilla.

## Un cajetín de revisión en la hoja

Con un plano abierto que tiene una disposición, elija {{ui:Revisión cajetín}}. Una tabla de las revisiones liberadas (revisión, fecha, por, aprobado, descripción) se dibuja en la parte superior derecha de la hoja que está viendo. Cuando aprueba una liberación, la tabla se actualiza.

## Revisión en el cajetín

Dé a los atributos de su cajetín una de estas etiquetas y elija {{ui:Completar cajetines}} en el plano abierto:

| Etiqueta | Se llena con |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | la revisión (B, o B.2 mientras se trabaja) |
| `VAULT.STATE` | el estado (Liberado …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | la fecha de la última revisión |
| `VAULT.APPROVER`, `APPROVED_BY` | quién aprobó la última liberación |

## PartCraft y BimCraft

PartCraft y BimCraft tienen el mismo panel Documentos para sus propios archivos: piezas y conjuntos en PartCraft, modelos IFC en BimCraft. Devolver guarda el modelo que está abierto en la carpeta del proyecto, y un conjunto muestra qué piezas usa y una lista de materiales.

## Conviene saber

- Dos personas en la misma carpeta compartida no pueden retirar ambas un archivo: el retiro es un archivo que el sistema se niega a crear dos veces. En un navegador, y en un Studio cuyo shell es anterior a esta función, esto es tan estricto como lo permita la carpeta: dos retiros en el mismo instante podrían tener éxito. El panel indica cuál aplica.
- No edite ni borre la carpeta `.ccvault` a mano. El registro que contiene es el registro; el depósito reconstruye su lista a partir de él si hace falta.
- Un cambio en un archivo de la carpeta sin haberlo retirado se muestra como {{ui:Cambiado en la carpeta sin retiro}}.

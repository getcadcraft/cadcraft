---
title: Documentos y revisiones (el depósito)
summary: Recorrido paso a paso por un trabajo real: poner una carpeta de proyecto bajo control, reservar un plano, modificarlo, devolverlo con una nota, enviarlo a revisión, aprobarlo y liberarlo, ver el historial y qué lo usa, lo que ve una segunda persona mientras está bloqueado, y cómo funciona con carpetas en la nube.
keywords: depósito, documentos, recorrido, tutorial, reservar, devolver, revisión, liberar, aprobar, bloqueo, historial, dónde se usa, carpeta en la nube, carpeta de proyecto, gestión documental, pdm, dos personas, carpeta compartida
from: 3829528d
---

## Lo que hará

Usted es Ana, y trabaja en la Clínica Riverside con un compañero, Ben. Los planos del proyecto están en una carpeta a la que ambos acceden (una unidad compartida, una carpeta sincronizada o una carpeta en la nube). Al final, un archivo habrá pasado de su primera copia a la revisión **A** liberada, se habrá cambiado de nuevo como **B.1**, habrá visto quién hizo cada cosa, y habrá visto lo que ve Ben cuando usted tiene el archivo.

Todo se guarda en una carpeta oculta `.ccvault` junto a sus archivos: sin servidor, sin subir nada (una carpeta en la nube es la excepción, vea el último paso). Para cada botón y regla en un solo lugar, vea el tema *Documentos: reservar, revisiones y liberación* donde lo tenga su aplicación.

## 1. Configure la carpeta del proyecto

1. Elija {{ui:Documentos…}} en el menú {{ui:Más}} de la pestaña **Vista**, o escriba `DOCUMENTS` (o `DOCS`) y pulse {{key:Enter}}.
2. Elija {{ui:Elegir la carpeta del proyecto}} y seleccione la carpeta que contiene los planos del proyecto. (Las carpetas de proyecto funcionan en Studio y en navegadores que pueden abrir una carpeta, como Chrome y Edge. En otros navegadores el panel lo indica.)
3. Elija {{ui:Cambiar}} junto a **Usted:** y escriba su nombre, `Ana` (si se lo pide, también el nombre de este equipo). El panel dice ahora *Usted: Ana en* y el nombre de su equipo. Su nombre figura en todo lo que haga.
4. Elija {{ui:Crear un depósito en esta carpeta}} y escriba el nombre del proyecto, `Clínica Riverside`. El panel dice *Depósito iniciado para Clínica Riverside.*

## 2. Ponga un archivo bajo control

1. Abra **Archivos fuera del depósito** y elija {{ui:Añadir}} junto a `plans/A-101.dxf`.
2. Aparece en **Archivos en el depósito** con la revisión **A.1**, estado **En curso**. A.1 es su primera copia; el depósito guarda una copia de cada revisión.

## 3. Reservar, modificar, devolver

1. Elija {{ui:Abrir}} junto a `plans/A-101.dxf`. El plano se abre en CadCraft y el panel se cierra para que pueda verlo. El panel sigue a un comando de distancia: `DOCUMENTS`.
2. Vuelva a abrir el panel y elija {{ui:Reservar}}. La fila dice ahora **Reservado a usted**. Se ha creado un archivo de bloqueo en `.ccvault/locks`; nadie más puede reservar este archivo hasta que usted lo devuelva.
3. Dibuje algo: añada una línea, mueva un muro. Nada de lo que haga puede guardarse sobre el archivo del depósito a menos que el plano esté reservado a usted; Guardar como siempre funciona para una copia propia.
4. Abra el panel, elija {{ui:Devolver}} y escriba lo que cambió (`Movida la puerta`). El panel dice *devuelto como A.2*. El archivo de la carpeta del proyecto es ahora el dibujo que tenía abierto, y el bloqueo ha desaparecido. Devolver sin cambios mantiene la revisión.

Si cambia de opinión, {{ui:Cancelar reserva}} devuelve el archivo sin una nueva revisión.

## 4. Revisar y liberar

1. Elija {{ui:Enviar a revisión}}. El estado pasa a **En revisión** y el archivo queda en solo lectura.
2. Antes de aprobar, elija {{ui:Ajustes del proyecto}} y enumere quién puede aprobar (un nombre por línea), por ejemplo `Ben` y `Carla`, y marque la regla de que quien aprueba debe ser distinto del autor. Elija {{ui:Guardar ajustes}}. A partir de ahora, el propio depósito rechaza a cualquier otra persona.
3. Ben (o Carla) elige {{ui:Aprobar}} y escribe el nombre de quien aprueba. El estado pasa a **Liberado** y la revisión pasa a ser **A**, con *aprobado por* y el nombre. Un archivo liberado está en solo lectura. {{ui:Devolver al autor}} lo habría devuelto a En curso, indicando el motivo.

El nombre de quien aprueba es el que se escribe en el panel; es un registro de quién dio su conformidad, no una prueba de identidad.

## 5. Una nueva revisión

1. En el archivo liberado, elija {{ui:Nueva revisión}}. Usted lo tiene reservado para la siguiente letra.
2. Modifíquelo y después elija {{ui:Devolver}}. La revisión es **B.1**, en curso. Libérela del mismo modo y pasará a ser **B**. {{ui:Cancelar reserva}} antes de la primera devolución lo deja en **A**.

Las letras de revisión siguen A, B … Z, AA, AB. Si su norma omite algunas letras, el ajuste del proyecto *Usar la secuencia ASME Y14.35* omite I, O, Q, S, X y Z en las revisiones siguientes.

## 6. Vea lo que ha pasado

Elija el nombre del archivo para abrir sus detalles:

- **{{ui:Historial}}**: cada evento, del más reciente al más antiguo, con quién, en qué equipo y cuándo: *Devuelto A.2* por Ana, *Liberado* por Ben, y así sucesivamente.
- **{{ui:Revisiones}}**: la tabla de revisiones. {{ui:Abrir copia}} abre una revisión como copia simple que no puede sobrescribir el archivo del depósito; {{ui:Comparar con}} muestra lo que se añadió, se quitó y se cambió respecto a la revisión anterior, o respecto a cualquier otra.
- **{{ui:Usa}}**: los dibujos a los que enlaza (xrefs).
- **{{ui:Usado por}}**: enumera cada otro dibujo del depósito que enlaza con este: si cambia un plano base, sabe qué láminas revisar.

## Revisión en la lámina

Con el dibujo abierto (y con una presentación en él), elija {{ui:Cuadro de revisiones}}: se dibuja una tabla de las revisiones liberadas en la esquina superior derecha de la lámina. Elija {{ui:Llenar cuadros de rotulación}} para rellenar los atributos del cuadro de rótulos etiquetados `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` o `APPROVED_BY` con la revisión, el estado, la fecha y el aprobador del archivo. Cuando apruebe la siguiente liberación, el cuadro de revisiones se actualiza.

## 7. Lo que ve Ben mientras usted tiene el archivo

Ahora reserve de nuevo el archivo, y pida a Ben que abra la misma carpeta del proyecto en su equipo y abra el panel. En la fila del archivo ve **Reservado por Ana en** su equipo **desde** la hora, y no hay botón {{ui:Reservar}}. Si lo intenta igualmente, el depósito lo rechaza: el bloqueo es un archivo que el sistema no crea dos veces, así que dos personas no pueden tener el archivo a la vez, ni siquiera en el mismo instante, cuando la carpeta está en disco en Studio. (En un navegador la carpeta solo ofrece una garantía aproximada, y el panel lo indica bajo **Carpeta**.)

Si Ana está fuera y Ben necesita el archivo, {{ui:Anular reserva}} lo libera. Debe escribir un motivo; se guarda en el registro junto con de quién era la reserva. Cuando el proyecto enumera administradores, solo ellos pueden hacerlo. Una reserva más antigua que el límite de caducidad (14 días por defecto) se marca como *hace mucho tiempo*. Tras la anulación, la devolución tardía de Ana se rechaza, así que ninguno de los dos puede sobrescribir al otro.

## 8. Carpetas en la nube

Una carpeta en la nube es una carpeta de proyecto guardada en el almacenamiento en la nube de su equipo, así que el equipo no necesita una unidad compartida. En Studio, con la sesión iniciada en su cuenta de CadCraft, el panel muestra {{ui:Abrir una carpeta de la nube}} junto a {{ui:Elegir la carpeta del proyecto}}. Elíjalo y seleccione la carpeta, listada como espacio de trabajo / carpeta. El propietario de un espacio de trabajo crea primero la carpeta, y el almacenamiento en la nube del equipo debe estar vigente. Todo lo anterior funciona igual; el servidor crea el bloqueo, que es estricto entre personas. Si no ha iniciado sesión, el panel le pide que lo haga. En una pestaña de navegador normal no se ofrece el botón de la nube; use Studio.

## Pruébelo

Haga los ocho pasos anteriores con una copia de un archivo real. Para los pasos de dos personas necesita otra persona, o dos ventanas con dos nombres. Si lo prueba con una carpeta compartida real, la página de pruebas de la comunidad tiene una comprobación que pide exactamente esto, y recoge resultados.

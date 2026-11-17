---
title: Documentos y revisiones (la bóveda)
summary: Un recorrido paso a paso por un trabajo real: ponga una carpeta de proyecto bajo control, reserve un plano, cámbielo, entréguelo con una nota, envíelo a revisión, apruebe y libere, vea el historial y qué lo usa, lo que ve la otra persona mientras está bloqueado, y cómo funciona con carpetas en la nube.
keywords: bóveda, documentos, recorrido, tutorial, reservar, entregar, revisión, liberar, aprobar, bloqueo, historial, dónde se usa, carpeta en la nube, carpeta de proyecto, gestión de documentos, pdm, dos personas, carpeta compartida
from: 3829528d
---

## Lo que hará

Usted es Ana, trabajando en el proyecto Riverside Clinic con un colega, Ben. Los planos del proyecto viven en una carpeta a la que ambos tienen acceso (una unidad compartida, una carpeta sincronizada o una carpeta en la nube). Al final, un archivo habrá pasado de su primera copia a una revisión liberada **A**, habrá sido cambiado de nuevo como **B.1**, habrá visto quién hizo cada cosa, y habrá visto lo que ve Ben cuando usted tiene el archivo.

Todo se guarda en una carpeta oculta `.ccvault` junto a sus archivos: sin servidor, nada se sube (una carpeta en la nube es la excepción, vea el último paso). Para cada botón y regla en un solo lugar, vea el tema *Documentos: reserva, revisiones y liberación* donde lo tenga su aplicación.

## 1. Configure la carpeta del proyecto

1. Elija {{ui:Documentos…}} en el menú {{ui:Más}} de la pestaña **Vista**, o escriba `DOCUMENTS` (o `DOCS`) y pulse {{key:Enter}}.
2. Elija {{ui:Elegir la carpeta del proyecto}} y seleccione la carpeta que contiene los planos del proyecto. (Las carpetas de proyecto funcionan en Studio y en navegadores que pueden abrir una carpeta, como Chrome y Edge. En otros navegadores el panel lo indica.)
3. Elija {{ui:Cambiar}} junto a **Usted:** y escriba su nombre, `Ana` (si lo pide, también el nombre de esta computadora). El panel ahora dice *Usted: Ana en* y su computadora. Su nombre queda en todo lo que haga.
4. Elija {{ui:Crear una bóveda en esta carpeta}} y escriba el nombre del proyecto, `Riverside clinic`. El panel dice *Bóveda iniciada para Riverside clinic.*

## 2. Ponga un archivo bajo control

1. Abra **Archivos fuera de la bóveda** y elija {{ui:Añadir}} junto a `plans/A-101.dxf`.
2. Aparece en **Archivos en la bóveda** con la revisión **A.1**, estado **En trabajo**. A.1 es su primera copia; la bóveda guarda una copia de cada revisión.

## 3. Reserve, cambie y entregue

1. Elija {{ui:Abrir}} junto a `plans/A-101.dxf`. El dibujo se abre en CadCraft y el panel se cierra para que pueda verlo. El panel sigue a un comando de distancia: `DOCUMENTS`.
2. Vuelva a abrir el panel y elija {{ui:Reservar}}. La fila ahora dice **Reservado a usted**. Se creó un archivo de bloqueo en `.ccvault/locks`; nadie más puede reservar este archivo hasta que usted lo entregue.
3. Dibuje algo: añada una línea, mueva un muro. Nada de lo que haga puede guardarse sobre el archivo de la bóveda a menos que el dibujo esté reservado a usted; Guardar como siempre funciona para una copia propia.
4. Abra el panel, elija {{ui:Entregar}} y escriba lo que cambió (`Moved the door`). El panel dice *entregado como A.2*. El archivo en la carpeta del proyecto ahora es el dibujo que tenía abierto, y el bloqueo desaparece. Entregar sin cambios conserva la revisión.

Si cambia de opinión, {{ui:Deshacer la reserva}} devuelve el archivo sin una revisión nueva.

## 4. Revise y libere

1. Elija {{ui:Enviar a revisión}}. El estado pasa a **En revisión** y el archivo queda de solo lectura.
2. Antes de aprobar, elija {{ui:Ajustes del proyecto}} y liste quién puede aprobar (un nombre por línea), por ejemplo `Ben` y `Carla`, y marque la regla de que quien aprueba debe ser distinto del autor. Elija {{ui:Guardar ajustes}}. Ahora la bóveda misma rechaza a cualquier otra persona.
3. Ben (o Carla) elige {{ui:Aprobar}} y escribe el nombre de quien aprueba. El estado pasa a **Liberado** y la revisión pasa a **A**, con *aprobado por* y el nombre. Un archivo liberado es de solo lectura. {{ui:Devolver}} lo habría regresado a En trabajo, con un motivo.

El nombre de quien aprueba es el que se escribe en el panel; es un registro de quién dio el visto bueno, no una prueba de identidad.

## 5. Una nueva revisión

1. En el archivo liberado, elija {{ui:Nueva revisión}}. Lo reserva para la siguiente letra.
2. Cámbielo y luego elija {{ui:Entregar}}. La revisión es **B.1**, en trabajo. Libérela de la misma forma y pasará a **B**. {{ui:Deshacer la reserva}} antes de la primera entrega lo deja en **A**.

Las letras de revisión van A, B … Z, AA, AB. Si su norma omite algunas letras, el ajuste del proyecto *Usar la secuencia ASME Y14.35* omite I, O, Q, S, X y Z en las revisiones siguientes.

## 6. Vea lo que pasó

Elija el nombre del archivo para abrir sus detalles:

- **{{ui:Historial}}**: cada evento, el más reciente primero, con quién, en qué computadora y cuándo: *Entregado A.2* por Ana, *Liberado* por Ben, y así sucesivamente.
- **{{ui:Revisiones}}**: la tabla de revisiones. {{ui:Abrir copia}} abre una revisión como una copia simple que no puede sobrescribir el archivo de la bóveda; {{ui:Comparar con}} lista lo que se añadió, quitó y cambió frente a la revisión anterior, o frente a cualquier otra.
- **{{ui:Usa}}**: los dibujos a los que enlaza (referencias externas).
- **{{ui:Lo usan}}**: enumera cada otro dibujo de la bóveda que enlaza con este: si cambia un plano base, sabe qué hojas revisar.

## Revisión en la hoja

Con el dibujo abierto (y una presentación en él), elija {{ui:Tabla de revisiones}}: se dibuja una tabla de las revisiones liberadas en la parte superior derecha de la hoja. Elija {{ui:Llenar cuadros de rotulación}} para completar los atributos del cuadro de rotulación marcados como `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` o `APPROVED_BY` con la revisión, el estado, la fecha y quien aprueba el archivo. Cuando apruebe la siguiente liberación, la tabla de revisiones se actualiza.

## 7. Lo que ve Ben mientras usted tiene el archivo

Ahora reserve de nuevo el archivo, y pida a Ben que abra la misma carpeta de proyecto en su computadora y abra el panel. En la fila del archivo ve **Reservado por Ana en** su computadora **desde** la hora, y no hay botón {{ui:Reservar}}. Si intenta de todos modos, la bóveda lo rechaza: el bloqueo es un archivo que el sistema no crea dos veces, así que dos personas no pueden tener el archivo a la vez, ni siquiera en el mismo instante, cuando la carpeta está en el disco en Studio. (En un navegador la carpeta solo permite un esfuerzo razonable, y el panel lo indica en **Carpeta**.)

Si Ana no está y Ben necesita el archivo, {{ui:Romper la reserva}} lo libera. Debe escribir un motivo; queda en el registro junto con la reserva de quien fuera. Cuando el proyecto enumera administradores, solo ellos pueden hacerlo. Una reserva más antigua que el límite de antigüedad (14 días por defecto) se marca como *mucho tiempo*. Después de romper la reserva, la entrega tardía de Ana se rechaza, así que ustedes dos no pueden sobrescribirse mutuamente.

## 8. Carpetas en la nube

Una carpeta en la nube es una carpeta de proyecto guardada en el almacenamiento en la nube de su equipo, así que el equipo no necesita una unidad compartida. En Studio, con sesión iniciada en su cuenta de CadCraft, el panel muestra {{ui:Abrir una carpeta en la nube}} junto a {{ui:Elegir la carpeta del proyecto}}. Elíjala y seleccione la carpeta, listada como espacio de trabajo / carpeta. Un propietario del espacio de trabajo crea primero la carpeta, y el almacenamiento en la nube del equipo debe estar vigente. Todo lo anterior funciona igual; el servidor hace el bloqueo, que es estricto entre personas. Si no ha iniciado sesión, el panel le pide que inicie sesión. En una pestaña de navegador normal no se ofrece el botón de la nube; use Studio.

## Pruébelo

Haga los ocho pasos anteriores con una copia de un archivo real. Para los pasos de dos personas necesita otra persona, o dos ventanas con dos nombres. Si lo prueba con una carpeta compartida real, la página de pruebas de la comunidad tiene una verificación que pide exactamente esto, y recibe resultados.

---
title: Documentos y revisiones (la bóveda)
summary: Peteĩ tenda trabajo ojeporta: proyecto carpeta control-pe, plano ojecheck out, cambia, check in nota rupive, revisión pyahu, aprobación ha liberación, historial, ha compañero-pe mba'e ojehechauka archivo ojeporta jave, nube carpeta rupive.
keywords: bóveda, documentos, guía, tutorial, check out, check in, revisión, liberar, aprobar, bloqueo, historial, dónde se usa, carpeta en la nube, carpeta de proyecto, gestión documental, pdm, dos personas, carpeta compartida
from: 3829528d
---

## Mba'e ojapóta

Ana, Riverside Clinic-pe ojapo, compañero Ben-gui. Proyecto plano peteĩ carpeta-pe oiko, mokõi ojeguahẽ (carpeta compartida, sincronizada térã nube). Ojeikuaáva: peteĩ archivo primer copia-gui revisión **A** liberado, **B.1** rupi ojecambia, quién mba'e ojapo ojehecha, ha Ben ojehecha ko archivo ojeporta jave.

Opa hecha ha reglas peteĩ lugar-pe, ver tema *Documentos: check out, revisiones y liberación* aplicación-pe.

Todo oñeñongatu `.ccvault` oculto carpeta-pe archivo rembiguái: servidor ndaiporiva, ni ojeupload (nube carpeta excepción, último paso ver).

## 1. Proyecto carpeta ojeconfigura

1. Vista pestaña {{ui:Más}} menú-pe {{ui:Documentos…}} elegí, térã `DOCUMENTS` (`DOCS`) escribí ha {{key:Enter}} apretá.
2. {{ui:Elija la carpeta del proyecto}} elegí ha proyecto plano carpeta elegí. (Proyecto carpeta Studio-pe ha carpeta abrir ikatu navegador-pe, Chrome ha Edge-pe. Ambue navegador-pe panel ojehechauka.)
3. **Tu:** rembipota {{ui:Cambiar}} elegí, `Ana` escribí (ojeporta jave, computadora nombre avei). Panel ojehechauka *Tu: Ana en* ha nde computadora. Nde nombre opa ojapo rehe oikóta.
4. {{ui:Cree un depósito en esta carpeta}} elegí ha proyecto nombre escribí, `Riverside clinic`. Panel ojehechauka *Depósito iniciado para Riverside clinic.*

## 2. Archivo control-pe

1. **Archivos fuera de la bóveda** ojepe'a ha `plans/A-101.dxf` rembipota {{ui:Agregar [A]}} elegí.
2. **Archivos en la bóveda** rupi ojehechauka revisión **A.1**, estado **Trabajo en curso**. A.1 primer copia: bóveda opa revisión copia guardá.

## 3. Check out, cambia, check in

1. `plans/A-101.dxf` rembipota {{ui:Abrir}} elegí. Plano CadCraft-pe ojepyrũ ha panel ojeno, ojehechauka. Panel ojekaru `DOCUMENTS` rupive.
2. Panel jey ojepe'a ha {{ui:Retirar}} elegí. Fila ojehechauka **Retirado por vos**. `.ccvault/locks` pe lock archivo ojapo; ambue ndoikéi check out devolver peve.
3. Plano ojecambia: línea, muro. Bóveda archivo-pe ndaikatúi guardar archivo plano nde-pe retirado ndaipóri; Guardar como copia rupi.
4. Panel ojepe'a, {{ui:Devolver}} elegí ha mba'e ojecambia escribí (`Moved the door`). Panel ojehechauka *devuelto como A.2*. Proyecto carpeta archivo plano ojeabri ojeguata, lock ojepe'a. Cambio ndaipóri jave revisión ndojecambiái.

Mba'e ojeʼe jave, {{ui:Deshacer retiro}} archivo revisión pyahu ndaijapói ojedevolve.

## 4. Revisión ha liberación

1. {{ui:Mondá revisiónpe}} elegí. Estado **Para revisión**, archivo solo lectura.
2. Aprobar mboyve, {{ui:Proyecto configuración}} elegí ha aprobar ikatu-kuéra (peteĩ nombre línea-pe), ejemplo `Ben` ha `Carla`, ha regla marca: aprobador autor ndahaʼéi. {{ui:Configuración oñeñongatu}} elegí. Ahora bóveda-pe ambue ndaikatúi.
3. Ben (térã Carla) {{ui:Aprobá}} elegí ha aprobador nombre escribí. Estado **Liberado**, revisión **A**, *aprobado por* ha nombre. Liberado archivo solo lectura. {{ui:Emboguejy}} elegí jave, razón rupive Trabajo en curso-pe oho jey.

Aprobador nombre panel-pe escribíva ha'e; firma registro ha'e, identidad prueba ndaha'éi.

## 5. Revisión pyahu

1. Liberado archivo-pe {{ui:Revisión pyahu}} elegí. Próxima letra-pe ojeguereko.
2. Cambia, upe rire {{ui:Devolver}}. Revisión **B.1**, trabajo en curso. Mismo modo liberá, **B** ha'e. {{ui:Deshacer retiro}} primer check in-gui mboyve **A** oiko.

Revisión letra A, B … Z, AA, AB oho. Estándar letra ndeguereko jave, proyecto configuración *Usar la secuencia ASME Y14.35* I, O, Q, S, X ha Z ndaporãi próxima revisiónpe.

## 6. Mba'e ojapo ohechá

Archivo nombre elegí, detalle ojeabri:

- **{{ui:Historial}}**: opa hecha, último primero, quién, mba'e computadora ha mboyve: *Devuelto A.2* Ana-gui, *Liberado* Ben-gui, ambue.
- **{{ui:Revisiones}}**: revisión tabla. {{ui:Kopia abrir}} revisión copia simple-pe abrí, bóveda archivo ndaikatúi ojecambia. {{ui:Comparar con}} agregado, ojeguata ha cambiado anterior revisión-gui térã ambue.
- **{{ui:Oipuru}}**: planos vínculo (xref).
- **{{ui:Oipuru avei}}**: bóveda plano-kuéra vínculo ojeporta. Base plano cambia jave, mboyve hoja ojecheck ikatu.

## Revisión hoja-pe

Plano abierto (diseño ha'e) {{ui:Revisión cajetín}} elegí: liberado revisión tabla hoja tuichaiterei ángulo derecho-pe. {{ui:Completar cajetines}} elegí, cajetín atributo `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` térã `APPROVED_BY` etiqueta-pe archivo revisión, estado, fecha ha aprobador. Próxima liberación aprobado jave, revisión cajetín ojeactualiza.

## 7. Ben mba'e ohecha archivo retenido jave

Archivo retirá, Ben-pe ojeʼẽ ko proyecto carpeta ojeabri ha panel ojeno. Archivo fila-pe ohecha **Retirado por Ana en** nde computadora **desde** ojeporta hora, ha {{ui:Retirar}} botón ndaiporiva. Ojeporãsa jave bóveda ndaikatúi: lock archivo ndaikatúi dos vez ojapo, dos persona mismo archivo ndaikatúi, misma segundo-pe avei, carpeta disco-pe Studio-pe jave. (Navegador-pe carpeta mejor ojapo jave, panel **Carpeta** rapykére ojehechauka.)

Ana ndaipóri ha Ben archivo ojeporta jave, {{ui:Anular salida [C]}} ojepe'a. Razón ojeikuaa; registro-pe ohai kuéra check out. Administrador lista ojeikuaa jave, hendive ojeporta. Check out vieja (14 día predeterminado) *mucho tiempo* ojehechauka. Anulación rire Ana tardío check in ndojapói, ndojeʼokamba mbovy overwrite ndojapóiha.

## 8. Nube carpetas

Nube carpeta ojeguerekóva proyecto carpeta equipo nube almacenamiento-pe; compartido disco ndaporãi. Studio-pe, CadCraft cuenta-pe ingresá jave, panel {{ui:Elija la carpeta del proyecto}} rembipota {{ui:Abrir una carpeta en la nube}} ojehechauka. Elegí, carpeta workspace / carpeta ojehechauka. Workspace dueño carpeta primero ojapo, equipo nube almacenamiento ojeguerekóva. Opa ko'ã ojeporta, servidor lock ojapo, personas apytépe estricto. Ndoingresái jave panel ingresá ojehechauka. Navegador común pestaña-pe nube botón ndojeporãi; Studio ojeporta.

## Ojehecha

Ko 8 paso archivo copia real-gui ojeporta. Dos persona paso-pe otra persona térã dos ventana dos nombre ojeguereko. Carpeta compartida real-pe ojeporta jave, Community testing página prueba ojehechauka ha resultado ojeʼẽ.

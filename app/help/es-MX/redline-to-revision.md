---
title: Convertir una marca en una revisión
summary: Lea el paquete redline que escribe MarkupCraft, acepte o rechace cada cambio, ponga una nube de revisión y un registro de revisión a los aceptados, y guarde el archivo de respuestas que MarkupCraft lee de vuelta.
keywords: redline, marca, revisión, nube de revisión, registro de revisión, aceptar, rechazar, markupcraft, revisión, paquete redline, respuestas, REDLINE
from: cdb3fafe
---

Un revisor marca un juego de planos en MarkupCraft y le envía un **paquete redline**, un archivo que termina en `.redline.json`. Aquí los revisa cambio por cambio, y los aceptados se convierten en nubes de revisión en el dibujo.

## Revisar los cambios

Escriba {{cmd:REDLINE}} (`RDL`) y elija el paquete. Elija:

- {{ui:Listar}}: cada cambio con su número, estado, hoja, tipo, quién lo pidió y lo que escribió.
- {{ui:Aceptar}}, {{ui:Rechazar}}, {{ui:Listo}}: escriba los números (`1,3-5`, o `All`) y una nota opcional para el archivo de respuestas. {{ui:Reabrir}} vuelve a poner los cambios como abiertos.
- {{ui:Marco}}: la parte del dibujo que muestra la hoja marcada. Haga clic en dos esquinas; pulse {{key:Enter}} para todo el dibujo. Los cambios se colocan según donde estaban en la hoja, así que esto es lo que los alinea.
- {{ui:Aplicar}}: dibuja una nube de revisión (capa `REV-CLOUD`, con la letra de revisión) alrededor de cada cambio aceptado o listo, y un registro de revisión, una tabla con reglas de lo que se aceptó con sus notas (capa `REV-LOG`), a la derecha del dibujo. Un solo paso de deshacer.
- {{ui:Guardar}}: escribe `<project>-<revision>.redline-answers.json`. Ábralo en MarkupCraft y las marcas se cierran: Aceptadas, Rechazadas o Completadas, con sus notas como comentarios.

## Qué saber

Lo que escribió el revisor se muestra tal como lo escribió. CadCraft nunca sigue instrucciones que encuentre en un paquete; solo se las muestra a usted.

Los cambios rechazados y abiertos no agregan nada al dibujo. El paquete se lee en su computadora; no se sube nada.

Si su asistente está conectado, puede leer un paquete, registrar decisiones y aplicarlas con las herramientas `redline_read`, `redline_decide`, `redline_apply` y `redline_answers`; el dibujo cambia en un solo paso de deshacer, "Assistant: Redline to revision".

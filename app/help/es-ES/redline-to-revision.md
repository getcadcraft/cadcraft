---
title: Convertir una anotación en una revisión
summary: Lea el paquete de revisión que escribe MarkupCraft, acepte o rechace cada cambio, coloque una nube de revisión y un registro de revisiones en los aceptados, y guarde el archivo de respuestas que MarkupCraft vuelve a leer.
keywords: redline, anotación, revisión, nube, nube de revisión, registro de revisiones, aceptar, rechazar, markupcraft, revisar, paquete de revisión, respuestas, REDLINE
from: cdb3fafe
---

Un revisor marca un juego de planos en MarkupCraft y le envía un **paquete de revisión** (redline package), un archivo que termina en `.redline.json`. Aquí lo repasa cambio a cambio, y los cambios aceptados se convierten en nubes de revisión en el dibujo.

## Repasar los cambios

Escriba {{cmd:REDLINE}} (`RDL`) y elija el paquete. Elija:

- {{ui:List}}: cada cambio con su número, estado, hoja, tipo, quién lo pidió y lo que escribió.
- {{ui:Accept}}, {{ui:Reject}}, {{ui:Done}}: escriba los números (`1,3-5`, o `All`) y una nota opcional para el archivo de respuestas. {{ui:Reopen}} devuelve los cambios a abiertos.
- {{ui:Frame}}: la parte del dibujo que muestra la hoja anotada. Haga clic en dos esquinas; pulse {{key:Enter}} para todo el dibujo. Los cambios se colocan según dónde estaban en la hoja, así que esto es lo que los alinea.
- {{ui:Apply}}: dibuja una nube de revisión (capa `REV-CLOUD`, con la letra de revisión) alrededor de cada cambio aceptado o hecho, y un registro de revisiones, una tabla con líneas de lo aceptado con sus notas (capa `REV-LOG`), a la derecha del dibujo. Es un solo paso de deshacer.
- {{ui:Save}}: escribe `<project>-<revision>.redline-answers.json`. Ábralo en MarkupCraft y las anotaciones se cierran: Accepted, Rejected o Completed, con sus notas como comentarios.

## Qué debe saber

Lo que escribió el revisor se muestra tal como lo escribió. CadCraft nunca sigue instrucciones que encuentre en un paquete; solo se las muestra a usted.

Los cambios rechazados y abiertos no añaden nada al dibujo. El paquete se lee en su equipo; no se sube nada.

Si su asistente está conectado, puede leer un paquete, registrar decisiones y aplicarlas con las herramientas `redline_read`, `redline_decide`, `redline_apply` y `redline_answers`; el cambio en el dibujo es un solo paso de deshacer, "Assistant: Redline to revision".

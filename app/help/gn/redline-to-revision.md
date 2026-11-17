---
title: Markup ojapo revisión-pe
summary: Eleé MarkupCraft ojapóva redline paquete, eñemoĩ térã ejepe'a peteĩ peteĩ cambio, omoĩ revisión nube ha revisión registro ojeguerekóva, ha guarda respuesta archivo MarkupCraft oleéva.
keywords: redline, markup, revision, cloud, revision cloud, revision log, accept, reject, markupcraft, review, redline package, answers, REDLINE
from: cdb3fafe
---

Revisor ojapo markup plano conjunto MarkupCraft-pe ha ndéve ombohasa **redline paquete**, archivo `.redline.json`-pe ojeguerekóva. Ko'ápe peteĩ peteĩ cambio-pe ejeko, ha ojeguerekóva ojapóva dibujo-pe revisión nube.

## Eiko cambio-kuéra

Eskribi {{cmd:REDLINE}} (`RDL`) ha eiporavo paquete. Eiporavo:

- {{ui:List}}: cambio opavave número, estado, hoja, tipo, mávapa ojerure ha mba'e ojeskribi.
- {{ui:Accept}}, {{ui:Reject}}, {{ui:Done}}: eskribi número (`1,3-5`, térã `All`) ha opcional nota respuesta archivo-pe. {{ui:Reopen}} ombohasa cambio ábierto-pe.
- {{ui:Frame}}: dibujo parte markup hoja ohechaukáva. Hapo clic dos esquina; {{key:Enter}} dibujo opavave-pe. Cambio-kuéra ojeikóva hoja-pe ojeikórõ, upéva ha'e mba'e ojeñemoĩ.
- {{ui:Apply}}: ojapo revisión nube (capa `REV-CLOUD`, revisión letra ndive) cambio accepted térã done opavave rupi, ha revisión registro, eiporavo ha notas ndive ruled tabla (capa `REV-LOG`), dibujo derecha-pe. Peteĩ paso deshacer.
- {{ui:Save}}: ojapo `<project>-<revision>.redline-answers.json`. MarkupCraft-pe abrí, markup ojekuaa: Accepted, Rejected térã Completed, nde notas comentario-pe.

## Mba'e ekuaa

Revisor ojeskribi ohechauka ojeskribi-háicha. CadCraft ndojeroviaʼéi paquete-pe oĩva instrucción; ohechauka añoite.

Rejected ha ábierto cambio ndoguerekói ni mba'e dibujo-pe. Paquete ojelee nde computadora-pe; ndojehasa ni peteĩ lugar.

Nde asistente conectado oĩramo, ikatu leer paquete, ojapo decisión ha ojapo tools `redline_read`, `redline_decide`, `redline_apply` ha `redline_answers` ndive; dibujo cambio peteĩ paso deshacer-pe, "Assistant: Redline to revision".

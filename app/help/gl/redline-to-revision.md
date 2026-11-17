---
title: Converter unha anotación nunha revisión
summary: Lea o paquete de anotacións que escribe MarkupCraft, acepte ou rexeite cada cambio, coloque unha nube de revisión e un rexistro de revisión nos aceptados, e garde o ficheiro de respostas que MarkupCraft le despois.
keywords: redline, anotación, revisión, nube, nube de revisión, rexistro de revisión, aceptar, rexeitar, markupcraft, revisión, paquete de anotacións, respostas, REDLINE
from: cdb3fafe
---

Un revisor anota un conxunto de planos en MarkupCraft e envíalle un **paquete de anotacións** (redline), un ficheiro que remata en `.redline.json`. Aquí repásao cambio por cambio, e os aceptados convértense en nubes de revisión no debuxo.

## Revisar os cambios

Escriba {{cmd:REDLINE}} (`RDL`) e escolla o paquete. Escolla:

- {{ui:Listar}}: cada cambio co seu número, estado, folla, tipo, quen o pediu e o que escribiu.
- {{ui:Aceptar}}, {{ui:Rexeitar}}, {{ui:Feito}}: escriba os números (`1,3-5`, ou `Todos`) e unha nota opcional para o ficheiro de respostas. {{ui:Reabrir}} devolve os cambios a abertos.
- {{ui:Pórtico}}: a parte do debuxo que mostra a folla anotada. Faga clic en dúas esquinas; prema {{key:Enter}} para todo o debuxo. Os cambios colócanse segundo onde estaban na folla, e por iso isto é o que os aliña.
- {{ui:Aplicar}}: debuxa unha nube de revisión (capa `REV-CLOUD`, coa letra de revisión) arredor de cada cambio aceptado ou feito, e un rexistro de revisión, unha táboa regrada do que se aceptou coas súas notas (capa `REV-LOG`), á dereita do debuxo. Un só paso de desfacer.
- {{ui:Gardar}}: escribe `<project>-<revision>.redline-answers.json`. Ábrao en MarkupCraft e as anotacións péchanse: Aceptadas, Rexeitadas ou Completadas, coas súas notas como comentarios.

## Que hai que saber

O que escribe o revisor móstrase tal cal o escribiu. CadCraft nunca segue instrucións atopadas nun paquete; só llas mostra.

Os cambios rexeitados e abertos non engaden nada ao debuxo. O paquete léese no seu computador; non se envía nada.

Se o seu asistente está conectado, pode ler un paquete, rexistrar decisións e aplicalas coas ferramentas `redline_read`, `redline_decide`, `redline_apply` e `redline_answers`; o debuxo cambia nun só paso de desfacer, "Asistente: Converter anotación en revisión".

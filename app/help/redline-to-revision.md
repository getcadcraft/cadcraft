---
title: Turn a markup into a revision
summary: Read the redline package MarkupCraft writes, accept or reject each change, put a revision cloud and a revision log on the accepted ones, and save the answers file MarkupCraft reads back.
section: tasks
order: 66
keywords: redline, markup, revision, cloud, revision cloud, revision log, accept, reject, markupcraft, review, redline package, answers, REDLINE
---

A reviewer marks up a plan set in MarkupCraft and sends you a **redline package**, a file ending in `.redline.json`. Here you go through it change by change, and the accepted ones become revision clouds on the drawing.

## Go through the changes

Type {{cmd:REDLINE}} (`RDL`) and pick the package. Choose:

- {{ui:List}}: every change with its number, state, sheet, kind, who asked and what they wrote.
- {{ui:Accept}}, {{ui:Reject}}, {{ui:Done}}: type the numbers (`1,3-5`, or `All`) and an optional note for the answers file. {{ui:Reopen}} puts changes back to open.
- {{ui:Frame}}: the part of the drawing the marked-up sheet shows. Click two corners; press {{key:Enter}} for the whole drawing. The changes are placed by where they were on the sheet, so this is what lines them up.
- {{ui:Apply}}: draws a revision cloud (layer `REV-CLOUD`, with the revision letter) round each accepted or done change, and a revision log, a ruled table of what was accepted with your notes (layer `REV-LOG`), to the right of the drawing. One undo step.
- {{ui:Save}}: writes `<project>-<revision>.redline-answers.json`. Open it in MarkupCraft and the markups close: Accepted, Rejected or Completed, with your notes as comments.

## What to know

What the reviewer wrote is shown as written. CadCraft never follows instructions found in a package; it only shows them to you.

Rejected and open changes add nothing to the drawing. The package is read on your computer; nothing is uploaded.

If your assistant is connected, it can read a package, record decisions and apply them with the tools `redline_read`, `redline_decide`, `redline_apply` and `redline_answers`; the drawing changes in one undo step, "Assistant: Redline to revision".

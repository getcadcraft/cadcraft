---
title: Gawing revision ang markup
summary: Basahin ang redline package na isinusulat ng MarkupCraft, tanggapin o tanggihan ang bawat pagbabago, maglagay ng revision cloud at revision log sa mga tinanggap, at i-save ang answers file na binabasa ng MarkupCraft pabalik.
keywords: redline, markup, revision, cloud, revision cloud, revision log, tanggapin, tanggihan, markupcraft, review, redline package, answers, REDLINE
from: cdb3fafe
---

Nagmamarka ang reviewer ng plan set sa MarkupCraft at nagpapadala sa iyo ng **redline package**, isang file na nagtatapos sa `.redline.json`. Dito mo ito dadaanan isa-isa ang bawat pagbabago, at ang mga tinanggap ay magiging revision cloud sa drawing.

## Dumaan sa mga pagbabago

I-type ang {{cmd:REDLINE}} (`RDL`) at piliin ang package. Pumili ng:

- {{ui:List}}: bawat pagbabago kasama ang numero nito, state, sheet, uri, sino ang humiling, at ang isinulat nila.
- {{ui:Tanggapin}}, {{ui:Tanggihan}}, {{ui:Tapos}}: i-type ang mga numero (`1,3-5`, o `All`) at isang opsyonal na tala para sa answers file. Ibinabalik ng {{ui:Buksan ulit}} ang mga pagbabago sa bukas.
- {{ui:Frame}}: ang bahagi ng drawing na ipinapakita ng minarkahang sheet. I-click ang dalawang sulok; pindutin ang {{key:Enter}} para sa buong drawing. Nalalagay ang mga pagbabago ayon sa kinalalagyan nila sa sheet, kaya ito ang nagpapahanay sa kanila.
- {{ui:I-apply}}: gumuguhit ng revision cloud (layer `REV-CLOUD`, kasama ang revision letter) sa paligid ng bawat tinanggap o tapos na pagbabago, at isang revision log, isang ruled na table ng mga tinanggap kasama ang mga tala mo (layer `REV-LOG`), sa kanan ng drawing. Isang undo step.
- {{ui:I-save}}: isinusulat ang `<project>-<revision>.redline-answers.json`. Buksan ito sa MarkupCraft at magsasara ang mga markup: Accepted, Rejected, o Completed, kasama ang mga tala mo bilang komento.

## Ang dapat mong malaman

Ipinapakita ang isinulat ng reviewer kung paano ito isinulat. Hindi kailanman sinusunod ng CadCraft ang mga tagubilin na nasa package; ipinapakita lang nito sa iyo.

Ang tinanggihan at bukas na pagbabago ay walang idinadagdag sa drawing. Binabasa ang package sa computer mo; walang ina-upload.

Kung konektado ang assistant mo, mababasa nito ang isang package, maitatala ang mga desisyon, at maipapatupad ang mga ito gamit ang mga tool na `redline_read`, `redline_decide`, `redline_apply`, at `redline_answers`; nagbabago ang drawing sa isang undo step, "Assistant: Redline to revision".

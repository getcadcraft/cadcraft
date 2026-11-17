---
title: Converteix una correcció en una revisió
summary: Llegeix el paquet de correccions que escriu MarkupCraft, accepta o rebutja cada canvi, posa un núvol de revisió i un registre de revisions als acceptats, i desa el fitxer de respostes que MarkupCraft llegeix de nou.
keywords: correcció, marca, revisió, núvol, núvol de revisió, registre de revisions, accepta, rebutja, markupcraft, revisar, paquet de correccions, respostes, REDLINE
from: cdb3fafe
---

Un revisor marca un joc de plànols a MarkupCraft i t'envia un **paquet de correccions**, un fitxer que acaba en `.redline.json`. Aquí els repasses canvi per canvi, i els acceptats esdevenen núvols de revisió al dibuix.

## Repassa els canvis

Escriu {{cmd:REDLINE}} (`RDL`) i tria el paquet. Tria:

- {{ui:List}}: cada canvi amb el seu número, estat, full, tipus, qui ho va demanar i què va escriure.
- {{ui:Accept}}, {{ui:Reject}}, {{ui:Done}}: escriu els números (`1,3-5`, o `All`) i una nota opcional per al fitxer de respostes. {{ui:Reopen}} torna els canvis a oberts.
- {{ui:Frame}}: la part del dibuix que mostra el full marcat. Fes clic a dues cantonades; prem {{key:Enter}} per al dibuix sencer. Els canvis se situen segons on eren al full, i per això això és el que els alinea.
- {{ui:Apply}}: dibuixa un núvol de revisió (capa `REV-CLOUD`, amb la lletra de revisió) al voltant de cada canvi acceptat o fet, i un registre de revisions, una taula amb línies dels canvis acceptats amb les teves notes (capa `REV-LOG`), a la dreta del dibuix. Un sol pas per desfer.
- {{ui:Save}}: escriu `<project>-<revision>.redline-answers.json`. Obre'l a MarkupCraft i les marques es tanquen: Acceptades, Rebutjades o Completades, amb les teves notes com a comentaris.

## A tenir en compte

Allò que va escriure el revisor es mostra tal com està escrit. CadCraft mai no segueix instruccions trobades en un paquet; només te les mostra.

Els canvis rebutjats i oberts no afegeixen res al dibuix. El paquet es llegeix a l'ordinador; no es puja res.

Si el teu assistent està connectat, pot llegir un paquet, registrar decisions i aplicar-les amb les eines `redline_read`, `redline_decide`, `redline_apply` i `redline_answers`; el dibuix canvia en un sol pas per desfer, «Assistent: Converteix la correcció en revisió».

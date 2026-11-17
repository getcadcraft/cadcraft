---
title: Gør en markering til en revision
summary: Læs redline-pakken MarkupCraft skriver, accepter eller afvis hver ændring, sæt en revisionssky og en revisionslog på de accepterede, og gem svarfilen, som MarkupCraft læser tilbage.
keywords: redline, markering, revision, sky, revisionssky, revisionslog, accepter, afvis, markupcraft, gennemgang, redline-pakke, svar, REDLINE
from: cdb3fafe
---

En gennemgåer markerer et plansæt i MarkupCraft og sender dig en **redline-pakke**, en fil, der ender på `.redline.json`. Her går du igennem den ændring for ændring, og de accepterede bliver til revisionssky på tegningen.

## Gennemgå ændringerne

Skriv {{cmd:REDLINE}} (`RDL`) og vælg pakken. Vælg:

- {{ui:Liste}}: hver ændring med sit nummer, tilstand, ark, slags, hvem der bad om den, og hvad de skrev.
- {{ui:Accepter}}, {{ui:Afvis}}, {{ui:Færdig}}: skriv numrene (`1,3-5`, eller `All`) og en valgfri note til svarfilen. {{ui:Genåbn}} sætter ændringer tilbage til åben.
- {{ui:Ramme}}: den del af tegningen, som det markerede ark viser. Klik to hjørner; tryk {{key:Enter}} for hele tegningen. Ændringerne placeres efter, hvor de var på arket, og det er derfor, denne ramme lægger dem op korrekt.
- {{ui:Anvend}}: tegner en revisionssky (lag `REV-CLOUD`, med revisionsbogstavet) rundt om hver accepteret eller færdig ændring, og en revisionslog, en optegnet tabel over det accepterede med dine noter (lag `REV-LOG`), til højre for tegningen. Ét fortrydelsestrin.
- {{ui:Gem}}: skriver `<project>-<revision>.redline-answers.json`. Åbner du den i MarkupCraft, lukkes markeringerne: Accepteret, Afvist eller Færdig, med dine noter som kommentarer.

## Det skal du vide

Det, gennemgåeren skrev, vises som skrevet. CadCraft følger aldrig instruktioner, der findes i en pakke; det viser dem kun til dig.

Afviste og åbne ændringer tilføjer intet til tegningen. Pakken læses på din computer; intet uploades.

Hvis din assistent er forbundet, kan den læse en pakke, registrere beslutninger og anvende dem med værktøjerne `redline_read`, `redline_decide`, `redline_apply` og `redline_answers`; tegningens ændring er ét fortrydelsestrin, "Assistent: Redline til revision".

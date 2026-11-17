---
title: Gjør en markering om til en revisjon
summary: Les redline-pakken MarkupCraft skriver, godta eller avvis hver endring, legg en revisjonssky og en revisjonslogg på de godtatte, og lagre svarfilen som MarkupCraft leser tilbake.
keywords: redline, markering, revisjon, sky, revisjonssky, revisjonslogg, godta, avvis, markupcraft, gjennomgang, redline-pakke, svar, REDLINE
from: cdb3fafe
---

En gjennomgåer markerer et plansett i MarkupCraft og sender deg en **redline-pakke**, en fil som ender på `.redline.json`. Her går du gjennom den endring for endring, og de godtatte blir revisjonssky på tegningen.

## Gå gjennom endringene

Skriv {{cmd:REDLINE}} (`RDL`) og velg pakken. Velg:

- {{ui:Liste}}: hver endring med nummer, tilstand, ark, type, hvem som ba om den, og hva de skrev.
- {{ui:Godta}}, {{ui:Avvis}}, {{ui:Ferdig}}: skriv nummerne (`1,3-5`, eller `All`) og en valgfri merknad til svarfilen. {{ui:Åpne igjen}} setter endringene tilbake til åpne.
- {{ui:Ramme}}: den delen av tegningen det markerte arket viser. Klikk to hjørner; trykk {{key:Enter}} for hele tegningen. Endringene plasseres etter hvor de var på arket, og dette er det som får dem til å stemme.
- {{ui:Bruk}}: tegner en revisjonssky (layer `REV-CLOUD`, med revisjonsbokstaven) rundt hver godtatt eller ferdig endring, og en revisjonslogg, en rutet tabell over det som ble godtatt med dine merknader (layer `REV-LOG`), til høyre for tegningen. Ett steg å angre.
- {{ui:Lagre}}: skriver `<project>-<revision>.redline-answers.json`. Åpner du den i MarkupCraft, lukkes markeringene: Godtatt, Avvist eller Fullført, med dine merknader som kommentarer.

## Dette bør du vite

Det gjennomgåeren skrev, vises slik det er skrevet. CadCraft følger aldri instruksjoner som finnes i en pakke; den viser dem bare til deg.

Avviste og åpne endringer legger ingenting til i tegningen. Pakken leses på datamaskinen din; ingenting lastes opp.

Hvis assistenten din er tilkoblet, kan den lese en pakke, registrere beslutninger og bruke dem med verktøyene `redline_read`, `redline_decide`, `redline_apply` og `redline_answers`; tegningsendringen skjer i ett steg å angre, «Assistent: Redline to revision».

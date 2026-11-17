---
title: Gör en markering till en revision
summary: Läs redline-paketet som MarkupCraft skriver, godkänn eller avvisa varje ändring, lägg ett revisionsmoln och en revisionslogg på de godkända, och spara svarsfilen som MarkupCraft läser tillbaka.
keywords: redline, markering, revision, moln, revisionsmoln, revisionslogg, godkänn, avvisa, markupcraft, granskning, redline-paket, svar, REDLINE
from: cdb3fafe
---

En granskare markerar en bladsamling i MarkupCraft och skickar dig ett **redline-paket**, en fil som slutar på `.redline.json`. Här går du igenom den ändring för ändring, och de godkända blir revisionsmoln på ritningen.

## Gå igenom ändringarna

Skriv {{cmd:REDLINE}} (`RDL`) och välj paketet. Välj:

- {{ui:Lista (L)}}: varje ändring med sitt nummer, status, blad, slag, vem som bad om den och vad de skrev.
- {{ui:Godkänn}}, {{ui:Avvisa}}, {{ui:Klar}}: skriv numren (`1,3-5`, eller `All`) och en valfri anteckning till svarsfilen. {{ui:Öppna igen}} sätter tillbaka ändringar till öppna.
- {{ui:Ram}}: den del av ritningen som det markerade bladet visar. Klicka på två hörn; tryck {{key:Enter}} för hela ritningen. Ändringarna placeras efter var de fanns på bladet, så detta är vad som får dem att passa.
- {{ui:Verkställ}}: ritar ett revisionsmoln (lager `REV-CLOUD`, med revisionsbokstaven) runt varje godkänd eller klar ändring, och en revisionslogg, en linjerad tabell över vad som godkändes med dina anteckningar (lager `REV-LOG`), till höger om ritningen. Ett steg att ångra.
- {{ui:Spara}}: skriver `<project>-<revision>.redline-answers.json`. Öppna den i MarkupCraft så stängs markeringarna: Godkänd, Avvisad eller Klar, med dina anteckningar som kommentarer.

## Att veta

Det granskaren skrev visas som skrivet. CadCraft följer aldrig instruktioner som finns i ett paket; den visar dem bara för dig.

Avvisade och öppna ändringar lägger inget till i ritningen. Paketet läses på din dator; inget laddas upp.

Om din assistent är ansluten kan den läsa ett paket, registrera beslut och tillämpa dem med verktygen `redline_read`, `redline_decide`, `redline_apply` och `redline_answers`; ritningsändringen sker i ett steg att ångra, ”Assistent: Redline till revision”.

---
title: Verander opmerkings in 'n hersiening
summary: Lees die rooi-opmerkingspakket wat MarkupCraft skryf, aanvaar of verwerp elke verandering, plaas 'n hersieningswolk en 'n hersieningslog op die aanvaarde, en stoor die antwoordlêer wat MarkupCraft terug lees.
keywords: rooi-opmerking, opmerking, hersiening, wolk, hersieningswolk, hersieningslog, aanvaar, verwerp, markupcraft, nasien, rooi-opmerkingspakket, antwoorde, REDLINE
from: cdb3fafe
---

'n Nasiener merk 'n planstel in MarkupCraft en stuur vir jou 'n **rooi-opmerkingspakket**, 'n lêer wat op `.redline.json` eindig. Hier gaan jy dit verandering vir verandering deur, en die aanvaarde veranderinge word hersieningswolke op die tekening.

## Gaan deur die veranderinge

Tik {{cmd:REDLINE}} (`RDL`) en kies die pakket. Kies:

- {{ui:Lys}}: elke verandering met sy nommer, status, blad, soort, wie dit gevra het en wat hulle geskryf het.
- {{ui:Aanvaar}}, {{ui:Verwerp}}, {{ui:Klaar}}: tik die nommers (`1,3-5`, of `All`) en 'n opsionele nota vir die antwoordlêer. {{ui:Heropen}} sit veranderinge terug op oop.
- {{ui:Raam}}: die deel van die tekening wat die opmerkings-blad wys. Klik twee hoeke; druk {{key:Enter}} vir die hele tekening. Die veranderinge word geplaas volgens waar hulle op die blad was, so dit is wat hulle belyn.
- {{ui:Pas toe}}: teken 'n hersieningswolk (laag `REV-CLOUD`, met die hersieningsletter) om elke aanvaarde of klaar verandering, en 'n hersieningslog, 'n gelynde tabel van wat aanvaar is met jou notas (laag `REV-LOG`), regs van die tekening. Een stap om te ontdoen.
- {{ui:Stoor}}: skryf `<project>-<revision>.redline-answers.json`. Maak dit oop in MarkupCraft en die opmerkings sluit: Aanvaar, Verwerp of Voltooi, met jou notas as kommentaar.

## Wat om te weet

Wat die nasiener geskryf het, word soos geskryf gewys. CadCraft volg nooit instruksies wat in 'n pakket gevind word nie; dit wys hulle net vir jou.

Verwerpte en oop veranderinge voeg niks by die tekening nie. Die pakket word op jou rekenaar gelees; niks word opgelaai nie.

As jou assistent gekoppel is, kan dit 'n pakket lees, besluite aanteken en hulle toepas met die gereedskap `redline_read`, `redline_decide`, `redline_apply` en `redline_answers`; die tekening verander in een stap om te ontdoen, "Assistent: Rooi-opmerking na hersiening".

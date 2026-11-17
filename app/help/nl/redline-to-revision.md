---
title: Een markup omzetten in een revisie
summary: Lees het redline-pakket dat MarkupCraft schrijft, accepteer of verwerp elke wijziging, zet een revisiewolk en een revisielogboek op de geaccepteerde, en sla het antwoordenbestand op dat MarkupCraft terugleest.
keywords: redline, markup, revisie, wolk, revisiewolk, revisielogboek, accepteren, afwijzen, markupcraft, review, redline-pakket, antwoorden, REDLINE
from: cdb3fafe
---

Een beoordelaar markeert een bladenset in MarkupCraft en stuurt u een **redline-pakket**, een bestand dat eindigt op `.redline.json`. Hier gaat u het wijziging voor wijziging door, en de geaccepteerde wijzigingen worden revisiewolken op de tekening.

## Wijzigingen doorlopen

Typ {{cmd:REDLINE}} (`RDL`) en kies het pakket. Kies:

- {{ui:Lijst}}: elke wijziging met zijn nummer, status, blad, soort, wie erom vroeg en wat er geschreven stond.
- {{ui:Accepteren}}, {{ui:Afwijzen}}, {{ui:Gereed}}: typ de nummers (`1,3-5`, of `All`) en een optionele notitie voor het antwoordenbestand. {{ui:Heropenen}} zet wijzigingen weer op open.
- {{ui:Raamwerk}}: het deel van de tekening dat het gemarkeerde blad toont. Klik twee hoeken aan; druk op {{key:Enter}} voor de hele tekening. De wijzigingen worden geplaatst op basis van waar ze op het blad stonden, dus hiermee worden ze uitgelijnd.
- {{ui:Toepassen}}: tekent een revisiewolk (laag `REV-CLOUD`, met de revisieletter) rond elke geaccepteerde of gereedgemelde wijziging, en een revisielogboek, een lijntabel van wat is geaccepteerd met uw notities (laag `REV-LOG`), rechts van de tekening. Eén stap ongedaan maken.
- {{ui:Opslaan}}: schrijft `<project>-<revision>.redline-answers.json`. Open het in MarkupCraft en de markeringen sluiten: Geaccepteerd, Afgewezen of Voltooid, met uw notities als opmerkingen.

## Wat u moet weten

Wat de beoordelaar schreef, wordt getoond zoals geschreven. CadCraft volgt nooit instructies die in een pakket staan; het toont ze alleen aan u.

Afgewezen en open wijzigingen voegen niets aan de tekening toe. Het pakket wordt op uw computer gelezen; er wordt niets geüpload.

Als uw assistent is verbonden, kan die een pakket lezen, beslissingen vastleggen en ze toepassen met de hulpmiddelen `redline_read`, `redline_decide`, `redline_apply` en `redline_answers`; de tekening verandert in één stap ongedaan te maken, "Assistant: Redline to revision".

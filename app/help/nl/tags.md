---
title: Tags: attributen die staten voeden
summary: Definieer een tag (het soort, de waarden die hij mag aannemen, de blokken waarop hij van toepassing is), stel hem in op blokverwijzingen, en toon de verwijzingen als een staat die u als CSV kunt opslaan.
keywords: tags, tag, attribuut, staat, gegevensextractie, eigenschap, brandwerendheid, keuzelijst, blokverwijzing, TAGS, csv
from: 9b90bacc
---

Een **tag** is een blokattribuut met een definitie: welk soort waarde hij bevat, welke waarden zijn toegestaan, en op welke blokken hij van toepassing is. De waarden zijn gewone blokattributen, dus elk ander programma leest ze en {{cmd:ATTEDIT}} toont ze. Alleen de definities zijn nieuw, en die worden in de tekening bewaard.

## Definiëren en instellen

Typ {{cmd:TAGS}} en kies:

- {{ui:Definiëren}}: een naam (letters, cijfers, spatie, `_ . -`), een soort (`text`, `number`, `integer`, `yesno`, `length`, `angle`), de toegestane waarden gescheiden door `;` (laat leeg voor elke waarde), en de bloknamen waarop hij van toepassing is (`DOOR*` komt overeen met elk blok dat met DOOR begint; leeg betekent elk blok).
- {{ui:Set}}: typ met geselecteerde blokverwijzingen `FireRating=60 min; Width=850`. Een waarde buiten de toegestane lijst, of geen getal voor een getalstag, wordt geweigerd en gemeld. Eén stap ongedaan maken. Een blok dat het attribuut niet heeft, krijgt het als verborgen attribuut.
- {{ui:Staat (C)}}: elke verwijzing naar een blok waarop een tag van toepassing is, eventueel gegroepeerd op een tag of op een bloknaam, afgedrukt en opgeslagen als CSV.
- {{ui:Verwijderen}}: vergeet een definitie; de waarden blijven op de verwijzingen staan.

Een tag hernoemen hernoemt zijn waarden op elke verwijzing. Tagnamen zijn niet hoofdlettergevoelig, net zoals attribuutnamen dat niet zijn.

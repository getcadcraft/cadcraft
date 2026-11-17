---
title: Birkas: atribūti, kas padod specifikācijām
summary: Definējiet birku (tās veidu, vērtības, ko tā var pieņemt, un blokus, uz kuriem tā attiecas), iestatiet to bloku atsaucēs un uzskaitiet atsauces kā specifikāciju, ko var saglabāt kā CSV.
keywords: birkas, birka, atribūts, specifikācija, datu izvilkšana, īpašība, ugunsizturība, saraksts ar izvēli, bloka atsauce, TAGS, csv
from: 9b90bacc
---

**Birka** ir bloka atribūts ar definīciju: kāda veida vērtību tas satur, kuras vērtības ir atļautas un uz kuriem blokiem tas attiecas. Vērtības ir parasti bloku atribūti, tāpēc jebkura cita programma tās nolasa, un {{cmd:ATTEDIT}} tās parāda. Jaunas ir tikai definīcijas, un tās tiek glabātas rasējumā.

## Definēt un iestatīt

Ierakstiet {{cmd:TAGS}} un izvēlieties:

- {{ui:Definēt}}: nosaukumu (burti, cipari, atstarpe, `_ . -`), veidu (`text`, `number`, `integer`, `yesno`, `length`, `angle`), atļautās vērtības, atdalītas ar `;` (atstājiet tukšu jebkurai vērtībai), un bloku nosaukumus, uz kuriem tā attiecas (`DOOR*` atbilst katram blokam, kas sākas ar DOOR; tukšs nozīmē katru bloku).
- {{ui:Kopa}}: ar atlasītām bloku atsaucēm ierakstiet `FireRating=60 min; Width=850`. Vērtība ārpus atļautā saraksta vai nav skaitlis skaitļa birkai tiek noraidīta un tiek paziņots. Viens atsaukšanas solis. Bloks, kuram atribūta nav, to saņem kā paslēptu atribūtu.
- {{ui:Specifikācija}}: katra atsauce uz bloku, kuram birka attiecas, pēc izvēles grupēta pēc birkas vai bloka nosaukuma, izdrukāta un saglabāta kā CSV.
- {{ui:Noņemt}}: aizmirst definīciju; vērtības paliek atsaucēs.

Birkas pārdēvēšana pārdēvē tās vērtības katrā atsaucē. Birku nosaukumi neatšķir lielos un mazos burtus, tāpat kā atribūtu nosaukumi.

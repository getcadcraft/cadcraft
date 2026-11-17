---
title: Pretvori označavanje u reviziju
summary: Pročitaj paket crvenih izmena koji MarkupCraft pravi, prihvati ili odbij svaku izmenu, stavi oblak revizije i dnevnik revizije na prihvaćene, i sačuvaj fajl odgovora koji MarkupCraft čita nazad.
keywords: crvena izmena, označavanje, revizija, oblak, oblak revizije, dnevnik revizije, prihvati, odbij, markupcraft, pregled, paket crvenih izmena, odgovori, REDLINE
from: cdb3fafe
---

Recenzent označi plan u MarkupCraft-u i pošalje ti **paket crvenih izmena**, fajl koji se završava sa `.redline.json`. Ovde prolaziš kroz njega promenu po promenu, a prihvaćene postaju oblaci revizije na crtežu.

## Prođi kroz promene

Ukucaj {{cmd:REDLINE}} (`RDL`) i izaberi paket. Izaberi:

- {{ui:Lista}}: svaku promenu sa njenim brojem, stanjem, listom, vrstom, ko ju je tražio i šta je napisao.
- {{ui:Prihvati}}, {{ui:Odbij}}, {{ui:Gotovo}}: ukucaj brojeve (`1,3-5`, ili `Sve`) i opcionu napomenu za fajl odgovora. {{ui:Ponovo otvori}} vraća promene na otvoreno.
- {{ui:Ram}}: deo crteža koji prikazuje označeni list. Klikni dva ugla; pritisni {{key:Enter}} za ceo crtež. Promene se postavljaju prema tome gde su bile na listu, pa je ovo ono što ih poravnava.
- {{ui:Primeni}}: crta oblak revizije (sloj `REV-CLOUD`, sa slovom revizije) oko svake prihvaćene ili gotove promene, i dnevnik revizije, tabelu sa linijama o tome šta je prihvaćeno, sa tvojim napomenama (sloj `REV-LOG`), desno od crteža. Jedan korak opozivanja.
- {{ui:Sačuvaj}}: piše `<projekat>-<revizija>.redline-answers.json`. Otvori ga u MarkupCraft-u i označavanja se zatvaraju: Prihvaćeno, Odbijeno ili Završeno, sa tvojim napomenama kao komentarima.

## Šta treba znati

Ono što je recenzent napisao prikazuje se kako je napisano. CadCraft nikad ne prati uputstva pronađena u paketu; samo ih prikazuje tebi.

Odbijene i otvorene promene ne dodaju ništa crtežu. Paket se čita na tvom računaru; ništa se ne otprema.

Ako je tvoj asistent povezan, može da pročita paket, zabeleži odluke i primeni ih alatima `redline_read`, `redline_decide`, `redline_apply` i `redline_answers`; crtež se menja u jednom koraku opozivanja, „Asistent: Pretvori crvenu izmenu u reviziju“.

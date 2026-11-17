---
title: Pretvaranje označavanja u reviziju
summary: Pročitaj redline paket koji piše MarkupCraft, prihvati ili odbij svaku promjenu, stavi oblak revizije i dnevnik revizije na prihvaćene, i sačuvaj datoteku odgovora koju MarkupCraft čita nazad.
keywords: redline, označavanje, revizija, oblak, oblak revizije, dnevnik revizije, prihvati, odbij, markupcraft, pregled, redline paket, odgovori, REDLINE
from: cdb3fafe
---

Recenzent označava plan u MarkupCraft i šalje ti **redline paket**, datoteku koja se završava sa `.redline.json`. Ovdje prolaziš kroz njega promjenu po promjenu, a prihvaćene postaju oblaci revizije na crtežu.

## Prođi kroz promjene

Ukucaj {{cmd:REDLINE}} (`RDL`) i odaberi paket. Izaberi:

- {{ui:List}}: svaku promjenu sa njenim brojem, stanjem, listom, vrstom, ko je tražio i šta je napisao.
- {{ui:Accept}}, {{ui:Reject}}, {{ui:Done}}: ukucaj brojeve (`1,3-5`, ili `All`) i neobaveznu napomenu za datoteku odgovora. {{ui:Reopen}} vraća promjene na otvoreno.
- {{ui:Frame}}: dio crteža koji prikazuje označeni list. Klikni dva ugla; pritisni {{key:Enter}} za cijeli crtež. Promjene se postavljaju prema tome gdje su bile na listu, pa je ovo ono što ih poravnava.
- {{ui:Apply}}: crta oblak revizije (sloj `REV-CLOUD`, sa slovom revizije) oko svake prihvaćene ili završene promjene, i dnevnik revizije, uredna tabela onoga što je prihvaćeno sa tvojim napomenama (sloj `REV-LOG`), desno od crteža. Jedan korak poništavanja.
- {{ui:Save}}: zapisuje `<project>-<revision>.redline-answers.json`. Otvori ga u MarkupCraft i označavanja se zatvaraju: Prihvaćeno, Odbijeno ili Završeno, sa tvojim napomenama kao komentarima.

## Šta treba znati

Ono što je recenzent napisao prikazuje se kako je napisano. CadCraft nikad ne slijedi upute pronađene u paketu; samo ih prikazuje tebi.

Odbijene i otvorene promjene ne dodaju ništa crtežu. Paket se čita na tvom računaru; ništa se ne šalje.

Ako je tvoj asistent povezan, može pročitati paket, zabilježiti odluke i primijeniti ih alatima `redline_read`, `redline_decide`, `redline_apply` i `redline_answers`; promjena crteža je jedan korak poništavanja, "Asistent: Redline u reviziju".

---
title: Pretvorite oznake u reviziju
summary: Pročitajte redline paket koji piše MarkupCraft, prihvatite ili odbijte svaku promjenu, stavite revizijski oblak i revizijski zapis na prihvaćene te spremite datoteku odgovora koju MarkupCraft čita natrag.
keywords: redline, markup, revizija, oblak, revizijski oblak, revizijski zapis, prihvati, odbij, markupcraft, pregled, redline paket, odgovori, REDLINE
from: cdb3fafe
---

Recenzent označava skup planova u MarkupCraftu i šalje vam **redline paket**, datoteku koja završava s `.redline.json`. Ovdje prolazite promjenu po promjenu, a prihvaćene postaju revizijski oblaci na crtežu.

## Prođite kroz promjene

Upišite {{cmd:REDLINE}} (`RDL`) i odaberite paket. Odaberite:

- {{ui:Popis}}: svaku promjenu s njezinim brojem, stanjem, listom, vrstom, tko je tražio i što je napisao.
- {{ui:Prihvati}}, {{ui:Odbij}}, {{ui:Gotovo}}: upišite brojeve (`1,3-5`, ili `All`) i neobaveznu napomenu za datoteku odgovora. {{ui:Ponovno otvori}} vraća promjene na otvoreno.
- {{ui:Okvir}}: dio crteža koji prikazuje označeni list. Kliknite dva kuta; pritisnite {{key:Enter}} za cijeli crtež. Promjene se postavljaju prema tome gdje su bile na listu, pa je ovo ono što ih poravnava.
- {{ui:Primijeni}}: crta revizijski oblak (sloj `REV-CLOUD`, s revizijskim slovom) oko svake prihvaćene ili gotove promjene, i revizijski zapis, uređenu tablicu onoga što je prihvaćeno s vašim napomenama (sloj `REV-LOG`), desno od crteža. Jedan korak poništavanja.
- {{ui:Spremi}}: zapisuje `<project>-<revision>.redline-answers.json`. Otvorite ga u MarkupCraftu i oznake se zatvore: Prihvaćeno, Odbijeno ili Dovršeno, s vašim napomenama kao komentarima.

## Što treba znati

Ono što je recenzent napisao prikazuje se kako je napisano. CadCraft nikad ne slijedi upute pronađene u paketu; samo ih prikazuje vama.

Odbijene i otvorene promjene ne dodaju ništa crtežu. Paket se čita na vašem računalu; ništa se ne učitava.

Ako je vaš pomoćnik povezan, može pročitati paket, zabilježiti odluke i primijeniti ih alatima `redline_read`, `redline_decide`, `redline_apply` i `redline_answers`; promjena crteža je u jednom koraku poništavanja, "Assistant: Redline to revision".

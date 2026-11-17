---
title: Pokazivač skače ili kasni preko crteža
summary: Šta uraditi kada ukršteni kursor ne prati miš glatko, na starijem ili sporijem računaru.
keywords: skakanje kursora, kašnjenje pokazivača, spor ukršteni kursor, trzav kursor, stari računar, stara grafička kartica, integrisana grafika, hardversko ubrzanje, glađi pokazivač, spor laptop
from: 39dc9057
---

CadCraft radi u pregledaču (CadCraft Studio je takođe prikaz u pregledaču), pa ništa u njemu nije napravljeno za jednu ili drugu grafičku karticu. Ukršteni kursor crta aplikacija, što znači da se može pomerati samo onoliko brzo koliko aplikacija može da iscrta jedan kadar.

## Neka CadCraft smanji dodatke

1. Otvori {{ui:Settings}} (zupčanik gore desno) i ostani na kartici {{ui:CadCraft}}.
2. Izaberi {{ui:Smoother pointer on slower computers}}.
3. Izaberi {{ui:On}}.

Kada je uključeno, koristi se sopstveni pokazivač računara umesto nacrtanog ukrštenog kursora i okvira za izbor (i punoekranskog ukrštenog kursora), a objekat ispod pokazivača se osvetljava kada pokazivač miruje, a ne dok se pomera. Hvatanje objekata, praćenje i gumena traka rade kao i ranije.

{{ui:Automatic}} je način na koji CadCraft počinje: prati koliko traju kadrovi dok pomeraš pokazivač i sam uključuje ovo kada ostanu spori nekoliko sekundi. Jednom te obavesti kada to uradi. {{ui:Off}} zadržava nacrtani ukršteni kursor, bez obzira na brzinu.

## Ako je i dalje sporo

- Proveri da je hardversko ubrzanje uključeno u pregledaču: otvori `chrome://gpu` (ili `edge://gpu`) u novoj kartici. Ako prvi redovi kažu „Software only“ ili „Disabled“, pregledač crta bez grafičke kartice. Ažuriranje drajvera za grafiku često to popravi.
- Zatvori druge teške kartice i programe i probaj manji prozor pregledača.
- Javi nam preko {{ui:Help}}, {{ui:Report a problem}}: napiši da li koristiš pregledač ili CadCraft Studio, koju verziju i šta piše na gpu stranici.

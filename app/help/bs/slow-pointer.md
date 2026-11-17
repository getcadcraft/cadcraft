---
title: Pokazivač skače ili kasni preko crteža
summary: Šta uraditi kad se nišan ne kreće glatko s mišem, na starijem ili sporijem računaru.
keywords: skakanje kursora, kašnjenje pokazivača, spor nišan, trzav kursor, stari računar, stara grafička kartica, integrisana grafika, hardversko ubrzanje, glatkiji pokazivač, spor laptop
from: 39dc9057
---

CadCraft radi u pretraživaču (CadCraft Studio je takođe prikaz u pretraživaču), pa ništa u njemu nije napravljeno za jednu ili drugu grafičku karticu. Nišan crta aplikacija, što znači da se može kretati samo onoliko brzo koliko aplikacija može nacrtati jedan kadar.

## Pusti CadCraft da isključi dodatke

1. Otvori {{ui:Postavke}} (zupčanik gore desno) i ostani na kartici {{ui:CadCraft}}.
2. Odaberi {{ui:Glatkiji pokazivač na sporijim računarima}}.
3. Izaberi {{ui:Uključeno}}.

Kad je uključeno, računarov vlastiti pokazivač koristi se umjesto nacrtanog nišana i okvira za odabir (kao i punoekranskog nišana), a objekat ispod pokazivača se označava kad pokazivač miruje, a ne dok se pomjera. Hvatanja objekata, praćenje i gumena traka rade kao i ranije.

{{ui:Automatski}} je način na koji CadCraft počinje: prati koliko dugo traju kadrovi dok pomjeraš pokazivač i sam ga uključuje kad ostanu spori nekoliko sekundi. Jednom te obavijesti kad to uradi. {{ui:Isključeno}} zadržava nacrtani nišan bez obzira na brzinu.

## Ako je i dalje sporo

- Provjeri je li hardversko ubrzanje uključeno u pretraživaču: otvori `chrome://gpu` (ili `edge://gpu`) u novoj kartici. Ako prvi redovi kažu "Software only" ili "Disabled", pretraživač crta bez grafičke kartice. Ažuriranje upravljačkog programa za grafiku često to vrati.
- Zatvori ostale teške kartice i programe i probaj manji prozor pretraživača.
- Javi nam preko {{ui:Pomoć}}, {{ui:Prijavi problem}}: reci koristiš li pretraživač ili CadCraft Studio, koju verziju, i šta piše na gpu stranici.

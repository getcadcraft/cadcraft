---
title: Pokazivač skače ili kasni preko crteža
summary: Što učiniti kad križić ne prati miš glatko na starijem ili sporijem računalu.
keywords: skakanje pokazivača, kašnjenje pokazivača, spor križić, trzajući pokazivač, staro računalo, stara grafička kartica, integrirana grafika, hardversko ubrzanje, glatkiji pokazivač, spori prijenosnik
from: 39dc9057
---

CadCraft radi u pregledniku (CadCraft Studio je također prikaz u pregledniku), pa ništa u njemu nije izrađeno za jednu ili drugu grafičku karticu. Križić crta aplikacija, što znači da se može kretati samo onoliko brzo koliko aplikacija može nacrtati jedan kadar.

## Neka CadCraft smanji dodatke

1. Otvorite {{ui:Postavke}} (zupčanik u gornjem desnom kutu) i ostanite na kartici {{ui:CadCraft}}.
2. Odaberite {{ui:Glatkiji pokazivač na sporijim računalima}}.
3. Odaberite {{ui:Uključeno}}.

Kad je uključeno, koristi se vlastiti pokazivač računala umjesto nacrtanog križića i okvira za odabir (uključujući križić na cijelom zaslonu), a objekt pod pokazivačem se osvijetli kad pokazivač miruje, a ne dok se miče. Hvatanje objekata, praćenje i gumena traka rade kao i prije.

{{ui:Automatski}} je način na koji CadCraft počinje: prati koliko dugo traju kadrovi dok pomičete pokazivač i sam ga uključuje kad ostanu spori nekoliko sekundi. Jednom vas o tome obavijesti. {{ui:Isključeno}} zadržava nacrtani križić bez obzira na brzinu.

## Ako je i dalje sporo

- Provjerite je li hardversko ubrzanje uključeno u pregledniku: otvorite `chrome://gpu` (ili `edge://gpu`) u novoj kartici. Ako prvi redovi kažu "Software only" ili "Disabled", preglednik crta bez grafičke kartice. Ažuriranje upravljačkog programa grafičke kartice često to vrati.
- Zatvorite ostale zahtjevne kartice i programe te isprobajte manji prozor preglednika.
- Javite nam putem {{ui:Pomoć}}, {{ui:Prijavi problem}}: recite koristite li preglednik ili CadCraft Studio, koja je verzija i što piše na stranici gpu.

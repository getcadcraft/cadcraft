---
title: Izmeni skraćenice komandi
summary: Čuvajte sopstvene skraćenice komandi u jednoj tekstualnoj datoteci u poznatom formatu, uvezite i izvezite datoteku .pgp i ponovo je učitajte komandom REINIT.
keywords: skraćenica, skraćenice, aliasedit, pgp, prečica, kratak naziv, reinit, tastatura, prilagodi, izmeni skraćenice
from: 2282d36f
---

## Šta ćete naučiti

Kako dodati sopstvene kratke nazive za komande, na primer `LL` za {{cmd:LINE}}, sve u jednoj tekstualnoj datoteci.

## Dodavanje skraćenice

1. Otvorite {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmeni skraćenice…}}, ili ukucajte {{cmd:ALIASEDIT}} i pritisnite {{key:Enter}}.
2. Dodajte red sa skraćenicom, zarez i komandu posle zvezdice:

```
LL,     *LINE
```

3. Kliknite {{ui:Sačuvaj}}. Komandna linija kaže koliko vaših skraćenica je u upotrebi.
4. Ukucajte `LL` i pritisnite {{key:Enter}}: LINE počinje.

Vaše skraćenice stoje iznad CadCraft-ovih. Vaš red ima prednost nad ugrađenom skraćenicom istog naziva; uklonite svoj red i ugrađena skraćenica se vraća.

## Redovi koje CadCraft odbija

Urednik navodi svaki problem sa brojem reda dok kucate:

- komanda ne postoji;
- skraćenica je ujedno naziv komande (`LINE, *CIRCLE` bi sakrio LINE);
- red nije u obliku `ALIAS, *COMMAND`;
- ista skraćenica je u dva reda (kasniji pobeđuje).

Redovi koji pokreću program na vašem računaru, kao `NOTEPAD, START, 1, *File to edit: ,`, preskaču se uz napomenu: aplikacija u pregledaču ne može da pokreće programe.

## Preuzimanje skraćenica iz drugog programa

1. U uredniku skraćenica kliknite {{ui:Uvezi .pgp…}} i izaberite datoteku. Možete i prevući datoteku `.pgp` na crtež.
2. Proverite navedene probleme (komande koje CadCraft nema se odbijaju, ostale rade).
3. Kliknite {{ui:Sačuvaj}}.

{{ui:Izvezi .pgp}} čuva CadCraft-ove skraćenice i vaše zajedno kao jednu datoteku u istom formatu.

## Ponovno učitavanje datoteke

Ukucajte {{cmd:REINIT}} i pritisnite {{key:Enter}} da ponovo primenite datoteku skraćenica. Ona se čuva u ovom pregledaču; desktop aplikacija će je čuvati u svojoj fascikli, a cloud servis će je sinhronizovati.

## Slova za opcije komande

Skraćenica imenuje komandu. Da biste promenili slova kojima odgovarate na opcije komande (`P` za Polarno u {{cmd:ARRAY}}), pogledajte [Dajte opcijama komandi sopstvena slova](topic:option-letters).

## Prečice sa tastature za bilo koju komandu

Skraćenica se kuca; prečica je taster. Da biste komandi dali sopstveni taster:

1. Kliknite {{ui:Pogled}} › {{ui:Više}} › {{ui:Prečice sa tastature…}}, ili ukucajte `KEYS` i pritisnite {{key:Enter}}.
2. Kliknite polje {{ui:Taster}} i pritisnite tastere, na primer {{key:Alt+Shift+C}}.
3. U polju {{ui:Pokreće}} napišite komandu, i, ako želite, šta da se ukuca posle nje: `CIRCLE` ili `ZOOM E`.
4. Kliknite {{ui:Dodaj (A)}}.

Taster mora imati {{key:Mod}} ili {{key:Alt}} uz slovo ili cifru, ili biti slobodan funkcijski taster ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tasteri koje već koriste CadCraft, aplikacija ili pregledač, kao i tasteri koje ima dugme za sopstvene alate (vidi [Dugmad po vašem izboru](topic:my-tools)), se odbijaju, a polje kaže zašto. Prečice se čuvaju u ovom pregledaču (ili u desktop aplikaciji); {{ui:Ukloni (R)}} uklanja jednu.

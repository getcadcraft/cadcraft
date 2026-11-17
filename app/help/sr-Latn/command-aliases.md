---
title: Uređivanje skraćenica komandi
summary: Čuvajte sopstvene skraćenice komandi u jednoj tekstualnoj datoteci u poznatom formatu, uvezite i izvezite .pgp datoteku i ponovo je učitajte komandom REINIT.
keywords: skraćenica, skraćenice, aliasedit, pgp, prečica, kratko ime, reinit, tastatura, prilagodi, izmeni skraćenice
from: 6ab6fa0e
---

## Šta ćete naučiti

Kako da dodate sopstvena kratka imena za komande, na primer `LL` za {{cmd:LINE}}, sve u jednoj tekstualnoj datoteci.

## Dodavanje skraćenice

1. Otvorite {{ui:Pogled}} › {{ui:Više}} › {{ui:Izmeni skraćenice…}}, ili ukucajte {{cmd:ALIASEDIT}} i pritisnite {{key:Enter}}.
2. Dodajte red sa skraćenicom, zarezom i komandom iza zvezdice:

```
LL,     *LINE
```

3. Kliknite {{ui:Sačuvaj}}. Komandna linija kaže koliko je vaših skraćenica u upotrebi.
4. Ukucajte `LL` i pritisnite {{key:Enter}}: pokreće se LINE.

Vaše skraćenice stoje iznad CadCraft-ovih. Vaš red ima prednost nad ugrađenom skraćenicom istog naziva; uklonite svoj red i ugrađena se vraća.

## Redovi koje CadCraft odbija

Uređivač navodi svaki problem sa brojem reda dok kucate:

- komanda ne postoji;
- skraćenica je sama ime komande (`LINE, *CIRCLE` bi sakrio LINE);
- red nije u obliku `ALIAS, *COMMAND`;
- ista skraćenica je u dva reda (kasniji važi).

Redovi koji pokreću program na vašem računaru, kao `NOTEPAD, START, 1, *File to edit: ,`, preskaču se uz napomenu: aplikacija u pregledaču ne može da pokreće programe.

## Uvezite skraćenice iz drugog programa

1. U uređivaču skraćenica kliknite {{ui:Uvezi .pgp…}} i izaberite datoteku. Možete i prevući `.pgp` datoteku na crtež.
2. Proverite navedene probleme (komande koje CadCraft nema se odbijaju, ostale rade).
3. Kliknite {{ui:Sačuvaj}}.

{{ui:Izvezi .pgp}} čuva CadCraft-ove skraćenice i vaše kao jednu datoteku u istom formatu.

## Ponovo učitajte datoteku

Ukucajte {{cmd:REINIT}} i pritisnite {{key:Enter}} da ponovo primenite datoteku skraćenica. Čuva se u ovom pregledaču; desktop aplikacija će je čuvati u sopstvenoj fascikli, a cloud usluga će je sinhronizovati.

## Prečice sa tastature za bilo koju komandu

Skraćenica se kuca; prečica je taster. Da komandi dodelite sopstveni taster:

1. Kliknite {{ui:Pogled}} › {{ui:Više}} › {{ui:Prečice sa tastature…}}, ili ukucajte `KEYS` i pritisnite {{key:Enter}}.
2. Kliknite polje {{ui:Taster}} i pritisnite tastere, na primer {{key:Alt+Shift+C}}.
3. U polju {{ui:Pokreće}} upišite komandu i, ako želite, i ono što se unosi posle nje: `CIRCLE` ili `ZOOM E`.
4. Kliknite {{ui:Dodaj (A)}}.

Taster mora imati {{key:Mod}} ili {{key:Alt}} uz slovo ili cifru, ili biti slobodan funkcijski taster ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tasteri koje već koriste CadCraft, aplikacija ili pregledač, kao i tasteri koje ima dugme Moji alati (pogledajte [Sopstvena dugmad](topic:my-tools)), se odbijaju, a polje kaže zašto. Prečice se čuvaju u ovom pregledaču (ili desktop aplikaciji); {{ui:Ukloni (R)}} uklanja jednu.

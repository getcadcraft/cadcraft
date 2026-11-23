---
title: Uredi skraćenice naredbi
summary: Čuvajte vlastite skraćenice naredbi u jednoj tekstualnoj datoteci u poznatom formatu, uvozite i izvozite .pgp datoteku i ponovo je učitajte pomoću REINIT.
keywords: skraćenica, skraćenice, aliasedit, pgp, prečica, kratki naziv, reinit, tastatura, prilagodi, uredi skraćenice
from: 2282d36f
---

## Šta ćete naučiti

Kako dodati vlastite kratke nazive za naredbe, na primjer `LL` za {{cmd:LINE}}, sve u jednoj tekstualnoj datoteci.

## Dodavanje skraćenice

1. Otvorite {{ui:Pogled}} › {{ui:Više}} › {{ui:Uredi skraćenice…}}, ili ukucajte {{cmd:ALIASEDIT}} i pritisnite {{key:Enter}}.
2. Dodajte red sa skraćenicom, zarez i naredbu iza zvjezdice:

```
LL,     *LINE
```

3. Kliknite {{ui:Spasi}}. Komandna linija kaže koliko vaših skraćenica je u upotrebi.
4. Ukucajte `LL` i pritisnite {{key:Enter}}: LINE počinje.

Vaše skraćenice stoje iznad onih koje ima sam CadCraft. Vaš red ima prednost nad ugrađenom skraćenicom istog naziva; uklonite svoj red i ugrađena se vraća.

## Redovi koje CadCraft odbija

Uređivač navodi svaki problem sa brojem reda dok kucate:

- naredba ne postoji;
- skraćenica je sama naziv naredbe (`LINE, *CIRCLE` bi sakrio LINE);
- red nije u obliku `ALIAS, *COMMAND`;
- ista skraćenica je u dva reda (kasniji pobjeđuje).

Redovi koji pokreću program na vašem računaru, poput `NOTEPAD, START, 1, *File to edit: ,`, preskaču se uz napomenu: aplikacija u pregledaču ne može pokretati programe.

## Preuzimanje skraćenica iz drugog programa

1. U uređivaču skraćenica kliknite {{ui:Uvezi .pgp…}} i izaberite datoteku. Možete i prevući `.pgp` datoteku na crtež.
2. Provjerite navedene probleme (naredbe koje CadCraft nema se odbijaju, ostale rade).
3. Kliknite {{ui:Spasi}}.

{{ui:Izvezi .pgp}} spašava skraćenice aplikacije CadCraft i vaše u jednu datoteku u istom formatu.

## Ponovno učitavanje datoteke

Ukucajte {{cmd:REINIT}} i pritisnite {{key:Enter}} da ponovo primijenite datoteku sa skraćenicama. Ona se čuva u ovom pregledaču; desktop aplikacija će je čuvati u svojoj fascikli, a cloud servis će je sinhronizirati.

## Slova za opcije naredbe

Skraćenica imenuje naredbu. Da biste promijenili slova kojima odgovarate na opcije naredbe (`P` za Polar u {{cmd:ARRAY}}), pogledajte [Dodijelite opcijama naredbi vlastita slova](topic:option-letters).

## Prečice za bilo koju naredbu

Skraćenica se kuca; prečica je taster. Da biste naredbi dodijelili vlastiti taster:

1. Kliknite {{ui:Pogled}} › {{ui:Više}} › {{ui:Tipkovni prečaci…}}, ili ukucajte `KEYS` i pritisnite {{key:Enter}}.
2. Kliknite polje {{ui:Tipka}} i pritisnite tastere, na primjer {{key:Alt+Shift+C}}.
3. U {{ui:Pokreće}} napišite naredbu i, ako želite, ono što treba ukucati poslije nje: `CIRCLE`, ili `ZOOM E`.
4. Kliknite {{ui:Dodaj}}.

Taster mora imati {{key:Mod}} ili {{key:Alt}} uz slovo ili cifru, ili slobodan funkcijski taster ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tastere koje već koriste CadCraft, aplikacija ili pregledač, kao i tastere koje ima dugme Moji alati (vidi [Dugmad po vašem izboru](topic:my-tools)), odbija se, a polje kaže zašto. Prečice se čuvaju u ovom pregledaču (ili desktop aplikaciji); {{ui:Ukloni}} uklanja jednu.

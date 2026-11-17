---
title: Uredi skraćenice naredbi
summary: Čuvaj svoje skraćenice naredbi u jednoj tekstualnoj datoteci u poznatom formatu, uvezi i izvezi .pgp datoteku i ponovo je učitaj s REINIT.
keywords: skraćenica, skraćenice, aliasedit, pgp, prečica, kratki naziv, reinit, tastatura, prilagodi, uredi skraćenice
from: 6ab6fa0e
---

## Šta ćeš naučiti

Kako dodati vlastite kratke nazive za naredbe, na primjer `LL` za {{cmd:LINE}}, sve u jednoj tekstualnoj datoteci.

## Dodaj skraćenicu

1. Otvori {{ui:Pogled}} › {{ui:Više}} › {{ui:Uredi skraćenice…}}, ili ukucaj {{cmd:ALIASEDIT}} i pritisni {{key:Enter}}.
2. Dodaj red sa skraćenicom, zarez i naredbu nakon zvjezdice:

```
LL,     *LINE
```

3. Klikni {{ui:Spasi}}. Komandna linija kaže koliko tvojih skraćenica je u upotrebi.
4. Ukucaj `LL` i pritisni {{key:Enter}}: LINE počinje.

Tvoje skraćenice stoje iznad CadCraft-ovih. Tvoj red pobjeđuje ugrađenu skraćenicu istog naziva; ukloni svoj red i ugrađena se vraća.

## Redovi koje CadCraft odbija

Uređivač navodi svaki problem s brojem reda dok kucaš:

- naredba ne postoji;
- skraćenica je sama naziv naredbe (`LINE, *CIRCLE` bi sakrio LINE);
- red nije u obliku `ALIAS, *COMMAND`;
- ista skraćenica je u dva reda (kasniji pobjeđuje).

Redovi koji pokreću program na tvom računaru, poput `NOTEPAD, START, 1, *File to edit: ,`, preskaču se uz napomenu: aplikacija u pregledaču ne može pokretati programe.

## Uvezi skraćenice iz drugog programa

1. U uređivaču skraćenica klikni {{ui:Uvezi .pgp…}} i izaberi datoteku. Možeš i prevući `.pgp` datoteku na crtež.
2. Provjeri navedene probleme (naredbe koje CadCraft nema se odbijaju, ostale rade).
3. Klikni {{ui:Spasi}}.

{{ui:Izvezi .pgp}} čuva CadCraft-ove skraćenice i tvoje kao jednu datoteku u istom formatu.

## Ponovo učitaj datoteku

Ukucaj {{cmd:REINIT}} i pritisni {{key:Enter}} da ponovo primijeniš datoteku sa skraćenicama. Čuva se u ovom pregledaču; desktop aplikacija će je čuvati u svojoj fascikli, a cloud servis će je sinhronizovati.

## Tipkovni prečaci za bilo koju naredbu

Skraćenica se kuca; prečac je tipka. Da naredbi dodijeliš vlastitu tipku:

1. Klikni {{ui:Pogled}} › {{ui:Više}} › {{ui:Tipkovni prečaci…}}, ili ukucaj `KEYS` i pritisni {{key:Enter}}.
2. Klikni okvir {{ui:Tipka}} i pritisni tipke, na primjer {{key:Alt+Shift+C}}.
3. U {{ui:Pokreće}} upiši naredbu i, ako želiš, šta da se ukuca poslije nje: `CIRCLE`, ili `ZOOM E`.
4. Klikni {{ui:Dodaj}}.

Tipka treba {{key:Mod}} ili {{key:Alt}} sa slovom ili cifrom, ili slobodnu funkcijsku tipku ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tipke koje već koriste CadCraft, aplikacija ili pregledač, kao i tipke koje ima neko od tvojih dugmadi (vidi [Dugmad po mjeri](topic:my-tools)), se odbijaju, a okvir kaže zašto. Prečaci se čuvaju u ovom pregledaču (ili desktop aplikaciji); {{ui:Ukloni}} uklanja jedan.

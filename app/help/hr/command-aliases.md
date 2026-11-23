---
title: Uređivanje aliasa naredbi
summary: Čuvajte vlastite kratke nazive naredbi u jednoj tekstualnoj datoteci u poznatom formatu, uvezite i izvezite datoteku .pgp te je ponovno učitajte naredbom REINIT.
keywords: alias, aliasi, aliasedit, pgp, prečac, kratki naziv, reinit, tipkovnica, prilagodba, uredi aliase
from: 2282d36f
---

## Što ćete naučiti

Kako dodati vlastite kratke nazive za naredbe, na primjer `LL` za {{cmd:LINE}}, sve u jednoj tekstualnoj datoteci.

## Dodavanje aliasa

1. Otvorite {{ui:Pogled}} › {{ui:Više}} › {{ui:Uredi aliase…}}, ili upišite {{cmd:ALIASEDIT}} i pritisnite {{key:Enter}}.
2. Dodajte redak s aliasom, zarez i naredbu iza zvjezdice:

```
LL,     *LINE
```

3. Kliknite {{ui:Spremi}}. Naredbeni redak kaže koliko je vaših aliasa u uporabi.
4. Upišite `LL` i pritisnite {{key:Enter}}: pokreće se LINE.

Vaši aliasi stoje iznad aliasa programa CadCraft. Vaš redak ima prednost pred ugrađenim aliasom istog naziva; uklonite redak i ugrađeni alias ponovno vrijedi.

## Redovi koje CadCraft odbija

Uređivač navodi svaki problem s brojem retka dok tipkate:

- naredba ne postoji;
- alias je sam naziv naredbe (`LINE, *CIRCLE` bi sakrio LINE);
- redak nije oblika `ALIAS, *COMMAND`;
- isti alias je u dva retka (vrijedi kasniji).

Redci koji pokreću program na vašem računalu, poput `NOTEPAD, START, 1, *File to edit: ,`, preskaču se uz napomenu: aplikacija u pregledniku ne može pokretati programe.

## Preuzimanje aliasa iz drugog programa

1. U uređivaču aliasa kliknite {{ui:Uvezi .pgp…}} i odaberite datoteku. Datoteku `.pgp` možete i povući na crtež.
2. Provjerite popisane probleme (naredbe koje CadCraft nema bit će odbijene, ostale rade).
3. Kliknite {{ui:Spremi}}.

{{ui:Izvezi .pgp}} sprema CadCraftove aliase i vaše u jednu datoteku u istom formatu.

## Ponovno učitavanje datoteke

Upišite {{cmd:REINIT}} i pritisnite {{key:Enter}} da ponovno primijenite datoteku aliasa. Čuva se u ovom pregledniku; aplikacija za računalo čuvat će je u vlastitoj mapi, a usluga u oblaku će je sinkronizirati.

## Slova za opcije naredbe

Alias imenuje naredbu. Za promjenu slova kojima odgovarate na opcije naredbe (`P` za Polarno u {{cmd:ARRAY}}) pogledajte [Dajte opcijama naredbi vlastita slova](topic:option-letters).

## Prečaci tipkovnice za bilo koju naredbu

Alias se upisuje; prečac je tipka. Da naredbi dodijelite vlastitu tipku:

1. Kliknite {{ui:Pogled}} › {{ui:Više}} › {{ui:Tipkovnički prečaci…}}, ili upišite `KEYS` i pritisnite {{key:Enter}}.
2. Kliknite okvir {{ui:Tipka}} i pritisnite tipke, na primjer {{key:Alt+Shift+C}}.
3. U polje {{ui:Pokreće}} upišite naredbu i, ako želite, što upisati poslije nje: `CIRCLE` ili `ZOOM E`.
4. Kliknite {{ui:Dodaj (A)}}.

Tipka mora imati {{key:Mod}} ili {{key:Alt}} uz slovo ili znamenku, ili slobodnu funkcijsku tipku ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tipke koje već koriste CadCraft, aplikacija ili preglednik te tipke koje ima gumb Moji alati (vidi [Gumbi vlastitih alata](topic:my-tools)) bit će odbijene, a okvir kaže zašto. Prečaci se čuvaju u ovom pregledniku (ili aplikaciji za računalo); {{ui:Ukloni (R)}} ga uklanja.

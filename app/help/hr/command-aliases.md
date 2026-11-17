---
title: Uređivanje aliasa naredbi
summary: Čuvajte vlastite aliase naredbi u jednoj tekstualnoj datoteci u poznatom obliku, uvezite i izvezite .pgp datoteku te je ponovno učitajte pomoću REINIT.
keywords: alias, aliasi, aliasedit, pgp, prečac, kratki naziv, reinit, tipkovnica, prilagodba, uredi aliase
from: 6ab6fa0e
---

## Što ćete naučiti

Kako dodati vlastite kratke nazive za naredbe, na primjer `LL` za {{cmd:LINE}}, sve u jednoj tekstualnoj datoteci.

## Dodavanje aliasa

1. Otvorite {{ui:Pogled}} › {{ui:Više}} › {{ui:Uredi aliase…}}, ili upišite {{cmd:ALIASEDIT}} i pritisnite {{key:Enter}}.
2. Dodajte redak s aliasom, zarezom i naredbom iza zvjezdice:

```
LL,     *LINE
```

3. Kliknite {{ui:Spremi}}. Naredbeni redak kaže koliko je vaših aliasa u uporabi.
4. Upišite `LL` i pritisnite {{key:Enter}}: LINE počinje.

Vaši aliasi nalaze se iznad CadCraftovih ugrađenih. Vaš redak pobjeđuje ugrađeni alias s istim nazivom; uklonite svoj redak i ugrađeni se vraća.

## Retci koje CadCraft odbija

Urednik navodi svaki problem s brojem retka dok tipkate:

- naredba ne postoji;
- alias je ujedno naziv naredbe (`LINE, *CIRCLE` bi sakrio LINE);
- redak nije u obliku `ALIAS, *COMMAND`;
- isti alias je u dva retka (kasniji pobjeđuje).

Retci koji pokreću program na vašem računalu, poput `NOTEPAD, START, 1, *File to edit: ,`, preskaču se uz napomenu: aplikacija u pregledniku ne može pokretati programe.

## Uvoz aliasa iz drugog programa

1. U uredniku aliasa kliknite {{ui:Uvezi .pgp…}} i odaberite datoteku. Možete i ispustiti `.pgp` datoteku na crtež.
2. Provjerite navedene probleme (naredbe koje CadCraft nema bit će odbijene, ostalo radi).
3. Kliknite {{ui:Spremi}}.

{{ui:Izvezi .pgp}} sprema CadCraftove aliase i vaše kao jednu datoteku u istom obliku.

## Ponovno učitavanje datoteke

Upišite {{cmd:REINIT}} i pritisnite {{key:Enter}} da ponovno primijenite datoteku aliasa. Čuva se u ovom pregledniku; desktop aplikacija će je čuvati u vlastitoj mapi, a usluga u oblaku će je sinkronizirati.

## Tipkovni prečaci za bilo koju naredbu

Alias se upisuje; prečac je tipka. Da naredbi dodijelite vlastitu tipku:

1. Kliknite {{ui:Pogled}} › {{ui:Više}} › {{ui:Tipkovnički prečaci…}}, ili upišite `KEYS` i pritisnite {{key:Enter}}.
2. Kliknite polje {{ui:Tipka}} i pritisnite tipke, na primjer {{key:Alt+Shift+C}}.
3. U {{ui:Pokreće}} upišite naredbu i, ako želite, što upisati nakon nje: `CIRCLE` ili `ZOOM E`.
4. Kliknite {{ui:Dodaj (A)}}.

Tipka mora imati {{key:Mod}} ili {{key:Alt}} sa slovom ili znamenkom, ili biti slobodna funkcijska tipka ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tipke koje već koriste CadCraft, aplikacija ili preglednik, kao i tipke koje ima gumb Moji alati (pogledajte [Gumbi po vašem izboru](topic:my-tools)), se odbijaju, a okvir kaže zašto. Prečaci se čuvaju u ovom pregledniku (ili desktop aplikaciji); {{ui:Ukloni (R)}} uklanja jedan.

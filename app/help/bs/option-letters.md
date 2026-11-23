---
title: Dodijelite opcijama naredbi vlastita slova
summary: Odgovarajte na opcije naredbe slovima koja sami birate, na bilo kojem jeziku, iz jedne tekstualne datoteke koju možete uređivati, uvoziti i izvoziti.
keywords: slova opcija, optionkeys, optkeys, ključ opcije, ključ, preslikavanje, mapiranje, prilagodi, vlastita slova, polar, array, P, PO, jezik, prevedi opcije, kratki oblik, uvoz, izvoz, dvosmisleno
from: 7c8328c6
---

## Šta ćete naučiti

Kako promijeniti slova koja ukucavate da odgovorite na opcije naredbe. Na primjer, {{cmd:ARRAY}} pita `[Rectangular/POlar]` i prihvata `PO` za Polar; možete napraviti da `P` ili bilo koja druga slova rade isto, na vašem jeziku ako želite.

## Kako se odgovara na opcije

Kad naredba pokaže opcije u uglastim zagradama, velika slova su ona koja se ukucavaju: `POlar` je `PO`, `eXit` je `X`.

Možete ukucati i manje slova. Ako ono što ukucate odgovara samo jednoj od prikazanih opcija, CadCraft je uzima: uz `[Rectangular/POlar]`, sâmo `P` je Polar. Ako odgovara dvjema, komandna linija ih navodi i ponovo pita:

```
C could be COUnt, COLumns. Type more letters.
```

Brojevi se nikad ne pogađaju, pa se uneseni broj ili razmjer uvijek čita kao broj.

## Dodavanje vlastitih slova

Svaka naredba zadržava svoja ugrađena slova. Vaša dodajete preko njih, pa vaš spisak sadrži samo ono što ste promijenili.

1. Otvorite {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Slova opcija}} i kliknite {{ui:Uredi…}}. Ili ukucajte {{cmd:OPTIONKEYS}} i pritisnite {{key:Enter}}.
2. Pod {{ui:Naredba}}, izaberite naredbu, na primjer `ARRAY`. Spisak sadrži svaku naredbu koja traži opcije, i počinje s naredbom koju ste posljednju koristili.
3. Pod {{ui:Opcija}}, izaberite opciju. Svaka prikazuje svoja ugrađena slova u zagradama, na primjer `POlar (PO)`.
4. U {{ui:Vaša slova}} ukucajte slova koja želite, na primjer `P`, i kliknite {{ui:Dodaj}}.
5. Opcija se sada pojavljuje pod {{ui:Vaša slova}} sa svojim ugrađenim slovima i vašim. Kliknite {{ui:Spasi}}.

Pokrenite {{cmd:ARRAY}}, odaberite objekat i pritisnite {{key:Enter}}. Upit prikazuje vaša slova iza opcije, `POlar (P)`, a `P` na nju odgovara.

Da uklonite jedno, kliknite x na kraju njegovog reda, pa {{ui:Spasi}}. Opcija se vraća na samo svoja ugrađena slova.

## Slova koja ne možete koristiti

Uređivač odbija slova koja bi sakrila nešto što komandna linija već čita, i kaže zašto:

- ugrađena slova druge opcije iste naredbe (`R` za Polar u `ARRAY`, gdje je `R` Rectangular);
- riječ hvatanja objekta od tri ili više slova, kao `END`, `MID` ili `CEN`, i riječi `ALL` i `LAST`;
- ista slova za dvije različite opcije jedne naredbe.

Dok je bilo šta navedeno crveno, {{ui:Spasi}} je isključeno: popravite red ili ga uklonite, i ono se vraća. Ugrađena slova upita uvijek imaju prednost nad vašim, pa vaš spisak nikad ne može spriječiti ugrađeni odgovor da radi. Slova koja slučajno jesu naziv naredbe, kao L ili C, su u redu: kod upita opcije komandna linija čita odgovor, a ne pokreće naredbu.

Opcije navedene za naredbu dolaze od naredbi koje dijele njene upite, pa povremeno naredba navodi opciju koju traži samo u nekim slučajevima.

## Jedan izbor za svaku naredbu

Pod {{ui:Naredba}}, izaberite {{ui:Svaka naredba}}. Opcije su tada svaka opcija koju ima bilo koja naredba, kao eXit ili Undo. Slova koja tamo dodate odgovaraju toj opciji gdje god naredba je nudi. Slova dodana za jednu naredbu imaju prednost nad ovima.

## Slova na vašem jeziku

Slova mogu biti iz bilo kojeg alfabeta, pa možete odgovarati na opcije bez prebacivanja tastature: dodajte `З` za Close pod {{ui:Svaka naredba}}, ili `П` za POlar u `ARRAY`.

CadCraft dolazi samo s engleskim slovima. Vaš spisak je način na koji vi, vaša kancelarija ili ljudi koji dijele vaš jezik postavljaju ostalo, a {{ui:Izvezi}} pravi datoteku koju možete proslijediti.

## Uređivanje kao tekst

{{ui:Uredi kao tekst}} u uređivaču prikazuje isti spisak kao redove teksta, po jedan za svaku opciju, što je takođe ono što {{ui:Izvezi}} čuva:

```
ARRAY.PO,  P
*.X,       Q
```

Svaki red je naredba, tačka, ugrađena slova opcije, zarez i vaša slova. Zvjezdica umjesto naredbe znači svaku naredbu. Red koji počinje sa `;` je napomena.

## Šta ostaje isto

- Ugrađena slova i dalje rade pored vaših.
- Rutine i dugmad na traci s alatima i dalje koriste ugrađena slova, pa ništa što ste učitali ne puca. Da sami ukucate ugrađena slova tamo gdje bi vaša smetala, stavite podvlaku ispred: `_PO`.
- Kratki naziv naredbe je nešto drugo: pogledajte [Uredi skraćenice naredbi](topic:command-aliases).

## Redovi koje CadCraft odbija

Kad uređujete kao tekst ili uvozite datoteku, uređivač navodi svaki problem sa brojem reda:

- naredba ne postoji (kratki naziv naredbe je u redu: `AR.PO` se čita kao `ARRAY.PO`);
- red nije u obliku `COMMAND.OPTION, LETTERS`;
- slova imaju razmak ili znak (samo slova i cifre, najviše 16);
- ista slova odgovaraju dvjema različitim opcijama jedne naredbe.

## Uvoz i izvoz

{{ui:Izvezi}} čuva vaša slova kao tekstualnu datoteku, da je zadržite ili dajete nekom drugom. {{ui:Uvezi…}} čita takvu datoteku. Oba su u uređivaču i u {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Slova opcija}}.

U Postavkama, {{ui:Uvezi…}} zamjenjuje vašu datoteku onom koju izaberete. Datoteka sa redom koji se sudara ili se ne može koristiti se ne prihvata; otvorite uređivač i uvezite je tamo da vidite redove. U uređivaču ona samo popunjava polje: ništa se ne mijenja dok ne kliknete {{ui:Spasi}}.

## Ponovno učitavanje ili uklanjanje

Ukucajte {{cmd:REINIT}} i pritisnite {{key:Enter}} da ponovo primijenite datoteku. Da uklonite slovo, obrišite njegov red i kliknite {{ui:Spasi}}.

## Vaša slova prate vaš račun

Kad ste prijavljeni na getcadcraft.com, vaša slova čuvaju se uz vaš račun. Otvorite CadCraft u drugom pregledaču ili na drugom računaru s istim računom i ona stižu sama; komandna linija kaže "Slova opcija s vašeg računa". Ako ste ih promijenili na dva mjesta, pobjeđuje najnovija kopija, a ona koju je zamijenila čuva se jednom.

{{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Slova opcija}} kaže u kakvom su stanju. Odjavljeni ili van mreže, ostaju u ovom pregledaču i idu na vaš račun sljedeći put kad ih spasite dok ste prijavljeni.

Povezano: [Uredi skraćenice naredbi](topic:command-aliases) · [Postavke aplikacije CadCraft](topic:settings) · [Naredbe](topic:commands)

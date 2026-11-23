---
title: Dajte opcijama naredbi vlastita slova
summary: Odgovarajte na opcije naredbi slovima koje sami odaberete, na bilo kojem jeziku, iz jedne tekstualne datoteke koju možete uređivati, uvoziti i izvoziti.
keywords: slova opcija, optionkeys, optkeys, ključna riječ opcije, ključ, preslikavanje, mapiranje, prilagodba, vlastita slova, polarno, niz, P, PO, jezik, prijevod opcija, kratki oblik, uvoz, izvoz, nejednoznačno
from: 7c8328c6
---

## Što ćete naučiti

Kako promijeniti slova koja upisujete za odgovor na opcije naredbe. Na primjer, {{cmd:ARRAY}} pita `[Rectangular/POlar]` i prima `PO` za Polarno; možete učiniti da `P` ili bilo koja druga slova rade isto, na vašem jeziku ako želite.

## Kako se odgovara na opcije

Kad naredba prikaže opcije u uglatim zagradama, velika slova su ona koja upisujete: `POlar` je `PO`, `eXit` je `X`.

Možete upisati i manje slova. Ako to što upišete odgovara samo jednoj od prikazanih opcija, CadCraft je prihvaća: uz `[Rectangular/POlar]`, sam `P` je Polarno. Ako odgovara dvjema, naredbeni redak ih navodi i pita ponovno:

```
C could be COUnt, COLumns. Type more letters.
```

Brojevi se nikad ne pogađaju, pa se upisana udaljenost ili broj uvijek čita kao broj.

## Dodavanje vlastitih slova

Svaka naredba zadržava svoja ugrađena slova. Vlastita dodajete povrh njih, pa vaš popis sadrži samo ono što ste promijenili.

1. Otvorite {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Slova opcija}} i kliknite {{ui:Uredi…}}. Ili upišite {{cmd:OPTIONKEYS}} i pritisnite {{key:Enter}}.
2. Pod {{ui:Naredba}} odaberite naredbu, na primjer `ARRAY`. Popis sadrži svaku naredbu koja traži opcije, a počinje na naredbi koju ste zadnje rabili.
3. Pod {{ui:Opcija}} odaberite opciju. Svaka prikazuje svoja ugrađena slova u zagradama, na primjer `POlar (PO)`.
4. U {{ui:Vaša slova}} upišite slova koja želite, na primjer `P`, i kliknite {{ui:Dodaj (A)}}.
5. Opcija se sada pojavljuje pod {{ui:Vaša slova}} sa svojim ugrađenim slovima i vašima. Kliknite {{ui:Spremi}}.

Pokrenite {{cmd:ARRAY}}, odaberite objekt i pritisnite {{key:Enter}}. Upit prikazuje vaša slova nakon opcije, `POlar (P)`, i `P` odgovara na nju.

Da uklonite jedno, kliknite x na kraju njegova retka, zatim {{ui:Spremi}}. Opcija se vraća na samo svoja ugrađena slova.

## Slova koja se ne mogu rabiti

Uređivač odbija slova koja bi sakrila nešto što naredbeni redak već čita, i kaže zašto:

- ugrađena slova druge opcije iste naredbe (`R` za Polarno u `ARRAY`, gdje je `R` Rectangular);
- riječ hvatanja objekta od tri slova ili više, poput `END`, `MID` ili `CEN`, te riječi `ALL` i `LAST`;
- ista slova za dvije različite opcije jedne naredbe.

Dok je nešto navedeno crvenom bojom, {{ui:Spremi}} je isključen: popravite redak ili ga uklonite, pa se opet uključuje. Ugrađena slova upita uvijek također pobjeđuju vaša, pa vaš popis nikad ne može zaustaviti ugrađeni odgovor. Slova koja slučajno jesu naziv naredbe, poput `L` ili `C`, u redu su: na upitu opcije naredbeni redak čita odgovor, a ne pokreće naredbu.

Opcije navedene za naredbu dolaze iz naredbi koje dijele njezine upite, pa tu i tamo naredba navodi opciju koju traži samo u nekim slučajevima.

## Jedan izbor za svaku naredbu

Pod {{ui:Naredba}} odaberite {{ui:Svaka naredba}}. Opcije su tada svaka opcija koju ima bilo koja naredba, poput eXit ili Undo. Slova koja tamo dodate odgovaraju toj opciji gdje god je naredba nudi. Slova dodana za jednu naredbu imaju prednost pred ovima.

## Slova na vašem jeziku

Slova mogu biti iz bilo koje abecede, pa možete odgovarati na opcije bez mijenjanja tipkovnice: dodajte `З` za Close pod {{ui:Svaka naredba}}, ili `П` za POlar u `ARRAY`.

CadCraft dolazi samo s engleskim slovima. Vlastiti popis je način na koji vi, vaš ured ili ljudi koji dijele vaš jezik postavljaju ostalo, a {{ui:Izvezi}} izrađuje datoteku koju možete proslijediti.

## Uređivanje kao tekst

{{ui:Uredi kao tekst}} u uređivaču prikazuje isti popis kao retke teksta, po jedan za svaku opciju, što {{ui:Izvezi}} također sprema:

```
ARRAY.PO,  P
*.X,       Q
```

Svaki redak je naredba, točka, ugrađena slova opcije, zarez i vaša slova. Zvjezdica umjesto naredbe znači svaku naredbu. Redak koji počinje s `;` je bilješka.

## Što ostaje isto

- Ugrađena slova i dalje rade uz vaša.
- Rutine i gumbi alatne trake i dalje rabe ugrađena slova, pa se ništa što ste učitali ne kvari. Da sami upišete ugrađena slova tamo gdje bi vaša smetala, prvo stavite podcrtu: `_PO`.
- Kratki naziv naredbe je nešto drugo: pogledajte [Uređivanje aliasa naredbi](topic:command-aliases).

## Redovi koje CadCraft odbija

Kad uređujete kao tekst ili uvozite datoteku, uređivač navodi svaki problem s brojem retka:

- naredba ne postoji (alias naredbe je u redu: `AR.PO` se čita kao `ARRAY.PO`);
- redak nije oblika `COMMAND.OPTION, LETTERS`;
- slova imaju razmak ili znak (samo slova i brojke, najviše 16);
- ista slova odgovaraju na dvije različite opcije jedne naredbe.

## Uvoz i izvoz

{{ui:Izvezi}} sprema vaša slova kao tekstualnu datoteku, za čuvanje ili za davanje nekome drugome. {{ui:Uvezi…}} čita takvu datoteku. Oboje je u uređivaču i u {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Slova opcija}}.

U Postavkama {{ui:Uvezi…}} zamjenjuje vašu datoteku onom koju odaberete. Datoteka s retkom koji se sudara ili se ne može rabiti se ne prihvaća; otvorite uređivač i uvezite je tamo da vidite retke. U uređivaču samo puni okvir: ništa se ne mijenja dok ne kliknete {{ui:Spremi}}.

## Ponovno učitavanje ili uklanjanje

Upišite {{cmd:REINIT}} i pritisnite {{key:Enter}} da ponovno primijenite datoteku. Da uklonite slovo, obrišite njegov redak i kliknite {{ui:Spremi}}.

## Vaša slova prate vaš račun

Kad ste prijavljeni na getcadcraft.com, vaša slova čuvaju se uz vaš račun. Otvorite CadCraft u drugom pregledniku ili na drugom računalu s istim računom i ona stižu sama; naredbeni redak kaže `Option letters from your account`. Ako ste ih promijenili na dva mjesta, pobjeđuje najnovija kopija, a ona koju je zamijenila čuva se jednom.

{{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Slova opcija}} kaže u kakvom su stanju. Odjavljeni ili bez mreže, ostaju u ovom pregledniku i idu na vaš račun sljedeći put kad ih spremite dok ste prijavljeni.

Povezano: [Uređivanje aliasa naredbi](topic:command-aliases) · [Postavke programa CadCraft](topic:settings) · [Naredbe](topic:commands)

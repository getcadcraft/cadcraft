---
title: Dajte opcijama komandi sopstvena slova
summary: Odgovarajte na opcije komande slovima koje sami izaberete, na bilo kom jeziku, iz jedne tekstualne datoteke koju možete menjati, uvoziti i izvoziti.
keywords: slova opcija, optionkeys, optkeys, ključna reč opcije, ključna reč, preslikavanje, mapiranje, prilagodi, sopstvena slova, uvezi, izvezi, polar, array, P, PO, jezik, prevedi opcije, kratak oblik, uvoz, izvoz, dvosmisleno
from: 7c8328c6
---

## Šta ćete naučiti

Kako promeniti slova koja ukucavate za odgovor na opcije komande. Na primer, {{cmd:ARRAY}} pita `[Rectangular/POlar]` i prima `PO` za Polarno; možete da napravite da `P` ili bilo koja druga slova rade isto, na vašem jeziku ako želite.

## Kako se odgovara na opcije

Kada komanda prikazuje opcije u uglastim zagradama, velika slova su ona koja treba ukucati: `POlar` je `PO`, `eXit` je `X`.

Možete ukucati i manje slova. Ako ono što ukucate odgovara samo jednoj od prikazanih opcija, CadCraft je uzima: uz `[Rectangular/POlar]`, sami `P` je Polarno. Ako odgovara dvema, komandna linija ih navodi i ponovo pita:

```
C could be COUnt, COLumns. Type more letters.
```

Brojevi se nikada ne pogađaju, pa se uneto rastojanje ili broj uvek čita kao broj.

## Dodavanje sopstvenih slova

Svaka komanda zadržava ugrađena slova. Vaša dodaju se preko njih, pa vaš spisak sadrži samo ono što ste promenili.

1. Otvorite {{ui:Podešavanja}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Slova opcija}} i kliknite {{ui:Uredi…}}. Ili ukucajte {{cmd:OPTIONKEYS}} i pritisnite {{key:Enter}}.
2. Pod {{ui:Komanda}} izaberite komandu, na primer `ARRAY`. Spisak sadrži svaku komandu koja traži opcije, i počinje od komande koju ste poslednju koristili.
3. Pod {{ui:Opcija}} izaberite opciju. Svaka prikazuje svoja ugrađena slova u zagradama, na primer `POlar (PO)`.
4. U {{ui:Vaša slova}} ukucajte slova koja želite, na primer `P`, i kliknite {{ui:Dodaj (A)}}.
5. Opcija se sada pojavljuje pod {{ui:Vaša slova}} sa svojim ugrađenim slovima i vašim. Kliknite {{ui:Sačuvaj}}.

Pokrenite {{cmd:ARRAY}}, izaberite objekat i pritisnite {{key:Enter}}. Upit prikazuje vaša slova posle opcije, `POlar (P)`, i `P` odgovara na nju.

Da uklonite jedno, kliknite x na kraju njegovog reda, pa {{ui:Sačuvaj}}. Opcija se vraća na samo svoja ugrađena slova.

## Slova koja ne možete koristiti

Urednik odbija slova koja bi sakrila nešto što komandna linija već čita, i kaže zašto:

- ugrađena slova druge opcije iste komande (`R` za Polarno u `ARRAY`, gde je `R` Pravougaono);
- reč za hvatanje objekta od tri ili više slova, kao što su `END`, `MID` ili `CEN`, kao i reči `ALL` i `LAST`;
- ista slova za dve različite opcije jedne komande.

Dok je nešto navedeno crveno, {{ui:Sačuvaj}} je isključeno: ispravite red ili ga uklonite, pa se dugme ponovo uključuje. Ugrađena slova upita uvek imaju prednost nad vašim, pa vaš spisak nikada ne može da spreči ugrađeni odgovor da radi. Slova koja su slučajno naziv komande, kao `L` ili `C`, su u redu: na upitu opcije komandna linija čita odgovor, a ne pokreće komandu.

Spisak opcija za komandu dolazi od komandi koje dele iste upite, pa se ponekad navodi opcija koju komanda traži samo u nekim slučajevima.

## Jedan izbor za svaku komandu

Pod {{ui:Komanda}} izaberite {{ui:Svaka komanda}}. Opcije su tada sve opcije koje bilo koja komanda ima, kao što su eXit ili Undo. Slova koja dodate tamo odgovaraju toj opciji gde god je komanda nudi. Slova dodata za jednu komandu imaju prednost nad ovima.

## Slova na vašem jeziku

Slova mogu biti iz bilo koje azbuke, pa možete odgovarati na opcije bez promene rasporeda tastature: dodajte `З` za Close pod {{ui:Svaka komanda}}, ili `П` za POlar u `ARRAY`.

CadCraft dolazi samo sa engleskim slovima. Vaš spisak je način na koji vi, vaša kancelarija ili ljudi koji dele vaš jezik postavljate ostalo, a {{ui:Izvezi}} pravi datoteku koju možete proslediti dalje.

## Uredi kao tekst

{{ui:Uredi kao tekst}} u uredniku prikazuje isti spisak kao redove teksta, jedan po opciji; to je ono što {{ui:Izvezi}} čuva:

```
ARRAY.PO,  P
*.X,       Q
```

Svaki red je komanda, tačka, ugrađena slova opcije, zarez i vaša slova. Zvezdica umesto komande znači svaku komandu. Red koji počinje sa `;` je napomena.

## Šta ostaje isto

- Ugrađena slova i dalje rade pored vaših.
- Rutine i dugmad na alatnoj traci i dalje koriste ugrađena slova, pa ništa što ste učitali ne prestaje da radi. Da biste sami ukucali ugrađena slova tamo gde bi vaša smetala, stavite donju crtu ispred: `_PO`.
- Kratak naziv komande je nešto drugo: vidi [Izmeni skraćenice komandi](topic:command-aliases).

## Redovi koje CadCraft odbija

Kada uređujete kao tekst ili uvozite datoteku, urednik navodi svaki problem sa brojem reda:

- komanda ne postoji (skraćenica komande je u redu: `AR.PO` se čita kao `ARRAY.PO`);
- red nije oblika `KOMANDA.OPCIJA, SLOVA`;
- slova sadrže razmak ili znak (samo slova i cifre, najviše 16);
- ista slova odgovaraju na dve različite opcije jedne komande.

## Uvoz i izvoz

{{ui:Izvezi}} čuva vaša slova kao tekstualnu datoteku, da je zadržite ili date nekome. {{ui:Uvezi…}} čita takvu datoteku. Obe su u uredniku i u {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Slova opcija}}.

U podešavanjima {{ui:Uvezi…}} zamenjuje vašu datoteku onom koju izaberete. Datoteka sa redom koji se sudara ili koji se ne može koristiti se ne prihvata; otvorite urednik i uvezite je tamo da biste videli redove. U uredniku ona samo popunjava polje: ništa se ne menja dok ne kliknete {{ui:Sačuvaj}}.

## Ponovno učitavanje ili uklanjanje

Ukucajte {{cmd:REINIT}} i pritisnite {{key:Enter}} da ponovo primenite svoju datoteku. Da uklonite slovo, obrišite njegov red i kliknite {{ui:Sačuvaj}}.

## Vaša slova prate vaš nalog

Kada ste prijavljeni na getcadcraft.com, vaša slova se čuvaju uz vaš nalog. Otvorite CadCraft u drugom pregledaču ili na drugom računaru sa istim nalogom i ona stižu sama; komandna linija kaže `Option letters from your account`. Ako ste ih menjali na dva mesta, najnovija kopija pobeđuje, a ona koju je zamenila čuva se jednom.

{{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Slova opcija}} kaže u kakvom su stanju. Bez prijave ili van mreže, ostaju u ovom pregledaču, a odlaze na vaš nalog sledeći put kada ih sačuvate dok ste prijavljeni.

Povezano: [Izmeni skraćenice komandi](topic:command-aliases) · [Podešavanja CadCraft-a](topic:settings) · [Komande](topic:commands)

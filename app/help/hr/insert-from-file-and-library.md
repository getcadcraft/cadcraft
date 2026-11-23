---
title: Umetanje iz datoteke ili knjižnice
summary: Uvezite blok ili cijeli crtež iz druge datoteke DWG ili DXF te postavite stavke iz knjižnice, datoteke ili druge knjižnice, sa zaslugama za autore i ažuriranjima.
keywords: umetni, datoteka, knjižnica, librarycraft, stavka, oprema, blok iz drugog crteža, wblock, centar za dizajn, zasluge, navođenje autora, licencija, ažuriranje, izvor, item.json
from: f6e4e452
---

## Umetanje bloka iz drugog crteža

1. Upišite `I` i pritisnite {{key:Enter}}, ili kliknite {{ui:Umetni}} u skupini Blokovi.
2. Naredbeni redak pri dnu prozora pita `Enter block name or [File/Library]`. Tu upišite `F` i pritisnite {{key:Enter}}.
3. Odaberite DWG ili DXF na ovom računalu. Čita se ovdje; ne otvara se i ništa se ne šalje.
4. U dijaloškom okviru {{ui:Umetni iz}} odaberite blok s popisa (upišite u {{ui:Filtriraj blokove}} da ga nađete), ili ostavite {{ui:Cijeli crtež}} označen. Kliknite {{ui:Umetni}}.
5. Kliknite gdje ide i ispunite atribute koje traži.

Možete krenuti i iz ploče {{ui:Blokovi}}: upišite `F` u njezin okvir {{ui:Filtriraj blokove}} i pritisnite {{key:Enter}}, ili upišite nešto što nijedan blok ne sadrži i kliknite {{ui:Iz datoteke…}}. `L` i {{ui:Knjižnica…}} otvaraju knjižnicu na isti način. Prije verzije 0.10.1 slovo upisano u {{ui:Filtriraj blokove}} pretraživalo je samo blokove ovog crteža i odgovaralo „Nijedan blok ne odgovara filtru.“

Da imate svoj crtež s blokovima pri ruci, kliknite {{ui:Dodaj crtež}} pod {{ui:Knjižnice}} u ploči {{ui:Blokovi}} i odaberite DWG ili DXF. Njegovi blokovi navode se sa slikama; kliknite jedan da ga postavite.

Cijeli crtež uvozi se kao jedan blok nazvan prema datoteci. Dolaze i blokovi unutar odabranog bloka. Slojevi koje koriste dodaju se ovom crtežu.

Ako je drugi crtež u drugim jedinicama (na primjer inči i milimetri), CadCraft prilagođava referencu i to navodi u povijesti.

### Kad je naziv već u uporabi

Ako ovaj crtež već ima blok istog naziva, CadCraft pita:

- {{ui:Zadrži postojeće (K)}} rabi blok ovog crteža tog naziva.
- {{ui:Preimenuj}} uvodi novi kao `Name (2)`.

Cijelo umetanje je jedan korak: {{key:Mod+Z}} ponovno uklanja referencu i kopirane definicije.

## Otvaranje knjižnice

Kliknite {{ui:Knjižnica…}} u ploči {{ui:Blokovi}}, ili {{ui:Knjižnica}} u skupini Blokovi, ili upišite `LIB`. Kod upita `INSERT` i `L` je otvara.

Knjižnica ima četiri izvora, kao kartice:

- {{ui:Knjižnica}}: CadCraft knjižnica. Pretražujte po nazivu, proizvođaču ili modelu te filtrirajte po kategoriji.
- {{ui:Datoteke…}}: datoteka stavke (`item.json`) iz bilo koje knjižnice, ili crtež, proračunska tablica ili 3D model iz kojih se izrađuju stavke: DWG ili DXF (svaki blok postaje stavka), CSV sa stupcima naziva i veličine, ili model glTF ili OBJ. Ništa se ne šalje.
- {{ui:Standardno}}: čelični profili (kao presjeci, pogledi ili 3D elementi) i standardni dijelovi poput vijaka, matica i ležajeva, izrađeni ovdje iz objavljenih tablica. Pogledajte [Postavljanje čeličnih profila i standardnih dijelova](topic:steel-and-standard-parts).
- {{ui:Drugi izvori}}: druge knjižnice koje odgovaraju isto kao {{ui:Knjižnica}}. Dodajte njihovu adresu jednom; ovaj preglednik je pamti.

Svaka kartica prikazuje pregled, naziv, proizvođača i model, licenciju i verziju. Povučena stavka označena je s {{ui:Povučeno}} i razlogom; CadCraft pita prije nego što je postavite.

## Postavljanje stavke

1. Kliknite {{ui:Postavi}} na kartici.
2. Kliknite gdje stavka ide. Prvo upišite `R` da je okrenete ili `S` da je skalirate.
3. Kod `Enter Item number (CC-ITEM)` pritisnite {{key:Enter}} za sljedeći slobodan broj ili upišite svoj.

Stavka postaje blok nazvan `LIB_<name>_v<version>`, nacrtan u jedinicama ovog crteža. Ako crtež nema jedinica, stavka ulazi u milimetrima i povijest to kaže; najprije postavite {{ui:Jedinice}} u desnoj ploči.

Njezini podaci putuju kao nevidljivi atributi: id i verzija stavke, licencija i navođenje autora, proizvođač, model, kategorija i veličine. Pogledajte [Atributi bloka](topic:attributes).

## Stavke na vašem jeziku

Stavka može nositi naziv i opis na drugim jezicima. Kad ih ima na jeziku na koji je postavljen CadCraft (Postavke › Općenito › Jezik), kartica i naziv stavke postavljenog bloka rabe ih. Sam blok zadržava naziv izrađen iz vlastitog naziva stavke, pa crtež ima jedan blok po stavci bez obzira na jezik kojim je postavljena.

## Provjera ažuriranja

1. Otvorite knjižnicu.
2. Kliknite {{ui:Provjeri ažuriranja}}.

Svaka stavka knjižnice u crtežu navodi se sa svojim brojevima stavki i navodom je li ažurna, ima li noviju verziju (i što se promijenilo) ili je povučena. Kliknite {{ui:Ažuriraj}} u retku ili {{ui:Ažuriraj sve}}. Svaka referenca prelazi na blok nove verzije i zadržava broj stavke, količinu, mjesto, kut i sloj. {{key:Mod+Z}} poništava ažuriranje.

## Navođenje autora za ono što ste rabili

Kliknite {{ui:Zasluge knjižnice}}. Svaka stavka navodi se sa svojim retkom navođenja autora i licencijom.

- {{ui:Kopiraj navođenje autora}} kopira redak jedne stavke; {{ui:Kopiraj sve}} kopira svaki redak.
- {{ui:Preuzmi CSV}} sprema popis s brojevima stavki, proizvođačima, modelima, licencijama i navodima autora. Otvara se u bilo kojoj proračunskoj tablici.

Licencije poput CC BY traže da navedete autora gdje rabite djelo. Stavite retke na crtež, u specifikaciju ili u bilješke projekta.

## Simboli i resursi

Knjižnica ima tri vrste stavki: Simboli (konvencije crtanja, 2D), Tipovi (od čega se element sastoji) i Resursi (fizički objekti). Na kartici {{ui:Knjižnica}} popis {{ui:Vrsta stavke}} prikazuje simbole i resurse zajedno, samo simbole ili samo resurse. Tipovi su ono od čega se sastoji projekt BimCrafta, pa ih CadCraft ne navodi.

## Prijava u knjižnicu

Kliknite {{ui:Prijava u knjižnicu}}. Na stranici se otvara mali prozor; kad se tamo prijavite, CadCraft može prikazati stavke vašeg tima i zabilježiti što postavljate, pa čujete kad se stavka koju ste rabili promijeni. Prijava traje za ovu karticu preglednika. Opozovite je u bilo kojem trenutku na stranici sigurnosti vašeg računa.

## Čuvanje vlastitih objekata u Mojim objektima

{{ui:Moji objekti}} je privatan popis u Knjižnici koji vidite samo vi. Nije u javnoj knjižnici, nije u pretrazi i ne prikazuje se vašem timu, a prati vaš račun na svakom računalu na kojem se prijavite u knjižnicu.

1. U ploči Knjižnica kliknite {{ui:Datoteke…}} i učitajte datoteku.
2. Na stavci koju želite ponovno, kliknite {{ui:Spremi u moje objekte}}.
3. Kasnije kliknite {{ui:Moji objekti}} pa {{ui:Postavi}}. Postavlja se kao svaka stavka knjižnice, a {{ui:Provjeri ažuriranja}} obuhvaća i nju.
4. {{ui:Ukloni iz mojih objekata}} je izvlači s popisa. Kopije već postavljene u crtežima ostaju.

Morate biti prijavljeni u knjižnicu. Čitanje datoteke ništa ne šalje na poslužitelj; spremanje stavke šalje samo tu jednu stavku na vaš račun.

:::note
Moji objekti je u testiranju i možda još nisu otvoreni za vaš račun. Ako piše „Moji objekti još nisu otvoreni za ovaj račun“, i dalje možete postavljati stavke iz vlastitih datoteka pomoću {{ui:Datoteke…}}.
:::

## Česte pogreške

- **„Izrada stavki iz IFC tipova je u BimCraftu.“** Datoteke IFC i obitelji čitaju se u aplikaciji BimCraft. Stavku izradite tamo ili u Knjižnici, zatim ovdje rabite njezin `item.json`.
- **„Knjižnici se nije moglo pristupiti.“** Niste na mreži ili je knjižnica nedostupna. Stavke koje su već u crtežu nisu pogođene.
- Stavka je preveliko ili premalo. Jedinice crteža su krive ili nisu postavljene. Poništite, postavite {{ui:Jedinice}} i ponovno je postavite.

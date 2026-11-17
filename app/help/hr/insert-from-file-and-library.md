---
title: Umetanje iz datoteke ili knjižnice
summary: Unesite blok ili cijeli crtež iz drugog DWG ili DXF-a te postavite stavke iz Knjižnice, datoteke ili druge knjižnice, s njihovim zaslugama i ažuriranjima.
keywords: insert, umetanje, datoteka, file, knjižnica, library, librarycraft, stavka, oprema, blok iz drugog crteža, wblock, design center, zasluge, navođenje autora, licenca, ažuriranje, izvor, item.json
from: 316188d2
---

## Umetanje bloka iz drugog crteža

1. Upišite `I` i pritisnite {{key:Enter}}, ili kliknite {{ui:Umetni}} u grupi Blokovi.
2. Na `Enter block name or [File/Library]` upišite `F` i pritisnite {{key:Enter}}.
3. Odaberite DWG ili DXF na ovom računalu. Čita se ovdje; ne otvara se i ništa se ne učitava.
4. U dijaloškom okviru {{ui:Umetni iz}} odaberite blok s popisa (upišite u {{ui:Filtriraj blokove}} da ga pronađete) ili ostavite {{ui:Cijeli crtež}}. Kliknite {{ui:Umetni}}.
5. Kliknite gdje ide, i ispunite atribute koje traži.

Cijeli crtež ulazi kao jedan blok nazvan po datoteci. Blokovi unutar odabranog bloka dolaze također. Slojevi koje koriste dodaju se ovom crtežu.

Ako je drugi crtež u drugim jedinicama (recimo inči i milimetri), CadCraft prilagođava referencu i to javlja u povijesti.

### Kad je naziv već u upotrebi

Ako ovaj crtež već ima blok s istim nazivom, CadCraft pita:

- {{ui:Zadrži postojeće}} koristi blok ovog crteža s tim nazivom.
- {{ui:Preimenuj}} uvodi novi kao `Name (2)`.

Cijelo umetanje je jedan korak: {{key:Mod+Z}} uklanja referencu i kopirane definicije.

## Otvaranje knjižnice

Kliknite {{ui:Knjižnica…}} na ploči {{ui:Blokovi}}, ili {{ui:Knjižnica}} u grupi Blokovi, ili upišite `LIB`. Na upitu `INSERT` također je otvara `L`.

Knjižnica ima četiri izvora, kao kartice:

- {{ui:Knjižnica}}: CadCraft knjižnica. Tražite po nazivu, proizvođaču ili modelu i filtrirajte po kategoriji.
- {{ui:Datoteke…}}: datoteka stavke (`item.json`) iz bilo koje knjižnice, ili crtež, proračunska tablica ili 3D model od kojih se prave stavke: DWG ili DXF (svaki blok postaje stavka), CSV sa stupcima naziva i veličine, ili glTF ili OBJ model. Ništa se ne učitava.
- {{ui:Standardno}}: čelični profili (kao presjeci, pročelja ili 3D elementi) i standardni dijelovi poput vijaka, matica i ležajeva, izrađeni ovdje prema objavljenim tablicama. Vidi [Postavljanje čeličnih profila i standardnih dijelova](topic:steel-and-standard-parts).
- {{ui:Drugi izvori}}: druge knjižnice koje odgovaraju isto kao Knjižnica. Upišite njihovu adresu jednom; ovaj preglednik je pamti.

Svaka kartica prikazuje pregled, naziv, proizvođača i model, licencu i verziju. Povučena stavka označena je s {{ui:Povučeno}} i razlogom; CadCraft pita prije nego što je postavite.

## Postavljanje stavke

1. Kliknite {{ui:Postavi}} na kartici.
2. Kliknite gdje ide stavka. Prvo upišite `R` da je okrenete, ili `S` da je skalirate.
3. Na `Enter Item number (CC-ITEM)` pritisnite {{key:Enter}} za sljedeći slobodan broj ili upišite svoj.

Stavka postaje blok nazvan `LIB_<name>_v<version>`, nacrtan u jedinicama ovog crteža. Ako crtež nema jedinica, stavka ulazi u milimetrima i povijest to kaže; prvo postavite {{ui:Jedinice}} na desnoj ploči.

Podaci idu zajedno kao nevidljivi atributi: ID i verzija stavke, licenca i navođenje autora, proizvođač, model, kategorija i veličine. Vidi [Atributi bloka](topic:attributes).

## Stavke na vašem jeziku

Stavka može imati naziv i opis na drugim jezicima. Kad ih ima na jeziku na koji je postavljen CadCraft (Postavke › Općenito › Jezik), kartica i naziv stavke postavljenog bloka koriste njih. Sam blok zadržava naziv izveden iz vlastitog naziva stavke, pa crtež ima jedan blok po stavci, bez obzira na to kojim jezikom je postavljena.

## Provjera ažuriranja

1. Otvorite knjižnicu.
2. Kliknite {{ui:Provjeri ažuriranja}}.

Svaka stavka knjižnice u crtežu navedena je sa svojim brojevima i je li ažurna, ima li noviju verziju (i što se promijenilo) ili je povučena. Kliknite {{ui:Ažuriraj}} u retku ili {{ui:Ažuriraj sve}}. Svaka referenca prelazi na blok nove verzije i zadržava svoj broj stavke, količinu, mjesto, kut i sloj. {{key:Mod+Z}} poništava ažuriranje.

## Navedite što ste koristili

Kliknite {{ui:Zasluge knjižnice}}. Svaka stavka navedena je sa svojim retkom navođenja autora i licencom.

- {{ui:Kopiraj navođenje autora}} kopira redak jedne stavke; {{ui:Kopiraj sve}} kopira sve retke.
- {{ui:Preuzmi CSV}} sprema popis s brojevima stavki, proizvođačima, modelima, licencama i navođenjima autora. Otvara se u bilo kojoj proračunskoj tablici.

Licencije poput CC BY traže da navedete autora gdje koristite djelo. Stavite retke na crtež, u specifikaciju ili u napomene projekta.

## Simboli i resursi

Knjižnica ima tri vrste stavki: Simbole (konvencije crtanja, 2D), Tipove (od čega se element sastoji) i Resurse (fizički predmeti). Na kartici {{ui:Knjižnica}} popis {{ui:Vrsta stavke}} prikazuje Simbole i resurse zajedno, samo Simbole ili samo Resurse. Tipovi su ono od čega se sastoji BimCraft projekt, pa ih CadCraft ne prikazuje.

## Prijava u knjižnicu

Kliknite {{ui:Prijava u knjižnicu}}. Otvara se mali prozor na stranici; kad se prijavite, CadCraft može prikazati stavke vašeg tima i zabilježiti što postavljate, pa ćete znati kad se stavka koju ste koristili promijeni. Prijava vrijedi za ovu karticu preglednika. Opozovite je bilo kad na stranici sigurnosti vašeg računa.

## Česte pogreške

- **"Izrada stavki iz IFC tipova je u BimCraftu."** IFC i datoteke obitelji čitaju se u aplikaciji BimCraft. Izradite stavku tamo ili na Knjižnici, pa ovdje koristite njezin `item.json`.
- **"Knjižnici nije moguće pristupiti."** Niste na mreži ili je knjižnica nedostupna. Stavke koje su već u crtežu nisu pogođene.
- **Stavka je prevelika ili premala.** Jedinice crteža su krive ili nisu postavljene. Poništite, postavite {{ui:Jedinice}} i ponovno postavite stavku.

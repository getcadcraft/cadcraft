---
title: Umetanje iz datoteke ili biblioteke
summary: Uvezite blok ili cijeli crtež iz drugog DWG ili DXF, te postavite stavke iz Biblioteke, datoteke ili druge biblioteke, sa njihovim zaslugama i ažuriranjima.
keywords: umetni, datoteka, biblioteka, librarycraft, stavka, oprema, blok iz drugog crteža, wblock, centar dizajna, zasluge, atribucija, licenca, ažuriranje, izvor, item.json
from: 316188d2
---

## Umetanje bloka iz drugog crteža

1. Upišite `I` i pritisnite {{key:Enter}}, ili kliknite {{ui:Umetni}} u grupi Blokovi.
2. Kod `Unesi naziv bloka ili [Datoteka (F)/Biblioteka (L)]` upišite `F` i pritisnite {{key:Enter}}.
3. Odaberite DWG ili DXF na ovom računaru. Čita se ovdje; ne otvara se, i ništa se ne šalje.
4. U dijalogu {{ui:Umetni iz}} odaberite blok sa spiska (upišite u {{ui:Filtriraj blokove}} da ga nađete), ili ostavite {{ui:Cijeli crtež}}. Kliknite {{ui:Umetni}}.
5. Kliknite gdje ide, i popunite sve atribute koje traži.

Cijeli crtež ulazi kao jedan blok nazvan po datoteci. Blokovi unutar bloka koji ste odabrali takođe ulaze. Slojevi koje koriste dodaju se ovom crtežu.

Ako je drugi crtež u drugim jedinicama (recimo inči i milimetri), CadCraft skalira referencu da odgovara i to kaže u historiji.

### Kad je naziv već korišten

Ako ovaj crtež već ima blok sa istim nazivom, CadCraft pita:

- {{ui:Zadrži postojeće}} koristi blok ovog crteža s tim nazivom.
- {{ui:Preimenuj}} donosi novi kao `Naziv (2)`.

Cijelo umetanje je jedan korak: {{key:Mod+Z}} uklanja referencu i kopirane definicije.

## Otvaranje biblioteke

Kliknite {{ui:Biblioteka…}} u panelu {{ui:Blokovi}}, ili {{ui:Biblioteka}} u grupi Blokovi, ili upišite `LIB`. Na upitu `INSERT`, `L` takođe je otvara.

Biblioteka ima četiri izvora, kao kartice:

- {{ui:Biblioteka}}: CadCraft biblioteka. Tražite po nazivu, proizvođaču ili modelu, i filtrirajte po kategoriji.
- {{ui:Datoteke…}}: datoteka stavke (`item.json`) iz bilo koje biblioteke, ili crtež, tabela ili 3D model da napravite stavke: DWG ili DXF (svaki blok postaje stavka), CSV sa kolonama naziv i veličina, ili glTF ili OBJ model. Ništa se ne šalje.
- {{ui:Standardni}}: čelični profili (kao presjeci, izgledi ili 3D elementi) i standardni dijelovi kao vijci, matice i ležajevi, napravljeni ovdje iz objavljenih tabela. Vidi [Postavljanje čeličnih profila i standardnih dijelova](topic:steel-and-standard-parts).
- {{ui:Ostali izvori}}: druge biblioteke koje odgovaraju na isti način kao Biblioteka. Dodajte njihovu adresu jednom; ovaj pregledač je pamti.

Svaka kartica prikazuje pregled, naziv, proizvođača i model, licencu i verziju. Povučena stavka je označena sa {{ui:Povučeno}} i razlogom; CadCraft pita prije nego što postavite jednu.

## Postavljanje stavke

1. Kliknite {{ui:Postavi}} na kartici.
2. Kliknite gdje ide stavka. Upišite [Okreni (R)] da je okrenete, ili [Skaliraj (S)] da je skalirate.
3. Kod `Unesi broj stavke (CC-ITEM)` pritisnite {{key:Enter}} za sljedeći slobodni broj, ili upišite svoj.

Stavka postaje blok nazvan `LIB_<naziv>_v<verzija>`, nacrtan u jedinicama ovog crteža. Ako crtež nema jedinica, stavka ulazi u milimetrima i historija to kaže; prvo postavite {{ui:Jedinice}} u desnom panelu.

Podaci stavke putuju kao nevidljivi atributi: id i verzija stavke, licenca i atribucija, proizvođač, model, kategorija i veličine. Vidi [Atributi bloka](topic:attributes).

## Stavke na vašem jeziku

Stavka može nositi svoj naziv i opis na drugim jezicima. Kad ih ima na jeziku na koji je CadCraft postavljen (Postavke › Opšte › Jezik), kartica i naziv stavke postavljenog bloka koriste njih. Sam blok zadržava naziv napravljen od vlastitog naziva stavke, pa crtež ima jedan blok po stavci, bez obzira na to kojim jezikom je postavljena.

## Provjera ažuriranja

1. Otvorite biblioteku.
2. Kliknite {{ui:Provjeri ažuriranja}}.

Svaka stavka biblioteke u crtežu navodi se sa svojim brojevima stavki i da li je ažurna, ima noviju verziju (i šta je promijenjeno), ili je povučena. Kliknite {{ui:Ažuriraj}} na redu, ili {{ui:Ažuriraj sve}}. Svaka referenca prelazi na blok nove verzije i zadržava svoj broj stavke, količinu, mjesto, ugao i sloj. {{key:Mod+Z}} poništava ažuriranje.

## Navođenje korištenih izvora

Kliknite {{ui:Zasluge biblioteke}}. Svaka stavka je navedena sa svojim redom atribucije i licencom.

- {{ui:Kopiraj atribuciju}} kopira red jedne stavke; {{ui:Kopiraj sve}} kopira svaki red.
- {{ui:Preuzmi CSV}} snima spisak sa brojevima stavki, proizvođačima, modelima, licencama i atribucijama. Otvara se u bilo kojoj tabeli.

Licence kao što je CC BY traže da navedete autora gdje koristite djelo. Stavite redove na crtež, u specifikaciju ili u bilješke projekta.

## Simboli i resursi

Biblioteka ima tri vrste stavki: Simboli (konvencije crtanja, 2D), Tipovi (od čega je element napravljen) i Resursi (fizički objekti). Na kartici {{ui:Biblioteka}}, spisak {{ui:Vrsta stavke}} prikazuje Simbole i resurse zajedno, samo Simbole, ili samo Resurse. Tipovi su ono od čega se gradi BimCraft projekat, pa ih CadCraft ne navodi.

## Prijava u biblioteku

Kliknite {{ui:Prijavi se u biblioteku}}. Otvara se mali prozor na sajtu; kad se tamo prijavite, CadCraft može prikazati stavke vašeg tima i registrovati ono što postavite, pa ćete znati kad se stavka koju ste koristili promijeni. Prijava traje za ovu karticu pregledača. Opozovite je bilo kad sa stranice sigurnosti svog računa.

## Česte greške

- **"Pravljenje stavki iz IFC tipova je u BimCraftu."** IFC i datoteke porodica čitaju se u aplikaciji BimCraft. Napravite stavku tamo ili u Biblioteci, pa koristite njen `item.json` ovdje.
- **"Biblioteka nije dostupna."** Van ste mreže, ili je biblioteka pala. Stavke koje su već u crtežu nisu pogođene.
- **Stavka je previše velika ili premala.** Jedinice crteža su pogrešne ili nisu postavljene. Poništite, postavite {{ui:Jedinice}} i postavite stavku ponovo.

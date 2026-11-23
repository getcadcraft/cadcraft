---
title: Umetanje iz datoteke ili biblioteke
summary: Uvezite blok ili cijeli crtež iz druge DWG ili DXF datoteke, i postavite stavke iz Biblioteke, datoteke ili druge biblioteke, sa njihovim zaslugama i ažuriranjima.
keywords: umetni, datoteka, biblioteka, librarycraft, stavka, oprema, blok iz drugog crteža, wblock, centar za dizajn, zasluge, atribucija, licenca, ažuriranje, izvor, item.json
from: f6e4e452
---

## Umetanje bloka iz drugog crteža

1. Ukucajte `I` i pritisnite {{key:Enter}}, ili kliknite {{ui:Umetni}} u grupi Blokovi.
2. Komandna linija na dnu prozora pita `Enter block name or [File/Library]`. Ukucajte `F` i pritisnite {{key:Enter}}.
3. Izaberite DWG ili DXF na ovom računaru. Čita se ovdje; ne otvara se, i ništa se ne šalje.
4. U dijalogu {{ui:Umetni iz}} izaberite blok sa spiska (ukucajte u {{ui:Filtriraj blokove}} da ga nađete), ili zadržite {{ui:Cijeli crtež}}. Kliknite {{ui:Umetni}}.
5. Kliknite gdje ide, i popunite sve atribute koje traži.

Možete početi i iz panela {{ui:Blokovi}}: ukucajte `F` u njegovo polje {{ui:Filtriraj blokove}} i pritisnite {{key:Enter}}, ili ukucajte nešto što nijedan blok ne odgovara i kliknite {{ui:Iz datoteke…}}. `L` i {{ui:Biblioteka…}} otvaraju biblioteku na isti način. Prije verzije 0.10.1 slovo ukucano u {{ui:Filtriraj blokove}} pretraživalo je samo blokove ovog crteža i odgovaralo "Nijedan blok ne odgovara filteru."

Da biste imali crtež vlastitih blokova pri ruci, kliknite {{ui:Dodaj crtež}} pod {{ui:Biblioteke}} u panelu {{ui:Blokovi}} i izaberite DWG ili DXF. Njegovi blokovi su navedeni sa slikama; kliknite jedan da ga postavite.

Cijeli crtež ulazi kao jedan blok, nazvan po datoteci. Dolaze i blokovi unutar bloka koji ste izabrali. Slojevi koje koriste dodaju se ovom crtežu.

Ako je drugi crtež u drugim jedinicama (na primjer inči i milimetri), CadCraft skalira referencu da odgovara i to kaže u historiji.

### Kad je naziv već u upotrebi

Ako ovaj crtež već ima blok istog naziva, CadCraft pita:

- {{ui:Zadrži postojeće}} koristi blok ovog crteža s tim nazivom.
- {{ui:Preimenuj}} uvodi novi kao `Name (2)`.

Cijelo umetanje je jedan korak: {{key:Mod+Z}} ponovo uklanja referencu i kopirane definicije.

## Otvaranje biblioteke

Kliknite {{ui:Biblioteka…}} u panelu {{ui:Blokovi}}, ili {{ui:Biblioteka}} u grupi Blokovi, ili ukucajte `LIB`. Kod upita `INSERT`, `L` takođe je otvara.

Biblioteka ima četiri izvora, kao kartice:

- {{ui:Biblioteka}}: CadCraft biblioteka. Pretražujte po nazivu, proizvođaču ili modelu, i filtrirajte po kategoriji.
- {{ui:Datoteke…}}: datoteka stavke (`item.json`) iz bilo koje biblioteke, ili crtež, tabela ili 3D model da napravite stavke: DWG ili DXF (svaki blok postaje stavka), CSV sa kolonama naziva i veličine, ili glTF ili OBJ model. Ništa se ne šalje.
- {{ui:Standardni}}: čelični profili (kao presjeci, osnove ili 3D elementi) i standardni dijelovi kao vijci, matice i ležajevi, napravljeni ovdje iz objavljenih tabela. Pogledajte [Postavljanje čeličnih profila i standardnih dijelova](topic:steel-and-standard-parts).
- {{ui:Ostali izvori}}: druge biblioteke koje odgovaraju na isti način kao Biblioteka. Jednom dodajte njihovu adresu; ovaj pregledač je pamti.

Svaka kartica prikazuje pregled, naziv, proizvođača i model, licencu i verziju. Povučena stavka označena je sa {{ui:Povučeno}} i razlogom; CadCraft pita prije nego što je postavite.

## Postavljanje stavke

1. Kliknite {{ui:Postavi}} na kartici.
2. Kliknite gdje stavka ide. Ukucajte `R` prvo da je okrenete, ili `S` da je skalirate.
3. Kod `Enter Item number (CC-ITEM)` pritisnite {{key:Enter}} za sljedeći slobodan broj, ili ukucajte svoj.

Stavka postaje blok nazvan `LIB_<name>_v<version>`, nacrtan u jedinicama ovog crteža. Ako crtež nema jedinice, stavka ulazi u milimetrima i historija to kaže; prvo postavite {{ui:Jedinice}} u desnom panelu.

Njeni podaci idu uz nju kao nevidljivi atributi: ID i verzija stavke, licenca i atribucija, proizvođač, model, kategorija i veličine. Pogledajte [Atributi bloka](topic:attributes).

## Stavke na vašem jeziku

Stavka može nositi naziv i opis na drugim jezicima. Kad ih ima na jeziku na koji je CadCraft postavljen (Postavke › Opšte › Jezik), kartica i naziv stavke postavljenog bloka koriste njih. Sam blok zadržava naziv napravljen od naziva stavke, pa crtež ima jedan blok po stavci, bez obzira na to kojim jezikom je postavljena.

## Provjera ažuriranja

1. Otvorite biblioteku.
2. Kliknite {{ui:Provjeri ažuriranja}}.

Svaka stavka biblioteke u crtežu navedena je sa svojim brojevima stavki i da li je ažurna, ima noviju verziju (i šta je promijenjeno), ili je povučena. Kliknite {{ui:Ažuriraj}} u redu, ili {{ui:Ažuriraj sve}}. Svaka referenca prelazi na blok nove verzije i zadržava svoj broj stavke, količinu, mjesto, ugao i sloj. {{key:Mod+Z}} poništava ažuriranje.

## Navođenje zasluga za ono što ste koristili

Kliknite {{ui:Zasluge biblioteke}}. Svaka stavka je navedena sa svojom linijom atribucije i licencom.

- {{ui:Kopiraj atribuciju}} kopira liniju jedne stavke; {{ui:Kopiraj sve}} kopira svaku liniju.
- {{ui:Preuzmi CSV}} čuva spisak sa brojevima stavki, proizvođačima, modelima, licencama i atribucijama. Otvara se u bilo kojoj tabličnoj aplikaciji.

Licence kao CC BY traže da navedete autora tamo gdje koristite djelo. Stavite linije na crtež, u specifikaciju ili u bilješke projekta.

## Simboli i resursi

Biblioteka ima tri vrste stavki: Simboli (konvencije crtanja, 2D), Tipovi (od čega je element napravljen) i Resursi (fizički objekti). Na kartici {{ui:Biblioteka}}, spisak {{ui:Vrsta stavke}} prikazuje Simbole i resurse zajedno, samo Simbole ili samo Resurse. Tipovi su ono od čega se sastoji projekat BimCraft, pa ih CadCraft ne navodi.

## Prijava u biblioteku

Kliknite {{ui:Prijavi se u biblioteku}}. Otvara se mali prozor na sajtu; kad se tamo prijavite, CadCraft može prikazati stavke vašeg tima i evidentirati ono što postavite, pa znate kad se stavka koju ste koristili promijeni. Prijava traje za ovu karticu pregledača. Opozovite je bilo kada sa stranice sigurnosti vašeg računa.

## Čuvajte vlastite objekte u panelu Moji objekti

{{ui:Moji objekti}} je privatni spisak u Biblioteci koji samo vi vidite. Nije u javnoj biblioteci, nije u pretrazi i ne prikazuje se vašem timu, i prati vaš račun na svakom računaru gdje se prijavite u biblioteku.

1. U panelu Biblioteka kliknite {{ui:Datoteke…}} i pročitajte datoteku.
2. Na stavci koju želite ponovo, kliknite {{ui:Spasi u moje objekte}}.
3. Kasnije kliknite {{ui:Moji objekti}} i kliknite {{ui:Postavi}}. Postavlja se kao svaka stavka biblioteke, i {{ui:Provjeri ažuriranja}} je obuhvata.
4. {{ui:Ukloni iz mojih objekata}} uklanja je sa spiska. Kopije već postavljene u crtežima ostaju.

Morate biti prijavljeni u biblioteku. Čitanje datoteke ništa ne šalje; čuvanje stavke šalje samo tu jednu stavku na vaš račun.

:::note
Moji objekti je u testiranju i možda još nije otvoren za vaš račun. Ako se prikaže poruka "Moji objekti još nije otvoren za ovaj račun", i dalje možete postavljati stavke iz svojih datoteka pomoću {{ui:Datoteke…}}.
:::

## Česte greške

- **Pravljenje stavki iz IFC tipova je u programu BimCraft.** IFC i datoteke porodica čita aplikacija BimCraft. Napravite stavku tamo ili u Biblioteci, pa koristite njen `item.json` ovdje.
- **Biblioteka nije dostupna.** Niste na mreži, ili je biblioteka van funkcije. Stavke koje su već u crtežu nisu pogođene.
- **Stavka je prevelika ili premala.** Jedinice crteža su pogrešne ili nisu postavljene. Poništite, postavite {{ui:Jedinice}} i ponovo postavite stavku.

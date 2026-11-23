---
title: Umetanje iz datoteke ili biblioteke
summary: Uvezite blok ili ceo crtež iz druge DWG ili DXF datoteke, i postavite stavke iz Biblioteke, datoteke ili druge biblioteke, sa njihovim zaslugama i ažuriranjima.
keywords: umetni, datoteka, biblioteka, librarycraft, stavka, oprema, blok iz drugog crteža, wblock, design center, zasluge, navod autora, licenca, ažuriranje, izvor, item.json
from: f6e4e452
---

## Umetanje bloka iz drugog crteža

1. Ukucajte `I` i pritisnite {{key:Enter}}, ili kliknite {{ui:Umetni}} u grupi Blokovi.
2. Komandna linija pri dnu prozora pita `Enter block name or [File/Library]`. Ukucajte `F` i pritisnite {{key:Enter}}.
3. Izaberite DWG ili DXF na ovom računaru. Čita se ovde; ne otvara se, i ništa se ne šalje.
4. U dijalogu {{ui:Umetni iz}} izaberite blok sa spiska (ukucajte u {{ui:Filtriraj blokove}} da ga nađete), ili ostavite {{ui:Ceo crtež}}. Kliknite {{ui:Umetni}}.
5. Kliknite gde ide, pa popunite atribute koje traži.

Možete krenuti i iz panela {{ui:Blokovi}}: ukucajte `F` u njegovo polje {{ui:Filtriraj blokove}} i pritisnite {{key:Enter}}, ili ukucajte nešto što nijedan blok ne sadrži i kliknite {{ui:Iz datoteke…}}. `L` i {{ui:Biblioteka…}} otvaraju biblioteku na isti način. Pre verzije 0.10.1, slovo ukucano u {{ui:Filtriraj blokove}} pretraživalo je samo blokove ovog crteža i odgovaralo je porukom „Nijedan blok ne odgovara filteru.“

Da biste imali crtež sopstvenih blokova pri ruci, kliknite {{ui:Dodaj crtež}} pod {{ui:Biblioteke}} u panelu {{ui:Blokovi}} i izaberite DWG ili DXF. Njegovi blokovi se prikazuju sa slikama; kliknite jedan da ga postavite.

Ceo crtež ulazi kao jedan blok, nazvan po datoteci. Blokovi unutar izabranog bloka ulaze takođe. Slojevi koje koriste dodaju se ovom crtežu.

Ako je drugi crtež u drugim jedinicama (recimo inči i milimetri), CadCraft razmerava referencu da se uklopi i to kaže u istoriji.

### Kada je naziv već u upotrebi

Ako ovaj crtež već ima blok istog naziva, CadCraft pita:

- {{ui:Zadrži postojeće}} koristi blok ovog crteža sa tim nazivom.
- {{ui:Preimenuj}} uvodi novi kao `Name (2)`.

Celo umetanje je jedan korak: {{key:Mod+Z}} uklanja referencu i kopirane definicije.

## Otvaranje biblioteke

Kliknite {{ui:Biblioteka…}} u panelu {{ui:Blokovi}}, ili {{ui:Biblioteka}} u grupi Blokovi, ili ukucajte `LIB`. Na upitu `INSERT`, `L` takođe je otvara.

Biblioteka ima četiri izvora, kao kartice:

- {{ui:Biblioteka}}: CadCraft biblioteka. Pretražujte po nazivu, proizvođaču ili modelu, i filtrirajte po kategoriji.
- {{ui:Datoteke…}}: datoteka stavke (`item.json`) iz bilo koje biblioteke, ili crtež, tabela ili 3D model za pravljenje stavki: DWG ili DXF (svaki blok postaje stavka), CSV sa kolonama naziva i veličine, ili glTF ili OBJ model. Ništa se ne šalje.
- {{ui:Standardni}}: čelični profili (kao preseci, pogledi ili 3D elementi) i standardni delovi, kao što su zavrtnji, matice i ležajevi, napravljeni ovde iz objavljenih tabela. Vidi [Postavljanje čeličnih profila i standardnih delova](topic:steel-and-standard-parts).
- {{ui:Ostali izvori}}: druge biblioteke koje odgovaraju kao Biblioteka. Dodajte njihovu adresu jednom; ovaj pregledač je pamti.

Svaka kartica prikazuje pregled, naziv, proizvođača i model, licencu i verziju. Povučena stavka je označena sa {{ui:Povučeno}} i razlogom; CadCraft pita pre nego što postavite jednu.

## Postavljanje stavke

1. Kliknite {{ui:Postavi}} na kartici.
2. Kliknite gde ide stavka. Ukucajte `R` pre toga da je okrenete, ili `S` da je razmerite.
3. Na upitu `Enter Item number (CC-ITEM)` pritisnite {{key:Enter}} za sledeći slobodan broj, ili ukucajte svoj.

Stavka postaje blok nazvan `LIB_<name>_v<version>`, nacrtan u jedinicama ovog crteža. Ako crtež nema jedinice, stavka ulazi u milimetrima i istorija to kaže; prvo postavite {{ui:Jedinice}} u desnom panelu.

Njeni podaci dolaze uz nju kao nevidljivi atributi: identifikator i verzija stavke, licenca i navod autora, proizvođač, model, kategorija i veličine. Vidi [Atributi bloka](topic:attributes).

## Stavke na vašem jeziku

Stavka može nositi svoj naziv i opis na drugim jezicima. Kada ih ima na jeziku na kome je CadCraft podešen (Podešavanja › Opšte › Jezik), kartica i naziv stavke postavljenog bloka koriste te. Sam blok zadržava naziv napravljen od sopstvenog naziva stavke, pa crtež ima jedan blok po stavci, bez obzira na jezik kojim je postavljena.

## Provera ažuriranja

1. Otvorite biblioteku.
2. Kliknite {{ui:Proveri ažuriranja}}.

Svaka stavka biblioteke u crtežu navodi se sa svojim brojevima i da li je ažurna, ima noviju verziju (i šta je promenjeno), ili je povučena. Kliknite {{ui:Ažuriraj}} u redu, ili {{ui:Ažuriraj sve}}. Svaka referenca prelazi na blok nove verzije i zadržava svoj broj stavke, količinu, mesto, ugao i sloj. {{key:Mod+Z}} poništava ažuriranje.

## Navedite šta ste koristili

Kliknite {{ui:Zasluge biblioteke}}. Svaka stavka se navodi sa svojim redom navoda autora i licencom.

- {{ui:Kopiraj navod autora}} kopira red jedne stavke; {{ui:Kopiraj sve}} kopira svaki red.
- {{ui:Preuzmi CSV}} čuva spisak sa brojevima stavki, proizvođačima, modelima, licencama i navodima autora. Otvara se u bilo kojoj tabeli.

Licence kao što je CC BY traže da navedete autora tamo gde koristite delo. Stavite redove na crtež, u specifikaciju ili u napomene projekta.

## Simboli i resursi

Biblioteka ima tri vrste stavki: Simboli (konvencije crtanja, 2D), Tipovi (od čega se element sastoji) i Resursi (fizički objekti). Na kartici {{ui:Biblioteka}}, spisak {{ui:Vrsta stavke}} prikazuje Simbole i resurse zajedno, samo Simbole, ili samo Resurse. Tipovi su ono od čega se sastoji projekat BimCraft, pa ih CadCraft ne prikazuje.

## Prijava u biblioteku

Kliknite {{ui:Prijavi se u biblioteku}}. Otvara se mali prozor na sajtu; kada se prijavite tamo, CadCraft može da prikaže stavke vašeg tima i da evidentira ono što postavljate, pa čujete kada se stavka koju ste koristili promeni. Prijava važi za ovu karticu pregledača. Možete je opozvati u bilo kom trenutku na stranici bezbednosti vašeg naloga.

## Čuvanje sopstvenih objekata u Moji objekti

{{ui:Moji objekti}} je privatni spisak u Biblioteci koji samo vi vidite. Nije u javnoj biblioteci, nije u pretrazi i ne prikazuje se vašem timu, a prati vaš nalog na svakom računaru gde se prijavite u biblioteku.

1. U panelu Biblioteka kliknite {{ui:Datoteke…}} i pročitajte datoteku.
2. Na stavci koju želite ponovo, kliknite {{ui:Sačuvaj u mojim objektima}}.
3. Kasnije kliknite {{ui:Moji objekti}} i kliknite {{ui:Postavi}}. Postavlja se kao svaka stavka biblioteke, a {{ui:Proveri ažuriranja}} je obuhvata.
4. {{ui:Ukloni iz mojih objekata}} je izbacuje sa spiska. Kopije koje su već postavljene u crtežima ostaju.

Morate biti prijavljeni u biblioteku. Čitanje datoteke ništa ne šalje; čuvanje stavke šalje samo tu stavku na vaš nalog.

:::note
Funkcija Moji objekti se još testira i možda nije otvorena za vaš nalog. Ako piše „Moji objekti još nisu otvoreni za ovaj nalog“, i dalje možete da postavljate stavke iz sopstvenih datoteka preko {{ui:Datoteke…}}.
:::

## Česte greške

- **„Pravljenje stavki od IFC tipova je u BimCraft-u.“** IFC i datoteke porodica čita aplikacija BimCraft. Napravite stavku tamo ili u Biblioteci, pa koristite njen `item.json` ovde.
- **„Biblioteka nije dostupna.“** Van ste mreže, ili je biblioteka nedostupna. Stavke koje su već u crtežu nisu pogođene.
- **Stavka je preterano velika ili mala.** Jedinice crteža su pogrešne ili nisu podešene. Opozovite, podesite {{ui:Jedinice}} i postavite je ponovo.

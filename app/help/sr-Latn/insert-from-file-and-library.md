---
title: Umetanje iz datoteke ili biblioteke
summary: Uvezite blok ili ceo crtež iz drugog DWG ili DXF, i postavite stavke iz Biblioteke, datoteke ili druge biblioteke, sa njihovim navodima autora i ažuriranjima.
keywords: umetni, datoteka, biblioteka, librarycraft, stavka, oprema, blok iz drugog crteža, wblock, design center, zasluge, navod autora, licenca, ažuriranje, izvor, item.json
from: 316188d2
---

## Umetanje bloka iz drugog crteža

1. Ukucajte `I` i pritisnite {{key:Enter}}, ili kliknite {{ui:Umetni}} u grupi Blokovi.
2. Na `Enter block name or [File/Library]` ukucajte `F` i pritisnite {{key:Enter}}.
3. Izaberite DWG ili DXF na ovom računaru. Čita se ovde; ne otvara se, i ništa se ne otprema.
4. U dijalogu {{ui:Umetni iz}} izaberite blok sa spiska (ukucajte u {{ui:Filtriraj blokove}} da ga nađete), ili ostavite {{ui:Ceo crtež}}. Kliknite {{ui:Umetni}}.
5. Kliknite gde ide, i popunite atribute koje traži.

Ceo crtež se uvozi kao jedan blok nazvan po datoteci. Blokovi unutar izabranog bloka dolaze takođe. Slojevi koje koriste dodaju se ovom crtežu.

Ako je drugi crtež u drugim jedinicama (na primer inči i milimetri), CadCraft razmerava referencu da odgovara i to kaže u istoriji.

### Kada je naziv već u upotrebi

Ako ovaj crtež već ima blok istog naziva, CadCraft pita:

- {{ui:Zadrži postojeće}} koristi blok ovog crteža sa tim nazivom.
- {{ui:Preimenuj}} uvozi novi blok kao `Name (2)`.

Ceo umetak je jedan korak: {{key:Mod+Z}} ponovo uklanja referencu i kopirane definicije.

## Otvaranje biblioteke

Kliknite {{ui:Biblioteka…}} u panelu {{ui:Blokovi}}, ili {{ui:Biblioteka}} u grupi Blokovi, ili ukucajte `LIB`. Na upitu `INSERT`, i `L` je otvara.

Biblioteka ima četiri izvora, kao kartice:

- {{ui:Biblioteka}}: CadCraft biblioteka. Pretražite po nazivu, proizvođaču ili modelu, i filtrirajte po kategoriji.
- {{ui:Datoteke…}}: datoteka stavke (`item.json`) iz bilo koje biblioteke, ili crtež, tabela ili 3D model za pravljenje stavki: DWG ili DXF (svaki blok postaje stavka), CSV sa kolonama naziv i veličina, ili glTF ili OBJ model. Ništa se ne otprema.
- {{ui:Standardni}}: čelični profili (kao preseci, izgledi ili 3D elementi) i standardni delovi kao što su zavrtnji, matice i ležajevi, napravljeni ovde iz objavljenih tabela. Pogledajte [Postavljanje čeličnih profila i standardnih delova](topic:steel-and-standard-parts).
- {{ui:Ostali izvori}}: druge biblioteke koje odgovaraju na isti način kao Biblioteka. Dodajte njihovu adresu jednom; ovaj pregledač je pamti.

Svaka kartica prikazuje pregled, naziv, proizvođača i model, licencu i verziju. Povučena stavka je označena sa {{ui:Povučeno}} i razlogom; CadCraft pita pre nego što postavite jednu.

## Postavljanje stavke

1. Kliknite {{ui:Postavi}} na kartici.
2. Kliknite gde ide stavka. Prvo ukucajte `R` da je okrenete, ili `S` da je razmerite.
3. Na `Enter Item number (CC-ITEM)` pritisnite {{key:Enter}} za sledeći slobodan broj, ili ukucajte svoj.

Stavka postaje blok nazvan `LIB_<name>_v<version>`, nacrtan u jedinicama ovog crteža. Ako crtež nema jedinice, stavka se postavlja u milimetrima i istorija to kaže; prvo podesite {{ui:Jedinice}} u desnom panelu.

Njeni podaci idu uz nju kao nevidljivi atributi: identifikator i verzija stavke, licenca i navod autora, proizvođač, model, kategorija i veličine. Pogledajte [Atributi bloka](topic:attributes).

## Stavke na vašem jeziku

Stavka može imati naziv i opis na drugim jezicima. Kada ih ima na jeziku na koji je CadCraft podešen (Podešavanja › Opšte › Jezik), kartica i naziv stavke postavljenog bloka koriste ih. Sam blok zadržava naziv napravljen od naziva same stavke, pa crtež ima jedan blok po stavci, na kom god jeziku je postavljena.

## Provera ažuriranja

1. Otvorite biblioteku.
2. Kliknite {{ui:Proveri ažuriranja}}.

Svaka stavka biblioteke u crtežu navodi se sa svojim brojevima stavke i da li je ažurna, ima noviju verziju (i šta je promenjeno), ili je povučena. Kliknite {{ui:Ažuriraj}} u redu, ili {{ui:Ažuriraj sve}}. Svaka referenca prelazi na blok nove verzije i zadržava svoj broj stavke, količinu, mesto, ugao i sloj. {{key:Mod+Z}} poništava ažuriranje.

## Navedite šta ste koristili

Kliknite {{ui:Zasluge biblioteke}}. Svaka stavka je navedena sa svojim redom navoda autora i licencom.

- {{ui:Kopiraj navod autora}} kopira red jedne stavke; {{ui:Kopiraj sve}} kopira svaki red.
- {{ui:Preuzmi CSV}} čuva spisak sa brojevima stavki, proizvođačima, modelima, licencama i navodima autora. Otvara se u bilo kojoj tabeli.

Licence kao što je CC BY traže da navedete autora tamo gde koristite delo. Stavite redove na crtež, u specifikaciju ili u napomene projekta.

## Simboli i sredstva

Biblioteka ima tri vrste stavki: Simboli (konvencije crteža, 2D), Tipovi (od čega se element sastoji) i Sredstva (fizički objekti). Na kartici {{ui:Biblioteka}}, spisak {{ui:Vrsta stavke}} prikazuje Simbole i sredstva zajedno, samo Simbole ili samo Sredstva. Tipovi su ono od čega se gradi BimCraft projekat, pa ih CadCraft ne navodi.

## Prijava u biblioteku

Kliknite {{ui:Prijavi se u biblioteku}}. Mali prozor se otvara na sajtu; kada se tamo prijavite, CadCraft može da prikaže stavke vašeg tima i evidentira ono što postavljate, pa čujete kada se stavka koju ste koristili promeni. Prijava traje za ovu karticu pregledača. Možete je opozvati u bilo kom trenutku sa stranice bezbednosti vašeg naloga.

## Česte greške

- **„Pravljenje stavki od IFC tipova je u BimCraft-u.“** IFC i datoteke porodica čitaju se u aplikaciji BimCraft. Napravite stavku tamo ili u Biblioteci, pa koristite njen `item.json` ovde.
- **„Biblioteka nije dostupna.“** Van ste mreže, ili je biblioteka nedostupna. Stavke koje su već u crtežu nisu pogođene.
- **Stavka je previše velika ili premala.** Jedinice crteža su pogrešne ili nisu podešene. Opozovite, podesite {{ui:Jedinice}} i postavite je ponovo.

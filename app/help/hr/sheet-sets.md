---
title: Skupovi listova
summary: Skupite listove iz mnogo crteža u jedan numerirani popis, popunite njihova zaglavlja iz skupa, objavite ih kao jedan PDF i arhivirajte skup kao zip.
keywords: skup listova, upravitelj skupa listova, ssm, sheetset, ccsheets, dst, popis listova, indeks listova, zaglavlje, polja, objavi, prebroji, arhiviraj, etransmit, transmittal, podskupovi, naslovni list, popis crteža
from: 2c855720
---

## Što ćete naučiti

Kako skupiti listove (layoutove) iz nekoliko datoteka crteža u **skup listova**, numerirati ih i naslovljavati, dati da se njihova zaglavlja automatski popune, objaviti cijeli skup kao jedan PDF i sve spakirati u jedan zip za slanje.

Skup listova živi u maloj datoteci vlastite, `<naziv>.ccsheets`, u mapi koja drži crteže. Datoteka skupa navodi listove s putanjama od te mape, pa možete premjestiti ili kopirati cijelu mapu.

:::note
Otvaranje mape za čitanje i pisanje treba Chrome ili Edge (oni mogu dopustiti stranici da radi u mapi koju odaberete) ili desktop aplikacija. Drugi preglednici otvaraju skup samo za čitanje: možete ga pogledati i objaviti, a datoteka skupa preuzima se umjesto da se sprema.
:::

## Započnite skup

1. Pronađite odjeljak {{ui:Skup listova}} na lijevoj ploči i otvorite njegov izbornik {{ui:Skup}}. Upisivanje {{cmd:SHEETSET}} (ili `SSM`) također vas tamo dovodi.
2. Odaberite {{ui:Novi skup…}}. Dajte skupu naziv i, ako želite, naziv i broj projekta.
3. Odaberite mapu koja drži crteže. Datoteka skupa sprema se tamo.

Da kasnije otvorite skup, odaberite {{ui:Otvori skup…}} i odaberite istu mapu. Ako mapa sadrži više skupova, CadCraft pita koji.

## Dodajte listove

1. Odaberite {{ui:Dodaj listove iz crteža…}} i odaberite jedan od crteža u mapi.
2. CadCraft čita taj crtež u pozadini (ne otvara se na zaslonu) i popisuje njegove listove. Označite one koje želite i kliknite {{ui:U redu}}.
3. Odaberite list i pritisnite {{key:F2}} (ili {{ui:Preimenuj i prebroji…}}) da mu dodijelite broj i naslov, kao `A-101` i `Tlocrt etaže`.

{{ui:Novi list iz predloška…}} stvara novi crtež iz lista drugog crteža (njegova zaglavlja i viewporti), nazvan prema novom listu, i dodaje ga. Skup pamti crtež koji ste koristili kao predložak.

## Složite skup

- **Podskupovi** grupiraju listove, kao Arhitektura › Tlocrti: odaberite mjesto gdje ide i odaberite {{ui:Novi podskup…}}.
- **Redoslijed**: povucite list na drugo mjesto na popisu ili na podskup da ga tamo premjestite. Tipkovnicom ga odaberite i pritisnite {{key:Alt+Up}} ili {{key:Alt+Down}}.
- **Otvorite list**: dvaput kliknite (ili pritisnite {{key:Enter}}). Njegov crtež otvara se na vlastitoj kartici, na tom listu.
- **Uklonite**: odaberite ga i pritisnite {{key:Delete}}. Sam crtež se ne mijenja.
- **Poništi**: {{ui:Poništi promjenu skupa}} i {{ui:Ponovi promjenu skupa}} prolaze kroz ono što ste promijenili u skupu.
- **Prebrojite**: {{ui:Prebroji listove…}} broji svaki list, ili listove jednog podskupa, po redoslijedu na popisu: prefiks, početak i korak (`A-` i `101` daju A-101, A-102 …).

Svaka promjena odmah se sprema u datoteku skupa.

## Brojite listove prema njihovim poljima

Umjesto ručnog numeriranja listova, neka pravilo gradi svaki broj iz polja lista, pa list koji se premjesti na drugu etažu ili disciplinu dobije novi broj sam od sebe.

1. Dajte svakom listu njegova polja: odaberite ga, kliknite {{ui:Preimenuj…}} i u {{ui:Polja ovog lista}} upišite jedno po retku, na primjer `DISCIPLINE = A` i `LEVEL = 1`. Polje koje dijeli cijeli skup (recimo `DISCIPLINE = A`) može ići u {{ui:Svojstva…}} skupa.
2. Otvorite izbornik ploče i kliknite {{ui:Pravilo numeriranja…}}.
3. Upišite pravilo, na primjer `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` broji naprijed među listovima čija ostala polja glase isto, pa etaža 1 dobija A-101, A-102, a etaža 2 počinje ispočetka od A-201. `{SEQ:2}` ispisuje dvije znamenke; `{SUBSET}` je naziv podskupa u kojem je list.
4. Odaberite što se događa kad se polje promijeni: {{ui:Ponovno numeriraj listove}} održava brojeve prateći pravilo nakon svake promjene; drugi izbor broji ih jednom, odmah.

Pravilo se sprema u datoteku skupa. Dok se listovi sami prebrojavaju, mijenjajte njihova polja, a ne njihov broj.

## Popunite zaglavlja iz skupa

Zaglavlje dobija svoj tekst iz skupa kad su njegovi atributi označeni nazivom polja:

| Oznaka | Što prikazuje |
|---|---|
| `SHEETNUMBER` (ili `SHEET_NO`, `DWG_NO`) | Broj lista |
| `SHEETTITLE` (ili `TITLE`, `SHEET_TITLE`) | Naslov lista |
| `SHEETDESC` | Opis lista |
| `PROJECTNAME` (ili `PROJECT`) | Naziv projekta |
| `PROJECTNUMBER` (ili `PROJECT_NO`, `JOB_NO`) | Broj projekta |
| `SHEETSETNAME` | Naziv skupa |
| `SHEETINDEX`, `SHEETCOUNT` | „3 od 12“, i 12 |
| Vaša vlastita, kao `CLIENT` | Što ste za nju upisali u {{ui:Postavi polja…}} |

{{ui:Postavi polja…}} sadrži naziv i broj projekta te vaša vlastita polja, jedno po retku, kao `NAZIV = vrijednost`.

{{ui:Ažuriraj crteže}} upisuje brojeve, naslove i polja u zaglavlja svakog crteža u skupu i preimenuje karticu layouta svakog lista kako skup kaže (zadano broj i naslov, kao `A-101 Tlocrt etaže`; {{ui:Postavi polja…}} › {{ui:Nazivi kartica layouta}} to mijenja). Svaki crtež sprema se na mjestu, u svom formatu i verziji. Nakon što prebrojite ili preimenujete listove, pokrenite to ponovno i kartice i zaglavlja slijede.

## Popis listova na naslovnom listu

Odaberite naslovni list na popisu i odaberite {{ui:Stavi popis listova na ovaj list}}. Tablica svih listova (broj i naslov, pod svojim podskupom) stavlja se u gornji lijevi kut lista. {{ui:Ažuriraj crteže}} i {{ui:Objavi u PDF}} održavaju je ažurnom. To je jedan blok, `CC_SHEETLIST`: pomičite ga kao svaku referencu bloka.

## Objavite skup

{{ui:Objavi u PDF}} stvara jedan PDF sa stranicom po listu, redom skupa, na papirnoj veličini svakog lista, sa zabilješkom za svaki list („A-101 — Tlocrt etaže“). Kad je odabran podskup, CadCraft pita želite li objaviti samo taj podskup. Zaglavlja u PDF-u popunjena su iz skupa čak i prije nego što ažurirate crteže; sami crteži se objavljivanjem ne mijenjaju. PDF se preuzima.

{{ui:Objavi u DWG…}} zapisuje svaki list kao vlastiti DWG (DWG 2018): model i taj jedan list, sa zaglavljem popunjenim iz skupa, nazvan po svom broju i naslovu (`A-101 Level 1 floor plan.dwg`). Odaberite {{ui:DWG}}, ili {{ui:DWG + PDF}} za PDF skupa pored njih. `publish.json` popisuje svaku datoteku s veličinom i SHA-256. Kad se mapa skupa može pisati (CadCraft Studio, ili mapa koju ste odabrali u pregledniku), datoteke idu u mapu `<set name> - published`; inače se preuzimaju kao jedan zip. [Nadjačavanja klasa](topic:viewport-overrides) za viewporte dolaze uz svaki DWG.

## Arhivirajte skup

{{ui:Arhiviraj kao zip}} pakira datoteku skupa, svaki crtež koji koristi i ono na što ti crteži upućuju (povezane crteže, njihove povezane crteže i slike), zadržavajući njihove mape, plus `Transmittal.txt` koji popisuje svaku datoteku. Veza koja nije u mapi skupa navodi se tamo kao nedostajuća. Veze se pronalaze po putanji iz crteža, zatim po nazivu datoteke bilo gdje u mapi.

## Datoteka skupa

Datoteka `.ccsheets` je JSON koju možete čitati u bilo kojem uređivaču teksta:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Putanje su relativne prema mapi skupa, s `/` između mapa. CadCraft provjerava datoteku pri otvaranju: apsolutna putanja, list bez datoteke ili layouta, ili tekst koji nije čist izostavljaju se, i povijest to kaže.

## Rješavanje problema

| Što vidite | Zašto | Što učiniti |
|---|---|---|
| „Ova mapa je ovdje samo za čitanje“ | Preglednik ne može pisati u toj mapi | Koristite Chrome ili Edge ili desktop aplikaciju; u međuvremenu {{ui:Preuzmi datoteku skupa}} čuva vaše promjene |
| List je izostavljen iz PDF-a: „nema layout pod nazivom …“ | Layout lista je preimenovan ili uklonjen u crtežu | Otvorite crtež i provjerite njegove kartice; uklonite list i ponovno ga dodajte |
| Zaglavlje ostaje prazno | Njegovi atributi imaju druge oznake | Preimenujte oznake atributa u gore navedene nazive polja (BEDIT) |
| „već ima layout pod nazivom … pa kartica nije preimenovana“ | Dva lista jednog crteža dobila bi isti naziv kartice | Dajte jednom od njih drugi broj ili naslov |

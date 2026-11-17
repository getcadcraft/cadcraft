---
title: Setovi listova
summary: Spoji listove iz mnogo crteža u jedan numerisani spisak, popuni njihove blokove naslova iz seta, objavi ih kao jedan PDF i arhiviraj set kao zip.
keywords: set listova, menadžer setova listova, ssm, sheetset, ccsheets, dst, spisak listova, indeks listova, blok naslova, polja, objavi, ponovo numeriši, arhiviraj, etransmit, transmital, podskupovi, naslovni list, spisak crteža
from: 2c855720
---

## Šta ćete naučiti

Kako sakupiti listove (layout-e) iz više datoteka crteža u **set listova**, numerisati ih i dati im naslove, popuniti njihove blokove naslova umjesto vas, objaviti cijeli set kao jedan PDF i spakovati sve u jedan zip za slanje.

Set listova živi u maloj datoteci vlastite, `<name>.ccsheets`, u fascikli koja drži crteže. Datoteka seta navodi listove s putanjama iz te fascikle, pa možete premjestiti ili kopirati cijelu fasciklu.

:::note
Za otvaranje fascikle radi čitanja i pisanja potrebni su Chrome ili Edge (oni mogu dozvoliti stranici da radi u fascikli koju izaberete), ili desktop aplikacija. Drugi pregledači otvaraju set samo za čitanje: možete ga pogledati i objaviti, a datoteka seta se preuzima umjesto da se snimi.
:::

## Započnite set

1. Pronađite odjeljak {{ui:Set listova}} u lijevom panelu i otvorite njegov meni {{ui:Set}}. Upisivanje {{cmd:SHEETSET}} (ili `SSM`) vas također dovodi tamo.
2. Izaberite {{ui:Novi set…}}. Dajte setu naziv i, ako želite, naziv i broj projekta.
3. Izaberite fasciklu koja drži crteže. Datoteka seta se čuva tamo.

Da kasnije otvorite set, izaberite {{ui:Otvori set…}} i izaberite istu fasciklu. Ako fascikla sadrži više setova, CadCraft pita koji.

## Dodajte listove

1. Izaberite {{ui:Dodaj listove iz crteža…}} i izaberite jedan od crteža u fascikli.
2. CadCraft čita taj crtež u pozadini (ne otvara se na ekranu) i navodi njegove listove. Označite one koje želite i kliknite {{ui:U redu}}.
3. Izaberite list i pritisnite {{key:F2}} (ili {{ui:Preimenuj i ponovo numeriši…}}) da mu date broj i naslov, kao `A-101` i `Plan sprata`.

{{ui:Novi list iz šablona…}} pravi novi crtež iz lista drugog crteža (njegov blok naslova i prozori pregleda), nazvan po novom listu, i dodaje ga. Set pamti crtež koji ste koristili kao šablon.

## Uredite set

- **Podskupovi** grupišu listove, kao Arhitektura › Planovi: izaberite gdje ide i izaberite {{ui:Novi podskup…}}.
- **Redoslijed**: prevucite list na drugo mjesto na spisku, ili na podskup da ga tamo premjestite. Tastaturom: izaberite ga i pritisnite {{key:Alt+Up}} ili {{key:Alt+Down}}.
- **Otvorite list**: dvaput kliknite na njega (ili pritisnite {{key:Enter}}). Njegov crtež se otvara u vlastitoj kartici, na tom listu.
- **Uklonite**: izaberite ga i pritisnite {{key:Delete}}. Sam crtež se ne mijenja.
- **Poništi**: {{ui:Poništi promjenu seta}} i {{ui:Ponovi promjenu seta}} prolaze kroz ono što ste promijenili u setu.
- **Ponovo numeriši**: {{ui:Ponovo numeriši listove…}} numeriše svaki list, ili listove jednog podskupa, po redu spiska: prefiks, početak i korak (`A-` i `101` daju A-101, A-102 …).

Svaka promjena se odmah zapisuje u datoteku seta.

## Numerišite listove prema njihovim poljima

Umjesto da listove numerišete ručno, neka pravilo gradi svaki broj iz polja lista, pa list koji pređe na drugi nivo ili disciplinu sam dobija novi broj.

1. Dajte svakom listu njegova polja: izaberite ga, kliknite {{ui:Preimenuj…}} i u {{ui:Polja ovog lista}} upišite po jedno u red, na primjer `DISCIPLINE = A` i `LEVEL = 1`. Polje koje dijeli cijeli set (recimo `DISCIPLINE = A`) može ići u {{ui:Svojstva…}} seta umjesto toga.
2. Otvorite meni panela i kliknite {{ui:Pravilo numeriranja…}}.
3. Napišite pravilo, na primjer `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` broji naviše među listovima čija ostala polja glase isto, pa nivo 1 dobija A-101, A-102, a nivo 2 počinje ponovo od A-201. `{SEQ:2}` ispisuje to sa dvije cifre; `{SUBSET}` je naziv podskupa u kojem je list.
4. Izaberite šta se dešava kada se polje promijeni: {{ui:Ponovo numeriraj listove}} održava brojeve prema pravilu nakon svake promjene; drugi izbor numeriše ih jednom, odmah.

Pravilo se čuva u datoteci seta. Dok ono samo renumeriše, mijenjajte polja lista, a ne njegov broj.

## Popunite blokove naslova iz seta

Blok naslova dobija svoj tekst iz seta kada su njegovi atributi označeni nazivom polja:

| Oznaka | Šta prikazuje |
|---|---|
| `SHEETNUMBER` (ili `SHEET_NO`, `DWG_NO`) | Broj lista |
| `SHEETTITLE` (ili `TITLE`, `SHEET_TITLE`) | Naslov lista |
| `SHEETDESC` | Opis lista |
| `PROJECTNAME` (ili `PROJECT`) | Naziv projekta |
| `PROJECTNUMBER` (ili `PROJECT_NO`, `JOB_NO`) | Broj projekta |
| `SHEETSETNAME` | Naziv seta |
| `SHEETINDEX`, `SHEETCOUNT` | "3 od 12", i 12 |
| Vaše vlastite, kao `CLIENT` | Ono što ste upisali za njih u {{ui:Postavi polja…}} |

{{ui:Postavi polja…}} sadrži naziv i broj projekta i vaša vlastita polja, po jedno u redu kao `NAME = value`.

{{ui:Ažuriraj crteže}} upisuje brojeve, naslove i polja u blokove naslova svakog crteža u setu, i preimenuje karticu layout-a svakog lista kako set kaže (podrazumijevano broj i naslov, kao `A-101 Plan sprata`; {{ui:Postavi polja…}} › {{ui:Nazivi kartica rasporeda}} to mijenja). Svaki crtež se snima na mjestu, u vlastitom formatu i verziji. Nakon što ponovo numerišete ili preimenujete listove, pokrenite ponovo i kartice i blokovi naslova slijede.

## Lista listova na naslovnom listu

Izaberite naslovni list na spisku i izaberite {{ui:Stavi spisak listova na ovaj list}}. Tabela svih listova (broj i naslov, ispod njihovog podskupa) ide u gornji lijevi ugao lista. {{ui:Ažuriraj crteže}} i {{ui:Objavi u PDF}} je održavaju ažurnom. To je jedan blok, `CC_SHEETLIST`: pomjerite ga kao svaku referencu bloka.

## Objavite set

{{ui:Objavi u PDF}} pravi jedan PDF sa stranicom po listu, redom iz seta, na papiru vlastite veličine svakog lista, sa zabilješkom za svaki list ("A-101 — Plan sprata"). Kada je izabran podskup, CadCraft pita želite li objaviti samo taj podskup. Blokovi naslova u PDF-u se popunjavaju iz seta čak i prije nego što ažurirate crteže; sami crteži se objavljivanjem ne mijenjaju. PDF se preuzima.

{{ui:Objavi u DWG…}} zapisuje svaki list kao sopstveni DWG (DWG 2018): model i taj jedan list, s blokom naslova popunjenim iz seta, imenovan po broju i naslovu (`A-101 Level 1 floor plan.dwg`). Izaberite {{ui:DWG}}, ili {{ui:DWG + PDF}} za PDF seta pored njih. `publish.json` navodi svaku datoteku s njenom veličinom i SHA-256. Kada se u fasciklu seta može pisati (CadCraft Studio, ili fascikla koju ste izabrali u pregledaču), datoteke idu u fasciklu `<set name> - published`; inače se preuzimaju kao jedan zip. [Prepisivanja klase prozora pregleda](topic:viewport-overrides) idu uz svaki DWG.

## Arhivirajte set

{{ui:Arhiviraj kao zip}} pakuje datoteku seta, svaki crtež koji koristi i ono na šta ti crteži ukazuju (povezani crteži, i njihovi u svoju ruku, i slike), zadržavajući njihove fascikle, plus `Transmittal.txt` koji navodi svaku datoteku. Veza koja nije u fascikli seta navodi se tamo kao nedostajuća. Veze se pronalaze po putanji od crteža, zatim po nazivu datoteke bilo gdje u fascikli.

## Datoteka seta

Datoteka `.ccsheets` je JSON koji možete čitati u bilo kojem uređivaču teksta:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside klinika",
  "properties": { "PROJECTNAME": "Riverside klinika", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Planovi", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Plan sprata 1", "number": "A-101", "title": "Plan sprata 1" }
  ] } ]
}
```

Putanje su relativne u odnosu na fasciklu seta, sa `/` između fascikli. CadCraft provjerava datoteku kada je otvori: apsolutna putanja, list bez datoteke ili layout-a, ili tekst koji nije običan, izostavljaju se, a istorija to kaže.

## Rješavanje problema

| Šta vidite | Zašto | Šta uraditi |
|---|---|---|
| "Ova fascikla je ovdje samo za čitanje" | Pregledač ne može pisati u fasciklu | Koristite Chrome ili Edge, ili desktop aplikaciju; u međuvremenu {{ui:Preuzmi datoteku seta}} čuva vaše promjene |
| List je izostavljen iz PDF-a: "nema layout pod nazivom …" | Layout lista je preimenovan ili uklonjen u njegovom crtežu | Otvorite crtež i provjerite njegove kartice; uklonite list i ponovo ga dodajte |
| Blok naslova ostaje prazan | Njegovi atributi imaju druge oznake | Preimenujte oznake atributa u nazive polja iznad (BEDIT) |
| "već ima layout pod nazivom … pa kartica nije preimenovana" | Dva lista jednog crteža dobila bi isti naziv kartice | Dajte jednom od njih drugi broj ili naslov |

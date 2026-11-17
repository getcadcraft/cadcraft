---
title: Skupovi listova
summary: Spoj listove iz mnogo crteža u jedan numerisan spisak, popuni im tabele naslova iz skupa, objavi ceo skup kao jedan PDF i arhiviraj skup kao zip.
keywords: skup listova, menadžer skupova listova, ssm, sheetset, ccsheets, dst, spisak listova, indeks listova, tabela naslova, polja, objavi, ponovo numerisanje, arhiva, etransmit, transmitala, podskupovi, naslovni list, spisak crteža
from: 2c855720
---

## Šta ćete naučiti

Kako skupiti listove (rasporede) iz više datoteka crteža u **skup listova**, numerisati ih i dati im naslove, popuniti njihove tabele naslova iz skupa, objaviti ceo skup kao jedan PDF i spakovati sve u jedan zip za slanje.

Skup listova živi u maloj datoteci, `<ime>.ccsheets`, u fascikli koja drži crteže. Datoteka skupa navodi listove sa putanjama od te fascikle, pa možete premestiti ili kopirati celu fasciklu.

:::note
Za otvaranje fascikle radi čitanja i pisanja potrebni su Chrome ili Edge (mogu da dozvole stranici da radi u fascikli koju izaberete), ili desktop aplikacija. Drugi pregledači otvaraju skup samo za čitanje: možete ga pogledati i objaviti, a datoteka skupa se preuzima umesto da se čuva.
:::

## Pokreni skup

1. Nađite odeljak {{ui:Skup listova}} u levom panelu i otvorite njegov meni {{ui:Skup}}. Ukucavanje {{cmd:SHEETSET}} (ili `SSM`) vas takođe dovodi tamo.
2. Izaberite {{ui:Novi skup…}}. Dajte skupu ime i, ako želite, naziv i broj projekta.
3. Izaberite fasciklu koja drži crteže. Datoteka skupa se čuva tamo.

Da kasnije otvorite skup, izaberite {{ui:Otvori skup…}} i izaberite istu fasciklu. Ako fascikla sadrži više skupova, CadCraft pita koji.

## Dodaj listove

1. Izaberite {{ui:Dodaj listove iz crteža…}} i izaberite jedan od crteža u fascikli.
2. CadCraft čita taj crtež u pozadini (ne otvara se na ekranu) i navodi njegove listove. Označite one koje želite i kliknite {{ui:U redu}}.
3. Izaberite list i pritisnite {{key:F2}} (ili {{ui:Preimenuj i ponovo numeriši…}}) da mu dodelite broj i naslov, na primer `A-101` i `Plan sprata`.

{{ui:Novi list iz šablona…}} pravi novi crtež iz lista drugog crteža (njegove tabele naslova i prozora pogleda), nazvan po novom listu, i dodaje ga. Skup pamti crtež koji ste koristili kao šablon.

## Uredi skup

- **Podskupovi** grupišu listove, kao Arhitektura › Planovi: izaberite mesto gde ide i izaberite {{ui:Novi podskup…}}.
- **Redosled**: prevucite list na drugo mesto u spisku, ili na podskup da ga tamo premestite. Tastaturom: izaberite ga i pritisnite {{key:Alt+Up}} ili {{key:Alt+Down}}.
- **Otvori list**: dvaput kliknite (ili pritisnite {{key:Enter}}). Njegov crtež se otvara u sopstvenoj kartici, na tom listu.
- **Ukloni**: izaberite ga i pritisnite {{key:Delete}}. Sam crtež se ne menja.
- **Opozovi**: {{ui:Opozovi promenu skupa}} i {{ui:Ponovi promenu skupa}} prolaze kroz ono što ste menjali u skupu.
- **Ponovo numerisanje**: {{ui:Ponovo numeriši listove…}} numeriše svaki list, ili listove jednog podskupa, prema redosledu spiska: prefiks, početak i korak (`A-` i `101` daju A-101, A-102 …).

Svaka promena se odmah čuva u datoteci skupa.

## Numerisanje listova iz njihovih polja

Umesto da ručno numerišete listove, pustite pravilo da gradi svaki broj iz polja lista, pa list koji pređe na drugi nivo ili disciplinu dobija novi broj sam od sebe.

1. Dajte svakom listu njegova polja: izaberite ga, kliknite {{ui:Preimenuj…}} i u {{ui:Polja ovog lista}} napišite jedno po redu, na primer `DISCIPLINE = A` i `LEVEL = 1`. Polje koje deli ceo skup (recimo `DISCIPLINE = A`) može da ide u {{ui:Svojstva…}} skupa.
2. Otvorite meni panela i kliknite {{ui:Pravilo numerisanja…}}.
3. Napišite pravilo, na primer `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` broji među listovima čija ostala polja imaju istu vrednost, pa nivo 1 dobija A-101, A-102, a nivo 2 počinje ispočetka sa A-201. `{SEQ:2}` ispisuje dve cifre; `{SUBSET}` je ime podskupa u kojem je list.
4. Izaberite šta se dešava kada se polje promeni: {{ui:Ponovo numeriši listove}} održava brojeve prema pravilu posle svake promene; drugi izbor numeriše jednom, odmah.

Pravilo se čuva u datoteci skupa. Dok ono samo ponovo numeriše, menjajte polja lista, a ne njegov broj.

## Popuni tabele naslova iz skupa

Tabela naslova dobija svoj tekst iz skupa kada su njeni atributi označeni imenom polja:

| Oznaka | Šta prikazuje |
|---|---|
| `SHEETNUMBER` (ili `SHEET_NO`, `DWG_NO`) | Broj lista |
| `SHEETTITLE` (ili `TITLE`, `SHEET_TITLE`) | Naslov lista |
| `SHEETDESC` | Opis lista |
| `PROJECTNAME` (ili `PROJECT`) | Naziv projekta |
| `PROJECTNUMBER` (ili `PROJECT_NO`, `JOB_NO`) | Broj projekta |
| `SHEETSETNAME` | Ime skupa |
| `SHEETINDEX`, `SHEETCOUNT` | „3 od 12“, i 12 |
| Vaše sopstveno, na primer `CLIENT` | Ono što ste upisali za nju u {{ui:Podesi polja…}} |

{{ui:Podesi polja…}} sadrži naziv i broj projekta i vaša sopstvena polja, jedno po redu kao `IME = vrednost`.

{{ui:Ažuriraj crteže}} upisuje brojeve, naslove i polja u tabele naslova svakog crteža u skupu, i preimenuje karticu rasporeda svakog lista kako skup kaže (podrazumevano broj i naslov, na primer `A-101 Plan sprata`; {{ui:Podesi polja…}} › {{ui:Nazivi kartica rasporeda}} to menja). Svaki crtež se čuva na mestu, u sopstvenom formatu i verziji. Posle ponovnog numerisanja ili preimenovanja listova pokrenite ga ponovo, pa kartice i tabele naslova prate.

## Spisak listova na naslovnom listu

Izaberite naslovni list u spisku i izaberite {{ui:Stavi spisak listova na ovaj list}}. Tabela svakog lista (broj i naslov, ispod podskupa) ide u gornji levi ugao lista. {{ui:Ažuriraj crteže}} i {{ui:Objavi u PDF}} je održavaju ažurnom. To je jedan blok, `CC_SHEETLIST`: pomerajte ga kao svaku referencu bloka.

## Objavi skup

{{ui:Objavi u PDF}} pravi jedan PDF sa stranicom po listu, prema redosledu skupa, na sopstvenoj veličini papira svakog lista, sa oznakom za svaki list („A-101 — Plan sprata“). Kada je izabran podskup, CadCraft pita da li da objavi samo taj podskup. Tabele naslova u PDF-u se popunjavaju iz skupa i pre nego što ažurirate crteže; sami crteži se objavljivanjem ne menjaju. PDF se preuzima.

{{ui:Objavi u DWG…}} piše svaki list kao sopstveni DWG (DWG 2018): model i taj jedan list, sa tabelom naslova popunjenom iz skupa, nazvan po broju i naslovu (`A-101 Plan sprata nivo 1.dwg`). Izaberite {{ui:DWG}}, ili {{ui:DWG + PDF}} za PDF skupa pored njih. `publish.json` navodi svaku datoteku sa veličinom i SHA-256. Kada se u fasciklu skupa može pisati (CadCraft Studio, ili fascikla koju ste izabrali u pregledaču), datoteke idu u fasciklu `<ime skupa> - objavljeno`; inače se preuzimaju kao jedan zip. [Zamene klasa prozora](topic:viewport-overrides) idu uz svaki DWG.

## Arhiviraj skup

{{ui:Arhiviraj kao zip}} pakuje datoteku skupa, svaki crtež koji koristi i ono na što ti crteži ukazuju (povezani crteži, i njihovi u nizu, i slike), čuvajući njihove fascikle, plus `Transmittal.txt` koji navodi svaku datoteku. Veza koja nije u fascikli skupa se tamo navodi kao nedostajuća. Veze se traže po putanji od crteža, zatim po imenu datoteke bilo gde u fascikli.

## Datoteka skupa

Datoteka `.ccsheets` je JSON koji možete pročitati u bilo kom uređivaču teksta:

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

Putanje su relativne u odnosu na fasciklu skupa, sa `/` između fascikli. CadCraft proverava datoteku kada je otvori: apsolutna putanja, list bez datoteke ili rasporeda, ili tekst koji nije običan se izostavljaju, a istorija to kaže.

## Rešavanje problema

| Šta vidite | Zašto | Šta da uradite |
|---|---|---|
| „Ova fascikla je ovde samo za čitanje“ | Pregledač ne može da piše u fasciklu | Koristite Chrome ili Edge, ili desktop aplikaciju; u međuvremenu {{ui:Preuzmi datoteku skupa}} čuva vaše promene |
| List je izostavljen iz PDF-a: „nema raspored pod imenom …“ | Raspored lista je preimenovan ili uklonjen u svom crtežu | Otvorite crtež i proverite njegove kartice; uklonite list i dodajte ga ponovo |
| Tabela naslova ostaje prazna | Njeni atributi imaju druge oznake | Preimenujte oznake atributa u gore navedena imena polja (BEDIT) |
| „već ima raspored pod imenom … pa kartica nije preimenovana“ | Dva lista jednog crteža bi dobila isto ime kartice | Dajte jednom od njih drugi broj ili naslov |

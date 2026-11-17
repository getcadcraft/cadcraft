---
title: Seturi de planșe
summary: Adunați planșe din multe desene într-o singură listă numerotată, completați cartușele din set, publicați-le ca un singur PDF și arhivați setul ca un zip.
keywords: set de planșe, manager de seturi de planșe, ssm, sheetset, ccsheets, dst, listă de planșe, index de planșe, cartuș, câmpuri, publicare, renumerotare, arhivare, etransmit, transmitere, subseturi, planșă de copertă, listă de desene
from: 2c855720
---

## Ce veți învăța

Cum adunați planșe (aspecte) din mai multe fișiere de desen într-un **set de planșe**, cum le numerotați și le titrați, cum aveți cartușele completate automat, cum publicați întregul set ca un singur PDF și cum împachetați totul într-un singur zip pentru trimitere.

Un set de planșe trăiește într-un fișier mic al lui, `<nume>.ccsheets`, în dosarul care conține desenele. Fișierul setului listează planșele cu căi față de acest dosar, astfel încât puteți muta sau copia tot dosarul.

:::note
Deschiderea unui dosar pentru citire și scriere cere Chrome sau Edge (ele pot lăsa o pagină să lucreze într-un dosar ales), sau aplicația de desktop. Celelalte browsere deschid un set doar pentru citire: îl puteți privi și publica, iar fișierul setului se descarcă în loc să se salveze.
:::

## Începerea unui set

1. Găsiți secțiunea {{ui:Set de planșe}} din panoul din stânga și deschideți meniul ei {{ui:Set}}. Tastarea {{cmd:SHEETSET}} (sau `SSM`) vă duce tot acolo.
2. Alegeți {{ui:Set nou…}}. Dați setului un nume și, dacă doriți, numele și numărul proiectului.
3. Alegeți dosarul care conține desenele. Fișierul setului este salvat acolo.

Ca să deschideți mai târziu un set, alegeți {{ui:Deschidere set…}} și alegeți același dosar. Dacă dosarul conține mai multe seturi, CadCraft întreabă care.

## Adăugarea planșelor

1. Alegeți {{ui:Adăugare planșe dintr-un desen…}} și alegeți unul dintre desenele din dosar.
2. CadCraft citește desenul în fundal (nu se deschide pe ecran) și listează planșele lui. Bifați cele dorite și faceți clic pe {{ui:OK}}.
3. Selectați o planșă și apăsați {{key:F2}} (sau {{ui:Redenumire și renumerotare…}}) ca să îi dați un număr și un titlu, cum ar fi `A-101` și `Plan etaj`.

{{ui:Planșă nouă din șablon…}} creează un desen nou din planșa altui desen (cartușul și ferestrele lui de vizualizare), numit după planșa nouă, și îl adaugă. Setul reține desenul folosit ca șablon.

## Aranjarea setului

- **Subseturile** grupează planșe, cum ar fi Arhitectural › Planuri: selectați locul unde merg și alegeți {{ui:Subset nou…}}.
- **Ordinea**: trageți o planșă în alt loc din listă, sau pe un subset ca s-o mutați acolo. Cu tastatura, selectați-o și apăsați {{key:Alt+Up}} sau {{key:Alt+Down}}.
- **Deschiderea unei planșe**: faceți dublu clic pe ea (sau apăsați {{key:Enter}}). Desenul ei se deschide în fila lui, pe acea planșă.
- **Eliminarea**: selectați-o și apăsați {{key:Delete}}. Desenul în sine nu este modificat.
- **Anularea**: {{ui:Anulare modificare set}} și {{ui:Refacere modificare set}} parcurg ce ați schimbat în set.
- **Renumerotarea**: {{ui:Renumerotare planșe…}} numerotează fiecare planșă, sau pe cele ale unui subset, în ordinea listei: un prefix, un început și un pas (`A-` și `101` dau A-101, A-102 …).

Fiecare modificare este salvată imediat în fișierul setului.

## Numerotarea planșelor după câmpurile lor

În loc să numerotați planșele manual, lăsați o regulă să construiască fiecare număr din câmpurile planșei, astfel încât o planșă mutată la alt nivel sau la altă disciplină primește singură noul număr.

1. Dați fiecărei planșe câmpurile ei: selectați-o, faceți clic pe {{ui:Redenumire…}} și, în {{ui:Câmpurile acestei foi}}, scrieți unul pe rând, de exemplu `DISCIPLINE = A` și `LEVEL = 1`. Un câmp comun întregului set (de exemplu `DISCIPLINE = A`) poate merge în {{ui:Proprietăți…}} setului.
2. Deschideți meniul panoului și faceți clic pe {{ui:Regula de numerotare…}}.
3. Scrieți regula, de exemplu `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` numără în sus printre planșele ale căror celelalte câmpuri au aceeași valoare, astfel încât nivelul 1 primește A-101, A-102, iar nivelul 2 începe din nou de la A-201. `{SEQ:2}` îl scrie cu două cifre; `{SUBSET}` este numele subsetului în care se află o planșă.
4. Alegeți ce se întâmplă când se schimbă un câmp: {{ui:Renumerotați foile}} păstrează numerele conform regulii după fiecare schimbare; cealaltă alegere numerotează o singură dată, acum.

Regula este salvată în fișierul setului. Cât timp renumerotează singură, modificați câmpurile unei planșe, nu numărul ei.

## Completarea cartușelor din set

Un cartuș își primește textul din set când atributele lui sunt etichetate cu numele unui câmp:

| Etichetă | Ce afișează |
|---|---|
| `SHEETNUMBER` (sau `SHEET_NO`, `DWG_NO`) | Numărul planșei |
| `SHEETTITLE` (sau `TITLE`, `SHEET_TITLE`) | Titlul planșei |
| `SHEETDESC` | Descrierea planșei |
| `PROJECTNAME` (sau `PROJECT`) | Numele proiectului |
| `PROJECTNUMBER` (sau `PROJECT_NO`, `JOB_NO`) | Numărul proiectului |
| `SHEETSETNAME` | Numele setului |
| `SHEETINDEX`, `SHEETCOUNT` | „3 din 12”, și 12 |
| Propriile, cum ar fi `CLIENT` | Ce ați scris pentru ele în {{ui:Setare câmpuri…}} |

{{ui:Setare câmpuri…}} conține numele și numărul proiectului și câmpurile proprii, câte unul pe rând, sub forma `NUME = valoare`.

{{ui:Actualizare desene}} scrie numerele, titlurile și câmpurile în cartușele fiecărui desen din set și redenumește fila de aspect a fiecărei planșe după cum spune setul (implicit număr și titlu, de exemplu `A-101 Plan etaj`; {{ui:Setare câmpuri…}} › {{ui:Nume file de aranjare în pagină}} schimbă asta). Fiecare desen este salvat pe loc, în propriul format și în propria versiune. După ce renumerotați sau redenumiți planșe, rulați-o din nou și filele și cartușele urmează.

## O listă de planșe pe planșa de copertă

Selectați planșa de copertă în listă și alegeți {{ui:Punere a listei de planșe pe această planșă}}. Un tabel cu fiecare planșă (număr și titlu, sub subsetul ei) apare în colțul din stânga sus al planșei. {{ui:Actualizare desene}} și {{ui:Publicare în PDF}} îl țin la zi. Este un singur bloc, `CC_SHEETLIST`: mutați-l ca pe orice referință la bloc.

## Publicarea setului

{{ui:Publicare în PDF}} face un singur PDF cu o pagină per planșă, în ordinea setului, la propriul format de hârtie al fiecărei planșe, cu un semn de carte pentru fiecare („A-101 — Plan etaj”). Cu un subset selectat, CadCraft întreabă dacă să publice doar acel subset. Cartușele din PDF sunt completate din set chiar înainte să actualizați desenele; desenele în sine nu sunt modificate prin publicare. PDF-ul se descarcă.

{{ui:Publicare în DWG…}} scrie fiecare planșă ca un DWG propriu (DWG 2018): modelul și acea singură planșă, cu cartușul completat din set, numit după număr și titlu (`A-101 Plan etaj nivel 1.dwg`). Alegeți {{ui:DWG}}, sau {{ui:DWG + PDF}} pentru ca PDF-ul setului să fie alături de ele. Un `publish.json` listează fiecare fișier cu dimensiunea și SHA-256. Când dosarul setului poate fi scris (CadCraft Studio, sau un dosar ales în browser), fișierele merg într-un dosar `<nume set> - publicat`; altfel se descarcă ca un singur zip. [Suprascrierile de clasă ale ferestrelor](topic:viewport-overrides) vin cu fiecare DWG.

## Arhivarea setului

{{ui:Arhivare ca zip}} împachetează fișierul setului, fiecare desen pe care îl folosește și ce leagă acele desene (desenele externe, și ale lor la rândul lor, și imaginile), păstrându-le dosarele, plus un `Transmittal.txt` care listează fiecare fișier. O legătură care nu se află în dosarul setului este trecută acolo ca lipsă. Legăturile sunt găsite după calea lor din desen, apoi după numele fișierului oriunde în dosar.

## Fișierul setului

Fișierul `.ccsheets` este JSON, pe care îl puteți citi în orice editor de text:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Clinica Riverside",
  "properties": { "PROJECTNAME": "Clinica Riverside", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Planuri", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Plan etaj nivel 1", "number": "A-101", "title": "Plan etaj nivel 1" }
  ] } ]
}
```

Căile sunt relative la dosarul setului, cu `/` între dosare. CadCraft verifică fișierul la deschidere: o cale absolută, o planșă fără fișier sau fără aspect, sau un text care nu este simplu sunt lăsate afară, iar istoricul spune asta.

## Depanare

| Ce vedeți | De ce | Ce trebuie făcut |
|---|---|---|
| „This folder is read only here” › „Acest dosar este doar pentru citire aici” | Browserul nu poate scrie în dosar | Folosiți Chrome sau Edge, sau aplicația de desktop; între timp {{ui:Descărcare fișier set}} păstrează modificările |
| Planșa lipsește din PDF: „has no layout named …” › „nu are un aspect numit …” | Aspectul planșei a fost redenumit sau șters în desen | Deschideți desenul și verificați filele; ștergeți planșa și adăugați-o din nou |
| Un cartuș rămâne gol | Atributele lui au alte etichete | Redenumiți etichetele atributelor cu numele câmpurilor de mai sus (BEDIT) |
| „already has a layout named … so that tab was not renamed” › „are deja un aspect numit …, așa că fila nu a fost redenumită” | Două planșe ale aceluiași desen ar primi același nume de filă | Dați uneia dintre ele alt număr sau alt titlu |

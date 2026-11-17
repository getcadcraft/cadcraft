---
title: Lapu kopas
summary: Apkopojiet lapas no daudziem rasējumiem vienā numurētā sarakstā, aizpildiet to titula blokus no kopas, publicējiet tās kā vienu PDF un arhivējiet kopu zip failā.
keywords: lapu kopa, lapu kopas pārvaldnieks, ssm, sheetset, ccsheets, dst, lapu saraksts, lapu rādītājs, titula bloks, lauki, publicēt, pārnumurēt, arhivēt, etransmit, pārsūtījuma saraksts, apakškopas, vāka lapa, rasējumu saraksts
from: 2c855720
---

## Ko jūs uzzināsiet

Kā savākt lapas (izkārtojumus) no vairākiem rasējumu failiem **lapu kopā**, dot tām numurus un nosaukumus, likt aizpildīt to titula blokus, publicēt visu kopu kā vienu PDF un iesaiņot visu vienā zip failā, ko nosūtīt.

Lapu kopa dzīvo nelielā savā failā, `<name>.ccsheets`, mapē, kurā atrodas rasējumi. Kopas fails uzskaita lapas ar ceļiem no šīs mapes, tāpēc visu mapi var pārvietot vai kopēt.

:::note
Lai atvērtu mapi lasīšanai un rakstīšanai, vajadzīgs Chrome vai Edge (tie var ļaut lapai strādāt mapē, kuru izvēlaties), vai darbvirsmas lietotne. Citas pārlūkprogrammas atver kopu tikai lasīšanai: varat to aplūkot un publicēt, un kopas fails tiek lejupielādēts, nevis saglabāts.
:::

## Izveidojiet kopu

1. Atrodiet {{ui:Lapu kopa}} sadaļu kreisajā panelī un atveriet tās {{ui:Kopa}} izvēlni. Ierakstot {{cmd:SHEETSET}} (vai `SSM`), arī nonāksiet šeit.
2. Izvēlieties {{ui:Jauna kopa…}}. Dodiet kopai nosaukumu un, ja vēlaties, projekta nosaukumu un numuru.
3. Izvēlieties mapi, kurā atrodas rasējumi. Kopas fails tiek saglabāts tur.

Lai vēlāk atvērtu kopu, izvēlieties {{ui:Atvērt kopu…}} un izvēlieties to pašu mapi. Ja mapē ir vairāk nekā viena kopa, CadCraft jautā, kuru.

## Pievienojiet lapas

1. Izvēlieties {{ui:Pievienot lapas no rasējuma…}} un izvēlieties vienu no mapes rasējumiem.
2. CadCraft nolasa šo rasējumu fonā (tas neatveras ekrānā) un uzskaita tā lapas. Atzīmējiet vajadzīgās un noklikšķiniet uz {{ui:Labi}}.
3. Izvēlieties lapu un nospiediet {{key:F2}} (vai {{ui:Pārdēvēt un pārnumurēt…}}), lai dotu tai numuru un nosaukumu, piemēram, `A-101` un `Stāva plāns`.

{{ui:Jauna lapa no veidnes…}} izveido jaunu rasējumu no cita rasējuma lapas (tās titula bloka un skatlogiem), nosauktu pēc jaunās lapas, un to pievieno. Kopa atceras rasējumu, ko izmantojāt kā veidni.

## Sakārtojiet kopu

- **Apakškopas** grupē lapas, piemēram, Arhitektūra › Plāni: izvēlieties, kur tās ielikt, un izvēlieties {{ui:Jauna apakškopa…}}.
- **Kārtība**: velciet lapu uz citu vietu sarakstā vai uz apakškopu, lai to pārvietotu tur. Ar tastatūru izvēlieties to un nospiediet {{key:Alt+Up}} vai {{key:Alt+Down}}.
- **Atvērt lapu**: veiciet dubultklikšķi (vai nospiediet {{key:Enter}}). Tās rasējums atveras savā cilnē, uz šīs lapas.
- **Noņemt**: izvēlieties to un nospiediet {{key:Delete}}. Pats rasējums netiek mainīts.
- **Atsaukt**: {{ui:Atsaukt kopas izmaiņu}} un {{ui:Atkārtot kopas izmaiņu}} pārvietojas pa to, ko kopā mainījāt.
- **Pārnumurēt**: {{ui:Pārnumurēt lapas…}} numurē katru lapu vai vienas apakškopas lapas sarakstā esošā secībā: priedēklis, sākums un solis (`A-` un `101` dod A-101, A-102 …).

Katra izmaiņa tiek uzreiz saglabāta kopas failā.

## Numurējiet lapas pēc to laukiem

Tā vietā, lai numurētu lapas ar roku, ļaujiet noteikumam veidot katru numuru no lapas laukiem, lai lapa, kas pāriet uz citu stāvu vai disciplīnu, saņem jauno numuru pati.

1. Piešķiriet katrai lapai tās laukus: izvēlieties to, noklikšķiniet uz {{ui:Pārdēvēt…}} un {{ui:Šīs lapas lauki}} ierakstiet pa vienam katrā rindā, piemēram, `DISCIPLINE = A` un `LEVEL = 1`. Lauku, ko dala visa kopa (piemēram, `DISCIPLINE = A`), var ierakstīt kopas {{ui:Rekvizīti…}}.
2. Atveriet paneļa izvēlni un noklikšķiniet uz {{ui:Numerācijas noteikums…}}.
3. Ierakstiet noteikumu, piemēram, `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` skaita augšup starp lapām, kuru citi lauki ir vienādi, tādēļ 1. līmenis saņem A-101, A-102, un 2. līmenis sākas no jauna: A-201. `{SEQ:2}` raksta to ar diviem cipariem; `{SUBSET}` ir apakškopas nosaukums, kurā lapa atrodas.
4. Izvēlieties, kas notiek, kad mainās lauks: {{ui:Pārnumurēt lapas}} pēc katras izmaiņas saglabā numurus atbilstošus noteikumam; otra izvēle numurē tos vienreiz, tagad.

Noteikums tiek saglabāts kopas failā. Kamēr tas pārnumurē pats, mainiet lapas laukus, nevis tās numuru.

## Aizpildiet titula blokus no kopas

Titula bloks iegūst tekstu no kopas, kad tā atribūti ir atzīmēti ar lauka nosaukumu:

| Tags | Ko tas rāda |
|---|---|
| `SHEETNUMBER` (vai `SHEET_NO`, `DWG_NO`) | Lapas numurs |
| `SHEETTITLE` (vai `TITLE`, `SHEET_TITLE`) | Lapas nosaukums |
| `SHEETDESC` | Lapas apraksts |
| `PROJECTNAME` (vai `PROJECT`) | Projekta nosaukums |
| `PROJECTNUMBER` (vai `PROJECT_NO`, `JOB_NO`) | Projekta numurs |
| `SHEETSETNAME` | Kopas nosaukums |
| `SHEETINDEX`, `SHEETCOUNT` | "3 no 12", un 12 |
| Jūsu pašu, piemēram, `CLIENT` | Ko jūs tam ierakstījāt {{ui:Iestatīt laukus…}} |

{{ui:Iestatīt laukus…}} satur projekta nosaukumu un numuru un jūsu pašu laukus, katru rindā kā `NAME = value`.

{{ui:Atjaunināt rasējumus}} ieraksta numurus, nosaukumus un laukus katra kopas rasējuma titula blokos un pārdēvē katras lapas izkārtojuma cilni, kā noteikts kopā (pēc noklusējuma numurs un nosaukums, piemēram, `A-101 Stāva plāns`; {{ui:Iestatīt laukus…}} › {{ui:Izkārtojumu cilņu nosaukumi}} to maina). Katrs rasējums tiek saglabāts savā vietā, savā formātā un versijā. Pēc lapu pārnumurēšanas vai pārdēvēšanas palaidiet to vēlreiz, un cilnes un titula bloki seko.

## Vāka lapas lapu saraksts

Izvēlieties vāka lapu sarakstā un izvēlieties {{ui:Ievietot lapu sarakstu šajā lapā}}. Tabula ar katru lapu (numurs un nosaukums, zem tās apakškopas) tiek ievietota lapas augšējā kreisajā stūrī. {{ui:Atjaunināt rasējumus}} un {{ui:Publicēt PDF}} to uztur atjauninātu. Tas ir viens bloks, `CC_SHEETLIST`: pārvietojiet to kā jebkuru bloka atsauci.

## Publicējiet kopu

{{ui:Publicēt PDF}} izveido vienu PDF ar lapu uz katru lapu kopas secībā, katras lapas paša papīra izmērā, ar grāmatzīmi katrai lapai ("A-101 — Stāva plāns"). Ja ir izvēlēta apakškopa, CadCraft jautā, vai publicēt tikai to. PDF titula bloki tiek aizpildīti no kopas pat pirms jūs atjaunināt rasējumus; paši rasējumi ar publicēšanu netiek mainīti. PDF tiek lejupielādēts.

{{ui:Publicēt DWG…}} ieraksta katru lapu kā atsevišķu DWG (DWG 2018): modeli un šo vienu lapu ar titula bloku, kas aizpildīts no kopas, nosauktu pēc tās numura un nosaukuma (`A-101 Level 1 floor plan.dwg`). Izvēlieties {{ui:DWG}} vai {{ui:DWG + PDF}}, lai kopas PDF būtu blakus tiem. `publish.json` uzskaita katru failu ar tā izmēru un SHA-256. Kad kopas mape ir rakstāma (CadCraft Studio vai mape, kuru izvēlējāties pārlūkprogrammā), faili tiek ievietoti mapē `<set name> - published`; citādi tie tiek lejupielādēti kā viens zip fails. Skata [klašu pārrakstījumi](topic:viewport-overrides) tiek pārnesti katrā DWG.

## Arhivējiet kopu

{{ui:Arhivēt zip failā}} iesaiņo kopas failu, katru rasējumu, ko tā izmanto, un to, uz ko šie rasējumi atsaucas (saistītos rasējumus, un to saistītos rasējumus, un attēlus), saglabājot to mapes, kā arī `Transmittal.txt`, kas uzskaita katru failu. Saite, kas neatrodas kopas mapē, tur tiek uzskaitīta kā trūkstoša. Saites tiek atrastas pēc to ceļa no rasējuma, tad pēc faila nosaukuma jebkurā mapē.

## Kopas fails

`.ccsheets` fails ir JSON, ko var lasīt jebkurā teksta redaktorā:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside klīnika",
  "properties": { "PROJECTNAME": "Riverside klīnika", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plāni", "sheets": [
    { "id": "p1", "file": "plans/Līmenis 1.dwg", "layout": "A-101 1. līmeņa stāva plāns", "number": "A-101", "title": "1. līmeņa stāva plāns" }
  ] } ]
}
```

Ceļi ir attiecībā pret kopas mapi, ar `/` starp mapēm. CadCraft pārbauda failu, kad to atver: absolūts ceļš, lapa bez faila vai izkārtojuma vai teksts, kas nav vienkāršs, tiek izlaists, un vēsture to saka.

## Problēmu novēršana

| Ko jūs redzat | Kāpēc | Ko darīt |
|---|---|---|
| "This folder is read only here" | Pārlūkprogramma nevar rakstīt mapē | Izmantojiet Chrome vai Edge, vai darbvirsmas lietotni; tikmēr {{ui:Lejupielādēt kopas failu}} saglabā jūsu izmaiņas |
| Lapa ir izlaista no PDF: "nav izkārtojuma ar nosaukumu …" | Lapas izkārtojums rasējumā ir pārdēvēts vai noņemts | Atveriet rasējumu un pārbaudiet tā cilnes; noņemiet lapu un pievienojiet to vēlreiz |
| Titula bloks paliek tukšs | Tā atribūtiem ir citi tagi | Pārdēvējiet atribūtu tagus uz iepriekš minētajiem lauku nosaukumiem (BEDIT) |
| "jau ir izkārtojums ar nosaukumu … tāpēc cilne netika pārdēvēta" | Divas viena rasējuma lapas saņemtu vienu un to pašu cilnes nosaukumu | Dodiet vienai no tām citu numuru vai nosaukumu |

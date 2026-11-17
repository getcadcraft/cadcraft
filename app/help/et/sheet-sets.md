---
title: Lehtede komplektid
summary: Too kokku lehed paljudest joonisfailidest ühte nummerdatud loendisse, täida nende tiitliplokid komplektist, avalda need üheks PDF-iks ja arhiveeri komplekt zip-failina.
keywords: lehtede komplekt, lehtede komplekti haldur, ssm, sheetset, ccsheets, dst, lehtede loend, lehtede register, tiitliplokk, väljad, avalda, nummerda uuesti, arhiveeri, etransmit, edastusleht, alamkomplektid, kaanelehekülg, joonisteloend
from: 2c855720
---

## Mida õpid

Kuidas koguda lehti (paigutusi) mitmest joonisfailist **lehtede komplekti**, nummerdada ja pealkirjastada neid, lasta nende tiitliplokid sinu eest täita, avaldada kogu komplekt ühe PDF-ina ja pakkida kõik ühte zip-faili saatmiseks.

Lehtede komplekt elab oma väikeses failis `<name>.ccsheets` kaustas, mis hoiab jooniseid. Komplektifail loetleb lehed teedena sellest kaustast, nii et saad kogu kausta teisaldada või kopeerida.

:::note
Kausta lugemiseks ja kirjutamiseks on vaja Chrome'i või Edge'i (nad saavad lasta lehel töötada kaustas, mille sa valid), või töölauarakendust. Teised brauserid avavad komplekti ainult lugemiseks: saad seda vaadata ja avaldada, ja komplektifail laaditakse alla, selle asemel et salvestuda.
:::

## Alusta komplekti

1. Leia vasakpoolsest paneelist jaotis {{ui:Lehtede komplekt}} ja ava selle menüü {{ui:Komplekt}}. Käsk {{cmd:SHEETSET}} (või `SSM`) viib sind sinna samuti.
2. Vali {{ui:Uus komplekt…}}. Anna komplektile nimi ja soovi korral projekti nimi ja number.
3. Vali kaust, kus on joonised. Komplektifail salvestatakse sinna.

Komplekti hiljem avamiseks vali {{ui:Ava komplekt…}} ja vali sama kaust. Kui kaustas on rohkem kui üks komplekt, küsib CadCraft, millist.

## Lisa lehed

1. Vali {{ui:Lisa lehed joonisest…}} ja vali üks kausta joonistest.
2. CadCraft loeb selle joonise taustal (see ei avane ekraanil) ja loetleb selle lehed. Märgi soovitud ja klõpsa {{ui:OK}}.
3. Vali leht ja vajuta {{key:F2}} (või {{ui:Nimeta ümber ja nummerda uuesti…}}), et anda sellele number ja pealkiri, näiteks `A-101` ja `Korruse plaan`.

{{ui:Uus leht mallilt…}} teeb uue joonise teise joonise lehe järgi (selle tiitliplokk ja vaateaknad), nimetab selle uue lehe järgi ja lisab selle. Komplekt mäletab joonist, mida kasutasid mallina.

## Korralda komplekt

- **Alamkomplektid** rühmitavad lehti, näiteks Arhitektuur › Plaanid: vali koht, kuhu see läheb, ja vali {{ui:Uus alamkomplekt…}}.
- **Järjekord**: lohista leht loendis teise kohta või alamkomplekti peale, et see sinna liigutada. Klaviatuuriga vali see ja vajuta {{key:Alt+Up}} või {{key:Alt+Down}}.
- **Ava leht**: tee sellel topeltklõps (või vajuta {{key:Enter}}). Selle joonis avaneb omal kaardil, sellel lehel.
- **Eemalda**: vali see ja vajuta {{key:Delete}}. Joonist ennast ei muudeta.
- **Võta tagasi**: {{ui:Võta komplekti muudatus tagasi}} ja {{ui:Tee komplekti muudatus uuesti}} liiguvad läbi selle, mida komplektis muutsid.
- **Nummerda uuesti**: {{ui:Nummerda lehed uuesti…}} nummerdab iga lehe või ühe alamkomplekti kõik lehed loendi järjekorras: prefiks, algus ja samm (`A-` ja `101` annavad A-101, A-102 …).

Iga muudatus salvestatakse komplektifailile kohe.

## Nummerda lehed nende väljade järgi

Selle asemel, et nummerdada lehti käsitsi, lase reeglil koostada iga number lehe väljadest, nii et leht, mis liigub teisele korrusele või erialale, saab uue numbri iseenesest.

1. Anna igale lehele tema väljad: vali see, klõpsa {{ui:Nimeta ümber…}} ja kirjuta {{ui:Selle lehe väljad}} alla üks rida, näiteks `DISCIPLINE = A` ja `LEVEL = 1`. Väli, mida kogu komplekt jagab (näiteks `DISCIPLINE = A`), võib minna selle asemel komplekti {{ui:Omadused…}} alla.
2. Ava paneeli menüü ja klõpsa {{ui:Nummerdamise reegel…}}.
3. Kirjuta reegel, näiteks `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` loeb üles selle lehtede seas, mille teised väljad on samad, nii et korruse 1 lehed saavad A-101, A-102 ja korrus 2 algab uuesti numbrist A-201. `{SEQ:2}` kirjutab selle kahe numbriga; `{SUBSET}` on selle alamkomplekti nimi, kus leht on.
4. Vali, mis juhtub, kui väli muutub: {{ui:Nummerda lehed uuesti}} hoiab numbrid pärast iga muudatust reegli järgi; teine valik nummerdab need üks kord kohe.

Reegel salvestatakse komplektifailile. Kui see nummerdab ise ümber, muuda lehe välju, mitte selle numbrit.

## Täida tiitliplokid komplektist

Tiitliplokk saab oma teksti komplektilt, kui selle atribuudid on märgitud välja nimega:

| Silt | Mida näitab |
|---|---|
| `SHEETNUMBER` (või `SHEET_NO`, `DWG_NO`) | Lehe number |
| `SHEETTITLE` (või `TITLE`, `SHEET_TITLE`) | Lehe pealkiri |
| `SHEETDESC` | Lehe kirjeldus |
| `PROJECTNAME` (või `PROJECT`) | Projekti nimi |
| `PROJECTNUMBER` (või `PROJECT_NO`, `JOB_NO`) | Projekti number |
| `SHEETSETNAME` | Komplekti nimi |
| `SHEETINDEX`, `SHEETCOUNT` | „3 / 12“ ja 12 |
| Sinu enda, näiteks `CLIENT` | See, mille kirjutasid selle jaoks väljas {{ui:Komplekti väljad…}} |

{{ui:Komplekti väljad…}} sisaldab projekti nime ja numbrit ning sinu enda välju, üks rida kohta kujul `NIMI = väärtus`.

{{ui:Uuenda jooniseid}} kirjutab numbrid, pealkirjad ja väljad iga komplekti joonise tiitliplokkidesse ning nimetab iga lehe paigutuse vahelehe ümber, nagu komplekt ütleb (vaikimisi number ja pealkiri, näiteks `A-101 Korruse plaan`; {{ui:Komplekti väljad…}} › {{ui:Paigutuse vahelehtede nimed}} muudab selle). Iga joonis salvestatakse kohapeal, oma vormingus ja versioonis. Pärast lehtede nummerdamist või ümbernimetamist käivita see uuesti, ja vahelehed ning tiitliplokid järgnevad.

## Lehtede loend kaanelehel

Vali kaanelehekülg loendist ja vali {{ui:Pane lehtede loend sellele lehele}}. Kõigi lehtede tabel (number ja pealkiri, alamkomplekti all) läheb lehe ülemisse vasakusse nurka. {{ui:Uuenda jooniseid}} ja {{ui:Avalda PDF-ina}} hoiavad selle ajakohasena. See on üks plokk, `CC_SHEETLIST`: liiguta seda nagu iga ploki viidet.

## Avalda komplekt

{{ui:Avalda PDF-ina}} teeb ühe PDF-i, kus on leht iga lehe kohta, komplekti järjekorras, igaühe enda paberisuuruses, ja järjehoidja iga lehe kohta („A-101 — Korruse plaan“). Kui on valitud alamkomplekt, küsib CadCraft, kas avaldada ainult see alamkomplekt. PDF-i tiitliplokid täidetakse komplektist isegi enne, kui joonised uuendad; avaldamine joonised ei muuda. PDF laaditakse alla.

{{ui:Avalda DWG-na…}} kirjutab iga lehe eraldi DWG-na (DWG 2018): mudel ja see üks leht, tema tiitliplokk täidetud komplektist, nimetatud numbri ja pealkirja järgi (`A-101 Korruse plaan.dwg`). Vali {{ui:DWG}} või {{ui:DWG + PDF}}, et komplekti PDF oleks nende kõrval. `publish.json` loetleb iga faili koos suuruse ja SHA-256-ga. Kui komplekti kausta saab kirjutada (CadCraft Studio või brauseris valitud kaust), lähevad failid kausta `<set name> - published`; muidu laaditakse need alla ühe zip-failina. Vaateakna [klassi ülekirjutused](topic:viewport-overrides) tulevad igasse DWG-sse kaasa.

## Arhiveeri komplekt

{{ui:Arhiivi zip-failina}} pakib komplektifaili, iga joonise, mida komplekt kasutab, ja selle, mida need joonised lingivad (lingitud joonised ja nende omad omakorda, ning pildid), säilitades nende kaustad, plus `Transmittal.txt`, mis loetleb iga faili. Link, mis ei asu komplekti kaustas, loetletakse seal puuduvana. Linke leitakse joonisest tema tee järgi, siis nime järgi kogu kaustast.

## Komplektifail

`.ccsheets`-fail on JSON, mida saab lugeda igas tekstiredaktoris:

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

Teed on komplekti kausta suhtes, kaustade vahel `/`. CadCraft kontrollib faili avamisel: absoluutne tee, leht ilma failita või paigutuseta või tekst, mis ei ole tavaline tekst, jäetakse välja ja ajalugu ütleb seda.

## Tõrkeotsing

| Mida näed | Miks | Mida teha |
|---|---|---|
| „This folder is read only here“ („Seda kausta ei saa siin kirjutada“) | Brauser ei saa kaustas kirjutada | Kasuta Chrome'i või Edge'i või töölauarakendust; vahepeal hoiab {{ui:Laadi komplektifail alla}} su muudatused alles |
| Leht jäetakse PDF-ist välja: „has no layout named …“ („lehel pole paigutust nimega …“) | Lehe paigutus nimetati ümber või eemaldati joonisest | Ava joonis ja kontrolli selle vahelehti; eemalda leht ja lisa uuesti |
| Tiitliplokk jääb tühjaks | Selle atribuutidel on muud sildid | Nimeta atribuutide sildid ümber ülal olevate väljanimedeks (BEDIT) |
| „already has a layout named … so that tab was not renamed“ („on juba paigutus nimega …, seega seda vahelehte ei nimetatud ümber“) | Kaks ühe joonise lehte saaksid sama vahelehe nime | Anna ühele neist teine number või pealkiri |

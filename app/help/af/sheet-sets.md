---
title: Bladstelle
summary: Bring blaaie uit baie tekeninge saam in een genommerde lys, vul hul titelblokke uit die stel, publiseer hulle as een PDF en argiveer die stel as 'n zip.
keywords: bladstel, bladstelbestuurder, ssm, sheetset, ccsheets, dst, bladlys, bladindeks, titelblok, velde, publiseer, hernommer, argief, etransmit, transmittal, substelle, dekblad, tekeninglys
from: 2c855720
---

## Wat jy sal leer

Hoe om blaaie (uitlegte) uit verskeie tekeninglêers in 'n **bladstel** bymekaar te maak, hulle te nommer en te titel, hul titelblokke vir jou te laat invul, die hele stel as een PDF te publiseer, en alles in een zip te pak om te stuur.

'n Bladstel woon in sy eie klein lêer, `<naam>.ccsheets`, in die vouer wat die tekeninge hou. Die stellêer lys die blaaie met paaie vanaf daardie vouer, so jy kan die hele vouer skuif of kopieer.

:::note
Om 'n vouer oop te maak om te lees en te skryf, het Chrome of Edge nodig (hulle kan 'n bladsy laat werk in 'n vouer wat jy kies), of die rekenaarprogram. Ander blaaiers maak 'n stel net-lees oop: jy kan dit besigtig en publiseer, en die stellêer laai af in plaas van om te stoor.
:::

## Begin 'n stel

1. Vind die {{ui:Bladstel}}-afdeling in die linkerpaneel, en maak sy {{ui:Stel}}-kieslys oop. Om {{cmd:SHEETSET}} (of `SSM`) te tik, bring jou ook daarheen.
2. Kies {{ui:Nuwe stel…}}. Gee die stel 'n naam, en as jy wil, die projeknaam en -nommer.
3. Kies die vouer wat die tekeninge hou. Die stellêer word daar gestoor.

Om 'n stel later oop te maak, kies {{ui:Maak stel oop…}} en kies dieselfde vouer. As die vouer meer as een stel hou, vra CadCraft watter een.

## Voeg blaaie by

1. Kies {{ui:Voeg blaaie uit 'n tekening by…}} en kies een van die tekeninge in die vouer.
2. CadCraft lees daardie tekening op die agtergrond (dit maak nie op die skerm oop nie) en lys sy blaaie. Merk die wat jy wil hê en klik {{ui:OK}}.
3. Kies 'n blad en druk {{key:F2}} (of {{ui:Hernoem en hernommer…}}) om dit 'n nommer en 'n titel te gee, soos `A-101` en `Vloerplan`.

{{ui:Nuwe blad uit sjabloon…}} maak 'n nuwe tekening uit 'n ander tekening se blad (sy titelblok en aansigvensters), genoem na die nuwe blad, en voeg dit by. Die stel onthou die tekening wat jy as sjabloon gebruik het.

## Rangskik die stel

- **Substelle** groepeer blaaie, soos Argitektonies › Planne: kies waar dit moet gaan en kies {{ui:Nuwe subset…}}.
- **Volgorde**: sleep 'n blad na 'n ander plek in die lys, of op 'n subset om dit daarheen te skuif. Met die sleutelbord, kies dit en druk {{key:Alt+Up}} of {{key:Alt+Down}}.
- **Maak 'n blad oop**: dubbelklik daarop (of druk {{key:Enter}}). Die tekening maak oop in sy eie oortjie, op daardie blad.
- **Verwyder**: kies dit en druk {{key:Delete}}. Die tekening self word nie verander nie.
- **Ontdoen**: {{ui:Ontdoen stelveranderting}} en {{ui:Herdoen stelveranderting}} blaai deur wat jy in die stel verander het.
- **Hernommer**: {{ui:Hernommer blaaie…}} nommer elke blad, of een subset se, in die volgorde van die lys: 'n voorvoegsel, 'n begin en 'n stap (`A-` en `101` gee A-101, A-102 …).

Elke verandering word dadelik in die stellêer gestoor.

## Nommer blaaie uit hul velde

In plaas daarvan om blaaie met die hand te nommer, laat 'n reël elke nommer uit die blad se velde bou, sodat 'n blad wat na 'n ander vlak of dissipline skuif sy nuwe nommer self kry.

1. Gee elke blad sy velde: kies dit, klik {{ui:Hernoem…}} en skryf in {{ui:Velde van hierdie blad}}, een per reël, byvoorbeeld `DISCIPLINE = A` en `LEVEL = 1`. 'n Veld wat die hele stel deel (sê `DISCIPLINE = A`) kan in die stel se {{ui:Eienskappe…}} gaan.
2. Maak die paneel se kieslys oop en klik {{ui:Nommereringsreël…}}.
3. Skryf die reël, byvoorbeeld `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` tel op onder die blaaie waarvan die ander velde dieselfde lees, so vlak 1 kry A-101, A-102 en vlak 2 begin weer by A-201. `{SEQ:2}` skryf dit met twee syfers; `{SUBSET}` is die naam van die subset waarin 'n blad is.
4. Kies wat gebeur wanneer 'n veld verander: {{ui:Nommer die blaaie weer}} hou die nommers by die reël na elke verandering; die ander keuse nommer hulle een keer, nou.

Die reël word in die stellêer gestoor. Terwyl dit self hernommer, verander 'n blad se velde eerder as sy nommer.

## Vul titelblokke uit die stel

'n Titelblok kry sy teks uit die stel wanneer sy eienskappe met 'n veld se naam getag is:

| Etiket | Wat dit wys |
|---|---|
| `SHEETNUMBER` (of `SHEET_NO`, `DWG_NO`) | Die blad se nommer |
| `SHEETTITLE` (of `TITLE`, `SHEET_TITLE`) | Die blad se titel |
| `SHEETDESC` | Die blad se beskrywing |
| `PROJECTNAME` (of `PROJECT`) | Die projeknaam |
| `PROJECTNUMBER` (of `PROJECT_NO`, `JOB_NO`) | Die projeknommer |
| `SHEETSETNAME` | Die stel se naam |
| `SHEETINDEX`, `SHEETCOUNT` | "3 van 12", en 12 |
| Jou eie, soos `CLIENT` | Wat jy daarvoor in {{ui:Stel velde…}} geskryf het |

{{ui:Stel velde…}} hou die projeknaam en -nommer en jou eie velde, een per reël as `NAAM = waarde`.

{{ui:Dateer tekeninge op}} skryf die nommers, titels en velde in die titelblokke van elke tekening in die stel, en hernoem elke blad se uitlegoortjie soos die stel sê (standaard nommer en titel, soos `A-101 Vloerplan`; {{ui:Stel velde…}} › {{ui:Name van uitlegoortjies}} verander dit). Elke tekening word op sy plek gestoor, in sy eie formaat en weergawe. Na jy blaaie hernommer of hernoem, voer dit weer uit, dan volg die oortjies en titelblokke.

## 'n Bladlys op die dekblad

Kies die dekblad in die lys en kies {{ui:Plaas die bladlys op hierdie blad}}. 'n Tabel van elke blad (nommer en titel, onder sy subset) kom in die blad se boonste linkerhoek. {{ui:Dateer tekeninge op}} en {{ui:Publiseer na PDF}} hou dit op datum. Dit is een blok, `CC_SHEETLIST`: skuif dit soos enige blokverwysing.

## Publiseer die stel

{{ui:Publiseer na PDF}} maak een PDF met 'n bladsy per blad, in die stel se volgorde, op elke blad se eie papiergrootte, met 'n boekmerk per blad ("A-101 — Vloerplan"). Met 'n subset gekies, vra CadCraft of dit net daardie subset moet publiseer. Die titelblokke in die PDF word uit die stel ingevul, selfs voordat jy die tekeninge opdateer; die tekeninge self word nie deur publiseer verander nie. Die PDF laai af.

{{ui:Publiseer na DWG…}} skryf elke blad as sy eie DWG (DWG 2018): die model en daardie een blad, met sy titelblok uit die stel ingevul, genoem na sy nommer en titel (`A-101 Verdieping 1 vloerplan.dwg`). Kies {{ui:DWG}}, of {{ui:DWG + PDF}} vir die stel se PDF langs hulle. 'n `publish.json` lys elke lêer met sy grootte en SHA-256. Wanneer die stel se vouer geskryf kan word (CadCraft Studio, of 'n vouer wat jy in die blaaier gekies het), gaan die lêers in 'n vouer `<stelnaam> - gepubliseer`; andersins laai hulle af as een zip. [Klasoorskrywings van aansigvensters](topic:viewport-overrides) kom in elke DWG saam.

## Argiveer die stel

{{ui:Argiveer as zip}} pak die stellêer, elke tekening wat dit gebruik en wat daardie tekeninge skakel (gekoppelde tekeninge, en hulle op hul beurt, en prente), met hul vouers behou, plus 'n `Transmittal.txt` wat elke lêer lys. 'n Skakel wat nie in die stel se vouer is nie, word daar as ontbrekend gelys. Skakels word gevind volgens hul pad vanaf die tekening, dan volgens hul lêernaam êrens in die vouer.

## Die stellêer

Die `.ccsheets`-lêer is JSON wat jy in enige teksredigeerder kan lees:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside-kliniek",
  "properties": { "PROJECTNAME": "Riverside-kliniek", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Planne", "sheets": [
    { "id": "p1", "file": "plans/Verdieping 1.dwg", "layout": "A-101 Verdieping 1 vloerplan", "number": "A-101", "title": "Verdieping 1 vloerplan" }
  ] } ]
}
```

Paaie is relatief tot die stel se vouer, met `/` tussen vouers. CadCraft kyk die lêer wanneer dit dit oopmaak: 'n absolute pad, 'n blad sonder lêer of uitleg, of teks wat nie gewone teks is nie, word weggelaat, en die geskiedenis sê so.

## Foutoplossing

| Wat jy sien | Waarom | Wat om te doen |
|---|---|---|
| "Hierdie vouer is hier net-lees" | Die blaaier kan nie in 'n vouer skryf nie | Gebruik Chrome of Edge, of die rekenaarprogram; ondertussen hou {{ui:Laai die stellêer af}} jou veranderinge |
| 'n Blad word uit die PDF gelaat: "het geen uitleg met die naam … nie" | Die blad se uitleg is in sy tekening hernoem of verwyder | Maak die tekening oop en kontroleer sy oortjies; verwyder die blad en voeg dit weer by |
| 'n Titelblok bly leeg | Sy eienskappe het ander etikette | Hernoem die eienskapsetikette na die veldname hierbo (BEDIT) |
| "het reeds 'n uitleg met die naam … so daardie oortjie is nie hernoem nie" | Twee blaaie van een tekening sou dieselfde oortjienaam kry | Gee een van hulle 'n ander nommer of titel |

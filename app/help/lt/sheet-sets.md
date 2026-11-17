---
title: Lapų rinkiniai
summary: Surinkite lapus iš daugelio brėžinių į vieną sunumeruotą sąrašą, užpildykite jų antraštės blokus iš rinkinio, publikuokite visus kaip vieną PDF ir suarchyvuokite rinkinį zip faile.
keywords: lapų rinkinys, lapų rinkinio tvarkyklė, ssm, sheetset, ccsheets, dst, lapų sąrašas, lapų indeksas, antraštės blokas, laukai, publikavimas, pernumeravimas, archyvavimas, etransmit, perdavimo lapas, poaibiai, viršelio lapas, brėžinių sąrašas
from: 2c855720
---

## Ko išmoksite

Kaip surinkti lapus (maketus) iš kelių brėžinių failų į **lapų rinkinį**, sunumeruoti ir pavadinti juos, leisti, kad jų antraštės blokai būtų užpildomi automatiškai, publikuoti visą rinkinį kaip vieną PDF ir supakuoti viską į vieną zip failą siuntimui.

Lapų rinkinys gyvena savo mažame faile `<name>.ccsheets` aplanke, kuriame yra brėžiniai. Rinkinio faile lapai išvardijami keliais nuo to aplanko, todėl galite perkelti ar kopijuoti visą aplanką.

:::note
Aplanko atidarymui skaitymui ir rašymui reikia Chrome arba Edge (jos gali leisti puslapiui dirbti pasirinktame aplanke) arba darbalaukio programos. Kitos naršyklės atidaro rinkinį tik skaitymui: galite jį peržiūrėti ir publikuoti, o rinkinio failas atsisiunčiamas vietoj įrašymo.
:::

## Pradėkite rinkinį

1. Kairiajame skydelyje raskite skyrių {{ui:Lapų rinkinys}} ir atidarykite jo meniu {{ui:Rinkinys}}. Įvedus {{cmd:SHEETSET}} (arba `SSM`) taip pat patenkama ten.
2. Pasirinkite {{ui:Naujas rinkinys…}}. Suteikite rinkiniui pavadinimą ir, jei norite, projekto pavadinimą bei numerį.
3. Pasirinkite aplanką, kuriame yra brėžiniai. Rinkinio failas įrašomas ten.

Kad vėliau atidarytumėte rinkinį, pasirinkite {{ui:Atidaryti rinkinį…}} ir nurodykite tą patį aplanką. Jei aplanke yra daugiau nei vienas rinkinys, CadCraft klausia, kurį.

## Pridėkite lapus

1. Pasirinkite {{ui:Pridėti lapus iš brėžinio…}} ir nurodykite vieną iš aplanko brėžinių.
2. CadCraft skaito tą brėžinį fone (jis neatidaromas ekrane) ir išvardija jo lapus. Pažymėkite norimus ir spustelėkite {{ui:Gerai}}.
3. Pasirinkite lapą ir paspauskite {{key:F2}} (arba {{ui:Pervardyti ir pernumeruoti…}}), kad suteiktumėte jam numerį ir pavadinimą, pavyzdžiui, `A-101` ir `Aukšto planas`.

{{ui:Naujas lapas iš šablono…}} sukuria naują brėžinį iš kito brėžinio lapo (jo antraštės bloko ir vaizdo langų), pavadintą pagal naują lapą, ir jį pridėja. Rinkinys prisimena brėžinį, kurį naudojote kaip šabloną.

## Sutvarkykite rinkinį

- **Poaibiai** sugrupuoja lapus, pavyzdžiui, Architektūra › Planai: pasirinkite vietą, kur jis turi būti, ir pasirinkite {{ui:Naujas poaibis…}}.
- **Tvarka**: įvilkite lapą į kitą vietą sąraše arba ant poaibio, kad perkeltumėte jį ten. Klaviatūra: pasirinkite jį ir paspauskite {{key:Alt+Up}} arba {{key:Alt+Down}}.
- **Atidaryti lapą**: dukart spustelėkite jį (arba paspauskite {{key:Enter}}). Jo brėžinys atsidaro savame skirtuke, tame lape.
- **Pašalinti**: pasirinkite jį ir paspauskite {{key:Delete}}. Pats brėžinys nekeičiamas.
- **Anuliuoti**: {{ui:Anuliuoti rinkinio pakeitimą}} ir {{ui:Perdaryti rinkinio pakeitimą}} žingsniais keičia tai, ką pakeitėte rinkinyje.
- **Pernumeruoti**: {{ui:Pernumeruoti lapus…}} sunumeruoja kiekvieną lapą arba vieno poaibio lapus pagal sąrašo tvarką: priešdėlis, pradžia ir žingsnis (`A-` ir `101` duoda A-101, A-102 …).

Kiekvienas pakeitimas iš karto įrašomas rinkinio faile.

## Numeruokite lapus pagal jų laukus

Vietoj rankinio numeravimo leiskite taisyklei sudaryti kiekvieną numerį iš lapo laukų, kad lapas, perkeltas į kitą aukštą ar discipliną, pats gautų naują numerį.

1. Kiekvienam lapui nustatykite jo laukus: pasirinkite jį, spustelėkite {{ui:Pervardyti…}} ir {{ui:Šio lapo laukai}} lauke po vieną eilutėje įrašykite, pavyzdžiui, `DISCIPLINE = A` ir `LEVEL = 1`. Lauką, bendrą visam rinkiniui (pavyzdžiui, `DISCIPLINE = A`), galima įrašyti rinkinio {{ui:Savybės…}}.
2. Atidarykite skydelio meniu ir spustelėkite {{ui:Numeracijos taisyklė…}}.
3. Įrašykite taisyklę, pavyzdžiui, `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` skaičiuoja didėjančiai tarp lapų, kurių kiti laukai vienodi, todėl lygis 1 gauna A-101, A-102, o lygis 2 vėl prasideda nuo A-201. `{SEQ:2}` rašo du skaitmenis; `{SUBSET}` yra poaibio, kuriame yra lapas, pavadinimas.
4. Pasirinkite, kas nutinka pakeitus lauką: {{ui:Pernumeruoti lapus}} po kiekvieno pakeitimo laiko numerius pagal taisyklę; kitas pasirinkimas sunumeruoja juos vieną kartą, dabar.

Taisyklė įrašoma rinkinio faile. Kol ji pernumeruoja savarankiškai, keiskite lapo laukus, o ne jo numerį.

## Užpildykite antraštės blokus iš rinkinio

Antraštės blokas gauna tekstą iš rinkinio, kai jo atributai pažymėti lauko pavadinimu:

| Žymė | Ką rodo |
|---|---|
| `SHEETNUMBER` (arba `SHEET_NO`, `DWG_NO`) | Lapo numeris |
| `SHEETTITLE` (arba `TITLE`, `SHEET_TITLE`) | Lapo pavadinimas |
| `SHEETDESC` | Lapo aprašymas |
| `PROJECTNAME` (arba `PROJECT`) | Projekto pavadinimas |
| `PROJECTNUMBER` (arba `PROJECT_NO`, `JOB_NO`) | Projekto numeris |
| `SHEETSETNAME` | Rinkinio pavadinimas |
| `SHEETINDEX`, `SHEETCOUNT` | "3 iš 12" ir 12 |
| Jūsų pačių, pavyzdžiui, `CLIENT` | Ką įrašėte jam {{ui:Nustatyti laukus…}} |

{{ui:Nustatyti laukus…}} laiko projekto pavadinimą ir numerį bei jūsų pačių laukus, kiekvieną eilutėje kaip `NAME = value`.

{{ui:Atnaujinti brėžinius}} įrašo numerius, pavadinimus ir laukus į visų rinkinio brėžinių antraštės blokus ir pervadina kiekvieno lapo maketo skirtuką pagal rinkinį (pagal numatytuosius – numeris ir pavadinimas, pavyzdžiui, `A-101 Aukšto planas`; {{ui:Nustatyti laukus…}} › {{ui:Maketo skirtukų pavadinimai}} tai keičia). Kiekvienas brėžinys įrašomas savo vietoje, savo formatu ir versija. Pernumeravę ar pervardiję lapus, paleiskite jį dar kartą, ir skirtukai bei antraštės blokai atsinaujins.

## Lapų sąrašas viršelio lape

Pasirinkite viršelio lapą sąraše ir pasirinkite {{ui:Įdėti lapų sąrašą į šį lapą}}. Lentelė su visais lapais (numeris ir pavadinimas, po jų poaibiu) įdedama į viršutinį kairįjį lapo kampą. {{ui:Atnaujinti brėžinius}} ir {{ui:Publikuoti į PDF}} ją atnaujina. Tai vienas blokas, `CC_SHEETLIST`: perkelkite jį kaip bet kurią blokinę nuorodą.

## Publikuokite rinkinį

{{ui:Publikuoti į PDF}} sukuria vieną PDF su puslapiu kiekvienam lapui, rinkinio tvarka, kiekvieno lapo savo popieriaus dydžiu, su žymelę kiekvienam lapui („A-101 — Aukšto planas“). Pasirinkus poaibį, CadCraft klausia, ar publikuoti tik jį. PDF antraštės blokai užpildomi iš rinkinio net prieš atnaujinant brėžinius; pats publikavimas brėžinių nekeičia. PDF atsisiunčiamas.

{{ui:Skelbti į DWG…}} įrašo kiekvieną lapą atskirai kaip DWG (DWG 2018): modelį ir tą vieną lapą, su antraštės bloku, užpildytu iš rinkinio, pavadintą pagal numerį ir pavadinimą (`A-101 Level 1 floor plan.dwg`). Pasirinkite {{ui:DWG}} arba {{ui:DWG + PDF}}, kad šalia būtų ir rinkinio PDF. `publish.json` išvardija kiekvieną failą su dydžiu ir SHA-256. Kai rinkinio aplankas gali būti įrašomas (CadCraft Studio arba aplankas, kurį pasirinkote naršyklėje), failai įrašomi į aplanką `<set name> - published`; kitaip jie atsisiunčiami viename zip faile. Vaizdo langų [klasių perrašymai](topic:viewport-overrides) patenka į kiekvieną DWG.

## Suarchyvuokite rinkinį

{{ui:Archyvuoti kaip zip}} supakuoja rinkinio failą, kiekvieną naudojamą brėžinį ir tai, į ką tie brėžiniai nurodo (susietus brėžinius, o jų – savo ruožtu, ir paveikslėlius), išlaikydamas jų aplankus, bei `Transmittal.txt`, kuriame išvardijamas kiekvienas failas. Nuoroda, kurios nėra rinkinio aplanke, ten nurodoma kaip trūkstama. Nuorodos randamos pagal jų kelią nuo brėžinio, o po to pagal failo pavadinimą bet kurioje aplanko vietoje.

## Rinkinio failas

`.ccsheets` failas yra JSON, kurį galite perskaityti bet kuriame teksto redaktoriuje:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside klinika",
  "properties": { "PROJECTNAME": "Riverside klinika", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Planai", "sheets": [
    { "id": "p1", "file": "plans/Aukštas 1.dwg", "layout": "A-101 Aukšto planas", "number": "A-101", "title": "Aukšto planas" }
  ] } ]
}
```

Keliai yra santykiniai rinkinio aplanko atžvilgiu, aplankai atskiriami `/`. CadCraft tikrina failą jį atidarydamas: absoliutus kelias, lapas be failo ar maketo arba tekstas, kuris nėra paprastas tekstas, praleidžiami, o istorijoje apie tai pranešama.

## Trikčių šalinimas

| Ką matote | Kodėl | Ką daryti |
|---|---|---|
| "Šis aplankas čia tik skaitymui" | Naršyklė negali rašyti į aplanką | Naudokite Chrome arba Edge arba darbalaukio programą; tuo tarpu {{ui:Atsisiųsti rinkinio failą}} išsaugo jūsų pakeitimus |
| Lapas praleistas PDF: "nėra maketo pavadinimu …" | Lapo maketas buvo pervadintas arba pašalintas jo brėžinyje | Atidarykite brėžinį ir patikrinkite jo skirtukus; pašalinkite lapą ir pridėkite jį iš naujo |
| Antraštės blokas lieka tuščias | Jo atributai turi kitas žymas | Pervardykite atributų žymas į aukščiau nurodytus laukų pavadinimus (BEDIT) |
| "jau turi maketą pavadinimu … todėl skirtukas nepervadintas" | Du vieno brėžinio lapai gautų tą patį skirtuko pavadinimą | Vienam iš jų suteikite kitą numerį arba pavadinimą |

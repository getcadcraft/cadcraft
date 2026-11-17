---
title: Skata pagriešana un jūsu koordinātas (UCS)
summary: Pagrieziet skatu par 90° vai jebkuru leņķi, neko nepārvietojot zīmējumā, un iestatiet lietotāja koordinātu sistēmu (UCS), lai punkti, ortogonālais režīms, polārā izsekošana, režģis un jaunais teksts sekotu ēkas pašām asīm.
keywords: ucs, lietotāja koordinātu sistēma, plāns, pagriezt skatu, griezt skatu, skata pagrieziens, ucs z, ucs 3point, ucs object, ucs world, nosauktā ucs, ucsfollow, turnleft, turnright, turnworld, slīpa ēka, pagriezts režģis
from: 6f152c65
---

## Ko jūs iemācīsieties

Kā skatīt zīmējumu pagrieztu, lai slīpi uzzīmēta ēka ekrānā izskatītos taisna, un kā ierakstīt punktus pa tās pašām asīm. Nekas zīmējumā šajā laikā nepārvietojas: objekti saglabā savas koordinātas, pagriezums nav labojums, un zīmējums netiek atzīmēts kā mainīts.

## Pagriezt skatu par ceturtdaļu

1. Noklikšķiniet {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Pagriezt skatu par 90° pa kreisi}} vai {{ui:Pagriezt skatu par 90° pa labi}}.

Zīmējums ekrānā pagriežas ap zīmēšanas laukuma vidu. Atkārtojiet, lai turpinātu griezt.

2. Noklikšķiniet {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Atpakaļ pasaulē}}, lai to atkal izlīdzinātu.

Komandas, kas stāv aiz tiem, ir {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} un {{cmd:TURNWORLD}}. Lai tai piešķirtu taustiņu, pievienojiet rindu, piemēram, `TL=TURNLEFT`, saviem aizstājvārdiem ar {{cmd:ALIASEDIT}}.

## Izlīdzināšana ar slīpu ēku

1. Ierakstiet `UCS` un nospiediet {{key:Enter}}, tad `OB` un {{key:Enter}}.
2. Noklikšķiniet sienas līniju tuvu galam, kuram jābūt sākumpunktam.

UCS tagad sākas šajā galā, ar X asi pa sienu, un skats pagriežas tā, lai siena ekrānā būtu horizontāla. Ass ikona apakšējā kreisajā stūrī rāda, kurp vērsta UCS asis.

3. Zīmējiet kā parasti. Ar iestatītu UCS:
   - `x,y` un `@dx,dy` tiek mērīti pa UCS asīm; `d<a` mēra leņķi no UCS X ass.
   - {{ui:Ortogonāli}}, polārā izsekošana un režģis seko UCS asīm, tāpat kā krustiņš.
   - Jaunais teksts un jaunās rindkopas iet pa UCS X asi; arī {{cmd:DIMLINEAR}} horizontāle un vertikāle seko tai.
   - Koordinātas statusa joslā un no {{cmd:ID}} ir UCS koordinātas.
4. Lai ievadītu pasaules punktu, kamēr UCS ir iestatīts, pirms tā ierakstiet `*`: `*0,0` vai `@*100,0`.
5. Ierakstiet `UCS`, {{key:Enter}}, tad vēlreiz {{key:Enter}}, lai atgrieztos pasaulē.

## Citi veidi, kā iestatīt UCS

Pie {{cmd:UCS}} uzvednes:

| Ierakstāt | Ko tas dara |
|---|---|
| punktu | Jauns sākumpunkts; tad noklikšķiniet punktu uz jaunās X ass, vai nospiediet {{key:Enter}}, lai paturētu leņķi |
| `Z` | Pagriež UCS ap tā sākumpunktu par leņķi, ko ierakstāt (grādi, pretēji pulksteņa rādītāja virzienam) vai izvēlaties |
| `3` (3point) | Sākumpunkts, punkts pozitīvās X ass virzienā un punkts pozitīvās Y puses pusē |
| `OB` (OBject) | No līnijas, loka, apļa, polilīnijas segmenta, teksta, bloka atsauces, punkta vai konstrukcijas līnijas |
| `P` (Previous) | UCS, kas bija pirms šī (pēdējie desmit tiek saglabāti, kamēr zīmējums ir atvērts) |
| `W` (World) | Atpakaļ pasaulē |
| `NA` (NAmed) | `S` saglabā pašreizējo UCS ar nosaukumu, `R` atjauno vienu, `D` dzēš vienu, `?` tās uzskaita |

Katra izmaiņa pagriež skatu tā, lai jaunā UCS X ass būtu horizontāla. {{cmd:PLAN}} pagriež skatu, nemainot UCS: {{key:Enter}} pašreizējam UCS, `U` saglabātam, `W` pasaulei.

## Lietderīgi zināt

- Katram sadalītā ekrāna logam ir savs pagrieziens. UCS pieder zīmējumam.
- Lapas darbojas papīra koordinātās; iestatiet UCS cilnē {{ui:Modelis}} vai skata logā.
- Atlases logi, ko velkat pagrieztā skatā, atlasa to, kas ekrānā atrodas iekšpusē.
- LISP rutīnas saņem punktus UCS koordinātās no `getpoint`, var nolasīt `UCSORG`, `UCSXDIR`, `UCSYDIR` un `VIEWTWIST`, un `trans` pārvērš starp pasaules, UCS un ekrāna koordinātām.

:::note
Saglabāts fails nākamajā versijā glabās UCS un skata pagriezumu; līdz tam tie paliek spēkā, kamēr zīmējums ir atvērts.
:::

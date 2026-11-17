---
title: Mērvienības importējot: fails norāda savas vienības, vai arī jūs tiekat jautāts
summary: Kad fails, ko ievietojat zīmējumā, norāda savas mērvienības, CadCraft tās pārvērš un par to paziņo. Kad nenorāda, CadCraft jautā, pirms ko novieto, un atceras jūsu atbildi šim failam.
keywords: mērvienības, imports, ievietot, xref, pievienot, XATTACH, INSERT, OBJ, DWG, DXF, punktu mākonis, bibliotēkas vienums, milimetri, metri, collas, pēdas, mērogs, nepareizs izmērs, pārāk liels, pārāk mazs, 1000 reizes, jautāt, atcerēts, INSUNITS
from: 558f1293
---

## Ko jūs darīsiet

Ievietosiet failu zīmējumā un pārliecināsieties, ka tas ieiet pareizajā izmērā.

## Soļi

1. Ievietojiet failu kā parasti: `INSERT` › File, `XATTACH`, `POINTCLOUDATTACH` vai {{ui:Faili}} Bibliotēkas panelī.
2. Ja fails norāda savas vienības, nekas netiek jautāts. Komandrindā parādās, kādas vienības fails norāda, un mērogs, kas tiek izmantots, ja tās atšķiras no zīmējuma vienībām.
3. Ja nē, dialogs jautā **Units of** failam. Izvēlieties, kas ir viena vienība failā, un noklikšķiniet {{ui:Izmantot šīs mērvienības}}. Nekas netiek novietots, pirms atbildat.
4. {{ui:Atcelt}} (vai {{key:Esc}}) neievieto neko.

## Kuri faili norāda savas vienības

- **DWG un DXF**: zīmējuma ievietošanas vienības (`$INSUNITS`). Failam bez tām jautā.
- **Punktu mākoņi**: LAS un LAZ ar koordinātu sistēmu, E57, PTX un PLY norāda savas. Pārējiem jautā.
- **OBJ**: nekad nenorāda vienības. Jūs tiekat jautāts.
- **glTF un GLB**: metri, pēc paša formāta noteikuma.
- **Attēli**: tiem nav paša izmēra. `IMAGEATTACH` jautā platumu un piedāvā platumu, ko šim failam norādījāt iepriekš.
- **Skenējumi**: skenējums, kas norāda savu blīvumu (punkti collā), tiek ievietots savā patiesajā izmērā zīmējuma vienībās; `SCANATTACH` tomēr jautā platumu.
- **Punktu mākoņu papildinājums**: jautā, kad veidojat mākoni, kura fails nenorāda vienību, un marķē mākoņa skaitļus vienībā, ko tas nes.

## Lietderīgi zināt

- DWG vai DXF atvēršana kā savs zīmējums neko nejautā: komandrindā parādās, kādas vienības fails norāda vai ka nenorāda nevienas. Rekvizīti iestata zīmējuma vienības.
- Ja arī šim zīmējumam nav vienību, failu nevar pārvērst: tas tiek ievietots skaitlis pa skaitlim, un komandrindā par to tiek paziņots.
- Atbilde tiek atcerēta šim failam šajā datorā, visās CadCraft lietotnēs. Nākamreiz, kad tas tiek ievietots, jautājums netiek uzdots, un komandrindā parādās, ka tika izmantotas atceres vienības.
- Lai tiktu jautāts vēlreiz: komandu paletē ({{key:Mod+K}}) › **Ask again for the units of imported files**.

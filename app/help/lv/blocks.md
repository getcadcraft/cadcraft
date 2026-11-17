---
title: Bloku izveide un ievietošana
summary: Pārvērst uzzīmētas durvis blokā, ievietot to atkal citās vietās, mērogos un leņķos un sakārtot neizmantotos blokus.
keywords: bloks, bmake, ievietot, ddinsert, simbols, purge, explode, redefine, bāzes punkts, atsauce, count, bcount, specifikācija, csv, atribūti, datu izguve
from: 125a129d
---

## Ko jūs izveidosiet

Durvju simbols, pārvērsts blokā ar nosaukumu `DOOR-900`, un pēc tam ievietots trīs reizes: tā, kā uzzīmēts, pagriezts par 90 grādiem un atspoguļots.

Bloks ir nosaukta objektu grupa. Jūs to uzzīmējat vienreiz; katra vieta, kur to izmantojat, ir **bloka atsauce**, kas norāda uz vienu definīciju. Sadaļa {{ui:Bloki}} kreisajā panelī uzskaita rasējuma blokus un to, cik reižu katrs tiek izmantots.

## Uzzīmējiet durvis

1. Ierakstiet `L` un nospiediet {{key:Enter}}.
2. Ierakstiet `0,0` un nospiediet {{key:Enter}}.
3. Ierakstiet `@0,900` un nospiediet {{key:Enter}}, pēc tam vēlreiz nospiediet {{key:Enter}}. Tā ir durvju vērtne.
4. Ierakstiet `A` un nospiediet {{key:Enter}}.
5. Ierakstiet `C` un nospiediet {{key:Enter}}, lai vispirms norādītu centru.
6. Ierakstiet `0,0` un nospiediet {{key:Enter}} centram.
7. Ierakstiet `900,0` un nospiediet {{key:Enter}} sākuma punktam.
8. Ierakstiet `0,900` un nospiediet {{key:Enter}} beigu punktam. Tā ir atvēršanās līnija.
9. Noklikšķiniet {{ui:Robežas}}.

Loki iet pretēji pulksteņrādītāja virzienam no sākuma punkta līdz beigu punktam.

## Izveidojiet bloku

1. Ierakstiet `B` un nospiediet {{key:Enter}}, vai noklikšķiniet {{ui:Izveidot}} bloku grupā.
2. Pie `Enter block name` ierakstiet `DOOR-900` un nospiediet {{key:Enter}}.
3. Pie `Specify insertion base point` ierakstiet `0,0` un nospiediet {{key:Enter}}. Tas ir eņģes punkts: punkts, kas nonāk tur, kur novietojat bloku.
4. Pie `Select objects` velciet logu ap vērtni un loku.
5. Nospiediet {{key:Enter}}.

Vēsturē ir teksts `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Panelī {{ui:Bloki}} DOOR-900 ir uzskaitīts ar `1×` blakus: viena atsauce. Noklikšķiniet uz durvīm: tagad tās atlasās kā viens objekts, "Bloka atsauce".

:::tip
Jūs varat vispirms atlasīt objektus un tad ierakstīt `B`. CadCraft joprojām pajautā nosaukumu un bāzes punktu un pēc tam izmanto jūsu atlasi.
:::

## Ievietojiet bloku

1. Ierakstiet `I` un nospiediet {{key:Enter}}, vai noklikšķiniet {{ui:Ievietot}} blakus DOOR-900 panelī {{ui:Bloki}}.
2. Pie `Enter block name or [File/Library] <DOOR-900>` nospiediet {{key:Enter}}. (Paneļa poga {{ui:Ievietot}} aizpilda nosaukumu jūsu vietā.)
3. Durvis seko krustiņam. Noklikšķiniet, kur jābūt eņģei.

Parādās otras durvis.

## Ievietojiet pagrieztu vai mērogotu

1. Ierakstiet `I` un nospiediet {{key:Enter}}, pēc tam nospiediet {{key:Enter}}, lai apstiprinātu nosaukumu.
2. Pie `Specify insertion point [Scale/Rotate]` ierakstiet `R` un nospiediet {{key:Enter}}.
3. Ierakstiet `90` un nospiediet {{key:Enter}}. Priekšskatījums pagriežas.
4. Noklikšķiniet, lai novietotu.

Ierakstiet `S`, ja vēlaties iestatīt mēroga koeficientu; tas attiecas uz abiem virzieniem. Mērogs un pagriešana tiek atcerēti nākamajai ievietošanai. Lai atspoguļotu durvis, ievietojiet tās un pēc tam izmantojiet {{cmd:MIRROR}} uz atsauces.

## Mainiet novietotu bloku

Atlasiet bloka atsauci. Labajā panelī varat mainīt {{ui:X}}, {{ui:Y}}, {{ui:Mērogs X}}, {{ui:Mērogs Y}} un {{ui:Pagriešana}}. Negatīvs {{ui:Mērogs X}} to apgriež.

## Pārdefinējiet bloku

Lai vienlaikus mainītu visas durvis, izveidojiet bloku ar tādu pašu nosaukumu:

1. Uzzīmējiet jauno durvju versiju.
2. Ierakstiet `B` un nospiediet {{key:Enter}} un ierakstiet `DOOR-900`.
3. Pie `Block "DOOR-900" already exists. Redefine it?` ierakstiet `Y` un nospiediet {{key:Enter}}.
4. Norādiet bāzes punktu un atlasiet jaunos objektus kā iepriekš.

Katra atsauce uz DOOR-900 tagad rāda jauno versiju.

Vai rediģējiet pašu bloku: {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Rediģēt bloku}} ({{cmd:BEDIT}}) atver to atsevišķi, un {{ui:Saglabāt bloku}} to ieliek atpakaļ. Skatiet [Bloka atribūti](topic:attributes#change-a-block-the-block-editor).

## Saskaitiet blokus un eksportējiet specifikāciju

Ierakstiet {{cmd:COUNT}} (vai {{ui:Bloki}} › {{ui:Vairāk}} › {{ui:Saskaitīt blokus}}), tad:

- noklikšķiniet uz vienām durvīm: šajā telpā tiek atlasītas visas durvis, un vēsturē ir teikts, cik tādu ir šeit un visā rasējumā;
- vai nospiediet {{key:Enter}}: vēsture uzskaita visus blokus ar to skaitu, sākot ar lielāko;
- vai ierakstiet `E`, tad `C` CSV failam ar skaitiem (modelī, lapās, kopā), vai `A` vienai rindai katrai atsaucei ar tās slāni, pozīciju, pagriešanu un katru atribūta vērtību — specifikāciju, ko var atvērt izklājlapā.

Nenosauktie bloki (izmēri, tabulas) un atsauces citu bloku iekšienē netiek skaitītas. Šūnas, kas sākas kā formula (`=`, `+`, `-`, `@`), saņem vadošo `'`, lai izklājlapa tās rādītu kā tekstu.

## Sadaliet un attīriet

- {{cmd:EXPLODE}} (`X`) pārvērš atlasīto bloka atsauci atpakaļ atsevišķos objektos. Definīcija paliek.
- {{cmd:PURGE}} (`PU`) noņem bloku definīcijas, ko vairs nekas neizmanto. Vēsturē ir teikts, cik noņemts.

## Bloku nosaukumi

Nosaukums var būt līdz 255 rakstzīmēm garš un var saturēt atstarpes, bet tas nevar sākties ar zvaigznīti un nedrīkst saturēt `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` vai gravi. Kad saglabājat DXF R12, nosaukumi tiek rakstīti lielajiem burtiem; citas rakstzīmes, izņemot burtus, ciparus, `$`, `_` un `-`, kļūst par `_`, un nosaukumi tiek saīsināti līdz 31 rakstzīmei; vēsturē ir teikts, cik ir mainīts. Īsi nosaukumi lielajiem burtiem, ciparu un defisēm, piemēram, `DOOR-900`, paliek nemainīti. Saglabājot DWG, nosaukumi paliek tādi, kā jūs tos ierakstījāt, lielie un mazie burti; mainās tikai rakstzīmes, ko DWG neatļauj (`|` kļūst par `$0$`, citas par `_`).

## Ierakstiet bloku vai objektus atsevišķā failā

Ierakstiet `W` ({{cmd:WBLOCK}}) un izvēlieties **Objekti**, **Bloks** vai **Viss rasējums**. Rezultāts ir jauns DWG vai DXF, kurā ir tikai slāņi, stili un bloki, ko tas izmanto, ar jūsu bāzes punktu kā sākumu. Objektiem varat tos paturēt, pārvērst blokā vai izdzēst no šī rasējuma.

## Biežākās kļūdas

- **Bloks nonāca tālu no krustiņa.** Bāzes punkts nebija uz objektiem. Izveidojiet bloku vēlreiz, bāzes punktu novietojot uz stūra vai eņģes.
- **"No objects selected; nothing made."** Jūs nospiedāt {{key:Enter}}, pirms ko atlasījāt.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Ierakstiet `F`, lai ievietotu bloku no cita rasējuma, vai `L` bibliotēkai. Skatiet [Ievietošana no faila vai bibliotēkas](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Atstājiet skatlogu rāmjus ārpus atlases.

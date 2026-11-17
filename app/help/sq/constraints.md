---
title: Kufizo një vizatim
summary: Mbaj vijat horizontale, skajet bashkë dhe përmasat fikse me kufizime gjeometrike dhe përmasore, dhe lëre vizatimin të ndjekë kur ndryshon një përmasë.
keywords: kufizim, kufizime, parametrike, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, shkallë lirie, plotësisht i kufizuar
from: f8f21fa4
---

## Çfarë do të bëni

Një pllakë, gjerësia e së cilës e ndryshoni në një vend: anët e saj mbeten këndrrehtë, një qoshe qëndron në vend, lartësia e saj mbetet gjysma e gjerësisë.

Kufizimet punojnë mbi vija, polivija, rrathë, harqe dhe pika te skeda {{ui:Modeli}}. Çdo kufizim që shtoni është një hap zhbërjeje.

## Vizatoni dhe kufizoni konturin

1. Shkruani `REC` dhe shtypni {{key:Enter}}. Shkruani `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Shkruani `AUTOCONSTRAIN` dhe shtypni {{key:Enter}}. Shkruani `ALL`, {{key:Enter}}, pastaj {{key:Enter}} edhe një herë.

   Historiku thotë "4 constraints applied" (4 kufizime u zbatuan). Kutiza të vogla me **H** dhe **V** shfaqen pranë anëve: këto janë shiritat e kufizimeve.
3. Shkruani `GCFIX` dhe shtypni {{key:Enter}}. Klikoni afër qoshes së poshtme majtas. Shfaqet një kuti me ⊕: ajo qoshe mbetet aty ku është.

`AUTOCONSTRAIN` shton kufizime bashkëpikëse aty ku skajet pothuajse takohen, dhe kufizime horizontale ose vertikale aty ku vijat janë pothuajse të niveluara ose pingule. Shkruani `S` te kërkesa e tij për të ndryshuar sa afër duhet të jenë (0.05 njësi vizatimi dhe 1° për të nisur).

## Shtoni madhësitë

1. Shkruani `DCHORIZONTAL` dhe shtypni {{key:Enter}}.
2. Klikoni afër qoshes së poshtme majtas, pastaj afër qoshes së poshtme djathtas.
3. Klikoni poshtë drejtkëndëshit për vijën e përmasës.
4. Kërkesa shfaq `Dimension text <d1=100>`. Shkruani `width=120` dhe shtypni {{key:Enter}}.

   Drejtkëndëshi tani është 120 i gjerë, dhe etiketa lexon `width=120`.
5. Shkruani `DCVERTICAL` dhe shtypni {{key:Enter}}, shkruani `O` dhe shtypni {{key:Enter}}, pastaj klikoni anën e djathtë.
6. Klikoni djathtas saj, shkruani `width/2` dhe shtypni {{key:Enter}}.

   Është 60 e lartë. Etiketa lexon `fx: d1=width/2`: një shprehje e drejton atë.

Historiku tani thotë se kontura është plotësisht e kufizuar. Për ta ndryshuar madhësinë, ndryshoni `width` (shihni [Përdorni parametrat dhe ekuacionet](topic:parameters)), ose klikoni dy herë etiketën `width=120`, shkruani një vlerë të re dhe zgjidhni {{ui:Zbato}}.

## Zhvendosja e objekteve të kufizuara

Zhvendosja, rrotullimi, shkallëzimi, grip-et dhe paneli i Vetive i mbajnë të gjitha kufizimet: ajo që zhvendosët mbahet, dhe pjesa tjetër ndjek. Kur kufizimet nuk mund të ndjekin, ndryshimi nuk bëhet dhe historiku thotë arsyen, për shembull "Nuk u bë: kufizimet e mbajnë atë objekt aty ku është". Fshirja e një objekti heq me të edhe kufizimet e tij.

## Pasqyroni dhe prisni objekte të kufizuara

- {{cmd:MIRROR}} kopjon kufizimet mes objekteve që pasqyrohen mbi kopjet. Anët (nga cila anë prek një tangjente, në cilën anë matet një distancë) llogariten përsëri për kopjen e pasqyruar, dhe përmasat e kopjuara marrin emra të tyre, ashtu si bën ngjitja. Me `Y` te `Fshi objektet burimore`, kufizimet mbeten te objektet e pasqyruara. Historiku thotë sa kufizime erdhën me to.
- {{cmd:TRIM}} mban kufizimet e një vije ose harku mbi atë që mbetet: një kufizim te një skaj shkon te pjesa që ende e ka atë skaj, një rregull drejtimi ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Parallel}}, {{ui:Perpendicular}}) mbahet në çdo pjesë, dhe një përmasë mes dy skajeve të jashtme vazhdon t'i matë ato. Kufizimet që mbanin pjesën e prerë, ose një gjatësi që prerja e ndryshoi ({{ui:Equal}}, shtrirja e harkut), zhduken. Një rreth i prerë mban kufizimet e qendrës dhe rrezes së tij. Polivijat e prera i humbin kufizimet.

## Kufizimet

| Komanda | Mban |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | një vijë ose segment horizontal ose vertikal (`2P`: dy pika horizontale ose vertikale) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dy vija paralele, pingule ose në një vijë |
| {{cmd:GCCOINCIDENT}} | dy pika bashkë; `O`: një pikë mbi një vijë, rreth ose hark |
| {{cmd:GCTANGENT}} | një vijë dhe një rreth ose hark, ose dy prej tyre, që prekin njëri-tjetrin |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dy rrathë ose harqe me një qendër; dy gjatësi ose dy rreze të barabarta |
| {{cmd:GCSYMMETRIC}} | dy pika, vija ose rrathë të pasqyruar mbi një vijë |
| {{cmd:GCFIX}} | një pikë (klikoni afër saj) ose një objekt i tërë (`O`) aty ku është |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | një distancë |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | një rreze, një diametër, një kënd mes dy vijash ose këndi i një harku |

{{cmd:GEOMCONSTRAINT}} dhe {{cmd:DIMCONSTRAINT}} pyesin cilin prej tyre; {{ui:Kufizo}} dhe {{ui:Përmasa}} te grupi {{ui:Parametrike}} i ekzekutojnë, dhe {{ui:Më shumë}} aty i liston të gjithë. Aty ku klikoni zgjedh pjesën: një klikim afër një skaji, mesi ose një qendre merr atë pikë; një klikim mbi një polivijë merr segmentin nën të. Objekti i parë mbetet dhe i dyti zhvendoset për t'u takuar me të.

Një kufizim që bie ndesh me të tjerët, ose nuk shton asgjë sepse të tjerët e nënkuptojnë tashmë, refuzohet me një mesazh dhe asgjë nuk zhvendoset.

## Shihni, zgjidhni dhe hiqni

- Klikoni një kuti në një shirit kufizimesh (ose një katror bashkëpikës, ose një etiketë përmase) për të zgjedhur atë kufizim; historiku e emërton. Shtypni {{key:Delete}} për ta hequr.
- {{cmd:DELCONSTRAINT}} heq çdo kufizim nga objektet që zgjidhni.
- {{cmd:CONSTRAINTBAR}}: `S` shfaq çdo shirit, `H` i fsheh; zgjidhni më parë objektet për të shfaqur ose fshehur të tyret. {{ui:Më shumë}} ka {{ui:Shfaq shiritat e kufizimeve}} dhe {{ui:Fshih shiritat e kufizimeve}}.
- {{cmd:DCDISPLAY}} shfaq ose fsheh kufizimet përmasore. Ato nuk printohen kurrë.
- {{cmd:DCCONVERT}} i kthen përmasat e vizatuara mbi vija, rrathë dhe harqe në kufizime përmasore.

:::note
Nëse keni përdorur vizatimin parametrik të AutoCAD, emrat e komandave dhe kërkesat janë të njëjta. Kufizimet dhe parametrat ruhen në skedarë DWG dhe DXF në një formë që programet e tjera e injorojnë; shihni [Skedarët](topic:files#constraints-in-files).
:::

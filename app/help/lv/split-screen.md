---
title: Sadaliet ekrānu
summary: Rādiet zīmējumu divās, trijās vai četrās rūtīs ar savu tālummaiņu, novietojiet lapu blakus modelim un atveriet vairākus rasējumus blakus.
keywords: sadalīt, sadalīt ekrānu, rūtis, skata logi, viewports, izkārtot, blakus, kaudzē, divi rasējumi, cilnes, dokumentu cilnes, salīdzināt, atdalītājs, modelis un lapa, vairāki rasējumi, atvērti rasējumi
from: ee2f034b
---

## Ko jūs uzzināsiet

Kā vienlaikus skatīt vienu rasējumu vairākās rūtīs, katru ar savu tālummaiņu, un kā atvērt vairākus rasējumus un redzēt tos blakus.

## Sadaliet vienu rasējumu rūtīs

1. Atveriet rasējumu vai uzzīmējiet dažas līnijas un riņķus.
2. Atveriet {{ui:Skats}} › {{ui:Vairāk}} un izvēlieties {{ui:Sadalīt blakus}} (vai ierakstiet {{cmd:VPORTS}}, tad `2`, tad {{key:Enter}}).

Zīmēšanas apgabals sadalās divās rūtīs, abas rāda to pašu skatu. Aktīvā rūts ir ar zilu rāmi un saņem krustiņu.

3. Noklikšķiniet otrā rūtī. Tā kļūst aktīva. (Pirmais klikšķis tikai pārslēdz rūtis; noklikšķiniet vēlreiz, lai atlasītu.)
4. Tālummainiet ar riteni. Tālummainās tikai šī rūts.
5. Velciet līniju starp rūtīm, lai vienu padarītu platāku. {{key:Home}} uz fokusēta atdalītāja novieto to atpakaļ vidū.

{{cmd:VPORTS}} arī pieņem `3` (divas rūtis vienā pusē un liela otrā: `L` vai `R`), `4` un `SI`, lai atgrieztos pie vienas rūts. Aktīvās rūts skats tad aizpilda apgabalu. Lapā {{cmd:VPORTS}} tā vietā pievieno lapai skata logu (kā AutoCAD); tur ierakstiet {{cmd:SPLIT}} vai izmantojiet izvēlni Skats.

## Zīmējiet no vienas rūts otrā

1. Sadaliet blakus un tuviniet katru rūti uz citu rasējuma stūri.
2. Ierakstiet `L` un nospiediet {{key:Enter}}, un noklikšķiniet pirmo punktu kreisajā rūtī.
3. Vienreiz noklikšķiniet labajā rūtī, lai to padarītu aktīvu, un tad tajā noklikšķiniet otro punktu.

Līnija iet starp abām vietām. Komanda turpinās, kad mainat rūtis, un gumijas josla rādās katrā rūtī.

## Modelis blakus lapai

1. Sadaliet blakus.
2. Noklikšķiniet labo rūti un tad noklikšķiniet lapas cilni zem zīmējuma.

Labajā rūtī rādās lapa; kreisajā joprojām modelis. Katrai rūtij ir sava telpa, tāpēc varat zīmēt uz modeļa un skatīt, kā seko lapas skata logs.

## Vairāki rasējumi vienā logā

1. Atveriet rasējumu. Tad atveriet citu (vai nospiediet {{ui:New}}).

Katrs rasējums atveras savā cilnē virs zīmēšanas apgabala. Noklikšķiniet cilni, lai pārslēgtos; komandrinda, paneļi un atsaukšana seko rasējumam, uz kuru pārslēdzaties. {{key:Mod+C}} vienā rasējumā un {{key:Mod+V}} citā kopē objektus starp tiem.

2. Noklikšķiniet {{ui:Izvietot atvērtos rasējumus blakus}} (dalīšanas ikonu cilņu galā) vai kaudzes ikonu blakus tai.

Katrā rūtī tagad rāda vienu no atvērtajiem rasējumiem, līdz četriem. Noklikšķiniet rūti, lai strādātu tajā rasējumā.

3. Noklikšķiniet uz {{ui:×}} cilnē, lai aizvērtu šo rasējumu. Ja tam ir nesaglabātas izmaiņas, CadCraft vispirms jautā.

:::tip
Ja logā ir tikai jauns, neskarts rasējums, rasējuma atvēršana izmanto šo cilni, nevis pievieno jaunu.
:::

## Panoramēšana un tālummaiņa kopā

Lai salīdzinātu divas redakcijas, izvietojiet tās blakus un noklikšķiniet {{ui:Saistīt logu skatus}} (saites ikonu cilņu galā), vai izvēlieties to {{ui:Skats}} › {{ui:Vairāk}}, vai ierakstiet {{cmd:LINKVIEWS}} un `ON`. Tagad panoramēšana vai tālummaiņa vienā rūtī pārvieto katru rūti, kas rāda modeli (vai katru rūti, kas rāda lapu), uz to pašu vietu, tāpēc abi rasējumi paliek saskaņoti. {{cmd:LINKVIEWS}} `OFF` ļauj katrai rūtij atkal kustēties patstāvīgi.

## Biežākās kļūdas

- **Mans klikšķis neko nedarīja.** Tas padarīja šo rūti aktīvu. Noklikšķiniet vēlreiz, lai atlasītu vai zīmētu.
- **Ritenis tālummainīja nepareizu rūti.** Ritenis tālummaina rūti zem rādītāja un padara to aktīvu.
- **Rūtis atgriezās pie vienas.** Atverot rasējumu, tas rādās tādā veidā, kā tas tika saglabāts; rasējums, kas saglabāts bez rūtīm, atveras vienā.
- **Aiziešana brīdina par nesaglabātām izmaiņām, ko neredzu.** Citā cilnē ir rasējums ar izmaiņām. Pārslēdzieties uz to un saglabājiet vai aiziet, nesaglabājot.

---
title: Plāna izmēru uzlikšana
summary: Pievienojiet lineārus, paralēlus, leņķa, rādiusa un diametra izmērus, savienojiet tos ar Turpināt un Izmērs no bāzes un mainiet tekstu.
keywords: izmērs, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, ķēde, virkne, anotēt, izmēru rīks, kur, atrast, rīkjosla, mērīt, mm, cm, m, km, vienības
from: 9ee65123
---

## Ko jūs izveidosiet

Izmērītu telpu: kopējo platumu un augstumu, izmēru virkni gar vienu sienu, slīpu sienu, izliektu stūri un leņķi.

Pirms sākat, izlasiet [Iestatiet izmēru lielumus](topic:dimension-settings), ja jūsu zīmējums ir liels: izmēru teksts pēc noklusējuma ir 2.5 zīmējuma vienības augsts, kas milimetros mērītā zīmējumā ir sīks. Tālāk aprakstītajiem soļiem vispirms ierakstiet `DIMSCALE`, nospiediet {{key:Enter}}, ierakstiet `50` un nospiediet {{key:Enter}}.

## Kur ir izmēru rīki

Ar CadCraft izvēlņu stilu (to, ar kuru CadCraft sākas) izmēru rīki atrodas rīkjoslā virs zīmējuma, grupā {{ui:Annotate}} (Anotēt): {{ui:Linear}} (Lineārs), {{ui:Aligned}} (Paralēls), {{ui:Angle}} (Leņķis), {{ui:Radius}} (Rādiuss) un {{ui:Diameter}} (Diametrs). Grupas izvēlnē {{ui:More}} (Vairāk) ir {{ui:Continue dimension}} (Turpināt izmēru) un {{ui:Baseline dimension}} (Izmērs no bāzes). Turiet kursoru virs pogas, lai redzētu, ko tā dara.

- Ar izvēlņu stilu {{ui:Drafting classic}} (Klasiskais zīmēšanas stils) vai {{ui:Ribbon}} (Lente) atveriet cilni {{ui:Annotate}}: rīki atrodas tās panelī {{ui:Dimensions}} (Izmēri). {{ui:Drafting classic}} arī ir {{ui:Linear}} cilnē {{ui:Home}} (Sākums), zem {{ui:Annotation}} (Anotācija). Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).
- Vai ierakstiet komandu zem zīmējuma un nospiediet {{key:Enter}}: `DLI` (lineārs), `DAL` (paralēls), `DAN` (leņķis), `DRA` (rādiuss), `DDI` (diametrs), `DCO` (turpināt), `DBA` (no bāzes).
- Šaurā ekrānā rīkjosla ir vienā rindā: pavelciet to sāniski, lai sasniegtu {{ui:Annotate}}.

Lai garumus rādītu milimetros, centimetros, metros vai kilometros, skatiet [Izmēri mm, cm, m vai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Uzzīmējiet kaut ko, ko kotēt

1. Ierakstiet `PL` un nospiediet {{key:Enter}}.
2. Ierakstiet `0,0` un nospiediet {{key:Enter}}.
3. Ierakstiet `@6000,0` un nospiediet {{key:Enter}}.
4. Ierakstiet `@1500<60` un nospiediet {{key:Enter}}.
5. Ierakstiet `@0,2700` un nospiediet {{key:Enter}}.
6. Ierakstiet `@-6750,0` un nospiediet {{key:Enter}}.
7. Ierakstiet `C` un nospiediet {{key:Enter}}. Kontūra noslēdzas.
8. Ierakstiet `C` un nospiediet {{key:Enter}}, lai sāktu riņķi.
9. Noklikšķiniet telpas iekšpusē, tālu no sienām, lai izvēlētos centru.
10. Ierakstiet `600` un nospiediet {{key:Enter}}. Tā ir kolonna.
11. Noklikšķiniet {{ui:Extents}} (Robežas).

## Lineārs: horizontāls vai vertikāls

1. Ierakstiet `DLI` un nospiediet {{key:Enter}}.
2. Pie `Specify first extension line origin` piesaistiet apakšējam kreisajam stūrim (Galapunkts) un noklikšķiniet.
3. Pie `Specify second extension line origin` piesaistiet apakšējam labajam stūrim un noklikšķiniet.
4. Pārvietojiet krustiņu zem telpas. Izmērs seko, horizontāli.
5. Noklikšķiniet, lai novietotu izmēra līniju.

Vēsturē teikts `Dimension text = 6000`.

Kur novietojat līniju, nosaka virzienu: zem vai virs tās dod horizontālu izmēru, pa kreisi vai pa labi dod vertikālu. Lai to piespiestu, pirms novietošanas ierakstiet `H` (horizontāli), `V` (vertikāli) vai `R` (pagriezts, tad leņķis).

:::tip
Pirmajā uzvednē nospiediet {{key:Enter}}, nevis izvēlieties punktu, tad noklikšķiniet līniju, loku, riņķi vai polilīnijas segmentu. CadCraft ņem abus galus jūsu vietā.
:::

## Turpināt: izmēru virkne

{{cmd:DIMCONTINUE}} ({{ui:Annotate}} › {{ui:More}} › {{ui:Continue dimension}}, vai `DCO`) turpina no pēdējā lineārā vai paralēlā izmēra, ko izveidojāt, katrs jaunais sākas tur, kur beidzās iepriekšējais.

1. Ierakstiet `DLI` un nospiediet {{key:Enter}}.
2. Ierakstiet `0,0` un nospiediet {{key:Enter}} pirmajam sākumpunktam.
3. Ierakstiet `2000,0` un nospiediet {{key:Enter}} otrajam sākumpunktam.
4. Noklikšķiniet zem telpas, lai to novietotu.
5. Ierakstiet `DCO` un nospiediet {{key:Enter}}.
6. Ierakstiet `4500,0` un nospiediet {{key:Enter}}. Otrais izmērs seko pirmajam, tajā pašā līnijā.
7. Piesaistiet apakšējam labajam stūrim un noklikšķiniet. Trešais izmērs pabeidz virkni.
8. Nospiediet {{key:Enter}}, lai beigtu komandu.

:::note
Šeit punkti ir ierakstīti kā absolūtas koordinātas apzināti. `@` punkts skaita no pēdējā punkta, ko devāt, un pēdējais punkts ir vieta, kur novietojāt iepriekšējo izmēra līniju, nevis izmēra gals. Absolūti punkti, piesaiste vai kails attālums ar ieslēgtu {{ui:Ortho}} izmēru virknē ir drošāki.
:::

Ierakstiet `U` un nospiediet {{key:Enter}}, lai atceltu pēdējo izmēru virknē, neizejot no komandas.

## Izmērs no bāzes: izmēri, sakrauti no vienas līnijas

{{cmd:DIMBASELINE}} ({{ui:Annotate}} › {{ui:More}} › {{ui:Baseline dimension}}, vai `DBA`) mēra katru jaunu izmēru no pēdējā izmēra pirmā sākumpunkta un sakrauj katru vienu soli tālāk.

1. Ierakstiet `DLI` un nospiediet {{key:Enter}}.
2. Piesaistiet apakšējam kreisajam stūrim un noklikšķiniet.
3. Piesaistiet augšējam kreisajam stūrim un noklikšķiniet.
4. Pārvietojiet krustiņu pa kreisi no telpas un noklikšķiniet. Parādās vertikāls izmērs.
5. Ierakstiet `DBA` un nospiediet {{key:Enter}}.
6. Piesaistiet 60 grādu sienas augšējam galam (Galapunkts) un noklikšķiniet. Parādās otrs vertikāls izmērs, vienu soli tālāk nekā pirmais.
7. Nospiediet {{key:Enter}}, lai beigtu.

## Paralēls: slīpas līnijas patiesais garums

1. Ierakstiet `DAL` un nospiediet {{key:Enter}}.
2. Nospiediet {{key:Enter}}, lai atlasītu objektu.
3. Noklikšķiniet 60 grādu sienu.
4. Pavirziet uz āru un noklikšķiniet, lai novietotu.

Teksts rāda 1500: patieso garumu, mērītu gar sienu.

## Rādiuss un diametrs

1. Ierakstiet `DRA` un nospiediet {{key:Enter}}.
2. Noklikšķiniet kolonnas riņķi.
3. Pārvietojiet krustiņu. Vadība rāda no centra uz krustiņu.
4. Noklikšķiniet, lai novietotu tekstu.

Teksts rāda `R600`. {{cmd:DIMDIAMETER}} (`DDI`) dara to pašu ar ⌀ zīmi un diametru.

## Leņķis

Šeit sienas ir viena polilīnija, tāpēc stūri mēra pēc tā virsotnes. (Starp divām atsevišķām līnijām varat noklikšķināt uz pašām līnijām.)

1. Ierakstiet `DAN` un nospiediet {{key:Enter}}.
2. Pie `Select arc, circle or line, or Enter for a vertex` nospiediet {{key:Enter}}.
3. Pie `Specify angle vertex` piesaistiet apakšējam labajam stūrim un noklikšķiniet.
4. Pie `Specify first angle endpoint` piesaistiet apakšējam kreisajam stūrim un noklikšķiniet.
5. Pie `Specify second angle endpoint` piesaistiet 60 grādu sienas augšējam galam un noklikšķiniet.
6. Pārvietojiet krustiņu telpas iekšpusē, tuvu stūrim, un noklikšķiniet.

Teksts rāda `120°`, stūra iekšējo leņķi. Ja novietojat to otrpus stūrim, izmērs mēra leņķi tajā pusē. Pirmajā uzvednē noklikšķiniet loku, lai kotētu leņķi, ko tas aptver, vai noklikšķiniet divas līnijas, lai kotētu leņķi starp tām.

## Mainiet tekstu

Lai rakstītu savu tekstu, ierakstiet `T` un nospiediet {{key:Enter}}, pirms novietojat izmēru, tad ierakstiet tekstu. Jūsu tekstā `<>` apzīmē izmērīto vērtību: `<> TYP.` dod `6000 TYP.`. Nospiediet {{key:Enter}} tukšā rindā, lai paturētu izmērīto vērtību.

Lai mainītu esošu izmēru:

1. Noklikšķiniet to.
2. Labajā panelī ierakstiet {{ui:Text}} (Teksts) laukā. Atstājiet tukšu, lai paliek izmērītā vērtība.
3. Nospiediet {{key:Enter}}.

## Izmēri seko ģeometrijai

Izmērs atceras savus punktus. Velciet vienu no tā rokturiem vai pārvietojiet, pagrieziet vai mērogojiet to kopā ar objektiem, ko tas mēra, un tas mēra vēlreiz. Ja izstiepjat ģeometriju, nepārvietojot izmēru, izmērs neseko: tas paliek ar saviem punktiem.

## Biežākās kļūdas

- **Teksts un bultiņas ir sīkas vai milzīgas.** Iestatiet kopējo mērogu: skatiet [Iestatiet izmēru lielumus](topic:dimension-settings).
- **"Norādiet punktu leņķa iekšpusē, ko vēlaties izmērīt."** Punkts, uz kura noklikšķinājāt leņķa izmēram, atrodas uz vienas no kājām. Pārvietojiet to leņķa iekšpusē.
- **Turpināt sākās no nepareiza izmēra.** Tas vienmēr turpina no pēdējā lineārā vai paralēlā izmēra, kas izveidots šajā sesijā. Vispirms izveidojiet (vai izveidojiet no jauna) to, no kura turpināt.
- **Izmērs izrādījās vertikāls.** Jūs to novietojāt sānis. Pirms novietošanas ierakstiet `H`.
- **Pēdas un collas.** Vispirms iestatiet zīmējuma garuma formātu uz {{ui:Architectural}} (Arhitektūras) vai izmēra {{ui:Format}} sadaļā {{ui:Properties}}: skatiet [Pēdas un collas izmēros](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Skaitļi nav vienībās, kādās vēlaties.** Izvēlieties {{ui:Units in the text}}: skatiet [Izmēri mm, cm, m vai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

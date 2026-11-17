---
title: Piesaiste objektu punktiem
summary: Izmantojiet objektu piesaistes, ortogonālo režīmu un režģi, lai ar peli izvēlētos precīzus galapunktus, vidus punktus, centrus un krustpunktus.
keywords: osnap, objektu piesaiste, galapunkts, vidus punkts, centrs, krustpunkts, perpendikuls, kvadrants, tuvākais, mezgls, ievietošana, ortogonāli, režģis, f3, f8, f7, polārā izsekošana, polārs, polarang, objektu piesaistes izsekošana, otrack, izsekošana, f10, f11
from: 3cf17f94
---

## Ko jūs izveidosiet

Taisnstūri ar tā divām diagonālēm, riņķi, kas centrēts tur, kur diagonāles krustojas, un līniju no kādas malas vidus līdz riņķim. Katrs punkts tiek izvēlēts ar peli, un katrs punkts ir precīzs.

## Kā darbojas piesaiste

Kamēr komanda pieprasa punktu, CadCraft meklē piesaistes punktus aptuveni 10 pikseļu attālumā no krustiņa. Kad tāds atrasts, parādās marķieris un etiķete ("Galapunkts", "Krustpunkts"), un klikšķis nokrīt **tieši** uz šī punkta, nevis tur, kur ir krustiņš.

Piesaistes ir ieslēgtas, kad statusa joslā {{ui:Piesaiste}} ir nospiests. {{key:F3}} tās ieslēdz un izslēdz.

Piesaistes, ko varat izmantot:

| Piesaiste | Nokrīt uz |
|---|---|
| Galapunkts | Līniju, loku un polilīniju segmentu galiem |
| Vidus punkts | Līniju, loku un polilīniju segmentu vidu |
| Centrs | Riņķu un loku centru un polilīniju loku segmentu centru |
| Kvadrants | Riņķu un loku 0, 90, 180 un 270 grādu punktiem |
| Krustpunkts | Vietai, kur krustojas divi objekti |
| Perpendikuls | Punktam uz objekta, taisni pret pēdējo punktu (nepieciešams bāzes punkts) |
| Pieskare | Punktam uz riņķa vai loka, kur līnija no pēdējā punkta tikai pieskaras tam. Bez pēdējā punkta (līnijas pirmais punkts) marķieris saka "atlikts": pieskares punkts tiek aprēķināts, kad ir zināms nākamais punkts, tāpēc līnija no Pieskares līdz Pieskarei pieskaras abiem riņķiem |
| Tuvākais | Tuvākajam punktam uz jebkura objekta |
| Mezgls | Punktu objektiem |
| Ievietošana | Teksta un bloku atsauču ievietošanas punktam |

Visas ir ieslēgtas pēc noklusējuma, izņemot Pieskari un Tuvāko. Tuvākais parasti uzvar, kad gribat ko citu; ieslēdziet Pieskari, kad to vajag.

## Izvēlieties piesaistes

1. Noklikšķiniet mazo bultiņu blakus {{ui:Piesaiste}} statusa joslā. Atveras saraksts {{ui:Objektu piesaistes}}.
2. Atzīmējiet vai noņemiet atzīmi no piesaistēm. Izmaiņas stājas spēkā uzreiz.
3. Noklikšķiniet bultiņu vēlreiz, lai aizvērtu sarakstu.

CadCraft atceras jūsu izvēli un {{ui:Režģis}}, {{ui:Ortogonāli}} un {{ui:Piesaiste}} iestatījumus šajā pārlūkprogrammā.

## Soļi

1. Ierakstiet `REC` un nospiediet {{key:Enter}}.
2. Ierakstiet `0,0` un nospiediet {{key:Enter}}.
3. Ierakstiet `@4000,3000` un nospiediet {{key:Enter}}. Parādās taisnstūris.
4. Noklikšķiniet {{ui:Robežas}}.
5. Ierakstiet `L` un nospiediet {{key:Enter}}.
6. Pārvietojiet krustiņu uz apakšējo kreiso stūri. Marķieris rāda "Galapunkts". Noklikšķiniet.
7. Pārvietojiet to uz augšējo labo stūri, līdz parādās "Galapunkts". Noklikšķiniet.
8. Nospiediet {{key:Enter}}, lai beigtu līniju.
9. Nospiediet {{key:Enter}} vēlreiz, lai atkārtotu {{cmd:LINE}}, un tādā pašā veidā uzzīmējiet otru diagonāli no apakšējā labā stūra līdz augšējam kreisajam.
10. Ierakstiet `C` un nospiediet {{key:Enter}}, lai sāktu riņķi.
11. Pārvietojiet krustiņu uz vietu, kur diagonāles krustojas. Marķieris rāda "Krustpunkts". Noklikšķiniet.
12. Ierakstiet `800` un nospiediet {{key:Enter}}.

Jums vajadzētu redzēt riņķi, kas centrēts tieši krustpunktā.

13. Ierakstiet `L` un nospiediet {{key:Enter}}.
14. Pārvietojieties uz taisnstūra kreisās malas vidu, līdz parādās "Vidus punkts". Noklikšķiniet.
15. Pārvietojiet krustiņu uz riņķa kreisajā pusē. Marķieris rāda "Perpendikuls" vai "Kvadrants"; šeit tas ir viens un tas pats punkts. Noklikšķiniet.
16. Nospiediet {{key:Enter}}.

Jaunā līnija iet no kreisās malas vidus un apstājas tieši uz riņķa.

## Izlaist piesaisti vienam klikšķim

Turiet {{key:Shift}}, kamēr klikšķināt. Objektu piesaistes šim klikšķim tiek ignorētas, un punkts nokrīt tieši tur, kur ir krustiņš (vai pa {{ui:Ortogonāli}} virzienu, ja {{ui:Ortogonāli}} ir ieslēgts).

## Ortogonāli

{{ui:Ortogonāli}} ({{key:F8}}) notur nākamo punktu taisni pāri vai taisni uz augšu un uz leju no bāzes punkta. Tas attiecas uz klikšķiem un tiešā attāluma ievadi (vienu skaitli, ko ierakstāt uzvednē). Objektu piesaistes uzvar pār {{ui:Ortogonāli}}: ja piesaistes marķieris ir redzams, klikšķis iet piesaistei.

## Polārā izsekošana

{{ui:Polārs}} ({{key:F10}}) ir {{ui:Ortogonāli}} vairākiem leņķiem. Kamēr komandai ir bāzes punkts (līnijas pēdējais punkts, pārvietošanas bāzes punkts), rādītājs nolīdzinās, kad tuvojas staram no tā kādā polārā soļa kārtnī. Parādās punktota līnija, un blakus krustiņam etiķete rāda `Polar: 1200 < 30°`. Noklikšķiniet, lai izmantotu šo punktu, vai ierakstiet attālumu: `1200` iet tieši 1200 pa staru.

Soļa vērtība ir 90° līdz brīdim, kad to maināt: ierakstiet {{cmd:POLARANG}}, nospiediet {{key:Enter}} un ierakstiet `30` (vai 45, 22.5, 15 …). {{ui:Polārs}} un {{ui:Ortogonāli}} viens otru izslēdz: ieslēdzot vienu, otrs tiek izslēgts.

## Objektu piesaistes izsekošana

{{ui:Izsekot}} ({{key:F11}}) nolīdzina rādītāju ar piesaistes punktiem, uz kuriem esat apstājies, lai varētu izvēlēties punktu tajā pašā līmenī ar vienu stūri un virs cita, nezīmējot palīglīnijas.

1. Ieslēdziet {{ui:Piesaiste}} un {{ui:Izsekot}} un sāciet komandu, kas pieprasa punktu (`L`).
2. Novietojiet rādītāju uz piesaistes punkta, piemēram, stūra, uz pusi sekundes, bez klikšķa. Maza krustiņa zīme to atzīmē: tas ir iegūts. Uzkavējiet uz tā vēlreiz, lai to atbrīvotu.
3. Pārvietojiet rādītāju taisni prom no tā, horizontāli vai vertikāli. Punktota līnija seko rādītājam, un etiķete rāda `Track: 600 < 90°`. Noklikšķiniet vai ierakstiet attālumu.
4. Iegūstiet otru punktu un pārvietojieties uz vietu, kur vertikāle caur vienu krustojas ar horizontāli caur otru: rādītājs piesaistās šim krustpunktam (`Track: where two lines meet`).

Ja ir ieslēgts arī {{ui:Polārs}}, iegūtie punkti izseko katrā polārajā leņķī. Līdz septiņiem punktiem tiek saglabāti, līdz komanda beidzas. {{key:Shift}} izslēdz izsekošanu vienam klikšķim, tāpat kā piesaistes.

## Režģis

{{ui:Režģis}} ({{key:F7}}) rāda līniju režģi aiz zīmējuma, ar biezākām līnijām ik pēc piektās; atstarpe mainās, tuvinot. Tas ir tikai palīgs, kamēr neieslēdzat {{ui:Režģa piesaiste}} ({{key:F9}}): tad klikšķi nokrīt uz tuvākā režģa punkta, ja vien objektu piesaiste nepaņem punktu pirmā.

## Funkciju taustiņi jūsu datorā

{{key:F9}} ir {{ui:Režģa piesaiste}}, {{key:F10}} ir {{ui:Polārs}} un {{key:F11}} ir {{ui:Izsekot}}.

:::mac
Mac datorā F3, F7, F8 un F9 parasti vada Mission Control un multivide. Turiet **fn** kopā ar taustiņu vai ieslēdziet standarta funkciju taustiņus, kā aprakstīts [Taustiņi, peles un skārienpaliktņi](common:keys). Statusa joslas pogas vienmēr darbojas.
:::

:::firefox
Firefox F7 ir arī taustiņš kursora pārlūkošanai. Ja Firefox jautā, vai ieslēgt kursora pārlūkošanu, izvēlieties **Nē**. Izmantojiet pogu {{ui:Režģis}}, ja jautājums atkārtojas.
:::

:::touch
Skārienekrānā nav rādītāja virs ekrāna, tāpēc piesaistes marķieris parādās tikai tur, kur pieskaras pirksts. Tuviniet tuvāk mazākiem mērķiem vai ierakstiet koordinātas.
:::

## Biežākās kļūdas

- **Klikšķis nokrita uz nepareizā punkta.** Pirms klikšķināt, paskatieties uz marķiera etiķeti: "Galapunkts" uzvar pār "Vidus punkts", ja abi ir tuvu. Tuviniet vai noņemiet atzīmi no piesaistēm, kas jums nav vajadzīgas.
- **Marķieris neparādās.** {{ui:Piesaiste}} ir izslēgta, vai vajadzīgā piesaiste nav atzīmēta, vai objekts atrodas slānī, kas ir izslēgts vai iesaldēts.
- **Piesaistes sagrābj nepareizo lietu sarežģītā zīmējumā.** Tuviniet. Piesaistes attālums tiek mērīts ekrāna pikseļos, tāpēc tuvinot zīmējumā tas kļūst mazāks.
- **Gaidāt, ka Shift dos taisnu līniju.** CadCraft Shift vienam klikšķim izslēdz piesaistes. Taisnām līnijām izmantojiet {{ui:Ortogonāli}}.
- **Gaidāt, ka punkti nokritīs uz režģa punktiem.** Ieslēdziet {{ui:Režģa piesaiste}} ({{key:F9}}) vai ierakstiet koordinātas apaļiem skaitļiem.

---
title: Splaini un polilīnijas: SPLINE, SPLINEDIT, PEDIT
summary: Zīmējiet gludu līkni caur punktiem vai no vadības daudzstūra, rediģējiet tās piegulumu un vadības punktus, rediģējiet polilīnijas (savienot, aizvērt, platums, piegulums, splains, noņemt līkumu) vai pārvērtiet splainu polilīnijā.
keywords: splains, splinedit, spl, spe, pedit, pe, piegulumu punkti, vadības punkti, svari, nurbs, polilīnijas rediģēšana, savienot, pieguluma līkne, noņemt līkumu, pārvērst polilīnijā, precizitāte, pieskare, līkne, piegulumu pielaide
from: d31f72d8
---

## Ko jūs izveidosiet

Līkne caur pieciem punktiem, tā pati līkne, rediģēta trīs veidos, un polilīnija, izveidota no trim līnijām.

## Zīmēt splainu caur punktiem

1. Ierakstiet `SPL` un nospiediet {{key:Enter}}.
2. Noklikšķiniet vai ierakstiet punktus, caur kuriem līknei jāiet: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Pēc pēdējā nospiediet {{key:Enter}}.
3. {{ui:Sākuma pieskare}}: noklikšķiniet punktu, uz kuru līknei jāvirzās, vai nospiediet {{key:Enter}}, lai to izlemtu pats. Tāpat rīkojieties ar beigu pieskari.

Līkne iet caur katru punktu. Ierakstiet `C` {{key:Enter}} vietā, lai to aizvērtu (līkne atgriežas pie pirmā punkta). {{key:U}} (`Undo`) atņem pēdējo punktu, kamēr zīmējat.

### Zīmēt no vadības daudzstūra

Ierakstiet `M` pirmajā uzvednē, tad `C` ([Vadības virsotnes (C)]) un pakāpi no 1 līdz 5 (parasti 3). Tagad punkti, ko izvēlaties, ir daudzstūra stūri, kas velk līkni uz sevi; līkne sākas pie pirmā un beidzas pie pēdējā. Aizvērta līkne velkas apkārt, bez stūra savienojumā.

### Pārvērst polilīniju par splainu

Pirmajā uzvednē ierakstiet `O` (Objekts) un atlasiet polilīnijas vai līnijas. Tās kļūst par splainiem caur saviem virsotnēm; oriģināli tiek dzēsti.

## Rediģēt splainu

Atlasiet to un ierakstiet `SPE` (vai ierakstiet `SPE` un noklikšķiniet uz tā). Rokturi rāda piegulumu punktus (vai vadības punktus splainam, kuram tādu nav): velciet vienu, lai pārveidotu līkni. Uzvednē:

- **Piegulumu dati** (splains, zīmēts caur punktiem): `A` pievieno piegulumu punktu (noklikšķiniet, kur), `D` dzēš vienu (noklikšķiniet tuvu tam), `M` pārvieto vienu (noklikšķiniet tuvu tam un pēc tam uz tā jaunās vietas), `T` iestata beigu pieskares, `P` notīra piegulumu punktus, tāpēc no tā brīža splains tiek rediģēts pēc saviem vadības punktiem.
- **Rediģēt virsotni**: `A` pievieno vadības punktu, nemainot līkni, `M` pārvieto vienu, `W` piešķir vienam **svaru** (virs 1 velk līkni tuvāk tam, zem 1 ļauj tai attālināties).
- **Atvērt** vai **Aizvērt**, un **Apgriezt** (līkne iet otrādi).
- **Pārvērst par polilīniju** (`P`): splains kļūst par polilīniju; precizitāte ir, cik segmentu katrs posms saņem (parasti 10).
- **[Atsaukt (U)]** atņem pēdējo izmaiņu; **[Iziet (X)]** beidz.

{{ui:Rekvizīti}} parāda splaina pakāpi, cik piegulumu un vadības punktu tam ir, tā garumu, un ļauj to atvērt vai aizvērt.

## Rediģēt polilīniju

Atlasiet polilīniju un ierakstiet `PE`. Līniju, loku vai splainu, ko izvēlaties, vispirms piedāvā kā polilīniju, ko pārvērst (splainam jāprasa precizitāte).

- **[Aizvērt (C)]** / **[Atvērt (O)]** savieno vai atdala galus.
- **[Savienot (J)]** pievieno līnijas, lokus un polilīnijas, kuru gali sakrīt ar polilīnijas galu. `Fuzz distance` ir, cik tālu gali drīkst būt viens no otra un joprojām savienoties (0 nozīmē, ka tiem jāsakrīt).
- **[Platums (W)]** dod visai polilīnijai vienu platumu (0 to noņem).
- **[Piegulums (F)]** aizstāj polilīniju ar gludu līkni, kas iet caur tās virsotnēm; **[Splains (S)]** ar kubisku B-splainu, kas tām seko (sākas un beidzas pie pirmās un pēdējās virsotnes un paliek tuvu pārējām). Abas kļūst par polilīniju no īsiem segmentiem, un sākotnējie stūri tiek saglabāti, tāpēc **[Noņemt līkumu (D)]** tos atgriež.
- **Līnijtipa ģenerēšana** norāda, vai punktlīnijas tips turpinās visā polilīnijā vai sākas no jauna pie katras virsotnes.
- **[Apgriezt (R)]** maina tās virsotņu secību. **[Vairākas (M)]** (`M` pirmajā uzvednē) rediģē vairākas polilīnijas ar tām pašām opcijām.

Polilīnijas virsotņu rediģēšana **Rekvizītos** vai ar rokturiem paliek kā bija: PEDIT nav virsotņu redaktora.

## Failos

DWG un DXF 2000 saglabā splainu kā splainu: pakāpi, vadības punktus, mezglus, svarus, piegulumu punktus un pieskares. Splains, ko atverat un nemainiet, tiek ierakstīts atpakaļ tieši tāds, kāds bija. DXF R12 splaina nav: tas tiek saglabāts kā polilīnija pa līkni, un vēsture norāda, cik daudz.

Nobīde, apgriešana, pagarināšana, noapaļošana, pārtraukšana un savienošana uz splainiem nedarbojas. Izmantojiet {{cmd:EXPLODE}} uz splaina vai {{cmd:PEDIT}} uz tā, lai iegūtu polilīniju, ko šīs komandas pieņem.

## Biežākās kļūdas

- **Līkne pārsniedz starp tuviem punktiem.** Līkne caur punktiem liecas tur, kur liecas punkti. Izmantojiet mazāk punktu vai vadības daudzstūri.
- **„Tas nav splains.”** SPLINEDIT pieņem tikai splainus; {{cmd:PEDIT}} rediģē polilīnijas.
- **Aizvērts piegulumu splains citā programmā var izskatīties nedaudz citādi.** CadCraft to aizver ar vienu gludu savienojumu pie pirmā punkta; cita programma to var aizvērt ar periodisku līkni. Aizvērts vadības punktu splains abās programmās ir vienāds.

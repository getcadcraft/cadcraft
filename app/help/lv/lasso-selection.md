---
title: Lasso atlase
summary: Nospiediet un velciet brīvroku kontūru ap objektiem, lai tos atlasītu kā logu, krustojumu vai žogu; mainiet ar Space, kamēr velkat.
keywords: lasso, lassomode, velkšana, brīvroka, atlasīt, atlase, logs, krustojums, žogs, space, daudzstūris, skāriens, pildspalva, taisnstūris
from: 9ec6154d
---

## Ko jūs iemācīsieties

Kā atlasīt objektus, zīmējot kontūru ap tiem, un kā atgriezt taisnstūri, kad tas nepieciešams.

## Uzzīmējiet lasso

1. Uzzīmējiet dažas līnijas un riņķus tuvu viens otram.
2. Kad nekāda komanda nedarbojas, nospiediet peles pogu tukšā vietā un velciet ap dažiem no tiem, vispirms virzot **pa labi**.
3. Atlaidiet.

Atlasīti tiek tikai objekti, kas pilnībā atrodas kontūras iekšpusē. Kontūra velkot tiek zīmēta nepārtraukta: tas ir logu lasso.

## Logs, krustojums un žogs

Atlasītie objekti ir atkarīgi no tā, kā sākat vilkt, un no {{key:Space}}:

| Velkat | Lasso | Atlasa |
|---|---|---|
| Vispirms pa labi | Logs (nepārtraukta kontūra) | Tikai objektus, kas **pilnībā** atrodas iekšpusē |
| Vispirms pa kreisi | Krustojums (punktēta, zaļa) | Objektus iekšpusē **un** objektus, ko kontūra skar |
| Nospiežot {{key:Space}} velkot | Logs, tad krustojums, tad žogs | Žogs (punktēts ceļš, nav slēgts): tikai objektus, ko ceļš šķērso |

1. Nospiediet tukšā vietā un velciet ap dažiem objektiem, vispirms virzot **pa kreisi**. Atlasīti tiek arī visi objekti, ko kontūra skar.
2. Nospiediet {{key:Esc}}.
3. Nospiediet un velciet vēlreiz; joprojām turot pogu, nospiediet {{key:Space}} vienreiz. Kontūra kļūst par krustojumu; nospiediet {{key:Space}} vēlreiz žogam.

{{key:Shift}} atlaižot, objekti tiek izņemti no atlases (iestatījumā "Klikšķinot objektus: Pievieno").

## Komandas iekšienē

Lasso darbojas visur, kur CadCraft pieprasa `Select objects`: uzzīmējiet to un nospiediet {{key:Enter}}, lai pabeigtu. {{cmd:STRETCH}} izmanto krustojuma lasso kā logu, tāpēc var izstiept L formas daļu zīmējumā vienā reizē.

{{cmd:TRIM}} un {{cmd:EXTEND}} vilkšanu izmanto citādi: tur tie apgriež (vai pagarina) katru gabalu, ko ceļš šķērso. Skatiet [Apgriezt un pagarināt](topic:trim-and-extend).

## Taisnstūris

Klikšķis tukšā vietā, pārvietošana un otrs klikšķis vienmēr zīmē taisnstūra logu (no kreisās uz labo) vai krustojumu (no labās uz kreiso).

Lai velkot atkal zīmētu taisnstūri, atveriet {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Atlasīšana velkot}} un izvēlieties {{ui:Taisnstūris}}, vai ierakstiet {{cmd:LASSOMODE}}, pēc tam `0`. Lasso režīmam ierakstiet {{cmd:LASSOMODE}}, pēc tam `1`. Izvēle tiek saglabāta šajā pārlūkā.

:::touch
Velciet ar pirkstu vai pildspalvu tāpat. Pieskaršanās joprojām atlasa vienu objektu.
:::

## Biežākās kļūdas

- **Nekas netika atlasīts.** Lasso bija logs, un nekas nebija pilnībā iekšpusē. Sāciet vilkt pa kreisi vai nospiediet {{key:Space}} velkot.
- **Velkot pārvietojās rokturis.** Nospiežot uz atlasīta objekta roktura, tiek pārvietots rokturis. Sāciet lasso tukšā vietā.
- **Space pārtrauca komandu.** {{key:Space}} pārslēdz lasso tikai tad, kamēr poga ir nospiesta; citādi tas ir {{key:Enter}}.

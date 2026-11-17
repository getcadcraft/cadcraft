---
title: Rediģēšana ar satvērējiem un rekvizītiem
summary: Stiepiet, pārvietojiet un maini objektu izmēru pēc to satvērējiem un ierakstiet precīzus garumus, rādiusus, leņķus un koordinātas panelī Rekvizīti.
keywords: satvērēji, rekvizīti, stiepšana, garums, rādiuss, koordinātas, rediģēt, ātrie rekvizīti, rekvizītu panelis, mainīt, slānis, krāsa, color
from: f22541ba
---

## Ko jūs uzzināsiet

Divi ātri veidi, kā mainīt objektu bez komandas: vilkt tā **satvērējus** vai ierakstīt jaunas vērtības panelī **Rekvizīti** labajā pusē.

## Satvērēji

Kad atlasāt objektus (līdz 200 vienlaikus) bez darbojošās komandas, uz tiem parādās mazi kvadrātiņi. Tie ir satvērēji:

| Objekts | Satvērēji |
|---|---|
| Līnija | Abi gali un vidus (pārvieto visu līniju) |
| Riņķis | Centrs (pārvieto to) un četri punkti uz riņķa līnijas (maina rādiusu) |
| Loks | Centrs un abi gali (maina, kur tas sākas un beidzas) |
| Polilīnija | Katra virsotne |
| Teksts, punkts, bloka atsauce | Ievietošanas punkts |
| Elipse | Centrs |
| Izmērs | Tā definējošie punkti un izmēra līnijas pozīcija |
| Skata logs | Centrs (pārvieto to) un četri stūri (maina izmēru) |

### Satvērēja pārvietošana

1. Uzzīmējiet līniju un noklikšķiniet uz tās. Parādīsies trīs satvērēji.
2. Noklikšķiniet uz satvērēja vienā galā. Statusa joslā būs teksts „Noklikšķiniet, kur jānovieto šis satvērējs (Esc, lai atceltu). Darbojas piesaiste un ortogonālais režīms.”
3. Pārvietojiet krustiņu. Parādīsies priekšskatījums.
4. Noklikšķiniet jaunajā pozīcijā vai piesaistieties punktam citā objektā un noklikšķiniet.

Gals pārvietojas, bet pārējā līnija paliek vietā. Varat arī nospiest satvērēju un vilkt to, pēc tam atlaist, kur tam jābūt.

:::note
Satvērējam nevar ierakstīt koordinātu. Precīzai pozīcijai piesaistieties punktam vai ierakstiet vērtību panelī Rekvizīti.
:::

Nospiediet {{key:Esc}} vai noklikšķiniet ar labo pogu, lai atceltu satvērēja pārvietošanu.

## Rekvizīti

Labajā panelī redzami atlasītā objekta rekvizīti.

1. Noklikšķiniet uz līnijas. Paneļa virsraksts rāda „Līnija”.
2. Noklikšķiniet laukā {{ui:Garums}}, ierakstiet `2500` un nospiediet {{key:Enter}}.

Līnija tagad ir tieši 2500 garumā, saglabājot sākumpunktu un leņķi. {{key:Enter}} vai klikšķis citur piemēro vērtību; {{key:Esc}} atjauno veco vērtību. Katra izmaiņa ir viens solis atsaukšanai, arī tad, kad vienlaikus mainās daudzi objekti.

Laukos var ierakstīt izteiksmes (`=2*45`) un garumus ar mērvienībām (`3'6"`, `900mm`), katram punktam ir X, Y un Z, un vairākus objektus var mainīt kopā. Viss tas aprakstīts sadaļā [Rekvizītu panelis](topic:properties-panel).

## Biežākās kļūdas

- **Satvērēji nerādās.** Darbojas komanda (nospiediet {{key:Esc}}), vai atlasīti vairāk nekā 200 objekti, vai objekts atrodas bloķētā slānī.
- **Satvērējs nonāca nepareizā vietā.** Piesaiste to notvēra. Turiet nospiestu {{key:Shift}}, noklikšķinot, lai ignorētu piesaisti.
- **Ierakstot rekvizītu panelī nekas nenotika.** Nospiediet {{key:Enter}} vai noklikšķiniet citur, lai piemērotu vērtību. Noraidīta ievade (nulles vai negatīvi garumi un rādiusi, teksts, kas nav vērtība) padara lauku sarkanu un norāda iemeslu.
- **Ierakstītie burti nonāca rekvizītu laukā.** Kamēr laukam ir kursors, taustiņi raksta tajā. Nospiediet {{key:Enter}} vai {{key:Esc}} un tad ierakstiet komandu.

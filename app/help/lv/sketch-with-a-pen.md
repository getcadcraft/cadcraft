---
title: Skicēšana ar pildspalvu un precīza ģeometrija
summary: Zīmējiet brīvroku ar pildspalvu, peli vai pirkstu, un katrs vilciens kļūst par tīru līniju, riņķi, loku, taisnstūri vai polilīniju, kad paceļat pildspalvu, piesaistīts jau zīmētajam, ar izmēru, ko var pārrakstīt.
keywords: skice, pildspalva, irbulis, brīvroka, pirksts, sakārtot, precīzs, piesaiste, SKETCHLIVE, SKETCHFIX, izmērs, pārrakstīt, spiediens, līnijas platums, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Sāciet {{cmd:SKETCHLIVE}} (vai izvēlieties **Zīmēšana › Vairāk › Skicēt ar pildspalvu**) un zīmējiet vilcienu, nospiežot un velkot. Kad paceļat pildspalvu, CadCraft nolasa, ko jūs domājāt, un ieliek to rasējumā:

| Jūsu vilciens | Ko iegūstat |
|---|---|
| Gandrīz taisns | Līnija. Gandrīz horizontāla vai vertikāla līnija tiek padarīta precīzi horizontāla vai vertikāla. |
| Slēgts un apaļš | Riņķis |
| Daļa no apaļas formas | Loks |
| Slēgts ar četriem taisniem leņķiem | Taisnstūris |
| Viss pārējais | Polilīnija ar taisnām malām |

Vilciena gali tiek ievilkti līdz tuvākajam jau zīmētā gala, tāpēc skicēta siena saskaras ar blakus esošo sienu.

## Pārrakstiet izmēru

Pēc katra vilciena komandrindā tiek parādīts tā izmērs (līnijas **garums**, riņķa vai loka **rādiuss**, taisnstūra **platums**) kā noklusējums. Nospiediet {{key:Enter}}, lai to paturētu, vai ierakstiet skaitli vai garumu, piemēram, `12'6"`, lai to aizstātu. Līnija paliek ar savu pirmo galu, riņķis ar savu centru, taisnstūris ar savu pirmo stūri.

Nospiediet {{key:Enter}} tukšā uzvednē, lai pabeigtu, vai ierakstiet `U`, lai atsauktu pēdējo vilcienu. Visa sesija ir viens atsaukšanas solis.

## Tīriet vairākus vilcienus vienlaikus

{{cmd:SKETCHFIX}} savāc vilcienus un padara tos visus precīzus, kad nospiežat {{key:Enter}}; tas der ātri zīmētam aptuvenam izkārtojumam.

:::note
Viss tiek aprēķināts jūsu datorā pēc noteikumiem, bez modeļa, un nekas nekur netiek nosūtīts.
:::

## Spiediens iestata līnijas platumu

Tur, kur pildspalva ir ieslēgta lietotnēm (Iestatījumi › Globāli › Ievades ierīces › Pildspalva), ar pildspalvu zīmēts vilciens nes katru punktu, ko pildspalva deva, un tā spiedienu. Viegls vilciens veido plānu objektu, bet stingrs — biezu: vilciena vidējais spiediens izvēlas 0,18, 0,25, 0,35 vai 0,50 mm, un komandrindā tiek pateikts, kurš. Ar peli vai pirkstu zīmēti vilcieni saņem pašreizējo līnijas platumu kā līdz šim. {{cmd:PENPRESSURE}} to izslēdz (vai atkal ieslēdz); izvēle tiek saglabāta šajā pārlūkprogrammā.

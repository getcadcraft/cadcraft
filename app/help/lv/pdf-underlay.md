---
title: PDF pamatnes un PDF importēšana
summary: Novietojiet PDF lapu zem rasējuma, lai to pārzīmētu un izdrukātu, vai pārvērtiet lapas līnijas un tekstu rasējuma objektos.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, pamatne, pārzīmēt, importēt pdf, skenējums, stāva plāns, izbalināt, apgriezt, slāņi, piesaiste, atvērt pdf
from: aa301d0f
---

## Divi veidi, kā ievietot PDF lapu

- **Pievienot** ({{cmd:PDFATTACH}}) saglabā PDF kā attēlu zem jūsu rasējuma. Jūs to pārzīmējat, piesaistāties tā līnijām, izbalināt, apgriežat, un tas tiek drukāts kopā ar lapu. Rasējumā paliek tikai faila nosaukums.
- **Importēt** ({{cmd:PDFIMPORT}}) pārvērš lapas līnijas, līknes, aizpildījumus un tekstu parastos rasējuma objektos, kas ievietoti slāņos ar nosaukumiem pēc PDF. Tos var rediģēt, un pēc tam PDF vairs nav vajadzīgs.

Atverot PDF ar {{ui:Atvērt}}, tiek jautāts, kuru no abiem vēlaties.

## Pievienot lapu

1. Ierakstiet `PDFATTACH` (vai `PDFATT`) un izvēlieties PDF. Ja tajā ir vairākas lapas, ierakstiet lapas numuru.
2. Noklikšķiniet ievietošanas punktu (lapas apakšējo kreiso stūri).
3. Nospiediet {{key:Enter}}, lai iegūtu lapas patieso izmēru, vai ierakstiet mērogu: rasējuma vienības uz vienu PDF punktu (punkts ir 1/72 collas, tātad milimetru rasējumā tas ir 0.3528).
4. Nospiediet {{key:Enter}}, ja nevēlaties pagriezienu, vai ierakstiet leņķi.

Lapa ir objekts, līdzīgi kā bloka atsauce: to var pārvietot, pagriezt, mērogot, kopēt, dzēst un novietot slānī. Izslēdzot tā slāni, lapa pazūd. Tuvinot to, lapa tiek uzzīmēta atkārtoti un asi.

## Pārzīmējiet to

Ar ieslēgtu {{ui:Piesaiste}} kursors piesaistās PDF pašām līnijām: galapunktiem, viduspunktiem un krustpunktiem (un {{ui:Tuvākais}}, ja šī piesaiste ir ieslēgta). Teksts, kas uz lapas ir zīmēts kā burti, netiek piesaistīts.

## Pielāgot

- `PDFADJUST`: **Izbalināt** (no 0 līdz 80 procentiem), **Kontrasts** (no 0 līdz 100), **Monohromā** un **Ieslēgt/izslēgt**, lai to paslēptu, neizdzēšot.
- `PDFCLIP`: rāda tikai lapas taisnstūri vai daudzstūri; **Dzēst** noņem apgriešanu.
- `PDFLAYERS`: PDF var būt savi slāņi. Komanda tos uzskaita; ierakstiet numuru, lai šai pamatnei ieslēgtu vai izslēgtu attiecīgo slāni. Slāņi, kas failā ir izslēgti, sākumā paliek izslēgti.

## Drukāšana un saglabāšana

PLOT izdrukā lapu kā tās līnijas, aizpildījumus un tekstu (tāpēc tā paliek asa un meklējama). PDF iekšā esošie attēli ekrānā tiek rādīti, bet drukāti vēl netiek.

DWG vai DXF 2000 saglabā pamatni kā saiti: faila nosaukumu, lapu, tās novietojumu, mērogu, pagriezienu, apgriešanu, izbalinājumu un kontrastu. PDF pats rasējumā nav. Atveriet rasējumu no jauna, ierakstiet `PDF` un izvēlieties failu vēlreiz; līdz tam lapas tiek rādītas kā rāmji, un savu patieso izmēru tās iegūst tikai tad. Vecākais DXF (R12) pamatnes neatbalsta: tajā saglabājas rāmis un nosaukums. Nav vēl pārbaudīts, kā citas programmas nolasa saglabāto apgriešanu un mērogu.

## Importēt lapu

1. Ierakstiet `PDFIMPORT` (vai `PDFIM`) un izvēlieties PDF un lapu.
2. Noklikšķiniet, kur jānovieto lapas apakšējais kreisais stūris.
3. Nospiediet {{key:Enter}} patiesajam izmēram, ierakstiet mērogu vai izvēlieties **Divi punkti**: lapa tiek uzzīmēta patiesajā izmērā, tad noklikšķiniet divus punktus ar zināmu attālumu un ierakstiet īsto attālumu; viss tiek samērots atbilstoši.

Līnijas kļūst par līnijām un polilīnijām, riņķi un loki tiek atpazīti, aizpildītās formas kļūst par cietiem svītrojumiem, bet teksts kļūst par tekstu slānī, kura nosaukums beidzas ar `-TEXT`. Tas ir viens atsaukšanas solis. PDF attēli netiek importēti: tā vietā pievienojiet lapu. Skenējumam (lapai, kas ir tikai attēls) nav līniju, ko importēt.

PDF tiek lasīti kā neuzticami faili: skripti netiek palaisti, un ļoti liela lapa tiek apgriezta, par ko tiek paziņots.

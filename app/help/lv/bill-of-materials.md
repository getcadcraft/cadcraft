---
title: Materiālu saraksti pēc zonām
summary: Atzīmējiet rasējuma apgabalus kā zonas un novietojiet tabulu katrai, kas saskaita tajā esošos blokus. Tabulas seko rasējumam, kamēr strādājat, un jūs izvēlaties, kuras kolonnas katra rāda.
keywords: materiālu saraksts, BOM, detaļu saraksts, specifikācija, zona, apgabals, tabula, skaitīt, daudzums, atribūts, kolonnas, pozīcijas numurs, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zona** ir nosaukts rasējuma apgabals. **Materiālu saraksta tabula** uzskaita to, kas atrodas vienā zonā vai visā rasējumā: katru bloku ar tā daudzumu un atribūtu vērtībām. Rasējumā var būt tik zonu un tabulu, cik vajadzīgs, un vienai zonai var būt vairākas tabulas ar dažādām kolonnām.

Rīki atrodas cilnē Bloki zem {{ui:Materiālu saraksts}}, bloku grupas izvēlnē {{ui:Vairāk}}, un tos var ierakstīt.

## Izveidot zonu

Ierakstiet {{cmd:BOMZONE}} un vai nu

- noklikšķiniet divus pretējus stūrus taisnstūrim,
- izvēlieties {{ui:Polygon}} (daudzstūris), noklikšķiniet katru stūri un nospiediet Enter, lai to aizvērtu, vai
- izvēlieties {{ui:Object}} (objekts) un norādiet slēgtu polilīniju, riņķi, elipsi vai slēgtu spline. Tās kontūra tiek nokopēta; objekts paliek kā ir.

Tad ierakstiet zonas nosaukumu. Zona tiek zīmēta kā punktēta kontūra ar nosaukumu virs augšējā kreisā stūra, slānī `BOM-ZONES`, kas netiek drukāts. Ieslēdziet drukāšanu šim slānim, ja vēlaties zonas uz papīra.

Zona ir parasta slēgta polilīnija: pārvietojiet, izstiepiet vai velciet tās rokturus, un tās nosaukums seko. Lai pārdēvētu zonu, rediģējiet nosaukuma tekstu vai izmantojiet {{cmd:BOMZONE}} un {{ui:Rename}} (pārdēvēt). {{ui:Zones}} (zonas) uzskaita katru zonu un to, cik tabulu tai ir.

## Novietot tabulu

Ierakstiet {{cmd:BOMTABLE}} (vai {{cmd:BOM}}), izvēlieties zonas kontūru vai tās nosaukumu, norādiet teksta augstumu un noklikšķiniet, kur jāatrodas tabulas augšējam kreisajam stūrim. Nospiediet Enter, nevis izvēloties zonu, vai izvēlieties {{ui:Whole}} (viss), lai iegūtu visa rasējuma tabulu.

Jaunā tabula rāda pozīcijas numuru, daudzumu, bloka nosaukumu un kolonnu katram atribūtam, ko bloki satur (pirmie seši; pārējie tiek piedāvāti neatzīmēti). Bloki ar vienādu nosaukumu un vienādām atribūtu vērtībām dalās vienā rindā.

## Kas uzskaitās kā iekšā

- Bloks tiek skaitīts zonā, kurā atrodas tā **ievietošanas punkts**.
- Līnija, loks, riņķis, polilīnija, elipse, spline vai šrafējums tiek skaitīts **pilnībā** zonā, kurā atrodas tā ekstensiju vidus (līnijai — tās viduspunkts). Tā garums netiek apgriezts pie zonas malas.
- Punkts tieši uz malas ir iekšā.
- Zonas var pārklāties. Katra zona skaita pati sevi, tāpēc objekts pārklāšanās vietā ir abās tabulās.

## Tabulas seko rasējumam

Kad pievienojat, pārvietojat, kopējat vai dzēšat bloku, rediģējat atribūtu, vai pārveidojat vai pārvietojat zonu, katra tabula tiek pārzīmēta tajā pašā solī. Atsaukšana atsauc jūsu rediģēšanu un tabulas izmaiņu kopā.

Lai tabula pārstātu sekot, atzīmējiet {{ui:Frozen}} (iesaldēts) tās iestatījumos. Iesaldēta tabula mainās tikai tad, kad rediģējat tās iestatījumus vai ierakstāt {{cmd:BOMUPDATE}}, kas atjaunina visas tabulas tagad.

## Izvēlieties kolonnas

Atlasiet tabulu un ierakstiet {{cmd:BOMEDIT}}. Dialogā:

- **Kolonnas**: atzīmējiet tās, ko rādīt (pozīcija, daudzums, nosaukums, slānis, garums, laukums, piezīmes un katrs atribūts), ierakstiet savu virsrakstu jebkurai no tām un pārvietojiet tās augšup vai lejup.
- {{ui:Group rows by}} (grupēt rindas pēc): bloka nosaukums un atribūtu vērtības, tikai bloka nosaukums, slānis vai viens atribūts. Apvienotā rindā vērtība, kas atšķiras starp blokiem, rāda "dažāda".
- {{ui:Sort by}} (kārtot pēc) jebkuras kolonnas, augošā vai dilstošā secībā.
- {{ui:Title}} (virsraksts), {{ui:Show the title}} (rādīt virsrakstu) un {{ui:Totals row}} (kopsummu rinda).
- {{ui:Count linework by layer}} (skaitīt līnijzīmējumu pēc slāņa) pievieno vienu rindu katram slānim ar objektu skaitu, to kopējo garumu un slēgtām formām to kopējo laukumu rasējuma vienībās.
- **Piezīmes**: atzīmējiet kolonnu Piezīmes, tad ierakstiet piezīmi jebkurai tabulas rindai dialoga apakšā.

Katra tabula saglabā savas izvēles.

## Pozīciju numuri

Rinda saglabā savu pozīcijas numuru, kamēr tā ir tabulā. Jauna rinda saņem nākamo brīvo numuru, un jau izdots numurs netiek izmantots atkārtoti, tāpēc marķieri un piezīmes, kas citē numuru, paliek pareizas. {{ui:Renumber items}} (pārnumurēt pozīcijas) numurē tās no 1 rādītajā secībā.

Rinda tiek atpazīta pēc tā, ko tā grupē: ja maināt, kā rindas tiek grupētas, vai maināt atribūta vērtību, ko grupēšana izmanto, rinda tiek uzskatīta par jaunu.

## Eksports un citas programmas

{{cmd:BOMEXPORT}} vai {{ui:Export CSV}} dialogā saglabā tabulu kā .csv failu izklājlapai.

DWG vai DXF failā tabula ir parasts bloks ar līnijām un tekstu, tāpēc citas programmas to rāda un drukā kā zīmētu. Tur tā nav tabulas objekts, un tā neatjaunojas citās programmās. Saite uz tās zonu tiek paturēta failā kā paplašinājuma dati, ko CadCraft nolasa atpakaļ, tāpēc tabula atkal ir dzīva, kad rasējumu atverat CadCraft. R12 DXF rasējumam bez lapas nesaglabājas zonas slāņa iestatījums "netiek drukāts".

Tabulas izvēršana pārvērš to brīvās līnijās un tekstā un pārtrauc saiti.

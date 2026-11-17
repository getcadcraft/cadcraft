---
title: Skenēti rasējumi un trase
summary: Ievietojiet skenētu lapu, nomērogojiet un izlīdziniet to, notīriet, apgrieziet vai izdzēsiet tās daļas, piesaistieties tās līnijām un izsekojiet to līnijās un lokos.
keywords: skenēt, skenēts rasējums, rastrs, tiff, jpeg, png, mērogs, izlīdzināt, taisnot, troksnis, slieksnis, melnbalts, apgriezt, dzēst, trase, vektorizēt, piesaiste, loki, svītrojums, papīra rasējumi, vecie rasējumi, scanattach, scantrace
from: 36227e5b
---

## No papīra lapas līdz zīmējuma objektiem

Skenēts rasējums ir attēls. CadCraft saglabā jūsu doto attēlu un nekad to nemaina: katrs tīrīšanas solis izveido jaunu attēlu, ar vienu atsaukšanas soli katram; {{cmd:SCANINFO}} parāda oriģinālo failu un soļus, kas veikti kopš tā laika. Nekas netiek sūtīts nekur, un neko neizvērtē apmācīts modelis: tīrīšana un trase ir parasta attēlu apstrāde, un tā notiek jūsu datorā.

1. **Ievietojiet to.** {{cmd:SCANATTACH}} nolasa PNG, JPEG, TIFF (viena lapa vai visas daudzlapu faila lapas) vai PDF lapu, kas ir attēls. Tā jautā lapu, apakšējo kreiso stūri un platumu. PDF lapai tā jautā arī, cik pikseļu collā lapu zīmēt.
2. **Nomērogojiet to.** {{cmd:SCANSCALE}}: norādiet divus punktus uz skenējuma un pēc tam ierakstiet patieso attālumu starp tiem. Lapa tiek nomērogota ap pirmo punktu.
3. **Izlīdziniet to.** {{cmd:SCANALIGN}}: norādiet divus punktus uz skenējuma un divas vietas, kur tiem jāatrodas; lapa pārvietojas un pagriežas, lai tiktu pielāgota, un arī mērogojas, ja neatbildat Nē.
4. **Taisnojiet to.** {{cmd:SCANDESKEW}} izmēra leņķi, kādā lapas garās līnijas atrodas, un parāda to kopā ar to, cik lielu pārliecību tas dod. Apstipriniet to vai ierakstiet savu, un lapa tiek pagriezta. Lapa ar maz garām līnijām saņem brīdinājumu: pārbaudiet leņķi, pirms to apstiprināt.
5. **Notīriet to.** {{cmd:SCANCLEAN}} padara lapu melnbaltu (Automātiski vispirms izlīdzina papīru; Adaptīvi seko papīra izmaiņām precīzāk; Līmenis ir viens skaitlis visai lapai) un noņem traipus līdz jūsu iestatītajam izmēram.
6. **Apgrieziet un dzēsiet.** {{cmd:SCANCROP}} saglabā logu. {{cmd:SCANERASE}} dzēš taisnstūri, daudzstūri vai lasso (nospiediet un velciet): zīmogus, piezīmes, kafijas traipu.

Notīrītais attēls ir tas, ko saglabātais DWG satur (IMAGE un tā IMAGEDEF, ar attēla failu blakus zīmējumam, kā jebkuram attēlam).

## Piesaistīšanās skenējuma līnijām

Ar {{cmd:RASTERSNAP}} ieslēgtu (pēc noklusējuma), objektu piesaistes atrod arī melnbalta skenējuma līnijas: līniju galus, vidus, stūrus un krustpunktus, kas parādās ar parastajām piesaistes zīmēm. Lapas daļa zem kursora tiek izsekota, kamēr kustaties; tuvinājiet pietiekami, lai viens pikselis būtu dažu ekrāna pikseļu liels. Līnija, kas garāka par izsekoto daļu, tiek sekota līdz tās galiem.

## Trase

{{cmd:SCANTRACE}} pārvērš lapas līnijas līnijās un lokos jaunā slānī (SCAN-TRACE) kā vienu atsaukšanas soli, ar skenējumu joprojām zem tām. Jūs iestatāt:

- **Pielaide:** cik tālu izsekota līnija vai loks var atrasties no skenējuma līnijām zīmējuma vienībās (pārskatā norādīti arī pikseļi). Stingra pielaide seko katrai svārstībai; vaļīga veido mazāk, taisnākus gabalus.
- **Logs:** lapas stūris vai visa lapa.
- **Loki:** izslēgts veido tikai līnijas.
- **Atlikumi:** tas, ko trase atstāja neskartu, tiek zīmēts kā kastes slānī, ko var izslēgt, vai netiek zīmēts.

Trase atrod katras līnijas centru, seko tai, pielāgo taisnas līnijas un riņķa lokus, savieno posmus, kas tika pārtraukti krustojumā ar citu līniju, padara gandrīz horizontālas un gandrīz vertikālas līnijas tieši horizontālas un vertikālas un aizver stūrus. **Teksts un svītrojums paliek kā rastrs:** gabali lielumā, kāds ir burtiem, tiek atlikti malā, un īsu paralēlu līniju kopas tiek uzskatītas par svītrojumu un arī atliktas malā.

Kad tā pabeidz, tā paziņo, cik līniju un loku izveidoja, pielaidi un cik gabalu atstāja kā rastru. **Tas ir tas, ko pikseļi deva ar šo pielaidi, un tas nav apgalvojums, ka rezultāts ir pareizs.** Salīdziniet to ar lapu: trase var nepamanīt vāju līniju, savienot divas ļoti tuvas līnijas vai uzzīmēt līniju tur, kur ir tikai traips. Vispirms notīriet skenējumu (izlīdzināts, melnbalts, bez traipiem), un rezultāts būs daudz labāks.

## Ko tas nenolasa

TIFF faili, kas glabāti flīzēs, BigTIFF, TIFF ar JPEG vai deflate saspiešanu, Group 3 faksa kodējums un krāsas, kas glabātas atsevišķās plaknēs, tiek noraidīti ar ziņojumu; saglabājiet tos atkārtoti kā sloksnes ar LZW, PackBits, Group 4 vai bez saspiešanas. Interlaced PNG faili arī tiek noraidīti. Faili lielāki par 128 MB vai 100 miljoniem pikseļu tiek noraidīti, un trases logs var saturēt ne vairāk kā 64 miljonus pikseļu.

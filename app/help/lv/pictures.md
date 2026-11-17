---
title: Attēli rasējumā
summary: Ievietojiet PNG vai JPEG attēlu, apgrieziet to līdz taisnstūrim vai daudzstūrim, parādiet DWG izmantotos attēlus un drukājiet tos asus.
keywords: pastearea, parea, kopēt apgabalu, kopēts apgabals, markupcraft, īstais izmērs, reālais izmērs, pārklājums, ole, ole2frame, iegults objekts, ielīmēt attēlu, ielīmēt ekrānuzņēmumu, ctrl+v, starpliktuves attēls, ekrānuzņēmums, attēls, bilde, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logotips, foto, rastrs, imagedef, xref, drukāt, pdf, izšķirtspēja
from: 4025ac97
---

## Ko jūs izveidosiet

Uzņēmuma logotipu, kas ievietots titulblokā, apgrieztu līdz daļai, kas jums nepieciešama, un PDF, kurā tas drukājas ar savu izšķirtspēju.

## Ievietojiet attēlu

1. Ierakstiet {{cmd:IMAGEATTACH}} (vai `IAT`) un nospiediet {{key:Enter}}. Izvēlieties PNG vai JPEG failu.
2. `Specify the lower-left corner`: noklikšķiniet vai ierakstiet punktu.
3. `Specify its width`: platums rasējuma vienībās. {{key:Enter}} saglabā piedāvāto platumu: vienu vienību uz pikseli vai platumu, ko pēdējo reizi norādījāt šim failam (uzvedne norāda, kuru).
4. `Specify its rotation angle`: {{key:Enter}} nozīmē bez pagriešanas.

Attēls ir viens objekts: atlasiet to pēc tā rāmja un pārvietojiet, kopējiet, pagrieziet, mērogojiet vai dzēsiet kā jebkuru bloku.

:::note
Attēla fails paliek kopā ar rasējumu, kamēr tas ir atvērts. Saglabāts DWG nosauc failu, kā to dara citas programmas; tas neglabā pikseļus. Glabājiet attēlu blakus rasējumam.
:::

## Ielīmējiet ekrānuzņēmumu vai kopētu attēlu

1. Nokopējiet attēlu (ekrānuzņēmums ar {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=jūsu ekrānuzņēmuma rīks}} vai kopējiet attēlu citā programmā vai pārlūkprogrammā).
2. Norādiet vietu rasējumā, kur tam jābūt, un nospiediet {{key:Mod+V}}.

Attēla apakšējais kreisais stūris nonāk pie rādītāja (vai skata vidū) un ir 40 % no redzamā platuma; pārvietojiet, mērogojiet un apgrieziet to kā jebkuru attēlu. Tā nosaukums ir rasējuma nosaukums ar `-picture-1.png` (tad `-2` …), un vēsture to norāda.
{{ui:Rediģēt}} › {{ui:Vairāk}} › {{ui:Ielīmēt attēlu}} dara to pašu no izvēlnes (pārlūkprogramma var vispirms jautāt).

DWG saglabā tikai attēla faila nosaukumu, tāpēc rasējuma saglabāšana saglabā arī attēlu kā atsevišķu failu. Glabājiet abus vienā mapē: rasējums rāda attēlu no turienes. Pārlūkprogrammā tas ir otrs lejupielādes fails, un vēsture to norāda. Ja starpliktuvē nav nekā cita kā CadCraft objekti, {{key:Mod+V}} tos ielīmē kā agrāk.

## Ielīmējiet apgabalu, kas kopēts MarkupCraft

{{ui:Kopēt apgabalu}} MarkupCraft kopē daļu no lapas kā attēlu, kas zina, cik liels tas ir. CadCraft to ielīmē šajā izmērā.

1. MarkupCraft nokopējiet apgabalu (taisnstūri, apli vai brīvas formas figūru; {{ui:Kopēt kā pārklājumu}}, ja vēlaties redzēt savu rasējumu caur to).
2. CadCraft nospiediet {{key:Mod+V}} vai ierakstiet {{cmd:PASTEAREA}} (vai `PAREA`), vai izvēlieties {{ui:Rediģēt}} › {{ui:Vairāk}} › {{ui:Ielīmēt kopētu apgabalu}}.
3. `Specify the lower-left corner of the copied area`: noklikšķiniet vai ierakstiet punktu. Apgabala izmēra rāmis seko rādītājam.

Cik liels tas nonāk:

- **Lapai bija rasējuma mērogs:** reālā izmērā, rasējuma vienībās (1:50 detaļa 2 m kāpnēm ir 2 m gara metru rasējumā, 78.74 collu rasējumā). Nekas vairāk netiek prasīts.
- **Lapai nebija mēroga:** CadCraft saka tās izmēru uz papīra un prasa mērogu: ierakstiet `100` 1:100 lapai, nospiediet {{key:Enter}} papīra izmēram, vai ierakstiet `P`, noklikšķiniet divus punktus uz ielīmētā attēla un ierakstiet, cik tālu tie patiesībā atrodas viens no otra (kā dara {{cmd:SCANSCALE}}). Apakšējais kreisais stūris paliek, kur to ievietojāt.

Rasējums bez vienībām ņem milimetrus, kā to dara PDF pamatne. Pārklājums paliek caurspīdīgs papīrs un sākas tikpat izbalējis, cik bija kopēts; ārpus apļa vai brīvas formas figūras arī ir caurspīdīgs. Ielīmētais apgabals ir attēls kā jebkurš cits: pārvietojiet, pagrieziet, mērogojiet, apgrieziet vai dzēsiet to, un viss ielīmējums ir viens atsaukšanas solis. Saglabāts kā DWG, tas ir IMAGE ar savu izbalēšanu un caurspīdīgumu.

{{key:Mod+V}} ielīmē apgabalu, kad starpliktuvē esošais attēls ir šī apgabala, vai kad apgabals ir kopēts pēc jebkā, ko jūs kopējāt CadCraft (un pēdējo 6 stundu laikā). Citādi tas ielīmē kā agrāk. {{cmd:PASTEAREA}} ielīmē pēdējo kopēto apgabalu jebkurā laikā.

## Parādiet DWG izmantotos attēlus

DWG glabā tikai to, kur atradās tā attēli, tāpēc CadCraft katru rāda kā rāmi ar tā faila nosaukumu.

1. Ierakstiet {{cmd:IMAGE}} (vai `IM`). Komandrindā parādās katrs attēla fails un tas, vai tas tiek rādīts.
2. Izvēlieties failus (vairākus vienlaikus). Fails, kura nosaukums satur to, ko rasējums nosauc, arī tiek skaitīts, jo eksporti bieži pievieno projekta priedēkli.

## Apgrieziet attēlu

1. Ierakstiet {{cmd:IMAGECLIP}} (vai `ICL`) un atlasiet attēlu.
2. Izvēlieties `R` un noklikšķiniet divus stūrus vai `P` un noklikšķiniet daudzstūra punktus, tad {{key:Enter}}. `D` noņem apgriešanu.

## Drukājiet attēlus

Attēli PDF tiek ievietoti kā attēli, savā izšķirtspējā un zem līnijām. Dialogā {{ui:Drukāt PDF}} {{ui:Attēli}} var ierobežot tos līdz 600, 300 vai 150 dpi, lai fails būtu mazāks. JPEG tiek ievietots tādā, kāds tas ir.

## Kas kur tiek saglabāts

| Formāts | Attēli |
|---|---|
| DWG (katra versija) | Kā attēli (IMAGE), ar to apgriešanu |
| DXF | Kā to rāmji ar faila nosaukumu; saglabāšana to norāda |

## Objekti no citām programmām (OLE)

Rasējumā var būt objekti, ko izveidoja cita programma, piemēram, attēls no zīmēšanas programmas vai izklājlapas diapazons (OLE objekti). CadCraft tos nepalaiž un nerediģē, un nevar ievietot jaunus. Ko tas dara:

- **DXF** OLE objekts atveras kā rāmis. Ja objekts saglabāja savu attēlu un tas ir bitkarte, attēls tiek zīmēts rāmī; citādi rāmis satur etiķeti ar objekta veidu, piemēram, "Microsoft Excel Worksheet (OLE)". Rāmi var pārvietot, kopēt un dzēst kā bloku. {{cmd:SAVEAS}} uz DXF 2000 to atkal raksta kā OLE objektu ar nemainītiem datiem.
- **DWG** objekti tiek paturēti un rakstīti atpakaļ, saglabājot kā DWG, baitu pa baitam, bet tie **netiek rādīti**: DWG glabā objekta vietu savos datos, un CadCraft to vēl nelasa. Vēsture norāda, cik tika paturēti. Ierakstiet {{cmd:OLELIST}}, lai redzētu, kas tie ir (veids, izmērs, vai katrs saglabāja attēlu), un lai ielieku attēla kopiju, kur izvēlaties: **Novietot** prasa numuru, apakšējo kreiso stūri un platumu un zīmē rāmi ar attēlu iekšā. Šī kopija ir rāmis, ko var pārvietot vai dzēst; pats objekts paliek rasējumā un tiek rakstīts atpakaļ, kad saglabājat.
- Objekts, kas nācis no DXF, DWG tiek saglabāts tikai kā rāmis un etiķete; vēsture to norāda. Saglabājiet kā DXF 2000, lai paturētu pašu objektu.
- Attēli, kas ir metafaili (ko daudzas programmas saglabā), netiek zīmēti: tā vietā rāda rāmi un etiķeti.

## Biežākās kļūdas

| Ko redzat | Kāpēc | Labojums |
|---|---|---|
| Rāmis ar faila nosaukumu | CadCraft nav šī faila | {{cmd:IMAGE}}, tad izvēlieties failu |
| "That is not a picture" | Atlasītais objekts nav attēls | Atlasiet attēla rāmi |

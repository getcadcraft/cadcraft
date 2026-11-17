---
title: Vienības, papīra izmēri un mērogi
summary: Ko nozīmē rasējuma vienības CadCraft, papīra izmēri lapām un drukām, katrs standarta mērogs un kā teksta un izmēru lielumi attiecas uz drukas mērogu.
keywords: vienības, milimetri, collas, pēdas, pēdas un collas, arhitektūras, inženierijas, daļskaitļi, lunits, garuma formāts, precizitāte, metri, papīra izmērs, a3, a1, arch d, ansi, tabloid, letter, mērogs, 1:100, 1/4 collas, arhitektūras mērogs, inženierijas mērogs, insunits
from: 8346236a
---

## Rasējuma vienības

Jūs zīmējat pilnā izmērā, rasējuma vienībās. To, ko viena vienība nozīmē, nosaka rasējuma iestatījums {{ui:Vienības}}:

1. Nospiediet {{key:Esc}}, lai nekas nav atlasīts, cilnē {{ui:Modelis}}.
2. Sadaļā {{ui:Pašreizējie iestatījumi}} izvēlieties {{ui:Vienības}}: {{ui:Bez vienībām}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Collas}} vai {{ui:Pēdas}}.

Izmēri var rakstīt savus garumus milimetros, centimetros, metros vai kilometros neatkarīgi no rasējuma vienības: skatiet [Izmēri mm, cm, m vai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Mainot vienības, nekas netiek pārmērots. Tās maina to, kā tiek lasīti mērogi lapās un drukās, un kuri mērogi tiek piedāvāti. Rasējums, kas atvērts no DWG vai DXF, paliek ar vienībām, kas ir failā; kreisā paneļa sadaļa {{ui:Rasējums}} tās rāda.

Rasējums {{ui:Bez vienībām}} tiek uzskatīts par papīra vienībās: milimetros ISO papīram, collās ASV papīram.

## Pēdas un collas, un daļskaitļi

Kā garumi tiek **rakstīti un ievadīti**, ir atsevišķs iestatījums — garuma formāts. Tas nemaina nekādu ģeometriju, tikai to, kā izskatās skaitļi un ko var ievadīt.

1. Nospiediet {{key:Esc}}, lai nekas nav atlasīts, cilnē {{ui:Modelis}}.
2. Sadaļā {{ui:Pašreizējie iestatījumi}} izvēlieties {{ui:Garuma formāts}}: {{ui:Decimālais}} (`150.5`), {{ui:Arhitektūras}} (`12'-6 1/2"`), {{ui:Inženiertehniskais}} (`12'-6.5"`), {{ui:Daļskaitļu}} (`150 1/2`) vai {{ui:Zinātniskais}} (`1.505E+02`).
3. Izvēlieties {{ui:Precizitāte}}: decimālzīmes vai mazāko daļu (1/16 ir parastā izvēle arhitektūras formātam).

Vai ierakstiet {{cmd:UNITS}} (`UN`) un atbildiet uz tā diviem jautājumiem.

Ar {{ui:Arhitektūras}} vai {{ui:Inženiertehniskais}} viena rasējuma vienība ir viena colla, kā AutoCAD: iestatiet arī {{ui:Vienības}} uz {{ui:Collas}}. Tad varat ievadīt garumus pēdās un collās visur, kur tiek prasīts garums, un laukos {{ui:Rekvizīti}}:

| Jūs ierakstāt | Nozīmē |
|---|---|
| `12'6"` vai `12'-6"` | 12 pēdas 6 collas (150) |
| `12'6-1/2"` | 12 pēdas 6½ collas. Pirms daļskaitļa izmantojiet defisi: {{key:Space}} komandrindā ir {{key:Enter}}. |
| `12'` | 12 pēdas |
| `6"` vai `6` | 6 collas: vienkāršs skaitlis ir collas |
| `1/2`, `6-1/2` | daļskaitļi darbojas jebkurā formātā |

Punkti pieņem tos pašus garumus: `@12'6",0` vai `@10'<90`. Leņķi paliek grādos.

Formāts parādās vēsturē ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: laukumi kā kvadrātcollas un kvadrātpēdas), sadaļā {{ui:Rekvizīti}}, koordinātās statusa joslā un **jaunos izmēros**. Lapas paturēs savas papīra vienības (milimetri vai collas) kā decimāldaļas.

:::note
Garuma formāts tiek saglabāts DWG un DXF failos, un katrs izmērs paturē savu: saglabāts rasējums atveras tā, kā to atstājāt.
:::

## Papīra izmēri

Lapām un modeļa drukām tiek izmantoti šie izmēri jebkurā orientācijā:

| Papīrs | Izmērs | Vienība uz lapas |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetri |
| ISO A3 | 420 × 297 mm | milimetri |
| ISO A2 | 594 × 420 mm | milimetri |
| ISO A1 | 841 × 594 mm | milimetri |
| ISO A0 | 1189 × 841 mm | milimetri |
| Letter | 11 × 8.5 in | collas |
| Legal | 14 × 8.5 in | collas |
| Tabloid / ANSI B | 17 × 11 in | collas |
| ANSI C | 22 × 17 in | collas |
| ANSI D | 34 × 22 in | collas |
| ARCH C | 24 × 18 in | collas |
| ARCH D | 36 × 24 in | collas |
| ARCH E | 48 × 36 in | collas |

Jaunas lapas sākas ar ISO A3 metriskiem un bez vienībām esošiem rasējumiem, un ar Tabloid rasējumiem collās vai pēdās. Modeļa drukas sākas ar ISO A4 vai Letter tādā pašā veidā, tad atceras jūsu pēdējo izvēli. Lapas no atvērtiem failiem paturēs savu izmēru, kas tiek rādīts kā "Pielāgots", ja tas nav viens no šiem.

## Mērogi

Mērogs `1:n` nozīmē, ka viena vienība uz papīra rāda n tādas pašas vienības modelī, tātad 1:100 rāda 1 m ēkas kā 10 mm papīra. CadCraft to aprēķina no rasējuma vienībām un papīra vienības.

**Metriskie mērogi**, piedāvāti katram rasējumam: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektūras mērogi**, piedāvāti, kad vienības ir collas vai pēdas: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženierijas mērogi**, piedāvāti, kad vienības ir collas vai pēdas: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Jūsu pašu mērogi.** Ierakstiet `SCALELISTEDIT` (vai `SCALELIST`), lai pievienotu savu mērogu, piemēram, 1:75 vai vietas mērogu 2 papīra : 300 rasējuma. `Add` prasa nosaukumu, tad papīra vienības un rasējuma vienības (nosaukums, piemēram, `1:75`, piedāvā savus skaitļus; nospiediet {{key:Enter}}, lai tos pieņemtu). `Edit`, `Delete`, `List` un `Reset` strādā ar to pašu sarakstu; `Reset` atgriež standarta sarakstu. Jūsu mērogi parādās aiz standartiem skatloga mēroga sarakstā sadaļā {{ui:Rekvizīti}} un dialogā {{ui:Drukāt PDF}}, skatlogs šajā mērogā tiek nolasīts ar savu nosaukumu, un tie tiek saglabāti rasējumā (DWG un DXF 2000) kā rasējuma mēroga saraksts. Rasējums, kas atvērts no citas programmas, ienes savu sarakstu; mērogi, kas sakrīt ar standartiem, netiek rādīti divreiz.

Kad skatlogs tiek vērsts ar {{ui:Parādīt visu modeli}} vai {{ui:Norādiet logu modelī…}}, CadCraft izvēlas lielāko standarta mērogu, kas iederas. {{ui:Pielāgot visu modeli}} iestata precīzu mērogu, kas tiek rādīts kā vienkārša attiecība.

## Izmēri uz papīra un modelī

Teksta un izmēru lielumi ir tās telpas vienībās, kurā zīmējat.

| Jūs vēlaties uz papīra | Zīmēts lapā | Zīmēts modelī mērogā 1:50 (mm rasējums) | Zīmēts modelī 1/4" = 1'-0" (collu rasējums) |
|---|---|---|---|
| 2.5 mm teksts | 2.5 | 125 | — |
| 3/32" teksts | 0.09375 | — | 4.5 |

Izmēriem turiet lielumus kā papīra izmērus un iestatiet kopējo mērogu ({{cmd:DIMSCALE}}) uz drukas mērogu: 50 mērogam 1:50, 48 mērogam 1/4" = 1'-0". Skatiet [Izmēru lielumu iestatīšana](topic:dimension-settings).

## Anotācija pēc mēroga

Zīmējiet modeli pilnā izmērā un ļaujiet CadCraft veikt iepriekš minētos aprēķinus.

1. Atlasiet tekstu vai izmērus, kuriem jāsaglabā savs izmērs uz papīra. Sadaļā {{ui:Rekvizīti}} atzīmējiet {{ui:Anotatīvs}}. {{ui:Izmērs uz papīra}} tad rāda, piemēram, `2.5 mm at 1:50`.
2. Ierakstiet {{cmd:ANNOSCALE}} un mērogu, kādā rasējums tiks drukāts, piemēram, `1:100`.

Katrs anotatīvais teksts un izmērs tiek pārlielots tā, lai tas tiktu drukāts tādā pašā izmērā jaunā mērogā: 2.5 mm teksts ir 125 augsts milimetru rasējumā 1:50 un 250 augsts 1:100. Paragrāfa platums mainās līdzi; izmēra teksts, bultiņas un atstarpes mainās kopā (tā kopējais mērogs). Tas ir viens atsaukšanas solis, un neanotatīvie objekti nekad netiek mainīti.

Iestatījums tiek saglabāts DWG un DXF: citas programmas nolasa anotatīvo karodziņu, un CadCraft arī paturē mērogu, kam katrs objekts ir izmērīts.

Ja jūsu birojs iestata papīra augstumus papildinājumā Default Policies (Iestatījumi › Globāls › Default Policies › Anotāciju izmēri uz papīra), {{cmd:ANNOSCALE}} arī iestata jaunā teksta sākuma augstumu uz biroja augstumu piezīmēm šajā mērogā. Skatiet [Default Policies](topic:default-policies).

### Viens objekts vairākos mērogos

Lapa bieži rāda to pašu plānu 1:100 un tā daļu 1:50. Dodiet piezīmēm un izmēriem abus mērogus, un katrs skatlogs tos rāda to papīra izmērā:

1. Atlasiet anotatīvo tekstu un izmērus un ierakstiet `OBJECTSCALE`.
2. Izvēlieties `Add` un ierakstiet mērogu, piemēram, `1:50`. (`Current scale` pievieno rasējuma anotācijas mērogu; `List` rāda, ko katrs objekts paturē; `Delete` noņem vienu.)

Skatlogs, kura mērogs ir objekta sarakstā, rāda to atbilstoši šī mēroga izmēram: 2.5 mm teksts tiek zīmēts 250 augsts caur skatlogu 1:100 un 125 augsts caur 1:50, ekrānā un drukā. Objekts paliek, kur bija; atšķiras tikai tā izmērs. Skatlogā mērogā, kas nav sarakstā, objekts tiek rādīts ar tādu izmēru, kāds tam ir, līdz ierakstāt `ANNOALLVISIBLE` un izvēlaties `OFF`: tad tas tur tiek izlaists. {{cmd:ANNOSCALE}} pārlielo objektus, kuru sarakstā ir jaunais mērogs, un pārējos atstāj kā ir.

Saraksti tiek saglabāti DWG un DXF kā CadCraft paši dati. Cita programma redz katru objektu kā anotatīvu, vienā mērogā, kam tas ir izmērīts. Pārslēgs ANNOALLVISIBLE failā netiek paturēts.

## Līnijas platumi un līniju tipi

Slānim vai objektam var būt **līnijas platums** (0.05 līdz 2.11 mm) un **līniju tips** (svītrota, slēpta, centrālā, fantoma, punkti…). Iestatiet tos labajā panelī: ja nekas nav atlasīts, {{ui:Līniju tips}} un {{ui:Līnijas platums}} sadaļā {{ui:Pašreizējie iestatījumi}} ir tas, ko iegūst jaunie objekti ({{ui:Pēc slāņa}}, lai sekotu to slānim), un divi zem {{ui:Slānis …}} ir pašreizējā slāņa paši. Ja objekti ir atlasīti, tās pašas divas rindas un {{ui:Līniju tipa mērogs}} maina šos objektus. Komandas ir {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) un {{cmd:LTSCALE}} (`LTS`).

Līniju tipi tiek rādīti ekrānā un drukās. To svītras ir rasējuma vienībās: metriskais rasējums izmanto ISO izmērus (DASHED: 12.7 mm svītras), collu rasējums — collu izmērus (0.5"). Ja svītras izskatās par mazas vai par lielas, mainiet rasējuma {{ui:Līniju tipa mērogs}} (LTSCALE): katra svītra un atstarpe tiek reizināta ar to; objekta paša mērogs to reizina vēlreiz. Modelis, kas ir pārāk smalks, lai to redzētu, tiek zīmēts kā cieta līnija.

Līnijas platumi drukājas mm uz papīra neatkarīgi no mēroga. Līnijas ar {{ui:Noklusējums}} līnijas platumu izmanto pildspalvas platumu, kas izvēlēts dialogā {{ui:Drukāt PDF}} (0.13 līdz 0.70 mm; sākumā 0.25 mm); līnijas platums 0 drukājas kā plānākā līnija. Ekrānā katra līnija ir viena pikseļa plata, līdz nospiežat {{ui:LWT}} statusa joslā (vai ierakstāt {{cmd:LWDISPLAY}}): tad līnijas platums virs 0.25 mm zīmē platāku (0.5 mm = 2 pikseļi) modelī un patiesajā platumā uz papīra lapā. Izvēle tiek atcerēta šajā pārlūkprogrammā.

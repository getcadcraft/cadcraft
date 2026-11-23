---
title: Vienības, papīra formāti un mērogi
summary: Ko nozīmē rasējuma vienības CadCraft, papīra formāti lapām un drukām, katrs standarta mērogs un kā teksta un izmēru izmēri attiecas uz drukas mērogu.
keywords: vienības, milimetri, collas, pēdas, pēdas un collas, arhitektūras, inženiertehniskais, daļskaitļu, lunits, garuma formāts, precizitāte, metri, papīra formāts, a3, a1, arch d, ansi, tabloid, letter, mērogs, 1:100, 1/4 collas, arhitektūras mērogs, inženiertehniskais mērogs, insunits
from: 7dc9b62e
---

## Rasējuma vienības

Jūs zīmējat pilnā izmērā rasējuma vienībās. To, ko nozīmē viena vienība, nosaka rasējuma iestatījums **Vienības**:

1. Nospiediet {{key:Esc}}, lai nekas nebūtu atlasīts, cilnē {{ui:Modelis}}.
2. Sadaļā {{ui:Pašreizējie iestatījumi}} izvēlieties {{ui:Vienības}}: {{ui:Bez vienībām}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Collas}} vai {{ui:Pēdas}}.

Izmēri var rakstīt garumus milimetros, centimetros, metros vai kilometros neatkarīgi no rasējuma vienības: skatiet [Izmēri mm, cm, m vai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Vienību maiņa neko nepārveido. Tā maina to, kā mērogi tiek nolasīti lapās un drukās, un kuri mērogi tiek piedāvāti. Rasējums, kas atvērts no DWG vai DXF, saglabā failā glabātās vienības; kreisā paneļa sadaļa {{ui:Rasējums}} tās rāda.

Rasējums bez {{ui:Bez vienībām}} tiek uzskatīts par papīra vienībās: milimetros ISO papīram, collās ASV papīram.

## Pēdas un collas, un daļskaitļi

To, kā garumi tiek **rakstīti un ierakstīti**, nosaka atsevišķs iestatījums — garuma formāts. Tas nemaina nevienu ģeometriju, tikai to, kā skaitļi izskatās un ko var ierakstīt.

1. Nospiediet {{key:Esc}}, lai nekas nebūtu atlasīts, cilnē {{ui:Modelis}}.
2. Sadaļā {{ui:Pašreizējie iestatījumi}} izvēlieties {{ui:Garuma formāts}}: {{ui:Decimālais}} (`150.5`), {{ui:Arhitektūras}} (`12'-6 1/2"`), {{ui:Inženiertehniskais}} (`12'-6.5"`), {{ui:Daļskaitļu}} (`150 1/2`) vai {{ui:Zinātniskais}} (`1.505E+02`).
3. Izvēlieties {{ui:Precizitāte}}: decimāldaļas vai mazāko daļskaitli (1/16 ir parastākā izvēle arhitektūrai).

Vai ierakstiet {{cmd:UNITS}} (`UN`) un atbildiet uz tā diviem jautājumiem.

Ar {{ui:Arhitektūras}} vai {{ui:Inženiertehnisko}} viena rasējuma vienība ir viena colla, kā AutoCAD: iestatiet arī {{ui:Vienības}} uz {{ui:Collas}}. Tad varat ierakstīt garumus pēdās un collās visur, kur tiek prasīts garums, un lodziņos {{ui:Rekvizīti}}:

| Jūs ierakstāt | Nozīmē |
|---|---|
| `12'6"` vai `12'-6"` | 12 pēdas 6 collas (150) |
| `12'6-1/2"` | 12 pēdas 6½ collas. Pirms daļas izmantojiet defisi: {{key:Space}} ir {{key:Enter}} komandrindā. |
| `12'` | 12 pēdas |
| `6"` vai `6` | 6 collas: vienkāršs skaitlis ir collas |
| `1/2`, `6-1/2` | daļskaitļi darbojas jebkurā formātā |

Punkti pieņem tos pašus garumus: `@12'6",0` vai `@10'<90`. Leņķi paliek grādos.

Formāts tiek rādīts vēsturē ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: laukumi kā kvadrātcollas un kvadrātpēdas), lodziņos {{ui:Rekvizīti}}, koordinātēs statusa joslā un **jaunos izmēros**. Lapas saglabā savas papīra vienības (milimetrus vai collas) kā decimāldaļas.

:::note
Garuma formāts tiek saglabāts DWG un DXF failos, un katrs izmērs glabā savu: saglabāts rasējums atveras tieši tā, kā to atstājāt.
:::

## Papīra formāti

Lapām un modeļa drukām tiek izmantoti šie izmēri jebkurā orientācijā:

| Papīrs | Izmērs | Vienība uz lapas |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetri |
| ISO A3 | 420 × 297 mm | milimetri |
| ISO A2 | 594 × 420 mm | milimetri |
| ISO A1 | 841 × 594 mm | milimetri |
| ISO A0 | 1189 × 841 mm | milimetri |
| Letter | 11 × 8,5 collas | collas |
| Legal | 14 × 8,5 collas | collas |
| Tabloid / ANSI B | 17 × 11 collas | collas |
| ANSI C | 22 × 17 collas | collas |
| ANSI D | 34 × 22 collas | collas |
| ARCH C | 24 × 18 collas | collas |
| ARCH D | 36 × 24 collas | collas |
| ARCH E | 48 × 36 collas | collas |

Jaunas lapas sākas ar ISO A3 metriskiem un bezvienību rasējumiem, un ar Tabloid rasējumiem collās vai pēdās. Modeļa drukas sākas ar ISO A4 vai Letter tādā pašā veidā, tad atceras jūsu pēdējo izvēli. Lapas no atvērtiem failiem paliek ar savu izmēru, kas tiek rādīts kā "Pielāgots", ja tas nav viens no šiem.

## Mērogi

Mērogs `1:n` nozīmē, ka viena vienība uz papīra rāda n tādas pašas vienības modelī, tātad 1:100 rāda 1 m ēkas kā 10 mm papīra. CadCraft to aprēķina no rasējuma vienībām un papīra vienības.

**Metriskie mērogi**, piedāvāti katram rasējumam: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arhitektūras mērogi**, piedāvāti, kad vienības ir collas vai pēdas: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Inženiertehniskie mērogi**, piedāvāti, kad vienības ir collas vai pēdas: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Jūsu pašu mērogi.** Ierakstiet `SCALELISTEDIT` (vai `SCALELIST`), lai pievienotu savu mērogu, piemēram, 1:75 vai vietas mērogu 2 papīra : 300 rasējuma. `Pievienot` jautā nosaukumu, tad papīra vienības un rasējuma vienības (nosaukums kā `1:75` piedāvā savus skaitļus; nospiediet {{key:Enter}}, lai tos pieņemtu). `Rediģēt`, `Dzēst`, `Saraksts` un `Atiestatīt` darbojas ar to pašu sarakstu; `Atiestatīt` atgriež standarta sarakstu. Jūsu mērogi parādās pēc standartiem skata loga mēroga sarakstā sadaļā Rekvizīti un dialogā {{ui:Drukāt PDF}}; skata logs ar šo mērogu tiek rādīts ar tā nosaukumu, un tie tiek saglabāti rasējumā (DWG un DXF 2000) kā rasējuma mēroga saraksts. Rasējums, kas atvērts no citas programmas, ienes savu sarakstu; mērogi, kas atbilst standartam, netiek rādīti divreiz.

Kad skata logs ir vērsts ar {{ui:Parādīt visu modeli}} vai {{ui:Norādiet logu modelī…}}, CadCraft izvēlas lielāko standarta mērogu, kas iederas. {{ui:Pielāgot visu modeli}} tā vietā iestata precīzu mērogu, kas tiek rādīts kā vienkārša attiecība.

## Izmēri uz papīra un modelī

Teksta un izmēru izmēri ir telpas vienībās, kurā zīmējat.

| Vēlaties uz papīra | Zīmēts uz lapas | Zīmēts modelī mērogā 1:50 (milimetru rasējums) | Zīmēts modelī mērogā 1/4" = 1'-0" (collu rasējums) |
|---|---|---|---|
| 2,5 mm teksts | 2,5 | 125 | — |
| 3/32" teksts | 0,09375 | — | 4,5 |

Izmēriem turiet izmērus kā papīra izmērus un iestatiet kopējo mērogu ({{cmd:DIMSCALE}}) uz drukas mērogu: 50 mērogam 1:50, 48 mērogam 1/4" = 1'-0". Skatiet [Iestatīt izmēru izmērus](topic:dimension-settings).

## Anotējiet pēc mēroga

Zīmējiet modeli pilnā izmērā un ļaujiet CadCraft veikt augstāk redzamos aprēķinus.

1. Atlasiet tekstu vai izmērus, kam jāsaglabā savs izmērs uz papīra. Rekvizītos atzīmējiet {{ui:Anotatīvs}}. {{ui:Izmērs uz papīra}} tad rāda, piemēram, `2,5 mm pie 1:50`.
2. Ierakstiet {{cmd:ANNOSCALE}} un mērogu, kādā rasējums tiks drukāts, piemēram, `1:100`.

Katrs anotatīvais teksts un izmērs tiek pārveidots tā, lai izdrukātos tādā pašā izmērā jaunajā mērogā: 2,5 mm teksts ir 125 augsts milimetru rasējumā mērogā 1:50 un 250 augsts mērogā 1:100. Paragrāfa platums mainās kopā ar to; izmēra teksts, bultiņas un atstarpes mainās kopā (tā kopējais mērogs). Tas ir viens atsaukšanas solis, un neanotatīvie objekti nekad netiek mainīti.

Iestatījums tiek saglabāts DWG un DXF: citas programmas nolasa anotatīvo karodziņu, un CadCraft arī glabā mērogu, kādam katrs objekts ir izmērots.

Ja jūsu birojs iestata papīra augstumus papildinājumā Noklusējuma politikas (Iestatījumi › Globāli › Noklusējuma politikas › Anotāciju izmēri uz papīra), {{cmd:ANNOSCALE}} arī iestata augstumu, ar kādu jauns teksts sākas, uz biroja augstumu piezīmēm šajā mērogā. Skatiet [Noklusējuma politikas](topic:default-policies).

### Viens objekts vairākos mērogos

Lapā bieži tiek rādīts tas pats plāns mērogā 1:100 un tā daļa mērogā 1:50. Piešķiriet piezīmēm un izmēriem abus mērogus, un katrs skata logs tos rāda savā papīra izmērā:

1. Atlasiet anotatīvo tekstu un izmērus un ierakstiet `OBJECTSCALE`.
2. Izvēlieties `Pievienot` un ierakstiet mērogu, piemēram, `1:50`. (`Pašreizējais mērogs` pievieno rasējuma anotācijas mērogu; `Saraksts` parāda, ko katrs objekts glabā; `Dzēst` noņem vienu.)

Skata logs, kura mērogs ir objekta sarakstā, to rāda izmērā šim mērogam: 2,5 mm teksts tiek zīmēts 250 augsts caur 1:100 skata logu un 125 augsts caur 1:50, ekrānā un drukā. Objekts paliek savā vietā; atšķiras tikai tā izmērs. Skata logā ar mērogu, kas nav objekta sarakstā, objekts tiek rādīts ar izmēru, kāds tam ir, līdz ierakstāt `ANNOALLVISIBLE` un izvēlaties `OFF`: tad tas tur netiek rādīts. {{cmd:ANNOSCALE}} pārveido objektus, kas sarakstā glabā jauno mērogu, un pārējos atstāj kā ir.

Saraksti tiek saglabāti DWG un DXF kā CadCraft paši dati. Cita programma redz katru objektu kā anotatīvu, vienā mērogā, kādam tas izmērots. Slēdzis ANNOALLVISIBLE failā netiek saglabāts.

## Līnijas platumi un līniju tipi

Slānim vai objektam var būt **līnijas platums** (0,05 līdz 2,11 mm) un **līniju tips** (punktēta, paslēpta, centra, fantoma, punktu…). Iestatiet tos labajā panelī: ja nekas nav atlasīts, {{ui:Līniju tips}} un {{ui:Līnijas platums}} sadaļā {{ui:Pašreizējie iestatījumi}} ir tas, ko iegūst jauni objekti ({{ui:Pēc slāņa}}, lai sekotu to slānim), un abi zem {{ui:Slānis …}} ir pašreizējā slāņa paši. Ja objekti ir atlasīti, tās pašas divas rindas un {{ui:Līniju tipa mērogs}} maina šos objektus. Komandas ir {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) un {{cmd:LTSCALE}} (`LTS`).

Līniju tipi tiek rādīti ekrānā un drukās. To svītriņas ir rasējuma vienībās: metriskam rasējumam tiek izmantoti ISO izmēri (DASHED: 12,7 mm svītriņas), collu rasējumam — collu izmēri (0,5"). Ja svītriņas izskatās pārāk mazas vai pārāk lielas, mainiet rasējuma {{ui:Līniju tipa mērogs}} (LTSCALE): katra svītriņa un atstarpe tiek reizināta ar to; objekta paša mērogs to reizina vēlreiz. Modelis, kas ir pārāk smalks, lai to redzētu, tiek zīmēts kā cieta līnija.

Līnijas platumi tiek drukāti mm uz papīra neatkarīgi no mēroga. Līnijas ar {{ui:Noklusējums}} līnijas platumu izmanto pildspalvas platumu, kas izvēlēts dialogā {{ui:Drukāt PDF}} (no 0,13 līdz 0,70 mm; sākumā 0,25 mm); līnijas platums 0 tiek drukāts kā plānākā līnija. Ekrānā katra līnija ir viens pikselis platumā, līdz nospiežat {{ui:LWT}} statusa joslā (vai ierakstāt {{cmd:LWDISPLAY}}): tad līnijas platums virs 0,25 mm zīmē platāku (0,5 mm = 2 pikseļi) modelī un savā patiesajā platumā uz papīra lapā. Izvēle tiek saglabāta šajā pārlūkprogrammā.

## Biroja standarts

Birojs var glabāt savus papīra teksta augstumus, slāņus, titula bloka laukus un veidnes vienā ierakstā — biroja standartā. CadCraft to nolasa šādā secībā: rasējuma paša ieraksts (iestatīts ar {{cmd:OFFICESTANDARD}} › `Importēt`, saglabāts failā), jūsu komandas kopīgais standarts, tad jūsu Noklusējuma politikas. Anotatīvais teksts un izmēri ņem savu papīra augstumu no tā anotācijas mērogā. Tukšs standarts neko nemaina. {{cmd:OFFICESTANDARD}} › `Slāņi` pievieno biroja slāņus, kas rasējumam trūkst.

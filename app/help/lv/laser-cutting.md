---
title: Zīmējuma sūtīšana uz lāzeru
summary: Atveriet lāzera paneli, izvēlieties, ko dara katrs slānis (griezt, rievot, gravēt, aizpildīt, attēls), apskatiet galvas kustības, saglabājiet GRBL lāzera režīma G-kodu vai nosūtiet to no pārlūkprogrammas pēc darba apvilkšanas.
keywords: lāzers, lāzera griezējs, lāzera gravētājs, GRBL, G-kods, gcode, gravēt, aizpildīt, dithering, attēla gravēšana, rievot, griezt, Web Serial, apvilkt darbu, jauda, ātrums, gājieni, LASER, LASERCUT, CNC
from: 72b56db0
---

Panelis {{ui:Lāzers}} pārvērš rasējuma slāņus programmā lāzeram, kas darbojas ar GRBL (vairums hobiju un mazo darbnīcu diodu un CO2 lāzeru vadības ierīču). Ierakstiet `LASER` (vai `LASERCUT`) un nospiediet {{key:Enter}}, vai izvēlieties {{ui:Lāzers…}} izvēlnē {{ui:Vairāk}} grupā {{ui:Skats}}. Lentes stilos tas atrodas izvēlnē {{ui:Fails}} un blakus {{ui:Drukāt}}. Panelis atveras pāri rasējumam un paliek atvērts, kamēr zīmējat: priekšskatījums seko katrai izmaiņai.

:::warning
Pārbaudiet katru iestatījumu vispirms uz lieka materiāla, valkājiet acu aizsardzību, kas der jūsu lāzeram, turiet vāku aizvērtu, kur tāds ir, un nekad neatstājiet darbojošos lāzeru bez uzraudzības. Skaitļi, ar kuriem slānis sākas, ir vietturi, nevis ieteikumi kādam materiālam.
:::

## Kas tiek nosūtīts

Panelis nolasa modeli (nevis lapas) slāņos, kas ir ieslēgti un nav sasaldēti:

- Līnijas, loki, riņķi, polilīnijas (loka segmenti paliek loki), elipses un splainī. Forma, kas beidzas tur, kur sākas, tiek uzskatīta par slēgtu.
- Bloki tiek izjaukti: objekts slānī 0 bloka iekšienē tiek nosūtīts kopā ar bloka atsauces slāni.
- Svītrojums nosūta savu robežu, tāpēc svītrots logotips uz slāņa **Aizpildīt** tiek aizpildīts.
- Attēls (`IMAGEATTACH`) tiek gravēts slānī, kas iestatīts uz **Gravēt attēlu**, ja tas atrodas taisni (nav pagriezts vai slīps) un tā fails ir atvērts CadCraft.
- Teksts, izmēri, norādes, punkti un konstrukcijas līnijas netiek nosūtītas; panelis parāda, cik no tām izlaists. Lai izdedzinātu tekstu, uzzīmējiet burtus kā formas vai nosvītrojiet tos.

Izmēri tiek nosūtīti milimetros no rasējuma vienībām (`UNITS`): rasējums collās tiek reizināts ar 25.4. Rasējums bez iestatītām vienībām tiek nosūtīts kā viena vienība uz vienu milimetru. Atzīmējiet {{ui:Tikai atlasītie objekti}}, lai nosūtītu daļu no rasējuma.

## Izvēlieties, ko dara katrs slānis

Katrs slānis, kurā kaut kas ir, ir rinda. {{ui:Dara}} iestata to uz **Griezt**, **Rievot**, **Gravēt līnijas**, **Aizpildīt formas**, **Gravēt attēlu** vai **Nav nosūtīts**, ar {{ui:Jauda %}}, {{ui:Ātrums mm/min}} un {{ui:Gājieni}} skaitu. Katra izmaiņa ir viens atsaucams solis un tiek saglabāta rasējumā: DWG (katra versija, ko CadCraft saglabā) un DXF saglabā iestatījumus, tāpēc rasējums nākamreiz atveras ar tiem. Citas programmas failu atver kā parasti; tās redz vienu neizmantotu bloku ar nosaukumu CADCRAFT_LASER (tā dzēšana tur noņem iestatījumus).

- **Aizpildīt formas** aizpilda slēgtu formu iekšieni ar līnijām, {{ui:Rindu atstarpe}} attālumā, {{ui:Leņķis}}, abos virzienos vai vienā, ar pārskrējienu, lai galva būtu pilnā ātrumā, kad lāzers ieslēdzas; krustsvītrojums pievieno otru gājienu 90°. Forma ar caurumu paliek atvērta pie cauruma.
- **Gravēt attēlu** pārvērš attēlu punktos (Floyd–Steinberg, Atkinson, sakārtots vai vienkārši melnbalts ar slieksni) vai, ar *Pelēkie līmeņi*, mainīgā jaudā.
- Secība: vispirms attēli un aizpildījumi, tad līniju gravēšana, tad rievas, tad griezumi, lai izgriezta detaļa nepārvietotos, kamēr to gravē. Vienā slānī ceļi iet **no iekšpuses uz āru** (caurums pirms plāksnes, kurā tas atrodas), tuvākais nākamais.

## Priekšskatījums, tad saglabāšana

Priekšskatījums attēlo to, ko galva dara: degošās līnijas krāsā, ātrās kustības pelēkā krāsā un zaļu lodziņu ap visu, kas dedzina. Zem tā ir izmērs, degšanas garums un laika aplēse (bez paātrinājuma; reāla mašīna aizņem ilgāk). {{ui:Saglabāt G-kodu…}} ieraksta GRBL lāzera režīma G-kodu: `$32=1`, `M4` (vai `M3`) ar S vērtībām, `G0` un `G1` kustības, `M5` beigās. X0 Y0 ir darba apakšējais kreisais stūris, ja vien neizvēlaties rasējuma sākumpunktu: tur jāiestata jūsu mašīnas darba nulle.

## Sūtīšana no pārlūkprogrammas

Chrome un Edge pārlūkos {{ui:Pievienot…}} lūdz izvēlēties lāzera USB portu. Nekas nepievienojas un nenosūtās, kamēr nenospiežat pogu. Vispirms nospiediet {{ui:Apvilkt darbu}}: galva izseko darba kārbu ar izslēgtu lāzeru (vai ar zemu jaudu, ko iestatāt rādītājam), lai redzētu, kur tas dedzinās. Tikai tad ieslēdzas {{ui:Nosūtīt darbu}}, un tas izslēdzas, ja kaut ko maināt. {{ui:Pauzēt}} tur galvu, {{ui:Pārtraukt}} arī tur to, atiestata kontrolieri (lāzers izslēdzas) un nosūta `M5`. Tur, kur nav Web Serial (Firefox, Safari un CadCraft Studio, kurā Web Serial vēl nav), panelis piedāvā tikai saglabāšanu: saglabājiet G-kodu ({{ui:Saglabāt G-kodu…}}) un nosūtiet to ar sava lāzera programmu.

## Vēl nav izveidots

Vēl nav izveidoti citu kontrolieru formāti (Ruida, Marlin lāzeri, ražotāju faili), cilnes un ievadlīnijas, griezuma platuma nobīde, materiālu bibliotēkas, rotācijas un Z asis, kameras izlīdzināšana, teksts kā kontūras.

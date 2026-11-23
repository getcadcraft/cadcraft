---
title: Svītrojumi un aizpildījumu laukumi
summary: Aizpildiet laukumu ar cietu krāsu vai standarta rakstu, noklikšķinot tajā iekšā vai izvēloties slēgtas formas, iestatiet raksta mērogu un leņķi un vēlāk mainiet svītrojumu.
keywords: svītrojums, bhatch, aizpildījums, ciets aizpildījums, raksts, ansi31, ansi37, ķieģeļi, zeme, tīkls, griezuma līnijas, poché, sala, kontūra, mērogs, leņķis
from: e7feb344
---

## Ko jūs izveidosiet

Sienas griezumu, aizpildītu ar rakstu ANSI31, kolonnu tajā, kas paliek tukša, un cietu aizpildījumu kolonnā.

## Svītrojums, noklikšķinot laukuma iekšienē

1. Uzzīmējiet taisnstūri (`REC`, `0,0`, `@2000,1200`) un riņķi tā iekšienē (`C`, `1000,600`, `300`). Noklikšķiniet uz {{ui:Robežas}}.
2. Noklikšķiniet uz {{ui:Svītrojums}} grupā {{ui:Zīmēšana}} vai ierakstiet `H` un nospiediet {{key:Enter}}. Vēsturē tiek pateikts, kāds raksts ir pašreizējais, piemēram, `Pašreizējais svītrojums: ANSI31, mērogs 1, leņķis 0°`.
3. Ierakstiet `P` un nospiediet {{key:Enter}}, ierakstiet `ANSI31` un nospiediet {{key:Enter}}.
4. Ierakstiet `SC` un nospiediet {{key:Enter}}, ierakstiet `20` un nospiediet {{key:Enter}}. Raksta izmēri ir uz papīra, tāpēc rasējumam, kas drukāts mērogā 1:20, nepieciešams mērogs 20.
5. Pie `Norādiet iekšējo punktu` noklikšķiniet taisnstūra iekšienē, ārpus riņķa. Svītrojums parādās kā priekšskatījums.
6. Nospiediet {{key:Enter}}. Taisnstūris ir svītrots; riņķis iekšā paliek tukšs, jo tas ir sala.

Pirms {{key:Enter}} nospiešanas noklikšķiniet vairākās vietās, lai tās izveidotu vienā svītrojumā. `U` atsauc pēdējo laukumu.

## Ciets aizpildījums

1. Ierakstiet `H` un nospiediet {{key:Enter}}.
2. Ierakstiet `P`, nospiediet {{key:Enter}}, ierakstiet `SOLID` un nospiediet {{key:Enter}}.
3. Noklikšķiniet riņķa iekšienē un pēc tam nospiediet {{key:Enter}}.

## Svītrojums slēgtām formām, ko izvēlaties

Tā vietā, lai noklikšķinātu iekšā, pie `Norādiet iekšējo punktu` ierakstiet `S` (Atlasīt objektus), izvēlieties slēgtas polilīnijas, riņķus vai slēgtas elipses un nospiediet {{key:Enter}}. Formas, kas atrodas citu iekšienē, paliek tukšas pa vienai (ārējā ir svītrota, nākamā iekšā tukša un tā tālāk).

## Raksti

Pie jautājuma par rakstu ierakstiet `?`, lai redzētu sarakstu. Standarta ir ANSI31 līdz ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS un EARTH, un SOLID. Rasējumā collās (vai ar pēdām un collām kā garuma formātu) tiek izmantoti raksta collu izmēri, kā AutoCAD; citādi — milimetru izmēri.

{{ui:Leņķis}} (`A`) pagriež visu rakstu: ANSI31 pie 90° slīpojas otrādi.

**Raksta faili.** Pie `Norādiet iekšējo punktu` ierakstiet `F` (Raksta fails) un izvēlieties `.pat` failu. Tajā esošie raksti pievienojas sarakstam; ja ir vairāk nekā viens, tiek jautāts, kuru izmantot. Fails bez raksta, ko CadCraft var nolasīt, to pasaka, un katrs izlaistais raksts tiek saskaitīts. Izmēri `.pat` failā nav savas vienības, tāpēc tie tiek nolasīti rasējuma vienībās. Ir izmēģināti tikai faili, kas rakstīti parastajā `.pat` formātā; nevienu, ko veidojusi cita programma.

## Mainīt svītrojumu

Atlasiet to (noklikšķiniet uz vienas no tā līnijām). {{ui:Rekvizīti}} sadaļā: {{ui:Raksts}}, {{ui:Raksta mērogs}} un {{ui:Raksta leņķis}}. Svītrojumi no atvērtiem rasējumiem rāda savu rakstu, ja tas ir viens no standarta; citi tiek rādīti kā gaiss savas krāsas tonis.

## Biežākās kļūdas

- **"Nav slēgtas kontūras ap šo punktu."** Kontūrā ir sprauga, vai daļa no tās ir ārpus ekrāna: CadCraft skata tikai to, kas ir ekrānā. Aizveriet spraugu (tuviniet stūrus) vai tālinājiet.
- **"Raksts ir pārāk blīvs, lai zīmētu šajā mērogā."** Līnijas būtu tuvāk, nekā rasējums var parādīt. Izmantojiet lielāku mērogu: izmēģiniet drukas mērogu (20 mērogam 1:20).
- **Raksts izskatās milzīgs vai sīks.** Mērogs ir rasējuma vienībās uz raksta vienību; skatiet 4. soli augstāk.
- **Svītrojums vairs neseko savai kontūrai.** Svītrojums, kas izveidots ar {{cmd:HATCH}}, paliek saistīts ar objektiem, no kuriem tas tika izveidots: pārvietojot, pagriežot vai mērogojot kontūru, svītrojums seko tai; pārveidojot to ar rokturi, svītrojums tiek aprēķināts no jauna. Saite beidzas, kad kontūra vairs neaizveras, kad pats svītrojums tiek pārveidots ar roku vai kad to apgriež, un komandrindā to pasaka. Nekas netiek zaudēts: svītrojiet laukumu vēlreiz, lai to atkal saistītu.

## Svītrojums, kas paliek ar savu robežu

Svītrojums, ko izveidojat ar `HATCH`, atceras, kas to ierobežo. Pārvietojot, pagriežot vai mērogojot robežu, svītrojums un tā raksts seko tam. Velkot rokturi, lai pārveidotu robežu, svītrojums tiek aprēķināts no jauna. Pārvietojot svītrojumu pats, tā robeža seko arī, kā aizpildīta forma zīmēšanas programmā.

Saite beidzas, un komandrindā to pasaka, ja robeža vairs neaizveras vai ja svītrojumu pārveidojat ar roku. Pats svītrojums paliek. Svītrojot, ierakstiet `AS`, lai veidotu svītrojumus, kas stāv patstāvīgi. Kopējot svītrojumu kopā ar tā robežu, kopijai ir sava saite.

`HATCHEDIT` (`HE`) maina svītrojuma rakstu, mērogu, leņķi un sākumpunktu un piesaista to robežai vai beidz saiti. Saite tiek saglabāta DWG un DXF 2000 failos. DXF R12 failā nav svītrojuma objekta, un citu programmu saites netiek nolasītas: tām izmantojiet `HATCHEDIT` un Saistīt.

Svītrojumam, kuram vairs nav robežas (robeža tika dzēsta vai fails tika saglabāts bez tās), to var atjaunot: `HATCHGENERATEBOUNDARY` (`HGB`) zīmē slēgtu polilīniju ap katru svītrojuma cilpu un, ja atbildat Jā, saista svītrojumu ar tām.

## Gradienta aizpildījums

`GRADIENT` (`GD`) aizpilda laukumu ar gradientu, nevis ar rakstu: tie paši norādījumi kā `HATCH`, pēc tam tas jautā tipu (lineārs, cilindrisks, sfērisks, puslodes, izliekts un katrs no tiem apgriezts), vienu krāsu ar toni vai divas krāsas, leņķi un to, vai centrēts vai nē. Komandā `HATCH` opcija `G` dara to pašu. `HATCHEDIT` `G` vai {{ui:Rekvizīti}} sadaļā Gradients maina gradientu vai pārvērš jebkuru svītrojumu par to.

Gradients tiek rādīts ekrānā un drukā. Saglabājot kā DWG 2004 vai jaunāku, citas programmas saņem īstu gradienta svītrojumu. DXF 2000 un DWG 2000 gradienta nav: tur CadCraft to glabā sev, un citas programmas redz cietu aizpildījumu pirmajā krāsā.

## Apgriezt svītrojumu

`TRIM` apgriež svītrojumu kā jebkuru citu objektu. Noklikšķiniet uz svītrojuma tajā griezšanas malas pusē, no kuras to vēlaties noņemt: malas sadala svītroto laukumu un tas gabals tiek noņemts. Ātrajā režīmā katrs objekts ir griezšanas mala; ja ir daudz objektu, vispirms izvēlieties malas (opcija `T`). Apgriezts svītrojums vairs nav saistīts ar savu robežu, jo tas to vairs neaizpilda.

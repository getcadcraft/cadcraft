---
title: Svītrojums un laukumu aizpildīšana
summary: Aizpildiet laukumu ar vienmērīgu krāsu vai standarta rakstu, noklikšķinot tā iekšpusē vai atlasot slēgtas formas, iestatiet raksta mērogu un leņķi un vēlāk mainiet svītrojumu.
keywords: svītrojums, hatch, bhatch, aizpildījums, vienmērīgs aizpildījums, raksts, ansi31, ansi37, ķieģeļi, zeme, tīkls, griezuma līnijas, poché, sala, robeža, mērogs, leņķis
from: 14399174
---

## Ko izveidosiet

Griezuma siena, kas aizpildīta ar rakstu ANSI31, kolonna tajā paliek tukša un kolonnā ir vienmērīgs aizpildījums.

## Svītrot, noklikšķinot laukuma iekšpusē

1. Uzzīmējiet taisnstūri (`REC`, `0,0`, `@2000,1200`) un riņķi tā iekšpusē (`C`, `1000,600`, `300`). Noklikšķiniet uz {{ui:Extents}}.
2. Noklikšķiniet uz {{ui:Hatch}} grupā {{ui:Draw}} vai ierakstiet `H` un nospiediet {{key:Enter}}. Vēsturē redzams, kurš raksts ir aktuāls, piemēram, `Pašreizējais svītrojums: ANSI31, mērogs 1, leņķis 0°`.
3. Ierakstiet `P` un nospiediet {{key:Enter}}, ierakstiet `ANSI31` un nospiediet {{key:Enter}}.
4. Ierakstiet `SC` un nospiediet {{key:Enter}}, ierakstiet `20` un nospiediet {{key:Enter}}. Raksta izmēri ir norādīti uz papīra, tāpēc rasējumam, kas drukāts mērogā 1:20, nepieciešams mērogs 20.
5. Pie `Norādiet iekšējo punktu` noklikšķiniet taisnstūra iekšpusē, ārpus riņķa. Svītrojums tiek rādīts kā priekšskatījums.
6. Nospiediet {{key:Enter}}. Taisnstūris ir nosvītrots; riņķis iekšpusē paliek tukšs, jo tas ir sala.

Pirms {{key:Enter}} nospiešanas noklikšķiniet vairākās laukumu iekšpusēs, lai tās kļūtu par vienu svītrojumu. `U` atceļ pēdējo atlasīto laukumu.

## Vienmērīgs aizpildījums

1. Ierakstiet `H` un nospiediet {{key:Enter}}.
2. Ierakstiet `P`, nospiediet {{key:Enter}}, ierakstiet `SOLID` un nospiediet {{key:Enter}}.
3. Noklikšķiniet riņķa iekšpusē un nospiediet {{key:Enter}}.

## Svītrot atlasītas slēgtas formas

Tā vietā, lai noklikšķinātu iekšpusē, pie `Norādiet iekšējo punktu` ierakstiet `S` (Atlasīt objektus) un atlasiet slēgtas polilīnijas, riņķus vai slēgtas elipses, pēc tam nospiediet {{key:Enter}}. Formas, kas atrodas citu formu iekšpusē, paliek tukšas pēc kārtas (ārējā ir nosvītrota, nākamā paliek tukša un tā tālāk).

## Raksti

Ierakstiet `?` pie jautājuma par rakstu, lai redzētu sarakstu. Standarta raksti ir ANSI31 līdz ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH un SOLID. Rasējumā collās (vai ar pēdām un collām kā garuma formātu) tiek izmantoti raksta collu izmēri, kā AutoCAD; citādi – milimetru izmēri.

{{ui:Angle}} (`A`) pagriež visu rakstu: ANSI31 pie 90° slīpojas citā virzienā.

**Rakstu faili.** Pie `Norādiet iekšējo punktu` ierakstiet `F` un izvēlieties `.pat` failu. Raksti tajā pievienojas sarakstam; ja ir vairāki, tiek jautāts, kuru izmantot. Fails bez rakstiem, ko CadCraft var nolasīt, to paziņo, un tiek saskaitīts katrs izlaistais raksts. Izmēri `.pat` failā nav ar savām vienībām, tāpēc tie tiek nolasīti rasējuma vienībās. Ir izmēģināti tikai faili, kas rakstīti parastajā `.pat` formātā; nav izmēģināts neviens, kas izveidots citā programmā.

## Svītrojuma maiņa

Atlasiet to (noklikšķiniet uz vienas no tā līnijām). Sadaļā {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} un {{ui:Pattern angle}}. Atvērtu rasējumu svītrojumi rāda savu rakstu, ja tas ir viens no standarta rakstiem; citi tiek rādīti kā gaiša sava krāsas tonējums.

## Biežākās kļūdas

- **"Ap šo punktu nav slēgtas robežas."** Kontūrā ir sprauga vai daļa no tās ir ārpus ekrāna: CadCraft skata tikai to, kas redzams ekrānā. Aizveriet spraugu (tuvinot stūrus) vai attāliniet skatu.
- **"Raksts ir par blīvu, lai to zīmētu šajā mērogā."** Līnijas būtu tuvāk viena otrai, nekā rasējums spēj parādīt. Izvēlieties lielāku mērogu, piemēram, drukas mērogu (20 mērogam 1:20).
- **Raksts izskatās milzīgs vai sīks.** Mērogs ir rasējuma vienībās uz raksta vienību; skatiet 4. soli augstāk.
- **Robežas pārvietošana nepārvieto svītrojumu.** Svītrojums nav piesaistīts savai robežai. Pārvietojiet abus vai svītrojiet vēlreiz.

## Svītrojums, kas paliek kopā ar savu robežu

Svītrojums, ko veidojat ar `HATCH`, atceras, kas to ierobežo. Pārvietojot, pagriežot vai mērogojot robežu, svītrojums un tā raksts seko tai. Velkot rokturi, lai pārveidotu robežu, svītrojums tiek aprēķināts no jauna. Ja pārvietojat tikai svītrojumu, arī tā robeža seko, tāpat kā aizpildītai formai zīmēšanas programmā.

Saite beidzas, un komandrindā par to tiek paziņots, ja robeža vairs neaizveras vai ja svītrojumu pārveidojat ar roku. Pats svītrojums paliek. Svītrojot ierakstiet `AS`, lai veidotu patstāvīgus svītrojumus. Svītrojuma kopija kopā ar robežu tiek kopēta, un kopijai ir sava saite.

`HATCHEDIT` (`HE`) maina svītrojuma rakstu, mērogu, leņķi un sākumpunktu, kā arī piesaista to robežai vai beidz saiti. Saite tiek saglabāta DWG un DXF 2000 failos. DXF R12 failā svītrojuma objekta nav, un citās programmās izveidotās saites netiek nolasītas: tām izmantojiet `HATCHEDIT` un Link.

Svītrojumam, kuram vairs nav robežas (robeža ir dzēsta vai fails tika saglabāts bez tās), var atjaunot robežu: `HATCHGENERATEBOUNDARY` (`HGB`) uzzīmē slēgtu polilīniju ap katru svītrojuma cilpu un, ja atbildat Jā, piesaista svītrojumu tām.

## Gradienta aizpildījums

`GRADIENT` (`GD`) aizpilda laukumu ar gradientu, nevis ar rakstu: tās pašas atlases kā `HATCH`. Pēc tam tiek jautāts tips (lineārs, cilindrisks, sfērisks, puslodes, izliekts un katrs no tiem apgriezts), viena krāsa ar toni vai divas krāsas, leņķis un centrēts vai necentrēts. `HATCH` opcija `G` dara to pašu. `HATCHEDIT` `G` vai {{ui:Properties}} sadaļā Gradients maina gradientu vai pārveido jebkuru svītrojumu par gradientu.

Gradients tiek rādīts ekrānā un izdrukās. Saglabājot kā DWG 2004 vai jaunāku, citas programmas saņem īstu gradienta svītrojumu. DXF 2000 un DWG 2000 gradientu neatbalsta: tur CadCraft to glabā tikai savām vajadzībām, un citas programmas redz vienmērīgu aizpildījumu pirmajā krāsā.

## Svītrojuma apgriešana

`TRIM` apgriež svītrojumu kā jebkuru citu objektu. Noklikšķiniet uz svītrojuma tajā pusē, kuru vēlaties noņemt no griezējmalas: malas sadala svītroto laukumu, un šī daļa tiek noņemta. Ātrajā režīmā katrs objekts ir griezējmala; ja ir daudz objektu, vispirms izvēlieties malas (opcija `T`). Apgriezts svītrojums vairs nav piesaistīts savai robežai, jo tas vairs neaizpilda to.

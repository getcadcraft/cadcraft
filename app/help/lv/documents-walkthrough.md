---
title: Dokumenti un pārskatījumi (glabātuve)
summary: Soli pa solim pārbaudīts reāls darbs. Ievietojiet projekta mapi kontrolē, izņemiet zīmējumu, mainiet to, atgrieziet ar piezīmi, nosūtiet pārskatīšanai, apstipriniet un izlaidiet, skatiet vēsturi un to, kas to izmanto, ko otrs cilvēks redz, kamēr fails ir bloķēts, un kā tas darbojas ar mākoņa mapēm.
keywords: glabātuve, dokumenti, pamācība, apmācība, izņemt, atgriezt, pārskatījums, izlaist, apstiprināt, bloķēt, vēsture, kur izmantots, mākoņa mape, projekta mape, dokumentu pārvaldība, pdm, divi cilvēki, kopīgota mape
from: 3829528d
---

## Ko jūs darīsiet

Jūs esat Ana, strādājat pie Riverside Clinic kopā ar kolēģi Bensu. Projekta zīmējumi atrodas vienā mapē, kurai abi piekļūstat (kopīgs disks, sinhronizēta mape vai mākoņa mape). Līdz beigām viens fails būs gājis no pirmās kopijas līdz izlaistam pārskatījumam **A**, būs mainīts vēlreiz kā **B.1**, jūs redzēsit, kas ko darīja, un redzēsit, ko Bens redz, kad jūs turat failu.

Viss tiek glabāts paslēptā mapē `.ccvault` blakus failiem: nav servera, nekas netiek augšupielādēts (mākoņa mape ir izņēmums, skatiet pēdējo soli). Katru pogu un noteikumu vienuviet skatiet tēmā *Dokumenti: izņemšana, pārskatījumi un izlaišana*, ja tā jūsu lietotnē ir.

## 1. Iestatiet projekta mapi

1. Izvēlieties {{ui:Documents…}} (Dokumenti…) cilnes **Skats** izvēlnē **Vairāk** vai ierakstiet `DOCUMENTS` (vai `DOCS`) un nospiediet {{key:Enter}}.
2. Izvēlieties {{ui:Choose the project folder}} (Izvēlieties projekta mapi) un izvēlieties mapi, kurā ir projekta zīmējumi. (Projekta mapes darbojas Studio un pārlūkprogrammās, kas var atvērt mapi, piemēram, Chrome un Edge. Citās pārlūkprogrammās panelis to pasaka.)
3. Izvēlieties {{ui:Change}} (Mainīt) blakus **Jūs:** un ierakstiet savu vārdu, `Ana` (ja tas prasa, arī šī datora nosaukumu). Panelī tagad rakstīts *Jūs: Ana, datorā* un jūsu dators. Jūsu vārds ir uz visa, ko darāt.
4. Izvēlieties {{ui:Start a vault in this folder}} (Izveidot glabātuvi šajā mapē) un ierakstiet projekta nosaukumu, `Riverside clinic`. Panelī teikts *Glabātuve izveidota projektam Riverside clinic.*

## 2. Ievietojiet failu kontrolē

1. Atveriet **Faili, kas nav glabātuvē** un izvēlieties {{ui:Add}} (Pievienot) blakus `plans/A-101.dxf`.
2. Tas parādās sadaļā **Faili glabātuvē** ar pārskatījumu **A.1** un stāvokli **Izstrādē**. A.1 ir tā pirmā kopija; glabātuve glabā katra pārskatījuma kopiju.

## 3. Izņemiet, mainiet, atgriezt

1. Izvēlieties {{ui:Open}} (Atvērt) blakus `plans/A-101.dxf`. Zīmējums atveras CadCraft, un panelis aizveras, lai jūs to redzētu. Panelis joprojām ir vienas komandas attālumā: `DOCUMENTS`.
2. Atveriet paneli vēlreiz un izvēlieties {{ui:Check out}} (Izņemt). Rindā tagad ir **Izņemts jums**. Mapē `.ccvault/locks` ir izveidots bloķēšanas fails; neviens cits nevar izņemt šo failu, kamēr jūs to neatgriezīsit.
3. Zīmējiet kaut ko: pievienojiet līniju, pārvietojiet sienu. Neko, ko darāt, nevar saglabāt pāri glabātuves failam, ja zīmējums nav izņemts jums; Save As (Saglabāt kā) vienmēr darbojas kopijai, kas ir jūsu pašu.
4. Atveriet paneli, izvēlieties {{ui:Check in}} (Atgriezt) un ierakstiet, kas mainījies (`Moved the door`). Panelis saka *atgriezts kā A.2*. Fails projekta mapē tagad ir zīmējums, kas bija atvērts, un bloķējums ir noņemts. Atgriežot bez izmaiņām, pārskatījums paliek.

Ja mainat domas, {{ui:Undo check-out}} (Atsaukt izņemšanu) atdod failu bez jauna pārskatījuma.

## 4. Pārskatīšana un izlaišana

1. Izvēlieties {{ui:Send for review}} (Nosūtīt pārskatīšanai). Stāvoklis kļūst par **Pārskatīšanai**, un fails ir tikai lasāms.
2. Pirms apstiprināšanas izvēlieties {{ui:Project settings}} (Projekta iestatījumi) un uzskaitiet, kas drīkst apstiprināt (viens vārds rindā), piemēram, `Bens` un `Karla`, un atzīmējiet noteikumu, ka apstiprinātājam jābūt citam, nevis autoram. Izvēlieties {{ui:Save settings}} (Saglabāt iestatījumus). Tagad pati glabātuve nevienu citu neizlaiž.
3. Bens (vai Karla) izvēlas {{ui:Approve}} (Apstiprināt) un ieraksta apstiprinātāja vārdu. Stāvoklis kļūst par **Izlaists**, un pārskatījums kļūst par **A**, ar *apstiprināja* un vārdu. Izlaists fails ir tikai lasāms. {{ui:Send back}} (Nosūtīt atpakaļ) to būtu atgriezis stāvoklī Izstrādē, ar iemeslu.

Apstiprinātāja vārds ir panelī ierakstītais vārds; tas ir ieraksts par to, kas parakstīja, nevis identitātes pierādījums.

## 5. Jauns pārskatījums

1. Izlaistajam failam izvēlieties {{ui:New revision}} (Jauns pārskatījums). Jūs to turat nākamajam burtam.
2. Mainiet to un pēc tam izvēlieties {{ui:Check in}} (Atgriezt). Pārskatījums ir **B.1**, izstrādē. Izlaidiet to tāpat, un tas kļūst par **B**. {{ui:Undo check-out}} pirms pirmās atgriešanas atstāj to **A** līmenī.

Pārskatījumu burti iet A, B … Z, AA, AB. Ja jūsu standarts dažus burtus izlaiž, projekta iestatījums *Use the ASME Y14.35 sequence* nākamajiem pārskatījumiem izlaiž I, O, Q, S, X un Z.

## 6. Skatiet, kas notika

Izvēlieties faila nosaukumu, lai atvērtu tā detaļas:

- **{{ui:History}} (Vēsture)**: katrs notikums, jaunākais pirmais, ar to, kas, kurā datorā un kad: *Atgriezts A.2* no Anas, *Izlaists* no Bena un tā tālāk.
- **{{ui:Revisions}} (Pārskatījumi)**: pārskatījumu tabula. {{ui:Open copy}} (Atvērt kopiju) atver pārskatījumu kā vienkāršu kopiju, ko nevar pārrakstīt glabātuves failu; {{ui:Compare with}} (Salīdzināt ar) uzskaita, kas pievienots, noņemts un mainīts salīdzinājumā ar iepriekšējo pārskatījumu vai jebkuru citu.
- **{{ui:Uses}} (Izmanto)**: zīmējumi, uz kuriem tas saista (ārējās atsauces, xrefs).
- **{{ui:Used by}} (Izmanto)**: uzskaita katru citu glabātuves zīmējumu, kas saista ar šo: mainot bāzes plānu, jūs zināt, kuras lapas pārbaudīt.

## Pārskatījums uz lapas

Ar atvērtu zīmējumu (un izkārtojumu tajā) izvēlieties {{ui:Revision block}} (Pārskatījumu bloks): izlaisto pārskatījumu tabula tiek zīmēta lapas augšējā labajā stūrī. Izvēlieties {{ui:Fill title blocks}} (Aizpildīt titulblokus), lai aizpildītu titulbloka atribūtus, kas atzīmēti kā `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` vai `APPROVED_BY`, ar faila pārskatījumu, stāvokli, datumu un apstiprinātāju. Kad apstiprināsiet nākamo izlaidi, pārskatījumu bloks tiks atjaunināts.

## 7. Ko Bens redz, kamēr jūs turat failu

Tagad izņemiet failu vēlreiz un lūdziet Benu atvērt to pašu projekta mapi savā datorā un atvērt paneli. Faila rindā viņš redz **Izņēmusi Ana** no jūsu datora **kopš** laika, un nav pogas {{ui:Check out}}. Ja viņš tomēr mēģina, glabātuve atsakās: bloķējums ir fails, ko sistēma nevar izveidot divreiz, tāpēc divi cilvēki nevar turēt failu abi, pat tajā pašā mirklī, kad mape atrodas diskā Studio. (Pārlūkprogrammā mape nodrošina tikai labāko iespējamo, un panelis par to saka zem **Mape**.)

Ja Ana ir prom un Bens vajag failu, {{ui:Break check-out}} (Pārtraukt izņemšanu) to atbrīvo. Viņam jāieraksta iemesls; tas nonāk žurnālā kopā ar to, kā izņemšana bija cita. Ja projekts uzskaita administratorus, to var izdarīt tikai viņi. Izņemšana, kas vecāka par novecošanās ierobežojumu (pēc noklusējuma 14 dienas), tiek atzīmēta kā *ilgi*. Pēc pārtraukšanas Anas novēlota atgriešana tiek noraidīta, tāpēc jūs abi nevarat pārrakstīt viens otru.

## 8. Mākoņa mapes

Mākoņa mape ir projekta mape, kas glabājas jūsu komandas mākoņa krātuvē, tāpēc komandai nav vajadzīgs kopīgs disks. Studio, pierakstījies savā CadCraft kontā, panelis rāda {{ui:Open a cloud folder}} (Atvērt mākoņa mapi) blakus {{ui:Choose the project folder}}. Izvēlieties to un izvēlieties mapi, kas uzskaitīta kā darbvieta / mape. Darbvietas īpašnieks vispirms izveido mapi, un komandas mākoņa krātuvei jābūt spēkā. Viss iepriekš minētais darbojas tāpat; bloķējumu veido serveris, un tas ir stingrs starp cilvēkiem. Ja neesat pierakstījies, panelis liek pierakstīties. Parastā pārlūkprogrammas cilnē mākoņa poga netiek piedāvāta; izmantojiet Studio.

## Izmēģiniet

Veiciet astoņus iepriekš minētos soļus ar reāla faila kopiju. Divu cilvēku soļiem jums vajag otru cilvēku vai divus logus ar diviem vārdiem. Ja mēģināt ar reālu kopīgu mapi, Kopienas testēšanas lapā ir pārbaude, kas to prasa tieši, un tā pieņem rezultātus.

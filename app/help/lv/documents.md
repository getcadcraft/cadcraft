---
title: Dokumenti: izņemšana, pārskatījumi un izlaišana
summary: Kontrolējiet projekta mapes rasējumus: izņemiet failu, lai neviens cits to nemainītu, atgrieziet to kā jaunu pārskatījumu, nosūtiet pārskatīšanai un izlaidiet ar apstiprinātāja vārdu. Pieejama vēsture, saiknes starp failiem, materiālu saraksts un titulbloki, kas rāda pārskatījumu.
keywords: projekta iestatījumi, apstiprinātāji, administratori, pārskatījumu burti, ASME, tikai lasīšanai, salīdzināt pārskatījumus, atvērt kopiju, partcraft, bimcraft, documents, DOCUMENTS, DOCS, glabātuve, dokumentu pārvaldība, pdm, izņemšana, atgriešana, izņemt, atgriezt, bloķēt, pārskatījums, rev, pārskatījuma burts, izlaišana, izlaists, apstiprināt, apstiprinājums, pārskatīšana, novecojis, kur izmantots, bom, materiālu saraksts, titulbloks, pārskatījumu bloks, projekta mape
from: ee938722
---

## Ko jūs izveidosiet

Projekta mape, kurā katram rasējumam ir pārskatījums (A.1, A.2 … tad A, B …) un stāvoklis (Procesā, Pārskatīšanai, Izlaists, Novecojis). Vienlaikus failu var mainīt tikai viena persona, un katra izņemšana, atgriešana, apstiprinājums un pārtrauktā izņemšana tiek pierakstīta ar to, kas to izdarīja un kad.

Viss tiek glabāts pašā mapē, paslēptā mapē `.ccvault` blakus jūsu rasējumiem. Kopējā diska vai sinhronizētā mape der visai komandai. Servera nav, un nekas netiek augšupielādēts.

## Atvērt dokumentus

Ierakstiet `DOCUMENTS` (vai `DOCS`) un nospiediet {{key:Enter}}. Panelis atveras blakus rasējumam.

Izvēlieties {{ui:Choose the project folder}} un norādiet mapi, kurā ir projekta rasējumi. Projekta mapes darbojas programmā CadCraft Studio un pārlūkprogrammās, kas var atvērt mapi (Chrome, Edge). Citās pārlūkprogrammās panelis par to informē.

Pirmajā reizē ierakstiet savu vārdu (tas tiek pierakstīts pie visām jūsu darbībām) un šā datora nosaukumu. Ja esat pierakstījies, jūsu vārds jau ir ierakstīts.

## Izveidot glabātuvi

Mapē, kas vēl nav glabātuve, tiek piedāvāts {{ui:Start a vault in this folder}}. Ierakstiet projekta nosaukumu. Pēc tam atveriet {{ui:Faili, kas nav glabātuvē}} un katram failam, kuru vēlaties pārvaldīt, izvēlieties {{ui:Add}}. Pievienotais fails sākas ar pārskatījumu **A.1**, stāvoklis Procesā.

## Mainīt rasējumu

1. Blakus rasējumam izvēlieties {{ui:Open}}. Tas tiek atvērts programmā CadCraft. Ja fails nav izņemts jūsu vārdā, to var tikai aplūkot, bet nevar mainīt: {{ui:Save}} atteiksies to pārrakstīt un pateiks iemeslu (lai saglabātu savu kopiju, izmantojiet {{ui:Save as}}).
2. Izvēlieties {{ui:Check out}}. Tagad neviens cits to nevar izņemt; panelis parāda, kam fails ir izņemts, kurā datorā un kopš kura laika.
3. Zīmējiet.
4. Izvēlieties {{ui:Check in}} un norādiet, kas mainījies. Atvērtais rasējums tiek saglabāts projekta mapē savā formātā un kļūst par nākamo pārskatījumu (A.1, tad A.2). Atgriežot bez izmaiņām, pārskatījums paliek tas pats.

{{ui:Undo check-out}} atgriež failu, neizveidojot jaunu pārskatījumu.

## Pārskatīšana un izlaišana

- {{ui:Send for review}}: kamēr fails tiek pārskatīts, to var tikai lasīt.
- {{ui:Approve}}: ierakstiet apstiprinātāja vārdu. A.3 kļūst par **A**, Izlaists. Izlaistie faili ir tikai lasāmi.
- {{ui:Send back}}: atgriež Procesā ar norādītu iemeslu.
- {{ui:New revision}} izlaistam failam to izņem nākamajam burtam: tā pirmā atgriešana būs **B.1**. Ja pirms tam izvēlaties {{ui:Undo check-out}}, fails paliek A.
- {{ui:Make obsolete}} izslēdz izlaistu failu no lietošanas.

Projektam var būt saraksts ar to, kas drīkst apstiprināt, un var prasīt, lai apstiprinātājs nav tas, kas failu atgrieza (skatiet tālāk Projekta iestatījumi).

## Projekta iestatījumi

Panelī atveriet {{ui:Project settings}}:

- **Apstiprinātāji**: viens vārds katrā rindā. Ja tie ir norādīti, tikai viņi var apstiprināt izlaišanu.
- **Apstiprinātājam jābūt citai personai, nevis autoram**: "četru acu" noteikums.
- **Administratori**: viens vārds katrā rindā. Ja tie ir norādīti, tikai viņi var pārtraukt citas personas izņemšanu vai mainīt šos iestatījumus.
- **Pārskatījumu burti, ko izlaist**: {{ui:Use the ASME Y14.35 sequence}} izlaiž I, O, Q, S, X un Z, vai arī ierakstiet savus burtus. Jau dotie burti paliek; izvēle attiecas uz nākamajiem pārskatījumiem.
- **Izņemšana kļūst novecojusi pēc**: dienu skaits (pēc noklusējuma 14).

Izvēlieties {{ui:Save settings}}. Izmaiņa tiek pierakstīta žurnālā ar to, kas to veica.

## Fails palicis izņemts

{{ui:Break check-out}} atbrīvo failu, ko izņēmusi cita persona (viņa ir prom vai viņas dators sabojājās). Jums jāieraksta iemesls: tas tiek pierakstīts žurnālā kopā ar to, kura izņemšana tas bija. Ja projektam ir administratori, tikai viņi to var izdarīt. Izņemšana, kas vecāka par 14 dienām, tiek atzīmēta kā ilgi izņemta.

## Vēsture, pārskatījumi, izmantošana, izmanto

Izvēlieties faila nosaukumu, lai redzētu:

- {{ui:History}}: katru notikumu, jaunākais pirmais, ar to, kas, kurā datorā un kad.
- {{ui:Revisions}}: katru saglabāto pārskatījumu. Katra pārskatījuma kopija ir glabātuvē (viens un tas pats saturs tiek glabāts vienreiz). {{ui:Open copy}} atver šo pārskatījumu kā parastu kopiju, kuru nevar pārrakstīt glabātuves fails. {{ui:Compare with}} parāda, kas pievienots, noņemts un mainīts starp šo pārskatījumu un iepriekšējo (vai jebkuru citu, ko izvēlaties), un iekrāso to rasējumā.
- {{ui:Uses}}: rasējumi, uz kuriem tas saista (ārējās atsauces, xref), dokumenti, uz kuriem norāda IFC modelis, PartCraft mezgla detaļas.
- {{ui:Used by}}: katrs glabātuves fails, kas izmanto šo.

{{ui:Bill of materials (CSV)}} saglabā sarakstu ar visu, ko fails izmanto, līmeņu secībā, ar daudzumiem, pārskatījumiem un stāvokļiem, izklājlapai.

## Pārskatījumu bloks lapā

Atverot rasējumu, kuram ir izkārtojums, izvēlieties {{ui:Revision block}}. Izlaisto pārskatījumu tabula (pārskatījums, datums, kas, apstiprināja, apraksts) tiek zīmēta skatītās lapas augšējā labajā stūrī. Kad apstiprināt izlaišanu, tabula tiek atjaunināta.

## Pārskatījums titulblokā

Piešķiriet sava titulbloka atribūtiem vienu no šīm atzīmēm un atveriet rasējumu un izvēlieties {{ui:Fill title blocks}}:

| Atzīme | Aizpilda |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | pārskatījums (B, vai B.2, kamēr tas tiek izstrādāts) |
| `VAULT.STATE` | stāvoklis (Izlaists …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | pēdējā pārskatījuma datums |
| `VAULT.APPROVER`, `APPROVED_BY` | kas apstiprināja pēdējo izlaišanu |

## PartCraft un BimCraft

PartCraft un BimCraft savām failu vajadzībām ir tāds pats Dokumentu panelis: detaļas un mezgli PartCraft, IFC modeļi BimCraft. Atgriežot tiek saglabāts atvērtais modelis projekta mapē, un mezgls parāda, kuras detaļas tas izmanto, un materiālu sarakstu.

## Noderīga informācija

- Divas personas kopīgā mapē nevar izņemt vienu un to pašu failu: izņemšana ir fails, kuru sistēma atsakās izveidot divreiz. Pārlūkprogrammā un Studio versijā, kas ir vecāka par šo funkciju, tas ir tik stingri, cik mape ļauj: divas izņemšanas vienā un tajā pašā sekundes daļā var abas izdoties. Panelis norāda, kas attiecas uz jums.
- Nemainiet un neizdzēsiet mapi `.ccvault` ar rokām. Tajā esošais žurnāls ir ieraksts; glabātuve vajadzības gadījumā atjauno savu sarakstu no tā.
- Faila maiņa mapē bez izņemšanas tiek rādīta kā {{ui:Changed in the folder without a check-out}}.

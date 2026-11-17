---
title: Dinamiskie bloki
summary: Ko CadCraft dara ar dinamiskajiem blokiem DWG failā: tie saglabā savus īstos nosaukumus, rāda stāvokli, kādā tie tika saglabāti, pārslēdz redzamības stāvokļus, rāda citas vērtības un paliek dinamiski, kad tie tiek saglabāti.
keywords: dinamiskais bloks, dinamiskie bloki, redzamība, redzamības stāvoklis, apgriezt, stiept, meklēšana, parametri, pielāgots, bloka rekvizīti, *u bloki, dinamisks
from: 26b6aa80
---

## Kas darbojas

DWG ar dinamiskajiem blokiem atveras, un tie darbojas līdz šim:

- **Īstie nosaukumi.** Dinamisks bloks ir uzskaitīts panelī {{ui:Blocks}} ar savu nosaukumu ("Receptacle", "Sink"), nevis kā bez nosaukuma `*U` bloks.
- **Stāvoklis, kādā tie tika saglabāti.** Katra atsauce rāda tieši to, ko rādīja cita programma: redzamības stāvokli, kādā tas bija iestatīts, izstiepts vai apgriezts, kā tas tika saglabāts.
- **Redzamības stāvokļa pārslēgšana.** Izvēlieties vienu atsauci (vai vairākas tāda paša bloka atsauces), atveriet {{ui:Properties}} un sadaļā {{ui:Custom}} izvēlieties citu stāvokli no saraksta {{ui:Visibility}}. Atsauce uzreiz rāda šo stāvokli, arī tās atribūtus: tie, ko stāvoklis paslēpj, pazūd, tie, ko tas rāda, parādās ar savām vērtībām. Atsauce saglabā katru vērtību, tāpēc nekas neatgriežas tukšs; {{ui:Properties}} uzskaita paslēptos, atzīmētus kā "hidden". {{key:Mod+Z}} atjauno veco stāvokli vienā solī.
- **Satvērēji.** Izvēlēts dinamisks bloks rāda savus satvērējus tur, kur ir tā parametri: mazu trīsstūri redzamības stāvoklim (noklikšķiniet uz tā, lai redzētu stāvokļu sarakstu), bultiņas distances galos, dubultu bultiņu apgriešanai. Darbojas tikai redzamības satvērējs; citi to pasaka statusa joslā.
- **Citas vērtības, tikai lasāmas.** Zem redzamības saraksta {{ui:Custom}} rāda arī bloka distances, izlīdzināšanas leņķus, apgriešanas stāvokļus un punktus, kā tos satur rasējums.
- **Redzamības stāvokļu rediģēšana.** Atveriet bloku ar {{cmd:BEDIT}}: redaktors rāda vienu stāvokli, kura nosaukums ir norādīts joslā virs rasējuma (tur var izvēlēties citu). Ierakstiet {{cmd:BVSTATE}}, lai pārslēgtu, pievienotu (paslēpjot visu, rādot visu vai saglabājot to, kas redzams), pārdēvētu vai dzēstu stāvokli; {{cmd:BVHIDE}} paslēpj izvēlētos objektus redzamajā stāvoklī; {{cmd:BVSHOW}} parāda paslēptos, izbalinātus, lai varētu noklikšķināt uz tiem, kurus atgriezt. Saglabājiet bloku: atsauces, kas iestatītas uz pārdēvētu stāvokli, to saglabā ar jauno nosaukumu, bet tās, kas iestatītas uz dzēstu stāvokli, rāda pirmo stāvokli.
- **Paliek dinamiski.** Saglabājot DWG versijā, kādā rasējums tika ievests, bloki paliek dinamiski ar jūsu izvēlēto stāvokli: otra programma tos atver kā tos pašus dinamiskos blokus. Redzamības stāvokļi, ko rediģējāt, tiek saglabāti arī: to jaunie nosaukumi, pievienotie stāvokļi un tas, ko katrs rāda.

## Kas ir tikai lasāms vai vēl nav

| Vēl nav | Tā vietā šodien |
|---|---|
| Distanču, leņķu vai apgriešanu maiņa (stiepšanas, pārvietošanas, apgriešanas darbības) | Tie rādās tikai lasāmi sadaļā {{ui:Custom}}; rediģējiet programmā, kas izveidoja bloku. |
| Meklēšanas, XY, rotācijas un polārie parametri | Vēl nav nolasīti: atsauce tiek rādīta kā saglabāta. |
| Distanču, apgriešanas un punktu satvērēju vilkšana | Tie rāda, kur atrodas parametri; redzamības satvērējs un saraksts {{ui:Visibility}} sadaļā Properties pārslēdz stāvokļus. |
| Dinamisku bloku veidošana (parametru pievienošana vai redzamības stāvokļu pievienošana blokam, kuram tādu nav) | CadCraft izveidotie bloki ir parasti bloki; {{cmd:BPARAMETER}} to pasaka. |
| Objektu pievienošana vai dzēšana blokā ar redzamības stāvokļiem bloku redaktorā | Bloks tad tiek saglabāts kā parasts bloks (redaktors to pasaka, kad aizveras). |
| Dinamiskuma saglabāšana citā DWG versijā vai DXF | Tie tiek saglabāti kā parasti bloki, rādot izvēlēto stāvokli, un saglabāšana to pasaka. |

:::note
Objektu pārvietošana vai maiņa {{cmd:BEDIT}} saglabā bloku ar redzamības stāvokļiem dinamisku. Bloks bez stāvokļiem vai bloks, kura objekti redaktorā tika pievienoti vai dzēsti, kļūst par parastu bloku.
:::

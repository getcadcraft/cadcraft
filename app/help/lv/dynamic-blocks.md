---
title: Dinamiskie bloki
summary: Ko CadCraft dara ar dinamiskajiem blokiem DWG failā: tie saglabā savus īstos nosaukumus, rāda stāvokli, kādā tie tika saglabāti, pārslēdz redzamības stāvokļus, rāda citas vērtības un paliek dinamiski, kad tos saglabā.
keywords: dinamiskais bloks, dinamiskie bloki, redzamība, redzamības stāvoklis, apgriezt, izstiept, meklēšana, parametri, pielāgots, bloka rekvizīti, *u bloki, dinamisks
from: dea2ee7c
---

## Kas darbojas

DWG ar dinamiskiem blokiem atveras, un tie darbojas līdz šim:

- **Īstie nosaukumi.** Dinamiskais bloks ir uzskaitīts panelī {{ui:Bloki}} zem sava nosaukuma ("Kontaktligzda", "Izlietne"), nevis kā nenosaukts `*U` bloks.
- **Stāvoklis, kādā tie tika saglabāti.** Katra atsauce rāda tieši to, ko rādīja otra programma: redzamības stāvokli, kādā tā bija iestatīta, izstieptu vai apgrieztu tā, kā tā tika saglabāta.
- **Redzamības stāvokļa pārslēgšana.** Izvēlieties vienu atsauci (vai vairākas viena un tā paša bloka), atveriet {{ui:Rekvizīti}} un sadaļā {{ui:Pielāgots}} izvēlieties citu stāvokli no saraksta {{ui:Redzamība}}. Atsauce uzreiz rāda šo stāvokli, arī tās atribūtus: tie, ko stāvoklis paslēpj, pazūd; tie, ko tas parāda, parādās ar savām vērtībām. Atsauce saglabā katru vērtību, tāpēc nekas nekļūst tukšs; {{ui:Rekvizīti}} uzskaita paslēptos, atzīmētus kā "paslēpts". {{key:Mod+Z}} atjauno veco stāvokli vienā solī.
- **Rokturi.** Atlasīts dinamiskais bloks rāda savus rokturus tur, kur atrodas tā parametri: mazs trīsstūris redzamības stāvoklim (noklikšķiniet uz tā, lai redzētu stāvokļu sarakstu), bultiņas attāluma galos, dubultā bultiņa apgriezienam. Šobrīd darbojas tikai redzamības rokturis; pārējie to pasaka statusa joslā.
- **Pārējās vērtības, tikai lasāmas.** Zem redzamības saraksta {{ui:Pielāgots}} tiek rādīti arī bloka attālumi, izlīdzināšanas leņķi, apgriezienu stāvokļi un punkti, kā tos satur rasējums.
- **Redzamības stāvokļu rediģēšana.** Atveriet bloku ar {{cmd:BEDIT}}: redaktors rāda vienu stāvokli, kura nosaukums ir norādīts joslā virs rasējuma (tur var izvēlēties citu). Ierakstiet {{cmd:BVSTATE}}, lai pārslēgtos, pievienotu (paslēpjot visu, rādot visu vai saglabājot to, kas redzams), pārdēvētu vai dzēstu stāvokli; {{cmd:BVHIDE}} paslēpj atlasītos objektus pašreizējā redzamības stāvoklī; {{cmd:BVSHOW}} parāda paslēptos, izbalējušus, lai varētu noklikšķināt uz tiem, ko atgriezt. Saglabājot bloku, atsauces, kas iestatītas uz pārdēvētu stāvokli, to saglabā ar jauno nosaukumu, bet tās, kas iestatītas uz dzēstu stāvokli, rāda pirmo stāvokli.
- **Paliek dinamiski.** Saglabāti kā DWG tajā versijā, kādā rasējums tika ievests, bloki paliek dinamiski ar stāvokli, ko izvēlējāties: otra programma tos atver kā tos pašus dinamiskos blokus. Rediģētie redzamības stāvokļi tiek saglabāti arī: to jaunie nosaukumi, pievienotie stāvokļi un tas, ko katrs rāda.

## Kas ir tikai lasāms vai vēl nav

| Vēl nav | Šobrīd tā vietā |
|---|---|
| Attālumu, leņķu vai apgriezienu mainīšana (izstiepšanas, pārvietošanas, apgriešanas darbības) | Tie tiek rādīti tikai lasīšanai sadaļā {{ui:Pielāgots}}; rediģējiet programmā, kas izveidoja bloku. |
| Meklēšanas, XY, pagrieziena un polārie parametri | Vēl nav nolasīti: atsauce tiek rādīta kā saglabāta. |
| Attāluma, apgrieziena un punktu rokturu vilkšana | Tie rāda, kur atrodas parametri; redzamības rokturis un saraksts {{ui:Redzamība}} rekvizītos pārslēdz stāvokļus. |
| Otras programmas tipa dinamisko bloku veidošana (izstiepšana, apgriešana, meklēšana) | Bloki, ko veidojat CadCraft, ir parasti bloki; {{cmd:BPARAMETER}} to pasaka. Jūsu pašu parametri un vairāki redzamības parametri ir parametru pārvaldniekā (skatiet zemāk "Jūsu pašu parametri un redzamības stāvokļi"). |
| Objektu pievienošana vai dzēšana blokā ar redzamības stāvokļiem bloku redaktorā | Bloks tad tiek saglabāts kā parasts bloks (redaktors to pasaka, kad aizveras). |
| Dinamiska saglabāšana citā DWG versijā vai DXF | Tie tiek saglabāti kā parasti bloki, rādot izvēlēto stāvokli, un saglabāšana to pasaka. |

:::note
Objektu pārvietošana vai maiņa {{cmd:BEDIT}} saglabā bloku ar redzamības stāvokļiem dinamisku. Bloks bez stāvokļiem vai bloks, kura objekti redaktorā tika pievienoti vai izdzēsti, kļūst par parastu bloku.
:::

## Jūsu pašu parametri un redzamības stāvokļi

Bloks, ko veidojat CadCraft, var saturēt savus parametrus un **vairākus** redzamības parametrus, katru ar saviem stāvokļiem. Ierakstiet {{cmd:BPARAMS}} (vai `BPM`), lai atvērtu **Parametru pārvaldnieku** blokam, ko rediģējat {{cmd:BEDIT}}, atlasītās atsauces blokam vai blokam, ko nosaucat.

- **Parametri**: nosaukums, tips (skaitlis, garums, leņķis, skaits, jā/nē) un vērtība vai formula ar citiem parametriem (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Iznākums}} rāda rezultātu. Formula, kas nedarbojas, vai vērtība, kas neatbilst savam tipam (skaits 1,5), tiek noraidīta, un pārvaldnieks pasaka, kāpēc; nekas cits nemainās.
- **Redzamības parametri**: {{ui:Pievienot redzamības parametru}} izveido vienu ar pirmo stāvokli. Katru stāvokli var pārdēvēt, noņemt (pēdējais paliek) vai dot skaitli "rāda, kad". Formula izvēlas stāvokli pēc parametriem (stāvoklis, kura skaitlis atbilst, citādi stāvoklis šajā vietā sarakstā); bez formulas katra atsauce izvēlas savu.
- **Objektu ievietošana stāvoklī**: bloku redaktorā atlasiet objektus, ierakstiet {{cmd:BPARAMS}} un noklikšķiniet uz {{ui:Ievietot atlasītos objektus šeit}} stāvoklī. Objekti, ko neuzskaita neviens redzamības parametrs, vienmēr tiek rādīti.
- **Šī atsauce**: ja sākat no atlasītas atsauces, pārvaldnieks rāda arī šīs atsauces pašas vērtības un stāvokļus.

Ārpus bloku redaktora katra izmaiņa ir viens atsaukšanas solis. Bloku redaktorā izmaiņas pieder redaktoram: {{ui:Saglabāt bloku}} tās saglabā. `-BPARAMS` jautā to pašu komandrindā.

**Failā.** DWG un DXF glabā parametrus, to, kuri objekti ir kurā stāvoklī, un katras atsauces pašas vērtības CadCraft savos ierakstos; atverot failu atkal CadCraft, viss atgriežas. Cita programma redz katru atsauci kā bloku ar visiem tā objektiem, jo DWG glabā ne vairāk kā vienu redzamības parametru katram savas veida blokam. Atsauce, ko cita programma ir pārvietojusi, vai bloks, kura objektus tā ir mainījusi, atgriežas bez tām daļām, kas vairs nesakrīt (nekas netiek uzminēts).

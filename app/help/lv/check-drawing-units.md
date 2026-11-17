---
title: Pārbaudīt, kādās vienībās ir rasējums
summary: Noskaidrojiet, vai atvērtais rasējums ir milimetros, collās vai citās vienībās, pārbaudiet to, izmērot kaut ko, un uzziniet, kāpēc cita programma vienai un tai pašai DXF failam var norādīt citas vienības.
keywords: vienības, kādas vienības, kuras vienības, pārbaudīt vienības, milimetri, mm, collas, metriskā, angļu, DXF vienības, STEP uz DXF, nepareizas vienības, collas vai mm, INSUNITS, MEASUREMENT, rasējuma vienības, PartCraft DXF
from: c0ee75bb
---

## Ko jūs darīsiet

Noskaidrosiet, ko atvērtā rasējuma viena vienība nozīmē, un pārliecināsieties, ka nolasītie skaitļi ir tā izmēra, kādu sagaidāt.

## Soļi

1. Atveriet rasējumu, pēc tam nospiediet {{key:Esc}}, lai nekas nebūtu atlasīts, cilnē {{ui:Modelis}}.
2. Labajā panelī, zem {{ui:Pašreizējie iestatījumi}}, nolasiet {{ui:Vienības}}. Tur ir norādīts, ko nozīmē viena rasējuma vienība: {{ui:Milimetri}}, {{ui:Collas}}, {{ui:Pēdas}} un tā tālāk. DXF fails, kas saglabāts no PartCraft, norāda {{ui:Milimetri}}.
3. Pārbaudiet, izmērot kaut ko, kura izmērs jums ir zināms. Ierakstiet {{cmd:DIST}} un izvēlieties abus malas vai cauruma galus. Ja detaļa, kuras izmērs jums zināms, ir 25 mm un rāda `25`, rasējums ir milimetros; ja rāda aptuveni `0.98`, tas ir collās.

{{ui:Bez vienībām}} nozīmē, ka fails to nenorāda. CadCraft tad uzskata, ka vienība ir lapas vienība (milimetri ISO lapās, collas ASV formāta lapās), un skaitļi ir tikpat pareizi, cik pareiza ir programma, kas tos uzrakstīja.

## Ja vienības ir nepareizas

Mainot {{ui:Vienības}}, **nekas netiek pārmērots**: skaitļi paliek tie paši, mainās tikai to nozīme. Tāpēc iestatiet to tikai tad, ja tas patiesi apraksta rasējumu. Ja skaitļi ir milimetri, bet {{ui:Vienības}} rāda {{ui:Collas}}, izvēlieties {{ui:Milimetri}}. Ja pati ģeometrija jāpārvērš citās vienībās, mērogojiet to ar {{cmd:SCALE}} (25.4, lai no collām nonāktu uz milimetriem, un 1/25.4 pretējā virzienā), un pēc tam iestatiet {{ui:Vienības}}.

Veids, kā raksta garumus (decimāli, pēdas un collas, daļskaitļi), ir atsevišķs iestatījums — {{ui:Garuma formāts}}: skatiet [Vienības, lapu izmēri un mērogi](topic:units-papers-scales).

## Kāpēc cita programma var norādīt collas

DXF failā vienības ir norādītas tā galvenē. Vecākajam DXF tipam, R12, mainīgā vienībām nebija, tāpēc programma, kas R12 nolasa stingri, ignorē tajā uzrakstīto un izmanto savu noklusējumu, kas bieži ir collas. Ģeometrija failā ir vienāda neatkarīgi no tā: atšķiras tikai etiķete. PartCraft raksta DXF failus kā R12 un norāda milimetrus divos veidos (`$INSUNITS` 4 un `$MEASUREMENT` 1), lai vairāk programmu tos nolasītu pareizi. Ja programma joprojām rāda collas, iestatiet tās vienības uz milimetriem, kad atverat failu.

Ja failu ievietojat rasējumā (nevis atverat), tā vienības tiek pārvērstas: skatiet [Vienības importējot](topic:units-on-import).

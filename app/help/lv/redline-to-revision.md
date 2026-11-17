---
title: Pārvērst atzīmes par revīziju
summary: Nolasiet redline paketi, ko raksta MarkupCraft, apstipriniet vai noraidiet katru izmaiņu, uzlieciet revīzijas mākoni un revīziju žurnālu uz apstiprinātajām, un saglabājiet atbilžu failu, ko MarkupCraft nolasa atpakaļ.
keywords: redline, atzīme, revīzija, mākonis, revīzijas mākonis, revīziju žurnāls, apstiprināt, noraidīt, markupcraft, pārskatīšana, redline pakete, atbildes, REDLINE
from: cdb3fafe
---

Pārskatītājs atzīmē plānu komplektu programmā MarkupCraft un nosūta jums **redline paketi**, failu, kas beidzas ar `.redline.json`. Šeit jūs to izejat cauri izmaiņu pēc izmaiņas, un apstiprinātās kļūst par revīzijas mākoņiem rasējumā.

## Izejiet cauri izmaiņām

Ierakstiet {{cmd:REDLINE}} (`RDL`) un izvēlieties paketi. Izvēlieties:

- {{ui:Saraksts}}: katru izmaiņu ar tās numuru, stāvokli, lapu, veidu, kas to prasīja un ko tas uzrakstīja.
- {{ui:Apstiprināt}}, {{ui:Noraidīt}}, {{ui:Gatavs}}: ierakstiet numurus (`1,3-5`, vai `All` (visus)) un izvēles piezīmi atbilžu failam. {{ui:Atkārtoti atvērt}} atjauno izmaiņas kā atvērtas.
- {{ui:Rāmis}}: daļa rasējuma, ko rāda atzīmētā lapa. Noklikšķiniet divus stūrus; nospiediet {{key:Enter}}, lai iegūtu visu rasējumu. Izmaiņas tiek novietotas pēc tā, kur tās atradās lapā, tāpēc tas ir tas, kas tās saskaņo.
- {{ui:Lietot}}: uzzīmē revīzijas mākoni (slānis `REV-CLOUD`, ar revīzijas burtu) ap katru apstiprināto vai pabeigto izmaiņu, un revīziju žurnālu, līniju tabulu ar to, kas tika apstiprināts, kopā ar jūsu piezīmēm (slānis `REV-LOG`), rasējuma labajā pusē. Viens atsaukšanas solis.
- {{ui:Saglabāt}}: raksta `<project>-<revision>.redline-answers.json`. Atverot to MarkupCraft, atzīmes aizveras: Apstiprinātas, Noraidītas vai Pabeigtas, ar jūsu piezīmēm kā komentāriem.

## Ko zināt

Tas, ko pārskatītājs uzrakstīja, tiek rādīts kā uzrakstīts. CadCraft nekad neseko norādēm, kas atrastas paketē; tā tikai tās parāda jums.

Noraidītas un atvērtas izmaiņas rasējumam nepievieno neko. Pakete tiek nolasīta jūsu datorā; nekas netiek augšupielādēts.

Ja jūsu asistents ir savienots, tas var nolasīt paketi, ierakstīt lēmumus un piemērot tos ar rīkiem `redline_read`, `redline_decide`, `redline_apply` un `redline_answers`; rasējuma izmaiņas notiek vienā atsaukšanas solī, "Assistant: Redline to revision".

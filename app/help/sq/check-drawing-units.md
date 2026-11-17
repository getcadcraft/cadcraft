---
title: Kontrollo në çfarë njësish është një vizatim
summary: Shiko nëse një vizatim i hapur është në milimetra, inç ose diçka tjetër, kontrolloje duke matur, dhe dije pse një program tjetër mund të emërtojë njësi të ndryshme për të njëjtin DXF.
keywords: njësi, çfarë njësish, cilat njësi, kontrollo njësitë, milimetra, mm, inç, metrike, imperiale, njësitë DXF, STEP në DXF, njësi të gabuara, inç ose mm, INSUNITS, MEASUREMENT, njësitë e vizatimit, PartCraft DXF
from: c0ee75bb
---

## Çfarë do të bësh

Gjej çfarë do të thotë një njësi në një vizatim të hapur, dhe sigurohu që numrat që lexon janë madhësia që pret.

## Hapat

1. Hap vizatimin, pastaj shtyp {{key:Esc}} që të mos zgjidhet asgjë, në skedën {{ui:Modeli}}.
2. Në panelin e djathtë, nën {{ui:Cilësimet aktuale}}, lexo {{ui:Njësitë}}. Aty thuhet çfarë përfaqëson një njësi vizatimi: {{ui:Milimetra}}, {{ui:Inç}}, {{ui:Këmbë}} e kështu me radhë. Një DXF i ruajtur nga PartCraft thotë {{ui:Milimetra}}.
3. Kontrolloje duke matur diçka madhësia e së cilës e di. Shkruaj {{cmd:DIST}} dhe zgjidh dy skajet e një brinje ose të një vrime. Nëse një pjesë që e di se është 25 mm lexohet `25`, vizatimi është në milimetra; nëse lexohet rreth `0.98`, është në inç.

{{ui:Pa njësi}} do të thotë se skedari nuk e thotë. CadCraft atëherë e trajton si njësinë e letrës (milimetra në letër ISO, inç në letër US), dhe numrat janë vetëm aq të saktë sa programi që i shkroi.

## Nëse njësitë janë të gabuara

Ndryshimi i {{ui:Njësitë}} **nuk ndryshon asgjë në madhësi**: numrat mbeten të njëjtë dhe ndryshon vetëm ajo që ata do të thonë. Prandaj vendose vetëm për të thënë çfarë është vizatimi në të vërtetë. Nëse numrat janë milimetra dhe {{ui:Njësitë}} thotë {{ui:Inç}}, zgjidh {{ui:Milimetra}}. Nëse të duhet vetë gjeometria në njësi të tjera, shkallëzoje me {{cmd:SCALE}} (25.4 nga inç në milimetra, 1/25.4 në të kundërt) dhe pastaj vendos {{ui:Njësitë}}.

Si shkruhen gjatësitë (decimale, këmbë dhe inç, thyesa) është një cilësim tjetër, {{ui:Formati i gjatësisë}}: shih [Njësitë, madhësitë e letrës dhe shkallët](topic:units-papers-scales).

## Pse një program tjetër mund të thotë inç

Një DXF i deklaron njësitë në kokën e vet. Lloji më i vjetër i DXF, R12, nuk kishte aspak variabël për njësitë, kështu që një program që e lexon R12 rreptësisht e injoron atë që është shkruar aty dhe kthehet te paracaktimi i vet, që shpesh është inç. Gjeometria në skedar është e njëjtë në të dyja rastet: ndryshon vetëm etiketa. PartCraft i shkruan skedarët e vet DXF si R12 dhe deklaron milimetra në dy mënyra (`$INSUNITS` 4 dhe `$MEASUREMENT` 1), që më shumë programe t'i lexojnë saktë. Nëse një program ende thotë inç, vendos njësitë e tij në milimetra kur e hap skedarin.

Sjellja e një skedari brenda një vizatimi (në vend që ta hapësh) i konverton njësitë: shih [Njësitë gjatë importit](topic:units-on-import).

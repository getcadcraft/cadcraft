---
title: Muuqaalka wareeji iyo kuwaaga (UCS)
summary: Muuqaalka 90° ama xagal kasta u wareeji iyadoon wax naqshadda ku jirta la dhaqaajin, oo dejiso nidaamka isku-xidhka isticmaalaha (UCS) si dhibcaha, ortho, raadinta xagalka, shabakadda iyo qoraalka cusub u raacaan dhinacyada dhismaha.
keywords: ucs, nidaamka isku-xidhka isticmaalaha, qorshaha, wareeji muuqaalka, muuqaalka lafo, ucs z, ucs 3point, ucs object, ucs world, ucs magacaysan, ucsfollow, turnleft, turnright, turnworld, dhismo xagal, shabakad wareegan
from: 6f152c65
---

## Waxa aad baran doontid

Sida loo eego naqshad la wareejiyay, si dhismo xagal ah oo shaashadda ku muuqda toos loo akhriyo, iyo sida dhibcaha loo qori karo dhinacyada dhismaha. Naqshaddu waxba kuma dhaqaaqdo markaad tan samaynayso: walxaha waxay hayaan isku-xidhkooda, wareejintu ma aha tafatir, naqshaddana looma calaamayn inay isbeddeshay.

## Wareeji muuqaalka rubuc

1. Guji {{ui:Muuqaal}} › {{ui:Wax dheeraad ah}} › {{ui:Muuqaalka 90° bidix u wareeji}} ama {{ui:Muuqaalka 90° midig u wareeji}}.

Naqshaddu waxay ku wareegtaa shaashadda dhexda aagga naqshadda. Mar kale samee si aad u sii wareegto.

2. Guji {{ui:Muuqaal}} › {{ui:Wax dheeraad ah}} › {{ui:Dib ugu noq adduunka}} si aad dib ugu sinjiso.

Amarrada ka dambeeya waa {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} iyo {{cmd:TURNWORLD}}. Si aad u siiso furaha, ku dar xariiq sida `TL=TURNLEFT` aliases-kaaga adigoo isticmaalaya {{cmd:ALIASEDIT}}.

## Ku toosi dhismo xagal

1. Ku qor `UCS` oo taabo {{key:Enter}}, kadibna `OB` iyo {{key:Enter}}.
2. Guji xariiq derbi oo ku dhow dhamaadka ah inuu noqdo asalka.

UCS-ka hadda wuxuu ku bilaabmaa dhamaadkaas, tiirkiisa X wuxuu u socdaa derbiga, muuqaalkana wuu wareegayaa si derbigu toos ugu muuqdo shaashadda. Astaanta geeska hoose bidix wuxuu muujinayaa halka tiirarka UCS ay tilmaamayaan.

3. Samee sida caadiga ah. Marka UCS la dejiyo:
   - `x,y` iyo `@dx,dy` waxaa lagu cabbiraa tiirarka UCS; `d<a` wuxuu cabbiraa xagalka laga bilaabo tiirka X ee UCS.
   - {{ui:Ortho}}, raadinta xagalka iyo shabakadda waxay raacaan tiirarka UCS, sidoo kalena jaranjarka.
   - Qoraal cusub iyo faqrado cusub waxay u socdaan tiirka X ee UCS; toosnaanta iyo jihada u-socota ee {{cmd:DIMLINEAR}} ayaa sidoo kale raacaa.
   - Qiimayaasha safka xaaladda iyo kuwa {{cmd:ID}} waa qiimayaasha UCS.
4. Si aad u qortid dhibic adduunka marka UCS la dejiyo, ku dar `*` hore: `*0,0` ama `@*100,0`.
5. Ku qor `UCS`, {{key:Enter}}, kadibna mar kale {{key:Enter}} si aad ugu noqoto adduunka.

## Siyaabaha kale ee loo dejiyo UCS

Amarka {{cmd:UCS}}:

| Waxa aad qortay | Waxa uu sameeyaa |
|---|---|
| dhibic | Asal cusub; kadibna guji dhibic ku taal tiirka X cusub, ama taabo {{key:Enter}} si aad xagalka u hayso |
| `Z` | Wareeji UCS asalkiisa ku wareegsan xagal aad qortay (digrii, saacadda ka soo horjeedda) ama aad doorato |
| `3` (3point) | Asal, dhibic ku taal tiirka X ee togan, iyo dhibic ku taal dhinaca Y ee togan |
| `OB` (OBject) | Xariiq, qaanso, goob, qayb polyline ah, qoraal, tixraac bloog, dhibic ama xariiq dhismo |
| `P` (Previous) | UCS-ka ka hor kan (kii ugu dambeeyay tobanka ayaa la hayaa inta fiilada la furan yahay) |
| `W` (World) | Dib ugu noq adduunka |
| `NA` (NAmed) | `S` wuxuu kaydiyaa UCS-ka hadda magac ku, `R` wuxuu soo celiyaa mid, `D` wuxuu tirtiraa mid, `?` wuxuu liistaa |

Isbeddel kasta muuqaalka wuu wareegaa si tiirka X ee UCS cusub uu toos u yahay. {{cmd:PLAN}} wuxuu wareejiyaa muuqaalka iyadoon UCS la beddelin: {{key:Enter}} UCS-ka hadda jira, `U` mid la kaydiyay, `W` adduunka.

## Waxa wanaagsan in la yaqaan

- Dhinac kasta oo shaashad kala qaybsan wuxuu ilaaliyaa wareejintiisa. UCS-ka waa naqshadda.
- Xaashiyadu waxay ka shaqeeyaan koorarka warqadda; dejiso UCS tab-ka {{ui:Moodeel}}, ama gudaha daaqadda muuqaalka.
- Daaqadaha doorashada ee la jiido muuqaal wareegan ayaa doora waxa ku jira shaashadda.
- Routines-ka LISP waxay helaan dhibcaha UCS-ka `getpoint`-ka, waxay akhrin karaan `UCSORG`, `UCSXDIR`, `UCSYDIR` iyo `VIEWTWIST`, `trans` wuxuu u beddelaa adduunka, UCS-ka iyo shaashadda.

:::note
Faylka la kaydiyay wuxuu ilaalin doonaa UCS-ka iyo wareejinta muuqaalka nuqulka dambe; ilaa markaas waxay socdaan inta naqshaddu furan tahay.
:::

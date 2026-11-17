---
title: Samee oo geli bloogyada
summary: Albaab la sawiray u beddel bloog, dib ugu geli meelo, miisaan iyo xagal kale, oo nadiifi bloogyada aan la isticmaalin.
keywords: bloog, bmake, geli, ddinsert, calaamad, purge, explode, redefine, barta aasaaska, tixraac, tiri, jadwal, csv, sifooyinka, soo saarista xogta
from: 125a129d
---

## Waxa aad samayn doontid

Albaab calaamad ah oo loo beddelay bloog magaceedu yahay `DOOR-900`, kadib saddex jeer la geliyay: sida la sawiray, 90 darajo la wareejiyay, iyo mid muraayad ah.

Bloog waa koox walxo oo magac lagu bixiyay. Mar ayaad sawirtaa; meel kasta oo aad isticmaasho waa **tixraac bloog** oo dib ugu noqda hal qeexid oo keliya. Qaybta {{ui:Blocks}} ee dhinaca bidix waxay liisteysaa bloogyada naqshadda ku jira iyo inta jeer ee mid kasta la isticmaalay.

## Sawir albaabka

1. Ku qor `L` oo taabo {{key:Enter}}.
2. Ku qor `0,0` oo taabo {{key:Enter}}.
3. Ku qor `@0,900` oo taabo {{key:Enter}}, kadibna mar kale taabo {{key:Enter}}. Tani waa jiiffka albaabka.
4. Ku qor `A` oo taabo {{key:Enter}}.
5. Ku qor `C` oo taabo {{key:Enter}} si aad marka hore udhexda u siiso.
6. Ku qor `0,0` oo taabo {{key:Enter}} udhexda.
7. Ku qor `900,0` oo taabo {{key:Enter}} barta bilowga.
8. Ku qor `0,900` oo taabo {{key:Enter}} barta dhammaadka. Tani waa xagga furidda.
9. Guji {{ui:Dhammaan xadka}}.

Qaansadu waxay ka socotaa barta bilowga ilaa barta dhammaadka, dhinaca ka soo horjeeda wareegga saacadda.

## Samee bloogga

1. Ku qor `B` oo taabo {{key:Enter}}, ama guji {{ui:Samee}} kooxda bloogyada.
2. Meesha `Enter block name` ku qor `DOOR-900` oo taabo {{key:Enter}}.
3. Meesha `Specify insertion base point` ku qor `0,0` oo taabo {{key:Enter}}. Tani waa laamaha albaabka: barta ku dhacda meesha aad bloogga dhigto.
4. Meesha `Select objects` daaqad ku jiid jiiffka iyo qaansada.
5. Taabo {{key:Enter}}.

Taariikhda waxay tidhi: Bloog "DOOR-900" ayaa laga sameeyay 2 walxood, waxaana loo beddelay hal tixraac oo ku saabsan. Panelka {{ui:Blocks}} wuxuu tusayaa DOOR-900 oo ku xiga `1×`: taasi waa hal tixraac. Guji albaabka: hadda hal walax ayuu ahaan doonaa, wuxuuna noqonayaa "Tixraac bloog".

:::tip
Walxaha marka hore dooro, kadibna ku qor `B`. CadCraft wali wuxuu weydiinayaa magaca iyo barta aasaaska, kadibna wuxuu isticmaalaa doorashadaada.
:::

## Geli bloogga

1. Ku qor `I` oo taabo {{key:Enter}}, ama guji {{ui:Geli}} oo ag ku taal DOOR-900 panelka {{ui:Blocks}}.
2. Meesha `Enter block name or [File/Library] <DOOR-900>` taabo {{key:Enter}}. (Badhanka {{ui:Geli}} ee panelka magaca wuu kuu buuxinayaa.)
3. Albaabku wuu raacayaa taar-xagga. Guji meesha laamaha albaabku ku dhacayo.

Albaab labaad ayaa soo muuqda.

## Geli oo wareeji ama cabbir

1. Ku qor `I` oo taabo {{key:Enter}}, kadibna taabo {{key:Enter}} si aad magaca u aqbasho.
2. Meesha `Specify insertion point [Scale/Rotate]` ku qor `R` oo taabo {{key:Enter}}.
3. Ku qor `90` oo taabo {{key:Enter}}. Muuqaalka hore wuu wareegayaa.
4. Guji si aad u dhigto.

Halkii aad `S` ku qori, waxaad ku qori kartaa qiyaaska miisaanka; wuxuu khuseeyaa labada jiho. Miisaanka iyo wareejinta waa la xasuustaa geliska xiga. Si aad albaab u muraayadeyso, geli oo kadibna isticmaal {{cmd:MIRROR}} tixraaca.

## Beddel bloog la geliyay

Dooro tixraac bloog. Panelka midig waxaad beddeli kartaa {{ui:X}}, {{ui:Y}}, {{ui:Miisaanka X}}, {{ui:Miisaanka Y}} iyo {{ui:Wareejin}}. {{ui:Miisaanka X}} oo tiro taban wuxuu rogayaa.

## Mar kale qeex bloog

Si aad u beddesho albaab kasta hal mar, samee bloog magac isku mid ah leh:

1. Sawir nooca cusub ee albaabka.
2. Ku qor `B` oo taabo {{key:Enter}}, kadibna ku qor `DOOR-900`.
3. Meesha `Block "DOOR-900" already exists. Redefine it?` ku qor `Y` oo taabo {{key:Enter}}.
4. Sida hore, dooro barta aasaaska oo dooro walxaha cusub.

Tixraac kasta oo DOOR-900 ah hadda wuxuu muujinayaa nooca cusub.

Ama tafatir bloogga laftiisa: {{ui:Blocks}} › {{ui:Wax dheeraad ah}} › {{ui:Tafatir bloog}} ({{cmd:BEDIT}}) ayaa furaysa isagoo keligiis ah, {{ui:Kaydi bloogga}} ayaa dib u celinaysa. Eeg [Sifooyinka bloogga](topic:attributes#change-a-block-the-block-editor).

## Tiri bloogyada oo dhoofi jadwal

Ku qor {{cmd:COUNT}} (ama {{ui:Blocks}} › {{ui:Wax dheeraad ah}} › {{ui:Tiri bloogyada}}), kadibna:

- guji hal albaab: dhammaan albaabyada meelkan lagu dhex jiro waa la doortaa, taariikhdana way sheegaysaa inta jeer ee halkan iyo guud ahaan naqshadda;
- ama taabo {{key:Enter}}: taariikhdu waxay liisteysaa bloog kasta iyo tiradiisa, kuwa ugu badan marka hore;
- ama ku qor `E`, kadibna `C` si aad u hesho CSV tirooyinka (moodeelka, xaashiyaha, iyo wadar ahaan) ama `A` si aad u hesho hal safka tixraac kasta oo leh lakabkiisa, meeshiisa, wareejintiisa iyo dhammaan qiimaha sifooyinkiisa — jadwal aad ku furi karto barnaamijka miisaanka.

Bloogyada aan magac lahayn (cabbirka, miisaska) iyo tixraacyada gudaha bloogyada kale lama tiriyo. Unugyada ku bilaabma sida qaacido (`=`, `+`, `-`, `@`) waxay helayaan `'` hor-ka, si barnaamijka miisaanku u muujiyo qoraal.

## Kala qaybi oo nadiifi

- {{cmd:EXPLODE}} (`X`) wuxuu tixraac bloog la doortay ku celinayaa walxo kala go'an. Qeexiddu way ku sii jirtaa.
- {{cmd:PURGE}} (`PU`) wuxuu tirtiraa qeexidaha bloogyada aan wax lagu isticmaalin. Taariikhdu waxay sheegaysaa inta uu tirtiray.

## Magacyada bloogyada

Magac wuxuu ku kari karaa ilaa 255 xaraf, wuxuu ku jiri karaa meel-bannaan, laakiin ma bilaabi karo calaamadda reer (asterisk), mana laha `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ama calaamadda dhabarka (backtick). Marka aad kaydiso DXF R12, magacyada waxay u qoran yihiin xaraf waaweyn; xarafyada aan ahayn xarafyo, lambarro, `$`, `_` iyo `-` waxay noqdaan `_`, magacyadana waxay ka gooyan yihiin 31 xaraf; taariikhdu waxay sheegaysaa inta ay isbeddeshay. Magacyada gaabta ah ee xarafyo waaweyn, lambarro iyo kala-goys, sida `DOOR-900`, sidooda ayay ku dhawaan. DWG la kaydiyay magacyada wuu ku hayaa sidii aad ku qortay, xarafyada waaweyn iyo kuwa yaryar; kaliya xarafyada DWG aan oggolaan waa bedelaan (`|` wuxuu noqdaa `$0$`, kuwa kale waxay noqdaan `_`).

## Qor bloog ama walxo faylka gooni ah

Ku qor `W` ({{cmd:WBLOCK}}) oo dooro **Walxaha**, **Bloog** ama **Naqshadda oo dhan**. Natijadu waa DWG ama DXF cusub oo keliya lakabyada, qaababka iyo bloogyada ay isticmaasho, oo barta aasaaska ah ay tahay bilowgeeda. Walxaha waxaad ku hayn kartaa, waxaad u beddeli kartaa bloog, ama waxaad ka tirtiri kartaa naqshadan.

## Khaladaadka caadiga ah

- **Bloogga wuxuu ku dhacay meel ka fog taar-xagga.** Barta aasaasku kuma jirin walxaha. Dib u samee bloogga barta aasaasku ku jiro geesha ama laamaha albaabka.
- **"No objects selected; nothing made."** Waxaad taabatay {{key:Enter}} ka hor inta aadan walxo dooran.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Ku qor `F` si aad bloog uga keento naqshad kale, ama `L` maktabadda. Eeg [Geli fayl ama maktabad](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Ka reeb xuddunta aragtiyada daaqadaha marka aad dooranayso.

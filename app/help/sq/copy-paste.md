---
title: Kopjo, ngjit dhe dublo
summary: Kopjo objekte në clipboard-in e CadCraft, ngjiti aty ku klikoni ose në vend, dublo me treguesin, dhe sill punën nga një vizatim ose skedë tjetër.
keywords: kopjo, prit, ngjit, ngjit në vend, dublo, clipboard, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, mes vizatimesh, skedë tjetër, pikë baze
from: 4b9f29d3
---

## Çfarë do të mësoni

Si të kopjoni objekte në clipboard, t'i ngjitni aty ku klikoni, t'i ngjitni te koordinatat e tyre, t'i dubloni me treguesin, t'i prisni dhe t'i sillni në një vizatim tjetër. Gjithçka këtu gjendet edhe te grupi {{ui:Redakto}} i shiritit të veglave: {{ui:Kopjo}}, {{ui:Ngjit}} dhe menyja {{ui:Më shumë}}.

## Kopjo dhe ngjit aty ku klikoni

1. Zgjidhni objektet: klikoni mbi to, ose tërhiqni një dritare.
2. Shtypni {{key:Mod+C}}, ose klikoni {{ui:Kopjo}} te grupi {{ui:Redakto}}. Linja e komandave thotë sa objekte u kopjuan. Ato mbeten të zgjedhura.
3. Shtypni {{key:Mod+V}}, ose klikoni {{ui:Ngjit}}. Kopja shfaqet te kursori, e varur nga qoshja e poshtme majtas e objekteve të kopjuara.
4. Klikoni aty ku duhet të shkojë ajo qoshe, ose shkruani një pikë si `2000,500` dhe shtypni {{key:Enter}}. Kapjet e objekteve dhe Ortho funksionojnë si zakonisht.

Objektet e ngjitura janë të zgjedhura, kështu që mund t'i zhvendosni ose t'i ndryshoni menjëherë. Një {{key:Mod+Z}} largon tërë ngjitjen.

:::tip
Doni që kopja të varet nga një pikë që zgjidhni, si qoshja e një muri? Shkruani `COPYBASE`, klikoni pikën bazë, zgjidhni objektet dhe shtypni {{key:Enter}}. Ngjitja e vendos atë pikë aty ku klikoni. Për t'i varur të gjitha kopjet nga qendra e tyre në vend të qoshes së poshtme majtas, ndryshoni {{ui:Pika e ngjitjes}} te [cilësimet e CadCraft](topic:settings).
:::

## Ngjit në vend

Shtypni {{key:Mod+Shift+V}}, ose zgjidhni {{ui:Ngjit në vend}} në menynë {{ui:Më shumë}}. Kopja futet saktësisht te koordinatat nga u kopjua, pa klikim. Përdoreni për të sjellë objekte në një vizatim tjetër në të njëjtin vend, ose nga një fletë në një fletë tjetër.

## Dublo dhe zhvendos

1. Zgjidhni objektet.
2. Shtypni {{key:Mod+D}}, ose zgjidhni {{ui:Dublo dhe zhvendos}} në menynë {{ui:Më shumë}}.
3. Një kopje ndodhet mbi origjinalin dhe lëviz me treguesin. Klikoni aty ku duhet të shkojë. Mund edhe të shkruani një zhvendosje si `@0,-600`, ose një distancë drejt kursorit.

{{key:Esc}} para klikimit nuk lë asgjë pas. Dublikata është një hap i vetëm zhbërjeje dhe nuk e prek clipboard-in.

## Prerje

Shtypni {{key:Mod+X}}, ose zgjidhni {{ui:Prit}} në menynë {{ui:Më shumë}}. Objektet shkojnë në clipboard dhe fshihen nga vizatimi, në një hap të vetëm zhbërjeje. Ktheni-i me {{key:Mod+V}} ose {{key:Mod+Shift+V}}.

## Mes vizatimesh dhe skedave

Clipboard-i e mban kopjen kur hapni një vizatim tjetër, dhe ndahet nga çdo skedë e CadCraft në këtë shfletues. Kopjoni në një skedë, pastaj shtypni {{key:Mod+V}} në një tjetër.

- Blloqet që përdorin objektet vijnë me to. Nëse vizatimi ku ngjitni ka tashmë një bllok me të njëjtin emër, përdoret përkufizimi i vet, ashtu si në AutoCAD.
- Shtresat që përdorin objektet shtohen, me ngjyrën dhe cilësimet që kishin.
- Kopja nuk ripërmasohet kur dy vizatimet përdorin njësi të ndryshme: CadCraft e thotë këtë, dhe më pas mund të përdorni {{cmd:SCALE}}.
- Pamjet e dritareve qëndrojnë në fletën e tyre; ato lihen jashtë kopjes.

:::note
Clipboard-i është i CadCraft-it. Nuk mund t'i ngjitni objektet CadCraft në një program tjetër, as të ngjisni nga një program tjetër në CadCraft: ruajeni si DWG ose DXF. Një kopje shumë e madhe mund të jetë tepër e madhe për t'u ndarë mes skedave; linja e komandave atëherë thotë vetëm se kjo skedë mund ta ngjitë.
:::

## Gabime të zakonshme

- **{{key:Mod+V}} ngjiti tekst në linjën e komandave.** Kishit shkruar diçka atje, kështu që tastet vepronin mbi tekst. Shtypni {{key:Esc}} për ta pastruar, pastaj shtypni përsëri {{key:Mod+V}}.
- **Asgjë nuk ndodhi, dhe shiriti i gjendjes thotë të mbaroni komandën aktuale.** Po ekzekutohet një komandë tjetër. Shtypni fillimisht {{key:Esc}}.
- **Ngjitja u vendos larg.** Ajo varet nga qoshja e poshtme majtas e asaj që kopjuat, që mund të jetë një objekt i largët që zgjodhët pa dashje. Përdorni {{ui:Ngjit në vend}}, ose kopjoni me `COPYBASE`.
- **"Asgjë nuk u ngjit" me arsye.** Ajo që la një skedë tjetër në clipboard nuk mund të lexohej (ishte e dëmtuar, ose u ndryshua me dorë). Kopjoni sërish objektet.

Shihni listën e plotë të tasteve te [Tastiera dhe mausi](topic:keyboard), dhe çdo kërkesë te [Referenca e komandave](topic:commands#clipboard).

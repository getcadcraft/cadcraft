---
title: "Documents: I-check out, mga revision at release"
summary: "Panatilihing kontrolado ang mga drawing sa project folder: i-check out ang file para walang ibang makabago nito, i-check in ito bilang bagong revision, ipadala para sa review at i-release na may pangalan ng approver; kasama ang kasaysayan, kung ano ang gumagamit ng ano, bill of materials, at mga title block na nagpapakita ng revision."
keywords: mga setting ng project, approvers, admins, mga letra ng revision, ASME, read-only, ikumpara ang mga revision, buksan ang kopya, partcraft, bimcraft, documents, DOCUMENTS, DOCS, vault, document management, pdm, check out, check in, checkout, checkin, lock, revision, rev, letra ng revision, release, released, approve, approval, review, obsolete, saan ginamit, bom, bill of materials, title block, revision block, project folder
from: ee938722
---

## Ang gagawin mo

Isang project folder kung saan may revision ang bawat drawing (A.1, A.2 … tapos A, B …) at estado (Ginagawa pa, Para sa review, Released, Obsolete), kung saan isang tao lang sa isang pagkakataon ang puwedeng magbago ng file, at kung saan nakatala kung sino at kailan ang bawat check-out, check-in, approval at sirang check-out.

Nasa mismong folder ang lahat, sa isang nakatagong `.ccvault` folder sa tabi ng iyong mga drawing. Gumagana ang folder sa shared drive o sa synced folder para sa buong team. Walang server at walang ina-upload.

## Buksan ang Documents

I-type ang `DOCUMENTS` (o `DOCS`) at pindutin ang {{key:Enter}}. Magbubukas ang panel sa tabi ng drawing.

Piliin ang {{ui:Pumili ng project folder}} at piliin ang folder na naglalaman ng mga drawing ng project. Gumagana ang project folder sa CadCraft Studio at sa mga browser na kayang magbukas ng folder (Chrome, Edge). Sa ibang browser, sinasabi ito ng panel.

Sa unang pagkakataon, i-type ang pangalan mo (ilalagay ito sa lahat ng ginagawa mo) at ang pangalan ng computer na ito. Kung naka-sign in ka na, nandiyan na ang pangalan mo.

## Magsimula ng vault

Ang folder na hindi pa vault ay nag-aalok ng {{ui:Magsimula ng vault sa folder na ito}}. I-type ang pangalan ng project. Pagkatapos, buksan ang {{ui:Mga file na wala sa vault}} at piliin ang {{ui:Idagdag}} sa tabi ng bawat file na gustong ilagay sa kontrol. Ang file na idinagdag mo ay magsisimula sa revision **A.1**, Ginagawa pa.

## Baguhin ang drawing

1. Piliin ang {{ui:Buksan}} sa tabi ng drawing. Magbubukas ito sa CadCraft. Kung hindi ito naka-check out sa iyo, tingnan lang at huwag baguhin: tatanggihan ng I-save ang pag-overwrite at sasabihin kung bakit (gamitin ang I-save bilang para magtago ng sarili mong kopya).
2. Piliin ang {{ui:I-check out}}. Walang ibang makaka-check out nito ngayon; ipinapakita ng panel kung sino ang may hawak nito, sa anong computer, at mula kailan.
3. Gumuhit.
4. Piliin ang {{ui:I-check in}} at sabihin kung ano ang nabago. Ang drawing na bukas sa iyo ay ise-save sa project folder sa sarili nitong format at magiging susunod na revision (A.1, tapos A.2). Ang check-in na walang pagbabago ay nananatili ang revision.

Ibinabalik ng {{ui:I-undo ang check-out}} ang file nang walang bagong revision.

## Review at release

- {{ui:Ipadala para sa review}}: read-only ang file habang nire-review ito.
- {{ui:I-approve}}: i-type ang pangalan ng approver. Ang A.3 ay magiging **A**, Released. Read-only ang mga Released na file.
- {{ui:Ibalik}}: babalik sa Ginagawa pa, kasama ang dahilan.
- Ang {{ui:Bagong revision}} sa released na file ay nagche-check out nito para sa susunod na letra: ang unang check-in nito ay **B.1**. Ang {{ui:I-undo ang check-out}} bago iyon ay iiwan itong nasa A.
- Ang {{ui:Gawing obsolete}} ay nagre-retire ng released na file.

Puwedeng magtago ang project ng listahan ng mga puwedeng mag-approve, at puwedeng hingin na hindi ang nag-check in ng file ang approver (tingnan ang Mga setting ng project sa ibaba).

## Mga setting ng project

Buksan ang {{ui:Mga setting ng project}} sa panel:

- **Approvers**: isang pangalan bawat linya. Kapag may mga nakalagay, sila lang ang puwedeng mag-approve ng release.
- **Dapat ibang tao sa may-akda ang approver**: ang panuntunang "four eyes".
- **Admins**: isang pangalan bawat linya. Kapag may mga nakalagay, sila lang ang puwedeng sumira ng check-out ng iba o magbago ng mga setting na ito.
- **Mga letra ng revision na aalisin**: nilalaktawan ng {{ui:Gamitin ang ASME Y14.35 sequence}} ang I, O, Q, S, X at Z, o i-type ang sarili mong mga letra. Mananatili ang mga letrang naibigay na; ang pinili ay ilalapat sa susunod na mga revision.
- **Ituturing na luma ang check-out pagkatapos ng**: bilang ng araw (14 bilang default).

Piliin ang {{ui:I-save ang mga setting}}. Nakatala sa log ang pagbabago at kung sino ang gumawa nito.

## May naiwang naka-check out na file

Ang {{ui:Sirain ang check-out}} ay nagpapalaya ng file na naka-check out sa iba (wala sila, o nasira ang computer nila). Kailangan mong i-type ang dahilan: nakatala ito sa log kasama kung kanino ang check-out. Kapag may admins ang project, sila lang ang puwedeng gumawa nito. Ang check-out na mahigit 14 na araw na ang tanda ay mamarkahan bilang matagal na.

## Kasaysayan, mga revision, mga ginamit, ginamit ng

Piliin ang pangalan ng file para makita ang:

- {{ui:Kasaysayan}}: bawat pangyayari, pinakabago muna, kasama kung sino, anong computer at kailan.
- {{ui:Mga revision}}: bawat revision na naitago. Nasa vault ang kopya ng bawat revision (iisang content lang ang naitatago kapag pareho). Binubuksan ng {{ui:Buksan ang kopya}} ang revision na iyon bilang simpleng kopya na hindi makakapag-overwrite sa file ng vault. Inililista ng {{ui:Ikumpara sa}} ang idinagdag, tinanggal at binago sa pagitan ng revision na iyon at ng nauna rito (o anumang iba pang piliin mo), at kinukulayan ito sa drawing.
- {{ui:Mga ginamit}}: ang mga drawing na naka-link dito (xrefs), ang mga dokumentong tinuturo ng IFC model, ang mga piyesa ng PartCraft assembly.
- {{ui:Ginamit ng}}: bawat file sa vault na gumagamit nito.

Ang {{ui:Bill of materials (CSV)}} ay nagse-save ng listahan ng lahat ng ginagamit ng file, bawat level, kasama ang dami, mga revision at estado, para sa spreadsheet.

## Revision block sa sheet

Kapag bukas ang drawing na may layout, piliin ang {{ui:Revision block}}. Iginuguhit sa itaas na kanan ng sheet na tinitingnan mo ang talahanayan ng mga released na revision (revision, petsa, sino, approved, paglalarawan). Kapag nag-approve ka ng release, ina-update ang talahanayan.

## Revision sa title block

Bigyan ang mga attribute ng iyong title block ng isa sa mga tag na ito at piliin ang {{ui:Punan ang title block}} sa bukas na drawing:

| Tag | Pinupunan ng |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | ang revision (B, o B.2 habang ginagawa) |
| `VAULT.STATE` | ang estado (Released …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | ang petsa ng pinakabagong revision |
| `VAULT.APPROVER`, `APPROVED_BY` | sino ang nag-approve ng pinakabagong release |

## PartCraft at BimCraft

May parehong Documents panel ang PartCraft at BimCraft para sa sarili nilang mga file: mga piyesa at assembly sa PartCraft, mga IFC model sa BimCraft. Sa check-in, ise-save ang bukas na model sa project folder, at ipinapakita ng assembly kung aling mga piyesa ang ginagamit nito at ang bill of materials.

## Mabuting malaman

- Hindi puwedeng pareho ng dalawang tao sa iisang shared folder mag-check out ng file: ang check-out ay file na hindi pumapayag na gawin nang dalawang beses ng sistema. Sa browser, at sa Studio na mas luma sa feature na ito, ito ang pinakamahigpit na kayang ibigay ng folder: maaaring pareho pang magtagumpay ang dalawang check-out sa iisang segundo. Sinasabi ng panel kung alin ang nalalapat.
- Huwag manu-manong i-edit o burahin ang `.ccvault` folder. Ang log dito ang talaan; kung kailangan, binubuo ulit ng vault ang listahan nito mula roon.
- Ang pagbabago ng file sa folder nang walang check-out ay ipinapakita bilang {{ui:Nabago sa folder nang walang check-out}}.

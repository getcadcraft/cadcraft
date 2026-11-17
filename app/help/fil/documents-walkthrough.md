---
title: Mga dokumento at revision (ang vault)
summary: Hakbang-hakbang na gabay sa isang totoong trabaho: ilagay ang project folder sa kontrol, i-check out ang isang drawing, baguhin ito, i-check in na may tala, ipadala para sa review, i-approve at i-release ito, tingnan ang history at kung ano ang gumagamit nito, kung ano ang nakikita ng ikalawang tao habang naka-lock ito, at kung paano ito gumagana kasama ng cloud folder.
keywords: vault, documents, walkthrough, tutorial, check out, check in, revision, release, approve, lock, history, saan ginamit, cloud folder, project folder, document management, pdm, dalawang tao, shared folder
from: 3829528d
---

## Ano ang gagawin mo

Ikaw si Ana, nagtatrabaho sa Riverside Clinic kasama ang kasamahan mong si Ben. Nasa iisang folder ang mga drawing ng proyekto na naaabot ninyong dalawa (isang shared drive, synced folder o cloud folder). Sa dulo, ang isang file ay magmumula sa unang kopya nito hanggang sa release na revision **A**, mababago muli bilang **B.1**, makikita mo kung sino ang gumawa ng ano, at makikita mo kung ano ang nakikita ni Ben kapag hawak mo ang file.

Lahat ay nakalagay sa nakatagong folder na `.ccvault` sa tabi ng mga file mo: walang server, walang ina-upload (ang cloud folder ang eksepsiyon, tingnan ang huling hakbang). Para sa bawat button at panuntunan sa iisang lugar, tingnan ang paksang *Documents: check out, revisions and release* sa app mo, kung saan ito makikita.

## 1. Itakda ang project folder

1. Piliin ang {{ui:Documents…}} sa menu na **More** ng tab na **View**, o i-type ang `DOCUMENTS` (o `DOCS`) at pindutin ang {{key:Enter}}.
2. Piliin ang {{ui:Choose the project folder}} at piliin ang folder na naglalaman ng mga drawing ng proyekto. (Gumagana ang project folder sa Studio at sa mga browser na nakakabukas ng folder, gaya ng Chrome at Edge. Sa ibang browser, sinasabi ito ng panel.)
3. Piliin ang {{ui:Change}} sa tabi ng **You:** at i-type ang pangalan mo, `Ana` (kung magtanong, pati ang pangalan ng computer na ito). Ngayon ay nagsasabi ang panel na *You: Ana on* at ang computer mo. Nasa lahat ng ginagawa mo ang pangalan mo.
4. Piliin ang {{ui:Start a vault in this folder}} at i-type ang pangalan ng proyekto, `Riverside clinic`. Sinasabi ng panel na *Vault started for Riverside clinic.*

## 2. Ilagay ang file sa kontrol

1. Buksan ang **Files not in the vault** at piliin ang {{ui:Add}} sa tabi ng `plans/A-101.dxf`.
2. Lalabas ito sa ilalim ng **Files in the vault** sa revision na **A.1**, state na **Work in progress**. Ang A.1 ang unang kopya nito; nagtatago ang vault ng kopya ng bawat revision.

## 3. Check out, baguhin, check in

1. Piliin ang {{ui:Open}} sa tabi ng `plans/A-101.dxf`. Bubukas ang drawing sa CadCraft at magsasara ang panel para makita mo ito. Isang command pa rin ang layo ng panel: `DOCUMENTS`.
2. Buksan muli ang panel at piliin ang {{ui:Check out}}. Ang row ay magsasabing **Checked out to you**. May ginawang lock file sa `.ccvault/locks`; walang ibang makakapag-check out ng file na ito hanggang ma-check in mo ito.
3. Gumuhit ng kahit ano: magdagdag ng linya, ilipat ang pader. Walang anumang maaaring i-save sa ibabaw ng file ng vault maliban kung naka-check out sa iyo ang drawing; laging gumagana ang Save As para sa sarili mong kopya.
4. Buksan ang panel, piliin ang {{ui:Check in}} at i-type kung ano ang nagbago (`Moved the door`). Sinasabi ng panel na *checked in as A.2*. Ang file sa project folder ay ang drawing na bukas mo na, at nawala na ang lock. Ang pag-check in nang walang pagbabago ay nagpapanatili ng revision.

Kung magbago ang isip mo, ibibigay ng {{ui:Undo check-out}} ang file pabalik nang walang bagong revision.

## 4. Review at release

1. Piliin ang {{ui:Send for review}}. Magiging **For review** ang state at read-only ang file.
2. Bago mag-approve, piliin ang {{ui:Project settings}} at ilista kung sino ang puwedeng mag-approve (isang pangalan bawat linya), halimbawa `Ben` at `Carla`, at lagyan ng tsek ang panuntunang dapat ibang tao sa author ang approver. Piliin ang {{ui:Save settings}}. Ngayon, ang vault mismo ang tumatanggi sa iba.
3. Pipiliin ni Ben (o ni Carla) ang {{ui:Approve}} at ita-type ang pangalan ng approver. Magiging **Released** ang state at magiging **A** ang revision, kasama ang *approved by* at ang pangalan. Read-only na ang released na file. Ibabalik sana ito ng {{ui:Send back}} sa Work in progress, kasama ang dahilan.

Ang pangalan ng approver ay ang pangalang na-type sa panel; ito ay talaan ng kung sino ang pumirma, hindi patunay ng pagkakakilanlan.

## 5. Bagong revision

1. Sa released na file, piliin ang {{ui:New revision}}. Hawak mo ito para sa susunod na letra.
2. Baguhin ito, tapos {{ui:Check in}}. Ang revision ay magiging **B.1**, work in progress. I-release ito sa parehong paraan at magiging **B** ito. Ang {{ui:Undo check-out}} bago ang unang check-in ay mag-iiwan dito sa **A**.

Ang mga letra ng revision ay sumusunod sa A, B … Z, AA, AB. Kung may nilalaktawang letra ang iyong pamantayan, lalaktawan ng project setting na *Use the ASME Y14.35 sequence* ang I, O, Q, S, X at Z para sa mga susunod na revision.

## 6. Tingnan ang nangyari

Piliin ang pangalan ng file para buksan ang mga detalye nito:

- **{{ui:History}}**: bawat pangyayari, pinakabago muna, kasama kung sino, aling computer at kailan: *Checked in A.2* ni Ana, *Released* ni Ben, at iba pa.
- **{{ui:Revisions}}**: ang talaan ng revision. Binubuksan ng {{ui:Open copy}} ang isang revision bilang simpleng kopya na hindi makakapag-overwrite sa file ng vault; inililista ng {{ui:Compare with}} ang idinagdag, inalis at binago kumpara sa naunang revision, o sa iba pa.
- **{{ui:Uses}}**: ang mga drawing na naka-link dito (xrefs).
- **{{ui:Used by}}**: inililista ng Used by ang bawat ibang drawing sa vault na naka-link dito: kapag binago mo ang base plan, alam mo kung aling mga sheet ang titingnan.

## Revision sa sheet

Kapag bukas ang drawing (at may layout ito), piliin ang {{ui:Revision block}}: iguguhit sa kanang itaas ng sheet ang talaan ng mga released na revision. Piliin ang {{ui:Fill title blocks}} para punan ang mga title-block attribute na may tag na `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` o `APPROVED_BY` ng revision, state, petsa at approver ng file. Kapag na-approve mo ang susunod na release, ia-update ang revision block.

## 7. Ano ang nakikita ni Ben habang hawak mo ang file

Ngayon i-check out muli ang file, at hilingin kay Ben na buksan ang parehong project folder sa kanyang computer at buksan ang panel. Sa row ng file, makikita niya ang **Checked out by Ana on** ang computer mo **since** ang oras, at walang {{ui:Check out}} button. Kung susubukan pa rin niya, tinatanggihan ito ng vault: ang lock ay file na hindi gagawin ng sistema nang dalawang beses, kaya hindi maaaring hawakan ng dalawang tao ang file, kahit sa eksaktong parehong segundo, kapag nasa disk ang folder sa Studio. (Sa browser, nagbibigay lang ang folder ng best effort, at sinasabi ito ng panel sa ilalim ng **Folder**.)

Kung wala si Ana at kailangan ni Ben ang file, inilalabas ito ng {{ui:Break check-out}}. Dapat siyang mag-type ng dahilan; mapupunta ito sa log kasama ang pangalan ng may-ari ng check-out. Kapag may nakalistang admin ang project, sila lang ang makakagawa nito. Ang check-out na mas luma sa stale limit (14 na araw bilang default) ay mamarkahang *a long time*. Pagkatapos ng break, tinatanggihan ang late check-in ni Ana, kaya hindi kayo makakapag-overwrite sa isa't isa.

## 8. Cloud folder

Ang cloud folder ay project folder na nasa cloud storage ng team mo, kaya hindi na kailangan ng team ng shared drive. Sa Studio, naka-sign in sa CadCraft account mo, ipinapakita ng panel ang {{ui:Open a cloud folder}} sa tabi ng {{ui:Choose the project folder}}. Piliin ito at piliin ang folder, nakalista bilang workspace / folder. Ang may-ari ng workspace ang gumagawa ng folder muna, at dapat may bisa ang cloud storage ng team. Gumagana nang pareho ang lahat ng nasa itaas; ang server ang gumagawa ng lock, na mahigpit sa pagitan ng mga tao. Kung hindi ka naka-sign in, sasabihan ka ng panel na mag-sign in. Sa ordinaryong browser tab, hindi inaalok ang cloud button; gamitin ang Studio.

## Subukan ito

Gawin ang walong hakbang sa itaas gamit ang kopya ng totoong file. Para sa mga hakbang na dalawang tao, kailangan mo ng ibang tao, o dalawang window na may dalawang pangalan. Kung susubukan mo ito gamit ang totoong shared folder, nakalista sa pahina ng Community testing ang isang check na humihingi nito mismo, at tumatanggap ito ng resulta.

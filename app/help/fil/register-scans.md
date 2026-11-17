---
title: I-register ang ilang scan sa isa
summary: Ilagay ang mga scan na kinuha mula sa iba't ibang posisyon sa iisang frame gamit ang mga piniling pares ng punto o mga tinipang target, pinuhin ang mga ito gamit ang ICP, i-save ang registration bilang project, at i-export ang registered cloud bilang LAS o E57. Ang command ay REGISTERSCANS.
keywords: register, registration, scan, point cloud, icp, iterative closest point, target, pares ng punto, rigid transform, align, merge, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Ano ang gagawin mo

Ang ilang scan ng iisang lugar (bawat isa mula sa sarili nitong posisyon ng scanner) ay nagsisimula sa sarili nilang coordinates. I-register ang mga ito: bigyan ang bawat scan ng isang placement para nasa iisang frame silang lahat, saka i-save iyon bilang project at isulat ang registered cloud bilang isang LAS o E57 file.

## Ilagay ang mga scan

1. Buksan ang dialog (i-type ang `REGISTERSCANS` (o `REGSCAN`)). Ang {{ui:Add scans…}} ay tumatanggap ng LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ na file, o i-drop ang mga ito sa dialog. Ang mga scan na gumagamit ng magkakaibang unit ay tinatanggihan na may tala: i-convert muna ang isa.
2. Piliin ang {{ui:Scan to move}} at {{ui:Place against}}. Ipinapakita ng larawan ang bawat scan sa frame sa kasalukuyan nitong ayos, na may sariling kulay: {{ui:Plan}}, {{ui:Front}} o {{ui:Side}}; i-drag para mag-pan, gamitin ang wheel para mag-zoom.
3. **Sa pamamagitan ng point pairs.** I-click ang {{ui:Pick a pair}}, saka ang isang punto sa scan na ililipat, saka ang parehong lugar sa ibang scan (isang sulok, isang target, ang paanan ng column). Gawin ito nang hindi bababa sa tatlong beses, gamit ang mga punto na hindi nasa iisang linya at magkakalayo ang pagitan. I-click ang {{ui:Place by pairs}}: ilalagay ang scan sa pamamagitan ng least-squares fit, at ipinapakita ng **Left over** kung gaano pa kalayo ang bawat pares. Ang pares na may malaking numero ay maling pagpili: alisin ito gamit ang krus at ilagay muli.
4. **Sa pamamagitan ng targets.** Kung kilala ang tunay na coordinates ng isang punto (mga surveyed target), i-click ang {{ui:Pick, then type target}}, i-click ang punto sa scan nito, at i-type ang X, Y at Z ng target sa row. Malayang nagkakahalo ang mga pares at mga na-type na target.

## Pinuhin gamit ang ICP

Ang mga pares ay nagbibigay ng magaspang na placement. Inililipat ng {{ui:Refine}} ang scan hanggang ang mga surface nito ay nakapatong sa mga surface ng kabilang scan: una **point to point**, saka **point to plane**. Inililista ng table ang bawat hakbang kasama ang error nito at kung ilang punto ang tumugma; ipinapakita ng linyang nasa itaas nito ang pagbaba ng error. Winawakasan ng {{ui:Stop}} ang takbo pagkatapos ng kasalukuyang hakbang at pinapanatili ang naabot nito. Binabawi ng {{ui:Undo}} ang buong takbo (o ang huling placement); ibinabalik ng {{ui:Reset}} ang scan sa coordinates ng file nito.

Para mabilis sa laptop, gumagana ang ICP sa bahagi ng mga punto ({{ui:Points used}}, 5,000 hanggang 60,000) at binabalewala ang mga tugmang mas malayo sa {{ui:Largest match distance}} (bilang default ay 5% ng laki ng scan, na lumiliit habang nagse-settle). Kailangan muna nito ng magaspang na placement: ang mga scan na halos hindi nagka-overlap ay magsasabing hindi sila matutugma. Ang mga surface na patag lang o tuwid lang ay hindi kayang ayusin ang posisyon sa kahabaan ng mga ito; magdagdag ng pares sa ganitong kaso.

## I-save at i-export

- Ang {{ui:Save project}} ay nagsusulat ng maliit na `.ccscans.json` na file: pangalan ng bawat scan, laki nito at fingerprint ng unang 64 KB, kasama ang transform nito. Walang laman itong punto. Hinahanap ng {{ui:Open project…}} ang mga scan file sa pamamagitan ng mga reference na iyon (dapat naidagdag na muna ang mga file) at ibinabalik ang bawat transform.
- Ang {{ui:Export LAS}} at {{ui:Export E57}} ay nagsusulat ng isang file na may bawat scan sa registered na lugar nito. Hindi kailanman binabago ang mga punto sa orihinal; inilalapat ang transform sa paglabas. Kapag naka-on ang {{ui:Read every point from the files}}, binabasa muli ang bawat file para sa bawat punto (hanggang 20 milyon kada scan); kapag naka-off, tanging ang mga punto na nakikita sa viewer ang isinusulat.
- Ang {{ui:Show registered cloud}} (CadCraft) ay nagsusulat ng LAS at ikinakabit ito sa ilalim ng drawing sa sarili nitong coordinates, gaya ng anumang cloud.

:::note
Walang ina-upload. Gumagana ang registration sa sariling unit ng mga file at pinapanatili ang millimeters: ang LAS ay isinusulat na may scale na akma (hanggang 0.1 mm), ang E57 ay may doubles. Naipapasa lang ang coordinate system sa LAS kapag iisa ang EPSG code na tinutukoy ng bawat scan. Sariling writer namin ang E57; sinusuri ito sa pamamagitan ng pagbasa ng mga file nito pabalik gamit ang reader na ito at ang libE57Format.
:::

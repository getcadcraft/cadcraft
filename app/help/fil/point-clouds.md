---
title: I-trace ang as-built na linya sa ibabaw ng point cloud
summary: Ikabit ang laser scan (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) sa ilalim ng drawing, gupitin dito ang plan slice, at gumuhit ng mga pader, pinto at haligi gamit ang object snap sa mga punto nito.
keywords: point cloud, pointcloudattach, pcattach, pointcloud, pc, laser scan, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, survey, slice, hiwa ng plano, node, snap, trace, kasalukuyang kondisyon
from: b0e0aae5
---

## Ano ang gagawin mo

Isang as-built na floor plan: ang mga pader ng na-scan na gusali na iginuhit bilang linya at polyline, eksaktong nasa mga punto ng scan.

## Ikabit ang cloud

1. Itakda muna ang units ng drawing kung wala pa (ang kahon ng {{ui:Mga unit}} sa {{ui:Properties}}, o {{cmd:UNITS}}): kino-convert ng CadCraft ang cloud mula sa sarili nitong units papunta sa units ng drawing.
2. I-type ang {{cmd:POINTCLOUDATTACH}} (o `PCATTACH`) at pindutin ang {{key:Enter}}. Pumili ng file na `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz` (sinasabi ng topic tungkol sa point cloud formats kung ano ang dala ng bawat isa, at kung ano ang i-export mula sa sariling software ng scanner). Maaari mo ring buksan ang file gamit ang {{ui:Buksan}}, i-drop ito sa page, o ipadala mula sa BIM viewer gamit ang {{ui:I-trace sa CadCraft}}.
3. `Ibabang kaliwang sulok ng cloud`: pindutin ang {{key:Enter}} para panatilihin ang sariling coordinates ng file (lumilinya sa drawing ang scan na naka-register sa project), o i-click kung saan dapat ilagay ang ibabang kaliwang sulok nito.
4. Ipinapakita ng command line kung ilang punto ang lumalabas. Nag-zoom ang view sa cloud; nasa ilalim ito ng linework, at nakikita ang bawat punto mula sa itaas.

## Gupitin ang plan slice at mag-trace

1. I-type ang {{cmd:POINTCLOUD}} (o `PC`), saka `S` para sa {{ui:Slice}}. Isang manipis na banda lamang na 1.2 m sa itaas ng pinakamababang punto ng cloud ang lumalabas: nababasa ang mga pader, bukana ng pinto at haligi na parang floor plan.
2. `[Taas (H)]` ang nagtatakda ng taas ng hiwa, `[Kapal (T)]` ang kapal nito (sa drawing units). {{key:Enter}} ang nagtatapos sa command.
3. I-on ang object snap ({{key:F3}}) kasama ang {{ui:Node}} sa mga snap. Gumuhit gamit ang {{cmd:LINE}} o {{cmd:PLINE}}: didikit ang cursor sa mga punto ng slice, may label na "Point cloud". Mas nangingibabaw ang sariling endpoints, midpoints at centers ng drawing kaysa sa cloud, kaya kapag isinara ang polyline, didikit ito sa unang punto nito.
4. Baguhin ang cut height para mag-trace ng ibang level, saka i-off ang slice (`S` ulit) para makita ang buong cloud.

## Mga karagdagang opsyon

Sa {{cmd:POINTCLOUD}}: `[Kulay (C)]` ang nagkukulay ng mga punto ayon sa kulay ng file, taas, intensity, LiDAR class o isang kulay; `[Sukat ng punto (SI)]` ang nagtatakda ng laki ng punto; `[Itago (V)]` ang nagtatago o nagpapakita ng cloud; `Z` ang nag-zoom dito; `[Alisin (D)]` ang nagtatanggal ng ugnayan dito.

Ipinapakita rin ng 3D tab ang cloud, nakalapat ang pinakamababang punto nito sa lupa, kasama ang parehong slice.

:::note
Hindi bahagi ng drawing ang cloud: hindi ito sine-save sa DWG o DXF, at hindi ito nababago ng undo. Ikabit itong muli kapag binuksan mo ang drawing sa susunod. Binabasa ang mga file sa computer na ito; walangina-upload. Ang napakalalaking scan ay pantay na pinanipis hanggang 2 milyong punto. Ang E57 na file ay bumubukas hanggang 6 milyong punto at 512 MB sa ngayon: i-export ang mas malalaking scan bilang LAS o LAZ.
:::

## I-plot ito

{{cmd:PLOT}} ang nagpi-print ng cloud kasama ng drawing, nasa ilalim ng linework: sa model plot ({{ui:Lahat}} ay kasama ang lugar ng cloud) at sa bawat layout viewport, sa PDF, PNG, SVG at sa ipinapadala mo sa printer. Iniimprenta ang nakikita sa screen: ang slice kung naka-on ang slice, ang mga kulay na pinili mo, at nakatago kung itinago mo. Sa papel, nagiging maliliit na parisukat ang mga punto, at ang pinakamataas na punto ang nananaig sa bawat isa; hanggang humigit-kumulang 400,000 ang punto ng plot (ang napakasiksik na cloud ay iniimprenta gamit ang mas malalaking parisukat). Ipinu-plot lamang ang cloud sa drawing kung saan ito ikinabit; hindi ito nagpi-print sa mismong paper space, tanging sa pamamagitan ng viewport.

## Maraming scan

Ang mga scan na kinuha mula sa magkakaibang posisyon ay maaaring i-register sa iisang frame, pinong-pino gamit ang ICP, at i-export bilang iisang LAS o E57: tingnan ang [Mag-register ng maraming scan bilang isa](topic:register-scans).

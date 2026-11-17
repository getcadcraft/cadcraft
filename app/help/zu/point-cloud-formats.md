---
title: Amafomethi wamafu wamaphoyinti: okuxhumayo nokuthumela
summary: Yimaphi amafayela eskani yelaser axhumana ngaphansi komdwebo, yiwaphi angamafomethi womenzi wesikena, nokuthi yini okufanele uyithumele kusofthiwe wesikena ukuze iskani lixhume lapha.
keywords: point cloud, pointcloudattach, pcattach, laser scan, scan, formats, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, can't open, not read, ifu lamaphoyinti, iskani, amafomethi, thumela, ayikwazi ukuvula, ayifundwa
from: 20a5f4ee
---

## Okuxhumayo lapha

Xhuma lezi nge-{{cmd:POINTCLOUDATTACH}}, {{ui:Vula}} noma ngokuziwisa ekhasini (bona isihloko mayelana nokulandela imigqa ye-as-built phezu kwe-point cloud):

| Ifomethi | Isandiso | Okufundwayo |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: amaphoyinti, imibala, ukukhanya, amaklasi we-LiDAR, uhlelo lokuhlanganisa neyunithi zalo. LAZ kuya ku-1 GB. |
| E57 | `.e57` | Yonke iskani efayeleni, ngalinye libekwe ngendlela yalo; imibala, noma ukukhanya uma ifayela lingenayo imibala; amamitha. Izithombe ezisefayeleni ziyashiywa (kuyatshelwa). Kuya ku-6 million amaphoyinti kanye ne-512 MB okwamanje: thumela amaskena amakhulu njenge-LAS noma i-LAZ. |
| PLY | `.ply` | Ngombhalo nangokuhlanganisa (zombili izinhlelo zama-byte): i-x y z yama-vertex, imibala nokukhanya. Ubuso buyashiywa (kuyatshelwa). |
| PCD | `.pcd` | Ngombhalo nangokuhlanganisa: x y z, imibala ehlanganisiwe noma ehlukene, ukukhanya. Ama-PCD acindezelwe awafundwa okwamanje: gcina njengokuhlanganisa noma ngombhalo. |
| PTX | `.ptx` | Iskani eyodwa noma ngaphezulu, ngalinye libekwe ngokuguqulwa kwalo; amaphoyinti isikena esingawalinganisanga ayashiywa. Amamitha. |
| PTS, XYZ | `.pts`, `.xyz` | Ngombhalo: x y z, nokukhanya nemibala uma izikholomu zikhona. |

## Amafayela asofthiwe wesikena kuphela awayifundayo

Amanye amafayela eskani angamafomethi womenzi wesikena, angenazincazelo ezishicilelwe nalutho lokufunda oluvulekile. I-CadCraft ayikwazi ukuwafunda: ukuxhuma enye kukhombisa ukuthi iyini nokuthi yenzeni kumugqa womyalo. Thumela iskani kusofthiwe womenzi njenge-E57 noma i-LAS (noma i-PTX, i-PTS), bese uxhuma ifayela elithunyelwe.

| Ifayela | Isandiso | Thumela kusuka ku |
|---|---|---|
| Iphrojekthi ye-ReCap | `.rcp` | ReCap: vula iphrojekthi bese uyithumela. Iphrojekthi ichaza kuphela amaskena ayo, ngakho ukukopisha i-`.rcp` yodwa akuniki amaphoyinti. |
| Iskani ye-ReCap | `.rcs` | ReCap: vula iphrojekthi lapho iskani ingeyayo bese uyithumela. |
| Iskani ye-FARO | `.fls` | FARO SCENE. |
| Iskani ye-Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Iskani ye-Trimble | `.tzf` | Trimble RealWorks noma Trimble Business Center. |
| Iskani ye-Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Lapho ukuthumela kucela ifomethi, i-LAS noma i-LAZ igcina konke i-CadCraft ayisebenzisayo (imibala, ukukhanya, amaklasi, uhlelo lokuhlanganisa neyunithi zalo) efayeleni elincane kakhulu.
:::

## Kungani lawa mafayela engafundwa

Lawo mafomethi awashicilelwe, futhi indlela kuphela yokuwafunda ilabhulari yesofthiwe yomenzi ngamunye, ngaphansi kwemigomo yayo. I-CadCraft ifunda kuphela amafomethi angawafunda ngekhodi yayo ekhompyutheni yakho, ngakho iskani alidingi ukuthunyelwa noma yikuphi ukuze lixhunywe.

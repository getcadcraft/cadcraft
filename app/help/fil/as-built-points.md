---
title: Suriin ang as-built points
summary: Basahin ang mga punto na sinukat ng survey crew at ihambing ang mga ito sa mga punto at block ng drawing: nasa loob o labas ng tolerance, hindi sinukat, o sobra — minarkahan sa drawing at isinulat bilang CSV report.
keywords: as built, as-built, asbuilt, survey, total station, setting out, stake out, point file, csv, txt, pnezd, penzd, xyz, tolerance, deviation, check, compare, exportpoints, layout points
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) ang kabilang kalahati ng {{cmd:EXPORTPOINTS}}: ie-export mo ang mga punto ng drawing para sa field, itinatakda ng crew ang mga ito at sinusukat ang naitayo, at ihahambing ng ASBUILT ang file nila sa drawing.

1. I-type ang {{cmd:ASBUILT}} at piliin ang parehong punto at block na in-export mo (kinukuha ng Enter ang bawat POINT, gaya ng ginagawa ng EXPORTPOINTS).
2. **Ipares ang as-built points ayon sa** **Number** (iningatan ng crew ang mga numero ng punto mo: ibigay ang unang numerong in-export mo) o **Nearest** (sila ang nagnumero ng sarili nilang shot: bawat design point ay kumukuha ng pinakamalapit).
3. Ibigay ang units at coordinates ng file gaya ng pag-export mo (Drawing, Metres o Feet; World o UCS), at ang **tolerance** sa drawing units.
4. Piliin ang CSV o TXT file ng crew. Binabasa ito ng CadCraft gaya ng pagbasa nito ng CivilCraft: commas, tabs, semicolons o spaces, isang header row na nagpapangalan sa mga column, o PNEZD ayon sa bilang ng column.

Sinasabi ng command line kung ilang punto ang naipares, ilan ang nasa loob ng tolerance, nasa labas, hindi sinukat at sobra, at ang pinakamalaking distansya. **Markahan ba sila sa drawing?** Ang Oo ay naglalagay sa kanila sa layer na **AS-BUILT** bilang isang undo step: isang punto sa bawat shot, ang numero nito at distansya sa tabi, at pulang linya mula sa design point papunta sa bawat shot na nasa labas ng tolerance. Nagda-download ang CSV report na may bawat punto: design at as-built coordinates, ang pagkakaiba sa east, north at sa height, at ang resulta.

Tingnan din ang [Points for BIM programs](topic:points-for-bim).

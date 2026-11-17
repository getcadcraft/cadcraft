---
title: Pagsamahin ang mga edit ng dalawang tao sa iisang drawing
summary: Hayaang pagsamahin ng git, Fossil o Mercurial ang dalawang kopya ng DWG o DXF nang object por object, gamit ang key na iniingatan ng CadCraft sa bawat object.
keywords: merge, git, fossil, mercurial, version control, diff, conflict, three-way, cadcraft merge, key, gitattributes, DWG, DXF
from: 71482bf9
---

Dalawang tao ang nag-e-edit ng iisang drawing. Kung magkaibang object ang binago nila, maaaring awtomatiko ang pagsasama: walang kailangang gawin nang manwal.

## Ano ang nagpapagana nito

Binibigyan ng CadCraft ang bawat object na iginuhit mo ng isang maikling **key** na hindi nagbabago at hindi kailanman ibinibigay sa dalawang object. Naka-save ito kasama ng object sa DWG o DXF (bilang dagdag na data na pinananatili ng ibang program). Hinahanap ng merge ang mga object sa pamamagitan ng key na ito, hindi sa posisyon nila sa file, dahil nire-renumber ng bawat program ang mga posisyon kapag nagse-save. I-off ito sa {{ui:Settings}} › CadCraft › Mga file na madaling i-merge kung hindi ka kailanman nagsa-sama; mga 10 porsiyento na mas maliit ang mga file.

Nagsa-sama pa rin ang drawing na na-save bago pa umiral ang mga key: bibigyan ang mga object nito ng key mula sa lugar nila sa file, at pareho ito para sa lahat ng magbubukas nito.

## I-set up

Kailangan ng Git ng dalawang linya minsan lang sa bawat repository:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# minsan lang, sa bawat computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Kung walang git, patakbuhin ito nang manwal: `cadcraft merge <base> <ours> <theirs> -o <result>`. Ang Fossil at Mercurial ay tumatanggap ng parehong tatlong file sa sarili nilang setting ng merge tool.

## Ang mga patakaran

- Ang object na binago sa isang panig lang ay kinukuha. Ang parehong pagbabago sa magkabilang panig ay kinukuha nang isang beses.
- Ang parehong property na binago sa dalawang paraan ay isang **conflict**: mananatili ang panig mo at ililista ng ulat ang dalawang halaga. Buksan ang resulta, tingnan ang object na iyon, at ayusin ito nang manwal.
- Pinananatili ang object na idinagdag sa alinmang panig. Ang object na inalis sa isang panig at hindi ginalaw sa kabila ay aalisin. Inalis sa isang panig at binago sa kabila: aalisin at iuulat.
- Ang mga layer, block, text at dimension style, sheet at named view ay nagsasama sa parehong paraan. Sumusunod ang constraint sa mga object na binabanggit nito.
- Isinusulat ang resulta sa parehong file format at bersyon ng sa iyo.

Hindi kasama sa pagsasama: ang pagkakasunod ng pagguhit ng mga object ay sa iyo, pagkatapos ang mga object na idinagdag ng kabila. Ang mga pagbabago sa parehong block definition sa magkabilang panig ay isang conflict, hindi kailanman pinaghahalo. Walang ina-upload; lahat ay tumatakbo sa iyong computer.

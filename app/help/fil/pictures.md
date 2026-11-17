---
title: Mga picture sa drawing
summary: Maglagay ng PNG o JPEG na picture, i-clip ito sa rectangle o polygon, ipakita ang mga picture na ginagamit ng DWG, at i-plot ang mga ito nang malinaw.
keywords: pastearea, parea, kopyahin ang area, kopyang area, markupcraft, true size, real size, overlay, ole, ole2frame, embedded object, i-paste ang picture, screenshot, ctrl+v, clipboard image, screenshot, picture, image, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, larawan, raster, imagedef, xref, plot, pdf, resolution
from: 4025ac97
---

## Ano ang gagawin mo

Isang logo ng kumpanya na nakalagay sa title block, naka-clip sa bahaging gusto mo, at isang PDF kung saan ito naka-print sa sarili nitong resolution.

## Maglagay ng picture

1. I-type ang {{cmd:IMAGEATTACH}} (o `IAT`) at pindutin ang {{key:Enter}}. Pumili ng file na PNG o JPEG.
2. `Specify the lower-left corner`: i-click, o mag-type ng punto.
3. `Specify its width`: ang lapad sa drawing units. Pinananatili ng {{key:Enter}} ang iminungkahing lapad: isang unit bawat pixel, o ang lapad na ibinigay mo sa file na ito noong huli (sinasabi ng prompt kung alin).
4. `Specify its rotation angle`: pindutin ang {{key:Enter}} para sa walang rotation.

Iisang object ang picture: piliin ito sa pamamagitan ng frame nito, at i-move, kopyahin, i-rotate, i-scale o burahin ito gaya ng anumang block.

:::note
Nananatili ang file ng picture sa drawing habang bukas ito. Pinangangalanan ng na-save na DWG ang file, gaya ng ginagawa ng ibang programa; hindi nito hawak ang mga pixel. Itabi ang picture sa tabi ng drawing.
:::

## I-paste ang screenshot o kinopyang picture

1. Kopyahin ang picture (screenshot gamit ang {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=ang screenshot tool sa iyong computer}},
   o Copy image sa ibang programa o browser).
2. Ituro kung saan ito dapat mapunta sa drawing at pindutin ang {{key:Mod+V}}.

Ang kaliwang-ibabang sulok ng picture ay tatama sa pointer (o sa gitna ng view), 40 % ang lapad kumpara sa nakikita mo; i-move, i-scale at i-clip ito gaya ng anumang picture. Ang pangalan nito ay kapareho ng drawing na may `-picture-1.png` (pagkatapos `-2`, …), at sinasabi ito ng history.
Ginagawa rin ng {{ui:Edit}} › {{ui:Higit pa}} › {{ui:I-paste ang larawan}} ang parehong mula sa menu (maaaring magtanong muna ang browser).

Ang DWG ay pinapanatili lamang ang pangalan ng file ng picture, kaya ang pag-save ng drawing ay nagse-save din ng picture bilang sarili nitong file. Ilagay ang dalawa sa parehong folder: doon ipinapakita ng drawing ang picture. Sa browser, ikalawang download iyon, at sinasabi ito ng history.
Kapag mga object lamang ng CadCraft ang nasa clipboard, ipe-paste ng {{key:Mod+V}} ang mga iyon, gaya ng dati.

## I-paste ang area na kinopya sa MarkupCraft

Kinokopya ng {{ui:Kopyahin ang area}} sa MarkupCraft ang bahagi ng sheet bilang picture na alam kung gaano ito kalaki. Ipinapaste ito ng CadCraft sa laking iyon.

1. Sa MarkupCraft, kopyahin ang area (rectangle, bilog o freeform na hugis; {{ui:Kopyahin bilang overlay}} kung gusto mong makita ang iyong drawing sa pamamagitan nito).
2. Sa CadCraft, pindutin ang {{key:Mod+V}}, o i-type ang {{cmd:PASTEAREA}} (o `PAREA`), o piliin ang {{ui:Edit}} › {{ui:Higit pa}} › {{ui:I-paste ang kopyang area}}.
3. `Specify the lower-left corner of the copied area`: i-click, o mag-type ng punto. Susunod sa pointer ang frame na kasing-laki ng area.

Gaano kalaki ang kalalagyan nito:

- **May scale ng drawing ang sheet:** sa totoong laki nito, sa mga unit ng drawing (ang 1:50 na detalye ng 2 m na hagdan ay 2 m ang haba sa drawing na nasa metro, 78.74 sa drawing na nasa pulgada). Walang karagdagang itatanong.
- **Walang scale ang sheet:** sinasabi ng CadCraft ang laki nito sa papel at humihingi ng scale: i-type ang `100` para sa sheet na 1:100, pindutin ang {{key:Enter}} para sa laki ng papel, o i-type ang `P`, i-click ang dalawang punto sa na-paste na picture at i-type kung gaano sila talaga kalayo (gaya ng ginagawa ng {{cmd:SCANSCALE}}). Nananatili sa lugar na pinaglagyan mo ang kaliwang-ibabang sulok.

Ang drawing na walang unit ay kumukuha ng milimetro, gaya ng ginagawa ng PDF underlay. Pinapanatili ng overlay na nakikita sa pamamagitan ang papel nito at nagsisimula sa kasing-kupas ng pagkakakopya nito; nakikita rin sa pamamagitan ang labas ng bilog o freeform na hugis. Ang na-paste na area ay picture gaya ng iba: i-move, i-rotate, i-scale, i-clip o burahin ito, at isang undo step lamang ang buong paste. Kapag na-save bilang DWG, ito ay IMAGE na may fade at transparency nito.

Ipinapaste ng {{key:Mod+V}} ang area kapag ang picture sa clipboard ay sa area, o kapag kinopya ang area pagkatapos ng anumang kinopya mo sa CadCraft (at sa huling 6 na oras). Kung hindi, ipinapaste ito gaya ng dati. Ipinapaste ng {{cmd:PASTEAREA}} ang huling kinopyang area anumang oras.

## Ipakita ang mga picture na ginagamit ng DWG

Iniimbak lamang ng DWG kung nasaan ang mga picture nito, kaya ipinapakita ng CadCraft ang bawat isa bilang frame na may pangalan ng file nito.

1. I-type ang {{cmd:IMAGE}} (o `IM`). Inililista ng command line ang bawat file ng picture at kung nakikita ito.
2. Pumili ng mga file (ilan nang sabay). Binibilang din ang file na ang pangalan ay naglalaman ng pangalang tinutukoy ng drawing, dahil kadalasang nagdadagdag ang mga export ng project prefix.

## I-clip ang picture

1. I-type ang {{cmd:IMAGECLIP}} (o `ICL`) at piliin ang picture.
2. Piliin ang `R` at i-click ang dalawang sulok, o `P` at i-click ang mga punto ng polygon, pagkatapos {{key:Enter}}. Tinatanggal ng `D` ang clip.

## Mag-plot ng picture

Napupunta ang mga picture sa PDF bilang picture, sa sarili nilang resolution at nasa ilalim ng mga linya. Sa dialog na {{ui:I-plot}}, maaaring limitahan ng {{ui:Mga picture}} ang mga ito sa 600, 300 o 150 dpi para liitan ang file. Ipinapasok ang JPEG gaya ng pagkakaroon nito.

## Ano ang sine-save at saan

| Format | Mga picture |
|---|---|
| DWG (bawat bersyon) | Bilang picture (IMAGE), kasama ang clip nito |
| DXF | Bilang frame na may pangalan ng file; sinasabi ito ng save |

## Mga object mula sa ibang programa (OLE)

Maaaring maglaman ang drawing ng mga object na ginawa ng ibang programa, gaya ng picture mula sa paint program o hanay ng spreadsheet (mga OLE object). Hindi ito pinapatakbo o ine-edit ng CadCraft, at hindi ito makapagpasok ng bago. Ito ang ginagawa nito:

- **Sa DXF**, bumubukas ang OLE object bilang frame. Kung nag-save ang object ng picture ng sarili nito at bitmap ang picture na iyon, iginuguhit ang picture sa loob ng frame; kung hindi, may label ang frame na may uri ng object, gaya ng "Microsoft Excel Worksheet (OLE)". Maaari mong i-move, kopyahin at burahin ang frame gaya ng block. Isinusulat ng {{cmd:SAVEAS}} patungong DXF 2000 ang object bilang OLE object muli, na hindi nagbago ang data nito.
- **Sa DWG**, pinananatili ang mga object at isinusulat pabalik kapag nag-save ka bilang DWG, byte por byte, pero **hindi ipinapakita**: pinapanatili ng DWG ang lugar ng object sa loob ng sarili nitong data, at hindi pa ito binabasa ng CadCraft. Sinasabi ng history kung ilan ang napanatili. I-type ang {{cmd:OLELIST}} para makita kung ano ang mga ito (uri, laki, kung nag-save ang bawat isa ng picture) at para maglagay ng kopya ng picture kung saan mo gusto: hinihingi ng **Place** ang numero, ang kaliwang-ibabang sulok at ang lapad, at gumuguhit ng frame na may picture sa loob. Ang kopyang iyon ay frame na maaari mong i-move o burahin; nananatili sa drawing ang mismong object at isinusulat pa rin pabalik kapag nag-save ka.
- Ang object na galing sa DXF ay sine-save sa DWG bilang frame at label lamang; sinasabi ito ng history. I-save bilang DXF 2000 para mapanatili ang mismong object.
- Hindi iginuguhit ang mga picture na metafile (ang isinusulat ng maraming programa): ang frame at label ang ipinapakita sa halip.

## Mga karaniwang pagkakamali

| Nakikita mo | Bakit | Ayusin |
|---|---|---|
| Frame na may pangalan ng file | Wala sa CadCraft ang file | {{cmd:IMAGE}}, pagkatapos piliin ang file |
| "Hindi ito picture." | Hindi picture ang napiling object | Piliin ang frame ng picture |

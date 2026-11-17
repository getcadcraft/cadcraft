---
title: Magbukas ng DWG, i-edit ito at i-save ang kopya
summary: Buksan ang drawing na ipinadala sa iyo, suriin kung ano ang pumasok, gumawa ng pagbabago, at magpadala ng kopya bilang DWG o DXF.
keywords: dwg, dxf, buksan, import, export, save, r12, round trip, consultant, xref, suriin ang drawing, saveas, i-save bilang, dwg save, format
from: 49de4bf6
---

## Ang gagawin mo

Magbukas ng DWG mula sa consultant, suriin kung ano ang nakita at hindi nakita ng CadCraft, magdagdag ng note, mag-plot ng sheet sa PDF, at mag-save ng kopyang ibabalik, bilang DWG o DXF.

## Buksan ang file

1. Pindutin ang {{key:Mod+O}}, o i-click ang {{ui:Buksan}}.
2. Piliin ang `.dwg` na file.

Ipinapakita ng status line ang "Binabasa …" habang binabasa ang drawing. Kapag tapos na, pupunuin ng drawing ang screen, at sasabihin ng history, halimbawa, "Nabuksan ang plan.dwg: 18,240 object sa 64 na layer", kasama ang tagal nito.

:::offline
Offline ka. Kung ang button na {{ui:I-save para sa offline}} ay may label na "Handa offline", normal na nabubuksan ang mga DWG file. Kung hindi, at wala pang DWG na nabuksan sa tab na ito, maaaring pumalpak ang pagbubukas ng DWG dahil kinukuha ang DWG reader ng CadCraft kasama ng unang DWG: magbukas ng DXF sa halip, o i-save ang CadCraft para sa offline na paggamit sa susunod na online ka. Tingnan ang [Pagtatrabaho offline](common:offline).
:::

## Suriin kung ano ang pumasok

1. Tingnan ang seksyong {{ui:Drawing}} ng kaliwang panel: format at bersyon, mga unit, bilang ng object at layer, at mga sheet.
2. Basahin ang kahon na "Tungkol sa file na ito" sa ilalim nito, kung mayroon.

Nakalista sa kahon:

- **Hindi pa naipapakita:** mga object na hindi pa kayang iguhit ng CadCraft, ayon sa uri at bilang. Hindi ito isinasama, at hindi ito hinuhulaan.
- **Dumating ang mga layout (sheet):** buksan ang mga ito gamit ang mga tab sa ilalim ng drawing.
- **Mga dimension na nabasa lang gaya ng pagkakaguhit.**

3. I-click ang mga tab sa ilalim ng drawing para makita ang bawat sheet.
4. Suriin ang {{ui:Mga unit}} sa {{ui:Kasalukuyang setting}} (walang napiling object, tab na {{ui:Model}}). Kung nakasaad na {{ui:Walang unit}} pero alam mong nasa milimetro ang drawing, itakda ito para tama ang basa ng sheet at plot scale.

:::tip
Kung may inaasahan kang bahagi ng drawing at hindi mo ito makita, tingnan ang panel na {{ui:Layers}}: maaaring naka-off o naka-freeze ang layer sa file. I-click ang pangalan nito para gawin itong kasalukuyan; pinapa-on nito ito.
:::

## Gawin ang pagbabago

1. Gumawa ng layer para sa iyong mga note: i-click ang {{ui:New layer}}, i-type ang `NOTES` at pindutin ang {{key:Enter}}.
2. I-type ang `DT` at pindutin ang {{key:Enter}}.
3. I-click kung saan ilalagay ang note.
4. I-type ang taas ng teksto na angkop sa drawing (tingnan ang [Magdagdag ng teksto at label](topic:text)) at pindutin ang {{key:Enter}}.
5. Pindutin ang {{key:Enter}} para panatilihing 0 ang pag-ikot.
6. I-type ang iyong note at pindutin ang {{key:Enter}}.
7. Pindutin muli ang {{key:Enter}} para tapusin.

Ayos lang ang pag-edit sa mga na-import na dimension: sa sandaling baguhin mo ang isa, ire-redraw ito ng CadCraft sa sarili nitong istilo.

## I-plot ang sheet para sa pagrepaso

1. I-click ang tab ng sheet.
2. Pindutin ang {{key:Mod+P}}.
3. I-click ang {{ui:I-download ang PDF}}.

Tingnan ang [I-plot sa PDF](topic:plot-pdf).

## I-save ang kopya

1. Pindutin ang {{key:Mod+S}}, o i-click ang {{ui:I-save}}.

Nagbukas ka ng DWG, kaya dina-download ng browser ang `<name>.dwg`, sa bersyon kung saan dumating ang DWG. Sasabihin ng history, halimbawa, "Na-save ang kopya bilang Plan.dwg (DWG (AutoCAD 2018))." at ililista, sa mga linya sa ilalim nito, ang anumang nagbago sa proseso.

2. Basahin ang mga linyang iyon bago mo ipadala ang file. Ipinaliliwanag ng [Ano ang iniingatan at binabago ng isang DWG](topic:files#what-a-dwg-keeps-and-changes) ang bawat isa.

Hindi kailanman nababago ang orihinal mong DWG. Bawat save ay bagong download.

## I-save bilang DWG o DXF

Para ikaw mismo ang pumili ng format:

1. Pindutin ang {{key:Mod+Shift+S}}, o i-click ang {{ui:I-save bilang}}.

Bubukas ang dialog na {{ui:I-save ang kopya bilang}} na may apat na pagpipilian, bawat isa ay may pangalan ng file na ibibigay nito: {{ui:DWG}}, kasama ang listahan nitong {{ui:Bersyon}}, {{ui:DXF R12}}, {{ui:DXF 2000}} at {{ui:DXF 2000 (binary)}}. Napili na ang kasalukuyang format at bersyon ng drawing.

2. I-click ang format na gusto mo. Para sa DWG, piliin ang bersyong ginagamit ng kabilang opisina, o mas lumang bersyon: AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000.
3. I-click ang {{ui:I-save}}.

Dina-download ang kopya. Mula ngayon, ise-save ng {{key:Mod+S}} ang drawing na ito sa format na iyon, at magsisimula rin dito ang mga bagong drawing sa browser na ito. Walang sine-save ang {{ui:Kanselahin}} o {{key:Esc}}, at sasabihin ng history na "Hindi na-save."

Alin ang piliin:

- **DWG** ang pinakamaraming naiingatan: mga sheet kasama ang kanilang viewport, totoong dimension, hatch pattern, pangalan ng layer at block gaya ng pagkakatype mo, at multi-line na teksto bilang multi-line na teksto. Ang bersyong AutoCAD 2000 ang nabubuksan sa pinakamaraming program; ang 2004 pataas ay nag-iingat din ng true color.
- **DXF 2000** ay text file na halos kapareho ng iniingatan ng DWG: bawat sheet bilang layout kasama ang viewport nito, totoong dimension, hatch pattern, true colour, lineweight, linetype, at mga pangalan gaya ng pagkakatype mo. Nabubuksan ito sa AutoCAD 2000 pataas at sa karamihan ng CAD program. Nagiging linya, arrowhead at teksto ang mga multileader na iginuguhit nila. Ang DXF na binuksan sa bersyon 2000 pataas ay na-save bilang DXF 2000.
- **DXF 2000 (binary)** ay may parehong nilalaman ng DXF 2000 sa binary na anyo ng format: mas maliit na file na eksaktong iniingatan ang bawat numero. Ang binary DXF mula sa ibang program ay nagbubukas gaya ng text, at ang drawing na binuksan mula sa binary DXF ay na-save pabalik bilang binary.
- **DXF R12** ay nabubuksan sa halos anumang CAD program. Iniingatan nito ang unang sheet kasama ang viewport nito, at ang iba pang sheet ng CadCraft. Pinapasimple nito ang mga mas bagong bagay, gaya ng multi-line na teksto at hatch.

## Ano ang makikita ng kabilang opisina

Sa DWG:

- Mga linya, arko, bilog, ellipse, polyline, teksto, multi-line na teksto, block kasama ang kanilang attribute, solid fill, hatch pattern at layer gaya ng nakikita mo.
- Totoong dimension: sinusukat ulit sila ng kabilang program kapag na-stretch.
- Bawat sheet, kasama ang papel at viewport nito.
- Multileader bilang multileader. Sa bersyong AutoCAD 2000, nagiging pinakamalapit na karaniwang kulay ang true color.

Sa DXF R12:

- Mga linya, arko, bilog, polyline, teksto, block reference at dimension gaya ng nakikita mo. Nananatiling totoong dimension ang mga dimension.
- Mga pangalan ng layer sa malalaking titik, at ang mga espasyo ay ginawang `_`.
- Ang unang sheet bilang paper space ng drawing, kasama ang viewport nito. Ang iba pang sheet ay dumarating bilang block na pinangalanang `CCLAYOUT_1` at iba pa; kung kailangan nila ang bawat sheet bilang layout, mag-plot din ng mga PDF ng bawat sheet para sa kanila.
- Multi-line na teksto bilang hiwalay na linya, ellipse bilang polyline, hatch bilang outline.

Sa alinmang paraan, ang anumang nakalista bilang "Hindi pa naipapakita" noong binuksan mo ang DWG ay **hindi** kasama sa kopya, maliban kung sinasabi ng history na naitago ito: ang OLE object ng DWG at ang 3D solid nito sa model space ay isinusulat pabalik kapag nag-save ka bilang DWG. Sabihin ito sa kanila, at magpadala rin ng PDF.

## Mga karaniwang pagkakamali

- **"Nagbubukas ang CadCraft ng mga DWG at DXF drawing."** Iba ang extension ng file. Tiyaking `.dwg` o `.dxf` ito.
- **"Hindi mabasa ang drawing na ito."** Sira ang DWG o nasa bersyong hindi kayang basahin ng reader. Humingi ng DXF, o ng DWG na na-save sa mas lumang bersyon.
- **"Nagtatapos ang binary DXF na ito sa gitna ng isang object."** Putol o sira ang file. I-type ang RECOVER para buksan ang mga nababasa, o humingi muli ng file.
- **Ang na-save na file ay pinangalanang `name (1).dwg` o `name (1).dxf`.** Ginagawa iyon ng browser kapag may file na may parehong pangalan na sa folder.
- **May mas lumang program sila na hindi mabuksan ang DWG.** I-save bilang DWG na may {{ui:Bersyon}} {{ui:AutoCAD 2000}}, o bilang {{ui:DXF R12}}: halos anumang CAD program ang nagbubukas nito.
- **May nawawalang bahagi ng drawing.** Hindi nilo-load ang mga naka-link na drawing (xref) hangga't hindi mo napipili ang mga file nila ({{cmd:XREF}}, `R`), at lumalabas ang mga larawan bilang frame na may pangalan ng file nila.

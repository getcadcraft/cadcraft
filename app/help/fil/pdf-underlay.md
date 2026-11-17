---
title: PDF underlay at pag-import ng PDF
summary: Ilagay ang PDF page sa ilalim ng drawing para i-trace at i-plot ito, o gawing drawing object ang mga linya at teksto ng page.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, underlay, i-trace, i-import ang pdf, scan, floor plan, kupas, clip, mga layer, snap, buksan ang pdf
from: aa301d0f
---

## Dalawang paraan ng pagpasok ng PDF page

- **I-attach** ({{cmd:PDFATTACH}}) pinananatili ang PDF bilang picture sa ilalim ng drawing. Ini-trace mo ito, nagsa-snap ka sa mga linya nito, ginagawang kupas o ina-clip, at ili-print ito kasama ng sheet. Ang drawing ay nagtatago lang ng pangalan ng file.
- **I-import** ({{cmd:PDFIMPORT}}) ginagawang ordinaryong drawing object ang mga linya, kurba, fill, at teksto ng page, sa mga layer na pinangalanan ayon sa PDF. Maaari mo na itong i-edit, at hindi na kailangan ang PDF pagkatapos.

Kapag binuksan ang PDF gamit ang {{ui:Buksan}}, tatanungin ka kung alin sa dalawa ang gusto mo.

## I-attach ang page

1. I-type ang `PDFATTACH` (o `PDFATT`) at piliin ang PDF. Kung maraming page ito, i-type ang numero ng page.
2. I-click ang insertion point (ang kaliwang ibabang sulok ng page).
3. Pindutin ang {{key:Enter}} para sa totoong laki ng page, o i-type ang scale: drawing units kada PDF point (ang point ay 1/72 pulgada, kaya 0.3528 sa drawing na nasa milimetro).
4. Pindutin ang {{key:Enter}} para walang ikot, o i-type ang anggulo.

Ang page ay isang object na katulad ng block reference: ilipat, i-rotate, i-scale, kopyahin, burahin, at ilagay sa layer. I-off ang layer nito at mawawala ito. Kapag nag-zoom in, muling iguguhit nang malinaw ang page.

## I-trace ito

Kapag naka-on ang {{ui:Snap}}, nagsa-snap ang cursor sa sariling linya ng PDF: end point, midpoint, at intersection (at ang {{ui:Pinakamalapit}} kapag naka-on ang snap na iyon). Ang teksto na iginuhit bilang letra sa page ay hindi sinasnap.

## Ayusin ito

- `PDFADJUST`: **Kupas** (0 hanggang 80 porsiyento), **Contrast** (0 hanggang 100), **Monochrome**, at **Onoff** para itago ito nang hindi binubura.
- `PDFCLIP`: ipakita lang ang isang rectangle o polygon ng page; ang **Delete** ay nag-aalis ng clip.
- `PDFLAYERS`: maaaring may sariling layer ang PDF. Inililista ito ng command; i-type ang numero para i-on o i-off ang layer na iyon sa underlay na ito. Ang mga layer na naka-off sa file ay magsisimulang naka-off.

## I-plot at i-save

Ini-print ng PLOT ang page bilang mga linya, fill, at teksto nito (kaya nananatiling malinaw at nahahanap ang teksto). Ang mga picture sa loob ng PDF ay ipinapakita sa screen pero hindi pa naiimprenta.

Ang DWG o DXF 2000 ay itinatago ang underlay bilang link: ang pangalan ng file, ang page, kung saan ito nakalagay, scale, ikot, clip, fade, at contrast. Wala sa drawing ang mismong PDF. Buksan muli ang drawing, i-type ang `PDF` at piliin muli ang file; hanggang doon ay ipinapakita ang mga page bilang frame, at makukuha nila ang totoong laki kapag ginawa mo iyon. Ang mas lumang DXF (R12) ay walang underlay: itinatago lang nito ang frame at pangalan. Hindi pa nasusuri kung paano binabasa ng ibang program ang na-save na clip at scale.

## I-import ang page

1. I-type ang `PDFIMPORT` (o `PDFIM`) at piliin ang PDF at page.
2. I-click kung saan dapat pumunta ang kaliwang ibabang sulok ng page.
3. Pindutin ang {{key:Enter}} para sa totoong laki, i-type ang scale, o piliin ang **Dalawang punto**: iginuguhit ang page sa totoong laki, pagkatapos ay i-click ang dalawang punto na may distansyang alam mo at i-type ang totoong distansya; ang lahat ay ii-scale para tumugma.

Ang mga linya ay nagiging line at polyline, nakikilala ang mga bilog at arko, ang mga punong hugis ay nagiging solid hatch, at ang teksto ay nagiging teksto sa layer na nagtatapos sa `-TEXT`. Isang undo step ito. Hindi ini-import ang mga picture sa PDF: i-attach na lang ang page. Ang scan (page na picture lang) ay walang linyang maii-import.

Binabasa ang mga PDF bilang hindi pinagkakatiwalaang file: walang script na tumatakbo, at ang sobrang laking page ay pinuputol, at sinasabi iyon.

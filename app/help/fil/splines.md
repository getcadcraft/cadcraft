---
title: Spline at polyline: SPLINE, SPLINEDIT, PEDIT
summary: Gumuhit ng makinis na kurba sa mga punto o mula sa control polygon, i-edit ang fit at control point nito, at i-edit ang mga polyline (join, close, width, fit, spline, decurve) o gawing polyline ang isang spline.
keywords: spline, splinedit, spl, spe, pedit, pe, fit points, control points, weights, nurbs, pag-edit ng polyline, join, kurbang fit, decurve, gawing polyline, precision, tangent, kurba, fit tolerance
from: d31f72d8
---

## Ano ang gagawin mo

Isang kurba sa limang punto, pagkatapos ang parehong kurba na in-edit sa tatlong paraan, at isang polyline na binuo mula sa tatlong linya.

## Gumuhit ng spline sa mga punto

1. I-type ang `SPL` at pindutin ang {{key:Enter}}.
2. I-click o i-type ang mga punto na dapat dumaanan ng kurba: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Pindutin ang {{key:Enter}} pagkatapos ng huli.
3. Start tangent: i-click ang punto na dapat tunguhin ng kurba, o pindutin ang {{key:Enter}} para hayaan itong magpasya. Gawin din ito para sa end tangent.

Dumadaan ang kurba sa bawat punto. I-type ang `C` sa halip na {{key:Enter}} para isara ito (babalik ang kurba sa unang punto). Binabawi ng {{key:U}} (`Undo`) ang huling punto habang gumuguhit.

### Gumuhit mula sa control polygon

I-type ang `M` sa unang prompt, pagkatapos ang `C` (Control vertices) at degree mula 1 hanggang 5 (3 ang karaniwan). Ngayon ang mga punto na pipiliin mo ay ang mga sulok ng polygon na humihila sa kurba papunta sa mga ito; nagsisimula ang kurba sa una at nagtatapos sa huli. Ang sarado ay bumabalot, na walang sulok sa pagdugtong.

### Gawing spline ang polyline

Sa unang prompt, i-type ang `O` (Object) at piliin ang mga polyline o linya. Nagiging spline ang mga ito sa pamamagitan ng kanilang vertex; mawawala ang mga orihinal.

## I-edit ang spline

Piliin ito at i-type ang `SPE` (o i-type ang `SPE` at i-click ito). Ipinapakita ng grips ang fit point (o ang control point ng spline na walang fit point): i-drag ang isa para baguhin ang hugis ng kurba. Sa prompt:

- **Fit data** (spline na iginuhit sa mga punto): `A` nagdaragdag ng fit point (i-click kung saan), `D` nagbubura ng isa (i-click malapit dito), `M` naglilipat ng isa (i-click malapit dito, pagkatapos i-click ang bagong lugar), `T` nagtatakda ng end tangent, `P` nagtatanggal ng fit point, kaya ie-edit na ang spline sa pamamagitan ng control point mula noon.
- **Edit vertex**: `A` nagdaragdag ng control point nang hindi binabago ang kurba, `M` naglilipat ng isa, `W` nagbibigay ng **weight** sa isa (higit sa 1 ang humihila sa kurba palapit dito, mababa sa 1 ang nagpapaluwag nito).
- **Buksan** o **Isara**, at **Baligtarin** (tatakbo ang kurba sa kabilang direksyon).
- **gawing Polyline** (`P`): nagiging polyline ang spline; ang precision ay ang bilang ng segment na nakukuha ng bawat span (10 ang karaniwan).
- **[I-undo (U)]** ibinabalik ang huling pagbabago; **[Exit (X)]** nagtatapos.

{{ui:Properties}} ang nagpapakita ng degree ng spline, kung ilan ang fit at control point nito, ang haba nito, at pinapayagan kang buksan o isara ito.

## I-edit ang polyline

Piliin ang polyline at i-type ang `PE`. Ang linya, arko o spline na pipiliin mo ay unang iaalok bilang polyline na gagawin (ang spline ay humihingi ng precision).

- **Isara** / **Buksan** ay nagdudugtong o naghihiwalay ng mga dulo.
- **Join** nagdaragdag ng mga linya, arko at polyline na ang mga dulo ay nagtatagpo sa dulo ng polyline. `Fuzz distance` ang layo na maaaring pagitan ng mga dulo at magdugtong pa rin (0 ibig sabihin dapat talagang magtagpo ang mga ito).
- **Width** nagbibigay sa buong polyline ng iisang lapad (0 ang nag-aalis nito).
- **Fit** pinapalitan ang polyline ng makinis na kurba na dumadaan sa mga vertex nito; **Spline** ng cubic B-spline na sumusunod sa mga ito (nagsisimula at nagtatapos sa una at huling vertex at nananatiling malapit sa iba). Parehong nagiging polyline ng maikling segment, at nananatili ang mga orihinal na sulok, kaya ibinabalik ang mga ito ng **Decurve**.
- **Ltype gen** ay nagsasabi kung ang dashed linetype ay tumatakbo sa buong polyline o nagsisimula muli sa bawat vertex.
- **Baligtarin** binabago ang pagkakasunod-sunod ng mga vertex nito. **Multiple** (`M` sa unang prompt) ine-edit ang ilang polyline gamit ang parehong opsyon.

Nananatili ang dating ayos ng pag-edit ng vertex ng polyline sa {{ui:Properties}} o gamit ang grips: walang vertex editor ang PEDIT.

## Sa mga file

Pinapanatili ng DWG at DXF 2000 ang spline bilang spline: degree, control point, knot, weight, fit point at tangent. Ang spline na binuksan mo at hindi binago ay isinusulat pabalik nang eksakto gaya ng dating anyo. Walang spline ang DXF R12: nise-save ito bilang polyline na sumusunod sa kurba, at sinasabi ng history kung ilan ang mga iyon.

Hindi gumagana sa spline ang offset, trim, extend, fillet, break at join. {{cmd:EXPLODE}} ang spline, o {{cmd:PEDIT}} ito, para makakuha ng polyline na tinatanggap ng mga command na iyon.

## Mga karaniwang pagkakamali

- **Lumalampas ang kurba sa pagitan ng magkakalapit na punto.** Yumuyuko ang kurba kung saan yumuyuko ang mga punto. Gumamit ng mas kaunting punto, o control polygon.
- **"Hindi ito spline."** Tumatanggap lamang ang SPLINEDIT ng spline; ang {{cmd:PEDIT}} ang nag-e-edit ng polyline.
- **Maaaring iba ang hugis ng saradong fit spline sa ibang program.** Isinasara ito ng CadCraft gamit ang isang makinis na pagdugtong sa unang punto; maaaring isara ito ng ibang program gamit ang periodic curve. Pareho sa dalawa ang saradong control-point spline.

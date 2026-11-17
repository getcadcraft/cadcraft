---
title: "Itakda ang drawing limits"
summary: "Nagtatakda ang LIMITS ng rectangle para sa drawing: pinupuno ito ng grid, ipinapakita ito ng ZOOM All, at kapag naka-ON ang limits, tinatanggihan ang mga puntong nasa labas nito. Naka-save ang mga ito sa DWG at DXF na mga file."
keywords: limits, drawing limits, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grid, labas ng limits, laki ng sheet, drawing area, zoom all, hangganan
from: 9e97b30d
---

Ang **drawing limits** ay isang rectangle na nagsasabi kung gaano kalaki ang nilalayong drawing: ang lugar na plano mong iguhitan, gaya ng sheet na 420 × 297. Walang limits ang bagong drawing, kaya walang hangganan ang grid at drawing area, gaya ng dati.

## Itakda ang mga ito

I-type ang {{cmd:LIMITS}} at sagutin:

- `Specify lower left corner or [ON/OFF] <0,0>`: isang punto, o {{key:Enter}} para panatilihin ang kasalukuyan.
- `Specify upper right corner <420,297>`: isang punto, o {{key:Enter}} para panatilihin ang kasalukuyan. Dapat nasa itaas at kanan ito ng una.

O i-type ang `ON` o `OFF` sa unang tanong para i-on o i-off ang check nang hindi binabago ang rectangle. Isang undo step ang pagtatakda ng mga sulok, at ganoon din ang bawat ON at OFF.

## Ano ang ginagawa nila

- **Pinupuno ng grid ang limits** at humihinto sa gilid nito. Larawan ito ng lugar, kaya i-on ang {{ui:Grid}} para makita ito.
- **ZOOM All** ({{cmd:ZOOM}}, tapos {{ui:All}}) ipinapakita ang limits at ang drawing nang magkasama; ang {{ui:Extents}} ay drawing lang pa rin ang ipinapakita.
- **Kapag naka-ON ang limits**, tinatanggihan ang puntong i-type o i-click mo sa labas nito, na may `**Outside limits` at nananatili ang prompt. Sakop nito ang mga command na lumilikha ng object: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, ang mga dimension command at ilan pa. Hindi limitado ang mga command na nagmo-move, pumipili o nagsusukat lang, at gayon din ang pag-paste, grip drag, o object na ginawa ng LISP routine: gabay lang sa pagguhit ang limits, hindi pader. Kapag naka-OFF ang limits, walang tinatanggihan.
- Nananatili sa kinalalagyan nila ang mga object na nasa labas na.

## Sa mga file at LISP

Naka-save ang mga ito sa DWG at DXF bilang `$LIMMIN`, `$LIMMAX` at `$LIMCHECK`. Ang file mula sa ibang programa na may default limits lang ng programang iyon (0,0 hanggang 12,9 o 420,297, naka-off ang check) ay nagbubukas nang walang limits, para hindi maipit ang grid nito sa maliit na rectangle; ang file na may sariling limits, o naka-on ang check, ay pinapanatili ang mga ito. Sa LISP, binabasa ng `(getvar "LIMMIN")`, `LIMMAX` at `LIMCHECK` ang mga ito, at isinusulat ng `setvar`, bilang isang undo step.

Sa model nabibilang ang limits. Ang sheet (isang layout) ay may sariling laki ng papel.

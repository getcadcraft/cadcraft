---
title: Itakda ang font at laki ng teksto gamit ang text style
summary: Gumawa ng mga pinangalanang text style na may font, taas, lapad at slant, magtakda ng isa bilang kasalukuyan para sa bagong teksto, at palitan ang isang style para mabago ang lahat ng tekstong gumagamit nito.
keywords: text style, style, STYLE, ST, TEXTSTYLE, -STYLE, font, taas ng teksto, width factor, oblique, slant, palitan ang font, standard style, ilapat ang style, DDSTYLE
from: bd5a4883
---

## Ano ang gagawin mo

Gumawa ng text style na pinangalanang `Notes` na may sariling font at taas, gamitin ito para sa bagong teksto, at pagkatapos ay baguhin ang style para sabay-sabay magbago ang bawat note na gumagamit nito.

## Mga hakbang

1. I-type ang {{cmd:STYLE}} (`ST`) at pindutin ang {{key:Enter}}, o i-click ang {{ui:Istilo ng teksto}} sa toolbar na {{ui:Draw}}. Nakalista sa dialog na {{ui:Istilo ng teksto}} ang mga style sa drawing. May `Standard` ang bawat drawing.
2. I-click ang {{ui:Bago…}}, i-type ang `Notes` bilang pangalan ng bagong style at i-click ang {{ui:OK}}. Sinasabi ng status line: "Nagawa ang text style na Notes at itinakda bilang kasalukuyan."
3. Sa {{ui:Font}}, piliin o i-type ang pangalan ng font. Itakda ang {{ui:Taas (0 = itanong sa bawat pagkakataon)}} sa numero, gaya ng `2.5`, para makuha ng bawat bagong teksto ang taas na iyon. Iwanan sa `0` para itanong sa bawat pagkakataon.
4. Itakda ang {{ui:Width factor}} at {{ui:Anggulo ng oblique (°)}} kung gusto mo ng mas makitid, mas malapad o nakahilig na mga letra. Ipinapakita ng sample line ang resulta.
5. I-click ang {{ui:Isara}}. Iguhit ang teksto gamit ang {{cmd:TEXT}} o {{cmd:MTEXT}}: kukuha ng kasalukuyang style ang bagong teksto.
6. Para gamitin ang style na nagawa mo na, buksan muli ang dialog, piliin ito sa listahan at i-click ang {{ui:Itakda bilang kasalukuyan}}.
7. Para ilagay ang style sa tekstong nakaguhit na, piliin ang teksto, buksan ang dialog, piliin ang style at i-click ang {{ui:Ilapat sa piniling teksto}}.

## Baguhin ang style sa bandang huli

Baguhin ang font, taas, lapad o slant ng style sa dialog, at susunod ang bawat tekstong gumagamit nito, sa isang undo step ({{key:Mod+Z}}). Sinasabi ng status line kung ilang teksto ang nasunod.

## Mga tala

- Tumatanggi ang {{ui:Burahin}} sa `Standard`, at sa style na ginagamit pa ng teksto: palitan muna ang style ng tekstong iyon.
- Naka-save ang mga style sa STYLE table ng drawing, kaya nananatili ang mga ito sa mga DXF at DWG file.
- Sa command line, ginagawa ng `-STYLE` ang parehong bagay gamit ang mga opsyon (Current, New, Font, Height, Width, Oblique, Delete, List).
- Ipinapakita sa ibang mukha ang font na wala sa computer na nagbabasa ng drawing.

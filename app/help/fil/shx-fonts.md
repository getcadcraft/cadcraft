---
title: Gumuhit ng text gamit ang sarili mong SHX font
summary: Bigyan ang CadCraft ng folder ng SHX font (o piliin ang mga file), at ang mga text style na nagbabanggit sa mga ito ay iguguhit gamit ang mga ito, sa screen at sa plot o PDF, kasama ang taas, width factor at slant ng style.
keywords: shx, font, shape font, big font, bigfont, unifont, legacy, persian, farsi, arabic, text style, nawawalang font, pinalitang font, SHXFONTS, folder, baliktarin, visual order, simplex, isocp
from: 14b0a4ab
---

Madalas banggitin ng mga drawing mula sa ibang program ang **SHX font** sa kanilang text style, at hindi dinadala ng DWG ang mga ito. Kapag walang font, iguguhit ng CadCraft ang text gamit ang sarili nitong mukha, na maayos para sa karaniwang Latin na text pero hindi para sa mga lumang font na nagmamapa ng simpleng character code sa ibang hugis ng letra, gaya ng lumang Persian annotation.

Ibigay sa CadCraft ang mga font, at iguguhit nito ang text gamit ang mga ito.

## I-load ang mga font mo

I-type ang {{cmd:SHXFONTS}} (`SHX`) at pumili ng:

- {{ui:Folder}} (CadCraft Studio): pumili ng folder. Binabasa agad ang bawat `.shx` file dito, at muli sa tuwing magsisimula ang CadCraft.
- {{ui:Files}} (browser): pumili ng isa o ilang `.shx` file. Itinatago ang mga ito sa browser na ito at hindi ina-upload.
- {{ui:List}}: ang mga font na naka-load, at ang mga binabanggit ng bukas na drawing pero hindi mo pa naide-load.
- {{ui:Remove}} at {{ui:Clear}}: kalimutan ang isang font, o lahat ng font.

Hindi maaaring isama ng CadCraft ang mga third-party na font, kaya hindi ito kailanman nagdadala ng kahit ano: nagmumula sila sa iyo. Pinangalanan lang ng drawing ang mga font nito, at walang kopya ng mga ito na itinatago nito.

## Ano ang nangyayari

Ang pangalan ng font ng text style ay itinutugma sa naka-load na font ayon sa pangalan nito, hindi isinasaalang-alang ang case, folder at `.shx` (`SIMPLEX.SHX` ay nakakahanap ng `simplex`). Ang text sa ganoong style ay iginuguhit bilang mga linya, sa screen, sa plot at sa PDF, sa sariling lugar, taas, rotation, width factor at oblique angle ng text. Sariling lapad ng font ang lapad nito, kaya tumutugma sa nakikita mo ang {{ui:Center}} at {{ui:Right}} na alignment, wrapping at pagpili. Ang style na hindi naka-load ang font ay nananatili sa built-in na mukha, at kapag nagbukas ka ng drawing na may pinangalanang font na hindi mo pa naide-load, sinasabi ito ng command line.

Kabilang din ang Standard style: ang drawing na ang Standard style ay may sariling pangalan ng font ay pinananatili ito.

## Mga font na nasa visual order na

Maraming lumang Persian at Arabic na SHX font ang may mga letrang nakahugis na para sa screen at iginuguhit mula kaliwa pakanan, kaya lumalabas na baligtad ang text na na-type sa logical order. I-type ang {{cmd:SHXFONTS}}, piliin ang {{ui:Reverse}}, at pangalanan ang font: ang text nito ay inaayos na ang huling letra ang nauuna. Patakbuhin muli para bawiin. Kabilang sa font ang switch, naka-save ito sa browser na ito, at hindi ito nakasulat sa drawing.

## Ano ang hindi pa sakop

- Ang text na may inline na format code (kulay, stack sa MTEXT) ay nananatili sa built-in na mukha.
- Pumupuno ang big font (ang double-byte na uri) sa mga code na kulang ng pangunahing font, pero ang text sa East Asian code page na naisalin na ng CadCraft sa Unicode ay hindi na mamamapa pabalik sa double-byte code ng font.
- Sinusunod ng font reader ang nailathalang paglalarawan ng format, at nasubukan ito sa mga font na ginawa para sa CadCraft. Kung may mali sa pagguhit ng isa sa mga font mo, ipadala sa amin ang font at ang drawing.

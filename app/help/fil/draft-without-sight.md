---
title: "Draft nang walang paningin"
summary: "I-on ang Access at sinasabi ng CadCraft ang bawat command at resulta sa pamamagitan ng iyong screen reader, inilalarawan ang drawing at kung ano ang malapit sa cursor, hinahayaan kang ilipat ang cursor gamit ang keyboard, nagpapatugtog ng tunog sa bawat snap at grip, at tumatanggap ng command sa boses kung kaya ito ng iyong browser sa iyong computer."
keywords: accessibility, screen reader, bulag, mahinang paningin, NVDA, VoiceOver, JAWS, Orca, keyboard cursor, command sa boses, speech, tunog, snap sounds, describe drawing, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

Hinahayaan ka ng **Access** na gumuhit nang hindi nakikita ang screen. Naka-off ito hanggang i-on mo, kaya walang makakakuha nito nang hindi sinasadya.

## I-on ito

Buksan ang **Mga setting** (ang gear, o Ctrl+,), hanapin ang **Draft nang walang paningin** at piliin ang **On**. O i-type ang `ACCESS` sa command line at sagutin ang `On`. Naaalala ito sa computer na ito.

Kapag naka-on ang Access:

- **Binibigkas ang lahat ng sinasabi ng command line** sa pamamagitan ng iyong screen reader: ang na-type mo, ang prompt na itinatanong nito, ang sagot, at bawat error. Gumagamit ang CadCraft ng sarili nitong magalang at agarang live region, kaya ang screen reader na nagbabasa ng live region ay walang kailangang i-setup. Ang mga error at cancel ay nakakaabala; ang iba ay naghihintay ng pagkakataon.
- **Maaabot ang drawing area.** Pindutin ang Tab hanggang marinig mo ang "Drawing", o pindutin ang Shift+Tab mula sa command line. Ito ay region na nagpapasa ng mga key sa CadCraft.

## Mga key sa drawing

| Key | Ang ginagawa nito |
|---|---|
| Arrow keys | Ilipat ang keyboard cursor. Ang isang hakbang ay humigit-kumulang isang daan ng nakikita sa screen, binilog sa 1, 2 o 5. Ang Shift ay gumagalaw nang sampung beses ang layo, ang Ctrl ay isang ikasampu. |
| Enter | Piliin ang punto sa ilalim ng cursor, eksakto gaya ng click. |
| Space | Pindutin ang Enter sa command line: tapusin ang LINE, kunin ang default. |
| Tab, Shift+Tab | Tumalon sa susunod o nakaraang snap point malapit sa cursor, pinakamalapit muna. |
| G | Dumaan sa mga grip ng mga napiling object. |
| D | Ilarawan ang drawing: ilang object, anong uri, gaano kalaki, ano ang napili. |
| W | Sabihin kung nasaan ang cursor at gaano ito kalayo sa huling punto. |
| N | Sabihin kung ano ang malapit sa cursor, pinakamalapit muna, kasama ang distansya at panig. |
| S | Ilarawan ang mga napiling object. |
| R | Ulitin ang huling sinabi. |
| V | I-on o i-off ang boses. |
| / | Pumunta sa command line. |
| ? | Ilista ang mga key na ito. |

Sinasabi ng paggalaw gamit ang mga key kung saan ka napunta. Kapag naghihintay ng punto ang isang command, sinasabi rin nito kung gaano kalayo at sa anong direksyon ka mula sa huling punto, halimbawa "2400 mula sa huling punto, pakanan, sa 0 degrees".

## Mga command

- Ang {{cmd:ACCESS}} ay nag-o-on o nag-o-off ng Access, mga snap sound at boses, at sinasabi ang estado.
- Sinasabi ng {{cmd:DESCRIBE}} kung ano ang laman ng drawing.
- Sinasabi ng {{cmd:WHEREAMI}} kung nasaan ang cursor.
- Sinasabi ng {{cmd:NEARBY}} kung ano ang malapit sa cursor.
- Sinasabi ng {{cmd:SAYSEL}} kung ano ang napili, isang pangungusap bawat object.
- Ang {{cmd:VOICE}} ay nag-o-on o nag-o-off ng mga binibigkas na command.

Binabasa ng limang ito ang drawing at naglalabas ng sagot; wala silang binabago.

## Mga tunog para sa snap at grip

I-on ang **Tunog ng snap at grip** sa Mga setting. May sariling tono at tunog ang bawat uri ng snap, kaya matutukoy mo ang endpoint mula sa midpoint, center, intersection at iba pa, at may dobleng tik ang grip. Lumilipat ang tunog sa kaliwa o kanan para sundan ang cursor sa screen. Ginagawa ang mga tunog sa computer mo; walang dina-download.

## Mga command gamit ang boses

I-on ang **Mga command gamit ang boses** sa Mga setting. Sabihin ang pangalan ng command ("line", "circle", "move"), tapos sabihin ang mga numero gaya ng pagbasa mo sa mga ito: "point three hundred comma four hundred", "distance twelve hundred", "angle forty five". Ginagawa ng "Enter", "cancel", "undo" at "redo" ang sinasabi nila. Ibinabalik ang narinig, at ang parirala na hindi command ay iniuulat, hindi hinuhulaan.

**Saan kinikilala ang pananalita.** Walang sariling serbisyo ng pananalita ang CadCraft at hindi nagpapadala ng audio kahit saan. Hinihiling nito sa browser mo na kilalanin ang pananalita sa computer na ito. Kung kaya ito ng browser mo, ang pipiliin ay **Sa computer na ito** at walang audio na lumalabas. Kung hindi, mananatiling naka-off ang boses maliban kung piliin mo ang **Browser online service**, na nagpapahintulot sa browser na magpadala ng audio sa speech service ng gumawa nito. Sinasabi ng Mga setting kung alin ang nalalapat bago ka magpasya.

## Ano ang hindi pa nagagawa

- CadCraft pa lang ang may Access. Susunod ang iba pang pitong app, na may parehong key at tunog.
- Binabasa nang eksakto ayon sa pagkakasulat ang teksto sa drawing (isang note, pangalan ng block); hindi ito kailanman tinatanggap bilang utos.
- Nasubukan na ito gamit ang synthetic check at ang browser test; ang manu-manong pagsusuri gamit ang NVDA, VoiceOver at isang tagasubok na bulag o may mahinang paningin ay darating pa. Kung susubukan mo ito, pakisabi sa amin kung ano ang kulang.

---
title: Pagpasok ng coordinate at distansya
summary: Bawat paraan ng pag-type ng point, distansya, anggulo o numero sa command line ng CadCraft, may mga halimbawa.
keywords: dynamic input, dyn, f12, tab, coordinates, absolute, relative, polar, @, direktang distansya, anggulo, degrees, huling point, lastpoint, pag-type ng mga point, input, aritmetika, kalkulasyon, calculator, cal, plus, fraction, ekspresyon
from: 7de9252d
---

## Mga point

Kapag humihingi ang prompt ng point, i-type ang isa sa mga ito at pindutin ang {{key:Enter}}:

| Ang i-type mo | Kahulugan | Halimbawa |
|---|---|---|
| `x,y` | Absolute: sinusukat mula sa origin na 0,0 | `2500,1200` |
| `#x,y` | Absolute din (tinatanggap para sa nakasanayan) | `#2500,1200` |
| `@dx,dy` | Relative: pahalang at pataas mula sa huling point | `@600,0` |
| `@d<a` | Relative polar: distansya at anggulo mula sa huling point | `@1500<45` |
| `d<a` | Absolute polar: distansya at anggulo mula sa origin | `3000<90` |
| isang numero lang | Direktang distansya: ganoon kalayo mula sa base point, papunta sa crosshair | `1200` |
| `*x,y`, `@*dx,dy` | World coordinates habang may UCS na nakatakda | `*0,0` |

Kapag may nakatakdang UCS ({{cmd:UCS}}), ang `x,y`, `@dx,dy` at ang anggulo sa `d<a` ay sinusukat ayon sa mga axis ng UCS. Tingnan ang [Pag-ikot ng view at paggamit ng sarili mong coordinate](topic:ucs-and-turned-view).

O mag-click sa drawing; gumagana ang object snap at Ortho sa mga click.

Mga tuntunin:

- Ang kuwit ang naghihiwalay sa X at Y. Ang decimal ay gumagamit ng tuldok: `1250.75,300`.
- Ang negatibong value ay pakaliwa at pababa: `@-600,0`.
- Huwag mag-type ng espasyo: ang {{key:Space}} ay nagpapadala ng linya, tulad ng {{key:Enter}}.
- Maaaring gumamit ng exponent ang mga numero: ang `1e3` ay 1000.
- Walang unit na itina-type, at walang notasyong talampakan-at-pulgada. I-type ang plain na numero sa drawing units.

## Ang huling point

Ang `@` ay nagbibilang mula sa **huling point na ibinigay mo sa anumang point prompt**, sa anumang command: isang click, isang snap o isang na-type na point. Naaalala ito sa pagitan ng mga command, kaya maaari kang magsimula ng bagong linya na `@0,500` ang layo mula sa dulo ng dating linya. Bago ka pa makapagbigay ng anumang point, ang `@` ay nagbibilang mula sa 0,0.

Ilang lugar kung saan mahalaga ito:

- Sa {{cmd:COPY}}, pagkatapos ng unang kopya, ang huling point ay ang point ng kopyang iyon. Ang `@600,0` na dalawang beses ay naglalagay ng mga kopya na 600 at 1200 ang layo mula sa orihinal.
- Pagkatapos mong maglagay ng dimension, ang huling point ay ang lugar kung saan mo inilagay ang dimension line, hindi ang dulo ng dimension.

Kapag may pagdududa, gumamit ng absolute na point, snap, o direktang distansya.

## Pagpasok ng direktang distansya

Ang nag-iisang numero ay distansya mula sa **base point** ng command (ang point kung saan nagsisimula ang rubber band) papunta sa crosshair:

1. Ilipat ang crosshair sa direksyong gusto mo.
2. I-type ang distansya at pindutin ang {{key:Enter}}.

Kapag naka-on ang {{ui:Ortho}}, ang direksyon ay nagsa-snap sa tuwid na pahalang o tuwid na pataas at pababa, kaya ito ang pinakamabilis na paraan para gumuhit ng tuwid na pader. Kung walang base point, o kung eksaktong nasa base point ang crosshair, ang numero ay tatanggihan na may mensaheng "Kailangan ang point o keyword ng opsyon."

## Mga anggulo

- Sa degrees, bilang plain na numero: `30`, `-45`, `112.5`.
- Sinusukat pakaliwa (counterclockwise) mula sa positibong direksyon ng X (nakaturo sa kanan): ang 0 ay kanan, ang 90 ay taas, ang 180 ay kaliwa, ang 270 o -90 ay baba.
- Kapag may hinihinging anggulo (rotation, anggulo ng teksto), maaari ka ring mag-click: ang anggulo ay sinusukat mula sa base point hanggang sa click. Bago pa magkaroon ng base point, ang unang click ang nagtatakda nito at humihingi ang prompt ng ikalawang point.

## Mga distansya

Kapag may hinihinging distansya (radius, offset, taas ng teksto, scale factor):

- mag-type ng positibong numero (sa drawing na talampakan-at-pulgada, maaari ring `12'6"` o `6-1/2`: tingnan ang [Talampakan at pulgada](topic:units-papers-scales#feet-and-inches-and-fractions)), o
- mag-click ng point: ang distansya mula sa base point ng command hanggang dito, o
- mag-click ng dalawang point kapag walang base point: nagbabago ang prompt sa `Tukuyin ang ikalawang point`.

Ang "Kailangan ng positibong numero o dalawang point." ay nangangahulugang hindi numero ang value, o negatibo ito.

## Aritmetika sa na-type na value

Saanman i-type ang haba, coordinate, anggulo o numero (ang command line, dynamic input, mga kahon ng Properties at mga dialog), maaari kang mag-type ng kalkulasyon gamit ang `+`, `-`, `*`, `/` at mga bracket sa halip na kuwentahin muna ito:

| I-type | Lumalabas |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (sa drawing na talampakan-at-pulgada) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, sa units ng drawing (kapag nakatakda ang units nito) |
| `@4+7/16,0` | point na 4.4375 sa kanan ng huli |
| `360/7` | anggulo na 51.43 degrees |

- Ang gitling na isinulat sa loob ng haba ay bahagi pa rin nito: ang `4-7/16` ay 4 7/16 at ang `24'-6"` ay 24 talampakan 6 pulgada. Para magbawas pagkatapos ng marka ng talampakan, tapusin muna ang haba, `24'-0"-6"`, o ilagay ang kalkulasyon sa bracket na may espasyo sa paligid ng gitling, `(24' - 6")` (sa loob ng bracket ay espasyo ang espasyo; sa labas nito, pininindot nito ang {{key:Enter}}).
- Ang plain na numerong idinagdag sa haba ay nasa drawing units; ang pagmu-multiply o paghahati nito sa isang numero ay nag-i-scale ng haba. Ang dalawang haba na i-multiply ay bumubuo ng area, kaya ang `2'*3'` ay tinatanggihan.
- Gumagana rin ang `abs`, `round`, `ceil` at `floor`: `round(10/3)`.
- Ang kalkulasyong hindi mabasa ay tinatanggihan na may kung saan ito nagkamali, halimbawa "Masyadong maaga natapos ang kalkulasyon (character 3): may nawawalang value." Walang binabasang 0 kailanman. Ipinapakita ng {{cmd:CAL}} ang value ng kalkulasyon.

## Dynamic input

{{ui:Dyn}} ({{key:F12}}, sa status bar) ay naglalagay ng mga value sa tabi ng crosshair habang humihingi ng point ang command.

- Kapag wala pang base point (ang unang point ng linya), ang dalawang field ay **X** at **Y**.
- Pagkatapos nito, ang mga ito ay ang **distansya** at ang **anggulo** mula sa huling point.

Dumadaan pa rin sa command line ang pag-type; ipinapakita ng field sa tabi ng crosshair ang na-type, at sumusunod dito ang rubber band.

1. Mag-type ng value: mapupunta ito sa naka-highlight na field.
2. Pindutin ang {{key:Tab}} (o kuwit pagkatapos ng X). Nai-lock ang value (naka-bold ang ipinapakita) at naka-highlight na ang susunod na field. Ang nai-lock na distansya ay nagpapanatili ng rubber band sa haba na iyon habang tinututok mo ang mouse.
3. Mag-type ng pangalawang value, o tumutok lang, at pindutin ang {{key:Enter}}. Ang `50`, {{key:Tab}}, `90`, {{key:Enter}} ay gumuguhit ng 50 nang tuwid pataas mula sa huling point.

Ang pagpindot ng {{key:Enter}} pagkatapos ng isang value nang walang {{key:Tab}} ay gumagana bilang direktang pagpasok ng distansya. Gumagana rin ang talampakan at pulgada sa mga field (`12'6"`). Ipinapakita rin ng mga prompt ng distansya at anggulo (radius ng bilog, rotation) ang kanilang value sa tabi ng crosshair.

## Mga opsyon at default

- Lumalabas ang mga opsyon sa square bracket. I-type ang malalaking titik ng isang opsyon (`D` para sa `[Diameter]`, `CL` para sa `CLose`) at pindutin ang {{key:Enter}}. Gumagana rin ang mas mahabang simula ng salita (`DIA`).
- Lumalabas ang default sa angle bracket, gaya ng `<500>`. Pindutin ang {{key:Enter}} o mag-right-click para gamitin ito.

## Ibang keyboard layout at ang keypad

Ang mga pangalan ng command, maikling pangalan at letra ng opsyon ay mga Latin na letra. Kapag aktibo ang layout na Griyego, Cyrillic (Ruso, Ukrainian, Belarusian, Serbian, Macedonian, Bulgarian), Hebreo, Arabic, Persian, Thai o Korean, hindi mo kailangang magpalit ng layout: kapag ang salitang na-type mo ay hindi command, maikling pangalan, o opsyon sa anyo nito, binabasa ito ng CadCraft ayon sa mga susing pinindot mo. Ang susi na may markang `L` sa Latin na keyboard ay nagsisimula pa rin ng `LINE`, at ang susi na `C` ay sumasagot pa rin ng `Close`, anuman ang letrang ilagay ng layout dito. Ang listahan ng mga tugmang command sa itaas ng command line ay sumusunod sa parehong tuntunin. Ang text na itina-type mo kapag humihingi ng text ang command (ang nilalaman ng {{cmd:TEXT}}, isang pangalan) ay hindi kailanman binabago.

Sa mga layout kung saan ang decimal key ng keypad ay nagbibigay ng kuwit, ang susing iyon ay nagta-type ng point sa command line at sa mga kahon ng numero, kaya maaaring i-type ang `12.5` sa keypad. Ang comma key ng pangunahing keyboard ay naghihiwalay pa rin sa `x,y`.

Maaaring i-off ang dalawa sa {{ui:Mga setting}}: {{ui:Commands on a non-Latin keyboard layout}} at {{ui:Keypad decimal key}}.

## Ang display ng coordinate

Ipinapakita ng status bar ang X at Y ng crosshair (sa UCS kapag may nakatakda), pagkatapos ng mga snap at Ortho. Habang may base point ang command, nagdadagdag ito ng `Δ` na may distansya at anggulo mula sa point na iyon, halimbawa `Δ 1500 < 30°`: ang mga numerong itatype mo bilang `@1500<30`.

Gamitin ang {{cmd:ID}} para ipakita ang coordinate ng isang point at ang {{cmd:DIST}} para sukatin ang distansya sa pagitan ng dalawang point.

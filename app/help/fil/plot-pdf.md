---
title: I-plot sa PDF
summary: Gumawa ng PDF ng isang sheet sa full size, o ng model sa isang scale o ayon sa papel, i-print mula sa browser o sa Studio, o i-save bilang PNG o SVG.
keywords: i-plot, i-print, printer, mga kopya, png, svg, picture, pdf, i-publish, exportpdf, papel, scale, monochrome, grayscale, itim at puti, kapal ng linya, pen, page setup, plot window, plot style, plot style table, ctb, depende sa kulay, screening, plotstyles, stylesmanager
from: a4752f83
---

## Ano ang gagawin mo

Isang PDF ng isang sheet sa full size, pagkatapos ay mabilis na PDF ng model sa 1:100, at isang printout.

Ginagawa ang PDF sa loob ng iyong browser; walang ina-upload. Ito ay vector PDF: nananatiling malinaw ang mga linya sa anumang zoom, at puwedeng hanapin ang teksto.

## I-plot ang sheet

1. I-click ang tab ng sheet sa ilalim ng drawing.
2. Pindutin ang {{key:Mod+P}}, i-click ang {{ui:Plot}}, o i-type ang `PLOT` at pindutin ang {{key:Enter}}.

Magbubukas ang dialog na {{ui:Plot to PDF}}. Sinasabi nito kung aling sheet ang ip-plot at sa anong papel, "sa full size … gaya ng nakikita mo". Ipinapakita ng preview sa kanan ang sheet.

3. Sa {{ui:Plot style}}, piliin ang {{ui:Monochrome (black)}} para sa itim na mga linya, {{ui:Colour (as drawn)}} para panatilihin ang mga kulay, {{ui:Grayscale}}, o isang table na sarili mo (tingnan ang [Mga plot style table](topic:plot-pdf#plot-style-tables)). Naaalala ng sheet ang pagpiling ito: naka-save ito kasama ng drawing.
4. Sa {{ui:Line weight}}, pumili ng lapad ng pen mula 0.13 mm hanggang 0.70 mm. Ang mga linyang may default na lineweight ay ilalabas sa lapad na ito; ang mga linyang may sariling lineweight (sa layer o object, o ang pen ng kulay nila sa table) ay ilalabas sa lapad na iyon.
5. I-click ang {{ui:Download PDF}}.

Dina-download ng browser ang PDF na pinangalanan ayon sa drawing at sheet, halimbawa `Drawing1-A-101 Plan.pdf`. Ipinapakita ng history ang laki nito sa bytes at ang laki ng papel nito sa millimeter.

Laging nagpa-plot ang sheet sa 1:1 sa sarili nitong papel. Para baguhin ang papel, baguhin ito sa mismong sheet (tingnan ang [I-set up ang sheet](topic:sheets-and-viewports)). Ang mga layer na naka-set na huwag i-plot ay hindi isasama, at gayon din ang mga viewport frame.

## Lahat ng sheet sa isang PDF

Kapag dalawa o higit pang sheet, may {{ui:All sheets in one PDF}} ang dialog na {{ui:Plot to PDF}}; o i-type ang {{cmd:PUBLISH}}. Ang {{key:Enter}} ang kukuha ng lahat ng sheet; ang `[Ilan (S)]` ay humihingi ng kanilang mga pangalan, pinaghihiwalay ng kuwit. Isang PDF ang dina-download, na may isang pahina bawat sheet, ayon sa pagkakasunod ng tab, bawat isa sa sarili nitong laki ng papel, at isang bookmark bawat sheet na may pangalan nito. Bawat sheet ay nagpa-plot gamit ang sarili nitong plot style table; ang sheet na walang napiling table ay gagamit ng huling pinili mo sa dialog, at ang lapad ng pen na huli mong pinili.

## I-plot ang model

1. I-click ang tab na {{ui:Model}}.
2. Pindutin ang {{key:Mod+P}}.

Sinasabi ng dialog na ip-plot nito ang model sa isang sheet ng papel, at may ipinapakitang mas maraming setting:

3. Sa {{ui:Area}}, piliin kung ano ang ip-plot:
   - {{ui:Everything (extents)}}: ang buong drawing.
   - {{ui:What is on screen}}: ang lugar na nakikita mo sa drawing ngayon.
   - {{ui:A window…}}: pagkatapos, i-click ang {{ui:Pick}}, i-click ang dalawang sulok sa drawing, at babalik ang dialog.
4. Sa {{ui:Paper}}, pumili ng laki: ISO A4 hanggang A0, Letter, Legal, Tabloid at ANSI C at D, o ARCH C, D at E.
5. Sa {{ui:Orientation}}, piliin ang {{ui:Landscape}} o {{ui:Portrait}}.
6. Sa {{ui:Scale}}, piliin ang {{ui:Fit to paper}} o isang scale gaya ng `1:100`.

Sa ilalim ng mga setting, may linyang nag-uulat ng scale at kung gaano kalaki ang lugar sa papel. Kapag mas malaki ito kaysa sa papel, sinasabi nito: pinuputol ang mga gilid. Pumili ng mas maliit na scale, mas malaking papel, o {{ui:Fit to paper}}.

7. I-click ang {{ui:Download PDF}}.

Nag-iiwan ang plot ng model ng 5 mm na margin sa paligid, dahil karamihan sa mga printer ay hindi kayang mag-print hanggang sa gilid. Ang {{ui:Fit to paper}} ay nagbibigay ng hindi bilog na scale (sinasabi ng history at ng info line na "(fitted)"); pumili ng karaniwang scale kapag kailangang tama ang sukat ng drawing.

:::note
Ang mga scale ay binabasa sa totoong unit. Para tama ang 1:100, itakda ang {{ui:Units}} sa {{ui:Current settings}} sa katumbas ng isang drawing unit. Ang drawing na walang unit ay ipinapalagay na nasa millimeter.
:::

## Mga plot style table

Sinasabi ng plot style table kung paano ilalabas ang bawat isa sa 255 karaniwang kulay ng drawing, gaya ng ginagawa ng color-dependent plot style table (CTB) sa ibang CAD program. Tatlo ang built in:

| Table | Ilalabas |
|---|---|
| {{ui:Colour (as drawn)}} | Bawat object sa sarili nitong kulay. |
| {{ui:Monochrome (black)}} | Bawat kulay ay itim: ang karaniwang pagpipilian para sa mga drawing. |
| {{ui:Grayscale}} | Bawat kulay ay sa sarili nitong gray, para magkahiwalay pa rin ang mga kulay sa black-and-white na printer. |

Para gumawa ng sarili, halimbawa pulang linyang makapal at itim, at manipis ang lahat ng iba:

1. Sa dialog na {{ui:Plot to PDF}}, i-click ang {{ui:Edit tables…}} (o i-type ang {{cmd:PLOTSTYLES}}).
2. I-click ang {{ui:New}}, at i-type ang pangalang gaya ng `office` sa {{ui:Name}}. Para magsimula sa built-in na table, piliin ito sa {{ui:Table}} at i-click ang {{ui:Copy}}.
3. I-click ang isang kulay sa grid. Ang {{key:Shift}}+click ay pumipili ng saklaw ng mga kulay, ang {{key:Mod}}+click ay nagdadagdag ng isa pa, at kinukuha ng {{ui:Select every colour}} ang lahat ng ito.
4. Itakda kung ano ang ilalabas ng mga napiling kulay:
   - {{ui:Prints in}}: {{ui:Its own colour}}, {{ui:Black}} o {{ui:Another colour…}}.
   - {{ui:As a gray}}: ang kulay bilang gray nito.
   - {{ui:Ink (%)}}: 100 ang buong tinta, 50 ay kalahati patungo sa puti (screening), para sa mga linyang nasa background.
   - {{ui:Lineweight}}: ang {{ui:Its own lineweight}} ay pananatilihin ang lineweight ng object o layer; ang isang halaga ay ilalabas ang bawat linya ng kulay na iyon sa lapad na iyon.
   - {{ui:Linetype}}: ilabas ang bawat linya ng kulay na iyon gamit ang ibang linetype (halimbawa, lahat ng pula ay dashed); iiwan ang mga ito ng {{ui:Use the object's linetype}}.
   - {{ui:Line end}} at {{ui:Line join}}: butt, square o round na dulo, at miter, bevel o round na sulok (round, gaya ng dati, kapag walang itinakda).
   - {{ui:Fill style}}: ang solid fill ng kulay na iyon ay ilalabas bilang hatch na linya (pahalang o patayong bar, slant, crosshatch, diamond, square dots) sa halip na tinta, para sa mga printer at plano na masyadong mabigat ang flat na tinta.
   Ang table mismo ay may dalawa pang setting: {{ui:Lineweights}}, ang mga lapad na alam nito (ang na-print na linya ay pupunta sa pinakamalapit sa mga ito), at {{ui:Linetype scale}}, isang factor sa mga dash ng bawat linetype na hindi ISO.
5. I-click ang {{ui:Done}}. Naka-save ang table sa drawing, at ang sheet (o ang model) ay nagpa-plot na gamit ito. Itinatapon ng {{ui:Cancel}} ang mga pagbabago.

Ang kulay na may sariling pen ay nagpapakita ng tuldok sa sulok nito, at tuldok sa ibaba kapag may itinakdang lineweight. Ang object na may true color (hindi isa sa 255) ay gumagamit ng pen ng pinakamalapit na karaniwang kulay.

Pinananatili ng drawing ang mga table nito at ang pagpili ng bawat sheet kapag nag-save ka bilang DWG (2000 hanggang 2018) o DXF (R12 o 2000), at bumubukas ang mga ito muli. Ang ibang program ay makikita lamang ang pangalan sa page setup ng bawat sheet (`office.ctb`), hindi ang mismong table. Ang drawing mula sa ibang program na ang page setup ay nagbabanggit ng table gaya ng `monochrome.ctb` ay nagpa-plot gamit ang built-in na table na may pangalang iyon; para sa ibang pangalan, sinasabi ng dialog na wala ito sa drawing, at nagpa-plot ito ng mga kulay ng drawing hanggang pumili ka ng table o gumawa ng may ganoong pangalan.

Para gamitin ang table sa ibang drawing, i-click ang {{ui:Export}} sa {{ui:Plot style tables}} (nagse-save ito ng `office.plotstyle.json`), pagkatapos ay {{ui:Import…}} sa ibang drawing. Tumatanggap din ang {{ui:Import…}} ng `.ctb` file mula sa ibang program: binabasa ito mula sa nai-publish na paglalarawan ng format at **hindi pa nasusuri laban sa totoong file**. Nababasa ang kulay, screening at lineweight ng bawat kulay; hindi nababasa ang grayscale, pen number, linetype, line end at join, at fill style, at tinatanggihan ang named table (`.stb`). Ihambing ang unang plot sa inaasahan mo, at ipadala sa amin ang file kung mali ito.

## I-print

**Sa browser**, i-click ang {{ui:Print…}}. Gumagawa ang CadCraft ng PDF at binubuksan ang sariling print dialog ng browser para dito. Piliin doon ang "Actual size" o 100% (hindi "Fit") para mapanatili ang scale. Kung hindi mag-print ang browser mula sa page, magbubukas ang PDF sa bagong tab sa halip: i-print ito mula roon gamit ang {{key:Mod+P}}.

Puwede mo ring i-click ang {{ui:Open to print}}: magbubukas ang PDF sa bagong browser tab, at doon mo ito ii-print.

:::safari
Maaaring ipakita ng Safari ang PDF at maghintay na gamitin mo ang **File**, pagkatapos **Print**.
:::

Kung hinaharangan ng browser mo ang bagong tab, dina-download ng CadCraft ang PDF sa halip at sinasabi ito sa history. Payagan ang pop-up para sa site para mabuksan ito sa tab sa susunod.

**Sa CadCraft Studio**, inililista ng dialog na {{ui:Plot to PDF}} ang mga printer ng computer. Piliin ang {{ui:Printer}}, ang {{ui:Paper in the printer}} at ang bilang ng {{ui:Copies}}, pagkatapos i-click ang {{ui:Print…}}. Pinipili ng {{ui:Gaya ng plot}} ang papel ng printer na kasing-laki ng sheet (A3 para sa A3 na sheet); kapag walang ganoon ang printer, ginagamit nito ang sarili nitong papel at ina-fit ang sheet dito. Sa Windows, ipinapadala ang sheet bilang 300 dpi na picture, dahil hindi kayang mag-print ng Windows ng PDF nang walang PDF program; sa Linux at macOS, ang mismong PDF ang ipinapadala sa print service ng sistema. Walang umaalis sa computer.

## Mga picture at SVG file

{{ui:Download PNG}} ang nagse-save ng na-plot na sheet bilang picture sa 300 dpi (ibinababa lamang kapag ang napakalaking sheet ay mas malaki kaysa kayang gawin ng browser; sinasabi ito ng history). Ang {{ui:Download SVG}} ay nagse-save nito bilang scalable na drawing sa millimeter, kasama ang mga linya at teksto ng plot. Parehong galing sa parehong plot ng PDF, na may parehong plot style, line weight at lugar. Ang mga picture na nasa drawing ay nasa PDF lamang; sinasabi ng history kung ilan ang naiwan.

## Mga picture

Nagpi-print ang mga picture sa sarili nilang resolution, sa ilalim ng mga linya. Nililimitahan ng {{ui:Pictures}} sa dialog ang mga ito sa 600, 300 o 150 dpi para sa mas maliit na file. Laging nananatiling malinaw ang mga linya, teksto at hatch (vector), at nananatiling transparency ang transparency. Tingnan ang [Mga picture sa drawing](topic:pictures).

## Mga setting na naaalala

Naaalala ng dialog ang huli mong papel, oryentasyon, scale at lineweight sa browser na ito. Ang plot style table ay kasama ng bawat sheet sa drawing; ang sheet na walang napiling table ay magsisimula sa huling pinili mo. Ang napiling window ay nananatili hanggang i-reload ang page; pagkatapos niyon, magsisimula ang dialog sa {{ui:Everything (extents)}}.

## Mga karaniwang pagkakamali

- **Blangko ang PDF o kulay abo ang mga button.** Walang ip-plot (walang laman na model), o nakapili ang {{ui:A window…}} at wala pang napipiling window ("Piliin ang window na i-plot.").
- **May "?" ang teksto sa PDF.** Ang teksto sa Polish, Czech, Cyrillic, Greek at iba pang script ng Europe ay nilalabas bilang sarili nitong anyo: dala ng PDF ang mga letrang kailangan nito (mula sa Liberation Sans font, na may lapad ng Helvetica), at puwede pa ring piliin at hanapin ang teksto. Ang teksto sa Chinese, Japanese at Korean ay nilalabas din bilang sarili nitong anyo: kapag may ganoon ang drawing, kumukuha ang plot ng mas malaking font (mga 10 MB, minsan lang), at ang PDF ay dala lamang ang mga karakter na ginamit, kaya kailangan nito ng koneksyon sa unang pagkakataon (hindi sa offline na kopyang na-save bago pa ito). Nilalabas ang Hebrew mula sa parehong naka-embed na font ng Latin na teksto, at ang teksto sa Arabic, Persian at Urdu ay nagpapakuha ng isa pang font sa plot (wala pang 1 MB, minsan lang); inaayos ang mga linyang right-to-left at pinagdurugtong ang mga letra nito (tingnan ang [Teksto](topic:text)). Ang bihirang ideograph sa labas ng mga font na iyon, at mga script na nangangailangan ng complex shaping gaya ng Hindi, ay nilalabas bilang "?", at binibilang ito ng history.
- **Pareho ang kapal ng lahat ng linya.** Default ang kanilang lineweight: bigyan ang mga layer o object ng {{ui:Lineweight}} sa kanang panel (tingnan ang [Mga line weight at linetype](topic:units-papers-scales#line-weights-and-linetypes)), o itakda ang lineweight kada kulay sa [plot style table](topic:plot-pdf#plot-style-tables).
- **"(wala sa drawing na ito)" sa tabi ng plot style.** Galing ang drawing sa ibang program at may pangalan ng table na wala roon. Pumili ng isa sa mga table, o gumawa ng may ganoong pangalan.
- **Na-print ang construction line.** Itakda ang layer nila na huwag i-plot: i-click ang printer button nito sa panel na {{ui:Layers}}.
- **Mali ang laki ng printout.** Inayos ito ng printer. Mag-print sa actual size.
- **Nagbukas ng print dialog ng browser ang {{key:Mod+P}}.** Nasa kahon sa kanang panel ang cursor, o may bukas na ibang dialog. Pindutin ang {{key:Enter}} o {{key:Esc}} para lumabas sa kahon, pagkatapos subukan ulit, o i-click ang {{ui:Plot}}.
- **Walang nangyari sa {{key:Mod+P}}.** May tumatakbong command. Pindutin muna ang {{key:Esc}}.

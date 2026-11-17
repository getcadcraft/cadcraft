---
title: Itakda ang laki, decimal at scale ng dimension
summary: Pumili ng taas ng text, laki ng arrow, decimal at kabuuang scale para sa bagong dimension, baguhin ang mga umiiral na, at unawain kung paano gumagana ang mga dimension style sa CadCraft.
keywords: dimension style, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, kabuuang scale, decimals, laki ng arrow, annotation scale, dimtextunit, mga unit sa teksto, mm, cm, m, km, millimeter, metro, dimlfac, dimpost
from: 8ec82a07
---

## Ano ang matututunan mo

Gaano kalaki ang text at arrow ng dimension, paano itakda ang mga ito para sa drawing na naka-plot sa 1:50 o 1:100, at kung paano baguhin ang mga dimension na nagawa mo na.

## Paano gumagana ang laki ng dimension

Bawat dimension ay may sariling set ng laki: taas ng text, laki ng arrow, decimal, espasyo sa paligid ng text, gaano kalayo lumalampas ang extension line sa dimension line, at gaano kalayo ito nagsisimula mula sa bagay. Malapit sa karaniwang ISO style ang mga default:

| Setting | Default | Command |
|---|---|---|
| Taas ng text | 2.5 | {{cmd:DIMTXT}} |
| Laki ng arrow | 2.5 | {{cmd:DIMASZ}} |
| Decimals | 2 (tinatanggal ang mga trailing zero) | {{cmd:DIMDEC}} |
| Espasyo sa paligid ng text | 0.625 | {{cmd:DIMGAP}} |
| Extension lampas sa dimension line | 1.25 | {{cmd:DIMEXE}} |
| Offset mula sa bagay | 0.625 | {{cmd:DIMEXO}} |
| Kabuuang scale | 1 | {{cmd:DIMSCALE}} |

Pinarami ang bawat laki sa **kabuuang scale**. Itakda ang mga laki gaya ng gusto mo sa paper (2.5 mm na text), at itakda ang kabuuang scale sa plot scale (50 para sa 1:50). Ang text ay magiging 2.5 × 50 = 125 drawing unit ang taas, na naka-plot sa 2.5 mm.

:::note
Pinamamahalaan ang mga pinangalanang dimension style gamit ang {{cmd:DIMSTYLE}}: tingnan ang seksyon sa ibaba. Pinapanatili rin ng bawat dimension ang settings na ginamit sa paggawa nito, kaya puwede mo pa ring baguhin ang isang dimension lang sa {{ui:Properties}}.
:::

## Itakda ang laki para sa bagong dimension

Alinman sa dalawang paraan sa ibaba ay binabago lang ang mga dimension na gagawin mo pagkatapos.

### Sa panel na Current settings

1. Pindutin ang {{key:Esc}} para walang napili. Sa tab na {{ui:Model}}, ang kanang panel ay nagbabasa ng {{ui:Current settings}}.
2. Mag-scroll pababa sa panel papunta sa {{ui:New dimensions}}, lampas sa mga row ng layer, kulay, units at {{ui:Layer 0}} (sa maliit na screen, nagsisimula ito sa ibaba ng gilid). I-click ang {{ui:Overall scale}}, i-type ang `50` at pindutin ang {{key:Enter}}.
3. Itakda ang {{ui:Text height}}, {{ui:Arrow size}} at {{ui:Decimals}} sa parehong paraan kung gusto mo ng ibang value.

Kinukumpirma ng status bar ang bawat isa, halimbawa "Overall scale for new dimensions: 50".

### Sa command line

1. I-type ang `DIMSCALE` at pindutin ang {{key:Enter}}.
2. Sa `Enter new value for DIMSCALE <1>`, i-type ang `50` at pindutin ang {{key:Enter}}.

Kinukumpirma ng history ang "DIMSCALE = 50. New dimensions use it; select existing ones to change theirs." (DIMSCALE = 50. Ginagamit ito ng mga bagong dimension; pumili ng mga umiiral para baguhin ang mga iyon.) Ang {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} at {{cmd:DIMEXO}} ay gumagana sa parehong paraan. Pindutin ang {{key:Enter}} sa prompt para panatilihin ang kasalukuyang value.

### Feet at inches sa dimension

Ginagamit ng bagong dimension ang length format ng drawing: itakda ito gamit ang {{ui:Length format}} sa {{ui:Current settings}} o gamit ang {{cmd:UNITS}} (tingnan ang [Feet and inches](topic:units-papers-scales#feet-and-inches-and-fractions)), at ang susunod na dimension ay magbabasang `12'-6 1/2"`. Itinatakda lang ng {{cmd:DIMLUNIT}} ang format ng mga dimension (2 decimal, 3 engineering, 4 architectural, 5 fractional). Para sa dimension na nagawa mo na, piliin ito at piliin ang {{ui:Format}} sa {{ui:Properties}}; sa fractional na format, ang kahon ng {{ui:Fraction}} ang tumatanggap ng power of two (4 = 1/16).

## Mga dimension sa mm, cm, m o km

Sinusukat ng dimension ang haba sa drawing units. Puwede nitong isulat ang haba na iyon sa millimeter, centimeter, metro o kilometro, na may unit pagkatapos ng numero: ang pader na 1250 mm ay magbabasang `1250 mm`, `125 cm`, `1.25 m` o `0.00125 km`.

1. Itakda muna ang {{ui:Units}} ng drawing sa {{ui:Current settings}} (tingnan ang [Units, paper sizes at scales](topic:units-papers-scales#drawing-units)), para malaman ng CadCraft kung ano ang isang drawing unit. Ang drawing na walang units ay binabasa bilang millimeter, at sinasabi ito ng {{cmd:DIMTEXTUNIT}}.
2. Para sa bagong dimension: pindutin ang {{key:Esc}} para walang napili, at sa ilalim ng {{ui:New dimensions}} piliin ang {{ui:Units in the text}}: {{ui:Drawing units}}, `mm`, `cm`, `m` o `km`.
3. Para sa dimension na nagawa mo na: piliin ang mga ito, at sa {{ui:Properties}} › {{ui:Primary units}} piliin ang {{ui:Units in the text}}.

O i-type ang {{cmd:DIMTEXTUNIT}} (`DTU`) at sagutin ng `D`, `MM`, `CM`, `M` o `KM`: kapag may napiling dimension, binabago nito ang mga iyon (isang undo step); kapag walang napili, itinatakda nito ang mga bagong dimension.

Ipinapakita pa rin ng {{ui:Decimals}} ({{cmd:DIMDEC}}) kung ilang decimal place ang lalabas: sa metro at 3 decimal, ang 1234 mm ay magbabasang `1.234 m`. Isinusulat ang text bilang decimal na numero. Sa sheet, sinusukat ng dimension sa paper unit ng sheet (millimeter o inches).

Ang na-save na DWG o DXF ay nagpapanatili ng pinili bilang measurement scale ng dimension (DIMLFAC) at suffix (DIMPOST, ` m`), para pareho ang text na ipinapakita ng ibang program. Kapag binago mo ang {{ui:Units}} ng drawing mamaya, ang mga dimension na nakasulat sa mm, cm, m o km ay muling ia-adjust, para tama pa rin ang haba na sinasabi nila. Ang {{ui:Set by hand (scale or suffix)}} ay nangangahulugang itinakda ang {{ui:Measurement scale}} o suffix ng dimension sa ibang paraan; pumili ng unit para palitan ang mga iyon.

## Baguhin ang mga dimension na nagawa mo na

1. I-click ang isang dimension. Ang heading ng kanang panel ay nagbabasang {{ui:Dimension}}.
2. Nasa mga seksyon ang settings; mag-scroll pababa sa panel para maabot ang mga huli:
   - {{ui:General}}: {{ui:Dimension style}}
   - {{ui:Geometry}}: {{ui:Kind}} at {{ui:Measurement}} (read only)
   - {{ui:Text}}: {{ui:Text override}} at {{ui:Text height}}
   - {{ui:Lines and arrows}}: {{ui:Arrow size}}
   - {{ui:Fit}}: {{ui:Overall scale}}
   - {{ui:Primary units}}: {{ui:Decimals}}
3. I-type ang bagong value at pindutin ang {{key:Enter}}.

Agad na muling iginuguhit ang dimension. Para sa angular na dimension, itinatakda ng {{ui:Decimals (°)}} ang mga decimal ng anggulo.

:::note
Kapag maraming dimension ang napili, ipinapakita ng panel ang mga row na pareho nila, at ang value na nagkakaiba sa kanila ay nagbabasang {{ui:Varies}}. Ang value na i-type mo ay nagbabago sa bawat napiling dimension sa isang hakbang, kaya ibabalik ng isang {{key:Mod+Z}} ang lahat.
:::

## Mga dimension mula sa mga nabuksang drawing

Ang dimension mula sa nabuksang DWG o DXF ay ipinapakita nang eksakto kung paano ito iginuhit ng ibang program. Sabi ng panel nito: "Shown as the program that made it drew it. Change it and CadCraft draws it again in its own style." (Ipinapakita gaya ng pagkaguhit ng program na gumawa nito. Kapag binago mo ito, muling iguguhit ito ng CadCraft sa sarili nitong istilo.) Kapag nagbago ka ng kahit anong value, nag-move ng grip, o nag-move ng dimension, muling iguguhit ito ng CadCraft gamit ang sarili nitong arrowhead at font, gamit ang mga laki na nabasa nito mula sa file.

May ilang dimension na mababasa lang ayon sa pagkaguhit, hindi bilang editable na dimension; ang panel ay nagpapakita ng "Drawn from" at pangalan ng block, at binibilang ng kahong "About this file" ang mga ito.

## Mga karaniwang pagkakamali

- **Hindi nagbago ang anuman sa screen nang baguhin mo ang DIMSCALE.** Para sa bagong dimension ang setting. Pumili ng mga umiiral at baguhin ang {{ui:Overall scale}} sa panel.
- **Mas kaunting digit ang ipinapakita ng decimals kaysa sa itinakda.** Tinatanggal ang trailing zero: sa 2 decimal, ang `1250` at `1250.5` ang lalabas, hindi `1250.00`.
- **Tama ang taas ng text sa paper sa viewport pero mali sa model plot.** Dapat tumugma ang overall scale sa scale na pinaplot mo. Ang plot na Fit to paper ay nagbibigay ng kakaibang scale; pumili ng karaniwang scale sa plot dialog.
- **Mga unit gaya ng mm o m sa text.** Piliin ang {{ui:Units in the text}} (tingnan ang [Mga dimension sa mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Para sa anumang ibang salita pagkatapos ng numero, i-type ito sa override: `<> TYP.`.

## Mga pinangalanang dimension style

I-type ang `DIMSTYLE` (`D`) para buksan ang {{ui:Dimension style manager}}. Nakalista roon ang mga style ng drawing, ilang dimension ang gumagamit ng bawat isa, at alin ang kasalukuyan. Laging nandiyan ang **Standard**.

- {{ui:Set current}}: ginagamit ng bagong dimension ang settings ng style na iyon at dala nito ang pangalan nito.
- {{ui:New…}}: bagong style na nagsisimula bilang kopya ng pipiliin mo.
- {{ui:Modify…}}: ang parehong field ng dimension section sa {{ui:Properties}} (lines at arrows, text, fit, units, alternate units, tolerances). Pindutin ang {{ui:OK}} at magbabago ang style **at bawat dimension na gumagamit nito ay magbabago kasama nito**, setting por setting. Ang setting na binago mo sa isang dimension lang ay nananatili, maliban kung binago rin ng style ang setting na iyon.
- {{ui:Rename…}} at {{ui:Delete}}: hindi mapapalitan ng pangalan o mabubura ang Standard, at hindi rin ang kasalukuyang style o ang style na ginagamit ng mga dimension.
- {{ui:Compare…}}: kung ano ang nagkakaiba sa pagitan ng dalawang style.
- {{ui:Apply to selected}}: pumili muna ng mga dimension; kukunin nila ang settings ng style at ang pangalan nito.

Ginagawa ng `-DIMSTYLE` ang parehong bagay sa command line: `Restore`, `Save` (ang kasalukuyang settings, kasama ang itinype mo gamit ang {{cmd:DIMTXT}} at ang iba pa, sa ilalim ng pangalan), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Sine-save ang mga style sa DWG o DXF (ang dimension style table nito) at binabasa mula sa mga file na binubuksan mo. Hindi sine-save ang *kasalukuyang* style: nagbubukas ang drawing na may Standard bilang kasalukuyan. Pinapanatili ng Standard ang sarili nitong settings habang ibang style ang kasalukuyan.

## Baguhin ang dimension text at extension line

{{cmd:DIMEDIT}} (`DED`) ang gumagana sa mga dimension na pipiliin mo: ang **Home** ay ibinabalik ang text sa lugar na itinakda ng style, ang **New** ay nagta-type ng ibang text (ang `<>` ay kumakatawan sa sukat), ang **Rotate** ay pinapaikot ang text, ang **Oblique** ay pinapahilig ang extension line ng linear at aligned na dimension sa anggulong ita-type mo (pindutin ang {{key:Enter}} para sa wala). Ang {{cmd:DIMTEDIT}} ay inilalipat ang text sa **[Kaliwa (L)]**, **[Kanan (R)]** o **[Sentro (C)]** ng dimension line, o pinapaikot ito (**[Anggulo (A)]**), o ibinabalik sa **Home**. Laging nasa dimension line ang text: hindi ito maha-hila papunta sa malayang lugar.

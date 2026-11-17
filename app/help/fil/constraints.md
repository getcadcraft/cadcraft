---
title: I-constrain ang drawing
summary: Panatilihing pahalang ang mga linya, magkadikit ang mga dulo at nakapirmi ang mga sukat gamit ang geometric at dimensional na constraint, at hayaang sumunod ang drawing kapag binago mo ang isang sukat.
keywords: constraint, constraints, parametric, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, mga degree of freedom, ganap na naka-constrain
from: f8f21fa4
---

## Ano ang gagawin mo

Isang plate na ang lapad ay binabago mo sa isang lugar lang: nananatiling parisukat ang mga gilid nito, nananatili sa lugar ang isang sulok, at ang taas nito ay palaging kalahati ng lapad.

Gumagana ang mga constraint sa linya, polyline, bilog, arko at punto sa tab na {{ui:Model}}. Bawat constraint na idagdag mo ay isang undo step.

## Iguhit at i-constrain ang outline

1. I-type ang `REC` at pindutin ang {{key:Enter}}. I-type ang `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. I-type ang `AUTOCONSTRAIN` at pindutin ang {{key:Enter}}. I-type ang `ALL`, {{key:Enter}}, tapos {{key:Enter}} ulit.

   Sasabihin ng history na "4 constraints applied". May lalabas na maliliit na kahon na may **H** at **V** sa tabi ng mga gilid: ito ang mga constraint bar.
3. I-type ang `GCFIX` at pindutin ang {{key:Enter}}. Mag-click malapit sa ibabang kaliwang sulok. May lalabas na kahon na may ⊕: nananatili roon ang sulok na iyon.

Ang `AUTOCONSTRAIN` ay nagdaragdag ng coincident constraint kung saan halos nagtatagpo ang mga dulo, at ng horizontal o vertical na constraint kung saan halos pahalang o patayo ang mga linya. I-type ang `S` sa prompt nito para baguhin kung gaano kalapit (0.05 drawing unit at 1° ang panimulang halaga).

## Idagdag ang mga sukat

1. I-type ang `DCHORIZONTAL` at pindutin ang {{key:Enter}}.
2. Mag-click malapit sa ibabang kaliwang sulok, tapos malapit sa ibabang kanang sulok.
3. Mag-click sa ibaba ng rectangle para sa dimension line.
4. Ipapakita ng prompt ang `Dimension text <d1=100>`. I-type ang `width=120` at pindutin ang {{key:Enter}}.

   Nasa 120 na ang lapad ng rectangle, at ang label ay nagsasabing `width=120`.
5. I-type ang `DCVERTICAL` at pindutin ang {{key:Enter}}, i-type ang `O` at pindutin ang {{key:Enter}}, tapos mag-click sa kanang gilid.
6. Mag-click sa kanan nito, i-type ang `width/2` at pindutin ang {{key:Enter}}.

   Ang taas nito ay 60. Ang label ay nagsasabing `fx: d1=width/2`: may expression na nagtutulak dito.

Ipinapakita na ng history na ganap nang naka-constrain ang outline. Para baguhin ang laki nito, baguhin ang `width` (tingnan ang [Gumamit ng parameter at equation](topic:parameters)), o i-double-click ang label na `width=120`, i-type ang bagong value at piliin ang {{ui:Apply}}.

## Paggalaw ng mga naka-constrain na bagay

Ang Move, Rotate, Scale, grips at ang Properties panel ay pinananatili ang mga constraint: ang inilipat mo ay nananatiling nakahawak, at ang iba ay sumusunod. Kapag hindi makasunod ang mga constraint, hindi itinutuloy ang edit at sasabihin ng history kung bakit, halimbawa "Not done: the constraints hold that object where it is" (Hindi tapos: pinananatili ng mga constraint ang bagay na iyon sa kinalalagyan nito). Ang pagbura ng bagay ay binubura rin ang mga constraint nito.

## I-mirror at i-trim ang mga naka-constrain na bagay

- {{cmd:MIRROR}} ay kinokopya ang mga constraint sa pagitan ng mga bagay na i-mirror papunta sa mga kopya. Ang mga side (aling direksyon hinahawakan ng tangent, at saang panig sinusukat ang distansya) ay kinukuwenta ulit para sa na-mirror na kopya, at ang mga kopyang dimension ay nakakakuha ng sarili nilang pangalan, gaya ng ginagawa ng paste. Kapag may `Erase source objects` na `Y`, mananatili ang mga constraint sa mga na-mirror na bagay. Sasabihin ng history kung ilan ang nakasama.
- {{cmd:TRIM}} ay pinananatili ang constraint ng linya o arko sa natitira: ang constraint sa isang dulo ay mapupunta sa piraso na may dulong iyon pa, ang panuntunan tungkol sa direksyon ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Parallel}}, {{ui:Perpendicular}}) ay nananatili sa bawat piraso, at ang dimension sa pagitan ng dalawang panlabas na dulo ay patuloy na sumusukat sa mga iyon. Mawawala ang mga constraint na humahawak sa bahaging naputol, o haba na binago ng cut ({{ui:Equal}}, ang sweep ng arko). Pinananatili ng trimmed na bilog ang center at radius constraint nito. Nawawala ang mga constraint ng trimmed na polyline.

## Mga constraint

| Command | Pinananatili |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | isang linya o segment na pahalang o patayo (`2P`: dalawang punto na pahalang o patayo) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dalawang linya na parallel, parisukat o nasa iisang linya |
| {{cmd:GCCOINCIDENT}} | dalawang punto na magkadikit; `O`: punto sa linya, bilog o arko |
| {{cmd:GCTANGENT}} | linya at bilog o arko, o dalawa sa mga ito, na magkadikit |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dalawang bilog o arko sa iisang sentro; dalawang haba o dalawang radius na magkapareho |
| {{cmd:GCSYMMETRIC}} | dalawang punto, linya o bilog na naka-mirror sa isang linya |
| {{cmd:GCFIX}} | isang punto (mag-click malapit dito) o buong bagay (`O`) kung nasaan ito |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | isang distansya |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | isang radius, isang diameter, isang anggulo sa pagitan ng dalawang linya, o anggulo ng isang arko |

Ang {{cmd:GEOMCONSTRAINT}} at {{cmd:DIMCONSTRAINT}} ay nagtatanong kung alin; ang {{ui:Constrain}} at {{ui:Dimension}} sa grupong {{ui:Parametric}} ang nagpapatakbo sa mga ito, at ang {{ui:More}} doon ang naglilista ng bawat isa. Kung saan ka mag-click ang pumipili ng bahagi: ang click malapit sa dulo, sa gitna o sa center ay kumukuha sa puntong iyon; ang click sa polyline ay kumukuha sa segment sa ilalim nito. Mananatili ang unang bagay at ililipat ang ikalawa para magtagpo sila.

Ang constraint na sumasalungat sa iba, o walang naidaragdag dahil naipahihiwatig na ito ng iba, ay tinatanggihan na may mensahe at walang gumagalaw.

## Tingnan, piliin at alisin

- I-click ang kahon sa constraint bar (o ang coincident square, o ang dimension label) para piliin ang constraint na iyon; pangalan nito ang lalabas sa history. Pindutin ang {{key:Delete}} para alisin ito.
- {{cmd:DELCONSTRAINT}} ay inaalis ang bawat constraint sa mga bagay na pipiliin mo.
- {{cmd:CONSTRAINTBAR}}: ang `S` ay ipinapakita ang lahat ng bar, ang `H` ay itinatago ang mga ito; pumili muna ng mga bagay para maipakita o maitago ang sa kanila. Ang {{ui:More}} ay may {{ui:Show constraint bars}} at {{ui:Hide constraint bars}}.
- {{cmd:DCDISPLAY}} ay nagpapakita o nagtatago ng mga dimensional constraint. Hindi sila kailanman naipi-plot.
- {{cmd:DCCONVERT}} ay ginagawang dimensional constraint ang mga dimension na iginuhit sa linya, bilog at arko.

:::note
Kung gumamit ka na ng parametric drawing sa AutoCAD, pareho ang mga command name at prompt. Ang mga constraint at parameter ay sine-save sa DWG at DXF file sa anyong binabalewala ng ibang program; tingnan ang [Mga File](topic:files#constraints-in-files).
:::

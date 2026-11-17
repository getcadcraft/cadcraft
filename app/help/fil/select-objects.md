---
title: Pumili ng mga object
summary: Pumili ng mga object isa-isa, gamit ang window o crossing, bago o habang tumatakbo ang command, at alisin ang mga object sa selection.
keywords: select, selection, window, crossing, noun-verb, pick, all, last, previous, fence, remove, add, tab, cycle, magkapatong, qselect, quick select, filter, select similar, selectsimilar, shift, deselect, ctrl+a, pickfirst
from: 676508c7
---

## Ano ang matututunan mo

Paano piliin ang mga object na gagawan ng command. May dalawang paraan ang CadCraft, at pareho silang maayos:

- **Piliin muna, saka ang command** (noun-verb). Pumili ng mga object, saka i-type ang `M` para sa Move. Tinatanggap ng command ang pinili mo at dumidiretso sa susunod nitong tanong.
- **Command muna, saka pumili** (verb-noun). I-type ang `M`; hihingin ng command ang `Select objects:`; pumili ka, saka pindutin ang {{key:Enter}}.

## Pumili ng isang object sa bawat pagkakataon

1. Kapag walang tumatakbong command, i-click ang isang linya. Mahahighlight ito at lalabas ang grip nito (maliliit na parisukat). Ipinapakita ng kanang panel ang mga property nito.
2. I-click ang ibang object. Idinadagdag ito sa selection.
3. Hawakan ang {{key:Shift}} at i-click ang isang napiling object. Inaalis ito sa selection.
4. Pindutin ang {{key:Esc}}. Walang napili.

## Window at crossing

I-click minsan sa walang laman na espasyo, gumalaw, at i-click muli: isang rectangle. Ang pagpindot at pag-drag ay gumuguhit ng freehand na lasso sa halip, na may parehong dalawang uri (tingnan ang [Lasso selection](topic:lasso-selection); maaaring gawing rectangle ng Settings ang drag). Depende sa direksyon ng galaw kung anong mga object ang makukuha mo:

| Gumagalaw ka | Kahon | Pumipili ng |
|---|---|---|
| Kaliwa papuntang kanan | Window | Tanging mga object na **ganap na nasa loob** ng kahon |
| Kanan papuntang kaliwa | Crossing | Mga object na nasa loob ng kahon **at** mga object na nadadaanan nito |

1. Gumuhit ng ilang magkakapatong na linya at bilog.
2. I-click ang walang laman na espasyo sa kaliwa ng ilang object, gumalaw pakanan, at i-click muli. Tanging ang mga object na ganap na nasa loob ang napipili.
3. Pindutin ang {{key:Esc}}.
4. I-click ang walang laman na espasyo sa kanan, gumalaw pakaliwa sa ibabaw ng ilang object, at i-click muli. Lahat ng nahahawakan ng kahon ay napipili.
5. Hawakan ang {{key:Shift}} at gumuhit ng kahon o lasso sa ibabaw ng ilang napiling object. Lalabas sila sa selection.

## Pumili, saka magpatakbo ng command

1. Pumili ng dalawang bilog.
2. I-type ang `M` at pindutin ang {{key:Enter}}.

Ipinapakita ng history ang `2 found`, at dumidiretso ang prompt sa `Specify base point`. Tapusin ang move (tingnan ang [Move, copy, rotate, scale and mirror](topic:modify-objects)).

Kapag natapos ang command, nabubura ang selection, para magsimulang bago ang susunod na command.

Mga command na tumatanggap ng selection sa ganitong paraan: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} at {{cmd:LIST}}. Ang {{cmd:OFFSET}}, {{cmd:FILLET}} at {{cmd:CHAMFER}} ay laging humihingi na pumili ka ng mga object isa-isa; ang {{cmd:TRIM}} at {{cmd:EXTEND}} ay tumatanggap ng pick o path na idini-drag mo sa mga piraso (tingnan ang [Trim and extend](topic:trim-and-extend)).

## Magpatakbo ng command, saka pumili

1. Siguraduhing walang napili ({{key:Esc}}).
2. I-type ang `E` at pindutin ang {{key:Enter}}. Ang prompt ay magsasabing `Select objects:`.
3. I-click ang mga object, o i-drag ang mga window at crossing. Binibilang ng history ang bawat pick (`1 found`, `3 found`).
4. Pindutin ang {{key:Enter}}, pindutin ang {{key:Space}} o mag-right-click para tapusin ang pagpili.

Nabubura ang mga object at sinasabi ng history kung ilan.

Sa prompt na `Select objects:`, maaari ka ring mag-type ng:

- `ALL`, saka {{key:Enter}}: bawat object na maaari mong i-edit sa bukas na tab.
- `L` (o `LAST`), saka {{key:Enter}}: ang pinakabagong iginuhit na object.
- `P` (Previous): ang mga object na ginawan ng huling command, kung nandoon pa.
- `F` (Fence): i-click o i-type ang mga punto sa kahabaan ng linya; idinadagdag ang bawat object na tinatawid ng linya. Pindutin ang {{key:Enter}} para tapusin ang fence; binabawi ng `U` ang huling punto nito.
- `W` (Window) o `C` (Crossing): dalawang sulok, alinmang direksyon ang i-drag mo.
- `R` (Remove): mula ngayon, ang mga click, window at fence ay mag-aalis ng mga object. Ang prompt ay magiging `Remove objects:`. Ibinabalik ito ng `A` (Add) sa dati.
- `?`: ang listahan ng mga ito sa history.

Hindi ipinapakita ang mga opsyong ito sa prompt, gaya ng sa AutoCAD.

## Pumili ng isa sa ilang magkakapatong na object

Kapag magkakapatong o magkadikit ang mga object, ang click ay kumukuha ng pinakamalapit. Para makuha ang iba:

1. Ihinto ang pointer sa ibabaw ng lugar.
2. Pindutin ang {{key:Tab}}. Mahahighlight ang susunod na object doon, at sinasabi ng status bar kung alin ("2 of 3: Line on layer Walls").
3. Pindutin muli ang {{key:Tab}} hanggang ma-highlight ang gusto mo, saka i-click nang hindi gumagalaw.

Nagsisimula ulit kapag gumalaw ang pointer. Gumagana ito kapag walang tumatakbong command, sa `Select objects:`, at saanman humihingi ng command ng isang object na pipiliin.

## Pumili ayon sa patakaran: Quick select

Ang {{cmd:QSELECT}} (`QS`, o {{ui:Edit}} › {{ui:More}} › {{ui:Quick select}}) ay pumipili ng bawat object na tumutugma sa isang patakaran, gaya ng bawat bilog na may radius na mas mababa sa 50, o bawat block reference na pinangalanang DOOR-900.

1. Buksan ang {{ui:Quick select}}.
2. Piliin ang {{ui:Object type}} (binibilang ng listahan ang bawat uri), saka ang {{ui:Property}}: {{ui:Layer}}, {{ui:Color}}, at para sa ilang uri, {{ui:Length}}, {{ui:Radius}}, {{ui:Area}}, {{ui:Text height}}, {{ui:Text contents}}, {{ui:Block name}} o {{ui:Hatch pattern}}.
3. Piliin ang {{ui:Operator}} at {{ui:Value}}. Tumutugma ang `*` gamit ang wildcard (`DOOR-*`); kinukuha ng {{ui:Select all}} ang bawat object ng uri. Ipinapakita ng bilang sa ibaba kung ilan ang tumutugma habang pumipili ka.
4. {{ui:How to apply}}: isama ang mga tumugma, o ang lahat ng iba. Ang {{ui:Apply to}} {{ui:Current selection}} ay nagpapaliit sa napili mo; idinadagdag ng {{ui:Append to current selection}} ang sa iyo rito.
5. I-click ang {{ui:Select}}. Saka patakbuhin ang command na gusto mo: gagamitin nito ang selection.

## Pumili ng katulad

Pumili ng isa o higit pang object at i-type ang {{cmd:SELECTSIMILAR}} (`SIM`), o piliin ang {{ui:Edit}} › {{ui:More}} › {{ui:Select similar}}. Bawat object ng parehong uri, sa parehong layer at may parehong kulay, ang napipili; ang block reference ay kailangan din ng parehong block, ang hatch ay parehong pattern. I-type ang `SE` sa `Select objects` prompt nito para piliin kung ano ang dapat magtugma.

## Pumili ngayon, gamitin mamaya

I-type ang `SELECT` at pindutin ang {{key:Enter}}, pumili ng mga object gamit ang alinman sa mga paraan sa itaas, at pindutin ang {{key:Enter}}. Mananatili silang napili para sa susunod na command, at muli silang kukunin ng `P` sa susunod na `Select objects:` na prompt.

## Piliin ang lahat

Kapag walang tumatakbong command, pindutin ang {{key:Mod+A}}, o piliin ang {{ui:Select all}} sa {{ui:Edit}} › {{ui:More}} menu ng toolbar, para piliin ang bawat object na maaari mong i-edit sa bukas na tab. Kapag may na-type ka sa command line, pinipili ng {{key:Mod+A}} ang text na iyon: pindutin muna ang {{key:Esc}} para burahin ito. Sa prompt na `Select objects:`, i-type ang `ALL`. Ang {{ui:Select none}} sa parehong menu, o ang {{key:Esc}}, ay nagbubura ng selection.

:::tip
Kung mas gusto mong palitan ng bawat click ang selection (at idagdag ito ng {{key:Shift}}), itakda ang {{ui:Clicking objects}} sa {{ui:Replaces the selection}} sa [CadCraft settings](topic:settings).
:::

## Ano ang hindi mapipili

- Mga object sa layer na **off**, **frozen** o **locked**. Nananatiling nakikita ang mga naka-lock na object, at maaari ka pa ring mag-snap sa mga ito, pero hindi mo sila mapipili o mababago.
- Sa sheet tab, ang model na nakikita sa loob ng viewport. Pumipili ka ng sariling object ng sheet (ang title block, mga tala, mga frame ng viewport). Para i-edit ang model, pumunta sa {{ui:Model}} tab.

## Mabilis na burahin

Pumili ng mga object, saka pindutin ang {{key:Delete}} (o {{key:Backspace}} kapag walang cursor ang command line). Sa Mac keyboard, gumagana ang key na may label na delete kapag nag-click ka na sa drawing; habang nasa command line ang cursor, pindutin nang sabay ang fn at delete. Pinapatakbo nito ang {{cmd:ERASE}} sa selection. Kung walang nangyari, may na-type ka sa command line: pindutin ang {{key:Esc}}, o i-type ang `E` at pindutin ang {{key:Enter}} sa halip.

## Mga karaniwang pagkakamali

- **Masyadong kaunti ang nakuha ng window.** Nag-drag ka mula kaliwa pakanan, na tanging ang ganap na nasa loob lang ang kinukuha. I-drag mula kanan pakaliwa para sa crossing.
- **Ang click sa walang laman na espasyo ay nagsimula ng kahon.** Ang isang click sa walang laman na espasyo ay nagsisimula ng window; ang pangalawang click ang tumatapos nito. Pindutin ang {{key:Esc}} o mag-right-click para bitawan ito.
- **Ang click sa walang laman na espasyo ay binitawan ang selection.** Ganoon nga, maliban kung hawak mo ang {{key:Shift}}. Para mapanatili ang selection sa ganoong click at burahin lang gamit ang {{key:Esc}}, itakda ang {{ui:Clicking an empty spot}} sa {{ui:Keeps the selection}} sa [CadCraft settings](topic:settings#clicking-an-empty-spot).
- **Ginamit ng command ang mga object na hindi mo layunin.** May napili pa noong sinimulan mo ito. Pindutin ang {{key:Esc}} bago ang command para magsimula nang walang napili.
- **Walang napili pagkatapos ng command.** Sinadya iyon: binubura ng tapos na command ang selection.

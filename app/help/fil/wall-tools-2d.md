---
title: Mga hugis, hiwa, offset at lock ng pader para sa 2D na pader
summary: Gumuhit ng pader bilang rectangle, polygon at arko, hatiin at pagsamahin muli ang mga ito, ilipat ayon sa dimension, at i-lock ang isang pader sa isa pa o sa linya ng grid. Parehong tool ng pader ng BimCraft.
keywords: wall, walls toolbar, wall buttons, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, join style, mitre, butt, square off, padlock, grip, drag end, rotate, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, join, disallow join, lock, grid line, split, gap, offset, location line
from: 49044181
---

Gumagana ang mga tool na ito sa 2D na pader mula sa `WALL` (tingnan ang "Draw smart walls, doors and windows in 2D"). Gumagamit sila ng parehong patakaran ng mga tool ng pader sa BimCraft, kaya pareho ang kilos ng pader sa dalawa.

## Nasaan ang mga tool

- Sa toolbar, ang grupong {{ui:Walls}} ay may {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} at {{ui:Offset}}. Ang menu nitong {{ui:More}} ay may bawat ibang tool ng pader, kasama ang icon nito.
- Sa mga estilo ng ribbon menu, ang tab na {{ui:Walls}} ay may mga panel na {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} at {{ui:Join}}.
- Sa layout, ipinapakita ng mga row ng tool at ng toolbox ang parehong grupong {{ui:Walls}}.
- Puwede mo ring i-type ang alinmang command na nakapangalan sa ibaba.

## Nakaimbak ang mga join

Kapag tumama ang dulo ng pader sa ibang pader, sine-save ng CadCraft ang join na iyon kasama ng parehong pader. Hindi na nito kinakalkula muli ang mga join mula sa kung saan nagkataong nakalagay ang mga dulo. Kaya:

- Ang mga pader na naka-join sa pader na ginalaw mo ay sumusunod dito at nananatiling naka-join. Dumudulas ang mga dulo nila sa sarili nilang linya, kaya walang umiikot.
- I-drag ang isang dulo ng pader sa pamamagitan ng grip nito at ang pader na naka-join doon ay nananatili rin sa direksyon nito. Dumudulas ang dulo nito sa sarili nitong linya para magtagpo sa na-drag na pader, kaya ang na-drag na dulo ay tumatama sa linyang iyon, hindi palagi sa ilalim ng cursor. Ipinapakita ng preview kung saan. Ang pader na tumatama sa na-drag na pader ay sumusunod sa sarili nitong linya. Ang pag-drag ng dulo nang diretso sa kahabaan ng pader ay nagbabago sa haba nito, at ang pader na naka-join doon ay gumagalaw kasama nito.
- Ang `ROTATE` sa pader na naka-join ay gumagana rin nang ganito: ang mga dulo ng kapitbahay nito ay dumudulas sa sarili nilang linya papunta sa ikinikot na pader.
- Para ilipat ang isang sulok, piliin ang parehong pader na nagtatagpo roon at i-drag ang grip sa sulok. Parehong nananatili sa sulok ang dalawang pader at parehong umiikot. Ang mga pader na mas malayo ay nananatili kung nasaan sila.
- Pindutin ang {{key:Alt}} kapag ini-click mo ang bagong puwesto ng grip para sadyang sirain ang mga join: pupunta ang pader kung saan mo ito inilagay at walang susunod.
- Kung ang isang drag ay magpapaikot sa naka-join na pader pabalik sa sarili nitong malayong dulo, tinatanggihan ito at walang nagbabago.
- Ang pader na iginuhit mo gamit ang {{ui:Disallow joins}} (`D` sa `WALL`), o pinatay sa Properties ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), ay nananatiling malaya sa dulong iyon, kahit dumadampi ito sa ibang pader, hanggang payagan mo muli.
- Ang `WALLDISJOIN` ({{ui:Disallow join}} sa grupong {{ui:Walls}}) ay gumagawa ng pareho sa isang click: i-click ang pader malapit sa isang dulo para pigilan ang mga join sa dulong iyon, at i-click muli para payagan.
- Ang mas lumang drawing ay wala pang nakaimbak na join. Ang unang pagbabago na gagawin mo ay hahanapin ang mga ito nang minsan, mula sa kung paano nakatayo ang mga pader bago ang pagbabago, at ise-save ang mga ito. Ginagawa ito ng `WALLJOINS` nang agaran.
- Dinadala ng mga file na DWG at DXF ang mga join sa loob ng bawat pader. Binabasa ito ng CadCraft pabalik gaya ng na-save. Ang program na walang extended data ay ipinapakita ang mga pader bilang karaniwang block at inaalis ang mga join, at ang join na ang mga pader ay ginalaw sa ibang program ay inaalis sa susunod mong pagbabago sa alinman sa mga pader.

## Estilo ng join ng isang sulok

Ang sulok kung saan nagtatagpo ang dalawang pader nang dulo sa dulo ay iginuguhit bilang mitre maliban kung pipili ka ng ibang estilo.

- `WALLJOINSTYLE` ({{ui:Join style}} sa grupong {{ui:Walls}}): i-click ang sulok. Ang bawat click ay pumupunta sa susunod na estilo: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, pagkatapos {{ui:Mitre}} muli. I-type ang `T` para palitan kung alin sa dalawang pader ang dumadaan sa sulok na na-click mo huli. Pindutin ang {{key:Enter}} para tapusin. Iisang hakbang ng undo ang isang takbo ng command.
- {{ui:Butt}}: dumadaan ang isang pader hanggang sa malayong mukha ng isa pa, at ang isa ay humihinto sa gilid nito. {{ui:Square off}}: pareho, pero ang pader na dumadaan ay nagtatapos nang parisukat sa sarili nito. Sa tamang anggulo, magkamukha ang dalawa.
- Sa Properties ng isang pader: {{ui:Join style at start}}, {{ui:Join style at end}}, at {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- Naka-save ang estilo kasama ng parehong pader at dinadala sa mga DWG at DXF file. Ang kopya ng pader ay nagsisimula nang wala nito.
- Walang estilong pipiliin ang T join: ang pader na tinatamaan sa gilid nito ang dumadaan. Ang sulok kung saan tatlo o higit pang pader ang nagtatagpo ay nananatiling mitre. Gayundin ang napakatalim na sulok (mas mababa sa mga 30 degree) at dalawang pader sa iisang linya.

## Gumuhit ng mga hugis ng pader

Bawat isa ay gumagawa ng mga pader sa iisang hakbang ng undo, na may mga naka-join na sulok. Sa `WALL`, itinatakda ng `O` ang placement offset (gaano kalayo sa kaliwa ng mga click mo pupunta ang pader) at ang `D` ay pinapatay ang pagsasama para sa mga pader na susunod mong iguguhit.

- `WALLRECT` (`WR`): dalawang magkabilang sulok, gaya ng `RECTANG`.
- `WALLROT`: ang unang gilid, pagkatapos kung gaano kalayo lalabas ang kabilang gilid, para sa rectangle sa anumang anggulo.
- `WALLPOLY` (`WP`): bilang ng gilid (3 hanggang 64), ang gitna, `I` para inscribed o `C` para circumscribed, pagkatapos ang radius, gaya ng `POLYGON`: i-click ito, o i-type (ang na-type na radius ay tumatakbo patungo sa pointer, o sa X kapag nasa gitna pa rin ang pointer).
- `WALLARC` (`WARC`): gitna, simula, dulo. Binabaligtad ng `D` ang arko.
- `WALLTAN`: i-click malapit sa dulo ng pader, pagkatapos ang dulo ng arko, na umaalis sa kahabaan ng pader na iyon.
- `WALLPICK`: i-click ang linya o polyline at sabihin kung kukunin din ang mga linyang naka-join dito.
- `WALLTRACE`: i-click sa loob ng saradong area ng mga linya at pader para ilagay ang pader sa paligid ng pinakamaliit nito.

Tuwid ang mga pader sa plano, kaya ang arko ay iginuguhit bilang maiikling tuwid na pader na 15 degree bawat isa. Nagdurugtong ang mga ito gaya ng anumang sulok.

## Hiwain ang mga pader

- `WALLSPLIT` (`WS`): i-click ang pader, pagkatapos ang punto. Hinihiwa ng `C` kung saan tumatawid ang ibang pader dito, nag-iiwan ng puwang sa pagitan ng mga bahagi ang `G`, at ginagawang malaya ang mga dulo ng hiwa ang `F` sa halip na naka-join. Pinananatili ng unang bahagi ang puwesto ng pader sa drawing, at sumasama sa bahagi nila ang mga pinto at bintana. Tinatanggihan ang hiwang dumadaan sa pinto o bintana.
- `WALLSPLITGAP` ({{ui:Split with gap}}): ang parehong hati, pero hihingi muna ito ng puwang.
- `WALLDELSEG`: i-click ang pader, pagkatapos ang dalawang dulo ng bahaging buburahin.
- `WALLREJOIN`: i-click ang dalawang bahagi ng iisang pader para gawin itong muling iisang pader.

## Ilipat ang mga pader ayon sa distansya

- `WALLDIM` ({{ui:Edit by dimension}}): i-click ang linear o aligned na dimension na tumatakbo mula sa isang pader patungo sa isa pa, pagkatapos i-type ang bagong halaga. Ang pader sa malayong dulo ay gumagalaw nang parisukat sa sarili nito, ang pader sa unang dulo ay nananatili, at sumusunod ang mga pader na naka-join dito. Gumagalaw ang malayong punto ng dimension kasama ng pader nito, kaya ipinapakita ng dimension ang halagang na-type mo.
- `WALLOFFSET` (`WO`): i-click ang pader, pagkatapos ang gilid kung saan ililipat (ang `D` ay nagta-type ng distansya, ang `C` ay gumagawa ng kopya sa halip).
- `WALLSTRETCH`: isang window sa paligid ng mga dulo ng pader, pagkatapos ang base point at ang pangalawang punto.
- Sa Properties, ang na-type na {{ui:Length}} ay nagpapanatili ng simula at dinadala kasama ang pader na naka-join sa malayong dulo, at ang bagong {{ui:Thickness}} ay lumalaki palayo sa {{ui:Location line}} na pinili mo (ang kaliwang mukha, ang kanang mukha, o ang gitna).

## Dimension sa pagitan ng mga gitnang linya ng pader

Hindi iginuguhit ang gitnang linya ng pader, pero nahahanap ito ng object snap. Kapag nakabukas ang object snap ({{key:F3}}), ilagay ang pointer sa gitna ng kapal ng pader: ang marker ay nagbabasa ng `Wall center: endpoint` o `Wall center: midpoint`, at ipinapakita ang gitnang linya bilang dashed na linya habang nasa rito ang marker. Kapag naka-on ang {{ui:Perpendicular}} o {{ui:Nearest}} sa listahan ng object snap, gumagana rin ang mga iyon sa gitnang linya.

1. Simulan ang `DIMLINEAR` (o `DIMALIGNED`).
2. I-click ang unang pader kung saan nagbabasa ang marker ng `Wall center: midpoint` o `Wall center: endpoint`.
3. I-click ang ikalawang pader sa parehong paraan, pagkatapos i-click kung saan pupunta ang linya ng dimension.
4. Para baguhin ang distansya, simulan ang `WALLDIM`, i-click ang dimension at i-type ang bagong halaga. Ang ikalawang pader ang gumagalaw.

Gumagana ang snap ng gitnang linya sa bawat command na humihingi ng punto.

## I-lock ang mga pader

Nananatili ang lock sa pader sa file. Kapag ginalaw mo ang isang naka-lock na pader, susunod ang kabila. Kapag ang iisang pagbabago ay gumagalaw sa parehong pader nang magkaiba, tinatanggihan ito at walang nagbabago.

- `WALLHOLD`: i-lock ang isang pader sa isa pang pader. Inilalagay muna ito ng `A` sa linya ng kabilang pader, pinapanatili ito ng `K` sa distansyang mayroon ito.
- `WALLHOLDDIM`: i-lock ang distansya ng dalawang magkaparehong pader.
- `WALLGRID`: i-lock ang pader sa linya ng grid (isang linya sa grid layer na may tag nito sa text sa isang dulo), alinman sa kahabaan nito o may isang dulo rito. Ang pader na naka-lock sa kahabaan ng linya ay nananatili sa distansyang mayroon ito mula rito. Ilipat ang linya ng grid gamit ang `GRIDMOVE` at buong susunod ang pader, kasama ang mga naka-join nitong pader. Ang pader na nasa kahabaan ng linya ng grid ay buong gumagalaw kasama nito kahit walang lock, at ang pader na dumadampi lamang sa linya ay hinihila ng dulong iyon.
- Ang `WALLHOLDS` ay naglilista ng mga lock. Inaalis ng `WALLUNHOLD` ang mga lock ng isang pader.
- Bawat lock ay nagpapakita ng maliit na kandado sa plano: sa tabi ng gitna ng naka-lock na pader, o sa tabi ng dulong naka-lock sa linya ng grid. I-click ang kandado para alisin ang lock na iyon.

## Ano ang wala pa rito

Ginagamit ng mga lock ang mga gitnang linya ng mga pader. Walang layer ang mga pader dito, kaya walang priyoridad ng layer sa isang junction, at hindi kumukurba ang mga pader (tingnan ang mga arko sa itaas). Walang sumubok pa ng mga tool na ito sa malaking drawing, at hindi pa sila nasuri sa ibang CAD program.

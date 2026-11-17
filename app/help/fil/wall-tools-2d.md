---
title: Mga hugis, hiwa, offset at lock ng 2D na pader
summary: Gumuhit ng mga pader bilang rectangle, polygon at arko, hatiin at pagdugtungin muli ang mga ito, ilipat ayon sa dimension, at i-lock ang isang pader sa isa pa o sa isang grid line. Pareho ang mga tool sa mga pader ng BimCraft.
keywords: wall, walls toolbar, wall buttons, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo ng pagdugtong, mitre, butt, square off, padlock, grip, i-drag ang dulo, i-rotate, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, join, huwag payagan ang pagdugtong, lock, grid line, hatiin, puwang, offset, linya ng lokasyon
from: f41e7433
---

Gumagana ang mga tool na ito sa mga 2D na pader mula sa `WALL` (tingnan ang "Gumuhit ng matatalinong pader, pinto at bintana sa 2D"). Pareho ang mga patakaran nila sa mga tool ng pader sa BimCraft, kaya magkatulad ang kilos ng pader sa dalawa.

## Nasaan ang mga tool

- Sa toolbar, ang pangkat na {{ui:Mga pader}} ay may {{ui:Pader}}, {{ui:Rectangle}}, {{ui:Hatiin}} at {{ui:Offset}}. Ang menu nitong {{ui:Higit pa}} ay may bawat iba pang tool ng pader, kasama ang sariling icon nito.
- Sa mga istilo ng ribbon menu, ang tab na {{ui:Mga pader}} ay may mga panel na {{ui:Gumuhit ng pader}}, {{ui:I-cut}}, {{ui:Itakda at baguhin}}, {{ui:Hawakan}} at {{ui:Join}}.
- Sa isang layout, ang mga row ng tool at ang toolbox ay nagpapakita ng parehong pangkat na {{ui:Mga pader}}.
- Puwede ka ring mag-type ng alinmang command na nakalista sa ibaba.

## Nakaimbak ang mga pagdugtong

Kapag ang dulo ng pader ay tumama sa ibang pader, sine-save ng CadCraft ang pagdugtong na iyon kasama ng parehong pader. Hindi na nito muling kinukuwenta ang mga pagdugtong mula sa kinaroroonan ng mga dulo. Kaya:

- Ang mga pader na nakadugtong sa pader na inilipat mo ay sumusunod dito at nananatiling nakadugtong. Dumudulas ang kanilang mga dulo sa sarili nilang linya, kaya walang umiikot.
- I-drag ang isang dulo ng pader sa pamamagitan ng grip nito at pinapanatili rin ng pader na nakadugtong doon ang direksyon nito. Dumudulas ang dulo nito sa sarili nitong linya upang sumalubong sa pader na hinila, kaya ang dulong hinila ay napupunta sa linyang iyon, hindi palagi sa ilalim ng cursor. Ipinapakita ng preview kung saan. Ang pader na tumatama sa pader na hinila ay sumusunod sa sarili nitong linya. Ang pag-drag ng dulo nang diretso sa kahabaan ng pader ay nagbabago sa haba nito, at ang pader na nakadugtong doon ay gumagalaw kasama nito.
- Ang `ROTATE` sa nakadugtong na pader ay gumagana nang magkatulad: ang mga dulo ng mga kapitbahay nito ay dumudulas sa sarili nilang linya papunta sa pader na na-rotate.
- Para ilipat ang isang sulok, piliin ang parehong pader na nagtatagpo roon at i-drag ang grip sa sulok. Nananatili sa sulok ang parehong pader at parehong umiikot. Ang mga pader na mas malayo ay nananatili sa dati nilang puwesto.
- Pindutin nang matagal ang {{key:Alt}} kapag ini-click mo ang bagong puwesto ng grip para sadyang putulin ang mga pagdugtong: mapupunta ang pader kung saan mo ito inilagay at walang susunod.
- Kapag ang pag-drag ay magpapaikot sa nakadugtong na pader pabalik sa sarili nitong malayong dulo, tinatanggihan ito at walang nagbabago.
- Ang pader na iginuhit mo gamit ang {{ui:Huwag i-join}} (`D` sa `WALL`), o i-off sa Properties ({{ui:Huwag i-join sa simula}}, {{ui:Huwag i-join sa dulo}}), ay nananatiling malaya sa dulong iyon, kahit tumama ito sa ibang pader, hanggang payagan mo ulit.
- Ang `WALLDISJOIN` ({{ui:Huwag payagan ang pagdugtong}} sa pangkat na {{ui:Mga pader}}) ay gumagawa ng pareho sa isang click: i-click ang isang pader malapit sa isang dulo para hindi payagan ang pagdugtong sa dulong iyon, at i-click ulit para payagan ang mga ito.
- Ang mas lumang drawing ay wala pang nakaimbak na pagdugtong. Ang unang pagbabagong gagawin mo ay hahanapin ang mga ito minsan lamang, batay sa ayos ng mga pader bago ang pagbabago, at ise-save ang mga ito. Ginagawa ito agad ng `WALLJOINS`.
- Dala ng mga file na DWG at DXF ang mga pagdugtong sa loob ng bawat pader. Binabasa ng CadCraft ang mga ito gaya ng pagkaka-save. Ang program na walang extended data ay nagpapakita ng mga pader bilang payak na block at inaalis ang mga pagdugtong, at ang pagdugtong na ang mga pader ay nailipat sa ibang program ay inaalis sa susunod mong pagbabago sa alinmang pader.

## Estilo ng pagdugtong ng sulok

Ang sulok na pinagtatagpuan ng dalawang pader dulo-sa-dulo ay iginuguhit bilang mitre maliban kung pipili ka ng ibang estilo.

- `WALLJOINSTYLE` ({{ui:Estilo ng pagdugtong}} sa pangkat na {{ui:Mga pader}}): i-click ang sulok. Bawat click ay lilipat sa susunod na estilo: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, at pagkatapos ay {{ui:Mitre}} muli. I-type ang `T` para palitan kung aling sa dalawang pader ang dumadaan sa sulok na huli mong na-click. Pindutin ang {{key:Enter}} para tapusin. Isang takbo ng command ay isang hakbang na puwedeng i-undo.
- {{ui:Butt}}: dumadaan ang isang pader hanggang sa malayong mukha ng isa, at humihinto ang isa sa gilid nito. {{ui:Square off}}: pareho, pero ang pader na dumadaan ay nagtatapos nang tuwid sa sarili nito. Sa tamang anggulo, magkamukha ang dalawa.
- Sa Properties ng isang pader: {{ui:Estilo ng pagdugtong sa simula}}, {{ui:Estilo ng pagdugtong sa dulo}}, at {{ui:Dumadaan sa simula}}, {{ui:Dumadaan sa dulo}}.
- Nise-save ang estilo kasama ng parehong pader at dala ito sa mga file na DWG at DXF. Ang kopya ng pader ay nagsisimula nang walang estilo.
- Walang estilong mapipili ang T na pagdugtong: ang pader na tinamaan sa gilid nito ang dumadaan. Nananatiling mitre ang sulok na pinagtatagpuan ng tatlo o higit pang pader. Gayundin ang napakatulis na sulok (mas mababa sa mga 30 degree) at ang dalawang pader sa iisang linya.

## Gumuhit ng mga hugis ng pader

Bawat isa ay gumagawa ng mga pader sa isang hakbang na puwedeng i-undo, na may nakadugtong na mga sulok. Sa `WALL`, itinatakda ng `O` ang placement offset (gaano kalayo sa kaliwa ng iyong mga click mapupunta ang pader), at ino-off ng `D` ang pagdugtong para sa mga pader na susunod mong iguguhit.

- `WALLRECT` (`WR`): dalawang magkabilang sulok, gaya ng `RECTANG`.
- `WALLROT`: ang unang gilid, saka kung gaano kalayo ang kabilang gilid, para sa rectangle sa anumang anggulo.
- `WALLPOLY` (`WP`): ang bilang ng gilid (3 hanggang 64), ang sentro, `I` para sa inscribed o `C` para sa circumscribed, saka ang radius, gaya ng `POLYGON`.
- `WALLARC` (`WARC`): sentro, simula, dulo. Pinapalipat ng `D` ang arko sa kabilang direksyon.
- `WALLTAN`: i-click malapit sa dulo ng isang pader, saka ang dulo ng arko, na umaalis sa kahabaan ng pader na iyon.
- `WALLPICK`: i-click ang isang linya o polyline at sabihin kung isasama rin ang mga linyang nakadugtong dito.
- `WALLTRACE`: i-click sa loob ng saradong lugar ng mga linya at pader para maglagay ng mga pader sa paligid ng pinakamaliit.

Tuwid ang mga pader ng plano, kaya ang arko ay iginuguhit bilang maiikling tuwid na pader na tig-15 degree. Nagdudugtong ang mga ito gaya ng alinmang sulok.

## Hiwain ang mga pader

- `WALLSPLIT` (`WS`): i-click ang pader, saka ang punto. Pinuputol ng `C` kung saan tumatawid dito ang ibang pader, nag-iiwan ang `G` ng puwang sa pagitan ng mga bahagi, at ginagawang malaya ng `F` ang mga dulong pinutol sa halip na nakadugtong. Pinapanatili ng unang bahagi ang puwesto ng pader sa drawing, at sumasama sa bahagi nito ang mga pinto at bintana. Tinatanggihan ang hiwang dumadaan sa pinto o bintana.
- `WALLSPLITGAP` ({{ui:Hatiin na may puwang}}): ganoon ding hiwa, pero unang humihingi ng puwang.
- `WALLDELSEG`: i-click ang pader, saka ang dalawang dulo ng piraso na buburahin.
- `WALLREJOIN`: i-click ang dalawang bahagi ng iisang pader para gawing isa muli.

## Ilipat ang mga pader ayon sa distansya

- `WALLDIM`: i-click ang isang linear o aligned na dimension na tumatakbo mula sa isang pader patungo sa isa pa, saka i-type ang bagong value. Ang pader sa malayong dulo ay gumagalaw nang tuwid sa sarili nito, ang pader sa unang dulo ay nananatili, at sumusunod dito ang mga pader na nakadugtong dito.
- `WALLOFFSET` (`WO`): i-click ang isang pader, saka ang gilid kung saan ito ililipat (`D` ang nagta-type ng distansya, `C` ang gumagawa ng kopya sa halip).
- `WALLSTRETCH`: isang window sa paligid ng mga dulo ng pader, saka ang base point at ang pangalawang punto.
- Sa Properties, ang na-type na {{ui:Haba}} ay nagpapanatili sa simula at isinasama ang pader na nakadugtong sa malayong dulo, at ang bagong {{ui:Thickness}} ay lumalaki palayo sa {{ui:Linya ng lokasyon}} na pinili mo (ang kaliwang mukha, ang kanang mukha o ang gitna).

## I-lock ang mga pader

Nananatili sa pader sa file ang isang lock. Kapag inilipat mo ang isang naka-lock na pader, susunod ang isa pa. Kapag ang isang pagbabago ay nagpapalipat sa parehong pader nang magkaiba, tinatanggihan ito at walang nagbabago.

- `WALLHOLD`: i-lock ang isang pader sa ibang pader. Ililipat muna ito ng `A` sa linya ng kabilang pader, at pananatilihin ng `K` ang distansyang mayroon ito.
- `WALLHOLDDIM`: i-lock ang distansya sa pagitan ng dalawang magkahanay na pader.
- `WALLGRID`: i-lock ang isang pader sa isang grid line (isang linyang nasa grid layer na may tag nito sa teksto sa isang dulo), alinman sa kahabaan nito o may isang dulo rito. Pinananatili ng pader na naka-lock sa kahabaan ng linya ang distansyang mayroon ito mula rito. Ilipat ang grid line gamit ang `GRIDMOVE` at susunod ang buong pader, kasama ang mga nakadugtong nitong pader. Ang pader na nasa kahabaan ng grid line ay gumagalaw nang buo kasama nito kahit walang lock, at ang pader na dumadampi lamang sa linya sa dulo ay hinahatak sa pamamagitan ng dulong iyon.
- Inililista ng `WALLHOLDS` ang mga lock. Inaalis ng `WALLUNHOLD` ang mga lock sa isang pader.
- Bawat lock ay nagpapakita ng maliit na padlock sa plano: sa tabi ng gitna ng naka-lock na pader, o sa tabi ng dulong naka-lock sa grid line. I-click ang padlock para alisin ang lock na iyon.

## Ano ang wala pa rito

Ginagamit ng mga lock ang gitnang linya ng mga pader. Walang layer ang mga pader dito, kaya walang prayoridad ng layer sa isang junction, at hindi kumukurba ang mga pader (tingnan ang mga arko sa itaas). Walang sumubok pa ng mga tool na ito sa malaking drawing, at hindi pa ito nasusuri sa ibang CAD program.

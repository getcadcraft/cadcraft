---
title: Trim at extend
summary: Putulin ang mga linya pabalik kung saan sila tinatawiran ng iba, at pahabain ang mga ito para magtagpo sa iba, isa-isang piraso o marami nang sabay sa pamamagitan ng pag-drag ng path sa mga ito.
keywords: trimextendmode, pag-drag ng window, trim, extend, tr, ex, mabilis na trim, drag, freehand, path, fence, pag-cross, shift, cutting edges, boundary edges, edgemode, mode, standard, mabilis, burahin, preview, mga pader, paglilinis
from: 25fbc5bd
---

## Ano ang matututunan mo

Paano gumagana ang {{cmd:TRIM}} at {{cmd:EXTEND}}, at ang mabibilis na paraan ng paggamit nito: mag-drag sa maraming piraso nang sabay, pindutin nang matagal ang {{key:Shift}} para lumipat sa pagitan ng trim at extend, at tingnan kung ano ang mabubura bago ka mag-click.

## Mag-trim ng isang piraso

1. Gumuhit ng mahabang pahalang na linya at dalawang maikling linya na tumatawid dito.
2. I-type ang `TR` at pindutin ang {{key:Enter}}. Sinasabi ng history ang `Kasalukuyang setting: Quick mode, edges: No extend`.
3. Ihinto ang pointer sa mahabang linya sa pagitan ng dalawang maikli. Nagiging kulay abo at dashed ang piraso na iyon: ito ang mabubura.
4. I-click. Nawawala ang piraso.
5. Pindutin ang {{key:Enter}} para tapusin ang command.

Sa Quick mode (ang default), ang bawat nakikitang object ay cutting edge, kaya hindi mo kailangang pumili muna ng edges. I-click ang piraso na gusto mong mawala. Ang object na walang tumatawid ay binubura nang buo, at sinasabi ito ng history.

## Mag-trim ng maraming piraso sa isang drag

1. Gumuhit ng mahabang pahalang na linya at sampung maikling patayong linya na tumatawid dito.
2. I-type ang `TR` at pindutin ang {{key:Enter}}.
3. Pindutin ang mouse button sa itaas ng mahabang linya, sa kaliwa ng unang patayong linya, at i-drag sa lahat ng sampu sa itaas ng mahabang linya.

Habang nagdi-drag ka, ipinapakita ang path bilang dashed na linya, at nagiging kulay abo ang bawat piraso na natawiran nito. Bitawan: ang sampung itaas na piraso ay natrim lahat sa isang hakbang. I-type ang `U` at pindutin ang {{key:Enter}} para ibalik silang lahat nang sabay.

:::tip
Maaari ka ring mag-click sa dalawang walang lamang lugar: ang linya sa pagitan nila ay gumagana bilang dragged path. I-type ang `F` (Fence) para mag-click ng sunod-sunod na punto sa halip, pagkatapos ay pindutin ang {{key:Enter}}.
:::

:::touch
I-drag ang daliri sa parehong paraan. Ang tap sa isang piraso ay nagta-trim nito.
:::

## Mag-extend sa halip, gamit ang Shift

1. Gumuhit ng patayong linya, at limang maikling pahalang na linya sa kaliwa nito na humihinto bago ito.
2. I-type ang `TR` at pindutin ang {{key:Enter}}.
3. Pindutin nang matagal ang {{key:Shift}}. Ihinto ang pointer sa isang maikling linya: ang bahaging lalaki nito ay ipinapakitang kulay abo at dashed.
4. Habang pinipindot pa rin ang {{key:Shift}}, i-drag pababa sa limang maikling linya.

Umaabot na ngayon sa patayong linya ang lahat ng lima. Baligtad ang gawi ng {{key:Shift}} sa {{cmd:EXTEND}} (`EX`): ang click ay nag-e-extend, at ang {{key:Shift}}+click ay nag-t-trim. Pinapahaba ng extend ang dulong pinakamalapit sa iyong ki-click o sa tawiran ng path.

## Mag-trim sa loob ng window

1. I-type ang `TR` at pindutin ang {{key:Enter}}.
2. I-type ang `C` at pindutin ang {{key:Enter}}.
3. I-click ang dalawang sulok sa paligid ng mga piraso na aalisin.

Bawat piraso na nasa loob man lang ng bahagi ng window ay natrim.

Para makakuha ng window sa pamamagitan lang ng pag-drag, nang hindi nagta-type ng `C`: {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Pag-drag para sa trim at extend}} › {{ui:Isang window}}. Pagkatapos, ang pagpindot sa walang lamang lugar at pag-drag ay gumuguhit ng kahon, at bawat piraso na nahahawakan nito ay natrim (o na-extend, sa {{cmd:EXTEND}}, o gamit ang {{key:Shift}}). Ibinabalik ng {{ui:Isang path}} (ang simula) ang freehand path. Sinasabi ng linya ng setting sa simula ng TRIM kung alin ang naka-on.

## Pumili ng cutting edges (Standard mode)

Minsan isang linya lang ang dapat mag-cut, gaya ng mukha ng pader na maraming ibang linya ang tumatawid dito.

1. I-type ang `TR` at pindutin ang {{key:Enter}}.
2. I-type ang `O` (mOde) at pindutin ang {{key:Enter}}, pagkatapos i-type ang `S` (Standard) at pindutin ang {{key:Enter}}.
3. Sa `Tukuyin ang cutting edges`, i-click ang mga edge line (o mag-drag ng window), pagkatapos ay pindutin ang {{key:Enter}}. Ang pagpindot ng {{key:Enter}} nang walang napili ay ginagawang edge ang bawat object.
4. I-click o i-drag sa mga piraso na aalisin.

Tanging ang mga napiling edge ang nagku-cut, at ang object na walang edge na tumatawid ay hindi ginagalaw. Nananatili ang mode hanggang isara mo ang page; i-type ang `O`, pagkatapos ang `Q` para bumalik sa Quick. Itinatakda ito ng {{cmd:TRIMEXTENDMODE}} bago ka magsimula, tulad ng variable ng parehong pangalan sa ibang bahagi: `0` Standard, `1` Quick. Pumipili ang `T` (cuTting edges) ng bagong edge anumang oras; sa {{cmd:EXTEND}} ito ay `B` (Boundary edges).

## Mga edge na aabot

1. I-type ang `TR` at pindutin ang {{key:Enter}}.
2. I-type ang `E` (Edge) at pindutin ang {{key:Enter}}, pagkatapos `E` (Extend) at pindutin ang {{key:Enter}}.

Ngayon, ang cutting line o arc na humihinto nang maikli ay binibilang na parang nagpatuloy: ang maikling linya ay nagku-cut kung saan ito tatawid kung mas mahaba ito. I-type ang `E`, pagkatapos `N` (No extend) para bumalik. Ito ay katulad ng EDGEMODE 1 at 0.

## Burahin nang hindi umaalis

I-type ang `R` (eRase) at pindutin ang {{key:Enter}}, piliin ang mga object na buburahin, at pindutin ang {{key:Enter}}. Nagpapatuloy ang TRIM.

## Mga karaniwang pagkakamali

- **Nawala ang buong linya.** Sa Quick mode, binubura ang object na walang tumatawid dito. I-type ang `U` para ibalik ito, o lumipat sa Standard mode (`O`, `S`).
- **"Walang matrim doon: walang napiling edge ang tumatawid sa object na iyon."** Ang Standard mode ay nagku-cut lang sa mga edge na pinili mo. I-type ang `T` para piliin silang muli.
- **"Walang boundary sa direksyong iyon."** Walang nahanap ang extend sa unahan. I-click nang mas malapit sa dulong dapat tumubo, o i-on ang `E` (Edge, Extend) para sa mga boundary na humihinto nang maikli.
- **Ang drag ay gumuhit ng lasso sa halip.** Nagta-trim lang ang drag habang humihingi ng object ang TRIM o EXTEND. Kapag walang tumatakbong command, pumipili ang drag (tingnan ang [Lasso selection](topic:lasso-selection)).
- **Linya, arc, bilog at polyline lang ang maaaring i-trim.** I-explode muna ang block para i-trim ang mga linya nito.

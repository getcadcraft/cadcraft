---
title: Mag-set up ng sheet na may title block at mga viewport
summary: Gumawa ng sheet (layout) na may border at title block, itakda ang scale ng viewport, magdagdag ng ikalawang viewport para sa detalye, at punan ang title block.
keywords: layout, sheet, paper space, viewport, mview, vpview, title block, scale, laki ng papel, border, vports, plot scale, mspace, pspace, model space, pumasok sa viewport, i-double-click ang viewport
from: 45a45de8
---

## Ano ang gagawin mo

Isang A3 na sheet na may title block, ang buong plano sa iisang viewport sa 1:100, at ikalawang viewport na nagpapakita ng isang sulok sa 1:20.

## Model at mga sheet

Ginuguhit mo ang gusali sa {{ui:Model}} tab, sa buong laki: ang pader na 6 m ay 6000 unit ang haba sa milimetro. Ang **sheet** (layout) ay isang piraso ng papel, sinusukat sa milimetro o pulgada. Ang **viewport** ay isang bintanang hiwa sa sheet na nagpapakita ng model sa isang scale.

## Bago ka magsimula

1. Buksan o gumuhit ng plano sa {{ui:Model}} tab.
2. Pindutin ang {{key:Esc}} para walang napiling anuman.
3. Sa {{ui:Kasalukuyang setting}}, itakda ang {{ui:Mga unit}} sa unit na ginamit mo sa pagguhit, halimbawa {{ui:Milimetro}}.

Mahalaga ang mga unit: ang viewport scale na gaya ng 1:100 ay nangangahulugang ang isang milimetro sa papel ay nagpapakita ng 100 totoong milimetro, kaya kailangang malaman ng CadCraft kung ano ang isang drawing unit. Ang drawing na iniwang {{ui:Walang unit}} ay ituturing na nasa unit ng papel (milimetro sa ISO na papel, pulgada sa US na papel).

## Gumawa ng sheet

1. I-click ang button na {{ui:+}} sa kanan ng mga tab sa ilalim ng drawing, o i-type ang `LAYOUT` at pindutin ang {{key:Enter}}, o i-click ang {{ui:Bagong sheet}}.

Bumubukas ang bagong tab na `Layout1`. Dapat makita mo ang isang sheet sa mas madilim na desk: isang border, isang title block sa kanang-ibabang sulok at isang viewport sa itaas nito na nagpapakita ng buong model sa pinakamalaking standard na scale na kasya. Pinangalanan ng history ang papel: ISO A3 para sa metric at unitless na drawing, Tabloid (ANSI B) para sa drawing na nasa pulgada o talampakan.

2. I-click ang {{ui:Extents}} para kasya ang sheet sa screen.

## Piliin ang papel

1. Pindutin ang {{key:Esc}} para walang napiling anuman. Ang heading ng kanang panel ay nagbabasa ng "Sheet: Layout1".
2. Sa {{ui:Pangalan}}, i-type ang `A-101 Plan` at pindutin ang {{key:Enter}}. Mapapalitan ang pangalan ng tab.
3. Sa {{ui:Papel}}, pumili ng laki.
4. Sa {{ui:Oryentasyon}}, piliin ang {{ui:Landscape}} o {{ui:Portrait}}.

:::warning
Hindi nililipat o nirere-size ng pagpalit ng papel ang mga nasa sheet na. Pagkatapos palitan, tingnan kung kasya pa rin ang border, ang title block at ang viewport, at ilipat o i-resize ang mga ito gamit ang grip. Kapag lumipat sa papel na milimetro at pulgada, nananatili ang mga numero, kaya nagbabago ang laki ng lahat: binabalaan ka ng status bar.
:::

## Itakda ang scale ng viewport

1. I-click ang frame ng viewport (ang gilid nito). Ang heading ng panel ay nagbabasa ng "Viewport".
2. Sa {{ui:Scale}}, piliin ang `1:100`.

Muling iguguhit ang model sa loob ng viewport sa 1:100, nakasentro kung saan ito dati. Nag-aalok ang listahan ng metric na scale mula 10:1 hanggang 1:10000; nakakakuha rin ang mga drawing na nasa pulgada o talampakan ng architectural na scale (1/4" = 1'-0" at katulad nito) at engineering na scale (1" = 20' at katulad nito). Nagtatakda ang {{ui:I-fit ang buong model}} ng eksakto, hindi standard na scale na kasya sa lahat.

3. Kung wala na sa gitna ang plano, baguhin ang {{ui:X}} at {{ui:Y}} sa ilalim ng {{ui:Center ng view (model)}} sa kanang panel: sila ang punto ng model na ipinapakita sa gitna ng viewport.

## Ipakita ang bahagi ng model sa viewport

1. Habang napili ang viewport, i-click ang {{ui:Pumili ng window sa model…}} sa kanang panel (o i-type ang `VPVIEW` at pindutin ang {{key:Enter}}).
2. Lumilipat ang CadCraft sa {{ui:Model}} tab. I-click ang isang sulok ng area na ipapakita.
3. I-click ang kabilang sulok.

Bumalik ka sa sheet, at ipinapakita ng viewport ang area na iyon sa pinakamalaking standard na scale na kasya; sinasabi ng history kung alin. Binabalik ng {{ui:Ipakita ang buong model}} ang buong plano sa standard na scale.

## Magdagdag ng ikalawang viewport para sa detalye

1. Gumawa ng espasyo sa sheet: piliin ang unang viewport at i-drag ang grip sa sulok para paliitin ito.
2. I-type ang `MV` at pindutin ang {{key:Enter}}, o i-click ang {{ui:Viewport}} sa grupong Sheets.
3. I-click ang isang sulok ng bagong viewport sa sheet.
4. I-click ang kabilang sulok.

Ipinapakita ng bagong viewport ang buong model. Sinasabi ng history ang scale nito.

5. I-click ang frame ng bagong viewport.
6. I-click ang {{ui:Pumili ng window sa model…}} at pumili ng maliit na area sa paligid ng isang sulok ng plano.
7. Sa {{ui:Scale}}, piliin ang `1:20`.

Nasa layer na `Viewports` ang mga frame ng viewport, na nakatakdang hindi mag-plot, kaya lumalabas ang mga frame sa screen pero hindi sa PDF.

## Punan ang title block

Binubuo ang title block ng karaniwang mga linya at teksto sa layer na `Title block`. Nagsisimula ito sa pangalan ng drawing, sa scale ng unang viewport, sa petsa ngayon at sa numero ng sheet.

1. I-double-click ang malaking title na teksto. Bubukas sa ibabaw nito ang kahon ng pag-edit.
2. I-type ang title ng sheet.
3. I-click ang {{ui:OK}}, o pindutin ang {{key:Mod+Enter}}.

Gawin din ito sa iba pang field. Gamitin ang {{cmd:TEXT}} para magsulat sa walang lamang cell na "DRAWN BY". Hindi awtomatikong nag-a-update ang tekstong SCALE kapag binago mo ang scale ng viewport: i-edit ito nang manu-mano.

## Gumuhit sa sheet

Anumang iguguhit mo sa tab ng sheet ay nasa papel, sa mga unit ng papel: ang teksto na 3.5 ang taas ay 3.5 mm ang tangkad sa ISO na sheet. Dito kabilang ang mga note, north arrow at border ng sheet.

Para baguhin mismo ang plano, pumunta sa {{ui:Model}} tab, o magtrabaho sa pamamagitan ng viewport (susunod na seksyon); ipinapakita ng bawat viewport ang pagbabago.

## Magtrabaho sa model sa pamamagitan ng viewport

1. I-double-click sa loob ng viewport, malayo sa frame nito. O i-type ang `MS` at pindutin ang {{key:Enter}}: kapag isa lang ang viewport sa sheet, diretso ka nang papasok; kapag marami, i-click sa loob ng gusto mo.

Mas makapal ang iginuhit na frame, sinasabi ng history na nasa loob ka, at nananatiling napili ang tab ng sheet. Lahat ng iguguhit o babaguhin mo ngayon ay nasa model, sa mga unit ng model, gaya sa {{ui:Model}} tab: ang linyang iginuhit sa loob ng viewport sa 1:100 ay nasa totoong milimetro. Hindi mapipili rito ang mga layer na frozen sa viewport na ito.

2. I-ikot ang wheel o i-drag gamit ang gitnang button para mag-zoom at mag-pan sa ipinapakita ng viewport. Nananatili sa lugar nito ang sheet.
3. I-double-click kahit saan sa labas ng frame, o i-type ang `PS` at pindutin ang {{key:Enter}}.

Bumalik ka sa sheet. Pinananatili ng viewport ang view na iniwan mo; ibinabalik ng {{key:Mod+Z}} ang lumang view sa isang hakbang. Lumalabas ka rin sa viewport kapag nag-click ng alinmang tab sa ilalim ng drawing.

:::note
Pinananatili ng viewport na naka-lock ang display ({{ui:Naka-lock ang display}} sa Properties) ang view nito: sa loob nito, ang pan at zoom ay gumagalaw sa buong sheet sa halip. Hindi mapapasukan ang viewport na naka-off.
:::

## Lagyan ng pangalan ang view

Ang title ng view sa ilalim ng viewport ay maaaring magpakita ng pangalan ng view ng viewport at sumabay dito:

1. Bigyan ng pangalan ang view: piliin ang frame ng viewport at punan ang {{ui:View name}} sa Properties — o i-save ang view sa {{ui:Model}} tab gamit ang {{cmd:NAMEDVIEW}} at, habang napili ang viewport, i-type ang `VPVIEW`, `V` at pangalan ng view: ipinapakita ng viewport ang view na iyon at kinukuha ang pangalan nito.
2. I-type ang `VIEWLABEL` (`VL`) at pindutin ang {{key:Enter}}, pagkatapos i-click kung saan pupunta ang label ({{key:Enter}} ang naglalagay nito sa ilalim ng kaliwang-ibabang sulok ng viewport).

Kapag nagbago ang pangalan ng view, nagbabago rin ang label, sa parehong undo step.

## I-freeze ang layer sa isang viewport

Para itago ang isang layer sa isang viewport pero hindi sa iba (halimbawa ang muwebles sa isang detalye):

1. Piliin ang frame ng viewport, o magtrabaho sa loob nito (i-double-click).

Nagkakaroon ng isa pang button ang panel na {{ui:Mga Layer}} sa bawat row, at may linyang nasa itaas ng listahan na nagsasabi nito.

2. I-click ang button na iyon sa row ng layer.

Nawawala ang layer sa viewport na iyon lamang. I-click muli para i-thaw ito; ang {{key:Mod+Z}} ay nag-u-undo ng alinman. Para sa ilang layer o viewport nang sabay, i-type ang `VPLAYER`: `F` ([I-freeze (F)]) o `T` ([I-thaw (T)]), ang mga pangalan ng layer (ang `A-*` ay kumukuha ng bawat layer na nagsisimula sa A-), pagkatapos `C` ([Kasalukuyan (C)]), `A` ([Lahat (A)]) o `S` ([Piliin (S)]). Ang `VPLAYER` `V` (Vpvisdflt) ay pumipili ng mga layer na nagsisimulang frozen sa mga bagong viewport.

## Mas maraming sheet

Bawat {{ui:+}} ay nagdaragdag ng isa pang sheet (`Layout2`, `Layout3` …) na may kasunod na numero ng sheet. Para burahin ang bukas na sheet, pindutin ang {{key:Esc}} at i-click ang {{ui:Burahin ang sheet na ito}} sa kanang panel. Binubura ito nang walang tanong; ibinabalik ito ng {{key:Mod+Z}}.

I-plot ang sheet gamit ang {{ui:I-plot ang sheet na ito}} o {{key:Mod+P}}; tingnan ang [I-plot sa PDF](topic:plot-pdf).

## Mga karaniwang pagkakamali

- **Walang ipinapakita ang viewport.** Walang laman ang model, o nakatutok ang view sa ibang lugar. Piliin ang frame at i-click ang {{ui:Ipakita ang buong model}}.
- **Tanging ratio ang ipinapakita ng listahan ng scale, walang scale na talampakan at pulgada.** Itakda ang {{ui:Mga unit}} sa {{ui:Pulgada}} o {{ui:Talampakan}} sa {{ui:Model}} tab.
- **Ang 1:100 ay mukhang sampung beses na mas malaki o mas maliit.** Mali ang mga drawing unit. Itakda ang {{ui:Mga unit}} sa kung ano talaga ang isang unit.
- **Walang napipili kapag ni-click ang plano sa loob ng viewport.** Sa sheet, ang sariling object ng sheet ang napipili. I-double-click muna sa loob ng viewport para magtrabaho sa plano sa pamamagitan nito.
- **Walang nangyayari kapag nag-click sa labas ng viewport.** Nasa loob ka ng viewport: i-double-click sa labas nito, o i-type ang `PS`, para muling magtrabaho sa sheet.
- **"Ang mga viewport ay napupunta sa layout. Buksan muna ang tab ng layout (o gumawa gamit ang LAYOUT)."** Gumagana ang {{cmd:MVIEW}} sa tab ng sheet lamang.

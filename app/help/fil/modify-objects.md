---
title: Ilipat, kopyahin, i-rotate, i-scale, i-mirror, i-stretch at i-array
summary: Ayusan ang mga muwebles sa isang kuwarto gamit ang mga pangunahing modify command, base point, tinype na distansya at undo.
keywords: ilipat, kopyahin, i-rotate, i-scale, i-mirror, i-stretch, array, join, matchprop, match properties, painter, arrayrect, arraypolar, polar array, burahin, explode, i-undo, i-redo, base point, displacement, modify, i-align, i-distribute, pumila sa linya, pantay na espasyo
from: 8eaeee6c
---

## Ano ang gagawin mo

Isang mesa na may isang upuan, kinopya sa paligid ng mesa, pinaikot, ginawang mirror at binago ang laki. Sa proseso, gagamitin mo ang {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} at {{cmd:UNDO}}.

## Gumuhit ng mga piyesa

1. I-type ang `REC` at pindutin ang {{key:Enter}}, i-type ang `0,0` at pindutin ang {{key:Enter}}, pagkatapos i-type ang `@1800,900` at pindutin ang {{key:Enter}}. Ito ang mesa.
2. I-type ang `REC` at pindutin ang {{key:Enter}}, i-type ang `300,-700` at pindutin ang {{key:Enter}}, pagkatapos i-type ang `@450,450` at pindutin ang {{key:Enter}}. Ito ang upuan, sa ibaba ng mesa.
3. I-click ang {{ui:Extents}}.

## Move: base point, pagkatapos ikalawang punto

Ang bawat move, copy, rotate at scale ay nagsisimula sa isang **base point**: ang punto na dinadala o pinaiikot.

1. I-click ang upuan para piliin ito.
2. I-type ang `M` at pindutin ang {{key:Enter}}. Sasabihin ng history ang `1 found`.
3. Sa `Specify base point`, i-snap sa kaliwang itaas na sulok ng upuan (Endpoint) at i-click.
4. Sa `Specify second point`, i-type ang `@0,200` at pindutin ang {{key:Enter}}.

Aakyat ang upuan ng 200, mas malapit sa mesa.

:::tip
I-type ang `D` sa `Specify base point` para magbigay ng displacement sa halip: magtatanong ang CadCraft ng `Specify displacement`, at i-type mo kung gaano kalayo pahalang at pataas, gaya ng `0,200` (hindi na kailangan ang `@`).
:::

## Kopyahin, hangga't gusto mo

1. I-click ang upuan.
2. I-type ang `CO` at pindutin ang {{key:Enter}}.
3. I-snap sa kaliwang ibabang sulok ng upuan at i-click bilang base point.
4. I-type ang `@600,0` at pindutin ang {{key:Enter}}. May lalabas na kopya na 600 sa kanan.
5. I-type muli ang `@600,0` at pindutin ang {{key:Enter}}. Lalabas ang pangalawang kopya na 1200 sa kanan ng orihinal.
6. Pindutin ang {{key:Enter}} para tapusin ang command.

Tuloy-tuloy ang {{cmd:COPY}} hanggang pindutin mo ang {{key:Enter}}. Bawat kopya ay inilalagay ayon sa distansya mula sa base point hanggang sa puntong ibinigay mo. Ang `@` na punto ay binibilang mula sa huling punto na inilagay mo, na pagkatapos ng unang kopya ay punto ng kopyang iyon, kaya ang `@600,0` na dalawang beses ay nagbibigay ng kopya sa 600 at 1200. I-type ang `U` at pindutin ang {{key:Enter}} para bawiin ang huling kopya nang hindi lumalabas sa command.

Dapat makita mo ang tatlong upuan sa isang hilera sa ibaba ng mesa.

:::tip
Ang {{cmd:COPY}} ay para sa mga kopya sa loob ng isang drawing, na inilalagay ayon sa base point. Para dalhin ang mga object sa ibang drawing o tab, o i-paste ang mga ito sa susunod, gamitin ang clipboard: {{key:Mod+C}}, pagkatapos {{key:Mod+V}}. Gumagawa ang {{key:Mod+D}} ng isang kopya na gumagalaw kasama ng pointer. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).
:::

## I-mirror ang hilera sa kabilang panig

1. I-drag ang crossing (mula kanan pakaliwa) sa ibabaw ng tatlong upuan, nang hindi nahahawakan ang mesa.
2. I-type ang `MI` at pindutin ang {{key:Enter}}.
3. Sa `Specify first point of mirror line`, i-snap sa Midpoint ng kaliwang gilid ng mesa at i-click.
4. Sa `Specify second point of mirror line`, i-snap sa Midpoint ng kanang gilid ng mesa at i-click.
5. Sa `Erase source objects? [Yes/No] <N>`, pindutin ang {{key:Enter}} para panatilihin ang mga ito.

Dapat makita mo ang tatlong upuan sa ibaba ng mesa at tatlong naka-mirror na upuan sa itaas nito. Nananatiling mababasa ang teksto sa naka-mirror na pagpili: nakaayos ito nang naka-mirror pero hindi isinulat nang pabaliktad.

## I-rotate ang upuan

1. I-click ang pinakakanang upuan sa ibaba ng mesa.
2. I-type ang `RO` at pindutin ang {{key:Enter}}.
3. I-snap sa kanang ibabang sulok ng upuan at i-click bilang base point.
4. I-type ang `90` at pindutin ang {{key:Enter}}.

Iikot ang upuan ng 90 degrees pakaliwa (counterclockwise) sa paligid ng base point. Ang negatibong anggulo ay umiikot pakanan (clockwise). Sa halip na mag-type, puwede kang mag-click ng pangalawang punto: sinusukat ang anggulo mula sa base point papunta sa puntong iyon.

## I-scale ang mesa

1. Piliin ang mesa.
2. I-type ang `SC` at pindutin ang {{key:Enter}}.
3. I-snap sa kaliwang ibabang sulok ng mesa at i-click bilang base point.
4. I-type ang `1.2` at pindutin ang {{key:Enter}}.

20% na mas malaki ang mesa, lumalaki palayo sa base point. Ang factor na mas mababa sa 1 ay nagpapaliit dito.

:::note
Kung mag-click ka ng punto sa halip na i-type ang scale factor, ang factor ay ang distansya mula sa base point hanggang sa puntong iyon. Ang pag-click ng isang drawing unit ang layo ay nagbibigay ng factor na 1. Kadalasan, ang pag-type ng numero ang gusto mo.
:::

## Undo at redo

- {{key:Mod+Z}}, ang button na {{ui:I-undo}}, o `U` pagkatapos ang {{key:Enter}} ay nag-u-undo ng huling command. Isang hakbang ang buong command: ang pag-undo ng {{cmd:COPY}} na gumawa ng limang kopya ay nag-aalis ng lahat ng lima.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, ang button na {{ui:I-redo}}, o `REDO` ang nagbabalik nito.
- Sinasabi ng history kung ano ang na-undo ("Na-undo ang COPY").

Itinatago ng CadCraft ang huling 500 hakbang. Ang mga setting ng layer (on, freeze, lock, color) ay mga setting, hindi mga edit, kaya hindi sila na-u-undo.

## Palawakin ang kuwarto nang mas malapad

{{cmd:STRETCH}} (`S`, o {{ui:Stretch}}) ay gumagalaw lamang sa nasa loob ng crossing window: ang mga sulok at dulo ng linya sa loob nito ay gumagalaw, ang iba ay nananatili, kaya lumalapad ang kuwarto sa halip na gumalaw nang buo.

1. I-type ang `S` at pindutin ang {{key:Enter}}.
2. I-drag ang window mula kanan pakaliwa sa ibabaw ng dingding sa kanan, para masakop ang mga sulok ng dingding at ang mga dulo ng anumang nakakabit dito.
3. Pindutin ang {{key:Enter}}.
4. I-click ang base point, pagkatapos i-type ang `@600,0` at pindutin ang {{key:Enter}}.

600 na mas malapad ang rectangle; ang mga linyang nagtapos sa dingding ay nagtatapos pa rin doon. Ang arc na may isang dulo sa loob ay nananatili ang taas nito, ang mga bilog at teksto ay gumagalaw kapag nasa loob ang center o insertion point nila, at sinusukat ng dimension ang bago nitong haba. Ang mga object na pinili nang isa-isa, nang walang window, ay simpleng gumagalaw.

Puwede ka ring pumili muna: i-drag ang crossing window (o crossing lasso) sa ibabaw ng dingding nang walang tumatakbong command, pagkatapos i-type ang `S`. Kukunin ng STRETCH ang pagpiling iyon at iu-stretch ang nasa loob ng mga window nito, na parang na-drag mo ang mga ito sa sarili nitong prompt.

## Array: mga hilera at kolum, o paikot sa isang center

{{cmd:ARRAY}} (`AR`, o {{ui:Array}}) ay kumokopya ng pagpili sa isang grid o sa isang bilog.

1. Pumili ng upuan at i-type ang `AR`, pindutin ang {{key:Enter}}. Pindutin ang {{key:Enter}} para sa Rectangular.
2. Lalabas ang preview na 4 na kolum at 3 hilera. I-type ang `COU`, pindutin ang {{key:Enter}}, pagkatapos `5` para sa mga kolum at `2` para sa mga hilera.
3. I-type ang `[Espasyo (S)]`, pindutin ang {{key:Enter}}, pagkatapos `600` para sa pagitan ng mga kolum at `-900` para sa pagitan ng mga hilera (ang negatibo ay pababa).
4. Pindutin ang {{key:Enter}} para gawin ang mga kopya.

Para sa singsing ng mga upuan sa paligid ng mesa, piliin ang `PO` (Polar) sa halip, i-click ang center ng mesa, at itakda ang `I` ([Mga item (I)]), `F` ([Anggulo ng fill (F)]: 360 para sa buong paligid, 180 para sa kalahati) at `ROT` (kung iikot ang mga kopya paharap sa center). Nilalampasan ng {{cmd:ARRAYRECT}} at {{cmd:ARRAYPOLAR}} ang tanong na ito.

## I-join ang mga piraso sa isang polyline

{{cmd:JOIN}} (`J`, o {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): pumili ng mga linya, arc at bukas na polyline na nagdidikit ang mga dulo, at pindutin ang {{key:Enter}}. Nagiging isang polyline sila, nakasara kapag buo ang ikot, na maaari mo pang i-offset nang sabay-sabay. Ang mga linyang nasa iisang linya ay nagiging isang linya kahit may puwang sa pagitan; ang mga arc ng iisang bilog ay nagiging isang arc, o ang bilog.

## Match properties

{{cmd:MATCHPROP}} (`MA`, o {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): i-click ang object na gusto mong tularan ang itsura, pagkatapos piliin ang mga object na babaguhin at pindutin ang {{key:Enter}}. Kinukuha nila ang layer at kulay nito; ang teksto ay kumukuha ng taas nito, ang dimension ng mga sukat nito, ang hatch ng pattern nito. I-type ang `[Mga setting (S)]` sa ikalawang tanong para i-off ang alinman sa mga ito.

## I-align ang mga object

**Ayon sa mga punto.** {{cmd:ALIGN}} (`AL`, o {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): pumili ng mga object at pindutin ang {{key:Enter}}, pagkatapos i-click ang isang punto sa mga ito (ang source) at kung saan ito dapat pumunta (ang destination).

- Ang isang pares ang gumagalaw sa kanila. Pindutin ang {{key:Enter}} sa `Specify second source point` para tumigil doon.
- Ang dalawang pares ay pinaiikot din sila, para ang linya sa pagitan ng dalawang source point ay nakahanay sa linya sa pagitan ng dalawang destination point. Pagkatapos magtatanong ang CadCraft ng `Scale objects based on alignment points?`: ang `Y` ay pinalalaki o pinaliliit din sila nang ganoon.
- Ang ikatlong pares ay nag-mi-mirror sa kanila kapag ang dalawang punto nito ay nasa magkabilang panig ng linyang iyon.

**Mga gilid at espasyo.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (o `ALIGNPANEL`) ay nagbubukas ng maliit na panel sa ibabaw ng drawing. Pumili ng mga object, pagkatapos:

- piliin kung ano ang ihahanay sa {{ui:Align to}} (ang buong pagpili, ang una o huling object na pinili mo, o isang punto na i-click mo) at i-click ang {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} o {{ui:Bottom}};
- o piliin ang {{ui:Equal gaps}} o {{ui:Equal centres}} at i-click ang {{ui:Across}} o {{ui:Up and down}}: nananatili ang dalawang panlabas na object, at ang iba ay pantay na inilalagay sa pagitan nila (hindi bababa sa tatlong object).

Bawat click ay isang undo step, at nananatili ang pagpili, kaya puwede kang sumubok ng iba. Ang bawat object ay binibilang ayon sa bounding box nito, sa UCS kapag may nakatakda. Sa command line, ang katumbas nito ay {{cmd:ALIGNTO}} at {{cmd:DISTRIBUTE}}.

## Burahin at i-explode

- {{cmd:ERASE}} (`E`, o {{key:Delete}}) ay nag-aalis ng mga napiling object.
- {{cmd:EXPLODE}} (`X`) ay naghihiwalay ng polyline sa mga linya at arc, ng block reference sa mga object nito, at ng dimension sa mga linya, arrowhead at teksto. Hindi na sumusukat sa sarili ang mga na-explode na dimension.

## Mga karaniwang pagkakamali

- **Pag-type ng distansya nang walang `@` sa ikalawang punto.** Ang `600,0` ay ang absolute na punto 600,0, hindi "600 pakanan". Gamitin ang `@600,0`, o ang simpleng `600` na nakaturo ang crosshair sa tamang direksyon.
- **Mali ang direksyon ng rotation.** Ang positibong anggulo ay umiikot pakaliwa (counterclockwise).
- **Mas maraming inalis ang undo kaysa inaasahan.** Binabawi ng isang undo ang buong huling command, kasama ang bawat kopyang nagawa nito.
- **Hindi humingi ng pagpili ng object ang command.** Nakapili na ang mga object, kaya ginamit ang mga iyon. Pindutin muna ang {{key:Esc}} para magsimula na walang napili.

---
title: I-offset, i-trim, i-extend, i-fillet at i-chamfer ang mga dingding
summary: Gawing dobleng dingding ang mga single na linya gamit ang Offset, linisin ang mga sulok gamit ang Fillet, at putulin at pahabain ang mga linya gamit ang Trim at Extend.
keywords: offset, trim, extend, fillet, chamfer, bevel, break, breakatpoint, lengthen, walls, corner, cut, lengthen, parallel, radius, cleanup
from: c6c5cbd0
---

## Ano ang gagawin mo

Isang maliit na kuwarto na may 200 ang kapal na mga dingding: iginuguhit ang loob na mukha, ina-offset ang labas na mukha, nililinis ang mga sulok, at may pintuang pinuputol sa isang dingding.

## Iguhit ang loob na mukha

1. I-type ang `L` at pindutin ang {{key:Enter}}.
2. I-type ang `0,0` at pindutin ang {{key:Enter}}.
3. I-type ang `@5000,0` at pindutin ang {{key:Enter}}.
4. I-type ang `@0,4000` at pindutin ang {{key:Enter}}.
5. I-type ang `@-5000,0` at pindutin ang {{key:Enter}}.
6. I-type ang `C` at pindutin ang {{key:Enter}}.
7. I-click ang {{ui:Extents}}.

Apat na magkakahiwalay na linya ang mayroon ka. (Sa isang nakasarang polyline, isang galaw lang ang offset; ipinapakita ng magkakahiwalay na linya kung paano nililinis ng Fillet ang mga sulok.)

## I-offset ang labas na mukha

1. I-type ang `O` at pindutin ang {{key:Enter}}. Ang prompt ay nagbabasang `Specify offset distance [Through] <Through>:`.
2. I-type ang `200` at pindutin ang {{key:Enter}}.
3. Sa `Select object to offset`, i-click ang ilalim na linya.
4. Sa `Specify point on side to offset`, i-click kahit saan sa ibaba nito. May lalabas na parallel na linya na 200 sa ibaba.
5. I-click ang kanang linya, pagkatapos i-click ang bahaging nasa kanan nito.
6. I-click ang itaas na linya, pagkatapos i-click ang bahaging nasa itaas nito.
7. I-click ang kaliwang linya, pagkatapos i-click ang bahaging nasa kaliwa nito.
8. Pindutin ang {{key:Enter}} para tapusin ang command.

Dapat makita mo ang apat na panlabas na linya, bawat isa ay kasing haba ng kanyang loob na katapat, kaya hindi nagkikita ang mga panlabas na sulok.

:::tip
Pindutin ang {{key:Enter}} sa prompt ng distansya para gamitin muli ang huling distansya. I-type ang `[Dumaan (T)]` para sa Through: pagkatapos, bawat kopya ay dumadaan sa puntong i-click mo, anuman ang distansya niyon.
:::

Gumagana ang {{cmd:OFFSET}} sa mga linya, arc, bilog at polyline. Kapag nag-offset ka ng nakasarang polyline, ina-offset ang buong outline, kasama ang mga sulok.

## Linisin ang mga panlabas na sulok gamit ang Fillet

Pinagdudugtong ng {{cmd:FILLET}} ang dalawang linya sa isang sulok: pinuputol o pinapahaba nito ang pareho para magtagpo sila. Kapag radius 0, parisukat ang sulok.

1. I-type ang `F` at pindutin ang {{key:Enter}}. Ang prompt ay nagbabasang `Select first line [Radius]:`.
2. Kung ang huling fillet na ginawa mo ay gumamit ng radius, i-type ang `R`, pindutin ang {{key:Enter}}, i-type ang `0` at pindutin ang {{key:Enter}}.
3. I-click ang panlabas na ilalim na linya malapit sa dulo nitong kanan.
4. Sa `Select second line`, i-click ang panlabas na kanang linya malapit sa dulo nitong ilalim.

Ngayon, nagtatagpo na ang dalawang linya sa matalim na sulok, at natatapos ang command.

5. Pindutin ang {{key:Enter}} para ulitin ang {{cmd:FILLET}}, at gawin ang susunod na sulok.
6. Ulitin hanggang magtagpo ang lahat ng apat na panlabas na sulok.

I-click ang bawat linya sa bahaging gusto mong **panatilihin**. Kapag may radius na higit sa 0, nagdadagdag ang Fillet ng arc sa pagitan ng mga linya.

:::tip
I-type ang `[Maramihan (M)]` sa unang prompt para gawin ang lahat ng apat na sulok nang sabay, o iguhit ang panlabas na mukha bilang isang nakasarang polyline at i-type ang `P`: sabay-sabay na gagawin ang bawat sulok. Pindutin nang nakahawak ang {{key:Shift}} habang nag-click ka sa pangalawang linya para sa matalim na sulok nang hindi binabago ang radius.
:::

## Pantayin ang sulok gamit ang Chamfer

Pinuputol ng {{cmd:CHAMFER}} ang sulok gamit ang tuwid na linya.

1. I-type ang `CHA` at pindutin ang {{key:Enter}}.
2. I-type ang `[Distansya (D)]` at pindutin ang {{key:Enter}}. I-type ang `300` at pindutin ang {{key:Enter}} para sa unang distansya, pagkatapos pindutin ang {{key:Enter}} para gamitin ang 300 para din sa pangalawa.
3. I-click ang loob na itaas na linya malapit sa kaliwang dulo nito, pagkatapos ang loob na kaliwang linya malapit sa itaas nitong dulo.

Pinuputol ang sulok nang 300 pabalik sa bawat linya, at isang pantay na linya ang nagdurugtong sa kanila. I-type ang `A` sa halip na `D` para magbigay ng haba sa unang linya at isang anggulo.

## Gumawa ng pinto gamit ang Trim

Iguhit muna ang dalawang jamb ng pinto sa ibabaw ng ilalim na dingding, pagkatapos i-trim ang mga linya ng dingding sa pagitan nila.

1. I-type ang `L` at pindutin ang {{key:Enter}}.
2. I-type ang `1000,200` at pindutin ang {{key:Enter}}.
3. I-type ang `@0,-600` at pindutin ang {{key:Enter}}, pagkatapos pindutin muli ang {{key:Enter}}.
4. Pindutin ang {{key:Enter}} para ulitin ang {{cmd:LINE}}.
5. I-type ang `1900,200` at pindutin ang {{key:Enter}}.
6. I-type ang `@0,-600` at pindutin ang {{key:Enter}}, pagkatapos pindutin muli ang {{key:Enter}}.

Mayroon ka nang dalawang maiikling linyang tumatawid sa ilalim na dingding, 900 ang layo sa isa't isa.

7. I-type ang `TR` at pindutin ang {{key:Enter}}. Sasabihin ng history ang `Current settings: Quick mode, edges: No extend`.
8. I-click ang loob na ilalim na linya sa pagitan ng dalawang jamb. Nawawala ang piraso na iyon. (Ipahinga muna ang pointer dito: ang piraso na aalisin ay nagiging kulay abo at may tuldok na linya.)
9. I-click ang panlabas na ilalim na linya sa pagitan ng dalawang jamb. Nawawala rin ang piraso na iyon.
10. I-click ang bahagi ng bawat jamb na lumalabas sa itaas ng dingding, at ang bahaging nasa ibaba nito.
11. Pindutin ang {{key:Enter}} para tapusin ang command.

Dapat makita mo ang 900 na butas sa ilalim na dingding, na may mga jamb na nagsasara sa dulo ng dingding.

Sa Quick mode (ang karaniwan), hindi ka hinihingan ng Trim na pumili muna ng mga cutting edge: bawat nakikitang object ay cutting edge. Piliin ang piraso na gusto mong mawala, o i-drag ang landas sa maraming piraso para i-trim ang lahat nang sabay. I-type ang `U` at pindutin ang {{key:Enter}} para ibalik ang huling pick o drag nang hindi lumalabas sa command. Ang fence, crossing, piniling edge, at {{key:Shift}} para mag-extend ay nasa [Trim at extend](topic:trim-and-extend).

## Pahabain ang linya hanggang makatagpo ang isa pa

Ang {{cmd:EXTEND}} ay nagpapahaba ng linya, arc o dulo ng polyline hanggang makatagpo nito ang susunod na object sa direksyong iyon.

1. I-type ang `L` at pindutin ang {{key:Enter}}.
2. I-type ang `1000,2000` at pindutin ang {{key:Enter}}.
3. I-type ang `@2000,0` at pindutin ang {{key:Enter}}, pagkatapos pindutin muli ang {{key:Enter}}. Humihinto ang linya nang 2000 bago ang kanang dingding.
4. I-type ang `EX` at pindutin ang {{key:Enter}}.
5. I-click ang bagong linya malapit sa dulo nitong kanan.
6. Pindutin ang {{key:Enter}} para tapusin ang command.

Umaabot na ngayon ang linya hanggang sa loob na mukha ng kanang dingding. Bawat nakikitang object ay hangganan; pumili malapit sa dulong dapat humaba. Sa loob ng {{cmd:TRIM}}, ang {{key:Shift}}+click ay gumagawa ng parehong bagay.

## Break at lengthen

Ang {{cmd:BREAK}} (`BR`, o {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) ay pumuputol ng puwang nang walang cutting edge: i-click ang object kung saan magsisimula ang puwang (ang click na iyon ang unang punto), pagkatapos i-click kung saan ito magtatapos. Sa bilog, ang bahaging counter-clockwise mula sa unang punto hanggang sa ikalawa ang aalisin. Ang `[Unang punto (F)]` sa ikalawang tanong ay nagpapahintulot na ibigay muli ang unang punto, at ang {{cmd:BREAKATPOINT}} ay humahati ng object sa dalawa sa isang punto nang walang puwang.

Binabago ng {{cmd:LENGTHEN}} (`LEN`) ang haba sa isang dulo:

1. I-type ang `LEN` at pindutin ang {{key:Enter}}. I-click ang linya para makita ang kasalukuyang haba nito; muling magtatanong ang prompt.
2. Pumili ng paraan: `DE` (Delta: halagang idadagdag, negatibo para ibawas; ang `A` para sa anggulo ng arc), `P` (Porsyento: ang 50 ay kalahati nito), `T` ([Kabuuan (T)]: ang haba na dapat nitong maging) o `DY` (Dinamiko: i-drag ang dulo).
3. I-click ang bawat object malapit sa dulong dapat gumalaw. Ang `[Bawiin (U)]` ay nagbabalik ng huli; ang {{key:Enter}} ang nagtatapos.

Maaaring pahabain ang mga linya, arc at bukas na polyline (ang dulong segment nila).

## Mga karaniwang pagkakamali

- **Nawala ang buong linya.** Walang tumawid dito, kaya binura ito ng Quick mode. I-type ang `U` para ibalik ito; tingnan kung talagang tumatawid dito ang linya ng pamputol (mag-zoom in) at hindi ito nasa layer na naka-off.
- **"Walang boundary sa direksyong iyon."** Walang nakitang mababanggaan ang Extend. Pumili nang mas malapit sa dulong dapat humaba.
- **"Masyadong malaki ang radius."** Lalampas ang arc sa dulo ng isa sa mga linya. Gumamit ng mas maliit na radius.
- **"Ang unang o huling segment lang ng bukas na polyline ang maaaring putulin pabalik."** Pumili ng dalawang magkatabing segment ng polyline, o i-type ang `P` para pabilugin ang bawat sulok nito.
- **Napunta sa maling gilid ang offset.** Ang gilid ay kung saan ka mag-click pagkatapos mapili ang object. I-undo gamit ang {{key:Mod+Z}} at mag-click sa kabilang gilid.
- **"Hindi ma-offset nang ganoon kalayo."** Babaligtarin ng offset ang arc, bilog o polyline sa loob-labas. Gumamit ng mas maliit na distansya.

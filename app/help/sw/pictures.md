---
title: Picha katika mchoro
summary: Weka picha ya PNG au JPEG, ikate kwenye mstatili au poligoni, onyesha picha ambazo DWG inatumia, na uzichapishe zikiwa kali.
keywords: pastearea, parea, copy area, copied area, markupcraft, true size, real size, overlay, ole, ole2frame, embedded object, paste picture, paste screenshot, ctrl+v, clipboard image, screenshot, picture, image, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, photo, raster, imagedef, xref, plot, pdf, resolution
from: 4025ac97
---

## Unachokwenda kutengeneza

Nembo ya kampuni iliyowekwa kwenye kizuizi cha kichwa, ikikatwa kwenye sehemu unayotaka, na PDF ambayo picha yake inachapishwa kwa azimio lake lenyewe.

## Weka picha

1. Andika {{cmd:IMAGEATTACH}} (au `IAT`) kisha bonyeza {{key:Enter}}. Chagua faili ya PNG au JPEG.
2. `Specify the lower-left corner`: bofya, au andika nukta.
3. `Specify its width`: upana kwa vitengo vya mchoro. {{key:Enter}} huweka upana uliotolewa: kitengo kimoja kwa pikseli, au upana uliotoa kwa faili hii mara ya mwisho (ombi linasema lipi).
4. `Specify its rotation angle`: {{key:Enter}} kwa hakuna.

Picha ni kitu kimoja: ichague kwa fremu yake, na usogeze, nakili, zungusha, ongeza ukubwa, au futa kama bloku yoyote.

:::note
Faili ya picha inabaki pamoja na mchoro wakati umefunguliwa. DWG iliyohifadhiwa inataja jina la faili, kama programu nyingine zinavyofanya; haishiki pikseli. Weka picha karibu na mchoro.
:::

## Bandika picha ya skrini au picha iliyonakiliwa

1. Nakili picha (picha ya skrini kwa {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=zana yako ya picha ya skrini}}, au Nakili picha katika programu nyingine au kivinjari).
2. Elekeza mahali inapostahili kwenda kwenye mchoro na bonyeza {{key:Mod+V}}.

Kona ya chini kushoto ya picha inatua kwenye kielekezi (au katikati ya mwonekano), ikiwa na upana wa 40 % ya kile unachokiona; isogeze, ibadilishe ukubwa na uikate kama picha nyingine yoyote. Jina lake ni la mchoro pamoja na `-picture-1.png` (kisha `-2`, …), na historia inalisema.
{{ui:Edit}} › {{ui:More}} › {{ui:Paste a picture}} inafanya vivyo hivyo kutoka kwenye menyu (kivinjari kinaweza kuuliza kwanza).

DWG inahifadhi jina la faili ya picha pekee, kwa hivyo kuhifadhi mchoro pia kunahifadhi picha kama faili yake yenyewe. Weka hizo mbili kwenye folda moja: mchoro unaonyesha picha kutoka hapo. Kwenye kivinjari, hiyo ni upakuaji wa pili, na historia inasema hivyo.
Ikiwa kuna vitu vya CadCraft pekee kwenye ubao wa kunakili, {{key:Mod+V}} inavibandika, kama awali.

## Bandika eneo lililonakiliwa katika MarkupCraft

{{ui:Copy area}} katika MarkupCraft hunakili sehemu ya karatasi kama picha inayojua ukubwa wake. CadCraft inaibandika kwa ukubwa huo.

1. Katika MarkupCraft, nakili eneo (mstatili, duara au umbo huru; {{ui:Copy as overlay}} ikiwa unataka kuona mchoro wako kupitia hilo).
2. Katika CadCraft, bonyeza {{key:Mod+V}}, au andika {{cmd:PASTEAREA}} (au `PAREA`), au chagua {{ui:Edit}} › {{ui:More}} › {{ui:Paste a copied area}}.
3. `Specify the lower-left corner of the copied area`: bofya, au andika nukta. Fremu ya ukubwa wa eneo inafuata kielekezi.

Inavyotua kwa ukubwa:

- **Karatasi ilikuwa na skeli ya mchoro:** katika ukubwa wake halisi, kwa vitengo vya mchoro (kipimo cha 1:50 cha ngazi ya m 2 ni m 2 kwa urefu katika mchoro wa mita, 78.74 katika mchoro wa inchi). Hakuna swali zaidi linaloulizwa.
- **Karatasi haikuwa na skeli:** CadCraft inasema ukubwa wake kwenye karatasi na inaomba skeli: andika `100` kwa karatasi ya 1:100, bonyeza {{key:Enter}} kwa ukubwa wa karatasi, au andika `P`, bofya pointi mbili kwenye picha iliyobandikwa kisha uandike zinatenganishwa kwa umbali gani kwa kweli (kama {{cmd:SCANSCALE}} inavyofanya). Kona ya chini kushoto inabaki pale ulipoweka.

Mchoro usio na vitengo unachukua milimita, kama msingi wa PDF unavyofanya. Mwingiliano unabaki na karatasi yake wazi, na unaanza umefifia kama ulivyonakiliwa; nje ya duara au umbo huru pia ni wazi. Eneo lililobandikwa ni picha kama nyingine yoyote: sogeza, zungusha, ongeza ukubwa, kata au futa, na kubandika kote ni hatua moja ya kutendua. Ikihifadhiwa kama DWG ni IMAGE yenye ufifi wake na uwazi wake.

{{key:Mod+V}} hubandika eneo pale picha iliyo kwenye ubao wa kunakili ni ya eneo hilo, au pale eneo lilinakiliwa baada ya chochote ulichonakili katika CadCraft (na ndani ya saa 6 zilizopita). Vinginevyo hubandika kama awali. {{cmd:PASTEAREA}} hubandika eneo la mwisho lililonakiliwa wakati wowote.

## Onyesha picha ambazo DWG inatumia

DWG huhifadhi tu mahali pa picha zake palipokuwa, kwa hivyo CadCraft inaonyesha kila moja kama fremu yenye jina lake la faili.

1. Andika {{cmd:IMAGE}} (au `IM`). Mstari wa amri unaorodhesha kila faili ya picha na kama inaonekana.
2. Chagua faili (kadhaa kwa mara moja). Faili ambayo jina lake lina lile ambalo mchoro unalitaja nayo huhesabiwa pia, kwa sababu usafirishaji mara nyingi huongeza kiambishi awali cha mradi.

## Kata picha

1. Andika {{cmd:IMAGECLIP}} (au `ICL`) kisha uchague picha.
2. Chagua `R` kisha bofya pembe mbili, au `P` kisha bofya pointi za poligoni, kisha {{key:Enter}}. `D` huondoa kata.

## Chapisha picha

Picha zinaingia kwenye PDF kama picha, kwa azimio lake lenyewe na chini ya mistari. Katika kisanduku cha {{ui:Plot}}, {{ui:Pictures}} inaweza kupunguza hadi 600, 300 au 150 dpi ili kufanya faili iwe ndogo. JPEG inaingia kama ilivyo.

## Kinachohifadhiwa wapi

| Umbizo | Picha |
|---|---|
| DWG (kila toleo) | Kama picha (IMAGE), pamoja na kata yake |
| DXF | Kama fremu zao pamoja na jina la faili; kuhifadhi kunasema hivyo |

## Vitu kutoka programu nyingine (OLE)

Mchoro unaweza kubeba vitu vilivyotengenezwa na programu nyingine, kama picha kutoka programu ya kuchora au eneo la lahajedwali (vitu vya OLE). CadCraft haviendeshi wala kuvihariri, na haviwezi kuingiza vipya. Inachofanya:

- **Katika DXF**, kitu cha OLE kinafunguka kama fremu. Kikiwa kimehifadhi picha yake yenyewe na picha hiyo ni bitmap, picha inachorwa ndani ya fremu; vinginevyo fremu inabeba lebo yenye aina ya kitu, kama "Microsoft Excel Worksheet (OLE)". Unaweza kusogeza, kunakili na kufuta fremu kama bloku. {{cmd:SAVEAS}} kwenda DXF 2000 kinakiandika tena kama kitu cha OLE, na data yake haijabadilika.
- **Katika DWG**, vitu vinahifadhiwa na kuandikwa tena unapohifadhi kama DWG, baiti kwa baiti, lakini **hazionyeshwi**: DWG inashika mahali pa kitu ndani ya data yake yenyewe, na CadCraft bado haikisomi. Historia inasema vingapi vilihifadhiwa. Andika {{cmd:OLELIST}} kuona vilivyo (aina, ukubwa, kama kila kimoja kilihifadhi picha) na kuweka nakala ya picha mahali unapochagua: **Weka** inauliza nambari, kona ya chini kushoto na upana, na inachora fremu yenye picha ndani yake. Nakala hiyo ni fremu unayoweza kusogeza au kufuta; kitu chenyewe kinabaki kwenye mchoro na bado kinaandikwa tena unapohifadhi.
- Kitu kilichotoka DXF kinahifadhiwa katika DWG kama fremu yake na lebo tu; historia inasema hivyo. Hifadhi kama DXF 2000 ili kuweka kitu chenyewe.
- Picha za metafaili (ambazo programu nyingi huhifadhi) hazichorwi: fremu na lebo vinaonekana badala yake.

## Makosa ya kawaida

| Unaona | Sababu | Suluhisho |
|---|---|---|
| Fremu yenye jina la faili | CadCraft haina faili hiyo | {{cmd:IMAGE}}, kisha chagua faili |
| "Hiyo si picha" | Kitu kilichochaguliwa si picha | Chagua fremu ya picha |

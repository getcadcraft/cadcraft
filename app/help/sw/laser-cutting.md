---
title: Tuma mchoro kwa laser
summary: Fungua paneli ya Laser, chagua kile kila tabaka linafanya (kata, mkwaruzo, chonga, jaza, picha), angalia miendo ya kichwa, hifadhi G-code ya hali ya laser ya GRBL, au uitume kutoka kivinjari baada ya kuweka fremu ya kazi.
keywords: laser, laser cutter, laser engraver, GRBL, G-code, gcode, chonga, engrave, jaza, fill, dither, kuchonga picha, picha, mkwaruzo, score, kata, cut, Web Serial, weka fremu kwenye kazi, frame the job, nguvu, power, kasi, speed, pitio, passes, LASER, LASERCUT, CNC
from: 72b56db0
---

Paneli ya {{ui:Laser}} hugeuza tabaka za mchoro kuwa programu ya laser inayoendeshwa na GRBL (wadhibiti wengi wa diode na CO2 wa hobi na warsha ndogo). Andika `LASER` (au `LASERCUT`) kisha bonyeza {{key:Enter}}, au chagua {{ui:Laser…}} kwenye menyu ya {{ui:Zaidi}} ya kikundi cha {{ui:Mwonekano}}. Kwenye mitindo ya utepe, iko kwenye menyu ya {{ui:Faili}} na karibu na {{ui:Chapisha}}. Paneli hufunguka juu ya mchoro na inabaki wazi unapochora: onyesho la awali hufuata kila badiliko.

:::warning
Jaribu kila mpangilio kwenye chakavu kwanza, vaa miwani ya kinga inayotoshea laser yako, weka kifuniko kimefungwa pale kilipo, na usiache laser inayofanya kazi bila mtu. Namba ambazo tabaka huanza nazo ni viashiria, si mapendekezo kwa nyenzo yoyote.
:::

## Kinachotumwa

Paneli inasoma modeli (si karatasi), kwenye tabaka zilizowashwa na zisizogandishwa:

- Mistari, arc, duara, polilaini (sehemu za arc zinabaki arc), duaradufu na splines. Umbo linaloishia pale linapoanzia linahesabiwa kuwa lililofungwa.
- Bloku hugawanywa: kitu kilicho kwenye tabaka 0 ndani ya bloku huenda na tabaka la rejeleo la bloku.
- Mistari ya kivuli hutuma mpaka wake, hivyo nembo iliyojazwa kwenye tabaka la **Jaza** itajazwa.
- Picha (`IMAGEATTACH`) huchongwa kwenye tabaka lililowekwa **Chonga picha**, ikiwa imenyooka (si kuzungushwa wala kuinamishwa) na faili yake iko wazi kwenye CadCraft.
- Maandishi, vipimo, viongozi, nukta na mistari ya ujenzi hazitumwi; paneli inasema ni ngapi imeacha. Ili kuchoma maandishi, chora herufi kama maumbo au uzijaze kwa mistari ya kivuli.

Vipimo hutumwa kwa milimita kutoka vitengo vya mchoro (`UNITS`): mchoro wa inchi huzidishwa kwa 25.4. Mchoro usio na vitengo huwekwa kitengo kimoja hadi milimita moja. Weka alama {{ui:Vitu vilivyochaguliwa pekee}} ili kutuma sehemu ya mchoro.

## Chagua kile kila tabaka linafanya

Kila tabaka lenye kitu ndani yake ni safu. {{ui:Hufanya}} huiweka kuwa **Kata**, **Mkwaruzo**, **Chonga mistari**, **Jaza maumbo**, **Chonga picha** au **Haitumwi**, pamoja na {{ui:Nguvu %}}, {{ui:Kasi mm/min}} na idadi ya {{ui:Pitio}}. Kila badiliko ni hatua moja ya kutendua na huhifadhiwa kwenye mchoro: DWG (kila toleo ambalo CadCraft huhifadhi) na DXF huhifadhi mipangilio, kwa hiyo mchoro hufunguka nayo wakati ujao. Programu nyingine hufungua faili kama kawaida; zinaona bloku moja isiyotumika iitwayo CADCRAFT_LASER (kuisafisha huko huondoa mipangilio).

- **Jaza** huchoma ndani ya maumbo yaliyofungwa kwa mistari, iliyotengana kwa {{ui:Nafasi ya mistari}}, kwa {{ui:Pembe}}, pande zote mbili au moja, na overscan ili kichwa kiwe kwenye kasi laser inapowaka; cross-hatch huongeza pitio la pili kwa 90°. Umbo lenye shimo hubaki wazi kwenye shimo.
- **Chonga picha** hugeuza picha kuwa vitone (Floyd–Steinberg, Atkinson, kwa mpangilio, au nyeusi na nyeupe tu kwa kizingiti) au, kwa *Viwango vya kijivu*, kuwa nguvu inayobadilika.
- Mpangilio: picha na majaza kwanza, kisha kuchonga mistari, kisha mikwaruzo, kisha kukata, ili sehemu iliyokatwa isisogee wakati inachongwa. Ndani ya tabaka moja njia zinakwenda **ndani kwanza** (shimo kabla ya sahani iliyomo), zilizo karibu zaidi zinafuata.

## Angalia, kisha hifadhi

Onyesho la awali linachora kile kichwa kinachofanya: mistari inayochoma kwa rangi, miendo ya haraka kwa kijivu, na kisanduku cha kijani kuzunguka kila kitu kinachochoma. Chini yake kuna ukubwa, urefu wa kuchoma na makadirio ya muda (bila kuongeza kasi; mashine halisi huchukua muda zaidi). {{ui:Hifadhi G-code…}} huandika G-code ya hali ya laser ya GRBL: `$32=1`, `M4` (au `M3`) pamoja na thamani za S, miendo `G0` na `G1`, na `M5` mwishoni. X0 Y0 ni kona ya chini kushoto ya kazi isipokuwa ukichagua asili ya mchoro: weka sifuri ya kazi ya mashine yako hapo.

## Tuma kutoka kivinjari

Kwenye Chrome na Edge, {{ui:Unganisha…}} inakuomba uchague mlango wa USB wa laser. Hakuna kinachounganishwa au kutumwa hadi ubonyeze kitufe. Bonyeza {{ui:Weka fremu kwenye kazi}} kwanza: kichwa kinafuatilia kisanduku cha kazi na laser **imezimwa** (au kwa nguvu ndogo uliyoweka kwa kiashiria) ili uone itakapochoma. Ndipo {{ui:Tuma kazi}} inapowaka, na huzima tena ukibadilisha chochote. {{ui:Sitisha}} hushikilia kichwa, {{ui:Simamisha}} hukishikilia, huweka upya kidhibiti (laser inazimwa) na kutuma `M5`. Pale Web Serial isipokuwepo (Firefox, Safari, na CadCraft Studio, ambayo bado haina Web Serial) paneli inatoa kuhifadhi tu: hifadhi G-code na uitume kwa programu ya laser yako yenyewe.

## Bado hakijajengwa

Bado hakijajengwa: miundo ya vidhibiti vingine (Ruida, laser za Marlin, faili za wauzaji), vichupo na njia za kuingia, kukabiliana kwa kerf, maktaba za nyenzo, mihimili ya rotary na ya Z, kupanga kwa kamera, na maandishi kama mistari ya nje.

---
title: Geuza mwonekano na tumia kuratibu zako (UCS)
summary: Geuza mwonekano kwa 90° au kwa pembe yoyote bila kusogeza chochote kwenye mchoro, na weka mfumo wa kuratibu wa mtumiaji (UCS) ili nukta, ortho, ufuatiliaji wa polar, gridi na maandishi mapya yafuate shoka za jengo lenyewe.
keywords: ucs, mfumo wa kuratibu wa mtumiaji, mpango, geuza mwonekano, zungusha mwonekano, msokoto wa mwonekano, ucs z, ucs 3point, ucs object, ucs world, ucs yenye jina, ucsfollow, turnleft, turnright, turnworld, jengo lenye pembe, gridi iliyozungushwa
from: 6f152c65
---

## Utakachojifunza

Jinsi ya kutazama mchoro ukiwa umegeuzwa, ili jengo lililochorwa kwa pembe lionekane mraba kwenye skrini, na jinsi ya kuandika nukta kando ya shoka zake yenyewe. Hakuna kitu kwenye mchoro kinachosogea unapofanya hivi: vitu vinabaki na kuratibu zake, kugeuza si uhariri, na mchoro haiwekwi alama kama umebadilishwa.

## Geuza mwonekano robo

1. Bofya {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Geuza mwonekano digrii 90 kushoto}} au {{ui:Geuza mwonekano digrii 90 kulia}}.

Mchoro unazunguka kwenye skrini kuzunguka katikati ya eneo la mchoro. Fanya tena ili kuendelea kugeuza.

2. Bofya {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Rudi duniani}} ili kuusawazisha tena.

Amri zilizo nyuma yake ni {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} na {{cmd:TURNWORLD}}. Ili kupa mojawapo kitufe, ongeza mstari kama `TL=TURNLEFT` kwenye majina yako mbadala kwa {{cmd:ALIASEDIT}}.

## Panga sawa na jengo lenye pembe

1. Andika `UCS` kisha bonyeza {{key:Enter}}, kisha `OB` na {{key:Enter}}.
2. Bofya mstari wa ukuta karibu na ncha inayopaswa kuwa asili.

UCS sasa inaanzia kwenye ncha hiyo ikiwa na shoka yake ya X kando ya ukuta, na mwonekano unageuka ili ukuta uwe sawa kwenye skrini. Ikoni ya shoka kwenye kona ya chini kushoto inaonyesha shoka za UCS zinaelekea wapi.

3. Chora kama kawaida. Ukiwa umeweka UCS:
   - `x,y` na `@dx,dy` hupimwa kando ya shoka za UCS; `d<a` hupima pembe kutoka shoka ya X ya UCS.
   - {{ui:Ortho}}, ufuatiliaji wa polar na gridi hufuata shoka za UCS, na msalaba pia.
   - Maandishi mapya na aya mpya hukimbia kando ya shoka ya X ya UCS; mlalo na wima wa {{cmd:DIMLINEAR}} nao unafuata.
   - Kuratibu kwenye upau wa hali na kutoka {{cmd:ID}} ni kuratibu za UCS.
4. Ili kuandika nukta ya dunia ukiwa umeweka UCS, weka `*` mbele: `*0,0` au `@*100,0`.
5. Andika `UCS`, {{key:Enter}}, kisha {{key:Enter}} tena ili kurudi kwenye dunia.

## Njia nyingine za kuweka UCS

Kwenye kidokezo cha {{cmd:UCS}}:

| Unachoandika | Kinachofanya |
|---|---|
| nukta | Asili mpya; kisha bofya nukta kwenye shoka mpya ya X, au bonyeza {{key:Enter}} kuweka pembe |
| `Z` | Geuza UCS kuzunguka asili yake kwa pembe unayoandika (digrii, kinyume cha saa) au uchague |
| `3` (3point) | Asili, nukta kando ya shoka chanya ya X, na nukta upande chanya wa Y |
| `OB` (OBject) | Kutoka mstari, mkunjo, duara, sehemu ya polilaini, maandishi, rejeo la bloku, nukta au mstari wa ujenzi |
| `P` (Previous) | UCS iliyotangulia hii (kumi za mwisho zinahifadhiwa mchoro ukiwa wazi) |
| `W` (World) | Rudi kwenye dunia |
| `NA` (NAmed) | `S` huhifadhi UCS ya sasa kwa jina, `R` hurejesha moja, `D` hufuta moja, `?` huorodhesha |

Kila mabadiliko yanageuza mwonekano ili shoka mpya ya X ya UCS iwe sawa. {{cmd:PLAN}} inageuza mwonekano bila kubadilisha UCS: {{key:Enter}} kwa UCS ya sasa, `U` kwa iliyohifadhiwa, `W` kwa dunia.

## Vyema kujua

- Kila kidirisha cha skrini iliyogawanywa kinabaki na mzunguko wake. UCS ni ya mchoro.
- Karatasi zinafanya kazi kwa kuratibu za karatasi; weka UCS kwenye kichupo cha {{ui:Modeli}}, au ndani ya dirisha la mwonekano.
- Madirisha ya uteuzi yaliyoburutwa kwenye mwonekano uliogeuzwa huchagua kile kilicho ndani yake kwenye skrini.
- Taratibu za LISP zinapata nukta katika UCS kutoka `getpoint`, zinaweza kusoma `UCSORG`, `UCSXDIR`, `UCSYDIR` na `VIEWTWIST`, na `trans` inabadilisha kati ya dunia, UCS na onyesho.

:::note
Faili iliyohifadhiwa itahifadhi UCS na mzunguko wa mwonekano katika toleo la baadaye; hadi wakati huo vinadumu mchoro ukiwa wazi.
:::

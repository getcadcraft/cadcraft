---
title: Uingizaji wa kuratibu na umbali
summary: Kila njia ya kuandika nukta, umbali, pembe au nambari kwenye mstari wa amri wa CadCraft, pamoja na mifano.
keywords: ingizo linalobadilika, dyn, f12, tab, kuratibu, kamili, jamaa, polar, @, umbali wa moja kwa moja, pembe, digrii, nukta ya mwisho, lastpoint, kuandika nukta, ingizo, hesabu, kikokotoo, cal, pamoja, sehemu, usemi
from: 7de9252d
---

## Nukta

Nukta inapoulizwa, andika mojawapo ya haya kisha bonyeza {{key:Enter}}:

| Unaandika | Maana | Mfano |
|---|---|---|
| `x,y` | Kamili: inapimwa kutoka asili 0,0 | `2500,1200` |
| `#x,y` | Pia kamili (imekubaliwa kwa mazoea) | `#2500,1200` |
| `@dx,dy` | Jamaa: kuvuka na kupanda kutoka nukta ya mwisho | `@600,0` |
| `@d<a` | Polar ya jamaa: umbali na pembe kutoka nukta ya mwisho | `@1500<45` |
| `d<a` | Polar kamili: umbali na pembe kutoka asili | `3000<90` |
| nambari moja | Umbali wa moja kwa moja: mbali kiasi hicho kutoka nukta ya msingi, kuelekea msalaba | `1200` |
| `*x,y`, `@*dx,dy` | Kuratibu za dunia wakati UCS imewekwa | `*0,0` |

Ukiwa na UCS imewekwa ({{cmd:UCS}}), `x,y`, `@dx,dy` na pembe katika `d<a` zinapimwa kando ya shoka za UCS. Tazama [Geuza mwonekano na utumie kuratibu zako mwenyewe](topic:ucs-and-turned-view).

Au bofya kwenye mchoro; vishikizo vya vitu na Ortho vinatumika kwa mibofyo.

Kanuni:

- Koma inatenganisha X na Y. Desimali hutumia nukta: `1250.75,300`.
- Thamani hasi zinaenda kushoto na chini: `@-600,0`.
- Usiandike nafasi: {{key:Space}} inatuma mstari, kama {{key:Enter}}.
- Nambari zinaweza kuwa na kielezi: `1e3` ni 1000.
- Vitengo havioandikwi, wala mwandiko wa futi na inchi. Andika nambari tupu katika vitengo vya mchoro.

## Nukta ya mwisho

`@` inahesabu kutoka **nukta ya mwisho uliyotoa kwenye kidokezo chochote cha nukta**, katika amri yoyote: bofya, kunasa au nukta uliyoandika. Inakumbukwa kati ya amri, kwa hiyo unaweza kuanza mstari mpya `@0,500` mbali na mahali ambapo ule wa mwisho ulimalizika. Kabla hujatoa nukta yoyote, `@` inahesabu kutoka 0,0.

Baadhi ya mahali hili lina umuhimu:

- Katika {{cmd:COPY}}, baada ya nakala ya kwanza, nukta ya mwisho ni nukta ya nakala hiyo. `@600,0` mara mbili inaweka nakala 600 na 1200 kutoka asili.
- Baada ya kuweka kipimo, nukta ya mwisho ni mahali ulipoweka mstari wa kipimo, si mwisho wa kipimo.

Ukiwa na shaka, tumia nukta kamili, kunasa au umbali wa moja kwa moja.

## Umbali wa moja kwa moja

Nambari tupu ni umbali kutoka **nukta ya msingi** ya amri (nukta ambayo bendi ya kunyoosha inaanzia) kuelekea msalaba:

1. Sogeza msalaba upande unaotaka.
2. Andika umbali kisha bonyeza {{key:Enter}}.

Ukiwa na {{ui:Ortho}} imewashwa, mwelekeo unakaa moja kwa moja kulia-kushoto au juu-chini, jambo linalofanya hii kuwa njia ya haraka zaidi ya kuchora kuta za mraba. Ikiwa hakuna nukta ya msingi, au msalaba uko hasa juu yake, nambari inakataliwa kwa "Inahitaji nukta au neno la chaguo."

## Pembe

- Kwa digrii, kama nambari tupu: `30`, `-45`, `112.5`.
- Inapimwa kinyume cha saa kutoka mwelekeo chanya wa X (unaoelekea kulia): 0 ni kulia, 90 juu, 180 kushoto, 270 au -90 chini.
- Pale pembe inapoulizwa (mzunguko, pembe ya maandishi), unaweza pia kubofya: pembe inapimwa kutoka nukta ya msingi hadi bofya. Kabla nukta ya msingi haijawepo, bofya la kwanza linaiweka, na kidokezo kinauliza nukta ya pili.

## Umbali

Pale umbali unapoulizwa (radius, kukabiliana, urefu wa maandishi, kipengele cha skeli):

- andika nambari chanya (katika mchoro wa futi na inchi pia `12'6"` au `6-1/2`: tazama [Futi na inchi](topic:units-papers-scales#feet-and-inches-and-fractions)), au
- bofya nukta: umbali kutoka nukta ya msingi ya amri hadi hapo, au
- bofya nukta mbili pale hakuna nukta ya msingi: kidokezo kinabadilika kuwa `Specify second point`.

"Inahitaji nambari chanya au nukta mbili." Maana yake ni kwamba thamani haikuwa nambari, au ilikuwa hasi.

## Hesabu katika thamani iliyoandikwa

Popote urefu, kuratibu, pembe au nambari inapoandikwa (mstari wa amri, ingizo linalobadilika, visanduku vya Sifa na mazungumzo), unaweza kuandika hesabu kwa `+`, `-`, `*`, `/` na mabano badala ya kuikokotoa kwanza:

| Unaandika | Inatoa |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (katika mchoro wa futi na inchi) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, katika vitengo vya mchoro (vitengo vyake vikiwa vimewekwa) |
| `@4+7/16,0` | nukta 4.4375 kulia kwa ile ya mwisho |
| `360/7` | pembe ya digrii 51.43 |

- Dashi iliyoandikwa ndani ya urefu bado ni sehemu yake: `4-7/16` ni 4 7/16 na `24'-6"` ni futi 24 na inchi 6. Ili kutoa baada ya alama ya futi, maliza urefu kwanza, `24'-0"-6"`, au weka hesabu kwenye mabano na nafasi kuzunguka dashi, `(24' - 6")` (ndani ya mabano nafasi ni nafasi; nje yake inabonyeza {{key:Enter}}).
- Nambari tupu iliyoongezwa kwa urefu iko katika vitengo vya mchoro; kuzidisha au kugawanya kwa nambari hubadilisha ukubwa wa urefu. Urefu mbili zikizidishwa zinatengeneza eneo, kwa hiyo `2'*3'` inakataliwa.
- `abs`, `round`, `ceil` na `floor` pia zinafanya kazi: `round(10/3)`.
- Hesabu isiyoweza kusomwa inakataliwa pamoja na mahali ilipokosea, kwa mfano "Hesabu inaishia mapema (herufi ya 3): thamani haipo." Hakuna kinachosomwa kama 0 kamwe. {{cmd:CAL}} inachapisha thamani ya hesabu.

## Ingizo linalobadilika

{{ui:Dyn}} ({{key:F12}}, kwenye upau wa hali) inaweka thamani kando ya msalaba amri inapouliza nukta.

- Bado hakuna nukta ya msingi (nukta ya kwanza ya mstari), sehemu mbili ni **X** na **Y**.
- Baada ya hapo, ni **umbali** na **pembe** kutoka nukta ya mwisho.

Kuandika bado kunaenda kwenye mstari wa amri; sehemu iliyo kando ya msalaba inaonyesha, na bendi ya kunyoosha inafuata.

1. Andika thamani: inaingia kwenye sehemu iliyoangaziwa.
2. Bonyeza {{key:Tab}} (au koma baada ya X). Thamani inafungwa (inaonekana nzito) na sehemu inayofuata inaangaziwa. Umbali uliofungwa unaiweka bendi ya kunyoosha kwa urefu huo unapolenga kwa kipanya.
3. Andika thamani ya pili, au lenga tu, kisha bonyeza {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} inachora 50 moja kwa moja juu kutoka nukta ya mwisho.

Kubonyeza {{key:Enter}} baada ya thamani moja bila {{key:Tab}} hufanya kazi kama ingizo la umbali wa moja kwa moja. Futi na inchi pia zinafanya kazi kwenye sehemu (`12'6"`). Vidokezo vya umbali na pembe (radius ya duara, mzunguko) vinaonyesha thamani yake kando ya msalaba pia.

## Chaguo na thamani za awali

- Chaguo zinaonekana kwenye mabano ya mraba. Andika herufi kubwa za chaguo (`D` kwa [Diameter], `CL` kwa CLose) kisha bonyeza {{key:Enter}}. Sehemu ndefu za neno pia zinafanya kazi (`DIA`).
- Thamani ya awali inaonekana kwenye mabano ya pembe, kama `<500>`. Bonyeza {{key:Enter}} au ubofye kulia ili kuitumia.

## Mipangilio mingine ya kibodi na keypad

Majina ya amri, majina mafupi na herufi za chaguo ni herufi za Kilatini. Ukiwa na mpangilio wa Kigiriki, Kisiriliki (Kirusi, Kiukreni, Kibelarusi, Kiserbia, Kimasedonia, Kibulgaria), Kiebrania, Kiarabu, Kiajemi, Kithai au Kikorea unaotumika, hauhitaji kubadilisha mpangilio: pale neno ulilolichapa si amri, jina fupi au chaguo kama lilivyo, CadCraft inalisoma kwa vitufe ulivyobonyeza. Kitufe chenye herufi `L` kwenye kibodi ya Kilatini bado kinaanza `LINE`, na kitufe cha `C` bado kinajibu `Close`, bila kujali herufi gani mpangilio unaweka juu yake. Orodha ya amri zinazolingana juu ya mstari wa amri inafuata kanuni hiyo hiyo. Maandishi unayoyaandika pale amri inapoomba maandishi (yaliyomo ya {{cmd:TEXT}}, jina) hayabadilishwi kamwe.

Kwenye mpangilio ambao kitufe cha desimali cha keypad kinatoa koma, kitufe hicho kinaandika nukta kwenye mstari wa amri na kwenye visanduku vya nambari, kwa hiyo `12.5` inaweza kuandikwa kwenye keypad. Koma ya kibodi kuu bado inatenganisha `x,y`.

Vyote viwili vinaweza kuzimwa kwenye {{ui:Mipangilio}}: {{ui:Amri kwenye mpangilio usio wa Kilatini}} na {{ui:Kitufe cha desimali cha keypad}}.

## Onyesho la kuratibu

Upau wa hali unaonyesha X na Y za msalaba (katika UCS ikiwekwa), baada ya kunasa na Ortho. Amri ikiwa na nukta ya msingi huongeza `Δ` yenye umbali na pembe kutoka nukta hiyo, kwa mfano `Δ 1500 < 30°`: nambari unazoandika kama `@1500<30`.

Tumia {{cmd:ID}} kuchapisha kuratibu za nukta na {{cmd:DIST}} kupima umbali kati ya nukta mbili.

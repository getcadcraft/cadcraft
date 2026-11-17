---
title: Vitengo, ukubwa wa karatasi na skeli
summary: Maana ya vitengo vya mchoro katika CadCraft, ukubwa wa karatasi kwa karatasi na chapa, skeli zote za kawaida, na jinsi ukubwa wa maandishi na vipimo unavyohusiana na skeli ya chapa.
keywords: vitengo, milimita, inchi, futi, futi na inchi, usanifu majengo, uhandisi, sehemu, sehemu, lunits, muundo wa urefu, usahihi, mita, ukubwa wa karatasi, a3, a1, arch d, ansi, tabloid, letter, skeli, 1:100, skeli ya 1/4 inchi, skeli ya usanifu majengo, skeli ya uhandisi, insunits
from: 8346236a
---

## Vitengo vya mchoro

Unachora kwa ukubwa kamili, kwa vitengo vya mchoro. Kitengo kimoja kinamaanisha nini ni mpangilio wa **Vitengo** wa mchoro:

1. Bonyeza {{key:Esc}} ili kisichaguliwe chochote, kwenye kichupo cha {{ui:Model}}.
2. Katika {{ui:Current settings}}, chagua {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} au {{ui:Feet}}.

Vipimo vinaweza kuandika urefu wake kwa milimita, sentimita, mita au kilomita, bila kujali kitengo cha mchoro: tazama [Vipimo katika mm, cm, m au km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Kubadilisha vitengo hakubadilishi ukubwa wa chochote. Kinabadilisha jinsi skeli zinavyosomwa kwenye karatasi na katika chapa, na skeli zipi zinatolewa. Mchoro uliofunguliwa kutoka DWG au DXF unabaki na vitengo vilivyohifadhiwa kwenye faili; sehemu ya {{ui:Drawing}} katika paneli ya kushoto inaonyesha hivyo.

Mchoro wa {{ui:Unitless}} unachukuliwa kuwa katika kitengo cha karatasi: milimita kwenye karatasi za ISO, inchi kwenye karatasi za US.

## Futi na inchi, na sehemu

Jinsi urefu **unavyoandikwa na kuonyeshwa** ni mpangilio tofauti: muundo wa urefu. Haubadilishi jiometri yoyote; ni jinsi nambari zinavyoonekana na unachoweza kuandika tu.

1. Bonyeza {{key:Esc}} ili kisichaguliwe chochote, kwenye kichupo cha {{ui:Model}}.
2. Katika {{ui:Current settings}}, chagua {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) au {{ui:Scientific}} (`1.505E+02`).
3. Chagua {{ui:Precision}}: idadi ya desimali, au sehemu ndogo kabisa (1/16 ndiyo chaguo la kawaida kwa usanifu majengo).

Au andika {{cmd:UNITS}} (`UN`) kisha ujibu maswali yake mawili.

Kwa {{ui:Architectural}} au {{ui:Engineering}}, kitengo kimoja cha mchoro ni inchi moja, kama AutoCAD: weka {{ui:Units}} kuwa {{ui:Inches}} pia. Kisha unaweza kuandika urefu kwa futi na inchi popote urefu unapoombwa, na kwenye visanduku vya Sifa:

| Unaandika | Maana yake |
|---|---|
| `12'6"` au `12'-6"` | futi 12, inchi 6 (150) |
| `12'6-1/2"` | futi 12, inchi 6½. Tumia kistari kabla ya sehemu: {{key:Space}} ni {{key:Enter}} kwenye mstari wa amri. |
| `12'` | futi 12 |
| `6"` au `6` | inchi 6: nambari tupu ni inchi |
| `1/2`, `6-1/2` | sehemu zinafanya kazi katika muundo wowote |

Nukta zinachukua urefu uleule: `@12'6",0` au `@10'<90`. Pembe zinabaki katika digrii.

Muundo unaonyeshwa katika historia ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: maeneo kama inchi za mraba na futi za mraba), katika Sifa, katika kuratibu za upau wa hali, na katika **vipimo vipya**. Karatasi zinahifadhi vitengo vyake vya karatasi (milimita au inchi) kama desimali.

:::note
Muundo wa urefu unahifadhiwa katika faili za DWG na DXF, na kila kipimo kinabaki na chake: mchoro uliohifadhiwa unafunguka tena kama ulivyouacha.
:::

## Ukubwa wa karatasi

Karatasi na chapa za modeli zinatumia ukubwa huu, katika mwelekeo wowote:

| Karatasi | Ukubwa | Kitengo kwenye karatasi |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimita |
| ISO A3 | 420 × 297 mm | milimita |
| ISO A2 | 594 × 420 mm | milimita |
| ISO A1 | 841 × 594 mm | milimita |
| ISO A0 | 1189 × 841 mm | milimita |
| Letter | 11 × 8.5 in | inchi |
| Legal | 14 × 8.5 in | inchi |
| Tabloid / ANSI B | 17 × 11 in | inchi |
| ANSI C | 22 × 17 in | inchi |
| ANSI D | 34 × 22 in | inchi |
| ARCH C | 24 × 18 in | inchi |
| ARCH D | 36 × 24 in | inchi |
| ARCH E | 48 × 36 in | inchi |

Karatasi mpya huanza na ISO A3 kwa michoro ya metriki na isiyo na vitengo, na Tabloid kwa michoro ya inchi au futi. Chapa za modeli huanza na ISO A4 au Letter kwa njia ile ile, kisha zinakumbuka chaguo lako la mwisho. Karatasi kutoka kwa faili zilizofunguliwa zinabaki na ukubwa wake, zikionyeshwa kama "Maalum" pale si mojawapo ya hizi.

## Skeli

Skeli `1:n` inamaanisha kitengo kimoja kwenye karatasi kinaonyesha n ya kitengo kile kile kwenye modeli, kwa hivyo 1:100 inaonyesha mita 1 ya jengo kama milimita 10 za karatasi. CadCraft inahesabu hili kutoka kwa vitengo vya mchoro na kitengo cha karatasi.

**Skeli za metriki**, zinatolewa kwa kila mchoro: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Skeli za usanifu majengo**, zinatolewa wakati vitengo ni inchi au futi: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Skeli za uhandisi**, zinatolewa wakati vitengo ni inchi au futi: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Skeli zako mwenyewe.** Andika `SCALELISTEDIT` (au `SCALELIST`) kuongeza skeli yako mwenyewe, kama 1:75 au skeli ya eneo ya karatasi 2 : mchoro 300. `Add` huuliza jina, kisha vitengo vya karatasi na vitengo vya mchoro (jina kama `1:75` hutoa namba zake; bonyeza {{key:Enter}} kuzichukua). `Edit`, `Delete`, `List` na `Reset` hufanya kazi kwenye orodha ile ile; `Reset` hurudisha orodha ya kawaida. Skeli zako zinaonekana baada ya zile za kawaida katika orodha ya skeli ya dirisha katika Sifa na katika kisanduku cha {{ui:Plot to PDF}}, dirisha lenye skeli hiyo linasomeka kwa jina lake, na zinahifadhiwa kwenye mchoro (DWG na DXF 2000) kama orodha ya skeli ya mchoro. Mchoro uliofunguliwa kutoka programu nyingine huleta orodha yake; skeli zake zinazolingana na skeli ya kawaida hazioneshwi mara mbili.

Dirisha linapoelekezwa kwa {{ui:Show the whole model}} au {{ui:Pick a window on the model…}}, CadCraft huchagua skeli kubwa zaidi ya kawaida inayotoshea. {{ui:Fit the whole model}} huweka skeli sahihi badala yake, inayosomeka kama uwiano wa kawaida.

## Ukubwa kwenye karatasi na katika modeli

Ukubwa wa maandishi na wa vipimo uko katika vitengo vya nafasi unayochora.

| Unataka kwenye karatasi | Imechorwa kwenye karatasi | Imechorwa katika modeli kwa 1:50 (mchoro wa mm) | Imechorwa katika modeli kwa 1/4" = 1'-0" (mchoro wa inchi) |
|---|---|---|---|
| maandishi ya 2.5 mm | 2.5 | 125 | — |
| maandishi ya 3/32" | 0.09375 | — | 4.5 |

Kwa vipimo, weka ukubwa kama ukubwa wa karatasi na weka skeli ya jumla ({{cmd:DIMSCALE}}) kuwa skeli ya chapa: 50 kwa 1:50, 48 kwa 1/4" = 1'-0". Tazama [Weka ukubwa wa vipimo](topic:dimension-settings).

## Panga kwa skeli

Chora modeli kwa ukubwa kamili na uiache CadCraft ifanye hesabu zilizo hapo juu kwa ajili yako.

1. Chagua maandishi au vipimo vinavyopaswa kubaki na ukubwa wao kwenye karatasi. Katika Sifa tia alama {{ui:Annotative}}. {{ui:Size on paper}} kisha inasoma, kwa mfano, `2.5 mm at 1:50`.
2. Andika {{cmd:ANNOSCALE}} na skeli ambayo mchoro utachapishwa nayo, kama `1:100`.

Kila maandishi na kipimo cha ufafanuzi kinabadilishwa ukubwa ili kichapishwe kwa ukubwa uleule kwa skeli mpya: maandishi ya 2.5 mm ni 125 kwa urefu katika mchoro wa milimita kwa 1:50 na 250 kwa 1:100. Upana wa aya unabadilika nao; maandishi ya kipimo, mishale na mapengo vinabadilika pamoja (skeli yake ya jumla). Ni hatua moja ya kutendua, na vitu visivyo vya ufafanuzi havibadilishwi kamwe.

Mpangilio huu unahifadhiwa katika DWG na DXF: programu nyingine zinasoma alama ya ufafanuzi, na CadCraft pia inahifadhi skeli ambayo kila kitu kimepangiwa.

Ikiwa ofisi yako inaweka urefu wa karatasi katika nyongeza ya Default Policies (Mipangilio › Global › Default Policies › Ukubwa wa ufafanuzi kwenye karatasi), {{cmd:ANNOSCALE}} pia huweka urefu ambao maandishi mapya yanaanza nao kuwa urefu wa ofisi kwa maelezo katika skeli hiyo. Tazama [Default Policies](topic:default-policies).

### Kitu kimoja katika skeli kadhaa

Karatasi mara nyingi huonyesha mpango uleule kwa 1:100 na sehemu yake kwa 1:50. Pa maelezo na vipimo skeli zote mbili, na kila dirisha litaonyesha kwa ukubwa wa karatasi yake:

1. Chagua maandishi ya ufafanuzi na vipimo kisha andika `OBJECTSCALE`.
2. Chagua `Add` kisha andika skeli, kwa mfano `1:50`. (`Current scale` huongeza skeli ya ufafanuzi ya mchoro; `List` huonyesha kile kila kitu kinachohifadhi; `Delete` huondoa moja.)

Dirisha lenye skeli kwenye orodha ya kitu linaonyesha kwa ukubwa wa skeli hiyo: maandishi ya 2.5 mm yanachorwa 250 kwa urefu kupitia dirisha la 1:100 na 125 kupitia la 1:50, kwenye skrini na kwenye chapa. Kitu kinabaki pale kilipo; ukubwa tu ndio unatofautiana. Katika dirisha lenye skeli isiyo kwenye orodha ya kitu, kitu kinaonyeshwa kwa ukubwa wake wa sasa, hadi uandike `ANNOALLVISIBLE` na uchague `OFF`: ndipo kinaachwa hapo. {{cmd:ANNOSCALE}} hubadilisha ukubwa wa vitu vinavyoorodhesha skeli mpya na kuacha vingine kama vilivyo.

Orodha hizi zinahifadhiwa katika DWG na DXF kama data ya CadCraft yenyewe. Programu nyingine huona kila kitu kama cha ufafanuzi, kwenye skeli moja ambayo kimepangiwa. Swichi ya ANNOALLVISIBLE haihifadhiwi kwenye faili.

## Unene wa mstari na aina za mistari

Tabaka, au kitu, kinaweza kuwa na **unene wa mstari** (0.05 hadi 2.11 mm) na **aina ya mstari** (mistari ya mishipi, iliyofichwa, katikati, phantom, nukta…). Yaweke katika paneli ya kulia: bila kitu chochote kuchaguliwa, {{ui:Linetype}} na {{ui:Lineweight}} chini ya {{ui:Current settings}} ndivyo vitu vipya vinavyopata ({{ui:By layer}} kufuata tabaka lao), na mbili chini ya {{ui:Tabaka …}} ni za tabaka la sasa. Vitu vikiwa vimechaguliwa, safu hizo mbili pamoja na {{ui:Linetype scale}} hubadilisha vitu hivyo. Amri ni {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) na {{cmd:LTSCALE}} (`LTS`).

Aina za mistari zinaonekana kwenye skrini na katika chapa. Mishipi yake iko katika vitengo vya mchoro: mchoro wa metriki unatumia ukubwa wa ISO (DASHED: mishipi ya 12.7 mm), mchoro wa inchi unatumia ule wa inchi (0.5"). Mishipi ikionekana midogo au mikubwa mno, badilisha {{ui:Linetype scale}} (LTSCALE) ya mchoro: kila mshipi na pengo huzidishwa nayo; skeli ya kitu chenyewe huizidisha tena. Muundo mwembamba mno kuonekana kabisa unachorwa kama mstari mzima.

Unene wa mistari unachapishwa katika chapa, katika mm kwenye karatasi, bila kujali skeli. Mistari yenye unene wa {{ui:Default}} hutumia upana wa kalamu uliochaguliwa katika kisanduku cha {{ui:Plot to PDF}} (0.13 hadi 0.70 mm; 0.25 mm kuanzia nayo); unene wa 0 unachapishwa kama mstari mwembamba zaidi. Kwenye skrini kila mstari una pikseli moja kwa upana hadi ubonyeze {{ui:LWT}} kwenye upau wa hali (au uandike {{cmd:LWDISPLAY}}): ndipo unene wa zaidi ya 0.25 mm unachora mpana zaidi (0.5 mm = pikseli 2) katika modeli, na kwa upana wake halisi kwenye karatasi pale kuna karatasi. Chaguo hilo linahifadhiwa kwenye kivinjari hiki.

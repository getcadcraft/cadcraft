---
title: Weka karatasi yenye kizuizi cha kichwa na madirisha ya mwonekano
summary: Tengeneza karatasi (mpangilio) yenye mpaka na kizuizi cha kichwa, weka skeli ya dirisha la mwonekano, ongeza dirisha la pili kwa undani, na ujaze kizuizi cha kichwa.
keywords: layout, sheet, paper space, viewport, mview, vpview, title block, scale, paper size, border, vports, plot scale, mspace, pspace, model space, enter viewport, double-click viewport
from: 45a45de8
---

## Unachokwenda kutengeneza

Karatasi ya A3 yenye kizuizi cha kichwa, mpango mzima katika dirisha moja la mwonekano kwa 1:100, na dirisha la pili linaloonyesha kona moja kwa 1:20.

## Modeli na karatasi

Unachora jengo kwenye kichupo cha {{ui:Model}}, kwa ukubwa kamili: ukuta wa m 6 ni vitengo 6000 kwa milimita. **Karatasi** (mpangilio) ni kipande cha karatasi, kinachopimwa kwa milimita au inchi. **Dirisha la mwonekano** ni dirisha lililokatwa kwenye karatasi linaloonyesha modeli kwa skeli.

## Kabla ya kuanza

1. Fungua au chora mpango kwenye kichupo cha {{ui:Model}}.
2. Bonyeza {{key:Esc}} ili kisichaguliwe chochote.
3. Katika {{ui:Current settings}}, weka {{ui:Units}} kuwa kitengo ulichochorea, kwa mfano {{ui:Millimeters}}.

Vitengo ni muhimu: skeli ya dirisha la mwonekano kama 1:100 inamaanisha milimita moja kwenye karatasi inaonyesha milimita 100 halisi, kwa hivyo CadCraft inahitaji kujua kitengo kimoja cha mchoro ni nini. Mchoro ulioachwa kama {{ui:Unitless}} unachukuliwa kuwa katika kitengo cha karatasi (milimita kwenye karatasi za ISO, inchi kwenye karatasi za US).

## Tengeneza karatasi

1. Bofya kitufe cha {{ui:+}} upande wa kulia wa vichupo chini ya mchoro, au andika `LAYOUT` kisha bonyeza {{key:Enter}}, au bofya {{ui:New sheet}}.

Kichupo kipya, `Layout1`, kinafunguka. Utaona karatasi juu ya meza nyeusi zaidi: mpaka, kizuizi cha kichwa kwenye kona ya chini kulia, na dirisha moja la mwonekano juu yake linaloonyesha modeli yote kwa skeli kubwa zaidi ya kawaida inayotoshea. Historia inataja karatasi: ISO A3 kwa michoro ya kipimo na isiyo na vitengo, Tabloid (ANSI B) kwa michoro ya inchi au futi.

2. Bofya {{ui:Extents}} ili kutoshea karatasi kwenye skrini.

## Chagua karatasi

1. Bonyeza {{key:Esc}} ili kisichaguliwe chochote. Kichwa cha paneli ya kulia kinasoma "Karatasi: Layout1".
2. Katika {{ui:Name}}, andika `A-101 Plan` kisha bonyeza {{key:Enter}}. Kichupo kinabadilishwa jina.
3. Katika {{ui:Paper}}, chagua ukubwa.
4. Katika {{ui:Orientation}}, chagua {{ui:Landscape}} au {{ui:Portrait}}.

:::warning
Kubadilisha karatasi hakusogezi wala kubadilisha ukubwa wa kilichopo kwenye karatasi tayari. Baada ya kubadilisha, angalia kama mpaka, kizuizi cha kichwa na dirisha la mwonekano bado vinatoshea, kisha uvisogeze au ubadilishe ukubwa kwa vishikio. Kubadilisha kati ya karatasi ya milimita na ya inchi kunahifadhi namba, kwa hivyo kila kitu kinabadilika ukubwa: upau wa hali unakuonya.
:::

## Weka skeli ya dirisha la mwonekano

1. Bofya fremu ya dirisha la mwonekano (ukingo wake). Kichwa cha paneli kinasoma "Dirisha la mwonekano".
2. Katika {{ui:Scale}}, chagua `1:100`.

Modeli ndani ya dirisha inachorwa upya kwa 1:100, ikiwa katikati pale ilipokuwa. Orodha inatoa skeli za metriki kutoka 10:1 hadi 1:10000; michoro ya inchi au futi pia hupata skeli za usanifu majengo (1/4" = 1'-0" na kadhalika) na skeli za uhandisi (1" = 20' na kadhalika). {{ui:Fit the whole model}} huweka skeli sahihi isiyo ya kawaida inayotoshea kila kitu.

3. Ikiwa mpango haupo katikati tena, badilisha {{ui:X}} na {{ui:Y}} chini ya {{ui:View center (model)}} katika paneli ya kulia: ni nukta ya modeli inayoonekana katikati ya dirisha.

## Onyesha sehemu ya modeli kwenye dirisha

1. Dirisha likiwa limechaguliwa, bofya {{ui:Pick a window on the model…}} katika paneli ya kulia (au andika `VPVIEW` kisha bonyeza {{key:Enter}}).
2. CadCraft inabadilisha hadi kichupo cha {{ui:Model}}. Bofya kona moja ya eneo la kuonyesha.
3. Bofya kona iliyo kinyume.

Unarudi kwenye karatasi, na dirisha linaonyesha eneo hilo kwa skeli kubwa zaidi ya kawaida inayotoshea; historia inasema ipi. {{ui:Show the whole model}} hurudisha mpango mzima kwa skeli ya kawaida.

## Ongeza dirisha la pili kwa undani

1. Tengeneza nafasi kwenye karatasi: chagua dirisha la kwanza kisha buruta kishikio cha kona ili kulipunguza.
2. Andika `MV` kisha bonyeza {{key:Enter}}, au bofya {{ui:Viewport}} katika kundi la Karatasi.
3. Bofya kona moja ya dirisha jipya kwenye karatasi.
4. Bofya kona iliyo kinyume.

Dirisha jipya linaonyesha modeli yote. Historia inasema skeli yake.

5. Bofya fremu ya dirisha jipya.
6. Bofya {{ui:Pick a window on the model…}} kisha chagua eneo dogo kuzunguka kona moja ya mpango.
7. Katika {{ui:Scale}}, chagua `1:20`.

Fremu za madirisha ya mwonekano ziko kwenye tabaka `Viewports`, lililowekwa kutochapishwa, kwa hivyo fremu zinaonekana kwenye skrini lakini si kwenye PDF.

## Jaza kizuizi cha kichwa

Kizuizi cha kichwa kimetengenezwa kwa mistari ya kawaida na maandishi kwenye tabaka `Title block`. Kinaanza na jina la mchoro, skeli ya dirisha la kwanza, tarehe ya leo na nambari ya karatasi.

1. Bofya mara mbili maandishi makubwa ya kichwa. Kisanduku cha kuhariri kinafunguka juu yake.
2. Andika kichwa cha karatasi.
3. Bofya {{ui:OK}}, au bonyeza {{key:Mod+Enter}}.

Fanya vivyo hivyo kwa sehemu nyingine. Tumia {{cmd:TEXT}} kuandika kwenye seli tupu ya "DRAWN BY". Maandishi ya SCALE hayajisasishi yenyewe unapobadilisha skeli ya dirisha; yahariri kwa mkono.

## Chora kwenye karatasi

Chochote unachochora kwenye kichupo cha karatasi kiko kwenye karatasi, katika vitengo vya karatasi: maandishi yenye urefu 3.5 ni milimita 3.5 kwa urefu kwenye karatasi ya ISO. Maelezo, mishale ya kaskazini na mipaka ya karatasi ni hapa.

Ili kubadilisha mpango wenyewe, nenda kwenye kichupo cha {{ui:Model}}, au fanyia kazi kupitia dirisha la mwonekano (sehemu inayofuata); kila dirisha linaonyesha mabadiliko.

## Fanyia kazi modeli kupitia dirisha la mwonekano

1. Bofya mara mbili ndani ya dirisha la mwonekano, mbali na fremu yake. Au andika `MS` kisha bonyeza {{key:Enter}}: ukiwa na dirisha moja kwenye karatasi unaingia moja kwa moja; ukiwa na kadhaa, bofya ndani ya unalotaka.

Fremu inachorwa nzito zaidi, historia inasema uko ndani, na kichupo cha karatasi kinabaki kimechaguliwa. Chochote unachochora au kubadilisha sasa kiko kwenye modeli, katika vitengo vya modeli, kama kwenye kichupo cha {{ui:Model}}: mstari uliochorwa ndani ya dirisha la 1:100 uko katika milimita halisi. Tabaka zilizogandishwa kwenye dirisha hili haziwezi kuchaguliwa hapa.

2. Zungusha gurudumu au buruta kwa kitufe cha katikati ili kukuza na kusogeza kile dirisha linachoonyesha. Karatasi inabaki pale ilipo.
3. Bofya mara mbili mahali popote nje ya fremu, au andika `PS` kisha bonyeza {{key:Enter}}.

Unarudi kwenye karatasi. Dirisha linahifadhi mwonekano uliouacha nao; {{key:Mod+Z}} hurudisha mwonekano wa zamani kwa hatua moja. Kubofya kichupo chochote chini ya mchoro pia kinakutoa kwenye dirisha.

:::note
Dirisha lenye onyesho lililofungwa ({{ui:Display locked}} katika Sifa) huhifadhi mwonekano wake: ndani yake, kusogeza na kukuza kunasogeza karatasi nzima. Dirisha lililozimwa haliwezi kuingiwa.
:::

## Onyesha jina la mwonekano

Lebo ya kichwa chini ya dirisha inaweza kuonyesha jina la mwonekano wa dirisha na kulifuatilia:

1. Mpe mwonekano jina: chagua fremu ya dirisha kisha ujaze {{ui:View name}} katika Sifa, au hifadhi mwonekano kwenye kichupo cha {{ui:Model}} kwa {{cmd:NAMEDVIEW}} na, dirisha likiwa limechaguliwa, andika `VPVIEW`, `V` na jina la mwonekano: dirisha linaonyesha mwonekano huo na kuchukua jina lake.
2. Andika `VIEWLABEL` (`VL`) kisha bonyeza {{key:Enter}}, kisha bofya mahali lebo inapoenda ({{key:Enter}} huiweka chini ya kona ya chini kushoto ya dirisha).

Jina la mwonekano likibadilika, lebo nayo inabadilika, katika hatua moja ya kutendua.

## Ganda tabaka katika dirisha moja

Ili kuficha tabaka katika dirisha moja tu lakini si mengine (samani katika undani, kwa mfano):

1. Chagua fremu ya dirisha, au fanyia kazi ndani yake (bofya mara mbili).

Paneli ya {{ui:Layers}} inapata kitufe kimoja zaidi kwenye kila safu, na mstari juu ya orodha unasema hivyo.

2. Bofya kitufe hicho kwenye safu ya tabaka.

Tabaka linatoweka kwenye dirisha hilo tu. Bofya tena kuliyeyusha; {{key:Mod+Z}} hutengua yoyote kati ya hizo. Kwa tabaka au madirisha kadhaa kwa mara moja, andika `VPLAYER`: `[Ganda (F)/Yeyusha (T)]`, majina ya tabaka (`A-*` huchukua kila tabaka linaloanza na A-), kisha `[Sasa (C)/Zote (A)/Chagua (S)]`. `VPLAYER` `V` (Vpvisdflt) huchagua tabaka ambazo madirisha mapya yanaanza yakiwa yameganda.

## Karatasi zaidi

Kila {{ui:+}} huongeza karatasi nyingine (`Layout2`, `Layout3` …) yenye nambari inayofuata ya karatasi. Ili kufuta karatasi iliyofunguliwa, bonyeza {{key:Esc}} kisha bofya {{ui:Delete this sheet}} katika paneli ya kulia. Inafutwa bila kuuliza; {{key:Mod+Z}} inairudisha.

Chapisha karatasi kwa {{ui:Plot this sheet}} au {{key:Mod+P}}; tazama [Chapisha kwenda PDF](topic:plot-pdf).

## Makosa ya kawaida

- **Dirisha la mwonekano halionyeshi kitu.** Modeli ni tupu, au mwonekano unaelekezwa mahali pengine. Chagua fremu kisha bofya {{ui:Show the whole model}}.
- **Orodha ya skeli inaonyesha uwiano tu bila skeli za futi na inchi.** Weka {{ui:Units}} kuwa {{ui:Inches}} au {{ui:Feet}} kwenye kichupo cha {{ui:Model}}.
- **1:100 inaonekana mara kumi kubwa au ndogo mno.** Vitengo vya mchoro si sahihi. Weka {{ui:Units}} kuwa kile kitengo kimoja kilivyo kwa kweli.
- **Kubofya mpango ndani ya dirisha hakuchagui kitu.** Kwenye karatasi unachagua vitu vya karatasi yenyewe. Bofya mara mbili ndani ya dirisha kwanza ili kufanyia kazi mpango kupitia dirisha.
- **Kubofya nje ya dirisha hakufanyi kitu.** Uko ndani ya dirisha: bofya mara mbili nje yake, au andika `PS`, ili kufanyia kazi karatasi tena.
- **"Madirisha ya mwonekano huwekwa kwenye mpangilio. Fungua kichupo cha mpangilio (au tengeneza moja kwa LAYOUT) kwanza."** {{cmd:MVIEW}} inafanya kazi kwenye kichupo cha karatasi pekee.

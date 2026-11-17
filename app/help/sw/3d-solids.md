---
title: Modeli katika 3D
summary: Tazama mchoro kwa 3D kwenye kichupo cha 3D na utengeneze vigumu rahisi kutoka kwake: sukuma (kwa mteremko au kwenye njia), zungusha, sukuma na vuta nyuso, visanduku, silinda na kabari, unganisha, toa na chukua makutano yake, kisha sogeza, nakili, zungusha na futa, na weka mionekano bapa ya 2D yake kwenye karatasi.
keywords: 3d, tatu d, kigumu, vigumu, 3dsolid, eneo, mwili, acis, sat, sab, vigumu kutoka programu nyingine, fungua mchoro wa 3d, sukuma, ext, zungusha, rev, sogeza kwenye njia, mteremko, njia, presspull, bonyeza vuta, sukuma vuta, kisanduku, silinda, cyl, kabari, 3dorbit, zunguka, mwonekano, vscurrent, mtindo wa kuonyesha, kivuli, mstari uliofichwa, fremu ya waya, x-ray, xray, iso, mtazamo, sambamba, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kigae cha mwonekano, muungano, uni, toa, su, makutano, in, boolean, unganisha, unganisha vigumu, viewbase, flatshot, mwonekano bapa, 2d view, mwonekano wa mchoro, mwonekano wa mbele, mwonekano wa juu, mwonekano wa pembeni, mistari iliyofichwa
from: 13060e71
---

## Utakachotengeneza

Eneo la chumba la 1000 × 600 linasukumwa kuwa bloku ya urefu wa 400, uso mmoja unavutwa juu, na silinda iko kando yake — kisha modeli inahifadhiwa pamoja na mchoro na kuhamishwa kwa ajili ya kitazamaji cha 3D au printa.

Kichupo cha {{ui:3D}} kiko karibu na {{ui:Modeli}} chini ya mchoro. Kinaonyesha mchoro wa nafasi ya modeli ukiwa umelala chini kwa rangi za tabaka zake (tabaka zilizozimwa au zilizogandishwa zinabaki zimefichwa) pamoja na vigumu unavyotengeneza. Mara ya kwanza kinapofunguliwa, mwonekano wa 3D unapakiwa; baada ya hapo hubadilika papo hapo.

## Sukuma umbo

1. Kwenye kichupo cha {{ui:Modeli}}, andika `REC` kisha bonyeza {{key:Enter}}. Andika `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Bonyeza kichupo cha {{ui:3D}}. Upau wa zana unaonyesha kikundi cha {{ui:3D}} badala ya vikundi vya mchoro.
3. Bonyeza {{ui:Sukuma}} (au andika {{cmd:EXTRUDE}}, `EXT`). Bonyeza ndani ya mstatili, kisha bonyeza {{key:Enter}}.
4. Andika `400` kisha bonyeza {{key:Enter}}. Historia inasema "Imesukumwa vigumu 1, urefu 400" pamoja na ujazo wake.

Polilaini zilizofungwa (pamoja na tao), mistatili, poligoni, duara na duaradufu husukumwa; mistari na polilaini zilizo wazi hazisukumwi, na historia inaeleza sababu. Unaweza pia kuchagua maumbo kwenye kichupo cha {{ui:Modeli}} kwanza kisha kuandika `EXTRUDE` hapo. Badala ya kuandika urefu, unaweza kubonyeza: muhtasari unafuata kielekezi juu na chini. Urefu hasi unashuka chini. Andika `D` kwenye kidokezo cha urefu ili kufuta maumbo ya 2D baada ya kusukuma (`D` tena inayahifadhi).

Kwenye kidokezo cha urefu, `T` (Mteremko) inaomba pembe kwa digrii: kando zinaegemea ndani kwa kiasi hicho, hivyo juu ni dogo (pembe hasi inalifanya kuwa kubwa); pembe iliyo mwinuko mno kwa umbo inakataliwa. `P` (Njia) inasogeza maumbo kwenye njia badala yake (tazama hapa chini).

## Zungusha na sogeza

- {{cmd:REVOLVE}} (`REV`, au {{ui:More}} › {{ui:Zungusha kuzunguka mhimili}}): chagua maumbo yaliyofungwa, bonyeza {{key:Enter}}, kisha bonyeza ncha mbili za mhimili (au andika `X` au `Y` kwa mhimili wa mchoro kupitia 0,0), kisha andika pembe au bonyeza {{key:Enter}} kwa mzunguko kamili. Umbo linazunguka kuzunguka mhimili na kusimama likitoka ardhini: chora nusu ya muhtasari wa chupa kando ya mstari, kisha uzungushe kuzunguka mstari huo. Umbo linaweza kugusa mhimili lakini lisiuvuke. Mzunguko kamili una hatua 48.
- {{cmd:SWEEP}} (au {{ui:More}} › {{ui:Sogeza kwenye njia}}, au `P` kwenye kidokezo cha urefu cha EXTRUDE): chagua maumbo yaliyofungwa (wasifu), bonyeza {{key:Enter}}, kisha bonyeza njia: mstari, polilaini, tao, duara au duaradufu. Wasifu unasimama kuvuka njia, katikati yake ukiwa juu yake, na unakimbia kando yake; pembe zinakatwa kwa mteremko, na njia iliyofungwa inatengeneza pete. Mstatili mdogo uliosogezwa kando ya muhtasari wa chumba unakuwa ubao wa msingi; duara kando ya polilaini linakuwa bomba.

## Sukuma na vuta uso

1. Bonyeza {{ui:Press/pull}} (au andika {{cmd:PRESSPULL}}).
2. Bonyeza uso wa juu wa bloku.
3. Andika `100` kisha bonyeza {{key:Enter}}, au sogeza kielekezi kisha ubonyeze. Bloku sasa ina urefu wa 500.

## Visanduku, silinda na kabari

- {{cmd:BOX}}: bonyeza au andika pembe mbili, kisha urefu.
- {{cmd:CYLINDER}} (`CYL`): kituo, radius, kisha urefu. Silinda na duara zilizosukumwa zina pande 48, zikiwa na kivuli laini.
- {{cmd:WEDGE}} (`WE`): pembe mbili na urefu. Ina urefu kamili kwenye pembe ya kwanza na inateleza hadi sifuri kwenye nyingine.

Kwenye kichupo cha 3D, bonyeza kunatua kwenye uso au ukingo ulio chini ya kielekezi, vinginevyo chini; hivyo kisanduku kinaweza kusimama juu ya kigumu kingine.

## Sogeza, nakili, zungusha na futa vigumu

Kwenye kichupo cha 3D, bonyeza huchagua kigumu; buruta kutoka kushoto kwenda kulia kwa dirisha, kutoka kulia kwenda kushoto kwa kuvuka. Kisha:

- {{cmd:MOVE}}: bonyeza nukta ya msingi na mahali inapoenda, au andika `<100,0,0>` (au `@100,0`) kwa umbali kwenye X, Y na Z.
- {{cmd:COPY}}: vivyo hivyo, huku asili ikibaki.
- {{cmd:ROTATE}}: andika pembe (inazunguka kuzunguka katikati ya chaguo, kwenye Z), au bonyeza kituo, nukta ya kuanzia na pembe.
- {{cmd:ERASE}} au {{key:Delete}}.

## Unganisha, toa na chukua makutano ya vigumu

Fungua {{ui:More}} kwenye upau wa zana wa 3D, au andika amri:

- {{cmd:UNION}} (`UNI`): chagua vigumu, bonyeza {{key:Enter}}: vinakuwa kigumu kimoja.
- {{cmd:SUBTRACT}} (`SU`): chagua vigumu vya kuhifadhi kisha bonyeza {{key:Enter}}, kisha vile vya kuondoa na bonyeza {{key:Enter}}. Shimo kupitia bloku: chora silinda kupitia humo, kisha utoe silinda.
- {{cmd:INTERSECT}} (`IN`): chagua vigumu, bonyeza {{key:Enter}}: kinachobaki ni sehemu tu ambayo vyote vina pamoja.

Historia inaonyesha ujazo wa matokeo. Kila moja ni hatua moja ya kutendua. Ya kwanza unayoendesha inapakia injini ya boolean ya 3D (takriban 0.5 MB; imejumuishwa katika {{ui:Hifadhi kwa matumizi ya nje ya mtandao}}). Vigumu vilivyofungwa tu ndivyo vinavyoweza kuunganishwa: kigumu chenye kingo wazi (kutoka nyuso huru za 3D za programu nyingine) kinakataliwa kwa sababu hiyo. Matokeo ni kigumu kimoja; nyuso zilizopinda zinabaki zimeundwa kwa vipande bapa, kama ilivyokuwa silinda.

Bofya mara mbili kigumu ili kuhariri nyuso na kingo zake peke yake; {{key:Esc}} kinakifunga tena. Kila mabadiliko ya 3D ni hatua moja ya kutendua katika historia ile ile ya mchoro: {{key:Mod+Z}} inatengua kitendo cha mwisho ulichofanya kwenye kichupo chochote.

## Mionekano bapa kwenye karatasi

1. Fungua kichupo cha karatasi (au baki kwenye {{ui:Modeli}}), kisha andika {{cmd:VIEWBASE}} (au `FLATSHOT`).
2. Chagua mwonekano: {{key:Enter}} kwa wa mbele, au `T` (juu), `R` (kulia), `L` (kushoto), `BA` (nyuma), `BO` (chini), `I` (isometriki).
3. {{key:Enter}} inaonyesha mistari iliyofichwa, ya vitone; `H` inaiacha.
4. {{key:Enter}} inachukua skeli ambayo CadCraft inapendekeza: kwenye karatasi, skeli kubwa ya kawaida (kama 1:20) ambayo mwonekano unatoshea chini ya nusu ya karatasi. Au andika moja: `1:50`, `2:1`.
5. Bonyeza, au andika, mahali katikati ya mwonekano unapokwenda.

Mwonekano ni marejeo moja ya bloku, `VIEW-FRONT-1` na kadhalika: kingo zinazoonekana ziko kwenye tabaka VIEW-VISIBLE (0.5 mm), zilizofichwa ziko kwenye VIEW-HIDDEN (vitone, 0.25 mm).Usogeze, uwekee vipimo na uchapishe kama mchoro mwingine wowote. Ni picha ya vigumu wakati ulipoviunda: baada ya kuvibadilisha, futa mwonekano kisha endesha {{cmd:VIEWBASE}} tena. Kwa mionekano zaidi, endesha mara moja kwa kila mwonekano.

## Tazama pande zote

Buruta kwa gurudumu ili kuzunguka, {{key:Shift}} + buruta kwa gurudumu au kitufe cha kulia ili kusogeza, na geuza gurudumu ili kukuza kwenye kielekezi. Kwenye trackpad, vidole viwili vinazunguka na kubana kunakuza. Bonyeza kulia bila kuburuta ni {{key:Enter}}, kama kwenye vichupo vingine. `3DORBIT` inaruhusu kitufe cha kushoto kuzunguka hadi ubonyeze {{key:Enter}} au {{key:Esc}}.

- {{ui:Views}} (au {{cmd:VIEW}}): Iso, Juu, Chini, Mbele, Nyuma, Kushoto, Kulia, Mtazamo au Sambamba, na Kuza hadi kila kitu.
- {{ui:Style}} (au {{cmd:VSCURRENT}}, `VS`): Kivuli, Kivuli chenye kingo, Mstari uliofichwa, Fremu ya waya au X-ray.

Nukta unazobonyeza hunasa kwenye vigumu (pembe, kingo, nyuso) na kwenye mchoro wa 2D chini: ncha na katikati ya mistari na tao zake, na nukta kando yake. Mistari ya 2D haichaguliwi kamwe kwenye kichupo cha 3D. Amri inapoomba vitu vya 2D (EXTRUDE, REVOLVE, SWEEP), bonyeza huchagua kimoja, kuburuta kutoka kushoto kwenda kulia huchukua kilicho ndani kabisa ya dirisha, na kuburuta kutoka kulia kwenda kushoto huchukua kinachovukwa, kama kwenye kichupo cha {{ui:Modeli}}.

Kigae cha mwonekano kiko kona ya juu kulia ya kichupo cha 3D: bonyeza uso, ukingo au pembe ili kutazama kutoka hapo, buruta ili kuzunguka, na kitufe cha nyumba kinarudisha mwonekano wa iso. Hiyo ni {{ui:Kiotomatiki}}, mwanzo wa {{ui:Kiashiria cha kona}} katika [Mipangilio ya CadCraft](topic:settings). Ikiwekwa kuwa {{ui:View cube}}, kichupo cha {{ui:Modeli}} pia kinaonyesha mchemraba, kikitazama kutoka juu; kubofya upande mwingine wowote kunafungua kichupo cha 3D kikitazama kutoka hapo. Ikiwekwa kuwa {{ui:Axis icon}}, vichupo vyote viwili vinaonyesha alama ya mhimili badala yake.

## Vigumu kutoka programu nyingine

Mchoro kutoka programu nyingine unaweza kuwa na vigumu vya 3D, maeneo na miili (3DSOLID, REGION, BODY: programu nyingine inahifadhi umbo lao kama data ya ACIS). CadCraft inaonyesha vile vilivyo kwenye nafasi ya modeli kwenye kichupo cha 3D, kwa rangi ya tabaka lao na kingo zao wenyewe, mara ya kwanza unapofungua kichupo; mstari wa amri kisha unasema vingapi vimechorwa.

- Vinaonyeshwa kama vilivyo: huwezi kuvichagua, kuvisogeza au kuvibadilisha. Tabaka zilizozimwa au zilizogandishwa zinavificha.
- Kuhifadhi kama DWG kunaandika kila kimoja tena bila mabadiliko, katika toleo lolote la DWG, ili programu nyingine ivipate tena. Faili za DXF hazihifadhi: CadCraft inaviandika kwenye DWG pekee, na inasema hivyo unapohifadhi kama DXF.
- Yaliyochorwa: nyuso bapa, na nyuso za silinda, koni, duara, torasi na nyuso rahisi za spline, zenye kingo zilizonyooka, za duara na za spline. Uso wa aina nyingine yoyote, au ambao CadCraft haiwezi kuupanga, hauandwi kwa kukisia: unaachwa na kuorodheshwa, kwa mfano "Bado haijachorwa (vigumu vya 3D): nyuso 2 kwenye spline-surface (sweepsur), uso ambao bado haujachorwa."
- Vigumu vilivyo ndani ya bloku bado havionyeshwi; "Kuhusu faili hii" vinavihesabu.

Nyuso zilizopinda zinachorwa kama vipande vidogo bapa, takriban digrii 7.5 kutoka kwenye kingine, hivyo kigumu kilichopinda kinaonekana kina pembe kidogo kikikaribiwa.

## Hifadhi na hamisha

Kuhifadhi kunahifadhi modeli ya 3D, katika DWG na DXF. Kila uso unaingia kama uso wa 3D kwenye tabaka `CC-3D`, ili programu nyingine zioneshe vigumu; na CadCraft inahifadhi nakala yake sahihi kwenye faili, ambayo inasomwa tena unapofungua mchoro tena, pamoja na mwonekano wa 3D kama ulivyokuwa (kamera, makadirio na mtindo wa kuonyesha). Nyuso za 3D zilizotengenezwa na programu nyingine zinaingia kwenye kichupo cha 3D kama nyuso huru, zikihifadhiwa pamoja kama kikundi kimoja. Uso wa 3D ndani ya bloku unaingia mara moja kwa kila marejeo ya bloku hiyo kwenye modeli, ukiwekwa na kuzungushwa kama marejeo yalivyo; ndani ya bloku yenyewe, na kwenye karatasi, uso wa 3D unachorwa bapa, kama muhtasari wake.

{{ui:Hamisha}} kwenye kikundi cha 3D hupakua vigumu pekee: GLB kwa vitazamaji na wavuti ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) au STL kwa uchapishaji wa 3D, kwa milimita ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} inauliza ni ipi.

:::note
Modeli ya 3D ni ukubwa halisi. Mchoro usio na vipimo unahesabiwa kama milimita, hivyo `1000` ni mita moja. Ukibadilisha vipimo vya mchoro baadaye ({{ui:Sifa}}, bila kuchagua chochote), vigumu vinapimwa pamoja navyo ili vibaki kwenye mchoro, na historia inasema hivyo. Kitendo kimoja cha {{key:Mod+Z}} kinatengua mabadiliko ya vipimo na upimaji pamoja.
:::

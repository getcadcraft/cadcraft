---
title: Weka tabaka za ramani chini ya mchoro
summary: Onyesha ramani za mitaa, picha za angani au picha yenye faili la dunia chini ya nafasi ya modeli, zikiwekwa kwa mfumo wa kuratibu wa mchoro.
keywords: ramani, tabaka za ramani, maplayers, ml, geomap, ramani ya msingi, angani, setilaiti, vigae, xyz, wms, wmts, huduma ya ramani, faili la dunia, mfumo wa kuratibu, epsg, state plane, utm, georeference, mpango wa eneo, geolocation, eneo la kijiografia, geodata, imehifadhiwa, dwg, dxf
from: f103045f
---

## Utakachotengeneza

Mpango wa eneo uliochorwa juu ya picha ya angani au ramani ya mtaa, kila kimoja mahali pake sahihi.

## Mwambie CadCraft mchoro uko wapi

1. Weka vitengo vya mchoro katika {{ui:Sifa}} › {{ui:Vitengo}} (kwa mfano futi au mita).
2. Andika {{cmd:MAPLAYERS}} (au `ML`) kisha bonyeza {{key:Enter}}.
3. Chini ya {{ui:Mchoro uko wapi}}, andika jina au msimbo wa EPSG katika {{ui:Tafuta mfumo}} (kwa mfano `2277` au `Texas Central`) kisha uuchague katika {{ui:Mfumo}}.
4. Ikiwa mchoro umechorwa kwa kuratibu za mfumo huo, acha uwekaji kuwa 0. Ikiwa sivyo, toa nukta moja ya mchoro ({{ui:X ya Mchoro}}, {{ui:Y ya Mchoro}}), nukta hiyo iko wapi kwenye gridi ya ramani ({{ui:Easting}}, {{ui:Northing}}), na mchoro umegeuzwa kiasi gani kutoka mashariki ({{ui:Imegeuzwa (°)}}).
5. Bofya {{ui:Tumia mfumo huu}}.

## Ongeza tabaka

1. Washa {{ui:Tabaka za ramani kutoka intaneti}} juu ya dialogi. Hadi hapo hakuna seva inayoulizwa chochote; ikiwa imewashwa, seva unazoongeza huona eneo lililo kwenye skrini na anwani yako ya intaneti, lakini si mchoro wako kamwe.
2. Katika {{ui:Ongeza tabaka}}, chagua linatoka wapi:
   - **Vigae (XYZ)**: anwani ya kigae yenye `{z}`, `{x}` na `{y}`, jina, na sifa ambayo mtoa huduma wake anaiomba.
   - **WMS**, **WMTS** au **ArcGIS**: anwani ya huduma, kisha {{ui:Pata tabaka}} na uchague moja.
   - **Picha**: PNG au JPEG pamoja na faili lake la dunia (na `.prj` lake likiwepo).
3. Tabaka linaonekana chini ya mchoro. Sifa yake inaonekana kona ya chini kulia ya mchoro.

Kila tabaka kwenye orodha linaweza kufichwa, kufanywa lipitishe mwanga zaidi au kidogo, kusogezwa juu au chini, au kuondolewa.

Kila badiliko la mfumo au tabaka ni hatua moja ya {{cmd:UNDO}}.

## Imehifadhiwa pamoja na mchoro

Mfumo wa kuratibu na orodha ya tabaka huhifadhiwa kwenye mchoro unapouhifadhi kama DWG au DXF, na hurudi unapoufungua tena, kwenye kompyuta yoyote. Picha kutoka kwenye faili hazihifadhiwi: ziongeze tena baada ya kufungua. Swichi ya {{ui:Tabaka za ramani kutoka intaneti}} haihifadhiwi kwenye mchoro: ni ya kivinjari hiki, kwa hiyo mchoro ambao mtu anakutumia haumuulizi seva yoyote chochote hadi uwashe mwenyewe.

Programu nyingine zinaona nini:

| Imehifadhiwa kama | Mahali pa mchoro | Tabaka za ramani |
|---|---|---|
| DWG 2010, 2013 au 2018, DXF 2000 | Imeandikwa kwa njia ya kawaida programu zinavyosoma mahali pa kijiografia pa mchoro: msimbo wa EPSG wa mfumo, nukta moja ya mchoro na ilipo kwenye gridi ya ramani, vitengo na kaskazini. | CadCraft pekee |
| DWG 2000, 2004 au 2007, DXF R12 | CadCraft pekee (CadCraft inasema hivyo unapohifadhi) | CadCraft pekee |

- **Imekaguliwa:** ODA File Converter inasoma mahali bila hitilafu, na maktaba ya DXF (ezdxf) inasoma msimbo wa EPSG na uwekaji kwa usahihi.
- **Bado haijakaguliwa:** kama programu nyingine za uchoraji zinatambua mfumo kutoka msimbo wake wa EPSG. Programu inayohifadhi orodha yake ya mifumo kwa majina mengine inaweza kuonyesha mchoro bila mahali.
- Programu nyingine zinaonyesha bloku yenye jina `CADCRAFT_GEO` kwenye orodha ya bloku. Ni nakala ya CadCraft ya mfumo na tabaka; haiwekwi kamwe kwenye mchoro. Iache hapo.

## Michoro kutoka programu nyingine

Mchoro kutoka programu nyingine ukiwa na mahali pa kijiografia, CadCraft huusoma:

- Ikitaja msimbo wa EPSG, {{ui:Mchoro uko wapi}} inaonyesha mfumo huo na tabaka za ramani zinawekwa nao.
- Ikiwa CadCraft haijui mfumo (jina la programu nyingine kwa mfumo huo, gridi ya ndani, au kipengele cha skeli), mahali hautumiki, lakini unahifadhiwa na kurudishwa kama ulivyokuwa, ili programu nyingine bado iupate. Chagua mfumo katika {{ui:Mchoro uko wapi}} ili kuubadilisha.

:::note
Tabaka za ramani huchorwa kwenye skrini tu: hazichapishwi. Tumia huduma za ramani zinazoruhusu masharti yake pekee, na uweke sifa zao zikionekana.
:::

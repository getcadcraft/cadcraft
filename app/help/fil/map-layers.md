---
title: Mga map layer sa ilalim ng drawing
summary: Ipakita ang mga street map, aerial na larawan o larawang may world file sa ilalim ng model space, na nakalagay ayon sa coordinate system ng drawing.
keywords: map, map layers, maplayers, ml, geomap, basemap, aerial, satellite, tiles, xyz, wms, wmts, map service, world file, coordinate system, epsg, state plane, utm, georeference, site plan, geolocation, geographic location, geodata, saved, dwg, dxf
from: f103045f
---

## Ano ang gagawin mo

Isang site plan na iginuhit sa ibabaw ng aerial na larawan o street map, bawat isa ay nasa tamang lugar.

## Sabihin sa CadCraft kung nasaan ang drawing

1. Itakda ang unit ng drawing sa {{ui:Properties}} › {{ui:Units}} (halimbawa feet o meters).
2. I-type ang {{cmd:MAPLAYERS}} (o `ML`) at pindutin ang {{key:Enter}}.
3. Sa ilalim ng {{ui:Where the drawing is}}, i-type ang pangalan o EPSG code sa {{ui:Find a system}} (halimbawa `2277` o `Texas Central`) at piliin ito sa {{ui:System}}.
4. Kung ang drawing ay iginuhit sa sarili nitong coordinates ng system na iyon, iwanang 0 ang placement. Kung hindi, magbigay ng isang punto ng drawing ({{ui:Drawing X}}, {{ui:Drawing Y}}), kung nasaan ang puntong iyon sa map grid ({{ui:Easting}}, {{ui:Northing}}), at kung gaano kalayo nakaikot ang drawing mula sa silangan ({{ui:Turned (°)}}).
5. I-click ang {{ui:Use this system}}.

## Magdagdag ng layer

1. I-on ang {{ui:Map layers from the internet}} sa itaas ng dialog. Hanggang doon, walang server na hinihingan ng kahit ano; kapag naka-on na, makikita ng mga server na idinagdag mo ang lugar na nasa screen at ang internet address mo, hindi ang drawing mo.
2. Sa {{ui:Add a layer}}, piliin kung saan ito manggagaling:
   - **Tiles (XYZ)**: isang tile address na may `{z}`, `{x}` at `{y}`, isang pangalan at ang credit na hinihingi ng provider nito.
   - **WMS**, **WMTS** o **ArcGIS**: ang address ng service, pagkatapos {{ui:Get layers}} at piliin ang isa.
   - **Isang larawan**: isang PNG o JPEG na may world file nito (at ang `.prj` nito kung mayroon).
3. Lalabas ang layer sa ilalim ng drawing. Lalabas ang credit nito sa kanang ibaba ng drawing.

Maaaring itago, gawing mas malinaw o mas malabo, ilipat pataas o pababa, o alisin ang bawat layer sa listahan.

Ang bawat pagbabago sa system o sa mga layer ay isang hakbang ng {{cmd:UNDO}}.

## Naka-save kasama ng drawing

Naka-save ang coordinate system at ang listahan ng mga layer sa drawing kapag sine-save mo ito bilang DWG o DXF, at bumabalik kapag binuksan mo ulit, sa alinmang computer. Hindi nase-save ang mga larawang galing sa file: idagdag ulit ang mga ito pagkatapos buksan. Hindi nase-save sa drawing ang switch na {{ui:Map layers from the internet}}: sa browser na ito ito nabibilang, kaya ang drawing na ipinadala sa iyo ng iba ay walang hinihinging kahit ano sa server hanggang ikaw mismo ang mag-on nito.

Ang nakikita ng ibang program:

| Naka-save bilang | Lokasyon ng drawing | Mga map layer |
|---|---|---|
| DWG 2010, 2013 o 2018, DXF 2000 | Nakasulat sa karaniwang paraan na binabasa ng mga program ang heograpikal na lokasyon ng drawing: ang EPSG code ng system, isang punto ng drawing at kung nasaan ito sa map grid, ang unit at north. | CadCraft lang |
| DWG 2000, 2004 o 2007, DXF R12 | CadCraft lang (sinasabi ito ng CadCraft kapag nagse-save) | CadCraft lang |

- **Nasuri na:** nababasa ng ODA File Converter ang lokasyon nang walang error, at binabasa ng DXF library (ezdxf) ang EPSG code at ang placement nang eksakto.
- **Hindi pa nasusuri:** kung kinikilala ng ibang drafting program ang system mula sa EPSG code nito. Ang program na may sariling listahan ng system sa ibang pangalan ay maaaring magpakita ng drawing na walang lokasyon.
- Nagpapakita ang ibang program ng block na may pangalang `CADCRAFT_GEO` sa listahan ng block. Sariling kopya ito ng CadCraft ng system at mga layer; hindi ito inilalagay sa drawing. Iwanan ito roon.

## Mga drawing mula sa ibang program

Kapag may heograpikal na lokasyon ang drawing mula sa ibang program, binabasa ito ng CadCraft:

- Kung may pangalan itong EPSG code, ipinapakita ng {{ui:Where the drawing is}} ang system na iyon at ang mga map layer ay nakalagay ayon dito.
- Kung hindi kilala ng CadCraft ang system (sariling pangalan ng ibang program para dito, lokal na grid, o scale factor), hindi gagamitin ang lokasyon, pero pinananatili ito at isinusulat pabalik nang gaya ng dati, para mahanap pa rin ito ng ibang program. Pumili ng system sa {{ui:Where the drawing is}} para palitan ito.

:::note
Sa screen lang iginuguhit ang mga map layer: hindi sila nap-plot. Gumamit lamang ng map service na pinapayagan ng kanilang terms, at panatilihing nakikita ang kanilang credit.
:::

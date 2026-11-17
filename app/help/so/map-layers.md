---
title: Lakabyada khariidadda ee hoosta naqshadda
summary: Muuji khariidadda waddooyinka, sawirada hawada ama sawir leh world file hoosta model space, oo lagu meeleeyay nidaamka isku-xirka naqshadda.
keywords: khariidad, lakabyada khariidadda, maplayers, ml, geomap, basemap, sawirka hawada, satellite, tiles, xyz, wms, wmts, adeegga khariidadda, world file, nidaamka isku-xirka, epsg, state plane, utm, georeference, qorshaha goobta, booska, booska juqraafiga, xogta juqraafiga, la kaydiyay, dwg, dxf
from: f103045f
---

## Waxa aad samayn doontid

Qorshaha goobta oo lagu sawiray sawir hawada ama khariidad waddooyin, mid kasta meesha saxda ah.

## U sheeg CadCraft meesha naqshaddu ku taal

1. Deji unugyada naqshadda {{ui:Properties}} › {{ui:Units}} (tusaale ahaan feet ama meters).
2. Ku qor {{cmd:MAPLAYERS}} (ama `ML`) oo riix {{key:Enter}}.
3. Hoosta {{ui:Where the drawing is}}, ku qor magac ama koodka EPSG {{ui:Find a system}} (tusaale ahaan `2277` ama `Texas Central`) oo dooro {{ui:System}}.
4. Haddii naqshaddu ku sawirnaan isku-xirka nidaamkaas, ka tag meesha ku taal 0. Haddii kale, bixi hal dhibic naqshadda ({{ui:Drawing X}}, {{ui:Drawing Y}}), meesha dhibicdaas ku taal shabakadda khariidadda ({{ui:Easting}}, {{ui:Northing}}), iyo intee ay naqshaddu uga leexatay bari ({{ui:Turned (°)}}).
5. Guji {{ui:Use this system}}.

## Ku dar lakab

1. Fur {{ui:Map layers from the internet}} sare sanduuqa. Ilaa markaas waxba lama weydiinayo server kasta; markii la shido, server-yada aad ku darto waxay arkaan aagga shaashadda iyo cinwaanka internetka, laakiin weligood naqshaddaada ma arkaan.
2. Hoosta {{ui:Add a layer}}, dooro meesha ay ka timid:
   - **Tiles (XYZ)**: cinwaan tile oo leh `{z}`, `{x}` iyo `{y}`, magac, iyo sharaxaadda uu bixiyuhu weydiiyo.
   - **WMS**, **WMTS** ama **ArcGIS**: cinwaanka adeegga, kadibna {{ui:Get layers}} oo dooro mid.
   - **Sawir**: PNG ama JPEG oo leh world file (iyo `.prj` haddii uu jiro).
3. Lakabka wuxuu muuqdaa hoosta naqshadda. Sharaxaadiisa wuxuu ku muuqdaa geeska hoose ee midig ee naqshadda.

Lakab kasta oo liiska ku jira waa la qarin karaa, iftiinkiisa waa la xaddidi karaa, waa la kor ama hoos u dhigi karaa, ama waa la saari karaa.

Isbeddel kasta oo nidaamka ama lakabyada ah waa hal tallaabo oo {{cmd:UNDO}}.

## La kaydiyay naqshadda

Nidaamka isku-xirka iyo liiska lakabyada waa la kaydiyaa naqshadda markaad u kaydiso DWG ama DXF, waxayna dib u soo noqonayaan markii aad mar kale furto, kombiyuutar kasta. Sawirada faylalka ma la kaydiyo: dib ugu dar markii la furo. Badhanka {{ui:Map layers from the internet}} naqshadda kuma kaydiyo: wuxuu u gaar yahay browser-kan, sidaas darteed naqshad qof kuu soo diro ma weydiiso server ilaa aad naftaadu shidayso.

| La kaydiyay sida | Booska naqshadda | Lakabyada khariidadda |
|---|---|---|
| DWG 2010, 2013 ama 2018, DXF 2000 | Waxaa loo qoray siyaabta caadiga ah ee barnaamijyadu u akhriyaan booska juqraafiga naqshadda: koodka EPSG ee nidaamka, hal dhibic naqshadda iyo meesha ay taal shabakadda khariidadda, unugyada iyo waqooyiga. | CadCraft oo keliya |
| DWG 2000, 2004 ama 2007, DXF R12 | CadCraft oo keliya (CadCraft wuu sheegaa markaad kaydiso) | CadCraft oo keliya |

- **La hubiyay:** ODA File Converter wuxuu akhriyaa booska iyada oo aan khalad lahayn, iyo maktabadda DXF (ezdxf) wuxuu akhriyaa koodka EPSG iyo meesha si sax ah.
- **Weli lama hubin:** in barnaamijyada kale ee naqshadaha ay aqoonsanayaan nidaamka koodka EPSG. Barnaamij kasta oo liiskiisa nidaamyada ku kaydiyo magacyo kale wuxuu naqshadda muujin karaa iyada oo aan booska lahayn.
- Barnaamijyada kale waxay liiska blocks-ka ku muujiyaan block magaciisu yahay `CADCRAFT_GEO`. Waa nuqulka CadCraft ee nidaamka iyo lakabyada; weligeed lama geliyo naqshadda. Halkaas ku daa.

## Naqshado barnaamijyo kale ka imid

Markii naqshad barnaamij kale ka timid ay leedahay booska juqraafiga, CadCraft wuu akhriyaa:

- Haddii ay magacabiso koodka EPSG, {{ui:Where the drawing is}} wuxuu muujinayaa nidaamkaas, lakabyada khariidaddana waxay ku meeleysan yihiin.
- Haddii CadCraft aanu garanayn nidaamka (magaca barnaamijka kale, shabakad maxalli ah, ama factor scale), booska looma isticmaalo, laakiin waa la ilaaliyaa oo mar kale waa la kaydiyaa sidii ahaa, si barnaamijka kale uu weli u helo. Dooro nidaam {{ui:Where the drawing is}} si aad u beddesho.

:::note
Lakabyada khariidadda shaashadda ayaa lagu sawiraa oo keliya: ma daabacmaan. Isticmaal kaliya adeegyada khariidadda ee shuruudahooda ogolaanaya, oo ilaali sharaxaadooda oo muuqda.
:::

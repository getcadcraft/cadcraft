---
title: Deji xadka naqshadda
summary: LIMITS wuxuu dejiyaa afar-geesle xadka naqshadda: grid-ku wuu buuxiyaa, ZOOM All wuu muujiyaa, xadka oo shidan, dhibcaha ka baxsan waa la diidaa. Waxa lagu kaydiyaa faylasha DWG iyo DXF.
keywords: xadka, xadka naqshadda, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grid, ka baxsan xadka, cabbirka xaashida, goobta naqshadda, zoom all, xuduud
from: 9e97b30d
---

**Xadka naqshadda** waa afar-geesle wuxuu sheegayo naqshaddu intee le'eg bay tahay: goobta aad qorsheyso inaad ku naqshadayso, sida xaashi 420 × 297.  Naqshad cusub ma lahan, sidaas darteed grid-ka iyo goobta naqshaddu waa kuwo aan xadka lahayn, sidii hore.

## Deji

Ku qor {{cmd:LIMITS}} oo ka jawaab:

- `Dooro geeska hoose ee bidix ama [ON/OFF] <0,0>`: dhibic, ama {{key:Enter}} si aad u hayso kii jiray.
- `Dooro geeska sare ee midig <420,297>`: dhibic, ama {{key:Enter}} si aad u hayso kii jiray. Waa inuu ka sarreeyaa oo ka midig yahay kii koowaad.

Ama ku qor `ON` ama `OFF` su'aasha koowaad si aad u beddesho hubinta iyada oo aan afar-geeska la beddelin. Dejinta geesaha waa hal tallaabo oo dib loo celin karo, sidoo kale ON iyo OFF kasta.

## Waxa ay sameeyaan

- **Grid-ku wuxuu buuxiyaa xadka** wuxuuna ku joogsadaa geeskiisa. Waa sawir goobta, sidaas darteed shid {{ui:Grid}} si aad u aragto.
- **ZOOM All** ({{cmd:ZOOM}}, kadibna {{ui:All}}) wuxuu muujiyaa xadka iyo naqshadda wada jir; {{ui:Extents}} wuxuu wali muujiyaa naqshadda keliya.
- **Xadka oo ON ah**, dhibic aad ku qorto ama guusho ka baxsan waa la diidaa, waxaana lagu muujiyaa `**Outside limits` degelkuna wuu joogaa. Waxay khusaysaa amarrada abuuraya walxaha: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, amarrada cabbirka iyo qaar kale. Amarrada kaliya dhaqaajinaya, doortaya ama cabbiraya lama xaddidi; waxaa sidoo kale lagu xad-gudbin lama xaddidi, iyo jiidista grip-ka, ama walax uu abuuro LISP routine. Xadadku waa hagaha naqshadaha, ma aha derbi. Xadka oo OFF ah, waxba lama diido.
- Walxaha horay u ka baxsan ayaa meeshooda ku sii jiri doona.

## Faylasha iyo LISP

Waxa lagu kaydiyaa DWG iyo DXF sida `$LIMMIN`, `$LIMMAX` iyo `$LIMCHECK`. Fayl ka yimid barnaamij kale oo kaliya leh xadadkiisa caadiga ah (0,0 ilaa 12,9 ama 420,297, hubinta damaan) wuu furmaa iyada oo aan xad lahayn, si grid-kiisa aan loogu riixin afar-geesle yar; fayl leh xadadkiisa ama hubinta shidan, waa uu xajiyaa. Gudaha LISP, `(getvar "LIMMIN")`, `LIMMAX` iyo `LIMCHECK` ayaa akhriya, `setvar` ayaa qora, hal tallaabo oo dib loo celin karo.

Xadadku waxay ku sugan yihiin moodelka. Xaashi (layout) waxa uu leeyahay cabbirkiisa warqadda.

---
title: Ku qor oo muuji jihooyinka iyo xagasha darajo, daqiiqad, ilbiriqsi
summary: Ku qor jihada sida jihada sahamiyaha sida N45°23'30"E ama sida darajo-daqiiqad-ilbiriqsi meel kasta oo xagal la weydiiyo, oo dooro sida naqshaddu u muujiso xagasha iyada oo la adeegsanayo AUNITS.
keywords: bearing, bearings, sahamiye, quadrant bearing, N45E, darajo daqiiqad ilbiriqsi, DMS, xagal, jiho, lot, lots, dhig, traverse, AUNITS, ANGUNITS, qaabka xagasha, polar, masaafo toos ah, DIST
from: af805567
---

Meel kasta oo CadCraft weydiiyo **xagal ama jiho**, waxaad ku qori kartaa **bearing** ruba-jiho ama xagal darajo, daqiiqad iyo ilbiriqsi, sida ay tahay tirada caadiga ah ee darajooyinka.

## Bearings

Bearing waxa uu magacaabaa woqooyi ama koonfur, xagal ilaa 90°, kadibna bari ama galbeed:

| Waxaad ku qortaa | Jihada |
|---|---|
| `N45°23'30"E` ama `N45d23'30"E` | 45°23'30" laga bilaabo woqooyi oo u socda bari |
| `S10-30-00W` ama `S 10 30 W` | 10°30' laga bilaabo koonfur oo u socda galbeed (dhibcaha ama meelaha banaan ee u dhexeeya qaybaha) |
| `N45.5E` | 45.5° laga bilaabo woqooyi oo u socda bari |
| `N`, `E`, `S`, `W` | woqooyi, bari, koonfur, galbeed oo toos ah |

Xarfaha waxa ay noqon karaan kuwa waaweyn ama kuwa yaryar. Af-Isbaanish, `O` waxa kale oo ay tilmaamtaa galbeed (oeste). `d` iyo `°` way isku micno yihiin; `'` waa daqiiqad, `"` waa ilbiriqsi.

Si aad u dhigto xariiq hanti 20 m dheer oo ku jihaysan N45°23'E, bilow {{cmd:LINE}} oo ku qor barta koowaad, kadibna `@20<N45d23'E`. Taasi waxay shaqaysaa degdegga xagasha ee {{cmd:ROTATE}} iyo degdeg kasta oo xagal weydiiya, iyo sanduuqa xagasha ee {{ui:Gelinta firfircoon}}.

## Darajo, daqiiqad, ilbiriqsi

`45°23'30"`, `45d23'30"`, `45d30'` ama `45d` waa xagal laga bilaabo dhidibka X, oo ku leexda saacadda ka soo horjeeda. Calaamadda `°` ama `d` waa loo baahan yahay: `45-23-30` waa la akhriyaa sidii xisaab (45 − 23 − 30). Daqiiqadaha iyo ilbiriqsiyada waa inay ka yaraadaan 60. Tirada caadiga ah, oo xisaab leh (`360/7`), weli way shaqaysaa.

## Sida xagasha loo muujiyo

Ku qor {{cmd:AUNITS}} (ama dooro {{ui:Qaabka xagasha}} ee {{ui:Sifooyinka}} › {{ui:Dejinta hadda jirta}}) oo dooro:

- **Darajo tobanle** (caadi): `44.6083°`.
- **Darajo-daqiiqad-ilbiriqsi**: `44°36'30"`.
- **Bearings-ka sahamiyaha**: `N45°23'30"E`.

Saxnaanta waxay raacaysaa waxa aad ku qortay {{cmd:AUNITS}}: 0 wuxuu muujinayaa darajooyin, 2 daqiiqado, 4 ilbiriqsi, 5 ilaa 8 waxay ku daraan tobanleyaal ilbiriqsi. Qaabku wuxuu muuqdaa {{cmd:DIST}}, saldhigga xaaladda, sanduuqa xagasha ee dhaqdhaqaaqa iyo talooyinka raadinta, iyo sanduuqyada xagasha ee {{ui:Sifooyinka}} (sanduuqa aad tafatirayso wuxuu aqbalaa qaabka kasta oo kor ku xusan). Waa hal tallaabo oo ka noqo, waana la keydiyaa faylalka DWG iyo DXF (`$AUNITS`, `$AUPREC`); LISP wuxuu u akhriyaa oo u qoraa sida `AUNITS` iyo `AUPREC`.

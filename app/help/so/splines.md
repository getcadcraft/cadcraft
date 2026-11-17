---
title: Splines iyo polilaynnada: SPLINE, SPLINEDIT, PEDIT
summary: Sawir khad jilicsan oo dhex mara barooyin ama ka dhisan polygon xakamayn, wax ka beddel habboonaanta iyo barooyinka xakamaynta, oo wax ka beddel polilaynnada (isku xidh, xidh, ballac, habayn, spline, ka soo celi kulmiyada) ama u beddel spline polilayn.
keywords: spline, splinedit, spl, spe, pedit, pe, barooyin habboon, barooyinka xakamaynta, miisaanno, nurbs, wax ka beddel polilayn, isku xidh, khad habboon, decurve, u beddel polilayn, saxnaan, tangent, khad, dulqaad habboon
from: d31f72d8
---

## Waxa aad samayn doontid

Khad jilicsan oo dhex mara shan barood, markaas isla khadkaas oo lagu wax ka beddelo saddex siyaabood, iyo polilayn laga dhisay saddex xarriiq.

## Spline ku sawir barooyin

1. Qor `SPL` oo riix {{key:Enter}}.
2. Guji ama qor barooyinka khadku dhex mari lahaa: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Riix {{key:Enter}} mar aad dhammaysid barta ugu dambeysa.
3. {{ui:Tangent-ka bilowga}}: guji barta khadku uga leexdo, ama riix {{key:Enter}} si uu go'aanka u qaado. Samee isla tan dhamaadka tangent-ka.

Khadku wuxuu mara barta kasta. Qor `C` halkii aad ku riixi lahayd {{key:Enter}} si aad u xidho (khadku wuxuu ku soo noqdaa barta koowaad). {{key:U}} (`Undo`) wuxuu ka qaadaa barta ugu dambaysay inta aad sawirayso.

### Sawir mid polygon xakamayn ka dhisan

Qor `M` marka hore ku jirta prompt-ka, kadibna `C` (kulmiyada xakamaynta) iyo darajo 1 ilaa 5 (3 waa caadiga). Hadda barooyinka aad dooratid waa geesaha polygon-ka oo khadka u jiida; khadku wuxuu ka bilaabmaa kan ugu horreeya wuxuuna ku dhammaadaa kan ugu dambeeya. Mid xidhan ayaa wareegsan, geesna kuma jiro xidhiidhka.

### U beddel polilayn spline

Prompt-ka hore qor `O` (Object) oo dooro polilaynno ama xarriiqyo. Waxay noqonayaan splines oo mara kulmiyadooda; asalkoodu waa la tirtiraa.

## Wax ka beddel spline

Dooro oo qor `SPE` (ama qor `SPE` oo guji). Qabashooyinka waxay muujinayaan barooyinka habboonaanta (ama barooyinka xakamaynta spline aan lahayn): jiid mid si aad u qaabayso khadka. Prompt-ka:

- **Xogta habboonaanta** (spline loo sawiray barooyin): `A` wuxuu ku daraa barta habboonaanta (guji meesha), `D` wuxuu tirtiraa mid (guji u dhow), `M` wuxuu dhaqaajiyaa mid (guji u dhow, kadibna guji meesha cusub), `T` wuxuu dejiyaa tangent-yada dhamaadka, `P` wuxuu nadiifiyaa barooyinka habboonaanta, ka dibna spline-ka waxaa laga wax ka beddelaa barooyinka xakamaynta.
- **Wax ka beddel kulmiga**: `A` wuxuu ku daraa barta xakamaynta isagoo aan khadka beddelin, `M` wuxuu dhaqaajiyaa mid, `W` wuxuu siiyaa mid **miisaan** (ka weyn 1 wuxuu khadka u jiidaa isaga oo u dhow, ka yar 1 wuu ka daayaa).
- **Fur** ama **Xir**, iyo **Rogo** (khadku wuxuu u socdaa dhinac kale).
- **Ka beddel polilayn** (`P`): spline-ka wuxuu noqdaa polilayn; saxnaantu waa inta qayb (segment) ah ee span kasta helaa (10 waa caadiga).
- **Ka noqo** (`U`) wuxuu ka qaadaa isbeddelka ugu dambeeya; **Ka bax** (`X`) wuu dhammeeyaa.

{{ui:Sifooyinka}} wuxuu muujiyaa darajada spline-ka, inta barta habboonaanta iyo xakamaynta ay leedahay, dhererkiisa, iyo wuxuu kuu ogolaanayaa inaad furto ama xirto.

## Wax ka beddel polilayn

Dooro polilayn oo qor `PE`. Xariiq, qaanso ama spline aad dooratid ayaa marka hore lagugu soo bandhigayaa inuu noqdo polilayn la beddelo (spline wuxuu weydiinayaa saxnaanta).

- **Xir** / **Fur** isku xidha ama kala furta dhamaadyada.
- **Isku xidh** wuxuu ku daraa xariiqyo, qaansooyin iyo polilaynno ay dhamaadyadoodu isku kulmaan dhamaadka polilaynka. `Fuzz distance` waa inta ay dhamaadyadu kala fogaan karaan oo weli isku xidhi karaan (0 macnaheedu waa inay isku kulmaan).
- **Ballac** wuxuu siiyaa polilaynka oo dhan hal ballac (0 wuu ka saaraa).
- **Habayn** wuxuu beddelaa polilaynka khad jilicsan oo dhex mara kulmiyadiisa; **Spline** wuxuu beddelaa B-spline sedex jibbaaran oo raacaya kulmiyadaas (wuxuu bilaabmaa oo dhammaadaa kulmiga koowaad iyo kan ugu dambeeya, wuxuuna ku dhowyahay kuwa kale). Labadaba waxay noqdaan polilayn oo leh xariiqyo gaaban, kulmiyadii asalka ahaana way ku hadhaan, sidaas darteed **Ka soo celi kulmiyada** (decurve) way soo celisaa.
- **Nooca khadka** wuxuu sheegaa in khadka dhibcaha ah uu sii socdo polilaynka oo dhan mise uu dib u bilaabo kulmi kasta.
- **Ka noqo** wuxuu beddelaa dalabka kulmiyadiisa. **Badan** (`M` prompt-ka hore) wuxuu wax ka beddelaa polilaynno dhowr isla xulashooyin isku mid ah.

Wax ka beddelka kulmiyada polilaynka ee {{ui:Sifooyinka}} ama grips-ka wuxuu sii ahaanayaa sidii hore: PEDIT ma laha tafatire kulmiyada.

## Faylalka

DWG iyo DXF 2000 waxay spline-ka u haysaan sida spline: darajo, barooyinka xakamaynta, xidhmooyin (knots), miisaanno, barooyinka habboonaanta iyo tangent-yada. Spline aad furtid oo aanad beddelin ayaa mar kale loo qoraa sidii ay ahayd. DXF R12 ma laha spline: waxaa loo kaydiyaa polilayn oo raacaya khadka, taariikhduna waxay sheegtaa tirada.

Offset, trim, extend, fillet, break iyo join ma shaqeeyaan splines. {{cmd:EXPLODE}} spline, ama {{cmd:PEDIT}} isaga, si aad u hesho polilayn amarradaas aqbali karaan.

## Khaladaadka caadiga ah

- **Khadku wuu dhaafaa barooyinka isku dhow.** Khad barooyin dhex mara wuxuu foororaa meesha barooyinku foororaan. Isticmaal barooyin yar, ama polygon xakamayn.
- **"Maaha spline."** SPLINEDIT wuxuu qaataa splines oo keliya; {{cmd:PEDIT}} wuxuu wax ka beddelaa polilaynnada.
- **Spline habboon oo xidhan wuxuu qaab kala duwan u leeyahay barnaamij kale.** CadCraft wuxuu xidhaa isagoo leh hal isku xidh siman oo barta koowaad; barnaamij kale wuxuu xidhi karaa curve xilli-ku-celin ah. Spline xakamayn-barooyin xidhan waa isku mid labadaba.

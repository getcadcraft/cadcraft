---
title: U dir naqshad laser-ka
summary: Fur guddiga Laser, dooro waxa lakabkasta sameeyo (jar, score, engrave, fill, picture), hubi dhaqdhaqaaqa madaxa, kaydi GRBL laser-mode G-code, ama u dir browser-ka kadib markaad qaabeyso shaqada.
keywords: laser, jaraha laser-ka, qoraa laser, GRBL, G-code, gcode, qorida, buuxin, dither, qoraalka sawirka, score, jar, Web Serial, qaabee shaqada, xoog, xawaare, marar, LASER, LASERCUT, CNC
from: 72b56db0
---

Guddiga {{ui:Laser}} wuxuu lakabyada naqshadda u beddelaa barnaamij laser-ka u shaqeeya GRBL (inta badan diode-ka iyo CO2 controllers-ka yar-yar). Ku qor `LASER` (ama `LASERCUT`) oo riix {{key:Enter}}, ama dooro {{ui:Laser…}} menu-ka {{ui:Wax dheeraad ah}} ee kooxda {{ui:Muuqaal}}. Habka ribbon-ka, waxay ku jirtaa menu-ka {{ui:Fayl}} iyo dhinaca {{ui:Daabac}}. Guddigu wuxuu furmaa dusha naqshadda wuuna furan yahay intaad sawirayso: preview-ku wuu raacaa isbeddel kasta.

:::warning
Dejin kasta marka hore ku tijaabi qashin (scrap). Ilaali indhaha ilaalinta ee laser-kaaga ku habboon, daboolka xir meel uu jiro, ana ha ka tagin laser-ka shaqaynaya keligiis. Tirooyinka lakab kasta ku bilaabmaan waa meel-hayn, ma aha talo ku saabsan agab kasta.
:::

## Waxa la diraa

Panel-ku wuxuu akhriyaa moodelka (ma aha xaashiyaha), lakabyada shidan iyo kuwa la socodsiin karo:

- Xariiqyo, qaansooyin, goobo, polylines (qaybaha qaansada ah waxay sii ahaadaan qaansooyin), ellipses iyo splines. Shay ku dhammaada meeshii ay ka bilaabatay waxa loo tiriyaa xidhan.
- Blockyada waa la kala furaa: shay ku yaal lakabka 0 gudaha block wuxuu raacaa lakabka tixraaca blockga.
- Xarriijin wuxuu diraa xadkeeda, sidaas darteed logo xarriijin ah oo ku yaal lakabka **Fill** waa la buuxiyaa.
- Sawir (`IMAGEATTACH`) waa la qoraa lakab loo dejiyay **Engrave picture**, marka uu toosan yahay (aan la leexin ama la janjeerin) oo faylkiisa CadCraft ku furan yahay.
- Qoraal, cabbir, leaders, barta iyo khadadka dhismaha lama diro; panel-ku wuxuu sheegaa inta uu ka reebay. Si aad qoraal u gubto, sawir xarfaha qaabab, ama xarriiji.

Cabbirrada waxa loo diraa millimitir ka unugyada naqshadda (`UNITS`): naqshad inch ahaan ah waa la dhufanayaa 25.4. Naqshad aan unugyo lahayn waxa loo diraa unug ilaa millimitir. Calaamadee {{ui:Kaliya walxaha la doortay}} si aad u dirto qayb naqshadda ah.

## Dooro waxa lakabkasta sameeyo

Lakab kasta oo wax ku jira waa safka. {{ui:Waxa uu sameeyo}} wuxuu dejiyaa **Jar**, **Score**, **Qor khadadka**, **Buuxi qaababka**, **Qor sawirka** ama **Lama diro**, iyo {{ui:Xoogga %}}, {{ui:Xawaaraha mm/min}} iyo tirada {{ui:Mararka}}. Isbedel kasta waa hal tallaabo oo ka noqo, waxaana lagu kaydiyaa naqshadda: DWG (nuqul kasta oo CadCraft keydiyo) iyo DXF waxay ilaaliyaan dejinta, sidaas darteed naqshaddu wuxuu ku furmaa dejintaas marka xigta. Barnaamijyada kale faylka waxay u furaan sidii hore; waxay arkaan hal block aan la isticmaalin oo magaceedu yahay CADCRAFT_LASER (tirtiridda (purge) halkaas ayaa tirtira dejinta).

- **Buuxi** wuxuu gubaa gudaha qaababka xidhan xariiqyo, kala fogaan {{ui:Masaafada xariiqyada}}, xagal {{ui:Xagal}}, labada jihoodba ama mid, leh overscan si madaxu u dhaqso marka laser-ku shido; cross-hatch wuxuu ku daraa marin labaad oo 90°. Qaab leh god wuxuu ka furan yahay godka.
- **Qor sawirka** wuxuu sawirka u beddelaa dhibco (Floyd–Steinberg, Atkinson, ordered, ama madow iyo cad oo caadi ah oo heer leh), ama, *Grey levels*-ka, xoog isbeddela.
- Amarka: sawirada iyo buuxinta marka hore, kadibna qorida khadadka, kadibna scores, kadibna jarista, si qaybta la jaray aanay u dhaqaaqin inta la qorayo. Lakab gudihiisa waddooyinka waxay socdaan **gudaha-marka-hore** (god ka hor saxanka uu ku jiro), kii ugu dhow ayaa xiga.

## Hubi, kadibna kaydi

Preview-ku wuxuu muujinayaa waxa madaxu sameeyo: xariiqyada gubaya midab, dhaqdhaqaaqyada degdega ah ee madaxa midabka cawska, iyo sanduuq cagaar ah oo ku wareegsan wax kasta oo gubaya. Hoosteeda waxaa ku jira cabbirka, dherer gubista iyo qiyaasta waqtiga (aan lahayn acceleration; mashiin dhab ah wuxuu ka qaadanayaa waqti badan). {{ui:Kaydi G-code…}} wuxuu qoraa GRBL laser-mode G-code: `$32=1`, `M4` (ama `M3`) oo leh qiimayaasha S, dhaqdhaqaaqyada `G0` iyo `G1`, iyo `M5` dhamaadka. X0 Y0 waa geeska hoose ee bidix ee shaqada, haddii aadan dooran asalka naqshadda: dejiso zero-ka shaqada ee mashiinkaaga halkaas.

## U dir browser-ka

Chrome iyo Edge, {{ui:Ku xidh…}} wuxuu weydiiyaa inaad doorato USB port-ka laser-ka. Waxba ma xidhmo, mana dirto ilaa aad riixdo badhan. Marka hore riix {{ui:Qaabee shaqada}}: madaxu wuxuu raadiyaa sanduuqa shaqada isagoo laser-ku **damsan** yahay (ama xoog hoose oo aad u dejisay pointer-ka), si aad u aragto meesha ay gubi doonto. Kadibna kaliya {{ui:U dir shaqada}} ayaa shidmaa, wuuna demaa haddii aad wax beddesho. {{ui:Hakin}} wuxuu hayaa madaxa, {{ui:Jooji}} wuxuu hayaa madaxa, dib u dejiyaa controller-ka (laser-ku wuu damaa), wuxuuna diraa `M5`. Meelaha Web Serial ka maqan yahay (Firefox, Safari, iyo CadCraft Studio, oo weli Web Serial ma lahan) panel-ku wuxuu bixiyaa keydinta kaliya: kaydi G-code oo u dir barnaamijka laser-kaaga.

## Weli lama dhisin

Weli lama dhisin: qaababka kontoroolayaasha kale (Ruida, Marlin lasers, faylasha iibiyaha), tabs iyo lead-ins, offset-ka kerf, maktabadaha agabka, rotary iyo Z axes, camera alignment, qoraalka sida khadad.

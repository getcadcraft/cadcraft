---
title: Isku dar dhowr skaan hal mid
summary: Ku dhig skaanado laga qaaday meelo kala duwan hal qaab, iyadoo la adeegsanayo labo dhibic la doortay ama beegsiyo la qoray, ku hagaaji ICP, kaydi diiwaangelinta mashruuc ahaan, oo u dhoof daruurta la diiwaangeliyay LAS ama E57 ahaan. Amarku waa REGISTERSCANS.
keywords: diiwaangeli, diiwaangelin, skaanado, daruurta dhibcaha, icp, barta ugu dhow ee soo noqnoqda, beegsiyo, labo dhibic, beddelka adag, isku hagaaji, isku dar, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Waxa aad samayn doontaa

Dhowr skaan oo meel keliya ah (mid kasta oo ka mid ah meel kala duwan oo scanner-ka lagu dhigay) waxay ku bilaabmaan isku-xidhkooda gaarka ah. Diiwaangeli: siiso skaan kasta hal meel, si ay dhammaantood ugu jiraan hal qaab, ka dibna kaydi taas mashruuc ahaan, oo qor daruurta la diiwaangeliyay hal fayl LAS ama E57 ahaan.

## Skaanadka dhig

1. Fur wada-hadalka (ku qor `REGISTERSCANS` (ama `REGSCAN`)). {{ui:Add scans…}} wuxuu aqbalaa faylalka LAS, LAZ, E57, PLY, PCD, PTX, PTS ama XYZ, ama ku rid wada-hadalka. Skaanado isticmaala unugyo kala duwan waa la diidaa iyadoo lagu xusayo ogeysiis: marka hore mid ka mid ah u beddel.
2. Dooro {{ui:Scan to move}} iyo {{ui:Place against}}. Sawirku wuxuu muujinayaa skaan kasta qaabkiisa hadda, midab kasta oo gaar ah: {{ui:Plan}}, {{ui:Front}} ama {{ui:Side}}; jiid si aad u guurto, isticmaal tuubbada mooska si aad u weyneyso.
3. **Labo dhibic.** Riix {{ui:Pick a pair}}, ka dibna dhibic ku yaal skaanka la guurinayo, ka dibna isla meesha ku taal skaan kale (geeska, beegsiga, aasaaska tiirka). Samee tan ugu yaraan saddex jeer, dhibcaha aanay ahayn hal khad, oo kala fogaadaya. Riix {{ui:Place by pairs}}: skaanka waxaa lagu dhigayaa habeyn ugu yar-labajibbaaran, **Ka hadhay** wuxuu muujinayaa sida labo kasta ilaa hadda uu u seegayo. Labo leh tiro weyn waa doorasho xun: ka saar iyada calaamadda xaaqa, ka dibna dhig mar kale.
4. **Beegsiyo.** Haddii meelaha dhabta ah ee dhibic la yaqaan (beegsiyada la sahamiyay), riix {{ui:Pick, then type target}}, riix dhibcaha skaankiisa, ka dibna ku qor X, Y iyo Z beegsiga safka. Labooyinka iyo beegsiyada la qoray way isku dhex jiri karaan si xor ah.

## Hagaaji ICP

Labo wuxuu siiyaa meel-dhigis qiyaas ah. {{ui:Refine}} wuxuu skaanka guurinayaa ilaa dusheeda ay ku dhacdo dusha skaanka kale: marka hore **barta ilaa barta**, ka dibna **barta ilaa dusha**. Miiska wuxuu liisteeyaa tallaabo kasta oo leh khaladkeeda iyo tirada dhibcaha is-beegsaday; khadka ka sarreeya wuxuu sawirayaa khaladka oo hoos u dhacaya. {{ui:Stop}} wuxuu dhammeeyaa socodka ka dib tallaabada socota wuxuuna ilaaliyaa wixii gaadhay. {{ui:Undo}} wuxuu ka qaadaa socodka oo dhan (ama meel-dhigistii ugu dambeysay); {{ui:Reset}} wuxuu skaanka ku celinayaa isku-xidhkiisii faylka.

Si ay u noqoto mid degdeg ah kombiyuutarka gacanta, ICP wuxuu ku shaqeeyaa qayb yar oo dhibcaha ah ({{ui:Points used}}, 5,000 ilaa 60,000) wuxuuna iska indho-tiraa isbarbar-dhigyo ka fog {{ui:Largest match distance}} (caadi ahaan 5% cabbirka skaanka, oo yaraanaya marka uu degayo). Waxay u baahan tahay meel-dhigis qiyaas ah marka hore: skaanado isku dhow oo kaliya ayaa sheegaya in aan la isbarbar dhigi karin. Dusha kaliya oo siman ama kaliya oo toosan ma hagaajin karto meel ku taal iyaga dhexdooda; xaaladaas labo ku dar.

## Kaydi iyo u dhoof

- {{ui:Save project}} wuxuu qoraa fayl yar oo `.ccscans.json`: magaca skaan kasta, cabbirkiisa iyo calaamad 64 KB-kiisii ugu horeeyay, oo leh beddelkiisa. Ma hayo dhibic. {{ui:Open project…}} wuxuu helaa faylalka skaanka iyadoo la adeegsanayo tixraacyadaas (faylalka waa in marka hore la daro) wuxuuna soo celinayaa beddel kasta.
- {{ui:Export LAS}} iyo {{ui:Export E57}} waxay qoraan hal fayl oo leh skaan kasta meeshiisa la diiwaangeliyay. Dhibcaha lama dib u qoro asalka; beddelka waxaa lagu dabaqaa marka la dhoofinayo. {{ui:Read every point from the files}} oo furan, fayl kasta mar kasta ayaa dib loo akhrinayaa dhibic kasta (ilaa 20 milyan skaan kasta); oo xidhan, kaliya dhibcaha ku muuqda muuqaaliyaha ayaa la qoraa.
- {{ui:Show registered cloud}} (CadCraft) wuxuu qoraa LAS oo ku lifaaqaa naqshadda hoostiisa, isku-xidhkiisa, sida daruur kasta oo kale.

:::note
Waxba looma soo rarin. Diiwaangelintu waxay ku shaqeysaa unugyada faylalka ee gudahooda, waxayna hayn millimitirada: LAS waxaa lagu qoraa iskeel ku habboon (ilaa 0.1 mm), E57 waxaa lagu qoraa double-yo. Nidaamka isku-xidhka waxaa loo qaadaa LAS kaliya marka skaan kasta uu magacaabo isla koodka EPSG. Qoraha E57 waa midka aynu leenahay; waxaa la hubiyaa iyadoo faylalkiisa lagu akhrinayo mar kale akhristan tan iyo libE57Format.
:::

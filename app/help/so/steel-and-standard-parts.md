---
title: Dhig qaybaha birta iyo qaybaha caadiga ah
summary: Sawir qaybaha birta, joogga iyo xubinta 3D ee ka yimid miisaska qaybaha ee la daabacay, dhig boolt, nut, washer, bin, bearing, furayaasha iyo gears iyagoo ku salaysan heerarkooda, oo ku liiska qaybaha ku diiwaan geli.
keywords: bir, qayb, qaab, shape, w shape, flange, i-beam, channel, angle, hss, tuubo, pipe, ipe, hea, heb, upn, beam, tiir, xubin, muuqaal dhinac, aisc, en 10365, boolt, laydh, nut, washer, bin, dowel, bearing, furaha, keyway, gear, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, qaybaha caadiga ah, liiska qaybaha, bill of materials, bom, steelmember, partslist
from: 547c1048
---

Tab-ka {{ui:Caadi}} ee maktabadda wuxuu leeyahay laba nooc oo shay, oo halkan laga sameeyay miisaska la daabacay (wax lagu soo dejiyo ma jiro):

- **Qaybaha birta**: 1,335 cabbir. W, S, C, L, HSS iyo Pipe waxay ka yimaadeen AISC Shapes Database v16.0; IPE, HEA, HEB iyo UPN waxay ka yimaadeen EN 10365:2017. DetailCraft isla miiskaas ayuu isticmaalaa.
- **Qaybaha caadiga ah**: laydhka madaxa lix geesood (ISO 4017), boolt-ka lix geesood (ISO 4014), nut-ka lix geesood (ISO 4032), washer-ka caadiga ah (ISO 7089), boolt iyo nut-ka lix geesood ee inch-ka (ASME B18.2.1 iyo B18.2.2), binta isbarbar socda (ISO 2338), bearing-ka kubbadda ee godka qoto dheer (ISO 15), furayaasha isbarbar socda (DIN 6885-1), iyo gears-ka toosan (moodulada ISO 54 ka yimid).

Wax walba halkan waxaa lagu wadaagaa CC0 hoostiisa: isticmaal sidaad rabto, lama rabo tilmaan.

## Dhig qayb bir ah

1. Fur maktabadda ({{ui:Library}} kooxda Bloogs, ama qor `LIB`) oo guji tab-ka {{ui:Caadi}}.
2. Dooro qoyska liiska koowaad, tusaale {{ui:W shapes}}. Ku qor sanduuqa raadinta si aad u yareyso cabbirrada: `W12` wuxuu muujinayaa dhammaan W12.
3. Ku {{ui:Place as}}, dooro:
   - {{ui:Section}}: qaybta jarista, oo xarigeeda ah barta gelinta.
   - {{ui:Elevation}}: xubinta dhinaca laga arko, sida {{ui:Length (mm)}} u sheegayo, laga bilaabo bartii dhexe ee geesaha bidix.
   - {{ui:3D member}}: jir adag oo ku yaal tab-ka 3D (hoos).
4. Guji {{ui:Place}} kaadhka cabbirka, kadibna guji meesha ay tagayso, sida shay kasta oo maktabadda ah.

Section ama elevation wuxuu noqdaa block. Sifooyinkiisu waxay sheegaan cabbirka, miiska ay ka timid, dhererka (elevation kaliya) iyo agab aad buuxin karto.

:::note
S shapes, channels iyo UPN waxaa lagu sawiraa flanges siman oo dhexdhexaad ah, angle-kana geeso saxan; flanges-ka dhabta ahi waa fallaaran yihiin, geesaha-na waa wareegsan yihiin. W, IPE, HEA iyo HEB waxay leeyihiin root fillets, HSS-na corner radii.
:::

## Samee xubin 3D ah

Dooro {{ui:3D member}} oo guji {{ui:Place}}, ama qor {{cmd:STEELMEMBER}} (`SMEMBER`) sadarka amarka:

1. Ee `Section size`, riix {{key:Enter}} cabbirka la muujiyay, ama qor mid, tusaale `HSS6x6x1/4` ama `IPE300`.
2. Guji barta bilowga, kadibna barta dhamaadka. Xubintu waxay u dhexaysaa labadooda, dhulka ku dhex jirta.
3. Haddii ay tahay tiir, qor `C`, guji barta saldhigga, kadibna qor dhererkeeda.

Xubintu waa jir xidhan oo ku yaal tab-ka 3D. Ku dhaqaaji ama koobiyee sida jir kasta oo kale halkaas. {{key:Mod+Z}} wuu ka qaadaa mar kale.

## Dhig qayb caadi ah

1. Tab-ka {{ui:Caadi}}, dooro qoyska, tusaale {{ui:Hex head screws}}. (Muuji labelka: {{ui:Laydhka madaxa lix geesood}}.)
2. Laydh, boolt, bin ama furaha, qor {{ui:Length (mm)}} (inch-ka qoyska inch-ka). Gear-ka, qor {{ui:Teeth}}, {{ui:Face width (mm)}} iyo {{ui:Bore (mm)}}. Sanduuq madhan ka tag si aad u qaadato qiimaha caadiga ah ee lagu muujiyay.
3. Guji {{ui:Place}} cabbirka, kadibna guji meesha ay tagayso.

Laydh, boolt iyo bin waxaa lagu sawiraa dhinaca, wejiga iska caabiya madaxa oo ah barta gelinta; nut-ka, washer-ka, bearing-ka iyo gears-ka waxay u jeedaan wejigooda; furayaasha waxaa laga sawiraa kor. Xirinta waxaa loo sawiraa sida caadiga ah: xididka xariiq khafiif ah, dhamaadka xiridka xariiq qaro weyn. Gears-ka waxaa lagu sawiraa wareegga dhabta, wareegga pitch-ka iyo wareegga xididka, ma aha ilkaha mid mid.

Block-ka qayb kasta wuxuu xambaarayaa nooceeda, heerkiisa, cabbirkiisa, dhererkiisa iyo agabkiisa sida sifooyin, iyo miisankiisa oo ka yimid qaabka birta ee caadiga ah. Agabka ku beddel panel-ka {{ui:Properties}}.

Qaybaha isku mid ah waxay ku jiraan maktabadda sidoo kale sida shay, PartCraft wuxuu ka furaa sida qaybo parametric ah (Qayb caadi ah kooxda File).

## Samee liiska qaybaha

- Maktabadda, guji {{ui:Parts list}}: qayb caadi ah iyo qayb bir ah kasta oo naqshadda ku jira, oo lagu kooxeeyay nooca, heerka, cabbirka, dhererka iyo agabka, oo leh tiro iyo lambarrada shayada. {{ui:Download CSV}} wuxuu keydiyaa spreadsheet-ka.
- Si aad u sawirto, qor {{cmd:PARTSLIST}} (`PLIST`), guji geeska sare ee bidix ee miiska, kadibna riix {{key:Enter}} dherer qoraalka caadiga ah, ama qor mid.

Liiska waxaa laga akhrinayaa sifooyinka blocks-ka, sidaas darteed wali waa sax ka dib markii naqshadda lagu kaydiyo DWG ama DXF oo mar kale la furo.

## Khaladaadka caadiga ah

- **"Ma jiro qayb bir ah oo loo yaqaan …"**: qor cabbirka sida tab-ka {{ui:Caadi}} u liistay: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Xubintu waxay ku jirtaa tab-ka 3D, ma aha qorshaha.** {{cmd:STEELMEMBER}} wuxuu sameeyaa jir; fur tab-ka 3D si aad u aragto. Si birta qorshaha looga arko, dhig {{ui:Section}} ama {{ui:Elevation}} sidoo kale.
- **Dherer aan ku jirin xadka.** Boolt waa inuu ka dheeraadaa madaxiisa; furaha waa inuu ka dheeraadaa ballacisa. Xariiqa hoose ee kaadhadhka ayaa sheegaya qiimaha la diiday.

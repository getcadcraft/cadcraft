---
title: Moodeel ku samee 3D
summary: Ku eeg sawirka tab-ka 3D oo ka samee jidho fudud: soo-bixi (xoor ama jid ku saabsan), wareeg, riix iyo jiid wajiyada, sanduuqyo, silig iyo kaar, ku darso, ka jar iyo isku-gudub, ka dibna dhaqaaji, koobiyee, wareeji ama tirtir, iyo dhig muuqaallo 2D ah oo ka mid ah xaashi.
keywords: 3d, saddex d, jidh, jidhyo, 3dsolid, gobol, jirka, body, acis, sat, sab, jidho barnaamijyo kale, fur sawirka 3D, soo-bixi, ext, wareeg, rev, dhaqaaq, xoor, jid, riix jiid, press pull, push pull, sanduuq, box, silig, cylinder, cyl, wedge, 3dorbit, orbit, muuqaal, vscurrent, qaabka muuqaalka, hooska, xariiq qarsan, wireframe, x-ray, xray, iso, perspektiif, isbarbar, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, unugga muuqaalka, union, uni, ka jar, subtract, su, isgoyn, intersect, in, boolean, isku-dar, ku dhaji jidho, viewbase, flatshot, muuqaal fidsan, muuqaal 2D, muuqaal naqshad, muuqaal hore, muuqaal sare, muuqaal dhinac, xariiqyada qarsan
from: 13060e71
---

## Waxa aad samayn doontid

Qol aasaas ah oo 1000 × 600 ah oo lagu soo-bixiyay bloog 400 dheer ah, wajiga la soo jiiday, iyo silig dhinacyada ah — ka dibna moodeelka waxaa lagu kaydiyaa naqshadda, waxaana loo dhoofiyaa muuqaalka 3D ama daabacaha.

Tab-ka {{ui:3D}} wuxuu yaalaa dhinaca {{ui:Moodeel}} hoosta naqshadda. Wuxuu muujinayaa naqshadda goobta moodeelka oo dhulka ku jirta midabkeeda lakabka (lakabyada damaysan ama la qabsaday way qarsamaan) iyo jidhyada aad samayso. Markii ugu horreysay ee la furo, muuqaalka 3D waa la soo rari; kadib waa uu isla markiiba beddelaa.

## Soo-bixi qaab

1. Tab-ka {{ui:Moodeel}} ku qor `REC` oo taabo {{key:Enter}}. Ku qor `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Guji tab-ka {{ui:3D}}. Qalabka waxa uu muujinayaa kooxda {{ui:3D}} halkii kooxaha naqshadda.
3. Guji {{ui:Soo-bixi}} (ama ku qor {{cmd:EXTRUDE}}, `EXT`). Guji gudaha laydhka, kadibna taabo {{key:Enter}}.
4. Ku qor `400` oo taabo {{key:Enter}}. Taariikhda waxay leedahay "1 jidh oo la soo-bixiyay, dherer 400" iyo mugga.

Qaababka xidhan (oo ay ku jiraan qaansooyinka), laydhka, poligonnada, goobooyinka iyo ellipse-yada way soo-bixmaan; xariiqyada iyo polilaynnada furan ma soo-bixmaan, taariikhduna way sharraxdaa sababta. Waxaad sidoo kale ku dooran kartaa qaababka tab-ka {{ui:Moodeel}} marka hore, kadibna ku qor `EXTRUDE` halkaas. Halkii aad ku qori lahaayd dherer, waad guji kartaa: qaabku wuxuu raacaa kursiga sare iyo hoosba. Dherer taban wuxuu hoos u dhacaa. Ku qor `D` degdegga dherka si aad u tirtirto qaababka 2D ka dib soo-bixinta (`D` mar kale wuu hayaa).

Degdegga dherka, `T` (xagasha xoorta) wuxuu weydiiyaa xagasha darajada: dhinacyadu way ku jilcaan, sidaas darteed sare way yaraataa (xagasha taban ayaa ka dhigta mid weyn); xagasha oo qaabka u xad-dhaaftay waa la diidaa. `P` (Jid) wuxuu qaababka ku dhaqaajiyaa jid ka mid ah halkii (eeg hoos).

## Wareeg iyo dhaqaajin

- {{cmd:REVOLVE}} (`REV`, ama {{ui:Wax dheeraad ah}} › {{ui:Wareeg dhidib ku saabsan}}): dooro qaababka xidhan, taabo {{key:Enter}}, kadibna guji labada dhamaadka dhidibka (ama ku qor `X` ama `Y` si aad u isticmaasho dhidibka 0,0 ee naqshadda), kadibna ku qor xagasha ama taabo {{key:Enter}} si aad wareeg buuxa u samayso. Qaabku wuxuu ku wareegaa dhidibka oo wuxuu ka soo kacaa dhulka: tusaale ahaan, qor nus qaabka weel oo xariiq ku xiga, kadibna ku wareeji xariiqda. Qaabku wuu taabtaa dhidibka laakiin kama gudbo. Wareeg buuxa wuxuu leeyahay 48 tallaabo.
- {{cmd:SWEEP}} (ama {{ui:Wax dheeraad ah}} › {{ui:Dhaqaaq jid ku saabsan}}, ama `P` degdegga dherka ee EXTRUDE): dooro qaababka xidhan (qaabka), taabo {{key:Enter}}, kadibna guji jidka: xariiq, polilayn, qaanso, goobo ama ellipse. Qaabku wuxuu ku taagan yahay jidka oo dhexdiisa ku dhexjiraa, wuxuuna ku socdaa; geeska waa la jaray (mitered), jid xidhan wuxuu samaynayaa giraan. Laydh yar oo lagu dhaqaajiyo dhinaca qol wuxuu noqdaa saldhig dhinac; goobo lagu dhaqaajiyo polilayn wuxuu noqdaa tuubo.

## Riix iyo jiid wejiga

1. Guji {{ui:Riix/jiid}} (ama ku qor {{cmd:PRESSPULL}}).
2. Guji wejiga sare ee bloogga.
3. Ku qor `100` oo taabo {{key:Enter}}, ama dhaqaaji cursor-ka oo guji. Bloogga wuxuu noqonayaa 500 dheer.

## Sanduuqyo, silig iyo kaar

- {{cmd:BOX}}: guji ama ku qor laba geeska, kadibna dherer.
- {{cmd:CYLINDER}} (`CYL`): dhexda, radius-ka, kadibna dherer. Siliggu iyo goobooyinka la soo-bixiyay waxay leeyihiin 48 dhinac, oo si nacnac ah ayaa loo iftiimiyay.
- {{cmd:WEDGE}} (`WE`): laba geeska iyo dherer. Geeska hore wuxuu leeyahay dherer buuxa, geeska kale wuxuu ku dhacaa eber.

Tab-ka 3D guji kasta waxa uu ku dhacaa wejiga ama xarafka cursor-ka hoostiisa, haddii kale dhulka, sidaas darteed sanduuqa ayaa saari kara jidh kale.

## Dhaqaaji, koobiyee, leexi iyo tirtir jidhyada

Tab-ka 3D guji kasta waxa uu dooranayaa jidh; jiid bidix ilaa midig si aad u samayso daaqad, midig ilaa bidix si aad u samayso isgoyn. Kadibna:

- {{cmd:MOVE}}: guji barta saldhigga iyo meesha ay tagayso, ama ku qor `<100,0,0>` (ama `@100,0`) si aad masaafada X, Y iyo Z u qeexdo.
- {{cmd:COPY}}: isla sidaas, laakiin asalka ayuu ka hadhaa.
- {{cmd:ROTATE}}: ku qor xagasha (waxay ku wareegtaa dhexda doorashada, dhidibka Z ku wareegta), ama guji dhexda, barta bilowga iyo xagasha.
- {{cmd:ERASE}} ama {{key:Delete}}.

## Ku darso, ka jar iyo isgoyn jidhyada

Fur {{ui:Wax dheeraad ah}} oo ku yaal qalabka 3D, ama ku qor amarka:

- {{cmd:UNION}} (`UNI`): dooro jidhyada, taabo {{key:Enter}}: waxay noqonayaan hal jidh.
- {{cmd:SUBTRACT}} (`SU`): dooro jidhyada la hayn doono oo taabo {{key:Enter}}, kadibna kuwa la qaadi doono oo taabo {{key:Enter}}. Godka bloog ku jira: samee silig ku dhex jira, kadibna ka jar siliga.
- {{cmd:INTERSECT}} (`IN`): dooro jidhyada, taabo {{key:Enter}}: waxa kaliya ee ay wada leeyihiin ayaa haray.

Taariikhda waxay sheegtaa mugga natiijada. Mid kastaa waa hal tallaabo oo ka noqo. Injineriyadda boolean-ka 3D ee ugu horreysa ee aad socodsiiso waa la soo rarayaa (qiyaastii 0.5 MB; waxaa ku jira {{ui:Kaydi khadka ka baxsan}}). Jidhyada furan kaliya ma isku dari karaan: jidh leh geesaha furan (oo ka yimid barnaamij kale oo wejiyo 3D ah oo furan) waa la diidaa, sababtana waa la sheegayaa. Natiijadu waa hal jidh; wejiyada qaloocan waxay ka dhex-jiraan wejiyo dhan, sida siliga oo kale.

Laba jeer guji jidh si aad u tafatirto wejiyadiisa iyo xarafyadiisa, {{key:Esc}} ayaa dhammeeya. Isbeddel kasta oo 3D ah waa hal tallaabo oo ka noqo oo ku jira taariikhda isla naqshadda: {{key:Mod+Z}} wuxuu ka noqonayaa waxa kugu dambeeyay tab kasta.

## Muuqaallo fidsan oo ku jira xaashi

1. Fur tab xaashi (ama ku sii jir {{ui:Moodeel}}), kadibna ku qor {{cmd:VIEWBASE}} (ama `FLATSHOT`).
2. Dooro muuqaalka: {{key:Enter}} wuxuu u yahay hore, ama `T` (sare), `R` (midig), `L` (bidix), `BA` (dhabar), `BO` (hoose), `I` (isometric).
3. {{key:Enter}} wuxuu muujinayaa xariiqyada qarsan, oo jajab ah; `H` wuxuu ka reebayaa.
4. {{key:Enter}} wuxuu qaadaa miisaanka ay CadCraft soo jeedinayso: xaashi dhexdiisa, miisaanka caadiga ah ee ugu weyn (sida 1:20) kaas oo muuqaalku ku dhex mahaado wax ka yar nus warqadda. Ama ku qor mid: `1:50`, `2:1`.
5. Guji, ama ku qor, meesha ay dhexda muuqaalku tagayso.

Muuqaalku waa hal tixraac bloog, sida `VIEW-FRONT-1` iyo kuwa kale: xariiqyada la arki karo waxay ku yaalaan lakabka VIEW-VISIBLE (0.5 mm), kuwa qarsan ee VIEW-HIDDEN (jajab, 0.25 mm). Dhaqaaji, cabbir oo daabac sida naqshad kasta oo kale. Waa sawir jidhyada markii aad samaysay; markii aad beddeshid, tirtir muuqaalka oo mar kale ku orod {{cmd:VIEWBASE}}. Muuqaalo dheeraad ah, ku orod mar kasta oo muuqaal ah.

## Eeg hareeraha

Ku jiid kudhaxa si aad u wareegto, {{key:Shift}} + jiidista kudhaxa ama badhanka midig si aad u wareejiso, kudhaxana si aad u weynayso cursor-ka hoostiisa. Tab-ka trackpad-ka, laba faraha wareegaan, cadhaysiga la isku-soo-ruro wuu weynaadaa. Guji midig oo aan jiidin waa {{key:Enter}}, sida tabsyada kale. `3DORBIT` wuxuu ogolaanayaa badhanka bidix inuu wareego ilaa aad taabato {{key:Enter}} ama {{key:Esc}}.

- {{ui:Muuqaalo}} (ama {{cmd:VIEW}}): Iso, Sare, Hoose, Hore, Dhabar, Bidix, Midig, Perspektiif ama Isbarbar, iyo Weynee wax walba.
- {{ui:Qaabka}} (ama {{cmd:VSCURRENT}}, `VS`): Hooska leh, Hooska leh xuduudda, Xariiq qarsan, Qaab silig ama X-ray.

Barta aad gujiso waxay ku dhacdaa jidhyada (geeska, xarafyada, wejiyada) iyo naqshadda 2D ee dhulka: geesaha iyo dhexda xariiqyada iyo qaansooyinka, iyo barta ku taal. Xariiqyada 2D tab-ka 3D lama dooran karo. Marka amar uu weydiiyo shayada 2D (EXTRUDE, REVOLVE, SWEEP), guji wuxuu doortaa mid; jiid bidix ilaa midig wuxuu qaadaa waxa daaqadda oo dhan ku jira, jiid midig ilaa bidix wuxuu qaadaa waxa ay gooyso, sida tab-ka {{ui:Moodeel}}.

Unugga muuqaalka waxa uu yaalaa geeska midig ee sare ee tab-ka 3D: guji wejiga, xarafka ama geeska si aad uga eegto meeshaas, jiid si aad u wareegto, badhanka guriga ayaa dib kuugu celinaya muuqaalka iso. Taasi waa {{ui:Otomaatig}}, bilowga {{ui:Calaamadda geeska}} ee [Dejinta CadCraft](topic:settings). Marka la dejiyo {{ui:Unugga muuqaalka}}, tab-ka {{ui:Moodeel}} wuxuu muujiyaa unug sidoo kale, oo sare ka eegaya; guji dhinac kale oo kasta wuxuu furaa tab-ka 3D oo halkaas ka eegaya. Marka la dejiyo {{ui:Calaamadda tiirarka}}, labada tab way muujiyaan calaamadda dhidibka halkii.

## Jidhyo ka yimid barnaamijyo kale

Sawir ka yimid barnaamij kale wuxuu ku haysan karaa jidhyo 3D, gobol iyo jidh (3DSOLID, REGION, BODY: barnaamijka kale wuxuu hayaa qaabkooda sida xogta ACIS). CadCraft wuxuu muujiyaa kuwa ku yaal model space tab-ka 3D, midabka lakabkooda iyo geesahooda, markii ugu horreysay ee la furo tab-ka; khadka amarku ka dib wuxuu sheegaa inta la sawiray.

- Waxay u muuqdaan sida ay yihiin: ma dooran kartid, ma dhaqaajin kartid, ma beddeli kartid. Lakabyada damaysan ama la qabsaday ayaa qariya.
- Keydinta sida DWG waxay mid kasta dib ugu qortaa isla sidiisii, nooca DWG kasta ha ahaadee, si barnaamijka kale uu dib u helo. Faylalka DXF ma hayaan; CadCraft waxa uu ku qoraa DWG oo keliya, waxana uu sheegaa marka aad ku keydiso sida DXF.
- Waxa la sawiray: wejiyo fidsan, iyo wejiyo ku yaal silinkaro, koone, kuraasho iyo torus, iyo sadaxyo splene fudud, geesaha toosan, wareegsan iyo splene. Wejiga dusha kale ama uu CadCraft aan u habayn karin, looma malaynayo; waa la ka tagaa oo waa la liis gareeyaa, tusaale ahaan "Weli lama sawirin (3D solids): 2 wejiyo oo ku yaal spline-surface (sweepsur), dusha weli lama sawirin."
- Jidhyada ku jira bloogyada weli lama muujiyo; "Ku saabsan faylkan" waa tirinayaa.

Wejiyada curved waxay u sawirmaan qaybo fidsan oo yaryar, qiyaastii 7.5° kala fogaan, sidaas darteed jidh curved wuxuu u muuqdaa mid xiran marka lagu eego meel dhow.

## Keydi iyo dhoofi

Keydinta waxay hayaa moodeelka 3D, DWG iyo DXF labadaba. Wejiyo kasta waxay u galaan sida wejiga 3D ee lakabka `CC-3D`, si barnaamijyada kale ay u arkaan jidhyada, CadCraft wuxuu sidoo kale hayaa nuqul gaar ah oo sax ah faylka ku jira, kaas oo uu dib u akhriyo marka aad mar kale furto naqshadda, muuqaalka 3D oo sidii uu ahaa (kamaraha, qaabka iyo qaabka muuqaalka). Wejiyada 3D ee barnaamijyada kale waxay tabka 3D ku yimaadaan sida wejiyo furan, oo hal kooxo ku jira. Wejiga 3D ee ku jira bloog wuxuu yimaadaa mar kasta oo tixraac ah oo loo bloogga leeyahay moodeelka, meesha laga dhigayo iyo laga leexinayo sida tixraaca; bloogga laftiisa iyo xaashiga, wejiga 3D waxa loo sawiraa fidsan, sida xuduudihiisa oo kaliya.

{{ui:Dhoofi}} oo ku jirta kooxda 3D wuxuu soo dejisaa jidhyada keliya: GLB ee muuqaalada iyo webka ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ama STL ee daabacaadda 3D, mm-ka ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} wuxuu weydiiyaa midkee.

:::note
Moodeelka 3D wuxuu yahay cabbirka dhabta ah. Naqshad aan unugyo lahayn waxa loo tiriyaa millimeters, sidaas darteed `1000` waa hal mitir. Haddii aad hadhow beddesho unugyada naqshadda (Sifooyinka, iyada oo aan wax la dooran), jidhyada waa la beddelaa iyaga oo wada si ay dhulka ugu sii jiraan, taariikhduna way sheegtaa. Hal {{key:Mod+Z}} wuxuu ka noqonayaa beddelka unugyada iyo beddelka cabbirka markii hal mar.
:::

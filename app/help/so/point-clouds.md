---
title: Raac khadadka sida la dhisay ee daruurta barta
summary: Ku lifaaq skaan laser ah (LAS, LAZ, E57, PLY, PCD, PTX, PTS ama XYZ) hoosta naqshadda, gooy jeex qorshe oo ka mid ah, oo sawir darbiyada, albaabada iyo tiirarka adigoo isku xidhaya barta skaanka.
keywords: daruurta barta, pointcloudattach, pcattach, pointcloud, pc, skaan laser, skaan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, sida la dhisay, as built, sahan dhul, jeex, gooyn qorshe, nood, isku xidh, raac, xaaladaha jira
from: b0e0aae5
---

## Waxa aad samayn doontid

Qorshe dabaq oo sida la dhisay: darbiyada dhismaha la skaanay oo loo sawiray khadad iyo polilayn saxda ku taal barta skaanka.

## Ku lifaaq daruurta

1. Marka hore deji unugyada naqshadda haddii aanay lahayn (sanduuqa {{ui:Unugyada}} ee {{ui:Sifooyinka}}, ama {{cmd:UNITS}}): CadCraft wuxuu daruurta uga beddelaa unugyadeeda u gaarka ah unugyada naqshadda.
2. Ku qor {{cmd:POINTCLOUDATTACH}} (ama `PCATTACH`) oo taabo {{key:Enter}}. Dooro fayl `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ama `.xyz` (mawduuca ku saabsan noocyada daruurta barta wuxuu sheegayaa waxa mid walba keenayo, iyo waxa laga soo dhoofinayo barnaamijka skaanerka). Waxaad sidoo kale fayl ku furi kartaa {{ui:Fur}}, ku rid bogga, ama ka dir {{ui:Raadi gudaha CadCraft}} aragtida BIM.
3. `Geeska hoose ee bidix ee daruurta`: taabo {{key:Enter}} si aad u ilaaliso kala-koobnaanta faylka (skaan ku diiwaangashan mashruuca ayaa la jaanqaadaya naqshadda), ama guji meesha ay geeska hoose ee bidix ee daruurtu gaareyso.
4. Sadarka amarku wuxuu sheegayaa tirada barta ee muuqata. Muuqaalku wuu ku weynaadaa daruurta; daruurtu waxay ku jirtaa xarriiqyada hoostooda, barta kasta oo sare laga arko.

## Gooy jeex qorshe oo raac

1. Ku qor {{cmd:POINTCLOUD}} (ama `PC`), kadibna `S` oo ah {{ui:Jeex}}. Waxaa muuqda oo keliya qaybta khafiifka ah ee 1.2 m ka sarreysa barta ugu hoose ee daruurta: darbiyada, furitaanka albaabada iyo tiirarku waxay u eegmaan sida qorshe dabaq.
2. `H` wuxuu dejiyaa dhererka gooynta, `T` dhumucdeeda (unugyada naqshadda). {{key:Enter}} wuxuu dhammeeyaa amarka.
3. Shid isku xidhka muuqaalka ({{key:F3}}) oo dooro {{ui:Nood}} ka mid ah isku xidhyada. Ku sawir {{cmd:LINE}} ama {{cmd:PLINE}}: kursoorku wuxuu isku xidhaa barta jeexa, oo lagu calaamadeeyay "Point cloud". Dhamaadka, bartiinta dhexe iyo dhexdhexaadka xarriiqyada naqshadda ayaa ka mudan daruurta, sidaas darteed xidhida polilaynka waxay ku dhacaysaa barta koowaad.
4. Beddel dhererka gooynta si aad u raacdo heer kale, kadibna demi jeexa (`S` mar kale) si aad u aragto daruurta oo dhan.

## Ikhtiyaarro dheeri ah

In {{cmd:POINTCLOUD}}: `C` wuxuu midabeeyaa barta midabbada faylka, dhererka, xoogga, fasalka LiDAR ama hal midab; `SI` wuxuu dejiyaa cabbirka barta; `V` wuxuu qariyaa ama muujiyaa daruurta; `Z` wuxuu ku weynaadaa; `D` wuxuu ka go'daa.

Tab-ka 3D ayaa sidoo kale muujiya daruurta, barta ugu hoose ay ku taal dhulka, iyada oo leh isla gooyntaas.

:::note
Daruurtu ma aha qayb ka mid ah naqshadda: lama kaydiyo DWG ama DXF, Ka noqo ma beddesho. Dib ugu lifaaq markaad mar dambe furto naqshadda. Faylasha waxaa lagu akhriyaa kombiyuutarkan; waxba lama soo rarayo. Skaanada aad u waaweyn waxaa si siman loogu yareeyaa ilaa 2 milyan oo barood. Faylasha E57 waxay furmaan ilaa 6 milyan oo barood iyo 512 MB hadda: skaanada waaweyn u dhoofi LAS ama LAZ.
:::

## Daabac

{{cmd:PLOT}} wuxuu daabacaa daruurta oo naqshadda ku jirta, hoosta xarriiqyada: daabacaadda moodelka ({{ui:Dhammaan}} wuxuu ku jiraa aagga daruurta) iyo aragti kasta oo xaashiga ka mid ah, PDF, PNG, SVG iyo waxa loo diro daabacaha. Waxa uu daabacaa waxa shaashadda ku muuqda: gooynta haddii la shido, midabbada aad dooratay, iyo qarsoon haddii aad qariyeen. Warqadda, barta kasta waxay noqotaa jaranjaro yar, barta ugu sarreysa ayaa mid kasta irbadda ku guuleysta, daabacaaduna waxa ugu badnaan ku dhawaad 400,000 oo ohon. Daruur aad u dhoobo leh waxay ku daabacmaysaa jaranjaro weyn. Daruurta waxaa la daabacaa oo keliya naqshadda ay ku lifaaqan tahay; weligeed ma daabacmayso meesha warqadda (paper space) gudaheeda, waxay ku daabacmaysaa oo keliya aragtida xaashiga.

## Skaanno badan

Skaanno laga qaaday booso kala duwan waxaa lagu isku diiwaangelin karaa hal qaab, lagu hagaajin karaa ICP, lagu dhoofin karaa hal LAS ama E57: eeg [Isku diiwaangeli skaanno badan hal mid](topic:register-scans).

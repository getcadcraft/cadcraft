---
title: Xaddid sawirka
summary: Ku hay xariiqyada toosan, dhamaadyada isku xidhan iyo cabbirrada go'an xannibaadyo joomitari iyo cabbir, oo sawirku wuu raacaa marka aad cabbir beddesho.
keywords: xannibaad, xannibaadyo, parametric, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, darajooyin xor ah, si buuxda loo xaddiyay
from: f8f21fa4
---

## Waxa aad samayn doontid

Saxan oo aad ballaciisa ka beddeli karto meel keliya: jiifkiisu wuxuu sii haraa toosan, hal geesood ayaa sii joogta meeshiisa, dherkiisuna wuxuu sii haraa badh ballaciisa.

Xannibaadyadu waxay ku shaqeeyaan xariiqyada, polilaynnada, goobooyinka, qaansooyinka iyo barahka tab-ka {{ui:Moodeel}}. Mid kasta oo aad ku darto waa hal tallaabo oo mid ka noqod ah.

## Sawirka jiifka oo xannib

1. Ku qor `REC` oo taabo {{key:Enter}}. Ku qor `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Ku qor `AUTOCONSTRAIN` oo taabo {{key:Enter}}. Ku qor `ALL`, {{key:Enter}}, kadibna mar kale {{key:Enter}}.

   Taariikhda waxay leedahay "4 constraints applied". Sanduuqyo yaryar oo leh **H** iyo **V** ayaa ka soo muuqda dhinacyada: kuwanu waa xariiqyada xannibaadka.
3. Ku qor `GCFIX` oo taabo {{key:Enter}}. Guji meel u dhow geeska hoose ee bidix. Sanduuq leh ⊕ ayaa soo muuqda: geeskaas wuxuu sii joogi doonaa meeshiisa.

`AUTOCONSTRAIN` wuxuu ku daraa xannibaadyada isku-xidhka meelaha dhamaadyada xariiqyadu ku dhow yihiin, iyo kuwa toosan ama istaagan meelaha xariiqyadu ku dhow yihiin inay toosan yihiin. Ku qor `S` amarkiisa si aad u beddesho sida ay u dhow yihiin (0.05 unug sawirka iyo 1° bilowga).

## Ku dar cabbirrada

1. Ku qor `DCHORIZONTAL` oo taabo {{key:Enter}}.
2. Guji meel u dhow geeska hoose ee bidix, kadibna meel u dhow geeska hoose ee midig.
3. Guji hoosta laydhka si aad u dhigto khadka cabbirka.
4. Degdegga waxa muuqda `Dimension text <d1=100>`, taas oo ah "Qoraalka cabbirka <d1=100>". Ku qor `width=120` oo taabo {{key:Enter}}.

   Saxanku hadda waa 120 ballac, calaamaddana waxay akhrinaysaa `width=120`.
5. Ku qor `DCVERTICAL` oo taabo {{key:Enter}}, ku qor `O` oo taabo {{key:Enter}}, kadibna guji dhinaca midig.
6. Guji dhinaca midig ee khadka, ku qor `width/2` oo taabo {{key:Enter}}.

   Waa 60 dherer. Calaamaddu waxay akhrinaysaa `fx: d1=width/2`: tibaaxa ayaa wadata.

Taariikhda hadda waxay leedahay in jiifka si buuxda loo xaddiday. Si aad u beddesho cabbirkiisa, beddel `width` (eeg [Isticmaal cabbirrada iyo isla-siminta](topic:parameters)), ama laba jeer guji calaamadda `width=120`, ku qor qiime cusub oo dooro {{ui:Dhaqan}}.

## Dhaqdhaqaaqa shayada xannibaadka leh

Guuri, leexi, miisaan-beddel, gacmo-qabsiga iyo guddiga {{ui:Sifooyinka}} dhammaantood way ilaaliyaan xannibaadyada: wixii aad dhaqaajisay ayaa la hayaa, kuwa kalena way raacaan. Marka xannibaadyadu aanay raaci karin, tafatirka lama sameeyo taariikhduna waxay sheegaysaa sababta, tusaale ahaan "Lama samayn: xannibaadyadu waxay hayaan shaygaas meeshiisa". Shay la tirtiro waxay tirtirtaa xannibaadyadiisa.

## Muraayadda iyo jarista shayada xannibaadka leh

- {{cmd:MIRROR}} wuxuu nuqullada ku koobiyeeyaa xannibaadyada dhexdooda shayada aad muraayad ka samaynayso. Dhinacyada (sida tangent-ku u taabanayo, iyo dhinaca cabbirka lagu qiyaasayo) dib ayaa loo xisaabinayaa nuqulka muraayadda, cabbirrada la nuqulay magacyo gaar ah ayay helaan, sida dhajintu samayso. Haddii `Erase source objects` la doorto `Y`, xannibaadyadu waxay ku sii jiraan shayada muraayadda. Taariikhdu waxay sheegaysaa inta xannibaad ee soo raacday.
- {{cmd:TRIM}} wuxuu xariiqyada ama qaansooyinka xannibaadyadooda ku hayaa qaybta ka hadhay: xannibaad ku saabsan dhamaadka waxay u gudubtaa qaybta weli leh dhamaadkaas, xeerka jihada ({{ui:Toosan}}, {{ui:Istaag}}, {{ui:Isbarbar}}, {{ui:Xagas-qumman}}) qaybta kastaa way hayaa, cabbirkana labada dhamaad ee dibadda ah wuu sii qiyaasaa. Xannibaadyada ku hayay qaybta la jaray, ama dherer ay jarkii beddelay ({{ui:Isku-mid}}, xagasha qaansada), way baxaan. Goobo la jarayo wuxuu hayaa xannibaadyada dhexdhexaadinta iyo radius-ka. Polilaynnada la jarayo way lumiyaan kuwooda.

## Xannibaadyada

| Amarka | Waxa uu hayaa |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | xariiq ama qayb toosan ama istaagan (`2P`: laba barood oo toosan ama istaagan) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | laba xariiq isbarbar, xagas-qumman ama hal khadka saaran |
| {{cmd:GCCOINCIDENT}} | laba barood oo isku mid ah; `O`: barta khadka, goobada ama qaansada saaran |
| {{cmd:GCTANGENT}} | xariiq iyo goobo ama qaanso, ama laba midkood, oo taabanaya |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | laba goobo ama qaansooyin oo dhexdhexaad isku mid ah; laba dherer ama laba radius oo isku mid ah |
| {{cmd:GCSYMMETRIC}} | laba barood, xariiq ama goobo oo muraayad ka muuqda xariiq |
| {{cmd:GCFIX}} | barta (guji meel u dhow) ama shay oo dhan (`O`) meeshay ku sugan |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | masaafo |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | radius, dhexroor, xagal u dhexeeya laba xariiq ama xagasha qaanso |

{{cmd:GEOMCONSTRAINT}} iyo {{cmd:DIMCONSTRAINT}} way weydiiyaan kuwee; {{ui:Xaddid}} iyo {{ui:Cabbir}} ee kooxda {{ui:Parametric}} ayaa socodsiiya, {{ui:Wax dheeraad ah}} ayaa halkaas ku liistaa mid kasta. Halka aad gujiso ayaa qaybta go'aamisa: guji meel u dhow dhamaad, dhexdhexaad ama goob wuxuu qaadaa bartaas; guji polilayn wuxuu qaadaa qaybta hoosteeda. Shayga koowaad wuu sii joogaa, kan labaadna wuu u dhaqdhaqaa inuu la kulmo.

Xannibaad isku dhacda kuwa kale, ama aan wax ku darin sababtoo ah kuwa kale horeba u sheegaan, waa la diidaa oo fariin ayaa la siiyaa, wax na dhaqaaqayo ma jiraan.

## Eeg, dooro iyo ka saar

- Guji sanduuq ku jira xariiqa xannibaadka (ama laba-jibbaaran oo isku xidha, ama calaamadda cabbirka) si aad u dooorato xannibaadkaas; taariikhdu waxay magacaabaysaa. Taabo {{key:Delete}} si aad u saarto.
- {{cmd:DELCONSTRAINT}} wuxuu ka saaraa dhammaan xannibaadyada shayada aad dooratay.
- {{cmd:CONSTRAINTBAR}}: `S` wuxuu muujiyaa dhammaan xariiqyada, `H` wuu qariyaa; marka hore shayada dooro si aad u muujiso ama u qariso kuwooda. {{ui:Wax dheeraad ah}} waxa ku jira {{ui:Muuji xariiqyada xannibaadka}} iyo {{ui:Qari xariiqyada xannibaadka}}.
- {{cmd:DCDISPLAY}} wuxuu muujiyaa ama qariyaa xannibaadyada cabbirka. Marna lama daabacdo.
- {{cmd:DCCONVERT}} wuxuu u beddelaa cabbirrada la sawiray xariiqyada, goobooyinka iyo qaansooyinka xannibaadyo cabbir.

:::note
Haddii aad isticmaashay sawirka parametric-ka ee AutoCAD, magacyada amarrada iyo fariimaha way isku mid yihiin. Xannibaadyada iyo cabbirrada waxa lagu kaydiyaa faylasha DWG iyo DXF qaab barnaamijyada kale aanay fiiro gelin; eeg [Faylasha](topic:files#constraints-in-files).
:::

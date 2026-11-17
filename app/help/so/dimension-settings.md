---
title: Dejinta cabbirrada: cabbirka, tobanaalliyada iyo miisaanka
summary: Dooro dherer qoraalka, cabbirka falkaadka, tobanaalliyada iyo miisaanka guud ee cabbirrada cusub, beddel kuwa jira, oo fahan sida qaababka cabbirka u shaqeeyaan CadCraft.
keywords: dimension style, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, miisaanka guud, tobanaalliyada, cabbirka falkaadka, miisaanka qoraalka, dimtextunit, unugyada qoraalka, mm, cm, m, km, millimetres, metres, dimlfac, dimpost
from: 8ec82a07
---

## Waxa aad baranaysaa

Sida qoraalka cabbirka iyo falkaadyadu u weynaadaan, sida loo dejiyo sawir la daabacayo 1:50 ama 1:100, iyo sida loo beddelo cabbirro aad horey u samaysay.

## Sida cabbirrada u shaqeeyaan

Cabbir kasta wuxuu leeyahay tiro cabbirro ah oo gaar ah: dherer qoraalka, cabbirka falkaadka, tobanaalliyada, fadhiga ku wareegsan qoraalka, intee ka dhaaftaa khadka fidinta khadka cabbirka, iyo intee ka bilaabanta shayga. Caadiyaadku waxay u dhow yihiin qaabka ISO ee caadiga ah:

| Dejinta | Caadiga | Amarka |
|---|---|---|
| Dherer qoraalka | 2.5 | {{cmd:DIMTXT}} |
| Cabbirka falkaadka | 2.5 | {{cmd:DIMASZ}} |
| Tobanaalliyada | 2 (eber-eber la tirtiro) | {{cmd:DIMDEC}} |
| Fadhiga ku wareegsan qoraalka | 0.625 | {{cmd:DIMGAP}} |
| Fidinta ka baxsan khadka cabbirka | 1.25 | {{cmd:DIMEXE}} |
| Fogaanta ka bilaabanta shayga | 0.625 | {{cmd:DIMEXO}} |
| Miisaanka guud | 1 | {{cmd:DIMSCALE}} |

Cabbir kasta waa la dhufanayaa **miisaanka guud**. Dejiso cabbirrada sida aad rabto inay u muuqdaan warqadda (qoraal 2.5 mm), kadibna dejiso miisaanka guud ee daabacaadda (50 ee 1:50). Qoraalku wuxuu noqonayaa 2.5 × 50 = 125 unug sawirka dhererkiisa, taas oo daabacmaysa 2.5 mm.

:::note
Qaababka cabbirka ee la magacaabay waxaa maamulaya {{cmd:DIMSTYLE}}: eeg qaybta hoose. Cabbir kasta wuxuu sidoo kale hayaa dejintii uu ku sameysmay, sidaas darteed weli waad beddeli kartaa mid keliya {{ui:Sifooyinka}} ku jira.
:::

## Dejiso cabbirrada cusub

Labada habba ee hoose waxay beddelaan kaliya cabbirrada aad sameyso ka dib.

### Guddiga Dejinta hadda jirta

1. Taabo {{key:Esc}} si wax aan la dooran. Tab-ka {{ui:Moodeel}} guddiga midig wuxuu akhrinayaa {{ui:Dejinta hadda jirta}}.
2. Hoos u sii guddiga ilaa {{ui:Cabbirrada cusub}}, adigoo dhaafaya saf-yada lakabka, midabka, unugyada iyo {{ui:Lakab 0}}. (Shaashad yar oo hoosteeda ka bilaabanta.) Guji {{ui:Miisaanka guud}}, ku qor `50` oo taabo {{key:Enter}}.
3. Dejiso {{ui:Dhererka qoraalka}}, {{ui:Cabbirka falkaadka}} iyo {{ui:Tobanaalliyada}} si isku mid ah haddii aad rabto qiyam kale.

Saf-xaaladu wuxuu xaqiijiyaa mid kasta, tusaale ahaan "Miisaanka guud ee cabbirrada cusub: 50".

### Amarka

1. Ku qor `DIMSCALE` oo taabo {{key:Enter}}.
2. Marka `Enter new value for DIMSCALE <1>` la muujiyo, ku qor `50` oo taabo {{key:Enter}}.

Taariikhdu waxay xaqiijinaysaa "DIMSCALE = 50. Cabbirrada cusub ayaa isticmaala; dooro kuwa jira si aad u beddesho." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} iyo {{cmd:DIMEXO}} si isku mid ah ayay u shaqeeyaan. Taabo {{key:Enter}} degdegga si aad u hayso qiimaha hadda jira.

### Feet iyo inch cabbirrada

Cabbirrada cusub waxay isticmaalaan qaabka dherarka ee sawirka: dejiso {{ui:Qaabka dherarka}} ee {{ui:Dejinta hadda jirta}} ama {{cmd:UNITS}} (eeg [Feet iyo inch](topic:units-papers-scales#feet-and-inches-and-fractions)), cabbirka xiga wuxuu akhrinayaa `12'-6 1/2"`. {{cmd:DIMLUNIT}} wuxuu dejiyaa qaabka cabbirrada keliya (2 tobanaal, 3 injineernimo, 4 naqshadeed, 5 qeybeed). Cabbir aad horey u samaysay, dooro oo guji {{ui:Qaabka}} ee {{ui:Sifooyinka}}; qaabka qeybta, sanduuqa {{ui:Qeyb}} wuxuu qaataa awoodda laba (4 = 1/16).

## Cabbirro mm, cm, m ama km

Cabbir wuxuu ku qiyaasaa unugyada sawirka. Wuxuu ku qori karaa dherarkaas millimitir, centimitir, mitir ama kilomitir, unugga oo lambarka ka dambeeya: derbi 1250 mm ah wuxuu akhrinayaa `1250 mm`, `125 cm`, `1.25 m` ama `0.00125 km`.

1. Dejiso {{ui:Unugyada}} sawirka {{ui:Dejinta hadda jirta}} marka hore (eeg [Unugyada, cabbirrada warqadda iyo miisaannada](topic:units-papers-scales#drawing-units)), si CadCraft uu u ogaado unugga sawirka. Sawir aan unug lahayn waxaa loo akhriyaa millimitir, {{cmd:DIMTEXTUNIT}} wuu sheegaa.
2. Cabbirrada cusub: taabo {{key:Esc}} si wax aan la dooran, kadibna hoos {{ui:Cabbirrada cusub}} dooro {{ui:Unugyada qoraalka}}: {{ui:Unugyada naqshadda}}, `mm`, `cm`, `m` ama `km`.
3. Cabbirrada aad horey u samaysay: dooro, kadibna {{ui:Sifooyinka}} › {{ui:Unugyada aasaasiga ah}} dooro {{ui:Unugyada qoraalka}}.

Ama ku qor {{cmd:DIMTEXTUNIT}} (`DTU`) oo ka jawaab `D`, `MM`, `CM`, `M` ama `KM`: cabbirro la doortay ayuu beddelaa (hal tallaabo oo mid ka noqod ah), wax la dooran waxay dejisaa cabbirrada cusub.

{{ui:Tobanaalliyada}} ({{cmd:DIMDEC}}) weli wuxuu dejiyaa inta meelood oo tobanaal ah ee la muujiyo: mitirka iyo 3 tobanaal, 1234 mm wuxuu akhrinayaa `1.234 m`. Qoraalku wuxuu u qoran yahay tiro tobanaal ah. Warqadda, cabbirradu waxay qiyaasaan unugga warqadda (millimitir ama inch).

DWG ama DXF la kaydiyay waxay ilaalisaa doorashada sida miisaanka cabbirka (DIMLFAC) iyo suffix (DIMPOST, ` m`), si barnaamijyada kale ay u muujiyaan qoraal isku mid ah. Haddii aad beddesho {{ui:Unugyada}} sawirka mar dambe, cabbirrada lagu qoray mm, cm, m ama km waa la dib u habeeyaa, si ay weli u sheegaan dherarka saxda ah. {{ui:Gacanta lagu dejiyay (miisaan ama jir-ku-dhufasho)}} waxay micnaheedu tahay in {{ui:Miisaanka cabbirka}} ama suffix-ka cabbirka loo dejiyay siyaabo kale; dooro unug si aad u beddesho.

## Beddel cabbirro aad horey u samaysay

1. Guji cabbir mid. Madaxa guddiga midig wuxuu akhrinayaa {{ui:Cabbir}}.
2. Dejintu waxay ku jirtaa qaybo; hoos u sii guddiga si aad u gaarto qaybaha dambe:
   - {{ui:Guud}}: {{ui:Qaabka cabbirka}}
   - {{ui:Joomitari}}: {{ui:Nooca}} iyo {{ui:Cabbirka la qiyaasay}} (akhrin kaliya)
   - {{ui:Qoraal}}: {{ui:Qoraalka dib u qorista}} iyo {{ui:Dhererka qoraalka}}
   - {{ui:Xariiqyada iyo falkaadyada}}: {{ui:Cabbirka falkaadka}}
   - {{ui:Habayn}}: {{ui:Miisaanka guud}}
   - {{ui:Unugyada aasaasiga ah}}: {{ui:Tobanaalliyada}}
3. Ku qor qiime cusub oo taabo {{key:Enter}}.

Cabbirku wuu dib u sawirmaa degdegga. Cabbirrada xagasha, {{ui:Tobanaalliyada (°)}} waxay dejinaysaa tobanaalliyada xagasha.

:::note
Marka cabbirro badan la doortay, guddigu wuxuu muujinayaa saf-yada ay wadaagaan, qiimaha kala duwan ee u dhexeeya waxa lagu sheegaa {{ui:Kala duwan}}. Qiimaha aad qortid wuxuu beddelaa cabbirro dhammaan la doortay hal tallaabo, sidaas darteed hal {{key:Mod+Z}} wuxuu dhammaan dib u celinayaa.
:::

## Cabbirro laga furay sawiro furan

Cabbirka DWG ama DXF furan wuxuu muuqdaa sida barnaamijka kale u sawiray. Guddigiisa wuxuu leeyahay "Sida barnaamijka abuuray ayaa lagu muujiyay. Beddel oo CadCraft ayaa mar kale u sawiri doona qaabkiisa." Marka aad beddesho qiime kasta, guji barta ama dhaqaajiso cabbirka, CadCraft wuu dib u sawiraa isagoo isticmaalaya fallaadhaha iyo font-kiisa, adigoo isticmaalaya cabbirrada uu ka akhriyay faylka.

Cabbirro qaarkood waxa lagu akhriyi karaa sida la sawiray oo kaliya, ma aha cabbir la tafatiri karo; markaas guddiga wuxuu muujiyaa "Laga sawiray" iyo magaca block-ka, sanduuqa "Ku saabsan faylkan" wuu tirinayaa.

## Khaladaadka caadiga ah

- **Beddelka DIMSCALE ma beddelin wax shaashadda ku jira.** Dejintu waa cabbirrada cusub. Dooro kuwa jira oo beddel {{ui:Miisaanka guud}} guddiga.
- **Tobanaalliyada waxay muujiyaan tiro yar oo ka badan intii la dejiyay.** Eber-eberka waa la tirtiraa: 2 tobanaal wuxuu muujiyaa `1250` iyo `1250.5`, ma aha `1250.00`.
- **Qoraalku waa dherer saxda ah warqadda viewport-ka, laakiin khatar ku ah daabacaadda moodeelka.** Miisaanka guud waa inuu ku dhigmo miisaanka aad ku daabacayso. Daabacaadda oo ku habboon warqadda ayaa miisaan aan caadi ahayn bixisa; dooro miisaan caadi ah sanduuqa daabacaadda.
- **Unugyada sida mm ama m qoraalka ku jira.** Dooro {{ui:Unugyada qoraalka}} (eeg [Cabbirro mm, cm, m ama km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Erey kale oo ka dambeeya lambarka, ku qor beddel: `<> TYP.`.

## Qaababka cabbirka ee magacaabay

Ku qor `DIMSTYLE` (`D`) si aad u furto {{ui:Maamulaha habka cabbirka}}. Waxay liistaa qaababka sawirka, inta cabbir ku isticmaasha qaba kasta, iyo kan hadda jira. **Standard** had iyo jeer ayuu jiraa.

- {{ui:Dejo hadda}}: cabbirrada cusub waxay isticmaalaan dejinta qaabkaas oo magaciisa ayay qaataan.
- {{ui:Cusub…}}: qaab cusub oo bilowga ah nuqul ka mid ah mid aad doorato.
- {{ui:Wax ka beddel…}}: goobo isku mid ah sida qaybta cabbirka ee {{ui:Sifooyinka}} (saf-yada iyo falkaadyada, qoraalka, habaynta, unugyada, unugyada kale, dulqaadka). Taabo {{ui:Hagaag}} qaabku wuu beddelmaa **iyo cabbir kasta oo isticmaala wuu isla beddelmaa**, dejin kasta mid mid. Dejin aad beddeshay cabbir keliya waxay sii joogtaa sidaas, illaa qaabku uu beddelo dejintaas.
- {{ui:Magac kale…}} iyo {{ui:Tirtir}}: Standard ma magac kale ama tirtir karto, qaababka hadda jira ama cabbirrada isticmaala sidoo kale.
- {{ui:Isbarbar dhig…}}: wixii u kala duwan laba qaab.
- {{ui:Ku codso xulashada}}: marka hore cabbirro dooro; way qaataan dejinta qaabka iyo magacaa.

`-DIMSTYLE` wuxuu sameeyaa isku mid khadka amarka: `Restore`, `Save` (dejinta hadda jirta, oo ay ku jiraan wixii aad ku qortay {{cmd:DIMTXT}} iyo kuwa kale, magac hoosteeda), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Qaababka waa la kaydiyaa DWG ama DXF (miiska qaababka cabbirka) waana la akhriyaa faylasha aad furto. Qaabka **hadda jira** ma la kaydiyo: sawir wuxuu furmaa Standard hadda jira. Standard wuxuu ilaaliyaa dejintiisa marka qaab kale uu hadda jiro.

## Beddel qoraalka cabbirka iyo khadadka fidinta

{{cmd:DIMEDIT}} (`DED`) wuxuu shaqeeyaa cabbirrada aad doorato: **Guriga** wuxuu qoraalka dib u dhigaa meesha qaabku dhigo, **Cusub** wuxuu qoraal kale qoraa (`<>` wuxuu taagan yahay qiyaaska), **Leexi** wuxuu qoraalka leexiyaa, **Oblique** wuxuu khadadka fidinta toosan iyo isbarbar wuxuu u jeediyaa xagal aad ku qorto (taabo {{key:Enter}} ma jiro). {{cmd:DIMTEDIT}} wuxuu qoraalka u guuraa **Bidix**, **Midig** ama **Dhexe** khadka cabbirka, ama wuu leexiyaa (**Xagal**), ama wuxuu u celiyaa **Guriga**. Qoraalku waxa uu had iyo jeer ku sii jiraa khadka cabbirka: ma jiido meel bilaa xad.

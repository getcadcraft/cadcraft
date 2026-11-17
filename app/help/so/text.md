---
title: Ku dar qoraal iyo calaamado
summary: Ku dheji qoraalka hal-xariiq si aad calaamadaha qolalka u dhigto, ku qor faallo dherer leh oo ku duubma ballaca, kadibna tafatir qoraalka.
keywords: qoraal, dtext, mtext, mleader, multileader, hoggaan, revcloud, calaamadda dib-u-eegista, daruur, raadi, beddel, raadi oo beddel, faqrad, duubis, masaafada xariiqyada, calaamad, faallo, sharaxaad, dherer, isku toosi, textmask, maaska, wipeout, wareejin, tafatir qoraal, ddedit, textedit, font
from: 4b76be99
---

## Waxa aad samayn doontid

Laba calaamadood oo qolka ah, oo dhexe ku jira qolalkooda, faallo ballacooda ku duubma, kadibna saxid lagu sameeyo mid ka mid ah calaamadaha.

## Dhererka qoraalka iyo miisaanka naqshadda

Dhererka qoraalka waa halbeeg naqshadda ku jira. Naqshad ku qoran millimitir oo la daabacayo 1:50, qoraal dhererkiisu yahay 2.5 mm oo warqadda ku jira waa inuu noqdaa 2.5 × 50 = 125 halbeeg moodelka ku jira. Taab xaashi ah waxaad ku sawirtaa halbeegyo warqad ah, sidaas darteed 2.5 halkaas waa 2.5 mm warqadda.

## Ku dhig calaamad dhexe ah

1. Ku qor `DT` oo taabo {{key:Enter}} (ama guji {{ui:Qoraal}} qalabka sare). Hadalku waa `Specify start point of text [Justify]:`.
2. Ku qor `J` oo taabo {{key:Enter}}.
3. Hadalka `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, ku qor `MC` oo taabo {{key:Enter}}.
4. Hadalka `Specify insertion point of text`, guji dhexda qol.
5. Hadalka `Specify height`, ku qor `250` oo taabo {{key:Enter}}.
6. Hadalka `Specify rotation angle of text <0>`, taabo {{key:Enter}}.
7. Hadalka `Enter text`, ku qor `KITCHEN` oo taabo {{key:Enter}}.

Calaamaddu way muuqataa, dhexda barta aad gujisay.

8. Hadalka `Enter text` ee madhan taabo {{key:Enter}} si aad amarka u dhammaysid.

## Qor faallo ballacu ku duubmo

Qoraalka faqradda ({{cmd:MTEXT}}) wuxuu ku duubmaa ballac, wuxuuna si toos ah naqshadda ugu qoran yahay.

1. Ku qor `T` oo taabo {{key:Enter}}, ama guji {{ui:Faqrad}} qalabka sare.
2. Hadalka `Specify first corner`, guji meesha geeska sare bidix ee faallada.
3. Haddii dhererka marka hore la beddelayo, ku qor `H`, taabo {{key:Enter}}, ku qor `250` oo taabo {{key:Enter}}.
4. Hadalka `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, guji midig geeska hore. Masaafada dhinaca midig waa ballaca qoraalku ku duubmayo; intee hoos ayaad guuta ma xaddidayso.
5. Sanduuq ayaa furma naqshadda dushiisa, kursiga ku jira. Ku qor `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Erayada waxay ku duubmaan ballaca markaad qorayso.
6. Taabo {{key:Enter}} si aad faqrad cusub u bilowdo, kuna qor `CHECK ON SITE`.
7. Taabo {{key:Mod+Enter}}, guji {{ui:Hagaag}}, ama guji meel sanduuqa ka baxsan. Faalladu waa hal walax.

Bar ku yaal sanduuqa ayaa beddelaya {{ui:Joog}}, {{ui:Masaafada xariiqyada}} (1 waa caadi, 1.5 waa badhkiis oo kale), {{ui:Ballac}} (0 = aan duubmin) iyo {{ui:Isku toosi}} inta aad qorayso. {{key:Esc}} ama {{ui:Jooji}} wuxuu xidhaa sanduuqa isagoo aan wax ku darin.

Ikhtiyaarrada geeska labaad: `H` Joog (H), `J` Isku toosin (J) (`TL` geeska sare bidix … `BR` geeska hoose midig: geeska ama dhexda sanduuqa ee sii jirta), `L` Masaafada xariiqyada (L), `R` Wareejin (R), `W` Ballac (W) oo la qoro halkii geeska labaad.

:::note
Sanduuqu markuu furan yahay, {{key:Space}} wuxuu qoraa meel bannaan, {{key:Enter}} wuxuu bilaabaa faqrad cusub. DWG la kaydiyay wuxuu hayaa qoraalka faqradda sida MTEXT; DXF R12 ma lahan qoraalka faqradda, sidaas darteed xariiq kasta waxay u kaydsamaa qoraal u gaar ah.
:::

### Xariiqyo kala gaar ah halkii

{{cmd:TEXT}} (`DT`) wuxuu weydiiyaa hal xariiq mar kasta: {{key:Enter}} kasta wuxuu bilaabaa xariiqa xiga, oo hoos u dhacaa 1.667 jeer dhererka qoraalka, xariiq kasta waa walax u gaar ah. Taabo {{key:Enter}} xariiq madhan si aad u dhammaysid.

## Ikhtiyaarrada isku toosinta

| Ikhtiyaar | Barta aad gujisay waa |
|---|---|
| Bidix (caadi) | Dhammaadka bidix ee khadka saldhigga |
| Dhexe | Dhexda khadka saldhigga |
| Midig | Dhammaadka midig ee khadka saldhigga |
| Dhexda, MC | Dhexda qoraalka, dhinaca iyo sare-hoos |
| TL | Geeska sare bidix |

## Tafatir qoraalka

1. Laba jeer guji qoraal. Wuxuu ku furmaa sanduuq la mid ah ee faqradda cusub, kursiga oo ku yaal dhammaadka.
2. Beddel erayada.
3. Taabo {{key:Mod+Enter}} ama guji meel sanduuqa ka baxsan. Qoraalka naqshadda ayaa isbeddela; {{key:Esc}} wuxuu ka tagaa sidii hore.

{{cmd:TEXTEDIT}} (`ED`) wuxuu samaynayaa isla taas: dooro qoraal kasta oo kala horreeya, kadibna taabo {{key:Enter}} markii aad dhammayso.

Dooro qoraal si aad uga beddesho panelka midig: {{ui:Qoraal}}, {{ui:Joog}}, {{ui:Ballaca duubista}} (0 = aan duubmin), {{ui:Masaafada xariiqyada}}, {{ui:Wareejin}}, booska X iyo Y iyo {{ui:Isku toosi}}. Liiska {{ui:Isku toosi}} wuxuu sidoo kale bixiyaa Hoose bidix, oo qoraalka barnaamijyada kale qaarkood isticmaalaan.

## Qaabaynta gudaha qoraalka faqradda ee barnaamijyada kale

Qoraalka faqradda ee DWG ama DXF wuxuu ku jiri karaa koodh gudihiisa: midabyo erey kasta, qaab cad iyo culus, xariiq hoose, xariiq sare iyo xariiq dhex, tirooyin kor-hoos ah sida 1/2, iyo dhererka erey kale. CadCraft wuu hayaa koodhadhkaas, wuu sawiraa (shaashadda iyo PDF la daabacay) wuuna dib u kaydiyaa iyadoo aan wax laga beddelin.

Marka aad tafatirto qoraal sidaas oo kale (laba jeer guji, {{cmd:TEXTEDIT}}, goobta Qoraalka ee panelka midig, ama {{cmd:FIND}} oo leh Replace), waxaad tafatirtaa erayadiisa caadiga ah. Ereyga aad qorto wuxuu galaa xariiqda ku xigta oo wuxuu qaataa midabkiisa iyo qaabkiisa; koodhadhka kale waxay ku sii jiraan meelkoodii. Haddii aad dib u qortid tirooyinka tiro kor-hoos ah, taasi waxay noqonaysaa qoraal caadi ah. Dejinta oo qoraalka oo dhan ka goobta Qoraalka waxay ilaalisaa koodhadhka meelaha uu kaga warqabo erayada weli jira.

Magacyada font-ka (`\F`) waa la ilaalinayaa oo waa la kaydinayaa, laakiin wax walba waxaa lagu sawiraa hal font oo qaabka Helvetica ah. Weli ma jiro qalab-jaranjarro lagu qoro koodhadhka.

## Tilmaan wax: hoggaan badan

{{ui:Hoggaan}} ee kooxda {{ui:Calaamee}} ({{cmd:MLEADER}}, `MLD`) wuxuu sawiraa fallaad, xariiq hoggaan, dhul gaaban iyo faallo, hal walax ahaan.

1. Guji {{ui:Hoggaan}}. Hadalka `Specify leader arrowhead location`, guji waxa faallada ka hadlayso.
2. Hadalka `Specify leader landing location`, guji meesha faallada gasho. Dhulku wuxuu u jeedaa dhinaca aad gujisay.
3. Ku qor faallada sanduuqa furma, oo taabo {{key:Mod+Enter}}.

`A` iyo `L` su'aasha koowaad waxay dejiyaan cabbirka fallaadda iyo dhererka dhulka; dhererka qoraalka wuxuu ka imanayaa {{ui:Dhererka qoraalka}} ee cabbirrada cusub, oo lagu dhufto {{ui:Miisaanka guud}}. Laba jeer guji hoggaan si aad erayadiisa u beddesho. Gacmaha ayaa dhaqaajiya fallaadda iyo dhulka; faallada waxay raacdaa dhulka. Gudaha {{ui:Sifooyinka}}: {{ui:Qoraal}}, {{ui:Joog}}, {{ui:Ballaca duubista}}, {{ui:Cabbirka madaxa fallaadda}} iyo {{ui:Fogaanta dhulka}}.

:::note
Hoggaanada waxay u kaydsamaan sida hoggaan dhab ah DWG-ga. DXF ma lahan hoggaan R12 ama 2000, sidaas darteed halkaas waxay u kaydsamaan sida xariiqyada, fallaadda iyo qoraalka ay sawiraan.
:::

## Calaamee isbeddelada daruur dib-u-eegis

{{ui:Calaamee}} › {{ui:Wax dheeraad ah}} › {{ui:Calaamadda dib-u-eegista}} ({{cmd:REVCLOUD}}, `RC`) wuxuu sawiraa daruur ah qaansooyin ku wareegsan waxa isbeddelay. Taariikhdu waxay muujinaysaa dhererka qaanso iyo nooca ay isticmaali doonto.

- **Afar-geesle** (markii ugu horraysay): guji laba geesood.
- `P` **Dhinacyo badan**: guji geesaha, {{key:Enter}} wuxuu xidhaa daruurta.
- `F` **Gacanta xor ah**: guji meesha ay ka bilowdo oo wareeji mouse-ka aagga adiga oo aan gujinin; qaanso ayaa lagu daraa dhererka qaanso kasta. Guji ama taabo {{key:Enter}} si aad u xidho.
- `O` **Walax**: dooro polyline xidhan, goob ama ellipse (ama xariiq, qaanso ama polyline furan); waxay noqonaysaa daruurta. `Reverse direction?` `Y` wuxuu qaansooyinka u rogaa dhinaca gudaha.
- `A` **Dherer qaanso**: dhererka qaanso kasta. Dooro mid u habboon miisaanka daabacaadda.

Daruurta waa polyline xidhan oo qaansooyin ka kooban, sidaas darteed waxay u kaydsamaa qaab kasta.

## Raadi oo beddel erayada

{{ui:Tafatir}} › {{ui:Wax dheeraad ah}} › {{ui:Raadi oo beddel}} ({{cmd:FIND}}) wuxuu baaraa qoraalka, qiimayaasha sifooyinka bloogga iyo qoraalka cabbirka ee tab-ka furan (ama kaliya walxaha la doortay).

1. Ku qor erayada {{ui:Raadi}}. Liiska wuxuu muujinayaa meel kasta oo ay ku jiraan iyo tirada.
2. Dooro {{ui:Isku midka xarfaha}}, {{ui:Erayada buuxa oo keliya}} ama {{ui:Isticmaal wildcards (* iyo ?)}} haddii aad u baahan tahay, oo ka saar kuwa aanad rabin inaad baarto.
3. Guji {{ui:Dooro kuwii la helay}} si aad walxahaas u doorato, ama ku qor erayada cusub {{ui:Ku beddel}} (liiska wuxuu muujinayaa waxa kasta u beddelanaya) oo guji {{ui:Beddel dhammaan}}. Hal {{key:Mod+Z}} wuxuu baabi'iyaa dhammaan beddelaadyada.

Qiimaha cabbirka ee la qiyaasay maaha qoraal, sidaas darteed marna lama beddelo: `<> TYP.` gudihiisa, kaliya `TYP.` ayaa la beddeli karaa.

## Qari xariiqyada ka dambeeya calaamadda

1. Dooro qoraalada, ku qor {{cmd:TEXTMASK}} oo taabo {{key:Enter}}.
2. `B` wuxuu ku rinjiyeeyaa asalka naqshadda qoraalka dhinacyadiisa; `C` wuxuu weydiiyaa lambar midab. `O` wuxuu ka qaadaa maaska.
3. `Border offset factor`: {{key:Enter}} wuxuu ilaaliyaa 1.5, badhkii dhererka qoraalka oo ku wareegsan qoraalka.

Maaska wuxuu daboolaa xariiqyada ka hooseeya qoraalka, shaashadda iyo marka la daabacayo. DWG 2004 iyo ka dambeeya iyo DXF 2000 way hayaan; DWG 2000 iyo DXF R12 ma hayaan, kaydintuna way sheegtaa.

## Font

Qoraal oo dhan waxaa lagu sawiraa font qaabka Helvetica ah, shaashadda iyo PDF-yada. Qoraalka naqshadaha la furay wuxuu ilaaliyaa erayadiisa, dhererkiisa iyo meeshiisa, laakiin ma ilaaliyo fontkiisii asalka ahaa (magaca font-ka gudaha qoraalka faqradda waa la ilaaliyaa, eeg kor).

PDF-yada la daabacay, qoraal ku qoran qorista Yurub, Cyrillic ama Girriig wuxuu daabacaa sida uu yahay (PDF-ku wuxuu qaadaa xarfaha loo baahan yahay, oo weli waad dooran kartaa oo raadin kartaa qoraalka). Qoraalka Shiinaha, Japan iyo Kuuriya sidoo kale wuxuu daabacaa sida uu yahay (daabacaaddu waxay soo qaadataa font weyn markii ugu horreysay ee loo baahdo). Qoraalka Carabi, Faarsi, Urdu iyo Cibraani sidoo kale wuxuu daabacaa sida uu yahay (eeg qaybta xigta). Xarfaha aanay font kasta lahayn xarf ayaa daabacaa sida '?', taariikhdu waxay sheegtaa inta ay ahaayeen.

## Qoraalka midig-u-socda: Carabi, Faarsi, Urdu, Cibraani

Qoraalka ku qor sida aad ku qori lahayd meel kasta: {{cmd:TEXT}} iyo {{cmd:MTEXT}} waxay sawiraan xariiq kasta akhrinta. Xariiq xarfkiisa koowaad Carabi ama Cibraani yahay wuxuu u akhriyaa midig u socod; lambarrada iyo erayada Latin ee gudihiisa waxay hayaan kala-horaynta bidix u socodka, xarfaha Carabiga ahna waa isku xiran yihiin. Xariiq ku bilaabma xarf Latin wuxuu ku sii jiraa bidix u socod, erayada midig u socdaa ayaa meeshooda ku jira gudihiisa. Fiqrad kasta oo ka mid ah qoraal dhowr xariiqood leh waxay leedahay jihadeeda, fiqradda ku duubmaana waxay ilaalisaa jihadaas xariiq kasta.

Qoraalka waxa loo kaydiyaa sida aad qortay, sidaas darteed faylalka DWG iyo DXF waxay la wadaagaan barnaamijyada kale iyada oo aan wax laga beddelin. Meesha ay ku bilaabmayso iyo jihaynta ({{ui:Bidix}}, {{ui:Dhexe}}, {{ui:Midig}}) waxay macnaysaa isla dhinaca sida qoraal kasta; faallo midig-u-socod ah oo ka dhex dhacaysa midig-ka wuxuu u baahan yahay {{ui:Midig}}.

Shaashadda xarfaha waxay ka imanayaan fontyada nidaamkaaga. PDF la daabacay, Cibraaniga wuxuu isticmaalaa isla font-ka ku jira sida qoraalka Latin; qoraalka Carabiga wuxuu daabacaadda ku qasbaa inay soo qaaddo font kale (ka yar 1 MB, hal mar), oo PDF-ka oo dhan ayaa markaas lagu daabacayaa font-kaas. Font-kaas ma lahan qaab u gaar ah saddex xarf oo Urdu ah (heh goal, yeh barree iyo dhibicda dhammaadka Urdu): waxay daabacaan qaabka xarfka Carabiga ee ugu dhow. Naqshad leh qoraal Carabi iyo Shiinaha, Japan ama Kuuriya labaduba waxay daabacaysaa mid ka mid ah labadaas '?', sababtoo ah daabacaaddu waxay qaadaa hal font. Qoraalka font SHX la soo rarey waa la habeeyaa oo la isku xiraa marka font-ku xarfaha ku hayo meelahooda Unicode; fontyada hore oo xarfahooda horey loo qaabeeyey, isticmaal {{ui:Rog}} {{cmd:SHXFONTS}} sida hore.

## Khaladaadka caadiga ah

- **Qoraalku wuu yaraa si aan loo arki karin.** Dhererka waa halbeeg naqshadda. Naqshad weyn, isticmaal dhererka weyn (eeg kor), ama ku weyneey.
- **Amarku wuxuu dhammaaday hal xariiq ka dib.** Waxaad taabatay {{key:Enter}} xariiq madhan {{cmd:TEXT}} gudihiisa. Dib u bilow, ama isticmaal qoraal faqrad (`T`), halkaas {{key:Enter}} wuxuu bilaabaa faqrad cusub.
- **`T` wuxuu furay sanduuq halkii uu weydiin lahaa xariiq.** Sida AutoCAD, `T` waa qoraal faqrad ({{cmd:MTEXT}}); qoraal hal xariiq ahaan waa `DT`.
- **Qoraalku wuxuu ku duubmaa meel kale AutoCAD-ka.** CadCraft wuxuu ku duubaa ballaca Helvetica; font kale ayaa erey ku qazi kara xariiq ku dhow ama ka fog.
- **Qoraal nuqul muraayad ah.** Waa la dhigaa muraayad ahaan, laakiin wuxuu ku sii jiraa mid la akhriyi karo bidix u socod.

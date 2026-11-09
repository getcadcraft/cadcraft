---
title: Waxa cusub ee 0.8 iyo 0.8.1
summary: Sheeg (ghost) oo dhammeysa naqshadda, sawirada qalinka iyo sawirada sawirka oo loo beddelay jiometri, xaashiyo iyaga naftooda isku habeeya, faahfaahin lagu soo jeediyo marka la sawirayo, GRIDMOVE iyo AUTODIM, calaamado, faylal la isku dari karo, marxaladaha la beddelay nooc dib-u-eegis, naqshadeynta aan aragga lahayn, xadadka naqshadda, jihooyinka, fonts-ka SHX, iyo sawirada qoraalka, iyo wax la saxay 0.8.1.
keywords: waxa cusub, what's new, sheegaha sii-deynta, changelog, isbeddelo, 0.8, 0.8.1, nooca, astaamo cusub, dhamaystir, sheeg, tab, sketchfix, photosketch, autosheet, faahfaahin, gridmove, autodim, calaamado, redline, merge, git, fossil, access, naqshadeynta aan aragga lahayn, akhriye shaashad, xadad, jihooyin, aunits, shx, diagram, ole, taariikh, isbarbardhig, sifooyin, cabbir iyo ballac, stretch, luuqadaha, qalabka gelinta, dhibaatooyin, live, kaaliyayaasha
from: 9dd82db5
---

Tani waa waxa isbedelay CadCraft 0.8 iyo 0.8.1, marka loo barbardhigo 0.7. 0.8 (1 Noofambar 2026) wuxuu ku daraa caawiyayaasha naqshadda kuwa ka shaqeeya naqshaddaada, iyada oo loo marayo xeerar kumbiyuutarkaaga ku jira oo aan model lahayn, 0.8.1 (2 Noofambar 2026) wuxuu saxayaa cillad-yada la soo sheegay kadib markaas.

## Cusub

### Naqshad ku dhammeysa fikradaada

- **Sheeg (ghost) ayaa muujinaya waxa xiga.** Amar aan socon, sheeg dhibic casaan ah oo jaban ayaa muujinaysa waxa xiga ee ay naqshaddaada xeerarkeeda qabsan ku sheegayaan: sagaxa xiga ee isla fogaanta, tallaabada xigta ee sallaalad, darbiga maqan ee qol. Taabo {{key:Tab}} si aad u sawirto hal tallaabo oo {{ui:Ka noqo}} ah, ama {{key:Esc}} si aad u dhigto. Waxa kaliya ee ay eegtaa waa walxaha ugu cusub, sidaas darteed naqshad weyn ayay ku sii socotaa siman. Ka demi {{ui:Dejinta}} › {{ui:CadCraft}} ama amarka {{cmd:AUTOCOMPLETE}} `Off`.
- **Barta xigta markaad xariiq sawirayso.** Dhexda {{cmd:LINE}} ama {{cmd:PLINE}} sheegga waa barta xigta: tallaabada xigta ee sallaalad, geesta afraad ee afar-geesle, ama barta xidhaysa. Cursor-ka u soo dhow oo taabo {{key:Tab}}, sida aad halkaas gujisay.
- **Sawirada qalinka waxay noqdaan jiometri sax ah.** {{cmd:SKETCHFIX}}: sawir xariiqyo qallafsan qalin, mouse ama farta ah, mid kasta wuxuu noqonayaa xariiq nadiif ah, goobo, qaanso, afar-geesle ama polilayn, oo lagu xidho waxa horay loo sawiray. Eeg [Sawir qalin oo hel jiometri sax ah](topic:sketch-with-a-pen).
- **Sawir sawirka hal sawir ayaa naqshad noqda.** {{cmd:PHOTOSKETCH}} (`PSK`) wuxuu helaa warqadda sawir gudihiisa, wuxuu toosiyaa aragga, wuxuu dabaqaa cabbirka warqadda iyo miisaanka aad siiso, wuxuuna raad qalinka ku xidhaa lakab kasta midabka qalinka. Qoraalka lama raadiyo.
- **Cabbir sida xeerarka dhigayo.** {{cmd:AUTODIM}} (`ADIM`) wuxuu sameeyaa silsiladaha cabbirrada dhinacyada aad dooratay, cabbir guud, ballaca furitaanada, dhexroorta godadka, iyo, `Grid` ku jiraa, fogaanta shabakadda. Ma soo celiyo cabbir horay u jirtay.
- **Xariiqa shabakadda ka guuri, qaybtana way raacdaa.** {{cmd:GRIDMOVE}} (`GM`): darbiyada ku dhammaada xariiqa shabakadda way fidaan, darbiyada xariiqa ku jira, tiirarka, goobadiisa iyo calaamadiisu way guurayaan, cabbirrada xariiqa ku jiraana fogaanta cusub way cabbiraan. Hal tallaabo oo {{ui:Ka noqo}} ah.

### Xaashiyo, faahfaahin iyo calaamado

- **Xaashiyo iyaga naftooda isku habeeya.** {{cmd:AUTOSHEET}} wuxuu qaadaa aragtiyadaada magacaysan (ama qaybaha kala duwan ee moodeelka), wuxuu dooraa cabbirka warqadda iyo miisaan caadi ah, wuxuuna aragtiyada ku dhigaa xaashiyo cusub oo leh title block iyo caption magac-iyo-miisaan. Wax walba waa la beddeli karaa. Eeg [Xaashiyada iigu habee](topic:lay-out-sheets-for-me).
- **Faahfaahintaada shirkadda, oo la soo jeediyo marka la sawirayo.** {{cmd:DETAILS}} (`DET`) wuxuu hayaa bloogyadaada faahfaahinta. Markii waxa aad dooratay ay la mid tahay mid ka mid ah erayada layers-kiisa, magacyada bloogga iyo qoraalada, status bar-ku wuu sheegaa; dooro oo dhig. {{cmd:DETAILS}} › Share wuxuu liiskaaga dhigaa folder-ka Documents, wuxuuna soo geliyaa waxa kooxdaadu ku darday. Dejinta ayaa soo jeedinta damisa.
- **Calaamado bloogyada korka.** {{cmd:TAGS}} wuxuu qeexaa calaamad (nooceeda, qiimayaasha ay qaadan karto, bloogyada ay khuseyso), wuxuuna dejiyaa tixraacyada bloogga ee aad dooratay, wuxuuna liistaa iyaga sidii jadwal aad u kaydin karto CSV ahaan. Qeexidaha waxa lagu hayaa DWG. Eeg [Calaamadaha](topic:tags).
- **Xadadka naqshadda.** {{cmd:LIMITS}} wuxuu dejiyaa afar-geesle naqshadda u ah: shabakaddu waxay buuxisaa, zoom All wuxuu muujiyaa. Xadadku waxay muuqdaan sidii geesaha, waxaana lagu kaydiyaa DWG iyo DXF, oo ay ku jiraan xadadka warqadda. Eeg [Dejinta xadadka naqshadda](topic:drawing-limits).

### Shaqaynta dadka kale iyo barnaamijyada kale

- **Calaamad-dib-u-eegis ka dhig dib-u-eegis.** {{cmd:REDLINE}} wuxuu akhrinayaa xirmada MarkupCraft ay qorto, wuxuuna liisanayaa isbeddel kasta. Mid kasta aqbal ama diid oo leh fiiro; kuwa la aqbalay waxay helaan daruur dib-u-eegis iyo diiwaan dib-u-eegis hal tallaabo oo {{ui:Ka noqo}} ah, waxaadna kaydinaysaa faylka jawaabaha ee xidha calaamadaha ku jira MarkupCraft. Eeg [Calaamad-dib-u-eegis ka dhig dib-u-eegis](topic:redline-to-revision).
- **Faylal git iyo Fossil ku isku dari karaan.** Marka {{ui:Faylal la isku dari karo}} lagu daro {{ui:Dejinta}} › {{ui:CadCraft}}, walax kasta waxay helaysaa furaha aan weligiis isbeddelin (faylasha ayay ka weynaadaan 10 boqolkiiba). `cadcraft merge base ours theirs` wuxuu isku daraa tafatirrada laba qof oo DWG ama DXF hal walax-walax, wuxuuna sheegaa oo keliya meesha laba qof isku beddeleen wax isku mid ah. Eeg [Isku dar tafatirrada laba qof oo naqshad hal ah](topic:merge-drawings).
- **Waxa isbeddelay, erayo ahaan.** Taariikhda, Compare wuxuu siiyaa liis caadi ah: meelaha waxyaabuhu isbeddelay, cabbirka meelahaas, waxa lagu daray, laga saaray ama laga beddelay, iyo qoraalka la tafatiray. Eeg [Sheeg erayo waxa isbeddelay](topic:changes-in-words).
- **Jihooyinka iyo xagalada.** Ku qor jiho sida bearing-ka sahamiyaha sida N45°23'30"E, ama darajo, daqiiqo iyo ilbiriqsi, meel kasta oo xagal la weydiiyo; AUNITS wuxuu dejiyaa sida xagalada loo muujiyo. Eeg [Ku qor oo muuji bearings iyo xagalada](topic:bearings-and-angles).
- **Fonts-kaaga SHX.** Siiso CadCraft folder fonts-ka SHX ah iyo text styles oo magacaya, qoraalka ayaa lagu sawiraa, shaashadda iyo daabacaadaba. Eeg [Qoraal ku sawir fonts-kaaga SHX](topic:shx-fonts).
- **Diagram qoraal ka soo sawir.** {{cmd:DIAGRAM}} wuxuu akhrinayaa flowchart Mermaid ah, diagram component PlantUML ah, D2 ama liis from-to ah, wuxuuna sawiraa bloogyo iyo xidhiidhyo aad tafatiri karto. Eeg [Diagram qoraal ka sawir](topic:text-to-diagram).
- **Walxaha OLE ee DWG.** {{cmd:OLELIST}} wuxuu liisanayaa walxaha OLE ee DWG ku jira oo CadCraft ma geli karo naftiisa, wuxuuna geliyaa nuqul sawir meesha aad sheegto. Eeg [Sawirada](topic:pictures#objects-from-other-programs-ole).
- **Xisaabahaagu way la socdaan naqshadda.** Xaashiyada xisaabta iyo sababaha naqshadda waxa lagu hayaa DWG-ga iyo miiska fasallada.

### Naqshadeynta aan aragga lahayn

- Ku shid {{ui:Naqshadeynta aan aragga lahayn}} {{ui:Dejinta}} (ama ku qor {{cmd:ACCESS}} oo jawaab `On`). CadCraft wuxuu sheegaa amar kasta iyo natiijo kasta akhriyaha shaashadda, wuxuu sharraxaa naqshadda iyo waxa cursor-ka ku dhow, wuxuu kuu ogolaanayaa inaad cursor-ka u guurisid oo barooyinka kiiboordka ku dooratid, wuxuuna ciyaaraa dhawaaq kasta oo snap iyo grip kasta. Meesha browser-kaagu ku aqoon karo hadalka kombiyuutarkaaga, amarrada waa la hadli karaa. Eeg [Naqshadeynta aan aragga lahayn](topic:draft-without-sight).

### App kasta gudihiisa

- **Luuqadaha.** 54 luuqadood; toban ayaa cusub (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek). Luuqadaha ka sarreeya Ingiriisiga waa tarjumo qabyo ah ilaa uu akhriyo hadal-hayn asal ah.
- **Qalabka gelinta.** Trackpad, qalin, mouse 3D, game controller iyo MIDI.
- **Safafka qalabka iyo gridka sifooyinka.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Safka qalabka}} wuxuu bixiyaa Wrap, 2 safafka ama 1 safka barnaamijyada kale. CadCraft wuxuu leeyahay dejintiisa (eeg [Safafka qalabka](topic:settings#toolbar-rows)). Gridka sifooyinka wuxuu ku jiraa saddex barnaamij oo kale, mana ku jiro CadCraft.
- **Dhibaatooyin, Live iyo kordhin-yada.** Panel la wadaago oo Dhibaatooyin ah oo digniin siiya app kasta, aragti Live oo muujinaysa qofka meesha uu joogo CadCraft Studio (eeg [Naqshad wada shaqayn](topic:work-live)), iyo liiska kordhin-yada.
- **Ku xidh AI-gaaga.** Hal xidhiidh oo ka yimaada CadCraft Studio ilaa sideed app oo dhan, oo leh heer akhris kaliya, soo jeed, ama tafatir app kasta, iyo diiwaan erayo ah oo muujinaya waxa kaaliyuhu sameeyay. CadCraft ma lahan AI gaar ah, Weydii app kasta wuxuu isticmaalaa AI-ga aad xidhto.

## Waa la saxay 0.8.1

- **Guryaha waxay muujinayeen 150 halkii 12'-6"** naqshadaha feet iyo inches. Goobaha app-ku akhriyo wuxuu dib u soo celiyay qoraalkooda.
- **Faylasha DWG oo qaybta fasallada loo akhriyay nooc qaldan** (GitHub cadcraft#5) hadda si sax ah ayay u furmaan.
- **Kursiga-jiifka** hadda kama muuqdo gadaasha pop-ups.
- **Studio iyo nooca xirmada ayaa luuqad ka beddeli kara wakhtiga shaqada.** Hore, Ingiriisi keliya ayay ahaayeen. Weli lama tijaabin dhammaan nidaamyada: nala soo xidhiidh haddii luuqaddu aanay beddelmin.
- **Tablets-ka oo toosan** waxay bixiyaan dhererka shabakadda ee dheeraadka ah canvas-ka, mode-ka xaashiyada wuxuu bilaabmaa 760 px ama ka yar.
- **STRETCH oo leh daaqad gudub ah, iyo LIMITS,** waxa lagu soo sheegay Studio 0.8.0 wuxuuna horay ugu sax ahaa dhismaha webka 0.8; rakibaha soo sheegay wuu ka hore ahaa. Studio 0.8.1 wuu ku jiraa.

## Weli ma jiro nooca tan

- **0.8 iyo 0.8.1 lama saxiixin code-ka.** Windows waxa laga yaabaa in ay digniin bixiso (dooro {{ui:Macluumaad dheeraad ah}}, kadibna {{ui:Ku shaqee hadda}}); Mac-ka, midig-guji CadCraft Studio oo dooro {{ui:Fur}}. Dhismaha dukaanka waa la joojiyay, dhismaha iPad iyo iPhone looma dib-u-dhisin 0.8.1.
- **Sawirada qalinka iyo sawirada sawirka** waxaa lagu tijaabiyay oo keliya sawirro la sameeyay iyo mouse, weli ma jiraan qalin dhab ah, shaashad taabasho ama sawir gacanta ku qoran warqad.
- **Naqshadeynta aan aragga lahayn** waxaa lagu tijaabiyay jeegagyo otomaatig ah, weli ma jiraan akhriye shaashad ama tijaabiye indho la' ah.
- **Wadaagista faahfaahinta** lama hubin laba qof, folder-ka Team Cloud Plan ee loo beddelo folder-ka Documents weli lama dhisin.
- **Isku dhigidda** waxay shaqeysaa faylasha DWG iyo DXF ee CadCraft; faylasha barnaamijyada kale weli lama dhisin.
- **Iska noqo dhamaan daaqadaha:** CadCraft wuxuu sheegaa tallaabo kasta oo dhammaatay, laakiin Studio weli ma leh Ka noqo keliya oo dhammaan app-yada; app kasta wuxuu ka noqonayaa tallaabooyinkiisa.
- **OLE objects-ka DWG** waa la hayaa laakiin lama sawiro meesha ay ku jiraan.
- **Miisaska nooca qoraalka (CTB)** ee barnaamijyada kale waa la dhisay laakiin lama hubin faylka barnaamij kale.
- **Ku xidh AI-gaaga:** xidhiidh hal-guji ah Studio-ga, connector-ka martida ee AI-ga browser-ka, furaha API-kaaga gudaha Studio iyo xirmada MCP ee la daabacay lama balan qaadayo nooca sii-deynta tan.

Nooca ka horreeya, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).

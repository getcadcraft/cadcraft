---
title: Isticmaal CadCraft kaaliye AI
summary: Ogolow kaaliyahaaga AI ama qoraalkaaga inuu la shaqeeyo CadCraft: waxa uu sameyn karo, sida loo xidho MCP client kasta, iyo sida adiga ayaad u xakamaynaysid (ogolaansho, ka noqo, diiwaanka waxqabadka, Ka jooji).
keywords: ai, kaaliye, wakiil, mcp, model context protocol, qoraal, otomaatig, sadarka amarka, cli, json, token, ogolaansho, ka jooji, waxqabad, galal, jidad, svg, koox
from: 06ba4ef6
---

## Waxa aad baranaysaa

Sida loo ogolaado kaaliye AI (ama qoraal aad qortay) inuu eego naqshad, uu socodsiiyo amarrada CadCraft, uu daabaco oo kaydiyo, iyo sida loo go'aaminayo waxa uu taaban karo.

CadCraft **ma lahan AI u gaar ah** oo wax ma diro meel kale. Adigaa keenaya kaaliyaha: barnaamij kasta oo ku hadla Model Context Protocol (MCP). CadCraft wuxuu siinayaa qalabyo oo keliya, adna ayaad dooranaysaa kuwa.

Laba habood ayaa jira:

- **Naqshadda aad furtay.** Kaaliyuhu wuxuu ka shaqeeyaa daaqadan, adiga oo agtaada joogta, iyada oo loo marayo CadCraft Studio ee kombuutarkaaga. Taasi waa waxa {{ui:Dejinta}} › {{ui:CadCraft}} › {{ui:Kaaliyayaasha}} loogu talagalay.
- **Naqshadaha kombuutarkaaga, adigoon furin appka.** CadCraft MCP server-ka iyo sadarka amarka `cadcraft` waxay akhriyaan oo qori karaan faylalka DWG iyo DXF ee galalka aad magacaabto. Eeg "Shaqaynta faylasha adigoon furin CadCraft" hoos.

## Shid

1. Fur {{ui:Dejinta}} (gear-ka app bar-ka, ama {{key:Mod+,}}) oo tag tab-ka {{ui:CadCraft}}.
2. Hoos {{ui:Kaaliyayaasha}}, calaamadi **Ogolow kaaliyayaasha AI iyo qoraallada inay isticmaalaan CadCraft**. Waa la damiyay ilaa aad sidaas samayso.
3. Dooro waxa uu sameyn karo. **Akhri** ayaa lagu calaamadiyay bilowga; kuwa kale calaamadi kaliya markaad u baahan tahay.

| Ogolaansho | Waxa kaaliyuhu sameyn karo |
|---|---|
| Akhri | Eeg naqshadda: sharax, liis oo raadi walxaha, arag xulashada, sharax muuqaalka oo sawir ka qaad, ka hubi qaanuunnada lakabka iyo sawirka |
| Wax ka beddel | Socodsii amarrada naqshadda oo beddel xulashada. Fal kasta waa hal tallaabo oo aad ka noqon karto |
| Kaydi | Kaydi naqshadda (kombuutarka, faylkeeda; browser-ka, sida download) |
| Dhoofi | Soo saar PDF iyo samee faylal kale |

## Ogolow inuu isticmaalo faylasha galalka aad doorato

CadCraft Studio kaaliyuhu wuxuu furi, kaydin iyo daabaci karaa faylal magac ahaan halkii uu isticmaali lahaa daaqadaha faylka, laakiin kaliya gudaha galalka aad ku dartay hoos {{ui:Kaaliyayaasha}} › {{ui:Galalka uu isticmaali karo}}:

1. Dooro {{ui:Ku dar gal…}} oo dooro galka dialog-ka Studio laftiisa.
2. Kaaliyuhu hadda wuxuu liis ka samayn karaa faylasha halkaas (`files_list`), furi karaa naqshad (`drawing_open`), ku kaydin karaa DWG ama DXF, soo saari karaa PDF ama SVG, soo rari karaa faylka LISP, oo siin karaa amarka faylka uu weydiisto (`INSERT` `F`, `XATTACH`, faylka barta) ama sheegi karaa meesha faylka amarku u aado (CSV-ga `COUNT`, `PUBLISH`).
3. {{ui:Ka saar}} wuxuu galka dib ugu qaadaa isla markiiba. Jidad meel kale ku yaal waa la diidaa, faylka horeba u jiray waxaa lagu beddelaa kaliya marka kaaliyuhu sidaas codsado ama uu isagu qoray faylka.

Furidda weli waxay u baahan tahay **Akhri**; qorista naqshadda waxay u baahan tahay **Kaydi**; fayl kasta oo kale waxay u baahan tahay **Dhoofi**.

Qalabyada aan ku jirin ogolaanshaha aad calaamadisay looma soo bandhigo kaaliyaha, haddii uu si kastaba u weydiisto, CadCraft way diidaa oo wuxuu ku qoraa diiwaanka waxqabadka. Deminta furaha ayaa dhammaan xiriirrada isla markiiba jooga. {{ui:Dib u deji dejinta CadCraft}} ayaa iyana demiya.

## Ku xidh kaaliyahaaga

Kaaliyayaashu waxay ku xidhmaan **CadCraft Studio** kombuutarkaaga: wuxuu socodsiiyaa server yar oo kaliya kombuutarkan gaari karo (cinwaanka `127.0.0.1`), oo ilaaliya token uu Studio sameeyo mar kasta oo bilowdo. Fur Studio, dooro {{ui:Ku xidh kaaliye}}, oo koobiyee cinwaanka iyo token-ka.

- Kaaliyahaaga, ku dar MCP server nooca HTTP oo leh cinwaanka (wuxuu u eeg yahay `http://127.0.0.1:47615/mcp`) iyo header-ka `Authorization: Bearer <token>`. Studio wuxuu tusaa dejinta lagu dhejiyo.

{{ui:Calaamad cusub}} Studio-ka wuxuu ka dhigaa kaaliye kasta oo xidhan inuu dib ugu xidho token-ka cusub. Weligaa ha wadaagin token-ka: qof kasta oo haysta wuxuu isticmaali karaa appsyada aad furtay, intii Studio shaqaynayso.

:::note
Tab browser ah ma furi karo xiriir kaaliye: appsyada browser-ka demintu ma saameyneyso ilaa aad isticmaasho CadCraft Studio kombuutarkaaga.
:::

## Adigu waad maamushaa

- **Ficil kasta waa hal tallaabo oo ka noqo**, oo magac kaaliyaha ku qoran, tusaale ahaan "Kaaliye: LINE". Riix {{key:Mod+Z}} si aad u qaado ficilkii ugu dambeeyay ee kaaliyaha oo dhammaantiis.
- **Waad aragtaa waxa uu sameeyo.** Amarradiisa waxay ka soo muuqdaan taariikhda amarrada iyadoo hortooda ku qoran **[Kaaliye]**, naqshaddana way dib u sawirtaa intuu shaqeynayo.
- **Wuu sugaa adiga.** Intii aad ku jirto amar dhex-dhexaad ah, kaaliyuhu wuxuu akhriyi karaa laakiin ma beddeli karo naqshadda; waxaa la sheegay inuu mar kale isku dayo markaad dhammayso.
- **Waad ogtahay marka mid la xidhay.** Badhan ku yaal bar-ka app-ka wuxuu magac u bixiyaa kaaliyaha intuu xidhan yahay. Riix si aad u aragto waxa uu sameyn karo, ama si aad u **Ka jooji**.
- **Waxqabadka.** {{ui:Dejinta}} › {{ui:CadCraft}} › {{ui:Kaaliyayaasha}} › {{ui:Waxqabadka}} wuxuu liistaa wicitaan kasta: goorta, qalabka, dhammaaday ama la diiday, iyo tallaabada ka noqo ee uu sameeyay. {{ui:Kaydi diiwaanka}} wuxuu keydiyaa nuqul.

## Waxa kaaliyuhu weydiisan karo

| Qalab | Ogolaansho | Waxa uu sameeyo |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Akhri | Magaca naqshadda, unugyada, lakabyada, bloogyada, xaashiyada; waxa shaashadda ku jira |
| `files_list`, `drawing_open` | Akhri | Studio: faylasha galalkaaga; fur mid ka mid ah daaqadan |
| `objects_list`, `object_get`, `selection_get` | Akhri | Walxaha iyo joomatarigooda, dherer iyo bed (ama kaliya tirada, nooca iyo lakabka); xulashada |
| `drawing_check` | Akhri | Xeerarka sida lakabyada la oggol yahay, waxba lakab 0 kuma jiro, midabyada ByLayer, dherarka qoraalka |
| `view_screenshot` | Akhri | Sawir naqshadda sida ay shaashadda u muuqato |
| `command_run` | Wax ka beddel | Wuxuu ku qoraa sadarka amarka: `LINE 0,0 @100,0 @0,50 ` waa la akhriyaa sida aad qori lahayd (meel bannaan ayaa dhammeysa jawaab), ama liis oo jawaab kasta leh. Wuxuu amar furan u hayn karaa, wuuna sii wadi karaa wicitaankiisa xiga |
| `script_run` | Wax ka beddel | Script (`.scr`) ama fayl LISP, sida {{ui:APPLOAD}} u soo rarto |
| `block_insert` | Wax ka beddel | Wuxuu geliyaa bloog qiimayaasha sifooyinkiisa hal tallaabo |
| `selection_set`, `undo` | Wax ka beddel | Wuxuu xulaa walxaha amarka xiga; wuxuu ka noqdaa tallaabooyinkiisa |
| `drawing_save` | Kaydi | {{ui:Kaydi}} CadCraft laftiisa, ama {{ui:U kaydi sida}} gal ka mid ah galalkaaga |
| `drawing_plot` | Dhoofi | PDF ama SVG ee xaashi ama naqshadda, heer miisaan ah ama la waafajiyey (PDF hoos-saar lama soo saaro sidan weli) |

Intii kaaliyuhu uu socodsiinayo amar, CadCraft su'aalihiisa wuxuu weydiiyaa sadarka amarka halkii uu dialog ku weydiin lahaa (tusaale ahaan inuu la geliyo naqshad oo dhan ama hal bloog keliya), si kaaliyuhu u jawaabi karo. {{ui:Maktabad}} iyo Raadi weli adiga ayaa u baahan; kaaliyaha waxaa la sheegay inuu kugu weydiiyo.

## Shaqaynta faylasha adigoon furin CadCraft

CadCraft MCP server-ka (`cadcraft-mcp`) iyo sadarka amarka (`cadcraft`) waxay socodsiiyaan koodka naqshadda CadCraft ee Node.js, iyada oo aan daaqad lahayn. Waxay u baahan yihiin Node.js 20 ama ka cusub.

- **MCP server-ka** wuxuu shaqeeyaa kaliya galalka aad magacaabto, oo kaliya ogolaanshaha aad siiso: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Aan `--root` lahayn ma furi karo wax fayl ah; aan `--allow` lahayn wuxuu akhriyi karaa kaliya. Wuxuu sidoo kale akhriyi karaa qaababka IFC, xisaabinta qadarka iyo calaamadinta ku jirta PDF-ka.
- **Sadarka amarka** wuxuu u shaqeeyaa qoraallada aad qortay: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Faylal badan oo mar keliya: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Ku dar `--json` si aad u hesho natiijo barnaamij akhriyi karo.

:::note
Haddii `npx @getcadcraft/mcp` sheego in xirmada aan la helin, weli lama daabicin. Wararka getcadcraft.com ayaa sheegi doona marka ay diyaar noqoto.
:::

## Haddii wax aan shaqeyn

- **Kaaliyuhu ma arko qalabyada CadCraft:** hubi in demiyaha uu daaqaddan ku shaqeynayo, iyo in daaqaddu ay furan tahay Studio.
- **"waxay u baahan tahay ogolaanshaha wax ka beddelka":** calaamadi **Wax ka beddel** hoos {{ui:Kaaliyayaasha}}, kadibna mar kale weydii.
- **"ka baxsan galalka kaaliyayaasha ay isticmaali karaan":** ku dar galkaas hoos {{ui:Kaaliyayaasha}} › {{ui:Galalka uu isticmaali karo}}, ama weydii kaaliyaha inuu isticmaalo fayl galka aad horey ugu dartay.
- **Khaladaadka "401" ama "token":** token-ka waa is beddelay (Studio dib ayuu u bilaabay, ama {{ui:Calaamad cusub}}). Ku koobiyee token-ka cusub dejinta kaaliyaha.
- **Isbeddelkiisu khalad ahaa:** riix {{key:Mod+Z}}. Hal riix waxay dib u qaadaa hal tallaabo oo buuxda oo kaaliyaha ah.

## Eeg sidoo kale

- [Cuntooyinka kaaliyayaasha AI](common:assistants-recipes): tusaalooyin shaqo, mid kastaa leh qalabyada uu wicitaano.

---
title: Tumia CadCraft pamoja na msaidizi wa AI
summary: Ruhusu msaidizi wako wa AI au skripti ifanye kazi na CadCraft. Angalia anachoruhusiwa kufanya, jinsi ya kuunganisha MCP client yoyote, na jinsi unavyobaki unadhibiti (ruhusa, kutendua, kumbukumbu ya shughuli, Kata muunganisho).
keywords: ai, msaidizi, wakala, mcp, itifaki ya muktadha wa modeli, skripti, otomatiki, mstari wa amri, cli, json, tokeni, ruhusa, kata muunganisho, shughuli, folda, njia, svg, bechi
from: 06ba4ef6
---

## Utakachojifunza

Jinsi ya kumruhusu msaidizi wa AI (au skripti uliyoandika) kutazama mchoro, kuendesha amri za CadCraft, kuchapisha na kuhifadhi, na jinsi ya kuamua anachoruhusiwa kugusa.

CadCraft haina AI yake yenyewe na haituma chochote popote. Wewe ndiye unayeleta msaidizi: programu yoyote inayozungumza Model Context Protocol (MCP). CadCraft inampa zana tu, na wewe ndiye unayechagua zipi.

Kuna njia mbili za kuingia:

- **Mchoro uliouweka wazi.** Msaidizi anafanya kazi kwenye dirisha hili, karibu nawe, kupitia CadCraft Studio kwenye kompyuta yako. Hii ni kwa ajili ya {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Wasaidizi}}.
- **Michoro kwenye kompyuta yako, bila kufungua programu.** Seva ya CadCraft MCP na mstari wa amri wa `cadcraft` husoma na kuandika faili za DWG na DXF kwenye folda unazotaja. Tazama "Fanya kazi na faili bila kufungua CadCraft" hapa chini.

## Iwashe

1. Fungua {{ui:Mipangilio}} (gia kwenye upau wa programu, au {{key:Mod+,}}) kisha nenda kwenye kichupo cha {{ui:CadCraft}}.
2. Chini ya {{ui:Wasaidizi}}, weka alama kwenye **Ruhusu wasaidizi wa AI na skripti watumie CadCraft**. Imezimwa mpaka uifanye hivyo.
3. Chagua anachoweza kufanya. **Soma** imewekwa alama mwanzoni; weka alama kwenye nyingine tu pale unapozihitaji.

| Ruhusa | Msaidizi anaweza kufanya nini |
|---|---|
| Soma | Kutazama mchoro: kuelezea, kuorodhesha na kutafuta vitu, kuona uteuzi, kuelezea mwonekano na kupiga picha yake, kukagua dhidi ya kanuni za tabaka na uchoraji |
| Hariri | Kuendesha amri kwenye mchoro na kubadilisha uteuzi. Kila kitendo ni hatua moja unayoweza kutendua |
| Hifadhi | Kuhifadhi mchoro (kwenye desktop, kwenye faili yake; kwenye kivinjari, kama upakuaji) |
| Hamisha nje | Kuchapisha PDF na kutengeneza faili nyingine |

## Ruhusu itumie faili kwenye folda unazochagua

Katika CadCraft Studio msaidizi anaweza kufungua, kuhifadhi na kuchapisha faili kwa jina badala ya kutumia madirisha ya faili, lakini ndani ya folda unazoongeza chini ya {{ui:Wasaidizi}} › {{ui:Folda anazoweza kutumia}} pekee:

1. Chagua {{ui:Ongeza folda…}} kisha uchague folda kwenye dirisha la Studio lenyewe.
2. Msaidizi sasa anaweza kuorodhesha faili zilizopo (`files_list`), kufungua mchoro (`drawing_open`), kuuhifadhi hapo kama toleo la DWG au kama DXF, kuchapisha kwenye faili ya PDF au SVG, kupakia faili ya LISP, na kumpa amri faili inayoiomba (`INSERT` `F`, `XATTACH`, faili ya nukta) au kueleza faili ya amri inakwenda wapi (CSV ya `COUNT`, `PUBLISH`).
3. {{ui:Ondoa}} inaondoa folda mara moja. Njia zilizo nje ya hapo zinakataliwa, na faili iliyopo tayari inabadilishwa tu msaidizi anapoomba hivyo au akiwa ndiye aliyeiandika.

Kufungua bado kunahitaji **Soma**; kuandika mchoro kunahitaji **Hifadhi**; faili nyingine yoyote inahitaji **Hamisha nje**.

Zana zilizo nje ya ruhusa ulizoweka alama hazitolewi kwa msaidizi kabisa. Akiiomba hata hivyo, CadCraft inakataa na kuiandika kwenye shughuli. Kuzima swichi kunakatiza miunganisho yote mara moja. {{ui:Weka upya mipangilio ya CadCraft}} nayo inaizima.

## Unganisha msaidizi wako

Wasaidizi wanaunganishwa kupitia **CadCraft Studio** kwenye kompyuta yako. Inaendesha seva ndogo ambayo kompyuta hii pekee inaweza kuifikia (anwani `127.0.0.1`), iliyolindwa na tokeni ambayo Studio inaitengeneza kila inapoanza. Fungua Studio, chagua {{ui:Unganisha msaidizi}}, kisha nakili anwani na tokeni.

- Katika msaidizi wako, ongeza MCP server ya aina ya HTTP yenye anwani (inaonekana kama `http://127.0.0.1:47615/mcp`) na kichwa `Authorization: Bearer <token>`. Studio inaonyesha mipangilio ya kubandika.

{{ui:Tokeni mpya}} katika Studio inamfanya kila msaidizi aliyeunganishwa aunganike upya kwa tokeni mpya. Usishiriki tokeni kamwe: yeyote anayeimiliki anaweza kutumia programu ulizowasha, muda wote Studio inapofanya kazi.

:::note
Kivinjari hakiwezi kufungua muunganisho kwa msaidizi: kwenye programu za kivinjari swichi haina athari mpaka utumie CadCraft Studio kwenye kompyuta yako.
:::

## Wewe ndiye unayedhibiti

- **Kila kitendo ni hatua moja ya kutendua**, yenye jina la msaidizi kwa ajili yake, kwa mfano "Msaidizi: LINE". Bonyeza {{key:Mod+Z}} ili kurudisha kitendo cha mwisho cha msaidizi kwa ujumla.
- **Unaona kinachofanya.** Amri zake zinaonekana kwenye historia ya amri ikiwa na **[Msaidizi]** mbele yake, na mchoro unachorwa upya anapofanya kazi.
- **Anasubiri wewe.** Wakati uko katikati ya amri, msaidizi anaweza kusoma lakini si kubadilisha mchoro; anaambiwa ajaribu tena ukimaliza.
- **Unajua pale mmoja anapounganishwa.** Kitufe kwenye upau wa programu kinataja msaidizi wakati ameunganishwa. Bonyeza ili kuona anachoweza kufanya, au ili **Kata muunganisho**.
- **Shughuli.** {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Wasaidizi}} › {{ui:Shughuli}} inaorodhesha kila wito: lini, zana ipi, imekamilika au imekataliwa, na hatua ya kutendua aliyofanya. {{ui:Hifadhi kumbukumbu}} inahifadhi nakala.

## Anachoweza kuomba msaidizi

| Zana | Ruhusa | Inachofanya |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Soma | Jina la mchoro, vitengo, tabaka, bloku, karatasi; kilichopo kwenye skrini |
| `files_list`, `drawing_open` | Soma | Studio: faili kwenye folda zako; kufungua moja kwenye dirisha hili |
| `objects_list`, `object_get`, `selection_get` | Soma | Vitu pamoja na jiometri, urefu na eneo lao (au idadi tu, kwa aina na tabaka); uteuzi |
| `drawing_check` | Soma | Kanuni kama tabaka zinazoruhusiwa, hakuna kitu kwenye tabaka 0, rangi ByLayer, urefu wa maandishi |
| `view_screenshot` | Soma | Picha ya mchoro kama unavyoonekana |
| `command_run` | Hariri | Kuandika kwenye mstari wa amri: `LINE 0,0 @100,0 @0,50 ` inasomwa kama unavyoandika wewe (nafasi inamaliza jibu), au orodha yenye jibu moja kila moja. Inaweza kuacha amri wazi na kuendelea katika wito wake unaofuata |
| `script_run` | Hariri | Skripti (`.scr`) au faili ya LISP, kama {{ui:APPLOAD}} inavyopakia |
| `block_insert` | Hariri | Kuweka bloku pamoja na thamani zake za sifa kwa hatua moja |
| `selection_set`, `undo` | Hariri | Kuchagua vitu kwa amri inayofuata; kutendua hatua zake zenyewe |
| `drawing_save` | Hifadhi | {{ui:Hifadhi}} ya CadCraft yenyewe, au {{ui:Hifadhi kama}} kwenye mojawapo ya folda zako |
| `drawing_plot` | Hamisha nje | PDF au SVG ya karatasi au ya modeli, kwa kipimo au kutoshea (viwekeleo vya PDF bado havichapishwi kwa njia hii) |

Msaidizi anapoendesha amri, CadCraft inauliza maswali yake kwenye mstari wa amri badala ya kwenye dirisha (kwa mfano, kama uingize mchoro mzima au bloku moja), ili msaidizi aweze kuyajibu. Maktaba na Tafuta bado zinakuhitaji wewe; msaidizi anaambiwa akuulize.

## Fanya kazi na faili bila kufungua CadCraft

Seva ya CadCraft MCP (`cadcraft-mcp`) na mstari wa amri (`cadcraft`) huendesha msimbo wa kuchora wa CadCraft wenyewe katika Node.js, bila dirisha. Zinahitaji Node.js 20 au mpya zaidi.

- **Seva ya MCP** inafanya kazi ndani ya folda unazotaja pekee, na kwa ruhusa unazompa pekee: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Bila `--root` haiwezi kufungua faili yoyote; bila `--allow` inaweza kusoma tu. Pia inaweza kusoma modeli za IFC, ukadiriaji wa kiasi na alama katika seti za PDF.
- **Mstari wa amri** ni kwa skripti zako mwenyewe: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Faili kadhaa kwa mara moja: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Ongeza `--json` kwa matokeo ambayo programu inaweza kuyasoma.

:::note
Ikiwa `npx @getcadcraft/mcp` inasema kifurushi hakipatikani, bado hakijachapishwa. Habari kwenye getcadcraft.com zitasema itakapokuwa tayari.
:::

## Ikiwa kitu hakifanyi kazi

- **Msaidizi haoni zana zozote za CadCraft:** angalia kwamba swichi imewashwa kwenye dirisha hili, na kwamba dirisha liko wazi kwenye Studio.
- **"inahitaji ruhusa ya kuhariri":** weka alama kwenye **Hariri** chini ya {{ui:Wasaidizi}}, kisha umwulize tena.
- **"nje ya folda ambazo wasaidizi wanaweza kutumia":** ongeza folda hiyo chini ya {{ui:Wasaidizi}} › {{ui:Folda anazoweza kutumia}}, au mwambie msaidizi atumie faili iliyo kwenye folda uliyoshaongeza tayari.
- **Kosa la "401" au la "tokeni":** tokeni imebadilika (Studio imeanzishwa upya, au {{ui:Tokeni mpya}}). Nakili mpya kwenye mipangilio ya msaidizi.
- **Mabadiliko yake yalikuwa si sahihi:** bonyeza {{key:Mod+Z}}. Bonyeza mara moja inarudisha kitendo kimoja kizima cha msaidizi.

## Tazama pia

- [Mapishi kwa wasaidizi wa AI](common:assistants-recipes): mifano iliyofanyiwa kazi, kila moja na zana zinazoitumia.

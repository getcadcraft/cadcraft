---
title: Faili: zinazofunguka, zinazohifadhiwa
summary: Miundo ambayo CadCraft inafungua, inahifadhi na kusafirisha, kinachohifadhiwa au kubadilishwa, na mahali faili zinapokwenda.
keywords: xclip, clip, xclip boundary, bind clipped, dwg, dxf, pdf, r12, open, save, export, import, formats, conversion, download, saveas, dxfout, save as, dwg save, format, qsave, xref, xattach, mchoro uliounganishwa, rejeleo la nje, bind, reload, detach
from: b8c5778d
---

## Kwa muhtasari

| Umbizo | Fungua | Hifadhi | Maelezo |
|---|---|---|---|
| DXF (maandishi au binary, toleo lolote) | Ndiyo | Ndiyo, kama DXF R12, DXF 2000 au DXF 2000 (binary) | DXF ya binary hufunguka kama ya maandishi na kuhifadhiwa tena kama binary. |
| DWG | Ndiyo | Ndiyo, kama DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 au 2018) | Inasomwa na kuandikwa na maktaba ya DWG ya CadCraft yenyewe (faili za AutoCAD R13 hadi 2018). DWG yako haibadilishwi kamwe. Faili zilizoharibika, au matoleo ambayo msomaji hashughulikii, zinakataliwa kwa ujumbe. |
| PDF | Huleta ukurasa ndani: kama msingi ([Misingi ya PDF](topic:pdf-underlay)) au kama vitu | Ndiyo, kwa kuchapisha | PDF ya vekta ya karatasi, au ya modeli kwa skeli. |

Kila mchoro unaofungua (au unaoanza na {{ui:New}}) hupata kichupo chake juu ya eneo la kuchora; mchoro mpya ambao hakuna aliyeugusa bado hutumika badala ya kuongeza kichupo. Bofya kichupo ili kubadili, {{ui:×}} yake kufunga (CadCraft inauliza kwanza kama kuna mabadiliko ambayo hayajahifadhiwa), au panga michoro iliyofunguliwa pembeni kwa pembeni: tazama [Gawanya skrini](topic:split-screen).

## Kufungua mchoro

- Bonyeza {{key:Mod+O}}, bofya {{ui:Open}}, au andika `OPEN`, kisha uchague faili.
- Au buruta faili ya `.dwg` au `.dxf` hadi eneo la kuchora.

Faili inasomwa ndani ya kivinjari chako. Haipakiwi popote. Historia inaripoti vitu vingapi na tabaka ngapi vimeingia na muda uliochukua, na sehemu ya {{ui:Drawing}} katika paneli ya kushoto inaonyesha umbizo, kwa mfano "DWG 2018 (AC1032)".

Kisomaji cha DWG ni sehemu ya CadCraft na kinapakuliwa pamoja na DWG ya kwanza unayofungua baada ya ukurasa kupakiwa (takriban KB mia chache), kwa hivyo hakuna upakuaji tofauti wa kusubiri. Kinasoma faili chinichini, kwa hivyo ukurasa unaendelea kujibu wakati DWG kubwa inafunguka.

DXF inasomwa katika vipande vya takriban MB 4, si kama kipande kimoja cha maandishi, kwa hivyo DXF zaidi ya MB 512 pia zinafunguka. Kinachoweka kikomo ni kumbukumbu ya kompyuta yako: DXF inapofunguka, tarajia itatumia takriban mara 16 hadi 20 ya ukubwa wa faili (DXF ya MB 100 yenye vitu takriban 690,000 ilitumia takriban 1.5 GB katika jaribio letu).

### Kinachoingia

- Mistari, matao, duara, polilaini (zenye sehemu za tao), elipsi, nukta, maandishi na maandishi ya mistari mingi, solidi, mistari ya kivuli (michoro ya kawaida inachorwa kama mistari yake, nyingine kama rangi tambarare), marejeleo ya bloku pamoja na sifa zao (thamani unazoweza kuhariri; tazama [Sifa za bloku](topic:attributes)), vipimo, na mpangilio pamoja na madirisha yake ya mwonekano.
- Splines zinaingia kama splines (shahada, pointi za udhibiti, vifundo, uzito, pointi za kufaa); tazama [Splines na polilaini](topic:splines).
- Multileaders zenye mstari mmoja wa kiongozi na maandishi zinaingia kama multileaders za CadCraft unazoweza kuhariri (tazama {{cmd:MLEADER}}). Nyingine (zenye bloku, mistari kadhaa ya kiongozi au mistari iliyopinda) zinachorwa kama programu nyingine ilivyozichora na zinasogea kama kitu kimoja; historia inasema ngapi.
- Picha (images) zinaonyeshwa kama fremu yenye jina la faili ya picha hadi utakapoipa CadCraft faili hiyo kwa {{cmd:IMAGE}}: tazama [Picha katika mchoro](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts zinaonyeshwa kama fremu yake, na kilicho chini yake kinabaki kinaonekana.
- Majedwali katika DWG yanaingia kama programu nyingine ilivyoyachora.
- Nyuso za 3D katika nafasi ya modeli zinaingia kwenye kichupo cha {{ui:3D}}, si kama vitu vya 2D; vivyo hivyo vilivyo ndani ya bloku, mara moja kwa kila rejeleo la bloku katika modeli. Katika bloku na kwenye karatasi pia zinachorwa bapa, kama mipaka. Tazama [Modeli katika 3D](topic:3d-solids).
- Tabaka zinahifadhi rangi yake, mipangilio ya kuwasha, kuzima, kuganda, kufunga na kuchapisha. DEFPOINTS haichapishwi kamwe.
- Vipimo vinakuwa vipimo halisi vya CadCraft vinavyoweza kuhaririwa pale pointi zao zinaposomeka. Kwanza vinaonyeshwa kama programu nyingine ilivyovichora; mara tu unapobadilisha kimoja, CadCraft kinakichora upya kwa mtindo wake.
- Kila mpangilio unakuwa kichupo cha karatasi. Katika programu nyingine kila mpangilio una dirisha la kwanza lililofichwa ambalo ni karatasi yenyewe; CadCraft inaliacha nje.

### Kisichoingia bado

Chochote ambacho CadCraft haiwezi kuchora kinahesabiwa, si kukisiwa. Kisanduku cha "About this file" katika paneli ya kushoto kinakiorodhesha kama "Not shown yet:" kikifuatiwa na kila aina ya kitu na idadi yake. Mifano ya kawaida ni majedwali katika DXF, mesh, na solidi za 3D ndani ya bloku. Solidi za 3D, regions na bodies katika nafasi ya modeli zinaonyeshwa kwenye kichupo cha 3D (tazama [Modeli katika 3D](topic:3d-solids#solids-from-other-programs)). Madirisha ya mwonekano yaliyopotoshwa kwenye faili yanaonyeshwa yamegeuka, kama yalivyo huko, na yanabaki na mkunjo wake unapohifadhi; vivyo hivyo UCS ya sasa, UCS zilizopewa majina na mwonekano uliogeuzwa.

Maandishi yanachorwa kwa fonti moja ya mtindo wa Helvetica. Lebo inayotoshea mstari mmoja katika fonti nyembamba ya programu asili inaweza kukunjika kwenye mistari miwili katika CadCraft.

## Kuhifadhi

Kuna njia tatu za kuhifadhi. Kila moja hupakua nakala.

- **Hifadhi**: bonyeza {{key:Mod+S}}, bofya {{ui:Save}}, au andika `SAVE` (pia `QSAVE`). Inahifadhi kwa umbizo la mchoro: DWG ukifungua DWG, DXF ukifungua DXF. DWG inabaki na toleo ilimokuja nalo (faili ya 2018 inahifadhiwa kama 2018). Mchoro mpya unatumia umbizo na toleo la DWG ulilochagua mwisho katika Hifadhi kama kwenye kivinjari hiki; usipochagua chochote, ni DWG katika umbizo la AutoCAD 2000.
- **Hifadhi kama**: bonyeza {{key:Mod+Shift+S}}, bofya {{ui:Save as}}, au andika `SAVEAS`. Kisanduku cha {{ui:Save a copy as}} kinatoa {{ui:DWG}}, pamoja na orodha ya {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 au 2000), DXF R12 na {{ui:DXF 2000}}, kila moja na jina la faili litakalopewa, na umbizo na toleo la sasa la mchoro likiwa tayari limechaguliwa. Bofya {{ui:Save}} kupakua, au {{ui:Cancel}} (au {{key:Esc}}) kutohifadhi chochote; historia inasema "Haijahifadhiwa." Ulichochagua kinabaki: {{key:Mod+S}} inakitumia kwa mchoro huu tangu hapo, na michoro mipya kwenye kivinjari hiki inaanza nacho.
- **DXFOUT**: andika `DXFOUT`. Daima inapakua nakala ya DXF R12, na {{key:Mod+S}} inayofuata bado inahifadhi katika umbizo la mchoro.

Kivinjari kinapakua `<drawing name>.dwg` au `<drawing name>.dxf`. Kila uhifadhi ni **upakuaji mpya**. Faili uliyofungua haibadilishwi wala kuandikwa juu yake kamwe. Historia inathibitisha, kwa mfano: "Nakala imehifadhiwa kama Plan.dwg (DWG (AutoCAD 2018)). Plan.dxf yako ya awali haijabadilika." Kwa DXF inasema "(DXF R12, inafunguka katika programu yoyote ya CAD)". Mistari iliyo chini yake inaorodhesha chochote kilichobadilika njiani.

Inapoendeshwa kama programu ya eneo-kazi, kuhifadhi kunafanya kazi kama katika programu nyingine za eneo-kazi: {{key:Mod+S}} huandika mchoro kurudi kwenye faili uliyofungua, katika umbizo lake na toleo lake, na historia inasema mahali ulipohifadhiwa. {{ui:Save as}} na usafirishaji zinaonyesha kisanduku cha kuhifadhi cha mfumo, na faili ya `.dwg`, `.dxf` au `.ccsheets` unayobofya mara mbili inafunguka katika CadCraft.

Kwa PDF, chapisha badala yake (tazama hapa chini).

## Kinachohifadhiwa na kinachobadilika katika DWG

CadCraft inaandika DWG yenyewe, ndani ya kivinjari chako, kwa maktaba ile ile ya DWG inayoisoma. Chagua toleo katika Hifadhi kama: umbizo la AutoCAD 2000 (toleo la faili AC1015) linafunguka katika programu nyingi zaidi, hata zile za zamani; miundo mipya (2004, AC1018, hadi 2018, AC1032) pia inahifadhi rangi halisi. Hakuna kinachopakiwa, na kuhifadhi DWG kunafanya kazi nje ya mtandao.

Kila toleo linakaguliwa kwa kusoma tena faili zilizohifadhiwa kwa visomaji vya DWG vya programu nyingine tatu na kwa CadCraft yenyewe. DWG ya CadCraft bado haijafunguliwa katika AutoCAD yenyewe.

### Kinachohifadhiwa katika DWG

- Mistari, matao, duara, elipsi, nukta, na polilaini zenye sehemu zao za tao.
- Maandishi ya mstari mmoja pamoja na mpangilio wake na kipengele cha upana.
- Maandishi ya mistari mingi na yaliyofungwa, kama maandishi ya mistari mingi. Programu nyingine inayafunga tena kutoka upana uleule.
- Rangi za vitu: kwa tabaka, kwa bloku, rangi 255 za kawaida, na rangi halisi katika muundo wa 2004 na zaidi.
- Tabaka zenye rangi yake, aina ya mstari, unene wa mstari, na mipangilio yake ya kuwasha, kuganda, kufunga na kuchapisha; aina za mstari, unene na skeli za aina ya mstari za vitu, mifumo ya aina za mstari, na skeli ya aina ya mstari ya mchoro.
- Vitengo vya mchoro na muundo wa urefu (desimali, futi na inchi, sehemu…).
- Bloku pamoja na nukta yao ya msingi na ufafanuzi wa sifa, ikijumuisha zisizoonekana, za kudumu na zilizowekwa awali.
- Marejeleo ya bloku pamoja na skeli, mzunguko na thamani za sifa zao.
- Mijazo imara, na mistari ya kivuli yenye mfano, skeli na pembe yake (mistari ya mfano yenyewe, ili programu nyingine zichore mistari ile ile ambayo CadCraft inachora).
- Vipimo, kama vipimo halisi: programu nyingine zinavipima upya zinaponyoshwa. Kila kimoja kina mipangilio yake (urefu wa maandishi, ukubwa wa mshale, desimali, muundo wa urefu) na maandishi yake, na kinabeba nakala iliyochorwa ambayo kila kipimo cha DWG kinayo.
- Karatasi (mipangilio): kila karatasi yenye ukubwa wake wa karatasi na vitengo vyake, kilichochorwa juu yake, na madirisha yake ya mwonekano yenye mwonekano na skeli zake.
- Mionekano iliyopewa majina.
- Multileaders, kama multileaders.
- Majina ya tabaka na bloku kama ulivyoandika, herufi kubwa na ndogo. (DXF R12 huandika kwa herufi kubwa.)

### Kinachobadilika katika DWG

Kila moja ya haya linaorodheshwa katika historia baada ya kuhifadhi, pale linapohusika na mchoro wako.

| Katika CadCraft | Katika DWG iliyohifadhiwa |
|---|---|
| Rangi halisi (zilizochaguliwa kwa kichagua rangi), katika umbizo la 2000 | Rangi ya kawaida iliyo karibu zaidi: umbizo la 2000 lina rangi 255 pekee. Hifadhi kama 2004 au zaidi ili kuzihifadhi |
| Mionekano iliyopewa jina ya karatasi | Mionekano ya nafasi ya karatasi: DWG haisemi ni karatasi ipi, kwa hivyo CadCraft inapofungua faili tena zinakuwa za karatasi ya kwanza |
| Maandishi ya mistari mingi yenye kipengele cha upana | Upana wa kawaida wa herufi: katika DWG kipengele cha upana kinatumika kwa maandishi ya mstari mmoja tu |
| Majina ya tabaka au bloku yenye herufi ambazo DWG haziruhusu | Yamebadilishwa: jina kutoka mchoro uliounganishwa kama `Base\|Walls` linakuwa `Base$0$Walls` (njia ambayo kufunga mchoro uliounganishwa kunaupa jina), na herufi nyingine zinakuwa `_` |

### Kwa nini R12, na nini kinabadilika

Unapohifadhi kama DXF, CadCraft inaandika DXF R12, toleo ambalo kila programu ya CAD inaweza kulifungua. Ni la zamani kuliko baadhi ya vipengele, kwa hivyo vitu vichache vinaandikwa katika umbo rahisi zaidi:

| Katika CadCraft | Katika faili ya R12 iliyohifadhiwa |
|---|---|
| Maandishi ya mistari mingi | Kitu kimoja cha maandishi kwa kila mstari |
| Elipsi | Polilaini zinazofuata elipsi |
| Mistari ya kivuli (kutoka faili zilizofunguliwa) | Mistari yake ya nje tu |
| Rangi halisi (zilizochaguliwa kwa kichagua rangi) | Rangi ya kawaida iliyo karibu zaidi |
| Unene wa mistari, na skeli za aina ya mstari za vitu | Zimeachwa: R12 haina yoyote (aina za mstari zinabaki) |
| Majina ya tabaka na bloku | Yameandikwa kwa herufi kubwa; nafasi na herufi nyingine zinakuwa `_`, na majina yanakatwa hadi herufi 31 ("Title block" inakuwa `TITLE_BLOCK`) |
| Tabaka zilizowekwa kutochapishwa | Programu nyingine zitazichapisha (CadCraft inakumbuka mpangilio pale mchoro una karatasi) |
| Vipimo | Vipimo halisi vyenye bloku yao iliyochorwa, ili programu nyingine ziwaonyeshe kama unavyoviona |
| Multileaders | Mistari, kichwa cha mshale na maandishi wanayochora |
| Mionekano iliyopewa majina | Imehifadhiwa, majina yakiwa kwa herufi kubwa; mionekano ya karatasi inarudi kwenye karatasi ya kwanza |
| Karatasi kadhaa | Karatasi ya kwanza ndiyo nafasi ya karatasi ambayo kila programu inaonyesha; nyingine zinahifadhiwa kama bloku zenye majina `CCLAYOUT_1`, `CCLAYOUT_2` … ambazo CadCraft inazigeuza kurudi kuwa karatasi inapofungua faili |

Historia inaorodhesha kila moja ya haya yaliyohusu mchoro wako.

:::tip
Ili kuendelea kufanyia kazi mchoro kwa siku kadhaa, hifadhi kama DXF na ufungue DXF hiyo wakati ujao. Kila kitu ambacho CadCraft inaweza kuchora kinanusurika mzunguko kamili, ikiwa ni pamoja na vipimo, bloku na karatasi zote.
:::

## Michoro iliyounganishwa (marejeleo ya nje)

{{cmd:XATTACH}} (`XA`, au {{ui:Blocks}} › {{ui:More}} › {{ui:Link a drawing (xref)}}) inaunganisha DWG au DXF nyingine: chagua faili, kisha bofya mahali inapoenda ({{key:Enter}} inaiweka kwenye 0,0). Inaingia kama bloku moja yenye jina la faili, katika skeli sahihi pale michoro miwili ina vitengo tofauti. Tabaka zake na bloku zake zinabaki na majina yake, na jina la kiungo mbele yake — `Plan|Walls`, `Plan|Door` — ili zisichanganyike na zako: washa na zima tabaka zilizounganishwa, uziganda au uzifunge kama zako. Kiungo ni cha kusoma tu: badilisha mchoro mwingine kisha uupakie upya. Unachoweka kwenye tabaka za kiungo (rangi, aina ya mstari, unene, kuwasha/kuzima, kuganda, kufunga, kuchapisha) kinabaki unapoupakia upya, unapohifadhi mchoro kama DWG kiungo bado kikiwa kiungo, na pale mchoro mwingine unapounganisha huu.

{{cmd:XREF}} (`XR`): `?` inaorodhesha viungo (vilivyopakiwa au la, faili ipi, marejeleo mangapi); `A` huunganisha; `R` hupakia upya kimoja kutoka faili yake (chagua faili tena: kivinjari hakiwezi kufikia folda zako chenyewe); `B` hukifunga (kinakuwa bloku na tabaka za kawaida zenye jina `Plan$0$Walls`); `D` hukitenganisha (marejeleo yake na tabaka zake zinaondoka). Kila moja ni hatua moja ya kutendua.

{{cmd:XCLIP}} (`XC`) hukata marejeleo ya bloku na viungo: vichague, `N` kwa mpaka mpya, kisha `R` na pembe mbili au `P` na pointi za poligoni ({{key:Enter}} hufunga); `D` huondoa kata. Kilicho ndani tu ndicho kinachoonekana na kuchapishwa, na kata inasogea pamoja na rejeleo. DWG na DXF 2000 zinahifadhi kata; DXF R12 huhifadhi rejeleo zima na inasema hivyo. Unapofunga kiungo chenye marejeleo yaliyokatwa, {{cmd:XREF}} `B` inauliza: `A` hufunga kila kitu, `C` huhifadhi sehemu iliyokatwa ya kila rejeleo tu (mistari na matao hukatwa kwenye mpaka; maandishi na bloku zilizo ndani ya nyingine zinabaki pale nukta yake ya kuingiza iko ndani).

Mchoro uliofunguliwa unaweza kuwa na viungo ambavyo CadCraft haiwezi kuviona: unaambiwa ni vingapi havijapakiwa. Tumia {{cmd:XREF}}, `R` kisha uchague kila faili ili kuviona.

Unapohifadhi, kiungo kilichopakiwa hufungwa ndani ya faili, na historia inasema hivyo. Kiungo ambacho hakijapakiwa kinabaki kiungo kwa faili yake, katika DWG na DXF.

## Fungua katika 3D

{{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ({{cmd:OPENIN3D}}) inafungua mchoro katika programu ya uundaji wa 3D kwenye kichupo kipya, kama DWG, bila kuupakia. Mabadiliko yanayofanywa huko yanabaki huko; yahifadhi huko. Kipengee cha menyu kinaonekana tu pale programu hiyo inapoweza kupokea mchoro uliokabidhiwa.

## Kuchapisha PDF

Bonyeza {{key:Mod+P}}, bofya {{ui:Plot}}, au andika `PLOT`. PDF inatengenezwa ndani ya kivinjari na kupakuliwa, au kufunguliwa kwenye kichupo kipya kwa ajili ya kuchapisha. Tazama [Chapisha kwenda PDF](topic:plot-pdf).

## Faili zinakwenda wapi

Kila uhifadhi na kila uchapishaji ni upakuaji, kwa hivyo faili zinaenda popote kivinjari chako kinapoweka vipakuliwa: kwa kawaida folda ya Downloads. Ili kuchagua folda kila wakati, badilisha mipangilio ya upakuaji kwenye kivinjari chako; [Vivinjari na kompyuta](common:browsers) inaonyesha mahali.

Hakuna unachofungua au kuhifadhi kinachotumwa kwetu. Tazama [Faili zako zinakwenda wapi](common:your-files).

## Faili za mradi wa PLN na PLA

CadCraft inafungua michoro ya DWG na DXF, si faili za Archicad zenyewe (`.pln`, `.pla`, `.tpl`, `.bpn`). Kufungua moja kunakuambia ni nini. Katika Archicad, hifadhi mionekano au mipangilio unayohitaji kama DWG na uifungue hapa, au hamisha modeli kama IFC na uifungue katika BimCraft. Pale BimCraft inapoweza kuchukua faili, CadCraft inatoa {{ui:Open in BimCraft}}.

## Ikiwa ukurasa unafungwa kabla ya kuhifadhi

CadCraft inaweka nakala ya kila mchoro unaoubadilisha, kwenye kivinjari hiki pekee, muda mfupi baada ya kuacha kuhariri. Kichupo kikifungwa, kivinjari kikisimama au kompyuta ikianzishwa upya kabla ya kuhifadhi, CadCraft inauliza **"Rejesha kazi yako?"** wakati ujao inapoanza: {{ui:Recover}} hufungua mchoro tena, bila kuhifadhiwa, kwenye kichupo chake. Kuhifadhi mchoro kunaondoa nakala yake. Tazama [Rejesha kazi yako](common:recover).

## Mtandaoni na nje ya mtandao

Kufungua, kuchora, kuhifadhi (DWG na DXF) na kuchapisha vyote vinafanyika kwenye kompyuta yako, kwa hivyo vinafanya kazi bila muunganisho mara CadCraft imepakiwa.

Ili kutumia CadCraft bila muunganisho kabisa, bofya {{ui:Save for offline}} kwenye upau ulio juu ukiwa mtandaoni. Lebo inahesabu kwenda juu ("Inahifadhi 40 kati ya 212") na inamalizia kwa "Tayari kwa matumizi nje ya mtandao". Nakala iliyohifadhiwa inajumuisha kisomaji cha DWG, takriban MB 5 kwa jumla, kwa hiyo **DWG pia zinafunguka nje ya mtandao** baada ya kuhifadhiwa. Bofya kitufe tena kupata {{ui:Save again (get the newest version)}} au {{ui:Remove the offline copy}}. "Could not save" inamaanisha baadhi ya faili hazikupakuliwa: angalia muunganisho kisha ubofye ili ujaribu tena. "Offline not available" inamaanisha dirisha hili la kivinjari haliwezi kuweka nakala (madirisha ya faragha na baadhi ya kompyuta zinazosimamiwa).

Bila nakala iliyohifadhiwa, kisomaji cha DWG kinapakuliwa mara ya kwanza unapofungua DWG baada ya ukurasa kupakiwa, kwa hivyo kufungua DWG nje ya mtandao kunaweza kushindwa; faili za DXF hazihitaji kisomaji hicho kamwe. Usipakie upya ukurasa ukiwa nje ya mtandao isipokuwa CadCraft imehifadhiwa.

Tazama [Kufanya kazi nje ya mtandao](common:offline) kwa maelezo zaidi.

:::offline
Sasa uko nje ya mtandao. Michoro inahifadhiwa kama DWG au DXF na inachapishwa kama kawaida, na faili za DXF zinafunguka. Faili za DWG zinafunguka ikiwa CadCraft inaonyesha "Tayari kwa matumizi nje ya mtandao", au ikiwa kisomaji cha DWG tayari kimepakiwa kwenye kichupo hiki.
:::

## Vikwazo katika faili

Vikwazo na vigezo (tazama [Funga mchoro](topic:constraints)) vinahifadhiwa katika DWG na DXF zote mbili. Kila kitu kilichofungwa kinabeba dokezo dogo la CadCraft (data ya ziada), na bloku isiyotumika iitwayo `CADCRAFT_PARAMETRIC` inashikilia vikwazo na jedwali la vigezo. Programu nyingine zinafungua mchoro kawaida na zinapuuza zote mbili; zinaweza kufuta bloku isiyotumika zikisafisha. Maelezo yanarejelea vitu kwa ufunguo wake wenyewe, si vishikio vya faili, kwa hivyo programu inayopanga upya vishikio haivunji. Programu nyingine ikifuta au kubadilisha kitu kilichofungwa, CadCraft inaondoa vikwazo vyake inapofungua faili na inasema vingapi. Faili isiyo navyo inafunguka bila vikwazo.

Mchoro wa awali (`.json`) uliosafirishwa kutoka kiundaji cha sehemu pia unafunguka: tazama [Hamisha michoro ya awali kwenda na kutoka kwa viundaji vingine vya sehemu](topic:solidworks-sketches).

## Bado hazipatikani

- Multileaders kama vitu vya multileader katika DXF iliyohifadhiwa (R12 haina: zinahifadhiwa kama vile zinavyochora).
- Picha katika DXF iliyohifadhiwa (zinahifadhiwa kama fremu zao; DWG inazihifadhi kama picha), na wipeouts zinazoficha kilicho chini yake.
- Kuhifadhi toleo jipya la DXF kuliko 2000.
- Uhifadhi wa wingu na usawazishaji kati ya kompyuta.

Tazama [Bado hakijajengwa](topic:not-built-yet) kwa orodha kamili.

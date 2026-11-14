---
title: Faili: zinazofunguka, zinazohifadhiwa
summary: Miundo ambayo CadCraft inafungua, inahifadhi na kuhamisha, kinachobaki au kinachobadilishwa, na mahali faili zinapokwenda.
keywords: xclip, clip, mpaka wa xclip, bind clipped, dwg, dxf, pdf, fungua, hifadhi, hamisha, ingiza, miundo, ubadilishaji, pakua, saveas, dxfout, hifadhi kama, hifadhi dwg, muundo, qsave, xref, xattach, mchoro uliounganishwa, marejeo ya nje, funga, pakia upya, tenganisha
from: 6d68b34e
---

## Kwa muhtasari

| Muundo | Fungua | Hifadhi | Maelezo |
|---|---|---|---|
| DXF (maandishi, toleo lolote) | Ndiyo | Ndiyo, kama DXF R12 au DXF 2000 | DXF ya binary inakataliwa: hifadhi kwanza kama DXF ya maandishi. |
| DWG | Ndiyo | Ndiyo, kama DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 au 2018) | Inasomwa na kuandikwa na maktaba ya DWG ya CadCraft yenyewe (faili za AutoCAD R13 hadi 2018). DWG yako haibadilishwi kamwe. Faili zilizoharibika, au matoleo ambayo msomaji hashughulikii, hukataliwa kwa ujumbe. |
| PDF | Inaleta ukurasa: kama msingi wa chini ([underlays za PDF](topic:pdf-underlay)) au kama vitu | Ndiyo, kwa kuchapisha | PDF ya vekta ya karatasi, au ya modeli kwa skeli. |

Kila mchoro unaofungua (au unaoanzisha kwa {{ui:Mpya}}) unapata kichupo chake juu ya eneo la mchoro; mchoro mpya ambao hakuna aliyeugusa bado unatumika badala ya kuongeza kichupo. Bofya kichupo ili ubadilishe, {{ui:×}} yake ili ufunge (CadCraft inauliza kwanza ikiwa kuna mabadiliko ambayo hayajahifadhiwa), au panga michoro iliyo wazi kando kwa kando: tazama [Gawanya skrini](topic:split-screen).

## Kufungua mchoro

- Bonyeza {{key:Mod+O}}, bofya {{ui:Fungua}}, au andika `OPEN`, kisha uchague faili.
- Au buruta faili la `.dwg` au `.dxf` na kuliachia kwenye eneo la mchoro.

Faili linasomwa ndani ya kivinjari chako. Halipakiwi popote. Historia inaripoti ni vitu na tabaka ngapi vimeingia na ilichukua muda gani, na sehemu ya {{ui:Mchoro}} ya paneli ya kushoto inaonyesha muundo, kwa mfano "DWG 2018 (AC1032)".

Kisomaji cha DWG ni sehemu ya CadCraft na kinapakuliwa pamoja na DWG ya kwanza unayofungua baada ya ukurasa kupakiwa (karibu KB mia chache), kwa hiyo hakuna upakuaji tofauti wa kusubiri. Kinasoma faili chinichini, kwa hiyo ukurasa unaendelea kujibu wakati DWG kubwa inafunguka.

### Kinachoingia

- Mistari, matao, duara, polilaini (zenye sehemu za tao), duaradufu, nukta, maandishi na maandishi ya mistari mingi, solidi, mistari ya kivuli (muundo wa kawaida huchorwa kama mistari yake, mingine kama rangi tambarare), marejeo ya bloku pamoja na sifa zake (thamani unazoweza kuhariri; tazama [Sifa za bloku](topic:attributes)), vipimo, na mipangilio yenye madirisha yake ya mwonekano.
- Splines huingia kama splines (shahada, pointi za udhibiti, nodi, uzito, pointi za kufaa); tazama [Splines na polilaini](topic:splines).
- Multileaders zenye mstari mmoja wa kiongozi na maandishi huingia kama multileaders za CadCraft unazoweza kuhariri (tazama {{cmd:MLEADER}}). Nyingine (zenye bloku, mistari mingi ya kiongozi au mistari iliyopinda) huchorwa kama programu nyingine ilivyozichora na husogea kama kitu kimoja; historia inasema ni ngapi.
- Picha (images) zinaonyeshwa kama fremu yenye jina la faili la picha hadi utakapoipa CadCraft faili hilo kwa {{cmd:IMAGE}}: tazama [Picha kwenye mchoro](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts zinaonyeshwa kama fremu yao, na kilicho chini yake kinabaki kuonekana.
- Majedwali kwenye DWG huingia kama programu nyingine ilivyoyachora.
- Nyuso za 3D kwenye nafasi ya modeli huingia kwenye kichupo cha {{ui:3D}}, si kama vitu vya 2D; vivyo hivyo zilizo ndani ya bloku, mara moja kwa kila marejeo ya bloku kwenye modeli. Ndani ya bloku na kwenye karatasi pia huchorwa bapa, kama mistari ya nje. Tazama [Modeli katika 3D](topic:3d-solids).
- Tabaka zinahifadhi rangi yake, hali ya kuwasha, kuganda, kufunga na mipangilio ya kuchapisha. DEFPOINTS haichapishwi kamwe.
- Vipimo vinakuwa vipimo halisi vya CadCraft vinavyoweza kuhaririwa pale pointi zake zinaposomeka. Mwanzoni vinaonyeshwa kama programu nyingine ilivyovichora; mara tu unapobadilisha kimoja, CadCraft kinachora upya kwa mtindo wake.
- Kila mpangilio unakuwa kichupo cha karatasi. Katika programu nyingine kila mpangilio una dirisha la kwanza lililofichwa ambalo ni karatasi yenyewe; CadCraft linaliacha nje.

### Kisichoingia bado

Chochote ambacho CadCraft haiwezi kuchora kinahesabiwa, si kukisiwa. Kisanduku cha "About this file" kwenye paneli ya kushoto kinakiorodhesha kama "Not shown yet:" kikifuatiwa na kila aina ya kitu na idadi yake. Mifano ya kawaida ni majedwali kwenye DXF, meshes, na solidi za 3D ndani ya bloku. Solidi za 3D, regions na bodies kwenye nafasi ya modeli zinaonyeshwa kwenye kichupo cha 3D (tazama [Modeli katika 3D](topic:3d-solids#solids-from-other-programs)). Madirisha ya mwonekano yaliyopotoshwa kwenye faili yanaonyeshwa yamepotoshwa, kama yalivyo huko, na yanabakisha mpotoko wake yanapohifadhiwa; hivyo ndivyo UCS ya sasa, UCS zenye majina na mwonekano uliogeuzwa.

Maandishi yanachorwa kwa fonti moja ya mtindo wa Helvetica. Lebo inayotoshea mstari mmoja kwenye fonti nyembamba ya programu asili inaweza kugawanyika kuwa mistari miwili kwenye CadCraft.

## Kuhifadhi

Kuna njia tatu za kuhifadhi. Kila moja hupakua nakala.

- **Hifadhi**: bonyeza {{key:Mod+S}}, bofya {{ui:Hifadhi}}, au andika `SAVE` (pia `QSAVE`). Inahifadhi katika muundo wa mchoro: DWG ukifungua DWG, DXF ukifungua DXF. DWG huhifadhi toleo lake la awali (faili la 2018 linahifadhiwa kama 2018). Mchoro mpya hutumia muundo na toleo la DWG ulilochagua mwisho katika {{ui:Hifadhi kama}} kwenye kivinjari hiki; ikiwa hujawahi kuchagua, ni DWG katika muundo wa AutoCAD 2000.
- **Hifadhi kama**: bonyeza {{key:Mod+Shift+S}}, bofya {{ui:Hifadhi kama}}, au andika `SAVEAS`. Kisanduku cha {{ui:Hifadhi nakala kama}} kinatoa {{ui:DWG}}, pamoja na orodha ya {{ui:Toleo}} (AutoCAD 2018, 2013, 2010, 2007, 2004 au 2000), {{ui:DXF R12}} na {{ui:DXF 2000}}, kila moja ikiwa na jina la faili itakalopewa, na muundo na toleo la sasa la mchoro tayari vimechaguliwa. Bofya {{ui:Hifadhi}} kupakua, au {{ui:Ghairi}} (au {{key:Esc}}) kutohifadhi chochote; historia kisha inasema "Haijahifadhiwa." Chaguo lako linabaki: {{key:Mod+S}} inalitumia kwa mchoro huu kuanzia hapo, na michoro mipya kwenye kivinjari hiki huanza nalo.
- **DXFOUT**: andika `DXFOUT`. Daima hupakua nakala ya DXF R12, na {{key:Mod+S}} inayofuata bado huhifadhi katika muundo wa mchoro wenyewe.

Kivinjari hupakua `<drawing name>.dwg` au `<drawing name>.dxf`. Kila hifadhi ni **upakuaji mpya**; faili ulilofungua halibadilishwi wala kubatilishwa kamwe. Historia inathibitisha, kwa mfano "Nakala imehifadhiwa kama Plan.dwg (DWG (AutoCAD 2018)). Faili lako la asili Plan.dxf halijabadilishwa." Kwa DXF inasema "(DXF R12, inafunguka kwenye programu yoyote ya CAD)". Mistari iliyo chini yake inaorodhesha chochote kilichobadilika njiani.

Programu ya eneo-kazi ya CadCraft inapoendeshwa, kuhifadhi kunafanya kazi kama kwenye programu nyingine za eneo-kazi: {{key:Mod+S}} inaandika mchoro kurudi kwenye faili ulilofungua, katika muundo na toleo lake, na historia inasema mahali pamehifadhiwa. {{ui:Hifadhi kama}} na uhamishaji zinaonyesha kisanduku cha kuhifadhi cha mfumo, na faili la `.dwg`, `.dxf` au `.ccsheets` unalobofya mara mbili linafunguka katika CadCraft.

Kwa PDF, chapisha badala yake (tazama hapa chini).

## Kinachobakishwa na kinachobadilishwa katika DWG

CadCraft yenyewe inaandika DWG ndani ya kivinjari chako, kwa maktaba ile ile ya DWG inayoisoma. Chagua toleo katika {{ui:Hifadhi kama}}: muundo wa AutoCAD 2000 (toleo la faili AC1015) unafunguka katika programu nyingi zaidi, zikiwemo za zamani; miundo mipya (2004, AC1018, hadi 2018, AC1032) pia huhifadhi rangi halisi. Hakuna kinachopakiwa, na kuhifadhi DWG kunafanya kazi nje ya mtandao.

Kila toleo linakaguliwa kwa kusoma tena faili zilizohifadhiwa kwa visomaji vya DWG vya programu tatu nyingine na kwa CadCraft yenyewe. DWG ya CadCraft bado haijafunguliwa katika AutoCAD yenyewe.

### Kinachobakishwa katika DWG

- Mistari, matao, duara, duaradufu, nukta, na polilaini zenye sehemu zao za tao.
- Maandishi ya mstari mmoja pamoja na upangaji wake na kipengele cha upana.
- Maandishi ya mistari mingi na yaliyofungwa, kama maandishi ya mistari mingi. Programu nyingine huyafunga tena kutoka upana uleule.
- Rangi za vitu: kwa tabaka, kwa bloku, rangi 255 za kawaida, na rangi halisi katika muundo wa 2004 na kuendelea.
- Tabaka zenye rangi yake, aina ya mstari, uzito wa mstari na mipangilio yake ya kuwasha, kuganda, kufunga na kuchapisha; aina za mstari, uzito wa mstari na kipimo cha aina ya mstari vya vitu, mifumo ya aina za mstari, na kipimo cha aina ya mstari cha mchoro.
- Vitengo vya mchoro na muundo wa urefu (desimali, futi na inchi, sehemu…).
- Bloku pamoja na nukta yao ya msingi na ufafanuzi wa sifa, ikiwa ni pamoja na zisizoonekana, za kudumu na zilizowekwa awali.
- Marejeo ya bloku pamoja na skeli, mzunguko na thamani za sifa.
- Mijazo imara, na mistari ya kivuli yenye muundo, skeli na pembe yake (mistari ya muundo wenyewe, ili programu nyingine zichore mistari ile ile ambayo CadCraft inachora).
- Vipimo, kama vipimo halisi: programu nyingine huvipima upya vinaponyooshwa. Kila kimoja kinabakisha mipangilio yake (urefu wa maandishi, ukubwa wa mshale, desimali, muundo wa urefu) na maandishi yake, na kinabeba nakala iliyochorwa ambayo kila kipimo cha DWG kinayo.
- Karatasi (mipangilio): kila karatasi yenye ukubwa wake wa karatasi na vitengo, vilivyochorwa juu yake, na madirisha yake ya mwonekano pamoja na mwonekano na skeli yake.
- Mionekano yenye majina.
- Multileaders, kama multileaders.
- Majina ya tabaka na bloku kama ulivyoyaandika, herufi kubwa na ndogo. (DXF R12 huyaandika kwa herufi kubwa.)

### Kinachobadilika katika DWG

Kila moja ya haya linaorodheshwa kwenye historia baada ya kuhifadhi, pale linapohusika na mchoro wako.

| Katika CadCraft | Katika DWG iliyohifadhiwa |
|---|---|
| Rangi halisi (zilizochaguliwa kwa kichagua rangi), katika muundo wa 2000 | Rangi ya kawaida iliyo karibu zaidi: muundo wa 2000 una 255 pekee. Hifadhi kama 2004 au zaidi ili kuzibakisha |
| Mionekano yenye majina ya karatasi | Mionekano ya nafasi ya karatasi: DWG haisemi ni karatasi ipi, kwa hiyo CadCraft inapofungua faili tena zinakuwa za karatasi ya kwanza |
| Maandishi ya mistari mingi yenye kipengele cha upana | Upana wa kawaida wa herufi: kwenye DWG kipengele cha upana kinatumika kwa maandishi ya mstari mmoja pekee |
| Majina ya tabaka au bloku yenye herufi ambazo DWG hairuhusu | Yamebadilishwa: jina kutoka mchoro uliounganishwa kama `Base\|Walls` linakuwa `Base$0$Walls` (njia ambayo kufunga mchoro uliounganishwa hulipa jina), na herufi nyingine zinakuwa `_` |

### Kwa nini R12, na kinachobadilishwa

Unapohifadhi kama DXF, CadCraft inaandika DXF R12, toleo ambalo kila programu ya CAD inaweza kulifungua. Ni la zamani kuliko baadhi ya vipengele, kwa hiyo baadhi ya vitu huandikwa kwa umbo rahisi zaidi:

| Katika CadCraft | Katika faili la R12 lililohifadhiwa |
|---|---|
| Maandishi ya mistari mingi | Kitu kimoja cha maandishi kwa kila mstari |
| Duaradufu | Polilaini zinazofuata duaradufu |
| Mijazo ya mistari ya kivuli (kutoka faili zilizofunguliwa) | Mistari ya nje pekee |
| Rangi halisi (zilizochaguliwa kwa kichagua rangi) | Rangi ya kawaida iliyo karibu zaidi |
| Uzito wa mistari, na vipimo vya aina ya mstari vya vitu | Vimeachwa: R12 havina vyote viwili (aina za mstari zinabaki) |
| Majina ya tabaka na bloku | Yameandikwa kwa herufi kubwa; nafasi na herufi nyingine zinakuwa `_`, na majina yanakatwa hadi herufi 31 ("Title block" linakuwa `TITLE_BLOCK`) |
| Tabaka zilizowekwa zisichapishwe | Programu nyingine zitazichapisha (CadCraft inakumbuka mpangilio pale mchoro una karatasi) |
| Vipimo | Vipimo halisi pamoja na bloku yao iliyochorwa, ili programu nyingine ziwaonyeshe kama unavyoviona |
| Multileaders | Mistari, kichwa cha mshale na maandishi wanayochora |
| Mionekano yenye majina | Imehifadhiwa, majina yakiwa herufi kubwa; mionekano ya karatasi inarudi kwenye karatasi ya kwanza |
| Karatasi kadhaa | Karatasi ya kwanza ndiyo nafasi ya karatasi ambayo kila programu inaonyesha; nyingine zinahifadhiwa kama bloku zenye majina `CCLAYOUT_1`, `CCLAYOUT_2` … ambazo CadCraft inazigeuza tena kuwa karatasi inapofungua faili |

Historia inaorodhesha kila moja ya haya yaliyohusu mchoro wako.

:::tip
Ili kuendelea kufanyia kazi mchoro kwa siku kadhaa, hifadhi kama DXF na ufungue DXF hiyo wakati ujao. Kila kitu ambacho CadCraft inaweza kuchora kinanusurika mzunguko kamili, ikiwa ni pamoja na vipimo, bloku na karatasi zote.
:::

## Marejeo yaliyounganishwa (external references)

{{cmd:XATTACH}} (`XA`, au {{ui:Blocks}} › {{ui:Zaidi}} › {{ui:Unganisha mchoro (xref)}}) inaunganisha DWG au DXF nyingine: chagua faili, kisha ubofye mahali linapoenda ({{key:Enter}} linaliweka kwenye 0,0). Linaingia kama bloku moja lenye jina la faili, kwa skeli sahihi pale michoro miwili ina vitengo tofauti. Tabaka na bloku zake zinabakisha majina yake pamoja na jina la kiunganishi mbele, kama `Plan|Walls`, `Plan|Door`, kwa hiyo hazichanganyiki na zako: washa na zima, ganda au funga tabaka zilizounganishwa kama zako. Kiunganishi ni cha kusoma tu: badilisha mchoro mwingine kisha uupakie tena. Kile ulichoweka kwenye tabaka za kiunganishi (rangi, aina ya mstari, uzito wa mstari, kuwasha/kuzima, kuganda, kufunga, kuchapisha) kinabaki unapokipakia tena, unapohifadhi mchoro kama DWG huku kiunganishi bado ni kiunganishi, na pale mchoro mwingine unapounganisha huu.

{{cmd:XREF}} (`XR`): `?` inaorodhesha viunganishi (vilivyopakiwa au la, ni faili lipi, marejeo mangapi); `A` inaambatisha; `R` inapakia upya moja kutoka faili lake (chagua faili tena: kivinjari hakiwezi kufikia folda zako chenyewe); `B` inafunga moja (linakuwa bloku na tabaka za kawaida zenye jina kama `Plan$0$Walls`); `D` inaondoa moja (marejeo yake na tabaka zake zinaondoka). Kila moja ni hatua moja ya kutendua.

{{cmd:XCLIP}} (`XC`) inakata marejeo ya bloku na viunganishi: chagua, `N` kwa mpaka mpya, kisha `R` na pembe mbili au `P` na pointi za poligoni ({{key:Enter}} inafunga); `D` inaondoa kukata. Kinachokaa ndani tu ndicho kinachoonekana na kuchapishwa, na kukata kunahamia pamoja na marejeo. DWG na DXF 2000 zinabakisha kukata; DXF R12 inahifadhi marejeo yote na inasema hivyo. Unapofunga kiunganishi chenye marejeo yaliyokatwa, {{cmd:XREF}} `B` inauliza: `A` inafunga kila kitu, `C` inabakisha sehemu iliyokatwa ya kila marejeo (mistari na matao hukatwa kwenye mpaka; maandishi na bloku zilizomo zinabaki pale nukta yake ya kuingiza iko ndani).

Mchoro ulioufungua unaweza kuunganisha faili ambazo CadCraft haiwezi kuziona: linasema ni ngapi hazijapakiwa. Tumia {{cmd:XREF}}, `R` na uchague kila faili ili kuziona.

Unapohifadhi, kiunganishi kilichopakiwa kinafungwa ndani ya faili (programu nyingine zinaona bloku na tabaka za kawaida zenye jina `Plan$0$…`), na historia inasema hivyo. Kiunganishi ambacho hakijapakiwa kinabaki kiunganishi cha faili lake, katika DWG na DXF.

## Fungua katika 3D

{{ui:View}} › {{ui:Zaidi}} › {{ui:Fungua katika ModelCraft}} ({{cmd:OPENIN3D}}) inafungua mchoro katika programu ya uundaji wa 3D kwenye kichupo kipya, kama DWG, bila kuupakia. Mabadiliko yaliyofanywa huko yanabaki huko; yahifadhi huko. Kipengee cha menyu kinaonekana tu pale programu hiyo inapoweza kupokea mchoro uliokabidhiwa.

## Kuchapisha PDF

Bonyeza {{key:Mod+P}}, bofya {{ui:Chapisha}}, au andika `PLOT`. PDF inatengenezwa ndani ya kivinjari na kupakuliwa, au kufunguliwa kwenye kichupo kipya kwa ajili ya kuchapisha. Tazama [Chapisha kwenda PDF](topic:plot-pdf).

## Mahali faili zinapokwenda

Kila hifadhi na kila uchapishaji ni upakuaji, kwa hiyo faili huishia popote kivinjari chako kinapoweka vipakuliwa: kwa kawaida folda ya Downloads. Ili kuchagua folda kila wakati, badilisha mpangilio wa upakuaji kwenye kivinjari chako; [Vivinjari na kompyuta](common:browsers) inaonyesha mahali.

Hakuna unachofungua au kuhifadhi kinachotumwa kwetu. Tazama [Mahali faili zako zinapokwenda](common:your-files).

## Faili za miradi ya PLN na PLA

CadCraft inafungua michoro ya DWG na DXF, si faili za Archicad zenyewe (`.pln`, `.pla`, `.tpl`, `.bpn`). Kufungua moja kunakuambia ni nini. Katika Archicad, hifadhi mionekano au mipangilio unayohitaji kama DWG na uifungue hapa, au hamisha modeli kama IFC na uifungue katika BimCraft. Pale BimCraft inapoweza kuchukua faili, CadCraft inatoa {{ui:Fungua katika BimCraft}}.

## Ukurasa ukifungwa kabla hujahifadhi

CadCraft inahifadhi nakala ya kila mchoro unaobadilisha, katika kivinjari hiki pekee, muda mfupi baada ya kuacha kuhariri. Kichupo kikifungwa, kivinjari kikisimama au kompyuta ikianzishwa upya kabla hujahifadhi, CadCraft inauliza **Rejesha kazi yako?** wakati ujao inapoanza: {{ui:Rejesha}} inafungua mchoro tena, bila kuhifadhiwa, kwenye kichupo chake. Kuhifadhi mchoro kunaondoa nakala yake. Tazama [Rejesha kazi yako](common:recover).

## Mtandaoni na nje ya mtandao

Kufungua, kuchora, kuhifadhi (DWG na DXF) na kuchapisha vyote vinafanyika kwenye kompyuta yako, kwa hiyo vinafanya kazi bila muunganisho mara CadCraft ikishapakia.

Ili kutumia CadCraft bila muunganisho kabisa, bofya {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau ulio juu ukiwa mtandaoni. Lebo inahesabu kwenda juu ("Saving 40 of 212") na kumaliza kwa "Offline ready". Nakala iliyohifadhiwa inajumuisha kisomaji cha DWG, takribani MB 5 kwa jumla, kwa hiyo **DWG nazo zinafunguka nje ya mtandao** mara inapohifadhiwa. Bofya kitufe tena kwa {{ui:Hifadhi tena (pata toleo la hivi karibuni)}} au {{ui:Ondoa nakala ya nje ya mtandao}}. "Could not save" inamaanisha baadhi ya faili hazikupakuliwa: angalia muunganisho na ubofye ili ujaribu tena. "Offline not available" inamaanisha dirisha hili la kivinjari haliwezi kuhifadhi nakala (madirisha ya siri na baadhi ya kompyuta zinazosimamiwa).

Bila nakala iliyohifadhiwa, kisomaji cha DWG kinapakuliwa mara ya kwanza unapofungua DWG baada ya ukurasa kupakiwa, kwa hiyo kufungua DWG nje ya mtandao kunaweza kushindwa; faili za DXF hazihitaji kisomaji hicho kamwe. Usipakie upya ukurasa ukiwa nje ya mtandao isipokuwa CadCraft imehifadhiwa.

Tazama [Kufanya kazi nje ya mtandao](common:offline) kwa maelezo zaidi.

:::offline
Uko nje ya mtandao sasa. Michoro huhifadhiwa kama DWG au DXF na kuchapishwa kawaida, na faili za DXF zinafunguka. Faili za DWG zinafunguka ikiwa CadCraft inaonyesha "Offline ready", au ikiwa kisomaji cha DWG tayari kimepakiwa kwenye kichupo hiki.
:::

## Vizuizi katika faili

Vizuizi na vigezo (tazama [Weka vizuizi kwenye mchoro](topic:constraints)) vinahifadhiwa katika DWG na DXF zote mbili. Kila kitu kilichowekewa kizuizi kinabeba dokezo dogo la CadCraft (extended data), na bloku isiyotumika yenye jina `CADCRAFT_PARAMETRIC` inashikilia vizuizi na jedwali la vigezo. Programu nyingine hufungua mchoro kawaida na kupuuza vyote viwili; zinaweza kufuta bloku isiyotumika zikisafisha. Maelezo yanarejelea vitu kwa ufunguo wao wenyewe, si kwa vishikio (handles) vya faili, kwa hiyo programu inayopanga upya vishikio haivunji. Programu nyingine ikifuta au kubadilisha kitu kilichowekewa kizuizi, CadCraft inaondoa vizuizi vyake inapofungua faili na kusema vingapi. Faili lisilo navyo hufunguka bila vizuizi.

Mchoro wa sketch uliohamishwa kutoka kwa modeler ya sehemu (`.json`) pia unafunguka: tazama [Hamisha sketchi kwenda na kutoka kwa modelers nyingine za sehemu](topic:solidworks-sketches).

## Bado hazipatikani

- Multileaders kama vitu vya multileader katika DXF iliyohifadhiwa (R12 havina: zinahifadhiwa kama kile zinachochora).
- Picha katika DXF iliyohifadhiwa (zinahifadhiwa kama fremu zao; DWG inazibakisha kama picha), na wipeouts zinazoficha kilicho chini yake.
- Kuhifadhi toleo jipya la DXF kuliko 2000.
- Kuhifadhi kwenye wingu na kusawazisha kati ya kompyuta.

Tazama [Bado halijajengwa](topic:not-built-yet) kwa orodha kamili.

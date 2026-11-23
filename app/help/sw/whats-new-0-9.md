---
title: Kipya katika 0.9
summary: Mistari ya kivuli inayofuata mpaka wake, vikundi vya tabaka, ghorofa zilizopangwa, kuta mahiri za 2D zenye milango na madirisha, mitindo ya maandishi na kihariri cha maandishi chenye umbizo, mstari wa amri unaoelea, kunasa gridi, njia kumi za kuchora tao, na paneli ya Hati.
keywords: kipya, 0.9, maelezo ya toleo, orodha ya mabadiliko, kivuli, kivuli kinachohusiana, hatchedit, faili ya .pat, faili ya muundo, vikundi vya tabaka, laygroup, ghorofa, ghorofa zilizopangwa, floorlayers, kuta mahiri, ukuta, mlango, dirisha, zana za ukuta, mtindo wa maandishi, mtindo, kihariri cha mtext, maandishi ya aya, umbizo, mstari wa amri unaoelea, mstari wa amri, eneo la juu, kompakt, kunasa kwenye gridi, kunasa gridi, f9, tao, paneli ya hati, kukagua, vipimo vya chuma vya Uingereza, draw.io, maandishi ya Kithai, dxf r12, nini kipya, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, kukamilisha kiotomatiki, kivuli cha kijivu, kichupo, sketchfix, photosketch, autosheet, maelezo, gridmove, autodim, lebo, redline, unganisha, git, fossil, ufikiaji, uchoraji bila kuona, msomaji wa skrini, mipaka, mwelekeo wa dira, aunits, shx, mchoro, ole, historia, linganisha, kwa maneno, sifa, futi na inchi, kunyoosha, lugha, vifaa vya kuingiza, matatizo, moja kwa moja, wasaidizi
from: 8b6dea0b
---

Hiki ndicho kilichobadilika katika CadCraft 0.9, ikilinganishwa na 0.8.1. CadCraft ni programu ya kuchora 2D na 3D ya CadCraft Studio 0.9 na programu zake nane. 0.9 inakamilisha uchoraji wa mpango, inaongeza mitindo ya maandishi na kihariri halisi cha maandishi, na inakupa nafasi zaidi kwenye skrini.

## Mpya

### Uchoraji wa mpango

- **Mistari ya kivuli inayofuata mpaka wake.** {{cmd:HATCH}} inaiunganisha na mpaka unaoifunga. Sogeza, zungusha au kuza mpaka, na mstari wa kivuli pamoja na muundo wake vitafuata; ukiubadilisha umbo, mstari wa kivuli utahesabiwa upya. {{cmd:HATCHEDIT}} (`HE`) hubadilisha mstari wa kivuli baadaye na kutengeneza au kumaliza kiunganishi hicho. Angalia [Mistari ya kivuli na maeneo ya kujaza](topic:hatch).
- **Faili za muundo wa mistari ya kivuli.** Kwenye swali la {{cmd:HATCH}} `Pick internal point`, andika `F` (Faili ya muundo) kisha uchague faili la `.pat`. Ni faili zilizoandikwa kwa muundo wa kawaida pekee ndizo zimejaribiwa.
- **Vikundi vya tabaka.** Katika {{ui:Zana}} kwenye paneli ya {{ui:Tabaka}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}}, na {{ui:Find a layer}}; au andika {{cmd:LAYGROUP}} (`LG`). Angalia [Panga mchoro kwa tabaka](topic:layers#group-layers).
- **Ghorofa zilizopangwa.** {{cmd:FLOORS}} (`FLR`), au {{ui:Ghorofa…}} kwenye menyu ya {{ui:Zaidi}} ya kikundi cha {{ui:Mwonekano}}. Dirisha la mwonekano kwenye karatasi linaweza kuonyesha ghorofa moja chini ya {{ui:Ghorofa inayoonyeshwa}} katika Sifa. {{cmd:FLOORLAYERS}} hugeuza ghorofa kuwa tabaka kwa faili linalotumwa kwa mtu mwingine. Angalia [Panga ghorofa katika mchoro mmoja](topic:floors).
- **Kuta mahiri za 2D, milango na madirisha.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) na {{cmd:DELOPENING}}. Pembe, viungio vya T na makutano vinahesabiwa kwa ajili yako. Kuta huhifadhi rekodi ya jinsi zinavyoungana, na Sifa inapata Zuia kuungana mwanzoni / mwishoni, mstari wa Eneo, na Urefu unaoweza kuhaririwa. Angalia [Chora kuta, milango na madirisha za 2D](topic:walls-2d).
- **Zana ya ukuta kwa kuta za mpango.** Andika {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} na nyinginezo. Bado hazina vitufe kwenye upau wa zana. Angalia [Maumbo ya kuta, kukatwa, kuhamishwa na kufungwa kwa kuta za 2D](topic:wall-tools-2d).

### Maandishi

- **Mitindo ya maandishi.** {{cmd:STYLE}} (`ST`), au {{ui:Mtindo wa maandishi}} kwenye upau wa zana wa {{ui:Chora}}: mitindo yenye jina yenye fonti, urefu, kipimo cha upana na mwelekeo. Angalia [Weka fonti na ukubwa wa maandishi kwa mitindo ya maandishi](topic:text-styles).
- **Kihariri cha aya chenye umbizo.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} au kubofya mara mbili maandishi hufungua kisanduku chenye fonti, ukubwa, herufi nzito, italiki, mstari wa chini, mstari wa katikati, rangi, mpangilio, pamoja na alama za digrii, plus-minus na kipenyo, pamoja na {{ui:Sawa}} na {{ui:Ghairi}}. Angalia [Panga aya ya maandishi kwa umbizo](topic:format-paragraph-text).
- **Mchoro kutoka XML ya draw.io.** {{cmd:DIAGRAM}} (`T2D`) pia husoma XML ya draw.io iliyobandikwa. Angalia [Chora mchoro kutoka maandishi](topic:text-to-diagram).
- **Maandishi ya Kithai katika chapisho la PDF.** Hapo awali yalichapishwa kama alama za kuuliza.

### Nafasi zaidi na visaidizi vya kuchora

- **Mstari wa amri unaoelea, mwembamba, na eneo la juu lililoshikamana.** Buruta mpini wa mstari wa amri ili uuelee, buruta ukingo wake wa juu kupata mistari michache, {{key:F2}} hufungua historia. {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Mstari wa amri}} na chaguo za eneo la juu zina mipangilio hiyo hiyo. Angalia [Mipangilio](topic:settings#command-line).
- **Menyu ya kunasa vitu.** Bofya kulia {{ui:Nasa}} kwenye upau wa hali, au andika {{cmd:OSNAP}}.
- **Kunasa kwenye gridi.** Kitufe cha {{ui:Kunasa gridi}} kwenye upau wa hali, au {{key:F9}}: nukta zilizochaguliwa huenda kwenye nukta ya gridi iliyo karibu zaidi wakati hakuna kunasa kitu kilichochukua nukta hiyo.
- **Tao kwa njia kumi, na Endelea.** {{ui:Tao}} kwenye upau wa zana wa {{ui:Chora}} au {{cmd:ARC}}: pointi 3, familia ya Start/Center/End, familia ya Center/Start/End, na Endelea (bonyeza {{key:Enter}} kwenye nukta ya kuanzia) kutoka mstari, tao au polilaini ya mwisho.
- **Paneli ya Hati.** {{cmd:DOCUMENTS}} (`DOCS`) au {{ui:Hati…}} kwenye menyu ya {{ui:Zaidi}} ya kikundi cha {{ui:Mwonekano}}: marekebisho, hali na kukagua kwa kila mchoro kwenye folda ya mradi. Hufunguka kama kisanduku cha mazungumzo kilichowekwa katikati. Angalia [Hati](topic:documents).

### Faili

- **Vipimo vya chuma vya Uingereza.** Sehemu 976 kwenye paneli ya Kawaida, zinaandikwa kama zinavyoonekana kwenye michoro (kwa mfano `305x165x40 UB`).
- **Vifurushi vya Afrika Kusini** (desturi za uchoraji na kanuni za ujenzi) kama vifurushi vya nyongeza ya Kanuni za ujenzi. Namba hazijathibitishwa.
- **Nyongeza za CadCraft,** zinaongezwa unapozihitaji na zimezimwa kwa chaguo-msingi: muundo wa taa za ndani, muundo wa chip (HDL hadi mpangilio), uchongaji wa kipanga njia, uigaji wa saketi, sprocket za mnyororo wa roller, na vifurushi vya nchi vya Kanuni za ujenzi.

## Zilizorekebishwa

- Kusogeza, kuzungusha au kuza mstari wa kivuli kuliacha muundo wake nyuma.
- {{cmd:GRIDMOVE}} ilisogeza ukuta mzima wa mpango ambao unaanzia kwenye mstari wa gridi tu. Sasa ukuta unapimwa kwa ncha zake.
- Gridi ilionyeshwa ndani ya mipaka ya mchoro tu hata wakati mipaka imezimwa.
- Orodha ya vizuizi kwenye paneli ya pembeni inasogea, na jina lisilo kizuizi huorodhesha vizuizi vinavyoanza nalo ("Labda ulimaanisha").
- Faili za DXF R12 ambazo AutoCAD ilikataa ("Unknown group 1001 for table") sasa zinafunguka hapo.
- Faili kubwa sana (takriban vitu 70,000 na zaidi) zilishindwa kufunguka na "Maximum call stack size exceeded".
- Faili za DWG kutoka AutoCAD 2018 na baadaye zenye toleo la juu la matengenezo zilishindwa kufunguka na "bad BITLONG code 11".
- Kwenye kisanduku cha maandishi ya aya, ukubwa mpya ulioandikwa kwa sehemu iliyochaguliwa huhifadhi uteuzi.

## Katika kila programu

Vidokezo vya zana vya Bootstrap kwenye kila kidhibiti chenye kidokezo, kidokezo cha kuanza unachoweza kufunga, mistari ya vichupo inayosogea isipoweza kutoshea, na jina la kichupo cha kivinjari linalofuata mchoro uliofunguliwa (`<drawing> - CadCraft | CadCraft`). {{ui:Mipangilio}} › {{ui:Mpangilio}} sasa ni orodha kunjuzi ya chaguo za mistari miwili. Orodha ya lugha katika {{ui:Mipangilio}} ni ndefu kuliko ilivyokuwa katika 0.8. Uhariri shirikishi wa moja kwa moja, mikusanyiko ya Maktaba, na vitengo vya uzito na joto vinaelezwa katika maelezo ya Studio.

## Mipaka ya kweli

- Aya ya maandishi haina orodha za vitone au namba, rula ya vichupo, wala kupanga kwa kunyoosha. PDF zilizochapishwa huweka maandishi kwa Helvetica.
- Kuta za mpango ni za moja kwa moja, kwa hiyo tao huchorwa kama kuta fupi. Ukaguzi wa jumuiya wa zana ya ukuta bado unasubiri.
- Vikundi vya tabaka haviandikwi kwa muundo wa AutoCAD wenyewe, kwa hiyo AutoCAD huonyesha orodha tambarare. Programu nyingine huonyesha ghorofa zote pamoja isipokuwa uendeshe {{cmd:FLOORLAYERS}}.
- Paneli ya Hati haijajaribiwa na watu wawili kwenye hifadhi halisi ya pamoja. Uchongaji wa kipanga njia haujaendeshwa kwenye kompyuta halisi yoyote. Makadirio ya taa yalikaguliwa dhidi ya ufuatiliaji wa picha, si programu nyingine. Nyongeza za uhandisi ni visaidizi vya ukaguzi, si mbadala wa mapitio ya mhandisi.
- Lugha zisizo Kiingereza ni rasimu za mashine, na baadhi ya maneno mapya yapo kwa Kiingereza pekee.

## Awali: 0.8 na 0.8.1

Hiki ndicho kilichobadilika katika CadCraft 0.8 na 0.8.1, ikilinganishwa na 0.7. 0.8 (1 Novemba 2026) inaongeza visaidizi vya kuchora vinavyofanya kazi kutokana na mchoro wako mwenyewe, kwa kanuni kwenye kompyuta yako bila modeli yoyote, na 0.8.1 (2 Novemba 2026) inarekebisha hitilafu zilizoripotiwa baada yake.

### Mpya

**Kuchora kinachomaliza wazo lako**

- **Kivuli kinaonyesha kinachofuata.** Bila amri inayoendeshwa, kivuli cha kijivu chenye mistari ya vitone kinaonyesha kile muundo wa mchoro wako unasema kinafuata: nguzo inayofuata yenye nafasi ile ile, hatua inayofuata ya ngazi, ukuta unaokosekana wa chumba. Bonyeza {{key:Tab}} kukichora kama hatua moja ya kutendua, au {{key:Esc}} kukifuta. Kinaangalia vitu vipya zaidi tu, kwa hiyo kinabaki laini kwenye mchoro mkubwa. Kizime katika {{ui:Mipangilio}} › {{ui:CadCraft}} au kwa {{cmd:AUTOCOMPLETE}} `Off`.
- **Nukta inayofuata unapochora mstari.** Katikati ya {{cmd:LINE}} au {{cmd:PLINE}} kivuli ni nukta inayofuata: hatua inayofuata ya ngazi, kona ya nne ya mstatili, au nukta inayofunga. Sogeza kielekezi karibu nayo kisha bonyeza {{key:Tab}}, kana kwamba umebofya hapo.
- **Michoro ya kalamu inakuwa jiometri sahihi.** {{cmd:SKETCHFIX}}: chora mistari mbaya kwa kalamu, panya au kidole na kila moja inakuwa mstari safi, duara, tao, mstatili au polilaini, iliyonaswa kwa kile kilichokwisha kuchorwa. Angalia [Chora kwa kalamu upate jiometri sahihi](topic:sketch-with-a-pen).
- **Picha ya mchoro wa mkono inakuwa mchoro.** {{cmd:PHOTOSKETCH}} (`PSK`) inatafuta karatasi kwenye picha, inanyoosha mtazamo, inatumia ukubwa wa karatasi na skeli unayotoa, na kunakili mistari ya kalamu kwenye tabaka kwa kila rangi ya kalamu. Maandishi hayanakiliwi.
- **Ipime kwa kanuni.** {{cmd:AUTODIM}} (`ADIM`) hutengeneza mfululizo wa vipimo kando ya pande unazochagua, ukubwa wa jumla, upana wa mafunguo, kipenyo cha mashimo na, kwa `Grid`, nafasi ya gridi. Haiwahi kurudia kipimo kilichopo tayari.
- **Sogeza mstari wa gridi na seti nzima inafuata.** {{cmd:GRIDMOVE}} (`GM`): kuta zinazoishia kwenye mstari wa gridi hunyooka nao, kuta zilizo sambamba nao, nguzo, kiputo chake na lebo husogea, na vipimo juu yake hupima nafasi mpya. Hatua moja ya kutendua.

**Karatasi, maelezo na lebo**

- **Karatasi zinajipanga zenyewe.** {{cmd:AUTOSHEET}} huchukua mionekano yako iliyopewa majina (au sehemu tofauti za modeli), huchagua ukubwa wa karatasi na skeli ya kawaida, na kuweka mionekano kwenye karatasi mpya zenye kizuizi cha kichwa na maelezo ya jina na skeli. Kila kitu bado kinaweza kuhaririwa. Angalia [Nipangie karatasi](topic:lay-out-sheets-for-me).
- **Maelezo ya kampuni yako, yanayotolewa unapochora.** {{cmd:DETAILS}} (`DET`) huhifadhi vizuizi vyako vya maelezo. Kile unachochagua kinapolingana na mojawapo kwa maneno yaliyo kwenye tabaka zake, majina ya vizuizi na maelezo, upau wa hali unasema hivyo; chagua na uweke. {{cmd:DETAILS}} › Share huweka orodha yako kwenye folda yako ya Hati na huleta kile timu yako imeongeza. Mipangilio huzima mapendekezo.
- **Lebo kwenye vizuizi.** {{cmd:TAGS}} hufafanua lebo (aina yake, thamani zinazoruhusiwa, vizuizi inavyotumika kwake), huiweka kwenye marejeo ya vizuizi unavyochagua, na kuyaorodhesha kama jedwali unaloweza kuhifadhi kama CSV. Ufafanuzi huhifadhiwa kwenye DWG. Angalia [Lebo](topic:tags).
- **Mipaka ya mchoro.** {{cmd:LIMITS}} huweka mstatili kwa mchoro: gridi inaujaza, na zoom All unauonyesha. Mipaka huonekana kama mstari wa nje na huhifadhiwa kwenye DWG na DXF, pamoja na mipaka ya karatasi. Angalia [Weka mipaka ya mchoro](topic:drawing-limits).

**Kufanya kazi na watu wengine na programu nyingine**

- **Geuza markup kuwa marekebisho.** {{cmd:REDLINE}} husoma kifurushi ambacho MarkupCraft huandika na kuorodhesha kila mabadiliko. Kubali au kataa kila moja kwa maelezo; zilizokubaliwa hupata wingu la marekebisho na kumbukumbu ya marekebisho katika hatua moja ya kutendua, nawe unahifadhi faili la majibu linalofunga markup katika MarkupCraft. Angalia [Geuza markup kuwa marekebisho](topic:redline-to-revision).
- **Michoro ambayo git na Fossil zinaweza kuunganisha.** Ukiwasha {{ui:Faili rafiki kwa kuunganisha}} katika {{ui:Mipangilio}} › {{ui:CadCraft}}, kila kitu hupata ufunguo usiobadilika (faili ni kubwa kwa takriban asilimia 10). `cadcraft merge base ours theirs` kisha huunganisha mabadiliko ya watu wawili ya kitu kimoja cha DWG au DXF kitu kwa kitu, na huripoti tu mahali ambapo watu wawili walibadilisha kitu kimoja. Angalia [Unganisha mabadiliko ya watu wawili kwenye mchoro mmoja](topic:merge-drawings).
- **Kilichobadilika, kwa maneno.** Katika Historia, Linganisha hutoa orodha rahisi: mahali mambo yalipobadilika, maeneo yana ukubwa gani, kilichoongezwa, kilichoondolewa au kilichobadilishwa, na maandishi yaliyohaririwa. Angalia [Eleza kwa maneno kilichobadilika](topic:changes-in-words).
- **Mwelekeo na pembe.** Andika mwelekeo kama mwelekeo wa dira wa mpima ardhi kama N45°23'30"E, au kwa digrii, dakika na sekunde, popote pembe inapohitajika; AUNITS huweka jinsi pembe zinavyoonyeshwa. Angalia [Andika na onyesha mwelekeo wa dira na pembe](topic:bearings-and-angles).
- **Fonti zako za SHX.** Mpe CadCraft folda ya fonti za SHX, na mitindo ya maandishi inayozitaja huchorwa nazo, kwenye skrini na kwenye chapisho. Angalia [Chora maandishi kwa fonti zako za SHX](topic:shx-fonts).
- **Mchoro kutoka kwa maandishi.** {{cmd:DIAGRAM}} husoma mchoro wa mtiririko wa Mermaid, mchoro wa vipengele wa PlantUML, D2 au orodha ya kutoka-hadi, na huchora vizuizi na viunganishi unavyoweza kuhariri. Angalia [Chora mchoro kutoka maandishi](topic:text-to-diagram).
- **Vitu vya OLE kwenye DWG.** {{cmd:OLELIST}} huorodhesha vitu vya OLE ambavyo DWG inabeba na CadCraft haiwezi kuviweka yenyewe, na huweka nakala ya picha mahali unapoelekeza. Angalia [Picha](topic:pictures#objects-from-other-programs-ole).
- **Mahesabu yako yanabaki na mchoro.** Karatasi za hesabu na sababu za muundo huhifadhiwa kwenye DWG pamoja na jedwali la madarasa.

**Uchoraji bila kuona**

- Washa {{ui:Uchoraji bila kuona}} katika {{ui:Mipangilio}} (au andika {{cmd:ACCESS}} kisha ujibu `On`). CadCraft husema kila amri na matokeo kupitia msomaji wako wa skrini, inaeleza mchoro na kilicho karibu na kielekezi, inakuruhusu kusogeza kielekezi na kuchagua nukta kwa kibodi, na hucheza sauti kwa kila kunasa na kila mpini. Mahali kivinjari chako kinapoweza kutambua hotuba kwenye kompyuta yako, amri zinaweza kutamkwa. Angalia [Chora bila kuona](topic:draft-without-sight).

**Katika kila programu**

- **Lugha.** Lugha 54; kumi ni mpya (Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili, Kiuzbeki). Lugha zaidi ya Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili azisome.
- **Vifaa vya kuingiza.** Vidhibiti vya trackpad, kalamu, panya ya 3D, kidhibiti cha mchezo na MIDI.
- **Safu za upau wa zana na gridi ya sifa.** {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Safu za upau wa zana}} inatoa Funga mstari, safu 2 au safu 1 katika programu nyingine. CadCraft huweka mpangilio wake katika {{ui:Mipangilio}} › {{ui:CadCraft}} (angalia [Safu za upau wa zana](topic:settings#toolbar-rows)). Gridi ya sifa ya pamoja iko katika programu nyingine tatu, si CadCraft.
- **Matatizo, Moja kwa moja na nyongeza.** Paneli ya pamoja ya Matatizo inayoonya katika kila programu, mwonekano wa Moja kwa moja unaoonyesha nani yuko wapi katika CadCraft Studio (angalia [Fanya kazi kwenye mchoro mmoja pamoja](topic:work-live)), na orodha ya nyongeza.
- **Unganisha AI yako.** Muunganisho mmoja kutoka CadCraft Studio hadi programu zote nane, kwa kiwango cha kusoma tu, kupendekeza au kuhariri kwa kila programu, na kumbukumbu ya maneno rahisi ya kile msaidizi alichofanya. CadCraft haina AI yake, na Uliza katika kila programu hutumia AI unayounganisha.

### Zilizorekebishwa katika 0.8.1

- **Sifa zilionyesha 150 badala ya 12'-6"** katika michoro ya futi na inchi. Sehemu ambazo programu yenyewe huzisoma zinarudisha maandishi yake.
- **Faili za DWG ambazo sehemu yake ya madarasa ilisomwa kama aina isiyo sahihi** (GitHub cadcraft#5) sasa zinafunguka vizuri.
- **Mstari wa msalaba hauonekani tena nyuma ya madirisha ibukizi.**
- **Studio na matoleo yaliyofungashwa yanaweza kubadili lugha wakati programu inaendeshwa.** Hapo awali yalikuwa Kiingereza pekee. Bado hayajajaribiwa kwenye kila jukwaa: tuambie kama lugha haibadiliki.
- **Kompyuta kibao zikiwa wima** hutoa nafasi ya ziada ya gridi kwa turubai, na hali ya karatasi huanza kwa 760 px au chini.
- **STRETCH yenye dirisha linalovuka, na LIMITS,** ziliripotiwa kwenye Studio 0.8.0 na tayari zilikuwa sahihi kwenye toleo la wavuti la 0.8; kisakinishi cha aliyeripoti kilikuwa cha zamani. Studio 0.8.1 inazibeba.

### Bado hayamo katika toleo hili

- **0.8 na 0.8.1 hazijasainiwa kwa msimbo.** Windows inaweza kuonya (chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}); kwenye Mac, bonyeza kulia CadCraft Studio kisha uchague {{ui:Fungua}}. Matoleo ya duka yamesimamishwa, na toleo la iPad na iPhone halikujengwa upya kwa 0.8.1.
- **Michoro ya kalamu na picha za michoro** zimejaribiwa tu kwenye picha zilizotengenezwa na panya, bado si kwa kalamu halisi, skrini ya kugusa au mchoro wa mkono kwenye karatasi.
- **Uchoraji bila kuona** umejaribiwa kwa ukaguzi wa kiotomatiki, bado si kwa msomaji wa skrini au mjaribu asiyeona.
- **Kushiriki maelezo** hakujakaguliwa na watu wawili, na folda ya Team Cloud Plan kama folda ya Hati haijajengwa.
- **Kuunganisha** kunafanya kazi kwa faili za DWG na DXF za CadCraft; kwa faili za programu nyingine hakijajengwa.
- **Kutendua kwenye madirisha mengi:** CadCraft huripoti kila hatua iliyokamilika, lakini Studio bado haina Tendua moja kwa programu zote; kila programu hutendua hatua zake.
- **Vitu vya OLE vya DWG** vinahifadhiwa lakini havichorwi mahali pake.
- **Kusoma jedwali za mitindo ya chapisho (faili za CTB)** kutoka programu nyingine kumejengwa lakini hakujakaguliwa dhidi ya faili kutoka programu nyingine.
- **Unganisha AI yako:** kuunganisha kwa mbofyo mmoja kwenye Studio, kiunganishi kilichopangishwa kwa AI ya kivinjari, ufunguo wako wa API ndani ya Studio, na kifurushi kilichochapishwa cha MCP hazikuahidiwa katika toleo hili.

Kwa toleo lililotangulia, angalia [Kipya katika 0.7](topic:whats-new-0-7).

---
title: Ongeza maandishi na lebo
summary: Weka lebo za vyumba kwa maandishi ya mstari mmoja, andika maelezo yanayofunga kwa maandishi ya aya yaliyoandikwa papo hapo, kisha uhariri maandishi baadaye.
keywords: maandishi, dtext, mtext, mleader, multileader, kiongozi, revcloud, wingu la marekebisho, wingu, tafuta, badilisha, tafuta na ubadilishe, aya, kufunga, nafasi ya mistari, lebo, maelezo, ufafanuzi, kimo, pangilia, textmask, kinyago cha mandharinyuma, kinyago, wipeout, mzunguko, hariri maandishi, ddedit, textedit, fonti
from: 4b76be99
---

## Utakachotengeneza

Lebo mbili za vyumba, zikiwa katikati ya vyumba vyao, maelezo yanayofunga kwa upana wake, kisha marekebisho ya moja ya lebo.

## Kimo cha maandishi na skeli ya mchoro

Kimo cha maandishi kinapimwa kwa vitengo vya mchoro. Katika mchoro wa milimita utakaochapishwa kwa 1:50, maandishi yenye urefu wa 2.5 mm kwenye karatasi lazima yawe vitengo 2.5 × 50 = 125 kwa urefu kwenye modeli. Kwenye kichupo cha karatasi unachora kwa vitengo vya karatasi, kwa hiyo 2.5 hapo ni 2.5 mm kwenye karatasi.

## Weka lebo iliyo katikati

1. Andika `DT` kisha bonyeza {{key:Enter}} (au bofya {{ui:Maandishi}} kwenye upau wa zana). Kidokezo kinasomeka `Specify start point of text [Justify]:`.
2. Andika `J` kisha bonyeza {{key:Enter}}.
3. Kwenye `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, andika `MC` kisha bonyeza {{key:Enter}}.
4. Kwenye `Specify insertion point of text`, bofya katikati ya chumba.
5. Kwenye `Specify height`, andika `250` kisha bonyeza {{key:Enter}}.
6. Kwenye `Specify rotation angle of text <0>`, bonyeza {{key:Enter}}.
7. Kwenye `Enter text`, andika `KITCHEN` kisha bonyeza {{key:Enter}}.

Lebo inaonekana, ikiwa katikati ya nukta uliyobofya.

8. Bonyeza {{key:Enter}} kwenye kidokezo tupu cha `Enter text` ili kumaliza amri.

## Andika maelezo yanayofunga

Maandishi ya aya ({{cmd:MTEXT}}) yanafunga kwa upana fulani na yanaandikwa moja kwa moja kwenye mchoro.

1. Andika `T` kisha bonyeza {{key:Enter}}, au bofya {{ui:Aya}} kwenye upau wa zana.
2. Kwenye `Specify first corner`, bofya mahali kona ya juu kushoto ya maelezo itakapokuwa.
3. Ili kubadilisha kimo kwanza, andika `H`, bonyeza {{key:Enter}}, andika `250` kisha bonyeza {{key:Enter}}.
4. Kwenye `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, bofya upande wa kulia wa kona ya kwanza. Umbali wa kuvuka ndio upana wa kufunga kwa maandishi; kubofya chini kiasi gani hakuukatazi.
5. Kisanduku kinafunguka juu ya mchoro na kishale ndani yake. Andika `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Maneno yanafunga kwa upana unapoandika.
6. Bonyeza {{key:Enter}} kuanza aya mpya kisha andika `CHECK ON SITE`.
7. Bonyeza {{key:Mod+Enter}}, bofya {{ui:Sawa}}, au bofya popote nje ya kisanduku. Maelezo ni kitu kimoja.

Upau ulio juu ya kisanduku hubadilisha {{ui:Kimo}}, {{ui:Nafasi ya mistari}} (1 ni ya kawaida, 1.5 ni nusu zaidi), {{ui:Upana}} (0 = bila kufunga) na {{ui:Pangilia}} unapoandika. {{key:Esc}} au {{ui:Ghairi}} kinafunga bila kuongeza kitu.

Chaguo kwenye kona ya pili: `H` kimo, `J` upangiliaji (`TL` juu kushoto … `BR` chini kulia: kona au katikati ya kisanduku kinachobaki mahali), `L` nafasi ya mistari, `R` mzunguko, `W` upana ulioandikwa badala ya kona ya pili.

:::note
Kisanduku kikiwa wazi, {{key:Space}} huandika nafasi na {{key:Enter}} huanza aya mpya. DWG iliyohifadhiwa huweka maandishi ya aya kama MTEXT; DXF R12 haina maandishi ya aya, kwa hiyo kila mstari unahifadhiwa kama maandishi yake.
:::

### Mistari kadhaa badala yake

{{cmd:TEXT}} (`DT`) inauliza mstari mmoja kwa wakati: kila {{key:Enter}} huanza mstari unaofuata, ukiwa chini kwa mara 1.667 ya kimo cha maandishi, na kila mstari ni kitu chake. Bonyeza {{key:Enter}} kwenye mstari tupu ili kumaliza.

## Chaguo za upangiliaji

| Chaguo | Nukta unayobofya ni |
|---|---|
| Kushoto (chaguomsingi) | Ncha ya kushoto ya mstari wa msingi |
| Kituo | Katikati ya mstari wa msingi |
| Kulia | Ncha ya kulia ya mstari wa msingi |
| Katikati, MC | Katikati ya maandishi, kwa upana na juu na chini |
| TL | Kona ya juu kushoto |

## Hariri maandishi

1. Bofya mara mbili kitu cha maandishi. Kinafunguka kwenye kisanduku kile kile cha maandishi ya aya mapya, kishale kikiwa mwishoni.
2. Badilisha maneno.
3. Bonyeza {{key:Mod+Enter}} au bofya nje ya kisanduku. Maandishi kwenye mchoro yanabadilika; {{key:Esc}} yanaacha yalivyokuwa.

{{cmd:TEXTEDIT}} (`ED`) inafanya vivyo hivyo: chagua maandishi moja baada ya jingine, kisha bonyeza {{key:Enter}} ukimaliza.

Badala yake, chagua maandishi ili kuyabadilisha kwenye paneli ya kulia: {{ui:Maandishi}}, {{ui:Kimo}}, {{ui:Upana wa kufunga}} (0 = bila kufunga), {{ui:Nafasi ya mistari}}, {{ui:Mzunguko}}, nafasi ya X na Y na {{ui:Pangilia}}. Orodha ya {{ui:Pangilia}} pia inatoa Chini kushoto, ambayo maandishi kutoka programu nyingine wakati mwingine hutumia.

## Mpangilio ndani ya maandishi ya aya kutoka programu nyingine

Maandishi ya aya kwenye DWG au DXF yanaweza kubeba misimbo ndani yake: rangi kwa kila neno, nzito na italiki, mstari wa chini, mstari wa juu na mstari wa katikati, sehemu zilizopangwa juu ya nyingine kama 1/2, na urefu tofauti kwa neno. CadCraft inahifadhi misimbo hiyo, inaichora (kwenye skrini na kwenye PDF iliyochapishwa) na kuihifadhi tena bila mabadiliko.

Unapohariri maandishi kama hayo (kubofya mara mbili, {{cmd:TEXTEDIT}}, sehemu ya Maandishi ya paneli ya kulia, au {{cmd:FIND}} pamoja na Badilisha), unahariri maneno yake matupu. Neno unaloandika linaingia kwenye mfululizo wa jirani yake na kuchukua rangi na mtindo wake; misimbo mingine inabaki pale ilipo. Ukiandika tena nambari za sehemu iliyopangwa juu ya nyingine, sehemu hiyo inakuwa maandishi tupu. Kuweka maandishi yote kutoka sehemu ya Maandishi kunahifadhi misimbo tu pale inapoweza kujua maneno gani yamebaki.

Majina ya fonti (`\F`) yanahifadhiwa na kuhifadhiwa, lakini kila kitu kinachorwa kwa fonti moja ya mtindo wa Helvetica. Bado hakuna upau wa zana wa kuandika misimbo.

## Elekeza kwenye kitu: viongozi wengi

{{ui:Kiongozi}} kwenye kundi la {{ui:Ufafanuzi}} ({{cmd:MLEADER}}, `MLD`) inachora mshale, mstari wa kiongozi, sehemu fupi ya kutua na maelezo, kama kitu kimoja.

1. Bofya {{ui:Kiongozi}}. Kwenye `Specify leader arrowhead location`, bofya kile ambacho maelezo yanahusu.
2. Kwenye `Specify leader landing location`, bofya mahali maelezo yataenda. Sehemu ya kutua inageuka kuelekea upande uliobofya.
3. Andika maelezo kwenye kisanduku kinachofunguka, kisha bonyeza {{key:Mod+Enter}}.

`A` na `L` kwenye swali la kwanza huweka ukubwa wa ncha ya mshale na urefu wa kutua; kimo cha maandishi kinatoka kwenye {{ui:Kimo cha maandishi}} ya vipimo vipya, kikizidishwa na {{ui:Skeli ya jumla}}. Bofya mara mbili kiongozi ili kubadilisha maneno yake. Vipini husogeza ncha ya mshale na kutua; maelezo yanafuata kutua. Katika {{ui:Sifa}}: {{ui:Maandishi}}, {{ui:Kimo}}, {{ui:Upana wa kufunga}}, {{ui:Ukubwa wa ncha ya mshale}} na {{ui:Umbali wa kutua}}.

:::note
Viongozi wengi huhifadhiwa kama viongozi wengi halisi kwenye DWG. DXF haina kiongozi wengi kwenye R12 au 2000, kwa hiyo hapo huhifadhiwa kama mistari, mshale na maandishi wanayochora.
:::

## Weka alama mabadiliko kwa wingu la marekebisho

{{ui:Ufafanuzi}} › {{ui:Zaidi}} › {{ui:Wingu la marekebisho}} ({{cmd:REVCLOUD}}, `RC`) inachora wingu la mikunjo kuzunguka kile kilichobadilika. Historia inaonyesha urefu wa mkunjo na aina itakayotumia.

- **Mstatili** (mara ya kwanza): bofya kona mbili.
- `P` **Poligoni**: bofya kona, {{key:Enter}} hufunga wingu.
- `F` **Mkono huru**: bofya mahali linapoanzia kisha songa kishale kuzunguka eneo bila kubofya; mkunjo unaongezwa kila urefu wa mkunjo. Bofya au bonyeza {{key:Enter}} ili kulifunga.
- `O` **Kitu**: chagua polilaini iliyofungwa, duara au duaradufu (au mstari, mkunjo au polilaini wazi); inakuwa wingu. `Reverse direction?` `Y` inageuza mikunjo ndani.
- `A` **Urefu wa mkunjo**: urefu wa kila mkunjo. Chagua unaofaa skeli ya uchapishaji.

Wingu ni polilaini iliyofungwa ya mikunjo, kwa hiyo linahifadhiwa kwenye kila muundo.

## Tafuta na ubadilishe maneno

{{ui:Hariri}} › {{ui:Zaidi}} › {{ui:Tafuta na ubadilishe}} ({{cmd:FIND}}) inatafuta maandishi, thamani za sifa za bloku na maandishi ya kipimo kwenye kichupo kilicho wazi (au kwenye vitu vilivyochaguliwa tu).

1. Andika maneno kwenye {{ui:Tafuta}}. Orodha inaonyesha kila mahali yalipo, na idadi.
2. Chagua {{ui:Linganisha herufi kubwa na ndogo}}, {{ui:Maneno kamili pekee}} au {{ui:Tumia kadi-pori (* na ?)}} ukihitaji, na uondoe alama kwenye usichotaka kutafuta.
3. Bofya {{ui:Chagua zilizopatikana}} ili kuchagua vitu hivyo, au andika maneno mapya kwenye {{ui:Badilisha kwa}} (orodha inaonyesha kila kimoja kitakavyokuwa) kisha bofya {{ui:Badilisha zote}}. {{key:Mod+Z}} moja inatendua kila ubadilishaji.

Thamani iliyopimwa ya kipimo si maandishi, kwa hiyo haibadilishwi kamwe: katika `<> TYP.`, `TYP.` pekee ndiyo inaweza kubadilishwa.

## Ficha mistari iliyo nyuma ya lebo

1. Chagua maandishi, andika {{cmd:TEXTMASK}} kisha bonyeza {{key:Enter}}.
2. `B` hupaka mandharinyuma ya mchoro nyuma yake; `C` huomba nambari ya rangi. `O` huondoa kinyago.
3. `Border offset factor`: {{key:Enter}} huacha 1.5, nusu ya kimo cha maandishi kuzunguka maandishi.

Kinyago kinafunika mistari iliyo chini ya maandishi, kwenye skrini na unapochapisha. DWG 2004 au mpya zaidi na DXF 2000 zinakihifadhi; muundo wa DWG 2000 na DXF R12 haziwezi, na uhifadhi unasema hivyo.

## Fonti

Maandishi yote yanachorwa kwa fonti ya mtindo wa Helvetica, kwenye skrini na kwenye PDF. Maandishi kutoka michoro iliyofunguliwa yanahifadhi maneno, kimo na nafasi yake, lakini si fonti yake ya asili (jina la fonti ndani ya maandishi ya aya linahifadhiwa kwenye faili, tazama hapo juu).

Kwenye PDF zilizochapishwa, maandishi ya herufi za Ulaya, Kisirili au Kigiriki yanachapishwa kama yalivyo (PDF inabeba herufi inazozihitaji, na bado unaweza kuchagua na kutafuta maandishi). Maandishi ya Kichina, Kijapani na Kikorea nayo yanachapishwa kama yalivyo (uchapishaji unachukua fonti kubwa zaidi mara ya kwanza inapohitajika). Maandishi ya Kiarabu, Kiajemi, Kiurdu na Kiebrania nayo yanachapishwa kama yalivyo (tazama sehemu inayofuata). Herufi ambazo hakuna fonti yenye herufi hiyo zinachapishwa kama "?", na historia inasema zilikuwa ngapi.

## Maandishi ya kulia kwenda kushoto: Kiarabu, Kiajemi, Kiurdu, Kiebrania

Andika maandishi kama unavyofanya mahali pengine: {{cmd:TEXT}} na {{cmd:MTEXT}} zinachora kila mstari kwa mpangilio wa kusoma. Mstari ambao herufi yake ya kwanza ni ya Kiarabu au Kiebrania unasomwa kutoka kulia kwenda kushoto; namba na maneno ya Kilatini ndani yake yanabaki na mpangilio wake wa kushoto kwenda kulia, na herufi za maandishi ya Kiarabu zinaungana. Mstari unaoanza na herufi ya Kilatini unabaki kushoto kwenda kulia, na maneno ya kulia kwenda kushoto yanabaki mahali pake ndani yake. Kila aya ya maandishi ya mistari mingi ina mwelekeo wake, na aya iliyofungwa inauhifadhi kwenye kila mstari.

Maandishi yanahifadhiwa kama ulivyoyaandika, kwa hiyo faili za DWG na DXF zinabadilishana nayo na programu nyingine bila mabadiliko. Nukta ya kuingiza na upangiliaji ({{ui:Kushoto}}, {{ui:Kituo}}, {{ui:Kulia}}) zinamaanisha upande uleule kama maandishi yoyote: maelezo ya kulia kwenda kushoto yanayopaswa kuning'inia kutoka ncha yake ya kulia yanahitaji {{ui:Kulia}}.

Kwenye skrini herufi zinatoka kwenye fonti za mfumo wako. Kwenye PDF iliyochapishwa, Kiebrania kinatumia fonti ile ile iliyojumuishwa kama maandishi ya Kilatini; maandishi ya herufi za Kiarabu yanafanya uchapishaji uchukue fonti moja zaidi (chini ya MB 1, mara moja), na PDF yote kisha inachapishwa kwa fonti hiyo. Fonti hiyo haina umbo lake kwa herufi tatu za Kiurdu (heh goal, yeh barree na nukta kamili ya Kiurdu): zinachapishwa kwa umbo la herufi ya Kiarabu iliyo karibu zaidi. Mchoro wenye maandishi ya herufi za Kiarabu pamoja na maandishi ya Kichina, Kijapani au Kikorea unachapisha mojawapo kati ya hizo mbili kama "?", kwa sababu uchapishaji hubeba fonti moja. Maandishi ya fonti ya SHX iliyopakiwa yanapangwa na kuungwa pale fonti inaposhikilia herufi kwenye nafasi zao za Unicode; kwa fonti za zamani ambazo herufi zake tayari zimeumbwa, tumia {{ui:Geuza mwelekeo (R)}} kwenye {{cmd:SHXFONTS}} kama awali.

## Makosa ya kawaida

- **Maandishi ni madogo mno kuonekana.** Kimo kinapimwa kwa vitengo vya mchoro. Katika mchoro mkubwa, tumia kimo kikubwa (tazama hapo juu), au kuza.
- **Amri iliisha baada ya mstari mmoja.** Ulibonyeza {{key:Enter}} kwenye mstari tupu katika {{cmd:TEXT}}. Anza tena, au tumia maandishi ya aya (`T`), ambapo {{key:Enter}} huanza aya mpya.
- **`T` ilifungua kisanduku badala ya kuuliza mstari.** Kama katika AutoCAD, `T` ni maandishi ya aya ({{cmd:MTEXT}}); maandishi ya mstari mmoja ni `DT`.
- **Maandishi yanafunga mahali tofauti katika AutoCAD.** CadCraft inafunga kwa upana wa Helvetica; fonti nyingine inaweza kutosheleza neno zaidi au kidogo kwenye mstari.
- **Maandishi kwenye nakala iliyoakisiwa.** Yanawekwa yakiakisiwa lakini yanabaki yanasomeka kushoto kwenda kulia.

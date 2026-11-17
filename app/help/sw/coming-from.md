---
title: Kuhamia kutoka programu nyingine ya uchoraji
summary: Jinsi amri, funguo na tabia unazozifahamu zinavyolingana na CadCraft, na tofauti zinazowakwaza wachoraji wenye uzoefu.
keywords: kuhama, tofauti, kuhamisha, tabia, majina mafupi, aliases, ingizo linalobadilika, pickfirst, pickadd, qsave, saveas, save as, mtext, ctb, ufuatiliaji wa polar, xref, mikato ya kibodi, zinazofahamika, copyclip, pasteclip, pasteorig, copybase, ubao wa kunakili
from: b58688e7
---

Ikiwa umetumia AutoCAD, au programu iliyojengwa juu ya muundo uleule, mengi unayoyajua yanafanya kazi hapa: mstari wa amri, majina mafupi kama `L`, `C`, `TR` na `O`, Enter au Space kurudia, uteuzi wa dirisha na wa kuvuka, vishikio vya kitu kwenye F3, Ortho kwenye F8, nafasi ya modeli yenye karatasi na viewport. Ukurasa huu unaorodhesha kinachoendana moja kwa moja, kisha tofauti zinazowashangaza watu. Soma nusu ya pili hata ukiskani ya kwanza.

## Kinachoendana moja kwa moja

| Tabia | Katika CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Amri zile zile, majina mafupi yale yale |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Sawa |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Amri zile zile za kipimo |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` zikiandikwa kwenye mstari wa amri | Sawa, kwa vipimo vipya |
| `B` kutengeneza bloku, `I` kuingiza, `PU` kusafisha | Sawa (kusafisha huondoa bloku zisizotumika tu) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` kisha `E` au `W` | Sawa |
| Kuandika `_LINE` au `-LAYER` kutoka skripti au tabia | Alama ya mwanzo `_`, `-`, `.` au `'` inapuuzwa |
| Enter au Space kwenye kidokezo tupu hurudia amri ya mwisho | Sawa |
| Esc hughairi; Esc tena huondoa uteuzi | Sawa |
| `@dx,dy`, `@d<a`, pembe zinazoandikwa kinyume cha saa kuanzia mashariki | Sawa |
| Dirisha kutoka kushoto kwenda kulia, kuvuka kutoka kulia kwenda kushoto, bofya-bofya; bonyeza na kuburuta kwa lasso, Space inazunguka dirisha / kuvuka / uzio (LASSOMODE) | Sawa |
| Chagua kwanza, kisha amri (nomino-kitenzi) | Sawa; amri iliyokamilika huondoa uteuzi |
| `ALL` na `L` kwenye Chagua vitu | Sawa |
| Shift+bofya huondoa kwenye uteuzi | Sawa. Mipangilio inaweza kufanya bofya ibadilishe uteuzi badala yake, kama PICKADD 0 inavyofanya: angalia [Mipangilio ya CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Amri na funguo zile zile; kubandika huweka nakala kwa kona yake ya chini kushoto, kama PASTECLIP inavyofanya |
| F3 kishika cha kitu, F7 gridi, F8 Ortho | Funguo zile zile |
| Bofya mara mbili gurudumu kukuza hadi mipaka | Sawa |
| Maandishi yaliyoakisiwa yanabaki yanasomeka | Sawa (kama ilivyo na MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Sawa; kwenye Mac, Command pia inafanya kazi |

[Marejeo ya amri](topic:commands) yanaorodhesha kila amri na jina mafupi.

:::tip
Ukipenda upau wa AutoCAD, chagua mtindo wa menyu {{ui:Mtindo wa kawaida wa uchoraji}} katika {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Menyu, vitufe na panya}}: vichupo vya Home, Insert, Annotate, Parametric, View, Manage na Output juu ya mstari uleule wa amri, na kitufe cha kati kinasogeza wakati bofya ya kulia ni Enter. Angalia [Menyu, vitufe na panya](topic:menus-keys-and-mouse).
:::

[Ramani ya amri](topic:command-map) inaorodhesha kila amri ya CadCraft pamoja na majina yake mafupi, na [karatasi ya njia za mkato](topic:cheat-sheet) inaorodhesha 40 utakazozitumia zaidi (pia kama PDF ya ukurasa mmoja).

## Tofauti zinazowakwaza watu

### Nukta zilizoandikwa ni kamili

Ingizo linalobadilika likiwa limewashwa, programu nyingine inachukulia `100,0` iliyoandikwa kwa nukta ya pili kuwa ya kulinganisha. **Mstari wa amri wa CadCraft haufanyi hivyo:** hapo, `x,y` hupimwa kila mara kutoka asili. Ukiwa na {{ui:Dyn}} ({{key:F12}}) imewashwa, tumia sehemu zake badala yake: umbali, {{key:Tab}}, pembe. Tumia `@100,0` kwa "100 kulia kwa nukta ya mwisho", au sogeza msalaba wa kielekezi kwa njia sahihi kisha andika `100` tupu.

### Shift huruka vishikio; haitoi Ortho

Kushikilia Shift unapobofya kunapuuza vishikio vya kitu kwa bofya hiyo. Haibadilishi Ortho kwa muda. Tumia F8 au kitufe cha {{ui:Ortho}}.

### Bofya ya kulia daima ni Enter

Hakuna menyu ya bofya ya kulia. Bofya ya kulia kwenye mchoro ni Enter: inamaliza amri, inakamilisha uteuzi, au inarudia amri ya mwisho. Wakati wa kuhamisha mpini au kisanduku cha uteuzi, badala yake hughairi. Buruta kwa kitufe cha kulia kusogeza.

### Hakuna kusogeza kwa upau wa Space

Space ni Enter, kwa hiyo kushikilia Space na kuburuta hakusogezi. Sogeza kwa kitufe cha kati au cha kulia, au punguza kisha ukuze tena mahali pengine kwa gurudumu.

### Trim na Extend

Trim na Extend zinaanza katika hali ya Haraka: kila kitu kinachoonekana ni ukingo wa kukatia au mpaka, kipande kilicho chini ya kielekezi kinaonyesha kitakachoondolewa, njia iliyoburutwa inapunguza kila kipande inachovuka, na kitu ambacho hakivukwi na chochote kinafutwa. {{key:Shift}} hubadilisha kati ya trim na extend. `O` inabadilisha hadi hali ya Kawaida (chagua kingo kwanza), `F` na `C` ni uzio na kuvuka, `E` ni EDGEMODE, `R` inafuta. Hakuna chaguo la `P` (Project): CadCraft hukata katika ndege ya mchoro.

### Fillet na chamfer

{{cmd:FILLET}} na {{cmd:CHAMFER}} zina chaguo unazozijua: Tendua (U), Polilaini (P), Radiasi (R) au Umbali (D), Pembe (A) na Mbinu (E), Trim, na Nyingi (M), pamoja na {{key:Shift}}+bofya kwa kona kali. Fillet kati ya polilaini na mstari huongeza tao kama kitu chake chenyewe badala ya kuziunganisha kuwa polilaini moja, na kona za polilaini karibu na sehemu ya tao zinabaki kama zilivyo.

### Maandishi ya aya na maandishi ya mstari mmoja

`T`, `MT` na `MTEXT` ni maandishi ya aya yanayoandikwa papo hapo, yenye upana, nafasi ya mistari na upangaji; `DT` na `DTEXT` ni maandishi ya mstari mmoja, kama unavyoyajua. Hakuna mitindo ya maandishi wala safu wima, na bado huwezi kuandika muundo ndani ya maandishi (nzito, sehemu zilizopangwa wima); muundo unaokuja kwenye faili unahifadhiwa, unachorwa na kuhifadhiwa (angalia [Ongeza maandishi na lebo](topic:text#formatting-inside-paragraph-text-from-other-programs)). Kila kitu kinachorwa kwa fonti ya mtindo wa Helvetica.

### Hifadhi maana yake ni 'pakua nakala'

{{key:Mod+S}}, `SAVE` na `QSAVE` hupakua nakala katika muundo wa mchoro: DWG uliyofungua huhifadhiwa kama DWG, DXF kama DXF. Kwenye kivinjari hakuna kinachoandikwa juu ya kilichopo papo hapo, na faili zilizofunguliwa hazibadilishwi kamwe. Katika CadCraft Studio, {{key:Mod+S}} huandika tena kwenye faili uliyofungua.

`SAVEAS` ({{key:Mod+Shift+S}}) ni kisanduku kidogo cha mazungumzo, si kivinjari cha faili: chagua {{ui:DWG}} (pamoja na {{ui:Toleo}} lake, AutoCAD 2000 hadi 2018), {{ui:DXF R12}} au {{ui:DXF 2000}} kisha bonyeza {{ui:Hifadhi}}. Kivinjari ndicho kinachoamua upakuaji unakwenda wapi. `DXFOUT` daima hupakua DXF R12.

DWG uliyofungua inahifadhiwa katika toleo lilelile ilimokuja; mchoro mpya unahifadhiwa katika muundo wa AutoCAD 2000 isipokuwa uchague mwingine. Karatasi, vipimo na mifumo ya mistari ya kivuli vinahifadhiwa. Angalia [Faili: kinachofunguka, kinachohifadhiwa](topic:files#saving).

### Tabaka: rahisi zaidi

- Kila mabadiliko ya tabaka (kuwasha, kugandisha, kufunga, rangi, kuchapisha, aina ya mstari, unene wa mstari, tabaka la sasa) ni hatua moja ya kutendua.
- Kuzima na kugandisha vina athari sawa katika CadCraft.
- Matabaka ambayo mchoro unayagandisha katika viewport moja yanabaki yamegandishwa hapo: kwenye skrini, katika chapisho na unapoyahifadhi kama DWG au DXF.
- Viewport inayoonyesha tabaka kwa rangi, aina ya mstari, unene wa mstari au uwazi wake yenyewe inaendelea kufanya hivyo kwenye skrini, katika chapisho na kwenye DWG iliyohifadhiwa (DXF inahifadhi mipangilio ya tabaka lenyewe; uhifadhi unasema hivyo). Kubadilisha hizo kwa kila viewport bado hakujajengwa.
- Hakuna meneja wa sifa za tabaka wala hali za tabaka; {{cmd:RENAME}}, {{cmd:LAYMRG}} na {{cmd:LAYDEL}} hubadilisha jina, kuunganisha na kufuta matabaka. Aina za mistari na unene wa mistari huwekwa kwenye paneli ya kulia (angalia [Unene wa mistari na aina za mistari](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} na {{cmd:LAYMCUR}} hufanya kazi kwa kuchagua.
- Kuhifadhi kwenye DXF R12 kunaandika majina ya matabaka kwa herufi kubwa. DWG inayahifadhi kama ulivyoyaandika.

### Mitindo ya vipimo

`DIMSTYLE` hufungua meneja wa mitindo yenye majina (mpya, badilisha, weka ya sasa, linganisha, tumia). `DIMSCALE` na mipangilio mingine bado hubadilisha kile vipimo vipya vinachotumia, na kila kipimo kinabaki na ukubwa wake, ambao unaweza pia kubadilisha kwenye paneli ya Sifa. Mtindo wa sasa hauhifadhiwi kwenye faili. Vipimo vinafuata muundo wa urefu wa mchoro (desimali, au futi na inchi kwa {{cmd:UNITS}}), au {{ui:Muundo}} wao wenyewe. Angalia [Weka ukubwa wa vipimo](topic:dimension-settings).

### Uchapishaji ni rahisi zaidi

Majedwali ya mtindo wa kuchapisha yanafanya kazi kwa rangi, kama mafaili ya CTB: Monochrome, Colour na Grayscale zimejengwa ndani, unaweza kutengeneza zako, na kila karatasi inahifadhi jedwali lake. Kusoma mafaili ya CTB kumejengwa kutoka kwenye maelezo yaliyochapishwa na kumejaribiwa tu kwenye mafaili tuliyotengeneza; majedwali yenye majina ya mtindo wa kuchapisha (STB) na mipangilio ya ukurasa bado hayajajengwa. Mistari huchapishwa kwa unene wake wa mstari, zilizobaki kwa upana mmoja wa kalamu. Karatasi huchapishwa kwa 1:1 kwenye karatasi zao wenyewe; modeli huchapishwa kwa skeli iliyochaguliwa au kutoshea. Angalia [Chapisha kwenda PDF](topic:plot-pdf).

### Kufanya kazi ndani ya viewport

Kama unavyoijua: bofya mara mbili ndani ya viewport (au andika {{cmd:MSPACE}}) ili kufanya kazi kwenye modeli kupitia hiyo, na bofya mara mbili nje yake (au {{cmd:PSPACE}}) ili kurudi kwenye karatasi. Ndani, kusogeza na kukuza kunabadilisha kinachoonyeshwa na viewport, isipokuwa onyesho lake limefungwa; basi zinahamisha karatasi. Kubofya kichupo chini ya mchoro pia kunatoka kwenye viewport. Angalia [Fanya kazi kwenye modeli kupitia viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Ufuatiliaji na ingizo linalobadilika vipo, kushika gridi bado

Gridi ni ya kuangalia tu; nukta hazishiki kwake (hakuna hali ya kushika ya F9). Ufuatiliaji wa polar ({{key:F10}}, hatua inayowekwa kwa {{cmd:POLARANG}}) na ufuatiliaji wa vishikio vya kitu ({{key:F11}}: simama kwenye nukta ya kushika ili kuipata) hufanya kazi kama unavyoyajua; angalia [Shika kwenye vitu](topic:object-snaps#polar-tracking). Ingizo linalobadilika ({{key:F12}}) linaonyesha umbali na pembe (au X na Y) kwa msalaba; angalia [Ingizo la viwianishi na umbali](topic:coordinate-entry#dynamic-input).

### Futi na inchi

Chagua {{ui:Muundo wa urefu}} {{ui:Usanifu majengo}} au {{ui:Uhandisi}} (au andika {{cmd:UNITS}}), kisha andika urefu kama unavyoujua: `12'6"`, `12'6-1/2"`. Tumia kistari, si nafasi, kabla ya sehemu: {{key:Space}} ni {{key:Enter}}. Weka pia {{ui:Vitengo}} kuwa {{ui:Inchi}}, ili karatasi na chapisho zitoe skeli za usanifu. Muundo unahifadhiwa katika faili za DWG na DXF zilizohifadhiwa. Angalia [Futi na inchi](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kunakili na kubandika kunabaki ndani ya CadCraft

{{key:Mod+C}}, {{key:Mod+X}} na {{key:Mod+V}} hunakili, hukata na kubandika vitu ndani ya mchoro, kati ya michoro, na kati ya vichupo vya CadCraft kwenye kivinjari kile kile. Ubao wa kunakili ni wa CadCraft wenyewe: huwezi kubandika vitu vya CadCraft kwenye programu nyingine, wala vitu vya programu nyingine kwenye CadCraft. Kubandika kutoka mchoro wenye vitengo vingine hakubadilishi ukubwa: tumia {{cmd:SCALE}} baadaye. {{key:Mod+D}} ni rudufu inayosogea pamoja na kielekezi, nyongeza ya CadCraft. Angalia [Nakili, bandika na rudufu](topic:copy-paste).

### Funguo za kivinjari usizoweza kutumia

Ukurasa wa wavuti hauwezi kuchukua {{key:Mod+N}}, {{key:Mod+W}} au {{key:Mod+T}} kutoka kwenye kivinjari: hizo hufungua na kufunga madirisha na vichupo. Tumia kitufe cha {{ui:Mpya}} au andika `NEW`. Angalia [Funguo, panya na padi za kugusa](common:keys).

## Amri unazoweza kutaka ambazo bado hazipo hapa

{{cmd:TABLE}} bado haijajengwa. Kuiandika kunasema "Unknown command". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} na {{cmd:XREF}} zimejengwa.) [Bado haijajengwa](topic:not-built-yet) inaorodhesha kinachopaswa kufanywa badala yake kwa sasa.

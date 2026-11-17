---
title: Marejeo ya amri
summary: Kila amri katika programu ya uchoraji ya CadCraft, pamoja na majina yake mafupi, maswali inayouliza, chaguo zake na chaguo-msingi.
keywords: amri, majina mafupi, orodha ya amri, eneo, mzunguko, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Andika jina la amri au jina mafupi kisha bonyeza {{key:Enter}} au {{key:Space}}. Herufi kubwa au ndogo hazijali, na `_`, `-`, `.` au `'` ya mwanzo inapuuzwa. Andika `HELP` (au `?`) ili kuchapisha orodha fupi ya kila amri katika historia ya mstari wa amri; bonyeza {{key:F1}} kwa msaada huu.

Jinsi ya kusoma vidokezo: chaguo ziko kwenye mabano ya mraba, nawe unachagua kwa kuandika herufi zake kubwa (`D` kwa Kipenyo). Chaguo-msingi liko kwenye mabano ya pembe; bonyeza {{key:Enter}} kukubali. Mahali panapohitajiwa nukta, unaweza kubofya au kuandika muundo wowote kati ya zile za [Uingizaji wa viwianishi na umbali](topic:coordinate-entry). Mahali panapohitajiwa umbali, unaweza kuandika namba au kubofya nukta mbili.

Mahali panapohitajiwa nukta au kitu, na hakuna chaguo-msingi, {{key:Enter}} inamaliza amri. {{key:Esc}} inaghairi. Chochote amri ilichofanya ni hatua moja ya kutendua.

## Chora

### LINE

Majina mafupi: `L`. Sehemu za moja kwa moja, kila moja ikiwa kitu chake.

- `Bainisha nukta ya kwanza` (Enter: anza kutoka nukta ya mwisho uliyotoa)
- `Bainisha nukta inayofuata [Tendua (U)]`, inarudiwa. Baada ya sehemu mbili: `[Tendua (U)/Funga (C)]`.
- `U` inarudisha sehemu ya mwisho, `C` inafunga hadi nukta ya kwanza na kumaliza. Enter inamaliza.

### PLINE

Majina mafupi: `PL`. Polilaini moja ya sehemu za mstari na tao.

- `Bainisha nukta ya kuanza`
- `Bainisha nukta inayofuata [Tao (A)/Funga (C)/Tendua (U)]` (Funga baada ya sehemu mbili)
- `A` inabadilisha kwenda matao: `Bainisha nukta ya mwisho ya tao [Mstari (L)/Funga (CL)/Tendua (U)]`. Kila tao linaendelea kwa tanjenti na sehemu iliyotangulia. `L` inarudi kwenye mistari, `CL` inafunga kwa tao.
- Enter inamaliza; polilaini inabaki wazi.

### CIRCLE

Majina mafupi: `C`.

- `Bainisha nukta ya katikati ya duara [Nukta 3 (3P)/Nukta 2 (2P)/Ttr (tangenti tangenti radiasi)]`
- `Bainisha radiasi ya duara [Kipenyo (D)] <radiasi ya mwisho>`; `D` inauliza `Bainisha kipenyo cha duara`.
- `2P`: ncha mbili za kipenyo. `3P`: nukta tatu kwenye duara.
- `T` (pia amri `TTR`, na {{ui:Chora}} › {{ui:Zaidi}} › {{ui:Duara: Tanjenti, Tanjenti, Radiasi}}): `Bainisha nukta kwenye kitu kwa tanjenti ya kwanza ya duara`, ya pili, kisha radiasi (Enter: ile ya mwisho). Duara linagusa vitu vyote viwili (mistari, matao, madurara, sehemu za polilaini, pia ndani ya bloku); kati ya madurara yanayogusa, lile linalogusa karibu zaidi na nukta zako. `Duara halipo` inapotokea hakuna linalofaa.
- `TTT` (au {{ui:Chora}} › {{ui:Zaidi}} › {{ui:Duara: Tanjenti, Tanjenti, Tanjenti}}): vitu vitatu; duara linalogusa vyote vitatu, lililo karibu zaidi na nukta zako (mistari mitatu hutoa duara la ndani au la nje, kulingana na mahali unapochagua).

### ARC

Majina mafupi: `A`.

- `Bainisha nukta ya kuanza ya tao [Katikati (C)]`, `Bainisha nukta ya pili ya tao`, `Bainisha nukta ya mwisho ya tao`: tao linalopita nukta tatu.
- `C`: `Bainisha nukta ya katikati ya tao`, `Bainisha nukta ya kuanza ya tao`, `Bainisha nukta ya mwisho ya tao`. Tao linakwenda kinyume cha saa kutoka mwanzo hadi mwisho.

### RECTANG

Majina mafupi: `REC`, `RECTANGLE`. Polilaini iliyofungwa.

- `Bainisha nukta ya kwanza ya kona`, `Bainisha nukta nyingine ya kona`. Andika `@upana,urefu` kwa kona ya pili.

### POLYGON

Majina mafupi: `POL`. Poligoni ya kawaida kama polilaini iliyofungwa.

- `Ingiza idadi ya pande <4>` (3 hadi 1024)
- `Bainisha katikati ya poligoni`
- `Ingiza chaguo [Imeingizwa kwenye duara (I)/Imezingirwa duara (C)] <I>`
- `Bainisha radiasi ya duara`: bofya au andika nukta; umbali wake unaweka ukubwa, na mwelekeo wake unazungusha poligoni.

### ELLIPSE

Majina mafupi: `EL`.

- `Bainisha nukta ya ncha ya mhimili wa duaradufu [Katikati (C)]`, `Bainisha nukta nyingine ya mhimili`, `Bainisha umbali hadi mhimili mwingine`.
- `C`: `Bainisha katikati ya duaradufu`, `Bainisha nukta ya ncha ya mhimili`, kisha umbali hadi mhimili mwingine.
- `I` (`Isocircle`, wakati tu {{cmd:ISODRAFT}} imewashwa): katikati, kisha radiasi au `Kipenyo`: duaradufu ambalo duara linaonekana kwenye ndege ya isometric ya sasa.

### HATCH

Majina mafupi: `H`, `BH`, `BHATCH`; au {{ui:Mistari ya kivuli}} kwenye upau wa zana. Inaonyesha mfumo wa sasa, skeli na pembe kwanza.

- `Bainisha nukta ndani [Chagua vitu (S)/Mfumo (P)/Skeli (SC)/Pembe (A)]`, inarudiwa (`Tendua (U)` mara tu kuna eneo): kila bofya huongeza eneo lililofungwa linalouzunguka, pamoja na maumbo yaliyofungwa ndani yake kama visiwa. Enter inatengeneza mistari ya kivuli moja ya yote.
- `S`: `Chagua vitu vilivyofungwa` (polilaini zilizofungwa, madurara, duaradufu zilizofungwa).
- `P`: `Ingiza jina la mfumo, SOLID, au ? kwa orodha <wa sasa>`. `SC`: `Bainisha skeli ya mfumo`. `A`: `Bainisha pembe ya mfumo`.
- `G` (Mteremko): kujaza ni mteremko badala ya mfumo. Angalia {{cmd:GRADIENT}} kwa maswali yake.

Angalia [Mistari ya kivuli na kujaza maeneo](topic:hatch).

### GRADIENT

Majina mafupi: `GD`. Hujaza eneo kwa mteremko wa rangi moja au mbili. Inauliza mteremko kwanza, kisha inaendelea kama {{cmd:HATCH}} inavyofanya (`Bainisha nukta ndani`, `S` kwa vitu vilivyofungwa, {{key:Enter}} kumaliza).

- `Ingiza chaguo la mteremko [Aina (T)/Rangi moja (O)/Rangi mbili (TW)/Pembe (A)/Katikati (C)/Toka (X)] <X>`, inarudiwa; kila mara inaonyesha mteremko jinsi ulivyo sasa.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, au moja kati yake ikigeuzwa (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Herufi za mwanzo zinatosha.
- `O`: rangi moja, kisha kivuli chake kutoka 0 hadi 1 (0 inaifanya nyeusi, 0.5 ni rangi yenyewe, 1 inaifanya nyeupe). `TW`: rangi ya kwanza na ya pili. Rangi ni namba kutoka 1 hadi 255, namba tatu kama `255,128,0`, au `#rrggbb`.
- `A`: pembe ambayo mteremko unaenda. `C`: katikati Ndiyo au Hapana (Hapana inahamisha katikati ya mteremko upande mmoja).
- Inakataa rangi au aina isiyojulikana, na kivuli nje ya 0 hadi 1.

{{cmd:HATCHEDIT}} `G` na Sifa (Mteremko) hubadilisha mteremko baadaye, au kugeuza mistari yoyote ya kivuli kuwa mteremko. Mteremko unachorwa kwenye skrini na kuchapishwa. DWG 2004 na baadaye huuhifadhi kama mistari ya kivuli ya mteremko halisi; DXF 2000 na DWG 2000 huuhifadhi kwa CadCraft, na programu nyingine zinaona kujaza imara kwa rangi ya kwanza.

### HATCHGENERATEBOUNDARY

Majina mafupi: `HGB`. Hutengeneza tena mpaka kutoka mistari ya kivuli iliyoupoteza. `Chagua mistari ya kivuli` (au chagua kwanza), kisha `Unganisha kila mistari ya kivuli na mpaka wake mpya, ili ifuate? [Ndiyo/Hapana] <Ndiyo>`.

- Kila kitanzi cha mistari ya kivuli kinakuwa polilaini iliyofungwa kwenye tabaka la mistari ya kivuli; polilaini mpya zinabaki zimechaguliwa. Ukingo uliopinda unarudi kama sehemu fupi za mstari ambazo mistari ya kivuli inazihifadhi.
- Kwa Ndiyo mistari ya kivuli inafuata mpaka wake mpya, kama mistari ya kivuli iliyotengenezwa kwa {{cmd:HATCH}}. Hatua moja ya kutendua.
- Inasema hivyo wakati hakuna mistari ya kivuli iliyochaguliwa.

### POINT

Majina mafupi: `PO`; au {{ui:Chora}} › {{ui:Zaidi}} › {{ui:Nukta}}. Vitu vya nukta, kimoja kwa kila bofya, hadi Enter.

- `Bainisha nukta`

### XLINE

Majina mafupi: `XL`; au {{ui:Chora}} › {{ui:Zaidi}} › {{ui:Mstari wa ujenzi}}. Mistari ya ujenzi, isiyo na mwisho pande zote mbili. Angalia [Mistari ya ujenzi na miale](topic:construction-lines).

- `Bainisha nukta [Mlalo (H)/Wima (V)/Pembe (A)/Gawanya (B)/Hamisha (O)]`, kisha `Bainisha nukta ya kupitia` kwa kila mstari, hadi Enter.
- `A`: `Ingiza pembe ya mstari wa ujenzi [Rejeo (R)] <0>`; `R` inauliza `Chagua kitu cha mstari` kwanza.
- `B`: `Bainisha nukta ya kilele cha pembe`, `Bainisha nukta ya kuanza ya pembe`, kisha `Bainisha nukta ya mwisho ya pembe` kwa kila mstari.
- `O`: `Bainisha umbali wa kuhamisha [Kupitia (T)] <Kupitia>`, kisha `Chagua kitu cha mstari` na `Bainisha upande wa kuhamisha` (au `Bainisha nukta ya kupitia`) kwa kila mstari.

### RAY

Hakuna majina mafupi; au {{ui:Chora}} › {{ui:Zaidi}} › {{ui:Mwale}}. `Bainisha nukta ya kuanza`, kisha `Bainisha nukta ya kupitia` kwa kila mwale, hadi Enter.

### TEXT

Majina mafupi: `DT`, `DTEXT`; au {{ui:Maandishi}} kwenye upau wa zana. Maandishi ya mstari mmoja; kila mstari ni kitu chake.

- `Bainisha nukta ya kuanza ya maandishi [Panga (J)]`
- `J`: `Ingiza chaguo [Kushoto (L)/Katikati (C)/Kulia (R)/Kati (M)/TL/MC] <L>`, kisha `Bainisha nukta ya kuingiza ya maandishi`
- `Bainisha urefu <kimo cha sasa cha maandishi>`
- `Bainisha pembe ya mzunguko wa maandishi <0>`
- `Ingiza maandishi`, inarudiwa: kila Enter inaanza mstari unaofuata chini. Enter kwenye mstari tupu inamaliza. {{key:Space}} inaandika nafasi hapa.

### DIVIDE

Majina mafupi: `DIV`. {{cmd:DIVIDE}} huweka alama kwenye mstari, tao, duara, polilaini, spline au duaradufu inayoikata kuwa sehemu sawa. Chagua kitu, kisha weka idadi ya sehemu (2 hadi 32767). Kitu wazi kinapata alama moja pungufu ya sehemu; kilichofungwa kinapata alama pia kwenye mwanzo wake. Kitu chenyewe hakikatwi. Alama ni nukta; `Bloku` inauliza bloku ya mchoro huu badala yake, na kama inageuka kufuata kitu. Urefu kwenye spline na duaradufu hupimwa kwa sehemu fupi za chord. Inakataa maandishi, mistari ya kivuli na vitu vingine visivyo na urefu.

### MEASURE

Majina mafupi: `ME`. {{cmd:MEASURE}} huweka alama kila urefu uliopewa kando ya mstari, tao, duara, polilaini, spline au duaradufu, ikihesabu kutoka ncha iliyo karibu zaidi na mahali ulipochagua (kitu kilichofungwa: kutoka mwanzo wake). Toa urefu kwa kuuandika au kwa nukta mbili. Ncha ya mbali ya kitu wazi haipati alama. `Bloku` huweka bloku kwenye kila alama badala ya nukta. Inakataa urefu wa 0, urefu mrefu kuliko kitu, na urefu utakaotengeneza zaidi ya alama 32767.

### BOUNDARY

Majina mafupi: `BO`, `BPOLY`. {{cmd:BOUNDARY}} inatengeneza polilaini iliyofungwa kuzunguka eneo lenye nukta uliyochagua, kutoka mistari, matao, madurara, polilaini na mikunjo inayolifunga kwenye skrini. Vipande vilivyo kwenye tao au duara vinarudi kama sehemu za tao; vipande vya duaradufu na spline vinarudi kama sehemu fupi za mstari. Kwa `Visiwa` kuwashwa (mpangilio wa kuanzia), kila eneo lililofungwa ndani yake nalo linapata polilaini yake. Endelea kuchagua nukta; Enter inamaliza. Vitu vinavyofunga eneo vinabaki kama vilivyo. Inasema hivyo wakati hakuna eneo lililofungwa lenye nukta.

### BLEND

{{cmd:BLEND}} huchora spline kati ya ncha za mikunjo miwili wazi. Chagua kila mkunjo karibu na ncha ya kuunganisha. `CONtinuity` inachagua `Tanjenti` (spline inatoka na kufika kwa kufuata mikunjo yote miwili) au `Laini` (pia inainama kwa jinsi zinavyoinama kwenye ncha); chaguo linahifadhiwa kwa kikao. Mikunjo miwili haibadiliki. Inakataa vitu vilivyofungwa na ncha mbili ambazo tayari zinakutana.

### REGION

Majina mafupi: `REG`. {{cmd:REGION}} hugeuza vitu vilivyofungwa kuwa regions: maeneo bapa unayoweza kuunganisha, kukata na kupima. Chagua madurara, polilaini zilizofungwa, duaradufu zilizofungwa au mikunjo iliyofungwa, au mistari, matao na polilaini wazi zinazofunga kitanzi ncha kwa ncha; kila kitanzi kinakuwa region moja na kuchukua nafasi ya vitu vilivyokitoa. Matao yanabaki matao; duaradufu na spline zinakuwa sehemu fupi za mstari. Kisicho kimefungwa na hakifungi kitanzi kinabaki kama kilivyo, na inasema kimeingapi. Kwenye mchoro region ni polilaini moja au zaidi zilizofungwa zilizoshikiliwa pamoja kama kikundi kisicho na jina, kwa hiyo bofya moja inachagua region nzima na nakala ni region yake yenyewe; programu nyingine zinazofungua faili zinaona polilaini zilizofungwa.

Kwenye mchoro wenye regions, {{cmd:UNION}}, {{cmd:SUBTRACT}} na {{cmd:INTERSECT}} kwenye kichupo cha 2D zinafanya kazi kwenye regions: `UNION` inaunganisha regions zilizochaguliwa kuwa moja (regions zilizo mbali zinakuwa region moja yenye mipaka kadhaa), `SUBTRACT` inauliza regions za kutoa kutoka kwake kisha zile za kuondoa (shimo linabaki sehemu ya region), `INTERSECT` inabaki na eneo wanaloshiriki wote. Kila moja inasema eneo la matokeo na ni hatua moja ya kutendua. Zinakataa wakati hakuna kitakachobaki au hakuna kinachoshirikiwa. Kwenye kichupo cha 3D, na kwenye mchoro usio na regions, amri hizo hizo zinafanya kazi kwenye miili imara kama awali.

## Badilisha

Majina mafupi: `MT`, `T`; au {{ui:Aya}} kwenye upau wa zana. Maandishi ya aya yanayokunjwa hadi upana, yanayoandikwa papo hapo.

- `Bainisha kona ya kwanza`
- `Bainisha kona nyingine [Urefu (H)/Panga (J)/Nafasi ya mistari (L)/Mzunguko (R)/Upana (W)]`: upana kati ya kona mbili ndipo maandishi yanapokunjwa. `H` inauliza `Bainisha urefu`, `J` `Ingiza upangaji [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Ingiza kipengele cha nafasi ya mistari (0.25 hadi 4)`, `R` `Bainisha pembe ya mzunguko`, `W` `Bainisha upana (0 kwa kutokunjwa)` na inaruka kona ya pili.
- Kisha kisanduku kinafunguka kwenye mchoro: andika, {{key:Enter}} kwa aya mpya, {{key:Mod+Enter}} au bofya nje kumaliza, {{key:Esc}} kughairi. Upau wake unaweka urefu, nafasi ya mistari, upana na upangaji. Angalia [Ongeza maandishi na lebo](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Majina mafupi: `ED`, `DDEDIT`; au bofya mara mbili maandishi. `Chagua maandishi ya kuhariri`, inarudiwa hadi {{key:Enter}}: kila moja linafunguka kwenye kisanduku kile kile. Likianzishwa kwenye maandishi yaliyochaguliwa au kubofya mara mbili, linahariri hilo moja na kumaliza.

### ERASE

Majina mafupi: `E`, `DELETE`; au bonyeza {{key:Delete}} na vitu vimechaguliwa.

- `Chagua vitu` (inaruka vitu vikiwa tayari vimechaguliwa)

### MOVE

Majina mafupi: `M`.

- `Chagua vitu`
- `Bainisha nukta ya msingi [Umbali (D)]`, `Bainisha nukta ya pili`
- `D`: `Bainisha umbali wa kusogea`, unaoandikwa kama `dx,dy`.

### COPY

Majina mafupi: `CO`, `CP`. Nakala nyingi kama unavyotoa nukta.

`Safu (A)` kwenye kidokezo cha nukta ya pili hutengeneza safu mlalo kwa mara moja: toa idadi ya vitu (asili inahesabiwa kama moja), kisha nukta ambapo nakala ya kwanza inakwenda; nyingine zinafuata kwa nafasi ile ile. `Inafaa (F)` inafanya nukta hiyo kuwa mahali pa nakala ya mwisho, na nyingine zikisambazwa sawasawa katikati.

- `Chagua vitu`
- `Bainisha nukta ya msingi [Umbali (D)]`
- `Bainisha nukta ya pili [Tendua (U)]`, inarudiwa hadi Enter. `U` inarudisha nakala ya mwisho.

### ROTATE

Majina mafupi: `RO`.

- `Chagua vitu`, `Bainisha nukta ya msingi`
- `Bainisha pembe ya mzunguko <pembe ya mwisho>`: digrii, chanya kinyume cha saa; au bofya nukta ili kuzungusha kuelekea huko.

### SCALE

Majina mafupi: `SC`.

- `Chagua vitu`, `Bainisha nukta ya msingi`
- `Bainisha kipengele cha skeli`: andika kipengele kama `0.5` au `2`. Nukta unayobofya inatoa umbali wake kutoka nukta ya msingi kama kipengele.

### MIRROR

Majina mafupi: `MI`.

- `Chagua vitu`
- `Bainisha nukta ya kwanza ya mstari wa kuakisi`, `Bainisha nukta ya pili ya mstari wa kuakisi`
- `Futa vitu vya chanzo? [Ndiyo/Hapana] <N>`

### ALIGN

Majina mafupi: `AL`; au {{ui:Badilisha}} › {{ui:Zaidi}} › {{ui:Panga}}.

- `Chagua vitu`
- `Bainisha nukta ya kwanza ya chanzo`, `Bainisha nukta ya kwanza ya lengwa`
- `Bainisha nukta ya pili ya chanzo (Enter kuendelea)`, `Bainisha nukta ya pili ya lengwa`
- `Bainisha nukta ya tatu ya chanzo (Enter kuendelea)`, `Bainisha nukta ya tatu ya lengwa`
- Kwa jozi mbili: `Pima vitu kwa msingi wa nukta za upangaji? [Ndiyo/Hapana] <N>`

Angalia [Panga vitu](topic:modify-objects#align-objects).

### ALIGNTO

- `Chagua vitu` (au uteuzi), `Panga [Kushoto (L)/Katikati (C)/Kulia (R)/Juu (T)/Kati (M)/Chini (B)] <Kushoto>`, `Kwa [Uteuzi (S)/Kwanza (F)/Mwisho (L)/Nukta (P)] <Uteuzi>`; `P` inauliza nukta. Uteuzi unabaki.

### DISTRIBUTE

- `Chagua vitu` (vitatu angalau), `Sambaza [Kwa usawa (H)/Kwa wima (V)] <Kwa usawa>`, `Panga sawasawa [Katikati (C)/Mapengo (G)] <Mapengo>`. Vilivyo nje viwili vinabaki; uteuzi unabaki.

### ALIGNPANEL

Majina mafupi: `ALP`; au {{ui:Badilisha}} › {{ui:Zaidi}} › {{ui:Panga na gawanya}}. Inafungua paneli inayoendesha ALIGNTO na DISTRIBUTE kwa kubofya.

### LASER

Majina mafupi: `LASERCUT`; au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Laser…}}. Inafungua paneli ya Laser juu ya mchoro: kila tabaka linafanya nini (kukata, kukwangua, kuchonga, kujaza, picha), onyesho la kukagua, G-code ya GRBL ya kuhifadhi, na kuweka fremu na kutuma kupitia Web Serial. Angalia [Tuma mchoro kwa leza](topic:laser-cutting).

### STRETCH

Majina mafupi: `S`; au {{ui:Nyoosha}}. `Chagua vitu vya kunyoosha`: buruta madirisha ya kuvuka juu ya ncha ili kusogeza (au andika `C`). `Bainisha nukta ya msingi [Umbali (D)]`, `Bainisha nukta ya pili`. Nukta zilizo ndani ya madirisha zinasogea: ncha za mistari, nukta za polilaini (sehemu za tao zinabaki na urefu wake), nukta za vipimo; madurara, duaradufu, maandishi, nukta na bloku zinasogea zote wakati katikati au nukta ya kuingiza iko ndani. Uteuzi uliofanywa kabla ya amri unahifadhi madirisha ya kuvuka (na lasso) yaliyoufanya, kwa hiyo yananyoosha vilevile. Bila dirisha, vitu vinasogea vyote.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Majina mafupi: `AR`; au {{ui:Safu ya nakala}}. `Chagua vitu`, kisha `Ingiza aina ya safu [Mstatili (R)/Polar (PO)] <Mstatili>` (ARRAY pekee).

- Mstatili huanza na safu wima 4 × safu mlalo 3, zimetenganishwa kwa mara 1.5 ya ukubwa wa vitu, kwenye onyesho la kukagua. `Ingiza chaguo [Idadi (COU)/Nafasi (S)/Safu wima (COL)/Safu mlalo (R)/Toka (X)] <X>`: `COU` inauliza safu wima na safu mlalo, `S` umbali kati ya safu wima na kati ya safu mlalo (hasi huenda kushoto au chini), `COL` na `R` kila moja kwa mwelekeo mmoja.
- Polar inauliza `Bainisha nukta ya katikati ya safu`, huanza na vipengee 6 kuzunguka kote, vimezungushwa. `Ingiza chaguo [Vipengee (I)/Jaza pembe (F)/Zungusha vipengee (ROT)/Toka (X)] <X>`: `I` vipengee, `F` pembe ya kujaza (+ kinyume cha saa, − kwa saa), `ROT` Ndiyo au Hapana.
- {{key:Enter}} (Toka) inatengeneza nakala, kama vitu vya kawaida. Hatua moja ya kutendua.
- `AS` (Associative) inabadilisha kati ya nakala za kawaida na safu inayobaki inaweza kuhaririwa: kitu kimoja unachobadilisha baadaye kwa {{cmd:ARRAYEDIT}}, kwa mipini yake au kwenye Sifa. Chaguo linakumbukwa ({{cmd:ARRAYASSOCIATIVITY}}); linaanza kwa nakala za kawaida.

### ARRAYPATH

Nakala kando ya mkunjo. `Chagua vitu`, kisha `Chagua mkunjo wa njia`: mstari, tao, duara, duaradufu, polilaini au spline (si mojawapo ya vitu vinavyopangwa). Njia inaanza kwenye ncha yake iliyo karibu zaidi na vitu, na kipengee cha kwanza ni vitu viliko.

- `Ingiza chaguo [Mbinu (M)/Vipengee (I)/Nafasi (SP)/Panga (AL)/Associative (AS)/Toka (X)] <X>`, pamoja na onyesho la kukagua. `M`: `Gawanya` inasambaza vipengee sawasawa kwenye njia nzima, `Pima` huweka kimoja kila umbali fulani kando yake. `I`: idadi ya vipengee (kwa Pima, 0 maana yake kama vinavyotoshea; namba inayopita mwisho wa njia inazuiliwa kwa kile kinachotoshea). `SP`: umbali kati ya vipengee kando ya njia (inabadilisha kuwa Pima). `AL`: Ndiyo inageuza kila kipengee kufuata njia, Hapana inavibakiza wima.
- `AS` kama katika {{cmd:ARRAY}}. Ikiwa imewashwa, safu inahifadhi nakala yake ya umbo la njia: kuhariri mkunjo wa njia baadaye hakusogezi vipengee.
- Inakataa njia isiyo mkunjo, na kipengee kimoja.

### ARRAYEDIT

Hubadilisha safu iliyotengenezwa kwa Associative. `Chagua safu` (au chagua kwanza). Inaonyesha safu ilivyo sasa, kisha inauliza hadi {{key:Enter}}:

- Mstatili: `COL` safu wima na nafasi yake, `R` safu mlalo na nafasi yake, `A` pembe safu wima zinakokwenda.
- Polar: `I` vipengee, `F` pembe ya kujaza, `ROT` zungusha vipengee Ndiyo au Hapana.
- Njia: `M` Gawanya au Pima, `I` vipengee, `SP` nafasi, `AL` panga na njia.
- `S` (Chanzo) inafungua vitu ambavyo safu inavirudia, peke yake, kama mhariri wa bloku. Chora na hariri hapo; {{cmd:ARRAYCLOSE}} inahifadhi au kutupa, na kila kipengee kinafuata.
- `REP` (Badilisha): `Chagua vitu vya kubadilisha`, `Bainisha nukta ya msingi ya vitu vya kubadilisha`, kisha bofya vipengee vya kubadilisha, {{key:Enter}}. Vipengee hivyo vinaonyesha mbadala; vitu vya mbadala vinatoka kwenye mchoro na kuishi kwenye safu. `RES` (Weka upya) inaonyesha vitu vya chanzo kwenye kila kipengee tena.
- Kila badiliko ni hatua moja ya kutendua. Inakataa nakala za kawaida, marejeo ya bloku ya kawaida, na safu kwenye tabaka lililofungwa.

Nambari hizo hizo ziko kwenye Sifa chini ya {{ui:Safu ya nakala}}, na safu ina mipini: nukta yake ya msingi inaisogeza, mpini kwenye kipengee cha pili unaweka nafasi, mpini uliopita kipengee cha mwisho unaweka idadi (polar: kipengee cha pili kinaweka vipengee vingapi, cha mwisho pembe ya kujaza). {{cmd:EXPLODE}} inageuza safu kurudi nakala za kawaida.

### ARRAYCLOSE

Inamaliza {{cmd:ARRAYEDIT}} Chanzo: `Hifadhi mabadiliko ya vitu vya chanzo vya safu? [Hifadhi/Tupa] <Hifadhi>`. Inasema hivyo wakati hakuna vitu vya chanzo vya safu vilivyofunguliwa. {{cmd:BCLOSE}} inafanya jambo lilelile.

### ARRAYASSOCIATIVITY

`Ingiza thamani mpya ya ARRAYASSOCIATIVITY (1 = safu zinabaki zinaweza kuhaririwa, 0 = nakala tupu)`. Huweka ambacho {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR na {{cmd:ARRAYPATH}} zinaanza nacho; chaguo lao `AS` linabadilisha mpangilio uleule. Linakumbukwa kwenye kivinjari hiki.

### OFFSET

Majina mafupi: `O`. Mistari, matao, madurara na polilaini.

Mahali polilaini inasogea nje na sehemu zake zilizonyooka zinatengana kwenye kona, {{cmd:OFFSETGAPTYPE}} inaamua jinsi pengo linavyofungwa.

- `Bainisha umbali wa kuhamisha [Kupitia (T)] <umbali wa mwisho, au Kupitia>`
- `Chagua kitu cha kuhamisha`, kisha `Bainisha nukta upande wa kuhamisha` (au, kwa Kupitia, `Bainisha nukta ya kupitia`), inarudiwa hadi Enter.

### OFFSETGAPTYPE

- `Pengo za kona za nje za OFFSET: 0 refusha, 1 fillet, 2 chamfer`: jinsi {{cmd:OFFSET}} inavyofunga mapengo kwenye kona za nje za polilaini. `0` inarefusha sehemu hadi zikutane (mpangilio wa kuanzia), `1` inazifunga kwa tao kuzunguka kona ya zamani, `2` kwa kukatwa kwa mstari wa moja kwa moja. Kona za ndani na sehemu za tao hazibadiliki. Inahifadhiwa kwa kikao hiki.

### EXTRIM

{{cmd:EXTRIM}} inapunguza kila kitu upande mmoja wa ukingo. Chagua ukingo wa kukatia (mstari, tao, duara, polilaini, duaradufu, spline au mstari wa ujenzi), kisha chagua nukta upande wa kusafisha: kila mstari, tao, duara, polilaini na mstari wa ujenzi unaovuka ukingo unapoteza sehemu yake upande huo, ambako unaanzia kwenye ukingo. Unapochagua upande, vipande vitakavyoondoka vinafuata kielekezi. Kwa ukingo uliofungwa, pande ni ndani na nje. Vitu vinavyogusa ukingo tu, na maandishi, mistari ya kivuli, spline na duaradufu zinazouvuka, vinabaki kama vilivyo. Hatua moja ya kutendua.

### TRIMEXTENDMODE

- `Ingiza thamani mpya ya TRIMEXTENDMODE (1 Haraka, 0 Kawaida)`: jinsi {{cmd:TRIM}} na {{cmd:EXTEND}} zinavyoanza. `1` Haraka: kila kitu ni ukingo wa kukatia au mpaka. `0` Kawaida: zinauliza kingo kwanza. Pia `(setvar "TRIMEXTENDMODE" 0)` katika LISP.

### TRIM

Majina mafupi: `TR`. Inachapisha `Mipangilio ya sasa: hali ya Haraka (TRIMEXTENDMODE 1), kingo: Usirefushe, kuburuta kunachora njia` kwanza. Katika hali ya Haraka kila kitu kinachoonekana ni ukingo wa kukatia, na kitu ambacho hakivukwi na chochote kinafutwa; katika hali ya Kawaida inauliza kwanza `Chagua kingo za kukatia (Enter = kila kitu)` na inakata tu hapo.

- `Chagua kitu cha kupunguza au shikilia Shift kurefusha [Kingo za kukatia (T)/Uzio (F)/Kuvuka (C)/Hali (O)/Ukingo (E)/Futa (R)/Tendua (U)]`, inarudiwa: bofya kipande cha kuondoa (kinaonekana kijivu na chenye vistari kinapokaa kielekezi juu yake), buruta njia kupitia vipande kadhaa (vyote kwa hatua moja), au bofya sehemu mbili tupu kwa uzio kati yake. {{key:Shift}} inarefusha badala yake. `T` inachagua kingo za kukatia (hali ya Kawaida), `F` inauliza nukta za uzio, `C` pembe mbili za dirisha (vipande vilivyo ndani kwa sehemu vinaondoka), `O` inauliza `Ingiza chaguo la hali ya trim [Haraka/Kawaida]`, `E` inauliza `Ingiza hali ya kurefusha ukingo unaodokezwa [Refusha/Usirefushe]` (EDGEMODE), `R` inafuta vitu utakavyochagua, `U` inatendua chaguo la mwisho au kuburuta. Enter inamaliza. Angalia [Trim na extend](topic:trim-and-extend).
- Bofya kwenye mistari ya kivuli hukata mistari hiyo: kingo za kukatia zinagawanya eneo lenye mistari, na kipande ulichobofya kinaondolewa (hakuna mstari uliochorwa unabaki mahali pake). Mistari ya kivuli inabaki na mfumo au mteremko wake; mistari ya kivuli iliyounganishwa na mpaka wake haibaki imeunganishwa baadaye, kwa sababu haijaijaza tena. Inasema hivyo wakati hakuna ukingo wa kukatia unaogawanya mistari ya kivuli hapo, wakati bofya iko nje ya mistari ya kivuli, na wakati hakuna kitakachobaki (tumia {{cmd:ERASE}}). Njia iliyoburutwa au uzio hauikati mistari ya kivuli.

### EXTEND

Majina mafupi: `EX`. Sawa na TRIM kwa mpangilio wa kinyume: `Chagua kitu cha kurefusha au shikilia Shift kupunguza [Kingo za mpaka (B)/Uzio (F)/Kuvuka (C)/Hali (O)/Ukingo (E)/Tendua (U)]`. Bofya inarefusha ncha iliyo karibu zaidi hadi mpaka unaofuata; njia au uzio uliouburutwa unarefusha kila kitu unachokivuka; {{key:Shift}} inapunguza. `B` inachagua kingo za mpaka (hali ya Kawaida). Hali na Ukingo vinashirikiwa na TRIM.

### LINKVIEWS

Majina mafupi: `SYNCVIEWS`; au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Unganisha mwonekano wa sehemu}}, au ikoni ya kiungo kwenye vichupo vya mchoro. `Unganisha mwonekano wa sehemu [ON/OFF]` (Enter inachukua hali nyingine): wakati umewashwa, kusogeza au kukuza kwenye sehemu hai kunasogeza kila sehemu inayoonyesha aina ile ile ya nafasi. Angalia [Gawanya skrini](topic:split-screen).

### OPENIN3D

Hakuna majina mafupi; au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Fungua katika ModelCraft}}, ambapo programu ya uundaji wa 3D inapokea mchoro uliokabidhiwa. Inafungua hapo kwenye kichupo kipya, kama DWG (hakuna kinachopakiwa). Kivinjari kikizuia kichupo, inasema hivyo.

### LASSOMODE

`Ingiza thamani mpya ya LASSOMODE (1 = lasso, 0 = mstatili)`: kile kinachochorwa kwa kubonyeza na kuburuta mahali tupu. Sawa na Mipangilio › CadCraft › Kuburuta kuchagua. Angalia [Uteuzi wa lasso](topic:lasso-selection).

### FILLET

Majina mafupi: `F`. Mistari, matao, madurara na polilaini. Inachapisha `Mipangilio ya sasa: Hali = TRIM, Radiasi = 0` kwanza.

- `Chagua kitu cha kwanza [Tendua (U)/Polilaini (P)/Radiasi (R)/Trim/Nyingi (M)]`
  - `R` inauliza `Bainisha radiasi ya fillet <ya mwisho>`. `T` inauliza `Ingiza chaguo la hali ya Trim [Trim/Hakuna trim]`: kwa Hakuna trim vitu vinabaki kama vilivyo na tao tu linaongezwa.
  - `M` inaendeleza amri kwa kona zaidi hadi {{key:Enter}}; `U` inarudisha kona ya mwisho bila kuacha amri.
  - `P` inauliza `Chagua polilaini ya 2D [Radiasi]` na inazungusha kila kona ambapo sehemu mbili za moja kwa moja zinakutana. Fillets ambazo tayari ziko zinabadilishwa na radiasi mpya; radiasi 0 inaziondoa. Kona ambazo pande zake ni fupi mno kwa radiasi zinaachwa na kuhesabiwa.
- `Chagua kitu cha pili au shikilia Shift kutumia kona [Radiasi]`. Shikilia {{key:Shift}} unapobofya kwa kona kali, bila kujali radiasi.

Bofya kila kitu kwenye sehemu unayotaka kuhifadhi. Mistari miwili isiyokutana inarefushwa. Mistari miwili sambamba inapata nusu duara kuvuka pengo, mwishoni mwa mstari wa kwanza ulio karibu na bofya yako. Duara halikatwi kamwe. Sehemu mbili za polilaini moja zilizo karibu zinapata tao ndani ya polilaini; polilaini na kitu kingine hufanya kazi pale mkato unapotua kwenye sehemu ya kwanza au ya mwisho ya polilaini.

### CHAMFER

Majina mafupi: `CHA`. Mistari na sehemu zilizonyooka za polilaini. Inachapisha umbali wa sasa (au urefu na pembe) kwanza.

- `Chagua mstari wa kwanza [Tendua (U)/Polilaini (P)/Umbali (D)/Pembe (A)/Trim/Mbinu (E)/Nyingi (M)]`
  - `D` inauliza `Bainisha umbali wa kwanza wa chamfer <wa mwisho>` na `Bainisha umbali wa pili wa chamfer <wa kwanza>`: wa kwanza unakatwa kutoka mstari wa kwanza unaochagua, wa pili kutoka mwingine.
  - `A` inauliza `Bainisha urefu wa chamfer kwenye mstari wa kwanza` na `Bainisha pembe ya chamfer kutoka mstari wa kwanza`.
  - `E` (Mbinu) inachagua ni ipi kati ya hizo mbili chamfer inayofuata inatumia. `T`, `M`, `U` na `P` zinafanya kazi kama katika {{cmd:FILLET}}.
- `Chagua mstari wa pili au shikilia Shift kutumia kona [Umbali (D)/Pembe (A)/Mbinu (E)]`. {{key:Shift}}+bofya inatengeneza kona kali.

Umbali mrefu kuliko mstari unakataliwa (`Umbali ni mkubwa mno.`).

### BREAK and BREAKATPOINT

Majina mafupi: `BR`. `Chagua kitu` (mahali unapobofya ni nukta ya kwanza), `Bainisha nukta ya pili ya kuvunja [Nukta ya kwanza (F)]`; `F` inauliza `Bainisha nukta ya kwanza ya kuvunja` na `Bainisha nukta ya pili ya kuvunja`. Sehemu iliyo kati yake inaondoka; kwenye duara, kinyume cha saa kutoka nukta ya kwanza. BREAKATPOINT inauliza `Bainisha nukta ya kuvunja` na kugawanya kitu kuwa mbili hapo (si duara).

### LENGTHEN

Majina mafupi: `LEN`. `Chagua kitu cha kupima [Tofauti (DE)/Asilimia (P)/Jumla (T)/Nguvu (DY)]`: bofya moja inachapisha `Urefu wa sasa` (na pembe iliyojumuishwa ya tao) na kuuliza tena. `DE` inauliza `Ingiza urefu wa tofauti (hasi unafupisha) [Pembe]`, `P` `Ingiza asilimia ya urefu`, `T` `Bainisha urefu wa jumla [Pembe]`, `DY` buruta. Kisha `Chagua kitu cha kubadilisha [Tendua (U)]`, inarudiwa: ncha iliyo karibu zaidi na bofya inasogea. Mistari, matao na polilaini wazi.

### JOIN

Majina mafupi: `J`. `Chagua vitu vya kuunganisha`. Mistari, matao na polilaini wazi zinazokutana ncha kwa ncha zinakuwa polilaini (zimefungwa mnyororo ukifunga); mistari iliyo kwenye mstari mmoja inakuwa mstari mmoja; matao ya duara moja yanakuwa tao moja au duara. Historia inasema vitu vingapi viliunganishwa na vingapi havikuunganishwa.

### MATCHPROP

Majina mafupi: `MA`, `PAINTER`. `Chagua kitu cha chanzo`, kisha `Chagua vitu vya lengwa [Mipangilio (S)]` na {{key:Enter}}. Hunakili tabaka na rangi, na kati ya vitu vya aina moja urefu wa maandishi na upana, ukubwa wa vipimo, au mfumo wa mistari ya kivuli. `S` inauliza `Washa au zima sifa [Rangi (C)/Tabaka (LA)/Maandishi (T)/Kipimo (D)/Mistari ya kivuli (H)]`, inarudiwa hadi {{key:Enter}}; chaguo linakumbukwa kwa kikao.

### EXPLODE

Majina mafupi: `X`. Polilaini zinakuwa mistari na matao, marejeo ya bloku yanakuwa vitu vyake, vipimo vinakuwa mistari, vichwa vya mishale na maandishi. Safu inayoweza kuhaririwa ({{cmd:ARRAYEDIT}}) inakuwa nakala za kawaida za vitu vyake.

- `Chagua vitu`

## Ubao wa kunakili

Ubao wa kunakili wa CadCraft wenyewe: unafanya kazi ndani ya mchoro, kati ya michoro na kati ya vichupo vya CadCraft kwenye kivinjari hiki. Angalia [Nakili, bandika na rudufu](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, au {{ui:Nakili}} kwenye kikundi cha {{ui:Hariri}}. Inanakili vitu kwenye ubao wa kunakili, pamoja na bloku na matabaka wanayotumia. Vitu vinabaki vimechaguliwa.

- `Chagua vitu vya kunakili` (inaruka vitu vikiwa tayari vimechaguliwa)

### CUTCLIP

{{key:Mod+X}}, au {{ui:Kata}} kwenye menyu ya {{ui:Zaidi}}. Inanakili vitu kwenye ubao wa kunakili, kisha inavifuta (hatua moja ya kutendua).

- `Chagua vitu vya kukata` (inaruka vitu vikiwa tayari vimechaguliwa)

### COPYBASE

Inanakili vitu kwenye ubao wa kunakili kwa nukta ya msingi unayochagua; kubandika kunaweka nukta hiyo mahali pake.

- `Bainisha nukta ya msingi`
- `Chagua vitu vya kunakili`

### PASTECLIP

{{key:Mod+V}}, au {{ui:Bandika}} kwenye kikundi cha {{ui:Hariri}}. Nakala inafuata kielekezi, ikining'inia kutoka kona ya chini kushoto ya mipaka yake (au katikati yake, au nukta ya `COPYBASE`; angalia [Mipangilio ya CadCraft](topic:settings)).

- `Bainisha nukta ya kuingiza`

Vitu vilivyobandikwa vimechaguliwa. Bloku ambayo mchoro tayari unayo kwa jina lilelile inahifadhi ufafanuzi wa mchoro huu.

Ikiwa eneo lililonakiliwa kwenye MarkupCraft ni jipya kuliko kile CadCraft ilichonakili (na lina chini ya saa 6), {{key:Mod+V}} na `PASTECLIP` zinabandika eneo hilo badala yake: angalia `PASTEAREA`.

### PASTEAREA

Majina mafupi: `PAREA`. {{ui:Bandika eneo lililonakiliwa}} kwenye menyu ya {{ui:Zaidi}}. Inabandika eneo lililonakiliwa kwa {{ui:Copy area}} kwenye MarkupCraft kama picha kwa ukubwa wake halisi. Angalia [Picha kwenye mchoro](topic:pictures).

- `Bainisha kona ya kushoto chini ya eneo lililonakiliwa`
- `Pima ukubwa wake wa karatasi kwa (100 kwa karatasi ya 1:100; Nukta (P): nukta mbili juu yake na umbali wao halisi) [Nukta (P)] <1>` (ni pale tu karatasi isipokuwa na skeli ya mchoro): namba, {{key:Enter}} kwa ukubwa wa karatasi, au `P`, kisha `Nukta ya kwanza kwenye eneo lililobandikwa`, `Nukta ya pili kwenye eneo lililobandikwa` na umbali wao halisi.

### PASTEORIG

{{key:Mod+Shift+V}}, au {{ui:Bandika mahali pale}} kwenye menyu ya {{ui:Zaidi}}. Inabandika kwenye viwianishi ambavyo vitu vilinakiliwa kutoka. Haiulizi chochote.

### DUPLICATE

Majina mafupi: `DUP`. {{key:Mod+D}}, au {{ui:Rudufu na uhamishe}} kwenye menyu ya {{ui:Zaidi}}. Nakala ya vitu inasogea pamoja na kielekezi kutoka mahali ilipo; {{key:Esc}} haiachi chochote. Haitumii ubao wa kunakili.

- `Chagua vitu vya kurudufu` (inaruka vitu vikiwa tayari vimechaguliwa)
- `Bainisha mahali nakala inapokwenda (Esc haiachi chochote)`: bofya, andika nukta, `@dx,dy` (kutoka mahali kielekezi kilipokuwa), au umbali kuelekea kielekezi.

### SELECT

Inauliza `Chagua vitu` (pamoja na kila chaguo hapa chini) na kuacha ulichochagua kimechaguliwa, kwa amri inayofuata au kwa `P` baadaye.

### QSELECT

Majina mafupi: `QS`. Kwenye kivinjari, kisanduku cha mazungumzo cha {{ui:Uteuzi wa haraka}} (angalia [Chagua vitu](topic:select-objects#select-by-a-rule-quick-select)). Bila hicho, mstari wa amri unauliza `Ingiza aina ya kitu`, `Ingiza sifa`, `Ingiza kiendeshaji [=/<>/>/</*/Chagua zote] <=>` na `Ingiza thamani`. Vinavyolingana vinakuwa uteuzi.

### SELECTSIMILAR

Majina mafupi: `SIM`. `Chagua vitu [Mipangilio (SE)]` (au uteuzi wa sasa): inachagua kila kitu cha aina ile ile chenye tabaka na rangi ile ile (na jina la bloku, mfumo wa mistari ya kivuli). `SE` inauliza `Washa au zima sifa [Tabaka (LA)/Rangi (CO)/Jina (NA)/Mfumo (PA)/Urefu (HE)]`, inarudiwa hadi {{key:Enter}}.

### FIND

Hakuna majina mafupi; au {{ui:Hariri}} › {{ui:Zaidi}} › {{ui:Tafuta na ubadilishe}}. Kwenye kivinjari, kisanduku cha {{ui:Tafuta na ubadilishe}} (angalia [Ongeza maandishi na lebo](topic:text#find-and-replace-words)). Bila hicho: `Ingiza maandishi ya kutafuta`, kisha `Ingiza maandishi ya kubadilisha (Enter: chagua kilichopatikana)`. Inatafuta kwenye maandishi, thamani za sifa na maandishi ya kipimo, kwenye kichupo kilicho wazi au kwenye uteuzi.

### SELECTALL and DESELECT

`SELECTALL` (majina mafupi `AI_SELALL`, {{key:Mod+A}}) inachagua kila kitu unachoweza kuhariri kwenye kichupo kilicho wazi. `DESELECT` (majina mafupi `AI_DESELECT`, `SELECTNONE`; au {{key:Esc}}) inaondoa uteuzi.

## Vipimo

### DIMLINEAR

Majina mafupi: `DLI`, `DIMLIN`. Umbali wa mlalo au wima.

- `Bainisha asili ya kwanza ya mstari wa upanuzi [Chagua kitu (S)]` (Enter au `S`: `Chagua kitu cha kupima`, kisha bofya mstari, tao, duara au sehemu ya polilaini)
- `Bainisha asili ya pili ya mstari wa upanuzi`
- `Bainisha mahali pa mstari wa kipimo [Maandishi (T)/Mlalo (H)/Wima (V)/Zungushwa (R)]`. `T` inauliza maandishi (`<>` ni kipimo kilichopimwa), `H` na `V` zinaweka mwelekeo, `R` inauliza `Bainisha pembe ya mstari wa kipimo <0>`.

### DIMALIGNED

Majina mafupi: `DAL`, `DIMALI`. Umbali halisi kati ya nukta mbili.

- Asili kama katika {{cmd:DIMLINEAR}}, kisha `Bainisha mahali pa mstari wa kipimo [Maandishi (T)]`.

### DIMANGULAR

Majina mafupi: `DAN`, `DIMANG`.

- `Chagua tao, duara au mstari, au Enter kwa kilele`
- Tao: pembe yake. Duara: `Bainisha nukta ya pili ya pembe`. Mstari: `Chagua mstari wa pili`. Enter: `Bainisha kilele cha pembe`, `Bainisha nukta ya kwanza ya pembe`, `Bainisha nukta ya pili ya pembe`.
- `Bainisha mahali pa mstari wa kipimo [Maandishi (T)]`: bofya ndani ya pembe ili kupima.

### DIMRADIUS and DIMDIAMETER

Majina mafupi: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Chagua tao au duara`, kisha `Bainisha mahali pa mstari wa kipimo [Maandishi (T)]`.

### DIMCONTINUE

Majina mafupi: `DCO`, `DIMCONT`. Inaendelea kutoka kipimo cha mstari au kilichopangwa cha mwisho kilichotengenezwa (au inauliza `Chagua kipimo cha mstari au kilichopangwa`).

- `Bainisha nukta ya pili ya mstari wa upanuzi [Tendua (U)]`, inarudiwa hadi Enter.

### DIMBASELINE

Majina mafupi: `DBA`, `DIMBASE`. Kama {{cmd:DIMCONTINUE}}, lakini kila kipimo kinaanza kutoka asili ya kwanza na kinapangwa mbali zaidi.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Hakuna majina mafupi. Kila moja inauliza `Ingiza thamani mpya ya … <ya sasa>` na inaweka ukubwa huo kwa vipimo **vipya**: skeli ya jumla, kimo cha maandishi, ukubwa wa mshale, nafasi za desimali (hadi 8), pengo kuzunguka maandishi, upanuzi zaidi ya mstari wa kipimo, umbali kutoka asili. Angalia [Weka ukubwa wa vipimo](topic:dimension-settings).

### DIMLUNIT

Mpangilio wa kipimo: muundo wa urefu wa vipimo vipya tu (1 kisayansi, 2 desimali, 3 uhandisi, 4 usanifu majengo, 5 sehemu).

### DIMSTYLE and -DIMSTYLE

Majina mafupi: `DST`, `DDIM`, `D`. Meneja wa mitindo ya vipimo: {{ui:Weka ya sasa}}, {{ui:Mpya…}}, {{ui:Badilisha…}}, {{ui:Badili jina…}}, {{ui:Futa}}, {{ui:Linganisha…}}, {{ui:Tumia kwa zilizochaguliwa}}. `-DIMSTYLE` kwenye mstari wa amri: `Mtindo wa kipimo [Rejesha (R)/Hifadhi (S)/Futa (D)/Tumia (A)/Linganisha (C)/Badili jina (N)/Orodhesha (L)]`. Angalia [Weka ukubwa wa vipimo](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Hariri kipimo [Nyumbani (H)/Maandishi mapya (N)/Zungusha (R)/Mteremko (O)] <Nyumbani>`, kisha vipimo (au vilivyochaguliwa tayari). Maandishi mapya inauliza maandishi (`<>` = kipimo); Zungusha kwa pembe (0 huweka maandishi nyuma); Mteremko kwa pembe ya mistari ya upanuzi kutoka mhimili wa X (Enter = hakuna; vipimo vya mstari na vilivyopangwa pekee). `DIMTEDIT` (`DIMTED`): `Maandishi ya kipimo [Kushoto (L)/Kulia (R)/Katikati (C)/Nyumbani (H)/Pembe (A)] <Katikati>`. Angalia [Weka ukubwa wa vipimo](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Majina mafupi: `DTU`. `Vitengo kwenye maandishi ya vipimo vipya [Vitengo vya mchoro (D)/mm/cm/m/km]`, au ikiwa vipimo vimechaguliwa `Vitengo kwenye maandishi ya vipimo vilivyochaguliwa`. Huandika urefu uliopimwa kwa kitengo hicho na kitengo kinafuata (DIMLFAC na kiambishi cha DIMPOST); `D` inarudi kwenye vitengo vya mchoro. Angalia [Vipimo kwa mm, cm, m au km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Majina mafupi: `RC`. Inachapisha `Urefu wa tao: … Aina: …`, kisha `Bainisha nukta ya kwanza [Urefu wa tao (A)/Kitu (O)/Mstatili (R)/Poligoni (P)/Mkono (F)]`. Mstatili unauliza `Bainisha kona nyingine`; Poligoni `Bainisha nukta inayofuata (Enter inafunga wingu) [Tendua (U)]`; Mkono unafuata kielekezi hadi bofya au {{key:Enter}}; `O` inauliza `Chagua kitu` na `Badili mwelekeo? [Ndiyo/Hapana] <N>` na kugeuza kitu kuwa wingu. `A` inauliza `Bainisha urefu wa kila tao`. `R`, `P` na `F` huchagua aina ya wingu unaofuata. Matokeo ni polilaini iliyofungwa ya matao.

### MLEADER

Majina mafupi: `MLD`; au {{ui:Kiongozi}}. `Bainisha mahali pa ncha ya mshale wa kiongozi [Ukubwa wa mshale (A)/Umbali wa kutua (L)]`, `Bainisha mahali pa kutua kiongozi`, kisha maandishi kwenye kisanduku papo hapo (au, bila hayo, `Ingiza maandishi (mstari tupu unamaliza)`). Yanahifadhiwa kama multileader halisi kwenye DWG; DXF inahifadhi mistari, mshale na maandishi inayoyachora.

## Parametriki

Angalia [Weka vizuizi kwenye mchoro](topic:constraints) na [Tumia vigezo na milinganyo](topic:parameters). Vizuizi vinafanya kazi kwenye kichupo cha {{ui:Modeli}}.

### GEOMCONSTRAINT and the GC commands

Majina mafupi `GCON`: `Ingiza aina ya kizuizi [Mlalo/Wima/Pembe-kulia/PAsambamba/Tanjenti/Kukutana/CONkatikati/COLmstari moja/Ulinganifu/Sawa/Rekebisha] <Mlalo>`, kisha maswali ya amri hiyo.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Chagua kitu [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Chagua kitu cha kwanza`, `Chagua kitu cha pili` (la pili ndilo linalosogea).
- {{cmd:GCCOINCIDENT}}: `Chagua nukta ya kwanza [Kitu (O)/Kiotomatiki (A)] <Kitu>`, `Chagua nukta ya pili [Kitu (O)] <Kitu>`.
- {{cmd:GCFIX}}: `Chagua nukta [Kitu (O)] <Kitu>`.
- {{cmd:GCSYMMETRIC}}: `Chagua kitu cha kwanza [2Points] <2Points>`, `Chagua kitu cha pili`, `Chagua mstari wa ulinganifu`.

### DIMCONSTRAINT and the DC commands

Majina mafupi `DCON`: `Chagua kipimo cha kuunganisha cha kubadilisha [Mstari (LI)/Mlalo (H)/Wima (V)/Kilichopangwa (AL)/Pembe (AN)/Radiasi (R)/Kipenyo (D)/Geuza (C)] <Kilichopangwa>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Bainisha nukta ya kwanza ya kizuizi [Kitu (O)] <Kitu>`, `Bainisha nukta ya pili ya kizuizi`, `Bainisha mahali pa mstari wa kipimo`, `Maandishi ya kipimo <d1=40>` (namba, msemo, au `jina=msemo`).
- {{cmd:DCALIGNED}}: kama hapo juu, na `[Kitu (O)/Nukta na mstari (P)/Mistari miwili (2L)]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Chagua tao au duara`. {{cmd:DCANGULAR}}: `Chagua mstari wa kwanza au tao`, `Chagua mstari wa pili`.
- {{cmd:DCCONVERT}}: `Chagua vipimo vya kubadilisha`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Chagua vitu [Mipangilio (S)]`. `S` inauliza uvumilivu wa umbali na pembe.
- {{cmd:DELCONSTRAINT}} (majina mafupi `DELCON`): `Chagua vitu`; vizuizi vyao vinaondoka.
- {{cmd:CONSTRAINTBAR}} (majina mafupi `CBAR`): `Chagua vitu [Onyesha yote (S)/Ficha yote (H)]`, kisha `[Onyesha (S)/Ficha (H)]`.
- {{cmd:DCDISPLAY}}: `Ingiza chaguo [Onyesha (S)/Ficha (H)]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (majina mafupi `PAR`, `PARAM`) inafungua paneli ya {{ui:Vigezo}}. `-PARAMETERS`: `Ingiza chaguo [Mpya (N)/Hariri (E)/Badili jina (R)/Futa (D)/?] <?>`.

### SWBOUT

Majina mafupi `SWMACRO`. Inapakua makro (.swb) inayojenga upya modeli kama mchoro mmoja wenye vizuizi kwenye SolidWorks. Angalia [Hamisha michoro kwenda na kutoka kwa wahariri wengine wa sehemu](topic:solidworks-sketches).

## Bloku

### ANNOSCALE

Majina mafupi: `CANNOSCALE`. Inasema skeli ya ufafanuzi ya mchoro na ni vitu vingapi vya ufafanuzi vinavyo, kisha inauliza `Skeli mpya ya ufafanuzi`: andika `1:50`, `1:100`, `2:1`, namba tupu (`50` ni 1:50) au jina la mojawapo ya skeli za mchoro. Kila maandishi na kipimo cha ufafanuzi kinabadilishwa ukubwa ili kichapishwe kwa ukubwa uleule kwenye skeli mpya, kwa badiliko moja la kutendua; vitu visivyo vya ufafanuzi vinaachwa. Angalia [Vitengo, karatasi na skeli](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Majina mafupi: `SCALELIST`. `Orodha ya skeli [Ongeza (A)/Hariri (E)/Futa (D)/Orodhesha (L)/Weka upya (R)]` hadi {{key:Enter}}. Ongeza: `Jina la skeli`, `Vitengo vya karatasi`, `Vitengo vya mchoro`. Hariri na Futa zinauliza jina la skeli. Skeli za mchoro zinaingia kwenye orodha za skeli za viewport na chapisho, na zinahifadhiwa pamoja na mchoro. Angalia [Vitengo, karatasi na skeli](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `Nukta ya kwanza ya spline [Mbinu (M)/Kitu (O)] (Nukta za kufaa)`. Kufaa: nukta ambazo mkunjo unapita; `Funga`, `Tendua`, kisha `Tanjenti ya kuanza` na `Tanjenti ya mwisho` (nukta, au {{key:Enter}}). Mbinu › Vilele vya udhibiti inauliza shahada (1 hadi 5) na kuchora kutoka poligoni ya udhibiti. Kitu kinageuza polilaini kuwa spline zinazopita kwenye vilele vyake. `SPLINEDIT` (`SPE`): `[Data ya kufaa/Hariri kilele/geuza kuwa Polilaini/Fungua au Funga/Geuza/Tendua/Toka]`; Data ya kufaa `[Ongeza/Futa/Hamisha/Safisha/Tanjenti/Toka]`; Hariri kilele `[Ongeza nukta ya udhibiti/Hamisha/Uzito/Toka]`. `PEDIT` (`PE`): `[Funga (C)/Fungua (O)/Unganisha (J)/Upana (W)/Kufaa (F)/Spline (S)/Ondoa mkunjo (D)/Ltype gen/Geuza (R)/Tendua (U)/Toka (X)]`, `M` kwa vitu kadhaa; mistari, matao na spline vinatolewa kama polilaini kwanza. Angalia [Spline na polilaini](topic:splines).

### BLOCK

Majina mafupi: `B`, `BMAKE`.

- `Ingiza jina la bloku`. Ikiwepo tayari: `Bloku "…" ipo tayari. Ifafanue upya? [Ndiyo/Hapana] <N>`.
- `Bainisha nukta ya msingi ya kuingiza`
- `Chagua vitu`. Vinabadilishwa na rejeleo moja la bloku mpya.

### WBLOCK

Majina mafupi: `W`, `-WBLOCK`. Inaandika bloku, vitu kadhaa au mchoro mzima kama faili jipya la DWG au DXF. `WBLOCK chanzo [Bloku/Mchoro mzima/Vitu] <Vitu>`:

- **Vitu**: `Bainisha nukta ya msingi ya kuingiza` (inakuwa asili ya mchoro mpya), `Chagua vitu`, kisha `Muundo wa faili [DWG/DXF/R12 DXF]` na `Jina la faili la mchoro mpya`, kisha `Fanya nini na vitu [Bakiza (R)/Geuza kuwa bloku (C)/Futa (D)]`. Geuza inavibadilisha na rejeleo moja la bloku ya jina la faili; Futa inavifuta.
- **Bloku**: `Bloku la kuandika`. Vitu vyake yenyewe, kwa nukta yake ya msingi kama asili, pamoja na bloku zilizo ndani.
- **Mchoro mzima**: kila kitu katika nafasi ya modeli. Karatasi hazijaandikwa; tumia {{cmd:SAVEAS}} kwa nakala inayozihifadhi.

Faili jipya lina matabaka, aina za mistari, maandishi, mitindo ya vipimo na bloku ambazo vitu vyake vinatumia, pamoja na vitengo vya mchoro. Toleo la DWG ni lile ambalo {{cmd:SAVEAS}} ilitumia mara ya mwisho. Kwenye kivinjari faili linapakuliwa; kwenye Studio dirisha la kuhifadhi linafunguka.

### ATTDEF

Majina mafupi: `ATT`, `DDATTDEF`, `-ATTDEF`; au {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Bainisha sifa}}. Inachapisha hali, kisha `Ingiza chaguo la kubadilisha (Enter ikimaliza) [Haionekani (I)/Ya kudumu (C)/Iliyowekwa (P)]`, `Ingiza jina la lebo ya sifa`, `Ingiza kidokezo cha sifa`, `Ingiza thamani ya chaguo-msingi ya sifa` (`Ingiza thamani ya sifa` ikiwa ya kudumu), `Bainisha nukta ya kuanza ya maandishi`, `Bainisha urefu wa maandishi`, `Bainisha pembe ya mzunguko wa maandishi`. {{cmd:BLOCK}} inachukua ufafanuzi wa sifa kuingia kwenye bloku.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, au bofya mara mbili rejeleo lenye sifa; {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Hariri sifa}}): `Chagua rejeleo la bloku lenye sifa`, kisha kisanduku cha {{ui:Hariri sifa}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): rejeleo lilelile, kisha `<kidokezo> (<TAG>) <thamani>` kwa kila sifa; {{key:Enter}} inaweka thamani. Angalia [Sifa](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Sasisha sifa za marejeo ya bloku gani [Jina (N)/Chagua (S)/Zote (A)] <Chagua>`. Thamani zinahifadhiwa; sifa mpya zinapata chaguo-msingi zao, zilizoondolewa zinaondoka, nafasi zinawekwa upya.

### BATTMAN

{{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Meneja wa sifa}}. Kisanduku cha mazungumzo: bloku, sifa (lebo, kidokezo, chaguo-msingi, hali, mpangilio), {{ui:Sasisha marejeo (thamani zimehifadhiwa)}}, {{ui:Tumia}}.

### REFEDIT and REFCLOSE

{{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Hariri papo hapo}}. `REFEDIT`: `Chagua rejeleo la bloku la kuhariri papo hapo` (au uteuzi). `REFCLOSE`: `Hifadhi mabadiliko ya "…" [Hifadhi/Tupa] <Hifadhi>`; baa ya {{ui:Hifadhi bloku}} na {{ui:Tupa}} hufanya jambo lilelile. Mhariri mzima ni hatua moja ya kutendua. Angalia [Sifa](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; au {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Hariri bloku}}. `Ingiza jina la bloku la kuhariri <bloku la rejeleo lililochaguliwa>` linafungua mhariri wa bloku. `BCLOSE` inauliza `Funga mhariri wa bloku juu ya "…" [Hifadhi/Tupa] <Hifadhi>`; {{ui:Hifadhi bloku}} na {{ui:Tupa mabadiliko}} kwenye baa ya juu hufanya jambo lilelile. Kila kitu kilichofanywa kwenye mhariri ni hatua moja ya kutendua.

### VIEWBASE

Majina mafupi: `FLATSHOT`. Mwonekano bapa wa 2D wa miili imara kwenye kichupo cha 3D: `Mwonekano [Mbele (F)/Juu (T)/Kulia (R)/Kushoto (L)/Nyuma (BA)/Chini (BO)/Iso]`, `Mistari iliyofichwa [Onyesha/Ficha]`, skeli (`1:20`, `2:1`; {{key:Enter}} inachukua ile inayotoshea karatasi), kisha katikati ya mwonekano. Rejeleo moja la bloku, kingo zinazoonekana kwenye VIEW-VISIBLE, zilizofichwa zikiwa na vistari kwenye VIEW-HIDDEN. Angalia [Mionekano bapa kwenye karatasi](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Majina mafupi: `-PUBLISH`; au {{ui:Karatasi zote kwenye PDF moja}} kwenye kisanduku cha {{ui:Chapisha kwenda PDF}}. `Karatasi za kuchapisha [Zote (A)/Baadhi (S)]`: {{key:Enter}} inachapisha kila karatasi, `S` inauliza majina yaliyotenganishwa kwa koma. PDF moja, ukurasa na alama ya kitabu kwa kila karatasi. Angalia [Karatasi zote kwenye PDF moja](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Majina mafupi: `SSM`, `SHEETSETMANAGER`. Inakupeleka kwenye sehemu ya {{ui:Seti ya karatasi}} ya paneli ya kushoto: karatasi kutoka michoro mingi, zimenumbwa na kupewa majina, vichwa vyake vya mchoro vinajazwa kutoka kwenye seti, na zinachapishwa kama PDF moja. Angalia [Seti za karatasi](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): chagua DWG au DXF, kisha nukta yake ya kuingiza. {{cmd:XREF}} (`XR`, `-XREF`): `Michoro iliyounganishwa [?/Ambatanisha (A)/Pakia upya (R)/Funga (B)/Tenganisha (D)] (Enter: ?)`; zikiwa zaidi ya kiungo kimoja, chagua mojawapo ya marejeo yake au andika `N` na jina lake. Angalia [Michoro iliyounganishwa](topic:files#linked-drawings-external-references).

### COUNT

Majina mafupi: `BCOUNT`; au {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Hesabu bloku}}. `Chagua rejeleo la bloku la kuhesabu, au [Zote (A)/Hamisha (E)] (Enter: Zote)`: kubofya kunachagua na kuhesabu kila rejeleo la bloku hilo kwenye nafasi hii; {{key:Enter}} au `A` zinaorodhesha zote; `E` kisha `C` (idadi) au `A` (sifa) inapakua CSV. Angalia [Hesabu bloku na hamisha ratiba](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Majina mafupi: `I`, `DDINSERT`.

- `Ingiza jina la bloku au [Faili (F)/Maktaba (L)] <bloku la mwisho>` (herufi kubwa au ndogo hazijali). `F` inauliza DWG au DXF, kisha mchoro mzima au mojawapo ya bloku zake; jina ambalo tayari limetumika linauliza {{ui:Weka zilizopo}} au {{ui:Badili jina}}. `L` inafungua paneli ya maktaba.
- `Bainisha nukta ya kuingiza [Skeli (S)/Zungusha (R)]`. `S` inauliza `Bainisha kipengele cha skeli`, `R` inauliza `Bainisha pembe ya mzunguko`; zote mbili zinakumbukwa.
- Bloku ikiwa tayari imesimama karibu na vitu vinavyojirudia mahali pengine bila hiyo, mstari unasema ni mahali pangapi yanapendekezwa, na kidokezo kinapata `pendekezwa (G)`: `G` inaonyesha; bofya karibu na moja kuiweka bloku hapo, `A` kwa zote, {{key:Enter}} kurudi. Zinachukua mzunguko wa majirani zao na thamani chaguo-msingi za sifa. Michoro yenye vitu zaidi ya 20,000 katika nafasi wazi haitafutwi.
- Kisha `Ingiza <kidokezo> (<TAG>) <chaguo-msingi>` kwa kila sifa ambayo bloku inaiomba. Angalia [Sifa za bloku](topic:attributes).

### LIBRARY

Majina mafupi: `LIB`. Inafungua paneli ya maktaba: weka vipengee, angalia masasisho, sifa za maktaba. Hakuna maswali. Angalia [Ingiza kutoka faili au maktaba](topic:insert-from-file-and-library).

### STEELMEMBER

Majina mafupi: `SMEMBER`; au {{ui:Kipengele cha 3D}} kwenye kichupo cha {{ui:Kawaida (S)}} cha maktaba. `Ukubwa wa sehemu <W12x26>` (kama kichupo kinavyoorodhesha), kisha `Nukta ya kuanza [Safu wima (C)]` na `Nukta ya mwisho`: kipengele kigumu kwenye kichupo cha 3D kati ya nukta mbili, kikikaa ardhini. `C` inauliza nukta ya msingi ya safu wima na urefu wake. Hatua moja ya kutendua. Angalia [Weka sehemu za chuma na vipengele vya kawaida](topic:steel-and-standard-parts).

### PARTSLIST

Majina mafupi: `PLIST`. `Kona ya juu kushoto ya orodha ya vipengele`, kisha `Urefu wa maandishi <2.5>`: inachora jedwali la kila kipengele cha kawaida na sehemu ya chuma kilichowekwa kutoka maktaba (namba za vitu, idadi, kipengele, kiwango, ukubwa, urefu, nyenzo, uzito). Hatua moja ya kutendua. Angalia [Weka sehemu za chuma na vipengele vya kawaida](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Majina mafupi: `PU`. Huondoa ufafanuzi wa bloku ambazo hakuna kinachozitumia. Hakuna maswali.

### DELBLOCKS

Au {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Futa bloku}}. `Chagua bloku la kufuta [Jina (N)/Toka (X)]`: bofya rejeleo la bloku, au `N` kwa orodha ya bloku yenye kichujio (chagua kadhaa), au `X` / {{key:Enter}} kumaliza. Kila rejeleo linaondoka (kwenye modeli, kwenye kila karatasi na ndani ya bloku nyingine), kisha ufafanuzi; mstari wa amri unasema kilichofutwa na kisichoweza kufutwa. Bloku zisizo na jina na michoro iliyounganishwa hazitolewi. Kidokezo kinarudi kwa bloku inayofuata; amri nzima ni hatua moja ya kutendua.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} inabandika ulichonakili ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) kama bloku moja: chagua nukta ya kuingiza, na rejeleo moja la bloku jipya linawekwa hapo, likiwa limechaguliwa. Bloku inapata jina lake lenyewe (`A$C` na namba); {{cmd:RENAME}} inakupa jina lako. Hatua moja ya kutendua inaondoa rejeleo na bloku.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} inauliza bloku la kubadilisha na bloku la kuweka mahali pake (`?` inaorodhesha bloku), kisha inabadilisha kila rejeleo kwenye modeli, kwenye kila karatasi na ndani ya bloku nyingine. Kila rejeleo linahifadhi mahali pake, skeli, mzunguko, tabaka na thamani za sifa ambazo bloku zote mbili zinazo; sifa ambazo bloku mpya pekee inazo zinaanza na chaguo-msingi zao, na inakuambia thamani zipi zimeondolewa. Bloku la zamani likishakuwa halitumiwi tena, inatoa kuliondoa. Inakataa michoro iliyounganishwa na mbadala ambao ungeweka bloku ndani yake yenyewe. Hatua moja ya kutendua.

### MINSERT

{{cmd:MINSERT}} inaweka bloku kwa safu mlalo na safu wima: jina la bloku, nukta ya kuingiza, skeli, mzunguko, idadi ya safu mlalo na safu wima, na umbali kati yake. Seti nzima inazunguka na mzunguko. Kila moja ni rejeleo lake (10,000 kwa upeo), kwa hiyo yoyote yanaweza kusogezwa au kufutwa baadaye.

### BLOCKSPALETTE

Majina mafupi: `BLOCKSPAL`; au {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Paneli ya bloku}}. Inaonyesha paneli ya {{ui:Bloku}} na kielekezi kwenye kichujio chake. Kila bloku lina picha ndogo; zilizowekwa hivi karibuni zinakuja kwanza. Vitufe viwili karibu na kichujio vinabadilisha kati ya orodha na gridi ya picha. Bofya picha (au {{ui:Ingiza}}) kuweka bloku kwa {{cmd:INSERT}}, au iburute kwenye mchoro kuiweka mahali unapoiachia.

{{ui:Maktaba}}, chini ya orodha: {{ui:Ongeza mchoro}} inachukua faili lako la DWG au DXF na kuorodhesha bloku zake kwa picha, na mchoro mzima kama bloku moja. Kuweka moja kunanakili ufafanuzi wake (na bloku zinazoyoomo, pamoja na matabaka yake) kwenye mchoro huu, kama chaguo la `File` la {{cmd:INSERT}} linavyofanya; bloku ambayo tayari iko hapa yenye ufafanuzi uleule inatumika bila swali, moja yenye jina lilelile lakini tofauti inauliza {{ui:Weka zilizopo}} au {{ui:Badili jina}}. Kwenye kivinjari faili linabaki hadi ukurasa ufungwe. Katika CadCraft Studio {{ui:Ongeza folda}} inaorodhesha michoro iliyo kwenye folda, kila moja ikifunguliwa unapoibofya, na faili na folda zinakumbukwa. Alama ndogo ya x inaondoa maktaba kwenye orodha; faili halibadilishwi. {{ui:Maktaba}} iliyoshirikiwa ni kitu tofauti: angalia [Ingiza kutoka faili au maktaba](topic:insert-from-file-and-library).

### BCONVERT

Au {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Geuza marudio kuwa bloku}}. Hupata jiometri inayojirudia na kugeuza kila nakala kuwa rejeleo la bloku moja.

- `Chagua vitu vinavyojirudia, au [Bloku (B)]`: vitu vya nakala moja. `B` inataja bloku iliyopo badala yake, ili kupata nakala zilizotawanyika za vitu vyake.
- `Nakala inaweza kuwa: imeakisiwa = Hapana, imepimwa = Hapana; tabaka, rangi, aina ya mstari na unene wa mstari = Linganisha … [Imeakisiwa (M)/Imepimwa (S)/Sifa (P)]`: `M`, `S` na `P` zinabadilisha kile kinachohesabiwa kuwa nakala; {{key:Enter}} inatafuta. Mipangilio inakumbukwa.
- `Jina la bloku jipya <Block1>`, kisha `Bainisha nukta ya msingi ya bloku` ({{key:Enter}} inachukua kona ya chini kushoto ya uteuzi).
- Inasema ni seti ngapi nyingine za vitu zenye jiometri ileile, inaangazia kila kitu ambacho ingebadilisha, na inauliza `Ndiyo/Hapana`.

Nakala ni vitu vilevile vilivyosogezwa na kuzungushwa kwa pembe yoyote (na kuakisiwa au kupimwa kwa kipengele kimoja wakati hivyo vimewashwa): kila kitu lazima kiwe na mwenzake, ndani ya sehemu moja ya milioni ya ukubwa wa uteuzi. Kila rejeleo linapata mzunguko na skeli yake (lililoakisiwa lina skeli hasi ya Y), na tabaka ambalo vitu vyake vilishiriki. Vitu vilivyo kwenye matabaka yaliyofungwa vinaachwa na kuhesabiwa. Inatafuta kwenye nafasi wazi (modeli au karatasi iliyo wazi). Utafutaji mkubwa sana unasimama kwenye kikomo cha kazi na inasema hivyo. Hatua moja ya kutendua.

### BSEARCH

Au {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Tafuta bloku}}. `Tafuta bloku kwa [Jina (N)/Sifa (A)/Jiometri (G)] <Jina>`:

- `N`: sehemu ya jina la bloku, au muundo wenye `*` na `?`. Inaorodhesha kila bloku pamoja na marejeo yake hapa na kwenye mchoro mzima.
- `A`: thamani ya sifa, au `TAG=thamani`. Inaorodhesha bloku ambazo marejeo yake yanazo, pamoja na thamani zilizopatikana. Sifa za kudumu zinahesabiwa.
- `G`: chagua vitu, au rejeleo moja la bloku, na bloku zenye umbo linalofanana kwa angalau 85% zinaorodheshwa, bora zaidi kwanza. Ukubwa, mzunguko na kuakisi havihesabiwi. Kipimo kinalinganisha umbali kati ya nukta zilizotawanyika kando ya mikunjo, kwa hiyo kinapata vinavyofanana; tumia {{cmd:BCONVERT}} kupata nakala kamili.

Marejeo yaliyopatikana katika nafasi wazi yanachaguliwa, tayari kwa amri inayofuata.

### BREPLACE

Au {{ui:Bloku}} › {{ui:Zaidi}} › {{ui:Badilisha bloku}}. `Badilisha [Zilizochaguliwa (S)/Zote (A)]`: `S` inabadilisha marejeo ya bloku uliyochagua kwa bloku unalolitaja; `A` inauliza bloku na mbadala wake na inabadilisha kila rejeleo, kama {{cmd:BLOCKREPLACE}} inavyofanya (msimbo ule ule). Rejeleo linahifadhi mahali pake, skeli, mzunguko, tabaka na thamani za sifa ambazo bloku zote mbili zinazo; thamani ambazo bloku mpya haina nafasi kwake zinaondolewa na kutajwa. `?` inaorodhesha bloku. Hatua moja ya kutendua.

## Karatasi na uchapishaji

### LAYOUT

Majina mafupi: `LO`, `NEWLAYOUT`; au kitufe cha {{ui:+}} chini ya mchoro. Karatasi mpya yenye mpaka, kichwa cha mchoro na viewport moja, kwenye ISO A3 (au Tabloid kwa michoro iliyo katika inchi au futi). Hakuna maswali.

### MVIEW

Majina mafupi: `MV`. Kwenye karatasi pekee ({{cmd:VPORTS}} kwenye karatasi inafanya jambo lilelile).

- `Bainisha kona ya viewport [Poligoni (P)/Kitu (O)]`, `Bainisha kona nyingine`. Viewport inaonyesha modeli nzima kwa skeli ya kawaida.
- `P` (Poligoni): bofya kona za mtaro (`Tendua (U)`, `Funga (C)`), {{key:Enter}} ikimaliza. Inakataa chini ya kona tatu.
- `O` (Kitu): `Chagua kitu kilichofungwa kwa mtaro wa viewport`: polilaini iliyofungwa, duara au duaradufu kwenye karatasi. Viewport inachukua umbo lake (mikunjo kama sehemu fupi za moja kwa moja); kitu kinabaki kama kilivyokuwa. Inakataa kitu ambacho hakijafungwa.

### VPCLIP

Inakata viewport ambayo tayari iko kwenye karatasi. `Chagua viewport ya kukata` (au chagua kwanza), kisha `Chagua kitu cha kukata [Poligoni (P)/Futa (D)]`:

- Bofya polilaini iliyofungwa, duara au duaradufu, au {{key:Enter}} (au `P`) kubofya kona za poligoni.
- `D` (Futa, inayotolewa viewport ikiwa imekatwa) inaifanya tena mstatili: kisanduku kinachozunguka mtaro ilivyokuwa nao.
- Kile viewport inaonyesha hakisogei kwenye karatasi, na skeli yake inabaki. Modeli inachorwa na kuchapishwa ndani ya mtaro pekee, na mpaka unaufuata. Hatua moja ya kutendua.
- Viewport iliyokatwa ina mpini kwenye kila kona ya mtaro wake, mbali na katikati yake na kona nne za kisanduku chake (kuburuta kona ya kisanduku kunanyoosha mtaro nao). Sifa zinaonyesha Mtaro: Mstatili, au Imekatwa pamoja na idadi ya kona.
- Faili za DWG na DXF 2000 zinahifadhi mtaro kwa CadCraft. Programu nyingine zinafungua viewport kama mstatili unaoizunguka; DXF R12 inahifadhi mstatili pekee.
- Kwenye kichupo cha modeli inasema viewport ziko kwenye karatasi.

### VPORTS

Majina mafupi: `VIEWPORTS`. {{cmd:SPLIT}} ni sawa kutoka karatasi pia, na {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Gawanya kando kwa kando}}, {{ui:Gawanya juu na chini}}, {{ui:Sehemu nne}}, {{ui:Sehemu moja}} zinaiendesha. Kwenye modeli: `Ingiza idadi ya sehemu [SIngle/2/3/4] <3>`; `2` inauliza `[Mlalo/Wima] <Wima>` (Wima = kando kwa kando), `3` inauliza `[Kushoto/Kulia] <Kulia>` (ambako sehemu kubwa inakwenda). Kila sehemu inahifadhi mwonekano na nafasi yake; bofya inafanya sehemu kuwa hai. Kwenye karatasi ni {{cmd:MVIEW}}. Angalia [Gawanya skrini](topic:split-screen).

### VPVIEW

Hakuna majina mafupi. Kwenye karatasi pekee.

- `Chagua viewport` (inaruka ikiwa moja imechaguliwa), kisha kwenye modeli: `Bainisha kona ya kwanza ya dirisha la kuonyesha`, `Bainisha kona nyingine`.

### UCS

Hakuna majina mafupi. Mfumo wa viwianishi wako mwenyewe; si kuhariri. `Bainisha asili ya UCS [Jina (NA)/Kitu (OB)/Awali (P)/Dunia (W)/Z/Nukta 3 (3)] <Dunia>`: nukta ni asili mpya, kisha `Bainisha nukta kwenye mhimili wa X (Enter inabakiza pembe)`. `Z`: `Bainisha pembe ya mzunguko kuzunguka mhimili wa Z <90>`. `3`: asili, nukta kwenye mhimili chanya wa X, nukta upande chanya wa Y. `OB`: `Chagua kitu cha kupanga UCS`. `NA`: `[Rejesha/Hifadhi/Futa/?]` na jina. Mwonekano unageuka ili mhimili mpya wa X uwe sawa. Angalia [Geuza mwonekano na tumia viwianishi vyako](topic:ucs-and-turned-view).

### PLAN

Hakuna majina mafupi. `Ingiza chaguo [UCS ya sasa/Ucs/Dunia] <UCS ya sasa>`: inageuza mwonekano wa sehemu hai ili mhimili X wa UCS (au wa dunia) uwe sawa. Hakuna kitu kwenye mchoro kinachosogea.

### TURNLEFT, TURNRIGHT, TURNWORLD

Hakuna majina mafupi; au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Geuza mwonekano digrii 90 kushoto}}, {{ui:Geuza mwonekano digrii 90 kulia}}, {{ui:Rudi duniani}}. Sawa na `UCS Z -90`, `UCS Z 90` na `UCS W`, huku mwonekano ukifuata.

### VPLAYER

Hakuna majina mafupi. Kwenye karatasi, au ndani ya viewport. `Ingiza chaguo [?/Gandisha (F)/Yeyusha (T)/Weka upya (R)/Vpvisdflt]`: `F`, `T`, `R` zinauliza majina ya matabaka (koma, wildcards `*` na `?`), kisha `[Zote (A)/Chagua (S)/Ya sasa (C)] <Ya sasa>` viewport; Weka upya inarudisha kila tabaka kwenye chaguo-msingi lake la "limegandishwa kwenye viewport mpya"; `V` inaweka chaguo-msingi hilo (`[Limegandishwa/Limeyeyushwa]`), ambalo {{cmd:MVIEW}} inalitumia. `?` inaorodhesha matabaka yaliyogandishwa kwenye viewport ya sasa. Safu ya viewport kwenye paneli ya Matabaka inafanya jambo lilelile kwa viewport moja. Angalia [Gandisha tabaka kwenye viewport moja](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Majina mafupi: `MS`; au bofya mara mbili ndani ya viewport. Kwenye karatasi pekee. Fanya kazi kwenye modeli kupitia viewport: iliyochaguliwa, pekee kwenye karatasi, au `Bofya ndani ya viewport ili kufanya kazi`. Kusogeza na kukuza ndani kunabadilisha mwonekano wa viewport (ile iliyofungwa onyesho inabaki nao na karatasi inasogea badala yake); mwonekano mpya unaandikwa kama hatua moja ya kutendua. Angalia [Fanya kazi kwenye modeli kupitia viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Majina mafupi: `PS`; au bofya mara mbili nje ya viewport, au bofya kichupo chini ya mchoro. Rudi kwenye karatasi.

### PLOT

Majina mafupi: `PRINT`, `PUBLISH`, `EXPORTPDF`; au {{key:Mod+P}}. Inafungua kisanduku cha {{ui:Chapisha kwenda PDF}}. Angalia [Chapisha kwenda PDF](topic:plot-pdf).

### PLOTSTYLES

Majina mafupi: `STYLESMANAGER`, `PSTABLES`; au {{ui:Hariri majedwali…}} kwenye kisanduku cha {{ui:Chapisha kwenda PDF}}. Inafungua {{ui:Majedwali ya mtindo wa kuchapisha}}: kile kila rangi inachapishwa kama (rangi, kijivu, wino, unene wa mstari), kinachohifadhiwa pamoja na mchoro. Angalia [Majedwali ya mtindo wa kuchapisha](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} inahamisha vitu kati ya karatasi na modeli kupitia viewport, vikipimwa na kugeuzwa ili vionekane vilevile kutoka upande mwingine. Kwenye karatasi, chagua vitu nao wanaenda kwenye modeli (chagua viewport karatasi ikiwa na zaidi ya moja). Unapofanya kazi kwenye modeli kupitia viewport ({{cmd:MSPACE}}), vitu vilivyochaguliwa vinakuja kwenye karatasi. Inasema vimekuwa mara ngapi kubwa au ndogo. Viewport zinabaki kwenye karatasi yao. Hatua moja ya kutendua.

### ISODRAFT

{{cmd:ISODRAFT}} inawasha au kuzima uchoraji wa isometric `ON` au `OFF`, au inaenda moja kwa moja kwenye ndege ya `Kushoto`, `Juu` au `Kulia`. Ikiwa imewashwa: Ortho ({{key:F8}}) inaweka mistari kwenye shoka mbili za ndege (kushoto: 90° na 150°; juu: 30° na 150°; kulia: 30° na 90°), ufuatiliaji wa polar ({{key:F10}}) unafuata shoka hizo hizo, kushika gridi ({{key:F9}}) kunatumia gridi ya isometric, na gridi ({{key:F7}}) inachorwa kwa mistari ya 30°, 90° na 150°. {{cmd:ELLIPSE}} inapata `Isocircle`: toa katikati na radiasi (au `Kipenyo`), nalo linachora duaradufu ambalo duara linaonekana kwenye ndege ya sasa. Mchoro unabaki bapa: hizi ni misaada ya kuchora mwonekano wa picha, si modeli ya 3D. Mpangilio ni wa kikao hiki na hauhifadhiwi kwenye faili.

### ISOPLANE

{{cmd:ISOPLANE}} inachagua ndege ambayo uchoraji wa isometric unafanya kazi juu yake: `Kushoto`, `Juu` au `Kulia`. Enter inaenda kwenye ndege inayofuata. Uchoraji wa isometric ukiwa umewashwa, {{key:F5}} inafanya jambo lilelile katikati ya amri; ukiwa umezimwa, {{key:F5}} inaachwa kwa kivinjari.

## Uchunguzi

### CAL

Inachapisha thamani ya hesabu, kama ingesomwa mahali popote urefu unapoandikwa.

- `Msemo`: uandike, kwa mfano `12'6"+3/4"` au `(24'-0")/3`, kisha bonyeza {{key:Enter}}. CadCraft inachapisha `= 12'-6 3/4"   (150.75 vitengo vya mchoro)`. Angalia [Hesabu katika thamani iliyoandikwa](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Majina mafupi: `DI`; au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Pima umbali}}.

- `Bainisha nukta ya kwanza`, `Bainisha nukta ya pili`. Inachapisha umbali, pembe, Delta X na Delta Y.

### AREA

Majina mafupi: `AA`; au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Eneo}}. Inachapisha eneo na mzunguko.

- `Bainisha nukta ya kwanza ya kona [Kitu (O)/Ongeza eneo (A)/Toa eneo (S)] <Kitu>`
  - Bofya au andika kona; kwenye `Bainisha nukta inayofuata (Enter inafunga) [Tendua (U)]` bonyeza {{key:Enter}} kufunga mtaro. `U` inarudisha kona ya mwisho.
  - {{key:Enter}} au `O`, kisha `Chagua kitu`: duara (linachapisha mzingo wake), duaradufu, polilaini (ile wazi inafungwa kwa mstari wa moja kwa moja kwa eneo, na urefu wake unachapishwa) au mistari ya kivuli (mashimo yanatolewa).
  - `A` (Ongeza eneo) na `S` (Toa eneo) zinaweka jumla inayoendelea: kidokezo kinaanza na `(hali ya ADD)` au `(hali ya SUBTRACT)`, kila eneo linaongezwa au kutolewa, na `Jumla ya eneo = …` inachapishwa baada ya kila moja. Katika hali hizi `O` huchagua vitu hadi {{key:Enter}}, na {{key:Enter}} kwenye kidokezo cha kwanza inamaliza amri.

### MEASUREGEOM

Majina mafupi: `MEA`. `Ingiza chaguo [Umbali (D)/Radiasi (R)/Pembe (A)/Eneo (AR)] <Umbali>`; baada ya kila kipimo inauliza tena, na `Toka (X)` ikiwa chaguo-msingi.

`Haraka` inapima kuzunguka kielekezi unapokisogeza: umbali hadi kitu kilicho karibu zaidi upande wa kulia, juu, kushoto na chini (kwenye shoka za UCS ya sasa), unachorwa unapoendelea, na pembe mahali ambapo majirani wawili wa namna hiyo ni wa moja kwa moja na wanakutana. Bofya inaandika umbali nne, upana na kimo wazi, na pembe kwenye historia; Enter inarudi kwenye chaguo. Inasoma kile kilicho kwenye skrini.

- `D`: nukta mbili, kama {{cmd:DIST}}.
- `R`: `Chagua tao au duara`; inachapisha radiasi na kipenyo.
- `A`: tao (pembe yake iliyojumuishwa), mstari kisha mstari wa pili (pembe kati yao, kuelekea ncha zao za mbali), au {{key:Enter}} kisha nukta tatu (kilele, kisha ncha mbili).
- `AR`: kama {{cmd:AREA}}, eneo moja.

### ID

Hakuna majina mafupi. `Bainisha nukta`; inachapisha X na Y yake.

### LIST

Majina mafupi: `LI`, `LS`. `Chagua vitu`; inachapisha aina ya kila kitu, tabaka lake na vipimo vyake vikuu.

### MASSPROP

{{cmd:MASSPROP}} inatoa sifa za sehemu za maeneo na vitu vilivyofungwa unavyochagua, kwa pamoja: eneo, mzunguko, kisanduku cha mipaka, katikati ya uzito, momenti za hali-ajizi kuhusu shoka za X na Y zinazopita asili, bidhaa ya hali-ajizi, radiasi za mzunguko, momenti zile zile kuhusu katikati ya uzito, na momenti kuu zenye mielekeo ya shoka zake. Mashimo kwenye eneo yanahesabiwa kama mashimo. Takwimu ziko kwenye vitengo vya mchoro na ni sahihi kwa mitaro iliyotengenezwa kwa mistari na matao; duaradufu na spline zinapimwa kama sehemu fupi za moja kwa moja, na inasema hivyo. Baada ya ripoti inauliza kama iandikwe kwenye faili la maandishi. Vitu visivyofungwa vinaachwa, na inasema vimeingapi.

## Mwonekano, faili na nyingine

### ZOOM

Majina mafupi: `Z`.

- `Bainisha kona ya dirisha, ingiza kipengele cha skeli (nX) [Mipaka (E)/Yote (A)/Dirisha (W)/Ya awali (P)/Skeli (S)/Katikati (C)]`. Bofya kona mbili kwa dirisha. `E`, `A` au Enter: mchoro mzima.
- `P` (Ya awali, au {{ui:Ya awali}} kwenye upau wa zana) inarudi kwenye mwonekano wa awali, hadi mionekano 10 kwa kichupo; mfululizo wa hatua za gurudumu au kusogeza mara moja unahesabiwa kama mwonekano mmoja.
- Namba kama `2`, `2x` au `0.5x` (au `S` kisha namba) inakuza au kupunguza kwa kipengele hicho kuzunguka katikati ya skrini.
- `C` inauliza `Bainisha nukta ya katikati` na `Ingiza urefu au ukuzaji (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Majina mafupi: `PDFATT` kwa {{cmd:PDFATTACH}}, `PDFIM` kwa {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} inaweka ukurasa wa PDF chini ya mchoro (faili, ukurasa, nukta ya kuingiza, skeli, mzunguko); {{cmd:PDFIMPORT}} inageuza mistari, mikunjo, kujaza na maandishi ya ukurasa kuwa vitu vya mchoro kwenye matabaka yenye jina la PDF, kwa ukubwa halisi, kwa skeli iliyoandikwa, au iliyopimwa kutoka nukta mbili na umbali halisi. {{cmd:PDFCLIP}} inakata kiambatanisho cha chini, {{cmd:PDFADJUST}} inaweka kufifia, utofautishaji, monokromia au kuzima, {{cmd:PDFLAYERS}} inawasha au kuzima matabaka ya PDF yenyewe, na {{cmd:PDF}} inapa CadCraft tena faili ambazo viambatanishi vya chini vya mchoro vinatumia. Angalia [Viambatanishi vya chini vya PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Majina mafupi: `AUTOC`. Kukamilisha mchoro kiotomatiki: bila amri inayoendeshwa, kivuli cha kijivu kinaonyesha kile mifumo ya mchoro wako inasema kinafuata. {{cmd:AUTOCOMPLETE}} inaiwasha `On` au kuizima `Off` (pia Mipangilio › CadCraft), au `Show` inaonyesha kile ingependekeza sasa. **Tab** inachora kivuli kama hatua moja ya kutendua, **Esc** inakiondoa hadi mchoro ubadilike. Inapata mambo matatu kwenye vitu vipya zaidi: nakala inayofuata ya kitu kilichochorwa mara mbili au zaidi kwa hatua sawa (vigingi, nguzo, sehemu ya kupanda na ya kukanyaga ya ngazi), hatua zinazofuata za ngazi ya polilaini, na upande unaokosekana wa chumba au mnyororo wa kuta. Katikati ya {{cmd:LINE}} au {{cmd:PLINE}} kivuli ni **nukta inayofuata**: hatua inayofuata ya ngazi (kupanda, kukanyaga, kupanda…), kona ya nne ya mstatili, nukta inayoufunga, au hatua moja zaidi sawa. Leta kielekezi karibu nayo kisha bonyeza **Tab**, kama ungebofya hapo; endelea au bonyeza Enter. Inahesabiwa kwenye kompyuta hii kwa kanuni, bila modeli.

### AUTOSHEET

Majina mafupi: `ASH`. Karatasi zinazojipanga zenyewe. {{cmd:AUTOSHEET}} inachukua vipande vya mchoro (mionekano yako yenye majina, au vipande tofauti vya modeli, au modeli nzima), inachagua saizi ya karatasi (au ile unayoitoa), inatoa kila kipande skeli ya kawaida (skeli moja kwa wote, au kubwa zaidi ambayo kila kimoja kinaweza kuchukua) na kupanga mionekano kwa safu mlalo kwenye karatasi mpya ikiwa na kichwa cha mchoro na maelezo ya chini (jina na skeli) chini ya kila moja. Kilichozidi kutoshea karatasi moja kinapata karatasi yake. Hatua moja ya kutendua. Inahesabiwa kwenye kompyuta hii kwa kanuni, bila modeli.

### PHOTOSKETCH

Majina mafupi: `PSK`. Kuchora picha hadi mchoro. Chagua picha (JPEG, PNG au TIFF) ya mchoro wa mkono kwenye karatasi. {{cmd:PHOTOSKETCH}} inatafuta kona nne za karatasi, inanyoosha mtazamo, inachukua saizi ya karatasi unayotaja (`Karatasi`, au ya kawaida iliyo karibu zaidi) na `Skeli` ya mchoro (1 : n), kisha inafuatilia mistari ya kalamu kuwa mistari, matao na madurara, tabaka kwa kila rangi ya kalamu (nyeusi, nyekundu, bluu, kijani). Ikishindwa kupata ukingo wa karatasi inachukua picha nzima kama karatasi na inasema hivyo. Maandishi yanaachwa. Hatua moja ya kutendua. Inafanywa kwenye kompyuta hii kwa usindikaji wa picha wa kawaida, bila modeli, bila chochote kutumwa popote. Angalia pia amri za michoro iliyoskaniwa.

### AUTODIM

Majina mafupi: `ADIM`. Kupima kiotomatiki kwa kanuni. {{cmd:AUTODIM}} inapima vitu vilivyochaguliwa (au mchoro mzima) kutoka kingo zao za kiwango na wima: mnyororo wa vipimo kando ya pande unazochagua (`Pande`), kipimo kimoja cha jumla nje yake, upana wa kila ufunguzi (pengo kati ya mistari ya kuta iliyonyooka), kipenyo kwa kila ukubwa wa tundu, na kwa `Gridi` nafasi kati ya mistari ya gridi. Kipimo kilichoko tayari hakitengenezwi tena. Hatua moja ya kutendua. Inahesabiwa kwenye kompyuta hii kwa kanuni, bila modeli.

### GRIDMOVE

Majina mafupi: `GM`. Kusogeza mstari wa gridi hubeba seti nzima. {{cmd:GRIDMOVE}} inasogeza mstari wa gridi (mstari uliopo kwenye tabaka lenye jina la gridi au mhimili) na kilichoning'inia juu yake: kuta zenye ncha kwenye mstari zinanyooka kuufuata, kuta zilizo kando yake zinahama zote, nguzo (marejeo ya bloku na madurara kwenye mstari), kiputo chake na lebo zinahama, na vipimo vyenye nukta zilizo juu yake vinapima nafasi mpya. Toa nukta mbili (sehemu inayovuka mstari pekee inahesabiwa) au `Umbali`. Hatua moja ya kutendua inarudisha yote. Inafanywa kwa kanuni kwenye kompyuta hii.

### DETAILS

Majina mafupi: `DET`. Maelezo yanayokupata. {{cmd:DETAILS}} inahifadhi maelezo ya kampuni yako mwenyewe: `Ongeza` inaweka bloku ya mchoro huu kwenye orodha, `Orodhesha` na `Ondoa` zinaisimamia, na `Tafuta` inapanga kwa vitu vilivyochaguliwa (au kile ulichochora mwisho) kwa maneno kwenye matabaka yake, majina ya bloku, mifumo ya mistari ya kivuli na maelezo dhidi ya jina na maelezo ya kila undani, kwa hiyo kichwa cha dirisha kinapata mwanya wa kingo wa kampuni yako. Chagua namba na nukta kuiweka. Ikiwa `Dokezo` limewashwa (pia Mipangilio › CadCraft), kuchagua kitu ambacho undani unakilingana kunaweka mstari mmoja kwenye upau wa hali. Orodha inahifadhiwa kwenye kivinjari hiki, kwenye kompyuta hii, na orodha hiyo ndiyo inayotafutwa. `Shiriki` inaiweka pia kwenye folda yako ya Nyaraka (`.cadcraft/firm-details.json`, pamoja na mchoro wa kila bloku): `Vuta` inaongeza kile timu yako ina nacho usichokuwa nacho, `Sukuma` inaongeza unachokuwa nacho wao hawana, `Zote` hufanya zote mbili, na hakuna kinachofutwa upande wowote. Fungua folda ya Nyaraka kwanza ({{cmd:DOCUMENTS}}); folda hiyo ikiwa folda ya Mpango wa Wingu wa Timu, timu nzima inashiriki orodha moja. Kipengee cha undani kwenye paneli ya Maktaba kina kitufe cha **Ongeza kwenye maelezo ya kampuni yangu** kinachoiweka kwenye orodha hiyo hiyo. Inafanywa kwa maneno kwenye kompyuta hii, bila modeli.

### SKETCHFIX

Majina mafupi: `SKF`. Michoro ya kalamu inakuwa jiometri sahihi. Bonyeza na kuburuta mpigo mmoja wa mkono kwa wakati (kalamu, kipanya au kidole), kisha Enter. Kila mpigo unasomwa kama mstari, duara, tao, mstatili au polilaini: mistari karibu ya mlalo na wima inafanywa kuwa sawasawa mlalo na wima, mpigo wa mviringo uliofungwa unakuwa duara, mpigo uliofungwa wenye kona nne za pembe ya kulia unakuwa mstatili, na ncha za mipigo zinavutwa pamoja na kwenye ncha ambazo tayari ziko kwenye mchoro. Hatua moja ya kutendua. Inafanywa kwa kanuni kwenye kompyuta hii, bila modeli.

### SCANATTACH and the scanned-drawing commands

Majina mafupi: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} haina. Zinafanya kazi kwenye picha, hatua moja ya kutendua kila moja. {{cmd:SCANATTACH}} inaweka PNG, JPEG, TIFF (ukurasa mmoja au wote) au ukurasa wa PDF unaokuwa picha. {{cmd:SCANSCALE}} inapima karatasi kutoka nukta mbili zilizochaguliwa na umbali halisi. {{cmd:SCANALIGN}} inasogeza na kugeuza kwenye nukta mbili (`Pima karatasi itoshe` Ndiyo/Hapana). {{cmd:SCANDESKEW}} inaonyesha pembe ya mistari mirefu ya karatasi na kuigeuza mara utakapo `Kubali` au kutoa `Thamani`. {{cmd:SCANCLEAN}} inaifanya nyeusi na nyeupe (`Kizingiti` Auto/Adaptive/Level, `Madoa`) na `Endesha`. {{cmd:SCANCROP}} inaweka dirisha. {{cmd:SCANERASE}} inafuta `Mstatili`, `Poligoni` au `Lasso`. {{cmd:SCANTRACE}} inafuatilia mistari na matao kwenye tabaka jipya (`Uvumilivu`, `Dirisha`, `Matao`, `Mabaki`, `Endesha`) na inaripoti kilichopatikana na kilichoachwa kama raster. {{cmd:SCANINFO}} inaorodhesha faili asili na hatua. {{cmd:RASTERSNAP}} inawasha au kuzima kushika kwenye mistari ya karatasi zilizoskaniwa. Angalia mada Michoro iliyoskaniwa na ufuatiliaji.

### REGEN and REGENALL

Majina mafupi: `RE` kwa {{cmd:REGEN}}, `REA` kwa {{cmd:REGENALL}}. Jenga upya kinachochorwa kwenye skrini kutoka mchoro: {{cmd:REGEN}} kichupo unachokiangalia (kwenye karatasi, pia modeli ambayo viewport zake zinaonyesha), {{cmd:REGENALL}} kila kichupo, kila sehemu ya skrini iliyogawanywa na kila mchoro ulio wazi. Tumia zinapoonekana picha imepitwa na wakati baada ya badiliko la kiotomatiki au kubwa mno, au msaidizi alihariri mchoro; mchoro wenyewe haugusiwi, kwa hiyo hakuna cha kutendua.

### NAMEDVIEW

Majina mafupi: `NV`, `VIEWS`. `Ingiza chaguo [?/Rejesha (R)/Hifadhi (S)/Dirisha (W)/Futa (D)] <Rejesha>`, kisha jina la mwonekano. `S` inahifadhi mwonekano kwenye skrini, `W` dirisha unalochagua, `R` inaonyesha mwonekano uliohifadhiwa, `D` inafuta moja, `?` inaorodhesha mionekano ya kichupo hiki. Kuhifadhi chini ya jina lililopo kunabadilisha; kila badiliko ni hatua moja ya kutendua. Mionekano ni ya kichupo ilichohifadhiwa. Faili za DWG na DXF zinahifadhi (jedwali la VIEW); mionekano ya karatasi inarudi kwenye karatasi ya kwanza, kwa sababu faili halisemi ni ipi.

### UNDO and REDO

Majina mafupi: `U` kwa {{cmd:UNDO}}; {{cmd:REDO}} haina. Pia {{key:Mod+Z}} na {{key:Mod+Y}}.

### LAYER

Majina mafupi: `LA`. Inaruka hadi paneli ya {{ui:Tabaka}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Ingiza aina ya mstari kwa vitu vipya` — `ByLayer`, `ByBlock` au jina (`?` inaorodhesha: Continuous, ya mchoro wenyewe, na DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE pamoja na ukubwa wake `2` (nusu) na `X2` (mara mbili)). {{cmd:LWEIGHT}} (`LW`): unene wa mstari kwa vitu vipya kwa mm, au `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): skeli ya aina ya mstari ya mchoro (inaweza kutenduliwa). {{cmd:LWDISPLAY}} (`LWT`): `Onyesha unene wa mistari [ON/OFF]` — sawa na kitufe cha {{ui:LWT}} kwenye upau wa hali. Angalia [Unene wa mistari na aina za mistari](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Ingiza aina ya kitu cha kubadilisha jina [Tabaka (LA)/Bloku (B)]`, `Ingiza jina la zamani`, kisha jina jipya; vitu au marejeo vinafuata. {{cmd:LAYMRG}}: `Chagua kitu kwenye tabaka la kuunganisha au [Jina (N)]` hadi {{key:Enter}}, kisha `Chagua kitu kwenye tabaka lengwa au [Jina (N)]` na `Y`. {{cmd:LAYDEL}}: `Chagua kitu kwenye tabaka la kufuta au [Jina (N)]`, kisha `Y`: tabaka na kila kitu kilicho juu yake kinaondoka (si tabaka 0, DEFPOINTS au tabaka la sasa). Hatua moja ya kutendua kila moja. Angalia [Panga mchoro kwa matabaka](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Matabaka kwa kuchagua vitu; pia kwenye menyu ya {{ui:Zana}} ya paneli ya {{ui:Tabaka}}. {{cmd:LAYISO}}: `Chagua vitu kwenye tabaka (ma) la kutenga`, kisha {{key:Enter}}: kila tabaka lingine linazimwa. {{cmd:LAYUNISO}} linayawasha tena. {{cmd:LAYOFF}} na {{cmd:LAYFRZ}}: `Chagua kitu kwenye tabaka la kuzimwa` (au kugandishwa), tena na tena; `U` inarudisha la mwisho, {{key:Enter}} inamaliza. {{cmd:LAYMCUR}}: `Chagua kitu ambacho tabaka lake litakuwa la sasa`. {{cmd:LAYON}} inawasha kila tabaka, {{cmd:LAYTHW}} inayeyusha kila tabaka. Kila amri ni hatua moja ya kutendua. Angalia [Panga mchoro kwa matabaka](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} inaanza mchoro tupu na {{cmd:OPEN}} inafungua DWG au DXF, kila moja kwenye kichupo chake juu ya mchoro (mchoro mpya ambao haujaguswa unatumika badala ya kichupo kipya). Kufunga kichupo chenye mabadiliko yasiyohifadhiwa kunauliza kwanza. Angalia [Gawanya skrini](topic:split-screen).

{{cmd:SAVE}} (majina mafupi `QSAVE`, pia {{key:Mod+S}}) inapakua nakala katika muundo wa mchoro: DWG ikiwa ulifungua kutoka DWG, DXF ikiwa kutoka DXF. Mchoro mpya unatumia muundo wa mwisho uliochaguliwa katika Hifadhi kama katika kivinjari hiki, vinginevyo DWG.

{{cmd:SAVEAS}} (pia {{key:Mod+Shift+S}}) inafungua kisanduku cha {{ui:Hifadhi nakala kama}}: chagua {{ui:DWG}} (pamoja na {{ui:Toleo}} lake), {{ui:DXF R12}} au {{ui:DXF 2000}}, kisha {{ui:Hifadhi}}. Chaguo linabaki kwa mchoro huu na kwa michoro mipya kwenye kivinjari hiki.

{{cmd:DXFOUT}} daima hupakua nakala ya DXF R12, bila kubadilisha muundo ambao {{cmd:SAVE}} inatumia.

Angalia [Faili: kinachofunguka, kinachohifadhiwa](topic:files#saving).

### TOUR

Majina mafupi: `TUTORIAL`. Inaanza tena ziara ya hatua sita ya mchoro wa kwanza. Angalia [Kuanza](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Majina mafupi: `TBDOCK`. `Nafasi ya upau wa zana [Juu/Chini/Kushoto/Kulia]`. Angalia [Mipangilio](topic:settings#toolbar-position).

### COMMANDLINE

Majina mafupi: `CMDLINE`. `Mstari wa amri [Umefungwa chini/Unaelea/Mstari mmoja/Mistari ya historia inayoonyeshwa/Historia ya amri (F2)]`: unafunga au kuelea mstari wa amri, kuufanya mstari mmoja, unauliza mistari mingapi ya historia kuonyeshwa (0 hadi 12), au unafungua historia. Angalia [Mipangilio](topic:settings#command-line).

### TOPAREA

`Eneo la juu [Kawaida/Fupi]`: pau zilizo juu ya mchoro kama zilivyokuwa, au fupi. Angalia [Mipangilio](topic:settings#top-area).

### POLARANG

`Ingiza hatua ya pembe ya polar kwa digrii <90>`: hatua ambayo mistari ya ufuatiliaji wa {{ui:Polar}} inapangwa kwayo (zaidi ya 0, hadi 180). Inahifadhiwa kwenye kivinjari hiki.

### UNITS

Majina mafupi: `UN`. Jinsi urefu unavyoandikwa na kuingizwa.

- `Ingiza muundo wa urefu [Kisayansi/Desimali/Uhandisi/Usanifu majengo/Sehemu] <wa sasa>`
- Usanifu majengo na Sehemu: `Ingiza kipengele cha sehemu ndogo kabisa ya kuonyesha (1, 2, 4, 8, 16, 32, 64, 128 au 256)`. Nyingine: `Ingiza idadi ya nafasi za desimali (0 hadi 8)`.

Vipimo vipya vinafuata hivyo. Hatua moja ya kutendua. Ni sawa na {{ui:Muundo wa urefu}} na {{ui:Usahihi}} kwenye {{ui:Mipangilio ya sasa}}; angalia [Futi na inchi](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Majina mafupi: `GDS`. Tazama mpangilio wa IC (faili la mkondo la GDSII): mradi wa majaribio ya maabara, kwa kutazama na kupima tu.

- Kichagua faili kinachukua faili la `.gds`; ikiwa na seli kadhaa za juu, `Ingiza seli ya juu ya kuchora`.
- Kila tabaka na aina ya data inakuwa tabaka la mchoro (`GDS 1`, `GDS 2/5`), marejeo na safu zinawekwa bapa, kwa kitengo cha mtumiaji cha faili (kwa kawaida mikromita). Hatua moja ya kutendua. Hakuna kinachoigwa wala kukaguliwa, na faili haliandikwi tena.

### DIAGRAM

Majina mafupi: `TEXTDIAGRAM`, `T2D`. Mchoro kutoka maandishi.

- Kisanduku kinachukua maandishi (au mstari mmoja wenye `;` kati ya kauli kwenye mstari wa amri): chati ya mtiririko ya Mermaid, mchoro wa vipengele wa PlantUML, D2 au orodha ya kutoka-hadi.
- `Bainisha kona ya juu kushoto ya mchoro`, kisha `Bainisha kimo cha maandishi`.

Bloku na viunganishi ni vitu vya kawaida kwenye tabaka `Diagram`, vinachaguliwa mwishoni. Hatua moja ya kutendua. Angalia [Chora mchoro kutoka maandishi](topic:text-to-diagram).

### OLELIST

Majina mafupi: `OLES`. Vitu vya OLE ambavyo DWG inabeba ambavyo CadCraft haiwezi kuviweka yenyewe.

- Inaorodhesha kila kimoja: namba, aina, ukubwa, na kama kimehifadhi picha.
- `Ingiza chaguo [Weka (P)/Toka (X)] <Toka>`: Weka inauliza namba, kona ya chini kushoto na upana, na inachora fremu yenye picha. Hatua moja ya kutendua; kitu kilichohifadhiwa hakibadilishwi. Angalia [Picha](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Majina mafupi: `SHX`. Fonti zako za SHX.

- `Ingiza chaguo la fonti ya SHX [Folda/Faili/Orodhesha/Ondoa/Geuza/Safisha] <Orodhesha>`

{{ui:Folda}} inasoma kila `.shx` kwenye folda (CadCraft Studio; tena kila inapoanza), {{ui:Faili}} inachukua faili ulizochagua (kivinjari), {{ui:Geuza}} inaweka herufi za fonti moja mwisho kwanza. Mitindo ya maandishi inayotaja fonti iliyopakiwa inachorwa nayo. Angalia [Chora maandishi kwa fonti zako za SHX](topic:shx-fonts).

### LIMITS

Mchoro umekusudiwa kuwa wa ukubwa gani.

- `Bainisha kona ya chini kushoto au [ON/OFF] <wa sasa>`: nukta, `ON` au `OFF`.
- `Bainisha kona ya juu kulia <wa sasa>`.

Gridi inajaza mipaka, {{cmd:ZOOM}} Yote inaionyesha, na mipaka ikiwa ON nukta iliyo nje inakataliwa (`**Nje ya mipaka`). Hatua moja ya kutendua; inahifadhiwa kwenye DWG na DXF. Angalia [Weka mipaka ya mchoro](topic:drawing-limits).

### AUNITS

Majina mafupi: `ANGUNITS`. Jinsi pembe zinavyoonyeshwa na kuandikwa.

- `Ingiza muundo wa pembe [Digrii za desimali/Digrii-dakika-sekunde/Mielekeo ya mpimaji] <wa sasa>`
- `Ingiza idadi ya nafasi za desimali (0 hadi 8)`, au kwa nyingine mbili `Ingiza usahihi` (0 digrii, 2 dakika, 4 sekunde, 5 hadi 8 desimali za sekunde).

Hatua moja ya kutendua; inahifadhiwa kwenye DWG na DXF. Ni sawa na {{ui:Muundo wa pembe}} kwenye {{ui:Mipangilio ya sasa}}. Angalia [Andika na onyesha mielekeo na pembe](topic:bearings-and-angles).

### APPLOAD

Majina mafupi: `AP`; au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Pakia programu…}}. Kisanduku cha {{ui:Pakia programu}}: pakia taratibu za `.lsp` na faili za kisanduku cha mazungumzo `.dcl`, uziondoe, uzipakie tena kutoka historia, na Startup Suite. Amri za `(defun c:NAME …)` za taratibu zinafanya kazi kama nyingine zozote. Angalia [Pakia programu](topic:load-applications) na [Endesha taratibu za LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Hariri majina mafupi…}}) inafungua faili lako la majina mafupi (mistari ya `ALIAS, *COMMAND`); {{ui:Hifadhi}} inaitumia. {{cmd:REINIT}} inaitumia tena. Angalia [Hariri majina mafupi ya amri](topic:command-aliases).

### LISPEDIT

Majina mafupi: `VLIDE`; au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Mhariri wa LISP}}. Inafungua mhariri wa LISP, dirisha linalobaki wazi kando ya mchoro.

- Maandishi: namba za mistari, mwenza wa mabano kwenye kielekezi huwekwa alama (nyekundu isipokuwa hana), {{key:Enter}} inaingiza mstari mpya chini ya mabano yaliyo wazi, {{key:Tab}} inaandika nafasi mbili, {{key:Esc}} inatoka kwenye maandishi.
- {{ui:Pakia kwenye mchoro}} ({{key:Ctrl+Shift+Enter}}): inasoma kila fomu, kama {{cmd:APPLOAD}} inavyofanya na faili, na kutengeneza amri zake za `c:`. Faili linaonekana kwenye orodha ya {{cmd:APPLOAD}}.
- {{ui:Endesha uteuzi}} ({{key:Ctrl+Enter}}): inatekeleza fomu zilizochaguliwa, au fomu ambayo kielekezi kiko ndani yake.
- {{ui:Simamisha}}: inamaliza taratibu inayoendeshwa.
- {{ui:Kiweko}}: kile taratibu ilichochapisha, na kila hitilafu pamoja na mstari wake; bofya hitilafu ili kwenda hapo. Maandishi yanaendeshwa fomu moja ya ngazi ya juu kwa wakati, kwa hiyo mstari ni wa fomu, au ndani yake mstari unaoita kazi ambayo hitilafu inaitaja.
- {{ui:Mpya}}, {{ui:Fungua}}, {{ui:Hifadhi}} ({{key:Ctrl+S}}): faili la `.lsp`. Maandishi pia yanahifadhiwa kwenye kivinjari hiki, kwa hiyo kufunga dirisha hakupotezi.
- Kando ya maandishi: kazi ambazo taratibu inazifafanua, zile inazoita ambazo LISP hii bado haina, zile inazoita ambazo hazijafafanuliwa ndani yake wala hazijajengwa ndani, na orodha kamili za kile kilichojengwa na kisichojengwa.

Maandishi yenye mabano yasiyofungwa, au mfuatano usiomalizika, hayaendeshwi: mstari unatajwa. Hakuna kitatuzi cha hatua kwa hatua, vituo vya kusimamisha wala dirisha la kutazama. Angalia [Endesha taratibu za LISP](topic:run-lisp).

### HELP

Majina mafupi: `?`. Inachapisha kila amri, majina yake mafupi na maelezo ya mstari mmoja kwenye historia ya mstari wa amri. Haifungui msaada huu: bonyeza {{key:F1}} au bofya {{ui:Msaada}} kwa hilo.

## Kidokezo cha Chagua vitu

Kwenye kidokezo chochote cha `Chagua vitu`: bofya vitu, chora madirisha (kushoto kwenda kulia) na kuvuka (kulia kwenda kushoto) kwa bofya mbili, au bonyeza na kuburuta lasso ({{key:Space}} wakati wa kuburuta: dirisha, kuvuka, uzio), {{key:Shift}}+bofya kuondoa, na bonyeza {{key:Enter}} kumaliza. Unaweza pia kuandika `ALL` (kila kitu), `L` (kitu cha mwisho), `P` (Iliyotangulia: kile amri ya mwisho ilichotumia), `F` (Uzio: vitu ambavyo mstari wa nukta unavuka; `U` inarudisha nukta), `W` (Dirisha), `C` (Kuvuka), `R` (Hali ya kuondoa: bofya zinaondoa vitu; kidokezo kinasema `Ondoa vitu`) na `A` (Ongeza tena). `?` inaorodhesha hizo. Hazionyeshwi kwenye kidokezo. {{key:Tab}} juu ya vitu vinavyoingiliana inaangazia kinachofuata; bofya kukichagua. Angalia [Chagua vitu](topic:select-objects).

### ACCESS

Majina mafupi: `AX`. Chora bila kuona. {{cmd:ACCESS}} inawasha au kuzima Access (`On`, `Off`) na kubadilisha sauti za kushika (`Sound`) na amri za sauti (`Voice`); inasema hali kwanza. Access ikiwa imewashwa, kila amri na matokeo yanasomwa kupitia kisomaji chako cha skrini, na eneo la mchoro lina kielekezi cha kibodi. Mada ya msaada "Chora bila kuona" ina funguo.

### DESCRIBE

Majina mafupi: `DESC`. Sema mchoro una nini: vitu vingapi, vya aina gani, vikubwa kiasi gani, matabaka mangapi, nini kimechaguliwa. Inasoma tu; haibadilishi chochote.

### WHEREAMI

Majina mafupi: `WHERE`. Sema kielekezi kiko wapi, kwa vitengo vya mchoro.

### NEARBY

Sema kilicho karibu na kielekezi, kilicho karibu zaidi kwanza, kila kimoja pamoja na umbali wake na upande ulipo.

### SAYSEL

Sema kilichochaguliwa, sentensi moja kwa kila kitu (urefu wa mstari, ncha na pembe; radiasi ya duara na katikati yake; maandishi kama yalivyoandikwa).

### VOICE

Washa au zima amri za sauti. Zinatambuliwa kwenye kompyuta hii; ambapo kivinjari hakiwezi kufanya hivyo, sauti inabaki kuzimwa isipokuwa uchague huduma ya mtandaoni ya kivinjari kwenye Mipangilio.

### TOUCHCROSSHAIR

Majina mafupi: `TCX`. Msalaba wa kielekezi ulio na mpangilio kwa uchoraji kwa kidole, ili ncha ya kidole isifunike nukta unayochagua. Ukiwa umewashwa, kidole kimoja kwenye mchoro hakichagui: kinasogeza msalaba ulio juu ya kidole na upande mmoja. Vishikio vya kitu na ufuatiliaji vinafuata msalaba. Kuinua kidole hakuchagui kitu na kinaacha msalaba pale ulipo. Ili kuchagua, bonyeza kitufe cha {{ui:Bofya}} kwenye kona ya mchoro, au gusa popote kwenye mchoro kwa kidole cha pili. Shikilia {{ui:Bofya}} unaposogeza kidole kingine kuburuta (dirisha la uteuzi, lasso, mpini). Kidole kilichoshikiliwa bila kusogea, au kitufe cha {{ui:Enter}}, ni Enter. Vidole viwili vinasogeza na kukuza kama awali. Karibu na ukingo wa chini na ukingo wa mbali, msalaba unakaribia kidole, kwa hiyo kila sehemu ya mchoro inafikika. Kalamu na kipanya vinachagua moja kwa moja daima.

{{cmd:TOUCHCROSSHAIR}} inasema hali na inauliza `ON`, `OFF`, `Auto` (ikiwashwa tu mahali kidole ndicho kielekezi pekee, kwa hiyo imezimwa kwenye kompyuta yenye kipanya), `Distance` (msalaba uko mbali kiasi gani na kidole, pikseli 24 hadi 240) au `Side` (`Left`: juu na kushoto, kwa mkono wa kulia; `Right` kwa mkono wa kushoto; vitufe vinahamia kona nyingine). Chaguo hizo hizo ziko kwenye Mipangilio › CadCraft, na kwenye kifaa chenye skrini ya kugusa upau wa hali una swichi ya {{ui:Msalaba wa kukabiliana}}. Chaguo zinahifadhiwa kwenye kivinjari hiki.

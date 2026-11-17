---
title: Ukufaka amaphoyinti nezibalo
summary: Zonke izindlela zokuthayipha iphoyinti, ibanga, ingosi noma inani kumugqa womyalo we-CadCraft, nezibonelo.
keywords: ukufaka okuphilayo, dyn, f12, tab, izixhumanisi, ngokuphelele, ngokuhlobene, polar, @, ibanga eliqondile, ingosi, amadigri, iphoyinti lokugcina, lastpoint, ukuthayipha amaphoyinti, ukufaka, izibalo, ukubala, isibali, cal, kanye, isigaxa, isisho
from: 7de9252d
---

## Amaphoyinti

Lapho umyalo ucela iphoyinti, thayipha esinye salezi bese ucindezela {{key:Enter}}:

| Uthayipha | Okusho | Isibonelo |
|---|---|---|
| `x,y` | Ngokuphelele: kulinganiswa kusukela ku-origin 0,0 | `2500,1200` |
| `#x,y` | Nakho ngokuphelele (kwamukelwa ngenxa yomkhuba) | `#2500,1200` |
| `@dx,dy` | Ngokuhlobene: ngakwesokudla nangaphezulu kusukela iphoyinti lokugcina | `@600,0` |
| `@d<a` | Ngokuhlobene ngepolar: ibanga nengosi kusukela iphoyinti lokugcina | `@1500<45` |
| `d<a` | Ngokuphelele ngepolar: ibanga nengosi kusukela ku-origin | `3000<90` |
| inombolo eyodwa | Ibanga eliqondile: leli kude nephoyinti lesisekelo, ngokuya ku-crosshair | `1200` |
| `*x,y`, `@*dx,dy` | Izixhumanisi zomhlaba lapho i-UCS isethiwe | `*0,0` |

Lapho i-UCS isethiwe ({{cmd:UCS}}), `x,y`, `@dx,dy` nengosi ku-`d<a` kulinganiswa ngokuya ngama-axis e-UCS. Bona [Phendula umbono usebenzise izixhumanisi zakho](topic:ucs-and-turned-view).

Noma chofoza emdwebweni; ama-object snap nama-Ortho asebenza ekuchofozeni.

Imithetho:

- Ikoma ihlukanisa i-X ku-Y. Izingxenyana zisebenzisa uphawu lwephoyinti: `1250.75,300`.
- Amanani angalungile ahamba kwesobunxele nangaphansi: `@-600,0`.
- Ungathayiphi izikhala: {{key:Space}} ithumela umugqa, njengo-{{key:Enter}}.
- Izinombolo zingasebenzisa ama-exponent: `1e3` ingu-1000.
- Akuthayiphwa mayunithi, nanoma ukubhalwa kwamafiti namayintshi. Thayipha izinombolo ezilula zamayunithi omdwebo.

## Iphoyinti lokugcina

`@` ibala kusukela **kwiphoyinti lokugcina oliniketwe kunoma yimuphi umyalo wephoyinti**, kunoma iyiphi imiyalo: ukuchofoza, i-snap noma iphoyinti elithayiphiwe. Liyakhunjulwa phakathi kwemiyalo, ngakho ungaqala umugqa omusha `@0,500` ukusuka lapho owedlule waphela khona. Ngaphambi kokuthi unikeze noma yiliphi iphoyinti, `@` ibala kusukela ku-0,0.

Izindawo ezimbalwa lapho lokhu kubalulekile:

- Ku-{{cmd:COPY}}, ngemva kokukopisha kokuqala iphoyinti lokugcina liyiphoyinti lalokho kukopisha. `@600,0` kabili kubeka amakhophi angu-600 nango-1200 kusukela kwawokuqala.
- Ngemva kokubeka isilinganiso, iphoyinti lokugcina liwuhlu lapho ubeke khona umugqa wesilinganiso, hhayi isiphetho sesilinganiso.

Uma unokungabaza, sebenzisa iphoyinti eliphelele, i-snap noma ibanga eliqondile.

## Ukufaka ibanga eliqondile

Inombolo ewodwa iyibanga kusukela ku-**base point** (iphoyinti umugqa wesihlangani uqala kulo) uye ku-crosshair:

1. Nyakazisa i-crosshair ngendlela ofuna ukuya ngayo.
2. Thayipha ibanga bese ucindezela {{key:Enter}}.

Lapho {{ui:Ortho}} ivuliwe, ukuqondiswa kuqonda ngqo kwesobunxele noma ngqo phezulu nasezansi, okwenza lokhu kube yindlela esheshayo yokudweba izindonga ezingqamile. Uma kungekho base point, noma i-crosshair ime ngqo kuyo, inombolo iyenqatshwa ngomyalezo othi "Point or option keyword required."

## Izingosi

- Ngamadigri, njengenombolo elula: `30`, `-45`, `112.5`.
- Kulinganiswa ngokuphambene nowashi kusukela ku-X ephozithivu (ebheka ngakwesokudla): 0 ngakwesokudla, 90 phezulu, 180 ngakwesobunxele, 270 noma -90 phansi.
- Lapho kucelwa ingosi (ukujikeleza, ingosi yombhalo), ungachofoza nawe: ingosi ilinganiswa kusukela ku-base point kuya ekuchofozeni. Ngaphambi kokuthi kube nebase point, ukuchofoza kokuqala kuyisetha, bese isicelo sibuza iphoyinti lesibili.

## Amabanga

Lapho ibanga licelwa (irediyasi, ukuphambuka, ukuphakama kombhalo, inani lesikali):

- thayipha inombolo ehlanzekile (kumdwebo wamafiti namayintshi futhi `12'6"` noma `6-1/2`: bona [Amafiti namayintshi](topic:units-papers-scales#feet-and-inches-and-fractions)), noma
- chofoza iphoyinti: ibanga kusukela ku-base point womyalo kuya kulo, noma
- chofoza amaphoyinti amabili uma kungekho base point: isicelo sishintsha sibe `Specify second point`.

"Requires a positive number or two points." kusho ukuthi inani alibe inombolo noma linegative.

## Ukubala okuthayiphwe

Noma kuphi lapho ubude, izixhumanisi, ingosi noma inombolo kuthayiphwa (umugqa womyalo, ukufaka okuphilayo, amabhokisi we-Properties nezingxoxo), ungathayipha ukubala nge-`+`, `-`, `*`, `/` namabhulaketi esikhundleni sokukusebenzisa kuqala:

| Thayipha | Inikeza |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (kumdwebo wamafiti namayintshi) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, ngamayunithi omdwebo (uma amayunithi esethiwe) |
| `@4+7/16,0` | iphoyinti eli-4.4375 ngakwesokudla kwalokugcina |
| `360/7` | ingosi engu-51.43 amadigri |

- Isidashi esibhalwe ebhubeni siyingxenye yalo: `4-7/16` ingu-4 7/16 futhi `24'-6"` ingamafiti angu-24 namayintshi angu-6. Ukuze ukhiphe emva kophawu lwamafiti, qeda ubude kuqala, `24'-0"-6"`, noma ubeke ukubala ebhulaketini ngezikhala ozungeze ngazo isidashi, `(24' - 6")` (ngaphakathi kwebhulaketi isikhala siyisikhala; kwezinye izindawo sicindezela {{key:Enter}}).
- Inombolo elula engezwa ebudeni iseyunithi yomdwebo; ukuphindaphinda noma ukuhlukanisa ngayo kuskala ubude. Izinto ezimbili ezide ziphindaphindwe zenza indawo, ngakho `2'*3'` iyenqatshwa.
- `abs`, `round`, `ceil` no-`floor` nakho kuyasebenza: `round(10/3)`.
- Ukubala okungafundeki kwenqatshwa, kuchazwa lapho kwaphambana khona, isibonelo "The calculation ends too soon (character 3): a value is missing." Akukaze kufundwe njengo-0. {{cmd:CAL}} ibonisa inani lokubala.

## Ukufaka okuphilayo

{{ui:Dyn}} ({{key:F12}}, ebhalini yesimo) ibeka amanani eduze kwe-crosshair lapho umyalo ucela iphoyinti.

- Uma kungakakhethwa base point (iphoyinti lokuqala lomugqa), izinkambu ezimbili ngu-**X** no-**Y**.
- Ngemva kwalokho zingu-**ibanga** nengosi kusukela ephoyinteni lokugcina.

Ukuthayipha kuhamba kumugqa womyalo; inkambu eseduze ne-crosshair iyibonisa, futhi umugqa wombandela uyilandela.

1. Thayipha inani: liya enkambeni eqaqambile.
2. Cindezela {{key:Tab}} (noma ikoma emva kwe-X). Inani liyakhiyeka (libonakala ligqamile), inkambu elandelayo iqaqambe. Ibanga elikhiyiwe ligcina umugqa womphetho malunga nalelo banga nakuba uqondisa imbewu.
3. Thayipha inani lesibili, noma ukhombise nje, bese ucindezela {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} udweba ama-50 aqondile phezulu kusukela ephoyinteni lokugcina.

Ukucindezela {{key:Enter}} ngemva kwenani elilodwa ngaphandle kwe-{{key:Tab}} kusebenza njengokufaka ibanga eliqondile. Amafiti namayintshi nawo asebenza ezinkambini (`12'6"`). Izicelo zebanga nengosi (irediyasi yesongo, ukujikeleza) nazo zibonisa inani lazo eduze ne-crosshair.

## Izinketho nokuzenzakalela

- Izinketho zivela ezibhulaketini ezinqamile. Thayipha izinhlamvu ezinkulu zenketho (`D` ye-`[Diameter]`, `CL` ye-`CLose`) bese ucindezela {{key:Enter}}. Izingxenye ezinde zegama nazo ziyasebenza (`DIA`).
- Okuzenzakalelayo kuvela ezibhulaketini ezibukhali, njengo `<500>`. Cindezela {{key:Enter}} noma chofoza ngakwesokudla ukusebenzisa lokho.

## Ezinye izinhlelo zekhibhodi nekhibhodi yezinombolo

Amagama emiyalo, amagama amafushane nezinhlamvu zezinketho zinhlamvu zesiLatin. Uma kusebenza ukhibhodi wesiGreki, wesiCyrillic (isiRashiya, isiYukreyini, isiBelarusi, isiSerbia, isiMacedonia, isiBulgaria), isiHebhulu, isi-Arabhu, isiPheresiya, isiThai noma isiKorea, awudingi ukushintsha izinhlelo: uma igama othayiphe lingeyona umyalo, igama elifushane noma inketho njengoba lime, i-CadCraft iyalifunda ngokhiye ocindezelile. Ukhiye ophawulwe ngu-`L` ekhibhodini lesiLatin usaqala i-`LINE`, nokhiye ongu-`C` usaphendula ku-`Close`, nanoma yisiphi isinamba ukhiye waleyo khibhodi awubeka kuwo. Uhlu lwemiyalo efanayo ephezulu komugqa womyalo lulandela lo mthetho. Umbhalo othayiphwe lapho umyalo ucela umbhalo (okuqukethwe kwe-{{cmd:TEXT}}, igama) awukaze ushintshwe.

Kokubili kungavalwa ku-{{ui:Izilungiselelo}}: {{ui:Commands on a non-Latin keyboard layout}} no-{{ui:Keypad decimal key}}.

## Ukubonisa izixhumanisi

Ibha yesimo ibonisa i-X ne-Y ye-crosshair (ku-UCS uma isethiwe), ngemva kwama-snap ne-Ortho. Lapho umyalo une-base point, wengeza `Δ` nebanga nengosi kusukela kuleyo phoyinti, isibonelo `Δ 1500 < 30°`: izinombolo ozithayipha njengo-`@1500<30`.

Sebenzisa {{cmd:ID}} ukuphrinta izixhumanisi zephoyinti no-{{cmd:DIST}} ukulinganisa phakathi kwamaphoyinti amabili.

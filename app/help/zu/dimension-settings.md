---
title: Setha usayizi wezilinganiso, izingxenyana nesikali
summary: Khetha ukuphakama kombhalo, usayizi womcibisholo, izingxenyana nesikali sonke kuzilinganiso ezintsha, uguqule ezikhona, futhi uqonde ukuthi izitayela zezilinganiso zisebenza kanjani ku-CadCraft.
keywords: isitayela sesilinganiso, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, isikali sonke, izingxenyana, usayizi womcibisholo, isikali sokuchaza, dimtextunit, amayunithi emibhalweni, mm, cm, m, km, amamillimitha, amamitha, dimlfac, dimpost
from: 8ec82a07
---

## Okuzofunda

Umbhalo wezilinganiso nomcibisholo kukhulu kangakanani, ukuthi ungazisetha kanjani ngomdwebo oshicilelwe ngo-1:50 noma 1:100, nokuthi ungazishintsha kanjani izilinganiso owazenza ngaphambili.

## Indlela usayizi bezilinganiso abasebenza ngayo

Isilinganiso ngasinye sinesethi yaso yosayizi: ukuphakama kombhalo, usayizi womcibisholo, izingxenyana, igebe eliseduze nombhalo, ukuthi imigqa yokwelula iqhubeka kangakanani ngaphesheya komugqa wesilinganiso, nokuthi iqala kangakanani kusuka kwento. Okuzenzakalelayo kuseduze nesitayela esijwayelekile se-ISO.

| Isilungiselelo | Okuzenzakalelayo | Umyalo |
|---|---|---|
| Ukuphakama kombhalo | 2.5 | {{cmd:DIMTXT}} |
| Usayizi womcibisholo | 2.5 | {{cmd:DIMASZ}} |
| Izingxenyana | 2 (izero ezisemuva ziyasuswa) | {{cmd:DIMDEC}} |
| Igebe eliseduze nombhalo | 0.625 | {{cmd:DIMGAP}} |
| Ukwelula ngaphesheya komugqa wesilinganiso | 1.25 | {{cmd:DIMEXE}} |
| Ukuphambuka kusuka kwento | 0.625 | {{cmd:DIMEXO}} |
| Isikali sonke | 1 | {{cmd:DIMSCALE}} |

Konke kukhuliswa ngesikali sonke. Setha usayizi njengoba uwafuna ephepheni (umbhalo ongu-2.5 mm), bese usetha isikali sonke sibe isikali sokushicilela (50 ku-1:50). Ngakho umbhalo ubude bawo ngu-2.5 × 50 = 125 wamayunithi omdwebo, futhi ushicilelwa ku-2.5 mm.

:::note
Izitayela zezilinganiso ezinamagama ziphathwa nge-{{cmd:DIMSTYLE}}: bona isigaba esingezansi. Ilinganiso ngalinye liphinde ligcine izilungiselelo ngazo lenziwa, ngakho ungashintsha elilodwa kuphela ku-{{ui:Izakhiwo}}.
:::

## Setha usayizi wezilinganiso ezintsha

Zombili izindlela ezingezansi zishintsha izilinganiso owenza kamuva kuphela.

### Ephaneli yamanje yezilungiselelo

1. Cindezela {{key:Esc}} ukuze kungakhethwa lutho. Kuthebhu ethi {{ui:Imodeli}} iphaneli elingakwesokudla lithi {{ui:Izilungiselelo zamanje}}.
2. Skrola uye phansi kwephaneli kuze kufike ku-{{ui:Izilinganiso ezintsha}}, udlule imigqa yezingqimba, yombala, namayunithi nomugqa othi {{ui:Ungqimba 0}} (kusikrini esincane iqala ngaphansi komphetho). Chofoza ku-{{ui:Isikali sonke}}, thayipha `50` bese ucindezela {{key:Enter}}.
3. Setha {{ui:Ukuphakama kombhalo}}, {{ui:Usayizi womcibisholo}} no-{{ui:Izingxenyana}} ngendlela efanayo uma ufuna amanani ahlukile.

Ibha yesimo iqinisekisa ngalinye, isibonelo "Overall scale for new dimensions: 50".

### Emugqeni womyalo

1. Thayipha `DIMSCALE` bese ucindezela {{key:Enter}}.
2. Ku-`Enter new value for DIMSCALE <1>`, thayipha `50` bese ucindezela {{key:Enter}}.

Umlando uqinisekisa "DIMSCALE = 50. Izilinganiso ezintsha zisebenzisa lokho; khetha ezikhona ukuze ushintshe ezakho." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} ne-{{cmd:DIMEXO}} zisebenza ngendlela efanayo. Cindezela {{key:Enter}} kumbuzo ukuze ugcine inani lamanje.

### Amafiti namayintshi ezilinganisweni

Izilinganiso ezintsha zisebenzisa ifomethi yobude yomdwebo: yisetha nge-{{ui:Length format}} ku-{{ui:Izilungiselelo zamanje}} noma nge-{{cmd:UNITS}} (bona [Amafiti namayintshi](topic:units-papers-scales#feet-and-inches-and-fractions)), bese ilinganiso elilandelayo lifunda `12'-6 1/2"`. {{cmd:DIMLUNIT}} isetha ifomethi yezilinganiso kuphela (2 ngezingxenyana, 3 engineering, 4 ezokwakha, 5 isigaxa). Ezilinganisweni ozenze kakade, khetha ilinganiso bese ukhetha {{ui:Ifomethi}} ku-{{ui:Izakhiwo}}; ngefomethi yesigaxa, ibhokisi lalo {{ui:Isigaxa}} lithatha amandla ka-2 (4 = 1/16).

## Izilinganiso ngo-mm, cm, m noma km

Ilinganiso lilinganisa ngamayunithi omdwebo. Lingabhala lobo bubanzi ngamamillimitha, amasentimitha, amamitha noma amakhilomitha, ngeyunithi emva kwenombolo: udonga olungu-1250 mm lufundeka `1250 mm`, `125 cm`, `1.25 m` noma `0.00125 km`.

1. Setha {{ui:Amayunithi}} omdwebo ku-{{ui:Izilungiselelo zamanje}} kuqala (bona [Amayunithi, usayizi wamaphepha nezikali](topic:units-papers-scales#drawing-units)), ukuze i-CadCraft azi ukuthi iyunithi yomdwebo ingani. Umdwebo ongenayo amayunithi ufundwa njengamamillimitha, futhi {{cmd:DIMTEXTUNIT}} iyasho lokho.
2. Ezilinganisweni ezintsha: cindezela {{key:Esc}} ukuze kungakhethwa lutho, bese ku-{{ui:Izilinganiso ezintsha}} ukhetha {{ui:Amayunithi emibhalo}}: {{ui:Iyunithi yomdwebo}}, `mm`, `cm`, `m` noma `km`.
3. Ezilinganisweni osezenzile: zikhethe, bese ku-{{ui:Izakhiwo}} › {{ui:Izinyunithi eziyinhloko}} ukhetha {{ui:Amayunithi emibhalo}}.

Noma thayipha {{cmd:DIMTEXTUNIT}} (`DTU`) bese uphendula `D`, `MM`, `CM`, `M` noma `KM`: ngezilinganiso ezikhethiwe kushintsha kuzo (isinyathelo esisodwa se-undo); uma kungekho okukhethiwe kusetha izilinganiso ezintsha.

{{ui:Izingxenyana}} ({{cmd:DIMDEC}}) isasetha ukuthi zingaki izingxenyana ezibonakalayo: ngamamitha nezingxenyana ezi-3, u-1234 mm ufunda `1.234 m`. Umbhalo ubhalwa njengenombolo yezingxenyana. Kwishidi, izilinganiso zilinganisa ngeyunithi yephepha leshidi (amamillimitha noma amayintshi).

I-DWG noma i-DXF elondoloziwe igcina okukhethiwe njengesikali sokukala sesilinganiso (DIMLFAC) nesijobelelo (DIMPOST, ` m`), ukuze ezinye izinhlelo zibonise umbhalo ofanayo. Uma ushintsha {{ui:Amayunithi}} omdwebo kamuva, izilinganiso ezibhalwe ngo-mm, cm, m noma km ziyalungiswa, ukuze zisabhale ubude obulungile. {{ui:Osetwe ngesandla (isikali noma isijobelelo)}} kusho ukuthi {{ui:Isikali sokukala}} noma isijobelelo sesilinganiso sasethwa ngenye indlela; khetha iyunithi ukuze uzishintshe.

## Shintsha izilinganiso ozenze ngaphambili

1. Chofoza elilodwa ilinganiso. Ikhanda lephaneli elingakwesokudla lithi {{ui:Isilinganiso}}.
2. Izilungiselelo zihlukaniswe ngezigaba; skrola uye phansi ukuze ufike kwezakamuva:
   - {{ui:Okuvamile}}: {{ui:Isitayela sesilinganiso}}
   - {{ui:Ijometri}}: {{ui:Uhlobo}} no-{{ui:Ukulinganiswa}} (kufundwa kuphela)
   - {{ui:Umbhalo}}: {{ui:Umbhalo ophoqelelwe}} no-{{ui:Ukuphakama kombhalo}}
   - {{ui:Imigqa namakhanda omcibisholo}}: {{ui:Usayizi womcibisholo}}
   - {{ui:Ukulingana}}: {{ui:Isikali sonke}}
   - {{ui:Izinyunithi eziyinhloko}}: {{ui:Izingxenyana}}
3. Thayipha inani elisha bese ucindezela {{key:Enter}}.

Ilinganiso liphinde lidwetshwe kabusha ngokushesha. Kwezilinganiso zengosi, {{ui:Izingxenyana (°)}} isetha izingxenyana zengosi.

:::note
Uma kukhethwe izilinganiso eziningi, iphaneli ibonisa imigqa abayabelana ngayo, nenani elihlukile phakathi kwazo lifunda {{ui:Iyahlukahluka}}. Inani othayipha lishintsha yonke ilinganiso ekhethiwe ngesinyathelo esisodwa, ngakho ukucindezela {{key:Mod+Z}} kubuyisela zonke.
:::

## Izilinganiso ezivela emidwebeni evuliwe

Ilinganiso elivela ku-DWG noma i-DXF evuliwe liboniswa njengoba lidwetshwe yinhlelo eyayenze. Iphaneli yalo ithi "Shown as the program that made it drew it. Change it and CadCraft draws it again in its own style." Uma ushintsha noma yiliphi inani, uhudula i-grip, noma uhambise ilinganiso, i-CadCraft iyidweba kabusha ngezinhloko zayo zomcibisholo nefonti yayo, isebenzisa usayizi awufunda kulelo fayela.

Ezinye izilinganiso zingafundwa kuphela njengoba zidwetshwe, ingasho ukuthi azihleleki njengezilinganiso. Iphaneli ibe isithi "Drawn from" negama lebhulokhi, nebhokisi elithi "About this file" liyazibala.

## Izinkinga ezivamile

- **Ushintsha i-DIMSCALE akukho okushintsha esikrinini.** Lesi silungiselelo sezilinganiso ezintsha. Khetha ezikhona bese ushintsha {{ui:Isikali sonke}} kwiphaneli.
- **Izingxenyana zibonisa izinombolo ezimbalwa kunalezo osethe.** Izero ezisemuva ziyasuswa: izingxenyana ezi-2 zibonisa `1250` no-`1250.5`, hhayi `1250.00`.
- **Umbhalo ukhulu ngokufanele ephepheni ku-viewport kodwa ungalungile ku-model plot.** Isikali sonke kufanele sifane nesikali osishicilela ngaso. Ukushicilela ngo-Fit to paper kunika isikali esingajwayelekile; khetha isikali esijwayelekile kwingxoxo yokushicilela.
- **Amayunithi afana ne-mm noma m embhalweni.** Khetha {{ui:Amayunithi emibhalo}} (bona [Izilinganiso ngo-mm, cm, m noma km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Noma yiliphi elinye igama ngemva kwenombolo, lithayiphe ku-override: `<> TYP.`.

## Izitayela zezilinganiso ezinamagama

Thayipha `DIMSTYLE` (`D`) ukuvula i-{{ui:Umphathi wesitayela sesilinganiso}}. Ibhala izitayela zomdwebo, ukuthi zingaki izilinganiso ezisebenzisa ngayinye, nokuthi yiphi emanje. **Standard** ihlala ikhona.

- {{ui:Setha okwamanje}}: izilinganiso ezintsha zisebenzisa izilungiselelo zalesi sitayela futhi zithwala igama layo.
- {{ui:Entsha…}}: isitayela esisha esiqala njengekhophi yaleso osikhethile.
- {{ui:Guqula…}}: izinkambu ezifanayo nesigaba selinganiso se-{{ui:Izakhiwo}} (imigqa namakhanda omcibisholo, umbhalo, ukulingana, amayunithi, amayunithi amaphinyana, nokubekezelela). Cindezela {{ui:KULUNGILE}} bese isitayela siyashintsha **futhi yonke ilinganiso esilisebenzisayo iyashintsha nso**, isilungiselelo ngesilungiselelo. Isilungiselelo osishintshele kwelinganiso elilodwa sihlala njengoba sinjalo, ngaphandle uma isitayela sishintsha lesosilungiselelo.
- {{ui:Qamba kabusha…}} no-{{ui:Susa}}: i-Standard ayinakuqanjwa kabusha noma isuswe, njengakwesitayela samanje noma esisetshenziswa izilinganiso.
- {{ui:Qhathanisa…}}: okuhluke phakathi kwezitayela ezimbili.
- {{ui:Sebenzisa kokukhethiwe}}: khetha izilinganiso kuqala; zithatha izilungiselelo zesitayela namagama aso.

`-DIMSTYLE` yenza okufanayo emugqeni womyalo: `Restore`, `Save` (izilungiselelo zamanje, kuhlanganise nalokho othayiphe nge-{{cmd:DIMTXT}} nezinye, ngaphansi kwegama), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Izitayela zigcinwa ku-DWG noma i-DXF (ithebula lazo lesitayela sezilinganiso) futhi zifundwa kumafayela avulekile. Isitayela *samanje* asigcinwa: umdwebo uvula no-Standard njengamanje. I-Standard igcina izilungiselelo zayo lapho esinye isitayela sisebenza.

## Shintsha umbhalo wesilinganiso nemigqa yokwelula

{{cmd:DIMEDIT}} (`DED`) isebenza ezilinganisweni ozikhethile: **Home** ibuyisela umbhalo lapho isitayela sawubeka khona, **New** ithayipha omunye umbhalo (`<>` imele inani elilinganisiwe), **Rotate** ijikeleza umbhalo, **Oblique** ithambekisa imigqa yokwelula yezilinganiso ezimile nezihleliwe ngengosi othayipha (cindezela {{key:Enter}} ukuze kungabikho). {{cmd:DIMTEDIT}} ihambisa umbhalo uye kwesobunxele, ngakwesokudla noma ngaphakathi komugqa wesilinganiso (**Left**, **Right** noma **Center**), noma iwujikeleze (**Angle**), noma uwubuyisele **Home**. Umbhalo ulele njalo emugqeni wesilinganiso: awukwazi ukudonswa uye endaweni engenalutho.

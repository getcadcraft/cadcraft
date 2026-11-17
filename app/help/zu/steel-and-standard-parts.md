---
title: Beka izigaba zensimbi nezingxenye ezijwayelekile
summary: Dweba izigaba zensimbi, izinhlangothi nezilungu ezi-3D kusuka etafuleni elishicilelwe lezigaba, beka izikulufo, amanathi, amawashari, izikhonkwane, amabheringi, izinkasa nezigiya ngokwamazinga awo, bese uzihlela ohlwini lwezingxenye.
keywords: insimbi, isigaba, iphrofayili, ishepu, w shape, wide flange, i-beam, ichaneli, i-angle, hss, ithyubhu, ipayipi, ipe, hea, heb, upn, ibhimu, insika, ilunga, ukuphakama, aisc, en 10365, izikulufo, inathi, iwashari, isikhonkwane, ibheringi, inkasa, igiya, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, izingxenye ezijwayelekile, uhlu lwezingxenye, bill of materials, bom, steelmember, partslist
from: 547c1048
---

Ethebhini le-{{ui:Standard}} lomtapo kukhona izinhlobo ezimbili zezinto, zenziwe lapha ngokusekelwe kumathebula ashicilelwe (akukho okulandwayo):

- **Izigaba zensimbi**: izingasayizi ezingu-1,335. W, S, C, L, HSS kanye ne-Pipe kusuka ku-AISC Shapes Database v16.0; IPE, HEA, HEB kanye ne-UPN kusuka ku-EN 10365:2017. I-DetailCraft isebenzisa itafula elifanayo.
- **Izingxenye ezijwayelekile**: izikulufo ezinekhanda le-hex (ISO 4017), izikulufo ze-hex (ISO 4014), amanathi e-hex (ISO 4032), amawashari avamile (ISO 7089), izikulufo ze-hex nezinathi ze-inch (ASME B18.2.1 kanye ne-B18.2.2), izikhonkwane ezilinganayo (ISO 2338), amabheringi ajulile ajikelezayo (ISO 15), izinkasa ezilinganayo (DIN 6885-1) nezigiya zesipur (amamodyuli kusuka ku-ISO 54).

Konke lapha kwabelwana ngaphansi kwe-CC0: sisebenzise noma ngabe yini, ngaphandle kokudinga ukuncoma.

## Beka isigaba sensimbi

1. Vula umtapo ({{ui:Library}} eqenjini le-Blocks, noma uthayipha `LIB`) bese uchofoza ithebhu {{ui:Standard}}.
2. Khetha umndeni ohlwini lokuqala, isibonelo {{ui:W shapes}}. Thayipha ebhokisini lokusesha ukuze unciphise izingasayizi: `W12` ibonisa zonke i-W12.
3. Ku-{{ui:Place as}}, khetha:
   - {{ui:Section}}: isigaba esiphambanayo, nesikhungo sayo sisesikhombeni sokufaka.
   - {{ui:Elevation}}: ilunga elibonwa ngakohlangothi, njengoba {{ui:Length (mm)}} ithi, kusuka emaphakathini esikhawu sayo sesobunxele.
   - {{ui:3D member}}: umthamo oqinile ethebhini le-3D (ngezansi).
4. Chofoza {{ui:Place}} ekhadini lesayizi, bese uchofoza lapho iya khona, njengakunoma iyiphi into yomtapo.

Isigaba noma ukuphakama kuba yibhulokhi. Izimpawu zalo ziphethe usayizi, ithebula elivela kulo, ubude (kokuphakama) nezinto ongazigcwalisa.

:::note
Ama-S, amachaneli nama-UPN adwetshwa ngamaflenji aqondile ngobukhulu besilinganiso, nama-angle ngamakhona asikwele: amaflenji angempela athambekile namakhona agobile. W, IPE, HEA kanye ne-HEB zinamaphethelo ezimpande, nama-HSS anemisakazo yamakhona.
:::

## Yenza ilunga le-3D

Khetha {{ui:3D member}} bese uchofoza {{ui:Place}}, noma uthayipha {{cmd:STEELMEMBER}} (`SMEMBER`) emugqeni womyalo:

1. Ku-`Usayizi wesigaba`, cindezela {{key:Enter}} ngosayizi obonisiwe, noma uthayipha elithile, isibonelo `HSS6x6x1/4` noma `IPE300`.
2. Chofoza indawo yokuqala, bese indawo yokugcina. Ilunga lihamba phakathi kwazo, lihlezi emhlabathini.
3. Ngekholomu, uthayipha [Insika (C)], chofoza indawo yayo yesisekelo bese uthayipha ukuphakama kwayo.

Ilunga liyinkomba evaliwe yomthamo oqinile ethebhini le-3D. Yihambise noma uyikopishe lapho njengoba ungenza ngenye inkomba oqinile. {{key:Mod+Z}} iyisusa futhi.

## Beka ingxenye ejwayelekile

1. Ethebhini le-{{ui:Standard}}, khetha umndeni, isibonelo {{ui:Hex head screws}}.
2. Ngesikulufo, ibhawodi, ikhonkwane noma inkasa, thayipha i-{{ui:Length (mm)}} (ama-inch emindenini ye-inch). Ngegiya, thayipha i-{{ui:Teeth}}, i-{{ui:Face width (mm)}} ne-{{ui:Bore (mm)}}. Shiya ibhokisi lingenalutho ukuze kusetshenziswe inani elijwayelekile elibonisiwe kulo.
3. Chofoza {{ui:Place}} ngesayizi bese uchofoza lapho iya khona.

Izikulufo, amabhawodi nezikhonkwane zidwetshwa ngakohlangothi, ngobuso bokuthwala bekhanda elisesikhundleni sokufaka; amanathi, amawashari, amabheringi nezigiya zibheke phezulu; izinkasa zivela phezulu. Izintambo zidwetshwa ngendlela ejwayelekile: impande njengomugqa omncane, nesiphetho sentambo njengomugqa omkhulu. Izigiya zidwetshwa njengesiyingi sekhanda, isiyingi sephimbo nesiyingi sempande, hhayi ngamazinyo ngamazinyo.

Ibhulokhi yengxenye ngayinye iphethe uhlobo lwayo, umgomo, usayizi, ubude nezinto njengezimpawu, nesisindo sayo esisuka kumumo osemthethweni wensimbi. Shintsha izinto ephaneli le-{{ui:Properties}}.

Izingxenye ezifanayo zikwomtapo njengezinto, futhi i-PartCraft iyazivula njengezingxenye ezinamapharamitha ({{ui:Standard part}} eqenjini lakhe le-File).

## Yenza uhlu lwezingxenye

- Emtapweni, chofoza {{ui:Parts list}}: yonke ingxenye ejwayelekile nesigaba sensimbi esidwebeni, siqoqwe ngohlobo, umgomo, usayizi, ubude nezinto, nenani nezinombolo zezinto. {{ui:Download CSV}} iyilondoloza ukuze isetshenziswe kuspredishithi.
- Ukuze uyidwebe, thayipha {{cmd:PARTSLIST}} (`PLIST`), chofoza ikhona elingaphezulu kwesobunxele setafula, bese ucindezela {{key:Enter}} ukuze uthole ukuphakama kombhalo ojwayelekile, noma uthayipha elithile.

Uhlu lufundwa kusuka ezimpawini zamabhulokhi, ngakho lusalungile ngemva kokuthi umdwebo ulondolozwe njenge-DWG noma i-DXF uphinde uvulwe.

## Izinkinga ezivamile

- **"Akukho sigaba sensimbi esibizwa ngokuthi …"**: thayipha usayizi njengoba ithebhu le-{{ui:Standard}} ilidwebela: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Ilunga lisethebhini le-3D, hhayi ku-ipulani.** {{cmd:STEELMEMBER}} yenza umthamo; vula ithebhu le-3D ukuze uliyibone. Ukuze ubonise insimbi ku-ipulani, beka futhi {{ui:Section}} noma {{ui:Elevation}}.
- **Ubude ngaphandle kobuningi.** Ibhawodi kumele libe lide kunekhanda lalo, nenkasa ide kunobubanzi bayo. Umugqa ongaphansi kwamakhadi utshela ukuthi yiliphi inani elenqatshiwe.

---
title: Ama-spline nama-polyline: SPLINE, SPLINEDIT, PEDIT
summary: Dweba ijika elibushelelezi ngamaphoyinti noma kusuka kupholigoni wokulawula, hlela ukulingana kwalo namaphoyinti okulawula, bese uhlela ama-polyline (hlanganisa, vala, ububanzi, lingana, spline, khipha ukugoba) noma uguqule i-spline ibe yi-polyline.
keywords: spline, splinedit, spl, spe, pedit, pe, amaphoyinti okulingana, amaphoyinti okulawula, izisindo, nurbs, ukuhlela i-polyline, hlanganisa, ijika elilinganayo, khipha ukugoba, guqula ibe yi-polyline, ukunemba, thangenti, ijika, ukubekezelela ukulingana
from: d31f72d8
---

## Okuzakwenziwa

Ijika elidlula emaphoyinteni amahlanu, bese lelo jika lihlelwa ngezindlela ezintathu, nopolyline owakhiwe ngemigqa emithathu.

## Dweba i-spline ngamaphoyinti

1. Thayipha `SPL` bese ucindezela {{key:Enter}}.
2. Chofoza noma uthayipha amaphoyinti ijika okufanele lidlule kuwo: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Cindezela {{key:Enter}} emva kwelokugcina.
3. {{ui:Ithangente yokuqala}}: chofoza iphoyinti ijika okufanele liphume ngalo, noma cindezela {{key:Enter}} ukuze lizikhethele. Yenza okufanayo kwe-ithangente yokugcina.

Ijika ludlula kuwo wonke amaphoyinti. Thayipha `C` esikhundleni se-{{key:Enter}} ukuze uyivale (ijika libuyela ephoyinteni lokuqala). {{key:U}} (`Hlehlisa`) ikhipha iphoyinti lokugcina ngesikhathi udweba.

### Dweba enye kusuka kupholigoni wokulawula

Thayipha `M` emyalweni wokuqala, bese `C` (Amaphoyinti okulawula) kanye nedigri elisuka ku-1 kuya ku-5 (3 yivo elijwayelekile). Manje amaphoyinti okhetha ayizikhonkwane zepholigoni eyidonsela ijika kuzo; ijika liqala kokokuqala liphele kokokugcina. Elivaliwe liyajikeleza, ngaphandle kwekhona endaweni yokuhlangana.

### Guqula i-polyline ibe yi-spline

Emyalweni wokuqala thayipha `O` (Object) bese ukhetha ama-polyline noma imigqa. Ayaba ama-spline ngokudlula emaphoyinteni awo; okokuqala ayanyamalala.

## Hlela i-spline

Yikhethe bese uthayipha `SPE` (noma uthayipha `SPE` bese uyichofoza). Izibambi zikhombisa amaphoyinti okulingana (noma amaphoyinti okulawula e-spline engenawo): hudula elilodwa ukuze ulenzele kabusha ijika. Esikhathini:

- **Fit data** (i-spline edwetshwe ngamaphoyinti): [Engeza (A)] yengeza iphoyinti lokulingana (chofoza lapho), [Susa (D)] isusa elilodwa (chofoza eduze kalo), [Hambisa (M)] ihambisa elilodwa (chofoza eduze kalo, bese uchofoza indawo yalo entsha), [Setha ithangente (T)] isetha ama-end tangent, [Hlanza (P)] ihlanza amaphoyinti okulingana, ukuze i-spline ihlelwe ngamaphoyinti ayo okulawula kusukela lapho.
- **Edit vertex**: [Engeza (A)] iyengeza iphoyinti lokulawula ngaphandle kokushintsha ijika, [Hambisa (M)] ihambisa elilodwa, [Isisindo (W)] linika elilodwa **isisindo** (ngaphezu kuka-1 lisondeza ijika kulo, ngaphansi kuka-1 libuyekeza).
- **Open** noma **Close**, kanye **Phambanisa** (ijika lisebenza ngolunye uhlangothi).
- **Guqula ibe yi-Polyline** ([Guqula (P)]): i-spline iba yi-polyline; ukunemba kungokuthi zingaki izingxenye ngayinye yesikhala ethola (10 yivo elijwayelekile).
- **Hlehlisa** ([Hlehlisa (U)]) ikhipha ushintsho lokugcina; [Phuma (X)] iyaphela.

**Izakhiwo** ikhombisa idigri ye-spline, ukuthi inamaphoyinti amangaki okulingana nokulawula, ubude bayo, futhi ikuvumela ukuyivula noma ukuyivala.

## Hlela i-polyline

Khetha i-polyline bese uthayipha `PE`. Umugqa, ijika noma i-spline oyikhethayo kuqala kunikezwa njenge-polyline ukuze iguqulwe (i-spline icela ukunemba).

- **Vala** / **Vula** ([Vala (C)] / [Vula (O)]) ihlanganisa noma ihlukanise izikhawu.
- **[Hlanganisa (J)]** yengeza imigqa, amajika nama-polyline ezikhawu zawo ezihlangana nesikhawu se-polyline. `Ibanga le-Fuzz` ukuthi izikhawu zingahlukana kangakanani zisahlanganise (0 kusho ukuthi kufanele zihlangane).
- **[Ububanzi (W)]** linika i-polyline yonke ububanzi obubodwa (0 liyasisusa).
- **[Lingana (F)]** ithatha indawo ye-polyline ngejika elibushelelezi eldlula kumaphoyinti ayo; **Spline** (`S`) ngo-cubic B-spline elilandela wona (liqala futhi liphele emaphoyinteni okuqala nokugcina futhi lihlala eduze kwamanye). Zombili ziba yi-polyline yemigqa emifushane, futhi amakhona okuqala ayagcinwa, ngakho **[Khipha ukugoba (D)]** iwabuyisa.
- **Ltype gen** ithi uhlobo lomugqa oluqhekekile luyaqhubeka kuyo yonke i-polyline noma luqala kabusha kulo lonke iphoyinti.
- **Phambanisa** iguqula ukuhleleka kwamaphoyinti ayo. **[Okuningi (M)]** (`M` emyalweni wokuqala) ihlela ama-polyline amaningi ngezinketho ezifanayo.

Ukuhlela amaphoyinti e-polyline ku-{{ui:Properties}} noma ngezibambi akushintshi lutho: i-PEDIT ayinawo umhleli wamaphoyinti.

## Emafayelini

DWG ne-DXF 2000 zigcina i-spline njengespline: idigri, amaphoyinti okulawula, izibopho, izisindo, amaphoyinti okulingana nama-tangent. I-spline ovula ungayishintshi ibhalwa kabusha ngokuphelele njengoba yafika. I-DXF R12 ayinayo i-spline: igcinwa njenge-polyline elandela ijika, futhi umlando ubonisa inani lazo.

I-Offset, trim, extend, fillet, break kanye ne-join akusebenzi ku-spline. Ukuze uthole i-polyline eyamukelwa yilezo zomyalo, {{cmd:EXPLODE}} i-spline, noma {{cmd:PEDIT}} yona.

## Izinkinga ezivamile

- **Ijika liyadlula phakathi kwamaphoyinti aseduze.** Ijika ledlula amaphoyinti lapho amaphoyinti egoba khona. Sebenzisa amaphoyinti ambalwa, noma ipholigoni yokulawula.
- **"Lokho akuyona i-spline."** I-SPLINEDIT ithatha ama-spline kuphela; {{cmd:PEDIT}} ihlela ama-polyline.
- **I-spline evaliwe yokulingana inesimo esihlukile kancane kwesinye isofthiwe.** I-CadCraft iyivala ngokuhlangana okubushelelezi ephoyinteni lokuqala; enye inhlelo ingayivala ngejika elijikelezayo. I-spline evaliwe yamaphoyinti okulawula ifana kuzo zombili.

---
title: Izingqimba zemephu ngaphansi komdwebo
summary: Bonisa amamephu emigwaqo, izithombe zasemoyeni noma isithombe esine-world file ngaphansi kwesikhala semodeli, sibekwe uhlelo lokuxhumanisa lomdwebo.
keywords: imephu, izingqimba zemephu, maplayers, ml, geomap, basemap, asemoyeni, satellite, tiles, xyz, wms, wmts, isevisi yemephu, world file, uhlelo lokuxhumanisa, epsg, state plane, utm, georeference, isakhiwo sesayithi, indawo yejografi, geodata, kulondoloziwe, dwg, dxf
from: f103045f
---

## Okuzokwenza

Isakhiwo sesayithi esidwetshwe phezu kwesithombe sasemoyeni noma imephu yemigwaqo, ngayinye endaweni efanele.

## Tshela i-CadCraft ukuthi umdwebo ukuphi

1. Setha amayunithi omdwebo ku-{{ui:Izakhiwo}} › {{ui:Amayunithi}} (isibonelo amanyawo noma amamitha).
2. Thayipha {{cmd:MAPLAYERS}} (noma `ML`) bese ucindezela {{key:Enter}}.
3. Ngaphansi kwe-{{ui:Lapho umdwebo ukhona}}, thayipha igama noma ikhodi ye-EPSG ku-{{ui:Thola uhlelo}} (isibonelo `2277` noma `Texas Central`) bese ukhetha kwi-{{ui:Uhlelo}}.
4. Uma umdwebo udwetshwe ngokuxhumana kwalolo hlelo lwalo, shiya ukubekwa kube ku-0. Uma kungenjalo, nika iphoyinti elilodwa lomdwebo ({{ui:Umdwebo X}}, {{ui:Umdwebo Y}}), lapho lelo phoyinti lisemugqeni wemephu ({{ui:Empumalanga (E)}}, {{ui:Enyakatho (N)}}), nokuthi umdwebo ujikwe kangakanani ukusuka empumalanga ({{ui:Ujikiwe (°)}}).
5. Chofoza {{ui:Sebenzisa lolu hlelo}}.

## Engeza ungqimba

1. Vula {{ui:Izingqimba zemephu ezivela ku-inthanethi}} phezulu kwengxoxo. Kuze kube yilapho, akukho seva ebuzwa lutho; uma ivuliwe, amaseva oyengezayo abona indawo esikrinini nekheli lakho le-inthanethi, hhayi umdwebo wakho.
2. Ku-{{ui:Engeza iqoqo}}, khetha lapho lusuka khona:
   - **Amathayili (XYZ)**: ikheli lethayili elinezo `{z}`, `{x}` no-`{y}`, igama nokubonga umhlinzeki wayo akucelayo.
   - **WMS**, **WMTS** noma **ArcGIS**: ikheli leseva, bese {{ui:Thola izingqimba}} bese ukhetha eyodwa.
   - **Isithombe**: i-PNG noma i-JPEG enefayela layo le-world (no-`.prj` uma likhona).
3. Ungqimba ubonakala ngaphansi komdwebo. Ukubonga kwawo kubonakala ngakwesokudla ngaphansi komdwebo.

Ungqimba ngayinye kuhlu ingafihlwa, yenziwe ibonakale kancane noma ibe nokukhanya okuncane, ihanjiswe phezulu noma phansi, noma isuswe.

Yonke inguquko yohlelo noma yezingqimba iyisinyathelo esisodwa se-{{cmd:UNDO}}.

## Kugcinwe nomdwebo

Uhlelo lokuxhumanisa nohlu lwezingqimba kugcinwa emdwebeni uma ulondoloza njenge-DWG noma DXF, futhi buyela uma uwuvula futhi, kunoma iyiphi ikhompyutha. Izithombe ezivela emafayeleni aziloondolozwa: zengeze futhi emva kokuvula. Iswishi ye-{{ui:Izingqimba zemephu ezivela ku-inthanethi}} ayilondolozwa emdwebeni: iyeyalo lalesi siphequluli, ngakho umdwebo umuntu akuthumelayo ungabuzi lutho kunoma iyiphi iseva uze uyivule ngokwakho.

Okubonwa yizinhlelo ezinye:

| Kulondolozwe njenge | Indawo yomdwebo | Izingqimba zemephu |
|---|---|---|
| DWG 2010, 2013 noma 2018, DXF 2000 | Ibhalwe ngendlela ejwayelekile izinhlelo ezifunda ngayo indawo yejografi yomdwebo: ikhodi ye-EPSG yohlelo, iphoyinti elilodwa lomdwebo nokuthi lisemugqeni wemephu, amayunithi nenorth. | I-CadCraft kuphela |
| DWG 2000, 2004 noma 2007, DXF R12 | I-CadCraft kuphela (i-CadCraft iyasho lokho uma ulondoloza) | I-CadCraft kuphela |

- **Kuhlolwe:** i-ODA File Converter ifunda indawo ngaphandle kwamaphutha, futhi ilabhulali ye-DXF (ezdxf) ifunda ikhodi ye-EPSG nokubekwa ngokunembile.
- **Akukahlolwa:** ukuthi ezinye izinhlelo zokudweba zibona yini uhlelo ngekhodi yalo ye-EPSG. Uhlelo olugcina uhlu lwalo lohlelo ngamagama ahlukile lungabonisa umdwebo ngaphandle kwendawo.
- Ezinye izinhlelo zibonisa ibhulokhi egama lalo ngu-`CADCRAFT_GEO` ohlwini lwamabhulokhi. Iyikhophi ye-CadCraft yohlelo nezingqimba, ayikaze ibekwe emdwebeni. Yishiye lapho.

## Imidwebo evela ezinhlelweni ezinye

Uma umdwebo ovela kwenye inhlelo unendawo yejografi, i-CadCraft iyifunda:

- Uma unikeza ikhodi ye-EPSG, {{ui:Lapho umdwebo ukhona}} ibonisa lolo hlelo, futhi izingqimba zemephu zibekwa yilo.
- Uma i-CadCraft ingalazi uhlelo (igama lohlelo lwenye inhlelo, igridi yendawo, noma isici sesikali), indawo ayisetshenziswa, kodwa iyagcinwa futhi iyabuyiselwa njengoba ibiyunjalo, ukuze lolo hlelo olunye lisabe lukuthola. Khetha uhlelo ku-{{ui:Lapho umdwebo ukhona}} ukuze ulushintshe.

:::note
Izingqimba zemephu zidwetshwa esikrinini kuphela: azinyathelwa. Sebenzisa amasevisi emephu anemigomo evumela lokho, futhi ugcine ukubonga kwawo kubonakala.
:::

---
title: Hambisa, sika, elula, fillet nama-chamfer odonga
summary: Guqula imigqa eyodwa ibe odongeni ababili ngoku-Offset, hlanza amakhona nge-Fillet, usike futhi welule imigqa nge-Trim ne-Extend.
keywords: offset, trim, extend, fillet, chamfer, bevel, break, breakatpoint, lengthen, odonga, ikhona, sika, okufanayo, iradiyasi, ukuhlanza
from: c6c5cbd0
---

## Okuzokwenziwa

Ikamelo elincane elinodonga abayi-200 ububanzi: ubuso bangaphakathi budwetshwa, ubuso bangaphandle buyaphinde buzuzwe, amakhona ahlanzwa, nesango liyasikwa kodonga olulodwa.

## Dweba ubuso bangaphakathi

1. Thayipha `L` bese ucindezela {{key:Enter}}.
2. Thayipha `0,0` bese ucindezela {{key:Enter}}.
3. Thayipha `@5000,0` bese ucindezela {{key:Enter}}.
4. Thayipha `@0,4000` bese ucindezela {{key:Enter}}.
5. Thayipha `@-5000,0` bese ucindezela {{key:Enter}}.
6. Thayipha `C` bese ucindezela {{key:Enter}}.
7. Chofoza {{ui:Extents}}.

Unemigqa emine ehlukene. (I-polyline evaliwe ingaqoqwa ngesinyathelo esisodwa; imigqa ehlukene ikhombisa ukuthi i-Fillet ihlanza kanjani amakhona.)

## Hambisa ubuso bangaphandle

1. Thayipha `O` bese ucindezela {{key:Enter}}. Umyalo uthi `Specify offset distance [Through] <Through>:`.
2. Thayipha `200` bese ucindezela {{key:Enter}}.
3. Ku-`Select object to offset`, chofoza umugqa osezansi.
4. Ku-`Specify point on side to offset`, chofoza noma yiluphi uhlangothi ngaphansi kwawo. Umugqa ofanayo uvela ungaphansi nge-200.
5. Chofoza umugqa wesokudla, bese uchofoza ngakwesokudla kwawo.
6. Chofoza umugqa ongenhla, bese uchofoza ngaphezulu kwawo.
7. Chofoza umugqa wesobunxele, bese uchofoza ngakwesobunxele kwawo.
8. Cindezela {{key:Enter}} ukuqeda umyalo.

Kufanele ubone imigqa emine yangaphandle, eyilingana ubude nomugqa wangaphakathi wayo, ngakho amakhona angaphandle awahlangani.

:::tip
Cindezela {{key:Enter}} ebuzweni lebanga ukusebenzisa futhi ibanga lokugcina. Thayipha `T` ye-Through: bese ikhophi ngayinye idlula iphoyinti ochofoza kulo, kungakhathaliseki ibanga lalo.
:::

{{cmd:OFFSET}} isebenza emigqeni, kuma-arc, kwizindilinga nakuma-polyline. Ukufaka i-offset kuma-polyline avaliwe kufaka i-offset kuyo yonke imbonelo, namakhona.

## Hlanza amakhona angaphandle nge-Fillet

{{cmd:FILLET}} ihlanganisa imigqa emibili ekhoneni: iyayisika noma iyelule zombili ukuze zihlangane. Ngeradiyasi ye-0 ikhona iba isikwele.

1. Thayipha `F` bese ucindezela {{key:Enter}}. Umyalo uthi `Select first line [Radius]:`.
2. Uma i-fillet yokugcina owayenzile isebenzise iradiyasi, thayipha `R`, cindezela {{key:Enter}}, thayipha `0` bese ucindezela {{key:Enter}}.
3. Chofoza umugqa wangaphansi wangaphandle eduze kwesiphetho sawo sokudla.
4. Ku-`Select second line`, chofoza umugqa wangaphandle wesokudla eduze kwesiphetho sawo esiphansi.

Imigqa manje ihlangana ekhoneni elibukhali, umyalo uyaphela.

5. Cindezela {{key:Enter}} ukuphinda {{cmd:FILLET}}, bese wenza ikhona elilandelayo.
6. Phinda uze wonke amakhona angaphandle ahlangane.

Chofoza umugqa ngamunye engxenyeni ofuna ukuyigcina. Ngeradiyasi engaphezu kuka-0, i-Fillet yengeza i-arc phakathi kwemigqa esikhundleni salokho.

:::tip
Thayipha `M` embuzweni wokuqala ukwenza wonke amakhona ngesinyathelo esisodwa, noma dweba ubuso bangaphandle njenge-polyline evaliwe bese uthayipha `P`: yonke ikhona yenziwa ngesikhathi esisodwa. Bamba {{key:Shift}} lapho uchofoza umugqa wesibili ukuze uthole ikhona ebukhali ngaphandle kokushintsha iradiyasi.
:::

## Chamfer ikhona nge-Chamfer

{{cmd:CHAMFER}} isika ikhona ngomugqa oqondile.

1. Thayipha `CHA` bese ucindezela {{key:Enter}}.
2. Thayipha `D` bese ucindezela {{key:Enter}}. Thayipha `300` bese ucindezela {{key:Enter}} ibanga lokuqala, bese ucindezela {{key:Enter}} ukusebenzisa u-300 nokwesibili.
3. Chofoza umugqa ongenhla wangaphakathi eduze kwesiphetho sawo sokunxele, bese umugqa wesobunxele wangaphakathi eduze kwesiphetho sawo esiphezulu.

Ikhona isikwa emuva nge-300 ngomugqa ngamunye, nomugqa we-bevel uyahlanganisa. Thayipha `A` esikhundleni se-`D` ukunikeza ubude emgqeni wokuqala nengxenye.

## Sika isango nge-Trim

Okokuqala dweba izinkamba zesango ezidlula odongeni olungaphansi, bese usika imigqa yodonga phakathi kwazo.

1. Thayipha `L` bese ucindezela {{key:Enter}}.
2. Thayipha `1000,200` bese ucindezela {{key:Enter}}.
3. Thayipha `@0,-600` bese ucindezela {{key:Enter}}, bese ucindezela futhi {{key:Enter}}.
4. Cindezela {{key:Enter}} ukuphinda {{cmd:LINE}}.
5. Thayipha `1900,200` bese ucindezela {{key:Enter}}.
6. Thayipha `@0,-600` bese ucindezela {{key:Enter}}, bese ucindezela futhi {{key:Enter}}.

Usunemigqa emifushane emibili edlula odongeni olungaphansi, ihlukaniswe ngama-900.

7. Thayipha `TR` bese ucindezela {{key:Enter}}. Umlando uthi `Current settings: Quick mode, edges: No extend`.
8. Chofoza umugqa ongaphakathi ongezansi phakathi kwezinkamba ezimbili. Lowo mkhakha uyanyamalala. (Qala ubeke isikhombi phezu kwawo: isigaba esizonyamalala siba mnyama futhi sibe nemigqa.)
9. Chofoza umugqa wangaphandle ongezansi phakathi kwezinkamba ezimbili. Lowo mkhakha nawo uyanyamalala.
10. Chofoza ingxenye ngayinye yenkamba ephuma ngaphezu kodonga, nengxenye engaphansi kwayo.
11. Cindezela {{key:Enter}} ukuqeda umyalo.

Kufanele ubone ukuvulwa okungu-900 odongeni olungaphansi, nezinkamba zivala izinhlangothi zodonga.

Kwimodi esheshayo (eyinkimbinkimbi ngokuzenzakalelayo) i-Trim ayibuzi ukukhetha imiphetho yokusika kuqala: yonke into ebonakalayo iyimingcele yokusika. Khetha isigaba ofuna ukusinyamalala, noma hudula indlela ngezigaba eziningi ukuze uzisike zonke ngesikhathi esisodwa. Thayipha `U` bese ucindezela {{key:Enter}} ukubuyisela ukukhetha okwedlule noma ukuhudula ngaphandle kokushiya umyalo. I-fence, i-crossing, imiphetho ekhethiwe kanye ne-{{key:Shift}} ukwelula kuchazwe ku-[Trim and extend](topic:trim-and-extend).

## Elula umugqa uze uhlangane nomunye

{{cmd:EXTEND}} ielula umugqa, i-arc noma isiphetho se-polylineize ihlangane nento elandelayo kuleyo ndlela.

1. Thayipha `L` bese ucindezela {{key:Enter}}.
2. Thayipha `1000,2000` bese ucindezela {{key:Enter}}.
3. Thayipha `@2000,0` bese ucindezela {{key:Enter}}, bese ucindezela futhi {{key:Enter}}. Umugqa umisa ngo-2000 ngaphambi kodonga lwesokudla.
4. Thayipha `EX` bese ucindezela {{key:Enter}}.
5. Chofoza umugqa omusha eduze kwesiphetho sawo sokudla.
6. Cindezela {{key:Enter}} ukuqeda umyalo.

Umugqa manje uhamba kuze kufike ebusweni bangaphakathi bodonga lwesokudla. Yonke into ebonakalayo iyimingcele; khetha eduze kwesiphetho okufanele sikhule. Ngaphakathi kwe-{{cmd:TRIM}}, ukuchofoza nge-{{key:Shift}} kwenza okufanayo.

## Hlukanisa nelula

{{cmd:BREAK}} (`BR`, noma {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) isika igebe ngaphandle komphetho wokusika: chofoza into lapho igebe liqala khona (lokho kuchofoza iphoyinti lokuqala), bese uchofoza lapho liphela khona. Esiyingini, ingxenye eqhubeka ngokuphambene nesikhathi sewashi kusuka eliphoyinteni lokuqala kuya kolesibili iyahamba. `F` embuzweni wesibili ikuvumela ukuthi unikeze iphoyinti lokuqala futhi, ne-{{cmd:BREAKATPOINT}} ihlukanisa into ibe yimbili kuphoyinti elilodwa ngaphandle kwegebe.

{{cmd:LENGTHEN}} (`LEN`) iguqula ubude esiphethweni esisodwa:

1. Thayipha `LEN` bese ucindezela {{key:Enter}}. Chofoza umugqa ukubona ubude bawo bamanje; umyalo uyabuza futhi.
2. Khetha indlela: `DE` (Delta: inani lokungeza, elibi ukuze uthathe; `A` ye-engeli ye-arc), `P` (Percent: 50 iyihlukanisa ngesigamu), `T` (Total: ubude okufanele ibe bona) noma `DY` (Dynamic: hudula isiphetho).
3. Chofoza ngayinye yezinto eduze kwesiphetho okufanele sihambe. `U` ibuyisela owokugcina; {{key:Enter}} iyaphela.

Imigqa, ama-arc nama-polyline avulekile (isegment yawo yokugcina yesiphetho) angelulwa.

## Izinkinga ezivamile

- **Umugqa wonke wanyamalala.** Akukho okuwudlulayo, ngakho imodi esheshayo wawususa. Thayipha `U` ukuwubuyisela; hlola ukuthi umugqa wokusika ngempela uwudlula (zoom ngaphakathi) futhi awukho esendaweni evaliwe noma ekhenyiwe.
- **"No boundary in that direction."** I-Extend ayithole lutho olungangena kulo. Khetha eduze kwesiphetho okufanele sikhule.
- **"Radius is too large."** I-arc ingadlula isiphetho somugqa owodwa. Sebenzisa iradiyasi encane.
- **"Only the first or last segment of an open polyline can be cut back."** Khetha izigaba ezimbili ze-polyline eziseduze, noma thayipha `P` ukuzungezela wonke amakhona ayo.
- **I-offset iye ohlangothini olungafanele.** Uhlangothi yilapho ochofoza khona ngemva kokukhetha into. Hlehlisa nge-{{key:Mod+Z}} bese uchofoza ohlangothini olunye.
- **"Cannot offset that far."** I-offset izoguqula i-arc, indilinga noma i-polyline ngaphakathi ngaphandle. Sebenzisa ibanga elincane.

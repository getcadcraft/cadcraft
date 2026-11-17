---
title: Michoro iliyochanganuliwa na ufuatiliaji
summary: Leta karatasi iliyochanganuliwa, ipime na uinyooshe, isafishe, futa sehemu zake, nasa kwenye mistari yake na uifuatilie kuwa mistari na matao.
keywords: skani, mchoro uliochanganuliwa, raster, tiff, jpeg, png, skeli, panga, nyoosha, ondoa madoa, kizingiti, nyeusi na nyeupe, punguza, futa, fuatilia, vectorize, nasa, matao, uwekaji kivuli, michoro ya karatasi, michoro ya zamani, scanattach, scantrace
from: 36227e5b
---

## Kutoka karatasi halisi hadi vitu vya mchoro

Mchoro uliochanganuliwa ni picha. CadCraft huhifadhi picha uliyoitoa na kamwe hairekebishi: kila hatua ya kusafisha hutengeneza picha mpya, hatua moja ya kutendua kila moja, na {{cmd:SCANINFO}} huorodhesha faili ya asili na hatua zilizochukuliwa tangu hapo. Hakuna kinachotumwa popote na hakuna kinachokisiwa na modeli iliyofunzwa: kusafisha na kufuatilia ni usindikaji wa picha wa kawaida, na unaendeshwa kwenye kompyuta yako.

1. **Ingiza.** {{cmd:SCANATTACH}} inasoma PNG, JPEG, TIFF (ukurasa mmoja, au kurasa zote za faili lenye kurasa nyingi) au ukurasa wa PDF ambao ni picha. Inauliza ukurasa, kona ya chini kushoto na upana. Kwa ukurasa wa PDF pia inauliza pikseli ngapi kwa inchi ya kuuchora nazo.
2. **Pima.** {{cmd:SCANSCALE}}: chagua nukta mbili kwenye skani, kisha andika umbali halisi kati yake. Karatasi inapimwa kuzunguka nukta ya kwanza.
3. **Panga.** {{cmd:SCANALIGN}}: chagua nukta mbili kwenye skani na mahali mbili wanapostahili; karatasi inahamia na kugeuka ili itoshe, na inapimwa pia isipojibu Hapana.
4. **Nyoosha.** {{cmd:SCANDESKEW}} hupima pembe ambazo mistari mirefu ya karatasi inalala, na kuionyesha pamoja na uhakika wake. Ikubali, au andika yako, na karatasi inageuzwa. Karatasi yenye mistari mirefu michache hupata onyo: kagua pembe kabla ya kuikubali.
5. **Safisha.** {{cmd:SCANCLEAN}} inafanya karatasi kuwa nyeusi na nyeupe (Auto husawazisha karatasi kwanza; Adaptive hufuata mabadiliko ya karatasi kwa karibu zaidi; Level ni namba moja kwa karatasi nzima) na kuondoa madoa hadi ukubwa uliouweka.
6. **Punguza na ufute.** {{cmd:SCANCROP}} huhifadhi dirisha. {{cmd:SCANERASE}} hufuta mstatili, poligoni au kamba (bonyeza na buruta): mihuri, maelezo, alama ya kikombe cha kahawa.

Picha iliyosafishwa ndiyo inayoshikiliwa na DWG iliyohifadhiwa (IMAGE na IMAGEDEF yake, pamoja na faili ya picha kando ya mchoro, kama ilivyo kwa picha yoyote).

## Nasa kwenye mistari ya skani

Ukiwa na {{cmd:RASTERSNAP}} imewashwa (chaguo-msingi), nasa za vitu pia hupata mistari ya skani nyeusi na nyeupe: ncha za mistari, katikati yake, kona na makutano, zikionyeshwa kwa alama za kawaida za kunasa. Sehemu ya karatasi iliyo chini ya kishale inafuatiliwa unaposogea; kuza vya kutosha ili pikseli moja iwe pikseli chache za skrini. Mstari mrefu kuliko sehemu inayofuatiliwa unafuatwa hadi ncha zake.

## Ufuatiliaji

{{cmd:SCANTRACE}} hugeuza mistari ya karatasi kuwa mistari na matao kwenye tabaka jipya (SCAN-TRACE), kama hatua moja ya kutendua, huku skani ikiwa bado chini yake. Unaweka:

- **Uvumilivu:** mstari au tao uliofuatiliwa unaweza kuwa umbali gani kutoka mistari ya skani, kwa vitengo vya mchoro (ripoti pia inatoa pikseli). Uvumilivu mkali hufuata kila mtetemo; uliolegea hutoa vipande vichache, vilivyonyooka zaidi.
- **Dirisha:** kona ya karatasi, au karatasi nzima.
- **Matao:** ikiwa imezimwa, inatoa mistari pekee.
- **Mabaki:** kile ambacho ufuatiliaji uliacha bila kugusa kinachorwa kama visanduku kwenye tabaka unaloweza kuzima, au hakichorwi.

Ufuatiliaji hutafuta katikati ya kila kiharusi, kuufuata, kutoshea mistari nyoofu na matao ya duara kwake, kuunganisha mfululizo uliokatwa mahali mstari mwingine ulipovuka, kufanya mistari iliyo karibu bapa na wima kuwa bapa na wima kabisa, na kufunga kona. **Maandishi na uwekaji kivuli hubaki kama raster:** vipande vya ukubwa wa herufi huwekwa kando, na vifungu vya mistari mifupi sambamba vinachukuliwa kuwa uwekaji kivuli na kuwekwa kando.

Likimaliza, linasema ni mistari na matao mangapi lilitengeneza, uvumilivu, na vipande vingapi liliviacha kama raster. **Hiyo ni kile pikseli zilichotoa, kwa uvumilivu huo, na si madai kwamba matokeo ni sahihi.** Linganisha na karatasi: ufuatiliaji unaweza kukosa mstari hafifu, kuunganisha mistari miwili iliyo karibu sana, au kuchora mstari mahali pa doa tu. Safisha skani kwanza (iliyonyooshwa, nyeusi na nyeupe, madoa yameondolewa) na matokeo ni bora zaidi.

##Isichosoma

Faili za TIFF zilizohifadhiwa kwa vigae, BigTIFF, TIFF yenye mgandamizo wa JPEG au deflate, usimbaji wa faksi Group 3 na rangi zilizohifadhiwa kwenye ndege tofauti hukataliwa kwa ujumbe; zihifadhi tena kama vipande kwa LZW, PackBits, Group 4 au bila mgandamizo. Faili za PNG zilizochanganywa (interlaced) pia hukataliwa. Faili zilizozidi 128 MB au pikseli milioni 100 hukataliwa, na dirisha la ufuatiliaji linaweza kuwa na pikseli milioni 64 kwa kiwango cha juu.

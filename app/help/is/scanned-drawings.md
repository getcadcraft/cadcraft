---
title: Skannaðar teikningar og rakning
summary: Settu inn skannað blað, skalaðu það og réttu það, hreinsaðu það, eyddu hlutum úr því, smelltu á línur þess og raktu það í línur og boga.
keywords: skanni, skönnuð teikning, raster, tiff, jpeg, png, mælikvarði, jafna, rétta, hreinsa, þröskuldur, svart og hvítt, klippa, eyða, rekja, vigra, smella, bogar, skygging, pappírsteikningar, gamlar teikningar, scanattach, scantrace
from: 36227e5b
---

## Frá pappírsblaði í teikningarhluti

Skönnuð teikning er mynd. CadCraft geymir myndina sem þú gafst því og breytir henni aldrei: hvert hreinsunarskref býr til nýja mynd, með einu afturköllunarskrefi hvert, og {{cmd:SCANINFO}} sýnir upprunalegu skrána og skrefin sem tekin hafa verið síðan. Ekkert er sent neitt og ekkert er giskað með þjálfuðu líkani: hreinsunin og rakningin eru venjuleg myndvinnsla og keyra á tölvunni þinni.

1. **Settu hana inn.** {{cmd:SCANATTACH}} les PNG, JPEG, TIFF (eina síðu, eða allar síðurnar í margsíðu-skrá) eða PDF-síðu sem er mynd. Hún spyr um síðuna, neðra vinstra horn og breidd. Fyrir PDF-síðu spyr hún líka hve marga pixla á tommu eigi að teikna síðuna með.
2. **Skalaðu hana.** {{cmd:SCANSCALE}}: veldu tvo punkta á skönnuninni, og sláðu síðan inn raunfjarlægðina á milli þeirra. Blaðið er skalað um fyrsta punktinn.
3. **Jafnaðu hana.** {{cmd:SCANALIGN}}: veldu tvo punkta á skönnuninni og þá tvo staði sem þeir tilheyra; blaðið færist og snýst til að passa, og skalast líka nema þú svarir Nei.
4. **Réttu hana.** {{cmd:SCANDESKEW}} mælir hornið sem löngu línur blaðsins liggja í og sýnir það ásamt því hversu viss það er. Samþykktu það, eða sláðu inn þitt eigið, og blaðið er snúið. Blað með fáum löngum línum fær aðvörun: athugaðu hornið áður en þú samþykkir.
5. **Hreinsaðu hana.** {{cmd:SCANCLEAN}} gerir blaðið svart og hvítt (Sjálfvirkt jafnar fyrst pappírinn; Aðlögunarhæft fylgir breytingum pappírsins nánar; Stig er ein tala fyrir allt blaðið) og fjarlægir dropa upp að þeirri stærð sem þú stillir.
6. **Klipptu og eyddu.** {{cmd:SCANCROP}} heldur einum glugga. {{cmd:SCANERASE}} eyðir rétthyrningi, marghyrningi eða lassói (ýttu og dragðu): stimplum, athugasemdum, kaffihring.

Hreinsaða myndin er það sem vistuð DWG-skrá geymir (IMAGE og IMAGEDEF, með myndaskránni við hlið teikningarinnar, eins og fyrir hverja mynd).

## Smelltu á línur skannans

Með {{cmd:RASTERSNAP}} á (sjálfgefið) finna smellipunktar líka línur svart-hvítrar skönnunar: enda lína, miðjur þeirra, horn og skurðpunkta, merkt með venjulegum smellimerkjum. Hluti blaðsins undir bendlinum er rakinn þegar þú hreyfir hann; þysjaðu nógu nærri að pixill sé nokkrir skjápixlar. Lína sem er lengri en hlutinn sem verið er að rekja er rakin út í enda sína.

## Rakningin

{{cmd:SCANTRACE}} breytir línum blaðsins í línur og boga á nýju lagi (SCAN-TRACE), sem eitt afturköllunarskref, með skönnunina ennþá undir þeim. Þú stillir:

- **Vikmörk:** hversu langt rakin lína eða bogi má liggja frá línunum á skönnuninni, í teikningareiningum (skýrslan gefur líka pixla). Þröng vikmörk fylgja hverri ójöfnu; víð gera færri og beinni búta.
- **Gluggi:** horn á blaðinu, eða allt blaðið.
- **Bogar:** slökkt gerir aðeins línur.
- **Afgangur:** það sem rakningin skildi eftir er teiknað sem kassar á lagi sem þú getur slökkt á, eða ekki teiknað.

Rakningin finnur miðju hvers striks, rekur hana, lagar bein strik og hringboga að henni, tengir keyrur sem voru skornar þar sem önnur lína krossaði þær, gerir nærri lárétt og nærri lóðrétt strik alveg lárétt og lóðrétt, og lokar hornum. **Texti og skygging haldast sem raster:** bútar á stærð við letur eru settir til hliðar, og knippi stuttra samsíða lína eru talin skygging og sett til hliðar.

Þegar hún er búin segir hún hversu margar línur og boga hún gerði, vikmörkin og hversu marga búta hún skildi eftir sem raster. **Það er það sem pixlarnir gáfu, að þessum vikmörkum, og er ekki fullyrðing um að niðurstaðan sé rétt.** Berðu hana saman við blaðið: rakning getur misst af daufri línu, tengt tvær línur sem liggja mjög þétt saman, eða teiknað línu þar sem aðeins er blettur. Hreinsaðu skönnunina fyrst (rétt, svart og hvítt, dropar farnir) og útkoman verður miklu betri.

## Það sem hún les ekki

TIFF-skrár sem geymdar eru í flísum, BigTIFF, TIFF með JPEG- eða deflate-þjöppun, Group 3-faxkóðun og litir geymdir í aðskildum plönum eru hafnaðar með skilaboðum; vistaðu þær aftur sem ræmur með LZW, PackBits, Group 4 eða án þjöppunar. PNG-skrár með interlaced-gerð eru líka hafnaðar. Skrár yfir 128 MB eða 100 milljónir pixla eru hafnaðar, og rakningargluggi getur haldið í mesta lagi 64 milljónir pixla.

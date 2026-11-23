---
title: Stillingar CadCraft
summary: Stillingarnar sem heyra teikniforritinu til: stærð bendils, hvar límt afrit hangir frá bendlinum, hvað smellur gerir við valið, hversu margar raðir tækjastikan notar, hvar skipanalínan er og hversu há hún er, þétt efsta svæði og hornvísirinn.
keywords: skipanalína, fljótandi skipanalína, fljóta, festa, ein lína, f2, ferill skipana, commandline, cmdline, toparea, efsta svæði, þétt, cursorsize, krosshár á öllum skjánum, jaðar til jaðars, raðir tækjastikunnar, tækjastika, ctrl f1, stillingar, valkostir, hornvísir, ás-tákn, ucs-tákn, bendill, krosshár, veljari, límpunktur, grunnpunktur, smellur á hluti, valið, pickadd, shift, endurstilla
from: ae1a81db
---

Opnaðu {{ui:Stillingar}} með gírnum í forritastikunni eða með {{key:Mod+,}}. Fyrsti flipinn, {{ui:CadCraft}}, geymir stillingarnar sem heyra þessu forriti til; {{ui:Almennt}} geymir þær sem öll forrit fjölskyldunnar deila (þema, stærð og breidd texta spjaldsins, og útlit og röð tækjastikunnar). Stillingar CadCraft eru aðeins í forritinu: þú breytir þeim hér, og þessi vafri man þær. {{ui:Endurstilla stillingar CadCraft}} setur hverja þeirra aftur í upphafsgildi.

## Bendill

**Lítill**, **Miðlungs** (upphafsstillingin), **Stór** eða **Allur skjár**: stærð krosshársins og veljarans í teikningunni. Stærri veljari velur hluti líka úr örlítið lengri fjarlægð, sem hjálpar á snertiskjá eða í mjög fínni teikningu.

**Allur skjár** keyrir tvær línur krosshársins frá jaðri til jaðars yfir teikninguna, líka þegar engin skipun er keyrð, svo þú getir séð með augunum að tveir hlutir liggi saman yfir alla sýnina. Þegar sýnin er skipt halda línurnar sér í þeirri rúðu sem þú vinnur í. Sami háttur og {{cmd:CURSORSIZE}} 100 í AutoCAD: skrifaðu {{cmd:CURSORSIZE}} og 100 fyrir allan skjáinn; lægri tala velur næstu stærð (undir 5 Lítill, 5 til 9 Miðlungs, 10 til 99 Stór).

## Límpunktur

Hvar límt afrit hangir frá bendlinum eftir {{key:Mod+V}} ({{cmd:PASTECLIP}}), þar til þú smellir:

- **Neðra vinstra horn** (upphafsstillingin): neðra vinstra horn útmarka afritaðra hluta, eins og í AutoCAD.
- **Miðja**: miðja útmarkanna. Hentugt til að setja tákn inn eftir augnmáli.

Afrit sem gert er með `COPYBASE` hangir alltaf frá grunnpunktinum sem þú valdir. {{ui:Líma á sama stað}} ({{key:Mod+Shift+V}}) hunsar þessa stillingu: það heldur upprunalegu hnitunum. Sjá [Afrita, líma og tvöfalda](topic:copy-paste).

## Smellt á hluti

Hvað smellur í teikningunni gerir við valið þegar engin skipun er keyrð:

- **Bætir við valið** (upphafsstillingin): hver smellur eða gluggi bætir hlutum við; {{key:Shift}}+smellur, eða {{key:Shift}}+gluggi, tekur þá út.
- **Kemur í stað valsins**: smellur eða gluggi velur aðeins það sem hann nær yfir. {{key:Shift}}+smellur bætir hlut við, eða tekur út einn sem þegar er valinn; {{key:Shift}}+gluggi bætir við.

Við spurninguna `Select objects:` inni í skipun bæta smellir alltaf við (og {{key:Shift}} tekur út), sama hvað þessi stilling segir. Sjá [Velja hluti](topic:select-objects).

## Smellt á tóman stað

Hvað smellur þar sem enginn hlutur er gerir þegar engin skipun er keyrð. Í báðum tilvikum byrjar hann valglugga (annar smellur lýkur honum).

- **Hreinsar valið** (upphafsstillingin): það sem var valið er sleppt. Haltu {{key:Shift}} meðan þú smellir til að halda því.
- **Heldur valinu**: valið helst, eins og í öðrum teiknifor­ritum; glugginn bætist við það. Ýttu á {{key:Esc}} til að hreinsa valið.

## Dragðu til að velja

Hvað það teiknar að ýta og draga á tóman stað:

- **Lassó** (upphafsstillingin): frjáls útlína. Ef þú dregur fyrst til hægri velur það það sem liggur alveg inni í henni, ef fyrst til vinstri það sem hún snertir; {{key:Space}} meðan dregið er skiptir á milli glugga, krossgluggs og girðingar.
- **Rétthyrningur**: kassinn, eins og smellur og annar smellur teikna hann.

{{cmd:LASSOMODE}} `1` eða `0` stillir það sama. Sjá [Lassóval](topic:lasso-selection).

## Dragðu til að klippa og framlengja

Hvað það gerir að ýta á tóman stað og draga í {{cmd:TRIM}} og {{cmd:EXTEND}}:

- **Slóð** (upphafsstillingin): frjáls slóð; sérhver bútur sem hún sker er klipptur (eða framlengdur).
- **Gluggi**: kassi; sérhver bútur sem hann snertir er klipptur, eins og valkosturinn `C` gerir.

Sjá [Klipping og framlenging](topic:trim-and-extend).

## Staðsetning tækjastikunnar

{{ui:CadCraft}} › {{ui:Staðsetning tækjastikunnar}}: **Efst** (upphafsstillingin, eins og hún hefur alltaf verið), **Neðst**, **Vinstra megin** eða **Hægra megin**. Vinstra eða hægra megin raðast hóparnir í dálk sem skrunar þegar hann er hærri en glugginn, og hnappar vefjast tveir eða þrír í línu. Valið er vistað með stillingum þínum, og {{cmd:TOOLBARDOCK}} (`TBDOCK`) setur það úr skipanalínunni. {{ui:Almennt}} › {{ui:Endurstilla útlitið}} setur tækjastikuna aftur efst.

Stikur stílanna á valmyndinni sitja inni í tækjastikunni og færast með henni, en stíllinn {{ui:Borði}} er gerður til að ganga yfir efst eða neðst: við hlið fær hann mjóan dálk sem skrunar. Í síma er tækjastikan þar sem símauppsetningin setur hana.

## Raðir tækjastikunnar

Hversu margar línur verkfærin nota fyrir ofan teikninguna, í CadCraft-tækjastikunni og í stílunum {{ui:Teikniforrit klassískt}} og {{ui:Borði}}:

- **Vefja að glugga** (upphafsstillingin): verkfærin vefjast að breidd gluggans.
- **2 raðir**: í mesta lagi tvær línur. Þegar verkfærin vefjast í tvær línur eða færri við þessa breidd vefjast þau bara; annars sitja þau í tveimur röðum sem skrunast til hliðar.
- **1 röð**: ein lína sem skrunar til hliðar, sem gefur teikningunni mest rými.

{{key:Shift+Ctrl+F1}} fer milli þessara þriggja, og {{cmd:TOOLBARROWS}} velur eina. Hvað hnapparnir sýna (tákn og texti, aðeins tákn, eða aðeins texti) er stilling í {{ui:Almennt}} › {{ui:Tækjastika}}; {{key:Ctrl+F1}} fer milli þeirra og {{cmd:TOOLBAR}} velur eina.

## Skipanalína

Skipanalínan getur verið föst undir teikningunni, eins og hún alltaf var, eða svifið yfir henni, og hún getur verið eins mjó og ein lína.

- **Gerðu hana fljótandi.** Dragðu gripið vinstra megin á henni inn í teikninguna, eða veldu {{ui:Fljóta yfir teikninguna}} í valmyndinni {{ui:Valkostir skipanalínu}} (þrír punktar hægra megin). Dragðu gripið aftur til að færa hana; staðurinn hennar helst þegar glugginn breytir stærð. Dragðu hægri brún hennar til að gera hana breiðari eða mjórri. Slepptu henni á stöðustikunni, eða veldu {{ui:Festa neðst}}, til að festa hana aftur.
- **Gerðu hana mjórri eða hærri.** Dragðu efri brúnina: hvert skref er ein lína af sögu. Niður í núll línur verður hún **skipanalína með einni línu**: aðeins spurningin og það sem þú slærð inn, og ný skilaboð birtast fyrir ofan hana í stutta stund. Tvísmellur á efri brúnina skiptir á milli einnar línu og hæðarinnar sem þú hafðir.
- **Sagan.** {{key:F2}}, eða klukkuhnappurinn á skipanalínunni ({{ui:Ferill skipana (F2)}}), opnar alla söguna fyrir ofan línuna (fyrir neðan hana þegar línan svífur nálægt efst í glugganum). Innsláttur fer enn í skipanalínuna; {{key:PageUp}} og {{key:PageDown}} skrolla sögunni, og {{key:Esc}}, {{key:F2}} eða smellur annars staðar lokar henni. Lykill sem þú átt sjálf(ur) á F2 gengur framar þessu.
- **Af lyklaborði.** Gripið er hnappur: þegar það er í fókus færa örvatakkarnir fljótandi skipanalínu (með {{key:Shift}}, í stærri skrefum); {{key:Up}} gerir fasta línu fljótandi og {{key:Down}} við neðri brún festir hana. Efri brúnin er skil: {{key:Up}} og {{key:Down}} bæta við eða taka burt línu, {{key:Home}} gerir hana að einni línu og {{key:End}} hæstu. Skjálesarar lesa enn hver skilaboð, líka í skipanalínu með einni línu.

{{ui:CadCraft}} › {{ui:Skipanalína}} hefur sömu val: {{ui:Fest neðst}} eða {{ui:Fljótandi}}, {{ui:Sýndar línur ferils}} (0 til 12) og {{ui:Venjuleg hæð}}. {{cmd:COMMANDLINE}} (`CMDLINE`) stillir þau úr skipanalínunni. Staður og hæð eru geymd fyrir CadCraft í þessum vafra ásamt öðru útliti, svo vistað vinnuumhverfi ber þau með sér; {{ui:Almennt}} › {{ui:Endurstilla útlitið}} festir skipanalínuna aftur í venjulegri hæð. Í síma er skipanalínan föst með einni línu af sögu; sögu-hnappurinn virkar þar líka.

{{ui:CadCraft}} › {{ui:Valkostastafir}} geymir stafina sem þú valdir fyrir valkosti skipana: {{ui:Breyta…}} opnar skrána, {{ui:Flytja inn…}} skiptir henni út fyrir skrá sem þú velur og {{ui:Flytja út}} vistar hana. Sjá [Gefðu valkostum skipana þinn eigin stafi](topic:option-letters).

Þegar glugginn er stuttur og útlitsathugunin býður þéttara útlit, gerir {{ui:Já}} hennar skipanalínuna líka að einni línu ef teikningin er enn of stutt eftir tækjastikurnar.

## Efsta svæði

{{ui:CadCraft}} › {{ui:Efsta svæði}}: **Venjulegt** (upphafsstillingin) eða **Þétt**. Þétt heldur stikunum fyrir ofan teikninguna litlum í öllum valmyndarstílum: heiti flokkanna og orðin undir táknunum fara (skýringartextar og skjálesarar hafa þau enn) og hnapparnir verða þéttari. Það virkar með [Raðir tækjastikunnar](topic:settings#toolbar-rows): Þétt og **1 röð** gefa teikningunni mest rými. {{cmd:TOPAREA}} velur það.

## Hornvísir

Það sem situr í horni teikningarinnar:

- **Sjálfvirkt** (upphafsstillingin): ás-tákn á flipanum {{ui:Líkan}} og útsýniskubbur á flipanum {{ui:3D}}.
- **Ás-tákn**: X- og Y-merkið neðst vinstra megin á flipanum {{ui:Líkan}}, og lítið X, Y og Z-merki á flipanum {{ui:3D}}.
- **Útsýniskubbur**: kubbur efst hægra megin á báðum flipum. Á flipanum {{ui:Líkan}} sýnir hann teikninguna ofan frá, og smellur á annan flöt, jaðar eða horn opnar flipann {{ui:3D}} og horfir þaðan. Á 3D-flipanum snýst hann með sýninni: smelltu til að horfa frá hlið, dragðu til að sveifla, og húsið fer aftur í jafnhornasýnina. Sjá [Líkan í 3D](topic:3d-solids).
- **Enginn**: ekkert í horninu.

Blöð sýna hvorugt.

## Lengd og flatarmál valsins

- **Í stöðustikunni** (upphafsstillingin): þegar hlutir eru valdir sýnir stöðustikan samlagða lengd þeirra og samlagt flatarmál þeirra lokuðu. Sjá [Samtölur valsins](topic:properties-panel#totals-of-a-selection).
- **Falið**: stöðustikan sleppir þeim. Eiginleikar sýna þær samt fyrir marga hluti.

## Rist, Lóðrétt/lárétt og smellifestur

Þetta er ekki í glugganum: hnapparnir {{ui:Rist}}, {{ui:Lóðrétt/lárétt}} og {{ui:Smellifesta}} á stöðustikunni (eða {{key:F7}}, {{key:F8}}, {{key:F3}}) og listinn yfir hlutasmellifestur við hliðina á þeim eru munaðir þegar þú yfirgefur þá. Sjá [Smella á punkta á hlutum](topic:object-snaps).

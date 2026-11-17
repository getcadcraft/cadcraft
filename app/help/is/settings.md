---
title: Stillingar CadCraft
summary: Stillingar sem tilheyra teikniforritinu: stærð bendils, hvar afrituð útgáfa hangir frá bendlinum, hvað smellur gerir við valið, hve margar línur tækjastikan notar, hvar skipanalínan er og hversu há hún er, þétt efsta svæði og hornvísirinn.
keywords: skipanalína, fljótandi skipanalína, fljóta, festa, ein lína, f2, ferill skipana, commandline, cmdline, toparea, efsta svæði, þétt, cursorsize, bendill á öllum skjánum, kant í kant, línur tækjastikunnar, ctrl f1, stillingar, valkostir, hornvísir, ásamerki, sýniteningur, bendill, kross, límingarpunktur, grunnpunktur, smellt á hluti, val, pickadd, shift, endurstilla
from: 0896eb42
---

Opnaðu {{ui:Stillingar}} með gírnum í forritastikunni eða með {{key:Mod+,}}. Fyrsti flipinn, {{ui:CadCraft}}, geymir stillingar sem tilheyra þessu forriti; {{ui:Almennt}} geymir þær sem öll forrit fjölskyldunnar deila (þema, stærð texta og breidd spjalda, og útlit og röð tækjastikunnar). Stillingar CadCraft eru aðeins í forritinu: þú breytir þeim hér, og þessi vafri man þær. {{ui:Endurstilla CadCraft-stillingar}} setur allar aftur í upphafsgildi.

## Bendill

**Lítill**, **Miðlungs** (upphafsgildið), **Stór** eða **Allur skjárinn**: stærð krossins og valreitsins í teikningunni. Stærri valreitur velur hluti úr aðeins lengri fjarlægð, sem hjálpar á snertiskjá eða mjög fínni teikningu.

**Allur skjárinn** teiknar tvær línur krossins frá kanti til kants yfir teikninguna, líka þegar engin skipun er í gangi, svo þú getir séð með eigin augum að tveir hlutir raðast saman yfir alla sýnina. Með skiptri sýn haldast línurnar í þeim glugga sem þú vinnur í. Sama og {{cmd:CURSORSIZE}} 100 í AutoCAD: skrifaðu {{cmd:CURSORSIZE}} og 100 fyrir allan skjáinn; lægri tala velur næstu stærð (undir 5 Lítill, 5 til 9 Miðlungs, 10 til 99 Stór).

## Límingarpunktur

Hvar afrituð útgáfa hangir frá bendlinum eftir {{key:Mod+V}} ({{cmd:PASTECLIP}}), þar til þú smellir:

- **Neðra vinstra horn** (upphafsgildið): neðra vinstra horn ytri marka afrituðu hlutanna, eins og í AutoCAD.
- **Miðja**: miðja markanna. Gott til að setja tákn eftir auga.

Afrit sem gert er með `COPYBASE` hangir alltaf frá grunnpunktinum sem þú valdir. {{ui:Líma á sama stað}} ({{key:Mod+Shift+V}}) hunsar þessa stillingu: það heldur upprunalegu hnitunum. Sjá [Afrita, líma og tvöfalda](topic:copy-paste).

## Smellt á hluti

Hvað smellur í teikningunni gerir við valið þegar engin skipun er í gangi:

- **Bætir við valið** (upphafsgildið): hver smellur eða gluggi bætir hlutum við; {{key:Shift}}+smellur, eða {{key:Shift}}+gluggi, tekur þá út.
- **{{ui:Kemur í stað valsins}}**: smellur eða gluggi velur aðeins það sem hann nær í. {{key:Shift}}+smellur bætir við hlut, eða tekur út þann sem þegar er valinn; {{key:Shift}}+gluggi bætir við.

Við spurninguna `Veldu hluti:` inni í skipun bæta smellir alltaf við (og {{key:Shift}} tekur út), hvað sem þessi stilling segir. Sjá [Velja hluti](topic:select-objects).

## Smellt á autt svæði

Hvað smellur þar sem enginn hlutur er gerir þegar engin skipun er í gangi. Hvort sem er byrjar hann valglugga (annar smellur klárar hann).

- **Hreinsar valið** (upphafsgildið): það sem var valið er sleppt. Haltu {{key:Shift}} niðri meðan þú smellir til að halda því.
- **{{ui:Heldur valinu}}**: valið helst, eins og í öðrum teikniforritum; glugginn bætist við það. Ýttu á {{key:Esc}} til að hreinsa valið.

## Draga til að velja

Hvað það teiknar að ýta og draga á autt svæði:

- **Lassó** (upphafsgildið): frjáls útlína. Ef þú dregur fyrst til hægri velur hann það sem liggur alveg inni í honum, ef þú dregur fyrst til vinstri velur hann það sem hann snertir; {{key:Space}} meðan dregið er skiptir á milli glugga, krossunar og girðingar.
- **Rétthyrningur**: kassinn, eins og smellur og annar smellur teikna hann.

{{cmd:LASSOMODE}} `1` eða `0` stillir hið sama. Sjá [Lassóval](topic:lasso-selection).

## Draga til að klippa og lengja

Hvað það gerir að ýta á autt svæði og draga í {{cmd:TRIM}} og {{cmd:EXTEND}}:

- **Slóð** (upphafsgildið): frjáls slóð; sérhver bútur sem hún sker er klipptur (eða lengdur).
- **Gluggi**: kassi; sérhver bútur sem hann snertir er klipptur, eins og valkosturinn `C` gerir.

Sjá [Klippa og lengja](topic:trim-and-extend).

## Staðsetning tækjastikunnar

{{ui:CadCraft}} › {{ui:Staðsetning tækjastikunnar}}: **Efst** (upphafsgildið, eins og alltaf hefur verið), **Neðst**, **Vinstri** eða **Hægri**. Til vinstri eða hægri raðast verkfærahóparnir í dálk sem skrollar þegar hann er hærri en glugginn, og hnapparnir vefjast tveir eða þrír á línu. Valið er vistað með stillingunum þínum, og {{cmd:TOOLBARDOCK}} (`TBDOCK`) stillir það frá skipanalínunni. {{ui:Almennt}} › {{ui:Endurstilla útlitið}} setur tækjastikuna aftur efst.

Stikur valmyndarstílanna sitja innan tækjastikunnar og færast með henni, en {{ui:Borði}}-stíllinn er gerður til að liggja þvert yfir efst eða neðst: á hlið fær hann mjóan dálk sem skrollar. Í síma er tækjastikan þar sem símauppsetningin setur hana.

## Línur tækjastikunnar

Hve margar línur verkfærin nota fyrir ofan teikninguna, í CadCraft-tækjastikunni og í stílunum {{ui:Klassískt teikniforrit}} og {{ui:Borði}}:

- **Vefja að breidd** (upphafsgildið): verkfærin vefjast að breidd gluggans.
- **2 línur**: í mesta lagi tvær línur. Þegar verkfærin vefjast í tvær línur eða færri við þessa breidd vefjast þau bara; annars sitja þau í tveimur röðum sem skrolla til hliðar.
- **1 lína**: ein lína sem skrollar til hliðar, sem gefur teikningunni mest pláss.

{{key:Shift+Ctrl+F1}} fer í gegnum þessar þrjár, og {{cmd:TOOLBARROWS}} stillir eina þeirra. Hvað hnapparnir sýna (tákn og texta, aðeins tákn, eða aðeins texta) er stilling í {{ui:Almennt}} › {{ui:Tækjastika}}; {{key:Ctrl+F1}} fer í gegnum hana og {{cmd:TOOLBAR}} stillir hana.

## Skipanalína

Skipanalínan getur verið föst undir teikningunni, eins og hún alltaf var, eða svífað yfir henni, og hún getur verið eins mjó og ein lína.

- **Losaðu hana.** Dragðu gripið við vinstri endann inn í teikninguna, eða veldu {{ui:Fljóta yfir teikninguna}} í valmynd sinni {{ui:Valkostir skipanalínu}} (þrír punktar við hægri endann). Dragðu gripið aftur til að færa hana; staðsetning hennar helst þegar glugginn breytir stærð. Dragðu hægri kantinn til að gera hana breiðari eða mjórri. Slepptu henni á stöðustikuna, eða veldu {{ui:Festa neðst}}, til að festa hana aftur.
- **Gerðu hana mjórri eða hærri.** Dragðu efri kantinn: hvert skref er ein lína sögunnar. Niður í núll línur er hún **ein-lína skipanalína**: aðeins spurningin og það sem þú skrifar, og ný skilaboð birtast fyrir ofan hana í smá stund. Tvísmellur á efri kantinn fer á milli einnar línu og þeirrar hæðar sem þú hafðir.
- **Sagan.** {{key:F2}}, eða klukkuhnappurinn á skipanalínunni ({{ui:Ferill skipana (F2)}}), opnar alla söguna fyrir ofan línuna (fyrir neðan hana þegar línan svífur nærri efri hluta gluggans). Innsláttur fer enn í skipanalínuna; {{key:PageUp}} og {{key:PageDown}} skrolla sögunni, og {{key:Esc}}, {{key:F2}} eða smellur annars staðar lokar henni. Lykill sem þú hefur úthlutað á F2 hefur forgang þar.
- **Af lyklaborði.** Gripið er hnappur: þegar hann hefur fókus færa örvatakkarnir svífandi skipanalínu (með {{key:Shift}}, í stærri skrefum); {{key:Up}} losar festa og {{key:Down}} við neðri kant festir hana. Efri kanturinn er skil: {{key:Up}} og {{key:Down}} bæta við eða taka línu, {{key:Home}} gerir hana að einni línu, {{key:End}} hæstu. Skjálesarar heyra enn öll skilaboð, líka í einnar línu skipanalínunni.

{{ui:CadCraft}} › {{ui:Skipanalína}} hefur sömu valkosti: {{ui:Fest neðst}} eða {{ui:Fljótandi}}, {{ui:Sýndar línur ferils}} (0 til 12) og {{ui:Venjuleg hæð}}. {{cmd:COMMANDLINE}} (`CMDLINE`) stillir þá frá skipanalínunni. Staðsetning og hæð eru geymd fyrir CadCraft í þessum vafra ásamt öðru útliti, svo vistað vinnuumhverfi ber þær með sér; {{ui:Almennt}} › {{ui:Endurstilla útlitið}} festir skipanalínuna aftur á venjulega hæð. Í síma helst skipanalínan föst með einni línu af sögu; sögu-hnappurinn virkar þar líka.

Þegar glugginn er stuttur og útlitsprófið býður þéttara útlit, kveikir {{ui:Já}} líka á einnar línu skipanalínu ef teikningin er enn of stutt eftir tækjastikurnar.

## Efsta svæði

{{ui:CadCraft}} › {{ui:Efsta svæði}}: **Venjulegt** (upphafsgildið) eða **Þétt**. Þétt heldur stikunum fyrir ofan teikninguna litlum í öllum valmyndarstílum: heiti hópanna og orðin undir táknunum fara (merkimiðar og skjálesarar hafa þau enn) og hnapparnir eru þéttari. Það vinnur með [Línum tækjastikunnar](topic:settings#toolbar-rows): Þétt og **1 lína** gefa teikningunni mest pláss. {{cmd:TOPAREA}} stillir það.

## Hornvísir

Það sem situr í horni teikningarinnar:

- **Sjálfvirkt** (upphafsgildið): ásamerkið á flipanum {{ui:Líkan}} og sýniteningurinn á flipanum {{ui:3D}}.
- **Ásamerki**: X- og Y-merkið neðst til vinstri á flipanum {{ui:Líkan}}, og lítið X-, Y- og Z-merki á flipanum {{ui:3D}}.
- **Sýniteningur**: teningur efst til hægri á báðum flipum. Á flipanum {{ui:Líkan}} sýnir hann teikninguna ofan frá, og smellur á annan flöt, kant eða horn opnar flipann {{ui:3D}} og horfir þaðan. Á 3D-flipanum snýst hann með sýninni: smelltu til að horfa frá hlið, dragðu til að snúa, og húsið fer aftur í ísó-sýnina. Sjá [Líkan í 3D](topic:3d-solids).
- **Ekkert**: ekkert í horninu.

Blöð sýna hvorugt.

## Lengd og flatarmál valsins

- **Í stöðustikunni** (upphafsgildið): þegar hlutir eru valdir sýnir stöðustikan samanlagða lengd þeirra og samanlagt flatarmál þeirra lokuðu. Sjá [Samtölur valsins](topic:properties-panel#totals-of-a-selection).
- **Falið**: stöðustikan sleppir þeim. Eiginleikar sýna þær enn fyrir nokkra hluti.

## Hnitanet, lóðrétt/lárétt og smellifesta

Þetta er ekki í valglugganum: hnapparnir {{ui:Hnitanet}}, {{ui:Lóðrétt/lárétt}} og {{ui:Smellifesta}} í stöðustikunni (eða {{key:F7}}, {{key:F8}}, {{key:F3}}) og listinn yfir smellifestur hluta við hlið þeirra eru munaðir þegar þú skilur þá eftir. Sjá [Smella á punkta á hlutum](topic:object-snaps).

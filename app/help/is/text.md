---
title: Bæta við texta og merkimiðum
summary: Settu inn merkimiða herbergja með eins línu texta, skrifaðu athugasemdir sem vefjast með málsgreinatexta sem er skrifaður beint á teikninguna, og breyttu texta síðar.
keywords: texti, dtext, mtext, mleader, multileader, vísir, revcloud, endurskoðunarský, ský, finna, skipta út, finna og skipta út, málsgrein, vefja, línubil, merkimiði, athugasemd, skýring, hæð, jöfnun, textagríma, bakgrunnsgríma, gríma, þurrkun, snúningur, breyta texta, ddedit, textedit, leturgerð
from: 4b76be99
---

## Hvað þú býrð til

Tvo merkimiða herbergja, miðjaða í herbergjunum, athugasemd sem vefst að breidd sinni, og síðan leiðréttingu á öðrum merkimiðanum.

## Textahæð og mælikvarði teikningar

Textahæð er gefin í teikniseiningum. Í teikningu í millimetrum sem verður prentuð í 1:50 er texti sem er 2.5 mm hár á pappír að vera 2.5 × 50 = 125 einingar á hæð í líkaninu. Á blaðsflipa teiknarðu í pappírseiningum, þannig að 2.5 þar er 2.5 mm á pappír.

## Settu inn miðjaðan merkimiða

1. Skrifaðu `DT` og ýttu á {{key:Enter}} (eða smelltu á {{ui:Texti}} á tækjastikunni). Skipanalínan segir `Tilgreindu upphafspunkt texta [Jöfnun]:`.
2. Skrifaðu `J` og ýttu á {{key:Enter}}.
3. Við `Veldu valmöguleika [Vinstri (L)/Miðja (C)/Hægri (R)/Mitt/TL/MC] <L>:` skrifaðu `MC` og ýttu á {{key:Enter}}.
4. Við `Tilgreindu innsetningarpunkt texta` smelltu á miðju herbergis.
5. Við `Tilgreindu hæð` skrifaðu `250` og ýttu á {{key:Enter}}.
6. Við `Tilgreindu snúningshorn texta <0>` ýttu á {{key:Enter}}.
7. Við `Skrifaðu texta` skrifaðu `ELDHÚS` og ýttu á {{key:Enter}}.

Merkimiðinn birtist, miðjaður á punktinum sem þú smelltir á.

8. Ýttu á {{key:Enter}} á tóma `Skrifaðu texta`-línu til að ljúka skipuninni.

## Skrifaðu athugasemd sem vefst

Málsgreinatexti ({{cmd:MTEXT}}) vefst að breidd og er skrifaður beint á teikninguna.

1. Skrifaðu `T` og ýttu á {{key:Enter}}, eða smelltu á {{ui:Málsgrein}} á tækjastikunni.
2. Við `Tilgreindu fyrsta horn` smelltu þar sem efra vinstra horn athugasemdarinnar á að vera.
3. Til að breyta hæðinni fyrst skrifaðu `H`, ýttu á {{key:Enter}}, skrifaðu `250` og ýttu á {{key:Enter}}.
4. Við `Tilgreindu gagnstætt horn [Hæð/Jöfnun/Línubil/Snúningur (R)/Breidd (W)]` smelltu hægra megin við fyrsta hornið. Fjarlægðin þvert yfir er breiddin sem textinn vefst að; hversu langt niður þú smellir takmarkar hana ekki.
5. Kassi opnast yfir teikningunni með bendilinn í sér. Skrifaðu `ÖLL MÁL ERU Í MILLIMETRUM NEMA ANNAÐ SÉ TILGREINT`. Orðin vefjast að breiddinni þegar þú skrifar.
6. Ýttu á {{key:Enter}} til að byrja nýja málsgrein og skrifaðu `ATHUGA Á STAÐNUM`.
7. Ýttu á {{key:Mod+Enter}}, smelltu á {{ui:Í lagi}}, eða smelltu hvar sem er utan kassans. Athugasemdin er einn hlutur.

Stikan fyrir ofan kassann breytir {{ui:Hæð}}, {{ui:Línubil}} (1 er venjulegt, 1.5 er helmingi meira), {{ui:Breidd}} (0 = engin vefja) og {{ui:Jöfnun}} á meðan þú skrifar. {{key:Esc}} eða {{ui:Hætta við}} lokar henni án þess að bæta neinu við.

Valkostirnir við annað hornið: `H` hæð, `J` jöfnun (`TL` efst vinstra … `BR` neðst hægra: hornið eða miðja kassans sem helst kyrrt), `L` línubil, `R` snúningur, `W` breidd skrifuð inn í stað annars hornsins.

:::note
Á meðan kassinn er opinn skrifar {{key:Space}} bil og {{key:Enter}} byrjar nýja málsgrein. Vistuð DWG geymir málsgreinatexta sem MTEXT; DXF R12 hefur engan málsgreinatexta, þannig að hver lína er vistuð sem sérstakur texti.
:::

### Nokkrar eins línu textar í staðinn

{{cmd:TEXT}} (`DT`) biður um eina línu í einu: hver {{key:Enter}} byrjar næstu línu, 1.667 sinnum textahæðin neðar, og hver lína er sérstakur hlutur. Ýttu á {{key:Enter}} á tómri línu til að ljúka.

## Jöfnunarvalkostir

| Valkostur | Punkturinn sem þú smellir á er |
|---|---|
| Vinstri (sjálfgefið) | Vinstri endi grunnlínunnar |
| Miðja | Miðja grunnlínunnar |
| Hægri | Hægri endi grunnlínunnar |
| Mitt, MC | Miðja textans, bæði lárétt og lóðrétt |
| TL | Efra vinstra hornið |

## Breyta texta

1. Tvísmelltu á textahlut. Hann opnast í sama kassa og nýr málsgreinatexti, með bendilinn í lokin.
2. Breyttu orðunum.
3. Ýttu á {{key:Mod+Enter}} eða smelltu utan kassans. Textinn á teikningunni breytist; {{key:Esc}} skilur hann eftir eins og hann var.

{{cmd:TEXTEDIT}} (`ED`) gerir það sama: veldu einn texta á eftir öðrum og ýttu á {{key:Enter}} þegar þú ert búinn.

Í staðinn fyrir tvísmell, veldu texta til að breyta honum í hægra spjaldinu: {{ui:Texti}}, {{ui:Hæð}}, {{ui:Vefjabreidd}} (0 = engin vefja), {{ui:Línubil}}, {{ui:Snúningur}}, X- og Y-staðsetningu og {{ui:Jöfnun}}. Listinn {{ui:Jöfnun}} býður líka upp á Neðst til vinstri, sem texti frá öðrum forritum notar stundum.

## Snið í málsgreinatexta frá öðrum forritum

Málsgreinatexti í DWG eða DXF getur innihaldið kóða inni í sér: liti eftir orðum, feitletrun og skáletrun, undirstrikun, efri línu og yfirstrikun, staflaðar brot eins og 1/2, og mismunandi hæð fyrir orð. CadCraft heldur þessum kóðum, teiknar þá (á skjánum og í prentaðri PDF) og vistar þá óbreytta.

Þegar þú breytir slíkum texta (tvísmellir, {{cmd:TEXTEDIT}}, reitnum {{ui:Texti}} í hægra spjaldinu, eða {{cmd:FIND}} með skiptingu) breytirðu einföldu orðunum. Orð sem þú skrifar fer í textabútinn við hliðina á sér og tekur lit hans og snið; hinir kóðarnir eru þar sem þeir voru. Ef þú skrifar aftur tölurnar í staflaðu broti verður það brot að venjulegum texta. Ef allur textinn er settur í gegnum reitinn {{ui:Texti}} í hægra spjaldinu eru kóðarnir aðeins varðveittir þar sem hægt er að sjá hvaða orð stóðu eftir.

Leturheiti (`\F`) eru varðveitt og vistuð, en allt er teiknað í eina Helvetica-líka leturgerð. Enn er engin tækjastika til að skrifa kóða.

## Benda á eitthvað: fjölvísar

{{ui:Vísir}} í hópnum {{ui:Merkja}} ({{cmd:MLEADER}}, `MLD`) teiknar örvaroddi, vísilínu, stutta lendingu og athugasemd, sem einn hlut.

1. Smelltu á {{ui:Vísir}}. Við `Tilgreindu staðsetningu örvarodds vísis` smelltu á það sem athugasemdin fjallar um.
2. Við `Tilgreindu lendingarstaðsetningu vísis` smelltu þar sem athugasemdin á að vera. Lendingin snýr að þeirri hlið sem þú smelltir á.
3. Skrifaðu athugasemdina í kassann sem opnast og ýttu á {{key:Mod+Enter}}.

`A` og `L` við fyrstu spurninguna stilla stærð örvarodds og lengd lendingar; textahæðin kemur frá {{ui:Textahæð}} fyrir ný mál, margfaldað með {{ui:Heildarkvarði}}. Tvísmelltu á fjölvísi til að breyta orðunum. Gripir færa örvaroddinn og lendinguna; athugasemdin fylgir lendingunni. Í {{ui:Eiginleikar}}: {{ui:Texti}}, {{ui:Hæð}}, {{ui:Vefjabreidd}}, {{ui:Stærð örvaroddar}} og {{ui:Lendingarlengd}}.

:::note
Fjölvísar vistast sem alvöru fjölvísar í DWG. DXF hefur engan fjölvísi í R12 eða 2000, þannig að þar eru þeir vistaðir sem línurnar, örvaroddurinn og textinn sem þeir teikna.
:::

## Merktu breytingar með endurskoðunarskýi

{{ui:Merkja}} › {{ui:Meira}} › {{ui:Endurskoðunarský}} ({{cmd:REVCLOUD}}, `RC`) teiknar ský úr bogum utan um það sem breyttist. Ferillinn sýnir lengd bogans og gerðina sem hann notar.

- **Rétthyrnt** (í fyrsta skipti): smelltu á tvö horn.
- `P` **Marghyrnt**: smelltu á hornin, {{key:Enter}} lokar skýinu.
- `F` **Frjálst**: smelltu þar sem það byrjar og færðu bendilinn í kringum svæðið án þess að smella; bogi bætist við á hverri bogalengd. Smelltu eða ýttu á {{key:Enter}} til að loka því.
- `O` **Hlutur**: veldu lokaða fjöllínu, hring eða sporbaug (eða línu, boga eða opna fjöllínu); hann verður skýið. `Snúa stefnu við?` `Y` snýr bogunum inn á við.
- `A` **Bogalengd**: lengd hvers boga. Veldu eina sem hentar prentmælikvarðanum.

Skýið er lokuð fjöllína úr bogum, þannig að það vistast í öllum sniðum.

## Finna og skipta út orðum

{{ui:Breyta}} › {{ui:Meira}} › {{ui:Leita og skipta út}} ({{cmd:FIND}}) leitar í texta, gildum blokkareigna og málsetningatexta á opna flipanum (eða aðeins í völdum hlutum).

1. Skrifaðu orðin í {{ui:Finna}}. Listinn sýnir hvar þau eru og fjöldann.
2. Veldu {{ui:Passa við hástafi}}, {{ui:Aðeins heil orð}} eða {{ui:Nota jokertákn (* og ?)}} ef þú þarft þess, og taktu hakið af því sem ekki á að leita í.
3. Smelltu á {{ui:Velja það sem fannst}} til að velja þessa hluti, eða skrifaðu nýju orðin í {{ui:Skipta út fyrir}} (listinn sýnir hvað hvert þeirra verður) og smelltu á {{ui:Skipta öllu út}}. Ein {{key:Mod+Z}} afturkallar allar skiptingar.

Mældagildi málsetningar er ekki texti, þannig að því er aldrei skipt út: í `<> TYP.` getur aðeins `TYP.` breyst.

## Fela línurnar á bakvið merkimiða

1. Veldu textana, skrifaðu {{cmd:TEXTMASK}} og ýttu á {{key:Enter}}.
2. `B` málar bakgrunn teikningarinnar á bak við þá; `C` biður um litanúmer. `O` tekur grímuna burt.
3. `Stuðull rammafærslu`: {{key:Enter}} heldur 1.5, hálfri textahæð umhverfis textann.

Grímin hylur línur undir textanum, á skjánum og þegar þú prentar. DWG 2004 eða nýrra og DXF 2000 halda henni; DWG-sniðið 2000 og DXF R12 geta það ekki, og vistunin segir frá því.

## Leturgerð

Allur texti er teiknaður í Helvetica-líka leturgerð, á skjánum og í PDF-skjölum. Texti úr opnuðum teikningum heldur orðum sínum, hæð og staðsetningu, en ekki upprunalegu letri (heiti leturs inni í málsgreinatexta er geymt í skránni, sjá hér fyrir ofan).

Í prentuðum PDF-skjölum prentast texti á hvaða evrópsku letri, kyrillísku eða grísku sem sjálfur (PDF-skjalið geymir stafina sem þarf, og þú getur samt valið og leitað í textanum). Kínverskur, japanskur og kóreskur texti prentast líka sem hann er (prentunin sækir stærra letur í fyrsta sinn sem þess er þörf). Arabískur, persneskur, úrdúskur og hebreskur texti prentast líka sem hann er (sjá næsta kafla). Stafir sem ekkert letur á staf fyrir prentast sem „?“, og sagan segir hversu margir þeir voru.

## Texti frá hægri til vinstri: arabíska, persneska, úrdú, hebreska

Skrifaðu textann eins og annars staðar: {{cmd:TEXT}} og {{cmd:MTEXT}} teikna hverja línu í lesröð. Lína sem byrjar á arabískum eða hebreskum staf les frá hægri til vinstri; tölur og latnesk orð inni í henni halda sinni eigin röð frá vinstri til hægri, og stafir af arabísku letri eru tengdir saman. Lína sem byrjar á latneskum staf er áfram frá vinstri til hægri, með orðum frá hægri til vinstri á sínum stað inni í henni. Hver málsgrein í fjöllínutexta hefur sína eigin stefnu, og vafin málsgrein heldur henni á hverri línu.

Texti er geymdur eins og þú skrifaðir hann, þannig að DWG- og DXF-skrár skiptast á honum óbreyttum við önnur forrit. Innsetningarpunkturinn og jöfnunin ({{ui:Vinstri}}, {{ui:Miðja}}, {{ui:Hægri}}) þýða sömu hlið og fyrir hvaða texta sem er: athugasemd frá hægri til vinstri sem á að hanga frá hægri endanum þarf {{ui:Hægri}}.

Á skjánum koma stafirnir úr leturgerðum kerfisins þíns. Í prentuðu PDF notar hebreska sama innbyggða letur og latneskur texti; arabískur texti lætur prentunina sækja eitt letur til viðbótar (undir 1 MB, einu sinni), og allt PDF-skjalið prentast þá í því letri. Það letur hefur enga eigin mynd fyrir þrjá úrdú-stafi (heh goal, yeh barree og úrdú-punktinn): þeir prentast í mynd næsta arabíska stafs. Teikning sem hefur bæði arabískan og kínverskan, japanskan eða kóreskan texta prentar annan hvorn sem „?“, því prentun ber eitt letur. Texti í hlaðnu SHX-letri er raðaður og tengdur þegar letrið hefur stafina á Unicode-stöðum sínum; fyrir gömul letur þar sem stafirnir eru þegar mótaðir notaðu {{ui:Snúa við (R)}} í {{cmd:SHXFONTS}} eins og áður.

## Algeng mistök

- **Textinn er of lítill til að sjá.** Hæðin er í teikniseiningum. Í stórri teikningu skaltu nota stóra hæð (sjá hér fyrir ofan), eða þysja inn.
- **Skipunin hætti eftir eina línu.** Þú ýttir á {{key:Enter}} á tómri línu í {{cmd:TEXT}}. Ræstu hana aftur, eða notaðu málsgreinatexta (`T`), þar sem {{key:Enter}} byrjar nýja málsgrein.
- **`T` opnaði kassa í stað þess að biðja um línu.** Eins og í AutoCAD er `T` málsgreinatexti ({{cmd:MTEXT}}); eins línu texti er `DT`.
- **Textinn vefst á öðrum stað en í AutoCAD.** CadCraft vefur með Helvetica-breiddum; annað letur getur komið fyrir fleiri eða færri orðum á línu.
- **Texti í speglaðri afritun.** Hann er settur speglaður en er áfram læsilegur frá vinstri til hægri.

---
title: Prenta í PDF
summary: Gera PDF af blaði í fullri stærð, eða af líkaninu í mælikvarða eða passað á pappírinn, prenta það úr vafranum eða úr Studio, eða vista það sem PNG eða SVG.
keywords: prenta, prentun, prentari, eintök, png, svg, mynd, pdf, birta, exportpdf, pappír, mælikvarði, einlitt, grátóna, svart og hvítt, línuþykkt, penni, síðuuppsetning, prentgluggi, prentstíll, prentstílstafla, ctb, háð lit, skygging, plotstyles, stylesmanager
from: a4752f83
---

## Það sem þú býrð til

PDF af blaði í fullri stærð, síðan fljótlegt PDF af líkaninu í 1:100, og útprentun.

PDF-skráin er gerð inni í vafranum þínum; ekkert er hlaðið upp. Þetta er vigur-PDF: línur haldast skarpar við hvaða aðdrátt sem er, og hægt er að leita í textanum.

## Prenta blað

1. Smelltu á flipa blaðsins undir teikningunni.
2. Ýttu á {{key:Mod+P}}, smelltu á {{ui:Prenta}}, eða skrifaðu `PLOT` og ýttu á {{key:Enter}}.

Glugginn {{ui:Prenta í PDF}} opnast. Hann segir hvaða blað er prentað og á hvaða pappír, „í fullri stærð … eins og þú sérð það“. Forskoðunin hægra megin sýnir blaðið.

3. Í {{ui:Prentstíll}} veldu {{ui:Einlitt (svart)}} fyrir svartar línur, {{ui:Litur (eins og teiknað)}} til að halda litunum, {{ui:Grátóna}}, eða töflu sem þú hefur gert sjálf/ur (sjá [Prentstílstöflur](topic:plot-pdf#plot-style-tables)). Blaðið geymir þetta val: það er vistað með teikningunni.
4. Í {{ui:Línuþykkt}} veldu pennabreidd frá 0,13 mm til 0,70 mm. Línur með sjálfgefna línuþykkt prentast í þessari breidd; línur með eigin línuþykkt (lags eða hlutar, eða penni litar þeirra í töflunni) prentast í þeirri breidd.
5. Smelltu á {{ui:Sækja PDF}}.

Vafrinn sækir PDF-skrá sem heitir eftir teikningunni og blaðinu, til dæmis `Drawing1-A-101 Plan.pdf`. Ferillinn sýnir stærð hennar í bætum og stærð pappírsins í millimetrum.

Blað prentast alltaf í 1:1 á sínum eigin pappír. Til að breyta pappírnum, breyttu honum á blaðinu sjálfu (sjá [Stilla blað](topic:sheets-and-viewports)). Lög sem eru stillt á að prentast ekki eru skilin eftir, og það sama gildir um ramma sýndarglugga.

## Öll blöð í einni PDF

Þegar blöðin eru tvö eða fleiri er {{ui:Öll blöð í einni PDF}} í glugganum {{ui:Prenta í PDF}}; eða skrifaðu {{cmd:PUBLISH}}. {{key:Enter}} tekur öll blöðin; `[Nokkur (S)]` biður um nöfn þeirra, aðskilin með kommum. Ein PDF-skrá er sótt með einni síðu fyrir hvert blað, í röð flipanna, hvert í sinni eigin pappírsstærð, og bókamerki fyrir hvert blað með nafni þess. Hvert blað prentast með sinni eigin prentstílstöflu; blað án valinnar töflu notar þá sem þú valdir síðast í glugganum, og pennabreiddina sem þú valdir síðast.

## Prenta líkanið

1. Smelltu á flipann {{ui:Líkan}}.
2. Ýttu á {{key:Mod+P}}.

Glugginn segir að hann prenti líkanið á blað af pappír, og sýnir fleiri stillingar:

3. Í {{ui:Flatarmál}} veldu hvað skal prenta:
   - {{ui:Allt (útmörk)}}: alla teikninguna.
   - {{ui:Það sem er á skjánum}}: svæðið sem þú sérð í teikningunni núna.
   - {{ui:Gluggi…}}: smelltu síðan á {{ui:Velja}}, smelltu á tvö horn á teikningunni, og glugginn birtist aftur.
4. Í {{ui:Pappír}} veldu stærð: ISO A4 til A0, Letter, Legal, Tabloid og ANSI C og D, eða ARCH C, D og E.
5. Í {{ui:Stefna}} veldu {{ui:Lárétt}} eða {{ui:Lóðrétt}}.
6. Í {{ui:Mælikvarði}} veldu {{ui:Passa á pappír}} eða mælikvarða eins og `1:100`.

Undir stillingunum sýnir lína mælikvarðann og hversu stórt svæðið verður á pappírnum. Ef það er stærra en pappírinn segir hún það: jaðrarnir verða skornir af. Veldu minni mælikvarða, stærri pappír, eða {{ui:Passa á pappír}}.

7. Smelltu á {{ui:Sækja PDF}}.

Prentun af líkani skilur eftir 5 mm spássíu í kringum jaðarinn, því flestir prentarar geta ekki prentað alveg út í brún. {{ui:Passa á pappír}} gefur óvenjulegan mælikvarða (ferillinn og upplýsingalínan segja „(passað)“); veldu staðlaðan mælikvarða þegar teikningin á að mælast rétt.

:::note
Mælikvarðar eru reiknaðir í raunverulegum einingum. Til að 1:100 sé rétt, stilltu {{ui:Einingar}} í {{ui:Núverandi stillingar}} á það sem ein teikningareining er. Teikning án eininga er talin vera í millimetrum.
:::

## Prentstílstöflur

Prentstílstafla segir hvernig hver af 255 stöðluðu teikningarlitunum prentast, eins og háð lit prentstílstafla (CTB) gerir í öðrum CAD-forritum. Þrjár eru innbyggðar:

| Tafla | Prentast |
|---|---|
| {{ui:Litur (eins og teiknað)}} | Hver hlutur í sínum eigin lit. |
| {{ui:Einlitt (svart)}} | Hver litur svartur: venjulegt val fyrir teikningar. |
| {{ui:Grátóna}} | Hver litur sem sitt grátón, svo litirnir haldist aðgreindir á svarthvítum prentara. |

Til að búa til þína eigin töflu, til dæmis rauðar línur þykkar og svartar, allt annað þunnt:

1. Í glugganum {{ui:Prenta í PDF}}, smelltu á {{ui:Breyta töflum…}} (eða skrifaðu {{cmd:PLOTSTYLES}}).
2. Smelltu á {{ui:Ný}}, og skrifaðu nafn eins og `office` í {{ui:Heiti}}. Til að byrja út frá innbyggðri töflu, veldu hana í {{ui:Tafla}} og smelltu á {{ui:Afrita}}.
3. Smelltu á lit í reitnum. {{key:Shift}}+smellur velur bil lita, {{key:Mod}}+smellur bætir einum við, og {{ui:Velja alla liti}} tekur þá alla.
4. Stilltu hvernig völdu litirnir prentast:
   - {{ui:Prentast í}}: {{ui:Eigin litur}}, {{ui:Svartur}} eða {{ui:Annar litur…}}.
   - {{ui:Sem grár}}: liturinn sem sitt grátón.
   - {{ui:Blek (%)}}: 100 er fullt blek, 50 er hálfa leið að hvítu (skygging), fyrir bakgrunnslínur.
   - {{ui:Línuþykkt}}: {{ui:Eigin línuþykkt}} heldur línuþykkt hlutarins eða lagsins; gildi prentar allar línur í þeim lit í þeirri breidd.
   - {{ui:Línugerð}}: prentar allar línur í þeim lit með annarri línugerð (til dæmis allt rautt strikað); {{ui:Nota línutegund hlutarins}} skilur þær eftir.
   - {{ui:Endi línu}} og {{ui:Tenging lína}}: stýfðir, ferkantaðir eða kringlóttir endar, og skáskorin, skásett eða kringlótt horn (kringlótt, eins og áður, þegar ekkert er stillt).
   - {{ui:Fyllingarstíll}}: heilfylling í þeim lit prentast sem skyggingarlínur (lárétt eða lóðrétt strik, halli, krosskygging, tíglar, ferkantaðir punktar) í stað bleks, fyrir prentara og áætlanir þar sem flatt blek er of þungt.
   Sjálf taflan hefur tvær stillingar til viðbótar: {{ui:Línuþykktir}}, breiddirnar sem hún þekkir (prentuð lína fer í þá sem er næst), og {{ui:Mælikvarði línutegunda}}, stuðull á strikunum í öllum línugerðum sem eru ekki ISO.
5. Smelltu á {{ui:Lokið}}. Taflan geymist í teikningunni, og blaðið (eða líkanið) prentast nú með henni. {{ui:Hætta við}} hendir breytingunum.

Litur með eigin penna sýnir punkt í horninu sínu, og punkt neðst þegar hann stillir línuþykkt. Hlutur með sanna lit (ekki einn af 255) notar pennann í næsta staðlaða lit.

Teikningin geymir töflur sínar og val hvers blaðs þegar þú vistar sem DWG (2000 til 2018) eða DXF (R12 eða 2000), og opnast með þeim aftur. Önnur forrit sjá nafnið í síðuuppsetningu hvers blaðs (`office.ctb`), ekki töfluna sjálfa. Teikning úr öðru forriti, sem nefnir töflu eins og `monochrome.ctb` í síðuuppsetningu sinni, prentast með innbyggðu töflunni með því nafni; fyrir hvaða annað nafn segir glugginn að teikningin hafi hana ekki, og prentar liti teikningarinnar þar til þú velur töflu eða býrð til töflu með því nafni.

Til að nota töflu í annarri teikningu, smelltu á {{ui:Flytja út}} í {{ui:Prentstílstöflur}} (hún vistar `office.plotstyle.json`), og síðan á {{ui:Flytja inn…}} í hinni teikningunni. {{ui:Flytja inn…}} tekur líka við `.ctb`-skrá úr öðru forriti: hún er lesin út frá birtri lýsingu sniðsins og **hefur ekki enn verið prófuð á raunverulegri skrá**. Litur, skygging og línuþykkt hvers litar eru lesin; grátóna, pennanúmer, línugerðir, línuendar, tengingar og fyllingarstílar eru það ekki, og nefnd tafla (`.stb`) er hafnað. Berðu fyrstu prentunina saman við það sem þú býst við, og sendu okkur skrána ef hún er röng.

## Prentun

**Í vafranum** smelltu á {{ui:Prenta…}}. CadCraft býr til PDF-skrána og opnar prentglugga vafrans fyrir hana. Veldu „Raunstærð“ eða 100% (ekki „Passa“) þar til að halda mælikvarðanum. Ef vafrinn vill ekki prenta af síðunni opnast PDF-skráin í nýjum flipa í staðinn: prentaðu hana þaðan með {{key:Mod+P}}.

Þú getur líka smellt á {{ui:Opna til prentunar}}: PDF-skráin opnast í nýjum vafraflipa og þú prentar hana þaðan.

:::safari
Safari gæti sýnt PDF-skrána og beðið eftir að þú notir **Skrá**, og síðan **Prenta**.
:::

Ef vafrinn lokar nýja flipanum, sækir CadCraft PDF-skrána í staðinn og segir frá því í ferlinum. Leyfðu sprettiglugga fyrir síðuna til að opna hana í flipa næst.

**Í CadCraft Studio** listar glugginn {{ui:Prenta í PDF}} prentarana í tölvunni. Veldu {{ui:Prentari}}, {{ui:Pappír í prentaranum}} og fjölda {{ui:Eintök}}, smelltu síðan á {{ui:Prenta…}}. {{ui:Eins og prentunin}} velur pappír prentarans í stærð blaðsins (A3 fyrir A3-blað); þegar prentarinn hefur engan slíkan notar hann eigin pappír og passar blaðið á hann. Á Windows er blaðið sent sem mynd í 300 dpi, því Windows getur ekki prentað PDF-skrá án PDF-forrits; á Linux og macOS fer PDF-skráin sjálf í prentkerfi stýrikerfisins. Ekkert fer úr tölvunni.

## Myndaskrár og SVG-skrár

{{ui:Sækja PNG}} vistar prentaða blaðið sem mynd í 300 dpi (lækkað aðeins þegar mjög stórt blað yrði stærra en vafrinn ræður við; ferillinn segir frá því). {{ui:Sækja SVG}} vistar það sem skalanlega teikningu í millimetrum, með línum og texta prentunarinnar. Bæði koma frá sömu prentun og PDF-skráin, með sama prentstíl, línuþykkt og svæði. Myndir sem eru settar í teikninguna eru aðeins í PDF-skránni; ferillinn segir hversu margar voru skildar eftir.

## Myndir

Myndir prentast í sinni eigin upplausn, undir línunum. {{ui:Myndir}} í glugganum takmarkar þær við 600, 300 eða 150 dpi fyrir minni skrá. Línur, texti og skygging haldast alltaf skarpar (vigur), og gegnsæi helst gegnsætt. Sjá [Myndir í teikningu](topic:pictures).

## Stillingar sem forritið man

Glugginn man síðasta pappír, stefnu, mælikvarða og línuþykkt þína í þessum vafra. Prentstílstaflan er geymd með hverju blaði í teikningunni; blað án valinnar töflu byrjar á þeirri sem þú valdir síðast. Valinn gluggi geymist þar til þú endurhleður síðuna; eftir það byrjar glugginn á {{ui:Allt (útmörk)}}.

## Algeng mistök

- **PDF-skráin er auð eða hnapparnir eru gráir.** Það er ekkert til að prenta (tómt líkan), eða {{ui:Gluggi…}} er valinn og enginn gluggi hefur verið valinn enn („Veldu gluggann til prentunar.“).
- **Texti sýnir „?“ í PDF-skránni.** Texti á pólsku, tékknesku, kyrillísku, grísku og öðrum letrum Evrópu prentast eins og hann er: PDF-skráin ber þá stafina sem hún þarf (úr letrinu Liberation Sans, sem hefur sömu breidd og Helvetica), og hægt er að velja og leita í textanum. Kínverskur, japanskur og kóreskur texti prentast líka eins og hann er: þegar teikning hefur hann sækir prentunin stærra letur (um 10 MB, einu sinni) og PDF-skráin ber aðeins þá stafi sem notaðir eru, svo þarf tengingu í fyrsta skipti (ekki í ótengdu afriti sem var vistað áður). Hebreska prentast úr sama innbyggða letri og latneskur texti, og arabískur, persneskur og úrdúskur texti veldur því að prentunin sækir eitt letur í viðbót (undir 1 MB, einu sinni); línur frá hægri til vinstri eru raðaðar og stafir þeirra tengdir (sjá [Texti](topic:text)). Sjaldgæfar táknmyndir utan þessara letra, og rithættir sem þurfa flókna mótun eins og hindí, prentast sem „?“, og ferillinn telur þær.
- **Allar línur eru jafnþykkar.** Línuþykkt þeirra er sjálfgefin: gefðu lögum eða hlutum {{ui:Línuþykkt}} í hægra spjaldinu (sjá [Línuþykktir og línugerðir](topic:units-papers-scales#line-weights-and-linetypes)), eða stilltu línuþykktir eftir lit í [prentstílstöflu](topic:plot-pdf#plot-style-tables).
- **„(ekki í þessari teikningu)“ við hliðina á prentstílnum.** Teikningin kom úr öðru forriti og nefnir töflu sem hún hefur ekki. Veldu eina af töflunum, eða búðu til töflu með því nafni.
- **Hjálparlínur prentuðust.** Stilltu lagið þeirra á að prentast ekki: smelltu á prentarahnappinn þess í spjaldinu {{ui:Lög}}.
- **Útprentunin er í röngri stærð.** Prentarinn skalaði hana. Prentaðu í raunstærð.
- **{{key:Mod+P}} opnaði prentglugga vafrans.** Bendillinn var í reit í hægra spjaldinu, eða annar gluggi var opinn. Ýttu á {{key:Enter}} eða {{key:Esc}} til að yfirgefa reitinn, og reyndu síðan aftur, eða smelltu á {{ui:Prenta}}.
- **{{key:Mod+P}} gerði ekkert.** Skipun er í gangi. Ýttu fyrst á {{key:Esc}}.

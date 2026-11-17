---
title: Efnisskrár eftir svæðum
summary: Merktu svæði teikningar sem svæði og settu töflu fyrir hvert sem telur blokkirnar innan þess. Töflurnar fylgja teikningunni þegar þú vinnur, og þú velur hvaða dálka hver sýnir.
keywords: efnisskrá, BOM, hlutalisti, listi, svæði, flatarmál, tafla, telja, magn, eigind, dálkar, liðarnúmer, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Eitt **svæði** er nefnt flatarmál teikningarinnar. **Efnisskrártafla** listar það sem liggur innan eins svæðis, eða í allri teikningunni: hver blokk með magni sínu og gildum eigindanna. Teikning getur haft eins mörg svæði og töflur og þú þarft, og eitt svæði getur haft nokkrar töflur með mismunandi dálkum.

Tólin eru á {{ui:Blokkir}}-flipanum undir {{ui:Efnisskrá}}, í {{ui:Blokkir}}-hópnum í valmyndinni {{ui:Meira}}, og hægt er að skrifa þau.

## Búa til svæði

Skrifaðu {{cmd:BOMZONE}} og annað hvort

- smelltu á tvö gagnstæð horn fyrir rétthyrning,
- veldu {{ui:Marghyrningur}}, smelltu á hvert horn og ýttu á Enter til að loka því, eða
- veldu {{ui:Hlutur}} og veldu lokaða fjölínu, hring, sporbaug eða lokaða splínu. Útlína hans er afrituð; hluturinn helst eins og hann er.

Skrifaðu síðan heiti svæðisins. Svæðið er teiknað sem strikuð útlína með nafni sínu fyrir ofan efra vinstra hornið, á laginu `BOM-ZONES`, sem er ekki prentað. Kveiktu á prentun fyrir það lag ef þú vilt svæði á pappír.

Svæði er venjuleg lokuð fjölína: færðu það, teygðu það eða dragðu grip þess, og nafnið fylgir. Til að endurnefna svæði skaltu breyta texta nafnsins, eða nota {{cmd:BOMZONE}} og {{ui:Endurnefna}}. {{ui:Svæði}} listar hvert svæði og hversu margar töflur það hefur.

## Setja inn töflu

Skrifaðu {{cmd:BOMTABLE}} (eða {{cmd:BOM}}), veldu útlínu svæðisins eða nafn þess, gefðu upp textahæð og smelltu þar sem efra vinstra horn töflunnar á að fara. Ýttu á Enter í stað þess að velja svæði, eða veldu {{ui:Heild}}, fyrir töflu af allri teikningunni.

Ný tafla sýnir liðarnúmer, magn, heiti blokkar og dálk fyrir hverja eigind sem blokkirnar bera (þær fyrstu sex; hinar eru boðnar, ekki hakaðar). Blokkir með sama heiti og sömu eigindagildi deila línu.

## Hvað telst innan

- Blokk telst í því svæði sem geymir **innsetningarpunkt** hennar.
- Lína, bogi, hringur, fjölína, sporbaugur, splína eða skygging telst **heil** í því svæði sem geymir miðju útmarka sinna (fyrir línu, miðpunkt hennar). Lengd hennar er ekki skorin við brún svæðisins.
- Punktur nákvæmlega á brúninni er innan.
- Svæði mega skarast. Hvert svæði telur fyrir sig, þannig að hlutur í skörun er í báðum töflum.

## Töflur fylgja teikningunni

Þegar þú bætir við, færir, afritar eða eyðir blokk, breytir eigind, eða mótar eða færir svæði, er hverri töflu teiknað aftur í sama skrefi. Afturköllun tekur til baka breytinguna þína og töflubreytinguna saman.

Til að stöðva töflu í að fylgja skaltu haka við {{ui:Fryst}} í stillingum hennar. Fryst tafla breytist aðeins þegar þú breytir stillingum hennar eða skrifar {{cmd:BOMUPDATE}}, sem uppfærir allar töflur núna.

## Veldu dálkana

Veldu töflu og skrifaðu {{cmd:BOMEDIT}}. Í valmyndinni:

- **Dálkar**: hakaðu við þá sem þú vilt sýna (liður, magn, heiti, lag, lengd, flatarmál, athugasemdir og hver eigind), skrifaðu þína eigin fyrirsögn fyrir hvern þeirra, og færðu þá upp eða niður.
- {{ui:Hópa línur eftir}}: heiti blokkar og eigindagildi, aðeins heiti blokkar, lag, eða ein eigind. Í sameinaðri línu stendur „breytilegt“ þar sem gildi er mismunandi milli blokka.
- {{ui:Raða eftir}} hvaða dálk sem er, hækkandi eða lækkandi.
- {{ui:Titill}}, {{ui:Sýna titilinn}} og {{ui:Samtölulína}}.
- {{ui:Telja línuverk eftir lagi}} bætir einni línu við hvert lag með fjölda hluta, heildarlengd þeirra og, fyrir lokuð form, heildarflatarmáli þeirra, í einingum teikningarinnar.
- **Athugasemdir**: hakaðu við dálkinn Athugasemdir og skrifaðu síðan athugasemd fyrir hvaða línu sem er í töflunni neðst í valmyndinni.

Hver tafla heldur sínum eigin valkostum.

## Liðarnúmer

Lína heldur liðarnúmeri sínu svo lengi sem hún er í töflunni. Ný lína fær næsta laust númer, og númer sem hefur verið gefið er aldrei notað aftur, þannig að merkimiðar og athugasemdir sem vísa í númer haldast réttar. {{ui:Endurnúmera liði}} númerar þá frá 1 í þeirri röð sem sýnd er.

Lína er auðkennd eftir því sem hún hópar: breyttu hvernig línur eru hópaðar, eða breyttu eigindagildi sem hópunin notar, og línan telst ný.

## Útflutningur og önnur forrit

{{cmd:BOMEXPORT}}, eða {{ui:Flytja út CSV}} í valmyndinni, vistar töflu sem .csv-skrá fyrir töflureikni.

Í DWG- eða DXF-skrá er tafla venjuleg blokk af línum og texta, þannig að önnur forrit sýna hana og prenta eins og hún var teiknuð. Hún er ekki töfluhlutur þar, og hún uppfærist ekki í öðrum forritum. Tengingin við svæðið hennar er geymd í skránni sem viðbótargögn sem CadCraft les til baka, þannig að taflan er lifandi aftur þegar þú opnar teikninguna aftur í CadCraft. R12 DXF af teikningu án blaðs geymir ekki stillinguna „ekki prentað“ á lagi svæðisins.

Að sundra töflu breytir henni í lausar línur og texta og slítur tenginguna.

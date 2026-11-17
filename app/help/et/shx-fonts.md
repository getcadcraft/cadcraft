---
title: Joonista tekst oma SHX-fontidega
summary: Anna CadCraft'ile SHX-fontide kaust (või vali failid) ja tekstistiilid, mis nimetavad neid, joonistatakse nendega ekraanil ning plotis või PDF-is, koos stiili kõrguse, laiusteguri ja kaldega.
keywords: shx, fondid, font, kuju-font, big font, bigfont, unifont, pärand, persia, farsi, araabia, tekstistiil, puuduv font, asendatud font, SHXFONTS, kaust, pööra, visuaalne järjekord, simplex, isocp
from: 14b0a4ab
---

Teistelt programmidelt pärit joonised nimetavad oma tekstistiilides sageli **SHX-fonte**, ja DWG ei kanna neid kaasas. Ilma fondita joonistab CadCraft selle teksti oma kujuga, mis on korras tavalise ladina teksti puhul, kuid mitte vanade fontide puhul, mis kaardistavad tavalised märgikoodid teiste tähtede kujudeks, näiteks pärandiga persia märkuste puhul.

Anna CadCraftile fondid, ja see joonistab teksti nendega.

## Laadi oma fondid

Kirjuta {{cmd:SHXFONTS}} (`SHX`) ja vali:

- {{ui:Kaust}} (CadCraft Studio): vali kaust. Iga selles olev `.shx`-fail loetakse kohe ja jälle iga kord, kui CadCraft käivitub.
- {{ui:Failid}} (brauser): vali üks või mitu `.shx`-faili. Need hoitakse selles brauseris ja neid ei laadita kunagi üles.
- {{ui:Loend}}: laaditud fondid ja need, mida avatud joonis nimetab, kuid mida sa pole laadinud.
- {{ui:Eemalda}} ja {{ui:Tühjenda}}: unusta üks font või kõik.

CadCraft ei lisa kunagi ühtegi kolmanda osapoole fonti: need tulevad sinult. Joonis ainult nimetab oma fonte ega hoia nende koopiat.

## Mis juhtub

Tekstistiili fondinimi sobitatakse laaditud fondiga nime järgi, ilma suur- ja väiketähtedeta, kausta ja `.shx`-ta (`SIMPLEX.SHX` leiab `simplex`). Sellises stiilis tekst joonistatakse joontena ekraanil, plotis ja PDF-is, teksti enda kohas, kõrguses, pöördes, laiusteguris ja kaldenurgas. Selle laius on fondi enda oma, nii et joondus {{ui:Keskpunkt}} ja {{ui:Parem}}, murdmine ja valimine vastavad sellele, mida näed. Stiil, mille font ei ole laaditud, jääb sisseehitatud kujule, ja kui avad joonise, mis nimetab fonte, mida pole laadinud, ütleb käsurida seda.

Ka stiil Standard loeb: joonis, mille Standard-stiil nimetab oma fonti, jätab selle alles.

## Fondid juba visuaalses järjekorras

Paljud vanad persia ja araabia SHX-fondid hoiavad tähti juba ekraani jaoks kujundatult ja joonistavad need vasakult paremale, nii et loogilises järjekorras kirjutatud tekst tuleb tagurpidi. Kirjuta {{cmd:SHXFONTS}}, vali {{ui:Pööra}} ja nimeta font: selle tekst paigutatakse nüüd viimane täht esimesena. Käivita uuesti, et tagasi võtta. Lüliti kuulub fondile, jääb selle brauseri meelde ega salvestu joonisesse.

## Mida veel ei kata

- Tekst sisemiste vormingukoodidega (värvid, virnad MTEXT-is) jääb sisseehitatud kujule.
- Suured fondid (kahebaidilised) täidavad koodid, mida peamisel fondil puudub, kuid tekst Ida-Aasia koodilehel, mille CadCraft on juba Unicode'iks teisendanud, ei kaardistu tagasi fondi kahebaidilisteks koodideks.
- Fondilugeja järgib formaadi avaldatud kirjeldust ja seda testiti fontidega, mis on tehtud CadCraftile. Kui mõni sinu omadest joonistub valesti, saada meile font ja joonis.
